# Bombas Medtronic

**>>>> El controlador de bomba de Medtronic es de la versión 2.5 de AndroidAPS (maestro). Si bien este es el caso, el controlador Medtronic debe ser considerado como software beta. Por favor, instale sólo si es usuario experimentado. At the moment we are still fighting with double Bolus issue (We get 2 boluses in treatments, which throws IOB calculation (if you experience this bug, please enable Double Bolus Logging in Medtronic configuration and provide your logs)), this should be fixed with upcomming release. <<<<**

* * *

Funciona sólo con las bombas Medtronic más antiguas (detalles a continuación). No funciona con Medtronic 640G o 670G.

* * *

If you started using Medtronic driver please add yourself to this [list](https://docs.google.com/spreadsheets/d/16XIjviXe8b-12PrB6brGubNFuAEsFZr10pjLt_SpSFQ/edit#gid=0). This is just so that we can see which Phones are good and which are not so good (or bad) for this driver. There is one column called "BT restart". This is to check if yourPhone supports BT enable/disable, which can be used when pump is no longer able to connect, that happens from time to time. If you notice any other problem, please write that in Comments column.

* * *

## Hardware and software requirements

- **Teléfono: ** El controlador Medtronic debe funcionar con cualquier teléfono que soporte a BLUETHOOT. **IMPORTANTE: Mientras que el controlador funciona correctamente en todos los teléfonos, la activación/desactivación de Bluetooth no (esto es necesario cuando se pierde la conexión a RileyLink y el sistema no puede recuperar automáticamente pasa de vez en cuando). Necesitas obtener un dispositivo con Android 6.0 - 8.0, en el peor de los casos puedes instalar LinegaeOS 15.1 (requerido 15.1 o inferior) en tu teléfono. Estamos investigando un problema con Android 9, pero hasta ahora no hemos encontrado la resolución (parece funcionar en algunos modelos y no en otros, y en algunas veces también funciona en algunos modelos). **
- **RileyLink/Gnarl: ** Para la comunicación con Pump necesita un dispositivo que convierta los comandos BLuetooth desde el teléfono en los comandos RF que la bomba entiende. El dispositivo que se llama RileyLink (puede conseguirlo aquí [getrileylink.org ](https://getrileylink.org/)). Necesita una versión estable del dispositivo, que es para los modelos anteriores de firmware 0.9 (las versiones anteriores pueden no funcionar correctamente) o para los modelos más recientes 2.2 (hay opciones para actualizar disponibles en el sitio RL). Si usted se siente aventurero también puede probar Gnarl ([aquí ](https://github.com/ecc1/gnarl)), que es una especie de RileyLink clon. 
- **Bomba:** El controlador sólo funciona con los siguientes modelos y versiones de firmware: 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (firmware 2.4A o inferior)
    - 554/754 versión de EU (firmware 2.6A o inferior)
    - 554/754 versión de Canadá (firmware 2.7A o inferior)

## Configuración de la bomba

- **Habilitar el modo de control remoto en la Bomba** (Utilidades -> Opciones de control Remoto, Seleccione Sí, y en la siguiente pantalla hacer Agregar ID y agregar un ID ficticio (111111 o algo similar). Debe tener al menos un ID en la lista de ID remotos. Estas opciones pueden tener un aspecto diferente en diferentes modelos de la bomba. Este paso es importante, porque cuando se establece, la bomba escuchará con más frecuencia la comunicación remota.
- **Set Max Basal** en la Bomba para su "entrada de basal max en su perfil STD" * 4 (si usted quiere tener un 400% Basal temporal como máx.). Este número debe ser de menos de 35 (como se puede ver en la bomba).
- **Establecer Bolo Máximo** en la bomba (máx es 25)
- **Establecer el perfil en STD **. Este será el único perfil que usaremos. También puedes desactivar.
- **Establecer tipo de TBR ** en Absoluto (no Porcentaje)

## Configuración de teléfono/AndroidAPS

- **No empareje RileyLink con el teléfono. ** Si ha emparejado su RileyLink, entonces AndroidAPS no podrá encontrarlo en la configuración.
- Desactive Auto-rotar en su teléfono (en algunos dispositivos Auto-rotar reinicia las sesiones BT, lo que no es algo que querramos).
- Puede configurar la bomba en AndroidAPS de dos maneras: 

1. Usando el asistente (en una nueva instalación)
2. Directamente en la pestaña Configuración (Icono Engranaje en el controlador Medtronic)

If you do new install you will be thrown directly into wizard. Sometimes if your BT connection is not working fully (unable to connect to pump), you might not be able to complete configuration. In such case select virtual pump and after wizard is finished, you can go with option 2, which will bypass pump detection.

![MDT Settings](../images/Medtronic01.png)

You need to set following items: (see picture above)

- **Número de serie de la bomba **: Puede encontrarlo en el lado posterior, en la entrada SN. Necesitas obtener sólo los números, el necesario es de 6 números.
- **Tipo de bomba **: el tipo de bomba que tiene (por ejemplo, 522). 
- **Frecuencia de la bomba **: Según la frecuencia de la bomba, hay dos versiones de la bomba Medtronic (si no está seguro de la frecuencia con la que utiliza la bomba, mire [FAQ ](../Configuration/MedtronicPump#faq)): 
    - para US & Canadá, la frecuencia utilizada es 916 Mhz
    - para el resto del mundo, la frecuencia utilizada es de 868 Mhz
- **Bolus máximo en la bomba (U) ** (en una hora): Es necesario que se establezca el mismo que en la bomba. Limita la cantidad de insulina que puede suministrar con Bolus. Si lo supera, el Bolus no se realizará y se devolverá un error. Máximo que se puede utilizar es 25, por favor, establezca el valor correcto para usted aquí, para que existan sobredosis.
- **Bolus máximo basal en la bomba (U) ** (en una hora): Es necesario que se establezca el mismo que en la bomba. Limita la cantidad de basal que se puede obtener en una hora. Así, por ejemplo, si quieres tener un máximo de TBR establecido en el 500% y el más alto de tus patrones basales es 1,5 U, entonces necesitaría poner a Max Basal en al menos 7.5. Si este valor es incorrecto (por ejemplo, si uno de los patrones basales sobrepasa este valor, la bomba devolvería un error).
- **Retardo antes de que Bolus se inicie (s) **: Se demora tiempo antes de que se envíe el bolo a la bomba, de modo que si cambia de opinión, puede cancelarlo. El cancelar el bolo cuando el bolo se esta suministrando, no está disponible en la bomba (si desea detener el bolo cuando se ejecuta, tiene que suspender la bomba y luego reanudar).
- **Codificación Medtronic **: Este es el valor que determina, si 4b6b que codifica los dispositivos Medtronic se hará en AndroidAPS o en RileyLink. Si tiene un RileyLink con el firmware 2.x, el valor predeterminado será: utilizar la codificación de hardware (= realizada por RileyLink), si tiene el firmware de 0.x este valor se ignorará.
- **Tipo de batería (Power View) **: Si desea ver la alimentación de la batería en la bomba, debe seleccionar el tipo de batería que utiliza (Litio o Alkaline soportado actualmente), esto cambiará la pantalla para mostrar el porcentaje calculado y los voltios.
- **Configuración de RileyLink **: Buscará el dispositivo RileyLink/GNARL.

## Pestaña MEDTRONIC (MDT)

![MDT Tab](../images/Medtronic02.png)

On pump tab you can see several lines that are showing pumps (and connections) current status.

- **Estatus de RileyLink **: Muestra el estado de la conexión RileyLink. El teléfono debería estar conectado a RileyLink todo el tiempo.
- **Estado de la bomba **: Estado de la conexión de la bomba, puede tener varios valores, pero en su mayoría veremos el icono de suspensión (cuando la conexión de la bomba no está activa), cuando se ejecutan comandos, podríamos ver "Waking Up", cuando AAPS esta intentando hacer una conexión con la bomba o descripción de cualquier comando que pueda estar en la bomba (por ejemplo.: Get Time, Set TBR, etc.).
- **Batería **: muestra el estado de la batería en la configuración de la batería. Este puede ser un icono simple que muestra si la batería está vacía o llena (rojo si la batería se está volviendo crítica, menos del 20%), o el porcentaje y el voltaje.
- **Última conexión **: Hora en la que la última conexión con la bomba se ha realizado correctamente.
- **Ultimo Bolo **: Cuando se puso el último bolo.
- **Tasa basal **: Esta es la tasa basal base que se ejecuta en la bomba en este momento.
- **Basal temporaria **: tasa basal temporal que se está ejecutando o está vacío.
- **Depósito **: cuánta insulina contiene el reservorio (actualizado al menos cada hora).
- **Errores**: Texto si hay un problema (en su mayoría se muestra si hay un error en la configuración).

On lower end we have 3 buttons:

- **Renovar ** es para actualizar el estado. Se debe utilizar sólo después de que la conexión no estuviera activa durante mucho tiempo, ya que esta acción restablecerá los datos sobre la bomba (recuperar el historial, el tiempo de obtener/colocar hora, obtener el perfil, obtener el estado de la batería, etc).
- **Historial de la bomba **: Muestra el historial de la bomba (consulte [abajo](../Configuration/MedtronicPump#pump-history))
- **RL Estado **: Mostrar estadísticas RileyLink (consulte [abajo](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Historial de la bomba

![Pump History Dialog](../images/Medtronic03.png)

Pump history is retrieved every 5 minutes and stored localy. We keep history only for last 24 hours, so older entries are removed when new are added. This is simple way to see the pump history (some entries from pump might not be displayed, because they are not relevant - for example configuration of functions that are not used by AndroidAPS).

## Estado de RL (Estado de RileyLink)

![RileyLink Status - Settings](../images/Medtronic04.png) ![RileyLink Status - History](../images/Medtronic05.png)

Dialog has two tabs:

- **Valores **: muestra los valores de RileyLink: Direcciones configuradas, Dispositivo Conectado, Estado de conexión, Error de conexión y Versiones de firmware de RileyLink. El tipo de dispositivo siempre es Bomba Medtronic, el modelo será el de su bomba, el número de serie es el número de serie configurado, la frecuencia de la bomba muestra qué frecuencia se utiliza, Última frecuencia es la que se utilizó por última vez.
- **Histórico **: muestra el historial de comunicaciones, los cambios de estado de RileyLink, parra RileyLink y Medtronic, muestra qué comandos se han enviado a la bomba.

## Acciones

When Medtronic driver is selected, 3 possible actions can be added to Actions Tab:

- **Despertar y sintonizar** -Si ve que su AndroidAPS no se ha puesto en contacto con su bomba en un tiempo (debería ponerse en contacto con ella cada 5 minutos), puede forzar a Tune Up. Esto intentará que se ponga en contacto con la bomba, buscando todas las subfrecuencias en las que la bomba puede ser contactada. Si encuentra una, la configurará como su frecuencia predeterminada. 
- **Restablecer configuración de RileyLink** -Si restablece su RileyLink/GNARL, debe utilizar esta acción, para que se pueda volver a configurar el dispositivo (conjunto de frecuencias, conjunto de tipos de frecuencia, codificación configurada).
- **Limpiar Boqueo de Bolo** -Cuando se inicia el bolo, se establece Bloqueo de Bolo, lo que evita que se emitan comandos a la bomba. Si suspende la bomba y se reanuda (para cancelar el bolo), puede eliminar dicho bloqueo. La opción sólo está visible cuando el bolo se está inyectando... 

## Notas importantes

### Registro

Since Medtronic driver is very new, you need to enable logging, so that we can debug and fix problems, if they should arise. Click on icon on upper left corner, select Maintainance and Log Settings. Options Pump, PumpComm, PumpBTComm need to be checked.

### RileyLink/GNARL

When you restart RileyLink or GNARL, you need to either do new TuneUp (action "Wake and Tune Up") or resend communication parameters (action "Reset RileyLink Config"), or else communication will fail.

### MCG

Medtronic CGMS is currently NOT supported.

### Uso manual de la bomba

You should avoid manually doing treatments things on your pump. All commands (bolus, TBR) should go through AndroidAPS, but if it happens that you will do manual commands, do NOT run commands with frequency less than 3 minutes (so if you do 2 boluses (for whatever reason), second should be started at least 3 minutes after first one).

## Cambios de zona horaria y DST (Hora extra solar) o viajando con bomba Medtronic y AndroidAPS

Important thing to remember is that you should never disable loop when you are traveling (unless your CGMS can't do offline mode). AAPS will automatically detect Timezone changes and will send command to Pump to change time, when time on Phone is changed.

Now if you travel to East and your TZ changes with adding hours (ex. from GMT+0 to GMT+2), pump history won't have problem and you don't have to worry... but if you travel to West and your TZ changes by removing hours (GMT+2 to GMT-0), then sychronization might be little iffy. In clear text, that means that for next x hours you will have to be careful, because your IOB, might be little weird.

We are aware of this problem, and we are already looking into possible solution (see https://github.com/andyrozman/RileyLinkAAPS/issues/145), but for now, have that info in mind when traveling.

## Preguntas frecuentes

### ¿Puedo ver el nivel de batería erá de RileyLink/GNARL?

No. At the moment none of this devices support this and it probably won't even in the future.

### ¿Es GNARL un sustituto totalmente equivalente de RileyLink?

Yes. Author of GNARL added all functions used by Medtronic driver. All Medtronic communication is supported (at time of the writing (June/2019). GNARL can't be used for Omnipod communication. Downside of GNARL is that you have to build it yourself, and you have to have compatible version of hardware.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

### ¿Dónde puedo obtener RileyLink o GNARL?

Like mentioned before you can get devices here:

- RileyLink - Puede obtener el dispositivo aquí-[getrileylink.org](https://getrileylink.org/).
- GNARL-Puede obtener información aquí, pero el dispositivo debe soliciarse en otro lugar ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### ¿Qué hacer si pierdo la conexión con RileyLink y/o bomba?

1. Ejecute la acción "Despertar y Sintonizar", esta tratará de encontrar la frecuencia correcta para comunicarse con la bomba.
2. Inhabilite Bluetooth, espere 10s y vuelva a habilitarlo. Esto obligará a reconectar a RileyLink.
3. Restablezca(Reset) RileyLink, después de esta acción y no olvide ejecutar la acción "Restablecer configuración de RileyLink".
4. Pruebe 3 y 2 juntos.
5. Restablecer a RileyLink y reinicializar el teléfono.

### Cómo determinar qué frecuencia utiliza mi bomba

![Pump Model](../images/Medtronic06.png)

If you turn your pump around in first line on right side you will see special 3 letter code. First two letters determine frequency type and last one determines color. Here are possible values for Frequency:

- NA-América del Norte (en la selección de frecuencia se debe seleccionar "US & Canada (916 MHz)")
- CA-Canadá (en la selección de frecuencia se debe seleccionar "US & Canada (916 MHz)")
- WW-Todo el mundo (en la selección de frecuencia se debe seleccionar "Worldwide (868 Mhz)")