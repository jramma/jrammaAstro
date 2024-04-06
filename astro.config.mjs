import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon({
    svgoOptions: {
      plugins: ["preset-default", {
        name: "convertColors",
        params: {
          currentColor: true
        }
      }]
    }
  }), preact()]
});