// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
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
        name: "IBM Plex Sans",
        cssVariable: "--font-ibm-plex-sans"
      },
      {
        provider: fontProviders.fontsource(),
        name: "Libre Baskerville",
        cssVariable: "--font-libre-baskerville"
      }
    ]
  }
});