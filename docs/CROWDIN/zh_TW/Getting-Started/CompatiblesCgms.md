# 相容的 CGM

本節提供所有與**AAPS**相容的**CGMs/FGMs**的簡要總覽。

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

* [一般建議](../CompatibleCgms/GeneralCGMRecommendation.md)
* [資料平滑](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip Settings](../CompatibleCgms/xDrip.md)
* [Nightscout 作為血糖資料來源](../CompatibleCgms/CgmNightscoutUpload.md): 儘管可以使用 Nightscout 作為閉環胰島素給藥的血糖資料來源，但**這種方法不推薦**，因為其依賴穩定的行動網路或 Wi-Fi 連接。這意味著你的**CGM**資料只有在與你的 Nightscout 網站保持在線連接時，才會被**AAPS**接收。 For a more reliable setup, using a CGM with local broadcast from the receiver (as listed below) to **AAPS** is a much better option.

| CGM                                                                                                    | 可用的[血糖資料來源](#Config-Builder-bg-source)                                                                                      |
| ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                             | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Juggluco](../CompatibleCgms/Juggluco.md)                                     |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                           | [xDrip](../CompatibleCgms/xDrip.md) or [Juggluco](../CompatibleCgms/Juggluco.md)                                            |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                          | [xDrip](../CompatibleCgms/xDrip.md)                                                                                         |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                             | BYODA or [xDrip](../CompatibleCgms/xDrip.md)                                                                                |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                            | [xDrip](../CompatibleCgms/xDrip.md)                                                                                         |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                              | [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip)                                                           |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                              | [xDrip](../CompatibleCgms/xDrip.md) (EU only) or [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip)          |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                 | [xDrip](../CompatibleCgms/xDrip.md) (Diabox sends its readings through the xDrip source), Glimp or Tomato (MiaoMiao). 需要發射器 |
| [Eversense](../CompatibleCgms/Eversense.md)                                                            | [xDrip](../CompatibleCgms/xDrip.md), ESEL/Eversense patched App or Notification Reader                                      |
| [Enlite（MM640G/MM630G）](../CompatibleCgms/MM640g.md)                                                   | [xDrip](../CompatibleCgms/xDrip.md) or MM640g + 600SeriesAndroidUploader App                                                |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                | PocTech App                                                                                                                 |
| Glunovo                                                                                                | Glunovo App                                                                                                                 |
| Intelligo                                                                                              | Intelligo App                                                                                                               |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                          | Syai/Ottai (with the Ottai or Syai Tag app)                                                                                 |
| Sibionics CGM                                                                                          | [Juggluco](../CompatibleCgms/Juggluco.md) or SI App (with the patched SI App or the Sibionics App)                          |
| Sinocare                                                                                               | Sino App (with the patched Sino App)                                                                                        |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                     | MicroTech CGM App                                                                                                           |
| Instara                                                                                                | Instara (with the Instara App)                                                                                              |
| [Caresens](../CompatibleCgms/Caresens.md)，Simplera，iCan，LinX，SmartGuide                                | xDrip Companion App or [Juggluco](../CompatibleCgms/Juggluco.md)                                                            |
| Any CGM whose official app shows the glucose value in a notification (Dexcom, Medtronic, Eversense, …) | Notification Reader                                                                                                         |

(GettingStarted-TrustedBGSource)=

## 可信任的血糖來源

獲得監管批准的**CGM**用於商業混合閉環系統，視為可信的**血糖**來源。

為了讓**AAPS**正確識別它們，發送**血糖**讀取的應用程式必須能提供傳感器資訊。

可信任的資料來源，允許**SMB**可以啟動。

| 傳感器              |                                                      CGM 應用程式                                                       |
| ---------------- |:-------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                          BYODA, xDrip (**Direct, Native**)                                          |
| Dexcom G7        |                BYODA, xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** without xDrip)                 |
| Dexcom ONE+      |                    xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** without xDrip)                    |
| Dexcom ONE/Stelo |                                             xDrip (**Direct, Native**)                                              |
| Libre 2/2+ (歐盟)  | xDrip (OOP2 **no calibration**), </br>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip) |
| Libre 2/2+/3/3+  |                    Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                    |
| Syai             |                                                      Syai App                                                       |

**Note: xDrip Companion apps and Follower modes (includes 640G/Eversense) are not trusted data sources.**
