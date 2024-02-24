import { defineConfig } from "vitepress";

export const en = defineConfig({
  lang: "en-US",
  description: "Opensource automated insulin delivery system (closed loop)",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting started", link: "/Getting-Started" },
      { text: "FAQ", link: "/Getting-Started" },
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
        link: "/",
      },
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          {
            text: "Introduction", // What is AndroidAPS and what can it do?
            link: "/Getting-Started",
          },
          {
            text: "Preparing", // What do I need to get started?
            link: "/Phones",
          },
          {
            text: "Components setup",
            collapsed: true,
            items: [
              {
                text: "CGM / FGM",
                link: "/Getting-Started",
              },
              {
                text: "xDrip Settings",
                link: "/Getting-Started",
              },
              {
                text: "Pump",
                link: "/Getting-Started",
              },
              {
                text: "Phone",
                link: "/Getting-Started",
              },
              {
                text: "Smartwatch",
                link: "/Getting-Started",
              },
            ],
          },
          {
            text: "Building AAPS",
            link: "/advanced/runner",
          },
          {
            text: "Initial setup",
            link: "/advanced/metadata",
          },
          {
            text: "Towards closed loop", // completing the objectives
            link: "/advanced/reporters",
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
        items: [
          {
            text: "Preparing",
            link: "/Phones",
          },
          {
            text: "Runner API",
            link: "/advanced/runner",
          },
          {
            text: "Task Metadata",
            link: "/advanced/metadata",
          },
          {
            text: "Extending Reporters",
            link: "/advanced/reporters",
          },
          {
            text: "Custom Pool",
            link: "/advanced/pool",
          },
        ],
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
