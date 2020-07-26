Freestyle Libre 1
**************************************************

Για να χρησιμοποιήσετε το Libre ως CGM που παίρνει νέες τιμές BG κάθε 5 λεπτά πρέπει πρώτα να αγοράσετε έναν προσαρμογέα NFC σε Bluetooth όπως:

* MiaoMiao Reader (version 1 or 2) `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blucon Nightrider `https://www.ambrosiasys.com/our-products/blucon/ <https://www.ambrosiasys.com/our-products/blucon/>`_
* Bubble `https://bubbleshop.eu/ <https://bubbleshop.eu/>`_

Additionally it is possible to use a specific watch, the Sony Smartwatch 3 which has an NFC chip which can be enabled and can be used as a NFC collector. However the custom NFC to Bluetooth adapters listed above offer a less complex solution and would be used by the majority of those wanting to use their Libre 1 as a CGM.
* Sony Smartwatch 3 (SWR50) `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

As it currently stands, if using Libre 1 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within the SMB algorithm. Οι τιμές BG του Libre 1 δεν είναι αρκετά ομαλές ώστε να το χρησιμοποιείτε με ασφάλεια. Δείτε " Εξομάλυνση δεδομένων της γλυκόζης του αίματος <../Χρήση/Smoothing-Blood-Glucose-Data-in-xDrip.md>`_ για περισσότερες λεπτομέρειες.

If using xDrip+
==================================================
* If not already set up then download xDrip+ and follow instructions on `LimiTTEer <https://github.com/JoernL/LimiTTer>`_,  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_ or `BlueReader <https://unendlichkeit.net/wordpress/?p=680&lang=en>`_ (`Hardware <https://bluetoolz.de/wordpress/>`_).
* In xDrip+ go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xDrip+ go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
* If you want to be able to use AndroidAPS to calibrate then in xDrip+ go to Settings > Interapp Compatibility > Accept Calibrations and select ON.  Ενδέχεται επίσης να θέλετε να ελέγξετε τις επιλογές στις Ρυθμίσεις> Λιγότερες κοινές ρυθμίσεις> Ρυθμίσεις βελτιωμένης βαθμονόμησης.
* Select xDrip+ in ConfigBuilder (setting in AndroidAPS).
* Για τις ρυθμίσεις στο xDrip + με στιγμιότυπα οθόνης δείτε τη σελίδα ρυθμίσεων xDrip + </ Configuration / xdrip.html> `__. Υπάρχει ένα μέρος για τις βασικές ρυθμίσεις xDrip + και για τις ρυθμίσεις Freestyle Libre xDrip +.
Αν το AAPS δεν λαμβάνει τιμές BG όταν το τηλέφωνο βρίσκεται σε κατάσταση λειτουργίας αεροπλάνου, χρησιμοποιήστε Προσδιορισμός δέκτη όπως περιγράφεται στη[ σελίδα ρυθμίσεων xDrip](../Configuration/xdrip.html).

Εάν χρησιμοποιείτε το Glimp
==================================================
* You will need Glimp version 4.15.57 or newer. Older versions are not supported.
Εάν δεν το έχετε ήδη εγκαταστήσει, κάντε λήψη του Glimp και ακολουθήστε τις οδηγίες στο <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>.
* Επιλέξτε το Glimp στο Configbuilder (ρύθμιση στο AndroidAPS).
