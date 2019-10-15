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

Υποθέτουμε ότι έχετε ήδη έναν ιστότοπο Nightscout, αν δεν έχετε επισκεφθείτε τη σελίδα [ Nightscout ](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku) για πλήρεις οδηγίες σχετικά με τη ρύθμιση, οι παρακάτω οδηγίες είναι οι ρυθμίσεις που θα χρειαστεί να προσθέσετε και στον ισότοπο σας Nightscout. Ο ιστότοπός σας Nightscout πρέπει να έχει τουλάχιστον την έκδοση 10 (εμφανίζεται ως 0,10...), οπότε ελέγξτε ότι εκτελείτε[ την τελευταία έκδοση ](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie) διαφορετικά θα λάβετε ένα μήνυμα σφάλματος στην εφαρμογή AAPS σας. Μερικοί άνθρωποι θεωρούν ότι το κύκλωμα χρησιμοποιεί περισσότερο από την ελεύθερη ποσόστωση που επιτρέπεται, έτσι το heroku είναι η προτιμώμενη επιλογή.

* Μεταβείτε στη διεύθυνση https://herokuapp.com/

* Κάντε κλικ στο όνομα της υπηρεσίας της εφαρμογής σας.

* Κάντε κλικ στην επιλογή Ρυθμίσεις εφαρμογής (γαλάζιο) ή Ρυθμίσεις> "Ρυθμίστε τις μεταβλητές ρύθμισης παραμέτρων (heroku)

* Προσθέστε ή επεξεργαστείτε τις μεταβλητές ως εξής:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Μπορούν να ρυθμιστούν διάφοροι συναγερμοί για την παρακολούθηση της αντλίας<0>, ειδικότερα για το πόσο άδεια είναι η μπαταρία: 
    
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` </li> 
    
    * Προαιρετικά: Μπορούν να οριστούν οι εξής «χρονοδιακόπτες» για το χρωματισμό της εξυπηρέτησης του AAPS: 
      * `BAGE_WARN` = `480` (Warning after x hours since last Battery Changed Event in Careportal)
    * `BAGE_URGENT` = `504` (Urgent warning after x hours since last Battery Changed Event in Careportal)
    * `CAGE_WARN` = `40` (Warning after x hours since last Cannula Changed Event in Careportal)
    * `CAGE_URGENT` = `48` (Urgent warning after x hours since last Cannula Changed Event in Careportal)
    * `IAGE_WARN` = `144` (Warning after x hours since last Insulin Cartridge Changed Event in Careportal)
    * `IAGE_URGENT` = `192` (Warning after x hours since last Insulin Cartridge Changed Event in Careportal)
    * `SAGE_WARN` = `160` (Warning after x hours since the last CGM Sensor Insert Event in Careportal)
    * `SAGE_URGENT` = `168` (Urgent Warning after x hours since the last CGM Sensor Insert Event in Careportal)</ul></li> </ul> 
    
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