SELECT users.user_id, username, pic, buddy_id, buddies.user_id, user_buddy, chibi FROM users
JOIN buddies ON users.user_id = buddies.user_buddy
JOIN profile_pics ON users.pic = profile_pics.pic_id
WHERE buddies.user_id = $1;