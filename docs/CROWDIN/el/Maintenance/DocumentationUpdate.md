- - -
tocdepth: 1
- - -

# Ενημερώσεις και αλλαγές της τεκμηρίωσης

## Οκτώβριος 2026

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Έξυπνα ρολόγια και AAPS](#watches-external-companion-apps): η ενότητα **Samsung Tizen** γίνεται **External Companion Apps** (εξωτερικές συνοδευτικές εφαρμογές) και αναφέρει τις εφαρμογές που διαβάζουν το broadcast του **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). Το [WatchDrip+](#watches-xiaomi-amazfit) 0.5 και νεότερο συνδέεται απευθείας στο **AAPS** χωρίς το xDrip+: προστέθηκαν βήματα ρύθμισης, που υπάρχουν και σε σύνοψη στις σελίδες [Διαμόρφωση](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) και [Απομακρυσμένη παρακολούθηση](../RemoteFeatures/RemoteMonitoring.md). Ρολόγια Bluejay: το GTS καταργήθηκε, ενημερώθηκε το τρέχον μοντέλο @psonnera
- [Δημιουργία μέσω browser με το AAPS Builder](#aaps-builder): έκδοση 6 του workflow δημιουργίας. Τα βήματα δημιουργίας χρησιμοποιούν τώρα ακριβείς, ελεγμένες εκδόσεις των εργαλείων του GitHub και του μηχανήματος δημιουργίας. Η δημιουργία εξηγεί επίσης καθαρά πότε επικολλήθηκε λάθος κείμενο στο secret `KEYSTORE_SET`. Η [σελίδα ρύθμισης](#aaps-builder-setup) είναι τώρα μέρος της τεκμηρίωσης και μεταφράζεται. Ελέγχει το όνομα χρήστη σας στο GitHub και έχει πιο καθαρή βοήθεια για το secret, για το "Page not found" (404) και για την εφαρμογή GitHub. Αν το `.github/workflows/build.yml` σας γράφει έκδοση 5 ή παλαιότερη, αντικαταστήστε το όπως εξηγείται στο [Ενημέρωση του AAPS](#aaps-builder-updates) @psonnera
- [Πρόγραμμα εγκατάστασης web του AAPS](#web-installer): είναι τώρα σελίδα της τεκμηρίωσης και μεταφράζεται όπως οι άλλες. Η παλιά διεύθυνση εξακολουθεί να λειτουργεί @psonnera
- [Δημιουργία μέσω browser με το AAPS Builder](#aaps-builder): η έκδοση 3 του workflow δημιουργίας προσθέτει την παραλλαγή `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 και νεότερο). Για να τη δημιουργήσετε, αντικαταστήστε το `.github/workflows/build.yml` σας όπως εξηγείται στο [Ενημέρωση του AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): αφαιρέθηκε η τροποποιημένη εφαρμογή Dexcom G7 (DiaKEM), που δεν λειτουργεί πια για νέες εγκαταστάσεις @psonnera
- [Δημιουργία μέσω browser με το AAPS Builder](#aaps-builder): έκδοση 2 του workflow δημιουργίας. Οι αυτόματες εβδομαδιαίες δημιουργίες αφαιρέθηκαν (χωρίς πρόγραμμα, χωρίς μεταβλητές `AUTO_BUILD` / `AUTO_VARIANT`, χωρίς ετικέτες `built/…`): κάθε δημιουργία την ξεκινάτε εσείς, με την έκδοση και την παραλλαγή που επιλέγετε, και το workflow έχει μόνο δικαίωμα ανάγνωσης στο αποθετήριό σας. Αν το `.github/workflows/build.yml` σας γράφει έκδοση 1, αντικαταστήστε το όπως εξηγείται στο [Ενημέρωση του AAPS](#aaps-builder-updates). Προστέθηκαν στιγμιότυπα οθόνης για κάθε βήμα @psonnera
- [Δημιουργία μέσω browser με το AAPS Builder](#aaps-builder): το workflow δημιουργίας είναι τώρα μέρος αυτής της τεκμηρίωσης. Δεν υπάρχει πια αποθετήριο προτύπου: δημιουργείτε ένα κενό ιδιωτικό αποθετήριο και προσθέτετε το workflow από τη σελίδα ρύθμισης (νέο βήμα 2). Το workflow δεν ελέγχει πια κάποιο εξωτερικό αποθετήριο για ενημερώσεις. Αν δημιουργήσατε το αποθετήριό σας από το παλαιότερο πρότυπο, αντικαταστήστε το `.github/workflows/build.yml` με το workflow από τη σελίδα ρύθμισης, όπως εξηγείται στο [Ενημέρωση του AAPS](#aaps-builder-updates) @psonnera
- Νέα σελίδα [Δημιουργία μέσω browser με το AAPS Builder](#aaps-builder): δημιουργήστε το AAPS από ένα τηλέφωνο Android με μια σελίδα ρύθμισης που φιλοξενείται σε αυτόν τον ιστότοπο, με αυτόματες εβδομαδιαίες δημιουργίες και χωρίς αρχείο προετοιμασίας. Αντικαθιστά τις οδηγίες Android της δημιουργίας μέσω browser (αφαιρέθηκαν οι σελίδες για το File Manager Plus). Το AAPS Builder δημιουργήθηκε από τον @dio99, τεκμηρίωση από τον @psonnera

## Αύγουστος 2026

- [Μεταφορά και εγκατάσταση του AAPS στο τηλέφωνό σας](../SettingUpAaps/TransferringAndInstallingAaps.md): η σελίδα *Επαλήθευση προγραμματιστή Android* ενσωματώθηκε στον οδηγό εγκατάστασης. Προστέθηκαν το [πρόγραμμα εγκατάστασης web](#android-developer-verification-web) (εγκατάσταση του APK απευθείας από τον browser, χωρίς επαλήθευση) και το ασύρματο ADB @psonnera

## Ιούλιος 2026

- [Εισαγωγή στα APS και AAPS](../Getting-Started/Introduction.md): έλεγχος ακρίβειας της ενότητας για τα APS. Διορθώθηκαν ο τίτλος και ο σύνδεσμος της αναφοράς στο Frontiers και η αναφορά παρουσιάζεται πλέον ως γενικό υπόβαθρο και όχι ως τρέχων οδηγός αγοράς. Ενημερώθηκαν οι δηλώσεις για τα συστήματα δύο ορμονών και το πλήρως κλειστό κύκλωμα. Διευκρινίστηκε ότι ο ελεγκτής δεν είναι πάντα εφαρμογή τηλεφώνου. Αφαιρέθηκαν εμπορικές ονομασίες και αριθμοί χρηστών χωρίς πηγή. Το OS-AID διορθώθηκε σε *Open-Source Automated Insulin Delivery* @psonnera
- [Γλωσσάριο](../UsefulLinks/Glossary.md): προστέθηκαν οι όροι **AID**, **FCL**, **HCL** και **OS-AID**, με συνδέσμους από τους όρους **APS** και **Κλειστό Κύκλωμα** @psonnera
- Νέα σελίδα [Επαλήθευση προγραμματιστή Android](#android-developer-verification): η επίδραση της επερχόμενης απαίτησης επαλήθευσης της Google στην εγκατάσταση εφαρμογών που δημιουργείτε μόνοι σας, με δωρεάν τρόπους εγκατάστασης (ADB, advanced flow, λογαριασμός περιορισμένης διανομής) @psonnera

## Ιούνιος 2026

- [Δημιουργία μέσω browser](#browser-build): νέα δομή σε πολλές σελίδες, που ξεκινά από τις επιλογές σας (Fork → keystore Επιλογή 1/Επιλογή 2 με ξεχωριστή σελίδα για κάθε συσκευή → Google Drive → Build → Αντιμετώπιση προβλημάτων). Αφαιρέθηκαν οι ένθετες καρτέλες και η εγκατάσταση του File Manager Plus έγινε ξεχωριστό, εμφανές βήμα @psonnera
- [Εισαγωγή στα APS και AAPS](../Getting-Started/Introduction.md): η ορολογία άλλαξε από *DIY* σε *OS-AID* (Open-Source Automated Insulin Delivery), προστέθηκαν τα Trio και Stelo, ενημερώθηκε ο πίνακας συμβατότητας αντλιών/CGM @tmhastings

## Μάρτιος 2026

- [Προσθήκη επιλογής δημιουργίας από τη γραμμή εντολών (CLI)](../SettingUpAaps/CLIBuild.md) @je-l
- Μετονομασία του *Computer Build* σε *Android Studio Build*. Τα ονόματα των αρχείων διατηρούνται για τις διευθύνσεις URL.

## Ιανουάριος 2025

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Ενημέρωση της λίστας CGM. Αφαιρέθηκαν τα Dexcom G5, Tomato, Glimp.
- [Περιβάλλον για την εναλλαγή σημείων](#Aapsscreens-site-rotation)
- [Τρόπος λειτουργίας](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Δεκέμβριος 2025

- [Βελτίωση του προφίλ](../GettingHelp/ProfileTuning.md) από @robrub

## Οκτώβριος 2025

- DiaKEM: οι νέες εγκαταστάσεις δεν λειτουργούν μετά την αναβάθμιση των διακομιστών @psonnera
- Αφαιρέθηκε η τροποποιημένη εφαρμογή για το Libre 2 (παρωχημένη): δεν λειτουργεί με τους νέους αισθητήρες @psonnera
- Reworked Omnipod DASH page @XiTatiON

## Αύγουστος 2025

- Ενημερώθηκαν οι εκδόσεις και οι προϋποθέσεις για το Android Studio
- Προστέθηκε η έκδοση [3.3.2.1](#version3321), αφαιρέθηκαν οι αναφορές στο Android 16 (διορθώθηκε)
- Προστέθηκε η [Δημιουργία μέσω browser](#browser-build) @Angus

## Μάιος 2025

- Προστέθηκε η [σελίδα αναβάθμισης για το 3.2.0.4](#update-aaps-3204) @psonnera

## Ιανουάριος 2025

- Γρήγορος Οδηγός - [λειτουργία παρατεταμένου πατήματος](#Preferences-quick-wizard) @emilise
- Η σελίδα [Δυναμική ISF](../DailyLifeWithAaps/DynamicISF.md) γράφτηκε από την αρχή @emilise

## Δεκέμβριος 2024

- Τεκμηρίωση της [έκδοσης 3.3](#version3300) @emilise

## Νοέμβριος 2024

- Ενημέρωση της σελίδας [Το προφίλ σας στο AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Αναδιοργάνωση του περιεχομένου για τα [έξυπνα ρολόγια Wear OS](../WearOS/BuildingAapsWearOS.md) @psonnera

## Οκτώβριος 2024

- Ενημέρωση αρκετών σελίδων:
  - [Πόσο χρόνο θα πάρει](#preparing-how-long-will-it-take), [Επισκόπηση των εξαρτημάτων](../Getting-Started/ComponentOverview.md), [Βήματα](../SettingUpAaps/CompletingTheObjectives.md), [Το προφίλ σας στο AAPS](../SettingUpAaps/YourAapsProfile.md), [Διαμόρφωση](../SettingUpAaps/ConfigBuilder.md) και [Ρυθμίσεις](../SettingUpAaps/Preferences.md), [Οθόνες του AAPS](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Υπολογισμός COB (ενεργοί υδατάνθρακες)](../DailyLifeWithAaps/CobCalculation.md), [Δυναμική ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Οδηγίες δημιουργίας για το Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Τεχνική εργασία (διαδικασία δημοσίευσης της τεκμηρίωσης, οργάνωση αρχείων...) @psonnera και @emilise

***

Λείπει το ιστορικό από τον Μάρτιο 2022 έως τον Σεπτέμβριο 2024

Με την αναδιάρθρωση για την έκδοση 3.2, αφαιρέθηκαν ορισμένες παρωχημένες πληροφορίες. Μπορείτε να τις βρείτε στην προηγούμενη έκδοση της τεκμηρίωσης:

Η τεκμηρίωση του AAPS 3.1 είναι διαθέσιμη [εδώ](https://androidaps.readthedocs.io/en/3.1/index.html).

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
