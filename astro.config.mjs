// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://aurescacare.com",

  // Static by default — every page is prerendered at build time. Only the
  // appointment endpoint opts out (`export const prerender = false`) and ships
  // as a single Vercel function.
  adapter: vercel(),

  // Auto-generated at build → /sitemap-index.xml. The post-submission
  // thank-you page carries no search value and is noindex, so it is excluded.
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/appointment-success"),
    }),
  ],

  env: {
    schema: {
      // Optional. When set, appointment requests are forwarded to this URL.
      APPOINTMENT_WEBHOOK_URL: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
    },
  },

  // Self-hosted Google fonts — no render-blocking request to fonts.googleapis.
  fonts: [
    {
      // The interface voice: controls, wayfinding and the running text that is
      // read at a glance rather than at length.
      provider: fontProviders.google(),
      name: "Manrope",
      cssVariable: "--font-ui",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      // The reading voice. Unlike the Centaur it replaces, this ships real
      // weights and a true italic, so emphasis in prose is drawn rather than
      // synthesised by the browser.
      provider: fontProviders.google(),
      name: "Cormorant Garamond",
      cssVariable: "--font-sans",
      weights: [400, 500, 600],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["Georgia", "serif"],
    },
  ],
});
