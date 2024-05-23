import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import auth from "auth-astro";
import db from "@astrojs/db";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },

  integrations: [tailwind(), auth(), db()],
  output: "server",
  adapter: vercel()
});