# Внесение изменений в конфигурацию AAPS

After you have completed the **Setup Wizard** you don't need to run the entire Wizard again if you want to only change parts of the configuration.

Есть три способа внесения изменений в настройки конфигурации. Какой из них выбираете вы - это просто вопрос удобства, каждый ведет к тем же настройкам конфигурации.

Вот они:

1. Конфигуратор,
1. Выпадающее меню справа и выберите "настройки" или
1. Выпадающее меню справа и выберите "настройки расширений".

Здесь мы объясним, какой вариант наиболее удобно для каждой ситуации:

## Конфигуратор

The **config builder** is used if you want to **enable plugins** and their **visibility** in the top level menu. Если они включены, вы можете решить, сделать их видимыми в верхнем меню или нет.

Plugins which you have not enabled (_i.e._ disabled) plugins can not be made visible. For example, when you first start with **AAPS** on **objective 1**, you cannot yet use **automations**, so the **automations** plugin cannot be enabled and made visible in the top menu.

**Config builder** is the easiest way to further modify your configuration after you have used the **Setup Wizard**.

The documentation relating to the config builder is available [here](../SettingUpAaps/ConfigBuilder.md).

## Настройки

The preferences dialogue can be reached via the top right three dot menu on the **home screen** of AAPS. It gives you the possibility to change the configuration of **all enabled plugins at once**.

Это хороший маршрут, если нет уверенности, где найти какую-то опцию из конфигурации, но он длинноват, если вам хочется изменить настройку только одного конкретного модуля.

The documentation of the preferences is available [here](../SettingUpAaps/Preferences.md).


## Настройки расширений

The **plugin preferences** dialogue can be reached via the top right three dot menu on the home screen of AAPS. It provides the possibility to change the configuration of the plugin currently on screen.

This is a good route if you know that _e.g._ you _just_ want to change the configuration for BYODA. Then, you would select the tab "BYODA" on the top menu of **AAPS**, and then once you are on the BYODA page, in the top right, select the three dot menu and then the "plugin preferences" entry. Вы попадаете сразу к диалогу настроек специально для расширения BYODA.

This is a "short cut" to the general preferences dialogue, the documentation of the preferences is available [here](../SettingUpAaps/Preferences.md).
