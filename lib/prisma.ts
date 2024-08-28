import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }

//export const prisma = new PrismaClient()

// declare global {
//     var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
// }

// const prisma = globalThis.prisma ?? prismaClientSingleton()

// export default prisma

// if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma