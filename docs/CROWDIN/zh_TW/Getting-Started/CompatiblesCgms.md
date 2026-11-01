# 相容的 CGM

本節提供所有與**AAPS**相容的**CGMs/FGMs**的簡要總覽。

*提示*：如果您能在 xDrip App 中查看血糖資料，就可以在 **AAPS** 中選擇 xDrip 作為**血糖**來源。

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
* [xDrip 設定](../CompatibleCgms/xDrip.md)
* [Nightscout 作為血糖資料來源](../CompatibleCgms/CgmNightscoutUpload.md): 儘管可以使用 Nightscout 作為閉環胰島素給藥的血糖資料來源，但**這種方法不推薦**，因為其依賴穩定的行動網路或 Wi-Fi 連接。這意味著你的**CGM**資料只有在與你的 Nightscout 網站保持在線連接時，才會被**AAPS**接收。若要讓設定更可靠，使用可從接收器本機廣播資料的 CGM（如下所列），再將資料傳送至 **AAPS**，會是更好的選擇。

| CGM                                                                          | 可用的[血糖資料來源](#Config-Builder-bg-source)                                                              |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                   | BYODA、[xDrip](../CompatibleCgms/xDrip.md) 或 [Juggluco](../CompatibleCgms/Juggluco.md)               |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                 | [xDrip](../CompatibleCgms/xDrip.md) 或 [Juggluco](../CompatibleCgms/Juggluco.md)                     |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                | [xDrip](../CompatibleCgms/xDrip.md)                                                                 |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                   | BYODA 或 [xDrip](../CompatibleCgms/xDrip.md)                                                         |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                  | [xDrip](../CompatibleCgms/xDrip.md)                                                                 |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                    | [Juggluco](../CompatibleCgms/Juggluco.md)（可搭配或不搭配 xDrip）                                            |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                    | [xDrip](../CompatibleCgms/xDrip.md)（僅限歐盟）或 [Juggluco](../CompatibleCgms/Juggluco.md)（可搭配或不搭配 xDrip） |
| [Libre 1](../CompatibleCgms/Libre1.md)                                       | [xDrip](../CompatibleCgms/xDrip.md)（Diabox 會透過 xDrip 來源傳送讀取值）、Glimp 或 Tomato（MiaoMiao）。需要發射器        |
| [Eversense](../CompatibleCgms/Eversense.md)                                  | [xDrip](../CompatibleCgms/xDrip.md)、ESEL/Eversense 修補版 App 或 Notification Reader                    |
| [Enlite（MM640G/MM630G）](../CompatibleCgms/MM640g.md)                         | [xDrip](../CompatibleCgms/xDrip.md) 或 MM640g + 600SeriesAndroidUploader App                         |
| [PocTech](../CompatibleCgms/PocTech.md)                                      | PocTech App                                                                                         |
| Glunovo                                                                      | Glunovo App                                                                                         |
| Intelligo                                                                    | Intelligo App                                                                                       |
| [Ottai](../CompatibleCgms/OttaiM8.md)、[Syai](../CompatibleCgms/SyaiTagX1.md) | Syai/Ottai（搭配 Ottai 或 Syai Tag App）                                                                 |
| Sibionics CGM                                                                | [Juggluco](../CompatibleCgms/Juggluco.md) 或 SI App（搭配 SI 修補版 App 或 Sibionics App）                   |
| Sinocare                                                                     | Sino App（搭配 Sino 修補版 App）                                                                           |
| MicroTech（Aidex、LinX、LinX Vista、Equil G. Smart 2、Diaexpert 2）                | MicroTech CGM 應用程式                                                                                  |
| Instara                                                                      | Instara（搭配 Instara App）                                                                             |
| [Caresens](../CompatibleCgms/Caresens.md)，Simplera，iCan，LinX，SmartGuide      | xDrip Companion App 或 [Juggluco](../CompatibleCgms/Juggluco.md)                                     |
| 任何會在通知中顯示血糖值的 CGM 官方 App（Dexcom、Medtronic、Eversense 等）                       | 通知讀取器                                                                                               |

(GettingStarted-TrustedBGSource)=

## 可信任的血糖來源

獲得監管批准的**CGM**用於商業混合閉環系統，視為可信的**血糖**來源。

為了讓**AAPS**正確識別它們，發送**血糖**讀取的應用程式必須能提供傳感器資訊。

可信任的資料來源，允許**SMB**可以啟動。

| 傳感器              |                                                         CGM 應用程式                                                          |
| ---------------- |:-------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                                  BYODA、xDrip（**直接、原生**）                                                   |
| Dexcom G7        |                BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip)                 |
| Dexcom ONE+      |                    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip)                    |
| Dexcom ONE/Stelo |                                                     xDrip（**直接、原生**）                                                      |
| Libre 2/2+ (歐盟)  | xDrip (OOP2 **no calibration**), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip) |
| Libre 2/2+/3/3+  |                                Juggluco（**xDrip 廣播**，不需安裝 xDrip；或搭配 xDrip 使用**修補版 Libre**）                                |
| Syai             |                                                         Syai App                                                          |

**注意：xDrip Companion App 和追蹤者模式（包含 640G/Eversense）並非可信任的資料來源。**
