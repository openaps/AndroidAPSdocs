# 平滑血糖資料

如果 **血糖** 資料不穩定/干擾，**AAPS** 可能會錯誤地注射胰島素，導致血糖過高或過低。 If you observe errors or experience jumpy data with your CGM it is important to disable the loop until the problem is resolved. 根據你的 CGM，這些問題可能是由於 **AAPS** 中的 CGM 韌體設定問題（如下文進一步說明）；或是 CGM 傳感器位置問題（這可能需要更換 CGM 傳感器）。

## 在 AAPS 中平滑資料

**AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. Open the **menu** (☰), select [**Configuration**](../SettingUpAaps/ConfigBuilder.md), then **Smoothing**. There are four options, and only one can be active at a time: **No smoothing**, **Exponential smoothing**, **Average smoothing** and **Unscented Kalman Filter**.

![Configuration > Smoothing](../images/v4/Configuration/configuration_smoothing.png)

### 指數平滑

一般來說，這是最建議的選項，因為它在解決干擾方面最具侵略性，並且會重新寫入最近的數值。然而，請參閱下表以獲取其他具體建議。

### 平均平滑

此選項與先前在某些 CGM 平台上實作的反向平滑相似。他對血糖值的近期變化反應更敏感，因此更容易對干擾的 CGM 資料反應不正確。

### 無平滑處理

僅在你的 CGM 資料在傳輸到 **AAPS** 之前已由收集應用程式正確平滑時使用此選項。

### Unscented Kalman Filter (UKF)

This option uses a statistical model to continuously estimate your true glucose value and its rate of change from the incoming (possibly noisy) readings, automatically adapting to how noisy your sensor currently is. It also detects and rejects sudden outlier readings. It is a more advanced alternative to Exponential and Average smoothing, useful if you want the smoothing to adjust itself to your sensor's changing noise level rather than using a fixed method.

(smoothing-xdrip-dexcom-g6)=

## 平滑處理建議

You can also change the smoothing method automatically, for example depending on the sensor age, with the **Change smoothing** [Automation action](#automations-automation-action).

|               | 指數平滑  |  平均平滑  | 無平滑處理 |
| ------------- |:-----:|:------:|:-----:|
| G5/G6/ONE     | 如果有干擾 |        | 建議使用  |
| G7/ONE+/Stelo | 如果有干擾 | 如果穩定的話 |       |

Libre 傳感器的干擾較大，可能需要平滑處理。 When using xDrip direct connection, or the patched app data source (receiving from another app, Juggluco included), [smoothing is already done inside the app](#libre2-value-smoothing-raw-values).

| 傳感器 / 資料來源      | Juggluco | xDrip direct | xDrip bridge | xDrip patched app |
| --------------- |:--------:|:------------:|:------------:|:-----------------:|
| Libre 1/14天/專業版 |   N.A.   |     N.A.     |     平均平滑     |       N.A.        |
| Libre 2/2+ (歐盟) |   平均平滑   |    無平滑處理     |     平均平滑     |       無平滑處理       |
| Libre 2/2+/3/3+ |   平均平滑   |     N.A.     |     N.A.     |       無平滑處理       |
