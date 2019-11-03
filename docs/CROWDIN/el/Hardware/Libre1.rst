Freestyle Libre 1
******************

Για να χρησιμοποιήσετε το Libre ως CGM που παίρνει νέες τιμές BG κάθε 5 λεπτά πρέπει πρώτα να αγοράσετε έναν προσαρμογέα NFC σε Bluetooth όπως:

* MiaoMiao-Αναγνώστης " https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blukon Nightrider `https://www.ambrosiasys.com/howit <https://www.ambrosiasys.com/howit>`_
* BlueReader `https://bluetoolz.de/blueorder/#home <https://bluetoolz.de/blueorder/#home>`_
* Sony Smartwatch 3 (SWR50) als Auslesetool `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

Μέχρι τώρα, χρησιμοποιώντας το Libre 1 ως πηγή BG, δεν μπορείτε να ενεργοποιήσετε το "πάντα ενεργοποιημένο SMB" και το "ενεργοποιημένο SMB μετά τους υδατάνθρακες" μέσα στον αλγόριθμο SMB. Οι τιμές BG του Libre 1 δεν είναι αρκετά ομαλές ώστε να το χρησιμοποιείτε με ασφάλεια. Δείτε " Εξομάλυνση δεδομένων της γλυκόζης του αίματος <../Χρήση/Smoothing-Blood-Glucose-Data-in-xDrip.md>`_ για περισσότερες λεπτομέρειες.

Εάν χρησιμοποιείτε το xdrip
===================
Εάν δεν έχετε ήδη ρυθμίσει, κάντε λήψη του xdrip και ακολουθήστε τις οδηγίες στο `LimiTTEer <https://github.com/JoernL/LimiTTer>`_,  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_ or `BlueReader <https://unendlichkeit.net/wordpress/?p=680&lang=en>`_ (`Hardware <https://bluetoolz.de/wordpress/>`_).
* Στο xdrip, μεταβείτε στις Ρυθμίσεις> Συμβατότητα Interapp> Δυνατότητα τοπικής μετάδοσης δεδομένων και επιλέξτε ΕΝΕΡΓΟΠΟΊΗΣΗ.
* Στο xdrip πηγαίνετε στο Ρυθμίσεις> Συμβατότητα Interapp> Αποδοχή θεραπειών και επιλέξτε OFF.
* Εάν θέλετε να μπορείτε να χρησιμοποιήσετε το AndroidAPS για τη βαθμονόμηση, στη συνέχεια στο xdrip μεταβείτε στις Ρυθμίσεις> Συμβατότητα Interapp> Αποδοχή βαθμονομίσεων και επιλέξτε ΕΝΕΡΓΟΠΟΊΗΣΗ.  Ενδέχεται επίσης να θέλετε να ελέγξετε τις επιλογές στις Ρυθμίσεις> Λιγότερες κοινές ρυθμίσεις> Ρυθμίσεις βελτιωμένης βαθμονόμησης.
* Επιλέξτε xdrip στο Configbuilder ( είναι ρύθμιση στο androidAPS).
* Για τις ρυθμίσεις στο xDrip + με στιγμιότυπα οθόνης δείτε τη σελίδα ρυθμίσεων xDrip + </ Configuration / xdrip.html> `__. Υπάρχει ένα μέρος για τις βασικές ρυθμίσεις xDrip + και για τις ρυθμίσεις Freestyle Libre xDrip +.
Αν το AAPS δεν λαμβάνει τιμές BG όταν το τηλέφωνο βρίσκεται σε κατάσταση λειτουργίας αεροπλάνου, χρησιμοποιήστε Προσδιορισμός δέκτη όπως περιγράφεται στη[ σελίδα ρυθμίσεων xDrip](../Configuration/xdrip.html).

Εάν χρησιμοποιείτε το Glimp
==================
Εάν δεν το έχετε ήδη εγκαταστήσει, κάντε λήψη του Glimp και ακολουθήστε τις οδηγίες στο <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>.
* Επιλέξτε το Glimp στο Configbuilder (ρύθμιση στο AndroidAPS).
