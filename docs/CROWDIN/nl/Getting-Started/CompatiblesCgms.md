# Compatibele CGM's

Dit deel geeft een kort overzicht van alle **CGM's/FGM's** die je met **AAPS** kunt gebruiken.

*Tip*: Als je je glucosewaarden in de xDrip-app kunt tonen, kun je in **AAPS** xDrip als **BG**-bron kiezen.

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

* [Algemene aanbevelingen](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Gegevens vloeiend maken](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip-instellingen](../CompatibleCgms/xDrip.md)
* [Nightscout als BG-bron](../CompatibleCgms/CgmNightscoutUpload.md): Je kunt Nightscout gebruiken als BG-bron voor insulinetoediening in een gesloten loop, maar **deze methode wordt niet aanbevolen**. Ze is namelijk afhankelijk van een stabiele verbinding via mobiele data of wifi. Dit betekent dat **AAPS** je **CGM**-gegevens alleen ontvangt als je online verbonden bent met je Nightscout-site. Een betrouwbaardere opzet is een CGM die de waarden lokaal vanaf de ontvanger naar **AAPS** stuurt (zie de lijst hieronder). Dat is een veel betere keuze.

| CGM                                                                                                           | Beschikbare [BG-bronnen](#Config-Builder-bg-source)                                                                                    |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                    | BYODA, [xDrip](../CompatibleCgms/xDrip.md) of [Juggluco](../CompatibleCgms/Juggluco.md)                                                |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                  | [xDrip](../CompatibleCgms/xDrip.md) of [Juggluco](../CompatibleCgms/Juggluco.md)                                                       |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                 | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                    |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                    | BYODA of [xDrip](../CompatibleCgms/xDrip.md)                                                                                           |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                   | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                    |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                     | [Juggluco](../CompatibleCgms/Juggluco.md) (met of zonder xDrip)                                                                        |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                     | [xDrip](../CompatibleCgms/xDrip.md) (alleen EU) of [Juggluco](../CompatibleCgms/Juggluco.md) (met of zonder xDrip)                     |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                        | [xDrip](../CompatibleCgms/xDrip.md) (Diabox stuurt zijn waarden via de xDrip-bron), Glimp of Tomato (MiaoMiao). Heeft een zender nodig |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                   | [xDrip](../CompatibleCgms/xDrip.md), gepatchte ESEL/Eversense-app of Notificatielezer                                                  |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                         | [xDrip](../CompatibleCgms/xDrip.md) of MM640g + 600SeriesAndroidUploader-app                                                           |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                       | PocTech-app                                                                                                                            |
| Glunovo                                                                                                       | Glunovo-app                                                                                                                            |
| Intelligo                                                                                                     | Intelligo-app                                                                                                                          |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                 | Syai/Ottai (met de Ottai- of Syai Tag-app)                                                                                             |
| Sibionics CGM                                                                                                 | [Juggluco](../CompatibleCgms/Juggluco.md) of SI App (met de gepatchte SI App of de Sibionics-app)                                      |
| Sinocare                                                                                                      | Sino App (met de gepatchte Sino App)                                                                                                   |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                            | MicroTech CGM-app                                                                                                                      |
| Instara                                                                                                       | Instara (met de Instara-app)                                                                                                           |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                   | xDrip Companion-app of [Juggluco](../CompatibleCgms/Juggluco.md)                                                                       |
| Elke CGM waarvan de officiële app de glucosewaarde in een notificatie toont (Dexcom, Medtronic, Eversense, …) | Notificatielezer                                                                                                                       |

(GettingStarted-TrustedBGSource)=

## Vertrouwde BG-gegevensbronnen

Officieel goedgekeurde **CGM**'s voor commerciële hybride gesloten-loopsystemen gelden als vertrouwde **BG**-gegevensbronnen.

Om ze goed te herkennen, moet de app die de **BG**-waarden naar **AAPS** stuurt ook sensorinformatie kunnen meesturen.

Vertrouwde gegevensbronnen staan **SMB**-toediening altijd toe.

| Sensor           |                                                      CGM app                                                      |
| ---------------- |:-----------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                         BYODA, xDrip (**Direct, Native**)                                         |
| Dexcom G7        |                BYODA, xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** zonder xDrip)                |
| Dexcom ONE+      |                   xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** zonder xDrip)                    |
| Dexcom ONE/Stelo |                                            xDrip (**Direct, Native**)                                             |
| Libre 2/2+ (EU)  | xDrip (OOP2 **no calibration**), </br>Juggluco (**xDrip broadcast** zonder xDrip, of **Patched Libre** met xDrip) |
| Libre 2/2+/3/3+  |                    Juggluco (**xDrip broadcast** zonder xDrip, of **Patched Libre** met xDrip)                    |
| Syai             |                                                     Syai-app                                                      |

**Let op: xDrip Companion-apps en volgmodi (ook 640G/Eversense) zijn geen vertrouwde gegevensbronnen.**
