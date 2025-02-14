# Compatible CGMs

В этом разделе представлена краткая информация о всех поддерживаемых **AAPS** **системах НМГ** (непрерывного мониторинга глюкозы) **и ФМГ** (флеш-мониторинга глюкозы).

*Совет*: если вы уже видите свой сахар в приложении xDrip+, вы можете выбрать его как **источник СК** в **AAPS**.

* [Общие рекомендации](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Сглаживание данных](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Настройки xDrip+](../CompatibleCgms/xDrip.md)
* [Nightscout как источник СК](../CompatibleCgms/CgmNightscoutUpload.md): Хотя использовать Nightscout в качестве источника СК для замкнутого цикла возможно, **этот метод использовать не рекомендуется** из-за того, что он полагается на стабильность мобильного интернета или Wi-Fi. Это означает, что данные с вашего **НМГ** будут приниматься **AAPS** только лишь при наличии соединения с вашим сайтом Nightscout. В качестве более надежной конфигурации рекомендуется использовать НМГ с локальной трансляцией в **AAPS** из источников, описанных ниже.

| CGM /  НМГ                                             | Available [BG Sources](../SettingUpAaps/ConfigBuilder.md#bg-source) |
| ------------------------------------------------------ | ------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)             | xDrip+, DiaKEM app or Juggluco                                      |
| [Dexcom ONE+ and Stelo](../CompatibleCgms/DexcomG7.md) | xDrip +                                                             |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)             | xDrip+ or BYODA                                                     |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)            | xDrip +                                                             |
| [Работа с Dexcom G5](../CompatibleCgms/DexcomG5.md)    | xDrip +                                                             |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)              | xDrip+ (no transmitter) or Juggluco                                 |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)              | xDrip+ (no transmitter) or Juggluco                                 |
| [Libre 1](../CompatibleCgms/Libre1.md)                 | xDrip+, Glimp, Tomato or Diabox. Need a transmitter                 |
| [Eversense](../CompatibleCgms/Eversense.md)            | xDrip+ or ESEL/Eversense patched App                                |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)  | xDrip+ or MM640g + 600SeriesAndroidUploader App                     |
| [Poctech](../CompatibleCgms/PocTech.md)                | Poctech                                                             |
| [Ottai](../CompatibleCgms/OttaiM8.md)                  | Ottai                                                               |
| [Syai Tag](../CompatibleCgms/SyaiTagX1.md)             | Syai Tag                                                            |
| Sibionics CGM                                          | Juggluco                                                            |

(GettingStarted-TrustedBGSource=)

## Trusted BG data sources

Regulatory approved **CGM**s for commercial hybrid closed loop systems are considered trusted **BG** data sources.

In order for **AAPS** to correctly identify them, the app sending **BG** readings must be able to provide sensor information.

Trusted data sources allow **SMB** delivery, all the time.

| Sensor                |                CGM app                 |
| --------------------- |:--------------------------------------:|
| Dexcom G5/G6          |     BYODA, xDrip+ (Direct, Native)     |
| Dexcom G7             |    DiaKEM, xDrip+ (Direct, Native)     |
| Dexcom ONE/ONE+/Stelo |        xDrip+ (Direct, Native)         |
| Libre 2/2+ (EU)       | Juggluco, xDrip+ (Direct, Patched app) |
| Libre 2/2+/3/3+       |     Juggluco, xDrip+ (Patched app)     |

Note: xDrip+ Companion app and Followers are not trusted data sources.
