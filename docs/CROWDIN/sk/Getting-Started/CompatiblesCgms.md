# Kompatibilné CGM

Táto časť poskytuje stručný prehľad všetkých kompatibilných **CGM/FGM** s **AAPS**.

*Tip*: Ak dokážete zobraziť údaje o glykémii v aplikácii xDrip, môžete si v **AAPS** vybrať xDrip ako zdroj **glykémie**.

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

* [Všeobecné odporúčania](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Vyhladzovanie údajov](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Nastavenia xDrip](../CompatibleCgms/xDrip.md)
* [Nightscout ako zdroj glykémie](../CompatibleCgms/CgmNightscoutUpload.md): Hoci je možné použiť Nightscout ako zdroj glykémie na podávanie inzulínu v uzavretom okruhu, **táto metóda sa neodporúča**, pretože závisí od stabilných mobilných dát alebo pripojenia Wi-Fi. To znamená, že **AAPS** dostane vaše údaje z **CGM** iba vtedy, keď budete mať online pripojenie k vašej stránke Nightscout. Spoľahlivejšie nastavenie dosiahnete s CGM, ktorý posiela údaje z prijímača lokálne do **AAPS** (ako je uvedené nižšie). To je oveľa lepšia možnosť.

| CGM                                                                                                                   | Dostupné [zdroje glykémie](#Config-Builder-bg-source)                                                                                   |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                            | BYODA, [xDrip](../CompatibleCgms/xDrip.md) alebo [Juggluco](../CompatibleCgms/Juggluco.md)                                              |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                          | [xDrip](../CompatibleCgms/xDrip.md) alebo [Juggluco](../CompatibleCgms/Juggluco.md)                                                     |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                         | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                     |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                            | BYODA alebo [xDrip](../CompatibleCgms/xDrip.md)                                                                                         |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                           | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                     |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                             | [Juggluco](../CompatibleCgms/Juggluco.md) (s xDrip alebo bez neho)                                                                      |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                             | [xDrip](../CompatibleCgms/xDrip.md) (iba EÚ) alebo [Juggluco](../CompatibleCgms/Juggluco.md) (s xDrip alebo bez neho)                   |
| [LIbre 1](../CompatibleCgms/Libre1.md)                                                                                | [xDrip](../CompatibleCgms/xDrip.md) (Diabox posiela svoje hodnoty cez zdroj xDrip), Glimp alebo Tomato (MiaoMiao). Potrebujete vysielač |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                           | [xDrip](../CompatibleCgms/xDrip.md), upravená aplikácia ESEL/Eversense alebo Čítačka notifikácií                                        |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                                 | [xDrip](../CompatibleCgms/xDrip.md) alebo MM640g + aplikácia 600SeriesAndroidUploader                                                   |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                               | Aplikácia PocTech                                                                                                                       |
| Glunovo                                                                                                               | Aplikácia Glunovo                                                                                                                       |
| Intelligo                                                                                                             | Aplikácia Intelligo                                                                                                                     |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                         | Syai/Ottai (s aplikáciou Ottai alebo Syai Tag)                                                                                          |
| Sibionics CGM                                                                                                         | [Juggluco](../CompatibleCgms/Juggluco.md) alebo Aplikácia SI (s upravenou aplikáciou SI alebo s aplikáciou Sibionics)                   |
| Sinocare                                                                                                              | Aplikácia Sino (s upravenou aplikáciou Sino)                                                                                            |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                                    | MicroTech CGM aplikácia                                                                                                                 |
| Instara                                                                                                               | Instara (s aplikáciou Instara)                                                                                                          |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                           | xDrip Companion App alebo [Juggluco](../CompatibleCgms/Juggluco.md)                                                                     |
| Akýkoľvek CGM, ktorého oficiálna aplikácia zobrazuje hodnotu glykémie v notifikácii (Dexcom, Medtronic, Eversense, …) | Čítačka notifikácií                                                                                                                     |

(GettingStarted-TrustedBGSource)=

## Dôveryhodné zdroje údajov o glykémii

Regulačne schválené **CGM** pre komerčné hybridné systémy s uzavretým okruhom sa považujú za dôveryhodné zdroje údajov o **glykémii**.

Aby ich **AAPS** mohol správne rozpoznať, aplikácia, ktorá odosiela hodnoty **glykémie**, musí vedieť poskytnúť informácie o senzore.

Dôveryhodné zdroje údajov umožňujú nepretržité podávanie **SMB**.

| Senzor           |                                                 Aplikácia CGM                                                  |
| ---------------- |:--------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                       BYODA, xDrip (**Direct, Native**)                                        |
| Dexcom G7        |                BYODA, xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** bez xDrip)                |
| Dexcom ONE+      |                   xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** bez xDrip)                    |
| Dexcom ONE/Stelo |                                           xDrip (**Direct, Native**)                                           |
| Libre 2/2+ (EÚ)  | xDrip (OOP2 **no calibration**), </br>Juggluco (**xDrip broadcast** bez xDrip alebo **Patched Libre** s xDrip) |
| Libre 2/2+/3/3+  |                    Juggluco (**xDrip broadcast** bez xDrip alebo **Patched Libre** s xDrip)                    |
| Syai             |                                                 Aplikácia Syai                                                 |

**Poznámka: Sprievodné aplikácie xDrip (xDrip Companion) a režimy sledovania (vrátane 640G/Eversense) nie sú dôveryhodné zdroje údajov.**
