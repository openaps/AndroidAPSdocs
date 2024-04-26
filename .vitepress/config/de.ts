import { defineConfig } from "vitepress";

export const de = defineConfig({
  lang: "de",
  description: "Automatische OpenSource Insulin Abgabe System (closed loop)",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Erste Schritte", link: "/de/introduction" },
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
        text: "Start",
        link: "/de/welcome",
      },
    ],

    editLink: {
      pattern:
        "https://github.com/openaps/AndroidAPSdocs/edit/master/docs/EN/:path",
      text: "Bearbeite diese Seite",
    },

    footer: {
      message: "Veröffentlicht unter der AGPL-3.0 Lizenz.",
      copyright: "© Copyright AndroidAPS community",
    },
  },
});
