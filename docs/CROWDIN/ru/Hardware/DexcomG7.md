# Dexcom G7


## Основательно с самого начала

Весной 2022, Dexcom G7 получил сертификат одобрения CE и поступил в продажу в конце октября 2022.

Следует отметить, что система G7 по сравнению с G6 не сглаживает значения ни в приложении, ни в ридере. Подробнее об этом [здесь](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app). Следовательно, чтобы иметь возможность разумно использовать их в АAAPS, значения должны быть сглажены,.

![G7 английский](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

## 1.  Модифицированное приложение Dexcom G7 (DiAKEM)

**Примечание: Требуется AAPS 3.2.0.0 или выше!**

### Установите новое модифицированное (!) приложение G7 и запустите сенсор

Модифицированное приложение Dexcom G7 (DiAKEM) даёт доступ к данным Dexcom G7. Это другое приложение чем самостоятельно собранное приложение Dexcom BYODA, в данный момент BYODA не может получать данные G7.

Удалите оригинальное приложение Dexcom, если вы его использовали прежде (Рабочая сессия сенсора может продолжаться - запишите код датчика перед удалением приложения!)

Скачайте и установите модифицированное приложение.apk [отсюда](https://github.com/authorgambel/g7/releases).

Введите код сенсора в модифицированном приложении.

Следуйте общим рекомендациям по гигиене мониторинга и размещению сенсоров, которые можно найти [здесь](../Hardware/GeneralCGMRecommendation.md).

После фазы прогрева, данные ГК отображаются в обычном приложении G7.

### Конфигурация в AAPS

Для конфигурации в AAPS
- Select 'BYODA' in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source) - even if it is not the BYODA app!

- If AAPS does not receive any values, switch to another BG source and then back to 'BYODA' to invoke the query for approving data exchange between AAPS and BYODA.

Сглаживание значений гликемии можно активировать, выбрав модуль "Среднее сглаживание" или "Экспоненциальное сглаживание" в Конфигураторе. Чтобы отключить сглаживание, выберите опцию "Без сглаживания". "Экспоненциальное сглаживание" более агрессивно и перезаписывает новейшие значения ГК, но хорошо для борьбы с сильными шумами. "Среднее сглаживание" очень похоже на обратное сглаживание, применявшееся в BYODA G6 и перезаписывает только прошлые значения, а не текущее значение, и поэтому происходит быстрее.

**Экспоненциальное сглаживание** **ДОЛЖНО** быть включено для качественного использования G7.

## 2. xDrip+ (direct connection to G7)

- Следуйте инструкциям здесь: [Xdrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- Select  xDrip+ in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

- Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page  [xDrip+ settings](../Configuration/xdrip.md)

## 3. xDrip+ (companion mode)

-   Download and install xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- As data source in xDrip+ "Companion App" must be selected and under Advanced Settings > Bluetooth Settings > "Companion Bluetooth" must be enabled.
-   Select  xDrip+ in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

-   Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page  [xDrip+ settings](../Configuration/xdrip.md) 
