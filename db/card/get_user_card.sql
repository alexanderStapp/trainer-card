SELECT * FROM users
JOIN profile_pics ON users.pic = profile_pics.pic_id
WHERE username = $1;