# Διαμόρφωση

Depending on your settings you can open Config Builder through a tab at the top of the screen or through hamburger menu.

![Open config builder](../images/ConfBuild_Open.png)

Config Builder (Conf) is the tab where you turn the modular features on and off. The boxes on the left-hand side (A) allow you to select which one to use, the boxes on the right-hand side (C) allow you to view these as a tab (E) in AndroidAPS. In case the right box is not activated you can reach the function by using the hamburger menu (D) on the top left of the screen.

Where there are additional settings available within the module, you can click on the cog wheel (B) which will take you to the specific settings within preferences.

**First configuration:** Since AAPS 2.0 a Setup wizard guides you through the process of setting up AndroidAPS. Push 3-dots-menu on the upper right-hand side of the screen (F) and select 'Setup Wizard' to use it.

![Config Builder boxes and cog wheel](../images/ConfBuild_ConfigBuilder.png)

## Tab or hamburger menu

With the checkbox under the eye symbol you can decide how to open the corresponding program section.

![Tab or hamburger menu](../images/ConfBuild_TabOrHH.png)

## Προφίλ

Select the basal profile you wish to use. See [Profiles](../Usage/Profiles.md) page for more setup information.

### Τοπικό προφίλ (συνιστάται)

Local profile uses the basal profile manually entered in phone. As soon as it is selected, a new tab appears in AAPS, where you can change the profile data read out from the pump if necessary. With the next profile switch they are then written to the pump in profile 1. This profile is recommended as it does not rely on internet connectivity.

Πλεονεκτήματα:

* no internet connection necessary to change profile settings
* οι αλλαγές στο προφίλ μπορεί να γίνονται απευθείας στο τηλέφωνο

Μειονεκτήματα:

* μόνο ένα προφίλ

### NS προφίλ

NS Profile uses the profiles you have saved on your Nightscout site (https://[yournightscoutsiteaddress]/profile). You can use the [Profile Switch](../Usage/Profiles.md) to change which of those profiles is active, this writes the profile to the pump in case of AndroidAPS failure. This allows you to easily create multiple profiles in Nightscout (i.e.. work, home, sports, holidays, etc.). Shortly after clicking on "Save" they will be transferred to AAPS if your smartphone is online. Even without an Internet connection or without a connection to Nightscout, the Nightscout profiles are available in AAPS once they have been synchronized.

Do a **profile switch** to activate a profile from Nightscout. Press and hold the current profile in the AAPS homescreen at the top (grey field between the light blue "Open/Closed Loop" field and the dark blue target area field) > Profile switch > Select profile > OK. AAPS also writes the selected profile into the pump after the profile change, so that it is available without AAPS in an emergency and continues to run.

Advantage:

* πολλαπλά προφίλ
* εύκολη διαμόρφωση μέσω PC ή tablet

Μειονεκτήματα:

* καμία τοπική αλλαγή στις ρυθμίσεις προφίλ
* το προφίλ δεν μπορεί να αλλάξει απευθείας στο τηλέφωνο

### Απλό προφίλ

Simple profile with just one time block for DIA, IC, ISF, basal rate and target range (i.e. no basal rate changes during the day). More likely to be used for testing purposes unless you have the same factors over 24 hours. Once "Simple Profile" is selected, a new tab will appear in AAPS where you can enter the profile data.

## Ινσουλίνη

Select the type of insulin curve you are using. The options 'Rapid-Acting Oref', Ultra-Rapid Oref' and 'Free-Peak Oref' all have an exponential shape. More information is listed in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), the curves will vary based on the DIA and the time to peak. The DIA should always be at least 5 hours, you can read more about that in the Insulin Profile section of [this](../Getting-Started/Screenshots.md) page. For Rapid-Acting and Ultra-Rapid, the DIA is the only variable you can adjust by yourself, the time to peak is fixed. Free-Peak allows you to adjust both the DIA and the time to peak, and must only be used by advanced users who know the effects of these settings. The insulin curve graph helps you to understand the different curves. You can view it by enabling the tickbox to show it as a tab, otherwise it will be in the hamburger menu.

### Ταχέως δράσεως Oref

* προτεινόμενο για Humalog, Novolog και Novorapid
* DIA = τουλάχιστον 5 ώρες
* Μέγιστη. κορυφή = 75 λεπτά μετά την χορήγηση

### Εξαιτετικά ταχέως Oref

* προτείνεται για FIASP
* DIA = τουλάχιστον 5 ώρες
* Μέγιστη. κορυφή = 55 λεπτά μετά την χορήγηση

For a lot of people there is practically no noticeable effect of FIASP after 3-4 hours any more, even if 0.0xx units are available as a rule then. This residual amount can still be noticeable during sports, for example. Therefore, AndroidAPS uses minimum 5h as DIA.

![Config Builder Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Ελεύθερης κορυφής Oref

With the "Free Peak 0ref" profile you can individually enter the peak time. The DIA is automatically set to 5 hours if it is not specified higher in the profile.

This effect profile is recommended if an unbacked insulin or a mixture of different insulins is used.

## Πηγή BG

Select the blood glucose source you are using - see [BG Source](BG-Source.rst) page for more setup information.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient BG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)
* [Dexcom App (patched)](https://github.com/dexcomapp/dexcomapp/) - Select 'Send BG data to xDrip+' if you want to use xDrip+ alarms.
    
    ![Config Builder BG source](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Αντλία

Select the pump you are using.

* [Dana R](DanaR-Insulin-Pump.md)
* Dana R Korean (for domestic DanaR pump)
* Dana Rv2 (DanaR pump with firmware upgrade)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu Chek Combo Pump](Accu-Chek-Combo-Pump.md) (απαιτεί εγκατάσταση του ruffy)
* MDI (receive AAPS suggestions for your multiple daily injections therapy)
* Εικονική αντλία (ανοικτό κύκλωμα για αντλία που δεν έχει ακόμα οδηγό - μόνο προτάσεις AAPS)

Use **Advanced settings** to activate BT watchdog if necessary. It switches off bluetooth for one second if no connection to the pump is possible. This may help on some phones where the bluetooth stack freezes.

## Sensitivity Detection

Select the type of sensitivity detection. This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. Details about the Sensitivity Oref0 algorithm can be read in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 6](../Usage/Objectives) in order to use Sensitivity Detection/autosens.

### Ρυθμίσεις απορρόφησης

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when carb absorption can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS MA (βοήθεια γεύματος, κατάσταση του αλγορίθμου το 2016)
* OpenAPS AMA (προηγμένη βοήθεια γεύματος, κατάσταση του αλγορίθμου το 2016)  
    Περισσότερες λεπτομέρειες για το OpenAPS AMA μπορείτε να βρείτε στο [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Με απλά λόγια το πλεονέκτημα είναι ότι αφού κάνετε ένα bolus γεύματος το σύστημα μπορεί ταχύτερα να δώσει υψηλό προσωρινό ρυθμό AN εχουν δωθεί αξιόπιστα οι υδατάνθρακες.  
    Σημειώστε ότι πρέπει να είστε στον [Στόχος 7](../Usage/Objectives.md) για να χρησιμοποιήσετε το OpenAPS AMA.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, πιο πρόσφατος αλγόριθμος για προχωρημένους χρήστες)  
    Σημειώστε ότι πρέπει να είστε στο [Στόχος 8](../Usage/Objectives.md) για να χρησιμοποιήσετε το OpenAPS SMB και το min_5m_carbimpact πρέπει να ρυθμιστεί στο 8 στο μενού Διαμόρφωση> Ανίχνευση ευαισθησίας> Ρυθμίσεις Oref1 ευαισθησίας.

## Κύκλωμα

Define whether you want to allow AAPS automatic controls or not.

### Ανοιχτό κύκλωμα

AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Κλειστό κύκλωμα

AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). The Closed Loop works within numerous safety limits, which you can be set individually. Closed Loop is only possible if you are in [Objective 4](../Usage/Objectives.md) or higher and use a supported pump.

## Objectives (learning program)

AndroidAPS has a number of objectives that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should export your settings (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.md) page for more information.

## Θεραπείες

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the Careportal (CP) tab.

## Γενικά

### Μία γενική ιδέα

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Κράτα ανοιχτή οθόνη

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Πλήκτρα

Define which Buttons are shown on the home screen.

* Θεραπείες
* Calculator
* Ινσουλίνη
* Υδατάνθρακες
* CGM (opens xDrip+)
* Βαθμονόμιση

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### Ρυθμίσεις QuickWizard

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Προηγμένες ρυθμίσεις

Enable super bolus functionality in wizard. Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Ενέργειες

Some buttons to quickly access common features:

* Προφίλ αλλαγής (δείτε [Σελίδα προφίλ](../Usage/Profiles.md) για περισσότερες πληροφορίες εγκατάστασης)
* Προσωρινοί στόχοι
* Ρύθμιση / ακύρωση προσωρ. βασικός ρυθμός
* Εκτεταμένο bolus (μόνο DanaR/RS ή Combo αντλία)
* Prime/γέμισμα (μόνο DanaR/RS ή Combo αντλία)
* Περιήγηση ιστορικού
* TDD (Συνολική ημερήσια δόση = bolus + βασικός ρυθμός ανά ημέρα)

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). Others prefer range of 32% to 37% of TDD for TBB. Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Actions tab](../images/ConfBuild_ConfBuild_Actions.png)

### Φροντίδες

Allows you to record any specific care entries and view the current sensor, insulin, canula and pump battery ages in the Careportal (CP) tab.

Note: **No insulin** will be given if entered via careportal (i.e. meal bolus, correction bolus...)

Carbs entered in the careportal (i.e. correction carbs) will be used for COB calculation.

![Careportal tab](../images/ConfBuild_CarePortal.png)

### Επικοινωνία με SMS

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Usage/SMS-Commands.md) for more setup information.

### Φαγητό

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

If you want to bolus etc. from the watch then within "Wear settings" you need to enable "Controls from Watch".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Ξαναστείλετε όλα τα δεδομένα. Μπορεί να είναι χρήσιμο εάν το ρολόι δεν συνδεόταν για κάποιο χρονικό διάστημα και θέλετε να ωθήσετε τις πληροφορίες στο ρολόι.
* Ανοίξτε τις ρυθμίσεις στο ρολόι σας απευθείας από το τηλέφωνό σας.

### xDrip Γραμμή κατάστασης (ρολόι)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Συνεχείς ενημερώσεις

Displays a summary of current BG, delta, active TBR%, active basal u/h and profile, IOB and split into bolus IOB and basal IOB on the phones's dropdown screen and phone's lock screen.

![AAPS widget](../images/ConfBuild_Widget.png)

### NS Client

Setup sync of your AndroidAPS data with Nightscout.

If **Log app start to NS** is activated each AndroidAPS will be visible in Nightscout. Might be useful to detect problems with the app (i.e. battery optimization not disabled for AAPS) but can flood the Nightscout graph with entries.

#### Επιλογές συναγερμού

Activate/deactivate AndroidAPS alarms

![Επιλογές συναγερμού](../images/ConfBuild_NSClient_Alarms.png)

#### Ρυθμίσεις σύνδεσης

Offline looping, disable roaming...

If you want to use only a specific WiFi network you can enter its **WiFi SSID **. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Nightscout connection settings](../images/ConfBuild_ConnectionSettings.png)

#### Προηγμένες ρυθμίσεις

* Αυτόματη συμπλήρωση χαμένων BG από το Nightscout
* Create announcement from errors Create Nightscout announcement for error dialogs and local alerts (also viewable in careportal in treatments section)
* Ενεργοποιήστε την τοπική εκπομπή σε άλλες εφαρμογές όπως το xDrip+
* Μόνο μεταφόρτωση NS (απενεργοποίηση συγχρονισμού)
* Καμία μεταφόρτωση στο NS
* Πάντα να χρησιμοποιείτε τις απόλυτες τιμές του βασικού ρυθμού -> Πρέπει να το ενεργοποιήσετε εάν θέλετε να χρησιμοποιήσετε το [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) σωστά.

![Nightscout advanced settings](../images/ConfBuild_NSClient_Advanced.png)

### Συντήρηση

Email and number of logs to be send. Normally no change necessary.

### Διαμόρφωση

Use tab for config builder instead of hamburger menu.