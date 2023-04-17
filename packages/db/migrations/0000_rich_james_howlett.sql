CREATE TABLE `accounts` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` varchar(255),
	`type` text,
	`provider` text,
	`provider_account_id` text,
	`refresh_token` text,
	`access_token` text,
	`expires_at` timestamp,
	`token_type` text,
	`scope` text,
	`id_token` text,
	`session_state` text
);

CREATE TABLE `posts` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`title` text,
	`content` text
);

CREATE TABLE `sessions` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`session_token` varchar(255),
	`user_id` varchar(255),
	`expires` timestamp
);

CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` text,
	`email` text,
	`email_verified` timestamp,
	`image` text
);

CREATE TABLE `verificationTokens` (
	`identifier` text,
	`token` text,
	`expires` timestamp
);

CREATE UNIQUE INDEX `user_id_idx` ON `accounts` (`user_id`);
CREATE UNIQUE INDEX `provider_idx` ON `accounts` (`provider`);
CREATE UNIQUE INDEX `session_token_idx` ON `sessions` (`session_token`);