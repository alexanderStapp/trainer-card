SELECT username FROM users
WHERE username LIKE '%' || $1 || '%'