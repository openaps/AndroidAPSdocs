# Сглаживание данных гликемии

If **BG** data is jumpy/noisy, **AAPS** may dose insulin incorrectly resulting in highs or lows. Если вы заметили ошибки в данных мониторинга CGM, важно отключить цикл до тех пор, пока проблема не будет решена. Depending on your CGM, such issues may be due to the CGM configuration in **AAPS** (as explained further below); or a CGM sensor site issue (which may require replacing the CGM sensor).

Some CGM systems have internal algorithms to detect the noise level in the readings, and **AAPS** can use this information to avoid giving SMBs if the BG data is too unreliable. Однако некоторые системы мониторинга не передают такие данные и для этих источников опции "Всегда включать супер микро болюс SMB" и "Включать SMB после углеводов" отключены по соображениям безопасности.

## Smoothing data within AAPS

As of **AAPS** version 3.2, **AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. There are three options available in the [Config Builder](../SettingUpAaps/ConfigBuilder.md).

![Сглаживание](../images/ConfBuild_Smoothing.png)

### Простое экспоненциальное сглаживание

This is the recommended option to start with, as it is most aggressive in resolving noise and rewrites the most recent value.

### Среднее сглаживание

Этот вариант схож с ретроспективным сглаживанием, который ранее был реализован на некоторых платформах мониторинга CGM. Оно более реактивно к новым изменениям и поэтому более подвержено неправильному реагированию на зашумленные данные CGM.

### Без сглаживания

Use this option only if your CGM data is being properly smoothed by your collector app before being transmitted to **AAPS**.

## Предложения использовать сглаживание

|                       | Экспоненциальное |        Среднее        |  Отсутствует  |
| --------------------- | :--------------: | :-------------------: | :-----------: |
| G5 и G6               |                  | При зашумлении данных | Рекомендуемое |
| G7                    |   Рекомендуемое  |                       |               |
| Libre 1 или Juggluco  |   Рекомендуемое  |                       |               |
| Libre 2 и 3 от xDrip+ |                  |                       | Рекомендуемое |

### Dexcom sensors

#### Build Your Own Dexcom App

When using [BYODA](../CompatibleCgms/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app), your BG data is smooth and consistent. Furthermore, you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMBs, because the noise-level data is shared with AAPS.

#### xDrip+ with Dexcom G6 or Dexcom ONE

Noise-level data and smooth BG readings are only shared with AAPS if you use xDrip+ [native mode](https://navid200.github.io/xDrip/docs/Native-Algorithm). Using native mode, there are no restrictions in using SMBs.

#### Dexcom G6 or Dexcom ONE with xDrip+ Companion Mode

The noise-level data is not shared with AAPS using this method. Therefore, 'Enable SMB always' and 'Enable SMB after carbs' are disabled.

### Freestyle Libre sensors

#### xDrip+ with FreeStyle Libre

None of the FreeStyle Libre systems (FSL1, FSL2, or FSL3) broadcast any information about the level of noise detected in the readings, and therefore 'Enable SMB always' and 'Enable SMB after carbs' are disabled for all setups using the FreeStyle Libre.
In addition, many people have reported the FreeStyle Libre often produces noisy data.
