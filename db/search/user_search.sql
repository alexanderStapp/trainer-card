SELECT username, user_id FROM users
WHERE username LIKE '%' || $1 || '%';