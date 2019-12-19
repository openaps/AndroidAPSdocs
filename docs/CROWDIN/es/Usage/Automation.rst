Automatización
**************************************************

Qué es la automatización
==================================================
For the same frequent events, you might always have to change the same settings. To avoid the extra work, you can just try to automate the event if you can specify it well enough and let it do it for you automatically. P.e. when your BG is too low, you can decide to have automatically a high temp target. Or if you are at your fitness center, you get automatically a temp target. Before using Automation, you should be confident with manual `temp targets <./temptarget.html>`_ or profile switches. 

.. imagen:: ../images/Automation_ConditionAction_RC3.png
  :alt: Condición de automatización + acción

Cómo se usa
==================================================
Para configurar una automatización, tiene que darle un título, seleccionar al menos una condición y una acción. 

Nota importante
--------------------------------------------------
**La automatización todavía está activa cuando se inhabilita el lazo.**

Por lo tanto, asegúrese de desactivar las reglas de automatización durante estas ocaciones si es necesario. Puede hacerlo desmarcando la casilla izquierda del nombre de su regla de automatización.

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

* Condiciones de conexión: puede tener varias condiciones y puede conectarlas con 

   * "Y"
   * "O"
   * "O exclusivo" (que significa que si se aplica una (y sólo una de las condiciones), se producirá la acción)
   
* Tiempo vs. hora de Repetición

   * hora = suceso de una sola vez
   * hora recurrente = algo que ocurre regulamente (por ejemplo. once a week, every working day etc.)
   
* location: in the config builder (Automation), you can select which location service you want to use:

  * Use passive location: AAPS only takes locations if other apps are requesting it
  * Use network location: Location of your Wifi
  * Use GPS location (Attention! May cause excessive battery drain!)
  
Action
--------------------------------------------------
You can choose one or more actions: 

* start temp target 

   * must be between 72 mg/dl and 270 mg/dl (4 mmol/l and 15 mmol/l)
   * works only if there is no previous temp target
   
* stop temp target
* notificación
* porcentaje de perfil

   * debe estar entre el 70% y el 130% 
   * sólo funciona si el porcentaje anterior es 100%

After adding your action, **don't forget to change the default values** to what you need by clicking in the default values.
 
.. imagen:: ../images/Automation_Default_V2_5.png
  :alt: Valor por omisión de automatización frente a. valores del usuario

Buenas prácticas
==================================================
* When you start using Automation or create a new rule add a notification until you are sure the rule is working well.
* Cuál es el resultado de las reglas.

Ejemplos
==================================================
Se trata simplemente de ejemplos y no de consejos. No los reproduzca sin ser consciente de lo que está haciendo realmente o por qué los necesita. Vea a continuación dos ejemplos con capturas de pantalla.

* Conmutar perfiles para sus actividades diarias (como escuela, gimnasio, fin de semana, día laboral...) usando geolocalización, wifi, tiempo, etc.
* Estableciendo un objetivo temporal para las actividades basadas en el tiempo, la ubicación...
* Establecer pronto objetivos temporales de comida basados en el tiempo, la ubicación...

Objetivo temporal de glucosa baja
--------------------------------------------------
.. imagen:: ../images/Automation2.png
  :alt: Automation2

Esto es realizado por una persona que quiere obtener un objetivo temporal para el caso de hipoglucemia cuando se tiene una hipoglucemia.

Objetivo temporal para hora de almuerzo
--------------------------------------------------
.. imagen:: ../images/Automation3.png
  :alt: Automation3
  
These example is made by a person, that has lunch at the same time during the week. If it is at a certain time at its lunch location, it gets a lower temp target (eating soon) while waiting for the lunch. Because of the "And" connection, it only happens during the certain time and the  location. So it does not work at any other time at this location or at this time when the persons stays home or works longer. 

Incorrect use of Automation
--------------------------------------------------
As every system Automation can be used incorrectly. This might lead to difficulties and even danger for your health. Examples for incorrect use are for instance:

* Trying to override algorithm at all instead of help only (i.e. by changing profile instead of tunning basal, IC etc.)
* Setting profile to compensate food
* Setting profile without duration
* Creating one way rules (i.e. do something but don't undo it by another rule)
* Creating long term rules

Alternatives
==================================================

For advanced users there are other posibilities to automate tasks using IFTTT or a third party Android app called Automate. Some examples can be found `here <./automationwithapp.html>`_.
