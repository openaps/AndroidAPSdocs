# Compatible CGMs

This section provides a brief overview of all compatible **CGMs/FGMs** with **AAPS**.

*Tip*: If you can display your glucose data in xDrip+ app, you can choose xDrip+ as **BG** source in **AAPS**.

* [General recommendations](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Data Smoothing](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip+Settings](../CompatibleCgms/xDrip.md)
* [Nightscout as BG Source](../CompatibleCgms/CgmNightscoutUpload.md): While it's possible to use Nightscout as a BG source for closed-loop insulin delivery, **this method is not recommended** due to its reliance on stable mobile data or Wi-Fi connectivity. This means your **CGM** data would only be received by **AAPS** when you have an online connection to your Nightscout site. For a more reliable set up, using a CGM with local broadcast from the receiver (as listed below) to **AAPS**, is a much better option.

| MCG                                                    | Available [BG Sources](../SettingUpAaps/ConfigBuilder.md#bg-source)                                          |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)             | xDrip+, DiaKEM app or [Juggluco](https://www.juggluco.nl/Jugglucohelp/introhelp.html)                        |
| [Dexcom ONE+ and Stelo](../CompatibleCgms/DexcomG7.md) | xDrip+                                                                                                       |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)             | xDrip+ or BYODA                                                                                              |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)            | xDrip+                                                                                                       |
| [Dexcom G5](../CompatibleCgms/DexcomG5.md)             | xDrip+                                                                                                       |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)              | [Juggluco](https://www.juggluco.nl/Juggluco/libre3/) (with or without xDrip+)                                |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)              | xDrip+ (EU only) or [Juggluco](https://www.juggluco.nl/Jugglucohelp/introhelp.html) (with or without xDrip+) |
| [Libre 1](../CompatibleCgms/Libre1.md)                 | xDrip+, Glimp, Tomato or Diabox. Need a transmitter                                                          |
| [Eversense](../CompatibleCgms/Eversense.md)            | xDrip+ or ESEL/Eversense patched App                                                                         |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)  | xDrip+ or MM640g + 600SeriesAndroidUploader App                                                              |
| [PocTech](../CompatibleCgms/PocTech.md)                | PocTech                                                                                                      |
| [Ottai](../CompatibleCgms/OttaiM8.md)                  | Ottai                                                                                                        |
| [Syai Tag](../CompatibleCgms/SyaiTagX1.md)             | Syai Tag                                                                                                     |
| Sibionics CGM                                          | [Juggluco](https://www.juggluco.nl/Jugglucohelp/introhelp.html)                                              |

(GettingStarted-TrustedBGSource)=

## Trusted BG data sources

Regulatory approved **CGM**s for commercial hybrid closed loop systems are considered trusted **BG** data sources.

In order for **AAPS** to correctly identify them, the app sending **BG** readings must be able to provide sensor information.

Trusted data sources allow **SMB** delivery, all the time.

| Sensor                |                  CGM app                  |
| --------------------- |:-----------------------------------------:|
| Dexcom G5/G6          |      BYODA, xDrip+ (Direct, Native)       |
| Dexcom G7             | DiaKEM, xDrip+ (Direct, Native), Juggluco |
| Dexcom ONE/ONE+/Stelo |          xDrip+ (Direct, Native)          |
| Libre 2/2+ (EU)       | xDrip+, Juggluco (with or without xDrip+) |
| Libre 2/2+/3/3+       |     Juggluco (with or without xDrip+)     |

Note: xDrip+ Companion app and Followers are not trusted data sources.
