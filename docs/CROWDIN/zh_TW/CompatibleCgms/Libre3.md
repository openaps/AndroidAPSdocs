# **Freestyle Libre 3** 和 3+

Freestyle Libre 3 (FSL3) 需要特殊設定才能將血糖值接收至 AAPS。有兩種可能的方法將 Freestyle Libre 3 (FSL3) 值傳送到 AAPS。

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

下述方法使用單獨的應用程式 Juggluco 來實現此目的。此方法使用 Juggluco 接收感測器傳來的原始資料，資料間隔為 1 分鐘，接著再傳送至 xDrip 或 AAPS。可以使用 Libre 3 應用程式或直接在 Juggluco 中啟動新傳感器。下方指南說明如何使用 Juggluco 應用程式啟動傳感器的過程。如果傳感器是使用已登入 Libreview 帳戶啟動的，也可以在 Juggluco 和 Libre 3 應用程式之間切換作為接收器。

當傳感器使用 Libre 3 應用程式啟動時，Juggluco 也可以將資料傳送至 LibreView 以與醫療提供者共享。

在 xDrip 中，可將感測器校正範圍設定為 -40 mg/dL 至 +20 mg/dL（-2.2 mmol/L 至 +1.1 mmol/L），以補償手動血糖機讀取值與感測器讀取值之間的差異。

## 方法一：直接使用每分鐘的資料值
**AAPS** 是為每 5 分鐘讀取一次資料而設計的。因此，在某些情況下處理每分鐘的資料值時，會有些侷限。

請參閱 [這裡](#juggluco-to-aaps).


## 方法二：透過 xDrip 將每分鐘的資料值轉換為每 5 分鐘的資料值。
此方法使用 Juggluco 接收感測器傳來的原始資料，資料間隔為 1 分鐘，接著傳送至 xDrip，將資料平滑處理為每 5 分鐘一筆，再傳送至 AAPS。

### 步驟 1：設定 Juggluco
從[此處](https://www.juggluco.nl/Juggluco/download.html)下載並安裝 Juggluco 應用程式。按照[此處](https://www.juggluco.nl/Juggluco/libre3/)的指示操作。

請確認有將血糖值傳送至 xDrip：您可以在 Juggluco 的設定中，設定將血糖值傳送至其他 App。 Juggluco 可以傳送三種這類廣播訊息：**修改版 Libre 廣播**最初是由修改版 LibreLink App 使用，也可用來將血糖值傳送至 xDrip

### 步驟 2：設定 xDrip

智慧型手機上的 xDrip App 會接收血糖值。

- 如果尚未設定，請下載 [xDrip](https://github.com/NightscoutFoundation/xDrip)，並依照[xDrip 設定頁面](../CompatibleCgms/xDrip.md)的說明操作。
- 在 xDrip 中選取「Libre2（修改版 App）」作為資料來源。
- 如果需要，請在「不常見的設定」→「額外日誌紀錄設定」→「日誌紀錄的額外標籤」下輸入 "BgReading:d,xdrip libre_receiver:v"。這將紀錄額外的錯誤訊息以便進行問題排除。

![xDrip LibreLink 記錄功能](../images/Libre2_Tags.png)

- 技術上來說，目前的血糖值每分鐘都會傳送至 xDrip。加權平均濾波器預設會計算最近 25 分鐘內的平滑資料。你可以在 NFC 掃描功能選單中更改此時間段。

  → 漢堡選單 → 設定 → NFC 掃描功能 → 使用 xxx 方法時平滑 Libre 3 資料

  ![xDrip 進階設定：Libre 2 和原始值](../images/xDrip_Libre3_Smooth.png)



### 步驟 3：在 xDrip 中啟動傳感器

在 xDrip 中選取「啟動感測器」，再選取「今天不要」。無需將手機靠近傳感器。事實上，「啟動傳感器」不會實際啟動任何 Libre 3 傳感器，也不會與他們進行任何互動。這只是用來通知 xDrip 有新的感測器正在傳送血糖值。如果可以，請輸入兩筆以血糖機測量的數值，作為初始校正值。現在，xDrip 應該每 5 分鐘顯示一次血糖值。跳過的讀取值，例如因為你離手機太遠，將不會被回填。

如果仍然沒有資料，請等待至少 15-20 分鐘。

更換感測器後，xDrip 會自動偵測新感測器，並刪除所有校正資料。您可以在感測器啟動後測量血糖，並重新進行初始校正。

### 步驟 4：設定 AAPS

- 請參閱 [這裡](#juggluco-to-xdrip)然後返回。

- 如果手機處於飛航模式時，**AAPS** 收不到血糖值，請使用「識別接收器」
- 關閉平滑處理（已在 xDrip 中完成）

## 後續傳感器更換

1. 打開 Juggluco 並記下現有傳感器的序列號。

![Libre 序列號](../images/libre3/step_13.jpg)

2. 現在，只需使用手機的 NFC 閱讀器掃描你的新傳感器。如果過程成功開始，Juggluco 會顯示通知。
3. 當你準備停用舊傳感器時，請點擊螢幕左上角的空白區域打開 Juggluco 選單。
4. 選擇過期的傳感器並點擊「終止」

![終止傳感器](../images/libre3/step_14.jpg)

注意：當兩個感測器都在使用中時，Juggluco 會將其中一個感測器的最新讀取值傳送至 xDrip。如果感測器尚未校正，且讀取到的血糖值相近，xDrip 收到的血糖值可能會出現跳動。如果你終止了錯誤的傳感器，可以透過掃描傳感器重新啟用他。

## 在 Libre 3 和 Juggluco 應用程式之間切換傳感器

如果傳感器是使用已登入 Libreview 帳戶啟動的，也可以在 Juggluco 和 Libre 3 應用程式之間切換作為接收器。這需要以下步驟：

1. 從 Google Play 商店安裝 Libre 3 應用程式。
2. 使用啟動傳感器的 Libreview 帳戶設定 Libre 3 應用程式。
3. 在 Android 設定中強制停止 Juggluco 應用程式。
4. 在 Libre 3 選單中，點擊「啟動傳感器」，選擇「是」，「下一步」，然後掃描你的傳感器。
5. 幾分鐘後，血糖 值應該會顯示在 Libre 3 應用程式中。

要從 Libre 3 應用程式切換到 Juggluco，你需要透過 Android 設定強制停止 Libre 3 應用程式，然後執行步驟 1 和步驟 2。

(libre3-experiences-and-troubleshooting)=
## 經驗與問題排除

### Libre3 -> Juggluco 連線問題排除

- 確保你使用的是 Juggluco 應用程式的最新版本。
- 根據本指南檢查你的設定。
- 有時你可能需要強制停止 Libre 3 應用程式和 Juggluco 並重新啟動他。
- 停用藍牙並重新啟用。
- 稍等片刻或嘗試關閉 Juggluco。
- 低於 2.9.6 的 Juggluco 舊版本不會將後續資料從 Libre3 傳感器發送到連線的設備（例如：WearOS 上的 Juggluco）。你可能需要在修補版 Libre3 應用程式中點擊「重新發送資料」（Juggluco 選單）。

### 進一步幫助

原始說明：[jkaltes 網站](https://www.juggluco.nl/Juggluco/libre3/)

其他 Github 倉庫：[Github 連結](https://github.com/maheini/FreeStyle-Libre-3-patch)
