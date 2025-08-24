# 相容的 CGM

本節提供所有與**AAPS**相容的**CGMs/FGMs**的簡要總覽。

*提示*: 如果你能在 xDrip+ 應用中顯示你的血糖資料，可以在**AAPS**中選擇 xDrip+ 作為**血糖** 資料來源。

* [一般建議](../CompatibleCgms/GeneralCGMRecommendation.md)
* [資料平滑](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip+設定](../CompatibleCgms/xDrip.md)
* [Nightscout 作為血糖資料來源](../CompatibleCgms/CgmNightscoutUpload.md): 儘管可以使用 Nightscout 作為閉環胰島素給藥的血糖資料來源，但**這種方法不推薦**，因為其依賴穩定的行動網路或 Wi-Fi 連接。 這意味著你的**CGM**資料只有在與你的 Nightscout 網站保持在線連接時，才會被**AAPS**接收。 為了更加穩定的設置，使用具有接收器的本地廣播的 CGM（如下所列）到**AAPS**，是一個更好的選擇。

| CGM                                                  | Available [BG Sources](#Config-Builder-bg-source)                                                        |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)           | [xDrip+](../CompatibleCgms/xDrip.md)、DiaKEM 應用程式或 [Juggluco](../CompatibleCgms/Juggluco.md)              |
| [Dexcom ONE+ 和 Stelo](../CompatibleCgms/DexcomG7.md) | [xDrip+](../CompatibleCgms/xDrip.md)                                                                     |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)           | [xDrip+](../CompatibleCgms/xDrip.md) 或 BYODA                                                             |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)          | [xDrip+](../CompatibleCgms/xDrip.md)                                                                     |
| [Dexcom G5](../CompatibleCgms/DexcomG5.md)           | [xDrip+](../CompatibleCgms/xDrip.md)                                                                     |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)            | [Juggluco](../CompatibleCgms/Juggluco.md)（可搭配或不搭配 xDrip+ 使用）                                             |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)            | [xDrip+](../CompatibleCgms/xDrip.md)（僅限歐盟）或 [Juggluco](../CompatibleCgms/Juggluco.md)（不論是否與 xDrip+ 一起使用） |
| [Libre 1](../CompatibleCgms/Libre1.md)               | [xDrip+](../CompatibleCgms/xDrip.md)、Glimp、Tomato 或 Diabox。 需要發射器                                        |
| [Eversense](../CompatibleCgms/Eversense.md)          | [xDrip+](../CompatibleCgms/xDrip.md) 或 ESEL/Eversense 修補應用程式                                             |
| [Enlite（MM640G/MM630G）](../CompatibleCgms/MM640g.md) | [xDrip+](../CompatibleCgms/xDrip.md) 或 MM640g + 600SeriesAndroidUploader 應用程式                            |
| [PocTech](../CompatibleCgms/PocTech.md)              | PocTech                                                                                                  |
| [歐態（Ottai）](../CompatibleCgms/OttaiM8.md)            | 歐態（Ottai）                                                                                                |
| [Syai Tag](../CompatibleCgms/SyaiTagX1.md)           | Syai Tag                                                                                                 |
| Sibionics CGM                                        | [Juggluco](../CompatibleCgms/Juggluco.md)                                                                |

(GettingStarted-TrustedBGSource)=

## 可信的血糖來源

獲得監管批准的**CGM**用於商業混合閉環系統，視為可信的**血糖**來源。

為了讓**AAPS**正確識別它們，發送**血糖**讀取的應用程式必須能提供感測器資訊。

可信任的資料來源，允許**SMB**可以啟動。

| 傳感器                   |                                        CGM 應用程式                                        |
| --------------------- |:--------------------------------------------------------------------------------------:|
| Dexcom G5/G6          |                                BYODA、xDrip+ （**直連，原生**）                                |
| Dexcom G7             |            DiaKEM、xDrip+ （**直連，原生**），</br>Juggluco （**xDrip 廣播** 不帶 xDrip+）            |
| Dexcom ONE/ONE+/Stelo |                                   xDrip+ （**直連，原生**）                                   |
| Libre 2/2+ (歐盟)       | xDrip+ （OOP2 **無需校正**），</br>Juggluco （**xDrip 廣播** 不帶 xDrip+，或 **修補版 Libre** 與 xDrip+） |
| Libre 2/2+/3/3+       |               Juggluco （**xDrip 廣播** 不帶 xDrip+，或 **修補版 Libre** 與 xDrip+）               |

**注意：xDrip+ 伴隨應用程式和追蹤模式（包括 640G/Eversense）不被視為可靠的資料來源。**
