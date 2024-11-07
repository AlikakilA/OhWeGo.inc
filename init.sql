--- Base de données simpliste pour l'exemple

CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL
);

INSERT INTO messages (content) VALUES ('Test de requetes GORM');
