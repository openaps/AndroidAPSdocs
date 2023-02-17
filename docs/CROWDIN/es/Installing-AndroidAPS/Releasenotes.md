(release-notes)=
# Notas de la versión

Please follow the instructions in the [update manual](../Installing-AndroidAPS/Update-to-new-version.md). También puede encontrar una sección de resolución de problemas que se ocupa de las dificultades más comunes cuando se actualiza en la página de actualización manual.

Recibirá la siguiente información tan pronto como se disponga de una nueva actualización:

```{image} ../images/AAPS_LoopDisable90days.png
:alt: Update info
```

Entonces tienes 60 días para actualizar. If you do not update within these 60 days AAPS will fall back to LGS (low glucose suspend - see [glossary](../Getting-Started/Glossary.md)) as in [objective 6](../Usage/Objectives.html).

Si no se actualiza durante otros 30 días (90 días a partir de la fecha de la nueva versión), AAPS cambiará a Lazo Abierto.

Por favor, entienda que este cambio no tiene la intención de molestarlo, sino que se debe a razones de seguridad. Las nuevas versiones de AndroidAPS no sólo proporcionan nuevas características, sino también importantes arreglos de seguridad. Por lo tanto, es necesario actualizar lo antes posible. Desafortunadamente, todavía hay informes de error de versiones muy antiguas, por lo que esto es un intento de mejorar la seguridad para cada usuario y toda la comunidad de DIY. Gracias por tu comprensión.

```{admonition} First version of AndroidAPS
:class: note

The first test version started already in 2015. In 2016 has beend the first released version.

The chronology of these releases is not available at the moment but as this questions is asked severeal times we document it here.

```

## Versión de Android y versión de AAPS

Si tu smartphone utiliza una versión de Android anterior a Android 9, no podrás utilizar AAPS v3 y posteriores, ya que requiere al menos Android 9.

Se han lanzado nuevas versiones de AAPS que sólo comprueban la versión de Android del teléfono, para permitir a los usuarios instalar versiones anteriores de AAPS en teléfonos con versiones de Android inferiores a Android 9. No se incluyen otras mejoras.

### Android 9 y superiores

- Usa la última versión de AAPS
- Descargar el código fuente de AAPS desde <https://github.com/nightscout/AndroidAPS>

### Android 8

- Usa la versión de AAPS **2.8.2.1**
- Descargar el código de AAPS desde <https://github.com/nightscout/AndroidAPS> branch 2.8.2.1

### Android 7

- Usa la versión de AAPS **2.6.2**
- Descargar el código de AAPS desde <https://github.com/nightscout/AndroidAPS> branch 2.6.2

## Versión 3.2.0

Fecha de lanzamiento: XX-XX-2023

### Notas importantes

- NS 15 es necesario. Por el momento, en la rama "dev" del repositorio principal de NS.
- Al utilizar websockets en el plugin NS v3,  los tratamientos introducidos a través de NS UI (botón más) y otras aplicaciones que utilizan la API v1, no se envían a AAPS. Esto se solucionará en futuras versiones de NS.
- Websockets en el plugin v3 funciona de forma similar al plugin v1. Sin websockets habilitados, AAPS programa regularmente descargas desde NS, lo que debería reducir el consumo de batería, porque NS no está permanentemente conectado. En el lado opuesto, supone retrasos en el intercambio de datos.
- Si está utilizando xDrip+ como fuente de datos de glucosa, debes seleccionarlo de nuevo después de la actualización, debido a cambios internos.
- Tidepool puede utilizarse como sustituto de NS para superar el primer objetivo.
- Si envías datos a xDrip+, debes configurar el plugin de sincronización de xDrip+. Para recibir BGs de AAPS en xDrip, debe estar seleccionada la fuente de datos hardware "xDrip+ Sync Follower".


### Changes

- Controlador de bomba EOPatch2 / Glucomen Day Pump @jungsomyeonggithub @MilosKozak
- Controlador de bomba Accu-Chek Combo V2 (sin necesidad de Ruffy) @dv1
- Soporte al MCG Glunovo @christinadamianou
- Soporte a Dexcom G7 @MilosKozak @rICTx-T1D @khskekec
- Plugin NSClient v3 @MilosKozak
- Soporte para Tidepool @MilosKozak
- Plugin de suavizado de datos de glucosa @MilosKozak @justmara inspirado en el proyecto Tsunami, @jbr7rr
- Corregidos muchos problemas de la versión 3.1
- Permitir añadir notas desde más lugares @Sergey Zorchenko
- Correcciones en la interfaz de usuario (UI) @MilosKozak @osodebailar @Andries-Smit @yodax @philhoul @dv1 @paravoid
- Nuevos comandos SMS para Lazo LGS/Cerrado @pzadroga
- Traducciones Wear @Andries-Smit
- Traslado de comunicaciones con xDrip+ a un módulo independiente @MilosKozak
- Cambios internos: actualización de versiones de librerías, migración a rx3, nueva estructura de módulos @MilosKozak
- Correcciones en el controlador de Diaconn @miyeongkim
- AAPSClient provides info if main phone is plugged in electricity @MilosKozak
- Más de 125k+ nuevas líneas de código y más de 150k líneas modificadas

## Versión 3.1.0

Release date: 19-07-2022

(important-hints-3-1-0)=
### Notas importantes

- Después de actualizar, desinstalar la aplicación Wear del reloj e instalar la nueva versión (no se puede actualizar directamente)
- Usuarios de Omnipod: Actualizar cuando toque cambio del POD !!!

### Changes

- Corrección de errores de la versión 3.0
- fix application freezing @MilosKozak
- fixed DASH driver @avereha
- fixed Dana drivers @MilosKozak
- huge UI improvement, cleanup and unification, migration to material design, styles, white theme, new icons. @Andries-Smit @MilosKozak @osodebailar @Philoul
- widget @MilosKozak
- Soporte para Aidex CGM @andyrozman @markvader (sólo Pumpcontrol)
- Watch `Wear OS tiles <../Configuration/Configuration/Watchfaces.mdl#wear-os-tiles>`, translations @Andries-Smit
- Wear code refactored. No compatible con versiones anteriores @MilosKozak
- a11y improvements @Andries-Smit
- new protection option PIN @Andries-Smit
- allow graph scale from menu @MilosKozak
- more statistics available @MilosKozak
- MDI plugin removed in favor of VirtualPump
- new automation action: StopProcessing (following rules)

## Versión 3.0.0

Fecha de lanzamiento: 31-01-2022

(important-hints-3-0-0)=
### Notas importantes

- **Ahora, la versión mínima requerida de Android es la 9.0**
- **Data is not migrated to new database.** Do not complain, it's so huge change so it's simply not possible. Debido a esto, después de aplicar la actualización, el IOB, los COB, los tratamientos, etc. serán elimiandos. You have to create new [profile switch](../Usage/Profiles.md) and start with zero IOB and COB. Planifica la actualización con cuidado. La mejor situación para realizar la actualización es cuando no tengamos insulina activa ni carbohidratos.
- Use the same version of AAPS and NSClient

**Make sure to check and adjust settings after updating to 3.0 as described** [here](../Installing-AndroidAPS/update3_0.md).

### Pasos de preparación

**At least two days before update:**

- disable Dexcom bridge in Nightscout
- if you are using G5/G6 and xDrip as a collector, you have to update xDrip to a nightly version newer than 14th January 2022
- if you are using G5/G6 switching to BYODA as collector is recommended to take advantage of back-smoothing (you can still use xDrip for other purposes, xDrip can receive data from BYODA)

### Changes

- 100k lines changed, 105k new lines of code

- [Omnipod DASH support](../Configuration/OmnipodDASH.md) @AdrianLxM @avereha @bartsopers @vanelsberg

- [Dana-i support](../Configuration/DanaRS-Insulin-Pump.md) @MilosKozak

- [DiaconnG8 support](../Configuration/DiaconnG8.md)

- Glunovo support

- Internal database upgraded to Room @MilosKozak @Tebbe @AdrianLxm @Philoul @andyrozman

- Lot of code rewritten to Kotlin @MilosKozak

- New internal interface for pump drivers

- NSClient rewritten for better synchronization and more detailed customization @MilosKozak

  - Record deletion from NS is not allowed (only invalidation through NSClient)
  - Record modification from NS is not allowed
  - Sync setting available without engineering mode (for parents)
  - Ability to resync data

- Profile switch behavior change. Now is distinguished between Profile Switch *(something that user wants)* and Profile change *(when change is executed by pump)* @MilosKozak @Tebbe

- You can start activity temporary target during creation of profile switch @MilosKozak

- NSProfile is gone, just local profile can be used. Local profile can be [synced to NS](../Installing-AndroidAPS/update3_0.md#nightscout-profile-cannot-be-pushed). @MilosKozak.

- Forgotten [master password reset procedure](../Installing-AndroidAPS/update3_0.md#reset-master-password) @MilosKozak

- User actions tracing @Philoul

- New automation TempTargetValue trigger @Philoul

- New automation Careportal action @Philoul

- Add Bolus reminder in Carbs Dialog @Philoul

- Bolus Wizard improvement

- UI improvements @MilosKozak

- New user buttons for automations @MilosKozak

- New automation layout @MilosKozak

- History browser updated and fixed @MilosKozak

- Objective9 removed @MilosKozak

- Fixed bug associated to unstable CGM data @MilosKozak

- DanaR and DanaRS communication improvement @MilosKozak

- CircleCI integration @MilosKozak

- Files location change:

  - /AAPS/extra (engineering mode)
  - /AAPS/logs /AAPS/exports
  - /AAPS/preferences

## Versión 2.8.2

Fecha de lanzamiento: 23-01-2021

- Please see also [important hints for version 2.8.1.1](../Installing-AndroidAPS/Releasenotes.md#important-hints-2-8-1-1) below.

### Changes

- stability improvements
- more tweaking for Android 8+
- improved icons
- watch improvements
- NSClient fixes
- Bolus advisor now works with Pumpcontrol and NSClient

## Versión 2.8.1.1

Fecha de lanzamiento: 12-01-2021

(important-hints-2-8-1-1)
### Notas importantes

- Option **NS_UPLOAD_ONLY** has been forced ON for all 2.8.1 users.
- If you use NSClient to enter TT, carbs or profile switches you must turn it off in AAPS but **only in case your synchronization is working well** (ie. you don't see unwanted data changes like self modification of TT, TBR etc).
- ATTENTION: DO NOT do this if you have any other app handle treatments ( like xDrip broadcast/upload/sync...).
- NS_UPLOAD_ONLY can only be turned off if engineering mode is enabled.

### Cambios principales

- RileyLink, Omnipod and MDT pump improvements and fixes
- forced NS_UPLOAD_ONLY
- fix for SMB & Dexcom app
- watchface fixes
- crash reporting improved
- gradle reverted to allow direct watchface instalation
- automation fixes
- RS driver improvement
- various crashes fixed
- UI fixes and improvements
- new translations

(version-2-8-0)=
## Versión 2.8.0

Fecha de lanzamiento: 01-01-2021

### Notas importantes

- **Minimum Android version is 8.0 now.** For older Android versions you can still use 2.6.1.4 from old repo.
- [Objectives have changed.](../Usage/Objectives.md#objective-3-prove-your-knowledge) **Finish not completed objectives before update.**
- Repository location still on <https://github.com/nightscout/AndroidAPS> . If you are not familiar with git the easiest way for update is remove directory with AndroidAPS and do a [new clone](../Installing-AndroidAPS/Building-APK.md).
- Please use [Android Studio 4.1.1](https://developer.android.com/studio/) or newer to build the apk.

### Nuevas características importantes

- [Omnipod Eros support](../Configuration/OmnipodEros.md) @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda and special thanks to @ps2 @itsmojo, everybody else involved in the Loop driver for Omnipod and @jlucasvt from GetRileyLink.org
- [bolus advisor](../Configuration/Preferences.md#bolus-advisor) & [eating reminder](../Getting-Started/Screenshots#eating-reminder) @MilosKozak
- [New watchface](../Configuration/Watchfaces.md#new-watchface-as-of-androidaps-2-8) @rICTx-T1D
- Dana RS connection improvements @MilosKozak
- Removed "Unchanged CGM values" behavior in SMB for Dexcom native app
- New [Low Ressolution Skin](../Configuration/Preferences.md#skin)
- New ["Pregnant" patient type](../Usage/Open-APS-features.md#overview-of-hard-coded-limits) @Brian Quinion
- New NSClient tablet layout @MilosKozak
- NSClient transfer insulin, senstivity and display settings directly from main AAPS @MilosKozak
- [Preferences filter](../Configuration/Preferences.md) @Brian Quinion
- New pump icons @Rig22 @@teleriddler @osodebailar
- New [insulin type Lyumjev](../Configuration/Config-Builder.md#lyumjev)
- SetupWizard improvements @MilosKozak
- Security improvements @dlvoy
- Various improvements and fixes @AdrianLxM @Philoul @swissalpine  @MilosKozak @Brian Quinion

(version-2-7-0)=
## Versión 2.7.0

Fecha de lanzamiento: 24-09-2020

**Make sure to check and adjust settings after updating to 2.7 as described** [here](../Installing-AndroidAPS/update2_7.md).

You need at least start [objective 11 (in later versions objective 10!)](../Usage/Objectives.md#objective-10-automation) in order to continue using [Automation feature](../Usage/Automation.md) (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in [objective 3](../Usage/Objectives#objective-3-prove-your-knowledge) yet, you will have to complete the exam before you can start [objective 11](../Usage/Objectives.html#objective-10-automation). This will not effect other objectives you have already finished. You will keep all finished objectives!

### Nuevas características importantes

- internal use of dependency injection, updates libraries, code rewritten to kotlin @MilosKozak @AdrianLxM
- using modules for Dana pumps @MilosKozak
- [new layout, layout selection](../Getting-Started/Screenshots.md) @MilosKozak
- new [status lights layout](../Configuration/Preferences.md#status-lights) @MilosKozak
- [multiple graphs support](../Getting-Started/Screenshots.md#section-f-main-graph) @MilosKozak
- [Profile helper](../Configuration/profilehelper.md) @MilosKozak
- visualization of [dynamic target adjustment](../Getting-Started/Screenshots.md#visualization-of-dynamic-target-adjustment) @Tornado-Tim
- new [preferences layout](../Configuration/Preferences.md) @MilosKozak
- SMB algorithm update @Tornado-Tim
- [Low glucose suspend mode](../Configuration/Preferences.md#aps-mode) @Tornado-Tim
- [carbs required notifications](../Configuration/Preferences.md#carb-required-notification) @twain47 @Tornado-Tim
- removed Careportal (moved to Actions) @MilosKozak
- [new encrypted backup format](../Usage/ExportImportSettings.md) @dlvoy
- [new SMS TOTP authentication](../Children/SMS-Commands.md) @dlvoy
- [new SMS PUMP CONNECT, DISCONNECT](../Children/SMS-Commands.md#commands) commands @Lexsus
- better support for tiny basals on Dana pumps @Mackwe
- small Insight fixes @TebbeUbben @MilosKozak
- ["Default language" option](../Configuration/Preferences.md#general) @MilosKozak
- vector icons @Philoul
- [set neutral temps for MDT pump](../Configuration/MedtronicPump.md#configuration-of-the-pump) @Tornado-Tim
- History browser improvements @MilosKozak
- removed OpenAPS MA algorithm @Tornado-Tim
- removed Oref0 sensitivity @Tornado-Tim
- [Biometric or password protection](../Configuration/Preferences.md#protection) for settings, bolus @MilosKozak
- [new automation trigger](../Usage/Automation.md) @PoweRGbg
- [Open Humans uploader](../Configuration/OpenHumans.md) @TebbeUbben @AdrianLxM
- New documentation @Achim

(version-2-6-1-4)=
## Versión 2.6.1.4

Fecha de lanzamiento: 04-05-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nuevas características importantes

- Insight: Disable vibration on bolus for firmware version 3 - second attempt
- Otherwise is equal to 2.6.1.3. La actualización es opcional.

## Versión 2.6.1.3

Fecha de lanzamiento: 03-05-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nuevas características importantes

- Insight: Disable vibration on bolus for firmware version 3
- Otherwise is equal to 2.6.1.2. La actualización es opcional.

## Versión 2.6.1.2

Fecha de lanzamiento: 19-04-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nuevas características importantes

- Fix crashing in Insight service
- Otherwise is equal to 2.6.1.1. If you are not affected by this bug you don't need to upgrade.

## Versión 2.6.1.1

Fecha de lanzamiento: 06-04-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nuevas características importantes

- Resolves SMS CARBS command issue while using Combo pump
- Otherwise is equal to 2.6.1. If you are not affected by this bug you don't need to upgrade.

## Versión 2.6.1

Fecha de lanzamiento: 21-03-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nuevas características importantes

- Allow to enter only `https://` in NSClient settings
- Fixed [BGI](../Getting-Started/Glossary.md) displaying bug on watches
- Fixed small UI bugs
- Fixed Insight crashes
- Fixed future carbs with Combo pump
- Fixed [LocalProfile -> NS sync](../Configuration/Config-Builder.md#upload-local-profiles-to-nightscout)
- Insight alerts improvements
- Improved detection of boluses from pump history
- Fixed NSClient connection settings (wifi, charging)
- Fixed sending of calibrations to xDrip

(version-2-6-0)=
## Versión 2.6.0

Fecha de lanzamiento: 29-02-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nuevas características importantes

- Small design changes (startpage...)

- Careportal tab / menu removed - more details [here](../Usage/CPbefore26.md)

- New [Local Profile plugin](../Configuration/Config-Builder.md#local-profile)

  - Local profile can hold more than 1 profile
  - Profiles can be cloned and edited
  - Ability of upload profiles to NS
  - Old profile switches can be cloned to new profile in LocalProfile (timeshift and percentage is applied)
  - Veritical NumberPicker for targets

- SimpleProfile is removed

- [Extended bolus](../Usage/Extended-Carbs.md#extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled

- MDT plugin: Fixed bug with duplicated entries

- Units are not specified in profile but it's global setting

- Added new settings to startup wizard

- Different UI and internal improvements

- [Wear complications](../Configuration/Watchfaces.md)

- New [SMS commands](../Children/SMS-Commands.md) BOLUS-MEAL, SMS, CARBS, TARGET, HELP

- Fixed language support

- Objectives: [Allow to go back](../Usage/Objectives.md#go-back-in-objectives), Time fetching dialog

- Automation: [allow sorting](../Usage/Automation.md#sort-automation-rules)

- Automation: fixed bug when automation was running with disabled loop

- New status line for Combo

- GlucoseStatus improvement

- Fixed TempTarget NS sync

- New statistics activity

- Allow Extended bolus in open loop mode

- Android 10 alarm support

- Tons on new translations

## Versión 2.5.1

Fecha de lanzamiento: 31-10-2019

Please note the [important notes](../Installing-AndroidAPS/Releasenotes.md#important-notes-2-5-0) and [limitations](../Installing-AndroidAPS/Releasenotes.md#is-this-update-for-me-currently-is-not-supported) listed for [version 2.5.0](../Installing-AndroidAPS/Releasenotes.md#version-2-5-0). \* Fixed a bug in the network state receiver that lead to crashes with many (not critical but would waste a lot of energy re-calculating things). \* New versioning that will allow to do minor updates without triggering the update-notification.

(version-2-5-0)=
## Versión 2.5.0

Fecha de lanzamiento: 26-10-2019

(important-notes-2-5-0)=

### Notas importantes

- Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to [build the apk](../Installing-AndroidAPS/Building-APK.md) or [update](../Installing-AndroidAPS/Update-to-new-version.html).
- If you are using xDrip [identify receiver](../Configuration/xdrip.md#identify-receiver) must be set.
- If you are using Dexcom G6 with the patched Dexcom app you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).
- Glimp is supported from version 4.15.57 and newer.

(is-this-update-for-me-currently-is-not-supported)=
### ¿Es esta actualización para mí? Actualmente NO es soportado

- Android 5 and lower
- Poctech
- 600SeriesUploader
- Patched Dexcom from 2.3 directory

### Nuevas características importantes

- Internal change of targetSDK to 28 (Android 9), jetpack support
- RxJava2, Okhttp3, Retrofit support
- Old [Medtronic pumps](../Configuration/MedtronicPump.md) support (RileyLink need)
- New [Automation plugin](../Usage/Automation.md)
- Allow to [bolus only part](../Configuration/Preferences.md#advanced-settings-overview) from bolus wizard calculation
- Rendering insulin activity
- Adjusting IOB predictions by autosens result
- New support for patched Dexcom apks ([2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4))
- Signature verifier
- Allow to bypass objectives for OpenAPS users
- New [objectives](../Usage/Objectives.md) - exam, application handling (If you started at least objective "Starting on an open loop" in previous versions exam is optional.)
- Fixed bug in Dana\* drivers where false time difference was reported
- Fixed bug in [SMS communicator](../Children/SMS-Commands.md)

## Versión 2.3

Fecha de lanzamiento: 25-04-2019

### Nuevas características importantes

- Important safety fix for Insight (really important if you use Insight!)
- Fix History-Browser
- Fix delta calculations
- Language updates
- Check for GIT and warn on gradle upgrade
- More automatic testing
- Fixing potential crash in AlarmSound Service (thanks @lee-b !)
- Fix broadcast of BG data (works independently of SMS permission now!)
- New Version-Checker

## Versión 2.2.2

Fecha de lanzamiento: 07-04-2019

### Nuevas características importantes

- Autosens fix: deactivate TT raises/lowers target
- New translations
- Insight driver fixes
- SMS plugin fix

## Versión 2.2

Fecha de lanzamiento: 29-03-2019

### Nuevas características importantes

- [DST fix](../Usage/Timezone-traveling.md#time-adjustment-daylight-savings-time-dst)
- Wear Update
- [SMS plugin](../Children/SMS-Commands.md) update
- Go back in objectives.
- Stop loop if phone disk is full

## Versión 2.1

Fecha de lanzamiento: 03-03-2019

### Nuevas características importantes

- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md) support (by Tebbe Ubben and JamOrHam)
- Status lights on main screen (Nico Schmitz)
- Daylight saving time helper (Roumen Georgiev)
- Fix processing profile names comming from NS (Johannes Mockenhaupt)
- Fix UI blocking (Johannes Mockenhaupt)
- Support for updated G5 app (Tebbe Ubben and Milos Kozak)
- G6, Poctech, Tomato, Eversense BG source support (Tebbe Ubben and Milos Kozak)
- Fixed disabling SMB from preferences (Johannes Mockenhaupt)

### Misceláneo

- If you are using non default `smbmaxminutes` value you have to setup this value again

## Versión 2.0

Fecha de lanzamiento: 03-11-2018

### Nuevas características importantes

- oref1/SMB support ([oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achieve and how to use it so it can operate smoothly.
- [\_Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) pump support
- Setup wizard: guides you through the process of setting up AndroidAPS

(settings-to-adjust-when-switching-from-ama-to-smb)=
### Valores para ajustar cuando se cambia de AMA a SMB

- Objective 10 must be started for SMBs to be enabled (SMB tab generally shows what restrictions apply)

- maxIOB now includes \_all\_ IOB, not just added basal. Es decir, si se le da un bolo de 8 U para una comida y maxIOB es 7 U, no se entregarán SMB hasta que el IOB caiga por debajo de 7 U.

- min_5m_carbimpact default has changed from 3 to 8 going from AMA to SMB. If you are upgrading from AMA to SMB, you have to change it manually

- Note when building AndroidAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! Si la compilación falla con un error en la configuración personalizada, puede realizar lo siguiente:

  - Open the Preferences window by clicking File > Settings (on Mac, Android Studio > Preferences).
  - In the left pane, click Build, Execution, Deployment > Compiler.
  - Uncheck the Configure on demand checkbox.
  - Click Apply or OK.

(overview-tab)=
### Pestaña general

- Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). Los TTs utilizan los valores predeterminados establecidos en las preferencias. La nueva opción de Hypo TT es una temporal alta TT para evitar que el lazo haga una sobrecorrección muy agresiva en el rescate de carbohidratos.
- Treatment buttons: old treatment button still available, but hidden by default. Ahora la visibilidad de los botones se puede configurar. New insulin button, new carbs button (including [eCarbs/extended carbs](../Usage/Extended-Carbs.md))
- [Colored prediction lines](../Getting-Started/Screenshots.md#prediction-lines)
- Option to show a notes field in insulin/carbs/calculator/prime+fill dialogs, which are uploaded to NS
- Updated prime/fill dialog allows priming and creating careportal entries for site change and cartridge change

### Reloj

- Separate build variant dropped, included in regular full build now. Para utilizar los controles de bolo desde el reloj, habilite este valor en el teléfono
- Wizard now only asks for carbs (and percentage if enabled in watch settings). Los parámetros que se incluyen en el cálculo se pueden configurar en la configuración del teléfono
- confirmations and info dialogs now work on wear 2.0 as well
- Added eCarbs menu entry

### Nuevos plugins

- PocTech app as BG source
- Dexcom patched app as BG source
- oref1 sensitivity plugin

### Misceláneo

- App now uses drawer to show all plugins; plugins selected as visible in config builder are shown as tabs on top (favourites)
- Overhaul for config builder and objectives tabs, adding descriptions
- New app icon
- Lots of improvements and bugfixes
- Nightscout-independent alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see *Local alerts* in settings)
- Option to keep screen on
- Option to show notification as Android notification
- Advanced filtering (allowing to always enable SMB and 6h after meals) supported with patched Dexcom app or xDrip with G5 native mode as BG source.
