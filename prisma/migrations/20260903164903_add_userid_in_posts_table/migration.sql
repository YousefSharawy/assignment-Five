-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_id_fkey";

-- AlterTable: add nullable first so we can backfill
ALTER TABLE "posts" ADD COLUMN "userId" INTEGER;

-- Backfill: old broken relation meant posts.id had to equal users.id
UPDATE "posts" SET "userId" = "id";

-- Enforce NOT NULL now that every row has a value
ALTER TABLE "posts" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
