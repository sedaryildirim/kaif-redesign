import { defineConfig } from 'astro/config';

const isProd = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://sedaryildirim.github.io',
  base: isProd ? '/kaif-redesign' : '/',
});
