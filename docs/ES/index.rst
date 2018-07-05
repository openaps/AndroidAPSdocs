Bienvenido a la documentación AndroidAPS
==============================================

**Qué es AndroidAPS?**

AndroidAPS es una app que puede comunicar las bombas de insulina con bluetooth y ejecuta una versión del algoritmo “oref0” de OpenAPS.

**Objetivos principales**

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


**Qué necesitas para empezar**

* Teléfono Android 5.0 o superior. Revisar esta [lista](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing)
* Una app que reciba datos de tu MCG: [xDrip](http://stephenblackwasalreadytaken.github.io/xDrip/) / [xDrip+](https://github.com/jamorham/xDrip-plus), [Glimp](http://www.nightscout.info/wiki/welcome/nightscout-for-libre) o [600SeriesAndroidUploader](https://github.com/pazaan/600SeriesAndroidUploader)
* [AndroidAPS](https://github.com/MilosKozak/AndroidAPS) app
* [Nightscout](https://github.com/nightscout/cgm-remote-monitor) 0.10.2 o posterior
* Bomba de insulina compatible: Dana-R, Dana-RS o Accu-Check Combo
* Un monitor continuo de glucosa (MCG): Dexcom G4/G5, Freestyle Libre, Eversense o Medtronic Guardian

**Advertencia**

* Toda la información y el código descrito aquí solo es de carácter informativo y de educación. Actualmente Nightscout no dispone de HIPAA privacy compliance. Use Nightscout y AndroidAPS bajo su responsabilidad, no use esta información para o código para tomar decisiones médicas.

* El uso del código de github.com no tiene garantía o soporte formal de ningún tipo. Por favor revise el repositorio de Licencia para más detalles.

* Todos los productos y nombres de compañias, marcas, servicios, marcas registradas  y servicios registrados  son propiedad de sus respectivos tenedores. Su uso aquí es informativo y no implica afiliación o pago por ello. 

NOTA- este proyecto no tiene asociación o contraprestación alguna por parte de: [SOOIL](http://www.sooil.com/eng/), [Dexcom](http://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care]( http://www.accu-chek.com/).

Inicio
------------
.. toctree::
   :maxdepth: 2
   :glob:
   
   Teléfonos </ES/inicio/telefonos.md>
   Pantallazos </ES/inicio/pantallazos.md>
   Opciones de Bombas de insulina </ES/inicio/bombas.md>
   Futuros controladores de bombas </ES/inicio/futurosbombas.md>
   La seguridad primero </ES/inicio/seguridad.md>
   Glosario </ES/inicio/glosario.md>
   Cómo puedo ayudar </ES/inicio/ayudar.md>

Instalando AndroidAPS
------------
.. toctree::
   :maxdepth: 2
   :glob:
   
   Compilando la APK </ES/instalando/install.md>
   Nightscout </ES/instalando/nightscout.md>
   Actualizar a una nueva versión </ES/instalando/compilando.md>

Configuración
------------
.. toctree::
   :maxdepth: 2
   :glob:
   
   Bomba Accu Check Combo </ES/configuracion/combo.md>
   Conf Builder </ES/configuracion/configbuilder.md>
   Fuente de datos Glucemia </ES/configuracion/fuentes-glucemia.md>
   Detección de sensibilidad y COB </ES/configuracion/sens.md>
   Preferencias </ES/configuracion/preferencias.md>
   Watchfaces </ES/configuracion/watchfaces.md>
   
Uso
------------
.. toctree::
   :maxdepth: 2
   :glob:
   
   Acceder a los logs </ES/uso/logs.md>
   Carbohidratos extendidos </ES/uso/extcarbs.md>
   Comandos SMS </ES/uso/sms.md>
   Funcionalidades OpenAPS </ES/uso/openaps.md>
   Objetivos </ES/uso/objetivos.md>
   Perfiles </ES/uso/perfiles.md>
   Rama Dev </ES/uso/desarrollo.md>
   Trucos para uso básico de Accu Check Combo </ES/uso/combo.md>
   Trucos y consejos </ES/uso/truncos.md>
   
Donde buscar ayuda
-----------

**Conectarse con otros usuarios AndroidAPS**

Quién está usando AndroidAPS? Añádete a tí mismo al [mapa aquí](https://www.zeemaps.com/map?group=2617973) pinchando en  Additions > Add Marker - Simple. Escoge la opción lo tengo!" o la naranja para "lo quiero". Añade tu nombre como lo tienes en Facebook y en descripción información extra como  bomba,MCG y tu clínica o endo si es pro DIY PA. Puedes añadir tambien la ciudad no tienes por qué poner tu dirección actual.

**Asegúrate de unirte al grupo AndroidAPS en Facebook!**

[Grupo Facebook](https://www.facebook.com/groups/1900195340201874/) si quieres contactar con alguien con cuestiones específicas.

**Lecturas recomedadas sobre lazos cerrados "hazlo tú mismo" o DIY PA**

[http://hackaday.com/2016/12/19/closing-the-loop-on-an-artificial-pancreas/](http://hackaday.com/2016/12/19/closing-the-loop-on-an-artificial-pancreas/)

[http://www.diabettech.com/artificial-pancreas/looping-do-i-choose-openaps-or-loop-either-way-wearenotwaiting/](http://www.diabettech.com/artificial-pancreas/looping-do-i-choose-openaps-or-loop-either-way-wearenotwaiting/)

[http://www.healthline.com/diabetesmine/dana-rs-insulin-pump-embraces-wearenotwaiting](http://www.healthline.com/diabetesmine/dana-rs-insulin-pump-embraces-wearenotwaiting)

[https://btvnovinite.bg/video/bulgaria/dnes-e-svetovnijat-den-za-borba-s-diabeta.html](https://btvnovinite.bg/video/bulgaria/dnes-e-svetovnijat-den-za-borba-s-diabeta.html)

[https://www.ndr.de/fernsehen/sendungen/visite/Diabetes-Blutzucker-automatisch-einstellen,visite13788.html](https://www.ndr.de/fernsehen/sendungen/visite/Diabetes-Blutzucker-automatisch-einstellen,visite13788.html)
