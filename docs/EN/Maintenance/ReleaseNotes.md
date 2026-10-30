
# Release notes

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Please follow the instructions in the [update manual](UpdateToNewVersion) to update to a new version. The troubleshooting section also addresses the most common difficulties encountered when updating **AAPS** on the update manual page.

```{admonition} Upgrading from AAPS v3?
:class: tip
See [What changed in AAPS v4](V4Changes.md) for the notable behavioral changes — features that have moved, been renamed, or been removed.
```

You will receive a notification like this when a new update is available:

![Update info](../images/AAPS_LoopDisable90days.png)

If you do not update until expiration date **AAPS** will switch to Open Loop.

See [End of life](EndOfLife.md) for AAPS version end dates.

**Do not ignore the notification.** New versions of **AAPS** provide important safety fixes. Therefore, every **AAPS** user must update to the latest version as soon as possible. This an effort to try to improve the safety for each **AAPS** user and the DIY community. Thank you for your understanding.

(maintenance-android-version-aaps-version)=

## Android version and AAPS version

If your smartphone uses an Android Version older than Android 12 you will not be able to use AAPS v3.4 and up as it requires at least Android 12.

In order to allow users with older Android to use older version of AAPS new versions were pushed which only change version verification. No other improvements are included.

Find your Android version in the table below and use the matching **AAPS** version. The code is downloaded from <https://github.com/nightscout/AndroidAPS> using the branch shown.

| Your Android version | AAPS version to use | Branch to download |
| -------------------- | ------------------- | ------------------ |
| Android 12 and up    | Latest version      | [master](https://github.com/nightscout/AndroidAPS) (default) |
| Android 11           | **3.3.2.1**         | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10        | **3.2.0.4**         | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8            | **2.8.2.1**         | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7            | **2.6.2**           | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2) |

## WearOS version

- AAPS requires WearOS 3.0, 3.2 or 3.5 (Android 11, API level 30) or newer. WearOS 2 watches are not supported.

```{tip}
WearOS 5, API level 34 (Android 14) has [limitations](#BuildingAapsWearOs-WearOS5).
```

(latestrelease)=

(version4000)=

## Version 4.0.0.0

Beta 1 release date: 08-10-2026

```{admonition} Beta version
:class: warning
Version 4.0.0.0 is currently available as **4.0.0-beta1**, a test version, not the final release. If you are upgrading from **AAPS** v3, read [What changed in AAPS v4](#v4-changes) first.
```

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

Full changelog: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0-beta1>

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
- Cleanup worflow @vanelsberg 
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
- Medtrum: Fix activation path by preveting double fill @MilosKozak
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

### Before upgrading:
* This version requires Google Android 12.0 or above. Check your phone version before attempting to update.
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
* various improvemnts @MilosKozak @Philoul @olorinmaia

### Automation
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

## Version 3.3.2.0

Release date: 27-03-2025

### How to upgrade

* [Android Studio version called "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) or above is required to build this version. If you already built a 3.3.x version, you need to upgrade Android Studio again.

(version-enforcement)=

### Starting this version, notification and version enforcement has been simplified and softed and works following way:
*  No expiration when device is offline (if no connection to the internet). It means no 60 and 90 days grace periods anymore.
*  After expiration LGS mode is enforced
*  You'll receive warning/notifications less often:
   - 28+ days remaining: every 7 days
   - 27-14 days remaining: every 3 days
   - then once a day
   - Notification will be generated after noon to not bother you during nights
* There are only 2 kinds of notification
   - New version available (has no effect on AAPS)
   - Application is expiring on some date in the future (still no effect on AAPS) / has expired (AAPS will turn into LGS mode)

### News

* SMS RESTART command @MilosKozak
* Watch Profile switch parameters @olorinmaia
* Dark mode AAPS V2 watchface @olorinmaia
* G7 data exchange improvements @olorinmaia
* Widget configuration @MilosKozak
* Radiobuttons UI improvements @olorinmaia
* Automation: position choosing from map @MilosKozak
* Version visible on main screens @MilosKozak
* Compilation with existing git system in enforced (no zip downloads)
* Show version on main screen @MilosKozak
* Tidepool upload improvements @ConstantinMatheis

### Bug fixes

* Dash unbonding fix @Andreas
* Garmin fixes @robertbuessow @suside
* Fix of IOB displaying in dialogs @olorinmaia
* Objectives spelling and validation improvements @MilosKozak
* Fixed rendering of emulated TBRs @MilosKozak
* Fixed bypassing security @tdrkDev

## Version 3.3.1.3

Release date: 21-01-2025

### Bug fixes

* Dash: bonding is optional (default off) @MilosKozak
* Equil: fixed bolud 10+U, alarm improvements @EquilHack
* Garmin: watch improvements @swissalpine
* Watch improvements @olorinmaia
* Control loop status from watch @tdrkDev
* Stability improvements

*  **New [setup of Authenticator](#sms-commands-authenticator-setup) may be needed.**

## Version 3.3.1.2

Release date: 15-01-2025

### How to upgrade

* [Android Studio version called "Ladybug Feature Drop"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) or above is required to build this version. **This is not the same as plain "Ladybug".** If you already built a 3.3.x version, you need to upgrade Android Studio again.

### Bug fixes

* Dash: use bonding on Android 15+
* Restored Dexcom button on Overview
* Equil: allowed remove non working pump
* Warn when DynISF Adjustment Factor is zero
* NSCv3: resolve websocket communication on phones with slightly different time
* SMS Commands: fix OneTimePassword. **New [setup of Authenticator](#sms-commands-authenticator-setup) may be needed.**
* Fix issue where some preferences could not be edited anymore.
* Fix reset of master password with virtual pump.
* Fixed import of large settings backup files.

## Version 3.3.1.0

Release date: 06-01-2025

### UI changes

* [Added colors to differentiate between AAPSClient and AAPSClient2](#RemoteControl_aapsclient) @MilosKozak
* Improved Users actions layout and icons

### Other functionalities

* New automation trigger : [steps count](#screen-heart-rate-steps) @Roman Rihter
* Allow to receive everything on NSCv3 full sync (including data previously not synced such as TBR) @MilosKozak
* NSClient v3 : make Announcement work (_i.e._ from AAPSClient to AAPS) @MilosKozak

### Technical changes & bug fixes

* Fix Insight crash @philoul
* Fix creation of extra-numerous deviceStatus entries in Nightscout @MilosKozak
* Fix carbs absorption @MilosKozak
* Fixed color of RadioButtons & CheckBoxes @MilosKozak
* Fixed bug in DynISF percentage migration @MilosKozak
* Resolved misplaced DynISF notification @MilosKozak
* Fixed bug in watchfaces @philoul

## Version 3.3.0.0

Release date: 29-12-2024

### Main features

* **[Dynamic ISF](../DailyLifeWithAaps/DynamicISF.md)** feature is no more a dedicated plugin, but is now included as an option of [OpenAPS SMB](#Config-Builder-aps) plugin, along with some changes in its behavior: 
  * **Profile Switch** and **Profile Percentage** is now taken into account for **Dynamic ISF** in respect of dynamic sensitivity strengthness
  * The average **ISF** of the last 24h is calculated and this value is used for bolus wizard and **COB** calculation. **Profile ISF** value is not used at all (except fallback when history data is not available)
  * DynamicISF documentation page has been rewritten. Please read the important section [Things to consider when activating Dynamic ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* [Enable “SMB always” and “SMB after carbs”](#Open-APS-features-enable-smb-always) for FreeStyle Libre 2 and Libre 3 users
  * Note : Requires latest version of xDrip+ or Juggluco.
* New **Automation** triggers
* Unattended settings exports

### How to upgrade

* Before upgrading: 
  * **<span style="color:red">This version requires Google Android 11.0 or above</span>**. Check your phone version before attempting to update.
  * If you use the “old” Combo driver with ruffy device, migrate to the [native Combo driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) before update
  * You will lose your [additional graphs](#AapsScreens-section-g-additional-graphs) on the HomeScreen during upgrade: make a manual note of your current configuration if needed, so that you can recreate them after upgrade.
  * The [Bluetooth connectivity issues some people encounter on Android 15](../Getting-Started/Phones.md) are **NOT** solved by this release (this is an Android issue, not **AAPS**). A fix is available in 3.3.1.2.
  * The BYODA button on the homescreen is no longer available due to Android limitations. This is fixed in 3.3.1.2.
* Update instructions: follow the [Update to a new version](../Maintenance/UpdateToNewVersion.md) guide.
  * [Android Studio version called "Ladybug"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) or above is required to build this version. If you already have an older version of Android Studio installed, you may need to <span style="color:red">configure the JVM version to 21</span>. See [Troubleshooting Android Studio > Incompatible Gradle JVM](#incompatible-gradle-jvm).
  * Tip - if you do not want to lose your **AAPS** history ALWAYS do an UPDATE and NOT an UNINSTALL/INSTALL. As a precaution, back up your current **AAPS** settings and old APK to revert to an old version should anything go wrong. 
* After upgrading:
  * Set the new [“AAPS directory” setting](#preferences-maintenance-logdirectory), in the Maintenance tab.

### Detailed changes

#### CGMs and Pumps

* [Enable “SMB always” and “SMB after carbs”](#Open-APS-features-enable-smb-always) for FreeStyle Libre 2 and Libre 3 users @MilosKozak
* [Medtrum driver](../CompatiblePumps/MedtrumNano.md) improvements @jbr77rr
  * Communication improvements, including new setting to workaround problems on some smartphones
  * Show reservoir level at start of activation
  * Fix bug where activation returns to start and user cannot finish the activation
  * Feedback for sync status and other clarifications
* New supported pump : [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* New supported CGMs : [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer and [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Insight driver rewritten to kotlin @Philoul
* Removed old ruffy dependent Combo driver

#### UI changes

* [Simple mode](#preferences-simple-mode) activated by default on fresh install @MilosKozak
* New [QuickWizard](#Preferences-quick-wizard) options @radicalb
  * The QuickWizard now uses the same logic for bolus calculation and display as the calculator. You can now use the “carb time” field in QuickWizard  to pre-bolus.
* New [graph scale menu](#aaps-screens-main-graph); [additional graphs menu](#AapsScreens-activate-optional-information) UI improvements @Philoul
* [ConfigBuilder layout improvement](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Sections are now collapsed by default. Use arrow to expand.
* Variable sensitivity visible in AAPSClient
* BolusWizard UI improvements @kenzo44
* Fix text display in pump tabs when using light theme @jbr77rr

#### Other functionalities

* [Unattended settings exports](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* New [Automation trigger](#automations-automation-triggers) @vanelsberg
  * Pod Activation (patch pump only)
* New [Automation triggers](#automations-automation-triggers) @jbr77rr
  * Cannula age, Insulin age, Battery age, Sensor age, Reservoir level, Pump battery level
* Allowing negative carbs entry @MilosKozak
* New Parameter [“AAPS directory”](#preferences-maintenance-settings) to choose a storage directory different from the default one.
* Allow for [insulin records when pump suspended](#aaps-screens-buttons-insulin) @jbr77rr
* Updated [Objective 2](#objectives-objective2) @MilosKozak
  * Check that master password is set and known
* Random carbs in test mode @MilosKozak
* Fixed bug in TDD calculation @MilosKozak
* SMS Commands : allow to [**not** send SMS for profile change](#sms-commands-too-many-messages) coming from NS @MilosKozak

#### Smartwatches

* wear and watchfaces improvement @Philoul @MilosKozak @olorinmaia
* Watch tiles from Automation actions @Philoul
* Combined watchfaces from AAPS, AAPSClient and AAPSClient2 to monitor more patients @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

#### Technical changes

* [log files location change](#Accessing-logfiles-accessing-logfiles)
* new internal modules structure @MilosKozak
* split persistence layer from main code @MilosKozak
* build files rewritten to kts @MilosKozak
* algorithms rewritten to kotlin for better performance @MilosKozak
* tons of new unit tests @MilosKozak and others
* more code converted to kotlin @MilosKozak
* new preferences management, xml \-\> kotlin @MilosKozak
* new CI configuration, run CI on own servers @MilosKozak
* libraries updated to latest version, toml @MilosKozak
* migration to kotlin 2.0, java 21 @MilosKozak

(version3204)=

## [Version 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Release date: 27-02-2024

This version is the last one supporting Android 10. If you cannot upgrade to Android 11, [update AAPS to 3.2.0.4](#update-aaps-3204).

### Changes

- xDrip G7 support
- Medtrum fixes
- Automation icon fix
- Passing objective 1 fix

(version3200)=

## Version 3.2.0.0 dedicated to @Philoul

Release date: 23-10-2023

### Important hints

- NS 15 is required
- While using websockets in NS v3 plugin treatments entered through NS UI (plus button) and other applications using v1 API are not sent to AAPS. This will be fixed in future release of NS. Always use the same client (v1 or v3) in AAPS and AAPSClient until NS fully switch to v3 internally. The same is valid for AAPS and AAPSClient itself.
- Websockets in v3 plugin work in a similar manner as v1 plugin. Without websockets enabled AAPS schedules regularly downloads from NS which should lead to lower power consumption because NS is not permanently connected. On the opposite side it means delays in exchanging data. Please read [here](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) the important comments from the dev team before you use it!
- If you are using xdrip as cgm source you must select it again after update due to internal changes
- Tidepool can be used as a replacement of NS to pass first objective
- If you send to xDrip+ you must configure xDrip synchronization plugin. In order to receive BGs from AAPS in xDrip, “xDrip+ Sync Follower” must be selected as source
- If you want to switch to ComboV2 driver, Ruffy must be uninstalled and pump paired again to AAPS
- In order to use DynISF plugin you have to start Objective 11 (all previous must be in finished state to allow start of 11)


### Changes

- EOPatch2 / GlucomenDay pump driver @jungsomyeonggithub @MilosKozak
- ComboV2 pump driver (no need of Ruffy) @dv1
- Medtrum Nano driver @jbr7rr
- Korean DanaI support @MilosKozak
- Glunovo CGM support @christinadamianou
- G7 support @MilosKozak @rICTx-T1D @khskekec
- NSClient v3 plugin @MilosKozak
- Tidepool support @MilosKozak
- Smoothing plugin @MilosKozak, @justmara, Exponential smoothing @nichi (Tsunami), Average smoothing @jbr7rr
- DynamicISF plugin @Chris Wilson, @tim2000s
- Garmin watchface & HeartRate support @buessow
- New logo @thiagomsoares
- New watchface @Philoul
- fixed tons of issues from 3.1 version
- allow add notes on more places @Sergey Zorchenko
- UI fixes @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- new SMS commands LOOP LGS/CLOSED @pzadroga
- wear translations @Andries-Smit
- xdrip communication moved to separate module @MilosKozak
- internal changes: updated libs versions, rx3 migration, new modules structure @MilosKozak
- Diaconn driver fixes @miyeongkim
- more database maintenance options @MilosKozak
- AAPSClient provides info if main phone is plugged in electricity @MilosKozak
- Change in BolusWizard. If CGM is not available percentage is ignored (ie 100% is used)
- migration to kts build system @MilosKozak
- improved CI integration @MilosKozak @buessow
- tests cleanup @ryanhaining @MilosKozak
- new 110k+ lines of code, changed 240k lines, 6884 changed files

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)=
### Important comments on using v3 versus v1 API for Nightscout with AAPS

v1 is the old protocol used for exchanging data between NS web site and NS server. It has many limitations
- v1 sends only 2 days of data
- v1 send all 2 days data on every reconnection
- using websockets is mandatory = permanent connection, more battery compsumption
- during frequent disconnects to NS connection is paused for 15 minutes to prevent high data usage

v3 is new protocol. More safe and efficient
- while using tokens you can better define access rights
- protocol is more efficient on both sides (AAPS & NS)
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

(version3100)=

## Version 3.1.0

Release date: 19-07-2022

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

## Version 3.0.0

Release date: 31-01-2022

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

## Version 2.8.2

Release date: 23-01-2021

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

(version-2811)=
(important-hints-2-8-1-1)=

## Version 2.8.1.1

Release date: 12-01-2021

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

(Releasenotes-version-2-8-0)=

## Version 2.8.0

Release date: 01-01-2021

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

(Releasenotes-version-2-7-0)=

## Version 2.7.0

Release date: 24-09-2020

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

(Releasenotes-version-2-6-1-4)=

## Version 2.6.1.4

Release date: 04-05-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

## Version 2.6.1.3

Release date: 03-05-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

## Version 2.6.1.2

Release date: 19-04-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

## Version 2.6.1.1

Release date: 06-04-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

## Version 2.6.1

Release date: 21-03-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

(Releasenotes-version-2-6-0)=

## Version 2.6.0

Release date: 29-02-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

## Version 2.5.1

Release date: 31-10-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

(Releasenotes-version-2-5-0)=

## Version 2.5.0

Release date: 26-10-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

## Version 2.3

Release date: 25-04-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

## Version 2.2.2

Release date: 07-04-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

## Version 2.2

Release date: 29-03-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

## Version 2.1

Release date: 03-03-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

## Version 2.0

Release date: 03-11-2018

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

## Version 1.0

```{admonition} First version of **AAPS**
:class: note

The first test version started in 2015 and the first release was in 2016.

The exact chronology of these releases is not available at the moment but as this question has been asked several times we document it here.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
