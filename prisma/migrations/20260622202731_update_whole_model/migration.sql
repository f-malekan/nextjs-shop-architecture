/*
  Warnings:

  - Added the required column `shippingAddress` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingCity` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingPhone` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingPostalCode` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingProvince` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingReceiverName` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `addressId` VARCHAR(191) NULL,
    ADD COLUMN `shippingAddress` VARCHAR(191) NOT NULL,
    ADD COLUMN `shippingCity` VARCHAR(191) NOT NULL,
    ADD COLUMN `shippingCost` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    ADD COLUMN `shippingPhone` VARCHAR(191) NOT NULL,
    ADD COLUMN `shippingPostalCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `shippingProvince` VARCHAR(191) NOT NULL,
    ADD COLUMN `shippingReceiverName` VARCHAR(191) NOT NULL,
    ADD COLUMN `totalDiscount` DECIMAL(65, 30) NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `orderitem` ADD COLUMN `discount` DECIMAL(65, 30) NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `discountPercent` INTEGER NULL,
    MODIFY `price` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `Address` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `receiverName` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `fullAddress` VARCHAR(191) NOT NULL,
    `postalCode` VARCHAR(191) NOT NULL,
    `isDefault` BOOLEAN NOT NULL DEFAULT false,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
