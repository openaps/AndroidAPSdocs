# Bombas Medtronic

**>>>> El controlador de bomba de Medtronic es de la versión 2.5 de AndroidAPS (maestro). Si bien este es el caso, el controlador Medtronic debe ser considerado como software beta. Por favor, instale sólo si es usuario experimentado. At the moment we are still fighting with double Bolus issue (We get 2 boluses in treatments, which throws IOB calculation (if you experience this bug, please enable Double Bolus Logging in Medtronic configuration and provide your logs)). <<<<**

* * *

Funciona sólo con las bombas Medtronic más antiguas (detalles a continuación). No funciona con Medtronic 640G o 670G.

* * *

## Hardware and software requirements

- **Teléfono: ** El controlador Medtronic debe funcionar con cualquier teléfono que soporte a BLUETHOOT. **IMPORTANTE: Mientras que el controlador funciona correctamente en todos los teléfonos, la activación/desactivación de Bluetooth no (esto es necesario cuando se pierde la conexión a RileyLink y el sistema no puede recuperar automáticamente pasa de vez en cuando). Necesitas obtener un dispositivo con Android 6.0 - 8.0, en el peor de los casos puedes instalar LinegaeOS 15.1 (requerido 15.1 o inferior) en tu teléfono. Estamos investigando un problema con Android 9, pero hasta ahora no hemos encontrado la resolución (parece funcionar en algunos modelos y no en otros, y en algunas veces también funciona en algunos modelos). **
- **RileyLink/Gnarl: ** Para la comunicación con Pump necesita un dispositivo que convierta los comandos BLuetooth desde el teléfono en los comandos RF que la bomba entiende. El dispositivo que se llama RileyLink (puede conseguirlo aquí [getrileylink.org ](https://getrileylink.org/)). You need stable version of device, which is for older models firmware 0.9 (older versions might not work correctly) or for newer models 2.2 (there are options to upgrade available on RL site). Si usted se siente aventurero también puede probar Gnarl ([aquí ](https://github.com/ecc1/gnarl)), que es una especie de RileyLink clon. 
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

- **Do not pair RileyLink with your Phone.** If you paired your RileyLink, then AndroidAPS won't be able to find it in configuration.
- Disable Auto-rotate on your phone (on some devices Auto-rotate restarts BT sessions, which is not something we would want).
- Puede configurar la bomba en AndroidAPS de dos maneras: 

1. Usando el asistente (en una nueva instalación)
2. Directamente en la pestaña Configuración (Icono Engranaje en el controlador Medtronic)

Si realiza una instalación nueva, se le lanzará directamente en el asistente. Sometimes if your BT connection is not working fully (unable to connect to pump), you might not be able to complete configuration. In such case select virtual pump and after wizard is finished, you can go with option 2, which will bypass pump detection.

![Configuración MDT](../images/Medtronic01.png)

Usted necesita establecer los siguientes elementos: (ver imagen siguiente)

- **Número de serie de la bomba **: Puede encontrarlo en el lado posterior, en la entrada SN. Necesitas obtener sólo los números, el necesario es de 6 números.
- **Tipo de bomba **: el tipo de bomba que tiene (por ejemplo, 522). 
- **Pump Frequency**: According to pump frequency there were two versions of Medtronic pump made (if you are not sure what frequency your pump uses, look at [FAQ](../Configuration/MedtronicPump#faq)): 
    - para US & Canadá, la frecuencia utilizada es 916 Mhz
    - para el resto del mundo, la frecuencia utilizada es de 868 Mhz
- **Bolus máximo en la bomba (U) ** (en una hora): Es necesario que se establezca el mismo que en la bomba. Limita la cantidad de insulina que puede suministrar con Bolus. Si lo supera, el Bolus no se realizará y se devolverá un error. Máximo que se puede utilizar es 25, por favor, establezca el valor correcto para usted aquí, para que existan sobredosis.
- **Bolus máximo basal en la bomba (U) ** (en una hora): Es necesario que se establezca el mismo que en la bomba. Limita la cantidad de basal que se puede obtener en una hora. So for example, if you want to have max TBR set to 500% and highest of your Basal patterns is 1.5 U, then you would need to set Max Basal to at least 7.5. If this setting is wrong (for example, if one of your basal pattern would go over this value, pump would return error).
- **Delay before Bolus is started (s)**: This is delay before bolus is sent to pump, so that if you change your mind you can cancel it. Canceling bolus when bolus is running is not supported by pump (if you want to stop bolus when running, you have to suspend pump and then resume).
- **Medtronic Encoding**: This is setting which determines, if 4b6b encoding that Medtronic devices do will be done in AndroidAPS or on RileyLink. If you have a RileyLink with 2.x firmware, default value will be to use Hardware encoding (= done by RileyLink), if you have 0.x firmware this setting will be ignored.
- **Battery Type (Power View)**: If you want to see battery power in your pump, you need to select type of battery you use (currently supported Lithium or Alkaline), this will in turn change display to display calculated percent and volts.
- **Configuración de RileyLink **: Buscará el dispositivo RileyLink/GNARL.

## Pestaña MEDTRONIC (MDT)

![Pestañas MDT](../images/Medtronic02.png)

On pump tab you can see several lines that are showing pumps (and connections) current status.

- **RileyLink Status**: It shows status of RileyLink connection. El teléfono debería estar conectado a RileyLink todo el tiempo.
- **Pump Status**: Status of pump connection, this can have several values, but mostly we will see sleep icon (when pump connection is not active), when command is beeing executed, we might see "Waking Up", which is AAPS trying to make connection to your pump or description of any command that might be running on pump (ex.: Get Time, Set TBR, etc.).
- **Batería **: muestra el estado de la batería en la configuración de la batería. This can be simple icon showing if battery is empty or full (red if battery is getting critical, under 20%), or percent and voltage.
- **Última conexión **: Hora en la que la última conexión con la bomba se ha realizado correctamente.
- **Ultimo Bolo **: Cuando se puso el último bolo.
- **Tasa basal **: Esta es la tasa basal base que se ejecuta en la bomba en este momento.
- **Basal temporaria **: tasa basal temporal que se está ejecutando o está vacío.
- **Depósito **: cuánta insulina contiene el reservorio (actualizado al menos cada hora).
- **Errores**: Texto si hay un problema (en su mayoría se muestra si hay un error en la configuración).

En el extremo inferior tenemos 3 botones:

- **Renovar ** es para actualizar el estado. This should be used only after connection was not present for long time, as this action will reset data about pump (retrieve history, get/set time, get profile, get battery status, etc).
- **Historial de la bomba **: Muestra el historial de la bomba (consulte [abajo](../Configuration/MedtronicPump#pump-history))
- **RL Estado **: Mostrar estadísticas RileyLink (consulte [abajo](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Historial de la bomba

![Historial de la bomba](../images/Medtronic03.png)

El historial de la bomba se recupera cada 5 minutos y se almacena localmente. We keep history only for last 24 hours, so older entries are removed when new are added. This is simple way to see the pump history (some entries from pump might not be displayed, because they are not relevant - for example configuration of functions that are not used by AndroidAPS).

## Estado de RL (Estado de RileyLink)

![Estado de RileyLink - Ajustes](../images/Medtronic04.png) ![Estado de RileyLink - Historial](../images/Medtronic05.png)

El diálogo tiene dos pestañas:

- **Settings**: Shows settings about RileyLink: Configured Address, Connected Device, Connection Status, Connection Error and RileyLink Firmware versions. Device Type is always Medtronic Pump, Model would be your model, Serial number is configured serial number, Pump Frequency shows which frequency you use, Last Frequency is last frequency used.
- **History**: Shows communication history, items with RileyLink shows state changes for RileyLink and Medtronic shows which commands were sent to pump.

## Actions

When Medtronic driver is selected, 3 possible actions can be added to Actions Tab:

- **Wake and Tune Up** - If you see that your AndroidAPS hasn't contacted your pump in a while (it should contact it every 5 minutes), you can force Tune Up. This will try to contact your pump, by searching all sub frequencies on which Pump can be contacted. Si encuentra una, la configurará como su frecuencia predeterminada. 
- **Reset RileyLink Config** - If you reset your RileyLink/GNARL, you need to use this action, so that device can be reconfigured (frequency set, frequency type set, encoding configured).
- **Clear Bolus Block** - When you start bolus, we set Bolus Block, which prevents any commands to be issued to pump. Si suspende la bomba y se reanuda (para cancelar el bolo), puede eliminar dicho bloqueo. La opción sólo está visible cuando el bolo se está inyectando... 

## Notas importantes

### Registro

Since Medtronic driver is very new, you need to enable logging, so that we can debug and fix problems, if they should arise. Click on icon on upper left corner, select Maintainance and Log Settings. Las opciones Pump, PumpComm, PumpBTComm tienen que ser seleccionadas.

### RileyLink/GNARL

When you restart RileyLink or GNARL, you need to either do new TuneUp (action "Wake and Tune Up") or resend communication parameters (action "Reset RileyLink Config"), or else communication will fail.

### MCG

Medtronic MCG NO está soportado actualmente.

### Uso manual de la bomba

Debe evitar realizar manualmente las cosas en su bomba. All commands (bolus, TBR) should go through AndroidAPS, but if it happens that you will do manual commands, do NOT run commands with frequency less than 3 minutes (so if you do 2 boluses (for whatever reason), second should be started at least 3 minutes after first one).

## Cambios de zona horaria y DST (Hora extra solar) o viajando con bomba Medtronic y AndroidAPS

Important thing to remember is that you should never disable loop when you are traveling (unless your CGMS can't do offline mode). AAPS will automatically detect Timezone changes and will send command to Pump to change time, when time on Phone is changed.

Ahora, si viaja hacia el este y su zona horaria cambia con la adición de horas (por ejemplo: desde GMT +0 hasta GMT + 2), la historia de la bomba no tendrá problema y no tiene que preocuparse... but if you travel to West and your TZ changes by removing hours (GMT+2 to GMT-0), then sychronization might be little iffy. In clear text, that means that for next x hours you will have to be careful, because your IOB, might be little weird.

We are aware of this problem, and we are already looking into possible solution (see https://github.com/andyrozman/RileyLinkAAPS/issues/145), but for now, have that info in mind when traveling.

## Preguntas frecuentes

### ¿Puedo ver el nivel de batería erá de RileyLink/GNARL?

No. At the moment none of this devices support this and it probably won't even in the future.

### ¿Es GNARL un sustituto totalmente equivalente de RileyLink?

Sí. El autor de GNARL añadió todas las funciones utilizadas por el controlador Medtronic. Se da soporte a toda la comunicación Medtronic (en el momento de la escritura (junio/2019). GNARL no se puede utilizar para la comunicación de Omnipod. Downside of GNARL is that you have to build it yourself, and you have to have compatible version of hardware.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

### ¿Dónde puedo obtener RileyLink o GNARL?

Como se mencionó antes se pueden obtener dispositivos aquí:

- RileyLink - Puede obtener el dispositivo aquí-[getrileylink.org](https://getrileylink.org/).
- GNARL - You can get info here, but device needs to be ordered elsewhere ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### ¿Qué hacer si pierdo la conexión con RileyLink y/o bomba?

1. Run "Wake Up and Tune" action, this will try to find right frequency to communicate with pump.
2. Inhabilite Bluetooth, espere 10s y vuelva a habilitarlo. This will force reconnecting to RileyLink.
3. Reset RileyLink, after you do that do not forget to run "Reset RileyLink Config" action.
4. Try 3 and 2 together.
5. Reset RileyLink and reset phone.

### How to determine what Frequency my pump uses

![Modelo de bomba](../images/Medtronic06.png)

Si giras tu bomba, la primera línea en el lado derecho, verás un código especial de 3 letras. Las dos primeras letras determinan el tipo de frecuencia y el último determina el color. Here are possible values for Frequency:

- NA - North America (in frequency selection you need to select "US & Canada (916 MHz)")
- CA - Canada (in frequency selection you need to select "US & Canada (916 MHz)")
- WW - Worldwide (in frequency selection you need to select "Worldwide (868 Mhz)")