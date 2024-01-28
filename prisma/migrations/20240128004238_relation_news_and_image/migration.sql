-- AlterTable
ALTER TABLE "News" ADD COLUMN     "imagesId" TEXT;

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_imagesId_fkey" FOREIGN KEY ("imagesId") REFERENCES "Images"("id") ON DELETE SET NULL ON UPDATE CASCADE;
