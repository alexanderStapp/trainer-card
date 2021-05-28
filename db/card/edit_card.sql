UPDATE users
SET threeds = $2, switch = $3, home = $4, pic = $5
WHERE user_id = $1
RETURNING *;