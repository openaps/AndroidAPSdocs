
# 发布说明

请按照[更新手册](UpdateToNewVersion)中的说明进行操作。 故障排除部分也涵盖了在**AAPS**更新手册页面上更新时遇到的最常见问题。

当有新版本可用时，您将立即收到通知。 如果在到期日之前未更新，**AAPS**将切换至开环模式。

![Update info](../images/AAPS_LoopDisable90days.png)

此提示非常重要，请勿忽略且无意打扰您。 **AAPS**的新版本不仅提供新功能，还包括重要的安全修复。 因此，每位**AAPS**用户都应尽快更新至最新版本。 遗憾的是，仍有来自非常旧版本的错误报告，因此这是为提高每位**AAPS**用户及DIY社区安全性所做的努力。 感谢您的理解。

```{admonition} First version of **AAPS**
:class: note
首个测试版本于2015年发布。 2016年推出了首个正式版本。

目前这些版本的编年记录暂不可用，但由于多次被问及，我们在此进行说明。

```
![AAPS 1.0](../images/update/AAPS1.0.png)

(maintenance-android-version-aaps-version)=

## Android版本与AAPS版本

如果您的手机使用低于Android 11的系统，将无法使用AAPS v3.3及更高版本，因为最低要求为Android 11。

为允许旧版Android用户继续使用旧版AAPS，我们推送了仅修改版本验证的新版本，不包含其他改进。 不包含其他改进。

### Android 11及以上

- 使用最新AAPS版本
- 从<https://github.com/nightscout/AndroidAPS>下载AAPS代码

### Android 9,10

- 使用AAPS版本**3.2.0.4**
- 从<https://github.com/nightscout/AndroidAPS>的3.2.0.4分支下载代码

### Android 8

- 使用AAPS版本**2.8.2.1**
- 从<https://github.com/nightscout/AndroidAPS>的2.8.2.1分支下载代码

### Android 7

- 使用AAPS版本**2.6.2**
- 从<https://github.com/nightscout/AndroidAPS>的2.6.2分支下载代码

## WearOS版本

- AAPS需要WearOS API级别28（Android 9）或更高

```{tip}
WearOS 5（API级别34，基于Android 14）存在[限制](#BuildingAapsWearOs-WearOS5)。
```

(version3300)=
## 版本 3.3.2.0

发布日期：2025年3月27日

### 如何升级

* 需使用[Android Studio "Meerkat"版本](#Building-APK-recommended-specification-of-computer-for-building-apk-file)或更高。 若已构建过3.3.x版本，需升级Android Studio。

### 从此版本起，通知和版本强制机制已简化并调整如下：
*  设备离线时（无网络连接）不会过期， 即取消60天和90天的宽限期。
*  过期后强制进入LGS模式
*  减少通知频率：
   - 剩余28天以上：每7天提醒
   - 剩余14-27天：每3天提醒
   - 剩余不足14天：每天提醒
   - 通知将在中午后生成，避免夜间打扰
* 仅保留两种通知类型：
   - 新版本可用（不影响AAPS运行）
   - 应用即将/已过期（未过期时不影响AAPS运行，过期后进入LGS模式）

### 新功能

* SMS RESTART命令 @MilosKozak
* 手表配置切换参数 @olorinmaia
* AAPS V2表盘暗色模式 @olorinmaia
* G7数据传输改进 @olorinmaia
* 小部件配置 @MilosKozak
* 单选按钮UI优化 @olorinmaia
* 自动化：通过地图选择位置 @MilosKozak
* 主屏幕显示版本号 @MilosKozak
* 强制使用现有git系统编译（禁用zip下载）
* 主界面显示版本 @MilosKozak
* Tidepool上传优化 @ConstantinMatheis

### 问题修复

* Dash解绑修复 @Andreas
* Garmin修复 @robertbuessow @suside
* 对话框IOB显示修复 @olorinmaia
* 目标拼写与验证改进 @MilosKozak
* 模拟TBR渲染修复 @MilosKozak
* 安全绕过修复 @tdrkDev

## 版本 3.3.1.3

发布日期：2025年1月21日

### 问题修复

* Dash：绑定改为可选（默认关闭）@MilosKozak
* Equil：修复10+U大剂量，报警优化 @EquilHack
* Garmin：手表功能改进 @swissalpine
* 手表功能优化 @olorinmaia
* 通过手表控制闭环状态 @tdrkDev
* 稳定性提升

*  **可能需要重新设置[认证器](#sms-commands-authenticator-setup)。**

## 版本 3.3.1.2

发布日期：2025年1月15日

### 如何升级

* 构建此版本需要[Android Studio "Ladybug Feature Drop"版本](#Building-APK-recommended-specification-of-computer-for-building-apk-file)或更高。 **这与普通的“Ladybug”版本不同。** 如果您已构建过3.3.x版本，需要再次升级Android Studio。

### 问题修复

* Dash：在Android 15+使用绑定
* 恢复Overview的Dexcom按钮
* Equil：允许移除故障泵
* 当DynISF调整因子为零时提示
* NSCv3：解决时间不同步设备的Websocket通信
* SMS命令：修复一次性密码。 **可能需要重新设置[认证器](#sms-commands-authenticator-setup)。 **
* 修复部分偏好设置无法编辑的问题
* 修复虚拟泵的主密码重置
* 修复大设置备份文件的导入

## 版本 3.3.1.0

发布日期：2025年1月6日

### UI变更

* [为AAPSClient和AAPSClient2添加区分颜色](#RemoteControl_aapsclient) @MilosKozak
* 优化用户操作布局与图标

### 其他功能

* 新增自动化触发条件：[步数统计](#screen-heart-rate-steps) @Roman Rihter
* NSCv3全量同步支持（包括TBR等此前未同步的数据）@MilosKozak
* NSClient v3：实现公告功能（_如_从AAPSClient到AAPS）@MilosKozak

### 技术调整与修复

* 修复Insight崩溃 @philoul
* 修复Nightscout中过多deviceStatus条目生成 @MilosKozak
* 修复碳水吸收计算 @MilosKozak
* 修复单选按钮与复选框颜色 @MilosKozak
* 修复DynISF百分比迁移错误 @MilosKozak
* 解决DynISF通知错位问题 @MilosKozak
* 修复表盘显示问题 @philoul

## 版本 3.3.0.0

发布日期：2024年12月29日

### 主要功能

* **[动态ISF](../DailyLifeWithAaps/DynamicISF.md)**不再作为独立插件，现整合至[OpenAPS SMB](#Config-Builder-aps)插件，并调整行为：
  * **配置文件切换**和**配置文件百分比**现已被纳入**动态ISF**的计算中，用于调整动态敏感度的应用强度。
  * 使用过去24小时的平均**ISF**值进行推注向导和**COB**计算， 不再使用**配置文件ISF**（历史数据缺失时除外）
  * 动态ISF文档已重写， 请务必阅读[启用动态ISF的注意事项](#dyn-isf-things-to-consider-when-activating-dynamicisf)。
* 为FreeStyle Libre 2/3用户启用[“始终SMB”和“碳水后SMB”](#Open-APS-features-enable-smb-always)
  * 注：需使用最新版xDrip+或Juggluco
* 新增**自动化**触发条件
* 无人值守设置导出

### 如何升级

* 升级前：
  * **<span style="color:red">要求Android 11及以上系统</span>**， 请先确认手机版本
  * 若使用旧版Combo驱动（依赖ruffy设备），请先迁移至[原生Combo驱动](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
  * 升级后将丢失[主屏幕附加图表](#AapsScreens-section-g-additional-graphs)，建议手动记录当前配置以便恢复
  * [Android 15的蓝牙连接问题](../Getting-Started/Phones.md)（非**AAPS**问题）， 需等待3.3.1.2修复
  * 主屏幕BYODA按钮因Android限制暂时移除， （3.3.1.2恢复）
* 升级步骤：遵循[更新指南](../Maintenance/UpdateToNewVersion.md)
  * 需使用[Android Studio "Ladybug"版本](#Building-APK-recommended-specification-of-computer-for-building-apk-file)或更高， 旧版本需<span style="color:red">配置JVM 21</span> （参见[Android Studio疑难解答 > JVM不兼容](#incompatible-gradle-jvm)）
  * 重要提示：如果不想丢失**AAPS**历史数据，升级时选择“更新”而非“卸载/重装”， 备份当前设置及旧版APK以防万一
* 升级后：
  * 在维护选项卡中设置新的[“AAPS目录”](#preferences-maintenance-logdirectory)

### 详细变更

#### CGM与泵驱动

* 为FreeStyle Libre 2/3用户[启用“始终SMB”和“碳水后SMB”](#Open-APS-features-enable-smb-always) @MilosKozak
* [Medtrum驱动](../CompatiblePumps/MedtrumNano.md)改进 @jbr77rr
  * 通信优化，新增兼容性设置
  * 激活时显示储药量
  * 修复激活流程错误
  * 同步状态反馈优化
* 新增支持泵型：[Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* 新增支持CGM：[Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer 和 [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Insight驱动重写为Kotlin @Philoul
* 移除旧版依赖ruffy的Combo驱动

#### UI变更

* 新安装默认启用[简易模式](#preferences-simple-mode) @MilosKozak
* [快捷向导](#Preferences-quick-wizard)新增选项 @radicalb
  * 使用与计算器相同的推注逻辑， 支持“碳水时间”预推注
* [图表比例菜单](#aaps-screens-main-graph)与[附加图表菜单](#AapsScreens-activate-optional-information)优化 @Philoul
* [配置构建器布局](../SettingUpAaps/ConfigBuilder.md)改进 @MilosKozak
  * 默认折叠区块， 点击箭头展开
* AAPSClient中显示动态敏感度
* 推注向导UI优化 @kenzo44
* 浅色主题下泵选项卡文本显示修复 @jbr77rr

#### 其他功能

* [无人值守设置导出](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* 新增[自动化触发条件](#automations-automation-triggers) @vanelsberg
  * 储药器激活（仅限贴敷泵）
* 新增[自动化触发条件](#automations-automation-triggers) @jbr77rr
  * 管路、胰岛素、电池、传感器、储药器使用时间，泵电池电量
* 允许输入负碳水 @MilosKozak
* 新增[“AAPS目录”](#preferences-maintenance-settings)参数，可自定义存储路径
* 泵暂停时允许[胰岛素记录](#aaps-screens-buttons-insulin) @jbr77rr
* 更新[目标2](#objectives-objective2) @MilosKozak
  * 验证主密码设置
* 测试模式支持随机碳水 @MilosKozak
* 修复TDD计算错误 @MilosKozak
* SMS命令：允许[**禁用**NS触发的配置切换通知短信](#sms-commands-too-many-messages) @MilosKozak

#### Smartwatches

* Wear与表盘功能改进 @Philoul @MilosKozak @olorinmaia
* 自动化操作手表磁贴 @Philoul
* 整合AAPS、AAPSClient、AAPSClient2表盘以监控多患者 @Philoul @MilosKozak
* 额外功能：仅手表显示用户操作 @MilosKozak

#### 技术调整

* [日志路径变更](#Accessing-logfiles-accessing-logfiles)
* 新模块结构 @MilosKozak
* 分离持久层与主代码 @MilosKozak
* 构建文件转用kts格式 @MilosKozak
* 算法转用Kotlin提升性能 @MilosKozak
* 新增大量单元测试 @MilosKozak等
* 更多代码转为Kotlin @MilosKozak
* 新偏好设置管理（XML→Kotlin）@MilosKozak
* 新CI配置，自有服务器运行 @MilosKozak
* 库更新至最新版，toml配置 @MilosKozak
* 迁移至Kotlin 2.0，Java 21 @MilosKozak

(version3200)=
## 版本 3.2.0.0 致敬 @Philoul

发布日期：2023年10月23日

### Important hints

- 需要NS 15
- 使用NS v3插件时，通过NS界面（+按钮）或其他v1 API应用输入的治疗不会同步至AAPS。 这将在NS的未来版本中得到修复。 在NS全面转用v3前，请确保AAPS与AAPSClient使用相同客户端（v1或v3） 同样适用于AAPS和AAPSClient本身。
- v3插件的Websocket工作方式类似v1。 未启用WebSocket时，AAPS会定期从NS调度下载数据，这应该会降低功耗，因为NS不需要保持永久连接。 反之，这会导致数据交换出现延迟。 使用前请阅读[开发团队重要说明](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)！
- 使用xDrip作为CGM源需重新选择
- Tidepool可用作NS替代完成首目标
- 发送数据至xDrip+需配置xDrip同步插件。 为了从AAPS接收BGs，必须选择“xDrip+ Sync Follower”作为源
- 切换至ComboV2驱动需卸载Ruffy并重新配对泵
- 启用DynISF需完成目标11（所有前置目标需完成）


### 变更内容

- EOPatch2/GlucomenDay泵驱动 @jungsomyeonggithub @MilosKozak
- ComboV2驱动（无需Ruffy）@dv1
- Medtrum Nano驱动 @jbr7rr
- 韩国版DanaI支持 @MilosKozak
- Glunovo CGM支持 @christinadamianou
- G7支持 @MilosKozak @rICTx-T1D @khskekec
- NSClient v3插件 @MilosKozak
- Tidepool支持 @MilosKozak
- 平滑插件 @MilosKozak, @justmara, 指数平滑@nichi (Tsunami)，平均平滑@jbr7rr
- DynamicISF插件 @Chris Wilson @tim2000s
- Garmin表盘与心率支持 @buessow
- 新徽标 @thiagomsoares
- 新表盘 @Philoul
- 修复3.1版本大量问题
- 更多位置支持添加备注 @Sergey Zorchenko
- UI修复 @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- 新增SMS命令LOOP LGS/CLOSED @pzadroga
- Wear翻译 @Andries-Smit
- xDrip通信模块分离 @MilosKozak
- 内部调整：库更新，Rx3迁移，模块结构调整 @MilosKozak
- Diaconn驱动修复 @miyeongkim
- 数据库维护选项扩展 @MilosKozak
- AAPSClient提供信息，如果主手机已接通电源 @MilosKozak
- 推注向导调整： CGM不可用时忽略百分比（默认100%）
- 迁移至kts构建系统 @MilosKozak
- CI集成改进 @MilosKozak @buessow
- 测试清理 @ryanhaining @MilosKozak
- 新增11万行代码，修改24万行，涉及6884个文件

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)=
### 关于AAPS使用Nightscout v3与v1接口的重要注意事项

v1是用于在NS网站和NS服务器之间交换数据的旧协议， 它有许多限制
- v1仅发送2天的数据
- 每次重新连接时都会发送所有2天的数据
- 必须使用WebSocket = 需保持持久连接，导致更高的电池消耗。
- 当与Nightscout频繁断连时，连接将暂停15分钟以防止数据用量过高。

v3为新协议， 更加安全高效
- 在使用令牌时，您可以更好地定义访问权限
- 协议在双方（AAPS和NS）都更高效
- It can read up to 3 months of data from NS
- you can choose to use or to not use websockets on every device (using means faster updates, not using means lower power compsumption, but slower updates ie. minutes)
- NSClient is not paused on disconnections

LIMITATIONS
- NS 15 must be used with AAPS 3.2
- v3 doesn't see updates done by v1 protocol (probably it will be resolved in some future version of NS)
- in opposite because of old uneffective method of tracking changes v1 see changes done by v3
- remember NS still uses v1 internally so far thus is not possible to enter data through NS web UI if you are using v3. You must use AAPSClient on SMS if you want enter data remotely

RECOMMENDED SETTING
- because of all above you should choose only one method and use it on all devices (remember all other uploaders at time of writing this are using v1). If you decide to go to v3, select v3 in AAPS and all AAPSClients
- v3 is preferred because of efficiency
- using websockets or not using with v3 depends on your preference
- it HIGHLY recommended to let AAPS gather all data and then upload it to NS as a single uploader. All other devices/applications should only read from NS. By doing it you'll prevent conflicts and sync errors. This is valid for getting BG data to NS using Dexcom Share connector etc. too

## Version 3.1.0

Release date: 19-07-2022

(Releasenotes-important-hints-3-1-0)=
### Important hints

- after update uninstall Wear app and install new version
- Omnipod users: update on pod change !!!

### 变更内容

- fixed issues from 3.0 version
- fix application freezing @MilosKozak
- fixed DASH driver @avereha
- fixed Dana drivers @MilosKozak
- huge UI improvement, cleanup and unification, migration to material design, styles, white theme, new icons. @Andries-Smit @MilosKozak @osodebailar @Philoul
- widget @MilosKozak
- Aidex CGM support @andyrozman @markvader (Pumpcontrol only)
- Watch [Wear OS tiles](#WearOsSmartwatch-wear-os-tiles), translations @Andries-Smit
- Wear code refactored. Not backward compatible anymore @MilosKozak
- a11y improvements @Andries-Smit
- new protection option PIN @Andries-Smit
- allow graph scale from menu @MilosKozak
- more statistics available @MilosKozak
- MDI plugin removed in favor of VirtualPump
- new automation action: StopProcessing (following rules)

## Version 3.0.0

Release date: 31-01-2022

(Releasenotes-important-hints-3-0-0)=
### Important hints

- **Minimum Android version is 9.0 now.**
- **Data is not migrated to new database.** Do not complain, it's so huge change so it's simply not possible. Thus after update IOB, COB, treatments etc. will be cleared. You have to create new [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) and start with zero IOB and COB. Plan the update carefully!!! Best in situation without active insulin and carbs
- Use the same version of AAPS and NSClient

**Make sure to check and adjust settings after updating to 3.0 as described** [here](../Maintenance/Update3_0.md).

### Preparation steps

**At least two days before update:**

- disable Dexcom bridge in Nightscout
- if you are using G5/G6 and xDrip as a collector, you have to update xDrip to a nightly version newer than 14th January 2022
- if you are using G5/G6 switching to BYODA as collector is recommended to take advantage of back-smoothing (you can still use xDrip for other purposes, xDrip can receive data from BYODA)

### 变更内容

- 100k lines changed, 105k new lines of code

- [Omnipod DASH support](../CompatiblePumps/OmnipodDASH.md) @AdrianLxM @avereha @bartsopers @vanelsberg

- [Dana-i support](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

- [DiaconnG8 support](../CompatiblePumps/DiaconnG8.md)

- Glunovo support

- Internal database upgraded to Room @MilosKozak @Tebbe @AdrianLxm @Philoul @andyrozman

- Lot of code rewritten to Kotlin @MilosKozak

- New internal interface for pump drivers

- NSClient rewritten for better synchronization and more detailed customization @MilosKozak

  - Record deletion from NS is not allowed (only invalidation through NSClient)
  - Record modification from NS is not allowed
  - Sync setting available without engineering mode (for parents)
  - Ability to resync data

- Profile switch behavior change. Now is distinguished between Profile Switch *(something that user wants)* and Profile change *(when change is executed by pump)* @MilosKozak @Tebbe

- You can start activity temporary target during creation of profile switch @MilosKozak

- NSProfile is gone, just local profile can be used. Local profile can be [synced to NS](#Update3_0-nightscout-profile-cannot-be-pushed). @MilosKozak.

- Forgotten [master password reset procedure](#Update3_0-reset-master-password) @MilosKozak

- User actions tracing @Philoul

- New automation TempTargetValue trigger @Philoul

- New automation Careportal action @Philoul

- Add Bolus reminder in Carbs Dialog @Philoul

- Bolus Wizard improvement

- UI improvements @MilosKozak

- New user buttons for automations @MilosKozak

- New automation layout @MilosKozak

- History browser updated and fixed @MilosKozak

- Objective9 removed @MilosKozak

- Fixed bug associated to unstable CGM data @MilosKozak

- DanaR and DanaRS communication improvement @MilosKozak

- CircleCI integration @MilosKozak

- Files location change:

  - /AAPS/extra (engineering mode)
  - /AAPS/logs /AAPS/exports
  - /AAPS/preferences

## Version 2.8.2

Release date: 23-01-2021

- Please see also [important hints for version 2.8.1.1](#version-2811) below.

### 变更内容

- stability improvements
- more tweaking for Android 8+
- improved icons
- watch improvements
- NSClient fixes
- Bolus advisor now works with Pumpcontrol and NSClient

## Version 2.8.1.1

Release date: 12-01-2021

(important-hints-2-8-1-1)=
### Important hints

- Option **NS_UPLOAD_ONLY** has been forced ON for all 2.8.1 users.
- If you use NSClient to enter TT, carbs or profile switches you must turn it off in AAPS but **only in case your synchronization is working well** (ie. you don't see unwanted data changes like self modification of TT, TBR etc).
- ATTENTION: DO NOT do this if you have any other app handle treatments ( like xDrip broadcast/upload/sync...).
- NS_UPLOAD_ONLY can only be turned off if engineering mode is enabled.

### Major changes

- RileyLink, Omnipod and MDT pump improvements and fixes
- forced NS_UPLOAD_ONLY
- fix for SMB & Dexcom app
- watchface fixes
- crash reporting improved
- gradle reverted to allow direct watchface installation
- automation fixes
- RS driver improvement
- various crashes fixed
- UI fixes and improvements
- new translations

(Releasenotes-version-2-8-0)=
## Version 2.8.0

Release date: 01-01-2021

### Important hints

- **Minimum Android version is 8.0 now.** For older Android versions you can still use 2.6.1.4 from old repo.
- [Objectives have changed.](#objectives-objective3) **Finish not completed objectives before update.**
- Repository location still on <https://github.com/nightscout/AndroidAPS> . If you are not familiar with git the easiest way for update is remove directory with AAPS and do a [new clone](../SettingUpAaps/BuildingAaps.md).
- Please use [Android Studio 4.1.1](https://developer.android.com/studio/) or newer to build the apk.

### Major new features

- [Omnipod Eros support](../CompatiblePumps/OmnipodEros.md) @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda and special thanks to @ps2 @itsmojo, everybody else involved in the Loop driver for Omnipod and @jlucasvt from GetRileyLink.org
- [bolus advisor](#Preferences-quick-wizard) & [eating reminder](#AapsScreens-section-j) @MilosKozak
- New watchface @rICTx-T1D
- Dana RS connection improvements @MilosKozak
- Removed "Unchanged CGM values" behavior in SMB for Dexcom native app
- New [Low Resolution Skin](#Preferences-skin)
- New ["Pregnant" patient type](#Open-APS-features-overview-of-hard-coded-limits) @Brian Quinion
- New NSClient tablet layout @MilosKozak
- NSClient transfer insulin, sensitivity and display settings directly from main AAPS @MilosKozak
- [Preferences filter](../SettingUpAaps/Preferences.md) @Brian Quinion
- New pump icons @Rig22 @@teleriddler @osodebailar
- New [insulin type Lyumjev](#Config-Builder-lyumjev)
- SetupWizard improvements @MilosKozak
- Security improvements @dlvoy
- Various improvements and fixes @AdrianLxM @Philoul @swissalpine  @MilosKozak @Brian Quinion

(Releasenotes-version-2-7-0)=
## Version 2.7.0

Release date: 24-09-2020

**Make sure to check and adjust settings after updating to 2.7 as described** [here](../Maintenance/Update2_7.md).

You need at least start [objective 11 (in later versions objective 10!)](#objectives-objective10) in order to continue using [Automation feature](../DailyLifeWithAaps/Automations.md) (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in [objective 3](#objectives-objective3) yet, you will have to complete the exam before you can start objective 11. This will not effect other objectives you have already finished. You will keep all finished objectives!

### Major new features

- internal use of dependency injection, updates libraries, code rewritten to kotlin @MilosKozak @AdrianLxM
- using modules for Dana pumps @MilosKozak
- [new layout, layout selection](../DailyLifeWithAaps/AapsScreens.md) @MilosKozak
- new [status lights layout](#Preferences-status-lights) @MilosKozak
- [multiple graphs support](#AapsScreens-activate-optional-information) @MilosKozak
- [Profile helper](../SettingUpAaps/YourAapsProfile.md) @MilosKozak
- visualization of [dynamic target adjustment](#AapsScreens-visualization-of-dynamic-target-adjustment) @Tornado-Tim
- new [preferences layout](../SettingUpAaps/Preferences.md) @MilosKozak
- SMB algorithm update @Tornado-Tim
- [Low glucose suspend mode](#Preferences-aps-mode) @Tornado-Tim
- [carbs required notifications](#key-aaps-features-minimal-carbs-required-for-suggestion) @twain47 @Tornado-Tim
- removed Careportal (moved to Actions) @MilosKozak
- [new encrypted backup format](ExportImportSettings.md) @dlvoy
- [new SMS TOTP authentication](../RemoteFeatures/SMSCommands.md) @dlvoy
- [new SMS PUMP CONNECT, DISCONNECT](#SMSCommands-commands) commands @Lexsus
- better support for tiny basals on Dana pumps @Mackwe
- small Insight fixes @TebbeUbben @MilosKozak
- ["Default language" option](#Preferences-general) @MilosKozak
- vector icons @Philoul
- [set neutral temps for MDT pump](#MedtronicPump-configuration-of-the-pump) @Tornado-Tim
- History browser improvements @MilosKozak
- removed OpenAPS MA algorithm @Tornado-Tim
- removed Oref0 sensitivity @Tornado-Tim
- [Biometric or password protection](#Preferences-protection) for settings, bolus @MilosKozak
- [new automation trigger](../DailyLifeWithAaps/Automations.md) @PoweRGbg
- [Open Humans uploader](../SupportingAaps/OpenHumans.md) @TebbeUbben @AdrianLxM
- New documentation @Achim

(Releasenotes-version-2-6-1-4)=
## Version 2.6.1.4

Release date: 04-05-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Major new features

- Insight: Disable vibration on bolus for firmware version 3 - second attempt
- Otherwise is equal to 2.6.1.3. Update is optional.

## Version 2.6.1.3

Release date: 03-05-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Major new features

- Insight: Disable vibration on bolus for firmware version 3
- Otherwise is equal to 2.6.1.2. Update is optional.

## Version 2.6.1.2

Release date: 19-04-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Major new features

- Fix crashing in Insight service
- Otherwise is equal to 2.6.1.1. If you are not affected by this bug you don't need to upgrade.

## Version 2.6.1.1

Release date: 06-04-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Major new features

- Resolves SMS CARBS command issue while using Combo pump
- Otherwise is equal to 2.6.1. If you are not affected by this bug you don't need to upgrade.

## Version 2.6.1

Release date: 21-03-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Major new features

- Allow to enter only `https://` in NSClient settings
- Fixed [BGI](../UsefulLinks/Glossary.md) displaying bug on watches
- Fixed small UI bugs
- Fixed Insight crashes
- Fixed future carbs with Combo pump
- Fixed LocalProfile -> NS sync
- Insight alerts improvements
- Improved detection of boluses from pump history
- Fixed NSClient connection settings (wifi, charging)
- Fixed sending of calibrations to xDrip

(Releasenotes-version-2-6-0)=
## Version 2.6.0

Release date: 29-02-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Major new features

- Small design changes (startpage...)

- Careportal tab / menu removed

- New Local Profile plugin

  - Local profile can hold more than 1 profile
  - Profiles can be cloned and edited
  - Ability of upload profiles to NS
  - Old profile switches can be cloned to new profile in LocalProfile (timeshift and percentage is applied)
  - Vertical NumberPicker for targets

- SimpleProfile is removed

- [扩展大剂量](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)功能 - 闭环将被禁用

- MDT plugin: Fixed bug with duplicated entries

- Units are not specified in profile but it's global setting

- Added new settings to startup wizard

- Different UI and internal improvements

- [穿戴设备的小部件](../WearOS/WearOsSmartwatch.md)

- New [SMS commands](../RemoteFeatures/SMSCommands.md) BOLUS-MEAL, SMS, CARBS, TARGET, HELP

- Fixed language support

- Objectives: [Allow to go back](#CompletingTheObjectives-go-back-in-objectives), Time fetching dialog

- Automation: [allow sorting](#Automations-the-order-of-the-automations-in-the-list-matters)

- Automation: fixed bug when automation was running with disabled loop

- New status line for Combo

- GlucoseStatus improvement

- Fixed TempTarget NS sync

- New statistics activity

- Allow Extended bolus in open loop mode

- Android 10 alarm support

- Tons on new translations

## Version 2.5.1

Release date: 31-10-2019

Please note the [important notes](#Releasenotes-version-2-5-0) and [limitations](#Releasenotes-is-this-update-for-me-currently-is-not-supported) listed for [version 2.5.0](#Releasenotes-version-2-5-0). \* Fixed a bug in the network state receiver that lead to crashes with many (not critical but would waste a lot of energy re-calculating things). \* New versioning that will allow to do minor updates without triggering the update-notification.

(Releasenotes-version-2-5-0)=
## Version 2.5.0

Release date: 26-10-2019

(Releasenotes-important-notes-2-5-0)=

### Important notes

- Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to [build the apk](../SettingUpAaps/BuildingAaps.md) or [update](UpdateToNewVersion).
- If you are using xDrip [identify receiver](#xdrip-identify-receiver) must be set.
- If you are using Dexcom G6 with the patched Dexcom app you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).
- Glimp is supported from version 4.15.57 and newer.

(Releasenotes-is-this-update-for-me-currently-is-not-supported)=
### Is this update for me? Currently is NOT supported

- Android 5 and lower
- Poctech
- 600SeriesUploader
- Patched Dexcom from 2.3 directory

### Major new features

- Internal change of targetSDK to 28 (Android 9), jetpack support
- RxJava2, Okhttp3, Retrofit support
- Old [Medtronic pumps](../CompatiblePumps/MedtronicPump.md) support (RileyLink need)
- New [Automation plugin](../DailyLifeWithAaps/Automations.md)
- Allow to [bolus only part](#Preferences-advanced-settings-overview) from bolus wizard calculation
- Rendering insulin activity
- Adjusting IOB predictions by autosens result
- New support for patched Dexcom apks ([2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4))
- Signature verifier
- Allow to bypass objectives for OpenAPS users
- New [objectives](../SettingUpAaps/CompletingTheObjectives.md) - exam, application handling (If you started at least objective "Starting on an open loop" in previous versions exam is optional.)
- Fixed bug in Dana\* drivers where false time difference was reported
- Fixed bug in [SMS communicator](../RemoteFeatures/SMSCommands.md)

## Version 2.3

Release date: 25-04-2019

### Major new features

- Important safety fix for Insight (really important if you use Insight!)
- Fix History-Browser
- Fix delta calculations
- Language updates
- Check for GIT and warn on gradle upgrade
- More automatic testing
- Fixing potential crash in AlarmSound Service (thanks @lee-b !)
- Fix broadcast of BG data (works independently of SMS permission now!)
- New Version-Checker

## Version 2.2.2

Release date: 07-04-2019

### Major new features

- Autosens fix: deactivate TT raises/lowers target
- New translations
- Insight driver fixes
- SMS plugin fix

## Version 2.2

Release date: 29-03-2019

### Major new features

- [DST fix](#time-adjustment-daylight-savings-time-dst)
- Wear Update
- [SMS plugin](../RemoteFeatures/SMSCommands.md) update
- Go back in objectives.
- Stop loop if phone disk is full

## Version 2.1

Release date: 03-03-2019

### Major new features

- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) support (by Tebbe Ubben and JamOrHam)
- Status lights on main screen (Nico Schmitz)
- Daylight saving time helper (Roumen Georgiev)
- Fix processing profile names coming from NS (Johannes Mockenhaupt)
- Fix UI blocking (Johannes Mockenhaupt)
- Support for updated G5 app (Tebbe Ubben and Milos Kozak)
- G6, Poctech, Tomato, Eversense BG source support (Tebbe Ubben and Milos Kozak)
- Fixed disabling SMB from preferences (Johannes Mockenhaupt)

### Misc

- If you are using non default `smbmaxminutes` value you have to setup this value again

## Version 2.0

Release date: 03-11-2018

### Major new features

- oref1/SMB support ([oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achieve and how to use it so it can operate smoothly.
- Accu-Chek Combo pump support
- Setup wizard: guides you through the process of setting up AAPS

(Releasenotes-settings-to-adjust-when-switching-from-ama-to-smb)=
### Settings to adjust when switching from AMA to SMB

- Objective 10 must be started for SMBs to be enabled (SMB tab generally shows what restrictions apply)

- maxIOB now includes \_all\_ IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U.

- min_5m_carbimpact default has changed from 3 to 8 going from AMA to SMB. If you are upgrading from AMA to SMB, you have to change it manually

- Note when building AAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! If your build fails with an error regarding "on demand configuration" you can do the following:

  - Open the Preferences window by clicking File > Settings (on Mac, Android Studio > Preferences).
  - In the left pane, click Build, Execution, Deployment > Compiler.
  - Uncheck the Configure on demand checkbox.
  - Click Apply or OK.

(Releasenotes-overview-tab)=
### Overview tab

- Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). TTs use defaults set in preferences. The new Hypo TT option is a high temp TT to prevent the loop from too aggressively overcorrection rescue carbs.
- Treatment buttons: old treatment button still available, but hidden by default. Visibility of buttons can now be configured. New insulin button, new carbs button (including [eCarbs/extended carbs](../DailyLifeWithAaps/ExtendedCarbs.md))
- [Colored prediction lines](#aaps-screens-prediction-lines)
- Option to show a notes field in insulin/carbs/calculator/prime+fill dialogs, which are uploaded to NS
- Updated prime/fill dialog allows priming and creating careportal entries for site change and cartridge change

### Watch

- Separate build variant dropped, included in regular full build now. To use bolus controls from watch, enable this setting on the phone
- Wizard now only asks for carbs (and percentage if enabled in watch settings). Which parameters are included in the calculation can be configured in the settings on the phone
- confirmations and info dialogs now work on wear 2.0 as well
- Added eCarbs menu entry

### New plugins

- PocTech app as BG source
- Dexcom patched app as BG source
- oref1 sensitivity plugin

### Misc

- App now uses drawer to show all plugins; plugins selected as visible in config builder are shown as tabs on top (favourites)
- Overhaul for config builder and objectives tabs, adding descriptions
- New app icon
- Lots of improvements and bugfixes
- Nightscout-independent alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see *Local alerts* in settings)
- Option to keep screen on
- Option to show notification as Android notification
- Advanced filtering (allowing to always enable SMB and 6h after meals) supported with patched Dexcom app or xDrip with G5 native mode as BG source.
