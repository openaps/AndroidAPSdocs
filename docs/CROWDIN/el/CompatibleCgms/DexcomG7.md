# Dexcom G7, ONE+ και Stelo


## Βασικά πριν ξεκινήσετε

Σημαντικό: σε αντίθεση με το G6, τα συστήματα G7, ONE+ και Stelo δεν εξομαλύνουν τις τιμές, ούτε στην εφαρμογή ούτε στον δέκτη. Περισσότερες λεπτομέρειες [εδώ](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Διαβάστε τις προτάσεις για τη [μέθοδο εξομάλυνσης](../CompatibleCgms/SmoothingBloodGlucoseData.md) που πρέπει να χρησιμοποιείτε για Dexcom G7/ONE+/Stelo
```

## 1. xDrip (απευθείας σύνδεση με G7, ONE+ ή Stelo)

- Το xDrip συνδέεται το ίδιο με τον αισθητήρα: απεγκαταστήστε την εφαρμογή Dexcom, γιατί μόνο μία εφαρμογή μπορεί να συνδεθεί με τον αισθητήρα. Για να κρατήσετε την εφαρμογή Dexcom, χρησιμοποιήστε αντί γι' αυτό την [xDrip Companion App](#DexcomG7-xdrip-companion-app).
- Ακολουθήστε τις οδηγίες εδώ: [xDrip G7, ONE+ και Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). Απαιτείται πρόσφατη έκδοση του xDrip. Δείτε τη συνδεδεμένη σελίδα για την ελάχιστη έκδοση.
- Επιλέξτε xDrip στη [**Διαμόρφωση → Πηγή BG**](#Config-Builder-bg-source).

- Προσαρμόστε τις ρυθμίσεις του xDrip σύμφωνα με τις εξηγήσεις στη σελίδα ρυθμίσεων του xDrip [Ρυθμίσεις xDrip](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (μόνο G7)

```{admonition} Old app version
:class: warning
Το Dexcom BYODA είναι πλέον μια πολύ παλιά έκδοση της εφαρμογής και δεν μπορεί να ενημερωθεί. Δεν είναι διαθέσιμο για ONE+ ή Stelo.
```

-   Το [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) υποστηρίζει τοπική μετάδοση (local broadcast) στο AAPS

-   Αυτή η εφαρμογή σας επιτρέπει να χρησιμοποιείτε το Dexcom G7 με οποιοδήποτε smartphone Android.
-   Απεγκαταστήστε την αρχική εφαρμογή Dexcom
-   Εγκαταστήστε το apk που κατεβάσατε
-   Εισαγάγετε τον κωδικό αισθητήρα στην τροποποιημένη εφαρμογή
-   After a short time BYODA should pick up the sensor signal.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App (G7, ONE+ και Stelo)

Η επίσημη εφαρμογή Dexcom μένει συνδεδεμένη με τον αισθητήρα. Το xDrip διαβάζει τις τιμές γλυκόζης από τις ειδοποιήσεις της εφαρμογής Dexcom και τις στέλνει στο **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** does not consider xDrip in Companion App mode a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs are not allowed all the time.

To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG7-notification-reader).
```

### Ανάγνωση των ειδοποιήσεων της εφαρμογής Dexcom

- Κρατήστε την εφαρμογή Dexcom εγκατεστημένη και συνδεδεμένη με τον αισθητήρα. Οι ειδοποιήσεις της πρέπει να μένουν ορατές: μην τις κάνετε σίγαση και μην τις κρύβετε.
- Κατεβάστε και εγκαταστήστε το [xDrip](https://github.com/NightscoutFoundation/xDrip). Χρησιμοποιήστε στο xDrip τις ίδιες μονάδες γλυκόζης με την εφαρμογή Dexcom.
- Στο xDrip, πηγαίνετε στο **Settings** > **Hardware Data Source** και επιλέξτε **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- Το xDrip ζητά άδεια για να διαβάζει τις ειδοποιήσεις. Πατήστε **OK**, μετά επιλέξτε **xDrip** στη λίστα και ενεργοποιήστε την επιλογή **Allow notification access** (να επιτρέπεται η πρόσβαση στις ειδοποιήσεις).

  ![Λίστα πρόσβασης στις ειδοποιήσεις](../images/xDrip_Companion_NotificationAccess1.png)

- Αν η επιλογή **Allow notification access** είναι γκρι (*Controlled by Restricted Setting*), το Android την μπλοκάρει, γιατί το xDrip δεν εγκαταστάθηκε από το Play Store:

  ![Πρόσβαση στις ειδοποιήσεις ελεγχόμενη από περιορισμένη ρύθμιση](../images/xDrip_Companion_Restricted.png)

  Ανοίξτε τις πληροφορίες της εφαρμογής xDrip (πατήστε παρατεταμένα το εικονίδιο του xDrip > **App info**), πατήστε το μενού με τις τρεις τελείες πάνω δεξιά και επιλέξτε **Allow restricted settings** (να επιτρέπονται οι περιορισμένες ρυθμίσεις). Μετά επιστρέψτε στην οθόνη πρόσβασης στις ειδοποιήσεις και επιτρέψτε την.

  ![Πληροφορίες εφαρμογής: να επιτρέπονται οι περιορισμένες ρυθμίσεις](../images/xDrip_Companion_AllowRestricted.png)

  ![Επιτρέπεται η πρόσβαση στις ειδοποιήσεις για το xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- Οι μετρήσεις εμφανίζονται στο xDrip όταν η εφαρμογή Dexcom δείχνει νέα τιμή. Αν δεν εμφανίζεται τίποτα, ίσως χρειαστεί να ξεκινήσετε έναν αισθητήρα στο xDrip: αυτό δεν επηρεάζει τον πραγματικό αισθητήρα. Το Stelo δίνει μία μέτρηση κάθε 15 λεπτά σε αυτή τη λειτουργία.

### Companion Bluetooth (G7)

Όταν η εφαρμογή Dexcom είναι συνδεδεμένη με αισθητήρα G7, το xDrip μπορεί επίσης να ακούει μέσω Bluetooth τις μετρήσεις που στέλνει ο αισθητήρας στην εφαρμογή Dexcom. Το xDrip δεν κάνει σύζευξη με τον αισθητήρα και δεν χρειάζεται να εισαγάγετε τον κωδικό του αισθητήρα: η εφαρμογή Dexcom κρατά τον έλεγχο.

Με το **Companion Bluetooth**, το xDrip παίρνει από τον αισθητήρα την ακριβή ώρα και την τάση κάθε μέτρησης, αντί για την ώρα που εμφανίστηκε η ειδοποίηση, και συμπληρώνει τα κενά όταν το τηλέφωνο ήταν εκτός εμβέλειας (backfill).

- Στο xDrip, πηγαίνετε στο **Settings** > **Less common settings** > **Bluetooth Settings** και ενεργοποιήστε το **Companion Bluetooth**.

  ![Ρυθμίσεις Bluetooth του xDrip: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- Αυτό δεν λειτουργεί σε όλα τα τηλέφωνα και σε όλες τις εκδόσεις Android. Απενεργοποιήστε το αν δείτε προβλήματα.
- Αν ένας παλιός αισθητήρας Dexcom είναι ακόμα στη λίστα Bluetooth του τηλεφώνου, το xDrip μπορεί να ακούει τον λάθος αισθητήρα: στο Android, στις **Ρυθμίσεις** > **Συνδεδεμένες συσκευές**, διαγράψτε τους αισθητήρες που δεν χρησιμοποιείτε πια.
- Το Companion Bluetooth είναι φτιαγμένο για το G7. Με ONE+ και Stelo, βασιστείτε στις ειδοποιήσεις.

### Διαμόρφωση στο AAPS

- Επιλέξτε xDrip στη [**Διαμόρφωση → Πηγή BG**](#Config-Builder-bg-source).
- Προσαρμόστε τις ρυθμίσεις του xDrip σύμφωνα με τις εξηγήσεις στη σελίδα ρυθμίσεων του xDrip [Ρυθμίσεις xDrip](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 και ONE+)

Απαιτείται έκδοση 9.0 ή νεότερη

- Απενεργοποιήστε την εφαρμογή που ήταν πριν συνδεδεμένη με τον αισθητήρα: απεγκαταστήστε την εφαρμογή ή χρησιμοποιήστε «Αναγκαστική διακοπή» ("Force Stop"). Απενεργοποιήστε την άδεια «Συσκευές σε κοντινή απόσταση» ("Nearby Devices") στις ρυθμίσεις της εφαρμογής. Περιορίστε τη χρήση μπαταρίας της εφαρμογής.

- Διαγράψτε τον αισθητήρα από τις ρυθμίσεις Bluetooth: στις ρυθμίσεις του Android, βρείτε τον αισθητήρα στις συζευγμένες συσκευές και επιλέξτε «Διαγραφή» ("Forget"). Τα ονόματα των αισθητήρων Dexcom G7 ξεκινούν με DXCM.

- Αποφύγετε παρεμβολές από άλλους αισθητήρες: κρατήστε τους παλιούς αισθητήρες Dexcom μακριά από την εμβέλεια του Bluetooth.

- Συνδέστε τον αισθητήρα G7 με το Juggluco: ανοίξτε το Juggluco → αριστερό μενού → Photo. Σαρώστε τον κωδικό data matrix στον εφαρμοστή του αισθητήρα G7. Περιμένετε έως 5 λεπτά μέχρι το Juggluco να βρει τον αισθητήρα.

- Απαιτήσεις σύζευξης: αποδεχτείτε τη σύζευξη του αισθητήρα με το Juggluco. Βεβαιωθείτε ότι η οθόνη δεν είναι κλειδωμένη κατά τη σύζευξη. Αν η σύζευξη αποτύχει, περιμένετε 5 λεπτά πριν δοκιμάσετε ξανά.

- Εξαίρεση: τα ρολόγια Wear OS μπορούν να κάνουν σύζευξη χωρίς να πατήσετε κουμπί αποδοχής.

(DexcomG7-notification-reader)=

## 5. Notification Reader (G7, ONE+ and Stelo)

Η επίσημη εφαρμογή Dexcom μένει συνδεδεμένη με τον αισθητήρα. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G7, ONE+ and Stelo apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to the other methods on this page, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.
- Stelo gives a reading every 15 minutes.

### Set up the Dexcom app

- Κρατήστε την εφαρμογή Dexcom εγκατεστημένη και συνδεδεμένη με τον αισθητήρα.
- Make sure the Dexcom app shows the current glucose value in its notification. Οι ειδοποιήσεις της πρέπει να μένουν ορατές: μην τις κάνετε σίγαση και μην τις κρύβετε.
- Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Διαμόρφωση στο AAPS

- Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

  ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

- Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

  ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

- Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

  ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

  Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

  ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

- If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Μετά επιστρέψτε στην οθόνη πρόσβασης στις ειδοποιήσεις και επιτρέψτε την.
- Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```
