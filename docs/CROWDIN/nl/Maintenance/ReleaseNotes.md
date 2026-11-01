
# Release notes

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Volg de instructies in de [handleiding voor het bijwerken](UpdateToNewVersion.md) om naar een nieuwe versie bij te werken. Het deel over probleemoplossing op de pagina met de handleiding voor het bijwerken behandelt ook de meest voorkomende problemen bij het bijwerken van **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Zie [Wat is er veranderd in AAPS v4](V4Changes.md) voor de belangrijke wijzigingen in gedrag: functies die verplaatst zijn, een nieuwe naam hebben gekregen of verwijderd zijn.
```

Als er een nieuwe update beschikbaar is, krijg je een notificatie zoals deze:

![Informatie over de update](../images/AAPS_LoopDisable90days.png)

Als je niet bijwerkt vóór de vervaldatum, schakelt **AAPS** over naar Open loop.

Zie [Einde van de ondersteuning](EndOfLife.md) voor de einddatums van AAPS-versies.

**Negeer de notificatie niet.** Nieuwe versies van **AAPS** bevatten belangrijke oplossingen voor de veiligheid. Daarom moet elke gebruiker van **AAPS** zo snel mogelijk bijwerken naar de nieuwste versie. Dit is een poging om de veiligheid te verbeteren voor elke gebruiker van **AAPS** en voor de DIY-gemeenschap. Bedankt voor je begrip.

(maintenance-android-version-aaps-version)=

## Android versie en AAPS versie

Als je smartphone een Android-versie ouder dan Android 12 heeft, kun je AAPS v3.4 en hoger niet gebruiken, want daarvoor is minstens Android 12 nodig.

Om gebruikers met een oudere Android-versie een oudere versie van AAPS te laten gebruiken, zijn er nieuwe versies uitgebracht die alleen de versiecontrole veranderen. Er zijn geen andere verbeteringen inbegrepen.

Zoek je Android-versie in de tabel hieronder en gebruik de **AAPS**-versie die erbij hoort. De code wordt gedownload van <https://github.com/nightscout/AndroidAPS> met de getoonde branch.

| Jouw Android-versie | AAPS-versie om te gebruiken | Branch om te downloaden                                          |
| ------------------- | --------------------------- | ---------------------------------------------------------------- |
| Android 12 en hoger | Nieuwste versie             | [master](https://github.com/nightscout/AndroidAPS) (standaard)   |
| Android 11          | **3.3.2.1**                 | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10       | **3.2.0.4**                 | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8           | **2.8.2.1**                 | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7           | **2.6.2**                   | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## WearOS-versie

- AAPS heeft WearOS 3.0, 3.2 of 3.5 (Android 11, API-niveau 30) of nieuwer nodig. Horloges met WearOS 2 worden niet ondersteund.

```{tip}
WearOS 5, API-niveau 34 (Android 14) heeft [beperkingen](#BuildingAapsWearOs-WearOS5).
```

Versions with a heading are the latest release for each Android version (see the table above). The other releases follow in between, with their notes or a link to them on GitHub.

(latestrelease)=

(version400)=

## Version 4.0.0

Release date: 31-10-2026

**New features**

- Nieuwe gebruikersinterface: de telefoonapp is opnieuw gebouwd in Jetpack Compose @MilosKozak
- [Overal zoeken](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migratie naar Kotlin Multiplatform, client voor Windows, Mac, Linux-desktop en iOS @MilosKozak
- [Scènes](../DailyLifeWithAaps/Scenes.md): sla een set acties op en voer ze samen uit @MilosKozak
- [Master ↔ Client besturing](../RemoteFeatures/ClientMasterControl.md): stuur commando's van een client-telefoon naar de master @MilosKozak
  - [Rollen van clients](#client-master-control-roles): Alleen lezen, Maaltijden, Zorgverlener of Beheerder voor elke client @MilosKozak
  - [Beveiligde modus](#client-master-control-hardened-mode): als Client besturing aan staat, neemt de master alleen wijzigingen aan van gekoppelde clients @MilosKozak
  - Koppelen met een QR-code die ook Nightscout op de client instelt, of met een pincode; het geheime koppelgegeven wordt direct na het koppelen vervangen @MilosKozak
  - [Eigen Nightscout-token](#client-master-control-own-token) voor elke client, met alleen de rechten die een client nodig heeft @MilosKozak
- Ondersteuning voor [insulineconcentratie](../AdvancedOptions/InsulinConcentration.md) (U200, U500) in pompen, wizard en profielen @Philoul @MilosKozak
- Insulinebeheer: lijst met insulines, bijnamen, keuze in profiel en wizard @Philoul
- Plugin voor kalibratie @MilosKozak
- [Vloeiend maken](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalman Filter (UKF) @piecycle
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Site rotatie](#Aapsscreens-site-rotation): infuusplaatsen bijhouden en afwisselen @Philoul @MilosKozak
- [Autotune](../AdvancedOptions/Autotune.md) vernieuwd @Philoul
- Nieuwe [widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Toegankelijkheid: de telefoonapp werkt met een schermlezer - knoppen met namen, uitgesproken status, beschrijvingen van grafieken en koppen om snel door te lopen @MilosKozak
- [Instellingen importeren](../Maintenance/ExportImportSettings.md): de pompinstellingen kunnen behouden blijven @MilosKozak
- De vaste notificatie gebruikt live updates van Android, met ondersteuning voor de Samsung Now bar en de delta @premnirmal
- BG-grafiek: [druk lang](#aaps-screens-graph-press-and-hold) om de waarden bij een meting te zien, in elke grafiek van het overzicht @t1dude @olorinmaia
- Betere prestaties @MilosKozak
- Automatische e-carbs in de Bolus wizard @MilosKozak

**New devices**

- **CareLevo**: nieuwe [pompdriver](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: ondersteuning @MilosKozak
- **Instara**: nieuwe CGM-bron @leohunt

**Pump Driver Improvements**

- Overzichtsschermen van de pomp opnieuw gebouwd voor Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn en Equil @MilosKozak
- **Omnipod DASH**: PDM style Ref codes and readable fault descriptions, drift compensation always on, better bolus type reporting @nl-ruud
- **Omnipod**: harde einddatum voor Dash & Eros @mcnelson
- **DanaR, RS**: pompemulator om te testen @MilosKozak
- **Equil**: pompemulator om te testen @MilosKozak
- Veel oplossingen voor pompen en de loop @MilosKozak en anderen

**Wear OS**

- [Horloge-app](../WearOS/WearOsSmartwatch.md) opnieuw gebouwd in Compose, nieuwe tegels en complicaties, automatische installatie van de watchface (Watch Face Push) op Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface beschikbaar voor WearOS 6.0 (GW7, GW8, GW9...) met een speciale WFF-watchface @Philoul @olorinmaia
- CustomWatchface kan nu 5 complicatieplaatsen bevatten die je kunt aanpassen (nieuwe functie, alleen beschikbaar voor oudere horloges) @Philoul
- Nieuwe [WFF-watchface gebaseerd op AAPS-complicaties](#wearos-complications-watchface-setup) @olorinmaia
- Correcties in het resultaat van de Bolus wizard en de Quick Wizard @olorinmaia
- Nieuwe activiteiten BG-grafiek en Bedrijfsmodus in het hoofdmenu @olorinmaia
- Bolus wizard: pagina [Type maaltijd](#WearOsSmartwatch-wizard-meal-type) die de koolhydraten verdeelt zoals de wizard op de telefoon, en [Koolhydraattijd](#WearOsSmartwatch-wizard-carb-time) met de herinnering *Tijd om te eten* op het horloge @olorinmaia
- [Telefoonalarmen op het horloge](#WearOsSmartwatch-phone-alarms): het horloge toont het alarm en biedt Stil en Demp 5 min @olorinmaia

**Build**

- CI-workflows voor builds van tags/branches, koppeling van JDK-versies @Angus-repo

**Contributors**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Full changelog: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

## Version 3.4.2.6

- Equil: betere stabiliteit @MilosKozak

---

(version3425)=

**Version 3.4.2.5**

- Equil fix race condition @MilosKozak

---

(version3424)=

**Version 3.4.2.4**

- Equil fixes @MilosKozak
- NS profile sync fix @MilosKozak

---

(version3423)=

**Version 3.4.2.3**

- Dash: Drift resolution @nl-ruud
- NSClientV3: Fix gap after reconnection @MilosKozak
- Automation: Fix deserialization @MilosKozak
- Equil: Fix battery report @MilosKozak
- Cleanup workflow @vanelsberg
- Equil: improve error recovery @MilosKozak
- DanaRS: fix domestic pump communication @MilosKozak
- Insight: Fix TBR sync @MilosKozak
- Dash: Fix activation bug @nl-ruud

---

(version3422)=

**Version 3.4.2.2**

- Fixing issues with Equil and Medtronic
- Improve safety of Medtrum

---

(version3421)=

**Version 3.4.2.1**

- Equil: fix Pairing and progress dialog @MilosKozak

---

(version3420)=

**Version 3.4.2.0**

Release date: 02-04-2026

- Equil: Fix resistance for different models @hhfcvmars
- Tidepool: Fix session @MilosKozak
- Medtrum: Fix activation path by preventing double fill @MilosKozak
- COB: Fix COB calculation (covers dangerous edge case) @MilosKozak

---

(version3410)=

**Version 3.4.1.0**

Release date: 08-03-2026

**Core**

- Fix DST handling @MilosKozak
- Improve and unify normal target identification (mgdl > 99, mmol > 5.5) @MilosKozak
- SMS: protect RESTART by PIN @MilosKozak
- Maintenance: warn if wrong directory selected @MilosKozak

**Pump Driver Improvements**

- **Omnipod DASH**: refactor BLE driver code to omnipod/common module @jwoglom
- **Omnipod DASH**: try to fix connection state @MilosKozak
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

**Cloud / Backup**

- Add backup to Google Drive @Angus-repo
- Notify UI on cloud storage error state change @Angus-repo
- Allow both local and cloud storage at the same time @Angus-repo

**Tidepool**

- Improve Tidepool OAuth2 migration @MilosKozak
- Fix indefinite Tidepool BLOCKED state, fix rejecting empty SSIDs @michaeln-synapse

**NSClient**

- NSCv3: improve reconnection @MilosKozak

**Wear OS**

- Display New IOB in Wizard Result if IOB is used in calculations @olorinmaia
- Fix Wear BolusProgress with Total Amount @Philoul

**UI**

- Improve ic_none icon for Site Rotation @Philoul
- Fix site rotation manage pump setting not being used @samfundev

**Contributors**

@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

---

(version3400)=

**Version 3.4.0.0**

Release date: 31-12-2025

**Before upgrading:**

* This version requires Google Android 12.0 or above. Check your phone version before attempting to update.
* Update to latest Android Studio or better setup using browser build.

**New features**

* Running mode @MilosKozak
  * Show [loop status history](#AapsScreens-running-mode) in treatment tabs
  * Show and allow changing [loop status from AAPSClient](#RemoteControl_aapsclient).<br>NB : needs the setting [NSClient > Synchronization > Receive Running mode events](#Preferences-nsclient-synchronization)
* [New CGMs](../Getting-Started/CompatiblesCgms.md) : Glunovo, Intelligo, Sinocare
* [Site rotation](#Aapsscreens-site-rotation) support @Philoul
* New [automation action](#automations-automation-action) : enable or disable SMBs @MilosKozak
* Syai CGM is [trusted source](#GettingStarted-TrustedBGSource) and supports advanced filtering @MilosKozak

**Wear OS Improvements**

* dramatically reduced battery usage @MilosKozak
* UI improvements and fixes @olorinmaia
* almost complete rewritten code to match current level of libs (WearOS 2 previously) @MilosKozak
* 2 new complications for extended data @Philoul
* Migrated to modern complication provider with DataStore @MilosKozak

**Memory Leak Fixes**

* Fixed memory leaks in code @MilosKozak
* Added LeakCanary memory leak reporting to Firebase Crashlytics @MilosKozak

**Pump Driver Improvements**

* **DanaI**: fixed disconnection issues @MilosKozak
* **RileyLink**: Speedup communication by minimizing delays @mifi100
* **Medtrum**: Added patch activation time and age display @vanelsberg, password uppercase fix @MilosKozak
* **Combo**: Fixed Test race conditions @MilosKozak @dv1
* **Equil**: Optimized connectivity, reduced battery usage @MilosKozak

**Nightscout Sync**

* Improved deduplication on NS failure @MilosKozak

**UI/UX Improvements**

* various improvements @MilosKozak @Philoul @olorinmaia

**Automatisering**

* New SMB control action - enable/disable SMB via automation @MilosKozak

**Testing**

* Added comprehensive unit tests for Equil, Eopatch, Dana, and Medtronic pumps @MilosKozak
* Improved test stability and coverage across multiple modules @MilosKozak

**Tidepool**

* Tidepool OAUTH2 (Support for new Tidepool authentication) @MilosKozak

---

(version3321)=

## Versie 3.3.2.1

Release datum: 13-08-2025

- Omnipod Bluetooth-verbinding op Android 16 opgelost
- CI-proces (bouwen in de browser)
- Omrekening mmol-mg/dl opgelost
- Verkeerde tijdkeuze in dialoogvensters in sommige tijdzones opgelost
- Lezen van sleutels in de eenvoudige modus opgelost
- Ontbrekende voorspellingen op Wear opgelost
- Betere Configuratie
- Betere volledige synchronisatie met NSCv3

---

(version3300)=

**Versie 3.3.2.0**

Release datum: 27-03-2025

**Hoe je bijwerkt**

* Om deze versie te bouwen heb je [de versie van Android Studio met de naam "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) of hoger nodig. Als je al een versie 3.3.x hebt gebouwd, moet je Android Studio opnieuw bijwerken.

(version-enforcement)=

**Starting this version, notification and version enforcement has been simplified and softened and works the following way:**

*  Geen vervaldatum als het apparaat offline is (als er geen verbinding met internet is). Er zijn dus geen extra periodes van 60 en 90 dagen meer.
*  Na de vervaldatum wordt de LGS-modus afgedwongen
*  Je krijgt minder vaak waarschuwingen/notificaties:
   - nog 28 dagen of meer: elke 7 dagen
   - nog 27–14 dagen: elke 3 dagen
   - daarna één keer per dag
   - De notificatie komt na 12 uur 's middags, zodat je er 's nachts geen last van hebt
* Er zijn maar 2 soorten notificaties
   - Nieuwe versie beschikbaar (heeft geen gevolgen voor AAPS)
   - De app vervalt op een datum in de toekomst (nog geen gevolgen voor AAPS) / is vervallen (AAPS gaat naar de LGS-modus)

**News**

* SMS RESTART command @MilosKozak
* Watch Profile switch parameters @olorinmaia
* Dark mode AAPS V2 watchface @olorinmaia
* G7 data exchange improvements @olorinmaia
* Widget configuration @MilosKozak
* Radiobuttons UI improvements @olorinmaia
* Automation: position choosing from map @MilosKozak
* Version visible on main screens @MilosKozak
* Compilation with existing git system is enforced (no zip downloads)
* Show version on main screen @MilosKozak
* Tidepool upload improvements @ConstantinMatheis

**Bug fixes**

* Dash unbonding fix @Andreas
* Garmin fixes @robertbuessow @suside
* Fix of IOB displaying in dialogs @olorinmaia
* Objectives spelling and validation improvements @MilosKozak
* Fixed rendering of emulated TBRs @MilosKozak
* Fixed bypassing security @tdrkDev

---

**Version 3.3.1.3**

Release date: 21-01-2025

**Bug fixes**

* Dash: bonding is optional (default off) @MilosKozak
* Equil: fixed bolus 10+U, alarm improvements @EquilHack
* Garmin: watch improvements @swissalpine
* Watch improvements @olorinmaia
* Control loop status from watch @tdrkDev
* Stability improvements

*  **New [setup of Authenticator](#sms-commands-authenticator-setup) may be needed.**

---

**Version 3.3.1.2**

Release date: 15-01-2025

**Hoe je bijwerkt**

* [Android Studio version called "Ladybug Feature Drop"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) or above is required to build this version. **This is not the same as plain "Ladybug".** If you already built a 3.3.x version, you need to upgrade Android Studio again.

**Bug fixes**

* Dash: use bonding on Android 15+
* Restored Dexcom button on Overview
* Equil: allowed remove non working pump
* Warn when DynISF Adjustment Factor is zero
* NSCv3: resolve websocket communication on phones with slightly different time
* SMS Commands: fix OneTimePassword. **New [setup of Authenticator](#sms-commands-authenticator-setup) may be needed.**
* Fix issue where some preferences could not be edited anymore.
* Fix reset of master password with virtual pump.
* Fixed import of large settings backup files.

---

**Version 3.3.1.0**

Release date: 06-01-2025

**UI changes**

* [Added colors to differentiate between AAPSClient and AAPSClient2](#RemoteControl_aapsclient) @MilosKozak
* Improved Users actions layout and icons

**Other functionalities**

* New automation trigger : [steps count](#screen-heart-rate-steps) @Roman Rihter
* Allow to receive everything on NSCv3 full sync (including data previously not synced such as TBR) @MilosKozak
* NSClient v3 : make Announcement work (_i.e._ from AAPSClient to AAPS) @MilosKozak

**Technical changes & bug fixes**

* Fix Insight crash @philoul
* Fix creation of extra-numerous deviceStatus entries in Nightscout @MilosKozak
* Fix carbs absorption @MilosKozak
* Fixed color of RadioButtons & CheckBoxes @MilosKozak
* Fixed bug in DynISF percentage migration @MilosKozak
* Resolved misplaced DynISF notification @MilosKozak
* Fixed bug in watchfaces @philoul

---

**Version 3.3.0.0**

Release date: 29-12-2024

**Main features**

* **[Dynamic ISF](../DailyLifeWithAaps/DynamicISF.md)** feature is no more a dedicated plugin, but is now included as an option of [OpenAPS SMB](#Config-Builder-aps) plugin, along with some changes in its behavior:
  * **Profile Switch** and **Profile Percentage** is now taken into account for **Dynamic ISF** in respect of dynamic sensitivity strengthness
  * The average **ISF** of the last 24h is calculated and this value is used for bolus wizard and **COB** calculation. **Profile ISF** value is not used at all (except fallback when history data is not available)
  * DynamicISF documentation page has been rewritten. Please read the important section [Things to consider when activating Dynamic ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* [Enable “SMB always” and “SMB after carbs”](#Open-APS-features-enable-smb-always) for FreeStyle Libre 2 and Libre 3 users
  * Note : Requires latest version of xDrip+ or Juggluco.
* New **Automation** triggers
* Unattended settings exports

**Hoe je bijwerkt**

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

**Detailed changes**

**CGMs and Pumps**

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

**UI changes**

* [Simple mode](#preferences-simple-mode) activated by default on fresh install @MilosKozak
* New [QuickWizard](#Preferences-quick-wizard) options @radicalb
  * The QuickWizard now uses the same logic for bolus calculation and display as the calculator. You can now use the “carb time” field in QuickWizard to pre-bolus.
* New [graph scale menu](#aaps-screens-main-graph); [additional graphs menu](#AapsScreens-activate-optional-information) UI improvements @Philoul
* [ConfigBuilder layout improvement](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Sections are now collapsed by default. Use arrow to expand.
* Variable sensitivity visible in AAPSClient
* BolusWizard UI improvements @kenzo44
* Fix text display in pump tabs when using light theme @jbr77rr

**Other functionalities**

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

**Smartwatches**

* wear and watchfaces improvement @Philoul @MilosKozak @olorinmaia
* Watch tiles from Automation actions @Philoul
* Combined watchfaces from AAPS, AAPSClient and AAPSClient2 to monitor more patients @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

**Technical changes**

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

---

(version3204)=

## [Versie 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Release datum: 27-02-2024

Dit is de laatste versie die Android 10 ondersteunt. Als je niet kunt bijwerken naar Android 11, [werk AAPS dan bij naar 3.2.0.4](#update-aaps-3204).

**Wijzigingen**

- Ondersteuning voor G7 via xDrip
- Verbeteringen voor Medtrum
- Pictogram van Automatisering opgelost
- Probleem bij het halen van doel 1 opgelost

---

(version3200)=

**Version 3.2.0.0 dedicated to @Philoul**

Release date: 23-10-2023

**Important hints**

- NS 15 is required
- While using websockets in NS v3 plugin treatments entered through NS UI (plus button) and other applications using v1 API are not sent to AAPS. This will be fixed in future release of NS. Always use the same client (v1 or v3) in AAPS and AAPSClient until NS fully switch to v3 internally. The same is valid for AAPS and AAPSClient itself.
- Websockets in v3 plugin work in a similar manner as v1 plugin. Without websockets enabled AAPS schedules regularly downloads from NS which should lead to lower power consumption because NS is not permanently connected. On the opposite side it means delays in exchanging data. Please read [here](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) the important comments from the dev team before you use it!
- If you are using xdrip as cgm source you must select it again after update due to internal changes
- Tidepool can be used as a replacement of NS to pass first objective
- If you send to xDrip+ you must configure xDrip synchronization plugin. In order to receive BGs from AAPS in xDrip, “xDrip+ Sync Follower” must be selected as source
- If you want to switch to ComboV2 driver, Ruffy must be uninstalled and pump paired again to AAPS
- In order to use DynISF plugin you have to start Objective 11 (all previous must be in finished state to allow start of 11)

**Wijzigingen**

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

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)= **Important comments on using v3 versus v1 API for Nightscout with AAPS**

v1 is the old protocol used for exchanging data between NS web site and NS server. It has many limitations
- v1 sends only 2 days of data
- v1 sends all 2 days of data on every reconnection
- using websockets is mandatory = permanent connection, more battery consumption
- during frequent disconnects to NS connection is paused for 15 minutes to prevent high data usage

v3 is new protocol. More safe and efficient
- while using tokens you can better define access rights
- protocol is more efficient on both sides (AAPS & NS)
- It can read up to 3 months of data from NS
- you can choose to use or to not use websockets on every device (using means faster updates, not using means lower power consumption, but slower updates ie. minutes)
- NSClient is not paused on disconnections

LIMITATIONS
- NS 15 must be used with AAPS 3.2
- v3 doesn't see updates done by v1 protocol (probably it will be resolved in some future version of NS)
- in the opposite direction, because of the old ineffective method of tracking changes, v1 sees changes done by v3
- remember NS still uses v1 internally so far thus is not possible to enter data through NS web UI if you are using v3. You must use AAPSClient or SMS if you want to enter data remotely

RECOMMENDED SETTING
- because of all above you should choose only one method and use it on all devices (remember all other uploaders at time of writing this are using v1). If you decide to go to v3, select v3 in AAPS and all AAPSClients
- v3 is preferred because of efficiency
- using websockets or not using with v3 depends on your preference
- it is HIGHLY recommended to let AAPS gather all data and then upload it to NS as a single uploader. All other devices/applications should only read from NS. By doing it you'll prevent conflicts and sync errors. This is valid for getting BG data to NS using Dexcom Share connector etc. too

---

(version3100)=

**Version 3.1.0**

Release date: 19-07-2022

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

---

**Version 3.0.0**

Release date: 31-01-2022

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

---

(version2821)=

## Version 2.8.2.1

Release date: 05-10-2021

This version is the last one supporting Android 8. [Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2.1)

---

**Versie 2.8.2**

Release datum: 23-01-2021

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

(version-2811)= (important-hints-2-8-1-1)=

**Version 2.8.1.1**

Release date: 12-01-2021

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

---

(Releasenotes-version-2-8-0)=

**Version 2.8.0**

Release date: 01-01-2021

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

---

(Releasenotes-version-2-7-0)=

**Version 2.7.0**

Release date: 24-09-2020

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

---

(Releasenotes-version-2-6-1-4)=

**Version 2.6.1.4**

Release date: 04-05-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

---

**Version 2.6.1.3**

Release date: 03-05-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

---

**Version 2.6.1.2**

Release date: 19-04-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

---

**Version 2.6.1.1**

Release date: 06-04-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

---

**Version 2.6.1**

Release date: 21-03-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

---

(Releasenotes-version-2-6-0)=

**Version 2.6.0**

Release date: 29-02-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

---

**Version 2.5.1**

Release date: 31-10-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

---

(Releasenotes-version-2-5-0)=

**Version 2.5.0**

Release date: 26-10-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

---

**Version 2.3**

Release date: 25-04-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

---

**Version 2.2.2**

Release date: 07-04-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

---

**Version 2.2**

Release date: 29-03-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

---

**Version 2.1**

Release date: 03-03-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

---

**Version 2.0**

Release date: 03-11-2018

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

---

**Versie 1.0**

```{admonition} First version of **AAPS**
:class: note

De eerste testversie begon in 2015 en de eerste release was in 2016.

De precieze volgorde van deze releases is op dit moment niet bekend, maar omdat deze vraag vaak is gesteld, leggen we het hier vast.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
