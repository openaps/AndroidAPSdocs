# Suderinami NGJ

Šiame skyriuje trumpai apžvelgiami visi su **AAPS** suderinami **NGJ/FGM**.

*Patarimas*: jei savo gliukozės duomenis galite matyti programėlėje xDrip, **AAPS** galite pasirinkti xDrip kaip **KG** šaltinį.

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

* [Bendrosios rekomendacijos](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Data Smoothing](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip nustatymai](../CompatibleCgms/xDrip.md)
* [Nightscout kaip glikemijos šaltinis](../CompatibleCgms/CgmNightscoutUpload.md): Nightscout galima naudoti kaip glikemijos šaltinį insulinui tiekti uždaru ciklu, tačiau **šis būdas nerekomenduojamas**, nes jam reikia stabilaus mobiliojo interneto arba Wi-Fi ryšio. Tai reiškia, kad **AAPS** gautų **NGJ** duomenis tik tada, kai turite interneto ryšį su savo Nightscout svetaine. Patikimesnis sprendimas – naudoti NGJ, kurio imtuvas duomenis į **AAPS** perduoda vietiniu transliavimu (žr. sąrašą toliau). Tai daug geresnis pasirinkimas.

| NGJ                                                                                                         | Galimi [glikemijos šaltiniai](#Config-Builder-bg-source)                                                                               |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                  | BYODA, [xDrip](../CompatibleCgms/xDrip.md) arba [Juggluco](../CompatibleCgms/Juggluco.md)                                              |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                | [xDrip](../CompatibleCgms/xDrip.md) arba [Juggluco](../CompatibleCgms/Juggluco.md)                                                     |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                               | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                    |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                  | BYODA arba [xDrip](../CompatibleCgms/xDrip.md)                                                                                         |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                 | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                    |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                   | [Juggluco](../CompatibleCgms/Juggluco.md) (su xDrip arba be jo)                                                                        |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                   | [xDrip](../CompatibleCgms/xDrip.md) (tik ES) arba [Juggluco](../CompatibleCgms/Juggluco.md) (su xDrip arba be jo)                      |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md) (Diabox savo rodmenis siunčia per xDrip šaltinį), Glimp arba Tomato (MiaoMiao). Need a transmitter |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                 | [xDrip](../CompatibleCgms/xDrip.md), ESEL / Eversense pataisyta programėlė arba Pranešimų skaitytuvas                                  |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                       | [xDrip](../CompatibleCgms/xDrip.md) arba MM640g + programėlė 600SeriesAndroidUploader                                                  |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                     | PocTech app                                                                                                                            |
| Glunovo                                                                                                     | Glunovo App                                                                                                                            |
| Intelligo                                                                                                   | Intelligo App                                                                                                                          |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                               | Syai/Ottai (su programėle Ottai arba Syai Tag)                                                                                         |
| Sibionics NGJ                                                                                               | [Juggluco](../CompatibleCgms/Juggluco.md) arba SI App (su pataisyta SI App arba Sibionics programėle)                                  |
| Sinocare                                                                                                    | Sino App (su pataisyta Sino App)                                                                                                       |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                          | MicroTech CGM App                                                                                                                      |
| Instara                                                                                                     | Instara (su programėle Instara)                                                                                                        |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                 | xDrip Companion App arba [Juggluco](../CompatibleCgms/Juggluco.md)                                                                     |
| Bet kuris NGJ, kurio oficiali programėlė gliukozės reikšmę rodo pranešime (Dexcom, Medtronic, Eversense, …) | Pranešimų skaitytuvas                                                                                                                  |

(GettingStarted-TrustedBGSource)=

## Patikimi glikemijos duomenų šaltiniai

Patikimais **KG** duomenų šaltiniais laikomi tie **NGJ**, kuriuos reguliavimo institucijos patvirtino komercinėms hibridinėms uždaro ciklo sistemoms.

Kad **AAPS** galėtų juos teisingai atpažinti, **KG** rodmenis siunčianti programėlė turi galėti pateikti informaciją apie jutiklį.

Trusted data sources allow **SMB** delivery, all the time.

| Jutiklis         |                                                   NGJ programėlė                                                    |
| ---------------- |:-------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                          BYODA, xDrip (**Direct, Native**)                                          |
| Dexcom G7        |                BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** be xDrip)                |
| Dexcom ONE+      |                   xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** be xDrip)                    |
| Dexcom ONE/Stelo |                                             xDrip (**Direct, Native**)                                              |
| Libre 2/2+ (EU)  | xDrip (OOP2 **no calibration**), <br/>Juggluco (**xDrip broadcast** be xDrip arba **Patched Libre** su xDrip) |
| Libre 2/2+/3/3+  |                       Juggluco (**xDrip broadcast** be xDrip arba **Patched Libre** su xDrip)                       |
| Syai             |                                                      Syai App                                                       |

**Pastaba: xDrip Companion programėlės ir sekimo režimai (įskaitant 640G/Eversense) nėra patikimi duomenų šaltiniai.**
