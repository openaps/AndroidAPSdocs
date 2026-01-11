# Omnipod DASH

這些說明是用於設定 Omnipod DASH 這一代的幫浦（非 Omnipod Eros），自 AAPS 3.0 版起可用。

## Omnipod DASH 規格

以下是**Omnipod DASH**（簡稱「DASH」）的規格，以及它與**Omnipod EROS**（簡稱「EROS」）的區別：

- DASH 的 Pod 可藉由**藍色針帽辨識**（EROS 為透明針帽）。 這兩種 Pod 在物理尺寸上是相同的。
- DASH 不需要 BLE 連結/橋接設備（無需 RileyLink、OrangeLink 或 EmaLink）。
- DASH 的藍牙連線僅在傳送指令時（例如進行注射）使用，並會在發出指令後立即中斷連線。
- 使用DASH時再也不會出現「無法連線到連結設備/ Pod 」的錯誤。
- **AAPS**將等候 Pod 的可讀取性以發送指令。
- Pod 啟動時，**AAPS**將尋找並連接到新的DASH Pod 。
- 與手機的預期連線距離：5–10 公尺（實際情況可能不同）。

(omnipod-dash-constraints)=

## Omnipod DASH 已知的 AAPS 限制／問題
- Android 16 需要 AAPS 版本 3.3.2.1 或更新版本。
- 一般建議在 Android 14 或 16 上執行 AAPS。 Android 15 有許多社群回報的 [問題](https://github.com/nightscout/AndroidAPS/issues/3471)。 不過，若你在 Android 15 上執行，可能需要啟用藍牙配對（Bonding）才能成功註冊並使用 Pod；關於配對設定的更多資訊，請參閱 [一般疑難排解](../GettingHelp/GeneralTroubleshooting.md)。
- 過於頻繁的基礎率更新，可能在 Omnipod Dash 上導致基礎胰島素輸注的問題。 使用微量注射時，請將間隔至少設為 5 分鐘以避免此問題。
- Dash 僅支援以 0.05 U/h 步階設定的基礎率。 如果你在 AAPS 設定檔中嘗試以 0.01 的步階設定基礎率，即使 Pod 會將速率進位到 0.05 的步階，AAPS 也不會發出警示。 若你查看 POD MGMT/Pod History，會顯示已設定 0.05 的基礎率。 這也表示在 AAPS 中，DASH 允許的最低基礎率為 0.05 U/h。
- Pod 的註冊狀態會儲存在設定檔案中，如果你在 Pod 已註冊的狀態下匯出設定檔案。 接著更換為新的 Pod，然後再從先前匯出的設定還原，這會還原舊 Pod 的註冊狀態，並移除新 Pod 的註冊狀態。 因此建議每次註冊 Pod 後都匯出設定，以便在你的裝置出狀況時，能還原該 Pod 的註冊狀態。
- 當設定新的基礎率設定檔時，DASH 會先暫停輸注，然後再設定新的基礎率設定檔。 若通訊中斷或發生錯誤，基礎率設定檔不會自動重新開始。 詳細內容請參閱 [恢復胰島素輸注](#omnipod-dash-resuming-insulin-delivery) 章節。
- 如果已設定警示，且 Pod 即將到期，Pod 會持續發出嗶聲，直到將警示靜音為止；詳情請參閱 [靜音 Pod 警示](#omnipod-dash-silencing-pod-alerts)。
- 有多項已知的藍牙問題可能導致 Pod 註冊異常。 請參閱 [藍牙疑難排解](../GettingHelp/BluetoothTroubleshooting.md)，以了解已知問題與對應的解決方案。

(hardware-software-requirements)=

(omnipod-dash-hardware-software-requirements)=
## 硬體/軟體要求

- Omnipod DASH 可透過藍色的針頭蓋辨識。

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

- **一支相容的 Android 手機**且具備低功耗藍牙（BLE）（更多資訊請見[Phones](../Getting-Started/Phones.md)），另外，下列資訊可協助您在相容手機上順利註冊與使用 DASH 時的其他關鍵注意事項：
    -  **AAPS** 的 Omnipod Dash 驅動程式會透過藍牙與 DASH Pod 連線。  
      **AAPS** 會在每次需要傳送指令（例如注射）時，自動與 Pod 建立新的藍牙連線；在傳送完成後，會立即中斷連線。
       - **注意：**
         - 在執行 **AAPS** 的手機上，其他已連結的藍牙裝置（例如耳機等）可能會干擾或中斷藍牙連線。 這類裝置在某些手機型號上可能導致連線錯誤或 Pod 註冊問題。 在決定以 Omnipod DASH 建置新設備前，建議先查看[已測試的硬體組合](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)清單，以了解已知可運作的設定。
         - 有多項已知的藍牙問題可能導致 Pod 註冊異常（其他藍牙問題的建議請見 [問題排除](#troubleshooting)），特別是[藍牙相關問題](#omnipod-dash-bluetooth-related-issues)章節。
    - 對於 **Android 15** 或更早版本：您**必須**依照 [**Build APK**](../SettingUpAaps/BuildingAaps.md) 指南使用 **AAPS 3.0 或更新版本**；同時建議執行最新釋出的版本。
    - 對於 **Android 16**：因為 Android 16 變更了藍牙的運作方式，您**必須**依照 [**Build APK**](../SettingUpAaps/BuildingAaps.md) 指南使用 **AAPS 3.3.2.1 或更新版本**。 任何早於 3.3.2.1 的版本都很可能造成 Pod 異常與／或註冊[問題](https://github.com/nightscout/AndroidAPS/issues/3471)。
- 一個受支援的[**連續式血糖監測（CGM）**](../Getting-Started/CompatiblesCgms.md)

以下說明如何使用 **AAPS** 註冊新的 Pod 工作階段。 建議等目前的 Pod 接近到期時再進行，因為您需要使用 **AAPS** 註冊新的 Pod。 Pod 一旦停用後便無法重複使用或再次註冊，此動作為最終狀態。

## 在你開始之前

請確定您已完整閱讀並理解本指南、**開始前**章節，以及 **[Omnipod 與 AAPS 的限制與問題](#omnipod-dash-constraints)**，以避免遇到已知問題。

### **SAFETY FIRST** - You **SHOULD NOT** try to connect **AAPS** to a pod for the first time without having access to all of the following:
1. 備用 Pod（至少 3 顆）
2. 備用胰島素與 MDI 器材
3. 可正常使用的 Omnipod PDM（以防 **AAPS** 發生異常）
4. 必須使用受支援的手機！ （請參閱[硬體／軟體需求](#hardware-software-requirements)）
5. 已建置並安裝正確版本的 AAPS

### **Your Omnipod Dash PDM will become redundant after the AAPS Dash driver activates your pod.**
- 在使用 **AAPS** 之前，您或照護者必須使用 Omnipod PDM（或在某些地區使用手機 App）來管理 Pod，並向您的 DASH 傳送指令（例如注射）。
- DASH 一次只能由單一藍牙裝置（例如 PDM 或手機）連線以進行管理與傳送指令。
- 自成功註冊該 Pod 起，只有完成註冊的那台裝置被允許與該 Pod 通訊。 也就是說，一旦您使用 **AAPS** 透過 Android 手機註冊了 DASH，**之後將無法再用 PDM 操作該 Pod！**在該 Pod 啟動期間，執行於您 Android 手機上的 **AAPS** Dash 驅動程式即成為該 Pod 的新 PDM。
- **請勿丟棄您的 PDM！**建議保留做為備用與應急之用，例如手機遺失或 **AAPS** 無法正常運作時。

### Your pod **WILL NOT** stop delivering insulin when it is not connected to AAPS.
依照目前啟用中的[**設定檔**](../SettingUpAaps/YourAapsProfile.md)，Pod 會在註冊時被寫入預設基礎率。  
只要 **AAPS** 正常運作，它就會送出最長 120 分鐘的基礎率調整指令。  
若因任何原因 Pod 未收到新指令（例如 Pod 與 手機 距離過遠導致通訊中斷），Pod 會自動回復到您[**設定檔**](../SettingUpAaps/YourAapsProfile.md)中定義的預設基礎率。

### **AAPS Profile(s) do not support 30 minute basal rate time frames**
若您是 AAPS 新手並首次建立基礎率[**設定檔**](../SettingUpAaps/YourAapsProfile.md)，請注意：不支援以半小時為起點的基礎率。 例如：在您的 Omnipod PDM 上，若您有 1.1 單位、於 09:30 開始並持續 2 小時至 11:30 結束的基礎率，則無法在 **AAPS** 中完全複製相同的基礎**設定檔**。  
您需要將這個 1.1 單位的基礎率調整為 9:00–11:00 或 10:00–12:00 的時間範圍。 即使 DASH 硬體本身支援 30 分鐘增量的基礎率**設定檔**，**AAPS** 仍不支援此功能。

### **0U/h Profile basal rates are NOT supported in AAPS**
雖然 DASH 支援零基礎率，**AAPS** 會以使用者**設定檔**的基礎率倍數來決定自動治療；因此無法在零基礎率下運作。  
您可以改用「中斷幫浦連線」功能，或搭配「停用 循環／臨時基礎率」或「暫停 循環／臨時基礎率」來達成暫時的零基礎率。  
**注意：**在 **AAPS** 中，DASH 允許的最低基礎率為 0.05 U/h。

## 在AAPS中選擇DASH

在 **AAPS** 中設定 Omnipod 有**兩種**方式：

### Option 1: New installations

首次安裝 **AAPS** 時，**安裝嚮導**會引導新使用者了解 **AAPS** 的重點功能與安裝需求。  
當進入幫浦選擇時，請選擇「DASH」。

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

若不確定，您也可以選擇「Virtual Pump」，待完成 **AAPS** 設定後再選擇「DASH」（見選項 2）。

(omnipod-dash-option-2-config-builder)=
### Option 2: The Config Builder

在現有安裝中，你可以從組態建置工具中選擇**DASH**幫浦：

在左上角的**漢堡選單**中，選取**組態建置工具 (1)** ➜ **幫浦** ➜ **Dash**；勾選名為 **Dash** 的**單選按鈕 (2)**後，點選**設定齒輪 (3)**。

選中**設定齒輪(3)**旁邊的**復選框(4)**將使DASH選單顯示為**AAPS**介面的標籤**DASH**。 勾選此框將方便你在使用**AAPS**時訪問DASH指令。

**注意：** 有一個更快速的方式可以在本文件的DASH設定部分中找到，前往[**Dash設定**](#omnipod-dash-settings)。

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### Verification of Omnipod Driver Selection

若要確認您已在 **AAPS** 中選擇了 DASH，當您**勾選核取方塊 (4)**後，請從**總覽**分頁**向左滑**，此時您會在 **AAPS** 中看到 **DASH** 分頁。 如果此框未勾選，則DASH標籤將位於左上角的漢堡選單中。

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## Dash 配置

**向左滑**到[**DASH 分頁**](#omnipod-dash-tab)，即可管理所有 Pod 功能（若無作用中的 Pod 工作階段，部分功能不會啟用或顯示）：

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) “重新整理” Pod 的連接性和狀態，能夠靜音 Pod 在發出嗶聲時的警報。

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png)   “ Pod 管理”（啟動、停用、播放測試嗶聲及 Pod 歷史）

(omnipod-dash-activate-pod)=

### Activate Pod

1. 導航至**DASH**標籤，點擊**POD 管理（1）**按鈕，然後點擊**註冊 Pod（2）**。

   ![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)

   ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. 顯示**填充 Pod**畫面。 為新的 Pod 注入**至少 80 單位**的胰島素，並留意兩聲嗶聲，表示 Pod 已準備好進行灌注。

   ***注意：**計算 3 天所需的胰島素總量時，請將灌注 Pod 會消耗約 3–10 單位一併納入。*

   ![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)

   ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

   確保新的 Pod 與運行**AAPS**的手機處於近距離內，然後單擊**下一步**按鈕。

   ***注意**: 如果出現錯誤提示_“找不到可用的 Pod 以進行啟動”_（這可能會發生），請不要驚慌。 點擊 **重試** 按鈕。 在大多數情況下，註冊將繼續成功進行。*

   ![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

3. 在**初始化 Pod**螢幕上，Pod 會開始灌注（您會聽到一聲卡嗒，接著是一連串的滴答聲，表示 Pod 正在自我灌注）。  
   灌注成功後會顯示綠色勾勾，且**下一步**按鈕會變為可用。 點擊 **下一步** 按鈕，完成 Pod 排空初始化並顯示 **連線 Pod** 畫面。

   ![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. 接下來，準備好輸注部位以接收新的 Pod 。 洗手以避免任何感染風險。 以肥皂與清水清潔注射部位，或用酒精棉片消毒，並讓肌膚完全自然風乾後再繼續。   
   若膠貼造成肌膚刺激，可考慮使用隔離棉片或隔離噴霧。

   移除 Pod 的藍色塑料針頭蓋。 若您看到 Pod 有東西突出或外觀異常，請**立刻停止**操作並改用新的 Pod 重新開始。 若一切看起來 OK，請將黏膠背後的白色背紙撕下，然後把 Pod 貼在你選擇的身體部位。

   完成後，點擊 **下一步** 按鈕。

   ![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

6. 現在會出現 **連線 Pod** 對話框。 **只有在你已準備好要插入導管時，才點選 OK 按鈕！**

   ![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

7. 按下**確定**後，DASH可能需要一些時間才能響應並插入導管（最多1-2分鐘）。 **請耐心等候！**

   ***注意：**在插入導管前，建議先輕捏導管插入點附近的皮膚。 這有助於針頭順利插入，並減少堵塞的機會。*

   ![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

8. 當導管成功插入後，螢幕會顯示綠色核取記號，且 **Next** 按鈕會變為可選取。   
   點選 **Next** 按鈕。

   ![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

1. 顯示 **Pod 已註冊** 畫面。

   點擊綠色 **完成** 按鈕。

   恭喜！ 你現在已經開始一個新的藥量會話。

   ![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

2. 現在 **Pod 管理** 選單畫面應顯示 **註冊 Pod (1)** 按鈕為 *停用*，並顯示 **停用 Pod (2)** 按鈕為 *啟用*。 這是因為目前有一個 Pod 處於啟用狀態，必須先停用目前啟用的 Pod 才能註冊另一個 Pod。

    點擊手機上的返回按鈕，返回到 **DASH** 標籤畫面，該畫面現在會顯示你的啟用 Pod 的資訊，包括目前基礎率、Pod 儲液量、輸送的胰島素、Pod 錯誤和警報。

    ***注意：**如需瞭解顯示資訊的更多詳細內容，請參閱本文件的 [**DASH Tab**](#omnipod-dash-tab) 章節。*

   ![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)

   ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

   ***注意：**在註冊 Pod 之後匯出設定是很好的做法。 建議每次更換 Pod 後及每月匯出一次設定，並將匯出的設定檔複製到雲端儲存位置（例如 Google Drive）或手機以外的位置，以防手機遺失（請參閱 [**匯出設定**](../Maintenance/ExportImportSettings.md)）。*


(omnipod-dash-deactivate-pod)=

### Deactivate Pod

一般情況下，Pod 的預期使用壽命為 3 天（72 小時），在 Pod 到期警示後還可再使用 8 小時，總計可使用 80 小時。

要停用 Pod（不論是過期還是 Pod 故障）：

1. 前往 **DASH** 分頁，點選 **POD 管理 (1)** 按鈕，在 **Pod 管理 ** 畫面點選 **停用 Pod (2)** 按鈕。

   ![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

   ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. 在 **停用 Pod** 畫面上，點擊 **下一步** 按鈕開始停用 Pod 的流程。

   你會收到來自 Pod 的確認嗶聲，表示停用成功。

   ![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg)

   ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)

3. 停用成功後會顯示綠色核取記號。 點擊 **下一步** 按鈕以顯示 Pod 停用畫面。

   你現在可以移除 Pod，該使用階段已停用。

   ![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. 點擊綠色按鈕返回 **Pod 管理** 畫面。

   ![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. 現在你已進入 **Pod 管理** 選單；按下手機上的返回按鈕返回 **DASH** 標籤。

   確認 **Pod 狀態：** 欄位顯示 **無可用的 Pod** 訊息。

   ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

   ![Deactivate_Pod_8](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)


(omnipod-dash-resuming-insulin-delivery)=

### Resuming Insulin Delivery

**注意**：在進行 **設定檔切換（Profile Switches）** 期間（例如使用 PDM 時），AAPS 必須先在 Pod 上暫停輸注，才能設定新的基礎率 **設定檔**。 若在暫停與恢復指令之間通訊失敗，輸注可能會持續維持在暫停狀態。更多細節請在疑難排解章節閱讀 [**輸注已暫停**](#omnipod-dash-delivery-suspended)。

當胰島素輸注被暫停時，你需要下達指令，讓作用中但目前暫停的 Pod 恢復胰島素輸注。 命令成功處理後，胰島素將根據當前時間從活動的基礎**設定檔**恢復正常送藥。 藥量將再次接受注射、**TB** 和**SMB**的命令。

1. 進入 **DASH** 標籤，確認 **Pod 狀態 (1)** 欄位顯示 **已暫停**，然後按下 **恢復輸送 (2)** 按鈕以開始流程，指示目前的 Pod 恢復正常的胰島素輸送。 訊息 **恢復輸送** 將顯示在 **Pod 狀態 (3)** 欄位中。

   ![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. 當恢復輸送指令成功後，確認對話框將顯示訊息 **胰島素輸送已恢復**。 點擊 **OK** 以確認並繼續。

   ![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. **DASH** 標籤將更新 **Pod 狀態 (1)** 欄位，顯示 **運作中**，並且將不再顯示恢復輸送按鈕。

   ![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

(omnipod-dash-silencing-pod-alerts)=

### Silencing Pod Alerts

以下流程將向你展示當 Pod 的使用時間接近72小時（3天）到期的警告時，如何確認並關閉 Pod 的嗶聲。 此警告時間限制定義在 **距關閉時間的時數** Dash 警報設置中。 Pod 的最大使用壽命為 80 小時（3 天 8 小時），但 Insulet 建議不要超過 72 小時（3 天）限制。

***注意**：只有在觸發 Pod 到期或低藥量警示時，**DASH** 分頁上才會出現 **靜音警報 (3)** 按鈕。 如果看不到 **靜音警報** 按鈕，但你聽到 Pod 發出嗶聲，請嘗試「重新整理 Pod 狀態」。*

1. 當達到已設定的 **停用前的小時數** 警告時間門檻時，Pod 會發出警示嗶聲，提醒即將到期，並且很快需要更換 Pod。  
   你可以在 **DASH** 分頁確認，**Pod 到期 (1)** 欄位會顯示 Pod 的到期時間（註冊後 72 小時），且在超過此時間後文字會變為 **紅色**。  
   在 **啟用的 Pod 警報 (2)** 欄位下方，會顯示狀態訊息 **Pod 即將到期**。 這也會觸發顯示 **靜音警報 (3)** 按鈕。

   ![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. 前往 **DASH** 分頁，按下 **靜音警報 (2)** 按鈕。 **AAPS** 發送命令給藥量以停用藥量過期警告嗶聲，並更新**藥量狀態 (1)**字段為**確認警報**。

   ![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. **成功停用**警報後，啟用 Pod 將發出**兩聲嗶聲**，並且確認對話框將顯示訊息**註冊警報已靜音**。 點擊 **OK** 按鈕以確認並關閉對話框。

   ![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. 進入 **DASH** 標籤。 在 **啟用 Pod 警報** 欄位下，警告訊息將不再顯示，且活動 Pod 將不再發出 Pod 過期警告嗶聲。

(omnipod-dash-view-pod-history)=

### View Pod History

本節解釋如何檢視你的活動藥量歷史，並按不同操作類別進行篩選。 Pod 歷史工具允許你查看在其三天（72 - 80 小時）使用壽命期間提交到目前活動 Pod 的操作和結果。

此功能有助於驗證發送到 Pod 的注射劑量、臨時基礎率和基礎指令。 其餘類別對於問題排除和確定發生失敗前的事件順序很有幫助。

***注意：****只有最後一個指令可能會是未確認狀態**。 在最後一個「未確認」指令變為「已確認」或「已否決」之前，新的指令將不會被送出*。 將「未確認」指令「修復」的方法，是執行 **「重新整理 Pod 狀態」**。*

1. 進入 **DASH** 標籤，按下 **POD 管理 (1)** 按鈕以進入 **Pod 管理** 選單，然後按下 **Pod 歷史紀錄 (2)** 按鈕以進入 Pod 歷史紀錄畫面。

   ![Pod_history_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)  
   ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

2. 在 **Pod 歷史紀錄** 畫面中，顯示預設類別 **全部 (1)**，以逆序顯示所有 Pod **操作 (3)** 和 **結果 (4)** 的 **日期和時間 (2)**。 使用你的手機的**返回按鈕 2 次**返回主**AAPS**介面的**DASH**標籤。

   ![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(omnipod-dash-tab)=

## DASH 標籤

以下是主 AAPS 介面中 **DASH** 標籤的佈局說明及圖示和狀態欄位的含義。

***注意：**如果在 **DASH** 分頁的狀態欄位看到（不確定），你需要按下重新整理按鈕來清除，並重新整理 Pod 狀態。*

![DASH_Tab_1](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

### Fields



- **藍牙地址：** 顯示目前連線 Pod 的藍牙地址。

- **藍牙狀態：**顯示目前的連線狀態。

- **序列號：** 顯示目前啟用的 Pod 序列號。

- **韌體版本：** 顯示目前連線的韌體版本。

- **Pod 上的時間：** 顯示 Pod 上的目前時間。

- **Pod 狀態：** 顯示 Pod 狀態。

- **上次連線：** 顯示與 Pod 的最後一次通訊時間。

  - *片刻前* - 少於 20 秒前。

  - *不到一分鐘前* - 超過 20 秒但少於 60 秒前。

  - *1 分鐘前* - 超過 60 秒但少於 120 秒（2 分鐘）。

  - *XX 分鐘前* - 超過 2 分鐘，具體由 XX 的值定義。

- **上次注射：** 顯示發送到活動 Pod 的最後一次注射的劑量以及他是多長時間前發出的（以括號顯示）。

- **基礎率：** 顯示基礎率設定檔中目前時間的基礎率設定。

- **臨時基礎率：** 以以下格式顯示目前運作的臨時基礎率。
  - {每小時單位數} @{TBR 開始時間} ({運作分鐘數}/{TBR 總運作分鐘數})

  - 範例：* 0.00U/h @18:25 ( 90/120 minutes)

- **儲液量：** 當儲液量超過 50 單位時顯示 50+ 單位。 當儲液量低於 50 單位時，顯示確切的單位數。

- **總輸送量：** 顯示從儲液中輸送的胰島素總單位數。 這包含已使用和排空的胰島素。

- **錯誤：** 顯示遇到的最後一個錯誤。 檢閱 [Pod 歷史](#omnipod-dash-view-pod-history) 和日誌檔案以了解過去的錯誤和更詳細的資訊。

- **啟用 Pod 警報：** 保留目前啟用 Pod 上運作的警報。



### Buttons

![重新整理圖示](../images/DASH_images/Refresh_LOGO.png) 傳送重新整理指令給作用中的 Pod，以更新通訊。

  - *用於重新整理 Pod 狀態並消除顯示訊息的狀態欄位。*

  - *更多資訊請參閱下方的 [疑難排解](#omnipod-dash-troubleshooting) 章節。*

![POD 管理圖示](../images/DASH_images/POD_MGMT_LOGO.png)   導向至 Pod 管理選單。

![警報消音圖示](../images/DASH_images/ack_alert_logo.png) 按下後，會停用 Pod 的警報嗶聲與通知（到期、低藥量等）。

  - *該按鈕僅在 Pod 過期警告時間已過時顯示。*
  -  *成功解除後，此圖示將不再顯示。*

![恢復圖示](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png)    讓作用中、目前處於暫停的 Pod 恢復胰島素輸注。



### Pod Management Menu

下面說明從 **DASH** 分頁按下 **POD 管理 (1)** 按鈕進入的 **Pod 管理** 選單中，各圖示的用途。

![DASH_Tab_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

**下表說明各按鈕及其功能：**

| 按鈕 | 功能                                                         |
| -- | ---------------------------------------------------------- |
| 1  | 存取 Pod 管理設定                                                |
| 2  | [**啟動 Pod**](#omnipod-dash-activate-pod)：為新的 Pod 預充並註冊。    |
| 3  | [**停用 Pod**](#omnipod-dash-deactivate-pod)：停用目前作用中的 Pod。   |
| 4  | **播放測試嗶聲**：按下時在 Pod 上播放一次測試嗶聲。                             |
| 5  | [**Pod 歷史**](#omnipod-dash-view-pod-history)：顯示 Pod 的活動紀錄。 |


(omnipod-dash-settings)=

## Dash 設定

Dash 驅動程式設定可在左上角 **漢堡選單** 的 **組態建置工具 (1)** ➜ **幫浦**  **Dash** ➜ **設定齒輪 (3)** 中進行，方法是先選取名為 **Dash** 的 **按鈕 (2)**。 選擇**選框 (4)**旁邊的**設置齒輪 (3)**將允許 Dash 菜單在**AAPS**介面中作為標籤顯示，標題為**DASH**。

![Dash_settings_1](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

***注意：** 查看 **Dash 設定** 的更快方式是查看 **DASH** 標籤右上角的 **三點選單 (1)** 並從下拉選單中選擇 **Dash 偏好設定 (2)**。*

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

下方列出了設定組；大多數項目可透過切換開關啟用或停用：

***注意：**星號（\*）表示此項為預設啟用。*

### Confirmation beeps

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

提供來自藥筒的確認聲音提示，用於注射、基礎輸注、超微劑量(SMB)以及臨時基礎率(TBR)輸送和變更。

**注射嗶聲已啟用：**在進行注射時啟用或停用確認嗶聲。

**基礎嗶聲已啟用：**當設定新的基礎率、取消作用中的基礎率或變更目前的基礎率時，啟用或停用確認嗶聲。

**微量注射嗶聲已啟用：**在執行 SMB 微量注射時啟用或停用確認嗶聲。

**臨時基礎率嗶聲已啟用：**當設定或取消 TBR 臨時基礎率時，啟用或停用確認嗶聲。



### Alerts

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

提供**AAPS**的藥量過期、關閉、低藥量的警報，根據所定義的門檻值單位。

***注意：**自從警示被觸發並與 Pod 完成初次通訊後，AAPS 將一律針對任何警示發出通知。 解除通知不會取消警報，除非啟用了自動確認 Pod 警報功能。 若要手動解除警報，你必須進入 **DASH** 標籤，並按下 **靜音警報按鈕**。*

**到期提醒已啟用：**當達到所設定的停用前小時數時，啟用或停用 Pod 到期提醒。

**停用前的小時數：**定義作用中 Pod 自動停用前的時數；達到該時數時會觸發到期提醒。

**低藥量警示已啟用：**當 Pod 剩餘單位數達到「數量」欄位所定義的低藥量門檻時，啟用或停用警示。

**劑量單位數：**  到達此劑量單位數時，觸發 Pod 低儲量警示。



### Notifications

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

「通知」區段可讓使用者選擇偏好的通知與可聽見的手機提醒：當 **AAPS** 無法確定臨時基礎率、微量注射或注射的狀態，或當暫停輸注事件已成功時。

***注意：** 這些僅為通知，不會發出任何可聽見的嗶聲提醒。*

**為「無法確定臨時基礎率」的通知啟用音效：** 啟用或停用此設定，當 **AAPS** 無法確定是否成功設定臨時基礎率時，觸發可聽見的警示與視覺通知。

**為「無法確定微量注射（SMB）」的通知啟用音效：** 啟用或停用此設定，當 **AAPS** 無法確定微量注射是否成功送達時，觸發可聽見的警示與視覺通知。

**為「無法確定注射」的通知啟用音效：** 啟用或停用此設定，當 **AAPS** 無法確定注射是否成功送達時，觸發可聽見的警示與視覺通知。

**為「輸注已暫停」的通知啟用音效：** 啟用或停用此設定，當暫停輸注已成功時，觸發可聽見的警示與視覺通知。

## 手動操作 (ACT) 標籤

此分頁已在 **AAPS** 主文件中有完整說明，但本分頁仍有一些項目是 **DASH** 與有管式幫浦的差異，尤其是在安裝新 Pod 之後的流程。

1. 前往 **AAPS** 主介面的 **Actions（ACT）** 分頁。

2. 在**照護入口 (1)**部分，**胰島素**和**導管**字段將在**每次更換藥量後**其**時間重置**為0天和0小時。 這是根據 Omnipod 幫浦的設計和運作方式所設。 由於 Pod 直接將套管插入應用 Pod 的皮膚上，因此 Omnipod 幫浦不使用傳統的管路。 *因此，在更換 Pod 後，這些數值的時間將自動重置為零。* **幫浦電池時間** 不會被報告，因為 Pod 中的電池壽命始終比 Pod 的最大壽命（80 小時）長。 每個 Pod 內都包含 **幫浦電池** 和 **胰島素儲液器**。

   ![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### Level

**胰島素等級**

顯示的胰島素水平是 DASH 報告的數量。 然而，Pod 僅在儲液器低於 50 單位時報告實際的胰島素儲液量。 在此之前，會顯示「超過 50 單位」。 報告的數量並不精準：當 Pod 報告「空」時，大多數情況下儲液器仍有一些剩餘的胰島素單位。

DASH 概覽標籤將顯示如下所述：

  * **超過 50 單位** - 藥量報告目前儲存庫中有超過 50 單位。
  * **少於 50 單位** - Pod 報告的儲液器中剩餘的胰島素量。

附加說明：
  * **SMS** - 短訊回報數值為 50+ 單位。
  * **Nightscout** - 當超過 50 單位時，向 Nightscout 上傳數值為 50（版本 14.07 及更早版本）。  更新版本將在超過 50 單位時報告數值為 50+。

(omnipod-dash-troubleshooting)=

## 問題排除

(omnipod-dash-delivery-suspended)=

本節涵蓋使用 **AAPS** 搭配 Omnipod DASH 的常見已知問題與解決方案。 文件中也有 [一般疑難排解](../GettingHelp/GeneralTroubleshooting.md) 章節，請參閱，因為其中的相關主題也適用於部分 Pod 問題。

---

(omnipod-dash-bluetooth-related-issues)=

## **藍牙相關問題**

若遇到藍牙連線、幫浦 / Pods 中斷，或註冊與連線等已知問題，請參閱 [藍牙疑難排解](../GettingHelp/BluetoothTroubleshooting.md)

---
### Delivery suspended

  - 現在已無暫停按鈕。 如果你想要「暫停」藥量，你可以將臨時基礎率設置為零，持續 x 分鐘。
  - 在**設定檔切換**期間，DASH 必須在設置新的基礎**設定檔**之前暫停送藥。 如果兩個指令之間的通訊失敗，則輸送可能會保持暫停。 當這種情況發生時：
     - 將不會有胰島素輸送，包括基礎率、SMB、手動注射等。
     - 可能會通知某個指令未確認：這取決於失敗發生的時間。
     - **AAPS** 每 15 分鐘嘗試設置新的基礎設定檔。
     - **AAPS** 每 15 分鐘將顯示一則通知，告知送藥已暫停，如果送藥仍然暫停（恢復送藥失敗）。
     - 如果使用者選擇手動恢復供給，[**恢復供給**](#omnipod-dash-resuming-insulin-delivery)按鈕將會啟用。
     - 如果**AAPS**無法自行恢復送藥（如果藥量無法連線、聲音被靜音等情況會發生），藥量每分鐘將發出 4 次嗶聲，持續 3 分鐘，然後如果送藥暫停超過 20 分鐘將每 15 分鐘重複這個過程。
  - 對於未確認的指令，「重新整理 Pod 狀態」應能確認/否認他們。

*****注意：** 當您聽到來自 Pod 的嗶聲時，請不要在未檢查手機的情況下就假設輸送會持續進行，輸送可能仍維持暫停狀態，***所以您需要檢查！******

---
### Pod Failures

- Pod 會因多種問題偶爾發生故障，包括 Pod 本身的硬體問題。
- 建議不要向 Insulet 提出支援／更換案件，因為 AAPS 並非核准的 Pod 使用方式。
- 一份故障代碼列表可在 [**這裡找到**](https://github.com/openaps/openomni/wiki/Fault-event-codes)，以幫助確定原因。

---
### Preventing error 49 pod failures

此故障與指令的 Pod 狀態不正確或胰島素輸送指令中的錯誤有關。 這是當驅動程式和 Pod 對實際狀態存在分歧時發生的情況。 Pod（出於內建安全措施）隨後對不可恢復的錯誤代碼 49（0x31）作出反應，最終產生所謂的「尖叫聲」：那聲長且令人惱怒的嗶聲，只有在在 Pod 背面適當位置打個洞才能停止。 「49 Pod 故障」的確切原因通常難以追溯。 在某些情況下，這種故障可能發生（例如應用程式崩潰、運作開發版本或重新安裝）。

---

### Pump Unreachable Alerts

當在預先設定的時間內無法與 Pod 建立連線時，會觸發「幫浦無法使用」警示。 您可以前往右上角三點選單，選取 **偏好設定** ➜ **本機警示** ➜ **幫浦無法使用門檻 [分鐘]** 來設定「幫浦無法使用」警示。 建議設置的值是**120** 分鐘後提醒。

---
### Export  Settings

匯出**AAPS**設置可讓你恢復所有設置，可能更重要的是，恢復所有目標。 你可能需要將設置恢復至「最後一次正常運作的狀況」，或在卸載/重新安裝**AAPS**後，或在手機遺失的情況下，在新手機上重新安裝。

***注意：** 作用中的 Pod 資訊會包含在匯出的設定中。 如果你匯入了「舊」的匯出檔案，你的目前 Pod 會「失效」。 沒有其他選擇。 在某些情況下（如_程式化_的手機更換），你可能需要使用匯出的檔案來恢復**AAPS'**設置**同時保持當前活動的藥量**。 在這種情況下，重要的是需要包含目前啟用 Pod 的最新匯出設定檔案。*

**啟動 Pod 後立即匯出是一種好習慣**。 這樣，你將能夠在發生問題時恢復當前活動的藥量。 例如，當你更換備用手機時。

請定期（最好在每次匯出後）將您匯出的設定複製到安全的位置（例如雲端硬碟，如 Google Drive），以便在需要時任何手機都能存取。 如此一來，若您在外時手機遺失或執行恢復原廠設定，便能從任何地方將設定還原到一支手機。

---
### Import Settings

**警告**：請注意，匯入設定時可能會匯入過期的 Pod 狀態（取決於您上次匯出／備份的時間）。  
因此，**有遺失作用中 Pod 的風險！**（請參閱 **匯出設定**）。
1. 僅在沒有其他選項時，才嘗試匯入。
2. 當匯入具有啟用的 Pod 設定時，請確保匯出是在目前啟用的 Pod 下進行的。

**在有啟用 Pod 的情況下匯入：**（你有失去 Pod 的風險！）

1. **請確保您匯入的是最近、且與目前作用中 Pod 一同匯出的設定！**
2. 匯入你的設定。
3. 檢查所有偏好設定。

**匯入（沒有啟用的 Pod 連線）**

1. 匯入任何最近的匯出應該可以工作（見上文）。
2. 匯入你的設定。
3. 檢查所有偏好設定。
4. 如果匯入的設定包含任何活動的 Pod 資料，您可能需要**停用**「不存在」的 Pod。

---
### Importing settings that contain Pod state from an inactive Pod

當匯入包含已不再啟用的 Pod 資料時，AAPS 將嘗試與其連線，這顯然會失敗。 在這種情況下，你無法啟動新 Pod。

要移除舊的 Pod 工作階段：
1. 「嘗試」停用 Pod。 此停用動作很可能會失敗。
2. 選擇「重試」。
3. 在第二次或第三次重試後，你將獲得移除 Pod 的選項。
4. 一旦舊藥量被移除，你將能夠啟動新的藥量。

---
### Reinstalling AAPS

當解除安裝 **AAPS** 時，您將會遺失所有設定、目標以及目前的 Pod 工作階段。 **若要還原它們，請務必備妥最新的匯出設定檔！**

當在活動藥量中時，請確保你有當前藥量會話的匯出，否則在匯入舊設置時將失去目前的活動藥量。

1. 請匯出您的設定，並將副本儲存在安全的位置（例如 Google Drive）。
2. 卸載**AAPS**並重新啟動你的手機。
3. 安裝新的**AAPS**版本。
4. 匯入你的設定。
5. 驗證所有偏好設定（選擇性地再次匯入設置）。
6. 啟動新的藥量。
7. 完成後：匯出目前設定。

---
### Updating AAPS to a newer version

在大多數情況下，無需卸載。 你可以透過啟動新版本的安裝進行「就地」安裝。 即使目前正處於作用中的 Pod 工作階段，也可以這麼做。

1. 匯出你的設定。
2. 安裝新的**AAPS**版本。
3. 驗證安裝是否成功。
4. 恢復藥量或啟動新的藥量。
5. 完成後：匯出目前設定。

---
### Omnipod driver alerts

**Omnipod Dash** 驅動程式會在 **總覽 分頁** 顯示多種獨特警示，其中多數為資訊性並可關閉，另有一些會提供需要使用者輸入的動作，以解決觸發該警示的原因。

你可能會遇到的主要警報總結如下：

- 未偵測到啟動的幫浦會話。 按下**稍後提醒**可以暫時忽略此警報，但只要未啟動新 Pod，他就會持續觸發。 當此警報啟動後，會自動靜音。
- 藥量已暫停 資訊警報，藥量已被暫停。
- 設置基礎**設定檔**失敗：送藥可能已被暫停！ 請手動從 Omnipod 標籤中重新整理 Pod 狀態並在需要時恢復輸送。 資訊警報，藥量基礎**設定檔**設置失敗，你需要在 Omnipod 標籤上點擊*重新整理*。
- 無法驗證**SMB**注射是否成功。 如果你確定注射未成功，應手動從治療中刪除 SMB 項目。 警報：無法驗證**SMB**注射指令成功與否，你需要在 DASH 標籤上確認*最後一次注射*字段，以查看**SMB**注射是否成功，如果沒有，請從治療標籤中移除該條目。
- 不確定「任務注射/TBR/SMB」是否完成，請手動確認是否成功。

(omnipod-dash-where-to-get-help-for-dash)=

## 有關 DASH 的幫助資訊

所有 DASH 的開發工作都是由社區以**志願者**的身份進行的；請記住這一點，在要求協助之前使用以下準則：

-  **等級 0：** 閱讀此文件的相關部分，以確保你了解遇到困難的功能應如何工作。
-  **等級 1：** 如果你仍然遇到無法解決的問題，請使用[此邀請鏈接](https://discord.gg/4fQUWHZ4Mw)進入**Discord**的*#AAPS* 頻道。 也有許多 Facebook 與其他社群可供提問（請參閱 [**Getting Help**](../GettingHelp/WhereCanIGetHelp.md)）。
-  **等級 2：** 搜尋現有問題，以查看你的問題是否已被報告，請在[問題](https://github.com/nightscout/AndroidAPS/issues)中確認/評論/添加有關你的問題的訊息。 如果沒有，請建立一個[新問題](https://github.com/nightscout/AndroidAPS/issues)並附上[你的日誌文件](../GettingHelp/AccessingLogFiles.md)。
-  **保持耐心——我們社群中的大多數成員都是善良的志願者，解決問題通常需要使用者和開發者雙方的時間和耐心。**

當您尋求協助時，請先準備以下資訊，以便社群成員更有效地協助解決您的問題與疑問：
- Android 手機的品牌與型號
- Android 作業系統版本（例如 15 或 16）
  - 您最近是否升級了 Android 作業系統版本？
- 您正在執行的 **AAPS** 版本
- 請用簡明的英文描述您遇到的問題，並考量以下事項
   - 之前是否可以正常運作？
   - 從什麼時候開始可以或不可以運作？
   - 您是否變更了任何設定或設定檔的設定？
   - 您是否配對了新的藍牙裝置？
   - 您是否升級或安裝了新的應用程式？
   - 在停止運作之前，它運作了多久？
