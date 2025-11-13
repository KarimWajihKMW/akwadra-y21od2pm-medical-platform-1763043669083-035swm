# Multi-stage build for Zakerly Educational Platform
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat openssl1.1-compat
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Builder stage
FROM node:18-alpine AS builder
RUN apk add --no-cache libc6-compat openssl1.1-compat
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment for build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Generate Prisma Client (will skip if DATABASE_URL not set)
RUN npx prisma generate || echo "Prisma generation skipped"

# Build Next.js application
RUN npm run build

# Runner stage
FROM node:18-alpine AS runner
WORKDIR /app

# Install OpenSSL 1.1 compatibility library for Prisma
RUN apk add --no-cache openssl1.1-compat

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/i18n.ts ./i18n.ts

# Copy the standalone Next.js build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy Prisma files
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Copy startup script from builder and ensure it's executable
COPY --from=builder /app/scripts ./scripts
RUN chmod +x ./scripts/start.sh && chown -R nextjs:nodejs ./scripts

USER nextjs

EXPOSE 3000

CMD ["sh", "/app/scripts/start.sh"]
