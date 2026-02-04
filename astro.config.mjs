// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://swimlessonsdirectory.com",
  integrations: [
    sitemap(),
    pagefind()
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Parkinsans",
        cssVariable: "--font-parkinsans",
        weights: [300, 400, 500, 600, 700, 800],
        styles: ["normal"]
      }
    ]
  }
});