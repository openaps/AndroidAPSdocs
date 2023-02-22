# Zona horaria viajando con bombas

## DanaR, Korean DanaR

No hay problema con cambiar el huso horario en el teléfono porque la bomba no utiliza el historial

(Timezone-traveling-danarv2-danars)=

## DanaRv2, DanaRS

These pumps need a special care because AndroidAPS is using history from the pump but the records in pump don't have timezone stamp. **That means if you simple change timezone in phone, records will be read with different timezone and will be doubled.**

To avoid this there are two possibilities:

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
* Probably not an option if using [patched LibreLink app](Libre2-time-zone-travelling) as automatic time zone must be set to start a new Libre 2 sensor.

### Opción 2: Suprimir historial de bomba

* Desactiva 'Fecha y hora automática' en la configuración de tu teléfono (cambio de zona horaria manual)

When get out of plane:

* apague la bomba
* cambiar huso horario por teléfono
* apagar teléfono, encender bomba
* borrar historial en la bomba
* cambiar hora en la bomba
* activar el teléfono
* deje que el teléfono se conecte a la bomba y se ajuste de tiempo

(Timezone-traveling-insight)=

## Insight

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in AAPS despite the time change.

It may cause inaccuracies in the TDDs. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. while you are changing the "real" battery. If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skipped in calculation in AAPS as the correct time cannot be identified properly.

## Accu-Check Combo

The [new Combo driver](../Configuration/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. The Combo cannot store timezones, only local time, which is precisely what the new driver programs into the pump. In addition, it stores the timezone in the local AndroidAPS preferences to be able to convert the pump's localtime to a full timestamp that has a timezone offset. The user does not have to do anything; if the time on the Combo deviates too much from the phone's current time, the pump's time is automatically adjusted.

Note that this takes some time, however, since it can only be done in the remote-terminal mode, which is generally slow. This is a Combo limitation that cannot be overcome.

The old, Ruffy-based driver does not adjust the time automatically. The user has to do that manually. See below for the steps necessary to do that safely in case the timezone / daylight savings is the reason for the change.

(Timezone-traveling-time-adjustment-daylight-savings-time-dst)=

# Ajuste horario de verano (DST)

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

(Timezone-traveling-accu-chek-combo)=

## Accu-Check Combo

**NOTE**: As mentioned above, this secton is only valid for the old, Ruffy-based driver. The new driver adjusts date and time and DST automatically.

AndroidAPS will issue an alarm if the time between pump and phone differs too much. In case of DST time adjustment, this would be in the middle of the night. To prevent this and enjoy your sleep instead, follow these steps so that you can force the time change at a time convenient to yourself:

### Actions to take before the clock change

1. Switch OFF any setting that automatically sets the timezone, so you can force the time change when you want to. How you can do this will depend on your smartphone and Android version.
   
   * Some have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the timezone (which you must turn OFF).
   * Unfortunately some Android versions have a single switch to enable automatic setting of both the time and the timezone. You’ll have to turn this off for now.

2. Find a time zone that has the same time as your current location but doesn't use DST.
   
   * A list of these countries is available [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Para el Tiempo Central Europeo (CET) esto podría ser "Brazzaville" (Kongo). Cambia la zona horaria de tu teléfono a Kongo.

3. In AndroidAPS refresh your pump.

4. Check the Treatments tab... If you see any duplicate treatments:
   
   * DON'T press "delete treatments in the future"
   * Pulse "remove" en todos los tratamientos futuros y en los duplicados. Esto debe invalidar los tratamientos en lugar de eliminarlos para que ya no se tengan en cuenta para el IOB.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

### Actions to take after the clock change

A good time to make this switch would be with low IOB. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your COB and IOB should both be close to zero.)

1. Change the Android timezone back to your current location and re-enable automatic timezone.
2. AndroidAPS will soon start alerting you that the Combo’s clock doesn’t match. So update the pump’s clock manually via the pump’s screen and buttons.
3. On the AndroidAPS “Combo” screen, press Refresh.
4. Then go to the Treatments screen, and look for any events in the future. There shouldn’t be many.
   
   * DON'T press "delete treatments in the future"
   * Pulse "remove" en todos los tratamientos futuros y en los duplicados. Esto debe invalidar los tratamientos en lugar de eliminarlos para que ya no se tengan en cuenta para el IOB.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

6. Continue as normal.

## Accu-Chek Insight

* El cambio a DST se realiza automáticamente. No se requiere acción.

## Other pumps

* This feature is available since AndroidAPS version 2.2.
* Para evitar las dificultades, el Lazo se desactivará durante 3 horas después de que el conmutador DST se desactive. Esto se hace por razones de seguridad (IOB demasiado alto debido a duplicados en bolo antes del cambio de DST).
* You will receive a notification on the main screen prior to DST change that loop will be disabled temporarily. Este mensaje aparecerá sin pitido, vibración o cualquier cosa.