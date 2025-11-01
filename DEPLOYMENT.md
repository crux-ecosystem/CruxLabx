# Deployment Guide for Vercel

This guide will help you deploy the CruxLabx website to Vercel.

## Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **hCaptcha Account** - Get keys from [hcaptcha.com](https://www.hcaptcha.com/)
4. **Resend Account** - For email service at [resend.com](https://resend.com/)

## Step-by-Step Deployment

### 1. Prepare Your Repository

Ensure your code is pushed to GitHub:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Select the repository containing this project

### 3. Configure Build Settings

Vercel should auto-detect Next.js. If not, configure:
- **Framework Preset**: Next.js
- **Root Directory**: `cruxlabx-official` (if your repo has nested folders)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

### 4. Add Environment Variables

In Vercel project settings, go to **Environment Variables** and add:

#### Required Variables:

```
HCAPTCHA_SECRET=your_secret_key_here
NEXT_PUBLIC_HCAPTCHA_SITEKEY=your_site_key_here
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your-email@example.com
FROM_EMAIL=noreply@yourdomain.com
```

#### Optional Variables:

```
GEMINI_API_KEY=your_gemini_key_here
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

**Important**: 
- `FROM_EMAIL` must be a verified domain/email in Resend
- Set variables for **Production**, **Preview**, and **Development** environments

### 5. Set Up Email Service (Resend)

1. Sign up at [resend.com](https://resend.com/)
2. Verify your domain or use the test domain
3. Get your API key from Dashboard → API Keys
4. Add the API key to Vercel environment variables
5. Configure `FROM_EMAIL` to match a verified email in Resend

### 6. Deploy

1. Click "Deploy" in Vercel
2. Wait for the build to complete
3. Your site will be live at `https://your-project.vercel.app`

### 7. Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL will be automatically provisioned

## Post-Deployment Checklist

- [ ] Test contact form submission
- [ ] Verify email notifications are working
- [ ] Check hCaptcha is working
- [ ] Test all pages load correctly
- [ ] Verify responsive design on mobile
- [ ] Check analytics/tracking (if added)

## Troubleshooting

### Contact Form Not Working

1. **Check Environment Variables**: Ensure all are set correctly
2. **Verify Resend Setup**: Check API key and domain verification
3. **Check Function Logs**: Go to Vercel Dashboard → Functions → View Logs
4. **Test hCaptcha**: Verify keys are correct

### Build Fails

1. Check Node.js version (should be 18+)
2. Review build logs in Vercel dashboard
3. Ensure all dependencies are in `package.json`
4. Check for TypeScript errors locally first

### Email Not Sending

1. Verify `FROM_EMAIL` is verified in Resend
2. Check `RESEND_API_KEY` is correct
3. Review Vercel function logs for errors
4. Test with Resend dashboard

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `HCAPTCHA_SECRET` | hCaptcha secret key | `0x...` |
| `NEXT_PUBLIC_HCAPTCHA_SITEKEY` | hCaptcha site key | `10000000-...` |
| `RESEND_API_KEY` | Resend API key | `re_...` |
| `CONTACT_EMAIL` | Email to receive submissions | `contact@example.com` |
| `FROM_EMAIL` | Verified sender email | `noreply@example.com` |
| `GEMINI_API_KEY` | Google Gemini API (optional) | `AIza...` |
| `NEXT_PUBLIC_SITE_URL` | Your site URL | `https://cruxlabx.vercel.app` |

## Support

For issues or questions:
- Check Vercel [documentation](https://vercel.com/docs)
- Review Next.js [docs](https://nextjs.org/docs)
- Contact via GitHub issues

