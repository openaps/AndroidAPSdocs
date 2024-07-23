import { type DefaultTheme, defineConfig } from "vitepress";

export const de = defineConfig({
  lang: "de",
  description: "Automatische OpenSource Insulin Abgabe System (closed loop)",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: sidebar(),

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

function nav(): DefaultTheme.NavItem[] {
  return [
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
  ];
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Start",
      link: "/de/welcome",
    },
  ];
}
