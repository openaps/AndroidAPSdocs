# Работа с Dexcom G5

## При использовании G5 с xdrip+

-   Вы можете безопасно загрузить [свежую рабочую версию APK (стабильную)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), если только вам не нужны конкретные недавно разработанные функции.
-   Настройте xDrip+ с G5 по [этим инструкциям](https://navid200.github.io/xDrip/docs/G5-Recommended-Settings.html).
-   Выберите xDrip+ на [страница настроек xDrip+ ](../Configuration/xdrip.md).
-   В [Конфигураторе, Источник ГК](../Configuration/Config-Builder.md#bg-source) выберите xDrip+.

## При пользовании G5 с помощью модифицированного приложения Dexcom

:::{admonition} устаревшие приложения :class: предупреждения Эти приложения несовместимы с новыми версиями Android.  
:::

-   Скачайте apk с <https://github.com/dexcomapp/dexcomapp>, и выберите версию по потребностям (mg/dl или mmol/l, G5).

    -   Папка 2.4 была для пользователей AAPS 2.5 и выше.
    -   Откройте <https://play.google.com/store/search?q=dexcom%20g5> на компьютере. Регион будет виден в URL.

    ![Регион в URL Dexcom G5](изображение:../images/DexcomG5regionURL.PNG)

-   Остановите и удалите оригинальное приложение Dexcom, если это еще не сделано.

-   Установите загруженное приложение

-   Запустите сенсор

- В [Конфигураторе, Источник СК](../Configuration/Config-Builder.md#bg-source) выберите "Самостоятельно собранное приложение Dexcom".

-   Если хотите использовать xDrip-оповещения через локальную трансляцию: в сэндвич-меню xDrip >> настройки> > источник данных ГК>> 640G /EverSense.
