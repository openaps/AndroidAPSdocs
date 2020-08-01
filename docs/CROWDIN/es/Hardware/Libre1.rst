Freestyle libre 1
**************************************************

Para utilizar su libre como un CGM que obtiene nuevos valores de BG cada 5 minutos, primero tiene que comprar un adaptador NFC a Bluetooth como:

* MiaoMiao Reader (version 1 or 2) `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blucon Nightrider `https://www.ambrosiasys.com/our-products/blucon/ <https://www.ambrosiasys.com/our-products/blucon/>`_
* Bubble `https://bubbleshop.eu/ <https://bubbleshop.eu/>`_

Additionally it is possible to use a specific watch, the Sony Smartwatch 3 which has an NFC chip which can be enabled and can be used as a NFC collector. However the custom NFC to Bluetooth adapters listed above offer a less complex solution and would be used by the majority of those wanting to use their Libre 1 as a CGM.
* Sony Smartwatch 3 (SWR50) `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

As it currently stands, if using Libre 1 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within the SMB algorithm. Los valores de BG de Libre 1 no son lo suficientemente estables para usarlo de forma segura. Consulte ' Suavizar los datos de glucosa en sangre <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ para más detalles.

If using xDrip+
==================================================
* If not already set up then download xDrip+ and follow instructions on `LimiTTEer <https://github.com/JoernL/LimiTTer>`_,  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_ or `BlueReader <https://unendlichkeit.net/wordpress/?p=680&lang=en>`_ (`Hardware <https://bluetoolz.de/wordpress/>`_).
* In xDrip+ go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xDrip+ go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
* If you want to be able to use AndroidAPS to calibrate then in xDrip+ go to Settings > Interapp Compatibility > Accept Calibrations and select ON.  Puede que también desee revisar las opciones en Ajustes > Ajustes Menos Comunes > Ajustes Avanzados de Calibración.
* Select xDrip+ in ConfigBuilder (setting in AndroidAPS).
* Para los valores de xDrip+ con capturas de pantalla, consulte la sección `xDrip+ página de ajustes <../Configuration/xdrip.html>`__. Hay una parte para los valores básicos de xDrip+ y para los valores de Freestyle Libre xDrip+.
* Si AAPS no recibe los valores de BG cuando el teléfono está en el modo de avión, utilice `Identificar receptor', como se describe en la página 'xDrip+ ajustes <../Configuration/xdrip.html>`_.

Si utiliza Glimp
==================================================
* You will need Glimp version 4.15.57 or newer. Older versions are not supported.
* Si aún no se ha configurado, descargue Glimp y siga las instrucciones en `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_.
* Seleccionar Glimp en ConfigBuilder (ajustes de AndroidAPS).
