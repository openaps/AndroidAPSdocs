# Χαρακτηριστικά του OpenAPS

## Autosens

* Autosens is a algorithm which looks at blood glucose deviations (positive/negative/neutral).
* It will try and figure out how sensitive/resistant you are based on these deviations.
* The oref implementation in **OpenAPS** runs off a combination of 24 and 8 hours worth of data. It uses either one which is more sensitive.
* In versions prior to AAPS 2.7 user had to choose between 8 or 24 hours manually.
* From AAPS 2.7 on Autosens in AAPS will switch between a 24 and 8 hours window for calculating sensitivity. It will pick which ever one is more sensitive. 
* If users have come from oref1 they will probably notice the system may be less dynamic to changes, due to the varying of either 24 or 8 hours of sensitivity.
* Changing a cannula or changing a profile will reset Autosens ratio back to 100%.
* Autosens adjusts your basal, I:C and ISF for you (i.e.: mimicking what a Profile shift does).
* If continuously eating carbs over an extended period, autosens will be less effective during that period as carbs are excluded from BG delta calculations.

## Super Micro Bolus (SMB)

Το SMB, το συντομογραφία του πολύ μικρό bolus «Super Micro Bolus», είναι το τελευταίο χαρακτηριστικό του OpenAPS (από το 2018) στο πλαίσιο του αλγορίθμου Oref1. Σε αντίθεση με το AMA, το SMB δεν χρησιμοποιεί προσωρινά βασικά ποσοστά για τον έλεγχο των επιπέδων γλυκόζης, αλλά κυρίως ** μικρά σούπερ μικροbolus **. Σε καταστάσεις όπου το AMA θα προσθέσει 1.0 IU ινσουλίνη χρησιμοποιώντας ένα προσωρινό βασικό ρυθμό, το SMB παράγει διάφορα σούπερ μικροbolus σε μικρά στάδια σε διαστήματα ** 5 λεπτών **, π.χ. 0,4 IU, 0,3 IU, 0,2 IU και 0,1 IU. Ταυτόχρονα (για λόγους ασφαλείας) ο πραγματικός βασικός ρυθμός ρυθμίζεται σε 0 IU / h για μια ορισμένη χρονική περίοδο για να αποφευχθεί η υπερβολική δόση (** «μηδενικός ρυθμός» **). Αυτό επιτρέπει στο σύστημα να ρυθμίζει τη γλυκόζη αίματος γρηγορότερα από ότι με την προσωρινή αύξηση βασικού ρυθμού στο AMA.

Χάρη στην SMB, μπορεί να είναι αρκετό για τα γεύματα με χαμηλή περιεκτικότητα σε υδατάνθρακες για να ενημερώσουν το σύστημα για την προγραμματισμένη ποσότητα υδατανθράκων και να αφήσουν τα υπόλοιπα στο AAPS. Ωστόσο, αυτό μπορεί να οδηγήσει σε υψηλότερες αιχμές postprandial, διότι δεν είναι δυνατή το προ-bolus. Ή εάν δώσετε, εάν χρειάζεται ένα προ-bolus, ένα ** bolus ξεκινήματος**, το οποίο ** μόνο εν μέρει ** καλύπτει τους υδατάνθρακες (π.χ. 2/3 του εκτιμώμενου ποσού) το υπόλοιπο καλύπτετε από το SMB.

Η λειτουργία SMB περιλαμβάνει κάποιους μηχανισμούς ασφαλείας:

1. Η μεγαλύτερη μοναδική δόση SMB μπορεί να είναι η μικρότερη μόνο τιμή των:
    
    * value corresponding to the current basal rate (as adjusted by autosens) for the duration set in "Max minutes of basal to limit SMB to", e.g. basal quantity for the next 30 minutes, or
    * το ήμισυ της απαιτούμενης ποσότητας ινσουλίνης, ή
    * το υπόλοιπο τμήμα της μέγιστης τιμής Iob σας στις ρυθμίσεις.

2. Πιθανώς συχνά θα παρατηρήσετε χαμηλά προσωρινά βασικά ποσοστά (αποκαλούμενα «χαμηλός ρυθμός») ή προσωρινά βασικά ποσοστά στα 0 U / h (αποκαλούμενα «μηδενικός ρυθμός»). Αυτό είναι σχεδιασμένο για λόγους ασφαλείας και δεν έχει αρνητικές επιπτώσεις αν το προφίλ έχει ρυθμιστεί σωστά. Η καμπύλη IOB έχει μεγαλύτερη σημασία από την πορεία των προσωρινών βασικών τιμών.

3. Πρόσθετοι υπολογισμοί για την πρόβλεψη της πορείας της γλυκόζης, π.χ. από UAM (μη αναγγελθέντα γεύματα). Ακόμα και χωρίς την εισαγωγή υδατανθράκων από τον χρήστη, το UAM μπορεί να ανιχνεύσει αυτόματα μια σημαντική αύξηση των επιπέδων γλυκόζης λόγω γευμάτων, αδρεναλίνης ή άλλων επιδράσεων και να προσπαθήσει να το προσαρμόσει με SMB. Για να είμαστε στην ασφαλή πλευρά, αυτό λειτουργεί και στην άλλη κατεύθυνση και μπορεί να σταματήσει την SMB νωρίτερα, εάν εμφανιστεί μια απροσδόκητα γρήγορη πτώση της γλυκόζης. Αυτός είναι ο λόγος για τον οποίο η UAM πρέπει να είναι πάντα ενεργή στην SMB.

**You must have started [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) to use SMB.**

Δείτε επίσης: [ Τεκμηρίωση OpenAPS για oref1 SMB ](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) και [ Πληροφορίες Tim για SMB ](http://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

### Μέγιστη τιμή U / h μια τιμή βασικού ρυθμού μπορεί να ρυθμιστεί σε (OpenAPS "μέγιστος βασικός")

Αυτή η ρύθμιση ασφαλείας καθορίζει το μέγιστο προσωρινό βασικό ρυθμό που μπορεί να προσφέρει η αντλία ινσουλίνης. Η τιμή πρέπει να είναι η ίδια στην αντλία και στο AAPS και πρέπει να είναι τουλάχιστον 3 φορές υψηλότερη από τη μοναδική βασική τιμή.

Παράδειγμα:

Ο μέγιστος ρυθμός του βασικού προφίλ σας κατά τη διάρκεια της ημέρας είναι 1,00 U / h. Τότε συνιστάται μια μέγιστη βασική τιμή τουλάχιστον 3 U / h.

Αλλά δεν μπορείτε να επιλέξετε οποιαδήποτε αξία. Το AAPS περιορίζει την τιμή ως «αυστηρό όριο» ανάλογα με την ηλικία του ασθενή που έχετε επιλέξει κάτω από τις ρυθμίσεις. Η χαμηλότερη επιτρεπόμενη τιμή είναι για τα παιδιά και η υψηλότερη για ενήλικες ανθεκτικούς στην ινσουλίνη.

Το AndroidAPS περιορίζει την τιμή ως εξής:

* Child: 2
* Teenager: 5
* Adult: 10
* Insulin-resistant adult: 12
* Pregnant: 25

*See also [overview of hard-coded limits](../Usage/Open-APS-features.html#overview-of-hard-coded-limits).*

### Το μέγιστο συνολικό IOB που το OpenAPS δεν μπορεί να υπερβεί (OpenAPS "max-iob")

This value determines which maxIOB has to be considered by AAPS running in closed loop mode. If the current IOB (e.g. after a meal bolus) is above the defined value, the loop stops dosing insulin until the IOB limit is below the given value.

Using the OpenAPS SMB, max-IOB is calculated differently than in OpenAPS AMA. In AMA, maxIOB was just a safety-parameter for basal IOB, while in SMB-mode, it also includes bolus IOB. A good start is

    μέγιστο IOB = μέσος bolus γεύματος + 3 φορές το μέγιστο ημερησίως βασικό
    

Be careful and patient and only change the settings step by step. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is higher than in [AMA](../Usage/Open-APS-features.html#max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal).

* Child: 3
* Teenager: 7
* Adult: 12
* Insulin resistant adult: 25
* Pregnant: 40

*See also [overview of hard-coded limits](../Usage/Open-APS-features.html#overview-of-hard-coded-limits).*

See also [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Ενεργοποιήστε το AMA Autosense

Here, you can choose if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) 'autosense' or not.

### Ενεργοποίησε το SMB

Here you can enable or completely disable SMB feature.

### Ενεργοποίηση SMB με COB

SMB is working when there is COB active.

### Ενεργοποιήστε τη λειτουργία SMB με τους προσωρινούς στόχους

SMB is working when there is a low or high temporary target active (eating soon, activity, hypo, custom)

### Ενεργοποίηση SMB με υψηλούς προσωρινούς στόχους

SMB is working when there is a high temporary target active (activity, hypo). This option can limit other SMB Settings, i.e. if ‘SMB with temp targets’ is enabled and ‘SMB with high temp targets’ is deactivated, SMB just works with low and not with high temp targets. It is the same for enabled SMB with COB: if 'SMB with high temp target' is deactivated, there is no SMB with high temp target even if COB is active.

### Ενεργοποιήστε το SMB

SMB is working always (independent of COB, temp targets or boluses). Για λόγους ασφαλείας, αυτή η επιλογή είναι πιθανώς για πηγές BG με ένα ωραίο σύστημα φιλτραρίσματος για θορυβώδη δεδομένα. Προς το παρόν, λειτουργεί μόνο με Dexcom G5, αν χρησιμοποιείτε την εφαρμογή Dexcom (patched) ή το "native mode" στο xDrip +. Εάν μια τιμή BG έχει πολύ μεγάλη απόκλιση, το G5 δεν το στέλνει και περιμένει την επόμενη τιμή σε 5 λεπτά.

For other CGM/FGM like Freestyle Libre, ‘SMB always’ is deactivated until xDrip+ has a better noise smoothing plugin. You can find more [here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Ενεργοποιήστε το SMB μετά από τους υδατάνθρακες

SMB is working for 6h after carbohydrates , even if COB is at 0. Για λόγους ασφαλείας, αυτή η επιλογή είναι πιθανώς για πηγές BG με ένα ωραίο σύστημα φιλτραρίσματος για θορυβώδη δεδομένα. Προς το παρόν, λειτουργεί μόνο με Dexcom G5, αν χρησιμοποιείτε την εφαρμογή Dexcom (patched) ή το "native mode" στο xDrip +. Εάν μια τιμή BG έχει πολύ μεγάλη απόκλιση, το G5 δεν το στέλνει και περιμένει την επόμενη τιμή σε 5 λεπτά.

For other CGM/FGM like Freestyle Libre, 'SMB always' is deactivated until xDrip+ has a better noise smoothing plugin. You can find [more information here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Τα μέγιστα λεπτά του βασικού ρυθμού που περιορίζουν το SMB

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

This makes the SMB more aggressive. For the beginning, you should start with the default value of 30 minutes. After some experience, you can increase the value with 15 minutes steps and watch how these changes are affecting.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to adjust a decreasing BG with 0 IE/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which warns you before running into hypos.

Default value: 30 min.

### Ενεργοποίηση UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful, if you forget to tell AndroidAPS about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increasments caused by carbs, adrenaline, etc, and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decreasement, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

### Ο υψηλός προσωρινός στόχος ανεβάζει την ευαισθησία

If you have this option enabled, the insulin sensitivity will be increased while having a temporary target over 100 mg/dl or 5.6 mmol/l. This means, the ISF will rise while IC and basal will decrease.

### Ο χαμηλός προσωρινός στόχος μειώνει την ευαισθησία

If you have this option enabled, the insulin sensitivity will be decreased while having a temporary target lower than 100 mg/dl or 5.6 mmol/l. This means, the ISF will decrease while IC and basal will rise.

### Προηγμένες ρυθμίσεις

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

* * *

## Advanced Meal Assist (AMA)

AMA, the shortform of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Μέγιστη τιμή U / h μια τιμή βασικού ρυθμού μπορεί να ρυθμιστεί σε (OpenAPS "μέγιστος βασικός")

This safety setting helps AndroidAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. It is advised to set this to something sensible. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AndroidAPS are:

* Child: 2
* Teenager: 5
* Adult: 10
* Ανθεκτικός στην ινσουλίνη ενήλικος: 12
* Pregnant: 25

*See also [overview of hard-coded limits](../Usage/Open-APS-features.html#overview-of-hard-coded-limits).*

### Το μέγιστο συνολικό IOB που το OpenAPS μπορεί να δώσει\[U\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where AndroidAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

* Child: 3
* Teenager: 5
* Adult: 7
* Ανθεκτικός στην ινσουλίνη ενήλικος: 12
* Pregnant: 25

*See also [overview of hard-coded limits](../Usage/Open-APS-features.html#overview-of-hard-coded-limits).*

### Ενεργοποιήστε το AMA Autosense

Here, you can chose, if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) autosense or not.

### Το autosens ρυθμίζει επίσης προσωρινούς στόχους

If you have this option enabled, autosense can adjust targets (next to basal, ISF and IC), too. This lets AndroidAPS work more 'aggressive' or not. The actual target might be reached faster with this.

### Προηγμένες ρυθμίσεις

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

## Overview of hard-coded limits

<table border="1">
  
<thead>
  <tr>
    <th width="200"></th>
    <th width="75">Child</th>
    <th width="75">Teenager</th>
    <th width="75">Adult</th>
    <th width="75">Insulin resistant adult</th>
    <th width="75">Pregnant</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>MAXBOLUS</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>17,0</td>
    <td>25,0</td>
    <td>60,0</td>
  </tr>
  <tr>
    <td>MINDIA</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
  </tr>
  <tr>
    <td>MAXDIA</td>
    <td>7,0</td>
    <td>7,0</td>
    <td>7,0</td>
    <td>7,0</td>
    <td>10,0</td>
  </tr>
  <tr>
    <td>MINIC</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>0,3</td>
  </tr>
  <tr>
    <td>MAXIC</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
  </tr>
  <tr>
    <td>MAXIOB_AMA</td>
    <td>3,0</td>
    <td>3,5</td>
    <td>7,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
  <tr>
    <td>MAXIOB_SMB</td>
    <td>3,0</td>
    <td>7,0</td>
    <td>12,0</td>
    <td>25,0</td>
    <td>45,0</td>
  </tr>
  <tr>
    <td>MAXBASAL</td>
    <td>2,0</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
</tbody>
</table>