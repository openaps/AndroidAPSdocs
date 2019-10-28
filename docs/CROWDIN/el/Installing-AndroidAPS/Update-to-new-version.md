# Ενημερώστε σε μια νέα έκδοση ή κλάδο

## Build yourself instead of download

**AndroidAPS is not available as download due to regulation for medial devices. It is legal to build the app for your own use but you must not give a copy to others! See [FAQ page](../Getting-Started/FAQ.md) for dertails.**

## Σημαντικές σημειώσεις

<font color="#FF0000"><b>Important note: As of version 2.3 you have to use git to update. Updating via zip file does not work anymore.</font></b>.

***Note***: Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to build the apk.

## Εγκαταστήστε το git (αν δεν το έχετε)

### Windows

* Κάθε έκδοση git θα πρέπει να λειτουργήσει. Για παράδειγμα [ https://git-scm.com/download/win ](https://git-scm.com/download/win)
* Βεβαιωθείτε ότι έχετε σημειώσει τη διαδρομή εγκατάστασης. Θα το χρειαστείτε στο επόμενο βήμα.
  
  ![Διαδρομή εγκατάστασης Git](../images/Update_GitPath.png)

* Reboot your PC to update System Environment.

* Αφήστε το Studio να μάθει πού βρίσκεται το git.exe: Αρχείο - Ρυθμίσεις
  
  ![Android Studio - ανοίξτε τις ρυθμίσεις](../images/Update_GitSettings1.png)

* Στο επόμενο παράθυρο: Έλεγχος έκδοσης - Git

* Επιλέξτε σωστή διαδρομή: ... / Git <font color="#FF0000"><b> / bin </b></font>

* Βεβαιωθείτε ότι έχετε επιλέξει τη μέθοδο ενημέρωσης "Συγχώνευση".
  
  ![Android Studio - διαδρομή GIT](../images/Update_GitSettings2a.png)

### Mac

* Κάθε έκδοση git θα πρέπει να λειτουργήσει. Για παράδειγμα [ https://git-scm.com/download/mac ](https://git-scm.com/download/mac)
* Χρησιμοποιήστε το homebrew για να εγκαταστήσετε το git: ```$ brew εγκατέστησε git```.
* Για λεπτομέρειες σχετικά με την εγκατάσταση του git, ανατρέξτε στην [επίσημη τεκμηρίωση git ](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Αν εγκαταστήσετε το git μέσω του homebrew δεν χρειάζεται να αλλάξετε τις προτιμήσεις. Σε περίπτωση που: Μπορούν να βρεθούν εδώ: Android Studio - Προτιμήσεις.

## Update your local copy

* Κάντε κλικ στο: VCS-> Git-> Fetch
  
  ![Android Studio - GIT - Λήψη](../images/Update_Fetch.png)

## Selecting branch

* Εάν θέλετε να αλλάξετε υποκατάστημα, επιλέξτε άλλο κλάδο από το δίσκο: master (τελευταία έκδοση) ή άλλη έκδοση (δείτε παρακάτω)
  
  ![](../images/UpdateAAPS1.png)

and then checkout (You can use 'Checkout as New Branch' if 'Checkout' is not available.)

     ![](../images/UpdateAAPS2.png)
    

## Updating branch from Github

* Πατήστε Ctrl + T, επιλέξτε τη μέθοδο συγχώνευσης και πατήστε OK
  
  ![](../images/merge.png)

On the tray you'll see green message about updated project

## Δημιουργία υπογεγραμμένου APK

<!--- Text is maintained in page building-apk.md ---> Στο μενού επιλέξτε "Δημιουργία" και, στη συνέχεια, "Δημιουργία υπογεγραμμένης δέσμης / APK...". (Το μενού στο Android Studio άλλαξε από τον Σεπτέμβριο του 2018. In older versions select in the menu “Build” and then “Generate Signed APK...”.)

  
Signing means that you sign your generated app but in a digital way as a kind of digital fingerprint in the app itself. Αυτό είναι απαραίτητο επειδή το Android έχει έναν κανόνα ότι δέχεται μόνο υπογεγραμμένο κώδικα για εκτέλεση για λόγους ασφαλείας. Για περισσότερες πληροφορίες σχετικά με αυτό το θέμα, ακολουθήστε τον σύνδεσμο [ εδώ ](https://developer.android.com/studio/publish/app-signing.html#generate-key) Η ασφάλεια είναι ένα βαθύ και πολύπλοκο θέμα και δεν το χρειάζεστε τώρα.

![Στιγμιότυπο οθόνης 39α](../images/Installation_Screenshot_39a.PNG)

Στο παρακάτω παράθυρο διαλόγου επιλέξτε "APK" αντί για "Bundle Android App" και κάντε κλικ στο κουμπί "Επόμενο".

![Στιγμιότυπο οθόνης 39α](../images/Installation_Screenshot_39b.PNG)

Επιλέξτε "εφαρμογή" και κάντε κλικ στο κουμπί "Επόμενο".

![Στιγμιότυπο οθόνης 40](../images/Installation_Screenshot_40.png)

Enter your key store path, enter key store password, select key alias and enter key password.

Select 'Remember passwords'.

Then click next.

![Key store path](../images/KeystorePathUpdate.PNG)

Επιλέξτε "πλήρης" ως γεύση για την παραγόμενη εφαρμογή. Επιλέξτε V1 "Signature Jar" (V2 είναι προαιρετικό) και πατήστε "Τέλος". Οι ακόλουθες πληροφορίες μπορεί να είναι σημαντικές για μεταγενέστερη χρήση.

* Το "Απελευθερωμένο" θα πρέπει να είναι η προεπιλεγμένη επιλογή σας για το "Τύπος κατασκευής", το "Debug" είναι μόνο για τους ανθρώπους που κωδικοποιούν.
* Επιλέξτε τον τύπο κατασκευής που θέλετε να δημιουργήσετε. 
  * πλήρεις (δηλ. συστάσεις που εκτελούνται αυτόματα σε κλειστό κύκλωμα)
  * ανοιχτό κύκλωμα (δηλ. συστάσεις που δίδονται στο χρήστη να χειρίζεται με μη αυτόματο τρόπο)
  * έλεγχος αντλίας (δηλαδή τηλεχειριστήριο για αντλία, χωρίς κύκλωμα)
  * nsclient (δηλ. εμφανίζονται τα δεδομένα του κυκλώματος ενός άλλου χρήστη και μπορούν να προστεθούν καταχωρήσεις στην εξυπηρέτηση)

![Στιγμιότυπο οθόνης 44](../images/Installation_Screenshot_44.png)

Στο αρχείο καταγραφής συμβάντων βλέπετε ότι το υπογεγραμμένο APK δημιουργήθηκε με επιτυχία.

![Στιγμιότυπο οθόνης 45](../images/Installation_Screenshot_45.png)

Κάντε κλικ στο σύνδεσμο "εντοπίστε" στο αρχείο καταγραφής συμβάντων.

![Στιγμιότυπο οθόνης 46](../images/Installation_Screenshot_46.png)

## Μεταφορά APK σε smartphone

<!--- Text is maintained in page building-apk.md ---> Ανοίγει ένα παράθυρο διαχειριστή αρχείων. Μπορεί να φαίνεται λίγο διαφορετικό στο σύστημά σας καθώς χρησιμοποιώ το Linux. Στα Windows θα υπάρχει η Εξερεύνηση αρχείων και στο Mac OS X ο εξερευνητής. Εκεί θα πρέπει να δείτε τον κατάλογο με το αρχείο APK που δημιουργήθηκε. Δυστυχώς, αυτό είναι λάθος, καθώς το "wear-release.apk" δεν είναι η υπογεγραμμένη εφαρμογή APK που ψάχνουμε.

![Στιγμιότυπο οθόνης 47](../images/Installation_Screenshot_47.png)

Μεταβείτε στον κατάλογο AndroidAPS / εφαρμογή / πλήρεις/ release για να βρείτε το αρχείο "app-full-release.apk". Μεταφέρετε αυτό το αρχείο στο Android smartphone σας. Μπορείτε να το κάνετε με τον προτιμώμενο τρόπο, δηλαδή Bluetooth, upload cloud, ή να συνδέσετε τον υπολογιστή και το τηλέφωνο με καλώδιο ή να χρησιμοποιήσετε email. Χρησιμοποιώ το Gmail εδώ σε αυτό το παράδειγμα, καθώς είναι αρκετά απλό για μένα. Το αναφέρω αυτό επειδή για να εγκαταστήσετε την εφαρμογή που υπογράφηκε αυτόματα πρέπει να επιτρέψουμε στο Android στο smartphone μας να κάνει αυτήν την εγκατάσταση ακόμα κι αν αυτό το αρχείο λαμβάνεται μέσω Gmail, το οποίο κανονικά απαγορεύεται. Αν χρησιμοποιείτε κάτι άλλο παρακαλούμε προχωρήστε ανάλογα.

![Στιγμιότυπο οθόνης 48](../images/Installation_Screenshot_48.png)

Στις ρυθμίσεις του smartphone σας υπάρχει μια περιοχή "Άγνωστη εγκατάσταση εφαρμογών", όπου πρέπει να δώσω στο Gmail το δικαίωμα να εγκαταστήσει αρχεία APK που λαμβάνω μέσω του Gmail.

Επιλέξτε "Να επιτρέπεται από αυτή την πηγή". Μετά την εγκατάσταση, μπορείτε να την απενεργοποιήσετε ξανά.

![Εγκατάσταση από άγνωστες πηγές](../images/Installation_Screenshot_49-50.png)

Το τελευταίο βήμα είναι να πατήσετε το αρχείο APK που λαβατε μέσω του Gmail και να εγκαταστήσετε την εφαρμογή. Αν το APK δεν εγκατασταθεί και έχετε μια παλαιότερη έκδοση του AndroidAPS στο τηλέφωνό σας που έχει υπογραφεί με διαφορετικό κλειδί τότε θα πρέπει πρώτα να την απεγκαταστήσετε, να θυμάστε να εξάγετε τις ρυθμίσεις σας αν το κάνετε!

Ναι, το πήρατε και τώρα μπορείτε να ξεκινήσετε με τη ρύθμιση του AndroidAPS για τη χρήση σας (CGMS, αντλία ινσουλίνης) κλπ.

## Check AAPS version on phone

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

# Αντιμετώπιση προβλημάτων

## Kotlin compiler warning

If build completed successfully but you get Kotlin compiler warnings then just ignore these warnings.

App was build successfully and can be transferred to phone.

![ignore Kotline compiler warning](../images/GIT_WarningIgnore.PNG)

## Could not download… / Offline Work

If you get a failure message like this

![Warning could not download](../images/GIT_Offline1.jpg)

make sure that ‘Offline work’ is disabled.

File -> Settings

![Settings offline work](../images/GIT_Offline2.jpg)

## Error: buildOutput.apkData must not be null

Sometimes you might get an error message when building the apk saying

      `Errors while building APK.`
    
      `Cause: buildOutput.apkData must not be null`
    

This is a known bug in Android Studio 3.5 and will probably not be fixed before Android Studio 3.6. Three options:

     1. Manually delete the three build folders (normal "build", build folder in "app" and build folder in "wear") and generate signed apk again.
     2. Set destination folder to project folder instead of app folder as described in [this video](https://www.youtube.com/watch?v=BWUFWzG-kag).
     3. Change apk destination folder (different location).
    

## No CGM data when using xDrip

[Προσδιορίστε δέκτη](../Configuration/xdrip#identify-receiver)

## Uncommitted changes

If you receive failure message like

![Failure uncommitted changes](../images/GIT_TerminalCheckOut0.PNG)

### Επιλογή 1

* Στο Android Studio επιλέξτε VCS -> GIT -> Επαναφορά HEAD ![Επαναφορά HEAD](../images/GIT_TerminalCheckOut3.PNG)

### Επιλογή 2

* Αντιγράψτε το 'git checkout -' στο πρόχειρο (χωρίς επιγραφές)
* Μεταβείτε στο Terminal στο Android Studio (στην κάτω αριστερή πλευρά του παραθύρου του Android Studio) ![Android Studio Terminal](../images/GIT_TerminalCheckOut1.PNG)

* Επικολλήστε το κείμενο που αντιγράψατε και πατήστε επιστροφή ![Επιτυχία ελέγχου GIT](../images/GIT_TerminalCheckOut2.jpg)

## App not installed

![phone app note installed](../images/Update_AppNotInstalled.png)

* Βεβαιωθείτε ότι έχετε μεταφέρει το αρχείο "app-full-release.apk" στο τηλέφωνό σας.
* Εάν στο τηλέφωνό σας εμφανίζεται "Δεν έχει εγκατασταθεί η εφαρμογή", ακολουθήστε αυτά τα βήματα: 
  1. [ Εξαγωγή ρυθμίσεων ](../Usage/Objectives#export-import-settings) (σε έκδοση AAPS που είναι ήδη εγκατεστημένη στο τηλέφωνό σας)
  2. Καταργήστε την εγκατάσταση του AAPS στο τηλέφωνό σας.
  3. Ενεργοποίηση λειτουργίας αεροπλάνου & απενεργοποιήστε το Bluetooth.
  4. Εγκατάσταση νέας έκδοσης ("app-full-release.apk")
  5. [Ρυθμίσεις εισαγωγής](../Usage/Objectives#export-import-settings)
  6. Ενεργοποιήστε ξανά το bluetooth και απενεργοποιήστε τη λειτουργία του αεροπλάνου

## App installed but old version

If you build the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed the merging step in the [update manual](../Installing-AndroidAPS/Update-to-new-version#updating-branch-from-github).

## None of the above worked

If non of the above tips helped you might consider building the app from scratch:

1. [ Εξαγωγή ρυθμίσεων ](../Usage/Objectives#export-import-settings) (σε έκδοση AAPS που είναι ήδη εγκατεστημένη στο τηλέφωνό σας)
2. Έχετε έτοιμο τον κωδικό πρόσβασης σας και τον κωδικό αποθήκευσης κλειδιών. Σε περίπτωση που έχετε ξεχάσει κωδικούς πρόσβασης, μπορείτε να προσπαθήσετε να τους βρείτε σε αρχεία έργου όπως περιγράφεται [ εδώ ](https://youtu.be/nS3wxnLgZOo).
3.     Σημειώστε τη διαδρομή προς το χώρο αποθήκευσης κλειδιών
      Στο Android Studio Build - > Δημιουργία υπογεγραμμένου APK
      ! [Διαδρομή αποθήκευσης κλειδιών] (../ images / KeystorePath.PNG)
      
  
  4. Κατασκευάστε την εφαρμογή από το μηδέν όπως περιγράφεται [ εδώ ](../Installing-AndroidAPS/Building-APK#download-code-and-additional-components). Χρησιμοποιήστε το υπάρχον κλειδί και την αποθήκευση κλειδιού.
4. Όταν έχετε δημιουργήσει το APK, διαγράψτε με επιτυχία την εξερχόμενη εφαρμογή στο τηλέφωνό σας, μεταφέρετε το νέο APK στο τηλέφωνό σας και εγκαταστήστε το.
5. [Ρυθμίσεις εισαγωγής](../Usage/Objectives#export-import-settings)

## Worst case scenario

In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

Make sure to uninstall all files associated with Android Studio. Manuals can be found online i.e. <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>.

Install Android Studio from scratch as described [here](../Installing-AndroidAPS/Building-APK#install-android-studio) and **do not update gradle**.