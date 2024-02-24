import { defineConfig } from "vitepress";
import { en } from "./en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AndroidAPS",

  srcDir: "docs/EN",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  sitemap: {
    hostname: "https://docs.androidaps.com",
  },

  head: [
    // [
    //   "link",
    //   { rel: "icon", type: "image/svg+xml", href: "/androidaps-logo.svg" },
    // ],
    ["link", { rel: "icon", type: "image/png", href: "/androidaps-logo.png" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en" }],
    [
      "meta",
      {
        property: "og:title",
        content:
          "AndroidAPS | Opensource automated insulin delivery system (closed loop)",
      },
    ],
    ["meta", { property: "og:site_name", content: "AndroidAPS" }],
    // [
    //   "meta",
    //   {
    //     property: "og:image",
    //     content: "https://docs.androidaps.com/androidaps-og.jpg",
    //   },
    // ],
    ["meta", { property: "og:url", content: "https://docs.androidaps.com/" }],
  ],

  themeConfig: {
    logo: { src: "/androidaps-logo.png", width: 24, height: 24 },

    socialLinks: [
      { icon: "github", link: "https://github.com/nightscout/AndroidAPS" },
    ],

    // search: {
    //   provider: "local",
    // },
  },

  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },

  locales: {
    root: { label: "English", ...en },
    de: {
      label: "Deutsch",
      lang: "de",
      // link: "/de/",
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      // link: "/zh/",
    },
  },

  vite: {
    server: {
      watch: {
        ignored: ["**/node_modules/**", "**/.git/**", "**/images/**"],
      },
    },
  },
});
