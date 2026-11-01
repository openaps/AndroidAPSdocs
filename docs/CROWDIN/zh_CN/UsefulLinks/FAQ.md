# 闭环常见问题（FAQ）

How to add questions to the FAQ: Follow these [instructions](../SupportingAaps/HowToEditTheDocs.md)

## 常规

### 我可以直接下载AAPS的安装文件吗？

无法直接下载。没有可下载的AAPS apk文件。你必须自己[构建](../SettingUpAaps/BuildingAaps.md)它。原因如下：

AAPS用于控制您的泵并输注胰岛素。根据欧洲现行的规定，所有被归类为IIa类或IIb类的系统都是医疗器械，需要获得监管机构的批准（即CE标志），而这需要经过各种研究和审核批准。发布未经监管认可的设备是违法行为。全球其他地区也有类似的规定。

这项规定不仅仅限于销售（以此获利），而是适用于任何发布行为（包括免费赠送）。自行构建医疗设备是合规使用本APP的唯一方式。

这就是不能直接提供APK文件的原因。

(FAQ-how-to-begin)=

### 如何开始？

Start with [Preparing to start with AAPS](../Getting-Started/PreparingForAaps.md): it walks you through everything below in more detail.

首先，您需要**获取可闭环的硬件组件**：

* 一台[受支持的胰岛素泵](../Getting-Started/CompatiblePumps.md)， 
* 一部[安卓智能手机](../Getting-Started/Phones.md)（AAPS不支持Apple iOS系统——您可查阅[iOS Loop](https://loopkit.github.io/loopdocs/)方案）
* 一个[持续葡萄糖监测系统（动态，CGM）](../Getting-Started/CompatiblesCgms.md) 

其次，您需要**配置以下软件组件**：[AAPS系统](../SettingUpAaps/BuildingAaps.md)、[持续/闪速血糖监测数据源](../Getting-Started/CompatiblesCgms.md)以及[报告服务器](../SettingUpAaps/SettingUpTheReportingServer.md)。

第三，您需要学习并**理解OpenAPS参考设计，以核验您的治疗参数**。闭环治疗的基本原则是确保您的[基础率和碳水系数](../SettingUpAaps/YourAapsProfile.md)准确无误。所有建议均基于您的基础率需求已得到满足这一前提，若观测到血糖波峰或波谷，应视为其他因素（如运动、压力等）所致，因此仅需进行一次性调整。闭环系统为保障安全所能进行的调整存在严格限制（参见[OpenAPS参考设计](https://openaps.org/reference-design/)中允许的最大临时基础率），这意味着您不应将有限的剂量调整额度浪费在纠正错误的基础率上。例如，若您经常在临近用餐时出现低血糖而需要临时调低基础率，则很可能需要重新调整您的基础率设置。 You can use [Autotune](#autotune-how-autotune-calculates-adjustments) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed. 或者，您也可以采用[传统方法](https://integrateddiabetes.com/basal-testing/)测试和设置基础代谢率。

### 闭环有哪些实际应用要点？

#### 密码保护

If you don't want your settings to be easily changed, you can protect them with a password, a PIN or your phone's biometric authentication (fingerprint, face). Open **Settings** > **Protection** > **Settings protection** and choose the type of protection. You can also protect the whole app or only boluses in the same place. See [Settings protection](#Preferences-settings-protection) for details.

#### Android Wear智能手表

If you use the AAPS watch app to bolus or change settings, every request has to be confirmed on the watch: after you send it, the watch shows a summary with a **CONFIRM** button. See [Remote control from a Wear OS watch](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### 断开泵连接

若因淋浴、沐浴、游泳、运动或其他活动需摘除胰岛素泵，必须告知 AAPS 系统停止输注，以保持活性胰岛素（IOB）计算准确。

The pump can be disconnected using the [loop icon](#AapsScreens-loop-status) on the AAPS main screen: press it and select **Disconnect pump** with the duration you need. If the activity takes longer than planned, press the icon again and pick a new duration: you don't need to reconnect first. See [Disconnecting the pump for showering or activity](#pumps-cannulas-disconnecting) for how to avoid a lack of insulin during long disconnections.

#### 建议不仅基于单次CGM读数

出于安全考虑，系统建议并非基于单次CGM读数，而是基于平均变化率（delta）。因此，若出现监测数据缺失，恢复数据后AAPS可能需要一定时间才能重新启动循环功能。

#### 进一步阅读

There are several blogs with good tips to help you understand the practicalities of looping. Some of them are no longer online: the links below marked "archived copy" open a saved copy on the Internet Archive.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (archived copy)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (archived copy)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (archived copy)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### 推荐携带的急救设备有哪些？

你必须和其他所有使用胰岛素泵治疗的1型糖尿病患者一样，随身携带相同的应急装备。在使用AAPS闭环系统时，强烈建议随身或在附近备有以下额外设备：

* 备用电源及充电线（用于智能手机、智能手表，以及蓝牙血糖仪/Link设备等需充电配件）
* 胰岛素泵电池
* Access to your backups, both on the phone and in the cloud (e.g. Google Drive, Dropbox), so that you can set up AAPS again on another phone (see [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md)): 
  * the current [apk](../SettingUpAaps/BuildingAaps.md) of AAPS and of any other apps you use (e.g. xDrip, Juggluco, BYODA).
  * your keystore file (from building the apk) and its password,
  * your latest settings export files from AAPS and your other apps,
  * your **AAPS** master password: you cannot import the settings file without it.

(FAQ-organize-backups)=

#### How to organize my backups?

Export settings very regularly: after each pod or reservoir change, after modifying your profile, when you have validated an objective, if you change your pump… Even if nothing changes, export once a month. 保留多份旧的导出文件。

**AAPS** can do this for you: it can export your settings automatically (for example with an [Automation](#ExportImportSettings-Automating-Settings-Export) after each pod change) and save the export directly to a cloud folder (Google Drive). See [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md).

### 如何安全牢固地附着CGM/FGM？

你可以用胶带粘起来。市场上有多种针对常见CGM系统的预穿孔"加固贴片"可供选择（可通过Google、eBay或Amazon搜索购买）。部分闭环系统使用者会选用更经济的标准肌效贴或RockTape品牌产品。

你可以搞定它。您还可以购买通过绑带固定CGM/FGM传感器的上臂护套（可通过Google、eBay或Amazon搜索选购）。

## APS算法

### Why does OpenAPS AMA show "dia: 3" even though I have a different DIA in my profile?

With **OpenAPS AMA** selected in **Configuration** > **APS**, **Open plugin** shows the data sent to the algorithm. In its **Profile** section, `dia` is always 3.0 or less:

![OpenAPS AMA plugin screen with dia 3.0 in the profile data](../images/screens/openaps_ama_plugin.png)

在AMA算法中，DIA实际上并不表示"胰岛素作用时长"。这是一个参数，过去曾与DIA相关联。现在，它表示"应在多长时间内完成校正"。该参数与活性胰岛素（IOB）的计算完全无关。在OpenAPS的SMB模式中，此参数已不再需要。

## 其他设置

### Nightscout设置

(FAQ-nsclient-blocked)=

#### AAPSClient (or AAPS) does not upload data: "Blocked by…". 我能做些什么？

The NSClient status shows why no data is sent:

* **Blocked by connectivity options**: the connection settings do not allow the current connection. For example, you are on cellular data but only Wi-Fi is allowed, or you are not on one of the allowed Wi-Fi networks (SSIDs).
* **Blocked by charging options**: the connection settings only allow syncing while the phone is charging (or only on battery), and this is not the case right now.
* **No connectivity**: the phone has no internet connection.

Check the [NSClient connection settings](#Preferences-nsclient): **Use cellular data**, **Use roaming**, **Use WiFi**, **WiFi SSID**, **Sync on battery** and **Sync while charging**.

### CGM设置

(FAQ-advanced-filtering)=

#### Why does AAPS say 'SMB always and after carbs disabled because active BG source doesn't support advanced filtering'?

**Enable SMB always** and **Enable SMB after carbs** can only be used with a [trusted BG data source](#GettingStarted-TrustedBGSource): a sensor and CGM app that can tell **AAPS** which sensor the readings come from. With any other BG source, **AAPS** switches these two options off and shows this message. Check the list of trusted sources and, if your sensor is listed, make sure you use one of the CGM apps shown for it. See also [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### 胰岛素泵

#### 电池

Looping can reduce the pump battery faster than normal use because the system interacts through Bluetooth far more than a manual user does. 建议在电池电量剩余25%时更换，因电量过低会导致通信稳定性下降。您可以通过在Nightscout网站中设置PUMP_WARN_BATT_P参数来启用胰岛素泵电池低电量预警警报。增加电池寿命的技巧包括：

* 缩短LCD屏幕持续亮屏时间（需在胰岛素泵设置菜单内调整）
* 请通过胰岛素泵设置菜单缩短背光持续时间
* 请将胰岛素泵的通知设置从震动模式调整为蜂鸣提示（需在泵体设置菜单内操作）。
* 请仅通过胰岛素泵按键执行重新加载操作，所有历史数据、电池电量和储药器余量均需通过AAPS查看。
* 为节省电量或释放手机内存，有的手机会频繁关闭AAPS应用。每次启动时，AAPS都会重新初始化并与胰岛素泵建立蓝牙连接，同时重新读取当前基础率及大剂量历史记录。这会消耗电量。 To see if this is happening, enable **Log app start event** in the NSClient **Advanced settings**: Nightscout will receive an event at every restart of AAPS, which makes it easy to track the issue. To reduce this happening, turn off battery optimization for AAPS so that the phone stops closing it down: see [battery savings](#FAQ-battery-savings) below.
* 使用酒精棉片清洁电池触点，确保去除所有出厂残留的蜡质/油脂。
* for [Dana R/RS pumps](../CompatiblePumps/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy while in storage) but it doesn't always work to break it 100%. 请反复取出并重新插入电池2-3次，直至屏幕显示100%电量；或使用电池钥匙在安装前瞬间短接电池两极（接触时间不超过0.5秒）。
* 另请参阅针对[特定电池类型](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)的更多使用技巧。

#### 更换储药器与输注管路

The reservoir must be changed directly on the pump, then the change is recorded in **AAPS**. Follow the step-by-step [guide for changing the pump reservoir and cannula](#pumps-cannulas-changing-reservoir-and-cannula).

### 壁纸

您可以在[手机页面](#Phones-phone-wallpaper)上找到适用于您手机的AAPS壁纸。

### 日常使用

Many of the situations below can be prepared once as a [scene](#scenes): a preset that switches profile, temp target and other settings with one tap. **AAPS** offers ready-made templates, for example *Exercise*, *Sleep*, *Alcohol* or *Bathing*.

#### 卫生

(what-to-do-when-taking-a-shower-or-bath)=

##### 淋浴或泡澡时需要注意什么？​

您可以在淋浴或洗澡时取下泵。在这短时间内，您可能不需要它，但您应告知 AAPS 您已断开连接，以便 IOB 计算正确无误。见<0>上面的描述</0>。 The *Bathing* [scene](#scenes) template does this for you.

#### 工作

根据您的工作，您可以选择在工作日使用不同的胰岛素系数。作为闭环用户，您应该为典型的工作日考虑一个 <0>配置切换</0>。例如，如果您的工作强度较低（如坐在办公桌前），您可以切换到高于 100% 的配置；如果您整天活动且站立，则可以切换到低于 100% 的配置。 You could also consider a high or low temporary target or a [time shift of your profile](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) when working much earlier or later than regular, or if you work different shifts. You can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need, or save your workday settings as a [scene](#scenes).

### 休闲活动

(FAQ-sports)=

#### 运动

您需要重新调整闭环前的旧运动习惯。如果您像以前一样简单地摄入一份或多份运动碳水，闭环系统会识别并相应地进行校正。

因此，你的体内会有更多碳水化合物储备，但同时闭环系统会进行抵消并释放胰岛素。

当使用循环时，您可以尝试以下步骤：

* Make a [profile switch](#ProfileSwitch-change-percentage) below 100%: tap the profile name on the main screen, tap the round **▶** button, then set **Percentage** and **Duration**.
* 将[活动临时目标](#TempTargets-activity-temp-target)设置为高于你的标准目标。 With a percentage below 100 % and a duration, the same **Activate** screen offers a **Temporary target / Activity** switch that starts both at once.
* 如果使用SMB，请确保禁用["在高临时目标时启用SMB"](#Open-APS-features-enable-smb-with-high-temp-targets)和["始终启用SMB"](#Open-APS-features-enable-smb-always)选项。

这些设置的前后处理非常重要。请在运动前及时进行调整，并考虑肌肉充血的影响。

The *Exercise* and *Post-exercise Night* [scene](#scenes) templates bundle these settings, so you can start them with one tap. If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../DailyLifeWithAaps/Automations.md) to start the profile switch and TT, or the scene. 基于位置的自动化也是一种选择，但会使预处理变得更加困难。

配置文件切换的百分比、活动临时目标值以及最佳调整时间都是因人而异的。如果您在寻找适合自己的数值，请从安全范围开始（先使用较低百分比和较高临时目标）。

#### 性生活

您可以摘除胰岛素泵以获得"自由"，但应告知AAPS以确保活性胰岛素(IOB)计算准确。见<0>上面的描述</0>。

#### 饮酒

在闭环模式下饮酒存在风险，因为算法无法准确预测酒精对血糖的影响。您需要通过AAPS的以下功能来探索适合自己的处理方法：

* 停用闭环模式并手动控制糖尿病
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unannounced meal or
* do a [profile switch](#ProfileSwitch-change-percentage) to noticeably less than 100% 

The *Alcohol* [scene](#scenes) template is a starting point you can adapt to your own method.

饮酒时，您必须始终关注连续血糖监测仪(CGM)，以便通过摄入碳水化合物来手动预防低血糖。

#### 睡眠

##### How can I loop during the night without mobile and Wi-Fi radiation?

许多用户会在夜间将手机切换至飞行模式。 If you want the loop to support you when you are sleeping, proceed as follows (this will only work if your CGM app runs on the same phone as AAPS, such as xDrip, Juggluco or BYODA; it will NOT work if you get the BG-readings via Nightscout):

1. 将您的手机设置为飞行模式。
2. 等待直至飞行模式生效。
3. 打开蓝牙。

您现在既无法接听电话，也无法连接互联网。但闭环仍在运行。

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip) when phone is in airplane mode. In xDrip, go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

If you want different settings at night (for example a higher target), the *Sleep* [scene](#scenes) template is a good starting point.

#### Traveling

##### 如何应对时区变化？

使用 Dana R 和 Dana R Korean 无需进行任何操作。 For other pumps see [time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) page for more details.

### 医疗话题

#### 住院

如果您想与临床医生分享有关AAPS和DIY闭环系统的一些信息，可以打印[AAPS临床医生指南](../UsefulLinks/ClinicianGuideToAaps.md)。

#### 内分泌科医生的医疗预约

##### 报告

您可以选择展示您的Nightscout报告(https://YOUR-NS-SITE.com/report)，或者查看[Nightscout Reporter](https://nightscout-reporter.zreptil.de/)。

## Discord上的常见问题及其解答...

### 我的问题不在此列。

See [where to get help](../GettingHelp/WhereCanIGetHelp.md). If you found the solution yourself, **remind us to add it to this list!**

### Building and installing

(FAQ-build-errors)=

#### 我在构建应用程序时遇到问题和错误。

Please check the troubleshooting page for the way you build **AAPS** (see [Building AAPS](../SettingUpAaps/BuildingAaps.md)):

* building with a browser: [Browser build: troubleshooting](#aaps-ci-troubleshooting),
* building with Android Studio: [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### 构建错误：文件名太长

This error can happen when building with Android Studio: the build stops with an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "C:\src\AndroidAPS").

在Android Studio中： 请确保在打开项目并从GitHub拉取代码后，"Gradle"已完成同步和索引工作。在重新构建项目之前执行 Build->Clean Project。执行 文件→使缓存无效并重启Android Studio。

(FAQ-running-dev-version)=

#### 警告：正在运行开发版本。闭环已禁用。

**AAPS** shows this message when you run a development (dev) version without engineering mode: in a dev version, closed loop only works in engineering mode.

The dev version is meant for testing, not for actual looping: read [Development branch](../AdvancedOptions/DevBranch.md) before going further.

To turn on engineering mode:

1. Place a file named `engineering_mode` in the `extra` subfolder of your AAPS directory (the folder you chose in the setup wizard, usually `AAPS/extra`). 任何文件都可以，只要命名正确。
2. Restart **AAPS** so that it finds the file.

提示：复制一份现有的日志文件，并将其重命名为"engineering_mode"（注意：不要有文件扩展名！）。

### 目标

#### 我被卡在一个目标上，需要帮助。

First read [Completing the Objectives](../SettingUpAaps/CompletingTheObjectives.md). If you are still stuck, screen capture the question and answers and post them on the Discord AAPS channel. 别忘了说明您选择的选项（或未选择的）以及原因。您会得到提示和帮助，但您需要自己找到答案。

### Settings, passwords and backups

(FAQ-reset-master-password)=

#### How to reset the master password?

If you forgot your master password, you can reset it to your pump's serial number:

1. Create an empty file named `PasswordReset` (no file extension) in the `extra` subfolder of your AAPS directory (usually `AAPS/extra`).
2. Restart **AAPS**. Your pump must be connected: **AAPS** shows "Waiting for pump…" and needs to read the pump serial number within 30 seconds.
3. **AAPS** shows "Password set!": your master password is now your **pump serial number**. The `PasswordReset` file is deleted automatically.
4. Open **Settings** > **Protection** > **Master password** and set a new password.

If the pump is not reached in time, nothing changes: check the pump connection and try again.

This only resets the master password. A settings, application or bolus password or PIN is not reset, but you can always use the master password instead of them.

    {admonition} Old settings files
    :class: warning
    Settings files exported with the old master password can only be imported with that old password.

(FAQ-where-are-settings-files)=

#### 在哪里可以找到设置文件？

Settings files are stored in the `preferences` subfolder of the AAPS directory you chose in the [setup wizard](#SetupWizard-StoragePermission) (for example `/internal storage/AAPS/preferences`). If you set up a cloud folder (Google Drive), your exports can also be saved there. See [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md).

警告：请务必保管好您的密码，否则将无法导入加密的设置文件！

(FAQ-import-settings-earlier-versions)=

#### How do I import settings from earlier versions of AAPS into AAPS v3 or v4 ?

You can only import settings (in AAPS v3 or v4) that were exported using AAPS v2.8x or later. If you were using a version of AAPS older than v2.8x or you need to use setting exports older than v2.8x, then you need to install AAPS v2.8 first. Import the older settings of v2.x in v2.8. After checking that all is OK, you can export settings from v2.8. Install the current AAPS version and import v2.8 settings in it.

If you use the same key to build the old and the new version, you won't even have to import settings. You can install the new version over the old one.

添加了一些新的目标。您需要验证它们。

(FAQ-delete-treatments)=

#### Where can I delete treatments?

Open the **menu** (☰) and select **Treatments history**. Long press an entry to select it, tap more entries if needed, then tap the **trash can** icon and confirm. See [Treatments history](#aaps-screens-treatments).

### Phone and connection problems

(FAQ-aaps-stops)=

#### AAPS每天大约在同一时间停止运行。

* Google Play Protect may shut down **AAPS** every morning on some phones. If this happens, go to the Google Play options and disable **Google Play Protect**.
* 检查“清理”应用程序（例如 CCleaner 等）并卸载它们。
* Turn off all battery optimizations for **AAPS** (see [battery savings](#FAQ-battery-savings) below).

(FAQ-battery-savings)=

#### 如何配置电池节能设置？

Your phone may suspend **AAPS** and related apps (CGM app, Bluetooth) when you are not using it. **AAPS** then cannot do its work, and Bluetooth connections to the sensor and pump (or RileyLink) may be shut down, causing "pump unreachable" alerts and communication errors.

Turn off battery optimization for **AAPS**, your CGM app (e.g. xDrip) and the Bluetooth system app. The way to do this depends on the phone's brand, model and Android version:

* see [Battery optimization](#generaltroubleshooting-android-related-issues) for Pixel, Samsung and Huawei phones,
* in **AAPS**, open the **menu** (☰) > **About** and tap **Don't kill my app?**, or visit [Don't kill my app](https://dontkillmyapp.com/) for other brands.

If you are not sure that battery savings cause your problem, you can temporarily turn off all battery savings on the phone: your battery will drain faster, but you will quickly see if the problem goes away.

(FAQ-pump-unreachable-alerts)=

#### 胰岛素泵无法连接警报每天或夜间多次出现。

Your phone may be suspending **AAPS** or even Bluetooth, causing it to lose the connection to the pump or RileyLink (see [battery savings](#FAQ-battery-savings) above).

You can also change when the alert is raised: press the **Settings** (gear) icon on the top right of the main screen, then select **Local alerts** > **Pump unreachable threshold** (30 to 300 minutes). Check your pump's page: some recommend a value, e.g. 120 minutes for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### 我的连接/胰岛素泵/Pod无响应（RL/OL/EmaLink等设备）

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaLink).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump).

First try the **Reset RileyLink** button on the pump screen (see your pump's page: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). If this does not help, the easiest way to get all these parts working together is:

1. Power off the Link.
2. Quit **AAPS** (**menu** (☰) > **Exit**).
3. Long press the **AAPS** icon, open the Android **App info**, tap **Force stop**, then **Storage** > **Clear cache** (do NOT clear storage/data!).
4. Rarely some phones may need a reboot here. 您可以尝试不重启。
5. Power on the Link.
6. Start **AAPS**.
7. On the pump screen, tap **Pair RileyLink** and select your Link again.

### 远程控制

(FAQ-aapsclient)=

#### 配置和使用AAPSClient远程应用程序

**AAPSClient** is a separate app that lets a caregiver follow and control **AAPS** remotely. Since **AAPS** v4, controlling **AAPS** from AAPSClient needs a one-time pairing between the two apps. See:

* [The AAPSClient app](#aapsclient-app): installing, first start and pairing,
* [Master ↔ Client control](#client-master-control): what can be controlled and how pairing works,
* [AAPSClient on a smartwatch](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Treatments I enter on the Nightscout website are not applied

That is [hardened mode](#client-master-control-hardened-mode). While client control is on — always in Simple Mode — **AAPS** takes changes only from paired clients, not from the Nightscout website or other apps. Enter them on a paired **AAPSClient** instead.

### Alerts and warnings

#### I have a red warning badge (red triangle) / AAPS won't enable closed loop / Loop stays in LGS / I had a yellow triangle

The red warning badge on the BG source shortcut is a security feature in AAPS. See [BG warning sign](#aaps-screens-bg-warning-sign) for the full explanation.

A red warning badge on the BG source shortcut in the bottom bar (the red triangle of older versions) means that you have duplicate BGs and AAPS can't calculate precisely the deltas. A closed loop is switched to **Low Glucose Suspend** mode: it still reduces or suspends your basal to protect you against lows, but it gives no correction insulin. You need to delete one BG of each duplicated value in order to clear the warning. Tap the shortcut to open your [BG source screen](#aaps-screens-bg-source): the duplicate is highlighted in red. Long press one line you want to delete, check one of each lines that are doubled and tap the trash icon. 如果存在过多重复血糖值，您可能需要重置AAPS数据库。 In this case, you'll also lose stats, IOB, COB, selected profile.

Once the warning is gone, AAPS does not go back to **Closed Loop** by itself. Press the loop icon on the main screen and select **Closed Loop** again.

问题可能源于：xDrip和/或Nightscout(NS)的血糖数据回填功能。

The yellow triangle of older versions meant unstable delay between each BG reading (BGs not received every 5 min regularly, or missing BGs), which often happens with Libre or after a G6 transmitter change. **AAPS** 4 no longer shows it: it recalculates the values in the background and the loop works correctly.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Can I move an active DASH Pod to another phone?

The Pod state is included in the exported settings, so an active Pod can be moved to another phone by exporting the settings right before the move and importing them on the other phone. This is not officially supported and there is a risk of losing the Pod: if possible, try it when your Pod is about to expire.

Read these sections first:

* [Export and import settings](#omnipod-dash-export-import) on the Omnipod DASH page, and [Tubeless pumps](#ExportImportSettings-tubeless-pumps): on the new phone, tick **Also replace pump settings** and use a file exported while wearing your current Pod,
* [Discarding a pod](#omnipod-dash-discard-pod), to remove the Pod from the old phone afterwards. Keep the old phone in airplane mode until the Pod is discarded, so that the two phones never talk to the Pod at the same time.