/*
  Warnings:

  - You are about to drop the column `image` on the `product_variants` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `product_variants` table. All the data in the column will be lost.
  - You are about to drop the column `basePrice` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product_variants` DROP COLUMN `image`,
    DROP COLUMN `price`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `basePrice`,
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `price` DECIMAL(10, 2) NULL;
