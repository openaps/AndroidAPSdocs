# Kompatibilné CGM

Táto časť poskytuje stručný prehľad všetkých kompatibilných **CGM/FGM** s **AAPS**.

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

* [Všeobecné odporúčania](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Vyhladzovanie údajov](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip Settings](../CompatibleCgms/xDrip.md)
* [Nightscout ako zdroj glykémie](../CompatibleCgms/CgmNightscoutUpload.md): Hoci je možné použiť Nightscout ako zdroj glykémie na podávanie inzulínu v uzavretej slučke, **táto metóda sa neodporúča** kvôli jej závislosti od stabilných mobilných dát alebo pripojenia Wi-Fi. To znamená, že vaše údaje **CGM** bude prijímať **AAPS** iba vtedy, keď budete mať online pripojenie k vášmu nightscoutu. For a more reliable setup, using a CGM with local broadcast from the receiver (as listed below) to **AAPS** is a much better option.

| CGM                                                                                                    | Dostupné [zdroje glykémie](#Config-Builder-bg-source)                                                                                      |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                             | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Juggluco](../CompatibleCgms/Juggluco.md)                                                    |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                           | [xDrip](../CompatibleCgms/xDrip.md) or [Juggluco](../CompatibleCgms/Juggluco.md)                                                           |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                          | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                        |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                             | BYODA or [xDrip](../CompatibleCgms/xDrip.md)                                                                                               |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                            | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                        |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                              | [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip)                                                                          |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                              | [xDrip](../CompatibleCgms/xDrip.md) (EU only) or [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip)                         |
| [LIbre 1](../CompatibleCgms/Libre1.md)                                                                 | [xDrip](../CompatibleCgms/xDrip.md) (Diabox sends its readings through the xDrip source), Glimp or Tomato (MiaoMiao). Potrebujete vysielač |
| [Eversense](../CompatibleCgms/Eversense.md)                                                            | [xDrip](../CompatibleCgms/xDrip.md), ESEL/Eversense patched App or Notification Reader                                                     |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                  | [xDrip](../CompatibleCgms/xDrip.md) or MM640g + 600SeriesAndroidUploader App                                                               |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                | PocTech app                                                                                                                                |
| Glunovo                                                                                                | Glunovo App                                                                                                                                |
| Intelligo                                                                                              | Intelligo App                                                                                                                              |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                          | Syai/Ottai (with the Ottai or Syai Tag app)                                                                                                |
| Sibionics CGM                                                                                          | [Juggluco](../CompatibleCgms/Juggluco.md) or SI App (with the patched SI App or the Sibionics App)                                         |
| Sinocare                                                                                               | Sino App (with the patched Sino App)                                                                                                       |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                     | MicroTech CGM App                                                                                                                          |
| Instara                                                                                                | Instara (with the Instara App)                                                                                                             |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                            | xDrip Companion App or [Juggluco](../CompatibleCgms/Juggluco.md)                                                                           |
| Any CGM whose official app shows the glucose value in a notification (Dexcom, Medtronic, Eversense, …) | Notification Reader                                                                                                                        |

(GettingStarted-TrustedBGSource)=

## Dôveryhodné zdroje údajov o glykémii

Regulačné schválené **CGM** pre komerčné hybridné systémy s uzavretou slučkou sa považujú za dôveryhodné zdroje údajov o **BG**.

Aby ich **AAPS** mohol správne identifikovať, aplikácia odosielajúca hodnoty **glukózy** musí byť schopná poskytnúť informácie zo senzora.

Dôveryhodné zdroje údajov umožňujú nepretržité podávanie **SMB**.

| Senzor           |                                                       CGM app                                                       |
| ---------------- |:-------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                          BYODA, xDrip (**Direct, Native**)                                          |
| Dexcom G7        |                BYODA, xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** without xDrip)                 |
| Dexcom ONE+      |                    xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** without xDrip)                    |
| Dexcom ONE/Stelo |                                             xDrip (**Direct, Native**)                                              |
| Libre 2/2+ (EU)  | xDrip (OOP2 **no calibration**), </br>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip) |
| Libre 2/2+/3/3+  |                    Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                    |
| Syai             |                                                      Syai App                                                       |

**Note: xDrip Companion apps and Follower modes (includes 640G/Eversense) are not trusted data sources.**
