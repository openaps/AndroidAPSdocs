Dexcom G5
**********
If using G5 with xdrip+
===========================
* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_.
* No xdrip ir a configurações > Interapp Compatibility > Broadcast Data Locally and select ON.
* No xdrip ir a configurações> Interapp Compatibility > Accept Treatments e seleccionar OFF.
* Se você quiser utilizar AndoidAPS para calibrar no xdrip seleccionar Settings > Interapp Compatibility > Accept Calibrations e seleccione ON.  Também poderá querer rever as opções em Settings > Less Common Settings > Advanced Calibration Settings.
* Seleccione xdrip no ConfigBuilder (configuração em AndroidAPS).
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on [xDrip+ settings page](../Configuration/xdrip.md).

If using G5 with patched Dexcom app
=========================================================
* Download the apk from `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, and choose the version that fits your needs (mg/dl or mmol/l version, G5).

   * Folder 2.3 is for users of AndroidAPS 2.3, folder 2.4 for users of AAPS 2.5.
   * Open https://play.google.com/store/search?q=dexcom%20g5 on your computer. Region will be visible in URL.
   
   .. image:: ../images/DexcomG5regionURL.PNG
     :alt: Region in Dexcom G5 URL

* Pare o sensor e desinstale a app original Dexcom, se ainda não o fez.
* Instale a apk que descarregou
* Inicie sensor
* Select Dexcom App (patched) in ConfigBuilder (setting in AndroidAPS).
* If you want to use xDrip alarms via local broadcast: in xDrip hamburger menu > settings > hardware data source > 640G /EverSense.
