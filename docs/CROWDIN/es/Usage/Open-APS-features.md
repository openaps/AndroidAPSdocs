# Características de OpenAPS

## Super Micro Bolo (SMB)

SMB, la forma abreviada de 'super micro bolo ', es la última característica de OpenAPS (desde 2018) dentro del algoritmo Oref1. En contraste con AMA, SMB no utiliza las tasas basales temporales para controlar los niveles de glucosa, pero principalmente usa **super pequeños microbolos**. En situaciones en las que la AMA añadiría 1,0 UI de insulina utilizando una tasa basal temporal, SMB entrega varios microbolos en pequeños pasos a intervalos de **5 minutos**, por ejemplo, 0,4 UI, 0,3 UI, 0,2 UI y 0,1 UI. Al mismo tiempo (por razones de seguridad), la tasa basal real se fija en 0 UI/ h durante un período determinado para evitar la sobredosis (**'cero-temporal'**). Esto permite que el sistema ajuste la glucosa en sangre más rápido que con el incremento temporal de la tasa basal en AMA.

Gracias a SMB, puede ser, básicamente, suficiente para las comidas bajas en carbohidratos el informar al sistema de la cantidad planeada de hidratos de carbono y dejar el resto a AAPS. Sin embargo, esto puede llevar a picos postprandiales más altos porque no es posible pre-enviar bolos. O usted le da, si es necesario con un pre-bolo, un **bolo inicial**, el cual **solo cubre parcialmente** los hidratos de carbono (e. 2/3 de la cantidad estimada) y dejar que la SMB cubra el resto.

La característica SMB contiene algunos mecanismos de seguridad:

1. La única dosis de SMB más grande sólo puede ser un valor más pequeño que:
    
    * value corresponding to the current basal rate (as adjusted by autotune/autosens) for the duration set in "Max minutes of basal to limit SMB to", e.g. basal quantity for the next 30 minutes, or
    * la mitad de la cantidad de insulina que se requiere actualmente, o
    * la parte restante de su valor de maxIOB en la configuración.

2. Probably you will often notice low temporary basal rates (called 'low temps') or temporary basal rates at 0 U/h (called 'zero-temps'). Esto es por diseño por razones de seguridad y no tiene efectos negativos si el perfil se ha establecido correctamente. La curva de IOB es más significativa que el curso de las tasas basales temporales.

3. Cálculos adicionales para predecir el curso de la glucosa, por ejemplo, por UAM (comidas no anunciadas). Even without manual carbohydrate input from the user, UAM can automatically detect a significant increase in glucose levels due to meals, adrenaline or other influences and try to adjust this with SMB. To be on the safe side this also works the other way round and can stop the SMB earlier if an unexpectedly rapid drop in glucose occurs. Es por eso que UAM siempre debe estar activo en SMB.

**Debes haber completado [objetivo 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) para usar SMB.**

Vea también: [documentación OpenAPS para oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) y [información de Tims sobre SMB](http://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

### Max U/h una basal temporal puede establecerse en (OpenAPS “max-basal”)

Este valor de seguridad determina la velocidad basal temporal máxima que puede entregar la bomba de insulina. El valor debe ser el mismo en la bomba y en la AAPS y debe ser al menos 3 veces el valor de la tasa basal más alta.

Ejemplo:

La tasa basal más alta de su perfil basal durante el día es de 1: 00 U/h. Entonces se recomienda un valor basal máximo de al menos 3 U/h.

Pero no se puede elegir ningún valor. AAPS limita el valor como un límite según la edad de los pacientes que usted ha seleccionado bajo la configuración. El valor más bajo permitido es para los niños y el más alto para adultos resistentes a la insulina.

AndroidAPS limita el valor de la forma siguiente:

* Niños: 2
* Teenage: 5
* Adult: 10
* Adultos resistente a la insulina: 12

### El número máximo de IOB que OpenAPS no puede sobrepasar (OpenAPS "max-iob")

Este valor determina qué maxIOB tiene que ser considerado por AAPS en ejecución en modalidad de lazo cerrado. If the current IOB (e.g. after a meal bolus) is above the defined value, the loop stops dosing insulin until the IOB limit is below the given value.

Al utilizar OpenAPS SMB, max-IOB se calcula de forma diferente que en OpenAPS AMA. In AMA, maxIOB was just a safety-parameter for basal IOB, while in SMB-mode, it also includes bolus IOB. Un buen comienzo es

    maxIOB = promedio bolos de comidas + 3x basal máx
    

Sea cuidadoso y paciente, y sólo cambie los valores paso a paso. Es diferente para distintas personas y también depende de la dosis diaria total diaria (TDD). Por razones de seguridad, hay un límite, que depende de la edad del paciente. El 'límite ' para maxIOB es superior al de AMA.

* Niños: 3
* Adolescentes: 7
* Adultos: 12
* Adultos resistente a la insulina: 25

Véase también [OpenAPS documentación para SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).

### Habilitar el autosensado de AMA

Aquí, puede elegir si desea utilizar la detección de sensibilidad [](../Configuration/Sensitivity-detection-and-COB.md) 'autosensado' o no.

### Activar SMB

Aquí puede habilitar o inhabilitar completamente la característica SMB.

### Habilitar SMB con COB

SMB está trabajando cuando hay COB activo.

### Habilitar SMB con Objetivos Temporales

SMB is working when there is a low or high temporary target active (eating soon, activity, hypo, custom)

### Enable SMB with high temp targets

SMB is working when there is a high temporary target active (activity, hypo). This option can limit other SMB Settings, i.e. if ‘SMB with temp targets’ is enabled and ‘SMB with high temp targets’ is deactivated, SMB just works with low and not with high temp targets. It is the same for enabled SMB with COB: if 'SMB with high temp target' is deactivated, there is no SMB with high temp target even if COB is active.

### Enable SMB always

SMB is working always (independent of COB, temp targets or boluses). For safety reasons, this option is just possibly for BG sources with a nice filtering system for noisy data. For now, it just works with a Dexcom G5, if using the Dexcom App (patched) or “native mode” in xDrip+. If a BG value has a too large deviation, the G5 doesn’t send it and waits for the next value in 5 minutes.

For other CGM/FGM like Freestyle Libre, ‘SMB always’ is deactivated until xDrip+ has a better noise smoothing plugin. You can find more [here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Enable SMB after carbs

SMB is working for 6h after carbohydrates , even if COB is at 0. For safety reasons, this option is just possibly for BG sources with a nice filtering system for noisy data. For now, it just works with a Dexcom G5, if using the Dexcom App (patched) or “native mode” in xDrip+. If a BG value has a too large deviation, the G5 doesn’t send it and waits for the next value in 5 minutes.

For other CGM/FGM like Freestyle Libre, 'SMB always' is deactivated until xDrip+ has a better noise smoothing plugin. Usted puede encontrar [más información aquí](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Minutos máximos de basal para limitar SMB

Esta es una configuración importante. Este valor determina la cantidad de SMB que se puede dar en función de la cantidad de insulina basal en un momento determinado, cuando no está cubierto por los COB.

Esto hace que el SMB sea más agresivo. Para el principio, debe empezar por el valor predeterminado de 30 minutos. After some experience, you can increase the value with 15 minutes steps and watch how these changes are affecting.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to adjust a decreasing BG with 0 IE/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which warns you before running into hypos.

Default value: 30 min.

### Enable UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful, if you forget to tell AndroidAPS about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increasments caused by carbs, adrenaline, etc, and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decreasement, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

### High temp-target raises sensitivity

If you have this option enabled, the insulin sensitivity will be increased while having a temporary target over 100 mg/dl or 5.6 mmol/l. This means, the ISF will rise while IC and basal will decrease.

### Low temp-target lowers sensitivity

If you have this option enabled, the insulin sensitivity will be decreased while having a temporary target lower than 100 mg/dl or 5.6 mmol/l. This means, the ISF will decrease while IC and basal will rise.

### Advanced Settings

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

* * *

## Advanced Meal Assist (AMA)

AMA, the shortform of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

**You will need to have completed [objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) to use this feature**

You can find more information in the [OpenAPS documentation](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max U/hr a Temp Basal can be set to (OpenAPS "max-basal")

This safety setting helps AndroidAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. Se aconseja establecer esto en algo sensato. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AndroidAPS are:

* Niños: 2
* Teenage: 5
* Adult: 10
* Insulin resistant adult: 12

### Maximum basal IOB OpenAPS can deliver \[U\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where AndroidAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. Es diferente para distintas personas y también depende de la dosis diaria total diaria (TDD). Por razones de seguridad, hay un límite, que depende de la edad del paciente. The 'hard limit' for maxIOB is lower in AMA than in SMB.

* Niños: 3
* Teenage: 5
* Adult: 7
* Insulin resistant adult: 12

### Habilitar el autosensado de AMA

Here, you can chose, if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) autosense or not.

### Autosense adjust temp targets too

If you have this option enabled, autosense can adjust targets (next to basal, ISF and IC), too. This lets AndroidAPS work more 'aggressive' or not. The actual target might be reached faster with this.

### Advanced Settings

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump, or, if enabled, determined by autotune. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump, or, if enabled, determined by autotune.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

* * *

## Meal Assist (MA)

### Max U/hr a Temp Basal can be set to (OpenAPS "max-basal")

This safety setting helps AndroidAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. Se aconseja establecer esto en algo sensato. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in MA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AndroidAPS are:

* Niños: 2
* Teenage: 5
* Adult: 10
* Insulin resistant adult: 12

### Maximum basal IOB OpenAPS can deliver \[U\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where AndroidAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. Es diferente para distintas personas y también depende de la dosis diaria total diaria (TDD). Por razones de seguridad, hay un límite, que depende de la edad del paciente. The 'hard limit' for maxIOB is lower in MA than in SMB.

* Niños: 3
* Teenage: 5
* Adult: 7
* Insulin resistant adult: 12

### Advanced Settings

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2.That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2