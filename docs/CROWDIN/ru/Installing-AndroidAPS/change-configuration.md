# Внесение изменений в конфигурацию AAPS

После завершения **Мастера установки** больше не нужно запускать весь Мастер, чтобы изменить часть конфигурации.

Есть три способа внесения изменений в настройки конфигурации. Какой из них выбираете вы - это просто вопрос удобства, каждый ведет к тем же настройкам конфигурации.

These are as follows:

1. Конфигуратор,
2. Выпадающее меню справа и выберите "настройки" или
3. Выпадающее меню справа и выберите "настройки расширений".

Здесь мы объясним, какой вариант наиболее удобно для каждой ситуации:

## Конфигуратор

The **config builder** is used if you want to **enable plugins** and their **visibility** in the top level menu. If they are enabled, they will still run, you can decide if you want to be able to see them in the top menu or not.

Plugins which you have not enabled (_i.e._ disabled) plugins can not be made visible. For example, when you first start with **AAPS** on **objective 1**, you cannot yet use **automations**, so the **automations** plugin cannot be enabled and made visible in the top menu.

**Config builder** is the easiest way to further modify your configuration after you have used the **Setup Wizard**.

The documentation relating to the config builder is available [here](../Configuration/Config-Builder.md).

## Настройки

The preferences dialogue can be reached via the top right three dot menu on the **home screen** of AAPS. It gives you the possibilty to change the configuration of **all enabled plugins at once**.

This is a good route if you are not really sure where to look for an configuration option, but it can be a bit tedious if you know you want to change the configuration for just one specific plugin.

The documentation of the preferences is available [here](../Configuration/Preferences.md).

## Plugin preferences

The **plugin preferences** dialogue can be reached via the top right three dot menu on the home screen of AAPS. It provides the possibilty to change the configuration of all enabled plugins at once.

This is a good route if you know that _e.g._ you _just_ want to change the configuration for BYODA. Then, you would select the tab "BYODA" on the top menu of **AAPS**, and then once you are on the BYODA page, in the top right, select the three dot menu and then the "plugin preferences" entry. You are taken directly to the preferences dialogue specifically for the BYODA plugin.

This is a "short cut" to the general preferences dialogue, the documentation of the preferences is available [here](../Configuration/Preferences.md).
