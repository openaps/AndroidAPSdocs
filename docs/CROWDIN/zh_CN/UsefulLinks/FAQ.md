# 闭环常见问题（FAQ）

如何向FAQ添加问题：请按照以下[说明](../SupportingAaps/HowToEditTheDocs.md)操作

## 常规

### 我可以直接下载AAPS的安装文件吗？

无法直接下载。 没有可下载的AAPS apk文件。 你必须自己[构建](../SettingUpAaps/BuildingAaps.md)它。 原因如下：

AAPS用于控制您的泵并输注胰岛素。 根据欧洲现行的规定，所有被归类为IIa类或IIb类的系统都是医疗器械，需要获得监管机构的批准（即CE标志），而这需要经过各种研究和审核批准。 发布未经监管认可的设备是违法行为。 全球其他地区也有类似的规定。

这项规定不仅仅限于销售（以此获利），而是适用于任何发布行为（包括免费赠送）。 自行构建医疗设备是合规使用本APP的唯一方式。

这就是不能直接提供APK文件的原因。

(FAQ-how-to-begin)=

### 如何开始？

首先，您需要**获取可闭环的硬件组件**：

- 一台[受支持的胰岛素泵](../Getting-Started/CompatiblePumps.md)， 
- 一部[安卓智能手机](../Getting-Started/Phones.md)（AAPS不支持Apple iOS系统——您可查阅[iOS Loop](https://loopkit.github.io/loopdocs/)方案）
- 一个[持续葡萄糖监测系统（动态，CGM）](../Getting-Started/CompatiblesCgms.md) 

其次，您需要**配置以下软件组件**：[AAPS系统](../SettingUpAaps/BuildingAaps.md)、[持续/闪速血糖监测数据源](../Getting-Started/CompatiblesCgms.md)以及[报告服务器](../SettingUpAaps/SettingUpTheReportingServer.md)。

第三，您需要学习并**理解OpenAPS参考设计，以核验您的治疗参数**。 闭环治疗的基本原则是确保您的[基础率和碳水系数](../SettingUpAaps/YourAapsProfile.md)准确无误。 所有建议均基于您的基础率需求已得到满足这一前提，若观测到血糖波峰或波谷，应视为其他因素（如运动、压力等）所致，因此仅需进行一次性调整。 闭环系统为保障安全所能进行的调整存在严格限制（参见[OpenAPS参考设计](https://openaps.org/reference-design/)中允许的最大临时基础率），这意味着您不应将有限的剂量调整额度浪费在纠正错误的基础率上。 例如，若您经常在临近用餐时出现低血糖而需要临时调低基础率，则很可能需要重新调整您的基础率设置。 您可以使用[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig)分析大量数据，从而判断是否需要调整基础率和/或胰岛素敏感系数（ISF）以及如何调整，同时评估碳水比率是否需要修改。 或者，您也可以采用[传统方法](https://integrateddiabetes.com/basal-testing/)测试和设置基础代谢率。

### 闭环有哪些实际应用要点？

#### 密码保护

如果您不希望偏好设置被轻易更改，可以在偏好设置菜单中选择​“为设置添加密码”​，然后输入您设定的密码，即可对偏好设置菜单进行密码保护。 下次进入偏好设置菜单时，系统将要求输入该密码，验证通过后方可继续操作。 若之后想取消密码保护功能，请进入​“设置密码”​选项并清空文本框内容。

#### Android Wear智能手表

如果您计划通过 Android Wear 应用进行推注或更改设置，请确保未屏蔽来自 AAPS 的通知。 操作确认将通过通知发送。

(FAQ-disconnect-pump)=

#### 断开泵连接

若因淋浴、沐浴、游泳、运动或其他活动需摘除胰岛素泵，必须告知 AAPS 系统停止输注，以保持活性胰岛素（IOB）计算准确。

您可通过[AAPS 主屏幕](#AapsScreens-loop-status)上的<1>循环状态图标</1>断开胰岛素泵连接。

#### 建议不仅基于单次CGM读数

出于安全考虑，系统建议并非基于单次CGM读数，而是基于平均变化率（delta）。 因此，若出现监测数据缺失，恢复数据后AAPS可能需要一定时间才能重新启动循环功能。

#### 进一步阅读

以下精选博客提供实用技巧，助您掌握闭环系统的操作要点：

- [微调设置](https://seemycgm.com/2017/10/29/fine-tuning-settings/) - See my CGM
- [为什么DIA很重要](https://seemycgm.com/2017/08/09/why-dia-matters/) - See my CGM
- [限制餐后血糖飙升](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) - #DIYPS
- [激素和autosens](https://seemycgm.com/2017/06/06/hormones-2/) - See my CGM

### 推荐携带的急救设备有哪些？

你必须和其他所有使用胰岛素泵治疗的1型糖尿病患者一样，随身携带相同的应急装备。 在使用AAPS闭环系统时，强烈建议随身或在附近备有以下额外设备：

- 备用电源及充电线（用于智能手机、智能手表，以及蓝牙血糖仪/Link设备等需充电配件）
- 胰岛素泵电池
- 当前版本的 [AAPS安装包](../SettingUpAaps/BuildingAaps.md) 和 [配置文件](../Maintenance/ExportImportSettings.md)（包括其他相关应用如xDrip+、BYO Dexcom等），需在本地和云端（Dropbox、Google Drive）双重备份。

### 如何安全牢固地附着CGM/FGM？

你可以用胶带粘起来。 市场上有多种针对常见CGM系统的预穿孔"加固贴片"可供选择（可通过Google、eBay或Amazon搜索购买）。 部分闭环系统使用者会选用更经济的标准肌效贴或RockTape品牌产品。

你可以搞定它。 您还可以购买通过绑带固定CGM/FGM传感器的上臂护套（可通过Google、eBay或Amazon搜索选购）。

## APS算法

### 为什么我的个人资料中设置了不同的DIA值，但"OPENAPS AMA"标签页仍显示"dia:3"？

![AMA 3h](../images/Screenshot_AMA3h.png)

在AMA算法中，DIA实际上并不表示"胰岛素作用时长"。 这是一个参数，过去曾与DIA相关联。 现在，它表示"应在多长时间内完成校正"。 该参数与活性胰岛素（IOB）的计算完全无关。 在OpenAPS的SMB模式中，此参数已不再需要。

## 其他设置

### Nightscout设置

#### AAPS客户端显示"未获授权"并停止数据上传。 我能做些什么？

在 AAPSClient 中检查 "连接设置"。 也许你实际上并不在允许的WLAN中，或者你已经激活了“仅当充电时”，而你的充电电缆没有连接。

### CGM设置

#### 为什么AAPS说“BG源不支持高级过滤”？

如果你使用的是xDrip原生模式下的非Dexcom G5或G6 CGM/FGM，你会在AAPS的OpenAPS标签中看到这个警告。 请参阅[平滑血糖数据](../CompatibleCgms/SmoothingBloodGlucoseData.md)。

### 胰岛素泵

#### 泵放在哪里？

放置泵的位置有无数种可能。 是否使用闭环并不重要。

#### 电池

闭环系统运行会加速胰岛素泵电池消耗（相比手动操作模式），因为系统通过蓝牙的交互频率远高于人工操作。 建议在电池电量剩余25%时更换，因电量过低会导致通信稳定性下降。 您可以通过在Nightscout网站中设置PUMP_WARN_BATT_P参数来启用胰岛素泵电池低电量预警警报。 增加电池寿命的技巧包括：

- 缩短LCD屏幕持续亮屏时间（需在胰岛素泵设置菜单内调整）
- 请通过胰岛素泵设置菜单缩短背光持续时间
- 请将胰岛素泵的通知设置从震动模式调整为蜂鸣提示（需在泵体设置菜单内操作）。
- 请仅通过胰岛素泵按键执行重新加载操作，所有历史数据、电池电量和储药器余量均需通过AAPS查看。
- 为节省电量或释放手机内存，有的手机会频繁关闭AAPS应用。 每次启动时，AAPS都会重新初始化并与胰岛素泵建立蓝牙连接，同时重新读取当前基础率及大剂量历史记录。 这会消耗电量。 要确认是否发生此情况，请前往【设置】>【NS客户端】并启用"记录应用启动至Nightscout"功能。 每次AAPS重启时，Nightscout都会接收到相应事件记录，便于追踪该问题。 为避免此情况发生，请在手机电池设置中将AAPS应用加入白名单，以防止系统电源管理强制关闭该应用。
    
    例如，在运行Android Pie系统的三星手机上设置白名单的操作步骤如下：
    
    - 转到“设置”->“设备护理”->“电池” 
    - 滚动直到找到AAPS并选择它
    - 取消选中“使应用进入休眠状态”
    - 还要转到“设置”->“应用”->（屏幕右上角的三个圆圈符号）选择“特殊访问”->“优化电池使用”
    - 滚动到AAPS并确保它被取消选中。

- 使用酒精棉片清洁电池触点，确保去除所有出厂残留的蜡质/油脂。

- 对于[Dana R/RS胰岛素泵](../CompatiblePumps/DanaRS-Insulin-Pump.md)，其启动程序会施加高电流以刻意击穿电池钝化膜（该膜用于防止存储期间能量损耗），但这一过程并不总能实现100%的完全击穿。 请反复取出并重新插入电池2-3次，直至屏幕显示100%电量；或使用电池钥匙在安装前瞬间短接电池两极（接触时间不超过0.5秒）。
- 另请参阅针对[特定电池类型](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)的更多使用技巧。

#### 更换储药器与输注管路

更换储药器操作无法通过AAPS完成，仍需像往常一样直接在胰岛素泵上执行。

- 在AAPS的「首页」选项卡中长按"开环"/"闭环"按钮，选择「暂停闭环1小时」。
- 现在断开泵的连接，并按照泵的说明更换储药器。
- 此外，管路与输注套管的预充操作也可直接在胰岛素泵上完成。 这种情况下，请使用操作选项卡中的[PRIME/FILL按钮](#screens-action-tab)仅用于记录更换操作。
- 重新连接胰岛素泵后，长按"已暂停（剩余X分钟）"按钮即可恢复闭环运行。

然而，更换输注管路时并不使用胰岛素泵自带的"充盈管路"功能，而是通过大剂量注射（该操作不会出现在大剂量历史记录中）来完成管路和/或套管的填充。 这意味着该操作不会中断当前正在运行的临时基础率。 在操作（Act）选项卡中，使用[PRIME/FILL按钮](#screens-action-tab)设置充盈输注管路所需的胰岛素量并启动预充程序。 若剂量不足，请重复执行充盈操作。 您可以在【设置】>【其他】>【充盈/预充标准胰岛素量】中配置默认剂量快捷按钮。 请参阅输注套管包装内的说明书，根据针头长度和管路长度确定所需预充胰岛素单位数。

### 壁纸

您可以在[手机页面](#Phones-phone-wallpaper)上找到适用于您手机的AAPS壁纸。

### 日常使用

#### 卫生

##### 淋浴或泡澡时需要注意什么？​

您可以在淋浴或洗澡时取下泵。 在这短时间内，您可能不需要它，但您应告知 AAPS 您已断开连接，以便 IOB 计算正确无误。 见<0>上面的描述</0>。

#### 工作

根据您的工作，您可以选择在工作日使用不同的胰岛素系数。 作为闭环用户，您应该为典型的工作日考虑一个 <0>配置切换</0>。 例如，如果您的工作强度较低（如坐在办公桌前），您可以切换到高于 100% 的配置；如果您整天活动且站立，则可以切换到低于 100% 的配置。 您还可以考虑设置较高或较低的临时目标，或在工作时间比平时早很多或晚很多时，或轮班工作时，进行 [配置时间调整](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile)。 您还可以创建第二个配置（例如“家庭”和“工作日”），并根据需要每天切换到实际需要的配置。

### 休闲活动

(FAQ-sports)=

#### 运动

您需要重新调整闭环前的旧运动习惯。 如果您像以前一样简单地摄入一份或多份运动碳水，闭环系统会识别并相应地进行校正。

因此，你的体内会有更多碳水化合物储备，但同时闭环系统会进行抵消并释放胰岛素。

当使用循环时，您可以尝试以下步骤：

- 将[配置文件切换](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)设置为小于100%。
- 将[活动临时目标](#TempTargets-activity-temp-target)设置为高于你的标准目标。
- 如果使用SMB，请确保禁用["在高临时目标时启用SMB"](#Open-APS-features-enable-smb-with-high-temp-targets)和["始终启用SMB"](#Open-APS-features-enable-smb-always)选项。

这些设置的前后处理非常重要。 请在运动前及时进行调整，并考虑肌肉充血的影响。

如果您定期在相同时间进行运动（例如健身房的体育课），可以考虑使用 [自动化](../DailyLifeWithAaps/Automations.md) 来切换配置和 TT。 基于位置的自动化也是一种选择，但会使预处理变得更加困难。

配置文件切换的百分比、活动临时目标值以及最佳调整时间都是因人而异的。 如果您在寻找适合自己的数值，请从安全范围开始（先使用较低百分比和较高临时目标）。

#### 性生活

您可以摘除胰岛素泵以获得"自由"，但应告知AAPS以确保活性胰岛素(IOB)计算准确。 见<0>上面的描述</0>。

#### 饮酒

在闭环模式下饮酒存在风险，因为算法无法准确预测酒精对血糖的影响。 您需要通过AAPS的以下功能来探索适合自己的处理方法：

- 停用闭环模式并手动控制糖尿病
- 设置较高的临时目标并停用未标记餐食(UAM)功能，以防止闭环系统因未记录的餐食而增加活性胰岛素(IOB)
- 将配置文件切换至明显低于100%的比例 

饮酒时，您必须始终关注连续血糖监测仪(CGM)，以便通过摄入碳水化合物来手动预防低血糖。

#### 睡眠

##### 如何在夜间运行闭环时避免手机和WiFi辐射？

许多用户会在夜间将手机切换至飞行模式。 如果您希望闭环系统在睡眠时继续工作，请按以下步骤操作（此方法仅适用于使用本地血糖数据源的情况，如xDrip+或['自建Dexcom应用'](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)，若通过Nightscout获取血糖读数则无法使用）：

1. 将您的手机设置为飞行模式。
2. 等待直至飞行模式生效。
3. 打开蓝牙。

您现在既无法接听电话，也无法连接互联网。 但闭环仍在运行。

一些用户发现，当手机处于飞行模式时会出现本地广播问题（AAPS无法接收来自xDrip+的血糖值数据）。 进入设置 > 应用间设置 > 识别接收器，输入 `info.nightscout.androidaps`。

![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

#### 旅行

##### 如何应对时区变化？

使用 Dana R 和 Dana R Korean 无需进行任何操作。 对于其他泵，请参阅 [时区旅行](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) 页面了解更多详情。

### 医疗话题

#### 住院

如果您想与临床医生分享有关AAPS和DIY闭环系统的一些信息，可以打印[AAPS临床医生指南](../UsefulLinks/ClinicianGuideToAaps.md)。

#### 内分泌科医生的医疗预约

##### 报告

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Frequent questions on Discord and their answers...

### My problem is not listed here.

[Information to get help.](../GettingHelp/WhereCanIGetHelp.md)

### My problem is not listed here but I found the solution

[Information to get help.](../GettingHelp/WhereCanIGetHelp.md)

**Remind us to add your solution to this list!**

### AAPS stops everyday around the same time.

Stop Google Play Protect. Check for "cleaning" apps (ie CCleaner etc) and uninstall them. AAPS / 3 dots menu / About / follow the link "Keep app running in the background" to stop all battery optimizations.

### How to organize my backups ?

Export settings very regularly: after each pod change, after modifying your profile, when you have validated an objective, if you change your pump… Even if nothing changes, export once a month. Keep several old export files.

Copy on an internet drive (Dropbox, Google etc) : all the apks you used to install apps on your phone (AAPS, xDrip, BYODA, Patched LibreLink…) as well as the exported setting files from all your apps.

### I have problems, errors building the app.

Please

- check [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio) for typical errors and
- the tipps for with a [step by step walktrough](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

### I'm stuck on an objective and need help.

Screen capture the question and answers. Post-it on the Discord AAPS channel. Don't forget to tell which options you choose (or not) and why. You'll get hints and help but you'll need to find the answers.

### How to reset the password in AAPS v2.8.x ?

Open the hamburger menu, start the Configuration wizard and enter new password when asked. You can quit the wizard after the password phase.

### How to reset the password in AAPS v3.x

You find the documentation [here](#Update3_0-reset-master-password).

### My link/pump/pod is unresponsive (RL/OL/EmaLink…)

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaL...).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump.)

The easiest way to get all these parts working together is : 1/ Delete Link from AAPS 2/ Power off Link 3/ AAPS 3 dot menu, quit AAPS 4/ Long press AAPS icon, Android menu, info on app AAPS, Force stop AAPS and then Delete cache memory (Do not delete main memory !) 4bis/ Rarely some phones may need a reboot here. You can try without reboot. 5/Power on Link 6/Start AAPS 7/Pod tab, 3 dot menu, search and connect Link

### Build error: file name too long

While trying to build I get an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "c:\src\AndroidAPS-EROS").

From Android Studio: Make sure "Gradle" is done syncing and indexing after opening the project and pulling from GitHub. Execute a Build->Clean Project before doing a Rebuild Project. Execute File->Invalidate Caches and Restart Android Studio.

### Alert: Running dev version. Closed loop is disabled

AAPS is not running in "developer mode". AAPS shows the following message: "running dev version. Closed loop is disabled".

Make sure AAPS is running in "developer mode": Place a file named "engineering_mode" at the location "AAPS/extra". Any file will do as long as it is properly named. Make sure to restart AAPS for it to find the file and go into "developer mode".

Hint: Make a copy of an existing logfile and rename it to "engineering_mode" (note: no file extension!).

### Where can I find settings files?

Settings files will be stored on your phone's internal storage in the directory "/AAPS/preferences". WARNING: Make sure not to lose your password as without it you will not be able to import an encrypted settings file!

### How to configure battery savings?

Properly configuring Power Management is important to prevent your Phone's OS to suspend AAPS and related app's and services when your phone is not being used. As a result AAPS can not do its work and/or Bluetooth connections for sensor and Rileylink (RL) may be shut down causing "pump disconnected" alerts and communication errors. On the phone, go to settings->Apps and disable battery savings for: AAPS xDrip or BYODA/Dexcom app The Bluetooth system app (you may need to select for viewing system apps first) Alternatively, fully disable all battery savings on the phone. As a result your battery may drain faster but it is a good way to find out if battery savings is causing your problem. The way battery savings is implemented greatly depends on the phone's brand, model and/or OS version. Because of this it is almost impossible to give instructions to properly set battery savings for your setup. Experiment on what settings work best for you. For additional information, see also Don't kill my app

### Pump unreachable alerts several times a day or at night.

Your phone may be suspending AAPS services or even Bluetooth causing it to loose connection to RL (see battery savings) Consider configuring unreachable alerts to 120 minutes by going to the top right-hand side three-dot menu, selecting Preferences->Local Alerts->Pump unreachable threshold [min].

### Where can I delete treatments in AAPS v3 ?

3 dots menu, select treatments, then 3 dots menu again and you have different options available.

### Configuring and Using the AAPSClient remote app

AAPS can be monitored and controlled remotely via the AAPSClient app and optionally via the associated Wear app running on Android Wear watches. Note that the AAPSClient (remote) app is distinct from the NSClient configuration in AAPS, and the AAPSClient (remote) Wear app is distinct from the AAPS Wear app--for clarity the remote apps will be referred to as 'AAPSClient remote' and 'AAPS remote Wear' apps.

To enable AAPSClient remote functionality you must: 1) Install the AAPSClient remote app (the version should match the version of AAPS being used) 2) Run the AAPSClient remote app and proceed through the configuration wizard to grant required permissions and configure access to your Nightscout site. 3) At this point you may want to disable some of the Alarm options, and/or advanced settings which log the start of the AAPSClient remote app to your Nightscout site. Once this is done, AAPSClient remote will download Profile data from your Nightscout site, the 'Overview' tab will display CGM data and some AAPS data, but but may not display graph data, and will indicate that a profile isn't yet set. 4) To activate the profile:

- Enable remote profile synchronization in AAPS > NSClient > Options
- Activate the profile in NSClient remote > Profile After doing so, the profile will be set, and AAPSClient remote should display all data from AAPS. Hint: If the graph is still missing, try changing the graph settings to trigger an update. 5) To enable remote control by the AAPSClient, selectively enable the aspects of AAPS (Profile changes, Temp Targets, Carbs, etc.) that you would like to be able to control remotely via AAPS > NSClient > Options . Once these changes are made, you'll be able to remotely control AAPS via either Nightscout or AAPSClient remote.

If you'd like to monitor/control AAPS via the AAPSClient remote Wear App, you'll need both AAPSClient remote and the associated Wear app to be installed. To compile the AAPSClient remote Wear app, follow the standard instructions for installing/configuring the AAPS wear app, except when compiling it, choose the AAPSClient variant.

### I have a red triangle / AAPS won't enable closed loop / Loops stays in LGS / I have a yellow triangle

The red and yellow triangles are a security feature in AAPS v3.

Red triangle means that you have duplicate BGs and AAPS can't calculate precisely the deltas. You can't close the loop. You need to delete one BG of each duplicated value in order to clear the red triangle. Go to BYODA or xDRIP tab, long press one line you want to delete, check one of each lines that are doubled (or via 3 dots menu and Delete, depending on your AAPS version). You may need to reset the AAPS databases if there are too many double BGs. In this case, you'll also loose stats, IOB, COB, selected profile.

Possible origin of the problem: xDrip and/or NS backfilling BGs.

The yellow triangle means unstable delay between each BG reading. You don't receive BGs every 5 min regularly or missing BGs. It is often a Libre problem. It also happens when you change G6 transmitter. If the yellow triangle is related to the G6 tansmitter change, it will go away by itself after several hours (around 24h). In case of Libre, the yellow triangle will stay. The loop can be closed and works correctly.

### Can I move an active DASH Pod to other hardware?

This is possible. Note that as moving is "unsupported" and "untested" there is some risk involved. Best to try the procedure when your Pod is about to expire so when things go wrong not much is lost.

Critical is that pump "state" (which includes it's MAC address) in AAPS and DASH match on reconnecting

### Procedure I follow in this:

1) Suspend the DASH pump. This makes sure there are no running or queued commands active when DASH loses connection 2) Put the phone into airplane mode to disable BT (as well as WiFi and Mobile data). This way it is guaranteed AAPS and DASH can not communicate. 3) Export settings (which includes the DASH state) 4) Copy the settings file just exported from the phone (as it is in airplane mode and we do not want to change that, easiest way is using USB cable) 5) Copy the settings file to the alternate phone. 6) Import settings on the alternate phones AAPS. 7) Check the DASH tab to verify it is seeing the Pod. 8) Un-suspend the Pod. 9) Check the DASH tab and confirm it is communicating with the Pod (use the refresh button)

Congratulations: you did it!

*Wait!* You still have the main phone thinking it can reconnect to the same DASH:

1) On the main phone choose "deactivate". This is safe because the phone has no way of communicating with DASH to actually deactivated the Pod (it is still in airplane mode) 2) Deactivation will result in a communications error - this is expected. 3) Just hit "retry" a couple of times until AAPS offers the option to "Discard" the Pod.

When Discarded, verify AAPS is reporting "No Active Pod". You can now safely disable airplane mode again.

### How do I import settings from earlier versions of AAPS into AAPS v3 ?

You can only import settings (in AAPS v3) that were exported using AAPS v2.8x or v3.x. If you were using a version of AAPS older than v2.8x or you need to use setting exports older than v2.8x, then you need to install AAPS v2.8 first. Import the older settings of v2.x in v2.8. After checking that all is OK, you can export settings from v2.8. Install AAPS v3 and import v2.8 settings in v3.

If you use the same key to build v2.8 and v3, you won't even have to import settings. You can install v3 over v2.8.

There were some new objectives added. You'll need to validate them.