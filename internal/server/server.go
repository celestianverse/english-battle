package server

import (
	"context"
	"english-battle/internal/config"
	"english-battle/internal/database"
	"english-battle/internal/server/handler"
	"english-battle/internal/server/middleware"
	"errors"
	"fmt"
	"log/slog"
	"net"
	"net/http"

	"github.com/jackc/pgx/v5/pgxpool"
)

func Start(ctx context.Context, cfg *config.Config, words []database.Word, pool *pgxpool.Pool) error {
	queries := database.New(pool)

	mux := http.NewServeMux()

	mux.HandleFunc("/", handler.Web(cfg))
	mux.HandleFunc("/health", handler.Health)
	mux.HandleFunc("/api/words", handler.RandomWords(words))
	mux.HandleFunc("/api/login", handler.Login(cfg, queries))
	mux.HandleFunc("/api/logout", handler.Logout(cfg))

	authMiddleware := middleware.RequireAuth(cfg)
	mux.Handle("/api/me", authMiddleware(handler.Me(queries)))

	serverHandler := middleware.CORS(cfg, mux)

	server := &http.Server{
		Addr:         fmt.Sprintf(":%d", cfg.ServerPort),
		Handler:      serverHandler,
		ReadTimeout:  cfg.TimeoutRead,
		WriteTimeout: cfg.TimeoutWrite,
		IdleTimeout:  cfg.TimeoutIdle,
	}

	listener, err := net.Listen("tcp", server.Addr)
	if err != nil {
		return err
	}
	slog.Info("started listening server")

	serverErr := make(chan error, 1)

	go func() {
		err := server.Serve(listener)
		if err != nil && !errors.Is(err, http.ErrServerClosed) {
			serverErr <- err
		}
	}()

	select {
	case <-ctx.Done():
		shutdownCtx, cancel := context.WithTimeout(
			context.Background(),
			cfg.TimeoutShutdown,
		)
		defer cancel()

		err := server.Shutdown(shutdownCtx)
		if err != nil {
			return err
		}

		slog.Info("stopped shutdown server")

		return nil
	case err := <-serverErr:
		return err
	}
}
