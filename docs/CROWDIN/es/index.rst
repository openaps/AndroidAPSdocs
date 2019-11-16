Bienvenido a la documentación sobre AndroidAPS
==============================================

AndroidAPS is an open source app for people living with insulin-dependent diabetes that acts as an artificial pancreas system (APS) on Google Android smartphones. Main components are different openAPS software algorithms which aim to do what a living pancreas does: keeping blood sugar levels within healthy limits by using automated insulin dosing (AID). Additionally, you need at least a supported and FDA/CE approved insulin pump and continuous glucose meter. 

The app does NOT use self-learning artificial intelligence. Instead, the calculations of AndroidAPS are based on the individual dosage algorithm and carbohydrate intake the user manually puts into his treatments profile, but they are verified by the system for safety reasons. 

The app is not provided in Google Play - you have to build it from source code by yourself for legal reasons.

Main components are:

.. image:: images/modules-female.png
  :alt: Components

For more details, please read on here.

Guia de inicio
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Seguridad primero <./Getting-Started/Safety-first.rst>
   ¿Qué es el sistema de asa o lazo cerrada? <./Getting-Started/ClosedLoop.rst>
  ¿Qué es el sistema de asa o lazo cerrada con AndroidAPS? <./Getting-Started/WhatisAndroidAPS.rst>  
   Wiki actualizaciones & cambios <./Getting-Started/WikiUpdate.rst>
   
   
¿Qué es lo que necesito?
-----------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Module <./Module/module.rst>

   
Instalando AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Compilando la APK <./Installing-AndroidAPS/Building-APK.md>
   Actualizar a una nueva versión o rama  <./Installing-AndroidAPS/Update-to-new-version.md>
   Instalar git <./Installing-AndroidAPS/git-install.rst>
   Errores comunes en Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
   Notas de la versión <./Installing-AndroidAPS/Releasenotes.rst>
   Dev branch <./Installing-AndroidAPS/Dev_branch.md>
   
   
Componentes para la instalación
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   CGM/FGM <./Configuration/BG-Source.rst>
   Ajustes de xDrip <./Configuration/xdrip.md>
   Bombas <./Hardware/pumps.rst>
   Móviles <./Hardware/Phoneconfig.rst>
   Configuración del Nightscout <./Installing-AndroidAPS/Nightscout.md>
   Reloj inteligente  <./Hardware/Smartwatch.rst>
   

Configuración 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Tabla de Configuración <./Configuration/Config-Builder.md>
   Preferencias <./Configuration/Preferences.md>
   
   
Uso del AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   AndroidAPS screens <./Getting-Started/Screenshots.md>
   Objectives <./Usage/Objectives.rst>
   OpenAPS features <./Usage/Open-APS-features.md>   
   COB calculation <./Usage/COB-calculation.rst>
   Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>
   Profile switch <./Usage/Profiles.md>
   Temp-targets <./Usage/temptarget.md>   
   Extended carbs <./Usage/Extended-Carbs.rst>
   Automation <./Usage/Automation.rst>
  
 
General Hints 
---------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Crossing timezones with pumps <./Usage/Timezone-traveling.md>
   Accessing logfiles <./Usage/Accessing-logfiles.md>
   Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Export/Import Settings <./Usage/ExportImportSettings.rst>
   

AndroidAPS para niños
------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Remote monitoring <./Children/Children.rst>
   SMS commands <./Children/SMS-Commands.rst>
   

Advanced 
----------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Android auto <./Usage/Android-auto.md>
   Automation with 3rd party apps <./Usage/automationwithapp.md>
   

Troubleshooting
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   NS-Client <./Usage/Troubleshooting-NSClient.md>
   Update <./Installing-AndroidAPS/Update-to-new-version.html#troubleshooting>
   Pumps <./FGT/Troubleshootingpumps.rst>


FAQ 
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   FAQ <./Getting-Started/FAQ.md>

   
Glosario
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Glosario <./Getting-Started/Glossary.md>
  

Donde buscar ayuda 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>
   Cómo puedo ayudar <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Wiki updates & changes <./Getting-Started/WikiUpdate.rst>

For Clinicians
------------
.. toctree::
   :maxdepth: 1
   :glob:
            
   For Clinicians <./Resources/clinician-guide-to-AndroidAPS>


How to help
------------
.. toctree::
   :maxdepth: 1
   :glob:

   How to help <./Getting-Started/How-can-I-help.md>
   How to translate the app and wiki <./translations.md>
   How to edit the wiki <./make-a-PR>


.. note:: 
	**Advertencia**

	* Toda la información y el código descrito aquí solo es de carácter informativo y de educación. Actualmente Nightscout no dispone de HIPAA privacy compliance. Use Nightscout y AndroidAPS bajo su responsabilidad, no use esta información para o código para tomar decisiones médicas.

	* El uso del código de github.com no tiene garantía o soporte formal de ningún tipo. Por favor revise el repositorio de Licencia para más detalles.

	* Todos los productos y nombres de compañias, marcas, servicios, marcas registradas y servicios registrados son propiedad de sus respectivos tenedores. Su uso aquí es informativo y no implica afiliación o pago por ello.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_
