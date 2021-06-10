INSERT INTO users
(username, email, password, threeds, switch, home, pic)
VALUES
($1, $2, $3, '111111111111', '111111111111', 'AAAAAAAAAAAA', 1)
RETURNING *;