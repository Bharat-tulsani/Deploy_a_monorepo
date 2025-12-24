// ...existing code...
import * as Prisma from "@prisma/client";

const PrismaClient = (Prisma as any).PrismaClient;
export const client = new PrismaClient();