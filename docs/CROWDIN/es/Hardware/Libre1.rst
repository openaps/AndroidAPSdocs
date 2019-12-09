Freestyle libre 1
**************************************************

Para utilizar su libre como un CGM que obtiene nuevos valores de BG cada 5 minutos, primero tiene que comprar un adaptador NFC a Bluetooth como:

* MiaoMiao-Lector `https: //www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blukon Nightrider `https: //www.ambrosiasys.com/howit <https://www.ambrosiasys.com/howit>`_
* BlueReader `https: //bluetoolz.de/blueorder/#home <https://bluetoolz.de/blueorder/#home>`_
* Sony Smartwatch 3 (SWR50) como herramienta de lectura `https: //github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

Hasta ahora, usando Libre 1 como fuente BG usted no puede activar 'Habilitar SMB siempre' y 'Habilitar SMB después de los carbohidratos' dentro del algoritmo SMB. Los valores de BG de Libre 1 no son lo suficientemente estables para usarlo de forma segura. See `Smoothing blood glucose data <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ for more details.

Si utiliza xdrip
==================================================
* Si todavía no ha configurado, descargue xdrip y siga las instrucciones en `LimiTTEer <https://github.com/JoernL/LimiTTer>`_,  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_ or `BlueReader <https://unendlichkeit.net/wordpress/?p=680&lang=en>`_ (`Hardware <https://bluetoolz.de/wordpress/>`_).
* In xdrip go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
* If you want to be able to use AndroidAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON.  You may also want to review the options in Settings > Less Common Settings > Advanced Calibration Settings.
* Select xdrip in ConfigBuilder (setting in AndroidAPS).
* Para los valores de xDrip+ con capturas de pantalla, consulte la sección `xDrip+ página de ajustes <../Configuration/xdrip.html>`__. Hay una parte para los valores básicos de xDrip+ y para los valores de Freestyle Libre xDrip+.
* Si AAPS no recibe los valores de BG cuando el teléfono está en el modo de avión, utilice `Identificar receptor', como se describe en la página 'xDrip+ ajustes <../Configuration/xdrip.html>`_.

Si utiliza Glimp
==================================================
* Si aún no se ha configurado, descargue Glimp y siga las instrucciones en `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_.
* Seleccionar Glimp en ConfigBuilder (ajustes de AndroidAPS).
