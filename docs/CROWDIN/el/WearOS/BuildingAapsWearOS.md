# Δημιουργία της εφαρμογής AAPS για Wear

Η εφαρμογή **AAPS** για έξυπνο ρολόι Wear OS (το **Wear apk**, `aaps-wear-….apk`) είναι ξεχωριστό αρχείο εγκατάστασης από την εφαρμογή **AAPS** του τηλεφώνου. Χρειάζεστε και τις δύο: η εφαρμογή του τηλεφώνου εκτελεί το κύκλωμα, η εφαρμογή του ρολογιού δείχνει τα δεδομένα του και μπορεί να του στέλνει εντολές. Η εφαρμογή του ρολογιού εγκαθίσταται από το τηλέφωνο, δείτε [Ρύθμιση του AAPS στο ρολόι Wear OS σας](WearOsSmartwatch.md).

Οι δύο εφαρμογές λειτουργούν μαζί μόνο όταν ταιριάζουν:

- **Ίδια έκδοση AAPS** στο τηλέφωνο και στο ρολόι.
- **Ίδιο keystore** για την υπογραφή και των δύο εφαρμογών.

Ο πιο απλός τρόπος να το εξασφαλίσετε είναι να δημιουργήσετε και τις δύο εφαρμογές **ταυτόχρονα**, στο ίδιο build. Η δημιουργία μέσω browser το κάνει αυτό για εσάς: κάθε build παράγει μαζί το apk του τηλεφώνου και το Wear apk. Με το Android Studio ή τη γραμμή εντολών, δημιουργείτε το Wear apk ως δεύτερο βήμα, αμέσως μετά το apk του τηλεφώνου.

```{note}
Χρησιμοποιείτε ήδη το **AAPS** στο τηλέφωνό σας, αλλά δεν έχετε Wear apk από το ίδιο build; Δημιουργήστε ξανά και τις δύο εφαρμογές, με το ίδιο keystore, και εγκαταστήστε ξανά και την εφαρμογή του τηλεφώνου. Ένα Wear apk που δημιουργήθηκε μήνες αργότερα, ή με άλλη έκδοση του Android Studio, πιθανότατα δεν θα είναι συμβατό με την εφαρμογή του τηλεφώνου.
```

## Υποστηριζόμενες εκδόσεις Wear OS

Το **AAPS** λειτουργεί σε ρολόγια με **Wear OS 3.0, 3.2 ή 3.5** (Android 11, επίπεδο API 30) **ή νεότερο** (Wear OS 4, 5 και 6). Τα ρολόγια με Wear OS 2 δεν υποστηρίζονται.

```{warning}
Τα watchface του AAPS είναι διαθέσιμα για έξυπνα ρολόγια Wear OS με επίπεδο API 30 έως 33 (Wear OS 3.0, 3.2, 3.5 και 4).<br>
Οι νεότερες εκδόσεις του Wear OS χαλάνε σταδιακά τα watchface του AAPS — δείτε [Αλλαγές στα watchface του Wear OS](#wearos-watchface-changes) και τους [Περιορισμούς του Wear OS 5](#BuildingAapsWearOs-WearOS5).
```

(building-aaps-wear-os-method)=

## Πάρτε το Wear apk με τη μέθοδο δημιουργίας σας

Ακολουθήστε την ενότητα για τη μέθοδο που χρησιμοποιείτε για τη [δημιουργία του AAPS](../SettingUpAaps/BuildingAaps.md).

(building-aaps-wear-os-browser)=

### Δημιουργία μέσω browser (συνιστάται)

**Δεν χρειάζεται να κάνετε τίποτα επιπλέον.** Κάθε δημιουργία μέσω browser παράγει δύο αρχεία από τον ίδιο πηγαίο κώδικα και το ίδιο keystore:

- `aaps-….apk`: η εφαρμογή του τηλεφώνου.
- `aaps-wear-….apk`: η εφαρμογή του ρολογιού.

Το Wear apk ακολουθεί την [παραλλαγή (variant)](#browserbuild-variant) που επιλέξατε για το build: το `fullRelease` δίνει την εφαρμογή **AAPS Wear**, το `aapsclientRelease` την εφαρμογή **AAPSClient Wear**, το `pumpcontrolRelease` την εφαρμογή **PumpControl Wear**. Κάθε εφαρμογή Wear επικοινωνεί μόνο με την αντίστοιχη εφαρμογή του τηλεφώνου.

Πού θα βρείτε το Wear apk:

- **AAPS Builder**: on the build page, scroll down to **Artifacts** and download `aaps-wear-….apk` next to the phone app, as shown in [Step 5 – Install the app on your phone](#aaps-builder-step5). Κατεβάστε το στο τηλέφωνο που εκτελεί το **AAPS**, αν εγκαθιστάτε την εφαρμογή του ρολογιού από το τηλέφωνο (Wear Installer 2 ή Easy Fire Tools), ή στον υπολογιστή σας, αν χρησιμοποιείτε ADB.

  ![Artifacts με τις εφαρμογές για τηλέφωνο και ρολόι](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **Fork με Google Drive**: ανοίξτε το Google Drive σας, τον φάκελο `AAPS`, και μετά τον φάκελο της έκδοσης που δημιουργήσατε. Περιέχει το apk του τηλεφώνου και το Wear apk, δείτε [Βήμα 4 – Δημιουργία του APK](#github-build-apk).

  ![Τοποθεσία στο Google Drive](../images/update/CI/GitHubActions5.png)

Κρατήστε το Wear apk μαζί με το apk του τηλεφώνου στα αντίγραφα ασφαλείας σας. Με το **AAPS Builder**, τα αρχεία μένουν στη σελίδα του build μόνο για 14 ημέρες.

Επόμενο: εγκαταστήστε το Wear apk στο ρολόι, δείτε [Ρύθμιση του AAPS στο ρολόι Wear OS σας](WearOsSmartwatch.md).

(building-aaps-wear-os-android-studio)=

### Android Studio

Το Wear apk δημιουργείται όπως το apk του τηλεφώνου, ως δεύτερο υπογεγραμμένο build. Κάντε το αμέσως μετά το apk του τηλεφώνου, με την ίδια έκδοση του Android Studio και το ίδιο keystore.

- Ακολουθήστε τις οδηγίες για τη [δημιουργία με το Android Studio](../SettingUpAaps/ComputerBuild.md).
- Όταν φτάσετε στην [επιλογή module](#Building-APK-wearapk) στο «Δημιουργία του υπογεγραμμένου apk του AAPS», βεβαιωθείτε ότι επιλέγετε **`AndroidAPS.wear`**.

![Module του Wear](../images/Building-the-App/wear_build1.png)

Επιλέξτε «**fullRelease**» για να δημιουργήσετε το αρχείο apk του **AAPS** για Wear.

![Module του Wear](../images/Building-the-App/wear_build2.png)

Αν προτιμάτε, μπορείτε να δημιουργήσετε αντί γι' αυτό το **“pumpcontrolRelease”** από το αναπτυσσόμενο μενού. Με αυτό μπορείτε μόνο να ελέγχετε την αντλία από απόσταση, χωρίς κύκλωμα.

Επόμενο: εγκαταστήστε το Wear apk στο ρολόι, δείτε [Ρύθμιση του AAPS στο ρολόι Wear OS σας](WearOsSmartwatch.md).

(building-aaps-wear-os-troubleshooting)=

#### Αντιμετώπιση προβλημάτων στη δημιουργία με το Android Studio

Κατά τη δημιουργία της πλήρους εφαρμογής **AAPS** (και στην πραγματικότητα κάθε υπογεγραμμένης εφαρμογής), το Android Studio δημιουργεί ένα αρχείο .json στον ίδιο φάκελο. Αυτό προκαλεί μετά σφάλματα με [αλλαγές που δεν έχουν γίνει commit](#troubleshooting_androidstudio-uncommitted-changes), όταν προσπαθείτε να δημιουργήσετε την επόμενη υπογεγραμμένη εφαρμογή, όπως την εφαρμογή **AAPS** για Wear. Ο πιο γρήγορος τρόπος να το λύσετε είναι να πάτε στον φάκελο όπου δημιουργήθηκε η πλήρης εφαρμογή AAPS. Ο φάκελός σας είναι πιθανώς κάτι σαν:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\aapsclient\release.`

Διαγράψτε το περιττό αρχείο .json ή μετακινήστε το έξω από τον φάκελο. Μετά προσπαθήστε ξανά να δημιουργήσετε την εφαρμογή **AAPS** για Wear. Αν αυτό δεν βοηθήσει, ο πιο αναλυτικός [οδηγός αντιμετώπισης προβλημάτων](../GettingHelp/TroubleshootingAndroidStudio.md) θα σας βοηθήσει να βρείτε το συγκεκριμένο αρχείο που προκαλεί το πρόβλημα. Μπορεί να είναι και το αρχείο keystore σας.

(building-aaps-wear-os-cli)=

### Γραμμή εντολών

Ακολουθήστε τις [Οδηγίες δημιουργίας από τη γραμμή εντολών](../SettingUpAaps/CLIBuild.md) και επαναλάβετε τα βήματα μεταγλώττισης και υπογραφής για το module `wear`, με το ίδιο keystore:

```sh
./gradlew :wear:assembleFullRelease
```

Το μη υπογεγραμμένο Wear apk γράφεται στο `wear/build/outputs/apk/full/release/`. Υπογράψτε το με το `apksigner` ακριβώς όπως το apk του τηλεφώνου και μετά εγκαταστήστε το στο ρολόι, δείτε [Ρύθμιση του AAPS στο ρολόι Wear OS σας](WearOsSmartwatch.md).
