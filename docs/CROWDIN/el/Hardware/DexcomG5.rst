Dexcom G5
**************************************************
Εάν χρησιμοποιείτε το G5 με xdrip+
==================================================
* Εάν δεν έχετε ήδη ρυθμίσει, κάντε λήψη του `xdrip <https://github.com/NightscoutFoundation/xDrip>` και ακολουθήστε τις οδηγίες στο nightcout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_.
* In xdrip go to Settings > Inter-app settings > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Inter-app settings > Accept Treatments and select OFF.
* Εάν θέλετε να μπορείτε να χρησιμοποιήσετε το AndroidAPS για τη βαθμονόμηση, στη συνέχεια στο xdrip μεταβείτε στις Ρυθμίσεις> Συμβατότητα Interapp> Αποδοχή βαθμονομίσεων και επιλέξτε ΕΝΕΡΓΟΠΟΊΗΣΗ.  Ενδέχεται επίσης να θέλετε να ελέγξετε τις επιλογές στις Ρυθμίσεις> Λιγότερες κοινές ρυθμίσεις> Ρυθμίσεις βελτιωμένης βαθμονόμησης.
* Επιλέξτε xdrip στο Configbuilder ( είναι ρύθμιση στο androidAPS).
* If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.md>`_ .

Εάν χρησιμοποιείτε το G5 με την εφαρμογή patched Dexcom
==================================================
* Κάντε λήψη του apk από <https://github.com/dexcomapp/dexcomapp> https://github.com/dexcomapp/dexcomapp και επιλέξτε την έκδοση που ταιριάζει στις ανάγκες σας (mg / dl ή mmol / l, G5).

  * Φάκελος 2.3 είναι για τους χρήστες του AndroidAPS 2.3, φάκελος 2.4 για τους χρήστες του AAPS 2.5.
  * Ανοίξτε https://play.google.com/store/search?q=dexcom%20g5 στον υπολογιστή σας. Η περιοχή θα είναι ορατή στη διεύθυνση URL.

   .. εικόνα:: ../images/DexcomG5regionURL.PNG
     :alt: Περιοχή Dexcom G5 URL

* Απενεργοποιήστε τον αισθητήρα και καταργήστε την εγκατάσταση της αρχικής εφαρμογής Dexcom, εάν δεν το έχετε κάνει ήδη.
* Εγκαταστήστε το κατεβασμένο apk
* Ξεκινήστε τον αισθητήρα
* Επιλέξτε το DexcomG App (patched) στο μενού διαμόρφωσης (ρύθμιση στο AndroidAPS).
* Αν θέλετε να χρησιμοποιήσετε συναγερμούς xDrip μέσω τοπικής εκπομπής: στο μενού hamburger xDrip> ρυθμίσεις> πηγή δεδομένων υλικού> 640G / EverSense.
