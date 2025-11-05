# Contact Form Setup Guide

This guide will help you set up the contact form with database storage and email notifications.

## Features

✅ **Database Storage** - All contact form submissions are saved to PostgreSQL  
✅ **Admin Notification** - You receive an email when someone submits the form  
✅ **User Thank You Email** - Users receive an automated thank you email  
✅ **hCaptcha Protection** - Spam protection with hCaptcha  

---

## Prerequisites

1. **PostgreSQL Database** - You can use:
   - [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) (Recommended)
   - [Supabase](https://supabase.com/)
   - [Neon](https://neon.tech/)
   - Any PostgreSQL provider

2. **Resend Account** - For sending emails:
   - Sign up at [resend.com](https://resend.com)
   - Free tier: 3,000 emails/month

3. **hCaptcha Account** - For spam protection:
   - Sign up at [hcaptcha.com](https://www.hcaptcha.com/)
   - Free tier available

---

## Step 1: Database Setup

### Option A: Vercel Postgres (Recommended for Vercel deployments)

1. Go to your Vercel project dashboard
2. Navigate to **Storage** → **Create Database** → **Postgres**
3. Vercel will automatically add these environment variables:
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL` 
   - `POSTGRES_URL_NON_POOLING`

4. Add to your `.env.local`:
```bash
DATABASE_URL="${POSTGRES_PRISMA_URL}"
```

### Option B: Other PostgreSQL Providers

1. Get your PostgreSQL connection string
2. Add to `.env.local`:
```bash
DATABASE_URL="postgresql://user:password@host:5432/database"
```

---

## Step 2: Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. (Optional) Verify your domain for branded emails
4. Add to `.env.local`:

```bash
RESEND_API_KEY="re_your_api_key_here"
FROM_EMAIL="onboarding@resend.dev"  # Or your verified domain
CONTACT_EMAIL="your-email@example.com"  # Where you want to receive messages
```

**Note:** Without domain verification, you can only send to the email you signed up with.

---

## Step 3: hCaptcha Setup

1. Sign up at [hcaptcha.com](https://www.hcaptcha.com/)
2. Create a new site
3. Get your Site Key and Secret Key
4. Add to `.env.local`:

```bash
HCAPTCHA_SECRET="your_secret_key"
NEXT_PUBLIC_HCAPTCHA_SITEKEY="your_site_key"
```

---

## Step 4: Initialize Database

Run these commands in order:

```bash
# Generate Prisma Client
npm run db:generate

# Push schema to database (for development)
npm run db:push

# Or create a migration (for production)
npm run db:migrate
```

---

## Step 5: Test the Setup

1. Start your development server:
```bash
npm run dev
```

2. Visit `http://localhost:3000/contact`
3. Fill out and submit the form
4. Check:
   - ✅ Database entry (run `npm run db:studio` to view)
   - ✅ Admin notification email
   - ✅ User thank you email

---

## Environment Variables Summary

Create a `.env.local` file in the project root:

```bash
# Database
DATABASE_URL="postgresql://..."

# Email (Resend)
RESEND_API_KEY="re_..."
FROM_EMAIL="onboarding@resend.dev"
CONTACT_EMAIL="your-email@example.com"

# hCaptcha
HCAPTCHA_SECRET="..."
NEXT_PUBLIC_HCAPTCHA_SITEKEY="..."
```

---

## Prisma Commands

```bash
# Generate Prisma Client
npm run db:generate

# Push schema to database (no migrations)
npm run db:push

# Create and apply migrations
npm run db:migrate

# Open Prisma Studio (GUI for viewing data)
npm run db:studio
```

---

## Viewing Contact Submissions

### Option 1: Prisma Studio (Recommended)
```bash
npm run db:studio
```
Opens a GUI at `http://localhost:5555` where you can view and manage submissions.

### Option 2: Direct Database Query
Connect to your database using any PostgreSQL client and query:
```sql
SELECT * FROM contact_submissions ORDER BY created_at DESC;
```

---

## Email Templates

Email templates are located in `src/lib/email-templates.ts`. You can customize:

- **Admin Notification Email** - `getAdminNotificationEmail()`
- **User Thank You Email** - `getThankYouEmail()`

Both templates are fully responsive and branded with CruxLabX colors.

---

## Troubleshooting

### Database Connection Issues
- Verify `DATABASE_URL` is correct
- Check firewall/IP allowlist settings
- For Vercel Postgres, ensure you're using `POSTGRES_PRISMA_URL`

### Email Not Sending
- Verify `RESEND_API_KEY` is valid
- Check Resend dashboard for logs
- Without domain verification, emails only go to your signup email
- Check spam folder

### hCaptcha Failing
- Verify both `HCAPTCHA_SECRET` and `NEXT_PUBLIC_HCAPTCHA_SITEKEY` are set
- Check hCaptcha dashboard for blocked attempts

### Build Errors
```bash
# Regenerate Prisma Client
npm run db:generate

# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

---

## Production Deployment

### Vercel

1. Add all environment variables in Vercel dashboard:
   - Settings → Environment Variables

2. Deploy:
```bash
git push
```

Vercel will automatically:
- Run `prisma generate`
- Build the app
- Apply environment variables

### Other Platforms

1. Ensure these build steps run:
```bash
npm install
npm run db:generate
npm run build
```

2. Set all environment variables in your platform's dashboard

---

## Security Notes

- ✅ hCaptcha prevents spam
- ✅ Input validation on server side
- ✅ Email sanitization to prevent injection
- ✅ Database uses parameterized queries (Prisma ORM)
- ✅ Rate limiting recommended (add middleware if needed)

---

## Support

For issues or questions:
- Check Prisma docs: https://www.prisma.io/docs
- Check Resend docs: https://resend.com/docs
- Check hCaptcha docs: https://docs.hcaptcha.com/

