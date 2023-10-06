import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  site: "https://r-yokoyama-cft.github.io",
  base: "/2310_gtm_sample"
});