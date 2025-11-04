# GitHub Copilot Instructions - Cheetee Paata Website

## 📘 **PRIMARY REFERENCE: Project Context**

This is the **official website** for the Cheetee Paata mobile application - a digital chit fund manager available on iOS, Android, and web platforms.

**Repository Relationship:**
- **This Repo**: `cheetee-paata-web-app` - Marketing website (Next.js)
- **Mobile App Repo**: `cheetee-paata-mobile-app` - React Native app (Expo)

**ALWAYS maintain consistency** between website content and mobile app features.

---

## 🎯 **CORE PRINCIPLE: Task-Driven Problem Solving**

**MANDATORY APPROACH for ALL technical issues and feature requests:**

### 1. **Plan Before Execute** (ALWAYS FIRST STEP)
```
When user reports an issue or requests a feature:
├─ Step 1: STOP and ANALYZE (Don't jump to solutions)
├─ Step 2: CREATE TODO LIST with specific, measurable tasks
├─ Step 3: RESEARCH if needed (web search, documentation)
├─ Step 4: EXECUTE tasks one by one
├─ Step 5: VERIFY each task completion
└─ Step 6: UPDATE documentation
```

### 2. **TODO List Management** (Use `manage_todo_list` tool)
```typescript
// Example: User asks to "add SEO optimization"

// ❌ WRONG: Immediate implementation without planning
create_file("robots.txt", "...")  // Shotgun approach

// ✅ CORRECT: Systematic approach
manage_todo_list({
  operation: "write",
  todoList: [
    {
      id: 1,
      title: "Audit current SEO setup",
      description: "Check metadata, OpenGraph, favicons, robots.txt, sitemap",
      status: "in-progress"
    },
    {
      id: 2,
      title: "Add missing SEO files",
      description: "Create/update robots.txt, sitemap.xml, site.webmanifest",
      status: "not-started"
    },
    {
      id: 3,
      title: "Enhance page metadata",
      description: "Add comprehensive metadata to all pages",
      status: "not-started"
    },
    {
      id: 4,
      title: "Verify SEO implementation",
      description: "Test with Google Search Console tools",
      status: "not-started"
    }
  ]
})
```

---

## 🏗️ **PROJECT ARCHITECTURE**

### Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.9 (Strict Mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

### Directory Structure
```
cheetee-paata-website/
├── .github/
│   └── copilot-instructions.md  # This file
├── app/
│   ├── layout.tsx               # Root layout with global metadata
│   ├── page.tsx                 # Home page
│   ├── privacy-policy/          # Privacy policy
│   ├── terms-of-service/        # Terms of service
│   ├── delete-account/          # Account deletion (Play Store requirement)
│   └── feedback/                # Feedback form (Alpha/Beta testing)
├── components/
│   └── ui/                      # shadcn components
├── lib/
│   └── utils.ts                 # Utility functions
├── public/
│   ├── favicon*.png             # Favicons (multiple sizes)
│   ├── android-chrome*.png      # Android icons
│   ├── apple-touch-icon.png     # iOS icon
│   ├── robots.txt               # Search engine instructions
│   ├── sitemap.xml              # Site structure
│   └── site.webmanifest         # PWA manifest
└── Documentation files (.md)
```

---

## 🌐 **WEBSITE PAGES & PURPOSE**

### 1. Home Page (`/`)
**Purpose**: Marketing landing page  
**Key Sections**:
- Hero with app download CTA
- Feature showcase
- "Perfect For" section
- Language support highlight

**Content Guidelines**:
- Keep in sync with mobile app features
- Update when new features launch
- Maintain brand consistency (orange theme)

### 2. Privacy Policy (`/privacy-policy`)
**Purpose**: Legal requirement for Play Store  
**Key Content**:
- Data collection disclosure
- Firebase integration details
- User rights (GDPR compliant)
- Contact information

**Update Triggers**:
- New data collection added to app
- Firebase services changed
- Legal requirements update

### 3. Terms of Service (`/terms-of-service`)
**Purpose**: Legal protection and user agreement  
**Key Content**:
- App usage terms
- Chit fund disclaimers
- Liability limitations
- Dispute resolution

**Update Triggers**:
- New features with legal implications
- Payment processing changes
- Role-based access updates

### 4. Delete Account (`/delete-account`)
**Purpose**: GDPR/Play Store compliance  
**Key Content**:
- 4-step deletion process
- Data deletion breakdown
- Retention timeline (30 days, 90 days, 7 years)
- Email-based request system

**CRITICAL**: Must match actual app behavior

### 5. Feedback (`/feedback`)
**Purpose**: Alpha/Beta tester feedback collection  
**Key Features**:
- Star rating (1-5)
- Category selection
- Email-based submission
- Pre-filled template

**Play Store Field**: Feedback URL

---

## 🔍 **SEO GUIDELINES**

### Metadata Standards (MANDATORY)

**Every page MUST have**:
```typescript
export const metadata: Metadata = {
  title: "Page Title | Cheetee Paata",
  description: "Detailed description (150-160 characters)",
  keywords: ["relevant", "keywords", "for", "this", "page"],
  openGraph: {
    title: "Page Title",
    description: "Description for social sharing",
    type: "website",
    url: "https://cheeteepaata.com/page-path",
    images: ["/android-chrome-512x512.png"],
  },
  alternates: {
    canonical: "https://cheeteepaata.com/page-path",
  },
};
```

### SEO Checklist (Before Deployment)

- [ ] All pages have unique titles
- [ ] Descriptions are 150-160 characters
- [ ] Keywords relevant and specific
- [ ] OpenGraph tags complete
- [ ] Canonical URLs set
- [ ] robots.txt allows crawling
- [ ] sitemap.xml includes all pages
- [ ] Favicons present (all sizes)
- [ ] site.webmanifest configured
- [ ] Alt text on images
- [ ] Semantic HTML (h1, h2, etc.)
- [ ] Mobile responsive
- [ ] Fast page load (<3s)

### SEO File Management

**robots.txt**:
- Allow all pages
- Include sitemap URL
- No disallow unless necessary

**sitemap.xml**:
- Update when adding pages
- Include lastmod dates
- Set priority appropriately:
  - Home: 1.0
  - Legal pages: 0.8
  - Other pages: 0.6-0.7

**site.webmanifest**:
- Keep in sync with app.json from mobile repo
- Update theme colors if branding changes
- Include all icon sizes

---

## 🎨 **BRAND & DESIGN GUIDELINES**

### Color Palette
```css
--primary: #ea580c;      /* Orange 600 */
--secondary: #f59e0b;    /* Amber 500 */
--accent: #fb923c;       /* Orange 400 */
--background: #ffffff;
--foreground: #1f2937;   /* Gray 800 */
```

### Typography
- **Headings**: Bold, tracking-tight
- **Body**: Readable, 16px minimum
- **CTAs**: Large, prominent

### Consistency Rules
- Orange for primary actions
- White/gray backgrounds
- Card-based layouts
- Lucide icons only
- Mobile-first design

---

## 📱 **MOBILE APP SYNC**

### What to Sync

**Feature Changes**:
- Home page features list
- Screenshot updates
- Version numbers
- Release notes

**Legal Updates**:
- Privacy policy changes
- Terms updates
- Data handling modifications

**Contact Information**:
- Support email
- Company details
- Social links

### How to Check Mobile App

```bash
# Navigate to mobile app repo
cd ../cheetee-paata-mobile-app

# Check app.json for metadata
cat app.json

# Check README for features
cat README.md

# Check docs for latest updates
cat docs/IMPLEMENTATION_GUIDE.md
```

---

## 🛠️ **DEVELOPMENT WORKFLOW**

### Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev  # http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

### Adding New Pages

1. **Create page file**:
   ```bash
   mkdir -p app/new-page
   touch app/new-page/page.tsx
   ```

2. **Add metadata**:
   ```typescript
   export const metadata: Metadata = { /* ... */ };
   ```

3. **Update navigation**:
   - `app/layout.tsx` (header + footer)

4. **Update sitemap.xml**:
   - Add new URL entry
   - Set lastmod, priority

5. **Test**:
   - Verify page loads
   - Check metadata in browser
   - Test mobile responsiveness

### Updating Existing Content

1. **Check current content**
2. **Make targeted changes**
3. **Update lastmod in sitemap**
4. **Verify no broken links**
5. **Test on mobile**

---

## 📋 **PLAY STORE INTEGRATION**

### Required URLs

| Field | URL | Location in Console |
|-------|-----|---------------------|
| **Website** | `https://cheetee-paata.vercel.app` | Store Listing |
| **Privacy Policy** | `https://cheetee-paata.vercel.app/privacy-policy` | Store Listing |
| **Delete Account** | `https://cheetee-paata.vercel.app/delete-account` | App Content → Data Safety |
| **Feedback** | `https://cheetee-paata.vercel.app/feedback` | Testing → Closed Testing |

### Update Triggers

**When mobile app changes**:
- New features → Update home page
- Data collection changes → Update privacy policy
- New roles/permissions → Update terms
- Account deletion flow → Update delete-account page

**Pre-deployment checklist**:
- [ ] All Play Store URLs work
- [ ] SSL certificate valid
- [ ] Pages load on mobile
- [ ] Email links work
- [ ] Forms submit correctly

---

## 🔐 **SECURITY & PRIVACY**

### Email Handling
- All forms use mailto (client-side)
- No server-side data collection
- Privacy-friendly approach
- GDPR compliant

### External Links
- Use `rel="noopener noreferrer"` for external links
- Verify all external URLs
- No tracking scripts (unless explicitly approved)

### Data Collection
- No analytics by default
- No cookies (except essential)
- No user tracking
- Transparent privacy policy

---

## 📚 **DOCUMENTATION STANDARDS**

### When to Update Docs

**After adding features**:
- Update README.md
- Add to relevant guide (PLAY_STORE_QUICK_REFERENCE.md, etc.)
- Update this file if architectural changes

**After fixing bugs**:
- Document solution in README troubleshooting
- Update relevant guide

**After deployment**:
- Update version numbers
- Mark completion dates

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Main project documentation |
| `FEEDBACK_SETUP_GUIDE.md` | Feedback form setup for Play Store |
| `PLAY_STORE_SUBMISSION.md` | Account deletion compliance |
| `PLAY_STORE_QUICK_REFERENCE.md` | URLs and checklists |
| `.github/copilot-instructions.md` | This file - AI coding guidelines |

---

## ✅ **PRE-DEPLOYMENT CHECKLIST**

### Code Quality
- [ ] TypeScript builds without errors
- [ ] No console errors in browser
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Mobile responsive
- [ ] Accessibility tested

### SEO
- [ ] All metadata complete
- [ ] robots.txt allows crawling
- [ ] sitemap.xml updated
- [ ] Favicons present
- [ ] OpenGraph tags verified

### Play Store Compliance
- [ ] Privacy policy accessible
- [ ] Terms of service accessible
- [ ] Delete account page works
- [ ] Feedback form functional
- [ ] All URLs use HTTPS

### Performance
- [ ] Images optimized
- [ ] Page load < 3 seconds
- [ ] Lighthouse score > 90
- [ ] No blocking resources

---

## 🚀 **DEPLOYMENT**

### Vercel Deployment

**Automatic** (recommended):
- Push to `main` branch
- Vercel auto-deploys
- Check deployment logs

**Manual**:
```bash
vercel --prod
```

### Post-Deployment

1. **Verify URLs**:
   - https://cheetee-paata.vercel.app
   - https://cheetee-paata.vercel.app/privacy-policy
   - https://cheetee-paata.vercel.app/terms-of-service
   - https://cheetee-paata.vercel.app/delete-account
   - https://cheetee-paata.vercel.app/feedback

2. **Update Play Console** (if URLs changed)

3. **Test functionality**:
   - Email links
   - Form submissions
   - Mobile responsiveness

4. **Monitor**:
   - Vercel analytics
   - Google Search Console

---

## 🐛 **TROUBLESHOOTING**

### Build Errors

**"Module not found"**:
```bash
rm -rf node_modules .next
npm install
npm run build
```

**TypeScript errors**:
```bash
npm run type-check
```

### Runtime Issues

**Metadata not showing**:
- Check `export const metadata`
- Verify correct type (Metadata)
- Clear browser cache

**Icons not loading**:
- Check public/ directory
- Verify paths in metadata
- Check network tab

**Forms not working**:
- Check mailto: links
- Verify email client setup
- Test on different devices

---

## 🔄 **KEEPING IN SYNC WITH MOBILE APP**

### Weekly Sync Check

1. **Features**: Compare home page with mobile app features
2. **Legal**: Check for privacy policy/terms updates
3. **Contact**: Verify email addresses match
4. **Branding**: Ensure consistent colors/messaging

### When Mobile App Updates

**Feature Launch**:
- Update home page features section
- Add screenshots if available
- Update version references

**API Changes**:
- Update privacy policy if data collection changes
- Update terms if permissions change

**Bug Fixes**:
- Update FAQ if relevant
- Document known issues resolution

---

## 📞 **SUPPORT & MAINTENANCE**

### Contact
- **Email**: cheeteepaata@gmail.com
- **Repository**: github.com/maheshmuttintidev/cheetee-paata-web-app
- **Mobile App Repo**: github.com/maheshmuttintidev/cheetee-paata-mobile-app

### Maintenance Schedule
- **SEO Audit**: Monthly
- **Dependency Updates**: Quarterly
- **Content Review**: When app updates
- **Performance Check**: Monthly

---

## 🎓 **LEARNING RESOURCES**

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

### SEO
- [Google Search Console](https://search.google.com/search-console)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)

### shadcn/ui
- [Components](https://ui.shadcn.com)
- [Theming](https://ui.shadcn.com/docs/theming)

---

**Last Updated**: November 4, 2025  
**Version**: 1.0.0  
**Maintained by**: Cheetee Paata Team

---

## 🤖 **AI ASSISTANT GUIDELINES**

When assisting with this project:

1. **Always check mobile app repo** for feature accuracy
2. **Use manage_todo_list** for complex tasks
3. **Update all related documentation** after changes
4. **Maintain SEO best practices** on every page
5. **Keep Play Store compliance** in mind
6. **Test mobile responsiveness** for all changes
7. **Preserve brand consistency** (orange theme, typography)
8. **Document all significant changes** in README

**Remember**: This website represents the mobile app to the world. Accuracy and professionalism are paramount.
