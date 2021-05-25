UPDATE users
SET threeds = $2, switch = $3
WHERE user_id = $1;