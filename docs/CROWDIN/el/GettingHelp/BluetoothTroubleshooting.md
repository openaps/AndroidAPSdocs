(bluetoothtroubleshooting-bluetooth-related-issues)=

# Προβλήματα σχετικά με το Bluetooth

Μερικοί χρήστες έχουν προβλήματα με αποτυχίες ενεργοποίησης του Omnipod DASH, προβλήματα σύνδεσης του Medtrum Nano και άλλα σφάλματα pod που σχετίζονται με το Bluetooth. Πολλά από αυτά τα προβλήματα οφείλονται σε ένα από τα παρακάτω.

Μερικά από αυτά τα προβλήματα πιθανώς αφορούν και άλλες αντλίες ινσουλίνης με Bluetooth. Το Medtrum Nano, όπως και το Omnipod DASH, έχει γνωστά προβλήματα με την άδεια «Συσκευές σε κοντινή απόσταση».

---

(bluetoothtroubleshooting-cannot-start-omnipod-with-android-16)=

## Δεν μπορώ να ξεκινήσω το Omnipod με Android 16
- Android 16 needs at a minimum **AAPS** version 3.3.2.1 for the Omnipod DASH to work correctly, as this version has fixes added to specifically address known problems introduced in Android 16 for Omnipod.

---

(bluetoothtroubleshooting-bluetooth-battery-optimisation)=

## Βελτιστοποίηση μπαταρίας για το Bluetooth

Οι νεότερες εκδόσεις του Android έχουν ενεργοποιημένη τη βελτιστοποίηση μπαταρίας για την εφαρμογή Bluetooth του συστήματος. Αυτό είναι γνωστό ότι προκαλεί προβλήματα σε αντλίες και CGM με Bluetooth.

Αν ακολουθήσατε τον [Οδηγό εγκατάστασης](../SettingUpAaps/SetupWizard.md) και τις ρυθμίσεις της ενότητας [Βελτιστοποίηση μπαταρίας για το Bluetooth](#setup-wizard-bluetooth-battery-optimisation), τότε αυτή η ρύθμιση θα είναι σωστή. Αν όμως ακολουθήσατε μια παλιότερη έκδοση αυτού του οδηγού, ίσως δεν έχετε αλλάξει αυτή τη ρύθμιση.

Αν η αντλία και το CGM αποσυνδέονται, ελέγξτε ότι αυτό είναι ρυθμισμένο σωστά.

---

(bluetoothtroubleshooting-apps-using-nearby-device-permission)=

## Εφαρμογές που χρησιμοποιούν την άδεια Android «Συσκευές σε κοντινή απόσταση» μπορεί να προκαλούν διακοπές σύνδεσης και προβλήματα ενεργοποίησης του Pod

Το Android σάς επιτρέπει να ελέγχετε τι μπορεί να κάνει ή σε τι έχει πρόσβαση κάθε εφαρμογή στο τηλέφωνό σας, μέσω ενός συστήματος αδειών. Για κάθε εγκατεστημένη εφαρμογή μπορείτε να επιτρέψετε ή να απαγορεύσετε συγκεκριμένες άδειες, π.χ. πρόσβαση σε αρχεία της συσκευής, πρόσβαση στο Bluetooth, αναζήτηση συσκευών σε κοντινή απόσταση κ.λπ.

Το **AAPS** χρειάζεται αρκετές συγκεκριμένες άδειες για να λειτουργεί. Μία από αυτές, που χρειάζεται για να λειτουργούν τα Pod, είναι η άδεια «Συσκευές σε κοντινή απόσταση». Υπάρχουν πολλές άλλες εφαρμογές που χρειάζονται επίσης αυτή την άδεια. Η κοινότητα βλέπει ότι αρκετές εφαρμογές, όταν έχουν αυτή την άδεια, μπορεί να προκαλούν προβλήματα στην ενεργοποίηση νέων Pod σε μερικές συσκευές.

(bluetoothtroubleshooting-apps-using-nearby-device-permission-known-apps)=

### Εφαρμογές που χρησιμοποιούν την άδεια «Συσκευές σε κοντινή απόσταση» και είναι γνωστό ότι έχουν προκαλέσει προβλήματα:

Για τις εφαρμογές αυτής της λίστας έχει αναφερθεί σε ένα ή περισσότερα σημεία της κοινότητας ότι προκαλούν προβλήματα στις συσκευές Omnipod DASH και σε μερικές περιπτώσεις και στο Medtrum Nano.

```{admonition} Updating the list
:class: note
Στείλτε μήνυμα στον @XiTatiON στο κανάλι #omnipod-dash του Discord για να συζητήσετε εφαρμογές που πρέπει να μπουν σε αυτή τη λίστα.
```

- **myBMW** Το MyBMW διέκοψε τη σύνδεση του Medtrum Nano και του Omnipod DASH. Η εφαρμογή MyBMW ζητά την άδεια "find nearby devices" μόνο μία φορά. Αν δεν τη δώσετε, η εφαρμογή λειτουργεί κανονικά

- **Amazon Alexa**  Removing "Nearby devices" for Alexa app resolved problem for some people but will break the ability to pair Matter IoT devices

- **MINI app**  Φαίνεται ότι η εφαρμογή βασίζεται στην εφαρμογή myBMW και ίσως έχει την ίδια συμπεριφορά

- **BM2** Solar Battery Monitoring app, used in some camper van and camping solar setups: when the app was running, it prevented activation of a new Pod. Force Stopping the app while activating a new pod is a workaround to the issue. Όταν η εφαρμογή έτρεξε μετά από αυτό, δεν φάνηκε να επηρεάζει τη λειτουργία του Dash (σε Pixel 8 Pro με A16).

(bluetoothtroubleshooting-revoke-nearby-device-permission)=

### Πώς να αφαιρέσετε την άδεια «Συσκευές σε κοντινή απόσταση» από άλλες εφαρμογές:
Αν έχετε προβλήματα στην ενεργοποίηση νέου Pod και χρησιμοποιείτε τη σωστή υποστηριζόμενη έκδοση του **AAPS** για την έκδοση Android σας, ίσως χρειαστεί να αφαιρέσετε την άδεια από άλλες εφαρμογές όσο ενεργοποιείτε ένα νέο Pod.

Ακολουθήστε αυτή τη διαδικασία για να αφαιρέσετε την άδεια «Συσκευές σε κοντινή απόσταση» από όλες τις εφαρμογές εκτός από το **AAPS**:

```{admonition} Menus and settings
:class: note
Οι εικόνες και οι οδηγίες σε αυτόν τον οδηγό είναι από καθαρή εγκατάσταση Android 16 (Vanilla) σε Google Pixel 8 Pro. Other manufacturers and devices will likely not exactly match these menus and settings descriptions, adjust the steps to suit the device you have and if you are stuck see [Where to get help for dash](#omnipod-dash-where-to-get-help-for-dash) section on how to reach out to the community for support.
```

1. Ανοίξτε τις ρυθμίσεις Android στο τηλέφωνό σας, κάντε κύλιση προς τα κάτω και πατήστε **Ασφάλεια και απόρρητο (1)**.

    ![android_settings_sec_priv](../images/android_16/android_settings_sec_priv.png)

2. Κάντε κύλιση προς τα κάτω και πατήστε **Έλεγχοι απορρήτου (1)**.

   ![android_sec_priv](../images/android_16/android_sec_priv.png)

3. Πατήστε **Διαχείριση αδειών (1)**.

   ![android_priv_control](../images/android_16/android_priv_control.png)

3. Κάντε κύλιση προς τα κάτω και πατήστε **Συσκευές σε κοντινή απόσταση (1)**.

   ![android_perm_man_nearby_dev](../images/android_16/android_perm_man_nearby_dev.png)

4. Δείτε τη λίστα εφαρμογών και πατήστε την εφαρμογή για την οποία θέλετε να αφαιρέσετε την άδεια **Συσκευές σε κοντινή απόσταση**.

   Σε αυτόν τον οδηγό, η εφαρμογή από την οποία θα αφαιρέσουμε την άδεια είναι το **Android Auto (1)**.

   Για να μη χαλάσουν άλλα pod, συνιστούμε σε όλους να αφαιρέσουν αρχικά την άδεια από όλες τις εφαρμογές εκτός από το **AAPS**.

```{admonition} Which app to select?
:class: tip
Αν δεν ξέρετε ποια εφαρμογή σας προκαλεί πρόβλημα, απενεργοποιήστε την άδεια σε όλες (θυμηθείτε να δείτε και τη λίστα με τις γνωστές προβληματικές εφαρμογές και να ξεκινήσετε από αυτές). Αν μπορείτε να χάσετε μερικά pod στην πορεία, ενεργοποιήστε την άδεια σε μία νέα εφαρμογή πριν από κάθε ενεργοποίηση νέου Pod, μέχρι να βρείτε ποια ακριβώς εφαρμογή προκαλεί τα προβλήματα στο Pod σας. Αν βρείτε νέες προβληματικές εφαρμογές, ενημερώστε μας στο κανάλι #omnipod-dash του Discord.
```

   ![android_nearby_dev](../images/android_16/android_nearby_dev.png)

5. Για να αφαιρέσετε την άδεια, πατήστε **Να μην επιτρέπεται (1)** και μετά πατήστε **Να μην επιτρέπεται ούτως ή άλλως (2)**. Αν το κάνατε σωστά, θα δείτε επιλεγμένο το **Να μην επιτρέπεται (3)**. Τώρα μπορείτε να γυρίσετε στο μενού **Συσκευές σε κοντινή απόσταση** πατώντας το **βέλος Πίσω (4)** και να αλλάξετε αυτή τη ρύθμιση και σε άλλες εφαρμογές, αν χρειάζεται.

   ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dev.png) ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow_anyway.png)  ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow.png)

(bluetoothtroubleshooting-re-enable-nearby-device-permission)=

### Πώς να ενεργοποιήσετε ξανά την άδεια «Συσκευές σε κοντινή απόσταση» για εφαρμογές συστήματος και άλλες εφαρμογές:

1. If required Reference the **"How to revoke 'Nearby device' permissions for other apps"** section on how to get to the app privacy settings, then once in the **Nearby device** configuration proceed to 2.

2. Δείτε τη λίστα εφαρμογών και πατήστε την εφαρμογή στην οποία θέλετε να επιτρέψετε την άδεια **Συσκευές σε κοντινή απόσταση**.

   Σε αυτόν τον οδηγό, η εφαρμογή στην οποία θα επιτρέψουμε την άδεια είναι το **Android Auto (1)**.

   Θα δείτε ότι το **Android Auto (1)** λείπει από τη λίστα εφαρμογών αφού αφαιρεθεί η άδεια. Αυτό συμβαίνει επειδή το **Android Auto** είναι **εφαρμογή συστήματος** και οι εφαρμογές συστήματος είναι κρυφές από προεπιλογή.

   ![android_auto_nearby_dev_missing](../images/android_16/android_auto_nearby_dev_missing.png)

3. Για να εμφανίσετε τις κρυφές εφαρμογές συστήματος, πατήστε το **μενού με τις τρεις τελείες (⋮) (1)** πάνω δεξιά και μετά πατήστε **«Εμφάνιση συστήματος» (2)**. Τώρα θα πρέπει να βλέπετε την κρυφή εφαρμογή συστήματος στη λίστα: **Android Auto (3)**.

```{admonition} Find your app
:class: tip
Αν η άδεια μιας εφαρμογής έχει αφαιρεθεί, πρέπει να κάνετε κύλιση προς τα κάτω μέχρι να δείτε τη λίστα με τις εφαρμογές χωρίς άδεια, πιο κάτω στη λίστα.
```

   ![android_auto_nearby_dev_missing_hamburger](../images/android_16/android_auto_nearby_dev_missing_hamburger.png) ![android_auto_nearby_show_system](../images/android_16/android_auto_nearby_show_system.png) ![android_nearby_dev_system](../images/android_16/android_nearby_dev_system.png)

5. Follow the guidance in **"How to revoke 'Nearby device' permissions for other apps"** in reverse to re-enable permissions for each app.

---

(bluetoothtroubleshooting-android-15-bluetooth-connection-problems)=

## Android 15: Συχνά προβλήματα σύνδεσης Bluetooth

Μετά από αναβάθμιση του Android ή μετάβαση σε ένα νέο τηλέφωνο, το **AAPS** χάνει συχνά τη σύνδεση Bluetooth με την αντλία. Το πρόβλημα εξαφανίζεται προσωρινά όταν κάνετε επανεκκίνηση του τηλεφώνου. Αν χρησιμοποιείτε **Omnipod DASH** και το τηλέφωνό σας έχει Android 15, η ενεργοποίηση της ρύθμισης **Bluetooth bonding** μπορεί να βελτιώσει τη σταθερότητα της σύνδεσης Bluetooth. Για να την ενεργοποιήσετε:

```{admonition} Android 16
:class: warning
Ενεργοποιήστε το **Bluetooth bonding** μόνο σε Android 15 και μόνο αν έχετε προβλήματα σύνδεσης. ΜΗΝ ενεργοποιείτε το bonding σε Android 16.
```

1. Ανοίξτε τις [ρυθμίσεις του Dash](#omnipod-dash-settings): ανοίξτε την οθόνη της αντλίας DASH με **Διαχείριση** > **Αντλία** και πατήστε το εικονίδιο **Ρυθμίσεις** (γρανάζι) πάνω δεξιά.

   ![Η οθόνη της αντλίας DASH](../images/v4/Pumps/dash_pump_screen.png)

2. Ανοίξτε την ενότητα **Ρυθμίσεις για Προχωρημένους** και ενεργοποιήστε το **Bluetooth bonding**.

   ![Το Bluetooth bonding στην ενότητα Ρυθμίσεις για Προχωρημένους](../images/v4/Pumps/dash_settings_advanced.png)

3. Αν το τηλέφωνο δείξει αίτημα σύζευξης, αποδεχτείτε το.

4. Επανεκκινήστε το τηλέφωνό σας.
