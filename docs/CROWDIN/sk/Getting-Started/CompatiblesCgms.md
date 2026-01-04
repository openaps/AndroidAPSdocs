# Kompatibilné CGM

Táto časť poskytuje stručný prehľad všetkých kompatibilných **CGM/FGM** s **AAPS**.

*Tip*: Ak vám aplikácia xDrip+ zobrazuje údaje o glukóze, môžete si v aplikácii **AAPS** vybrať xDrip+ ako zdroj **glukózy**.

* [Všeobecné odporúčania](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Vyhladzovanie údajov](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Nastavenia xDrip+](../CompatibleCgms/xDrip.md)
* [Nightscout ako zdroj glykémie](../CompatibleCgms/CgmNightscoutUpload.md): Hoci je možné použiť Nightscout ako zdroj glykémie na podávanie inzulínu v uzavretej slučke, **táto metóda sa neodporúča** kvôli jej závislosti od stabilných mobilných dát alebo pripojenia Wi-Fi. To znamená, že vaše údaje **CGM** bude prijímať **AAPS** iba vtedy, keď budete mať online pripojenie k vášmu nightscoutu. Pre spoľahlivejšie nastavenie je oveľa lepšou možnosťou použitie CGM s lokálnym vysielaním z prijímača (ako je uvedené nižšie)priamo do **AAPS**.

| CGM                                                   | Dostupné [zdroje glykémie](#Config-Builder-bg-source)                                                                       |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)            | [xDrip+](../CompatibleCgms/xDrip.md) or [Juggluco](../CompatibleCgms/Juggluco.md)                                           |
| [Dexcom ONE+ a Stelo](../CompatibleCgms/DexcomG7.md)  | [xDrip+](../CompatibleCgms/xDrip.md)                                                                                        |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)            | BYODA or [xDrip+](../CompatibleCgms/xDrip.md)                                                                               |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)           | [xDrip+](../CompatibleCgms/xDrip.md)                                                                                        |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)             | [Juggluco](../CompatibleCgms/Juggluco.md) (s alebo bez xDrip+)                                                              |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)             | [xDrip+](../CompatibleCgms/xDrip.md) (iba pre EÚ) alebo [Juggluco](../CompatibleCgms/Juggluco.md) (s xDrip+ alebo bez neho) |
| [LIbre 1](../CompatibleCgms/Libre1.md)                | [xDrip+](../CompatibleCgms/xDrip.md) or Diabox. Potrebujete vysielač                                                        |
| [Eversense](../CompatibleCgms/Eversense.md)           | [xDrip+](../CompatibleCgms/xDrip.md) alebo opravená aplikácia ESEL/Eversense                                                |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md) | [xDrip+](../CompatibleCgms/xDrip.md) or MM640g + 600SeriesAndroidUploader App                                               |
| [PocTech](../CompatibleCgms/PocTech.md)               | PocTech app                                                                                                                 |
| Glunovo                                               | Glunovo App                                                                                                                 |
| Intelligo                                             | Intelligo App                                                                                                               |
| [Ottai](../CompatibleCgms/OttaiM8.md)                 | Ottai App                                                                                                                   |
| [Syai](../CompatibleCgms/SyaiTagX1.md)                | Syai Tag App                                                                                                                |
| Sibionics CGM                                         | [Juggluco](../CompatibleCgms/Juggluco.md) or Patched SI App                                                                 |
| Sinocare                                              | Patched Sino App                                                                                                            |
| Caresens, Simplera, iCan, LinX, SmartGuide            | xDrip+ Companion App                                                                                                        |

(GettingStarted-TrustedBGSource)=

## Dôveryhodné zdroje údajov o glykémii

Regulačné schválené **CGM** pre komerčné hybridné systémy s uzavretou slučkou sa považujú za dôveryhodné zdroje údajov o **BG**.

Aby ich **AAPS** mohol správne identifikovať, aplikácia odosielajúca hodnoty **glukózy** musí byť schopná poskytnúť informácie zo senzora.

Dôveryhodné zdroje údajov umožňujú nepretržité podávanie **SMB**.

| Senzor                |                                                      CGM app                                                       |
| --------------------- |:------------------------------------------------------------------------------------------------------------------:|
| Dexcom G5/G6          |                                            xDrip+ (**Priamy, Natívny**)                                            |
| Dexcom G7             |                  xDrip+ (**Direct, Native**), </br>Juggluco (**xDrip broadcast** without xDrip+)                   |
| Dexcom ONE/ONE+/Stelo |                                            xDrip+ (**Priamy, Natívny**)                                            |
| Libre 2/2+ (EU)       | xDrip+ (OOP2 **bez kalibrácie**), </br>Juggluco (**xDrip vysielanie** bez xDrip+ alebo **Patched Libre** s xDrip+) |
| Libre 2/2+/3/3+       |                    Juggluco (**xDrip vysielanie** bez xDrip+ alebo **Patched Libre** s xDrip+)                     |
| Syai                  |                                                      Syai App                                                      |

**Poznámka: Aplikácie xDrip+ Companion a režimy Follower (vrátane 640G/Eversense) nie sú dôveryhodnými zdrojmi údajov.**
