(Сглаживание-данных-гликемии)=

# Сглаживание данных гликемии

If **BG** data is jumpy/noisy, AAPS may dose insulin incorrectly resulting in highs or lows. Если вы заметили ошибки в данных мониторинга CGM, важно отключить цикл до тех пор, пока проблема не будет решена. Depending on your CGM, such issues may be due to the CGM configuration in **AAPS** (as explained further below); or CGM sensor site issue (which may require replacing the CGM sensor)

Некоторые системы CGM имеют внутренние алгоритмы для обнаружения уровня шума данных, и AAPS может использовать эту информацию чтобы избежать ввода микроболюсов, если данные ГК слишком ненадежны. Однако некоторые системы мониторинга не передают такие данные и для этих источников опции "Всегда включать супер микро болюс SMB" и "Включать SMB после углеводов" отключены по соображениям безопасности.

Кроме того, начиная с версии 3.2 AAPS предлагает возможность сглаживать данные в рамках AAPS. There are three options available in the [Config Builder](../Configuration/Config-Builder.md).

![Smoothing](../images/ConfBuild_Smoothing.png)

## Exponential smoothing

This is the recommended option to start with as it is most aggressive in resolving noise and rewrites the most recent value.

## Average smoothing

This option works similar to back smoothing that was previously implemented on certain CGM platforms. It is more reactive to recent changes in BG value and therefore more prone to responding incorrectly to noisy CGM data.

## No Smoothing

Use this option only if your CGM data is being properly smoothed by your collector app before being transmitted to AAPS.

## Suggestions to use smoothing

|                           | Exponential |  Average |     None    |
| ------------------------- | :---------: | :------: | :---------: |
| G5 and G6                 |             | If noisy | Recommended |
| G7                        | Recommended |          |             |
| Libre 1 or Juggluco       | Recommended |          |             |
| Libre 2 and 3 from xDrip+ |             |          | Recommended |
