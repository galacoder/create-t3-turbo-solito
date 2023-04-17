ALTER TABLE `accounts` MODIFY COLUMN `provider` varchar(50);
ALTER TABLE `accounts` MODIFY COLUMN `provider_account_id` varchar(100);
CREATE UNIQUE INDEX `provider_account_id_idx` ON `accounts` (`provider_account_id`);