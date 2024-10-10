(Open-APS-features-DynamicISF)=
## DynamicISF (DynISF)
ISF Dinámico se añadió en la versión 3.2 de AAPS y necesita que inicies el Objetivo 11 para utilizarlo. Seleccionar ISF Dinámico en la tabla de configuraciones > APS para activarlo. Se recomienda únicamente para usuarios avanzados que tengan un buen dominio de los controles y la monitorización de AAPS.

Ten en cuenta que para utilizar ISF Dinámico de manera efectiva, la base de datos de AndroidAPS necesita un mínimo de cinco días de datos.

DynamicISF adapts the insulin sensitivity factor dynamically based on total daily dose of insulin (TDD) and current and predicted blood glucose values.

ISF Dinámico utiliza el modelo de Chris Wilson para determinar el factor de sensibilidad a la insulina (ISF) en lugar de un perfil de configuración estático.

La ecuación implementada es: ISF = 1800 / (TDD * Ln ((glucosa / divisor de insulina) + 1))

La implementación utiliza la ecuación para calcular el ISF actual y en las predicciones de oref1 para IOB, ZT y UAM. No se utiliza para el COB.

### TTD
Esto utiliza una combinación del promedio de TDD de 7 días, el TDD del día anterior y un promedio ponderado de las últimas ocho horas de uso de insulina proyectado durante 24 horas. La dosis diaria total utilizada en la ecuación anterior se pondera un tercio para cada uno de los valores mencionados anteriormente.

### Divisor de insulina
El divisor de insulina depende del pico de la insulina utilizada y es inversamente proporcional al tiempo del pico máximo. Para Lyumjev, este valor es 75, para Fiasp, 65 y para la insulina rápida regular, 55.

### Factor de Ajuste de ISF Dinámico
El factor de ajuste permite al usuario especificar un valor entre el 1% y 300%. This acts as a multiplier on the TDD value and results in the ISF values becoming smaller (ie more insulin required to move glucose levels a small amount) as the value is increased above 100% and larger (i.e. less insulin required to move glucose levels a small amount) as the value is decreased below 100%.

### ISF Futuro

El ISF futuro se utiliza en las decisiones de dosificación que toma oref1. El ISF futuro utiliza el mismo valor de TDD generado anteriormente, teniendo en cuenta el factor de ajuste. Después, utiliza diferentes valores de glucosa dependiendo del caso:

* If levels are flat, within +/- 3 mg/dl, and predicted BG is above target, a combination of 50% minimum predicted BG and 50% current BG is used.

* Si la glucosa eventual está por encima del objetivo y los niveles de glucosa están aumentando, o la glucosa eventual está por encima de la glucosa actual, se utiliza la glucosa actual.

De lo contrario, se utiliza la glucosa prevista mínima.

### Enable TDD based sensitivity ratio for basal and glucose target modification

This setting replaces Autosens, and uses the last 24h TDD/7D TDD as the basis for increasing and decreasing basal rate, in the same way that standard Autosens does. This calculated value is also used to adjust target, if the options to adjust target with sensitivity are enabled. Unlike Autosens, this option does not adjust ISF values. 
