/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Authenticator` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `credentialBackedUp` on the `Authenticator` table. All the data in the column will be lost.
  - You are about to drop the column `credentialDeviceType` on the `Authenticator` table. All the data in the column will be lost.
  - You are about to drop the column `credentialID` on the `Authenticator` table. All the data in the column will be lost.
  - You are about to drop the column `credentialPublicKey` on the `Authenticator` table. All the data in the column will be lost.
  - You are about to drop the column `providerAccountId` on the `Authenticator` table. All the data in the column will be lost.
  - You are about to drop the column `transports` on the `Authenticator` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `Follow` table. All the data in the column will be lost.
  - You are about to drop the column `followingId` on the `Follow` table. All the data in the column will be lost.
  - You are about to drop the column `apiKey` on the `Integration` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Integration` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Integration` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `Reward` table. All the data in the column will be lost.
  - The primary key for the `Subscription` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `currentPeriodEnd` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `currentPeriodStart` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `interval` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `planId` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `stripeSubscriptionId` on the `Subscription` table. All the data in the column will be lost.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `AccountBanking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LoyaltyCard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PasswordResetToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Plan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwoFactorToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[accountNumber]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[provider,providerAccountId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,credentialId]` on the table `Authenticator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,storeId]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[followerId,followedId]` on the table `Follow` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,type]` on the table `Integration` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,postId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderNumber]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rewardCode]` on the table `Reward` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[storeNumber]` on the table `Store` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,storeId]` on the table `TeamMember` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[treezorUserId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[treezorWalletId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Account` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `credentialId` to the `Authenticator` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Authenticator` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `publicKey` to the `Authenticator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Authenticator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followedId` to the `Follow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Follow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Integration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pointsCost` to the `Reward` table without a default value. This is not possible if the table is not empty.
  - Added the required column `validity` to the `Reward` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Session` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Subscription` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `plan` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TwoFactorConfirmation` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('U', 'A', 'M');

-- CreateEnum
CREATE TYPE "user_status" AS ENUM ('I', 'A', 'P', 'V', 'C');

-- CreateEnum
CREATE TYPE "card_type" AS ENUM ('BC', 'LC', 'VC', 'EC');

-- CreateEnum
CREATE TYPE "card_status" AS ENUM ('P', 'I', 'S', 'D', 'A', 'C');

-- CreateEnum
CREATE TYPE "pin_status" AS ENUM ('S', 'R');

-- CreateEnum
CREATE TYPE "usage_limit_type" AS ENUM ('A', 'C');

-- CreateEnum
CREATE TYPE "lock_status" AS ENUM ('L', 'U');

-- CreateEnum
CREATE TYPE "bank_account_type" AS ENUM ('C', 'S', 'CH');

-- CreateEnum
CREATE TYPE "currency" AS ENUM ('EUR', 'USD', 'GBP', 'BTC', 'ETH', 'BNB', 'YANI');

-- CreateEnum
CREATE TYPE "transaction_type" AS ENUM ('DEP', 'WIT', 'TRA', 'PAY', 'CRY', 'CAS', 'DDB', 'INT', 'SEP', 'INS', 'PCP', 'BCP', 'CRL', 'MSE');

-- CreateEnum
CREATE TYPE "transaction_status" AS ENUM ('P', 'C', 'F', 'X');

-- CreateEnum
CREATE TYPE "transaction_fee_type" AS ENUM ('DDB', 'INT', 'SEP', 'INS', 'PCP', 'BCP', 'CRL', 'MSE', 'RES', 'GRO', 'BIL', 'FUE', 'REN', 'SAL');

-- CreateEnum
CREATE TYPE "reward_validity" AS ENUM ('LT', 'UT');

-- CreateEnum
CREATE TYPE "recommendation_type" AS ENUM ('R', 'O', 'P', 'S');

-- CreateEnum
CREATE TYPE "interaction_type" AS ENUM ('P', 'V', 'C', 'S', 'F');

-- CreateEnum
CREATE TYPE "kyc_status" AS ENUM ('N', 'P', 'V', 'R');

-- CreateEnum
CREATE TYPE "transfer_status" AS ENUM ('P', 'V', 'C', 'F');

-- CreateEnum
CREATE TYPE "payment_status" AS ENUM ('P', 'V', 'C', 'F');

-- CreateEnum
CREATE TYPE "payment_type" AS ENUM ('C', 'T', 'D');

-- DropForeignKey
ALTER TABLE "AccountBanking" DROP CONSTRAINT "AccountBanking_bankingId_fkey";

-- DropForeignKey
ALTER TABLE "Authenticator" DROP CONSTRAINT "Authenticator_userId_fkey";

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_storeId_fkey";

-- DropForeignKey
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_followerId_fkey";

-- DropForeignKey
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_followingId_fkey";

-- DropForeignKey
ALTER TABLE "GiftCard" DROP CONSTRAINT "GiftCard_storeId_fkey";

-- DropForeignKey
ALTER TABLE "Integration" DROP CONSTRAINT "Integration_userId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_postId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_userId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_storeId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_parentId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropForeignKey
ALTER TABLE "Reward" DROP CONSTRAINT "Reward_storeId_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_planId_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_userId_fkey";

-- DropForeignKey
ALTER TABLE "TeamMember" DROP CONSTRAINT "TeamMember_storeId_fkey";

-- DropIndex
DROP INDEX "Authenticator_credentialID_key";

-- DropIndex
DROP INDEX "Subscription_stripeSubscriptionId_key";

-- DropIndex
DROP INDEX "Subscription_userId_key";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
ADD COLUMN     "accountNumber" TEXT NOT NULL DEFAULT floor(random() * 9000000000 + 1000000000)::text,
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Authenticator" DROP CONSTRAINT "Authenticator_pkey",
DROP COLUMN "credentialBackedUp",
DROP COLUMN "credentialDeviceType",
DROP COLUMN "credentialID",
DROP COLUMN "credentialPublicKey",
DROP COLUMN "providerAccountId",
DROP COLUMN "transports",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "credentialId" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "publicKey" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "Authenticator_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "points";

-- AlterTable
ALTER TABLE "Follow" DROP COLUMN "createAt",
DROP COLUMN "followingId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "followedId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "GiftCard" ADD COLUMN     "isRedeemed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Integration" DROP COLUMN "apiKey",
DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "data" JSONB,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Like" DROP COLUMN "createAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "amount",
DROP COLUMN "customerId",
ADD COLUMN     "orderNumber" TEXT NOT NULL DEFAULT floor(random() * 9000000000 + 1000000000)::text,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "createAt",
DROP COLUMN "parentId",
DROP COLUMN "userId",
ADD COLUMN     "authorId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Reward" DROP COLUMN "points",
ADD COLUMN     "CustomerRedeemCount" INTEGER,
ADD COLUMN     "backgroundColor" TEXT,
ADD COLUMN     "buttonColor" TEXT,
ADD COLUMN     "buttonText" TEXT,
ADD COLUMN     "buttonTextColor" TEXT,
ADD COLUMN     "cardTemplateId" TEXT,
ADD COLUMN     "evergreenMode" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "imageTemplateUrl" TEXT,
ADD COLUMN     "nameColor" TEXT,
ADD COLUMN     "pointsColor" TEXT,
ADD COLUMN     "pointsCost" INTEGER NOT NULL,
ADD COLUMN     "quota" INTEGER,
ADD COLUMN     "rewardCode" TEXT NOT NULL DEFAULT floor(random() * 9000000000 + 1000000000)::text,
ADD COLUMN     "validity" "reward_validity" NOT NULL,
ADD COLUMN     "validityDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Store" ADD COLUMN     "codePin" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "language" TEXT,
ADD COLUMN     "phoneCountryCode" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "phoneRequired" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "storeNumber" TEXT NOT NULL DEFAULT floor(random() * 9000000000 + 1000000000)::text,
ADD COLUMN     "timeZone" TEXT,
ADD COLUMN     "website" TEXT;

-- AlterTable
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_pkey",
DROP COLUMN "currentPeriodEnd",
DROP COLUMN "currentPeriodStart",
DROP COLUMN "interval",
DROP COLUMN "planId",
DROP COLUMN "stripeSubscriptionId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "plan" TEXT NOT NULL,
ADD CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TwoFactorConfirmation" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "birthCountry" TEXT,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "incomeRange" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "kycLevel" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "kycStatus" "kyc_status" NOT NULL DEFAULT 'N',
ADD COLUMN     "lastLogin" TIMESTAMP(3),
ADD COLUMN     "nationality" TEXT,
ADD COLUMN     "occupationStatus" TEXT,
ADD COLUMN     "parentId" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "preferredLanguage" TEXT,
ADD COLUMN     "residenceCountry" TEXT,
ADD COLUMN     "treezorUserId" TEXT,
ADD COLUMN     "treezorWalletId" TEXT,
ADD COLUMN     "userNumber" TEXT NOT NULL DEFAULT floor(random() * 9000000000 + 1000000000)::text,
ALTER COLUMN "email" DROP NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "user_role" NOT NULL DEFAULT 'U',
DROP COLUMN "status",
ADD COLUMN     "status" "user_status" NOT NULL DEFAULT 'I';

-- DropTable
DROP TABLE "AccountBanking";

-- DropTable
DROP TABLE "LoyaltyCard";

-- DropTable
DROP TABLE "PasswordResetToken";

-- DropTable
DROP TABLE "Plan";

-- DropTable
DROP TABLE "TwoFactorToken";

-- DropTable
DROP TABLE "VerificationToken";

-- DropEnum
DROP TYPE "UserRole";

-- DropEnum
DROP TYPE "UserStatus";

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "userId" TEXT,
    "storeId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankAccount" (
    "id" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL DEFAULT floor(random() * 9000000000 + 1000000000)::text,
    "userId" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "iban" TEXT,
    "bic" TEXT,
    "accountType" "bank_account_type" NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "currency" "currency" NOT NULL,
    "isMainAccount" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "parentAccountId" TEXT,

    CONSTRAINT "BankAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "cardNumber" TEXT NOT NULL DEFAULT floor(random() * 9000000000 + 1000000000)::text,
    "userId" TEXT NOT NULL,
    "cardType" "card_type" NOT NULL,
    "expiryDate" TIMESTAMP(3),
    "cvv" TEXT,
    "points" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isVirtual" BOOLEAN NOT NULL DEFAULT false,
    "isEphemeral" BOOLEAN NOT NULL DEFAULT false,
    "cardHolderName" TEXT,
    "issuer" TEXT,
    "status" "card_status",
    "productCode" TEXT,
    "cardTag" TEXT,
    "mccRestrictionGroupId" INTEGER,
    "merchantRestrictionGroupId" INTEGER,
    "countryRestrictionGroupId" INTEGER,
    "limitId" INTEGER,
    "pin" TEXT,
    "pinStatus" "pin_status",
    "maskedPan" TEXT,
    "embossedName" TEXT,
    "usageLimit" INTEGER,
    "usageLimitType" "usage_limit_type",
    "usageCount" INTEGER,
    "usageAmount" DOUBLE PRECISION,
    "lockStatus" "lock_status",
    "storeId" TEXT,
    "bankAccountId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "treezorCardId" TEXT,
    "cardProfileId" INTEGER,
    "cardStatus" "card_status" NOT NULL,
    "cardProgram" TEXT,
    "cardDesign" TEXT,
    "deliveryAddressId" TEXT,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wallet" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "currency" "currency" NOT NULL,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "treezorWalletId" TEXT,
    "tariffId" INTEGER,
    "eventName" TEXT,
    "eventAlias" TEXT,
    "eventDate" TIMESTAMP(3),
    "eventMessage" TEXT,
    "eventInformations" JSONB,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "transactionNumber" TEXT NOT NULL DEFAULT floor(random() * 9000000000 + 1000000000)::text,
    "userId" TEXT NOT NULL,
    "amount" BYTEA NOT NULL,
    "currency" "currency" NOT NULL,
    "type" "transaction_type" NOT NULL,
    "status" "transaction_status" NOT NULL DEFAULT 'P',
    "fromWalletId" TEXT,
    "toWalletId" TEXT,
    "isPayin" BOOLEAN NOT NULL DEFAULT false,
    "isPayout" BOOLEAN NOT NULL DEFAULT false,
    "loyaltyProgramId" TEXT,
    "cashbackAmount" BYTEA,
    "cashbackCurrency" "currency",
    "feeAmount" BYTEA,
    "feeType" "transaction_fee_type",
    "cardId" TEXT,
    "terminalId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT,
    "treezorTransactionId" TEXT,
    "walletDebitId" TEXT,
    "walletCreditId" TEXT,
    "payinId" TEXT,
    "payoutId" TEXT,
    "transferId" TEXT,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransactionCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT,
    "color" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransactionCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoyaltyProgram" (
    "id" TEXT NOT NULL,
    "programNumber" TEXT NOT NULL DEFAULT floor(random() * 9000000000 + 1000000000)::text,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "storeId" TEXT NOT NULL,
    "cashbackPercentage" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoyaltyProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "productCode" TEXT NOT NULL DEFAULT floor(random() * 9000000000 + 1000000000)::text,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "storeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AIRecommendation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "recommendation_type" NOT NULL,
    "content" JSONB NOT NULL,
    "isApplied" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AIRecommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPreference" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "preference" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInteraction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "interaction_type" NOT NULL,
    "details" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserInteraction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beneficiary" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "treezorBeneficiaryId" TEXT,
    "tag" TEXT,
    "name" TEXT NOT NULL,
    "iban" TEXT,
    "bic" TEXT,
    "address" TEXT,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Beneficiary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SEPATransfer" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "treezorTransferId" TEXT,
    "walletId" TEXT NOT NULL,
    "beneficiaryId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" "currency" NOT NULL,
    "label" TEXT,
    "reference" TEXT,
    "status" "transfer_status" NOT NULL DEFAULT 'P',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SEPATransfer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "treezorPaymentId" TEXT,
    "walletId" TEXT NOT NULL,
    "cardId" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" "currency" NOT NULL,
    "status" "payment_status" NOT NULL DEFAULT 'P',
    "paymentType" "payment_type" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_userId_key" ON "Address"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_storeId_key" ON "Address"("storeId");

-- CreateIndex
CREATE UNIQUE INDEX "BankAccount_accountNumber_key" ON "BankAccount"("accountNumber");

-- CreateIndex
CREATE INDEX "BankAccount_userId_idx" ON "BankAccount"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Card_cardNumber_key" ON "Card"("cardNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Card_treezorCardId_key" ON "Card"("treezorCardId");

-- CreateIndex
CREATE INDEX "Card_userId_idx" ON "Card"("userId");

-- CreateIndex
CREATE INDEX "Card_storeId_idx" ON "Card"("storeId");

-- CreateIndex
CREATE INDEX "Card_bankAccountId_idx" ON "Card"("bankAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_treezorWalletId_key" ON "Wallet"("treezorWalletId");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_userId_currency_key" ON "Wallet"("userId", "currency");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_transactionNumber_key" ON "Transaction"("transactionNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_treezorTransactionId_key" ON "Transaction"("treezorTransactionId");

-- CreateIndex
CREATE INDEX "Transaction_cardId_idx" ON "Transaction"("cardId");

-- CreateIndex
CREATE INDEX "Transaction_terminalId_idx" ON "Transaction"("terminalId");

-- CreateIndex
CREATE INDEX "Transaction_categoryId_idx" ON "Transaction"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_transactionId_key" ON "Location"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "TransactionCategory_name_key" ON "TransactionCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LoyaltyProgram_programNumber_key" ON "LoyaltyProgram"("programNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Product_productCode_key" ON "Product"("productCode");

-- CreateIndex
CREATE UNIQUE INDEX "UserPreference_userId_category_key" ON "UserPreference"("userId", "category");

-- CreateIndex
CREATE UNIQUE INDEX "Beneficiary_treezorBeneficiaryId_key" ON "Beneficiary"("treezorBeneficiaryId");

-- CreateIndex
CREATE UNIQUE INDEX "SEPATransfer_treezorTransferId_key" ON "SEPATransfer"("treezorTransferId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_treezorPaymentId_key" ON "Payment"("treezorPaymentId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_accountNumber_key" ON "Account"("accountNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Authenticator_userId_credentialId_key" ON "Authenticator"("userId", "credentialId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_storeId_key" ON "Customer"("email", "storeId");

-- CreateIndex
CREATE UNIQUE INDEX "Follow_followerId_followedId_key" ON "Follow"("followerId", "followedId");

-- CreateIndex
CREATE UNIQUE INDEX "Integration_userId_type_key" ON "Integration"("userId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "Like_userId_postId_key" ON "Like"("userId", "postId");

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderNumber_key" ON "Order"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Reward_rewardCode_key" ON "Reward"("rewardCode");

-- CreateIndex
CREATE UNIQUE INDEX "Store_storeNumber_key" ON "Store"("storeNumber");

-- CreateIndex
CREATE UNIQUE INDEX "TeamMember_email_storeId_key" ON "TeamMember"("email", "storeId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userNumber_key" ON "User"("userNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_treezorUserId_key" ON "User"("treezorUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_treezorWalletId_key" ON "User"("treezorWalletId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankAccount" ADD CONSTRAINT "BankAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankAccount" ADD CONSTRAINT "BankAccount_parentAccountId_fkey" FOREIGN KEY ("parentAccountId") REFERENCES "BankAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_bankAccountId_fkey" FOREIGN KEY ("bankAccountId") REFERENCES "BankAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_deliveryAddressId_fkey" FOREIGN KEY ("deliveryAddressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_loyaltyProgramId_fkey" FOREIGN KEY ("loyaltyProgramId") REFERENCES "LoyaltyProgram"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TransactionCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followedId_fkey" FOREIGN KEY ("followedId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoyaltyProgram" ADD CONSTRAINT "LoyaltyProgram_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reward" ADD CONSTRAINT "Reward_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GiftCard" ADD CONSTRAINT "GiftCard_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMember" ADD CONSTRAINT "TeamMember_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AIRecommendation" ADD CONSTRAINT "AIRecommendation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPreference" ADD CONSTRAINT "UserPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInteraction" ADD CONSTRAINT "UserInteraction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Integration" ADD CONSTRAINT "Integration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Authenticator" ADD CONSTRAINT "Authenticator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beneficiary" ADD CONSTRAINT "Beneficiary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SEPATransfer" ADD CONSTRAINT "SEPATransfer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SEPATransfer" ADD CONSTRAINT "SEPATransfer_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SEPATransfer" ADD CONSTRAINT "SEPATransfer_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;
