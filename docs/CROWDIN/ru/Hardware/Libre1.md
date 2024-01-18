# Работа с Freestyle Libre 1

Чтобы использовать Libre в качестве мониторинга, который получает новые значения гликемии каждые 5 минут без необходимости сканирования сенсора, нужно сначала приобрести адаптер NFC - Bluetooth (коммерчески доступные устройства, основанные на устаревшем проекте [LimiTTer](https://github.com/JoernL/LimiTTer)).

:::{admonition} (предостережение)Libre2, Libre 1 US и Libre Pro :class: предупреждение Убедитесь, что мост и приложение, которым вы собираетесь пользоваться, совместимы с вашим сенсором  
:::

На рынке имеется несколько адаптеров:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (версия 1, 2 или 3) также доступны на AliExpress.
-   [Blucon Nightrider](https://www.ambrosiasys.com/our-products/blucon/) (недавние версии прошивки могут быть несовместимы со всеми приложениями, приложение поставщика не транслирует данные в AAPS)
-   [Bubble (или Bubble Mini)](https://www.bubblesmartreader.com/) от европейских поставщиков ([Bubblan](https://www.bubblan.org/), [BubbleShop](https://bubbleshop.eu/)) или для российских пользователей [здесь](https://vk.com/saharmonitor/). Также доступны на AliExpress.
-   Atom для российских пользователей.

Исторически, можно использовать часы, Sony Smartwatch 3 (SWR50), имеющие чип NFC, который можно включить как коллектор. Однако перечисленные выше адаптеры NFC Bluetooth гораздо удобнее, их предпочитает большинство пользователей, желающих иметь постоянный мониторинг с Libre 1 (не американской).

-   Sony Smartwatch 3 (SWR50)  <https://github.com/pimpimmi/LibreAlarm/wiki/>

В настоящее время, если Libre 1 используется в качестве источника ГК, невозможно активировать «Включать SMB всегда» и «Включить SMB после приема углеводов». Значения ГК Libre 1 недостаточно сглажены для безопасного пользования. Подробнее см [Сглаживание данных ГК](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

## 1. Использование xDrip+

-   xDrip+ поддерживает Miaomiao, Bubble, Blucon, Atom и LibreAlarm.
-   Вы можете безопасно загрузить [ новую (стабильную) версию APK ](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), если только вам не нужны новейшие функции. В этом случае следует загружать т. н. [Ночную сборку](https://github.com/NightscoutFoundation/xDrip/releases).
-   Следуйте инструкциям по установке на странице настроек [xDrip+](../Configuration/xdrip.md).
-    Вам также нужен [OOP2](https://drive.google.com/file/d/1f1VHW2I8w7Xe3kSQqdaY3kihPLs47ILS/view) для Libre 1 США (и Libre 2 EU).
-   В качестве источника данных гликемии в конфигураторе (настройки AAPS) выберите xDrip+.

## 2. Использование Glimp

-   Glimp поддерживает Miaomiao, Blucon и Bubble.
-   Вам понадобится Glimp версии 4.15.57 или выше. Более старые версии не поддерживаются.
-   Установите [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia).
-   В качестве источника данных гликемии в конфигураторе (настройки AAPS) выберите Glimp.

## 3. Использование Tomato

- Tomato является приложением поставщика для Miaomiao.
- Установите [Tomato](http://tomato.cool/#download_page) и следуйте [инструкциям поставщика ](http://tomato.cool/how-to-broadcast-data-to-android-aps/tips/).
- В качестве источника данных гликемии в конфигураторе (настройки AAPS) выберите Tomato.

## 4. Использование Diabox

- Diabox - это приложение поставщика для Bubble.
- Установите [Diabox](https://t.me/s/DiaboxApp). В Настройках, Интеграция, включите "Делиться данными с другими приложениями".

![Diabox](../images/Diabox.png)

- В качестве источника данных гликемии в конфигураторе (настройки AAPS) выберите xDrip+.
