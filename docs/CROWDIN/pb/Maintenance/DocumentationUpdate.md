- - -
tocdepth: 1
- - -

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
