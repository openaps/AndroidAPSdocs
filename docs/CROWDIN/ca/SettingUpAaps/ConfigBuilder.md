# Configurador (Config Builder)

```{admonition} Coming from AAPS v3?
:class: note
The **Config Builder** is now called **Configuration** and is in the **menu** (☰). See [What changed in AAPS v4](#v4-changes).
```

**Configuration** is where you choose which plugins are active (CGM, pump, APS algorithm, sensitivity, sync, …) and open each plugin and its settings. La [guia pas a pas](#configuration-v4) és més avall; la resta d'aquesta pàgina descriu cada secció en detall.

(configuration-v4)=
## Configuration in AAPS v4

In **AAPS** v4, tap the **menu** (☰) in the **top-left** corner of the main screen and choose **Configuration** (_“Set up your configuration (CGM, pump, …) and enable features”_).

![The top-left menu with the Configuration entry](../images/v4/Configuration/configuration_menu.png)

Plugins are grouped by **category** — for example _Smoothing_, _Calibration_, _Sensitivity detection_, _APS_, _Communication_ and _General_. Cada fila mostra el nom de la categoria i el plugin **actiu actualment** (p. ex. _APS → OpenAPS SMB_). Toqueu una fila per obrir una categoria.

![The Configuration screen, listing plugin categories](../images/v4/Configuration/configuration_plugins.png)

Inside a category you see the plugins available for it. A les categories d'una sola opció trieu l'activa; algunes categories permeten triar-ne diverses (_«Trieu tots els que calguin»_). Each plugin offers two actions:

- **Open plugin** — opens the plugin's own screen.
- **Settings** — opens the plugin's preferences (settings may be grouped into expandable sections).

![A category showing its plugins, each with “Open plugin” and “Settings”](../images/v4/Configuration/configuration_open_plugin.png)

(configuration_sync_icon)=
### The mobile icon — “synced from the master”

A small **mobile (phone) icon** next to a category or setting means that item is **synchronized from the master** — its value/selection is delivered to this device over the NSClientV3 (Nightscout) channel.

En un **client** (**AAPSClient**) aquests elements **es mantenen sincronitzats amb el principal**. The icon is only shown on a client, so it does not appear in the screenshot above, which was taken on the main **AAPS** app. On a client it typically appears on _Smoothing_, _Calibration_, _Sensitivity detection_ and _APS_. Com es mantenen alineats el principal i els clients, i quins paràmetres podeu canviar des de cada costat, s'explica a [Control principal ↔ client](#client-master-config-prefs).

La mateixa icona també apareix **dins de la configuració**, al costat de cada preferència que es sincronitza. In the example below _Absorption cutoff_ carries the icon; settings without the icon are configured per device:

![A plugin's settings — the mobile icon marks the synced preferences](../images/v4/ClientMaster/preferences_synced_icon.png)

Items **without** the icon are configured **per device**. L'exemple més important és la mateixa connexió **NSClientV3 (Comunicació)**: l'**URL de Nightscout**, el **token d'accés** i els **websockets** es configuren a cada telèfon per separat, per això **no** mostren la icona del mòbil.

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

## Perfil

This module cannot be disabled as it is a core part of **AAPS**.

See [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md) for a basic understanding of what goes inside your **Profile**.

(insulin)=
(Config-Builder-insulin)=
## Insulina

![Insulin settings](../images/manage/insulin_settings.png)

In **AAPS** 4 the insulin is no longer a plugin selected in **Configuration**. Open **Manage → Insulin settings** to set up the insulin you are using.

L'editor d'insulina us permet:

- give the insulin an **Insulin nickname** so it is easy to recognise,
- set the **Peak** (time to maximum insulin activity, in minutes) and the **DIA** (Duration of Insulin Action, in hours), either by typing the value or using the **–** / **+** buttons,
- tap a **Load peak from** preset button — **Novorapid** (75 min), **Fiasp** (55 min) or **Lyumjev** (45 min) — to fill in the standard peak time for that insulin in one step.

Els intervals permesos són els mateixos sigui quina sigui la insulina que feu servir:

- **DIA**: 5 to 9 hours (5 to 10 hours if the patient type is set to **Pregnant**). See [Duration of insulin action (DIA) and peak](#Config-Builder-insulin-dia) to choose a value.
- **Peak**: 35 to 120 minutes.

The **IOB** (insulin on board) and **Activity** curves shown at the bottom of the editor update as you change the values, so you can see straight away how your settings shape the insulin action.

More information to understand the Insulin Profile as shown in **AAPS** [here](#AapsScreens-insulin-profile).

(Config-Builder-insulin-change-active)=
### Canviar la insulina en ús (DIA o pic)

The insulin marked **ACTIVE** is the one your running profile uses. Els seus camps estan en gris: no la podeu editar ni eliminar. Així, el nom de la insulina que es mostra al perfil actiu sempre coincideix amb la configuració que realment s'utilitza.

Per canviar la DIA o el pic que feu servir:

1. Open **Manage → Insulin settings**. If the screen opens read-only (a **✏️ pencil** in the top bar), tap the pencil and unlock your settings.
2. Tap **+** (_Add new insulin_). **AAPS** creates a copy of the insulin shown on screen.
3. Set the new **Peak** and/or **DIA**, then tap the save icon (top right).
4. Tap **▶** (_Activate insulin_) and confirm. The new insulin becomes **ACTIVE**.

```{admonition} The name includes peak and DIA
:class: note
**AAPS** adds the peak, DIA and concentration to the insulin name automatically (for example _Fiasp 55m 8h U100_), so you can tell your configurations apart at a glance.
```

Podeu eliminar la insulina antiga quan ja no estigui activa.

### The "Load peak from" presets

In **AAPS** 4 there is no list of insulin types to choose from. Totes les insulines fan servir la mateixa corba d'activitat exponencial; només en canvien el **Pic** i la **DIA**. Els valors predefinits de **Carregar el pic de** a l'editor d'insulina omplen amb un sol toc el pic recomanat per a les insulines més habituals (la petita ⓘ al costat de **Carregar el pic de** les mostra amb els seus valors de pic). Després encara podeu ajustar el **Pic** i la **DIA**.

Canvieu el pic respecte al valor recomanat només si enteneu quin efecte té. El [gràfic de la corba d'insulina](#AapsScreens-insulin-profile) us ajuda a entendre les corbes.

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

AAPS models the timeline of insulin action with a mathematical formula, configured using **DIA** and the closely related **peak** settings. La DIA és la durada teòrica fins que l'IOB arriba a zero, i el pic és el moment en què l'efecte de la insulina és més fort. This yields an IOB curve and an activity curve, which is simply the **rate** of IOB decay.

Consider that when AAPS is looping, it's normal to have periods of [zero-temping](#Open-APS-features-super-micro-bolus-smb). Aquesta insulina basal que falta es resta completament de l'IOB; per això, a la pràctica, l'IOB arriba a zero moltes hores abans que la DIA configurada. You can inspect [bolus IOB and basal IOB](#aaps-screens-iob-cob-basal-sens) separately from the main screen.

To configure DIA and peak, tap **Manage** in the main screen, and then tap **Insulin settings**. AAPS mostra la configuració d'insulina activa així:

![Sample insulin configuration](../images/manage/insulin_profile.png)

In this example, the peak setting is 55 minutes, DIA is 8 hours and [insulin concentration](#Insulin-Concentration) is the standard 100 IU/mL.

A causa de l'efecte de les basals temporals a zero explicat més amunt i de la fórmula que AAPS fa servir per a la reducció de l'IOB, la majoria d'usuaris configuren una DIA clarament més alta que en els sistemes comercials. In general, many people find that a **DIA** of 9h works well for them. Quan tingueu més experiència amb AAPS i un perfil ben ajustat, podeu provar de trobar una DIA i un pic personalitzats amb la informació següent.

````{admonition} Details on the impact of DIA and peak configuration
:class: dropdown

Since the basal rate has an indirect influence on IOB decay in AAPS, it follows that too high basal rates can mask too high DIA, and vice versa. It makes sense to first carefully tune basal rates before adjusting DIA and peak. Additionally, consider that the DIA and peak settings interact, in the sense that the effect of DIA depends on peak, and vice versa.

These charts show the exact impact of DIA and peak on the IOB curves, across the range of allowed values.

Adjusting DIA:

```{image} ../images/Profile/iob_remaining_static_peak.png
:width: 400px
```

Adjusting peak:

```{image} ../images/Profile/iob_remaining_static_dia.png
:width: 400px
```

Finally, a comparison adjusting DIA and peak in parallel. The logic here is that both values are adjusted in the same relative amounts, so that `49/35 ~ 7/5`. Or similarly, `120/93 ~ 9/7`. The intervals will be consistent regardless of the baseline DIA or peak, as long as the relative change is the same for both.

```{image} ../images/Profile/iob_remaining_uniform.png
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
## Origen glucèmia
Select the blood glucose source you are using. Vegeu la pàgina [Origen glucèmia](../Getting-Started/CompatiblesCgms.md) per a més informació sobre la configuració.

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
- Random BG - generates random BG data for testing. Només es pot activar en una compilació d'enginyeria (desenvolupador) amb la **Bomba virtual**, de manera que en una instal·lació normal d'**AAPS** no es pot fer servir.

## Smoothing

![Configuration > Smoothing](../images/v4/Configuration/configuration_smoothing.png)

See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

## Calibració

Choose how **AAPS** treats the values it receives from your sensor:

- **No calibration**: the sensor values are used as they are. Feu-lo servir quan el sensor ja ve calibrat de fàbrica i és precís. Aquesta és l'opció per defecte.
- **Linear calibration**: **AAPS** corrects the sensor values with a slope and an offset that it computes from your fingerstick entries.

How to use **Linear calibration**:

1. Select **Linear calibration** in the **Calibration** category.
2. When you insert a new sensor, log the sensor change: use **Log sensor change** on the calibration screen, or enter a CGM sensor insert in the Careportal. This tells **AAPS** when the sensor session started. If **AAPS** notices a gap of more than 30 minutes in the readings, it may ask you to mark a sensor change; this prompt appears on the master only, not on a client.
3. Open the plugin and tap **Add calibration**. Enter your fingerstick value. **AAPS** pairs it with the sensor value from the last 10 minutes.

A calibration is accepted only when:

- a sensor change is logged and at least **2 hours** have passed since then (warm-up),
- your glucose is stable. If it changes too fast, the dialog tells you and shows the limit,
- there is a CGM reading from the last 10 minutes,
- it is for the current moment. You cannot enter older fingerstick values.

How the correction works:

- **AAPS** draws a straight line through the pairs of the current sensor: `corrected value = slope × sensor value + offset`.
- Newer pairs count more than older ones: a pair that is 2 days old counts about 37 %, a 4-day-old pair about 14 %. The line therefore follows your sensor as it drifts.
- At least **2 pairs** are needed.
- If the pairs are close together (less than 54 mg/dL / 3 mmol/L apart), only the values are shifted (offset, no slope).
- The slope is kept between 0.55 and 1.6. A slope outside this range is limited to the nearest value.
- Safety limit: if the correction at 100 mg/dL (5.5 mmol/L) would be more than ±30 mg/dL (1.7 mmol/L), no correction is applied. This protects you from a wrong entry.

What it changes:

- The corrected value is used everywhere: the BG on the main screen, the graph and the loop. The sensor readings themselves are not changed. The correction is applied on top, also to the earlier readings of the current sensor.
- A new sensor change starts from zero. Pairs from earlier sensors no longer count.
- On the graph, a calibration is shown as a marker at the fingerstick value.
- Calibrations are synchronized through Nightscout, so your clients show the same corrected values.

Check and remove entries:

- **Open plugin** shows the status (for example _Slope 0.85, mid-range correction -0.4_), a chart of your pairs with the line, and the list of entries.
- If an entry is wrong (for example, you had sugar on your finger), tap the bin icon next to it. The line is calculated again at once.

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
## Bomba
Seleccioneu la bomba que feu servir. See [Compatible pumps](../Getting-Started/CompatiblePumps.md) page for more setup information.

![Configuration > Pump](../images/v4/Configuration/configuration_pump_list_1.png)

Desplaceu-vos cap avall per veure tots els controladors de bomba:

![Configuration > Pump, continued](../images/v4/Configuration/configuration_pump_list_2.png)

![Configuration > Pump, continued](../images/v4/Configuration/configuration_pump_list_3.png)

![Configuration > Pump, end of the list](../images/v4/Configuration/configuration_pump_list_4.png)

When you select another pump, **AAPS** asks you to confirm the change:

![Switch plugin confirmation](../images/v4/Pumps/switch_plugin_dialog.png)

- [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
- Dana R Korean (per a la bomba DanaR coreana)
- Dana Rv2 (bomba DanaR amb una actualització de firmware no oficial)
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
  - per a bombes que encara no tenen cap controlador

(config-builder-wrong-pump-data)=
### Missatge: «Dades procedents d'una altra bomba»

**AAPS** remembers the pump it is connected to (pump type and serial number). Si rep dades d'una altra bomba, per exemple després de substituir la vostra bomba per una de nova del mateix model, mostra aquest missatge i ignora les dades d'aquesta bomba:

![Data is coming from different pump](../images/Screen_DifferentPump.png)

To use the new pump, change the pump driver: select **Virtual pump**, confirm, then select your pump again. **AAPS** then registers the pump it is connected to now.

(Config-Builder-sensitivity-detection)=

## Detecció de sensibilitat

![Configuration > Sensitivity detection](../images/v4/Configuration/configuration_sensitivity_detection.png)

Seleccioneu el tipus de detecció de sensibilitat. For more details of different designs please [read on here](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). Analitza les dades històriques sobre la marxa i fa ajustos si detecta que sou més sensibles a la insulina que de costum (o, al contrari, més resistents). More details about how the sensitivity ratio itself is calculated can be found in [Key AAPS Features > Autosens](#Open-APS-features-autosens).

You can view your sensitivity on the main screen in an [additional graph](#AapsScreens-section-g-additional-graphs), by selecting SENS% and watching the white line. Note, you need to be in [Objective 8](#objectives-objective8) in order to let Sensitivity Detection/[Autosens](#Open-APS-features-autosens) automatically adjust the amount of insulin delivered. Abans d'arribar a aquest objectiu, el percentatge d'Autosens / la línia del gràfic només es mostra a títol informatiu.

### Configuració absorció
If you use Oref1 with **SMB** you must change **min_5m_carbimpact** to 8. The value is only used during gaps in **CGM** readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause **AAPS** to decay COB. At times when [carb absorption](../DailyLifeWithAaps/CobCalculation.md) can't be dynamically worked out based on your blood's reactions it inserts a default decay to your carbs. Bàsicament, és una mesura de seguretat.

(Config-Builder-aps)=
## APS

![Configuration > APS](../images/v4/Configuration/configuration_aps.png)

Seleccioneu l'algoritme APS que voleu per als ajustos de la teràpia. You can view the active detail of the chosen algorithm with **Open plugin**.
- OpenAPS AMA
  - Advanced Meal Assist: algoritme antic que ja no es recomana.
  - En poques paraules, l'avantatge és que, després de posar-vos un bolus d'àpat, el sistema pot pujar la basal temporal més ràpidament SI introduïu els carbohidrats de manera fiable.
- [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb)
  - Super Micro Bolus: l'algoritme més recent, recomanat per a tots els usuaris.
  - In contrast to AMA, SMB does not use temporary basal rates to control glucose levels, but mainly small **Super Micro Boluses**.
  - Note : It is recommended to use this algorithm from the beginning, even though you will not actually get SMBs delivered until [Objective 9](#objectives-objective9).
- [Auto ISF](#Open-APS-features-auto-isf)
  - Algoritme experimental per a usuaris avançats. Només apareix a la llista quan s'han completat els objectius.

If switching from AMA to SMB algorithm, _min_5m_carbimpact_ must be changed manually to **8** (default value for SMB) in [Settings → Absorption settings](#Preferences-min_5m_carbimpact).

## Llaç

This module cannot be disabled as it is a core part of **AAPS**.

![Configuration > Loop](../images/v4/Configuration/configuration_loop.png)

## Restriccions

![Configuration > Constraints](../images/v4/Configuration/configuration_constraints.png)

### Objectius

**AAPS** has a learning program (a series of objectives) that you have to fulfill step by step. Us ha de guiar de manera segura en la configuració d'un sistema de llaç tancat.

See [Objectives](../SettingUpAaps/CompletingTheObjectives.md) page for more information.

## Comunicació

In this category (called **Synchronization** in **AAPS** v3), you choose if/where you want **AAPS** to send your data to.

![Configuration > Communication](../images/v4/Configuration/configuration_communication.png)

Desplaceu-vos cap avall per veure la resta de la llista:

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
### Apps complementàries externes

Broadcasts **AAPS** status data on the phone so that other apps installed on it can display it — for example watch or widget companion apps. L'emissió inclou la glucèmia i la tendència, IOB, COB, basal i basal temporal, nom del perfil, estat del llaç, bateria del telèfon i pila de la bomba, nivell del reservori i progrés del bolus. Activeu-ho només si una aplicació complementària que feu servir demana aquestes dades.

Apps known to read this broadcast are [WatchDrip+](https://bigdigital.home.blog/) (Xiaomi and Amazfit watches), [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) (Wear OS complications and widgets, and Android Auto through GlucoDataAuto) and the G-Watch app. Their setup is described on [Smartwatches and AAPS](#watches-external-companion-apps). Some of them also use **Send status to xDrip+** from the **xDrip** plugin above for a status line with IOB and COB.

In earlier versions this plugin was called **Samsung Tizen**, after the [G-Watch app for Samsung Tizen watches](#Watchfaces-tizen) it was first made for.

### Garmin

Connexió amb un dispositiu Garmin (Fenix, Edge...)
## Tractaments
Open the **menu** (☰) and select [Treatments history](#aaps-screens-treatments) to see the treatments that have been recorded. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through **Treatments → Carbs** in the bottom navigation (see [Carbs](#screens-bolus-carbs)).

## General

In **AAPS** 4 the **General** category of **Configuration** only lists **Autotune**. Les altres funcions descrites a continuació estan sempre disponibles i ja no cal activar-les aquí; cada paràgraf indica on trobar-les.

![Configuration > General](../images/v4/Configuration/configuration_general.png)

### Resum

The [main screen](#AapsScreens-the-homescreen) of **AAPS** is not a plugin any more and has no settings of its own in **Configuration**. The options that used to be here are in **Settings** (gear icon): [Show notes in dialogs](#Preferences-show-notes-field-in-treatments-dialogs), [Status lights](#Preferences-status-lights) and the [Bolus percentage](#Preferences-deliver-this-part-of-bolus-wizard-result) used by the bolus wizard. The super bolus option of **AAPS** 3.x is [not available as a setting](#Preferences-advanced-settings-overview) in **AAPS** 4.

(Config-Builder-actions)=
### Accions

The Actions tab of **AAPS** 3.x no longer exists. Its buttons are now in the **Manage** sheet — see [Where did the Actions tab go?](#screens-action-tab).

### Automatització

**Manage → Automation** lets you manage your [Automations](../DailyLifeWithAaps/Automations.md), starting at [Objective 10](#objectives-objective10).

(Config-Builder-sms-communicator)=
### Comunicador SMS
Allows remote caregivers to control some **AAPS** features via SMS, see [SMS Commands](../RemoteFeatures/SMSCommands.md) for more setup information.

### Aliments
**Manage → Food** displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the **AAPS** calculator. (només visualització)

(Config-Builder-autotune)=
### Autotune

You can enable Autotune, see [here](../AdvancedOptions/Autotune.md).

### Manteniment

Open the **menu** (☰) and select **Maintenance** to export / import settings and manage log files.

![Maintenance screen, log files](../images/screens/maintenance.png)

![Maintenance screen, file management](../images/screens/maintenance_2.png)

![Maintenance screen, database management](../images/screens/maintenance_3.png)

### Configurador

Now called **Configuration**: this current page.