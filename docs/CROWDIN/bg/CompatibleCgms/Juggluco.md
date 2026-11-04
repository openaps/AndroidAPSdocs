# Настройки на Juggluco

Ако все още не е направено, изтеглете [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Следвайте [инструкциите](https://www.juggluco.nl/Jugglucohelp/introhelp.html), за да свържете сензора си.

## Основни настройки за всички CGM системи

### Деактивиране на качването към Nightscout

Не позволявайте на друго приложение да качва данни (кръвна захар и лечения) в Nightscout.

Деактивирайте всяко активно качване (uploader) към Nightscout в Juggluco.

![Изключете Nightscout Upload](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco към AAPS

Juggluco може да изпраща стойностите на кръвната захар директно към AAPS и така позволява SMB по всяко време, ако използвате [надежден сензор](#GettingStarted-TrustedBGSource).

При използване на сензор Libre 2/2+/3/3+, отчитанията на всяка минута ще бъдат изпращани към AAPS, но няма да задействат изчисления на всяка минута в AAPS.

Активирайте xDrip broadcast в Juggluco (не активирайте Patched Libre), потвърдете и запазете информацията за AAPS пакета. Изберете в AAPS източника на данни за КЗ „КЗ от xDrip+“.

Приложете достатъчно [изглаждане](./SmoothingBloodGlucoseData.md) в AAPS.

![Juggluco към AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco към xDrip

Juggluco може да изпраща стойностите на кръвната захар към xDrip, който след това ги изпраща към AAPS.

Активирайте Patched Libre в Juggluco (не активирайте xDrip broadcast), потвърдете и запазете информацията за dexdrip пакета. Изберете в AAPS източника на данни за КЗ „КЗ от xDrip+“.

Приложете достатъчно [изглаждане](./SmoothingBloodGlucoseData.md) в AAPS, ако е нужно. Когато използвате сензор Libre 2/2+/3/3+, xDrip ще осреднява стойностите през 1 минута до стойности през 5 минути и [също ще ги изглажда](#libre2-value-smoothing-raw-values).

![Juggluco към xDrip](../images/juggluco/Juggluco-xDrip+.png)
