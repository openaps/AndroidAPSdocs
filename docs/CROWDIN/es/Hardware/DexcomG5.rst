Dexcom G5
**************************************************
Si se utiliza G5 con xdrip+
==================================================
* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_.
* In xdrip go to Settings > Inter-app settings > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Inter-app settings > Accept Treatments and select OFF.
* Si usted quiere ser capaz de utilizar AndroidAPS para calibrar, a continuación, en xdrip vaya a Configuración > Interapp Compatibilidad > Aceptar Calibraciones y seleccione ON.  Puede que también desee revisar las opciones en Ajustes > Ajustes Menos Comunes > Ajustes Avanzados de Calibración.
* Seleccione xdrip en ConfigBuilder (seteos en AndroidAPS).
* If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.md>`_ .

Si utiliza G5 con la aplicación Dexcom parcheada
==================================================
* Descargar el apk desde `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, y elegir la versión que más se adapte a sus necesidades (mg/dl o mmol/l versión, G5).

  * Carpeta 2.3 es para los usuarios de AndroidAPS 2.3, carpeta 2.4 para los usuarios de la AAPS 2.5.
  * Abrir https://play.google.com/store/search?q=dexcom%20g5 en tu ordenador. La región estará visible en el URL.

   .. imagen:: ../images/DexcomG5regionURL.PNG
     :alt: Region en el URL Dexcom G5

* Detener el sensor y desinstalar el app de Dexcom original, si no lo ha hecho ya.
* Instalar el apk descargado
* Iniciar Sensor
* Seleccione la aplicación Dexcom (parchada) en ConfigBuilder (seteos en AndroidAPS).
* Si desea utilizar xDrip alarmas a través de la difusión local: en xDrip menú hamburguesa > ajustes > ajustes de hardware de origen de datos > 640G /EverSense.
