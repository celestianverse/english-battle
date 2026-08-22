package config

import (
	"log/slog"
	"os"
	"time"

	"github.com/caarlos0/env/v11"
	"github.com/joho/godotenv"
)

type Config struct {
	ProdURL         string        `env:"PROD_URL,required"`
	ServerPort      int           `env:"SERVER_PORT,required"`
	TimeoutRead     time.Duration `env:"TIMEOUT_READ,required"`
	TimeoutWrite    time.Duration `env:"TIMEOUT_WRITE,required"`
	TimeoutIdle     time.Duration `env:"TIMEOUT_IDLE,required"`
	TimeoutShutdown time.Duration `env:"TIMEOUT_SHUTDOWN,required"`

	DSN      string `env:"DSN,required"`
	DSNLocal string `env:"DSN_LOCAL,required"`

	WebAdminEmail    string `env:"WEB_ADMIN_EMAIL"`
	WebAdminPassword string `env:"WEB_ADMIN_PASSWORD"`
	WebAdminName     string `env:"WEB_ADMIN_NAME"`
	WebLocalhostURL  string `env:"WEB_LOCALHOST_URL,required"`

	JWTSecret  string        `env:"JWT_SECRET,required"`
	JWTName    string        `env:"JWT_NAME,required"`
	JWTPath    string        `env:"JWT_PATH,required"`
	JWTSecure  bool          `env:"JWT_SECURE,required"`
	JWTTTL     time.Duration `env:"JWT_TTL,required"`
	JWTRefresh time.Duration `env:"JWT_REFRESH,required"`

	Root string
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
