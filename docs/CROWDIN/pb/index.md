# Bem-vindo(a) à documentação do AAPS

![imagem](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 31 de outubro de 2026: a versão 4.0.0 foi lançada. Veja as [Notas de versão](#latestrelease) para conhecer as novidades e siga as instruções do [manual de atualização](./Maintenance/UpdateToNewVersion.md) para atualizar.

```

O Android APS (**AAPS**) é um app de código aberto para pessoas que vivem com diabetes dependente de insulina. É um sistema de pâncreas artificial (APS) que funciona em smartphones Android. O **AAPS** usa um algoritmo do OpenAPS e busca fazer o que um pâncreas de verdade faz: manter os níveis de glicose no sangue dentro de limites saudáveis com a dosagem automática de insulina. Para usar o **AAPS** você precisa de **três** dispositivos compatíveis: **(1)** um telefone Android, **(2)** um monitor contínuo de glicose (CGM) e **(3)** uma bomba de insulina aprovada pela FDA/CE. Você também pode adicionar **(4)** serviços na nuvem para controlar o **AAPS** remotamente, compartilhar os seus dados e guardá-los em um servidor de relatórios, e **(5)** um smartwatch.

Esta documentação explica como configurar e usar o **AAPS**. Você pode navegar pela documentação do **AAPS** pelo menu à esquerda (e pela prática função **Pesquisar documentação**) ou pelo [índice](#index-aaps-documentation-index) no fim desta página.

## Visão geral da documentação do AAPS ("a documentação")

Na seção **1) Primeiros passos**, a [Introdução ao APS e AAPS](Getting-Started/Introduction.md) explica o conceito geral do que um sistema de pâncreas artificial (APS) deve fazer. Ela descreve o contexto do loop em geral, explica por que o **AAPS** foi desenvolvido, compara o **AAPS** com outros sistemas e trata da segurança. Ela dá sugestões sobre como conversar com a sua equipe de saúde sobre o **AAPS**, explica por que você precisa compilar o app **AAPS** você mesmo em vez de apenas baixá-lo, e dá uma visão geral da conectividade típica de um sistema **AAPS**. Ela também trata da acessibilidade e de quem provavelmente vai se beneficiar do **AAPS**.

[Preparação para começar com o AAPS](./Getting-Started/PreparingForAaps.md) dá mais detalhes sobre questões de segurança e sobre os telefones, CGMs (monitores contínuos de glicose) e bombas de insulina compatíveis com o **AAPS**. Ela dá uma visão geral do processo pelo qual você vai passar e indica um prazo aproximado para chegar ao uso completo do **AAPS**. Esta seção prepara você tecnicamente para montar a sua configuração do **AAPS** da forma mais rápida e eficiente possível. A subseção [CGMs compatíveis](./Getting-Started/CompatiblesCgms.md) explica como otimizar a configuração do seu CGM e quais opções de suavização são as melhores.

Agora que você entende bem o processo, pode começar a montar o seu loop do **AAPS**.

A seção **2) Compilar o app** explica por que você precisa compilar o app **AAPS** você mesmo em vez de apenas baixá-lo, e guia você passo a passo para [compilá-lo](./SettingUpAaps/BuildingAaps.md) (pelo navegador, pelo Android Studio ou pela linha de comando) e, depois, transferi-lo e instalá-lo no seu telefone. Ela começa com uma etapa opcional: criar uma [conta Google dedicada](./UsefulLinks/DedicatedGoogleAccountForAaps.md) para guardar as suas compilações e backups. Ela também explica a [verificação de desenvolvedor Android](#android-developer-verification), uma mudança que o Google está implantando a partir de setembro de 2026 e que afeta a forma como apps compilados por você mesmo são instalados.

A seção **3) Configurar o servidor de relatórios** trata da escolha e da [configuração do seu servidor de relatórios](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout ou Tidepool), para que você possa revisar e compartilhar os seus dados.

A seção **4) [Configurar o AAPS](./SettingUpAaps/SetupWizard.md)** trata da configuração do app **AAPS** com o Assistente de Configuração, da conexão com o app do seu CGM e com uma bomba de insulina real ou virtual, e da conexão do **AAPS** com o seu servidor de relatórios. Depois, você conhece tudo o que o **AAPS** pode fazer, em um processo seguro, passo a passo e no ritmo certo. Isso garante que você (ou seu filho) esteja bem familiarizado e à vontade com todos os níveis e configurações de menu antes de passar para a próxima fase, normalmente chamada de próximo "Objetivo". Você continua avançando assim até ter experiência suficiente para começar a usar as opções mais avançadas do app. Esses Objetivos foram criados para liberar aos poucos mais possibilidades do **AAPS** e passar do loop aberto para o loop fechado.

A seção **5) [Vida diária com o AAPS](./DailyLifeWithAaps/AapsScreens.md)** trata dos principais recursos do **AAPS**, para ajudar você a usar (e personalizar) o **AAPS**. Isso inclui entender as telas, os carboidratos ativos (COB), a sensibilidade, o ISF dinâmico, a troca de perfil, os alvos temporários, os carboidratos estendidos (ou eCarbs), as automações e a [revisão dos seus dados](./Maintenance/Reviewing.md) no navegador do histórico e nas estatísticas. Ela também trata de temas frequentes: como lidar com diferentes tipos de refeição, trocas de cânula e de sensor, atualizações do smartphone, mudanças do horário de verão, [viagens com o AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) e esportes. Perguntas e respostas comuns estão na seção de resolução de problemas.

A seção **6) [Recursos remotos do AAPS](./RemoteFeatures/RemoteControl.md)** mostra um verdadeiro ponto forte do **AAPS**. Há muitas possibilidades para enviar comandos remotamente para o **AAPS** ou simplesmente acompanhar os dados dele. Isso é igualmente útil para cuidadores que querem usar o **AAPS** para menores de idade, e para adultos com diabetes que querem acompanhar a sua glicose (e outros dados) de forma mais prática do que só no telefone (no relógio, no carro _etc._), ou que desejam que pessoas próximas também acompanhem os dados. Esta seção também explica como usar o Android Auto para ver os níveis de glicose no carro.

A seção **7) [Smartwatches Wear OS](./WearOS/BuildingAapsWearOS.md)** traz informações e procedimentos para usar um smartwatch Android **Wear OS** com os mostradores dedicados do **AAPS** ou com mostradores personalizados, seja como controle remoto do seu telefone ou apenas como indicador.


A seção **8) [Manutenção do AAPS](./Maintenance/ExportImportSettings.md)** explica como exportar e fazer backup das suas configurações (muito importante caso você perca ou quebre o telefone), traz as notas da versão mais recente, detalha como atualizar o **AAPS** e explica o que acontece quando uma versão chega ao fim da vida útil. Você pode esperar uma nova versão e 2–3 atualizações obrigatórias por ano. Como em todo software, você precisa fazer essas atualizações, pois pequenos erros são corrigidos e melhorias são feitas no **AAPS**. Há uma seção específica de resolução de problemas de "atualização" com as dúvidas comuns.

A seção **9) [Ajuda e resolução de problemas](GettingHelp/WhereCanIGetHelp.md)** deve ajudar você a encontrar os melhores lugares para obter ajuda geral com o **AAPS**. É o único lugar onde procurar quando algo não funciona: a central [Resolução de problemas](GettingHelp/GeneralTroubleshooting.md) reúne, por tema, as soluções para os problemas mais comuns, e o [FAQ](UsefulLinks/FAQ.md) responde às perguntas frequentes. Isso é muito importante para que você possa entrar em contato com outras pessoas o mais rápido possível, tirar dúvidas e resolver os problemas mais comuns. Muitas pessoas já usam o **AAPS** com sucesso, mas todo mundo, em algum momento, tem uma dúvida que não consegue resolver sozinho. Como há muitos usuários, as respostas às perguntas costumam chegar muito rápido, normalmente em poucas horas. Não tenha medo de pedir ajuda: não existe pergunta boba! Encorajamos os usuários de todos os níveis de experiência a fazerem todas as perguntas que acharem necessárias para ajudá-los a começar com segurança. Esta seção inclui a resolução de problemas geral do **AAPS** e do **AAPSClient** (um app complementar para acompanhamento) e explica como enviar os seus dados do **AAPS** (arquivos de log) aos desenvolvedores para análise, se você acha que um problema técnico do **AAPS** precisa ser verificado.

A seção **10)** trata das **[Opções avançadas do AAPS](./AdvancedOptions/FullClosedLoop.md)**, como passar do uso do **AAPS** em loop fechado híbrido (bólus para refeições _etc._) para o loop fechado completo (sem bólus), como [ajustar o seu perfil](./GettingHelp/ProfileTuning.md) e usar o Autotune, e detalha os modos de desenvolvimento e de engenharia. A maioria dos usuários se sai muito bem com a versão principal ("Master") do **AAPS** sem usar essas opções; esta seção é para usuários que já têm um bom controle e querem melhorar ainda mais a sua configuração.

Na seção **11) [Como apoiar o AAPS](SupportingAaps/HowToEditTheDocs.md)**, damos informações para que você possa apoiar este projeto. Você pode doar dinheiro, equipamentos ou conhecimento. Você pode sugerir ou fazer alterações na documentação você mesmo, ajudar na [tradução da documentação](SupportingAaps/Translations) e fornecer os seus dados pelo projeto Open Humans.

A seção **12) Recursos** contém documentação arquivada ou adicional, incluindo uma subseção para [médicos](UsefulLinks/ClinicianGuideToAaps.md) que têm interesse em tecnologia de pâncreas artificial de código aberto como o **AAPS**, ou para pacientes que querem compartilhar essas informações com os seus médicos; esse tema também é tratado na introdução. Esta seção também reúne mais referências e recursos sobre diabetes e loop. Ela inclui o [Glossário](./UsefulLinks/Glossary.md), uma lista das siglas (ou nomes curtos) usadas em todo o **AAPS**. É aqui que você descobre, por exemplo, o que significam os termos ISF ou TT.


 ### Tem interesse em começar a usar o **AAPS**? Leia mais sobre o **AAPS** na [Introdução ao APS e AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
A segurança do **AAPS** depende dos recursos de segurança do seu hardware (telefone, bomba, CGM). Use apenas uma bomba de insulina e um CGM aprovados pela FDA/CE e em perfeito funcionamento. Não use bombas de insulina ou receptores de CGM quebrados, modificados ou feitos em casa. Use apenas suprimentos originais (aplicadores, cânulas e reservatórios de insulina) aprovados pelo fabricante para uso com a sua bomba e o seu CGM. Usar suprimentos não testados ou modificados pode causar imprecisão e erros na dose de insulina, com risco significativo para o usuário. 

Não use o **AAPS** se você toma inibidores de SGLT-2 (gliflozinas), pois eles baixam os níveis de glicose no sangue. Você aumenta o risco de cetoacidose diabética (CAD), porque menos insulina é aplicada, e o risco de hipoglicemia, porque os níveis de glicose no sangue baixam. 
```

```{admonition} Disclaimer
:class: note

- Todas as informações e todo o código descritos aqui são apenas para fins informativos e educacionais. Use o [Nightscout](https://nightscout.github.io/) e o **AAPS** por sua conta e risco e não use as informações ou o código para tomar decisões médicas. Atualmente, o Nightscout não faz nenhuma tentativa de cumprir as regras de privacidade da HIPAA. 
- O uso do código do github.com não tem garantia nem suporte formal de qualquer tipo. Por favor, revise a LICENÇA deste repositório para obter detalhes.
- Todos os nomes de produtos e empresas, marcas comerciais, marcas de serviço, marcas registradas e marcas de serviço registradas são propriedade de seus respectivos titulares. Seu uso é para fins informativos e não implica qualquer afiliação ou endosso por parte deles.

O **AAPS** não tem nenhuma associação com as empresas a seguir e não é endossado por elas: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) ou [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Índice da documentação do AAPS

```{toctree}
:caption: Como usar esta documentação

Alterar idioma e versão <./NavigateDoc/ChangeLanguageVersion.md>
Pesquisar na documentação <./NavigateDoc/SearchDoc.md>
Atualizações e mudanças na documentação <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Primeiros passos

Introdução ao APS e AAPS <./Getting-Started/Introduction.md>
Preparação para começar com o AAPS <./Getting-Started/PreparingForAaps.md>
Visão geral dos componentes <./Getting-Started/ComponentOverview.md>
- Bombas compatíveis <./Getting-Started/CompatiblePumps.md>
- CGMs compatíveis <./Getting-Started/CompatiblesCgms.md>
- Telefones  <./Getting-Started/Phones.md>
- Smartwatches e o AAPS  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Compilar o app

Uma conta Google dedicada ao AAPS (opcional) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Compilar o AAPS <./SettingUpAaps/BuildingAaps.md>
- Compilação no navegador <./SettingUpAaps/BrowserBuild.md>
- Compilação no Android Studio <./SettingUpAaps/ComputerBuild.md>
- Instruções de compilação pela linha de comando <./SettingUpAaps/CLIBuild.md>
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
:caption: 5) Vida diária com o AAPS

Telas do AAPS <./DailyLifeWithAaps/AapsScreens.md>
Principais recursos do AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Cálculo de COB <./DailyLifeWithAaps/CobCalculation.md>
Detecção de sensibilidade <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
ISF dinâmico (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
Troca de perfil e porcentagem do perfil <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Alvos temporários <./DailyLifeWithAaps/TempTargets.md>
Carboidratos estendidos / "eCarbs" <./DailyLifeWithAaps/ExtendedCarbs.md>
Assistente rápido (bólus com um toque) <./DailyLifeWithAaps/QuickWizards.md>
Cenários (predefinições de situação) <./DailyLifeWithAaps/Scenes.md>
Automação <./DailyLifeWithAaps/Automations.md>
Acesso rápido (barra de ações rápidas da visão geral) <./DailyLifeWithAaps/QuickLaunch.md>
Widgets da tela inicial <./DailyLifeWithAaps/Widgets.md>
Alimentos (seu banco de alimentos) <./DailyLifeWithAaps/Food.md>
Pesquisa global <./DailyLifeWithAaps/GlobalSearch.md>
Revisando seus dados <./Maintenance/Reviewing.md>
AAPS para crianças <./DailyLifeWithAaps/AapsForChildren.md>
Bombas e cânulas <./DailyLifeWithAaps/PumpsAndCannulas.md>
Mudança de fuso horário e horário de verão <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Recursos remotos do AAPS

Monitoramento Remoto <./RemoteFeatures/RemoteMonitoring.md>
Acompanhar o AAPS (sem interação com o sistema AAPS) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Controle remoto do AAPS <./RemoteFeatures/RemoteControl.md>
O app AAPSClient <./RemoteFeatures/AapsClient.md>
Controle dispositivo principal ↔ cliente (controle remoto assinado) <./RemoteFeatures/ClientMasterControl.md>
Comandos SMS <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Smartwatches Wear OS

Compilar o app AAPS para Wear <./WearOS/BuildingAapsWearOS.md>
Configurar o AAPS no seu relógio Wear OS <./WearOS/WearOsSmartwatch.md>
Uso do AAPS pelo seu smartwatch Wear OS <./RemoteFeatures/RemoteControlWearOS.md>
Documento de referência do Custom Watchface <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Site de troca de mostradores personalizados <./ExchangeSiteCustomWatchfaces/index.md>

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
Resolução de problemas <./GettingHelp/GeneralTroubleshooting.md>
- Problemas relacionados ao Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Resolução de problemas do NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Resolução de problemas do Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Compilação no navegador: resolução de problemas <./GettingHelp/BrowserBuildTroubleshooting.md>
- Reinstalar o AAPS com uma nova keystore <./GettingHelp/ReinstallAaps.md>
- Acessando os arquivos de log <./GettingHelp/AccessingLogFiles.md>
FAQ para loopers <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Opções avançadas do AAPS

Loop fechado completo <./AdvancedOptions/FullClosedLoop.md>
Ajustar o perfil do AAPS <./GettingHelp/ProfileTuning.md>
Como usar o plugin Autotune <./AdvancedOptions/Autotune.md>
Concentração de insulina <./AdvancedOptions/InsulinConcentration.md>
Branch de desenvolvimento <./AdvancedOptions/DevBranch.md>
Compilação no navegador: cherry-pick de um commit <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Como apoiar o AAPS

Como ajudar o AAPS <./SupportingAaps/HowCanIHelp.md>
Como editar a documentação <./SupportingAaps/HowToEditTheDocs.md>
Como traduzir strings do app AAPS ou da documentação <./SupportingAaps/Translations.md>
estado da tradução do aplicativo e da documentação <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Recursos

Glossário <./UsefulLinks/Glossary.md>
Recursos úteis para ler antes de começar <./UsefulLinks/BackgroundReading.md>
Para médicos – Introdução geral e guia do AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
