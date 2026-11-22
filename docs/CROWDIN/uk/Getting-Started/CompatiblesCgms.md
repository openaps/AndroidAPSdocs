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

| CGM                                                                                                               | Доступні [джерела ГК](#Config-Builder-bg-source)                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                        | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) або [Читач сповіщень](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) або [Читач сповіщень](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                     | [xDrip](../CompatibleCgms/xDrip.md) або [Читач сповіщень](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                        | BYODA, [xDrip](../CompatibleCgms/xDrip.md) або [Читач сповіщень](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                       | [xDrip](../CompatibleCgms/xDrip.md) або [Читач сповіщень](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                         | [Juggluco](../CompatibleCgms/Juggluco.md) (з xDrip або без нього)                                                                          |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                         | [xDrip](../CompatibleCgms/xDrip.md) (лише ЄС) або [Juggluco](../CompatibleCgms/Juggluco.md) (з xDrip або без нього)                        |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                            | [xDrip](../CompatibleCgms/xDrip.md) (Diabox надсилає свої значення через джерело xDrip), Glimp або Tomato (MiaoMiao). Потрібен трансмітер  |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                       | [xDrip](../CompatibleCgms/xDrip.md), модифікований застосунок ESEL/Eversense або Читач сповіщень                                           |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                             | [xDrip](../CompatibleCgms/xDrip.md) або MM640g + застосунок 600SeriesAndroidUploader                                                       |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                           | Застосунок PocTech                                                                                                                         |
| Glunovo                                                                                                           | Застосунок Glunovo                                                                                                                         |
| Intelligo                                                                                                         | Застосунок Intelligo                                                                                                                       |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                     | Syai/Ottai (із застосунком Ottai або Syai Tag)                                                                                             |
| Sibionics CGM                                                                                                     | [Juggluco](../CompatibleCgms/Juggluco.md) або SI App (з модифікованим SI App або застосунком Sibionics)                                    |
| Sinocare                                                                                                          | Sino App (з модифікованим Sino App)                                                                                                        |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                                | Застосунок MicroTech CGM                                                                                                                   |
| Instara                                                                                                           | Instara (із застосунком Instara)                                                                                                           |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                       | xDrip Companion App або [Juggluco](../CompatibleCgms/Juggluco.md)                                                                          |
| Будь-який CGM, офіційний застосунок якого показує значення глюкози в сповіщенні (Dexcom, Medtronic, Eversense, …) | Читач сповіщень                                                                                                                            |

(GettingStarted-TrustedBGSource)=

## Довірені джерела даних ГК

**CGM**, офіційно схвалені для комерційних гібридних систем закритої петлі, вважаються довіреними джерелами даних **ГК**.

Щоб **AAPS** правильно їх розпізнав, застосунок, який надсилає значення **ГК**, повинен передавати інформацію про сенсор.

Довірені джерела даних завжди дозволяють подачу **SMB**.

**AAPS** перевіряє сенсор, указаний в останньому отриманому значенні **ГК**, незалежно від того, яке джерело **ГК** його надіслало. Після зміни джерела **ГК** налаштування **SMB** «завжди» з'являються лише тоді, коли надійде перше значення з нового джерела.

| Сенсор          |                                                                             Застосунок CGM                                                                              |
| --------------- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                           BYODA, xDrip (**Direct, Native**), <br/>застосунок Dexcom ([Читач сповіщень](#DexcomG6-notification-reader))                            |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** без xDrip), <br/>застосунок Dexcom ([Читач сповіщень](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** без xDrip), <br/>застосунок Dexcom ([Читач сповіщень](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                               xDrip (**Direct, Native**), <br/>застосунок Dexcom ([Читач сповіщень](#DexcomG6-notification-reader))                               |
| Dexcom Stelo    |                               xDrip (**Direct, Native**), <br/>застосунок Dexcom ([Читач сповіщень](#DexcomG7-notification-reader))                               |
| Libre 2/2+ (ЄС) |                                     xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** без xDrip або **Patched Libre** з xDrip)                                     |
| Libre 2/2+/3/3+ |                                                 Juggluco (**xDrip broadcast** без xDrip або **Patched Libre** з xDrip)                                                  |
| Syai, Ottai     |                     Застосунок Syai або Ottai (джерело **Syai/Ottai** або **Читач сповіщень**), <br/>Juggluco (**xDrip broadcast** без xDrip)                     |

**Примітка: застосунки xDrip Companion, Medtronic, Eversense і всі інші сенсори не є довіреними джерелами даних.**

```{admonition} Online BG sources are not recommended for closed looping
:class: warning
Деякі джерела, яким потрібне інтернет-з'єднання, теж можуть бути довіреними:
- xDrip **Dexcom Share follower** (будь-який сенсор Dexcom)
- джерело ГК **Nightscout** (**AAPSClient** або **AAPS**, що стежить за вашим сайтом Nightscout), коли вивантажувач указує один із сенсорів вище

Ці джерела **не рекомендовані** для закритої петлі. Коли ваш телефон або вивантажувач CGM втрачає з'єднання, **AAPS** не отримує значень **ГК** і не може працювати в петлі. Значення також надходять із запізненням, після затримки хмарного сервісу. За можливості використовуйте застосунок CGM, який надсилає значення в **AAPS** безпосередньо на телефоні (як указано в таблиці вище).

Інші режими послідовника (xDrip Nightscout або Web follower, CareLink follower, Juggluco Nightscout) ніколи не є довіреними.
```
