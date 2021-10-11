Bem-vindo à documentação da AndroidAPS
==================================================

A AndroidAPS é uma aplicação de código aberto para pessoas que vivem com diabetes, insulino dependentes. 
Atua como um sistema de pâncreas artificial em smartphones Google Android . Os principais componentes são diferentes algoritmos de software openAPS que têm como objetivo fazer o que um pâncreas humano faz: manter os níveis de açúcar no sangue dentro de limites saudáveis usando dosagem de insulina automatizada (AID). Adicionalmente, precisará de, pelo menos, um dispositivo de perfusão subcutânea de insulina (vulgarmente conhecida como bomba de insulina) e um medidor contínuo de glicose. 

A aplicação NÃO utiliza inteligência artificial auto-inteligente. Em vez disso, os cálculos do AndroidAPS são baseados no algoritmo de dosagem individual e ingestão de hidratos de carbono que o utilizador coloca manualmente no seu perfil de tratamentos, mas estes são verificados pelo sistema por razões de segurança. 

A app não é fornecida no Google Play Store. Terá de ser cada utilizador a construí-la individualmente a partir de código-fonte por motivos legais.

Os componentes principais são:

.. image:: images/modules-female.png
  :alt: Componentes

Para mais detalhes, leia o seguinte.

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

.. _configuracao-dos-componentes:

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
   :caption: AndroidAPS para crianças

   Monitorização remota <./Crianças/Crianças.rst>
   Comandos SMS<./Usage/SMS-Commands.md>
   Auxiliar de perfil <./Configuration/profilehelper.rst>
   
.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Resolução de problemas

   Resolução de Problemas <./Usage/troubleshooting.rst>
   NSClient <./Usage/Troubleshooting-NSClient.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Perguntas Frequentes

   Perguntas Frequentes <./Getting-Started/FAQ.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Glossário

   Glossário <./Getting-Started/Glossary.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Onde procurar ajuda 

   Recursos úteis para ler antes de iniciar <./Where-To-Go-For-Help/Background-reading.md>
   Onde pedir ajuda <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Atualizações de Documentos & alterações<./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Para Equipas Médicas

   Para Clínicos <./Resources/clinician-guide-to-AndroidAPS>


.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Como ajudar

   Como ajudar <./Getting-Started/How-can-help.md>
   Como traduzir a aplicação e a documentação <./translations.md>
   Como editar a wiki <./make-a-PR>


.. nota:: 
	* * Aviso e Isenção de Responsabilidade * *

	* Todas as informações, pensamento e código descritas aqui são destinadas apenas para fins informativos e educacionais. Nightscout atualmente não faz nenhuma tentativa de conformidade de privacidade do HIPAA. Use o Nightscout e a AndroidAPS sob a sua responsabilidade, e não use a informação ou código para tomar decisões médicas.

	* O uso do código do github.com é sem garantia ou suporte formal de qualquer espécie. Por favor, consulte a LICENÇA deste repositório para detalhes.

	* Todos os nomes de produtos e empresas, marcas comerciais, marcas de serviços, marcas comerciais registadas e atendimentos de serviços registados são propriedade dos seus respetivos titulares. A sua utilização é para fins informativos e não implica nenhuma afiliação ou apoio por parte deles.

	Atenção- este projeto não tem nenhuma associação com nem é apoiado por: `SOOIL <https://www.sooil.com/eng/>`_, `Dexcom <https://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <https://www.accu-chek.com/>`_ ou `Medtronic <https://www.medtronic.com/>`_
