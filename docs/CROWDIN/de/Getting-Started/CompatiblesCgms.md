# Kompatible Sensoren (CGMs)

Dieser Abschnitt gibt einen kurzen Überblick über alle mit **AAPS** kompatiblen Sensoren (**CGMs/FGMs**).

*Tip*: If you can display your glucose data in xDrip app, you can choose xDrip as **BG** source in **AAPS**.

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
* [xDrip Settings](../CompatibleCgms/xDrip.md)
* [Nightscout als BZ-Quelle](../CompatibleCgms/CgmNightscoutUpload.md): Auch wenn Nightscout als BZ-Quelle für die Insulinabgabe im Closed-Loop genutzt werden kann, **wird diese Methode nicht empfohlen**, da sie zwingend auf eine stabile (mobile) Datenverbindung oder eine WLAN-Verbindung angewiesen ist. Das bedeutet, dass Deine **CGM**-Daten nur dann von **AAPS** empfangen werden, wenn Du eine Online-Verbindung zu Deiner Nightscout-Website hast. For a more reliable setup, using a CGM with local broadcast from the receiver (as listed below) to **AAPS** is a much better option.

| CGM                                                                                                    | Verfügbare [BZ-Quellen](#Config-Builder-bg-source)                                                                                             |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                             | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Juggluco](../CompatibleCgms/Juggluco.md)                                                        |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                           | [xDrip](../CompatibleCgms/xDrip.md) or [Juggluco](../CompatibleCgms/Juggluco.md)                                                               |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                          | [xDrip+](../CompatibleCgms/xDrip.md)                                                                                                           |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                             | BYODA or [xDrip](../CompatibleCgms/xDrip.md)                                                                                                   |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                            | [xDrip+](../CompatibleCgms/xDrip.md)                                                                                                           |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                              | [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip)                                                                              |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                              | [xDrip](../CompatibleCgms/xDrip.md) (EU only) or [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip)                             |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                 | [xDrip](../CompatibleCgms/xDrip.md) (Diabox sends its readings through the xDrip source), Glimp or Tomato (MiaoMiao). Transmitter erforderlich |
| [Eversense](../CompatibleCgms/Eversense.md)                                                            | [xDrip](../CompatibleCgms/xDrip.md), ESEL/Eversense patched App or Notification Reader                                                         |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                  | [xDrip](../CompatibleCgms/xDrip.md) or MM640g + 600SeriesAndroidUploader App                                                                   |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                | PocTech-App                                                                                                                                    |
| Glunovo                                                                                                | Glunovo-App                                                                                                                                    |
| Intelligo                                                                                              | Intelligo-App                                                                                                                                  |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                          | Syai/Ottai (with the Ottai or Syai Tag app)                                                                                                    |
| Sibionics CGM                                                                                          | [Juggluco](../CompatibleCgms/Juggluco.md) or SI App (with the patched SI App or the Sibionics App)                                             |
| Sinocare                                                                                               | Sino App (with the patched Sino App)                                                                                                           |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                     | MicroTech CGM App                                                                                                                              |
| Instara                                                                                                | Instara (with the Instara App)                                                                                                                 |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                            | xDrip Companion App or [Juggluco](../CompatibleCgms/Juggluco.md)                                                                               |
| Any CGM whose official app shows the glucose value in a notification (Dexcom, Medtronic, Eversense, …) | Notification Reader                                                                                                                            |

(GettingStarted-TrustedBGSource)=

## Vertrauenswürdige BZ-Datenquellen

Die durch die jeweiligen Behörden genehmigten **CGM**s für kommerzielle Hybrid-Closed-Loop-Systeme, gelten als vertrauenswürdige **BZ**-Datenquellen.

Damit **AAPS** diese korrekt identifizieren kann, muss die App, die die **Glukosewerte** ausliest, die Sensorinformationen zur Verfügung stellen und weiter reichen.

Mit einer vertrauenswürdigen Datenquelle ist es durchgehend möglich **SMB**s abzugeben.

| Sensor           |                                                       CGM-App                                                       |
| ---------------- |:-------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                          BYODA, xDrip (**Direct, Native**)                                          |
| Dexcom G7        |                BYODA, xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** without xDrip)                 |
| Dexcom ONE+      |                    xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** without xDrip)                    |
| Dexcom ONE/Stelo |                                             xDrip (**Direct, Native**)                                              |
| Libre 2/2+ (EU)  | xDrip (OOP2 **no calibration**), </br>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip) |
| Libre 2/2+/3/3+  |                    Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                    |
| Syai             |                                                      Syai-App                                                       |

**Note: xDrip Companion apps and Follower modes (includes 640G/Eversense) are not trusted data sources.**
