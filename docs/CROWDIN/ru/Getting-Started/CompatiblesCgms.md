# Совместимые CGM

В этом разделе представлен краткий обзор всех **CGM/FGM**, совместимых с **AAPS**.

*Совет*: если ваши данные глюкозы показываются в приложении xDrip, вы можете выбрать xDrip как источник **ГК** в **AAPS**.

<!-- List of hidden pages to avoid overcrowding the table of contents -->

```{toctree}
:hidden:

../CompatibleCgms/GeneralCGMRecommendation.md
../CompatibleCgms/SmoothingBloodGlucoseData.md
../CompatibleCgms/xDrip.md
../CompatibleCgms/CgmNightscoutUpload.md
../CompatibleCgms/DexcomG6.md
../CompatibleCgms/DexcomG7.md
../CompatibleCgms/Juggluco.md
../CompatibleCgms/Libre1.md
../CompatibleCgms/Libre2.md
../CompatibleCgms/Libre2MinimalL00per.md
../CompatibleCgms/Libre3.md
../CompatibleCgms/Eversense.md
../CompatibleCgms/MM640g.md
../CompatibleCgms/PocTech.md
../CompatibleCgms/OttaiM8.md
../CompatibleCgms/SyaiTagX1.md
../CompatibleCgms/Caresens.md
```

* [Общие рекомендации](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Сглаживание данных](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Настройки xDrip](../CompatibleCgms/xDrip.md)
* [Nightscout как источник ГК](../CompatibleCgms/CgmNightscoutUpload.md): Хотя использовать Nightscout в качестве источника ГК для замкнутого цикла возможно, **этот метод использовать не рекомендуется** из-за того, что он полагается на стабильность мобильного интернета или Wi-Fi. Это означает, что данные с вашего **НМГ** будут приниматься **AAPS** только лишь при наличии соединения с вашим сайтом Nightscout. Для более надежной работы гораздо лучше использовать CGM, который передает данные от приемника прямо в **AAPS** на телефоне (см. список ниже).

| CGM /  НМГ                                                                                                             | Available [BG Sources](#Config-Builder-bg-source)                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                             | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) или [Чтение уведомлений](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                           | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) или [Чтение уведомлений](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                          | [xDrip](../CompatibleCgms/xDrip.md) или [Чтение уведомлений](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                             | BYODA, [xDrip](../CompatibleCgms/xDrip.md) или [Чтение уведомлений](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                            | [xDrip](../CompatibleCgms/xDrip.md) или [Чтение уведомлений](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                              | [Juggluco](../CompatibleCgms/Juggluco.md) (с xDrip или без него)                                                                              |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                              | [xDrip](../CompatibleCgms/xDrip.md) (только ЕС) или [Juggluco](../CompatibleCgms/Juggluco.md) (с xDrip или без него)                          |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                                 | [xDrip](../CompatibleCgms/xDrip.md) (Diabox отправляет свои значения через источник xDrip), Glimp или Tomato (MiaoMiao). Нужен трансмиттер    |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                            | [xDrip](../CompatibleCgms/xDrip.md), пропатченное приложение ESEL/Eversense или Чтение уведомлений                                            |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                                  | [xDrip](../CompatibleCgms/xDrip.md) или MM640g + приложение 600SeriesAndroidUploader                                                          |
| [Poctech](../CompatibleCgms/PocTech.md)                                                                                | Приложение PocTech                                                                                                                            |
| Glunovo                                                                                                                | Приложение Glunovo                                                                                                                            |
| Intelligo                                                                                                              | Приложение Intelligo                                                                                                                          |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                          | Syai/Ottai (с приложением Ottai или Syai Tag)                                                                                                 |
| Sibionics CGM                                                                                                          | [Juggluco](../CompatibleCgms/Juggluco.md) или SI App (с пропатченным SI App или приложением Sibionics)                                        |
| Sinocare                                                                                                               | Sino App (с пропатченным Sino App)                                                                                                            |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                                     | Приложение MicroTech CGM                                                                                                                      |
| Instara                                                                                                                | Instara (с приложением Instara)                                                                                                               |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                            | Приложение xDrip Companion или [Juggluco](../CompatibleCgms/Juggluco.md)                                                                      |
| Любой CGM, официальное приложение которого показывает значение глюкозы в уведомлении (Dexcom, Medtronic, Eversense, …) | Чтение уведомлений                                                                                                                            |

(GettingStarted-TrustedBGSource)=

## Надежные источники данных ГК

**CGM**, одобренные регулирующими органами для коммерческих гибридных систем замкнутого цикла, считаются надежными источниками данных **ГК**.

Чтобы **AAPS** мог правильно их распознать, приложение, которое отправляет значения **ГК**, должно передавать информацию о сенсоре.

Надежные источники данных позволяют подавать **SMB** всегда.

**AAPS** проверяет сенсор, указанный в последнем полученном значении **ГК**, от какого бы источника **ГК** оно ни пришло. После смены источника **ГК** настройки «всегда» для **SMB** появляются только тогда, когда придет первое значение от нового источника.

| Сенсор          |                                                                               Приложение CGM                                                                               |
| --------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                           BYODA, xDrip (**Direct, Native**), <br/>приложение Dexcom ([Чтение уведомлений](#DexcomG6-notification-reader))                            |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** без xDrip), <br/>приложение Dexcom ([Чтение уведомлений](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** без xDrip), <br/>приложение Dexcom ([Чтение уведомлений](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                               xDrip (**Direct, Native**), <br/>приложение Dexcom ([Чтение уведомлений](#DexcomG6-notification-reader))                               |
| Dexcom Stelo    |                               xDrip (**Direct, Native**), <br/>приложение Dexcom ([Чтение уведомлений](#DexcomG7-notification-reader))                               |
| Libre 2/2+ (EU) |                                      xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** без xDrip или **Patched Libre** с xDrip)                                       |
| Libre 2/2+/3/3+ |                                                   Juggluco (**xDrip broadcast** без xDrip или **Patched Libre** с xDrip)                                                   |
| Syai, Ottai     |                    Приложение Syai или Ottai (источник **Syai/Ottai** или **Чтение уведомлений**), <br/>Juggluco (**xDrip broadcast** без xDrip)                     |

**Примечание: приложения xDrip Companion, Medtronic, Eversense и все остальные сенсоры не являются надежными источниками данных.**

```{admonition} Online BG sources are not recommended for closed looping
:class: warning
Некоторые источники, которым нужно подключение к интернету, тоже могут быть надежными:
- xDrip **Dexcom Share follower** (любой сенсор Dexcom)
- источник ГК **Nightscout** (**AAPSClient** или **AAPS**, который следит за вашим сайтом Nightscout), если загрузчик указывает один из сенсоров выше

Эти источники **не рекомендуются** для замкнутого цикла. Когда ваш телефон или загрузчик CGM теряет соединение, **AAPS** не получает значений **ГК** и не может работать в цикле. Кроме того, значения приходят с опозданием, после задержки облачного сервиса. По возможности используйте приложение CGM, которое отправляет значения в **AAPS** прямо на телефоне (как указано в таблице выше).

Другие режимы фолловера (xDrip Nightscout или Web follower, CareLink follower, Juggluco Nightscout) никогда не считаются надежными.
```
