# Omnipod Eros

以下是配置 Omnipod Eros 代幫浦的說明（**不包括 Omnipod Dash**）。

```{admonition} Omnipod Eros is being phased out
:class: note

[Omnipod 系統](https://www.omnipod.com/current-podders/resources/omnipod-system)（原版 Omnipod，包含個人糖尿病管理器（PDM）和 Pod）即將停產，停產日期依國家／地區而異。例如，2026 年 6 月 30 日之後，加拿大將不再提供此產品。如果您使用 Eros 幫浦，請預先規劃轉換至受支援的幫浦。
```

**此軟體是 DIY 人工胰臟解決方案的一部分，並非產品，你需要閱讀、學習並了解系統，包括如何使用他。你需要對自己使用的結果負完全責任。**

```{contents} Table of contents
:depth: 1
:local: true
```

## 硬體和軟體需求

- **Pod 通訊裝置**

> 將你的 AAPS 啟用手機與 Eros 世代的 Pod 通訊的組件。
> 
> > - ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink 官網](https://getrileylink.org/product/orangelink)
> > - ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
> > - ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink 官網](https://github.com/sks01/EmaLink) - [聯絡資訊](mailto:getemalink@gmail.com)
> > - ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [聯絡資訊](mailto:Boshetyn@ukr.net)
> > - ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink 官網](https://www.getlooplink.org/) - [聯絡資訊](https://jameswedding.substack.com/) - 尚未測試

- ![Android_電話](../images/omnipod/Android_phone.png)  **行動電話裝置**

> 運作 AAPS 並向 Pod 通訊裝置發送控制指令的組件。
> 
> > - 已設定好 **AAPS** 及相關元件的[受支援 Android 手機](#Phones-list-of-tested-phones)。

- ![Omnipod_Pod](../images/omnipod/Omnipod_Pod.png)  **胰島素輸送裝置**

> 將從 Pod 通訊裝置接收到的指令進行解釋的組件，該指令來自於你的 AAPS 啟用手機。
> 
> > - 新的 Omnipod pod（Eros 世代 - **不包括 DASH**）

以下說明假設您即將開始新的 Pod 使用階段。如果不是這種情況，請耐心等候，並在下次更換 Pod 時再開始此流程。

在本頁中，**RileyLink**泛指上方列出的任何 Pod 通訊裝置。

## 開始之前

**安全第一** - 不要在無法從錯誤中恢復的環境中嘗試此過程（必備項包括額外的 pod、胰島素、已充電的 RileyLink 和手機設備）。

**當 AAPS Omnipod 驅動程式啟用你的 pod 後，你的 Omnipod PDM 將無法再運作**。以往你使用 Omnipod PDM 向 Omnipod Eros pod 發送指令。 Omnipod Eros pod 只允許單一裝置向其發送通訊。從那時起，成功啟動 Pod 的裝置將是唯一能夠與其通訊的裝置。這意味著你透過 AAPS Omnipod 驅動程式和 RileyLink 啟用了 Omnipod Eros pod，**你將無法再使用你的 PDM 與 pod 通訊**。 AAPS Omnipod 驅動程式與 RileyLink 現在替代你的  PDM。*這並不意味著你應該丟掉你的 PDM，建議保留他作為備用並在 AAPS 運作不正常時使用。*

**一次只能有一台 RileyLink 與 Pod 通訊。****AAPS**會記住一台已配對的 RileyLink。如果您配對另一台裝置，先前配對的裝置就會被取代。

**當 RileyLink 超出範圍時，你的 pod 不會關閉。** 當你的 RileyLink 超出範圍或信號被阻擋無法與活動 pod 通訊時，你的 pod 將繼續輸送基礎胰島素。啟用 pod 時，在 AAPS 中定義的基礎設定檔將會被編程到新的 pod 中。如果你失去與 pod 的連線，他會恢復到此基礎設定檔。在 RileyLink 返回範圍並重新建立連線之前，你將無法發出新的指令。

**AAPS 不支援30 分鐘基礎速率設置。** 如果你是 AAPS 新手並且首次設定基礎速率設置，請注意以半小時為間隔的基礎速率設置是不可支援的，你將需要調整基礎速率設置到整點開始。例如，如果你有一個 1.1 個單位的基礎速率，他從 09:30 開始並持續 2 小時，結束於 11:30，這將無法運作。你需要將這 1.1 單位的基礎速率更新為 9:00-11:00 或 10:00-12:00 的時間範圍。儘管 Omnipod 硬件本身支援半小時基礎速率設置，AAPS 目前無法在其演算法中考慮到這些設置。

## 在 AAPS 中啟用 Omnipod 驅動程式

你可以透過 **兩種方法** 在 AAPS 中啟用 Omnipod 驅動程式：

### 選項1：設置嚮導

安裝新版 AAPS 後，**設定嚮導**會自動啟動。如果您已從先前的安裝匯出設定，就可以在嚮導中匯入。如果是全新安裝，請繼續閱讀下方說明。

依照[設定嚮導](../SettingUpAaps/SetupWizard.md)的步驟操作，直到進入**幫浦**步驟，然後選取**Omnipod Eros**（說明文字為「Omnipod Eros 幫浦整合」）。

![設定嚮導中的幫浦步驟，並選取 Omnipod Eros](../images/setup-wizard/Wizard-Pump-Omnipod.png)

設定嚮導不會為您配對 RileyLink。完成嚮導後，開啟 Omnipod 幫浦畫面，並按照[RileyLink 設定](#OmnipodEros-rileylink-setup)一節的說明進行配對。

**或者**

### 選項 2：組態畫面

開啟左上角的**選單**（☰）> **組態設定** > **幫浦**，然後選取**Omnipod Eros**旁的**單選按鈕**。

選取後，**Omnipod Eros**卡片會顯示兩個按鈕：**設定**和**開啟外掛**：

![在「組態設定」>「幫浦」中選取的 Omnipod Eros 外掛](../images/v4/Pumps/omnipod_enabled.png)

**設定**會開啟 Omnipod 驅動程式的設定（請參閱[Omnipod 設定](#OmnipodEros-omnipod-settings)）：

![Omnipod 驅動程式設定](../images/v4/Pumps/omnipod_settings.png)

**開啟外掛**會開啟 Omnipod 幫浦畫面。您也可以隨時從主畫面選取**管理** > **幫浦**來開啟。本文將此頁面稱為**Omnipod 幫浦畫面**。配對 RileyLink 並啟動 Pod 前，畫面如下：

![配對前的 Omnipod 幫浦畫面](../images/v4/Pumps/omnipod_pump_screen.png)

### 驗證 Omnipod 驅動程式選擇

若要確認 Omnipod 驅動程式已啟用，請從主畫面開啟**管理** > **幫浦**。您應該會看到上方所示的**Omnipod Eros**幫浦畫面。如果您尚未配對 RileyLink，**RileyLink 狀態**會顯示**尚未啟動**，而**Pod 狀態**會顯示**沒有啟動中的 Pod**。

## Omnipod 配置

所有 Pod 和 RileyLink 功能都位於[Omnipod 幫浦畫面](#OmnipodEros-omnipod-pod-tab)（**管理** > **幫浦**）上，並以按鈕呈現。部分按鈕只會在特定情況下顯示，例如 Pod 已啟動時。

> ![refresh_pod_status](../images/omnipod/ICONS/omnipod_overview_refresh_pod_status.png) 重新整理幫浦連線和狀態
> 
> ![pod_management](../images/omnipod/ICONS/omnipod_overview_pod_management.png) 幫浦管理（啟動，停用，播放測試嗶聲，RileyLink 狀態和幫浦歷史紀錄）

```{admonition} Older screenshot
:class: note
以上螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，沒有 **POD MGMT** 按鈕或 Pod 管理選單；**重新整理**及所有 Pod 管理功能都以按鈕形式顯示在 Omnipod 幫浦畫面上。
```

(OmnipodEros-rileylink-setup)=

### RileyLink 設定

如果您已配對 RileyLink，請繼續閱讀下方的[啟動 Pod](#OmnipodEros-activating-a-pod)一節。

*注意：若主畫面上沒有治療按鈕（快速啟動工具列），就表示 RileyLink 很可能尚未連線。這亦會發生在 AAPS 開始運作後的約莫30秒鐘，因為他正在積極連線至 RileyLink。*

1. 請確認 RileyLink 已充飽電並開啟電源。

2. 將 RileyLink [放在手機附近](#OmnipodEros-optimal-omnipod-and-rileylink-positioning)（距離約 30 公分以內）。

3. 開啟 Omnipod 幫浦畫面（**管理** > **幫浦**），然後按下**配對 RileyLink**。

4. **配對 RileyLink**畫面會立即開始搜尋藍牙裝置。點選找到的裝置清單中的 RileyLink。

   ![正在搜尋裝置的「配對 RileyLink」畫面](../images/omnipod/eros_pair_rileylink_scanning.png)

5. 畫面顯示**RileyLink 已成功配對**，並列出裝置名稱和位址後，按下**確定**。

6. 返回 Omnipod 幫浦畫面，確認**RileyLink 狀態**已變更為**已連線**。 **Pod 狀態**應顯示**沒有啟動中的 Pod**。如果 RileyLink 無法連線，請按下**重設 RileyLink**，或重新啟動**AAPS**。

![RileyLink_Setup_1](../images/omnipod/RileyLink_Setup_1.png) ![RileyLink_Setup_2](../images/omnipod/RileyLink_Setup_2.png)

![RileyLink_Setup_3](../images/omnipod/RileyLink_Setup_3.png) ![RileyLink_Setup_4](../images/omnipod/RileyLink_Setup_4.png)

![RileyLink_Setup_5](../images/omnipod/RileyLink_Setup_5.png)

![RileyLink_Setup_6](../images/omnipod/RileyLink_Setup_6.png)

```{admonition} Older screenshot
:class: note
以上六張螢幕截圖（步驟 6 之後）來自較早版本的 **AAPS**。在 **AAPS** 4 中，請按下 Omnipod 幫浦畫面上的<strong x-id="1">配對 RileyLink</strong>按鈕來配對 RileyLink，而不是在 Omnipod 設定中使用<strong x-id="1">RileyLink 設定</strong>；系統會自動開始搜尋裝置。
```

```{note}
若要改用另一台 RileyLink（例如備用裝置），請再次按下<strong x-id="1">配對 RileyLink</strong>，然後選取新裝置。新裝置會取代先前配對的裝置。您不需要先移除舊裝置。
```

(OmnipodEros-activating-a-pod)=

### 啟動幫浦

啟動 Pod 前，請確認 RileyLink 已配對，且**RileyLink 狀態**顯示**已連線**。 RileyLink 就緒之前，**啟動 Pod**按鈕會維持停用狀態。

*提醒：幫浦的配對通訊範圍有限，是由於安全保護措施所致。配對前幫浦無線電信號較弱，但在成功配對後他將以全信號功率運作。進行這些操作時，請確保 Pod* [位於附近](#OmnipodEros-optimal-omnipod-and-rileylink-positioning) *（距離約 30 公分以內），但不要放在 RileyLink 上方或緊貼著 RileyLink。*

01. 開啟 Omnipod 幫浦畫面（**管理** > **幫浦**），然後按下**啟動 Pod**。

    如果您從未啟動過設定檔，系統會先顯示**需要設定檔**步驟。請選擇要在啟用時套用的設定檔。

    > ![Activate_Pod_1](../images/omnipod/Activate_Pod_1.png) ![Activate_Pod_2](../images/omnipod/Activate_Pod_2.png) 
    > 
    > ```{admonition} Older screenshot
    >     :class: note
    >     以上螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，<strong x-id="1">啟動 Pod</strong>是 Omnipod 幫浦畫面上的按鈕，不在 **POD MGMT** 選單中。
    > ```

02. 顯示**填充 Pod**畫面。將足夠使用 3 天的胰島素裝入新 Pod，並聽到兩聲嗶聲。這表示已裝入至少 80 單位的胰島素。即使聽到兩聲嗶聲，也請將注射器中的胰島素完全注入。計算你3天所需的總胰島素量時，請考慮灌裝幫浦將使用12到15個單位。請先不要取下 Pod 的針頭保護蓋。

    > ![Activate_Pod_3](../images/omnipod/Activate_Pod_3.png)
    > 
    > 請確認新 Pod 和 RileyLink 彼此相距不遠（約 30 公分以內），然後按下**下一步**。

03. **選取胰島素**（只有在您設定了多種胰島素時才會顯示）：選取要裝入 Pod 的胰島素，然後按下**下一步**。啟動後，系統會套用使用此胰島素的設定檔切換。

04. 在 **初始化 Pod** 畫面上，Pod 將開始排空（你會聽到點擊聲，接著是連續的滴答聲，表明 Pod 正在自我排空）。如果 RileyLink 超出啟動幫浦的範圍，你會收到一條錯誤訊息 **幫浦無回應**。如果發生這種情況，請[將 RileyLink 移近](#OmnipodEros-optimal-omnipod-and-rileylink-positioning) Pod（距離約 30 公分以內），但不要放在 Pod 上方或緊貼著 Pod，然後按下**重試**。

    > ![Activate_Pod_4](../images/omnipod/Activate_Pod_4.png) ![Activate_Pod_5](../images/omnipod/Activate_Pod_5.png)

05. 預充成功後，畫面會顯示綠色勾號，且**下一步**按鈕會變成可用。按下 **下一步**。

    > ![Activate_Pod_6](../images/omnipod/Activate_Pod_6.png)

06. **放置位置**（只有在[放置位置輪替](#Aapsscreens-site-rotation)中啟用**管理幫浦放置位置輪替**時才會顯示）：選取 Pod 在身體上的放置位置，然後按下**下一步**。

07. 畫面會顯示**安裝 Pod**。準備新的 Pod 的注射部位。取下 Pod 的塑膠針頭護蓋，撕下黏膠上的白色離型紙，然後將 Pod 貼在您選擇的身體部位。如果導管露在外面，請按**取消**，並丟棄這個 Pod。完成後，按下 **下一步**。

    > ![Activate_Pod_7](../images/omnipod/Activate_Pod_7.png)

08. 系統會顯示確認對話方塊：「按下「確定」後，導管就會插入」。**只有在您準備好插入導管時，才按下「確定」**。

    > ![Activate_Pod_8](../images/omnipod/Activate_Pod_8.png)

09. 在**插入導管**畫面中，Omnipod 可能需要一些時間才會回應並插入導管（最長約 1 到 2 分鐘），請耐心等候。

    > 如果 RileyLink 超出啟動幫浦的範圍，你會收到一條錯誤訊息 **幫浦無回應**。如果發生這種情況，請將 RileyLink 移近 Pod（距離約 30 cm 以內），但不要放在 Pod 上或緊貼 Pod，然後按**重試**。
    > 
    > 如果 RileyLink 超出藍牙範圍或未與手機有活動連線，你會收到一條錯誤訊息 **RileyLink 無回應**。如果發生這種情況，請將 RileyLink 移近手機，然後按**重試**。
    > 
    > *注意：在插入針管之前，最好輕捏針管插入點附近的皮膚。這有助於針頭順利插入，並減少堵塞的機會。*
    > 
    > ![Activate_Pod_9](../images/omnipod/Activate_Pod_9.png)
    > 
    > ![Activate_Pod_10](../images/omnipod/Activate_Pod_10.png) ![Activate_Pod_11](../images/omnipod/Activate_Pod_11.png)

10. 針管成功插入後會顯示綠色勾號，並且 **下一步** 按鈕將變為可用狀態。按下 **下一步**。

    > ![Activate_Pod_12](../images/omnipod/Activate_Pod_12.png)

11. 畫面會顯示**Pod 已註冊**。請確認導管已正確插入；如果您認為沒有插好，請更換 Pod。按下 **完成**。恭喜！你已經開始了新的 Pod 使用階段。

    > ![Activate_Pod_13](../images/omnipod/Activate_Pod_13.png) 
    > 
    > ```{admonition} Older screenshot
    >     :class: note
    >     步驟 2 到 11 的螢幕截圖來自較舊版本的 **AAPS**，在 **AAPS** 4 中可能會有所不同。此處未顯示<strong x-id="1">選擇胰島素</strong>和<strong x-id="1">部位位置</strong>步驟的畫面。
    > ```

12. 系統會帶您返回 Omnipod 幫浦畫面。由於必須先停用目前啟動的 Pod，才能註冊另一個 Pod，因此**註冊 Pod**按鈕會變成**停用 Pod**。

    幫浦畫面現在會顯示目前啟動的 Pod 資訊，包括目前的基礎率、儲藥槽液位、已輸注的胰島素、Pod 錯誤和警示。如需詳細資訊，請參閱[Omnipod 幫浦畫面](#OmnipodEros-omnipod-pod-tab)一節。

    ![Activate_Pod_14](../images/omnipod/Activate_Pod_14.png) ![Activate_Pod_15](../images/omnipod/Activate_Pod_15.png)

    ```{admonition} Older screenshot
    :class: note
    以上螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中沒有 Pod 管理選單；系統會直接帶您返回 Omnipod 幫浦畫面，而<strong x-id="1">註冊 Pod</strong>按鈕會變成<strong x-id="1">停用 Pod</strong>。
    ```

```{note}
如果註冊程序在預充後中斷（例如，應用程式已關閉），請再次按<strong x-id="1">註冊 Pod</strong>。嚮導會從插入導管的步驟繼續進行。
```

### 停用幫浦

在正常情況下，幫浦的壽命應為三天（72 小時），並在提示幫浦過期警告後額外持續8小時，總計80小時的幫浦使用。

要停用 Pod（不論是過期還是 Pod 故障）：

1. 開啟 Omnipod 幫浦畫面（**管理** > **幫浦**），然後按**停用 Pod**。

   > ![Deactivate_Pod_1](../images/omnipod/Deactivate_Pod_1.png) ![Deactivate_Pod_2](../images/omnipod/Deactivate_Pod_2.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    上方的螢幕截圖來自較舊版本的 **AAPS**。在 **AAPS** 4 中，<strong x-id="1">停用 Pod</strong>是 Omnipod 幫浦畫面上的按鈕，不在<strong x-id="1">POD 管理</strong>選單中。
   > ```

2. 在**停用 Pod**畫面中，請先確認 RileyLink 靠近 Pod，但不要放在 Pod 上或緊貼 Pod。接著按**下一步**。畫面會顯示對話方塊，詢問*已停用的藥量無法再次使用。要立即停用此藥量嗎？*按下**確定**開始停用藥量，或按下**取消**保留藥量。停用後會停止所有胰島素輸注，而且無法復原。

   > ![Deactivate_Pod_3](../images/omnipod/Deactivate_Pod_3.png)

3. 畫面會顯示**正在停用 Pod**，停用成功後，Pod 會發出確認嗶聲。

   > ![Deactivate_Pod_4](../images/omnipod/Deactivate_Pod_4.png)
   > 
   > **如果停用失敗**，且沒有聽到確認嗶聲，您可能會收到**RileyLink 沒有回應**或**Pod 沒有回應**的訊息。按**重試**，再次嘗試停用。如果一直無法停用，請按**捨棄 Pod**並確認。接著 **AAPS** 會忘記此 Pod。胰島素輸注**並未**暫停，因此請將 Pod 從身上取下。如果 Pod 發出刺耳的警報，您可能需要用針或迴紋針手動讓它靜音，因為**捨棄 Pod**不會讓警報停止。
   > 
   > > ![Deactivate_Pod_5](../images/omnipod/Deactivate_Pod_5.png)  ![Deactivate_Pod_6](../images/omnipod/Deactivate_Pod_6.png)

4. 停用成功時會顯示綠色勾號。按**下一步**，顯示**Pod 已停用**畫面。你現在可以移除 Pod，該使用階段已停用。

   > ![Deactivate_Pod_7](../images/omnipod/Deactivate_Pod_7.png)

5. 按**完成**，返回 Omnipod 幫浦畫面。

   > ![Deactivate_Pod_8](../images/omnipod/Deactivate_Pod_8.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    步驟 2 到 5 的螢幕截圖來自較舊版本的 **AAPS**，在 **AAPS** 4 中可能會有所不同。
   > ```

6. 在 Omnipod 幫浦畫面中，確認**RileyLink 狀態**顯示**已連線**，且**Pod 狀態**顯示**沒有啟動中的 Pod**。

   > ![Deactivate_Pod_9](../images/omnipod/Deactivate_Pod_9.png)  ![Deactivate_Pod_10](../images/omnipod/Deactivate_Pod_10.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    上方的螢幕截圖來自較舊版本的 **AAPS**。在 **AAPS** 4 中，按<strong x-id="1">完成</strong>會直接返回 Omnipod 幫浦畫面；此版本沒有 Pod 管理選單或<strong x-id="1">Omnipod (POD)</strong>分頁。
   > ```

### 暫停與恢復胰島素輸送

以下步驟說明如何暫停及恢復胰島素輸注。

*注意：如果您沒有看到**暫停**按鈕*，這是因為按鈕預設為隱藏。請在[Omnipod 設定](#OmnipodEros-omnipod-settings)的**其他**中，啟用**在 Omnipod 分頁中顯示「暫停輸注」按鈕**。

#### 暫停胰島素投放

使用此指令將啟用的 POD 暫停。在暫停狀態下， POD 將不再輸送任何胰島素。此指令模擬原始 Omnipod PDM 發送給啟用 POD的暫停功能。

1. 開啟 Omnipod 幫浦畫面（**管理** > **幫浦**），然後按**暫停**。暫停指令會透過 RileyLink 傳送至目前啟動的 Pod。

2. Pod 暫停所有胰島素輸注後，**Pod 狀態**會顯示**已暫停**，而**暫停**按鈕會變成**恢復輸注**。

   > ![Suspend_Insulin_Delivery_1](../images/omnipod/Suspend_Insulin_Delivery_1.png) ![Suspend_Insulin_Delivery_2](../images/omnipod/Suspend_Insulin_Delivery_2.png)
   > 
   > ![Suspend_Insulin_Delivery_3](../images/omnipod/Suspend_Insulin_Delivery_3.png)
   > 
   > ![Suspend_Insulin_Delivery_4](../images/omnipod/Suspend_Insulin_Delivery_4.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    上方的螢幕截圖來自較舊版本的 **AAPS**。在 **AAPS** 4 中，這些步驟是在 Omnipod 幫浦畫面上執行，而不是在<strong x-id="1">Omnipod (POD)</strong>分頁中執行；結果會顯示在<strong x-id="1">Pod 狀態</strong>中。
   > ```

如果指令失敗，系統會顯示**警告**對話方塊，並附上「無法暫停輸注」及失敗原因。請檢查 RileyLink 連線，然後再試一次。

#### 恢復胰島素輸送

使用此指令指示目前暫停的活動 Pod 恢復胰島素輸送。指令成功處理後，胰島素將根據目前時間並使用活動基礎率設定檔恢復正常輸送。 Pod 將再次接受注射、TBR 和 SMB 的指令。

1. 開啟 Omnipod 幫浦畫面，並確認**Pod 狀態**顯示**已暫停**。按**恢復輸注**。

2. 指令成功後，**Pod 狀態**會再次顯示**運作中**，而**恢復輸注**按鈕會消失（如果您已啟用**暫停**按鈕，該按鈕就會再次顯示）。

   > ![Resume_Insulin_Delivery_1](../images/omnipod/Resume_Insulin_Delivery_1.png) ![Resume_Insulin_Delivery_2](../images/omnipod/Resume_Insulin_Delivery_2.png)
   > 
   > ![Resume_Insulin_Delivery_3](../images/omnipod/Resume_Insulin_Delivery_3.png)
   > 
   > ![Resume_Insulin_Delivery_4](../images/omnipod/Resume_Insulin_Delivery_4.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    上方的螢幕截圖來自較舊版本的 **AAPS**。在 **AAPS** 4 中，這些步驟是在 Omnipod 幫浦畫面上執行，而不是在<strong x-id="1">Omnipod (POD)</strong>分頁中執行；結果會顯示在<strong x-id="1">Pod 狀態</strong>中。
   > ```

如果指令執行失敗，系統會顯示「**警告**」對話框，並附上「無法恢復輸注」及失敗原因。請檢查 RileyLink 連線，然後再試一次。

### 靜音 Pod 警報

*注意－只有在 Pod 有啟動警示（例如 Pod 即將到期或藥量不足警示），且未啟用**自動靜音 Pod 警示**時，Omnipod 幫浦畫面才會顯示**靜音警示**按鈕。*

以下步驟說明如何將 Pod 到達到期前警告時間時發出的嗶聲靜音。您可以在 Omnipod **警示**設定中的**關機前幾小時發出警示（80 小時）**設定警告時間。 POD 的最長使用壽命為 80 小時（3 天 8 小時），然而 Insulet 建議不要超過 72 小時（3 天）限制。

*注意－如果您已在 Omnipod **警示**設定中啟用**自動靜音 Pod 警示**，**AAPS** 會在下次與 Pod 通訊時自動將警示靜音，您不需要手動操作。*

1. 到達警告時間時，Pod 會發出嗶聲，提醒您 Pod 即將到期，需要更換。在 Omnipod 幫浦畫面中，**Pod 到期時間**會顯示 Pod 的確切到期時間（註冊後 72 小時）；到期前 4 小時會變成**黃色**。 **Pod 停止輸注時間**會顯示 Pod 停止輸注胰島素的時間。**啟動中的 Pod 警示**會顯示**Pod 即將到期**，並出現**靜音警示**按鈕。 **AAPS** 也會顯示 Pod 即將到期的通知。

   > ![Acknowledge_Alerts_1](../images/omnipod/Acknowledge_Alerts_1.png) ![Acknowledge_Alerts_2](../images/omnipod/Acknowledge_Alerts_2.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    上方的螢幕截圖來自較舊版本的 **AAPS**。在 **AAPS** 4 中，**ACK ALERTS** 按鈕改稱為 **靜音警示**，並位於 Omnipod 幫浦畫面。
   > ```

2. 按下「**靜音警示**」。 RileyLink 會傳送指令給 Pod，讓 Pod 停止發出到期警告嗶聲。

   > ![Acknowledge_Alerts_3](../images/omnipod/Acknowledge_Alerts_3.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    上方螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，按鈕名稱為 **靜音警示**。
   > ```

3. 警示靜音後，Pod 會發出兩聲嗶聲。**啟動中的 Pod 警示**不再顯示警告，**靜音警示**按鈕也會消失，且 Pod 會停止發出到期警告嗶聲。

   > ![Acknowledge_Alerts_4](../images/omnipod/Acknowledge_Alerts_4.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    上方螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，結果會顯示在 Omnipod 幫浦畫面上：警告會從<strong>啟動中的 Pod 警示</strong>中消失。
   > ```

如果指令執行失敗（例如 RileyLink 超出 Pod 的通訊範圍），系統會顯示「**警告**」對話框，並附上「無法將警示靜音」及失敗原因。將 RileyLink 移近 Pod，然後再試一次。

![Acknowledge_Alerts_5](../images/omnipod/Acknowledge_Alerts_5.png)

```{admonition} Older screenshot
:class: note
上方的螢幕截圖來自較早期的 **AAPS** 版本。在 **AAPS** 4 中，「<strong x-id="1">警告</strong>」對話框會顯示「無法將警示靜音」及失敗原因。
```

(OmnipodEros-view-pod-history)=

### 查看 Pod 歷史紀錄

本節將向你展示如何查看你的活動 Pod 歷史紀錄，並根據不同的操作類別進行篩選。 POD 歷史工具允許你查看目前啟用 POD在其三天（72 - 80 小時）壽命期間執行的動作和結果。

此功能對於驗證注射、TBR 和已完成的基礎變更很有用，但你可能不確定他們是否完成。其餘類別對於一般問題排除問題和確定故障前發生的事件順序也很有幫助。

*注意：* **不確定的**指令將出現在 POD 歷史中，但由於其性質，你無法保證其準確性。

1. 開啟 Omnipod 幫浦畫面（**管理** > **幫浦**），然後按下**Pod 紀錄**。

   > ![Pod_History_1](../images/omnipod/Pod_History_1.png) ![Pod_History_2](../images/omnipod/Pod_History_2.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    上方的螢幕截圖來自較舊版本的 **AAPS**。在 **AAPS** 4 中，<strong>Pod 紀錄</strong>是 Omnipod 幫浦畫面上的按鈕，不在 **POD MGMT** 選單中。
   > ```

2. **Pod 紀錄**畫面會依日期分組，列出所有 Pod 操作及其結果，最新的項目會顯示在最上方。預設會選取**全部**。點選上方的其中一個篩選按鈕，即可只顯示單一類別。點選左上角的返回箭頭，即可回到 Omnipod 幫浦畫面。

   > ![含有篩選按鈕的 Pod 紀錄畫面](../images/omnipod/Pod_History_3.png)

   > ![Pod_History_4](../images/omnipod/Pod_History_4.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    第二張螢幕截圖來自較早期的 **AAPS** 版本，在 **AAPS** 4 中的畫面可能會不同。
   > ```

### 查看 RileyLink 設定和歷史紀錄

**RileyLink 統計資料**畫面會顯示 RileyLink 和啟動中 Pod 的設定，以及兩者的通訊紀錄。此畫面有兩個分頁：**設定**和**紀錄**。

**RileyLink 統計資料**按鈕預設為隱藏。若要在 Omnipod 幫浦畫面顯示此按鈕，請前往[Omnipod 設定](#OmnipodEros-omnipod-settings)中的**其他**，啟用**在 Pod 管理選單中顯示 RileyLink 統計資料按鈕**。

#### 手動重新建立 POD 通訊設備的藍牙通訊

如果 Pod 通訊裝置曾離開手機的藍牙範圍一段時間，Omnipod 幫浦畫面上的**RileyLink 狀態**可能會顯示**無法讀取 RileyLink**。 **AAPS** 通常會在裝置回到範圍內時自動重新連線。如果沒有重新連線：

1. 確認 RileyLink 已開啟電源、電量充足，且位於手機附近。

2. 在 Omnipod 幫浦畫面上，按下**重設 RileyLink**。系統會顯示訊息，確認**已重設 RileyLink 組態**。請參閱下方的[重設 RileyLink 注意事項](#OmnipodEros-reset-rileylink-config-notes)。

3. 如果**藍牙連線**無法重新建立，請嘗試手動關閉然後重新開啟手機上的**藍牙功能**。

4. 如果仍然無法重新連線，請按下**配對 RileyLink**，然後再次選取您的 RileyLink。

5. 成功重新連線後，**RileyLink 狀態**會顯示**已連線**。您也可以在**RileyLink 統計資料**畫面的**設定**分頁中，查看**連線狀態**。恭喜，你現在已將配置的 POD 通訊設備重新連線到 AAPS！

![RileyLink_Bluetooth_Reset_1](../images/omnipod/RileyLink_Bluetooth_Reset_1.png) ![RileyLink_Bluetooth_Reset_2](../images/omnipod/RileyLink_Bluetooth_Reset_2.png)

![RileyLink_Bluetooth_Reset_3](../images/omnipod/RileyLink_Bluetooth_Reset_3.png)

![RileyLink_Bluetooth_Reset_4](../images/omnipod/RileyLink_Bluetooth_Reset_4.png)

![RileyLink_Bluetooth_Reset_5](../images/omnipod/RileyLink_Bluetooth_Reset_5.png)

```{admonition} Older screenshot
:class: note
以上螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，您可以在 Omnipod 幫浦畫面上按下 **重設 RileyLink** 或 **配對 RileyLink** 來重新連線，而不是在 RileyLink 設定畫面按下重新整理按鈕。
```

#### POD 通訊設備和啟用 POD設定

此畫面會顯示目前已配對的 Pod 通訊裝置，以及目前啟動中的 Omnipod Eros Pod 的資訊和狀態。資訊會自動重新整理。

1. 開啟 Omnipod 幫浦畫面（**管理** > **幫浦**），然後按下**RileyLink 統計資料**。**設定**分頁會顯示目前已配對的**RileyLink**和啟動中的 Pod（**裝置**）。

   > ![RileyLink_Statistics_Settings_1](../images/omnipod/RileyLink_Statistics_Settings_1.png) ![RileyLink_Statistics_Settings_2](../images/omnipod/RileyLink_Statistics_Settings_2.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    上方的螢幕截圖來自較舊版本的 **AAPS**。在 **AAPS** 4 中，<strong>RileyLink 統計資料</strong>是 Omnipod 幫浦畫面上的按鈕，不在 **POD MGMT** 選單中。
   > ```

   > ![RileyLink_Statistics_Settings_3](../images/omnipod/RileyLink_Statistics_Settings_3.png)

##### RileyLink 欄位

> - **位址：**已配對的 Pod 通訊裝置之 MAC 位址。
> - **名稱：**已配對的 Pod 通訊裝置之藍牙名稱。
> - **電量：**目前已連線的 Pod 通訊裝置電量。只有在啟用 **顯示 OrangeLink/EmaLink/DiaLink 回報的電量**時才會顯示。
> - **連線狀態：** POD 通訊設備與運作 AAPS 的手機之間藍牙連線的目前狀態。
> - **連線錯誤：**如果 Pod 通訊裝置的藍牙連線發生錯誤，詳細資訊會顯示在這裡。
> - **韌體版本：**目前連線的 POD 通訊設備上安裝的韌體版本。

##### 裝置欄位－有使用中的 Pod 時

> - **裝置類型：**與 Pod 通訊裝置進行通訊的裝置類型（Omnipod (Eros)）。
> - **已設定的裝置型號：**設定為與 Pod 通訊裝置進行通訊的裝置型號。
> - **已連線的裝置型號：**目前與 Pod 通訊裝置進行通訊的裝置型號。
> - **Pump Serial Number:** 目前註冊 POD 的序列號.
> - **幫浦頻率：**用於與 Pod 通訊的無線電頻率。
> - **上次使用的頻率：**Pod 上次用來與 Pod 通訊裝置通訊的已知無線電頻率。
> - **Last Device Contact:**  POD 最後一次與通訊設備接觸的日期和時間。

(omnipod-eros-rileylink-and-active-pod-history)=
#### RileyLink 和啟動 Pod 歷史

此分頁會依時間由新到舊，列出 RileyLink 或目前連線的 Pod 的各項狀態或動作。只有目前使用中的 Pod 才能查看歷史記錄。更換 Pod 後，歷史記錄會清除；系統只會記錄並顯示新註冊的 Pod 事件。

1. 開啟 Omnipod 幫浦畫面（**管理** > **幫浦**），按下 **RileyLink 統計資料**，再點選 **歷史記錄**分頁。

   > ![RileyLink_Statistics_History_1](../images/omnipod/RileyLink_Statistics_History_1.png) ![RileyLink_Statistics_History_2](../images/omnipod/RileyLink_Statistics_History_2.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    上方的螢幕截圖來自較舊版本的 **AAPS**。在 **AAPS** 4 中，<strong>RileyLink 統計資料</strong>是 Omnipod 幫浦畫面上的按鈕，不在 **POD MGMT** 選單中。
   > ```

   > ![RileyLink_Statistics_History_3](../images/omnipod/RileyLink_Statistics_History_3.png)

##### 欄位

每筆記錄都會顯示：

> - **裝置：**此動作或狀態所對應的裝置。
> - **時間：**事件發生的時間。
> - **狀態或動作：**裝置的狀態或執行的動作。

(OmnipodEros-omnipod-pod-tab)=

## Omnipod 幫浦畫面

以下說明 **Omnipod 幫浦畫面**（**管理** > **幫浦**，或 **組態設定** > **幫浦** > **開啟外掛**）上的狀態欄位和按鈕。

右上方的齒輪圖示會開啟 [Omnipod 設定](#OmnipodEros-omnipod-settings)。

*注意：如果任何狀態欄位顯示「不確定」，請按下 **重新整理**，更新 Pod 狀態並清除此提示。*

![Omnipod 幫浦畫面](../images/v4/Pumps/omnipod_pump_screen.png)

![Omnipod_分頁](../images/omnipod/Omnipod_Tab.png)

```{admonition} Older screenshot
:class: note
上方的螢幕截圖來自較早期的 **AAPS** 版本，當時這個畫面是 **Omnipod (POD)** 分頁。在 **AAPS** 4 中，這是 Omnipod 幫浦畫面，部分欄位名稱和按鈕也有所不同。
```

### 欄位

- **RileyLink 狀態：**顯示目前 RileyLink 的連線狀態. 錯誤會以紅色顯示。

- *尚未啟動*－尚未配對任何 RileyLink，或連線尚未開始。
- *無法使用 RileyLink*－Pod 通訊裝置可能不在手機的藍牙範圍內、電源已關閉，或發生故障而無法透過藍牙通訊。
- *RileyLink 就緒*－Pod 通訊裝置已開機，正在初始化藍牙連線。
- *已連線* - 幫浦連線裝置已開啟電源、連線並能夠透過藍牙進行通訊。

- **唯一識別碼：**顯示使用中 Pod 的位址。

- **LOT 編號：**顯示使用中 Pod 的 LOT 編號。

- **序號：**顯示 Pod 的序號（TID）。

- **韌體版本：**顯示啟動幫浦的韌體版本。

- **幫浦上的時間：**顯示啟動幫浦上的目前時間。如果此時間與手機時間相差超過 5 分鐘，欄位會以醒目方式標示。

- **Pod 到期時間：**顯示使用中 Pod 的到期日期和時間。到期前最後 4 小時，文字會變成黃色。文字不會變成紅色，因為 Pod 到期後仍會繼續輸注胰島素。

- **Pod 最終停止時間：**顯示 Pod 寬限期結束時間（**Pod 到期時間**的 8 小時後；Pod 最長使用時間為 80 小時）。寬限期開始時（即**Pod 到期時間**），文字會變成黃色；最終期限前最後 4 小時則會變成紅色。寬限期間也會顯示剩餘時間，例如 *（剩餘 17 分鐘）*。到達最終期限時，Pod 會停止輸注胰島素，必須更換。

- **Pod 狀態：**顯示使用中 Pod 的狀態（例如 **沒有使用中的 Pod**、**運作中**或**已暫停**）。

- **上次連線時間：**顯示上次成功與使用中 Pod 通訊的時間。超過[幫浦無法連線的門檻](#OmnipodEros-troubleshooting)時，文字會變成紅色。

- *片刻前* - 少於 20 秒前。
- *不到一分鐘前* - 超過 20 秒但少於 60 秒前。
- *1 分鐘前* - 超過 60 秒但少於 120 秒（2 分鐘）。
- *XX 分鐘前* - 超過 2 分鐘，具體由 XX 的值定義。

- **上次注射：**顯示上次傳送至使用中 Pod 的注射劑量，以及距離注射的時間（以括號標示）。

- **基礎率：**顯示基礎率設定檔中目前時段所設定的基礎率。

- **臨時基礎率：**只有在臨時基礎率運作期間才會顯示。顯示格式如下：

- 單位 / 小時 @ 發出 TBR 時（已執行的分鐘 / 總共執行的 TBR 分鐘）
- *示例：* 0.00U/h @18:25 ( 90/120 分鐘)

- **藥量：**藥量剩餘超過 50 單位時，會顯示**剩餘超過 50 U**。低於此數值時，會顯示約略的剩餘單位數。藥量低於[警示設定](#OmnipodEros-omnipod-settings)中設定的低藥量門檻時，文字會變成紅色。

- **已輸注總量：**顯示從藥量中已輸注的胰島素總單位數。*注意，這是一個近似值，因為幫浦啟動和填充過程並不精準。*

- **使用中 Pod 的警示：**保留供使用中 Pod 目前正在發出的警示使用。通常在幫浦到期超過 72 小時且原生幫浦嗶聲警告運作時使用。

- **錯誤：**顯示最近發生的錯誤（以紅色顯示）。檢查[藥囊歷史](#OmnipodEros-view-pod-history)、[RileyLink 歷史](#omnipod-eros-rileylink-and-active-pod-history)及日誌文件，以了解過去的錯誤及更多詳細訊息。

### 按鈕

幫浦畫面底部的按鈕會依目前狀況而有所不同。目前無法使用的按鈕會顯示為灰色，例如 RileyLink 尚未連線時。

**Pod 狀態按鈕**（有使用中的 Pod 時顯示）：

- **重新整理：**向使用中的 Pod 傳送重新整理指令，以更新其狀態。使用此按鈕重新整理藥量狀態，並清除包含文字「(uncertain)」的狀態欄位。請參閱下面的[問題排除部分](#OmnipodEros-troubleshooting)以獲取額外訊息。

  ![refresh_pod_status](../images/omnipod/ICONS/omnipod_overview_refresh_pod_status.png)

  ```{admonition} Older screenshot
  :class: note
  上方的螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，Omnipod 幫浦畫面上有一個名為 **重新整理** 的文字按鈕。
  ```

- **靜音警示：**將藥量到期和儲藥量不足的嗶聲與通知設為靜音。只有在藥量有啟動中的警示，且未啟用**自動將藥量警示設為靜音**時才會顯示。警示設為靜音後，按鈕便會消失。

  ![ack_alerts](../images/omnipod/ICONS/omnipod_overview_ack_alerts.png)

  ```{admonition} Older screenshot
  :class: note
  上方的螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，此按鈕名為 **靜音警示**。
  ```

- **設定時間：**將藥量的時間更新為手機目前的時間。只有在藥量時間與手機時間相差超過 5 分鐘時才會顯示。

  ![set_time](../images/omnipod/ICONS/omnipod_overview_set_time.png)

  ```{admonition} Older screenshot
  :class: note
  上方的螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，Omnipod 幫浦畫面上有一個名為 **設定時間** 的文字按鈕。
  ```

- **暫停：**暫停目前啟用中藥量的胰島素輸送。只有在設定中啟用**在 Omnipod 分頁顯示暫停輸送按鈕**時才會顯示。

  ![suspend](../images/omnipod/ICONS/omnipod_overview_suspend.png)

  ```{admonition} Older screenshot
  :class: note
  上方的螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，Omnipod 幫浦畫面上有一個名為 **暫停** 的文字按鈕。
  ```

- **恢復輸送：**恢復目前已暫停且仍在啟用中的藥量之胰島素輸送。只有在藥量已暫停時才會顯示。

  ![resume](../images/omnipod/ICONS/omnipod_overview_resume.png)

  ```{admonition} Older screenshot
  :class: note
  上方的螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，Omnipod 幫浦畫面上有一個名為 **恢復輸送** 的文字按鈕。
  ```

**藥量和 RileyLink 管理按鈕：**

![Omnipod_分頁_幫浦管理](../images/omnipod/Omnipod_Tab_Pod_Management.png)

```{admonition} Older screenshot
:class: note
上方的螢幕截圖來自較早期的 **AAPS** 版本。在 **AAPS** 4 中沒有「藥量管理」選單；這些操作都是 Omnipod 幫浦畫面上的按鈕。
```

- **啟用藥量：**為新的藥量預充並啟用。沒有啟動中的 Pod 時顯示。只有在 RileyLink 已連線時才能使用。

  ![啟動幫浦](../images/omnipod/ICONS/omnipod_overview_pod_management_activate_pod.png)

  ```{admonition} Older screenshot
  :class: note
  上方的螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，**啟用藥量**是 Omnipod 幫浦畫面上的按鈕，而不是「藥量管理」選單中的選項。
  ```

- **停用藥量：**停用目前啟用中的藥量。藥量完成配對後便會顯示；若啟用程序中途停止（例如藥量在啟用過程中故障），也會顯示。只有在 RileyLink 已連線時才能使用。 **AAPS** 會在停用 Pod 前要求您確認。

- 使用此指令停用發出錯誤 49 嚴重警告音的幫浦。
- 如果停用失敗，停用嚮導會提供**放棄藥量**選項。

  ![停用幫浦](../images/omnipod/ICONS/omnipod_overview_pod_management_deactivate_pod.png)

  ```{admonition} Older screenshot
  :class: note
  上方的螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，**停用藥量**是 Omnipod 幫浦畫面上的按鈕，而不是「藥量管理」選單中的選項。
  ```

- **播放測試嗶聲：**按下後，藥量會播放一聲測試嗶聲。藥量完成配對後便會顯示。

  ![play_test_beep](../images/omnipod/ICONS/omnipod_overview_pod_management_play_test_beep.png)

  ```{admonition} Older screenshot
  :class: note
  上方的螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，**播放測試嗶聲**是 Omnipod 幫浦畫面上的按鈕，而不是「藥量管理」選單中的選項。
  ```

- **藥量歷程：**顯示目前啟用中藥量的活動歷程。請參閱 [檢視 Pod 歷史記錄](#OmnipodEros-view-pod-history)。

  ![pod_history](../images/omnipod/ICONS/omnipod_overview_pod_management_pod_history.png)

  ```{admonition} Older screenshot
  :class: note
  上方的螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，**藥量歷程**是 Omnipod 幫浦畫面上的按鈕，而不是「藥量管理」選單中的選項。
  ```

- **配對 RileyLink：**搜尋藥量通訊裝置並進行配對。請參閱[RileyLink 設定](#OmnipodEros-rileylink-setup)。

- **RileyLink 統計資料：**開啟含有兩個分頁的 RileyLink 統計資料畫面。只有在設定中啟用**在「藥量管理」選單中顯示 RileyLink 統計資料按鈕**時才會顯示。

- **設置** - 顯示 RileyLink 和啟動幫浦的設置資訊
- **歷史** - 顯示 RileyLink 和幫浦連線歷史

  ![rileylink_stats](../images/omnipod/ICONS/omnipod_overview_pod_management_rileylink_stats.png)

  ```{admonition} Older screenshot
  :class: note
  上方的螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，**RileyLink 統計資料**是 Omnipod 幫浦畫面上的按鈕，而不是「藥量管理」選單中的選項。
  ```

- **重設 RileyLink：**重設目前已連線的藥量通訊裝置組態。開始通訊時，會將特定資料傳送至 RileyLink 並設定於其中：

- 設定記憶體暫存器
- 設定通訊協定
- 設定調諧後的無線電頻率
  > 
  > 請參閱下方的[其他注意事項](#OmnipodEros-reset-rileylink-config-notes)。

  ![reset_rileylink_config](../images/omnipod/ICONS/omnipod_overview_pod_management_reset_rileylink_config.png)

  ```{admonition} Older screenshot
  :class: note
  上方的螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，此按鈕名為 **重設 RileyLink**，位於 Omnipod 幫浦畫面上。
  ```

- **放棄藥量：**確認後，放棄無回應藥量的狀態。只有在藥量已啟動但尚未完成配對，且無法再正常停用時才會顯示：

- 當 **幫浦未完全配對** 且因此忽略停用指令時。
- 藥量在配對程序的步驟之間**卡住**。
- 當 **幫浦完全無法配對。**
  > 
  > 放棄藥量後，**AAPS** 將無法再與其通訊。請將藥量從身上取下。

  ![discard_pod](../images/omnipod/ICONS/omnipod_overview_pod_management_discard_pod.png)

  ```{admonition} Older screenshot
  :class: note
  上方的螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，**放棄藥量**是 Omnipod 幫浦畫面上的按鈕，而不是「藥量管理」選單中的選項。
  ```

(OmnipodEros-reset-rileylink-config-notes)=

#### *重設 RileyLink 注意事項*

- 此功能的主要用途是當目前啟動的幫浦連線裝置無法響應且通訊處於卡住狀態時使用。
- 如果藥量通訊裝置關機後又重新開機，請按下**重設 RileyLink**，讓這些通訊參數重新設定至藥量通訊裝置。
- 若未完成此步驟，則 AAPS 需要在幫浦連線裝置電源循環後重新啟動。
- 切換不同的 Pod 通訊裝置時，**不需要**按下此按鈕。

(OmnipodEros-omnipod-settings)=

## Omnipod 設置

若要開啟 Omnipod 驅動程式設定，請採取以下其中一種方式：

- 按下 Omnipod 幫浦畫面右上角的齒輪圖示（**管理** > **幫浦**），或
- 開啟左上角的**選單**（☰）> **組態設定** > **幫浦**，再按下 **Omnipod Eros** 卡片上的**設定**。

![Omnipod_設置_2](../images/omnipod/Omnipod_Settings_2.png)

```{admonition} Older screenshot
:class: note
上方的螢幕截圖來自較早期的 **AAPS** 版本。在 **AAPS** 4 中，請按下 **Omnipod Eros** 卡片上的 **設定**，或按下 Omnipod 幫浦畫面上的齒輪圖示來開啟設定，而不是使用 **組態設定** 中的齒輪圖示或三點選單。
```

設定分組如下。點選群組即可展開。大多數項目都是可啟用或停用的開關：

![Omnipod 驅動程式設定](../images/v4/Pumps/omnipod_settings.png)

*注意：星號（\*）表示預設設置為啟用狀態。*

### RileyLink

Pod 通訊裝置的設定。請在幫浦畫面上按下 **配對 RileyLink** 按鈕，將裝置本身配對（請參閱 [RileyLink 設定](#OmnipodEros-rileylink-setup)）。

- **使用掃描：**連線至 OrangeLink 前先進行掃描。這可能有助於改善連線。如有需要，也可以搭配其他 RileyLink 複製裝置使用。

- **顯示 OrangeLink/EmaLink/DiaLink 回報的電池電量：**顯示 OrangeLink/EmaLink/DiaLink 的實際電池電量。強烈建議所有 OrangeLink/EmaLink/DiaLink 使用者啟用此設置。

- 此設置**不支援**原始 RileyLink。
- 可能不支援 RileyLink 的替代品。
- 啟用 - 報告支援的幫浦連線裝置的目前電池電量。
- 停用 - 報告值為 n/a。

- **啟用「操作」中的電池更換記錄：**只有在啟用上方的電池電量回報設定時，才能使用此功能。某些 Pod 通訊裝置可使用可更換的一般電池。啟用此設定後，您可以新增**更換幫浦電池**[照護入口項目](#aaps-screens-careportal)，記錄更換電池的情況並重設電池使用時間。

### 確認嗶聲

提供來自藥筒的確認聲音提示，用於注射、基礎輸注、超微劑量(SMB)以及臨時基礎率(TBR)輸送和變更。

- **\*注射嗶聲啟用：**啟用或停用在注射送達時的確認嗶聲聲。
- **啟用基礎率嗶聲：** 啟用或停用設置新基礎率、取消啟用的基礎率或更改目前基礎率時的確認嗶聲。
- **\*SMB 嗶聲啟用：**啟用或停用在送達 SMB 時的確認嗶聲聲。
- **啟用 TBR 嗶聲：** 啟用或停用設置或取消 TBR 時的確認嗶聲。

### 警報

根據設定的門檻值單位，提供 AAPS 警告和 Nightscout 通知以提示幫浦到期、關閉或低庫存。

*請注意，Pod 觸發警報後，AAPS 通知將始終發出。除非啟用了**自動將 Pod 警示設為靜音**，否則關閉通知**不會**將警示設為靜音。若要**手動**將警示設為靜音，請開啟 Omnipod 幫浦畫面，然後按下**將警示設為靜音**。*

- **\*啟用效期提醒：**啟用後，到達下方設定的時間時，Pod 會發出嗶聲。
- **關機前幾小時發出警示（80 小時）：**Pod 關機前多久會觸發效期提醒（Pod 會在註冊後 80 小時關機；可設定為 1 至 8 小時，預設值為 8 小時）。
- **\*低庫存警告啟用：**啟用或停用當幫浦剩餘單位的低庫存門檻值被觸發時的警告，門檻值定義於單位數欄位。
- **單位數：**低藥量警示的觸發門檻（5 至 50 單位，預設值為 20 單位）。
- **自動將 Pod 警示設為靜音：**啟用後，仍會發出通知，但在警示開始後，下一次與 Pod 通訊時會自動將警示設為靜音。

### 通知

當不確定 TBR、SMB 或注射事件是否成功時，提供 AAPS 通知和手機警報。

*注意：這些僅是通知，沒有嗶聲警報。*

- **\*啟用 TBR 不確定通知音效：**啟用或停用此設定，以便在 AAPS 不確定是否已成功設定 TBR 時，發出聲音警示並顯示通知。
- **\*不確定 SMB 通知聲音啟用：**啟用或停用此設置以在 AAPS 不確定 SMB 是否成功送達時觸發警報聲和視覺通知。
- **\*不確定注射通知聲音啟用：**啟用或停用此設置以在 AAPS 不確定注射是否成功送達時觸發警報聲和視覺通知。

### 其他

提供進階設定以協助除錯。

- **在 Omnipod 分頁顯示暫停輸注按鈕：**在 Omnipod 幫浦畫面上隱藏或顯示**暫停**按鈕。
- **在 Pod 管理選單顯示脈衝記錄按鈕：**雖然仍列出此設定，但目前版本的幫浦畫面沒有**脈衝記錄**按鈕。

- **在 Pod 管理選單顯示 RileyLink 統計資料按鈕：**在 Omnipod 幫浦畫面上隱藏或顯示**RileyLink 統計資料**按鈕。
- **\*啟用夏令時間／時區偵測：**如果手機在實施夏令時間的地區使用，系統會自動偵測時區變更。

### 切換或移除啟動幫浦連線裝置 (RileyLink)

市面上有許多原版 RileyLink 的替代裝置（例如 OrangeLink 或 EmaLink），也可能需要使用多台相同的 Pod 通訊裝置，或準備備用裝置；在這些情況下，您可能需要切換至其他裝置。

若要切換裝置，請開啟 Omnipod 幫浦畫面（**管理** > **幫浦**），按下 **配對 RileyLink**，然後選取新裝置；操作方式請參閱 [RileyLink 設定](#OmnipodEros-rileylink-setup)。新裝置會取代先前配對的裝置。

![Omnipod_設置_2](../images/omnipod/Omnipod_Settings_2.png) ![RileyLink_Setup_2](../images/omnipod/RileyLink_Setup_2.png)

![RileyLink_設置_新增_1](../images/omnipod/RileyLink_Setup_Add_1.png)

![RileyLink_設置_新增_2](../images/omnipod/RileyLink_Setup_Add_2.png)

![RileyLink_設置_新增_3](../images/omnipod/RileyLink_Setup_Add_3.png) ![RileyLink_設置_新增_4](../images/omnipod/RileyLink_Setup_Add_4.png)

```{admonition} Older screenshot
:class: note
以上螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中，請在 Omnipod 幫浦畫面上按下 **配對 RileyLink** 來新增裝置，而非在 Omnipod 設定中使用 **RileyLink 組態設定**；系統會自動開始掃描。
```

沒有另外的按鈕可用來移除已配對的裝置。如果不再使用某個 RileyLink，只要在需要時配對新的裝置即可。

![RileyLink_設置_移除_1](../images/omnipod/RileyLink_Setup_Remove_1.png)

![RileyLink_設置_移除_2](../images/omnipod/RileyLink_Setup_Remove_2.png)

![RileyLink_設置_移除_3](../images/omnipod/RileyLink_Setup_Remove_3.png)

![RileyLink_設置_移除_4](../images/omnipod/RileyLink_Setup_Remove_4.png)

```{admonition} Older screenshot
:class: note
以上螢幕截圖來自較早版本的 **AAPS**。在 **AAPS** 4 中沒有 **移除**按鈕；配對新的 RileyLink 時，會取代先前的裝置。
```

## 狀態列與照護入口

由於 Omnipod Pod 與管路式幫浦不同，尤其是在更換新 Pod 之後，有幾個需要特別注意的地方。

主畫面[狀態列](#screens-sensor-level-battery)中的**胰島素**與**套管**使用時間，會在**每次更換 Pod 後**重設為 0 天 0 小時。這是根據 Omnipod 幫浦的設計和運作方式所設。每個 Pod 內都包含 **幫浦電池** 和 **胰島素儲液器**。由於 Pod 直接將套管插入應用 Pod 的皮膚上，因此 Omnipod 幫浦不使用傳統的管路。*因此，在更換 Pod 後，這些數值的時間將自動重置為零。* **幫浦電池時間** 不會被報告，因為 Pod 中的電池壽命始終比 Pod 的最大壽命（80 小時）長。

![貼片式幫浦的展開狀態面板：更換藥艙後，套管和胰島素使用時間顯示為 0 小時，且不顯示幫浦電池資訊列](../images/omnipod/Actions_Tab.png)

### 層級

**胰島素等級**

Omnipod Eros 幫浦中的胰島素量報告並不精準。這是因為無法確切得知 Pod 中裝入了多少胰島素；只能確認填充 Pod 時，至少注入了 80 單位（會觸發兩聲嗶聲）。一個幫浦最多可容納 200 單位。預充也可能造成差異，因為這個程序並非完全精確。考慮到這些因素，Omnipod 驅動程式已經編寫為盡可能準確地估算幫浦內剩餘的胰島素量。

> - **超過 50 單位** - 當幫浦中有超過 50 單位時，報告值為 50+ 單位。
> - **少於 50 單位** - 報告幫浦中剩餘胰島素的近似計算值。
> - **SMS** - 短訊回報數值為 50+ 單位。
> - **Nightscout** - 當超過 50 單位時，向 Nightscout 上傳數值為 50（版本 14.07 及更早版本）。更新版本將在超過 50 單位時報告數值為 50+。

**電池電量**

電池電量報告是一個可以啟用的設置，當啟用時，將返回幫浦連線裝置（如 OrangeLink、EmaLink 或 DiaLink）的目前電池電量。  RileyLink 硬體無法報告其電池電量。電池電量是在每次與幫浦連線後報告的，因此在充電時，可能不會觀察到線性的增長。手動重新整理將更新目前電池電量。當支援的幫浦連線裝置已中斷連線時，會報告 0% 的電量值。

> - **RileyLink 硬體無法報告電池電量**
> - **Omnipod 設置中**必須啟用** "顯示 OrangeLink/EmaLink/DiaLink 報告的電池電量" 設定才能報告電池電量值**
> - **電池電量報告**僅**適用於 OrangeLink、EmaLink 和 DiaLink 裝置**
> - **電池電量報告**可能**適用於其他裝置（不包括 RileyLink）**
> - **SMS** - 當有實際電量時，返回目前電池電量，否則將不返回 n/a 值
> - **Nightscout** - 當有實際電量時，報告電池電量，否則不會報告 n/a 值

(OmnipodEros-troubleshooting)=

## 問題排除

### Pod 故障

Pod 會因多種問題偶爾發生故障，包括 Pod 本身的硬體問題。最佳做法是不要向 Insulet 報告，因為 AAPS 並非經過認證的使用情況。你可以在[這裡](https://github.com/openaps/openomni/wiki/Fault-event-codes)找到錯誤代碼列表，以幫助確定原因。

### 防止 49 號錯誤 Pod 故障

此故障與指令的 Pod 狀態不正確或胰島素輸送指令中的錯誤有關。建議將 Nightscout 同步設定為*僅上傳*：在 Nightscout 用戶端的同步設定中，停用所有「從 NS 接收……」選項（請參閱 [Nightscout](../SettingUpAaps/Nightscout.md)），以避免可能發生的問題。

### 幫浦無法連線警報

建議將幫浦無法連線警示的時間設為 **120 分鐘**。按下主畫面右上角的**設定**（齒輪）圖示，選取**本機警示** > **幫浦無法連線門檻**，並將數值設為 **120**。

(OmnipodEros-import-settings-from-previous-aaps)=
### 從先前的 AAPS 匯入設定

```{admonition} Importing settings can end your active Pod
:class: warning
如果手機上已經有正在運作的 Pod，請勿勾選「同時取代幫浦設定」：Pod 工作階段會保留，只會匯入其他設定。只有在使用目前配戴的 Pod 期間匯出的檔案，才勾選此項。請參閱[無導管幫浦](#ExportImportSettings-tubeless-pumps)。
```

在兩個 Pod 之間重新安裝 **AAPS** 是最安全的做法：

1. 停用你的幫浦會話。確認你沒有啟動的幫浦會話。
2. 匯出你的設定並將副本存儲在安全的地方。
3. 卸載舊版本的 AAPS 並重新啟動手機。
4. 安裝新版本的 AAPS 並確認你沒有啟動的幫浦會話。
5. 匯入你的設定並註冊你的新幫浦。

### Omnipod 驅動程式警報

請注意，Omnipod 驅動程式會在**主畫面**顯示各種專屬警示。大多數警示僅供參考，可以關閉；有些警示則會提供操作指示，協助您排除警示原因。你可能會遇到的主要警報總結如下：

#### 沒有啟動幫浦

未偵測到啟動的幫浦會話。按下**稍後提醒**可以暫時忽略此警報，但只要未啟動新 Pod，他就會持續觸發。當此警報啟動後，會自動靜音。

#### 幫浦已暫停

此訊息警告幫浦已暫停。

#### 設置基礎率失敗。注射可能已暫停！請在 Omnipod 分頁手動重新整理 Pod 狀態，並視需要恢復輸注。

此資訊提示表示 Pod 的基礎率設定失敗。開啟 Omnipod 幫浦畫面並按下 **重新整理**；如有需要，接著按下 **恢復輸注**。

#### 無法確認 SMB 注射是否成功。如果你確定注射未成功，應手動從治療中刪除 SMB 項目。

警示：無法確認 SMB 注射是否成功。查看 Omnipod 幫浦畫面上的 **最近一次注射** 欄位，確認 SMB 是否成功。如果沒有成功，請從治療紀錄中移除此項紀錄。

#### 不確定「任務注射/TBR/SMB」是否完成，請手動確認是否成功。

由於 RileyLink 和 Omnipod 通訊的方式，可能會出現某些指令**不確定**是否已成功處理的情況。因此，有必要通知使用者此不確定性。

以下是一些可能出現不確定通知的例子。

- **注射** - 不確定的注射無法自動驗證。該通知將保持，直到下一次注射，但手動幫浦重新整理可清除訊息。*預設情況下，針對此類通知類型啟用了警報嗶聲，因為使用者需要手動確認他們。*
- **TBR、幫浦狀態、設定檔切換、時間變更** - 手動幫浦重新整理可清除訊息。
- **Pod 時間偏差 -** Pod 和手機上的時間相差過大時，AAPS 循環就難以正常運作，也無法準確預測並建議劑量。如果 Pod 和手機的時間相差超過 5 分鐘，Omnipod 幫浦畫面上就會出現 **設定時間** 按鈕。按下 **設定時間**，讓 Pod 的時間與手機時間同步。如果之後 **Pod 狀態** 顯示為 **已暫停**，請按下 **恢復輸注**，讓 Pod 恢復正常運作。

## 最佳實踐

(OmnipodEros-optimal-omnipod-and-rileylink-positioning)=

### 最佳的Omnipod與RileyLink定位

RileyLink上用來與Omnipod通訊的天線是一個433 MHz的螺旋天線。由於其結構特性，他會發射全向信號，形狀類似三維甜甜圈，而 z 軸則代表垂直站立的天線方向。這意味著在特定的操作中，特別是啟動和停用幫浦時，RileyLink應放置於最佳位置。

![Toroid_w_CS](../images/omnipod/Toroid_w_CS.png)

> *(圖1。螺旋天線在全向模式下的圖示*)

基於安全性與保全的考量，幫浦*註冊*必須在距離較近的範圍內完成（大約30公分內），比起其他操作如注射、設定臨時基礎率（TBR）或只是重新整理幫浦狀態。由於RileyLink天線的信號傳輸特性，建議不要將幫浦直接放置在RileyLink的頂部或太靠近。

下方的圖片展示了在幫浦註冊和停用時如何將RileyLink放置於最佳位置。幫浦可能會在其他位置啟動，但最好的成功率是使用下圖中的位置。

*注意：若在最佳位置下仍無法通訊，這可能是由於RileyLink的低電量，導致天線傳輸距離縮短。為避免此問題，請確保RileyLink已充飽電或在此過程中直接連線至充電線。*

![Omnipod_pod_and_RileyLink_Position](../images/omnipod/Omnipod_pod_and_RileyLink_Position.png)

## 如何尋求協助

所有Omnipod驅動的開發工作皆由社群志願者完成；當你請求協助時，請遵循以下指導原則：

- **等級 0：** 閱讀此文件的相關部分，以確保你了解遇到困難的功能應如何工作。
- **第一層：**如果你仍遇到無法解決的問題，請前往**Discord**上的*#androidaps*頻道，使用[此邀請連結](https://discord.gg/4fQUWHZ4Mw)。
- **等級 2:** 搜尋現有問題，以查看你的問題是否已經報告；如果沒有，請建立新的[問題](https://github.com/nightscout/AndroidAPS/issues)並附上[你的日誌文件](../GettingHelp/AccessingLogFiles.md)。
- **保持耐心——我們社群中的大多數成員都是善良的志願者，解決問題通常需要使用者和開發者雙方的時間和耐心。**
