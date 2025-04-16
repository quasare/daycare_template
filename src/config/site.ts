export const siteConfig = {
  name: "Daycare Name",
  description: "A loving and nurturing environment for your child's early education",
  url: "https://your-daycare-url.com",
  ogImage: "https://your-daycare-url.com/og.jpg",
  links: {
    facebook: "https://facebook.com/your-daycare",
    instagram: "https://instagram.com/your-daycare",
  },
  colors: {
    primary: {
      DEFAULT: "#3B82F6", // blue-500
      hover: "#2563EB", // blue-600
    },
    secondary: {
      DEFAULT: "#10B981", // emerald-500
      hover: "#059669", // emerald-600
    },
  },
  favicon: "/favicon.ico",
} as const;

export type SiteConfig = typeof siteConfig; 