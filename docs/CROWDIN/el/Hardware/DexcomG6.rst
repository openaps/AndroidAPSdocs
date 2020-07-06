Dexcom G6
**************************************************
Πρώτα τα βασικά
==================================================

* Ακολουθήστε τη γενική υγιεινή CGM και ρυθμίστε των αισθητήρα `εδώ <../Υλικό / Γενικές συστάσεις CGM>` _.
* Για πομπούς G6 που κατασκευάζονται μετά το πέρας / τέλος του 2018, βεβαιωθείτε ότι έχετε χρησιμοποιήσει μία από τις πιο πρόσφατες εκδόσεις xDrip + <https://github.com/NightscoutFoundation/xDrip/releases> _ _. Αυτοί οι πομποί έχουν ένα νέο firmware και η τελευταία σταθερή έκδοση του xDrip + (2019/01/10) δεν μπορεί να το αντιμετωπίσει.
* If you have the possibility to get a Dexcom receiver from your health insurance it is worth getting it. Even if you do not use it every day you can exclusively refer to what the receiver said when you need to file a complaint. Parallel use is possible as transmitters can send to the receiver, plus to one more device at the same time.

Γενικές συμβουλές για το κύκλωμα με το G6
==================================================

Αυτό που είναι σαφές είναι ότι η χρήση του G6 είναι ίσως λίγο πιο πολύπλοκη από ό, τι φαίνεται. Για να το χρησιμοποιήσετε με ασφάλεια, υπάρχουν μερικά σημεία που πρέπει να γνωρίζετε: 

* If you are using the native data with the calibration code in xDrip+ or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* Αν πρέπει να χρησιμοποιήσετε την προληπτική επανεκκίνηση, βεβαιωθείτε ότι εισάγετε μια ώρα της ημέρας όπου μπορείτε να παρατηρήσετε την αλλαγή και να βαθμονομήσετε εάν είναι απαραίτητο. 
* Αν κάνετε επανεκκίνηση των αισθητήρων, καταρχήν κάντε το χωρίς την εργοστασιακή βαθμονόμηση για ασφαλέστερα αποτελέσματα στις ημέρες 11 και 12, και βεβαιωθείτε ότι είστε έτοιμοι να βαθμονομήσετε και να παρακολουθήσετε την παραλλαγή.
* Η προ-εμβάπτιση του G6 με εργοστασιακή βαθμονόμηση είναι πιθανό να προκαλέσει διακύμανση στα αποτελέσματα. Αν κάνετε προ-εμβάπτιση, τότε για να έχετε τα καλύτερα αποτελέσματα, πιθανόν να χρειαστεί να βαθμονομήσετε τον αισθητήρα.
* Αν δεν είστε προσεκτικοί σχετικά με τις αλλαγές που ενδεχομένως να πραγματοποιηθούν, ίσως είναι καλύτερο να επιστρέψετε στη μη βαθμονομημένη από το εργοστάσιο λειτουργία και να χρησιμοποιήσετε το σύστημα όπως το G5.

Για να μάθετε περισσότερα σχετικά με τις λεπτομέρειες και τους λόγους που γίνονται αυτές οι συστάσεις διαβάστε το πλήρες άρθρο <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/> που δημοσιεύτηκε από την Tim Street στο www.diabettech.com <http://www.diabettech.com>`_.

If using G6 with xDrip+
==================================================
* The Dexcom G6 transmitter can simultaneously be connected to the Dexcom receiver (or alternatively the t:slim pump) and one app on your phone.
* When using xDrip+ as receiver uninstall Dexcom app first. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
* If you need Clarity and want to profit from xDrip+ alarms use the `patched Dexcom app </Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_ with local broadcast to xDrip+.
* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on Nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* Επιλέξτε xdrip στο Configbuilder ( είναι ρύθμιση στο androidAPS).
* Προσαρμογή των ρυθμίσεων στο xDrip + σύμφωνα με τη σελίδα ρυθμίσεων xDrip + <../ Configuration / xdrip.html> `_
Αν το AAPS δεν λαμβάνει τιμές BG όταν το τηλέφωνο βρίσκεται σε κατάσταση λειτουργίας αεροπλάνου, χρησιμοποιήστε Προσδιορισμός δέκτη όπως περιγράφεται στη[ σελίδα ρυθμίσεων xDrip](../Configuration/xdrip.html).

Εάν χρησιμοποιείτε το G6 με την εφαρμογή patched Dexcom
==================================================
* Κάντε λήψη του apk από <https://github.com/dexcomapp/dexcomapp> https://github.com/dexcomapp/dexcomapp και επιλέξτε την έκδοση που ταιριάζει στις ανάγκες σας (mg / dl ή mmol / l, G6).

   * Folder 2.4 for users of the current version, folder 2.3 is only for the outdated AndroidAPS 2.3.
   * Ανοίξτε https://play.google.com/store/search?q=dexcom%20g6 στον υπολογιστή σας. Η περιοχή θα είναι ορατή στη διεύθυνση URL.
   
   .. εικόνα:: ../images/DexcomG6regionURL.PNG
     :alt: Περιοχή Dexcom G6 URL

* Απενεργοποιήστε τον αισθητήρα και καταργήστε την εγκατάσταση της αρχικής εφαρμογής Dexcom, εάν δεν το έχετε κάνει ήδη.
* Εγκαταστήστε το κατεβασμένο apk
* Ξεκινήστε τον αισθητήρα
* Επιλέξτε το DexcomG App (patched) στο μενού διαμόρφωσης (ρύθμιση στο AndroidAPS).
* If you want to use xDrip+ alarms via local broadcast: in xDrip+ hamburger menu > settings > hardware data source > 640G /EverSense.
* There is no local broadcast from patched Dexcom app directly to xDrip+. Broadcast has to go through AAPS as described above.

Αντιμετώπιση προβλημάτων G6
==================================================
Dexcom G6 αντιμετώπιση συγκεκριμένων προβλημάτων
--------------------------------------------------
* Πομποί με σειριακό αριθμό. starting with 80 or 81 need at least last stable xDrip+ version from May 2019 or a newer nightly build.
* Πομποί με σειριακό αριθμό. ξεκινώντας με 8G πρέπει τουλάχιστον να έχετε nightly build από 25 Ιουλίου, του 2019 ή νεότερη έκδοση.
* xDrip+ and Dexcom app cannot be connected with the transmitter at the same time.
* Περιμένετε τουλάχιστον 15 λεπτά. μεταξύ παύση και η έναρξη ενός αισθητήρα.
* Μην το πας πίσω το χρόνο της εισαγωγής. Απάντηση ερώτηση "Μήπως το βάλατε σήμερα;" πάντα με "Ναι, σήμερα".
* Μην ενεργοποιήσετε την επιλογή "επανεκκίνηση αισθητήρα'', ενώ ρυθμίζετε νέο αισθητήρα
* Do not start new sensor before the following information is shown in Classic Status Page -> G5/G6 status -> PhoneServiceState:

  * Πομπός με σειριακό αριθμό που ξεκινάει με 80 ή 81: "Έχεις δεδομένα ώρες: λεπτά" (δηλ. "Τα δεδομένα 19:04")
  * Transmitter serial starting with 8G or 8H: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got now raw 19:04")

.. εικόνα:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip+ PhoneServiceState

General troubleshooting
--------------------------------------------------
General Troubleshooting for CGMs can be found `here <./GeneralCGMRecommendation.html#Troubleshooting>`_.

Νέος πομπός με αισθητήρα λειτουργίας που λειτουργούσε
--------------------------------------------------
Εάν συμβεί να αλλάξετε τον πομπό κατά τη διάρκεια μιας περιόδου λειτουργίας του αισθητήρα, μπορεί να προσπαθήσετε να αφαιρέσετε τον πομπό χωρίς να καταστρέψετε τη βάση του αισθητήρα. Ένα βίντεο μπορεί να βρεθεί στο `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.


