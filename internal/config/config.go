package config

import (
	"log/slog"
	"time"

	"github.com/caarlos0/env/v11"
	"github.com/joho/godotenv"
)

type Config struct {
	Port    int           `env:"PORT,required"`
	Timeout time.Duration `env:"TIMEOUT,required"`
}

func Load() (*Config, error) {
	if err := godotenv.Load(); err != nil {
		slog.Warn(".env file not found, using system environment")
	}

	var config Config

	if err := env.Parse(&config); err != nil {
		return nil, err
	}

	return &config, nil
}
