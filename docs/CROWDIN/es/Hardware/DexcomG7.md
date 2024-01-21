# Dexcom G7


## Fundamental por adelantado

En la primavera de 2022, Dexcom G7 recibió el certificado CE y se vendió a finales de octubre del mismo año.

Cabe destacar que el sistema Dexcom G7, en comparación con Dexcom G6, no suaviza los valores, ni en la app, ni en el lector. Más detalles al respecto [aquí](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app). Por consiguiente, hay que suavizar los valores para poder utilizarlos con sentido en AAPS.

![G7 english](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

## 1.  Aplicación Dexcom G7 parcheada (DiAKEM)

**Nota: Es necesario AAPS 3.2.0.0 o superior.**

### Instale una nueva aplicación parcheada de G7 e inicia el sensor.

Una aplicación Dexcom G7 parcheada (DiAKEM) permite acceder a los datos del sensor Dexcom G7. Esta no es la aplicación BYODA, ya que esta aplicación no puede recibir datos de Dexcom G7 por el momento.

Desinstala la aplicación original de Dexcom si la estabas utilizando antes (puedes continuar una sesión de sensor en curso, pero anota el código del sensor antes de desinstalar la aplicación).

Descarga e instala la aplicación patched.apk [aquí](https://github.com/authorgambel/g7/releases).

Introduce el código del sensor en la aplicación parcheada.

Sigue las recomendaciones generales para la higiene del MCG y la colocación del sensor que encontrará [aquí](../Hardware/GeneralCGMRecommendation.md).

Tras la fase de calentamiento, los valores se muestran como de costumbre en la aplicación G7.

### Configuración en AAPS

Para la configuración en AAPS
- Select 'BYODA' in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source) - even if it is not the BYODA app!

- If AAPS does not receive any values, switch to another BG source and then back to 'BYODA' to invoke the query for approving data exchange between AAPS and BYODA.

El suavizado de los valores de glucosa puede activarse activando el plugin "Suavizado promedio" o "Suavizado exponencial" en la tabla de configuraciones. Para desactivarlo, selecciona la opción "Sin suavizado". "Suavizado exponencial" es más agresivo y reescribe el valor de glucosa más reciente, pero es bueno para tratar el ruido pesado. "Suavizado promedio" es muy parecido al suavizado que se hacía con Dexcom G6 BYODA y sólo reescribe los valores pasados pero no el valor actual y por lo tanto, tiene un tiempo de respuesta más rápido.

**Suavizado exponencial** **DEBE** estar activado para un uso significativo de los valores G7.

## 2. xDrip+ (direct connection to G7)

- Sigue las instrucciones aquí: [xDrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- Select  xDrip+ in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

- Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page  [xDrip+ settings](../Configuration/xdrip.md)

## 3. xDrip+ (companion mode)

-   Download and install xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- As data source in xDrip+ "Companion App" must be selected and under Advanced Settings > Bluetooth Settings > "Companion Bluetooth" must be enabled.
-   Select  xDrip+ in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

-   Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page  [xDrip+ settings](../Configuration/xdrip.md) 
