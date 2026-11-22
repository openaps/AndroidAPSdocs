- - -
tocdepth: 1
- - -

# Ažuriranja i promjene dokumentacije

## Listopad 2026.

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Pametni satovi i AAPS](#watches-external-companion-apps): odjeljak **Samsung Tizen** postaje **Vanjske prateće aplikacije** i navodi aplikacije koje čitaju broadcast **AAPS-a** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 i novije verzije povezuju se izravno s **AAPS-om** bez xDripa+: dodani su koraci postavljanja, sažeti i na stranicama [Konfiguracija](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) i [Daljinski nadzor](../RemoteFeatures/RemoteMonitoring.md). Satovi Bluejay: GTS se više ne proizvodi, ažuriran je trenutni model @psonnera
- [Izrada u pregledniku s AAPS Builderom](#aaps-builder): workflow za izradu, verzija 6. Koraci izrade sada koriste točne, provjerene verzije GitHubovih alata i računala za izradu. Izrada također jasno objašnjava kada je u tajnu `KEYSTORE_SET` zalijepljen pogrešan tekst. [Stranica postavki](#aaps-builder-setup) sada je dio dokumentacije i prevedena je. Provjerava vaše GitHub korisničko ime i ima jasniju pomoć za tajnu, „Page not found“ (404) i aplikaciju GitHub. Ako u vašoj datoteci `.github/workflows/build.yml` piše verzija 5 ili starija, zamijenite je kako je objašnjeno u [Ažuriranje AAPS-a](#aaps-builder-updates) @psonnera
- [Web instalacijski program za AAPS](#web-installer): sada je stranica dokumentacije, prevedena kao i ostale. Stara adresa i dalje radi @psonnera
- [Izrada u pregledniku s AAPS Builderom](#aaps-builder): workflow za izradu, verzija 3, dodaje varijantu `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 i noviji). Da biste je izradili, zamijenite svoju datoteku `.github/workflows/build.yml` kako je objašnjeno u [Ažuriranje AAPS-a](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): uklonjena je zakrpana aplikacija Dexcom G7 (DiaKEM) jer više ne radi za nove instalacije @psonnera
- [Izrada u pregledniku s AAPS Builderom](#aaps-builder): workflow za izradu, verzija 2. Automatske tjedne izrade su uklonjene (nema rasporeda, nema varijabli `AUTO_BUILD` / `AUTO_VARIANT`, nema oznaka `built/…`): svaku izradu pokrećete vi, s verzijom i varijantom koju odaberete, a workflow ima samo pravo čitanja vašeg repozitorija. Ako u vašoj datoteci `.github/workflows/build.yml` piše verzija 1, zamijenite je kako je objašnjeno u [Ažuriranje AAPS-a](#aaps-builder-updates). Dodane su snimke zaslona za svaki korak @psonnera
- [Izrada u pregledniku s AAPS Builderom](#aaps-builder): workflow za izradu sada je dio ove dokumentacije. Nema više repozitorija predloška: izradite prazan privatni repozitorij i dodajte workflow sa stranice postavki (novi korak 2). Workflow više ne provjerava ažuriranja u vanjskom repozitoriju. Ako ste svoj repozitorij izradili iz ranijeg predloška, zamijenite `.github/workflows/build.yml` workflowom sa stranice postavki kako je objašnjeno u [Ažuriranje AAPS-a](#aaps-builder-updates) @psonnera
- Nova stranica [Izrada u pregledniku s AAPS Builderom](#aaps-builder): izradite AAPS s Android telefona pomoću stranice postavki na ovoj web-stranici, s automatskim tjednim izradama i bez datoteke za pripremu. Zamjenjuje upute za Android kod izrade u pregledniku (stranice za File Manager Plus su uklonjene). AAPS Builder izradio je @dio99, dokumentaciju @psonnera

## Kolovoz 2026.

- [Prijenos i instalacija AAPS-a na vaš pametni telefon](../SettingUpAaps/TransferringAndInstallingAaps.md): stranica *Android developer verification* (provjera Android razvojnih programera) spojena je s vodičem za instalaciju, dodan je [web instalacijski program](#android-developer-verification-web) (instalacija APK-a izravno iz preglednika, bez provjere) i bežični ADB @psonnera

## Srpanj 2026.

- [Uvod u APS i AAPS](../Getting-Started/Introduction.md): provjera točnosti odjeljka o APS-u. Ispravljeni su naslov i poveznica citata iz časopisa Frontiers, citat je predstavljen kao pozadina, a ne kao trenutni vodič kroz tržište. Ažurirane su izjave o dvohormonskim sustavima i potpuno zatvorenoj petlji, pojašnjeno je da kontroler nije uvijek aplikacija na telefonu, uklonjeni su komercijalni nazivi marki i brojevi korisnika bez izvora, a OS-AID je ispravljen u *Open-Source Automated Insulin Delivery* (automatizirana isporuka inzulina otvorenog koda) @psonnera
- [Pojmovnik](../UsefulLinks/Glossary.md): dodani su pojmovi **AID**, **FCL**, **HCL** i **OS-AID**, s poveznicama iz pojmova **APS** i **Closed Loop** @psonnera
- Nova stranica [Provjera Android razvojnih programera](#android-developer-verification): utjecaj Googleova budućeg zahtjeva za provjeru na instalaciju aplikacija koje ste sami izradili, s besplatnim načinima instalacije (ADB, napredni postupak, račun za ograničenu distribuciju) @psonnera

## Lipanj 2026.

- [Izrada u pregledniku](#browser-build): preuređena u tijek na više stranica koji počinje odlukom (Fork → spremište ključeva Opcija 1/Opcija 2 s posebnom stranicom za svaki uređaj → Google Drive → Izrada → Rješavanje problema); uklonjene su ugniježđene kartice, a instalacija aplikacije File Manager Plus sada je istaknuti korak @psonnera
- [Uvod u APS i AAPS](../Getting-Started/Introduction.md): izraz *DIY* zamijenjen je izrazom *OS-AID* (Open-Source Automated Insulin Delivery – automatizirana isporuka inzulina otvorenog koda), dodani su Trio i Stelo, ažurirana je tablica kompatibilnosti pumpi i CGM-ova @tmhastings

## Ožujak 2026.

- [Dodana opcija izrade iz naredbenog retka (CLI)](../SettingUpAaps/CLIBuild.md) @je-l
- *Computer Build* preimenovan je u *Android Studio Build*. Nazivi datoteka zadržani su za URL-ove.

## Siječanj 2025.

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Ažuriranje popisa CGM-ova. Uklonjeni su Dexcom G5, Tomato i Glimp.
- [Sučelje za rotaciju mjesta primjene](#Aapsscreens-site-rotation)
- [Način rada](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Prosinac 2025.

- [Podešavanje profila u AAPS-u](../GettingHelp/ProfileTuning.md) od @robrub

## Listopad 2025.

- DiaKEM: nove instalacije ne rade nakon nadogradnje poslužitelja @psonnera
- Uklonjena je zakrpana aplikacija za Libre 2 (zastarjela): ne radi s novim senzorima @psonnera
- Reworked Omnipod DASH page @XiTatiON

## Kolovoz 2025.

- Ažurirane verzije i preduvjeti za Android Studio
- Dodano izdanje [3.3.2.1](#version3321), uklonjeni spomeni Androida 16 (popravljeno)
- Dodana je [Izrada u pregledniku](#browser-build) @Angus

## Svibanj 2025.

- Dodana je [stranica za nadogradnju na 3.2.0.4](#update-aaps-3204) @psonnera

## Siječanj 2025.

- Brzi kalkulator: [funkcija dugog pritiska](#Preferences-quick-wizard) @emilise
- Stranica [Dinamički ISF (DynISF)](../DailyLifeWithAaps/DynamicISF.md) napisana je iznova @emilise

## Prosinac 2024.

- Dokumentacija [verzije 3.3](#version3300) @emilise

## Studeni 2024.

- Ažuriranje stranice [Vaš AAPS profil](../SettingUpAaps/YourAapsProfile.md) @emilise
- Reorganization of [Wear OS Smartwatches](../WearOS/BuildingAapsWearOS.md) content @psonnera

## Listopad 2024.

- Ažuriranje nekoliko stranica:
  - [How long will it take](#preparing-how-long-will-it-take), [Component Overview](../Getting-Started/ComponentOverview.md), [Completing the objectives](../SettingUpAaps/CompletingTheObjectives.md), [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md), [Config Builder](../SettingUpAaps/ConfigBuilder.md) & [Preferences](../SettingUpAaps/Preferences.md), [AAPS screens](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Izračun aktivnih ugljikohidrata (COB)](../DailyLifeWithAaps/CobCalculation.md), [Dinamički ISF (DynISF)](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Upute za izradu s Android Studiom Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Technical work (deployment process for the documentation, files organization...) @psonnera & @emilise

***

Nedostaje povijest od ožujka 2022. do rujna 2024.

Pri preradi za verziju 3.2 uklonjene su neke zastarjele informacije. Možete ih pronaći u prethodnoj verziji dokumentacije:

Dokumentacija za AAPS 3.1 dostupna je [ovdje](https://androidaps.readthedocs.io/en/3.1/index.html).

***

```{dropdown} Older updates (2019 to 2022)
**February 2022**

- [BG quality warning sign](#aaps-screens-bg-warning-sign) @tanja
- [Medtronic pump update](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Necessary checks after update to AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Update docs for AAPS 3.0 (partly) @xJoe
- [Wear OS for AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

**January 2022**

- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - update @tanja

**December 2021**

- [Building the APK](../SettingUpAaps/BuildingAaps.md) - update Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) information added @MilosKozak

**November 2021**

- Best practices for calibrating a Libre 2 sensor
- [ISF](../UsefulLinks/FAQ.md) reformulation of impact
- Update [troubleshooting Android studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Removed patched [Dexcom](../CompatibleCgms/DexcomG6.md) app as it is obsolete

**October 2021**

- [Release notes](ReleaseNotes.md) AAPS 3.0 beta

**September 2021**

- Recommended computer specification to [build AAPS app](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

**June 2021**

- [Watchface sideload](../WearOS/WearOsSmartwatch.md)

**April 2021**

- List of [communication devices](#CompatiblePumps-additional-communication-device) for Omnipod and Medtronic pumps
- AAPS predictions in [Nightscout](#Nightscout-manual-nightscout-setup)

**March 2021**

- Dev communication moved from gitter to [discord](https://discord.gg/4fQUWHZ4Mw)

**February 2021**

- New navigation bar and [language switch](../NavigateDoc/ChangeLanguageVersion.md)

**January 2021**

- [Action tab](#screens-action-tab) - more details on page 'AAPS screens'
- Dexcom G6 with [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre smart reader [battery level](#screens-sensor-level-battery)
- [Objectives](#objectives-objective3) - new questions
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

**December 2020**

- [Libre 2](../CompatibleCgms/Libre2.md) - patched app does not work with US sensors
- [OpenAPS hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 Manual Installation of Google Play Service

**October 2020**

- Accu-Chek Combo - update [time adjustment daylight savings time](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - Option to [upload absolute values](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs - more details about [folder location](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - status update
- [SMS commands - time sync](../RemoteFeatures/SMSCommands.md)

**September 2020**

- Major update for new AAPS version 2.7
- For details see the [release notes](#Releasenotes-version-2-7-0)

**June 2020**

- Libre 2 - more details patched Libre Link app & use of Bluetooth transmitters
- [Time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) with Libre 2

**May 2020**

- [Extended bolus only for Dana + Insight pumps](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight deactivate vibration](#Accu-Chek-Insight-Pump-vibration) (firmware 3.x only)
- [Minimal request rate](#Preferences-minimal-request-change) to reduce number of notifications in open loop mode
- Patched Libre Link app - check if correctly patched
- [Prediction lines](#aaps-screens-prediction-lines) - more details

**April 2020**

- Backdate insulin (i.e. given by syringe)
- Android 6 support will be discontinued in next master version

**March 2020**

- [Build apk with Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS with firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **cannot currently be used with AAPS!**
- [Extended bolus and switch to open loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Update apk with Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

**February 2020**

- Automation caveats
- [Autosens](#Open-APS-features-autosens) - short explanation
- Careportal alternatives
- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled
- New [Local Profile plugin](../SettingUpAaps/ConfigBuilder.md)
- Sample Setup - update Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Wear complications](../WearOS/WearOsSmartwatch.md)

**January 2020**

- [Manual carb correction](#screens-bolus-carbs) for faulty carb entries
- [Image size](../SupportingAaps/HowToEditTheDocs.md) when editing docs

**December 2019**

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - setup with screenshots
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - workaround for usage
- [Glimp](#Config-Builder-bg-source) - version 4.15.57 and newer supported
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - major update, way more details
- [Watchface complications](#Watchfaces-complications) - use your favorite watchface with AAPS data

**November 2019**

- [Automation - deactivate when disabling loop](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 replace transmitter update](#xdrip-replace-transmitter)
- [Extended bolus - why they do not work in a loop context](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - sports](#FAQ-sports)
- [Homescreen - lines on graph](#aaps-screens-main-graph)
- [Insight - Disable absolute values in NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic pump - possible double entries](../CompatiblePumps/MedtronicPump.md)
- [New Freestyle Libre 2 tutorial](../CompatibleCgms/Libre2.md)
- [Profile switch with percentage - example](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [SMS commands update](../RemoteFeatures/SMSCommands.md)
- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Troubleshooting - link collection](../GettingHelp/GeneralTroubleshooting.md)
- Update - quick walk-through for experienced users
- Docs - update [edit](#edit-the-docs-code-syntax) and [translation](#translations-translation-of-the-documentation).

**October 2019**

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - log options](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB calculation on separate page](../DailyLifeWithAaps/CobCalculation.md)
- [COB - wrong COB value detection](#CobCalculation-detection-of-wrong-cob-values)
- [Dexcom G6 specific troubleshooting](#DexcomG6-troubleshooting-g6)
- [Objectives update version 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Preferences update](../SettingUpAaps/Preferences.md)
- [SGLT-2 inhibitors - do not use when looping](#PreparingForAaps-no-sglt-2-inhibitors)
- [SMS Commands Troubleshooting](#SMSCommands-troubleshooting)
- [xDrip - update G6 transmitter replacement](#xdrip-replace-transmitter)

**September 2019**

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Bolus calculator](#AapsScreens-wrong-cob-detection) - slow carb absorption
- [Nightscout security](#Nightscout-security-considerations)
- [Profile timeshift](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (more details)
- [Remote monitoring](../RemoteFeatures/RemoteMonitoring.md)
- [What is a closed loop system?](#Introduction-what-does-hybrid-closed-loop-mean)

**August 2019**

- Dexcom G6 patched app region
- [Dexcom G6 new transmitter](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- What do I need? - new structure & additional information
- New structure
```
