package auth

import (
	"english-battle/internal/config"
	"errors"
	"fmt"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/jackc/pgx/v5/pgtype"
)

var ErrInvalidToken = errors.New("invalid or expired token")

func GenerateToken(cfg *config.Config, userID pgtype.UUID) (string, error) {
	if !userID.Valid {
		return "", errors.New("invalid user id")
	}

	claims := jwt.RegisteredClaims{
		Subject:   userID.String(),
		ExpiresAt: jwt.NewNumericDate(time.Now().Add(cfg.JWTTTL)),
		IssuedAt:  jwt.NewNumericDate(time.Now()),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedToken, err := token.SignedString([]byte(cfg.JWTSecret))
	if err != nil {
		return "", fmt.Errorf("failed to sign token: %w", err)
	}

	return signedToken, nil
}

func ValidateToken(cfg *config.Config, userToken string) (pgtype.UUID, bool, error) {
	var userID pgtype.UUID
	refresh := false

	token, err := jwt.ParseWithClaims(userToken, &jwt.RegisteredClaims{}, func(token *jwt.Token) (any, error) {
		_, ok := token.Method.(*jwt.SigningMethodHMAC)
		if !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(cfg.JWTSecret), nil
	})

	if err != nil || !token.Valid {
		return userID, refresh, ErrInvalidToken
	}

	claims, ok := token.Claims.(*jwt.RegisteredClaims)
	if !ok {
		return userID, refresh, ErrInvalidToken
	}

	err = userID.Scan(claims.Subject)
	if err != nil {
		return userID, refresh, fmt.Errorf("failed to parse user id from token: %w", err)
	}

	if claims.IssuedAt != nil && time.Since(claims.IssuedAt.Time) >= cfg.JWTRefresh {
		refresh = true
	}

	return userID, refresh, nil
}
