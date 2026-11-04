# Kompatibla CGM-system

Det här avsnittet ger en kort översikt över alla **CGM/FGM** som fungerar med **AAPS**.

*Tips*: Om du kan visa dina glukosvärden i appen xDrip kan du välja xDrip som **BG**-källa i **AAPS**.

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

* [Allmänna rekommendationer för CGM](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Utjämning av blodsockerdata](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip-inställningar](../CompatibleCgms/xDrip.md)
* [Nightscout som BG-källa](../CompatibleCgms/CgmNightscoutUpload.md): Det går att använda Nightscout som BG-källa för insulindosering i sluten loop, men **den här metoden rekommenderas inte**, eftersom den kräver stabil mobildata eller Wi-Fi. Det betyder att **AAPS** bara får dina **CGM**-data när du har en internetanslutning till din Nightscout-sida. En mer pålitlig lösning är att använda en CGM som skickar värdena från mottagaren till **AAPS** med lokal sändning (se listan nedan). Det är ett mycket bättre alternativ.

| CGM                                                                                              | Tillgängliga [BG-källor](#Config-Builder-bg-source)                                                                                  |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                       | BYODA, [xDrip](../CompatibleCgms/xDrip.md) eller [Juggluco](../CompatibleCgms/Juggluco.md)                                           |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                     | [xDrip](../CompatibleCgms/xDrip.md) eller [Juggluco](../CompatibleCgms/Juggluco.md)                                                  |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                    | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                  |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                       | BYODA eller [xDrip](../CompatibleCgms/xDrip.md)                                                                                      |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                      | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                  |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                        | [Juggluco](../CompatibleCgms/Juggluco.md) (med eller utan xDrip)                                                                     |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                        | [xDrip](../CompatibleCgms/xDrip.md) (endast EU) eller [Juggluco](../CompatibleCgms/Juggluco.md) (med eller utan xDrip)               |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                           | [xDrip](../CompatibleCgms/xDrip.md) (Diabox skickar sina värden via källan xDrip), Glimp eller Tomato (MiaoMiao). Behöver en sändare |
| [Eversense](../CompatibleCgms/Eversense.md)                                                      | [xDrip](../CompatibleCgms/xDrip.md), ESEL/patchad Eversense-app eller Läsare för aviseringar                                         |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                            | [xDrip](../CompatibleCgms/xDrip.md) eller MM640g + appen 600SeriesAndroidUploader                                                    |
| [PocTech](../CompatibleCgms/PocTech.md)                                                          | PocTech-appen                                                                                                                        |
| Glunovo                                                                                          | Glunovo-appen                                                                                                                        |
| Intelligo                                                                                        | Intelligo-appen                                                                                                                      |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                    | Syai/Ottai (med appen Ottai eller Syai Tag)                                                                                          |
| Sibionics CGM                                                                                    | [Juggluco](../CompatibleCgms/Juggluco.md) eller SI App (med den patchade SI App eller Sibionics-appen)                               |
| Sinocare                                                                                         | Sino App (med den patchade Sino App)                                                                                                 |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                               | MicroTech CGM-appen                                                                                                                  |
| Instara                                                                                          | Instara (med Instara-appen)                                                                                                          |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                      | xDrip som följeslagarapp (Companion App) eller [Juggluco](../CompatibleCgms/Juggluco.md)                                             |
| Alla CGM vars officiella app visar glukosvärdet i en avisering (Dexcom, Medtronic, Eversense, …) | Läsare för aviseringar                                                                                                               |

(GettingStarted-TrustedBGSource)=

## Pålitliga BG-källor

**CGM**-system som är godkända av myndigheter för kommersiella hybrida slutna loopsystem räknas som pålitliga **BG**-källor.

För att **AAPS** ska kunna känna igen dem rätt måste appen som skickar **BG**-värdena kunna skicka information om sensorn.

Pålitliga BG-källor tillåter alltid **SMB**.

| Sensor           |                                                         CGM-app                                                          |
| ---------------- |:------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                            BYODA, xDrip (**Direct, Native**)                                             |
| Dexcom G7        |                 BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** utan xDrip)                  |
| Dexcom ONE+      |                     xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** utan xDrip)                     |
| Dexcom ONE/Stelo |                                                xDrip (**Direct, Native**)                                                |
| Libre 2/2+ (EU)  | xDrip (OOP2 **no calibration**), <br/>Juggluco (**xDrip broadcast** utan xDrip, eller **Patched Libre** med xDrip) |
| Libre 2/2+/3/3+  |                       Juggluco (**xDrip broadcast** utan xDrip, eller **Patched Libre** med xDrip)                       |
| Syai             |                                                        Syai-appen                                                        |

**Obs! Följeslagarappar (Companion) och följarlägen i xDrip (även 640G/Eversense) är inte pålitliga BG-källor.**
