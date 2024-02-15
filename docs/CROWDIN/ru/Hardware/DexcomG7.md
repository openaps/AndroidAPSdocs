# Dexcom G7


## Основательно с самого начала

Весной 2022, Dexcom G7 получил сертификат одобрения CE и поступил в продажу в конце октября 2022.

Следует отметить, что система G7 по сравнению с G6 не сглаживает значения ни в приложении, ни в ридере. Подробнее об этом [здесь](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

![G7 английский](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

:::{admonition} [Smoothing method](../Usage/Smoothing-Blood-Glucose-Data)
:class: warning **Exponential Smoothing** **MUST** be enabled for meaningful use of the G7 values.  
:::

## 1.  Модифицированное приложение Dexcom G7 (DiAKEM)

**Note: AAPS 3.2.0.0 or higher is required!**

### Установите новое модифицированное (!) приложение G7 и запустите сенсор

A patched Dexcom G7 app (DiAKEM) gives access to the Dexcom G7 data. This is not the BYODA app as this app can not receive G7 data at the moment.

Uninstall the original Dexcom app if you used it before (A running sensor session can be continued - note the sensor code before removal of the app!)

Download and install the patched.apk [here](https://github.com/authorgambel/g7/releases).

Enter sensor code in the patched app.

Follow the general recommendations for CGM hygiene and sensor placement found [here](../Hardware/GeneralCGMRecommendation.md).

After the warm-up phase, the values are displayed as usual in the G7 app.

### Конфигурация в AAPS

For the configuration in AAPS
- Выберите самостоятельно собранное приложение 'BYODA' в [конфигураторе, источник ГК](../Configuration/Config-Builder.md#bg-source)- даже если это не BYODA!

- Если AAPS не получает данных ГК, переключитесь на другой источник ГК, а затем снова на 'BYODA'.

## 2. xdrip+ (прямое подключение к G7)

- Следуйте инструкциям здесь: [Xdrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- В [Конфигураторе, Источник ГК](../Configuration/Config-Builder.md#bg-source) выберите xDrip+.

- Отрегулируйте параметры xDrip+ в соответствии с пояснениями на странице настроек xDrip+  [настройки xDrip+](../Configuration/xdrip.md)

## 3. xdrip+ (режим спутника)

-   Скачайте и установите xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- В качестве источника данных в Xdrip должен быть выбран "Companion App" в разделе Менее распространенные настройки > Настройки Bluetooth > поставьте галочку рядом с "Companion Bluetooth".
-   В [Конфигураторе, Источник ГК](../Configuration/Config-Builder.md#bg-source) выберите xDrip+.

-   Отрегулируйте параметры xDrip+ в соответствии с пояснениями на странице настроек xDrip+  [настройки xDrip+](../Configuration/xdrip.md) 
