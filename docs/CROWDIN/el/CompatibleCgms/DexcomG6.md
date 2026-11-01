# Dexcom G6 και ONE

## Πρώτα τα βασικά

-   Ακολουθήστε τις γενικές συστάσεις για την υγιεινή του CGM και την τοποθέτηση του αισθητήρα [εδώ](../CompatibleCgms/GeneralCGMRecommendation.md).

## Γενικές συμβουλές για κύκλωμα με G6 και ONE

- Οι νεότεροι πομποί ονομάζονται Firefly. Οι αισθητήρες δεν μπορούν να επανεκκινηθούν χωρίς να αφαιρεθεί ο πομπός, ο οποίος δεν μπορεί να γίνει reset. Επίσης δεν παράγουν ακατέργαστα (raw) δεδομένα.

- Αν κάνετε επανεκκίνηση αισθητήρων, να είστε έτοιμοι να κάνετε βαθμονόμηση και να παρακολουθείτε τις αποκλίσεις.

- Η προ-εμβάπτιση του G6/ONE με εργοστασιακή βαθμονόμηση πιθανόν να δώσει αποκλίσεις στα αποτελέσματα. Αν κάνετε προ-εμβάπτιση, τότε για να έχετε τα καλύτερα αποτελέσματα, πιθανόν να χρειαστεί να βαθμονομήσετε τον αισθητήρα.

Διαβάστε περισσότερα στο [άρθρο](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) του Tim Street στο [www.diabettech.com](https://www.diabettech.com).

## Αν χρησιμοποιείτε το G6 ή το ONE με το xDrip

- Αν δεν το έχετε ήδη ρυθμίσει, κατεβάστε το [xDrip](https://github.com/NightscoutFoundation/xDrip) και προσαρμόστε τις ρυθμίσεις του σύμφωνα με τη [σελίδα ρυθμίσεων του xDrip](../CompatibleCgms/xDrip.md).
- Επιλέξτε xDrip στη [**Διαμόρφωση → Πηγή BG**](#Config-Builder-bg-source).
- Οι πομποί Dexcom G6 και ONE μπορούν να συνδεθούν ταυτόχρονα με τον δέκτη Dexcom (ή εναλλακτικά με την αντλία t:slim) και με μία εφαρμογή στο τηλέφωνό σας.
- Όταν χρησιμοποιείτε το xDrip ως δέκτη, απεγκαταστήστε πρώτα την εφαρμογή Dexcom. **Δεν μπορείτε να συνδέσετε το xDrip και την εφαρμογή Dexcom με τον πομπό ταυτόχρονα!**
- Αν χρειάζεστε το Clarity και θέλετε να έχετε τους συναγερμούς του xDrip, χρησιμοποιήστε το [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (μόνο G6) με τοπική μετάδοση (local broadcast) στο xDrip.
- Μπορείτε επίσης να χρησιμοποιήσετε το xDrip ως συνοδευτική εφαρμογή (companion app) της επίσημης εφαρμογής Dexcom, αλλά μπορεί να έχετε καθυστερήσεις στις τιμές BG.
- Το xDrip χρησιμοποιεί πάντα τον [εγγενή αλγόριθμο](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) του πομπού με τους τρέχοντες πομπούς. Δεν υπάρχει λόγος να τον απενεργοποιήσετε. Οι [προληπτικές επανεκκινήσεις](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) λειτουργούν μόνο σε παλιούς πομπούς (firmware 1.6.5.25 ή παλαιότερο), όπου χρειάζονται για να μη σταματήσει ο αισθητήρας μετά από 10 ημέρες. Οι νεότεροι πομποί (Firefly) τις αγνοούν. Δείτε το [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) πριν δοκιμάσετε οποιαδήποτε επανεκκίνηση.
- Όλα όσα αφορούν τον ίδιο τον αισθητήρα και τον πομπό περιγράφονται στη [σελίδα Dexcom του xDrip](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Αν χρησιμοποιείτε το G6 με το Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Το Dexcom BYODA είναι πλέον μια πολύ παλιά έκδοση της εφαρμογής και δεν μπορεί να ενημερωθεί.
```

-   Το [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) υποστηρίζει τοπική μετάδοση (local broadcast) προς το AAPS και/ή το xDrip

-   Αυτή η εφαρμογή σας επιτρέπει να χρησιμοποιήσετε το Dexcom G6 με οποιοδήποτε Android smartphone.
-   Απεγκαταστήστε την αρχική εφαρμογή Dexcom ή την τροποποιημένη εφαρμογή Dexcom, αν χρησιμοποιούσατε μία από αυτές πριν (**μη σταματήσετε** τον αισθητήρα που λειτουργεί τώρα)
-   Εγκαταστήστε το apk που κατεβάσατε
-   Εισαγάγετε τον κωδικό του αισθητήρα και τον σειριακό αριθμό του πομπού στην τροποποιημένη εφαρμογή.
-   Στις ρυθμίσεις του τηλεφώνου πηγαίνετε στο apps > Dexcom G6 > permissions > additional permissions και πατήστε 'Access Dexcom app'.
-   After a short time BYODA should pick up the transmitter signal.

### Ρυθμίσεις στο AAPS

-   Επιλέξτε **BYODA** στη [**Διαμόρφωση → Πηγή BG**](#Config-Builder-bg-source).

-   Αν δεν λαμβάνετε τιμές, επιλέξτε οποιαδήποτε άλλη πηγή δεδομένων και μετά επιλέξτε ξανά το **BYODA**, ώστε να ζητηθούν τα δικαιώματα για τη σύνδεση μεταξύ του AAPS και της μετάδοσης (broadcast) του BYODA.

### Ρυθμίσεις για το xDrip

-   Επιλέξτε '640G/Eversense' ως πηγή δεδομένων.
-   Η εντολή 'start sensor' πρέπει να εκτελεστεί στο xDrip για να λαμβάνετε τιμές. Αυτό δεν θα επηρεάσει τον τρέχοντα αισθητήρα σας, που ελέγχεται από το Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Αντιμετώπιση προβλημάτων G6 και ONE

### Ειδική αντιμετώπιση προβλημάτων για Dexcom G6/ONE

-   Κάντε κύλιση προς τα κάτω στο **Troubleshooting** [εδώ](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Γενική αντιμετώπιση προβλημάτων

Γενική αντιμετώπιση προβλημάτων για CGM θα βρείτε [εδώ](#general-cgm-troubleshooting).

### Νέος πομπός με αισθητήρα σε λειτουργία

Αν αλλάξετε πομπό κατά τη διάρκεια μιας περιόδου λειτουργίας του αισθητήρα, μπορείτε να δοκιμάσετε να αφαιρέσετε τον πομπό χωρίς να καταστρέψετε τη βάση του αισθητήρα. Ένα βίντεο θα βρείτε [εδώ](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Αν επιλέξετε [αυτή τη λύση](https://youtu.be/tx-kTsrkNUM), πρέπει να προσέχετε να μην [καταστρέψετε τις επαφές του αισθητήρα](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) με τη λωρίδα.
