# Cálculo COB

## ¿Cómo calcula AndroidAPS el valor de COB?

### Oref1

Los carbohidratos no absorbidos se cortan después del tiempo especificado

```{image} ../images/cob_oref0_orange_II.png
:alt: Oref1
```

### AAPS, promedio ponderado

absorption is calculated to have `COB == 0` after specified time

```{image} ../images/cob_aaps2_orange_II.png
:alt: AAPS, Promedio ponderado
```

Si se utiliza la absorción mínima de carbohidratos (min_5m_carbimpact) en lugar del valor calculado a partir de las desviaciones de BG, aparece un punto naranja en el gráfico COB.

(detection-of-wrong-cob-values)=
## Detección de valores COB incorrectos

AAPS warns you if you are about to bolus with COB from a previous meal and the algorithm thinks that current COB calculation could be wrong. En este caso, le dará una sugerencia adicional en la pantalla de confirmación después del uso del asistente en bolo.

### ¿Cómo detecta AndroidAPS valores de COB erróneo?

Normalmente, AAPS detecta la absorción de carbohidros a través de desviaciones de BG. In case you entered carbs but AAPS cannot see their estimated absorption through BG deviations, it will use the [min_5m_carbimpact](../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#absorption-settings) method to calculate the absorption instead (so called 'fallback'). Como este método calcula sólo la absorción mínima de carbohidratos sin considerar desviaciones de BG, podría llevar a valores de COB incorrectos.

```{image} ../images/Calculator_SlowCarbAbsorption.png
:alt: Pista de un valor COB incorrecto
```

In the screenshot above, 41% of time the carb absorption was mathematically calculated by the min_5m_carbimpact instead of the value  detected from deviations.  Esto significa que tal vez tenga menos carbohidratos a bordo que los calculados por el algoritmo.

### ¿Cómo hacer frente a esta advertencia?

- Consider to cancel the treatment - press Cancel instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving COB unticked.
- In case you are sure you need a correction bolus, enter it manually.
- In any case be careful not to overdose!

### ¿Por qué el algoritmo no detecta correctamente el COB?

- Maybe you overestimated carbs when entering them.
- Activity / exercise after your previous meal
- I:C needs adjustment
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA)

## Corrección manual de los carbohidratos ingresados

If you over- or underestimated carbs you can correct this though treatments tab and actions tab / menu as described [here](../Getting-Started/Screenshots.md#carb-correction).
