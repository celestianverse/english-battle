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
	err := run()
	if err != nil {
		slog.Error("failed", "err", err)
		os.Exit(1)
	}
}

func run() error {
	logger := logging.New()
	slog.SetDefault(logger)

	cfg, err := config.Load()
	if err != nil {
		return err
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
	err = server.ListenAndServe()
	if err != nil {
		return err
	}

	return nil
}
