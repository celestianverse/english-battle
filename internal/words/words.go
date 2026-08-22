package words

import (
	"context"
	"english-battle/internal/config"
	"english-battle/internal/database"
	"math/rand/v2"

	"github.com/jackc/pgx/v5/pgxpool"
)

func Load(ctx context.Context, cfg *config.Config, pool *pgxpool.Pool) ([]database.Word, error) {
	queries := database.New(pool)

	words, err := queries.GetWords(ctx)
	if err != nil {
		return nil, err
	}

	return words, nil
}

func GetRandom25(words []database.Word) []database.Word {
	rand.Shuffle(len(words), func(i, j int) {
		words[i], words[j] = words[j], words[i]
	})

	return words[:25]
}
