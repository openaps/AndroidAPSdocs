# OpenAPS functies

## Super Micro Bolus (SMB)

SMB, de afkorting van 'super micro bolus', is de nieuwste OpenAPS functie (uit 2018) van het Oref1-algoritme. In tegenstelling tot AMA (geavanceerde maaltijdhulp), gebruikt SMB geen tijdelijke basaalstanden, maar vooral **kleine super microbolussen**. In gevallen waar AMA 1,0 Eenheid extra insuline zou geven door middel van een tijdelijke basaalstand, geeft SMB verschillende super microbolussen in kleine stapjes met **5 minuten ertussen**, bijvoorbeeld 0,4 E; 0,3 E; 0,2 E en 0,1 E. Tegelijkertijd wordt (uit veiligheidsredenen) de basaalstand op dat moment naar 0 E/uur gezet om een overdosis te voorkomen, dit heet **'zero-temp'**. Op deze manier kan het systeem je bloedsuikers sneller laten zakken dan met de tijdelijk hogere basaalstand die AMA gebruikt.

Dankzij SMB kun je in principe bij een maaltijd met weinig koolhydraten, alleen de hoeveelheid koolhydraten invoeren en de rest overlaten aan AAPS. Al kan dit wel leiden tot hogere waardes na de maaltijd, omdat je niet kunt pre-bolussen. Of je geeft, eventueel door te pre-bolussen, een **start bolus**, die maar **gedeeltelijk** jouw koolhydraten afdekt (bijv. 2/3 van de geschatte hoeveelheid) en je laat SMB de rest aanvullen.

De SMB-functie heeft een aantal veiligheidsmaatregelen:

1. De kleinste waarde van onderstaande opties is de maximale dosis die een SMB mag geven:
    
    * waarde die hoort bij jouw huidige basaalstand (eventueel aangepast door autotune/autosens) voor de instelling "Maximum aantal minuten basaal om de SMB te limiteren tot", bijvoorbeeld de hoeveelheid basale insuline die je de komende 30 minuten zou krijgen, of
    * de helft van de insuline die je op dat moment nodig hebt, of
    * de overgebleven hoeveelheid van jouw maxIOB waarde in de instellingen.

2. Waarschijnlijk zul je vaker lage tijdelijke basaalstanden zien (zogenaamde 'low temps') of tijdelijke basaalstanden van 0 E/uur (zogenaamde 'zero temps'). Dit is zo ontworpen vanwege veiligheidsredenen en heeft bij een correct ingesteld profiel geen negatieve gevolgen. Het is hierdoor zinvoller om naar de IOB grafiek te kijken dan naar de tijdelijke basaalstanden die zijn gegeven.

3. Allerlei berekeningen om het verloop van je glucosewaardes te kunnen voorspellen, bijv. met UAM (onaangekondigde maaltijden, unannounced meals). Zelfs zonder dat jij als gebruiker handmatig je koolhydraten invoert, zal UAM een sterke stijging van jouw glucosewaardes opmerken. Een stijging door maaltijden, adrenaline of andere invloeden. Vervolgens zal het systeem jouw waardes proberen te verlagen met SMB. Andersom werkt dit ook: om veilig te kunnen werken zal het systeem eerder stoppen met het geven van SMB als het merkt dat jouw glucosewaarde plotseling daalt. Daarom moet je UAM altijd ingeschakeld hebben wanneer je SMB gebruikt.

**You must have completed [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) to use SMB.**

Zie ook: [OpenAPS documentatie voor oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) en [Tim's info over SMB](http://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

### Maximale E/uur dat OpenAPS kan toedienen (OpenAPS "max-basal")

Deze veiligheidsinstelling bepaalt de maximale tijdelijke basaalstand die je insulinepomp mag geven. Deze waarde zou hetzelfde moeten zijn in je pompinstellingen als in AAPS, en zou op zijn minst 3 x jouw hoogste basaalstand moeten zijn.

Example:

Your basal profile’s highest basal rate during the day is 1.00 U/h. Then a max-basal value of at least 3 U/h is recommended.

But you cannot choose any value. AAPS limits the value as a 'hard limit' according to the patients age you have selected under settings. The lowest permitted value is for children and the highest for insulin-resistant adults.

AndroidAPS limits the value as follows:

* Kind: 2
* Tiener: 5
* Volwassene: 10
* Insuline-resistente volwassene: 12

### Max totaal IOB dat OpenAPS niet kan overschrijden (OpenAPS "max-iob")

This value determines which maxIOB has to be considered by AAPS running in closed loop mode. If the current IOB (e.g. after a meal bolus) is above the defined value, the loop stops dosing insulin until the IOB limit is below the given value.

Using the OpenAPS SMB, max-IOB is calculated differently than in OpenAPS AMA. In AMA, maxIOB was just a safety-parameter for basal IOB, while in SMB-mode, it also includes bolus IOB. A good start is

    maxIOB = average mealbolus + 3x max daily basal
    

Be careful and patient and only change the settings step by step. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is higher than in AMA.

* Kind: 3
* Tiener: 7
* Volwassene: 12
* Insuline-resistente volwassene: 25

See also [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).

### Activeer AMA autosens

Here, you can choose if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) 'autosense' or not.

### Activeer SMB

Here you can enable or completely disable SMB feature.

### Activeer SMB met Koolhydraten

SMB is working when there is COB active.

### Gebruik SMB met tijdelijke streefdoelen

SMB is working when there is a low or high temporary target active (eating soon, activity, hypo, custom)

### Gebruik SMB met een hoog tijdelijk streefdoel

SMB is working when there is a high temporary target active (activity, hypo). This option can limit other SMB Settings, i.e. if ‘SMB with temp targets’ is enabled and ‘SMB with high temp targets’ is deactivated, SMB just works with low and not with high temp targets. It is the same for enabled SMB with COB: if 'SMB with high temp target' is deactivated, there is no SMB with high temp target even if COB is active.

### Activeer SMB altijd

SMB is working always (independent of COB, temp targets or boluses). Om veiligheidsredenen is deze optie alleen mogelijk voor BG bronnen met een mooi filtersysteem voor 'ruis' in de BG waardes. Voor nu werkt het enkel met een Dexcom G5 in combinatie met de aangepaste Dexcom App, of met de G5 of G6 in combinatie met 'native algorithm' in xDrip+. Dankzij deze filtering zal de Dexcom zender een BG-waarde met een te grote afwijking, niet sturen en wachten op de volgende waarde in 5 minuten.

For other CGM/FGM like Freestyle Libre, ‘SMB always’ is deactivated until xDrip+ has a better noise smoothing plugin. You can find more [here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Activeer SMB na koolhydraten

SMB is working for 6h after carbohydrates , even if COB is at 0. Om veiligheidsredenen is deze optie alleen mogelijk voor BG bronnen met een mooi filtersysteem voor 'ruis' in de BG waardes. Voor nu werkt het enkel met een Dexcom G5 in combinatie met de aangepaste Dexcom App, of met de G5 of G6 in combinatie met 'native algorithm' in xDrip+. Dankzij deze filtering zal de Dexcom zender een BG-waarde met een te grote afwijking, niet sturen en wachten op de volgende waarde in 5 minuten.

For other CGM/FGM like Freestyle Libre, 'SMB always' is deactivated until xDrip+ has a better noise smoothing plugin. You can find [more information here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Maximum aantal minuten basaal om SMB te limiteren tot

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is not covered by COBs.

This makes the SMB more aggressive. For the beginning, you should start with the default value of 30 minutes. After some experience, you can increase the value with 15 minutes steps and watch how these changes are affecting.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to adjust a decreasing BG with 0 IE/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which warns you before running into hypos.

Default value: 30 min.

### Activeer UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful, if you forget to tell AndroidAPS about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increasments caused by carbs, adrenaline, etc, and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decreasement, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

### Hoog tijdelijk streefdoel verhoogt gevoeligheid

If you have this option enabled, the insulin sensitivity will be increased while having a temporary target over 100 mg/dl or 5.6 mmol/l. This means, the ISF will rise while IC and basal will decrease.

### Laag tijdelijk streefdoel verlaagt gevoeligheid

If you have this option enabled, the insulin sensitivity will be decreased while having a temporary target lower than 100 mg/dl or 5.6 mmol/l. This means, the ISF will decrease while IC and basal will rise.

### Geavanceerde instellingen

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

* * *

## Geavanceerde maaltijdhulp (AMA)

AMA, the shortform of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

**You will need to have completed [objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) to use this feature**

You can find more information in the [OpenAPS documentation](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Maximale E/uur dat een tijdelijke basaalstand kan toedienen (OpenAPS "max-basal")

This safety setting helps AndroidAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. We raden je aan je verstand te gebruiken bij het invullen van deze waarde. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AndroidAPS are:

* Kind: 2
* Tiener: 5
* Volwassene: 10
* Insuline-resistente volwassene: 12

### Max basaal IOB dat OpenAPS kan toedienen \[E\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where AndroidAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

* Kind: 3
* Tiener: 5
* Volwassene: 7
* Insuline-resistente volwassene: 12

### Activeer AMA autosens

Here, you can chose, if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) autosense or not.

### Autosens past de streefwaardes ook aan

If you have this option enabled, autosense can adjust targets (next to basal, ISF and IC), too. This lets AndroidAPS work more 'aggressive' or not. The actual target might be reached faster with this.

### Geavanceerde instellingen

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump, or, if enabled, determined by autotune. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump, or, if enabled, determined by autotune.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

* * *

## Maaltijd Assistent (MA)

### Maximale E/uur dat een tijdelijke basaalstand kan toedienen (OpenAPS "max-basal")

This safety setting helps AndroidAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. We raden je aan je verstand te gebruiken bij het invullen van deze waarde. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in MA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AndroidAPS are:

* Kind: 2
* Tiener: 5
* Volwassene: 10
* Insuline-resistente volwassene: 12

### Max basaal IOB dat OpenAPS kan toedienen \[E\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where AndroidAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in MA than in SMB.

* Kind: 3
* Tiener: 5
* Volwassene: 7
* Insuline-resistente volwassene: 12

### Geavanceerde instellingen

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2.That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2