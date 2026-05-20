import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isProd = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://sedaryildirim.github.io',
  base: isProd ? '/kaif-redesign/' : '/',
  integrations: [sitemap()],
});
