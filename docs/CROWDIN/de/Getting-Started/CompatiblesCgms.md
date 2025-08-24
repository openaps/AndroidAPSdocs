# Kompatible Sensoren (CGMs)

Dieser Abschnitt gibt einen kurzen Überblick über alle mit **AAPS** kompatiblen Sensoren (**CGMs/FGMs**).

*Tipp*: Wenn Du Deine Glukosewerte in der xDrip+-App anzeigen kannst, kannst Du in **AAPS** xDip+ als **BZ**-Quelle auswählen.

* [Allgemeine CGM-Empfehlungen](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Datenglättung](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip+Einstellungen](../CompatibleCgms/xDrip.md)
* [Nightscout als BZ-Quelle](../CompatibleCgms/CgmNightscoutUpload.md): Auch wenn Nightscout als BZ-Quelle für die Insulinabgabe im Closed-Loop genutzt werden kann, **wird diese Methode nicht empfohlen**, da sie zwingend auf eine stabile (mobile) Datenverbindung oder eine WLAN-Verbindung angewiesen ist. Das bedeutet, dass Deine **CGM**-Daten nur dann von **AAPS** empfangen werden, wenn Du eine Online-Verbindung zu Deiner Nightscout-Website hast. Für ein zuverlässigeres Setup ist der Einsatz eines CGM mit lokaler Übertragung vom Receiver an **AAPS** die bessere Option.

| CGM                                                    | Available [BG Sources](#Config-Builder-bg-source)                                                                    |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)             | [xDrip+](../CompatibleCgms/xDrip.md), DiaKEM app or [Juggluco](../CompatibleCgms/Juggluco.md)                        |
| [Dexcom ONE+ und Stelo](../CompatibleCgms/DexcomG7.md) | [xDrip+](../CompatibleCgms/xDrip.md)                                                                                 |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)             | [xDrip+](../CompatibleCgms/xDrip.md) or BYODA                                                                        |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)            | [xDrip+](../CompatibleCgms/xDrip.md)                                                                                 |
| [Dexcom G5](../CompatibleCgms/DexcomG5.md)             | [xDrip+](../CompatibleCgms/xDrip.md)                                                                                 |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)              | [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip+)                                                   |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)              | [xDrip+](../CompatibleCgms/xDrip.md) (EU only) or [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip+) |
| [Libre 1](../CompatibleCgms/Libre1.md)                 | [xDrip+](../CompatibleCgms/xDrip.md), Glimp, Tomato or Diabox. Transmitter erforderlich                              |
| [Eversense](../CompatibleCgms/Eversense.md)            | [xDrip+](../CompatibleCgms/xDrip.md) or ESEL/Eversense patched App                                                   |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)  | [xDrip+](../CompatibleCgms/xDrip.md) or MM640g + 600SeriesAndroidUploader App                                        |
| [PocTech](../CompatibleCgms/PocTech.md)                | PocTech                                                                                                              |
| [Ottai](../CompatibleCgms/OttaiM8.md)                  | Ottai                                                                                                                |
| [Syai Tag](../CompatibleCgms/SyaiTagX1.md)             | Syai Tag                                                                                                             |
| Sibionics CGM                                          | [Juggluco](../CompatibleCgms/Juggluco.md)                                                                            |

(GettingStarted-TrustedBGSource)=

## Vertrauenswürdige BZ-Datenquellen

Die durch die jeweiligen Behörden genehmigten **CGM**s für kommerzielle Hybrid-Closed-Loop-Systeme, gelten als vertrauenswürdige **BZ**-Datenquellen.

Damit **AAPS** diese korrekt identifizieren kann, muss die App, die die **Glukosewerte** ausliest, die Sensorinformationen zur Verfügung stellen und weiter reichen.

Mit einer vertrauenswürdigen Datenquelle ist es durchgehend möglich **SMB**s abzugeben.

| Sensor                |                                                        CGM-App                                                         |
| --------------------- |:----------------------------------------------------------------------------------------------------------------------:|
| Dexcom G5/G6          |                                           BYODA, xDrip+ (**Direct, Native**)                                           |
| Dexcom G7             |                DiaKEM, xDrip+ (**Direct, Native**), </br>Juggluco (**xDrip broadcast** without xDrip+)                 |
| Dexcom ONE/ONE+/Stelo |                                              xDrip+ (**Direct, Native**)                                               |
| Libre 2/2+ (EU)       | xDrip+ (OOP2 **no calibration**), </br>Juggluco (**xDrip broadcast** without xDrip+, or **Patched Libre** with xDrip+) |
| Libre 2/2+/3/3+       |                    Juggluco (**xDrip broadcast** without xDrip+, or **Patched Libre** with xDrip+)                     |

**Note: xDrip+ Companion apps and Follower modes (includes 640G/Eversense) are not trusted data sources.**
