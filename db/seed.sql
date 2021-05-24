CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(1000),
    threeds VARCHAR(12),
    switch VARCHAR(12),
    profile_pic TEXT
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
