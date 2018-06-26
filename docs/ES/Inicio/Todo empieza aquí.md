
Bienvenido a la documentación AndroidAPS
==============================================

**Qué es AndroidAPS?**

AndroidAPS es una app que puede comunicar las bombas de insulina con bluetooth y ejecuta una versión del algoritmo “oref0” de OpenAPS.

** Objetivos principales **

* App modular que sea usable para añadir más módulos sin tocar el resto de código 
* App que permita la localización
* App que permita la fácil selección de lo que queremos que la apk final
* App que permita lazo abierto y cerrado de APS
* App donde puedas ver cómo funciona APS: los parámetros de entrada, los resultados y las decisiones que toma. 
* Que permita añadir más algoritmos y permita usuario decidir cuál usar
* App independiente del driver de la bomba y que contenga una bomba virtual que permita al usuario testear con seguridad APS
* App con integración con Nightscout
* App en la que sea posible añadir o eliminar limitaciones para seguridad del usuario
* Todo en uno-app que necesitas para manejar la diabetes tipo 1 con APS y Nightscout


**Qué necesitas para empezar:**

* Teléfono Android 5.0 o superior. Revisar esta `_lista <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`
* Una app que reciba datos de tu MCG: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://github.com/jamorham/xDrip-plus>`_, `Glimp <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_ or `600SeriesAndroidUploader <https://github.com/pazaan/600SeriesAndroidUploader>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ itself
* `Nightscout <https://github.com/nightscout/cgm-remote-monitor>`_ 0.10.2 o posterior
* Bomba de insulina compatible: Dana-R, Dana-RS o Accu-Check Combo
* Un monitor continuo de glucosa (MCG): Dexcom G4/G5, Freestyle Libre, Eversense o Medtronic Guardian


.. note:: 
	**Disclaimer And Warning**

	* All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AndroidAPS at your own risk, and do not use the information or code to make medical decisions.

	* Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.

	* All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_.
