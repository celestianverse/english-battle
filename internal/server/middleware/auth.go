package middleware

import (
	"context"
	"english-battle/internal/auth"
	"english-battle/internal/config"
	"log/slog"
	"net/http"
	"time"

	"github.com/jackc/pgx/v5/pgtype"
)

type contextKey string

const UserIDContextKey contextKey = "userID"

func RequireAuth(cfg *config.Config) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			cookie, err := r.Cookie(cfg.JWTName)
			if err != nil {
				http.Error(w, "Unauthorized", http.StatusUnauthorized)
				return
			}

			userID, refresh, err := auth.ValidateToken(cfg, cookie.Value)
			if err != nil {
				http.Error(w, "Unauthorized", http.StatusUnauthorized)
				return
			}

			if refresh {
				newToken, err := auth.GenerateToken(cfg, userID)
				if err != nil {
					slog.Error("failed refresh token")
				} else {
					http.SetCookie(w, &http.Cookie{
						Name:     cfg.JWTName,
						Value:    newToken,
						Path:     cfg.JWTPath,
						Expires:  time.Now().Add(cfg.JWTTTL),
						HttpOnly: true,
						Secure:   cfg.JWTSecure,
						SameSite: http.SameSiteLaxMode,
						MaxAge:   int(cfg.JWTTTL.Seconds()),
					})
				}
			}

			ctx := context.WithValue(r.Context(), UserIDContextKey, userID)
			next.ServeHTTP(w, r.WithContext(ctx))
		})
	}
}

func GetUserID(ctx context.Context) (pgtype.UUID, bool) {
	userID, ok := ctx.Value(UserIDContextKey).(pgtype.UUID)

	return userID, ok
}
