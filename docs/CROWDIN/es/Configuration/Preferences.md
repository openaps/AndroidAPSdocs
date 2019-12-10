# Preferencias

Abra las preferencias haciendo clic en el menú de tres puntos en la parte superior derecha de la pantalla de inicio:

![Cómo abrir las preferencias](../images/PreferencesOpen.png)

## Contraseña y ajustes

Permite establecer una contraseña para prevenir el uso accidental o no autorizado de las preferencias. Después de introducir la contraseña aquí se te requerirá introducirla para acceder a preferencias. Para eliminar la opción de contraseña en preferencias elimina el texto en el campo contraseña.

## Edad paciente

Hay límites de seguridad basados en la edad que selecciona aquí. Si sobrepasa con frecuencia los límites establecidos (como el max bolo) quizás sea momento de ir un paso más allá. Es una mala idea seleccionar una edad mayor que la real ya que podría provocar la sobredosificación introduciendo por error un valor equivocado (por ej: comerse un decimal en la cantidad del bolo por equivocación). Si desea conocer los números actuales de estos límites de seguridad codificados, desplácese hasta la característica de algoritmo que está utilizando en [esta página](../Usage/Open-APS-features.md).

## General

* Selecciona la lengua aquí. Si no está disponible, o no todas las palabras han sido traducidas entonces puedes hacer sugerencias. Los archivos de traducciones están disponibles aquí: App>Src>Main>Res>Values>String o pregunta en la sala de gitter.

## Overview

* Mantener la pantalla encendida es útil, mientras que usted está dando una presentación. Va a consumir una gran cantidad de energía, por lo que es recomendable tener el teléfono conectado a un cargador.
* Botones le permiten elegir qué botones están visibles en la pantalla de inicio. También le da algunas opciones para la pantalla emergente que verá después de pulsar un botón.
* Quick Wizard settings allows you to add a quick button for a frequent snack or meal, enter your decided carb details and on the homescreen if you select the quick wizard button it will calculate and bolus for those carbs based on your current ratios (taking into account blood glucose value or insulin on board if set up).

### Advanced Settings

![Preferencias - General - Configuración Avanzada](../images/PreferencesOverviewAdvanced_V2_5.png)

* Configuración general para entregar sólo parte del resultado del asistente de bolo. Only the set percentage (must be between 10 and 100) of the calculated bolus is delivered when using bolus wizard. El porcentaje se muestra en el asistente en bolos.
    
    ![Asistente de Bolos 80%](../images/BolusWizardPartDelivery.png)

* Opción para habilitar [superbolo](../Getting-Started/Screenshots#section-a) en el asistente de bolos.

* Las luces de estado proporcionan un aviso visual para el bajo nivel de reservorio y batería, así como para el cambio de cánula por tiempo vencido (cambio de sitio). La versión ampliada muestra el tiempo transcurrido / el porcentaje de la batería.
    
    ![Status lights - detail](../images/StatusLights_V2_5.png)
    
    Los ajustes para las luces de estado se deben hacer en la configuración de Nightscout. Establezca las siguientes variables:
    
    * Tiempo de uso de canula: CAGE_WARN y CAGE_URGENT (normalmente 48 y 72 horas)
    * Tiempo de uso de reservorio: IAGE_WARN y IAGE_URGENT (normalmente 72 y 96 horas)
    * Tiempo de uso del sensor: SAGE_WARN y SAGE_URGENT (normalmente 164 y 166 horas)
    * Tiempo de uso de la batería: BAGE_WARN y BAGE_URGENT (normalmente 240 y 360 horas)

* Umbral de advertencia de nivel del reservorio y de nivel crítico del mismo.

* Umbral de advertencia de nivel de batería y el nivel crítico de batería.

## Seguridad en los tratamientos

### Max bolo permitido [U]

Esta es la cantidad máxima de insulina en bolo que AAPS puede poner. Esta configuración existe como un límite de seguridad para evitar la administración de un bolo masivo debido a una entrada accidental o error del usuario. Se recomienda establecer esto en una cantidad razonable que corresponda aproximadamente a la cantidad máxima de insulina en bolo que probablemente necesitará para una dosis de comida o corrección. Esta restricción también se aplica a los resultados de la Calculadora de bolo.

### Máx. Carbohidratos permitidos [g]

Esta es la cantidad máxima de carbohidratos que la calculadora de bolo AAPS puede dosificar. Esta configuración existe como un límite de seguridad para evitar la administración de un bolo masivo debido a una entrada accidental o error del usuario. Se recomienda establecer esto en una cantidad razonable que corresponda aproximadamente a la cantidad máxima de carbohidratos que probablemente necesite para una comida.

## Loop

Puede alternar entre lazo abierto y cerrado aquí. Open looping means TBR suggestions are made based on your data and appear as a notification, but you must manually choose to accept them and manually enter them into your pump. El lazo cerrado significa que las sugerencias de TBR se envían automáticamente a su bomba sin confirmación o aportación suya. The homescreen will display in the top left corner whether you are open or closed looping, and pressing and holding this homescreen button will also allow you to toggle between the two.

## OpenaAPS AMA

OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. Turn it on in the Config tab to view the safety settings here, you will need to have completed [Objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) to use this feature. Puede leer más sobre la configuración y Autosens en los documentos de OpenAPS.

### Max U/hr que se pueden configurar la Basal Temporal

This setting exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate. El valor se mide en unidades por hora (u / h). Se aconseja establecer esto en algo sensato. Una buena recomendación es tomar la tasa basal más alta en su perfil y multiplicarla por 4. Por ejemplo, si la tasa basal más alta en su perfil fue de 0.5u / h, podría multiplicarla por 4 para obtener un valor de 2u / hr.

### Max IOB que OpenAPS puede proporcionar [U]

Cantidad de insulina basal adicional (en unidades) que se acumula en el cuerpo, además de su perfil basal normal. Una vez que se alcanza este valor, AAPS dejará de administrar insulina basal adicional hasta que la Insulina a Bordo (IOB) basal vuelva a estar dentro de este rango.

* Este valor no considera IOB de bolos, solo basal.
* Este valor se calcula y monitorea independientemente de su tasa basal normal. Solo se considera la insulina basal adicional además de la tasa normal.
* Este valor se mide en unidades de insulina (u).

Cuando comience el lazo cerrado, se recomienda establecer Max Basal IOB en 0 durante un período de tiempo, mientras se está acostumbrando al sistema. Esto evita que AAPS administre insulina basal adicional. Durante este tiempo, AAPS aún podrá limitar o cortar su insulina basal para ayudar a prevenir la hipoglucemia.

Este es un paso importante para:

* Disponga de un período de tiempo para acostumbrarse de manera segura al sistema AAPS y monitorear cómo funciona.
* Aproveche la oportunidad de perfeccionar su perfil basal y el Factor de sensibilidad a la insulina (FSI).
* Vea cómo AAPS limita su insulina basal para prevenir la hipoglucemia.

When you feel comfortable, you can allow the system to start giving you additional basal insulin, by raising the Max Basal IOB value. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 3 to get a value of 1.5u.

* Puede comenzar de manera conservadora con este valor y aumentarlo lentamente con el tiempo. 
* Estas son solo pautas; el cuerpo de todos es diferente. Puede encontrar que necesita más o menos de lo que se recomienda aquí, pero siempre comience de manera conservadora y ajuste lentamente.

*Nota: Como medida de seguridad, Max Basal IOB está limitada a 7u.*

## Ajustes de absorción

Si ha seleccionado usar AMA Autosens, podrá ingresar su tiempo máximo de absorción de comidas y la frecuencia con la que desea que autosense se actualice. If you often eat high fat or protein meals you will need to increase your meal absorption time.

## Configuración de la bomba

The options here will vary depending on which pump driver you have selected in 'Config Builder'. Empareje y configure su bomba de acuerdo a las instrucciones relacionadas con la misma:

* [Bomba de insulina DanaR](../Configuration/DanaR-Insulin-Pump.md) 
* [Bomba de insulina DanaRS](../Configuration/DanaRS-Insulin-Pump.md) 
* [Bomba de insulina Accu Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Infusora Medtronic](..//Configuration/MedtronicPump.md)

If using AndroidAPS to open loop then make sure you have selected Virtual Pump in config builder.

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

This setting allows remote control of the app by texting instructions to the patients phone which the app will follow such as suspending loop, or bolusing. Further information is described in [SMS Commands](../Children/SMS-Commands.rst) but it will only display in Preferences if you have selected this option in the Config Builder.

## Otros

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Data Choices

* 'Fabric Upload' will send crash reporting and feature usage data to the developers.