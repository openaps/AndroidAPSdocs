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

## Perfil

Seleccione el perfil basal que desea utilizar. Consulte la página [Perfiles](../Usage/Profiles.md) para obtener más información de configuración.

### Perfil local (recomendado)

El "perfil local" utiliza el perfil basal manualmente ingresado en el teléfono. As soon as it is selected, a new tab appears in AAPS, where you can change the profile data read out from the pump if necessary. Con la tecla siguiente, el perfil se escriben en la bomba en el perfil 1. Este perfil se recomienda ya que no depende de la conectividad a Internet.

Los perfiles locales forman parte de [ valores exportados ](../Usage/ExportImportSettings.rst). Así que asegúrese de tener una copia de seguridad en un lugar seguro.

![Valores de perfil local](../images/LocalProfile_Settings.png)

Botones:

* verde más: añadir
* rojo X: borrar
* flecha azul: duplicado

Si realiza algún cambio en su perfil, asegúrese de que está editando el perfil correcto. En la pestaña de perfil no siempre se muestra el perfil real que se utiliza-por ejemplo, si usted hizo un cambio de perfil utilizando la pestaña de perfil en la pantalla de inicio puede diferir del perfil realmente mostrado en la pestaña de perfil, ya que no hay ninguna conexión entre estos.

#### Clonar cambio de perfil

Puede crear fácilmente un perfil local nuevo a partir del conmutador de perfil. En este caso, el cambio de tiempo y el porcentaje se aplicarán al nuevo perfil local.

1. Vaya a la pestaña de tratamientos.
2. Seleccionar Cambio de perfil.
3. Pulse "Clonar".
4. Puede editar el nuevo perfil local en la pestaña Perfil local (LP) o a través del menú principal.

![Clonar cambio de perfil](../images/LocalProfile_ClonePS.png)

Si desea cambiar de perfil Nightscout a un perfil local, haga un cambio de perfil en su perfil NS y clone el conmutador de perfil tal como se ha descrito anteriormente.

#### Cargar los perfiles locales para Nightscout

Los perfiles locales también se pueden subir a Nightscout. Los ajustes se pueden encontrar en [NSClient preferences](../Configuration/Preferences#nsclient).

![Cargar el perfil local de NS](../images/LocalProfile_UploadNS2.png)

Ventajas:

* no es necesaria ninguna conexión a Internet para cambiar los valores de perfil
* los cambios de perfil se pueden hacer directamente en el teléfono
* nuevo perfil se puede crear desde el conmutador de perfil
* los perfiles locales también se pueden subir a Nightscout

Desventajas:

* ninguno

### Asistente de perfil

El ayudante de perfil ofrece dos funciones:

1. Encontrar un perfil para niños
2. Comparar dos perfiles o conmutadores de perfil para clonar un perfil nuevo

Los detalles se explican por separado en la [página de ayuda de perfil](../Configuration/profilehelper.rst).

### Perfil NS

El perfil de NS utiliza los perfiles que guardados en el sitio de Nightscout (https: //[yournightscoutsiteaddress]/profile). Puede usar el [Selector de Perfil](../Usage/Profiles.md) para cambiar cuál de los perfiles está activo, y se escribe ese perfil en la bomba en caso de fallo AndroidAPS. Esto le permite crear fácilmente múltiples perfiles en Nightscout (p.ej.. trabajo, casa, deportes, vacaciones, etc.). Poco después de hacer clic en "Guardar" serán transferidos a AAPS si su smartphone está en línea. Incluso sin conexión a Internet o sin conexión a Nightscout, los perfiles de Nightscout están disponibles en AAPS una vez que se han sincronizado.

Realice un [cambio de perfil](../Getting-Started/Screenshots.md#current-profile) para activar un perfil de Nightscout. AAPS will write the selected profile into the pump after the profile change, so that it is available without AAPS in an emergency and continues to run.

Ventajas:

* perfiles múltiples
* fácil de editar por PC o tablet

Desventajas:

* no hay cambios locales en la configuración del perfil
* el perfil no puede ser cambiado directamente en el teléfono

## Insulina

![Insulin type](../images/ConfBuild_Insulin.png)

* Select the type of insulin curve you are using.
* The options 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' and 'Free-Peak Oref' all have an exponential shape. More information is listed in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* The curves will vary based on the DIA and the time to peak.
    
    * PURPLE line shows how much **insulin remains** after it has been injected as it decays with time.
    * BLUE line shows **how active** insulin is.

### DIA (Duración Insulina Activa)

* The DIA is not the same for each person. That's why you have to test it for yourself. 
* But it must always be at least 5 hours.
* For a lot of people using ultra-rapid insulins like Fiasp there is practically no noticeable effect after 3-4 hours any more, even if 0.0xx units are available as a rule then. This residual amount can still be noticeable during sports, for example. Therefore, AndroidAPS uses minimum 5h as DIA.
* You can read more about that in the Insulin Profile section of [this](../Getting-Started/Screenshots#insulin-profile) page. 

### Insulin type differences

* For 'Rapid-Acting', 'Ultra-Rapid' and 'Lyumjev' the DIA is the only variable you can adjust by yourself, the time to peak is fixed. 
* Free-Peak allows you to adjust both the DIA and the time to peak, and must only be used by advanced users who know the effects of these settings. 
* The [insulin curve graph](../Getting-Started/Screenshots#insulin-profile) helps you to understand the different curves. 
* You can view it by enabling the tickbox to show it as a tab, otherwise it will be in the hamburger menu.

#### Rapid-Acting Oref

* recommended for Humalog, Novolog and Novorapid
* DIA = at least 5.0h
* Max. peak = 75 minutes after injection (fixed, not adjustable)

#### Ultra-Rapid Oref

* recommended for FIASP
* DIA = at least 5.0h
* Max. peak = 55 minutes after injection (fixed, not adjustable)

#### Lyumjev

* special insulin profile for Lyumjev
* DIA = at least 5.0h
* Max. peak = 45 minutes after injection (fixed, not adjustable)

#### Free Peak Oref

* With the "Free Peak 0ref" profile you can individually enter the peak time.
* The DIA is automatically set to 5 hours if it is not specified higher in the profile.
* This effect profile is recommended if an unbacked insulin or a mixture of different insulins is used.

## Fuentes de BG (datos de glucemia)

Select the blood glucose source you are using - see [BG Source](BG-Source.rst) page for more setup information.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient BG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - only version 4.15.57 and newer are supported
* [Dexcom App (patched)](https://github.com/dexcomapp/dexcomapp/) - Select 'Send BG data to xDrip+' if you want to use xDrip+ alarms.
    
    ![Config Builder BG source](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

* [Tomato App](http://tomato.cool/) for MiaoMiao device
* Random BG: Generates random BG data (Demo mode only)

## Bomba

Select the pump you are using.

* [Dana R](DanaR-Insulin-Pump.md)
* Dana R Korean (for domestic DanaR pump)
* Dana Rv2 (DanaR pump with unofficial firmware upgrade)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (requires ruffy installation)
* [Medtronic](MedtronicPump.md)
* MDI (receive AAPS suggestions for your multiple daily injections therapy)
* Virtual pump (open loop for pump which don't have any driver yet - AAPS suggestions only)

For dana pumps, use **Advanced settings** to activate BT watchdog if necessary. It switches off bluetooth for one second if no connection to the pump is possible. This may help on some phones where the bluetooth stack freezes.

[Password for Dana RS pump](../Configuration/DanaRS-Insulin-Pump.md) must be entered correctly. Password was not checked in previous versions.

## Detección de sensibilidad

Select the type of sensitivity detection. For more details of different designs please [read on here](../Configuration/Sensitivity-detection-and-COB.md). This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. More details about the Sensitivity algorithm can be read in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](../Usage/Open-APS-features#autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the Autosens percentage / the line in your graph is displayed for information only.

### Ajustes absorción

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../Usage/COB-calculation.rst) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Básicamente, es un seguro contra fallos.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS AMA (advanced meal assist, state of the algorithm in 2017) More detail about OpenAPS AMA can be found in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users) Note you need to be in [Objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Loop

* Switch between Open Loop, Closed Loop and Low Glucose Suspend (LGS).

![Config builder - loop mode](../images/ConfigBuilder_LoopLGS.png)

### Lazo abierto

* AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. 
* The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). 
* This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Lazo cerrado

* AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). 
* The Closed Loop works within numerous safety limits, which you can be set individually.
* Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.
* Please note: In closed loop mode a single target instead of target range (i.e. 5,5 mmol or 100 mg/dl instead of 5,0 - 7,0 mmol or 90 - 125 mg/dl) is recommended.

### Low Glucose Suspend (LGS)

* maxIOB is set to zero
* This means if blood glucose is dropping it can reduce basal for you.
* But if blood glucose is rising no automatic correction will be made. Your basal rates will remain the same as your selected profile.
* Only if basal IOB is negative (from a previous Low Glucose Suspend) additional insulin will be given to lower BG.

### Minimal request change

* When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. 
* To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate.
* This defines the relative change required to trigger a notification.

## Objetivos (programa de aprendizaje)

AndroidAPS has a leraning program (objectives) that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

## Tratamientos

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](../Getting-Started/Screenshots#carb-correction).

## General

### Inicio

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Mantener pantalla activa

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Botones

Define which Buttons are shown on the home screen.

* Tratamientos
* Calculadora
* Insulina
* Carbohidratos [g]
* CGM (opens xDrip+)
* Calibración

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### QuickWizard settings

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Default Temp-Targets

Choose default temp-targets (duration and target). Preset values are:

* eating soon: target 72 mg/dl / 4.0 mmol/l, duration 45 min
* activity: target 140 mg/dl / 7.8 mmol/l, duration 90 min
* hypo: target 125 mg/dl / 6.9 mmol/l, duration 45 min

#### Llenar/Rellenar cantidad de insulina estándar

Choose the default amounts of the three buttons in fill/prime dialogue, depending on the length of your catheter.

#### Range of visualization

Choose the high and low marks for the BG-graph on AndroidAPS overview and smart watch. It is only the visualization, not the target range for your BG. Example: 70 - 180 mg/dl or 3.9 - 10 mmol/l

#### Título corto en pestaña

Choose wether the tab titles in AndroidAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### Show notes field in treatment dialogs

Choose if you want to have a notes field when entering treatments or not.

#### Luces de estado

Choose if you want to have [status lights](../Configuration/Preferences#status-lights) on overview for canula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Critical age will show up in red.

#### Advanced settings

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percenteage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Acciones

* Some buttons to quickly access common features.
* See [AAPS screenshots](../Getting-Started/Screenshots#action-tab) for details.

### Automatización

User defined automation tasks ('if-then-else'). Please [read on here](../Usage/Automation.rst).

### Comunicaciones SMS

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Food

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

Si desea bolo etc. desde el reloj entonces dentro de "Configuración de Reloj" que necesitas para activar "Controles desde el Reloj".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### NSClient

* Setup sync of your AndroidAPS data with Nightscout.
* Settings in [preferences](../Configuration/Preferences#nsclient) can be opened by clicking the cog wheel.

### Maintenance

Email and number of logs to be send. Normally no change necessary.

### Configuraciones

Use tab for config builder instead of hamburger menu.