(Releasenotes-release-notes)=
# Notes de Version

Please follow the instructions in the [update manual](../Installing-AndroidAPS/Update-to-new-version.md). Vous pouvez également trouver une section de dépannage répondant aux difficultés les plus courantes lors de la mise à jour dans la page du manuel de mise à jour.

Vous recevrez les informations suivantes dès qu'une nouvelle mise à jour sera disponible :

```{image} ../images/AAPS_LoopDisable90days.png
:alt: Update info
```

Ensuite, vous avez 60 jours pour mettre à jour. If you do not update within these 60 days AAPS will fall back to LGS (low glucose suspend - see [glossary](../Getting-Started/Glossary.md)) as in [objective 6](../Usage/Objectives.html).

Si vous ne mettez pas à jour pendant 30 jours supplémentaires (90 jours à partir de la nouvelle date de sortie), AAPS passe à Boucle Ouverte.

Veuillez comprendre que cette modification n'a pas pour but de vous corriger mais est due à des raisons de sécurité. Les nouvelles versions d'AndroidAPS fournissent non seulement de nouvelles fonctionnalités, mais aussi d'importants correctifs de sécurité. Il est donc nécessaire que chaque utilisateur mette à jour a.s.a.p.. Malheureusement, il y a toujours des remontés de bug provenant de très anciennes versions, donc il s'agit d'une tentative d'améliorer la sécurité pour chaque utilisateur et toute la communauté DIY. Merci pour votre compréhension.

```{admonition} First version of AndroidAPS
:class: note

The first test version started already in 2015. In 2016 has beend the first released version.

The chronology of these releases is not available at the moment but as this questions is asked severeal times we document it here.

```

## Version d'Android et version AAPS

Si votre smartphone utilise une version d'Android antérieure à Android 9, vous ne pourrez pas utiliser AAPS v3 et supérieur car il nécessite au moins Android 9.

Afin de permettre aux utilisateurs ayant une ancienne version d'Android d'utiliser une ancienne version de AAPS de nouvelles versions ont été poussées qui ne changent que la vérification de version. Aucune autre amélioration n'est incluse.

### Android 9 et supérieur

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

### Conseils importants

- NS 15 is required. At the moment "dev" branch of NS main repository
- While using websockets in NS v3 plugin treatments entered through NS UI (plus button) and other applications using v1 API are not sent to AAPS. This will be fixed in future release of NS.
- Websockets in v3 plugin works similiar way to v1 plugin. Without websockets enabled AAPS schedules regularly downloads from NS which should lead to lower power consumption because NS is not permanently connected. On the oposite side it means delays in exchanging data.
- If you are using xdrip as cgm source you must select it again after update due to internal changes
- Tidepool can be used as a replacement of NS to pass first objective
- If you send to xDrip+ you must configure xDrip synchronization plugin. In order to receive BGs from AAPS in xDrip it must be selected source "xDrip+ Sync Follower"


### Modifications

- EOPatch2 / GlucomenDay pump driver @jungsomyeonggithub @MilosKozak
- ComboV2 pump driver (no need of Ruffy) @dv1
- Glunovo CGM support @christinadamianou
- G7 support @MilosKozak @rICTx-T1D @khskekec
- NSClient v3 plugin @MilosKozak
- Tidepool support @MilosKozak
- Smoothing plugin @MilosKozak @justmara inpired by Tsunami project, @jbr7rr
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

Date de sortie : 19-07-2022

(Releasenotes-important-hints-3-1-0)=
### Conseils importants

- after update uninstall Wear app and install new version
- Omnipod users: update on pod change !!!

### Modifications

- fixed issues from 3.0 version
- fix application freezing @MilosKozak
- fixed DASH driver @avereha
- fixed Dana drivers @MilosKozak
- huge UI improvement, cleanup and unification, migration to material design, styles, white theme, new icons. @Andries-Smit @MilosKozak @osodebailar @Philoul
- widget @MilosKozak
- Aidex CGM support @andyrozman @markvader (Pumpcontrol only)
- Watch `Wear OS tiles <../Configuration/Configuration/Watchfaces.mdl#wear-os-tiles>`, translations @Andries-Smit
- Wear code refactored. Plus compatible avec les versions précédentes @MilosKozak
- a11y improvements @Andries-Smit
- new protection option PIN @Andries-Smit
- allow graph scale from menu @MilosKozak
- more statistics available @MilosKozak
- MDI plugin removed in favor of VirtualPump
- new automation action: StopProcessing (following rules)

## Version 3.0.0

Date de sortie : 31-01-2022

(Releasenotes-important-hints-3-0-0)=
### Conseils importants

- **La version minimale d'Android est maintenant 9.0.**
- **Data is not migrated to new database.** Do not complain, it's so huge change so it's simply not possible. Ainsi après la mise à jour de l'IA, GA, traitements, etc seront effacés. You have to create new [profile switch](../Usage/Profiles.md) and start with zero IOB and COB. Planifiez la mise à jour avec soin !!! C'est mieux si vous le faites sans insuline et glucides actifs
- Use the same version of AAPS and NSClient

**Make sure to check and adjust settings after updating to 3.0 as described** [here](../Installing-AndroidAPS/update3_0.md).

### Etapes de préparation

**At least two days before update:**

- disable Dexcom bridge in Nightscout
- if you are using G5/G6 and xDrip as a collector, you have to update xDrip to a nightly version newer than 14th January 2022
- if you are using G5/G6 switching to BYODA as collector is recommended to take advantage of back-smoothing (you can still use xDrip for other purposes, xDrip can receive data from BYODA)

### Modifications

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

Date de sortie : 23-01-2021

- Please see also [important hints for version 2.8.1.1](Releasenotes-important-hints-2-8-1-1) below.

### Modifications

- stability improvements
- more tweaking for Android 8+
- improved icons
- watch improvements
- NSClient fixes
- Bolus advisor now works with Pumpcontrol and NSClient

## Version 2.8.1.1

Date de sortie : 12-01-2021

(important-hints-2-8-1-1)
### Conseils importants

- Option **NS_UPLOAD_ONLY** has been forced ON for all 2.8.1 users.
- If you use NSClient to enter TT, carbs or profile switches you must turn it off in AAPS but **only in case your synchronization is working well** (ie. you don't see unwanted data changes like self modification of TT, TBR etc).
- ATTENTION: DO NOT do this if you have any other app handle treatments ( like xDrip broadcast/upload/sync...).
- NS_UPLOAD_ONLY can only be turned off if engineering mode is enabled.

### Changements majeurs

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
## Version 2.8.0

Date de sortie : 01-01-2021

### Conseils importants

- **Minimum Android version is 8.0 now.** For older Android versions you can still use 2.6.1.4 from old repo.
- [Objectives have changed.](Objectives-objective-3-prove-your-knowledge) **Finish not completed objectives before update.**
- Repository location still on <https://github.com/nightscout/AndroidAPS> . Si vous n'êtes pas familié avec git le plus simple pour faire la mise à jour est de supprimer le répertoire avec AndroidAPS et de faire un [nouveau clone](../Installing-AndroidAPS/Building-APK.md).
- Please use [Android Studio 4.1.1](https://developer.android.com/studio/) or newer to build the apk.

### Nouvelles fonctionnalités majeures

- [Omnipod Eros support](../Configuration/OmnipodEros.md) @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda and special thanks to @ps2 @itsmojo, everybody else involved in the Loop driver for Omnipod and @jlucasvt from GetRileyLink.org
- [bolus advisor](Preferences-bolus-advisor) & [eating reminder](Screenshots-eating-reminder) @MilosKozak
- [New watchface](Watchfaces-new-watchface-as-of-androidaps-2-8) @rICTx-T1D
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
## Version 2.7.0

Date de sortie : 24-09-2020

**Make sure to check and adjust settings after updating to 2.7 as described** [here](../Installing-AndroidAPS/update2_7.md).

You need at least start [objective 11 (in later versions objective 10!)](Objectives-objective-10-automation) in order to continue using [Automation feature](../Usage/Automation.md) (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in [objective 3](Objectives-objective-3-prove-your-knowledge) yet, you will have to complete the exam before you can start [objective 11](Objectives-objective-10-automation). Cela n'affectera pas les autres objectifs que vous avez déjà terminés. Vous conserverez tous les objectifs terminés !

### Nouvelles fonctionnalités majeures

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
## Version 2.6.1.4

Date de sortie : 04-05-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nouvelles fonctionnalités majeures

- Insight: Disable vibration on bolus for firmware version 3 - second attempt
- Otherwise is equal to 2.6.1.3. La mise à jour est facultative.

## Version 2.6.1.3

Date de sortie : 03-05-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nouvelles fonctionnalités majeures

- Insight: Disable vibration on bolus for firmware version 3
- Otherwise is equal to 2.6.1.2. La mise à jour est facultative.

## Version 2.6.1.2

Date de sortie : 19-04-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nouvelles fonctionnalités majeures

- Fix crashing in Insight service
- Otherwise is equal to 2.6.1.1. Si vous n'êtes pas affecté par ce bug, vous n'avez pas besoin de mettre à niveau.

## Version 2.6.1.1

Date de sortie : 06-04-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nouvelles fonctionnalités majeures

- Resolves SMS CARBS command issue while using Combo pump
- Otherwise is equal to 2.6.1. Si vous n'êtes pas affecté par ce bug, vous n'avez pas besoin de mettre à niveau.

## Version 2.6.1

Date de sortie : 21-03-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nouvelles fonctionnalités majeures

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
## Version 2.6.0

Date de sortie : 29-02-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nouvelles fonctionnalités majeures

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

## Version 2.5.1

Date de sortie : 31-10-2019

Please note the [important notes](Releasenotes-important-notes-2-5-0) and [limitations](Releasenotes-is-this-update-for-me-currently-is-not-supported) listed for [version 2.5.0](Releasenotes-version-2-5-0). \* Fixed a bug in the network state receiver that lead to crashes with many (not critical but would waste a lot of energy re-calculating things). \* New versioning that will allow to do minor updates without triggering the update-notification.

(Releasenotes-version-2-5-0)=
## Version 2.5.0

Date de sortie : 26-10-2019

(Releasenotes-important-notes-2-5-0)=

### Remarques importantes

- Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to [build the apk](../Installing-AndroidAPS/Building-APK.md) or [update](../Installing-AndroidAPS/Update-to-new-version.html).
- If you are using xDrip [identify receiver](xdrip-identify-receiver) must be set.
- If you are using Dexcom G6 with the patched Dexcom app you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).
- Glimp is supported from version 4.15.57 and newer.

(Releasenotes-is-this-update-for-me-currently-is-not-supported)=
### Cette mise à jour est-elle pour moi? N'est actuellement PAS pris en charge

- Android 5 and lower
- Poctech
- 600SeriesUploader
- Patched Dexcom from 2.3 directory

### Nouvelles fonctionnalités majeures

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

## Version 2.3

Date de sortie : 25-04-2019

### Nouvelles fonctionnalités majeures

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

Date de sortie : 07-04-2019

### Nouvelles fonctionnalités majeures

- Autosens fix: deactivate TT raises/lowers target
- New translations
- Insight driver fixes
- SMS plugin fix

## Version 2.2

Date de sortie : 29-03-2019

### Nouvelles fonctionnalités majeures

- [DST fix](Timezone-traveling-time-adjustment-daylight-savings-time-dst)
- Wear Update
- [SMS plugin](../Children/SMS-Commands.md) update
- Go back in objectives.
- Stop loop if phone disk is full

## Version 2.1

Date de sortie : 03-03-2019

### Nouvelles fonctionnalités majeures

- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md) support (by Tebbe Ubben and JamOrHam)
- Status lights on main screen (Nico Schmitz)
- Daylight saving time helper (Roumen Georgiev)
- Fix processing profile names comming from NS (Johannes Mockenhaupt)
- Fix UI blocking (Johannes Mockenhaupt)
- Support for updated G5 app (Tebbe Ubben and Milos Kozak)
- G6, Poctech, Tomato, Eversense BG source support (Tebbe Ubben and Milos Kozak)
- Fixed disabling SMB from preferences (Johannes Mockenhaupt)

### Divers

- If you are using non default `smbmaxminutes` value you have to setup this value again

## Version 2.0

Date de sortie : 03-11-2018

### Nouvelles fonctionnalités majeures

- oref1/SMB support ([oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achieve and how to use it so it can operate smoothly.
- [\_Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) pump support
- Setup wizard: guides you through the process of setting up AndroidAPS

(Releasenotes-settings-to-adjust-when-switching-from-ama-to-smb)=
### Paramètres à ajuster lors du passage d'AMA à SMB

- Objective 10 must be started for SMBs to be enabled (SMB tab generally shows what restrictions apply)

- maxIOB now includes \_all\_ IOB, not just added basal. En d'autres termes, s'il y a eu un bolus de 8 U pour un repas et maxIA est à 7 U, aucun SMB ne sera délivré jusqu'à ce que l'IA repasse en dessous de 7 U.

- min_5m_carbimpact default has changed from 3 to 8 going from AMA to SMB. Si vous passez de AMA vers SMB, vous devez la modifier manuellement

- Note when building AndroidAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! Si votre construction échoue avec une erreur concernant la "configuration sur demande", faites les actions suivantes :

  - Open the Preferences window by clicking File > Settings (on Mac, Android Studio > Preferences).
  - In the left pane, click Build, Execution, Deployment > Compiler.
  - Uncheck the Configure on demand checkbox.
  - Click Apply or OK.

(Releasenotes-overview-tab)=
### Onglet Aperçu (Accueil)

- Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). Les CT utilisent des paramètres par défauts configurés dans les préférences. La nouvelle option CT Hypo est une cible temp. haute pour empêcher la boucle de corriger trop agressivement les glucides de secours.
- Treatment buttons: old treatment button still available, but hidden by default. La visibilité des boutons peut maintenant être configurée. New insulin button, new carbs button (including [eCarbs/extended carbs](../Usage/Extended-Carbs.md))
- [Colored prediction lines](../Getting-Started/Screenshots-prediction-lines)
- Option to show a notes field in insulin/carbs/calculator/prime+fill dialogs, which are uploaded to NS
- Updated prime/fill dialog allows priming and creating careportal entries for site change and cartridge change

### Montre

- Separate build variant dropped, included in regular full build now. Pour utiliser des commandes bolus à partir de la montre, activez ce paramètre sur le téléphone
- Wizard now only asks for carbs (and percentage if enabled in watch settings). Les paramètres pris en comptes dans le calcul peuvent être configurés dans les paramètres du téléphone
- confirmations and info dialogs now work on wear 2.0 as well
- Added eCarbs menu entry

### Nouveaux plugins

- PocTech app as BG source
- Dexcom patched app as BG source
- oref1 sensitivity plugin

### Divers

- App now uses drawer to show all plugins; plugins selected as visible in config builder are shown as tabs on top (favourites)
- Overhaul for config builder and objectives tabs, adding descriptions
- New app icon
- Lots of improvements and bugfixes
- Nightscout-independent alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see *Local alerts* in settings)
- Option to keep screen on
- Option to show notification as Android notification
- Advanced filtering (allowing to always enable SMB and 6h after meals) supported with patched Dexcom app or xDrip with G5 native mode as BG source.
