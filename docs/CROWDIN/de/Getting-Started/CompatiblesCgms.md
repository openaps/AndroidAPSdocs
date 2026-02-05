# Kompatible Sensoren (CGMs)

Dieser Abschnitt gibt einen kurzen Überblick über alle mit **AAPS** kompatiblen Sensoren (**CGMs/FGMs**).

*Tipp*: Wenn Du Deine Glukosewerte in der xDrip+-App anzeigen kannst, kannst Du in **AAPS** xDip+ als **BZ**-Quelle auswählen.

* [Allgemeine CGM-Empfehlungen](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Datenglättung](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip+Einstellungen](../CompatibleCgms/xDrip.md)
* [Nightscout als BZ-Quelle](../CompatibleCgms/CgmNightscoutUpload.md): Auch wenn Nightscout als BZ-Quelle für die Insulinabgabe im Closed-Loop genutzt werden kann, **wird diese Methode nicht empfohlen**, da sie zwingend auf eine stabile (mobile) Datenverbindung oder eine WLAN-Verbindung angewiesen ist. Das bedeutet, dass Deine **CGM**-Daten nur dann von **AAPS** empfangen werden, wenn Du eine Online-Verbindung zu Deiner Nightscout-Website hast. Für ein zuverlässigeres Setup ist der Einsatz eines CGM mit lokaler Übertragung vom Receiver an **AAPS** die bessere Option.

| CGM                                                    | Verfügbare [BZ-Quellen](#Config-Builder-bg-source)                                                                  |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)             | [xDrip+](../CompatibleCgms/xDrip.md) oder [Juggluco](../CompatibleCgms/Juggluco.md)                                 |
| [Dexcom ONE+ und Stelo](../CompatibleCgms/DexcomG7.md) | [xDrip+](../CompatibleCgms/xDrip.md)                                                                                |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)             | BYODA oder [xDrip+](../CompatibleCgms/xDrip.md)                                                                     |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)            | [xDrip+](../CompatibleCgms/xDrip.md)                                                                                |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)              | [Juggluco](../CompatibleCgms/Juggluco.md) (mit oder ohne xDrip+)                                                    |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)              | [xDrip+](../CompatibleCgms/xDrip.md) (nur EU) oder [Juggluco](../CompatibleCgms/Juggluco.md) (mit oder ohne xDrip+) |
| [Libre 1](../CompatibleCgms/Libre1.md)                 | [xDrip+](../CompatibleCgms/xDrip.md) oder Diabox. Transmitter erforderlich                                          |
| [Eversense](../CompatibleCgms/Eversense.md)            | [xDrip+](../CompatibleCgms/xDrip.md) oder ESEL/Eversense gepatchte App                                              |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)  | [xDrip+](../CompatibleCgms/xDrip.md) oder MM640g + 600SeriesAndroidUploader-App                                     |
| [PocTech](../CompatibleCgms/PocTech.md)                | PocTech-App                                                                                                         |
| Glunovo                                                | Glunovo-App                                                                                                         |
| Intelligo                                              | Intelligo-App                                                                                                       |
| [Ottai](../CompatibleCgms/OttaiM8.md)                  | Ottai-App                                                                                                           |
| [Syai](../CompatibleCgms/SyaiTagX1.md)                 | Syai Tag-App                                                                                                        |
| Sibionics CGM                                          | [Juggluco](../CompatibleCgms/Juggluco.md) oder gepatchte SI-App                                                     |
| Sinocare                                               | Gepatchte Sino-App                                                                                                  |
| Caresens, Simplera, iCan, LinX, SmartGuide             | xDrip+ Companion-App                                                                                                |

(GettingStarted-TrustedBGSource)=

## Vertrauenswürdige BZ-Datenquellen

Die durch die jeweiligen Behörden genehmigten **CGM**s für kommerzielle Hybrid-Closed-Loop-Systeme, gelten als vertrauenswürdige **BZ**-Datenquellen.

Damit **AAPS** diese korrekt identifizieren kann, muss die App, die die **Glukosewerte** ausliest, die Sensorinformationen zur Verfügung stellen und weiter reichen.

Mit einer vertrauenswürdigen Datenquelle ist es durchgehend möglich **SMB**s abzugeben.

| Sensor                |                                                          CGM-App                                                          |
| --------------------- |:-------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G5/G6          |                                                xDrip+ (**Direkt, Nativ**)                                                 |
| Dexcom G7             |                        xDrip+ (**Direkt, Nativ**), </br>Juggluco (**xDrip Broadcast** ohne xDrip+)                        |
| Dexcom ONE/ONE+/Stelo |                                                xDrip+ (**Direkt, Nativ**)                                                 |
| Libre 2/2+ (EU)       | xDrip+ (OOP2 **keine Kalibrierung**), </br>Juggluco (**xDrip+ Broadcast** ohne xDrip+, oder **Patched Libre** mit xDrip+) |
| Libre 2/2+/3/3+       |                      Juggluco (**xDrip+ Broadcast** ohne xDrip+, oder **Patched Libre** mit xDrip+)                       |
| Syai                  |                                                         Syai-App                                                          |

**Hinweis: xDrip+ Companion-Apps und Follower-Modi (inklusive 640G/Eversen) sind keine vertrauenswürdigen Datenquellen.**
