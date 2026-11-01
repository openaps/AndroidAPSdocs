# Bem-vindo à documentação do AAPS

![imagem](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 31 de outubro de 2026: foi lançada a versão 4.0.0. Veja as [Notas das Versões](#latestrelease) para saber o que há de novo e siga as instruções do [manual de atualização](./Maintenance/UpdateToNewVersion.md) para atualizar.

```

O Android APS (**AAPS**) é uma aplicação de código aberto para pessoas que vivem com diabetes dependente de insulina. É um sistema de pâncreas artificial (APS) que funciona em smartphones Android. O **AAPS** usa um algoritmo de software do OpenAPS e tenta fazer o que um pâncreas real faz: manter a glicose no sangue dentro de limites saudáveis com doses automáticas de insulina. Para usar o **AAPS** precisa de **três** dispositivos compatíveis: **(1)** um telefone Android, **(2)** um monitor contínuo de glicose (CGM) e **(3)** uma bomba de insulina aprovada pela FDA/CE. Também pode juntar **(4)** serviços na nuvem para controlar o **AAPS** à distância, partilhar os seus dados e guardá-los num servidor de relatórios, e **(5)** um smartwatch.

Esta documentação explica como configurar e usar o **AAPS**. Pode navegar na documentação do **AAPS** pelo menu à esquerda (e pela prática função **Search docs**) ou pelo [índice](#index-aaps-documentation-index) no fim desta página.

## Visão geral da documentação do AAPS («a documentação»)

Na secção **1) Primeiros passos**, a [Introdução ao APS e ao AAPS](Getting-Started/Introduction.md) explica o conceito geral e o que um sistema de pâncreas artificial (APS) deve fazer. Descreve o contexto do loop em geral, explica porque é que o **AAPS** foi desenvolvido, compara o **AAPS** com outros sistemas e trata da segurança. Dá sugestões sobre como falar do **AAPS** com a sua equipa clínica, explica porque precisa de compilar a aplicação **AAPS** por si próprio em vez de apenas a descarregar e dá uma visão geral das ligações típicas de um sistema **AAPS**. Também trata da acessibilidade e de quem pode beneficiar do **AAPS**.

[Preparar-se para começar com o AAPS](./Getting-Started/PreparingForAaps.md) dá mais detalhes sobre questões de segurança e sobre os telefones, CGM (monitores contínuos de glicose) e bombas de insulina compatíveis com o **AAPS**. Dá uma visão geral do processo que vai seguir e indica um calendário aproximado até ter todas as funções do **AAPS**. Esta secção prepara-o tecnicamente para montar o seu sistema **AAPS** da forma mais rápida e eficiente possível. A subsecção [CGM compatíveis](./Getting-Started/CompatiblesCgms.md) explica como otimizar a configuração do seu CGM e quais as opções de suavização mais adequadas.

Agora que compreende bem o processo, pode começar a montar o seu loop **AAPS**.

A secção **2) Compilar a aplicação** explica porque precisa de compilar a aplicação **AAPS** por si próprio em vez de apenas a descarregar e guia-o passo a passo para a [compilar](./SettingUpAaps/BuildingAaps.md) (com um navegador, com o Android Studio ou na linha de comandos) e depois a transferir e instalar no seu telefone. Começa com um passo opcional: criar uma [conta Google dedicada](./UsefulLinks/DedicatedGoogleAccountForAaps.md) para guardar as suas compilações e cópias de segurança. Também explica a [verificação de programadores Android](#android-developer-verification), uma mudança que a Google vai introduzir a partir de setembro de 2026 e que altera a forma como se instalam aplicações compiladas pelo próprio utilizador.

A secção **3) Configurar o servidor de relatórios** explica como escolher e [configurar o seu servidor de relatórios](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout ou Tidepool) para poder rever e partilhar os seus dados.

A secção **4) [Configurar o AAPS](./SettingUpAaps/SetupWizard.md)** explica como configurar a aplicação **AAPS** com o assistente de configuração, como ligá-la à aplicação do seu CGM e a uma bomba de insulina real ou virtual, e como ligar o **AAPS** ao seu servidor de relatórios. Depois, fica a conhecer tudo o que o **AAPS** pode fazer, através de um processo seguro, passo a passo e a um ritmo cuidadoso. Assim, garante que o utilizador (ou o seu filho) conhece bem todos os níveis e menus e se sente à vontade com eles antes de passar à fase seguinte, normalmente chamada o «Objetivo» seguinte. Continua assim até ter experiência suficiente para começar a usar as opções mais avançadas da aplicação. Estes objetivos foram pensados para desbloquear aos poucos mais possibilidades do **AAPS** e passar do loop aberto para o loop fechado.

A secção **5) [O dia a dia com o AAPS](./DailyLifeWithAaps/AapsScreens.md)** apresenta as principais funcionalidades do **AAPS**, para o ajudar a usar (e personalizar) o **AAPS**. Inclui a compreensão dos ecrãs, dos hidratos de carbono ativos (HCA), da sensibilidade, do FSI Dinâmico, da troca de perfil, dos alvos temporários, dos hidratos de carbono prolongados (ou eCarbs), das automatizações e de como [rever os seus dados](./Maintenance/Reviewing.md) no navegador do histórico e nas estatísticas. Também trata de temas frequentes, como gerir diferentes tipos de refeições, lidar com mudanças de cânula e de sensor, atualizações do smartphone, mudanças de hora de verão, [viajar com o AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) e desporto. As perguntas e respostas mais comuns estão na secção de resolução de problemas.

A secção **6) [Funções remotas do AAPS](./RemoteFeatures/RemoteControl.md)** mostra um verdadeiro ponto forte do **AAPS**. Há muitas formas de enviar comandos remotamente para o **AAPS** ou de simplesmente seguir os seus dados. Isto é igualmente útil para cuidadores que querem usar o **AAPS** com menores e para adultos com diabetes que querem acompanhar a glicose (e outros dados) de forma mais prática do que apenas no telefone (num relógio, no carro _etc._) ou que querem que outras pessoas próximas também acompanhem os dados. Esta secção também explica como usar o Android Auto para ver os valores de glicose no carro.

A secção **7) [Smartwatches Wear OS](./WearOS/BuildingAapsWearOS.md)** dá informações e procedimentos para usar um smartwatch Android **Wear OS** com as watchfaces próprias do **AAPS** ou com watchfaces personalizadas, seja como controlo remoto do seu telefone, seja apenas como ecrã de informação.


A secção **8) [Manutenção do AAPS](./Maintenance/ExportImportSettings.md)** explica como exportar e fazer cópias de segurança das suas definições (muito importante se perder ou partir o telefone), apresenta as notas da versão mais recente, explica como atualizar o **AAPS** e o que acontece quando uma versão chega ao fim de vida. Pode contar com uma nova versão e 2–3 atualizações obrigatórias por ano. Estas atualizações são obrigatórias, como em todo o software, porque corrigem pequenos erros e melhoram o **AAPS**. Existe uma secção própria de resolução de problemas de «atualização» com as dúvidas mais comuns.

A secção **9) [Ajuda e resolução de problemas](GettingHelp/WhereCanIGetHelp.md)** indica-lhe os melhores sítios onde procurar ajuda geral sobre o **AAPS**. É o único sítio onde ir quando algo não funciona: a página central de [Resolução de Problemas](GettingHelp/GeneralTroubleshooting.md) reúne, por tema, as soluções para os problemas mais comuns, e as [FAQ](UsefulLinks/FAQ.md) respondem às perguntas frequentes. Isto é muito importante para poder contactar outras pessoas o mais depressa possível, esclarecer dúvidas e resolver os problemas habituais. Muitas pessoas já usam o **AAPS** com sucesso, mas todos têm, a certa altura, uma dúvida que não conseguem resolver sozinhos. Como há muitos utilizadores, as respostas às perguntas costumam chegar muito depressa, normalmente em poucas horas. Não tenha receio de pedir ajuda: não há perguntas estúpidas! Incentivamos utilizadores de todos os níveis de experiência a fazer todas as perguntas que acharem necessárias para começar a usar o sistema em segurança. Esta secção inclui a resolução de problemas gerais do **AAPS** e do **AAPSClient** (uma aplicação para seguir os dados) e explica como enviar os seus dados do **AAPS** (ficheiros de registo) aos programadores para análise, se achar que há um problema técnico no **AAPS** que deve ser investigado.

A secção **10)** trata das **[opções avançadas do AAPS](./AdvancedOptions/FullClosedLoop.md)**, por exemplo como passar do loop híbrido fechado com o **AAPS** (bólus para as refeições _etc._) para o loop totalmente fechado (sem bólus), como [ajustar o seu perfil](./GettingHelp/ProfileTuning.md) e usar o Autoajuste, e descreve os modos de desenvolvimento e de engenharia. A maioria dos utilizadores dá-se muito bem com a versão principal («Master») do **AAPS** sem usar estas opções. Esta secção é para utilizadores que já têm um bom controlo e querem melhorar ainda mais o seu sistema.

Na secção **11) [Como apoiar o AAPS](SupportingAaps/HowToEditTheDocs.md)** damos informações para que possa apoiar este projeto. Pode doar dinheiro, equipamento ou conhecimentos. Pode sugerir ou fazer alterações à documentação, ajudar na [tradução da documentação](SupportingAaps/Translations) e fornecer os seus dados através do projeto Open Humans.

A secção **12) Recursos** contém documentação arquivada ou adicional, incluindo uma subsecção para [médicos](UsefulLinks/ClinicianGuideToAaps.md) interessados em tecnologias de pâncreas artificial de código aberto, como o **AAPS**, ou para doentes que querem partilhar essa informação com os seus médicos; este tema também é tratado na introdução. Esta secção também contém mais referências e recursos sobre diabetes e loop. Inclui o [Glossário](./UsefulLinks/Glossary.md), uma lista das siglas (ou nomes abreviados) usadas em todo o **AAPS**. É aqui que pode saber, por exemplo, o que significam termos como FSI ou AT.


 ### Tem interesse em começar a usar o **AAPS**? Leia mais sobre o **AAPS** na [Introdução ao APS e ao AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
A segurança do **AAPS** depende das funções de segurança do seu equipamento (telefone, bomba, CGM). Use apenas uma bomba de insulina e um CGM em perfeito funcionamento e aprovados pela FDA/CE. Não use bombas de insulina ou recetores de CGM avariados, modificados ou feitos por si. Use apenas consumíveis originais (aplicadores, cânulas e reservatórios de insulina) aprovados pelo fabricante para uso com a sua bomba e o seu CGM. Consumíveis não testados ou modificados podem causar imprecisões e erros na dose de insulina, o que é um risco significativo para o utilizador. 

Não use o **AAPS** se toma inibidores SGLT-2 (gliflozinas), porque baixam os níveis de glicose no sangue. Aumenta o risco de cetoacidose diabética (CAD), devido à menor administração de insulina, e de hipoglicemia, devido à descida da glicose no sangue. 
```

```{admonition} Disclaimer
:class: note

- Toda a informação e todo o código aqui descritos destinam-se apenas a fins informativos e educativos. Use o [Nightscout](https://nightscout.github.io/) e o **AAPS** por sua conta e risco e não use a informação nem o código para tomar decisões médicas. Nightscout atualmente não faz nenhuma tentativa de conformidade de privacidade do HIPAA. 
- O código do github.com é usado sem garantia e sem suporte formal de qualquer tipo. Por favor, consulte a LICENÇA deste repositório para detalhes.
- Todos os nomes de produtos e empresas, marcas comerciais, marcas de serviço, marcas comerciais registadas e marcas de serviço registadas são propriedade dos respetivos titulares. A sua utilização é para fins informativos e não implica nenhuma afiliação ou apoio por parte deles.

O **AAPS** não tem qualquer ligação com, nem é apoiado por: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) ou [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Índice da documentação do AAPS

```{toctree}
:caption: Usar esta documentação

Alterar o idioma e a versão <./NavigateDoc/ChangeLanguageVersion.md>
Pesquisar na documentação <./NavigateDoc/SearchDoc.md>
Atualizações e alterações da documentação <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Primeiros passos

Introdução ao APS e ao AAPS <./Getting-Started/Introduction.md>
Preparar-se para começar com o AAPS <./Getting-Started/PreparingForAaps.md>
Visão geral dos componentes <./Getting-Started/ComponentOverview.md>
- Bombas compatíveis <./Getting-Started/CompatiblePumps.md>
- CGM compatíveis <./Getting-Started/CompatiblesCgms.md>
- Telefones <./Getting-Started/Phones.md>
- Smartwatches e o AAPS <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Compilar a aplicação

Uma conta Google dedicada ao AAPS (opcional) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Compilar o AAPS <./SettingUpAaps/BuildingAaps.md>
- Compilação no navegador <./SettingUpAaps/BrowserBuild.md>
- Compilação com o Android Studio <./SettingUpAaps/ComputerBuild.md>
- Instruções de compilação na linha de comandos <./SettingUpAaps/CLIBuild.md>
Transferir e instalar o AAPS no seu smartphone <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Configurar o servidor de relatórios

Configurar o servidor de relatórios <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Configure AAPS

Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configuration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Settings <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) O dia a dia com o AAPS

Ecrãs do AAPS <./DailyLifeWithAaps/AapsScreens.md>
Principais funcionalidades do AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Cálculo de HCA <./DailyLifeWithAaps/CobCalculation.md>
Deteção de sensibilidade <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
FSI Dinâmico (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
Troca de Perfil e Percentagem do Perfil <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Alvos temporários <./DailyLifeWithAaps/TempTargets.md>
Hidratos de carbono prolongados / «eCarbs» <./DailyLifeWithAaps/ExtendedCarbs.md>
Assistente Rápido (bólus com um toque) <./DailyLifeWithAaps/QuickWizards.md>
Cenas (predefinições para situações) <./DailyLifeWithAaps/Scenes.md>
Automatização <./DailyLifeWithAaps/Automations.md>
QuickLaunch (barra de ações rápidas da visão geral) <./DailyLifeWithAaps/QuickLaunch.md>
Widgets do ecrã principal <./DailyLifeWithAaps/Widgets.md>
Alimentos (a sua base de dados de alimentos) <./DailyLifeWithAaps/Food.md>
Pesquisa global <./DailyLifeWithAaps/GlobalSearch.md>
Rever os seus dados <./Maintenance/Reviewing.md>
O AAPS para crianças <./DailyLifeWithAaps/AapsForChildren.md>
Bombas e cânulas <./DailyLifeWithAaps/PumpsAndCannulas.md>
Mudança de fuso horário e hora de verão <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Funções remotas do AAPS

Monitorização remota <./RemoteFeatures/RemoteMonitoring.md>
Seguir o AAPS (sem interação com o sistema AAPS) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Controlo remoto do AAPS <./RemoteFeatures/RemoteControl.md>
A aplicação AAPSClient <./RemoteFeatures/AapsClient.md>
Controlo principal ↔ cliente (controlo remoto assinado) <./RemoteFeatures/ClientMasterControl.md>
Comandos SMS <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Smartwatches Wear OS

Compilar a app AAPS Wear <./WearOS/BuildingAapsWearOS.md>
Configurar o AAPS no seu relógio Wear OS <./WearOS/WearOsSmartwatch.md>
Usar o AAPS com o seu smartwatch Wear OS <./RemoteFeatures/RemoteControlWearOS.md>
Documento de referência das watchfaces personalizadas <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Site de partilha de watchfaces personalizadas <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
What changed in AAPS v4 <./Maintenance/V4Changes.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update (fork, AAPS-CI) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio Update <./Maintenance/UpdateComputerBuild.md>
End of life <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Ajuda e resolução de problemas

Onde posso obter ajuda? <./GettingHelp/WhereCanIGetHelp.md>
Resolução de Problemas <./GettingHelp/GeneralTroubleshooting.md>
- Problemas relacionados com o Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Resolução de problemas do NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Resolução de problemas do Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Compilação no navegador: resolução de problemas <./GettingHelp/BrowserBuildTroubleshooting.md>
- Reinstalar o AAPS com uma nova keystore <./GettingHelp/ReinstallAaps.md>
- Aceder aos ficheiros de registo <./GettingHelp/AccessingLogFiles.md>
FAQ para loopers <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Opções avançadas do AAPS

Loop totalmente fechado <./AdvancedOptions/FullClosedLoop.md>
Ajustar o perfil do AAPS <./GettingHelp/ProfileTuning.md>
Como usar o plugin Autoajuste <./AdvancedOptions/Autotune.md>
Concentração da insulina <./AdvancedOptions/InsulinConcentration.md>
Branch de desenvolvimento <./AdvancedOptions/DevBranch.md>
Compilação no navegador: aplicar (cherry-pick) um commit <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Como apoiar o AAPS

Como ajudar o AAPS <./SupportingAaps/HowCanIHelp.md>
Como editar a documentação <./SupportingAaps/HowToEditTheDocs.md>
Como traduzir textos da aplicação AAPS ou da documentação <./SupportingAaps/Translations.md>
Estado da tradução da aplicação e da documentação <./SupportingAaps/StateOfTranslations.md>
Upload para o Open Humans <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Recursos

Glossário <./UsefulLinks/Glossary.md>
Recursos úteis para ler antes de começar <./UsefulLinks/BackgroundReading.md>
Para médicos – Introdução geral e guia do AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
