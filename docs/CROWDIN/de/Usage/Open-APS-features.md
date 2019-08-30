# OpenAPS Funktionen

## Super Micro Bolus (SMB)

SMB steht für “super micro bolus” und ist die neueste OpenAPS-Funktion (aus 2018) im Rahmen des Oref1-Algorithmus. Im Gegensatz zu AMA arbeitet SMB nicht so stark mit temporären Basalraten, sondern hauptsächlich mit **kleinen Supermicroboli**. In Situationen, in denen AMA 1.0 IE Insulin über eine temporäre Basalrate zugeben würde, gibt SMB im **5-Minutentakt** mehrere Supermicroboli in kleinen Schritten ab, z.B. 0.4 IE, 0.3 IE, 0.2 IE und 0.1 IE. Gleichzeitig wird die laufende Basalrate aus Sicherheitsgründen für eine bestimmte Dauer auf 0 IE/h gesetzt, damit keine Überdosierung erfolgt (**“zero-temping”**). So kann das System den BZ schneller abfangen als mit der temporären Basalratenerhöhung bei AMA.

Grundsätzlich kann es dank SMB bei kohlenhydratarmen Mahlzeiten ausreichen, dem System die geplante Kohlenhydratmenge mitzuteilen und den Rest AAPS zu überlassen. Dies führt aber womöglich zu höheren postprandialen Peaks, weil kein Spritz-Ess-Abstand (SEA) eingehalten werden kann. Oder du gibst, ggf. mit SEA, einen **Anfangsbolus**, der **nur zum Teil** die Kohlenhydrate abdeckt (z.B. 2/3 der geschätzten Menge) und lässt den Rest vom SMB auffüllen.

Die SMB-Funktion arbeitet mit einigen Sicherheitsmechanismen:

1. Die größte einzelne SMB-Dosis kann nur der kleinste Wert sein aus:
    
    * Wert, der der aktuellen Basalrate (wie sie autotune/autosens angepasst haben) für die unter “SMB-Basal-Limit in Minuten” voreingestellte Dauer entspricht, z.B. Basalmenge der kommenden 30 Minuten, oder
    * die Hälfte der aktuell benötigten Insulinmenge oder
    * der verbleibende Anteil deines maxIOB-Wertes in den Einstellungen.

2. Wahrscheinlich wirst du häufig niedrige temporäre Basalraten (sog. ‘low temps’) oder temporäre Basalraten mit 0 IE/h (sog. ‘zero-temps’) feststellen. Dies ist aus Sicherheitsgründen so gewollt und hat bei einem korrekt eingestellten Profil auch keine negativen Auswirkungen. Die IOB-Kurve ist aussagekräftiger als der Verlauf der temporären Basalraten.

3. Zusätzliche Berechnungen zur Vorhersage des Glukoseverlaufs, z.B. durch UAM (un-announced meals). UAM kann auch ohne manuelle Kohlenhydrat-Eingaben des Nutzers automatisch erkennen, dass die Glukosewerte auf Grund von Mahlzeiten, Adrenalin oder anderen Einflüssen siginifikant steigen und versuchen, dies mit SMB abzufangen. Dies funktioniert aber zur Sicherheit auch andersherum und kann bei unvorhergesehen schnellem Glukoseabfall den SMB früher stoppen. Deshalb sollte UAM bei SMB auch immer aktiv sein.

**Du musst das [Ziel 8](../Usage/Objectives.md) abgeschlossen haben, um SMB verwenden zu können.**

Siehe dazu auch (beides in Englisch): [OpenAPS Dokumentation zu oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) und [Tim's Info zu SMB](http://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

### Max IE/h, die als TBR gesetzt werden können (OpenAPS “max-basal”)

Diese Sicherheitseinstellung legt fest, welche maximale temporäre Basalrate die Insulinpumpe abgeben darf. Der Wert sollte in der Pumpe und in AAPS übereinstimmen und mindestens beim 3-fachen der höchsten eingestellten einzelnen Basalrate liegen.

Example:

Your basal profile’s highest basal rate during the day is 1.00 U/h. Then a max-basal value of at least 3 U/h is recommended.

But you cannot choose any value. AAPS limits the value as a 'hard limit' according to the patients age you have selected under settings. The lowest permitted value is for children and the highest for insulin-resistant adults.

AndroidAPS limits the value as follows:

* Kind: 2
* Teenager: 5
* Erwachsener: 10
* Insulinresistenter Erwachsener: 12

### Maximales Basal-IOB, das OpenAPS abgeben darf (OpenAPS “max-iob”)

This value determines which maxIOB has to be considered by AAPS running in closed loop mode. If the current IOB (e.g. after a meal bolus) is above the defined value, the loop stops dosing insulin until the IOB limit is below the given value.

Using the OpenAPS SMB, max-IOB is calculated differently than in OpenAPS AMA. In AMA, maxIOB was just a safety-parameter for basal IOB, while in SMB-mode, it also includes bolus IOB. A good start is

    maxIOB = average mealbolus + 3x max daily basal
    

Be careful and patient and only change the settings step by step. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is higher than in AMA.

* Kind: 3
* Jugendlicher: 7
* Erwachsener: 12
* Insulinresistenter Erwachsener: 25

See also [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).

### Verwende AMA Autosense

Here, you can choose if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) 'autosense' or not.

### Aktiviere SMB

Here you can enable or completely disable SMB feature.

### Aktiviere SMB während COB

SMB is working when there is COB active.

### Aktiviere SMB während temporären Zielen

SMB is working when there is a low or high temporary target active (eating soon, activity, hypo, custom)

### Aktiviere SMB während hohen temporären Zielen

SMB is working when there is a high temporary target active (activity, hypo). This option can limit other SMB Settings, i.e. if ‘SMB with temp targets’ is enabled and ‘SMB with high temp targets’ is deactivated, SMB just works with low and not with high temp targets. It is the same for enabled SMB with COB: if 'SMB with high temp target' is deactivated, there is no SMB with high temp target even if COB is active.

### Aktiviere SMB immer

SMB is working always (independent of COB, temp targets or boluses). Zur Sicherheit ist diese Option nur möglich, wenn die BZ-Quelle gut gefilterte (nicht rauschende) Werte ausgibt. Derzeit ist das nur möglich mit dem Dexcom G5, wenn es mit der gepatchten Dexcom App oder mit xDrip+ im “native Modus” ausgelesen wird. Falls ein gemessener Wert zu weit abweicht, gibt der G5 einfach gar keinen Wert ab und wartet die nächste Messung in 5 Minuten ab.

For other CGM/FGM like Freestyle Libre, ‘SMB always’ is deactivated until xDrip+ has a better noise smoothing plugin. You can find more [here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Aktiviere SMB nach Mahlzeiten

SMB is working for 6h after carbohydrates , even if COB is at 0. Zur Sicherheit ist diese Option nur möglich, wenn die BZ-Quelle gut gefilterte (nicht rauschende) Werte ausgibt. Derzeit ist das nur möglich mit dem Dexcom G5, wenn es mit der gepatchten Dexcom App oder mit xDrip+ im “native Modus” ausgelesen wird. Falls ein gemessener Wert zu weit abweicht, gibt der G5 einfach gar keinen Wert ab und wartet die nächste Messung in 5 Minuten ab.

For other CGM/FGM like Freestyle Libre, 'SMB always' is deactivated until xDrip+ has a better noise smoothing plugin. You can find [more information here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### SMB-Basal-Limit in Minuten

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is not covered by COBs.

This makes the SMB more aggressive. For the beginning, you should start with the default value of 30 minutes. After some experience, you can increase the value with 15 minutes steps and watch how these changes are affecting.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to adjust a decreasing BG with 0 IE/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which warns you before running into hypos.

Default value: 30 min.

### Aktiviere UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful, if you forget to tell AndroidAPS about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increasments caused by carbs, adrenaline, etc, and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decreasement, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

### Hohe temporäre Ziele erhöhen die Sensitivität

If you have this option enabled, the insulin sensitivity will be increased while having a temporary target over 100 mg/dl or 5.6 mmol/l. This means, the ISF will rise while IC and basal will decrease.

### Niedrige temporäre Ziele senken die Sensitivität

If you have this option enabled, the insulin sensitivity will be decreased while having a temporary target lower than 100 mg/dl or 5.6 mmol/l. This means, the ISF will decrease while IC and basal will rise.

### Erweiterte Einstellungen

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

* * *

## Erweiterter Mahlzeit-Assistent (AMA)

AMA, the shortform of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

**You will need to have completed [objective 7](../Usage/Objectives.md) to use this feature**

You can find more information in the [OpenAPS documentation](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max IE/h, die als temporäre Basalrate gesetzt werden können (OpenAPS “max-basal”)

This safety setting helps AndroidAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. Es wird empfohlen, hier etwas vernünftiges einzugeben. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AndroidAPS are:

* Kind: 2
* Teenager: 5
* Erwachsener: 10
* Insulinresistenter Erwachsener: 12

### Maximales Basal-IOB, das OpenAPS abgeben darf \[IE\] (OpenAPS “max-iob”)

This parameter limits the maximum of basal IOB where AndroidAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

* Kind: 3
* Teenager: 5
* Erwachsener: 7
* Insulinresistenter Erwachsener: 12

### Verwende AMA Autosense

Here, you can chose, if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) autosense or not.

### Autosense passt auch temporäre Ziele an

If you have this option enabled, autosense can adjust targets (next to basal, ISF and IC), too. This lets AndroidAPS work more 'aggressive' or not. The actual target might be reached faster with this.

### Erweiterte Einstellungen

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump, or, if enabled, determined by autotune. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump, or, if enabled, determined by autotune.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

* * *

## Mahlzeit-Assistent (MA)

### Max IE/h, die als temporäre Basalrate gesetzt werden können (OpenAPS “max-basal”)

This safety setting helps AndroidAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. Es wird empfohlen, hier etwas vernünftiges einzugeben. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in MA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AndroidAPS are:

* Kind: 2
* Teenager: 5
* Erwachsener: 10
* Insulinresistenter Erwachsener: 12

### Maximales Basal-IOB, das OpenAPS abgeben darf \[IE\] (OpenAPS “max-iob”)

This parameter limits the maximum of basal IOB where AndroidAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in MA than in SMB.

* Kind: 3
* Teenager: 5
* Erwachsener: 7
* Insulinresistenter Erwachsener: 12

### Erweiterte Einstellungen

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2.That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2