INSERT INTO users
(username, password, threeds, switch, pic)
VALUES
($1, $2, '111111111111', '111111111111', 1)
RETURNING *;