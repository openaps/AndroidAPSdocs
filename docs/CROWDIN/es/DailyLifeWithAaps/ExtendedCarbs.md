(Extended-Carbs-extended-carbs-ecarbs)=
# Carbohidratos Extendidos/eCarbs

## What are eCarbs and when are they useful?

Con una terapia de bomba normal, los bolos extendidos son una buena manera de tratar comidas grasas o de absorción lenta que aumentan la glucosa en sangre por más tiempo que el efecto de la insulina. En un contexto de lazo cerrado, sin embargo, los bolos extendidos no tienen tanto sentido (y plantean dificultades técnicas), ya que son básicamente una basal temporal alta fija, que va en contra de cómo funciona el lazo, que está ajustando la tasa basal de forma dinámica. For details see [extended bolus](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) below.

La necesidad de lidiar con tales comidas todavía existe. Which is why AAPS as of version 2.0 supports so called extended carbs or eCarbs.

los eCarbs son carbohidratos que se introducen durante varias horas. Esto simula cómo se absorben los carbohidratos e influye en la glucosa en sangre.  Pero para las comidas de absorción más lenta en las que la entrada completa de carbohidratos por adelantado genera demasiada IOB de SMB, los eCarbs se pueden usar para simular con mayor precisión cómo los carbohidratos (y cualquier equivalente de carbohidratos que ingrese para otros macronutrientes) se absorben e influyen en la glucosa en sangre. Con esta información, el lazo puede administrar SMB para tratar esos carbohidratos, lo que se puede ver como un bolo extendido dinámico (esto también debería funcionar sin SMB, pero probablemente sea menos efectivo).

**Note:** eCarbs aren't limited to fatty / protein heavy meals: they can be also be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like corticosteroids.

## Mechanics of using eCarbs

To enter eCarbs, set a duration in the *Carbs* dialog on the overview tab, the total carbs and optionally a time shift (*numbers below are just examples, you will need to try your own values to arrive at satisfactory glucose response for your use-cases*):

![Enter carbs](../images/eCarbs_Dialog.png)

Los eCarbs en la pestaña de información general, tenga en cuenta los carbohidratos entre paréntesis en el campo COB, que muestra los carbohidratos en el futuro:

![eCarbs in graph](../images/eCarbs_Graph.png)

______________________________________________________________________

A way to handle fat and protein with that feature is described here: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Recommended setup, example scenario, and important notes

The recommended setup is to use the OpenAPS SMB APS plugin, with SMBs enabled as well as the *Enable SMB with COB* preference being enabled.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the *calculator* and then use the *carbs* button to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours.

**Important notes:** You'll need to try out and see which concrete values work for you of course. You might also carefully adjust the setting *max minutes of basal to limit SMB to* to make the algorithm more or less aggressive. Con comidas bajas en carbohidratos, altas en grasas y proteínas, puede ser suficiente usar solo eCarbs sin bolos manuales (consulte el post arriba mencionado). Cuando los eCarbs son generados, se genera una nota en el Careportal para documentar los inputs, para así hacer más fácil la iteración y mejorar los inputs.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Extended bolus and why they won't work in closed-loop environment?

Como se ha mencionado anteriormente, los bolos extendidos o de onda múltiple no funcionan realmente en un entorno de lazo cerrado. [See below](#why-extended-boluses-wont-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Extended bolus and switch to open loop - Dana and Insight pump only

Some people were asking for an option to use extended bolus in AAPS anyway as they wanted to treat special foods the way they are used to.

That's why as of version 2.6 there is an option for an extended bolus for users of Dana and Insight pumps.

- El lazo cerrado se detendrá automáticamente y cambiará a modo de lazo abierto, durante el tiempo que dure el bolo extendido.
- Bolus units, remaining and total time will be shown on homescreen.
- On Insight pump extended bolus is *not available* if [TBR emulation](#Accu-Chek-Insight-Pump-settings-in-aaps) is used.

![Extended bolus in AAPS 2.6](../images/ExtendedBolus2_6.png)

(why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Why extended boluses won't work in a closed loop environment

1. El lazo determina que ahora se van a entregar 1.55U/h. Si se entrega como un bolus ampliado o TBR no importa al algoritmo. De hecho, algunas de las bombas utilizan el bolo extendido. ¿Qué debería pasar entonces? Most pump drivers then stop the extended bolus -> You didn't even need to start it.

2. Si tuvieras el bolo extendido como entrada, ¿qué debería pasar en el modelo?

   1. Debe ser considerado neutral, junto con la BR y el lazo en él? Entonces, el ciclo también debería ser capaz de reducir el bolo si, por ejemplo, se baja demasiado y se quita toda la insulina "neutral"?
   2. ¿Se debe añadir simplemente el bolo extendido? ¿Entonces simplemente se debe permitir que el lazo continúe? ¿Incluso en la peor hipoglucemia? No creo que esto sea tan bueno: ¿Se ha previsto una hipoglucemia, pero no se debe evitar?

3. El IOB que se acumula del bolo ampliado se materializa después de 5 minutos en la siguiente ejecución. Por consiguiente, el lazo daría menos basal. So not much changes... except that the possibility of hypo avoidance is taken.
