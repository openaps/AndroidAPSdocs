Freestyle libre 2
**************************************************

El sistema Freestyle Libre 2 puede reportar automáticamente niveles peligrosos de glucosa en sangre. El Sensor Libre2 envía el nivel de azúcar en sangre actual a un receptor (lector o smartphone) cada minuto. El receptor activa una alarma si es necesario. Con una aplicación LibreLink auto-modificada, puede recibir continuamente su nivel de azúcar en la sangre en su smartphone. Como los envían directamente a través de Bluetooth a tu teléfono, no necesitarás comprar un adaptador Bluetooth como MiaoMiao o Blucon nunca más. 

Paso 1: Construye tu propia Librelink-App parcheada
==================================================

Por razones legales, el llamado parche tiene que ser hecho por usted mismo. Utilizar motores de búsqueda para encontrar los enlaces correspondientes.

La aplicación patchada tiene que ser instalada en lugar de la aplicación original. El siguiente sensor que se inicia con ella transmitirá sus valores al smartphone.

Importante: Primero instale y desinstale la aplicación original en un smartphone con capacidad NFC. NFC tiene que estar habilitado. Esto no suma consumo a la batería. A continuación, instale la aplicación parcheada. Se puede identificar mediante la notificación de autorización en primer plano. 

.. image:: ../images/fsl2pic1.jpg
  :alt: LibreLink Servicio en segundo plano

This significantly improves the connection stability compared to the original app. Ensure that NFC is activated, enable the memory and location permission for the patched app, enable automatic time and timezone and set at least one alarm in the patched app. 

Ahora inicie el sensor de Libre2 con la aplicación patchada, simplemente escaneando el sensor. Siga las instrucciones. El sensor recuerda el dispositivo con el que se inició. Sólo este dispositivo puede recibir alarmas en el futuro.

Ajustes obligatorios para el inicio del sensor con éxito: 

* NFC habilitado / BT habilitado
* permiso de memoria habilitado 
* ubicación habilitada
* configuración automática de hora y zona horaria
* establecer al menos una alarma en la aplicación parchada

.. image:: ../images/fsl2pic2.jpg
  :alt: LibreLink permisos de memoria y ubicación
  
.. imagen:: ../images/fsl2pic3.jpg
  :alt: Android ajustes de ubicación
  
.. image:: ../images/fsl2pic4a.jpg
  :alt: hora y zona horaria automática
  
.. imagen:: ../images/fsl2pic4.jpg
  :alt: LibreLink configuración de alarma
  
La primera configuración de la conexión para el sensor es fundamental. La aplicación LibreLink intenta establecer una conexión inalámbrica al sensor cada 30 segundos. Si faltan uno o más valores obligatorios, hay que establecerlos. No tienes límite de tiempo para hacer eso. El sensor está constantemente intentando configurar la conexión. Incluso después de algunas horas. Be patient and try different seetings before even think of changing the sensor.

As long as you see a red exclamation mark ("!") on the upper left corner of the LibreLinks start screen there is no connection. Only when the exclamation mark is gone, the connection is established and blood sugar values are sent to the smartphone. Esto debería ocurrir después de un máximo de 5 minutos.

.. imagen:: ../images/fsl2pic5.jpg
  :alt: LibreLink no hay conexión
  
Si la marca de exclamación permanece o se obtiene un mensaje de error, esto puede tener varias razones:

- El servicio de ubicación de Android no está disponible - por favor actívalo en la configuración del sistema
- la hora y zona horaria automáticas no están configuradas - por favor cambie la configuración en consecuencia
- activar alarmas - al menos una de las tres alarmas debe activarse en LibreLink
- El Bluetooth está apagado, por favor enciendalo

Reiniciar el teléfono puede ayudar, es posible que tenga que hacerlo varias veces. Tan pronto como se establezca la conexión, desaparece la marca de exclamación roja y se toma el paso más importante. El sensor y el teléfono están ahora conectados, cada minuto se transmite un valor de azúcar en la sangre.

.. imagen:: ../images/fsl2pic6.jpg
  :alt: Conexión LibreLink establecida
  
Ahora los ajustes de smartphone se pueden cambiar nuevamente si es necesario, p.ej. si desea ahorrar energía. El servicio de ubicación se puede desactivar, el volumen puede establecerse en cero o las alarmas se pueden desactivar de nuevo. Los niveles de azúcar de sangre se transfieren de todos modos.

Al iniciar el siguiente sensor, no obstante, todos los valores deben volver a establecerse!

Puede utilizar un segundo smartphone con capacidad de NFC con la aplicación de LibreLink original para el escaneo a través de NFC. El lector original NO se puede utilizar más, no se puede conectar en paralelo! El segundo teléfono puede subir los valores de azúcar en la sangre a la Nube Abbott (LibreView). LibreView puede generar informes para el DiaDoc. Hay muchos padres que necesitan absolutamente esto. 

Aviso: La aplicación parcheada no tiene conexión a Internet.

Paso 2: Instalar y configurar la aplicación xDrip+
==================================================

Los valores de azúcar en sangre son recibidos en el smartphone por la aplicación xDrip+. 

* Si aún no se ha configurado, descargue la aplicación xdrip e instale uno de los más recientes de `aqui <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* En xDrip+ seleccione "Libre2 (aplicación parchada)" como origen de datos
* If necessary, enter "BgReading:d,xdrip libre_receiver:v" under Less Common Settings->Extra Logging Settings->Extra tags for logging. Esto registrará mensajes de error adicionales ante problemas.
* En xdrip vaya a Configuración > Interapp Compatibilidad > Datos de Difusión a nivel Local y seleccione ON.
* En xdrip vaya a Configuración > Interapp Compatibilidad > Aceptar Tratamientos y seleccione OFF.
* to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xdrip please set `Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps" <https://androidaps.readthedocs.io/en/latest/EN/Configuration/xdrip.html#identify-receiver>`_
* Si usted quiere ser capaz de utilizar AndroidAPS para calibrar, a continuación, en xdrip vaya a Configuración > Interapp Compatibilidad > Aceptar Calibraciones y seleccione ON.  Puede que también desee revisar las opciones en Ajustes > Ajustes Menos Comunes > Ajustes Avanzados de Calibración.

.. image:: ../images/fsl2pic7.jpg
  :alt: registro de xDrip+ LibreLink
  
.. image:: ../images/fsl2pic7a.jpg
  :alt: xDrip+ registro
  #
Paso 3: Iniciar el sensor
==================================================

En xDrip+ inicie el sensor con "Iniciar Sensor" y "hoy no". 

De hecho, esto no iniciará ningún sensor de Libre2 o interactuará con ellos en ningún caso. This is simply to indicate xDrip+ that a new sensor is delivering blood sugar levels. Si está disponible, introduzca dos valores capilares para la calibración inicial. Ahora los valores de glucosa en sangre deben ser mostrados en xDrip+ cada 5 minutos. Se omiten los valores, por ejemplo. porque estabas demasiado lejos de tu teléfono, no se cargarán los valores.

Paso 4: Configurar AndroidAPS
==================================================
* En AndroidAPS vaya a Config Builder > Fuente de BG y compruebe 'xDrip+' 
* If AndroidAPS does not receive BG values when phone is in airplane mode, use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html#identifiziere-empfanger>`_.

Until now, using Libre 2 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within SMB algorithm. Los valores de BG de Libre 2 no son lo suficientemente estables para usarlo de forma segura. Consulte ' Suavizar los datos de glucosa en sangre <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ para más detalles.

Consejos y solución de problemas
==================================================

La conectividad es extraordinariamente buena. Con la excepción de los teléfonos móviles Huawei, todos los teléfonos inteligentes actuales parecen funcionar bien. La reconexión en caso de pérdida de conexión es fenomenal. The connection can break off if the mobile phone is in the pocket opposite the sensor or if you are outdoors. Cuando estoy en jardinería, coloco mi teléfono en el lado del sensor de mi cuerpo. En las habitaciones, donde el Bluettooth se propaga por las refecciones, no se deben producir problemas. Si tiene problemas de conectividad, por favor pruebe otro teléfono.

Técnicamente, el valor de azúcar en sangre actual se transmite a xDrip+ cada minuto. Un filtro promedio ponderado calcula un valor suavizado en los últimos 25 minutos. Esto es obligatorio. Las curvas de aspecto liso y el lazo que los resultados son excelentes. The raw values on which the alarms are based jitter a little more, but correspond to the values that the reader also displays. In addition, the raw values can be displayed in the xDrip+ graph in order to be able to react in time to rapid changes. Please switch on Less Common Settings > Advanced Settings for Libre2 > "show Raw values" and "show Sensors Infos". Then the raw values are additionally displayed as small white dots and additional sensor infos are available in the System menu.

.. imagen:: ../images/fsl2pic8.jpg
  :alt: xDrip+ configuración avanzada Libre 2
  
.. imagen:: ../images/fsl2pic9.jpg
  :alt: xDrip+ pantalla de inicio con datos en bruto
  
The sensor runtime is fixed to 14 days. The 12 extra hours of Libre1 no longer exist. xDrip+ shows additional sensor information after enabling Avanced Settings for Libre2 > "show Sensors Infos" in the system menu like the starting time. The remaining sensor time can also be seen in the patched LibreLink app. Either in the main screen as remaining days display or as the sensor start time in the three-point menu->Help->Event log under "New sensor found".

.. image:: ../images/fsl2pic10.jpg
  :alt: Libre 2 hora de inicio
  
En conjunto, es uno de los sistemas de MCG más pequeños del mercado. Small, no transmitter necessary and mostly very accurate values without fluctuations. After approx. 12 hours running-in phase with deviations of up to 30 mg/dL the deviations are typical smaller than 10 md/dL. Best results at the rear orbital arm, other setting points with caution! No need to set a new sensor one day ahead for soaking. That would disturbe the internal leveling mechanism.

There seem to be bad sensors from time to time, which are far away from the blood values. It stays that way. These should be immediately replaced.

If the sensor moved a little bit on the skin or is lifted somehow this can cause bad results. The filament which sits in the tissue is a little bit pulled out of the tissue and will measure different results then. Mostly probabaly you will see jumping values in xDrip+. Or the difference to the bloody values change. Please replace the sensor immediately! The results are inaccurate now.

A sensor exchange takes place on-the-fly: Set new sensor shortly before activation. As soon as xDrip+ receives no more data from the old sensor, start the new sensor with the patched app. After one hour new values should appear automatically in xDrip+. 

If not, please check the phone settings and proceed as with the first start. You have no time limit. Try to find the correct seetings. No need to immediately replace the sensor before you tried different combinations. The sensors are robust and try permanently to establish a connection. Please take your time. In most cases you accidentially changed one setting which causes now problems. 

Once successful please select "Sensor Stop" and "Delete calibration only" in xDrip. This indicates for xDrip+ that a new sensor is releasing blood sugar levels and the old calibrations are no longer valid and therefore have to be deleted. No real interaction is done with the Libre2 sensor here! You do not need to start the sensor in xDrip.

.. image:: ../images/fsl2pic11.jpg
  :alt: xDrip+ missing data when changing Libre 2 sensor
  
You can calibrate the Libre2 with an offset of plus/minus 20 mg/dL (intercept), but no slope. To be on the safe side, calibrate every 24 - 48 hours. The values are accurate up to the end of the sensor and do not jitter as with the Libre1. However, if the sensor is completely off, this will not change. The sensor should then be replaced immediately.

The Libre2 sensors contain plausibility checks to detect bad sensor values. As soon as the sensor moves on the arm or is lifted slightly, the values may start to fluctuate. The Libre2 sensor will then shut down for safety reasons. Unfortunately, when scanning with the App, additional checks are made. The app can deactivate the sensor even though the sensor is OK. Currently the internal test are too strict. I have completely stopped scanning and haven't had a failure since then.

In other `time zones <../Usage/Timezone-traveling.html>`_ there are two strategies for looping: Either 

1. leave the smartphone time unchanged and shift the basal profile (smartphone in flight mode) or 
2. delete the pump history and change the smartphone time to local time. 

Method 1. is great as long as you don't have to set a new Libre2 sensor on-site. If in doubt, choose method 2., especially if the trip takes longer. If you set a new sensor, the automatic time zone must be set, so method 1. would be disturbed. Please check before, if you are somewhere else, you can run otherwise fast into problems.

Besides the patched app the new Droplet transmitter or (soon available) the new OOP algorithm of xDrip+ can be used to receive blood sugar values. MM2 and blucon do NOT work so far.
