# Εξομάλυνση των δεδομένων γλυκόζης στο αίμα

If BG data is jumpy/noisy, AAPS may dose insulin incorrectly resulting in high or low BG. For this reason it’s important to disable the loop until the problem is resolved. Depending on your CGM such issues may be due to the CGM’s configuration or sensor problems/site issues. Some features like 'Enable SMB always' and 'Enable SMB after carbs' can only be used with a nice-filtering BG source.

## Εφαρμογή Dexcom G5 (patched)

Όταν χρησιμοποιείτε το Dexcom G5 (patched) τα δεδομένα BG σας είναι ομαλά και συνεπή. Δεν υπάρχουν περιορισμοί στη χρήση του SMB.

## xDrip+ με Dexcom G5

Τα αρκετά καλά δεδομένα παρέχονται μόνο αν χρησιμοποιείτε συλλέκτη xDrip G5 'OB1 σε μητρική λειτουργία'.

## xDrip+ με Freestyle Libre

Όταν χρησιμοποιείτε το xDrip + ως πηγή δεδομένων για τις τιμές Freestyle Libre μέχρι τώρα δεν μπορείτε να ενεργοποιήσετε την επιλογή "Ενεργοποίηση SMB πάντα" και "Ενεργοποίηση SMB μετά από υδατάνθρακες" στο SMB, επειδή οι τιμές BG δεν είναι αρκετά ομαλές. Εκτός από αυτό, υπάρχουν μερικά πράγματα που μπορείτε να κάνετε για να μειώσετε το θόρυβο στα δεδομένα.

** Ομαλός θόρυβος αισθητήρα. ** Στην xDrip + Ρυθμίσεις> xDrip + Ρυθμίσεις οθόνης βεβαιωθείτε ότι ο Smooth Sensor Noise είναι ενεργοποιημένος. Αυτό προσπαθεί να εφαρμόσει εξομάλυνση στα θορυβώδη δεδομένα.

** Ο θόρυβος του Smooth Sensor (Υπερευαισθησία). ** Αν εξακολουθείτε να βλέπετε θορυβώδη δεδομένα στο xDrip +, μπορείτε να εφαρμόσετε πιο επιθετική εξομάλυνση χρησιμοποιώντας τη ρύθμιση Smooth Sensor Noise (Υπερευαισθησία). Αυτό θα προσπαθήσει να εφαρμόσει εξομάλυνση ακόμη και σε πολύ χαμηλά επίπεδα ανιχνευμένου θορύβου. Για να το κάνετε αυτό, πρώτα [ ενεργοποιήστε τη λειτουργία μηχανικής στο xDrip (enable engineering mode) ](https://github.com/MilosKozak/AndroidAPS/wiki/Enabling-Engineering-Mode-in-xDrip). Στη συνέχεια, μεταβείτε στις Ρυθμίσεις> xDrip + Ρυθμίσεις οθόνης και ενεργοποιήστε τον Smooth Sensor Noise (Υπερευαισθησία).