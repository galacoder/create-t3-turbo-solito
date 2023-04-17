
-- Seed data for Users
INSERT INTO `users` (`name`, `email`, `emailVerified`, `image`)
VALUES ('Alice', 'alice@example.com', NOW(), 'https://alice.example.com/image.jpg');

INSERT INTO `users` (`name`, `email`, `emailVerified`, `image`)
VALUES ('Bob', 'bob@example.com', NOW(), 'https://bob.example.com/image.jpg');

INSERT INTO `users` (`name`, `email`, `emailVerified`, `image`)
VALUES ('Carol', 'carol@example.com', NOW(), 'https://carol.example.com/image.jpg');

-- Seed data for Posts
INSERT INTO `posts` (`title`, `content`)
VALUES ('Hello World', 'Welcome to our blog!');

INSERT INTO `posts` (`title`, `content`)
VALUES ('A day in the life', 'Today, we will explore the daily life of a software engineer.');

INSERT INTO `posts` (`title`, `content`)
VALUES ('The future of AI', 'In this post, we will discuss the exciting possibilities of artificial intelligence.');
