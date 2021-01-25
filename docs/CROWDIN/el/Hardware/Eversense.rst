Για χρήστες του Eversense
**************************************************
The easiest way to use Eversense with AndroidAPS is to install the non-US modified `Eversense app <https://github.com/BernhardRo/Esel/blob/master/apk/Eversense_CGM_v1.0.410-patched.apk>`_ (and unistall the original one first).

**Προειδοποίηση: με την κατάργηση της εγκατάστασης της παλιάς εφαρμογής, τα τοπικά ιστορικά δεδομένα που είναι παλαιότερα από μία εβδομάδα θα χαθούν!**

Για να λάβετε τελικά τα δεδομένα σας στο AndroidAPS, πρέπει να εγκαταστήσετε το `ESEL<https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk>`_ και να ενεργοποιήσετε την επιλογή "Αποστολή σε AAPS και xDrip" στο ESEL και "MM640g" ως πηγή BG στο `Configuration Builder <../ Configuration / Config-Builder.html>`_ στο AndroidAPS. Δεδομένου ότι τα δεδομένα BG από το Eversense μπορεί να είναι θορυβώδη μερικές φορές, καλό είναι να ενεργοποιείτε τα "Smooth Data" στο ESEL, κάτι που είναι καλύτερο από το να επιτρέπετε "Να χρησιμοποιείτε πάντα το σύντομο μέσο delta αντί για το απλό delta" στο AAPS.

You can find  all APKs including the one for the US and another instruction for using xDrip with an Eversense `here <https://github.com/BernhardRo/Esel/tree/master/apk>`_.
