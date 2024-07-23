import { type DefaultTheme, defineConfig } from "vitepress";

export const en = defineConfig({
  lang: "fr",
  description: "Opensource automated insulin delivery system (closed loop)",

  themeConfig: {
    nav: nav(),

    sidebar: sidebar(),

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

function nav(): DefaultTheme.NavItem[] {
  return [];
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [];
}
