Bienvenido a la documentación AndroidAPS
==============================================

**Qué es AndroidAPS?**

AndroidAPS is an app that can communicate with bluetooth-enabled insulin pumps, and runs a version of the OpenAPS "oref0" and "oref1" algorithms.

**Objetivos principales**

* modular app where it is possible and easy to add new modules without touching the rest of the code
* app that allows localization
* app where it is easy to select what will be included in final apk with an easy change and compilation
* app which supports open and closed APS mode
* App donde puedas ver cómo funciona APS: los parámetros de entrada, los resultados y las decisiones que toma
* ability to add more APS algorithms and let the user decide what to use
* app which is independent from a pump driver and contains a "Virtual pump" to allow users to safely play with APS
* App con integración con Nightscout
* app where is easy to add/remove constraints for user safety
* all-in-one app for managing T1D with APS and Nightscout

**Qué necesitas para empezar**

* Teléfono Android 5.0 o superior. Revisar `esta lista <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_
* An app to receive CGM data: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_, `PochTech app <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ or `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ app
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 or later
* A supported pump: Dana-R or Dana-RS Insulin Pump or Accu-Chek Combo (unless you build your own driver for another insulin pump)
* A Continuous Glucose Monitor (CGM) data source: Dexcom G4/G5/G6, Freestyle Libre, Eversense, Medtronic Guardian, PocTech


.. note:: 
	**Advertencia**

	* Toda la información y el código descrito aquí solo es de carácter informativo y de educación. Actualmente Nightscout no dispone de HIPAA privacy compliance. Use Nightscout y AndroidAPS bajo su responsabilidad, no use esta información para o código para tomar decisiones médicas.

	* El uso del código de github.com no tiene garantía o soporte formal de ningún tipo. Por favor revise el repositorio de Licencia para más detalles.

	* Todos los productos y nombres de compañias, marcas, servicios, marcas registradas y servicios registrados son propiedad de sus respectivos tenedores. Su uso aquí es informativo y no implica afiliación o pago por ello.

	NOTA- este proyecto no tiene asociación o contraprestación alguna por parte de: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_.

Inicio
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Safety First <./Getting-Started/Safety-first.md>
   Pantallazos <./Getting-Started/Screenshots.md>
   Phones <./Getting-Started/Phones.md>
   Opciones de Bombas de insulina <./Getting-Started/Pump-Choices.md>
   Futuros controladores de bombas <./Getting-Started/Future-possible-Pump-Drivers.md>
   Sample Setup: Samsung S7, DanaR, Dexcom G5 and Sony Smartwatch <./Getting-Started/Sample-Setup.md>
   FAQ para loopers <./Getting-Started/FAQ.md>
   Glosario <./Getting-Started/Glossary.md>
  
Instalando AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Compilando la APK <./Installing-AndroidAPS/Building-APK.md>
   Update to a new version or branch <./Installing-AndroidAPS/Update-to-new-version.md>
   Release notes <./Installing-AndroidAPS/Releasenotes.md>
   Rama Dev <./Installing-AndroidAPS/Dev-branch.md>
   Nightscout setup <./Installing-AndroidAPS/Nightscout.md>
   
Configuración 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Config Builder <./Configuration/Config-Builder.md>
   BG Source <./Configuration/BG-Source.md>
   DanaR pump <./Configuration/DanaR-Insulin-Pump.md>
   DanaRS pump <./Configuration/DanaRS-Insulin-Pump.md>
   Accu Chek Combo pump <./Configuration/Accu-Chek-Combo-Pump.md>
   Watchfaces <./Configuration/Watchfaces.md>
   Preferencias <./Configuration/Preferences.md>
   Detección de sensibilidad y COB <./Configuration/Sensitivity-detection-and-COB.md>
   
Uso
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Objetivos <./Usage/Objectives.md>
   OpenAPS features <./Usage/Open-APS-features.md>
   Profile switch <./Usage/Profiles.md>
   Temp-Targets <./Usage/temptarget.md>
   Comandos SMS <./Usage/SMS-Commands.md>
   Carbohidratos extendidos <./Usage/Extended-Carbs.md>
   Timezone traveling with pumps <./Usage/Timezone-traveling.md>
   Accessing logfiles <./Usage/Accessing-logfiles.md>
   Smoothing Blood Glucose Data <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   Trucos para uso básico de Accu Check Combo <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   Troubleshooting NSClient <./Usage/Troubleshooting-NSClient.md>

Donde buscar ayuda 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>
   Cómo puedo ayudar <./Where-To-Go-For-Help/Connect-with-other-users.md>

How to help
------------
.. toctree::
   :maxdepth: 1
   :glob:

   How to help <./Getting-Started/How-can-I-help.md>
   How to translate the App <./translations.md>
   How to edit the wiki <./make-a-PR>
