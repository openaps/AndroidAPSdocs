# Bomba Accu-Chek Insight

**Este software es parte de una solución de páncreas artificial de "hágalo usted mismo" y no es un producto, pero requiere que lea, aprenda y entienda el sistema, incluyendo cómo utilizarlo. No es algo que haga todo el manejo de su diabetes, pero le permite mejorar su diabetes y su calidad de vida si está dispuesto a dedicar el tiempo necesario. No te precipites, date tiempo para aprender. Solo Usted es responsable de lo que hace con él.**

* * *

## ***AVISO: ** Si ha estado utilizando la bomba con **SightRemote ** en el pasado, por favor, **actualice a la versión más reciente de AAPS ** y **desinstale SightRemote **.*

## Requisitos hardware y software

* Una bomba de insulina Roche Accu-Chek Combo (con cualquier firmware, todos funcionan)

Nota: AAPS escribirá los datos siempre en **primer perfil de tasa basal en la bomba**.

* Un teléfono Android (cualquier versión de Android funcionaría con Insight, pero compruebe en la página [ Módulo ](../Module/module#phone) qué versión de Android es necesaria para ejecutar AndroidAPS.)
* La aplicación AndroidAPS instalada en el teléfono

## Configuración

* La bomba Insight sólo debe estar conectado a un dispositivo a la vez. Si ha utilizado previamente el mando de la Insight (medidor), debe olvidar el medidor de la lista de dispositivos emparejados de la bomba: Menú > ajustes > Ajustes Comunicación > Olvidar dispositivo
    
    ![Pantallazo de quitar el medidor Insight](../images/Insight_RemoveMeter.png)

* En [Config Builder ](../Configuration/Config-Builder) de la aplicación AndroidAPS, seleccione Accu-Chek Insight en la sección de la bomba
    
    ![Pantallazo de Configuración de Insight](../images/Insight_ConfigBuilder.png)

* Toque el icono de, engranaje para abrir la configuración de la bomba.

* En configuración, pulsa en el botón 'Insight emparejamiento" en la parte superior de la pantalla. Debería ver una lista de todos los dispositivos Bluetooth cercanos (por debajo de la izquierda).
* En la bomba Insight, ir a Menu > Ajustes > Comunicación > Añadir Dispositivo. La bomba mostrará la siguiente pantalla (abajo a la derecha) mostrando el número de serie de la bomba.
    
    ![Pantallazo de emparejamiento 1 de Insight](../images/Insight_Pairing1.png)

* Volviendo a tu teléfono, toca el número de serie de la bomba en la lista de dispositivos Bluetooth. Entonces toca "Emparejar" para confirmar.
    
    ![Pantalla de emparejamiento 2 de Insight](../images/Insight_Pairing2.png)

* A continuación, la bomba y el teléfono mostrarán un código. Compruebe que los códigos sean los mismos en ambos dispositivos y confirme tanto en la bomba como en el teléfono.
    
    ![Pantalla de emparejamiento 3 de Insight](../images/Insight_Pairing3.png)

* Correcto! Una palmadita en la espalda por el éxito en la vinculación de la bomba con AndroidAPS.
    
    ![Pantalla de emparejamiento 4 de Insight](../images/Insight_Pairing4.png)

* Para comprobar todo está bien, vuelve a Config builder en AndroidAPS y pulsa sobre el engranaje de la bomba Insight para entrar en la configuración Insight, luego pulsa en el emparejamiento Insight y verás alguna información sobre la bomba:
    
    ![Pantalla de información de emparejamiento Insight](../images/Insight_PairingInformation.png)

Nota: No habrá una conexión permanente entre la bomba y el teléfono. Sólo se establecerá una conexión si es necesario (por ejemplo, fijar la tasa basal temporal, dar bolo, leer la historia de la bomba...). De lo contrario, la batería del teléfono y de la bomba se agotarían demasiado rápido.

## Valores en AAPS

![Screenshot of Insight Settings](../images/Insight_settings.png)

In the Insight settings in AndroidAPS you can enable the following options:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.

* "Log tube changes": This adds a note to the AndroidAPS database when you run the "tube filling" program on the pump.

* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump. **Note: A site change also resets Autosens.**

* "Log battery changes": This records a battery change when you put a new battery in the pump.

* "Log operating mode changes": This inserts a note in the AndroidAPS database whenever you start, stop or pause the pump.

* "Log alerts": This records a note in the AndroidAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).

* "Habilitar emulación TBR": La bomba Insight sólo puede realizar las tasas basales temporales (TBRs) hasta el 250%. Para evitar esta restricción, La emulación TBR dará instrucciones a la bomba para que proporcione un bolus extendido para la insulina extra si solicita un TBR de más del 250%.
    
    **Nota: Sólo utilice un bolo extendido al mismo tiempo, ya que múltiples bolos extendidos pueden causar errores.**

* "Disable vibrations on manual bolus delivery": This disables the Insight pump's vibrations when delivering a manual bolus (or extended bolus). This setting is available only with the latest version of Insight firmware (3.x).

* "Disable vibrations on automated bolus delivery": This disables the Insight pump's vibrations when delivering an automatic bolus (SMB or Temp basal with TBR emulation). This setting is available only with the latest version of Insight firmware (3.x).

* "Recovery duration": This defines how long AndroidAPS will wait before trying again after a failed connection attempt. You can choose from 0 to 20 seconds. If you experience connection problems, choose a longer wait time.   
      
    Example for min. recovery duration = 5 and max. recovery duration = 20   
      
    no connection -> wait **5** sec.   
    retry -> no connection -> wait **6** sec.   
    retry -> no connection -> wait **7** sec.   
    retry -> no connection -> wait **8** sec.   
    ...   
    retry -> no connection -> wait **20** sec.   
    retry -> no connection -> wait **20** sec.   
    ...

* "Disconnect delay": This defines how long (in seconds) AndroidAPS will wait to disconnect from the pump after an operation is finished. Default value is 5 seconds.

For periods when pump was stopped AAPS will log a temp. basal rate with 0%.

In AndroidAPS, the Accu-Chek Insight tab shows the current status of the pump and has two buttons:

* "Actualizar": Refresca el estado de la bomba
* "Activar/Desactivar TBR notificación": Una bomba Insight estándar emite una alarma cuando una basal temporal termina. Este botón le permite habilitar o inhabilitar esta alarma sin necesidad de software de configuración.
    
    ![Pantalla de estados de Insight](../images/Insight_Status2.png)

## Configuración de la bomba

Configure alarms in the pump as follows:

* Menú > Ajustes > ajustes del equipo > configuración de Modo > Silencio > Señal > Sonido
* Menú > Ajustes > ajustes del equipo > configuración de Modo >Silencio > Volumen > 0 (quitar todas las barras)
* Menú > Modos > modo de Señal > Silencio

This will silence all alarms from the pump, allowing AndroidAPS to decide if an alarm is relevant to you. If AndroidAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

### Vibración

Depending on the firmware version of your pump, the Insight will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus).

* Firmware 1.x: Sin vibración por diseño.
* Firmware 2.x: La vibración no se puede inhabilitar.
* Firmware 3.x: AndroidAPS libera en forma silenciosa. (mínimo [ versión 2.6.1.4 ](../Installing-AndroidAPS/Releasenotes#version-2-6-1-4))

Firmware version can be found in the menu.

## Reemplazo de la batería

Battery life for Insight when looping range from 10 to 14 days, max. 20 days. The user reporting this is using Energizer lithium batteries.

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

## Errores específicos de Insight

### Bolo extendido

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Tiempo de espera agotado (Time out)

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Cruzando zonas horarias con la bomba Insight

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).