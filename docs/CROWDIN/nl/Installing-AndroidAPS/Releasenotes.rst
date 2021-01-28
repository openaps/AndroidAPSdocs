Release notes
**************************************************
Volg de instructies in de `handleiding <../Installing-AndroidAPS/Update-to-new-version.html>`_ voor het bijwerken van de app naar een nieuwe versie. Daar vind je ook oplossingen voor veelvoorkomende problemen.

Zodra een nieuwe update beschikbaar is zie je de volgende melding:

.. image:: ../images/AAPS_LoopDisable90days.png
  :alt: Update info

Dan heb je 60 dagen om bij te werken. Als je niet binnen deze 60 dagen bijwerkt, zal AAPS terugvallen naar LGS (Lage Glucose Stop, vergelijkbaar met de "stop bij laag" van de 640G - zie de `veelgebruikte woordenlijst <../Getting-Started/Glossary.html>`_) zoals in `Doel 6 <../Usage/Objectives.html>`_.

Als je daarna nog eens 30 dagen wacht met bijwerken (dus 90 dagen vanaf de datum dat de nieuwe versie beschikbaar kwam) zal AAPS overschakelen naar Open Loop.

Deze harde beperkingen zijn uiteraard niet bedoeld om je te pesten, maar zijn er om veiligheidsredenen. Nieuwe versies van AndroidAPS bevatten niet alleen nieuwe handige functies, maar ook belangrijke veiligheidsupdates. Daarom is het noodzakelijk dat elke gebruiker zijn app bijwerkt zodra een nieuwe versie beschikbaar komt. Helaas zijn er nog steeds signalen dat sommige gebruikers een hele oude versie van hun app gebruiken, dus dit is een poging om de veiligheid voor individuele gebruikers en de hele doe-het-zelf loop-gemeenschap te verbeteren.  

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

Belangrijkste nieuwe functies
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

Belangrijkste nieuwe functies
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

Belangrijkste nieuwe functies
----------------------
* Insight: Disable vibration on bolus for firmware version 3 - second attempt
* Otherwise is equal to 2.6.1.3. Update is optional. 

Version 2.6.1.3
================
Release date: 03-05-2020

Please use `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ or newer to build the apk.

Belangrijkste nieuwe functies
------------------
* Insight: Disable vibration on bolus for firmware version 3
* Otherwise is equal to 2.6.1.2. Update is optional. 

Version 2.6.1.2
================
Release date: 19-04-2020

Please use `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ or newer to build the apk.

Belangrijkste nieuwe functies
------------------
* Fix crashing in Insight service
* Otherwise is equal to 2.6.1.1. If you are not affected by this bug you don't need to upgrade.

Version 2.6.1.1
================
Release date: 06-04-2020

Please use `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ or newer to build the apk.

Belangrijkste nieuwe functies
------------------
* Resolves SMS CARBS command issue while using Combo pump
* Otherwise is equal to 2.6.1. If you are not affected by this bug you don't need to upgrade.

Version 2.6.1
==============
Release date: 21-03-2020

Please use `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ or newer to build the apk.

Belangrijkste nieuwe functies
------------------
* Allow to enter only https:// in NSClient settings
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

Belangrijkste nieuwe functies
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
* `Extended bolus <../Usage/Extended-Carbs.html#id1>`_ feature - closed loop will be disabled
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

Versie 2.5.1
==================================================
Release datum: 31-10-2019

Please note the `important notes <../Installing-AndroidAPS/Releasenotes.html#important-notes>`_ and `limitations <../Installing-AndroidAPS/Releasenotes.html#is-this-update-for-me-currently-is-not-supported>`_ listed for `version 2.5.0 <../Installing-AndroidAPS/Releasenotes.html#version-2-5-0>`_. 
* Fixed a bug in the network state receiver that lead to crashes with many (not critical but would waste a lot of energy re-calculating things).
* New versioning that will allow to do minor updates without triggering the update-notification.

Version 2.5.0
==================================================
Release datum: 26-10-2019

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

Belangrijkste nieuwe functies
--------------------------------------------------
* Internal change of targetSDK to 28 (Android 9), jetpack support
* RxJava2, Okhttp3, Retrofit support
* Old `Medtronic pumps <../Configuration/MedtronicPump.html>`_ support (RileyLink need)
* New `Automation plugin <../Usage/Automation.html>`_
* Allow to `bolus only part <../Configuration/Preferences.html#advanced-settings-overview>`_ from bolus wizard calculation
* Rendering insulin activity
* Adjusting IOB predictions by autosense result
* New support for patched Dexcom apks (`2.4 folder <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_)
* Handtekening controle
* Allow to bypass objectives for OpenAPS users
* New `objectives <../Usage/Objectives.html>`_ - exam, application handling
   
   (If you started at least objective "Starting on an open loop" in previous versions exam is optional.)
* Fixed bug in Dana* drivers where false time difference was reported
* Fixed bug in `SMS communicator <../Children/SMS-Commands.html>`_

Versie 2.3
==================================================
Release datum: 25-04-2019

Belangrijkste nieuwe functies
--------------------------------------------------
* Important safety fix for Insight (really important if you use Insight!)
* Historiek-venster werkt weer
* Bugfix voor delta-berekeningen
* Taal-updates
* GIT-check ingebouwd + waarschuwing voor gradle upgrade toegevoegd
* Meer automatische tests
* Potentiële crash in alarm Sound Service gerepareerd (met dank aan @lee-b !)
* Fix broadcast of BG data (works independently of SMS permission now!)
* Versie Checker geïntroduceerd


Versie 2.2.2
==================================================
Release datum: 07-04-2019

Belangrijkste nieuwe functies
--------------------------------------------------
* Tijdelijke fix voor probleem met Gevoeligheidsdetectie: Tijdelijk Streefdoel verhogen/verlagen is gedeactiveerd
* Nieuwe vertalingen
* Verbetreringen aan Insight stuurprogramma
* SMS plugin fix


Versie 2.2
==================================================
Release datum: 29-03-2019

Belangrijkste nieuwe functies
--------------------------------------------------
* `DST fix <../Usage/Timezone-traveling.html#time-adjustment-daylight-savings-time-dst>`_
* Wear Update voor smartwatches
* `SMS plugin <../Children/SMS-Commands.html>`_ update
* Optie om terug te gaan in leerdoelen.
* Onderbreek loop als telefoon-opslagruimte vol is


Versie 2.1
==================================================
Release datum: 03-03-2019

Belangrijkste nieuwe functies
--------------------------------------------------
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ support (by Tebbe Ubben and JamOrHam)
* Statusindicatoren op het Overzicht-scherm (Nico Schmitz)
* Zomer/wintertijd omschakeling (Roumen Georgiev)
* Correctie voor namen van Nightscout-profielen (Johannes Mockenhaupt)
* Correctie voor User Interface blokkering (Johannes Mockenhaupt)
* Ondersteuning voor bijgewerkte G5 app (Tebbe Ubben en Milos Kozak)
* G6, Poctech, Tomato, Eversense BG-bron ondersteuning (Tebbe Ubben en Milos Kozak)
* Correctie voor uitschakelen SMB Instellingen (Johannes Mockenhaupt)

Overig
--------------------------------------------------
* If you are using non default `smbmaxminutes` value you have to setup this value again


Versie 2.0
==================================================
Release datum: 03-11-2018

Belangrijkste nieuwe functies
--------------------------------------------------
* oref1/SMB support (`oref1 documentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achive and how to use it so it can operate smoothly.
* `_Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ pump support
* Setup wizard: gidst je door het proces heen om AndroidAPS in te stellen

Instellingen die je moet aanpassen bij het overschakelen van AMA naar SMB
--------------------------------------------------
* Doel 10 moet zijn gestart om SMBs aan te kunnen zetten (SMB tab toont in het algemeen welke beperkingen gelden)
* maxIOB now includes _all_ IOB, not just added basal. Dat betekent dus, wanneer je jezelf een maaltijdbolus van 8E hebt gegeven en maxIOB is 7E, dat er geen SMBs worden afgegeven totdat IOB onder de 7E is gezakt.
* min_5m_carbimpact default has changed from 3 to 8 going from AMA to SMB. Je moet dit handmatig doen wanneer je van AMA naar SMB wisselt.
* Let op bij het bouwen van de AndroidAPS 2.0 apk: Configuration on demand wordt niet ondersteund door de huidige versie van de Android Gradle plugin! Als je een foutmelding krijgt die gaat over "on demand configuration" kun je het volgende doen:

  * Open het Preferences (Voorkeuren) venster door op File > Settings (Bestand > Instellingen) te klikken (op Mac, Android Studio > Voorkeuren).
  * In het linkerscherm, klik op Build, Execution, Deployment > Compiler.
  * Vink de Configure on demand checkbox uit.
  * Klik op Apply (Toepassen) of OK.

Tabblad Overzicht
--------------------------------------------------
* Via de knoppen bovenaan heb je makkelijk toegang tot het pauzeren/voortzetten van de loop, het bekijken/wisselen van profiel en het starten/stoppen van tijdelijke streefdoelen (TTs). Standaardinstellingen voor Tijdelijke Streefdoelen. De nieuwe Hypo Streefdoel optie is een hoog Tijdelijk Streefdoel dat voorkomt dat de loop te agressief corrigeert voor de hypo-koolhydraten.
* Behandeling knoppen: de oude behandeling knop is nog steeds beschikbaar maar standaard verborgen. Je kunt zelf aangeven welke knoppen zichtbaar zijn. New insulin button, new carbs button (including `eCarbs/extended carbs <../Usage/Extended-Carbs.html>`_)
* `Colored prediction lines <../Getting-Started/Screenshots.html#prediction-lines>`_
* Optie om een notitieveld te tonen in insuline/koolhydraten/calculator/ontlucht+vul dialoogvensters. Notities worden geüpload naar NS
* Bijgewerkt ontlucht/vul dialoogvenster maakt het mogelijk om te ontluchten/vullen via de telefoon, en infuuswissels en cartridgewissels te noteren in de Careportal

Smartwatch
--------------------------------------------------
* Aparte build variant is komen te vervallen, nu opgenomen in de reguliere full build. Om de bolus bediening te gebruiken vanaf het horloge moet deze instelling op de telefoon worden ingeschakeld
* Wizard vraagt nu alleen maar naar koolhydraten (en percentage indien ingeschakeld in de horloge instellingen). Op de telefoon kan worden in de instellingen worden geconfigureerd welke parameters worden meegenomen in de berekening
* bevestigings- en en informatie-dialoogvensters werken nu ook in wear 2.0
* Nieuw eCarbs menu-item toegevoegd

Nieuwe plugins
--------------------------------------------------
* PocTech app als BG-bron
* Dexcom patched app als BG-bron
* oref1 gevoeligheidsdetectie

Overig
--------------------------------------------------
* App gebruikt nu een 'drawer' om alle plugins te tonen; geselecteerde plugins in de configurator worden weergegeven als tabs bovenaan het scherm (favorieten)
* Configurator en doelen tabbladen gewijzigd waarbij beschrijvingen zijn toegevoegd
* Nieuw app icoon
* Veel verbeteringen en bugfixes
* Nightscout-independant alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see *Local alerts* in settings)
* Optie om het scherm aan te houden
* Optie om meldingen als Android melding te tonen
* Geavanceerde filtering (wat het mogelijk maakt om SMB altijd in te schakelen en 6 uur na maaltijden) ondersteund voor gepatchte Dexcom app of xDrip met G5 native mode als BG-bron.
