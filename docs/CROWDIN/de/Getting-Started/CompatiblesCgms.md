# Kompatible Sensoren (CGMs)

Dieser Abschnitt gibt einen kurzen Überblick über alle mit **AAPS** kompatiblen Sensoren (**CGMs/FGMs**).

*Tipp*: Wenn Du Deine Glukosewerte in der xDrip+-App anzeigen kannst, kannst Du in **AAPS** xDip+ als **BZ**-Quelle auswählen.

* [Allgemeine CGM-Empfehlungen](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Datenglättung](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip+Einstellungen](../CompatibleCgms/xDrip.md)
* [Nightscout als BZ-Quelle](../CompatibleCgms/CgmNightscoutUpload.md): Auch wenn Nightscout als BZ-Quelle für die Insulinabgabe im Closed-Loop genutzt werden kann, **wird diese Methode nicht empfohlen**, da sie zwingend auf eine stabile (mobile) Datenverbindung oder eine WLAN-Verbindung angewiesen ist. Das bedeutet, dass Deine **CGM**-Daten nur dann von **AAPS** empfangen werden, wenn Du eine Online-Verbindung zu Deiner Nightscout-Website hast. Für ein zuverlässigeres Setup ist der Einsatz eines CGM mit lokaler Übertragung vom Receiver an **AAPS** die bessere Option.

| CGM                                                    | Verfügbare [BZ-Quellen](../SettingUpAaps/ConfigBuilder.md#bg-source)                                        |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)             | xDrip+, DiaKEM App oder [Juggluco](https://www.juggluco.nl/Jugglucohelp/introhelp.html)                     |
| [Dexcom ONE+ und Stelo](../CompatibleCgms/DexcomG7.md) | xDrip+                                                                                                      |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)             | xDrip+ oder BYODA                                                                                           |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)            | xDrip+                                                                                                      |
| [Dexcom G5](../CompatibleCgms/DexcomG5.md)             | xDrip+                                                                                                      |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)              | [Juggluco](https://www.juggluco.nl/Juggluco/libre3/) (mit oder ohne xDrip+)                                 |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)              | xDrip+ (nur EU) oder [Juggluco](https://www.juggluco.nl/Jugglucohelp/introhelp.html) (mit oder ohne xDrip+) |
| [Libre 1](../CompatibleCgms/Libre1.md)                 | xDrip+, Glimp, Tomato oder Diabox. Transmitter erforderlich                                                 |
| [Eversense](../CompatibleCgms/Eversense.md)            | xDrip+ oder ESEL/Eversense patched App                                                                      |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)  | xDrip+ oder MM640g + 600SeriesAndroidUploader-App                                                           |
| [PocTech](../CompatibleCgms/PocTech.md)                | PocTech                                                                                                     |
| [Ottai](../CompatibleCgms/OttaiM8.md)                  | Ottai                                                                                                       |
| [Syai Tag](../CompatibleCgms/SyaiTagX1.md)             | Syai Tag                                                                                                    |
| Sibionics CGM                                          | [Juggluco](https://www.juggluco.nl/Jugglucohelp/introhelp.html)                                             |

(GettingStarted-TrustedBGSource)=

## Vertrauenswürdige BZ-Datenquellen

Die durch die jeweiligen Behörden genehmigten **CGM**s für kommerzielle Hybrid-Closed-Loop-Systeme, gelten als vertrauenswürdige **BZ**-Datenquellen.

Damit **AAPS** diese korrekt identifizieren kann, muss die App, die die **Glukosewerte** ausliest, die Sensorinformationen zur Verfügung stellen und weiter reichen.

Mit einer vertrauenswürdigen Datenquelle ist es durchgehend möglich **SMB**s abzugeben.

| Sensor                |                 CGM-App                  |
| --------------------- |:----------------------------------------:|
| Dexcom G5/G6          |      BYODA, xDrip+ (Direkt, Nativ)       |
| Dexcom G7             | DiaKEM, xDrip+ (Direkt, Nativ), Juggluco |
| Dexcom ONE/ONE+/Stelo |          xDrip+ (Direkt, Nativ)          |
| Libre 2/2+ (EU)       | xDrip+, Juggluco (mit oder ohne xDrip+)  |
| Libre 2/2+/3/3+       |     Juggluco (mit oder ohne xDrip+)      |

Hinweis: xDrip+ Companion App und Followers sind keine vertrauenswürdige Datenquellen.
