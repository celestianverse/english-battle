-- name: CreateUser :exec
INSERT INTO users (
    email,
    password_hash,
    user_role,
    user_name
)
VALUES (
    $1,
    $2,
    $3,
    $4
);
