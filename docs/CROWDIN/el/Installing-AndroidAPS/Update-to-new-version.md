# Update to a new version or branch

<font color="#FF0000"><b>Important note: As of version 2.3 you have to use git to update. Updating via zip file does not work anymore.</font></b>.

***Note***: If updating to AndroidAPS 2.3, you need to use [Android Studio Version 3.4](https://developer.android.com/studio/archive?), it doesn't work with the latest one.

## Εγκαταστήστε το git (αν δεν το έχετε)

### Windows

* Any git version should work. For example <https://git-scm.com/download/win>
* Make sure to note down the installation path. You will need it in the next step.
  
  ![Git installation path](../images/Update_GitPath.png)

* Αφήστε το Studio να μάθει πού βρίσκεται το git.exe: Αρχείο - Ρυθμίσεις
  
  ![Android Studio - open settings](../images/Update_GitSettings1.png)

* Στο επόμενο παράθυρο: Έλεγχος έκδοσης - Git

* Επιλέξτε σωστή διαδρομή: ... / Git <font color="#FF0000"><b> / bin </b></font>

* Βεβαιωθείτε ότι έχετε επιλέξει τη μέθοδο ενημέρωσης "Συγχώνευση".
  
  ![Android Studio - GIT path](../images/Update_GitSettings2a.png)

### Mac

* Any git version should work. For example <https://git-scm.com/download/mac>
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Αν εγκαταστήσετε το git μέσω του homebrew δεν χρειάζεται να αλλάξετε τις προτιμήσεις. Σε περίπτωση που: Μπορούν να βρεθούν εδώ: Android Studio - Προτιμήσεις.

## Update your local copy

* Click: VCS->Git->Fetch
  
  ![Android Studio - GIT - Fetch](../images/Update_Fetch.png)

## Selecting branch

* If you want to change branch select another branch from tray: master (latest release) or another version (please see below)
  
  ![](../images/UpdateAAPS1.png)

and then checkout (You can use 'Checkout as New Branch' if 'Checkout' is not available.)

     ![](../images/UpdateAAPS2.png)
    

## Updating branch from Github

* Press Ctrl+T, select Merge method and press OK
  
  ![](../images/merge.png)

On the tray you'll see green message about updated project

## Δημιουργία υπογεγραμμένου APK

<!--- Text is maintained in page building-apk.md ---> Στο μενού επιλέξτε "Δημιουργία" και, στη συνέχεια, "Δημιουργία υπογεγραμμένης δέσμης / APK...". (Το μενού στο Android Studio άλλαξε από τον Σεπτέμβριο του 2018. In older versions select in the menu “Build” and then “Generate Signed APK...”.)

  
Signing means that you sign your generated app but in a digital way as a kind of digital fingerprint in the app itself. Αυτό είναι απαραίτητο επειδή το Android έχει έναν κανόνα ότι δέχεται μόνο υπογεγραμμένο κώδικα για εκτέλεση για λόγους ασφαλείας. Για περισσότερες πληροφορίες σχετικά με αυτό το θέμα, ακολουθήστε τον σύνδεσμο [ εδώ ](https://developer.android.com/studio/publish/app-signing.html#generate-key) Η ασφάλεια είναι ένα βαθύ και πολύπλοκο θέμα και δεν το χρειάζεστε τώρα.

![Screenshot 39a](../images/Installation_Screenshot_39a.PNG)

Στο παρακάτω παράθυρο διαλόγου επιλέξτε "APK" αντί για "Bundle Android App" και κάντε κλικ στο κουμπί "Επόμενο".

![Screenshot 39b](../images/Installation_Screenshot_39b.PNG)

Επιλέξτε "εφαρμογή" και κάντε κλικ στο κουμπί "Επόμενο".

![Screenshot 40](../images/Installation_Screenshot_40.png)

Enter your key store path, enter key store password, select key alias and enter key password.

Select 'Remember passwords'.

Then click next.

![Key store path](../images/KeystorePathUpdate.PNG)

Επιλέξτε "πλήρης" ως γεύση για την παραγόμενη εφαρμογή. Επιλέξτε V1 "Signature Jar" (V2 είναι προαιρετικό) και πατήστε "Τέλος". Οι ακόλουθες πληροφορίες μπορεί να είναι σημαντικές για μεταγενέστερη χρήση.

* Το "Απελευθερωμένο" θα πρέπει να είναι η προεπιλεγμένη επιλογή σας για το "Τύπος κατασκευής", το "Debug" είναι μόνο για τους ανθρώπους που κωδικοποιούν.
* Επιλέξτε τον τύπο κατασκευής που θέλετε να δημιουργήσετε. 
  * full (i.e. recommendations automatically enacted in closed looping)
  * ανοιχτό κύκλωμα (δηλ. συστάσεις που δίδονται στο χρήστη να χειρίζεται με μη αυτόματο τρόπο)
  * έλεγχος αντλίας (δηλαδή τηλεχειριστήριο για αντλία, χωρίς κύκλωμα)
  * nsclient (δηλ. εμφανίζονται τα δεδομένα του κυκλώματος ενός άλλου χρήστη και μπορούν να προστεθούν καταχωρήσεις στην εξυπηρέτηση)

![Screenshot 44](../images/Installation_Screenshot_44.png)

Στο αρχείο καταγραφής συμβάντων βλέπετε ότι το υπογεγραμμένο APK δημιουργήθηκε με επιτυχία.

![Screenshot 45](../images/Installation_Screenshot_45.png)

Κάντε κλικ στο σύνδεσμο "εντοπίστε" στο αρχείο καταγραφής συμβάντων.

![Screenshot 46](../images/Installation_Screenshot_46.png)

## Transfer APK to smartphone

<!--- Text is maintained in page building-apk.md ---> A file manager window opens. It might look a bit different on your system as I am using Linux. On Windows there will be the File Explorer and on Mac OS X the Finder. There you should see the directory with the generated APK file. Unfortunately this is the wrong place as "wear-release.apk" is not the signed "app" APK we are searching for.

![Screenshot 47](../images/Installation_Screenshot_47.png)

Please change to the directory AndroidAPS/app/full/release to find the "app-full-release.apk" file. Transfer this file to your Android smartphone. You can do it on your preferred way, i.e. Bluetooth, cloud upload, connect computer and phone by cable or use email. I use Gmail here in this example as it is fairly simple for me. I mention this because to install the self-signed app we need to allow Android on our smartphone to do this installation even if this file is received via Gmail which is normally forbidden. If you use something other please proceed accordingly.

![Screenshot 48](../images/Installation_Screenshot_48.png)

In the settings of your smartphone there is an area "unknown apps install" where I have to give Gmail the right to install APK files which I get via Gmail.

Select "Allow from this source". After the installation, you can disable it again.

![Installation from unknown sources](../images/Installation_Screenshot_49-50.png)

The last step is to press on the APK file I got via Gmail and install the app. If the APK does not install and you have an older version of AndroidAPS on your phone that was signed with a different key then you will need to uninstall this first, remember to export your settings if so!

Yeah, you got it and can now start with configuring AndroidAPS for your use (CGMS, insulin pump) etc.

## Check AAPS version on phone

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

# Troubleshooting

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

## Uncommitted changes

If you receive failure message like

![Failure uncommitted changes](../images/GIT_TerminalCheckOut0.PNG)

### Option 1

* In Android Studio select VCS -> GIT -> Reset HEAD ![Reset HEAD](../images/GIT_TerminalCheckOut3.PNG)

### Option 2

* Copy ‘git checkout --’ to clipboard (without quote signs)
* Switch to Terminal in Android Studio (lower left side of Android Studio window) ![Android Studio Terminal](../images/GIT_TerminalCheckOut1.PNG)

* Paste copied text and press return ![GIT checkout success](../images/GIT_TerminalCheckOut2.jpg)

## App not installed

![phone app note installed](../images/Update_AppNotInstalled.png)

* Make sure you have transferred the “app-full-release.apk” file to your phone.
* If "App not installed" is displayed on your phone follow these steps: 
  1. [Export settings](../Usage/Objectives#export-import-settings) (in AAPS version already installed on your phone)
  2. Uninstall AAPS on your phone.
  3. Enable airplane mode & turn off bluetooth.
  4. Install new version (“app-full-release.apk”)
  5. [Ρυθμίσεις εισαγωγής](../Usage/Objectives#export-import-settings)
  6. Turn bluetooth back on and disable airplane mode

## App installed but old version

If you build the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed the merging step in the [update manual](../Installing-AndroidAPS/Update-to-new-version#updating-branch-from-github).

## None of the above worked

If non of the above tips helped you might consider building the app from scratch:

1. [Export settings](../Usage/Objectives#export-import-settings) (in AAPS version already installed on your phone)
2. Have your key password and key store password ready In case you have forgotten passwords you can try to find them in project files as described [here](https://youtu.be/nS3wxnLgZOo).
3.     Note down the path to your key store
      In Android Studio Build -> Generate Signed APK
      ![Key store path](../images/KeystorePath.PNG)
      
  
  4. Build app from scratch as described [here](../Installing-AndroidAPS/Building-APK#download-code-and-additional-components). Use existing key and key store.
4. When you have build the APK successfully delete the exiting app on your phone, transfer the new apk to your phone and install.
5. [Ρυθμίσεις εισαγωγής](../Usage/Objectives#export-import-settings)

## Worst case scenario

In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

Make sure to uninstall all files associated with Android Studio. Manuals can be found online i.e. <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>.

Install Android Studio from scratch as described [here](../Installing-AndroidAPS/Building-APK#install-android-studio) and **do not update gradle**.