-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_newsId_fkey";

-- AlterTable
ALTER TABLE "News" ALTER COLUMN "updateAt" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;
