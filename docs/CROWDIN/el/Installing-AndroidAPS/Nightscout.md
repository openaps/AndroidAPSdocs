# Nightscout

(Nightscout-security-considerations)=

## Ζητήματα ασφάλειας

Besides reporting Nightscout can also be used to control AAPS. Π.χ. μπορείτε να ορίσετε στοχευμένους στόχους ή να προσθέσετε μελλοντικούς υδατάνθρακες. This information will be picked up by AAPS and it will act correspondingly. Ως εκ τούτου αξίζει να σκεφτείτε την εξασφάλιση της ιστοσελίδας σας Nightscout.

### Ρυθμίσεις Nightscout

Μπορείτε να αρνηθείτε την πρόσβαση του κοινού στην τοποθεσία Nightscout χρησιμοποιώντας [ ρόλους ελέγχου ταυτότητας ](https://nightscout.github.io/nightscout/security).

### AAPS settings

There is an NS upload only (no sync) function in AAPS settings. By doing so AAPS will not pick up changes done in Nightscout such as temp targets or future carbs.

* Πατήστε 3-dot μενού στην επάνω δεξιά γωνία της αρχική οθόνης AAPS.
* Επιλέξτε Προτιμήσεις".
* Μετακινηθείτε προς τα κάτω και αγγίξτε "ρυθμίσεις για Προχωρημένους".
* Ενεργοποιήστε το "NS ανεβάστε μόνο

![Nightscout upload only](../images/NSsafety.png)

### Περαιτέρω ρυθμίσεις ασφαλείας

Κρατήστε το τηλέφωνό σας ενημερωμένο, όπως περιγράφεται στην [ασφάλεια](../Getting-Started/Safety-first.md).

(Nightscout-manual-nightscout-setup)=

## Εγχειρίδιο εγκατάστασης Nightscout

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site. Your Nightscout site needs to be at least version 10 (displayed as 0.10...), so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app. Some people find looping uses more than the azure free quota allowed, so heroku is the preferred choice.

* Μεταβείτε στη διεύθυνση https://herokuapp.com/

* Κάντε κλικ στο όνομα της υπηρεσίας της εφαρμογής σας.

* Κάντε κλικ στην επιλογή Ρυθμίσεις εφαρμογής (γαλάζιο) ή Ρυθμίσεις> "Ρυθμίστε τις μεταβλητές ρύθμισης παραμέτρων (heroku)

* Προσθέστε ή επεξεργαστείτε τις μεταβλητές ως εξής:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Μπορούν να ρυθμιστούν διάφοροι συναγερμοί για την [παρακολούθηση της αντλίας](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), ειδικότερα για το πόσο άδεια είναι η μπαταρία: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../images/nightscout1.png)

* Κάντε κλικ στην επιλογή "Save" στην κορυφή του πίνακα.

## Ημι-αυτοματοποιημένη ρύθμιση Nightscout

Fellow looper Martin Schiftan offered a semi-automated Nightscout setup for many years free of charge. As number of users increased so did cost and therefore he had to start asking a small fee starting October 2021 - starting at €4,17 per month.

**Οφέλη**

* Μπορείτε να εγκαταστήσετε το Nightscout με μερικά κλικ και να το χρησιμοποιήσετε απευθείας. 
* Μείωση της χειρωνακτικής εργασίας καθώς ο Martin προσπαθεί να αυτοματοποιήσει τη διαδικασία.
* Όλες οι ρυθμίσεις μπορούν να γίνουν μέσω φιλικού προς το χρήστη ιστοσελίδων. 
* Η υπηρεσία περιλαμβάνει έναν αυτοματοποιημένο έλεγχο βασικού ρυθμού χρησιμοποιώντας το Autotune. 
* The servers are located in Germany and Finland.

<https://ns.10be.de/en/index.html>

An alternative would be <https://t1pal.com/> - starting at $11,99 per month.