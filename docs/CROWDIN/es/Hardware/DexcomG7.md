# Dexcom G7

```{admonition} Only available in dev branch
:class: nota

Esta función sólo está disponible en la rama dev y no en la master.

Por favor, ten en cuenta las advertencias y sigue las instrucciones en [Construyendo la versión dev](../Installing-AndroidAPS/Dev_branch.md). [building a dev version](../Installing-AndroidAPS/Dev_branch.md).

```

## Fundamental por adelantado

En la primavera de 2022, Dexcom G7 recibió el certificado CE y se vendió a finales de octubre del mismo año.

Cabe destacar que el sistema Dexcom G7, en comparación con Dexcom G6, no suaviza los valores, ni en la app, ni en el lector. Más detalles al respecto [aquí](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app). Por consiguiente, hay que suavizar los valores para poder utilizarlos con sentido en AAPS.

Existen **dos** posibilidades (a partir del 02/'23).

![DexcomG7.md](../images/DexcomG7.png)

## 1.  Aplicación Dexcom G7 parcheada

### Instale una nueva aplicación parcheada de G7 e inicia el sensor.

Una aplicación Dexcom G7 parcheada da acceso a los datos del sensor Dexcom G7. Esta no es la aplicación BYODA, ya que esta aplicación no puede recibir datos de Dexcom G7 por el momento.

Desinstala la aplicación original de Dexcom si la estabas utilizando antes (puedes continuar una sesión de sensor en curso, pero anota el código del sensor antes de desinstalar la aplicación).

Descarga e instala la aplicación patched.apk [aquí](https://github.com/authorgambel/g7/releases).

Introduce el código del sensor en la aplicación parcheada.

Sigue las recomendaciones generales para la higiene del MCG y la colocación del sensor que encontrará [aquí](../Hardware/GeneralCGMRecommendation.md).

Tras la fase de calentamiento, los valores se muestran como de costumbre en la aplicación G7.

### Crear una nueva APK firmada desde la rama de desarrollo (dev)

Para poder recibir los valores de la aplicación G7 en AAPS y suavizar los valores recibidos, es necesario realizar un cambio en AAPS.

Por lo tanto, crea una nueva APK firmada desde la rama de desarrollo oficial e instálala en tu teléfono.

Para la configuración en AAPS
- Selecciona "BYODA" en la tabla de configuraciones, aunque no sea la aplicación BYODA.
- Si AAPS no recibe ningún valor, cambie a otro Orige de BG y, a continuación, vuelve a "BYODA" para invocar la consulta para aprobar el intercambio de datos entre AAPS y BYODA.

El suavizado de los valores de glucosa puede activarse activando el plugin "Suavizado promedio" o "Suavizado exponencial" en la tabla de configuraciones. Para desactivarlo, selecciona la opción "Sin suavizado". "Suavizado exponencial" es más agresivo y reescribe el valor de glucosa más reciente, pero es bueno para tratar el ruido pesado. "Suavizado promedio" es muy parecido al suavizado que se hacía con Dexcom G6 BYODA y sólo reescribe los valores pasados pero no el valor actual y por lo tanto, tiene un tiempo de respuesta más rápido.

**Suavizado exponencial** **DEBE** estar activado para un uso significativo de los valores G7.

## 2. xDrip+ (modo companion)

-   Descarga e instala xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- Como fuente de datos hardware en xDrip debes seleccionar "Companion App" y en Ajustes menos comunes > Ajustes Bluetooth > debes activar "Companion Bluetooth".
- En AAPS, selecciona > Configuración > Origen BG > xDrip+. Ajusta la configuración de xDrip+ según las explicaciones de la página de configuración de xDrip+ [Configuración de xDrip+](../Configuration/xdrip.md). 
