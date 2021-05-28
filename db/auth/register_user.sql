INSERT INTO users
(username, password, threeds, switch, home, pic)
VALUES
($1, $2, '111111111111', '111111111111', 'AAAAAAAAAAAA', 1)
RETURNING *;