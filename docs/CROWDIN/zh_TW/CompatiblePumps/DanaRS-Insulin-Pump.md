# DanaRS、Dana-i 和 Dana-i2

*如果您使用的是 2017 年起推出的 DanaRS、Dana-i 或 Dana-i2，請參閱本說明，瞭解如何設定應用程式和幫浦。如果你擁有原始的 DanaR，請讀取[DanaR 胰島素幫浦](./DanaR-Insulin-Pump.md)。*

**Dana-i2 從 AAPS 4.0 版起即可使用。**它和 Dana-i 使用相同的 **Dana-i/RS** 驅動程式。

* 在 DanaRS/i/i2 幫浦中，應用程式會使用「BASAL A」，並覆寫其中原有的資料。

    {contents} 目錄
    :depth: 1
    :local: true

## 幫浦與AAPS的功能

* 透過手機內建的藍牙與 **AAPS** 通訊，不需要額外的通訊裝置。
* 夏令時間和時區變更必須手動處理（請參閱[時區與旅行](#timezone-traveling-danarv2-danars)）。

(DanaRS-Insulin-Pump-pairing-pump)=

## 幫浦配對

* 在 **AAPS** 主畫面左上角，開啟**選單**（☰），然後選取**組態**。
* 點選**幫浦**，然後選取 **Dana-i/RS**。
    
    ![使用 Dana-i/RS 外掛程式時的「組態」>「幫浦」畫面](../images/v4/Configuration/configuration_pump_list_2.png)
    
    選取後，Dana-i/RS 卡片會顯示兩個按鈕：**設定**和**開啟外掛程式**：
    
    ![在「組態」>「幫浦」中選取 Dana-i/RS 外掛程式](../images/v4/Pumps/dana_i_rs_enabled.png)
    
    **設定**會開啟 Dana-i/RS 驅動程式的設定：
    
    ![Dana-i/RS 驅動程式設定](../images/v4/Pumps/dana_i_rs_settings.png)
    
    **開啟外掛程式**（或「**管理**」>「**幫浦**」）會開啟 Dana-i/RS 幫浦畫面。尚未配對幫浦時，畫面如下：
    
    ![Dana-i/RS 幫浦配對前的畫面](../images/v4/Pumps/dana_i_rs_pump_screen.png)

* 在幫浦畫面上，點選**配對**。 **AAPS** 會掃描附近的幫浦。

* 點選清單中的幫浦項目。
    
    ![配對畫面會列出掃描到的 Dana 幫浦](../images/DanaRS_i_Pairing.png)

* **您必須在幫浦上確認配對！**這和您熟悉的其他藍牙配對方式相同（例如，智慧型手機與汽車音響配對）。
    
    ![Dana RS 配對確認](../images/DanaRS_Pairing.png)

* 根據你的幫浦類型和韌體版本來執行配對過程：
    
    * 如果使用 DanaRS v1，**AAPS** 會要求您輸入**幫浦密碼（僅適用於 v1）**。請輸入幫浦密碼（請參閱[預設密碼](#DanaRS-Insulin-Pump-default-password)）。
    * 如果使用 DanaRS v3，**AAPS** 會要求您按下幫浦上的「OK」，並輸入幫浦上顯示的兩組數字與字母。請持續按住減號按鈕，讓幫浦畫面保持開啟，直到完成為止。接著點選**完成**。
    * 如果使用 Dana-i 或 Dana-i2，系統會顯示標準的 Android 配對對話方塊。請輸入幫浦上顯示的 6 位數字。

* 畫面顯示**配對成功！**時，點選**完成**。
    
    ![配對成功！](../images/v4/Pumps/dana_i_rs_pairing_success.png)
    
    接著會返回幫浦畫面，並顯示幫浦狀態。
    
    ![Dana-i/RS 幫浦配對後的畫面](../images/v4/Pumps/dana_i_rs_pump_screen_paired.png)

* 在**設定**中，選取**注射速度**，即可變更預設注射速度（12 秒/U、30 秒/U 或 60 秒/U）。

* 使用醫生選單將幫浦上的基礎速率步進設置為 0.01 U/h（參見幫浦使用指南）。
* 請使用醫師選單，將幫浦的注射步進值設為 0.05 U（請參閱幫浦使用手冊）。 **AAPS** 會從幫浦讀取基礎率和注射步進值，並將其套用於每次注射，因此注射量一定會符合幫浦上設定的步進值。幫浦畫面會在**基礎率／注射步進值**一列顯示這些數值。
* 啟用幫浦上的延時注射功能

### 僅部分型號會顯示的選項

* **自動鎖定**：Dana-i2 的**使用者選項**畫面（在幫浦畫面中選取「**管理**」>「**幫浦**」）有一個**自動鎖定**開關，可設定幫浦的自動鎖定功能。變更後，請按下**將選項儲存至幫浦**。
* **簡易模式**：具備簡易選單模式的幫浦型號，會在幫浦畫面中顯示**簡易模式**一列，並標示為**開啟**或**關閉**。
* 如果 Dana-i2 拒絕注射，**AAPS** 會顯示原因，例如 *幫浦尚未完成預充*、*儲藥槽中的胰島素不足*，或 *幫浦已開啟簡易睡眠模式*。

(DanaRS-Insulin-Pump-default-password)=

### 預設密碼

* 對於韌體版本 v1 和 v2 的 DanaRS，預設密碼為 1234。
* 對於韌體版本 v3 或 Dana-i，預設密碼來自製造日期，計算方式為 MMDD，其中 MM 是月份，DD 是製造日期（例如「0124」代表 1 月 24 日）。
    
    * 從主選單選擇「回顧」，然後從子選單打開「運送資訊」。
    * 第 3 位數是製造日期。 
    * 對於 v3/i，該密碼僅用於鎖定幫浦選單。這不會用於通訊，因此不需要在 AAPS 中輸入該密碼。

(DanaRS-Insulin-Pump-change-password-on-pump)=

## 更改幫浦密碼

* 按下幫浦上的「OK」按鈕
* 在主選單中選擇「選項」（按下箭頭按鈕多次向右移動）
    
    ![DanaRS 主選單](../images/DanaRSPW_01_MainMenu.png)

* 在選項選單中選擇「用戶選項」
    
    ![DanaRS 選項選單](../images/DanaRSPW_02_OptionMenu.png)

* 使用箭頭按鈕向下捲動至「11. 密碼」密碼
    
    ![DanaRS 11. 密碼](../images/DanaRSPW_03_11PW.png)

* 按下「OK」進入舊密碼。

* 輸入 **舊密碼** (預設密碼請參閱 [上方](#DanaRS-Insulin-Pump-default-password)) 並按下 OK
    
    ![DanaRS 輸入舊密碼](../images/DanaRSPW_04_11PWenter.png)

* 如果此處輸入了錯誤的密碼，將不會顯示失敗訊息！

* 設置**新密碼**（使用 + 和 - 按鈕更改數字 / 使用箭頭按鈕向右移動）。
    
    ![DanaRS 新密碼](../images/DanaRSPW_05_PWnew.png)

* 按下「OK」按鈕確認。

* 按下 OK 以儲存設定。
    
    ![DanaRS 儲存新密碼](../images/DanaRSPW_06_PWnewSave.png)

* 向下移動至「14. 退出」，然後按下 OK 以退出。
    
    ![DanaRS 退出](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Dana RS 特定錯誤

### 胰島素注射過程中的錯誤

如果在注射胰島素過程中 AAPS 與 Dana RS 之間的連線中斷（例如，你在 Dana RS 幫浦注射胰島素時走開手機），你將看到以下訊息並聽到警報聲。

![胰島素注射警報](../images/DanaRS_Error_bolus.png)

* 大多數情況下，這只是通訊問題，正確劑量的胰島素已經注射完畢。
* 請在幫浦記錄中確認是否已注射正確的胰島素量。您可以直接在幫浦上查看，也可以在 **AAPS** 的幫浦畫面中選取「**管理**」>「**幫浦**」>「**幫浦記錄**」>「**注射**」。
* 如有需要，您可以在[治療](#screens-bolus-carbs)中刪除錯誤項目。
* 下次連線時，系統會讀取並記錄實際注射量。如要強制執行此操作，請在幫浦畫面上點選**重新整理**，或等待下次連線。

## 更換手機時的特別注意事項

更換新手機時，需要進行以下步驟：

* [在舊手機上匯出設定](../Maintenance/ExportImportSettings.md)
* 將設定從舊手機傳輸至新手機

### DanaRS v1

* **手動配對** Dana RS 與新手機
* 匯入時，如果勾選**同時取代幫浦設定**，也會一併匯入幫浦連線設定。如此一來，新手機上的 AAPS 就會記住這台幫浦，不會再啟動藍牙掃描。因此必須手動將新手機與幫浦配對。
* 在新手機上安裝 AAPS。
* [在新手機上匯入設定](../Maintenance/ExportImportSettings.md)

### DanaRS v3、Dana-i、Dana-i2

* 開始配對程序，如上所述[以上](#DanaRS-Insulin-Pump-pairing-pump)。
* 有時您可能需要先清除 **AAPS** 中的配對資訊。在幫浦畫面中（「**管理**」>「**幫浦**」），點選**取消配對**，並確認**要重設配對資訊嗎？**接著再次點選 **配對**。

## 使用 DanaRS、Dana-i 和 Dana-i2 幫浦時跨時區旅行

有關跨時區旅行的訊息，請參見[幫浦旅行時的時區](#timezone-traveling-danarv2-danars)。

## 如何尋求協助

DanaRS／Dana-i／Dana-i2 驅動程式由社群以**志願**方式開發。尋求協助前，請先：

1. **閱讀**本文件中相關的章節，確認該功能的預期運作方式。
2. 在 [Discord](https://discord.gg/4fQUWHZ4Mw) 的 *#AAPS* 頻道，或其他[社群頻道](../GettingHelp/WhereCanIGetHelp.md)中**詢問**。
3. 若要**回報錯誤**，請先搜尋[現有問題](https://github.com/nightscout/AndroidAPS/issues)；如果沒有找到您的問題，請[建立新問題](https://github.com/nightscout/AndroidAPS/issues)，並附上您的[記錄檔](../GettingHelp/AccessingLogFiles.md)。

尋求協助時，請提供手機品牌和型號、Android 版本、**AAPS** 版本，以及清楚描述問題的內容（發生了什麼變化、上次正常運作的時間）。