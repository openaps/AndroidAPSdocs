Automatización
**************************************************

Qué es la automatización
==================================================
Para los mismos sucesos frecuentes, es posible que siempre tenga que cambiar los mismos valores. Para evitar el trabajo extra, puede simplemente intentar automatizar el evento si puede especificarlo lo suficientemente bien y dejar que lo haga automáticamente. 

P.e. cuando su BG es demasiado bajo, puede decidir tener automáticamente un objetivo temporal alto. O si estás en tu centro de fitness, obtienes automáticamente un objetivo temporal. 

Antes de utilizar Automatización, debe tener confianza en los `objetivos temporales <./temptarget.html>` _ o en los conmutadores de perfil. 

Make sure you really understand how automation works before setting up your first simple rule. **Instead of action, let AAPS first display only a notification.** When you are sure automation is triggered at the right time, replace notification by real action.

.. imagen:: ../images/Automation_ConditionAction_RC3.png
  :alt: Condición de automatización + acción

Cómo se usa
==================================================
Para configurar una automatización, tiene que darle un título, seleccionar al menos una condición y una acción. 

Nota importante
--------------------------------------------------
**La automatización todavía está activa cuando se inhabilita el lazo.**

So make sure to deactivate automation rules during these occasions if neccessary. You can do so by unticking the box left of the name of your automation rule.

.. imagen:: ../images/Automation_ActivateDeactivate.png
  :alt: Activación y desactivación de la regla de automatización

General
--------------------------------------------------
Hay algunos límites:

* El valor de la glucosa tiene que estar entre 72 y 270 mg/dl ó 4 y 15 mmol/l.
* El porcentaje de perfil tiene que estar entre el 70% y el 130%.
* Hay un mínimo de 5 min. de límite de tiempo entre ejecuciones (y la primera ejecución).

**Por favor, tenga cuidado:**

* ** menos de -2 significa: -3 e inferiores (-4, -10, etc)**
* ** más de 2 significa: -1 y superiores (-1, 0, + 10, etc)**


Condición
--------------------------------------------------
Usted puede elegir entre varias condiciones. Aquí están algunos componentes explicadas, pero la mayoría de ellos deben ser fácil de entender y no todo se describe aquí:

* connect conditions: you can have several conditions and can link them with 

  * "Y"
  * "O"
  * "Exclusive or" (which means that if one - and only one of the - conditions applies, the action(s) will happen)
   
* Tiempo vs. hora de Repetición

  * hora = suceso de una sola vez
  * hora recurrente = algo que ocurre regulamente (por ejemplo. una vez a la semana, todos los días laborables, etc.)
   
* ubicación: en el constructor de configuración (Automatización), puede seleccionar el servicio de ubicación que desea utilizar:

  * Use passive location: AAPS only takes locations when other apps are requesting it
  * Usar la ubicación de la red: la ubicación de su Wifi
  * Usar localización GPS (Atención! ¡ Puede provocar una descarga excesiva de la batería!)
  
Acción
--------------------------------------------------
Puede elegir una o varias acciones: 

* iniciar objetivo temporal 

  * debe estar entre 72 mg/dl y 270 mg/dl (4 mmol/l y 15 mmol/l)
  * sólo funciona si no hay ningún valor temporal anterior
   
* detener objetivo temporal
* notificación
* porcentaje de perfil

  * debe estar entre el 70% y el 130% 
  * sólo funciona si el porcentaje anterior es 100%

Después de añadir la acción, **no olvide cambiar los valores por defecto** a lo que necesita pulsando en los valores predeterminados.
 
.. imagen:: ../images/Automation_Default_V2_5.png
  :alt: Valor por omisión de automatización frente a. valores del usuario

Sort automation rules
-----
To sort automation rules click and hold the four-lines-button on the right side of the screen and move up or down.

.. image:: ../images/Automation_Sort.png
  :alt: Sort automation rules
  
Delete automation rules
-----
To delete an automation rule just swipe it left or right.

.. image:: ../images/Automation_Delete.png
  :alt: Delete automation rule

Good practice & caveats
==================================================
* When you start using automation or create a new rule, first add a notification only until you are sure the rule is working well.
* Cuál es el resultado de las reglas.
* Don't try to make conditions too easy (i.e.: IF bg > 80 mg/dl AND bg < 180 mg/dl)

  **Doubly important if action is a profile switch!**
 
* Try to use Temp Targets instead of Profile Switches. Temp Targets do not reset `Autosens <../Usage/Open-APS-features.html#autosens>`_ back to 0.
* Make sure Profile switches are made sparingly and preferably at a last resort.

  * Profile switching renders `Autosens <../Usage/Open-APS-features.html#autosens>`_ useless for a min of 6 hours.

* Profile switching will not reset the profile back to your base profile

  * You have to make another rule to set this back or do it manually!
  * Increased risk of hypoglycemia if profile switch does not expire or reset back to base profile.

Ejemplos
==================================================
These are just setup examples, no advises. Don't reproduce them without being aware what you are actually doing or why you need them.

* Conmutar perfiles para sus actividades diarias (como escuela, gimnasio, fin de semana, día laboral...) usando geolocalización, wifi, tiempo, etc.
* Setting temp target for activities based on time, location, connection to a bluetooth device...
* Establecer pronto objetivos temporales de comida basados en el tiempo, la ubicación...

Objetivo temporal de glucosa baja
--------------------------------------------------
.. imagen:: ../images/Automation2.png
  :alt: Automation2

This is made by someone who wants to get a hypo temp target automatically when having low glucose.

Objetivo temporal para hora de almuerzo
--------------------------------------------------
.. imagen:: ../images/Automation3.png
  :alt: Automation3
  
This example is made by someone who has lunch at work at the same time every day during the week. If he or she stays at a certain time in his or her lunch location, automation will set a low temp target (eating soon) while waiting for the lunch. Because of the "And" connection, it only happens during the chosen time and if he or she is at the chosen location. So it does not work on any other time at this location or on this time when the person stays at home. 

Incorrect use of automation
--------------------------------------------------
Please be aware to use automation incorrectly. Esto podría conducir a dificultades e incluso a un peligro para su salud. Por ejemplo, los ejemplos de uso incorrecto son:

* Tratar de alterar temporalmente el algoritmo en lugar de sólo ayuda (por ejemplo. cambiando el perfil en lugar de ajustar basal, IC, etc.)
* Estableciendo perfil para compensar a los alimentos
* Establecimiento de un perfil sin duración
* Creación de reglas de un sentido (por ejemplo. hacer algo, pero no deshacerlo con otra regla)
* Creando reglas a largo plazo

Alternativas
==================================================

For advanced users, there are other posibilities to automate tasks using IFTTT or a third party Android app called Automate. Algunos ejemplos se pueden encontrar `aquí <./automationwithapp.html>`_.
