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

## Φεβρουάριος 2022

- [Σήμα προειδοποίησης για την ποιότητα της BG](#aaps-screens-bg-warning-sign) @tanja
- [Ενημέρωση για την αντλία Medtronic](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Απαραίτητοι έλεγχοι μετά την ενημέρωση στο AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Ενημέρωση της τεκμηρίωσης για το AAPS 3.0 (εν μέρει) @xJoe
- [Wear OS για το AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Ιανουάριος 2022

- [Αντιμετώπιση προβλημάτων του Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - ενημέρωση @tanja

## Δεκέμβριος 2021

- [Δημιουργία του APK](../SettingUpAaps/BuildingAaps.md) - ενημέρωση για το Android Studio Arctic Fox | 2020.3.1 @tanja
- Προστέθηκαν πληροφορίες για το [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

## Νοέμβριος 2021

- Best practices for calibrating a Libre 2 sensor
- [ISF](../UsefulLinks/FAQ.md) - νέα διατύπωση για την επίδραση
- Ενημέρωση της σελίδας [Αντιμετώπιση προβλημάτων του Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Αφαιρέθηκε η τροποποιημένη εφαρμογή [Dexcom](../CompatibleCgms/DexcomG6.md), επειδή είναι πλέον παρωχημένη

## Οκτώβριος 2021

- [Σημειώσεις έκδοσης](ReleaseNotes.md) AAPS 3.0 beta

## Σεπτέμβριος 2021

- Προτεινόμενες προδιαγραφές υπολογιστή για να [δημιουργήσετε την εφαρμογή AAPS](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Ιούνιος 2021

- [Χειροκίνητη εγκατάσταση (sideload) watchface](../WearOS/WearOsSmartwatch.md)

## Απρίλιος 2021

- Λίστα με [συσκευές επικοινωνίας](#CompatiblePumps-additional-communication-device) για αντλίες Omnipod και Medtronic
- Προβλέψεις του AAPS στο [Nightscout](#Nightscout-manual-nightscout-setup)

## Μάρτιος 2021

- Η επικοινωνία των προγραμματιστών μεταφέρθηκε από το gitter στο [discord](https://discord.gg/4fQUWHZ4Mw)

## Φεβρουάριος 2021

- Νέα γραμμή πλοήγησης και [αλλαγή γλώσσας](../NavigateDoc/ChangeLanguageVersion.md)

## Ιανουάριος 2021

- [Καρτέλα ενεργειών](#screens-action-tab) - περισσότερες λεπτομέρειες στη σελίδα «Οθόνες του AAPS»
- Dexcom G6 με [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- [Επίπεδο μπαταρίας](#screens-sensor-level-battery) του smart reader για Libre
- [Βήματα](#objectives-objective3) - νέες ερωτήσεις
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

## Δεκέμβριος 2020

- [Libre 2](../CompatibleCgms/Libre2.md) - η τροποποιημένη εφαρμογή δεν λειτουργεί με αισθητήρες των ΗΠΑ
- [Σταθερά όρια (hard-coded) του OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 - χειροκίνητη εγκατάσταση του Google Play Service

## Οκτώβριος 2020

- Accu-Chek Combo - ενημέρωση για τη [ρύθμιση ώρας στη θερινή ώρα](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - επιλογή για [αποστολή απόλυτων τιμών](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Αρχεία καταγραφής - περισσότερες λεπτομέρειες για τη [θέση του φακέλου](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - ενημέρωση κατάστασης
- [Εντολές SMS - συγχρονισμός ώρας](../RemoteFeatures/SMSCommands.md)

## Σεπτέμβριος 2020

- Μεγάλη ενημέρωση για τη νέα έκδοση 2.7 του AAPS
- For details see the [release notes](#Releasenotes-version-2-7-0)

## Ιούνιος 2020

- Libre 2 - περισσότερες λεπτομέρειες για την τροποποιημένη εφαρμογή Libre Link και τη χρήση πομπών Bluetooth
- [Ταξίδια με αλλαγή ζώνης ώρας](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) με το Libre 2

## Μάιος 2020

- [Εκτεταμένο bolus μόνο για τις αντλίες Dana και Insight](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Απενεργοποίηση δόνησης στο Insight](#Accu-Chek-Insight-Pump-vibration) (μόνο firmware 3.x)
- [Ελάχιστη αλλαγή αιτήματος](#Preferences-minimal-request-change) για λιγότερες ειδοποιήσεις στη λειτουργία ανοιχτού κυκλώματος
- Τροποποιημένη εφαρμογή Libre Link - έλεγχος αν η τροποποίηση έγινε σωστά
- [Γραμμές πρόβλεψης](#aaps-screens-prediction-lines) - περισσότερες λεπτομέρειες

## Απρίλιος 2020

- Καταχώρηση ινσουλίνης με παλαιότερη ώρα (π.χ. ινσουλίνη από σύριγγα)
- Η υποστήριξη του Android 6 θα σταματήσει στην επόμενη έκδοση master

## Μάρτιος 2020

- [Δημιουργία του apk με το Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- Το [DanaRS με firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **δεν μπορεί προς το παρόν να χρησιμοποιηθεί με το AAPS!**
- [Εκτεταμένο bolus και αλλαγή σε ανοιχτό κύκλωμα](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Ενημέρωση του apk με το Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

## Φεβρουάριος 2020

- Προσοχή στους αυτοματισμούς
- [Autosens](#Open-APS-features-autosens) - σύντομη εξήγηση
- Εναλλακτικές λύσεις για το Careportal
- Λειτουργία [Εκτεταμένο bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) - το κλειστό κύκλωμα θα απενεργοποιηθεί
- Νέο [πρόσθετο Local Profile (τοπικό προφίλ)](../SettingUpAaps/ConfigBuilder.md)
- Παράδειγμα ρύθμισης - ενημέρωση για το Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Επιπλοκές Wear](../WearOS/WearOsSmartwatch.md)

## Ιανουάριος 2020

- [Χειροκίνητη διόρθωση υδατανθράκων](#screens-bolus-carbs) για λάθος καταχωρήσεις υδατανθράκων
- [Μέγεθος εικόνων](../SupportingAaps/HowToEditTheDocs.md) κατά την επεξεργασία της τεκμηρίωσης

## Δεκέμβριος 2019

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - setup with screenshots
- [Accu-Chek Insight και Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - λύση για τη χρήση
- [Glimp](#Config-Builder-bg-source) - υποστηρίζεται η έκδοση 4.15.57 και νεότερες
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - μεγάλη ενημέρωση, πολύ περισσότερες λεπτομέρειες
- [Επιπλοκές watchface](#Watchfaces-complications) - χρησιμοποιήστε το αγαπημένο σας watchface με δεδομένα του AAPS

## Νοέμβριος 2019

- [Αυτοματισμός - απενεργοποίηση όταν απενεργοποιείται το κύκλωμα](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 - ενημέρωση για την αλλαγή πομπού](#xdrip-replace-transmitter)
- [Εκτεταμένο bolus - γιατί δεν λειτουργεί μέσα στο κύκλωμα](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Συχνές Ερωτήσεις - αθλητισμός](#FAQ-sports)
- [Αρχική οθόνη - γραμμές στο γράφημα](#aaps-screens-main-graph)
- [Insight - Απενεργοποίηση απόλυτων τιμών στο NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Αντλία Medtronic - πιθανές διπλές καταχωρήσεις](../CompatiblePumps/MedtronicPump.md)
- [Νέος οδηγός για το Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Αλλαγή προφίλ με ποσοστό - παράδειγμα](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Ενημέρωση των εντολών SMS](../RemoteFeatures/SMSCommands.md)
- [Αντιμετώπιση προβλημάτων του Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Αντιμετώπιση προβλημάτων - συλλογή συνδέσμων](../GettingHelp/GeneralTroubleshooting.md)
- Ενημέρωση - γρήγορος οδηγός για έμπειρους χρήστες
- Τεκμηρίωση - ενημέρωση για την [επεξεργασία](#edit-the-docs-code-syntax) και τη [μετάφραση](#translations-translation-of-the-documentation).

## Οκτώβριος 2019

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - log options](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Ο υπολογισμός COB σε ξεχωριστή σελίδα](../DailyLifeWithAaps/CobCalculation.md)
- [COB - εντοπισμός λάθος τιμής COB](#CobCalculation-detection-of-wrong-cob-values)
- [Αντιμετώπιση προβλημάτων ειδικά για το Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Ενημέρωση των Βημάτων για την έκδοση 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Ενημέρωση των επιλογών](../SettingUpAaps/Preferences.md)
- [Αναστολείς SGLT-2 - μην τους χρησιμοποιείτε με το κύκλωμα](#PreparingForAaps-no-sglt-2-inhibitors)
- [Αντιμετώπιση προβλημάτων στις εντολές SMS](#SMSCommands-troubleshooting)
- [xDrip - ενημέρωση για την αλλαγή πομπού G6](#xdrip-replace-transmitter)

## Σεπτέμβριος 2019

- [Αυτοματοποιήστε](../DailyLifeWithAaps/Automations.md)
- [Οδηγός Bolus](#AapsScreens-wrong-cob-detection) - αργή απορρόφηση υδατανθράκων
- [Ασφάλεια του Nightscout](#Nightscout-security-considerations)
- [Χρονική μετατόπιση προφίλ](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (περισσότερες λεπτομέρειες)
- [Απομακρυσμένη παρακολούθηση](../RemoteFeatures/RemoteMonitoring.md)
- [Τι είναι ένα σύστημα κλειστού κυκλώματος;](#Introduction-what-does-hybrid-closed-loop-mean)

## Αύγουστος 2019

- Dexcom G6 - περιοχή της τροποποιημένης εφαρμογής
- [Νέος πομπός Dexcom G6](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- Τι χρειάζομαι; - νέα δομή και επιπλέον πληροφορίες
- Νέα δομή
