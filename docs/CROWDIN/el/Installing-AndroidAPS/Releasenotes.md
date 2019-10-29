# Σημειώσεις έκδοσης

Ακολουθήστε τις οδηγίες στο [εγχειρίδιο ενημερώσεων](../Installing-AndroidAPS/Update-to-new-version.md). Μπορείτε επίσης να βρείτε μια ενότητα αντιμετώπισης προβλημάτων που αντιμετωπίζει τις πιο συνήθεις δυσκολίες κατά την ενημέρωση στη σελίδα του εγχειριδίου ενημέρωσης.

Ξεκινώντας με την έκδοση 2.3 δημιουργείται μια νέα διαδικασία ενημέρωσης. Θα λάβετε τις ακόλουθες πληροφορίες μόλις είναι διαθέσιμη μια νέα ενημέρωση:

![Ενημέρωση πληροφοριών](../images/AAPS_LoopDisable90days.png)

Τότε έχετε 60 ημέρες για να ενημερώσετε. Εάν δεν ενημερώσετε μέσα σε αυτές τις 60 ημέρες, το AAPS θα πέσει πίσω στο LGS (αναστολή χαμηλής γλυκόζης - βλέπε [ γλωσσάριο ](../Getting-Started/Glossary.md)) όπως στο [ στόχος 4 ](../Usage/Objectives.md).

Αν δεν ενημερώσετε για άλλες 30 ημέρες (90 ημέρες από την ημερομηνία νέας κυκλοφορίας), το AAPS θα μεταβεί σε ανοιχτό κύκλωμα.

Σας παρακαλούμε να καταλάβετε ότι αυτή η αλλαγή δεν έχει σκοπό να σας δυσκολέψει, αλλά γίνετε για λόγους ασφαλείας. Οι νέες εκδόσεις του AndroidAPS δεν παρέχουν μόνο νέες λειτουργίες αλλά και σημαντικές διορθώσεις ασφαλείας. Ως εκ τούτου, είναι απαραίτητο κάθε χρήστης να ενημερώνει όσων το δυνατό πιο γρήγορα.. Δυστυχώς υπάρχουν ακόμα αναφορές σφαλμάτων από πολύ παλιές εκδόσεις, γι 'αυτό προσπαθείστε να βελτιώσετε την ασφάλεια για κάθε χρήστη και ολόκληρη την κοινότητα του DIY. Ευχαριστώ για την κατανόηση.

## Version 2.5.0

Ημερομηνία κυκλοφορίας: 26-10-2019

***Note***: Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to [build the apk](../Installing-AndroidAPS/Building-APK.md) or [update](../Installing-AndroidAPS/Update-to-new-version.md).

***Note***: When using xDrip [identify receiver](../Configuration/xdrip#identify-receiver) must be set.

### Is this update for me? Currently is NOT supported

* Android 5
* Poctech
* 600SeriesUploader
* Glimp
* Patched Dexcom from 2.3 directory

### Σημαντικά νέα χαρακτηριστικά

* Internal change of targetSDK to 28 (Android 9), jetpack support
* RxJava2, Okhttp3, Retrofit support
* Old [Medtronic pumps](../Configuration/MedtronicPump.md) support (RileyLink need)
* New [Automation plugin](../Usage/Automation.rst)
* Allow to bolus only part from bolus wizard calculation
* Rendering insulin activity
* Adjusting IOB predictions by autosense result
* New support for patched Dexcom apks ([2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4))
* Έλεγχος υπογραφής
* Allow to bypass objectives for OpenAPS users
* New [objectives](../Usage/Objectives2019.rst) - exam, application handling
* Fixed bug in Dana* drivers where false time difference was reported
* Fixed bug in [SMS communicator](../Usage/SMS-Commands.md)

## Έκδοση 2.3

Ημερομηνία κυκλοφορίας: 25-04-2019

### Σημαντικά νέα χαρακτηριστικά

* Σημαντικό στοιχείο ασφαλείας για το Insight (πολύ σημαντικό αν χρησιμοποιείτε το Insight!)
* Επιδιόρθωση ιστορικού-προγράμματος περιήγησης
* Επιδιόρθωση τους υπολογισμούς του δέλτα
* Ενημέρωση γλωσσών
* Έλεγχος για το GIT και προειδοποιήσει για την αναβάθμιση του gradle
* Περισσότερες αυτόματες δοκιμές
* Επιδιόρθωση πιθανών σφαλμάτων στην υπηρεσία Alarmsound (ευχαριστούμε τον @lee-b !)
* Επιδιόρθωση προβολής δεδομένων BG (λειτουργεί ανεξάρτητα από την υπηρεσία SMS τώρα!)
* Νέα Έκδοση-Έλεγχος

## Έκδοση 2.2.2

Ημερομηνία κυκλοφορίας: 07-04-2019

### Σημαντικά νέα χαρακτηριστικά

* Επιδιόρθωση Autosens: απενεργοποίηση του TT αυξάνει / μειώνει το στόχο
* Νέες μεταφράσεις
* Επιδιόρθωση οδηγών του Insight
* Επιδιόρθωση plugin SMS

## Έκδοση 2.2

Ημερομηνία κυκλοφορίας: 29-03-2019

### Σημαντικά νέα χαρακτηριστικά

* [Επιδιόρθωση DST](../Usage/Timezone-traveling#time-adjustment-daylight-savings-time-dst)
* Αναβάθμιση Wear
* Αναβάθμιση [SMS plugin](../Usage/SMS-Commands.md)
* Επιστρέψτε στους στόχους.
* Σταματήστε το κύκλωμα αν ο δίσκος του τηλεφώνου είναι γεμάτος

## Έκδοση 2.1

Ημερομηνία κυκλοφορίας: 03-03-2019

### Σημαντικά νέα χαρακτηριστικά

* Υποστήριξη Accu-Chek [Insight](../Configuration/Accu-Chek-Insight-Pump.md) (από Tebbe Ubben and JamOrHam)
* Τα φώτα κατάστασης στην κύρια οθόνη (Nico Schmitz)
* Βοηθός ώρας για τη θερινή ώρα (Roumen Georgiev)
* Διόρθωση στα ονόματα προφίλ επεξεργασίας που προέρχονται από την NS (Johannes Mockenhaupt)
* Διόρθωση φραγής UI (Johannes Mockenhaupt)
* Υποστήριξη για ενημερωμένη εφαρμογή G5 (Tebbe Ubben και Milos Kozak)
* Υποστήριξη G6, Poctech, Tomato, Eversense BG source(Tebbe Ubben and Milos Kozak)
* Fixed disabling SMB from preferences (Johannes Mockenhaupt)

### Misc

* If you are using non default `smbmaxminutes` value you have to setup this value again

## Version 2.0

Release date: 03-11-2018

### Σημαντικά νέα χαρακτηριστικά

* oref1/SMB support ([oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achive and how to use it so it can operate smoothly.
* Accu-check Combo pump support ([setup instructions](../Configuration/Accu-Chek-Combo-Pump.md))
* Setup wizard: guides you through the process of setting up AndroidAPS

### Settings to adjust when switching from AMA to SMB

* Objective 8 must be started for SMBs to be enabled (SMB tab generally shows what restrictions apply)
* maxIOB now includes *all* IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U.
* min_5m_carbimpact default has changed from 3 to 8 going from AMA to SMB. Εάν κάνετε αναβάθμιση από AMA σε SMB, πρέπει να το αλλάξετε χειροκίνητα
* Note when building AndroidAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! Εάν η κατασκευή σας αποτύχει με σφάλμα σχετικά με τη διαμόρφωση "κατά παραγγελία", μπορείτε να κάνετε τα εξής:
  
  * Ανοίξτε το παράθυρο "Προτιμήσεις" κάνοντας κλικ στην επιλογή Αρχείο> Ρυθμίσεις (σε Mac, Android Studio> Προτιμήσεις).
  * Στο αριστερό τμήμα του παραθύρου, κάντε κλικ στην επιλογή Δημιουργία, εκτέλεση, ανάπτυξη> μεταγλωττιστής.
  * Καταργήστε την επιλογή του πλαισίου ελέγχου Configure κατα παραγγελία.
  * Κάντε κλικ στην επιλογή Εφάρμοσε ή ΟΚ.

### Overview tab

* Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). TTs use defaults set in preferences. The new Hypo TT option is a high temp TT to prevent the loop from too aggressively overcorrection rescue carbs.
* Treatment buttons: old treatment button still available, but hidden by default. Visibility of buttons can now be configured. New insulin button, new carbs button (including [eCarbs/extended carbs](../Usage/Extended-Carbs.md))
* Colored prediction lines: 
  * Orange: COB (colour is used generally to represent COB and carbs)
  * Dark blue: IOB (colour is used generally to represent IOB and insulin)
  * Light blue: zero-temp
  * Dark yellow: UAM
* Option to show a notes field in insulin/carbs/calculator/prime+fill dialogs, which are uploaded to NS
* Updated prime/fill dialog allows priming and creating careportal entries for site change and cartridge change

### Watch

* Separate build variant dropped, included in regular full build now. To use bolus controls from watch, enable this setting on the phone
* Wizard now only asks for carbs (and percentage if enabled in watch settings). Which parameters are included in the calculation can be configured in the settings on the phone
* confirmations and info dialogs now work on wear 2.0 as well
* Added eCarbs menu entry

### New plugins

* PocTech app as BG source
* Dexcom patched app as BG source
* oref1 sensitivity plugin

### Misc

* App now uses drawer to show all plugins; plugins selected as visible in config builder are shown as tabs on top (favourites)
* Overhaul for config builder and objectives tabs, adding descriptions
* New app icon
* Lots of improvements and bugfixes
* Nightscout-independant alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see *Local alerts* in settings)
* Option to keep screen on
* Option to show notification as Android notification
* Advanced filtering (allowing to always enable SMB and 6h after meals) supported with patched Dexcom app or xDrip with G5 native mode as BG source.