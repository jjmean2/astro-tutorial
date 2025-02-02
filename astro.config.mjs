// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://splendorous-sunshine-50e7a7.netlify.app/",
  integrations: [preact()],
});