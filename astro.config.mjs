import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

import mdx from "@astrojs/mdx";

import compress from "astro-compress";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astrobuild-lp.vercel.app/", // necessário p/ sitemap
  integrations: [tailwind(), image(), mdx(), compress(), sitemap()],
});
