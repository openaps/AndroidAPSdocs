# Kompatible CGM-er

Denne delen gir en kort oversikt over alle **CGM-er/FGM-er** som er kompatible med **AAPS**.

*Tips*: Hvis du kan vise glukosedataene dine i xDrip-appen, kan du velge xDrip som **BS**-kilde i **AAPS**.

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

* [Generelle anbefalinger](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Utjevning av data](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip-innstillinger](../CompatibleCgms/xDrip.md)
* [Nightscout som BS-kilde](../CompatibleCgms/CgmNightscoutUpload.md): Selv om det er mulig å bruke Nightscout som BS-kilde for lukket loop, **anbefales ikke denne metoden**, fordi den er avhengig av stabil mobildata- eller Wi-Fi-tilkobling. Det betyr at **AAPS** bare mottar **CGM**-dataene dine når du har nettforbindelse til Nightscout-siden din. For et mer pålitelig oppsett er det et mye bedre valg å bruke en CGM med lokal kringkasting fra mottakeren (som listet nedenfor) til **AAPS**.

| CGM                                                                                                       | Tilgjengelige [BS-kilder](#Config-Builder-bg-source)                                                                                          |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                              | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                             | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                               | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                 | [Juggluco](../CompatibleCgms/Juggluco.md) (med eller uten xDrip)                                                                              |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                 | [xDrip](../CompatibleCgms/xDrip.md) (bare EU) eller [Juggluco](../CompatibleCgms/Juggluco.md) (med eller uten xDrip)                          |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                    | [xDrip](../CompatibleCgms/xDrip.md) (Diabox sender verdiene sine gjennom xDrip-kilden), Glimp eller Tomato (MiaoMiao). Trenger en sender      |
| [Eversense](../CompatibleCgms/Eversense.md)                                                               | [xDrip](../CompatibleCgms/xDrip.md), ESEL/Eversense-app med patch eller Varslingsleser                                                        |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                     | [xDrip](../CompatibleCgms/xDrip.md) eller MM640g + appen 600SeriesAndroidUploader                                                             |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                   | PocTech-app                                                                                                                                   |
| Glunovo                                                                                                   | Glunovo-app                                                                                                                                   |
| Intelligo                                                                                                 | Intelligo-app                                                                                                                                 |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                             | Syai/Ottai (med Ottai- eller Syai Tag-appen)                                                                                                  |
| Sibionics CGM                                                                                             | [Juggluco](../CompatibleCgms/Juggluco.md) eller SI app (med SI app med patch, eller Sibionics-appen)                                          |
| Sinocare                                                                                                  | Sino app (med Sino app med patch)                                                                                                             |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                        | MicroTech sensorapp                                                                                                                           |
| Instara                                                                                                   | Instara (med Instara-appen)                                                                                                                   |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                               | xDrip Companion-app eller [Juggluco](../CompatibleCgms/Juggluco.md)                                                                           |
| Alle CGM-er der den offisielle appen viser glukoseverdien i en varsling (Dexcom, Medtronic, Eversense, …) | Varslingsleser                                                                                                                                |

(GettingStarted-TrustedBGSource)=

## Pålitelige BS-datakilder

Myndighetsgodkjente **CGM**-er for kommersielle hybride lukket loop-systemer regnes som pålitelige **BS**-datakilder.

For at **AAPS** skal kjenne dem igjen, må appen som sender **BS**-verdiene, kunne gi informasjon om sensoren.

Pålitelige datakilder tillater **SMB** hele tiden.

**AAPS** checks the sensor named in the latest **BG** reading it received, whichever **BG** source delivered it. After you change your **BG** source, the **SMB** "always" settings appear only once the first reading from the new source has arrived.

| Sensor          |                                                                                 CGM-app                                                                                  |
| --------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                             BYODA, xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                              |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                                 |
| Dexcom Stelo    |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))                                 |
| Libre 2/2+ (EU) |                                  xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                                  |
| Libre 2/2+/3/3+ |                                               Juggluco (**xDrip broadcast** uten xDrip, eller **Patched Libre** med xDrip)                                               |
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
