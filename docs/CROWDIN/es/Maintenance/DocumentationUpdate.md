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

## Febrero 2022

- [Señal de aviso de calidad de la glucosa](#aaps-screens-bg-warning-sign) @tanja
- [Actualización de la bomba Medtronic](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Comprobaciones necesarias después de actualizar a AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Actualización de la documentación para AAPS 3.0 (en parte) @xJoe
- [Wear OS para AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Enero 2022

- [Solución de problemas para Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md): actualización @tanja

## Diciembre 2021

- [Compilar el APK](../SettingUpAaps/BuildingAaps.md): actualización para Android Studio Arctic Fox | 2020.3.1 @tanja
- Información añadida sobre [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

## Noviembre 2021

- Best practices for calibrating a Libre 2 sensor
- [ISF](../UsefulLinks/FAQ.md): nueva explicación de su efecto
- Actualización de [Solución de problemas para Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Se eliminó la app de [Dexcom](../CompatibleCgms/DexcomG6.md) parcheada porque está obsoleta

## Octubre 2021

- [Notas de la versión](ReleaseNotes.md) AAPS 3.0 beta

## Septiembre 2021

- Especificaciones recomendadas del ordenador para [compilar la app AAPS](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Junio 2021

- [Instalar esferas de reloj manualmente (sideload)](../WearOS/WearOsSmartwatch.md)

## Abril 2021

- Lista de [dispositivos de comunicación](#CompatiblePumps-additional-communication-device) para bombas Omnipod y Medtronic
- Predicciones de AAPS en [Nightscout](#Nightscout-manual-nightscout-setup)

## Marzo 2021

- La comunicación de los desarrolladores pasó de gitter a [Discord](https://discord.gg/4fQUWHZ4Mw)

## Febrero 2021

- Nueva barra de navegación y [selector de idioma](../NavigateDoc/ChangeLanguageVersion.md)

## Enero 2021

- [Pestaña Acción](#screens-action-tab): más detalles en la página «Pantallas de AAPS»
- Dexcom G6 con [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- [Nivel de batería](#screens-sensor-level-battery) del lector inteligente de Libre
- [Objetivos](#objectives-objective3): preguntas nuevas
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

## Diciembre 2020

- [Libre 2](../CompatibleCgms/Libre2.md): la app parcheada no funciona con sensores de EE. UU.
- [Límites fijos de OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3: instalación manual de Google Play Services

## Octubre 2020

- Accu-Chek Combo: actualización sobre el [ajuste de la hora por el horario de verano](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight: opción para [subir valores absolutos](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs: más detalles sobre la [ubicación de la carpeta](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros: actualización del estado
- [Comandos SMS: sincronización de la hora](../RemoteFeatures/SMSCommands.md)

## Septiembre 2020

- Gran actualización para la nueva versión 2.7 de AAPS
- For details see the [release notes](#Releasenotes-version-2-7-0)

## Junio 2020

- Libre 2: más detalles sobre la app Libre Link parcheada y el uso de transmisores Bluetooth
- [Viajar entre zonas horarias](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) con Libre 2

## Mayo 2020

- [Bolo extendido solo para bombas Dana e Insight](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Desactivar la vibración de Insight](#Accu-Chek-Insight-Pump-vibration) (solo firmware 3.x)
- [Tasa mínima de solicitud](#Preferences-minimal-request-change) para reducir el número de notificaciones en modo de lazo abierto
- App Libre Link parcheada: comprobar si está bien parcheada
- [Líneas de predicción](#aaps-screens-prediction-lines): más detalles

## Abril 2020

- Registrar insulina con fecha anterior (p. ej., puesta con jeringa)
- La próxima versión master dejará de ser compatible con Android 6

## Marzo 2020

- [Compilar el APK con Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS con firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md): **¡por ahora no se puede usar con AAPS!**
- [Bolo extendido y cambio a lazo abierto](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Actualizar el APK con Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

## Febrero 2020

- Advertencias sobre la automatización
- [Autosens](#Open-APS-features-autosens): explicación breve
- Alternativas al Portal de cuidados
- Función de [Bolo extendido](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only): el lazo cerrado se desactivará
- Nuevo [complemento Perfil local](../SettingUpAaps/ConfigBuilder.md)
- Ejemplo de configuración: actualización de Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Complicaciones para relojes (Wear)](../WearOS/WearOsSmartwatch.md)

## Enero 2020

- [Corrección manual de carbohidratos](#screens-bolus-carbs) para entradas de carbohidratos erróneas
- [Tamaño de las imágenes](../SupportingAaps/HowToEditTheDocs.md) al editar la documentación

## Diciembre 2019

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - setup with screenshots
- [Accu-Chek Insight y Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps): solución alternativa para su uso
- [Glimp](#Config-Builder-bg-source): compatible con la versión 4.15.57 y posteriores
- [Esferas de reloj](../WearOS/WearOsSmartwatch.md): gran actualización, con muchos más detalles
- [Complicaciones de esferas](#Watchfaces-complications): usa tu esfera de reloj favorita con datos de AAPS

## Noviembre 2019

- [Automatización: se desactiva al desactivar el lazo](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6: actualización sobre el cambio de transmisor](#xdrip-replace-transmitter)
- [Bolo extendido: por qué no funciona con el lazo](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Preguntas frecuentes: deporte](#FAQ-sports)
- [Pantalla principal: líneas del gráfico](#aaps-screens-main-graph)
- [Insight: desactivar los valores absolutos en NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Bomba Medtronic: posibles entradas duplicadas](../CompatiblePumps/MedtronicPump.md)
- [Nuevo tutorial de Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Cambio de perfil con porcentaje - ejemplo](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Actualización de comandos SMS](../RemoteFeatures/SMSCommands.md)
- [Solución de problemas para Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Solución de problemas: colección de enlaces](../GettingHelp/GeneralTroubleshooting.md)
- Actualizar: guía rápida para usuarios con experiencia
- Documentación: actualización de [edición](#edit-the-docs-code-syntax) y [traducción](#translations-translation-of-the-documentation).

## Octubre 2019

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - log options](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Cálculo de COB en una página aparte](../DailyLifeWithAaps/CobCalculation.md)
- [COB: detección de un valor COB incorrecto](#CobCalculation-detection-of-wrong-cob-values)
- [Resolución de problemas específica de Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Actualización de los Objetivos para la versión 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Actualización de las Preferencias](../SettingUpAaps/Preferences.md)
- [Inhibidores de SGLT-2: no usar con el lazo](#PreparingForAaps-no-sglt-2-inhibitors)
- [Solución de problemas de los comandos SMS](#SMSCommands-troubleshooting)
- [xDrip: actualización sobre el cambio de transmisor del G6](#xdrip-replace-transmitter)

## Septiembre 2019

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Asistente de bolo](#AapsScreens-wrong-cob-detection): absorción lenta de carbohidratos
- [Seguridad de Nightscout](#Nightscout-security-considerations)
- [Desplazamiento horario del perfil](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (más detalles)
- [Seguimiento remoto](../RemoteFeatures/RemoteMonitoring.md)
- [¿Qué es un sistema de lazo cerrado?](#Introduction-what-does-hybrid-closed-loop-mean)

## Agosto 2019

- Región de la app de Dexcom G6 parcheada
- [Nuevo transmisor de Dexcom G6](#xdrip-connect-g6-transmitter-for-the-first-time) («firefly» / 8G...)
- ¿Qué necesito? - nueva estructura e información adicional
- Nueva estructura
