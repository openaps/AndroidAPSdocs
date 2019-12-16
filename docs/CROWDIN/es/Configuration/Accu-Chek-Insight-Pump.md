# Bomba Accu-Chek Insight

**Este software es parte de una solución de páncreas artificial de "hágalo usted mismo" y no es un producto, pero requiere que lea, aprenda y entienda el sistema, incluyendo cómo utilizarlo. No es algo que haga todo el manejo de su diabetes, pero le permite mejorar su diabetes y su calidad de vida si está dispuesto a dedicar el tiempo necesario. No te precipites, pero date tiempo para aprender. Solo Usted es responsable de lo que hace con él.**

* * *

## ***AVISO: ** Si ha estado utilizando la bomba con **SightRemote ** en el pasado, por favor, **actualice a la versión más reciente de AAPS ** y **desinstale SightRemote **.*

## Requisitos hardware y software

* Una bomba de insulina Roche Accu-Chek Combo (cualquier firmware, todos funcionan)
    
    Nota: AAPS escribirá los datos siempre en **primer perfil de tasa basal en la bomba**.

* Un teléfono Android (Basicamente todas las versiones de Android funcionarían, pero el AndroidAPS requiere al menos Android 5 (Lollipop)

* La aplicación AndroidAPS instalada en el teléfono

## Configuración

* La bomba Insight sólo debe estar conectado a un dispositivo a la vez. Si ha utilizado previamente el Insight remote control (medidor), debe quitar el medidor de la lista de dispositivos emparejados de la bomba: Menú > ajustes > Ajustes Comunicación > Quitar dispositivo
    
    ![Pantallazo de quitar el medidor Insight](../images/Insight_RemoveMeter.png)

* En [Config Builder ](../Configuration/Config-Builder) de la aplicación AndroidAPS, seleccione Accu-Chek Insight en la sección de la bomba
    
    ![Pantalla de Configuración de Insight](../images/Insight_ConfigBuilder.png)

* Toque el engranaje para abrir la configuración de la bomba.

* En configuración, pulsa en el botón 'Insight emparejamiento" en la parte superior de la pantalla. Debería ver una lista de todos los dispositivos Bluetooth cercanos (por debajo de la izquierda).
* En la bomba Insight, ir a Menu > Settings > Communication > Add Device. La bomba mostrará la siguiente pantalla (a la derecha) mostrando el número de serie de la bomba.
    
    ![Pantalla de emparejamiento 1 de Insight](../images/Insight_Pairing1.png)

* Volviendo a tu teléfono, toca el número de serie de la bomba en la lista de dispositivos Bluetooth. Entonces toca "Pair" para confirmar.
    
    ![Pantalla de emparejamiento 2 de Insight](../images/Insight_Pairing2.png)

* A continuación, la bomba y el teléfono mostrarán un código. Compruebe que los códigos sean los mismos en ambos dispositivos y confirme tanto en la bomba como en el teléfono.
    
    ![Pantalla de emparejamiento 3 de Insight](../images/Insight_Pairing3.png)

* Correcto! Una palmadita en la espalda por el éxito en la vinculación de la bomba con AndroidAPS.
    
    ![Pantalla de emparejamiento 4 de Insight](../images/Insight_Pairing4.png)

* Para comprobar todo está bien, vuelve a Config builder en AndroidAPS y pulsa sobre el engranaje de la bomba Insight para entrar en la configuración Insight, luego pulsa en el emparejamiento Insight y verás alguna información sobre la bomba:
    
    ![Pantalla de información de emparejamiento Insight](../images/Insight_PairingInformation.png)

Nota: No habrá una conexión permanente entre la bomba y el teléfono. Sólo se establecerá una conexión si es necesario (por ejemplo, fijar la tasa basal temporal, dar bolo, leer la historia de la bomba...). De lo contrario, la batería del teléfono y de la bomba se agotarían demasiado rápido.

## Valores en AAPS

Usted **no debe utilizar 'Siempre usar valores basales absolutos'** con la bomba Insight. En AAPS vaya a Preferencias > Nightscout-Client > Configuración Avanzada y asegúrese de que 'Siempre usar valores basales absolutos' está deshabilitado. Esto conduciría a valores de TBR falsos en la bomba Insight. Como consecuencia, no podrá utilizar el Autoajuste, pero no hay alternativa para inhabilitar esta opción al utilizar la bomba de Insight.

![Pantalla de seteos de Insight](../images/Insight_pairing_V2_5.png)

En los valores de Insight en AndroidAPS, puede habilitar las opciones siguientes:

* "Registrar cambios en el depósito": Esto registrará automáticamente un cambio de cartucho de insulina cuando se ejecute el programa de "llenar la cánula" en la bomba.
* "Registro de cambios de tubo": Esto agrega una nota a la base de datos de AndroidAPS al ejecutar el programa de "llenado de tubo" de la bomba.
* "Registro de cambio de cánula”: Esto agrega una nota a la base de datos de AndroidAPS cuando se ejecuta "el llenado de la cánula" del programa de la bomba. **Nota: un cambio de cánula también restablece el autosens.**
* "Registro de cambios de batería": Se registra el cambio de la batería cuando usted pone una batería nueva en la bomba.
* "Registro de cambios del modo de operación": Se agrega una nota en la base de datos de AndroidAPS cuando: se inicia, detiene o pausa la bomba.
* "Registro de alertas": Se agrega una nota en la base de datos AndroidAPS siempre que la bomba emite una alerta (excepto los recordatorios, el bolo y la cancelación de TBR, eventos que no se registran).
* "Habilitar emulación TBR": La bomba Insight sólo puede realizar las tasas basales temporales (TBRs) hasta el 250%. Para evitar esta restricción, La emulación TBR dará instrucciones a la bomba para que proporcione un bolus extendido para la insulina extra si solicita un TBR de más del 250%.
    
    **Sólo utilice un bolo extendido, ya que múltiples bolos extendidos al mismo tiempo pueden causar errores.**

* "Tiempo de recuperación": Esto define cuánto tiempo esperará el AndroidAPS antes de volver a intentarlo, después de un intento de conexión fallido. Puede elegir entre 0 y 20 segundos. Si experimenta problemas de conexión, elija un tiempo de espera más largo.   
      
    Ejemplo de min. tiempo de recuperación = 5 y max. tiempo de recuperación = 20   
      
    no conexión-> espere **5 ** seg.   
    reintento-> sin conexión-> espera **6 ** seg.   
    reintento-> sin conexión-> espera **7 ** seg.   
    reintento-> sin conexión-> espera **8 ** seg.   
    ...   
    reintento-> sin conexión-> espera **20 ** seg.   
    reintento-> sin conexión-> espera **20 ** seg.   
    ...

* "Retraso de desconexión": Define cuánto tiempo (en segundos) AndroidAPS esperará a desconectarse de la bomba después de que finalice una operación. El valor predeterminado es de 5 segundos.

Para los periodos en los que se ha detenido la bomba, AAPS registrará tasa basal con 0%. basal con 0%.

En AndroidAPS, la pestaña Accu-Chek Insight muestra el estado actual de la bomba y tiene dos botones:

* "Actualizar": Refresca el estado de la bomba
* "Activar/Desactivar TBR notificación": Una bomba Insight estándar emite una alarma cuando un TBR está terminado. Este botón le permite habilitar o inhabilitar esta alarma sin necesidad de software de configuración.
    
    ![Pantalla de estados de Insight](../images/Insight_Status2.png)

## Configuración de la bomba

Configure las alarmas en la bomba como se indica a continuación:

* Menú > Ajustes > ajustes del equipo > configuración de Modo > Tranquilo > Señal > Sonido Menú > Ajustes > ajustes del equipo > configuración de Modo > Tranquilo > Volumen > 0 (quitar todas las barras)
* Menú > Modos > modo de Señal > Tranquilo

Esto silenciará todas las alarmas de la bomba, permitiendo que AndroidAPS decida si una alarma es relevante para usted. Si AndroidAPS no admite una alarma, su volumen se incrementará (primera señal, después vibración).

Las bombas de Insight con firmware más reciente vibrarán brevemente cada vez que se entrega un bolo (por ejemplo, cuando el AndroidAPS emite una emulación SMB o TBR entrega un bolo extendido). No se puede inhabilitar la vibración. Las bombas de modelos anteriores no vibran en estas circunstancias.

## Reemplazo de la batería

La vida de la batería para la bomba Insight cuando se hace lazo está en el rango de 10 a 14 días, máx. 20 días. El usuario que informa de esto está utilizando las baterías de litio de Energizer.

La bomba Insight tiene una batería interna pequeña para mantener las funciones esenciales como el reloj que se está ejecutando mientras cambia la batería extraíble. Si el cambio de la batería tarda demasiado tiempo, esta batería interna se puede quedar sin energía, se restablecerá el reloj y se le solicitará que introduzca una nueva hora y fecha después de insertar una nueva batería. Si esto ocurre, todas las entradas en AndroidAPS antes del cambio de la batería ya no se incluirán en los cálculos ya que no se puede identificar correctamente la hora correcta.

## Errores específicos de Insight

### Bolo extendido

Sólo utilice un bolo extendido, ya que múltiples bolos extendidos al mismo tiempo pueden causar errores.

### Tiempo de espera agotado (Time out)

A veces puede suceder que la bomba Insight no responda durante la configuración de la conexión. En este caso AAPS mostrará el siguiente mensaje: "tiempo de espera agotado durante la conexión (handshake) por bluetooth".

![Pantalla de reseteo de Bluetooth de Insight](../images/Insight_ResetBT.png)

En este caso, desactive la función bluetooth en la bomba el smartphone por unos 10 segundos y vuelva a encenderlo.

## Cruzando zonas horarias con la bomba Insight

Para obtener información sobre los viajes a través de zonas horarias, consulte la sección [Zonas horarias viajando con bombas](../Usage/Timezone-traveling#insight).