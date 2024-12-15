- - -
orphan: true
- - -

# Сглаживание данных гликемии

Если данные **СК** скачут/являются шумными, **AAPS** может дозировать инсулин неверно, что приведет к высокому или низкому СК. Если вы заметили ошибки в данных мониторинга CGM, важно отключить цикл до тех пор, пока проблема не будет решена. В зависимости от НМГ, такие проблемы могут возникнуть из-за конфигурации НМГ в **AAPS** (как описано ниже); или из-за некорректной работы сенсора (что может потребовать его замену).

Некоторые НМГ имеют внутренние алгоритмы для обнаружения шумных данных СК, и **AAPS** может использовать эти данные для остановки подачи SMB при чересчур ненадежных данных СК. Однако некоторые системы мониторинга не передают такие данные и для этих источников опции "Всегда включать супер микро болюс SMB" и "Включать SMB после углеводов" отключены по соображениям безопасности.

## Smoothing data within AAPS

Начиная с версии 3.2, **AAPS** предлагает опцию сглаживания данных СК внутри самого **AAPS** вместо приложения НМГ. Представлены три опции в [Конфигураторе](../SettingUpAaps/ConfigBuilder.md).

![Сглаживание](../images/ConfBuild_Smoothing.png)

### Простое экспоненциальное сглаживание

This is the recommended option to start with, as it is most aggressive in resolving noise and rewrites the most recent value.

### Среднее сглаживание

Этот вариант схож с ретроспективным сглаживанием, который ранее был реализован на некоторых платформах мониторинга CGM. Оно более реактивно к новым изменениям и поэтому более подвержено неправильному реагированию на зашумленные данные CGM.

### Без сглаживания

Используйте данную опцию только в случае хорошего сглаживания данных вашим источником СК перед их отправкой в **AAPS**.

## Предложения использовать сглаживание

|                       |   Экспоненциальное    |    Среднее     |  Отсутствует  |
| --------------------- |:---------------------:|:--------------:|:-------------:|
| G5 и G6               | При зашумлении данных |                | Рекомендуемое |
| G7                    | При зашумлении данных | Если стабильно |               |
| Libre 1 или Juggluco  |     Рекомендуемое     |                |               |
| Libre 2 и 3 от xDrip+ |                       |                | Рекомендуемое |

### Dexcom sensors

#### Build Your Own Dexcom App
При использовании [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app), ваши данные СК сглажены и последовательны. Furthermore, you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMBs, because the noise-level data is shared with AAPS.

(smoothing-xdrip-dexcom-g6)=
#### xDrip+ with Dexcom G6 or Dexcom ONE
Данные об уровне шума и сглаженные данные СК передаются в AAPS только в том случае, если вы используете [нативный режим](https://navid200.github.io/xDrip/docs/Native-Algorithm). Using native mode, there are no restrictions in using SMBs.

#### Dexcom G6 or Dexcom ONE with xDrip+ Companion Mode
The noise-level data is not shared with AAPS using this method. Therefore, 'Enable SMB always' and 'Enable SMB after carbs' are disabled.

### Freestyle Libre sensors

#### xDrip+ with FreeStyle Libre
None of the FreeStyle Libre systems (FSL1, FSL2, or FSL3) broadcast any information about the level of noise detected in the readings, and therefore 'Enable SMB always' and 'Enable SMB after carbs' are disabled for all setups using the FreeStyle Libre. In addition, many people have reported the FreeStyle Libre often produces noisy data.
