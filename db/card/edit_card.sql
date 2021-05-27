UPDATE users
SET threeds = $2, switch = $3, pic = $4
WHERE user_id = $1
RETURNING *;