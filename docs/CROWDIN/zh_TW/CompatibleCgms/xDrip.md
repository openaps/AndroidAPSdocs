# xDrip 設定

如果尚未完成設定，請從 [xDrip 發佈頁面](https://github.com/NightscoutFoundation/xDrip/releases)下載並安裝最新版本的 xDrip。

停用 xDrip 應用程式的電池最佳化，並允許其在背景執行。

## 所有 CGM & FGM 系統的基本設定

### 停用 Nightscout 上傳

請勿讓其他應用程式將資料（血糖和治療紀錄）上傳至 Nightscout。

→ Hamburger Menu (1) → Settings (2) → Cloud Upload (3) → Nightscout Sync (REST-API) (4) → Switch **OFF** `Enabled` (5)

![xDrip 基本設定 1](../images/xDrip_Basic1.png)

#### 停用自動校正和治療方案

請確認已停用 `Automatic Calibration`（7）。如果已勾選 `Automatic Calibration`，請先啟用一次 `Download treatments`（6），接著取消勾選 `Automatic Calibration`，並再次停用 `Download treatments`。

![xDrip 基本設定 2](../images/xDrip_Basic2.png)

點擊`額外選項`(8)

    {admonition} 安全警告
    :class: warning
    您必須在 xDrip 中停用「Upload treatments」，否則 AAPS 中可能會重複記錄治療資料，導致 COB 和 IOB 數值錯誤。

停用`上傳治療方案`(9)，並確保你**不要**使用`回填資料` (11)。

應該也停用選項`失敗警報`(10)。否則，若 Wi-Fi/行動網路有問題或伺服器不可用，你將每 5 分鐘收到一次警報。

![xDrip 基本設定 3](../images/xDrip_Basic3.png)

### **應用間設定**（廣播）

If you use AAPS, you must activate broadcasting in xDrip's Inter-App settings so the data is forwarded to AAPS.

→ 漢堡選單 (1) → 設定 (2) → 應用間設定 (3) → 本地廣播**開啟** (4)

若要讓 AAPS 中的數值與 xDrip 一致，建議啟用 `Send the displayed glucose value`（5）。

啟用相容廣播 (6)。

![xDrip 基本設定 4](../images/xDrip_Basic4.png)

如果您也在 xDrip 中啟用了 `Accept treatments`，並在 AAPS 的 xDrip 外掛中啟用了 `Enable broadcasts to xDrip`，xDrip 就會從 AAPS 接收胰島素、碳水化合物和基礎率資訊。

如果您啟用 `Accept Calibrations`，xDrip 就會使用來自 AAPS 的校正資料。當你將此功能與 Dexcom 傳感器一起使用時請小心：請先閱讀[這篇文章](https://navid200.github.io/xDrip/docs/Calibrate-G6.html)。

請記得停用「Import Sounds」，避免 xDrip 在 AAPS 傳送基礎率或設定檔變更時，每次都播放鈴聲。

![xDrip 基本設定 5](../images/xDrip_Basic5.png)

(xdrip-identify-receiver)=

#### 識別接收端

- 如果您發現本機廣播有問題（AAPS 沒有收到來自 xDrip 的血糖值），請前往 → 漢堡選單（1）「Settings」（設定）（2）→「Inter-app settings」（應用程式間設定）（3）→「Identify receiver」（識別接收端）（7），並輸入 `info.nightscout.androidaps`（適用於 AAPS 版本）。如果您使用的是 PumpControl 版本，請改輸入 `info.nightscout.aapspumpcontrol`！
- 請注意：自動校正有時會將小寫字母 i 改為大寫字母。輸入`info.nightscout.androidaps`（或 PumpControl 版本的`info.nightscout.aapspumpcontrol`）時**只能使用小寫字母**。如果開頭的 I 使用大寫，應用程式就無法接收 xDrip 傳送的血糖值。
    
    ![xDrip「App 間基本設定」中的「識別接收端」](../images/xDrip_InterApp_NS.png)

## 使用 AAPS 在 xDrip 中進行校正

- 如果您想使用 AAPS 進行校正，請在 xDrip 中前往「Settings」（設定）→「Interapp Compatibility」（應用程式間相容性）→「Accept Calibrations」，並選擇「ON」。 
- 你可能還想檢查設定 → 不常見的設定 → 高階校正設定中的選項。

## Dexcom 傳感器

Dexcom 感測器和發射器本身的所有相關資訊（包括啟動、停止、更換、校正和疑難排解），都記錄在 [xDrip Dexcom 說明文件](https://navid200.github.io/xDrip/docs/Dexcom_page.html)中，並會持續更新。請依照該說明操作感測器；本頁上方說明的 xDrip 與 **AAPS** 連線設定，是唯一與 AAPS 相關的部分。

### Dexcom G6 和 ONE

- 請依照[建議設定](https://navid200.github.io/xDrip/docs/G6-Recommended-Settings.html)設定 xDrip。
- Dexcom G6 和 ONE 傳送器可以同時連接到 Dexcom 接收器（或替代的 t:slim 幫浦）以及你手機上的一個應用程式。
- 使用 xDrip 作為接收器時，請先解除安裝 Dexcom App。**您無法同時使用發射器連線 xDrip 和 Dexcom 應用程式！**
- 如果您需要使用 Clarity，又想使用 xDrip 的功能，請使用 [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)，並透過本機廣播將資料傳送至 xDrip；或者將 xDrip 作為接收官方 Dexcom 應用程式通知的伴隨應用程式使用（血糖讀取值可能會延遲）。

#### 重新啟動感測器

- 目前的發射器搭配 xDrip 時，一律使用發射器的[原生演算法](https://navid200.github.io/xDrip/docs/Native-Algorithm.html)，因此沒有理由停用它。
- [預先重新啟動](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html)僅適用於舊款發射器（韌體版本 1.6.5.25 或更早），這些發射器需要預先重新啟動，才能避免感測器在 10 天後停止運作。較新的 Firefly 發射器不支援此功能。
- 若要在 Firefly 發射器上重新啟動感測器，必須[移除發射器](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)。重新啟動後，讀取值可能會出現明顯誤差；在使用循環時尤其危險。請完整閱讀[重新啟動感測器](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html)的說明，並[謹慎校正](https://navid200.github.io/xDrip/docs/Calibrate-after-G6Restart.html)。

(xdrip-connect-g6-transmitter-for-the-first-time)=

#### 啟動、停止及更換感測器

請依照以下說明操作：

- [啟動 G6 或 ONE 發射器](https://navid200.github.io/xDrip/docs/Starting-G6.html)
- [停止並啟動 G6 或 ONE 感測器](https://navid200.github.io/xDrip/docs/Dexcom/StartG6Sensor.html)
- [從感測器上移除發射器](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)
- 只有重新裝入電池或經過改裝的發射器才能延長[發射器的使用壽命](https://navid200.github.io/xDrip/docs/Transmitter-lifetime.html)（透過[硬重設](https://navid200.github.io/xDrip/docs/Hard-Reset.html)），Firefly 發射器則無法延長。

(xdrip-replace-transmitter)=

#### 更換發射器

- 請關閉原本的 Dexcom 接收器（如果有使用），並在 xDrip 顯示讀取值之前，不要重新開啟接收器。
- 請在 xDrip（「System Status」（系統狀態）→「Forget Device」（忘記裝置））以及智慧型手機的藍牙設定中忘記此裝置。裝置會顯示為 DexcomXX，其中 XX 是發射器序號的最後兩位數。
- 請讓舊發射器遠離藍牙範圍，以免重新連線。
- 接著依照[啟動 G6 或 ONE 發射器](https://navid200.github.io/xDrip/docs/Starting-G6.html)的說明操作。

### Dexcom G7、ONE+ 和 Stelo

- 請依照 [G7、ONE+ 和 Stelo 說明](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)操作（需要使用近期版本的 xDrip，詳情請參閱連結頁面）。
- 如需了解 **AAPS** 可使用的設定方式，請參閱 [Dexcom G7、ONE+ 和 Stelo 頁面](../CompatibleCgms/DexcomG7.md)。

(xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)=

### Dexcom 和 xDrip 疑難排解

- [G6/ONE 連線疑難排解](https://navid200.github.io/xDrip/docs/Connectivity-troubleshoot.html)
- [G7/ONE+/Stelo 疑難排解](https://navid200.github.io/xDrip/docs/Dexcom/G7_Troubleshooting.html)
- [啟動新感測器時發生問題](https://navid200.github.io/xDrip/docs/Dexcom/SensorFailedStart.html)
- 完整清單請參閱 [xDrip Dexcom 頁面](https://navid200.github.io/xDrip/docs/Dexcom_page.html)上的**疑難排解**。

## Libre 1

- 在 xDrip 中設定 NFC 藍牙橋接器
    
    → 漢堡選單 (1) → 設定 (2) → 不常見設定 (3) → 藍牙設定 (4)

- 在藍牙設定中，請將勾選框設置為下方截圖所示的設定 (5)
    
    - 停用監控程式，因為他們會重置手機藍牙並中斷幫浦連線。
    
    ![xDrip Libre 藍牙設定 1](../images/xDrip_Libre_BTSettings1.png)

- 你可以嘗試啟用以下設定 (7)
    
    - 使用掃描功能
    - 信任自動連線
    - 使用背景掃描

- 如果你經常失去與橋接器的連線或難以恢復連線，**請停用他們** (8)。
    
    ![xDrip Libre 藍牙設定 2](../images/xDrip_Libre_BTSettings2.png)

- 除非你知道為什麼要啟用，否則請保持其他選項為停用狀態。
    
    ![xDrip Libre 藍牙設定 3](../images/xDrip_Libre_BTSettings3.png)

### Libre 智慧讀取器電池電量

- 如 MiaoMiao 和 Bubble 等橋接器的電池電量可以顯示在 AAPS 中（Blucon 不支援）。
- 詳細資訊請參閱[螢幕截圖頁面](#screens-sensor-level-battery)。

### 連線 Libre 傳輸器並啟動傳感器

- 如果你的傳感器需要（例如 Libre 2 EU 和 Libre 1 US），請安裝最新的外部處理演算法。

- 您必須先使用廠商的應用程式或讀取器啟動感測器（xDrip 無法啟動或停止 Libre 感測器）。

- 將資料來源設置為 Libre 藍牙。
    
    → 漢堡選單 (1) → 設定 (2) → 在硬體資料來源中選擇 Libre 藍牙 (3)
    
    ![xDrip 啟動 Libre 發射器與感測器 1](../images/xDrip_Libre_Transmitter01.png)

- 掃描藍牙並連線橋接器。
    
    → 漢堡選單 (1) → 掃描藍牙 (2) → 掃描 (3)
    
    - 如果 xDrip 找不到橋接器，請確認橋接器未連線至廠商 App。請將橋接器接上電源充電，然後重設。
    
    ![在 xDrip 中啟動 Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

- 在 xDrip 中啟動感測器。
    
        {admonition} 安全警告
        :class: warning
        在一小時的暖機時間結束之前請勿使用傳感器資料：該數值可能會異常高，並導致 AAPS 中的錯誤決策。
    
    → 漢堡選單 (1) → 啟動傳感器 (2) → 啟動傳感器 (3) → 設置你使用讀取器或供應商應用程式啟動傳感器的精準時間。如果你不是今天啟動的，請選擇“不是今天” (4)。

![xDrip 啟動 Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

(xdrip-libre2-patched-app)=

## Libre 2 修補版(patched) 應用程式

- 將資料來源設置為 Libre 修補版應用程式。
    
    → 漢堡選單 (1) → 設定 (2) → 在硬體資料來源中選擇 Libre（修補版應用程式）(3)
    
    ![xDrip Libre Patched App 1](../images/xDrip_Libre_Patched01.png)

- 你可以在不常見設定->額外日誌紀錄設定->額外標籤紀錄中新增`BgReading:d,xdrip libre_receiver:v`。這將紀錄額外的錯誤訊息以進行問題排除。

![xDrip LibreLink 記錄功能](../images/Libre2_Tags.png)