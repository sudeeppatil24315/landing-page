# Separate Deployment Guide

## Project Structure
- **Landing Page**: Current folder (Vite + React)
- **Main App**: `ai_interview /app-ai-interviews-main` (Next.js)

## Landing Page Deployment

### Option 1: Vercel
```bash
# In the landing page folder
npm run build
# Deploy to Vercel
vercel --prod
```

### Option 2: Netlify
```bash
npm run build
# Deploy dist folder to Netlify
netlify deploy --prod --dir=dist
```

### Build Settings
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+

### Environment Variables
None required for landing page

---

## Main App Deployment

### Option 1: Vercel (Recommended for Next.js)
```bash
cd "ai_interview /app-ai-interviews-main"
vercel --prod
```

### Build Settings
- Build command: `npm run build`
- Output directory: `.next`
- Node version: 18+

### Environment Variables
Add your Firebase and API keys in Vercel dashboard

---

## Connecting Both Projects

### Update Landing Page Links
In `src/components/Navbar.tsx`, `src/components/HeroSection.tsx`, etc:

Change:
```tsx
<a href="/dashboard">Get Started</a>
```

To:
```tsx
<a href="https://app.yoursite.com">Get Started</a>
```

### Domain Setup
- Landing: `www.yoursite.com` or `yoursite.com`
- App: `app.yoursite.com`

### Quick Find & Replace
```bash
# In landing page folder
find src/components -name "*.tsx" -exec sed -i '' 's|href="/dashboard"|href="https://app.yoursite.com"|g' {} \;
find src/components -name "*.tsx" -exec sed -i '' 's|href="/sign-in"|href="https://app.yoursite.com/sign-in"|g' {} \;
```

---

## Testing Locally

### Landing Page
```bash
npm run dev
# Visit http://localhost:5173
```

### Main App
```bash
cd "ai_interview /app-ai-interviews-main"
npm run dev
# Visit http://localhost:3000
```

---

## Deployment Checklist

### Landing Page
- [ ] Update all links to point to app domain
- [ ] Test build: `npm run build`
- [ ] Preview build: `npm run preview`
- [ ] Deploy to hosting
- [ ] Configure custom domain
- [ ] Test all navigation links

### Main App
- [ ] Add environment variables
- [ ] Test build: `npm run build`
- [ ] Deploy to Vercel
- [ ] Configure custom domain
- [ ] Test authentication flow
- [ ] Verify Firebase connection

---

## Post-Deployment

1. Update DNS records for both domains
2. Enable HTTPS/SSL certificates
3. Test cross-origin navigation
4. Monitor performance
5. Set up analytics

Done! 🚀
