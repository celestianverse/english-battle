package server

import (
	"context"
	"encoding/json"
	"english-battle/internal/config"
	"english-battle/internal/db"
	"english-battle/internal/words"
	"errors"
	"fmt"
	"log/slog"
	"net/http"
	"os"
	"path/filepath"
)

type app struct {
	cfg   *config.Config
	words []db.Word
}

func (a *app) webHandler(w http.ResponseWriter, r *http.Request) {
	dist := filepath.Join(a.cfg.Root, "web/dist")
	path := filepath.Clean(r.URL.Path)
	filePath := filepath.Join(dist, path)

	info, err := os.Stat(filePath)
	if err == nil && !info.IsDir() {
		http.ServeFile(w, r, filePath)
		return
	}

	http.ServeFile(w, r, filepath.Join(dist, "index.html"))
}

func (a *app) wordsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	random := words.GetRandom25(a.words)

	err := json.NewEncoder(w).Encode(random)
	if err != nil {
		slog.Error("failed encode words", "err", err)
		return
	}
}

func Start(ctx context.Context, cfg *config.Config, words []db.Word) error {
	app := &app{
		cfg:   cfg,
		words: words,
	}

	mux := http.NewServeMux()

	mux.HandleFunc("/", app.webHandler)
	mux.HandleFunc("/api/words", app.wordsHandler)

	server := &http.Server{
		Addr:         fmt.Sprintf(":%d", cfg.Port),
		Handler:      mux,
		ReadTimeout:  cfg.TimeoutRead,
		WriteTimeout: cfg.TimeoutWrite,
		IdleTimeout:  cfg.TimeoutIdle,
	}

	serverErr := make(chan error, 1)
	go func() {
		slog.Info("starting server", "port", cfg.Port)
		err := server.ListenAndServe()
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
