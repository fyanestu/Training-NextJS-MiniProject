-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "salt" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product_Image" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "filename" VARCHAR(199),
    "original_name" TEXT,
    "destination" TEXT,
    "mimetype" TEXT,
    "size" INTEGER,
    "prefix" TEXT NOT NULL,

    CONSTRAINT "Product_Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "index_user_id" ON "User"("id");

-- CreateIndex
CREATE INDEX "index_product_id" ON "Product"("id");

-- CreateIndex
CREATE INDEX "index_product_image_id" ON "Product_Image"("id");

-- CreateIndex
CREATE INDEX "product_image_productId_fkey" ON "Product_Image"("productId");

-- AddForeignKey
ALTER TABLE "Product_Image" ADD CONSTRAINT "Product_Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
