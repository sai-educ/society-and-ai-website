import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://societyandai.org', // Replace with your actual domain
	integrations: [mdx(), sitemap()],
});