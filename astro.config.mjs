import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://sethshoultes.github.io',
  base: '/murder-on-the-arizona-strip-book',
  integrations: [mdx()],
  build: {
    format: 'directory',
  },
});
