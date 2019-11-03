# Accu-Chek Insight Αντλία

**Αυτό το λογισμικό είναι μέρος του DIY τεχνητό παγκρέας και δεν είναι προϊόν, αλλά απαιτεί από εσάς να διαβάσετε, να μάθετε και να κατανοήσετε το σύστημα, συμπεριλαμβανομένου του τρόπου χρήσης του. Δεν είναι κάτι που κάνει όλη τη διαχείριση του διαβήτη για σας, αλλά σας επιτρέπει να βελτιώσετε τα επίπεδα σακχάρων σας και την ποιότητα ζωής σας, εάν είστε πρόθυμοι να αφιερώσετε τον απαιτούμενο χρόνο. Μη βιάζεστε με αυτό, αλλά δώστε χρόνο στον εαυτό σας να μάθει. Εσείς μόνο είστε υπεύθυνοι για οτιδήποτε κάνετε με αυτό.**

* * *

## *ΠΡΟΕΙΔΟΠΟΙΗΣΗ: Εάν είχατε χρησιμοποιήσει το SightRemote στο παρελθόν, παρακαλώ αναβαθμίστε στην νεότερη AAPS και απεγκαταστήστε το SightRemote.*

## Απαιτήσεις υλικού και λογισμικού

* Μία Roche Accu-Chek Insight pump (οποιαδήποτε εταιρεία όλες δουλεύουν) Σημειώσει: Το AAPS πάντα θα αποθηκεύει στο προφίλ του πρώτου βασικού ρυθμού της αντλίας
* Ένα τηλέφωνο Android (Βασικά κάθε έκδοση Android θα λειτουργούσε, αλλά το ίδιο το AndroidAPS απαιτεί τουλάχιστον Android 5 (Lollipop).)
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

Σημείωση: Δεν θα υπάρχει μόνιμη σύνδεση μεταξύ της αντλίας και του τηλεφώνου. Μια σύνδεση θα καθοριστεί μόνο εάν είναι απαραίτητο (δηλ. Ο καθορισμός προσωρινών βασικών ρυθμών, η χορήγηση bolus, η ανάγνωση του ιστορικού της αντλίας...). Διαφορετικά, η μπαταρία του τηλεφώνου και της αντλίας θα εξαντλούνταν πολύ γρήγορα.

## Ρυθμίσεις στο AAPS

![Στιγμιότυπο ρυθμίσεων Insight](../images/Insight_pairing_V2_5.png)

Στις ρυθμίσεις του Insight στο AndroidAPS μπορείτε να ενεργοποιήσετε τις ακόλουθες επιλογές:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.
* "Αρχείο Αλλαγές σωλήνα": Αυτό προσθέτει μια σημείωση στη βάση δεδομένων AndroidAPS όταν εκτελείτε το πρόγραμμα "πλήρωση σωλήνα" στην αντλία.
* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump. **Note: A cannula change also resets Autosens.**
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

Για τις περιόδους κατά τις οποίες σταμάτησε η αντλία, το AAPS θα καταγράψει μια προσπάθεια. βασικός ρυθμός με 0%.

Στο AndroidAPS, η καρτέλα Accu-Chek Insight εμφανίζει την τρέχουσα κατάσταση της αντλίας και διαθέτει δύο κουμπιά:

* "Ανανέωση": Ανανεώνει την κατάσταση της αντλίας
* "Ενεργοποίηση / απενεργοποίηση TBR μέσω ειδοποίησης": Μία τυποποιημένη αντλία Insight εκπέμπει συναγερμό όταν ολοκληρωθεί η διαδικασία TBR. Αυτό το κουμπί σας επιτρέπει να ενεργοποιήσετε ή να απενεργοποιήσετε αυτό το συναγερμό χωρίς την ανάγκη για λογισμικό διαμόρφωσης.
    
    ![Στιγμιότυπο οθόνης της κατάστασης Insight](../images/Insight_Status2.png)

## Ρυθμίσεις στην αντλία

Ρυθμίστε τους συναγερμούς στην αντλία ως εξής:

* Μενού> Ρυθμίσεις> Ρυθμίσεις συσκευής> Ρυθμίσεις λειτουργιών> Ήχος> Σήμανση> Μενού ήχου> Ρυθμίσεις> Ρυθμίσεις συσκευής> Ρυθμίσεις λειτουργίας>Ήχος>Ένταση>0 (διαγράψτε όλες τις μπάρες)
* Μενού> Λειτουργίες> Λειτουργία σήματος> Σίγαση

Αυτό θα σιωπά όλους τους συναγερμούς από την αντλία, επιτρέποντας στο AndroidAPS να αποφασίσει αν ένας συναγερμός είναι σχετικός με σας. Αν το AndroidAPS δεν αναγνωρίζει συναγερμό, η ένταση του θα αυξηθεί (πρώτα ήχος, στη συνέχεια δόνηση).

Οι αντλίες Insight με νεότερο υλικό και λογισμικό θα δονείται σύντομα κάθε φορά που παρέχεται ένα bolus (για παράδειγμα, όταν το AndroidAPS εκδίδει μια SMB ή TBR, παρέχει εκτεταμένο bolus). Η δόνηση δεν μπορεί να απενεργοποιηθεί. Οι παλαιότερες αντλίες δεν δονούνται σε αυτές τις περιπτώσεις.

## Αντικατάσταση μπαταρίας

Η αντλία Insight διαθέτει μια μικρή εσωτερική μπαταρία για να διατηρεί βασικές λειτουργίες όπως το ρολόι που εκτελείται κατά την αλλαγή της αφαιρούμενης μπαταρίας. Αν η αλλαγή της μπαταρίας διαρκέσει πολύ, αυτή η εσωτερική μπαταρία μπορεί να εξαντληθεί, το ρολόι θα επαναρυθμιστεί και θα σας ζητηθεί να εισάγετε νέα ώρα και ημερομηνία μετά την εισαγωγή μιας νέας μπαταρίας. Εάν συμβεί αυτό, όλες οι καταχωρίσεις στο AndroidAPS πριν από την αλλαγή της μπαταρίας δεν θα συμπεριλαμβάνονται πλέον στους υπολογισμούς, καθώς ο σωστός χρόνος δεν μπορεί να προσδιοριστεί σωστά.

## Ειδικά σφάλματα σχετικά με το Insight

### Εκτεταμένο bolus

Απλά χρησιμοποιήστε ένα εκτεταμένο bolus κάθε φορά καθώς πολλαπλά εκτεταμένα bolusταυτόχρονα ενδέχεται να προκαλέσουν σφάλματα.

### Τέλος χρόνου

Μερικές φορές μπορεί να συμβεί η αντλία Insight να μην απαντά κατά τη διάρκεια ρύθμισης σύνδεσης. Στην περίπτωση αυτή, το AAPS θα εμφανίσει το ακόλουθο μήνυμα: "Τέλος χρονικού ορίου κατά τη διάρκεια της χειραψίας - επαναφορά του Bluetooth".

![Επισκόπηση Επαναφορά Bluetooth](../images/Insight_ResetBT.png)

Σε αυτήν την περίπτωση, απενεργοποιήστε το bluetooth στην αντλία ΚΑΙ το smartphone για περίπου 10 δευτερόλεπτα και, στη συνέχεια, ενεργοποιήστε τα ξανά.

## Διέλευση χρονικών ζωνών με αντλία Insight

Για πληροφορίες σχετικά με τη μετακίνηση σε ζώνες ώρας, ανατρέξτε στην ενότητα [Ζώνη ώρας ταξιδεύοντας με αντλίες](../Usage/Timezone-traveling#insight).