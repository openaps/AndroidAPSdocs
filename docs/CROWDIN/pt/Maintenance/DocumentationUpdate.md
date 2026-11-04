- - -
tocdepth: 1
- - -

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
- Reworked Omnipod DASH page @XiTatiON

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

```{dropdown} Older updates (2019 to 2022)
**February 2022**

- [BG quality warning sign](#aaps-screens-bg-warning-sign) @tanja
- [Medtronic pump update](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Necessary checks after update to AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Update docs for AAPS 3.0 (partly) @xJoe
- [Wear OS for AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

**January 2022**

- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - update @tanja

**December 2021**

- [Building the APK](../SettingUpAaps/BuildingAaps.md) - update Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) information added @MilosKozak

**November 2021**

- Best practices for calibrating a Libre 2 sensor
- [ISF](../UsefulLinks/FAQ.md) reformulation of impact
- Update [troubleshooting Android studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Removed patched [Dexcom](../CompatibleCgms/DexcomG6.md) app as it is obsolete

**October 2021**

- [Release notes](ReleaseNotes.md) AAPS 3.0 beta

**September 2021**

- Recommended computer specification to [build AAPS app](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

**June 2021**

- [Watchface sideload](../WearOS/WearOsSmartwatch.md)

**April 2021**

- List of [communication devices](#CompatiblePumps-additional-communication-device) for Omnipod and Medtronic pumps
- AAPS predictions in [Nightscout](#Nightscout-manual-nightscout-setup)

**March 2021**

- Dev communication moved from gitter to [discord](https://discord.gg/4fQUWHZ4Mw)

**February 2021**

- New navigation bar and [language switch](../NavigateDoc/ChangeLanguageVersion.md)

**January 2021**

- [Action tab](#screens-action-tab) - more details on page 'AAPS screens'
- Dexcom G6 with [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre smart reader [battery level](#screens-sensor-level-battery)
- [Objectives](#objectives-objective3) - new questions
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

**December 2020**

- [Libre 2](../CompatibleCgms/Libre2.md) - patched app does not work with US sensors
- [OpenAPS hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 Manual Installation of Google Play Service

**October 2020**

- Accu-Chek Combo - update [time adjustment daylight savings time](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - Option to [upload absolute values](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs - more details about [folder location](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - status update
- [SMS commands - time sync](../RemoteFeatures/SMSCommands.md)

**September 2020**

- Major update for new AAPS version 2.7
- For details see the [release notes](#Releasenotes-version-2-7-0)

**June 2020**

- Libre 2 - more details patched Libre Link app & use of Bluetooth transmitters
- [Time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) with Libre 2

**May 2020**

- [Extended bolus only for Dana + Insight pumps](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight deactivate vibration](#Accu-Chek-Insight-Pump-vibration) (firmware 3.x only)
- [Minimal request rate](#Preferences-minimal-request-change) to reduce number of notifications in open loop mode
- Patched Libre Link app - check if correctly patched
- [Prediction lines](#aaps-screens-prediction-lines) - more details

**April 2020**

- Backdate insulin (i.e. given by syringe)
- Android 6 support will be discontinued in next master version

**March 2020**

- [Build apk with Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS with firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **cannot currently be used with AAPS!**
- [Extended bolus and switch to open loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Update apk with Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

**February 2020**

- Automation caveats
- [Autosens](#Open-APS-features-autosens) - short explanation
- Careportal alternatives
- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled
- New [Local Profile plugin](../SettingUpAaps/ConfigBuilder.md)
- Sample Setup - update Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Wear complications](../WearOS/WearOsSmartwatch.md)

**January 2020**

- [Manual carb correction](#screens-bolus-carbs) for faulty carb entries
- [Image size](../SupportingAaps/HowToEditTheDocs.md) when editing docs

**December 2019**

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - setup with screenshots
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - workaround for usage
- [Glimp](#Config-Builder-bg-source) - version 4.15.57 and newer supported
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - major update, way more details
- [Watchface complications](#Watchfaces-complications) - use your favorite watchface with AAPS data

**November 2019**

- [Automation - deactivate when disabling loop](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 replace transmitter update](#xdrip-replace-transmitter)
- [Extended bolus - why they do not work in a loop context](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - sports](#FAQ-sports)
- [Homescreen - lines on graph](#aaps-screens-main-graph)
- [Insight - Disable absolute values in NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic pump - possible double entries](../CompatiblePumps/MedtronicPump.md)
- [New Freestyle Libre 2 tutorial](../CompatibleCgms/Libre2.md)
- [Profile switch with percentage - example](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [SMS commands update](../RemoteFeatures/SMSCommands.md)
- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Troubleshooting - link collection](../GettingHelp/GeneralTroubleshooting.md)
- Update - quick walk-through for experienced users
- Docs - update [edit](#edit-the-docs-code-syntax) and [translation](#translations-translation-of-the-documentation).

**October 2019**

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - log options](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB calculation on separate page](../DailyLifeWithAaps/CobCalculation.md)
- [COB - wrong COB value detection](#CobCalculation-detection-of-wrong-cob-values)
- [Dexcom G6 specific troubleshooting](#DexcomG6-troubleshooting-g6)
- [Objectives update version 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Preferences update](../SettingUpAaps/Preferences.md)
- [SGLT-2 inhibitors - do not use when looping](#PreparingForAaps-no-sglt-2-inhibitors)
- [SMS Commands Troubleshooting](#SMSCommands-troubleshooting)
- [xDrip - update G6 transmitter replacement](#xdrip-replace-transmitter)

**September 2019**

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Bolus calculator](#AapsScreens-wrong-cob-detection) - slow carb absorption
- [Nightscout security](#Nightscout-security-considerations)
- [Profile timeshift](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (more details)
- [Remote monitoring](../RemoteFeatures/RemoteMonitoring.md)
- [What is a closed loop system?](#Introduction-what-does-hybrid-closed-loop-mean)

**August 2019**

- Dexcom G6 patched app region
- [Dexcom G6 new transmitter](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- What do I need? - new structure & additional information
- New structure
```
