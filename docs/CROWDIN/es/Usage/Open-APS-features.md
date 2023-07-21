# Características de OpenAPS

(Open-APS-features-autosens)=

## Autosens

* Autosens is a algorithm which looks at blood glucose deviations (positive/negative/neutral).
* It will try and figure out how sensitive/resistant you are based on these deviations.
* The oref implementation in **OpenAPS** runs off a combination of 24 and 8 hours worth of data. It uses either one which is more sensitive.
* In versions prior to AAPS 2.7 user had to choose between 8 or 24 hours manually.
* From AAPS 2.7 on Autosens in AAPS will switch between a 24 and 8 hours window for calculating sensitivity. It will pick which ever one is more sensitive. 
* If users have come from oref1 they will probably notice the system may be less dynamic to changes, due to the varying of either 24 or 8 hours of sensitivity.
* Changing a cannula or changing a profile will reset Autosens ratio back to 100% (a percentual profile switch with duration won't reset autosens).
* Autosens adjusts your basal and ISF (i.e.: mimicking what a Profile shift does).
* If continuously eating carbs over an extended period, autosens will be less effective during that period as carbs are excluded from BG delta calculations.

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolo (SMB)

SMB, the shortform of 'super micro bolus', is the latest OpenAPS feature (from 2018) within the Oref1 algorithm. In contrast to AMA, SMB does not use temporary basal rates to control glucose levels, but mainly **small super microboluses**. In situations where AMA would add 1.0 IU insulin using a temporary basal rate, SMB delivers several super microboluses in small steps at **5 minute intervals**, e.g. 0.4 IU, 0.3 IU, 0.2 IU and 0.1 IU. At the same time (for safety reasons) the actual basal rate is set to 0 IU/h for a certain period to prevent overdose (**'zero-temping'**). This allows the system adjust the blood glucose faster than with the temporary basal rate increase in AMA.

Thanks to SMB, it may be sufficient for meals containing only "slow" carbs to inform the system of the planned amount of carbohydrate and leave the rest to AAPS. However, this may lead to higher postprandial (post-meal) peaks because pre-bolusing isn’t possible. Or you can give, if necessary with pre-bolusing, a **start bolus**, which **only partly** covers the carbohydrates (e.g. 2/3 of the estimated amount) and let SMB provide the rest.

The SMB feature contains some safety mechanisms:

1. La única dosis de SMB más grande sólo puede ser un valor más pequeño que:
    
    * value corresponding to the current basal rate (as adjusted by autosens) for the duration set in "Max minutes of basal to limit SMB to", e.g. basal quantity for the next 30 minutes, or
    * la mitad de la cantidad de insulina que se requiere actualmente, o
    * la parte restante de su valor de maxIOB en la configuración.

2. Probablemente notará a menudo bajas tasas basales temporales (llamadas 'bajas temporales') o tasas basales temporales en 0 U/h (llamadas 'cero-temporales'). This is by design for safety reasons and has no negative effects if the profile is set correctly. La curva de IOB es más significativa que el curso de las tasas basales temporales.

3. Cálculos adicionales para predecir el curso de la glucosa, por ejemplo, por UAM (comidas no anunciadas). Incluso sin la entrada manual de carbohidratos del usuario, UAM puede detectar automáticamente un incremento significativo en los niveles de glucosa debido a las comidas, adrenalina u otras influencias y tratar de ajustar esto con SMB. Para estar en el lado seguro, esto también funciona al revés y puede detener el SMB antes si se produce una caída inesperadamente rápida en la glucosa. Es por eso que UAM siempre debe estar activo en SMB.

**You must have started [objective 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) to use SMB.**

See also: [OpenAPS documentation for oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) and [Tim's info on SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Max U/h una basal temporal puede establecerse en (OpenAPS “max-basal”)

This safety setting determines the maximum temporary basal rate the insulin pump may deliver. The value should be the same in the pump and in AAPS and should be at least 3 times the highest single basal rate set.

Example:

Your basal profile’s highest basal rate during the day is 1.00 U/h. Then a max-basal value of at least 3 U/h is recommended.

AAPS limits the value as a 'hard limit' according to the patients age you have selected under settings.

AAPS limits the value as follows:

* Niños: 2
* Teenager: 5
* Adultos: 10
* Adultos resistente a la insulina: 12
* Pregnant: 25

*See also [overview of hard-coded limits](Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob)=

### El número máximo de IOB que OpenAPS no puede sobrepasar (OpenAPS "max-iob")

This value determines the maxIOB that AAPS will remain under while running in closed loop mode. If the current IOB (e.g. after a meal bolus) is above the defined value, the loop stops dosing insulin until the IOB limit is below the given value.

Using the OpenAPS SMB, max-IOB is calculated differently than in OpenAPS AMA. In AMA, maxIOB was just a safety-parameter for basal IOB, while in SMB-mode, it also includes bolus IOB. A good start is

    maxIOB = promedio bolos de comidas + 3x basal máx
    

Be careful and patient and only change the settings step by step. It is different for everyone and can also depend on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is higher than in [AMA](Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal).

* Niños: 3
* Teenager: 7
* Adultos: 12
* Adultos resistente a la insulina: 25
* Pregnant: 40

*See also [overview of hard-coded limits](Open-APS-features-overview-of-hard-coded-limits).*

See also [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Enable AMA Autosens

Here, you can choose if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) 'autosens' or not.

(Open-APS-features-enable-smb)=

### Activar SMB

Enable this to use SMB functionality. If disabled, no SMBs will be given.

### Enable SMB with high temp targets

If this setting is enabled, SMB will be allowed, but not necessarily enabled, when there is a high temporary target active (defined as anything above 100mg/dl regardless of profile target). This option is intended to be used to disable SMBs when the setting is disabled. For example, if this option is disabled, SMBs can be disabled by setting a temp target above 100mg/dl. This option will also disable SMB regardless of what other condition is trying to enable SMB.

If this setting is enabled, SMB will only be enabled with a high temp target if Enable SMB with temp targets is also enabled.

(Open-APS-features-enable-smb-always)=

### Enable SMB always

If this setting is enabled, SMB is enabled always (independent of COB, temp targets or boluses). If this setting is enabled, the rest of the enable settings below will have no effect. However, if “Enable SMB with high temp targets” is disabled and a high temp target is set SMBs will be disabled. For safety reasons, this option is only available for BG sources with a good filtering system for noisy data. Currently it is only an available option with a Dexcom G5 or G6, if using the ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “native mode” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value in 5 minutes.

For other CGM/FGM like Freestyle Libre, ‘SMB always’ is deactivated until xDrip+ has a better noise smoothing plugin. You can find more [here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Enable SMB with COB

If this setting is enabled, SMB is enabled when the COB is greater than 0.

### Enable SMB with temp targets

If this setting is enabled, SMB is enabled when there is any temp target set (eating soon, activity, hypo, custom). If this setting is enabled but "Enable SMB with high temp targets" is disabled, SMB will be enabled when a low temp target is set (below 100mg/dl) but disabled when a high temp target is set.

### Habilitar SMB después de Carbohidratos

If enabled, SMB is enabled for 6h after carbohydrates are announced, even if COB has reached 0. For safety reasons, this option is only available for BG sources with a nice filtering system for noisy data. Currently it is only an available option with a Dexcom G5 or G6 if using the ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “native mode” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value in 5 minutes.

For other CGM/FGM like Freestyle Libre, 'Enable SMB after carbs' is deactivated until xDrip+ has a better noise smoothing plugin. You can find [more information here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### Minutos máximos de basal para limitar SMB

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

Making this value larger allows the SMB to be more aggressive. You should start with the default value of 30 minutes. After some experience, increase the value in 15 minutes increments and observe the effects over multiple meals.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to accommodate a decreasing BG with 0 U/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which will warn you well before a hypo.

Default value: 30 min.

### Activar UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful if you forget to tell AAPS about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increasements caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decrease, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

### Objetivo temporal elevado aumenta la sensibilidad

If you have this option enabled, the insulin sensitivity will be increased while having a temporary target above 100 mg/dl or 5.6 mmol/l. This means, the ISF will rise while IC and basal will decrease. This will effectively make AAPS less aggressive when you set a high temp target.

### Objetivo temporal bajo reduce la sensibilidad

If you have this option enabled, the insulin sensitivity will be decreased while having a temporary target lower than 100 mg/dl or 5.6 mmol/l. This means, the ISF will decrease while IC and basal will rise. This will effectively make AAPS more aggressive when you set a low temp target.

### Ajustes avanzados

**Always use short average delta instead of simple data** If you enable this feature, AAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AAPS to be steadier with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Asistente de comida avanzada (AMA)

AMA, the short form of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

(Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Max U/h una basal temporal puede establecerse en (OpenAPS “max-basal")

This safety setting helps AAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. It is advised to set this to something sensible. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AAPS are:

* Niños: 2
* Teenager: 5
* Adultos: 10
* Adultos resistente a la insulina: 12
* Pregnant: 25

*See also [overview of hard-coded limits](Open-APS-features-overview-of-hard-coded-limits).*

### Maximum basal IOB OpenAPS can deliver \[U\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where AAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

* Niños: 3
* Teenager: 5
* Adultos: 7
* Adultos resistente a la insulina: 12
* Pregnant: 25

*See also [overview of hard-coded limits](Open-APS-features-overview-of-hard-coded-limits).*

### Enable AMA Autosens

Here, you can chose, if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) autosens or not.

### Autosens adjust temp targets too

If you have this option enabled, autosens can adjust targets (next to basal and ISF), too. This lets AAPS work more 'aggressive' or not. The actual target might be reached faster with this.

### Ajustes avanzados

**Always use short average delta instead of simple data** If you enable this feature, AAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

(Open-APS-features-overview-of-hard-coded-limits)=

## Overview of hard-coded limits

<table border="1">
  
<thead>
  <tr>
    <th width="200"></th>
    <th width="75">Menor de edad</th>
    <th width="75">Teenager</th>
    <th width="75">Adulto</th>
    <th width="75">Adulto resistente a la insulina</th>
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
    <td>5,0</td>
    <td>7,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
  <tr>
    <td>MAXIOB_SMB</td>
    <td>7,0</td>
    <td>13,0</td>
    <td>22,0</td>
    <td>30,0</td>
    <td>70,0</td>
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