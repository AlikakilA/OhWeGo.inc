--- Base de données simpliste pour l'exemple

CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    mail TEXT NOT NULL
);



INSERT INTO messages (content) VALUES ('First');
INSERT INTO messages (content) VALUES ('Second');
INSERT INTO users (username,mail) VALUES ('first','first@mail.com');