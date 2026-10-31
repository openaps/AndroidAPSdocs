# 兼容的CGM设备

本节简要概述了所有与**AAPS**兼容的**持续血糖监测系统（CGMs）/扫描式血糖监测系统（FGMs）**。

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

* [一般建议](../CompatibleCgms/GeneralCGMRecommendation.md)
* [数据平滑](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip Settings](../CompatibleCgms/xDrip.md)
* [将Nightscout作为血糖来源](../CompatibleCgms/CgmNightscoutUpload.md)：虽然可以将Nightscout用作闭环胰岛素输注的血糖来源，但**并不推荐这种方法**，因为它依赖于稳定的移动数据或Wi-Fi连接。这意味着，只有当您与Nightscout站点在线连接时，您的**CGM（持续葡萄糖监测系统）**数据才会被**AAPS**接收。 For a more reliable setup, using a CGM with local broadcast from the receiver (as listed below) to **AAPS** is a much better option.

| CGM                                                                                                    | 可用的[血糖数据源](#Config-Builder-bg-source)                                                                                       |
| ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| [德康 G7](../CompatibleCgms/DexcomG7.md)                                                                 | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Juggluco](../CompatibleCgms/Juggluco.md)                                     |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                           | [xDrip](../CompatibleCgms/xDrip.md) or [Juggluco](../CompatibleCgms/Juggluco.md)                                            |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                          | [xDrip](../CompatibleCgms/xDrip.md)                                                                                         |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                             | BYODA or [xDrip](../CompatibleCgms/xDrip.md)                                                                                |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                            | [xDrip](../CompatibleCgms/xDrip.md)                                                                                         |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                              | [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip)                                                           |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                              | [xDrip](../CompatibleCgms/xDrip.md) (EU only) or [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip)          |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                 | [xDrip](../CompatibleCgms/xDrip.md) (Diabox sends its readings through the xDrip source), Glimp or Tomato (MiaoMiao). 需要发射器 |
| [Eversense](../CompatibleCgms/Eversense.md)                                                            | [xDrip](../CompatibleCgms/xDrip.md), ESEL/Eversense patched App or Notification Reader                                      |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                  | [xDrip](../CompatibleCgms/xDrip.md) or MM640g + 600SeriesAndroidUploader App                                                |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                | PocTech app                                                                                                                 |
| Glunovo                                                                                                | Glunovo App                                                                                                                 |
| Intelligo                                                                                              | Intelligo App                                                                                                               |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                          | Syai/Ottai (with the Ottai or Syai Tag app)                                                                                 |
| 硅基 CGM                                                                                                 | [Juggluco](../CompatibleCgms/Juggluco.md) or SI App (with the patched SI App or the Sibionics App)                          |
| 三诺 (Sinocare)                                                                                          | Sino App (with the patched Sino App)                                                                                        |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                     | MicroTech CGM App                                                                                                           |
| Instara                                                                                                | Instara (with the Instara App)                                                                                              |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                            | xDrip Companion App or [Juggluco](../CompatibleCgms/Juggluco.md)                                                            |
| Any CGM whose official app shows the glucose value in a notification (Dexcom, Medtronic, Eversense, …) | Notification Reader                                                                                                         |

(GettingStarted-TrustedBGSource)=

## 可信血糖数据源

经监管部门批准的**持续葡萄糖监测系统（CGM）**，在商用混合闭环系统中被视为可信**血糖**数据源。

为了使**AAPS**正确识别它们，发送**血糖**读数的应用必须能够提供传感器信息。

可信数据源支持**SMB**全天候输注。

| 传感器              |                                                       CGM 应用                                                        |
| ---------------- |:-------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                          BYODA, xDrip (**Direct, Native**)                                          |
| 德康 G7            |                BYODA, xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** without xDrip)                 |
| Dexcom ONE+      |                    xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** without xDrip)                    |
| Dexcom ONE/Stelo |                                             xDrip (**Direct, Native**)                                              |
| Libre 2/2+ (EU)  | xDrip (OOP2 **no calibration**), </br>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip) |
| Libre 2/2+/3/3+  |                    Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                    |
| Syai             |                                                      Syai App                                                       |

**Note: xDrip Companion apps and Follower modes (includes 640G/Eversense) are not trusted data sources.**
