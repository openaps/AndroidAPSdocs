# Kompatibilni CGM-ovi

Ovaj odjeljak daje kratak pregled svih **CGM/FGM** uređaja kompatibilnih s **AAPS-om**.

*Savjet*: ako svoje podatke o glukozi možete prikazati u aplikaciji xDrip, u **AAPS-u** možete odabrati xDrip kao izvor **GUK-a**.

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

* [Opće preporuke](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Zaglađivanje podataka GUK-a](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Postavke xDripa](../CompatibleCgms/xDrip.md)
* [Drugi CGM koji šalje podatke u Nightscout](../CompatibleCgms/CgmNightscoutUpload.md): iako je Nightscout moguće koristiti kao izvor GUK-a za isporuku inzulina u zatvorenoj petlji, **ovaj način se ne preporučuje** jer ovisi o stabilnoj mobilnoj podatkovnoj ili Wi-Fi vezi. To znači da bi **AAPS** primao podatke s **CGM-a** samo kada imate internetsku vezu s vašom Nightscout stranicom. Za pouzdaniji sustav mnogo je bolja opcija CGM koji lokalno šalje podatke iz prijemnika (kao na popisu ispod) u **AAPS**.

| CGM                                                                                                            | Dostupni [izvori GUK-a](#Config-Builder-bg-source)                                                                                          |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                     | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) ili [Čitač obavijesti](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                   | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) ili [Čitač obavijesti](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                  | [xDrip](../CompatibleCgms/xDrip.md) ili [Čitač obavijesti](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                     | BYODA, [xDrip](../CompatibleCgms/xDrip.md) ili [Čitač obavijesti](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                    | [xDrip](../CompatibleCgms/xDrip.md) ili [Čitač obavijesti](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                      | [Juggluco](../CompatibleCgms/Juggluco.md) (sa ili bez xDripa)                                                                               |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md) (samo EU) ili [Juggluco](../CompatibleCgms/Juggluco.md) (sa ili bez xDripa)                             |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                         | [xDrip](../CompatibleCgms/xDrip.md) (Diabox šalje svoja očitanja preko izvora xDrip), Glimp ili Tomato (MiaoMiao). Potreban odašiljač       |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                    | [xDrip](../CompatibleCgms/xDrip.md), prilagođena (patched) aplikacija ESEL/Eversense ili Čitač obavijesti                                   |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                          | [xDrip](../CompatibleCgms/xDrip.md) ili MM640g + aplikacija 600SeriesAndroidUploader                                                        |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                        | Aplikacija PocTech                                                                                                                          |
| Glunovo                                                                                                        | Aplikacija Glunovo                                                                                                                          |
| Intelligo                                                                                                      | Aplikacija Intelligo                                                                                                                        |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                  | Syai/Ottai (s aplikacijom Ottai ili Syai Tag)                                                                                               |
| Sibionics CGM                                                                                                  | [Juggluco](../CompatibleCgms/Juggluco.md) ili SI App (s prilagođenom (patched) aplikacijom SI App ili aplikacijom Sibionics)                |
| Sinocare                                                                                                       | Sino App (s prilagođenom (patched) aplikacijom Sino App)                                                                                    |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                             | Aplikacija MicroTech CGM                                                                                                                    |
| Instara                                                                                                        | Instara (s aplikacijom Instara)                                                                                                             |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                    | Aplikacija xDrip Companion ili [Juggluco](../CompatibleCgms/Juggluco.md)                                                                    |
| Svaki CGM čija službena aplikacija prikazuje vrijednost glukoze u obavijesti (Dexcom, Medtronic, Eversense, …) | Čitač obavijesti                                                                                                                            |

(GettingStarted-TrustedBGSource)=

## Pouzdani izvori podataka GUK-a

Regulatorno odobreni **CGM**-ovi za komercijalne hibridne sustave zatvorene petlje smatraju se pouzdanim izvorima podataka **GUK-a**.

Kako bi ih **AAPS** ispravno prepoznao, aplikacija koja šalje očitanja **GUK-a** mora moći poslati podatke o senzoru.

Pouzdani izvori podataka omogućuju isporuku **SMB-a** u svakom trenutku.

**AAPS** provjerava senzor naveden u zadnjem primljenom očitanju **GUK-a**, bez obzira na to koji ga je izvor **GUK-a** isporučio. Nakon što promijenite izvor **GUK-a**, postavke **SMB** „uvijek“ pojavljuju se tek kada stigne prvo očitanje iz novog izvora.

| Senzor          |                                                                              CGM aplikacija                                                                               |
| --------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                            BYODA, xDrip (**Direct, Native**), <br/>aplikacija Dexcom ([Čitač obavijesti](#DexcomG6-notification-reader))                            |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** bez xDripa), <br/>aplikacija Dexcom ([Čitač obavijesti](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** bez xDripa), <br/>aplikacija Dexcom ([Čitač obavijesti](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                               xDrip (**Direct, Native**), <br/>aplikacija Dexcom ([Čitač obavijesti](#DexcomG6-notification-reader))                                |
| Dexcom Stelo    |                               xDrip (**Direct, Native**), <br/>aplikacija Dexcom ([Čitač obavijesti](#DexcomG7-notification-reader))                                |
| Libre 2/2+ (EU) |                                    xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** bez xDripa ili **Patched Libre** s xDripom)                                     |
| Libre 2/2+/3/3+ |                                                 Juggluco (**xDrip broadcast** bez xDripa ili **Patched Libre** s xDripom)                                                 |
| Syai, Ottai     |                      Aplikacija Syai ili Ottai (izvor **Syai/Ottai** ili **Čitač obavijesti**), <br/>Juggluco (**xDrip broadcast** bez xDripa)                      |

**Napomena: aplikacije xDrip Companion, Medtronic, Eversense i svi ostali senzori nisu pouzdani izvori podataka.**

```{admonition} Online BG sources are not recommended for closed looping
:class: warning
Neki izvori kojima je potrebna internetska veza također mogu biti pouzdani:
- xDrip **Dexcom Share follower** (bilo koji Dexcom senzor)
- izvor GUK-a **Nightscout** (**AAPSClient** ili **AAPS** koji prati vašu Nightscout stranicu), kada uploader navodi jedan od gore navedenih senzora

Ovi izvori se **ne preporučuju** za zatvorenu petlju. Kada vaš telefon ili CGM uploader izgubi vezu, **AAPS** ne prima očitanja **GUK-a** i petlja ne može raditi. Očitanja također stižu kasno, nakon kašnjenja usluge u oblaku. Kad god je moguće, koristite CGM aplikaciju koja svoja očitanja šalje u **AAPS** izravno na telefonu (kao u gornjoj tablici).

Ostali načini praćenja (xDrip Nightscout ili Web follower, CareLink follower, Juggluco Nightscout) nikada nisu pouzdani.
```
