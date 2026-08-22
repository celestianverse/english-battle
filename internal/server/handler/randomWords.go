package handler

import (
	"encoding/json"
	"english-battle/internal/database"
	"english-battle/internal/words"
	"log/slog"
	"net/http"
)

func RandomWords(list []database.Word) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		random25 := words.GetRandom25(list)

		if err := json.NewEncoder(w).Encode(random25); err != nil {
			slog.Error("failed to encode words", "err", err)
			return
		}
	}
}
