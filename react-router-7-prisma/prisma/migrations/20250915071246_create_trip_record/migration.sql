-- CreateTable
CREATE TABLE "public"."TripRecord" (
    "id" TEXT NOT NULL,
    "visitedDate" TIMESTAMP(3) NOT NULL,
    "prefectureId" TEXT NOT NULL,
    "detail" TEXT,

    CONSTRAINT "TripRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TripRecord_id_key" ON "public"."TripRecord"("id");

-- AddForeignKey
ALTER TABLE "public"."TripRecord" ADD CONSTRAINT "TripRecord_prefectureId_fkey" FOREIGN KEY ("prefectureId") REFERENCES "public"."Prefecture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
