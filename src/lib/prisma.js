import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;


const prisma = globalForPrisma.prisma || new PrismaClient();

export default prisma;

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}
