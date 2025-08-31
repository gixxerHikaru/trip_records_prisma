-- CreateTable
CREATE TABLE "public"."Prefecture" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "area" TEXT NOT NULL,

    CONSTRAINT "Prefecture_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Prefecture_id_key" ON "public"."Prefecture"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Prefecture_name_key" ON "public"."Prefecture"("name");
