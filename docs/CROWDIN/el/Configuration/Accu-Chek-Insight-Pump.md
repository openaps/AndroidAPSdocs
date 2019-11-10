# Accu-Chek Insight Αντλία

**Αυτό το λογισμικό είναι μέρος του DIY τεχνητό παγκρέας και δεν είναι προϊόν, αλλά απαιτεί από εσάς να διαβάσετε, να μάθετε και να κατανοήσετε το σύστημα, συμπεριλαμβανομένου του τρόπου χρήσης του. Δεν είναι κάτι που κάνει όλη τη διαχείριση του διαβήτη για σας, αλλά σας επιτρέπει να βελτιώσετε τα επίπεδα σακχάρων σας και την ποιότητα ζωής σας, εάν είστε πρόθυμοι να αφιερώσετε τον απαιτούμενο χρόνο. Μη βιάζεστε με αυτό, αλλά δώστε χρόνο στον εαυτό σας να μάθει. Εσείς μόνο είστε υπεύθυνοι για οτιδήποτε κάνετε με αυτό.**

* * *

## *ΠΡΟΕΙΔΟΠΟΙΗΣΗ: Εάν είχατε χρησιμοποιήσει το SightRemote στο παρελθόν, παρακαλώ αναβαθμίστε στην νεότερη AAPS και απεγκαταστήστε το SightRemote.*

## Απαιτήσεις υλικού και λογισμικού

* A Roche Accu-Chek Insight pump (any firmware, they all work)
    
    Note: AAPS will write data always in **first basal rate profile in the pump**.

* An Android phone (Basically every Android version would work, but AndroidAPS itself requires at least Android 5 (Lollipop).)

* Την εφαρμογή AndroidAPS εγκατεστημένη στο τηλέφωνό σας

## Ρύθμιση

* Η αντλία Insight πρέπει να συνδέεται μόνο σε μία συσκευή τη φορά. Εάν έχετε χρησιμοποιήσει στο παρελθόν το τηλεχειριστήριο Insight (μετρητής), πρέπει να αφαιρέσετε το μετρητή από τη λίστα ζευγαρωμένων συσκευών της αντλίας σας: Μενού> Ρυθμίσεις> Επικοινωνία> Κατάργηση συσκευής
    
    ![Στιγμιότυπο οθόνης από το εργαλείο Remove Meter Insight](../images/Insight_RemoveMeter.png)

* Στο Config Builder της εφαρμογής AndroidAPS επιλέξτε Accu-Chek Insight στην ενότητα αντλιών
    
    ![Στιγμιότυπο οθόνης του Config Builder Insight](../images/Insight_ConfigBuilder.png)

* Αγγίξτε τον οδοντωτό τροχό για να ανοίξετε τις ρυθμίσεις Insight.

* Στις ρυθμίσεις, πατήστε στο κουμπί 'Insight pairing(Insight αντιστοίχηση) ' στο επάνω μέρος της οθόνης. Θα πρέπει να δείτε μια λίστα με όλες τις κοντινές συσκευές Bluetooth (κάτω αριστερά).
* Στην αντλία Insight, μεταβείτε στο Μενού> Ρυθμίσεις> Επικοινωνία> Προσθήκη συσκευής. Η αντλία θα εμφανίσει στην οθόνη (κάτω δεξιά) τον σειριακό αριθμό της αντλίας.
    
    ![Στιγμιότυπο του Insight Pairing 1](../images/Insight_Pairing1.png)

* Πηγαίνοντας πίσω στο τηλέφωνό σας, πατήστε στον σειριακό αριθμό της αντλίας στη λίστα των συσκευών Bluetooth. Στη συνέχεια, πατήστε αντιστοίχηση για επιβεβαίωση.
    
    ![Στιγμιότυπο του Insight Pairing 2](../images/Insight_Pairing2.png)

* Τόσο η αντλία όσο και το τηλέφωνο θα εμφανίσουν έναν κωδικό. Βεβαιωθείτε ότι οι κωδικοί είναι οι ίδιοι και στις δύο συσκευές και επιβεβαιώστε το τόσο στην αντλία όσο και στο τηλέφωνο.
    
    ![Στιγμιότυπο του Insight Pairing 3](../images/Insight_Pairing3.png)

* Επιτυχία! Πείτε ένα μπράβο στον εαυτό σας που τα καταφέρατε.
    
    ![Στιγμιότυπο του Insight Pairing 4](../images/Insight_Pairing4.png)

* Για να ελέγξετε ότι είναι όλα καλά, επιστρέψτε στο Config builder στο AndroidAPS και αγγίξτε το οδοντωτό τροχό από την αντλία Insight για να μπείτε στις ρυθμίσεις Insight και, στη συνέχεια, αγγίξτε το Insight Pairing και θα δείτε μερικές πληροφορίες σχετικά με την αντλία:
    
    ![Στιγμιότυπο πληροφοριών Insight Pairing](../images/Insight_PairingInformation.png)

Σημείωση: Δεν θα υπάρχει μόνιμη σύνδεση μεταξύ της αντλίας και του τηλεφώνου. A connection will only be established if necessary (i.e. setting temporary basal rate, giving bolus, reading pump history...). Διαφορετικά, η μπαταρία του τηλεφώνου και της αντλίας θα εξαντλούνταν πολύ γρήγορα.

## Ρυθμίσεις στο AAPS

You **must not use ‘Always use basal absolute values’** with Insight pump. In AAPS go to Preferences > Nightscout-Client > Advanced Settings and make sure ‘Always use basal absolute values’ is disabled. It would lead to false TBR settings in Insight pump. As a consequence you will not be able to use Autotune but there is no alternative to disable this when using Insight pump.

![Screenshot of Insight Settings](../images/Insight_pairing_V2_5.png)

In the Insight settings in AndroidAPS you can enable the following options:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.
* "Αρχείο Αλλαγές σωλήνα": Αυτό προσθέτει μια σημείωση στη βάση δεδομένων AndroidAPS όταν εκτελείτε το πρόγραμμα "πλήρωση σωλήνα" στην αντλία.
* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump. **Note: A site change also resets Autosens.**
* "Log battery changes": This records a battery change when you put a new battery in the pump.
* "Log operating mode changes": This inserts a note in the AndroidAPS database whenever you start, stop or pause the pump.
* "Log alerts": This records a note in the AndroidAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).
* "Enable TBR emulation": The Insight pump can only issue temporary basal rates (TBRs) up to 250%. To get round this restriction, TBR emulation will instruct the pump to deliver an extended bolus for the extra insulin if you request a TBR of more than 250%.
    
    **Note: Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.**

* "Recovery duration": This defines how long AndroidAPS will wait before trying again after a failed connection attempt. You can choose from 0 to 20 seconds. If you experience connection problems, choose a longer wait time.   
      
    Example for min. recovery duration = 5 and max. recovery duration = 20   
      
    no connection -> wait **5** sec.   
    retry -> no connection -> wait **6** sec.   
    retry -> no connection -> wait **7** sec.   
    retry -> no connection -> wait **8** sec.   
    ...   
    retry -> no connection -> wait **20** sec.   
    retry -> no connection -> wait **20** sec.   
    ...

* "Disconnect delay": This defines how long (in seconds) AndroidAPS will wait to disconnect from the pump after an operation is finished. Default value is 5 seconds.

For periods when pump was stopped AAPS will log a temp. basal rate with 0%.

In AndroidAPS, the Accu-Chek Insight tab shows the current status of the pump and has two buttons:

* "Ανανέωση": Ανανεώνει την κατάσταση της αντλίας
* "Ενεργοποίηση / απενεργοποίηση TBR μέσω ειδοποίησης": Μία τυποποιημένη αντλία Insight εκπέμπει συναγερμό όταν ολοκληρωθεί η διαδικασία TBR. Αυτό το κουμπί σας επιτρέπει να ενεργοποιήσετε ή να απενεργοποιήσετε αυτό το συναγερμό χωρίς την ανάγκη για λογισμικό διαμόρφωσης.
    
    ![Στιγμιότυπο οθόνης της κατάστασης Insight](../images/Insight_Status2.png)

## Ρυθμίσεις στην αντλία

Configure alarms in the pump as follows:

* Μενού> Ρυθμίσεις> Ρυθμίσεις συσκευής> Ρυθμίσεις λειτουργιών> Ήχος> Σήμανση> Μενού ήχου> Ρυθμίσεις> Ρυθμίσεις συσκευής> Ρυθμίσεις λειτουργίας>Ήχος>Ένταση>0 (διαγράψτε όλες τις μπάρες)
* Μενού> Λειτουργίες> Λειτουργία σήματος> Σίγαση

This will silence all alarms from the pump, allowing AndroidAPS to decide if an alarm is relevant to you. If AndroidAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

Insight pumps with newer firmware will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus). Vibration cannot be disabled. Older pumps do not vibrate in these circumstances.

## Αντικατάσταση μπαταρίας

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

## Ειδικά σφάλματα σχετικά με το Insight

### Εκτεταμένο bolus

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Τέλος χρόνου

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Διέλευση χρονικών ζωνών με αντλία Insight

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).