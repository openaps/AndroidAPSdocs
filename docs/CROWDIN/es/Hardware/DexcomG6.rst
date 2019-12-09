Dexcom G6
**************************************************
Lo básico primero
==================================================

* Siga la higiene general de la CGM y establezca la recomendación del sensor ` Aquí <../Hardware/GeneralCGMRecommendation.html>` _.
* Para los transmisores G6 fabricados después del final del otoño de 2018, asegúrese de utilizar una de las ` última versión nightly de xDrip+ <https://github.com/NightscoutFoundation/xDrip/releases>` _. Dichos transmisores tienen un nuevo firmware y la última versión estable de xDrip+ (2019/01/10) no puede tratar con él.

Consejos generales para el bucle con G6
==================================================

Lo que está claro es que el uso del G6 es tal vez un poco más complejo que lo que se sugiere en primer lugar. Para utilizar de manera segura, hay un par de puntos a tener en cuenta: 

* Si está utilizando los datos nativos con el código de calibración en xDrip o Spike, la cosa más segura es no permitir reinicios preventivos del sensor.
* Si debe usar reinicio preventivo, a continuación, asegúrese de insertar una hora del día donde puede observar el cambio y calibrar si es necesario. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

To learn more about the details and reasons for these recommendations read the `complete article <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ published by Tim Street at `www.diabettech.com <http://www.diabettech.com>`_.

If using G6 with xDrip+
==================================================
* The Dexcom G6 transmitter can simultaneously be connected to the Dexcom receiver (or alternatively the t:slim pump) and one app on your phone.
* When using xDrip+ as receiver uninstall Dexcom app first. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
* If you need Clarity and want to profit from xDrip+ alarms use the `patched Dexcom app </Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_ with local broadcast to xDrip+.
* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* Seleccione xdrip en ConfigBuilder (seteos en AndroidAPS).
* Adjust settings in xDrip+ according to `xDrip+ settings page <../Configuration/xdrip.html>`_
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html>`_.

If using G6 with patched Dexcom app
==================================================
* Descargar el apk desde `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, y elegir la versión que más se adapte a sus necesidades (mg/dl o mmol/l versión, G6).

   * Carpeta 2.3 es para los usuarios de AndroidAPS 2.3, carpeta 2.4 para los usuarios de la AAPS 2.5.
   * Abrir https://play.google.com/store/search?q=dexcom%20g6 en tu ordenador. La región estará visible en el URL.
   
   .. image:: ../images/DexcomG6regionURL.PNG
     :alt: Region in Dexcom G6 URL

* Detener el sensor y desinstalar el app de Dexcom original, si no lo ha hecho ya.
* Instalar el apk descargado
* Iniciar Sensor
* Select Dexcom App (patched) in ConfigBuilder (setting in AndroidAPS).
* Si desea utilizar xDrip alarmas a través de la difusión local: en xDrip menú hamburguesa > ajustes > ajustes de hardware de origen de datos > 640G /EverSense.

Troubleshooting G6
==================================================
Dexcom G6 specific troubleshooting
--------------------------------------------------
* Transmitters with serial no. starting with 80 or 81 need at least last stable xDrip version from May 2019 or a newer nightly build.
* Transmitters with serial no. starting with 8G need at least nightly build from July 25th, 2019 or newer.
* xDrip+ and Dexcom app cannot be connected with the transmitter at the same time.
* Wait at least 15 min. between stopping and starting a sensor.
* Do not rewind back time of insertion. Answer question "Did you insert it today?" always with "Yes, today".
* Do not enable "restart sensors" while setting a new sensor
* Do not start new sensor before the following information is shown in Classic Status Page -> G5/G6 status -> PhoneServiceState:

  * Transmitter serial starting with 80 or 81: "Got data hh:mm" (i.e. "Got data 19:04")
  * Transmisor de serie empezando con 8G o 8H: "Obengo la glucosa hh:mm" (es decir, "Obtuviste la glucosa 19:04") o "No hay datos hh:mm" (por ejemplo. "Obtenidos ahora en bruto 19:04")

.. imagen:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip PhoneServiceState

Resolver problemas generales
--------------------------------------------------
General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation.html#Troubleshooting>`_.

Nuevo transmisor con sensor en ejecución
--------------------------------------------------
If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. Se puede encontrar un vídeo en 'https: //youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>` _.


