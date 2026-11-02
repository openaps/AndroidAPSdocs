# **Freestyle Libre 3** y 3+

El Freestyle Libre 3 (FSL3) requiere una configuración especial para recibir los valores de glucosa en sangre en AAPS. Hay dos posibles formas de obtener los valores de Freestyle Libre 3 (FSL3) en AAPS.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

Los siguientes métodos para lograr esto utilizan la aplicación independiente Juggluco. Usa Juggluco para recibir del sensor datos sin procesar cada minuto, que luego se pasan a xDrip o a AAPS. Los nuevos sensores se pueden iniciar tanto con la aplicación Libre 3 como directamente en Juggluco. La guía a continuación indica el proceso para iniciar un sensor con la aplicación Juggluco. Si el sensor se ha iniciado con una cuenta de Libreview conectada, también es posible alternar entre Juggluco y la aplicación de Libre 3 como receptor.

Juggluco también puede enviar datos a LibreView para compartirlos con los equipos médicos, cuando el sensor se inicia con la aplicación Libre 3.

En xDrip puedes calibrar el sensor en el rango de -40 mg/dl a +20 mg/dl (-2,2 mmol/l a +1,1 mmol/l) para compensar las diferencias entre una medición manual con glucómetro y las lecturas del sensor.

## Método 1: usar directamente las lecturas de cada minuto
**AAPS** está pensado para lecturas cada 5 minutos. Por eso, procesar valores de cada minuto tiene a veces limitaciones.

Mira [aquí](#juggluco-to-aaps).


## Método 2: convertir las lecturas de cada minuto en valores de 5 minutos con xDrip
Este método usa Juggluco para recibir del sensor datos sin procesar cada minuto. Luego se pasan a xDrip, que los suaviza en datos cada 5 minutos y los pasa a AAPS.

### Paso 1: Configurar Juggluco
Descarga e instala la aplicación Juggluco desde [aquí](https://www.juggluco.nl/Juggluco/download.html). Sigue las instrucciones [aquí](https://www.juggluco.nl/Juggluco/libre3/)

Asegúrate de enviar los valores de glucosa a xDrip: en los ajustes de Juggluco puedes configurar Juggluco para que envíe sus valores de glucosa a otras apps. Juggluco can send three types of such broadcasts: The **Patched Libre broadcast** was originally used by the patched Librelink app and can be used to send glucose values to xDrip.

### Paso 2: Configurar xDrip+

La app xDrip del teléfono recibe los valores de glucosa.

- Si aún no lo tienes configurado, descarga [xDrip](https://github.com/NightscoutFoundation/xDrip) y sigue las instrucciones de la [página de ajustes de xDrip](../CompatibleCgms/xDrip.md).
- En xDrip, selecciona "Libre2 (patched app)" como fuente de datos.
- Si es necesario, introduce "BgReading:d,xdrip libre_receiver:v" en Less Common Settings → Extra Logging Settings → Extra tags for logging. Esto registrará mensajes de error adicionales para solucionar problemas.

![Registro de LibreLink en xDrip](../images/Libre2_Tags.png)

- Técnicamente, el valor actual de glucosa se envía a xDrip cada minuto. Por defecto, un filtro de media ponderada calcula un valor suavizado de los últimos 25 minutos. Puedes cambiar el periodo en el menú NFC Scan features.

  → Menú hamburguesa → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

  ![xDrip: ajustes avanzados de Libre 2 y valores en bruto](../images/xDrip_Libre3_Smooth.png)



### Paso 3: Iniciar el sensor desde xDrip+

En xDrip, inicia el sensor con "Start Sensor" y "not today". No es necesario mantener el teléfono móvil junto al sensor. De hecho, "Iniciar Sensor" no iniciará físicamente ningún sensor de Libre 3 ni interactuará con ellos en ningún caso. Esto solo sirve para indicar a xDrip que un nuevo sensor está enviando valores de glucosa. Si es posible, introduce dos valores medidos en sangre para la calibración inicial. Ahora los valores de glucosa deberían aparecer en xDrip cada 5 minutos. Los valores que faltan, por ejemplo porque estabas demasiado lejos de tu teléfono, no se recuperarán después.

Espera al menos 15-20 minutos si aún no hay datos.

Después de un cambio de sensor, xDrip detectará el nuevo sensor automáticamente y borrará todos los datos de calibración. Puedes comprobar tu glucosa después de la activación y hacer una nueva calibración inicial.

### Paso 4: Configurar AAPS

- Mira [aquí](#juggluco-to-xdrip) y vuelve.

- Si **AAPS** no recibe valores de glucosa cuando el teléfono está en modo avión, usa "Identify receiver"
- Desactiva el suavizado (xDrip ya lo hace)

## Cambios posteriores del sensor

1. Abre Juggluco y toma nota del número de serie del sensor existente

![Libre serial number](../images/libre3/step_13.jpg)

2. Ahora simplemente escanea tu nuevo sensor con el lector NFC de tu teléfono. Juggluco mostrará una notificación si el proceso se ha iniciado con éxito.
3. Cuando estés listo para desactivar el antiguo sensor, abre el menú de Juggluco haciendo clic en cualquier lugar en el espacio vacío en la esquina superior izquierda de la pantalla.
4. Selecciona el sensor caducado y toca "Terminate"

![Terminate sensor](../images/libre3/step_14.jpg)

Nota: Cuando hay dos sensores activos, Juggluco enviará el valor más reciente de cualquiera de los dos sensores a xDrip. If the sensors are not calibrated to read BG similarly, this may result in jumpy BG values being reported to xDrip. Si terminas el sensor incorrecto, puedes reactivarlo simplemente escaneándolo de nuevo.

## Cambiar el sensor entre la aplicación Libre 3 y Juggluco

Si el sensor se ha iniciado con una cuenta de Libreview conectada, también es posible alternar entre Juggluco y la aplicación de Libre 3 como receptor. Esto requiere los siguientes pasos:

1. Instala la aplicación Libre 3 desde Google PlayStore
2. Configura la aplicación Libre 3 con la cuenta de Libreview con la que se activó el sensor.
3. Forza la detención de la aplicación Juggluco en la configuración de Android.
4. En el menú de Libre 3, haz clic en "Iniciar Sensor", selecciona "Sí", "Siguiente" y escanea tu sensor.
5. Después de algunos minutos, los valores de glucosa en sangre deberían ser visibles en la aplicación Libre 3.

Para cambiar de la aplicación Libre 3 a Juggluco, necesitas forzar la detención de la aplicación Libre 3 a través de la configuración de Android y luego proceder con el Paso 1 & 2.

(libre3-experiences-and-troubleshooting)=
## Experiencias y solución de problemas

### Resolución de problemas de la conexión entre Libre3 -> Juggluco

- Asegúrate de estar utilizando una versión actualizada de la aplicación Juggluco
- Verifica tu configuración según esta guía
- A veces, es posible que debas forzar la detención de la aplicación Libre 3 y Juggluco y luego reiniciarla.
- Deshabilita el Bluetooth y vuelve a habilitarlo
- Espera un tiempo o intenta cerrar Juggluco
- Las versiones antiguas de Juggluco (anteriores a 2.9.6) no envían datos posteriores desde el sensor Libre3 a dispositivos conectados (por ejemplo, Juggluco en WearOS). Es posible que debas hacer clic en "Reenviar datos" en la aplicación Libre3 parcheada (menú de Juggluco).

### Ayuda adicional

Instrucciones originales: [Sitio web de jkaltes](https://www.juggluco.nl/Juggluco/libre3/)

Additional GitHub repo: [GitHub link](https://github.com/maheini/FreeStyle-Libre-3-patch)
