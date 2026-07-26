package config

import (
	"log/slog"
	"os"
	"time"

	"github.com/caarlos0/env/v11"
	"github.com/joho/godotenv"
)

type Config struct {
	Port    int           `env:"PORT,required"`
	Timeout time.Duration `env:"TIMEOUT,required"`
	DSN     string        `env:"DSN,required"`
	Root    string
}

func Load() (*Config, error) {
	if err := godotenv.Load(); err != nil {
		slog.Warn(".env file not found, using system environment")
	}

	root, err := os.Getwd()
	if err != nil {
		slog.Error("failed getting root", "err", err)
		os.Exit(1)
	}

	config := Config{
		Root: root,
	}

	if err := env.Parse(&config); err != nil {
		return nil, err
	}

	return &config, nil
}
