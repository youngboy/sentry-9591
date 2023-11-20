import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    edgeMiddleware: true
  }),
  integrations: [sentry({
    dsn: "https://85b8da66aee9ef4ea3adb4e3b14ec642@o4506240688455680.ingest.sentry.io/4506257853448192",
    sourceMapsUploadOptions: {
      enabled: true,
      project: "retrograde-remnant",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    },
  })]
});