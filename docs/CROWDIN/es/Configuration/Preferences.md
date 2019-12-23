# Preferencias

Abra las preferencias haciendo clic en el menú de tres puntos en la parte superior derecha de la pantalla de inicio:

![Cómo abrir las preferencias](../images/PreferencesOpen.png)

## Contraseña y ajustes

Permite establecer una contraseña para prevenir el uso accidental o no autorizado de las preferencias. Después de introducir la contraseña aquí se te requerirá introducirla para acceder a preferencias. Para eliminar la opción de contraseña en preferencias elimina el texto en el campo contraseña.

## Edad paciente

Hay límites de seguridad basados en la edad que selecciona aquí. Si sobrepasa con frecuencia los límites establecidos (como el max bolo) quizás sea momento de ir un paso más allá. Es una mala idea seleccionar una edad mayor que la real ya que podría provocar la sobredosificación introduciendo por error un valor equivocado (por ej: comerse un decimal en la cantidad del bolo por equivocación). Si desea conocer los números actuales de estos límites de seguridad codificados, desplácese hasta la característica de algoritmo que está utilizando en [esta página](../Usage/Open-APS-features.md).

## General

* Selecciona la lengua aquí. Si no está disponible, o no todas las palabras han sido traducidas entonces puedes hacer sugerencias. Los archivos de traducciones están disponibles aquí: App>Src>Main>Res>Values>String o pregunta en la sala de gitter.

## Inicio

* Mantener la pantalla encendida es útil, mientras que usted está dando una presentación. Va a consumir una gran cantidad de energía, por lo que es recomendable tener el teléfono conectado a un cargador.
* Botones le permiten elegir qué botones están visibles en la pantalla de inicio. También le da algunas opciones para la pantalla emergente que verá después de pulsar un botón.
* Ajuste rápido de wizard permite añadir un botón rápido para los snack o comidas, introduce los carbohidratos en la pantalla principal y selecciona el botón wizard para calcular el bolo para esos carbohidratos basado en tus ratios ( teniendo en cuenta glucosa o insulina a bordo).

### Ajustes avanzados

![Preferencias - General - Configuración Avanzada](../images/PreferencesOverviewAdvanced_V2_5.png)

* Configuración general para entregar sólo parte del resultado del asistente de bolo. Sólo el porcentaje establecido (debe estar entre 10 y 100) del bolo calculado se entrega cuando se utiliza el asistente de bolos (bolus wizard). El porcentaje se muestra en el asistente en bolos.
    
    ![Asistente de Bolos 80%](../images/BolusWizardPartDelivery.png)

* Opción para habilitar [superbolo](../Getting-Started/Screenshots#section-a) en el asistente de bolos.

### Status lights

* Status lights give a visual warning for low reservoir and battery level as well as overdue site change. Extended version shows elapsed time / battery percentage.
    
    ![Status lights - detail](../images/StatusLights_V2_5.png)
    
    Settings for status lights must be made in Nightscout settings. Set the following variables:
    
    * Cannula age: CAGE_WARN and CAGE_URGENT (standard 48 and 72 hours)
    * Insulin age (reservoir): IAGE_WARN and IAGE_URGENT (standard 72 and 96 hours)
    * Sensor age: SAGE_WARN and SAGE_URGENT (standard 164 and 166 hours)
    * Battery age: BAGE_WARN and BAGE_URGENT (standard 240 and 360 hours)

* Treshold for warning reservoir level and critical reservoir level.

* Treshold for warning battery level and critical battery level.

## Seguridad en los tratamientos

### Max allowed bolus [U]

Esta es la cantidad máxima de insulina en bolo que AAPS puede poner. Esta configuración existe como un límite de seguridad para evitar la administración de un bolo masivo debido a una entrada accidental o error del usuario. Se recomienda establecer esto en una cantidad razonable que corresponda aproximadamente a la cantidad máxima de insulina en bolo que probablemente necesitará para una dosis de comida o corrección. Esta restricción también se aplica a los resultados de la Calculadora de bolo.

### Max allowed carbs [g]

Esta es la cantidad máxima de carbohidratos que la calculadora de bolo AAPS puede dosificar. Esta configuración existe como un límite de seguridad para evitar la administración de un bolo masivo debido a una entrada accidental o error del usuario. Se recomienda establecer esto en una cantidad razonable que corresponda aproximadamente a la cantidad máxima de carbohidratos que probablemente necesite para una comida.

## Loop

Puede alternar entre lazo abierto y cerrado aquí. Abrir lazo significa que las sugerencias de Basales temporales se basan en sus datos y aparecen como una notificación, pero debe elegir aceptarlas manualmente e ingresarlas manualmente en su bomba. El lazo cerrado significa que las sugerencias de TBR se envían automáticamente a su bomba sin confirmación o aportación suya. La pantalla de inicio se mostrará en la esquina superior izquierda, ya sea que esté abierto o cerrado, y al mantener presionado este botón de pantalla de inicio también podrá alternar entre los dos.

## OpenaAPS AMA

Openaps AMA Permite que el sistema funcione más agresivamente de manera temporal después de un bolo de comida SI se ingresa carbohidratos. Actívelo en la pestaña Configuración para ver los valores de seguridad aquí, tendrá que haber completado [Objetivo 9 ](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) para utilizar esta característica. Puede leer más sobre la configuración y Autosens en los documentos de OpenAPS.

### Max U/hr a Temp Basal can be set to

Esta configuración existe como un límite de seguridad para evitar que AAPS sea capaz de dar una tasa basal peligrosamente alta. El valor se mide en unidades por hora (u / h). Se aconseja establecer esto en algo sensato. Una buena recomendación es tomar la tasa basal más alta en su perfil y multiplicarla por 4. Por ejemplo, si la tasa basal más alta en su perfil fue de 0.5u / h, podría multiplicarla por 4 para obtener un valor de 2u / hr.

### Maximum basal IOB OpenAPS can deliver [U]

Cantidad de insulina basal adicional (en unidades) que se acumula en el cuerpo, además de su perfil basal normal. Una vez que se alcanza este valor, AAPS dejará de administrar insulina basal adicional hasta que la Insulina a Bordo (IOB) basal vuelva a estar dentro de este rango.

* This value does not consider bolus IOB, only basal.
* This value is calculated and monitored independently of your normal basal rate. It is only the additional basal insulin on top of that normal rate that is considered.
* This value is measured in insulin units (u).

Cuando comience el lazo cerrado, se recomienda establecer Max Basal IOB en 0 durante un período de tiempo, mientras se está acostumbrando al sistema. Esto evita que AAPS administre insulina basal adicional. Durante este tiempo, AAPS aún podrá limitar o cortar su insulina basal para ayudar a prevenir la hipoglucemia.

Este es un paso importante para:

* Have a period of time to safely get used to the AAPS system and monitor how it works.
* Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
* See how AAPS limits your basal insulin to prevent hypoglycaemia.

Cuando se sienta cómodo, puede permitir que el sistema comience a administrarle insulina basal adicional, aumentando el valor de IOB basal máxima. La pauta recomendada para esto es tomar la tasa basal más alta en su perfil y multiplicarla por 3. Por ejemplo, si la tasa basal más alta en su perfil fue de 0.5u / h, podría multiplicarla por 3 para obtener un valor de 1.5u.

* You can start conservatively with this value and increase it slowly over time. 
* These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

*Nota: Como medida de seguridad, Max Basal IOB está limitada a 7u.*

## Ajustes de absorción

Si ha seleccionado usar AMA Autosens, podrá ingresar su tiempo máximo de absorción de comidas y la frecuencia con la que desea que autosense se actualice. Si come comidas con alto contenido de grasas o proteínas, necesitará aumentar el tiempo de absorción de las comidas.

## Configuración de la bomba

Las opciones aquí variarán según el controlador de la bomba que haya seleccionado en 'Config Builder'. Empareje y configure su bomba de acuerdo a las instrucciones relacionadas con la misma:

* [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) 
* [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump.md) 
* [Bomba de insulina Accu Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Medtronic Pump](..//Configuration/MedtronicPump.md)

Si usa AndroidAPS en lazo abierto, asegúrese de haber seleccionado Virtual Pump en config builder.

## NS Client

* Set your 'nightscout URL' here (https://yourwebsitename.herokuapp.com or https://yourwebsitename.azurewebsites.net), and the 'API secret' (a 12 character password recorded in your heroku or azure variables). This enables data to be read and written between both the nightscout website and AndroidAPS. Double check for typos here if you are stuck in Objective 1.
* **Make sure that the URL is WITHOUT /api/v1/ at the end.**
    
    ![NSClient URL](../images/NSClientURL.png)

* 'Log app start to nightscout' will record a note in your careportal entries every time the app is started. The app should not be needing to start more than once a day; more frequently than this suggests a problem.

* 'Alarm options' allows you to select which default nightscout alarms to use through the app. For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [heroku or azure variables](http://www.nightscout.info/wiki/welcome/website-features#customalarms). They will only work whilst you have a connection to nightscout and are intended for parent/carers, if you have the CGM source on your phone then use those alarms instead (e.g. xdrip+).
* 'Enable local broadcasts' will share your careportal data to other apps on the phone such as xdrip.
* 'Always use basal absolute values' must be activated if you want to use Autotune properly.
    
    **Do not activate this when using [Insight pump](https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Insight-Pump#settings-in-aaps)!** It would lead to false TBR settings in Insight pump.

## Comunicaciones SMS

Esta configuración permite el control remoto de la aplicación enviando instrucciones por mensaje de texto al teléfono del paciente que la aplicación seguidora, como suspender el lazo o el bolo. Más información se muestra en [Comandos SMS](../Children/SMS-Commands.rst), pero sólo se mostrará en las Preferencias de si se ha seleccionado esta opción en el Config Builder.

## Otros

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Opciones de datos

* 'Fabric Upload' will send crash reporting and feature usage data to the developers.