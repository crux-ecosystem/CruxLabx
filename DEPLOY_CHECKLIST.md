# 🚀 Vercel Deployment Checklist

## ✅ Pre-Deployment (Completed)
- [x] Code pushed to GitHub: https://github.com/crux-ecosystem/CruxLabx
- [x] Prisma schema updated for PostgreSQL
- [x] Environment variables documented in `.env.example`
- [x] Database files added to `.gitignore`
- [x] Postinstall script added for Prisma generation

## 📋 Next Steps: Deploy to Vercel

### 1. Create Vercel Project
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select: `crux-ecosystem/CruxLabx`
4. Click "Import"

### 2. Add Environment Variables (Required Before First Deploy)
Click "Environment Variables" tab and add these:

```
RESEND_API_KEY = re_3ufFv4v1_5toCQbT15xcBuUd9yRRySuv2
CONTACT_EMAIL = cruxlabx@gmail.com
NEXT_PUBLIC_HCAPTCHA_SITE_KEY = ff28c150-363c-43ac-aaf4-a7a23916092c
HCAPTCHA_SECRET_KEY = [Your hCaptcha secret key from .env.local]
NEXT_PUBLIC_SITE_URL = https://cruxlabx.vercel.app
```

**Note:** Copy the `HCAPTCHA_SECRET_KEY` value from your `.env.local` file.
**Note:** You can update `NEXT_PUBLIC_SITE_URL` after deployment with your actual URL.

### 3. Deploy First Time
1. Click "Deploy" button
2. Wait 2-3 minutes for build to complete
3. Your site is now live! 🎉

### 4. Add Vercel Postgres Database (After First Deploy)
**Now add the database:**

1. Go to your project dashboard: https://vercel.com/dashboard
2. Click on your `CruxLabx` project
3. Click "Storage" tab at the top
4. Click "Create Database"
5. Select "Postgres"
6. Click "Continue"
7. Name: `cruxlabx-db`
8. Region: Choose closest to your users (e.g., `Washington, D.C., USA (iad1)`)
9. Click "Create"

Vercel will automatically add these environment variables to your project:
- ✅ `POSTGRES_URL`
- ✅ `POSTGRES_PRISMA_URL`
- ✅ `POSTGRES_URL_NON_POOLING`
- ✅ `DATABASE_URL`

### 5. Redeploy to Use Database
After adding the database:

1. Go to "Deployments" tab
2. Click the "..." menu on the latest deployment
3. Click "Redeploy"
4. OR just push a new commit to trigger auto-deploy
After first deployment:

**Option A: Via Vercel Dashboard**
1. Go to Storage → Postgres → Data tab
2. Click "Query" tab
3. Vercel will auto-run migrations

**Option B: Via CLI** (if needed)
```bash
# Install Vercel CLI
npm i -g vercel

# Pull environment variables
vercel env pull .env.production

# Push database schema
npx prisma db push
```

### 6. Initialize Database Schema
After adding the database and redeploying:

**Option A: Automatic (Recommended)**
The database schema should be automatically created on the next deployment.

**Option B: Manual Push via CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login and link to your project
vercel login
vercel link

# Pull environment variables (includes DATABASE_URL from Postgres)
vercel env pull .env.production

# Push database schema
npx prisma db push
```

### 7. Test Your Deployment

#### Test Contact Form:
1. Visit: `https://[your-app].vercel.app/contact`
2. Fill and submit form
3. Check if you receive email at `cruxlabx@gmail.com`
4. Check if user receives thank you email

#### Test Admin Console:
1. Visit: `https://[your-app].vercel.app`
2. Open browser console (F12)
3. Type: `show('adminPage')`
4. Enter password: `adminranenu`
5. Should redirect to: `/admin/contact-submissions`
6. Verify contact submissions are displayed

#### Test Direct URL Blocking:
1. Try visiting: `https://[your-app].vercel.app/admin/contact-submissions`
2. Should redirect to homepage (blocked by middleware)
3. ✅ Security working!

## 🔧 Troubleshooting

### Build Fails: Prisma Error
If you see: `Error: @prisma/client did not initialize yet`

**Fix:**
```bash
# Vercel should run this automatically via postinstall
# But if needed, add to vercel.json:
{
  "buildCommand": "prisma generate && next build"
}
```

### Database Connection Error
1. Check Storage → Postgres is created
2. Verify `DATABASE_URL` is in environment variables
3. Run `prisma db push` to sync schema

### Emails Not Sending
1. Verify `RESEND_API_KEY` is correct
2. Check Resend dashboard: https://resend.com/emails
3. Verify sender email is verified in Resend

### hCaptcha Not Working
1. Log in to https://hcaptcha.com
2. Add your Vercel domain to allowed domains
3. Copy correct site key and secret
4. Update environment variables in Vercel

## 🎯 Post-Deployment

### Update Environment Variables
After deployment, update:
```
NEXT_PUBLIC_SITE_URL = https://[your-actual-url].vercel.app
```

### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your domain: `cruxlabx.com`
3. Update DNS records as shown
4. Update `NEXT_PUBLIC_SITE_URL` to your custom domain

### Monitor Your App
- **Logs:** https://vercel.com/[username]/cruxlabx/deployments
- **Analytics:** Enable in Project Settings
- **Database:** Storage → Postgres → Data tab

## 📊 Expected Costs

- **Vercel Hobby Plan:** FREE
  - 100 GB bandwidth
  - Unlimited deployments
  - Automatic HTTPS
  
- **Vercel Postgres:** FREE tier includes:
  - 256 MB storage
  - 60 hours compute time/month
  - Should be enough for moderate traffic

- **Resend:** FREE tier includes:
  - 100 emails/day
  - 3,000 emails/month

## 🎉 Success!

Once deployed, your app will be live at:
- **Vercel URL:** https://cruxlabx.vercel.app
- **GitHub Repo:** https://github.com/crux-ecosystem/CruxLabx

Share your live site with the world! 🌍

---

Need help? Check the full guide: `VERCEL_DEPLOYMENT.md`
