# Ενημέρωση σε νέα έκδοση ή κλάδο

## Φτιάξτε το μόνοι σας, αντί να το κατεβάσετε

Το **AAPS** δεν είναι διαθέσιμο για λήψη, λόγω των κανονισμών για τις ιατρικές συσκευές. Είναι νόμιμο να κάνετε build της εφαρμογής για δική σας χρήση, αλλά δεν πρέπει να δίνετε αντίγραφο σε άλλους! Δείτε τη σελίδα [Συχνές Ερωτήσεις](../UsefulLinks/FAQ.md) για λεπτομέρειες.

## Σημαντικές σημειώσεις

- Ενημερώστε στη νέα έκδοση του **AAPS** το συντομότερο δυνατό, αφού κυκλοφορήσει μια νέα έκδοση.
- Όταν κυκλοφορεί μια νέα έκδοση, η ίδια η εφαρμογή **AAPS** θα σας δείξει ένα μήνυμα (banner) για τη νέα έκδοση.
- Η νέα έκδοση θα ανακοινωθεί επίσης στο Facebook τη στιγμή της κυκλοφορίας.
- Μετά την κυκλοφορία, διαβάστε προσεκτικά τις [Σημειώσεις έκδοσης](ReleaseNotes.md) και λύστε τις απορίες σας με την κοινότητα στο Facebook ή στο Discord, πριν ξεκινήσετε την ενημέρωση.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## Ενημέρωση του AAPS με δημιουργία μέσω browser

Έχετε ήδη κάνει build της εφαρμογής AAPS μέσω browser; Ακολουθήστε τις οδηγίες για τη μέθοδο που χρησιμοποιήσατε:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). Δεν υπάρχει fork για συγχρονισμό.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## Ενημέρωση του AAPS με το Android Studio

Ακολουθήστε [αυτές τις οδηγίες](./UpdateComputerBuild.md).

## Ενημέρωση του AAPS με τη γραμμή εντολών

Χρησιμοποιήστε τις [ίδιες οδηγίες](../SettingUpAaps/CLIBuild.md) όπως στο προηγούμενο build του AAPS, αλλά κατεβάστε τις νέες αλλαγές με το git.

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. Ελέγξτε στις [Σημειώσεις έκδοσης](../Maintenance/ReleaseNotes.md) αν υπάρχουν ειδικές οδηγίες μετά την ενημέρωση.

Αφού εγκαταστήσετε το νέο apk:

- you can check the **AAPS** version on your phone by opening the **menu** (☰) on the top left and then **About** (as per the screenshot below). The current **AAPS** version can be viewed;
- make sure you have imported your settings; and
- please check your **AAPS** settings under **Settings** and ensure these remain accurate.

![Παράθυρο «Σχετικά» με την εγκατεστημένη έκδοση του AAPS](../images/about_dialog_version.png)