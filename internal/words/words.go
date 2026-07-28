package words

import (
	"context"
	"english-battle/internal/config"
	"english-battle/internal/db"
	"math/rand/v2"

	"github.com/jackc/pgx/v5"
)

func Load(ctx context.Context, cfg *config.Config) ([]db.Word, error) {
	conn, err := pgx.Connect(ctx, cfg.DSN)
	if err != nil {
		return nil, err
	}
	defer conn.Close(ctx)

	queries := db.New(conn)

	words, err := queries.GetWords(ctx)
	if err != nil {
		return nil, err
	}

	return words, nil
}

func GetRandom25(words []db.Word) []db.Word {
	rand.Shuffle(len(words), func(i, j int) {
		words[i], words[j] = words[j], words[i]
	})

	return words[:25]
}
