CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(1000),
    threeds VARCHAR(20),
    switch VARCHAR(20),
    home VARCHAR(20),
    pic INT REFERENCES profile_pics(pic_id)
);

CREATE TABLE requests (
    request_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    poke_ID INT,
    notes VARCHAR(100)
);

CREATE TABLE buddies (
    buddy_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    user_buddy INT REFERENCES users(user_id)
);

CREATE TABLE profile_pics (
    pic_id SERIAL PRIMARY KEY,
    profile_pic VARCHAR(3000)
    chibi VARCHAR(2000)
);