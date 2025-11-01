# Quick Start Guide - Vercel Deployment

## ✅ What's Been Set Up

1. **Contact Form Backend** ✓
   - Integrated Resend SDK for email sending
   - hCaptcha verification
   - Input validation and error handling

2. **Configuration Files** ✓
   - `vercel.json` - Vercel deployment config
   - `.env.example` - Environment variables template
   - `.gitignore` - Excludes sensitive files
   - `next.config.ts` - Updated with security headers

3. **Documentation** ✓
   - `README.md` - Full documentation
   - `DEPLOYMENT.md` - Step-by-step deployment guide
   - `QUICK_START.md` - This file

## 🚀 Quick Deployment Steps

### 1. Get API Keys

- **hCaptcha**: Sign up at https://www.hcaptcha.com/
  - Get Site Key and Secret Key
  
- **Resend**: Sign up at https://resend.com/
  - Get API Key
  - Verify your domain or use test domain

### 2. Deploy to Vercel

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. Go to [vercel.com](https://vercel.com) → New Project

3. Import your GitHub repository

4. Add these environment variables:
   ```
   HCAPTCHA_SECRET=your_secret
   NEXT_PUBLIC_HCAPTCHA_SITEKEY=your_sitekey
   RESEND_API_KEY=re_your_key
   CONTACT_EMAIL=your-email@example.com
   FROM_EMAIL=noreply@yourdomain.com (or onboarding@resend.dev for testing)
   ```

5. Click Deploy!

### 3. Test Contact Form

After deployment:
1. Visit your site
2. Go to Contact page
3. Fill out the form
4. Check your email inbox

## 📋 Environment Variables Checklist

Copy these to Vercel → Settings → Environment Variables:

- [ ] `HCAPTCHA_SECRET`
- [ ] `NEXT_PUBLIC_HCAPTCHA_SITEKEY`
- [ ] `RESEND_API_KEY`
- [ ] `CONTACT_EMAIL`
- [ ] `FROM_EMAIL`
- [ ] `GEMINI_API_KEY` (optional)
- [ ] `NEXT_PUBLIC_SITE_URL` (optional)

## 🎯 What Works Now

- ✅ Contact form with email notifications
- ✅ hCaptcha spam protection
- ✅ Email validation
- ✅ Error handling
- ✅ Responsive design
- ✅ All pages and animations

## 🐛 Troubleshooting

**Email not sending?**
- Check Resend API key is correct
- Verify FROM_EMAIL is verified in Resend
- Check Vercel function logs

**Contact form not working?**
- Verify hCaptcha keys are set
- Check browser console for errors
- Review Vercel function logs

**Build failing?**
- Ensure Node.js 18+ in Vercel settings
- Check all dependencies are in package.json
- Review build logs

## 📞 Need Help?

- Check `DEPLOYMENT.md` for detailed guide
- Review `README.md` for full documentation
- Check Vercel dashboard logs

