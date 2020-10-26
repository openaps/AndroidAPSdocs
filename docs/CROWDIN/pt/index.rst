Bem-vindo à documentação do AndroidAPS
==================================================

AndroidAPS is an open source app for people living with insulin-dependent diabetes that acts as an artificial pancreas system (APS) on Google Android smartphones. The main components are different openAPS software algorithms which aim to do what a living pancreas does: keeping blood sugar levels within healthy limits by using automated insulin dosing (AID). Additionally, you need at least a supported and FDA/CE approved insulin pump and continuous glucose meter. 

The app does NOT use self-learning artificial intelligence. Instead, the calculations of AndroidAPS are based on the individual dosage algorithm and carbohydrate intake the user manually puts into their treatments profile, but they are verified by the system for safety reasons. 

The app is not provided in Google Play - you have to build it from source code by yourself for legal reasons.

The main components are:

.. image:: images/modules-female.png
  :alt: Componentes

Para mais detalhes, leia aqui.

Guia de Introdução
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Segurança primeiro <./Getting-Started/Safety-first.rst>
   O que é um sistema Closed Loop (Fechado) <./Getting-Started/ClosedLoop.rst>
   O que é um sistema de Closed Loop (Fechado) com AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Docs updates & changes <./Getting-Started/WikiUpdate.rst>
   
   
O que é preciso 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Módulo <./Module/module.rst>
   Sample Setup <./Getting-Started/Sample-Setup.md>

   
Como Instalar AndroidAPS
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:

   Construindo o APK <./Installing-AndroidAPS/Building-APK.md>
   Actualizar para uma nova versão ou branch <./Installing-AndroidAPS/Update-to-new-version.md>
   Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.rst>
   Install git <./Installing-AndroidAPS/git-install.rst>
   Troubleshooting Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
   Release notes <./Installing-AndroidAPS/Releasenotes.rst>
   Branch Dev <./Installing-AndroidAPS/Dev_branch.md>
   
   
Configuração do Componente
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   CGM/FGM <./Configuration/BG-Source.rst>
   xDrip Settings <./Configuration/xdrip.md>
   Bombas de Insulina<./Hardware/pumps.rst>
   Telefones <./Hardware/Phoneconfig.rst>
   Configuração do Nightscout <./Installing-AndroidAPS/Nightscout.md>
   Smartwatch  <./Hardware/Smartwatch.rst>
   

Configuração 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Config builder <./Configuration/Config-Builder.md>
   Preferences <./Configuration/Preferences.rst>
   
   
Uso AndroidAPS
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
    
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
 
Dicas Gerais 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Crossing timezones with pumps <./Usage/Timezone-traveling.md>
   Aceder a registos <./Usage/Accessing-logfiles.md>
   Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Exportar/Importar Configurações <./Usage/ExportImportSettings.rst>
   

AndroidAPS para crianças
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Remote monitoring <./Children/Children.rst>
   SMS commands <./Children/SMS-Commands.rst>
   

Resolução de Problemas
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Troubleshooting <./Usage/troubleshooting.rst>
   

Perguntas Frequentes (FAQ) 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Perguntas Frequentes <./Getting-Started/FAQ.md>

   
Glossário
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Glossário <./Getting-Started/Glossary.md>
  

Onde ir para obter ajuda 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:

   Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>
   Where to go for help <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Docs updates & changes <./Getting-Started/WikiUpdate.rst>

For Clinicians
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
            
   Para Clínicos <./Resources/clinician-guide-to-AndroidAPS>


Como ajudar
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:

   Como ajudar <./Getting-Started/How-can-help.md>
   How to translate the app and docs <./translations.md>
   How to edit the docs <./make-a-PR>


.. nota:: 
	**Disclaimer And Warning**

	* All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AndroidAPS at your own risk, and do not use the information or code to make medical decisions.

	* Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.

	* All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_
