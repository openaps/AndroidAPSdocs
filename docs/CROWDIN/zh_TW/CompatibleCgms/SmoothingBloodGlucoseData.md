- - -
orphan: true
- - -

# 平滑血糖資料

如果 **血糖** 資料不穩定/干擾，**AAPS** 可能會錯誤地注射胰島素，導致血糖過高或過低。 如果你發現你的連續血糖監測（CGM）資料出錯，應在問題解決前暫停循環。 根據你的 CGM，這些問題可能是由於 **AAPS** 中的 CGM 韌體設定問題（如下文進一步說明）；或是 CGM 傳感器位置問題（這可能需要更換 CGM 傳感器）。

## 在 AAPS 中平滑資料

自 **AAPS** 版本 3.2 起，**AAPS** 提供了在 **AAPS** 中平滑資料的選項，而不是在 CGM 應用程式中。 在 [設定檔設置工具 > 平滑](../SettingUpAaps/ConfigBuilder.md) 中有三個選項可用。

![平滑](../images/ConfBuild_Smoothing.png)

### 指數平滑

In general, this is the recommended option to start with, as it is most aggressive in resolving noise and rewrites the most recent value. However, see the table below for other specific recommendations.

### 平均平滑

此選項與先前在某些 CGM 平台上實作的反向平滑相似。 他對血糖值的近期變化反應更敏感，因此更容易對干擾的 CGM 資料反應不正確。

### 無平滑處理

僅在你的 CGM 資料在傳輸到 **AAPS** 之前已由收集應用程式正確平滑時使用此選項。

(smoothing-xdrip-dexcom-g6)=

## 平滑處理建議

|               | 指數平滑  |   平均平滑    | 無平滑處理 |
| ------------- |:-----:|:---------:|:-----:|
| G5/G6/ONE     | 如果有干擾 |           | 建議使用  |
| G7/ONE+/Stelo | 如果有干擾 | If stable |       |

Libre sensors are noisy and can require smoothing. When using xDrip+ direct connection, or the [patched app data source](https://xdrip.readthedocs.io/en/latest/install/libre2patch/) (receiving from another app, Juggluco included), smoothing is already done [inside the app](https://xdrip.readthedocs.io/en/latest/use/NFC/#smooth-libre-3-data-when-using-xxx-method).

| Sensor / Data source | Juggluco | xDrip+ direct | xDrip+ bridge | xDrip+ patched app |
| -------------------- |:--------:|:-------------:|:-------------:|:------------------:|
| Libre 1/14 days/Pro  |   N.A.   |     N.A.      |     平均平滑      |        N.A.        |
| Libre 2/2+ (EU)      |   平均平滑   |     無平滑處理     |     平均平滑      |       無平滑處理        |
| Libre 2/2+/3/3+      |   平均平滑   |     N.A.      |     N.A.      |       無平滑處理        |
