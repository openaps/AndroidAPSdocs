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
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          {
            text: "Introduction", // What is AndroidAPS and what can it do?
            link: "/fr/introduction",
          },
          {
            text: "Preparing", // What do I need to get started?
            link: "",
          },
          {
            text: "Components setup",
            collapsed: true,
            items: [
              {
                text: "CGM / FGM",
                link: "",
              },
              {
                text: "xDrip Settings",
                link: "",
              },
              {
                text: "Pump",
                link: "",
              },
              {
                text: "Phone",
                link: "",
              },
              {
                text: "Smartwatch",
                link: "",
              },
            ],
          },
          {
            text: "Building AAPS",
            link: "",
          },
          {
            text: "Initial setup",
            link: "",
          },
          {
            text: "Towards closed loop", // completing the objectives
            link: "",
          },
        ],
      },
      {
        text: "AAPS Usage",
        collapsed: true,
        items: [],
      },
      {
        text: "Advanced Topics",
        collapsed: true,
        items: [],
      },
      {
        text: "Troubleshooting",
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
            text: "Where to find help",
            items: [],
          },
          {
            text: "Contributing",
            collapsed: true,
            items: [],
          },
        ],
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
