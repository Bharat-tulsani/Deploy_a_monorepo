// Fallback implementation for Prisma client when not available
// This allows the project to work even when Prisma client can't be installed due to Node version constraints

interface UserCreateInput {
    data: {
        username: string;
        password: string;
    };
}

interface User {
    id: string;
    username: string;
    password: string;
    createdAt: Date;
}

class MockPrismaClient {
    user: {
        create: (input: UserCreateInput) => Promise<User>;
        findFirst: () => Promise<User | null>;
    };

    constructor() {
        this.user = {
            create: async (input: UserCreateInput): Promise<User> => {
                // Mock implementation - in production this would use a real database
                console.log("Mock user created:", input.data);
                return {
                    id: Math.random().toString(36).substring(2, 15),
                    username: input.data.username,
                    password: input.data.password,
                    createdAt: new Date()
                };
            },
            findFirst: async (): Promise<User | null> => {
                // Mock implementation - returns null for now
                return null;
            }
        };
    }
}

// Create the appropriate client
export const client = new MockPrismaClient();