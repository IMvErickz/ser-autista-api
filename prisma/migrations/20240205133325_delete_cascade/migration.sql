-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_doubtId_fkey";

-- DropForeignKey
ALTER TABLE "News" DROP CONSTRAINT "News_imagesId_fkey";

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_imagesId_fkey" FOREIGN KEY ("imagesId") REFERENCES "Images"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_doubtId_fkey" FOREIGN KEY ("doubtId") REFERENCES "Doubt"("id") ON DELETE CASCADE ON UPDATE CASCADE;
