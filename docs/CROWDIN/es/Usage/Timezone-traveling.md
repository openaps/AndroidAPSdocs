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

AndroidAPS emitirá una alarma si el tiempo entre la bomba y el teléfono difiere mucho. En el caso del ajuste horario de DST, se haría en medio de la noche. Para evitar esto y disfrutar de su sueño, siga estos pasos:

1) Desactive el huso horario automático en su teléfono. 2) Busque un huso horario que tenga el tiempo de destino pero no utilice DST. Para el Tiempo Central Europeo (CET) esto podría ser "Brazzaville" (Kongo). Cambia la zona horaria de tu teléfono a Kongo. 3) En AndroidAPS refresque la bomba. 4) Revisa la ficha Tratamientos... Si ve los tratamientos duplicados:

* No presione "suprímase futuros tratamientos"
* Pulse "remove" en todos los tratamientos futuros y en los duplicados. Esto debe invalidar los tratamientos en lugar de eliminarlos para que ya no se tengan en cuenta para el IOB. 5) Si el estado no está claro, por favor desactive el lazo para por lo menos un DIA y Max-Carb-Time - para el que es más grande.

Un buen momento para hacer este interruptor sería con un IOB bajo. Por ejemplo, una hora antes de una comida.

## Accu-Chek Insight

* El cambio a DST se realiza automáticamente. No se requiere acción.

## Other pumps - new as of AAPS version 2.2

**¡Tienes que actualizar AAPS para usar esta función!**

* Para evitar las dificultades, el Lazo se desactivará durante 3 horas después de que el conmutador DST se desactive. Esto se hace por razones de seguridad (IOB demasiado alto debido a duplicados en bolo antes del cambio de DST).
* Recibirá una notificación en la pantalla principal 24 horas antes del cambio de DST que el lazo se inhabilitará temporalmente. Este mensaje aparecerá sin pitido, vibración o cualquier cosa.