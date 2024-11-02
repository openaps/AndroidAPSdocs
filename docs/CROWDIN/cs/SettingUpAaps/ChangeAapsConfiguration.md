# Provádění změn v konfiguraci AAPS

After you have completed the **Setup Wizard** you don't need to run the entire Wizard again if you want to only change parts of the configuration.

Existují 3 způsoby, jak změnit konfigurační nastavení. Který z nich si vyberete je jednoduše otázkou pohodlí, každý povede ke stejnému výsledku.

Máte tyto možnosti:

1. Konfigurátor,
1. V tříbodové menu na pravé straně zvolte "Nastavení" nebo
1. V tříbodové menu na pravé straně zvolte "Nastavení pluginu" nebo.

Zde vysvětlujeme, která možnost je nejvhodnější pro jakou situaci:

## Konfigurátor

The **config builder** is used if you want to **enable plugins** and their **visibility** in the top level menu. Pokud je povolíte, budou fungovat neustále. A můžete zde rozhodnout, jestli budou viditelné v horním menu.

Plugins which you have not enabled (_i.e._ disabled) plugins can not be made visible. For example, when you first start with **AAPS** on **objective 1**, you cannot yet use **automations**, so the **automations** plugin cannot be enabled and made visible in the top menu.

**Config builder** is the easiest way to further modify your configuration after you have used the **Setup Wizard**.

The documentation relating to the config builder is available [here](../SettingUpAaps/ConfigBuilder.md).

## Nastavení

The preferences dialogue can be reached via the top right three dot menu on the **home screen** of AAPS. It gives you the possibility to change the configuration of **all enabled plugins at once**.

Je to nejlepší způsob, pokud si nejste opravdu jisti, kde hledat správné nastavení, ale může to být trochu únavné v případě, že chcete změnit konfiguraci jednoho konkrétního pluginu.

The documentation of the preferences is available [here](../SettingUpAaps/Preferences.md).


## Nastavení pluginu

The **plugin preferences** dialogue can be reached via the top right three dot menu on the home screen of AAPS. It provides the possibility to change the configuration of the plugin currently on screen.

This is a good route if you know that _e.g._ you _just_ want to change the configuration for BYODA. Then, you would select the tab "BYODA" on the top menu of **AAPS**, and then once you are on the BYODA page, in the top right, select the three dot menu and then the "plugin preferences" entry. Dostanete se přímo do dialogu nastavení pouze pro plugin BYODA.

This is a "short cut" to the general preferences dialogue, the documentation of the preferences is available [here](../SettingUpAaps/Preferences.md).
