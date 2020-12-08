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

Realice un **cambio de perfil** para activar un perfil de Nightscout. Mantén pulsado el perfil actual en la pantalla de inicio AAPS en la parte superior (campo gris entre el campo azul claro "Lazo Abrierto/Cerrado" y el campo azul oscuro Objetivo) > Cambio de perfil > Seleccionar perfil > Aceptar. AAPS también escribe el perfil seleccionado en la bomba después de que el cambio de perfil, de modo que esté disponible sin AAPS en caso de emergencia y continúa su ejecución.

Ventajas:

* perfiles múltiples
* fácil de editar por PC o tablet

Desventajas:

* no hay cambios locales en la configuración del perfil
* el perfil no puede ser cambiado directamente en el teléfono

## Insulina

Seleccione el tipo de curva de insulina que está usando. Las opciones 'Rapid-Acting Oref', Ultra-Rapid Oref' y 'Free-Peak Oref' tienen una forma exponencial. Más información disponible en [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), las curvas varían según el DIA y el tiempo de pico de acción.

La DIA no es la misma para cada persona. Es por eso que tienes que probarlo por ti mismo. Pero siempre debe ser de al menos 5 horas. Puede leer más sobre esto en la sección Perfil de Insulina de [aqui](../Getting-Started/Screenshots#insulin-profile).

Para Rapid-Acting y Ultra-Rapid, el DIA es la única variable que se puede ajustar por ti mismo, el tiempo de pico es fijo. Free-Peak te permite ajustar tanto el DIA como el tiempo hasta el pico, y sólo debe ser utilizado por los usuarios avanzados que conocen los efectos de estos ajustes.

El [gráfico de la curva de insulina](../Getting-Started/Screenshots#insulin-profile) le ayuda a comprender las diferentes curvas. Puede verlo habilitando la casilla de verificación para mostrarla como una pestaña, de lo contrario estará en el menú.

### Rapid-Acting Oref

* recomendado para Humalog, Novolog y Novorapid
* DIA = al menos 5.0h
* Máximo pico = 75 minutos después de la inyección (fijo, no ajustable)

### Ultra-Rapid Oref

* recomendado para FIASP
* DIA = al menos 5.0h
* Máximo pico = 55 minutos después de la inyección (fijo, no ajustable)

For a lot of people there is practically no noticeable effect of FIASP after 3-4 hours any more, even if 0.0xx units are available as a rule then. Esta cantidad residual puede actuar durante los deportes, por ejemplo. Por lo tanto, AndroidAPS utiliza el mínimo de 5h como DIA.

![Configuración Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Free-Peak Oref

Con el perfil "Free Peak 0ref" usted puede ingresar individualmente el tiempo del pico. El DIA se establece automáticamente en 5 horas si no se especifica un valor superior en el perfil.

Este perfil de efecto se recomienda si se utiliza una insulina no respaldada o una mezcla de insulinas diferentes.

## Fuentes de BG (datos de glucemia)

Seleccione la fuente de glucosa en sangre que está utilizando: consulte la página [BG Fuentes ](BG-Source.rst) para obtener más información de configuración.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient BG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [ Spip ](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)-sólo se da soporte a la versión 4.15.57 y posterior
* [Dexcom App (parche) ](https://github.com/dexcomapp/dexcomapp/) -Seleccione 'Enviar datos de BG a xDrip +' si desea utilizar las alarmas xDrip +.
    
    ![Configurar origen de BG](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

* [Tomato App](http://tomato.cool/) para dispositivo MiaoMiao
* BG aleatorio: genera datos BG aleatorios (sólo demostración)

## Bomba

Seleccione la bomba que está utilizando.

* [Dana R](DanaR-Insulin-Pump.md)
* Dana R Coreano (para la bomba DanaR)
* Dana Rv2 (bomba DanaR con actualización de firmware no oficial)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu-Chek Insight](Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (requiere la instalación de ruffy)
* [Medtronic](MedtronicPump.md)
* MDI (recibir sugerencias de AAPS para su terapia de inyecciones múltiples diarias)
* Bomba virtual (bucle abierto para la bomba que no tiene ningún controlador todavía-sólo sugerencias de AAPS)

Para las bombas dana, utilice ** Valores avanzados ** para activar el control de BT si es necesario. Desactiva bluetooth por un segundo si no es posible ninguna conexión a la bomba. Esto puede ayudar en algunos teléfonos donde la pila (Stack) Bluetooth se congela (freezes).

[La contraseña para la bomba de Dana RS](../Configuration/DanaRS-Insulin-Pump.md) debe especificarse correctamente. La contraseña no se ha comprobado en versiones anteriores.

## Detección de sensibilidad

Seleccione el tipo de detección de sensibilidad. Para más detalles de los diferentes diseños por favor [leer aquí](../Configuration/Sensitivity-detection-and-COB.md). Esto analizará los datos históricos sobre la marcha y realizará ajustes si reconoce que está reaccionando con más sensibilidad (o a la inversa, más resistente) a la insulina de lo habitual. Se pueden leer más detalles sobre el algoritmo de Sensibilidad en el [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

Usted puede ver su sensibilidad en la pantalla de inicio seleccionando SEN y viendo la línea blanca. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](../Usage/Open-APS-features#autosens) automatically adjust the amount of insulin delivered. Antes de alcanzar ese objetivo, el porcentaje de Autosens/la línea en el gráfico se muestra sólo para información.

### Ajustes absorción

Si utiliza Oref1 con SMB, debe cambiar **min_5m_carbimpact ** a 8. El valor sólo se utiliza durante las diferencias en las lecturas de CGM o cuando la actividad física "utiliza" todo el aumento de la glucosa en la sangre, lo que de otra manera causaría que la AAPS descienda a COB. A veces, cuando [ absorción de carbohidratos ](../Usage/COB-calculation.rst) no se puede elaborar dinámicamente basándose en su cambios de glucosa, se inserta un ajuste por medio de los carbohidratos. Básicamente, es un seguro contra fallos.

## APS

Seleccione el algoritmo APS deseado para realizar los ajustes de la terapia. Puede ver los detalles activos del algoritmo elegido en la pestaña OpenAPS(OAPS).

* OpenAPS AMA (asistencia de comida avanzada, estado del algoritmo en 2017)   
    Más detalles acerca de OpenAPS AMA se pueden encontrar en [OpenAPS docs ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably. 
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users)  
    Note you need to be in [Objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Loop

* Cambie entre Lazo Abierto, Lazo Cerrado y Suspensión con Glucosa Baja (SGB).

![Asistente de configuración - Modo lazo](../images/ConfigBuilder_LoopLGS.png)

### Lazo abierto

* AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. 
* The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). 
* Esta opción es para conocer cómo funciona AndroidAPS o si está usando una bomba no soportada.

### Lazo cerrado

* AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). 
* El Loop Cerrado funciona dentro de numerosos límites de seguridad, que se pueden establecer individualmente.
* El Lazo Cerrado sólo es posible si está en [Objetivo 6 ](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) o superior y utiliza una bomba soportada.
* Please note: In closed loop mode a single target instead of target range (i.e. 5,5 mmol or 100 mg/dl instead of 5,0 - 7,0 mmol or 90 - 125 mg/dl) is recommended.

### Suspensión por glucosa baja (SGB)

* maxIOB se establece en cero
* Esto significa que si la glucosa en sangre está disminuyendo, puede reducir la basal.
* Pero si la glucosa en sangre está aumentando, no se hará ninguna corrección automática. Sus tasas basales seguirán siendo las mismas que su perfil seleccionado.
* Only if basal IOB is negative (from a previous Low Glucose Suspend) additional insulin will be given to lower BG.

### Valor mínimo de cambio

* Cuando se utiliza en lazo abierto recibirás notificaciones cada vez que AAPS recomienda ajustar basal. 
* Para reducir el número de notificaciones puede usar un rango de objetivo más amplio o aumentar el porcentaje de la tasa mínima de solicitud.
* Esto define el cambio relativo necesario para desencadenar una notificación.

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

#### Asistente configuración

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Default Temp-Targets

Choose default temp-targets (duration and target). Preset values are:

* comer pronto: objetivo 72 mg/dl / 4,0 mmol/l, duración 45 min
* actividad: objetivo 140 mg/dl / 7,8 mmol/l, duración 90 min
* hipo: objetivo 125 mg/dl / 6,9 mmol/l, duración 45 min

#### Llenar/Rellenar cantidad de insulina estándar

Elija las cantidades predeterminadas de los tres botones en el diálogo de llenado/cebado, según la longitud de su catéter.

#### Rango de visualización

Elija las marcas altas y bajas para el gráfico BG en la descripción general de AndroidAPS y el reloj inteligente. Es solo la visualización, no el rango objetivo para tu BG. Ejemplo: 70-180 mg/dl ó 3,9-10 mmol/l

#### Título corto en pestaña

Elija si los títulos de las pestañas en AndroidAPS son largos (por ejemplo, ACCIONES, PERFIL LOCAL, AUTOMATIZACIÓN) o cortos (por ejemplo, ACT, LP, AUTO)

#### Mostrar el campo notas en diálogos de tratamientos

Elige si deseas tener un campo de notas al entrar en tratamientos o no.

#### Luces de estado

Elige si deseas tener [ luces de estado ](../Configuration/Preferences#status-lights) en la descripción general de la edad de la cánula, la edad de la insulina, la edad del sensor, la edad de la batería, el nivel del depósito o el nivel de la batería. Cuando se alcanza el nivel de advertencia, el color de la luz de estado cambiará a amarillo. La edad crítica se mostrará en rojo.

#### Ajustes avanzados

** Administrar esta parte del resultado del asistente de bolo**: cuando se usa SMB, muchas personas no administran el 100% de la insulina necesaria en bolo alimenticio, sino solo una parte (por ejemplo, 75%) y dejan el SMB con UAM (detección de comida sin supervisión) haga el resto. En esta configuración, puede elegir un valor predeterminado para el porcentaje con el que el asistente de bolo debe calcular. Si este ajuste es del 75% y tuvo que administrar un bolo de 10 u, el asistente de bolo le propondrá un bolo de comida de solo 7,5 unidades.

**Habilite la función de superbolo en el asistente ** (¡Es diferente de * supermicrobolus *!): Use con precaución y no la habilite hasta que sepa lo que realmente hace. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! Si utiliza las funciones de bucle de SMB, AAPS se inhabilitará de acuerdo con los valores en ["Máx minutos de basal para limitar SMB a" ](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), si no utiliza funciones de bucle de SMB se inhabilitarán durante dos horas. ** Detalles de super bolo pueden encontrarse [aquí ](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Acciones

Algunos botones para acceder rápidamente a funciones comunes:

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

Algunos médicos usan -especialmente para los recién iniciados en las bombas- una relación basal-bolo de 50:50. Por lo tanto, la proporción se calcula como TDD / 2 * TBB (Total base basal = suma de la tasa basal en 24 horas). Otros prefieren un rango de 32% a 37% de TDD para TBB. Al igual que la mayoría de estas reglas empíricas, su validez real es limitada. Nota: ¡Tu diabetes puede variar!

![Pestaña de acción](../images/ConfBuild_ConfBuild_Actions_b.png)

### Automatización

Tareas de automatización definidas por el usuario ('si-entonces-si no'). Por favor, [lee aquí](../Usage/Automation.rst).

### Comunicaciones SMS

Permite a los cuidadores remotos controlar algunas características de AndroidAPS a través de SMS, ver [mandos SMS ](../Children/SMS-Commands.rst) para obtener más información de configuración.

### Comida

Muestra los valores de alimentos definidos en la base de datos de alimentos de Nightscout, consulte el apartado [Información de Nightscout](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) para obtener más información de configuración.

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

### Mantenimiento

Email and number of logs to be send. Normally no change necessary.

### Configuraciones

Use tab for config builder instead of hamburger menu.