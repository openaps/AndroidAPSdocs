# Μελλοντικοί (πιθανοί) οδηγοί αντλιών

Αυτή είναι μια λίστα με ορισμένες Αντλίες που επιπλέουν γύρω από αυτό, και την κατάσταση υποστήριξης γι 'αυτούς σε οποιοδήποτε από τα συστήματα κυκλώματος και στη συνέχεια την κατάσταση στο AAPS. Στο τέλος υπάρχουν κάποιες πληροφορίες, τι απαιτείται για να είναι μια αντλία "ικανή για κύκλωμα".

## Αντλίες των οποίων η στήριξη βρίσκεται σε εξέλιξη

### Medtronic

**Loop status:** Medtronic is part of AAPS, since version 2.4

**Hardware requirement for AAPS:** RileyLink (with 916 MHz antenna).

**Loopable versions:** 512-522, 523 (Fw 2.4A or lower), 554 (EU firmware 2.6A or lower, CA firmware 2.7A or lower). Same for 7xx versions. All other devices are not supported, and probably won't be.

* * *

### Insulet Omnipod (with "old" Eros Pods) ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** Not supported natively by AAPS at the moment. Decoding of the Omnipod protocol is finished- [OpenOmni](http://www.openomni.org/) and [OmniAPS Slack](https://omniaps.slack.com/)

**Other implementations:**

- Omnipy for AndroidAPS (stable in testing, requires Raspberry Pi as well as RileyLink, and specially modified AndroidAPS) 
- OmniCore for AndroidAPS (not release yet, C# code running "natively" on Android, requires only RileyLink and specially modified AndroidAPS - next version of Omnipy project).
- [iOS Loop](https://loopkit.github.io/loopdocs/) (stable, released, requires RileyLink).

**Java implementations:** None till now.

**AAPS implementation status:** Work on a native Java driver for Omnipod on AAPS is progressing on [AAPS-Omnipod/AndroidAPS](https://github.com/AAPS-Omnipod/AndroidAPS) (omnipod_eros branch). It does not require a Raspberry Pi. You can follow progress on [the OmniAPS Slack](https://omniaps.slack.com/) on channel android-driver. A first public test version was released in January 2020, and work is beeing done towards stabilization. Current version 0.3 (March)

**Hardware requirement for AAPS:** RileyLink with Omnipod firmware (2.x) and 433 MHz antenna.

## Αντλίες που είναι για κύκλωμα

### Omnipod DASH ([Αρχική σελίδα](https://www.myomnipod.com/DASH))

**Κατάσταση κυκλώματος:** Αυτήν τη στιγμή δεν υποστηρίζεται από κανένα σύστημα κυκλώματος. Pump is a Loop candidate, but protocol unknown at the moment. Selling of pump officially started in January 2019.

** Απαιτήσεις υλικού για το AAPS: ** Πιθανώς κανένα. Είναι ενεργοποιημένη η λειτουργία BT.

**Comments:** We are looking into development of Omnipod DASH, but problem at the moment is, that Dash is not yet available in Europe (where most of AAPS developers are) and that communciation protocol is unknown. We will try to reverse engineer official Dash APK, to determine how communication works and then implementation based on that findings. You can follow what is happening here: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), but don't expect this to be available anytime soon. This is at the moment only Proof Of Concept (until Milestone 2 is completed).

* * *

### Αντλία Ypsomed ([ Αρχική σελίδα ](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, it seems that communication is very limited (uni directional: Pump->App). Maybe this will change in the next versions. It seems that we will get loopable version in begining of 2021, see this [article](https://www.ypsomed.com/en/media/details/ypsomed-and-dexcom-enter-into-partnership-to-drive-closed-loop-system.html?fbclid=IwAR3gYSMz8dvPARYgbj5djm4Yxa7JdFthfzOrrg94C9Bigj6RGeycxSfGHyg).

** Απαιτήσεις υλικού για το AAPS: ** Πιθανώς κανένα. Είναι ενεργοποιημένη η λειτουργία BT.

* * *

### Kaleido ([ Αρχική σελίδα ](https://www.hellokaleido.com/))

**Κατάσταση κυκλώματος:** Αυτήν τη στιγμή δεν υποστηρίζεται από κανένα σύστημα κυκλώματος. Η αντλία είναι υποψήφια για κύκλωμα, αλλά δεδομένου ότι το πρωτόκολλο είναι άγνωστο τότε, δεν βλέπω να υποστηρίζεται αυτή η αντλία πολύ σύντομα.

** Απαιτήσεις υλικού για το AAPS: ** Πιθανώς κανένα. Είναι ενεργοποιημένη η λειτουργία BT.

* * *

### Medtrum A6 / P6 / C6 ([ Αρχική σελίδα ](http://www.medtrum.com/P6.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controlable via iPhone App. No Android app available at the moment.

** Απαιτήσεις υλικού για το AAPS: ** Πιθανώς κανένα. Φαίνεται ότι είναι ενεργοποιημένο το BT.

* * *

### EOFLOW ([Αρχική σελίδα](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

** Απαιτήσεις υλικού για το AAPS: ** Πιθανώς κανένα. Φαίνεται ότι είναι ενεργοποιημένο το BT.

* * *

### Accu-Chek Solo ([Αρχική σελίδα](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate. Pump will start selling at end of 2018 in selected countries in EU. Its rummored to have Android app on special controler device for control.

** Απαιτήσεις υλικού για το AAPS: ** Πιθανώς κανένα. Φαίνεται ότι είναι ενεργοποιημένο το BT.

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](https://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware requirement for AAPS:** None. Φαίνεται ότι είναι ενεργοποιημένο το BT.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Οι αντλίες που δεν πωλούνται πλέον (εταιρείες που δεν λειτουργούν πλέον)

### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

**Κατάσταση κυκλώματος:** Αυτήν τη στιγμή δεν υποστηρίζεται από κανένα σύστημα κυκλώματος. Η αντλία είναι υποψήφια για κύκλωμα, αλλά δεδομένου ότι το πρωτόκολλο είναι άγνωστο τότε, δεν βλέπω να υποστηρίζεται αυτή η αντλία πολύ σύντομα.

** Απαιτήσεις υλικού για το AAPS: ** Πιθανώς κανένα. Είναι ενεργοποιημένη η λειτουργία BT.

** Σημείωση για το προϊόν: ** Φαίνεται ότι η εταιρεία αποφάσισε να εξέλθει από την επιχείρηση αντλιών. Μπορείτε να δείτε περισσότερα σε αυτό το [ άρθρο ](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Αντλίες που δεν είναι για κύκλωμα

### Tandem:(any) ([Homepage](https://www.tandemdiabetes.com/))

** Κατάσταση κυκλώματος: ** Δεν είναι για κύκλωμα.

Πριν από λίγο καιρό είχαν firmware που ονομάζεται T:AP (αναφέρεται σε αυτό το [ άρθρο ](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&)), το οποίο θα μπορούσε να χρησιμοποιηθεί σε κύκλωμα (δεν είναι πλέον διαθέσιμο, αφού η αντλία αναβαθμίστηκε σε x2) και δεν ήταν για εμπορική χρήση μόνο για ερευνητικά έργα. Μίλησα με έναν από τους διευθυντές της εταιρείας και μου διαβεβαίωσε ότι η αντλία Tandem δεν θα είναι ποτέ ανοιχτή, αλλά έχουν δημιουργήσει το δικό τους σύστημα κλειστού κυκλώματος, το οποίο καλούν Control-IQ (νομίζω ότι είναι ήδη διαθέσιμο στις Η. Π. Α. και θα είναι διαθέσιμο το 2020 στην ΕΕ).

* * *

### Animas Vibe

** Κατάσταση κυκλώματος: ** Δεν είναι για κύκλωμα. Δεν υπάρχει δυνατότητα τηλεχειρισμού. ** Σημείωση: ** Η αντλία δεν πωλείται πια. Η εταιρεία σταμάτησε να δραστηριοποιείται στην παραγωγή αντλιών(J & J).

* * *

### Animas Ping

** Κατάσταση κυκλώματος: ** Δεν είναι για κύκλωμα. Έχει δυνατότητα bolus, αλλά οχι TBR. ** Σημείωση ** Σταμάτησε να πωλείται όταν βγήκε το Vibe.

## Απαιτήσεις αντλιών για να είναι συμβατές με κύκλωμα

**Προαπαιτούμενο**

- Η αντλία πρέπει να υποστηρίζει κάποιο είδος τηλεχειρισμού. (BlueTooth, ραδιοφωνική συχνότητα κλπ)
- Το πρωτόκολλο παραβιάζεται / τεκμηριώνεται / κλπ.

**Ελάχιστες απαιτήσεις**

- Ορισμός συχνότητας προσωρινού βασικού ρυθμού
- Δες την κατάσταση
- Ακύρωση συχνότητας προσωρινού βασικού ρυθμού

**Για oref1(SMB) ή Bolusing**

- Όρισε bolus

**Καλό να έχουμε**

- Ακύρωση του Bolus
- Αποκτήστε βασικό προφίλ (σχεδόν απαραίτητο)
- Ορίστε βασικό προφίλ (ωραίο να έχετε)
- Διαβάστε το Ιστορικό 

**Άλλα (δεν απαιτείται αλλά καλό να έχουμε)**

- Ορίστε εκτεταμένο bolus
- Ακύρωση εκτεταμένου Bolus
- Διαβάστε το Ιστορικό
- Διαβάστε TDD

* * *

### Other pumps support

Εάν έχετε οποιεσδήποτε άλλες αντλίες και θέλετε να δείτε την κατάσταση, παρακαλώ με ελάτε σε επαφή με τον (@andyrozman στο gitter). Στη μελλοντική έκδοση θα προστεθούν πολλές διαμορφώσεις αντλίας για να είναι ανοιχτή σε κύκλωμα (θα μπορείτε να επιλέξετε εικονικό τύπο αντλίας στη διαμόρφωση και οι ρυθμίσεις σας θα φορτωθούν - [ Request Feature # 863 ](https://github.com/MilosKozak/AndroidAPS/issues/863)).