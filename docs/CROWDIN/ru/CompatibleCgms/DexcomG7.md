- - -
orphan: true
- - -

# Dexcom G7 и ONE+


## Основательно и перспективно

Следует отметить, что системы G7 и ONE+, в отличие от G6, не сглаживают значения ГК ни в самом приложении, ни в считывателе. Подробнее об этом [здесь](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

Picture is outdated!!! ![G7 english](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)
`{admonition} [Smoothing method](../CompatibleCgms/SmoothingBloodGlucoseData.md)`

## 1. xDrip+ (прямое соединение с G7 или ONE+)

- Follow the instructions here: [xDrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- В [Конфигураторе, Источник ГК](#Config-Builder-bg-source) выберите xDrip+.

- Отрегулируйте параметры xDrip+ в соответствии с пояснениями на странице настроек xDrip+  [настройки xDrip+](../CompatibleCgms/xDrip.md)

## 2.  Модифицированное приложение Dexcom G7 (DiAKEM)

**Примечание: Требуется AAPS 3.2.0.0 или выше! Недоступно для ONE+.**

### Установите новое модифицированное (!) приложение G7 и запустите сенсор

Модифицированное приложение Dexcom G7 (DiAKEM) обеспечивает доступ к данным Dexcom G7. Это приложение отличается от самостоятельно собранного приложения Dexcom BYODA; BYODA не может получать данные G7.

- Удалите оригинальное приложение Dexcom, если вы его использовали прежде (Рабочая сессия сенсора может продолжаться - запишите код сенсора перед удалением приложения!)

- Download and install the patched.apk [here](https://github.com/authorgambel/g7/releases).

- Введите код сенсора в модифицированном приложении.

- Следуйте общим рекомендациям по гигиене НМГ и установке сенсора, которые можно найти [здесь](../CompatibleCgms/GeneralCGMRecommendation.md).

- После фазы прогрева, данные ГК отображаются как обычно в приложении G7.

### Конфигурация в AAPS

- Выберите самостоятельно собранное приложение 'BYODA' в [конфигураторе, источник ГК](#Config-Builder-bg-source)- даже если это не BYODA!

- Если AAPS не получает данных ГК, переключитесь на другой источник ГК, а затем снова на 'BYODA'.

## 3. xdrip+ (режим спутника)

-   Скачайте и установите xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- В качестве источника данных в Xdrip должен быть выбран "Companion App" в разделе Менее распространенные настройки > Настройки Bluetooth > поставьте галочку рядом с "Companion Bluetooth".
-   В [Конфигураторе, Источник ГК](#Config-Builder-bg-source) выберите xDrip+.

-   Отрегулируйте параметры xDrip+ в соответствии с пояснениями на странице настроек xDrip+  [настройки xDrip+](../CompatibleCgms/xDrip.md)

## 4. Juggluco

Version 9.0+ required

- Disable the app previously connected to the sensor: Uninstall the app or use "Force Stop." Disable "Nearby Devices" permission in app settings. Restrict the app's battery usage.

- Forget the sensor in Bluetooth settings: In Android settings, find the sensor in bonded devices and select "Forget." Dexcom G7 sensor names start with DXCM.

- Avoid interference from other sensors: Keep old Dexcom sensors out of Bluetooth range.

- Connect the G7 sensor to Juggluco: Open Juggluco → Left menu → Photo. Scan the data matrix on the G7 sensor's applicator. Wait up to 5 minutes for Juggluco to find the sensor.

- Pairing requirements: Agree to pair the sensor with Juggluco. Ensure the screen isn’t locked during pairing. If pairing fails, wait 5 minutes before trying again.

- Exception: Wear OS watches can bond without pressing an agree button.
