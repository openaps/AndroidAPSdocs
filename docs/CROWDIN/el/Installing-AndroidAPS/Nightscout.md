# Nightscout

## Ζητήματα ασφάλειας

Εκτός από την αναφορά Nightscout μπορεί επίσης να χρησιμοποιηθεί για τον έλεγχο AAPS. Π.χ. μπορείτε να ορίσετε στοχευμένους στόχους ή να προσθέσετε μελλοντικούς υδατάνθρακες. Η πληροφορία αυτή θα πρέπει να διαβαστεί από AAPS και θα ενεργήσει αναλόγως. Ως εκ τούτου αξίζει να σκεφτείτε την εξασφάλιση της ιστοσελίδας σας Nightscout.

### Ρυθμίσεις Nightscout

You can deny public access to your Nightscout site by using [authentication roles](https://nightscout.github.io/nightscout/security).

### Ρυθμίσεις AndroidAPS

Υπάρχει μια λειτουργία φόρτωσης NS μόνο (χωρίς συγχρονισμό) στις ρυθμίσεις AAPS. Με τον τρόπο αυτό, το AAPS δεν θα πάρει τις αλλαγές που έγιναν στο Nightscout, όπως οι στόχοι ρυθμού ή μελλοντικοί υδατάνθρακες. Εάν χρησιμοποιείτε το προφίλ [ NS ](../Configuration/Config-Builder#ns-profile), τα προφίλ θα συγχρονιστούν μεταξύ AAPS και Nightscout παρά τη ρύθμιση "ανέβασμα μόνο".

* Πατήστε 3-dot μενού στην επάνω δεξιά γωνία της αρχική οθόνης AAPS.
* Επιλέξτε Προτιμήσεις".
* Μετακινηθείτε προς τα κάτω και αγγίξτε "ρυθμίσεις για Προχωρημένους".
* Ενεργοποιήστε το "NS ανεβάστε μόνο

![Nightscout ανεβάστε μόνο](../images/NSsafety.png)

### Περαιτέρω ρυθμίσεις ασφαλείας

Κρατήστε το τηλέφωνό σας ενημερωμένο, όπως περιγράφεται στην [ασφάλεια](../Getting-Started/Safety-first.rst).

## Εγχειρίδιο εγκατάστασης Nightscout

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site. Your Nightscout site needs to be at least version 10 (displayed as 0.10...), so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app. Some people find looping uses more than the azure free quota allowed, so heroku is the preferred choice.

* Μεταβείτε στη διεύθυνση https://herokuapp.com/

* Κάντε κλικ στο όνομα της υπηρεσίας της εφαρμογής σας.

* Κάντε κλικ στην επιλογή Ρυθμίσεις εφαρμογής (γαλάζιο) ή Ρυθμίσεις> "Ρυθμίστε τις μεταβλητές ρύθμισης παραμέτρων (heroku)

* Προσθέστε ή επεξεργαστείτε τις μεταβλητές ως εξής:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Μπορούν να ρυθμιστούν διάφοροι συναγερμοί για την [παρακολούθηση της αντλίας](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), ειδικότερα για το πόσο άδεια είναι η μπαταρία: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../images/nightscout1.png)

* Κάντε κλικ στην επιλογή "Save" στην κορυφή του πίνακα.

## Ημι-αυτοματοποιημένη ρύθμιση Nightscout

Αυτή η υπηρεσία προσφέρεται δωρεάν από τον συνάδελφο Martin Schiftan δωρεάν αυτή τη στιγμή. Αν σας αρέσει η υπηρεσία, μπορείτε να στείλετε μια μικρή δωρεά (σύνδεσμος στην πλοήγηση στην αριστερή πλευρά).

**Οφέλη**

* Μπορείτε να εγκαταστήσετε το Nightscout με μερικά κλικ και να το χρησιμοποιήσετε απευθείας. 
* Μείωση της χειρωνακτικής εργασίας καθώς ο Martin προσπαθεί να αυτοματοποιήσει τη διαδικασία.
* Όλες οι ρυθμίσεις μπορούν να γίνουν μέσω φιλικού προς το χρήστη ιστοσελίδων. 
* Η υπηρεσία περιλαμβάνει έναν αυτοματοποιημένο έλεγχο βασικού ρυθμού χρησιμοποιώντας το Autotune. 
* Ο διακομιστής βρίσκεται στη Γερμανία.

<https://ns.10be.de/en/index.html>