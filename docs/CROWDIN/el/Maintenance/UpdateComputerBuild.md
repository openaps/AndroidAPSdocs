# Ενημέρωση με το Android Studio

## Φτιάξτε το μόνοι σας, αντί να το κατεβάσετε

Το **AAPS** δεν είναι διαθέσιμο για λήψη, λόγω των κανονισμών για τις ιατρικές συσκευές. Είναι νόμιμο να κάνετε build της εφαρμογής για δική σας χρήση, αλλά δεν πρέπει να δίνετε αντίγραφο σε άλλους! Δείτε τη σελίδα [Συχνές Ερωτήσεις](../UsefulLinks/FAQ.md) για λεπτομέρειες.

```{note}
In case you want to build **AAPS** on a new computer: copy your back-up keystore file to the new computer. Μετά ακολουθήστε τη [διαδικασία πρώτου build του **AAPS**](../SettingUpAaps/BuildingAaps.md) αντί για αυτόν τον οδηγό. Η μόνη διαφορά είναι ότι, αντί να δημιουργήσετε νέο keystore, μπορείτε να επιλέξετε αυτό που αντιγράψατε στον νέο υπολογιστή.
```

## Επισκόπηση της ενημέρωσης σε νέα έκδοση του AAPS με το Android Studio

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Αν έχετε προβλήματα, δείτε την ξεχωριστή σελίδα [Αντιμετώπιση προβλημάτων του Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

### Εξαγωγή των ρυθμίσεων

Εξαγάγετε τις ρυθμίσεις από την υπάρχουσα έκδοση του **AAPS** στο τηλέφωνό σας. Ίσως να μην τις χρειαστείτε, αλλά είναι καλύτερα να είστε ασφαλείς.

Δείτε τη σελίδα [Δημιουργία και επαναφορά αντιγράφων ασφαλείας](ExportImportSettings.md), αν δεν θυμάστε πώς γίνεται.

### Έλεγχος της έκδοσης του Android Studio

Η ελάχιστη έκδοση που χρειάζεται περιγράφεται στις [οδηγίες build](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Αν η έκδοσή σας είναι παλαιότερη, [ενημερώστε πρώτα το Android Studio](#Building-APK-install-android-studio)!

(Update-to-new-version-update-your-local-copy)=
### Ενημέρωση του τοπικού σας αντιγράφου

* Ανοίξτε το υπάρχον έργο (project) του AAPS στο Android Studio. Ίσως χρειαστεί να επιλέξετε το έργο σας. Κάντε (διπλό) κλικ στο έργο του AAPS.

  ![Android Studio - Επιλογή έργου](../images/update/01_ProjectSelection.png)

* Στη γραμμή μενού του Android Studio, επιλέξτε Git -> Fetch

   ![Μενού Android Studio - Git - Fetch](../images/update/02_GitFetch.png)

* Κάτω δεξιά θα δείτε ένα μήνυμα ότι το Fetch έγινε με επιτυχία.

   ![Μενού Android Studio - Git - Fetch επιτυχές](../images/update/03_GitFetchSuccessful.png)

* Τώρα στη γραμμή μενού επιλέξτε Git -> Pull

   ![Μενού Android Studio - Git - Pull](../images/update/04_GitPull.png)

* Αφήστε όλες τις επιλογές όπως είναι (origin/master) και επιλέξτε Pull

   ![Android Studio - Git - παράθυρο Pull](../images/update/05_GitPullOptions.png)

* Περιμένετε όσο γίνεται η λήψη. Θα το βλέπετε ως πληροφορία στην κάτω γραμμή. Όταν τελειώσει, θα δείτε ένα μήνυμα επιτυχίας.

  ```{note}
  Τα αρχεία που ενημερώθηκαν μπορεί να διαφέρουν! Αυτό δεν σημαίνει ότι υπάρχει πρόβλημα.
  ```

   ![Android Studio - Pull επιτυχές](../images/update/06_GitPullSuccess.png)

* Θα τρέξει το Gradle Sync για να κατεβάσει κάποιες εξαρτήσεις (dependencies). Περιμένετε μέχρι να τελειώσει.

  ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### Έλεγχος της έκδοσης JVM

Αυτός ο έλεγχος συνιστάται ιδιαίτερα αν έχετε ήδη κάνει build μιας προηγούμενης έκδοσης του **AAPS** στον ίδιο υπολογιστή.

Ελέγξτε στις [οδηγίες build](#Building-APK-recommended-specification-of-computer-for-building-apk-file) ποια έκδοση JVM χρειάζεται για την έκδοση του **AAPS** που κάνετε τώρα build. Μετά ακολουθήστε τα βήματα στο [Incompatible Gradle JVM](#incompatible-gradle-jvm) για να βεβαιωθείτε ότι χρησιμοποιείτε τη σωστή έκδοση.

(Update-to-new-version-build-the-signed-apk)=
### Build του υπογεγραμμένου APK

Ο πηγαίος κώδικάς σας είναι τώρα η τρέχουσα έκδοση που έχει κυκλοφορήσει και όλες οι προϋποθέσεις έχουν ελεγχθεί. Ήρθε η ώρα να κάνετε build του υπογεγραμμένου apk, όπως περιγράφεται στην [ενότητα build υπογεγραμμένου apk](#Building-APK-generate-signed-apk).

(Update-to-new-version-transfer-and-install)=

### Μεταφορά και εγκατάσταση του apk
Πρέπει να μεταφέρετε το apk στο τηλέφωνό σας για να το εγκαταστήσετε.

```{note}
Αν κάνατε το build με το ίδιο υπάρχον keystore στο Android Studio, δεν χρειάζεται να αφαιρέσετε την υπάρχουσα εφαρμογή από το τηλέφωνό σας. Όταν εγκαθιστάτε το apk, ακολουθήστε τις οδηγίες στην οθόνη για να εγκαταστήσετε την ενημέρωση.
Σε άλλες περιπτώσεις, όπως όταν δημιουργείτε νέο keystore στο Android Studio για το υπογεγραμμένο apk, πρέπει να διαγράψετε την παλιά εφαρμογή πριν εγκαταστήσετε το apk. **Μην ξεχάσετε να εξαγάγετε τις ρυθμίσεις σας!**
```

Δείτε τις οδηγίες για τη [μεταφορά και εγκατάσταση του AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md). Όπου εφαρμόζεται η [επαλήθευση προγραμματιστών Android](#android-developer-verification) της Google (από τον Σεπτέμβριο 2026, ανάλογα με τη χώρα σας), εγκαταστήστε με [ADB](#android-developer-verification-adb) αντί να πατήσετε το αρχείο APK.

Συνεχίστε [εδώ](#Update-to-new-version-check-aaps-version-on-phone).

(update-computer-build-troubleshooting)=

## Αντιμετώπιση προβλημάτων

Αν κάτι πάει στραβά, μην πανικοβάλλεστε.

Πάρτε μια ανάσα!

Then check if your problem is already documented on the separate page [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

Αν χρειάζεστε περισσότερη βοήθεια, επικοινωνήστε με άλλους χρήστες του **AAPS** στο [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) ή στο [Discord](https://discord.gg/4fQUWHZ4Mw).