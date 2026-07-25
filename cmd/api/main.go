package main

import (
	"english-battle/internal/config"
	"english-battle/internal/logging"
	"fmt"
	"log/slog"
	"net/http"
	"os"
)

type Handler struct{}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	if _, err := w.Write([]byte("working server")); err != nil {
		slog.Error("failed write response")
	}
	slog.Info("successful write response")
}

func main() {
	logger := logging.New()
	slog.SetDefault(logger)

	cfg, err := config.Load()
	if err != nil {
		slog.Error("failed load config", "err", err)
		os.Exit(1)
	}

	mux := http.NewServeMux()

	mux.HandleFunc("/", homeHandler)

	server := &http.Server{
		Addr:         fmt.Sprintf(":%d", cfg.Port),
		Handler:      mux,
		ReadTimeout:  cfg.Timeout,
		WriteTimeout: cfg.Timeout,
	}

	slog.Info("starting server")
	if err := server.ListenAndServe(); err != nil {
		slog.Error("failed server", "err", err)
	}
}
