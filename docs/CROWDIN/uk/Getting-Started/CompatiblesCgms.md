# Сумісні CGM

У цьому розділі коротко описано всі **CGM/FGM**, сумісні з **AAPS**.

*Порада*: якщо ви можете бачити свої дані глюкози в застосунку xDrip, ви можете вибрати xDrip як джерело **ГК** в **AAPS**.

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

* [Загальні рекомендації](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Згладжування даних](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Налаштування xDrip](../CompatibleCgms/xDrip.md)
* [Nightscout як джерело ГК](../CompatibleCgms/CgmNightscoutUpload.md): Nightscout можна використовувати як джерело ГК для подачі інсуліну в закритій петлі, але **цей спосіб не рекомендовано**, бо він залежить від стабільного мобільного інтернету або Wi-Fi. Це означає, що **AAPS** отримує дані **CGM** лише тоді, коли є з'єднання з вашим сайтом Nightscout. Набагато надійніше використовувати CGM, приймач якого локально транслює дані в **AAPS** (див. список нижче).

| CGM                                                                                                               | Доступні [джерела ГК](#Config-Builder-bg-source)                                                                                              |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                        | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                     | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                        | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                       | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                         | [Juggluco](../CompatibleCgms/Juggluco.md) (з xDrip або без нього)                                                                             |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                         | [xDrip](../CompatibleCgms/xDrip.md) (лише ЄС) або [Juggluco](../CompatibleCgms/Juggluco.md) (з xDrip або без нього)                           |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                            | [xDrip](../CompatibleCgms/xDrip.md) (Diabox надсилає свої значення через джерело xDrip), Glimp або Tomato (MiaoMiao). Потрібен трансмітер     |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                       | [xDrip](../CompatibleCgms/xDrip.md), модифікований застосунок ESEL/Eversense або Читач сповіщень                                              |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                             | [xDrip](../CompatibleCgms/xDrip.md) або MM640g + застосунок 600SeriesAndroidUploader                                                          |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                           | Застосунок PocTech                                                                                                                            |
| Glunovo                                                                                                           | Застосунок Glunovo                                                                                                                            |
| Intelligo                                                                                                         | Застосунок Intelligo                                                                                                                          |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                     | Syai/Ottai (із застосунком Ottai або Syai Tag)                                                                                                |
| Sibionics CGM                                                                                                     | [Juggluco](../CompatibleCgms/Juggluco.md) або SI App (з модифікованим SI App або застосунком Sibionics)                                       |
| Sinocare                                                                                                          | Sino App (з модифікованим Sino App)                                                                                                           |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                                | Застосунок MicroTech CGM                                                                                                                      |
| Instara                                                                                                           | Instara (із застосунком Instara)                                                                                                              |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                       | xDrip Companion App або [Juggluco](../CompatibleCgms/Juggluco.md)                                                                             |
| Будь-який CGM, офіційний застосунок якого показує значення глюкози в сповіщенні (Dexcom, Medtronic, Eversense, …) | Читач сповіщень                                                                                                                               |

(GettingStarted-TrustedBGSource)=

## Довірені джерела даних ГК

**CGM**, офіційно схвалені для комерційних гібридних систем закритої петлі, вважаються довіреними джерелами даних **ГК**.

Щоб **AAPS** правильно їх розпізнав, застосунок, який надсилає значення **ГК**, повинен передавати інформацію про сенсор.

Довірені джерела даних завжди дозволяють подачу **SMB**.

**AAPS** checks the sensor named in the latest **BG** reading it received, whichever **BG** source delivered it. After you change your **BG** source, the **SMB** "always" settings appear only once the first reading from the new source has arrived.

| Сенсор          |                                                                              Застосунок CGM                                                                              |
| --------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                             BYODA, xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                              |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                                 |
| Dexcom Stelo    |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))                                 |
| Libre 2/2+ (ЄС) |                                  xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                                  |
| Libre 2/2+/3/3+ |                                                  Juggluco (**xDrip broadcast** без xDrip або **Patched Libre** з xDrip)                                                  |
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
