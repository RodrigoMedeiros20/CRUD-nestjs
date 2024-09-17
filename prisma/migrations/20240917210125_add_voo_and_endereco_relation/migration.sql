-- CreateTable
CREATE TABLE "voos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "origemId" TEXT NOT NULL,
    "destinoId" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "codigo" TEXT NOT NULL,
    CONSTRAINT "voos_origemId_fkey" FOREIGN KEY ("origemId") REFERENCES "enderecos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "voos_destinoId_fkey" FOREIGN KEY ("destinoId") REFERENCES "enderecos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "enderecos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "cep" TEXT NOT NULL
);
