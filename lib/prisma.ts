import { cache } from 'react';
import { PrismaClient } from '../prisma/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';

/*
 * Cloudflare Workers can't share a DB connection across requests, so create
 * one client per request. React's cache() dedupes calls within a request.
 */
export const getPrisma = cache(() => {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
    maxUses: 1,
  });

  return new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });
});
