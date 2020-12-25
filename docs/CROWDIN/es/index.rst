Bienvenido a la documentación AndroidAPS
==================================================

AndroidAPS es una aplicación de código abierto para las personas que viven con diabetes insulino-dependiente, que actúa como un sistema de páncreas artificial (APS) en los teléfonos inteligentes con Google Android. The main components are different openAPS software algorithms which aim to do what a living pancreas does: keeping blood sugar levels within healthy limits by using automated insulin dosing (AID). Además, necesita al menos una bomba de insulina sopada y aprobada por la FDA/CE y un medidor de glucosa continuo. 

La aplicación NO utiliza inteligencia artificial de autoaprendizaje. Instead, the calculations of AndroidAPS are based on the individual dosage algorithm and carbohydrate intake the user manually puts into their treatments profile, but they are verified by the system for safety reasons. 

La aplicación no se proporciona en Google Play - tienes que construirla a partir del código fuente por ti mismo por razones legales.

The main components are:

.. imagen:: ./images/modules-female.png
  :alt: Componentes

Para más detalles, por favor lee aquí.

Primeros Pasos
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   La seguridad primero <./Getting-Started/Safety-first>
   What is a closed loop system? <./Getting-Started/ClosedLoop.rst>
   ¿Qué es un sistema de lazo cerrado con AndroidAPS? <./Getting-Started/WhatisAndroidAPS.rst>  
   Actualizaciones y cambios en documentos <./Getting-Started/WikiUpdate.rst>
   
   
What do I need? 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Módulo <./Module/module.rst>
   Sample Setup <./Getting-Started/Sample-Setup.md>

   
Instalando AndroidAPS
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:

   Compilando la APK <./Installing-AndroidAPS/Building-APK.md>
   Actualice a una nueva versión o rama<./Installing-AndroidAPS/Update-to-new-version.md>
   Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.rst>
   Instale git <./Installing-AndroidAPS/git-install.rst>
   Resolución de problemas de Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
   Notas de la versión <./Instalación-AndroidAPS/Releasenotes.rst>
   La rama de desarrollo <./Installing-AndroidAPS/Dev_branch.md>
   
   
Configuración de componentes
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   MCG/FGM <./Configuration/BG-Source.rst>
   Configuración xDrip <./Configuration/xdrip.md>
   Bombas <./Hardware/pumps.rst>
   Teléfonos <./Hardware/Phoneconfig.rst>
   Configuración de Nightscout <./Installing-AndroidAPS/Nightscout.md>
   Relojes <./Hardware/Smartwatch.rst>
   

Configuración 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Creador de configuración <./Configuration/Config-Builder.md>
   Preferences <./Configuration/Preferences.rst>
   
   
Utilización de AndroidAPS
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Pantallas AndroidAPS <./Getting-Started/Screenshots.md>
   Objetivos <./Usage/Objectives.rst>
   Características de OpenAPS <./Usage/Open-APS-features.md>   
   Cálculo de COB <./Usage/COB-calculation.rst>
   Detección de sensibilidad <./Configuration/Sensitivity-detection-and-COB.md>
   Conmutador de perfil <./Usage/Profiles.md>
   Objetivos-temporales <./Usage/temptarget.md>   
   Carbohidratos extendidos <./Usage/Extended-Carbs.rst>
   Automatización <./Usage/Automation.rst>
   Careportal (discontinued) <./Usage/CPbefore26.rst>
   Open Humans Uploader <./Configuration/OpenHumans.rst>
   Automatización con aplicaciones de terceros <./Usage/automationwithapp.md>
   Android automático <./Usage/Android-auto.md>  
 
Consejos Generales 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Cruzar zonas horarias con bombas <./Usage/Timezone-traveling.md>
   Acceder a los logs <./Usage/Accessing-logfiles.md>
   Sugerencias Combo Accu-Chek para el uso básico <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Exportar/Importar valores <./Usage/ExportImportSettings.rst>
   

AndroidAPS para niños
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Supervisión remota <./Children/Children.rst>
   Comandos SMS <./Children/SMS-Commands.rst>
   

Solución de problemas
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Resolución de problemas <./Usage/troubleshooting.rst>
   

Preguntas frecuentes 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Preguntas frecuentes <./Getting-Started/FAQ.md>

   
Glosario
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Glosario <./Getting-Started/Glossary.md>
  

Donde buscar ayuda 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:

   Recursos útiles para leer antes de empezar <./Where-To-Go-For-Help/Background-reading.md>
   Cómo puedo ayudar <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Actualizaciones y cambios en documentos <./Getting-Started/WikiUpdate.rst>

Para Los Médicos
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
            
   Para los clínicos <./Resources/clmédica-guide-to-AndroidAPS>


Cómo ayudar
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:

   Cómo se puede ayudar <./Getting-Started/How-can-I-help.md>
   Cómo traducir la aplicación y documentos <./translations.md>
   Cómo editar los documentos <./make-a-PR>


.. note:: 
	**Advertencia**

	* Toda la información y el código descrito aquí solo es de carácter informativo y de educación. Actualmente Nightscout no dispone de HIPAA privacy compliance. Use Nightscout y AndroidAPS bajo su responsabilidad, no use esta información para o código para tomar decisiones médicas.

	* El uso del código de github.com no tiene garantía o soporte formal de ningún tipo. Por favor revise el repositorio de Licencia para más detalles.

	* Todos los productos y nombres de compañias, marcas, servicios, marcas registradas y servicios registrados son propiedad de sus respectivos tenedores. Su uso aquí es informativo y no implica afiliación o pago por ello.

	Tenga en cuenta que este proyecto no tiene ninguna relación con y no está respaldado por: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_
