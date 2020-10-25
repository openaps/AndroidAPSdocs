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
* Probably not an option if using [patched LibreLink app](../Hardware/Libre2#time-zone-travelling) as automatic time zone must be set to start a new Libre 2 sensor.

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

## Insight

El controlador ajusta automáticamente el tiempo de la bomba a la hora del teléfono.

El Insight también registra las entradas de historial en las que se modificó el tiempo y desde cual (antigua) hora a la que es (nueva) hora. Por lo tanto, el tiempo correcto se puede determinar en AAPS a pesar del cambio de tiempo.

Puede provocar imprecisiones en los TDD. Pero esto no debería ser un problema.

Por lo tanto, el usuario de Insight no tiene que preocuparse por los cambios de huso horario y los cambios de hora. Hay una excepción a esta regla: la bomba de Insight tiene una pequeña batería interna a la hora de encendido, etc. mientras estás cambiando la batería "real". Si el cambio de la batería tarda demasiado tiempo, esta batería interna se puede quedar sin energía, se restablecerá el reloj y se le solicitará que introduzca una nueva hora y fecha después de insertar una nueva batería. En este caso todas las entradas antes de que el cambio de batería se saltean en el cálculo en AAPS porque la hora correcta no puede ser identificado correctamente.

# Ajuste horario de verano (DST)

Dependiendo de la bomba y de la configuración de la MCG, los saltos en el tiempo pueden llevar a problemas. Con el Combo, por ejemplo, el historial de la bomba se vuelve a leer y se generan entradas duplicadas. Así que por favor, haga el ajuste mientras esté despierta y no durante la noche.

Si usted se da bolos con la calculadora por favor no use COB y IOB a menos que esté seguro de que son absolutamente correctos - es mejor que no los use durante un par de horas después del interruptor DST.

## Accu-Check Combo

AndroidAPS emitirá una alarma si el tiempo entre la bomba y el teléfono difiere mucho. En el caso del ajuste horario de DST, se haría en medio de la noche. To prevent this and enjoy your sleep instead follow these steps so that you can force the time change at a time convient to yourself:

### Actions to take before the clock change

1. Switch OFF any setting that automatically sets the timezone, so you can force the time change when you want to. How you can do this will depend on your smartphone and Android version.
   
   * Some have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the timezone (which you must turn OFF).
   * Unfortunately some Android versions have a single switch to enable automatic setting of both the time and the timezone. You’ll have to turn this off for now.

2. Find a time zone that has the same time as your current location but doesn't use DST.
   
   * A list of these countries is available [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo.

3. In AndroidAPS refresh your pump.

4. Check the Treatments tab... If you see duplicate any treatments:
   
   * DON'T press "delete treatments in the future"
   * Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

### Actions to take after the clock change

A good time to make this switch would be with low IOB. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your COB and IOB should both be close to zero.)

1. Change the Android timezone back to your current location and re-enable automatic timezone.
2. AndroidAPS will soon start alerting you that the Combo’s clock doesn’t match. So update the pump’s clock manually via the pump’s screen and buttons.
3. On the AndroidAPS “Combo” screen, press Refresh.
4. Then go to the Treatments screen, and look for any events in the future. There shouldn’t be many.
   
   * DON'T press "delete treatments in the future"
   * Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

6. Continue as normal.

## Accu-Chek Insight

* Change to DST is done automatically. No action required.

## Other pumps

* This feature is available since AndroidAPS version 2.2.
* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a notification on the main screen prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.