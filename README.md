# CruxLabx Official Website

Official website for CruxLabx - Engineering Intelligence from Within.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Vercel account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cruxlabx-official
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Fill in your environment variables in `.env.local`:
   - `HCAPTCHA_SECRET` and `NEXT_PUBLIC_HCAPTCHA_SITEKEY` from [hCaptcha](https://www.hcaptcha.com/)
   - `RESEND_API_KEY` from [Resend](https://resend.com/)
   - `CONTACT_EMAIL` - Email address to receive contact form submissions
   - `FROM_EMAIL` - Email address to send from (must be verified in Resend)
   - `GEMINI_API_KEY` (optional) - For IntraMind Ask feature

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment to Vercel

### Automatic Deployment

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `HCAPTCHA_SECRET` | hCaptcha secret key | Yes |
| `NEXT_PUBLIC_HCAPTCHA_SITEKEY` | hCaptcha site key | Yes |
| `RESEND_API_KEY` | Resend API key for emails | Yes (for contact form) |
| `CONTACT_EMAIL` | Email to receive contact submissions | Yes |
| `FROM_EMAIL` | Sender email (must be verified in Resend) | Yes |
| `GEMINI_API_KEY` | Google Gemini API key | Optional |
| `NEXT_PUBLIC_SITE_URL` | Your site URL | Optional |

## 📧 Email Setup (Resend)

1. Sign up at [Resend](https://resend.com/)
2. Verify your domain or use the test domain
3. Get your API key from the dashboard
4. Add it to your environment variables
5. Configure `FROM_EMAIL` to a verified domain/email

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Email**: Resend
- **Captcha**: hCaptcha
- **Deployment**: Vercel

## 📝 Features

- ✅ Responsive design
- ✅ Contact form with email notifications
- ✅ hCaptcha spam protection
- ✅ Animated UI components
- ✅ IntraMind documentation
- ✅ Dark mode support

## 🐛 Troubleshooting

### Contact form not sending emails

1. Check Resend API key is correct
2. Verify FROM_EMAIL is verified in Resend
3. Check Vercel function logs for errors
4. Ensure environment variables are set in Vercel

### Build errors

1. Clear `.next` folder: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check Node.js version: `node --version` (should be 18+)

## 📄 License

Copyright © 2025 CruxLabx. All rights reserved.
