INSERT INTO places (id, name, category, address, longitude, latitude, rating, photo_url, description, created_at, updated_at)
VALUES
    (1, 'Musée du Louvre', 'Musée', 'Rue de Rivoli, 75001 Paris, France', '2.3358', '48.8606', 5, 'https://example.com/louvre.jpg', 'Le plus grand musée d\'art du monde.', NOW(), NOW()),
    (2, 'La Tour Eiffel', 'Monument', 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France', '2.2945', '48.8584', 5, 'https://example.com/eiffel.jpg', 'Le symbole emblématique de Paris.', NOW(), NOW()),
    (3, 'Restaurant Le Gourmet', 'Restaurant', '12 Rue de la Cuisine, 75008 Paris, France', '2.3172', '48.8748', 4, 'https://example.com/restaurant.jpg', 'Restaurant gastronomique renommé.', NOW(), NOW()),
    (4, 'Salle de Concert Zenith', 'Concert', '211 Avenue Jean Jaurès, 75019 Paris, France', '2.3935', '48.8898', 4, 'https://example.com/zenith.jpg', 'Lieu incontournable pour des concerts.', NOW(), NOW()),
    (5, 'Cinéma Grand Rex', 'Divertissement', '1 Boulevard Poissonnière, 75002 Paris, France', '2.3486', '48.8719', 4, 'https://example.com/rex.jpg', 'Cinéma historique à Paris.', NOW(), NOW());

INSERT INTO users (id, username, email, password_hash, created_at, updated_at)
VALUES
    (1, 'john_doe', 'john@example.com', 'hashed_password_123', NOW(), NOW()),
    (2, 'jane_doe', 'jane@example.com', 'hashed_password_456', NOW(), NOW()),
    (3, 'alice', 'alice@example.com', 'hashed_password_789', NOW(), NOW()),
    (4, 'bob', 'bob@example.com', 'hashed_password_101', NOW(), NOW());

INSERT INTO favorites (id, user_id, place_id, created_at, updated_at)
VALUES
    (1, 1, 1, NOW(), NOW()), -- John Doe aime le Musée du Louvre
    (2, 2, 3, NOW(), NOW()), -- Jane Doe aime Restaurant Le Gourmet
    (3, 3, 2, NOW(), NOW()), -- Alice aime la Tour Eiffel
    (4, 4, 5, NOW(), NOW()); -- Bob aime le Cinéma Grand Rex

INSERT INTO likes (id, user_id, place_id, created_at, updated_at)
VALUES
    (1, 1, 2, NOW(), NOW()), -- John aime la Tour Eiffel
    (2, 2, 1, NOW(), NOW()), -- Jane aime le Louvre
    (3, 3, 3, NOW(), NOW()), -- Alice aime le Restaurant Le Gourmet
    (4, 4, 4, NOW(), NOW()); -- Bob aime la Salle de Concert Zenith

INSERT INTO dislikes (id, user_id, place_id, created_at, updated_at)
VALUES
    (1, 1, 3, NOW(), NOW()), -- John n'aime pas le Restaurant Le Gourmet
    (2, 2, 5, NOW(), NOW()), -- Jane n'aime pas le Cinéma Grand Rex
    (3, 3, 4, NOW(), NOW()); -- Alice n'aime pas la Salle de Concert Zenith


INSERT INTO friends (id, user_id, friend_id, status, created_at, updated_at)
VALUES
    (1, 1, 2, 'accepted', NOW(), NOW()), -- John et Jane sont amis
    (2, 3, 4, 'pending', NOW(), NOW()), -- Alice a envoyé une demande à Bob
    (3, 2, 3, 'refused', NOW(), NOW()); -- Jane a refusé Alice

INSERT INTO notifications (id, category, user_id, sourceuser_id, created_at, content, is_read, updated_at)
VALUES
    (1, 'friend_request', 2, 3, NOW(), 'Alice vous a envoyé une demande d\'ami.', false, NOW()),
    (2, 'like', 1, 4, NOW(), 'Bob a aimé un lieu que vous avez partagé.', true, NOW()),
    (3, 'dislike', 3, 2, NOW(), 'Jane n\'a pas aimé votre suggestion.', false, NOW());

INSERT INTO profiles (id, username, user_id, like, dislike, photo_url, created_at, updated_at)
VALUES
    (1, 'john_doe', 1, 10, 2, 'https://example.com/john.jpg', NOW(), NOW()),
    (2, 'jane_doe', 2, 8, 1, 'https://example.com/jane.jpg', NOW(), NOW()),
    (3, 'alice', 3, 15, 3, 'https://example.com/alice.jpg', NOW(), NOW()),
    (4, 'bob', 4, 7, 4, 'https://example.com/bob.jpg', NOW(), NOW());
