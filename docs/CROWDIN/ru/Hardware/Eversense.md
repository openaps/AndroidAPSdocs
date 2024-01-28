# Для пользователей Eversense

Самым простым способом использования Eversense с AndroidAPS является установка модифицированного для США или для Европы приложения [Eversense](https://cr4ck3d3v3r53n53.club/) (предварительно удалив оригинальное приложения).

**Предупреждение: после удаления старого приложения, ваши локальные данные старше одной недели будут утрачены!**

- To get your data to AAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/debug/app-debug.apk) and enable "Send to AAPS and xDrip", disable "Send to NightScout".

![ESEL Broadcast](../images/ESEL.png)

Поскольку данные ГК от Eversense могут быть зашумленными, рекомендуется в ESEL включить "Smooth Data" (сглаживать данные), а не "Всегда использовать усредненную короткую дельту вместо простых данных".

- Set "MM640g" as BG source in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

Инструкцию по использованию xDrip с Eversense можно найти [здесь](https://github.com/BernhardRo/Esel/tree/master/apk).
