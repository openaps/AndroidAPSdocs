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

| CGM                                                                                                            | Dostupné [zdroje glykémie](#Config-Builder-bg-source)                                                                             |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                     | BYODA, [xDrip](../CompatibleCgms/xDrip.md) nebo [Juggluco](../CompatibleCgms/Juggluco.md)                                         |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                   | [xDrip](../CompatibleCgms/xDrip.md) nebo [Juggluco](../CompatibleCgms/Juggluco.md)                                                |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                  | [xDrip](../CompatibleCgms/xDrip.md)                                                                                               |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                     | BYODA nebo [xDrip](../CompatibleCgms/xDrip.md)                                                                                    |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                    | [xDrip](../CompatibleCgms/xDrip.md)                                                                                               |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                      | [Juggluco](../CompatibleCgms/Juggluco.md) (s xDrip nebo bez něj)                                                                  |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md) (jen EU) nebo [Juggluco](../CompatibleCgms/Juggluco.md) (s xDrip nebo bez něj)                |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                         | [xDrip](../CompatibleCgms/xDrip.md) (Diabox posílá své hodnoty přes zdroj xDrip), Glimp nebo Tomato (MiaoMiao). Potřebuje vysílač |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                    | [xDrip](../CompatibleCgms/xDrip.md), upravená aplikace ESEL/Eversense nebo Čtečka oznámení                                        |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                          | [xDrip](../CompatibleCgms/xDrip.md) nebo MM640g + aplikace 600SeriesAndroidUploader                                               |
| [Poctech](../CompatibleCgms/PocTech.md)                                                                        | Aplikace PocTech                                                                                                                  |
| Glunovo                                                                                                        | Aplikace Glunovo                                                                                                                  |
| Intelligo                                                                                                      | Aplikace Intelligo                                                                                                                |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                  | Syai/Ottai (s aplikací Ottai nebo Syai Tag)                                                                                       |
| Sibionics CGM                                                                                                  | [Juggluco](../CompatibleCgms/Juggluco.md) nebo Aplikace SI (s upravenou aplikací SI nebo s aplikací Sibionics)                    |
| Sinocare                                                                                                       | Aplikace Sino (s upravenou aplikací Sino)                                                                                         |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                             | Aplikace pro CGM MicroTech                                                                                                        |
| Instara                                                                                                        | Instara (s aplikací Instara)                                                                                                      |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                    | Doprovodná aplikace xDrip nebo [Juggluco](../CompatibleCgms/Juggluco.md)                                                          |
| Jakýkoli CGM, jehož oficiální aplikace zobrazuje hodnotu glykémie v oznámení (Dexcom, Medtronic, Eversense, …) | Čtečka oznámení                                                                                                                   |

(GettingStarted-TrustedBGSource)=

## Důvěryhodné zdroje dat glykémie

**CGM** schválené regulačními úřady pro komerční hybridní systémy uzavřené smyčky se považují za důvěryhodné zdroje dat **glykémie**.

Aby je **AAPS** správně rozpoznal, musí aplikace, která posílá hodnoty **glykémie**, umět poskytnout informace o senzoru.

Důvěryhodné zdroje dat umožňují podávání **SMB** po celou dobu.

| Senzor           |                                                  Aplikace CGM                                                  |
| ---------------- |:--------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                       BYODA, xDrip (**Direct, Native**)                                        |
| Dexcom G7        |                BYODA, xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** bez xDrip)                |
| Dexcom ONE+      |                   xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** bez xDrip)                    |
| Dexcom ONE/Stelo |                                           xDrip (**Direct, Native**)                                           |
| Libre 2/2+ (EU)  | xDrip (OOP2 **no calibration**), </br>Juggluco (**xDrip broadcast** bez xDrip, nebo **Patched Libre** s xDrip) |
| Libre 2/2+/3/3+  |                    Juggluco (**xDrip broadcast** bez xDrip, nebo **Patched Libre** s xDrip)                    |
| Syai             |                                                 Aplikace Syai                                                  |

**Poznámka: Doprovodné aplikace xDrip a režimy sledujícího (včetně 640G/Eversense) nejsou důvěryhodné zdroje dat.**
