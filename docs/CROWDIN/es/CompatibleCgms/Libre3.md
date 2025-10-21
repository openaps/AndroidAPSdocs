# **Freestyle Libre 3** and 3+

El Freestyle Libre 3 (FSL3) requiere una configuración especial para recibir los valores de glucosa en sangre en AAPS. Hay dos posibles formas de obtener los valores de Freestyle Libre 3 (FSL3) en AAPS.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

Los siguientes métodos para lograr esto utilizan la aplicación independiente Juggluco. It uses Juggluco to receive raw, 1-minute interval data from the sensor which is then passed to xDrip+ or AAPS. Los nuevos sensores se pueden iniciar tanto con la aplicación Libre 3 como directamente en Juggluco. La guía a continuación indica el proceso para iniciar un sensor con la aplicación Juggluco. Si el sensor se ha iniciado con una cuenta de Libreview conectada, también es posible alternar entre Juggluco y la aplicación de Libre 3 como receptor.

Juggluco también puede enviar datos a LibreView para compartirlos con los equipos médicos, cuando el sensor se inicia con la aplicación Libre 3.

Dentro de xDrip+, el sensor se puede calibrar en un rango de -40 mg/dl a +20 mg/dl (-2,2 mmol/l a +1,1 mmol/l) para compensar las diferencias entre una lectura manual de medidor y las lecturas del sensor.

## Method 1: use 1-minute readings directly
AndroidAPS is taylored for 5-minute readings. Therefore processing 1-minute values has occasional limitations.

See [here](#juggluco-to-aaps).


## Method 2: convert 1-minute readings into 5-minute values via xDrip
Este método utiliza Juggluco para recibir datos brutos con intervalos de 1 minuto del sensor, los cuales luego se envían a xDrip+ para ser suavizados en datos con intervalos de 5 minutos que se pasan a AAPS.

### Paso 1: Configurar Juggluco
Descarga e instala la aplicación Juggluco desde [aquí](https://www.juggluco.nl/Juggluco/download.html). Sigue las instrucciones [aquí](https://www.juggluco.nl/Juggluco/libre3/)

Make sure you send the glucose values to xDrip+: In Juggluco's settings you can configure Juggluco to send its glucose value to other apps. Juggluco can send three types of such broadcasts: The **Patched Libre broadcast** was originally used by the patched Librelink app and can be used to send glucose values to xDrip+

### Paso 2: Configurar xDrip+

Los valores de glucosa en sangre son recibidos por la aplicación xDrip+ en el teléfono móvil.

- If not already set up then download [xDrip+](https://github.com/NightscoutFoundation/xDrip) and follow the instructions on [xDrip+ settings page](../CompatibleCgms/xDrip.md).
- En xDrip+, selecciona "Libre2 (patched app)" como fuente de datos hardware.
- If necessary, enter "BgReading:d,xdrip libre_receiver:v" under Less Common Settings → Extra Logging Settings → Extra tags for logging. Esto registrará mensajes de error adicionales para solucionar problemas

![xDrip+ LibreLink logging](../images/Libre2_Tags.png)

- Technically, the current blood sugar value is transmitted to xDrip+ every minute. A weighted average filter calculates a smoothed value over the last 25 minutes by default. You can change the period in the NFC Scan features menu.

  → Hamburger menu → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

  ![xDrip+ advanced settings Libre 2 & raw values](../images/xDrip_Libre3_Smooth.png)



### Paso 3: Iniciar el sensor desde xDrip+

En xDrip+ inicie el sensor con "Iniciar Sensor" y "hoy no". No es necesario mantener el teléfono móvil junto al sensor. De hecho, "Iniciar Sensor" no iniciará físicamente ningún sensor de Libre 3 ni interactuará con ellos en ningún caso. Esto es simplemente para indicar xDrip+ que un nuevo sensor está dando niveles de azúcar en la sangre. Si es posible, introduce dos valores de glucosa en sangre para la calibración inicial. Ahora los valores de glucosa deben mostrarse en xDrip+ cada 5 minutos. Los valores omitidos, por ejemplo, porque estabas demasiado lejos de tu teléfono, no se llenararán automáticamente.

Espera al menos 15-20 minutos si aún no hay datos.

Después de un cambio de sensor, xDrip+ detectará automáticamente el nuevo sensor y eliminará todos los datos de calibración. Puedes verificar tu glucosa en sangre después de la activación y realizar una nueva calibración inicial.

### Paso 4: Configurar AndroidAPS

- See [here](#juggluco-to-xdrip) and come back.

- If AndroidAPS does not receive BG values when phone is in airplane mode, use "Identify receiver"
- Turn off Smoothing (done in xDrip+ already)

## Cambios posteriores del sensor

1. Abre Juggluco y toma nota del número de serie del sensor existente

![Libre serial number](../images/libre3/step_13.jpg)

2. Ahora simplemente escanea tu nuevo sensor con el lector NFC de tu teléfono. Juggluco mostrará una notificación si el proceso se ha iniciado con éxito.
3. Cuando estés listo para desactivar el antiguo sensor, abre el menú de Juggluco haciendo clic en cualquier lugar en el espacio vacío en la esquina superior izquierda de la pantalla.
4. Select the expired sensor and tap "Terminate"

![Terminate sensor](../images/libre3/step_14.jpg)

Nota: Cuando hay dos sensores activos, Juggluco enviará el valor más reciente de cualquiera de los dos sensores a xDrip+. Si los sensores no están calibrados y no leen la glucosa en sangre de manera similar, esto puede dar como resultado valores de glucosa en sangre irregulares que se envían a xDrip+ Si terminas el sensor incorrecto, puedes reactivarlo simplemente escaneándolo de nuevo.

## Cambiar el sensor entre la aplicación Libre 3 y Juggluco

Si el sensor se ha iniciado con una cuenta de Libreview conectada, también es posible alternar entre Juggluco y la aplicación de Libre 3 como receptor. Esto requiere los siguientes pasos:

1. Instala la aplicación Libre 3 desde Google PlayStore
2. Configura la aplicación Libre 3 con la cuenta de Libreview con la que se activó el sensor.
3. Forza la detención de la aplicación Juggluco en la configuración de Android.
4. En el menú de Libre 3, haz clic en "Iniciar Sensor", selecciona "Sí", "Siguiente" y escanea tu sensor.
5. Después de algunos minutos, los valores de glucosa en sangre deberían ser visibles en la aplicación Libre 3.

Para cambiar de la aplicación Libre 3 a Juggluco, necesitas forzar la detención de la aplicación Libre 3 a través de la configuración de Android y luego proceder con el Paso 1 & 2.

(libre3-experiences-and-troubleshooting)=
## Experiences and Troubleshooting

### Resolución de problemas de la conexión entre Libre3 -> Juggluco

- Asegúrate de estar utilizando una versión actualizada de la aplicación Juggluco
- Verifica tu configuración según esta guía
- A veces, es posible que debas forzar la detención de la aplicación Libre 3 y Juggluco y luego reiniciarla.
- Deshabilita el Bluetooth y vuelve a habilitarlo
- Espera un tiempo o intenta cerrar Juggluco
- Las versiones antiguas de Juggluco (anteriores a 2.9.6) no envían datos posteriores desde el sensor Libre3 a dispositivos conectados (por ejemplo, Juggluco en WearOS). Es posible que debas hacer clic en "Reenviar datos" en la aplicación Libre3 parcheada (menú de Juggluco).

### Ayuda adicional

Instrucciones originales: [Sitio web de jkaltes](https://www.juggluco.nl/Juggluco/libre3/)

Repositorio adicional en Github: [Enlace a Github](https://github.com/maheini/FreeStyle-Libre-3-patch)
