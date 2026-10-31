# Nightscout

(Nightscout-security-considerations)=

## 安全性考量

Nightscout is the reporting and monitoring server of **AAPS**: **AAPS** uploads your data to it, and you or your caregivers look at it on the Nightscout website or in follower apps. It holds your medical data, profiles and treatments, so it is worth thinking about securing your Nightscout website.

In **AAPS** 4, remote control does not go through the Nightscout website. While client control is on ([hardened mode](#client-master-control-hardened-mode)), treatments or targets typed directly into Nightscout are **not applied** by **AAPS**. Remote commands come from a paired **AAPSClient** instead — see [Master ↔ Client control](#client-master-control).

Exercise maximum caution if using Nightscout as your AAPS BG data source.

### Nightscout 設置

你可以使用 [身份驗證角色](https://nightscout.github.io/nightscout/security) 來拒絕公眾查看你的 Nightscout 網站：請確保僅與具有`readable` 權限的使用者共享 URL，絕不要與擁有`admin` 權限的使用者共享。

Nightscout 的 `API_SECRET` 是你網站的主要密碼：切勿公開分享他。

(Nightscout-aaps-settings)=

### AAPS 設置

Accepting data from Nightscout (profile changes, treatments, ...) is optional and turned off by default. The switches described below are hidden while client control is on (hardened mode) and in [simple mode](#preferences-simple-mode).

* Access the **Synchronization** settings of the NSClientV3 plugin with either 1) **Settings** (gear icon on the main screen) -> **NSClientV3** -> **Synchronization**, or 2) **Configuration** (☰ menu) -> **Communication** -> "**Settings**" under NSClientV3.
* Enable "Upload data to NS".
* "Upload BG data to NS" is in the settings of your BG source (**Configuration → BG Source → Settings**). Enable it, unless your AAPS BG data source is Nightscout: in that case **do not** enable it.
* Do not enable "Receive CGM data from NS" unless Nightscout is your BG data source.

#### 不要從 Nightscout 同步

Keeping all the "Receive ... from NS" options disabled makes sure no Nightscout change will be used by AAPS:

![僅限 Nightscout 上傳](../images/preferences/settings_nsclient_sync.png)

#### 接受來自 Nightscout 的變更

Enabling these options allows you to change AAPS settings through Nightscout, like profiles modifications and switch, temporary targets and adding carbs that will be taken into account by AAPS. They are only shown when client control and simple mode are off.  
Note that insulin treatments will only be used for calculations like "Do not bolus, record only".

![Nightscout receive options enabled](../images/NSsafety3.png)

### 進一步的安全設置

保持你的手機最新，如[安全第一](#preparing-safety-first)所述。

(Nightscout-manual-nightscout-setup)=

## 手動 Nightscout 設置

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on setup. The instructions below are then settings you will also need to add to your Nightscout site. Your Nightscout site needs to be at least version 15, so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app.

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