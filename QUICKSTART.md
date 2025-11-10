# 🚀 Quick Start Guide

Get your AI Interview Platform landing page up and running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Your landing page will be available at `http://localhost:5173`

## 🎨 Customization Checklist

### 1. Update Content

#### Hero Section (`src/components/sections/Hero.tsx`)
- [ ] Update main headline
- [ ] Modify description text
- [ ] Change CTA button text
- [ ] Update feature bullets

#### Features (`src/components/sections/Features.tsx`)
- [ ] Replace feature icons
- [ ] Update feature titles
- [ ] Modify feature descriptions

#### Pricing (`src/components/sections/Pricing.tsx`)
- [ ] Set your pricing tiers
- [ ] Update feature lists
- [ ] Modify CTA buttons

#### Testimonials (`src/components/sections/Testimonials.tsx`)
- [ ] Add real testimonials
- [ ] Update user photos
- [ ] Change company names

### 2. Customize Spline Scene

Replace the default scene URL in:
- `src/components/sections/Hero.tsx`
- `src/components/sections/CTA.tsx`

```tsx
scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
```

**How to get your Spline scene:**
1. Create a scene at [spline.design](https://spline.design)
2. Export → Get Link
3. Copy the scene URL
4. Replace in components

### 3. Update Colors

Edit `src/index.css` CSS variables:

```css
:root {
  --background: 0 0% 100%;
  --primary: 0 0% 9%;
  /* Customize these values */
}
```

Or use Tailwind classes directly in components:
```tsx
className="bg-purple-600 hover:bg-purple-700"
```

### 4. Add Your Logo

Replace "AI Interview" text in:
- `src/components/sections/Footer.tsx`

### 5. Update Links

Update all `href="#"` placeholders with real URLs:
- Footer links
- Social media links
- CTA buttons

## 🎯 Common Customizations

### Change Button Colors

```tsx
// Gradient button
<Button className="bg-gradient-to-r from-purple-600 to-blue-600">
  Click Me
</Button>

// Solid color
<Button className="bg-green-600 hover:bg-green-700">
  Click Me
</Button>
```

### Modify Card Hover Effects

```tsx
<Card className="hover:scale-105 hover:border-purple-500/50 transition-all">
  Content
</Card>
```

### Add New Section

1. Create new file: `src/components/sections/NewSection.tsx`
2. Import in `src/App.tsx`
3. Add to component tree

```tsx
import { NewSection } from './components/sections/NewSection';

function App() {
  return (
    <div>
      {/* ... other sections */}
      <NewSection />
    </div>
  );
}
```

## 📱 Testing Responsive Design

```bash
# Start dev server
npm run dev

# Open in browser and test:
# - Mobile: Cmd/Ctrl + Shift + M (Chrome DevTools)
# - Tablet: Resize browser window
# - Desktop: Full screen
```

## 🚀 Deploy

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Drag & drop 'dist' folder to Netlify
```

### GitHub Pages

```bash
# Build
npm run build

# Push 'dist' folder to gh-pages branch
```

## 🐛 Troubleshooting

### Spline scene not loading
- Check scene URL is correct
- Verify scene is published in Spline
- Check browser console for errors

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
# Check for errors
npm run build
```

## 📚 Next Steps

- [ ] Add analytics (Google Analytics, Plausible)
- [ ] Set up contact form
- [ ] Add email capture
- [ ] Implement authentication
- [ ] Connect to backend API
- [ ] Add blog section
- [ ] Set up SEO meta tags
- [ ] Add sitemap.xml
- [ ] Configure robots.txt

## 💡 Tips

1. **Performance**: Lazy load images and components
2. **SEO**: Add meta tags in `index.html`
3. **Analytics**: Add tracking scripts
4. **Forms**: Use services like Formspree or EmailJS
5. **Hosting**: Vercel/Netlify for automatic deployments

## 🆘 Need Help?

- Check the main README.md
- Review component documentation
- Check browser console for errors
- Verify all dependencies are installed

Happy building! 🎉
