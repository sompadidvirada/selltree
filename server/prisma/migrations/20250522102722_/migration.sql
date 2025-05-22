/*
  Warnings:

  - A unique constraint covering the columns `[customerId]` on the table `CustomerBill` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `CustomerBill_customerId_key` ON `CustomerBill`(`customerId`);
