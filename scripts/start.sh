#!/bin/bash
set -e

echo "🚀 Starting Zakerly Educational Platform..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "⚠️  DATABASE_URL is not set. Database features will be unavailable."
  echo "💡 To enable database features, add a PostgreSQL database in Railway."
else
  echo "✅ DATABASE_URL detected"
  
  # Generate Prisma Client
  echo "📦 Generating Prisma Client..."
  npx prisma generate || echo "⚠️  Prisma generation skipped"
  
  # Run migrations
  echo "🔄 Running database migrations..."
  npx prisma migrate deploy || echo "⚠️  Migrations skipped or failed"
fi

# Start the application
echo "🌟 Starting Next.js application..."
node server.js
