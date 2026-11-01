(aapsclient-app)=
# AAPSClient 應用程式

**AAPSClient** 是 **AAPS** 的附屬 App：供第二支手機使用的伴隨 App，通常由照護者使用，用來< strong x-id="1">追蹤</strong>使用 **AAPS** 的對象。從 **AAPS** 4 版開始，照護者也可以透過已簽章的指令，遠端**控制**循環。兩支手機會透過您的 **Nightscout** 網站通訊，不需要讓手機彼此直接連線。

```{admonition} Wording used on this page
:class: note
- **用戶端** = 執行 **AAPSClient** 的手機。
- **主控端** = 擁有幫浦並執行循環的主要 **AAPS** 手機。
```

```{admonition} iPhone version in development
:class: note
目前 **AAPSClient** 只能在 Android 手機上執行。目前正在開發 iPhone 版 **AAPSClient**，並處於早期測試階段。目前尚未發布：App Store 中沒有上架，也沒有可供下載的版本。推出後，我們會更新此頁面。
```

```{contents} Table of contents
:depth: 2
:local: true
```

## AAPSClient 的功能與非功能

**AAPSClient** 的外觀和操作方式與 **AAPS** 相似，但**本身不會執行循環**：

- 它**不包含 APS 演算法**、**目標**或**幫浦驅動程式**，不會自行進行胰島素劑量控制。
- 主要 App 專用的外掛（**SMS Communicator**、**Tidepool**、**Open Humans**）也不包含在內。
- 它*包含*的功能有：**NSClientV3** 同步、血糖來源外掛、**xDrip+** 廣播，以及 **Wear OS**／**Garmin** 連接器，具備追蹤對象及轉送指令所需的一切功能。連線至用戶端的 **Garmin** 手錶可以顯示資料，但手錶傳送的碳水化合物不會記錄，而且無法連線或中斷幫浦連線：用戶端會顯示訊息，您需要改在 **AAPS** 中輸入。

您在 **AAPSClient** 中觸發的所有操作，都會由主控端（連接幫浦的手機）檢查、限制上限、確認並**執行**。專屬的[主控端 ↔ 用戶端控制](ClientMasterControl.md)頁面說明了運作方式：如何配對兩支手機、主控端如何寫入您看到的確認文字、從用戶端啟動的注射如何送出，以及主控端離線時會發生什麼情況。

## 版本：AAPSClient、AAPSClient2 和 AAPSClient3

同一支追蹤者手機上最多可以並排安裝 3 個用戶端 App，各自追蹤**不同**的對象：**AAPSClient**（黃色貓頭鷹圖示）、**AAPSClient2**（藍色貓頭鷹），以及 **AAPS** 4 版新增的 **AAPSClient3**（綠色貓頭鷹）。它們的功能完全相同。只有名稱和顏色不同（App 圖示、小工具背景和首頁的狀態區塊），方便您區分。每個 App 都會與各自的主控端配對。詳情請參閱[關於 AAPSClient、AAPSClient2 和 AAPSClient3](#remotecontrol-aapsclient-versions)。

## 取得 App

**AAPSClient** 的取得方式與 **AAPS** 相同，請參閱[下載及安裝 AAPSClient](#RemoteControl_aapsclient)，並按照安裝主要 App 的方式安裝（[轉移及安裝](../SettingUpAaps/TransferringAndInstallingAaps.md)）。

## 首次啟動：較精簡的設定嚮導

首次啟動時，**AAPSClient** 會執行您在 **AAPS** 中熟悉的相同**設定嚮導**，但步驟少得多；追蹤者不需要設定設定檔、胰島素、幫浦、APS 或目標：

1. **歡迎**、**授權合約**、**權限**和**主控端密碼**——與主要 App 相同，請參閱 [AAPS 設定嚮導](../SettingUpAaps/SetupWizard.md)。
2. 用戶端**不會**詢問**單位**或**低／高標記**：連線至 Nightscout 後，便會從主要手機取得這些設定。之後可在**設定**中查看，旁邊的小型**手機圖示**表示這些設定已[與主要手機同步](#client-master-config-prefs)。只有在主控端可連線時，才能編輯這些設定。
3. **從主控端設定**——在主控端開啟**管理 → 已授權的用戶端**，使用**QR Code**新增這支手機，然後在此處點選**掃描 QR Code**。掃描一次即可使用這支手機專屬的權杖設定 Nightscout，並透過配對碼配對手機。手機也會將它在主控端新增時使用的名稱設為執行個體名稱（帶重音符號的字母會轉成一般字母，例如「Miloš」會變成「Milos」）。**掃描後即完成設定**：嚮導會關閉，因為接下來的步驟只會顯示掃描配對碼所完成的設定。如果沒有 QR Code，請略過此步驟。（僅限 Android：iOS 目前尚未提供掃描器。）

   ![「從主控端設定」步驟中的「掃描 QR Code」按鈕](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

4. **通訊**——外掛清單只會顯示追蹤者需要的項目（NSClientV3、xDrip+、Wear、外部伴隨 App、Garmin）。如果您沒有掃描 QR Code，請啟用 **NSClientV3**，並輸入與主要手機相同的 **Nightscout 網址**和存取權杖，並啟用 **WebSocket**，設定方式詳見[同步](#RemoteControl_aapsclient)。

   ![用戶端的通訊步驟](../images/v4/AapsClient/aapsclient_wizard_communication.png)

5. **與主控端配對**——只有用戶端才有此步驟。此步驟會使用 PIN 碼，透過安全指令通道將這支裝置連線至主控端，並取得手機在主控端新增時使用的名稱，與 QR Code 的設定方式相同。**配對後即完成設定。**您也可以略過此步驟，稍後隨時前往**管理 → 與主控端配對**進行配對。

   ![用戶端嚮導中的「與主控端配對」步驟](../images/v4/AapsClient/aapsclient_wizard_pair_step.png)

6. **誰在使用這支手機？**——僅在您沒有於嚮導中配對時顯示：輸入這支手機使用者的名稱。這有助於在報告和同步資料中區分此執行個體。

(aapsclient-pairing-with-the-master)=

## 與主控端配對

在**主控端**開啟**管理 → 已授權的用戶端**，然後新增用戶端。有兩種配對方式：

- **使用 QR Code**（最快的方式，前提是手機有相機）：掃描嚮導步驟「**從主裝置設定**」中的 QR Code，或前往 **管理 → 與主裝置配對 → 掃描 QR Code**，再按下「**使用**」確認。這也會一併設定 Nightscout。
- **使用 PIN 碼**：在**用戶端**開啟上述嚮導步驟（或前往 **管理 → 與主裝置配對**），輸入主裝置上顯示的一次性 PIN 碼，然後按下「**配對**」。接著，用戶端會顯示即將信任的裝置，請按下「**配對**」確認：

![完成配對前，請在用戶端確認](../images/v4/AapsClient/aapsclient_pair_confirm.png)

透過嚮導成功配對後，設定即告完成，並會開啟首頁。在主裝置的[已授權用戶端](#client_master_master_setup)清單中，該用戶端會顯示為**啟動**。配對後，前往**管理 → 與主裝置配對**會顯示「*已配對*」、手機的角色，以及強化模式是否已啟用：

![已配對的用戶端中「管理 → 與主裝置配對」畫面：已配對，角色：照護者，強化模式已啟用](../images/v4/ClientMaster/pair_with_master_client.png) 完整的配對流程、安全性詳細資訊及疑難排解，請參閱[主裝置 ↔ 用戶端控制](#client_master_client_setup)。

配對後，主裝置會提供用戶端專屬的 Nightscout 權杖（如果主裝置有管理員權杖），且權限僅限用戶端所需。用戶端也會停止使用您可能曾輸入的權杖。 **AAPSClient** 不會自行將治療或血糖寫入 Nightscout：用戶端執行的所有操作都會傳送至主裝置，再由主裝置寫入。請參閱[用戶端專屬的 Nightscout 權杖](#client-master-control-own-token)。

主裝置會透過**[角色](#client-master-control-roles)**決定這支手機可以執行哪些操作（唯讀、餐點、照護者或管理員）。**管理 → 與主裝置配對**會顯示手機的角色。

## 首頁

用戶端的首頁會呈現所追蹤循環的資訊：

![AAPSClient 首頁](../images/v4/AapsClient/aapsclient_home.png)

- **血糖、圖表、IOB/COB 和設定檔**會從 Nightscout 取得，與主裝置上傳的內容相同。
- 顯示的**循環狀態**是**主裝置的**狀態（用戶端本身沒有循環）。用戶端尚未從 Nightscout 收到主裝置目前的運作模式前，運作模式標籤會顯示**問號**（未知）。
- **狀態卡片**會顯示從 Nightscout 裝置狀態取得的**追蹤中幫浦**藥量與電池電量，以及上傳器的電池電量。用戶端沒有幫浦，因此沒有本機幫浦狀態，應用程式中也沒有任何幫浦管理功能。
- 用戶端配對後，底部列會顯示**治療**、**情境**和**管理**；配對前則只會顯示**管理**。用戶端沒有幫浦或目標索引標籤。

## 治療與操作

**管理**中的所有功能都和主要應用程式相同，但有一項重要差異：在用戶端上，會改變治療的操作（注射、碳水化合物、臨時目標、情境等）在**裝置配對前會隱藏**；配對後，這些操作會**轉送至主裝置**，由主裝置確認並執行。請參閱[使用遠端控制](#client-master-control)。

**設定檔**是例外：即使是**尚未配對**的用戶端也會顯示此項目，但只能**檢視**。用戶端會顯示透過 Nightscout 接收的設定檔（用戶端需要這些設定檔進行自己的計算），但沒有編輯或啟用按鈕。用戶端**配對**後，設定檔清單會與主裝置同步，您也可以像執行其他遠端操作一樣，從用戶端編輯及啟用設定檔。

**尚未配對**的用戶端中，**管理**只會顯示**設定檔**和**與主裝置配對**：

![尚未配對的用戶端「管理」畫面：只有「設定檔」和「與主裝置配對」](../images/v4/AapsClient/aapsclient_manage_unpaired.png)

紅色橫幅「*無法連線至主裝置。連線恢復前，無法進行編輯。*」也會出現在尚未配對的用戶端上。這是正常情況：目前還沒有可連線的主裝置。用戶端配對且主裝置上線後，橫幅就會消失。

用戶端配對後，就會顯示治療操作：

![已配對用戶端的「管理」畫面，包含「與主裝置配對」項目](../images/v4/AapsClient/aapsclient_manage.png)

畫面中**沒有「幫浦」項目**，因為用戶端沒有幫浦。

如果無法連線至主裝置，已配對的用戶端也會顯示相同的橫幅：治療操作會變成灰色，而您嘗試執行的任何操作都會在傳送前遭到阻止。當您嘗試執行操作時，用戶端會偵測到主裝置離線；主裝置重新上線後，這些操作就會恢復啟用。

![主裝置離線時，已配對用戶端的「管理」畫面：橫幅下方的操作呈灰色](../images/v4/AapsClient/aapsclient_manage_master_offline.png)

## 與主裝置同步的設定

主裝置與已配對的用戶端會同步使用中的外掛**組態**及許多**偏好設定**；已同步的項目會標示小型**手機圖示**。無法連線至主裝置時，這些項目會停用，並顯示「*無法連線至主裝置*」橫幅。相關說明請參閱[變更組態與偏好設定](#client-master-config-prefs)。

## 智慧型手錶上的 AAPSClient

Wear OS 手錶可以與**用戶端**手機配對；手錶上的操作會透過用戶端轉送至主裝置。請參閱 [Wear OS](../WearOS/WearOsSmartwatch.md) 及[遠端控制中的智慧型手錶選項](#RemoteControl_smartwatches)。
