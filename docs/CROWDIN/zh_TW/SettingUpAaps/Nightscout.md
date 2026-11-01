# Nightscout

(Nightscout-security-considerations)=

## 安全性考量

Nightscout 是 **AAPS** 的報告與監控伺服器：**AAPS** 會將您的資料上傳至 Nightscout，而您或照護者可以透過 Nightscout 網站或追蹤者應用程式查看資料。 Nightscout 會儲存您的醫療資料、設定檔和治療紀錄，因此建議您留意 Nightscout 網站的安全性。

在 **AAPS** 4 中，遠端控制不會透過 Nightscout 網站進行。啟用客戶端控制時（[強化模式](#client-master-control-hardened-mode)），直接輸入 Nightscout 的治療紀錄或目標值**不會由****AAPS** 套用。遠端指令會改由已配對的 **AAPSClient** 傳送；請參閱 [主端 ↔ 客戶端控制](#client-master-control)。

如果使用 Nightscout 作為 AAPS 的血糖資料來源，請務必格外謹慎。

### Nightscout 設置

你可以使用 [身份驗證角色](https://nightscout.github.io/nightscout/security) 來拒絕公眾查看你的 Nightscout 網站：請確保僅與具有`readable` 權限的使用者共享 URL，絕不要與擁有`admin` 權限的使用者共享。

Nightscout 的 `API_SECRET` 是你網站的主要密碼：切勿公開分享他。

(Nightscout-aaps-settings)=

### AAPS 設置

是否接受來自 Nightscout 的資料（設定檔變更、治療紀錄等）由您自行決定，且預設為關閉。啟用客戶端控制（強化模式）或[簡易模式](#preferences-simple-mode)時，下方所述的切換選項會隱藏。

* 您可以透過以下任一方式開啟 NSClientV3 外掛的**同步**設定： 1) **設定**（主畫面上的齒輪圖示）-> **NSClientV3** -> **同步**，或 2) **組態**（☰ 選單）-> **通訊** -> NSClientV3 下方的「**設定**」。
* 啟用「上傳資料至 NS」。
* 「將血糖資料上傳至 NS」位於血糖來源的設定中（**組態 → 血糖來源 → 設定**）。除非您的 AAPS 血糖資料來源是 Nightscout，否則請啟用此選項；如果是 Nightscout，則**不要**啟用。
* 除非 Nightscout 是您的血糖資料來源，否則請勿啟用「從 NS 接收 CGM 資料」。

#### 不要從 Nightscout 同步

將所有「接收……從 NS」選項保持停用，可確保 AAPS 不會使用 Nightscout 的任何變更：

![僅限 Nightscout 上傳](../images/preferences/settings_nsclient_sync.png)

#### 接受來自 Nightscout 的變更

啟用這些選項後，您便可透過 Nightscout 變更 AAPS 設定，例如修改或切換設定檔、設定臨時目標，以及新增會由 AAPS 納入計算的碳水化合物。只有在客戶端控制和簡易模式都關閉時，才會顯示這些選項。  
請注意，胰島素治療紀錄只會用於「不要注射，只記錄」等計算。

![已啟用 Nightscout 接收選項](../images/NSsafety3.png)

### 進一步的安全設置

保持你的手機最新，如[安全第一](#preparing-safety-first)所述。

(Nightscout-manual-nightscout-setup)=

## 手動 Nightscout 設置

假設您已經有 Nightscout 網站；如果還沒有，請前往 [Nightscout](http://nightscout.github.io/nightscout/new_user/) 頁面查看完整的設定說明。接著，您也需要將以下設定新增至 Nightscout 網站。您的 Nightscout 網站版本至少須為 15。請確認您使用的是[最新版本](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version)，否則 AAPS 應用程式會顯示錯誤訊息。

* [編輯你的變數](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* 添加或編輯變數如下：
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * 可以設置各種警報來[監控幫浦](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring)，特別建議設置電池百分比的警報： 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* 儲存這些修改。你的 Nightscout 網站現在應允許顯示這些 pills。你可以在`SHOW_PLUGINS`中強制顯示這些 pills。
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Nightscout pills](../images/nightscout1.png)

## Nightscout 作為付費 SaaS（軟體即服務）

使用供應商的網站界面設置變數。如有需要，請聯繫供應商的支援服務。