# Αντλία DanaRS

*Αυτές οι οδηγίες αφορούν τη διαμόρφωση της εφαρμογής και της αντλίας σας εάν έχετε μια DanaRS από το 2017 και μετά. Επισκεφθείτε την  DanaR Αντλία Ινσουλίνης </ 0> αν έχετε την DanaR αντλία.</em></p> 

**New Dana RS firmware v3 can be used from AndroidAPS version 2.7 onwards.**

* Στην αντλία DanaRS χρησιμοποιείται η εφαρμογή "βασικός ρυθμός Α". Τα υπάρχοντα δεδομένα αντικαθίστανται.

* Στο AndroidAPS μεταβείτε στη Διαμόρφωση και επιλέξτε 'DanaRS'

* Επιλέξτε Μενού αγγίζοντας τις 3 τελείες στην επάνω δεξιά γωνία. Επιλέξτε Προτιμήσεις.

* Επιλέξτε τη νέα αντλία DanaRS και κάντε κλικ στον σειριακό αριθμό της DanaRS.
  
  ![AAPS pair Dana RS](../images/AAPS_DanaRSPairing.png)

* Select Pump password and input your password.
  
  * For DanaRS with firmware v1 and v2 the default password is 1234.
  * For DanaRS with firmware v3 the default password is a combination of production month and production date (i.e. month 01 and day 24). ==> On your pump open main menu -> review -> information. Όχι. 3 is production date.

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
  
  ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Restart your phone.

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)

* Ενεργοποιήστε το εκτεταμένο bolus στην αντλία

## Συγκεκριμένες βλάβες της Dana Rs

### Βλάβη κατά την χορήγηση ινσουλίνης

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* Στις περισσότερες περιπτώσεις πρόκειται για θέμα επικοινωνίας και παρέχεται η σωστή ποσότητα ινσουλίνης.
* Ελέγξτε το ιστορικό της αντλίας (είτε στην αντλία είτε μέσω της καρτέλας Dana> ιστορικό αντλίας> boluses) αν έχει δοθεί σωστό bolus.
* Delete error entry in [treatments tab](..Getting-Started/Screenshots#carb-correction) if you wish.
* Το πραγματικό ποσό διαβάζεται και καταγράφεται στην επόμενη σύνδεση. Για να ενεργοποιήσετε αυτό, πατήστε το εικονιδίο BT στην καρτέλα dana ή απλά περιμένετε την επόμενη σύνδεση.

## Ειδική σημείωση για την αλλαγή τηλεφώνου

When switching to a new phone the following steps are neccessary:

* ** Εξαγωγή ρυθμίσεων ** στο παλιό σας τηλέφωνο
  
  * Μενού Hamburger (στην πάνω αριστερή γωνία της οθόνης)
  * Συντήρηση
  * Ρυθμίσεις εξαγωγής
    
    ![Ρυθμίσεις εξαγωγής AAPS](../images/AAPS_ExportSettings.png)

* ** Μεταφορά ** από παλιό σε νέο τηλέφωνο

* **Χειροκίνητη σύζευξη** Dana RS με νέο τηλέφωνο 
  * Καθώς η σύνδεση της αντλίας εισάγετε, το AAPS στο νέο τηλέφωνο θα ξέρει ήδη την αντλία και για αυτό δεν χρειάζεται ξανά σκανάρισμα με bluetooth. Συνεπώς, το νέο τηλέφωνο και η αντλία πρέπει να ζευγαρώσουν χειροκίνητα.
* ** Εγκαταστήστε το AndroidAPS ** στο νέο τηλέφωνο.
* **Ρυθμίσεις εισαγωγής** στο νέο τηλέφωνο 
  * Μενού Hamburger (στην πάνω αριστερή γωνία της οθόνης)
  * Συντήρηση
  * Ρυθμίσεις εισαγωγής

## Ταξιδεύοντας σε διαφορετικές ζώνες ώρας με την Dana Rs

Για πληροφορίες σχετικά με τη μετακίνηση σε ζώνες ώρας, ανατρέξτε στην ενότητα [Ζώνη ώρας που ταξιδεύει με αντλίες](../Usage/Timezone-traveling#danarv2-danars).