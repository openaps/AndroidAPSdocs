# Съвместими CGM

Този раздел дава кратък преглед на всички **CGM/FGM**, съвместими с **AAPS**.

*Съвет*: Ако можете да виждате данните за глюкозата си в приложението xDrip, можете да изберете xDrip като източник на **КЗ** в **AAPS**.

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

* [Общи препоръки](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Изглаждане на данните](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Настройки на xDrip](../CompatibleCgms/xDrip.md)
* [Nightscout като източник на КЗ](../CompatibleCgms/CgmNightscoutUpload.md): възможно е да използвате Nightscout като източник на КЗ при подаване на инсулин в затворен кръг, но **този метод не се препоръчва**, защото зависи от стабилна мобилна връзка за данни или Wi-Fi връзка. Това означава, че **AAPS** ще получава данните от **CGM** само когато имате връзка с интернет към вашия сайт на Nightscout. За по-надеждна система много по-добре е да използвате CGM, при който приемникът изпраща данните локално към **AAPS** (както е посочено по-долу).

| CGM                                                                                                                | Налични [източници на КЗ](#Config-Builder-bg-source)                                                                                          |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                         | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                       | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                         | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                        | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                          | [Juggluco](../CompatibleCgms/Juggluco.md) (с или без xDrip)                                                                                   |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                          | [xDrip](../CompatibleCgms/xDrip.md) (само в ЕС) или [Juggluco](../CompatibleCgms/Juggluco.md) (с или без xDrip)                               |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                             | [xDrip](../CompatibleCgms/xDrip.md) (Diabox изпраща стойностите си чрез източника xDrip), Glimp или Tomato (MiaoMiao). Нужен е трансмитер     |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                        | [xDrip](../CompatibleCgms/xDrip.md), модифицираното приложение ESEL/Eversense или Четец на Нотификации                                        |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                              | [xDrip](../CompatibleCgms/xDrip.md) или MM640g + приложението 600SeriesAndroidUploader                                                        |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                            | Приложение PocTech                                                                                                                            |
| Glunovo                                                                                                            | Приложение Glunovo                                                                                                                            |
| Intelligo                                                                                                          | Приложение Intelligo                                                                                                                          |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                      | Syai/Ottai (с приложението Ottai или Syai Tag)                                                                                                |
| Sibionics CGM                                                                                                      | [Juggluco](../CompatibleCgms/Juggluco.md) или SI App (с модифицираното SI App или с приложението Sibionics)                                   |
| Sinocare                                                                                                           | Sino App (с модифицираното Sino App)                                                                                                          |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                                 | MicroTech CGM App                                                                                                                             |
| Instara                                                                                                            | Instara (с приложението Instara)                                                                                                              |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                        | xDrip Companion App или [Juggluco](../CompatibleCgms/Juggluco.md)                                                                             |
| Всеки CGM, чието официално приложение показва стойността на глюкозата в известие (Dexcom, Medtronic, Eversense, …) | Четец на Нотификации                                                                                                                          |

(GettingStarted-TrustedBGSource)=

## Надеждни източници на данни за КЗ

**CGM**, които са одобрени от регулаторните органи за търговски хибридни системи със затворен кръг, се смятат за надеждни източници на данни за **КЗ**.

За да може **AAPS** да ги разпознае правилно, приложението, което изпраща стойностите на **КЗ**, трябва да може да предоставя информация за сензора.

Надеждните източници на данни позволяват подаване на **SMB** по всяко време.

**AAPS** checks the sensor named in the latest **BG** reading it received, whichever **BG** source delivered it. After you change your **BG** source, the **SMB** "always" settings appear only once the first reading from the new source has arrived.

| Сензор          |                                                                            Приложение за CGM                                                                             |
| --------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                             BYODA, xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                              |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                                 |
| Dexcom Stelo    |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))                                 |
| Libre 2/2+ (EU) |                                  xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                                  |
| Libre 2/2+/3/3+ |                                                  Juggluco (**xDrip broadcast** без xDrip или **Patched Libre** с xDrip)                                                  |
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
