// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://gianguyen1234.github.io/hoiuctuoitho/',
  base: '/hoiuctuoitho/',
  output: 'static',
  outDir: 'dist',
  integrations: [tailwind(), react()],
});
