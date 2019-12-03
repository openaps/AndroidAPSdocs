# Watchfaces

Το AndroidAPS έχει σχεδιαστεί για να είναι * ελεγχόμενο * από ρολόγια Android Wear. Εάν θέλετε να κάνετε το bolus από το ρολόι στο "Ρυθμίσεις wear" θα πρέπει να ενεργοποιήσετε το "Χειρισμός από ρολόι".

Οι ακόλουθες λειτουργίες μπορούν να ενεργοποιηθούν από το ρολόι:

* ορίστε έναν προσωρινό στόχο
* χορηγήστε ένα bolus
* administer eCarbs
* use the bolus calculator (calculation variables can be defined in [settings](../Configuration/Config-Builder#wear) on the phone)
* check the status of loop and pump
* show TDD (Total daily dose = bolus + basal per day)

Για να επιτευχθεί αυτό, έπρεπε να επιλέξετε την παραλλαγή κατασκευής "fullRelease" όταν [ δημιουργείτε το APK ](../Installing-AndroidAPS/Building-APK.md) (ή το "pumpRelease" θα σας επιτρέψει να απενεργοποιείτε απλώς την αντλία χωρίς κύκλωμα). Μέσα στο AndroidAPS, στο Μενού διαμόρφωσης πρέπει να [ ενεργοποιήσετε το Wear ](../Configuration/Config-Builder#wear).

Υπάρχουν διάφορα Watchfaces που μπορείτε να επιλέξετε από αυτά που περιλαμβάνουν το μέσο δέλτα, το IOB, τον ενεργό βασικό ρυθμό και τα βασικά προφίλ + το γράφημα ανάγνωσης CGM.

![AndroidAPSv2 watchface](../images/AAPSv2_Watchface.png)

Βεβαιωθείτε ότι οι ειδοποιήσεις από το AndroidAPS δεν αποκλείονται στο ρολόι. Η επιβεβαίωση της δράσης (π.χ. bolus, Ρυθμός-Στόχου) έρχεται μέσω ειδοποίησης που θα χρειαστεί να σύρετε και να τικάρετε.

Για να φτάσετε πιο γρήγορα στο μενού AAPS, κάντε διπλό πάτημα στο BG σας. Με διπλό πάτημα στην καμπύλη BG μπορείτε να αλλάξετε τη χρονική κλίμακα..

## Αντιμετώπιση προβλημάτων σχετικά με την εφαρμογή wear:

* Στο Android Wear 2.0 η οθόνη του ρολογιού δεν εγκαθίσταται πλέον από μόνη της. Πρέπει να μεταβείτε στο playstore στο ρολόι (δεν είναι το ίδιο με το playstore του κινητού) και να το βρείτε στις εφαρμογές κατηγορίας που είναι εγκατεστημένες στο τηλέφωνό σας, από εκεί μπορείτε να το ενεργοποιήσετε. Επίσης, ενεργοποιήστε την αυτόματη ενημέρωση. 
* Μερικές φορές συμβάλλει στον επανασυγχρονισμό των εφαρμογών στο ρολόι, καθώς μπορεί να είναι λίγο αργή για να γίνει αυτό: Android Wear> Cog icon> Watch name> Resync apps.
* Ενεργοποιήστε την εκκαθάριση του ADB στις Επιλογές προγραμματιστή (στο ρολόι), συνδέστε το ρολόι μέσω USB και ξεκινήστε την εφαρμογή Wear μία φορά στο Android Studio.

## Legend AndroidAPSv2 watchface

![Legend AndroidAPSv2 watchface](../images/AAPSv2_Watchface_legend.png)

A - χρόνος από την τελευταία εκτέλεση του κυκλώματος

Β - Ανάγνωση CGM

Γ - λεπτά από την τελευταία ανάγνωση CGM

Δ - αλλαγή σε σχέση με την τελευταία ανάγνωση CGM (σε mmol ή mg / dl)

E - μέση αλλαγή ανάγνωσης CGM που διαρκεί 15 λεπτά

Ζ - μπαταρία τηλεφώνου

Η - βασικός ρυθμός (εμφανίζεται σε U / h κατά την κανονική τιμή και σε% κατά τη διάρκεια του TBR)

Θ - BGI (αλληλεπίδραση γλυκόζης στο αίμα) -> ο βαθμός στον οποίο το BG "πρέπει" να αυξάνεται ή να μειώνεται με βάση μόνο την δραστηριότητα της ινσουλίνης.

I - υδατάνθρακες (υδατάνθρακες επί του παρόντος, υδατάνθρακες μελλοντικά)

Κ - ινσουλίνη επί του παρόντος (από bolus ή από βασικό ρυθμό)

## Ρυθμίσεις

There are different settings to modify and to choose from while using AndroidAPS on your smartwatch:

* Vibrate on Bolus (on | off)
* Units for Actions (mg/dl | mmol/l)
* Show Date (on | off)
* Show IOB (on | off)
* Show COB (on | off)
* Show Delta (on | off)
* Show AvgDelta (on | off)
* Show Phone Battery (on | off)
* Show Rig Battery (on | off)
* Show Basal Rate (on | off)
* Show Loop Status (on | off)
* Show BG (on | off)
* Show Direction Arrow (on | off)
* Show Ago (on | off)
* Dark (on | off)
* Highlight Basals (on | off)
* Chart Timeframe (1 | 2 | 3 | 4 | 5 hours)
* Input Design (Default | Quick righty | Quick lefty | Modern Sparse)
* Delta Granularity (Steampunk) (Low | Medium | High)
* Big Numbers (on | off)
* Ring History (on | off)
* Light Ring History (on | off)
* Animations (on | off)
* Wizard in Menu (on | off)
* Prime in Menu (on | off)
* Single Target (on | off)
* Wizard Percentage (on | off)

## View Nightscout data

If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". Υπάρχουν διάφορα Watchfaces που μπορείτε να επιλέξετε από αυτά που περιλαμβάνουν το μέσο δέλτα, το IOB, τον ενεργό βασικό ρυθμό και τα βασικά προφίλ + το γράφημα ανάγνωσης CGM.

## Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.