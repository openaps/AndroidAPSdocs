# Kompatible CGM'er

Dette afsnit giver et kort overblik over alle **CGM'er/FGM'er**, der er kompatible med **AAPS**.

*Tip*: Hvis du kan vise dine glukosedata i xDrip-appen, kan du vælge xDrip som **BS**-kilde i **AAPS**.

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

* [Generelle anbefalinger om CGM](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Udjævning af blodsukkerdata](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip-indstillinger](../CompatibleCgms/xDrip.md)
* [Anden CGM uploadet til Nightscout](../CompatibleCgms/CgmNightscoutUpload.md): Selvom det er muligt at bruge Nightscout som BS-kilde til insulintilførsel med lukket loop, **anbefales denne metode ikke**, fordi den afhænger af stabile mobildata eller en stabil Wi-Fi-forbindelse. Det betyder, at **AAPS** kun modtager dine **CGM**-data, når du har en onlineforbindelse til din Nightscout-side. En CGM, der sender lokalt fra modtageren (som vist nedenfor) til **AAPS**, er en meget bedre løsning, hvis du vil have en mere pålidelig opsætning.

| CGM                                                                                                      | Tilgængelige [BS-kilder](#Config-Builder-bg-source)                                                                                             |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                               | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) eller [Notifikationslæser](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                             | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) eller [Notifikationslæser](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                            | [xDrip](../CompatibleCgms/xDrip.md) eller [Notifikationslæser](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                               | BYODA, [xDrip](../CompatibleCgms/xDrip.md) eller [Notifikationslæser](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                              | [xDrip](../CompatibleCgms/xDrip.md) eller [Notifikationslæser](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                | [Juggluco](../CompatibleCgms/Juggluco.md) (med eller uden xDrip)                                                                                |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                | [xDrip](../CompatibleCgms/xDrip.md) (kun EU) eller [Juggluco](../CompatibleCgms/Juggluco.md) (med eller uden xDrip)                             |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                   | [xDrip](../CompatibleCgms/xDrip.md) (Diabox sender sine målinger via xDrip-kilden), Glimp eller Tomato (MiaoMiao). Kræver en sender             |
| [Eversense](../CompatibleCgms/Eversense.md)                                                              | [xDrip](../CompatibleCgms/xDrip.md), den patchede ESEL/Eversense-app eller Notifikationslæser                                                   |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                    | [xDrip](../CompatibleCgms/xDrip.md) eller MM640g + appen 600SeriesAndroidUploader                                                               |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                  | PocTech-app                                                                                                                                     |
| Glunovo                                                                                                  | Glunovo-app                                                                                                                                     |
| Intelligo                                                                                                | Intelligo-app                                                                                                                                   |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                            | Syai/Ottai (med appen Ottai eller Syai Tag)                                                                                                     |
| Sibionics CGM                                                                                            | [Juggluco](../CompatibleCgms/Juggluco.md) eller SI App (med den patchede SI App eller Sibionics-appen)                                          |
| Sinocare                                                                                                 | Sino App (med den patchede Sino App)                                                                                                            |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                       | MicroTech CGM-app                                                                                                                               |
| Instara                                                                                                  | Instara (med Instara-appen)                                                                                                                     |
| [CareSens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                              | xDrip Companion-appen eller [Juggluco](../CompatibleCgms/Juggluco.md)                                                                           |
| Enhver CGM, hvis officielle app viser glukoseværdien i en notifikation (Dexcom, Medtronic, Eversense, …) | Notifikationslæser                                                                                                                              |

(GettingStarted-TrustedBGSource)=

## Pålidelige BS-datakilder

**CGM**'er, der er godkendt af myndighederne til kommercielle hybride lukkede loop-systemer, regnes som pålidelige **BS**-datakilder.

For at **AAPS** kan genkende dem korrekt, skal den app, der sender **BS**-målingerne, kunne levere information om sensoren.

Pålidelige datakilder tillader levering af **SMB** hele tiden.

**AAPS** kontrollerer den sensor, der er angivet i den seneste **BS**-måling, den har modtaget, uanset hvilken **BS**-kilde der leverede den. Når du har skiftet **BS**-kilde, vises indstillingerne for **SMB** »altid« først, når den første måling fra den nye kilde er kommet.

| Sensor          |                                                                                CGM-app                                                                                 |
| --------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                            BYODA, xDrip (**Direct, Native**), <br/>Dexcom-appen ([Notifikationslæser](#DexcomG6-notification-reader))                            |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** uden xDrip), <br/>Dexcom-appen ([Notifikationslæser](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** uden xDrip), <br/>Dexcom-appen ([Notifikationslæser](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                               xDrip (**Direct, Native**), <br/>Dexcom-appen ([Notifikationslæser](#DexcomG6-notification-reader))                                |
| Dexcom Stelo    |                               xDrip (**Direct, Native**), <br/>Dexcom-appen ([Notifikationslæser](#DexcomG7-notification-reader))                                |
| Libre 2/2+ (EU) |                                 xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** uden xDrip, eller **Patched Libre** med xDrip)                                  |
| Libre 2/2+/3/3+ |                                              Juggluco (**xDrip broadcast** uden xDrip, eller **Patched Libre** med xDrip)                                              |
| Syai, Ottai     |                   Syai- eller Ottai-appen (kilden **Syai/Ottai** eller **Notifikationslæser**), <br/>Juggluco (**xDrip broadcast** uden xDrip)                   |

**Bemærk: xDrip Companion-apps, Medtronic, Eversense og alle andre sensorer er ikke pålidelige datakilder.**

```{admonition} Online BG sources are not recommended for closed looping
:class: warning
Nogle kilder, der kræver en internetforbindelse, kan også være pålidelige:
- xDrip **Dexcom Share follower** (alle Dexcom-sensorer)
- BS-kilden **Nightscout** (**AAPSClient**, eller **AAPS**, der følger din Nightscout-side), når uploaderen angiver en af sensorerne ovenfor

Disse kilder **anbefales ikke** til et lukket loop. Når din telefon eller CGM-uploaderen mister forbindelsen, modtager **AAPS** ingen **BS**-målinger og kan ikke loope. Målingerne kommer også for sent, efter forsinkelsen i skytjenesten. Brug så vidt muligt en CGM-app, der sender sine målinger direkte til **AAPS** på telefonen (som vist i tabellen ovenfor).

Andre følgertilstande (xDrip Nightscout eller Web follower, CareLink follower, Juggluco Nightscout) er aldrig pålidelige.
```
