# 相容的 CGM

本節提供所有與**AAPS**相容的**CGMs/FGMs**的簡要概述。

*提示*: 如果你能在 xDrip+ 應用中顯示你的血糖資料，可以在**AAPS**中選擇 xDrip+ 作為**BG** 資料來源。

* [一般建議](../CompatibleCgms/GeneralCGMRecommendation.md)
* [資料平滑](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip+設定](../CompatibleCgms/xDrip.md)
* [Nightscout 作為 BG 資料來源](../CompatibleCgms/CgmNightscoutUpload.md): 儘管可以使用 Nightscout 作為閉環胰島素給藥的 BG 資料來源，但**這種方法不推薦**，因為其依賴穩定的行動網路或 Wi-Fi 連接。 這意味著你的**CGM**資料只有在與你的 Nightscout 網站保持在線連接時，才會被**AAPS**接收。 為了更加穩定的設置，使用具有接收器的本地廣播的 CGM（如下所列）到**AAPS**，是一個更好的選擇。

| CGM                                                   | Available [BG Sources](../SettingUpAaps/ConfigBuilder.md#bg-source) |
| ----------------------------------------------------- | ------------------------------------------------------------------- |
| [Dexcom G7 和 ONE+](../CompatibleCgms/DexcomG7.md)     | xDrip+, DiaKEM app or Juggluco                                      |
| [Dexcom G6 和 ONE](../CompatibleCgms/DexcomG6.md)      | xDrip+ or BYODA (only G6)                                           |
| [Dexcom G5](../CompatibleCgms/DexcomG5.md)            | xDrip+                                                              |
| [Libre 3](../CompatibleCgms/Libre3.md)                | xDrip+ (no transmitter) or Juggluco                                 |
| [Libre 2](../CompatibleCgms/Libre2.md)                | xDrip+ (no transmitter) or Juggluco                                 |
| [Libre 1](../CompatibleCgms/Libre1.md)                | xDrip+, Glimp, Tomato or Diabox. Need a transmitter                 |
| [Eversense](../CompatibleCgms/Eversense.md)           | xDrip+ or ESEL/Eversense patched App                                |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md) | xDrip+ or MM640g + 600SeriesAndroidUploader App                     |
| [PocTech](../CompatibleCgms/PocTech.md)               | PocTech                                                             |
| [Ottai](../CompatibleCgms/OttaiM8.md)                 | Ottai                                                               |
| [Syai Tag](../CompatibleCgms/SyaiTagX1.md)            | Syai Tag                                                            |
| Sibionics CGM                                         | Juggluco                                                            |

(GettingStarted-TrustedBGSource=)

## Trusted BG data sources

Regulatory approved **CGM**s for commercial hybrid closed loop systems are considered trusted **BG** data sources.

In order for **AAPS** to correctly identify them, the app sending **BG** readings must be able to provide sensor information.

Trusted data sources allow **SMB** delivery, all the time.

| Sensor                |             CGM app             |
| --------------------- |:-------------------------------:|
| Dexcom G5/G6          | BYODA, xDrip+ (Direct, Native)  |
| Dexcom G7             | DiaKEM, xDrip+ (Direct, Native) |
| Dexcom ONE/ONE+/Stelo |     xDrip+ (Direct, Native)     |
| Libre 2/2+ (EU)       |    Juggluco, xDrip+ (Direct)    |
| Libre 2/2+/3/3+       |            Juggluco             |

Note: xDrip+ Companion app and Followers are not trusted data sources.
