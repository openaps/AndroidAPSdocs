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

Usted **no debe utilizar 'Siempre usar valores basales absolutos'** con la bomba Insight. En AAPS vaya a Preferencias > ClienteNS > Configuración Avanzada y asegúrese de que 'Siempre usar valores basales absolutos' está deshabilitado. Esto conduciría a valores de TBR falsos en la bomba Insight.

La única solución por el momento es **inhabilitar la sincronización** con Nightscout (sólo carga) si usted necesita usar autotune. En la AAPS ir a Preferencias > ClienteNS > Ajustes Avanzados y Habilitar 'NS solo cargar (desactivado sincronización)'.

![Pantalla de seteos de Insight](../images/Insight_settings.png)

En los valores de Insight en AndroidAPS, puede habilitar las opciones siguientes:

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

Para los periodos en los que se ha detenido la bomba, AAPS registrará tasa basal 0%. tasa basal a 0%.

En AndroidAPS, la pestaña Accu-Chek Insight muestra el estado actual de la bomba y tiene dos botones:

* "Actualizar": Refresca el estado de la bomba
* "Activar/Desactivar TBR notificación": Una bomba Insight estándar emite una alarma cuando una basal temporal termina. Este botón le permite habilitar o inhabilitar esta alarma sin necesidad de software de configuración.
    
    ![Pantalla de estados de Insight](../images/Insight_Status2.png)

## Configuración de la bomba

Configure las alarmas en la bomba como se indica a continuación:

* Menú > Ajustes > ajustes del equipo > configuración de Modo > Silencio > Señal > Sonido
* Menú > Ajustes > ajustes del equipo > configuración de Modo >Silencio > Volumen > 0 (quitar todas las barras)
* Menú > Modos > modo de Señal > Silencio

Esto silenciará todas las alarmas de la bomba, permitiendo que AndroidAPS decida si una alarma es relevante para usted. Si AndroidAPS no confirma una alarma, su volumen se incrementará (primera señal, después vibración).

### Vibración

Dependiendo de la versión de firmware de su bomba, el Insight vibrará brevemente cada vez que se entregue un bolo (por ejemplo, cuando AndroidAPS emite una emulación SMB o TBR entrega un bolo extendido).

* Firmware 1.x: Sin vibración por diseño.
* Firmware 2.x: La vibración no se puede inhabilitar.
* Firmware 3.x: AndroidAPS libera en forma silenciosa. (mínimo [ versión 2.6.1.4 ](../Installing-AndroidAPS/Releasenotes#version-2-6-1-4))

La versión de firmware se puede encontrar en el menú.

## Reemplazo de la batería

La vida de la batería para la bomba Insight cuando se hace lazo cerrado está en el rango de 10 a 14 días, máx. 20 días. El usuario que informa de esto está utilizando las baterías de litio de Energizer.

La bomba Insight tiene una batería interna pequeña para mantener las funciones esenciales como el reloj que se está ejecutando mientras cambia la batería extraíble. Si el cambio de la batería tarda demasiado tiempo, esta batería interna se puede quedar sin energía, se restablecerá el reloj y se le solicitará que introduzca una nueva hora y fecha después de insertar una nueva batería. Si esto ocurre, todas las entradas en AndroidAPS antes del cambio de la batería ya no se incluirán en los cálculos ya que no se puede identificar correctamente la hora correcta.

## Errores específicos de Insight

### Bolo extendido

Sólo utilice un bolo extendido al mismo tiempo, ya que múltiples bolos extendidos pueden causar errores.

### Tiempo de espera agotado (Time out)

A veces puede suceder que la bomba Insight no responda durante la configuración de la conexión. En este caso AAPS mostrará el siguiente mensaje: "tiempo de espera agotado durante el emparejamiento- resetear bluetooth".

![Reseteo de Bluetooth de Insight](../images/Insight_ResetBT.png)

En este caso, desactive la función bluetooth en la bomba y en el smartphone por unos 10 segundos y vuelva a encenderlo.

## Cruzando zonas horarias con la bomba Insight

Para obtener información sobre los viajes a través de zonas horarias, consulte la sección [Zonas horarias viajando con bombas](../Usage/Timezone-traveling#insight).