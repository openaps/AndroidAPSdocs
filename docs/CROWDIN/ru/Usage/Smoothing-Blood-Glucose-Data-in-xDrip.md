# Сглаживание данных о глюкозе в крови

Если данные гликемии скачкообразны/зашумлены, AAPS может дозировать инсулин неправильно, что приведет к высокой или низкой ГК. По этой причине необходимо отключить цикл до устранения неполадки. В зависимости от типа мониторинга такие проблемы могут быть обусловлены проблемами конфигурации или сенсора/места установки. Некоторые функции, такие как "Всегда включать микроболюсы SMB" и "Активировать микроболюсы после приема углеводов", можно использовать только с хорошо фильтруемым источником данных ГК.

## Приложение Dexcom G5 (модифицированное)

При использовании приложения Dexcom G5 (модифицированного) данные гликемии идут плавно и последовательно. При использовании микроболюсов SMB нет ограничений.

## xDrip + с Dexcom G5

Достаточно ровные данные идут только в том случае, если в xDrip + выбран G5 Ob1 коллектор в нативном режиме'.

## xDrip + с Freestyle Libre

When using xDrip+ as your data source for Freestyle Libre values until now you cannot activate 'Enable SMB always' and 'Enable SMB after carbs' within SMB because the BG values are not smooth enough. Except this, there are a couple of things you can do to help reduce noise in the data.

**Smooth Sensor Noise.** In xDrip+ Settings > xDrip+ Display Settings ensure that Smooth Sensor Noise is turned on. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first [enable engineering mode in xDrip+](https://github.com/MilosKozak/AndroidAPS/wiki/Enabling-Engineering-Mode-in-xDrip). Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).