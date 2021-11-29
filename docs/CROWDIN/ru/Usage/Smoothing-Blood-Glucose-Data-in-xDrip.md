# Сглаживание данных о глюкозе в крови

Если данные гликемии скачкообразны/зашумлены, AAPS может дозировать инсулин неправильно, что приведет к высокой или низкой ГК. По этой причине необходимо отключить цикл до устранения неполадки. В зависимости от типа мониторинга такие проблемы могут быть обусловлены проблемами конфигурации или сенсора/места установки. Для устранения этой проблемы может потребоваться заменить сенсор мониторинга. Некоторые функции, такие как "Всегда включать микроболюсы SMB" и "Активировать микроболюсы после приема углеводов", можно использовать только с хорошо фильтруемым источником данных ГК.

## Dexcom sensors

### Build Your Own Dexcom App

When using [BYODA](../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app) your BG data is smooth and consistent. Furthermore you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMB.

### xDrip+ with Dexcom G5 or G6

Достаточно ровные данные идут только в том случае, если в xDrip + выбран G5 Ob1 коллектор в нативном режиме'.

### Dexcom G5 App (patched)

When using Dexcom G5 App (patched) your BG data is smooth and consistent. There are no restrictions in using SMB.

## Freestyle Libre sensors

### xDrip+ with Freestyle Libre

When using xDrip+ as your data source for Freestyle Libre values until now you cannot activate 'Enable SMB always' and 'Enable SMB after carbs' within SMB because the BG values are not smooth enough. Except this, there are a couple of things you can do to help reduce noise in the data.

**Smooth Sensor Noise.** In xDrip+ Settings > xDrip+ Display Settings ensure that Smooth Sensor Noise is turned on. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first enable [engineering mode](Enabling-Engineering-Mode-in-xDrip.md) in xDrip+. Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).