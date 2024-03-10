/*
  Warnings:

  - You are about to alter the column `createdAt` on the `post` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updatedAt` on the `post` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `createdAt` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updatedAt` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - A unique constraint covering the columns `[slug]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    MODIFY `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP();

-- AlterTable
ALTER TABLE `user` MODIFY `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    MODIFY `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP();

-- CreateIndex
CREATE UNIQUE INDEX `Post_slug_key` ON `Post`(`slug`);
