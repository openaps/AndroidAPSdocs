Bem-vindo à documentação do AndroidAPS
==================================================

A AndroidAPS é uma aplicação de código aberto para pessoas que vivem com diabetes, insulino dependentes. 
Atua como um sistema de pâncreas artificial em smartphones Google Android . Os principais componentes são diferentes algoritmos de software openAPS que têm como objetivo fazer o que um pâncreas humano faz: manter os níveis de açúcar no sangue dentro de limites saudáveis usando dosagem de insulina automatizada (AID). Adicionalmente, precisará de, pelo menos, um dispositivo de perfusão subcutânea de insulina (vulgarmente conhecida como bomba de insulina) e um medidor contínuo de glicose. 

A aplicação NÃO utiliza inteligência artificial auto-inteligente. Em vez disso, os cálculos do AndroidAPS são baseados no algoritmo de dosagem individual e ingestão de hidratos de carbono que o utilizador coloca manualmente no seu perfil de tratamentos, mas estes são verificados pelo sistema por razões de segurança. 

A app não é fornecida no Google Play Store. Terá de ser cada utilizador a construí-la individualmente a partir de código-fonte por motivos legais.

Os componentes principais são:

.. image:: images/modules-female.png
  :alt: Componentes

Para mais detalhes, leia aqui.

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Alterar idioma

   Alterar idioma <./changelanguage.rst>

.. _Guia de Iniciação:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Guia de Iniciação

   Segurança primeiro <./Getting-Started/Safety-first.rst>
   O que é um sistema Closed Loop (Loop Fechado) <./Getting-Started/ClosedLoop.rst>
   O que é um sistema de Closed Loop (Loop Fechado) com AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Escolha da Bomba / Bombas "compatíveis" <./Getting-Started/Pump-Choices.md>
   Atualizações de Documentos & alterações<./Getting-Started/WikiUpdate.rst>

.. _do-que-preciso:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Do que preciso? 

   Módulo <./Module/module.rst>
   Exemplo de configuração

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Como Instalar a AndroidAPS

   Construindo o APK <./Installing-AndroidAPS/Building-APK.md>
   Actualizar para uma nova versão ou branch <./Installing-AndroidAPS/Update-to-new-version.md>
   Verificações após a atualização para a AAPS 2.7 <./Instalando AndroidAPS/update2_7.rst>
   Instalar o git <./Installing-AndroidAPS/git-install.rst>
   Solução de problemas do Android Studio <./Installing-AndroidAPS/trousoluoting_androidstudio.rst>
   Notas de lançamento <./Installing-AndroidAPS/Releasenotes.md>
   Branch Dev <./Installing-AndroidAPS/Dev_branch.md>

.. _component-setup:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Configuração dos Componentes

   CGM/FGM <./Configuration/BG-Source.md>
   Configurações xDrip+ <./Configuration/xdrip.md>
   Bombas de Insulina<./Hardware/pumps.rst>
   Telefones <./Hardware/Phoneconfig.rst>
   Configuração do Nightscout <./Installing-AndroidAPS/Nightscout.md>
   Smartwatch  <./Hardware/Smartwatch.rst>

.. _configuração:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Configuração

   Configurador<./Configuração/Config-Builder.md>
   Preferências <./Configuration/Preferences.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Utilização da AndroidAPS

   Ecrãs do AndroidAPS <./Getting-Started/Screenshots.md>
   Objetivos <./Usage/Objectives.md>
   Recursos OpenAPS <./Usage/Open-APS-features.md>   
   Cálculo COB <./Usage/COB-calculation.rst>
   Detecção do fator de sensibilidade <./Configuration/Sensitivity-detection-and-COB.md>
   Troca de Perfil <./Usage/Profiles.md>
   Alvos-Temporários <./Usage/temptarget.md>   
   Hidratos de carbono lentos <./Usage/Extended-Carbs.md>
   Automação <./Usage/automation.md>
   Careportal (descontinuado) <./Usage/CPbefore26.rst>
   Open Humans Uploader <./Configuration/OpenHumans.rst>
   Automação com outras apps <./Usage/automationwithapp.md>
   Android auto <./Usage/Android-auto.md>  

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Dicas gerais 

   Troca de fusos horários com bombas de insulina <./Usage/Timezone-traveling.md>
   Aceder a registos <./Usage/Accessing-logfiles.md>
   Accu-Chek Combo dicas uso básico <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Exportar/Importar Configurações <./Usage/ExportImportSettings.rst>
   Modo de engenheiro xDrip <./Uso/Enabling-Engineering-Mode-in-xDrid>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS for children

   Remote monitoring <./Children/Children.rst>
   SMS commands <./Children/SMS-Commands.rst>
   Profile helper <./Configuration/profilehelper.rst>
   
.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Troubleshooting

   Troubleshooting <./Usage/troubleshooting.rst>
   Nightscout client <./Usage/Troubleshooting-NSClient.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: FAQ

   Perguntas Frequentes <./Getting-Started/FAQ.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Glossary

   Glossário <./Getting-Started/Glossary.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Where to go for help 

   Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>
   Where to go for help <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Atualizações de Documentos & alterações<./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: For Clinicians

   Para Clínicos <./Resources/clinician-guide-to-AndroidAPS>


.. toctree::
   :maxdepth: 1
   :glob:
   :caption: How to help

   Como ajudar <./Getting-Started/How-can-help.md>
   How to translate the app and docs <./translations.md>
   How to edit the docs <./make-a-PR>


.. nota:: 
	**Disclaimer And Warning**

	* All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AndroidAPS at your own risk, and do not use the information or code to make medical decisions.

	* Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.

	* All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

	Please note - this project has no association with and is not endorsed by: `SOOIL <https://www.sooil.com/eng/>`_, `Dexcom <https://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <https://www.accu-chek.com/>`_ or `Medtronic <https://www.medtronic.com/>`_
