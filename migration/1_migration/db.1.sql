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
('user1', 'user1@email.com', '123', 1), 
('user2', 'user2@email.com', '123', 1),
('admin', 'admin@email.com', '123', 2);

INSERT INTO discs (name, artist, genre, release_year, label, price, cover, url)
VALUES 
('A Love Supreme', 'John Coltrane', 'Avant-garde jazz', 1965, 'Impulse!', 12.999, 'A _Love_Supreme.jpg', '7Eoz7hJvaX1eFkbpQxC5PA'), 
('Kind of Blue', 'Miles Davis', 'Modal jazz', 1959, '	Columbia', 12.999, 'Kind _of_Blue.jpg', '1weenld61qoidwYuZ1GESA');

INSERT INTO users_discs (discs_id, users_id)
VALUES (1, 2), (2, 1);

SELECT ud.discs_id, d.id as discs_id, d.name, d.artist, d.genre, d.release_year, d.label, d.price, d.cover, d.url from discs d
 inner join users_discs ud 
    on d.id = ud.discs_id
where ud.users_id = 1; 

