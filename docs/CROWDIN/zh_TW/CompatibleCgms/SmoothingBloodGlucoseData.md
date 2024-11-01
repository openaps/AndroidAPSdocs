# 平滑血糖資料

If **BG** data is jumpy/noisy, **AAPS** may dose insulin incorrectly resulting in highs or lows. 如果你發現你的連續血糖監測（CGM）資料出錯，應在問題解決前暫停循環。 Depending on your CGM, such issues may be due to the CGM configuration in **AAPS** (as explained further below); or a CGM sensor site issue (which may require replacing the CGM sensor).

Some CGM systems have internal algorithms to detect the noise level in the readings, and **AAPS** can use this information to avoid giving SMBs if the BG data is too unreliable. 然而，部分 CGM 不會傳送此資料，對於這些血糖來源，「始終啟用 SMB」和「碳水化合物後啟用 SMB」會為了安全起見被停用。

## 在 AAPS 中平滑資料

As of **AAPS** version 3.2, **AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. There are three options available in the [Config Builder](../SettingUpAaps/ConfigBuilder.md).

![Smoothing](../images/ConfBuild_Smoothing.png)

### 指數平滑

這是建議的起始選項，因為他最積極解決干擾問題，並重寫最近的數值。

### 平均平滑

此選項與先前在某些 CGM 平台上實作的反向平滑相似。 他對血糖值的近期變化反應更敏感，因此更容易對干擾的 CGM 資料反應不正確。

### 無平滑處理

Use this option only if your CGM data is being properly smoothed by your collector app before being transmitted to **AAPS**.

## 平滑處理建議

|                       | 指數平滑 | 平均平滑  | 無平滑處理 |
| --------------------- |:----:|:-----:|:-----:|
| G5 和 G6               |      | 如果有干擾 | 建議使用  |
| G7                    | 建議使用 |       |       |
| Libre 1 或 Juggluco    | 建議使用 |       |       |
| Libre 2 和 3 使用 xDrip+ |      |       | 建議使用  |

### Dexcom 傳感器

#### 自己動手打造您的 Dexcom 應用程式
When using [BYODA](../CompatibleCgms/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app), your BG data is smooth and consistent. 此外，您可以利用 Dexcom 的回彈平滑功能。 使用 SMBs 並沒有任何限制，因為噪音級別資料會與 AAPS 共享。

#### xDrip+ 與 Dexcom G6 或 Dexcom ONE 配合使用
Noise-level data and smooth BG readings are only shared with AAPS if you use xDrip+ [native mode](https://navid200.github.io/xDrip/docs/Native-Algorithm). 使用原生模式時，使用 SMBs 並沒有任何限制。

#### Dexcom G6 或 Dexcom ONE 與 xDrip+ 陪伴模式
使用此方法時，噪音級別資料不會與 AAPS 共享。 因此，「始終啟用 SMB」和「在碳水化合物後啟用 SMB」是停用的。

### Freestyle Libre 傳感器

#### xDrip+ 與 FreeStyle Libre 配合使用
所有 FreeStyle Libre 系統 (FSL1, FSL2 或 FSL3) 均不傳送任何有關讀取中檢測到的噪音等級的信息，因此對於使用 FreeStyle Libre 的所有設置「始終啟用 SMB」和「在碳水化合物後啟用 SMB」都被停用。 此外，許多人報告說 FreeStyle Libre 經常產生嘈雜的資料。
