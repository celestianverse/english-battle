package logging

import (
	"log/slog"
	"os"
)

func New() *slog.Logger {
	handler := slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{
		Level: slog.LevelInfo,
	})

	logger := slog.New(handler).With(
		"service", "english-battle-app",
	)

	return logger
}
