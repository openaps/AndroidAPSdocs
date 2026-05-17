# Настройки Juggluco

Загрузите [Juggluco](https://www.juggluco.nl/Juggluco/download.html), если он еще не настроен.

Для подключения датчика следуйте [инструкциям](https://www.juggluco.nl/Jugglucohelp/introhelp.html).

## Основные настройки для всех НМГ систем

### Отключите выгрузку в Nightscout

Начиная с AAPS 3.2, не позволяйте никаким другим приложениям загружать данные (уровень глюкозы в крови и терапию) в Nightscout.

Отключите в Juggluco любой активный загрузчик в Nightscout.

![Отключение выгрузки в Nightscout](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Из Juggluco в AAPS

Juggluco может передавать гликемию непосредственно в AAPS, что позволяет использовать СМБ всегда, когда вы используете [доверенный датчик](#GettingStarted-TrustedBGSource).

При использовании датчика Libre 2/2+/3/3+ гликемия будет отправляться в AAPS ежеминутно, однако это не приведет к ежеминутным же расчетам.

В Juggluco поставьте галочку у xDrip broadcast (не ставьте у Patched Libre), проставьте галочку у пакета androidaps и сохраните выбор. В AAPS выберите источник данных ГК xDrip+.

Применить подходящее [сглаживание](./SmoothingBloodGlucoseData.md) в AAPS.

![Из Juggluco в AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Из Juggluco в xDrip+

Juggluco может отправлять гликемию в xDrip+, который в свою очередь передаст ее в AAPS.

В Juggluco поставьте галочку у Patched Libre (не ставьте у xDrip broadcast), проставьте галочку у пакета dexdrip и сохраните выбор. В AAPS выберите источник данных ГК xDrip+.

Примените подходящее [сглаживание](./SmoothingBloodGlucoseData.md) в AAPS, при использовании датчиков Libre 2/2+/3/3+, xDrip+ приведет ежеминутные показания к среднему за 5 минут и [также сгладит](#libre2-value-smoothing-raw-values) их.

![Из Juggluco в xDrip+](../images/juggluco/Juggluco-xDrip+.png)
