# Configuration (Config Builder)

```{admonition} Coming from AAPS v3? :class: note The **Config Builder** is now called **Configuration** and is in the **menu** (☰). See [What changed in AAPS v4](#v4-changes).

    <br />**Configuration** is where you choose which plugins are active (CGM, pump, APS algorithm, sensitivity, sync, …) and open each plugin and its settings. The [walkthrough](#configuration-v4) is below; the rest of this page describes each section in detail.
    
    (configuration-v4)=
    ## Configuration in AAPS v4
    
    In **AAPS** v4, tap the **menu** (☰) in the **top-left** corner of the main screen and choose **Configuration** (*“Set up your configuration (CGM, pump, …) and enable features”*).
    
    ![The top-left menu with the Configuration entry](../images/v4/Configuration/configuration_menu.png)
    
    Plugins are grouped by **category** — for example *Smoothing*, *Calibration*, *Sensitivity detection*, *APS*, *Communication* and *General*. Each row shows the category name and the **currently active** plugin (e.g. *APS → OpenAPS SMB*). Tap a row to open a category.
    
    ![The Configuration screen, listing plugin categories](../images/v4/Configuration/configuration_plugins.png)
    
    Inside a category you see the plugins available for it. For single-choice categories you pick the active one; some categories are multi-select (*“Choose any that apply”*). Each plugin offers two actions:
    
    - **Open plugin** — opens the plugin's own screen.
    - **Settings** — opens the plugin's preferences (settings may be grouped into expandable sections).
    
    ![A category showing its plugins, each with “Open plugin” and “Settings”](../images/v4/Configuration/configuration_open_plugin.png)
    
    (configuration_sync_icon)=
    ### The mobile icon — “synced from the master”
    
    A small **mobile (phone) icon** next to a category or setting means that item is **synchronized from the master** — its value/selection is delivered to this device over the NSClientV3 (Nightscout) channel.
    
    On a **client** (**AAPSClient**) these items are **kept in sync with the master**. The icon is only shown on a client, so it does not appear in the screenshot above, which was taken on the main **AAPS** app. On a client it typically appears on *Smoothing*, *Calibration*, *Sensitivity detection* and *APS*. Exactly how the master and clients stay aligned — and which settings you can change from either side — is covered under [Master ↔ Client control](#client-master-config-prefs).
    
    The same icon also appears **inside the settings**, next to the individual preferences that are synced. In the example below *Absorption cutoff* carries the icon; settings without the icon are configured per device:
    
    ![A plugin's settings — the mobile icon marks the synced preferences](../images/v4/ClientMaster/preferences_synced_icon.png)
    
    Items **without** the icon are configured **per device**. The most important example is the **NSClientV3 (Communication)** connection itself — the **Nightscout URL**, **access token** and **websockets** are set on each phone individually, so they do **not** show the mobile icon.
    
    ---
    
    (Config-Builder-tab-or-hamburger-menu)=
    ## Opening a plugin screen
    
    Each plugin screen is opened in one of these ways (the tabs and the eye checkbox of **AAPS** v3 are gone, see [What changed in AAPS v4](#v4-changes)):
    
    - **Configuration** → the plugin's category → **Open plugin**,
    - the **Manage** sheet of the bottom navigation, for the screens you use most (Profile, Insulin settings, Pump, Automation, Food...),
    - a [QuickLaunch](../DailyLifeWithAaps/QuickLaunch.md) button that you add yourself,
    - the **search bar** on the main screen.
    
    ```{contents}
    :backlinks: entry
    :depth: 2
    

(ConfigBuilder_Profile)=

## 設定檔

This module cannot be disabled as it is a core part of **AAPS**.

請參閱[你的 AAPS 個人設定](../SettingUpAaps/YourAapsProfile.md)以基本了解你的**個人設定**中包含的內容。

(insulin)= (Config-Builder-insulin)=

## 胰島素

![Insulin settings](../images/manage/insulin_settings.png)

In **AAPS** 4 the insulin is no longer a plugin selected in **Configuration**. Open **Manage → Insulin settings** to set up the insulin you are using.

The insulin editor lets you:

* give the profile an **Insulin nickname** so it is easy to recognise,
* set the **Peak** (time to maximum insulin activity, in minutes) and the **DIA** (Duration of Insulin Activity, in hours), either by typing the value or using the **–** / **+** buttons,
* tap a **Load peak from** preset button — **Novorapid** (75 min), **Fiasp** (55 min) or **Lyumjev** (45 min) — to fill in the standard peak time for that insulin in one step.

The allowed ranges are the same whatever insulin you use:

* **DIA**: 5 to 9 hours (5 to 10 hours if the patient type is set to **Pregnant**). See [Duration of insulin action (DIA) and peak](#Config-Builder-insulin-dia) to choose a value.
* **Peak**: 35 to 120 minutes.

The **IOB** (insulin on board) and **Activity** curves shown at the bottom of the editor update as you change the values, so you can see straight away how your settings shape the insulin action.

有關如何理解**AAPS**中顯示的胰島素個人設定的更多資訊，請[查看這裡](#AapsScreens-insulin-profile)。

(Config-Builder-insulin-change-active)=

### Changing the insulin in use (DIA or peak)

The insulin marked **ACTIVE** is the one your running profile uses. Its fields are greyed out: you cannot edit or delete it. This way, the insulin name shown in your running profile always matches the settings actually in use.

To change the DIA or peak you are using:

1. Open **Manage → Insulin settings**. If the screen opens read-only (a **✏️ pencil** in the top bar), tap the pencil and unlock your settings.
2. Tap **+** (*Add new insulin*). **AAPS** creates a copy of the insulin shown on screen.
3. Set the new **Peak** and/or **DIA**, then tap the save icon (top right).
4. Tap **▶** (*Activate insulin*) and confirm. The new insulin becomes **ACTIVE**.

```{admonition} The name includes peak and DIA :class: note **AAPS** adds the peak, DIA and concentration to the insulin name automatically (for example *Fiasp 55m 8h U100*), so you can tell your configurations apart at a glance.

    <br />You can delete the old insulin once it is no longer active.
    
    ### The "Load peak from" presets
    
    In **AAPS** 4 there is no list of insulin types to choose from. Every insulin uses the same exponential activity curve; only its **Peak** and **DIA** differ. The **Load peak from** presets in the insulin editor fill in the recommended peak for the most common insulins in one tap (the small ⓘ next to **Load peak from** lists them with their peak values). You can still adjust the **Peak** and **DIA** afterwards.
    
    Only change the peak away from its recommended value if you understand the effect of doing so. The [insulin curve graph](#AapsScreens-insulin-profile) helps you to understand the curves.
    
    #### Novorapid
    
    ![Insulin curve with the Novorapid peak](../images/Profile/ConfBuild_Insulin_RAO.png)
    
    * recommended for Humalog, Novolog and Novorapid (called *Rapid-Acting Oref* in **AAPS** v3)
    * Peak = 75 minutes after injection
    
    #### Fiasp
    
    ![Insulin curve with the Fiasp peak](../images/Profile/ConfBuild_Insulin_URO.png)
    
    * recommended for Fiasp (called *Ultra-Rapid Oref* in **AAPS** v3)
    * Peak = 55 minutes after injection
    
    (Config-Builder-lyumjev)=
    #### Lyumjev
    
    ![Insulin curve with the Lyumjev peak](../images/Profile/ConfBuild_Insulin_L.png)
    
    * recommended for Lyumjev
    * Peak = 45 minutes after injection
    
    #### Custom peak
    
    * There is no separate "Free-Peak Oref" insulin type in **AAPS** 4: enter any **Peak** (35 to 120 minutes) directly in the [insulin editor](#Config-Builder-insulin), without using a preset.
    * A custom peak is useful if you use an insulin that is not in the list, or a mixture of different insulins.
    
    (Config-Builder-insulin-dia)=
    ### Duration of insulin action (DIA) and peak
    
    ```{warning}
    In looping, decreasing DIA or peak will always increase administered insulin. DIA works differently in AAPS than in commercial AID systems, and careless changes to these settings can change insulin dosing in a way which is much larger or smaller than expected.
    

AAPS models the timeline of insulin action with a mathematical formula, configured using **DIA** and the closely related **peak** settings. DIA is the theoretical duration until IOB reaches zero and peak is the point in time when the effect of insulin is strongest. This yields an IOB curve and an activity curve, which is simply the **rate** of IOB decay.

Consider that when AAPS is looping, it's normal to have periods of [zero-temping](#Open-APS-features-super-micro-bolus-smb). This missing basal insulin is fully subtracted from the IOB, explaining why IOB will in practice reach zero many hours earlier than the configured DIA. You can inspect [bolus IOB and basal IOB](#aaps-screens-iob-cob-basal-sens) separately from the main screen.

To configure DIA and peak, tap **Manage** in the main screen, and then tap **Insulin settings**. AAPS displays the active insulin configuration like this:

![Sample insulin configuration](../images/manage/insulin_profile.png)

In this example, the peak setting is 55 minutes, DIA is 8 hours and [insulin concentration](#Insulin-Concentration) is the standard 100 IU/mL.

Due to the influence of zero-temping explained above and the formula used for IOB decay in AAPS, most users set a clearly higher DIA than in commercial systems. In general, many people find that a **DIA** of 9h works well for them. After you have more experience with AAPS and have a well-tuned profile, you can try to find personalized DIA and peak settings with the information below.

````{admonition} Details on the impact of DIA and peak configuration :class: dropdown

Since the basal rate has an indirect influence on IOB decay in AAPS, it follows that too high basal rates can mask too high DIA, and vice versa. It makes sense to first carefully tune basal rates before adjusting DIA and peak. Additionally, consider that the DIA and peak settings interact, in the sense that the effect of DIA depends on peak, and vice versa.

These charts show the exact impact of DIA and peak on the IOB curves, across the range of allowed values.

Adjusting DIA:

```{image} ../images/iob_remaining_static_peak.png :width: 400px

    <br />Adjusting peak:
    
    ```{image} ../images/iob_remaining_static_dia.png
    :width: 400px
    

Finally, a comparison adjusting DIA and peak in parallel. The logic here is that both values are adjusted in the same relative amounts, so that `49/35 ~ 7/5`. Or similarly, `120/93 ~ 9/7`. The intervals will be consistent regardless of the baseline DIA or peak, as long as the relative change is the same for both.

```{image} ../images/iob_remaining_uniform.png :width: 400px

    <br />Note that when DIA and peak are adjusted in this fashion, every point in the curve will shift by the same relative amount.
    
    ````
    
    #### Further reading on DIA and peak configuration
    
    * [Technical details and historical background from the AAPS predecessor, OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves).
    * [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) on Diabettech.
    * [Exponential Insulin Curves + Fiasp](https://web.archive.org/web/20220630154425/http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/) on See My CGM (archive).
    * [Revised Humalog model in a closed loop](https://bionicwookiee.com/2022/04/13/revised-humalog-model-in-a-closed-loop/) and other articles on Bionic Wookie, recommending a DIA of 9h for Lyumjev, Fiasp, NovoRapid, Humalog.
    
    (Config-Builder-bg-source)=
    ## BG Source
    Select the blood glucose source you are using. See [BG Source](../Getting-Started/CompatiblesCgms.md) page for more setup information.
    
    ![Configuration > BG Source](../images/v4/Configuration/configuration_bg_source.png)
    
    Scroll down to see the other sources:
    
    ![Configuration > BG Source, continued](../images/v4/Configuration/configuration_bg_source_2.png)
    
    ![Configuration > BG Source, end of the list](../images/v4/Configuration/configuration_bg_source_3.png)
    
    * [xDrip+ BG](../CompatibleCgms/xDrip.md) - also for compatible apps such as [Juggluco](../CompatibleCgms/Juggluco.md)
    * [NSClient BG](../CompatibleCgms/CgmNightscoutUpload.md) - only if you know what you are doing, see [BG Source](../Getting-Started/CompatiblesCgms.md).
    * [MM640g](../CompatibleCgms/MM640g.md)
    * Glimp - only version 4.15.57 and newer are supported
    * [BYODA (Build Your Own Dexcom App)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).
    * MicroTech CGM App - for the Aidex / LinX CGM
    * [Poctech](../CompatibleCgms/PocTech.md)
    * Tomato (MiaoMiao) - Tomato App for MiaoMiao device
    * [Glunovo](https://infinovo.com/) - Glunovo App for Glunovo CGM system
    * Intelligo - Intelligo App
    * Syai/Ottai - for the Syai and Ottai apps (see [Syai Tag](../CompatibleCgms/SyaiTagX1.md) and [Ottai](../CompatibleCgms/OttaiM8.md))
    * SI App - patched SI App or Sibionics App for Sibionics CGM
    * Sino App - patched app for Sinocare CGM
    * Notification Reader - reads glucose values from the notifications shown by official CGM apps (Dexcom, Medtronic, Eversense, etc.)
    * Instara - Instara App
    * Random BG - generates random BG data for testing. It can only be enabled in an engineering (developer) build with the **Virtual Pump**, so in a normal **AAPS** installation it cannot be used.
    
    ## Smoothing
    
    ![Configuration > Smoothing](../images/v4/Configuration/configuration_smoothing.png)
    
    See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).
    
    ## Calibration
    
    Choose how **AAPS** treats the values it receives from your sensor:
    
    - **No calibration**: the sensor values are used as they are. Use this when the sensor is already factory-calibrated and accurate. This is the default.
    - **Linear calibration**: **AAPS** corrects the sensor values with a slope and an offset that it computes from your fingerstick entries.
    
    How **Linear calibration** works:
    
    - It needs a **sensor change** to be logged, so that it knows when the sensor session started. The first 2 hours of a session are skipped as warm-up.
    - It needs at least **2 fingerstick entries**. Recent entries count more than old ones.
    - The correction is only applied when the result is in a safe range. If your entries are too close together, only the offset is corrected.
    - **Open plugin** shows the status of the calibration, the slope and correction in use, and the list of fingerstick entries. You can add an entry with **Add calibration** and remove a wrong one.
    
    ```{admonition} Calibrate with care
    :class: warning
    A wrong fingerstick value leads to wrong glucose values and therefore to wrong insulin dosing. Wash your hands before measuring, and do not calibrate while your glucose is changing fast.
    

![Configuration > Calibration](../images/v4/Configuration/configuration_calibration.png)

(Config-Builder-pump)=

## 幫浦

選擇你正在使用的幫浦。請參閱[相容的幫浦](../Getting-Started/CompatiblePumps.md)頁面以獲取更多設置資訊。

![Configuration > Pump](../images/v4/Configuration/configuration_pump_list_1.png)

Scroll down to see all the pump drivers:

![Configuration > Pump, continued](../images/v4/Configuration/configuration_pump_list_2.png)

![Configuration > Pump, continued](../images/v4/Configuration/configuration_pump_list_3.png)

![Configuration > Pump, end of the list](../images/v4/Configuration/configuration_pump_list_4.png)

When you select another pump, **AAPS** asks you to confirm the change:

![Switch plugin confirmation](../images/v4/Pumps/switch_plugin_dialog.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* Dana R Korean（適用於國內 DanaR 幫浦）
* Dana Rv2（升級了非官方韌體的 DanaR 幫浦）
* [Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
* Omnipod 用於[Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
* Dash 用於[Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* [EOPatch2](../CompatiblePumps/EOPatch2.md)
* [Medtrum](../CompatiblePumps/MedtrumNano.md)
* [Equil 5.3](../CompatiblePumps/Equil5.3.md)
* [Carelevo](../CompatiblePumps/CareLevo.md)
* 虛擬幫浦：開放循環 - 僅限**AAPS**建議 
  * 當你開始使用**AAPS**時，在首次[完成目標](../SettingUpAaps/CompletingTheObjectives.md)的過程中
  * 針對尚未擁有驅動程式的幫浦

(config-builder-wrong-pump-data)=

### Message: "Data is coming from different pump"

**AAPS** remembers the pump it is connected to (pump type and serial number). If it receives data from another pump, for example after your pump was replaced by a new one of the same model, it shows this message and ignores the data from that pump:

![Data is coming from different pump](../images/Screen_DifferentPump.png)

To use the new pump, change the pump driver: select **Virtual pump**, confirm, then select your pump again. **AAPS** then registers the pump it is connected to now.

(Config-Builder-sensitivity-detection)=

## 敏感性偵測

![Configuration > Sensitivity detection](../images/v4/Configuration/configuration_sensitivity_detection.png)

選擇你正在使用的敏感性偵測類型。欲了解不同設計的更多詳細資訊，請[在這裡閱讀](../DailyLifeWithAaps/SensitivityDetectionAndCob.md)。此功能會即時分析歷史資料，並在你對胰島素的反應比平常更敏感（或相反，更具抗性）時進行調整。 More details about how the sensitivity ratio itself is calculated can be found in [Key AAPS Features > Autosens](#Open-APS-features-autosens).

You can view your sensitivity on the main screen in an [additional graph](#AapsScreens-section-g-additional-graphs), by selecting SEN and watching the white line. 請注意，你需要在[目標 8](#objectives-objective8)中，以便讓敏感度檢測/[自動敏感調整](#Open-APS-features-autosens)所提供的胰島素量。在達到該目標之前，Autosens 的百分比/圖表中的線僅供參考。

### 吸收設定

如果你使用 Oref1 與**SMB**，你必須將**min_5m_carbimpact**改成 8。該值僅在**CGM**讀數缺口期間或當身體活動“消耗”所有本應導致**AAPS**降解 COB 的血糖上升時使用。在無法根據你的血液反應動態計算[碳水化合物吸收](../DailyLifeWithAaps/CobCalculation.md)的情況下，系統會插入碳水化合物的預設衰減。基本上，這是一個安全保護機制。

(Config-Builder-aps)=

## APS

![Configuration > APS](../images/v4/Configuration/configuration_aps.png)

選擇用於治療調整的 APS 演算法。 You can view the active detail of the chosen algorithm with **Open plugin**.

* OpenAPS AMA 
  * 進階餐點輔助：不再建議使用的舊演算法。
  * 簡單來說，這些好處是在你提供餐前注射後，系統可以更快進行高溫调节，前提是你可靠地輸入碳水化合物。
* [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) 
  * 超微量注射：建議所有用戶使用的最新演算法。
  * 與 AMA 不同，SMB 不使用臨時基礎率來控制血糖水平，而主要使用小型**超微量注射**。
  * 注意：建議你從一開始就使用這個演算法，儘管你實際上直到[目標 9](#objectives-objective9)才會收到 SMB。
* [Auto ISF](#Open-APS-features-auto-isf) 
  * Experimental algorithm for advanced users. It is only listed once the objectives are completed.

If switching from AMA to SMB algorithm, *min_5m_carbimpact* must be changed manually to **8** (default value for SMB) in [Settings → Absorption settings](#Preferences-min_5m_carbimpact).

## 循環

This module cannot be disabled as it is a core part of **AAPS**.

![Configuration > Loop](../images/v4/Configuration/configuration_loop.png)

## 約束條件

![Configuration > Constraints](../images/v4/Configuration/configuration_constraints.png)

### 目標

**AAPS**有一個學習計畫（一系列目標），你需要逐步完成。這將引導你安全地設置閉合循環系統。

請參閱[目標](../SettingUpAaps/CompletingTheObjectives.md)頁面以獲取更多資訊。

## Communication

In this category (called **Synchronization** in **AAPS** v3), you choose if/where you want **AAPS** to send your data to.

![Configuration > Communication](../images/v4/Configuration/configuration_communication.png)

Scroll down to see the rest of the list:

![Configuration > Communication, continued](../images/v4/Configuration/configuration_communication_2.png)

### NSClientV3

可用作[報告伺服器](../SettingUpAaps/SettingUpTheReportingServer.md)以及/或[遠端監控](../RemoteFeatures/RemoteMonitoring.md)、[遠端控制](../RemoteFeatures/RemoteControl.md)。

See [Synchronization with the reporting server](#SetupWizard-synchronization-with-the-reporting-server-and-more) to set up NSClientV3 synchronization.

### Tidepool

可用作[報告伺服器](../SettingUpAaps/SettingUpTheReportingServer.md)。

請參閱[Tidepool](../SettingUpAaps/Tidepool.md)。

### xDrip

Used to **send** data such as glucose values and treatments to xDrip+ on the same phone. Its settings also hold **Send status to xDrip+**, a status line with IOB and COB that xDrip+ and some watch companion apps display.

### Open Humans

請參閱[Open Humans](../SupportingAaps/OpenHumans.md)。

(Config-Builder-wear)=

### Wear

Monitor and control **AAPS** from a Wear OS watch. Setting up the watch is explained on [Wear OS smartwatch](../WearOS/WearOsSmartwatch.md). After enabling the plugin, choose its options in [Settings > Wear](#preferences-wear). Using the watch is explained on [Operation of AAPS via your Wear OS smartwatch](../RemoteFeatures/RemoteControlWearOS.md).

(external-companion-apps)=

### External Companion Apps

Broadcasts **AAPS** status data on the phone so that other apps installed on it can display it — for example watch or widget companion apps. The broadcast includes glucose and trend, IOB, COB, basal and temp basal, profile name, loop status, phone and pump battery, reservoir level and bolus progress. Enable it only if a companion app you use asks for this data.

Apps known to read this broadcast are [WatchDrip+](https://bigdigital.home.blog/) (Xiaomi and Amazfit watches), [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) (Wear OS complications and widgets, and Android Auto through GlucoDataAuto) and the G-Watch app. Their setup is described on [Smartwatches and AAPS](#watches-external-companion-apps). Some of them also use **Send status to xDrip+** from the **xDrip** plugin above for a status line with IOB and COB.

In earlier versions this plugin was called **Samsung Tizen**, after the [G-Watch app for Samsung Tizen watches](#Watchfaces-tizen) it was first made for.

### Garmin

連接到 Garmin 設備（Fenix、Edge...）

## 治療

Open the **menu** (☰) and select [Treatments history](#aaps-screens-treatments) to see the treatments that have been recorded. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through **Treatments → Carbs** in the bottom navigation (see [Carbs](#screens-bolus-carbs)).

## 一般問題

In **AAPS** 4 the **General** category of **Configuration** only lists **Autotune**. The other features described below are always available and no longer need to be enabled here; each paragraph says where to find them.

![Configuration > General](../images/v4/Configuration/configuration_general.png)

### 首頁總覽

The [main screen](#AapsScreens-the-homescreen) of **AAPS** is not a plugin any more and has no settings of its own in **Configuration**. The options that used to be here are in **Settings** (gear icon): [Show notes in dialogs](#Preferences-show-notes-field-in-treatments-dialogs), [Status lights](#Preferences-status-lights) and the [Bolus percentage](#Preferences-deliver-this-part-of-bolus-wizard-result) used by the bolus wizard. The super bolus option of **AAPS** 3.x is [not available as a setting](#Preferences-advanced-settings-overview) in **AAPS** 4.

(Config-Builder-actions)=

### 操作

The Actions tab of **AAPS** 3.x no longer exists. Its buttons are now in the **Manage** sheet — see [Where did the Actions tab go?](#screens-action-tab).

### 自動化

**Manage → Automation** lets you manage your [Automations](../DailyLifeWithAaps/Automations.md), starting at [Objective 10](#objectives-objective10).

(Config-Builder-sms-communicator)=

### SMS(簡訊) 通訊器

允許遠端照護人員透過簡訊控制某些**AAPS**功能，請參閱[簡訊指令](../RemoteFeatures/SMSCommands.md)以獲取更多設置資訊。

### 食物

**Manage → Food** displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

注意：項目無法在**AAPS**計算機中使用。（僅供檢視）

(Config-Builder-autotune)=

### 自動調整

您可以啟用 Autotune，請參閱 [這裡](../AdvancedOptions/Autotune.md)。

### 維護

Open the **menu** (☰) and select **Maintenance** to export / import settings and manage log files.

![Maintenance screen, log files](../images/screens/maintenance.png)

![Maintenance screen, file management](../images/screens/maintenance_2.png)

![Maintenance screen, database management](../images/screens/maintenance_3.png)

### 組態建置工具

Now called **Configuration**: this current page.