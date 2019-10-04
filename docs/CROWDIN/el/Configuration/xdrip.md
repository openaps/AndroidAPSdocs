# Ρυθμίσεις xDrip+

Αν δεν το έχετε ήδη, κάντε λήψη του [ xDrip + ](https://github.com/NightscoutFoundation/xDrip)

Για τους πομπούς G6 που κατασκευάστηκαν μετά το πέρας / τέλος του 2018 (δηλ. με σειριακό αριθμό. ξεκινώντας από 80 ή 81) βεβαιωθείτε ότι χρησιμοποιείτε τουλάχιστον τον κύριο πίνακα [ με ημερομηνία 2019/05/18 ](https://jamorham.github.io/#xdrip-plus).

Εάν ο σειριακός αριθμός του πομπού Dexcom G6. ξεκινά με 8G... δοκιμάστε [nightly έκδοση 2019/07/28 ή μεταγενέστερη](https://github.com/NightscoutFoundation/xDrip/releases).

## Βασικές ρυθμίσεις για όλα τα CGM & FGM Συστήματα

* Βεβαιωθείτε ότι έχετε ορίσει σωστά τη διεύθυνση URL, συμπεριλαμβανομένου του ** S ** στο τέλος του http **s **: // (όχι http: //)
   
   π.χ https://API_SECRET@your-app-name.herokuapp.com/api/v1/
   
   -> Μενού Hamburger (επάνω αριστερά της αρχικής οθόνης) -> Ρυθμίσεις-> Ανεβάζουμε στο Cloud-> συγχρονισμός Nightscout (REST-API) -> βάση URL

* Απενεργοποίηστε την ` Αυτόματη βαθμονόμηση ` Εάν έχει επιλεγεί το πλαίσιο ελέγχου ` Αυτόματη βαθμονόμηση `, ενεργοποιήστε μία φορά ` Λήψη δεδομένων ` και αφαιρέστε το πλαίσιο ελέγχου ` Αυτόματη βαθμονόμηση ` / 0> ξανά, διαφορετικά οι θεραπείες (ινσουλίνη & υδατάνθρακες) θα προστεθούν δύο φορές στη Nightscout.

* Πατήστε ` Επιπλέον επιλογές `
* Απενεργοποίηστε ` Ανέβασε θεραπείες ` και ` Δεδομένα συμπληρωματικής φόρτωσης `
* Η επιλογή ` Ειδοποίηση για αποτυχίες ` θα πρέπει επίσης να απενεργοποιηθεί. Διαφορετικά, θα λάβετε ένα συναγερμό κάθε 5 λεπτά σε περίπτωση που το δίκτυο wifi / κινητής τηλεφωνίας είναι πολύ κακό ή ο διακομιστής δεν είναι διαθέσιμος.
   
   ![xDrip + Βασικές ρυθμίσεις 1](../images/xDrip_Basic1.png)
   
   ![xDrip + Βασικές ρυθμίσεις 2](../images/xDrip_Basic2.png)

* ** Ρυθμίσεις InterApp ** (Broadcast) Εάν πρόκειται να χρησιμοποιήσετε το AndroidAPS και τα δεδομένα πρέπει να προωθηθούν π.χ. στο AndroidAPS, πρέπει να ενεργοποιήσετε τη μετάδοση στο xDrip + στις ρυθμίσεις Inter-App.

* Προκειμένου οι τιμές να είναι ίσες, θα πρέπει να ενεργοποιήσετε το ` Αποστολή της εμφανιζόμενης τιμής γλυκόζης `.
* Εάν έχετε επίσης ενεργοποιήσει ` Αποδοχή θεραπειών ` και εκπομπή στο AndroidAPS, τότε το xDrip + θα λαμβάνει πληροφορίες από το AndroidAPS για ινσουλίνη, υδατάνθρακες και βασικό ρυθμό και μπορεί να εκτιμήσει την πρόβλεψη υπογλυκαιμίας κ. λπ. με καλύτερη ακρίβεια.
   
   ![+xDrip Βασικές ρυθμίσεις 3](../images/xDrip_Basic3.png)

* Μερικοί άνθρωποι έχουν ανακαλύψει προβλήματα με την τοπική εκπομπή (το AAPS δεν λαμβάνει τιμές BG από το xDrip+) όταν το τηλέφωνο βρίσκεται σε λειτουργία πτήσης. Μεταβείτε στις Ρυθμίσεις> Ρυθμίσεις μεταξύ εφαρμογών> Εντοπισμός δέκτη και εισαγάγετε ` info.nightscout.androidaps `.
   
   ![+xDrip Basic Inter-app Ρυθμίσεις Προσδιορίζουν δέκτη](../images/xDrip_InterApp_NS.png)

## xDrip+ & Dexcom G6

### xDrip + έκδοση ανάλογα με τον σειριακό αριθμό του πομπού G6.

Για τους πομπούς G6 που κατασκευάστηκαν μετά το πέρας / τέλος του 2018 (δηλ. με σειριακό αριθμό. ξεκινώντας από 80 ή 81) βεβαιωθείτε ότι χρησιμοποιείτε τουλάχιστον τον κύριο πίνακα [ με ημερομηνία 2019/05/18 ](https://jamorham.github.io/#xdrip-plus).

Εάν ο σειριακός αριθμός του πομπού Dexcom G6. ξεκινά με 8G... δοκιμάστε [nightly έκδοση 2019/07/28 ή μεταγενέστερη](https://github.com/NightscoutFoundation/xDrip/releases).

### Dexcom συγκεκριμένες ρυθμίσεις

* Ανοίξτε τις ρυθμίσεις εντοπισμού σφαλμάτων G5 / G6 -> Μενού Hamburger (επάνω αριστερά στην αρχική οθόνη) -> Ρυθμίσεις -> Ρυθμίσεις εντοπισμού σφαλμάτων G5 / G6 ![Ανοίξτε τις ρυθμίσεις της εφαρμογής xDrip+](../images/xDrip_Dexcom_SettingsCall.png)

* Ενεργοποιήστε τις ακόλουθες ρυθμίσεις
   
   * `Χρησιμοποιήστε το OB1 Συλλέκτη`
   * `Τοπικός αλγόριθμος` (σημαντικό αν θέλετε να χρησιμοποιήσετε το SMB)
   * `G6 υποστήριξη`
   * `Επιτρέπουν την αποσύνδεση OB1`
   * `Αφήστε το OB1 να αρχίσει τη σύνδεση`
* Όλες οι άλλες επιλογές πρέπει να απενεργοποιηθούν
* Προσαρμόστε το επίπεδο προειδοποίησης μπαταρίας στο 280 (κάτω από τις ρυθμίσεις εντοπισμού σφαλμάτων G5 / G6)
   
   ![ρυθμίσεις εντοπισμού σφαλμάτων xDrip + G5 / G6](../images/xDrip_Dexcom_DebugSettings.png)

### Οι προληπτικές επανεκκινήσεις δεν συνιστώνται

**Με πομπούς της Dexcom, οι οποίοι έχουν σειριακό αριθμό. να ξεκινά με 8G προληπτικές επανεκκινήσεις δεν λειτουργούν και μπορεί να σκοτώσουν τον αισθητήρα εντελώς!**

Η αυτόματη επέκταση των αισθητήρων Dexcom (` προληπτικές επανεκκινήσεις`) δεν συνιστάται, καθώς αυτό μπορεί να οδηγήσει σε "άλματα" στις τιμές BG την ένατη ημέρα μετά την επανεκκίνηση.

![+xDrip μετάβαση μετά την προληπτική επανεκκίνηση](../images/xDrip_Dexcom_PreemptiveJump.png)

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of:

* Αν χρησιμοποιείτε τα εγγενή δεδομένα με τον κωδικό βαθμονόμησης σε +xDrip ή Spike, το πιο ασφαλές που μπορείτε να κάνετε είναι να μην επιτρέψετε την προληπτική επανεκκίνηση του αισθητήρα.
* Αν πρέπει να χρησιμοποιήσετε την προληπτική επανεκκίνηση, βεβαιωθείτε ότι εισάγετε μια ώρα της ημέρας όπου μπορείτε να παρατηρήσετε την αλλαγή και να βαθμονομήσετε εάν είναι απαραίτητο. 
* Αν κάνετε επανεκκίνηση των αισθητήρων, καταρχήν κάντε το χωρίς την εργοστασιακή βαθμονόμηση για ασφαλέστερα αποτελέσματα στις ημέρες 11 και 12, και βεβαιωθείτε ότι είστε έτοιμοι να βαθμονομήσετε και να παρακολουθήσετε την παραλλαγή.
* Η προ-εμβάπτιση του G6 με εργοστασιακή βαθμονόμηση είναι πιθανό να προκαλέσει διακύμανση στα αποτελέσματα. Αν κάνετε προ-εμβάπτιση, τότε για να έχετε τα καλύτερα αποτελέσματα, πιθανόν να χρειαστεί να βαθμονομήσετε τον αισθητήρα.
* Αν δεν είστε προσεκτικοί σχετικά με τις αλλαγές που ενδεχομένως να πραγματοποιηθούν, ίσως είναι καλύτερο να επιστρέψετε στη μη βαθμονομημένη από το εργοστάσιο λειτουργία και να χρησιμοποιήσετε ένα σύστημα όπως το G5.

Για να μάθετε περισσότερα σχετικά με τις λεπτομέρειες και τους λόγους που γίνονται αυτές οι συστάσεις διαβάστε το πλήρες άρθρο [ ](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) που δημοσιεύτηκε από την Tim Street στο [ www.diabettech.com ](http://www.diabettech.com).

### Συνδέστε το πομπό G6 για πρώτη φορά

**Για τους δεύτερους και τους επόμενους πομπούς βλέπε [ Επεκτείνετε τη διάρκεια ζωής του πομπού ](../Configuration/xdrip#extend-transmitter-life) παρακάτω.**

Για τους πομπούς G6 που κατασκευάστηκαν μετά το πέρας / τέλος του 2018 (δηλ. με σειριακό αριθμό. ξεκινώντας από 80 ή 81) βεβαιωθείτε ότι χρησιμοποιείτε τουλάχιστον τον κύριο πίνακα [ με ημερομηνία 2019/05/18 ](https://jamorham.github.io/#xdrip-plus).

Εάν ο σειριακός αριθμός του πομπού Dexcom G6. ξεκινά με 8G... δοκιμάστε [nightly έκδοση 2019/07/28 ή μεταγενέστερη](https://github.com/NightscoutFoundation/xDrip/releases).

* Turn original Dexcom receiver off (if used).
* Πατήστε παρατεταμένα το εικονίδιο αίματος στην κύρια οθόνη +xDrip για να ενεργοποιήσετε το κουμπί `Source Wizard Button`.
* Χρησιμοποιήστε το κουμπί "Οδηγός πηγής", το οποίο διασφαλίζει τις προεπιλεγμένες ρυθμίσεις, συμπεριλαμβανομένων των OB1 & Εγγενής λειτουργία 
   * Αυτό σας καθοδηγεί στην αρχική ρύθμιση.
   * θα χρειαστείτε τον σειριακό αριθμό του πομπού σας αν αυτή είναι η πρώτη φορά που το χρησιμοποιήσατε.

* Τοποθετήστε τον αύξοντα αριθμό του νέου πομπού (βρίσκετε στη συσκευασία του πομπού ή στο πίσω μέρος του πομπού). Προσέξτε να μην συγχέετε 0 (μηδέν) και O (κεφαλαίο γράμμα o).
   
   ![μεταδότης xDrip + Dexcom σειριακός αριθμός](../images/xDrip_Dexcom_TransmitterSN.png)

* Τοποθετήστε το νέο αισθητήρα (μόνο αν αντικαθηστάτε)

* Βάλτε τον πομπό στον αισθητήρα
* **Περιμένετε 15 λεπτά** πριν από την έναρξη αισθητήρα, ώστε να xDrip μπορεί να προετοιμάσει την επικοινωνία με τη νέα συσκευή αποστολής σημάτων
* Ξεκινήστε το νέο αισθητήρα (μόνο αν αντικαθηστάτε)
   
   -> Κοντά στο κάτω μέρος της οθόνης ` Θα πρέπει να εμφανιστεί η ένδειξη Warm Up x, x ώρες αριστερά ` μετά από μερικά λεπτά.

-> Εάν ο σειριακός αριθμός του πομπού. δεν ξεκινάει με 8G και δεν υπάρχει προδιαγραφή χρόνου μετά από μερικά λεπτά σταματήστε και επανεκκίνηστε τον αισθητήρα.

* Κάντε επανεκκίνηση του συλλέκτη (system status- αν δεν... αντικαταστήστε τον αισθητήρα}
* Μην ενεργοποιείτε ξανά τον αρχικό δέκτη Dexcom (αν χρησιμοποιείται) πριν το xDrip + εμφανίσει τις πρώτες ενδείξεις.
* Πατήστε παρατεταμένα το εικονίδιο κόκκινου σταγονιδίου αίματος στην κύρια οθόνη xDrip + για να ενεργοποιήσετε το κουμπί `Οδηγός πηγής`.
   
   ![xDrip+ Dexcom Μεταδότης 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Μεταδότης 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Μεταδότης 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Μεταδότης 4](../images/xDrip_Dexcom_Transmitter04.png)

### Κατάσταση μπαταρίας πομπού

* Η κατάσταση της μπαταρίας μπορεί να ρυθμιστεί σε system status (μενού Hamburger πάνω αριστερά στην αρχική οθόνη)
* Swipe left once to see second screen. ![xDrip+ Dexcom Πρώτος Μεταδότης 4](../images/xDrip_Dexcom_Battery.png)

* The exact values when the transmitter “dies” due to empty battery are not known. The following information was posted online after the transmitter “died”: Transmitter days: 151 Voltage A: 297 Voltage B: 260 Resistance: 2391

### Extend transmitter life

* So far life cannot be extended for transmitters whos serial no. starts with 8G.
* To prevent difficulties starting sensors it is highly recommended to extend transmitter life before day 100 of first usage.
* Running sensor session will be stopped when extending transmitter life. So extend before sensor change or be aware that there will be a new 2 h warm-up phase.
* Switch to the `engineering mode`: 
   * tap on the character on the right of the xDrip+ start screen that represents a syringe
   * then tap on the microphone icon in the lower right corner
   * In the text box that opens type "enable engineering mode" 
   * click "Done"
   * If Google Speak engine is enabled, you can also speak the voice command: "enable engineering mode". 
* Go to the G5 debug settings and check `OB1 collector`.
* Use the voice command: “hard reset transmitter”
* The voice command will be executed with the next data receipt of the transmitter
* Look at the system status (Hamburger menu -> system status) and see what happens
* If you see a message "Phone Service State: Hard Reset maybe failed" on second system status screen just start the sensor and this message should go away.
   
   ![xDrip+ Hard Reset maybe failed](../images/xDrip_HardResetMaybeFailed.png)

* Transmitter days will be set to 0 after successful extension and start of sensor.

### Replace transmitter

Για τους πομπούς G6 που κατασκευάστηκαν μετά το πέρας / τέλος του 2018 (δηλ. με σειριακό αριθμό. ξεκινώντας από 80 ή 81) βεβαιωθείτε ότι χρησιμοποιείτε τουλάχιστον τον κύριο πίνακα [ με ημερομηνία 2019/05/18 ](https://jamorham.github.io/#xdrip-plus).

Εάν ο σειριακός αριθμός του πομπού Dexcom G6. ξεκινά με 8G... δοκιμάστε [nightly έκδοση 2019/07/28 ή μεταγενέστερη](https://github.com/NightscoutFoundation/xDrip/releases).

* Turn original Dexcom receiver off (if used).
* Stop sensor (only if replacing sensor)
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about half way down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes.
   
   -> To remove transmitter without stopping sensor see this video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Forget device (in system status)
   
   ![xDrip+ Forget Device](../images/xDrip_Dexcom_ForgetDevice.png)

* Forget device in smartphone’s BT settings (Will be shown as Dexcom?? whereas ?? are the last two digits of the transmitter serial no.)

* Remove transmitter (and sensor if replacing sensor)
* Πατήστε παρατεταμένα το εικονίδιο αίματος στην κύρια οθόνη +xDrip για να ενεργοποιήσετε το κουμπί `Source Wizard Button`.
* Χρησιμοποιήστε το κουμπί "Οδηγός πηγής", το οποίο διασφαλίζει τις προεπιλεγμένες ρυθμίσεις, συμπεριλαμβανομένων των OB1 & Εγγενής λειτουργία 
   * Αυτό σας καθοδηγεί στην αρχική ρύθμιση.
   * You will need your transmitter serial number if this is the first time you've used it.
* Put in serial number of new transmitter. Προσέξτε να μην συγχέετε 0 (μηδέν) και O (κεφαλαίο γράμμα o).
* Insert new sensor (only if replacing).
* Βάλτε τον πομπό στον αισθητήρα
* Ξεκινήστε το νέο αισθητήρα (μόνο αν αντικαθηστάτε)
   
   **It is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen).**

* Κάντε επανεκκίνηση του συλλέκτη (system status- αν δεν... αντικαταστήστε τον αισθητήρα}

* Μην ενεργοποιείτε ξανά τον αρχικό δέκτη Dexcom (αν χρησιμοποιείται) πριν το xDrip + εμφανίσει τις πρώτες ενδείξεις.
* Πατήστε παρατεταμένα το εικονίδιο κόκκινου σταγονιδίου αίματος στην κύρια οθόνη xDrip + για να ενεργοποιήσετε το κουμπί `Οδηγός πηγής`.
   
   ![xDrip+ Dexcom Μεταδότης 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Μεταδότης 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Μεταδότης 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Μεταδότης 4](../images/xDrip_Dexcom_Transmitter04.png)

### New Sensor

* Turn original Dexcom receiver off (if used).
* Stop sensor if necessary
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about half way down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Clean contacts (transmitter backside) with alcohol and let air-dry.

* In case you use this function disable `Restart Sensor` and `Preemptive restarts` (Hamburger menu -> Settings -> G5/G6 Debug Settings). If you miss this step and have these functions enabled the new sensor will not start properly.
   
   ![xDrip+ Preemptive Restart](../images/xDrip_Dexcom_Restart.png)

* Start Sensor
   
   **It is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen).**

* Set time inserted
   
   * To use G6 Native mode you must wait for the 2 hour warm up (i.e insertion time is now).
   * If you are using the xDrip+ algorithm then you can set a time more than 2 hours ago to avoid warm up. Readings may be very erratic. Therefore this is not recommended.
* Enter Sensor code (on the peel-off foil of the sensor) 
   * Keep code for further reference (i.e. new start after transmitter had to be removed)
   * Code can also be found in [xDrip+ logs](../Configuration/xdrip#retrieve-sensor-code): Click 3-dots-menu on xDrip+ homescreen and choose `View Event Logs`.
* No calibration is needed if you use G6 in "native mode". xDrip+ will show readings automatically after 2 hour warm-up.
* Do not turn original Dexcom Receiver (if used) back on before xDrip+ shows first readings.
   
   ![xDrip+ Start Dexcom Sensor 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Start Dexcom Sensor 2](../images/xDrip_Dexcom_SensorStart02.png)

### Retrieve sensor code

* In master dated 2019/05/18 and the latest nightly builds the sensor code is shown in system status (Hamburger menu top left on homescreen).
* Swipe left once to see second screen.
   
   ![xDrip+ Retrieve Dexcom Sensor Code2](../images/xDrip_Dexcom_SensorCode2.png)

* Dexcom sensor code can also be found in xDrip+ logs.

* Tap 3 dot menu (top right side on homescreen)
* Select `View Event Logs` and search for "code"
   
   ![xDrip+ Retrieve Dexcom Sensor Code](../images/xDrip_Dexcom_SensorCode.png)

## Troubleshooting Dexcom G5/G6 and xDrip+

### Problem connecting transmitter

* Transmitter must be shown in your smartphone's bluetooth settings.
* Transmitter will be shown as Dexcom?? whereas ?? represent the last two digits of your transmitter serial no. (i.e. DexcomHY).
* Open system status in xDrip+ (hamburger menue on top left side of home screen).
* Check if your transmitter is shown on first status page ('classic status page').
* If not: Delete device from your smartphone's bluetooth settings and restart collector.
* Wait about 5 min. until Dexcom transmitter reconnects automatically.

### Problem when starting new sensor

* Native sensor is marked as "FAILED: Sensor Failed Start"
* Stop sensor
* Restart your phone
* Start sensor with code 0000 (four times zero)
* Wait 15 minutes
* Stop sensor
* Start sensor with "real" code (printed on the adhesive protector)

Check in xDrip+ logs if xDrip+ starts counting "Duration: 1 minute" (and so on). Only in the xdrip+ logs you can detect at an early stage whether xdrip+ has stopped a sensor. Latest status is not always shown correctly on bottom of startscreen.

## xDrip+ & Freestyle Libre

### Libre specific settings

* Open Bluetooth Settings -> Hamburger Menu (top left of homescreen) -> Settings -> scroll down -> Less common settings -> Bluetooth Settings
   
   ![xDrip+ Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

* Ενεργοποιήστε τις ακόλουθες ρυθμίσεις
   
   * `Turn Bluetooth on` 
   * `Use scanning`
   * `Always discover services`

* Όλες οι άλλες επιλογές πρέπει να απενεργοποιηθούν
   
   ![xDrip+ Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

### Connect Libre Transmitter & start sensor

![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)