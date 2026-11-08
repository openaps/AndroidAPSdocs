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

| CGM                                                                                              | Tillgängliga [BG-källor](#Config-Builder-bg-source)                                                                                           |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                       | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                     | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                    | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                       | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                      | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                        | [Juggluco](../CompatibleCgms/Juggluco.md) (med eller utan xDrip)                                                                              |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                        | [xDrip](../CompatibleCgms/xDrip.md) (endast EU) eller [Juggluco](../CompatibleCgms/Juggluco.md) (med eller utan xDrip)                        |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                           | [xDrip](../CompatibleCgms/xDrip.md) (Diabox skickar sina värden via källan xDrip), Glimp eller Tomato (MiaoMiao). Behöver en sändare          |
| [Eversense](../CompatibleCgms/Eversense.md)                                                      | [xDrip](../CompatibleCgms/xDrip.md), ESEL/patchad Eversense-app eller Läsare för aviseringar                                                  |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                            | [xDrip](../CompatibleCgms/xDrip.md) eller MM640g + appen 600SeriesAndroidUploader                                                             |
| [PocTech](../CompatibleCgms/PocTech.md)                                                          | PocTech-appen                                                                                                                                 |
| Glunovo                                                                                          | Glunovo-appen                                                                                                                                 |
| Intelligo                                                                                        | Intelligo-appen                                                                                                                               |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                    | Syai/Ottai (med appen Ottai eller Syai Tag)                                                                                                   |
| Sibionics CGM                                                                                    | [Juggluco](../CompatibleCgms/Juggluco.md) eller SI App (med den patchade SI App eller Sibionics-appen)                                        |
| Sinocare                                                                                         | Sino App (med den patchade Sino App)                                                                                                          |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                               | MicroTech CGM-appen                                                                                                                           |
| Instara                                                                                          | Instara (med Instara-appen)                                                                                                                   |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                      | xDrip som följeslagarapp (Companion App) eller [Juggluco](../CompatibleCgms/Juggluco.md)                                                      |
| Alla CGM vars officiella app visar glukosvärdet i en avisering (Dexcom, Medtronic, Eversense, …) | Läsare för aviseringar                                                                                                                        |

(GettingStarted-TrustedBGSource)=

## Pålitliga BG-källor

**CGM**-system som är godkända av myndigheter för kommersiella hybrida slutna loopsystem räknas som pålitliga **BG**-källor.

För att **AAPS** ska kunna känna igen dem rätt måste appen som skickar **BG**-värdena kunna skicka information om sensorn.

Pålitliga BG-källor tillåter alltid **SMB**.

**AAPS** checks the sensor named in the latest **BG** reading it received, whichever **BG** source delivered it. After you change your **BG** source, the **SMB** "always" settings appear only once the first reading from the new source has arrived.

| Sensor          |                                                                                 CGM-app                                                                                  |
| --------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                             BYODA, xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                              |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                                 |
| Dexcom Stelo    |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))                                 |
| Libre 2/2+ (EU) |                                  xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                                  |
| Libre 2/2+/3/3+ |                                               Juggluco (**xDrip broadcast** utan xDrip, eller **Patched Libre** med xDrip)                                               |
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
