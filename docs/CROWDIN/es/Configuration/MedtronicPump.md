# Bombas Medtronic

**>>>> El controlador de bomba de Medtronic es de la versión 2.5 de AndroidAPS (maestro). Si bien este es el caso, el controlador Medtronic debe ser considerado como software beta. Por favor, instale sólo si es usuario experimentado. En este momento todavía estamos luchando con el problema de doble Bolo (obtenemos 2 bolos en los tratamientos, que lanza el cálculo de IOB (si experimenta este error, por favor active el registro de Double Bolo en la configuración de Medtronic y proporcione sus registros)), esto debe arreglarse en una futura versión. <<<<**

* * *

Funciona sólo con las bombas Medtronic más antiguas (detalles a continuación). No funciona con Medtronic 640G o 670G.

* * *

Si comenzó a usar el controlador Medtronic por favor añádase a sí mismo a esta [lista](https://docs.google.com/spreadsheets/d/16XIjviXe8b-12PrB6brGubNFuAEsFZr10pjLt_SpSFQ/edit#gid=0). Esto es sólo para que podamos ver qué Teléfonos son buenos y cuales no son tan buenas (o malos) para este controlador. Hay una columna llamada "Reinicio BT". Esto es para comprobar si su teléfono soporta BT habilitar/deshabilitar, que puede ser utilizado cuando la bomba no es capaz de conectar, lo que pasa de vez en cuando. Si nota cualquier otro problema, por favor escriba en la columna Comentarios.

* * *

## Requisitos hardware y software

- **Phone:** Medtronic driver should work with any phone supporting BLE. **IMPORTANT: While driver works correctly on all phones, enabling/disabling Bluetooth doesn't (this is required when you loose connection to RileyLink and system can't recover automatically - happens from time to time). So you need to get device with Android 7.0 - 8.1, in worst case scenario you can install LinegaeOS 15.1 (required 15.1 or lower) on your phone. We are looking into problem with Android 9, but so far we haven't found resolution (it seems to work on some models and not on others, and on also works sometimes on some models).**
- **RileyLink/Gnarl:** For communication with Pump you need device that converts BT commands from Phone into RF commands that Pump understands. El dispositivo que se llama RileyLink (puede conseguirlo aquí [getrileylink.org ](https://getrileylink.org/)). Necesita una versión estable del dispositivo, que es para los modelos anteriores de firmware 0.9 (las versiones anteriores pueden no funcionar correctamente) o para los modelos más recientes 2.2 (hay opciones para actualizar disponibles en el sitio RL). Si usted se siente aventurero también puede probar Gnarl ([aquí ](https://github.com/ecc1/gnarl)), que es una especie de RileyLink clon. 
- **Bomba:** El controlador sólo funciona con los siguientes modelos y versiones de firmware: 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (firmware 2.4A o inferior)
    - 554/754 versión de EU (firmware 2.6A o inferior)
    - 554/754 versión de Canadá (firmware 2.7A o inferior)
- Check for firmware is described in [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) and [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

## Configuración de la bomba

- **Habilitar el modo de control remoto en la Bomba** (Utilidades -> Opciones de control Remoto, Seleccione Sí, y en la siguiente pantalla hacer Agregar ID y agregar un ID ficticio (111111 o algo similar). Debe tener al menos un ID en la lista de ID remotos. Estas opciones pueden tener un aspecto diferente en diferentes modelos de la bomba. Este paso es importante, porque cuando se establece, la bomba escuchará con más frecuencia la comunicación remota.
- **Set Max Basal** en la Bomba para su "entrada de basal max en su perfil STD" * 4 (si usted quiere tener un 400% Basal temporal como máx.). Este número debe ser de menos de 35 (como se puede ver en la bomba).
- **Establecer Bolo Máximo** en la bomba (máx es 25)
- **Set profile to STD**. Este será el único perfil que usaremos. También puedes desactivar.
- **Set TBR type** to Absolute (not Percent)

## Configuración de teléfono/AndroidAPS

- **Do not pair RileyLink with your Phone.** If you paired your RileyLink, then AndroidAPS won't be able to find it in configuration.
- Desactive Auto-rotar en su teléfono (en algunos dispositivos Auto-rotar reinicia las sesiones BT, lo que no es algo que querramos).
- Puede configurar la bomba en AndroidAPS de dos maneras: 

1. Usando el asistente (en una nueva instalación)
2. Directamente en la pestaña Configuración (Icono Engranaje en el controlador Medtronic)

Si realiza una instalación nueva, se le lanzará directamente en el asistente. A veces, si la conexión BT no funciona completamente (no se puede conectar a la bomba), es posible que no pueda completar la configuración. En este caso, seleccione la bomba virtual y después de que haya terminado el asistente, puede ir a la opción 2, que omitirá la detección de bomba.

![Configuración MDT](../images/Medtronic01a.png)

Usted necesita establecer los siguientes elementos: (ver imagen siguiente)

- **Pump Serial Number**: You can find that on back side, entry SN. Necesitas obtener sólo los números, el necesario es de 6 números.
- **Pump Type**: Which pump type you have (i.e. 522). 
- **Pump Frequency**: According to pump frequency there were two versions of Medtronic pump made (if you are not sure what frequency your pump uses, look at [FAQ](../Configuration/MedtronicPump#faq)): 
    - para US & Canadá, la frecuencia utilizada es 916 Mhz
    - para el resto del mundo, la frecuencia utilizada es de 868 Mhz
- **Max Bolus on Pump (U)** (in an hour): This needs to be set to same as on the pump. Limita la cantidad de insulina que puede suministrar con Bolus. Si lo supera, el Bolus no se realizará y se devolverá un error. Máximo que se puede utilizar es 25, por favor, establezca el valor correcto para usted aquí, para que existan sobredosis.
- **Max Basal on Pump (U/h)**: This needs to be set to same as on the pump. Limita la cantidad de basal que se puede obtener en una hora. Así, por ejemplo, si quieres tener un máximo de TBR establecido en el 500% y el más alto de tus patrones basales es 1,5 U, entonces necesitaría poner a Max Basal en al menos 7.5. Si este valor es incorrecto (por ejemplo, si uno de los patrones basales sobrepasa este valor, la bomba devolvería un error).
- **Delay before Bolus is started (s)**: This is delay before bolus is sent to pump, so that if you change your mind you can cancel it. El cancelar el bolo cuando el bolo se esta suministrando, no está disponible en la bomba (si desea detener el bolo cuando se ejecuta, tiene que suspender la bomba y luego reanudar).
- **Medtronic Encoding**: This is setting which determines, if 4b6b encoding that Medtronic devices do will be done in AndroidAPS or on RileyLink. Si tiene un RileyLink con el firmware 2.x, el valor predeterminado será: utilizar la codificación de hardware (= realizada por RileyLink), si tiene el firmware de 0.x este valor se ignorará.
- **Battery Type (Power View)**: If you want to see battery power in your pump, you need to select type of battery you use (currently supported Lithium or Alkaline), this will in turn change display to display calculated percent and volts.
- **RileyLink Configuration**: This will find your RileyLink/GNARL device.
- **Set neutral temp basals** is an option which can help prevent Medtronic pumps from beeping on the hour. If enabled if will cancel a temp basal before the hour end to prevent this from happening.

## Pestaña MEDTRONIC (MDT)

![Pestañas MDT](../images/Medtronic02.png)

En la pestaña de la bomba, puede ver varias líneas que están mostrando las bombas (y las conexiones) estado actual.

- **RileyLink Status**: It shows status of RileyLink connection. El teléfono debería estar conectado a RileyLink todo el tiempo.
- **Pump Status**: Status of pump connection, this can have several values, but mostly we will see sleep icon (when pump connection is not active), when command is beeing executed, we might see "Waking Up", which is AAPS trying to make connection to your pump or description of any command that might be running on pump (ex.: Get Time, Set TBR, etc.).
- **Battery**: Shows battery status depening on your configuration. Este puede ser un icono simple que muestra si la batería está vacía o llena (rojo si la batería se está volviendo crítica, menos del 20%), o el porcentaje y el voltaje.
- **Last connection**: Time when last connection to pump was successful.
- **Last Bolus**: When last bolus was given.
- **Base Basal Rate**: This is the base basal rate that runs on pump at this hour.
- **Temp basal**: Temp basal that is running or empty.
- **Reservoir**: How much insulin is in reservoir (updated at least every hour).
- **Errores**: Texto si hay un problema (en su mayoría se muestra si hay un error en la configuración).

En el extremo inferior tenemos 3 botones:

- **Refresh** is for refreshing state. Se debe utilizar sólo después de que la conexión no estuviera activa durante mucho tiempo, ya que esta acción restablecerá los datos sobre la bomba (recuperar el historial, el tiempo de obtener/colocar hora, obtener el perfil, obtener el estado de la batería, etc).
- **Pump History**: Shows pump history (see [bellow](../Configuration/MedtronicPump#pump-history))
- **RL Stats**: Show RL Stats (see [bellow](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Historial de la bomba

![Historial de la bomba](../images/Medtronic03.png)

El historial de la bomba se recupera cada 5 minutos y se almacena localmente. Mantenemos la historia sólo durante las últimas 24 horas, por lo que las entradas más antiguas se eliminan cuando se añaden nuevas. Esta es una forma sencilla de ver el historial de la bomba (es posible que algunas entradas de la bomba no se muestren, porque no son relevantes-por ejemplo, la configuración de las funciones que no son utilizadas por AndroidAPS).

## Estado de RL (Estado de RileyLink)

![Estado de RileyLink - Ajustes](../images/Medtronic04.png) ![Estado de RileyLink - Historial](../images/Medtronic05.png)

El diálogo tiene dos pestañas:

- **Settings**: Shows settings about RileyLink: Configured Address, Connected Device, Connection Status, Connection Error and RileyLink Firmware versions. El tipo de dispositivo siempre es Bomba Medtronic, el modelo será el de su bomba, el número de serie es el número de serie configurado, la frecuencia de la bomba muestra qué frecuencia se utiliza, Última frecuencia es la que se utilizó por última vez.
- **History**: Shows communication history, items with RileyLink shows state changes for RileyLink and Medtronic shows which commands were sent to pump.

## Acciones

Cuando se selecciona el controlador Medtronic, se pueden añadir 3 acciones posibles a la pestaña Acciones:

- **Despertar y sintonizar** -Si ve que su AndroidAPS no se ha puesto en contacto con su bomba en un tiempo (debería ponerse en contacto con ella cada 5 minutos), puede forzar a Tune Up. Esto intentará que se ponga en contacto con la bomba, buscando todas las subfrecuencias en las que la bomba puede ser contactada. Si encuentra una, la configurará como su frecuencia predeterminada. 
- **Restablecer configuración de RileyLink** -Si restablece su RileyLink/GNARL, debe utilizar esta acción, para que se pueda volver a configurar el dispositivo (conjunto de frecuencias, conjunto de tipos de frecuencia, codificación configurada).
- **Limpiar Boqueo de Bolo** -Cuando se inicia el bolo, se establece Bloqueo de Bolo, lo que evita que se emitan comandos a la bomba. Si suspende la bomba y se reanuda (para cancelar el bolo), puede eliminar dicho bloqueo. La opción sólo está visible cuando el bolo se está inyectando... 

## Notas importantes

### Usuarios de OpenAPS

Cuando empiece a usar AndroidAPS, el controlador principal es AndroidAPS y todos los comandos deben ir a través de él. El envío de bolos debe ir a través de la AAPS y no se puede hacer en la bomba. Tenemos código que detectará cualquier comando realizado en la bomba, pero mejor si usted puede evitarlo (creo que hemos solucionado todos los problemas con la historia de la bomba y la sincronización de la historia de AAPS, pero pequeños problemas pueden darse, especialmente si se utiliza la "configuración" ya que no estaba destinado para este uso). Desde que empecé a usar AndroidAPS con mi bomba, no he tocado la bomba, excepto cuando tengo que cambiar el reservorio, y esta es la forma en que AndroidAPS debe ser utilizado.

### Registro

Dado que el controlador Medtronic es muy nuevo, es necesario habilitar el registro, de modo que podamos depurar y arreglar problemas, si se producen. Haga clic en el icono de la esquina superior izquierda, seleccione Mantenimiento y Configuración de registro. Las opciones Pump, PumpComm, PumpBTComm tienen que ser seleccionadas.

### RileyLink/GNARL

Cuando reinicia RileyLink o GNARL, tiene que hacer una nueva Sintonía (acción "Despertar y Sintonizar") o reenviar los parámetros de comunicación (acción "Restablecer la configuración de RileyLink"), de otra forma la comunicación fallará.

### MCG

Medtronic MCG NO está soportado actualmente.

### Uso manual de la bomba

Debe evitar realizar manualmente las cosas en su bomba. Todos los comandos (bolus, basales temporales) deben ir a través de AndroidAPS, pero si ocurre que efectúe comandos manuales, NO ejecute comandos con frecuencia inferior a 3 minutos (así que si hace 2 bolos (por cualquier razón), el segundo debe iniciarse por lo menos 3 minutos después del primero).

## Cambios de zona horaria y DST (Hora extra solar) o viajando con bomba Medtronic y AndroidAPS

Lo importante a recordar es que nunca debes deshabilitar el lazo cuando estás viajando (a menos que tu MCG no pueda activar la modalidad fuera de línea). AAPS detectará automáticamente los cambios de zona horaria y enviará el comando a la bomba para cambiar la hora cuando cambie la hora en el teléfono.

Ahora, si viaja hacia el este y su zona horaria cambia con la adición de horas (por ejemplo: from GMT+0 to GMT+2), pump history won't have problem and you don't have to worry... pero si viaja hacia el oeste y la zona horaria cambia eliminando horas (GMT +2 a GMT -0), la sincronización puede ser poco fiable. En texto simple, eso significa que para las próximas x horas tendrá que ser cuidadoso, porque su IOB, podría ser un poco raro.

Somos conscientes de este problema, y ya estamos buscando la posible solución (ver https://github.com/andyrozman/RileyLinkAAPS/issues/145), pero por ahora, tenga esa información en mente cuando viaja.

## Preguntas frecuentes

### ¿Puedo ver el nivel de batería erá de RileyLink/GNARL?

No. En este momento ninguno de estos dispositivos soporta esto y probablemente no lo hará en el futuro.

### ¿Es GNARL un sustituto totalmente equivalente de RileyLink?

Sí. El autor de GNARL añadió todas las funciones utilizadas por el controlador Medtronic. Se da soporte a toda la comunicación Medtronic (en el momento de la escritura (junio/2019). GNARL no se puede utilizar para la comunicación de Omnipod. La contra cara de GNARL es que tiene que construirlo usted mismo, y tiene que tener una versión compatible de hardware.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

### ¿Dónde puedo obtener RileyLink o GNARL?

Como se mencionó antes se pueden obtener dispositivos aquí:

- RileyLink - Puede obtener el dispositivo aquí-[getrileylink.org](https://getrileylink.org/).
- GNARL-Puede obtener información aquí, pero el dispositivo debe soliciarse en otro lugar ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### ¿Qué hacer si pierdo la conexión con RileyLink y/o bomba?

1. Ejecute la acción "Despertar y Sintonizar", esta tratará de encontrar la frecuencia correcta para comunicarse con la bomba.
2. Inhabilite Bluetooth, espere 10s y vuelva a habilitarlo. Esto obligará a reconectar a RileyLink.
3. Restablezca(Reset) RileyLink, después de esta acción y no olvide ejecutar la acción "Restablecer configuración de RileyLink".
4. Pruebe 3 y 2 juntos.
5. Restablecer a RileyLink y reinicializar el teléfono.

### Cómo determinar qué frecuencia utiliza mi bomba

![Modelo de bomba](../images/Medtronic06.png)

Si giras tu bomba, la primera línea en el lado derecho, verás un código especial de 3 letras. Las dos primeras letras determinan el tipo de frecuencia y el último determina el color. A continuación se muestran los valores posibles para la Frecuencia:

- NA-América del Norte (en la selección de frecuencia se debe seleccionar "US & Canada (916 MHz)")
- CA-Canadá (en la selección de frecuencia se debe seleccionar "US & Canada (916 MHz)")
- WW-Todo el mundo (en la selección de frecuencia se debe seleccionar "Worldwide (868 Mhz)")