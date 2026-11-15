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

| NGJ                                                                                                         | Galimi [glikemijos šaltiniai](#Config-Builder-bg-source)                                                                                      |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                  | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                               | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                  | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                 | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                   | [Juggluco](../CompatibleCgms/Juggluco.md) (su xDrip arba be jo)                                                                               |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                   | [xDrip](../CompatibleCgms/xDrip.md) (tik ES) arba [Juggluco](../CompatibleCgms/Juggluco.md) (su xDrip arba be jo)                             |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md) (Diabox savo rodmenis siunčia per xDrip šaltinį), Glimp arba Tomato (MiaoMiao). Need a transmitter        |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                 | [xDrip](../CompatibleCgms/xDrip.md), ESEL / Eversense pataisyta programėlė arba Pranešimų skaitytuvas                                         |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                       | [xDrip](../CompatibleCgms/xDrip.md) arba MM640g + programėlė 600SeriesAndroidUploader                                                         |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                     | PocTech app                                                                                                                                   |
| Glunovo                                                                                                     | Glunovo App                                                                                                                                   |
| Intelligo                                                                                                   | Intelligo App                                                                                                                                 |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                               | Syai/Ottai (su programėle Ottai arba Syai Tag)                                                                                                |
| Sibionics NGJ                                                                                               | [Juggluco](../CompatibleCgms/Juggluco.md) arba SI App (su pataisyta SI App arba Sibionics programėle)                                         |
| Sinocare                                                                                                    | Sino App (su pataisyta Sino App)                                                                                                              |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                          | MicroTech CGM App                                                                                                                             |
| Instara                                                                                                     | Instara (su programėle Instara)                                                                                                               |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                 | xDrip Companion App arba [Juggluco](../CompatibleCgms/Juggluco.md)                                                                            |
| Bet kuris NGJ, kurio oficiali programėlė gliukozės reikšmę rodo pranešime (Dexcom, Medtronic, Eversense, …) | Pranešimų skaitytuvas                                                                                                                         |

(GettingStarted-TrustedBGSource)=

## Patikimi glikemijos duomenų šaltiniai

Patikimais **KG** duomenų šaltiniais laikomi tie **NGJ**, kuriuos reguliavimo institucijos patvirtino komercinėms hibridinėms uždaro ciklo sistemoms.

Kad **AAPS** galėtų juos teisingai atpažinti, **KG** rodmenis siunčianti programėlė turi galėti pateikti informaciją apie jutiklį.

Trusted data sources allow **SMB** delivery, all the time.

**AAPS** checks the sensor named in the latest **BG** reading it received, whichever **BG** source delivered it. After you change your **BG** source, the **SMB** "always" settings appear only once the first reading from the new source has arrived.

| Jutiklis        |                                                                              NGJ programėlė                                                                              |
| --------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                             BYODA, xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                              |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                                 |
| Dexcom Stelo    |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))                                 |
| Libre 2/2+ (EU) |                                  xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                                  |
| Libre 2/2+/3/3+ |                                                 Juggluco (**xDrip broadcast** be xDrip arba **Patched Libre** su xDrip)                                                  |
| Syai, Ottai     |                      Syai or Ottai app (**Syai/Ottai** source or **Notification Reader**), <br/>Juggluco (**xDrip broadcast** without xDrip)                       |

**Note: xDrip Companion apps, Medtronic, Eversense and all other sensors are not trusted data sources.**

```{admonition} Online BG sources are not recommended for closed looping
:class: warning
Some sources that need an internet connection can also be trusted:
- xDrip **Dexcom Share follower** (any Dexcom sensor)
- the **Nightscout** BG source (**AAPSClient**, or **AAPS** following your Nightscout site), when the uploader names one of the sensors above

These sources are **not recommended** for a closed loop. When your phone or the CGM uploader loses its connection, **AAPS** receives no **BG** readings and cannot loop. Readings also arrive late, after the delay of the cloud service. Use a CGM app that sends its readings to **AAPS** directly on the phone (as listed in the table above) whenever possible.

Other follower modes (xDrip Nightscout or Web follower, CareLink follower, Juggluco Nightscout) are never trusted.
```
