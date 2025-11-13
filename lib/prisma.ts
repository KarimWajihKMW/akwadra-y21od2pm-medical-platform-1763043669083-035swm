import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Helper to check if database is configured
export function isDatabaseConfigured(): boolean {
  return !!process.env.DATABASE_URL;
}

// Helper to handle database operations gracefully
export async function withDatabase<T>(
  operation: () => Promise<T>,
  fallback?: T
): Promise<T> {
  if (!isDatabaseConfigured()) {
    if (fallback !== undefined) {
      return fallback;
    }
    throw new Error('Database is not configured. Please set DATABASE_URL environment variable.');
  }
  
  try {
    return await operation();
  } catch (error) {
    console.error('Database operation failed:', error);
    throw error;
  }
}
