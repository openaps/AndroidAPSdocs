
# Σημειώσεις έκδοσης

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Ακολουθήστε τις οδηγίες στον [οδηγό ενημέρωσης](UpdateToNewVersion.md) για να ενημερώσετε σε νέα έκδοση. Η ενότητα αντιμετώπισης προβλημάτων στη σελίδα με τις οδηγίες ενημέρωσης καλύπτει επίσης τις πιο συχνές δυσκολίες κατά την ενημέρωση του **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Δείτε [Τι άλλαξε στο AAPS v4](V4Changes.md) για τις σημαντικές αλλαγές στη συμπεριφορά — λειτουργίες που μετακινήθηκαν, μετονομάστηκαν ή αφαιρέθηκαν.
```

Όταν υπάρχει νέα ενημέρωση, θα λάβετε μια ειδοποίηση σαν αυτή:

![Πληροφορίες ενημέρωσης](../images/AAPS_LoopDisable90days.png)

Αν δεν κάνετε ενημέρωση μέχρι την ημερομηνία λήξης, το **AAPS** θα περάσει σε Ανοιχτό Κύκλωμα.

Δείτε [Τέλος υποστήριξης](EndOfLife.md) για τις ημερομηνίες λήξης των εκδόσεων του AAPS.

**Μην αγνοείτε την ειδοποίηση.** Οι νέες εκδόσεις του **AAPS** φέρνουν σημαντικές διορθώσεις ασφάλειας. Γι' αυτό, κάθε χρήστης του **AAPS** πρέπει να ενημερώνει στην τελευταία έκδοση το συντομότερο δυνατό. Αυτή είναι μια προσπάθεια να βελτιωθεί η ασφάλεια για κάθε χρήστη του **AAPS** και για την κοινότητα DIY. Σας ευχαριστούμε για την κατανόηση.

(maintenance-android-version-aaps-version)=

## Έκδοση Android και έκδοση AAPS

Αν το smartphone σας έχει έκδοση Android παλαιότερη από το Android 12, δεν θα μπορείτε να χρησιμοποιήσετε το AAPS v3.4 και νεότερο, γιατί απαιτεί τουλάχιστον Android 12.

Για να μπορούν οι χρήστες με παλαιότερο Android να χρησιμοποιούν παλαιότερη έκδοση του AAPS, κυκλοφόρησαν νέες εκδόσεις που αλλάζουν μόνο τον έλεγχο της έκδοσης. Δεν περιλαμβάνονται άλλες βελτιώσεις.

Βρείτε την έκδοση Android σας στον παρακάτω πίνακα και χρησιμοποιήστε την αντίστοιχη έκδοση του **AAPS**. Ο κώδικας κατεβαίνει από το <https://github.com/nightscout/AndroidAPS> με τον κλάδο που φαίνεται.

| Η έκδοση Android σας   | Έκδοση AAPS που πρέπει να χρησιμοποιήσετε | Κλάδος για λήψη                                                  |
| ---------------------- | ----------------------------------------- | ---------------------------------------------------------------- |
| Android 12 και νεότερο | Τελευταία έκδοση                          | [master](https://github.com/nightscout/AndroidAPS) (προεπιλογή)  |
| Android 11             | **3.3.2.1**                               | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10          | **3.2.0.4**                               | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8              | **2.8.2.1**                               | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7              | **2.6.2**                                 | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## Έκδοση WearOS

- Το AAPS απαιτεί WearOS 3.0, 3.2 ή 3.5 (Android 11, API level 30) ή νεότερο. Τα ρολόγια WearOS 2 δεν υποστηρίζονται.

```{tip}
Το WearOS 5, API level 34 (Android 14) έχει [περιορισμούς](#BuildingAapsWearOs-WearOS5).
```

**Release notes of the latest version of each major release**. For all other versions, see the [releases on GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**Έκδοση 4.0.0**

Ημερομηνία κυκλοφορίας: 31-10-2026

**Νέες λειτουργίες**

- Νέο περιβάλλον χρήσης: η εφαρμογή τηλεφώνου ξαναφτιάχτηκε σε Jetpack Compose @MilosKozak
- [Καθολική αναζήτηση](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Μετάβαση σε Kotlin Multiplatform, client για Windows, Mac, Linux desktop και iOS @MilosKozak
- [Σενάρια](../DailyLifeWithAaps/Scenes.md): αποθηκεύστε μια ομάδα ενεργειών και εκτελέστε τες μαζί @MilosKozak
- [Έλεγχος κύριας συσκευής ↔ πελάτη](../RemoteFeatures/ClientMasterControl.md): αποστολή εντολών από ένα τηλέφωνο-πελάτη στην κύρια συσκευή @MilosKozak
  - [Ρόλοι πελατών](#client-master-control-roles): Μόνο ανάγνωση, Γεύματα, Φροντιστής ή Διαχειριστής για κάθε πελάτη @MilosKozak
  - [Ενισχυμένη λειτουργία](#client-master-control-hardened-mode): όταν ο έλεγχος από πελάτες είναι ενεργός, η κύρια συσκευή δέχεται αλλαγές μόνο από συζευγμένους πελάτες @MilosKozak
  - Σύζευξη με κωδικό QR, που ρυθμίζει επίσης το Nightscout στον πελάτη, ή με PIN· το μυστικό σύζευξης αντικαθίσταται αμέσως μετά τη σύζευξη @MilosKozak
  - [Δικό του διακριτικό Nightscout](#client-master-control-own-token) για κάθε πελάτη, μόνο με τα δικαιώματα που χρειάζεται ένας πελάτης @MilosKozak
- Υποστήριξη [συγκέντρωσης ινσουλίνης](../AdvancedOptions/InsulinConcentration.md) (U200, U500) σε αντλίες, οδηγό και προφίλ @Philoul @MilosKozak
- Διαχείριση ινσουλίνης: κατάλογος ινσουλινών, ψευδώνυμα, επιλογή στο προφίλ και στον οδηγό @Philoul
- Πρόσθετο βαθμονόμησης @MilosKozak
- [Εξομάλυνση](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalman Filter (UKF) @piecycle
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Εναλλαγή σημείων](#Aapsscreens-site-rotation): καταγραφή και εναλλαγή των σημείων έγχυσης @Philoul @MilosKozak
- Ανανέωση του [Autotune](../AdvancedOptions/Autotune.md) @Philoul
- Νέα [widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Προσβασιμότητα: η εφαρμογή τηλεφώνου λειτουργεί με αναγνώστη οθόνης - στοιχεία ελέγχου με ονόματα, εκφώνηση της κατάστασης, περιγραφές γραφημάτων και επικεφαλίδες για γρήγορη πλοήγηση @MilosKozak
- [Εισαγωγή ρυθμίσεων](../Maintenance/ExportImportSettings.md): μπορεί να κρατήσει τις ρυθμίσεις της αντλίας @MilosKozak
- Η μόνιμη ειδοποίηση χρησιμοποιεί τις ζωντανές ενημερώσεις (live updates) του Android, με υποστήριξη για το Samsung Now bar και το delta @premnirmal
- Γράφημα γλυκόζης: [πατήστε παρατεταμένα](#aaps-screens-graph-press-and-hold) για να δείτε τις τιμές σε μια μέτρηση, σε κάθε γράφημα της επισκόπησης @t1dude @olorinmaia
- Βελτιώσεις απόδοσης @MilosKozak
- Αυτόματοι e-carbs στον Οδηγό Bolus @MilosKozak

**Νέες συσκευές**

- **CareLevo**: νέος [οδηγός αντλίας](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: υποστήριξη @MilosKozak
- **Instara**: νέα πηγή CGM @leohunt

**Βελτιώσεις στους οδηγούς αντλιών**

- Οι οθόνες επισκόπησης αντλίας ξαναφτιάχτηκαν για Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn και Equil @MilosKozak
- **Omnipod Dash**: κωδικοί Ref όπως στο PDM και κατανοητές περιγραφές σφαλμάτων, αντιστάθμιση απόκλισης (drift) πάντα ενεργή, καλύτερη αναφορά του τύπου bolus @nl-ruud
- **Omnipod**: τελική ημερομηνία λήξης για Dash και Eros @mcnelson
- **DanaR, RS**: εξομοιωτής αντλίας για δοκιμές @MilosKozak
- **Equil**: εξομοιωτής αντλίας για δοκιμές @MilosKozak
- Πολλές διορθώσεις σε αντλίες και στο κύκλωμα @MilosKozak και άλλοι

**Wear OS**

- Η [εφαρμογή ρολογιού](../WearOS/WearOsSmartwatch.md) ξαναφτιάχτηκε σε Compose, νέα πλακίδια και επιπλοκές, αυτόματη εγκατάσταση watchface (Watch Face Push) σε Wear OS 6+ @olorinmaia @Philoul
- Το CustomWatchface είναι διαθέσιμο για WearOS 6.0 (GW7, GW8, GW9...) με ένα ειδικό watchface WFF @Philoul @olorinmaia
- Το CustomWatchface μπορεί τώρα να περιέχει 5 θέσεις επιπλοκών που μπορείτε να προσαρμόσετε (νέα λειτουργία διαθέσιμη μόνο για παλαιότερα ρολόγια) @Philoul
- Νέο [watchface WFF βασισμένο στις επιπλοκές του AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Διορθώσεις στο αποτέλεσμα του Οδηγού Bolus και του Γρήγορου Οδηγού @olorinmaia
- Νέα δραστηριότητα γραφήματος γλυκόζης και τρόπου λειτουργίας στο κύριο μενού @olorinmaia
- Οδηγός Bolus: σελίδα [τύπου γεύματος](#WearOsSmartwatch-wizard-meal-type) που χωρίζει τους υδατάνθρακες όπως ο οδηγός του τηλεφώνου, και [χρόνος υδατανθράκων](#WearOsSmartwatch-wizard-carb-time) με την υπενθύμιση *Ώρα για φαγητό* στο ρολόι @olorinmaia
- [Συναγερμοί του τηλεφώνου στο ρολόι](#WearOsSmartwatch-phone-alarms): το ρολόι δείχνει τον συναγερμό και προσφέρει Αθόρυβο και Σίγαση 5 λεπ. @olorinmaia

**Build**

- Workflows CI για builds από tag/κλάδο, αντιστοίχιση εκδόσεων JDK @Angus-repo

**Συνεισφέροντες**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Πλήρης λίστα αλλαγών: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**Έκδοση 3.4.2.6**

- Equil: βελτίωση της σταθερότητας @MilosKozak

---

(version3321)=

**Έκδοση 3.3.2.1**

Ημερομηνία κυκλοφορίας: 13-08-2025

- Διορθώθηκε η σύνδεση Bluetooth του Omnipod στο Android 16
- Διαδικασία CI (δημιουργία μέσω browser)
- Διόρθωση της μετατροπής mmol-mgdl
- Διόρθωση λάθος επιλογής ώρας στα παράθυρα διαλόγου σε κάποιες ζώνες ώρας
- Διόρθωση της ανάγνωσης κλειδιών στην απλή λειτουργία
- Διόρθωση των προβλέψεων που έλειπαν στο ρολόι
- Βελτιωμένη Διαμόρφωση
- Βελτιωμένος πλήρης συγχρονισμός NSCv3

---

(version3300)=

**Έκδοση 3.3.2.0**

Ημερομηνία κυκλοφορίας: 27-03-2025

**Πώς να κάνετε την αναβάθμιση**

* Για το build αυτής της έκδοσης απαιτείται η [έκδοση του Android Studio με το όνομα "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) ή νεότερη. Αν έχετε ήδη κάνει build μιας έκδοσης 3.3.x, πρέπει να αναβαθμίσετε ξανά το Android Studio.

(version-enforcement)=

**Από αυτή την έκδοση, οι ειδοποιήσεις και η επιβολή εκδόσεων έγιναν πιο απλές και πιο ήπιες και λειτουργούν ως εξής:**

*  Καμία λήξη όταν η συσκευή είναι εκτός σύνδεσης (αν δεν υπάρχει σύνδεση στο internet). Αυτό σημαίνει ότι δεν υπάρχουν πια περίοδοι χάριτος 60 και 90 ημερών.
*  Μετά τη λήξη επιβάλλεται η λειτουργία LGS
*  Θα λαμβάνετε προειδοποιήσεις/ειδοποιήσεις λιγότερο συχνά:
   - απομένουν 28+ ημέρες: κάθε 7 ημέρες
   - απομένουν 27-14 ημέρες: κάθε 3 ημέρες
   - μετά μία φορά την ημέρα
   - Η ειδοποίηση δημιουργείται μετά το μεσημέρι, ώστε να μη σας ενοχλεί τη νύχτα
* Υπάρχουν μόνο 2 είδη ειδοποίησης
   - Νέα έκδοση διαθέσιμη (δεν επηρεάζει το AAPS)
   - Η εφαρμογή λήγει σε κάποια μελλοντική ημερομηνία (ακόμη δεν επηρεάζει το AAPS) / έχει λήξει (το AAPS θα περάσει σε λειτουργία LGS)

Other changes: [release notes on GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[Έκδοση 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

Ημερομηνία κυκλοφορίας: 27-02-2024

Αυτή η έκδοση είναι η τελευταία που υποστηρίζει Android 10. Αν δεν μπορείτε να αναβαθμίσετε σε Android 11, [ενημερώστε το AAPS στην 3.2.0.4](#update-aaps-3204).

**Αλλαγές**

- Υποστήριξη G7 μέσω xDrip
- Διορθώσεις στο Medtrum
- Διόρθωση του εικονιδίου Αυτοματισμού
- Διόρθωση για την ολοκλήρωση του βήματος 1

---

**Έκδοση 2.8.2**

Ημερομηνία κυκλοφορίας: 23-01-2021

[Σημειώσεις έκδοσης](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**Έκδοση 1.0**

```{admonition} First version of **AAPS**
:class: note

Η πρώτη δοκιμαστική έκδοση ξεκίνησε το 2015 και η πρώτη κυκλοφορία έγινε το 2016.

Η ακριβής χρονολογία αυτών των εκδόσεων δεν είναι διαθέσιμη αυτή τη στιγμή, αλλά επειδή η ερώτηση έχει γίνει αρκετές φορές, την καταγράφουμε εδώ.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
