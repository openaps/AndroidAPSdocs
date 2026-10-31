(Sensitivity-detection-and-COB-sensitivity-detection)=

# Detección de sensibilidad

## Algoritmo de sensibilidad

**AAPS** ofrece ahora 3 modelos de detección de sensibilidad:

* Sensibilidad AAPS
* Sensibilidad promedio ponderada
* Sensibilidad Oref1

### Sensibilidad AAPS

La sensibilidad se calcula igual que en Oref1, pero puedes indicar el periodo de tiempo hacia atrás que se tiene en cuenta. La absorción mínima de carbohidratos se calcula a partir del tiempo máximo de absorción de carbohidratos definido en las preferencias.

### Sensibilidad promedio ponderada

La sensibilidad se calcula como un promedio ponderado de las desviaciones. Puedes indicar el periodo de tiempo hacia atrás que se tiene en cuenta. Las desviaciones más recientes tienen más peso. La absorción mínima de carbohidratos se calcula a partir del tiempo máximo de absorción de carbohidratos definido en las preferencias. Este algoritmo es el más rápido en seguir los cambios de sensibilidad.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Sensibilidad Oref1

La sensibilidad se calcula con los datos de las últimas 8 horas, o desde el último cambio de cánula si fue hace menos de 8 horas. Los carbohidratos (si no se han absorbido) se cortan después del tiempo indicado en las preferencias. Solo el algoritmo Oref1 admite las comidas no anunciadas (UAM). Esto significa que los periodos con UAM detectadas se excluyen del cálculo de la sensibilidad. Por eso, si usas SMB con UAM, tienes que elegir el algoritmo Oref1 para que funcione bien. Para más información sobre UAM, consulta la sección [Supermicrobolo (SMB)](#Open-APS-features-super-micro-bolus-smb).

Oref1 es la opción recomendada: es la única que puede detectar UAM y funcionar con [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), el algoritmo más reciente.

## Carbohidratos simultáneos

Hay una diferencia importante entre los algoritmos Sensibilidad AAPS y WeightedAverage por un lado, y Oref1 por otro, cuando se solapan varias comidas.

* Oref1 espera que solo se descuente una comida a la vez: la segunda comida empieza a descontarse cuando la primera se ha descontado por completo.
* Sensibilidad AAPS y WeightedAverage empiezan a descontar los carbohidratos en cuanto los introduces. Si hay más de una comida activa, el descuento mínimo de carbohidratos se ajusta según el tamaño de la comida y el tiempo máximo de absorción. Por eso, la absorción mínima será más alta que con Oref1.