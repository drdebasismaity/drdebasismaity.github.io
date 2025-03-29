import { defineConfig } from 'astro/config';
import remarkImgLinks from '@pondorasti/remark-img-links';

const isProduction = process.env.NODE_ENV === 'production'
const siteUrl = isProduction ? "https://drdebasismaity.github.io/" : "http://localhost:4321/"

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: '/',
  markdown : {
    remarkPlugins: [
      [remarkImgLinks, {absolutePath: siteUrl}]
    ],
  }
});
