/*
  Warnings:

  - Added the required column `destination` to the `Rocket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `launch` to the `Rocket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `rocket` ADD COLUMN `destination` VARCHAR(191) NOT NULL,
    ADD COLUMN `launch` VARCHAR(191) NOT NULL;
