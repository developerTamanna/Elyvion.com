# Elyvion - Next.js modern Website 

A fully responsive Next.js implementation of the Elyvion website with mobile-first design.

## Features

### 🎨 Design
- **Exact UI match** with the original Elyvion website
- **Mobile-first responsive design** - Optimized for all screen sizes
- **Modern UI components** with smooth animations
- **Tailwind CSS 4** for styling

### 📱 Mobile Responsive Features
- **Bottom Navigation Bar** - Fixed navigation for mobile devices (hidden on desktop)
- **Responsive Header** - Collapsible mobile menu with hamburger icon
- **Adaptive Typography** - Text sizes adjust for different screen sizes
- **Flexible Layouts** - Grid layouts adapt from mobile to desktop
- **Touch-friendly** - All interactive elements optimized for touch

### 📄 Pages
- `/` - Home page with hero, brands, about, and awards sections
- `/services` - Services page
- `/campaign` - Campaign page
- `/history` - History page
- `/account` - Account page
- `/member-level` - Member level page
- `/help` - Help center
- `/customer-service` - Customer service

### 🧩 Components
- **Header** - Fixed navigation with mobile menu
- **Hero** - Full-width hero section with CTA
- **BrandsCarousel** - Animated brand logos
- **AboutSection** - About content with images
- **AwardsSection** - Awards showcase
- **BottomNav** - Mobile-only bottom navigation

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## Mobile Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)
- **Desktop**: > 1024px (lg/xl)

### Key Responsive Features:
- Bottom navigation shows only on mobile/tablet (< 1024px)
- Header navigation adapts with hamburger menu on mobile
- Hero text scales from 3xl to 7xl based on screen size
- All sections have responsive padding and margins
- Images are optimized with Next.js Image component

## Tech Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Styling
- **Next.js Image** - Optimized images

## Project Structure

```
app/
├── components/
│   ├── Header.js          # Top navigation
│   ├── Hero.js            # Hero section
│   ├── BrandsCarousel.js  # Brand logos
│   ├── AboutSection.js    # About content
│   ├── AwardsSection.js   # Awards showcase
│   └── BottomNav.js       # Mobile navigation
├── services/
├── campaign/
├── history/
├── account/
├── member-level/
├── help/
├── customer-service/
├── layout.js              # Root layout
├── page.js                # Home page
└── globals.css            # Global styles

public/
├── images/
│   ├── hero.png
│   └── wining.png
└── logo/
    └── logo.png
```

## Notes

- The bottom navigation is **mobile-only** and hidden on large screens (lg:hidden)
- All pages are fully responsive with adaptive layouts
- Images are loaded from `/public/images/` and `/public/logo/` directories
- The website uses a fixed header and bottom navigation for better mobile UX
