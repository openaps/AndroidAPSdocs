# 平滑血糖資料

如果 **血糖** 資料跳動或干擾，**AAPS** 可能會錯誤劑量胰島素，導致高血糖或低血糖。 如果你發現你的連續血糖監測（CGM）資料出錯，應在問題解決前暫停循環。 根據你的 CGM，不同問題可能來自 **AAPS** 中的 CGM 設定（如下文所述），或者是 CGM 感測器的問題（可能需要更換感測器）。

某些 CGM 系統內建算法來偵測讀取值中的干擾，**AAPS** 可以利用此資訊避免在血糖資料過於不可靠時給予 SMB 劑量。 然而，部分 CGM 不會傳送此資料，對於這些血糖來源，「始終啟用 SMB」和「碳水化合物後啟用 SMB」會為了安全起見被停用。

## Smoothing data within AAPS

As of **AAPS** version 3.2, **AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. 在[配置生成器](../SettingUpAaps/ConfigBuilder.md)中有三個可用的選項。

![平滑處理](../images/ConfBuild_Smoothing.png)

### 指數平滑

這是建議的起始選項，因為他最積極解決干擾問題，並重寫最近的數值。

### 平均平滑

此選項與先前在某些 CGM 平台上實作的反向平滑相似。 他對血糖值的近期變化反應更敏感，因此更容易對干擾的 CGM 資料反應不正確。

### 無平滑處理

僅當你的 CGM 資料已在收集器應用程式中妥善平滑處理後傳送至 **AAPS** 時，才使用此選項。

## 平滑處理建議

|                       | 指數平滑 |  平均平滑 | 無平滑處理 |
| --------------------- | :--: | :---: | :---: |
| G5 和 G6               |      | 如果有干擾 |  建議使用 |
| G7                    | 建議使用 |       |       |
| Libre 1 或 Juggluco    | 建議使用 |       |       |
| Libre 2 和 3 使用 xDrip+ |      |       |  建議使用 |

### Dexcom sensors

#### Build Your Own Dexcom App

When using [BYODA](../CompatibleCgms/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app), your BG data is smooth and consistent. Furthermore, you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMBs, because the noise-level data is shared with AAPS.

#### xDrip+ with Dexcom G6 or Dexcom ONE

Noise-level data and smooth BG readings are only shared with AAPS if you use xDrip+ [native mode](https://navid200.github.io/xDrip/docs/Native-Algorithm). Using native mode, there are no restrictions in using SMBs.

#### Dexcom G6 or Dexcom ONE with xDrip+ Companion Mode

The noise-level data is not shared with AAPS using this method. Therefore, 'Enable SMB always' and 'Enable SMB after carbs' are disabled.

### Freestyle Libre sensors

#### xDrip+ with FreeStyle Libre

None of the FreeStyle Libre systems (FSL1, FSL2, or FSL3) broadcast any information about the level of noise detected in the readings, and therefore 'Enable SMB always' and 'Enable SMB after carbs' are disabled for all setups using the FreeStyle Libre.
In addition, many people have reported the FreeStyle Libre often produces noisy data.
