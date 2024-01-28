# Dexcom G6

## Сначала основное

-   Следуйте общим рекомендациям по гигиене и установке сенсоров мониторинга CGM, изложенным [здесь](../Hardware/GeneralCGMRecommendation.md).

## Общие рекомендации по использованию G6 с системами ИПЖ

- Recent transmitters are called Firefly. Sensors cannot be restarted without removing the transmitter, which itself cannot be reset, they also do not generate raw data.

- If you are restarting sensors, ensure you are ready to calibrate and keep an eye on variation.

- "Предварительное погружение" (установка сенсора намного раньше его старта в приложении) G6 с заводской калибровкой приведет к отклонениям в данных. Если вы все же делаете "предварительное погружение", то для получения лучших результатов вам, вероятно, придется калибровать сенсор.

Read more in the [article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](https://www.diabettech.com).

## При использовании G6 с xdrip+

- If you are using a recent (Firefly) transmitter, preemptive restarts are **ignored**.
- If you are using a modded transmitter you do **not need** to use preemptive restarts.
-   If you are using an old rebatteried transmitter, the safest thing to do is **disable** [preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html). Though, in this case you will have to use the G6 in non-[native mode](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) (which is unadvisable as it disables factory calibration and doesn't filter noisy readings), or else the sensor will stop after 10 days.
-   Трансмиттер Dexcom G6 может одновременно подключаться к ресиверу Dexcom (или к помпе T:slim) и одному приложению на вашем телефоне.
-   When using xDrip+ as receiver uninstall the Dexcom app first. **Невозможно одновременно подключить к трансмиттеру приложения xDrip+ и Dexcom!**
-   Если вам нужен функционал оригинального приложения Clarity и оповещения от xDrip +, пользуйтесь [модифицированным приложением Dexcom ](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) с локальной передачей данных в xDrip +. You can also use xDrip+ as a companion app of the official Dexcom app, but you might experience delays in BG readings.
-   Если это еще не сделано, скачайте [xDrip+](https://github.com/NightscoutFoundation/xDrip) и следуйте инструкциям на странице настроек [xDrip+](../Configuration/xdrip.md).
-   Select xDrip+ in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

- Настройте параметры xDrip+ в соответствии со [ страницей настроек xDrip+](../Configuration/xdrip.md)

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## При использовании G6 с созданием собственного Dexcom приложения

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) supports local broadcast to AAPS and/or xDrip+ (not for G5/ONE/G7 sensors!)

![BYODA broadcast options](../images/BYODA.png)

-   Это приложение позволяет использовать Dexcom G6 с любым смартфоном Android.
-   Удалите оригинальное приложение Dexcom или модифицированное приложение Dexcom, если пользовались ими ранее (**не останавливайте** уже работающий сенсор)
-   Install the downloaded apk
-   * Введите код сенсора и серийный номер трансмиттера в модифицированном приложении.
-   В настройках телефона перейдите к приложению > Dexcom G6> > разрешения >> дополнительные разрешения и нажмите 'Получать доступ к приложению Dexcom'.
-   Через некоторое время приложение должно подхватить сигнал трансмиттера.

### Настройки для AAPS

-   Select 'Dexcom App (patched)' in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

-   Если данные не поступают, выберите любой другой источник данных, а затем снова выберите 'приложение Dexcom (модифицированное)', чтобы запустить запросы разрешений на установление соединения между AAPS и самостоятельно собранным приложением Dexcom.

### Настройки для xDrip+

-   Выберите '640G/Eversense' в качестве источника данных.
-   Для получения данных необходимо выполнить команду 'эапустить сенсор' в xDrip+. Это не повлияет на сенсор контролируемый самостоятельно собранным приложением Dexcom.


(DexcomG6-troubleshooting-g6)=
## Устранение неполадок с G6

### Устранение неполадок, связанных с dexcom G6

-   Прокрутите до **Устранения неполадок** [сюда](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Устранение неполадок - общее

Устранение общих неполадок мониторинга можно найти [здесь](./GeneralCGMRecommendation.md#troubleshooting).

### Установка нового трансмиттера на работающий сенсор

Если вы меняете трансмиттер во время работы сенсора, вы можете попробовать снять его, не повредив платформу сенсора. A video can be found [here](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). If you opt for [this solution](https://youtu.be/tx-kTsrkNUM) instead, you must be careful to avoid [damaging sensor contacts](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) with the strip.
