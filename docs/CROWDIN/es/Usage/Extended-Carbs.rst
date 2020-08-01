Carbohidratos Extendidos/eCarbs
**************************************************
Con una terapia de bomba normal, los bolos extendidos son una buena manera de tratar comidas grasas o de absorción lenta que aumentan la glucosa en sangre por más tiempo que el efecto de la insulina. En un contexto de lazo cerrado, sin embargo, los bolos extendidos no tienen tanto sentido (y plantean dificultades técnicas), ya que son básicamente una basal temporal alta fija, que va en contra de cómo funciona el lazo, que está ajustando la tasa basal de forma dinámica. Para obtener detalles, consulte el apartado `bolo extendido <../Usage/Extended-Carbs.html#extended-bolus>`_ más abajo.

La necesidad de lidiar con tales comidas todavía existe. Por eso, AndroidAPS a partir de la versión 2.0 es compatible con los llamados carbohidratos extendidos o eCarbs.

los eCarbs son carbohidratos que se introducen durante varias horas. Esto simula cómo se absorben los carbohidratos e influye en la glucosa en sangre.  Pero para las comidas de absorción más lenta en las que la entrada completa de carbohidratos por adelantado genera demasiada IOB de SMB, los eCarbs se pueden usar para simular con mayor precisión cómo los carbohidratos (y cualquier equivalente de carbohidratos que ingrese para otros macronutrientes) se absorben e influyen en la glucosa en sangre. Con esta información, el lazo puede administrar SMB para tratar esos carbohidratos, lo que se puede ver como un bolo extendido dinámico (esto también debería funcionar sin SMB, pero probablemente sea menos efectivo).

los eCarbs no están limitados a las comidas pesadas grasosas / proteicas: también pueden ser utilizados para ayudar en cualquier situación en la que haya influencias que aumenten el nivel de azúcar en la sangre, por ejemplo,. otros medicamentos como los corticosteroides.

Para especificar eCarbs, establezca una duración en el cuadro de diálogo _Carbs_ en la pestaña de visión general, los carbohidratos totales y, opcionalmente, un tiempo de duración:

.. imagen:: ../images/eCarbs_Dialog.png
  :alt: Introducir carbohidratos

Los eCarbs en la pestaña de información general, tenga en cuenta los carbohidratos entre paréntesis en el campo COB, que muestra los carbohidratos en el futuro:

.. imagen:: ../images/eCarbs_Graph.png
  :alt: eCarbs en la gráfica

Las entradas de carbohidratos en el futuro están coloreadas en naranja oscuro en la pestaña de tratamiento:

.. imagen:: ../images/eCarbs_Treatment.png
  :alt: eCarbs en el futuro en la pestaña de tratamiento


-----

Una forma de controlar la grasa y de la proteína con la que cuentan se describe a continuación: `https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html <https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html>`_

-----

La configuración recomendada es utilizar el complemento OpenAPS SMB APS, con las SMB habilitadas y la habilitación de SMB con COB habilitada.

Un escenario, por ejemplo. para una pizza puede ser administrar un bolo (parcial) por adelantado a través del _calculador_ y luego usar el botón _carbs_ para ingresar los carbohidratos restantes durante un período de 4 a 6 horas, comenzando después de 1 o 2 horas. Tendrá que probar y ver qué valores concretos funcionan para usted, por supuesto. También es posible ajustar cuidadosamente el valor _máx minutos de basal para limitar SMB a _ para hacer que el algoritmo sea más o menos agresivo.
Con comidas bajas en carbohidratos, altas en grasas y proteínas, puede ser suficiente usar solo eCarbs sin bolos manuales (consulte el post arriba mencionado).

Cuando los eCarbs son generados, se genera una nota en el Careportal para documentar los inputs, para así hacer más fácil la iteración y mejorar los inputs.

Bolo extendido
==================================================
Como se ha mencionado anteriormente, los bolos extendidos o de onda múltiple no funcionan realmente en un entorno de lazo cerrado. `See below <../Usage/Extended-Carbs.html#why-extended-boluses-wont-work-in-a-closed-loop-environment>`_ for details

Extended bolus and switch to open loop - Dana and Insight pump only
-----------------------------------------------------------------------------
Some people were asking for an option to use extended bolus in AAPS anyway as they wanted to treat special foods the way they are used to. 

That's why as of version 2.6 there is an option for an extended bolus for users of Dana and Insight pumps. 

* Closed loop will automatically be stopped and switched to open loop mode for the time running extended bolus. 
* Bolus units, remaining and total time will be shown on homescreen.
* On Insight pump extended bolus is *not available* if `TBR emulation <../Configuration/Accu-Chek-Insight-Pump.html#settings-in-aaps>`_ is used. 

.. image:: ../images/ExtendedBolus2_6.png
  :alt: Extended bolus in AAPS 2.6

Why extended boluses won't work in a closed loop environment
----------------------------------------------------------------------------------------------------
1. El lazo determina que ahora se van a entregar 1.55U/h. Si se entrega como un bolus ampliado o TBR no importa al algoritmo. De hecho, algunas de las bombas utilizan el bolo extendido. ¿Qué debería pasar entonces? A continuación, la mayoría de los controladores de la bomba detienen el bolo extendido-> Ni siquiera ha necesitado iniciarlo.
2. Si tuvieras el bolo extendido como entrada, ¿qué debería pasar en el modelo?

   1. Debe ser considerado neutral, junto con la BR y el lazo en él? Entonces, el ciclo también debería ser capaz de reducir el bolo si, por ejemplo, se baja demasiado y se quita toda la insulina "neutral"?
   2. ¿Se debe añadir simplemente el bolo extendido? ¿Entonces simplemente se debe permitir que el lazo continúe? ¿Incluso en la peor hipoglucemia? No creo que esto sea tan bueno: ¿Se ha previsto una hipoglucemia, pero no se debe evitar?
   
3. El IOB que se acumula del bolo ampliado se materializa después de 5 minutos en la siguiente ejecución. Por consiguiente, el lazo daría menos basal. Así que no hay muchos cambios... con la excepción de que se ha tomado la posibilidad de evitar la hipoglucemia.
