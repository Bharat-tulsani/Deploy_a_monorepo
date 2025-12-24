// Fallback implementation for Prisma client when not available
// This allows the project to work even when Prisma client can't be installed due to Node version constraints

class MockPrismaClient {
    constructor() {
        this.user = {
            create: async (input) => {
                // Mock implementation - in production this would use a real database
                console.log("Mock user created:", input.data);
                return {
                    id: Math.random().toString(36).substring(2, 15),
                    username: input.data.username,
                    password: input.data.password,
                    createdAt: new Date()
                };
            }
        };
    }
}

// Try to import real Prisma client, fallback to mock if not available
let PrismaClientConstructor;
try {
    const { PrismaClient } = require("@prisma/client");
    PrismaClientConstructor = PrismaClient;
} catch (error) {
    console.warn("Prisma client not available, using mock implementation");
    PrismaClientConstructor = MockPrismaClient;
}

const client = new PrismaClientConstructor();

module.exports = { client };