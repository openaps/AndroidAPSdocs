# **Freestyle Libre 3**

El Freestyle Libre 3 (FSL3) requiere una configuración especial para recibir los valores de glucosa en sangre en AAPS. Hay dos posibles formas de obtener los valores de Freestyle Libre 3 (FSL3) en AAPS.

![FL3](https://github.com/blaqone/AndroidAPSdocs/assets/37814299/d912c1d3-06d2-4b58-ad7c-025ca1980fae)


Los siguientes métodos para lograr esto utilizan la aplicación independiente Juggluco. [Link].(https://www.juggluco.nl/Juggluco/download.html) Utiliza Juggluco para recibir datos en bruto en intervalos de 1 minuto del sensor, los cuales luego se envían a xDrip+ o AAPS. Los nuevos sensores se pueden iniciar tanto con la aplicación Libre 3 como directamente en Juggluco. La guía a continuación indica el proceso para iniciar un sensor con la aplicación Juggluco. Si el sensor se ha iniciado con una cuenta de Libreview conectada, también es posible alternar entre Juggluco y la aplicación de Libre 3 como receptor.

Juggluco también puede enviar datos a LibreView para compartirlos con los equipos médicos, cuando el sensor se inicia con la aplicación Libre 3.

Dentro de xDrip+, el sensor se puede calibrar en un rango de -40 mg/dl a +20 mg/dl (-2,2 mmol/l a +1,1 mmol/l) para compensar las diferencias entre una lectura manual de medidor y las lecturas del sensor.

## Método 1: Lecturas cada minuto
Si bien es posible transmitir datos directamente desde Juggluco a AAPS en intervalos de 1 minuto, esto probablemente ocasionará un mayor consumo de batería. Cuando seleccionas una fuente de glucosa en sangre NO relacionada con Dexcom, AAPS no carga los valores de glucosa en sangre en Nightscout. Normalmente, xDrip+ se encarga de esta tarea. Sin embargo, si no estás utilizando xDrip`+, como se muestra aquí, Juggluco debe cargar los valores en Nightscout.

### Paso 1: Configurar Juggluco
Descarga e instala la aplicación Juggluco desde [aquí](https://www.juggluco.nl/Juggluco/download.html). Sigue las instrucciones [aquí](https://www.juggluco.nl/Juggluco/libre3/) para iniciar un sensor FL3.

Asegúrate de enviar los valores de glucosa a AAPS+: En la configuración de Juggluco, puedes configurarlo para enviar su valor de glucosa a otras aplicaciones. Juggluco puede enviar tres tipos de estas transmisiones: La **transmisión local de xDrip** se utilizaba originalmente en xDrip+ y puede usarse para enviar valores de glucosa a AAPS.

Asegúrate también de habilitar la subida de valores de glucosa en Nightscout: Ajustes ->Subida->E Ingresa tu URL de Nightscout con el puerto y tu API Secret. ¡Habilita y guarda!

### Paso 2: Configurar AndroidAPS

- En AndroidAPS ve a Tabla de configuraciones > Origen BG y comprueba "xDrip+"
- Si AndroidAPS no recibe valores de glucosa cuando el teléfono está en modo avión, utiliza "Identificar receptor"
- ¡Activa el Suavizado!

Hasta el momento, al usar Libre 3 como fuente de glucosa, las opciones "Habilitar SMB siempre" y "Habilitar SMB con carbohidratos" no pueden activarse con el algoritmo de SMB. Los valores de glucosa de Libre 3 no son lo suficientemente suaves como para usarlos de manera segura.


## Método 2: Lecturas cada 5 minutos
Este método utiliza Juggluco para recibir datos brutos con intervalos de 1 minuto del sensor, los cuales luego se envían a xDrip+ para ser suavizados en datos con intervalos de 5 minutos que se pasan a AAPS.

### Paso 1: Configurar Juggluco
Descarga e instala la aplicación Juggluco desde [aquí](https://www.juggluco.nl/Juggluco/download.html). Sigue las instrucciones [aquí](https://www.juggluco.nl/Juggluco/libre3/)

Asegúrate de enviar los valores de glucosa a xDrip+: En la configuración de Juggluco, puedes configurarlo para enviar el valor de glucosa a otras aplicaciones. Juggluco puede enviar tres tipos de estas transmisiones: La **transmisión de Librelink** se utilizaba originalmente en la aplicación parcheada de Librelink y se puede usar para enviar valores de glucosa a xDrip+

### Paso 2: Configurar xDrip+

Los valores de glucosa en sangre son recibidos por la aplicación xDrip+ en el teléfono móvil.

- Si aún no está configurada, descarga la aplicación xDrip+ e instala una de las últimas versiones desde [aquí](https://github.com/NightscoutFoundation/xDrip/releases).
- En xDrip+, selecciona "Libre2 (patched app)" como fuente de datos hardware.
- Desactiva la optimización de la batería y permite la actividad en segundo plano para la aplicación xDrip+.
- Si es necesario, ingrese "BgReading:d,xdrip libre_receiver:v" en Ajustes menos comunes->Opciones de registro adicionales->Etiquetas extras para el registro. Esto registrará mensajes de error adicionales para solucionar problemas
- En xDrip+ ve a Ajustes -> Ajustes entre aplicacoines -> Transmitir localmente y selecciona ON.
- In xDrip+, ve a Ajustes -> Ajustes entre aplicaciones -> Aceptar tratamientos y selecciona OFF.
- Para permitir que AAPS reciba valores de glucosa en sangre (a partir de la versión 2.5.x) de xDrip+, habilita Ajustes-> Ajustes entre aplicaciones -> Identificar receptor "info.nightscout.androidaps".
- Si quieres usar AndroidAPS para las calibraciones, ve a Ajustes -> Ajustes entre aplicaciones -> Aceptar calibraciones y selecciona ON. También es recomendable revisar las opciones en Ajustes -> Ajustes menos comunes -> Verificar la configuración de Calibración Avanzada.

### Paso 3: Iniciar el sensor desde xDrip+

En xDrip+ inicie el sensor con "Iniciar Sensor" y "hoy no". No es necesario mantener el teléfono móvil junto al sensor. De hecho, "Iniciar Sensor" no iniciará físicamente ningún sensor de Libre 3 ni interactuará con ellos en ningún caso. Esto es simplemente para indicar xDrip+ que un nuevo sensor está dando niveles de azúcar en la sangre. Si es posible, introduce dos valores de glucosa en sangre para la calibración inicial. Ahora los valores de glucosa deben mostrarse en xDrip+ cada 5 minutos. Los valores omitidos, por ejemplo, porque estabas demasiado lejos de tu teléfono, no se llenararán automáticamente.

Espera al menos 15-20 minutos si aún no hay datos.

Después de un cambio de sensor, xDrip+ detectará automáticamente el nuevo sensor y eliminará todos los datos de calibración. Puedes verificar tu glucosa en sangre después de la activación y realizar una nueva calibración inicial.

### Paso 4: Configurar AndroidAPS

- En AndroidAPS ve a Tabla de configuraciones > Origen BG y comprueba "xDrip+"
- Si AndroidAPS no recibe valores de glucosa cuando el teléfono está en modo avión, utiliza "Identificar receptor"
- Desactiva el suavizado (ya activado en xDrip+)

Hasta el momento, al usar Libre 3 como fuente de glucosa, las opciones "Habilitar SMB siempre" y "Habilitar SMB con carbohidratos" no pueden activarse con el algoritmo de SMB. Los valores de glucosa de Libre 3 no son lo suficientemente suaves como para usarlos de manera segura.



## Cambios posteriores del sensor

1. Abre Juggluco y toma nota del número de serie del sensor existente

![Libre serial number](../images/libre3/step\_13.jpg)

2. Ahora simplemente escanea tu nuevo sensor con el lector NFC de tu teléfono. Juggluco mostrará una notificación si el proceso se ha iniciado con éxito.
3. Cuando estés listo para desactivar el antiguo sensor, abre el menú de Juggluco haciendo clic en cualquier lugar en el espacio vacío en la esquina superior izquierda de la pantalla.
4. Selecciona el sensor caducado y pulsa sobre "Finalizar"

![Terminate sensor](../images/libre3/step\_14.jpg)

Nota: Cuando hay dos sensores activos, Juggluco enviará el valor más reciente de cualquiera de los dos sensores a xDrip+. Si los sensores no están calibrados y no leen la glucosa en sangre de manera similar, esto puede dar como resultado valores de glucosa en sangre irregulares que se envían a xDrip+ Si terminas el sensor incorrecto, puedes reactivarlo simplemente escaneándolo de nuevo.

## Cambiar el sensor entre la aplicación Libre 3 y Juggluco

Si el sensor se ha iniciado con una cuenta de Libreview conectada, también es posible alternar entre Juggluco y la aplicación de Libre 3 como receptor. Esto requiere los siguientes pasos:

1. Instala la aplicación Libre 3 desde Google PlayStore
2. Configura la aplicación Libre 3 con la cuenta de Libreview con la que se activó el sensor.
3. Forza la detención de la aplicación Juggluco en la configuración de Android.
4. En el menú de Libre 3, haz clic en "Iniciar Sensor", selecciona "Sí", "Siguiente" y escanea tu sensor.
5. Después de algunos minutos, los valores de glucosa en sangre deberían ser visibles en la aplicación Libre 3.

Para cambiar de la aplicación Libre 3 a Juggluco, necesitas forzar la detención de la aplicación Libre 3 a través de la configuración de Android y luego proceder con el Paso 1 & 2.

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
