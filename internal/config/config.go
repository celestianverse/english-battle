package config

import (
	"log/slog"
	"os"
	"time"

	"github.com/caarlos0/env/v11"
	"github.com/joho/godotenv"
)

type Config struct {
	Port            int           `env:"PORT,required"`
	TimeoutRead     time.Duration `env:"TIMEOUT_READ,required"`
	TimeoutWrite    time.Duration `env:"TIMEOUT_WRITE,required"`
	TimeoutIdle     time.Duration `env:"TIMEOUT_IDLE,required"`
	TimeoutShutdown time.Duration `env:"TIMEOUT_SHUTDOWN,required"`
	DSN             string        `env:"DSN,required"`
	DSNLocal        string        `env:"DSN_LOCAL,required"`
	WebLocalhost    string        `env:"WEB_LOCALHOST,required"`
	Root            string
}

func Load() (*Config, error) {
	if err := godotenv.Load(); err != nil {
		slog.Info("using environment variables instead .env")
	}

	root, err := os.Getwd()
	if err != nil {
		return nil, err
	}

	config := Config{
		Root: root,
	}

	if err := env.Parse(&config); err != nil {
		return nil, err
	}

	return &config, nil
}
