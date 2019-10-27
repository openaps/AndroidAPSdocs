# Notes de Version

Veuillez suivre les instructions du [manuel de mise à jour](../Installing-AndroidAPS/Update-to-new-version.md). Vous pouvez également trouver une section de dépannage répondant aux difficultés les plus courantes lors de la mise à jour dans la page du manuel de mise à jour.

A partir de la version 2.3, une nouvelle procédure de mise à jour est établie. Vous recevrez les informations suivantes dès qu'une nouvelle mise à jour sera disponible :

![Update info](../images/AAPS_LoopDisable90days.png)

Ensuite, vous avez 60 jours pour mettre à jour. Si vous ne faites pas de mise à jour au cours de ces 60 jours, AAPS retournera en mode AGB (Arrêt Glycémie Basse - voir le [glossaire](../Getting-Started/Glossary.md)) comme dans [ l'objectif 4 ](../Usage/Objectives.md).

Si vous ne mettez pas à jour pendant 30 jours supplémentaires (90 jours à partir de la nouvelle date de sortie), AAPS passe à Boucle Ouverte.

Veuillez comprendre que cette modification n'a pas pour but de vous corriger mais est due à des raisons de sécurité. Les nouvelles versions d'AndroidAPS fournissent non seulement de nouvelles fonctionnalités, mais aussi d'importants correctifs de sécurité. Il est donc nécessaire que chaque utilisateur mette à jour a.s.a.p.. Malheureusement, il y a toujours des remontés de bug provenant de très anciennes versions, donc il s'agit d'une tentative d'améliorer la sécurité pour chaque utilisateur et toute la communauté DIY. Merci pour votre compréhension.

## Version 2.5.0

Date de sortie : 26-10-2019

***Remarque*** : Utilisez [Android Studio Version 3.5.1](https://developer.android.com/studio/) ou une version plus récente pour [générer l'apk](../Installing-AndroidAPS/Building-APK.md) ou [mettre à jour](../Installing-AndroidAPS/Update-to-new-version.md).

***Remarque*** : Lors de l'utilisation de xDrip [Identifier le récepteur](../Configuration/xdrip#identify-receiver) doit être défini.

### Cette mise à jour est-elle pour moi ? N'est actuellement PAS pris en charge :

* Android 5
* Poctech
* 600SeriesUploader
* Glimp
* Dexcom patchés présents dans le répertoire 2.3

### Nouvelles fonctionnalités majeures

* Changement interne de targetSDK à 28 (Android 9), prise en charge de jetpack
* Prise en charge de RxJava2, Okhttp3, Retrofit
* Prise en charge d'anciennes [Pompes Medtronic](../Configuration/MedtronicPump.md) (besoin de RileyLink)
* Nouveau [Plugin d'Automatisation](../Usage/Automation.rst)
* Autorisation du bolus que d'une partie du calcul de l'assistant bolus
* Rendering insulin activity
* Adjusting IOB predictions by autosense result
* New support for patched Dexcom apks ([2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4))
* Signature verifier
* Allow to bypass objectives for OpenAPS users
* New [objectives](../Usage/Objectives2019.rst) - exam, application handling
* Fixed bug in Dana* drivers where false time difference was reported
* Fixed bug in [SMS communicator](../Usage/SMS-Commands.md)

## Version 2.3

Release date: 25-04-2019

### Nouvelles fonctionnalités majeures

* Important safety fix for Insight (really important if you use Insight!)
* Fix History-Browser
* Fix delta calculations
* Language updates
* Check for GIT and warn on gradle upgrade
* More automatic testing
* Fixing potential crash in AlarmSound Service (thanks @lee-b !)
* Fix broadcast of BG data (works independently of SMS permission now!)
* New Version-Checker

## Version 2.2.2

Release date: 07-04-2019

### Nouvelles fonctionnalités majeures

* Autosens fix: deactivate TT raises/lowers target
* New translations
* Insight driver fixes
* SMS plugin fix

## Version 2.2

Release date: 29-03-2019

### Nouvelles fonctionnalités majeures

* [DST fix](../Usage/Timezone-traveling#time-adjustment-daylight-savings-time-dst)
* Wear Update
* [SMS plugin](../Usage/SMS-Commands.md) update
* Go back in objectives.
* Stop loop if phone disk is full

## Version 2.1

Release date: 03-03-2019

### Nouvelles fonctionnalités majeures

* Accu-Chek [Insight](../Configuration/Accu-Chek-Insight-Pump.md) support (by Tebbe Ubben and JamOrHam)
* Status lights on main screen (Nico Schmitz)
* Daylight saving time helper (Roumen Georgiev)
* Fix processing profile names comming from NS (Johannes Mockenhaupt)
* Fix UI blocking (Johannes Mockenhaupt)
* Support for updated G5 app (Tebbe Ubben and Milos Kozak)
* G6, Poctech, Tomato, Eversense BG source support (Tebbe Ubben and Milos Kozak)
* Fixed disabling SMB from preferences (Johannes Mockenhaupt)

### Misc

* If you are using non default `smbmaxminutes` value you have to setup this value again

## Version 2.0

Release date: 03-11-2018

### Nouvelles fonctionnalités majeures

* oref1/SMB support ([oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achive and how to use it so it can operate smoothly.
* Accu-check Combo pump support ([setup instructions](../Configuration/Accu-Chek-Combo-Pump.md))
* Setup wizard: guides you through the process of setting up AndroidAPS

### Settings to adjust when switching from AMA to SMB

* Objective 8 must be started for SMBs to be enabled (SMB tab generally shows what restrictions apply)
* maxIOB now includes *all* IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U.
* min_5m_carbimpact default has changed from 3 to 8 going from AMA to SMB. If you are upgrading from AMA to SMB, you have to change it manualy
* Note when building AndroidAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! Si votre construction échoue avec une erreur concernant la "configuration sur demande", faites les actions suivantes :
  
  * Ouvrez la fenêtre Préférences en cliquant sur File > Settings (sur Mac, Android Studio > Preferences).
  * Dans le panneau de gauche, cliquez sur Build, Execution, Deployment > Compiler.
  * Décochez la case Configure on demand.
  * Cliquez sur Appliquer ou OK.

### Overview tab

* Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). TTs use defaults set in preferences. The new Hypo TT option is a high temp TT to prevent the loop from too aggressively overcorrection rescue carbs.
* Treatment buttons: old treatment button still available, but hidden by default. Visibility of buttons can now be configured. New insulin button, new carbs button (including [eCarbs/extended carbs](../Usage/Extended-Carbs.md))
* Colored prediction lines: 
  * Orange: COB (colour is used generally to represent COB and carbs)
  * Dark blue: IOB (colour is used generally to represent IOB and insulin)
  * Light blue: zero-temp
  * Dark yellow: UAM
* Option to show a notes field in insulin/carbs/calculator/prime+fill dialogs, which are uploaded to NS
* Updated prime/fill dialog allows priming and creating careportal entries for site change and cartridge change

### Watch

* Separate build variant dropped, included in regular full build now. To use bolus controls from watch, enable this setting on the phone
* Wizard now only asks for carbs (and percentage if enabled in watch settings). Which parameters are included in the calculation can be configured in the settings on the phone
* confirmations and info dialogs now work on wear 2.0 as well
* Added eCarbs menu entry

### New plugins

* PocTech app as BG source
* Dexcom patched app as BG source
* oref1 sensitivity plugin

### Misc

* App now uses drawer to show all plugins; plugins selected as visible in config builder are shown as tabs on top (favourites)
* Overhaul for config builder and objectives tabs, adding descriptions
* New app icon
* Lots of improvements and bugfixes
* Nightscout-independant alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see *Local alerts* in settings)
* Option to keep screen on
* Option to show notification as Android notification
* Advanced filtering (allowing to always enable SMB and 6h after meals) supported with patched Dexcom app or xDrip with G5 native mode as BG source.