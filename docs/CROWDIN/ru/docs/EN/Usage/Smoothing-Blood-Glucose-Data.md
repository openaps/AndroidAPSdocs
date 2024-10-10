(Сглаживание-данных-гликемии)=

# Сглаживание данных гликемии

If **BG** data is jumpy/noisy, **AAPS** may dose insulin incorrectly resulting in highs or lows. Если вы заметили ошибки в данных мониторинга CGM, важно отключить цикл до тех пор, пока проблема не будет решена. Depending on your CGM, such issues may be due to the CGM configuration in **AAPS** (as explained further below); or a CGM sensor site issue (which may require replacing the CGM sensor).

Some CGM systems have internal algorithms to detect the noise level in the readings, and **AAPS** can use this information to avoid giving SMBs if the BG data is too unreliable. Однако некоторые системы мониторинга не передают такие данные и для этих источников опции "Всегда включать супер микро болюс SMB" и "Включать SMB после углеводов" отключены по соображениям безопасности.

Additionally, as of **AAPS** version 3.2, **AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. Есть три варианта в [Конфигураторе](../Configuration/Config-Builder.md).

![Сглаживание](../images/ConfBuild_Smoothing.png)

## Простое экспоненциальное сглаживание

This is the recommended option to start with, as it is most aggressive in resolving noise and rewrites the most recent value.

## Среднее сглаживание

Этот вариант схож с ретроспективным сглаживанием, который ранее был реализован на некоторых платформах мониторинга CGM. Оно более реактивно к новым изменениям и поэтому более подвержено неправильному реагированию на зашумленные данные CGM.

## Без сглаживания

Use this option only if your CGM data is being properly smoothed by your collector app before being transmitted to **AAPS**.

## Предложения использовать сглаживание

|                       | Экспоненциальное |        Среднее        |  Отсутствует  |
| --------------------- | :--------------: | :-------------------: | :-----------: |
| G5 и G6               |                  | При зашумлении данных | Рекомендуемое |
| G7                    |   Рекомендуемое  |                       |               |
| Libre 1 или Juggluco  |   Рекомендуемое  |                       |               |
| Libre 2 и 3 от xDrip+ |                  |                       | Рекомендуемое |
