-- CreateTable
CREATE TABLE "Rant" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "mood" TEXT,
    "content" TEXT NOT NULL,
    "gifUrl" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rant_pkey" PRIMARY KEY ("id")
);
