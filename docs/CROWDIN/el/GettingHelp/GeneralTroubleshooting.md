(generaltroubleshooting)=

# Αντιμετώπιση προβλημάτων

**Ξεκινήστε από εδώ όταν κάτι δεν λειτουργεί.** Οι πληροφορίες για την αντιμετώπιση προβλημάτων βρίσκονται σε πολλές σελίδες της τεκμηρίωσης. Αυτή η σελίδα τις συγκεντρώνει: είναι μια συλλογή συνδέσμων, ταξινομημένων ανά θέμα, που σας βοηθά να λύσετε τα πιο συχνά προβλήματα.

Αν δεν βρείτε την απάντηση παρακάτω, δείτε επίσης:

* τις [Συχνές Ερωτήσεις](../UsefulLinks/FAQ.md) για απαντήσεις σε συχνές ερωτήσεις, και
* τον [οδηγό βελτίωσης του προφίλ](ProfileTuning.md), αν το κύκλωμά σας λειτουργεί αλλά ο έλεγχος της γλυκόζης χρειάζεται βελτίωση.

```{admonition} Still stuck?
:class: tip
Αν κανένας σύνδεσμος δεν λύνει το πρόβλημά σας, δείτε τη σελίδα [Πού μπορώ να βρω βοήθεια;](WhereCanIGetHelp.md) για να ρωτήσετε την κοινότητα (Facebook, Discord), ή στείλτε τα [αρχεία καταγραφής](AccessingLogFiles.md) σας στους προγραμματιστές.
```

---

(generaltroubleshooting-aaps-app)=

## Εφαρμογή AAPS

### Δημιουργία και ενημέρωση

* Αν το build αποτύχει, δείτε την ενότητα [Αν το build αποτύχει](#building-aaps-troubleshooting): εκεί υπάρχει η ενότητα αντιμετώπισης προβλημάτων για κάθε τρόπο δημιουργίας:
  * [AAPS Builder](#aaps-builder-troubleshooting)
  * [Δημιουργία μέσω browser](#aaps-ci-troubleshooting)
  * [Android Studio](TroubleshootingAndroidStudio.md)
* Χαμένο ή νέο keystore: [Επανεγκατάσταση του AAPS](#reinstall-aaps)
* Ενημέρωση του **AAPS**: [με το AAPS Builder](#aaps-builder-updates), [με δημιουργία μέσω browser (fork)](#update-browser-build-troubleshooting), [με το Android Studio](#update-computer-build-troubleshooting)

### Εγκατάσταση

* [Προειδοποίηση Google Play Protect](#transferring-installing-play-protect-warning): η εφαρμογή αναφέρεται ως μη ασφαλής.
* Η εγκατάσταση **μπλοκάρεται** με μήνυμα για μη επαληθευμένο προγραμματιστή: δείτε την ενότητα [Επαλήθευση προγραμματιστή Android](#android-developer-verification) για τους δωρεάν τρόπους εγκατάστασης.

### Ρυθμίσεις

* [Προφίλ: «Ο βασικός ρυθμός δεν είναι συμβατός με την τρέχουσα αντλία»](#your-aaps-profile-basal-not-compatible)
* [Αντλία: «Τα δεδομένα προέρχονται από διαφορετική αντλία»](#config-builder-wrong-pump-data)
* [Nightscout Client](TroubleshootingNsClient.md)

### Χρήση

* [Λάθος τιμές υδατανθράκων (αργή απορρόφηση υδατανθράκων)](#CobCalculation-detection-of-wrong-cob-values)
* [Αυτοματισμοί](#automations-troubleshooting)
* [Πλήρως κλειστό κύκλωμα](#full-closed-loop-troubleshooting)

---

(generaltroubleshooting-bluetooth-related-issues)=


## Προβλήματα σχετικά με το Bluetooth

Για γνωστά προβλήματα με συνδέσεις Bluetooth, διακοπές σύνδεσης με αντλίες/Pod ή προβλήματα ενεργοποίησης και σύνδεσης, δείτε τη σελίδα [Προβλήματα σχετικά με το Bluetooth](../GettingHelp/BluetoothTroubleshooting.md)

---

(generaltroubleshooting-android-related-issues)=

## Προβλήματα που σχετίζονται με το Android

### Βελτιστοποίηση μπαταρίας

Το **AAPS** μπορεί να σας βοηθήσει να βρείτε τις σωστές ρυθμίσεις για το τηλέφωνό σας: ανοίξτε το **μενού** (☰) > **Σχετικά** και πατήστε **Μην σκοτώσεις την εφαρμογή μου;**. Ανοίγει τις οδηγίες για τη μάρκα του τηλεφώνου σας στον ιστότοπο [Don't kill my app](https://dontkillmyapp.com/). Ο [οδηγός εγκατάστασης](#setup-wizard-bluetooth-battery-optimisation) σας ζητά επίσης να απενεργοποιήσετε τη βελτιστοποίηση μπαταρίας για το **AAPS** και το Bluetooth.

Το Android έχει ρυθμίσεις εξοικονόμησης μπαταρίας που είναι ενεργές από προεπιλογή. Αυτές οι ρυθμίσεις αναστέλλουν/σταματούν αυτόματα εφαρμογές που δεν χρειάζονται για τη λειτουργία του συστήματος. Έτσι εξοικονομείται η μπαταρία που καταναλώνουν εφαρμογές που δεν χρειάζεται να τρέχουν συνέχεια.

Όταν αυτή η ρύθμιση είναι ενεργή, είναι πολύ πιθανό να δημιουργήσει προβλήματα στο **AAPS** και σε άλλες βοηθητικές εφαρμογές, όπως το **xDrip**.

Είναι σημαντικό να απενεργοποιήσετε τη βελτιστοποίηση μπαταρίας, ώστε το **AAPS** και οι άλλες βοηθητικές εφαρμογές να μένουν ενεργές όλη την ώρα.

Ανάλογα με τον κατασκευαστή και το μοντέλο του τηλεφώνου σας, μπορεί να υπάρχουν περισσότερα από ένα σημεία και ρυθμίσεις που πρέπει να απενεργοποιήσετε.

***ΣΗΜΕΙΩΣΗ:** Ακολουθήστε τα παρακάτω βήματα για να απενεργοποιήσετε τη βελτιστοποίηση μπαταρίας για την υπηρεσία Bluetooth, αν το τηλέφωνό σας έχει αυτή την επιλογή. Τα ίδια βήματα ισχύουν και για το **AAPS** και άλλες εφαρμογές, αλλά τα στιγμιότυπα οθόνης δείχνουν μόνο την υπηρεσία Bluetooth.*

#### Τηλέφωνα Pixel (Android χωρίς αλλαγές)

* Μεταβείτε στις ρυθμίσεις του Android και επιλέξτε «Εφαρμογές».

  ![Ρυθμίσεις Android¦Εφαρμογές](../images/troubleshooting/pixel/01_androidsettings.png)

* Επιλέξτε «Εμφάνιση όλων των εφαρμογών» ("See all apps")

  ![Εμφάνιση όλων των εφαρμογών](../images/troubleshooting/pixel/02_apps.png)

* Στο μενού δεξιά, επιλέξτε να εμφανίζονται και οι εφαρμογές συστήματος («Εμφάνιση συστήματος», "Show system").

  ![Εμφάνιση εφαρμογών συστήματος](../images/troubleshooting/pixel/03_allapps.png)

* Τώρα αναζητήστε και επιλέξτε την εφαρμογή «Bluetooth».

  ![Εφαρμογή Bluetooth](../images/troubleshooting/pixel/03_bluetooth.png)

* Πατήστε «Χρήση μπαταρίας εφαρμογής» ("App battery usage") και επιλέξτε «Χωρίς περιορισμούς» ("Unrestricted", σε μερικές παλαιότερες εκδόσεις Android λέγεται «Χωρίς βελτιστοποίηση», "Not optimized").

  ![Βελτιστοποίηση μπαταρίας για το Bluetooth](../images/troubleshooting/pixel/04_btunrestricted.png)


#### Τηλέφωνα Samsung

* Μεταβείτε στις ρυθμίσεις του Android και επιλέξτε «Εφαρμογές»

* Στο εικονίδιο που κανονικά αλλάζει την ταξινόμηση (1), επιλέξτε «Εμφάνιση εφαρμογών συστήματος» (2).

  ![Φίλτρο εφαρμογών](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![Εμφάνιση εφαρμογών συστήματος](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* Τώρα αναζητήστε την εφαρμογή Bluetooth και επιλέξτε την για να δείτε τις ρυθμίσεις της.

  ![Εφαρμογή Bluetooth](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* Επιλέξτε «Μπαταρία».

  ![Μπαταρία](../images/troubleshooting/samsung/Samsung04_Battery.png)

* Ρυθμίστε την σε «Χωρίς περιορισμούς» ("Unrestricted", σε μερικές παλαιότερες εκδόσεις Android λέγεται «Χωρίς βελτιστοποίηση», "Not optimized").

  ![Χωρίς περιορισμούς](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)

#### Τηλέφωνα Huawei

Δείτε αυτόν τον οδηγό για [Bluetooth και βελτιστοποίηση μπαταρίας σε Huawei](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-cgm)=

## Συνεχής Παρακολούθηση Γλυκόζης (CGM)

Χρήσιμοι σύνδεσμοι για γνωστά προβλήματα των CGM και τις λύσεις τους.

* [Γενικά](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 2 με Minimal Looper](#minimallooper-troubleshooting)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [xDrip – δεν υπάρχουν δεδομένα CGM](#xdrip-identify-receiver)
* [xDrip – αντιμετώπιση προβλημάτων με Dexcom](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

---

(generaltroubleshooting-pumps)=

## Αντλίες

Χρήσιμοι σύνδεσμοι για γνωστά προβλήματα των αντλιών και τις λύσεις τους

* [Accu-Chek Combo](#combov2-tips-for-basic-usage)
* [Accu-Chek Insight](#Accu-Chek-Insight-Pump-insight-specific-errors)
* [CareLevo](#carelevo-alarms-and-notifications)
* [DanaRS](#DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Diaconn G8](#diaconn-g8-bluetooth-troubleshooting)
* [EOPatch2](#eopatch2-alarms-and-warnings)
* [Medtronic + RileyLink](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)
* [Medtrum Nano](#medtrum-nano-troubleshooting)
* [Omnipod DASH](#omnipod-dash-troubleshooting)
* [Omnipod Eros](#OmnipodEros-troubleshooting)

---

(generaltroubleshooting-phones)=

## Τηλέφωνα

Χρήσιμοι σύνδεσμοι για γνωστά προβλήματα των τηλεφώνων και τις λύσεις τους

* [Λίστα με δοκιμασμένα τηλέφωνα και συσκευές](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)
* [Jelly](../CompatiblePhones/Jelly.md)
* [Bluetooth και βελτιστοποίηση μπαταρίας σε Huawei](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-remote-control)=

## Απομακρυσμένος έλεγχος

* [AAPSClient και απομακρυσμένος έλεγχος (σύζευξη, οι εντολές δεν φτάνουν)](#client-master-control-troubleshooting)
* [Προβλήματα με το «Διακριτικό πρόσβασης Nightscout»](#remotecontrol-nightscout-access-token)
* [Εντολές SMS](#SMSCommands-troubleshooting)
* [Android Auto](#android-auto-troubleshooting)

---

(generaltroubleshooting-smartwatches)=

## Έξυπνα ρολόγια

Χρήσιμοι σύνδεσμοι για γνωστά προβλήματα των έξυπνων ρολογιών και τις λύσεις τους

* [Αντιμετώπιση προβλημάτων της εφαρμογής Wear](#Watchfaces-troubleshooting-the-wear-app)
* [Το ρολόι και το τηλέφωνο δεν επικοινωνούν](#wear-os-watch-phone-communication)
* [Wear OS 5](#wear-os-5-troubleshooting)
* [Δημιουργία της εφαρμογής Wear](#building-aaps-wear-os-troubleshooting)
