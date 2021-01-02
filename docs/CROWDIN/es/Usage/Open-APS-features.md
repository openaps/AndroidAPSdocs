# Características de OpenAPS

## Autosens

* Autosens is a algorithm which looks at blood glucose deviations (positive/negative/neutral).
* It will try and figure out how sensitive/resistant you are based on these deviations.
* The oref implementation in **OpenAPS** runs off a combination of 24 and 8 hours worth of data. It uses either one which is more sensitive.
* In versions prior to AAPS 2.7 user had to choose between 8 or 24 hours manually.
* From AAPS 2.7 on Autosens in AAPS will switch between a 24 and 8 hours window for calculating sensitivity. It will pick which ever one is more sensitive. 
* If users have come from oref1 they will probably notice the system may be less dynamic to changes, due to the varying of either 24 or 8 hours of sensitivity.
* Changing a cannula or changing a profile will reset Autosens ratio back to 0%.
* Autosens adjusts your basal, I:C and ISF for you (i.e.: mimicking what a Profile shift does).
* If continuously eating carbs over an extended period, autosens will be less effective during that period as carbs are excluded from BG delta calculations.

## Super Micro Bolo (SMB)

SMB, la forma abreviada de 'super micro bolo ', es la última característica de OpenAPS (desde 2018) dentro del algoritmo Oref1. En contraste con AMA, SMB no utiliza las tasas basales temporales para controlar los niveles de glucosa, pero principalmente usa **super pequeños microbolos**. En situaciones en las que la AMA añadiría 1,0 UI de insulina utilizando una tasa basal temporal, SMB entrega varios microbolos en pequeños pasos a intervalos de **5 minutos**, por ejemplo, 0,4 UI, 0,3 UI, 0,2 UI y 0,1 UI. Al mismo tiempo (por razones de seguridad), la tasa basal real se fija en 0 UI/ h durante un período determinado para evitar la sobredosis (**'cero-temporal'**). Esto permite que el sistema ajuste la glucosa en sangre más rápido que con el incremento temporal de la tasa basal en AMA.

Gracias a SMB, puede ser, básicamente, suficiente para las comidas bajas en carbohidratos el informar al sistema de la cantidad planeada de hidratos de carbono y dejar el resto a AAPS. Sin embargo, esto puede llevar a picos postprandiales más altos porque no es posible pre-enviar bolos. O usted le da, si es necesario con un pre-bolo, un **bolo inicial**, el cual **solo cubre parcialmente** los hidratos de carbono (e. 2/3 de la cantidad estimada) y dejar que la SMB cubra el resto.

La característica SMB contiene algunos mecanismos de seguridad:

1. La única dosis de SMB más grande sólo puede ser un valor más pequeño que:
    
    * value corresponding to the current basal rate (as adjusted by autosens) for the duration set in "Max minutes of basal to limit SMB to", e.g. basal quantity for the next 30 minutes, or
    * la mitad de la cantidad de insulina que se requiere actualmente, o
    * la parte restante de su valor de maxIOB en la configuración.

2. Probablemente notará a menudo bajas tasas basales temporales (llamadas 'bajas temporales') o tasas basales temporales en 0 U/h (llamadas 'cero-temporales'). Esto es por diseño por razones de seguridad y no tiene efectos negativos si el perfil se ha establecido correctamente. La curva de IOB es más significativa que el curso de las tasas basales temporales.

3. Cálculos adicionales para predecir el curso de la glucosa, por ejemplo, por UAM (comidas no anunciadas). Incluso sin la entrada manual de carbohidratos del usuario, UAM puede detectar automáticamente un incremento significativo en los niveles de glucosa debido a las comidas, adrenalina u otras influencias y tratar de ajustar esto con SMB. Para estar en el lado seguro, esto también funciona al revés y puede detener el SMB antes si se produce una caída inesperadamente rápida en la glucosa. Es por eso que UAM siempre debe estar activo en SMB.

**You must have started [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) to use SMB.**

Vea también: [documentación OpenAPS para oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) y [información de Tims sobre SMB](http://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

### Max U/h una basal temporal puede establecerse en (OpenAPS “max-basal”)

Este valor de seguridad determina la velocidad basal temporal máxima que puede entregar la bomba de insulina. El valor debe ser el mismo en la bomba y en la AAPS y debe ser al menos 3 veces el valor de la tasa basal más alta.

Ejemplo:

La tasa basal más alta de su perfil basal durante el día es de 1: 00 U/h. Entonces se recomienda un valor basal máximo de al menos 3 U/h.

Pero no se puede elegir ningún valor. AAPS limita el valor como un límite según la edad de los pacientes que usted ha seleccionado bajo la configuración. El valor más bajo permitido es para los niños y el más alto para adultos resistentes a la insulina.

AndroidAPS limita el valor de la forma siguiente:

* Niños: 2
* Teenager: 5
* Adultos: 10
* Adultos resistente a la insulina: 12
* Pregnant: 25

*See also [overview of hard-coded limits](../Usage/Open-APS-features.html#overview-of-hard-coded-limits).*

### El número máximo de IOB que OpenAPS no puede sobrepasar (OpenAPS "max-iob")

Este valor determina qué maxIOB tiene que ser considerado por AAPS funcionando en bucle cerrado. Si el IOB actual (por ejemplo, después de un bolo de comida) está por encima del valor definido, el bucle para la dosificación de insulina hasta que el límite de IOB esté por debajo del valor determinado.

Using the OpenAPS SMB, max-IOB is calculated differently than in OpenAPS AMA. In AMA, maxIOB was just a safety-parameter for basal IOB, while in SMB-mode, it also includes bolus IOB. A good start is

    maxIOB = promedio bolos de comidas + 3x basal máx
    

Be careful and patient and only change the settings step by step. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is higher than in [AMA](../Usage/Open-APS-features.html#max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal).

* Niños: 3
* Teenager: 7
* Adultos: 12
* Adultos resistente a la insulina: 25
* Pregnant: 40

*See also [overview of hard-coded limits](../Usage/Open-APS-features.html#overview-of-hard-coded-limits).*

See also [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Habilitar el autosensado de AMA

Here, you can choose if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) 'autosense' or not.

### Activar SMB

Here you can enable or completely disable SMB feature.

### Habilitar SMB con COB

SMB is working when there is COB active.

### Habilitar SMB con Objetivos Temporales

SMB is working when there is a low or high temporary target active (eating soon, activity, hypo, custom)

### Habilitar SMB con Objetivo Temporal Alto

SMB is working when there is a high temporary target active (activity, hypo). This option can limit other SMB Settings, i.e. if ‘SMB with temp targets’ is enabled and ‘SMB with high temp targets’ is deactivated, SMB just works with low and not with high temp targets. It is the same for enabled SMB with COB: if 'SMB with high temp target' is deactivated, there is no SMB with high temp target even if COB is active.

### Habilitar SMB siempre

SMB is working always (independent of COB, temp targets or boluses). Por razones de seguridad, esta opción es solamente para fuentes de BG con un buen sistema de filtrado para los datos ruidosos. Por ahora, sólo funciona con Dexcom G5, si utiliza la aplicación Dexcom (parcheado) o "modalidad nativa" en xDrip+. Si un valor BG tiene una desviación demasiado grande, el G5 no lo envía y espera a que el siguiente valor se haga en 5 minutos.

For other CGM/FGM like Freestyle Libre, ‘SMB always’ is deactivated until xDrip+ has a better noise smoothing plugin. You can find more [here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Habilitar SMB después de Carbohidratos

SMB is working for 6h after carbohydrates , even if COB is at 0. Por razones de seguridad, esta opción es solamente para fuentes de BG con un buen sistema de filtrado para los datos ruidosos. Por ahora, sólo funciona con Dexcom G5, si utiliza la aplicación Dexcom (parcheado) o "modalidad nativa" en xDrip+. Si un valor BG tiene una desviación demasiado grande, el G5 no lo envía y espera a que el siguiente valor se haga en 5 minutos.

For other CGM/FGM like Freestyle Libre, 'SMB always' is deactivated until xDrip+ has a better noise smoothing plugin. You can find [more information here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Minutos máximos de basal para limitar SMB

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

This makes the SMB more aggressive. For the beginning, you should start with the default value of 30 minutes. After some experience, you can increase the value with 15 minutes steps and watch how these changes are affecting.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to adjust a decreasing BG with 0 IE/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which warns you before running into hypos.

Default value: 30 min.

### Activar UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful, if you forget to tell AndroidAPS about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increasments caused by carbs, adrenaline, etc, and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decreasement, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

### Objetivo temporal elevado aumenta la sensibilidad

If you have this option enabled, the insulin sensitivity will be increased while having a temporary target over 100 mg/dl or 5.6 mmol/l. This means, the ISF will rise while IC and basal will decrease.

### Objetivo temporal bajo reduce la sensibilidad

If you have this option enabled, the insulin sensitivity will be decreased while having a temporary target lower than 100 mg/dl or 5.6 mmol/l. This means, the ISF will decrease while IC and basal will rise.

### Ajustes avanzados

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

* * *

## Asistente de comida avanzada (AMA)

AMA, the shortform of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max U/h una basal temporal puede establecerse en (OpenAPS “max-basal")

This safety setting helps AndroidAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. It is advised to set this to something sensible. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AndroidAPS are:

* Niños: 2
* Teenager: 5
* Adultos: 10
* Adultos resistente a la insulina: 12
* Pregnant: 25

*See also [overview of hard-coded limits](../Usage/Open-APS-features.html#overview-of-hard-coded-limits).*

### El máximo basal IOB que OpenAPS puede entregar \[U\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where AndroidAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

* Niños: 3
* Teenager: 5
* Adultos: 7
* Adultos resistente a la insulina: 12
* Pregnant: 25

*See also [overview of hard-coded limits](../Usage/Open-APS-features.html#overview-of-hard-coded-limits).*

### Habilitar el autosensado de AMA

Here, you can chose, if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) autosense or not.

### El autosensado ajusta los objetivos temporales también

If you have this option enabled, autosense can adjust targets (next to basal, ISF and IC), too. This lets AndroidAPS work more 'aggressive' or not. The actual target might be reached faster with this.

### Ajustes avanzados

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

## Overview of hard-coded limits

<table>
  
<thead>
  <tr>
    <th></th>
    <th>Child</th>
    <th>Teenager</th>
    <th>Adult</th>
    <th>Insulin resistant adult</th>
    <th>Pregnant</th>
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