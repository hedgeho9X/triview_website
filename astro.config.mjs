import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.triviewelectronics.com",
  integrations: [sitemap()],
  vite: {
    server: {
      port: 4321,
      strictPort: true,
      host: true
    },
    preview: {
      port: 4321,
      strictPort: true,
      host: true
    }
  }
});
