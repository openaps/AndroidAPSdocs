# 遠端控制 AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

有四種非常有效的工具可以遠端管理 **AAPS**：

1) [SMS 指令](#RemoteControl_SMS-Commands)（追蹤端手機可以是 Android 或 iOS）， 2) [AAPSClient](#RemoteControl_aapsclient)（追蹤端手機需為 Android；iPhone 版本正在開發中） 3) [Nightscout](#RemoteControl_nightscout)（Android、iOS 或其他電腦／裝置），主要用於追蹤：請參閱該章節中的[用戶端控制](#client-master-control)說明。  
4) [智慧型手錶](#RemoteControl_smartwatches)（Android）

前三個主要適合於照護者/父母，但智慧型手錶對照護者/父母**和**糖尿病患者本身都非常有用。

![圖像](../images/remote_control_and_following/AAPS_overview_remote_control_01.png)

(RemoteControl_SMS-Commands)=

## 1) SMS 指令

請參見專門的 [SMS 命令](../RemoteFeatures/SMSCommands.md) 頁面。

(RemoteControl_aapsclient)=
## 2) AAPSClient

**AAPSClient** 的外觀與 **AAPS** 本身非常相似，照護者可以使用相同的畫面和按鈕，遠端向 **AAPS** 傳送指令：

![AAPSClient 首頁](../images/v4/AapsClient/aapsclient_home.png)

(remotecontrol-aapsclient-versions)=
### 關於 AAPSClient、AAPSClient2 和 AAPSClient3

用戶端應用程式共有 3 個版本：**AAPSClient**、**AAPSClient2** 和 **AAPSClient3**。這些版本的運作方式相同。唯一的差異是，您可以在同一支追蹤端手機上並列安裝這些應用程式。

照護者若只追蹤一位使用者，只需要安裝 **AAPSClient**。若要追蹤並遠端控制第二位使用者（該使用者有自己的 **Nightscout** 網站和 **AAPS** 手機），請另外安裝 **AAPSClient2**；若要追蹤第三位使用者，則安裝 **AAPSClient3**。每個應用程式都要分別設定，並與該應用程式所追蹤使用者的 **Nightscout** 網站和 **AAPS** 手機[配對](#aapsclient-pairing-with-the-master)。

為了區分不同應用程式，部分介面元素會以不同顏色顯示：**AAPSClient** 為黃色、**AAPSClient2** 為藍色，**AAPSClient3** 為綠色。這些介面元素包括應用程式圖示、小工具背景，以及應用程式首頁上的 **AAPS** 狀態區塊。 <br/> 注意：您可以在小工具設定中調整小工具背景的不透明度。不透明度較低時，顏色會不太明顯。

![AAPSClient、AAPSClient2 和 AAPSClient3 的小工具與狀態區塊顏色](../images/remote_control_and_following/AAPSClient_and_AAPSClient2.png)

### 下載與安裝

**AAPSClient** 可以安裝在一部或多部追蹤者手機上（例如父母一的追蹤者手機和父母二的追蹤者手機），以便兩位照護者都能夠獲得權限並遠端控制患者的 **AAPS** 手機。

若要下載 **AAPSClient**，前往 [Github 儲存庫](https://github.com/nightscout/AndroidAPS/releases/) 並點擊資產 **「app-AAPSClient-release_x.x.x.x」**（可能比下方截圖所示版本更新）：

![圖像](../images/remote_control_and_following/AAPSClient_download_02.png)

然後前往電腦上的 _下載_ 資料夾。在 Windows 上，_下載項目_會顯示在右側功能區：

![圖像](../images/remote_control_and_following/AAPSClient_download_folder_03.png)

下載完成後，點擊 _顯示於資料夾中_ 來定位該檔案。

現在，**AAPSClient** apk 可以透過以下方式進行安裝：

透過 USB 傳輸線傳輸到追蹤者手機；或拖放至 Google 雲端硬碟資料夾，然後透過點擊“app-AAPSClient-release”檔案將其安裝到追蹤者手機。

如果你需要**AAPS**供自己使用，而需要**AAPSClient**來監控他人，則需要自行建置**AAPSClient**，而不是從上述GitHub儲存庫下載。原因是你無法在同一部手機上安裝**AAPS**和**AAPSClient**，因為它們是由不同的金鑰簽署的。 <br/> 要自行建置**AAPSClient**，請遵循[常見AAPS建置](../SettingUpAaps/BuildingAaps.md)的相同步驟。在**生成簽名的App Bundle或APK**頁面上，選擇**aapsclientRelease**，而不是**fullRelease**。

如果您在同一支追蹤端手機上安裝多個用戶端應用程式（**AAPSClient**、**AAPSClient2**、**AAPSClient3**），也適用相同規則：所有應用程式都必須使用**相同的簽章金鑰**簽署。否則 Android 會拒絕安裝第二個應用程式（錯誤 `INSTALL_FAILED_DUPLICATE_PERMISSION`）。

### 同步：設定 AAPSClient 和 AAPS

在追蹤端手機上安裝 __AAPSClient__ APK 後，請確認兩支手機上的 **NSClientV3** 設定相同，以搭配 Nightscout 15 使用（請參閱[更新說明](../Maintenance/UpdateToNewVersion.md)）。以下範例說明如何搭配 NSClientV3 和 Nightscout 15 設定同步；__AAPS__ 也支援其他資料來源（例如 xDrip）。

在**組態設定工具** &gt; **通訊**中，使用者透過 __NSClientV3__（使用 v3 API）將資料同步至 Nightscout，並在 __AAPS__ 和追蹤端手機上使用相同設定。

![已選取 NSClientV3 的「組態設定工具 &gt; 通訊」](../images/v4/Configuration/configuration_communication.png)

使用者必須在 AAPS 和 AAPS Client 兩支手機上設定 NSClientV3，確保兩者同步。在追蹤端手機上，也可以改為掃描 **AAPS** 顯示的 QR Code，請參閱下方的[將 AAPSClient 與 AAPS 配對](#remotecontrol-pairing)：

- 在 NSClientV3 的**設定**中輸入您的 **Nightscout 網址**

- 在相同的設定中輸入您的 **Nightscout 存取權杖**。請遵循[此處](https://nightscout.github.io/nightscout/security/#create-a-token)的說明. 在 **AAPS** 手機上使用**管理員權杖**：**AAPS** 會以此權杖為每支追蹤端手機建立專屬權杖。

- 在**兩支**手機上啟用**使用 WebSocket**。在 **AAPS** 手機上，遠端控制**必須**使用 WebSocket；若未啟用，**AAPS** 就無法接收 **AAPSClient** 傳送的指令。在兩支手機上啟用 WebSocket 也能加快同步速度，但會稍微增加電池耗電量。

![「設定 &gt; NSClientV3」畫面，包含 Nightscout 網址、Nightscout 存取權杖和「使用 WebSocket」](../images/preferences/settings_nsclient.png)


使用者應確認 __AAPSClient__ 和 __AAPS__ 都在各自手機的 **NSClientV3** 畫面中顯示「已連線」。此時 **AAPSClient** 已能追蹤 **AAPS**（血糖、治療資料、設定檔），但還無法控制 AAPS：請依照下方說明將兩支手機配對。

(remotecontrol-pairing)=
### 將 AAPSClient 與 AAPS 配對（遠端控制）

從 **AAPS** 第 4 版開始，**AAPSClient** 會透過安全的**配對**連線控制 **AAPS**。光靠同步還不夠：在手機完成配對之前，**AAPSClient** 只會顯示**管理**，其中的**設定檔**只能檢視，並提供**與主端配對**選項。

1. 在**AAPS** 手機上，開啟**管理 → 已授權的用戶端**，然後開啟**允許用戶端控制**（預設為關閉；簡易模式中則一律開啟）。
2. 點選**+**，輸入追蹤端手機的名稱，選擇設定方式，並選擇其**角色**：
   - **QR Code：Nightscout 與配對** — **AAPS** 會顯示 QR Code；掃描一次即可在追蹤端手機設定 Nightscout 並完成配對。這需要在**AAPS** 手機的 NSClientV3 設定中提供管理員權杖。
   - **PIN** — 適用於沒有相機、且已連線至 Nightscout 的追蹤端手機：記下這組一次性**PIN**（約兩分鐘後失效）。
3. 在**AAPSClient** 手機上掃描 QR Code（可在設定嚮導中掃描，或前往**管理 → 與主端配對 → 掃描 QR Code**），也可以開啟**管理 → 與主端配對**並輸入 PIN。確認.

接著，追蹤端手機會以**啟用中**的狀態顯示在**已授權的用戶端**清單中，而**AAPSClient** 也會顯示**治療**、**場景**和**管理**。追蹤端手機會取得專屬的 Nightscout 權杖，且只具備所需的權限。完整操作流程（含螢幕截圖與疑難排解）請參閱[主端 ↔ 用戶端控制](#client_master_master_setup)。

確認設定正常運作：在**AAPSClient** 中輸入碳水化合物，確認顯示的數量正確，並檢查兩支手機上的**治療**中是否都出現這筆紀錄。

(remotecontrol-nightscout-access-token)=

### 「Nightscout 存取權杖」設定問題的疑難排解

「Nightscout 存取權杖」的具體設定方式，可能會依 Nightscout 服務供應商是否提供付費代管網站而有所不同。

如果**AAPS** 無法接受「Nightscout 存取權杖」，而您使用的是付費代管的 Nightscout 網站，建議您先聯絡 Nightscout 服務供應商，詢問如何解決「Nightscout 存取權杖」相關問題。否則，請聯繫 **AAPS** 小組，但在此之前，請務必仔細檢查是否正確遵循了說明 [此處](https://nightscout.github.io/nightscout/security/#create-a-token)。

### AAPSClient 提供的功能

配對完成後，照護者在**AAPSClient** 中幾乎可以使用與**AAPS** 本身相同的畫面：

- **治療**：胰島素注射、碳水化合物及注射嚮導。
- **場景**：啟動及停止[場景](../DailyLifeWithAaps/Scenes.md)。
- **管理**：設定檔、胰島素設定、臨時目標、QuickWizard、自動化、食物、部位輪替、配對，以及目前執行中的臨時基礎率。
- **主選單**：治療紀錄、歷史資料瀏覽器、統計資料、維護、組態設定。

**AAPSClient** 沒有幫浦，也沒有目標。詳細說明請參閱[AAPSClient 應用程式](AapsClient.md)。

**AAPSClient** 讓照護者能透過行動網路或網際網路，遠端調整**AAPS** 中大多數可直接調整的項目，**包括胰島素注射**。每個指令都會經過簽章，並透過 Nightscout 傳送至**AAPS** 手機。手機會依據本機資料檢查指令、限制劑量、顯示確認畫面，確認後才會執行。 **AAPSClient** 的速度_可能_比[簡訊指令](../RemoteFeatures/SMSCommands.md)快得多，尤其是需要驗證的指令。

透過其他方式（例如 Nightscout 網站）輸入至 Nightscout 的治療紀錄，在用戶端控制開啟時不會套用：此時**AAPS** 處於[強化模式](#client-master-control-hardened-mode)，只會接受已配對用戶端傳來的變更。關閉用戶端控制時，只有在[NSClient 偏好設定中的同步區段](#Preferences-nsclient-synchronization)啟用了對應的**接收**選項，這些紀錄才會套用。

只有在同步運作正常時，才建議透過**AAPSClient**進行遠端控制（_也就是說_，沒有看到 TT、TBR 等資料自行變更等非預期情況）。

### AAPSClient 與智慧型手錶的選項

智慧型手錶可以是一個非常有用的工具，幫助管理兒童的 **AAPS**。有幾種不同的配置方式可供選擇。若在照護者的手機安裝了 **AAPSClient**，即可下載並安裝 [**AAPSClient WearOS** 應用程式](https://github.com/nightscout/AndroidAPS/releases/) 到與家長手機連線的相容智慧型手錶上。這會顯示目前的血糖與循環狀態。 **AAPSClient** 與**AAPS** 配對後，手錶上的操作（包括注射、碳水化合物、臨時目標及設定檔變更）會透過**AAPSClient** 傳送至**AAPS**，再由**AAPS** 確認並執行：請參閱[用戶端上的 Wear OS](#clientmastercontrol-wear-os-on-a-client)。你可以在[這裡](#remotecontrol-smartwatches)閱讀更多關於智慧型手錶的資訊。

(RemoteControl_nightscout)=
## 3) Nightscout

Nightscout 不僅是雲端中的伺服器，還有一個專用的 **Nightscout** 應用程式，可以直接從 iPhone 的 App Store 下載。如果你有 Android 追蹤者手機，並沒有專用的 Nightscout 應用程式，建議使用 [**AAPSClient**](#2-aapsclient)，或者如果你只想要追蹤而不發送治療資料，你可以從 Play 商店下載並安裝 [Nightwatch](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) 應用程式。

當你在 iPhone 上安裝了 **Nightscout** 應用程式，打開應用並按照設置提示進行操作，輸入你的 Nightscout 地址（見下方左側）。此地址的格式可能取決於你的 Nightscout 是如何託管的。(_例如_ http://youraddresshere.herokuapp.com)。然後輸入你的 Nightscout API 密碼（見下方右側）。如果未提示你輸入 API 密碼，請點擊應用程式頂部的鎖形圖示輸入密碼：

![圖像](../images/remote-control-24.png)

更多設置資訊可直接從 [Nightscout](https://nightscout.github.io/nightscout/discover/) 獲得

當你第一次登入時，顯示非常簡單。透過選擇右上角的「漢堡選單」並向下捲動來自訂顯示選項：

![圖像](../images/remote-control-25.png)

向下滾動到“設置”。你可能會想將 血糖 顯示的“比例”設置為“線性”，因為預設值是對數比例，並在“渲染基礎率”下選擇“預設”以顯示幫浦的基礎率。

![圖像](../images/remote-control-25b.png)

選擇你想要的選項。如果你使用其他應用程式來發出警報，請取消勾選警報。

![圖像](../images/remote-control-26.png)

繼續向下滾動直到找到“顯示外掛”。

你需要確保已勾選“照護入口”，還可以選擇其他有用的指標（最常用的包括：IOB、照護入口、幫浦、套管時間、胰島素時間、基礎率設定和 OpenAPS）。

重要的是，你現在需要點擊底部的“儲存”，以使這些更改生效。

![圖像](../images/remote-control-27.png)

按下“儲存”後，應用程式將返回你的 Nightscout 主畫面，顯示如下：

1. 目前血糖值
2. 有關 AAPS 系統狀態的資訊 - 輕觸螢幕上的各個標籤以顯示更多詳細資訊。使用漢堡選單增加或移除這些顯示選項。
3. 顯示最近的血糖趨勢以及處理（碳水化合物、注射）
4. 長期的血糖趨勢
5. 設定顯示選項、產生報告、編輯設定檔和 Nightscout 管理工具的「漢堡選單」
6. 用來輸入治療紀錄的「**+**」選單（關於**AAPS** 何時套用這些紀錄，請參閱[下方](#RemoteControl_nightscout-treatments)）。
7. 選擇不同的時間範圍來顯示
8. 基礎胰島素設定檔
9. 綠線 = 歷史血糖 藍線 = 預測血糖

![圖像](../images/remote-control-28.png)

更詳細地查看 Nightscout 應用程式左上角的選單：

1. Careportal 回溯編輯
2. 開啟/關閉警報
3. 漢堡選單 - 用於設定偏好設定
4. Careportal - 記錄治療（關於**AAPS** 何時套用這些紀錄，請參閱[下方](#RemoteControl_nightscout-treatments)）

![Nightscout 頂部欄](../images/remote-control-29.png)

此畫面上的灰色標籤包含大量關於 **AAPS** 系統狀態的資訊（點擊標籤可顯示更多資訊）：

1. 5分鐘血糖趨勢
2. 注射嚮導預覽
3. 按一下基礎來查看你目前的設定檔和基礎資訊
4. 自上次 AAPS 讀取 CGM 的時間
5. **幫浦**: 胰島素、電池百分比及上次 AAPS 何時與其連線
6. 上次 AAPS 重新整理 - 如果這超過 5 分鐘，則可能 AAPS 手機與幫浦/CGM 之間有連線問題
7. 按一下 IOB 查看基礎與注射胰島素的劑量
8. 儲存槽中的胰島素時間
9. 針頭的使用時間
10. AAPS 手機的電池狀態
11. 你的資料庫大小。如果它變得過於滿載（僅限 DIY Nightscout - 托管服務會忽略這一點），你可能會開始遇到連線問題。你可以通過管理工具選單（透過漢堡選單）刪除資料以減少資料庫大小。

![圖像](../images/remote-control-30.png)

![圖像](../images/remote-control-31.png)

按下頁面底部的「重新整理」以關閉彈出視窗。

(RemoteControl_nightscout-treatments)=
### 透過 Nightscout 應用程式向 AAPS 發送治療資料

在 **AAPS** 4 中，支援的遠端控制方式是使用**已配對的 AAPSClient**，請參閱[主端 ↔ 用戶端控制](#client-master-control)：每個用戶端都有一個[角色](#client-master-control-roles)，用來限制可執行的操作；每個指令都會由**AAPS** 手機簽章、檢查並確認。用戶端控制開啟時，**AAPS** 手機會進入[強化模式](#client-master-control-hardened-mode)：在 Nightscout 網站或 Nightscout 應用程式中輸入的治療紀錄、臨時目標及設定檔切換**都不會**套用。此時，Nightscout 應用程式只能用來查看資料。

```{admonition} Only when client control is off
:class: warning
如果<strong>管理 → 已授權的用戶端</strong>中的<strong>允許用戶端控制</strong>已關閉（且簡易模式也已關閉），<strong>AAPS</strong> 只會套用 Nightscout 中您在 [NSClientV3 設定的同步區段](#Preferences-nsclient-synchronization)內<strong>接收</strong>項目中啟用的照護入口紀錄類型：碳水化合物、臨時目標、設定檔切換及其他照護入口紀錄。絕不會透過這種方式輸注胰島素：在 Nightscout 中輸入的「校正注射」只會作為通知，<strong>AAPS</strong> 會將其計入活性胰島素，但不會實際注射。不建議使用這種設定進行遠端控制；請改用已配對的<strong>AAPSClient</strong>。
```

閱讀更多關於 **Nightscout** 的選項[此處](https://nightscout.github.io/)

### 獲取 Nightscout 應用程式最佳使用效果的小提示

1). 如果你被困在某個頁面上，並希望再次查看主畫面，只需點擊“重新整理”（底部中間），這將帶你返回 **Nightscout** 主頁，顯示 血糖 圖表。

要查看手機上目前運作的設定檔，請按圖表上方的各個圖示。按下“基礎率”可以查看更多資訊（目前的碳水化合物比率、敏感性和時區等），“OpenAPS”顯示有關設定檔和目前目標的資訊。你還可以監控手機電池百分比和幫浦電池百分比。 BWP 提供關於算法在考慮 IOB 和 COB 情況下預測未來結果的資訊。

#### 選單中的其他圖示：鉛筆（編輯）圖示是什麼意思？

你可以（技術上）使用編輯鉛筆來移動或刪除過去 48 小時內的注射或修正治療。

更多相關資訊請參閱 [這裡](https://nightscout.github.io/nightscout/discover/#edit-mode-edit)

雖然這可能對刪除已宣佈（但未實際注射）的碳水化合物有幫助，但在實際操作中，這在 **AAPS** 中並不運作良好，因此我們建議直接透過 **AAPS** 應用程式進行此類更改。

(RemoteControl_smartwatches)= (remotecontrol-smartwatches)=

## 4) 智慧型手錶

### 選項 1) 從 Wear OS 手錶控制 AAPS

![穿戴遠端 1](../images/Wear_Remote1.png)

一旦你[在你的手錶上設置**AAPS**](../WearOS/BuildingAapsWearOS.md)，有關智慧型手錶錶盤及其功能的詳細資訊可以在[智慧型手錶上操作 AAPS](../WearOS/WearOsSmartwatch.md)中找到。

簡要總覽，以下功能可以從智慧型手錶觸發：

* 設置一個臨時目標

* 使用注射計算器（計算變數可在手機設定中定義）

* 管理 eCarbs

* 進行注射（胰島素 + 碳水化合物）

* 檢查手錶設定

* 狀態

* 檢查幫浦狀態

* 檢查循環狀態

* 檢查並更改個人設定、CPP（生理時鐘百分比設定 = 時間變動 + 百分比）

* 顯示 TDD（每日總劑量 = 每日注射 + 基礎劑量）

* 遠端注射，照顧者與 T1D 兒童位於不同地點（這在 **AAPS** 手錶和 **AAPS** 手機互相連線時是可能的）

#### 從照顧者到手錶的通訊使用其他應用程式（如 WhatsApp）

可以在手錶上新增額外的應用程式，如 WhatsApp，用於照顧者與孩子之間的訊息交流（例如）。重要的是，手機上只應關聯一個 Google 帳戶，否則手錶無法同步這些資料。你需要年滿 13 歲才能擁有 Samsung 帳戶，並且此帳戶需要使用與 Android 手機相同的電子郵件地址設置。

一段解釋如何在 Galaxy 4 手錶上設定 WhatsApp 進行訊息的影片（你無法獲得 WhatsApp 的完整功能）見 [這裡](https://gorilla-fitnesswatches.com/how-to-get-whatsapp-on-galaxy-watch-4/)

在 **AAPS** 手機和手錶的 **Galaxy wearable** 應用中進行調整，讓 WhatsApp 訊息以輕微震動的方式宣告，並且 WhatsApp 訊息可以顯示在現有的錶盤上。

### 選項 2) 在手錶上運作 **AAPS**，以遠端控制手機上的 **AAPS**

與使用**AAPSClient** 追蹤端手機或簡訊指令（請參閱上方章節）類似，智慧型手錶也可用來遠端控制**AAPS**，並提供完整的設定檔資料。與使用追蹤端手機的主要差異在於，智慧型手錶透過藍牙連線至**AAPS** 手機，不需要 Nightscout 或驗證碼。另外，如果智慧型手錶與透過藍牙連線的**AAPS** 手機也都連上 Wi-Fi 或行動資料網路，手錶還能透過網路與**AAPS** 手機互動，讓通訊範圍更遠。這包括遠端注射胰島素的情況：照護者佩戴**AAPS** 手錶，而患有第 1 型糖尿病（T1D）的孩子攜帶**AAPS** 手機，兩人身處不同地點。孩子在學校時，這項功能可能很實用。

因此，遠端控制智慧型手錶在以下情況中特別有用：

a)  無法使用**AAPSClient** 或**SMS** 指令；或

b)  使用者不想輸入驗證碼（簡訊指令需要輸入驗證碼）。

智慧型手錶必須搭載**Wear OS 3 或更新版本**，才能控制**AAPS**。請確認手錶的技術規格，並參閱[智慧型手錶頁面](../Getting-Started/Watches.md)。如果不確定，請在 **AAPS** 的 Facebook/Discord 群組中搜尋或詢問。

以下提供在熱門的 Samsung Galaxy Watch 4（40 mm）上設定**AAPS** 的專屬操作指南。 Garmin 手錶也是一個受歡迎的選擇，請參閱[這裡](https://apps.garmin.com/en-US/apps/a2eebcac-d18a-4227-a143-cd333cf89b55?fbclid=IwAR0k3w3oes-OHgFdPO-cGCuTSIpqFJejHG-klBTm_rmyEJo6gdArw8Nl4Zc#0)。如果你有設置其他智慧型手錶的經驗，並且認為這對其他用戶有幫助，請[編輯文件](../SupportingAaps/HowToEditTheDocs.md)，將你的發現分享給更廣泛的 **AAPS** 社群。

### 選項 3) 在手錶上運作 AAPSClient 以遠端控制手機上的 **AAPS**

![穿戴遠端 2](../images/Wear_Remote2.png)

手錶軟體 **AAPSClient** Wear apk 可以直接從[Github](https://github.com/nightscout/AndroidAPS/releases/)下載。

若要下載軟體，請點選與手機用戶端應用程式相符的手錶應用程式：**wear-aapsclient-release_**_version_ 對應 **AAPSClient**，**wear-aapsclient2-release_**_version_ 對應 **AAPSClient2**（請參閱 [AAPSClient、AAPSClient2 和 AAPSClient3 簡介](#remotecontrol-aapsclient-versions)）：

![圖像](../images/2308c075-f41c-45bc-9c0f-3938beeaaafb.png)


然後點擊“另存為”，並將文件儲存到電腦上的方便位置：


![圖像](../images/bcf63cbc-9028-41d5-8416-fa2a31fd6f7d.png)






你可以以與**AAPS** Wear 應用相同的方式，將**AAPSClient**穿戴 apk 傳輸到手機並側載到手錶上，如[將 Wear 應用傳輸到你的 AAPS 手機](#remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)中詳細說明。  









