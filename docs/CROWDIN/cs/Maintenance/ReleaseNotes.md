(Releasenotes-release-notes)=
# Poznámky k vydání

Please follow the instructions in the [update manual](UpdateToNewVersion). Na stránce popisující aktualizaci také můžete najít sekci řešení problémů, která řeší nejčastější problémy při aktualizaci.

Jakmile bude k dispozici nová aktualizace, obdržíte následující informace:

![Informace o aktualizaci](../images/AAPS_LoopLGS60days.png)



Pak máte 60 dnů na aktualizaci. If you do not update within these 60 days AAPS will fall back to LGS (low glucose suspend - see [glossary](../UsefulLinks/Glossary.md)) as in [objective 6](#objectives-objective6).

Pokud neaktualizujete do dalších 30 dní (90 dní od nového vydání) přejde AAPS na otevřenou smyčku.

![Informace o aktualizaci](../images/AAPS_LoopDisable90days.png)

Prosím pochopte, že tato změna není určena, aby vás otravovala, ale je to kvůli bezpečnostním důvodům. Nové verze AAPS neposkytují pouze nové funkce, ale také důležité bezpečnostní opravy. Proto je nezbytně důležité, aby všichni uživatelé aktualizovali AAPS. Bohužel stále existují hlášení o chybách z velmi starých verzí, takže se jedná o pokus zlepšit bezpečnost pro každého uživatele a celou komunitu DIY. Děkujeme za pochopení.

```{admonition} First version of AAPS
:class: note

První testovací verze byla spuštěna již v roce 2015. V roce 2016 byla vydána první verze.

Chronologie těchto vydání momentálně není k dispozici, ale protože je tato otázka kladena často, zodpovídáme ji zde.

```
![AAPS 1.0](../images/update/AAPS1.0.png)

(maintenance-android-version-aaps-version)=

## Verze Androidu a verze AAPS

Pokud váš telefon používá verzi Androidu starší než 9, nebudete moct používat AAPS verze 3 a vyšší, protože ty vyžadují minimálně Android 9.

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
## Version 3.3.0.0

Version 3.3 is close ! Use the version switcher at the bottom right of your screen to see what's new.

![Open language menu](../images/documentation_language_menu.png)

(version3200)=
## Verze 3.2.0.0 věnována @Philoul

Release date: 23-10-2023

### Důležitá poznámky

- Je vyžadován NS verze 15
- Při používání websocketů v Nighscout pluginu v3, ošetření zadaná prostřednictvím NS (tlačítko +) a dalšími aplikacemi využívajícími API v. 1 nejsou do AAPS odeslána. To bude opraveno v některé následující verzi NS. Dokud NS vnitřně plně nepřejde na verzi 3, musíte vždy používat AAPS a AAPSClient pod stejnou verzí protokolu (v1 nebo v3). To samé platí i pro AAPS a samotný AAPSClient.
- Websockets in v3 plugin works similiar way to v1 plugin. Without websockets enabled AAPS schedules regularly downloads from NS which should lead to lower power consumption because NS is not permanently connected. On the oposite side it means delays in exchanging data. Please read [here](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) the important comments from the dev team before you use it!
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
- tests cleaup @ryanhaining @MilosKozak
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
- remember NS still uses v1 internaly so far thus is not possible to enter data through NS web UI if you are using v3. You must use AAPSClient on SMS if you want enter data remotely

RECOMMENDED SETTING
- because of all above you should choose only one method and use it on all devices (remember all other uploaders at time of writing this are using v1). If you decide to go to v3, select v3 in AAPS and all AAPSClients
- v3 is preffered because of efficiency
- using websockets or not using with v3 depends on your preference
- it HIGHLY recommended to let AAPS gather all data and then upload it to NS as a single uploader. All other devices/applications should only read from NS. By doing it you'll prevent conflicts and sync errors. This is valid for getting BG data to NS using Dexcom Share connector etc. too

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
- New [Low Ressolution Skin](#Preferences-skin)
- New ["Pregnant" patient type](#Open-APS-features-overview-of-hard-coded-limits) @Brian Quinion
- Nové rozložení NSClient pro tablety @MilosKozak
- NSClient přenáší nastavení inzulinu, senzitivity a zobrazení přímo z hlavní AAPS @MilosKozak
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

You need at least start [objective 11 (in later versions objective 10!)](#objectives-objective10) in order to continue using [Automation feature](../DailyLifeWithAaps/Automations.md) (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in [objective 3](#objectives-objective3) yet, you will have to complete the exam before you can start [objective 11](#objectives-objective11). Neovlivní to cíle, které jste již dokončili. Splněné cíle zůstanou zachovány!

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
  - Vertikální výběr hodnot pro cíle

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
- Oprava zpracování názvů profilů z NS (Johannes Mockenhaupt)
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
- [\_Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump.md) pump support
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
