- - -
orphan: true
- - -

# Omnipod DASH

These instructions are for configuring the **Omnipod DASH** generation pump **(NOT Omnipod Eros)**, available as part of **AAPS** version 3.0.

## Omnipod DASH 規格

These are the specifications of the **Omnipod DASH** ('DASH') and what differentiates it from the **Omnipod EROS** ('EROS'):

* DASH Pods 具有藍色針蓋（EROS 則有透明針蓋）。 The pods are otherwise identical in terms of physical dimensions.
*  DASH does not require a BLE link/bridge device (NO RileyLink, OrangeLink, or EmaLink needed).
* The DASH's bluetooth connection is used only when needed, and connects to send command and disconnects right after!
* No more "no connection to link device / pod" errors with DASH.
* **AAPS** will wait for pod's accessibility to send commands.
* On pod activation, **AAPS** will find and connect to a new DASH pod.
* 預期範圍：5-10 公尺（實際效果可能有所不同）

## 硬體/軟體要求

* DASH is identified by blue needle cap.

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

* **Compatible Android phone** with a BLE Bluetooth connection  
  Be aware that **AAPS** Omnipod Dash driver connects with the DASH via Bluetooth every time it sends a command, and it disconnects right after. The Bluetooth connection can be disturbed by other bluetooth devices linked to the phone that is running **AAPS**, like earbuds etc... (which might cause, in rare occasions, connection issue or pod errors/loss on activation or afterwards in some phone models), or be disturbed by it.
   -  **使用[**Build APK**](../SettingUpAaps/BuildingAaps.md)指示構建和安裝的 AAPS 版本 3.0 或更高版本**。
* [**連續血糖監測儀（CGM）**](../Getting-Started/CompatiblesCgms.md)

The instructions below explain how to activate a new pod session. Wait to close to expiry of a current pod session before trying to connect **AAPS** with a new pod. Once a pod is is cancelled it cannot reused and the disconnection will be final.

## 在你開始之前

**SAFETY FIRST** - you should not try to connect **AAPS** to a pod for the first time without having access to extra pods, insulin, and phone devices are a must have.

**Your Omnipod Dash PDM will become redundant after the AAPS Dash driver activates your pod.** Previously a user may have operated a PDM to send commands to your DASH. A DASH will only faciiliate a single device to send commands to communicate with it. 從那時起，成功啟動 Pod 的裝置將是唯一能夠與其通訊的裝置。 This means that once you activate a DASH with your Android phone through the **AAPS**, **you will no longer be able to use your PDM with that pod**. The **AAPS** Dash driver in your Android phone is now your acting PDM.

*這並不意味著你應該丟棄 PDM，建議將其留作備用和應急使用，例如手機遺失或 AAPS 無法正常工作時。*

**當 Pod 未連線到 AAPS 時，Pod 不會停止輸送胰島素**。 Default basal rates are programmed on the pod on activation as defined in the current active **Profile**. As long as **AAPS** is operational it will send basal rate commands that run for a maximum of 120 minutes. 當因某些原因 Pod 未接收到任何新指令（例如，因 Pod 與手機的距離過遠而失去連線）時，Pod 會自動恢復為預設基礎率。

**AAPS Profile does not support a 30 minute basal rate time frame** If you are new to **AAPS** and are setting up your basal rate **Profile** for the first time, please be aware that basal rates starting on a half-hour basis are not supported, and programmes on an hourly basis. For example, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, it is not possible replicate this im **AAPS**. 你需要將此 1.1 單位的基礎率更改為 9:00-11:00 或 10:00-12:00 的時間範圍。 Even though the DASH hardware itself supports the 30 minute basal rate **Profile** increments, **AAPS** does support this feature.

**0U/h profile basal rates are NOT supported in AAPS** While the DASH does support a zero basal rate, since **AAPS** uses multiples of the user's **Profile** basal rate to determine automated treatment; it cannot function with a zero basal rate. 可以透過“中斷幫浦”功能或停用循環/臨時基礎率或暫停循環/臨時基礎率的組合來實現臨時的 0 單位基礎率。 The lowest basal rate allowed in **AAPS** is 0.05U/h.

## Selecting Dash in AAPS

There are **two ways**:

### 選項 1：新安裝

When installing **AAPS** for the first time, the **Setup Wizard** will guide new users through key features and installation requirements for **AAPS**. 當達到幫浦選擇時，選擇“DASH”。

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

When in doubt you can also select “Virtual Pump” and select “DASH” later, after setting up **AAPS** (see option 2).

### 選項 2：組態建置工具

在現有安裝中，你可以從組態建置工具中選擇**DASH**幫浦：

在左上角的**漢堡選單**中，選擇**組態建置工具（1）**\ ➜\ **幫浦**\ ➜\ **Dash**\ ➜\ 選擇**Dash**的**設置齒輪（3）**旁的**選項按鈕（2）**。

Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the DASH menu to be displayed as a tab in the **AAPS** interface titled **DASH**. Checking this box will facilitate your access to the DASH commands when using **AAPS**.

**NOTE:** A faster way to access the [**Dash settings**](#dash-settings) can be found below in the DASH settings section of this document.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### 驗證 Omnipod 驅動程式選擇

To verify that you have selected the DASH in **AAPS**, if you have checked the box (4), **swipe to the left** from the **Overview** tab, where you will now see a **DASH** tab on **AAPS**. If this box is left unchecked, you’ll find the DASH tab in the hamburger menu upper left.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## Dash 配置

請**向左滑動**到**DASH**標籤，在那裡你將能管理所有 Pod 功能（在沒有註冊 Pod 會話的情況下，某些功能將不可用或不可見）：

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) 'Refresh' pod connectivity and status, be able to silence pod alarms when the pod beeps

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png) 'Pod Management' (Activate, Deactivate, Play test beep, and Pod history)


### 註冊 Pod

1. 導航至**DASH**標籤，點擊**POD 管理（1）**按鈕，然後點擊**註冊 Pod（2）**。

![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)

​![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. 顯示**填充 Pod**畫面。 將至少 80 單位的胰島素注入新的 Pod，等聽到兩聲嗶聲，表示 Pod 準備就緒並可續繼將胰島素輸入完。 計算 3 天所需的胰島素總量時，請考慮 Pod 本身的排空會占用約 3-10 單位。

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)    ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

Ensure that the new pod and the phone running **AAPS** are within close proximity of each other and click the **Next** button.

**NOTE**: if the  error message below pops up _'Could not find an available pod for activation'_ (this can happen), do not panic. 點擊 **重試** 按鈕。 在大多數情況下，註冊將繼續成功進行。

![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

3. 在 **初始化 Pod** 畫面上，Pod 將開始排空（你會聽到點擊聲，接著是連續的滴答聲，表明 Pod 正在自我排空）。  排空成功後會顯示綠色勾號，並且 **下一步** 按鈕將變為可用狀態。 點擊 **下一步** 按鈕，完成 Pod 排空初始化並顯示 **連線 Pod** 畫面。

![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Next, prepare the infusion site ready to receive the new pod. Wash hands to avoid any risk of infection. Clean the infusion site by either using soap and water or an alcohol wipe to disinfect and let the skin air dry completely before proceeding. Remove the pod's blue plastic needle cap. If you see something that sticks out of the pod or unusual, cancel the process and start with a new pod. If everything looks OK, proceed to take off the white paper backing from the adhesive and apply the pod to the selected site on your body. 完成後，點擊 **下一步** 按鈕。

![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

5. 現在會出現 **連線 Pod** 對話框。 **只有在你準備好插入針管時才點擊 OK 按鈕**。

![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

6. After pressing **OK**, it may take some time before the DASH responds and inserts the cannula (1-2 minutes maximum). Be patient.

 *注意：在插入針管之前，最好輕捏針管插入點附近的皮膚。 這有助於針頭順利插入，並減少堵塞的機會。*

![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

7. 針管成功插入後會顯示綠色勾號，並且 **下一步** 按鈕將變為可用狀態。 點擊 **下一步** 按鈕。

![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

9. 顯示 **Pod 已註冊** 畫面。 點擊綠色 **完成** 按鈕。 恭喜！ You have now started a new pod session.

![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

10. 現在 **Pod 管理** 選單畫面應顯示 **註冊 Pod (1)** 按鈕為 *停用*，並顯示 **停用 Pod (2)** 按鈕為 *啟用*。 這是因為目前有一個 Pod 處於啟用狀態，必須先停用目前啟用的 Pod 才能註冊另一個 Pod。

    點擊手機上的返回按鈕，返回到 **DASH** 標籤畫面，該畫面現在會顯示你的啟用 Pod 的資訊，包括目前基礎率、Pod 儲液量、輸送的胰島素、Pod 錯誤和警報。

    有關顯示的訊息的更多詳細資訊，請轉到本文件的[**DASH 標籤**](#dash-tab)部分。

![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)

​![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

在註冊 Pod 後匯出設置是一個好習慣。 Export settings should be done at each pod change and once a month, copy the exported file to your internet drive. 請見[**匯出設定文件**](../Maintenance/ExportImportSettings.md)。


(OmnipodDASH-deactivate-pod)=

### 停用 Pod

在正常情況下，Pod 的預期壽命為三天（72 小時），並且在 Pod 過期警告後還有額外的 8 小時，總共可以使用 80 小時。

要停用 Pod（不論是過期還是 Pod 故障）：

1. 進入 **DASH** 標籤，點擊 **POD 管理 (1)** 按鈕，然後在 **Pod 管理** 畫面中點擊 **停用 Pod (2)** 按鈕。

![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

​![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. 在 **停用 Pod** 畫面上，點擊 **下一步** 按鈕開始停用 Pod 的流程。 你會收到來自 Pod 的確認嗶聲，表明停用成功。

![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg)

 ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)


3. 停用成功後會顯示綠色勾號。 點擊 **下一步** 按鈕以顯示 Pod 停用畫面。 你現在可以移除 Pod，因為該使用階段已停用。

![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. 點擊綠色按鈕返回 **Pod 管理** 畫面。

![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. 現在你已進入 **Pod 管理** 選單；按下手機上的返回按鈕返回 **DASH** 標籤。 確認 **Pod 狀態：** 欄位顯示 **無可用的 Pod** 訊息。

![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

 ![Deactivate_Pod_8](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

### 恢復胰島素輸送

**Note**: During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile** as delivery can be suspended. 在問題排除部分閱讀[**暫停交付**](#delivery-suspended)以獲取更多詳細資訊。

使用此指令指示目前暫停的活動 Pod 恢復胰島素輸送。 After the command is successfully processed, insulin will resume normal delivery using the current basal rate based on the current time from the active basal **Profile**. The pod will again accept commands for bolus, **TBR**, and **SMB**.

1. 進入 **DASH** 標籤，確認 **Pod 狀態 (1)** 欄位顯示 **已暫停**，然後按下 **恢復輸送 (2)** 按鈕以開始流程，指示目前的 Pod 恢復正常的胰島素輸送。 訊息 **恢復輸送** 將顯示在 **Pod 狀態 (3)** 欄位中。

![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. 當恢復輸送指令成功後，確認對話框將顯示訊息 **胰島素輸送已恢復**。 點擊 **OK** 以確認並繼續。

![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. **DASH** 標籤將更新 **Pod 狀態 (1)** 欄位，顯示 **運作中**，並且將不再顯示恢復輸送按鈕。

![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

### 靜音 Pod 警報

*注意 - 僅當觸發 Pod 過期或低儲液量警報時，**靜音警報** 按鈕才會在 **DASH** 標籤上顯示。 如果未顯示靜音警報按鈕且你聽到 Pod 的嗶聲，請嘗試“重新整理 Pod 狀態”。*

以下流程將向你展示當 Pod 的使用時間接近72小時（3天）到期的警告時，如何確認並關閉 Pod 的嗶聲。 此警告時間限制定義在 **距關閉時間的時數** Dash 警報設置中。 Pod 的最大使用壽命為 80 小時（3 天 8 小時），但 Insulet 建議不要超過 72 小時（3 天）限制。

1. 當達到定義的 **距關閉時間的時數** 警告時間限制時，Pod 會發出警告嗶聲，通知你即將過期並需要更換 Pod。 你可以在 **DASH** 標籤上進行驗證，**Pod 過期：** 欄位將顯示 Pod 的確切過期時間（註冊後 72 小時），且文字會在此時間過後變為 **紅色**。 在 **啟用 Pod 警報 (2)** 欄位下，狀態訊息會顯示 **Pod 即將過期**。 這也會觸發顯示 **靜音警報 (3)** 按鈕。

![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. 進入 **DASH** 標籤並按下 **靜音警報 (2)** 按鈕。 **AAPS** sends the command to the pod to deactivate the pod expiration warning beeps and updates the **Pod status (1)** field with **ACKNOWLEDGE ALERTS**.

![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. **成功停用**警報後，啟用 Pod 將發出**兩聲嗶聲**，並且確認對話框將顯示訊息**註冊警報已靜音**。 點擊 **OK** 按鈕以確認並關閉對話框。


![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. 進入 **DASH** 標籤。 在 **啟用 Pod 警報** 欄位下，警告訊息將不再顯示，且活動 Pod 將不再發出 Pod 過期警告嗶聲。

(OmnipodDASH-view-pod-history)=

### 查看 Pod 歷史紀錄

This section explains how to review your active pod history and filter by different action categories. Pod 歷史工具允許你查看在其三天（72 - 80 小時）使用壽命期間提交到目前活動 Pod 的操作和結果。

此功能有助於驗證發送到 Pod 的注射劑量、臨時基礎率和基礎指令。 其餘類別對於排除故障和確定發生失敗前的事件順序很有幫助。

*注意：* **只有最後一個指令可能是不確定的**。 在**最後的“不確定”指令被“確認”或“拒絕”**之前，*不會發送新的指令*。 “修復”不確定指令的方法是按下 **“重新整理 Pod 狀態”**。

1. 進入 **DASH** 標籤，按下 **POD 管理 (1)** 按鈕以進入 **Pod 管理** 選單，然後按下 **Pod 歷史紀錄 (2)** 按鈕以進入 Pod 歷史紀錄畫面。

![Pod_history_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)



 ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)



2. 在 **Pod 歷史紀錄** 畫面中，顯示預設類別 **全部 (1)**，以逆序顯示所有 Pod **操作 (3)** 和 **結果 (4)** 的 **日期和時間 (2)**。 Use your phone’s **back button 2 times** to return to the **DASH** tab in the main **AAPS** interface.


![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(OmnipodDASH-dash-tab)=

## DASH 標籤

以下是主 AAPS 介面中 **DASH** 標籤的佈局說明及圖示和狀態欄位的含義。

*注意：如果 **DASH** 標籤的狀態欄位中顯示 (不確定)，則你需要按下重新整理按鈕來清除此訊息並重新整理 Pod 狀態。*

![DASH_Tab_1](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

### 欄位

* **藍牙地址：** 顯示目前連線 Pod 的藍牙地址。
* **藍牙狀態：** 顯示目前的連線狀態。
* **序列號：** 顯示目前啟用的 Pod 序列號。
* **韌體版本：** 顯示目前連線的韌體版本。
* **Pod 上的時間：** 顯示 Pod 上的目前時間。
* **Pod 過期時間：** 顯示 Pod 的過期日期和時間。
* **Pod 狀態：** 顯示 Pod 狀態。
* **上次連線：** 顯示與 Pod 的最後一次通訊時間。

   - *片刻前* - 少於 20 秒前。
   - *不到一分鐘前* - 超過 20 秒但少於 60 秒前。
   - *1 分鐘前* - 超過 60 秒但少於 120 秒（2 分鐘）。
   - *XX 分鐘前* - 超過 2 分鐘，具體由 XX 的值定義。

* **上次注射：** 顯示發送到活動 Pod 的最後一次注射的劑量以及他是多長時間前發出的（以括號顯示）。
* **基礎率：** 顯示基礎率設定檔中目前時間的基礎率設定。
* **臨時基礎率：** 以以下格式顯示目前運作的臨時基礎率。

   - {每小時單位數} @{TBR 開始時間} ({運作分鐘數}/{TBR 總運作分鐘數})
   - *示例：* 0.00U/h @18:25 ( 90/120 分鐘)

* **儲液量：** 當儲液量超過 50 單位時顯示 50+ 單位。 當儲液量低於 50 單位時，顯示確切的單位數。
* **總輸送量：** 顯示從儲液中輸送的胰島素總單位數。 這包含已使用和排空的胰島素。
* **錯誤：** 顯示遇到的最後一個錯誤。 檢查[Pod 歷史](#view-pod-history)和日誌檔案以獲取過去錯誤的詳細資訊和更多訊息。
*  **啟用 Pod 警報：** 保留目前啟用 Pod 上運作的警報。

### 按鈕


![重新整理圖示](../images/DASH_images/Refresh_LOGO.png) ：向啟用的 Pod 發送重新整理指令以更新通訊。

   * 用於重新整理 Pod 狀態並消除顯示 (不確定) 訊息的狀態欄位。
   * 請參閱下面的問題排除部分以獲取更多訊息。

![POD 管理圖示](../images/DASH_images/POD_MGMT_LOGO.png) ：導航到 Pod 管理選單。

![警報消音圖示](../images/DASH_images/ack_alert_logo.png) ：按下此按鈕可停用 Pod 警報嗶聲和通知（過期、儲液量低等）。

   * 該按鈕僅在 Pod 過期警告時間已過時顯示。
   * 成功解除後，此圖示將不再顯示。

![恢復圖示](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png) ：恢復目前暫停的活動 Pod 胰島素輸送。

### Pod 管理選單

以下是通過按下**POD MGMT (1)**按鈕從**DASH**選單進入的**Pod 管理**菜單中圖示的含義。

![DASH_Tab_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

 ![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

* 2 - [**啟動 Pod**](#activate-pod)：對新的 Pod 進行灌注並啟動。
* 3 - [**停用 Pod**](#deactivate-pod)：停用目前啟用的 Pod。
* 4 - **播放測試嗶聲** ：按下時播放 Pod 的單次測試嗶聲。
* 5 - [**Pod 歷史**](#view-pod-history)：顯示當前 Pod 的活動歷史紀錄。

(DanaRS-Insulin-Pump-dash-settings)=

## Dash 設定

你可以從左上角 **漢堡選單** 下的 **組態建置工具 (1)**\ ➜\ **幫浦**\ ➜\ **Dash**\ ➜\ **設定齒輪 (3)** 中進行 Dash 驅動設定，方法是選擇標題為 **Dash** 的 **單選按鈕 (2)**。 Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the Dash menu to be displayed as a tab in the **AAPS** interface titled **DASH**.

![Dash_settings_1](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)



**注意：** 查看 **Dash 設定** 的更快方式是查看 **DASH** 標籤右上角的 **三點選單 (1)** 並從下拉選單中選擇 **Dash 偏好設定 (2)**。

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

下方列出了設定組；大多數項目可透過切換開關啟用或停用：

*注意：星號 (\*) 表示預設為啟用。*

### 確認嗶聲提示

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

提供來自藥筒的確認聲音提示，用於注射、基礎輸注、SMB以及TBR輸送和變更。

* **啟用注射嗶聲：** 啟用或停用注射時的確認嗶聲。
* **啟用基礎率嗶聲：** 啟用或停用設置新基礎率、取消啟用的基礎率或更改目前基礎率時的確認嗶聲。
* **啟用 SMB 嗶聲：** 啟用或停用當 SMB 被送達時的確認嗶聲。
* **啟用 TBR 嗶聲：** 啟用或停用設置或取消 TBR 時的確認嗶聲。

### 警報

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

Provides **AAPS** alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

*請注意，Pod 觸發警報後，AAPS 通知將始終發出。 解除通知不會取消警報，除非啟用了自動確認 Pod 警報功能。 若要手動解除警報，你必須進入 **DASH** 標籤，並按下 **靜音警報按鈕**。*

* **啟用到期提醒：** 啟用或停用在達到設定的到期時間前的 Pod 到期提醒。
* **關閉前的時數：** 定義 Pod 關閉前的幾小時，這將觸發到期提醒警報。
* **啟用儲液量低警報：** 當 Pod 剩餘的單位達到定義的數量時，啟用或停用儲液量低警報。
* **單位數：** 定義觸發 Pod 儲液量低警報的單位數量。

### 通知

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

The Notification section allows the user to so select their preferred notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus, and delivery suspended events were successful.

*注意：這些僅是通知，沒有嗶聲警報。*

* **Sound for uncertain TBR notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS** is uncertain if a TBR was successfully set.
* **Sound for uncertain SMB notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS**is uncertain if an SMB was successfully delivered.
* **Sound for uncertain bolus notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS**is uncertain if a bolus was successfully delivered.
* **啟用暫停輸送通知音效：** 啟用或停用此設定，以在暫停輸送成功送達時觸發提示音和視覺通知。

## 手動操作 (ACT) 標籤

This tab is well documented in the main**AAPS**documentation but there are a few items on this tab that are specific to how the DASH differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main **AAPS**interface.

2. Under the **Careportal (1)** section the **Insulin** and **Cannula** fields will have their **age reset** to 0 days and 0 hours **after each pod change**. 這是根據 Omnipod 幫浦的設計和運作方式所設。 由於 Pod 直接將套管插入應用 Pod 的皮膚上，因此 Omnipod 幫浦不使用傳統的管路。 *因此，在更換 Pod 後，這些數值的時間將自動重置為零。* **幫浦電池時間** 不會被報告，因為 Pod 中的電池壽命始終比 Pod 的最大壽命（80 小時）長。 每個 Pod 內都包含 **幫浦電池** 和 **胰島素儲液器**。

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### 等級

**胰島素等級**

Insulin level displayed is the amount reported by DASH. 然而，Pod 僅在儲液器低於 50 單位時報告實際的胰島素儲液量。 在此之前，會顯示「超過 50 單位」。 報告的數量並不精準：當 Pod 報告「空」時，大多數情況下儲液器仍有一些剩餘的胰島素單位。 The DASH overview tab will display as described the below:

  * **Above 50 Units** - The pod reports more than 50 units currently in the reservoir.
  * **少於 50 單位** - Pod 報告的儲液器中剩餘的胰島素量。

附加說明：
  * **SMS** - 短訊回報數值為 50+ 單位。
  * **Nightscout** - 當超過 50 單位時，向 Nightscout 上傳數值為 50（版本 14.07 及更早版本）。  更新版本將在超過 50 單位時報告數值為 50+。

## 問題排除

### 輸送暫停

  * 現在已無暫停按鈕。 If you want to "suspend" the pod, you can set a zero **TBR** for x minutes.
  * During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile**. 如果兩個指令之間的通訊失敗，則輸送可能會保持暫停。 當這種情況發生時：
     - 將不會有胰島素輸送，包括基礎率、SMB、手動注射等。
     - 可能會通知某個指令未確認：這取決於失敗發生的時間。
     - **AAPS** will try to set the new basal profile every 15 minutes.
     - **AAPS** will show a notification informing that the delivery is suspended every 15 minutes, if the delivery is still suspended (resume delivery failed).
     - 如果使用者選擇手動重新開始給藥，[**重新開始給藥**](#resuming-insulin-delivery)按鈕將會啟用。
     - If **AAPS** fails to resume delivery on its own (this happens if the pod is unreachable, sound is muted, etc), the pod will start beeping 4 times every minute for 3 minutes, then repeated every 15 minutes if delivery is still suspended for more than 20 minutes.
  * 對於未確認的指令，「重新整理 Pod 狀態」應能確認/否認他們。

<**注意：** 當你聽到 Pod 發出嗶聲時，不要假設胰島素會繼續注射而不檢查手機，注射可能已暫停，**所以一定要檢查！**

### Pod 故障

Pod 會因多種問題偶爾發生故障，包括 Pod 本身的硬體問題。 最佳做法是不要向 Insulet 報告，因為 AAPS 並非經過認證的使用情況。 一份故障代碼列表可在 [**這裡找到**](https://github.com/openaps/openomni/wiki/Fault-event-codes)，以幫助確定原因。

### 防止 49 號錯誤 Pod 故障

此故障與指令的 Pod 狀態不正確或胰島素輸送指令中的錯誤有關。 這是當驅動程式和 Pod 對實際狀態存在分歧時發生的情況。 Pod（出於內建的安全措施）會以無法恢復的錯誤代碼 49（0x31）反應，最終會變成所謂的「尖叫機」：只能透過在 Pod 背面適當位置打孔來停止的長時間刺耳嗶聲。 「49 Pod 故障」的確切原因通常難以追溯。 在某些情況下，這種故障可能發生（例如應用程式崩潰、運作開發版本或重新安裝）。

### 幫浦無法連線警報

當無法在預設的時間內與 Pod 建立通訊時，將會發出「無法到達幫浦」的警報。 可透過進入右上角的三點選單，選擇 **偏好設定**\ ➜\ **本地警報**\ ➜\ **無法到達幫浦的門檻值 [分鐘]** 來配置無法到達幫浦的警報。 建議設置的值是**120** 分鐘後提醒。

### 匯出設定

Exporting **AAPS** settings enables you to restore all your settings, and maybe more importantly, all your Objectives. You may need to restore settings to the “last known working situation” or after uninstalling/reinstalling **AAPS** or in case of phone loss, reinstalling on the new phone.

注意：匯出的設定中包含啟用的 Pod 資訊。 如果你匯入了「舊」的匯出檔案，你的目前 Pod 會「失效」。 沒有其他選擇。 In some cases (like a _programmed_ phone change), you may need to use the exported file to restore **AAPS'** settings **while keeping the current active Pod**. 在這種情況下，重要的是需要包含目前啟用 Pod 的最新匯出設定檔案。

**啟動 Pod 後立即匯出是一種好習慣**。 This way you will always be able to restore the current active pod in case of a problem. 例如，當你更換備用手機時。

定期將匯出的設定檔案複製到安全的地方（例如雲端硬碟），這樣在需要時，任何手機都能存取（例如手機遺失或實際手機的出廠重置情況下）。

### 匯入設定

**警告** 請注意，匯入設定可能會匯入過時的 Pod 狀態。 結果會是失去已啟用的 Pod ！ （參見 **匯出設定**）。 最好僅在沒有其他選擇時才嘗試這樣做。

當匯入具有啟用的 Pod 設定時，請確保匯出是在目前啟用的 Pod 下進行的。

**在有啟用 Pod 的情況下匯入：**（你有失去 Pod 的風險！）

1. 確保你匯入的設定是最近在目前啟用 Pod 下匯出的。
2. 匯入你的設定。
3. 檢查所有偏好設定。

**匯入（沒有啟用的 Pod 連線）**

1. 匯入任何最近的匯出應該可以工作（見上文）。
2. 匯入你的設定。
3. 檢查所有偏好設定。
4. 如果匯入的設定中包含任何啟用的 Pod 資料，你可能需要**停用**「不存在」的 Pod。

### 匯入包含非活動 Pod 狀態的設定

當匯入包含已不再啟用的 Pod 資料時，AAPS 將嘗試與其連線，這顯然會失敗。 在這種情況下，你無法啟動新 Pod。

To remove the old pod session “try” to de-activate the Pod. 停用將失敗。 選擇「重試」。 在第二次或第三次重試後，你將獲得移除 Pod 的選項。 Once the old pod is removed you will be able to activate a new pod.

### 重新安裝 AAPS

When uninstalling**AAPS** you will lose all your settings, objectives and the current Pod session. 為了恢復他們，請確保有一個最近匯出的設定檔案可用！

When on an active Pod, make sure that you have an export for the current pod session or you will lose the currently active pod when importing older settings.

1. 匯出你的設定並將副本存儲在安全的地方。
2. Uninstall **AAPS** and restart your phone.
3. Install the new version of **AAPS**.
4. 匯入你的設定。
5. Verify all preferences (optionally import settings again).
6. Activate a new pod.
7. 完成後：匯出目前設定。

### 更新 AAPS 至新版本

在大多數情況下，無需卸載。 你可以透過啟動新版本的安裝進行「就地」安裝。 這在啟用 Pod 在使用期間也是可以的。

1. 匯出你的設定。
2. Install the new **AAPS** version.
3. 驗證安裝是否成功。
4. RESUME the Pod or activate a new pod.
5. 完成後：匯出目前設定。

### Omnipod 驅動程式警報

請注意，Omnipod Dash 驅動程式會在**首頁總覽標籤**中顯示各種獨特的警報，其中大多數是資訊性的，可以忽略，而有些會提供使用者解決觸發警報原因的操作。 你可能會遇到的主要警報總結如下：

* 未偵測到啟動的幫浦會話。 按下**稍後提醒**可以暫時忽略此警報，但只要未啟動新 Pod，他就會持續觸發。 當此警報啟動後，會自動靜音。
* Pod suspended Informational alert that pod has been suspended.
* Setting basal **Profile** failed : Delivery might be suspended! 請手動從 Omnipod 標籤中重新整理 Pod 狀態並在需要時恢復輸送。 Informational alert that the Pod basal **Profile** setting has failed, and you will need to hit *Refresh* on the Omnipod tab.
* Unable to verify whether **SMB** bolus succeeded. 如果你確定注射未成功，應手動從治療中刪除 SMB 項目。 Alert that the **SMB** bolus command success could not be verified, you will need to verify the *Last bolus* field on the DASH tab to see if **SMB** bolus succeeded and if not remove the entry from the Treatments tab.
* 不確定「任務注射/TBR/SMB」是否完成，請手動確認是否成功。

## Where to get help for DASH

All of the development work for the DASH is done by the community on a **volunteer** basis; please keep this in mind and use the following guidelines before requesting assistance:

-  **等級 0：** 閱讀此文件的相關部分，以確保你了解遇到困難的功能應如何工作。
-  **等級 1：** 如果你仍然遇到無法解決的問題，請使用[此邀請鏈接](https://discord.gg/4fQUWHZ4Mw)進入**Discord**的*#AAPS* 頻道。
-  **等級 2：** 搜尋現有問題，以查看你的問題是否已被報告，請在[問題](https://github.com/nightscout/AndroidAPS/issues)中確認/評論/添加有關你的問題的訊息。 如果沒有，請建立一個[新問題](https://github.com/nightscout/AndroidAPS/issues)並附上[你的日誌文件](../GettingHelp/AccessingLogFiles.md)。
-  **保持耐心——我們社群中的大多數成員都是善良的志願者，解決問題通常需要使用者和開發者雙方的時間和耐心。**
