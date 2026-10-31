# Freestyle Libre 1

Чтобы использовать Libre в качестве мониторинга, который получает новые значения гликемии каждые 5 минут без необходимости сканирования сенсора, нужно сначала приобрести адаптер NFC - Bluetooth (коммерчески доступные устройства, основанные на устаревшем проекте [LimiTTer](https://github.com/JoernL/LimiTTer)).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: предупреждение
Убедитесь, что мост и приложение, которое вы хотите использовать, совместимо с сенсором.  
```

Некоторые адаптеры все еще доступны на рынке:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (версия 1, 2 или 3), также доступны на AliExpress.
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) от европейских поставщиков ([BubbleShop](https://bubbleshop.eu/)), для пользователей из России [тут](https://vk.com/saharmonitor/). Также доступны на AliExpress.
-   Atom для российских пользователей.

## 1. Using xDrip

-   xDrip supports Miaomiao, Bubble, Blucon, Atom and LibreAlarm.
-   Вы можете безопасно загрузить [ новую (стабильную) версию APK ](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), если только вам не нужны новейшие функции. В этом случае следует загружать т. н. [Ночную сборку](https://github.com/NightscoutFoundation/xDrip/releases).
-   Follow setup instructions on [xDrip settings page](../CompatibleCgms/xDrip.md).
-    Вам также нужен OOP2 для Libre 1 США (и Libre 2 EU).
-   Select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).

## 2. Использование Diabox

- Diabox - это приложение поставщика для Bubble.
- Установите [Diabox](https://t.me/s/DiaboxApp). В Настройках, Интеграция, включите "Делиться данными с другими приложениями".

![Diabox](../images/Diabox.png)

- Select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).
