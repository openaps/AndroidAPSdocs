# Αντλία Accu Chek Combo

**This software is part of a DIY solution and is not a product, but requires YOU to read, learn and understand the system including how to use it. It is not something that does all your diabetes management for you, but allows you to improve your diabetes and your quality of life if you're willing to put in the time required. Don't rush into it, but allow yourself time to learn. You alone are responsible for what you do with it.**

## Hardware requirements

- A Roche Accu-Chek Combo (any firmware, they all work)
- A Smartpix or Realtyme device together with the 360 Configuration Software to configure the pump. Roche sends out Smartpix devices and the configuration software free of charge to their customers upon request.
- A compatible phone: An Android phone with a phone running LineageOS 14.1 (formerly CyanogenMod) or Android 8.1 (Oreo). The LineageOS 14.1 has to be a recent version from at least June 2017 since the change needed to pair the Combo pump was only introduced at that time. A list of phones can be found in the [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) document. Please be aware that this is not complete list and reflects personal user experience. You are encouraged to also enter your experience and thereby help others (these projects are all about paying it forward).

- Be aware that while Android 8.1 allows communicating with the Combo, there are still issues with AAPS on 8.1. For advanced users, it is possible to perform the pairing on a rooted phone and transfer it to another rooted phone to use with ruffy/AAPS, which must also be rooted. This allows using phones with Android < 8.1 but has not been widely tested: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Limitations

- Extended bolus and multiwave bolus are not supported (see [Extended Carbs](../Usage/Extended-Carbs) instead)
- Only one basal profile is supported.
- Setting a basal profile other than 1 on the pump, or delivering extended boluses or multiwave boluses from the pump interferes with TBRs and forces the loop into low-suspend only mode for 6 hours as the the loop can't run safely under these conditions.
- It's currently not possible to set the time and date on the pump, so daylight saving times changes have to be performed manually (you may disable the phone's automatic clock update in the evening and change it back in the morning together with the pump clock to avoid an alarm during the night).
- Currently only basal rates in the range of 0.05 to 10 U/h are supported. This also applies when modifying a profile, e.g. when increasing to 200%, the highest basal rate must not exceed 5 U/h since it will be doubled. Similarly, when reducing to 50%, the lowest basal rate must be at least 0.10 U/h.
- If the loop requests a running TBR to be cancelled the Combo will set a TBR of 90% or 110% for 15 minutes instead. This is because cancelling a TBR causes an alert on the pump which causes a lot of vibrations.
- Occasionally (every couple of days or so) AAPS might fail to automatically cancel a TBR CANCELLED alert, which the user then needs to deal with (by pressing the refresh button in AAPS to transfer the warning to AAPS or confirming the alert on the pump).
- Bluetooth connection stability varies with different phones, causing "pump unrechable" alerts, where no connection to the pump is established anymore. If that error occurs, make sure Bluetooth is enabled, press the Refresh button in the Combo tab to see if this was caused by an intermitted issue and if still no connection is established, reboot the phone which should usually fix this. There is another issue were a restart doesn't help but a button on the pump must be pressed (which resets the pump's Bluetooth), before the pump accepts connections from the phone again. There is very little that can be done to remedy either of those issues at this point. So if you see those errors frequently your only option at this time is to get another phone that's known to work well with AndroidAPS and the Combo (see above).
- Issuing a bolus from the pump will be not always be detected in time (checked for whenever AAPS connects to the pump), and might take up to 20 minutes in the worst case. Boluses on the pump are always checked before a high TBR or a bolus issued by AAPS but due to the limitations AAPS will then refuse to issue the TBR/Bolus as it was calculated under false premises. (-> Don't bolus from the Pump! See chapter *Usage*)
- Setting a TBR on the pump is to be avoided since the loop assumes control of TBRs. Detecting a new TBR on the pump might take up to 20 minutes and the TBR's effect will only be accounted from the moment it is detected, so in the worst case there might be 20 minutes of a TBR that is not reflected in IOB. 

## Setup

- Configure the pump using 360 config software. If you do not have the software, please contact your Accu-Chek hotline. Συνήθως στέλνουν στους εγγεγραμμένους χρήστες ένα CD με το "Λογισμικό Διαμόρφωσης Αντλίας 360" και μια συσκευή σύνδεσης SmartPix USB με υπέρυθρη σύνδεση (η συσκευή Realtyme λειτουργεί επίσης εάν το έχετε). 
  - Απαιτείται (με πράσινο χρώμα στα στιγμιότυπα οθόνης): 
    - Ορίστε/αφήστε τη διαμόρφωση του μενού ως "Standard", θα εμφανίζονται μόνο τα υποστηριζόμενα μενού/ενέργειες στην αντλία και θα αποκρύπτονται εκείνα τα οποία δεν υποστηρίζονται (εκτεταμένο/συνδυαστικό bolus, πολλαπλοί βασικοί ρυθμοί), που προκαλούν περιορισμό της λειτουργικότητας του κυκλώματος όταν χρησιμοποιούνται επειδή δεν είναι δυνατό να τρέξετε το κύκλωμα με ασφαλή τρόπο όταν χρησιμοποιείται.
    - Επαληθεύστε το *Γρήγορες πληροφορίες κειμένου* έχει οριστεί σε «Γρήγορες INFO» (χωρίς τα εισαγωγικά, βρέθηκαν στο *Επιλογές αντλίας ινσουλίνης*).
    - Ορίστε TBR *Μέγιστη ρύθμιση* σε 500%
    - Απενεργοποίηση *σήμα τέλους του προσωρινού βασικού ρυθμού*
    - Ορίστε TBR *Διάρκεια αύξησης* έως 15 λεπτά
    - Ενεργοποιήστε το Bluetooth
  - Προτεινόμενες (με μπλε χρώμα στα στιγμιότυπα οθόνης) 
    - Ορίστε συναγερμό χαμηλή αμπούλα σύμφωνα με τις προτιμήσεις σας
    - Ρυθμίστε μέγιστο bolus κατάλληλο για τη θεραπεία σας για την προστασία από σφάλματα του λογισμικού
    - Ομοίως, ρυθμίστε μέγιστη διάρκεια TBR για ασφάλεια. Αφήστε τουλάχιστον 3 ώρες, αφού η επιλογή αποσύνδεσης της αντλίας για 3 ώρες ρυθμίζει το 0% για 3 ώρες.
    - Ενεργοποιήστε το κλείδωμα πλήκτρων στην αντλία για να αποφύγετε το bolus από την αντλία, ιδιαίτ. όταν η αντλία χρησιμοποιήθηκε πριν και το γρήγορο bolus ήταν μια συνήθεια.
    - Ορίστε χρονικό όριο οθόνης και χρονικό όριο μενού στο ελάχιστο των 5,5 και 5 αντίστοιχα. Αυτό επιτρέπει στο AAPS να επανέλθει πιο γρήγορα από καταστάσεις σφάλματος και να μειώσει τις δονήσεις που μπορεί να προκύψουν κατά τη διάρκεια τέτοιων σφαλμάτων

![Screenshot of user menu settings](../images/combo/combo-menu-settings.png)

![Screenshot of TBR settings](../images/combo/combo-tbr-settings.png)

![Screenshot of bolus settings](../images/combo/combo-bolus-settings.png)

![Screenshot of insulin cartridge settings](../images/combo/combo-insulin-settings.png)

- Εγκαταστήστε το AndroidAPS όπως περιγράφεται στον [οδηγό AndroidAPS](http://wiki.AndroidAPS.org).
- Σιγουρευτείτε ότι διαβάσατε τον οδηγό και καταλάβατε πως να φτιάξετε το AndroidAPS.
- Επιλέξτε την προσθήκη MDI στο AndroidAPS, όχι την προσθήκη Combo σε αυτό το σημείο για να αποφύγουμε την παρέμβαση με το ruffy κατά τη διαδικασία της ζεύξης.
- Ακολουθήστε το σύνδεσμο <http://ruffy.AndroidAPS.org> και αντιγράψτε το ruffy μέσω του git.
- Εγκαταστήστε το ruffy και χρησιμοποιήστετο για σύζευξη με την αντλία. Εάν δεν δουλεύει μετά από μερικές προσπάθειες, γυρίστε το στην επιλογή `σύζευξη`, συνδέστε με την αντλία και μετά γυρίστε το πίσω στην αρχική επιλογή. Να ξέρετε ότι διαδικασία της σύζευξης μπορεί να αποτύχει αρχικά (αλλά γίνετε μόνο μια φορά) και ίσως χρειαστεί μερικές προσπάθειες, αναγνωρίστε γρήγορα τα σημάδια ότι κάτι δεν πάει καλά, και όταν ξαναπροσπαθήσετε αφαιρέστε την αντλία από τις ρυθμίσεις του bluetooth εξαρχής. Μια άλλη επιλογή για να δοκιμάσετε είναι να μεταβείτε στο μενού Bluetooth αφού ξεκινήσετε τη διαδικασία σύζευξης (αυτό διατηρεί το Bluetooth του τηλεφώνου ανιχνεύσιμο όσο εμφανίζεται το μενού) και επιστρέψετε στο ruffy αφού επιβεβαιώσετε την σύζευξη στην αντλία, όταν η αντλία εμφανίζει τον κωδικό εξουσιοδότησης. Αν αποτύχετε στην σύζευξη της αντλίας (ας πούμε 10 φορες), δοκιμάστε να περιμένετε έως και 10 δευτερόλεπτα πριν επιβεβαιώσετε την σύζευξη στην αντλία (όταν εμφανίζεται το όνομα του τηλεφώνου στην αντλία). Εάν έχετε ρυθμίσει το χρονικό όριο του μενού για να είναι παραπάνω από 5 δευτερόλεπτα, θα πρέπει να το αυξήσετε ξανά. Ορισμένοι χρήστες ανέφεραν ότι χρειαζόταν να το κάνουν αυτό. Τέλος, δοκιμάστε να αλλάξετε δωμάτιο σε περίπτωση τοπικών παρεμβολών. Τουλάχιστον ένας χρήστης ξεπέρασε αμέσως το πρόβλημα σύζευξης αλλάζοντας απλά δωμάτια.
- Όταν το APPS χρησιμοποιεί το ruffy, η εφαρμογη ruffy δεν μπορεί να χρησιμοποιηθή. Ο ευκολότερος τρόπος είναι απλώς να επανεκκινήσετε το τηλέφωνο μετά τη διαδικασία σύζευξης και να αφήστε το AAPS να αρχίσει το ruffy στο παρασκήνιο.
- Εάν η αντλία είναι εντελώς νέα, θα χρειαστεί να κάνετε ένα bolus στην αντλία, έτσι ώστε η αντλία να δημιουργήσει μια πρώτη καταχώρηση ιστορικού.
- Πριν ενεργοποιήσετε το Combo plugin στο AAPS βεβαιωθείτε ότι το προφίλ σας έχει ρυθμιστεί σωστά και είναι ενεργό(!) και το προφίλ βασικού είναι ενημερωμένο καθώς το AAPS θα συγχρονίσει το βασικό προφίλ στην αντλία. Στη συνέχεια, ενεργοποιήστε την προσθήκη Combo. Πατήστε το κουμπί *Ανανέωση* στην καρτέλα Combo για να προετοιμάσετε την αντλία.
- Για να επαληθεύσετε τη ρύθμισή σας, με την αντλία **αποσυνδεδεμένη**, χρησιμοποιήστε το AAPS για να ρυθμίσετε ένα TBR 500% για 15 λεπτά και να κάνετε ένα bolus. Η αντλία θα πρέπει τώρα να έχει σε λειτουργία το TBR και το bolus στο ιστορικό. Το AAPS θα πρέπει επίσης να δείχνει το ενεργό TBR και το bolus που χορηγήθηκε.

## Γιατί η σύζευξη με την αντλία δεν λειτουργεί με την εφαρμογή "ruffy";

Υπάρχουν αρκετές πιθανές αιτίες. Δοκιμάστε τα παρακάτω βήματα:

1. Εισάγετε μία **νέα ή γεμάτη μπαταρία** στην αντλία. Ανατρέξτε στο τμήμα της μπαταρίας για λεπτομέρειες. Βεβαιωθείτε ότι η αντλία είναι πολύ κοντά στο κινητό.

![Combo should be next to phone](../images/Combo_next_to_Phone.png)

2. Απενεργοποιήστε ή αφαιρέστε οποιαδήποτε άλλη συσκευή bluetooth, ώστε να μην είναι δυνατή η σύνδεση με το τηλέφωνο κατά τη διάρκεια της σύζευξης. Οποιαδήποτε παράλληλη επικοινωνία bluetooth ή προτροπή για τη δημιουργία συνδέσεων μπορεί να διαταράξει τη διαδικασία σύζευξης.

3.     Διαγράψτε τις ήδη συνδεδεμένες συσκευές στο μενού Bluetooth της αντλίας: **BLUETOOTH ΡΥΘΜΙΣΕΙΣ / ΣΥΝΔΕΣΗ / ΑΦΑΙΡΕΣΗ** μέχρι να εμφανίζεται **ΚΑΜΙΑ ΣΥΣΚΕΥΗ**.
      

4. Διαγράψτε την αντλία που είναι ήδη συνδεδεμένη στο τηλέφωνο μέσω Bluetooth: Στην περιοχή Ρυθμίσεις / Bluetooth, αφαιρέστε τη συζευγμένη συσκευή "**SpiritCombo**"
5. Βεβαιωθείτε ότι το AAPS δεν λειτουργεί στο παρασκήνιο σε κύκλωμα. Απενεργοποιήστε το κύκλωμα στο AAPS.
6. Τώρα ξεκινήστε το ruffy στο τηλέφωνο. Μπορείτε να πατήσετε Reset! και αφαιρέστε τη παλιά σύνδεση. Μετά πατήστε Σύνδεση!.
7. Στο μενού Bluetooth της αντλίας, μεταβείτε στο **ΠΡΟΣΘΗΚΗ ΣΥΣΚΕΥΗΣ / ΠΡΟΣΘΉΚΗ ΣΥΝΔΕΣΗΣ**. Πατήστε *ΣΎΝΔΕΣΗ!** * Τα βήματα 5 και 6 πρέπει να γίνουν σε σύντομο χρονικό διάστημα.
8.     Τώρα η αντλία θα πρέπει να εμφανίσει το όνομα BT του τηλεφώνου για να επιλέξετε για σύζευξη. Εδώ είναι σημαντικό να περιμένετε τουλάχιστον 5s
      πριν πατήσετε το κουμπί επιλογής στην αντλία. Διαφορετικά, η αντλία δεν θα στείλει το αίτημα σύζευξης στο τηλέφωνο.
      
      * Εάν η Αντλία Combo έχει ρυθμιστεί σε 5 δευτερόλεπτα διάρκεια φωτισμού οθόνης, μπορείτε να την δοκιμάσετε με 40 δευτερόλεπτα (αρχική ρύθμιση). Από εμπειρία, το διάστημα μεταξύ της αντλία να εμφανιστεί στο τηλέφωνο και να μπορείς να το επιλέξεις είναι 5 με 10 δευτερόλεπτα. Σε πολλές άλλες περιπτώσεις, το χρονικό περιθώριο περνάει, χωρίς επιτυχημένη σύζευξη. Αργότερα θα πρέπει να το επαναφέρετε στα 5 δευτερόλεπτα, για να ικανοποιήσετε τις ρυθμίσεις του AAPS Combo.
      * Εάν η αντλία δεν εμφανίζει το τηλέφωνο ως συσκευή σύζευξης καθόλου, το Bluetooth του τηλεφώνου σας πιθανώς δεν είναι συμβατό με την αντλία. Σιγουρευτείτε οτι τρέχετε ατο κινητό σας τις αναβαθμίσεις **LineageOS ≥14.1** ή **Android ≥ 8.1 (Oreo)**. Εάν είναι δυνατόν δοκιμάστε ένα άλλο τηλέφωνο. You can find a list of already successfully used smartphones under [AAPS Phones] 
        (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 
      

9.     At next Pump should show up a 10 digit security code. And Ruffy a screen to enter it. So enter it in Ruffy and you 
      should be ready to go.
      

10. Reboot the phone.
11. Now you can restart AAPS loop.

## Usage

- Keep in mind that this is not a product, esp. in the beginning the user needs to monitor and understand the system, its limitations and how it can fail. It is strongly advised NOT to use this system when the person using it is not able to fully understand the system.
- Read the OpenAPS documentation https://openaps.org to understand the loop algorithm AndroidAPS is based upon.
- Read the wiki to learn about and understand AndroidAPS http://wiki.AndroidAPS.org
- This integration uses the same functionality which the meter provides that comes with the Combo. The meter allows to mirror the pump screen and forwards button presses to the pump. The connection to the pump and this forwarding is what the ruffy app does. A `scripter` components reads the screen and automates entering boluses, TBRs etc and making sure inputs are processed correctly. AAPS then interacts with the scripter to apply loop commands and to administer boluses. This mode has some restrictions: it's comparatively slow (but well fast enough for what it is used for), and setting a TBR or giving a bolus causes the pump to vibrate.
- The integration of the Combo with AndroidAPS is designed with the assumption that all inputs are made via AndroidAPS. Boluses entered on the pump directly will be detected by AAPS, but it can take up to 20 min before AndroidAPS becomes aware of such a bolus. Reading boluses delivered directly on the pump is a safety feature and not meant to be regularly used (the loop requires knowledge of carbs consumed, which can't be entered on the pump, which is another reason why all inputs should be done in AndroidAPS). 
- Don't set or cancel a TBR on the pump. The loop assumes control of TBR and cannot work reliably otherwise, since it's not possible to determine the start time of a TBR that was set by the user on the pump.
- The pump's first basal rate profile is read on application start and is updated by AAPS. The basal rate should not be manually changed on the pump, but will be detected and corrected as a safety measure (don't rely on safety measures by default, this is meant to detect an unintended change on the pump).
- It's recommended to enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and using the "quick bolus" feature was a habit. Also, with keylock enabled, accidentally pressing a key will NOT interrupt active communication between AAPS and pump.
- When a BOLUS/TBR CANCELLED alert starts on the pump during bolusing or setting a TBR, this is caused by a disconnect between pump and phone, which happens from time to time. AAPS will try to reconnect and confirm the alert and then retry the last action (boluses are NOT retried for safety reasons). Therefore, such an alarm can be ignored as AAPS will confirm it automatically, usually within 30s (cancelling it is not problem, but will lead to the currently active action to have to wait till the pump's display turns off before it can reconnect to the pump). If the pump's alarm continues, automatic corfirmation failed, in which case the user needs to confirm the alarm manually.
- When a low cartridge or low battery alarm is raised during a bolus, they are confirmed and shown as a notification in AAPS. If they occur while no connection is open to the pump, going to the Combo tab and hitting the Refresh button will take over those alerts by confirming them and show a notification in AAPS.
- When AAPS fails to confirm a TBR CANCELLED alert, or one is raised for a different reason, hitting Refresh in the Combo tab establishes a connection, confirms the alert and shows a notification for it in AAPS. This can safely be done, since those alerts are benign - an appropriate TBR will be set again during the next loop iteration.
- For all other alerts raised by the pump: connecting to the pump will show the alert message in the Combo tab, e.g. "State: E4: Occlusion" as well as showing a notification on the main screen. An error will raise an urgent notification. AAPS never confirms serious errors on the pump, but let's the pump vibrate and ring to make sure the user is informed of a critical situation that needs action.
- After pairing, ruffy should not be used directly (AAPS will start in the background as needed), since using ruffy at AAPS at the same time is not supported.
- If AAPS crashes (or is stopped from the debugger) while AAPS and the pump were communicating (using ruffy), it might be necessary to force close ruffy. Restarting AAPS will start ruffy again. Restarting the phone is also an easy way to resolve this if you don't know how to force kill an app.
- Don't press any buttons on the pump while AAPS communicates with the pump (Bluetooth logo is shown on the pump).