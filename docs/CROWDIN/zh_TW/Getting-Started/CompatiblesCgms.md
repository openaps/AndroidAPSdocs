# 相容的 CGM

本節提供所有與**AAPS**相容的**CGMs/FGMs**的簡要總覽。

*提示*: 如果你能在 xDrip+ 應用中顯示你的血糖資料，可以在**AAPS**中選擇 xDrip+ 作為**血糖** 資料來源。

* [一般建議](../CompatibleCgms/GeneralCGMRecommendation.md)
* [資料平滑](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip+設定](../CompatibleCgms/xDrip.md)
* [Nightscout 作為血糖資料來源](../CompatibleCgms/CgmNightscoutUpload.md): 儘管可以使用 Nightscout 作為閉環胰島素給藥的血糖資料來源，但**這種方法不推薦**，因為其依賴穩定的行動網路或 Wi-Fi 連接。 這意味著你的**CGM**資料只有在與你的 Nightscout 網站保持在線連接時，才會被**AAPS**接收。 為了更加穩定的設置，使用具有接收器的本地廣播的 CGM（如下所列）到**AAPS**，是一個更好的選擇。

| CGM                                                  | 可用的[血糖資料來源](../SettingUpAaps/ConfigBuilder.md#bg-source)                                                             |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)           | [xDrip+](../CompatibleCgms/xDrip.md), DiaKEM app or [Juggluco](../CompatibleCgms/Juggluco.md)                        |
| [Dexcom ONE+ 和 Stelo](../CompatibleCgms/DexcomG7.md) | [xDrip+](../CompatibleCgms/xDrip.md)                                                                                 |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)           | [xDrip+](../CompatibleCgms/xDrip.md) or BYODA                                                                        |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)          | [xDrip+](../CompatibleCgms/xDrip.md)                                                                                 |
| [Dexcom G5](../CompatibleCgms/DexcomG5.md)           | [xDrip+](../CompatibleCgms/xDrip.md)                                                                                 |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)            | [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip+)                                                   |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)            | [xDrip+](../CompatibleCgms/xDrip.md) (EU only) or [Juggluco](../CompatibleCgms/Juggluco.md) (with or without xDrip+) |
| [Libre 1](../CompatibleCgms/Libre1.md)               | [xDrip+](../CompatibleCgms/xDrip.md), Glimp, Tomato or Diabox. 需要發射器                                                 |
| [Eversense](../CompatibleCgms/Eversense.md)          | [xDrip+](../CompatibleCgms/xDrip.md) or ESEL/Eversense patched App                                                   |
| [Enlite（MM640G/MM630G）](../CompatibleCgms/MM640g.md) | [xDrip+](../CompatibleCgms/xDrip.md) or MM640g + 600SeriesAndroidUploader App                                        |
| [PocTech](../CompatibleCgms/PocTech.md)              | PocTech                                                                                                              |
| [歐態（Ottai）](../CompatibleCgms/OttaiM8.md)            | 歐態（Ottai）                                                                                                            |
| [Syai Tag](../CompatibleCgms/SyaiTagX1.md)           | Syai Tag                                                                                                             |
| Sibionics CGM                                        | [Juggluco](../CompatibleCgms/Juggluco.md)                                                                            |

(GettingStarted-TrustedBGSource)=

## 可信的血糖來源

獲得監管批准的**CGM**用於商業混合閉環系統，視為可信的**血糖**來源。

為了讓**AAPS**正確識別它們，發送**血糖**讀取的應用程式必須能提供感測器資訊。

可信的資料來源允許**SMB**隨時傳送。

| 傳感器                   |                                                        CGM 應用程式                                                        |
| --------------------- |:----------------------------------------------------------------------------------------------------------------------:|
| Dexcom G5/G6          |                                           BYODA, xDrip+ (**Direct, Native**)                                           |
| Dexcom G7             |                DiaKEM, xDrip+ (**Direct, Native**), </br>Juggluco (**xDrip broadcast** without xDrip+)                 |
| Dexcom ONE/ONE+/Stelo |                                              xDrip+ (**Direct, Native**)                                               |
| Libre 2/2+ (歐盟)       | xDrip+ (OOP2 **no calibration**), </br>Juggluco (**xDrip broadcast** without xDrip+, or **Patched Libre** with xDrip+) |
| Libre 2/2+/3/3+       |                    Juggluco (**xDrip broadcast** without xDrip+, or **Patched Libre** with xDrip+)                     |

**Note: xDrip+ Companion apps and Follower modes (includes 640G/Eversense) are not trusted data sources.**
