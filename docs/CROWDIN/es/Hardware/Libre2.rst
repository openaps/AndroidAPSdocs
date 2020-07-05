Freestyle libre 2
**************************************************

El sistema Freestyle Libre 2 puede reportar automáticamente niveles peligrosos de glucosa en sangre. El Sensor Libre2 envía el nivel de azúcar en sangre actual a un receptor (lector o smartphone) cada minuto. El receptor activa una alarma si es necesario. With a self-modified LibreLink app and the xDrip+ app, you can continuously receive and display your blood sugar level on your smartphone. 

The sensor can be calibrated in the range of -40 mg/dl to +20 mg/dl (-2,2 mmol/l to +1,1 mmol/l) to adjust differences between finger prick measurements and sensor readings.

BG readings can also be done using a BT transmitter like with the Libre1.

Step 1: Build your own patched LibreLink-App
==================================================

Por razones legales, el llamado parche tiene que ser hecho por usted mismo. Utilizar motores de búsqueda para encontrar los enlaces correspondientes. There are mainly two variants: The recommended original patched app blocks any internet traffic to avoid tracking. The other variant supports LibreView which may be needed by your doctor.

The patched app has to be installed instead of the original app. The next sensor started with it will transmit the current BG values to the xDrip+ app running on your smartphone via Bluetooth.

Important: To avoid possible problems it may help to first install and uninstall the original app on an NFC capable smartphone. NFC tiene que estar habilitado. Esto no suma consumo a la batería. Then install the patched app. 

The patched app can be identified by the foreground authorization notification. The foreground authorization service improves the connection stability compared to the original app which do not use this service.

.. image:: ../images/Libre2_ForegroundServiceNotification.png
  :alt: LibreLink Servicio en segundo plano

Other indications could be the Linux penguin logo three dot menu -> Info or the font of the patched app. These criteria are optional depending on the app source you choose.

.. image:: ../images/LibreLinkPatchedCheck.png
  :alt: LibreLink Font Check

Ensure that NFC is activated, enable the memory and location permission for the patched app, enable automatic time and time zone and set at least one alarm in the patched app. 

Ahora inicie el sensor de Libre2 con la aplicación patchada, simplemente escaneando el sensor. Ensure to have set all settings done.

Ajustes obligatorios para el inicio del sensor con éxito: 

* NFC habilitado / BT habilitado
* memory and location permission enabled 
* location service enabled
* automatic time and time zone setting
* establecer al menos una alarma en la aplicación parchada

Please note that the location service is a central setting. This is not the app location permission which has to be set also!

.. image:: ../images/Libre2_AppPermissionsAndLocation.png
  :alt: LibreLink permisos de memoria y ubicación
  
  
.. image:: ../images/Libre2_DateTimeAlarms.png
  :alt: automatic time and time zone + alarm settings  

The sensor remembers the device it was started from. Sólo este dispositivo puede recibir alarmas en el futuro.

La primera configuración de la conexión para el sensor es fundamental. La aplicación LibreLink intenta establecer una conexión inalámbrica al sensor cada 30 segundos. Si faltan uno o más valores obligatorios, hay que establecerlos. No tienes límite de tiempo para hacer eso. El sensor está constantemente intentando configurar la conexión. Incluso después de algunas horas. Be patient and try different settings before even think of changing the sensor.

As long as you see a red exclamation mark ("!") on the upper left corner of the LibreLink's start screen there is no connection or some other setting blocks LibreLink to signal alarms. Please check if the sound is enabled and all sorts of blocking app notifications are disabled. When the exclamation mark is gone, the connection should be established and blood sugar values are sent to the smartphone. Esto debería ocurrir después de un máximo de 5 minutos.

.. image:: ../images/Libre2_ExclamationMark.png
  :alt: LibreLink no hay conexión
  
Si la marca de exclamación permanece o se obtiene un mensaje de error, esto puede tener varias razones:

- El servicio de ubicación de Android no está disponible - por favor actívalo en la configuración del sistema
- automatic time and time zone not set - please change the settings accordingly
- activar alarmas - al menos una de las tres alarmas debe activarse en LibreLink
- El Bluetooth está apagado, por favor enciendalo
- sound is blocked
- app notifications are blocked
- idle screen notifications are blocked 
- you have a faulty Libre 2 sensor from a production LOT number with a 'K' followed by 8 digits. You find this printed on the yellow package. These sensors have to be replaced as they don't function on bluetooth.

Reiniciar el teléfono puede ayudar, es posible que tenga que hacerlo varias veces. Tan pronto como se establezca la conexión, desaparece la marca de exclamación roja y se toma el paso más importante. It may happen that depending on system settings the exclamation mark remains but you still get readings. In both cases you are fine. El sensor y el teléfono están ahora conectados, cada minuto se transmite un valor de azúcar en la sangre.

.. image:: ../images/Libre2_Connected.png
  :alt: Conexión LibreLink establecida
  
In rare case it could help to empty the bluetooth cache and/or reset all network connections via the system menu. This removes all connected bluetooth devices which may help to setup a proper bluetooth connection. That procedure is save as the started sensor is remembered by the patched LibreLink app. Nothing additional has to be done here. Simply wait for the patched app to connect to the sensor.

After a successful connection the smartphone settings can be changed if necessary. This is not recommended but you may want to save power. El servicio de ubicación se puede desactivar, el volumen puede establecerse en cero o las alarmas se pueden desactivar de nuevo. The blood sugar levels are transferred anyway.

Al iniciar el siguiente sensor, no obstante, todos los valores deben volver a establecerse!

Remark: The patched app needs the mandatory settings set in that hour after warmup to enable a connection. For the 14 days operation time they are not needed. In most cases when you have problems with starting a sensor the location service was switched off. For Android it is needed for proper bluetooth operation(!) to connect. Please refer to Google's Android documentation.

During the 14 days you can use in parallel one or more NFC capable smartphones (not the reader device!) running the original LibreLink app for scanning via NFC. There is no time limitation to start that. You could use a parallel phone for example on day 5 or so. The parallel phones(s) could upload the blood sugar values into the Abbott Cloud (LibreView). LibreView can generate reports for your diabetes team. Hay muchos padres que necesitan absolutamente esto. 

Please note that the original patched app **does not have any connection to the internet** to avoid tracking.

However there is a variant of the patched app supporting LibreView with enabled internet access. Please be aware that your data is transferred to the cloud then. But your diadoc tool- and reporting chain is fully supported then. With that variant it is also possible to move the alarms of a running sensor to a different device which not has started the sensor. Please google in diabetes related German forums how this could be done.


Paso 2: Instalar y configurar la aplicación xDrip+
==================================================

Los valores de azúcar en sangre son recibidos en el smartphone por la aplicación xDrip+. 

* If not already set up then download xDrip+ app and install one of the latest nightly builds from `here <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* En xDrip+ seleccione "Libre2 (aplicación parchada)" como origen de datos
* Si es necesario, ingrese "BgReading:d,xdrip libre_receiver:v" en Ajustes menos comunes->Ajustes adicionales de conexión->Etiquetas extras para conexión. Esto registrará mensajes de error adicionales ante problemas.
* In xDrip+ go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xDrip+ go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
* to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xDrip+ please set `Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps" <https://androidaps.readthedocs.io/en/latest/EN/Configuration/xdrip.html#identify-receiver>`_
* If you want to be able to use AndroidAPS to calibrate then in xDrip+ go to Settings > Interapp Compatibility > Accept Calibrations and select ON.  Puede que también desee revisar las opciones en Ajustes > Ajustes Menos Comunes > Ajustes Avanzados de Calibración.

.. image:: ../images/Libre2_Tags.png
  :alt: registro de xDrip+ LibreLink

Paso 3: Iniciar el sensor
==================================================

En xDrip+ inicie el sensor con "Iniciar Sensor" y "hoy no". 

In fact this will not physically start any Libre2 sensor or interact with them in any case. Esto es simplemente para indicar xDrip+ que un nuevo sensor está dando niveles de azúcar en la sangre. Si está disponible, introduzca dos valores capilares para la calibración inicial. Ahora los valores de glucosa en sangre deben ser mostrados en xDrip+ cada 5 minutos. Se omiten los valores, por ejemplo. porque estabas demasiado lejos de tu teléfono, no se cargarán los valores.

After a sensor change xDrip+ will automatically detect the new sensor and will delete all calibration data. You may check you bloody BG after activation and make a new initial calibration.

Step 4: Configure AndroidAPS (for looping only)
==================================================
* En AndroidAPS vaya a Config Builder > Fuente de BG y compruebe 'xDrip+' 
* If AndroidAPS does not receive BG values when phone is in airplane mode, use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html#identify-receiver>`_.

Hasta ahora, usando Libre 2 como fuente BG usted no puede activar 'Habilitar SMB siempre' y 'Habilitar SMB después de los carbohidratos' dentro del algoritmo SMB. Los valores de BG de Libre 2 no son lo suficientemente estables para usarlo de forma segura. Consulte ' Suavizar los datos de glucosa en sangre <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ para más detalles.

Consejos y solución de problemas
==================================================

Connectivity
--------------------------------------------------
The connectivity is extraordinarily good. With the exception of Huawei mobile phones, all current smartphones seem to work well. The reconnect rate in case of connection loss is phenomenal. La conexión se puede romper si el teléfono móvil está en el bolsillo opuesto al sensor o si está al aire libre. Cuando estoy en jardinería, coloco mi teléfono en el lado del sensor de mi cuerpo. In rooms, where Bluetooth spreads over reflections, no problems should occur. Si tiene problemas de conectividad, por favor pruebe otro teléfono. It may also help to set the sensor with the internal BT antenna pointing down. The slit on the applicator must be pointing down when setting the sensor.

Value smoothing & raw values
--------------------------------------------------
Técnicamente, el valor de azúcar en sangre actual se transmite a xDrip+ cada minuto. Un filtro promedio ponderado calcula un valor suavizado en los últimos 25 minutos. Esto es obligatorio. Las curvas de aspecto liso y el lazo que los resultados son excelentes. Los valores en bruto en los que las alarmas están basados varían un poco más, pero se corresponden a los valores que también muestra el lector. Además, los valores en bruto se pueden visualizar en el gráfico xDrip+ para poder reaccionar en el tiempo a cambios rápidos. Por favor, habilite en Ajustes menos comunes > Ajustes avanzados para Libre2 > "mostrar valores brutos" y "mostrar información de sensor". Then the raw values are additionally displayed as small white dots and additional sensor info is available in the system menu.

The raw values are very helpful when the blood sugar is moving fast. Even if the dots are jumpier you would detect the tendency much better as using the smoothed line to make proper therapy decisions.

.. image:: ../images/Libre2_RawValues.png
  :alt: xDrip+ advanced settings Libre 2 & raw values

Sensor runtime
--------------------------------------------------
El tiempo de trabajo del sensor se fija en 14 días. Las 12 horas adicionales de Libre1 ya no existen. xDrip+ shows additional sensor information after enabling Advanced Settings for Libre2 > "show Sensors Infos" in the system menu like the starting time. El tiempo restante del sensor también se puede ver en la aplicación Parcheada LibreLink. Tanto en la pantalla principal como en el tiempo restante de la pantalla como en la hora de inicio del sensor en el menú de tres puntos->Ayuda->Registro de eventos en "Nuevo sensor encontrado".

.. image:: ../images/Libre2_Starttime.png
  :alt: Libre 2 hora de inicio

New sensor
--------------------------------------------------
Un intercambio de sensores tiene lugar al vuelo: ponga el nuevo sensor poco antes de su activación. Tan pronto como xDrip+ no recibe más datos del viejo sensor, inicie el nuevo sensor con la aplicación parcheada. Después de una hora, los valores nuevos deben aparecer automáticamente en xDrip+. 

Si no es así, compruebe la configuración del teléfono y continúe con el primer inicio. Usted no tiene límite de tiempo. Try to find the correct settings. No es necesario sustituir inmediatamente el sensor antes de intentar combinaciones diferentes. Los sensores son robustos e intentan establecer de forma permanente una conexión. Por favor, toma tu tiempo. In most cases you accidentally changed one setting which causes now problems. 

Una vez que tenga éxito, por favor seleccione "Parada de Sensor" y "Borrar calibración solamente" en xDrip. Esto le indica a xDrip+ que un nuevo sensor está enviando los niveles de azúcar en la sangre y las calibraciones antiguas ya no son válidas y por lo tanto tienen que ser eliminadas. No se realiza ninguna interacción real con el sensor de Libre2 aquí! You do not need to start the sensor in xDrip+.

.. image:: ../images/Libre2_GapNewSensor.png
  :alt: xDrip+ falta datos al cambiar el sensor de Libre 2

Calibración
--------------------------------------------------
You can calibrate the Libre2 with an offset of -40 mg/dl to +20 mg/dL [-2,2 mmol/l to +1,1 mmol/l] (intercept). The slope isn't changeable as the Libre2 is much more accurate compared to the Libe1. Please check by fingerpricking early after setting a new sensor. It is known that there can arise big differences to the blood measurements. Para estar en el lado seguro, calibre cada 24 - 48 horas. Los valores son precisos hasta el final del sensor y no varían como los del Libre1. Sin embargo, si el sensor está completamente apagado, esto no va a cambiar. A continuación, el sensor debe ser sustituido inmediatamente.

Plausibility checks
--------------------------------------------------
Los sensores Libre2 contienen comprobaciones de plausibilidad para detectar valores de sensor incorrectos. Tan pronto como el sensor se mueva en el brazo o se levante ligeramente, los valores pueden empezar a fluctuar. A continuación, el sensor Libre2 se cerrará por razones de seguridad. Desafortunadamente, cuando se escanea con la aplicación, se realizan comprobaciones adicionales. La aplicación puede desactivar el sensor a pesar de que el sensor está bien. Currently the internal test is too strict. He dejado de escanear por completo y no he tenido un fracaso desde entonces.

Time zone travelling
--------------------------------------------------
In other `time zones <../Usage/Timezone-traveling.html>`_ there are two strategies for looping: 

Either 

1. dejar el tiempo del smartphone sin cambios y cambiar el perfil basal (smartphone en modalidad de vuelo) o 
2. borrar el historial de la bomba y cambiar la hora del smartphone a la hora local. 

Método 1. es genial siempre y cuando usted no tiene que establecer un nuevo Libre2 sensor en el sitio. En caso de duda, seleccione el método 2., especialmente si el viaje toma más tiempo. Si establece un nuevo sensor, se debe establecer el huso horario automático, por lo tanto, el método 1. sería perturbado. Por favor, compruebe antes, si está en otro lugar, porque puede caer en problemas rapidamente.

Experiences
--------------------------------------------------
En conjunto, es uno de los sistemas de MCG más pequeños del mercado. Pequeño, sin transmisor adicional y en su mayoría los valores son muy precisos sin fluctuaciones. After approx. 12 hours running-in phase with deviations of up to 30 mg/dl (1,7 mmol/l)the deviations are typical smaller than 10 mg/dl (0,6 mmol/l). Los mejores resultados se obtiene en el ante brazo posición trasera, otros puntos de inserción vaya con precaución! No hay necesidad de establecer un nuevo sensor un día antes para que se ajuste. That would disturb the internal leveling mechanism.

Parece que hay malos sensores de vez en cuando, que están muy lejos de los valores de la sangre. Se queda así. Estos deben ser sustituidos inmediatamente.

Si el sensor se mueve un poco en la piel o se levanta de alguna manera esto puede causar malos resultados. El filamento que se encuentra en el tejido es un poco tirado fuera del tejido y medirá diferentes resultados entonces. Mostly probably you will see jumping values in xDrip+. O que la diferencia con los valores de glucosa en sangre cambian. Por favor, reemplace el sensor de inmediato! Los resultados son inexactos.

Using bluetooth transmitter and OOP
==================================================

Bluetooth transmitter can be used with the Libre2 with the latest xDrip+ nightlys and the Libre2 OOP app. You can receive blood sugar readings every 5 minutes as well as with the Libre1. Please refer to the miaomiao website to find a description. This will also work with the Bubble device and in the future with other transmitter devices. The blucon should work but has not been tested yet.

Old Libre1 transmitter devices cannot be used with the Libre2 OOP. They need to be replaced with a newer version or have a firmware upgrade for proper operation. MM1 with newest firmware is unfortunately not working yet - searching for root cause is currently ongoing.

The Libre2 OOP is creating the same BG readings as with the original reader or the LibreLink app via NFC scan. AAPS with Libre2 do a 25 minutes smoothing to avoid certain jumps. OOP generates readings every 5 minutes with the average of the last 5 minutes. Therefore the BG readings are not that smooth but match the original reader device and faster follow the "real" BG readings. If you try to loop with OOP please enable all smoothing settings in xDrip+.

The Droplet transmitter is working with Libre2 also but uses an internet service instead. Please refer to FB or a search engine to get further information. The MM2 with the tomato app also seems to use an internet service. For both devices you have to take care to have a proper internet connection to get your BG readings.

Even if the patched LibreLink app approach is smart there may be some reasons to use a bluetooth transmitter:

* the BG readings are identical to the reader results
* the Libre2 sensor can be used 14.5 days as with the Libre1 before 
* 8 hours Backfilling is fully supported.
* get BG readings during the one hour startup time of a new sensor

Remark: The transmitter can be used in parallel to the LibreLink app. It doesn't disturb the patched LibreLink app operation.

Remark #2: The OOP algorithm cannot be calibrated yet. This will be changed in the future.
