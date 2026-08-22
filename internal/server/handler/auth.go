package handler

import (
	"encoding/json"
	"english-battle/internal/auth"
	"english-battle/internal/config"
	"english-battle/internal/database"
	"english-battle/internal/server/middleware"
	"errors"
	"log/slog"
	"net/http"
	"time"

	"github.com/jackc/pgx/v5"
)

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type UserResponse struct {
	ID       string `json:"id"`
	Email    string `json:"email"`
	Role     string `json:"role"`
	UserName string `json:"user_name"`
}

func Login(cfg *config.Config, queries *database.Queries) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Метод запрещён", http.StatusMethodNotAllowed)
			slog.Error("failed login: method not allowed")
			return
		}

		var req LoginRequest
		err := json.NewDecoder(r.Body).Decode(&req)
		if err != nil {
			http.Error(w, "Недопустимый запрос", http.StatusBadRequest)
			slog.Error("failed login: invalid request payload")
			return
		}

		user, err := queries.GetUserByEmail(r.Context(), req.Email)
		if err != nil {
			if errors.Is(err, pgx.ErrNoRows) {
				http.Error(w, "Неверный e-mail или пароль", http.StatusUnauthorized)
				slog.Error("failed login: invalid email or password")
				return
			}
			http.Error(w, "Ошибка сервера", http.StatusInternalServerError)
			slog.Error("failed login: internal server error")
			return
		}

		if !user.IsActive {
			http.Error(w, "Ошибка сервера", http.StatusInternalServerError)
			slog.Error("failed login: user not active")
			return
		}

		if !auth.CheckPassword(req.Password, user.PasswordHash) {
			http.Error(w, "Неверный e-mail или пароль", http.StatusUnauthorized)
			slog.Error("failed login: invalid email or password")
			return
		}

		token, err := auth.GenerateToken(cfg, user.ID)
		if err != nil {
			http.Error(w, "Ошибка токена", http.StatusInternalServerError)
			slog.Error("failed login: failed to generate token")
			return
		}

		http.SetCookie(w, &http.Cookie{
			Name:     cfg.JWTName,
			Value:    token,
			Path:     cfg.JWTPath,
			Expires:  time.Now().Add(cfg.JWTTTL),
			HttpOnly: true,
			Secure:   cfg.JWTSecure,
			SameSite: http.SameSiteLaxMode,
			MaxAge:   int(cfg.JWTTTL.Seconds()),
		})

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_ = json.NewEncoder(w).Encode(map[string]string{"message": "successful login"})

		slog.Info("successful login")
	}
}

func Logout(cfg *config.Config) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Метод запрещён", http.StatusMethodNotAllowed)
			slog.Error("failed logout: method not allowed")
			return
		}

		http.SetCookie(w, &http.Cookie{
			Name:     cfg.JWTName,
			Value:    "",
			Path:     cfg.JWTPath,
			Expires:  time.Unix(0, 0),
			HttpOnly: true,
			Secure:   cfg.JWTSecure,
			SameSite: http.SameSiteLaxMode,
			MaxAge:   -1,
		})

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_ = json.NewEncoder(w).Encode(map[string]string{"message": "successful logout"})

		slog.Info("successful logout")
	}
}

func Me(queries *database.Queries) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "Метод запрещён", http.StatusMethodNotAllowed)
			slog.Error("failed me: method not allowed")
			return
		}

		userID, ok := middleware.GetUserID(r.Context())
		if !ok || !userID.Valid {
			http.Error(w, "Требуется авторизация", http.StatusUnauthorized)
			slog.Error("failed me: unauthorized")
			return
		}

		user, err := queries.GetUserByID(r.Context(), userID)
		if err != nil {
			if errors.Is(err, pgx.ErrNoRows) {
				http.Error(w, "Пользователь не найден", http.StatusNotFound)
				slog.Error("failed me: user not found")
				return
			}
			http.Error(w, "Ошибка сервера", http.StatusInternalServerError)
			slog.Error("failed me: internal server error")
			return
		}

		resp := UserResponse{
			ID:       user.ID.String(),
			Email:    user.Email,
			Role:     user.UserRole,
			UserName: user.UserName.String,
		}

		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(resp)

		slog.Info("successful me")
	}
}
