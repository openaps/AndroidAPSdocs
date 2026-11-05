# 組態（組態建置工具）

```{admonition} Coming from AAPS v3?
:class: note
The **Config Builder** is now called **Configuration** and is in the **menu** (☰). See [What changed in AAPS v4](#v4-changes).
```

**Configuration** is where you choose which plugins are active (CGM, pump, APS algorithm, sensitivity, sync, …) and open each plugin and its settings. 下方提供[操作說明](#configuration-v4)；本頁其餘部分會詳細說明各個區段。

(configuration-v4)=
## Configuration in AAPS v4

In **AAPS** v4, tap the **menu** (☰) in the **top-left** corner of the main screen and choose **Configuration** (_“Set up your configuration (CGM, pump, …) and enable features”_).

![The top-left menu with the Configuration entry](../images/v4/Configuration/configuration_menu.png)

Plugins are grouped by **category** — for example _Smoothing_, _Calibration_, _Sensitivity detection_, _APS_, _Communication_ and _General_. 每個項目都會顯示類別名稱及**目前啟用**的外掛（例如 _APS → OpenAPS SMB_）。點選項目即可開啟該類別。

![The Configuration screen, listing plugin categories](../images/v4/Configuration/configuration_plugins.png)

Inside a category you see the plugins available for it. 在單選類別中，您可以選擇要啟用的項目；有些類別則允許複選（_「選擇所有適用項目」_）。 Each plugin offers two actions:

- **Open plugin** — opens the plugin's own screen.
- **Settings** — opens the plugin's preferences (settings may be grouped into expandable sections).

![A category showing its plugins, each with “Open plugin” and “Settings”](../images/v4/Configuration/configuration_open_plugin.png)

(configuration_sync_icon)=
### The mobile icon — “synced from the master”

A small **mobile (phone) icon** next to a category or setting means that item is **synchronized from the master** — its value/selection is delivered to this device over the NSClientV3 (Nightscout) channel.

在**用戶端**（**AAPSClient**）上，這些項目會與主控端**保持同步**。 The icon is only shown on a client, so it does not appear in the screenshot above, which was taken on the main **AAPS** app. On a client it typically appears on _Smoothing_, _Calibration_, _Sensitivity detection_ and _APS_. 主控端與用戶端如何保持同步，以及您可以從哪一端變更哪些設定，請參閱[主控端 ↔ 用戶端控制](#client-master-config-prefs)。

相同的圖示也會出現在設定畫面中，顯示於個別同步設定旁。 In the example below _Absorption cutoff_ carries the icon; settings without the icon are configured per device:

![A plugin's settings — the mobile icon marks the synced preferences](../images/v4/ClientMaster/preferences_synced_icon.png)

Items **without** the icon are configured **per device**. 最重要的例子是 **NSClientV3（通訊）**連線本身 — **Nightscout URL**、**存取權杖**和 **WebSocket** 都是在各支手機上分別設定，因此旁邊**不會**顯示手機圖示。

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
```

(ConfigBuilder_Profile)=

## 設定檔

This module cannot be disabled as it is a core part of **AAPS**.

See [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md) for a basic understanding of what goes inside your **Profile**.

(insulin)=
(Config-Builder-insulin)=
## 胰島素

![Insulin settings](../images/manage/insulin_settings.png)

In **AAPS** 4 the insulin is no longer a plugin selected in **Configuration**. Open **Manage → Insulin settings** to set up the insulin you are using.

胰島素編輯器可讓您進行以下設定：

- give the insulin an **Insulin nickname** so it is easy to recognise,
- set the **Peak** (time to maximum insulin activity, in minutes) and the **DIA** (Duration of Insulin Action, in hours), either by typing the value or using the **–** / **+** buttons,
- tap a **Load peak from** preset button — **Novorapid** (75 min), **Fiasp** (55 min) or **Lyumjev** (45 min) — to fill in the standard peak time for that insulin in one step.

無論使用哪種胰島素，允許的數值範圍都相同：

- **DIA**: 5 to 9 hours (5 to 10 hours if the patient type is set to **Pregnant**). See [Duration of insulin action (DIA) and peak](#Config-Builder-insulin-dia) to choose a value.
- **Peak**: 35 to 120 minutes.

The **IOB** (insulin on board) and **Activity** curves shown at the bottom of the editor update as you change the values, so you can see straight away how your settings shape the insulin action.

More information to understand the Insulin Profile as shown in **AAPS** [here](#AapsScreens-insulin-profile).

(Config-Builder-insulin-change-active)=
### 變更目前使用的胰島素（DIA 或峰值）

The insulin marked **ACTIVE** is the one your running profile uses. 該胰島素的欄位會呈現灰色，無法編輯或刪除。如此一來，目前使用中的設定檔所顯示的胰島素名稱，就會與實際使用的設定相符。

若要變更目前使用的 DIA 或峰值：

1. Open **Manage → Insulin settings**. If the screen opens read-only (a **✏️ pencil** in the top bar), tap the pencil and unlock your settings.
2. Tap **+** (_Add new insulin_). **AAPS** creates a copy of the insulin shown on screen.
3. Set the new **Peak** and/or **DIA**, then tap the save icon (top right).
4. Tap **▶** (_Activate insulin_) and confirm. The new insulin becomes **ACTIVE**.

```{admonition} The name includes peak and DIA
:class: note
**AAPS** adds the peak, DIA and concentration to the insulin name automatically (for example _Fiasp 55m 8h U100_), so you can tell your configurations apart at a glance.
```

舊的胰島素不再啟用後，即可將它刪除。

### The "Load peak from" presets

In **AAPS** 4 there is no list of insulin types to choose from. 所有胰島素都使用相同的指數活性曲線，差別只在於<strong>峰值</strong>和 <strong>DIA</strong>。胰島素編輯器中的<strong>從以下項目載入峰值</strong>預設值，只要點選一次，就能填入最常見胰島素的建議峰值（點選<strong>從以下項目載入峰值</strong>旁的小型 ⓘ，即可查看胰島素清單及其峰值）。之後仍可調整<strong>峰值</strong>和 <strong>DIA</strong>。

只有在了解調整峰值的影響時，才將峰值改成建議值以外的數值。[胰島素曲線圖](#AapsScreens-insulin-profile)可協助您了解這些曲線。

#### Novorapid

![Insulin curve with the Novorapid peak](../images/Profile/ConfBuild_Insulin_RAO.png)

- recommended for Humalog, Novolog and Novorapid (called _Rapid-Acting Oref_ in **AAPS** v3)
- Peak = 75 minutes after injection

#### Fiasp

![Insulin curve with the Fiasp peak](../images/Profile/ConfBuild_Insulin_URO.png)

- recommended for Fiasp (called _Ultra-Rapid Oref_ in **AAPS** v3)
- Peak = 55 minutes after injection

(Config-Builder-lyumjev)=
#### Lyumjev

![Insulin curve with the Lyumjev peak](../images/Profile/ConfBuild_Insulin_L.png)

- recommended for Lyumjev
- Peak = 45 minutes after injection

#### Custom peak

- There is no separate "Free-Peak Oref" insulin type in **AAPS** 4: enter any **Peak** (35 to 120 minutes) directly in the [insulin editor](#Config-Builder-insulin), without using a preset.
- A custom peak is useful if you use an insulin that is not in the list, or a mixture of different insulins.

(Config-Builder-insulin-dia)=
### Duration of insulin action (DIA) and peak

```{warning}
In looping, decreasing DIA or peak will always increase administered insulin. DIA works differently in AAPS than in commercial AID systems, and careless changes to these settings can change insulin dosing in a way which is much larger or smaller than expected.
```

AAPS models the timeline of insulin action with a mathematical formula, configured using **DIA** and the closely related **peak** settings. DIA 是理論上 IOB 降至零所需的時間；峰值則是胰島素作用最強的時間點。 This yields an IOB curve and an activity curve, which is simply the **rate** of IOB decay.

Consider that when AAPS is looping, it's normal to have periods of [zero-temping](#Open-APS-features-super-micro-bolus-smb). 這些未輸注的基礎胰島素會從 IOB 中全數扣除，因此實際上 IOB 會比設定的 DIA 早好幾個小時降至零。 You can inspect [bolus IOB and basal IOB](#aaps-screens-iob-cob-basal-sens) separately from the main screen.

To configure DIA and peak, tap **Manage** in the main screen, and then tap **Insulin settings**. AAPS 會如下方所示，顯示目前使用中的胰島素組態：

![Sample insulin configuration](../images/manage/insulin_profile.png)

In this example, the peak setting is 55 minutes, DIA is 8 hours and [insulin concentration](#Insulin-Concentration) is the standard 100 IU/mL.

由於上述零基礎率的影響，以及 AAPS 使用的 IOB 衰減公式，大多數使用者設定的 DIA 都明顯長於商用系統中的設定。 In general, many people find that a **DIA** of 9h works well for them. 在更熟悉 AAPS 並將個人設定檔調整妥當後，您可以參考以下資訊，找出適合自己的 DIA 和峰值設定。

````{admonition} Details on the impact of DIA and peak configuration
:class: dropdown

Since the basal rate has an indirect influence on IOB decay in AAPS, it follows that too high basal rates can mask too high DIA, and vice versa. It makes sense to first carefully tune basal rates before adjusting DIA and peak. Additionally, consider that the DIA and peak settings interact, in the sense that the effect of DIA depends on peak, and vice versa.

These charts show the exact impact of DIA and peak on the IOB curves, across the range of allowed values.

Adjusting DIA:

```{image} ../images/iob_remaining_static_peak.png
:width: 400px
```

Adjusting peak:

```{image} ../images/iob_remaining_static_dia.png
:width: 400px
```

Finally, a comparison adjusting DIA and peak in parallel. The logic here is that both values are adjusted in the same relative amounts, so that `49/35 ~ 7/5`. Or similarly, `120/93 ~ 9/7`. The intervals will be consistent regardless of the baseline DIA or peak, as long as the relative change is the same for both.

```{image} ../images/iob_remaining_uniform.png
:width: 400px
```

Note that when DIA and peak are adjusted in this fashion, every point in the curve will shift by the same relative amount.

````

#### Further reading on DIA and peak configuration

- [Technical details and historical background from the AAPS predecessor, OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves).
- [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) on Diabettech.
- [Exponential Insulin Curves + Fiasp](https://web.archive.org/web/20220630154425/http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/) on See My CGM (archive).
- [Revised Humalog model in a closed loop](https://bionicwookiee.com/2022/04/13/revised-humalog-model-in-a-closed-loop/) and other articles on Bionic Wookie, recommending a DIA of 9h for Lyumjev, Fiasp, NovoRapid, Humalog.

(Config-Builder-bg-source)=
## 血糖來源
Select the blood glucose source you are using. 請參閱 [血糖來源](../Getting-Started/CompatiblesCgms.md) 頁面，了解更多設定資訊。

![Configuration > BG Source](../images/v4/Configuration/configuration_bg_source.png)

Scroll down to see the other sources:

![Configuration > BG Source, continued](../images/v4/Configuration/configuration_bg_source_2.png)

![Configuration > BG Source, end of the list](../images/v4/Configuration/configuration_bg_source_3.png)

- [xDrip+ BG](../CompatibleCgms/xDrip.md) - also for compatible apps such as [Juggluco](../CompatibleCgms/Juggluco.md)
- [NSClient BG](../CompatibleCgms/CgmNightscoutUpload.md) - only if you know what you are doing, see [BG Source](../Getting-Started/CompatiblesCgms.md).
- [MM640g](../CompatibleCgms/MM640g.md)
- Glimp - only version 4.15.57 and newer are supported
- [BYODA (Build Your Own Dexcom App)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).
- MicroTech CGM App - for the Aidex / LinX CGM
- [Poctech](../CompatibleCgms/PocTech.md)
- Tomato (MiaoMiao) - Tomato App for MiaoMiao device
- [Glunovo](https://infinovo.com/) - Glunovo App for Glunovo CGM system
- Intelligo - Intelligo App
- Syai/Ottai - for the Syai and Ottai apps (see [Syai Tag](../CompatibleCgms/SyaiTagX1.md) and [Ottai](../CompatibleCgms/OttaiM8.md))
- SI App - patched SI App or Sibionics App for Sibionics CGM
- Sino App - patched app for Sinocare CGM
- Notification Reader - reads glucose values from the notifications shown by official CGM apps (Dexcom, Medtronic, Eversense, etc.)
- Instara - Instara App
- Random BG - generates random BG data for testing. 只有在使用 **Virtual Pump** 的工程（開發者）版本中才能啟用，因此無法在一般的 **AAPS** 安裝中使用。

## Smoothing

![Configuration > Smoothing](../images/v4/Configuration/configuration_smoothing.png)

See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

## 校正

Choose how **AAPS** treats the values it receives from your sensor:

- **No calibration**: the sensor values are used as they are. 傳感器已在出廠時完成校正，且數值準確時，請使用此選項。此為預設選項。
- **Linear calibration**: **AAPS** corrects the sensor values with a slope and an offset that it computes from your fingerstick entries.

How to use **Linear calibration**:

1. 在**校正**類別中選取**線性校正**。
2. 插入新感測器時，請記錄感測器更換：在校正畫面使用**記錄感測器更換**，或在照護入口中輸入 CGM 感測器插入紀錄。這會讓**AAPS**知道感測器使用時段的開始時間。如果**AAPS**發現讀取值中斷超過 30 分鐘，可能會要求你標記感測器更換；這個提示只會出現在主控端，不會出現在用戶端。
3. 開啟外掛並點選**新增校正**。輸入指尖血糖值。 **AAPS**會將這個數值與過去 10 分鐘內的感測器讀取值配對。

A calibration is accepted only when:

- a sensor change is logged and at least **2 hours** have passed since then (warm-up),
- your glucose is stable. If it changes too fast, the dialog tells you and shows the limit,
- there is a CGM reading from the last 10 minutes,
- it is for the current moment. 你無法輸入較早之前的指尖血糖值。

How the correction works:

- **AAPS** draws a straight line through the pairs of the current sensor: `corrected value = slope × sensor value + offset`.
- Newer pairs count more than older ones: a pair that is 2 days old counts about 37 %, a 4-day-old pair about 14 %. 因此，這條線會隨著感測器讀取值的漂移而變化。
- At least **2 pairs** are needed.
- If the pairs are close together (less than 54 mg/dL / 3 mmol/L apart), only the values are shifted (offset, no slope).
- The slope is kept between 0.55 and 1.6. A slope outside this range is limited to the nearest value.
- Safety limit: if the correction at 100 mg/dL (5.5 mmol/L) would be more than ±30 mg/dL (1.7 mmol/L), no correction is applied. 這能避免錯誤輸入造成影響。

What it changes:

- The corrected value is used everywhere: the BG on the main screen, the graph and the loop. 感測器本身的讀取值不會改變。校正會套用在原始讀取值之上，也會套用到目前感測器較早之前的讀取值。
- A new sensor change starts from zero. 先前感測器的配對資料不再納入計算。
- On the graph, a calibration is shown as a marker at the fingerstick value.
- Calibrations are synchronized through Nightscout, so your clients show the same corrected values.

Check and remove entries:

- **Open plugin** shows the status (for example _Slope 0.85, mid-range correction -0.4_), a chart of your pairs with the line, and the list of entries.
- If an entry is wrong (for example, you had sugar on your finger), tap the bin icon next to it. 系統會立即重新計算這條線。

```{admonition} Using xDrip+ as BG source?
:class: note
xDrip+ has its own calibration. Calibrate in one place only, so that the sensor values are not corrected twice.
```

```{admonition} Calibrate with care
:class: warning
A wrong fingerstick value leads to wrong glucose values and therefore to wrong insulin dosing. Wash your hands before measuring, and do not calibrate while your glucose is changing fast.
```

![Configuration > Calibration](../images/v4/Configuration/configuration_calibration.png)

(Config-Builder-pump)=
## 幫浦
選擇你正在使用的幫浦。 See [Compatible pumps](../Getting-Started/CompatiblePumps.md) page for more setup information.

![Configuration > Pump](../images/v4/Configuration/configuration_pump_list_1.png)

向下捲動即可查看所有幫浦驅動程式：

![Configuration > Pump, continued](../images/v4/Configuration/configuration_pump_list_2.png)

![Configuration > Pump, continued](../images/v4/Configuration/configuration_pump_list_3.png)

![Configuration > Pump, end of the list](../images/v4/Configuration/configuration_pump_list_4.png)

When you select another pump, **AAPS** asks you to confirm the change:

![Switch plugin confirmation](../images/v4/Pumps/switch_plugin_dialog.png)

- [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
- Dana R Korean（適用於國內 DanaR 幫浦）
- Dana Rv2（升級了非官方韌體的 DanaR 幫浦）
- [Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
- [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
- [Accu Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
- Omnipod for [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
- Dash for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
- [Medtronic](../CompatiblePumps/MedtronicPump.md)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
- [EOPatch2](../CompatiblePumps/EOPatch2.md)
- [Medtrum](../CompatiblePumps/MedtrumNano.md)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md)
- [Carelevo](../CompatiblePumps/CareLevo.md)
- Virtual pump: open loop - **AAPS** suggestions only
  - as you make your first steps with **AAPS**, during the first [objectives](../SettingUpAaps/CompletingTheObjectives.md)
  - 針對尚未擁有驅動程式的幫浦

(config-builder-wrong-pump-data)=
### 訊息：「資料來自不同的幫浦」

**AAPS** remembers the pump it is connected to (pump type and serial number). 如果收到來自其他幫浦的資料，例如原本的幫浦更換成同型號的新幫浦後，系統會顯示此訊息，並忽略該幫浦傳來的資料：

![Data is coming from different pump](../images/Screen_DifferentPump.png)

To use the new pump, change the pump driver: select **Virtual pump**, confirm, then select your pump again. **AAPS** then registers the pump it is connected to now.

(Config-Builder-sensitivity-detection)=

## 敏感性偵測

![Configuration > Sensitivity detection](../images/v4/Configuration/configuration_sensitivity_detection.png)

選擇你正在使用的敏感性偵測類型。 For more details of different designs please [read on here](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). 此功能會即時分析歷史資料，並在你對胰島素的反應比平常更敏感（或相反，更具抗性）時進行調整。 More details about how the sensitivity ratio itself is calculated can be found in [Key AAPS Features > Autosens](#Open-APS-features-autosens).

You can view your sensitivity on the main screen in an [additional graph](#AapsScreens-section-g-additional-graphs), by selecting SENS% and watching the white line. Note, you need to be in [Objective 8](#objectives-objective8) in order to let Sensitivity Detection/[Autosens](#Open-APS-features-autosens) automatically adjust the amount of insulin delivered. 在達到該目標之前，Autosens 的百分比/圖表中的線僅供參考。

### 吸收設定
If you use Oref1 with **SMB** you must change **min_5m_carbimpact** to 8. The value is only used during gaps in **CGM** readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause **AAPS** to decay COB. At times when [carb absorption](../DailyLifeWithAaps/CobCalculation.md) can't be dynamically worked out based on your blood's reactions it inserts a default decay to your carbs. 基本上，這是一個安全保護機制。

(Config-Builder-aps)=
## APS

![Configuration > APS](../images/v4/Configuration/configuration_aps.png)

選擇用於治療調整的 APS 演算法。 You can view the active detail of the chosen algorithm with **Open plugin**.
- OpenAPS AMA
  - 進階餐點輔助：不再建議使用的舊演算法。
  - 簡單來說，這些好處是在你提供餐前注射後，系統可以更快進行高溫调节，前提是你可靠地輸入碳水化合物。
- [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb)
  - 超微量注射：建議所有用戶使用的最新演算法。
  - In contrast to AMA, SMB does not use temporary basal rates to control glucose levels, but mainly small **Super Micro Boluses**.
  - Note : It is recommended to use this algorithm from the beginning, even though you will not actually get SMBs delivered until [Objective 9](#objectives-objective9).
- [Auto ISF](#Open-APS-features-auto-isf)
  - 供進階使用者使用的實驗性演算法。完成各項目標後，此演算法才會出現在清單中。

If switching from AMA to SMB algorithm, _min_5m_carbimpact_ must be changed manually to **8** (default value for SMB) in [Settings → Absorption settings](#Preferences-min_5m_carbimpact).

## 循環

This module cannot be disabled as it is a core part of **AAPS**.

![Configuration > Loop](../images/v4/Configuration/configuration_loop.png)

## 約束條件

![Configuration > Constraints](../images/v4/Configuration/configuration_constraints.png)

### 目標

**AAPS** has a learning program (a series of objectives) that you have to fulfill step by step. 這將引導你安全地設置閉合循環系統。

See [Objectives](../SettingUpAaps/CompletingTheObjectives.md) page for more information.

## 通訊

In this category (called **Synchronization** in **AAPS** v3), you choose if/where you want **AAPS** to send your data to.

![Configuration > Communication](../images/v4/Configuration/configuration_communication.png)

向下捲動即可查看清單中的其他項目：

![Configuration > Communication, continued](../images/v4/Configuration/configuration_communication_2.png)

### NSClientV3

Can be used as a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md) and/or for [remote monitoring](../RemoteFeatures/RemoteMonitoring.md), [remote control](../RemoteFeatures/RemoteControl.md).

See [Synchronization with the reporting server](#SetupWizard-synchronization-with-the-reporting-server-and-more) to set up NSClientV3 synchronization.

### Tidepool

Can be used as a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md).

See [Tidepool](../SettingUpAaps/Tidepool.md).

### xDrip

Used to **send** data such as glucose values and treatments to xDrip+ on the same phone. Its settings also hold **Send status to xDrip+**, a status line with IOB and COB that xDrip+ and some watch companion apps display.

### Open Humans

See [Open Humans](../SupportingAaps/OpenHumans.md).

(Config-Builder-wear)=
### Wear
Monitor and control **AAPS** from a Wear OS watch. Setting up the watch is explained on [Wear OS smartwatch](../WearOS/WearOsSmartwatch.md). After enabling the plugin, choose its options in [Settings > Wear](#preferences-wear). Using the watch is explained on [Operation of AAPS via your Wear OS smartwatch](../RemoteFeatures/RemoteControlWearOS.md).

(external-companion-apps)=
### 外部輔助 App

Broadcasts **AAPS** status data on the phone so that other apps installed on it can display it — for example watch or widget companion apps. 廣播的內容包括血糖和趨勢、IOB、COB、基礎率和臨時基礎率、設定檔名稱、循環狀態、手機和幫浦電量、藥量，以及注射進度。只有在你使用的配套 App 要求提供這些資料時，才啟用此功能。

Apps known to read this broadcast are [WatchDrip+](https://bigdigital.home.blog/) (Xiaomi and Amazfit watches), [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) (Wear OS complications and widgets, and Android Auto through GlucoDataAuto) and the G-Watch app. Their setup is described on [Smartwatches and AAPS](#watches-external-companion-apps). Some of them also use **Send status to xDrip+** from the **xDrip** plugin above for a status line with IOB and COB.

In earlier versions this plugin was called **Samsung Tizen**, after the [G-Watch app for Samsung Tizen watches](#Watchfaces-tizen) it was first made for.

### Garmin

連接到 Garmin 設備（Fenix、Edge...）
## 治療
Open the **menu** (☰) and select [Treatments history](#aaps-screens-treatments) to see the treatments that have been recorded. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through **Treatments → Carbs** in the bottom navigation (see [Carbs](#screens-bolus-carbs)).

## 一般問題

In **AAPS** 4 the **General** category of **Configuration** only lists **Autotune**. 以下說明的其他功能一律可用，不再需要在此啟用；各段落會說明如何找到這些功能。

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
Allows remote caregivers to control some **AAPS** features via SMS, see [SMS Commands](../RemoteFeatures/SMSCommands.md) for more setup information.

### 食物
**Manage → Food** displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the **AAPS** calculator. （僅供檢視）

(Config-Builder-autotune)=
### 自動調整

You can enable Autotune, see [here](../AdvancedOptions/Autotune.md).

### 維護

Open the **menu** (☰) and select **Maintenance** to export / import settings and manage log files.

![Maintenance screen, log files](../images/screens/maintenance.png)

![Maintenance screen, file management](../images/screens/maintenance_2.png)

![Maintenance screen, database management](../images/screens/maintenance_3.png)

### 組態建置工具

Now called **Configuration**: this current page.