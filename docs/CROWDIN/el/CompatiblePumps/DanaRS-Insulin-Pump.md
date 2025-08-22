* * *

orphan: true

* * *

# DanaRS and Dana-i Pump

*Αυτές οι οδηγίες αφορούν στη διαμόρφωση της εφαρμογής και της αντλίας σας εάν έχετε μια αντλία DanaRS από το 2017 και μετά. Visit [DanaR Insulin Pump](./DanaR-Insulin-Pump.md) if you have the original DanaR instead.*

**Το νέο υλικολογισμικό της Dana RS v3 μπορεί να χρησιμοποιηθεί από την έκδοση AAPS 2.7 και μετά.**

**Το νέο υλικολογισμικό της Dana RS v3 μπορεί να χρησιμοποιηθεί από την έκδοση AAPS 3.0 και μετά.**

* Στην αντλία DanaRS χρησιμοποιείται η εφαρμογή "βασικός ρυθμός Α". Τα υπάρχοντα δεδομένα αντικαθίστανται.

(DanaRS-Insulin-Pump-pairing-pump)=

## Σύζευξη αντλίας

* Στην αρχική οθόνη του AAPS κάντε κλικ στο μενού χάμπουργκερ στην επάνω αριστερή γωνία και μεταβείτε στην διαμόρφωση παραμέτρων (Config Builder).
* Στην ενότητα της αντλίας επιλέξτε 'Dana-i/RS'.
* Κάντε κλικ στον γρανάζι για να μεταβείτε απευθείας στις ρυθμίσεις της αντλίας ή να επιστρέψετε στην αρχική οθόνη.
    
    ![Επιλογές διαμόρφωσης του AAPS για την αντλία Dana-i/RS](../images/DanaRS_i_ConfigB.png)

* Μεταβείτε στην καρτέλα 'DANA-i/RS'.

* Επιλέξτε το μενού προτιμήσεων, πατώντας τις 3 τελείες πάνω δεξιά. 
* Επιλέξτε 'Dana-i/RS Προτιμήσεις'.
* Κάντε κλικ στο "Επιλεγμένη αντλία".
* Στο παράθυρο σύζευξης κάντε κλικ στην καταχώρηση για την αντλία σας.
    
    ![Το AAPS κάνει σύζευξη με την αντλία Dana-i/RS](../images/DanaRS_i_Pairing.png)

* Πρέπει να επιβεβαιώσετε την σύζευξη στην αντλία! </b> Αυτός είναι ο τρόπος με τον οποίο γίνονται και άλλες συνδέσεις bluetooth (δηλαδή smartphone και ηχείο αυτοκινήτου).
    
    ![Επιβεβαίωση σύζευξης Dana RS](../images/DanaRS_Pairing.png)

* Follow the pairing process based on the type and firmware of your pump:
    
    * For DanaRS v1 select pump password in preferences and set your password.
    * For DanaRS v3 you have to type 2 sequences of numbers and letters displayed on pump to AAPS pairing dialog.
    * For Dana-i standard Android pairing dialog appear and you have to enter 6-digit number displayed on pump.

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide).
* Set bolus step on pump to 0.05 U/h using Doctors menu (see pump user guide).
* Ενεργοποιήστε το εκτεταμένο bolus στην αντλία

(DanaRS-Insulin-Pump-default-password)=

### Default password

* For DanaRS with firmware v1 and v2 the default password is 1234.
* For DanaRS with firmware v3 or Dana-i the default password is derived from the manufacturing date and calculates as MMDD where MM is the month and DD is the day, the pump was produced (i.e. '0124' representing month 01 and day 24).
    
    * From MAIN MENU select REVIEW then open SHIPPING INFORMATION from the sub menu
    * Ο αριθμός 3 είναι η ημερομηνία κατασκευής. 
    * For v3/i this password is used only for locking menu on pump. It's not used for communication and it's not necessary to enter it in AAPS.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Αλλαγή κωδικού πρόσβασης στην αντλία

* Πατήστε το κουμπί OK στην αντλία
* Στο κυρίως μενού επιλέξτε "ΕΠΙΛΟΓΗ" (πηγαίνετε δεξιά πατώντας το κουμπί βέλους αρκετές φορές)
    
    ![Κεντρικό Μενού αντλίας DanaRS](../images/DanaRSPW_01_MainMenu.png)

* Στο μενού επιλογών επιλέξτε "ΕΠΙΛΟΓΗ ΧΡΗΣΤΗ"
    
    ![DanaRS Option Menu](../images/DanaRSPW_02_OptionMenu.png)

* Χρησιμοποιήστε το κουμπί βέλους για να μετακινηθείτε προς τα κάτω στο "11. κωδικός πρόσβασης
    
    ![DanaRS 11. Κωδικόs πρόσβασης](../images/DanaRSPW_03_11PW.png)

* Πατήστε OK για να εισάγετε τον παλιό κωδικό πρόσβασης.

* Enter **old password** (Default password see [above](#DanaRS-Insulin-Pump-default-password)) and press OK
    
    ![Εισαγωγή παλιού κωδικού πρόσβασης για την αντλία DanaRS](../images/DanaRSPW_04_11PWenter.png)

* Εάν εισάγετε λάθος κωδικό πρόσβασης εδώ δεν θα υπάρχει κάποιο μήνυμα που να υποδεικνύει αποτυχία!

* Set **new password** (Change numbers with + & - buttons / Move right with arrow button).
    
    ![DanaRS Νέος κωδικός πρόσβασης](../images/DanaRSPW_05_PWnew.png)

* Επιβεβαιώστε με το κουμπί OK.

* Πατήστε OK για αποθήκευση των ρυθμίσεων.
    
    ![DanaRS Αποθήκευση νέου κωδικού πρόσβασης](../images/DanaRSPW_06_PWnewSave.png)

* Πηγαίνετε κάτω στο "14. EXIT" και πατήστε OK για έξοδο.
    
    ![Έξοδος Του DanaRS](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Dana RS specific errors

### Βλάβη κατά την χορήγηση ινσουλίνης

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Συναγερμός παράδοσης ινσουλίνης](../images/DanaRS_Error_bolus.png)

* In most cases this is just a communication issue and the correct amount of insulin is delivered.
* Check in pump history (either on the pump or through Dana tab > pump history > boluses) if correct bolus is given.
* Delete error entry in [treatments tab](#screens-bolus-carbs) if you wish.
* Real amount is read and recorded on next connect. To force this press BT icon on dana tab or just wait for next connect.

## Ειδική σημείωση για την αλλαγή τηλεφώνου

Κατά τη μετάβαση σε νέο τηλέφωνο απαιτούνται τα ακόλουθα βήματα:

* [Export settings](../Maintenance/ExportImportSettings.md) on your old phone
* Transfer settings from old to new phone

### DanaRS v1

* **Manually pair** Dana RS with the new phone
* As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Therefore new phone and pump must be paired manually.
* Εγκατάσταση του AAPS στο νέο τηλέφωνο.
* [Import settings](../Maintenance/ExportImportSettings.md) on your new phone

### DanaRS v3, Dana-i

* Start pairing procedure as described [above](#DanaRS-Insulin-Pump-pairing-pump).
* Sometimes it may be necessary to clear pairing information in AAPS by long-click BT icon on Dana-i/RS tab.

## Ταξιδεύοντας σε διαφορετικές ζώνες ώρας με την Dana Rs

For information on traveling across time zones see section [Timezone traveling with pumps](#timezone-traveling-danarv2-danars).