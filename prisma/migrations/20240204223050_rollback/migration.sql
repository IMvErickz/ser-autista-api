-- AlterTable
ALTER TABLE "News" ADD COLUMN     "imagesId" TEXT;

-- CreateTable
CREATE TABLE "Images" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_imagesId_fkey" FOREIGN KEY ("imagesId") REFERENCES "Images"("id") ON DELETE SET NULL ON UPDATE CASCADE;
