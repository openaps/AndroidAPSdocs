# Configuraciones

Dependiendo de sus ajustes, puede abrir el administrador de configuraciones a través de una pestaña en la parte superior de la pantalla o a través del menú de la hamburguesa.

![Abrir configuraciones](../images/ConfBuild_Open.png)

Configuraciones (Conf.) es la pestaña en la donde se activan y desactivan las características modulares. Las opciones en el lado izquierdo (A) le permiten seleccionar cuál utilizar, las opciones del lado derecho (C) le permiten ver estas como pestañas. (E) en AndroidAPS. En caso de que el recuadro correcto no esté activado, puede llegar a la función utilizando el menú de hamburguesa (D) en la parte superior izquierda de la pantalla.

Cuando hay opciones adicionales disponibles en el módulo, puede hacer clic en la rueda dentada (B), que te llevará a la configuración específica dentro de las preferencias.

**Primera configuración:** En AAPS 2.0 un asistente de instalación le guía a través del proceso de configuración de AndroidAPS. Presione los 3 puntos en la parte superior derecha de la pantalla (F) y seleccione 'Asistente de configuración' para usarlo.

![Caja de configuraciones y engranaje](../images/ConfBuild_ConfigBuilder.png)

## Pestañas o menú de hamburguesa

Con la casilla de verificación, bajo el símbolo de ojo, puede decidir cómo abrir la sección correspondiente del programa.

![Pestañas o menú de hamburguesa](../images/ConfBuild_TabOrHH.png)

## Profile

Seleccione el perfil basal que desea utilizar. Consulte la página [Perfiles](../Usage/Profiles.md) para obtener más información de configuración.

### Perfil local (recomendado)

El "perfil local" utiliza el perfil basal manualmente ingresado en el teléfono. Tan pronto como se selecciona, aparece una nueva pestaña en AAPS, donde puede cambiar los datos de perfil leídos de la bomba si es necesario. Con la tecla siguiente, el perfil se escriben en la bomba en el perfil 1. Este perfil se recomienda ya que no depende de la conectividad a Internet.

Ventajas:

* no hay ninguna conexión a Internet necesaria para cambiar los valores de perfil
* los cambios de perfil se pueden hacer directamente en el teléfono

Desventajas:

* sólo un perfil

### Perfil NS

El perfil de NS utiliza los perfiles que guardados en el sitio de Nightscout (https: //[yournightscoutsiteaddress]/profile). Puede usar el [Selector de Perfil](../Usage/Profiles.md) para cambiar cuál de los perfiles está activo, y se escribe ese perfil en la bomba en caso de fallo AndroidAPS. Esto le permite crear fácilmente múltiples perfiles en Nightscout (p.ej.. trabajo, casa, deportes, vacaciones, etc.). Poco después de hacer clic en "Guardar" serán transferidos a AAPS si su smartphone está en línea. Even without an Internet connection or without a connection to Nightscout, the Nightscout profiles are available in AAPS once they have been synchronized.

Realice un **cambio de perfil** para activar un perfil de Nightscout. Press and hold the current profile in the AAPS homescreen at the top (grey field between the light blue "Open/Closed Loop" field and the dark blue target area field) > Profile switch > Select profile > OK. AAPS also writes the selected profile into the pump after the profile change, so that it is available without AAPS in an emergency and continues to run.

Ventajas:

* perfiles múltiples
* fácil de editar por PC o tablet

Desventajas:

* no hay cambios locales en los ajustes de perfil
* el perfil no puede ser cambiado directamente en el teléfono

### Perfil simple

Simple profile with just one time block for DIA, IC, ISF, basal rate and target range (i.e. no basal rate changes during the day). More likely to be used for testing purposes unless you have the same factors over 24 hours. Once "Simple Profile" is selected, a new tab will appear in AAPS where you can enter the profile data.

## Insulin

Seleccione el tipo de curva de insulina que está usando. Las opciones 'Rapid-Acting Oref', Ultra-Rapid Oref' y 'Free-Peak Oref' tienen una forma exponencial. Más información disponible en [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), las curvas varían según el DIA y el tiempo de pico.

La DIA no es la misma para cada persona. Es por eso que tienes que probarlo por ti mismo. Pero siempre debe ser de al menos 5 horas. You can read more about that in the Insulin Profile section of [this](../Getting-Started/Screenshots#insulin-profile) page.

For Rapid-Acting and Ultra-Rapid, the DIA is the only variable you can adjust by yourself, the time to peak is fixed. Free-Peak allows you to adjust both the DIA and the time to peak, and must only be used by advanced users who know the effects of these settings.

The [insulin curve graph](../Getting-Started/Screenshots#insulin-profile) helps you to understand the different curves. You can view it by enabling the tickbox to show it as a tab, otherwise it will be in the hamburger menu.

### Rapid-Acting Oref

* recomendado para Humalog, Novolog y Novorapid
* DIA = al menos 5.0h
* Máximo pico = 75 minutos después de la inyección (fijo, no ajustable)

### Ultra-Rapid Oref

* recomendado para FIASP
* DIA = al menos 5.0h
* Max. pico = 55 minutos después de la inyección (fijo, no ajustable)

For a lot of people there is practically no noticeable effect of FIASP after 3-4 hours any more, even if 0.0xx units are available as a rule then. This residual amount can still be noticeable during sports, for example. Por lo tanto, AndroidAPS utiliza el mínimo de 5h como DIA.

![Configuración Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Free-Peak Oref

With the "Free Peak 0ref" profile you can individually enter the peak time. El DIA se establece automáticamente en 5 horas si no se especifica un valor superior en el perfil.

Este perfil de efecto se recomienda si se utiliza una insulina no respaldada o una mezcla de insulinas diferentes.

## BG Source

Select the blood glucose source you are using - see [BG Source](BG-Source.rst) page for more setup information.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient BG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)
* [Dexcom App (parche) ](https://github.com/dexcomapp/dexcomapp/) -Seleccione 'Enviar datos de BG a xDrip +' si desea utilizar las alarmas xDrip +.
    
    ![Configurar origen de BG](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Pump

Seleccione la bomba que está utilizando.

* [Dana R](DanaR-Insulin-Pump.md)
* Dana R Coreano (para la bomba doméstica DanaR)
* Dana Rv2 (bomba DanaR con actualización de firmware)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu Chek Combo Pump ](Accu-Chek-Combo-Pump.md) (requiere la instalación de ruffy)
* MDI (recibir sugerencias de AAPS para su terapia de inyecciones múltiples diarias)
* Bomba virtual (bucle abierto para la bomba que no tiene ningún controlador todavía-sólo sugerencias de AAPS)

Utilice **Valores avanzados ** para activar el proceso de vigilancia de BT si es necesario. Desactiva bluetooth por un segundo si no es posible ninguna conexión a la bomba. Esto puede ayudar en algunos teléfonos donde la pila (Stack) Bluetooth se congela (freezes).

## Detección de sensibilidad

Seleccione el tipo de detección de sensibilidad. This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. Details about the Sensitivity Oref0 algorithm can be read in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Tenga en cuenta que debe estar en [Objetivo 8 ](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) con el fin de utilizar Detección de sensibilidad/autosens.

### Ajustes absorción

Si utiliza Oref1 con SMB, debe cambiar **min_5m_carbimpact ** a 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when carb absorption can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Básicamente, es un seguro contra fallos.

## APS

Seleccione el algoritmo APS deseado para realizar los ajustes de la terapia. Puede ver los detalles activos del algoritmo elegido en la pestaña OpenAPS(OAPS).

* OpenAPS MA (asistencia para comidas, estado del algoritmo en 2016)
* OpenAPS AMA (asistencia de comida avanzada, estado del algoritmo en 2016)   
    Más detalles acerca de OpenAPS AMA se pueden encontrar en [OpenAPS docs ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably.  
    Note you need to be in [Objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) in order to use OpenAPS AMA.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users)  
    Note you need to be in [Objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Loop

Defina si quieres permitir controles automáticos AAPS o no.

### Lazo abierto

AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). Esta opción es para conocer cómo funciona AndroidAPS o si está usando una bomba no soportada.

### Lazo cerrado

AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). El Loop Cerrado funciona dentro de numerosos límites de seguridad, que se pueden establecer individualmente. El Lazo Cerrado sólo es posible si está en [Objetivo 6 ](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) o superior y utiliza una bomba soportada.

## Objetivos (programa de aprendizaje)

AndroidAPS tiene una serie de objetivos que tiene que cumplir paso a paso. Esto debería guiarle de forma segura hacia la configuración de un sistema de lazo cerrado. Esto garantiza que usted tiene configurado todo correctamente y que entienda lo que el sistema hace exactamente. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

## Treatments

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the Careportal (CP) tab.

## General

### Overview

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Keep screen on

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Buttons

Define which Buttons are shown on the home screen.

* Treatments
* Calculator
* Insulin
* Carbs
* CGM (opens xDrip+)
* Calibration

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### QuickWizard settings

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Advanced settings

Enable super bolus functionality in wizard. Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Actions

Some buttons to quickly access common features:

* Profiles Switch (see [Profiles page](../Usage/Profiles.md) for more setup information)
* Temporary targets
* Set / cancel temp. dosis basal
* Extended bolus (DanaR/RS or Combo pump only)
* Prime / fill (DanaR/RS or Combo pump only)
* History browser
* TDD (Total daily dose = bolus + basal per day)

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). Others prefer range of 32% to 37% of TDD for TBB. Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Actions tab](../images/ConfBuild_ConfBuild_Actions.png)

### Careportal

Allows you to record any specific care entries and view the current sensor, insulin, canula and pump battery ages in the Careportal (CP) tab.

Note: **No insulin** will be given if entered via careportal (i.e. meal bolus, correction bolus...)

Carbs entered in the careportal (i.e. correction carbs) will be used for COB calculation.

![Careportal tab](../images/ConfBuild_CarePortal.png)

### Comunicaciones SMS

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Food

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

If you want to bolus etc. from the watch then within "Wear settings" you need to enable "Controls from Watch".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Ongoing Notification

Displays a summary of current BG, delta, active TBR%, active basal u/h and profile, IOB and split into bolus IOB and basal IOB on the phones's dropdown screen and phone's lock screen.

![AAPS widget](../images/ConfBuild_Widget.png)

### NS Client

Setup sync of your AndroidAPS data with Nightscout.

If **Log app start to NS** is activated each AndroidAPS will be visible in Nightscout. Might be useful to detect problems with the app (i.e. battery optimization not disabled for AAPS) but can flood the Nightscout graph with entries.

#### Alarm options

Activate/deactivate AndroidAPS alarms

![Alarm options](../images/ConfBuild_NSClient_Alarms.png)

#### Connection settings

Offline looping, disable roaming...

If you want to use only a specific WiFi network you can enter its **WiFi SSID **. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Nightscout connection settings](../images/ConfBuild_ConnectionSettings.png)

#### Advanced settings

* Auto backfill missing BGs from Nightscout
* Create announcement from errors Create Nightscout announcement for error dialogs and local alerts (also viewable in careportal in treatments section)
* Enable local broadcast to other apps like xDrip+
* NS upload only (sync disabled)
* No upload to NS
* Always use basal absolute values -> Must be activated if you want to use [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) properly.

![Nightscout advanced settings](../images/ConfBuild_NSClient_Advanced.png)

### Maintenance

Email and number of logs to be send. Normally no change necessary.

### Configuraciones

Use tab for config builder instead of hamburger menu.