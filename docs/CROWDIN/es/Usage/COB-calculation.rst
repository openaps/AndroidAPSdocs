Cálculo COB
**************************************************

¿Cómo calcula AndroidAPS el valor de COB?
==================================================

Oref0 / Oref1
--------------------------------------------------

Los carbohidratos no absorbidos se cortan después del tiempo especificado

.. imagen:: ../images/cob_oref0_orange.png
  :alt: Oref0 / Oref1

AAPS, promedio ponderado
--------------------------------------------------

la absorción se calcula para tener `COB == 0` después del tiempo especificado

.. imagen:: ../images/cob_aaps2_orange.png
  :alt: AAPS, Promedio ponderado

Si se utiliza la absorción mínima de carbohidratos (min_5m_carbimpact) en lugar del valor calculado a partir de las desviaciones de BG, aparece un punto naranja en el gráfico COB.

Detección de valores COB incorrectos
==================================================

As of version 2.4, AAPS warns you if you are about to bolus with COB from a previous meal and the algorithm thinks that current COB calculation could be wrong. In this case it will give you an additional hint on the confirmation screen after usage of bolus wizard. 

How does AndroidAPS detect wrong COB values? 
--------------------------------------------------

Normally AAPS detects carb absorption through BG deviations. In case you entered carbs but AAPS cannot see their estimated absorption through BG deviations, it will use the `min_5m_carbimpact <../Configuration/Config-Builder.html?highlight=min_5m_carbimpact#absorption-settings>`_ method to calculate the absorption instead (so called 'fallback'). As this method calculates only the minimal carb absorption without considering BG deviations, it might lead to incorrect COB values.

.. image:: ../images/Calculator_SlowCarbAbsorbtion.png
  :alt: Hint on wrong COB value

In the screenshot above, 41% of1 time the carb absorption was mathematically calculated by the min_5m_carbimpact instead of the value  detected from deviations.  Esto significa que tal vez tenga menos carbohidratos a bordo que los calculados por el algoritmo. 

¿Cómo hacer frente a esta advertencia? 
--------------------------------------------------

-Considere cancelar el tratamiento-pulse Cancelar en lugar de Aceptar.
-Calcular su próxima comida de nuevo con el asistente de bolo dejando la COB sin marcar.
- En caso de que esté seguro de que necesita un bolo de corrección, ingrese el bolo manualmente.
- ¡En cualquier caso, tenga cuidado de no generar sobredosis!

¿Por qué el algoritmo no detecta correctamente el COB? 
--------------------------------------------------

- Tal vez sobreestimaste los carbohidratos cuando los entraste.  
- Activity / exercise after your previous meal
- I:C necesita ajuste
- El valor de min_5m_carbimpact es incorrecto (el recomendado es 8 con SMB, 3 con AMA)
