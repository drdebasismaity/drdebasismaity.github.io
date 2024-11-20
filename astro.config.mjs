import { defineConfig } from 'astro/config';
import remarkImgLinks from '@pondorasti/remark-img-links';

const isProduction = process.env.NODE_ENV === 'production'
const siteUrl = isProduction ? "https://dmaity.github.io/dmaity/" : "http://localhost:4321/dmaity/"

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: '/dmaity',
  markdown : {
    remarkPlugins: [
      [remarkImgLinks, {absolutePath: siteUrl}]
    ],
  }
});
