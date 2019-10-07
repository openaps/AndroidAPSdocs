# Οθόνες AndroidAPS

## Αρχική οθόνη

![Αρχική οθόνη V2.1](../images/Screenshot_Home_screen_V2_1.png)

Αυτή είναι η πρώτη οθόνη που θα συναντήσετε όταν ανοίγετε το AndroidAPS και περιέχει τις περισσότερες από τις πληροφορίες που θα χρειαστείτε καθημερινά.

### Ενότητα Α

* πλοηγηθείτε ανάμεσα στις διάφορες λειτουργικές μονάδες του AndroidAPS, μετακινώντας αριστερά ή δεξιά

### Ενότητα Β

* αλλάξτε την κατάσταση του κυκλώματος (ανοικτό κύκλωμα, κλειστό κύκλωμα, κύκλωμα αναστολής κλπ.)
* δείτε το τρέχον προφίλ σας και κάντε [αλλαγή προφίλ](../Usage/Profiles.md)
* δείτε το τρέχον επίπεδο στόχου για τη γλυκόζη αίματος και ορίστε έναν [προσωρινό στόχο](../Usage/temptarget.md).

Πατήστε παρατεταμένα κάποιο από τα κουμπιά για να αλλάξετε τη ρύθμιση. Π.χ πιέστε παρατεταμένα τη μπάρα στόχου στην επάνω δεξιά γωνία ("110" στο στιγμιότυπο οθόνης) για να ορίσετε ένα προσωρινό ρυθμό.

### Ενότητα Γ

* η πιο πρόσφατη ανάγνωση γλυκόζης αίματος από το CGM σας
* πόσο καιρό πριν διαβάστηκε
* αλλαγές τα τελευταία 15 και 40 λεπτά
* το τρέχον βασικό σας ρυθμό - συμπεριλαμβανομένου οποιουδήποτε προσωρινού βασικού ρυθμού (TBR) που έχει προγραμματιστεί από το σύστημα
* ινσουλίνη επί του οργανισμού (IOB)
* υδατάνθρακες στον οργανισμό (COB)

Οι προαιρετικές[ λυχνίες κατάστασης ](../Configuration/Preferences#overview)(CAN | INS | RES | SEN | BAT) δίνουν μια οπτική προειδοποίηση για χαμηλό επίπεδο δεξαμενής και μπαταρίας, καθώς και για καθυστερημένη αλλαγή τοποθεσίας.

Η ένδειξη ινσουλίνης στον οργανισμό θα είναι μηδενική, εάν εκτελείται μόνο το βασικό σας ρυθμό και δεν υπήρχε ινσουλίνη που να παραμένει από προηγούμενες βόλτες. Οι αριθμοί στις αγκύλες δείχνουν πόσο αποτελείται από την ινσουλίνη που απομένει από τις προηγούμενες bolus και πόσο είναι βασική διακύμανση λόγω προηγούμενων προγραμματισμένων από το AAPS TBR. Αυτή η δεύτερη συνιστώσα μπορεί να είναι αρνητική εάν πρόσφατα υπήρχαν περίοδοι μειωμένης βασικής.

### Ενότητα Δ

Κάντε κλικ στο βέλος στη δεξιά πλευρά της οθόνης στην ενότητα Δ για να επιλέξετε ποιες πληροφορίες εμφανίζονται στα παρακάτω γραφήματα.

### Ενότητα Ε

Είναι το γράφημα που δείχνει τη γλυκόζη αίματος (BG) όπως διαβάζεται από την οθόνη γλυκόζης σας (CGM) και εμφανίζει ειδοποιήσεις Nightscout, όπως βαθμονομήσεις fingerstick και καταχωρήσεις υδατανθράκων.

Πατήστε παρατεταμένα το γράφημα για να αλλάξετε τη χρονική κλίμακα. Μπορείτε να επιλέξετε 6, 8, 12, 18 ή 24 ώρες.

Οι εκτεταμένες γραμμές δείχνουν τους προβλεπόμενους υπολογισμούς και τάσεις BG - εάν το έχετε επιλέξει.

* Πορτοκαλί: COB (το χρώμα χρησιμοποιείται γενικά για να αντιπροσωπεύει COB και υδατάνθρακες)
* Σκούρο μπλε: IOB (το χρώμα χρησιμοποιείται γενικά για να αντιπροσωπεύει το IOB και την ινσουλίνη)
* Ανοιχτό γαλάζιο: μηδενικός ρυθμός
* Σκούρο κίτρινο: UAM

Αυτές οι γραμμές σας δείχνουν τις διαφορετικές προβλέψεις βάσει της τρέχουσας απορρόφησης υδατανθράκων (COB). μόνο ινσουλίνη (IOB). δείχνοντας πόσο χρόνο θα πάρει το BG για να ξεπεράσει τον στόχο σε περίπτωση που οι αποκλίσεις ξαφνικά σταματήσουν και τρέχουμε μηδενικό ρυθμό μέχρι τότε (μηδενικός ρυθμός) και μη ανιχνεύσιμο γεύμα / αποτέλεσμα όπου ανιχνεύονται υδατάνθρακες αλλά δεν έχουν εισαχθεί στο σύστημα από το χρήστης (UAM).

Η στερεά μπλε γραμμή δείχνει τη βασική παροχή της αντλίας σας. Η διακεκομμένη μπλε γραμμή είναι η βασική τιμή εάν δεν υπήρχαν προσωρινές βασικές ρυθμίσεις (TBR) και η στερεά μπλε γραμμή είναι η πραγματική παράδοση με την πάροδο του χρόνου.

### Ενότητα Ζ

Το τμήμα Ζ μπορεί επίσης να ρυθμιστεί χρησιμοποιώντας τις επιλογές στην ενότητα Δ. Σε αυτό το παράδειγμα παρουσιάζουμε το IΟB (ινσουλίνη στον οργανισμό) - εάν δεν υπήρχαν TBRs και δεν υπήρχαν υπόλοιπα bolus αυτό θα ήταν μηδέν, η ευαισθησία, όπως και η απόκλιση. Οι ΓΚΡΙ γραμμές δείχνουν απόκλιση λόγω υδατανθράκων, ΠΡΑΣΙΝΟ ότι το BG είναι υψηλότερο από τον αλγόριθμο που αναμένεται να είναι και το ΚΟΚΚΙΝΟ ότι είναι χαμηλότερο από ότι αναμένετε από τον αλγόριθμο.

### Ενότητα Η

Σας επιτρέπει να διαχειριστείτε ένα bolus (κανονικά θα χρησιμοποιούσατε το κουμπί Αριθμομηχανής για να το κάνετε αυτό) και να προσθέσετε βαθμονόμηση CGM μέσω του δακτύλου. Επίσης, θα εμφανιστεί ένα κουμπί Quick Wizzard, αν έχει ρυθμιστεί στη [ Διαμόρφωση ](.../Configuration/Config-Builder#quickwizard-settings).

## Η Αριθμομηχανή

![Calculator](../images/Screenshot_Bolus_calculator.png)

Όταν θέλετε να κάνετε ένα bolus γεύματος, αυτό θα το κάνετε κανονικά από.

### Ενότητα Α

Περιέχει τη θέση όπου εισάγετε τις πληροφορίες σχετικά με το bolus που θέλετε. Το πεδίο BG είναι συνήθως ήδη συμπληρωμένο με την τελευταία ανάγνωση από το CGM σας. Εάν δεν έχετε λειτουργικό CGM τότε θα είναι κενό. Στο πεδίο CARBS προσθέτετε την εκτίμησή σας για την ποσότητα υδατανθράκων - ή ισοδύναμο - που θέλετε να χορηγήσετε. Το πεδίο CORR είναι εάν θέλετε να τροποποιήσετε την τελική δοσολογία για κάποιο λόγο και το πεδίο CARB TIME είναι για προ-bolus, ώστε να μπορείτε να ενημερώσετε το σύστημα ότι θα υπάρξει καθυστέρηση στη χορήγηση υδατανθράκων και ότι το bolus θα είναι καθυστερημένο αντίστοιχα. Μπορείτε να βάλετε έναν αρνητικό αριθμό σε αυτό το πεδίο αν κάνετε bolusing για προηγούμενους υδατάνθρακες.

SUPER BOLUS is where the basal insulin for the next two hours is added to the immediate bolus and a zero TBR is issued for the following two hours to take back the extra insulin. Η ιδέα είναι να παραδώσουμε την ινσουλίνη νωρίτερα και ελπίζουμε να μειώσουμε τις απότομες μεταβολές.

### Ενότητα Β

Εμφανίζει το υπολογισμένο bolus. Εάν η ποσότητα της ινσουλίνης επί του οργανισμού υπερβαίνει ήδη το υπολογιζόμενο bolus, τότε θα εμφανιστεί μόνο η ποσότητα των απαιτούμενων υδατανθράκων.

### Ενότητα Γ

Εμφανίζει τα διάφορα στοιχεία που έχουν χρησιμοποιηθεί για τον υπολογισμό του bolus. Μπορείτε να καταργήσετε την επιλογή όσων δεν θέλετε να συμπεριλάβετε, αλλά κανονικά δεν προτείνετε.

### Συνδυασμοί COB και IOB και τι σημαίνουν

<ul>
    <li>Αν σημειώσετε COB και IOB μη απορροφημένους υδατάνθρακες που δεν καλύπτονται ήδη με ινσουλίνη + θα ληφθεί υπόψη όλη η ινσουλίνη που έχει παραδοθεί ως TBR ή SMB</li>
    <li>Εάν σημειώσετε COB χωρίς IOB, διατρέχετε τον κίνδυνο υπερβολικής δόσης ινσουλίνης, καθώς το AAPS δεν υπολογίζει αυτό που έχει ήδη δοθεί. </li>
    <li>Εάν σημειώσετε IOB χωρίς COB, το AAPS λαμβάνει υπόψη την ήδη χορηγούμενη ινσουλίνη, αλλά δεν θα καλύψει αυτό εκτός από τους υδατάνθρακες που πρέπει να απορροφηθούν. Αυτό οδηγεί σε μια ειδοποίηση σχετικά με την «εξαφάνιση των υδατανθράκων».
</ul>

Εάν κάνατε bolus για επιπλέον τροφή λίγο μετά το bolus γεύματος (δηλαδή πρόσθετο επιδόρπιο), μπορεί να είναι χρήσιμο ξετσεκάρετε όλα τα κουτιά. Με αυτόν τον τρόπο προστίθενται μόνο οι νέοι υδατάνθρακες καθώς το κύριο γεύμα δεν θα απορροφηθεί απαραιτήτως, έτσι ώστε το IOB να μην ταιριάζει με το COB με ακρίβεια λίγο μετά το bolus γεύματος.

### Αργή απορρόφηση υδατανθράκων

Από την έκδοση 2.4, το AAPS προειδοποιεί για αργή απορρόφηση υδατανθράκων εάν κάτι τέτοιο ανιχνευθεί. Θα εμφανιστεί ένα πρόσθετο κείμενο στην οθόνη επιβεβαίωσης μετά τη χρήση της αριθμομηχανής. Ο κίνδυνος είναι ότι το COB θα υπερεκτιμηθεί και ότι θα χορηγηθεί πολύ ινσουλίνη.

![Αργή απορρόφηση υδατανθράκων](../images/Calculator_SlowCarbAbsorbtion.png)

Σε αυτό το παράδειγμα χρησιμοποιήθηκε 41% του χρόνου [ 5 λεπτά ελάχιστη δράση υδατανθράκων ](..//Configuration/Config-Builder.html?highlight=min_5m_carbimpact#absorption-settings) αντί της τιμής που υπολογίστηκε από τις αποκλίσεις.

Σε αυτή την περίπτωση θα πρέπει να σκεφτείτε να πατήσετε "Ακύρωση" και να υπολογίσετε ξανά με το COB μη επιλεγμένο. Εάν από τον χειροκίνητο υπολογισμό σας βλέπετε την ανάγκη για διορθωτικό bolus εισάγετε το με το χέρι. Αλλά να είστε προσεκτικοί για να μην πάρετε υπερβολική δόση!

## Προφίλ ινσουλίνης

![Προφίλ ινσουλίνης](../images/Screenshot_insulin_profile.png)

Αυτό δείχνει το προφίλ δραστηριότητας της ινσουλίνης που έχετε επιλέξει. Η μώβ γραμμή δείχνει πόση ινσουλίνη παραμένει μετά την ένεση της καθώς αποσυντίθεται με το χρόνο και η μπλέ γραμμή δείχνει πόσο ενεργή είναι.

Συνήθως θα χρησιμοποιείτε ένα από τα προφίλ Oref - και το σημαντικό πράγμα που πρέπει να σημειωθεί είναι ότι η αποσύνθεση έχει μια μακρά ουρά. Εάν έχετε συνηθίσει στη χειροκίνητη άντληση, πιθανότατα έχετε συνηθίσει να υποθέτετε ότι η ινσουλίνη αποσυντίθεται σε περίπου 3,5 ώρες. Ωστόσο, όταν είστε σε κύκλωμα οι μακριές ουρές παίζουν ρόλο δεδομένου ότι οι υπολογισμοί είναι πολύ πιο ακριβείς και αυτές οι μικρές ποσότητες προσθέτουν όταν υποβάλλονται στους αναδρομικούς υπολογισμούς στον αλγόριθμο AndroidAPS.

Για μια πιο λεπτομερή συζήτηση σχετικά με τους διαφορετικούς τύπους ινσουλίνης, τα προφίλ δραστηριότητάς τους και γιατί όλα αυτά είναι σημαντικά, μπορείτε να διαβάσετε ένα άρθρο εδώ στο [ Κατανόηση των νέων καμπυλών IOB με βάση τις καμπύλες εκθετικής δραστηριότητας ](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

Και μπορείτε να διαβάσετε ένα εξαιρετικό άρθρο σχετικά με αυτό εδώ: [ Γιατί κάνουμε συχνά λάθος στη διάρκεια της δράσης της ινσουλίνης (DIA) φορές που χρησιμοποιούμε και γιατί έχει σημασία... ](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

Και περισσότερα στο: [ Εκθετικές καμπύλες ινσουλίνης + Fiasp ](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Κατάσταση Αντλίας

![Κατάσταση Αντλίας](../images/Screenshot_pump_Combo.png)

Εδώ βλέπουμε την κατάσταση της αντλίας ινσουλίνης - στην περίπτωση αυτή ένα Accu-Chek Combo. Οι πληροφορίες που εμφανίζονται είναι αυτονόητες. Με το πάτημα του πλήκτρου ΙΣΤΟΡΙΚΟ θα διαβαστούν τα δεδομένα από το ιστορικό της αντλίας σας, συμπεριλαμβανομένου του βασικού σας προφίλ. But remember only one basal profile is supported on the Combo pump.

## Care Portal

![Care Portal](../images/Screenshot_care_portal.png)

This replicates the functions you will find on your Nightscout screen under the "+" symbol which allows you to add notes to your records. Functions such as recording when you change a pump site, or insulin cartridge should be self explanatory. BUT this section does not issue any commands to your pump. So if you add a bolus using this screen it simply makes a note of this on your Nightscout record, the pump won't be instructed to deliver a bolus.

## Loop, MA, AMA, SMB

You don't normally need to worry about these, they show the results of the OpenAPS algorithm which runs each time the system gets a fresh reading from the CGM. These are discussed elsewhere.

## Προφίλ

![Προφίλ](../images/Screenshot_profile.png)

AndroidAPS can run using a number of different profile configuratons. Typically - as shown here - the Nightscout profile has been downloaded via the built in Nighscout client and is displayed here in read-only form. If you wanted to make any changes you would do this from your Nightscout user interface and then do a [Profile Switch](../Usage/Profiles.md) in AndroidAPS to activate the changes. Data such as the basal profile would then be automatically copied over to your pump.

**DIA:** stands for Duration of Insulin Action and it is discussed above in the section on insulin profiles.

**IC:** is Insulin to Carb ratio. This profile has a number of different values set for different times of day.

**ISF:** is Insulin Sensitivity Factor - the amount by which one unit of insulin will reduce your blood glucose assuming that nothing else changes.

**Basal:** is the basal profile programmed into your pump.

**Target:** is the blood glucose level that you want the rig to be aiming for all the time. You can set different levels for differenttimes of day if you wish, and you can even set an upper and lower range so that the rig will only start to make changes when the predicted blood glucose value falls outside, but if you do that then the rig will respond more slowly and you are unlikely to achieve such stable blood sugars.

## Treatment, xDrip, NSClient

These are simply logs of treatments (boluses and carbs), xDrip messages and messages sent to Nightscout via the built-in Nightscout client. You don't normally need to worry about any of these unless there is a problem.

## Διαμόρφωση

![Διαμόρφωση](../images/Screenshot_config_builder.png)

This is where you will set up the configuraton of your AndroidAPS rig. This screenshot shows a pretty typical rig using a Combo pump, a Dexcom G5 CGM sensor being managed via xDrip+ and running with NovoRapid insulin on an Oref profile and connected to a Nightscout cloud based server.

The tick box on the right determines if that particular module will be displayed in the top menu bar (see section A at Homescreen) and the small gear wheel symbol allows access to the setting for that module, if there are any.

## Settings and Preferences

At the top right of the navigation bar you will find three small vertical dots. Pressing on these takes you to the app's preferences, history browser, setup wizard, about the app information and the exit button that will close AAPS.