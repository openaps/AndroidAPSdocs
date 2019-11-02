# Ενημερώστε σε μια νέα έκδοση ή κλάδο

## Φτιάξτε το μόνοι σας, αντί να το κατεβάσετε

**AndroidAPS δεν είναι διαθέσιμο για κατέβασμα λόγω κανονισμού για τις ιατρικές συσκευές. Είναι νόμιμο να χτίσει η εφαρμογή για δική σας χρήση, αλλά δεν πρέπει να δώσετε αντίγραφο σε άλλους! See [FAQ page](../Getting-Started/FAQ.md) for dertails.**

## Σημαντικές σημειώσεις

* As of version 2.3 you have to use git to update. Updating via zip file does not work anymore.
* Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to build the apk.
* If you are using Dexcom G6 with the [patched Dexcom app](../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app) you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Quick walk-through for experienced users

Please scipt this paragraph if you update for the first time. The next lines are for experienced users. Your next step would be to [install git](../Installing-AndroidAPS/git-install.rst) if you do not have it already.

If you already updated AAPS in previous versions and use a Windows PC you can update in two simple steps:

1. [Update local copy](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS->Git->Pull)
2. [Generate signed APK](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (Select 'app' instead of 'wear' on your way!)

## Εγκαταστήστε το git (αν δεν το έχετε)

Follow the manual on the [git installation page](../Installing-AndroidAPS/git-install.rst).

## Update your local copy

* Click: VCS->Git->Pull
  
  ![Android Studio - GIT - Pull](../images/Update_Pull.png)

* Click Pull (no changes neccessary)
  
  ![Android Studio - GIT - Pull 2](../images/Update_Pull2.png)

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

Μεταβείτε στον κατάλογο AndroidAPS / εφαρμογή / πλήρεις/ release για να βρείτε το αρχείο "app-full-release.apk". Μεταφέρετε αυτό το αρχείο στο Android smartphone σας. You can do it on your preferred way:

* Bluetooth
* cloud upload (Google Drive or other cloud services)
* connect computer and phone by cable 
* by mail (Note that some mail apps do not allow apk attachments, in this case use other transfer method.)

In this example Gmail is used as it is fairly simple. To install the self-signed app you need to allow Android on your smartphone to do this installation even if this file is received via Gmail which is normally forbidden. Αν χρησιμοποιείτε κάτι άλλο παρακαλούμε προχωρήστε ανάλογα.

![Στιγμιότυπο οθόνης 48](../images/Installation_Screenshot_48.png)

Στις ρυθμίσεις του smartphone σας υπάρχει μια περιοχή "Άγνωστη εγκατάσταση εφαρμογών", όπου πρέπει να δώσω στο Gmail το δικαίωμα να εγκαταστήσει αρχεία APK που λαμβάνω μέσω του Gmail.

Επιλέξτε "Να επιτρέπεται από αυτή την πηγή". Μετά την εγκατάσταση, μπορείτε να την απενεργοποιήσετε ξανά.

![Εγκατάσταση από άγνωστες πηγές](../images/Installation_Screenshot_49-50.png)

Το τελευταίο βήμα είναι να πατήσετε το αρχείο APK που λαβατε μέσω του Gmail και να εγκαταστήσετε την εφαρμογή. Αν το APK δεν εγκατασταθεί και έχετε μια παλαιότερη έκδοση του AndroidAPS στο τηλέφωνό σας που έχει υπογραφεί με διαφορετικό κλειδί τότε θα πρέπει πρώτα να την απεγκαταστήσετε, να θυμάστε να εξάγετε τις ρυθμίσεις σας αν το κάνετε!

Ναι, το πήρατε και τώρα μπορείτε να ξεκινήσετε με τη ρύθμιση του AndroidAPS για τη χρήση σας (CGMS, αντλία ινσουλίνης) κλπ.

## Check AAPS version on phone

Μπορείτε να ελέγξετε την έκδοση AAPS στο τηλέφωνό σας κάνοντας κλικ στο μενού των τριών κουμπιών επάνω δεξιά και στη συνέχεια σχετικά με.

![Η έκδοση AAPS έχει εγκατασταθεί](../images/Update_VersionCheck.png)

# Αντιμετώπιση προβλημάτων

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).