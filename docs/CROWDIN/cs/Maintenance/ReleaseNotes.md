
# Poznámky k vydání

Please follow the instructions in the [update manual](UpdateToNewVersion). The troubleshooting section also addresses the most common difficulties encountered when updating **AAPS** on the update manual page.

You will receive the information as soon as a new update is available. If you do not update until expiration date **AAPS** will switch to Open Loop.

![Informace o aktualizaci](../images/AAPS_LoopDisable90days.png)

This prompt is important, should not be ignored and is not intended to bug you. New versions of **AAPS** do not only provide new features but also important safety fixes. Therefore it is necessary that every **AAPS** user updates to the latest version a.s.a.p. Unfortunately there are still bug reports from very old versions so this an effort to try to improve the safety for each **AAPS** user and the DIY community. Thank you for your understanding.

```{admonition} First version of **AAPS**
:class: note

První testovací verze byla spuštěna již v roce 2015. V roce 2016 byla vydána první verze.

The chronology of these releases is not available at the moment but as this question is asked several times we document it here.

```
![AAPS 1.0](../images/update/AAPS1.0.png)

(maintenance-android-version-aaps-version)=

## Verze Androidu a verze AAPS

If your smartphone uses an Android Version older than Android 11 you will not be able to use AAPS v3.3 and up as it requires at least Android 11.

Aby bylo uživatelům se starším Androidem umožněno používat starší verzi AAPS, byla upravena pouze kontrola verzí. Jiné změny neobsahuje.

### Android 11 and up

- Použijte poslední verzi AAPS
- Stáhněte zdrojový kód AAPS z <https://github.com/nightscout/AndroidAPS>

### Android 9,10

- Use AAPS version **3.2.0.4**
- Download AAPS Code from <https://github.com/nightscout/AndroidAPS> branch 3.2.0.4

### Android 8

- Použijte AAPS verze **2.8.2.1**
- Stáhněte zdrojový kód AAPS z <https://github.com/nightscout/AndroidAPS> branch 2.8.2.1

### Android 7

- Použijte AAPS verze **2.6.2**
- Stáhněte zdrojový kód AAPS z <https://github.com/nightscout/AndroidAPS> branch 2.6.2

## Verze pro WearOS

- AAPS requires at least WearOS API level 28 (Android 9)

```{tip}
WearOS 5, API level 34 (Android 14) has [limitations](#BuildingAapsWearOs-WearOS5).
```

(version3300)=
## Version 3.3.2.0

Release date: 27-03-2025

### How to upgrade

* [Android Studio version called "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) or above is required to build this version. If you already built a 3.3.x version, you need to upgrade Android Studio again.

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

* **[Dynamic ISF](../DailyLifeWithAaps/DynamicISF.md)** feature is no more a dedicated plugin, but is now included as an option of [OpenAPS SMB](#Config-Builder-aps) plugin, along with some changes in its behaviour:
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

#### Chytré hodinky

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

### Změny

- xDrip G7 support
- Medtrum fixes
- Automation icon fix
- Passing objective 1 fix

(version3200)=

## Verze 3.2.0.0 věnována @Philoul

Release date: 23-10-2023

### Důležitá poznámky

- Je vyžadován NS verze 15
- Při používání websocketů v Nighscout pluginu v3, ošetření zadaná prostřednictvím NS (tlačítko +) a dalšími aplikacemi využívajícími API v. 1 nejsou do AAPS odeslána. To bude opraveno v některé následující verzi NS. Always use the same client (v1 or v3) in AAPS and AAPSClient until NS fully switch to v3 internally. To samé platí i pro AAPS a samotný AAPSClient.
- Websockets in v3 plugin work in a similar manner as v1 plugin. Without websockets enabled AAPS schedules regularly downloads from NS which should lead to lower power consumption because NS is not permanently connected. On the opposite side it means delays in exchanging data. Please read [here](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) the important comments from the dev team before you use it!
- If you are using xdrip as cgm source you must select it again after update due to internal changes
- Tidepool can be used as a replacement of NS to pass first objective
- If you send to xDrip+ you must configure xDrip synchronization plugin. In order to receive BGs from AAPS in xDrip, “xDrip+ Sync Follower” must be selected as source
- If you want to switch to ComboV2 driver, Ruffy must be uninstalled and pump paired again to AAPS
- In order to use DynISF plugin you have to start Objective 11 (all previous must be in finished state to allow start of 11)


### Změny

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

(Releasenotes-important-hints-3-1-0)=
### Důležitá poznámky

- after update uninstall Wear app and install new version
- Omnipod users: update on pod change !!!

### Změny

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
### Důležitá poznámky

- **Minimální verze Androidu je nyní 9.0.**
- **Data is not migrated to new database.** Do not complain, it's so huge change so it's simply not possible. Thus after update IOB, COB, treatments etc. will be cleared. You have to create new [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) and start with zero IOB and COB. Aktualizaci pečlivě naplánujte!!! Nejlépe v okamžiku, kdy nebude žádný aktivní inzulín a sacharidy
- Použijte stejnou verzi AAPS a NSClienta

**Make sure to check and adjust settings after updating to 3.0 as described** [here](../Maintenance/Update3_0.md).

### Příprava nasazení

**V posledních dvou dnech před nasazením nové verze:**

- vypněte nahrávání dat z Dexcomu do Nightscoutu
- Pokud používáte G5/G6 a xDrip jako přijímač, musíte aktualizovat xDrip na noční verzi novější, než je z 14. ledna 2022
- if you are using G5/G6 switching to BYODA as collector is recommended to take advantage of back-smoothing (you can still use xDrip for other purposes, xDrip can receive data from BYODA)

### Změny

- 100k lines changed, 105k new lines of code

- [Omnipod DASH support](../CompatiblePumps/OmnipodDASH.md) @AdrianLxM @avereha @bartsopers @vanelsberg

- [Dana-i support](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

- [Podpora DiaconnG8](../CompatiblePumps/DiaconnG8.md)

- Podpora Glunovo

- Interní databáze vylepšena na Room @MilosKozak @Tebbe @AdrianLxm @Philoul @andyrozman

- Hodně kódu převedeno do Kotlinu @MilosKozak

- Nové interní rozhraní pro ovládání pump

- NSClient přepsán kvůli lepší synchronizaci a umožnění většího detailu v nastavení @MilosKozak

  - Odstranění záznamu z NS není povoleno (pouze zneplatnění prostřednictvím NSClienta)
  - Změna záznamu z NS není povolena
  - Nastavení synchronizace je dostupné bez engineering mode (pro rodiče)
  - Schopnost znovu synchronizovat data

- Změna chování při přepínání profilu. Now is distinguished between Profile Switch *(something that user wants)* and Profile change *(when change is executed by pump)* @MilosKozak @Tebbe

- Můžete spustit dočasný cíl aktivita během spuštění změny profilu @MilosKozak

- NSProfile is gone, just local profile can be used. Local profile can be [synced to NS](#Update3_0-nightscout-profile-cannot-be-pushed). @MilosKozak.

- Forgotten [master password reset procedure](#Update3_0-reset-master-password) @MilosKozak

- Stopování uživatelských akcí @Philoul

- Nová automatizace spouštěče TempTargetValue @Philoul

- New automation Careportal action @Philoul

- Add Bolus reminder in Carbs Dialog @Philoul

- Bolus Wizard improvement

- Vylepšení uživatelského rozhraní @MilosKozak

- Nová uživatelská tlačítka pro automatizaci @MilosKozak

- Nový vzhled automatizace @MilosKozak

- Vylepšeno a opraveno prohlížení historie @MilosKozak

- Odstraněn cíl 9 @MilosKozak

- Opravena chyba související s nestabilními daty z CGM

- Vylepšení komunikace s pumpami DanaR a DanaRS @MilosKozak

- Integrace CircleCI @MilosKozak

- Změna umístění souborů:

  - /AAPS/extra (vývojářský režim)
  - /AAPS/logs /AAPS/exports
  - /AAPS/preferences

## Version 2.8.2

Release date: 23-01-2021

- Please see also [important hints for version 2.8.1.1](#version-2811) below.

### Změny

- vylepšení stability
- další vylepšení pro Android 8+
- vylepšené ikony
- vylepšení pro hodinky
- opravy NSClienta
- Poradce s bolusem nyní pracuje s ovládáním pumpy a NSClientem

## Version 2.8.1.1

Release date: 12-01-2021

(important-hints-2-8-1-1)=
### Důležitá poznámky

- Option **NS_UPLOAD_ONLY** has been forced ON for all 2.8.1 users.
- If you use NSClient to enter TT, carbs or profile switches you must turn it off in AAPS but **only in case your synchronization is working well** (ie. you don't see unwanted data changes like self modification of TT, TBR etc).
- ATTENTION: DO NOT do this if you have any other app handle treatments ( like xDrip broadcast/upload/sync...).
- POUZE NAHRÁVAT DO NS lze vypnout pouze pokud je zapnut vývojářský režim.

### Velké změny

- Vylepšení a opravy pro RileyLink, Omnipod a pumpy MDT
- vynucení NS_UPLOAD_ONLY
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
## Verze 2.8.0

Datum vydání: 01. 01. 2021

### Důležitá poznámky

- **Minimální verze Androidu je teď 8.0.** Pro starší verze Androidu lze stále použít verzi 2.6.1.4 ze starého úložiště kódů.
- [Objectives have changed.](#objectives-objective3) **Finish not completed objectives before update.**
- Repository location still on <https://github.com/nightscout/AndroidAPS> . If you are not familiar with git the easiest way for update is remove directory with AAPS and do a [new clone](../SettingUpAaps/BuildingAaps.md).
- Please use [Android Studio 4.1.1](https://developer.android.com/studio/) or newer to build the apk.

### Hlavní nové funkce

- [Omnipod Eros support](../CompatiblePumps/OmnipodEros.md) @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda and special thanks to @ps2 @itsmojo, everybody else involved in the Loop driver for Omnipod and @jlucasvt from GetRileyLink.org
- [bolus advisor](#Preferences-quick-wizard) & [eating reminder](#AapsScreens-section-j) @MilosKozak
- New watchface @rICTx-T1D
- Vylepšení připojení Dana RS @MilosKozak
- Odstraněno chování "Nezměněné hodnoty CGM" v SMB pro nativní aplikaci Dexcom
- New [Low Resolution Skin](#Preferences-skin)
- New ["Pregnant" patient type](#Open-APS-features-overview-of-hard-coded-limits) @Brian Quinion
- Nové rozložení NSClient pro tablety @MilosKozak
- NSClient transfer insulin, sensitivity and display settings directly from main AAPS @MilosKozak
- [Preferences filter](../SettingUpAaps/Preferences.md) @Brian Quinion
- Nové ikony <mailto:pumpy@Rig22> @@teleriddler @osodebailar
- New [insulin type Lyumjev](#Config-Builder-lyumjev)
- Vylepšení instalačního průvodce @MilosKozak
- Zlepšení zabezpečení @dlvoy
- Různé vylepšení a opravy @AdrianLxM @Philoul @swissalpine  @MilosKozak @Brian Chinon

(Releasenotes-version-2-7-0)=
## Verze 2.7.0

Datum vydání: 24. 09. 2020

**Make sure to check and adjust settings after updating to 2.7 as described** [here](../Maintenance/Update2_7.md).

You need at least start [objective 11 (in later versions objective 10!)](#objectives-objective10) in order to continue using [Automation feature](../DailyLifeWithAaps/Automations.md) (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in [objective 3](#objectives-objective3) yet, you will have to complete the exam before you can start objective 11. Neovlivní to cíle, které jste již dokončili. Splněné cíle zůstanou zachovány!

### Hlavní nové funkce

- interní použití vkládání závislostí, aktualizací knihoven, kódu přepsaného do kotlinu @MilosKozak @AdrianLxM
- využití modulů pro pumpy Dana @MilosKozak
- [new layout, layout selection](../DailyLifeWithAaps/AapsScreens.md) @MilosKozak
- new [status lights layout](#Preferences-status-lights) @MilosKozak
- [multiple graphs support](#AapsScreens-activate-optional-information) @MilosKozak
- [Profile helper](../SettingUpAaps/YourAapsProfile.md) @MilosKozak
- visualization of [dynamic target adjustment](#AapsScreens-visualization-of-dynamic-target-adjustment) @Tornado-Tim
- new [preferences layout](../SettingUpAaps/Preferences.md) @MilosKozak
- vylepšení SMB algoritmu @Tornado-Tim
- [Low glucose suspend mode](#Preferences-aps-mode) @Tornado-Tim
- [carbs required notifications](#key-aaps-features-minimal-carbs-required-for-suggestion) @twain47 @Tornado-Tim
- odstraněn plugin Ošetření (přesunut do pluginu Akce) @MilosKozak
- [new encrypted backup format](ExportImportSettings.md) @dlvoy
- [new SMS TOTP authentication](../RemoteFeatures/SMSCommands.md) @dlvoy
- [new SMS PUMP CONNECT, DISCONNECT](#SMSCommands-commands) commands @Lexsus
- lepší podpora nízkých bazálů na pumpách Dana @Mackwe
- drobná vylepšení pro pumpu Insight @TebbeUbben @MilosKozak
- ["Default language" option](#Preferences-general) @MilosKozak
- vektorové ikony @Philoul
- [set neutral temps for MDT pump](#MedtronicPump-configuration-of-the-pump) @Tornado-Tim
- vylepšení prohlížení historie @MilosKozak
- odstraněn OpenAPS MA algoritmus @Tornado-Tim
- odstraněna Oref0 senzitivita @Tornado-Tim
- [Biometric or password protection](#Preferences-protection) for settings, bolus @MilosKozak
- [new automation trigger](../DailyLifeWithAaps/Automations.md) @PoweRGbg
- [Open Humans uploader](../SupportingAaps/OpenHumans.md) @TebbeUbben @AdrianLxM
- Nová dokumentace @Achim

(Releasenotes-version-2-6-1-4)=
## Verze 2.6.1.4

Datum vydání: 04. 05. 2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Hlavní nové funkce

- Insight: Deaktivace vibrací na bolus pro firmware verze 3 - druhý pokus
- Jinak je stejná jako verze 2.6.1.3. Aktualizace není povinná.

## Verze 2.6.1.3

Datum vydání: 03. 05. 2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Hlavní nové funkce

- Insight: Deaktivace vibrací na bolus pro firmware verze 3
- Jinak je stejná jako verze 2.6.1.2. Aktualizace není povinná.

## Verze 2.6.1.2

Datum vydání: 19. 04. 2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Hlavní nové funkce

- Oprava pádů pro Insight
- Jinak je stejná jako verze 2.6.1.1. Pokud nejste ovlivněni touto chybou, nemusíte provádět upgrade.

## Verze 2.6.1.1

Datum vydání: 06. 04. 2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Hlavní nové funkce

- Řeší problém s příkazem SMS CARBS při použití Combo pumpy
- Jinak je stejná jako verze 2.6.1. Pokud nejste ovlivněni touto chybou, nemusíte provádět upgrade.

## Verze 2.6.1

Datum vydání: 21. 03. 2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Hlavní nové funkce

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
## Verze 2.6.0

Datum vydání: 29. 02. 2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Hlavní nové funkce

- Drobné úpravy vzhledu (úvodní obrazovka...)

- Careportal tab / menu removed

- New Local Profile plugin

  - Do místního profilu lze nyní uložit více než 1 profil
  - Profily lze kopírovat a upravovat
  - Možnost nahrát profily do NS
  - Stará přepnutí profilu lze kopírovat do nového profilu v Místním profilu (včetně posunu času a procentuální změny)
  - Vertical NumberPicker for targets

- Odstraněn Jednoduchý profil

- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled

- Plugin MDT: Opravena chyba s duplicitními záznamy

- Jednotky se nezadávají v profilu, ale v obecném nastavení aplikace

- Přidáno nové nastavení do průvodce spuštěním

- Jiné UI a interní vylepšení

- [Komplikace pro Wear](../WearOS/WearOsSmartwatch.md)

- New [SMS commands](../RemoteFeatures/SMSCommands.md) BOLUS-MEAL, SMS, CARBS, TARGET, HELP

- Opravená podpora jazyků

- Objectives: [Allow to go back](#CompletingTheObjectives-go-back-in-objectives), Time fetching dialog

- Automation: [allow sorting](#Automations-the-order-of-the-automations-in-the-list-matters)

- Automatizace: opravena chyba, kdy byla automatizace spuštěna s vypnutou smyčkou

- Nový stavový řádek pro Combo

- Vylepšení trendových šipek

- Opravena synchronizace dočasných cílů s NS

- Nová položka Statistika

- Povolen Rozložený bolus v režimu otevřené smyčky

- Podpora výstrah systému Android 10

- Nové překlady

## Verze 2.5.1

Datum vydání: 31. 10. 2019

Please note the [important notes](#Releasenotes-version-2-5-0) and [limitations](#Releasenotes-is-this-update-for-me-currently-is-not-supported) listed for [version 2.5.0](#Releasenotes-version-2-5-0). \* Fixed a bug in the network state receiver that lead to crashes with many (not critical but would waste a lot of energy re-calculating things). \* New versioning that will allow to do minor updates without triggering the update-notification.

(Releasenotes-version-2-5-0)=
## Verze 2.5.0

Datum vydání: 26. 10. 2019

(Releasenotes-important-notes-2-5-0)=

### Důležité poznámky

- Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to [build the apk](../SettingUpAaps/BuildingAaps.md) or [update](UpdateToNewVersion).
- If you are using xDrip [identify receiver](#xdrip-identify-receiver) must be set.
- If you are using Dexcom G6 with the patched Dexcom app you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).
- Glimp is supported from version 4.15.57 and newer.

(Releasenotes-is-this-update-for-me-currently-is-not-supported)=
### Je tato aktualizace pro mě? Aktuálně NENÍ podporováno

- Android 5 and lower
- Poctech
- 600SeriesUploader
- Upravené Dexcom aplikace z adresáře 2.3

### Hlavní nové funkce

- Interní změna targetSDK na 28 (Android 9), podpora jetpack
- RxJava2, Okthttp3, podpora Retrofit
- Old [Medtronic pumps](../CompatiblePumps/MedtronicPump.md) support (RileyLink need)
- New [Automation plugin](../DailyLifeWithAaps/Automations.md)
- Allow to [bolus only part](#Preferences-advanced-settings-overview) from bolus wizard calculation
- Vykreslování aktivity inzulínu
- Adjusting IOB predictions by autosens result
- Nová podpora pro upravené Dexcom plikace ([složka 2.4](https://github.com/dexcomapp/dexcomapp/tree/master/2.4))
- Ověření podpisu
- Povolit vynechání cílů pro uživatele OpenAPS
- New [objectives](../SettingUpAaps/CompletingTheObjectives.md) - exam, application handling (If you started at least objective "Starting on an open loop" in previous versions exam is optional.)
- Opravena chyba v ovladačích Dana, kde byl hlášen nesprávný čas
- Fixed bug in [SMS communicator](../RemoteFeatures/SMSCommands.md)

## Verze 2.3

Datum vydání: 25. 04. 2019

### Hlavní nové funkce

- Důležitá bezpečnostní oprava pro Insight (opravdu důležité, pokud používáte Insight!)
- Oprava prohlížeče historie
- Oprava výpočtů delta
- Aktualizace překladů
- Kontrola verze a varování při updatu gradle
- Lepší automatické testování
- Oprava potenciálního pádu v AlarmSound Service (díky @lee-b !)
- Oprava vysílání dat glykémií (nyní funguje nezávisle na SMS oprávnění!)
- Nový nástroj pro kontrolu nové verze

## Verze 2.2.2

Datum vydání: 07. 04. 2019

### Hlavní nové funkce

- Oprava Autosens: deaktivace dočasného cíle zvýší/sníží cíl
- Nové překlady
- Opravy ovladače pro Insight
- Oprava SMS pluginu

## Verze 2.2

Datum vydání: 29. 03. 2019

### Hlavní nové funkce

- [Oprava letního času](#time-adjustment-daylight-savings-time-dst)
- Aktualizace Wear
- [SMS plugin](../RemoteFeatures/SMSCommands.md) update
- Návrat k předchozímu cíli.
- Zastavení smyčky, je-li úložiště telefonu plné

## Verze 2.1

Podpora Accu-Chek <0>Insight</0> (od Tebbe Ubben a JamOrHam)

### Hlavní nové funkce

- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) support (by Tebbe Ubben and JamOrHam)
- Stavové indikátory na obrazovce přehledu (Nico Schmitz)
- Pomoc při přechodu na letní čas (Roumen Georgiev)
- Fix processing profile names coming from NS (Johannes Mockenhaupt)
- Oprava blokování UI (Johannes Mockenhaupt)
- Podpora aktualizované upravené aplikace pro G5 (Tebbe Ubben a Milos Kozak)
- Podpora zdrojů glykémie G6, Poctech, Tomato, Eversense (Tebbe Ubben a Milos Kozak)
- Oprava zakázání SMB z nastavení (Johannes Mockenhaupt)

### Misc

- Pokud nepoužíváte výchozí hodnotu `smbmaxminutes`, musíte ji nastavit znovu

## Verze 2.0

Datum vydání: 03. 11. 2018

### Hlavní nové funkce

- oref1/SMB support ([oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achieve and how to use it so it can operate smoothly.
- Accu-Chek Combo pump support
- Setup wizard: guides you through the process of setting up AAPS

(Releasenotes-settings-to-adjust-when-switching-from-ama-to-smb)=
### Nastavení k přizpůsobení při přechodu od AMA k SMB

- Cíl 10 musí být zahájen, aby byly SMB povolené (SMB záložka obecně ukazuje, která omezení jsou aktivní)

- maxIOB now includes \_all\_ IOB, not just added basal. To znamená, že pokud je k jídlu poslaný bolus 8 U a maxIOB je 7 U, tak SMB nic nepošle, dokud IOB neklesne pod 7 U.

- výchozí hodnota min_5m_carbimpact se změnila z 3 na 8 při přechodu od AMA k SMB. Přecházíte-li z AMA na SMB, musíte to změnit ručně

- Note when building AAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! Jestliže vytváření apk selže s chybou "on demand configuration", proveďte následující změnu:

  - Otevřete okno Preferences klepnutím na File > Settings (na platformě Mac, Android Studio > Preferences).
  - V levé části pak na Build, Execution, Deployment > Compiler.
  - Odtrhněte Configure on demand.
  - Klikněte na Apply nebo OK.

(Releasenotes-overview-tab)=
### Hlavní stránka

- Horní pruh dává přístup k pozastavení/zakázání smyčky, zobrazení/úpravě profilu a k zahájení/ukončení dočasných cílů (DC). DC používají výchozí nastavení. Nová možnost DC Hypoglykémie je vysoký dočasný cíl, který má smyčce zabránit, aby příliš agresivně překorigovala dokrmové sacharidy na odvrácení hypoglykémie.
- Tlačítka ošetření: staré tlačítko ošetření je stále dostupné, ale ve výchozím nastavení je skryté. Viditelnost tlačítek může být nově nastavitelná. New insulin button, new carbs button (including [eCarbs/extended carbs](../DailyLifeWithAaps/ExtendedCarbs.md))
- [Zbarvené křivky předpovědí](#aaps-screens-prediction-lines)
- Možnost zobrazit pole poznámky v dialogových oknech inzulínu/sacharidů/kalkulátoru/plnění, poznámka se pak nahrává do NS
- Aktualizované dialogové okno plnění umožňuje plnění samotné a navíc vložení ošetřujících vstupů pro výměnu kanyly a výměnu zásobníku

### Hodinky

- Oddělená varianta sestavení byla zrušena, nyní se pro sestavení používá varianta full. Abyste mohli používat ovládání bolusů z hodinek, povolte nejdřív toto nastavení na telefonu
- Průvodce se nyní ptá jenom na sacharidy (a procenta, pokud je to povoleno v nastavení hodinek). Nyní lze konfigurovat v nastavení na telefonu, které parametry jsou zahrnuty do výpočtu
- potvrzení a informační zprávy nyní fungují také na wear 2.0
- Přidána volba eSacharidy v nabídce

### Nové pluginy

- PocTech aplikace jako zdroj glykémie
- Upravená Dexcom aplikace jako zdroj glykémie
- Oref1 plugin citlivosti

### Misc

- Nové výsuvné okno k zobrazení všech pluginů. Pluginy označené jako viditelné jsou nadále ve vrchním pruhu
- Přepracovaná Konfigurace a Cíle, přídány popisky
- Nová ikona aplikace
- Spousty vylepšení a oprav chyb
- Nightscout-independent alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see *Local alerts* in settings)
- Možnost ponechat obrazovku trvale zapnutou
- Možnost zobrazovat upozornění jako Android notifikace
- Rozšířené filtrování (dovolující mít povolené SMB i více než 6 h po jídle) je podporováno Dexcom upravenou aplikací a xDripem v nativním módu.
