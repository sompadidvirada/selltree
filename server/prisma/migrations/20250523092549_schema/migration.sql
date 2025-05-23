-- AlterTable
ALTER TABLE `employye` ADD COLUMN `brachId` INTEGER NULL;

-- CreateTable
CREATE TABLE `brach` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `brach_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `waitOrder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brachId` INTEGER NOT NULL,
    `waitNumber` INTEGER NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `waitOrder_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employye` ADD CONSTRAINT `Employye_brachId_fkey` FOREIGN KEY (`brachId`) REFERENCES `brach`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `waitOrder` ADD CONSTRAINT `waitOrder_brachId_fkey` FOREIGN KEY (`brachId`) REFERENCES `brach`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
