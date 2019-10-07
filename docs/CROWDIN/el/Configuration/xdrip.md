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

### Identify receiver

* Μερικοί άνθρωποι έχουν ανακαλύψει προβλήματα με την τοπική εκπομπή (το AAPS δεν λαμβάνει τιμές BG από το xDrip+) όταν το τηλέφωνο βρίσκεται σε λειτουργία πτήσης. Μεταβείτε στις Ρυθμίσεις> Ρυθμίσεις μεταξύ εφαρμογών> Εντοπισμός δέκτη και εισαγάγετε ` info.nightscout.androidaps `.
   
   ![+xDrip Basic Inter-app Ρυθμίσεις Προσδιορίζουν δέκτη](../images/xDrip_InterApp_NS.png)

## xDrip+ & Dexcom G6

### xDrip+ version depending on G6 transmitter serial no.

Για τους πομπούς G6 που κατασκευάστηκαν μετά το πέρας / τέλος του 2018 (δηλ. με σειριακό αριθμό. ξεκινώντας από 80 ή 81) βεβαιωθείτε ότι χρησιμοποιείτε τουλάχιστον τον κύριο πίνακα [ με ημερομηνία 2019/05/18 ](https://jamorham.github.io/#xdrip-plus).

Εάν ο σειριακός αριθμός του πομπού Dexcom G6. ξεκινά με 8G... δοκιμάστε [nightly έκδοση 2019/07/28 ή μεταγενέστερη](https://github.com/NightscoutFoundation/xDrip/releases).

### Dexcom specific settings

* Open G5/G6 Debug Settings -> Hamburger Menu (top left of homescreen) -> Settings -> G5/G6 Debug Settings ![Open xDrip+ Settings](../images/xDrip_Dexcom_SettingsCall.png)

* Enable the following settings
   
   * `Use the OB1 Collector`
   * `Native Algorithm` (important if you want to use SMB)
   * `G6 support`
   * `Allow OB1 unbonding`
   * `Allow OB1 initiate bonding`
* All other options should be disabled
* Adjust battery warning level to 280 (bottom of G5/G6 Debug Settings)
   
   ![xDrip+ G5/G6 Debug Settings](../images/xDrip_Dexcom_DebugSettings.png)

### Preemptive restarts not recommended

**Με πομπούς της Dexcom, οι οποίοι έχουν σειριακό αριθμό. να ξεκινά με 8G προληπτικές επανεκκινήσεις δεν λειτουργούν και μπορεί να σκοτώσουν τον αισθητήρα εντελώς!**

Η αυτόματη επέκταση των αισθητήρων Dexcom (` προληπτικές επανεκκινήσεις`) δεν συνιστάται, καθώς αυτό μπορεί να οδηγήσει σε "άλματα" στις τιμές BG την ένατη ημέρα μετά την επανεκκίνηση.

![+xDrip μετάβαση μετά την προληπτική επανεκκίνηση](../images/xDrip_Dexcom_PreemptiveJump.png)

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of:

* If you are using the native data with the calibration code in xDrip+ or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. Αν κάνετε προ-εμβάπτιση, τότε για να έχετε τα καλύτερα αποτελέσματα, πιθανόν να χρειαστεί να βαθμονομήσετε τον αισθητήρα.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

Για να μάθετε περισσότερα σχετικά με τις λεπτομέρειες και τους λόγους που γίνονται αυτές οι συστάσεις διαβάστε το πλήρες άρθρο [ ](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) που δημοσιεύτηκε από την Tim Street στο [ www.diabettech.com ](http://www.diabettech.com).

### Connect G6 transmitter for the first time

**Για τους δεύτερους και τους επόμενους πομπούς βλέπε [ Επεκτείνετε τη διάρκεια ζωής του πομπού ](../Configuration/xdrip#extend-transmitter-life) παρακάτω.**

Για τους πομπούς G6 που κατασκευάστηκαν μετά το πέρας / τέλος του 2018 (δηλ. με σειριακό αριθμό. ξεκινώντας από 80 ή 81) βεβαιωθείτε ότι χρησιμοποιείτε τουλάχιστον τον κύριο πίνακα [ με ημερομηνία 2019/05/18 ](https://jamorham.github.io/#xdrip-plus).

Εάν ο σειριακός αριθμός του πομπού Dexcom G6. ξεκινά με 8G... δοκιμάστε [nightly έκδοση 2019/07/28 ή μεταγενέστερη](https://github.com/NightscoutFoundation/xDrip/releases).

* Turn original Dexcom receiver off (if used).
* Long press the red xDrip+ blood drop icon on the main screen to enable the `Source Wizard Button`.
* Use the Source Wizard Button which ensures default settings including OB1 & Native Mode 
   * This guides you through the initial set up.
   * you will need your transmitter serial number if this is the first time you've used it.

* Put in serial number of new transmitter (on the transmitter packaging or on the back of the transmitter). Be careful not to confuse 0 (zero) and O (capital letter o).
   
   ![xDrip+ Dexcom Transmitter Serial No](../images/xDrip_Dexcom_TransmitterSN.png)

* Insert new sensor (only if replacing)

* Put transmitter into sensor
* **Wait 15 minutes** before starting sensor so xDrip can initialize communication with the new transmitter
* Start sensor (only if replacing)
   
   -> Near the bottom of the screen `Warm Up x,x hours left` must be displayed after a few minutes.

-> Εάν ο σειριακός αριθμός του πομπού. δεν ξεκινάει με 8G και δεν υπάρχει προδιαγραφή χρόνου μετά από μερικά λεπτά σταματήστε και επανεκκίνηστε τον αισθητήρα.

* Restart collector (system status - if not replacing sensor}
* Do not turn original Dexcom receiver (if used) back on before xDrip+ shows first readings.
* Long press the red xDrip+ blood drop icon on the main screen to disable the `Source Wizard Button`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### Transmitter battery status

* Battery status can be controlled in system status (Hamburger menu top left on homescreen)
* Swipe left once to see second screen. ![xDrip+ First Transmitter 4](../images/xDrip_Dexcom_Battery.png)

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
* Long press the red xDrip+ blood drop icon on the main screen to enable the `Source Wizard Button`.
* Use the Source Wizard Button which ensures default settings including OB1 & Native Mode 
   * This guides you through the initial set up.
   * You will need your transmitter serial number if this is the first time you've used it.
* Put in serial number of new transmitter. Be careful not to confuse 0 (zero) and O (capital letter o).
* Insert new sensor (only if replacing).
* Put transmitter into sensor
* Start sensor (only if replacing)
   
   **It is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen).**

* Restart collector (system status - if not replacing sensor}

* Do not turn original Dexcom receiver (if used) back on before xDrip+ shows first readings.
* Long press the red xDrip+ blood drop icon on the main screen to disable the `Source Wizard Button`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

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
* Σταματήστε τον αισθητήρα
* Restart your phone
* Start sensor with code 0000 (four times zero)
* Wait 15 minutes
* Σταματήστε τον αισθητήρα
* Start sensor with "real" code (printed on the adhesive protector)

Check in xDrip+ logs if xDrip+ starts counting "Duration: 1 minute" (and so on). Only in the xdrip+ logs you can detect at an early stage whether xdrip+ has stopped a sensor. Latest status is not always shown correctly on bottom of startscreen.

## xDrip+ & Freestyle Libre

### Libre specific settings

* Open Bluetooth Settings -> Hamburger Menu (top left of homescreen) -> Settings -> scroll down -> Less common settings -> Bluetooth Settings
   
   ![xDrip+ Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

* Enable the following settings
   
   * `Turn Bluetooth on` 
   * `Use scanning`
   * `Always discover services`

* All other options should be disabled
   
   ![xDrip+ Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

### Connect Libre Transmitter & start sensor

![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)