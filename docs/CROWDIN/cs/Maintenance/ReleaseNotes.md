
# Poznámky k vydání

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Please follow the instructions in the [update manual](UpdateToNewVersion.md) to update to a new version. Sekce řešení problémů na stránce návodu k aktualizaci se věnuje i nejčastějším potížím při aktualizaci **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Důležité změny chování – funkce, které se přesunuly, byly přejmenovány nebo odstraněny – najdete na stránce [Co se změnilo v AAPS v4](V4Changes.md).
```

Když bude k dispozici nová aktualizace, dostanete oznámení, jako je toto:

![Informace o aktualizaci](../images/AAPS_LoopDisable90days.png)

Pokud neaktualizujete do data vypršení platnosti, **AAPS** se přepne do otevřené smyčky.

Data konce podpory jednotlivých verzí AAPS najdete na stránce [Konec podpory](EndOfLife.md).

**Oznámení neignorujte.** Nové verze **AAPS** přinášejí důležité bezpečnostní opravy. Proto musí každý uživatel **AAPS** co nejdříve aktualizovat na nejnovější verzi. This is an effort to try to improve the safety for each **AAPS** user and the DIY community. Děkujeme za pochopení.

(maintenance-android-version-aaps-version)=

## Verze Androidu a verze AAPS

Pokud váš telefon používá Android starší než Android 12, nebudete moci používat AAPS v3.4 a novější, protože vyžaduje alespoň Android 12.

Aby bylo uživatelům se starším Androidem umožněno používat starší verzi AAPS, byla upravena pouze kontrola verzí. Jiné změny neobsahuje.

Najděte svou verzi Androidu v tabulce níže a použijte odpovídající verzi **AAPS**. Kód se stahuje z <https://github.com/nightscout/AndroidAPS> z uvedené větve (branch).

| Vaše verze Androidu  | Verze AAPS, kterou použít | Větev ke stažení                                                 |
| -------------------- | ------------------------- | ---------------------------------------------------------------- |
| Android 12 a novější | Nejnovější verze          | [master](https://github.com/nightscout/AndroidAPS) (výchozí)     |
| Android 11           | **3.3.2.1**               | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10        | **3.2.0.4**               | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8            | **2.8.2.1**               | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7            | **2.6.2**                 | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## Verze pro WearOS

- AAPS vyžaduje WearOS 3.0, 3.2 nebo 3.5 (Android 11, API level 30) nebo novější. Hodinky s WearOS 2 nejsou podporované.

```{tip}
WearOS 5, API level 34 (Android 14) má [omezení](#BuildingAapsWearOs-WearOS5).
```

Versions with a heading are the latest release for each Android version (see the table above). The other releases follow in between, with their notes or a link to them on GitHub.

(latestrelease)=

(version400)=

## Version 4.0.0

Release date: 31-10-2026

**New features**

- Nové uživatelské rozhraní: aplikace pro telefon přestavěna v Jetpack Compose @MilosKozak
- [Globální vyhledávání](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migrace na Kotlin Multiplatform, klient pro Windows, Mac, Linux desktop a iOS @MilosKozak
- [Scény](../DailyLifeWithAaps/Scenes.md): uložte si sadu akcí a spusťte je najednou @MilosKozak
- [Ovládání master ↔ klient](../RemoteFeatures/ClientMasterControl.md): posílání příkazů z telefonu klienta do hlavního zařízení @MilosKozak
  - [Role klientů](#client-master-control-roles): Pouze pro čtení, Jídlo, Pečovatel nebo Admin pro každého klienta @MilosKozak
  - [Zabezpečený režim](#client-master-control-hardened-mode): se zapnutým ovládáním z klienta přijímá hlavní zařízení změny jen od spárovaných klientů @MilosKozak
  - Párování pomocí QR kódu, který na klientovi zároveň nastaví Nightscout, nebo pomocí PINu; tajný klíč pro párování se hned po spárování vymění @MilosKozak
  - [Vlastní token Nightscoutu](#client-master-control-own-token) pro každého klienta, jen s právy, která klient potřebuje @MilosKozak
- Podpora [koncentrace inzulínu](../AdvancedOptions/InsulinConcentration.md) (U200, U500) v pumpách, kalkulačce a profilech @Philoul @MilosKozak
- Správa inzulínů: katalog inzulínů, přezdívky, výběr v profilu a v kalkulačce @Philoul
- Plugin kalibrace @MilosKozak
- [Vyhlazování](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalmanův filtr (UKF) @piecycle
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Rotace míst aplikace](#Aapsscreens-site-rotation): sledování a střídání míst infuze @Philoul @MilosKozak
- Přepracovaný [Autotune](../AdvancedOptions/Autotune.md) @Philoul
- Nové [widgety](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Přístupnost: aplikace pro telefon funguje se čtečkou obrazovky – pojmenované ovládací prvky, hlasový stav, popisy grafů a nadpisy pro rychlou orientaci @MilosKozak
- [Import nastavení](../Maintenance/ExportImportSettings.md): může zachovat nastavení pumpy @MilosKozak
- Trvalé oznámení používá živé aktualizace Androidu, s podporou Samsung Now bar a s deltou @premnirmal
- Graf glykémie: [stiskněte a podržte](#aaps-screens-graph-press-and-hold) a uvidíte hodnoty v daném čase, na každém grafu v přehledu @t1dude @olorinmaia
- Vylepšení výkonu @MilosKozak
- Automatické eSacharidy v bolusové kalkulačce @MilosKozak

**New devices**

- **CareLevo**: nový [ovladač pumpy](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: podpora @MilosKozak
- **Instara**: nový zdroj CGM @leohunt

**Pump Driver Improvements**

- Přestavěné obrazovky přehledu pump pro Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn a Equil @MilosKozak
- **Omnipod DASH**: PDM style Ref codes and readable fault descriptions, drift compensation always on, better bolus type reporting @nl-ruud
- **Omnipod**: pevné datum konce pro Dash a Eros @mcnelson
- **DanaR, RS**: emulátor pumpy pro testování @MilosKozak
- **Equil**: emulátor pumpy pro testování @MilosKozak
- Mnoho oprav pump a smyčky @MilosKozak a další

**Wear OS**

- [Aplikace pro hodinky](../WearOS/WearOsSmartwatch.md) přestavěna v Compose, nové dlaždice a komplikace, automatická instalace ciferníku (Watch Face Push) na Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface je k dispozici pro WearOS 6.0 (GW7, GW8, GW9...) s vyhrazeným ciferníkem WFF @Philoul @olorinmaia
- CustomWatchface teď může obsahovat 5 pozic pro komplikace, které si můžete přizpůsobit (nová funkce dostupná jen pro starší hodinky) @Philoul
- Nový [ciferník WFF založený na komplikacích AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Opravy ve výsledku bolusové kalkulačky a Rychlého bolusu @olorinmaia
- Nová aktivita Graf glykémie a Režim smyčky v hlavní nabídce @olorinmaia
- Bolusová kalkulačka: stránka [typ jídla](#WearOsSmartwatch-wizard-meal-type), která rozdělí sacharidy jako kalkulačka v telefonu, a [čas sacharidů](#WearOsSmartwatch-wizard-carb-time) s připomínkou *čas jíst* na hodinkách @olorinmaia
- [Alarmy z telefonu na hodinkách](#WearOsSmartwatch-phone-alarms): hodinky zobrazí alarm a nabídnou Ztišit a Ztlumit na 5 minut @olorinmaia

**Build**

- CI workflow pro sestavení z tagu/větve, mapování verzí JDK @Angus-repo

**Contributors**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Full changelog: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

## Version 3.4.2.6

- Equil: vyšší stabilita @MilosKozak

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

**Automatizace**

* New SMB control action - enable/disable SMB via automation @MilosKozak

**Testing**

* Added comprehensive unit tests for Equil, Eopatch, Dana, and Medtronic pumps @MilosKozak
* Improved test stability and coverage across multiple modules @MilosKozak

**Tidepool**

* Tidepool OAUTH2 (Support for new Tidepool authentication) @MilosKozak

---

(version3321)=

## Verze 3.3.2.1

Datum vydání: 13. 08. 2025

- Opraveno připojení Bluetooth k Omnipodu na Androidu 16
- Proces CI (sestavení v prohlížeči)
- Oprava převodu mmol–mg/dl
- Oprava špatného výběru času v dialozích v některých časových pásmech
- Oprava čtení klíčů ve zjednodušeném režimu
- Oprava chybějících predikcí na hodinkách
- Vylepšená Konfigurace
- Vylepšená plná synchronizace NSCv3

---

(version3300)=

**Verze 3.3.2.0**

Datum vydání: 27. 03. 2025

**Jak aktualizovat**

* K sestavení této verze je potřeba [Android Studio verze „Meerkat“](#Building-APK-recommended-specification-of-computer-for-building-apk-file) nebo novější. Pokud jste už sestavili některou verzi 3.3.x, musíte Android Studio znovu aktualizovat.

(version-enforcement)=

**Starting this version, notification and version enforcement has been simplified and softened and works the following way:**

*  Když je zařízení offline (bez připojení k internetu), platnost nevyprší. To znamená, že už neexistují lhůty 60 a 90 dní.
*  Po vypršení platnosti se vynutí režim LGS
*  Varování/oznámení budete dostávat méně často:
   - zbývá 28 a více dní: každých 7 dní
   - zbývá 27–14 dní: každé 3 dny
   - pak jednou denně
   - Oznámení se zobrazí až po poledni, aby vás nerušilo v noci
* Existují jen 2 druhy oznámení
   - Je k dispozici nová verze (nemá žádný vliv na AAPS)
   - Platnost aplikace vyprší k určitému datu v budoucnu (stále bez vlivu na AAPS) / platnost vypršela (AAPS přejde do režimu LGS)

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

**Jak aktualizovat**

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

**Jak aktualizovat**

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

**Chytré hodinky**

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

## [Verze 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Datum vydání: 27. 02. 2024

Tato verze je poslední, která podporuje Android 10. Pokud nemůžete přejít na Android 11, [aktualizujte AAPS na verzi 3.2.0.4](#update-aaps-3204).

**Změny**

- Podpora xDrip G7
- Opravy Medtrum
- Oprava ikony automatizace
- Oprava plnění cíle 1

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

**Změny**

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

[Poznámky k vydání](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

---

**Version 3.0.0**

Release date: 31-01-2022

[Poznámky k vydání](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

---

(version2821)=

## Version 2.8.2.1

Release date: 05-10-2021

This version is the last one supporting Android 8. [Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2.1)

---

**Verze 2.8.2**

Datum vydání: 23. 01. 2021

[Poznámky k vydání](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

(version-2811)= (important-hints-2-8-1-1)=

**Version 2.8.1.1**

Release date: 12-01-2021

[Poznámky k vydání](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

---

(Releasenotes-version-2-8-0)=

**Version 2.8.0**

Release date: 01-01-2021

[Poznámky k vydání](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

---

(Releasenotes-version-2-7-0)=

**Version 2.7.0**

Release date: 24-09-2020

[Poznámky k vydání](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

---

(Releasenotes-version-2-6-1-4)=

**Version 2.6.1.4**

Release date: 04-05-2020

[Poznámky k vydání](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

---

**Version 2.6.1.3**

Release date: 03-05-2020

[Poznámky k vydání](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

---

**Version 2.6.1.2**

Release date: 19-04-2020

[Poznámky k vydání](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

---

**Version 2.6.1.1**

Release date: 06-04-2020

[Poznámky k vydání](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

---

**Version 2.6.1**

Release date: 21-03-2020

[Poznámky k vydání](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

---

(Releasenotes-version-2-6-0)=

**Version 2.6.0**

Release date: 29-02-2020

[Poznámky k vydání](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

---

**Version 2.5.1**

Release date: 31-10-2019

[Poznámky k vydání](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

---

(Releasenotes-version-2-5-0)=

**Version 2.5.0**

Release date: 26-10-2019

[Poznámky k vydání](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

---

**Version 2.3**

Release date: 25-04-2019

[Poznámky k vydání](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

---

**Version 2.2.2**

Release date: 07-04-2019

[Poznámky k vydání](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

---

**Version 2.2**

Release date: 29-03-2019

[Poznámky k vydání](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

---

**Version 2.1**

Release date: 03-03-2019

[Poznámky k vydání](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

---

**Version 2.0**

Release date: 03-11-2018

[Poznámky k vydání](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

---

**Verze 1.0**

```{admonition} First version of **AAPS**
:class: note

První testovací verze vznikla v roce 2015 a první vydání bylo v roce 2016.

Přesná chronologie těchto vydání zatím není k dispozici, ale protože se na to lidé ptali už několikrát, uvádíme to zde.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
