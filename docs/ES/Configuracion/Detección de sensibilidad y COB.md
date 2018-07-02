


* Actualmente hay 3 modelos de detección de sensbilidad:
     * Sensibilidad Oref0
     * Sensiblidad AAPS
     * Sensibilidad PesoPromedio

### Sensibilidad Oref0 
Similar al descrito en documentación [Oref0](https://openaps.readthedocs.io/en/2017-05-21/index.html). Básicamente la sensibilidad es calculada a partir de 24h pasadas y carbohidratos (si no están absorbidos) se cortan a partir del tiempo especificado en las preferencias. 

### Sensibilidad AAPS
La sensibilidad es calculada de misma manera que Ore0 pero puedes especificar el tiempo desde el cual se calcula. La absorción mínima de
carbohidratos se calcula a partir del tiempo máximo de aborsción de carbohidratos de las preferencias. 

### Sensibilidad PesoPromedio
La sensibilidad se calcula como promedio ponderado de las desviaciones. Las nuevas desviaciones tienen un mayor peso. La absorción mínima de carbohidratos se calcula a partir del tiempo máximo de la absorción de carbohidratos de las preferencias. Este algotimo es más rápido en los siguientes cambios de sensbilidad. 


### Ejemplos COB 

Oref0- los carbohidratos no absorbidos son cortados después de tiempo específico.

![COB de oref0](../images/cob_oref0.png)

AAPS, peso ponderado – absorción es calculada para tener COB =0 despues de tiempo específico. 

![COB de AAPS](../images/cob_aaps.png)

Si absorción mínima de Carbs es usada en lugar del valor calculado de las desviaciones, un punto verde aparece en la gráfica COB.

