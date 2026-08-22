package main

import (
	"context"
	"errors"
	"fmt"
	"log/slog"
	"os"
	"os/signal"
	"strings"
	"syscall"

	"english-battle/internal/auth"
	"english-battle/internal/config"
	"english-battle/internal/database"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
)

func main() {
	err := run()
	if err != nil {
		slog.Error("failed create admin", "err", err)
		os.Exit(1)
	}
}

func run() error {
	cfg, err := config.Load()
	if err != nil {
		return err
	}

	ctx, cancel := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer cancel()

	email := cfg.WebAdminEmail
	password := cfg.WebAdminPassword
	userName := cfg.WebAdminName

	if email == "" {
		return errors.New("email is required")
	}
	if password == "" {
		return errors.New("password is required")
	}
	if userName == "" {
		return errors.New("user_name is required")
	}
	if err := validateEmail(email); err != nil {
		return err
	}

	passwordHash, err := auth.HashPassword(password)
	if err != nil {
		return fmt.Errorf("hash password: %w", err)
	}

	conn, err := pgx.Connect(ctx, cfg.DSNLocal)
	if err != nil {
		return fmt.Errorf("connect to database: %w", err)
	}
	defer conn.Close(ctx)

	queries := database.New(conn)

	err = queries.CreateUser(
		ctx,
		database.CreateUserParams{
			Email:        email,
			PasswordHash: string(passwordHash),
			UserRole:     "admin",
			UserName:     text(userName),
		},
	)
	if err != nil {
		return fmt.Errorf("query CreateUser: %w", err)
	}

	slog.Info("successful create admin", "email", email, "user_name", userName)

	return nil
}

func text(value string) pgtype.Text {
	return pgtype.Text{
		String: value,
		Valid:  value != "",
	}
}

func validateEmail(email string) error {
	if !strings.Contains(email, "@") {
		return fmt.Errorf("invalid admin email: %q", email)
	}

	return nil
}
