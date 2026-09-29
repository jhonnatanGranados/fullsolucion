// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://fullsolucion.vercel.app',

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-GT' },
      },
    }),

    icon({
      include: {
        'simple-icons': ['whatsapp', 'facebook', 'instagram', 'tiktok'],
        'mdi': ['email-outline', 'map-marker','phone'],
      },
    }),
  ],

  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});