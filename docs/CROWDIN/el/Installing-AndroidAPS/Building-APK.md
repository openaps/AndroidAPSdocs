# Δημιουργώντας την εφαρμογή APK

## Build yourself instead of download

**AndroidAPS is not available as download due to regulation for medial devices. It is legal to build the app for your own use but you must not give a copy to others! See [FAQ page](../Getting-Started/FAQ.md) for dertails.**

## ## Important notes

***Note***: Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to build the apk.

**Configuration on demand** is not supported by the current version of the Android Gradle plugin!

If your build fails with an error regarding "on demand configuration" you can do the following:

* Ανοίξτε το παράθυρο "Προτιμήσεις" κάνοντας κλικ στην επιλογή Αρχείο> Ρυθμίσεις (σε Mac, Android Studio> Προτιμήσεις).
* Στο αριστερό τμήμα του παραθύρου, κάντε κλικ στην επιλογή Δημιουργία, εκτέλεση, ανάπτυξη> μεταγλωττιστής.
* Καταργήστε την επιλογή του πλαισίου ελέγχου Configure κατα παραγγελία.
* Κάντε κλικ στην επιλογή Εφάρμοσε ή ΟΚ.

* * *

### Αυτό το άρθρο χωρίζεται σε δύο μέρη.

* Στο τμήμα επισκόπησης υπάρχει μια εξήγηση για τα βήματα που απαιτούνται για τη δημιουργία του αρχείου APK.
* Στο τμήμα βήμα προς βήμα θα βρείτε τα στιγμιότυπα οθόνης μιας πετυχημένης εγκατάστασης. Επειδή οι εκδόσεις του Android Studio - το περιβάλλον ανάπτυξης λογισμικού που θα χρησιμοποιήσουμε για την κατασκευή του APK - θα αλλάξουν πολύ γρήγορα αυτό δεν θα είναι ταυτόσημο με την εγκατάστασή σας, αλλά θα πρέπει να σας δώσει ένα καλό σημείο εκκίνησης. Το Android Studio τρέχει επίσης σε Windows, Mac OS X και Linux και ενδέχεται να υπάρχουν μικρές διαφορές σε ορισμένες πτυχές μεταξύ κάθε πλατφόρμας. Αν διαπιστώσετε ότι κάτι σημαντικό είναι λάθος ή λείπει, παρακαλούμε ενημερώστε την ομάδα του facebook "AndroidAPS users" ή στο chat Gitter [ Android APS ](https://gitter.im/MilosKozak/AndroidAPS) ή [ AndroidAPSwiki ](https://gitter.im/AndroidAPSwiki/Lobby) ώστε να το κοιτάξουμε.

## Μία γενική ιδέα

In general, the steps necessary to build the APK file:

* Εγκαταστήστε το git
* Εγκαταστήστε και ρυθμίστε το Android Studio.
* Χρησιμοποιήστε git για να κλωνοποιήσετε τον πηγαίο κώδικα από το κεντρικό αποθετήριο Github όπου οι προγραμματιστές έχουν βάλει τον πραγματικό κώδικα για την εφαρμογή.
* Ανοίξτε το κλωνοποιημένο έργο στο Android Studio ως ενεργό έργο.
* Δημιουργήστε το υπογεγραμμένο APK.
* Μεταφέρετε το υπογεγραμμένο APK στο smartphone σας.

## Step by step walkthrough

Detailed description of the steps necessary to build the APK file.

## Εγκαταστήστε το git (αν δεν το έχετε)

### Windows

* Κάθε έκδοση git θα πρέπει να λειτουργήσει. Για παράδειγμα [ https://git-scm.com/download/win ](https://git-scm.com/download/win)
* Βεβαιωθείτε ότι έχετε σημειώσει τη διαδρομή εγκατάστασης. Θα το χρειαστείτε αργότερα, αφού έχετε εγκαταστήσει το Android Studio.
  
  ![Διαδρομή εγκατάστασης Git](../images/Update_GitPath.png)

### Mac

* Κάθε έκδοση git θα πρέπει να λειτουργήσει. Για παράδειγμα [ https://git-scm.com/download/mac ](https://git-scm.com/download/mac)
* Χρησιμοποιήστε το homebrew για να εγκαταστήσετε το git: ```$ brew εγκατέστησε git```.
* Για λεπτομέρειες σχετικά με την εγκατάσταση του git, ανατρέξτε στην [επίσημη τεκμηρίωση git ](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Install Android Studio

The following screenshots have been taken from Android Studio Version 3.1.3. Your screen might look a bit different depending on the Android Studio version you use. But you should be able to find your way through. Help from the community is provided for example in the [AndroidAPS Facebook group](https://www.facebook.com/groups/1900195340201874/) and [other places](../Where-To-Go-For-Help/Connect-with-other-users.md).

Install [Android Studio](https://developer.android.com/studio/install.html) and setup during first start.

Select "Do not import settings" as you have not used it before.

![Screenshot 1](../images/Installation_Screenshot_01.png)

Click "Next".

![Screenshot 2](../images/Installation_Screenshot_02.png)

Select "Standard" installation and click "Next".

![Screenshot 3](../images/Installation_Screenshot_03.png)

Select the theme for the user interface you like. (In this manual we used "Intellij". Then click "Next". This is just the color scheme. You can select any you like (i.e. "Darcula" for dark mode). This selection has no influence on building the APK.

![Screenshot 4](../images/Installation_Screenshot_04.png)

Click "Next" on the "Verify Settings" dialog.

![Screenshot 5](../images/Installation_Screenshot_05.png)

The Android emulator (to emulate the smartphone on your PC or Mac) is not used to build the APK. You can click "Finish" to finish the installation and read the documentation later on demand.

![Screenshot 6](../images/Installation_Screenshot_06.png)

Android Studio is downloading a lot of software components it uses. You can click on the "Show Details" button to the what happens but that's not important at all.

![Screenshot 7](../images/Installation_Screenshot_07.png)

![Screenshot 8](../images/Installation_Screenshot_08.png)

After the downloads are completed click the "Finish" button.

![Screenshot 9](../images/Installation_Screenshot_09.png)

* Μπράβο!!! Έχετε τελειώσει την εγκατάσταση του Android Studio και μπορείτε να ξεκινήσετε την κλωνοποίηση του πηγαίου κώδικα. Ίσως ήρθε η ώρα για ένα σύντομο διάλειμμα;

## Set git path in preferences

### Windows

* Αφήστε το Studio να μάθει πού βρίσκεται το git.exe: Αρχείο - Ρυθμίσεις
  
  ![Android Studio - ανοίξτε τις ρυθμίσεις](../images/Update_GitSettings1.png)

* Στο επόμενο παράθυρο: Έλεγχος έκδοσης - Git

* Επιλέξτε σωστή διαδρομή: ... / Git <font color="#FF0000"><b> / bin </b></font>

* Βεβαιωθείτε ότι έχετε επιλέξει τη μέθοδο ενημέρωσης "Συγχώνευση".
  
  ![Android Studio - διαδρομή GIT](../images/Update_GitSettings2a.png)

### Mac

* Αν εγκαταστήσετε το git μέσω του homebrew δεν χρειάζεται να αλλάξετε τις προτιμήσεις. Σε περίπτωση που: Μπορούν να βρεθούν εδώ: Android Studio - Προτιμήσεις.

## Download code and additional components

* Χρησιμοποιήστε τον κλώνο git στο Android Studio όπως φαίνεται στα στιγμιότυπα οθόνης παρακάτω. Επιλέξτε "Έλεγχος έργου από τον έλεγχο έκδοσης" με το "Git" ως σύστημα ελέγχου συγκεκριμένης έκδοσης.

![Screenshot 10](../images/Installation_Screenshot_10.png)

![Version_Control_Git](../images/Version_Control_Git.png)

Fill in the URL to the main AndroidAPS repository ("https://github.com/MilosKozak/AndroidAPS") and click "clone".

![Screenshot 13](../images/Installation_Screenshot_13.png)

Android Studio will start cloning. Don't click "Background" as it goes fast and makes things more complicated at the moment.

![Screenshot 14](../images/Installation_Screenshot_14.png)

Finish the checkout from version control with opening the project by clicking "Yes".

![Screenshot 15](../images/Installation_Screenshot_15.png)

Use the standard "default gradle wrapper" and click "OK".

![Screenshot 16](../images/Installation_Screenshot_16.png)

Read and close the "Tip of Day" screen of Android Studio by pressing "Close".

![Screenshot 17](../images/Installation_Screenshot_17.png)

* Εξαιρετικά, έχετε το δικό σας αντίγραφο του πηγαίου κώδικα και είστε έτοιμοι να ξεκινήσετε την κατασκευή.
* Τώρα πλησιάζουμε στο πρώτο μας μήνυμα σφάλματος. Ευτυχώς, το Android Studio θα μας δώσει άμεσα τη λύση για αυτό.

Click "Install missing platform(s) and sync project" as Android Studio needs to install a missing platform.

![Screenshot 18](../images/Installation_Screenshot_18.png)

Accept the license agreement by selecting "Accept" and clicking "Next".

![Screenshot 19](../images/Installation_Screenshot_19.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 20](../images/Installation_Screenshot_20.png)

Now it's finished. Please click "Finish".

![Screenshot 21](../images/Installation_Screenshot_21.png)

Aaaahhh, next error. But Android Studio suggests a similar solution. Click "Install Build Tools and sync project" as Android Studio needs to download missing Tools.

![Screenshot 22](../images/Installation_Screenshot_22.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 23](../images/Installation_Screenshot_23.png)

Now it's finished. Please click "Finish".

![Screenshot 24](../images/Installation_Screenshot_24.png)

And another error to handle as Android Studio needs to download again a missing platform. Click "Install missing platform(s) and sync project".

![Screenshot 25](../images/Installation_Screenshot_25.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 26](../images/Installation_Screenshot_26.png)

Now it's finished. Please click "Finish".

![Screenshot 27](../images/Installation_Screenshot_27.png)

Click "Install Build Tools and sync project" as Android Studio needs to download missing Tools.

![Screenshot 28](../images/Installation_Screenshot_28.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 29](../images/Installation_Screenshot_29.png)

Now it's finished. Please click "Finish".

![Screenshot 30](../images/Installation_Screenshot_30.png)

Yeah, the error messages are gone and the first gradle build is runing. Maybe it's time to drink some water?

![Screenshot 31](../images/Installation_Screenshot_31.png)

Android Studio recommends to update the gradle system. **Never update gradle!** This might lead to difficulties!

Please click "Don't remind me again for this project".

![Screenshot 32](../images/AS_NoGradleUpdate.png)

The build is running again.

![Screenshot 33](../images/Installation_Screenshot_33.png)

Yeah, the first build is successful but we are not finished.

![Screenshot 34](../images/Installation_Screenshot_34.png)

## Δημιουργία υπογεγραμμένου APK

Στο μενού επιλέξτε "Δημιουργία" και, στη συνέχεια, "Δημιουργία υπογεγραμμένης δέσμης / APK...". (Το μενού στο Android Studio άλλαξε από τον Σεπτέμβριο του 2018. In older versions select in the menu “Build” and then “Generate Signed APK...”.)

Signing means that you sign your generated app but in a digital way as a kind of digital fingerprint in the app itself. Αυτό είναι απαραίτητο επειδή το Android έχει έναν κανόνα ότι δέχεται μόνο υπογεγραμμένο κώδικα για εκτέλεση για λόγους ασφαλείας. Για περισσότερες πληροφορίες σχετικά με αυτό το θέμα, ακολουθήστε τον σύνδεσμο [ εδώ ](https://developer.android.com/studio/publish/app-signing.html#generate-key) Η ασφάλεια είναι ένα βαθύ και πολύπλοκο θέμα και δεν το χρειάζεστε τώρα.

![Στιγμιότυπο οθόνης 39α](../images/Installation_Screenshot_39a.PNG)

Στο παρακάτω παράθυρο διαλόγου επιλέξτε "APK" αντί για "Bundle Android App" και κάντε κλικ στο κουμπί "Επόμενο".

![Στιγμιότυπο οθόνης 39α](../images/Installation_Screenshot_39b.PNG)

Επιλέξτε "εφαρμογή" και κάντε κλικ στο κουμπί "Επόμενο".

![Στιγμιότυπο οθόνης 40](../images/Installation_Screenshot_40.png)

Click "Create new..." to start creating your keystore. A keystore in this case is nothing more than a file in which the information for signing is stored. It is encrypted and the information is secured with passwords. We suggest storing it in your home folder and remember the passwords but if you lose this information it's not a big issue because then you just have to create a new one. Best practice is to store this information carefully.

![Screenshot 41](../images/Installation_Screenshot_41.png)

* Συμπληρώστε τις πληροφορίες για το επόμενο παράθυρο διαλόγου. 
  * Διαδρομή κλειδιού αποθήκευσης: είναι η διαδρομή προς το αρχείο του κλειδιού
  * Τα παρακάτω πεδία κωδικών πρόσβασης επιτρέπουν στο θυροκατάλογο να ελέγξει για τυχόν σφάλματα πληκτρολόγησης.
  * Το ψευδώνυμο είναι ένα όνομα για το κλειδί που χρειάζεστε. Μπορείτε να αφήσετε την προεπιλογή ή να της δώσετε ένα όνομα που θέλετε.
  * Τα πεδία κωδικού πρόσβασης κάτω από το κλειδί είναι για το ίδιο το κλειδί. Όπως πάντα, πρέπει να ελέγξετε για τυχόν σφάλματα πληκτρολόγησης.
  * Μπορείτε να αφήσετε την εγκυρότητα στην προεπιλογή των 25 ετών.
  * Πρέπει μόνο να συμπληρώσετε το όνομα και το επώνυμο, αλλά μπορείτε να συμπληρώσετε και τις υπόλοιπες πληροφορίες. Στη συνέχεια, κάντε κλικ στο "OK".

![Screenshot 42](../images/Installation_Screenshot_42.png)

Fill in the information of the last dialog in this dialog and click "Next".

![Screenshot 43](../images/Installation_Screenshot_43.png)

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

Ανοίγει ένα παράθυρο διαχειριστή αρχείων. Μπορεί να φαίνεται λίγο διαφορετικό στο σύστημά σας καθώς χρησιμοποιώ το Linux. Στα Windows θα υπάρχει η Εξερεύνηση αρχείων και στο Mac OS X ο εξερευνητής. Εκεί θα πρέπει να δείτε τον κατάλογο με το αρχείο APK που δημιουργήθηκε. Δυστυχώς, αυτό είναι λάθος, καθώς το "wear-release.apk" δεν είναι η υπογεγραμμένη εφαρμογή APK που ψάχνουμε.

![Στιγμιότυπο οθόνης 47](../images/Installation_Screenshot_47.png)

Μεταβείτε στον κατάλογο AndroidAPS / εφαρμογή / πλήρεις/ release για να βρείτε το αρχείο "app-full-release.apk". Μεταφέρετε αυτό το αρχείο στο Android smartphone σας. Μπορείτε να το κάνετε με τον προτιμώμενο τρόπο, δηλαδή Bluetooth, upload cloud, ή να συνδέσετε τον υπολογιστή και το τηλέφωνο με καλώδιο ή να χρησιμοποιήσετε email. Χρησιμοποιώ το Gmail εδώ σε αυτό το παράδειγμα, καθώς είναι αρκετά απλό για μένα. Το αναφέρω αυτό επειδή για να εγκαταστήσετε την εφαρμογή που υπογράφηκε αυτόματα πρέπει να επιτρέψουμε στο Android στο smartphone μας να κάνει αυτήν την εγκατάσταση ακόμα κι αν αυτό το αρχείο λαμβάνεται μέσω Gmail, το οποίο κανονικά απαγορεύεται. Αν χρησιμοποιείτε κάτι άλλο παρακαλούμε προχωρήστε ανάλογα.

![Στιγμιότυπο οθόνης 48](../images/Installation_Screenshot_48.png)

Στις ρυθμίσεις του smartphone σας υπάρχει μια περιοχή "Άγνωστη εγκατάσταση εφαρμογών", όπου πρέπει να δώσω στο Gmail το δικαίωμα να εγκαταστήσει αρχεία APK που λαμβάνω μέσω του Gmail.

Επιλέξτε "Να επιτρέπεται από αυτή την πηγή". Μετά την εγκατάσταση, μπορείτε να την απενεργοποιήσετε ξανά.

![Εγκατάσταση από άγνωστες πηγές](../images/Installation_Screenshot_49-50.png)

Το τελευταίο βήμα είναι να πατήσετε το αρχείο APK που λαβατε μέσω του Gmail και να εγκαταστήσετε την εφαρμογή. Αν το APK δεν εγκατασταθεί και έχετε μια παλαιότερη έκδοση του AndroidAPS στο τηλέφωνό σας που έχει υπογραφεί με διαφορετικό κλειδί τότε θα πρέπει πρώτα να την απεγκαταστήσετε, να θυμάστε να εξάγετε τις ρυθμίσεις σας αν το κάνετε!

Ναι, το πήρατε και τώρα μπορείτε να ξεκινήσετε με τη ρύθμιση του AndroidAPS για τη χρήση σας (CGMS, αντλία ινσουλίνης) κλπ.