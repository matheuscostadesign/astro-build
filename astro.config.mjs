import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import critters from "astro-critters";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    image(),
    mdx(),
    compress(),
    sitemap(),
    prefetch(),
    partytown(),
    critters(),
    robotsTxt(),
    [astroImageTools],
  ],
});
