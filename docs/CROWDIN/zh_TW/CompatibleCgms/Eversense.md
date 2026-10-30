# Eversense

There are four different methods to access the readings from Eversense:

- ESEL 配套模式
- ESEL 修補版模式
- xDrip companion app
- Notification Reader (built into **AAPS**)

## ESEL

按照這些[指示](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel)，取得並安裝[ESEL 應用程式](https://github.com/BernhardRo/Esel/tree/master/apk)。

- In ESEL, open the three dots menu (⋮) at the top right and select **Settings** (also available from the ☰ menu). In the settings:
  - 啟用「發送至 AAPS 和 xDrip」
  - **停用**「發送至 Nightscout」
  - 由於 Eversense 的血糖資料可能會產生干擾，建議在 ESEL 中啟用「平滑資料」功能。

![ESEL 廣播](../images/ESEL.png)

### 配套模式

從 Eversense 應用程式通知中讀取資料（自 ESEL 版本 3.0.1 起可與標準 Eversense 應用程式一起使用）。

1. 使用來自 Google Play 商店的官方 Eversense 應用程式
   - 選擇性的操作，但若需回填則必須：登錄你的 Eversense 帳號
   - 在同步中，啟用自動同步功能
2. ESEL 設定：
   - 停用「從修補版 Eversense 應用程式獲取資料」設置
   - 若需回填：啟用「從 eversensedms.com 填補遺漏資料」
   - 輸入你的 Eversense 登錄資料作為電子郵件地址和密碼
3. Set "MM640g" as BG source in [**Configuration → BG Source**](#Config-Builder-bg-source).

### 修補版 Eversense 應用程式

 需要修補版的 Eversense 應用程式（完全離線運作，包括回填）。

1. 卸載 Eversense 應用程式（警告：你將丟失超過 1 週的本地歷史資料！）

2. 安裝[修補版 Eversense 應用程式](https://cr4ck3d3v3r53n53.club)並按照供應商的描述進行使用。

   - 啟動 Eversense 應用程式，登錄，連線到你的傳輸器，並像使用正常應用程式一樣使用他。

3. ESEL 設定：

   - 啟用「從修補版 Eversense 應用程式獲取資料」設置



![ESEL 廣播](../images/ESELpatch.png)

如果你首次安裝 Eversense 並運作 ESEL，可能需要長達 15 分鐘才能在 xDrip 中顯示第一個數值！

4. Set "MM640g" as BG source in [**Configuration → BG Source**](#Config-Builder-bg-source).

## xDrip

xDrip can read notifications from the vendor app, like ESEL does. 無法使用回填功能。

- Download and install xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- As data source in xDrip “Companion App” must be selected.
- Select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).
- Adjust the xDrip settings according to the explanations on the xDrip settings page [xDrip settings](../CompatibleCgms/xDrip.md).
- 在 AAPS 中啟用[指數平滑](../CompatibleCgms/SmoothingBloodGlucoseData.md)。

## Notification Reader

**AAPS** can read the glucose values directly from the notifications posted by the official Eversense app, without any other app in between. 無法使用回填功能。

- Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and grant **AAPS** access to notifications when asked.
- Make sure the Eversense app shows the current glucose value in its notification.

```{warning}
血糖 值的讀取頻率並不總是 5 分鐘，並且可能會出現重複數值。
```