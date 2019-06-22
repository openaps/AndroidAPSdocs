# Dexcom G6

## Сначала основное

* Следуйте общим рекомендациям по [гигиене мониторинга](../Configuration/BG-Source#cgm-hygiene)
* [Специальные рекомендации для систем Dexcom G6 и самодельных систем](../Configuration/BG-Source#dexcom-g6-diy-systems) *Для трансмиттеров G6, изготовленных после осени 2018 года, пользуйтесь одной из [последних ночных сборок xDrip+ ](https://github.com/NightscoutFoundation/xDrip/releases). У этих трансмиттеров новая прошивка и новая стабильная версия xDrip+ (2019/01/10) с ней не работает.

## Установка сенсора

При установке сенсора не рекомендуется слишком сильно давить на манипулятор, чтобы избежать кровотечения. Нить сенсора не должна вступать в контакт с кровью.

After setting the sensor, the transmitter can be clicked into the sensor holder. Caution! First click in the square side and then press down the round side.

## Troubleshooting

### Connection problems

Bluetooth connection may be disturbed by other nearby Bluetooth devices such as blood glucose meters, headsets, tablets or kitchen devices such as microwave ovens or ceramic hobs. In this case xdrip does not display any BG values. When bluetooth connection is reestablished the data is backfilled.

### Sensor Errors

If recurring sensor errors occur try selecting a different body site to set your sensor. Нить сенсора не должна вступать в контакт с кровью.

Often a "Sensor Error" can be corrected by immediate drinking and massage around the sensor!

### Jumpy values

You might try to change settings for noise blocking in xdrip (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse". See also [Smoothing BG data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### New transmitter with running sensor

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at <https://youtu.be/AAhBVsc6NZo>.