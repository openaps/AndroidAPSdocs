# Accu-Chek Combo Tips for basic usage

**NOTE:** Starting with AAPS version 3.2, a [new Combo driver](../Configuration/Accu-Chek-Combo-Pump-v2.md) (referred to as "combov2" sometimes) has been added. The old driver is also referred to as the "Ruffy-based driver". Some parts of this document only apply to the old driver. These will be annotated accordingly.

## Πώς να εξασφαλίσετε ομαλές λειτουργίες

* Always **carry the smartphone with you**, leave it next to your bed at night. As your pump may lay behind or under you body while you sleep, a higher position (on a shelf or board) works best.
* Πάντα βεβαιωθείτε ότι η μπαταρία της αντλίας είναι όσο το δυνατόν πληρέστερη. Ανατρέξτε στο τμήμα της μπαταρίας για συμβουλές σχετικά με την μπαταρία.
* (Only applies to the old driver) It is best to **not touch the app ruffy** while the system is running. Εάν ξαναρχίσει η εφαρμογή, η σύνδεση με την αντλία μπορεί να διακοπεί. Μόλις η αντλία είναι συνδεδεμένη με το ruffy, δεν υπάρχει ανάγκη επανασύνδεσης. Ακόμα και μετά την επανεκκίνηση του τηλεφώνου, η σύνδεση επαναφέρεται αυτόματα. Αν είναι δυνατόν, μετακινήστε την εφαρμογή σε οθόνη που δεν χρησιμοποιείται ή σε φάκελο στο smartphone σας, ώστε να μην την ανοίξετε τυχαία.
* (Only applies to the old driver) If you unintentionally open the app ruffy during looping, it's best to restart the smartphone right away.
* Όποτε είναι δυνατόν, ενεργοποιήστε την αντλία μόνο μέσω της εφαρμογής AndroidAPS. Για να το διευκολύνετε, ενεργοποιήστε το κλείδωμα πλήκτρων στην αντλία κάτω από τα ** ΡΥΘΜΙΣΕΙΣ ΑΝΤΛΙΑΣ / ΚΛΕΙΔΩΜΑ ΠΛΗΚΤΡΩΝ/ ΕΝΕΡΓΟ **. Μόνο όταν αλλάζετε την μπαταρία ή την κασέτα, είναι απαραίτητο να χρησιμοποιήσετε τα πλήκτρα της αντλίας. ![Κλείδωμα](../images/combo/combo-tips-keylock.png)

## Η αντλία δεν είναι προσβάσιμη. Τι να κάνετε;

### Ενεργοποιήστε τον συναγερμό μη προσιτής αντλίας

* Στο AndroidAPS, μεταβείτε στο ** Ρυθμίσεις / Τοπικοί **συναγερμοί και ενεργοποιήστε** το συναγερμό όταν η αντλία **δεν είναι προσβάσιμη ορίστε το όριο [Min] **για 31 ** λεπτά. 
* This will give you enough time to not trigger the alarm when leaving the room while your phone is left on the desk, but informs you if the pump cannot be reached for a time that exceeds the duration of a temporary basal rate.

### Επαναφέρετε την προσβασιμότητα της αντλίας

* Όταν το AndroidAPS αναφέρει ένα συναγερμό ** αντλία μη προσβάσιμη **, απενεργοποιήστε το κλείδωμα κουπιών και ** πατήστε οποιοδήποτε πλήκτρο στην αντλία ** (π.χ. κάτω κουμπί). As soon as the pump display has turned off, press **Refresh** on the **Combo Tab** in AndroidAPS. Τότε συνήθως η επικοινωνία επανέρχεται.
* Εάν αυτό δεν σας βοηθήσει, επανεκκινήστε το smartphone σας. After the restart, AndroidAPS will be reactivated and a new connection will be established with the pump. If you are using the old driver, ruffy will be reactivated as well.
* Οι δοκιμές με διαφορετικά smartphones έδειξαν ότι ορισμένα smartphones ενεργοποιούν πιο συχνά το σφάλμα "μη ανιχνεύσιμη αντλία" από άλλα. [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) lists successfully tested smartphones. 

### Αιτίες και συνέπειες των συχνών σφαλμάτων επικοινωνίας

* Στα τηλέφωνα με ** χαμηλή μνήμη ** (ή ** επιθετικής εξοικονόμησης ενέργειας **ρύθμιση), το AndroidAPS συχνά τερματίζεται. Μπορείτε να το δείτε από το γεγονός ότι τα Bolus και η αριθμομηχανή στην Αρχική οθόνη δεν εμφανίζονται όταν ανοίξετε το AAPS επειδή αρχικοποιείται το σύστημα. Αυτό μπορεί να προκαλέσει "συναγερμούς απρόσιτης αντλίας " κατά την εκκίνηση. Στο πεδίο ** Τελευταία σύνδεση ** της καρτέλας Combo, μπορείτε να ελέγξετε πότε το AndroidAPS τελευταία επικοινωνούσε με την αντλία. 

![Pump unreachable](../images/combo/combo-tips-pump-unreachable.png) ![No connection to pump (as shown in the old driver's tab)](../images/combo/combo-tips-no-connection-to-pump.png) ![No connection to pump (as shown in the new driver's tab)](../images/combo/combov2-tips-no-connection-to-pump.png)

* Αυτό το σφάλμα μπορεί να εξαντλήση την μπαταρία της αντλίας γρηγορότερα, επειδή το βασικό προφίλ διαβάζεται από την αντλία όταν ξαναρχίσει η εφαρμογή.
* Αυξάνει επίσης την πιθανότητα να προκαλέσει το σφάλμα που προκαλεί την απόρριψη της αντλίας από όλες τις εισερχόμενες συνδέσεις μέχρι να πιεστεί ένα κουμπί στην αντλία. 

## Η ακύρωση του προσωρινού βασικού ρυθμού αποτυγχάνει

* Περιστασιακά, το AndroidAPS δεν μπορεί να ακυρώσει αυτόματα μια ειδοποίηση **ακυρωμένο TBR **. Then you have to either press **UPDATE** in the AndroidAPS **Combo tab** or the alarm on the pump will need to be confirmed.

## Υποδείξεις της μπαταρίας της αντλίας

### Αλλαγή μπαταρίας

* Μετά από συναγερμό ** χαμηλής μπαταρίας **, η μπαταρία θα πρέπει να αλλάξει το συντομότερο δυνατόν ώστε να έχει πάντα αρκετή ενέργεια για αξιόπιστη επικοινωνία Bluetooth με το smartphone, ακόμα και αν το τηλέφωνο βρίσκεται σε ευρύτερη απόσταση από την αντλία.
* Ακόμα και μετά από συναγερμό ** χαμηλής μπαταρίας **, η μπαταρία μπορεί να χρησιμοποιηθεί για μεγάλο χρονικό διάστημα. Ωστόσο, συνιστάται να έχετε πάντα μαζί σας μια νέα μπαταρία μετά από ένα συναγερμό χαμηλής μπαταρίας.
* Before changing the battery, press on the **Loop** symbol on the main screen and select **Suspend loop for 1h**. 
* Wait for the pump to communicate with the pump and the bluetooth logo on the pump has faded.

![Bluetooth enabled](../images/combo/combo-tips-compo.png)

* Release the key lock on the pump, put the pump into stop mode, confirm a possibly canceled temporary basal rate, and change the battery quickly.
* When using the old driver, if the clock on the pump did not survive the battery chenge, re-set the date and time on the pump to exactly the date/time on your phone running AAPS. (The new driver automatically updates the pump's date and time.)
* Then put the pump back in run mode select **Resume** when pressing on the **Suspended Loop** icon on the main screen.
* AndroidAPS will re-set a necessary temporary basal rate with the arrival of the next blood sugar value. 

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=

### Τύπος μπαταρίας και αιτίες βραχείας διάρκειας ζωής της μπαταρίας

* As intensive Bluetooth communication consumes a lot of energy, only use **high-quality batteries** like Energizer Ultimate Lithium, the "power one"s from the "large" Accu-Chek service pack, or if you are going for a rechargeable battery, use Eneloop batteries. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Ranges for typical life time of the different battery types are as follows:

* **Energizer Ultimate Lithium**: 4 έως 7 εβδομάδες
* **Power One Alkaline** (Varta) από το πακέτο υπηρεσιών: 2 έως 4 εβδομάδες
* **Eneloop rechargeable** batteries (BK-3MCCE): 1 to 3 weeks

If your battery life is significantly shorter than the ranges given above, please check the following possible causes:

* (Only applies to the old driver) Versions of the [ruffy App](https://github.com/MilosKozak/ruffy) after vMarch 2018 significantly improved pump battery lifetime. Make sure you are on the newest version if you have issues with a short battery lifetime.
* Υπάρχουν ορισμένες παραλλαγές του καπακιού μπαταρίας της αντλίας Combo, το οποίο βραχυκυκλώνει εν μέρει τις μπαταρίες και τις αποστραγγίζει γρήγορα. Τα καπάκια χωρίς αυτό το πρόβλημα μπορούν να αναγνωριστούν από τις χρυσές μεταλλικές επαφές.
* Εάν το ρολόι της αντλίας δεν «επιβιώσει» από μια μικρή αλλαγή μπαταρίας, είναι πιθανό να σπάσει ο πυκνωτής ο οποίος κρατάει το ρολόι σε λειτουργία κατά τη διάρκεια μιας σύντομης διακοπής ρεύματος. In this case, a replacement of the pump by Roche might help, which is not a problem during the warranty period. 
* Το υλικό και το λογισμικό smartphone (λειτουργικό σύστημα Android και στοίβα bluetooth) επηρεάζουν επίσης τη διάρκεια ζωής της μπαταρίας της αντλίας, παρόλο που οι ακριβείς παράγοντες δεν είναι ακόμη πλήρως γνωστοί. Εάν έχετε την ευκαιρία, δοκιμάστε ένα άλλο smartphone και συγκρίνετε τη διάρκεια ζωής της μπαταρίας.

## Οι αλλαγές θερινής ώρας

**NOTE**: The new driver automatically sets date and time and handles daylight saving time changes on its own. The steps below all only apply to the old driver.

* Επί του παρόντος, ο συνδυασμός προγραμμάτων οδήγησης δεν υποστηρίζει την αυτόματη ρύθμιση του χρόνου της αντλίας.
* Κατά τη διάρκεια της νύχτας μιας αλλαγής θερινής ώρας, ο χρόνος του smartphone ενημερώνεται, αλλά ο χρόνος της αντλίας παραμένει αμετάβλητος. Αυτό οδηγεί σε συναγερμό λόγω των αποκλίσεων μεταξύ των συστημάτων στις 3 π. μ.
* If you do not want to be awakened at night, **deactivate the automatic daylight saving time changeover on the mobile phone** in the evening before the time changeover and adjust the times manually the next morning. A good way to deal with daylight saving time changes is to switch to a different time zone located on the same longitude you are located at but closer to the equator, where usually no daylight saving time is observed. Example: For Central Europe on Summer Time (CEST/GMT+2), you could switch to the time zone of Zimbabwe on your phone the night before the switch to winter time and then switch back to Central European Time CET/GMT+1 the next morning while changing the clock on your pump at the same time. The other way aroud, switch to the time zone of Nigeria while on Winter Time CET/GMT+1 and go back to Central European Summer Time (CEST/GMT+2) the morning after the switch to summer time and change the pump time accordingly. Look at https://www.timeanddate.com/time/map/ to find a suitable country.

## Εκτεταμένο bolus, πολλαπλό bolus

The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternatives:

* Use **e-Carbs** when entering carbs or using the Calculator by entering the carbs of the full meal and the duration you expect the carbs to arrive as glucose in you blood. The system will then calculate small carbs equally distributed over the whole duration which will cause th algorithm to provide equivalent insulin dosing while still permanently checking the overall rise/decrease of the blood glucose level. For a multiwave bolus approach, you can also combine a smaller immeadiate bolus with e-carbs. 
* Before eating, on the **Actions tab** in AndroidAPS set as a temporary **Eating Soon** goal with target glucose 80 for several hours. The duration should be based on the interval you would chosse for an extended bolus. This will keep your target lower than usual and therefore increase the amout of insulin delivered.
* Then use the **CALCULATOR** to enter the full carbs of the meal, but do not directly apply the values suggested by the bolus calculator. If a multiwave-like bolus is to be delivered, correct the insulin dosage down. Depending on the meal, the algorithm now has to deliver additional SMBs or higher temporary basal rates to counteract the increase in blood sugar. Here, the safety limitation of the basal rate (Max IE / h, Maximum basal IOB) should be very carefully experimented with and, if necessary, temporarily changed.

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AndroidAPS will penalize you with disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Disabled loop after multiwave bolus](../images/combo/combo-tips-multiwave-bolus.png)

## Συναγερμοί κατά την χορήγηση bolus

* If AndroidAPS detects that an identical bolus has been successfully delivered at the same minute, bolus delivery will be prevented with identical numer of insulin units. If your really want to bolus the same inuslin twice in short succession, just wait two more minutes and then deliver the bolus again. If the fist bolus has been interruped or was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* The alarm is a safety mechanism that reads the pump's bolus history before submitting a new bolus to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump. Εδώ πρέπει να αποφευχθούν οι δυσδιάκριτες καταχωρήσεις.

![Double bolus](../images/combo/combo-tips-doppelbolus.png)

* Αυτός ο μηχανισμός είναι επίσης υπεύθυνος για μια δεύτερη αιτία του σφάλματος: Εάν κατά τη χρήση του υπολογισμού των bolus χορηγηθεί ένα άλλο bolus μέσω της αντλίας με τον τρόπο αυτό αλλάζει το ιστορικό των bolus, η βάση του υπολογισμού του bolus είναι λάθος και το bolus ακυρώνετε. 

![Canceled bolus](../images/combo/combo-tips-history-changed.png)