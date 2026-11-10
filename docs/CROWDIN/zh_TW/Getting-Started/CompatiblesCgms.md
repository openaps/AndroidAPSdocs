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

| CGM                                                                          | 可用的[血糖資料來源](#Config-Builder-bg-source)                                                                                       |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                   | BYODA、[xDrip](../CompatibleCgms/xDrip.md)、[Juggluco](../CompatibleCgms/Juggluco.md) 或 [通知讀取器](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                 | [xDrip](../CompatibleCgms/xDrip.md)、[Juggluco](../CompatibleCgms/Juggluco.md) 或 [通知讀取器](#DexcomG7-notification-reader)       |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                | [xDrip](../CompatibleCgms/xDrip.md) 或 [通知讀取器](#DexcomG7-notification-reader)                                                 |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                   | BYODA、[xDrip](../CompatibleCgms/xDrip.md) 或 [通知讀取器](#DexcomG6-notification-reader)                                           |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                  | [xDrip](../CompatibleCgms/xDrip.md) 或 [通知讀取器](#DexcomG6-notification-reader)                                                 |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                    | [Juggluco](../CompatibleCgms/Juggluco.md)（可搭配或不搭配 xDrip）                                                                     |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                    | [xDrip](../CompatibleCgms/xDrip.md)（僅限歐盟）或 [Juggluco](../CompatibleCgms/Juggluco.md)（可搭配或不搭配 xDrip）                          |
| [Libre 1](../CompatibleCgms/Libre1.md)                                       | [xDrip](../CompatibleCgms/xDrip.md)（Diabox 會透過 xDrip 來源傳送讀取值）、Glimp 或 Tomato（MiaoMiao）。需要發射器                                 |
| [Eversense](../CompatibleCgms/Eversense.md)                                  | [xDrip](../CompatibleCgms/xDrip.md)、ESEL/Eversense 修補版 App 或 Notification Reader                                             |
| [Enlite（MM640G/MM630G）](../CompatibleCgms/MM640g.md)                         | [xDrip](../CompatibleCgms/xDrip.md) 或 MM640g + 600SeriesAndroidUploader App                                                  |
| [PocTech](../CompatibleCgms/PocTech.md)                                      | PocTech App                                                                                                                  |
| Glunovo                                                                      | Glunovo App                                                                                                                  |
| Intelligo                                                                    | Intelligo App                                                                                                                |
| [Ottai](../CompatibleCgms/OttaiM8.md)、[Syai](../CompatibleCgms/SyaiTagX1.md) | Syai/Ottai（搭配 Ottai 或 Syai Tag App）                                                                                          |
| Sibionics CGM                                                                | [Juggluco](../CompatibleCgms/Juggluco.md) 或 SI App（搭配 SI 修補版 App 或 Sibionics App）                                            |
| Sinocare                                                                     | Sino App（搭配 Sino 修補版 App）                                                                                                    |
| MicroTech（Aidex、LinX、LinX Vista、Equil G. Smart 2、Diaexpert 2）                | MicroTech CGM 應用程式                                                                                                           |
| Instara                                                                      | Instara（搭配 Instara App）                                                                                                      |
| [Caresens](../CompatibleCgms/Caresens.md)，Simplera，iCan，LinX，SmartGuide      | xDrip Companion App 或 [Juggluco](../CompatibleCgms/Juggluco.md)                                                              |
| 任何會在通知中顯示血糖值的 CGM 官方 App（Dexcom、Medtronic、Eversense 等）                       | 通知讀取器                                                                                                                        |

(GettingStarted-TrustedBGSource)=

## 可信任的血糖來源

獲得監管批准的**CGM**用於商業混合閉環系統，視為可信的**血糖**來源。

為了讓**AAPS**正確識別它們，發送**血糖**讀取的應用程式必須能提供傳感器資訊。

可信任的資料來源，允許**SMB**可以啟動。

**AAPS** 會檢查所收到的最新 **血糖**讀取值中所命名的感測器，不論該讀取值是由哪個 **血糖**來源傳送。變更 **血糖**來源後，只有在收到新來源的第一筆讀取值後，才會顯示 **微量注射**的「一律」設定。

| 傳感器             |                                                              CGM 應用程式                                                              |
| --------------- |:----------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                        BYODA、xDrip（**直接、原生**）、<br/>Dexcom App（[通知讀取器](#DexcomG6-notification-reader)）                        |
| Dexcom G7       | BYODA、xDrip（**直接、原生**）、<br/>Juggluco（不使用 xDrip 的 **xDrip 廣播**）、<br/>Dexcom App（[通知讀取器](#DexcomG7-notification-reader)） |
| Dexcom ONE+     |    xDrip（**直接、原生**）、<br/>Juggluco（不使用 xDrip 的 **xDrip 廣播**）、<br/>Dexcom App（[通知讀取器](#DexcomG7-notification-reader)）    |
| Dexcom ONE      |                           xDrip（**直接、原生**）、<br/>Dexcom App（[通知讀取器](#DexcomG6-notification-reader)）                           |
| Dexcom Stelo    |                           xDrip（**直接、原生**）、<br/>Dexcom App（[通知讀取器](#DexcomG7-notification-reader)）                           |
| Libre 2/2+ (歐盟) |                        xDrip（OOP2）、<br/>Juggluco（不使用 xDrip 的 **xDrip 廣播**，或使用 xDrip 的 **修補版 Libre**）                         |
| Libre 2/2+/3/3+ |                                    Juggluco（**xDrip 廣播**，不需安裝 xDrip；或搭配 xDrip 使用**修補版 Libre**）                                     |
| Syai、Ottai      |        Syai 或 Ottai 應用程式（**Syai/Ottai** 資料來源或 **Notification Reader**），<br/>Juggluco（不使用 xDrip 的 **xDrip broadcast**）        |

**注意：xDrip Companion 應用程式、Medtronic、Eversense 和所有其他感測器，都不是可信任的資料來源。**

```{admonition} Online BG sources are not recommended for closed looping
:class: warning
有些需要網際網路連線的來源也可以信任：
- xDrip **Dexcom Share follower**（任何 Dexcom 感測器）
- **Nightscout** 血糖來源（**AAPSClient**，或透過 Nightscout 網站追蹤資料的 **AAPS**），前提是上傳程式使用上述其中一種感測器

不建議在閉環模式中使用這些來源。當手機或 CGM 上傳程式失去連線時，**AAPS** 收不到血糖讀取值，因此無法執行循環。讀取值也會延遲抵達，延遲時間取決於雲端服務。請盡可能使用會在手機上直接將讀取值傳送給 **AAPS** 的 CGM 應用程式（如上表所列）。

其他追蹤模式（xDrip Nightscout 或 Web follower、CareLink follower、Juggluco Nightscout）一律不可信任。
```
