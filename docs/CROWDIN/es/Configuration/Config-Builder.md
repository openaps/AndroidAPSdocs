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

El "perfil local" utiliza el perfil basal manualmente ingresado en el teléfono. Tan pronto como se selecciona, aparece una nueva pestaña en AAPS, donde puede cambiar los datos de perfil leídos de la bomba si es necesario. Con la tecla siguiente, el perfil se escriben en la bomba en el perfil 1. Este perfil se recomienda ya que no depende de la conectividad a Internet.

Los perfiles locales forman parte de [ valores exportados ](../Usage/ExportImportSettings.rst). Así que asegúrese de tener una copia de seguridad en un lugar seguro.

![Valores de perfil local](../images/LocalProfile_Settings.png)

Botones:

* green plus: add
* rojo X: borrar
* flecha azul: duplicado

Si realiza algún cambio en su perfil, asegúrese de que está editando el perfil correcto. In profile tab there is not always shown the actual profile beeing used - e.g. if you made a profile switch by using the profile tab on homescreen it may differ from the profile actually shown in profile tab as there is no connection between these.

#### Clone profile switch

Puede crear fácilmente un perfil local nuevo a partir del conmutador de perfil. In this case timeshift and percentage will be applied to the new local profile.

1. Vaya a la pestaña de tratamientos.
2. Seleccionar Cambio de perfil.
3. Pulse "Clonar".
4. Puede editar el nuevo perfil local en la pestaña Perfil local (LP) o a través del menú principal.

![Clone profile switch](../images/LocalProfile_ClonePS.png)

If you want to switch from Nightscout profile to local profile just do a profile switch on your NS profile and clone the profile switch as described above.

#### Cargar los perfiles locales para Nightscout

Los perfiles locales también se pueden subir a Nightscout. Los ajustes se pueden encontrar en las preferencias de NS Client.

![Cargar el perfil local de NS](../images/LocalProfile_UploadNS2.png)

Advantage:

* no es necesaria ninguna conexión a Internet para cambiar los valores de perfil
* los cambios de perfil se pueden hacer directamente en el teléfono
* new profile can be created from profile switch
* local profiles can be uploaded to Nightscout

Disadvantage:

* ninguno

### Perfil NS

NS Profile uses the profiles you have saved on your Nightscout site (https://[yournightscoutsiteaddress]/profile). You can use the [Profile Switch](../Usage/Profiles.md) to change which of those profiles is active, this writes the profile to the pump in case of AndroidAPS failure. This allows you to easily create multiple profiles in Nightscout (i.e.. work, home, sports, holidays, etc.). Shortly after clicking on "Save" they will be transferred to AAPS if your smartphone is online. Even without an Internet connection or without a connection to Nightscout, the Nightscout profiles are available in AAPS once they have been synchronized.

Do a **profile switch** to activate a profile from Nightscout. Press and hold the current profile in the AAPS homescreen at the top (grey field between the light blue "Open/Closed Loop" field and the dark blue target area field) > Profile switch > Select profile > OK. AAPS also writes the selected profile into the pump after the profile change, so that it is available without AAPS in an emergency and continues to run.

Advantage:

* perfiles múltiples
* fácil de editar por PC o tablet

Disadvantage:

* no hay cambios locales en la configuración del perfil
* el perfil no puede ser cambiado directamente en el teléfono

## Insulina

Select the type of insulin curve you are using. The options 'Rapid-Acting Oref', Ultra-Rapid Oref' and 'Free-Peak Oref' all have an exponential shape. More information is listed in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), the curves will vary based on the DIA and the time to peak.

The DIA is not the same for each person. That's why you have to test it for yourself. But it must always be at least 5 hours. You can read more about that in the Insulin Profile section of [this](../Getting-Started/Screenshots#insulin-profile) page.

For Rapid-Acting and Ultra-Rapid, the DIA is the only variable you can adjust by yourself, the time to peak is fixed. Free-Peak allows you to adjust both the DIA and the time to peak, and must only be used by advanced users who know the effects of these settings.

The [insulin curve graph](../Getting-Started/Screenshots#insulin-profile) helps you to understand the different curves. You can view it by enabling the tickbox to show it as a tab, otherwise it will be in the hamburger menu.

### Rapid-Acting Oref

* recomendado para Humalog, Novolog y Novorapid
* DIA = al menos 5.0h
* Máximo pico = 75 minutos después de la inyección (fijo, no ajustable)

### Ultra-Rapid Oref

* recomendado para FIASP
* DIA = al menos 5.0h
* Máximo pico = 55 minutos después de la inyección (fijo, no ajustable)

For a lot of people there is practically no noticeable effect of FIASP after 3-4 hours any more, even if 0.0xx units are available as a rule then. This residual amount can still be noticeable during sports, for example. Therefore, AndroidAPS uses minimum 5h as DIA.

![Config Builder Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Free-Peak Oref

With the "Free Peak 0ref" profile you can individually enter the peak time. The DIA is automatically set to 5 hours if it is not specified higher in the profile.

This effect profile is recommended if an unbacked insulin or a mixture of different insulins is used.

## Fuentes de BG (datos de glucemia)

Select the blood glucose source you are using - see [BG Source](BG-Source.rst) page for more setup information.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient BG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [ Spip ](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)-sólo se da soporte a la versión 4.15.57 y posterior
* [Dexcom App (parche) ](https://github.com/dexcomapp/dexcomapp/) -Seleccione 'Enviar datos de BG a xDrip +' si desea utilizar las alarmas xDrip +.
    
    ![Configurar origen de BG](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Bomba

Select the pump you are using.

* [Dana R](DanaR-Insulin-Pump.md)
* Dana R Coreano (para la bomba DanaR)
* Dana Rv2 (bomba DanaR con actualización de firmware)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu Chek Combo Pump ](Accu-Chek-Combo-Pump.md) (requiere la instalación de ruffy)
* MDI (recibir sugerencias de AAPS para su terapia de inyecciones múltiples diarias)
* Bomba virtual (lazo abierto para la bomba que no tiene ningún controlador todavía-sólo sugerencias de AAPS)

For dana pumps, use **Advanced settings** to activate BT watchdog if necessary. It switches off bluetooth for one second if no connection to the pump is possible. This may help on some phones where the bluetooth stack freezes.

## Detección de sensibilidad

Select the type of sensitivity detection. This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. Details about the Sensitivity Oref0 algorithm can be read in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](../Usage/Open-APS-features.html#autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the Autosens percentage / the line in your graph is displayed for information only.

### Ajustes absorción

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../Usage/COB-calculation.rst) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS MA (asistencia para comidas, estado del algoritmo en 2016)
* OpenAPS AMA (asistencia de comida avanzada, estado del algoritmo en 2017)   
    Más detalles acerca de OpenAPS AMA se pueden encontrar en [OpenAPS docs ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). En términos simples, los beneficios son después que se pone un bolo de comida, el sistema puede ser más rápido si especifica los carbohidratos de forma fiable.   
    Note que necesita estar en [Objetivo 9 ](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) para poder utilizar OpenAPS AMA.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolo, el más reciente algoritmo para usuarios avanzados)  
    Nota: debe estar en [Objetivo 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) para utilizar OpenAPS SMB y min_5m_carbimpact debe estar ajustado a las 8 en el Config builder > Sensibilidad de detección > Valor de sensibilidad Oref1.

## Loop

Define whether you want to allow AAPS automatic controls or not.

### Lazo abierto

AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Lazo cerrado

AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). The Closed Loop works within numerous safety limits, which you can be set individually. Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.

## Objetivos (programa de aprendizaje)

AndroidAPS has a number of objectives that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

## Tratamientos

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](../Getting-Started/Screenshots.md#carb-correction).

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
* MCG (abre xDrip +)
* Calibración

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### Asistente configuración

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Ajustes avanzados

Enable super bolus functionality in wizard. Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Acciones

Some buttons to quickly access common features:

* Conmutador de perfiles (consulte el apartado [Página de perfiles](../Usage/Profiles.md) para obtener más información de configuración)
* Objetivos temporales
* Establecer / cancelar temporal. dosis basal
* Bolo extendido (sólo la bomba DanaR/RS o Combo)
* Record for any specific care entries
    
    * Medir glucosa
    * Cambio de cánula y llenado - registro de cambio cánula y llenado (si no se hace en la bomba)
    * Inserción de sensor
    * Cambio batería bomba
    * Nota
    * Ejercicio
* Ver el tiempo del sensor actual, la insulina, la cánula y la batería de la bomba
* Historial
* TDD (dosis diaria total = bolo + basal por día)

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). Others prefer range of 32% to 37% of TDD for TBB. Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Actions tab](../images/ConfBuild_ConfBuild_Actions_b.png)

### Comunicaciones SMS

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Comida

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Reloj

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

Si desea bolo etc. desde el reloj entonces dentro de "Configuración de Reloj" que necesitas para activar "Controles desde el Reloj".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Reenviar todos los datos. Puede ser útil si el reloj no está conectado durante algún tiempo y desea enviar la información al reloj.
* Abre los ajustes en tu reloj directamente desde tu teléfono.

### Linea de estado xDrip (reloj)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Avisos permanentes

Displays a summary of current BG, delta, active TBR%, active basal u/h and profile, IOB and split into bolus IOB and basal IOB on the phones's dropdown screen and phone's lock screen.

![AAPS widget](../images/ConfBuild_Widget.png)

### NS Client

Setup sync of your AndroidAPS data with Nightscout.

If **Log app start to NS** is activated each AndroidAPS will be visible in Nightscout. Might be useful to detect problems with the app (i.e. battery optimization not disabled for AAPS) but can flood the Nightscout graph with entries.

#### Opciones de alarma

Activate/deactivate AndroidAPS alarms

![Opciones de alarma](../images/ConfBuild_NSClient_Alarms.png)

#### Ajustes conexión

Offline looping, disable roaming...

If you want to use only a specific WiFi network you can enter its **WiFi SSID **. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Nightscout connection settings](../images/ConfBuild_ConnectionSettings.png)

#### Ajustes avanzados

* Rellenar BGs perdidos desde NS
* Crear un anuncio a partir de los errores Crear anuncio de Nightscout para los diálogos de errores y alertas locales (también disponible en careportal en la sección de tratamientos)
* Permitir emisión de mensajes a otras aplicaciones como xDrip+
* Sólo carga de NS (sincronización inhabilitada)
* Datos no subidos a NS
* Utilice siempre los valores absolutos basales-> Debe activarse si desea utilizar [Autoajuste ](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) correctamente.

![Nightscout advanced settings](../images/ConfBuild_NSClient_Advanced.png)

### Mantenimiento

Email and number of logs to be send. Normally no change necessary.

### Configuraciones

Use tab for config builder instead of hamburger menu.