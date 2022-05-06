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

INSERT INTO discs (name, artist, genre, release_year, label, price, cover, url)
VALUES 
('A Night in Tunisia', 'Art Blakey', 'Hard bop', 1961, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/blakeyTunisia.jpg', '0oGkNKWrFghBenF0j16VVW'),
('Mosaic', 'Art Blakey', 'Hard bop', 1961, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/blakeyMosaic.jpg', '0ROzOHhkPnjLnHFLJ49Xco'),
('Buhaina`s Delight', 'Art Blakey', 'Hard bop', 1961, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/blakeyBN4104.jpg', '1gGO3aUcdvI1dcANVs2qQ9'),
('The Freedom Rider', 'Art Blakey', 'Hard bop', 1964, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/blakeyBN4156.jpg', '72jnQGrWRPB8eMGLRgV5Zp'),
('Indestructible', 'Art Blakey', 'Hard bop', 1966, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/blakeyBN4193.jpg', '4qMDshn0sMrt3bf7C0mmCx'),
('Lee-Way', 'Lee Morgan', 'Jazz', 1960, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/morganLeeWay.jpg', '4tTGVQBdu5emlYtvf5ru9N'),
('The Rumproller', 'Lee Morgan', 'Jazz', 1965, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/morganRumproller.jpg', '3dMhT1ZhEeYk9NwzPAzi3u'),
('Cornbread', 'Lee Morgan', 'Hard bop', 1967, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/morganCornbread.jpg', '5aY4PliFxsCd55sgU5A2KQ'),
('In `n Out', 'Joe Henderson', 'Jazz', 1965, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/hendersonInOut.jpg', '4KI0kC5rANmc5YeXyNshDr'),
('Mode for Joe', 'Joe Henderson', 'Hard bop', 1966, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/hendersonMode.jpg', '5HC9Uo9bCl8uiWuSN3MfbD'),
('Night Dreamer', 'Wayne Shorter', 'Modal jazz', 1964, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/shorterNightDreamer.jpg', '2lcz9fPwBhtESyIFVGKvq6'),
('JuJu', 'Wayne Shorter', 'Post bop', 1965, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/shorterJuJu.jpg', '46VoobaZCtFPReElOHFEqq'),
('Speak No Evil', 'Wayne Shorter', 'Modal jazz', 1966, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/shorterEvil.jpg', '27Rl7A8jXEQOkIfUKOa6ZU'),
('The All Seeing Eye', 'Wayne Shorter', '	Avant-garde jazz', 1966, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/shorterEye.jpg', '4N4dY3g7Sm4mMNKwXC3ieT'),
('Adam`s Apple', 'Wayne Shorter', 'Hard bop', 1966, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/ShorterAdams.jpg', '4sxvTow8IffB0lisGJWb6Z'),
('Schizophrenia', 'Wayne Shorter', 'Post bop', 1969, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/shorterSchizo.jpg', '4Ngkptf4tipkoTOIjoF2kW'),
('Roll Call', 'Hank Mobley', 'Hard bop', 1961, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/mobleyRollCall.jpg', '2wXfYEZKGQlfy2hKZbwtU7'),
('Workout', 'Hank Mobley', 'Hard bop', 1962, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/mobleyWorkout.jpg', '2prCz4HRmedo4uyhAtXX9Q'),
('No Room for Squares', 'Hank Mobley', 'Hard bop', 1964, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/mobleyBN4149.jpg', '3qer0IWDm6mSLUJy4ji0Oi'),
('Dippin`', 'Hank Mobley', 'Hard bop', 1966, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/mobleyDippin.jpg', '3mx9Te2p8koxBI9oe1341j'),
('A Caddy for Daddy', 'Hank Mobley', 'Hard bop', 1967, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/mobleyBN4230.jpg', '1YhqCshhUkaBZvRA1l1tcS'),
('Maiden Voyage', 'Herbie Hancock', 'Modal jazz', 1965, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/hancockMaiden.jpg', '7huPJTTsWVt854oZkr88mf'),
('Takin` Off', 'Herbie Hancock', 'Hard bop', 1962, 'Blue Note', 12.999, 'http://birkajazz.se/graphics2/hancockTakinOff.jpg', '61bXefFZqGbVkmb7qzIIOl'),
('Round About Midnight', 'Miles Davis', 'Jazz', 1957, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/davisRoundMidnight.jpg', '3pINVX7qD70F8U4EUKQoyO'),
('Milestones', 'Miles Davis', 'Jazz', 1958, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/davisMilestones.jpg', '56I4vUYWQ4aXLiyfo8XuZv'),
('Kind of Blue', 'Miles Davis', 'Modal jazz', 1959, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/davisKind.jpg', '1weenld61qoidwYuZ1GESA'),
('Someday My Prince Will Come', 'Miles Davis', 'Modal jazz', 1961, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/davisPrince.jpg', '68A4o4tkirJRFYbO9Ag0YZ'),
('Bitches Brew', 'Miles Davis', 'Jazz fusion', 1970, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/davisMilesBitches.jpg', '3Q0zkOZEOC855ErOOJ1AdO'),
('Live-Evil', 'Miles Davis', 'Jazz fusion', 1971, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/DavisMilesLiveEvil.jpg', '4eK5DQxLCshZCUk6D5a8Q1'),
('Monk.', 'Thelonious Monk', 'Jazz', 1965, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/monkEugeneSmith.jpg', '6VvPxwIERAeyRv7VTh6Ofv'),
('Monk`s Blues', 'Thelonious Monk', 'Jazz', 1968, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/monkBlues.jpg', '5WuHIfyckUx0FPAG45aNFh'),
('Ellington at Newport', 'Duke Ellington', 'Jazz', 1956, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/ellingtonNewport.jpg', '0t41BkcZayaAsa0FdRelfz'),
('Such Sweet Thunder', 'Duke Ellington', 'Jazz', 1957, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/ellingtonThunder.jpg', '2atnsiXP0oFjUE7SGFdzNA'),
('Anatomy of a Murder', 'Duke Ellington', 'Jazz', 1959, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/ellingtonAnatomy.jpg', '3WbMnT3abDjzrCzZQ9WtLK'),
('Chet Baker & Strings', 'Chet Baker', 'Jazz', 1954, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/bakerStrings.jpg', '3XqAY7OEpV65JSAcDF8JXq'),
('Mingus Ah Um', 'Charles Mingus', 'Post-bop', 1959, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/mingusAhUm.jpg', '7pojWP7x9uEFSJgw765khA'),
('Mingus Dynasty', 'Charles Mingus', 'Jazz', 1960, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/mingusDynasty.jpg', '4J2iFLCLHjuA07RlzVzLKh'),
('Time Out', 'Dave Brubeck', 'Cool jazz', 1959, 'Columbia', 13.999, 'http://birkajazz.se/graphics2/brubeckTimeOut.jpg', '0nTTEAhCZsbbeplyDMIFuA'),
('Africa/Brass', 'John Coltrane', 'Avant-garde jazz', 1961, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/coltraneAfrica.jpg', '04nfBhMWMp1Y6zhl4o0psq'),
('Coltrane', 'John Coltrane', 'Hard bop', 1962, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/coltraneImpulse21.jpg', '4psHIcmcL3qo8UwEt7KC2R'),
('Impressions', 'John Coltrane', 'Avant-garde jazz', 1963, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/coltraneImpressions.jpg', '3Ot8usQajsFawIAsULDrqj'),
('Live at Birdland', 'John Coltrane', 'Avant-garde jazz', 1963, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/coltraneBirdland.jpg', '3bFxBCBwFQ8WGRghgoUxaU'),
('Crescent', 'John Coltrane', 'Avant-garde jazz', 1964, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/coltraneCrescent.jpg', '1G3jdGqZNUrC8ZDesZB8xp'),
('A Love Supreme', 'John Coltrane', 'Avant-garde jazz', 1965, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/coltraneLoveSupreme.jpg', '7Eoz7hJvaX1eFkbpQxC5PA'),
('Ascension', 'John Coltrane', 'Free jazz', 1966, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/coltraneAscension.jpg', '2TtadFmrnrFZecasfj0p4t'),
('Kulu Se Mama', 'John Coltrane', 'Avant-garde jazz', 1966, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/coltraneKulu.jpg', '58prqRgtdMtOi5ztZnjJya'),
('Expression', 'John Coltrane', 'Free jazz', 1967, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/coltraneExpression.jpg', '3EeViYdRAbHKKmIub6qqCm'),
('Live At The Village Vanguard Again!', 'John Coltrane', 'Free jazz', 1966, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/coltraneVanguardAgain.jpg', '0ehzMxNtB5utpINSc3cxjn'),
('Mingus Mingus...', 'Charles Mingus', 'Avant-garde jazz', 1964, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/mingusImpulse54.jpg', '12DCd8u80PoRIvBgjQrtuH'),
('Inception', 'McCoy Tyner', 'Post Bop', 1962, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/tynerInception.jpg', '28mQLO6qcMbaKfQB3qzCQK'),
('Live At Newport', 'McCoy Tyner', 'Post Bop', 1964, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/tynerNewport.jpg', '26lBmmgeplvXm9stlDQapz'),
('Today and Tomorrow', 'McCoy Tyner', 'Post Bop', 1964, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/tynerToday.jpg', '6MinQE3GG7Xb9GWrOoAWEz'),
('McCoy Tyner Plays Ellington', 'McCoy Tyner', 'Post Bop', 1965, 'Impulse!', 16.999, 'http://birkajazz.se/graphics2/tynerEllington.jpg', '0oaA1qdVdWGmNYW2D1js9z');


