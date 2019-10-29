# Nightscout

## Ζητήματα ασφάλειας

Εκτός από την αναφορά Nightscout μπορεί επίσης να χρησιμοποιηθεί για τον έλεγχο AAPS. Π.χ. μπορείτε να ορίσετε στοχευμένους στόχους ή να προσθέσετε μελλοντικούς υδατάνθρακες. Η πληροφορία αυτή θα πρέπει να διαβαστεί από AAPS και θα ενεργήσει αναλόγως. Ως εκ τούτου αξίζει να σκεφτείτε την εξασφάλιση της ιστοσελίδας σας Nightscout.

### Ρυθμίσεις Nightscout

Μπορείτε να αρνηθείτε την πρόσβαση του κοινού στην τοποθεσία Nightscout χρησιμοποιώντας [ ρόλους ελέγχου ταυτότητας ](http://www.nightscout.info/wiki/welcome/website-features/0-9-features/authentication-roles).

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

Υποθέτουμε ότι έχετε ήδη έναν ιστότοπο Nightscout, αν δεν έχετε επισκεφθείτε τη σελίδα [ Nightscout ](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku) για πλήρεις οδηγίες σχετικά με τη ρύθμιση, οι παρακάτω οδηγίες είναι οι ρυθμίσεις που θα χρειαστεί να προσθέσετε και στον ισότοπο σας Nightscout. Ο ιστότοπός σας Nightscout πρέπει να έχει τουλάχιστον την έκδοση 10 (εμφανίζεται ως 0,10...), οπότε ελέγξτε ότι εκτελείτε την τελευταία έκδοση </ 0> διαφορετικά θα λάβετε ένα μήνυμα σφάλματος στην εφαρμογή AAPS σας. Μερικοί άνθρωποι θεωρούν ότι το κύκλωμα χρησιμοποιεί περισσότερο από την ελεύθερη ποσόστωση που επιτρέπεται, έτσι το heroku είναι η προτιμώμενη επιλογή.

* Go to https://herokuapp.com/

* Click your App Service name.

* Click Application settings (azure) or Settings > "Reveal Config Variables (heroku)

* Add or edit the variables as follows:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Various alarms can be set for [monitoring the pump](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), battery % in particular is encouraged: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 
  * Optional: The following 'timers' can be set for the coloring in the AAPS careportal: 
    * `BAGE_WARN` = `480` (Warning after x hours since last Battery Changed Event in Careportal)
  * `BAGE_URGENT` = `504` (Urgent warning after x hours since last Battery Changed Event in Careportal)
  * `CAGE_WARN` = `40` (Warning after x hours since last Cannula Changed Event in Careportal)
  * `CAGE_URGENT` = `48` (Urgent warning after x hours since last Cannula Changed Event in Careportal)
  * `IAGE_WARN` = `144` (Warning after x hours since last Insulin Cartridge Changed Event in Careportal)
  * `IAGE_URGENT` = `192` (Warning after x hours since last Insulin Cartridge Changed Event in Careportal)
  * `SAGE_WARN` = `160` (Warning after x hours since the last CGM Sensor Insert Event in Careportal)
  * `SAGE_URGENT` = `168` (Urgent Warning after x hours since the last CGM Sensor Insert Event in Careportal)

![Azure](../../images/nightscout1.png)

* Click "Save" at the top of the panel.

## Semi-automated Nightscout setup

This service is offered by fellow looper Martin Schiftan free of charge at the moment. If you like the service you can consider sending him a small donation (link in the navigation on the left side).

**Benefits**

* You can install Nightscout with a few clicks and use it directly. 
* Reduction of manual work as Martin tries to automate the administration.
* All settings can be made via a user-friendly web interface. 
* The service includes an automated basal rate check using Autotune. 
* The server is located in Germany.

<http://ns.10be.de/en/index.html>