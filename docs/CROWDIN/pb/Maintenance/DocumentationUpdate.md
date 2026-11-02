# Atualizações e mudanças na documentação

## Outubro de 2026

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Smartwatches e o AAPS](#watches-external-companion-apps): a seção **Samsung Tizen** passa a ser **Apps companheiros externos** e lista os apps que leem a transmissão (broadcast) do **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). O [WatchDrip+](#watches-xiaomi-amazfit) 0.5 e versões mais novas conectam diretamente ao **AAPS** sem o xDrip+: etapas de configuração adicionadas, também resumidas em [Configuração](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) e [Monitoramento remoto](../RemoteFeatures/RemoteMonitoring.md). Relógios Bluejay: GTS descontinuado, modelo atual atualizado @psonnera
- [Compilação no navegador com o AAPS Builder](#aaps-builder): workflow de compilação versão 6. As etapas de compilação agora usam versões exatas e revisadas das ferramentas e da máquina de compilação do GitHub. A compilação também explica claramente quando o texto errado foi colado no secret `KEYSTORE_SET`. A [página de configuração](#aaps-builder-setup) agora faz parte da documentação e é traduzida, verifica o seu nome de usuário do GitHub e tem uma ajuda mais clara para o secret, para "Page not found" (404) e para o app do GitHub. Se o seu `.github/workflows/build.yml` diz versão 5 ou anterior, substitua-o como explicado em [Atualizando o AAPS](#aaps-builder-updates) @psonnera
- [Instalador web do AAPS](#web-installer): agora é uma página da documentação, traduzida como as outras. O endereço antigo ainda funciona @psonnera
- [Compilação no navegador com o AAPS Builder](#aaps-builder): o workflow de compilação versão 3 adiciona a variante `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 e mais novos). Para compilá-la, substitua o seu `.github/workflows/build.yml` como explicado em [Atualizando o AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): removido o app Dexcom G7 modificado (DiaKEM), que não funciona mais em novas instalações @psonnera
- [Compilação no navegador com o AAPS Builder](#aaps-builder): workflow de compilação versão 2. As compilações semanais automáticas foram removidas (sem agendamento, sem as variáveis `AUTO_BUILD` / `AUTO_VARIANT`, sem as tags `built/…`): cada compilação é iniciada por você, com a versão e a variante que você escolher, e o workflow tem somente acesso de leitura ao seu repositório. Se o seu `.github/workflows/build.yml` diz versão 1, substitua-o como explicado em [Atualizando o AAPS](#aaps-builder-updates). Adicionadas capturas de tela para cada etapa @psonnera
- [Compilação no navegador com o AAPS Builder](#aaps-builder): o workflow de compilação agora faz parte desta documentação. Sem repositório modelo: você cria um repositório privado vazio e adiciona o workflow pela página de configuração (nova etapa 2). O workflow não verifica mais um repositório externo em busca de atualizações. Se você criou o seu repositório a partir do modelo anterior, substitua o `.github/workflows/build.yml` pelo workflow da página de configuração, como explicado em [Atualizando o AAPS](#aaps-builder-updates) @psonnera
- Nova página [Compilação no navegador com o AAPS Builder](#aaps-builder): compile o AAPS em um telefone Android com uma página de configuração hospedada neste site, com compilações semanais automáticas e sem arquivo de preparação. Ela substitui as instruções para Android da compilação no navegador (páginas do File Manager Plus removidas). AAPS Builder criado por @dio99, documentação por @psonnera

## Agosto de 2026

- [Transferir e instalar o AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md): a página *Verificação de desenvolvedor do Android* foi unida ao guia de instalação; adicionados o [instalador web](#android-developer-verification-web) (instala o APK direto pelo navegador, sem precisar da verificação) e o ADB sem fio @psonnera

## Julho de 2026

- [Introdução](../Getting-Started/Introduction.md): revisão da precisão da seção sobre APS. Corrigidos o título e o link da citação da Frontiers; a citação agora é apresentada como contexto, não como um guia atual do mercado; atualizadas as frases sobre sistemas de dois hormônios e loop fechado completo; explicado que o controlador nem sempre é um app de telefone; removidos nomes de marcas comerciais e números de usuários sem fonte; e corrigido OS-AID para *Open-Source Automated Insulin Delivery* @psonnera
- [Glossário](../UsefulLinks/Glossary.md): adicionadas as entradas **AID**, **FCL**, **HCL** e **OS-AID**, com links a partir de **APS** e **Loop Fechado** @psonnera
- Nova página [Verificação de desenvolvedor do Android](#android-developer-verification): impacto da futura exigência de verificação do Google na instalação de apps compilados por você, com métodos de instalação gratuitos (ADB, fluxo avançado, conta de distribuição limitada) @psonnera

## Junho de 2026

- [Compilação no navegador](#browser-build): reorganizada em um fluxo de várias páginas, que começa pela decisão (Fork → keystore Opção 1/Opção 2 com uma página para cada dispositivo → Google Drive → Compilação → Resolução de problemas); abas aninhadas removidas e a instalação do File Manager Plus virou uma etapa em destaque @psonnera
- [Introdução](../Getting-Started/Introduction.md): a terminologia mudou de *DIY* para *OS-AID* (Open-Source Automated Insulin Delivery); adicionados Trio e Stelo; tabela de compatibilidade de bombas/CGMs atualizada @tmhastings

## Março de 2026

- [Adicionada a opção de compilação pela linha de comando (CLI)](../SettingUpAaps/CLIBuild.md) @je-l
- *Computer Build* renomeado para *Android Studio Build*. Nomes de arquivos mantidos nas URLs.

## Janeiro de 2025

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Atualização da lista de CGMs. Dexcom G5, Tomato e Glimp removidos.
- [Interface de rodízio do local de aplicação](#Aapsscreens-site-rotation)
- [Modo de operação](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Dezembro de 2025

- [Ajuste do perfil](../GettingHelp/ProfileTuning.md) de @robrub

## Outubro de 2025

- DiaKEM: novas instalações não funcionam depois da atualização dos servidores @psonnera
- Removido o app modificado do Libre 2 (obsoleto): não funciona com os sensores novos @psonnera
- Reworked Omnipod DASH page @XiTatiON

## Agosto de 2025

- Versões e pré-requisitos do Android Studio atualizados
- Adicionada a versão [3.3.2.1](#version3321), removidas as referências ao Android 16 (corrigido)
- Adicionada a [Compilação no navegador](#browser-build) @Angus

## Maio de 2025

- Adicionada a [página de atualização para a 3.2.0.4](#update-aaps-3204) @psonnera

## Janeiro de 2025

- [Recurso de toque longo](#Preferences-quick-wizard) do Assistente rápido @emilise
- Página do [ISF dinâmico](../DailyLifeWithAaps/DynamicISF.md) reescrita @emilise

## Dezembro de 2024

- Documentação da [versão 3.3](#version3300) @emilise

## Novembro de 2024

- Atualização de [Seu perfil do AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Reorganização do conteúdo sobre [Smartwatches Wear OS](../WearOS/BuildingAapsWearOS.md) @psonnera

## Outubro de 2024

- Atualização de várias páginas:
  - [Quanto tempo vai levar](#preparing-how-long-will-it-take), [Visão geral dos componentes](../Getting-Started/ComponentOverview.md), [Completar os objetivos](../SettingUpAaps/CompletingTheObjectives.md), [Seu perfil do AAPS](../SettingUpAaps/YourAapsProfile.md), [Configuração](../SettingUpAaps/ConfigBuilder.md) e [Preferências](../SettingUpAaps/Preferences.md), [Telas do AAPS](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Cálculo de COB](../DailyLifeWithAaps/CobCalculation.md), [ISF dinâmico](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Instruções de compilação para o Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Trabalho técnico (processo de publicação da documentação, organização dos arquivos...) @psonnera e @emilise

***

Falta o histórico de março de 2022 a setembro de 2024

Com a reformulação da versão 3.2, algumas informações obsoletas foram removidas. Você pode encontrá-las na versão anterior da documentação:

A documentação do AAPS 3.1 está disponível [aqui](https://androidaps.readthedocs.io/en/3.1/index.html).

***

## Fevereiro de 2022

- [Sinal de aviso de qualidade da glicose](#aaps-screens-bg-warning-sign) @tanja
- [Atualização da bomba Medtronic](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Verificações necessárias depois de atualizar para o AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Atualização da documentação para o AAPS 3.0 (parcial) @xJoe
- [Wear OS para o AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Janeiro de 2022

- [Resolução de problemas do Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - atualização @tanja

## Dezembro de 2021

- [Compilar o APK](../SettingUpAaps/BuildingAaps.md) - atualização para o Android Studio Arctic Fox | 2020.3.1 @tanja
- Adicionadas informações sobre a [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

## Novembro de 2021

- Best practices for calibrating a Libre 2 sensor
- [ISF](../UsefulLinks/FAQ.md) - nova explicação do impacto
- Atualização da [resolução de problemas do Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Removido o app modificado do [Dexcom](../CompatibleCgms/DexcomG6.md), porque está obsoleto

## Outubro de 2021

- [Notas de versão](ReleaseNotes.md) do AAPS 3.0 beta

## Setembro de 2021

- Especificação de computador recomendada para [compilar o app AAPS](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Junho de 2021

- [Instalação manual (sideload) de mostradores](../WearOS/WearOsSmartwatch.md)

## Abril de 2021

- Lista de [dispositivos de comunicação](#CompatiblePumps-additional-communication-device) para as bombas Omnipod e Medtronic
- Previsões do AAPS no [Nightscout](#Nightscout-manual-nightscout-setup)

## Março de 2021

- A comunicação dos desenvolvedores mudou do gitter para o [Discord](https://discord.gg/4fQUWHZ4Mw)

## Fevereiro de 2021

- Nova barra de navegação e [troca de idioma](../NavigateDoc/ChangeLanguageVersion.md)

## Janeiro de 2021

- [Aba Ação](#screens-action-tab) - mais detalhes na página 'Telas do AAPS'
- Dexcom G6 com o [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- [Nível da bateria](#screens-sensor-level-battery) do leitor inteligente Libre
- [Objetivos](#objectives-objective3) - novas perguntas
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

## Dezembro de 2020

- [Libre 2](../CompatibleCgms/Libre2.md) - o app modificado não funciona com sensores dos EUA
- [Limites fixos no código do OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 - instalação manual do Google Play Service

## Outubro de 2020

- Accu-Chek Combo - atualização do [ajuste de hora no horário de verão](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - Opção para [enviar valores absolutos](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs - mais detalhes sobre a [localização da pasta](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - atualização de status
- [Comandos SMS - sincronização de hora](../RemoteFeatures/SMSCommands.md)

## Setembro de 2020

- Grande atualização para a nova versão 2.7 do AAPS
- For details see the [release notes](#Releasenotes-version-2-7-0)

## Junho de 2020

- Libre 2 - mais detalhes sobre o app Libre Link modificado e o uso de transmissores Bluetooth
- [Viagens entre fusos horários](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) com o Libre 2

## Maio de 2020

- [Bólus estendido somente para bombas Dana + Insight](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Desativar a vibração da Insight](#Accu-Chek-Insight-Pump-vibration) (somente firmware 3.x)
- [Taxa mínima de solicitação](#Preferences-minimal-request-change) para reduzir o número de notificações no modo de loop aberto
- App Libre Link modificado - verificar se a modificação está correta
- [Linhas de previsão](#aaps-screens-prediction-lines) - mais detalhes

## Abril de 2020

- Registrar insulina com data anterior (por exemplo, aplicada com seringa)
- O suporte ao Android 6 será encerrado na próxima versão master

## Março de 2020

- [Compilar o apk com o Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS com firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **não pode ser usada com o AAPS no momento!**
- [Bólus estendido e mudança para loop aberto](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Atualizar o apk com o Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

## Fevereiro de 2020

- Cuidados com a Automação
- [Autosens](#Open-APS-features-autosens) - explicação curta
- Alternativas ao CarePortal
- Recurso de [bólus estendido](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) - o loop fechado será desativado
- Novo [plugin Perfil local](../SettingUpAaps/ConfigBuilder.md)
- Exemplo de configuração - atualização do Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Complicações do Wear](../WearOS/WearOsSmartwatch.md)

## Janeiro de 2020

- [Correção manual de carboidratos](#screens-bolus-carbs) para registros de carboidratos errados
- [Tamanho das imagens](../SupportingAaps/HowToEditTheDocs.md) ao editar a documentação

## Dezembro de 2019

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - setup with screenshots
- [Accu-Chek Insight e Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - solução alternativa para o uso
- [Glimp](#Config-Builder-bg-source) - versão 4.15.57 e mais novas são suportadas
- [Mostradores](../WearOS/WearOsSmartwatch.md) - grande atualização, com muito mais detalhes
- [Complicações do mostrador](#Watchfaces-complications) - use o seu mostrador favorito com os dados do AAPS

## Novembro de 2019

- [Automação - desativar ao desativar o loop](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 - atualização sobre a troca do transmissor](#xdrip-replace-transmitter)
- [Bólus estendido - por que não funciona no contexto do loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - esportes](#FAQ-sports)
- [Tela inicial - linhas no gráfico](#aaps-screens-main-graph)
- [Insight - Desativar valores absolutos no NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Bomba Medtronic - possíveis entradas duplas](../CompatiblePumps/MedtronicPump.md)
- [Novo tutorial do Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Troca de perfil com porcentagem - exemplo](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Atualização dos comandos SMS](../RemoteFeatures/SMSCommands.md)
- [Resolução de problemas do Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Resolução de problemas - coleção de links](../GettingHelp/GeneralTroubleshooting.md)
- Atualização - guia rápido para usuários experientes
- Documentação - atualização de [edição](#edit-the-docs-code-syntax) e [tradução](#translations-translation-of-the-documentation).

## Outubro de 2019

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - log options](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Cálculo de COB em uma página separada](../DailyLifeWithAaps/CobCalculation.md)
- [COB - detecção de valor de COB errado](#CobCalculation-detection-of-wrong-cob-values)
- [Resolução de problemas específica do Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Atualização dos Objetivos, versão 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Atualização das Preferências](../SettingUpAaps/Preferences.md)
- [Inibidores de SGLT-2 - não use quando estiver usando o loop](#PreparingForAaps-no-sglt-2-inhibitors)
- [Resolução de problemas dos comandos SMS](#SMSCommands-troubleshooting)
- [xDrip - atualização sobre a troca do transmissor G6](#xdrip-replace-transmitter)

## Setembro de 2019

- [Automatizar](../DailyLifeWithAaps/Automations.md)
- [Calculadora de bólus](#AapsScreens-wrong-cob-detection) - absorção lenta de carboidratos
- [Segurança do Nightscout](#Nightscout-security-considerations)
- [Deslocamento de tempo do perfil](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (mais detalhes)
- [Monitoramento Remoto](../RemoteFeatures/RemoteMonitoring.md)
- [O que é um sistema de loop fechado?](#Introduction-what-does-hybrid-closed-loop-mean)

## Agosto de 2019

- Dexcom G6 - região do app modificado
- [Novo transmissor Dexcom G6](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- O que eu preciso? - nova estrutura e informações adicionais
- Nova estrutura
