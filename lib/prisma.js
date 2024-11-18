import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === "production") {
    //production
    prisma = new PrismaClient();
} else {
    //local dev
    if (!globalThis.prisma) {
        globalThis.prisma = new PrismaClient();
    }
    prisma = globalThis.prisma;
}

export default prisma;