# Cheetee Paata Website

Official website for Cheetee Paata - Digital Chit Fund Manager mobile application.

## 🚀 Live URL (After Deployment)

- **Production**: `https://cheetee-paata.vercel.app`
- **Privacy Policy**: `https://cheetee-paata.vercel.app/privacy-policy`
- **Terms of Service**: `https://cheetee-paata.vercel.app/terms-of-service`
- **Delete Account**: `https://cheetee-paata.vercel.app/delete-account`

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
cheetee-paata-website/
├── app/
│   ├── page.tsx                # Home page
│   ├── privacy-policy/
│   │   └── page.tsx            # Privacy Policy
│   ├── terms-of-service/
│   │   └── page.tsx            # Terms of Service
│   ├── delete-account/
│   │   └── page.tsx            # Account Deletion
│   ├── layout.tsx              # Root layout (header, footer)
│   └── globals.css             # Global styles
├── components/
│   └── ui/                     # shadcn components
│       ├── button.tsx
│       ├── card.tsx
│       └── separator.tsx
├── lib/
│   └── utils.ts                # Utility functions
└── public/                     # Static assets
```

## 🌐 Pages

### Home Page (`/`)
- Hero section with app branding
- Key features showcase
- "Perfect For" section
- Call-to-action for app download

### Privacy Policy (`/privacy-policy`)
- Comprehensive data collection disclosure
- Firebase integration details
- User rights and data protection
- GDPR-compliant privacy practices

### Terms of Service (`/terms-of-service`)
- Legal terms for app usage
- Chit fund management disclaimer
- User roles and responsibilities
- Liability limitations

### Delete Account (`/delete-account`)
- Step-by-step account deletion instructions
- Email-based deletion request process
- Clear explanation of what data is deleted
- Data retention periods for legal compliance
- Information about data that may be retained

## 🚀 Deployment to Vercel

### Method 1: Via Vercel Dashboard (Recommended for First Deployment)

1. **Push to GitHub**:
   ```bash
   cd /Volumes/MaheshMuttintiSSD/Projects/mobile/cheetee-paata-website
   git init
   git add .
   git commit -m "Initial commit: Cheetee Paata website with privacy policy and terms"
   
   # Create a new GitHub repository named "cheetee-paata-website"
   # Then push:
   git remote add origin https://github.com/YOUR_USERNAME/cheetee-paata-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/new)
   - Click "Add New Project"
   - Import your GitHub repository `cheetee-paata-website`
   - Configure project:
     - **Framework Preset**: Next.js (auto-detected)
     - **Root Directory**: `./`
     - **Build Command**: `npm run build` (default)
     - **Output Directory**: `.next` (default)
   - Click "Deploy"
   - Wait ~2-3 minutes for deployment

3. **Custom Domain** (Optional):
   - In Vercel project settings, go to "Domains"
   - Add your custom domain: `cheetee-paata.vercel.app`
   - Follow Vercel's DNS configuration instructions

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
cd /Volumes/MaheshMuttintiSSD/Projects/mobile/cheetee-paata-website
vercel --prod
```

### Environment Variables (If Needed)

If you add analytics or other services later:

```bash
# In Vercel dashboard or .env.local
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📝 Post-Deployment Steps

### 1. Update Play Store Publishing Guide

After deployment, update the Play Store guide in the mobile app repository:

```markdown
<!-- In cheetee-paata-mobile-app/docs/PLAYSTORE_PUBLISHING_GUIDE.md -->

#### B. Privacy Policy & Terms
- [x] **Privacy Policy URL**: https://cheetee-paata.vercel.app/privacy-policy ✅
- [x] **Terms of Service URL**: https://cheetee-paata.vercel.app/terms-of-service ✅
- [x] **Delete Account URL**: https://cheetee-paata.vercel.app/delete-account ✅
```

### 2. Test All Links

- [ ] Visit: https://cheetee-paata.vercel.app
- [ ] Visit: https://cheetee-paata.vercel.app/privacy-policy
- [ ] Visit: https://cheetee-paata.vercel.app/terms-of-service
- [ ] Visit: https://cheetee-paata.vercel.app/delete-account
- [ ] Test "Send Deletion Request Email" button on delete account page
- [ ] Test navigation between pages
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test dark mode compatibility

### 3. Submit to Google Play Console

In Google Play Console > Store Listing:
- **Privacy Policy URL**: `https://cheetee-paata.vercel.app/privacy-policy`
- **Terms of Service URL**: `https://cheetee-paata.vercel.app/terms-of-service` (optional)

In Google Play Console > App Content > Data Safety:
- **Delete Account URL**: `https://cheetee-paata.vercel.app/delete-account` (required for apps with accounts)

### 4. SEO & Meta Tags (Already Configured)

The following are already set up:
- ✅ Page titles
- ✅ Meta descriptions
- ✅ Semantic HTML structure
- ✅ Accessibility attributes

## 🎨 Customization

### Update Brand Colors

Edit `app/globals.css` and update CSS variables:

```css
@layer base {
  :root {
    --primary: 24 100% 50%; /* Orange */
    --accent: 30 100% 50%; /* Amber */
  }
}
```

### Add More Pages

```bash
# Create a new page
mkdir -p app/about
echo 'export default function AboutPage() { return <div>About Us</div>; }' > app/about/page.tsx
```

### Update Contact Email

Search and replace `cheeteepaata@gmail.com` with your actual email.

## 📊 Analytics (Optional)

To add Google Analytics:

```bash
npm install @next/third-parties
```

Then add to `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## 🐛 Troubleshooting

**Issue: Build fails on Vercel**
```bash
# Solution: Check Node.js version
# Vercel uses Node 20 by default, which is compatible
```

**Issue: Fonts not loading**
```bash
# Solution: Tailwind CSS v4 handles fonts automatically
# No additional configuration needed
```

**Issue: 404 on custom routes**
```bash
# Solution: Ensure pages are in correct folders
# app/privacy-policy/page.tsx → /privacy-policy
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 📄 License

© 2025 Cheetee Paata. All rights reserved.

## 🤝 Support

For questions or issues:
- **Email**: cheeteepaata@gmail.com
- **Website**: https://cheetee-paata.vercel.app
