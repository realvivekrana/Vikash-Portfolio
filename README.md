# Interior Designer Portfolio Website

A premium, modern interior designer portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern luxury minimal design
- 🎨 Clean typography with elegant spacing
- 🌓 Dark mode toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎭 Smooth animations with Framer Motion
- 🖼️ Project filtering and modal details
- 📧 Contact form with validation
- 🗺️ Google Maps integration
- ⬆️ Back to top button
- 🎯 SEO optimized

## Sections

1. **Sticky Navbar** - Transparent on hero, solid on scroll with mobile menu
2. **Hero Section** - Full-screen with parallax effect
3. **About Section** - Designer bio, skills, and tools
4. **Services Section** - 6 service cards with icons
5. **Featured Projects** - Filterable grid with modal details
6. **Design Process** - 5-step timeline
7. **Testimonials** - Client reviews with ratings
8. **Contact Section** - Form, contact info, and map
9. **Footer** - Links and social media

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  primary: '#1a1a1a',
  secondary: '#f5f5f0',
  accent: '#d4af37',
  beige: '#e8e4dc',
}
```

### Content

- Update project data in `components/Projects.tsx`
- Modify services in `components/Services.tsx`
- Change testimonials in `components/Testimonials.tsx`
- Update contact info in `components/Contact.tsx` and `components/Footer.tsx`

### Images

Replace placeholder images from Unsplash with your own:
- Hero background
- About section photo
- Project images
- Testimonial avatars

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Process.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Loading.tsx
├── public/
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Performance Optimization

- Optimized images with Next.js Image component
- Lazy loading with Intersection Observer
- Minimal bundle size
- Server-side rendering

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your projects!

## Credits

- Design inspiration: Modern luxury interior design trends
- Images: Unsplash (replace with your own)
- Icons: Lucide React
- Fonts: Google Fonts (Playfair Display, Inter)

---

Built with ❤️ for interior designers
