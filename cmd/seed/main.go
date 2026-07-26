package main

import (
	"context"
	"encoding/csv"
	"english-battle/internal/config"
	"english-battle/internal/db"
	"errors"
	"fmt"
	"io"
	"log/slog"
	"os"
	"os/signal"
	"path/filepath"
	"slices"
	"strings"
	"syscall"

	"github.com/jackc/pgx/v5"
)

func main() {
	count, err := run()
	if err != nil {
		slog.Error("failed seed", "word", count, "err", err)
		os.Exit(1)
	}
}

func run() (int, error) {
	count := 1

	cfg, err := config.Load()
	if err != nil {
		return count, err
	}

	ctx, cancel := signal.NotifyContext(
		context.Background(),
		os.Interrupt,
		syscall.SIGTERM,
	)
	defer cancel()

	conn, err := pgx.Connect(ctx, cfg.DSN)
	if err != nil {
		return count, err
	}
	defer conn.Close(ctx)

	tx, err := conn.Begin(ctx)
	if err != nil {
		return count, err
	}
	defer tx.Rollback(ctx)

	queries := db.New(tx)

	path := filepath.Join(cfg.Root, "data/words-a1.csv")
	file, err := os.Open(path)
	if err != nil {
		return count, err
	}
	slog.Info("loading seed file", "path", path)
	defer file.Close()

	reader := csv.NewReader(file)
	reader.Comma = ';'
	reader.FieldsPerRecord = 3
	reader.TrimLeadingSpace = true

	expectedHeader := []string{"english", "russian", "difficulty"}
	header, err := reader.Read()
	if err != nil {
		return count, err
	}
	if !slices.Equal(header, expectedHeader) {
		return count, fmt.Errorf("invalid csv header: %#v", header)
	}
	slog.Info("loaded csv", "columns", header)

	for {
		row, err := reader.Read()
		if errors.Is(err, io.EOF) {
			break
		}
		if err != nil {
			return count, err
		}

		err = queries.CreateWord(
			ctx,
			db.CreateWordParams{
				English:    strings.TrimSpace(row[0]),
				Russian:    strings.TrimSpace(row[1]),
				Difficulty: strings.TrimSpace(row[2]),
			},
		)
		if err != nil {
			return count, err
		}

		count++
	}

	err = tx.Commit(ctx)
	if err != nil {
		return count, err
	}

	slog.Info("successful seed", "words", count, "path", path)

	return count, nil
}
