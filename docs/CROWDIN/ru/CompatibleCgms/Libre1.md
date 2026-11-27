# Freestyle Libre 1

Чтобы использовать Libre как CGM, который получает новые значения ГК каждые 5 минут без сканирования сенсора, нужно купить адаптер NFC – Bluetooth (это коммерческие устройства, основанные на устаревшем проекте [LimiTTer](https://github.com/JoernL/LimiTTer)).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Убедитесь, что адаптер и приложение, которое вы хотите использовать, совместимы с вашим сенсором.  
```

Некоторые адаптеры все еще доступны на рынке:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (версия 1, 2 или 3), также доступны на AliExpress.
-   Bubble / Mini / Nano from European vendors ([BubbleShop](https://bubbleshop.eu/)) or for Russian users [here](https://vk.com/saharmonitor/). Также доступны на AliExpress.
-   Atom для российских пользователей.

## 1. Using xDrip

-   xDrip supports Miaomiao, Blucon, Atom and LibreAlarm.
-   Вы можете безопасно загрузить [ новую (стабильную) версию APK ](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), если только вам не нужны новейшие функции. В этом случае следует загружать т. н. [Ночную сборку](https://github.com/NightscoutFoundation/xDrip/releases).
-   Следуйте инструкциям по настройке на [странице настроек xDrip](../CompatibleCgms/xDrip.md).
-    Вам также нужен OOP2 для Libre 1 США (и Libre 2 EU).
-   Выберите xDrip в [**Конфигурация → Источник ГК**](#Config-Builder-bg-source).

(libre1-diabox)=
## 2. Использование Diabox

- Diabox - это приложение поставщика для Bubble.
- Установите [Diabox](https://t.me/s/DiaboxApp). В Настройках, Интеграция, включите "Делиться данными с другими приложениями".

![Diabox](../images/Diabox.png)

- Выберите xDrip в [**Конфигурация → Источник ГК**](#Config-Builder-bg-source).
