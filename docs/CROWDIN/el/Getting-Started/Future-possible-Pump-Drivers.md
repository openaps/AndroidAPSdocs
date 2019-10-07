# Μελλοντικοί (πιθανοί) οδηγοί αντλιών

Αυτή είναι μια λίστα με ορισμένες Αντλίες που επιπλέουν γύρω από αυτό, και την κατάσταση υποστήριξης γι 'αυτούς σε οποιοδήποτε από τα συστήματα κυκλώματος και στη συνέχεια την κατάσταση στο AAPS. Στο τέλος υπάρχουν κάποιες πληροφορίες, τι απαιτείται για να είναι μια αντλία "ικανή για κύκλωμα".

## Αντλίες των οποίων η στήριξη βρίσκεται σε εξέλιξη

### Medtronic

** Κατάσταση κυκλώματος: ** Ορισμένες από τις παλαιότερες εκδόσεις των αντλιών είναι κατάλληλες για κύκλωμα, αλλά όχι τα νεότερα μοντέλα (βλ. Παρακάτω)

** Άλλες εφαρμογές: ** OpenAPS, Loop

** Εφαρμογές Java: ** Η μερική υλοποίηση είναι διαθέσιμη [ Rountrip2 ](https://github.com/TC2013/Roundtrip2) και [ RileyLinkAAPS ](https://github.com/andyrozman/RileyLinkAAPS)

** Κατάσταση εφαρμογής AAPS: ** Εργασίες σε εξέλιξη. Δείτε [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), τμήμα medtronic_andy. Το μεγαλύτερο μέρος της εργασίας έγινε στο [ RileyLinkAAPS ](https://github.com/andyrozman/RileyLinkAAPS) για να πάρει το πλαίσιο και τις εντολές εργασίας. Υπάρχει έργο (Medtronic) και εισιτήρια ανοικτά για μελλοντική ανάπτυξη σε αυτό το αποθετήριο, η ανάπτυξη γίνεται στο υποκατάστημα dev_medtronic (που είναι το προεπιλεγμένο υποκατάστημα εκεί). Υπάρχει επίσης η αίθουσα gitter: RileyLinkAAPS / Lobby. AAPS. 0.10 δοκιμή "απελευθέρωσης" είναι έξω, με περίπου το 95% όλων των λειτουργιών, αυτή τη στιγμή αυτό που λείπει είναι συγχρονισμός των TBRs και το γεγονός ''σταμάτημα παράδοσης'' στην αντλία. Το έργο πιθανότατα θα συγχωνευθεί στο κύριο αποθετήριο έως τα τέλη Ιουλίου του 2019. Για λεπτομέρειες και χρονισμό βλ. [ Πίνακας έργου ](https://github.com/andyrozman/RileyLinkAAPS/projects/1).

** Απαιτήσεις υλικού για το AAPS: ** RileyLink (με κεραία 916 MHz).

** Εκδόσεις για κύκλωμα: ** 512-522, 523 (Fw 2.4A ή χαμηλότερη), 554 (firmware της ΕΕ 2.6A ή χαμηλότερη, firmware CA 2.7A ή χαμηλότερη). Ίδια για εκδόσεις 7xx. Όλες οι άλλες συσκευές δεν υποστηρίζονται, και πιθανότατα ούτε στο μέλλον.

* * *

### Insulet Omnipod (με παλιές Eros pods) ([ Αρχική σελίδα ](https://www.myomnipod.com/en-gb/about/how-to-use))

** Κατάσταση κυκλώματος: ** Αυτή τη στιγμή δεν υποστηρίζεται από το AAPS. Η αποκωδικοποίηση του πρωτοκόλλου Omnipod έχει ολοκληρωθεί - [ OpenOmni ](http://www.openomni.org/) και [ OmniAPS Slack ](https://omniaps.slack.com/)

**Άλλες εφαρμογές:**

- Omnipy για το AndroidAPS (σταθερό στη δοκιμή, απαιτεί το Raspberry Pi καθώς και το RileyLink και το ειδικά τροποποιημένο AndroidAPS) [ Omnipy ](https://github.com/winemug/omnipy)
- Το OmniCore για το AndroidAPS (δεν κυκλοφορεί ακόμα, ο κώδικας C # που "τρέχει" στο Android, απαιτεί μόνο RileyLink και ειδικά τροποποιημένο AndroidAPS - επόμενη έκδοση του προγράμματος Omnipy). [OmniCore](https://github.com/winemug/OmniCore)
- Κύκλωμα(σταθερό, απελευθερωμένο, απαιτεί RileyLink). [Κύκλωμα](https://loopkit.github.io/loopdocs/)

**Υλοποιήσεις της εφαρμογής Java: ** Καμία μέχρι τώρα.

** Κατάσταση εφαρμογής AAPS: ** Έχει ξεκινήσει η εργασία για [ RileyLinkAAPS ](https://github.com/bartsopers/RileyLinkAAPS/) για το Omnipod (υποκατάστημα dev_omnipod) που δεν θα απαιτήσει Raspberry Pi, αλλά αυτό δεν έχει ολοκληρωθεί. Μπορείτε να παρακολουθήσετε την πρόοδο στο https://omniaps.slack.com/ κανάλι android-driver.

** Απαιτήσεις υλικού για το AAPS: ** RileyLink με firmware Omnipod (2.x) και 433 MHz κεραία.

## Αντλίες που είναι για κύκλωμα

### Omnipod DASH ([Αρχική σελίδα](https://www.myomnipod.com/DASH))

**Κατάσταση κυκλώματος:** Αυτήν τη στιγμή δεν υποστηρίζεται από κανένα σύστημα κυκλώματος. Η αντλία είναι υποψήφια για κύκλωμα, αλλά το πρωτόκολλο είναι άγνωστο προς το παρόν. Η πώληση της αντλίας ξεκίνησε επίσημα τον Ιανουάριο του 2019.

** Απαιτήσεις υλικού για το AAPS: ** Πιθανώς κανένα. Είναι ενεργοποιημένη η λειτουργία BT.

** Σχόλια: ** Ψάχνουμε για την ανάπτυξη του Omnipod DASH, αλλά το πρόβλημα αυτή τη στιγμή είναι ότι το Dash δεν είναι ακόμα διαθέσιμο στην Ευρώπη (όπου είναι οι περισσότεροι προγραμματιστές του AAPS) και ότι το πρωτόκολλο επικοινωνίας είναι άγνωστο. Θα προσπαθήσουμε να αναστρέψουμε το επίσημο Dash APK, να καθορίσουμε τον τρόπο λειτουργίας της επικοινωνίας και στη συνέχεια την εφαρμογή με βάση τα ευρήματα αυτά. Μπορείτε να ακολουθήσετε ό, τι συμβαίνει εδώ: [ DashAAPS ](https://github.com/andyrozman/DashAAPS/projects/1), αλλά μην περιμένετε ότι αυτό θα είναι διαθέσιμο σύντομα. Αυτό είναι προς το παρόν μόνο απόδειξη της έννοιας (έως ότου ολοκληρωθεί ο στόχος 2).

* * *

### Αντλία Ypsomed ([ Αρχική σελίδα ](https://www.ypsomed.com/en/diabetes-care-mylife.html))

** Κατάσταση κυκλώματος: ** Έκδοση 1 - 1.5 (2Q / 2018) δεν είναι υποψήφια για κύκλωμα. Ενώ έχουν επικοινωνία BT, φαίνεται ότι η επικοινωνία είναι πολύ περιορισμένη (μονόδρομη: Αντλία-> Εφαρμογή). Ίσως αυτό να αλλάξει στις επόμενες εκδόσεις.

** Απαιτήσεις υλικού για το AAPS: ** Πιθανώς κανένα. Είναι ενεργοποιημένη η λειτουργία BT.

* * *

### Kaleido ([ Αρχική σελίδα ](https://www.hellokaleido.com/))

**Κατάσταση κυκλώματος:** Αυτήν τη στιγμή δεν υποστηρίζεται από κανένα σύστημα κυκλώματος. Η αντλία είναι υποψήφια για κύκλωμα, αλλά δεδομένου ότι το πρωτόκολλο είναι άγνωστο τότε, δεν βλέπω να υποστηρίζεται αυτή η αντλία πολύ σύντομα.

** Απαιτήσεις υλικού για το AAPS: ** Πιθανώς κανένα. Είναι ενεργοποιημένη η λειτουργία BT.

* * *

### Medtrum A6 / P6 / C6 ([ Αρχική σελίδα ](http://www.medtrum.com/P6.html))

** Κατάσταση κυκλώματος: ** είναι υποψήφια για κύκλωμα. Η εταιρία έχει το δικό της σύστημα περιορισμένου ημι-κυκλώματος (A6). Ελεγχόμενη μέσω εφαρμογής iPhone. Καμία εφαρμογή Android δεν είναι διαθέσιμη προς το παρόν.

** Απαιτήσεις υλικού για το AAPS: ** Πιθανώς κανένα. Φαίνεται ότι είναι ενεργοποιημένο το BT.

* * *

### EOFLOW ([Αρχική σελίδα](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Hardware requirement for AAPS:** Probably none. Φαίνεται ότι είναι ενεργοποιημένο το BT.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate. Pump will start selling at end of 2018 in selected countries in EU. Its rummored to have Android app for control.

**Hardware requirement for AAPS:** Probably none. Φαίνεται ότι είναι ενεργοποιημένο το BT.

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

* * *

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

**Κατάσταση κυκλώματος:** Αυτήν τη στιγμή δεν υποστηρίζεται από κανένα σύστημα κυκλώματος. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardware requirement for AAPS:** Probably none. Είναι ενεργοποιημένη η λειτουργία BT.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pumps that aren't Loopable

### Tandem:(any) ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not loopable.

While ago they had firmware called T:AP (mentioned in this [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), which could be used in loop (its no longer available, since pump was upgraded to x2), but that was not intended for commercial use, just for experimental use only (research projects). I talked with one of directors of company and he assured my that Tandem pump will never be open, but they have created their own closed loop system, which they are calling Control-IQ (I think it is already available in USA, and should be available in 2020 in Eu).

* * *

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped beeing sold when Vibe came out.

## Requirements for pumps being loopable

**Prerequisite**

- Pump has to support some kind of remote control. (BT, Radio frequency, etc)
- Protocol is hacked/documented/etc.

**Minimal requirement**

- Set Temporary Basal Rate
- Get Status
- Cancel Temporary Basal Rate

**For oref1(SMB) or Bolusing:**

- Set Bolus

**Good to have**

- Cancel Bolus
- Get Basal Profile (almost requirement)
- Set Basal Profile (nice to have)
- Read History 

**Other (not required but good to have)**

- Set Extended Bolus
- Cancel Extended Bolus
- Read History
- Read TDD

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).