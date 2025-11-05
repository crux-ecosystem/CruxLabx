# Contact Form - Quick Reference

## 📧 What Happens When a User Submits the Form

1. **Captcha Verification** ✓
   - hCaptcha validates the submission
   
2. **Database Storage** 💾
   - Submission saved to `contact_submissions` table
   - Fields: name, email, message, timestamp
   
3. **Admin Notification Email** 📨
   - **To:** `CONTACT_EMAIL` (you)
   - **Subject:** "New Contact Form Submission from [Name]"
   - **Contains:** Name, email, message, reply button
   - **Template:** Professional branded email with CruxLabX colors
   
4. **User Thank You Email** 💌
   - **To:** User's email
   - **Subject:** "Thank you for contacting CruxLabX"
   - **Contains:** Personalized thank you, response timeline (24-48 hrs)
   - **Template:** Branded welcome email with links to research/projects

## 🗂️ Database Schema

```prisma
model ContactSubmission {
  id        String   @id @default(cuid())
  name      String
  email     String
  message   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🔑 Required Environment Variables

```bash
DATABASE_URL="postgresql://..."        # PostgreSQL connection
RESEND_API_KEY="re_..."               # Resend API key
FROM_EMAIL="onboarding@resend.dev"    # Sender email
CONTACT_EMAIL="your@email.com"        # Your email (receives submissions)
HCAPTCHA_SECRET="..."                 # hCaptcha secret
NEXT_PUBLIC_HCAPTCHA_SITEKEY="..."   # hCaptcha site key
```

## 📁 Files Changed/Created

### New Files
- `prisma/schema.prisma` - Database schema
- `src/lib/db.ts` - Prisma client singleton
- `src/lib/email-templates.ts` - Email HTML templates
- `CONTACT_SETUP.md` - Detailed setup guide
- `.env.example` - Environment variables template

### Modified Files
- `src/app/api/contact/route.ts` - API with DB + dual emails
- `package.json` - Added Prisma scripts

## 🎨 Email Templates Customization

Edit `src/lib/email-templates.ts`:

```typescript
// Admin notification email
export function getAdminNotificationEmail(name, email, message)

// User thank you email  
export function getThankYouEmail(name)
```

Both templates use:
- CruxLabX brand colors (#66FCF1)
- Responsive HTML
- Plain text fallback
- Professional formatting

## 🚀 Quick Start Commands

```bash
# Setup database
npm run db:generate    # Generate Prisma Client
npm run db:push        # Sync schema to DB

# View submissions
npm run db:studio      # Open Prisma Studio GUI

# Development
npm run dev           # Start dev server
```

## 📊 Viewing Submissions

### Option 1: Prisma Studio (GUI)
```bash
npm run db:studio
```
→ Opens `http://localhost:5555`

### Option 2: Code Query
```typescript
import { prisma } from '@/lib/db';

const submissions = await prisma.contactSubmission.findMany({
  orderBy: { createdAt: 'desc' },
  take: 10
});
```

## 🔒 Security Features

- ✅ hCaptcha spam protection
- ✅ Server-side email validation
- ✅ Input sanitization
- ✅ Prisma ORM (SQL injection protection)
- ✅ Environment variables for secrets

## 🐛 Debugging

### Check if database is connected:
```bash
npx prisma db push
```

### Check if emails are configured:
```bash
# Look for these in Resend dashboard:
# resend.com/emails
```

### Check contact form logs:
```bash
# In terminal running `npm run dev`
# Look for: "Admin notification sent"
# Look for: "Thank you email sent"
```

## 📈 Next Steps (Optional)

- [ ] Add rate limiting middleware
- [ ] Create admin dashboard to view submissions
- [ ] Add email notification preferences
- [ ] Implement email templates with React Email
- [ ] Add file upload support
- [ ] Create auto-responder sequences

---

**Need help?** Check `CONTACT_SETUP.md` for detailed setup instructions.
