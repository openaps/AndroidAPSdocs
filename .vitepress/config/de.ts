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
    {
      text: "1) Getting Started",
      collapsed: false,
      items: [
        {
          text: "Introduction to AAPS",
          link: "/de/introduction",
        },
        {
          text: "Preparing for AAPS",
          link: "",
        },
        {
          text: "Technical components",
          collapsed: true,
          items: [
            {
              text: "Pump",
              link: "",
            },
            {
              text: "CGM / FGM",
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
      ],
    },
    {
      text: "2) Setting up AAPS",
      collapsed: true,
      items: [
        {
          text: "Setting up the reporting server",
          link: "",
        },
        {
          text: "Building AAPS",
          link: "",
        },
        {
          text: "Transferring and installing AAPS",
          link: "",
        },
        {
          text: "Setup wizard",
          link: "",
        },
        {
          text: "Change AAPS configuration",
          link: "",
        },
        {
          text: "Completing the objectives",
          link: "",
        },
      ],
    },
    {
      text: "3) Remote AAPS Features",
      collapsed: true,
      items: [
        {
          text: "Remote control",
          link: "",
        },
        {
          text: "Following only",
          link: "",
        },
        {
          text: "Android auto",
          link: "",
        },
      ],
    },
    {
      text: "4) Daily life with AAPS",
      collapsed: true,
      items: [
        {
          text: "AAPS screens",
          link: "",
        },
        {
          text: "Key AAPS features",
          link: "",
        },
        {
          text: "COB calculation",
          link: "",
        },
        {
          text: "Sensitivity detection",
          link: "",
        },
        {
          text: "Profile switch",
          link: "",
        },
        {
          text: "Temp targets",
          link: "",
        },
        {
          text: "Extend carbs",
          link: "",
        },
        {
          text: "Automations",
          link: "",
        },
        {
          text: "Dynamic ISF",
          link: "",
        },
        {
          text: "Pump and cannulas",
          link: "",
        },
        {
          text: "Timezone travelling with pumps",
          link: "",
        },
        {
          text: "Time adjustment daylight savings time (DST)",
          link: "",
        },
      ],
    },
    {
      text: "5) Maintenance of AAPS",
      collapsed: true,
      items: [
        {
          text: "Creating and restoring backups",
          link: "",
        },
        {
          text: "Restoring from your backups on a new phone or fresh installation of AAPS",
          link: "",
        },
        {
          text: "Version release notes",
          link: "",
        },
        {
          text: "Updating to a new version or branch",
          link: "",
        },
        {
          text: "Troubleshooting",
          link: "",
        },
      ],
    },
    {
      text: "6) Advanced AAPS options",
      collapsed: true,
      items: [
        {
          text: "Full closed loop",
          link: "",
        },
        {
          text: "Dev branch",
          link: "",
        },
        {
          text: "xDrip engineering mode",
          link: "",
        },
      ],
    },
    {
      text: "7) Troubleshooting & Getting help",
      collapsed: true,
      items: [
        {
          text: "Where can I get help with AAPS?",
          link: "",
        },
        {
          text: "General troubleshooting",
          link: "",
        },
        {
          text: "Troubleshooting AAPSClient",
          link: "",
        },
        {
          text: "Accessing log files",
          link: "",
        },
      ],
    },
    {
      text: "8) Community",
      collapsed: true,
      items: [
        {
          text: "How to help?",
          link: "",
        },
        {
          text: "How to edit the docs?",
          link: "",
        },
        {
          text: "How to translate the app and docs?",
          link: "",
        },
        {
          text: "State of translations",
          link: "",
        },
      ],
    },
    {
      text: "9) Miscellaneous",
      collapsed: true,
      items: [
        { text: "Glossary", link: "" },
        { text: "Legal", link: "" },
        { text: "Acknowledgements", link: "" },
        { text: "References", link: "" },
        { text: "Sandbox", link: "" },
      ],
    },
  ];
}
