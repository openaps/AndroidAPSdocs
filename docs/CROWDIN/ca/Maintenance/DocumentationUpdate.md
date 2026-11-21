- - -
tocdepth: 1
- - -

# Actualitzacions i canvis de la documentació

## Octubre de 2026

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Rellotges intel·ligents i AAPS](#watches-external-companion-apps): la secció **Samsung Tizen** passa a ser **Apps complementàries externes** i mostra les aplicacions que llegeixen el broadcast d'**AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 i posteriors es connecten directament a **AAPS** sense xDrip+: s'hi han afegit els passos de configuració, també resumits a [Configuració](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) i [Monitoratge remot](../RemoteFeatures/RemoteMonitoring.md). Rellotges Bluejay: el GTS ja no es fabrica, model actual actualitzat @psonnera
- [Compilació al navegador amb AAPS Builder](#aaps-builder): versió 6 del workflow de compilació. Els passos de compilació ara fan servir versions exactes i revisades de les eines i de la màquina de compilació de GitHub, i la compilació explica clarament quan s'ha enganxat un text incorrecte al secret `KEYSTORE_SET`. La [pàgina de configuració](#aaps-builder-setup) ara forma part de la documentació i està traduïda, comprova el vostre nom d'usuari de GitHub i té una ajuda més clara per al secret, per a «Page not found» (404) i per a l'aplicació de GitHub. Si el vostre `.github/workflows/build.yml` diu versió 5 o anterior, substituïu-lo com s'explica a [Actualitzar AAPS](#aaps-builder-updates) @psonnera
- [Instal·lador web d'AAPS](#web-installer): ara és una pàgina de la documentació, traduïda com les altres. L'adreça antiga encara funciona @psonnera
- [Compilació al navegador amb AAPS Builder](#aaps-builder): la versió 3 del workflow de compilació afegeix la variant `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 i posteriors). Per compilar-la, substituïu el vostre `.github/workflows/build.yml` com s'explica a [Actualitzar AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): treta l'aplicació Dexcom G7 modificada (DiaKEM), que ja no funciona en instal·lacions noves @psonnera
- [Compilació al navegador amb AAPS Builder](#aaps-builder): versió 2 del workflow de compilació. Es treuen les compilacions setmanals automàtiques (sense programació, sense les variables `AUTO_BUILD` / `AUTO_VARIANT`, sense etiquetes `built/…`): cada compilació la inicieu vosaltres, amb la versió i la variant que trieu, i el workflow només té accés de lectura al vostre repositori. Si el vostre `.github/workflows/build.yml` diu versió 1, substituïu-lo com s'explica a [Actualitzar AAPS](#aaps-builder-updates). Afegides captures de pantalla per a cada pas @psonnera
- [Compilació al navegador amb AAPS Builder](#aaps-builder): el workflow de compilació ara forma part d'aquesta documentació. Sense repositori plantilla: creeu un repositori privat buit i hi afegiu el workflow des de la pàgina de configuració (nou pas 2). El workflow ja no comprova actualitzacions en un repositori extern. Si vau crear el vostre repositori a partir de la plantilla anterior, substituïu `.github/workflows/build.yml` pel workflow de la pàgina de configuració com s'explica a [Actualitzar AAPS](#aaps-builder-updates) @psonnera
- Pàgina nova [Compilació al navegador amb AAPS Builder](#aaps-builder): compileu AAPS des d'un telèfon Android amb una pàgina de configuració allotjada en aquest lloc, amb compilacions setmanals automàtiques i sense fitxer de preparació. Substitueix les instruccions per a Android de la compilació al navegador (s'han tret les pàgines de File Manager Plus). AAPS Builder creat per @dio99, documentació de @psonnera

## Agost de 2026

- [Transferir i instal·lar AAPS al vostre telèfon](../SettingUpAaps/TransferringAndInstallingAaps.md): la pàgina *Verificació de desenvolupadors d'Android* s'ha unit a la guia d'instal·lació, s'hi ha afegit l'[instal·lador web](#android-developer-verification-web) (instal·la l'APK directament des del navegador, sense verificació) i l'ADB sense fil @psonnera

## Juliol de 2026

- [Introducció a APS i AAPS](../Getting-Started/Introduction.md): revisió de l'exactitud de la secció APS. S'han corregit el títol i l'enllaç de la cita de Frontiers, s'ha presentat com a context i no com a guia actual del mercat, s'han actualitzat les afirmacions sobre el sistema bihormonal i el llaç tancat complet, s'ha aclarit que el controlador no sempre és una aplicació del telèfon, s'han tret els noms de marques comercials i les xifres d'usuaris sense font, i s'ha corregit OS-AID a *Open-Source Automated Insulin Delivery* @psonnera
- [Glossari](../UsefulLinks/Glossary.md): afegides les entrades **AID**, **FCL**, **HCL** i **OS-AID**, amb enllaços des d'**APS** i **Llaç tancat** @psonnera
- Pàgina nova [Verificació de desenvolupadors d'Android](#android-developer-verification): efecte del futur requisit de verificació de Google en la instal·lació d'aplicacions compilades per un mateix, amb maneres gratuïtes d'instal·lar (ADB, procés avançat, compte de distribució limitada) @psonnera

## Juny de 2026

- [Compilació al navegador](#browser-build): reorganitzada en un procés de diverses pàgines que comença per la decisió (Fork → magatzem de claus Opció 1/Opció 2 amb una pàgina pròpia per a cada dispositiu → Google Drive → Compilació → Resolució de problemes); tretes les pestanyes niuades, i la instal·lació de File Manager Plus ara és un pas ben visible @psonnera
- [Introducció a APS i AAPS](../Getting-Started/Introduction.md): la terminologia passa de *DIY* a *OS-AID* (Open-Source Automated Insulin Delivery), s'hi han afegit Trio i Stelo, i s'ha actualitzat la taula de compatibilitat de bombes/CGM @tmhastings

## Març de 2026

- [Afegida l'opció de compilació des de la línia d'ordres](../SettingUpAaps/CLIBuild.md) @je-l
- *Compilació a l'ordinador* passa a dir-se *Compilació amb Android Studio*. Es mantenen els noms dels fitxers per a les URL.

## Gener de 2025

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Actualització de la llista de CGM. Trets Dexcom G5, Tomato i Glimp.
- [Interfície de rotació de punts d'inserció](#Aapsscreens-site-rotation)
- [Mode de funcionament](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Desembre de 2025

- [Ajustar el perfil d'AAPS](../GettingHelp/ProfileTuning.md), de @robrub

## Octubre de 2025

- DiaKEM: les instal·lacions noves no funcionen després de l'actualització dels servidors @psonnera
- Tret el Libre 2 amb aplicació modificada (obsolet): no funciona amb els sensors nous @psonnera
- Reworked Omnipod DASH page @XiTatiON

## Agost de 2025

- Versions i requisits d'Android Studio actualitzats
- Afegida la versió [3.3.2.1](#version3321), tretes les referències a Android 16 (corregit)
- Afegida la [Compilació al navegador](#browser-build) @Angus

## Maig de 2025

- Afegida la [pàgina d'actualització a 3.2.0.4](#update-aaps-3204) @psonnera

## Gener de 2025

- Assistent ràpid: [funció de prémer llargament](#Preferences-quick-wizard) @emilise
- Pàgina [ISF dinàmic](../DailyLifeWithAaps/DynamicISF.md) reescrita @emilise

## Desembre de 2024

- Documentació de la [versió 3.3](#version3300) @emilise

## Novembre de 2024

- Actualització d'[El vostre perfil d'AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Reorganization of [Wear OS Smartwatches](../WearOS/BuildingAapsWearOS.md) content @psonnera

## Octubre de 2024

- Actualització de diverses pàgines:
  - [How long will it take](#preparing-how-long-will-it-take), [Component Overview](../Getting-Started/ComponentOverview.md), [Completing the objectives](../SettingUpAaps/CompletingTheObjectives.md), [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md), [Config Builder](../SettingUpAaps/ConfigBuilder.md) & [Preferences](../SettingUpAaps/Preferences.md), [AAPS screens](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Càlcul del COB](../DailyLifeWithAaps/CobCalculation.md), [ISF dinàmic](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Instruccions de compilació per a Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Technical work (deployment process for the documentation, files organization...) @psonnera & @emilise

***

Falta l'historial de març de 2022 a setembre de 2024

Amb la revisió per a la versió 3.2, s'ha tret informació obsoleta. La trobareu a la versió anterior de la documentació:

La documentació d'AAPS 3.1 està disponible [aquí](https://androidaps.readthedocs.io/en/3.1/index.html).

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
