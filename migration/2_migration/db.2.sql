CREATE DATABASE music_store;

CREATE TABLE user_type (
  id SERIAL PRIMARY KEY,
  description VARCHAR(50) 
);


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  type INT NOT NULL,
  FOREIGN KEY (type) REFERENCES user_type(id)
);


CREATE TABLE discs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  artist VARCHAR(100) NOT NULL,
  genre VARCHAR(50) NOT NULL,
  release_year INT NOT NULL,
  label VARCHAR(60) NOT NULL,
  price FLOAT NOT NULL,
  cover VARCHAR(255) NOT NULL,
  url VARCHAR(255) UNIQUE NOT NULL
);


CREATE TABLE users_discs (
  discs_id INT,
  users_id INT,
  FOREIGN KEY (discs_id) REFERENCES discs(id),
  FOREIGN KEY (users_id) REFERENCES users(id)
);


INSERT INTO user_type (id, description)
VALUES (1, 'client'), (2, 'administrator');

INSERT INTO users (name, email, password, type)
VALUES 
('admin', 'admin@email.com', '$2a$10$Bow8h1mfrGC6NDCyaC0SDew03lOdPiBSly5x1g3D6obSUxz/YBV0i', 2);

