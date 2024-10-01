-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "accountNumber" SET DEFAULT floor(random() * 9000000000 + 1000000000)::text;

-- AlterTable
ALTER TABLE "BankAccount" ALTER COLUMN "accountNumber" SET DEFAULT floor(random() * 9000000000 + 1000000000)::text;

-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "cardNumber" SET DEFAULT floor(random() * 9000000000 + 1000000000)::text;

-- AlterTable
ALTER TABLE "LoyaltyProgram" ALTER COLUMN "programNumber" SET DEFAULT floor(random() * 9000000000 + 1000000000)::text;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "orderNumber" SET DEFAULT floor(random() * 9000000000 + 1000000000)::text;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "productCode" SET DEFAULT floor(random() * 9000000000 + 1000000000)::text;

-- AlterTable
ALTER TABLE "Reward" ALTER COLUMN "rewardCode" SET DEFAULT floor(random() * 9000000000 + 1000000000)::text;

-- AlterTable
ALTER TABLE "Store" ALTER COLUMN "storeNumber" SET DEFAULT floor(random() * 9000000000 + 1000000000)::text;

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "transactionNumber" SET DEFAULT floor(random() * 9000000000 + 1000000000)::text;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "userNumber" SET DEFAULT floor(random() * 9000000000 + 1000000000)::text;
