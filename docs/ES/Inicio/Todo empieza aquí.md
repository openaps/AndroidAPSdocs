
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

* Teléfono Android 5.0 o superior. Revisar esta [lista](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing)
* Una app que reciba datos de tu MCG: [xDrip](http://stephenblackwasalreadytaken.github.io/xDrip/) / [xDrip+](https://github.com/jamorham/xDrip-plus), [Glimp](http://www.nightscout.info/wiki/welcome/nightscout-for-libre) o [600SeriesAndroidUploader](https://github.com/pazaan/600SeriesAndroidUploader)
* [AndroidAPS](https://github.com/MilosKozak/AndroidAPS) app
* [Nightscout](https://github.com/nightscout/cgm-remote-monitor) 0.10.2 o posterior
* Bomba de insulina compatible: Dana-R, Dana-RS o Accu-Check Combo
* Un monitor continuo de glucosa (MCG): Dexcom G4/G5, Freestyle Libre, Eversense o Medtronic Guardian


.. nota:: 
	**Advertencia**

	* Toda la información y el código descrito aquí solo es de carácter informativo y de educación. 
	Actualmente Nightscout no dispone de HIPAA privacy compliance. Use Nightscout y AndroidAPS bajo su responsabilidad, 
	no use esta información para o código para tomar decisiones médicas.

	* El uso del código de github.com no tiene garantía o soporte formal de ningún tipo. 
	Por favor revise el repositorio de Licencia para más detalles.

	* Todos los productos y nombres de compañias, marcas, servicios, marcas registradas  y servicios registrados  son propiedad de sus respectivos tenedores. Su uso aquí es informativo y no implica afiliación o pago por ello. 

	NOTA- este proyecto no tiene asociación o contraprestación alguna por parte
	de: [SOOIL](http://www.sooil.com/eng/), [Dexcom](http://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care]( http://www.accu-chek.com/).
