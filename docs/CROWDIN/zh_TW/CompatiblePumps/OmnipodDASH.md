# Omnipod DASH

這些說明適用於配置 **Omnipod DASH** 世代幫浦**（不包括 Omnipod Eros）**。 DASH 驅動程式是搭配 Omnipod 使用循環功能的成熟方式。

```{contents} Table of contents
:depth: 1
:local: true
```

## Omnipod DASH 規格

**Omnipod DASH**（「DASH」）的主要特點：

- DASH 藥匣的辨識方式是**藍色針頭護蓋**（較舊的 EROS 藥匣使用透明針頭護蓋）。這兩種 Pod 在物理尺寸上是相同的。
- DASH 不需要 BLE 連結/橋接設備（無需 RileyLink、OrangeLink 或 EmaLink）。
- DASH 的藍牙連線僅在傳送指令時（例如進行注射）使用，並會在發出指令後立即中斷連線。
- **AAPS**將等候 Pod 的可讀取性以發送指令。
- Pod 啟動時，**AAPS**將尋找並連接到新的DASH Pod 。
- 與手機的預期連線距離：5–10 公尺（實際情況可能不同）。

(omnipod-dash-constraints)=

## Omnipod DASH 已知的 AAPS 限制／問題
- 一般建議在 Android 14 或 16 上執行 AAPS。 Android 15 有許多社群回報的 [問題](https://github.com/nightscout/AndroidAPS/issues/3471)。不過，如果您使用 Android 15，可能需要開啟**藍牙配對**（位於 [DASH 設定](#omnipod-dash-advanced-settings)中的**進階設定**區段），才能成功啟動及使用藥匣。如需更多配對設定的資訊，請參閱[一般疑難排解](../GettingHelp/GeneralTroubleshooting.md)。
- 夏令時間和時區變更不會自動套用。變更時間後，您必須手動更新藥匣：在 DASH 幫浦螢幕上按下**重新整理**，接著按下**設定時間**（藥匣與手機的時區不同時會顯示此選項），或執行**設定檔切換**（請參閱[Omnipod DASH 的時區變更](#timezone-traveling-with-pumps)）。
- Dash 僅支援以 0.05 U/h 步階設定的基礎率。如果你嘗試在 **AAPS 設定檔** 中以 0.01 的步階設定基礎率，AAPS 不會提出警告，儘管 Pod 會將該速率進位到 0.05 的步階。如果您在 DASH 幫浦螢幕上開啟**藥匣記錄**，會看到已設定 0.05 的基礎率。這也表示在 AAPS 中，DASH 允許的最低基礎率為 0.05 U/h。
- 設定檔包含目前使用中的藥匣工作階段。每次啟動藥匣後，請匯出設定檔；匯入設定檔之前，請參閱[匯出及匯入設定檔](#omnipod-dash-export-import)。
- 當設定新的基礎率設定檔時，DASH 會先暫停輸注，然後再設定新的基礎率設定檔。若通訊中斷或發生錯誤，基礎率設定檔不會自動重新開始。詳細內容請參閱 [恢復胰島素輸注](#omnipod-dash-resuming-insulin-delivery) 章節。
- 如果已設定警示，且 Pod 即將到期，Pod 會持續發出嗶聲，直到將警示靜音為止；詳情請參閱 [靜音 Pod 警示](#omnipod-dash-silencing-pod-alerts)。
- 有多項已知的藍牙問題可能導致 Pod 註冊異常。請參閱 [藍牙疑難排解](../GettingHelp/BluetoothTroubleshooting.md)，以了解已知問題與對應的解決方案。

(hardware-software-requirements)=

(omnipod-dash-hardware-software-requirements)=
## 硬體和軟體需求

- Omnipod DASH 可透過藍色的針頭蓋辨識。

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

- **一支相容的 Android 手機**且具備低功耗藍牙（BLE）（更多資訊請見[Phones](../Getting-Started/Phones.md)），另外，下列資訊可協助您在相容手機上順利註冊與使用 DASH 時的其他關鍵注意事項：
    -  **AAPS** 的 Omnipod Dash 驅動程式會透過藍牙與 DASH Pod 連線。  
      **AAPS** 會在每次需要傳送指令（例如注射）時，自動與 Pod 建立新的藍牙連線；在傳送完成後，會立即中斷連線。
       - **注意：**
         - 在執行 **AAPS** 的手機上，其他已連結的藍牙裝置（例如耳機等）可能會干擾或中斷藍牙連線。這類裝置在某些手機型號上可能導致連線錯誤或 Pod 註冊問題。選擇用於 Omnipod DASH 設定的手機時，建議查看[已測試的硬體設定](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)清單，確認哪些設定已知可正常運作。
         - 有多項已知的藍牙問題可能導致 Pod 註冊異常（其他藍牙問題的建議請見 [問題排除](#troubleshooting)），特別是[藍牙相關問題](#omnipod-dash-bluetooth-related-issues)章節。
    - 手機必須執行 **Android 12 或更新版本**，並依照[**建置 APK**](../SettingUpAaps/BuildingAaps.md)的說明建置並安裝 **AAPS**。請務必使用最新發布版本。
- 一個受支援的[**連續式血糖監測（CGM）**](../Getting-Started/CompatiblesCgms.md)

以下說明如何使用 **AAPS** 註冊新的 Pod 工作階段。建議等目前的 Pod 接近到期時再進行，因為您需要使用 **AAPS** 註冊新的 Pod。 Pod 一旦停用後便無法重複使用或再次註冊，此動作為最終狀態。

## 開始之前

請確定您已完整閱讀並理解本指南、**開始前**章節，以及 **[Omnipod 與 AAPS 的限制與問題](#omnipod-dash-constraints)**，以避免遇到已知問題。

### **安全第一**—在無法取得以下所有項目時，您**不應該**首次嘗試將 **AAPS** 連線到 Pod：
1. 備用 Pod（至少 3 顆）
2. 備用胰島素與 MDI 器材
3. 可正常使用的 Omnipod PDM（以防 **AAPS** 發生異常）
4. 必須使用受支援的手機！（請參閱[硬體／軟體需求](#hardware-software-requirements)）
5. 已建置並安裝正確版本的 AAPS

### 當 AAPS Dash 驅動程式註冊您的 Pod 後，您的 Omnipod Dash PDM 將形同冗餘。
- 在使用 **AAPS** 之前，您或照護者必須使用 Omnipod PDM（或在某些地區使用手機 App）來管理 Pod，並向您的 DASH 傳送指令（例如注射）。
- DASH 一次只能由單一藍牙裝置（例如 PDM 或手機）連線以進行管理與傳送指令。
- 自成功註冊該 Pod 起，只有完成註冊的那台裝置被允許與該 Pod 通訊。也就是說，一旦您使用 **AAPS** 透過 Android 手機註冊了 DASH，**之後將無法再用 PDM 操作該 Pod！**在該 Pod 啟動期間，執行於您 Android 手機上的 **AAPS** Dash 驅動程式即成為該 Pod 的新 PDM。
- **請勿丟棄您的 PDM！**建議保留做為備用與應急之用，例如手機遺失或 **AAPS** 無法正常運作時。

### 您的 Pod 在未連線到 AAPS 時**並不會**停止輸注胰島素。
依照目前啟用中的[**設定檔**](../SettingUpAaps/YourAapsProfile.md)，Pod 會在註冊時被寫入預設基礎率。  
只要 **AAPS** 正常運作，它就會送出最長 120 分鐘的基礎率調整指令。  
若因任何原因 Pod 未收到新指令（例如 Pod 與 手機 距離過遠導致通訊中斷），Pod 會自動回復到您[**設定檔**](../SettingUpAaps/YourAapsProfile.md)中定義的預設基礎率。

### AAPS 的設定檔不支援 30 分鐘為單位的基礎率時間區段
若您是 AAPS 新手並首次建立基礎率[**設定檔**](../SettingUpAaps/YourAapsProfile.md)，請注意：不支援以半小時為起點的基礎率。例如，在你的 Omnipod PDM 上，若你有一個基礎率為 1.1 單位、於 09:30 開始、持續 2 小時並於 11:30 結束，則無法在 **AAPS** 中重現這個完全相同的基礎率 **設定檔**。  
你需要將這個 1.1 單位的基礎率改成 9:00-11:00 或 10:00-12:00 的時間範圍。即使 DASH 硬體本身支援 30 分鐘增量的基礎率**設定檔**，**AAPS** 仍不支援此功能。

### AAPS 不支援 0 U/h 的設定檔基礎率
雖然 DASH 支援零基礎率，**AAPS** 會以使用者**設定檔**的基礎率倍數來決定自動治療；因此無法在零基礎率下運作。  
您可以改用「中斷幫浦連線」功能，或搭配「停用 循環／臨時基礎率」或「暫停 循環／臨時基礎率」來達成暫時的零基礎率。  
**注意：**在 **AAPS** 中，DASH 允許的最低基礎率為 0.05 U/h。

## 在AAPS中選擇DASH

選取 Omnipod DASH 驅動程式有**兩種**方式，可在**AAPS** 中進行：

### 選項 1：新安裝

首次安裝**AAPS** 時，**設定精靈**會引導您了解**AAPS** 的主要功能和安裝需求。進入**幫浦**步驟時，請選取 **Omnipod Dash**。

![設定精靈中使用 Omnipod Dash 的幫浦步驟](../images/setup-wizard/Wizard-Pump-Omnipod.png)

如果您還不確定，可以先選取**虛擬幫浦**，稍後在設定好**AAPS** 後再選取 **Omnipod Dash**（請參閱「選項 2」）。

(omnipod-dash-option-2-config-builder)=
### 選項 2：組態畫面

如果已經安裝，您可以在**組態**畫面中選取 **Omnipod Dash** 幫浦：

1. 開啟主畫面左上角的**選單**（☰），然後選取**組態**。
2. 點選**幫浦**，然後選取 **Omnipod Dash** 旁的單選按鈕（*「Omnipod Dash 幫浦整合（新款、支援藍牙且針頭保護蓋為藍色的型號）」*）。

3. 選取後，**Omnipod Dash** 卡片會顯示兩個按鈕：
   - **設定**會開啟 [Dash 設定](#omnipod-dash-settings)。
   - **開啟外掛**會開啟 [DASH 幫浦畫面](#omnipod-dash-tab)。

   ![在「組態」>「幫浦」中啟用 Omnipod Dash 外掛](../images/v4/Pumps/dash_enabled.png)

### 驗證 Omnipod 驅動程式選擇

若要確認已選取 **Omnipod Dash**，請開啟主畫面底部導覽列中的**管理**，然後點選**幫浦**。接著會開啟 DASH 幫浦畫面，如下一節所示。

(omnipod-dash-tab)=

## DASH 幫浦畫面

您可以在 DASH 幫浦畫面中管理 Pod：啟用或停用 Pod、重新整理 Pod 狀態、將警示靜音，以及查看 Pod 紀錄。請前往**管理** > **幫浦**開啟畫面，或在**組態** > **幫浦**中的 **Omnipod Dash** 卡片上點選**開啟外掛**。

以下是沒有啟用 Pod 時的畫面：

![未啟用 Pod 時的 DASH 幫浦畫面](../images/v4/Pumps/dash_pump_screen.png)

以下是已啟用 Pod 時的畫面：

![已啟用 Pod 時的 DASH 幫浦畫面](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

點選右上角的**設定**（齒輪）圖示，即可開啟 [Dash 設定](#omnipod-dash-settings)。

***注意：**如果幫浦畫面的欄位顯示「不確定」，請按**重新整理**以更新 Pod 狀態。*

### 欄位

- **藍牙位址：**Pod 的藍牙位址。

- **連線品質：****AAPS** 與 Pod 連線的穩定程度，顯示格式為*成功連線次數 / 嘗試連線總次數 :: 成功率*，例如 `412/420 :: 98.10 %`。成功連線超過 50 次後，數值低於 90 % 時會變成黃色，低於 70 % 時會變成紅色。數值偏低表示可能有藍牙問題（請參閱[藍牙相關問題](#omnipod-dash-bluetooth-related-issues)）。

- **輸注狀態：**Pod 回報的原始輸注狀態。此欄位僅會顯示在工程模式版本中。

- **唯一 ID：****AAPS** 在啟用 Pod 時指派給它的唯一 ID。

- **批號：**Pod 的生產批號。

- **序號：**Pod 的序號。

- **韌體版本：**Pod 的韌體和藍牙版本。

- **Pod 時間：**Pod 目前的時間及其時區。如果 Pod 的時區與手機時區不同，文字會變成紅色；如果 Pod 的時間誤差超過 10 分鐘，文字會變成黃色。

- **Pod 到期時間：**Pod 到期的日期和時間（註冊後 72 小時）。到期前最後 4 小時，文字會變成黃色。文字不會變成紅色，因為 Pod 到期後仍會繼續輸注胰島素。

- **Pod 最終期限：**Pod 寬限期結束的時間（**Pod 到期時間**後 8 小時，Pod 最長使用時間為 80 小時）。寬限期開始時（即**Pod 到期時間**），文字會變成黃色；最終期限前最後 4 小時則會變成紅色。寬限期間也會顯示剩餘時間，例如 *（剩餘 17 分鐘）*。到達最終期限時，Pod 會停止輸注胰島素，必須更換。

- **Pod 狀態：**Pod 的狀態：**沒有啟用中的 Pod**、**設定進行中**、**運作中**、**暫停**，或 Pod 發生故障後顯示的**警報**。

- **上次連線：****AAPS** 上次與 Pod 通訊至今經過的時間。

  - *片刻前* - 少於 10 秒前。

  - *不到 1 分鐘前*－表示距今 10 至 60 秒。

  - *XX 分鐘前*－表示超過 1 分鐘前（超過 1 小時後會顯示為*X 小時 XX 分鐘前*）。

- **上次注射：**上次傳送至 Pod 的注射量，以及注射時間。未確認的注射會標示為「不確定」。

- **基礎速率：**您目前的基礎胰島素**設定檔**中，為目前時間設定的基礎速率。

- **臨時基礎率：**目前正在執行的臨時基礎率（TBR），以及開始時間和持續時間。只有在臨時基礎率正在執行時，才會顯示此欄位。

- **儲液槽：**當儲液槽中剩餘胰島素超過 50 單位時，會顯示 *剩餘超過 50 U*。剩餘胰島素少於 50 單位時，會顯示確切數量。剩餘胰島素少於 20 單位時，數值會變成紅色。

- **已輸注總量：**從儲液槽輸注的胰島素總量。此數值包含用於預充的胰島素。

- **Pod 目前的警示：**Pod 上目前啟動中的警示，例如 *Pod 即將到期*或*儲液槽容量不足*。

- **錯誤：**如果 Pod 故障，此處會以紅字顯示 Pod 故障資訊，例如 *Pod 故障：*後面會接著顯示故障代碼和名稱，例如 *Pod 故障：020 ALARM_OCCLUDED*。請查看 [Pod 歷史記錄](#omnipod-dash-view-pod-history)和記錄檔，瞭解過去發生的錯誤及更詳細的資訊。請參閱[Pod 故障](#omnipod-dash-pod-failures)。

- **PDM 通知：**僅在 Pod 故障後顯示。此處會以 Omnipod PDM 顯示通知的方式呈現故障資訊：標題（例如 *偵測到阻塞*、*儲液槽已空*或*Pod 已到期*）、發生的狀況（例如 *胰島素輸注已停止。請立即更換 Pod。*），以及*參考：*代碼。

### 按鈕

幫浦螢幕底部的按鈕會依 Pod 的狀態而變化。只會顯示當下適用的按鈕。

- **重新整理：**向 Pod 查詢目前狀態。
  - *使用此功能更新 Pod 狀態，並清除顯示「不確定」的欄位。*
  - *如需詳細資訊，請參閱下方的[疑難排解](#omnipod-dash-troubleshooting)章節。*

- **將警示靜音：**停止 Pod 警示嗶聲（例如 Pod 即將到期或儲液槽容量不足時的警示）。僅在 Pod 有啟動中的警示時顯示。請參閱[將 Pod 警示靜音](#omnipod-dash-silencing-pod-alerts)。

- **恢復輸注：**恢復已暫停的 Pod 輸注胰島素。僅在輸注暫停時顯示。請參閱[恢復胰島素輸注](#omnipod-dash-resuming-insulin-delivery)。

- **設定時間：**再次傳送您的基礎設定檔，將 Pod 的時區更新為與手機相同的時區。僅在 Pod 的時區與手機的時區不同時顯示。

- [**啟動 Pod**](#omnipod-dash-activate-pod)：為新的 Pod 預充並註冊。沒有啟動中的 Pod 時顯示。

- [**停用 Pod**](#omnipod-dash-deactivate-pod)：停用目前啟動中的 Pod。 Pod 與 **AAPS** 配對後便會顯示；即使啟動程序中途停止，也會顯示（例如 Pod 在啟動過程中故障）。 **AAPS** 會在停用 Pod 前要求您確認。

- **播放測試嗶聲：**讓 Pod 播放一聲測試嗶聲。

- [**Pod 歷史記錄**](#omnipod-dash-view-pod-history)：顯示目前啟動中 Pod 的活動歷史記錄。

- **放棄 Pod：**從 **AAPS** 移除尚未完成啟動程序的 Pod。僅在 Pod 啟動程序中途停止時顯示。 **AAPS** 會要求您確認。放棄 Pod 後，**AAPS** 將無法再與該 Pod 通訊，請將 Pod 從身上取下。

![Pod 管理選單](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

```{admonition} Older screenshot
:class: note
上方螢幕截圖來自較早版本的 **AAPS**，當時設有獨立的 **Pod 管理**選單。在 **AAPS** 4 中，所有這些操作都改為直接顯示在幫浦螢幕上，並以文字標示按鈕，包括**啟動 Pod**、**停用 Pod**、**播放測試嗶聲**和**Pod 歷史記錄**。
```

(omnipod-dash-activate-pod)=

## 註冊 Pod

1. 開啟 DASH 幫浦螢幕（**管理** > **幫浦**），然後按下**啟動 Pod**。啟動精靈隨即開啟。

   ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

   ```{admonition} Older screenshot
   :class: note
   上方螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，**啟動 Pod** 是 DASH 幫浦螢幕上的按鈕，不再位於 **Pod 管理**選單中。
   ```

   如果您從未在 **AAPS** 中啟用過**設定檔**，精靈會先顯示**需要設定檔**步驟：選取要在啟動時套用的設定檔，然後繼續。

2. 接著會顯示**填充 Pod**步驟。將足夠使用 3 天的胰島素注入新的 Pod，**至少 80 單位**。聽到 Pod 發出兩聲嗶聲時，表示已注入最低所需量 80 單位。即使聽到兩聲嗶聲，也請將注射器中的胰島素完全注入。請先不要取下 Pod 的針頭保護蓋。

   ***注意：**計算 3 天所需的胰島素量時，請記得預充 Pod 約會使用 3–10 單位的胰島素。*

   ![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)

   ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

   確認新的藥匣與執行 **AAPS** 的手機彼此靠近，然後按下 **下一步**。

3. 如果您在 **AAPS** 中使用多種胰島素，畫面會顯示 **選擇胰島素** 步驟。此步驟會顯示目前啟用的胰島素。如果您在藥匣中裝入不同的胰島素，請按下 **變更** 並選擇該胰島素。註冊完成後，**AAPS** 會套用使用此胰島素的 **設定檔切換**。按下 **下一步**。

   ![「選擇胰島素」步驟](../images/v4/Pumps/dash_wizard_select_insulin.png)

4. 在 **初始化藥匣** 步驟中，**AAPS** 會與新的藥匣配對並為其預充填。藥匣預充填時，您會先聽到一聲喀噠聲，接著是一連串的滴答聲。成功完成後，畫面會出現 **下一步** 按鈕。按下 **下一步**。

   ![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

   ***注意**：如果出現錯誤訊息，例如 _掃描失敗_ 或 _「找不到可用於註冊的藥匣」_（這種情況可能會發生），請不要慌張。按下 **重試**。大多數情況下，註冊程序接著就會順利完成。*

   ![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

   如果藥匣已故障（例如超過註冊時限），畫面會顯示 **停用藥匣**，而非 **重試**。請按下該按鈕，然後使用新的藥匣重新開始。

   如果您在註冊完成前按下 **取消**，**AAPS** 會詢問您是否確定要離開。按下 **確定** 離開嚮導，或按下 **取消** 留在此頁面。

   ![離開確認畫面](../images/v4/Pumps/dash_wizard_exit_confirm.png)

5. 如果您在 **AAPS** 中管理幫浦部位輪替（在 [部位輪替](#Aapsscreens-site-rotation)設定中選取**管理幫浦部位輪替**），畫面會顯示 **部位位置** 步驟。在身體示意圖上選擇要放置藥匣的位置，然後按下 **下一步**，或按下 **略過**。

   ![「部位位置」步驟](../images/v4/Pumps/dash_wizard_site_location.png)

6. 接著，請準備新的藥匣要使用的輸注部位。請先洗手，以避免感染風險。使用肥皂和清水或酒精棉片清潔輸注部位，並等外觀完全自然風乾後再繼續。如果黏膠會刺激您的外觀，可以考慮使用隔離棉片或隔離噴霧。

   在 **貼上藥匣** 步驟中，請取下藥匣上的藍色塑膠針頭護蓋。如果有套管或其他物品從藥匣中突出，或藥匣外觀異常，請**停止**：按下 **取消**，並改用新的藥匣重新開始。如果一切看起來都**正常**，請撕下黏膠上的白色離型紙，並將藥匣貼在身體上選定的位置。

   完成後，按下 **下一步**。

   ![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

7. 畫面會出現確認對話方塊：*按下「確定」後，套管便會插入。***只有在您準備好插入套管時，才按下「確定」！**

   ![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

8. 在 **插入套管** 步驟中，**AAPS** 會設定您的基礎率時程，並由藥匣插入套管。這可能需要一些時間（最長約 1 到 2 分鐘）。**請耐心等候！**

   ***注意：**建議在套管插入前，捏起插入位置附近的外觀。這樣有助於針頭順利插入，並降低發生阻塞的機率。*

   ![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

9. 套管成功插入後，畫面會出現 **下一步** 按鈕。按下 **下一步**。

   ![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

10. 畫面會顯示 **藥匣已啟用** 步驟。請確認套管是否正確插入；如果您認為插入不正確，請更換藥匣。

    按下 **完成**。

    恭喜！你現在已經開始一個新的藥量會話。

    ![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

11. 畫面會返回 DASH 幫浦頁面。現在畫面會顯示目前使用中藥匣的資訊，包括目前基礎率、儲藥槽剩餘量、已注射的胰島素、藥匣錯誤和警示。**註冊藥匣**會變成**停用藥匣**：您必須先停用目前使用中的藥匣，才能註冊另一個藥匣。

    ***注意：**如需瞭解畫面所示資訊的詳細說明，請參閱[DASH 幫浦頁面](#omnipod-dash-tab)。*

    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

    ***注意：**建議在註冊藥匣後匯出設定。每次更換藥匣後，以及每個月，請匯出設定。請將匯出的設定檔複製到雲端儲存空間（例如 Google Drive），或手機以外的位置，以防手機遺失（請參閱[**匯出設定**](../Maintenance/ExportImportSettings.md)）。*

如果先前在藥匣預充填後註冊程序中斷，按下 **註冊藥匣**後，便會從**貼上藥匣**步驟繼續。

(omnipod-dash-deactivate-pod)=

## 停用 Pod

正常情況下，藥匣可使用 3 天（72 小時），藥匣到期警告出現後還有 8 小時的寬限期，總計 80 小時。

若要停用藥匣（無論是因為到期或故障）：

1. 開啟 DASH 幫浦頁面（**管理** > **幫浦**），然後按下 **停用藥匣**。

   ![DASH 幫浦頁面上的「停用藥匣」按鈕](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

2. 在**停用藥量**步驟中，按下**下一步**。畫面會顯示對話方塊，詢問*已停用的藥量無法再次使用。要立即停用此藥量嗎？*按下**確定**開始停用藥量，或按下**取消**保留藥量。停用後會停止所有胰島素輸注，而且無法復原。

   ![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg)

3. 停用藥量時，畫面會顯示**正在停用藥量**步驟。藥量會發出嗶聲，確認停用成功。

   ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)

   ```{admonition} Older screenshot
   :class: note
   上方螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，嚮導會在頂端以一列圓點顯示進度，而非使用進度列。
   ```

   停用成功後，畫面會顯示**下一步**按鈕。按下 **下一步**。

   ![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

   如果停用失敗，畫面會顯示錯誤訊息和**放棄藥量**按鈕。使用前，請參閱下方的[放棄藥量](#omnipod-dash-discard-pod)。您也可以按下**取消**，稍後再試一次**停用藥量**。

4. 畫面會顯示**藥量已停用**步驟。將藥量從身上取下，然後按下**完成**。

   ![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. 畫面會返回 DASH 幫浦頁面。確認**藥量狀態**欄位顯示**沒有作用中的藥量**，且**啟用藥量**按鈕再次顯示。

   ![DASH 幫浦畫面顯示「沒有作用中的藥量」](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

(omnipod-dash-discard-pod)=

### 放棄藥量

只有在持續無法與藥量通訊時，才放棄藥量。如果**AAPS**仍能與藥量通訊，請改用**停用藥量**。

- **AAPS**會在放棄藥量前，要求您確認。
- 之後，**AAPS**就無法再與該藥量通訊。
- **胰島素輸注並未停止**，因為藥量未正確停用。**請將藥量從身上取下！**
- **已放棄藥量**步驟會確認藥量狀態已放棄。按下 **完成**。現在可以啟用新的藥量。

(omnipod-dash-resuming-insulin-delivery)=

## 恢復胰島素輸送

**注意**：進行**設定檔切換**時（例如使用 PDM），**AAPS**必須先停止藥量輸注，再設定新的基礎**設定檔**。如果停止輸注和恢復輸注的指令之間通訊失敗，輸注可能會持續處於停止狀態。在問題排除部分閱讀[**暫停交付**](#omnipod-dash-delivery-suspended)以獲取更多詳細資訊。

胰島素輸注停止後，您需要告知藥量恢復輸注。指令成功處理後，藥量會依照您目前啟用的基礎**設定檔**，按照目前時間所對應的基礎率再次輸注胰島素。藥量也會再次接受注射、**TBR** 和**SMB**指令。

1. 開啟 DASH 幫浦畫面，確認**藥量狀態**欄位顯示**已停止**。按下**恢復輸注**，告知藥量恢復正常輸注胰島素。

   ![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)

2. 指令成功後，**藥量狀態**欄位會顯示**運作中**，且**恢復輸注**按鈕會消失。

   ![Resume_3](../images/DASH_images/Resume/Resume_3.png)

   ![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

   ```{admonition} Older screenshot
   :class: note
   上方的螢幕截圖來自較舊版本的 **AAPS**，該版本會顯示確認對話方塊。在 **AAPS** 4 中，請在 DASH 幫浦畫面確認結果：**藥量狀態**欄位會顯示 **運作中**，且 **恢復輸注** 按鈕會消失。
   ```

   如果指令失敗，**AAPS**會顯示警告對話方塊，開頭文字為*恢復輸注失敗*。按下**重新整理**，然後再試一次。

   ![「恢復輸注失敗」警告](../images/v4/Pumps/dash_resume_failed.png)

(omnipod-dash-silencing-pod-alerts)=

## 靜音 Pod 警報

本節說明藥量即將到期時，如何停止藥量發出的嗶聲。嗶聲開始的時間取決於**警示**設定（請參閱[DASH 設定](#omnipod-dash-settings)）：

- **到期前幾小時提醒（72 小時）：**藥量在 72 小時到期前幾小時開始發出嗶聲。
- **關閉前幾小時警示（80 小時）：**藥量在 80 小時關閉前幾小時再次發出嗶聲。

藥量的最長使用時間為 80 小時（3 天 8 小時）。不過，藥量製造商建議使用時間不要超過 72 小時（3 天）。

***注意**：只有在藥量有作用中的警示時（例如藥量即將到期或儲液槽存量偏低），DASH 幫浦畫面才會顯示**靜音警示**按鈕。如果沒有顯示**靜音警示**按鈕，但您聽到藥量發出嗶聲，請按下**重新整理**。*

1. 到達提醒時間時，藥量會發出嗶聲，提醒您即將到期，需要更換藥量。在 DASH 幫浦畫面中，**藥量到期時間（1）**欄位會顯示藥量確切的到期時間（啟用後 72 小時）。距離到期時間 4 小時時，文字會變成黃色。到期後，**藥量最終停止時間**會變成黃色，並顯示藥量停止輸注胰島素前剩餘的時間。「**使用中的 Pod 警示 (2)**」欄位會顯示「**Pod 即將到期**」，並出現「**靜音警示 (3)**」按鈕。

   ![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. 按下「**靜音警示**」。 **AAPS** 會傳送指令給 Pod，讓它停止發出到期提示音。

   ![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

   ```{admonition} Older screenshot
   :class: note
   上方的螢幕擷圖來自較舊版本的 **AAPS**，當時這個畫面位於 **DASH** 分頁。在 **AAPS** 4 中，「**靜音警示**」按鈕位於 DASH 幫浦畫面（**管理** > **幫浦**）。
   ```

3. 警示靜音後，「**使用中的 Pod 警示**」欄位就不會再顯示該警示，「**靜音警示**」按鈕也會消失，且 Pod 會停止發出到期提示音。

   ![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

   ```{admonition} Older screenshot
   :class: note
   上方的螢幕擷圖來自較舊版本的 **AAPS**，當時會顯示確認對話框。在 **AAPS** 4 中，請在 DASH 幫浦畫面確認結果：警示已從「**使用中的 Pod 警示**」欄位中消失。
   ```

   如果指令失敗，**AAPS** 會顯示警告對話框，開頭文字為 *無法靜音警示*。按下**重新整理**，然後再試一次。

低藥量警示的處理方式相同。當 Pod 中剩餘的胰島素量降至「**警示**」設定中的「**單位數**」時，Pod 會發出嗶聲。「**藥量**」欄位會顯示剩餘量，「**使用中的 Pod 警示**」欄位會顯示「**藥量偏低**」，並出現「**靜音警示**」按鈕。按下「**靜音警示**」以停止嗶聲，並安排更換下一個 Pod。

![顯示藥量偏低警示的 DASH 幫浦畫面](../images/v4/Pumps/dash_low_reservoir_alert.png)

(omnipod-dash-view-pod-history)=

## 查看 Pod 歷史紀錄

本節說明如何查看目前使用中 Pod 的歷程記錄，以及如何依操作類型篩選。 Pod 歷程記錄會顯示 Pod 使用期間（三天，也就是 72 至 80 小時）傳送給目前使用中 Pod 的指令及其結果。

您可以查看傳送給 Pod 的注射、TBR 和基礎胰島素指令。其他類別有助於排解問題，並顯示導致故障的事件順序。

**注意：** **只有最後一個指令可能是不確定的**。在**最後一個「不確定」的指令變成「已確認」或「已拒絕」**之前，*不會傳送*新指令。若要「修正」不確定的指令，請在 DASH 幫浦畫面按下「**重新整理**」。

1. 開啟 DASH 幫浦畫面，然後按下「**Pod 歷程記錄**」。

   ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

   ```{admonition} Older screenshot
   :class: note
   上方螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，「**Pod 歷程記錄**」是 DASH 幫浦畫面上的按鈕，不在「**Pod 管理**」選單中。
   ```

2. 開啟「**Pod 歷程記錄**」畫面時，預設會選取「**全部**」篩選條件。畫面會依日期分組，並依時間由新到舊列出每個指令及其結果。使用畫面上方的篩選按鈕（例如「**注射**」或「**基礎胰島素**」），即可只顯示一種類型的指令。按下返回箭頭，回到 DASH 幫浦畫面。

   ![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

   ```{admonition} Older screenshot
   :class: note
   上方第二張螢幕擷圖來自較舊版本的 **AAPS**，當時您需要從「**類型**」清單中選取指令類型。在 **AAPS** 4 中，請使用第一張螢幕擷圖所示的篩選按鈕。
   ```

   若不是一般注射，注射劑量後方會標示注射類型，例如 *0.05 U（微量注射）*或 *0.05 U（基礎胰島素修正）*。基礎胰島素修正是非常小量的注射（一次 Pod 脈衝，0.05 U），由驅動程式自行傳送，並非由您要求。

   ```{admonition} Why basal corrections happen
   :class: note
   Pod 會依照內部時鐘計時，以每次 0.05 U 的脈衝輸送基礎胰島素。每當基礎胰島素速率變更（例如循環設定新的 **TBR**）時，Pod 就會重新啟動時鐘，原本正在計時的脈衝也會作廢。由於循環會頻繁變更基礎胰島素速率，尤其是在夜間，Pod 最後輸送的基礎胰島素量可能會少於預期。

   **AAPS** 會比較 Pod 回報的基礎胰島素輸送量，以及理應輸送的量。當短少量達到半個脈衝或以上時，驅動程式會額外輸送一個脈衝作為基礎胰島素修正，讓您仍能取得設定檔和循環要求的基礎胰島素量。 Pod 暫停輸送時，或零 **TBR** 生效期間，不會傳送修正指令。
   ```

(omnipod-dash-settings)=

## Dash 設定

有兩種方式可以開啟 Dash 驅動程式設定：

- 按下[DASH 幫浦畫面](#omnipod-dash-tab)右上角的「**設定**」（齒輪）圖示。
- 開啟主畫面左上角的「**選單**」（☰），然後選取「**組態設定**」>「**幫浦**」。在「**Omnipod Dash**」卡片上，按下「**設定**」。

設定分為四個可展開的區段：「**確認嗶聲**」、「**警示**」、「**通知**」和「**進階設定**」。點選區段即可開啟：

![Dash 設定](../images/v4/Pumps/dash_settings.png)

大多數設定都是開啟／關閉開關。

### 確認嗶聲

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

Pod 在輸送或變更注射、基礎胰島素、微量注射和 TBR 時發出的確認嗶聲。

**啟用注射嗶聲：**    輸送注射時，Pod 會發出嗶聲。預設為開啟。

**啟用基礎胰島素嗶聲：**    設定新的基礎胰島素速率，或取消或變更目前生效的基礎胰島素速率時，Pod 會發出嗶聲。預設為關閉。

**啟用微量注射嗶聲：**  輸送微量注射時，Pod 會發出嗶聲。預設為開啟。

**啟用 TBR 嗶聲：**設定或取消 TBR 時，Pod 會發出嗶聲。預設為關閉。

### 警報

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

```{admonition} Older screenshot
:class: note
上方的螢幕截圖來自較早期的 **AAPS** 版本。在 **AAPS** 4 中，這些設定位於可展開的 **警示** 區段。
```

Pod 到期、關機及儲液槽低液量警示。 Pod 啟動期間變更這些設定時，**AAPS** 會將新的警示設定傳送至 Pod。

***注意：**觸發警示後，只要 **AAPS** 曾與 Pod 通訊，就一定會顯示 **AAPS** 通知。關閉通知並不會停止 Pod 警示。若要停止警示，請開啟 DASH 幫浦畫面，然後按下 **將警示設為靜音**。*

**啟用到期提醒：**開啟此選項後，到了提醒時間，Pod 會發出嗶聲。預設為開啟。

**到期前幾小時提醒（72 小時）：**設定在 Pod 使用滿 72 小時到期前幾小時開始提醒（1 至 24 小時；預設為 4 小時）。

**啟用到期警示：**開啟此選項後，到了警示時間，Pod 會發出嗶聲，並在關機前 1 小時再次發出嗶聲。預設為開啟。

**關機前幾小時發出警示（80 小時）：**設定在 Pod 使用滿 80 小時關機前幾小時開始警示（1 至 8 小時；預設為 8 小時）。

**啟用儲液槽低液量警示：**當儲液槽剩餘的胰島素量降至 **單位數** 設定值時，Pod 會發出警示。預設為開啟。

**單位數：**設定觸發儲液槽低液量警示的胰島素量（5 至 50 單位；預設為 20 單位）。

### 通知

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

選擇當 **AAPS** 無法確定 TBR、SMB 或注射是否已送出，以及胰島素輸送暫停時，是否要在通知中播放音效。

***注意：**這些僅為手機通知；Pod 本身不會發出嗶聲。*

**啟用 TBR 狀態不確定通知音效：**當 **AAPS** 無法確定是否已設定 TBR 時，通知會播放音效。

**啟用 SMB 狀態不確定通知音效：**當 **AAPS** 無法確定 SMB 是否已送出時，通知會播放音效。

**啟用注射狀態不確定通知音效：**當 **AAPS** 無法確定注射是否已送出時，通知會播放音效。

**啟用胰島素輸送暫停通知音效：**胰島素輸送暫停時，通知會播放音效。

(omnipod-dash-advanced-settings)=

### 進階設定

![進階設定區段](../images/v4/Pumps/dash_settings_advanced.png)

**藍牙配對：**透過藍牙將 Pod 與手機配對。只有在 Pod 無法維持穩定連線時才嘗試啟用，例如使用 Android 15 時（請參閱 [Omnipod DASH 已知的 AAPS 限制／問題](#omnipod-dash-constraints)）。啟用後，手機會顯示配對要求，您必須接受。如果 Pod 連線正常，請保持關閉。在 Android 15 以下版本中，此設定不會有任何作用。預設為關閉。

## 胰島素與導管使用時間

主畫面的[狀態列](#screens-sensor-level-battery)會顯示胰島素與導管的使用時間。 Omnipod 的運作方式與管路式幫浦略有不同。

每次啟用 Pod 時，**AAPS** 都會自動記錄更換導管及胰島素。每次更換 Pod 後，**胰島素**與**導管**的使用時間都會重設為零。您不需要使用 **預充／填充**自行記錄。這是因為 Pod 會將導管直接插入其附著處的外觀中：Omnipod 不使用管路。

不會回報**幫浦電池**的使用時間：電池和胰島素儲液槽都裝在 Pod 內，而且電池的續航時間一定比 Pod 本身的使用時間長（最長 80 小時）。

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

```{admonition} Older screenshot
:class: note
上方的螢幕截圖來自較早期的 **AAPS** 版本，當時這些使用時間顯示在 **動作**分頁的 **照護入口**區段。在 **AAPS** 4 中，這些資訊會顯示在主畫面的狀態列。
```

### 等級

**胰島素等級**

顯示的胰島素量是 Pod 回報的數值。不過，只有在儲液槽剩餘量低於 50 單位時，Pod 才會回報實際液量。在此之前會顯示 *剩餘超過 50 單位*。回報的數量並非精確值：Pod 回報「空」時，大多數情況下儲液槽內仍剩有幾單位的胰島素。

DASH 幫浦畫面會以下列方式顯示胰島素量：

  * **剩餘超過 50 單位** - Pod 回報儲液槽內有超過 50 單位的胰島素。
  * **剩餘少於 50 單位** - Pod 回報的儲液槽內胰島素剩餘量精確數值。

附加說明：
  * **SMS** - 在簡訊回覆中傳回數值；若超過 50 單位，則傳回 50+U。
  * **Nightscout** - 若超過 50 單位，會向 Nightscout 上傳數值 50（版本 14.07 及更舊版本）。較新的版本會在超過 50 單位時回報 50+。

(omnipod-dash-troubleshooting)=

## 問題排除

本節涵蓋使用 **AAPS** 搭配 Omnipod DASH 的常見已知問題與解決方案。文件中也有 [一般疑難排解](../GettingHelp/GeneralTroubleshooting.md) 章節，請參閱，因為其中的相關主題也適用於部分 Pod 問題。

---

(omnipod-dash-bluetooth-related-issues)=

## 藍牙相關問題

若遇到藍牙連線、幫浦 / Pods 中斷，或註冊與連線等已知問題，請參閱 [藍牙疑難排解](../GettingHelp/BluetoothTroubleshooting.md)

---

(omnipod-dash-delivery-suspended)=

### 暫停輸送

  - 現在已無暫停按鈕。如果你想要「暫停」藥量，你可以將臨時基礎率設置為零，持續 x 分鐘。
  - 在**設定檔切換**期間，DASH 必須在設置新的基礎**設定檔**之前暫停送藥。如果兩個指令之間的通訊失敗，則輸送可能會保持暫停。當這種情況發生時：
     - 將不會有胰島素輸送，包括基礎率、SMB、手動注射等。
     - 可能會通知某個指令未確認：這取決於失敗發生的時間。
     - **AAPS** 每 15 分鐘嘗試設置新的基礎設定檔。
     - **AAPS** 每 15 分鐘將顯示一則通知，告知送藥已暫停，如果送藥仍然暫停（恢復送藥失敗）。
     - 若要手動恢復胰島素輸送，DASH 幫浦畫面會顯示[**恢復輸送**](#omnipod-dash-resuming-insulin-delivery)按鈕。
     - 如果**AAPS**無法自行恢復送藥（如果藥量無法連線、聲音被靜音等情況會發生），藥量每分鐘將發出 4 次嗶聲，持續 3 分鐘，然後如果送藥暫停超過 20 分鐘將每 15 分鐘重複這個過程。
  - 若指令尚未確認，請在 DASH 幫浦畫面按下**重新整理**，以確認或拒絕指令。

*****注意：** 當您聽到來自 Pod 的嗶聲時，請不要在未檢查手機的情況下就假設輸送會持續進行，輸送可能仍維持暫停狀態，***所以您需要檢查！******

---
(omnipod-dash-pod-failures)=

### Pod 故障

- Pod 會因多種問題偶爾發生故障，包括 Pod 本身的硬體問題。
- 建議不要向 Insulet 提出支援／更換案件，因為 AAPS 並非核准的 Pod 使用方式。
- 一份故障代碼列表可在 [**這裡找到**](https://github.com/openaps/openomni/wiki/Fault-event-codes)，以幫助確定原因。

Pod 故障時會停止輸送胰島素，並持續發出嗶聲。 **AAPS** 會在主畫面顯示通知，其中包含故障代碼和名稱，以及 *參考：*代碼，例如 *Pod 故障：020 ALARM_OCCLUDED*。按下 **關閉**，即可關閉通知。這不會讓 Pod 停止發出嗶聲。

![Pod 故障通知](../images/v4/Pumps/dash_pod_fault_notification.png)

在 DASH 幫浦畫面中，**Pod 狀態**欄位會顯示 **警報**，**錯誤**欄位會顯示 Pod 故障，而 **PDM 通知**欄位會說明故障原因，例如 *偵測到阻塞。胰島素輸送已停止。請立即更換 Pod。請檢查您的血糖*。

![Pod 故障後的 DASH 幫浦畫面](../images/v4/Pumps/dash_pump_screen_pod_fault.png)

故障的 Pod 無法再次使用。請先測量血糖，接著[停用 Pod](#omnipod-dash-deactivate-pod)，並啟用新的 Pod。

---
### 防止 49 號錯誤 Pod 故障

此故障與指令的 Pod 狀態不正確或胰島素輸送指令中的錯誤有關。這是當驅動程式和 Pod 對實際狀態存在分歧時發生的情況。 Pod（出於內建安全措施）隨後對不可恢復的錯誤代碼 49（0x31）作出反應，最終產生所謂的「尖叫聲」：那聲長且令人惱怒的嗶聲，只有在在 Pod 背面適當位置打個洞才能停止。 「49 Pod 故障」的確切原因通常難以追溯。在某些情況下，這種故障可能發生（例如應用程式崩潰、運作開發版本或重新安裝）。

---

### 幫浦無法連線警報

當在預先設定的時間內無法與 Pod 建立連線時，會觸發「幫浦無法使用」警示。如要設定幫浦無法使用警示，請按下主畫面右上方的**設定**（齒輪）圖示，然後依序選取 **本機警示** ➜ **幫浦無法使用門檻**。建議設置的值是**120** 分鐘後提醒。

---
(omnipod-dash-export-import)=
### 匯出及匯入設定

匯出 **AAPS** 設定，可讓您還原所有設定和目標，例如重新安裝 **AAPS** 後，或改用新手機時。**每次啟用 Pod 後，請立即匯出設定**，並將檔案複製到手機以外的安全位置（例如 Google Drive），這樣也能還原目前啟用的 Pod。請參閱[建立及還原備份](#ExportImportSettings-Settings-Export)。

```{admonition} Importing settings can end your active Pod
:class: warning
如果手機上已經有正在運作的 Pod，請勿勾選「同時取代幫浦設定」：Pod 工作階段會保留，只會匯入其他設定。只有在新手機上，且匯入的檔案是在您目前佩戴的 Pod 工作階段期間匯出時，才勾選此選項。請參閱[無導管幫浦](#ExportImportSettings-tubeless-pumps)。
```

如果匯入的設定包含已不再啟用的 Pod，請參閱下一節。

---
### 匯入包含非活動 Pod 狀態的設定

當匯入包含已不再啟用的 Pod 資料時，AAPS 將嘗試與其連線，這顯然會失敗。在這種情況下，您無法啟用新的 Pod。

要移除舊的 Pod 工作階段：
1. 在 DASH 幫浦畫面中，按下**停用 Pod**。停用作業很可能會失敗。
2. 如果失敗，請按下**放棄 Pod**並確認（請參閱[放棄 Pod](#omnipod-dash-discard-pod)）。
3. 移除舊 Pod 後，就可以啟用新的 Pod。

### 通用錯誤：java.lang.IllegalStateException：嘗試將藍牙位址設為 ***，但其已設為 ***。

如果你在嘗試初始化新的 Pod 時收到此錯誤，**AAPS** 將失敗，因為組態中仍保留舊 Pod 的設定。

![Omnipod 位址已在使用中](../images/DASH_images/Errors/omnipod_address_in_use.png)

如果你從備份還原，或 Pod 停用失敗，就可能發生此狀況。

如要解決此問題，請按下**取消**，退出啟用流程。在 DASH 幫浦畫面中，如果有顯示**放棄 Pod**，請按下該選項。如果沒有顯示，請按下**停用 Pod**；停用失敗時，再按下**放棄 Pod**（請參閱[放棄 Pod](#omnipod-dash-discard-pod)）。

你現在應該可以註冊新的 Pod。

---
### 重新安裝 AAPS

當解除安裝 **AAPS** 時，您將會遺失所有設定、目標以及目前的 Pod 工作階段。**若要還原它們，請務必備妥最新的匯出設定檔！**

如果目前使用的是已啟用的 Pod，請使用在目前 Pod 工作階段期間匯出的檔案（請參閱[匯出及匯入設定](#omnipod-dash-export-import)）。

1. 請匯出您的設定，並將副本儲存在安全的位置（例如 Google Drive）。
2. 卸載**AAPS**並重新啟動你的手機。
3. 安裝新的**AAPS**版本。
4. 匯入你的設定。
5. 驗證所有偏好設定（選擇性地再次匯入設置）。
6. 啟動新的藥量。
7. 完成後：匯出目前設定。

---
### 更新 AAPS 至新版本

在大多數情況下，無需卸載。你可以透過啟動新版本的安裝進行「就地」安裝。即使目前正處於作用中的 Pod 工作階段，也可以這麼做。

1. 匯出你的設定。
2. 安裝新的**AAPS**版本。
3. 驗證安裝是否成功。
4. 恢復藥量或啟動新的藥量。
5. 完成後：匯出目前設定。

---
### Omnipod 驅動程式警報

Omnipod Dash 驅動程式會在**主畫面**顯示各種專屬警示。大多數警示僅供參考，可以關閉；有些則會要求使用者採取動作，才能排除觸發警示的原因。

你可能會遇到的主要警報總結如下：

- *Pod 故障：XXX NAME*，後面接著 *參考：...*：Pod 已故障並停止輸送胰島素。請更換 Pod。請參閱[Pod 故障](#omnipod-dash-pod-failures)。
- *沒有啟用中的 Pod*：找不到 Pod 工作階段。此通知會持續再次出現，直到您啟用新的 Pod 為止。啟用 Pod 後，通知就會自動消失。
- *胰島素輸送已暫停*：Pod 已暫停輸送胰島素。請參閱[恢復胰島素輸注](#omnipod-dash-resuming-insulin-delivery)。
- *設定基礎胰島素設定檔可能失敗。注射可能已暫停！請前往 Omnipod 分頁，手動重新整理 Pod 狀態；如有需要，請恢復胰島素輸送。* 在 Pod 上設定基礎胰島素**設定檔**可能失敗。請在 DASH 幫浦畫面中按下**重新整理**（訊息中仍會顯示「Omnipod 分頁」），如果有顯示**恢復輸送**，也請按下該選項。
- *無法確認 SMB（X U）是否成功。請重新整理 Pod 狀態，以確認此指令是否成功。* **AAPS** 無法確認是否已輸送**SMB**。請在 DASH 幫浦畫面中按下**重新整理**，並查看**上次注射**欄位。
- *無法確定注射是否成功。請重新整理 Pod 狀態以確認是否成功。* 一般注射也是如此：請在 DASH 幫浦畫面中按下**重新整理**。
- *Pod 上的時區與手機上的時區不同。基礎胰島素速率不正確。切換設定檔以修正* 請參閱[Omnipod DASH 已知的 AAPS 限制／問題](#omnipod-dash-constraints)中的日光節約時間與時區說明。

(omnipod-dash-where-to-get-help-for-dash)=

## 如何尋求協助

所有 DASH 的開發工作都是由社區以**志願者**的身份進行的；請記住這一點，在要求協助之前使用以下準則：

-  **等級 0：** 閱讀此文件的相關部分，以確保你了解遇到困難的功能應如何工作。
-  **等級 1：** 如果你仍然遇到無法解決的問題，請使用[此邀請鏈接](https://discord.gg/4fQUWHZ4Mw)進入**Discord**的*#AAPS* 頻道。也有許多 Facebook 與其他社群可供提問（請參閱 [**Getting Help**](../GettingHelp/WhereCanIGetHelp.md)）。
-  **等級 2：** 搜尋現有問題，以查看你的問題是否已被報告，請在[問題](https://github.com/nightscout/AndroidAPS/issues)中確認/評論/添加有關你的問題的訊息。如果沒有，請建立一個[新問題](https://github.com/nightscout/AndroidAPS/issues)並附上[你的日誌文件](../GettingHelp/AccessingLogFiles.md)。
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
