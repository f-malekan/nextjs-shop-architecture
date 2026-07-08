/*
  Warnings:

  - You are about to drop the column `email` on the `contactmessage` table. All the data in the column will be lost.
  - Added the required column `phone` to the `ContactMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contactmessage` DROP COLUMN `email`,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;
