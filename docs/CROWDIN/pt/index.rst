Bem-vindo à documentação do AndroidAPS
==================================================

AndroidAPS is an open source app for people living with insulin-dependent diabetes that acts as an artificial pancreas system (APS) on Google Android smartphones. The main components are different openAPS software algorithms which aim to do what a living pancreas does: keeping blood sugar levels within healthy limits by using automated insulin dosing (AID). Additionally, you need at least a supported and FDA/CE approved insulin pump and continuous glucose meter. 

The app does NOT use self-learning artificial intelligence. Instead, the calculations of AndroidAPS are based on the individual dosage algorithm and carbohydrate intake the user manually puts into their treatments profile, but they are verified by the system for safety reasons. 

The app is not provided in Google Play - you have to build it from source code by yourself for legal reasons.

The main components are:

.. image:: images/modules-female.png
  :alt: Componentes

Para mais detalhes, leia aqui.

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Guia de Introdução

   Segurança primeiro <./Getting-Started/Safety-first.rst>
   What is a closed loop system <./Getting-Started/ClosedLoop.rst>
   What is a closed loop system with AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Docs updates & changes <./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: What do I need? 

   Módulo <./Module/module.rst>
   Sample Setup <./Getting-Started/Sample-Setup.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Como Instalar AndroidAPS

   Construindo o APK <./Installing-AndroidAPS/Building-APK.md>
   Actualizar para uma nova versão ou branch <./Installing-AndroidAPS/Update-to-new-version.md>
   Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.rst>
   Install git <./Installing-AndroidAPS/git-install.rst>
   Troubleshooting Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
   Release notes <./Installing-AndroidAPS/Releasenotes.rst>
   Branch Dev <./Installing-AndroidAPS/Dev_branch.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Configuração do Componente

   CGM/FGM <./Configuration/BG-Source.rst>
   xDrip Settings <./Configuration/xdrip.md>
   Bombas de Insulina<./Hardware/pumps.rst>
   Telefones <./Hardware/Phoneconfig.rst>
   Configuração do Nightscout <./Installing-AndroidAPS/Nightscout.md>
   Smartwatch  <./Hardware/Smartwatch.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Configuração

   Config builder <./Configuration/Config-Builder.md>
   Preferences <./Configuration/Preferences.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Uso AndroidAPS

   Ecrãs do AndroidAPS <./Getting-Started/Screenshots.md>
   Objectives <./Usage/Objectives.rst>
   Recursos OpenAPS <./Usage/Open-APS-features.md>   
   COB calculation <./Usage/COB-calculation.rst>
   Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>
   Troca de Perfil <./Usage/Profiles.md>
   Alvos-Temporários <./Usage/temptarget.md>   
   Extended carbs <./Usage/Extended-Carbs.rst>
   Automation <./Usage/Automation.rst>
   Careportal (discontinued) <./Usage/CPbefore26.rst>
   Open Humans Uploader <./Configuration/OpenHumans.rst>
   Automation with 3rd party apps <./Usage/automationwithapp.md>
   Android auto <./Usage/Android-auto.md>  

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Dicas Gerais

   Crossing timezones with pumps <./Usage/Timezone-traveling.md>
   Aceder a registos <./Usage/Accessing-logfiles.md>
   Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Exportar/Importar Configurações <./Usage/ExportImportSettings.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS para crianças

   Remote monitoring <./Children/Children.rst>
   SMS commands <./Children/SMS-Commands.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Resolução de Problemas
  
   Troubleshooting <./Usage/troubleshooting.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Perguntas Frequentes (FAQ) 

   Perguntas Frequentes <./Getting-Started/FAQ.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Glossário

   Glossário <./Getting-Started/Glossary.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Onde ir para obter ajuda 

   Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>
   Where to go for help <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Docs updates & changes <./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: For Clinicians

   Para Clínicos <./Resources/clinician-guide-to-AndroidAPS>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Como ajudar

   Como ajudar <./Getting-Started/How-can-help.md>
   How to translate the app and docs <./translations.md>
   How to edit the docs <./make-a-PR>


.. note:: 
	**Disclaimer And Warning**

	* All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AndroidAPS at your own risk, and do not use the information or code to make medical decisions.

	* Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.

	* All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_
