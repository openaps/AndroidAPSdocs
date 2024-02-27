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
      {
        text: "Erste Schritte",
        collapsed: false,
        items: [
          {
            text: "Einleitung", // What is AndroidAPS and what can it do?
            link: "/de/introduction",
          },
          {
            text: "Vorbereitung", // What do I need to get started?
            link: "",
          },
          {
            text: "Komponenten einrichten",
            collapsed: true,
            items: [
              {
                text: "CGM / FGM",
                link: "",
              },
              {
                text: "xDrip Einstellungen",
                link: "",
              },
              {
                text: "Pumpe",
                link: "",
              },
              {
                text: "Smartphone",
                link: "",
              },
              {
                text: "Smartwatch",
                link: "",
              },
            ],
          },
          {
            text: "AAPS bauen",
            link: "",
          },
          {
            text: "Initiale Einrichtung",
            link: "",
          },
          {
            text: "Zum closed loop system", // completing the objectives
            link: "",
          },
        ],
      },
      {
        text: "AAPS Benutzung",
        collapsed: true,
        items: [],
      },
      {
        text: "Fortgeschrittene Theme",
        collapsed: true,
        items: [],
      },
      {
        text: "Fehlerbehebung",
        collapsed: true,
        items: [],
      },
      {
        text: "FAQ",
        collapsed: true,
        items: [],
      },
      {
        text: "Community",
        collapsed: true,
        items: [
          {
            text: "Wie du Hilfe bekommst",
            items: [],
          },
          {
            text: "Beitragen",
            collapsed: true,
            items: [],
          },
        ],
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
