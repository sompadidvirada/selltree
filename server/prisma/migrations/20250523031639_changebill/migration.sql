-- DropForeignKey
ALTER TABLE `customerbill` DROP FOREIGN KEY `CustomerBill_customerId_fkey`;

-- DropIndex
DROP INDEX `CustomerBill_customerId_key` ON `customerbill`;

-- AddForeignKey
ALTER TABLE `CustomerBill` ADD CONSTRAINT `CustomerBill_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
