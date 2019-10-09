Freestyle Libre 2
*********************

Freestyle Libre 2 sensors can provide BG values to AndroidAPS every 5 minutes. As they send them directly via bluetooth to your phone, you won't need to buy a bluetooth adapter like MiaoMiao anymore. Until now, using Libre 2 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within SMB algorithm. The BG values of Libre 2 are not smooth enough to use it safely. See `Smoothing blood glucose data <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ for more details.

Step 1: Build your own patched Librelink-App
==============
* Build your own patched Librelink app following `these instructions <https://github.com/user987654321resu/Libre2-patched-App>`_.
* Install on your phone and start a new sensor with your patched app.

Step 2: Install and configure xDrip+ app
==============
* If not already set up then download xdrip app and install one of the latest nightly builts from `here <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* Στο xdrip, μεταβείτε στις Ρυθμίσεις> Συμβατότητα Interapp> Δυνατότητα τοπικής μετάδοσης δεδομένων και επιλέξτε ΕΝΕΡΓΟΠΟΊΗΣΗ.
* Στο xdrip πηγαίνετε στο Ρυθμίσεις> Συμβατότητα Interapp> Αποδοχή θεραπειών και επιλέξτε OFF.
* Εάν θέλετε να μπορείτε να χρησιμοποιήσετε το AndroidAPS για τη βαθμονόμηση, στη συνέχεια στο xdrip μεταβείτε στις Ρυθμίσεις> Συμβατότητα Interapp> Αποδοχή βαθμονομίσεων και επιλέξτε ΕΝΕΡΓΟΠΟΊΗΣΗ.  Ενδέχεται επίσης να θέλετε να ελέγξετε τις επιλογές στις Ρυθμίσεις> Λιγότερες κοινές ρυθμίσεις> Ρυθμίσεις βελτιωμένης βαθμονόμησης.
* Επιλέξτε xdrip στο Configbuilder ( είναι ρύθμιση στο androidAPS).
* For settings in xDrip+ with screenshots see `xDrip+ settings page <../Configuration/xdrip.md>`__. There is a part for basic xDrip+ settings and for Freestyle Libre xDrip+ settings.

Step 3: Configure AndroidAPS
==============
* In AndroidAPS go to Config Builder > BG Source and check 'xDrip+' 
* If AndroidAPS does not receive BG values when phone is in airplane mode, use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html>`_.
