Cálculo COB
**************************************************

¿Cómo calcula AndroidAPS el valor de COB?
==================================================

Oref1
--------------------------------------------------

Los carbohidratos no absorbidos se cortan después del tiempo especificado

.. image:: ../images/cob_oref0_orange_II.png
  :alt: Oref1

AAPS, promedio ponderado
--------------------------------------------------

absorption is calculated to have ``COB == 0`` after specified time

.. image:: ../images/cob_aaps2_orange_II.png
  :alt: AAPS, Promedio ponderado

Si se utiliza la absorción mínima de carbohidratos (min_5m_carbimpact) en lugar del valor calculado a partir de las desviaciones de BG, aparece un punto naranja en el gráfico COB.

Detección de valores COB incorrectos
==================================================

AAPS warns you if you are about to bolus with COB from a previous meal and the algorithm thinks that current COB calculation could be wrong. En este caso, le dará una sugerencia adicional en la pantalla de confirmación después del uso del asistente en bolo. 

¿Cómo detecta AndroidAPS valores de COB erróneo? 
--------------------------------------------------

Normalmente, AAPS detecta la absorción de carbohidros a través de desviaciones de BG. En caso de que haya especificado carbohidratos, pero AAPS no puede ver su absorción estimada a través de las desviaciones BG, utilizará el método `min_5m_carbimpact <../Configuration/Config-Builder.html?highlight=min_5m_carbimpact#absorption-settings>`_ para calcular la absorción en su lugar (lo que se denomina 'fallback'). Como este método calcula sólo la absorción mínima de carbohidratos sin considerar desviaciones de BG, podría llevar a valores de COB incorrectos.

.. image:: ../images/Calculator_SlowCarbAbsorption.png
  :alt: Pista de un valor COB incorrecto

In the screenshot above, 41% of time the carb absorption was mathematically calculated by the min_5m_carbimpact instead of the value  detected from deviations.  Esto significa que tal vez tenga menos carbohidratos a bordo que los calculados por el algoritmo. 

¿Cómo hacer frente a esta advertencia? 
--------------------------------------------------

-Considere cancelar el tratamiento-pulse Cancelar en lugar de Aceptar.
-Calcular su próxima comida de nuevo con el asistente de bolo dejando la COB sin marcar.
- En caso de que esté seguro de que necesita un bolo de corrección, ingrese el bolo manualmente.
- ¡En cualquier caso, tenga cuidado de no generar sobredosis!

¿Por qué el algoritmo no detecta correctamente el COB? 
--------------------------------------------------

- Tal vez sobreestimaste los carbohidratos cuando los entraste.  
- Actividad / ejercicio después de la comida anterior
- I:C necesita ajuste
- El valor de min_5m_carbimpact es incorrecto (el recomendado es 8 con SMB, 3 con AMA)

Corrección manual de los carbohidratos ingresados
==================================================
If you over- or underestimated carbs you can correct this though treatments tab and actions tab / menu as described `here <../Getting-Started/Screenshots.html#carb-correction>`_.
