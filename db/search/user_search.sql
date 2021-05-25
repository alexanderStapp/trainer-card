SELECT * FROM users
WHERE username LIKE %$1%
RETURNING username;