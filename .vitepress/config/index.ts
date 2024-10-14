import { defineConfig } from "vitepress";
import { en } from "./en";
import { de } from "./de";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AndroidAPS",

  ignoreDeadLinks: true,

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  sitemap: {
    hostname: "https://wiki.aaps.app",
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
    //     content: "https://wiki.aaps.app/androidaps-og.jpg",
    //   },
    // ],
    ["meta", { property: "og:url", content: "https://wiki.aaps.app/" }],
  ],

  themeConfig: {
    logo: { src: "/androidaps-logo.png", width: 24, height: 24 },

    socialLinks: [
      { icon: "github", link: "https://github.com/nightscout/AndroidAPS" },
    ],

    search: {
      provider: "local",
    },
  },

  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },

  srcDir: "docs/CROWDIN/",
  srcExclude: [
    "ar/**/*",
    "es/**/*",
    "cs/**/*",
    "de/**/*",
    "el/**/*",
    "he/**/*",
    "lt/**/*",
    "pb/**/*",
    "ro/**/*",
    "fr/**/*",
    "it/**/*",
    "ko/**/*",
    "nl/**/*",
    "pl/**/*",
    "pt/**/*",
    "ru/**/*",
    "sk/**/*",
    "sv/**/*",
    "tr/**/*",
    "zh/**/*",
  ],

  locales: {
    root: {
      lang: "en",
      label: "English",
      link: "/en",
      ...en,
    },
    de: {
      lang: "de",
      label: "Deutsch",
      link: "/de",
      ...de,
    },
    // fr: {
    //   label: "Français",
    //   lang: "fr",
    //   link: "/fr/",
    //   ...en,
    // },
  },

  vite: {
    resolve: {
      preserveSymlinks: true,
    },
  },
});
