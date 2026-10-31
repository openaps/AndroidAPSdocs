# Nightscout设置

(Nightscout-security-considerations)=

## 安全考虑

Nightscout is the reporting and monitoring server of **AAPS**: **AAPS** uploads your data to it, and you or your caregivers look at it on the Nightscout website or in follower apps. It holds your medical data, profiles and treatments, so it is worth thinking about securing your Nightscout website.

In **AAPS** 4, remote control does not go through the Nightscout website. While client control is on ([hardened mode](#client-master-control-hardened-mode)), treatments or targets typed directly into Nightscout are **not applied** by **AAPS**. Remote commands come from a paired **AAPSClient** instead — see [Master ↔ Client control](#client-master-control).

Exercise maximum caution if using Nightscout as your AAPS BG data source.

### Nightscout设置

您可以通过使用[认证角色](https://nightscout.github.io/nightscout/security)来拒绝公众访问您的Nightscout站点：确保您只与具有“可读”权限的令牌共享您的URL，切勿与具有“管理员”权限的令牌共享。

Nightscout的`API_SECRET`是您的站点主密码：请勿公开分享。

(Nightscout-aaps-settings)=

### AAPS设置

Accepting data from Nightscout (profile changes, treatments, ...) is optional and turned off by default. The switches described below are hidden while client control is on (hardened mode) and in [simple mode](#preferences-simple-mode).

* Access the **Synchronization** settings of the NSClientV3 plugin with either 1) **Settings** (gear icon on the main screen) -> **NSClientV3** -> **Synchronization**, or 2) **Configuration** (☰ menu) -> **Communication** -> "**Settings**" under NSClientV3.
* Enable "Upload data to NS".
* "Upload BG data to NS" is in the settings of your BG source (**Configuration → BG Source → Settings**). Enable it, unless your AAPS BG data source is Nightscout: in that case **do not** enable it.
* Do not enable "Receive CGM data from NS" unless Nightscout is your BG data source.

#### 不要从Nightscout同步

Keeping all the "Receive ... from NS" options disabled makes sure no Nightscout change will be used by AAPS:

![Nightscout仅上传](../images/preferences/settings_nsclient_sync.png)

#### 接受来自Nightscout的更改

Enabling these options allows you to change AAPS settings through Nightscout, like profiles modifications and switch, temporary targets and adding carbs that will be taken into account by AAPS. They are only shown when client control and simple mode are off.  
Note that insulin treatments will only be used for calculations like "Do not bolus, record only".

![Nightscout receive options enabled](../images/NSsafety3.png)

### 其他安全设置

请按照[安全第一](#preparing-safety-first)中的说明保持您的手机更新。

(Nightscout-manual-nightscout-setup)=

## 手动Nightscout设置

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on setup. The instructions below are then settings you will also need to add to your Nightscout site. Your Nightscout site needs to be at least version 15, so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app.

* [编辑您的变量](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* 按如下方式添加或编辑变量：
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * 可以为[泵状态监测](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring)设置各种警报，特别是电池电量警报： 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* 保存更改。现在，您的Nightscout站点应该允许您显示这些胶囊图标。您可以通过在`SHOW_PLUGINS`中添加它们来强制默认显示。
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Nightscout 胶囊图标](../images/nightscout1.png)

## Nightscout作为付费SaaS（软件即服务）

使用供应商Web界面设置变量。如有必要，请联系供应商支持服务。