# Для пользователей Eversense

Самым простым способом использования Eversense с AndroidAPS является установка модифицированного для США или для Европы приложения [Eversense](https://cr4ck3d3v3r53n53.club/) (предварительно удалив оригинальное приложения).

**Предупреждение: после удаления старого приложения, ваши локальные данные старше одной недели будут утрачены!**

- Для передачи данных в AAPS необходимо установить [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/debug/app-debug.apk) и включить "Send to AAPS and xDrip", отключить "Send to NightScout".

![трансляция ESEL](../images/ESEL.png)

Поскольку данные ГК от Eversense могут быть зашумленными, рекомендуется в ESEL включить "Smooth Data" (сглаживать данные), а не "Всегда использовать усредненную короткую дельту вместо простых данных".

- Выберите "MM640g" в качестве источника ГК в [Конфигураторе, Источник ГК](../Configuration/Config-Builder.md#bg-source).

Инструкцию по использованию xDrip с Eversense можно найти [здесь](https://github.com/BernhardRo/Esel/tree/master/apk).
