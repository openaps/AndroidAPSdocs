Automatización
**************************************************

Qué es la automatización
==================================================
Para los mismos sucesos frecuentes, es posible que siempre tenga que cambiar los mismos valores. To avoid the extra work, you can just try to automate the event if you can specify it well enough and let it do it for you automatically. P.e. cuando su BG es demasiado bajo, puede decidir tener automáticamente un objetivo temporal alto. O si estás en tu centro de fitness, obtienes automáticamente un objetivo temporal. Before using Automation, you should be confident with manual `temp targets <./temptarget.html>`_ or profile switches. 

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
   * hora recurrente = algo que ocurre regulamente (por ejemplo. una vez a la semana, todos los días laborables, etc.)
   
* ubicación: en el constructor de configuración (Automatización), puede seleccionar el servicio de ubicación que desea utilizar:

  * Usar ubicación pasiva: AAPS sólo toma ubicaciones si otras aplicaciones lo están solicitando
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
  
These example is made by a person, that has lunch at the same time during the week. Si se encuentra en un momento determinado en su lugar de almuerzo, obtiene un objetivo temporal más bajo (comer pronto) mientras espera a la comida. Debido a la conexión "And", sólo ocurre durante el tiempo y la ubicación. Así que no funciona en ningún otro momento en este lugar o en este momento cuando las personas se quedan en casa o trabajan más tiempo. 

Uso incorrecto de la automatización
--------------------------------------------------
Como cualquier Automatización de sistema se puede utilizar de forma incorrecta. Esto podría conducir a dificultades e incluso a un peligro para su salud. Por ejemplo, los ejemplos de uso incorrecto son:

* Tratar de alterar temporalmente el algoritmo en lugar de sólo ayuda (por ejemplo. cambiando el perfil en lugar de ajustar basal, IC, etc.)
* Estableciendo perfil para compensar a los alimentos
* Establecimiento de un perfil sin duración
* Creación de reglas de un sentido (por ejemplo. hacer algo, pero no deshacerlo con otra regla)
* Creando reglas a largo plazo

Alternativas
==================================================

Para los usuarios avanzados hay otras posibilidades para automatizar las tareas usando IFTTT o una aplicación de Android llamada Automate. Algunos ejemplos se pueden encontrar `aquí <./automationwithapp.html>`_.
