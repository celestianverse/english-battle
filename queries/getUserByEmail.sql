-- name: GetUserByEmail :one
SELECT
    id,
    email,
    password_hash,
    user_role,
    user_name,
    is_active,
    created_at,
    updated_at
FROM users
WHERE email = $1 AND is_active = TRUE
LIMIT 1;
