# Atualizações e alterações da documentação

## Outubro de 2026

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Smartwatches e o AAPS](#watches-external-companion-apps): a secção **Samsung Tizen** passa a **External Companion Apps** (apps externas complementares) e lista as apps que leem a difusão (broadcast) do **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). O [WatchDrip+](#watches-xiaomi-amazfit) 0.5 e posteriores ligam-se diretamente ao **AAPS** sem o xDrip+: adicionados os passos de configuração, também resumidos em [Configuração](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) e [Monitorização remota](../RemoteFeatures/RemoteMonitoring.md). Relógios Bluejay: GTS descontinuado, modelo atual atualizado @psonnera
- [Compilação no navegador com o AAPS Builder](#aaps-builder): workflow de compilação versão 6. Os passos de compilação usam agora versões exatas e revistas das ferramentas do GitHub e da máquina de compilação, e a compilação explica claramente quando foi colado o texto errado no secret `KEYSTORE_SET`. A [página de configuração](#aaps-builder-setup) faz agora parte da documentação e está traduzida, verifica o seu nome de utilizador do GitHub e tem ajuda mais clara para o secret, para "Page not found" (404) e para a app do GitHub. Se o seu `.github/workflows/build.yml` indicar a versão 5 ou anterior, substitua-o como explicado em [Atualizar o AAPS](#aaps-builder-updates) @psonnera
- [Instalador web do AAPS](#web-installer): agora é uma página da documentação, traduzida como as outras. O endereço antigo continua a funcionar @psonnera
- [Compilação no navegador com o AAPS Builder](#aaps-builder): o workflow de compilação versão 3 adiciona a variante `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 e posteriores). Para a compilar, substitua o seu `.github/workflows/build.yml` como explicado em [Atualizar o AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): removida a app Dexcom G7 modificada (DiaKEM), que já não funciona em novas instalações @psonnera
- [Compilação no navegador com o AAPS Builder](#aaps-builder): workflow de compilação versão 2. As compilações semanais automáticas foram removidas (sem agendamento, sem as variáveis `AUTO_BUILD` / `AUTO_VARIANT`, sem as tags `built/…`): cada compilação é iniciada por si, com a versão e a variante que escolher, e o workflow só tem acesso de leitura ao seu repositório. Se o seu `.github/workflows/build.yml` indicar a versão 1, substitua-o como explicado em [Atualizar o AAPS](#aaps-builder-updates). Adicionadas capturas de ecrã para cada passo @psonnera
- [Compilação no navegador com o AAPS Builder](#aaps-builder): o workflow de compilação faz agora parte desta documentação. Sem repositório modelo: cria um repositório privado vazio e adiciona o workflow a partir da página de configuração (novo passo 2). O workflow já não verifica atualizações num repositório externo. Se criou o seu repositório a partir do modelo anterior, substitua o `.github/workflows/build.yml` pelo workflow da página de configuração, como explicado em [Atualizar o AAPS](#aaps-builder-updates) @psonnera
- Nova página [Compilação no navegador com o AAPS Builder](#aaps-builder): compilar o AAPS a partir de um telefone Android com uma página de configuração alojada neste site, com compilações semanais automáticas e sem ficheiro de preparação. Substitui as instruções para Android da compilação no navegador (removidas as páginas do File Manager Plus). AAPS Builder criado por @dio99, documentação por @psonnera

## Agosto de 2026

- [Transferir e instalar o AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md): a página *Verificação de programador do Android* foi integrada no guia de instalação; adicionados o [instalador web](#android-developer-verification-web) (instala o APK diretamente a partir do navegador, sem verificação) e o ADB sem fios @psonnera

## Julho de 2026

- [Introdução](../Getting-Started/Introduction.md): revisão da exatidão da secção APS. Corrigidos o título e a ligação da citação da Frontiers, apresentada agora como contexto e não como guia atual do mercado, atualizadas as afirmações sobre dupla hormona e loop totalmente fechado, esclarecido que o controlador nem sempre é uma app de telefone, removidos nomes de marcas comerciais e números de utilizadores sem fonte, e corrigido OS-AID para *Open-Source Automated Insulin Delivery* @psonnera
- [Glossário](../UsefulLinks/Glossary.md): adicionadas as entradas **AID**, **FCL**, **HCL** e **OS-AID**, com ligações a partir de **APS** e **Loop fechado** @psonnera
- Nova página [Verificação de programador do Android](#android-developer-verification): impacto do futuro requisito de verificação da Google na instalação de apps compiladas por si, com métodos de instalação gratuitos (ADB, fluxo avançado, conta de distribuição limitada) @psonnera

## Junho de 2026

- [Compilação no navegador](#browser-build): reorganizada num fluxo de várias páginas que começa pela decisão (Fork → keystore Opção 1/Opção 2 com uma página própria para cada dispositivo → Google Drive → Compilação → Resolução de problemas); removidos os separadores aninhados e a instalação do File Manager Plus passou a ser um passo bem visível @psonnera
- [Introdução](../Getting-Started/Introduction.md): a terminologia mudou de *DIY* para *OS-AID* (Open-Source Automated Insulin Delivery), adicionados o Trio e o Stelo, atualizada a tabela de compatibilidade de bombas/CGM @tmhastings

## Março de 2026

- [Adicionada a opção de compilação na linha de comandos (CLI)](../SettingUpAaps/CLIBuild.md) @je-l
- *Computer Build* passa a chamar-se *Android Studio Build*. Manter os nomes dos ficheiros nos URLs.

## Janeiro de 2025

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Atualização da lista de CGM. Removidos o Dexcom G5, o Tomato e o Glimp.
- [Interface da rotação dos locais](#Aapsscreens-site-rotation)
- [Modo de funcionamento](#AapsScreens-running-mode)
- [Autoajuste](../AdvancedOptions/Autotune.md)

## Dezembro de 2025

- [Ajuste do perfil](../GettingHelp/ProfileTuning.md) por @robrub

## Outubro de 2025

- DiaKEM: as novas instalações não funcionam depois da atualização dos servidores @psonnera
- Removida a app Libre 2 modificada (patched), por estar obsoleta: não funciona com os sensores novos @psonnera
- Página do Omnipod Dash refeita @XiTatiON

## Agosto de 2025

- Atualização das versões e dos pré-requisitos do Android Studio
- Adicionada a versão [3.3.2.1](#version3321), removidas as referências ao Android 16 (corrigido)
- Adicionada a [compilação no navegador](#browser-build) @Angus

## Maio de 2025

- Adicionada a [página de atualização para a 3.2.0.4](#update-aaps-3204) @psonnera

## Janeiro de 2025

- Assistente Rápido - [função de pressão longa](#Preferences-quick-wizard) @emilise
- Página [FSI Dinâmico](../DailyLifeWithAaps/DynamicISF.md) reescrita @emilise

## Dezembro de 2024

- Documentação da [versão 3.3](#version3300) @emilise

## Novembro de 2024

- Atualização de [O seu perfil AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Reorganização do conteúdo sobre [smartwatches Wear OS](../WearOS/BuildingAapsWearOS.md) @psonnera

## Outubro de 2024

- Atualização de várias páginas:
  - [Quanto tempo vai demorar](#preparing-how-long-will-it-take), [Visão geral dos componentes](../Getting-Started/ComponentOverview.md), [Concluir os objetivos](../SettingUpAaps/CompletingTheObjectives.md), [O seu perfil AAPS](../SettingUpAaps/YourAapsProfile.md), [Configuração](../SettingUpAaps/ConfigBuilder.md) e [Preferências](../SettingUpAaps/Preferences.md), [Ecrãs do AAPS](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Cálculo de HCA](../DailyLifeWithAaps/CobCalculation.md), [FSI Dinâmico](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Instruções de compilação para o Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Trabalho técnico (processo de publicação da documentação, organização dos ficheiros...) @psonnera e @emilise

***

Falta o histórico de março de 2022 a setembro de 2024

Com a revisão para a 3.2, foi removida alguma informação obsoleta. Pode encontrá-la na versão anterior da documentação:

A documentação do AAPS 3.1 está disponível [aqui](https://androidaps.readthedocs.io/en/3.1/index.html).

***

## Fevereiro de 2022

- [Sinal de aviso da qualidade da glicose](#aaps-screens-bg-warning-sign) @tanja
- [Atualização da bomba Medtronic](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Verificações necessárias depois de atualizar para o AAPS 3.0](Update3_0.md) @tanja
- [Omnipod Dash](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Atualização da documentação para o AAPS 3.0 (em parte) @xJoe
- [Wear OS para o AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Janeiro de 2022

- [Resolução de problemas do Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - atualização @tanja

## Dezembro de 2021

- [Compilar o APK](../SettingUpAaps/BuildingAaps.md) - atualização para o Android Studio Arctic Fox | 2020.3.1 @tanja
- Adicionada informação sobre a [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

## Novembro de 2021

- Boas práticas para calibrar um sensor Libre 2
- [FSI](../UsefulLinks/FAQ.md) - nova explicação do efeito
- Atualização da [resolução de problemas do Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Removida a app [Dexcom](../CompatibleCgms/DexcomG6.md) modificada (patched), por estar obsoleta

## Outubro de 2021

- [Notas das Versões](ReleaseNotes.md) AAPS 3.0 beta

## Setembro de 2021

- Especificações recomendadas do computador para [compilar a app AAPS](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Junho de 2021

- [Instalação manual (sideload) de watchfaces](../WearOS/WearOsSmartwatch.md)

## Abril de 2021

- Lista de [dispositivos de comunicação](#CompatiblePumps-additional-communication-device) para as bombas Omnipod e Medtronic
- Previsões do AAPS no [Nightscout](#Nightscout-manual-nightscout-setup)

## Março de 2021

- A comunicação dos programadores passou do gitter para o [discord](https://discord.gg/4fQUWHZ4Mw)

## Fevereiro de 2021

- Nova barra de navegação e [mudança de idioma](../NavigateDoc/ChangeLanguageVersion.md)

## Janeiro de 2021

- [Separador Ações](#screens-action-tab) - mais detalhes na página 'Ecrãs do AAPS'
- Dexcom G6 com a [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- [Nível da bateria](#screens-sensor-level-battery) do leitor inteligente Libre
- [Objetivos](#objectives-objective3) - novas perguntas
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

## Dezembro de 2020

- [Libre 2](../CompatibleCgms/Libre2.md) - a app modificada (patched) não funciona com sensores dos EUA
- [Limites fixos do OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 - instalação manual dos serviços Google Play

## Outubro de 2020

- Accu-Chek Combo - atualização sobre o [ajuste da hora na mudança para a hora de verão](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - opção para [enviar valores absolutos](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Registos - mais detalhes sobre a [localização da pasta](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - atualização do estado
- [Comandos SMS - sincronização da hora](../RemoteFeatures/SMSCommands.md)

## Setembro de 2020

- Grande atualização para a nova versão 2.7 do AAPS
- For details see the [release notes](#Releasenotes-version-2-7-0)

## Junho de 2020

- Libre 2 - mais detalhes sobre a app Libre Link modificada (patched) e o uso de transmissores Bluetooth
- [Viajar com mudança de fuso horário](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) com o Libre 2

## Maio de 2020

- [Bólus prolongado só para as bombas Dana + Insight](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Desativar a vibração da Insight](#Accu-Chek-Insight-Pump-vibration) (só firmware 3.x)
- [Alteração mínima do pedido](#Preferences-minimal-request-change) para reduzir o número de notificações no modo de loop aberto
- App Libre Link modificada (patched) - verificar se está bem modificada
- [Linhas de previsão](#aaps-screens-prediction-lines) - mais detalhes

## Abril de 2020

- Registar insulina com data anterior (p. ex. dada com seringa)
- O suporte para o Android 6 vai terminar na próxima versão master

## Março de 2020

- [Compilar o apk com o Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS com firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **não pode ser usada atualmente com o AAPS!**
- [Bólus prolongado e mudança para loop aberto](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Atualizar o apk com o Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

## Fevereiro de 2020

- Avisos sobre a Automatização
- [Autosens](#Open-APS-features-autosens) - breve explicação
- Alternativas ao Careportal
- Função de [bólus prolongado](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) - o loop fechado será desativado
- Novo [plugin Perfil local](../SettingUpAaps/ConfigBuilder.md)
- Exemplo de configuração - atualização do Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Complicações do Wear](../WearOS/WearOsSmartwatch.md)

## Janeiro de 2020

- [Correção manual de hidratos de carbono](#screens-bolus-carbs) para registos de hidratos errados
- [Tamanho das imagens](../SupportingAaps/HowToEditTheDocs.md) ao editar a documentação

## Dezembro de 2019

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - configuração com capturas de ecrã
- [Accu-Chek Insight e Autoajuste](#Accu-Chek-Insight-Pump-settings-in-aaps) - solução alternativa para o uso
- [Glimp](#Config-Builder-bg-source) - suportada a versão 4.15.57 e mais recentes
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - grande atualização, com muito mais detalhes
- [Complicações de watchface](#Watchfaces-complications) - use a sua watchface preferida com dados do AAPS

## Novembro de 2019

- [Automatização - desativar ao desativar o loop](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 - atualização sobre a substituição do transmissor](#xdrip-replace-transmitter)
- [Bólus prolongado - porque não funciona com o loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - desporto](#FAQ-sports)
- [Ecrã principal - linhas no gráfico](#aaps-screens-main-graph)
- [Insight - Desativar valores absolutos no NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Bomba Medtronic - possíveis registos duplicados](../CompatiblePumps/MedtronicPump.md)
- [Novo tutorial do Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Troca de perfil com percentagem - exemplo](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Atualização dos comandos SMS](../RemoteFeatures/SMSCommands.md)
- [Resolução de problemas do Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Resolução de problemas - coleção de ligações](../GettingHelp/GeneralTroubleshooting.md)
- Atualização - guia rápido para utilizadores experientes
- Documentação - atualização de [edição](#edit-the-docs-code-syntax) e [tradução](#translations-translation-of-the-documentation).

## Outubro de 2019

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [AccuChek Insight - opções de registo](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Cálculo de HCA numa página separada](../DailyLifeWithAaps/CobCalculation.md)
- [HCA - deteção de valor de HCA errado](#CobCalculation-detection-of-wrong-cob-values)
- [Resolução de problemas específicos do Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Atualização dos objetivos para a versão 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Atualização das preferências](../SettingUpAaps/Preferences.md)
- [Inibidores SGLT-2 - não usar com o loop](#PreparingForAaps-no-sglt-2-inhibitors)
- [Resolução de problemas dos comandos SMS](#SMSCommands-troubleshooting)
- [xDrip - atualização sobre a substituição do transmissor G6](#xdrip-replace-transmitter)

## Setembro de 2019

- [Automatizar](../DailyLifeWithAaps/Automations.md)
- [Calculadora de bólus](#AapsScreens-wrong-cob-detection) - absorção lenta dos hidratos de carbono
- [Segurança do Nightscout](#Nightscout-security-considerations)
- [Deslocamento temporal do perfil](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (mais detalhes)
- [Monitorização remota](../RemoteFeatures/RemoteMonitoring.md)
- [O que é um sistema de loop fechado?](#Introduction-what-does-hybrid-closed-loop-mean)

## Agosto de 2019

- Dexcom G6 - região da app modificada (patched)
- [Novo transmissor Dexcom G6](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- De que preciso? - nova estrutura e informação adicional
- Nova estrutura
