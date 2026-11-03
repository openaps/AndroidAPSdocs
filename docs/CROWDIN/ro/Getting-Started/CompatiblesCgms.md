# CGM-uri compatibile

This section provides a brief overview of all compatible **CGMs/FGMs** with **AAPS**.

*Tip*: If you can display your glucose data in xDrip app, you can choose xDrip as **BG** source in **AAPS**.

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

* [Recomandări generale](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Netezirea datelor](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Setări xDrip](../CompatibleCgms/xDrip.md)
* [Nightscout as BG Source](../CompatibleCgms/CgmNightscoutUpload.md): While it's possible to use Nightscout as a BG source for closed-loop insulin delivery, **this method is not recommended** due to its reliance on stable mobile data or Wi-Fi connectivity. This means your **CGM** data would only be received by **AAPS** when you have an online connection to your Nightscout site. For a more reliable setup, using a CGM with local broadcast from the receiver (as listed below) to **AAPS** is a much better option.

| CGM                                                                                                    | Available [BG Sources](#Config-Builder-bg-source)                                                                                           |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                             | BYODA, [xDrip](../CompatibleCgms/xDrip.md) sau [Juggluco](../CompatibleCgms/Juggluco.md)                                                    |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                           | [xDrip](../CompatibleCgms/xDrip.md) sau [Juggluco](../CompatibleCgms/Juggluco.md)                                                           |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                          | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                         |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                             | BYODA sau [xDrip](../CompatibleCgms/xDrip.md)                                                                                               |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                            | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                         |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                              | [Juggluco](../CompatibleCgms/Juggluco.md) (cu sau fără xDrip)                                                                               |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                              | [xDrip](../CompatibleCgms/xDrip.md) (EU only) or [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip)                          |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                 | [xDrip](../CompatibleCgms/xDrip.md) (Diabox sends its readings through the xDrip source), Glimp or Tomato (MiaoMiao). Necesită transmițător |
| [Eversense](../CompatibleCgms/Eversense.md)                                                            | [xDrip](../CompatibleCgms/xDrip.md), aplicația ESEL/Eversense modificată sau Cititor notificări                                             |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                  | [xDrip](../CompatibleCgms/xDrip.md) sau MM640g + aplicația 600SeriesAndroidUploader                                                         |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                | Aplicația PocTech                                                                                                                           |
| Glunovo                                                                                                | Aplicația Glunovo                                                                                                                           |
| Intelligo                                                                                              | Aplicația Intelligo                                                                                                                         |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                          | Syai/Ottai (cu aplicația Ottai sau Syai Tag)                                                                                                |
| Sibionics CGM                                                                                          | [Juggluco](../CompatibleCgms/Juggluco.md) or SI App (with the patched SI App or the Sibionics App)                                          |
| Sinocare                                                                                               | Sino App (with the patched Sino App)                                                                                                        |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                     | Aplicația MicroTech CGM                                                                                                                     |
| Instara                                                                                                | Instara (cu aplicația Instara)                                                                                                              |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                            | xDrip Companion App or [Juggluco](../CompatibleCgms/Juggluco.md)                                                                            |
| Any CGM whose official app shows the glucose value in a notification (Dexcom, Medtronic, Eversense, …) | Cititor notificări                                                                                                                          |

(GettingStarted-TrustedBGSource)=

## Surse de date de glicemie de încredere

Regulatory approved **CGM**s for commercial hybrid closed loop systems are considered trusted **BG** data sources.

In order for **AAPS** to correctly identify them, the app sending **BG** readings must be able to provide sensor information.

Trusted data sources allow **SMB** delivery, all the time.

| Senzor           |                                                       CGM app                                                        |
| ---------------- |:--------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                          BYODA, xDrip (**Direct, Native**)                                           |
| Dexcom G7        |               BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** fără xDrip)                |
| Dexcom ONE+      |                   xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** fără xDrip)                   |
| Dexcom ONE/Stelo |                                              xDrip (**Direct, Native**)                                              |
| Libre 2/2+ (EU)  | xDrip (OOP2 **no calibration**), <br/>Juggluco (**xDrip broadcast** fără xDrip sau **Patched Libre** cu xDrip) |
| Libre 2/2+/3/3+  |                       Juggluco (**xDrip broadcast** fără xDrip sau **Patched Libre** cu xDrip)                       |
| Syai             |                                                    Aplicația Syai                                                    |

**Note: xDrip Companion apps and Follower modes (includes 640G/Eversense) are not trusted data sources.**
