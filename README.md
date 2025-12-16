# Aly Hamad - Portfolio Website

A modern, production-ready portfolio website built with React, TypeScript, TailwindCSS, and Framer Motion.

## Features

- **Modern Design**: Glassmorphism design with dark theme and purple highlights
- **Responsive**: Mobile-first approach with beautiful scaling to desktop
- **Animations**: Smooth scroll animations with Framer Motion (respects prefers-reduced-motion)
- **Performance**: Optimized with lazy loading and minimal dependencies
- **Accessibility**: Semantic HTML, keyboard navigation, ARIA labels
- **No Backend**: Fully static front-end application

## Tech Stack

- **Vite** - Lightning-fast build tool
- **React** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **SVG Icons** - Custom inline SVG components

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── icons/          # SVG icon components
│   │   ├── sections/       # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── Navigation.tsx
│   ├── data/
│   │   └── profile.ts      # Configuration file
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Update profile information** in `src/data/profile.ts`:
   - Name, title, location
   - Contact information (email, WhatsApp, GitHub, Upwork)
   - Skills, projects, and experience

## Development

Run the development server:

```bash
npm run dev
```

The site will open automatically at `http://localhost:5173`

## Build

Create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## Preview

Preview the production build locally:

```bash
npm run preview
```

## Customization

### Update Contact Links

Edit `src/data/profile.ts`:

```typescript
contact: {
  email: "your@email.com",
  whatsappUrl: "https://wa.me/1234567890",
  githubRepoUrl: "https://github.com/yourusername",
  upworkProfileUrl: "https://www.upwork.com/freelancers/~username",
}
```

### Add Projects

Add to the `projects` array in `src/data/profile.ts`:

```typescript
{
  id: "5",
  title: "Your Project",
  description: "Project description",
  stack: ["React", "Node.js", "PostgreSQL"],
  github: "https://github.com/...",
  live: "https://...",
  featured: false,
}
```

### Modify Colors

Edit `tailwind.config.js` to adjust the color scheme:

```javascript
colors: {
  'purple': {
    400: '#A78BFA',
    500: '#8B5CF6',
    600: '#7C3AED',
    700: '#6D28D9',
  },
}
```

## Performance Metrics

- Minimal dependencies
- Optimized bundle size
- Lazy-loaded animations
- Responsive images (placeholder support)
- CSS optimization via TailwindCSS

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus states visible on all interactive elements
- High contrast dark theme
- Respects `prefers-reduced-motion`

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically on every push

### Other Platforms

- **Netlify**: Connect GitHub repo, set build command to `npm run build`
- **GitHub Pages**: Configure `vite.config.ts` with correct base path
- **Traditional Hosting**: Upload `dist/` folder contents

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- ES2020+ JavaScript support

## License

MIT License - Feel free to use this template for your portfolio

## Support

For questions or issues, please create an issue on GitHub.
