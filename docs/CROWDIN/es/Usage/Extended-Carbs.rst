Carbohidratos Extendidos/eCarbs
**************************************************
Con una terapia de bomba normal, los bolos extendidos son una buena manera de tratar comidas grasas o de absorción lenta que aumentan la glucosa en sangre por más tiempo que el efecto de la insulina. En un contexto de lazo cerrado, sin embargo, los bolos extendidos no tienen tanto sentido (y plantean dificultades técnicas), ya que son básicamente una basal temporal alta fija, que va en contra de cómo funciona el lazo, que está ajustando la tasa basal de forma dinámica. Para obtener detalles, consulte el apartado `bolo extendido <../Usage/Extended-Carbs.html#extended-bolus>`_ más abajo.

La necesidad de lidiar con tales comidas todavía existe. Por eso, AndroidAPS a partir de la versión 2.0 es compatible con los llamados carbohidratos extendidos o eCarbs.

los eCarbs son carbohidratos que se introducen durante varias horas. Esto simula cómo se absorben los carbohidratos e influye en la glucosa en sangre.  But for slower-absorbing meals where full carb entry up front results in too much IOB from SMB, eCarbs can be used to more accurately simulate how the carbs (and any carb equivalents you enter for other macronutrients) are absorbed and influence the blood glucose. Con esta información, el lazo puede administrar SMB para tratar esos carbohidratos, lo que se puede ver como un bolo extendido dinámico (esto también debería funcionar sin SMB, pero probablemente sea menos efectivo).

eCarbs aren't limited to fatty / protein heavy meals: they can be also be used to help in any situation where there are influences that increase the blood sugar, e.g. otros medicamentos como los corticosteroides.

To enter eCarbs, set a duration in the _Carbs_ dialog on the overview tab, the total carbs and optionally a time shift:

.. imagen:: ../images/eCarbs_Dialog.png
  :alt: Introducir carbohidratos

Los eCarbs en la pestaña de información general, tenga en cuenta los carbohidratos entre paréntesis en el campo COB, que muestra los carbohidratos en el futuro:

.. imagen:: ../images/eCarbs_Graph.png
  :alt: eCarbs en la gráfica

Las entradas de carbohidratos en el futuro están coloreadas en naranja oscuro en la pestaña de tratamiento:

.. imagen:: ../images/eCarbs_Treatment.png
  :alt: eCarbs en el futuro en la pestaña de tratamiento


-----

A way to handle fat and protein with that feature is described here: `https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html <https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html>`_

-----

The recommended setup is to use the OpenAPS SMB APS plugin, with SMBs enabled as well as the _Enable SMB with COB_ preference being enabled.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the _calculator_ and then use the _carbs_ button to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours. Tendrá que probar y ver qué valores concretos funcionan para usted, por supuesto. You might also carefully adjust the setting _max minutes of basal to limit SMB to_ to make the algorithm more or less aggressive.
Con comidas bajas en carbohidratos, altas en grasas y proteínas, puede ser suficiente usar solo eCarbs sin bolos manuales (consulte el post arriba mencionado).

Cuando los eCarbs son generados, se genera una nota en el Careportal para documentar los inputs, para así hacer más fácil la iteración y mejorar los inputs.

Bolo extendido
==================================================
As mentioned above extended or multiwave boluses do not really work in a closed loop environment. Por lo tanto, no hay ninguna opción para emitir un bolo extendido en AndroidAPS. Esta es la razón:

1. El lazo determina que ahora se van a entregar 1.55U/h. Si se entrega como un bolus ampliado o TBR no importa al algoritmo. De hecho, algunas de las bombas utilizan el bolo extendido. ¿Qué debería pasar entonces? A continuación, la mayoría de los controladores de la bomba detienen el bolo extendido-> Ni siquiera ha necesitado iniciarlo.
2. Si tuvieras el bolo extendido como entrada, ¿qué debería pasar en el modelo?

   1. Debe ser considerado neutral, junto con la BR y el lazo en él? Entonces, el ciclo también debería ser capaz de reducir el bolo si, por ejemplo, se baja demasiado y se quita toda la insulina "neutral"?
   2. ¿Se debe añadir simplemente el bolo extendido? ¿Entonces simplemente se debe permitir que el lazo continúe? ¿Incluso en la peor hipoglucemia? No creo que esto sea tan bueno: ¿Se ha previsto una hipoglucemia, pero no se debe evitar?
   
3. El IOB que se acumula del bolo ampliado se materializa después de 5 minutos en la siguiente ejecución. Por consiguiente, el lazo daría menos basal. Así que no hay muchos cambios... con la excepción de que se ha tomado la posibilidad de evitar la hipoglucemia.
