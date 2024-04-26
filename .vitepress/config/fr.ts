import { defineConfig } from "vitepress";

export const en = defineConfig({
  lang: "fr",
  description: "Opensource automated insulin delivery system (closed loop)",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Getting started", link: "/fr/introduction" },
      { text: "FAQ", link: "/" },
      {
        text: "Resources",
        items: [
          {
            text: "X (formerly Twitter)",
            link: "/",
          },
          {
            text: "Discord Chat",
            link: "/",
          },
          {
            text: "Releases ",
            link: "/",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "Home",
        link: "/fr/welcome",
      },
    ],

    editLink: {
      pattern:
        "https://github.com/openaps/AndroidAPSdocs/edit/master/docs/EN/:path",
      text: "Edit this page",
    },

    footer: {
      message: "Released under the AGPL-3.0 License.",
      copyright: "© Copyright AndroidAPS community",
    },
  },
});
