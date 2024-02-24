# Cálculo de carbohidratos (COB)

## ¿Cómo calcula la AAPS el valor de los carbohidratos (COB)?

Cuando se introducen carbohidratos como parte de una comida o de una corrección, AAPS los añade a los carbohidratos actuales (COB). A continuación, AAPS absorbe (elimina) carbohidratos en función de las desviaciones observadas con respecto a los valores de glucosa (BG). La tasa de absorción depende del factor de sensibilidad a los carbohidratos. No se trata de un valor configurado en el perfil, sino que se calcula como ISF/IC y es la cantidad de mg/dl que 1g de carbohidratos subirá tu glucemia.

The formula is: `absorbed_carbs = deviation * ic / isf` It means:
* increasing ic will increase carbs absorbed every 5 minutes thus shorten total time of absorption
* increasing isf will decrease carbs absorbed every 5 minutes thus prolong total time of absorption
* changing profile % increase/decrease both values thus has no impact on carbs absorption time

Por ejemplo, si tu ISF del perfil es 100 y tu ratio (IC) es 5, tu CSF sería 20. Por cada 20 mg/dl que sube tu glucosa (BG), se absorben por AAPS 1g de carbohidratos. La insulina activa positiva (IOB), también afecta a este cálculo. Por lo tanto, si la AAPS esperaba que tu glucosa baje 20 mg/dl debido a la insulina activa (IOB) y, en cambio, se mantiene estable, también absorberá 1g de carbohidratos.

Los carbohidratos también se absorven mediante los métodos descritos a continuación, en función del algoritmo de sensibilidad que se utilice.

### Sensibilidad Oref1

Los carbohidratos no absorbidos se eliminarán después del tiempo especificado

![Sensibilidad Oref1](../images/cob_oref0_orange_II.png)

### Sensibilidad promedio ponderada

La absorción se calcula para tener `COB == 0` después del tiempo especificado

![Sensibilidad promedio ponderada](../images/cob_aaps2_orange_II.png)

Si se utiliza la absorción mínima de carbohidratos (min_5m_carbimpact) en lugar del valor calculado a partir de las desviaciones de BG, aparece un punto naranja en el gráfico COB.

(COB-calculation-detection-of-wrong-cob-values)=

## Detección de valores erróneos de carbohidratos (COB)

AAPS te avisa si estás a punto de poner un bolo con carbohidratos (COB) de una comida anterior y el algoritmo cree que el cálculo actual de carbohidratos, puede ser erróneo. En este caso, te dará mostrará una sugerencia en la pantalla de confirmación, después de utilizar el asistente de bolo.

### ¿Cómo detecta AAPS los valores de carbohidratos (COB) erróneos?

Normalmente AAPS detecta la absorción de carbohidratos a través de las desviaciones de la glucemia. En el caso de que se hayan introducido carbohidratos, pero AAPS no pueda calcular su absorción estimada mediante las desviaciones de la glucosa, utilizará el método [min_5m_carbimpact](../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#absorption-settings) para calcular la absorción (el llamado 'fallback'). Como este método sólo calcula la absorción mínima de carbohidratos sin tener en cuenta las desviaciones de glucosa, podría dar lugar a valores de carbohidratos (COB) incorrectos.

![Sugerencia sobre un valor incorrecto de COB](../images/Calculator_SlowCarbAbsorption.png)

En la captura de pantalla anterior, el 41% de las veces, la absorción de carbohidratos se calculó matemáticamente mediante el uso de min_5m_carbimpact, en lugar del valor detectado a partir de las desviaciones.  Esto significa que tal vez estás consumiendo menos carbohidratos de los calculados por el algoritmo.

### ¿Cómo actuar ante esta advertencia?

- Si desea cancelar el tratamiento, pulsa Cancelar en lugar de OK.
- Calcula de nuevo tu próxima comida con el asistente de bolo, dejando la casilla COB sin marcar.
- En caso de que estés seguro de que necesitas un bolo de corrección, introdúcelo manualmente.
- En cualquier caso, ¡cuidado con las sobredosis!

### ¿Por qué el algoritmo no detecta correctamente los carbohidratos (COB)?

- Quizás sobrestimaste los carbohidratos al introducirlos.
- Realizaste una actividad o ejercicio después de la comida anterior
- Los ratios deben ser ajustados (I:C)
- El valor de min_5m_carbimpact es incorrecto (se recomienda 8 con SMB y 3 con AMA).

## Corrección manual de los carbohidratos introducidos

Si has sobreestimado o subestimado los carbohidratos, puedes corregirlo mediante el menú de tratamientos, realizando las acciones, que se describen [aquí](Screenshots-carb-correction).
