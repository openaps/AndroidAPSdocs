# Работа с Freestyle Libre 1

Чтобы использовать Libre в качестве мониторинга, который получает новые значения гликемии каждые 5 минут без необходимости сканирования сенсора, нужно сначала приобрести адаптер NFC - Bluetooth (коммерчески доступные устройства, основанные на устаревшем проекте [LimiTTer](https://github.com/JoernL/LimiTTer)).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Verify the bridge and the app you want to use are compatible with your sensor.  
```

Several bridges are available on the market:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (версия 1, 2 или 3) также доступны на AliExpress.
-   [Blucon Nightrider](https://www.ambrosiasys.com/our-products/blucon/) (недавние версии прошивки могут быть несовместимы со всеми приложениями, приложение поставщика не транслирует данные в AAPS)
-   [Bubble (или Bubble Mini)](https://www.bubblesmartreader.com/) от европейских поставщиков ([Bubblan](https://www.bubblan.org/), [BubbleShop](https://bubbleshop.eu/)) или для российских пользователей [здесь](https://vk.com/saharmonitor/). Также доступны на AliExpress.
-   Atom для российских пользователей.

Historically it is possible to use a specific watch, the Sony Smartwatch 3 (SWR50) which has an NFC chip that can be enabled and used as an NFC collector. However the custom NFC to Bluetooth bridges listed above offer a less complex solution and would be used by the majority of those wanting to use their Libre 1 (non-US) as a CGM.

-   Sony Smartwatch 3 (SWR50)  <https://github.com/pimpimmi/LibreAlarm/wiki/>

As it currently stands, if using Libre 1 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within the SMB algorithm. The BG values of Libre 1 are not smooth enough to use it safely. See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md) for more details.

## 1. Использование xDrip+

-   xDrip+ поддерживает Miaomiao, Bubble, Blucon, Atom и LibreAlarm.
-   Вы можете безопасно загрузить [ новую (стабильную) версию APK ](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk), если только вам не нужны новейшие функции. В этом случае следует загружать т. н. [Ночную сборку](https://github.com/NightscoutFoundation/xDrip/releases).
-   Follow setup instructions on [xDrip+ settings page](../CompatibleCgms/xDrip.md).
-    Вам также нужен [OOP2](https://drive.google.com/file/d/1f1VHW2I8w7Xe3kSQqdaY3kihPLs47ILS/view) для Libre 1 США (и Libre 2 EU).
-   Select xDrip+ in in [ConfigBuilder, BG Source](../SettingUpAaps/ConfigBuilder.md#bg-source).

## 2. Использование Glimp

-   Glimp поддерживает Miaomiao, Blucon и Bubble для Libre 1 и Libre 2 EU.
-   Вам понадобится Glimp версии 4.15.57 или выше. Более старые версии не поддерживаются.
-   Установите [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia).
-   Select Glimp in in [ConfigBuilder, BG Source.](../SettingUpAaps/ConfigBuilder.md#bg-source)

## 3. Использование Tomato

- Tomato является приложением поставщика для Miaomiao.
- Установите [Tomato](http://tomato.cool/#download_page) и следуйте [инструкциям поставщика ](http://tomato.cool/how-to-broadcast-data-to-android-aps/tips/).
- Select Tomato in in [ConfigBuilder, BG Source](../SettingUpAaps/ConfigBuilder.md#bg-source).

## 4. Использование Diabox

- Diabox - это приложение поставщика для Bubble.
- Установите [Diabox](https://t.me/s/DiaboxApp). В Настройках, Интеграция, включите "Делиться данными с другими приложениями".

![Diabox](../images/Diabox.png)

- Select xDrip+ in in [ConfigBuilder, BG Source](../SettingUpAaps/ConfigBuilder.md#bg-source).
