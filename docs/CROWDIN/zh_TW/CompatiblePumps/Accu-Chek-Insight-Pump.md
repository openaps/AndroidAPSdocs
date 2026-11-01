# Accu-Chek Insight

**此軟體是DIY人工胰臟解決方案的一部分，不是產品， 你需要閱讀、學習並暸解整個系統，包括如何使用他。他並不是為你自動管理所有糖尿病控制，而是 讓你在投入必要時間的前提下，提升糖尿病管理和生活品質。不要急於使用， 請給自己時間學習。你對自己 所做的決定負全部責任。**

```{admonition} Accu-Chek Insight 即將停售 :class: note

Roche 正退出胰島素幫浦市場，將糖尿病產品組合的重心轉向 Accu-Chek SmartGuide CGM。 Roche 已宣布 Accu-Chek Combo 和 Accu-Chek Insight 幫浦即將停售；目前仍在販售的 Accu-Chek Solo 微型幫浦也將逐步停產（德國最後一批交貨時間為 2025 年底）。這項變更將分區推行，從德國開始，預計其他歐洲市場也會跟進。 Insight 的支援已列為結束（請參閱 [已停售的幫浦](./Future-possible-Pump-Drivers.md)）。如果你目前使用這款幫浦，請提前規劃轉換至受支援的幫浦。

    <br />```{note}
    在 **AAPS** 尚未內建 Insight 驅動程式之前，Insight 是透過獨立的 [SightRemote](https://github.com/TebbeUbben/SightRemote) App 控制。現在已不需要使用或維護 SightRemote：如果你當年安裝了這個 App，請將它解除安裝，改用最新版的 **AAPS**。
    

```{contents} 目錄 :depth: 1 :local: true

    <br />## AAPS 支援的幫浦功能
    
    * 透過手機內建的藍牙與 **AAPS** 通訊，不需要額外的通訊裝置。
    * 自動夏令時間（DST）與時區處理.
    
    ## 硬體與軟體需求
    
    * Roche Accu-Chek Insight 幫浦（任何韌體版本皆可使用）
    
    注意：AAPS 一律會將資料寫入幫浦中的**第一個基礎率設定檔**。
    
    * 搭載 Android 12 或更新版本的 Android 手機（請參閱[手機](../Getting-Started/Phones.md)）
    * 已安裝 AAPS App 的手機
    
    ## 設定
    
    * Insight 幫浦同一時間只能連線至一部裝置。如果你之前使用過 Insight 遙控器（血糖機），必須將血糖機從幫浦的已配對裝置清單中移除：**選單** > **設定** > **通訊** > **移除裝置**。
    
       ![移除 Insight 血糖機的螢幕截圖](../images/Insight_RemoveMeter.png)
    
    * 在 [組態設定工具 > 幫浦](#Config-Builder-pump)中，選取 **Accu-Chek Insight** 卡片。同一時間只能啟用一台幫浦。
    
       ![組態設定工具 > 幫浦中的 Accu-Chek Insight 外掛](../images/v4/Configuration/configuration_pump_list_1.png)
    
       選取後，**Accu-Chek Insight** 卡片上會顯示兩個按鈕：**設定**和**開啟外掛**：
    
       ![在組態設定工具 > 幫浦中選取的 Accu-Chek Insight 外掛](../images/v4/Pumps/accu_chek_insight_enabled.png)
    
       按下**設定**即可開啟 Accu-Chek Insight 驅動程式的設定（請參閱 [AAPS 中的設定](#Accu-Chek-Insight-Pump-settings-in-aaps)）。
    
       按下**開啟外掛**（或 **管理 → 幫浦**）即可開啟 Accu-Chek Insight 幫浦畫面。配對幫浦前，畫面如下：
    
       ![配對前的 Accu-Chek Insight 幫浦畫面](../images/v4/Pumps/accu_chek_insight_pump_screen.png)
    
    (accu-chek-insight-pairing)=
    ### 配對
    
    * 在幫浦畫面上，點選 **Insight 配對**。配對嚮導會開啟並搜尋附近的藍牙裝置（如下圖上半部）。
    * 在 Insight 幫浦上，前往 **選單** > **設定** > **通訊** > **新增裝置**。幫浦會顯示下圖下半部的畫面，其中包含幫浦的序號。
    
       ![Insight 配對 1 的螢幕截圖](../images/Insight_Pairing1.png)
    
    * 回到手機，點選藍牙裝置清單中的幫浦序號。如果 Android 要求你確認配對，請點選**配對**。
    
       ![Insight 配對 2 的螢幕截圖](../images/Insight_Pairing2.png)
    
    * 幫浦和手機都會顯示一組代碼。確認兩台裝置上顯示的代碼相同。在幫浦上確認，並在手機上點選**是**。（如果代碼不相同，請點選**否**。）
    
       ![Insight 配對 3 的螢幕截圖](../images/Insight_Pairing3.png)
    
    * 手機會顯示**配對完成**。點選**退出**，返回幫浦畫面。
    
       ![Insight 配對 4 的螢幕截圖](../images/Insight_Pairing4.png)
    
    * 若要確認一切正常，請查看幫浦畫面（**管理 → 幫浦**）。幫浦配對後，畫面會顯示幫浦相關資訊，例如**序號**、**製造日期**、**韌體版本**和**藍牙位址**。
    
       ![Insight 配對資訊的螢幕截圖](../images/Insight_PairingInformation.png)
    
       ```{admonition} 舊版螢幕截圖
       :class: note
       除了第一張圖片的上半部之外，上方的配對螢幕截圖皆取自較舊版本的 **AAPS**，在 **AAPS** 4 中可能會有所不同。
       ``` 
    
    * 若要取消配對，請在幫浦畫面上點選**取消配對**，並確認**重設配對資訊？**。接著會再次顯示 **Insight 配對**按鈕。
    
    注意：幫浦和手機之間不會一直保持連線。 **AAPS** 只會在需要時連線（例如設定臨時基礎率、注射或讀取幫浦歷史記錄時）。否則手機和幫浦的電池電量會消耗得太快。
    
    (Accu-Chek-Insight-Pump-settings-in-aaps)=
    ## AAPS 中的設定
    
    在 **組態設定工具** > **幫浦**中的 **Accu-Chek Insight** 卡片上點選**設定**，或點選幫浦畫面右上角的齒輪圖示，即可開啟設定。
    
    ![Accu-Chek Insight driver settings](../images/v4/Pumps/accu_chek_insight_settings.png)
    
    In the Insight settings in **AAPS** you can enable the following options:
    
    * **Log reservoir changes**: automatically records an insulin cartridge change when you change the cartridge in the pump.
    
    * **記錄導管更換**：在幫浦上執行「填充導管」程序時，將備註新增至 **AAPS** 資料庫。
    
    * **記錄輸注部位更換**：在幫浦上執行「填充套管」程序時，將備註新增至 **AAPS** 資料庫。**注意：更換注射部位也會重設自動敏感度調整。**
    
    * **記錄電池更換**：在幫浦中裝入新電池時記錄更換電池的時間。
    
    * **記錄運作模式變更**：每當您啟動、停止或暫停幫浦時，便會在 **AAPS** 資料庫中新增一則備註。
    
    * **記錄警示**：每當幫浦發出警示時，便會在 **AAPS** 資料庫中新增一則備註（提醒、注射取消和 TBR 取消除外，這些情況不會記錄）。
    
    * **啟用 TBR 模擬**：Insight 幫浦設定的臨時基礎率（TBR）最高只能達 250%。若要突破此限制，當要求設定超過 250% 的 TBR 時，TBR 模擬會指示幫浦以延長注射方式輸送額外的胰島素。
    
      **注意：一次只能使用一個延長注射。同時使用多個延長注射可能會造成錯誤。**
    
    * **停用手動注射時的震動**：Insight 幫浦在輸送手動注射（或延長注射）時不會震動。僅適用於 Insight 韌體 3.x。
    
    * **停用自動注射時的震動**：Insight 幫浦在輸送自動注射（SMB 或透過 TBR 模擬設定的臨時基礎率）時不會震動。僅適用於 Insight 韌體 3.x。
    
    * **最短復原時間[秒]**和**最長復原時間[秒]**：連線嘗試失敗後，**AAPS** 等待多久才會再次嘗試。你可以選擇0到20秒。如果您遇到連線問題，請設定較長的等待時間。
        <br><br>恢復時間範例：最小恢復時間=5，最大復原時間 = 20
        <br><br>連線失敗 -> 等待 <b>5</b> 秒。
          <br>  再試一次 -> 連線失敗 -> 等待 <b>6</b> 秒。
          <br>  再試一次 -> 連線失敗 -> 等待 <b>7</b> 秒。
          <br>  再試一次 -> 連線失敗 -> 等待 <b>8</b> 秒。
          <br>...
          <br>再試一次 -> 連線失敗 -> 等待 <b>20</b> 秒。
          <br>再試一次 -> 連線失敗 -> 等待 <b>20</b> 秒。
          <br>...
    
    * **中斷連線延遲時間 [秒]**：操作完成後，**AAPS** 等待多久（以秒為單位）才會中斷與幫浦的連線。你可以選擇0到15秒。預設值為 5 秒。
    
    幫浦停止運作期間，**AAPS** 會記錄 0% 的臨時基礎率。
    
    ### 幫浦畫面
    
    Accu-Chek Insight 幫浦畫面（**管理 → 幫浦**）會顯示幫浦目前的狀態，例如 **狀態**、**上次連線時間**、**運作模式**、**電池**、**藥量**、今天的每日總劑量（**總注射量**、**總基礎胰島素量**）、基礎率和上次注射量。幫浦完成配對後，畫面上會出現以下按鈕：
    
    * **重新整理**：重新整理幫浦狀態。
    * **啟用 TBR 結束通知（幫浦設定）** / **停用 TBR 結束通知（幫浦設定）**：標準版 Insight 幫浦會在 TBR 結束時發出警示音。按下此按鈕即可開啟或關閉警示音，無須使用組態設定軟體。
    * **取消配對**：移除與幫浦的配對（請參閱[配對](#accu-chek-insight-pairing)）。
    
    ![Insight 狀態畫面截圖](../images/Insight_Status2.png)
    
    ```{admonition} 舊版截圖
    :class: note
    上方截圖擷取自較舊版本的 **AAPS**。在 **AAPS** 4 中，幫浦畫面有所不同，也新增了 **取消配對** 按鈕。
    

## 幫浦中的設定

配置幫浦中的警報如下：

* 選單 > 設定 > 裝置設定 > 模式設定 > 靜音 > 信號 > 聲音
* 選單 > 設定 > 裝置設定 > 模式設定 > 靜音 > 音量 > 0（移除所有條）
* 選單 > 模式 > 信號模式 > 靜音

這將使幫浦靜音，允許 AAPS 決定警報是否與你相關。如果 AAPS 未確認警報，其音量將增加（先是嗶聲，然後是震動）。

(Accu-Chek-Insight-Pump-vibration)=

### 震動

根據你幫浦的韌體版本，Insight 每次注射時都會短暫震動（例如，當 AAPS 發出 SMB 或 TBR 仿真發送延長注射時）。

* 韌體 1.x：設計上沒有震動。
* 韌體 2.x：無法停用震動。
* 韌體 3.x：AAPS 安靜地發送注射。

你可以在選單中找到韌體版本。

## 電池更換

Battery life for Insight when looping ranges from 10 to 14 days, maximum 20 days. 報告此電池壽命的用戶使用的是 Energizer 鋰電池。

Insight 幫浦有一個小型內部電池，可在更換可拆卸電池時維持時鐘等重要功能的運作。如果更換電池的時間過長，內部電池可能會耗盡電力，時鐘將重置，並且在插入新電池後你需要重新設置時間和日期。如果發生這種情況，更換電池前在 AAPS 中的所有紀錄將不再包括在計算中，因為無法正確識別正確的時間。

(Accu-Chek-Insight-Pump-insight-specific-errors)=

## Insight 特定錯誤

### 延長注射

一次只使用一個延長注射，因為同時多次延長注射可能會導致錯誤。

### 逾時

有時 Insight 幫浦在 **AAPS** 建立連線時不會回應。此時 **AAPS** 會顯示通知：「交握逾時－重設藍牙」。

![Insight 重置藍牙](../images/Insight_ResetBT.png)

如果發生這種情況，請將幫浦和手機上的藍牙都關閉約 10 秒，再重新開啟。

## 跨時區使用 Insight 幫浦

有關跨時區旅行的訊息，請參見[幫浦旅行時的時區](#timezone-traveling-insight)。

## 如何尋求協助

Insight 驅動程式由社群成員以**志工**方式開發。尋求協助前，請先：

1. **閱讀**本文件中相關的章節，確認該功能的預期運作方式。
2. 在 [Discord](https://discord.gg/4fQUWHZ4Mw) 的 *#AAPS* 頻道，或其他[社群頻道](../GettingHelp/WhereCanIGetHelp.md)中**詢問**。
3. 若要**回報錯誤**，請先搜尋[現有問題](https://github.com/nightscout/AndroidAPS/issues)；如果沒有找到您的問題，請[建立新問題](https://github.com/nightscout/AndroidAPS/issues)，並附上您的[記錄檔](../GettingHelp/AccessingLogFiles.md)。

尋求協助時，請提供手機品牌和型號、Android 版本、**AAPS** 版本，以及清楚描述問題的內容（發生了什麼變化、上次正常運作的時間）。