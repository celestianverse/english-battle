package middleware

import (
	"english-battle/internal/config"
	"net/http"
)

func CORS(cfg *config.Config, next http.Handler) http.HandlerFunc {
	allowedOrigins := map[string]bool{
		cfg.WebLocalhostURL: true,
		cfg.ProdURL:         true,
	}

	return func(w http.ResponseWriter, r *http.Request) {
		origin := r.Header.Get("Origin")

		if allowedOrigins[origin] {
			w.Header().Set("Access-Control-Allow-Origin", origin)
			w.Header().Set("Access-Control-Allow-Credentials", "true")
		}

		if r.Method == http.MethodOptions {
			if !allowedOrigins[origin] {
				http.Error(w, "forbidden", http.StatusForbidden)
				return
			}

			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
			w.WriteHeader(http.StatusNoContent)

			return
		}

		next.ServeHTTP(w, r)
	}
}
