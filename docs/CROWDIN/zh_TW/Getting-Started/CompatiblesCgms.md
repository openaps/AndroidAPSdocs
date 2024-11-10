# CGMs/FGMs 配置

本節提供所有與**AAPS**相容的**CGMs/FGMs**的簡要概述。

*提示*: 如果你能在 xDrip+ 應用中顯示你的血糖資料，可以在**AAPS**中選擇 xDrip+ 作為**BG** 資料來源。

* [一般建議](../CompatibleCgms/GeneralCGMRecommendation.md)
* [資料平滑](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip+設定](../CompatibleCgms/xDrip.md)
* [Nightscout 作為 BG 資料來源](../CompatibleCgms/CgmNightscoutUpload.md): 儘管可以使用 Nightscout 作為閉環胰島素給藥的 BG 資料來源，但**這種方法不推薦**，因為其依賴穩定的行動網路或 Wi-Fi 連接。 這意味著你的**CGM**資料只有在與你的 Nightscout 網站保持在線連接時，才會被**AAPS**接收。 為了更加穩定的設置，使用具有接收器的本地廣播的 CGM（如下所列）到**AAPS**，是一個更好的選擇。

| CGM                                                  | 可用的[BG 資料來源](../SettingUpAaps/ConfigBuilder.md#bg-source) |
| ---------------------------------------------------- | --------------------------------------------------------- |
| [Dexcom G7 和 ONE+](../CompatibleCgms/DexcomG7.md)    | xDrip+ 或 DiaKEM 應用程式（選擇 BYODA）                            |
| [Dexcom G6 和 ONE](../CompatibleCgms/DexcomG6.md)     | xDrip+ 或 BYODA                                            |
| [Dexcom G5](../CompatibleCgms/DexcomG5.md)           | xDrip+                                                    |
| [Libre 3](../CompatibleCgms/Libre3.md)               | xDrip+（不需要發射器）                                            |
| [Libre 2](../CompatibleCgms/Libre2.md)               | xDrip+（不需要發射器）                                            |
| [Libre 1](../CompatibleCgms/Libre1.md)               | xDrip+、Glimp、Tomato 或 Diabox。 需要像 Bluecon 或 MiaoMiao 的發射器 |
| [Eversense](../CompatibleCgms/Eversense.md)          | xDrip+ 或 ESEL/Eversense 補丁應用程式 + MM640g                   |
| [Enlite（MM640G/MM630G）](../CompatibleCgms/MM640g.md) | xDrip+ 或 MM640g + 600系列 Android 上傳程式                      |
| [PocTech](../CompatibleCgms/PocTech.md)              | PocTech                                                   |