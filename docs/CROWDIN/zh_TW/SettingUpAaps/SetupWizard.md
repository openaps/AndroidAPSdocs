# AAPS設定嚮導

```{contents} In this page
:backlinks: entry
:depth: 2
```

當你首次啟動**AAPS**時，系統會引導你使用「**設定嚮導**」，以便快速設置應用程式的所有基本配置。**設定嚮導**會引導你，以避免遺忘某些關鍵內容。例如，**權限設定**對於正確設置**AAPS** 是非常重要的。

不過，在首次使用**設定嚮導**時，並不一定需要完全配置所有內容，你可以輕鬆地退出嚮導，稍後再返回。完成**設定嚮導**後，您可以透過以下三種方式進一步最佳化或變更組態。這些路徑將在下一部分進行解釋。因此，如果你在設定嚮導中跳過了一些選項，沒關係，你可以輕鬆地稍後配置他們。

在使用**設定嚮導**期間及其後，你可能不會注意到**AAPS**中有任何顯著可見的變化。要啟用你的**AAPS**循環，你必須遵循**目標**以啟用每一項功能。你會在設定嚮導結束時開始**目標 1**。你是**AAPS**的主導者，而不是相反。

```{admonition} Preview Objectives
:class: note
如果你想知道目標的結構，請閱讀[完成目標](../SettingUpAaps/CompletingTheObjectives.md)，然後先返回這裡運行設定嚮導。

```

從以往經驗中，我們知道新用戶經常會給自己施加壓力，希望儘快設置**AAPS**，這可能會導致挫折，因為這是個龐大的學習曲線。

因此，請花時間配置你的循環，運行良好的**AAPS**循環帶來的好處是巨大的。

```{admonition} Ask for Help
:class: note
如果文件中有錯誤或你對如何解釋某些內容有更好的想法，你可以按照[與其他用戶聯繫](../GettingHelp/WhereCanIGetHelp.md)的說明向社區尋求幫助。
```
## 歡迎訊息

開啟設定嚮導時，畫面會先顯示簡短的歡迎訊息，並立即在螢幕底部顯示「**需要的權限**」面板（請參閱下一節）。

授予所需權限後，面板會關閉，歡迎畫面上會顯示「**下一步**」按鈕。按下「**下一步**」繼續：

![歡迎](../images/setup-wizard/Wizard-Welcome.png)

## 必要的權限

**AAPS** 需要一些權限才能正常運作。嚮導會將所需權限列在同一個「**需要的權限**」面板中，每個項目旁都有自己的「**授予**」按鈕。請逐一授予權限；完成後，每個項目旁的圖示都會變成勾選記號。

![權限](../images/setup-wizard/Wizard-Permissions.png)

### 電池優化

由於電池效能仍相當有限，智慧型手機的電量消耗需要特別留意。因此，你的智慧型手機上的 Android 作業系統會對允許應用程式在背景執行並耗用 CPU 時間（也就是電量）採取較嚴格的限制。

然而，**AAPS** 需要定期運行，_例如_每幾分鐘接收血糖讀值，然後根據你的規範應用算法來決定如何處理你的血糖水平。因此，您必須將 **AAPS** 排除在電池最佳化之外。

點選「**電池最佳化**」旁的「**授予**」，然後在「要允許應用程式永遠在背景執行嗎？」對話方塊中選擇「**允許**」：

![允許背景執行](../images/setup-wizard/Wizard-Permissions-Battery.png)

(SetupWizard-StoragePermission)=

### AAPS 目錄

**AAPS** 需要將設定和記錄資訊儲存在智慧型手機的永久儲存空間中。永久儲存意味著即使重啟智慧型手機後，他仍然可用。其他訊息則會遺失，因為他們沒有儲存到永久儲存中。

點選「**AAPS 目錄**」旁的「**授予**」。手機會開啟檔案系統，讓您選擇 **AAPS** 儲存資訊的位置。

```{tip}
建議選擇 AAPS 的預設目錄。</br>
請不要選擇 AAPS 的子目錄。
```

預設目錄是 **AAPS**，但你可以使用任何慣用的目錄。如有需要，請建立目錄，進入該目錄後選擇「**使用這個資料夾**」：

![選取資料夾](../images/setup-wizard/Wizard-Permissions-Directory.png)

在確認視窗中選擇「**允許**」，授予 **AAPS** 存取所選目錄的權限：

![允許存取資料夾](../images/setup-wizard/Wizard-Permissions-Directory-Allow.png)

### 通知

如果應用程式希望向你發送通知，Android需要特殊的許可。

停用社群媒體應用程式等的通知是很實用的功能，但您必須允許 **AAPS** 傳送通知。

點選「**通知**」旁的「**授予**」，並在系統提示時選擇「**允許**」：

![允許通知](../images/setup-wizard/Wizard-Permissions-Notifications.png)

### 警報與提醒

在 **Android 14 或更新版本**中，**AAPS** 需要「**鬧鐘和提醒**」權限，才能在 **AAPS** 於背景執行時喚醒螢幕，並確保提醒（例如由**自動化**發出的提醒）準時響起。

只有在需要時才會顯示此項目。將 **AAPS** 排除在電池優化之外（請參閱上文）後，Android 會自動授予精確鬧鐘權限，該項目也會消失。如果該項目仍列在清單中，請按一下「**授予**」（位於「**鬧鐘與提醒**」旁）。這會開啟 **AAPS** 的系統設定畫面；啟用切換開關後，返回 **AAPS**。 Android 13 及更舊版本不會顯示此項目，因此不需要採取任何動作。

所有權限都顯示勾號後（Android 14 及更新版本為四個，其餘版本為三個），「**需要的權限**」面板會自動關閉。接著，您可以在歡迎畫面按一下「**下一步**」繼續。

(setup-wizard-bluetooth-battery-optimisation)=
### 藍牙電池優化

```{admonition} Extra Android setting, not part of the Wizard
:class: note
以下是設定嚮導以外需要進行的其他 Android 設定。這不是上方的「授予」按鈕之一，但對於確保幫浦連線穩定非常重要。
```

較新版本的 Android 也對系統藍牙應用程式加入了電池優化功能。

除了停用 **AAPS** 的電池優化功能外，您可能也需要停用藍牙系統應用程式的電池優化功能。未這麼做可能會導致幫浦連線中斷與問題。

***注意：xDrip 說明文件在此介紹如何操作：[xDrip 說明文件](https://navid200.github.io/xDrip/docs/BluetoothBatteryOpt.html)***

請按照以下步驟在 Android 16 上操作；其他版本的步驟可能會與提供的螢幕截圖略有不同：

1. 開啟 Android 設定並搜尋 **Apps**，然後開啟 Apps 設定。

   ![settings_apps](../images/setup-wizard/settings_apps.png)

2. 你會看到 App 設定，但我們需要展開以查看所有 App，點擊 **See all apps** 以展開。

   ![settings_apps](../images/setup-wizard/apps_not_expanded.png)

3. 藍牙應用程式是系統應用程式，預設會隱藏，因此我們需要先顯示系統應用程式。按一下右上角的**三個點**（⋮）（1）。接著按一下**顯示系統應用程式**（2）。

   ![settings_apps](../images/setup-wizard/show_system.png)

4. 搜尋 `Bluetooth` 應用程式，點擊 `Bluetooth` 以及／或 `Legacy Bluetooth`。若兩者皆存在，請確保兩者都依照此流程設定。

   ***注意：可以放心忽略 `Bluetooth MIDI Service`，AAPS 並未使用它。***

   ![settings_apps_1](../images/setup-wizard/apps_search_blue_13-14.png)    ![settings_apps_2](../images/setup-wizard/apps_search_blue_12.png)    ![settings_apps_3](../images/setup-wizard/apps_search_blue_15.png)

   1. 在 Android 12 點擊 `Battery`，Android 13+ 點擊 `App battery usage`，

   ![settings_apps_16](../images/setup-wizard/app_bluetooth.png))![settings_apps_12](../images/setup-wizard/app_bluetooth_12.png)

5. 在 Android 12+ 選擇 `Unrestricted` 選項；在 Android 15+ 需要展開 `Allow background usage` 設定，點擊紅色標示的區域展開，然後依步驟 6 完成。

   ![bluetooth_settings_apps_12](../images/setup-wizard/app_bluetooth_unrestricted_12-14.png)    ![bluetooth_settings_apps_15](../images/setup-wizard/app_bluetooth_allow_background.png)

6. 在 Android 16 選擇 `Unrestricted`

   ![settings_apps](../images/setup-wizard/app_bluetooth_allow_background_unrestrict.png)

## 許可協議

在最終用戶授權協議中，有關於使用**AAPS**的法律事宜的重要訊息。請仔細閱讀。

如果你不理解或無法同意最終用戶授權協議，請根本不要使用**AAPS**！

如果您了解並同意，請按一下「**我了解並同意**」按鈕，然後依照設定嚮導的指示操作：

![最終使用者授權合約](../images/setup-wizard/Wizard-EULA.png)

同意後，畫面會顯示「**下一步**」按鈕。按一下「**下一步**」。

下一個畫面「**權限**」會再次列出各項權限。由於您已在一開始授予這些權限，所有項目都應該顯示勾號。如果有任何項目未顯示勾號，請按一下該項目旁的「**授予**」。按下「**下一步**」繼續：

![已授予權限](../images/setup-wizard/Wizard-Permissions-Granted.png)

## 主密碼

**AAPS** 的設定包含一些敏感資料（_例如_ Nightscout 伺服器的存取權杖），因此系統會使用您在此設定的密碼進行加密。

嚮導會顯示「**尚未設定密碼**」。按一下「**設定**」：

![未設置主密碼](../images/setup-wizard/Wizard-MasterPassword-NotSet.png)

這會開啟「**保護**」畫面。按一下「**主密碼**」（目前顯示為「尚未設定密碼」）：

![保護](../images/setup-wizard/Wizard-Protection.png)

在兩個欄位中輸入相同的密碼，然後按一下「**確定**」：

![密碼](../images/setup-wizard/Wizard-Password.png)

按左上角的箭頭返回。此時嚮導會顯示「**密碼已設定！**」：

![已設定主密碼](../images/setup-wizard/Wizard-MasterPassword-Set.png)

```{admonition} Do not lose your Master Password
:class: danger
請<strong>務必保管好您的主密碼，切勿遺失</strong>。請記下密碼，例如儲存在 Google 雲端硬碟中。Google 會為您備份資料，因此這是個不錯的選擇。你的智慧型手機或電腦可能會崩潰，並且你可能沒有實際副本。如果你忘記了主密碼，日後可能很難恢復你的設定檔案和在 **目標** 中的進展。
```

完成後，按一下「**下一步**」前往下一個畫面。

(setup-wizard-import-settings)=
## 匯入設置

只有當 **AAPS** 在 **AAPS** 目錄中找到先前匯出的設定（「找到已儲存的設定」）時，才會顯示此畫面。例如，重新安裝應用程式或換用新手機時，就可能會看到此畫面。

- 若要還原先前的組態，請按一下「**匯入設定**」— 請參閱 [匯出與匯入設定](../Maintenance/ExportImportSettings.md)。
- 若要使用新的組態，請按一下「**下一步**」，並繼續操作嚮導。

![匯入設置](../images/setup-wizard/Wizard-ImportSettings.png)

## 單位 (mg/dL <-> mmol/L)

請選擇血糖值的單位是 mg/dL 還是 mmol/L，然後按一下「**下一步**」按鈕：

![單位](../images/setup-wizard/Wizard-Units.png)

## 顯示設置

在此設定感測器血糖顯示的「**低標**」和「**高標**」。介於這兩個標示之間的血糖值會顯示為「目標範圍內」。您可以先保留預設值（72 和 180 mg/dL），之後再修改。

你選擇的值只會影響圖表的圖形展示，其他方面不會受到影響。

你的血糖目標_例如：_在你的個人設定中單獨配置。

你的TIR（範圍內時間）分析範圍在你的報告伺服器中單獨配置。

如有需要，請使用「−」／「+」按鈕調整標示，然後按一下「**下一步**」按鈕：

![顯示設置](../images/setup-wizard/Wizard-Display.png)

(SetupWizard-synchronization-with-the-reporting-server-and-more)=
## 通訊

「**通訊**」畫面會列出用於上傳、同步及廣播資料的外掛：

- **SMS Communicator** – 使用 SMS 指令遠端控制 **AAPS**
- **NSClientV3** – 使用 v3 API 與 Nightscout 同步資料
- **Tidepool** – 將資料上傳至 Tidepool
- **xDrip** – 將資料傳送至 xDrip
- **Open Humans** – 將您的糖尿病資料上傳並捐贈給科學研究計畫
- **Wear** – 透過 WearOS 手錶監控並控制 **AAPS**
- **外部輔助應用程式** – 將資料廣播至各種外部應用程式
- **Garmin**－連線至 Garmin 裝置

![通訊](../images/setup-wizard/Wizard-Communication.png)

向下捲動即可查看清單中的其他項目：

![更多通訊設定](../images/setup-wizard/Wizard-Communication-More.png)

您現在可以設定其中幾項設定，但第一次使用時，我們先只設定回報伺服器。如果目前無法完成設定，請先略過，之後再設定即可。

在此範例中，我們使用 Nightscout 作為回報伺服器。勾選「**NSClientV3**」右側的方塊以啟用此功能。對於Tidepool來說，這更簡單，因為你只需要你的個人登錄訊息。

啟用後，請按下 NSClientV3 下方的「**設定**」進行設定：

![NSClientV3](../images/setup-wizard/Wizard-Communication-NSClient.png)

在此設定 Nightscout 回報伺服器。 NSClientV3 設定會顯示在同一個可捲動的頁面中：

![NSClientV3 設定](../images/setup-wizard/Wizard-NSClientV3.png)

按下「**Nightscout URL**」，並輸入您的 Nightscout 伺服器網址（您自行設定或服務供應商提供給您的網址）。按下「**確定**」確認。

按下「**Nightscout 存取權杖**」，並輸入 Nightscout 伺服器的存取權杖。沒有這個權杖，無法存取。如果您還沒有存取權杖，請參閱設定回報伺服器的說明文件。

請保持啟用「**使用 WebSocket**」，以便與 Nightscout 即時通訊。

目前其餘區段可以維持預設值。以下說明這些設定，方便您日後查找：

**鬧鐘選項** — Nightscout 鬧鐘、通知，以及資料過時門檻。目前請保持所有開關關閉；我們開啟這些項目只是為了讓您了解有哪些選項。

**連線設定** — 選擇資料傳輸方式。照護者必須啟用「**使用行動資料**」，否則受照護者的手機（_例如_孩子的手機）在 Wi-Fi 訊號範圍外就無法上傳資料，_例如_上學途中。其他使用者可以停用行動資料傳輸，以節省資料用量或電池電力。如果不確定，請保持所有項目啟用。

![連線設定](../images/setup-wizard/Wizard-NSClientV3-Connection.png)

**進階設定** — 如果您想在 Nightscout 中查看應用程式重新啟動的時間（對照護者很有幫助），請啟用「**記錄應用程式啟動事件**」。請保持啟用「**根據錯誤建立通知**」和「**根據所需碳水化合物建立通知**」。請保持「**使用慢速同步**」關閉；只有在 Nightscout 伺服器處理大量資料的速度很慢時，才需要使用此功能。

![進階設定](../images/setup-wizard/Wizard-NSClientV3-Advanced.png)

返回外掛清單，然後按下「**下一步**」前往下一個畫面。

## 用戶端控制

從 **AAPS** 第 4 版起，執行 **AAPSClient** 的用戶端裝置可以與這支手機（**主控端**）**配對**，並透過 Nightscout 傳送已簽章的指令來控制主控端。這是目前建議用來遠端控制 **AAPS** 的新方式。完整說明與設定方式請參閱[主控端 ↔ 用戶端控制](../RemoteFeatures/ClientMasterControl.md)。

目前不需要在此畫面進行任何設定；您之後隨時可以前往「**管理 → 已授權的用戶端**」配對用戶端。您可以使用 **QR Code**（也會在用戶端設定 Nightscout）或 **PIN 碼**新增用戶端，並指定其**角色**。

- 「**已授權的用戶端**」— 管理已配對且可控制此主控端的用戶端裝置。
- 「**接受 Nightscout 資料**」— 預設已停用直接在 Nightscout 輸入的治療資料和其他資料（這是舊有且安全性較低的方式）。只有在仍有需要時才開啟這些設定，_例如_需要透過 Nightscout 或第三方應用程式輸入資料。

啟用用戶端控制後（在[簡易模式](#preferences-simple-mode)中一律啟用），此手機會進入[強化模式](#client-master-control-hardened-mode)：只接受已配對用戶端傳來的變更。因此，畫面會說明強化模式，而不會顯示「**接受 Nightscout 資料**」設定。

![用戶端控制](../images/setup-wizard/Wizard-ClientControl.png)

「**接受 Nightscout 資料**」會開啟「**同步**」設定；您可以分別開關從 Nightscout 接收的各類資料：

![Nightscout 資料接收設定](../images/setup-wizard/Wizard-ClientControl-Synchronization.png)

按下「**下一步**」前往下一個畫面。

(setup-wizard-instance-name)=
## 誰在使用這支手機？

在此輸入使用這支手機的使用者姓名。此名稱可讓您在報告和同步資料時區分這個 **AAPS** 執行個體與其他執行個體。舉例來說，家中有兩個孩子使用 **AAPS** 時，就能藉此區分。匯出的設定檔名稱會使用此名稱，手錶上也會顯示此名稱。

這可以是任何名字。之後可以前往「**設定 → 一般 → 執行個體名稱**」變更名稱。

按下「**下一步**」前往下一個畫面。

![名稱](../images/setup-wizard/Wizard-Name.png)

## 病人類型

在這裡你選擇你的「患者類型」，這點很重要，因為**AAPS**軟體根據患者的年齡有不同的限制。這對安全至關重要。

在這裡你也配置**每餐最高允許注射量**。也就是說，你在典型餐點中需要的最大注射量。這項安全功能可協助您在餐前注射時避免意外注射過量。

第二個限制與此類似，但涉及你預期的最大碳水化合物攝入量。

設定好這些值後，請按下「**下一步**」前往下一個畫面：

![病患](../images/setup-wizard/Wizard-PatientType.png)

## 胰島素

在此設定幫浦使用的胰島素。新的胰島素設定檔需要設定至少 **5 小時的 DIA**。

按下「**胰島素**」按鈕，開啟胰島素編輯器：

![胰島素](../images/setup-wizard/Wizard-Insulin.png)

在編輯器中，您可以設定胰島素的**暱稱**、**峰值**（分鐘）和 **DIA**（小時）。最快的方式是使用「**從以下項目載入峰值**」選取預設值：**Novorapid**、**Fiasp** 或 **Lyumjev**，系統就會自動填入峰值。底部的圖表會預覽產生的胰島素作用曲線。

![胰島素編輯器](../images/setup-wizard/Wizard-Insulin-Novorapid.png)

選擇符合您所用胰島素的預設值，例如 **Fiasp**：

![胰島素 Fiasp](../images/setup-wizard/Wizard-Insulin-Fiasp.png)

```{admonition} Use your insulin brand's preset peak
:class: danger
除非您是專家，否則請勿變更作用峰值 — 通常每種品牌胰島素的預設值都很適合。
```

如果您是剛開始使用 **AAPS** 的新手，請將 **DIA** 設為 9 小時 — 請參閱 [胰島素作用時間（DIA）與作用峰值](#Config-Builder-insulin-dia)，了解原因。

```{admonition} "Insulin configuration changed" dialog
:class: note
如果已配對的用戶端（_例如_另一支手機）變更了胰島素組態，畫面會顯示對話方塊。按下 **OK** 載入對方的變更，或按下 **Cancel** 繼續編輯（您下次儲存時會覆寫對方的變更）。
```

![胰島素已變更](../images/setup-wizard/Wizard-Insulin-Changed.png)

按下右上角的儲存圖示，接著按下「**NEXT**」前往下一個畫面。

## 血糖來源

在這裡選擇 **AAPS** 從哪裡取得血糖資料。請閱讀你的[血糖資料來源](../Getting-Started/CompatiblesCgms.md)的文件。

有多種來源可供選擇 — 捲動清單，選擇您使用的來源：

![血糖來源](../images/setup-wizard/Wizard-BGSource.png)

選擇來源後，該來源的卡片會展開並顯示兩個按鈕：「**Settings**」可調整接收資料的方式；「**Open plugin**」則會開啟該來源的專屬畫面。以下範例選擇的是 **BYODA**。有些來源在這個階段不需要設定，因此通常可以直接前往下一個畫面：

![血糖來源設定](../images/setup-wizard/Wizard-BGSource-Settings.png)

選擇完成後，按下「**NEXT**」前往下一個畫面。

(setup-wizard-profile)=
## 設定檔

現在我們進入設定嚮導中的一個非常重要的部分。

在嘗試在下一個畫面中輸入你的設定檔詳細資訊之前，請閱讀關於[設定檔](../SettingUpAaps/YourAapsProfile.md)的文件。

```{admonition} Working profile required - no exceptions here !
:class: danger
準確的設定檔對於控制**AAPS**的安全操作是必要的。

您必須與醫生討論並確定您的配置檔案，並透過成功的基礎率、ISF 和 IC 測試證明其有效！

如果一個機器人有錯誤的輸入，它將不斷失敗。 **AAPS** 只能使用所提供的訊息。如果你的個人設定過強，則可能會面臨低血糖風險；如果過弱，則可能會面臨高血糖風險。 
```

按下「**Profile**」按鈕，開啟設定檔編輯器：

![設定檔](../images/setup-wizard/Wizard-Profile.png)

編輯器開啟時是空白的（「沒有可用的記錄」）。按下底部的「**+**」按鈕，建立新的設定檔：

![空白設定檔](../images/setup-wizard/Wizard-Profile-Empty.png)

長期來看，如果有需要，你可以擁有多個設定檔案。這裡我們只建立一個。

```{admonition} Profile only for tutorial - not for your usage
:class: note
此處的設定檔範例僅用來示範如何輸入資料。

這不是準確或經過充分最佳化的設定檔，因為每個人的需求都大不相同。

不要用它進行實際循環！
```

新的設定檔（例如「**LocalProfile1**」）有四個分頁：**IC**、**ISF**、**BAS** 和 **TARG**。按下設定檔名稱旁的鉛筆圖示，即可重新命名。請填寫每個分頁 — 在輸入有效數值之前，分頁會一直顯示紅色並顯示錯誤訊息：

![有錯誤的新設定檔](../images/setup-wizard/Wizard-Profile-New-Error.png)

按下「**IC**」，輸入您的 [IC](#your-aaps-profile-insulin-to-carbs-ratio) 數值。使用「**+**」按鈕新增時段：

![IC](../images/setup-wizard/Wizard-Profile-IC.png)

按下「**ISF**」，輸入您的 [ISF 數值](#your-aaps-profile-insulin-sensitivity-factor)：

![ISF](../images/setup-wizard/Wizard-Profile-ISF.png)

按下「**BAS**」，輸入您的 [基礎率數值](#your-aaps-profile-basal-rates)：

![BAS](../images/setup-wizard/Wizard-Profile-BAS.png)

按下「**TARG**」，輸入您的血糖目標值。

對於開放循環，此目標範圍可以更寬，否則**AAPS**會持續通知你更改臨時基礎率或其他設定，這可能會很累人。

稍後，對於閉環循環，你通常只會有一個上限和下限值。這樣可以使**AAPS**更容易達到目標，並為你提供更好的整體糖尿病控制。

![TARG](../images/setup-wizard/Wizard-Profile-TARG.png)

四個分頁都填入有效數值後，右上角的**儲存圖示**就會啟用。按下圖示儲存設定檔：

![儲存圖示](../images/setup-wizard/Wizard-Profile-SaveIcon.png)

按下左上角的「**X**」關閉編輯器。設定檔總覽會顯示名稱、每日基礎胰島素總量（∑）、單位，以及 IC 和 ISF 數值與其圖表：

![儲存](../images/setup-wizard/Wizard-Profile-Save.png)

```{admonition} Several defined but only one active profile
:class: note
您可以建立多個設定檔，但同一時間只能啟用一個設定檔。
```

按下右下角的「**▶**」（啟用）按鈕。畫面會開啟「**Activate**」頁面。目前尚未使用任何胰島素，因此系統會先要求您選擇正在使用的胰島素，以便在切換設定檔時記錄胰島素種類。在您完成選擇之前，「**Activate**」按鈕會呈現灰色且無法使用：

![請先選擇胰島素](../images/setup-wizard/Wizard-Profile-Switch-NoInsulin.png)

按下「**Select Insulin**」，然後選擇先前設定的胰島素。將百分比維持在 100 %，然後按下「**Activate**」：

![啟用](../images/setup-wizard/Wizard-Profile-Activate.png)

畫面會顯示設定檔切換對話方塊。在此情況下，請保留預設值，並按下「**OK**」確認：

```{admonition} Profile switch dialog
:class: note
稍後您會學到如何使用這個通用對話方塊，因應生病或運動等需要調整設定檔的情況。
```

![切換](../images/setup-wizard/Wizard-Profile-Switch.png)

您的設定檔現在已啟用。按下「**下一步**」前往下一個畫面。

## 胰島素幫浦

接下來，請選擇您的胰島素幫浦。請閱讀你[胰島素幫浦](../Getting-Started/CompatiblePumps.md)的文件。

捲動清單並選取您的幫浦。在這個範例中，我們使用「**Virtual Pump**」，在您還在熟悉操作、尚未連接實體幫浦時，這個選項很實用：

![幫浦](../images/setup-wizard/Wizard-Pump.png)

系統支援許多種幫浦，請向下捲動清單找到您的幫浦：

![其他幫浦](../images/setup-wizard/Wizard-Pump-More.png)

選取實體幫浦時，**AAPS** 會要求您確認，因為系統會將設定檔中的基礎率複製到幫浦，並覆寫幫浦目前儲存的基礎率。只有在 **AAPS** 設定檔中的基礎率正確時，才按下「**OK**」；否則請按下「**Cancel**」，稍後再切換至該幫浦：

![選取硬體幫浦時的確認畫面](../images/setup-wizard/Wizard-Pump-Confirmation.png)

如果您選取的幫浦是透過藍牙通訊，完成設定嚮導後，**AAPS** 會要求取得連線至附近裝置的權限（請參閱[藍牙權限](#bluetooth-permission)）。

如果您已設定好設定檔，也知道如何連接幫浦，現在就可以連接。否則，請暫時保留「**Virtual Pump**」設定——您隨時可以變更設定，也可以按左上角的箭頭離開設定嚮導，先讓 **AAPS** 顯示一些血糖讀取值。

按下「**下一步**」前往下一個畫面。

## APS 演算法

選擇OpenAPS SMB演算法作為你的APS演算法。儘管名稱中有 SMB，您在熟悉 AAPS 並完成前幾個目標之前，演算法的 SMB 功能都會保持停用。無論如何，OpenAPS SMB 都是較新的版本，整體而言也比 OpenAPS AMA 更好。

一開始會停用 SMB，因為 SMB 功能會在血糖上升時更快做出反應，使用超微量注射，而不是提高基礎率百分比。剛開始使用時，您的設定檔通常還不如累積一些經驗後來得完善，因此這項功能一開始會停用。

```{admonition} Only use the older algorithm **OpenAPS AMA** if you know what you are doing
:class: note
OpenAPS AMA 是最基本的演算法，不支援透過微量注射來修正偏高的血糖值。在某些情況下，使用此算法可能更好，但這不是推薦的做法。
```

選取「**OpenAPS SMB**」，再按下「**Settings**」查看詳細資訊：

![APS](../images/setup-wizard/Wizard-APS.png)

這裡唯一的選項是「**Use dynamic sensitivity**」。目前先保持關閉，不要變更任何設定——只要閱讀文字即可。

由於**目標**所施加的限制，你目前無法使用「關閉循環」或「SMB 功能」。

返回上一頁，然後按下「**NEXT**」前往下一個畫面：

![APS 設定](../images/setup-wizard/Wizard-APS-Settings.png)

## 敏感度偵測

保留「**Sensitivity Oref1**」作為標準的敏感度外掛：

![敏感度](../images/setup-wizard/Wizard-Sensitivity.png)

按下「**Settings**」即可檢視吸收設定；目前使用預設值（_例如_ 6 小時的吸收截止時間）即可。

![敏感度設定](../images/setup-wizard/Wizard-Sensitivity-Settings.png)

按下「**下一步**」前往下一個畫面。

## 開始目標1

接下來要進入目標項目——完成這些項目後，才能使用更多 **AAPS** 功能。

按下「**Open Objectives**」：

![目標](../images/setup-wizard/Wizard-Objectives.png)

我們從目標1開始，即使此刻我們的設置尚未完全準備好成功完成此目標。但這是開始。

按下「**Start**」按鈕，開始「**1. 目標**」：

![目標清單](../images/setup-wizard/Wizard-Objectives-List.png)

展開目標後，即可查看各項檢查項目。您可以看到自己已經完成部分項目，其他項目則尚待完成：

![已開始目標](../images/setup-wizard/Wizard-Objectives-Started.png)

返回上一頁，然後按下「**FINISH**」完成設定嚮導：

![完成](../images/setup-wizard/Wizard-Objectives-Finish.png)

按下「**FINISH**」後，您會進入 **AAPS** 主畫面。畫面可能會開啟「**Notification**」面板，顯示資訊訊息，例如您剛才進行的設定檔切換。按下每則訊息下方的「**Dismiss**」即可清除訊息。

如果你在任何時候不小心離開設置嚮導，你可以簡單地重新啟動嚮導，或手動更改[AAPS 循環的配置](../SettingUpAaps/ChangeAapsConfiguration.md)。

## 藍牙權限

如果您選取的幫浦是透過藍牙連線（例如 **Omnipod Dash**），畫面會顯示橫幅，提醒您 **AAPS** 需要藍牙權限。您現在可以先按下「**Dismiss**」；完成設定嚮導後，系統會授予權限：

![需要藍牙權限](../images/setup-wizard/Wizard-Pump-Bluetooth.png)

完成設定嚮導後，**AAPS** 主畫面會顯示「**Permissions Required**」面板。其他權限都已授予；請按下「**Bluetooth**」旁的「**Grant**」：

![授予藍牙權限](../images/setup-wizard/Wizard-Bluetooth-Permission.png)

選取「**Allow**」，讓 **AAPS** 搜尋並連接您的幫浦：

![允許使用藍牙](../images/setup-wizard/Wizard-Bluetooth-Allow.png)

如果你的**AAPS**循環現在已完全設置，請繼續下一部分[「完成目標」](../SettingUpAaps/CompletingTheObjectives.md)。
