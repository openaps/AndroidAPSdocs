# For Clinicians – A General Introduction and Guide to AAPS

This page is intended for clinicians who have expressed interest in open source artificial pancreas technology such as AAPS, or for patients who want to share such information with their clinicians.

This guide has some high-level information about DIY closed looping and specifically how AAPS works. For more details on all of these topics, please view the [comprehensive AAPS documentation online](../index.md). Εάν έχετε ερωτήσεις, ρωτήστε τον ασθενή σας για περισσότερες λεπτομέρειες ή μπορείτε ελεύθερα να απευθυνθείτε στην κοινότητα με τις απορίες σας. (If you’re not on social media (e.g. [Twitter](https://twitter.com/kozakmilos) or Facebook), feel free to email developers@AndroidAPS.org). [You can also find some of the latest studies & outcomes related data here](https://openaps.org/outcomes/).

## Τα βήματα για την δημιουργία ενός DIY κλειστού κυκλώματος:

To start using AAPS, the following steps should be taken:

* Find a [compatible pump](../Getting-Started/CompatiblePumps.md), a [compatible Android device](../Getting-Started/Phones.md), and a [compatible CGM source](../Getting-Started/CompatiblesCgms.md).
* [Download the AAPS source code and build the software](../SettingUpAaps/BuildingAaps.md).
* [Configure the software to talk to their diabetes devices and specify settings and safety preferences](../SettingUpAaps/SetupWizard.md).

## Πώς λειτουργεί ένα κλειστό κύκλωμα DIY

Χωρίς σύστημα κλειστού κυκλώματος, ένα άτομο με διαβήτη συλλέγει δεδομένα από την αντλία και το CGM, αποφασίζει τι πρέπει να κάνει και αναλαμβάνει δράση.

Με την αυτοματοποιημένη παράδοση ινσουλίνης, το σύστημα κάνει το ίδιο πράγμα: συλλέγει δεδομένα από την αντλία, το CGM και οπουδήποτε αλλού καταγράφονται οι πληροφορίες (όπως το Nightscout), χρησιμοποιεί αυτές τις πληροφορίες για να κάνει τα μαθηματικά και να αποφασίσει πόση περισσότερη ή λιγότερη ινσουλίνη χρειάζεται (πάνω ή κάτω από τον υποκείμενο βασικό ρυθμό) και χρησιμοποιεί προσωρινά βασικά ποσοστά για να πραγματοποιήσει τις απαραίτητες προσαρμογές για να διατηρήσει ή τελικά να φέρει το BG σε εύρος στόχου.

If the device running AAPS breaks or goes out of range of the pump, once the latest temporary basal rate ends, the pump falls back to being a standard pump with the preprogrammed basals rates runnning.

## How data is gathered:

With AAPS, an Android device runs a special app to do the math, the device communicates using Bluetooth with a supported pump. AAPS can communicate with other devices and to the cloud via wifi or mobile data to gather additional information, and to report to the patient, caregivers, and loved ones about what it’s doing and why.

Οι συσκευές Android πρέπει:

* επικοινωνούν με την αντλία και διαβάζουν το ιστορικό - πόση ινσουλίνη έχει παραδοθεί
* επικοινωνούν με το CGM (είτε άμεσα είτε μέσω του cloud) - για να δουν τι κάνουν τα BGs

Όταν η συσκευή έχει συλλέξει αυτά τα δεδομένα, ο αλγόριθμος τρέχει και κάνει τη λήψη αποφάσεων με βάση τις ρυθμίσεις (ISF, υδατάνθρακας, DIA, στόχος κ. λπ.). Αν απαιτείται, τότε εκδίδει εντολές στην αντλία για να τροποποιήσει την ταχύτητα παράδοσης ινσουλίνης.

Θα συγκεντρώσει επίσης οποιαδήποτε πληροφορία σχετικά με τις δόσεις, την κατανάλωση υδατανθράκων και τις προσωρινές προσαρμογές στόχου από την αντλία ή από το Nightscout για να την χρησιμοποιήσει για τον υπολογισμό των ρυθμών παράδοσης ινσουλίνης.

## How does it know what to do?

Το λογισμικό ανοιχτού κώδικα έχει σχεδιαστεί για να διευκολύνει τη συσκευή να κάνει τις εργασίες που χρησιμοποιούνται (σε ​​χειροκίνητη λειτουργία) για τον υπολογισμό του ποσού με τον οποίο θα πρέπει να ρυθμίζεται η παροχή ινσουλίνης. Αρχικά συλλέγει δεδομένα από όλες τις υποστηρικτικές συσκευές και από το cloud, προετοιμάζει τα δεδομένα και εκτελεί τους υπολογισμούς, κάνει προβλέψεις των αναμενόμενων επιπέδων BG κατά τις επόμενες ώρες αναμένεται να το κάνει σε διαφορετικά σενάρια και υπολογίζει τις απαραίτητες προσαρμογές για να διατηρήσει ή επαναφέρει το BG στο στόχο. Στη συνέχεια στέλνει τις απαραίτητες ρυθμίσεις στην αντλία. Στη συνέχεια διαβάζει τα δεδομένα πάλι, και το κάνει ξανά και ξανά.

Επειδή η πιο σημαντική παράμετρος εισόδου είναι το επίπεδο γλυκόζης αίματος που προέρχεται από το CGM, είναι σημαντικό να έχετε υψηλής ποιότητας δεδομένα CGM.

AAPS is designed to transparently track all input data it gathers, the resulting recommendation, and any action taken. Επομένως, είναι εύκολο να απαντήσετε ανά πάσα στιγμή στο ερώτημα "γιατί κάνει το X;" εξετάζοντας τα αρχεία καταγραφής.

## Examples of AAPS algorithm decision making:

AAPS uses the same core algorithm and feature set as OpenAPS. Ο αλγόριθμος κάνει πολλαπλές προβλέψεις (με βάση τις ρυθμίσεις και την κατάσταση) που αντιπροσωπεύουν διαφορετικά σενάρια για το τι μπορεί να συμβεί στο μέλλον. Στη Nightscout, αυτά εμφανίζονται ως "μοβ γραμμές". AAPS uses different colors to separate these [prediction lines](#aaps-screens-prediction-lines). Στα ημερολόγια, θα περιγράψει ποιες από αυτές τις προβλέψεις και ποιο χρονικό πλαίσιο οδηγεί τις απαραίτητες ενέργειες.

### Here are examples of the purple prediction lines, and how they might differ:

![Παραδείγματα μοβ γραμμών πρόβλεψης](../images/Prediction_lines.jpg)

### Here are examples of different time frames that influence the needed adjustments to insulin delivery:

### Scenario 1 - Zero Temp for safety

Σε αυτό το παράδειγμα, το BG αυξάνεται στο βραχυπρόθεσμο χρονικό πλαίσιο. Ωστόσο, προβλέπεται ότι θα είναι χαμηλό σε μεγαλύτερο χρονικό διάστημα. Στην πραγματικότητα, προβλέπεται να φτάσει κάτω από το στόχο * και * στο κατώφλι ασφαλείας. For safety to prevent the low, AAPS will issue a zero temp (temporary basal rate at 0%), until the eventualBG (in any time frame) is above threshold.

![Σενάριο δοσολογίας 1](../images/Dosing_scenario_1.jpg)

### Scenario 2 - Zero temp for safety

Σε αυτό το παράδειγμα, το BG προβλέπεται ότι θα μειωθεί βραχυπρόθεσμα, αλλά προβλέπεται ότι τελικά θα είναι πάνω από το στόχο. However, because the near-term low is actually below the safety threshold, AAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Σενάριο δοσολογίας 2](../images/Dosing_scenario_2.jpg)

### Scenario 3 - More insulin needed

Σε αυτό το παράδειγμα, μια βραχυπρόθεσμη πρόβλεψη δείχνει μια πτώση κάτω από τον στόχο. Ωστόσο, δεν προβλέπεται να είναι κάτω από το όριο ασφαλείας. Το προβλεπόμενο BG είναι πάνω από το στόχο. Therefore, AAPS will restrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). Στη συνέχεια, θα αξιολογήσει την προσθήκη ινσουλίνης για να μειώσει το στόχο του χαμηλότερου επιπέδου του προβλεπόμενου BG, εφόσον το κάνει ασφαλές. * (Ανάλογα με τις ρυθμίσεις και την απαιτούμενη ποσότητα και χρονισμό της ινσουλίνης, αυτή η ινσουλίνη μπορεί να χορηγηθεί μέσω βασικών θεραπειών ή SMB (πολύ μικρό bolus)). *

![Σενάριο δοσολογίας 3](../images/Dosing_scenario_3.jpg)

### Scenario 4 - Low temping for safety

In this example, AAPS sees that BG is spiking well above target. Ωστόσο, λόγω του χρονισμού της ινσουλίνης, υπάρχει ήδη αρκετή ινσουλίνη στο σώμα για να φέρει το BG στη σειρά τελικά. Στην πραγματικότητα, το BG προβλέπεται ότι τελικά θα είναι κάτω από τον στόχο. Therefore, AAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. Αν και το BG είναι υψηλό / αυξανόμενο, είναι πιθανό να υπάρχει χαμηλός προσωρινός βασικός ρυθμός.

![Σενάριο δοσολογίας 4](../images/Dosing_scenario_4.jpg)

## Optimizing settings and making changes

As a clinician who may not have experience with AAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. We have multiple tools and [guides](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

Το πιο σημαντικό πράγμα που πρέπει να κάνουν οι ασθενείς είναι να κάνουν μια αλλαγή κάθε φορά και παρατηρούν τον αντίκτυπο για 2-3 ημέρες πριν επιλέξουν να αλλάξουν ή να τροποποιήσουν τις ρυθμίσεις (εκτός αν είναι προφανώς μια κακή αλλαγή που κάνει τα πράγματα χειρότερα, οπότε θα έπρεπε επαναφέρετε αμέσως την προηγούμενη ρύθμιση). Η ανθρώπινη τάση είναι να γυρίσουμε όλα τα κουμπιά και να αλλάξουμε τα πάντα με τη μία. αλλά αν κάποιος το κάνει, τότε μπορεί να καταλήξουν σε περαιτέρω κακές ρυθμίσεις για το μέλλον και να δυσκολευτεί να επιστρέψει σε μια γνωστή καλή κατάσταση.

Ένα από τα πιο ισχυρά εργαλεία για την πραγματοποίηση αλλαγών στις ρυθμίσεις είναι ένα αυτοματοποιημένο εργαλείο υπολογισμού βασικών ρυθμών, ISF και υδατανθράκων. This is called “[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. Είναι σχεδιασμένο να εκτελείται ανεξάρτητα / χειροκίνητα και να επιτρέπει στα δεδομένα να σας καθοδηγούν εσάς ή τον ασθενή σας για να κάνετε αυξομειώσεις στις ρυθμίσεις. Είναι η καλύτερη πρακτική στην κοινότητα να τρέχει (ή να αναθεωρεί) τις αναφορές Autotune πρώτα, προτού επιχειρήσετε να κάνει χειροκίνητες προσαρμογές στις ρυθμίσεις. With AAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AAPS as well. As these parameters are a prerequisite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adustment of these parameters would be the natural link to the clinician.

Επιπρόσθετα, η ανθρώπινη συμπεριφορά (που αντλείται από τον χειρωνακτικό τρόπο αντιμετώπισης διαβήτη) επηρεάζει συχνά τα αποτελέσματα, ακόμη και με κλειστό κύκλωμα DIY. For example, if BG is predicted to go low and AAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). Ωστόσο, σε πολλές περιπτώσεις, κάποιος μπορεί να επιλέξει να θεραπεύσει με πολλούς περισσότερους υδατάνθρακες (π.χ. να κολλήσει στον κανόνα 15), γεγονός που θα προκαλέσει μια ταχύτερη ακίδα τόσο από την επιπλέον γλυκόζη όσο και επειδή η ινσουλίνη είχε μειωθεί στο χρονικό πλαίσιο που οδηγούσε στο χαμηλό.

## OpenAPS

** Αυτός ο οδηγός εγκρίθηκε από τον [ Οδηγό του κλινικού για το OpenAPS ](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html). ** Το OpenAPS είναι ένα σύστημα που αναπτύσσεται για να τρέχει σε ένα μικρό φορητό υπολογιστή (που γενικά αναφέρεται ως "rig"). AAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AAPS, with the main difference being the hardware platform where each piece of software is run.

## Summary

This is meant to be a high-level overview of how AAPS works. For more details, ask your patient, reach out to the community, or read the full AAPS documentation available online.

Επιπλέον προτεινόμενη ανάγνωση:

* The [full AAPS documentation](../index.md)
* Το [ Σχεδιασμό Αναφοράς OpenAPS ](https://OpenAPS.org/reference-design/), το οποίο εξηγεί πώς είναι σχεδιασμένο το OpenAPS για ασφάλεια: https://openaps.org/reference-design/
* The [full OpenAPS documentation](https://openaps.readthedocs.io/en/latest/index.html) 
  * More [details on OpenAPS calculations](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)