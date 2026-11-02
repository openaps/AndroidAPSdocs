# Ενημέρωση μέσω browser (fork)

```{tip}
Κάνατε build του AAPS με το **AAPS Builder**; Δεν χρειάζεστε αυτή τη σελίδα: δείτε [Ενημέρωση του AAPS με το AAPS Builder](#aaps-builder-updates).
```

## Φτιάξτε το μόνοι σας, αντί να το κατεβάσετε

Το **AAPS** δεν είναι διαθέσιμο για λήψη, λόγω των κανονισμών για τις ιατρικές συσκευές. Είναι νόμιμο να κάνετε build της εφαρμογής για δική σας χρήση, αλλά δεν πρέπει να δίνετε αντίγραφο σε άλλους! Δείτε τη σελίδα [Συχνές Ερωτήσεις](../UsefulLinks/FAQ.md) για λεπτομέρειες.

```{note}
In case you want to upgrade **AAPS** with a browser for the first time: copy your back-up keystore file to your Google Drive. Μετά ακολουθήστε τη [διαδικασία Δημιουργίας του **AAPS** μέσω browser](../SettingUpAaps/BrowserBuild.md) αντί για αυτόν τον οδηγό. Αντί να δημιουργήσετε νέο keystore, πρέπει να επιλέξετε αυτό που αντιγράψατε από τον υπολογιστή σας.
Αυτό είναι υποχρεωτικό μόνο την πρώτη φορά. Στις επόμενες αναβαθμίσεις θα μπορείτε να ακολουθείτε αυτόν τον οδηγό.
```

```{tip}
**Θέλετε να αλλάξετε σε AAPS Builder;** Το [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) είναι ο πιο απλός τρόπος δημιουργίας μέσω browser: δεν υπάρχει fork για συγχρονισμό και κατεβάζετε την εφαρμογή απευθείας από το GitHub. Δεν είστε υποχρεωμένοι να αλλάξετε: αυτός ο οδηγός συνεχίζει να λειτουργεί. Αν αλλάξετε, πάρτε πρώτα ένα αντίγραφο του keystore σας από το fork σας, όπως εξηγείται στο [Αν έρχεστε από την προηγούμενη δημιουργία μέσω browser](#aaps-builder-from-fork). Αλλιώς το νέο build δεν θα μπορεί να ενημερώσει το AAPS στο τηλέφωνό σας.
```

## Επισκόπηση της ενημέρωσης σε νέα έκδοση του AAPS μέσω browser

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Αν έχετε προβλήματα, δείτε την ξεχωριστή σελίδα [Δημιουργία μέσω browser: αντιμετώπιση προβλημάτων](../GettingHelp/BrowserBuildTroubleshooting.md).

### Εξαγωγή των ρυθμίσεων

Εξαγάγετε τις ρυθμίσεις από την υπάρχουσα έκδοση του **AAPS** στο τηλέφωνό σας. Ίσως να μην τις χρειαστείτε, αλλά είναι καλύτερα να είστε ασφαλείς.

Δείτε τη σελίδα [Δημιουργία και επαναφορά αντιγράφων ασφαλείας](ExportImportSettings.md), αν δεν θυμάστε πώς γίνεται.

(Update-to-new-version-update-your-repo)=
### Ενημέρωση του αποθετηρίου σας στο GitHub

[Συνδεθείτε στο GitHub](https://github.com/login).

1. Επιλέξτε Repositories.
2. Κάντε κύλιση προς τα κάτω και επιλέξτε το δικό σας αποθετήριο AndroidAPS.

![Επιλογή του αποθετηρίου AndroidAPS](../images/update/CI/GitHubUpdate1.png)

3. Βεβαιωθείτε ότι χρησιμοποιείτε το δικό σας αντίγραφο του AndroidAPS (Forked from nightscout/AndroidAPS)
4. Πατήστε Sync Fork για να το ενημερώσετε (ο αριθμός των commits που λείπουν μπορεί να διαφέρει από την εικόνα)



![Συγχρονισμός του αποθετηρίου AndroidAPS](../images/update/CI/GitHubUpdate2.png)

5. Πατήστε Update Branch

![Ενημέρωση του αποθετηρίου AndroidAPS](../images/update/CI/GitHubUpdate3.png)

Σημείωση: αν αλλάξατε κατά λάθος το αντίγραφό σας του AndroidAPS, θα δείτε αυτή την οθόνη. Απορρίψτε όλες τις αλλαγές (commits) για να επιστρέψετε στην έκδοση που έχει κυκλοφορήσει.

![Απόρριψη ανεπιθύμητων αλλαγών](../images/update/CI/GitHubUpdate4.png)

You have now synchronized (updated) your own copy with the latest release of **AAPS**. Μπράβο.

![Το αποθετήριο συγχρονίστηκε](../images/update/CI/GitHubUpdate5.png)

### Εκτέλεση του workflow για το build του υπογεγραμμένου APK

1. Στο αντίγραφό σας του AndroidAPS στο GitHub, επιλέξτε Actions.
2. Ανοίξτε το All Workflows.
3. Επιλέξτε AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Κάντε κύλιση προς τα κάτω και πατήστε Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Keep the branch set to master. In **Select AAPS Version**, check that **4.0.0**, the newest version at the top of the list, is selected. If your fork is not up to date, the preselected version is an older one: if you run the workflow with the form as it opens, you rebuild that older version and your app is not updated. Choose the [variant](#browserbuild-variant) (fullRelease), and then tap Run workflow.

   ```{note}
   The list of versions is part of the workflow in your fork. If **4.0.0** is missing, your fork is not synchronized yet: go back to [Update your GitHub repository](#Update-to-new-version-update-your-repo).
   ```



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Θα δείτε το μήνυμα Workflow run was successfully requested. Ανανεώστε τη σελίδα του browser και θα μπορείτε να παρακολουθείτε την πρόοδο του build. Όταν τελειώσει η ενέργεια, το AAPS CI θα δείχνει ένα πράσινο σημάδι ελέγχου (tick). You have successfully built the updated version of **AAPS**. Αυτό σημαίνει ότι τα apk για το Master και το Wear αποθηκεύονται τώρα απευθείας στο Google Drive σας (όπως παρακάτω). Το apk του AAPSClient μπορείτε να το κατεβάσετε από το Github > nightscout > AndroidAPS [εδώ](https://github.com/nightscout/AndroidAPS/releases)


![Παρακολούθηση του workflow](../images/update/CI/GitHubActions4.png)


### Εγκατάσταση του APK του AAPS

1. Ανοίξτε το Google Drive σας
2. Ανοίξτε τον φάκελο AAPS, επιλέξτε τον φάκελο της νέας έκδοσης και θα βρείτε και την έκδοση για το τηλέφωνο και την έκδοση για Android Wear.

![Τοποθεσία στο Google Drive](../images/update/CI/GitHubActions5.png)

```{note}
Από τον Σεπτέμβριο του 2026, η [επαλήθευση προγραμματιστών Android](#android-developer-verification) της Google μπορεί να εμποδίζει την εγκατάσταση του APK με πάτημα στο αρχείο, ανάλογα με τη χώρα σας. Δωρεάν λύσεις εξηγούνται σε εκείνη τη σελίδα.
```

Συνεχίστε [εδώ](#Update-to-new-version-check-aaps-version-on-phone)

(update-browser-build-troubleshooting)=

## Αντιμετώπιση προβλημάτων

Αν κάτι πάει στραβά, μην πανικοβάλλεστε.

Πάρτε μια ανάσα!

Μετά ελέγξτε αν το πρόβλημά σας είναι ήδη καταγεγραμμένο: δείτε [Αντιμετώπιση προβλημάτων του AAPS Builder](#aaps-builder-troubleshooting) αν κάνετε build με το **AAPS Builder**, αλλιώς [Δημιουργία μέσω browser: αντιμετώπιση προβλημάτων](#aaps-ci-troubleshooting).

Αν χρειάζεστε περισσότερη βοήθεια, επικοινωνήστε με άλλους χρήστες του **AAPS** στο [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) ή στο [Discord](https://discord.gg/4fQUWHZ4Mw).
