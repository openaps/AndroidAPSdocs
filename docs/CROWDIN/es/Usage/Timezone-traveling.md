# Zona horaria viajando con bombas

## DanaR, Korean DanaR

No hay problema con cambiar el huso horario en el teléfono porque la bomba no utiliza el historial

## DanaRv2, DanaRS

Estas bombas necesitan un cuidado especial porque AndoridAPS está usando la historia de la bomba, pero los registros en la bomba no tienen marca de huso horario. **Eso significa que si se cambia el huso horario en el teléfono, los registros se leerán con un huso horario diferente y se duplicarán.**

Para evitar esto, hay dos posibilidades:

### Opción 1: Conservar la zona horaria original el perfil de tiempo

* Apague Automático de fecha y hora "en la configuración del teléfono (cambio manual de zona horaria).
* El teléfono debe mantener su tiempo estándar como en casa durante todo el período de viaje.
* Cambie el tiempo de su perfil de acuerdo a la diferencia horaria entre la hora de su casa y la hora de destino.
   
   * Pulsación larga en el nombre del perfil (en el medio de la sección superior de la pantalla)
   * Seleccione "Cambio de perfil"
   * Establezca la 'Diferencia de horas' según el destino.
   
   ![Cambio de perfil con cambio de tiempo](../images/ProfileSwitchTimeShift2.png)
   
   * p.e. Viena -> Nueva York: cambio de perfil +6 horas
   * p.e. Viena -> Sydney: cambio de perfil -8 horas

### Opción 2: Suprimir historial de bomba

* Desactiva 'Fecha y hora automática' en la configuración de tu teléfono (cambio de zona horaria manual)

Cuando salga del avión:

* apague la bomba
* cambiar huso horario por teléfono
* apagar teléfono, encender bomba
* borrar historial en la bomba
* cambiar hora en la bomba
* activar el teléfono
* deje que el teléfono se conecte a la bomba y se ajuste de tiempo

## Combo

## Insight

El controlador ajusta automáticamente el tiempo de la bomba a la hora del teléfono.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. Por lo tanto, el tiempo correcto se puede determinar en AAPS a pesar del cambio de tiempo.

Puede provocar imprecisiones en los TDD. Pero esto no debería ser un problema.

Por lo tanto, el usuario de Insight no tiene que preocuparse por los cambios de huso horario y los cambios de hora. Hay una excepción a esta regla: la bomba de Insight tiene una pequeña batería interna a la hora de encendido, etc. mientras estás cambiando la batería "real". If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skiped in calculation in AAPS as the correct time cannot be identified properly.

# Time adjustment daylight savings time (DST)

Dependiendo de la bomba y de la configuración de la CGM, los saltos en el tiempo pueden llevar a problemas. Con el Combo, por ejemplo, el historial de la bomba se vuelve a leer y se generan entradas duplicadas. Así que por favor, haga el ajuste mientras esté despierta y no durante la noche.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

## Accu-Check Combo

AndroidAPS emitirá una alarma si el tiempo entre la bomba y el teléfono difiere mucho. En el caso del ajuste horario de DST, se haría en medio de la noche. Para evitar esto y disfrutar de su sueño, siga estos pasos:

1) Desactive el huso horario automático en su teléfono. 2) Busque un huso horario que tenga el tiempo de destino pero no utilice DST. For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo. 3) In AndroidAPS refresh you pump. 4) Check the Treatments tab... If you see duplicate treatments:

* DON'T press "delete future treatments"
* Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore. 5) If the state is unclear - please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.

A good time to make this switch would be with low IOB. E.g. an hour before a meal.

## Accu-Chek Insight

* Change to DST is done automatically. No action required.

## Other pumps - new as of AAPS version 2.2

**You have to update AAPS to use this feature!**

* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a notification on the main screen 24 hours prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.