SELECT users.user_id, username, pic, buddy_id, buddies.user_id, user_buddy FROM users
JOIN buddies ON users.user_id = buddies.user_buddy
WHERE buddies.user_id = 3;