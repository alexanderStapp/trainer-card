SELECT users.user_id, username, pic, buddies.user_id, user_buddy, chibi, name1, name2, trade_id FROM users
JOIN buddies ON users.user_id = buddies.user_buddy
JOIN profile_pics ON users.pic = profile_pics.pic_id
JOIN trades ON buddies.user_buddy = trades.user_id
WHERE buddies.user_id = $1;