package handler

import (
	"english-battle/internal/config"
	"net/http"
	"os"
	"path/filepath"
)

func Web(cfg *config.Config) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		dist := filepath.Join(cfg.Root, "web/dist")
		path := filepath.Clean(r.URL.Path)
		filePath := filepath.Join(dist, path)
		index := filepath.Join(dist, "index.html")

		info, err := os.Stat(filePath)
		if err == nil && !info.IsDir() {
			http.ServeFile(w, r, filePath)
			return
		}

		http.ServeFile(w, r, index)
	}
}
