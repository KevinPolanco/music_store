CREATE DATABASE music_store;

CREATE TABLE user_type (
    id SERIAL PRIMARY KEY,
    description VARCHAR(50) 
);


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    type INT NOT NULL,
    foreign key (type) references user_type(id)
);


CREATE TABLE discs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    release_year INT NOT NULL,
    label VARCHAR(60) NOT NULL,
    price FLOAT NOT NULL,
    cover VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL
);


CREATE TABLE users_discs (
    discs_id INT,
    users_id INT,
    foreign key (discs_id) references discs(id),
    foreign key (users_id) references users(id)
);


INSERT INTO user_type (id, description)
VALUES (1, 'client'), (2, 'administrator');

INSERT INTO users (name, email, password, type)
VALUES 
('admin', 'admin@email.com', '$2a$10$Bow8h1mfrGC6NDCyaC0SDew03lOdPiBSly5x1g3D6obSUxz/YBV0i', 2);

INSERT INTO discs (name, artist, genre, release_year, label, price, cover, url)
VALUES 
('Moanin', 'Art Blakey', 'Hard bop', 1959, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/blakeyMoanin.jpg', '5PzlTnVafjgt5RtjTdIKoC'),
('The Big Beat', 'Art Blakey', 'Hard bop', 1960, 'Blue Note', 10.999, 'http://birkajazz.se/graphics2/blakeyBN4029.jpg', '3xTvTulNR8Ba1uk0oDaQbs');

-- INSERT INTO users_discs (discs_id, users_id)
-- VALUES (1, 2), (2, 1);

-- SELECT ud.users_id, d.id as discs_id, d.name, d.artist, d.genre, d.release_year, d.label, d.price, d.cover, d.url from discs d
--  inner join users_discs ud 
--     on d.id = ud.discs_id
-- where ud.users_id = 1; 

