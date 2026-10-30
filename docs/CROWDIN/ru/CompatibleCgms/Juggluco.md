# Настройки Juggluco

Загрузите [Juggluco](https://www.juggluco.nl/Juggluco/download.html), если он еще не настроен.

Для подключения датчика следуйте [инструкциям](https://www.juggluco.nl/Jugglucohelp/introhelp.html).

## Основные настройки для всех НМГ систем

### Отключите выгрузку в Nightscout

You shouldn't let any other app upload data (blood glucose and treatments) to Nightscout.

Отключите в Juggluco любой активный загрузчик в Nightscout.

![Отключение выгрузки в Nightscout](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Из Juggluco в AAPS

Juggluco может передавать гликемию непосредственно в AAPS, что позволяет использовать СМБ всегда, когда вы используете [доверенный датчик](#GettingStarted-TrustedBGSource).

При использовании датчика Libre 2/2+/3/3+ гликемия будет отправляться в AAPS ежеминутно, однако это не приведет к ежеминутным же расчетам.

В Juggluco поставьте галочку у xDrip broadcast (не ставьте у Patched Libre), проставьте галочку у пакета androidaps и сохраните выбор. Select the xDrip BG data source in AAPS.

Применить подходящее [сглаживание](./SmoothingBloodGlucoseData.md) в AAPS.

![Из Juggluco в AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco to xDrip

Juggluco can send blood glucose to xDrip which will then send them to AAPS.

В Juggluco поставьте галочку у Patched Libre (не ставьте у xDrip broadcast), проставьте галочку у пакета dexdrip и сохраните выбор. Select the xDrip BG data source in AAPS.

Apply sufficient [smoothing](./SmoothingBloodGlucoseData.md) in AAPS if necessary, when using a Libre 2/2+/3/3+ sensor, xDrip will average the minute-by-minute to 5 minutes readings and [also smoothen](#libre2-value-smoothing-raw-values) them.

![Juggluco to xDrip](../images/juggluco/Juggluco-xDrip+.png)
