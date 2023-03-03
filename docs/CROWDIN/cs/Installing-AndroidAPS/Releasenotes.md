(Releasenotes-release-notes)=
# Poznámky k vydání

Please follow the instructions in the [update manual](../Installing-AndroidAPS/Update-to-new-version.md). Na stránce popisující aktualizaci také můžete najít sekci řešení problémů, která řeší nejčastější problémy při aktualizaci.

Jakmile bude k dispozici nová aktualizace, obdržíte následující informace:

```{image} ../images/AAPS_LoopDisable90days.png
:alt: Update info
```

Pak máte 60 dnů na aktualizaci. If you do not update within these 60 days AAPS will fall back to LGS (low glucose suspend - see [glossary](../Getting-Started/Glossary.md)) as in [objective 6](../Usage/Objectives.html).

Pokud neaktualizujete do dalších 30 dní (90 dní od nového vydání) přejde AAPS na otevřenou smyčku.

Prosím pochopte, že tato změna není určena, aby vás otravovala, ale je to kvůli bezpečnostním důvodům. New versions of AAPS do not only provide new features but also important safety fixes. Therefore it is necessary that every user updates a.s.a.p.. Bohužel stále existují hlášení o chybách z velmi starých verzí, takže se jedná o pokus zlepšit bezpečnost pro každého uživatele a celou komunitu DIY. Děkujeme za pochopení.

```{admonition} First version of AAPS
:class: note

The first test version started already in 2015. In 2016 has beend the first released version.

The chronology of these releases is not available at the moment but as this questions is asked severeal times we document it here.

```

## Android version and AAPS version

If your smartphone uses an Android Version older than Android 9 you will not be able to use AAPS v3 and up as it requires at least Android 9.

In order to allow users with older Android to use older version of AAPS new versions were pushed which only change version verification. No other improvements are included.

### Android 9 and up

- Use latest AAPS version
- Download AAPS Code from <https://github.com/nightscout/AndroidAPS>

### Android 8

- Use AAPS version **2.8.2.1**
- Download AAPS Code from <https://github.com/nightscout/AndroidAPS> branch 2.8.2.1

### Android 7

- Use AAPS version **2.6.2**
- Download AAPS Code from <https://github.com/nightscout/AndroidAPS> branch 2.6.2

## Version 3.2.0

Release date: XX-XX-2023

### Důležitá poznámky

- NS 15 is required. At the moment "dev" branch of NS main repository
- While using websockets in NS v3 plugin treatments entered through NS UI (plus button) and other applications using v1 API are not sent to AAPS. This will be fixed in future release of NS. Always use the same client (v1 or v3) in AAPS and AAPSClient until NS fully switch to v3 internaly. The same is valid for AAPS and AAPSClient itself.
- Websockets in v3 plugin works similiar way to v1 plugin. Without websockets enabled AAPS schedules regularly downloads from NS which should lead to lower power consumption because NS is not permanently connected. On the oposite side it means delays in exchanging data.
- If you are using xdrip as cgm source you must select it again after update due to internal changes
- Tidepool can be used as a replacement of NS to pass first objective
- If you send to xDrip+ you must configure xDrip synchronization plugin. In order to receive BGs from AAPS in xDrip it must be selected source "xDrip+ Sync Follower"
- If you want to switch to ComboV2 driver, Ruffy must be uninstalled and pump paired again to AAPS


### Changes

- EOPatch2 / GlucomenDay pump driver @jungsomyeonggithub @MilosKozak
- ComboV2 pump driver (no need of Ruffy) @dv1
- Korean DanaI support @MilosKozak
- Glunovo CGM support @christinadamianou
- G7 support @MilosKozak @rICTx-T1D @khskekec
- NSClient v3 plugin @MilosKozak
- Tidepool support @MilosKozak
- Smoothing plugin @MilosKozak, @justmara, Exponential smoothing @nichi (Tsunami), Average smoothing @jbr7rr
- fixed tons of issues from 3.1 version
- allow add notes on more places @Sergey Zorchenko
- UI fixes @MilosKozak @osodebailar @Andries-Smit @yodax @philhoul @dv1 @paravoid
- new SMS commands LOOP LGS/CLOSED @pzadroga
- wear translations @Andries-Smit
- xdrip communication moved to separate module @MilosKozak
- internal changes: updated libs versions, rx3 migration, new modules structure @MilosKozak
- Diaconn driver fixes @miyeongkim
- AAPSClient provides info if main phone is plugged in electricity @MilosKozak
- new 125k+ lines of code, changed 150k lines

## Version 3.1.0

Release date: 19-07-2022

(Releasenotes-important-hints-3-1-0)=
### Důležitá poznámky

- after update uninstall Wear app and install new version
- Omnipod users: update on pod change !!!

### Changes

- fixed issues from 3.0 version
- fix application freezing @MilosKozak
- fixed DASH driver @avereha
- fixed Dana drivers @MilosKozak
- huge UI improvement, cleanup and unification, migration to material design, styles, white theme, new icons. @Andries-Smit @MilosKozak @osodebailar @Philoul
- widget @MilosKozak
- Aidex CGM support @andyrozman @markvader (Pumpcontrol only)
- Watch `Wear OS tiles <../Configuration/Configuration/Watchfaces.mdl#wear-os-tiles>`, translations @Andries-Smit
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

- **Minimum Android version is 9.0 now.**
- **Data is not migrated to new database.** Do not complain, it's so huge change so it's simply not possible. Thus after update IOB, COB, treatments etc. will be cleared. You have to create new [profile switch](../Usage/Profiles.md) and start with zero IOB and COB. Plan the update carefully!!! Best in situation without active insulin and carbs
- Use the same version of AAPS and NSClient

**Make sure to check and adjust settings after updating to 3.0 as described** [here](../Installing-AndroidAPS/update3_0.md).

### Preparation steps

**At least two days before update:**

- disable Dexcom bridge in Nightscout
- if you are using G5/G6 and xDrip as a collector, you have to update xDrip to a nightly version newer than 14th January 2022
- if you are using G5/G6 switching to BYODA as collector is recommended to take advantage of back-smoothing (you can still use xDrip for other purposes, xDrip can receive data from BYODA)

### Changes

- 100k lines changed, 105k new lines of code

- [Omnipod DASH support](../Configuration/OmnipodDASH.md) @AdrianLxM @avereha @bartsopers @vanelsberg

- [Dana-i support](../Configuration/DanaRS-Insulin-Pump.md) @MilosKozak

- [DiaconnG8 support](../Configuration/DiaconnG8.md)

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

- NSProfile is gone, just local profile can be used. Local profile can be [synced to NS](update3_0-nightscout-profile-cannot-be-pushed). @MilosKozak.

- Forgotten [master password reset procedure](update3_0-reset-master-password) @MilosKozak

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

- Please see also [important hints for version 2.8.1.1](Releasenotes-important-hints-2-8-1-1) below.

### Changes

- stability improvements
- more tweaking for Android 8+
- improved icons
- watch improvements
- NSClient fixes
- Bolus advisor now works with Pumpcontrol and NSClient

## Version 2.8.1.1

Release date: 12-01-2021

(important-hints-2-8-1-1)
### Důležitá poznámky

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
- gradle reverted to allow direct watchface instalation
- automation fixes
- RS driver improvement
- various crashes fixed
- UI fixes and improvements
- new translations

(Releasenotes-version-2-8-0)=
## Verze 2.8.0

Datum vydání: 01. 01. 2021

### Důležitá poznámky

- **Minimum Android version is 8.0 now.** For older Android versions you can still use 2.6.1.4 from old repo.
- [Objectives have changed.](Objectives-objective-3-prove-your-knowledge) **Finish not completed objectives before update.**
- Repository location still on <https://github.com/nightscout/AndroidAPS> . If you are not familiar with git the easiest way for update is remove directory with AAPS and do a [new clone](../Installing-AndroidAPS/Building-APK.md).
- Please use [Android Studio 4.1.1](https://developer.android.com/studio/) or newer to build the apk.

### Hlavní nové funkce

- [Omnipod Eros support](../Configuration/OmnipodEros.md) @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda and special thanks to @ps2 @itsmojo, everybody else involved in the Loop driver for Omnipod and @jlucasvt from GetRileyLink.org
- [bolus advisor](Preferences-bolus-advisor) & [eating reminder](Screenshots-eating-reminder) @MilosKozak
- [New watchface](Watchfaces-new-watchface-as-of-AAPS-2-8) @rICTx-T1D
- Dana RS connection improvements @MilosKozak
- Removed "Unchanged CGM values" behavior in SMB for Dexcom native app
- New [Low Ressolution Skin](Preferences-skin)
- New ["Pregnant" patient type](Open-APS-features-overview-of-hard-coded-limits) @Brian Quinion
- New NSClient tablet layout @MilosKozak
- NSClient transfer insulin, senstivity and display settings directly from main AAPS @MilosKozak
- [Preferences filter](../Configuration/Preferences.md) @Brian Quinion
- New pump icons @Rig22 @@teleriddler @osodebailar
- New [insulin type Lyumjev](Config-Builder-lyumjev)
- SetupWizard improvements @MilosKozak
- Security improvements @dlvoy
- Various improvements and fixes @AdrianLxM @Philoul @swissalpine  @MilosKozak @Brian Quinion

(Releasenotes-version-2-7-0)=
## Verze 2.7.0

Datum vydání: 24. 09. 2020

**Make sure to check and adjust settings after updating to 2.7 as described** [here](../Installing-AndroidAPS/update2_7.md).

You need at least start [objective 11 (in later versions objective 10!)](Objectives-objective-10-automation) in order to continue using [Automation feature](../Usage/Automation.md) (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in [objective 3](Objectives-objective-3-prove-your-knowledge) yet, you will have to complete the exam before you can start [objective 11](Objectives-objective-10-automation). Neovlivní to cíle, které jste již dokončili. Splněné cíle zůstanou zachovány!

### Hlavní nové funkce

- internal use of dependency injection, updates libraries, code rewritten to kotlin @MilosKozak @AdrianLxM
- using modules for Dana pumps @MilosKozak
- [new layout, layout selection](../Getting-Started/Screenshots.md) @MilosKozak
- new [status lights layout](Preferences-status-lights) @MilosKozak
- [multiple graphs support](Screenshots-section-f-main-graph) @MilosKozak
- [Profile helper](../Configuration/profilehelper.md) @MilosKozak
- visualization of [dynamic target adjustment](Screenshots-visualization-of-dynamic-target-adjustment) @Tornado-Tim
- new [preferences layout](../Configuration/Preferences.md) @MilosKozak
- SMB algorithm update @Tornado-Tim
- [Low glucose suspend mode](Preferences-aps-mode) @Tornado-Tim
- [carbs required notifications](Preferences-carb-required-notification) @twain47 @Tornado-Tim
- removed Careportal (moved to Actions) @MilosKozak
- [new encrypted backup format](../Usage/ExportImportSettings.md) @dlvoy
- [new SMS TOTP authentication](../Children/SMS-Commands.md) @dlvoy
- [new SMS PUMP CONNECT, DISCONNECT](SMS-Commands-commands) commands @Lexsus
- better support for tiny basals on Dana pumps @Mackwe
- small Insight fixes @TebbeUbben @MilosKozak
- ["Default language" option](Preferences-general) @MilosKozak
- vector icons @Philoul
- [set neutral temps for MDT pump](MedtronicPump-configuration-of-the-pump) @Tornado-Tim
- History browser improvements @MilosKozak
- removed OpenAPS MA algorithm @Tornado-Tim
- removed Oref0 sensitivity @Tornado-Tim
- [Biometric or password protection](Preferences-protection) for settings, bolus @MilosKozak
- [new automation trigger](../Usage/Automation.md) @PoweRGbg
- [Open Humans uploader](../Configuration/OpenHumans.md) @TebbeUbben @AdrianLxM
- New documentation @Achim

(Releasenotes-version-2-6-1-4)=
## Verze 2.6.1.4

Datum vydání: 04. 05. 2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Hlavní nové funkce

- Insight: Disable vibration on bolus for firmware version 3 - second attempt
- Otherwise is equal to 2.6.1.3. Aktualizace není povinná.

## Verze 2.6.1.3

Datum vydání: 03. 05. 2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Hlavní nové funkce

- Insight: Disable vibration on bolus for firmware version 3
- Otherwise is equal to 2.6.1.2. Aktualizace není povinná.

## Verze 2.6.1.2

Datum vydání: 19. 04. 2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Hlavní nové funkce

- Fix crashing in Insight service
- Otherwise is equal to 2.6.1.1. Pokud nejste ovlivněni touto chybou, nemusíte provádět upgrade.

## Verze 2.6.1.1

Datum vydání: 06. 04. 2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Hlavní nové funkce

- Resolves SMS CARBS command issue while using Combo pump
- Otherwise is equal to 2.6.1. Pokud nejste ovlivněni touto chybou, nemusíte provádět upgrade.

## Verze 2.6.1

Datum vydání: 21. 03. 2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Hlavní nové funkce

- Allow to enter only `https://` in NSClient settings
- Fixed [BGI](../Getting-Started/Glossary.md) displaying bug on watches
- Fixed small UI bugs
- Fixed Insight crashes
- Fixed future carbs with Combo pump
- Fixed [LocalProfile -> NS sync](Config-Builder-upload-local-profiles-to-nightscout)
- Insight alerts improvements
- Improved detection of boluses from pump history
- Fixed NSClient connection settings (wifi, charging)
- Fixed sending of calibrations to xDrip

(Releasenotes-version-2-6-0)=
## Verze 2.6.0

Datum vydání: 29. 02. 2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Hlavní nové funkce

- Small design changes (startpage...)

- Careportal tab / menu removed - more details [here](../Usage/CPbefore26.md)

- New [Local Profile plugin](Config-Builder-local-profile)

  - Local profile can hold more than 1 profile
  - Profiles can be cloned and edited
  - Ability of upload profiles to NS
  - Old profile switches can be cloned to new profile in LocalProfile (timeshift and percentage is applied)
  - Veritical NumberPicker for targets

- SimpleProfile is removed

- [Extended bolus](Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled

- MDT plugin: Fixed bug with duplicated entries

- Units are not specified in profile but it's global setting

- Added new settings to startup wizard

- Different UI and internal improvements

- [Wear complications](../Configuration/Watchfaces.md)

- New [SMS commands](../Children/SMS-Commands.md) BOLUS-MEAL, SMS, CARBS, TARGET, HELP

- Fixed language support

- Objectives: [Allow to go back](Objectives-go-back-in-objectives), Time fetching dialog

- Automation: [allow sorting](Automation-sort-automation-rules)

- Automation: fixed bug when automation was running with disabled loop

- New status line for Combo

- GlucoseStatus improvement

- Fixed TempTarget NS sync

- New statistics activity

- Allow Extended bolus in open loop mode

- Android 10 alarm support

- Tons on new translations

## Verze 2.5.1

Datum vydání: 31. 10. 2019

Please note the [important notes](Releasenotes-important-notes-2-5-0) and [limitations](Releasenotes-is-this-update-for-me-currently-is-not-supported) listed for [version 2.5.0](Releasenotes-version-2-5-0). \* Fixed a bug in the network state receiver that lead to crashes with many (not critical but would waste a lot of energy re-calculating things). \* New versioning that will allow to do minor updates without triggering the update-notification.

(Releasenotes-version-2-5-0)=
## Verze 2.5.0

Datum vydání: 26. 10. 2019

(Releasenotes-important-notes-2-5-0)=

### Důležité poznámky

- Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to [build the apk](../Installing-AndroidAPS/Building-APK.md) or [update](../Installing-AndroidAPS/Update-to-new-version.html).
- If you are using xDrip [identify receiver](xdrip-identify-receiver) must be set.
- If you are using Dexcom G6 with the patched Dexcom app you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).
- Glimp is supported from version 4.15.57 and newer.

(Releasenotes-is-this-update-for-me-currently-is-not-supported)=
### Je tato aktualizace pro mě? Aktuálně NENÍ podporováno

- Android 5 and lower
- Poctech
- 600SeriesUploader
- Patched Dexcom from 2.3 directory

### Hlavní nové funkce

- Internal change of targetSDK to 28 (Android 9), jetpack support
- RxJava2, Okhttp3, Retrofit support
- Old [Medtronic pumps](../Configuration/MedtronicPump.md) support (RileyLink need)
- New [Automation plugin](../Usage/Automation.md)
- Allow to [bolus only part](Preferences-advanced-settings-overview) from bolus wizard calculation
- Rendering insulin activity
- Adjusting IOB predictions by autosens result
- New support for patched Dexcom apks ([2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4))
- Signature verifier
- Allow to bypass objectives for OpenAPS users
- New [objectives](../Usage/Objectives.md) - exam, application handling (If you started at least objective "Starting on an open loop" in previous versions exam is optional.)
- Fixed bug in Dana\* drivers where false time difference was reported
- Fixed bug in [SMS communicator](../Children/SMS-Commands.md)

## Verze 2.3

Datum vydání: 25. 04. 2019

### Hlavní nové funkce

- Important safety fix for Insight (really important if you use Insight!)
- Fix History-Browser
- Fix delta calculations
- Language updates
- Check for GIT and warn on gradle upgrade
- More automatic testing
- Fixing potential crash in AlarmSound Service (thanks @lee-b !)
- Fix broadcast of BG data (works independently of SMS permission now!)
- New Version-Checker

## Verze 2.2.2

Datum vydání: 07. 04. 2019

### Hlavní nové funkce

- Autosens fix: deactivate TT raises/lowers target
- New translations
- Insight driver fixes
- SMS plugin fix

## Verze 2.2

Datum vydání: 29. 03. 2019

### Hlavní nové funkce

- [DST fix](Timezone-traveling-time-adjustment-daylight-savings-time-dst)
- Wear Update
- [SMS plugin](../Children/SMS-Commands.md) update
- Go back in objectives.
- Stop loop if phone disk is full

## Verze 2.1

Podpora Accu-Chek <0>Insight</0> (od Tebbe Ubben a JamOrHam)

### Hlavní nové funkce

- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md) support (by Tebbe Ubben and JamOrHam)
- Status lights on main screen (Nico Schmitz)
- Daylight saving time helper (Roumen Georgiev)
- Fix processing profile names comming from NS (Johannes Mockenhaupt)
- Fix UI blocking (Johannes Mockenhaupt)
- Support for updated G5 app (Tebbe Ubben and Milos Kozak)
- G6, Poctech, Tomato, Eversense BG source support (Tebbe Ubben and Milos Kozak)
- Fixed disabling SMB from preferences (Johannes Mockenhaupt)

### Různé

- If you are using non default `smbmaxminutes` value you have to setup this value again

## Verze 2.0

Datum vydání: 03. 11. 2018

### Hlavní nové funkce

- oref1/SMB support ([oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achieve and how to use it so it can operate smoothly.
- [\_Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) pump support
- Setup wizard: guides you through the process of setting up AAPS

(Releasenotes-settings-to-adjust-when-switching-from-ama-to-smb)=
### Nastavení k přizpůsobení při přechodu od AMA k SMB

- Objective 10 must be started for SMBs to be enabled (SMB tab generally shows what restrictions apply)

- maxIOB now includes \_all\_ IOB, not just added basal. To znamená, že pokud je k jídlu poslaný bolus 8 U a maxIOB je 7 U, tak SMB nic nepošle, dokud IOB neklesne pod 7 U.

- min_5m_carbimpact default has changed from 3 to 8 going from AMA to SMB. If you are upgrading from AMA to SMB, you have to change it manually

- Note when building AAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! Jestliže vytváření apk selže s chybou "on demand configuration", proveďte následující změnu:

  - Open the Preferences window by clicking File > Settings (on Mac, Android Studio > Preferences).
  - In the left pane, click Build, Execution, Deployment > Compiler.
  - Uncheck the Configure on demand checkbox.
  - Click Apply or OK.

(Releasenotes-overview-tab)=
### Hlavní stránka

- Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). DC používají výchozí nastavení. Nová možnost DC Hypoglykémie je vysoký dočasný cíl, který má smyčce zabránit, aby příliš agresivně překorigovala dokrmové sacharidy na odvrácení hypoglykémie.
- Treatment buttons: old treatment button still available, but hidden by default. Viditelnost tlačítek může být nově nastavitelná. New insulin button, new carbs button (including [eCarbs/extended carbs](../Usage/Extended-Carbs.md))
- [Colored prediction lines](../Getting-Started/Screenshots-prediction-lines)
- Option to show a notes field in insulin/carbs/calculator/prime+fill dialogs, which are uploaded to NS
- Updated prime/fill dialog allows priming and creating careportal entries for site change and cartridge change

### Hodinky

- Separate build variant dropped, included in regular full build now. Abyste mohli používat ovládání bolusů z hodinek, povolte nejdřív toto nastavení na telefonu
- Wizard now only asks for carbs (and percentage if enabled in watch settings). Nyní lze konfigurovat v nastavení na telefonu, které parametry jsou zahrnuty do výpočtu
- confirmations and info dialogs now work on wear 2.0 as well
- Added eCarbs menu entry

### Nové pluginy

- PocTech app as BG source
- Dexcom patched app as BG source
- oref1 sensitivity plugin

### Různé

- App now uses drawer to show all plugins; plugins selected as visible in config builder are shown as tabs on top (favourites)
- Overhaul for config builder and objectives tabs, adding descriptions
- New app icon
- Lots of improvements and bugfixes
- Nightscout-independent alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see *Local alerts* in settings)
- Option to keep screen on
- Option to show notification as Android notification
- Advanced filtering (allowing to always enable SMB and 6h after meals) supported with patched Dexcom app or xDrip with G5 native mode as BG source.
