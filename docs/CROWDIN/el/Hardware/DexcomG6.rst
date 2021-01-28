Dexcom G6
**************************************************
Πρώτα τα βασικά
==================================================

* Follow general CGM hygiene and setting sensor recommendation `here <../Hardware/GeneralCGMRecommendation.html>`__.
* Για πομπούς G6 που κατασκευάζονται μετά το πέρας / τέλος του 2018, βεβαιωθείτε ότι έχετε χρησιμοποιήσει μία από τις πιο πρόσφατες εκδόσεις xDrip + <https://github.com/NightscoutFoundation/xDrip/releases> _ _. Αυτοί οι πομποί έχουν ένα νέο firmware και η τελευταία σταθερή έκδοση του xDrip + (2019/01/10) δεν μπορεί να το αντιμετωπίσει.

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
* If you need Clarity and want to profit from xDrip+ alarms use the `patched Dexcom app <../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_ with local broadcast to xDrip+.
* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* Select xDrip+ in ConfigBuilder (setting in AndroidAPS).
* Προσαρμογή των ρυθμίσεων στο xDrip + σύμφωνα με τη σελίδα ρυθμίσεων xDrip + <../ Configuration / xdrip.html> `_
* If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.html>`_.

Εάν χρησιμοποιείτε το G6 με την εφαρμογή patched Dexcom
==================================================
* Κάντε λήψη του apk από <https://github.com/dexcomapp/dexcomapp> https://github.com/dexcomapp/dexcomapp και επιλέξτε την έκδοση που ταιριάζει στις ανάγκες σας (mg / dl ή mmol / l, G6).

  * Folder 2.4 for users of the current version, folder 2.3 is only for the outdated AndroidAPS 2.3.
  * Ανοίξτε https://play.google.com/store/search?q=dexcom%20g6 στον υπολογιστή σας. 
  * Click the link to the Dexcom G6 app on the search results page that is displayed.
  * Region will be visible in URL.

   .. εικόνα:: ../images/DexcomG6regionURL.PNG
     :alt: Περιοχή Dexcom G6 URL

* Uninstall the original Dexcom app.
* Εγκαταστήστε το κατεβασμένο apk
* Enter sensor code and transmitter serial no. in patched app.
* After short time patched app should pick-up transmitter signal. (If not you will have to stop sensor and start new one.)
* Επιλέξτε το DexcomG App (patched) στο μενού διαμόρφωσης (ρύθμιση στο AndroidAPS).
* If you want to use xDrip+ alarms via local broadcast: in xDrip+ hamburger menu > settings > hardware data source > 640G /EverSense.
* There is no local broadcast from patched Dexcom app directly to xDrip+. Broadcast has to go through AAPS as described above.

If using G6 with Build Your Own Dexcom App
==================================================
* As of December 2020 `Build Your Own Dexcom App <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>`_ (BYODA)also supports local broadcast to AAPS and/or xDrip+ (not for G5 sensors!)
* This app lets you use your Dexcom G6 with any Android smartphone.
* Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously.
* Εγκαταστήστε το κατεβασμένο apk
* Enter sensor code and transmitter serial no. in patched app.
* In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
* After short time patched app should pick-up transmitter signal. (If not you will have to stop sensor and start new one.)

Settings for AndroidAPS
--------------------------------------------------
* Select 'Dexcom App (patched)' in config builder.
* If you don't recieve any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

Settings for xDrip+
--------------------------------------------------
* Select '640G/Eversense' as data source.
* Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.
   
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

General troubleshoothing
--------------------------------------------------
General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation.html#troubleshooting>`__.

Νέος πομπός με αισθητήρα λειτουργίας που λειτουργούσε
--------------------------------------------------
Εάν συμβεί να αλλάξετε τον πομπό κατά τη διάρκεια μιας περιόδου λειτουργίας του αισθητήρα, μπορεί να προσπαθήσετε να αφαιρέσετε τον πομπό χωρίς να καταστρέψετε τη βάση του αισθητήρα. Ένα βίντεο μπορεί να βρεθεί στο `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.
