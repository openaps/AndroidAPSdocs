# Διαμόρφωση

Ανάλογα με τις ρυθμίσεις σας, μπορείτε να ανοίξετε τη Διαμόρφωση μέσω μιας καρτέλας στο επάνω μέρος της οθόνης ή μέσω του μενού χάμπουργκερ.

![Ανοίξτε το αρχείο Διαμόρφωσης (config builder)](../images/ConfBuild_Open_AAPS30.png)

Η Διαμόρφωση (Conf) είναι η καρτέλα όπου μπορείτε να ενεργοποιήσετε και να απενεργοποιήσετε τις λειτουργικές δυνατότητες. Τα κουτάκια στην αριστερή πλευρά (A) σας επιτρέπουν να επιλέξετε ποιο θα χρησιμοποιηθεί, τα κουτάκια στη δεξιά πλευρά (C) σας επιτρέπουν να τα δείτε ως καρτέλα (E) στο AndroidAPS. Σε περίπτωση που το δεξιό κουτάκια δεν είναι ενεργοποιημένα, μπορείτε να φτάσετε στη λειτουργία χρησιμοποιώντας το μενού hamburger (D) στην πάνω αριστερή γωνία της οθόνης.

Όπου υπάρχουν διαθέσιμες πρόσθετες ρυθμίσεις στο μενού, μπορείτε να κάνετε κλικ στο γρανάζι (B), ο οποίος θα σας μεταφέρει στις συγκεκριμένες ρυθμίσεις εντός των προτιμήσεων.

**Πρώτη ρύθμιση:** Καθώς ο Οδηγός ρυθμίσεων AAPS 2.0 σας καθοδηγεί στη διαδικασία της ρύθμισης του AndroidAPS. Πιέστε το μενού 3 κουκκίδων στην πάνω δεξιά πλευρά της οθόνης (F) και επιλέξτε 'Οδηγός εγκατάστασης' για να το χρησιμοποιήσετε.

![Κουτάκια Διαμόρφωση και γρανάζι](../images/ConfBuild_ConfigBuilder_AAPS30.png)

(Config-Builder-tab-or-hamburger-menu)=

## Καρτέλα ή μενού Χάμπουργκερ

Με το πλαίσιο ελέγχου κάτω από το σύμβολο του ματιού μπορείτε να αποφασίσετε πώς να ανοίξετε την αντίστοιχη ενότητα του προγράμματος.

![Καρτέλα ή μενού Χάμπουργκερ](../images/ConfBuild_TabOrHH_AAPS30.png)

(Config-Builder-profile)=

## Profile

* Επιλέξτε το βασικό προφίλ που θέλετε να χρησιμοποιήσετε. See [Profiles](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) page for more setup information.
* Από το AAPS 3.0, μόνο το τοπικό προφίλ είναι διαθέσιμο.

Ωστόσο, είναι εφικτό να συγχρονιστεί ένα προφίλ Nightscout σε ένα τοπικό προφίλ. Για να γίνει αυτό, ωστόσο, είναι σημαντικό να κλωνοποιηθεί ολόκληρη η εγγραφή βάσης δεδομένων που αποτελείται από πολλά προφίλ στον επεξεργαστή Nightscout. Παρακαλούμε δείτε τις παρακάτω οδηγίες. Αυτό μπορεί να είναι χρήσιμο αν σημαντικές αλλαγές σε ένα πιο εκτεταμένο προφίλ μπορούν να εισαχθούν πιο εύκολα μέσω της διεπαφής web, e.. για να αντιγράψετε χειροκίνητα δεδομένα από ένα υπολογιστικό φύλλο.

(Config-Builder-local-profile)=

### Τοπικό προφίλ

Το τοπικό προφίλ χρησιμοποιεί το βασικό προφίλ που καταχωρήθηκε χειροκίνητα στο τηλέφωνο. Μόλις επιλεγεί, εμφανίζεται μια νέα καρτέλα στο AAPS, όπου μπορείτε να αλλάξετε τα δεδομένα προφίλ που διαβάζονται από την αντλία, εάν είναι απαραίτητο. Με την επόμενη αλλαγή προφίλ εγγράφονται στην αντλία στο προφίλ 1. Αυτό το προφίλ συνιστάται καθώς δεν εξαρτάται από τη σύνδεση στο διαδίκτυο.

Your local profiles are part of [exported settings](../Maintenance/ExportImportSettings.md). Έτσι βεβαιωθείτε ότι έχετε ένα αντίγραφο ασφαλείας σε ασφαλές μέρος.

![Ρυθμίσεις τοπικού προφίλ](../images/LocalProfile_Settings.png)

Πλήκτρα:

* πράσινο plus: προσθέστε
* κόκκινο Χ: διαγραφή
* μπλε βέλος: αντίγραφο

Αν κάνετε οποιεσδήποτε αλλαγές στο προφίλ σας, βεβαιωθείτε ότι επεξεργάζεστε το σωστό προφίλ. In profile tab there is not always shown the actual profile being used - e.g. if you made a profile switch by using the profile tab on homescreen it may differ from the profile actually shown in profile tab as there is no connection between these.

#### Κλωνοποιήστε την αλλαγή του προφίλ

Μπορείτε να δημιουργήσετε εύκολα ένα νέο τοπικό προφίλ από μια αλλαγή προφίλ. Σε αυτή την περίπτωση η χρονική μετατόπιση και το ποσοστό θα εφαρμοστούν στο νέο τοπικό προφίλ.

1. Κάντε κλικ στις τρεις τελείες στην επάνω δεξιά γωνία.
2. Επιλέξτε 'Θεραπείες'.
3. Πατήστε το σύμβολο αστέρι για να αποκτήσετε πρόσβαση μ στη σελίδα αλλαγής προφίλ.
4. Επιλέξτε την επιθυμητή αλλαγή προφίλ και πατήστε "clone ".
5. Μπορείτε να επεξεργαστείτε το νέο τοπικό προφίλ (LP) στην καρτέλα (tab) ή στο hamburger μενού.

![Κλωνοποιήστε την αλλαγή του προφίλ](../images/LocalProfile_ClonePS_AAPS30.png)

(Config-Builder-upload-local-profiles-to-nightscout)=

#### Ανεβάστε τα τοπικά προφίλ στο nightscout

Τα τοπικά προφίλ μπορούν επίσης να ανέβουν στο nightscout. The settings can be found in [NSClient preferences](#Preferences-nsclient).

![Ανεβάστε το τοπικό προφίλ στο nightscout](../images/LocalProfile_UploadNS_AASP30.png)

#### Change profile in Nightscout profile editor

You can synchronize changes to the profile in the Nightscout profile editor to local profiles. The settings can be found in [NSClient preferences](#Preferences-nsclient).

It is necessary to clone the actual active entire Nightscout database records for the profiles and not just a profile with the blue arrow! The new database records then carries the current date and can be activated via the tab "local profile".

![Κλωνοποιήστε τις βάσεις δεδομένων](../images/Nightscout_Profile_Editor.PNG)

### Βοηθός προφίλ

Ο βοηθός προφίλ προσφέρει δύο λειτουργίες:

1. Εύρεση προφίλ για παιδιά
2. Σύγκριση δύο προφίλ ή εναλλαγή προφίλ προκειμένου να κλωνοποιηθεί ένα νέο προφίλ

Details are explained on the separate [profile helper page](../SettingUpAaps/ProfileHelper.md).

(Config-Builder-insulin)=

## Ινσουλίνη

![Τύπος Ινσουλίνης](../images/ConfBuild_Insulin_AAPS30.png)

* Επιλέξτε τον τύπο ινσουλίνης που χρησιμοποιείτε.
* The options 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' and 'Free-Peak Oref' all have an exponential shape. Περισσότερες πληροφορίες παρατίθενται στα έγγραφα [OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* Οι καμπύλες θα ποικίλλουν βασιζόμενες στην DIA και στην ώρα κορύφωσης.
    
    * Η ΜΩΒ γραμμή δείχνει πόση **ινσουλίνη παραμένει** μετά την ένεση καθώς εξασθενεί με το χρόνο.
    * Οι μπλε γραμμές δείχνουν **πόση ενεργή** ινσουλίνη υπάρχει.

### DIA

* Η DIA (διάρκεια δράσης ινσουλίνης) δεν είναι η ίδια για κάθε άτομο Γι 'αυτό θα πρέπει να το δοκιμάσετε για τον εαυτό σας. 
* Αλλά πρέπει πάντα να είναι τουλάχιστον 5 ώρες.
* For a lot of people using ultra-rapid insulins like Fiasp there is practically no noticeable effect after 3-4 hours any more, even if 0.0xx units are available as a rule then. This residual amount can still be noticeable during sports, for example. Για αυτόν ακριβώς τον λόγο το AAPS χρησιμοποιεί ως ελάχιστη ώρα τις 5 ώρες για τη διάρκεια δράσης (DIA) της ινσουλίνης 
* You can read more about that in the Insulin Profile section of [this](#AapsScreens-insulin-profile) page.

### Insulin type differences

* For 'Rapid-Acting', 'Ultra-Rapid' and 'Lyumjev' the DIA is the only variable you can adjust by yourself, the time to peak is fixed. 
* Free-Peak allows you to adjust both the DIA and the time to peak, and must only be used by advanced users who know the effects of these settings. 
* The [insulin curve graph](#AapsScreens-insulin-profile) helps you to understand the different curves.
* You can view it by enabling the tickbox to show it as a tab, otherwise it will be in the hamburger menu.

#### Γρήγορη δράση - Oref

![Τύπος ινσουλίνης Rapid- Acting Oref](../images/ConfBuild_Insulin_RAO.png)

* προτεινόμενο για Humalog, Novolog και Novorapid
* DIA = τουλάχιστον 5 ώρες
* Μέγιστη. κορυφή = 75 λεπτά μετά την ένεση (σταθερή, μη ρυθμιζόμενη)

#### Έξτρα Γρήγορη δράση - Oref

![Τύπος ινσουλίνης Ultra-Rapid Oref](../images/ConfBuild_Insulin_URO.png)

* προτείνεται για FIASP
* DIA = τουλάχιστον 5 ώρες
* Μέγιστη. κορυφή = 55 λεπτά μετά την ένεση (σταθερή, μη ρυθμιζόμενη)

(Config-Builder-lyumjev)=

#### Lyumjev

![Τύπος ινσουλίνης Lyumjev](../images/ConfBuild_Insulin_L.png)

* ειδικό προφίλ ινσουλίνης για το Lyumjev
* DIA = τουλάχιστον 5 ώρες
* Μέγιστη. κορυφή = 45 λεπτά μετά την ένεση (σταθερή, μη ρυθμιζόμενη)

#### Ελεύθερης κορυφής Oref

![Τύπος ινσουλίνης Free Peak Oref](../images/ConfBuild_Insulin_FPO.png)

* Με το προφίλ "Ελεύθερης κορυφής Oref" μπορείτε να εισάγετε μεμονωμένα την ώρα της κορυφής. Για να το κάνετε αυτό, κάντε κλικ στο cogwheel για να εισάγετε προηγμένες ρυθμίσεις.
* The DIA is automatically set to 5 hours if it is not specified higher in the profile.
* Αυτή η επιλογή στο προφίλ συνιστάται εάν χρησιμοποιείται μη επαναλαμβανόμενη ινσουλίνη ή μείγμα διαφορετικών ινσουλινών.

(Config-Builder-bg-source)=

## Πηγή BG

Select the blood glucose source you are using - see [BG Source](../Getting-Started/CompatiblesCgms.md) page for more setup information.

![Διαμόρφωση BG πηγή](../images/ConfBuild_BG.png)

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

## Pump

Επιλέξτε την αντλία που χρησιμοποιείτε.

![Επιλογή διαμόρφωσης για την εφαρμογή δημιουργίας της αντλίας ](../images/ConfBuild_Pump_AAPS30.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* DanaR Korean (τοπική αντλία DanaR pump για τη Κορέα)
* Αντλία Dana Rv2 (αντλία DanaR με την ανεπίσημη αναβάθμιση λογισμικού)
* [Αντλία Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
    
    * Για τις αντλίες dana, χρησιμοποιήστε **Σύνθετες ρυθμίσεις** για να ενεργοποιήσετε το BT φρουρό εάν είναι απαραίτητο. Απενεργοποιεί το Bluetooth για ένα δευτερόλεπτο αν δεν υπάρχει δυνατή σύνδεση με την αντλία. Αυτό μπορεί να βοηθήσει σε ορισμένα τηλέφωνα όπου το bluetooth κολλάει.
    * [Password for Dana RS pump](../CompatiblePumps/DanaRS-Insulin-Pump.md) must be entered correctly. Ο κωδικός δεν είχε ελεγχθεί σε προηγούμενες εκδόσεις.

* [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)

* [Accu Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump.md) (requires ruffy installation)
* [Αντλία Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
* [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* MDI (receive AAPS suggestions for your multiple daily injections therapy)
* Εικονική αντλία (ανοικτό κύκλωμα για αντλία που δεν έχει ακόμα οδηγό - μόνο προτάσεις AAPS)

## Ανίχνευση ευαισθησίας

Επιλέξτε τον τύπο ανίχνευσης ευαισθησίας. For more details of different designs please [read on here](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. Περισσότερες λεπτομέρειες σχετικά με τον αλγόριθμο ευαισθησίας μπορούν να διαβαστούν στα έγγραφα [OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](#objectives-objective8) in order to let Sensitivity Detection/[Autosens](#Open-APS-features-autosens) automatically adjust the amount of insulin delivered. Πριν την επίτευξη αυτού του στόχου, το ποσοστό ευαισθησίας Autosens / η γραμμή στο γράφημά σας εμφανίζεται μόνο για ενημέρωση.

(Config-Builder-absorption-settings)=

### Ρύθμιση απορρόφησης

Εάν χρησιμοποιείτε Oref1 με SMB, πρέπει να αλλάξετε το **min_5m_carbimpact** στο 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../DailyLifeWithAaps/CobCalculation.md) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

(Config-Builder-aps)=

## APS

Επιλέξτε τον αλγόριθμο APS που θέλετε για τις ρυθμίσεις των παρεμβάσεων. Μπορείτε να δείτε την ενεργή λεπτομέρεια του επιλεγμένου αλγορίθμου στην καρτέλα OpenAPS (OAPS).

* OpenAPS AMA ( προηγμένο βοήθημα γεύματος, Κατάσταση του αλγορίθμου για το 2017) Με απλά λόγια, τα οφέλη είναι αφού δώσετε στον εαυτό σας ένα bolus γεύματος, το σύστημα μπορεί να αντιδράσει γρηγορότερα ΑΝ εισάγετε υδατάνθρακες αξιόπιστα.
* [OpenAPS SMB](../DailyLifeWithAaps/KeyAapsFeatures.md) (super micro bolus, most recent algorithm for advanced users) Note you need to be in [Objective 9](#objectives-objective9) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Κύκλωμα

* Εναλλαγή μεταξύ ανοικτού κυκλώματος, κλειστού κυκλώματος και χαμηλής αναστολής γλυκόζης (LGS).

![Διαμόρφωση συστήματος - λειτουργία κυκλώματος](../images/ConfigBuilder_LoopLGS.png)

(Config-Builder-open-loop)=

### Ανοιχτό κύκλωμα

* Το AAPS αξιολογεί συνεχώς όλα τα διαθέσιμα δεδομένα (IOB, COB, BG...) και κάνει προτάσεις σχετικά με τον τρόπο προσαρμογής της θεραπείας σας εάν είναι απαραίτητο. 
* Οι προτάσεις δεν θα εκτελούνται αυτόματα (όπως στο κλειστό κύκλωμα) πρέπει να εισαχθούν χειροκίνητα στην αντλία ή χρησιμοποιώντας ένα κουμπί σε περίπτωση που χρησιμοποιείτε μια συμβατή αντλία (Dana R / RS ή Accu Chek Combo). 
* Αυτή η επιλογή είναι για να μάθετε πώς λειτουργεί το AndroidAPS ή αν χρησιμοποιείτε μια μη υποστηριζόμενη αντλία.

(Config-Builder-closed-loop)=

### Κλειστό κύκλωμα

* Το AAPS αξιολογεί συνεχώς όλα τα διαθέσιμα δεδομένα (IOB, COB, BG...) και προσαρμόζει αυτόματα τη θεραπεία εάν είναι απαραίτητο (π.χ. χωρίς περαιτέρω παρέμβαση από εσάς) για να φτάσει στο καθορισμένο εύρος στόχου ή τιμή (δόση bolus, προσωρινός βασικός ρυθμός, κλείσιμο ινσουλίνης για να αποφύγετε την υπογλυκαιμία κ.λπ.). 
* Το κλειστό κύκλωμα λειτουργεί εντός πολλών ορίων ασφαλείας, τα οποία μπορείτε να ορίσετε ξεχωριστά.
* Closed Loop is only possible if you are in [Objective 6](#objectives-objective6) or higher and use a supported pump.
* Παρακαλώ σημειώστε: Σε κατάσταση κλειστού κυκλώματος ένας μοναδικός στόχος αντί του εύρους στόχου (π.χ. συνιστώνται 5,5 mmol ή 100 mg/dl αντί για 5,0 - 7,0 mmol ή 90 - 125 mg/dl).

### Αναστολή Χαμηλής Γλυκόζης)

* το μέγιστο IOB έχει οριστεί σε μηδέν
* Αυτό σημαίνει ότι εάν η γλυκόζη του αίματος πέφτει μπορεί να μειώσει τον βασικό ρυθμό για εσας.
* Αλλα εάν η γλυκόζη του αίματος αυξάνεται, καμία αυτόματη διόρθωση δεν θα γίνει. Ο βασικός σας ρυθμός θα παραμείνει ο ίδιος όπως έχετε επιλέξει στο προφίλ σας.
* Μόνο εάν το βασικο IOB (ενεργή ινσουλίνη) είναι αρνητικό (από προηγούμενη χαμηλή αναστολή γλυκόζης) επιπλέον ινσουλίνη θα χορηγηθεί για να μείωση την τιμή γλυκόζης.

### Ελάχιστο αίτημα για αλλαγή

* Όταν χρησιμοποιείτε ανοικτό κύκλωμα, θα λαμβάνετε ειδοποιήσεις κάθε φορά που το AAPS συνιστά την προσαρμογή του βασικού ρυθμού. 
* Για να μειώσετε τον αριθμό των ειδοποιήσεων, μπορείτε είτε να χρησιμοποιήσετε ένα ευρύτερο εύρος στόχων τιμής γλυκόζης, είτε να αυξήσετε το ποσοστό του ελάχιστου ρυθμού αιτημάτων.
* Αυτό καθορίζει τη σχετική αλλαγή που απαιτείται για την ενεργοποίηση μιας ειδοποίησης.

## Στόχοι ( μαθαίνοντας το πρόγραμμα)

AAPS has a learning program (objectives) that you have to fulfill step by step. Αυτό θα σας καθοδηγήσει με ασφάλεια με στη δημιουργία ενός συστήματος κλειστού κυκλώματος. Εξασφαλίζει ότι έχετε ρυθμίσει τα πάντα σωστά και καταλαβαίνετε τι ακριβώς κάνει το σύστημα. Αυτός είναι ο μόνος τρόπος για να εμπιστευτείτε το σύστημα.

You should [export your settings](../Maintenance/ExportImportSettings.md) (including progress of the objectives) on a regularly basis. Σε περίπτωση που πρέπει να αντικαταστήσετε το smartphone σας αργότερα (νέα αγορά, ζημιά οθόνης κ. λπ.), μπορείτε απλώς να εισαγάγετε αυτές τις ρυθμίσεις.

See [Objectives](../SettingUpAaps/CompletingTheObjectives.md) page for more information.

## Θεραπείες

Αν προβάλετε την καρτέλα Θεραπείες (Θεραπείες), μπορείτε να δείτε τις θεραπείες που έχουν μεταφορτωθεί στο nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](#screens-bolus-carbs).

## General

### Σφαιρική Εικόνα

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../DailyLifeWithAaps/AapsScreens.md) for details). Μπορείτε να έχετε πρόσβαση στις ρυθμίσεις κάνοντας κλικ στο γρανάζι.

#### Κρατήστε την οθόνη ενεργή

Η επιλογή 'Ενεργοποίηση οθόνης' θα αναγκάσει το Android να διατηρεί την οθόνη ενεργή ανά πάσα στιγμή. Αυτό είναι χρήσιμο για παρουσιάσεις κ. λ. π. Αλλά καταναλώνει πολύ μπαταρία. Συνεπώς, συνιστάται να συνδέσετε το smartphone με το καλώδιο του φορτιστή.

#### Buttons

Ορίστε ποια πλήκτρα θα εμφανίζονται στην αρχική οθόνη.

* Θεραπείες
* Υπολογιτής
* Ινσουλίνη
* Υδατάνθρακες
* CGM (opens xDrip+)
* Καλιμπράρισμα

Επιπλέον, μπορείτε να ορίσετε συντομεύσεις για αυξήσεις ινσουλίνης και υδατανθράκων και να αποφασίσετε αν το πεδίο σημειώσεων θα εμφανίζεται στους διαλόγους θεραπείας.

#### Ρυθμίσεις Γρήγορου Οδηγού

Δημιουργήστε ένα κουμπί για ένα συγκεκριμένο πρότυπο γεύματος (υδατάνθρακες και μέθοδος υπολογισμού για το bolus) που θα εμφανίζονται στην αρχική οθόνη. Χρησιμοποιείται για τα γεύματα που καταναλώνονται συχνά. Εάν έχουν οριστεί διαφορετικοί χρόνοι για διαφορετικά γεύματα, θα έχετε πάντα το κατάλληλο κουμπί γεύματος στην αρχική οθόνη, ανάλογα με την ώρα της ημέρας.

Σημείωση: Το κουμπί δεν θα είναι ορατό αν βρίσκεται έξω από το καθορισμένο χρονικό διάστημα ή αν έχετε αρκετό IOB για να καλύψετε τους υδατάνθρακες που ορίζονται στο κουμπί QuickWizard.

![Κουμπί QuickWizard](../images/ConfBuild_QuickWizard.png)

#### Προκαθορισμένος Στόχος-Προσ Ρυθμού

Επιλέξτε προεπιλεγμένους στόχους ρυθμού (διάρκεια και στόχος). Οι προκαθορισμένες τιμές είναι:

* Φαγητό σύντομα: στόχος 72 mg/ dl / 4, 0 mmol/l, διάρκεια 45 λεπτά
* Δραστηριότητα: στόχος 140 mg/dl / 7.8 mmol/l, διάρκεια 90 min
* υπογλυκαιμία: στόχος 125 mg/dl / 6, 9 mmol/l, διάρκεια 45 λεπτά 

#### Fill/Prime standard insulin amounts

Choose the default amounts of the three buttons in fill/prime dialogue, depending on the length of your catheter.

#### Range of visualization

Choose the high and low marks for the BG-graph on AAPS overview and smart watch. It is only the visualization, not the target range for your BG. Παράδειγμα: 70 - 180 mg/dl ή 3.9 - 10 mmol/l

#### Συντομογραφίες ενοτήτων

Choose whether the tab titles in AAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### Show notes field in treatment dialogs

Επιλέξτε αν θέλετε να έχετε ένα πεδίο σημειώσεων όταν εισάγετε θεραπείες ή όχι.

#### Φώτα κατάστασης

Choose if you want to have [status lights](#Preferences-status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Η κρίσιμη ηλικία θα εμφανιστεί με κόκκινο χρώμα.

#### Προηγμένες ρυθμίσεις

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percentage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### Ενέργειες

* Some buttons to quickly access common features.
* See [AAPS screenshots](#screens-action-tab) for details.

### Αυτοματοποίηση

Εργασίες αυτοματισμού που ορίζονται από τον χρήστη ('εάν-τότε'). Please [read on here](../DailyLifeWithAaps/Automations.md).

(Config-Builder-sms-communicator)=

### Επικοινωνία με SMS

Allows remote caregivers to control some AAPS features via SMS, see [SMS Commands](../RemoteFeatures/SMSCommands.md) for more setup information.

### Φαγητό

Εμφανίζει τις προεπιλογές τροφίμων που ορίζονται στη βάση δεδομένων τροφίμων Nightscout, δείτε [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) για περισσότερες πληροφορίες ρύθμισης.

Σημείωση: Οι καταχωρήσεις δεν μπορούν να χρησιμοποιηθούν στους υπολογισμούς του AndroidAPS. (μόνο για ανάγνωση)

(Config-Builder-wear)=

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../UsefulLinks/WearOsSmartwatch.md)). Χρησιμοποιήστε τις ρυθμίσεις (γρανάζι) για να ορίσετε ποιες μεταβλητές θα πρέπει να λαμβάνονται υπόψη κατά τον υπολογισμό του bolus που δίνεται από το ρολόι σας (δηλαδή τάση 15 λεπτών, COB...).

If you want to bolus etc. from the watch then within "Wear settings" you need to enable "Controls from Watch".

![Ρυθμίσεις Wear](../images/ConfBuild_Wear.png)

Μέσα από την καρτέλα Wear ή το μενού χάμπουργκερ (στην πάνω αριστερή πλευρά της οθόνης, αν δεν εμφανίζεται η καρτέλα) μπορείτε

* Ξαναστείλετε όλα τα δεδομένα. Μπορεί να είναι χρήσιμο εάν το ρολόι δεν συνδεόταν για κάποιο χρονικό διάστημα και θέλετε να ωθήσετε τις πληροφορίες στο ρολόι.
* Ανοίξτε τις ρυθμίσεις στο ρολόι σας απευθείας από το τηλέφωνό σας.

### xDrip Γραμμή κατάστασης (ρολόι)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../UsefulLinks/WearOsSmartwatch.md)

### NSClient

* Ρυθμίστε τον συγχρονισμό των δεδομένων AndroidAPS με το Nightscout.
* Settings in [preferences](#Preferences-nsclient) can be opened by clicking the cog wheel.

### Συντήρηση

Ηλεκτρονικό ταχυδρομείο και αριθμός αρχείων καταγραφής που αποστέλλονται. Κανονικά καμία αλλαγή δεν είναι απαραίτητη.

### Διαμόρφωση

Χρησιμοποιήστε την καρτέλα για την Διαμόρφωση αντί για το μενού χάμπουργκερ.