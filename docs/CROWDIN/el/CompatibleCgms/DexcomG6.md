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
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
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

(DexcomG6-notification-reader)=
## If using G6 or ONE with the Notification Reader

The official Dexcom G6 or ONE app stays connected to the transmitter. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G6 and ONE apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to BYODA or xDrip, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.

### Set up the Dexcom app

-   Keep the Dexcom app installed and connected to the transmitter.
-   Make sure the Dexcom app shows the current glucose value in its notification. Οι ειδοποιήσεις της πρέπει να μένουν ορατές: μην τις κάνετε σίγαση και μην τις κρύβετε.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Διαμόρφωση στο AAPS

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Μετά επιστρέψτε στην οθόνη πρόσβασης στις ειδοποιήσεις και επιτρέψτε την.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## Αντιμετώπιση προβλημάτων G6 και ONE

### Ειδική αντιμετώπιση προβλημάτων για Dexcom G6/ONE

-   Κάντε κύλιση προς τα κάτω στο **Troubleshooting** [εδώ](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Γενική αντιμετώπιση προβλημάτων

Γενική αντιμετώπιση προβλημάτων για CGM θα βρείτε [εδώ](#general-cgm-troubleshooting).

### Νέος πομπός με αισθητήρα σε λειτουργία

Αν αλλάξετε πομπό κατά τη διάρκεια μιας περιόδου λειτουργίας του αισθητήρα, μπορείτε να δοκιμάσετε να αφαιρέσετε τον πομπό χωρίς να καταστρέψετε τη βάση του αισθητήρα. Ένα βίντεο θα βρείτε [εδώ](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Αν επιλέξετε [αυτή τη λύση](https://youtu.be/tx-kTsrkNUM), πρέπει να προσέχετε να μην [καταστρέψετε τις επαφές του αισθητήρα](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) με τη λωρίδα.
