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

| CGM                                                                                                            | Dostupni [izvori GUK-a](#Config-Builder-bg-source)                                                                                            |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                     | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                   | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                  | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                     | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                    | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                      | [Juggluco](../CompatibleCgms/Juggluco.md) (sa ili bez xDripa)                                                                                 |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md) (samo EU) ili [Juggluco](../CompatibleCgms/Juggluco.md) (sa ili bez xDripa)                               |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                         | [xDrip](../CompatibleCgms/xDrip.md) (Diabox šalje svoja očitanja preko izvora xDrip), Glimp ili Tomato (MiaoMiao). Potreban odašiljač         |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                    | [xDrip](../CompatibleCgms/xDrip.md), prilagođena (patched) aplikacija ESEL/Eversense ili Čitač obavijesti                                     |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                          | [xDrip](../CompatibleCgms/xDrip.md) ili MM640g + aplikacija 600SeriesAndroidUploader                                                          |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                        | Aplikacija PocTech                                                                                                                            |
| Glunovo                                                                                                        | Aplikacija Glunovo                                                                                                                            |
| Intelligo                                                                                                      | Aplikacija Intelligo                                                                                                                          |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                  | Syai/Ottai (s aplikacijom Ottai ili Syai Tag)                                                                                                 |
| Sibionics CGM                                                                                                  | [Juggluco](../CompatibleCgms/Juggluco.md) ili SI App (s prilagođenom (patched) aplikacijom SI App ili aplikacijom Sibionics)                  |
| Sinocare                                                                                                       | Sino App (s prilagođenom (patched) aplikacijom Sino App)                                                                                      |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                             | Aplikacija MicroTech CGM                                                                                                                      |
| Instara                                                                                                        | Instara (s aplikacijom Instara)                                                                                                               |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                    | Aplikacija xDrip Companion ili [Juggluco](../CompatibleCgms/Juggluco.md)                                                                      |
| Svaki CGM čija službena aplikacija prikazuje vrijednost glukoze u obavijesti (Dexcom, Medtronic, Eversense, …) | Čitač obavijesti                                                                                                                              |

(GettingStarted-TrustedBGSource)=

## Pouzdani izvori podataka GUK-a

Regulatorno odobreni **CGM**-ovi za komercijalne hibridne sustave zatvorene petlje smatraju se pouzdanim izvorima podataka **GUK-a**.

Kako bi ih **AAPS** ispravno prepoznao, aplikacija koja šalje očitanja **GUK-a** mora moći poslati podatke o senzoru.

Pouzdani izvori podataka omogućuju isporuku **SMB-a** u svakom trenutku.

**AAPS** checks the sensor named in the latest **BG** reading it received, whichever **BG** source delivered it. After you change your **BG** source, the **SMB** "always" settings appear only once the first reading from the new source has arrived.

| Senzor          |                                                                              CGM aplikacija                                                                              |
| --------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                             BYODA, xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                              |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                                 |
| Dexcom Stelo    |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))                                 |
| Libre 2/2+ (EU) |                                  xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                                  |
| Libre 2/2+/3/3+ |                                                Juggluco (**xDrip broadcast** bez xDripa ili **Patched Libre** s xDripom)                                                 |
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
