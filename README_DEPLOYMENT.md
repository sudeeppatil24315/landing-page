# Quick Deployment Setup

## 🚀 Deploy Both Projects Separately

### Step 1: Deploy Main App First
```bash
cd "ai_interview /app-ai-interviews-main"
vercel --prod
```
Note the URL you get (e.g., `https://your-app.vercel.app`)

### Step 2: Update Landing Page Links
```bash
# Back to landing page folder
cd ..
./UPDATE_LINKS.sh https://your-app.vercel.app
```

### Step 3: Deploy Landing Page
```bash
npm run build
vercel --prod
```

## 🌐 Custom Domains

### In Vercel Dashboard:
1. **Main App**: Add domain `app.yoursite.com`
2. **Landing Page**: Add domain `www.yoursite.com`

### DNS Settings:
```
Type    Name    Value
CNAME   app     cname.vercel-dns.com
CNAME   www     cname.vercel-dns.com
```

## ✅ That's It!

Your landing page and app are now deployed separately and linked together!

- Landing: `www.yoursite.com`
- App: `app.yoursite.com`
