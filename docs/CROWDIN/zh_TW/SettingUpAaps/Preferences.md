# 設定（偏好設定）

在 **AAPS** v4 中，您可以在 **設定**畫面找到偏好設定。有三種方式可以進入偏好設定；詳情請參閱[變更 AAPS 組態設定](../SettingUpAaps/ChangeAapsConfiguration.md)：

1. 點選主畫面右上角的 **設定**（齒輪）圖示：這裡會顯示所有設定，並依可展開的區段分類。
2. 在 **組態設定**中，點選已啟用外掛下方的「**設定**」：只會顯示該外掛的設定。
3. 使用主畫面上方的 **搜尋列**：輸入您要尋找的文字片段即可。搜尋結果會包含個別設定（即使該設定未顯示在設定畫面中）、對話方塊和說明文件。

![「目標」的搜尋結果](../images/preferences/settings_search.png)

- 點選**區段**即可展開或收合。您看到的區段取決於已啟用的外掛，以及[簡易模式](#preferences-simple-mode)。

![含有可展開區段的設定畫面](../images/v4/Configuration/settings_overview.png)

```{contents}
:backlinks: entry
:depth: 2
```

(Preferences-general)=
## 一般問題

![設定 > 一般](../images/preferences/settings_general.png)

**單位**

- 依照您的偏好，將單位設為 mmol/L 或 mg/dL。

**語系**

- 新增選項可使用手機的預設語系（推薦）。

- 如果你希望**AAPS**使用不同於標準手機語言的語言，你可以從廣泛的選擇中選擇。

- 變更語系後，**AAPS** 的文字會立即切換為新的語系。如果部分文字仍顯示舊語系，請重新啟動 **AAPS**。
- 在[簡易模式](#preferences-simple-mode)中隱藏的設置。

(preferences-simple-mode)= **簡易模式**

在首次安裝**AAPS**時，將預設啟用**簡易模式**。在**簡易模式**中，大量設定將被隱藏，偏好設定將被預定義的數值取代。一旦你熟悉**AAPS**的用戶介面和設定，應該關閉簡易模式。

**胰島素濃度支援**

- 啟用對不同胰島素濃度（U50、U200 等）的支援。只有在您確實使用 U100 以外的濃度時才啟用此選項，並請仔細閱讀警告。
- 在[簡易模式](#preferences-simple-mode)中隱藏的設置。

**保持螢幕常亮**

- 強制 Android 螢幕一直保持開啟。這對於演示等場合很有用。但他會消耗大量電池電量。因此，建議將智慧型手機連線到充電線。

**執行個體名稱**

- 使用這支手機的人的姓名。這個名稱可在報告和同步資料中辨識此 **AAPS** 執行個體。例如，若您家中兩位患有第一型糖尿病的孩子都使用 **AAPS**，就能藉此區分。
- 此名稱會用於匯出設定檔的檔名。
- 在 [雙錶面](../WearOS/WearOsSmartwatch.md) 中顯示。

(Preferences-skin)=
### 外觀

**AAPS** 3.x 中的介面樣式選項（原始、低解析度、大型顯示等）已不再適用於 **AAPS** 4。新介面會自動配合您的螢幕調整，您也可以在[外觀](#preferences-appearance)中變更配色。

(preferences-appearance)=
## 外觀

![設定 > 外觀](../images/preferences/settings_appearance.png)

(Preferences-range-for-visualization)=
### 可視化範圍

選擇 **AAPS** 主畫面和智慧型手錶上血糖圖表的高、低標記值。這僅限於視覺化顯示，並非血糖的目標範圍。例如：70 - 180 mg/dL 或 3.9 - 10 mmol/L

(Preferences-show-notes-field-in-treatments-dialogs)=
### 在對話視窗中顯示備註

給你一個在治療（追加注射嚮導、碳水化合物、胰島素等）中添加簡短文字備註的選項。

在[簡易模式](#preferences-simple-mode)中隱藏的設置。

### 應用程式色彩方案

選擇淺色主題、深色主題，或依照手機的系統設定顯示。

(Preferences-protection)=
## 保護

![設定 > 保護](../images/preferences/settings_protection.png)

(Preferences-master-password)=
### 主密碼

出於安全要求，通常必須能夠[匯出設定](../Maintenance/ExportImportSettings.md)，因為從版本 2.7 開始它們是加密的。

**生物識別保護可能在 OnePlus 手機上無法運作。這是部分 OnePlus 手機的已知問題。**

![設置主密碼](../images/preferences/master_password_dialog.png)

(Preferences-settings-protection)=
### 設定保護

- 用密碼或手機的生物識別身份驗證來保護你的設定（例如：[小孩正在使用**AAPS**](../RemoteFeatures/RemoteMonitoring.md)）。啟用此功能後，每次要進入任何設定相關畫面時，都必須先通過身分驗證。

- 管理畫面（**設定檔**、**胰島素設定**、**臨時目標**、**快速嚮導**）會以**唯讀**模式開啟。您仍可啟用或使用項目，但在解除設定鎖定前，無法新增、編輯、複製或刪除項目。請參閱[設定保護現在也會鎖定管理畫面](#v4changes-read-only-management)。

- 如果您只想使用主密碼保護[匯出的設定](../Maintenance/ExportImportSettings.md)，並使用另一組密碼編輯設定，請使用自訂密碼。

- 如果你使用自定密碼，請點擊「設定密碼」來設置密碼，如上文[所述](#Preferences-master-password)。

### 應用程式保護

如果應用程式受到保護，您必須輸入密碼或使用手機的生物辨識驗證才能開啟 **AAPS**；超過[保護逾時](#Preferences-password-and-pin-retention)時間後重新開啟應用程式時，也必須再次驗證。

**AAPS**如果輸入錯誤密碼將立即關閉，但如果先前成功打開，將仍會在背景運行。

### 注射保護

- 如果**AAPS**被小孩使用，則注射保護可能會很有用，並且你可通過[SMS 進行注射](../RemoteFeatures/SMSCommands.md)。

- 只有在設定好**設定保護**（第 2 級）後，才能選取**注射保護**。

- 在下方範例中，注射保護使用**主密碼**：開啟**胰島素**等治療對話方塊前，**AAPS** 會要求您輸入主密碼。使用**生物辨識**時，如果生物辨識驗證無法使用，您可以改為輸入主密碼。

![要求驗證的提示畫面，會要求輸入主密碼](../images/preferences/bolus_protection_prompt.png)

(Preferences-password-and-pin-retention)=
### 密碼和 PIN 保留

**保護逾時**是指成功輸入密碼後，設定或注射功能維持解除鎖定的時間（秒）。

## 治療安全

![設定 > 安全性](../images/preferences/settings_safety.png)

(preferences-patient-type)=
### 病患年齡

- 安全限制是根據你在此設置中選擇的年齡設定的。
- 如果你開始觸及這些嚴格的限制（如最大注射量），那麼是時候提升一步了。
- 選擇高於實際年齡是一個不好的主意，因為這可能會因在胰島素對話框中輸入錯誤的數值（例如，跳過小數點）而導致過量。
- 如果你想知道這些硬編碼的安全限制的實際數字，請滾動到你在[這個頁面](../DailyLifeWithAaps/KeyAapsFeatures.md)上使用的算法功能。

(preferences-maximum-bolus)=
### 最大注射量

- 定義**AAPS**一次允許輸送的最大胰島素注射量（以胰島素單位計算）。
- 此設置作為安全限制，防止因意外輸入或用戶錯誤而導致大量注射。
- 建議將此設置為合理的數量，大致對應於你可能在一餐或校正劑量中需要的最大注射胰島素量。
- 這個限制也適用於注射計算機的結果。

### 允許的碳水上限

- 定義**AAPS**注射計算器允許劑量的最大碳水化合物量（以克計算）。
- 此設置作為安全限制，防止因意外輸入或用戶錯誤而導致大量注射。
- 建議將此設置為合理的數量，大致對應於你可能在一餐中需要的最大碳水化合物量。

## 血糖資料來源

您所選取的[血糖來源](#Config-Builder-bg-source)設定會顯示在專屬區段中。例如使用 **xDrip+ 血糖** 時：

![設定 > xDrip+ 血糖](../images/preferences/settings_xdrip.png)

- **將血糖資料上傳至 NS**：讓 **AAPS** 將接收到的血糖值上傳至 Nightscout。只有在 CGM App 本身尚未上傳資料時，才啟用此功能。
- **記錄感測器更換**：插入感測器時，自動建立感測器更換治療事件。

## 主畫面

在 **AAPS** 3.x 中，這些設定分組在「總覽」區段。在 **AAPS** 4 中，這些設定會直接從主畫面上對應的項目進行設定。

(偏好設定-按鈕)=
### 快速啟動按鈕

設定主畫面上要顯示哪些操作按鈕：點選主畫面底部中央的小型**齒輪**（「設定快速啟動」），然後**新增**想要快速存取的操作（治療、CGM 操作、照護入口項目等）。

![設定快速啟動](../images/preferences/quicklaunch_config.png)

(Preferences-quick-wizard)=
### 快速嚮導

建立自訂按鈕，用於特定的標準餐點或點心，並在主畫面上顯示。適用於經常食用的標準餐點。

對於每個按鈕，你定義碳水化合物和注射的計算方式。接著，設定按鈕要在什麼時段顯示於主畫面上；每個時段只能顯示一個按鈕。如果超出指定的時間範圍，或者如果你有足夠的IOB來覆蓋快速嚮導按鈕中定義的碳水化合物，則該按鈕不會顯示。如果為不同餐點設定不同時段，主畫面就會依照一天中的時間，顯示適用的標準餐點按鈕。

若要管理 Quick Wizard 預設值，請在主畫面的搜尋列輸入「QuickWizard」，並開啟 **QuickWizard - 管理 Quick Wizard 預設值**。

如果你點擊快速嚮導按鈕**AAPS**將根據你目前的比率計算並建議對應的注射量（考慮血糖值或設定的胰島素用量）。

該建議需要確認後才會注射胰島素。

(Preferences-default-temp-targets)=
### 預設臨時目標

[臨時目標（TT）](../DailyLifeWithAaps/TempTargets.md)允許你在特定時間範圍內更改你的血糖目標。設置預設TT時，你可以輕鬆更改活動、即將用餐等的目標。

點選主畫面上的**目標範圍**，開啟**臨時目標**畫面。滑動瀏覽預設卡片（即將用餐、活動、低血糖），並在**預設設定**中變更各預設的目標值和持續時間。預設值為：

* 即將用餐：目標 90 mg/dL / 5.0 mmol/L，持續時間 45 分鐘
* 活動：目標 140 mg/dL / 7.8 mmol/L，持續時間 90 分鐘
* 低血糖：目標 160 mg/dL / 8.9 mmol/L，持續時間 60 分鐘

![臨時目標預設值](../images/preferences/temp_target_presets.png)

了解如何在這裡[啟用臨時目標](#TempTargets-where-can-i-select-a-temp-target)。

### 填充/啟動標準胰島素量

如果想透過 **AAPS** 填充導管或為套管排氣，可以使用主畫面展開狀態面板中的 **Prime/Fill** 按鈕。

三個填充按鈕的預設填充量，可以在 **Prime/Fill** 設定中依照導管長度設定。在主畫面的搜尋列輸入「prime」即可開啟相關設定。

![Prime/Fill 預設填充量](../images/preferences/settings_prime_fill.png)

(Preferences-status-lights)=
### 狀態燈

狀態指示燈為以下情況提供視覺警告：:

- 傳感器使用時間
- 胰島素的使用時間（儲液罐使用的天數）
- 儲液罐的剩餘容量（單位）
- 針頭的使用時間
- 幫浦電池壽命
- 幫浦電池電量（百分比）

如果超出警告門檻值，數值將顯示為黃色。如果超出危急門檻值，數值將顯示為紅色。

若要變更閾值，請展開主畫面上的狀態面板（點選狀態列右側的 V 形箭頭），再點選「狀態」旁的小型**設定**圖示：

![狀態燈](../images/preferences/status_lights.png)

點選項目（**套管**、**胰島素**、**感測器**或**幫浦電池**），即可開啟警告和危急閾值設定：

![套管狀態燈閾值](../images/preferences/status_lights_cannula.png)

最後一個選項允許你從Nightscout匯入那些設定（如果在那裡定義）。詳情請參考[Nightscout文件](https://nightscout.github.io/nightscout/setup_variables/#age-pills)。

(Preferences-deliver-this-part-of-bolus-wizard-result)=
### 注射嚮導設定

在主畫面的搜尋列輸入「bolus」，即可開啟**注射嚮導**設定：

![注射嚮導設定](../images/preferences/settings_bolus_wizard.png)

**注射百分比**會設定使用注射嚮導計算注射量時的[預設百分比](#AapsScreens-section-j)。

預設值為 100%：無需修正。即便在這裡設置不同的值，你每次使用注射嚮導時仍然可以更改。如果此設定為75%，而你必須注射10U，則注射嚮導將提出僅7.5單位的餐前注射。

使用[SMB](#objectives-objective9)時，許多人不會注射所需胰島素的100%，而只會注射部分（例如75%），並讓SMB以UAM（不在場用餐偵測）處理餘下的部分。在這裡使用低於100%的值可能會有用：
* 對於消化緩慢的人來說：一次傳送所有的注射劑量可能會引起低血糖，因為胰島素的作用速度比消化快。
* 以便給**AAPS**留出更多空間自行處理**血糖上升**。在這兩種情況下，**AAPS**將在需要時透過SMB來補償缺失的注射部分。

**使用注射建議**

啟用後，若您在高血糖時使用注射嚮導，系統會顯示警告，詢問您是否要先注射、稍後再用餐，等**血糖**回到目標範圍後再進食。

(Preferences-advanced-settings-overview)=
### 超級注射

**AAPS** 3.x 的超級注射選項，在 **AAPS** 4 中已不再提供設定。

## 循環

如要變更循環模式，請參閱 [AAPS 畫面 > 主畫面 > 循環狀態](#AapsScreens-loop-status)。

(Preferences-minimal-request-change)=
### 開放循環 最小變更幅度

使用 **開放環路** 時，你將在每次**AAPS** 建議調整基礎率時收到通知。若要減少通知數量，可以使用[較寬的血糖目標範圍](#profile-glucose-targets)，或提高「**開放模式的最小變更幅度**」設定的百分比。這定義了觸發通知所需的相對變更。

![設定 > 循環](../images/preferences/settings_loop.png)

## 進階餐前注射助手（AMA）或超微量注射（SMB）

根據您在 [組態設定工具 > APS](../SettingUpAaps/ConfigBuilder.md) 中的設定，可以選擇兩種演算法：

- [進階餐前注射助手（OpenAPS AMA）](#Open-APS-features-advanced-meal-assist-ama) - 2017年的算法狀態
- [超微量注射（OpenAPS SMB)](#Open-APS-features-super-micro-bolus-smb) - 最推薦給初學者的最新算法

自[**AAPS**版本 3.3](#version3300)起，[動態 ISF](../DailyLifeWithAaps/DynamicISF.md)功能已移至 OpenAPS 微量注射的一部分。

### OpenAPS AMA

所有針對OpenAPS AMA的設置都在[關鍵AAPS功能 > 進階餐點輔助(AMA)](#Open-APS-features-advanced-meal-assist-ama)中詳細描述。

(Preferences-openaps-smb-settings)=
### OpenAPS SMB

所有針對OpenAPS SMB的設置都在[關鍵AAPS功能 > 超微量注射(SMB)](#Open-APS-features-super-micro-bolus-smb)中詳細描述。

您看到的設定清單，取決於您在[目標](../SettingUpAaps/CompletingTheObjectives.md)中的進度，以及是否啟用[簡易模式](#preferences-simple-mode)。在新安裝的版本中，只會顯示**使用動態敏感度**。完成目標後，區段會如下所示：

![設定 > OpenAPS SMB，第一部分](../images/preferences/settings_openaps_smb_1.png)

![設定 > OpenAPS SMB，SMB 選項](../images/preferences/settings_openaps_smb_2.png)

![設定 > OpenAPS SMB，UAM 和碳水化合物需求](../images/preferences/settings_openaps_smb_3.png)

區段底部的**進階設定**包含一些通常不需要變更的數值：

![設定 > OpenAPS SMB > 進階設定](../images/preferences/settings_openaps_smb_advanced.png)

![設定 > OpenAPS SMB > 進階設定（續）](../images/preferences/settings_openaps_smb_advanced_2.png)

## 吸收設定

![設定 > 吸收設定](../images/preferences/settings_absorption.png)

(Preferences-min_5m_carbimpact)=
### SMB 最小 5 分鐘碳水化合物影響值（min_5m_carbimpact）

在[簡易模式](#preferences-simple-mode)中隱藏的設置。

該演算法使用BGI（血糖影響）來確定[碳水化合物的吸收](../DailyLifeWithAaps/CobCalculation.md)時間。

在無法根據你血液反應動態計算碳水化合物吸收的時候，**AAPS** 會為你的碳水化合物插入一個預設衰減值。基本上，這是一個安全保護機制。此值僅在**CGM** 讀數出現間隙或當身體活動“消耗掉”所有本來會引起**AAPS**衰減COB的血糖上升時使用。

簡單來說：演算法「知道」在目前胰島素劑量等影響下，你的血糖應該如何變化。每當實際狀況比預期好時，就會有部分碳水化合物被吸收或消耗。大的變化＝許多碳水化合物等。

min_5m_carbimpact 定義了每 5 分鐘的預設碳水化合物吸收影響。完整的參數說明請參閱 [OpenAPS 偏好設定與安全設定文件](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact)。

AMA 的標準值為 3，SMB 的標準值為 8。

主畫面上的 COB 圖表會在 COB 曲線上方以橘色圓點標示正在使用 min_5m_carbimpact 的時段。

![COB 圖表](../images/main/cob_graph_min_5m_carbimpact.png)

### 吸收截止時間

任何餐點都會被視為已吸收的時間；超過此時間後，剩餘的碳水化合物將不再計入。如果你經常進食高脂肪或高蛋白質餐點，你需要增加餐點吸收時間。

### 進階設定 - autosens 比例

![吸收進階設定](../images/preferences/settings_absorption_advanced.png)

- 定義最小和最大[autosens](#Open-APS-features-autosens) 比例。
- 通常標準值（最大 1.2 和最小 0.7）不應更改。

## 幫浦

![設定 > 幫浦](../images/preferences/settings_pump.png)

### 藍牙監控

如有必要，啟用藍牙監控（例如對於Dana幫浦）。如果無法與幫浦連線，系統會關閉藍牙 1 秒。這可能有助於解決某些手機的藍牙堆疊凍結問題。

## 幫浦設定

此處的選項會依您在 [組態設定 > 幫浦](#Config-Builder-pump) 中選擇的幫浦驅動程式而有所不同。請依照[幫浦相關說明](../Getting-Started/CompatiblePumps.md)，配對並設定您的幫浦。

例如，使用 **虛擬幫浦**時，這個區段會稱為**虛擬幫浦設定**。您可以選擇虛擬幫浦要模擬的**幫浦類型**，以及是否要將其狀態上傳至 Nightscout：

![設定 > 虛擬幫浦設定](../images/preferences/settings_virtual_pump.png)

## Tidepool

詳細資訊請參閱專門的[Tidepool](../SettingUpAaps/Tidepool.md)頁面。

(Preferences-nsclient)=
## NSClient

![設定 > NSClientV3](../images/preferences/settings_nsclient.png)

NSClient 外掛（在組態選單中顯示為 **NSClientV3**）會與 Nightscout 同步資料。它使用 Nightscout API v3。

```{admonition} Data uploaders
:class: warning

使用 NSClientV3 時，所有上傳程式都必須使用 Nightscout API v3。如果其他上傳程式（例如您的 CGM 應用程式）不相容於 API v3，**請讓 AAPS 將所有資料**（血糖、治療資料等）上傳至 Nightscout，並停用該上傳程式。
```

- 設置你的*Nightscout URL*（即 <https://yoursitename.yourplatform.dom>）。
- **確保網址末尾沒有 /api/v1/。**
- 請在 Nightscout 中建立*[管理員權杖](https://nightscout.github.io/nightscout/security/#create-a-token)*（使用 V3 API 需要 [Nightscout 15](https://nightscout.github.io/update/update/)），並將權杖輸入**Nightscout 存取權杖**欄位（請勿輸入您的 API Secret！）。在**AAPSClient**上，您也可以掃描主要手機的 QR Code，系統會為用戶端建立專屬權杖。使用 PIN 碼配對的用戶端，配對後會從主要手機取得專屬權杖。請參閱[用戶端專屬的 Nightscout 權杖](#client-master-control-own-token)。
- 這使得資料能在Nightscout網站與**AAPS**之間讀取和寫入。
- 如果你在目標 1 中遇到困難，請再次檢查是否有拼寫錯誤。
- 請保持「使用 websockets」為啟用狀態（建議設定）。

(Preferences-nsclient-synchronization)=
### 同步選項

![同步選項](../images/preferences/settings_nsclient_sync.png)

同步選擇將取決於你希望如何使用**AAPS**。

你可以選擇[上傳和下載至 Nightscout 的資料](#Nightscout-aaps-settings)。

啟用用戶端控制時（簡易模式下會一律啟用），這些設定會隱藏：**AAPS** 會進入[強化模式](#client-master-control-hardened-mode)，不會套用直接在 Nightscout 中進行的變更，並會上傳所有資料。

### 警報選項

![警報選項](../images/preferences/settings_nsclient_alarms.png)

- 警報選項允許你選擇透過應用程式使用哪些 Nightscout 警報。 **AAPS** 將在觸發Nightscout警報時發出警告。
- 要使警報發出聲音，你需要在[Nightscout 變數](https://nightscout.github.io/nightscout/setup_variables/#alarms)中設置緊急高、高、低和緊急低的警報值。
- 只有在連線至 Nightscout 時才能使用這些功能，且這些功能是提供給家長／照護者使用的。
- 如果您的手機上有 **CGM** 資料來源（例如 xDrip 或 BYODA），請使用那些應用程式的警示，而不要使用 Nightscout 警示。
- NS 公告會將 Nightscout 的[公告](https://nightscout.github.io/nightscout/discover/#announcement)轉傳至 **AAPS** 通知。
- 當在一定時間內未從 Nightscout 收到資料時，你可以更改過時資料和緊急過時資料警報的門檻值。

### 遠端控制

「**允許用戶端控制**」開關已不在這些設定中，而是在**管理 → 已授權的用戶端**頁面頂端，您可以在此管理已配對的用戶端。請參閱專屬的[用戶端／主控端控制](../RemoteFeatures/ClientMasterControl.md)頁面，其中也包含此開關會啟用的[強化模式](#client-master-control-hardened-mode)。

### 連線設定

![NSClient 連線設定](../images/preferences/settings_nsclient_connection.png)

- 連線設定定義了何時啟用與 Nightscout 的連線。
- 將 Nightscout 上傳限制為僅在 Wi-Fi 下進行，甚至僅限於特定的 Wi-Fi SSID。
- 如果你只想使用特定的Wi-Fi網路，可以輸入其Wi-Fi SSID。
- 多個 SSID 可以用分號分隔。
- 若要刪除所有 SSID，請在該欄位中輸入空格。

(Preferences-advanced-settings-nsclient)=
### 進階設定（NSClient）

![NSClient 進階設定](../images/preferences/settings_nsclient_advanced.png)

進階設定中的選項都非常直觀易懂。

## SMS(簡訊) 通訊器

詳細資訊請參閱專門的[簡訊命令](../RemoteFeatures/SMSCommands.md)頁面。

(preferences-wear)=
## Wear

在[組態設定 > 通訊](#Config-Builder-wear)中啟用**Wear**外掛時，才會顯示此區段。詳細資訊請參閱專屬的 [Wear OS 智慧型手錶](../WearOS/WearOsSmartwatch.md)和[透過 Wear OS 智慧型手錶操作 AAPS](../RemoteFeatures/RemoteControlWearOS.md)頁面。

![設定 > Wear](../images/preferences/settings_wear.png)

- **Wear 控制**：允許從手錶傳送治療項目及其他操作。未啟用此功能時，手錶只會顯示資料：手機會拒絕手錶傳來的任何指令，而點選原本會開啟控制畫面的複雜功能時，手錶會改為開啟 **AAPS** 選單。

**Wear 嚮導設定**可設定手錶上的注射嚮導結果要包含哪些計算項目。您只需在手錶上輸入碳水化合物；這些開關可取代您在手機注射嚮導中會選擇的項目：

- **在嚮導中納入血糖**：根據目前血糖與目標血糖的差異，加上校正量。
- **在嚮導中納入臨時目標**：此次校正使用目前生效的臨時目標，而非設定檔中的目標。
- **在嚮導中納入趨勢**：將目前的血糖趨勢納入計算。
- **在嚮導中納入活性碳水化合物**：為仍在作用中的碳水化合物增加胰島素。
- **在嚮導中納入活性胰島素**：扣除仍在作用中的胰島素。

![設定 > Wear > Wear 嚮導設定](../images/preferences/settings_wear_wear_wizard.png)

**自訂錶盤設定**包含**授權自訂錶盤**選項。自訂錶盤檔案可能包含某些手錶設定的數值。啟用此開關後，載入這類錶盤時可以變更手錶上的相關設定；停用時，錶盤仍會載入，但設定會維持原樣：

![設定 > Wear > 自訂錶盤設定](../images/preferences/settings_wear_custom_watchface.png)

**一般設定**包含**SMB 注射時發出通知**，啟用後，每次執行 SMB 注射時，手錶都會收到通知：

![設定 > Wear > 一般設定](../images/preferences/settings_wear_general.png)

## 自動調整

在[組態設定 > 一般](#Config-Builder-autotune)中啟用**Autotune**外掛時，才會顯示此區段。設定說明請參閱專屬的 [Autotune](../AdvancedOptions/Autotune.md)頁面。

![設定 > Autotune](../images/preferences/settings_autotune.png)

## 自動化

![設定 > 自動化](../images/preferences/settings_automation.png)

選擇要使用的定位服務：

- 使用被動位置：**AAPS**僅在其他應用要求時才會獲取位置
- 使用網路定位：你的 Wi-Fi 位置。
- 使用 GPS 定位（注意！可能會導致電池過度消耗！）

## 本地警報

![設定 > 本機提醒](../images/preferences/settings_local_alerts.png)

設定應該是簡單明瞭的。

(preferences-maintenance-settings)=
## 維護設置

![設定 > 維護](../images/preferences/settings_maintenance.png)

**電子郵件收件人**：日誌的標準收件人是<logs@aaps.app>。

**要傳送的紀錄檔數量**：傳送紀錄檔時，會附上最近幾個紀錄檔。

**資料選擇**

![資料選項](../images/preferences/settings_data_choices.png)

你可以通過向開發者發送崩潰報告來幫助進一步開發**AAPS**。

**自動設定匯出**<br/>啟用此功能後，你允許**AAPS**自動執行設定匯出，而無需用戶介入。為此，主密碼 安全地存儲在你的手機中（僅限於下次手動匯出時）。存儲的密碼將在最多 4 週內有效。 4 週後，你將收到通知，提示密碼即將過期。在為期 1 週的寬限期內，可以透過 從維護選單手動匯出設定來刷新密碼。

在寬限期過期的 1 週後，存儲的密碼將過期，任何自動化設定匯出將中止，同時通知用戶，要求 重新輸入密碼。[（**自動匯出設定**）](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export)會記錄在 **AAPS**「照護入口」和「使用者輸入」清單的「治療」頁面中。

啟用此選項後，請確保執行一次手動設定匯出，屆時系統會要求你輸入密碼，以便**AAPS**能夠儲存它。

### 日誌文件

AAPS 會儲存記錄，以利疑難排解。

請勿停用此功能：若發生問題，它有助於了解原因。

如果您需要將紀錄檔寄給開發人員，請務必在電子郵件中清楚、準確地描述問題。建議僅在[在 GitHub 提交問題回報](https://github.com/nightscout/AndroidAPS/issues)後，且被要求時再傳送記錄。

你可以在手機記憶體 -> Android -> data -> info.nightscout.androidaps -> files 中找到 AAPS 記錄。

您可以在**維護**畫面管理紀錄檔（設定、傳送及刪除紀錄檔）和檔案。請點選主畫面左上角的**選單**（☰）開啟此畫面：

![維護畫面](../images/preferences/maintenance_file_management.png)

(preferences-maintenance-logdirectory)=

### 設定本機 AAPS 目錄

**維護**畫面也包含**AAPS 目錄**。此設定允許用戶選擇電話上的一個目錄，**AAPS**將在該目錄中儲存偏好設定、日誌及其他檔案。選擇目錄後，其路徑（例如 `Documents/AAPS`）會顯示在**AAPS 目錄**下方，方便您隨時確認檔案的儲存位置。

強烈建議將目錄設在手機儲存空間的主目錄下。預設為 AAPS。

![本機目錄位置](../images/preferences/maintenance_settings_directory.png)

若你選擇了 AAPS 的子目錄，會顯示「目錄選擇錯誤」的訊息。點選「確認」並重新選擇正確的目錄（上一層）。除非你非常清楚自己在做什麼，請不要選擇「關閉」。

![本機目錄位置](../images/preferences/maintenance_settings_wrongdirectory.png)

Android 可能會在不通知您的情況下撤銷目錄權限，例如重新安裝**AAPS**或清除其儲存空間後。發生這種情況時，**AAPS**會持續顯示**已失去存取 AAPS 目錄的權限**通知，而且本機設定匯出功能會停止運作，直到您返回此處重新選取目錄為止。請盡快重新選取目錄，否則手機上的備份將不會重新整理。

(preferences-maintenance-cloud)=

### 設定雲端目錄

你可以將設定、記錄與 CSV 資料匯出到雲端服務。

1. 開啟**選單**（☰），選取**維護**，然後點選**雲端目錄**（位於**檔案管理**下方）。

   ![維護選單中的「雲端目錄」](../images/preferences/maintenance_settings_cloud.png)

2. 在**選取儲存空間類型**中，選取**Google Drive**。

   ![「選取儲存空間類型」對話方塊](../images/preferences/maintenance_cloud_select_storage.png)

3. 系統會開啟 Google 登入頁面。選擇要用來儲存備份的 Google 帳號（您可以使用[專用的 Google 帳號](../UsefulLinks/DedicatedGoogleAccountForAaps.md)）。

   ![Google 登入頁面：選擇帳號](../images/preferences/maintenance_cloud_google_account.png)

4. 確認帳號正確後，點選**繼續**，授權**AAPS**存取。如果您之前已設定雲端目錄，頁面會顯示**AAPS**已取得部分存取權限。

   ![Google 授權頁面，顯示授權 AAPS 存取的提示和「繼續」按鈕](../images/preferences/maintenance_cloud_google_access.png)

5. 返回**AAPS**後，主畫面底部會顯示**雲端儲存空間驗證成功**訊息：

   ![「雲端儲存空間驗證成功」訊息](../images/preferences/maintenance_cloud_auth_success.png)

   現在，**維護**選單中的**雲端目錄**旁會出現綠點，而且**傳送紀錄檔**、**匯出設定**、**匯入設定**和**將使用者輸入匯出至 Excel（csv）**旁的**雲端**按鈕都可使用。

   ![已設定雲端儲存空間的維護選單：雲端按鈕可使用，且「雲端目錄」旁會顯示清除圖示](../images/preferences/maintenance_settings_cloud_ready.png)

若要停止匯出至雲端，請點選**維護**選單中**雲端目錄**那一列最右側的**✕**（**清除設定**）圖示（設定雲端服務後才會顯示），再確認**清除雲端設定**。這會切換回本機儲存空間，並清除授權。

## Open Humans

你可以透過捐贈你的資料來協助研究項目，幫助社群！詳細資訊請參閱[Open Humans 頁面](../SupportingAaps/OpenHumans.md)。

在**設定 → Open Humans**中，您可以設定上傳資料的時間。
- 僅在連接到Wi-Fi時
- 僅在充電時
