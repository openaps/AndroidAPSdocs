# Compatible CGMs

В этом разделе представлена краткая информация о всех поддерживаемых **AAPS** **системах НМГ** (непрерывного мониторинга глюкозы) **и ФМГ** (флеш-мониторинга глюкозы).

*Совет*: если вы уже видите свой сахар в приложении xDrip+, вы можете выбрать его как **источник СК** в **AAPS**.

* [Общие рекомендации](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Сглаживание данных](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Настройки xDrip+](../CompatibleCgms/xDrip.md)
* [Nightscout как источник СК](../CompatibleCgms/CgmNightscoutUpload.md): Хотя использовать Nightscout в качестве источника СК для замкнутого цикла возможно, **этот метод использовать не рекомендуется** из-за того, что он полагается на стабильность мобильного интернета или Wi-Fi. Это означает, что данные с вашего **НМГ** будут приниматься **AAPS** только лишь при наличии соединения с вашим сайтом Nightscout. В качестве более надежной конфигурации рекомендуется использовать НМГ с локальной трансляцией в **AAPS** из источников, описанных ниже.

| CGM /  НМГ                                             | Available [BG Sources](#Config-Builder-bg-source)                                                                    |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)             | [xDrip+](../CompatibleCgms/xDrip.md), DiaKEM app or [Juggluco](../CompatibleCgms/Juggluco.md)                        |
| [Dexcom ONE+ and Stelo](../CompatibleCgms/DexcomG7.md) | [xDrip +](../CompatibleCgms/xDrip.md)                                                                                |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)             | [xDrip+](../CompatibleCgms/xDrip.md) or BYODA                                                                        |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)            | [xDrip +](../CompatibleCgms/xDrip.md)                                                                                |
| [Работа с Dexcom G5](../CompatibleCgms/DexcomG5.md)    | [xDrip +](../CompatibleCgms/xDrip.md)                                                                                |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)              | [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip+)                                                   |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)              | [xDrip+](../CompatibleCgms/xDrip.md) (EU only) or [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip+) |
| [Libre 1](../CompatibleCgms/Libre1.md)                 | [xDrip+](../CompatibleCgms/xDrip.md), Glimp, Tomato or Diabox. Need a transmitter                                    |
| [Eversense](../CompatibleCgms/Eversense.md)            | [xDrip+](../CompatibleCgms/xDrip.md) or ESEL/Eversense patched App                                                   |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)  | [xDrip+](../CompatibleCgms/xDrip.md) or MM640g + 600SeriesAndroidUploader App                                        |
| [Poctech](../CompatibleCgms/PocTech.md)                | Poctech                                                                                                              |
| [Ottai](../CompatibleCgms/OttaiM8.md)                  | Ottai                                                                                                                |
| [Syai Tag](../CompatibleCgms/SyaiTagX1.md)             | Syai Tag                                                                                                             |
| Sibionics CGM                                          | [Juggluco](../CompatibleCgms/Juggluco.md)                                                                            |

(GettingStarted-TrustedBGSource)=

## Trusted BG data sources

Regulatory approved **CGM**s for commercial hybrid closed loop systems are considered trusted **BG** data sources.

In order for **AAPS** to correctly identify them, the app sending **BG** readings must be able to provide sensor information.

Trusted data sources allow **SMB** delivery, all the time.

| Sensor                |                                                        CGM app                                                         |
| --------------------- |:----------------------------------------------------------------------------------------------------------------------:|
| Dexcom G5/G6          |                                           BYODA, xDrip+ (**Direct, Native**)                                           |
| Dexcom G7             |                DiaKEM, xDrip+ (**Direct, Native**), </br>Juggluco (**xDrip broadcast** without xDrip+)                 |
| Dexcom ONE/ONE+/Stelo |                                              xDrip+ (**Direct, Native**)                                               |
| Libre 2/2+ (EU)       | xDrip+ (OOP2 **no calibration**), </br>Juggluco (**xDrip broadcast** without xDrip+, or **Patched Libre** with xDrip+) |
| Libre 2/2+/3/3+       |                    Juggluco (**xDrip broadcast** without xDrip+, or **Patched Libre** with xDrip+)                     |

**Note: xDrip+ Companion apps and Follower modes (includes 640G/Eversense) are not trusted data sources.**
