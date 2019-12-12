Για χρήστες του Eversense
**************************************************
Ο ευκολότερος τρόπος για να χρησιμοποιήσετε το Eversense με το AndroidAPS είναι να εγκαταστήσετε την τροποποιημένη εφαρμογή Eversense <https://github.com/BernhardRo/Esel/blob/master/apk/eversense_cgm_v1.0.409_com.senseonics.gen12androidapp-patched.apk> (αφού αφαιρέσετε πρώτα την αρχική).

**Προειδοποίηση: με την κατάργηση της εγκατάστασης της παλιάς εφαρμογής, τα τοπικά ιστορικά δεδομένα που είναι παλαιότερα από μία εβδομάδα θα χαθούν!**

Για να λάβετε τελικά τα δεδομένα σας στο AndroidAPS, πρέπει να εγκαταστήσετε το `ESEL<https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk> και να ενεργοποιήσετε την επιλογή "Αποστολή σε AAPS και xDrip" στο ESEL και "MM640g" ως πηγή BG στο `Configuration Builder <../ Configuration / Config-Builder.html>` _ στο AndroidAPS. Δεδομένου ότι τα δεδομένα BG από το Eversense μπορεί να είναι θορυβώδη μερικές φορές, καλό είναι να ενεργοποιείτε τα "Smooth Data" στο ESEL, κάτι που είναι καλύτερο από το να επιτρέπετε "Να χρησιμοποιείτε πάντα το σύντομο μέσο delta αντί για το απλό delta" στο AAPS.

Μπορείτε να βρείτε μια άλλη οδηγία για τη χρήση του xDrip με Eversense εδώ <https://github.com/BernhardRo/Esel/tree/master/apk>.
