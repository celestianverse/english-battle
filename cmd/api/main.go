package main

import (
	"context"
	"english-battle/internal/config"
	"english-battle/internal/logging"
	"english-battle/internal/server"
	"english-battle/internal/words"
	"log/slog"
	"os"
	"os/signal"
	"syscall"
)

func main() {
	logger := logging.New()
	slog.SetDefault(logger)
	slog.Info("started app")

	cfg, err := config.Load()
	if err != nil {
		slog.Error("failed load config", "err", err)
		os.Exit(1)
	}
	slog.Info("loaded config")

	ctx, cancel := signal.NotifyContext(
		context.Background(),
		os.Interrupt,
		syscall.SIGTERM,
	)
	defer cancel()

	err = run(ctx, cfg)
	if err != nil {
		slog.Error("failed app run", "err", err)
		os.Exit(1)
	}
	slog.Info("stopped app gracefully")
}

func run(ctx context.Context, cfg *config.Config) error {
	words, err := words.Load(ctx, cfg)
	if err != nil {
		return err
	}
	slog.Info("loaded words", "count", len(words))

	err = server.Start(ctx, cfg, words)
	if err != nil {
		return err
	}

	return nil
}
