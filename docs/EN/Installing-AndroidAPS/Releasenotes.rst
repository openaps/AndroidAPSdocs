Release notes
**************************************************
Please follow the instructions in the `update manual <../Installing-AndroidAPS/Update-to-new-version.html>`_. You can also find a troubleshooting section addressing the most common difficulties when updating on the update manual page.

You will receive the following information as soon as a new update is available:

.. image:: ../images/AAPS_LoopDisable90days.png
  :alt: Update info

Then you have 60 days to update. If you do not update within these 60 days AAPS will fall back to LGS (low glucose suspend - see `glossary <../Getting-Started/Glossary.html>`_) as in `objective 6 <../Usage/Objectives.html>`_.

If you do not update for another 30 days (90 days from new release date) AAPS will switch to Open Loop.

Please understand that this change is not intended to bug you but is due to safety reasons. New versions of AndroidAPS do not only provide new features but also important safety fixes. Therefore it is necessary that every user updates a.s.a.p.. Unfortunately there are still bug reports from very old versions so this is a try to improve safety for every single user and the whole DIY community. Thanks for your understanding.

Android version and AAPS version
====================================
If your smartphone uses an Android Version older than Android 9 you will not be able to use AAPS 3.0.0 and up as it requires at least Android 9. 

In order to allow users with older Android to use older version of AAPS new versions were pushed which only change version verification. No other improvements are included.

Android 9 and up
------------------------------------
* Use latest AAPS version
* Download AAPS Code from https://github.com/nightscout/AndroidAPS

Android 8
------------------------------------
* Use AAPS version **2.8.2.1**
* Until AAPS version 3 is published just select **master** as this is 2.8.2.1. ;-)
* Download AAPS Code from https://github.com/nightscout/AndroidAPS

Android 7
------------------------------------
* Use AAPS version **2.6.2**
* Download AAPS Code from https://github.com/MilosKozak/AndroidAPS

Version 3.0.0
================
Release date: XX-XX-2022

Important hints
----------------------
* **Minimum Android version is 9.0 now.**
* **Data is not migrated to new database.** Do not complain, it's so huge change so it's simply not possible. Thus after update IOB, COB, treatments etc. will be cleared. You have to create new `profile switch <../Usage/Profiles.html>`_ and start with zero IOB and COB. Plan the update carefully!!! Best in situation without active insulin and carbs
* Use the same version of AAPS and NSClient
* There is a bug in xDrip and Dexcom native mode producing duplicated data which prevents AAPS from running in Closed loop mode. Until this get fixed using BOYDA in mandatory. Using BOYDA is also recommended to take advantage of Dexcom back-smoothing

Preparation steps
----------------------
**At least two days before update:**
* disable Dexcom bridge in Nightscout
* if you are using G5/G6 switch to BOYDA (if you were using xDrip). You still can use xDrip but not as collector (xDrip can receive data from BOYDA)

Changes
----------------------
* XXXXk lines changed, XXXXk new lines of code
* `Omnipod DASH support <..../Configuration/OmnipodDASH.md>`_ @AdrianLxM @avereha @bartsopers @vanelsberg
* `Dana-i support <../Configuration/DanaRS-Insulin-Pump.html>`_ @MilosKozak
* `DiaconnG8 support <../Configuration/DiaconnG8.rst>`_
* Glunovo support
* Internal database upgraded to Room @MilosKozak @Tebbe @AdrianLxm @Philoul @andyrozman
* Lot of code rewritten to Kotlin @MilosKozak
* New internal interface for pump drivers
* NSClient rewritten for better synchronization and more detailed customization @MilosKozak

  * Record deletion from NS is not allowed (only invalidation through NSClient)
  * Record modification from NS is not allowed
  * Sync setting available without engineering mode (for parents)
  * Ability to resync data

* Profile switch behavior change. Now is distinguished between Profile Switch *(something that user wants)* and Profile change *(when change is executed by pump)* @MilosKozak @Tebbe
* You can start activity temporary target during creation of profile switch @MilosKozak
* NSProfile is gone. RIP. Only local profile is used and you can enable synchronization with NS @MilosKozak. To update profile from NS side use "Clone" (record!!, not profile) and save changes. You should see "Profile valid from:" set to currrent date
* Forgotten master password reset procedure. To reset master password put file of name PasswordReset to /AAPS/extra directory and restart AAPS. Then new master password will be serial number of your active pump @MilosKozak
* User actions tracing @Philoul
* New automation TempTargetValue trigger @Philoul
* UI improvements @MilosKozak
* New user buttons for automations @MilosKozak
* New automation layout @MilosKozak
* History browser updated and fixed @MilosKozak
* Objective9 removed @MilosKozak
* Fixed bug associated to unstable CGM data @MilosKozak
* DanaR and DanaRS communication improvement @MilosKozak
* CircleCI integration @MilosKozak
* Files location change: 

   * /AAPS/extra (engineering mode) 
   * /AAPS/logs /AAPS/exports 
   * /AAPS/preferences



Version 2.8.2
================
Release date: 23-01-2021

* Please see also `important hints for version 2.8.1.1 <../Installing-AndroidAPS/Releasenotes.html#important-hints>`_ below.

Changes
----------------------
* stability improvements
* more tweaking for Android 8+
* improved icons
* watch improvements
* NSClient fixes
* Bolus advisor now works with Pumpcontrol and NSClient

Version 2.8.1.1
================
Release date: 12-01-2021

Important hints
----------------------
* Option **NS_UPLOAD_ONLY** has been forced ON for all 2.8.1 users. 
* If you use NSClient to enter TT, carbs or profile switches you must turn it off in AAPS but **only in case your synchronization is working well** (ie. you don't see unwanted data changes like self modification of TT, TBR etc). 
* ATTENTION: DO NOT do this if you have any other app handle treatments ( like xDrip broadcast/upload/sync...).
* NS_UPLOAD_ONLY can only be turned off if engineering mode is enabled.

Major changes
----------------------
* RileyLink, Omnipod and MDT pump improvements and fixes
* forced NS_UPLOAD_ONLY
* fix for SMB & Dexcom app
* watchface fixes
* crash reporting improved
* gradle reverted to allow direct watchface instalation
* automation fixes
* RS driver improvement
* various crashes fixed
* UI fixes and improvements
* new translations

Version 2.8.0
================
Release date: 01-01-2021

Important hints
----------------------
* **Minimum Android version is 8.0 now.** For older Android versions you can still use 2.6.1.4 from old repo. 
* `Objectives have changed. <../Usage/Objectives.html#objective-3-prove-your-knowledge>`_ **Finish not completed objectives before update.**
* Repository location still on https://github.com/nightscout/AndroidAPS . If you are not familiar with git the easiest way for update is remove directory with AndroidAPS and do a `new clone <../Installing-AndroidAPS/Building-APK.html>`_.
* Please use `Android Studio 4.1.1 <https://developer.android.com/studio/>`_ or newer to build the apk.

Major new features
----------------------
* `Omnipod Eros support <../Configuration/OmnipodEros.html>`_ @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda and special thanks to @ps2 @itsmojo, everybody else involved in the Loop driver for Omnipod and @jlucasvt from GetRileyLink.org 
* `bolus advisor <../Configuration/Preferences.html#bolus-advisor>`_ & `eating reminder <../Getting-Started/Screenshots.html#eating-reminder>`_ @MilosKozak 
* `New watchface <../Configuration/Watchfaces.html#new-watchface-as-of-androidaps-2-8>`_ @rICTx-T1D
* Dana RS connection improvements @MilosKozak 
* Removed "Unchanged CGM values" behavior in SMB for Dexcom native app
* New `Low Ressolution Skin <../Configuration/Preferences.html#skin>`_
* New `"Pregnant" patient type <../Usage/Open-APS-features.html#overview-of-hard-coded-limits>`_ @Brian Quinion
* New NSClient tablet layout @MilosKozak 
* NSClient transfer insulin, senstivity and display settings directly from main AAPS @MilosKozak 
* `Preferences filter <../Configuration/Preferences.html>`_ @Brian Quinion
* New pump icons @Rig22 @@teleriddler @osodebailar
* New `insulin type Lyumjev <../Configuration/Config-Builder.html#lyumjev>`_
* SetupWizard improvements @MilosKozak 
* Security improvements @dlvoy 
* Various improvements and fixes @AdrianLxM @Philoul @swissalpine  @MilosKozak @Brian Quinion 

Version 2.7.0
================
Release date: 24-09-2020

**Make sure to check and adjust settings after updating to 2.7 as described** `here <../Installing-AndroidAPS/update2_7.html>`__.

You need at least start `objective 11 <../Usage/Objectives.html#objective-11-automation>`_ in order to continue using `Automation feature <../Usage/Automation.html>`_ (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in `objective 3 <../Usage/Objectives.html#objective-3-prove-your-knowledge>`_ yet, you will have to complete the exam before you can start `objective 11 <../Usage/Objectives.html#objective-11-automation>`_. This will not effect other objectives you have already finished. You will keep all finished objectives!

Major new features
----------------------
* internal use of dependency injection, updates libraries, code rewritten to kotlin @MilosKozak @AdrianLxM
* using modules for Dana pumps @MilosKozak
* `new layout, layout selection <../Getting-Started/Screenshots.html>`_ @MilosKozak
* new `status lights layout <../Configuration/Preferences.html#status-lights>`_ @MilosKozak
* `multiple graphs support <../Getting-Started/Screenshots.html#section-f-main-graph>`_ @MilosKozak
* `Profile helper <../Configuration/profilehelper.html>`_ @MilosKozak
* visualization of `dynamic target adjustment <../Getting-Started/Screenshots.html#visualization-of-dynamic-target-adjustment>`_ @Tornado-Tim
* new `preferences layout <../Configuration/Preferences.html>`_ @MilosKozak
* SMB algorithm update @Tornado-Tim
* `Low glucose suspend mode <../Configuration/Preferences.html#aps-mode>`_ @Tornado-Tim
* `carbs required notifications <../Configuration/Preferences.html#carb-required-notification>`_ @twain47 @Tornado-Tim
* removed Careportal (moved to Actions) @MilosKozak
* `new encrypted backup format <../Usage/ExportImportSettings.html>`_ @dlvoy
* `new SMS TOTP authentication <../Children/SMS-Commands.html>`_ @dlvoy
* `new SMS PUMP CONNECT, DISCONNECT <../Children/SMS-Commands.html#commands>`_ commands @Lexsus
* better support for tiny basals on Dana pumps @Mackwe
* small Insight fixes @TebbeUbben @MilosKozak
* `"Default language" option <../Configuration/Preferences.html#general>`_ @MilosKozak
* vector icons @Philoul
* `set neutral temps for MDT pump <../Configuration/MedtronicPump.html#configuration-of-phone-androidaps>`_ @Tornado-Tim
* History browser improvements @MilosKozak
* removed OpenAPS MA algorithm @Tornado-Tim
* removed Oref0 sensitivity @Tornado-Tim
* `Biometric or password protection <../Configuration/Preferences.html#protection>`_ for settings, bolus @MilosKozak
* `new automation trigger <../Usage/Automation.html>`_ @PoweRGbg
* `Open Humans uploader <../Configuration/OpenHumans.html>`_ @TebbeUbben @AdrianLxM
* New documentation @Achim

Version 2.6.1.4
================
Release date: 04-05-2020

Please use `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ or newer to build the apk.

Major new features
----------------------
* Insight: Disable vibration on bolus for firmware version 3 - second attempt
* Otherwise is equal to 2.6.1.3. Update is optional. 

Version 2.6.1.3
================
Release date: 03-05-2020

Please use `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ or newer to build the apk.

Major new features
------------------
* Insight: Disable vibration on bolus for firmware version 3
* Otherwise is equal to 2.6.1.2. Update is optional. 

Version 2.6.1.2
================
Release date: 19-04-2020

Please use `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ or newer to build the apk.

Major new features
------------------
* Fix crashing in Insight service
* Otherwise is equal to 2.6.1.1. If you are not affected by this bug you don't need to upgrade.

Version 2.6.1.1
================
Release date: 06-04-2020

Please use `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ or newer to build the apk.

Major new features
------------------
* Resolves SMS CARBS command issue while using Combo pump
* Otherwise is equal to 2.6.1. If you are not affected by this bug you don't need to upgrade.

Version 2.6.1
==============
Release date: 21-03-2020

Please use `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ or newer to build the apk.

Major new features
------------------
* Allow to enter only ``https://`` in NSClient settings
* Fixed `BGI <../Getting-Started/Glossary.html>`_ displaying bug on watches
* Fixed small UI bugs
* Fixed Insight crashes
* Fixed future carbs with Combo pump
* Fixed `LocalProfile -> NS sync <../Configuration/Config-Builder.html#upload-local-profiles-to-nightscout>`_
* Insight alerts improvements
* Improved detection of boluses from pump history
* Fixed NSClient connection settings (wifi, charging)
* Fixed sending of calibrations to xDrip

Version 2.6.0
==============
Release date: 29-02-2020

Please use `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ or newer to build the apk.

Major new features
------------------
* Small design changes (startpage...)
* Careportal tab / menu removed - more details `here <../Usage/CPbefore26.html>`__
* New `Local Profile plugin <../Configuration/Config-Builder.html#local-profile-recommended>`_

  * Local profile can hold more than 1 profile
  * Profiles can be cloned and edited
  * Ability of upload profiles to NS
  * Old profile switches can be cloned to new profile in LocalProfile (timeshift and percentage is applied)
  * Veritical NumberPicker for targets
* SimpleProfile is removed
* `Extended bolus <../Usage/Extended-Carbs.html#extended-bolus>`_ feature - closed loop will be disabled
* MDT plugin: Fixed bug with duplicated entries
* Units are not specified in profile but it's global setting
* Added new settings to startup wizard
* Different UI and internal improvements
* `Wear complications <../Configuration/Watchfaces.html>`_
* New `SMS commands <../Children/SMS-Commands.html>`_ BOLUS-MEAL, SMS, CARBS, TARGET, HELP
* Fixed language support
* Objectives: `Allow to go back <../Usage/Objectives.html#go-back-in-objectives>`_, Time fetching dialog
* Automation: `allow sorting <../Usage/Automation.html#sort-automation-rules>`_
* Automation: fixed bug when automation was running with disabled loop
* New status line for Combo
* GlucoseStatus improvement
* Fixed TempTarget NS sync
* New statistics activity
* Allow Extended bolus in open loop mode
* Android 10 alarm support
* Tons on new translations

Version 2.5.1
==================================================
Release date: 31-10-2019

Please note the `important notes <../Installing-AndroidAPS/Releasenotes.html#important-notes-2-5-0>`_ and `limitations <../Installing-AndroidAPS/Releasenotes.html#is-this-update-for-me-currently-is-not-supported>`_ listed for `version 2.5.0 <../Installing-AndroidAPS/Releasenotes.html#version-2-5-0>`__. 
* Fixed a bug in the network state receiver that lead to crashes with many (not critical but would waste a lot of energy re-calculating things).
* New versioning that will allow to do minor updates without triggering the update-notification.

Version 2.5.0
==================================================
Release date: 26-10-2019

.. _important-notes-2-5-0:

Important notes
--------------------------------------------------
* Please use `Android Studio Version 3.5.1 <https://developer.android.com/studio/>`_ or newer to `build the apk <../Installing-AndroidAPS/Building-APK.html>`_ or `update <../Installing-AndroidAPS/Update-to-new-version.html>`_.
* If you are using xDrip `identify receiver <../Configuration/xdrip.html#identify-receiver>`_ must be set.
* If you are using Dexcom G6 with the `patched Dexcom app <../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_ you will need the version from the `2.4 folder <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_.
* Glimp is supported from version 4.15.57 and newer.

Is this update for me? Currently is NOT supported
--------------------------------------------------
* Android 5 and lower
* Poctech
* 600SeriesUploader
* Patched Dexcom from 2.3 directory

Major new features
--------------------------------------------------
* Internal change of targetSDK to 28 (Android 9), jetpack support
* RxJava2, Okhttp3, Retrofit support
* Old `Medtronic pumps <../Configuration/MedtronicPump.html>`_ support (RileyLink need)
* New `Automation plugin <../Usage/Automation.html>`_
* Allow to `bolus only part <../Configuration/Preferences.html#advanced-settings-overview>`_ from bolus wizard calculation
* Rendering insulin activity
* Adjusting IOB predictions by autosens result
* New support for patched Dexcom apks (`2.4 folder <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_)
* Signature verifier
* Allow to bypass objectives for OpenAPS users
* New `objectives <../Usage/Objectives.html>`_ - exam, application handling
  (If you started at least objective "Starting on an open loop" in previous versions exam is optional.)
* Fixed bug in Dana* drivers where false time difference was reported
* Fixed bug in `SMS communicator <../Children/SMS-Commands.html>`_

Version 2.3
==================================================
Release date: 25-04-2019

Major new features
--------------------------------------------------
* Important safety fix for Insight (really important if you use Insight!)
* Fix History-Browser
* Fix delta calculations
* Language updates
* Check for GIT and warn on gradle upgrade
* More automatic testing
* Fixing potential crash in AlarmSound Service (thanks @lee-b !)
* Fix broadcast of BG data (works independently of SMS permission now!)
* New Version-Checker


Version 2.2.2
==================================================
Release date: 07-04-2019

Major new features
--------------------------------------------------
* Autosens fix: deactivate TT raises/lowers target
* New translations
* Insight driver fixes
* SMS plugin fix


Version 2.2
==================================================
Release date: 29-03-2019

Major new features
--------------------------------------------------
* `DST fix <../Usage/Timezone-traveling.html#time-adjustment-daylight-savings-time-dst>`_
* Wear Update
* `SMS plugin <../Children/SMS-Commands.html>`_ update
* Go back in objectives.
* Stop loop if phone disk is full


Version 2.1
==================================================
Release date: 03-03-2019

Major new features
--------------------------------------------------
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ support (by Tebbe Ubben and JamOrHam)
* Status lights on main screen (Nico Schmitz)
* Daylight saving time helper (Roumen Georgiev)
* Fix processing profile names comming from NS (Johannes Mockenhaupt)
* Fix UI blocking (Johannes Mockenhaupt)
* Support for updated G5 app (Tebbe Ubben and Milos Kozak)
* G6, Poctech, Tomato, Eversense BG source support (Tebbe Ubben and Milos Kozak)
* Fixed disabling SMB from preferences (Johannes Mockenhaupt)

Misc
--------------------------------------------------
* If you are using non default ``smbmaxminutes`` value you have to setup this value again


Version 2.0
==================================================
Release date: 03-11-2018

Major new features
--------------------------------------------------
* oref1/SMB support (`oref1 documentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achieve and how to use it so it can operate smoothly.
* `_Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ pump support
* Setup wizard: guides you through the process of setting up AndroidAPS

Settings to adjust when switching from AMA to SMB
--------------------------------------------------
* Objective 10 must be started for SMBs to be enabled (SMB tab generally shows what restrictions apply)
* maxIOB now includes _all_ IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U.
* min_5m_carbimpact default has changed from 3 to 8 going from AMA to SMB. If you are upgrading from AMA to SMB, you have to change it manually
* Note when building AndroidAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! If your build fails with an error regarding "on demand configuration" you can do the following:

  * Open the Preferences window by clicking File > Settings (on Mac, Android Studio > Preferences).
  * In the left pane, click Build, Execution, Deployment > Compiler.
  * Uncheck the Configure on demand checkbox.
  * Click Apply or OK.

Overview tab
--------------------------------------------------
* Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). TTs use defaults set in preferences. The new Hypo TT option is a high temp TT to prevent the loop from too aggressively overcorrection rescue carbs.
* Treatment buttons: old treatment button still available, but hidden by default. Visibility of buttons can now be configured. New insulin button, new carbs button (including `eCarbs/extended carbs <../Usage/Extended-Carbs.html>`_)
* `Colored prediction lines <../Getting-Started/Screenshots.html#prediction-lines>`_
* Option to show a notes field in insulin/carbs/calculator/prime+fill dialogs, which are uploaded to NS
* Updated prime/fill dialog allows priming and creating careportal entries for site change and cartridge change

Watch
--------------------------------------------------
* Separate build variant dropped, included in regular full build now. To use bolus controls from watch, enable this setting on the phone
* Wizard now only asks for carbs (and percentage if enabled in watch settings). Which parameters are included in the calculation can be configured in the settings on the phone
* confirmations and info dialogs now work on wear 2.0 as well
* Added eCarbs menu entry

New plugins
--------------------------------------------------
* PocTech app as BG source
* Dexcom patched app as BG source
* oref1 sensitivity plugin

Misc
--------------------------------------------------
* App now uses drawer to show all plugins; plugins selected as visible in config builder are shown as tabs on top (favourites)
* Overhaul for config builder and objectives tabs, adding descriptions
* New app icon
* Lots of improvements and bugfixes
* Nightscout-independent alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see *Local alerts* in settings)
* Option to keep screen on
* Option to show notification as Android notification
* Advanced filtering (allowing to always enable SMB and 6h after meals) supported with patched Dexcom app or xDrip with G5 native mode as BG source.
