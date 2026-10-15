import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jnish23.github.io',
  base: '/',
  output: 'static',
  integrations: [tailwind()],
});
