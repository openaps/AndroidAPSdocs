# Suavizado de los datos de glucosa en la sangre

Si los datos de **glucosa** dan saltos o tienen ruido, **AAPS** puede dosificar mal la insulina y causar subidas o bajadas. Si ves errores o tu MCG da datos con saltos, es importante desactivar el lazo hasta que se resuelva el problema. Según tu MCG, estos problemas pueden deberse a la configuración del MCG en **AAPS** (como se explica más abajo) o a un problema en la zona del sensor del MCG (puede que tengas que cambiar el sensor del MCG).

## Suavizado de datos en AAPS

**AAPS** ofrece la opción de suavizar los datos dentro de **AAPS** en lugar de en la app del MCG. Abre el **menú** (☰), elige [**Configuración**](../SettingUpAaps/ConfigBuilder.md) y luego **Suavizado**. Hay cuatro opciones y solo una puede estar activa a la vez: **Sin suavizado**, **Suavizado exponencial**, **Suavizado promedio** y **Filtro de Kalman no lineal**.

![Configuración > Suavizado](../images/v4/Configuration/configuration_smoothing.png)

### Suavizado exponencial

En general, esta es la opción recomendada para empezar, porque es la más agresiva para quitar el ruido y reescribe el valor más reciente. Sin embargo, mira la tabla de abajo para otras recomendaciones concretas.

### Suavizado promedio

Esta opción funciona de forma parecida al suavizado hacia atrás (back smoothing) que antes tenían algunas plataformas de MCG. Reacciona más a los cambios recientes del valor de glucosa y, por eso, es más fácil que responda mal a datos de MCG con ruido.

### Sin suavizado

Usa esta opción solo si tu app recolectora ya suaviza bien los datos del MCG antes de enviarlos a **AAPS**.

### Filtro de Kalman no lineal (UKF, Unscented Kalman Filter)

Esta opción usa un modelo estadístico para estimar de forma continua tu valor real de glucosa y su velocidad de cambio a partir de las lecturas que llegan (que pueden tener ruido). Se adapta sola al nivel de ruido que tiene tu sensor en cada momento. También detecta y descarta lecturas aisladas que se desvían de repente. Es una alternativa más avanzada al suavizado exponencial y al suavizado promedio. Es útil si quieres que el suavizado se ajuste solo al nivel de ruido cambiante de tu sensor, en lugar de usar un método fijo.

(smoothing-xdrip-dexcom-g6)=

## Sugerencias para usar el suavizado

También puedes cambiar el método de suavizado de forma automática, por ejemplo según la edad del sensor, con la [acción de automatización](#automations-automation-action) **Cambiar suavizado**.

|               | Exponencial  |   Promedio    | Sin suavizado |
| ------------- |:------------:|:-------------:|:-------------:|
| G5/G6/ONE     | Si hay ruido |               |  Recomendado  |
| G7/ONE+/Stelo | Si hay ruido | Si es estable |               |

Los sensores Libre tienen ruido y pueden necesitar suavizado. Si usas la conexión directa de xDrip o la fuente de datos de la app parcheada (recibir datos de otra app, Juggluco incluido), [el suavizado ya se hace dentro de la app](#libre2-value-smoothing-raw-values).

| Sensor / fuente de datos | Juggluco | xDrip directo | xDrip bridge | xDrip con app parcheada |
| ------------------------ |:--------:|:-------------:|:------------:|:-----------------------:|
| Libre 1/14 días/Pro      |   N/A    |      N/A      |   Promedio   |           N/A           |
| Libre 2/2+ (UE)          | Promedio |    Ninguno    |   Promedio   |         Ninguno         |
| Libre 2/2+/3/3+          | Promedio |      N/A      |     N/A      |         Ninguno         |
