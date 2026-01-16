# 兼容的CGM设备

本节简要概述了所有与**AAPS**兼容的**持续血糖监测系统（CGMs）/扫描式血糖监测系统（FGMs）**。

*提示*：如果您可以在xDrip+应用程序中显示您的血糖数据，则可以在**AAPS**中选择xDrip+作为**BG（血糖）**来源。

* [一般建议](../CompatibleCgms/GeneralCGMRecommendation.md)
* [数据平滑](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip+设置](../CompatibleCgms/xDrip.md)
* [将Nightscout作为血糖来源](../CompatibleCgms/CgmNightscoutUpload.md)：虽然可以将Nightscout用作闭环胰岛素输注的血糖来源，但**并不推荐这种方法**，因为它依赖于稳定的移动数据或Wi-Fi连接。 这意味着，只有当您与Nightscout站点在线连接时，您的**CGM（持续葡萄糖监测系统）**数据才会被**AAPS**接收。 为了获得更可靠的设置，使用能够从接收器本地广播到**AAPS**的CGM（如下所列）是一个更好的选择。

| CGM                                                    | 可用的[血糖数据源](#Config-Builder-bg-source)                                                                        |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| [德康 G7](../CompatibleCgms/DexcomG7.md)                 | [xDrip+](../CompatibleCgms/xDrip.md) or [Juggluco](../CompatibleCgms/Juggluco.md)                            |
| [Dexcom ONE+ and Stelo](../CompatibleCgms/DexcomG7.md) | [xDrip+](../CompatibleCgms/xDrip.md)                                                                         |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)             | BYODA or [xDrip+](../CompatibleCgms/xDrip.md)                                                                |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)            | [xDrip+](../CompatibleCgms/xDrip.md)                                                                         |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)              | [Juggluco](../CompatibleCgms/Juggluco.md) (搭配/不搭配xDrip+)                                                     |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)              | [xDrip+](../CompatibleCgms/xDrip.md) (仅限欧盟地区) 或 [Juggluco](../CompatibleCgms/Juggluco.md) (配合或不配合 xDrip+ 均可) |
| [Libre 1](../CompatibleCgms/Libre1.md)                 | [xDrip+](../CompatibleCgms/xDrip.md) 或 Diabox。 需要发射器                                                         |
| [Eversense](../CompatibleCgms/Eversense.md)            | [xDrip+](../CompatibleCgms/xDrip.md) 或 ESEL/Eversense 修补版 App                                                |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)  | [xDrip+](../CompatibleCgms/xDrip.md) 或 MM640g + 600SeriesAndroidUploader 应用                                  |
| [PocTech](../CompatibleCgms/PocTech.md)                | PocTech app                                                                                                  |
| Glunovo                                                | Glunovo App                                                                                                  |
| Intelligo                                              | Intelligo App                                                                                                |
| [欧泰 (Ottai)](../CompatibleCgms/OttaiM8.md)             | 欧泰 App                                                                                                       |
| [Syai](../CompatibleCgms/SyaiTagX1.md)                 | Syai Tag App                                                                                                 |
| 硅基 CGM                                                 | [Juggluco](../CompatibleCgms/Juggluco.md) 或 修补版 硅基应用 (Patched SI App)                                        |
| 三诺 (Sinocare)                                          | 修补版三诺应用 (Patched Sino App)                                                                                   |
| Caresens, Simplera, iCan (三诺爱看), LinX, SmartGuide      | xDrip+ 伴侣应用模式 (xDrip+ Companion App)                                                                         |

(GettingStarted-TrustedBGSource)=

## 可信血糖数据源

经监管部门批准的**持续葡萄糖监测系统（CGM）**，在商用混合闭环系统中被视为可信**血糖**数据源。

为了使**AAPS**正确识别它们，发送**血糖**读数的应用必须能够提供传感器信息。

可信数据源支持**SMB**全天候输注。

| 传感器                   |                                            CGM 应用                                             |
| --------------------- |:---------------------------------------------------------------------------------------------:|
| Dexcom G5/G6          |                                    xDrip+ (**直接连接, 原生驱动**)                                    |
| 德康 G7                 |              xDrip+ (**直接连接，原生驱动**), </br>Juggluco (**xDrip 广播模式**，无需安装 xDrip+)               |
| Dexcom ONE/ONE+/Stelo |                                    xDrip+ (**直接连接, 原生驱动**)                                    |
| Libre 2/2+ (EU)       | xDrip+ (OOP2 **免校准**), </br>Juggluco (**xDrip 广播模式**，无需安装 xDrip+；或使用 **修补版 Libre** 配合 xDrip+) |
| Libre 2/2+/3/3+       |               Juggluco (**xDrip 广播模式**，无需安装 xDrip+；或使用 **修补版 Libre** 配合 xDrip+)               |
| Syai                  |                                           Syai App                                            |

**注意：xDrip+ 伴侣应用（Companion apps）和跟随者模式（Follower modes，包括 640G/Eversense）不被视为受信任的数据源。**
