# Διαμόρφωση

Η Διαμόρφωση (Conf) είναι η καρτέλα όπου μπορείτε να ενεργοποιήσετε και να απενεργοποιήσετε τις λειτουργικές δυνατότητες. Τα κουτάκια στην αριστερή πλευρά (A) σας επιτρέπουν να επιλέξετε ποιο θα χρησιμοποιηθεί, τα κουτάκια στη δεξιά πλευρά (C) σας επιτρέπουν να τα δείτε ως καρτέλα (E) στο AndroidAPS. Σε περίπτωση που το δεξιό κουτάκια δεν είναι ενεργοποιημένα, μπορείτε να φτάσετε στη λειτουργία χρησιμοποιώντας το μενού hamburger (D) στην πάνω αριστερή γωνία της οθόνης.

Όπου υπάρχουν διαθέσιμες πρόσθετες ρυθμίσεις στο μενού, μπορείτε να κάνετε κλικ στο γρανάζι (B), ο οποίος θα σας μεταφέρει στις συγκεκριμένες ρυθμίσεις εντός των προτιμήσεων.

**Πρώτη ρύθμιση:** Καθώς ο Οδηγός ρυθμίσεων AAPS 2.0 σας καθοδηγεί στη διαδικασία της ρύθμισης του AndroidAPS. Πιέστε το μενού 3 κουκκίδων στην πάνω δεξιά πλευρά της οθόνης (F) και επιλέξτε 'Οδηγός εγκατάστασης' για να το χρησιμοποιήσετε.

![Κουτάκια Διαμόρφωση και γρανάζι](../images/ConfBuild_ConfigBuilder.png)

## Προφίλ

Επιλέξτε το βασικό προφίλ που θέλετε να χρησιμοποιήσετε. Ανατρέξτε στη σελίδα [Προφίλ](../Usage/Profiles.md) για περισσότερες πληροφορίες εγκατάστασης.

### Τοπικό προφίλ (συνιστάται)

Το τοπικό προφίλ χρησιμοποιεί το βασικό προφίλ που καταχωρήθηκε χειροκίνητα στο τηλέφωνο. Μόλις επιλεγεί, εμφανίζεται μια νέα καρτέλα στο AAPS, όπου μπορείτε να αλλάξετε τα δεδομένα προφίλ που διαβάζονται από την αντλία, εάν είναι απαραίτητο. Με την επόμενη αλλαγή προφίλ εγγράφονται στην αντλία στο προφίλ 1. Αυτό το προφίλ συνιστάται καθώς δεν εξαρτάται από τη σύνδεση στο διαδίκτυο.

Πλεονέκτημα: δεν χρειάζεται σύνδεση στο Internet για να αλλάξετε τις ρυθμίσεις προφίλ

Μειονέκτημα: μόνο ένα προφίλ

### NS προφίλ

Το NS προφίλ χρησιμοποιεί τα προφίλ που έχετε αποθηκεύσει στην nightscout σελίδα σας (https://[yournightscoutsiteaddress]/profile). Μπορείτε να χρησιμοποιήσετε την [αλλαγή προφίλ](../Usage/Profiles.md) για να επιλέξετε ποιο από αυτά τα προφίλ είναι ενεργό, αυτό γράφει το προφίλ στην αντλία σε περίπτωση αποτυχίας του AndroidAPS. Αυτό σας επιτρέπει να δημιουργήσετε εύκολα πολλά προφίλ στο Nightscout (δηλ.. εργασία, σπίτι, άθληση, διακοπές, κλπ.). Λίγο μετά την "Αποθήκευση" θα μεταφερθούν στο AAPS αν το smartphone σας είναι συνδεδεμένο στο διαδίκτυο. Ακόμα και χωρίς σύνδεση στο Internet ή χωρίς σύνδεση με το Nightscout, τα προφίλ Nightscout είναι διαθέσιμα σε AAPS αφού συγχρονιστούν.

Κάντε μία **αλλαγή προφίλ** για να ενεργοποιήσετε ένα προφίλ από το Nightscout. Πατήστε και κρατήστε πατημένο το τρέχον προφίλ στην αρχική οθόνη AAPS στην κορυφή (το γκρίζο πεδίο ανάμεσα στο γαλάζιο πεδίο "ανοιχτό/κλειστό κύκλωμα" και στο σκούρο μπλε πεδίο του στόχου) > Διακόπτης προφίλ > Επιλογή προφίλ > OK. Το AAPS γράφει επίσης το επιλεγμένο προφίλ στην αντλία μετά την αλλαγή προφίλ, έτσι ώστε να είναι διαθέσιμο χωρίς AAPS σε περίπτωση έκτακτης ανάγκης και συνεχίζει να τρέχει.

Πλεονέκτημα: πολλαπλά προφίλ & εύκολη επεξεργασία μέσω υπολογιστή ή tablet

Μειονέκτημα: καμία τοπική αλλαγή στις ρυθμίσεις προφίλ

### Απλό προφίλ

Απλό προφίλ με μόνο ένα χρονικό μπλοκ για DIA, IC, ISF, βασικό ρυθμό και εύρος στόχου (δηλ. Καμία αλλαγή βασικού ρυθμού κατά τη διάρκεια της ημέρας). Είναι πιθανότερο να χρησιμοποιηθεί για σκοπούς δοκιμής εκτός αν έχετε τους ίδιους παράγοντες σε διάστημα 24 ωρών. Μόλις επιλεγεί το "Απλό προφίλ", θα εμφανιστεί μια νέα καρτέλα στο AAPS, όπου μπορείτε να καταχωρίσετε τα δεδομένα προφίλ.

## Ινσουλίνη

Επιλέξτε τον τύπο ινσουλίνης που χρησιμοποιείτε. Οι επιλογές 'Ταχέως δράσεως Oref', 'Εξαιρετικά ταχέως Oref' και 'Ελεύθερης κορυφής Oref' έχουν όλες ένα εκθετικό σχήμα. More information is listed in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), the curves will vary based on the DIA and the time to peak. The DIA should always be at least 5 hours, you can read more about that in the Insulin Profile section of [this](../Getting-Started/Screenshots.md) page. For Rapid-Acting and Ultra-Rapid, the DIA is the only variable you can adjust by yourself, the time to peak is fixed. Free-Peak allows you to adjust both the DIA and the time to peak, and must only be used by advanced users who know the effects of these settings. The insulin curve graph helps you to understand the different curves. You can view it by enabling the tickbox to show it as a tab, otherwise it will be in the hamburger menu.

### Rapid-Acting Oref

* recommended for Humalog, Novolog and Novorapid
* DIA = at least 5.0h
* Max. peak = 75 minutes after injection

### Ultra-Rapid Oref

* recommended for FIASP
* DIA = at least 5.0h
* Max. peak = 55 minutes after injection

For a lot of people there is practically no noticeable effect of FIASP after 3-4 hours any more, even if 0.0xx units are available as a rule then. This residual amount can still be noticeable during sports, for example. Therefore AndroidAPS uses minimum 5h as DIA.

![Config Builder Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Free Peak Oref

With the "Free Peak 0ref" profile you can individually enter the peak time. The DIA is automatically set to 5 hours if it is not specified higher in the profile.

This effect profile is recommended if an unbacked insulin or a mixture of different insulins is used.

## BG Source

Select the blood glucose source you are using - see [BG Source](BG-Source.rst) page for more setup information.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient BG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)
* [Dexcom G5 app (patched)](https://github.com/dexcomapp/dexcomapp/) - Select 'Send BG data to xDrip+' if you want tu use xDrip+ alarms. ![Config Builder BG source](../images/ConfBuild_BGSource.png)
* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Pump

Select the pump you are using.

* [DanaR](DanaR-Insulin-Pump.md)
* DanaR Korean (for domestic DanaR pump)
* DanaRv2 (DanaR pump with firmware upgrade)
* [DanaRS](DanaRS-Insulin-Pump.md)
* [Accu Chek Combo Pump](Accu-Chek-Combo-Pump.md) (requires ruffy installation)
* MDI (receive AAPS suggestions for your multiple daily injections thereapy)
* Virtual pump (open loop for pump which don't have any driver yet - AAPS suggestions only)

Use **Advanced settings** to activate BT watchdog if necessary. It switches off bluetooth for one second if no connection to the pump is pobbile. This may help on some phones where the bluetooth stack freezes.

## Sensitivity Detection

Select the type of sensitivity detection. This will analyse historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. Details about the Sensitivity Oref0 algorithm can be read in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

You can view your sensistivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 6](../Usage/Objectives) in order to use Sensitivity Detection/autosens.

### Absorption settings

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when carb absorption can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically it is a failsafe.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS MA (meal assist, state of the algorithm in 2016)
* OpenAPS AMA (advanced meal assist, state of the algorithm in 2016)  
    More detail about OpenAPS AMA can be found in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably.  
    Note you need to be in [Objective 7](../Usage/Objectives.md) in order to use OpenAPS AMA.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users)  
    Note you need to be in [Objective 8](../Usage/Objectives.md) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Loop

Define whether you want to allow AAPS automatic controls or not.

### Open Loop

AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Closed Loop

AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypoversion, etc.). The Closed Loop works within numerous safety limits, which you can be set individually. Closed Loop is only possible if you are in [Objective 4](../Usage/Objectives.md) or higher and use a supported pump.

## Objectives (learning program)

AndroidAPS has a number of objectives that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should export your settings (including progress of the objectives) on a regulary basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.md) page for more information.

## Treatments

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the Careportal (CP) tab.

## General

### Overview

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Keep screen on

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore it is recommended to connect the smartphone to a charger cable.

#### Buttons

Define which Buttons are shown on the home screen.

* Treatments
* Calculator
* Insulin
* Carbs
* CGM (opens xDrip+)
* Calibration

Furthermore you can set shortcuts for insulin and carb increments and decide wether the notes field should be shown in treatment dialogues.

#### QuickWizard settings

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Advanced settings

Enable super bolus functionality in wizard. Use with caution and do not enable until you learn what it really does. Basically the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Actions

Some buttons to quickly access common features:

* Profiles Switch (see [Profiles page](../Usage/Profiles.md) for more setup information)
* Temporary targets
* Set / cancel temp. basal rate
* Extended bolus (DanaR/RS or Combo pump only)
* Prime / fill (DanaR/RS or Combo pump only)
* History browser
* TDD (Total daily dose = bolus + basal per day)

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). Others prefer range of 32% to 37% of TDD for TBB. Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Actions tab](../images/ConfBuild_ConfBuild_Actions.png)

### Careportal

Allows you to record any specific care entries and view the current sensor, insulin, canula and pump battery ages in the Careportal (CP) tab.

Note: **No insulin** will be given if entered via careportal (i.e. meal bolus, correction bolus...)

Carbs entered in the careportal (i.e. correction carbs) will be used for COB calculation.

![Careportal tab](../images/ConfBuild_CarePortal.png)

### SMS Communicator

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Usage/SMS-Commands.md) for more setup information.

### Food

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

If you want to bolus etc from the watch then within "Wear settings" you need to enable "Controls from Watch".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Ongoing Notification

Displays a summary of current BG, delta, active TBR%, active basal u/hr and profile, IOB and split into bolus IOB and basal IOB on the phones dropdown screen and phonelock screen.

![AAPS widget](../images/ConfBuild_Widget.png)

### NS Client

Setup sync of your AndroidAPS data with Nightscout.

If **Log app start to NS** is activated each AndroidAPS will be visible in Nightscout. Might be useful to detect problems with the app (i.e. battery optimisation not disabled for AAPS) but can flood the Nightscout graph with entries.

#### Alarm options

Activate/deactivate AndroidAPS alarms

![Alarm options](../images/ConfBuild_NSClient_Alarms.png)

#### Connection settings

Offline looping, disable roaming...

If you want to use only a specific WiFi network you can enter its **WiFi SSID **. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Nightscout connection settings](../images/ConfBuild_ConnectionSettings.png)

#### Advanced settings

* Auto backfill missing BGs from Nightscout
* Create announcement from errors Create Nightscout announcement fro error dialogs and local alerts (also viewable in careportal in treatments section)
* Enable local broadcast to other apps like xDrip+
* NS upload only (sync disabled)
* No upload to NS
* Always use basal absolute values -> Must be activated if you want to use [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) properly.

![Nightscout advanced settings](../images/ConfBuild_NSClient_Advanced.png)

### Maintenance

Email and number of logs to be send. Normally no change neccessary.

### Διαμόρφωση

Use tab for config builder instead of hambuger menu.