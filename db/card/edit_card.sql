UPDATE users
SET threeds = $2, switch = $3, profile_pic = $4
WHERE user_id = $1
RETURNING *;