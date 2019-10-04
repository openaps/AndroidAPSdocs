# Προτιμήσεις

## Κωδικός για ρυθμίσεις

Αυτό σας επιτρέπει να ορίσετε έναν κωδικό πρόσβασης για να αποτρέψετε τυχαίες ή μη εξουσιοδοτημένες αλλαγές στις Προτιμήσεις. Αφού εισάγετε έναν κωδικό πρόσβασης εδώ, θα πρέπει να τον εισάγετε για να αποκτήσετε πρόσβαση στις Προτιμήσεις. Για να καταργήσετε την επιλογή κωδικού πρόσβασης, στις "Προτιμήσεις" διαγράψετε το κείμενο μέσα στο πεδίο.

## Ηλικία Ασθενούς

Υπάρχουν όρια ασφαλείας βάσει της ηλικίας που επιλέξατε σε αυτή τη ρύθμιση. Αν αρχίσετε να χτυπάτε αυτά τα όρια (όπως το μέγιστο bolus) είναι ώρα να προχωρήσετε ένα βήμα προς τα πάνω. Είναι κακή ιδέα να επιλέξετε υψηλότερη από την πραγματική ηλικία, επειδή μπορεί να οδηγήσει σε υπερδοσολογία εισάγοντας λάθος τιμή στο παράθυρο διαλόγου ινσουλίνης (παρακάμπτοντας για παράδειγμα την δεκαδική τελεία). Αν θέλετε να μάθετε τους πραγματικούς αριθμούς για αυτά τα σκληρά κωδικοποιημένα όρια ασφαλείας, μεταβείτε στη λειτουργία αλγορίθμου που χρησιμοποιείτε σε [ αυτή τη σελίδα ](../Usage/Open-APS-features.md).

## Γενικά

* Επιλέξτε τη γλώσσα σας εδώ. Εάν η γλώσσα σας δεν είναι διαθέσιμη ή δεν έχουν μεταφραστεί όλες οι λέξεις, τότε μην διστάσετε να κάνετε κάποιες προτάσεις στο [ Crowdin ](https://crowdin.com/project/androidaps) ή να ρωτήσετε στο [chatroom gitter ](https://gitter.im/MilosKozak/AndroidAPS).

## Σφαιρική Εικόνα

* Η παρακολούθηση της οθόνης είναι χρήσιμη κατά τη διάρκεια μιας παρουσίασης. Θα καταναλώνει πολλή ενέργεια, οπότε είναι συνετό να συνδέσετε το τηλέφωνό σας σε φορτιστή.
* Τα κουμπιά σας επιτρέπουν να επιλέξετε ποια κουμπιά είναι ορατά στην αρχική σας οθόνη. Επίσης, σας δίνει μερικές επιλογές για την αναδυόμενη οθόνη που θα δείτε μετά το πάτημα ενός κουμπιού.
* Οι ρυθμίσεις του γρήγορου οδηγού σας επιτρέπουν να προσθέσετε ένα γρήγορο κουμπί για ένα συνηθισμένο σνακ ή γεύμα, να εισαγάγετε τις λεπτομέρειες σχετικά με την περιεκτικότητα σε υδατάνθρακες και στην αρχική οθόνη, αν επιλέξετε το πλήκτρο γρήγορου οδηγού, θα υπολογίσει και το bolus για αυτούς τους υδατάνθρακες με βάση τις τρέχουσες αναλογίες( ή τη τιμή γλυκόζης στο αίμα ή η ινσουλίνη επί του οργανισμού, εάν έχει ρυθμιστεί).
* Προηγμένες ρυθμίσεις για να ενεργοποιήσετε το superbolus στον οδηγό και για να εμφανίζετε φως κατάστασης στην αρχική οθόνη. Τα φώτα κατάστασης δίνουν μια οπτική προειδοποίηση για χαμηλό επίπεδο δεξαμενής και μπαταρίας, καθώς και καθυστερημένη αλλαγή θέσης.
    
    ![Φωτισμοί κατάστασης - λεπτομέρειες](../images/StatusLights.jpg)

## Ασφάλεια θεραπειών

### Μέγιστο επιτρεπόμενο όριο χορήγησης ινσουλίνης [U μονάδες]

Αυτή είναι η μέγιστη ποσότητα ινσουλίνης που επιτρέπεται να χορηγήσει το AAPS. Αυτή η ρύθμιση υπάρχει ως όριο ασφαλείας για να αποφευχθεί η υπερβολική χορήγηση ινσουλίνης λόγω τυχαίας εισαγωγής ή σφάλματος χρήστη. Συνιστάται να το ρυθμίζετε σε μια λογική ποσότητα που αντιστοιχεί περίπου στη μέγιστη ποσότητα ινσουλίνης που πιθανόν να χρειαστείτε για ένα γεύμα ή μια διόρθωση. Αυτός ο περιορισμός εφαρμόζεται επίσης στον Υπολογιστή Bolus.

### Μέγιστο επιτρεπόμενο όριο υδατανθράκων [γρ]

Αυτή είναι η μέγιστη ποσότητα υδατανθράκων που επιτρέπει ο υπολογιστής bolus AAPS. Αυτή η ρύθμιση υπάρχει ως όριο ασφαλείας για να αποφευχθεί η υπερβολική χορήγηση ινσουλίνης λόγω τυχαίας εισαγωγής ή σφάλματος χρήστη. Συνιστάται να το ορίσετε σε ένα λογικό ποσό που αντιστοιχεί περίπου στη μέγιστη ποσότητα υδατανθράκων που πιθανόν να χρειαστείτε για ένα γεύμα.

## Κύκλωμα

Μπορείτε να αλλάξετε μεταξύ ανοιχτού και κλειστού κυκλώματος εδώ. Το ανοιχτό κύκλωμα σημαίνει ότι οι προτάσεις TBR βασίζονται στα δεδομένα σας και εμφανίζονται ως ειδοποίηση, αλλά πρέπει να επιλέξετε να τις αποδεχτείτε με μη αυτόματο τρόπο και να τις εισαγάγετε με μη αυτόματο τρόπο στην αντλία σας. Τα κλειστό κύκλωμα σημαίνει ότι οι προτάσεις TBR αποστέλλονται αυτόματα στην αντλία σας χωρίς επιβεβαίωση ή εισαγωγή από εσάς. Η αρχική οθόνη θα εμφανίσει στην επάνω αριστερή γωνία είτε είστε σε ανοικτό είτε κλειστό κύκλωμα, και πατώντας και κρατώντας πατημένο αυτό το πλήκτρο αρχικής οθόνης θα επιτρέψετε επίσης την εναλλαγή μεταξύ των δύο.

## OpenAPS AMA

Το OpenAPS Advanced Meal Assist (Προηγμένος Βοηθός Γεύματος) (AMA) επιτρέπει στο σύστημα να φτάσει σε υψηλές ρυθμούς πιο γρήγορα μετά από ένα bolus γεύματος, αν εισάγετε αξιόπιστα τους υδατάνθρακες. Ενεργοποιήστε την στην καρτέλα Διαμόρφωσης για να δείτε τις ρυθμίσεις ασφάλειας εδώ, θα πρέπει να έχετε ολοκληρώσει τον Στόχο 7 για να χρησιμοποιήσετε αυτή τη λειτουργία. Μπορείτε να διαβάσετε περισσότερα σχετικά με τις ρυθμίσεις και τα [ Autosens στα OpenAPS docs ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Μέγιστη U/hr (μονάδες ινσουλίνης ανά ώρα) που ένας προσωρινός βασικός ρυθμός μπορεί να ρυθμιστεί

Αυτή η ρύθμιση υπάρχει ως όριο ασφαλείας για να αποφευχθεί η πιθανότητα να δοθεί από το AAPS επικίνδυνα υψηλός βασικός ρυθμός. Η τιμή μετράται σε μονάδες ανά ώρα (u / hr). Συνιστάται να το ορίσετε σε κάτι λογικό. Μια καλή σύσταση είναι να λάβετε το υψηλότερο βασικό ποσοστό </strong> στο προφίλ σας και να το ** να το πολλαπλασιάσετε κατά 4 **. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 4 to get a value of 2u/hr.

### Maximum basal IOB OpenAPS can deliver [U]

Amount of additional basal insulin (in units) allowed to accumulate in your body, on top of your normal basal profile. Once this value is reached, AAPS will stop giving additional basal insulin until your basal Insulin on Board (IOB) has decayed to within this range again.

* This value does not consider bolus IOB, only basal.
* This value is calculated and monitored indepentandlty of your normal basal rate. It is only the additional basal insulin on top of that normal rate that is considered.
* This value is measured in insulin units (u).

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. This prevents AAPS from giving any additional basal insulin at all. During this time AAPS will still be able to limit or turn off your basal insulin to help prevent hypoglycaemia.

This is an important step in order to:

* Have a period of time to safely get used to the AAPS system and monitor how it works.
* Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
* See how AAPS limits your basal insulin to prevent hypoglycaemia.

When you feel comfortable, you can allow the system to start giving you additional basal insulin, by raising the Max Basal IOB value. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 3 to get a value of 1.5u.

* You can start conservatively with this value and increase it slowly over time. 
* These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

*Note: As a safety feature, Max Basal IOB is hard-limited to 7u.*

## Absorption Settings

If you have selected to use AMA Autosens then you will be able to enter your maximum meal absorption time and how frequently you want autosense to refresh. If you often eat high fat or protein meals you will need to increase your meal absorption time.

## Pump settings

The options here will vary depending on which pump driver you have selected in 'Config Builder'. Pair and set your pump up according to the [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) or [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump.md) or [Accu Chek Combo Pump](../Configuration/Accu-Chek-Combo-Pump.md) instructions where relevant. If using AndroidAPS to open loop then make sure you have selected Virtual Pump in config builder.

## NS Client

* Set your 'nightscout URL' here (https://yourwebsitename.herokuapp.com or https://yourwebsitename.azurewebsites.net), and the 'API secret' (a 12 character password recorded in your heroku or azure variables). This enables data to be read and written between both the nightscout website and AndroidAPS. Double check for typos here if you are stuck in Objective 1.
* **Make sure that the URL is WITHOUT /api/v1/ at the end.**
    
    ![NSClient URL](../images/NSClientURL.png)

* 'Log app start to nightscout' will record a note in your careportal entries every time the app is started. The app should not be needing to start more than once a day; more frequently than this suggests a problem.

* 'Alarm options' allows you to select which default nightscout alarms to use through the app. For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [heroku or azure variables](http://www.nightscout.info/wiki/welcome/website-features#customalarms). They will only work whilst you have a connection to nightscout and are intended for parent/carers, if you have the CGM source on your phone then use those alarms instead (e.g. xdrip+).
* 'Enable local broadcasts' will share your careportal data to other apps on the phone such as xdrip.
* 'Always use basal absolute values' must be activated if you want to use Autotune properly.

## SMS Communicator

This setting allows remote control of the app by texting instructions to the patients phone which the app will follow such as suspending loop, or bolusing. Further information is described in [SMS Commands](../Usage/SMS-Commands.md) but it will only display in Preferences if you have selected this option in the Config Builder.

## Other

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Data Choices

* 'Fabric Upload' will send crash reporting and feature usage data to the developers.