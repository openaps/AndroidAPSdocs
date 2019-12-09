Dexcom G5
**************************************************
Si se utiliza G5 con xdrip+
==================================================
* Si todavía no se ha configurado, descargue `xdrip <https://github.com/NightscoutFoundation/xDrip>` _ y siga las instrucciones en nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>` _.
* En xdrip vaya a Configuración > Interapp Compatibilidad > Datos de Difusión a nivel Local y seleccione ON.
* En xdrip vaya a Configuración > Interapp Compatibilidad > Aceptar Tratamientos y seleccione OFF.
* Si usted quiere ser capaz de utilizar AndroidAPS para calibrar, a continuación, en xdrip vaya a Configuración > Interapp Compatibilidad > Aceptar Calibraciones y seleccione ON.  Puede que también desee revisar las opciones en Ajustes > Ajustes Menos Comunes > Ajustes Avanzados de Calibración.
* Seleccione xdrip en ConfigBuilder (seteos en AndroidAPS).
* Si AAPS no recibe valores de glucosa, cuando el teléfono está en modo avión el uso de `Identificar receptor`, tal como se describe en [xDrip+ configuración de página](../Configuración/xdrip.md).

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
* Select Dexcom App (patched) in ConfigBuilder (setting in AndroidAPS).
* Si desea utilizar xDrip alarmas a través de la difusión local: en xDrip menú hamburguesa > ajustes > ajustes de hardware de origen de datos > 640G /EverSense.
