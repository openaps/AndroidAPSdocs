# 未來（可能）的幫浦驅動程式

This is a list of some pumps on the market, the status of their support in other looping systems, and their status in AAPS. At the end there is some information about what a pump needs to be "Loop capable".

    {contents} 目錄
    :depth: 1
    :local: true

## 正在整合至 AAPS 的幫浦

**即將推出：**這些幫浦的驅動程式目前正在開發中，並已在測試版本中運作。

Omnipod 5（[官方網站](https://www.omnipod.com/)）

![Omnipod 5 驅動程式正在開發中](../images/future-pumps/omnipod5-driver.png)

Tandem：t:Mobi（[官方網站](https://www.tandemdiabetes.com/)）

![Tandem t:Mobi 驅動程式正在開發中](../images/future-pumps/tandem-mobi-driver.png)

## 可進行閉環的幫浦

### Kaleido ([官網](https://www.hellokaleido.com/))

**循環狀態：**幫浦是循環候選，但目前不知道協議。廠商對開放原始碼不感興趣。

**AAPS 硬體需求：**無。看起來已啟用藍牙 (BT)。

### Tandem：t:slim X3（[官方網站](https://www.tandemdiabetes.com/about-us/pipeline)）

**循環狀態：**可能成為未來循環系統的候選裝置。希望 t:slim X3 能讓使用者透過手機完整控制幫浦，進而支援 AAPS；但推出時程與功能目前仍不明朗。

**AAPS 硬體需求：**無。預計將支援藍牙。

**備註：**尚未推出。在 Tandem 的產品規劃中，t:slim X3 似乎一再被降低優先順序，轉而優先開發 t:Mobi（包括無導管版本）和 Sigi（他們的貼片式幫浦）。

### Twiist（[官方網站](https://www.twiist.com/)）

**循環狀態：**循環系統候選裝置。

**AAPS 硬體需求：**無。支援藍牙。

### Willcare 胰島素幫浦 ([官網](http://shinmyungmedi.com/en/))

**Loop status:** At the moment it is not a Loop candidate, but their staff contacted us and they are interested in making the pump loopable (it seems to be missing only the get/set profile commands).

**AAPS 硬體需求：**無。看起來已啟用藍牙 (BT)。

**評論：**由於公司對與 AAPS 整合感興趣，他們可能會自行實施該功能。

### Ypsopump（[官方網站](https://www.ypsomed.com/)）

**循環狀態：**循環系統候選裝置。社群已逆向分析這款幫浦的藍牙通訊協定，因此原則上可以與它通訊。

**AAPS 硬體需求：**無。支援藍牙。

**備註：**Ypsopump 使用高強度的第三方加密技術保護藍牙通訊。要與它配合使用在技術上相當困難，因此很難建立並維護可靠的驅動程式。目前還沒有可供正式使用的 AAPS 驅動程式。

## 已停止銷售的幫浦（公司不再運營）

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**註解：**支援將於2025年3月結束。

## 不可閉環的幫浦

### Medtronic 藍牙

**評論：** 美敦力 [已撤回](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps)。

### Tandem: t:slim X2 ([官網](https://www.tandemdiabetes.com/))

**備註：**Tandem 的藍牙通訊協定已經過逆向分析，但 t:slim X2 只能注射胰島素，無法控制基礎胰島素輸注，因此無法安全地用於循環系統。除非 Tandem 開放透過手機完整控制 X2，否則這種情況不太可能改變；而這項功能更可能會在 t:slim X3 上推出。

### Accu-Chek Solo

**註解：**與Solo幫浦的溝通在社群中沒有成功案例。

## 幫浦成為可閉環的需求

**先決條件**

- 幫浦必須支援某種遠端控制。（藍牙、無線電頻率等）
- 協議已被破解/紀錄等。

**最低要求**

- 設置臨時基礎率
- 取得狀態
- 取消臨時基礎率

**對於 oref1(SMB) 或注射：**

- 設置注射

**可選功能**

- 取消注射
- 取得基礎設定檔（幾乎是必要的）
- 設置基礎設定檔（可有可無）
- 讀取歷史紀錄 

**其他（不是必需但有很好）**

- 設置延長注射
- 取消延長注射
- 讀取歷史紀錄
- 讀取每日總劑量 (TDD)

### 其他幫浦支援

如果你有其他幫浦想查看狀態，請在 Discord 上聯繫我們。