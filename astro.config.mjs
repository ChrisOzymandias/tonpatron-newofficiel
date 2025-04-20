// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://tonpatron.fr', // Remplacez par votre domaine réel
  output: 'server', // SSR pour routes dynamiques sur Netlify
  adapter: netlify(),
  experimental: {
    session: true,
  },
  build: {
    // Configuration de build optimisée pour la production
    inlineStylesheets: 'auto',
    minify: true,
    splitting: true
  },
  integrations: [tailwind(), react(), netlify()],
  vite: {
    server: {
      port: 3000
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer,
        ]
      }
    }
  }
});