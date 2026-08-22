-- name: GetUserByID :one
SELECT
    id,
    email,
    user_role,
    user_name,
    is_active,
    created_at,
    updated_at
FROM users
WHERE id = $1 AND is_active = TRUE
LIMIT 1;
