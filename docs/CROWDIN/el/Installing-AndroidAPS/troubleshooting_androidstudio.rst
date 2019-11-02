Troubleshooting Android Studio
*****
Προειδοποίηση μεταγλωττιστή Kotlin
=====
Αν η κατασκευή ολοκληρώθηκε με επιτυχία, αλλά έχετε προειδοποιήσεις μεταγλωττιστή Kotlin τότε απλώς αγνοήστε αυτές τις προειδοποιήσεις. 

Η εφαρμογή κατασκευάστηκε με επιτυχία και μπορεί να μεταφερθεί στο τηλέφωνο.

.. image:: ../images/GIT_WarningIgnore.PNG
  :alt: ignore Kotline compiler warning

Δεν ήταν δυνατή η λήψη... / εργασία εκτός σύνδεσης
=====
Εάν λάβετε ένα μήνυμα αποτυχίας όπως αυτό

.. image:: ../images/GIT_Offline1.jpg
  :alt: Warning could not download

βεβαιωθείτε ότι η εργασία "εκτός σύνδεσης" είναι απενεργοποιημένη.

Αρχείο -> Ρυθμίσεις

.. image:: ../images/GIT_Offline2.jpg
  :alt: Settings offline work

Error: buildOutput.apkData must not be null
=====
Sometimes you might get an error message when building the apk saying

  `Errors while building APK.`
   
  `Cause: buildOutput.apkData must not be null`

This is a known bug in Android Studio 3.5 and will probably not be fixed before Android Studio 3.6. Three options:

1. Manually delete the three build folders (normal "build", build folder in "app" and build folder in "wear") and generate signed apk again.
2. Set destination folder to project folder instead of app folder as described in `this video <https://www.youtube.com/watch?v=BWUFWzG-kag>`_.
3. Change apk destination folder (different location).

No CGM data when using xDrip
=====
Identify receiver as described on `xDrip+ settings page <../Configuration/xdrip#identify-receiver>`_.

Μη δεσμευμένες αλλαγές
=====
Εάν λάβετε μήνυμα αποτυχίας όπως

.. image:: ../images/GIT_TerminalCheckOut0.PNG
  :alt: Failure uncommitted changes

Option 1 - Check git installation
-----
* git might be not installed correctly (must be globally available)
* `Check git installation <../Installing-AndroidAPS/git-install.rst#4-check-git-settings-in-android-studio>`_
* If no git version is shown in check but git is installed on your computer, make sure Android Studio knows where `git is located <../Installing-AndroidAPS/git-install.rst#2-set-git-path-in-android-studio>`_ on your computer.

Option 2 - Reload source code
-----
* In Android Studio select VCS -> GIT -> Reset HEAD

.. image:: ../images/GIT_TerminalCheckOut3.PNG
  :alt: Reset HEAD
   
Option 3 - Check for updates
-----
* Copy ‘git checkout --’ to clipboard (without quote signs)
* Switch to Terminal in Android Studio (lower left side of Android Studio window)

  .. image:: ../images/GIT_TerminalCheckOut1.PNG
  :alt: Android Studio Terminal
   
* Paste copied text and press return

  .. image:: ../images/GIT_TerminalCheckOut2.jpg
    :alt: GIT checkout success

Η εφαρμογή δεν έχει εγκατασταθεί
=====
.. image:: ../images/Update_AppNotInstalled.png
  :alt: phone app note installed

* Make sure you have transferred the “app-full-release.apk” file to your phone.
* If "App not installed" is displayed on your phone follow these steps:
  
1. `Export settings <../Usage/Objectives#export-import-settings>`_ (in AAPS version already installed on your phone)
2. Καταργήστε την εγκατάσταση του AAPS στο τηλέφωνό σας.
3. Enable airplane mode & turn off bluetooth.
4. Εγκατάσταση νέας έκδοσης ("app-full-release.apk")
5. `Import settings <../Usage/Objectives#export-import-settings>`_
6. Ενεργοποιήστε ξανά το bluetooth και απενεργοποιήστε τη λειτουργία του αεροπλάνου

Η εφαρμογή έχει εγκατασταθεί αλλά είναι παλαιά έκδοση
=====
If you build the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed the merging step in the [update manual](../Installing-AndroidAPS/Update-to-new-version#updating-branch-from-github).

Κανένα από τα παραπάνω δεν δούλεψε
=====
Εάν δεν βοηθηθήκατε από τις παραπάνω συμβουλές, μπορείτε να εξετάσετε το ενδεχόμενο να δημιουργήσετε την εφαρμογή από την αρχή:

1. `Export settings <../Usage/Objectives#export-import-settings>`_ (in AAPS version already installed on your phone)
2. Have your key password and key store password ready
    In case you have forgotten passwords you can try to find them in project files as described `here <https://youtu.be/nS3wxnLgZOo>`_. Or you just use a new keystore. In this case you have to `export settings <../Usage/Objectives#export-import-settings>`_ in AAPS on your phone, uninstall the old version of AAPS, install the new one and then `import settings <../Usage/Objectives#export-import-settings>`_ in the new version.
3. Note down the path to your key store
    In Android Studio Build -> Generate Signed APK
    
    .. image:: ../images/KeystorePath.PNG
     :alt: Key store path
 
4. Build app from scratch as described `here <../Installing-AndroidAPS/Building-APK#download-code-and-additional-components>`_.
     Χρησιμοποιήστε το υπάρχον κλειδί και την αποθήκευση κλειδιού.
5.	Όταν έχετε δημιουργήσει το APK, διαγράψτε με επιτυχία την εξερχόμενη εφαρμογή στο τηλέφωνό σας, μεταφέρετε το νέο APK στο τηλέφωνό σας και εγκαταστήστε το.
6. `Import settings <../Usage/Objectives#export-import-settings>`_

Στη χειρότερη περίπτωση
=====
Σε περίπτωση που ακόμη και η οικοδόμηση της εφαρμογής από το μηδέν δεν λύσει το πρόβλημά σας ίσως να θέλετε να προσπαθήσετε να απεγκαταστήσετε πλήρως το Android Studio. Μερικοί χρήστες ανέφεραν ότι αυτό λύνει το πρόβλημά τους.

Βεβαιωθείτε ότι έχετε καταργήσει την εγκατάσταση όλων των αρχείων που σχετίζονται με το Android Studio. Manuals can be found online i.e. `https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10 <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>`_.

Install Android Studio from scratch as described `here <../Installing-AndroidAPS/Building-APK#install-android-studio>`_ and **do not update gradle**.
