// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 👇 Cambia esto cuando tengas dominio propio
  site: 'https://fullsolucion.vercel.app',

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-GT' },
      },
    }),
  ],

  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});