# Bomba Accu-Chek Insight

**Este software es parte de una solución de páncreas artificial de "hágalo usted mismo" y no es un producto, pero requiere que lea, aprenda y entienda el sistema, incluyendo cómo utilizarlo. No es algo que haga todo el manejo de su diabetes, pero le permite mejorar su diabetes y su calidad de vida si está dispuesto a dedicar el tiempo necesario. No te precipites, date tiempo para aprender. Solo Usted es responsable de lo que hace con él.**

* * *

## ***WARNING:** If you have been using the Insight with **SightRemote** in the past, please **update to the newest AAPS version** and **uninstall SightRemote**.*

## Requisitos hardware y software

* Una bomba de insulina Roche Accu-Chek Combo (con cualquier firmware, todos funcionan)

Nota: AAPS escribirá los datos siempre en **primer perfil de tasa basal en la bomba**.

* An Android phone (Basically every Android version would work with Insight, but check on the [Module](../Getting-Started/ComponentOverview) page which Android version is required to run AAPS.)
* The AAPS app installed on your phone

## Configuración

* La bomba Insight sólo debe estar conectado a un dispositivo a la vez. Si ha utilizado previamente el mando de la Insight (medidor), debe olvidar el medidor de la lista de dispositivos emparejados de la bomba: Menú > ajustes > Ajustes Comunicación > Olvidar dispositivo
    
    ![Pantallazo de quitar el medidor Insight](../images/Insight_RemoveMeter.png)

* In [Config builder > Pump](../SettingUpAaps/ConfigBuilder.md), select Accu-Chek Insight.
    
    ![Pantallazo de Configuración de Insight](../images/Insight_ConfigBuilder_AAPS3_0.jpg)

* Toque el icono de, engranaje para abrir la configuración de la bomba.

* En configuración, pulsa en el botón 'Insight emparejamiento" en la parte superior de la pantalla. Debería ver una lista de todos los dispositivos Bluetooth cercanos (por debajo de la izquierda).
* En la bomba Insight, ir a Menu > Ajustes > Comunicación > Añadir Dispositivo. La bomba mostrará la siguiente pantalla (abajo a la derecha) mostrando el número de serie de la bomba.
    
    ![Pantallazo de emparejamiento 1 de Insight](../images/Insight_Pairing1.png)

* Volviendo a tu teléfono, toca el número de serie de la bomba en la lista de dispositivos Bluetooth. Entonces toca "Emparejar" para confirmar.
    
    ![Pantalla de emparejamiento 2 de Insight](../images/Insight_Pairing2.png)

* A continuación, la bomba y el teléfono mostrarán un código. Compruebe que los códigos sean los mismos en ambos dispositivos y confirme tanto en la bomba como en el teléfono.
    
    ![Pantalla de emparejamiento 3 de Insight](../images/Insight_Pairing3.png)

* Correcto! Pat yourself on the back for successfully pairing your pump with AAPS.
    
    ![Pantalla de emparejamiento 4 de Insight](../images/Insight_Pairing4.png)

* To check all is well, go back to Config builder in AAPS and tap on the cog-wheel by the Insight Pump to get into Insight settings, then tap on Insight Pairing and you will see some information about the pump:
    
    ![Pantalla de información de emparejamiento Insight](../images/Insight_PairingInformation.png)

Note: There will be no permanent connection between pump and phone. Sólo se establecerá una conexión si es necesario (por ejemplo, fijar la tasa basal temporal, dar bolo, leer la historia de la bomba...). De lo contrario, la batería del teléfono y de la bomba se agotarían demasiado rápido.

(Accu-Chek-Insight-Pump-settings-in-aaps)=

## Valores en AAPS

**Note : It is now possible (only with AAPS v2.7.0 and above) to use ‘Always use basal absolute values’ if you want to use Autotune with Insight pump, even if 'sync is enabled' with Nightscout.** (In AAPS go to [Preferences > NSClient > Advanced Settings](#Preferences-advanced-settings-nsclient)).

![Screenshot of Insight Settings](../images/Insight_settings.png)

In the Insight settings in AAPS you can enable the following options:

* "Registrar cambios en el depósito": Esto registrará automáticamente un cambio de cartucho de insulina cuando se ejecute el programa de "llenar la cánula" en la bomba.

* "Log tube changes": This adds a note to the AAPS database when you run the "tube filling" program on the pump.

* "Log site change": This adds a note to the AAPS database when you run the "cannula filling" program on the pump. **Nota: un cambio de cánula también restablece el autosens.**

* "Registro de cambios de batería": Se registra el cambio de la batería cuando usted pone una batería nueva en la bomba.

* "Log operating mode changes": This inserts a note in the AAPS database whenever you start, stop or pause the pump.

* "Log alerts": This records a note in the AAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).

* "Habilitar emulación TBR": La bomba Insight sólo puede realizar las tasas basales temporales (TBRs) hasta el 250%. Para evitar esta restricción, La emulación TBR dará instrucciones a la bomba para que proporcione un bolus extendido para la insulina extra si solicita un TBR de más del 250%.
    
    **Nota: Sólo utilice un bolo extendido al mismo tiempo, ya que múltiples bolos extendidos pueden causar errores.**

* "Disable vibrations on manual bolus delivery": This disables the Insight pump's vibrations when delivering a manual bolus (or extended bolus). This setting is available only with the latest version of Insight firmware (3.x).

* "Disable vibrations on automated bolus delivery": This disables the Insight pump's vibrations when delivering an automatic bolus (SMB or Temp basal with TBR emulation). This setting is available only with the latest version of Insight firmware (3.x).

* "Recovery duration": This defines how long AAPS will wait before trying again after a failed connection attempt. Puede elegir entre 0 y 20 segundos. Si experimenta problemas de conexión, elija un tiempo de espera más largo.   
      
    Example for min. tiempo de recuperación = 5 y max. tiempo de recuperación = 20   
      
    no conexión-> espere **5 ** seg.   
    reintento-> sin conexión-> espera **6 ** seg.   
    reintento-> sin conexión-> espera **7 ** seg.   
    reintento-> sin conexión-> espera **8 ** seg.   
    ...   
    retry -> no connection -> wait **20** sec.   
    retry -> no connection -> wait **20** sec.   
    ...

* "Disconnect delay": This defines how long (in seconds) AAPS will wait to disconnect from the pump after an operation is finished. El valor predeterminado es de 5 segundos.

For periods when pump was stopped AAPS will log a temp. basal rate with 0%.

In AAPS, the Accu-Chek Insight tab shows the current status of the pump and has two buttons:

* "Actualizar": Refresca el estado de la bomba
* "Activar/Desactivar TBR notificación": Una bomba Insight estándar emite una alarma cuando una basal temporal termina. Este botón le permite habilitar o inhabilitar esta alarma sin necesidad de software de configuración.
    
    ![Pantalla de estados de Insight](../images/Insight_Status2.png)

## Configuración de la bomba

Configure alarms in the pump as follows:

* Menú > Ajustes > ajustes del equipo > configuración de Modo > Silencio > Señal > Sonido
* Menú > Ajustes > ajustes del equipo > configuración de Modo >Silencio > Volumen > 0 (quitar todas las barras)
* Menú > Modos > modo de Señal > Silencio

This will silence all alarms from the pump, allowing AAPS to decide if an alarm is relevant to you. If AAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

(Accu-Chek-Insight-Pump-vibration)=

### Vibración

Depending on the firmware version of your pump, the Insight will vibrate briefly every time a bolus is delivered (for example, when AAPS issues an SMB or TBR emulation delivers an extended bolus).

* Firmware 1.x: Sin vibración por diseño.
* Firmware 2.x: La vibración no se puede inhabilitar.
* Firmware 3.x: AAPS delivers bolus silently. (minimum [version 2.6.1.4](#Releasenotes-version-2-6-1-4))

Firmware version can be found in the menu.

## Reemplazo de la batería

Battery life for Insight when looping range from 10 to 14 days, max. 20 days. The user reporting this is using Energizer lithium batteries.

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

(Accu-Chek-Insight-Pump-insight-specific-errors)=

## Errores específicos de Insight

### Bolo extendido

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Tiempo de espera agotado (Time out)

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Cruzando zonas horarias con la bomba Insight

For information on traveling across time zones see section [Timezone traveling with pumps](#timezone-traveling-insight).