/*
  Warnings:

  - A unique constraint covering the columns `[codigo]` on the table `voos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "voos_codigo_key" ON "voos"("codigo");
