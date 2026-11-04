# Kompatible Sensoren (CGMs)

Dieser Abschnitt gibt einen kurzen Überblick über alle mit **AAPS** kompatiblen Sensoren (**CGMs/FGMs**).

*Tipp*: Wenn Du Deine Glukosewerte in der xDrip-App anzeigen kannst, kannst Du in **AAPS** xDrip als **BZ**-Quelle wählen.

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

* [Allgemeine CGM-Empfehlungen](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Datenglättung](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip-Einstellungen](../CompatibleCgms/xDrip.md)
* [Nightscout als BZ-Quelle](../CompatibleCgms/CgmNightscoutUpload.md): Auch wenn Nightscout als BZ-Quelle für die Insulinabgabe im Closed-Loop genutzt werden kann, **wird diese Methode nicht empfohlen**, da sie zwingend auf eine stabile (mobile) Datenverbindung oder eine WLAN-Verbindung angewiesen ist. Das bedeutet, dass Deine **CGM**-Daten nur dann von **AAPS** empfangen werden, wenn Du eine Online-Verbindung zu Deiner Nightscout-Website hast. Für eine zuverlässigere Einrichtung ist ein CGM, dessen Empfänger die Werte per lokalem Broadcast an **AAPS** sendet (wie unten aufgeführt), die deutlich bessere Wahl.

| CGM                                                                                                                  | Verfügbare [BZ-Quellen](#Config-Builder-bg-source)                                                                                            |
| -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                           | BYODA, [xDrip](../CompatibleCgms/xDrip.md) oder [Juggluco](../CompatibleCgms/Juggluco.md)                                                     |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                         | [xDrip](../CompatibleCgms/xDrip.md) oder [Juggluco](../CompatibleCgms/Juggluco.md)                                                            |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                        | [xDrip+](../CompatibleCgms/xDrip.md)                                                                                                          |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                           | BYODA oder [xDrip](../CompatibleCgms/xDrip.md)                                                                                                |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                          | [xDrip+](../CompatibleCgms/xDrip.md)                                                                                                          |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                            | [Juggluco](../CompatibleCgms/Juggluco.md) (mit oder ohne xDrip)                                                                               |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                            | [xDrip](../CompatibleCgms/xDrip.md) (nur EU) oder [Juggluco](../CompatibleCgms/Juggluco.md) (mit oder ohne xDrip)                             |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                               | [xDrip](../CompatibleCgms/xDrip.md) (Diabox sendet seine Werte über die Quelle xDrip), Glimp oder Tomato (MiaoMiao). Transmitter erforderlich |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                          | [xDrip](../CompatibleCgms/xDrip.md), ESEL/gepatchte Eversense-App oder Benachrichtigungsleser                                                 |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                                | [xDrip](../CompatibleCgms/xDrip.md) oder MM640g + 600SeriesAndroidUploader-App                                                                |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                              | PocTech-App                                                                                                                                   |
| Glunovo                                                                                                              | Glunovo-App                                                                                                                                   |
| Intelligo                                                                                                            | Intelligo-App                                                                                                                                 |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                        | Syai/Ottai (mit der Ottai- oder Syai-Tag-App)                                                                                                 |
| Sibionics CGM                                                                                                        | [Juggluco](../CompatibleCgms/Juggluco.md) oder SI-App (mit der gepatchten SI-App oder der Sibionics-App)                                      |
| Sinocare                                                                                                             | Sino-App (mit der gepatchten Sino-App)                                                                                                        |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                                   | MicroTech-CGM-App                                                                                                                             |
| Instara                                                                                                              | Instara (mit der Instara-App)                                                                                                                 |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                          | xDrip Companion App oder [Juggluco](../CompatibleCgms/Juggluco.md)                                                                            |
| Jedes CGM, dessen offizielle App den Glukosewert in einer Benachrichtigung anzeigt (Dexcom, Medtronic, Eversense, …) | Benachrichtigungsleser                                                                                                                        |

(GettingStarted-TrustedBGSource)=

## Vertrauenswürdige BZ-Datenquellen

Die durch die jeweiligen Behörden genehmigten **CGM**s für kommerzielle Hybrid-Closed-Loop-Systeme, gelten als vertrauenswürdige **BZ**-Datenquellen.

Damit **AAPS** diese korrekt identifizieren kann, muss die App, die die **Glukosewerte** ausliest, die Sensorinformationen zur Verfügung stellen und weiter reichen.

Mit einer vertrauenswürdigen Datenquelle ist es durchgehend möglich **SMB**s abzugeben.

| Sensor           |                                                        CGM-App                                                         |
| ---------------- |:----------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                           BYODA, xDrip (**Direct, Native**)                                            |
| Dexcom G7        |                BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** ohne xDrip)                 |
| Dexcom ONE+      |                    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** ohne xDrip)                    |
| Dexcom ONE/Stelo |                                               xDrip (**Direct, Native**)                                               |
| Libre 2/2+ (EU)  | xDrip (OOP2 **no calibration**), <br/>Juggluco (**xDrip broadcast** ohne xDrip oder **Patched Libre** mit xDrip) |
| Libre 2/2+/3/3+  |                       Juggluco (**xDrip broadcast** ohne xDrip oder **Patched Libre** mit xDrip)                       |
| Syai             |                                                        Syai-App                                                        |

**Hinweis: xDrip Companion Apps und Follower-Modi (einschließlich 640G/Eversense) sind keine vertrauenswürdigen Datenquellen.**
