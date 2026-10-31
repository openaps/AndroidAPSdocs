# Automatización

```{contents} In this page
:backlinks: entry
:depth: 2
```

## ¿Qué es una automatización?

La «**Automatización**» es una función que puede automatizar tareas en AAPS.

La automatización ejecuta acciones concretas en función de una o más condiciones o activadores. Los activadores pueden ser eventos irregulares, como niveles de glucosa bajos o altos, o una cantidad determinada de insulina activa (IOB) negativa. Las automatizaciones también pueden gestionar eventos repetidos, como comidas o ejercicio a ciertas horas del día, o cuando el usuario está a cierta distancia de una ubicación GPS o en la zona de un SSID Wi-Fi. La automatización puede hacer copias de seguridad de los ajustes de AAPS según un horario o en cada cambio de Pod.

Las reglas de automatización se crean y se modifican en la pantalla **Automatización** (**Administrar → Automatización**). Cada regla tiene dos partes:

- Una o más condiciones o «activadores» que inician una acción.

    Piensa en un horario, un evento o el valor de una propiedad en AAPS

- Una o más acciones que ejecutar.

    Por ejemplo, una alarma, fijar un porcentaje de perfil o exportar los ajustes de AAPS al cambiar el Pod.


Hay muchas opciones de automatización. Te recomendamos estudiarlas en la app AAPS, en la sección Automatización. También puedes buscar ejemplos de automatizaciones de otros usuarios en los grupos de usuarios de AAPS en [**Facebook**](https://www.facebook.com/groups/AndroidAPSUsers) y [**Discord**](https://discord.gg/4fQUWHZ4Mw).

## Cómo puede ayudar la automatización

1. **Automatizar tareas repetidas:** ejecutar acciones programadas de forma automática, sin intervención del usuario.

1. **Menos fatiga por decisiones:** la principal ventaja de las **automatizaciones** es que liberan al usuario de tener que hacer intervenciones manuales en **AAPS**. Una [investigación](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6286423/#ref4) estima que las personas con diabetes tipo 1 tienen que tomar una media de 180 decisiones más al día. Las **automatizaciones** pueden reducir la carga mental y dejar más energía para otros aspectos de la vida.

1. **Posible mejora del control glucémico:** por ejemplo, las **automatizaciones** ayudan a que los **Objetivos temporales** siempre se fijen cuando hacen falta, incluso con mucho trabajo o en momentos de olvido. Por ejemplo, si un niño con diabetes tiene deporte en el colegio los martes a las 10:00 y los jueves a las 14:00, y necesita un objetivo temporal alto («TT») 30 minutos antes del deporte, el **Objetivo temporal** se puede activar con una **Automatización**.

1. **Permitir adaptar mucho AAPS** para que sea más o menos agresivo en situaciones concretas, según las preferencias del usuario. Por ejemplo, activar una reducción temporal del % del **perfil** durante un tiempo fijo si aparece **IOB** negativa en mitad de la noche, lo que indica que el **perfil** actual puede ser demasiado fuerte.

El ejemplo de abajo muestra cómo una **Automatización** puede ahorrar pasos.

Un usuario hace ejercicio todas las mañanas a las 6:00: tiene que acordarse de fijar a mano un «Objetivo temporal - Actividad» en AAPS a las 5:00, antes del ejercicio.

![Texto alternativo](../images/Automations/automation_concept_manual.png)

El usuario ha configurado una **Automatización** que activa a las 5:00 un «Objetivo temporal - Actividad» para que su **glucosa** y su **IOB** sean las mejores posibles antes del ejercicio de las 6:00:

![Texto alternativo](../images/Automations/automation_concept_automated.png)

## Puntos clave antes de empezar con las automatizaciones

1. Antes de configurar algunas automatizaciones, debes tener un control razonable de la **glucosa** con **AAPS**. Las automatizaciones no se deben usar para compensar ajustes de basal, **ISF** o **CR** que no son buenos (se explica más abajo). Evita configurar un **Cambio de perfil** automático para compensar subidas de **glucosa** causadas, _p. ej._, por la comida; es mejor tratarlas con otras estrategias (SMB, etc.).

1. Como con cualquier tecnología, los **MCG**, las **bombas** y los teléfonos pueden fallar: los problemas técnicos o los errores del sensor pueden impedir las acciones de la **Automatización**, y puede hacer falta intervenir a mano.

1. **Las necesidades de automatización suelen cambiar cuando cambian las rutinas**. Cuando pases de periodos de trabajo a colegio o vacaciones, pon un recordatorio en tu calendario para revisar qué **automatizaciones** están activas (es fácil activarlas y desactivarlas). Por ejemplo, si te vas de vacaciones y ya no necesitas una automatización para el deporte del colegio o el ejercicio diario, o si necesitas cambiar los horarios.

1. Las **automatizaciones** pueden entrar en conflicto entre sí. Conviene revisar con cuidado cualquier **Automatización** nueva en un entorno seguro y entender por qué una **Automatización** se ha activado o no como esperabas.

1. Si usas Autosens, intenta usar **Objetivos temporales** en lugar de **Cambios de perfil**. Los **Objetivos temporales** no ponen Autosens a 0. Los **Cambios de perfil** reinician Autosens.

1. La mayoría de las **automatizaciones** solo deben durar un **tiempo limitado**. Después, **AAPS** puede volver a evaluar y repetir la **Automatización** si hace falta y si la condición se sigue cumpliendo. Por ejemplo, «iniciar objetivo temporal de 7,0 mmol/l durante 30 min» o «iniciar **perfil** al 110 % durante 10 min» _e_ «iniciar objetivo temporal de 5,0 mmol/l durante 10 min». Usar **automatizaciones** para hacer cambios permanentes (p. ej., un % de perfil más fuerte) supone riesgo de hipoglucemia.

## ¿Cuándo puedo empezar a usar la automatización?

Las **automatizaciones** se pueden empezar a usar en el **Objetivo 10**.

## ¿Dónde está la automatización en AAPS?

Abre **Administrar** en la barra de navegación inferior de la pantalla principal y selecciona **Automatización**.

## ¿Cómo configuro una automatización?

Para configurar una **Automatización**, pulsa el botón **+** en la pantalla Automatización para crear una «regla»:

![Crear una automatización](../images/Automations/automation_create.png)

* dale un título a tu «regla» (Nombre de la tarea);
* pulsa «**EDITAR**» debajo de **Condición**. En la pantalla **Condición**, elige cómo se combinan los activadores (**Y**, **O**, **Xor (O exclusiva)**) y pulsa «**Añadir activador**»:

![Condición de la automatización](../images/Automations/automation_trigger_editor.png)

* añade al menos un activador:

![Activadores de la automatización](../images/Automations/automation_triggers.png)

* pulsa «**AÑADIR**» debajo de **Acción** y selecciona una acción:

![Acciones de la automatización](../images/Automations/automation_actions.png)

* guarda la regla con el botón **Guardar** y comprueba que la casilla a la izquierda del nombre de la regla está «marcada» para activar la **Automatización**:

![Automatización activada](../images/Automations/automation_rule_activated.png)

Para desactivar una regla de **Automatización**, desmarca la casilla a la izquierda del nombre de la **Automatización**. El ejemplo de abajo muestra una **Automatización** activada («marcada») o desactivada («desmarcada»):

![Texto alternativo](../images/Automations/automation_rule_activated_deactivated.png)


Al configurar una **Automatización**, puedes probarla primero activando la opción «notificación» en «Acciones». Así **AAPS** primero muestra una notificación en lugar de ejecutar de verdad una acción. Cuando estés seguro de que la notificación aparece en el momento y las condiciones correctas, puedes cambiar la regla de **Automatización** para sustituir la «Notificación» por una «Acción».

![Texto alternativo](../images/Automations/automation_alert_actions.png)

```{admonition} Important note
:class: note

¡Las **automatizaciones** siguen activas cuando el lazo está desactivado!
```


## Cuándo se comprueban las reglas

**AAPS** comprueba todas las reglas de **Automatización** cada vez que procesa un nuevo valor de glucosa, así que las reglas se evalúan al ritmo de tu MCG, también con la pantalla del teléfono apagada. Las reglas también se comprueban cuando el teléfono empieza a cargarse, cuando cambia la red o la ubicación, y cuando se conecta un dispositivo Bluetooth. Solo se hace una comprobación a la vez, así que una regla cuyas acciones tardan un poco (por ejemplo, una orden a la bomba) no se puede ejecutar dos veces.

## Límites de seguridad

Las **automatizaciones** tienen límites de seguridad:

* Un **Objetivo temporal** fijado por una **Automatización** tiene que estar entre 72 y 180 mg/dl (o entre 4 y 10 mmol/l).
* El **porcentaje del perfil** tiene que estar entre el 50 % y el 130 %.
* Hay un límite de 5 minutos entre ejecuciones de una **Automatización** (y también para la primera ejecución).

## Uso correcto de los valores negativos

```{admonition} Warning
:class: warning

Ten cuidado al elegir un valor negativo en una **Automatización**
```

Ten cuidado al elegir un «valor negativo» en la «Condición», por ejemplo con «es menor que», en las **automatizaciones**. Por ejemplo:

![Texto alternativo](../images/Automations/automation_comparison_operators.png)

**Ejemplo 1:** crear una condición **«es menor que»** «-0,1 mmol/l» (o «-2 mg/dl») hará lo siguiente:

Activa una **Automatización** para cualquier número **estrictamente menor que** -0,1 (-2). Esto incluye números como -0,2, -0,3, -0,4 (-4, -6, -8), etc. Recuerda que -0,1 (-2) **no está** incluido en esta condición. (La condición «es igual o menor que -0,1 mmol/l (-2 mg/dl)» _sí_ incluiría -0,1 mmol/l o -2 mg/dl).

**Ejemplo 2:** crear una condición «es mayor que» -0,1 mmol/l (-2 mg/dl) hará lo siguiente:

Activa una **Automatización** para cualquier número **mayor que** -0,1 mmol/l (-2 mg/dl). Esto incluye números como 0, 0,2, 0,4 mmol/l (0, 4, 8 mg/dl) y cualquier otro número positivo.

Es importante pensar bien qué quieres conseguir exactamente con tu **Automatización** al elegir estas condiciones y valores.

(automations-automation-triggers)=
## Activadores de la automatización

![Activadores de la automatización](../images/Automations/automation_triggers.png)

Desplázate hacia abajo para ver el resto de la lista:

![Activadores de la automatización (continuación)](../images/Automations/automation_trigger_picker_2.png)

Puedes elegir entre varios «activadores». Los activadores son las condiciones que se deben cumplir para que se ejecute la automatización. La lista de abajo no está completa:

**Activador:** unir condiciones

**Opciones:**

Se pueden unir varias condiciones con
* «Y»
* «O»
* «Xor (O exclusiva)» (significa que la acción o acciones se ejecutan si se cumple una, y solo una, de las condiciones)

**Activador:** hora frente a hora de repetición

**Opciones:**

* hora = evento de una sola vez
* hora de repetición = algo que ocurre con regularidad (p. ej., una vez a la semana, todos los días laborables, etc.)

**Activador:** ubicación

**Opciones:**

* en [Ajustes > Automatización](#preferences-maintenance-settings), puedes elegir el servicio de ubicación que necesitas.

**Activador:** servicio de ubicación

**Opciones:**

* Usar ubicación pasiva: **AAPS** solo obtiene la ubicación cuando otras apps la piden.
* Usar ubicación de red: ubicación de tu red Wi-Fi.
* Usar ubicación GPS (¡Atención! ¡Esto puede gastar mucha batería!)

**Activadores**: datos de la bomba y del sensor

* Activador Edad de la cánula: disponible para todas las bombas
* Activador Edad de la insulina: disponible para las bombas compatibles
* Activador Edad de la batería: disponible para las bombas compatibles
* Activador Edad del sensor: siempre disponible
* Activador Activación del POD: disponible para las bombas parche

Ten en cuenta que en todos los activadores de edad es poco probable que se cumpla la comparación «es igual a», así que en ese caso hacen falta dos activadores para crear un rango

* Activador Nivel de reservorio: disponible para todas las bombas. La comparación "NOT\_AVAILABLE" no funciona con este activador, porque el valor siempre está relleno en **AAPS**
* Activador Nivel de batería de la bomba: disponible para las bombas compatibles. La comparación "NOT\_AVAILABLE" no funciona con este activador, porque el valor siempre está relleno en **AAPS**

(automations-automation-action)=
## Acción

![Acciones de la automatización](../images/Automations/automation_actions.png)

Desplázate hacia abajo para ver el resto de la lista:

![Acciones de la automatización (continuación)](../images/Automations/automation_action_picker_2.png)

**Acciones:** iniciar **Objetivo temporal**

**Opciones:**

* La **glucosa** debe estar entre 72 mg/dl y 180 mg/dl (4 mmol/l y 10 mmol/l)
* El **TT** solo funciona si no hay un objetivo temporal anterior: **AAPS** lo añade automáticamente a la regla como una línea «**Precondiciones: El objetivo temporal no existe**»

**Acciones:** detener **Objetivo temporal**

**Opciones:**

ninguno

**Acciones:** **Porcentaje de perfil**

**Opciones:**

* El **perfil** debe estar entre el 50 % y el 130 %
* solo funciona si el porcentaje anterior es del 100 %

**Acciones:** **Cambiar suavizado**

**Opciones:**

* selecciona el [método de suavizado](../CompatibleCgms/SmoothingBloodGlucoseData.md) al que quieres cambiar
* solo se ejecuta si ese método de suavizado no está ya activo: **AAPS** lo añade automáticamente a la regla como una línea «**Precondiciones: El suavizado … no está activo**». Cuando el suavizado seleccionado ya está activo, la regla se salta sin avisar.
* Ejemplo: junto con el activador **Edad del sensor**, cambiar a **Suavizado promedio** durante el primer día de un sensor nuevo y volver después a **Sin suavizado**.

**Acciones:** **Nota** (en el grupo **Alertas** de la lista)

**Opciones:**

* selecciona el evento que quieres registrar: **Nota**, **Ejercicio**, **Pregunta**, **Aviso** o **Cambio de zona de la bomba**, y una nota opcional. El nombre de la acción cambia al evento que selecciones.
* **Duración**: se usa para **Nota**, **Ejercicio** y **Cambio de zona de la bomba**. **Pregunta** y **Aviso** no tienen duración: en su lugar registran tu glucosa actual.
* **Cambio de zona de la bomba** reinicia la edad de la cánula, como si hubieras registrado a mano un cambio de zona. Ejemplo: algunas bombas (como la Combo) registran solas el cambio de reservorio, pero no el cambio de zona. Si siempre cambias las dos cosas a la vez, una regla con **Edad de la insulina** menor de 1 hora y **Edad de la cánula** mayor de 24 horas puede registrar el cambio de zona por ti.

![Los eventos de la acción Nota](../images/Automations/automation_action_careportal_events.png) ![La acción Nota con Cambio de zona de la bomba](../images/Automations/automation_action_careportal_site_change.png)

**Acciones:** **Enviar SMS** (en el grupo **Alertas**)

**Opciones:**

* escribe el texto del mensaje. Se envía a todos los números de teléfono permitidos en los ajustes de [Comunicador por SMS](../RemoteFeatures/SMSCommands.md). El complemento Comunicador por SMS debe estar activado.

**Acciones:** **Cambiar perfil a** (en el grupo **Perfil**)

**Opciones:**

* selecciona el **perfil** que quieres activar. Se activa al 100 %, sin desplazamiento horario. Si este perfil ya está activo, la acción no hace nada.

**Acciones:** **Activar/desactivar SMB** (en el grupo **Lazo e insulina**)

**Opciones:**

* elige **ACTIVADO** o **DESACTIVADO**. Esto cambia el ajuste **Habilitar SMB** de OpenAPS SMB, igual que si lo hubieras cambiado en **Ajustes**, y se mantiene hasta que tú u otra regla lo vuelva a cambiar.

**Acciones:** **Perfil de Autotune** (en el grupo **Lazo e insulina**)

**Opciones:**

* selecciona el perfil que quieres ajustar y el número de días: consulta [Ejecutar Autotune con una regla de automatización](#autotune-run-autotune-with-an-automation-rule).

**Acciones:** **Parar procesamiento** (en el grupo **Lazo e insulina**)

**Opciones:**

* ninguno. Cuando se ejecuta una regla con esta acción, **AAPS** no comprueba las reglas que están debajo en la lista durante esa ejecución. Añádela a una regla que deba tener prioridad sobre las reglas de debajo (consulta [el orden de las automatizaciones](#Automations-the-order-of-the-automations-in-the-list-matters)).

**Acciones:** **Ejecutar escena**, **Activar escena**, **Desactivar escena** (en el grupo **Escenas**)

**Opciones:**

* selecciona la [escena](Scenes.md) que quieres ejecutar, activar o desactivar.

Después de añadir la «Acción», hay que cambiar los valores por defecto al número deseado: tócalos y ajústalos.

![Texto alternativo](../images/Automations/automation_action_temp_target_values.png)

(Automations-the-order-of-the-automations-in-the-list-matters)=
## El orden de las **automatizaciones** en la lista es importante
 **AAPS** ejecuta las reglas creadas por orden de preferencia, empezando por arriba de la lista de **Automatización**. Por ejemplo, si la **Automatización** «Bajo» es la **Automatización** más importante, por encima de todas las demás reglas, esta **Automatización** debe estar arriba del todo en la lista de **Automatización** del usuario, como se ve abajo:


![Texto alternativo](../images/Automations/automation_rule_list.png)

Para cambiar la prioridad de las reglas de **Automatización**, mantén pulsado el asa **=** a la derecha de la regla. Reordena las **automatizaciones** moviendo las reglas hacia arriba o hacia abajo.

![Texto alternativo](../images/Automations/automation_rule_reorder.png)

## Cómo borrar reglas de automatización

Para borrar una regla de **Automatización**, toca el icono de la papelera.

![Texto alternativo](../images/Automations/automation_rule_delete.png)

## Ejemplos de automatizaciones

Abajo hay ejemplos de **automatizaciones**. En los grupos de Facebook y en Discord encontrarás más debates sobre las **automatizaciones** y sobre cómo los usuarios han adaptado su **Automatización**. No copies los ejemplos de abajo si no entiendes bien cómo funcionará la **Automatización**.

(automations-low-glucose-temp-target)=
### Objetivo temporal de glucosa baja

Esta **Automatización** inicia un **Objetivo temporal** automático cuando la **glucosa** baja de un cierto umbral. Aquí, cuando la glucosa es menor que 70 mg/dl, se inicia un objetivo de 110 mg/dl durante 30 minutos:

![Texto alternativo](../images/Automations/automation_example_low_glucose_rule.png)

### Objetivo temporal para la hora del almuerzo (con «Ubicación»)

![Texto alternativo](../images/Automations/automation_example_lunch_rule.png)

Esta **Automatización** se creó para un usuario que almuerza en el trabajo a la misma hora todos los días laborables, pero solo se activa si el usuario está dentro de una «ubicación» definida.  Así, si un día el usuario no está en el trabajo, esta **Automatización** no se activará.

Esta **Automatización** fija un **Objetivo temporal** bajo (Comiendo Pronto) a las 13:00 para llevar la glucosa a 90 mg/dl (o 5 mmol/l) antes del almuerzo.

El «activador» de ubicación tiene un nombre, una posición (toca **Elegir en el mapa** o usa tu ubicación actual) y un radio en metros, y se activa cuando estás dentro (o fuera) de la zona:

![Texto alternativo](../images/Automations/automation_example_lunch_location_condition.png)

Por la unión con «Y», la **Automatización** solo se ejecuta durante la «hora elegida» y si el usuario está en la ubicación seleccionada.

La **Automatización** no se activará en esta ubicación a ninguna otra hora, ni a esta hora fuera del radio de 50 metros alrededor de la posición elegida.

### Automatización por ubicación con SSID Wi-Fi

Usar un SSID Wi-Fi es una buena opción para activar una **Automatización** cuando estás dentro del alcance de una red Wi-Fi concreta (comparado con el GPS): es bastante precisa, gasta menos batería y funciona en espacios cerrados donde el GPS y otros servicios de ubicación pueden no estar disponibles.

Aquí tienes otro ejemplo de un **Objetivo temporal** solo para días laborables, antes del desayuno (1).


La **Automatización** se activará a las 05:30 solo de lunes a viernes (2)  
y mientras estés conectado a la red Wi-Fi de casa (3).


Después fijará un **Objetivo temporal** de 75 mg/dl durante 30 minutos (4). Una ventaja de incluir la ubicación es que, por ejemplo, no se activará si el usuario está de vacaciones.

![Regla Wi-Fi: nombre de la tarea (1), condición de hora en días laborables (2) y condición de SSID Wi-Fi (3)](../images/Automations/automation_example_wifi_rule.png)

Desplázate hacia abajo para ver la acción: un **Objetivo temporal** de 75 mg/dl durante 30 minutos (4).

![Acción de la regla Wi-Fi: Iniciar objetivo temporal de 75 mg/dl durante 30 minutos (4)](../images/Automations/automation_example_wifi_action.png)

Esta es la captura de pantalla con los activadores de la **Automatización**:

1) Bajo el «Y» principal (deben cumplirse las dos condiciones para activarse) 1) Hora de Repetición = L,M,X,J,V A las 5:30  
1) SSID WiFi = My_Home_WiFi_Name

![Texto alternativo](../images/Automations/automation_example_wifi_condition.png)

(automating-preference-settings-export)=

## Automatizar la exportación de los ajustes

### Exportaciones automáticas: programadas (diarias)

Capturas de pantalla con los activadores de la automatización:

1) Condición: Hora de Repetición = L,M,X,J,V A las 8:00 1) Acción: Exportación de configuraciones (en «Texto en tratamientos» escribe «Diaria»)

![Exportaciones programadas](../images/Automations/automation_settings_export_daily.png)

Nota: la ejecución de la exportación se registra en el Portal de cuidados

### Exportaciones automáticas: Activación del POD (solo bombas parche)

Capturas de pantalla con los activadores de la automatización:

1) Condición: Activación del POD 1) Acción: Exportación de configuraciones (en «Texto en tratamientos» escribe «Activación del POD: exportación de configuraciones»)

![Exportación al activar el Pod](../images/Automations/automation_settings_export_pod_activation.png)

Nota: la ejecución de la exportación se registra en el Portal de cuidados. Nota: la automatización no se ejecutará **en absoluto** si antes no has hecho una exportación manual de los ajustes. Consulta [Ajustes → Mantenimiento](#preferences-maintenance-settings) para activar correctamente la exportación automática de los ajustes.


## Registro de la automatización

**AAPS** muestra un registro de los eventos más recientes de **Automatización** en la parte inferior de la pantalla **Automatización**, debajo de las reglas. Úsalo para comprobar que tus reglas se activaron cuando esperabas.

En el ejemplo de abajo, la regla **Objetivo temporal de glucosa baja** (1) (consulta [Objetivo temporal de glucosa baja](#automations-low-glucose-temp-target) arriba) está activada. El registro (2) muestra que a las 15:09 la glucosa bajó de 70 mg/dl y la regla se activó:
* la acción fue «Iniciar objetivo temporal: 110mg/dL@30 min»: un **Objetivo temporal** de 110 mg/dl durante 30 minutos;
* **OK** al final significa que la acción se ejecutó correctamente.

![Pantalla Automatización: una regla activada (1) y su entrada en el registro (2)](../images/Automations/automation_example_log.png)

(automations-troubleshooting)=

## Solucionando problemas

* Problema: __¿AAPS no ejecuta mis automatizaciones?__

Comprueba que la casilla a la izquierda del nombre de la **Automatización** está «marcada» para que la regla esté activada:

![Texto alternativo](../images/Automations/automation_rule_activated_deactivated.png)

* Problema: __Mis automatizaciones se ejecutan en el orden incorrecto.__

Comprueba el orden de prioridad de tus reglas, como se explicó arriba.

* Problema: __Una condición muestra «Disparador desconocido … - nunca se cumple».__

La regla contiene un activador que esta versión de **AAPS** no puede leer, por ejemplo después de volver a una versión anterior o de importar ajustes de una versión más nueva. Ese activador nunca se cumple, así que la regla no se ejecuta. Se guarda sin cambios, para que una versión más nueva todavía pueda usarlo. Edita la regla y sustituye el activador, o actualiza **AAPS**.

## Alternativas a las automatizaciones

Para usuarios avanzados, hay otras formas de automatizar tareas con IFTTT o con una app Android de terceros llamada Automate. 
