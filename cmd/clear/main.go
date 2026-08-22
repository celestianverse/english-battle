package main

import (
	"context"
	"english-battle/internal/config"
	"log/slog"
	"os"
	"os/signal"
	"syscall"

	"github.com/jackc/pgx/v5"
)

func main() {
	err := run()
	if err != nil {
		slog.Error("failed clear words", "err", err)
		os.Exit(1)
	}
}

func run() error {
	cfg, err := config.Load()
	if err != nil {
		return err
	}

	ctx, cancel := signal.NotifyContext(
		context.Background(),
		syscall.SIGINT,
		syscall.SIGTERM,
	)
	defer cancel()

	conn, err := pgx.Connect(ctx, cfg.DSNLocal)
	if err != nil {
		return err
	}
	defer conn.Close(ctx)

	_, err = conn.Exec(ctx, "TRUNCATE TABLE words RESTART IDENTITY")
	if err != nil {
		return err
	}

	slog.Info("successful clear words")

	return nil
}
