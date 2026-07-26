-- name: CreateWord :exec
INSERT INTO words (
    english,
    russian,
    difficulty
)
VALUES (
    $1,
    $2,
    $3
)
ON CONFLICT DO NOTHING;
