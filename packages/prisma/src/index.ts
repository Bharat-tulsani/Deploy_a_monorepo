// ...existing code...
let PrismaClient: any;
try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    PrismaClient = require("@prisma/client").PrismaClient;
} catch (err) {
    throw new Error(
        "Cannot find '@prisma/client'. Run in this package folder:\n  npm install @prisma/client\n  npx prisma generate\nThen restart TS server."
    );
}

export const client = new PrismaClient();
// ...existing code...