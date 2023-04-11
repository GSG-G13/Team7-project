

BEGIN;

DROP TABLE IF EXISTS users, posts;

CREATE TABLE users (
    id SERIAL PRIMARY KEY ,
    name VARCHAR(20) NOT NULL ,
    
    email VARCHAR(60) NOT NULL,
    img_url VARCHAR(255) 
);

INSERT INTO users (name, email, img_url) VALUES 
('Khaled','khaled.f.toha@gmail.com', 'https://plus.unsplash.com/premium_photo-1670985631837-60435eb933e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),
('Momen' , 'xxx-xxxx@gmail.com', 'https://api.dicebear.com/6.x/personas/svg?seed=Maggie');


CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    title TEXT NOT NULL,
    post_img Text NOT NULL,
    post_date DATE NOT NULL
);

INSERT INTO posts (user_id, title,  post_date, post_img) VALUES 
(1, 'HELLO', '2023-04-05', 'https://images.unsplash.com/photo-1668936132135-f2844ef1735b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDc2ODQ0Mg&ixlib=rb-4.0.3&q=80&w=1080');

COMMIT;