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

| CGM                                                                                                           | Beschikbare [BG-bronnen](#Config-Builder-bg-source)                                                                                           |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                    | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                  | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                 | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                    | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                   | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                     | [Juggluco](../CompatibleCgms/Juggluco.md) (met of zonder xDrip)                                                                               |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                     | [xDrip](../CompatibleCgms/xDrip.md) (alleen EU) of [Juggluco](../CompatibleCgms/Juggluco.md) (met of zonder xDrip)                            |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                        | [xDrip](../CompatibleCgms/xDrip.md) (Diabox stuurt zijn waarden via de xDrip-bron), Glimp of Tomato (MiaoMiao). Heeft een zender nodig        |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                   | [xDrip](../CompatibleCgms/xDrip.md), gepatchte ESEL/Eversense-app of Notificatielezer                                                         |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                         | [xDrip](../CompatibleCgms/xDrip.md) of MM640g + 600SeriesAndroidUploader-app                                                                  |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                       | PocTech-app                                                                                                                                   |
| Glunovo                                                                                                       | Glunovo-app                                                                                                                                   |
| Intelligo                                                                                                     | Intelligo-app                                                                                                                                 |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                 | Syai/Ottai (met de Ottai- of Syai Tag-app)                                                                                                    |
| Sibionics CGM                                                                                                 | [Juggluco](../CompatibleCgms/Juggluco.md) of SI App (met de gepatchte SI App of de Sibionics-app)                                             |
| Sinocare                                                                                                      | Sino App (met de gepatchte Sino App)                                                                                                          |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                            | MicroTech CGM-app                                                                                                                             |
| Instara                                                                                                       | Instara (met de Instara-app)                                                                                                                  |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                   | xDrip Companion-app of [Juggluco](../CompatibleCgms/Juggluco.md)                                                                              |
| Elke CGM waarvan de officiële app de glucosewaarde in een notificatie toont (Dexcom, Medtronic, Eversense, …) | Notificatielezer                                                                                                                              |

(GettingStarted-TrustedBGSource)=

## Vertrouwde BG-gegevensbronnen

Officieel goedgekeurde **CGM**'s voor commerciële hybride gesloten-loopsystemen gelden als vertrouwde **BG**-gegevensbronnen.

Om ze goed te herkennen, moet de app die de **BG**-waarden naar **AAPS** stuurt ook sensorinformatie kunnen meesturen.

Vertrouwde gegevensbronnen staan **SMB**-toediening altijd toe.

**AAPS** checks the sensor named in the latest **BG** reading it received, whichever **BG** source delivered it. After you change your **BG** source, the **SMB** "always" settings appear only once the first reading from the new source has arrived.

| Sensor          |                                                                                 CGM app                                                                                  |
| --------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                             BYODA, xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                              |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                                 |
| Dexcom Stelo    |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))                                 |
| Libre 2/2+ (EU) |                                  xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                                  |
| Libre 2/2+/3/3+ |                                               Juggluco (**xDrip broadcast** zonder xDrip, of **Patched Libre** met xDrip)                                                |
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
