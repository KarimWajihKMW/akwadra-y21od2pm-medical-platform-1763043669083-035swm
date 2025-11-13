# ذاكرلي (Zakerly) - Smart Educational Platform

**منصة تعليمية ذكية متطورة** | Advanced Intelligent Educational Platform

Built with Next.js 14, TypeScript, Tailwind CSS, and AI-powered features.

## 🌟 Features

- **👨‍🏫 Teacher Dashboard**: Upload curriculum, manage courses, create assignments and exams
- **👨‍🎓 Student Platform**: AI assistant, text-to-speech, interactive learning
- **👪 Parent Dashboard**: Track student performance, view reports and statistics
- **📚 Lesson Library**: Browse lessons by grade and subject
- **🤖 AI-Powered**: Smart assistant for curriculum explanation and Q&A
- **🔊 Text-to-Speech**: Natural voice reading using OpenAI technology
- **✅ Auto Correction**: AI-powered automatic error correction
- **📊 Performance Tracking**: Comprehensive academic progress monitoring
- **🌐 Bilingual**: Full Arabic and English support (Arabic as default)
- **📁 File Upload**: Easy content and curriculum upload
- **🔐 Authentication**: Secure email/password authentication

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (optional for initial setup)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd akwadra-y21od2pm-medical-platform-1763043669083-035swm
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and configure:
- `JWT_SECRET` - Your secret key for JWT tokens (REQUIRED)
- `APP_URL` - Your application URL (REQUIRED)
- `DATABASE_URL` - PostgreSQL connection string (OPTIONAL - see below)
- `OPENAI_API_KEY` - For AI features (OPTIONAL)

**Note**: The application will start without `DATABASE_URL` set. Database features will be unavailable until you add a database.

4. **Run in development mode**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                      # Next.js 14 App Router pages
│   ├── api/                 # API routes
│   │   └── auth/           # Authentication endpoints
│   ├── auth/               # Auth pages (login, signup)
│   ├── teachers/           # Teacher pages and dashboard
│   ├── students/           # Student pages and dashboard
│   ├── parents/            # Parent pages and dashboard
│   ├── library/            # Lesson library
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/              # React components
│   ├── ui/                 # UI components (buttons, cards, etc.)
│   └── layout/             # Layout components (nav, footer)
├── lib/                     # Utility libraries
│   ├── auth.ts             # Authentication utilities
│   ├── prisma.ts           # Prisma client
│   └── utils.ts            # General utilities
├── prisma/                  # Database schema
│   └── schema.prisma       # Prisma schema file
├── public/                  # Static files
│   └── locales/            # Translation files
│       ├── ar/             # Arabic translations
│       └── en/             # English translations
├── scripts/                 # Deployment scripts
│   └── start.sh            # Startup script
├── i18n.ts                 # Internationalization config
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── Dockerfile              # Docker configuration
└── package.json            # Dependencies and scripts
```

## 🗄️ Database Setup

The application is designed to start gracefully without a database. To enable full functionality:

### Option 1: Railway (Recommended for Production)

1. Go to your Railway dashboard
2. Click "+ Database" and select PostgreSQL
3. Railway will automatically set `DATABASE_URL` environment variable
4. Redeploy your application

### Option 2: Local PostgreSQL

1. Install PostgreSQL locally
2. Create a database:
```bash
createdb zakerly
```

3. Set `DATABASE_URL` in `.env`:
```
DATABASE_URL="postgresql://user:password@localhost:5432/zakerly?schema=public"
```

4. Run migrations:
```bash
npx prisma migrate dev
```

## 🔑 Environment Variables

### Required Variables

- `JWT_SECRET` - Secret key for JWT authentication
  - Generate with: `openssl rand -base64 32`
  - Example: `your-super-secret-jwt-key-change-this-in-production`

- `APP_URL` or `NEXTAUTH_URL` - Base URL of your application
  - Development: `http://localhost:3000`
  - Production: Your Railway URL or custom domain

### Optional Variables

- `DATABASE_URL` - PostgreSQL connection string
  - Not required for initial startup
  - Application will run without database features until configured
  
- `DIRECT_URL` - Direct database connection (for migrations with pooling)
  - Only needed if using connection pooling (e.g., PgBouncer)

- `OPENAI_API_KEY` - OpenAI API key for AI features
  - Required for: Text-to-speech, AI assistant
  - Get from: https://platform.openai.com/api-keys

- `MAX_FILE_SIZE` - Maximum file upload size in bytes
  - Default: `10485760` (10MB)

- `UPLOAD_DIR` - Directory for uploaded files
  - Default: `./uploads`

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t zakerly-platform .
```

### Run Docker Container

```bash
docker run -d \
  -p 3000:3000 \
  -e JWT_SECRET=your-secret-key \
  -e APP_URL=http://localhost:3000 \
  -e DATABASE_URL=your-database-url \
  --name zakerly \
  zakerly-platform
```

### Verify Deployment

```bash
# Check if container is running
docker ps

# View logs
docker logs zakerly

# Test accessibility
curl http://localhost:3000
```

## 🚂 Railway Deployment

### Prerequisites

- Railway account
- Railway CLI installed (optional)

### Deployment Steps

1. **Connect Repository**
   - Go to Railway dashboard
   - Click "New Project" → "Deploy from GitHub repo"
   - Select this repository

2. **Configure Environment Variables**
   - Go to project settings → Variables
   - Add required variables:
     - `JWT_SECRET`
     - `APP_URL` (will be auto-generated by Railway)

3. **Add Database (Optional)**
   - Click "+ Database" in your project
   - Select PostgreSQL
   - Railway will automatically set `DATABASE_URL`

4. **Deploy**
   - Railway will automatically build and deploy using Dockerfile
   - Monitor logs for any issues
   - Access your app at the Railway-provided URL

### Verify Deployment

After deployment, check:
1. Application is accessible at your Railway URL
2. Homepage loads correctly
3. No errors in Railway logs
4. Locale switching works (Arabic ↔ English)
5. Authentication pages load (login/signup)

## 🧪 Testing

### Local Testing

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start in production mode
npm start

# Visit http://localhost:3000
```

### Docker Testing

```bash
# Build Docker image
docker build -t test-zakerly .

# Run container
docker run -d -p 3000:3000 \
  -e JWT_SECRET=test-secret \
  -e APP_URL=http://localhost:3000 \
  --name test-zakerly \
  test-zakerly

# Wait for startup
sleep 10

# Test accessibility
curl http://localhost:3000

# Check logs
docker logs test-zakerly

# Clean up
docker stop test-zakerly
docker rm test-zakerly
```

## 🛠️ Troubleshooting

### "Couldn't find next-intl config file"

**Cause**: `i18n.ts` file not found in Docker image

**Solution**: Verify Dockerfile copies `i18n.ts`:
```dockerfile
COPY --from=builder /app/i18n.ts ./i18n.ts
```

### "Database is not configured"

**Expected Behavior**: Application should start and show this message when accessing database features

**Solution**: Add PostgreSQL database in Railway or set `DATABASE_URL` in environment variables

### "Module not found" errors

**Cause**: Missing dependencies or incorrect build

**Solution**:
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Locale switching not working

**Cause**: Missing locale files or incorrect next.config.js

**Solution**: 
1. Verify files exist: `public/locales/ar/common.json` and `public/locales/en/common.json`
2. Check next.config.js uses `withNextIntl`
3. Rebuild application

### Docker build fails

**Common Issues**:
1. Missing files (i18n.ts, locales, prisma/schema.prisma)
2. Incorrect COPY paths in Dockerfile
3. Build errors - check logs

**Solution**: Ensure all files are committed and Dockerfile COPY commands are correct

## 📋 Deployment Checklist

Before deploying to production:

- [ ] All environment variables configured
- [ ] `JWT_SECRET` set to secure random string
- [ ] `APP_URL` set to production URL
- [ ] Database added and `DATABASE_URL` configured (if using database features)
- [ ] Application builds successfully (`npm run build`)
- [ ] Application starts without errors (`npm start`)
- [ ] Docker image builds successfully
- [ ] All pages accessible (home, auth, dashboards)
- [ ] Locale switching works (Arabic ↔ English)
- [ ] Authentication flow works (signup/login)
- [ ] No errors in browser console
- [ ] Responsive design tested on mobile/tablet/desktop

## 🔒 Security

- Passwords hashed with bcryptjs
- JWT-based authentication
- HTTP-only cookies for sessions
- Input validation on API routes
- Environment variables for sensitive data
- CORS configured for production

## 🌐 Internationalization

- Default locale: Arabic (ar)
- Supported locales: Arabic (ar), English (en)
- Locale switching via cookie
- Fallback to Arabic if locale not found
- RTL support for Arabic

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a production application. For contributions, please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

All rights reserved © 2024 Zakerly Educational Platform

## 🆘 Support

For support, please contact:
- Email: info@zakerly.com
- Phone: +20 123 456 7890

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS
