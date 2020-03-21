Bienvenido a la documentación AndroidAPS
==================================================

AndroidAPS es una aplicación de código abierto para las personas que viven con diabetes insulino-dependiente, que actúa como un sistema de páncreas artificial (APS) en los teléfonos inteligentes con Google Android. Los componentes principales son los diferentes algoritmos del software openAPS que tienen por objetivo hacer lo que un páncreas vivo hace: mantener los niveles de azúcar en la sangre dentro de límites saludables utilizando la dosificación de insulina automatizada (AID). Además, necesita al menos una bomba de insulina sopada y aprobada por la FDA/CE y un medidor de glucosa continuo. 

La aplicación NO utiliza inteligencia artificial de autoaprendizaje. En cambio, los cálculos de AndroidAPS se basan en el algoritmo de dosificación individual y en la ingesta de carbohidratos que el usuario pone manualmente en su perfil de tratamiento, que son verificados por el sistema debido a razones de seguridad. 

La aplicación no se proporciona en Google Play - tienes que construirla a partir del código fuente por ti mismo por razones legales.

Los componentes principales son:

.. imagen:: ./images/modules-female.png
  :alt: Componentes

Para más detalles, por favor lee aquí.

Primeros Pasos
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   La seguridad primero <./Getting-Started/Safety-first>
   Qué es un sistema de lazo cerrado <./Getting-Started/ClosedLoop.rst>
   ¿Qué es un sistema de lazo cerrado con AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Docs updates & changes <./Getting-Started/WikiUpdate.rst>
   
   
Lo que necesitas 
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
   Preferencias <./Configuration/Preferences.md>
   
   
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
   Docs updates & changes <./Getting-Started/WikiUpdate.rst>

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
   How to translate the app and docs <./translations.md>
   How to edit the docs <./make-a-PR>


.. note:: 
	**Advertencia**

	* Toda la información y el código descrito aquí solo es de carácter informativo y de educación. Actualmente Nightscout no dispone de HIPAA privacy compliance. Use Nightscout y AndroidAPS bajo su responsabilidad, no use esta información para o código para tomar decisiones médicas.

	* El uso del código de github.com no tiene garantía o soporte formal de ningún tipo. Por favor revise el repositorio de Licencia para más detalles.

	* Todos los productos y nombres de compañias, marcas, servicios, marcas registradas y servicios registrados son propiedad de sus respectivos tenedores. Su uso aquí es informativo y no implica afiliación o pago por ello.

	Tenga en cuenta que este proyecto no tiene ninguna relación con y no está respaldado por: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_
