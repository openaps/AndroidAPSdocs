- - -
tocdepth: 1
- - -

# Actualizaciones y cambios de la documentación

## Octubre 2026

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Relojes inteligentes y AAPS](#watches-external-companion-apps): la sección **Samsung Tizen** pasa a ser **Aplicaciones complementarias externas** y muestra las apps que leen la transmisión (broadcast) de **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 y posteriores se conectan directamente a **AAPS** sin xDrip+: se añadieron los pasos de configuración, resumidos también en [Configuración](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) y [Seguimiento remoto](../RemoteFeatures/RemoteMonitoring.md). Relojes Bluejay: GTS descatalogado, modelo actual actualizado @psonnera
- [Compilación en el navegador con AAPS Builder](#aaps-builder): versión 6 del workflow de compilación. Los pasos de compilación ahora usan versiones exactas y revisadas de las herramientas y de la máquina de compilación de GitHub. La compilación explica claramente cuándo se pegó un texto incorrecto en el secret `KEYSTORE_SET`. La [página de configuración](#aaps-builder-setup) ahora forma parte de la documentación y está traducida, comprueba tu nombre de usuario de GitHub y tiene una ayuda más clara para el secret, «Page not found» (404) y la app de GitHub. Si tu `.github/workflows/build.yml` indica la versión 5 o anterior, sustitúyelo como se explica en [Actualizar AAPS](#aaps-builder-updates) @psonnera
- [Instalador web de AAPS](#web-installer): ahora es una página de la documentación, traducida como las demás. La dirección antigua sigue funcionando @psonnera
- [Compilación en el navegador con AAPS Builder](#aaps-builder): la versión 3 del workflow de compilación añade la variante `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 y posteriores). Para compilarla, sustituye tu `.github/workflows/build.yml` como se explica en [Actualizar AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): eliminada la app parcheada de Dexcom G7 (DiaKEM), que ya no funciona en instalaciones nuevas @psonnera
- [Compilación en el navegador con AAPS Builder](#aaps-builder): versión 2 del workflow de compilación. Se eliminan las compilaciones automáticas semanales (sin programación, sin variables `AUTO_BUILD` / `AUTO_VARIANT`, sin etiquetas `built/…`): cada compilación la inicias tú, con la versión y la variante que elijas, y el workflow solo tiene acceso de lectura a tu repositorio. Si tu `.github/workflows/build.yml` indica la versión 1, sustitúyelo como se explica en [Actualizar AAPS](#aaps-builder-updates). Añadidas capturas de pantalla para cada paso @psonnera
- [Compilación en el navegador con AAPS Builder](#aaps-builder): el workflow de compilación ahora forma parte de esta documentación. Sin repositorio de plantilla: creas un repositorio privado vacío y añades el workflow desde la página de configuración (nuevo paso 2). El workflow ya no busca actualizaciones en un repositorio externo. Si creaste tu repositorio con la plantilla anterior, sustituye `.github/workflows/build.yml` por el workflow de la página de configuración, como se explica en [Actualizar AAPS](#aaps-builder-updates) @psonnera
- Nueva página [Compilación en el navegador con AAPS Builder](#aaps-builder): compila AAPS desde un teléfono Android con una página de configuración alojada en este sitio, con compilaciones automáticas semanales y sin archivo de preparación. Sustituye las instrucciones de Android de la compilación en el navegador (se eliminaron las páginas de File Manager Plus). AAPS Builder creado por @dio99, documentación de @psonnera

## Agosto de 2026

- [Transferir e instalar AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md): la página *Verificación de desarrolladores de Android* se unió a la guía de instalación; se añadieron el [instalador web](#android-developer-verification-web) (instala el APK directamente desde el navegador, sin necesidad de verificación) y ADB inalámbrico @psonnera

## Julio 2026

- [Introducción](../Getting-Started/Introduction.md): revisión de la exactitud de la sección sobre APS. Se corrigieron el título y el enlace de la cita de Frontiers y se presenta como contexto, no como guía actual del mercado. Se actualizaron las afirmaciones sobre sistemas bihormonales y de lazo cerrado completo, se aclaró que el controlador no siempre es una app del teléfono, se eliminaron marcas comerciales y cifras de usuarios sin fuente, y se corrigió OS-AID a *Open-Source Automated Insulin Delivery* @psonnera
- [Glosario](../UsefulLinks/Glossary.md): añadidas las entradas **AID**, **FCL**, **HCL** y **OS-AID**, con enlaces desde **APS** y **Lazo cerrado** @psonnera
- Nueva página [Verificación de desarrolladores de Android](#android-developer-verification): efecto del próximo requisito de verificación de Google en la instalación de apps compiladas por uno mismo, con métodos de instalación gratuitos (ADB, flujo avanzado, cuenta de distribución limitada) @psonnera

## Junio 2026

- [Compilación en el navegador](#browser-build): reorganizada en un flujo de varias páginas que empieza por las decisiones (Fork → almacén de claves Opción 1/Opción 2 con una página para cada dispositivo → Google Drive → Compilar → Solución de problemas); eliminadas las pestañas anidadas e instalar File Manager Plus es ahora un paso destacado @psonnera
- [Introducción](../Getting-Started/Introduction.md): la terminología cambia de *DIY* a *OS-AID* (Open-Source Automated Insulin Delivery), se añadieron Trio y Stelo y se actualizó la tabla de compatibilidad de bombas/MCG @tmhastings

## Marzo 2026

- [Añadida la opción de compilación por línea de comandos (CLI)](../SettingUpAaps/CLIBuild.md) @je-l
- *Computer Build* pasa a llamarse *Android Studio Build*. Se mantienen los nombres de archivo para las URL.

## Enero 2025

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Actualización de la lista de MCG. Eliminados Dexcom G5, Tomato y Glimp.
- [Interfaz de rotación de sitios de inserción](#Aapsscreens-site-rotation)
- [Modo de funcionamiento](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Diciembre 2025

- [Ajustar el perfil de AAPS](../GettingHelp/ProfileTuning.md), de @robrub

## Octubre 2025

- DiaKEM: las instalaciones nuevas no funcionan desde la actualización de los servidores @psonnera
- Eliminada la app parcheada de Libre 2 (obsoleta): no funciona con los sensores nuevos @psonnera
- Reworked Omnipod DASH page @XiTatiON

## Agosto 2025

- Actualizadas las versiones y los requisitos previos de Android Studio
- Añadida la versión [3.3.2.1](#version3321), eliminadas las referencias a Android 16 (corregido)
- Añadida la [Compilación en el navegador](#browser-build) @Angus

## Mayo 2025

- Añadida la [página de actualización a 3.2.0.4](#update-aaps-3204) @psonnera

## Enero 2025

- [Pulsación larga](#Preferences-quick-wizard) en el Asistente rápido @emilise
- Página de [ISF Dinámico](../DailyLifeWithAaps/DynamicISF.md) reescrita @emilise

## Diciembre 2024

- Documentación de la [versión 3.3](#version3300) @emilise

## Noviembre 2024

- Actualización de [Tu perfil de AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Reorganización del contenido sobre [relojes inteligentes Wear OS](../WearOS/BuildingAapsWearOS.md) @psonnera

## Octubre 2024

- Actualización de varias páginas:
  - [¿Cuánto tiempo llevará?](#preparing-how-long-will-it-take), [Resumen de componentes](../Getting-Started/ComponentOverview.md), [Completar los objetivos](../SettingUpAaps/CompletingTheObjectives.md), [Tu perfil de AAPS](../SettingUpAaps/YourAapsProfile.md), [Tabla de configuraciones](../SettingUpAaps/ConfigBuilder.md) y [Preferencias](../SettingUpAaps/Preferences.md), [Pantallas de AAPS](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Cálculo de carbohidratos (COB)](../DailyLifeWithAaps/CobCalculation.md), [ISF Dinámico](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Instrucciones de compilación para Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Trabajo técnico (proceso de publicación de la documentación, organización de archivos...) @psonnera y @emilise

***

Falta el historial de marzo de 2022 a septiembre de 2024

Con la reestructuración de la versión 3.2 se eliminó información obsoleta. Puedes encontrarla en la versión anterior de la documentación:

La documentación de AAPS 3.1 está disponible [aquí](https://androidaps.readthedocs.io/en/3.1/index.html).

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
