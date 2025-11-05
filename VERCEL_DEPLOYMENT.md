# Vercel Deployment Guide

This guide will help you deploy CruxLabX to Vercel with all features working correctly.

## Prerequisites

1. ✅ GitHub account with repository access
2. ✅ Vercel account (sign up at https://vercel.com)
3. ✅ Resend API key for emails
4. ✅ hCaptcha site key and secret key

## Step 1: Push to GitHub

Already done! Your code is at: https://github.com/crux-ecosystem/CruxLabx

## Step 2: Set Up Vercel Postgres Database

### Option A: Using Vercel Dashboard (Recommended)

1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository: `crux-ecosystem/CruxLabx`
4. **BEFORE** clicking "Deploy", go to the "Storage" tab
5. Click "Create Database" → "Postgres"
6. Name it: `cruxlabx-db`
7. Click "Create"
8. Vercel will automatically add these environment variables:
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`
   - `POSTGRES_USER`
   - `POSTGRES_HOST`
   - `POSTGRES_PASSWORD`
   - `POSTGRES_DATABASE`

### Option B: Using Vercel CLI

```bash
npm i -g vercel
vercel login
vercel link
vercel storage create postgres cruxlabx-db
```

## Step 3: Configure Environment Variables

In your Vercel project settings, add these environment variables:

### Database (Auto-added if using Vercel Postgres)
```
DATABASE_URL = [Vercel will auto-populate from Postgres database]
```

### Email (Resend)
```
RESEND_API_KEY = re_3ufFv4v1_5toCQbT15xcBuUd9yRRySuv2
CONTACT_EMAIL = cruxlabx@gmail.com
```

### hCaptcha
```
NEXT_PUBLIC_HCAPTCHA_SITE_KEY = [Your hCaptcha site key]
HCAPTCHA_SECRET_KEY = [Your hCaptcha secret key]
```

### Site URL
```
NEXT_PUBLIC_SITE_URL = https://cruxlabx.vercel.app
```

## Step 4: Update Database Schema for Production

The current setup uses SQLite (for local dev). For production, we need PostgreSQL.

### Update `prisma/schema.prisma`:

Change the datasource from:
```prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

To:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### Update the ContactSubmission model:

Change:
```prisma
model ContactSubmission {
  id        Int      @id @default(autoincrement())
  // ... rest of fields
}
```

To:
```prisma
model ContactSubmission {
  id        String   @id @default(cuid())
  // ... rest of fields
}
```

This is because PostgreSQL uses String IDs with `cuid()` for better scalability.

## Step 5: Deploy

### Via Vercel Dashboard:
1. Click "Deploy" button
2. Wait for build to complete
3. Vercel will automatically run `prisma generate` during build

### Via CLI:
```bash
vercel --prod
```

## Step 6: Initialize Database

After first deployment, you need to push the Prisma schema to your database:

### Option A: Using Vercel CLI
```bash
# Pull environment variables
vercel env pull .env.production

# Run migration
npx prisma migrate deploy
```

### Option B: Using Vercel Dashboard
1. Go to your project → Settings → Environment Variables
2. Copy the `DATABASE_URL` value
3. In your local terminal:
```bash
DATABASE_URL="[paste-the-url-here]" npx prisma db push
```

## Step 7: Verify Deployment

1. Visit your deployed site: `https://cruxlabx.vercel.app`
2. Test the contact form
3. Test admin console access:
   - Open browser console (F12)
   - Type: `show('adminPage')`
   - Enter password: `adminranenu`
   - Check if `/admin/contact-submissions` works

## Troubleshooting

### Build Fails: "Cannot find module 'prisma'"
Add to `package.json`:
```json
{
  "scripts": {
    "postinstall": "prisma generate"
  }
}
```

### Database Connection Error
- Verify `DATABASE_URL` is set in Vercel environment variables
- Make sure Postgres database is created and linked
- Check Prisma schema uses `provider = "postgresql"`

### Emails Not Sending
- Verify `RESEND_API_KEY` is correct
- Check Resend dashboard for error logs
- Make sure `CONTACT_EMAIL` is set

### hCaptcha Not Working
- Verify `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` is for your production domain
- Check `HCAPTCHA_SECRET_KEY` matches your site key
- Update hCaptcha domain whitelist if needed

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` environment variable

## Monitoring

- Check deployment logs: https://vercel.com/[your-username]/cruxlabx/deployments
- View runtime logs: Click on any deployment → "Logs" tab
- Monitor database: Storage → Postgres → "Data" tab

## Next Steps

- [ ] Set up custom domain
- [ ] Configure Sentry for error tracking
- [ ] Set up analytics (Vercel Analytics or Google Analytics)
- [ ] Add more admin features
- [ ] Set up automated backups for database

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Prisma Docs: https://www.prisma.io/docs
- Resend Docs: https://resend.com/docs
