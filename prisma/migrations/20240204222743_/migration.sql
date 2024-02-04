/*
  Warnings:

  - You are about to drop the column `imagesId` on the `News` table. All the data in the column will be lost.
  - You are about to drop the `Images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "News" DROP CONSTRAINT "News_imagesId_fkey";

-- AlterTable
ALTER TABLE "News" DROP COLUMN "imagesId";

-- DropTable
DROP TABLE "Images";
