# Kompatibilní CGM

Tato část podává stručný přehled všech **CGM/FGM** kompatibilních s **AAPS**.

*Tip*: Pokud dokážete zobrazit data glykémie v aplikaci xDrip, můžete v **AAPS** zvolit xDrip jako zdroj **glykémie**.

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

* [Obecná doporučení](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Vyhlazování dat](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Nastavení xDrip](../CompatibleCgms/xDrip.md)
* [Nightscout jako zdroj glykémie](../CompatibleCgms/CgmNightscoutUpload.md): Nightscout je sice možné použít jako zdroj glykémie pro podávání inzulínu v uzavřené smyčce, ale **tento způsob se nedoporučuje**, protože závisí na stabilním mobilním datovém připojení nebo Wi-Fi. To znamená, že **AAPS** dostane data z **CGM** jen tehdy, když jste online připojeni ke své stránce Nightscout. Pro spolehlivější nastavení je mnohem lepší volbou CGM s místním vysíláním z přijímače (viz seznam níže) do **AAPS**.

| CGM                                                                                                            | Dostupné [zdroje glykémie](#Config-Builder-bg-source)                                                                                         |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                     | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                   | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                  | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                     | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                    | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                      | [Juggluco](../CompatibleCgms/Juggluco.md) (s xDrip nebo bez něj)                                                                              |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md) (jen EU) nebo [Juggluco](../CompatibleCgms/Juggluco.md) (s xDrip nebo bez něj)                            |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                         | [xDrip](../CompatibleCgms/xDrip.md) (Diabox posílá své hodnoty přes zdroj xDrip), Glimp nebo Tomato (MiaoMiao). Potřebuje vysílač             |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                    | [xDrip](../CompatibleCgms/xDrip.md), upravená aplikace ESEL/Eversense nebo Čtečka oznámení                                                    |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                          | [xDrip](../CompatibleCgms/xDrip.md) nebo MM640g + aplikace 600SeriesAndroidUploader                                                           |
| [Poctech](../CompatibleCgms/PocTech.md)                                                                        | Aplikace PocTech                                                                                                                              |
| Glunovo                                                                                                        | Aplikace Glunovo                                                                                                                              |
| Intelligo                                                                                                      | Aplikace Intelligo                                                                                                                            |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                  | Syai/Ottai (s aplikací Ottai nebo Syai Tag)                                                                                                   |
| Sibionics CGM                                                                                                  | [Juggluco](../CompatibleCgms/Juggluco.md) nebo Aplikace SI (s upravenou aplikací SI nebo s aplikací Sibionics)                                |
| Sinocare                                                                                                       | Aplikace Sino (s upravenou aplikací Sino)                                                                                                     |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                             | Aplikace pro CGM MicroTech                                                                                                                    |
| Instara                                                                                                        | Instara (s aplikací Instara)                                                                                                                  |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                    | Doprovodná aplikace xDrip nebo [Juggluco](../CompatibleCgms/Juggluco.md)                                                                      |
| Jakýkoli CGM, jehož oficiální aplikace zobrazuje hodnotu glykémie v oznámení (Dexcom, Medtronic, Eversense, …) | Čtečka oznámení                                                                                                                               |

(GettingStarted-TrustedBGSource)=

## Důvěryhodné zdroje dat glykémie

**CGM** schválené regulačními úřady pro komerční hybridní systémy uzavřené smyčky se považují za důvěryhodné zdroje dat **glykémie**.

Aby je **AAPS** správně rozpoznal, musí aplikace, která posílá hodnoty **glykémie**, umět poskytnout informace o senzoru.

Důvěryhodné zdroje dat umožňují podávání **SMB** po celou dobu.

**AAPS** checks the sensor named in the latest **BG** reading it received, whichever **BG** source delivered it. After you change your **BG** source, the **SMB** "always" settings appear only once the first reading from the new source has arrived.

| Senzor          |                                                                               Aplikace CGM                                                                               |
| --------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                             BYODA, xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                              |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                                 |
| Dexcom Stelo    |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))                                 |
| Libre 2/2+ (EU) |                                  xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                                  |
| Libre 2/2+/3/3+ |                                                 Juggluco (**xDrip broadcast** bez xDrip, nebo **Patched Libre** s xDrip)                                                 |
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
