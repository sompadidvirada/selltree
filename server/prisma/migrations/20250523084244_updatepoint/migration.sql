/*
  Warnings:

  - A unique constraint covering the columns `[customerId]` on the table `points` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Customer_id_key` ON `customer`;

-- DropIndex
DROP INDEX `points_id_key` ON `points`;

-- CreateIndex
CREATE UNIQUE INDEX `points_customerId_key` ON `points`(`customerId`);
