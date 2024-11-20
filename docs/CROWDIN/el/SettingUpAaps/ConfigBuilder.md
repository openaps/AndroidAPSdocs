# Διαμόρφωση

Depending on your settings you can open Config Builder through a tab at the top of **AAPS**' screen or through the hamburger menu.

![Ανοίξτε το αρχείο Διαμόρφωσης (config builder)](../images/ConfBuild_Open_AAPS30.png)

The **Config Builder** is the tab where you turn the modular features on and off. In the picture below, the boxes on the left-hand side (A) allow you to select which modules you want activated, the boxes on the right-hand side (C) allow you to view these as a tab (E) in **AAPS**. In case the right box is not activated, you can reach the function by using the hamburger menu (D) on the top left of the screen. See [Tab or hamburger menu](#tab-or-hamburger-menu) below.

When there are additional settings available within the module, you can click on the cog wheel (B) which will take you to the specific settings within preferences.

![Κουτάκια Διαμόρφωση και γρανάζι](../images/ConfBuild_ConfigBuilder_AAPS30.png)

(Config-Builder-tab-or-hamburger-menu)=

## Καρτέλα ή μενού Χάμπουργκερ

Με το πλαίσιο ελέγχου κάτω από το σύμβολο του ματιού μπορείτε να αποφασίσετε πώς να ανοίξετε την αντίστοιχη ενότητα του προγράμματος.

![Καρτέλα ή μενού Χάμπουργκερ](../images/ConfBuild_TabOrHH_AAPS30.png)

```{contents}
:backlinks: entry
:depth: 2
```

## Profile

This module can not be disabled as it is a core part of **AAPS**.

* See [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md) for a basic understanding of what goes inside your **Profile**.
* See [AAPS Screens > Profile](#aaps-screens-profile) for more information about managing your **Profiles**.

(Config-Builder-insulin)=

## Ινσουλίνη

![Τύπος Ινσουλίνης](../images/ConfBuild_Insulin_AAPS30.png)

Select the type of insulin you are using.

More information to understand the Insulin Profile as shown in **AAPS** [here](#AapsScreens-insulin-profile).

### Insulin type differences

* The options 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' and 'Free-Peak Oref' all have an exponential shape.
* For 'Rapid-Acting', 'Ultra-Rapid' and 'Lyumjev' the DIA is the only variable you can adjust by yourself, the time to peak is fixed. 
* Free-Peak allows you to adjust both the DIA and the time to peak, and must only be used by advanced users who know the effects of these settings. 
* The [insulin curve graph](#AapsScreens-insulin-profile) helps you to understand the different curves.

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

Select the blood glucose source you are using. See [BG Source](../Getting-Started/CompatiblesCgms.md) page for more setup information.

![Διαμόρφωση BG πηγή](../images/ConfBuild_BG.png)

* [xDrip+](../CompatibleCgms/xDrip.md)
* [NSClient BG](../CompatibleCgms/CgmNightscoutUpload.md) - only if you know what you are doing, see [BG Source](../Getting-Started/CompatiblesCgms.md).
* [MM640g](../CompatibleCgms/MM640g.md)
* [Glimp](#libre1-using-glimp) - only version 4.15.57 and newer are supported
* [Build Your Own Dexcom App (BYODA)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).
* [Poctech](../CompatibleCgms/PocTech.md)
* [Tomato App](#libre1-using-tomato) for MiaoMiao device
* [Εφαρμογή Glunovo](https://infinovo.com/) για το σύστημα καταγραφης Glunovo CGM
* Τυχαία τιμή γλυκόζης (BG): Δημιουργεί τυχαία δεδομένα τιμών γλυκόζης (λειτουργία επίδειξης μόνο)

## Smoothing

![Smoothing](../images/ConfBuild_Smoothing.png)

See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

(Config-Builder-pump)=

## Pump

Επιλέξτε την αντλία που χρησιμοποιείτε. See [Compatible pumps](../Getting-Started/CompatiblePumps.md) page for more setup information.

![Επιλογή διαμόρφωσης για την εφαρμογή δημιουργίας της αντλίας ](../images/ConfBuild_Pump_AAPS32.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* DanaR Korean (τοπική αντλία DanaR pump για τη Κορέα)
* Αντλία Dana Rv2 (αντλία DanaR με την ανεπίσημη αναβάθμιση λογισμικού)
* [Αντλία Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
* Accu Chek Combo 
  * [Driver using Ruffy](../CompatiblePumps/Accu-Chek-Combo-Pump.md) (requires ruffy installation)
  * [Driver with no additional requirement](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md), added in [AAPS v.3.2](#version3200)
* Omnipod for [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
* Dash for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* [EOPatch2](../CompatiblePumps/EOPatch2.md)
* [Medtrum](../CompatiblePumps/MedtrumNano.md)
* Virtual pump: open loop - **AAPS** suggestions only 
  * as you make you first steps with **AAPS**, during the first [objectives](../SettingUpAaps/CompletingTheObjectives.md)
  * for pump which doesn't have any driver yet

## Ανίχνευση ευαισθησίας

Επιλέξτε τον τύπο ανίχνευσης ευαισθησίας. For more details of different designs please [read on here](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. Περισσότερες λεπτομέρειες σχετικά με τον αλγόριθμο ευαισθησίας μπορούν να διαβαστούν στα έγγραφα [OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen in an [additional graph](#AapsScreens-section-g-additional-graphs). You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](#objectives-objective8) in order to let Sensitivity Detection/[Autosens](#Open-APS-features-autosens) automatically adjust the amount of insulin delivered. Πριν την επίτευξη αυτού του στόχου, το ποσοστό ευαισθησίας Autosens / η γραμμή στο γράφημά σας εμφανίζεται μόνο για ενημέρωση.

### Ρύθμιση απορρόφησης

If you use Oref1 with **SMB** you must change **min_5m_carbimpact** to 8. The value is only used during gaps in **CGM** readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause **AAPS** to decay COB. At times when [carb absorption](../DailyLifeWithAaps/CobCalculation.md) can't be dynamically worked out based on your blood's reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

(Config-Builder-aps)=

## APS

Επιλέξτε τον αλγόριθμο APS που θέλετε για τις ρυθμίσεις των παρεμβάσεων. Μπορείτε να δείτε την ενεργή λεπτομέρεια του επιλεγμένου αλγορίθμου στην καρτέλα OpenAPS (OAPS).

* OpenAPS AMA 
  * Advanced Meal Assist: older algorithm not recommended anymore.
  * In simple terms, the benefits are after you give yourself a meal bolus, the system can high-temp more quickly IF you enter carbs reliably.
* [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) 
  * Super Micro Bolus: most recent algorithm recommended for all users.
  * In contrast to AMA, SMB does not use temporary basal rates to control glucose levels, but mainly small **Super Micro Boluses**.
  * Note : It is recommended to use this algorithm from the beginning, even though you will not actually get SMBs delivered until [Objective 9](#objectives-objective9).

If switching from AMA to SMB algorithm, *min_5m_carbimpact* must be changed manually to **8** (default value for SMB) in [Preferences > Sensitivity detection > Sensitivity Oref1 settings](../SettingUpAaps/Preferences.md).

## Κύκλωμα

This module should not be disabled as it is a core part of **AAPS**.

## Constraints

### Objectives

**AAPS** has a learning program (a series of objectives) that you have to fulfill step by step. Αυτό θα σας καθοδηγήσει με ασφάλεια με στη δημιουργία ενός συστήματος κλειστού κυκλώματος. Εξασφαλίζει ότι έχετε ρυθμίσει τα πάντα σωστά και καταλαβαίνετε τι ακριβώς κάνει το σύστημα. Αυτός είναι ο μόνος τρόπος για να εμπιστευτείτε το σύστημα.

See [Objectives](../SettingUpAaps/CompletingTheObjectives.md) page for more information.

## Synchronization

In this section, you can choose if/where you want **AAPS** to send your data to.

### NSClient or NSClientV3

Can be used as a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md) and/or for [remote monitoring](../RemoteFeatures/RemoteMonitoring.md), [remote control](../RemoteFeatures/RemoteControl.md).

See [Synchronization with the reporting server](#SetupWizard-synchronization-with-the-reporting-server-and-more) to help you choose between NSClient (v1) and NSClientV3.

### Tidepool

Can be used as a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md).

See [Tidepool](../SettingUpAaps/Tidepool.md).

### xDrip

Used to **send** data such as treatments to xDrip+.

### Open Humans

See [Open Humans](../SupportingAaps/OpenHumans.md).

### Wear

Monitor and control **AAPS** using your Android WearOS watch (see [page Watchfaces](../WearOS/WearOsSmartwatch.md)).

### Samsung Tizen

Broadcast data to Samsung's G-Watch Wear App (Tizen OS).

### Garmin

Connection to Garmin device (Fenix, Edge...)

## Θεραπείες

Αν προβάλετε την καρτέλα Θεραπείες (Θεραπείες), μπορείτε να δείτε τις θεραπείες που έχουν μεταφορτωθεί στο nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](#screens-bolus-carbs).

## General

### Σφαιρική Εικόνα

This is the [main screen](#AapsScreens-the-homescreen) of **AAPS** and can not be disabled.

#### Show notes field in treatment dialogs

Επιλέξτε αν θέλετε να έχετε ένα πεδίο σημειώσεων όταν εισάγετε θεραπείες ή όχι.

#### Φώτα κατάστασης

Choose if you want to have [status lights](#Preferences-status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Η κρίσιμη ηλικία θα εμφανιστεί με κόκκινο χρώμα.

#### Προηγμένες ρυθμίσεις

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percentage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### Ενέργειες

A tab offering multiple buttons to take [actions](#screens-action-tab) in **AAPS**.

### Αυτοματοποίηση

A tab for managing your [Automations](../DailyLifeWithAaps/Automations.md), starting at [Objective 10](#objectives-objective10).

(Config-Builder-sms-communicator)=

### Επικοινωνία με SMS

Allows remote caregivers to control some **AAPS** features via SMS, see [SMS Commands](../RemoteFeatures/SMSCommands.md) for more setup information.

### Φαγητό

Εμφανίζει τις προεπιλογές τροφίμων που ορίζονται στη βάση δεδομένων τροφίμων Nightscout, δείτε [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) για περισσότερες πληροφορίες ρύθμισης.

Note: Entries cannot be used in the **AAPS** calculator. (μόνο για ανάγνωση)

(Config-Builder-wear)=

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../WearOS/WearOsSmartwatch.md)). Χρησιμοποιήστε τις ρυθμίσεις (γρανάζι) για να ορίσετε ποιες μεταβλητές θα πρέπει να λαμβάνονται υπόψη κατά τον υπολογισμό του bolus που δίνεται από το ρολόι σας (δηλαδή τάση 15 λεπτών, COB...).

If you want to bolus etc. from the watch then within "Wear settings" you need to enable "Controls from Watch".

![Ρυθμίσεις Wear](../images/ConfBuild_Wear.png)

Μέσα από την καρτέλα Wear ή το μενού χάμπουργκερ (στην πάνω αριστερή πλευρά της οθόνης, αν δεν εμφανίζεται η καρτέλα) μπορείτε

* Ξαναστείλετε όλα τα δεδομένα. Μπορεί να είναι χρήσιμο εάν το ρολόι δεν συνδεόταν για κάποιο χρονικό διάστημα και θέλετε να ωθήσετε τις πληροφορίες στο ρολόι.
* Ανοίξτε τις ρυθμίσεις στο ρολόι σας απευθείας από το τηλέφωνό σας.

### Συντήρηση

Access this tab to export / import settings.

### Διαμόρφωση

This current tab.