
# 发布说明

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Please follow the instructions in the [update manual](UpdateToNewVersion.md) to update to a new version. 故障排除部分也涵盖了在**AAPS**更新手册页面上更新时遇到的最常见问题。

```{admonition} Upgrading from AAPS v3?
:class: tip
See [What changed in AAPS v4](V4Changes.md) for the notable behavioral changes — features that have moved, been renamed, or been removed.
```

You will receive a notification like this when a new update is available:

![Update info](../images/AAPS_LoopDisable90days.png)

如果在到期日之前未更新，**AAPS**将切换至开环模式。

See [End of life](EndOfLife.md) for AAPS version end dates.

**Do not ignore the notification.** New versions of **AAPS** provide important safety fixes. Therefore, every **AAPS** user must update to the latest version as soon as possible. This is an effort to try to improve the safety for each **AAPS** user and the DIY community. 感谢您的理解。

(maintenance-android-version-aaps-version)=

## Android版本与AAPS版本

If your smartphone uses an Android Version older than Android 12 you will not be able to use AAPS v3.4 and up as it requires at least Android 12.

为允许旧版Android用户继续使用旧版AAPS，我们推送了仅修改版本验证的新版本，不包含其他改进。不包含其他改进。

Find your Android version in the table below and use the matching **AAPS** version. The code is downloaded from <https://github.com/nightscout/AndroidAPS> using the branch shown.

| Your Android version | AAPS version to use | Branch to download                                               |
| -------------------- | ------------------- | ---------------------------------------------------------------- |
| Android 12 and up    | Latest version      | [master](https://github.com/nightscout/AndroidAPS) (default)     |
| Android 11           | **3.3.2.1**         | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10        | **3.2.0.4**         | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8            | **2.8.2.1**         | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7            | **2.6.2**           | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## WearOS版本

- AAPS requires WearOS 3.0, 3.2 or 3.5 (Android 11, API level 30) or newer. WearOS 2 watches are not supported.

```{tip}
WearOS 5（API级别34，基于Android 14）存在[限制](#BuildingAapsWearOs-WearOS5)。
```

(latestrelease)=

(version400)=

## Version 4.0.0

Release date: 31-10-2026

### New features
- New user interface: phone app rebuilt in Jetpack Compose @MilosKozak
- [Global search](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Kotlin Multiplatform migration, client for Windows, Mac, Linux desktop and iOS @MilosKozak
- [Scenes](../DailyLifeWithAaps/Scenes.md): save a set of actions and run them together @MilosKozak
- [Master ↔ Client control](../RemoteFeatures/ClientMasterControl.md): send commands from a client phone to the master @MilosKozak
  - [Client roles](#client-master-control-roles): Read-only, Meals, Caregiver or Admin for each client @MilosKozak
  - [Hardened mode](#client-master-control-hardened-mode): with client control on, the master takes changes only from paired clients @MilosKozak
  - Pairing with a QR code that also sets up Nightscout on the client, or with a PIN; the pairing secret is replaced right after pairing @MilosKozak
  - [Own Nightscout token](#client-master-control-own-token) for each client, with only the rights a client needs @MilosKozak
- [Insulin concentration](../AdvancedOptions/InsulinConcentration.md) support (U200, U500) across pumps, wizard and profiles @Philoul @MilosKozak
- Insulin management: insulin catalogue, nicknames, selection in profile and wizard @Philoul
- Calibration plugin @MilosKozak
- [Smoothing](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalman Filter (UKF) @piecycle
- [Site rotation](#Aapsscreens-site-rotation): track and rotate infusion sites @Philoul @MilosKozak
- [Autotune](../AdvancedOptions/Autotune.md) rework @Philoul
- New [widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Accessibility: the phone app works with a screen reader - named controls, spoken status, graph descriptions and headings to skim @MilosKozak
- [Settings import](../Maintenance/ExportImportSettings.md): can keep the pump settings @MilosKozak
- Persistent notification uses Android live updates, with Samsung Now bar support and the delta @premnirmal
- BG graph: [press and hold](#aaps-screens-graph-press-and-hold) to see the values at a reading, on every graph of the overview @t1dude @olorinmaia
- Performance improvements @MilosKozak
- Automatic e-carbs in Bolus wizard @MilosKozak

### New devices
- **CareLevo**: new [pump driver](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: support @MilosKozak
- **Instara**: new CGM source @leohunt

### Pump Driver Improvements
- Pump overview screens rebuilt for Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn and Equil @MilosKozak
- **Omnipod Dash**: PDM style Ref codes and readable fault descriptions, drift compensation always on, better bolus type reporting @nl-ruud
- **Omnipod**: hard-end date for Dash & Eros @mcnelson
- **DanaR, RS**: pump emulator for testing @MilosKozak
- **Equil**: pump emulator for testing @MilosKozak
- Many pump and loop fixes @MilosKozak and others

### Wear OS
- [Watch app](../WearOS/WearOsSmartwatch.md) rebuilt in Compose, new tiles and complications, automatic watch face install (Watch Face Push) on Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface available for WearOS 6.0 (GW7, GW8, GW9...) with a WFF dedicated watchface @Philoul @olorinmaia
- CustomWatchface can now include 5 Complication slots you can customize (new feature only available for older watches) @Philoul
- New [WFF watchface based on AAPS complications](#wearos-complications-watchface-setup) @olorinmaia
- Corrections in Bolus wizard and Quick wizard result @olorinmaia
- New BG graph and Running mode activity in main menu @olorinmaia
- Bolus wizard: [meal type](#WearOsSmartwatch-wizard-meal-type) page that splits the carbs like the phone wizard, and [carb time](#WearOsSmartwatch-wizard-carb-time) with the *time to eat* reminder on the watch @olorinmaia
- [Phone alarms on the watch](#WearOsSmartwatch-phone-alarms): the watch shows the alarm and offers Silence and Mute 5 min @olorinmaia

### Build
- CI workflows for tag/branch builds, JDK version mapping @Angus-repo

### Contributors
@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Full changelog: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

(version3426)=

## Version 3.4.2.6

- Equil: improve stability @MilosKozak

(version3425)=

## Version 3.4.2.5

- Equil fix race condition @MilosKozak

(version3424)=

## Version 3.4.2.4

- Equil fixes @MilosKozak
- NS profile sync fix @MilosKozak

(version3423)=

## Version 3.4.2.3
- Dash: Drift resolution @nl-ruud
- NSClientV3: Fix gap after reconnection @MilosKozak
- Automation: Fix deserialization @MilosKozak
- Equil: Fix battery report @MilosKozak
- Cleanup workflow @vanelsberg
- Equil: improve error recovery @MilosKozak
- DanaRS: fix domestic pump communication @MilosKozak
- Insight: Fix TBR sync @MilosKozak
- Dash: Fix activation bug @nl-ruud

(version3422)=

## Version 3.4.2.2

- Fixing issues with Equil and Medtronic
- Improve safety of Medtrum

(version3421)=

## Version 3.4.2.1

- Equil: fix Pairing and progress dialog @MilosKozak

(version3420)=

## Version 3.4.2.0

Release date: 04-02-2026

- Equil: Fix resistance for different models @hhfcvmars
- Tidepool: Fix session @MilosKozak
- Medtrum: Fix activation path by preventing double fill @MilosKozak
- COB: Fix COB calculation (covers dangerous edge case) @MilosKozak

(version3410)=

## Version 3.4.1.0

Release date: 03-08-2026

### Core
- Fix DST handling @MilosKozak
- Improve and unify normal target identification (mgdl > 99, mmol > 5.5) @MilosKozak
- SMS: protect RESTART by PIN @MilosKozak
- Maintenance: warn if wrong directory selected @MilosKozak

### Pump Driver Improvements
- **Omnipod Dash**: refactor BLE driver code to omnipod/common module @jwoglom
- **Omnipod Dash**: try to fix connection state @MilosKozak
- **Omnipod**: validate profile before pod activation to prevent wasting pods (#4534) @brianV
- **Medtronic**: fix same encoding type displayed in settings dialog @mifi100
- **Medtronic**: prepare pump common classes (Tandem preparation) @andy-rozman
- **RileyLink**: encoding fix (#4519) @mifi100
- **Equil**: expand insulin pump compatibility by serial number prefix (#4510) @hhfcvmars
- **Equil**: add logging @MilosKozak
- **Diaconn G8**: fix log sync bug and add firmware 3.58+ support @miyeongkim
- **Diaconn**: fix TBR duration unit conversion @miyeongkim
- **Diaconn**: use commandQueue.loadEvents() for history sync @miyeongkim
- Allow insulin delivery while loop is suspended but pump is available @cschuijt

### Cloud / Backup
- Add backup to Google Drive @Angus-repo
- Notify UI on cloud storage error state change @Angus-repo
- Allow both local and cloud storage at the same time @Angus-repo

### Tidepool
- Improve Tidepool OAuth2 migration @MilosKozak
- Fix indefinite Tidepool BLOCKED state, fix rejecting empty SSIDs @michaeln-synapse

### NSClient
- NSCv3: improve reconnection @MilosKozak

### Wear OS
- Display New IOB in Wizard Result if IOB is used in calculations @olorinmaia
- Fix Wear BolusProgress with Total Amount @Philoul

### UI
- Improve ic_none icon for Site Rotation @Philoul
- Fix site rotation manage pump setting not being used @samfundev

### Contributors
@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

(version3400)=

## Version 3.4.0.0

Release date: 31-12-2025

### 升级前：
* This version requires Google Android 12.0 or above. 请先确认手机版本
* Update to latest Android Studio or better setup using browser build.

### New features
* Running mode @MilosKozak
  * Show [loop status history](#AapsScreens-running-mode) in treatment tabs
  * Show and allow changing [loop status from AAPSClient](#RemoteControl_aapsclient).<br>NB : needs the setting [NSClient > Synchronization > Receive Running mode events](#Preferences-nsclient-synchronization)
* [New CGMs](../Getting-Started/CompatiblesCgms.md) : Glunovo, Intelligo, Sinocare
* [Site rotation](#Aapsscreens-site-rotation) support @Philoul
* New [automation action](#automations-automation-action) : enable or disable SMBs @MilosKozak
* Syai CGM is [trusted source](#GettingStarted-TrustedBGSource) and supports advanced filtering @MilosKozak

### Wear OS Improvements
* dramatically reduced battery usage @MilosKozak
* UI improvements and fixes @olorinmaia
* almost complete rewritten code to match current level of libs (WearOS 2 previously) @MilosKozak
* 2 new complications for extended data @Philoul
* Migrated to modern complication provider with DataStore @MilosKozak

### Memory Leak Fixes
* Fixed memory leaks in code @MilosKozak
* Added LeakCanary memory leak reporting to Firebase Crashlytics @MilosKozak

### Pump Driver Improvements
* **DanaI**: fixed disconnection issues @MilosKozak
* **RileyLink**: Speedup communication by minimizing delays @mifi100
* **Medtrum**: Added patch activation time and age display @vanelsberg, password uppercase fix @MilosKozak
* **Combo**: Fixed Test race conditions @MilosKozak @dv1
* **Equil**: Optimized connectivity, reduced battery usage @MilosKozak

### Nightscout Sync
* Improved deduplication on NS failure @MilosKozak

### UI/UX Improvements
* various improvements @MilosKozak @Philoul @olorinmaia

### 自动操作
* New SMB control action - enable/disable SMB via automation @MilosKozak

### Testing
* Added comprehensive unit tests for Equil, Eopatch, Dana, and Medtronic pumps @MilosKozak
* Improved test stability and coverage across multiple modules @MilosKozak

### Tidepool
* Tidepool OAUTH2 (Support for new Tidepool authentication) @MilosKozak

(version3321)=

## Version 3.3.2.1

Release date: 13-08-2025

- Fixed Omnipod Bluetooth connection on Android 16
- CI process (Browser build)
- Fix mmol-mgdl conversion
- Fix wrong time selection in dialogs in some timezones
- Fix reading keys in simple mode
- Fix missed predictions on wear
- Improved ConfigBuilder
- Improved NSCv3 full sync

(version3300)=

## 版本 3.3.2.0

发布日期：2025年3月27日

### 如何升级

* 需使用[Android Studio "Meerkat"版本](#Building-APK-recommended-specification-of-computer-for-building-apk-file)或更高。若已构建过3.3.x版本，需升级Android Studio。

(version-enforcement)=

### Starting this version, notification and version enforcement has been simplified and softened and works following way:
*  设备离线时（无网络连接）不会过期，即取消60天和90天的宽限期。
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
* Compilation with existing git system is enforced (no zip downloads)
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
* Equil: fixed bolus 10+U, alarm improvements @EquilHack
* Garmin：手表功能改进 @swissalpine
* 手表功能优化 @olorinmaia
* 通过手表控制闭环状态 @tdrkDev
* 稳定性提升

*  **可能需要重新设置[认证器](#sms-commands-authenticator-setup)。**

## 版本 3.3.1.2

发布日期：2025年1月15日

### 如何升级

* 构建此版本需要[Android Studio "Ladybug Feature Drop"版本](#Building-APK-recommended-specification-of-computer-for-building-apk-file)或更高。**这与普通的“Ladybug”版本不同。** 如果您已构建过3.3.x版本，需要再次升级Android Studio。

### 问题修复

* Dash：在Android 15+使用绑定
* 恢复Overview的Dexcom按钮
* Equil：允许移除故障泵
* 当DynISF调整因子为零时提示
* NSCv3：解决时间不同步设备的Websocket通信
* SMS命令：修复一次性密码。**可能需要重新设置[认证器](#sms-commands-authenticator-setup)。 **
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

* **[Dynamic ISF](../DailyLifeWithAaps/DynamicISF.md)** feature is no more a dedicated plugin, but is now included as an option of [OpenAPS SMB](#Config-Builder-aps) plugin, along with some changes in its behavior:
  * **配置文件切换**和**配置文件百分比**现已被纳入**动态ISF**的计算中，用于调整动态敏感度的应用强度。
  * 使用过去24小时的平均**ISF**值进行推注向导和**COB**计算，不再使用**配置文件ISF**（历史数据缺失时除外）
  * 动态ISF文档已重写，请务必阅读[启用动态ISF的注意事项](#dyn-isf-things-to-consider-when-activating-dynamicisf)。
* 为FreeStyle Libre 2/3用户启用[“始终SMB”和“碳水后SMB”](#Open-APS-features-enable-smb-always)
  * 注：需使用最新版xDrip+或Juggluco
* 新增**自动化**触发条件
* 无人值守设置导出

### 如何升级

* 升级前：
  * **<span style="color:red">要求Android 11及以上系统</span>**，请先确认手机版本
  * 若使用旧版Combo驱动（依赖ruffy设备），请先迁移至[原生Combo驱动](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
  * 升级后将丢失[主屏幕附加图表](#AapsScreens-section-g-additional-graphs)，建议手动记录当前配置以便恢复
  * [Android 15的蓝牙连接问题](../Getting-Started/Phones.md)（非**AAPS**问题），需等待3.3.1.2修复
  * 主屏幕BYODA按钮因Android限制暂时移除， （3.3.1.2恢复）
* 升级步骤：遵循[更新指南](../Maintenance/UpdateToNewVersion.md)
  * 需使用[Android Studio "Ladybug"版本](#Building-APK-recommended-specification-of-computer-for-building-apk-file)或更高，旧版本需<span style="color:red">配置JVM 21</span> （参见[Android Studio疑难解答 > JVM不兼容](#incompatible-gradle-jvm)）
  * 重要提示：如果不想丢失**AAPS**历史数据，升级时选择“更新”而非“卸载/重装”，备份当前设置及旧版APK以防万一
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
  * 使用与计算器相同的推注逻辑，支持“碳水时间”预推注
* [图表比例菜单](#aaps-screens-main-graph)与[附加图表菜单](#AapsScreens-activate-optional-information)优化 @Philoul
* [配置构建器布局](../SettingUpAaps/ConfigBuilder.md)改进 @MilosKozak
  * 默认折叠区块，点击箭头展开
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

#### 智能手表

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

(version3204)=

## [版本 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

发布日期：2024年02月27日

这是最后一个支持Android 10的版本。如果如法升级到Android 11, [请将 AAPS 升级到 3.2.0.4](#update-aaps-3204).

### 变更内容

- 支持xDrip G7
- 修复美敦力
- 修复自动化图标
- 修复绕过目标1

(version3200)=

## 版本 3.2.0.0 致敬 @Philoul

发布日期：2023年10月23日

### 重要提示

- 需要NS 15
- 使用NS v3插件时，通过NS界面（+按钮）或其他v1 API应用输入的治疗不会同步至AAPS。这将在NS的未来版本中得到修复。在NS全面转用v3前，请确保AAPS与AAPSClient使用相同客户端（v1或v3） 同样适用于AAPS和AAPSClient本身。
- v3插件的Websocket工作方式类似v1。未启用WebSocket时，AAPS会定期从NS调度下载数据，这应该会降低功耗，因为NS不需要保持永久连接。反之，这会导致数据交换出现延迟。使用前请阅读[开发团队重要说明](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)！
- 使用xDrip作为CGM源需重新选择
- Tidepool可用作NS替代完成首目标
- 发送数据至xDrip+需配置xDrip同步插件。为了从AAPS接收BGs，必须选择“xDrip+ Sync Follower”作为源
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

v1是用于在NS网站和NS服务器之间交换数据的旧协议，它有许多限制
- v1仅发送2天的数据
- 每次重新连接时都会发送所有2天的数据
- using websockets is mandatory = permanent connection, more battery consumption
- 当与Nightscout频繁断连时，连接将暂停15分钟以防止数据用量过高。

v3为新协议，更加安全高效
- 在使用令牌时，您可以更好地定义访问权限
- 协议在双方（AAPS和NS）都更高效
- 可以从NS读取最多3个月的数据
- you can choose to use or to not use websockets on every device (using means faster updates, not using means lower power consumption, but slower updates ie. minutes)
- NSClient在断开连接时不会暂停

限制：
- AAPS 3.2需搭配NS 15使用
- v3无法读取v1数据（未来NS版本可能解决）
- in the opposite direction, because of the old ineffective method of tracking changes, v1 sees changes done by v3
- 请留意：目前Nightscout内部仍采用v1接口，因此若你使用v3接口，将无法通过Nightscout网页界面手动输入数据。​ You must use AAPSClient or SMS if you want to enter data remotely

推荐设置：
- 基于上述原因，你应在所有设备上统一选择并仅使用一种接口方案（请注意，目前其他数据上传工具均仍在使用v1接口）。如果您决定使用v3，请在AAPS和所有AAPSClient中选择v3
- 优先选择v3以提高效率
- 是否在v3中使用Websockets取决于您的偏好
- 强烈建议仅由AAPS统一收集所有数据，并作为唯一上传者将数据推送至Nightscout。​ 其他所有设备及应用应仅从NS读取数据，禁止写入。遵循此方案可有效避免数据冲突与同步错误。​ 这也适用于使用Dexcom Share连接器将数据获取到NS的BG数据。

(version3100)=

## 版本 3.1.0

发布日期：2022年7月19日

[发布说明](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

## 版本 3.0.0

发布日期：2022年1月31日

[发布说明](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

## 版本 2.8.2

发布日期：2021年1月23日

[发布说明](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

(version-2811)= (important-hints-2-8-1-1)=

## 版本 2.8.1.1

发布日期：2021年1月12日

[发布说明](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

(Releasenotes-version-2-8-0)=

## 版本 2.8.0

发布日期：2021年1月1日

[发布说明](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

(Releasenotes-version-2-7-0)=

## 版本 2.7.0

发布日期：2020年9月24日

[发布说明](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

(Releasenotes-version-2-6-1-4)=

## 版本 2.6.1.4

发布日期：2020年4月5日

[发布说明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

## 版本 2.6.1.3

发布日期：2020年3月5日

[发布说明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

## 版本 2.6.1.2

发布日期：2020年4月19日

[发布说明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

## 版本 2.6.1.1

发布日期：2020年4月6日

[发布说明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

## 版本 2.6.1

发布日期：2020年3月21日

[发布说明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

(Releasenotes-version-2-6-0)=

## 版本 2.6.0

发布日期：2020年2月29日

[发布说明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

## 版本 2.5.1

发布日期：2019年10月31日

[发布说明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

(Releasenotes-version-2-5-0)=

## 版本 2.5.0

发布日期：2019年10月26日

[发布说明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

## 版本 2.3

发布日期：2019年4月25日

[发布说明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

## 版本 2.2.2

发布日期：2019年4月7日

[发布说明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

## 版本 2.2

发布日期：2019年3月29日

[发布说明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

## 版本 2.1

发布日期：2019年3月3日

[发布说明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

## 版本 2.0

发布日期：2018年11月3日

[发布说明](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

## Version 1.0

```{admonition} First version of **AAPS**
:class: note

The first test version started in 2015 and the first release was in 2016.

The exact chronology of these releases is not available at the moment but as this question has been asked several times we document it here.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
