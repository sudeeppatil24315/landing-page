# AI Interview Platform Landing Page

A stunning, modern landing page built with React, TypeScript, Tailwind CSS, and interactive 3D Spline scenes.

## ✨ Features

- 🎨 Beautiful 3D animated background using Spline
- 🌙 Dark theme with gradient accents
- 📱 Fully responsive design
- ⚡ Lightning-fast with Vite
- 🎭 Smooth animations with Framer Motion
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🧩 Modular component architecture

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Spline** - Interactive 3D scenes
- **shadcn/ui** - Component structure

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── sections/        # Landing page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── splite.tsx
│   │   │   ├── spotlight.tsx
│   │   │   ├── spotlight-aceternity.tsx
│   │   │   └── spotlight-ibelick.tsx
│   │   └── demo.tsx
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── package.json
```

## 🎯 Landing Page Sections

1. **Hero** - Eye-catching hero section with 3D Spline background
2. **Stats** - Key metrics and achievements
3. **Features** - 6 feature cards highlighting platform capabilities
4. **How It Works** - 4-step process explanation
5. **Testimonials** - User reviews with ratings
6. **Pricing** - 3-tier pricing table (Free, Pro, Enterprise)
7. **CTA** - Final call-to-action with 3D background
8. **Footer** - Links and social media

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Key Components

### SplineScene
Lazy-loaded 3D scene component with loading fallback.

```tsx
<SplineScene 
  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
  className="w-full h-full"
/>
```

### Button
Versatile button component with multiple variants.

```tsx
<Button size="lg" variant="default">
  Start Free Trial
</Button>
```

### Card
Container component for content sections.

```tsx
<Card className="p-6">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Spotlight Effects
Two spotlight implementations for visual effects:

```tsx
// Aceternity - Animated SVG
<Spotlight className="-top-40 left-0" fill="white" />

// Ibelick - Interactive mouse-following
<SpotlightIbelick size={200} springOptions={{ bounce: 0 }} />
```

## 🎨 Customization

### Colors & Theme
Edit `src/index.css` to customize the color scheme using CSS variables:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  /* ... more variables */
}
```

### Spline Scene
Replace the scene URL in any component with your own Spline scene:
```tsx
scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
```

### Content
All content is easily editable in the respective section components:
- `src/components/sections/Features.tsx` - Feature cards
- `src/components/sections/Pricing.tsx` - Pricing plans
- `src/components/sections/Testimonials.tsx` - User testimonials
- etc.

## 📦 Dependencies

### Core
- `react` & `react-dom` - UI library
- `typescript` - Type safety
- `vite` - Build tool

### Styling
- `tailwindcss` - Utility-first CSS
- `autoprefixer` & `postcss` - CSS processing
- `clsx` & `tailwind-merge` - Class name utilities
- `class-variance-authority` - Component variants

### 3D & Animation
- `@splinetool/react-spline` - Spline 3D integration
- `@splinetool/runtime` - Spline runtime
- `framer-motion` - Animation library

## 🏗️ Why This Structure?

### `/components/ui`
Standard location for shadcn components:
- Keeps UI primitives separate from features
- Easy to add more shadcn components
- Follows community conventions
- Enables component reuse

### `/components/sections`
Landing page sections:
- Each section is self-contained
- Easy to reorder or remove sections
- Clear separation of concerns
- Simple to maintain and update

## 🎯 Performance

- Lazy loading for Spline scenes
- Optimized images from Unsplash
- Tree-shaking with Vite
- Minimal bundle size
- Fast initial load

## 📱 Responsive Design

Fully responsive breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

Build for production:
```bash
npm run build
```

Deploy the `dist` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service
