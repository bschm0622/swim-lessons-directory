# Astro Tailwind Components Boilerplate

A modern, production-ready Astro starter template with Tailwind CSS and a comprehensive UI component library.

## Features

- **Astro 5** - Fast, content-focused web framework
- **Tailwind CSS** - Utility-first CSS framework
- **Component Library** - Pre-built UI components (Cards, Buttons, Modals, Navigation, etc.)
- **Dark Mode** - Built-in light/dark theme support
- **Blog System** - Content collections with markdown support
- **Search** - Integrated Pagefind search functionality
- **TypeScript** - Type-safe development
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, sitemap, robots.txt

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── ui/         # UI component library
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   └── ...
│   ├── content/        # Content collections
│   │   └── blog/       # Blog posts
│   ├── layouts/        # Page layouts
│   ├── pages/          # File-based routing
│   ├── styles/         # Global styles
│   └── siteConfig.ts   # Site configuration
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## Available Components

### UI Components

- **Layout**: Card, Separator, ScrollArea
- **Navigation**: NavigationMenu, Sidebar, Breadcrumb
- **Forms**: Button, Input, Select, Checkbox, Switch, Textarea, Label
- **Feedback**: Toast, AlertDialog, Tooltip, Badge
- **Data Display**: Avatar, Accordion, Table, Tabs
- **Overlay**: Sheet, DropdownMenu, Dialog

### Page Components

- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Site footer with links
- **BlogReel** - Blog post listing
- **SearchModal** - Full-text search

## Configuration

### Site Settings

Edit `src/siteConfig.ts` to customize your site:

```typescript
export const SITE = {
  title: "Your Site Title",
  description: "Your site description",
  name: "Your Site Name",
  nav: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    // Add more navigation items
  ],
};
```

### Theme Customization

Modify colors in `src/styles/global.css`:

```css
:root {
  --background: hsl(0 0% 98%);
  --foreground: hsl(250 45% 15%);
  --primary: hsl(250 50% 25%);
  /* ... more color variables */
}
```

## Content Management

### Creating Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter:

```markdown
---
title: "Your Post Title"
description: "Post description"
pubDate: "2025-01-15"
author: "Author Name"
---

Your content here...
```

### Content Collections

Astro's content collections provide type-safe content management. Define schemas in `src/content/config.ts`.

## Development

### Adding New Components

1. Create component in `src/components/ui/`
2. Follow existing component patterns
3. Use TypeScript interfaces for props
4. Include proper accessibility attributes

### Styling Guidelines

- Use Tailwind utility classes
- Follow the design system color tokens
- Keep components composable and reusable
- Maintain responsive design patterns

## Deployment

### Build Command

```bash
npm run build
```

### Recommended Hosts

- **Vercel** - Zero-config deployment
- **Netlify** - Continuous deployment
- **Cloudflare Pages** - Edge deployment
- **GitHub Pages** - Static hosting

### Environment Variables

Create `.env` file for environment-specific configuration:

```bash
PUBLIC_SITE_URL=https://yoursite.com
```

## Search Setup

The site includes Pagefind for search functionality:

1. Search is automatically indexed during build
2. Configure in `astro.config.mjs`
3. Customize search UI in `src/components/SearchModal.astro`

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this template for your projects.

## Credits

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Components inspired by [shadcn/ui](https://ui.shadcn.com)
