# Daycare Website Template

A modern, customizable website template for daycare centers built with Next.js and Tailwind CSS.

## Customization

To customize the template for your daycare, follow these steps:

1. Open `src/config/site.ts` and modify the following values:

```typescript
export const siteConfig = {
  name: "Your Daycare Name", // Change to your daycare's name
  description: "Your daycare description", // Update with your description
  url: "https://your-daycare-url.com", // Your website URL
  ogImage: "https://your-daycare-url.com/og.jpg", // Your social media preview image
  links: {
    facebook: "https://facebook.com/your-daycare", // Your Facebook page
    instagram: "https://instagram.com/your-daycare", // Your Instagram page
  },
  colors: {
    primary: {
      DEFAULT: "#3B82F6", // Your primary brand color
      hover: "#2563EB", // Your primary color hover state
    },
    secondary: {
      DEFAULT: "#10B981", // Your secondary brand color
      hover: "#059669", // Your secondary color hover state
    },
  },
  favicon: "/favicon.ico", // Path to your favicon
}
```

2. Replace the favicon:
   - Place your favicon file in the `public` directory
   - Update the `favicon` path in `siteConfig` if your file has a different name

3. Colors:
   - The template uses CSS variables for colors, making it easy to maintain consistency
   - Primary color is used for main actions and highlights
   - Secondary color is used for supporting elements
   - You can use any valid CSS color value (hex, rgb, hsl, etc.)

## Development

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

## Features

- Responsive design
- Modern UI components
- SEO optimized
- Easy customization
- Fast performance
- Accessible

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
