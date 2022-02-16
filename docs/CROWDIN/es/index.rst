Bienvenido a la documentación AndroidAPS
==================================================

AndroidAPS es una aplicación de código abierto para las personas que viven con diabetes insulino-dependiente, que actúa como un sistema de páncreas artificial (APS) en los teléfonos inteligentes con Google Android. Los componentes principales son los diferentes algoritmos de software de OpenAPS, que tienen como objetivo hacer lo mismo que un páncreas vivo: mantener los niveles de glucosa en sangre dentro de unos límites saludables, utilizando dosis de insulina automatizada (AID). Adicionalmente, necesitas disponer de una bomba de insulina soportada y aprobada por la FDA/CE, así como un medidor contínuo de glucosa (MCG). 

La aplicación NO utiliza inteligencia artificial de autoaprendizaje. En su lugar, los cálculoss de AndroidAPS se basan en el algoritmo de dosificación individual y en la ingesta de carbohidratos que el usuario configura manualmente en su perfil de tratamiento, que son verificados por el sistema por motivos de seguridad. 

La aplicación no se proporciona en Google Play - tienes que construirla a partir del código fuente por ti mismo por razones legales.

Los componentes principales son

.. imagen:: ./images/modules-female.png
  :alt: Componentes

Para más detalles, por favor, lee aquí.

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Cambiar idioma

   Cambiar idioma <./changelanguage.rst>

.. _getting-started:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Empezando

   Primero, la seguridad <./Getting-Started/Safety-first>
   Qué es un sistema de lazo cerrado <./Getting-Started/ClosedLoop.rst>
   ¿Qué es un sistema de lazo cerrado con AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Opciones de bombas de insulina <./Getting-Started/Pump-Choices.md>
   Actualizaciones y cambios en documentos <./Getting-Started/WikiUpdate.rst>

.. _what-do-i-need:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: ¿Qué necesito? 

   Módulo <./Module/module.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Cómo instalar AndroidAPS

   Compilando la APK <./Installing-AndroidAPS/Building-APK.md>
   Actualizar a una nueva versión o rama<./Installing-AndroidAPS/Update-to-new-version.md>
   Hints and Checks after update to AAPS 3.0<./Installing-AndroidAPS/update3_0.md>
   Comprobaciones después de actualizar a AAPS 2.7 <./Installing-AndroidAPS/update2_7.rst>
   Instale git <./Installing-AndroidAPS/git-install.rst>
   Resolución de problemas de Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
   Notas de la versión <./Instalación-AndroidAPS/Releasenotes.rst>
   La rama de desarrollo <./Installing-AndroidAPS/Dev_branch.md>

.. _component-setup:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Configuración de componentes

   MCG/FGM <./Configuration/BG-Source.rst>
   Configuración xDrip <./Configuration/xdrip.md>
   Bombas <./Hardware/pumps.rst>
   Teléfonos <./Hardware/Phoneconfig.rst>
   Configuración de Nightscout <./Installing-AndroidAPS/Nightscout.md>
   Relojes <./Hardware/Smartwatch.rst>

.. _configuration:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Configuración

   Creador de configuración <./Configuration/Config-Builder.md>
   Preferencias <./Configuration/Preferences.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Uso de AndroidAPS

   Pantallas de AndroidAPS <./Getting-Started/Screenshots.md>
   Objetivos <./Usage/Objectives.rst>
   Características de OpenAPS <./Usage/Open-APS-features.md>   
   Cálculo de COB <./Usage/COB-calculation.rst>
   Detección de sensibilidad <./Configuration/Sensitivity-detection-and-COB.md>
   Conmutador de perfil <./Usage/Profiles.md>
   Objetivos-temporales <./Usage/temptarget.md>   
   Carbohidratos extendidos <./Usage/Extended-Carbs.rst>
   Automatización <./Usage/Automation.rst>
   Portal de cuidados (descontinuado) <./Usage/CPbefore26.rst>
   Subir datos a Open Humans <./Configuration/OpenHumans.rst>
   Automatización con aplicaciones de terceros <./Usage/automationwithapp.md>
   Android automático <./Usage/Android-auto.md>  

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Consejos Generales 

   Cruzar zonas horarias con bombas <./Usage/Timezone-traveling.md>
   Acceder a los logs <./Usage/Accessing-logfiles.md>
   Sugerencias Combo Accu-Chek para el uso básico <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Exportar/Importar valores <./Usage/ExportImportSettings.rst>
   Modo Ingeniería en xDrip+ <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS para niños

   Supervisión remota <./Children/Children.rst>
   Comandos SMS <./Children/SMS-Commands.rst>
   Ayudante de perfil <./Configuration/profilehelper.rst>
   
.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Resolución de problemas

   Resolución de problemas <./Usage/troubleshooting.rst>
   NSClient <./Usage/Troubleshooting-NSClient.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Preguntas frecuentes

   Preguntas frecuentes <./Getting-Started/FAQ.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Glosario

   Glosario <./Getting-Started/Glossary.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Dónde ir en busca de ayuda 

   Recursos útiles para leer antes de empezar <./Where-To-Go-For-Help/Background-reading.md>
   Cómo puedo ayudar <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Actualizaciones y cambios en documentos <./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Para profesionales médicos

   Para los clínicos <./Resources/clmédica-guide-to-AndroidAPS>


.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Cómo ayudar

   Cómo se puede ayudar <./Getting-Started/How-can-I-help.md>
   Cómo traducir la aplicación y documentos <./translations.md>
   Cómo editar los documentos <./make-a-PR>


.. note:: 
	**Advertencia**

	* Toda la información y el código descrito aquí solo es de carácter informativo y de educación. Actualmente Nightscout no dispone de HIPAA privacy compliance. Use Nightscout y AndroidAPS bajo su responsabilidad, no use esta información para o código para tomar decisiones médicas.

	* El uso del código de github.com no tiene garantía o soporte formal de ningún tipo. Por favor revise el repositorio de Licencia para más detalles.

	* Todos los productos y nombres de compañias, marcas, servicios, marcas registradas y servicios registrados son propiedad de sus respectivos tenedores. Su uso aquí es informativo y no implica afiliación o pago por ello.

	Tenga en cuenta que este proyecto no tiene ninguna relación, ni está respaldado por: `SOOIL <https://www.sooil.com/eng/>`_, `Dexcom <https://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <https://www.accu-chek.com/>`_ o `Medtronic <https://www.medtronic.com/>`_
