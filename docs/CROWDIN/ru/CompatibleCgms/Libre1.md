# Работа с Freestyle Libre 1

Чтобы использовать Libre в качестве мониторинга, который получает новые значения гликемии каждые 5 минут без необходимости сканирования сенсора, нужно сначала приобрести адаптер NFC - Bluetooth (коммерчески доступные устройства, основанные на устаревшем проекте [LimiTTer](https://github.com/JoernL/LimiTTer)).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: предупреждение
Убедитесь, что мост и приложение, которое вы хотите использовать, совместимо с сенсором.  
```

Some bridges are still available on the market:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (версия 1, 2 или 3) также доступны на AliExpress.
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) from European vendors ([BubbleShop](https://bubbleshop.eu/)) or for Russian users [here](https://vk.com/saharmonitor/). Также доступны на AliExpress.
-   Atom для российских пользователей.

## 1. Использование xDrip+

-   xDrip+ поддерживает Miaomiao, Bubble, Blucon, Atom и LibreAlarm.
-   Вы можете безопасно загрузить [ новую (стабильную) версию APK ](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), если только вам не нужны новейшие функции. В этом случае следует загружать т. н. [Ночную сборку](https://github.com/NightscoutFoundation/xDrip/releases).
-   Следуйте инструкциям по установке на странице настроек [xDrip+](../CompatibleCgms/xDrip.md).
-    You also need OOP2 for Libre 1 US (and Libre 2 EU).
-   В [Конфигураторе, Источник ГК](#Config-Builder-bg-source) выберите xDrip+.

## 2. Использование Diabox

- Diabox - это приложение поставщика для Bubble.
- Установите [Diabox](https://t.me/s/DiaboxApp). В Настройках, Интеграция, включите "Делиться данными с другими приложениями".

![Diabox](../images/Diabox.png)

- В [Конфигураторе, Источник ГК](#Config-Builder-bg-source) выберите xDrip+.
