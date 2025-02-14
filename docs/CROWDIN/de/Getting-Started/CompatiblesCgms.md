# Kompatible Sensoren (CGMs)

Dieser Abschnitt gibt einen kurzen Überblick über alle mit **AAPS** kompatiblen Sensoren (**CGMs/FGMs**).

*Tipp*: Wenn Du Deine Glukosewerte in der xDrip+-App anzeigen kannst, kannst Du in **AAPS** xDip+ als **BZ**-Quelle auswählen.

* [Allgemeine CGM-Empfehlungen](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Datenglättung](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip+Einstellungen](../CompatibleCgms/xDrip.md)
* [Nightscout als BZ-Quelle](../CompatibleCgms/CgmNightscoutUpload.md): Auch wenn Nightscout als BZ-Quelle für die Insulinabgabe im Closed-Loop genutzt werden kann, **wird diese Methode nicht empfohlen**, da sie zwingend auf eine stabile (mobile) Datenverbindung oder eine WLAN-Verbindung angewiesen ist. Das bedeutet, dass Deine **CGM**-Daten nur dann von **AAPS** empfangen werden, wenn Du eine Online-Verbindung zu Deiner Nightscout-Website hast. Für ein zuverlässigeres Setup ist der Einsatz eines CGM mit lokaler Übertragung vom Receiver an **AAPS** die bessere Option.

| CGM                                                    | Available [BG Sources](../SettingUpAaps/ConfigBuilder.md#bg-source) |
| ------------------------------------------------------ | ------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)             | xDrip+, DiaKEM app or Juggluco                                      |
| [Dexcom ONE+ and Stelo](../CompatibleCgms/DexcomG7.md) | xDrip+                                                              |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)             | xDrip+ or BYODA                                                     |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)            | xDrip+                                                              |
| [Dexcom G5](../CompatibleCgms/DexcomG5.md)             | xDrip+                                                              |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)              | xDrip+ (no transmitter) or Juggluco                                 |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)              | xDrip+ (no transmitter) or Juggluco                                 |
| [Libre 1](../CompatibleCgms/Libre1.md)                 | xDrip+, Glimp, Tomato or Diabox. Need a transmitter                 |
| [Eversense](../CompatibleCgms/Eversense.md)            | xDrip+ or ESEL/Eversense patched App                                |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)  | xDrip+ or MM640g + 600SeriesAndroidUploader App                     |
| [PocTech](../CompatibleCgms/PocTech.md)                | PocTech                                                             |
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
