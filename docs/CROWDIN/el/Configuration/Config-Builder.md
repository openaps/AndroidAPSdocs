# Διαμόρφωση

Ανάλογα με τις ρυθμίσεις σας, μπορείτε να ανοίξετε τη Διαμόρφωση μέσω μιας καρτέλας στο επάνω μέρος της οθόνης ή μέσω του μενού χάμπουργκερ.

![Ανοίξτε το αρχείο Διαμόρφωσης (config builder)](../images/ConfBuild_Open_AAPS30.png)

Η Διαμόρφωση (Conf) είναι η καρτέλα όπου μπορείτε να ενεργοποιήσετε και να απενεργοποιήσετε τις λειτουργικές δυνατότητες. The boxes on the left-hand side (A) allow you to select which one to use, the boxes on the right-hand side (C) allow you to view these as a tab (E) in AAPS. Σε περίπτωση που το δεξιό κουτάκια δεν είναι ενεργοποιημένα, μπορείτε να φτάσετε στη λειτουργία χρησιμοποιώντας το μενού hamburger (D) στην πάνω αριστερή γωνία της οθόνης.

Όπου υπάρχουν διαθέσιμες πρόσθετες ρυθμίσεις στο μενού, μπορείτε να κάνετε κλικ στο γρανάζι (B), ο οποίος θα σας μεταφέρει στις συγκεκριμένες ρυθμίσεις εντός των προτιμήσεων.

**First configuration:** Since AAPS 2.0 a Setup wizard guides you through the process of setting up AAPS. Πιέστε το μενού 3 κουκκίδων στην πάνω δεξιά πλευρά της οθόνης (F) και επιλέξτε 'Οδηγός εγκατάστασης' για να το χρησιμοποιήσετε.

![Κουτάκια Διαμόρφωση και γρανάζι](../images/ConfBuild_ConfigBuilder_AAPS30.png)

(Config-Builder-tab-or-hamburger-menu)=

## Καρτέλα ή μενού Χάμπουργκερ

With the checkbox under the eye symbol you can decide how to open the corresponding program section.

![Καρτέλα ή μενού Χάμπουργκερ](../images/ConfBuild_TabOrHH_AAPS30.png)

(Config-Builder-profile)=

## Προφίλ

* Επιλέξτε το βασικό προφίλ που θέλετε να χρησιμοποιήσετε. See [Profiles](../Usage/Profiles.md) page for more setup information.
* As of AAPS 3.0, only the local profile is available.

Ωστόσο, είναι εφικτό να συγχρονιστεί ένα προφίλ Nightscout σε ένα τοπικό προφίλ. To do this, however, it is important to clone the whole database record consisting of several profiles in the Nightscout editor. Παρακαλούμε δείτε τις παρακάτω οδηγίες. Αυτό μπορεί να είναι χρήσιμο αν σημαντικές αλλαγές σε ένα πιο εκτεταμένο προφίλ μπορούν να εισαχθούν πιο εύκολα μέσω της διεπαφής web, e.. για να αντιγράψετε χειροκίνητα δεδομένα από ένα υπολογιστικό φύλλο.

(Config-Builder-local-profile)=

### Τοπικό προφίλ

Το τοπικό προφίλ χρησιμοποιεί το βασικό προφίλ που καταχωρήθηκε χειροκίνητα στο τηλέφωνο. Μόλις επιλεγεί, εμφανίζεται μια νέα καρτέλα στο AAPS, όπου μπορείτε να αλλάξετε τα δεδομένα προφίλ που διαβάζονται από την αντλία, εάν είναι απαραίτητο. Με την επόμενη αλλαγή προφίλ εγγράφονται στην αντλία στο προφίλ 1. Αυτό το προφίλ συνιστάται καθώς δεν εξαρτάται από τη σύνδεση στο διαδίκτυο.

Τα τοπικά προφίλ σας είναι μέρος των ρυθμίσεων [που εξάγονται](../Usage/ExportImportSettings.md). Έτσι βεβαιωθείτε ότι έχετε ένα αντίγραφο ασφαλείας σε ασφαλές μέρος.

![Ρυθμίσεις τοπικού προφίλ](../images/LocalProfile_Settings.png)

Πλήκτρα:

* πράσινο plus: προσθέστε
* κόκκινο Χ: διαγραφή
* μπλε βέλος: αντίγραφο

Αν κάνετε οποιεσδήποτε αλλαγές στο προφίλ σας, βεβαιωθείτε ότι επεξεργάζεστε το σωστό προφίλ. In profile tab there is not always shown the actual profile being used - e.g. if you made a profile switch by using the profile tab on homescreen it may differ from the profile actually shown in profile tab as there is no connection between these.

#### Clone profile switch

Μπορείτε να δημιουργήσετε εύκολα ένα νέο τοπικό προφίλ από μια αλλαγή προφίλ. Σε αυτή την περίπτωση η χρονική μετατόπιση και το ποσοστό θα εφαρμοστούν στο νέο τοπικό προφίλ.

1. Κάντε κλικ στις τρεις τελείες στην επάνω δεξιά γωνία.
2. Επιλέξτε 'Θεραπείες'.
3. Πατήστε το σύμβολο αστέρι για να αποκτήσετε πρόσβαση μ στη σελίδα αλλαγής προφίλ.
4. Select the desired profile switch and press "Clone".
5. You can edit the new local profile in Local Profile (LP) tab or via the hamburger menu.

![Clone profile switch](../images/LocalProfile_ClonePS_AAPS30.png)

(Config-Builder-upload-local-profiles-to-nightscout)=

#### Ανεβάστε τα τοπικά προφίλ στο nightscout

Τα τοπικά προφίλ μπορούν επίσης να ανέβουν στο nightscout. The settings can be found in [NSClient preferences](Preferences-nsclient).

![Ανεβάστε το τοπικό προφίλ στο nightscout](../images/LocalProfile_UploadNS_AASP30.png)

#### Αλλάξτε το προφίλ στο πρόγραμμα επεξεργασίας προφίλ Nightscout

You can synchronoze changes to the profile in the Nighscout profile editor to local profiles. The settings can be found in [NSClient preferences](Preferences-nsclient).

It is necessary to clone the actual active entire Nightscout database records for the profiles and not just a profile with the blue arrow! The new database records then carries the current date and can be activated via the tab "local profile".

![Κλωνοποιήστε τις βάσεις δεδομένων](../images/Nightscout_Profile_Editor.PNG)

### Βοηθός προφίλ

Ο βοηθός προφίλ προσφέρει δύο λειτουργίες:

1. Εύρεση προφίλ για παιδιά
2. Σύγκριση δύο προφίλ ή εναλλαγή προφίλ προκειμένου να κλωνοποιηθεί ένα νέο προφίλ

Details are explained on the separate [profile helper page](../Configuration/profilehelper.md).

(Config-Builder-insulin)=

## Ινσουλίνη

![Τύπος Ινσουλίνης](../images/ConfBuild_Insulin_AAPS30.png)

* Επιλέξτε τον τύπο ινσουλίνης που χρησιμοποιείτε.
* The options 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' and 'Free-Peak Oref' all have an exponential shape. More information is listed in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* Οι καμπύλες θα ποικίλλουν βασιζόμενες στην DIA και στην ώρα κορύφωσης.
    
    * Η ΜΩΒ γραμμή δείχνει πόση **ινσουλίνη παραμένει** μετά την ένεση καθώς εξασθενεί με το χρόνο.
    * Οι μπλε γραμμές δείχνουν **πόση ενεργή** ινσουλίνη υπάρχει.

### DIA

* Η DIA (διάρκεια δράσης ινσουλίνης) δεν είναι η ίδια για κάθε άτομο Γι 'αυτό θα πρέπει να το δοκιμάσετε για τον εαυτό σας. 
* Αλλά πρέπει πάντα να είναι τουλάχιστον 5 ώρες.
* For a lot of people using ultra-rapid insulins like Fiasp there is practically no noticeable effect after 3-4 hours any more, even if 0.0xx units are available as a rule then. This residual amount can still be noticeable during sports, for example. Για αυτόν ακριβώς τον λόγο το AAPS χρησιμοποιεί ως ελάχιστη ώρα τις 5 ώρες για τη διάρκεια δράσης (DIA) της ινσουλίνης 
* You can read more about that in the Insulin Profile section of [this](Screenshots-insulin-profile) page.

### Insulin type differences

* For 'Rapid-Acting', 'Ultra-Rapid' and 'Lyumjev' the DIA is the only variable you can adjust by yourself, the time to peak is fixed. 
* Free-Peak allows you to adjust both the DIA and the time to peak, and must only be used by advanced users who know the effects of these settings. 
* The [insulin curve graph](Screenshots-insulin-profile) helps you to understand the different curves.
* You can view it by enabling the tickbox to show it as a tab, otherwise it will be in the hamburger menu.

#### Rapid-Acting Oref

![Insulin type Rapid-Acting Oref](../images/ConfBuild_Insulin_RAO.png)

* recommended for Humalog, Novolog and Novorapid
* DIA = τουλάχιστον 5 ώρες
* Μέγιστη. κορυφή = 75 λεπτά μετά την ένεση (σταθερή, μη ρυθμιζόμενη)

#### Ultra-Rapid Oref

![Insulin type Ultra-Rapid Oref](../images/ConfBuild_Insulin_URO.png)

* προτείνεται για FIASP
* DIA = τουλάχιστον 5 ώρες
* Μέγιστη. κορυφή = 55 λεπτά μετά την ένεση (σταθερή, μη ρυθμιζόμενη)

(Config-Builder-lyumjev)=

#### Lyumjev

![Τύπος ινσουλίνης Lyumjev](../images/ConfBuild_Insulin_L.png)

* ειδικό προφίλ ινσουλίνης για το Lyumjev
* DIA = τουλάχιστον 5 ώρες
* Μέγιστη. κορυφή = 45 λεπτά μετά την ένεση (σταθερή, μη ρυθμιζόμενη)

#### Free Peak Oref

![Insulin type Free Peak Oref](../images/ConfBuild_Insulin_FPO.png)

* With the "Free Peak 0ref" profile you can individually enter the peak time. To do so click to cogwheel to enter advanced settings.
* The DIA is automatically set to 5 hours if it is not specified higher in the profile.
* This effect profile is recommended if an unbacked insulin or a mixture of different insulins is used.

(Config-Builder-bg-source)=

## Πηγή BG

Select the blood glucose source you are using - see [BG Source](BG-Source.md) page for more setup information.

![Διαμόρφωση BG πηγή](../images/ConfBuild_BGSource_AAPS30.png)

* [Build Your Own Dexcom App (BYODA)](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0).
* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - υποστηρίζεται μόνο έκδοση 4.15.57 και νεότερη
* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)
* [Tomato App](http://tomato.cool/) για τη συσκευή MiaoMiao
* [Εφαρμογή Glunovo](https://infinovo.com/) για το σύστημα καταγραφης Glunovo CGM
* NSClient BG - not recommended as closed loop relies on mobile data / wifi coverage in this case. CGM data will only be received if there is an online connection to your NS site. Better use local broadcast from one of the other CGM data sources.
* Τυχαία τιμή γλυκόζης (BG): Δημιουργεί τυχαία δεδομένα τιμών γλυκόζης (λειτουργία επίδειξης μόνο)

(Config-Builder-pump)=

## Αντλία

Επιλέξτε την αντλία που χρησιμοποιείτε.

![Επιλογή διαμόρφωσης για την εφαρμογή δημιουργίας της αντλίας ](../images/ConfBuild_Pump_AAPS30.png)

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Korean (τοπική αντλία DanaR pump για τη Κορέα)
* Αντλία Dana Rv2 (αντλία DanaR με την ανεπίσημη αναβάθμιση λογισμικού)
* [Αντλία Dana-i/RS](DanaRS-Insulin-Pump.md)
    
    * Για τις αντλίες dana, χρησιμοποιήστε **Σύνθετες ρυθμίσεις** για να ενεργοποιήσετε το BT φρουρό εάν είναι απαραίτητο. Απενεργοποιεί το Bluetooth για ένα δευτερόλεπτο αν δεν υπάρχει δυνατή σύνδεση με την αντλία. Αυτό μπορεί να βοηθήσει σε ορισμένα τηλέφωνα όπου το bluetooth κολλάει.
    * Ο [Κωδικός πρόσβασης για την Dana RS αντλία](../Configuration/DanaRS-Insulin-Pump.md) πρέπει να εισαχθεί σωστά. Ο κωδικός δεν είχε ελεγχθεί σε προηγούμενες εκδόσεις.

* [Accu Chek Insight](Accu-Chek-Insight-Pump.md)

* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (requires ruffy installation)
* [Αντλία Omnipod Eros](OmnipodEros.md)
* [Omnipod DASH](OmnipodDASH.md)
* [Medtronic](MedtronicPump.md)
* [Diaconn G8](DiaconnG8.md)
* MDI (receive AAPS suggestions for your multiple daily injections therapy)
* Εικονική αντλία (ανοικτό κύκλωμα για αντλία που δεν έχει ακόμα οδηγό - μόνο προτάσεις AAPS)

## Ανίχνευση ευαισθησίας

Επιλέξτε τον τύπο ανίχνευσης ευαισθησίας. Για περισσότερες λεπτομέρειες σχετικά με διαφορετικά σχέδια παρακαλώ [διαβάστε εδώ](../Configuration/Sensitivity-detection-and-COB.md). This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. Περισσότερες λεπτομέρειες σχετικά με τον αλγόριθμο ευαισθησίας μπορούν να διαβαστούν στα έγγραφα [OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](Open-APS-features-autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the Autosens percentage / the line in your graph is displayed for information only.

(Config-Builder-absorption-settings)=

### Ρύθμιση απορρόφησης

Εάν χρησιμοποιείτε Oref1 με SMB, πρέπει να αλλάξετε το **min_5m_carbimpact** στο 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../Usage/COB-calculation.md) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

(Config-Builder-aps)=

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS AMA (advanced meal assist, state of the algorithm in 2017) In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users) Note you need to be in [Objective 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Κύκλωμα

* Switch between Open Loop, Closed Loop and Low Glucose Suspend (LGS).

![Config builder - loop mode](../images/ConfigBuilder_LoopLGS.png)

(Config-Builder-open-loop)=

### Ανοιχτό κύκλωμα

* AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. 
* The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). 
* This option is for getting to know how AAPS works or if you are using an unsupported pump.

(Config-Builder-closed-loop)=

### Κλειστό κύκλωμα

* AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). 
* The Closed Loop works within numerous safety limits, which you can be set individually.
* Το κλειστό κύκλωμα είναι δυνατό μόνο εάν βρίσκεστε σε [ Στόχος 6 ](Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend) ή υψηλότερα και χρησιμοποιήστε μια υποστηριζόμενη αντλία.
* Παρακαλώ σημειώστε: Σε κατάσταση κλειστού κυκλώματος ένας μοναδικός στόχος αντί του εύρους στόχου (π.χ. συνιστώνται 5,5 mmol ή 100 mg/dl αντί για 5,0 - 7,0 mmol ή 90 - 125 mg/dl).

### Αναστολή Χαμηλής Γλυκόζης)

* το μέγιστο IOB έχει οριστεί σε μηδέν
* Αυτό σημαίνει ότι εάν η γλυκόζη του αίματος πέφτει μπορεί να μειώσει τον βασικό ρυθμό για εσας.
* Αλλα εάν η γλυκόζη του αίματος αυξάνεται, καμία αυτόματη διόρθωση δεν θα γίνει. Your basal rates will remain the same as your selected profile.
* Only if basal IOB is negative (from a previous Low Glucose Suspend) additional insulin will be given to lower BG.

### Ελάχιστο αίτημα για αλλαγή

* When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. 
* To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate.
* This defines the relative change required to trigger a notification.

## Στόχοι ( μαθαίνοντας το πρόγραμμα)

AAPS has a leraning program (objectives) that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. Αυτός είναι ο μόνος τρόπος για να εμπιστευτείτε το σύστημα.

You should [export your settings](../Usage/ExportImportSettings.md) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.md) page for more information.

## Θεραπείες

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](Screenshots-carb-correction).

## Γενικά

### Σφαιρική Εικόνα

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Μπορείτε να έχετε πρόσβαση στις ρυθμίσεις κάνοντας κλικ στο γρανάζι.

#### Κρατήστε την οθόνη ενεργή

Η επιλογή 'Ενεργοποίηση οθόνης' θα αναγκάσει το Android να διατηρεί την οθόνη ενεργή ανά πάσα στιγμή. Αυτό είναι χρήσιμο για παρουσιάσεις κ. λ. π. Αλλά καταναλώνει πολύ μπαταρία. Συνεπώς, συνιστάται να συνδέσετε το smartphone με το καλώδιο του φορτιστή.

#### Buttons

Define which Buttons are shown on the home screen.

* Θεραπείες
* Υπολογιτής
* Ινσουλίνη
* Υδατάνθρακες
* CGM (opens xDrip+)
* Καλιμπράρισμα

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### Ρυθμίσεις Γρήγορου Οδηγού

Δημιουργήστε ένα κουμπί για ένα συγκεκριμένο πρότυπο γεύματος (υδατάνθρακες και μέθοδος υπολογισμού για το bolus) που θα εμφανίζονται στην αρχική οθόνη. Χρησιμοποιείται για τα γεύματα που καταναλώνονται συχνά. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Default Temp-Targets

Choose default temp-targets (duration and target). Preset values are:

* Φαγητό σύντομα: στόχος 72 mg/ dl / 4, 0 mmol/l, διάρκεια 45 λεπτά
* Δραστηριότητα: στόχος 140 mg/dl / 7.8 mmol/l, διάρκεια 90 min
* υπογλυκαιμία: στόχος 125 mg/dl / 6, 9 mmol/l, διάρκεια 45 λεπτά 

#### Fill/Prime standard insulin amounts

Choose the default amounts of the three buttons in fill/prime dialogue, depending on the length of your catheter.

#### Range of visualization

Choose the high and low marks for the BG-graph on AAPS overview and smart watch. It is only the visualization, not the target range for your BG. Παράδειγμα: 70 - 180 mg/dl ή 3.9 - 10 mmol/l

#### Συντομογραφίες ενοτήτων

Επιλέξτε αν οι τίτλοι καρτέλας στο AAPS είναι μεγάλοι (π.χ. ACTIONS, LOCAL PROFILE, AUTOMATION) ή σύντομες (π.χ. ACT, LP, AUTO)

#### Show notes field in treatment dialogs

Επιλέξτε αν θέλετε να έχετε ένα πεδίο σημειώσεων όταν εισάγετε θεραπείες ή όχι.

#### Φώτα κατάστασης

Choose if you want to have [status lights](Preferences-status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Η κρίσιμη ηλικία θα εμφανιστεί με κόκκινο χρώμα.

#### Προηγμένες ρυθμίσεις

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percenteage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](Open-APS-features-max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### Ενέργειες

* Some buttons to quickly access common features.
* See [AAPS screenshots](Screenshots-action-tab) for details.

### Αυτοματοποίηση

User defined automation tasks ('if-then-else'). Παρακαλώ [διαβάστε εδώ](../Usage/Automation.md).

(Config-Builder-sms-communicator)=

### Επικοινωνία με SMS

Allows remote caregivers to control some AAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.md) for more setup information.

### Φαγητό

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AAPS calculator. (μόνο για ανάγνωση)

(Config-Builder-wear)=

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

If you want to bolus etc. from the watch then within "Wear settings" you need to enable "Controls from Watch".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Ξαναστείλετε όλα τα δεδομένα. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### NSClient

* Setup sync of your AAPS data with Nightscout.
* Settings in [preferences](Preferences-nsclient) can be opened by clicking the cog wheel.

### Συντήρηση

Ηλεκτρονικό ταχυδρομείο και αριθμός αρχείων καταγραφής που αποστέλλονται. Κανονικά καμία αλλαγή δεν είναι απαραίτητη.

### Διαμόρφωση

Use tab for config builder instead of hamburger menu.