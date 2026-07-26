-- +goose Up
CREATE TABLE words (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    english TEXT UNIQUE NOT NULL,
    russian TEXT UNIQUE NOT NULL,
    difficulty TEXT NOT NULL CHECK (difficulty IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2'))
);

-- +goose Down
DROP TABLE IF EXISTS words;
