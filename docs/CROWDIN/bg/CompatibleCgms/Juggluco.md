# Настройки на Juggluco

Ако все още не е направено, изтеглете [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Следвайте [инструкциите](https://www.juggluco.nl/Jugglucohelp/introhelp.html), за да свържете сензора си.

## Основни настройки за всички CGM системи

### Деактивиране на качването към Nightscout

You shouldn't let any other app upload data (blood glucose and treatments) to Nightscout.

Деактивирайте всяко активно качване (uploader) към Nightscout в Juggluco.

![Изключете Nightscout Upload](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco към AAPS

Juggluco може да изпраща кръвна захар директно към AAPS, като позволява SMB винаги, ако използвате [доверен сензор](#GettingStarted-TrustedBGSource).

При използване на сензор Libre 2/2+/3/3+, отчитанията на всяка минута ще бъдат изпращани към AAPS, но няма да задействат изчисления на всяка минута в AAPS.

Активирайте xDrip broadcast в Juggluco (не активирайте Patched Libre), потвърдете и запазете информацията за AAPS пакета. Select the xDrip BG data source in AAPS.

Приложете достатъчно [изглаждане](./SmoothingBloodGlucoseData.md) в AAPS.

![Juggluco към AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco to xDrip

Juggluco can send blood glucose to xDrip which will then send them to AAPS.

Активирайте Patched Libre в Juggluco (не активирайте xDrip broadcast), потвърдете и запазете информацията за dexdrip пакета. Select the xDrip BG data source in AAPS.

Apply sufficient [smoothing](./SmoothingBloodGlucoseData.md) in AAPS if necessary, when using a Libre 2/2+/3/3+ sensor, xDrip will average the minute-by-minute to 5 minutes readings and [also smoothen](#libre2-value-smoothing-raw-values) them.

![Juggluco to xDrip](../images/juggluco/Juggluco-xDrip+.png)
