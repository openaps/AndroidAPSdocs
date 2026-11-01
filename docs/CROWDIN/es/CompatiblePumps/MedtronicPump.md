# Bombas Medtronic

El controlador no funciona con ningún modelo más nuevo, incluidos todos los modelos que terminan en G (530G, serie 600 [630G, 640G, 670G], serie 700 [770G, 780G], etc.).

Las siguientes combinaciones de modelo y firmware son compatibles:

- 512/712 (cualquier versión de firmware)
- 515/715 (cualquier versión de firmware)
- 522/722 (cualquier versión de firmware)
- 523/723 (firmware 2.4A o inferior)
- 554/754 versión para Europa (firmware 2.6A o inferior)
- 554/754 versión de Canadá (firmware 2.7A o inferior)

Puedes ver cómo comprobar el firmware de las bombas en la [documentación de OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) o en [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

    {contents} Índice
    :depth: 1
    :local: true

## Funciones de la bomba con AAPS

* Necesita un dispositivo compatible con RileyLink para comunicarse con **AAPS**.
* Gestión automática del horario de verano (DST) y de la zona horaria.

## Requisitos de hardware y software

- **Teléfono:** El controlador de Medtronic debería funcionar con cualquier teléfono Android que admita conexiones Bluetooth. **IMPORTANTE: Cada fabricante de teléfonos implementa el Bluetooth a su manera, así que el comportamiento de cada modelo de teléfono puede variar. Por ejemplo, algunos teléfonos activan y desactivan el Bluetooth de forma diferente. Esto puede afectar a tu experiencia de uso cuando AAPS necesita volver a conectarse a tu dispositivo tipo Rileylink.**
- **Dispositivo compatible con RileyLink:** Los teléfonos Android no pueden comunicarse con las bombas Medtronic sin un dispositivo aparte que gestione la comunicación. Este dispositivo se conecta con tu teléfono por Bluetooth y con tu bomba por una conexión de radio compatible. El primer dispositivo de este tipo se llamó Rileylink, pero ahora hay otras opciones que pueden ofrecer funciones adicionales.
    
    - Rileylink, disponible en [getrileylink.org](https://getrileylink.org/product/rileylink916)
    - Orangelink, disponible en [getrileylink.org](https://getrileylink.org/product/orangelink)
    - Emalink (varios modelos), disponible en [github.com](https://github.com/sks01/EmaLink)
    - Gnarl (requiere algo más de trabajo DIY), detalles en [github.com](https://github.com/ecc1/gnarl)

Hay una tabla comparativa de los distintos dispositivos compatibles con Rileylink en [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart)

(MedtronicPump-configuration-of-the-pump)=

## Configuración de la bomba

Los siguientes ajustes se deben configurar en la bomba para que AAPS pueda enviar comandos a distancia. Los pasos para hacer cada cambio en una Medtronic 715 se muestran entre paréntesis en cada ajuste. Los pasos exactos pueden variar según el tipo de bomba y/o la versión de firmware.

- **Activar el modo remoto en la bomba** (en la bomba pulsa Act y ve a Utilities -> Remote Options, selecciona On y, en la siguiente pantalla, usa Add ID y añade cualquier ID al azar, por ejemplo 111111). Debe haber al menos un ID en la lista Remote ID para que la bomba espere comunicación remota.
- **Configurar la basal máxima** (en la bomba pulsa Act y ve a Basal y luego selecciona Max Basal Rate). Por ejemplo, si este valor es cuatro veces tu tasa basal estándar máxima, se permite una tasa basal temporal del 400 %. El valor máximo que permite la bomba es 34,9 unidades por hora.
- **Configurar el bolo máximo** (en la bomba pulsa Act y ve a Bolus y luego selecciona Max Bolus). Es el bolo más grande que la bomba aceptará. El valor máximo que permite la bomba es 25.
- **Configurar el perfil como Standard**. (En la bomba pulsa Act y ve a Basal y luego a Select Patterns) La bomba solo necesita un perfil, porque AAPS gestiona los diferentes perfiles en tu teléfono. No se necesitan otros patrones.
- **Configurar el tipo de basal temporal** (en la bomba pulsa Act y ve a Basal y luego a Temp Basal Type). Selecciona Absolute (no Percent).

## Configuración de Medtronic en el teléfono/AAPS

- **No emparejes el dispositivo compatible con RileyLink desde el menú Bluetooth de tu teléfono.** Si lo emparejas desde el menú Bluetooth del teléfono, AAPS no podrá ver tu dispositivo compatible con Rileylink cuando sigas las instrucciones de abajo.
- Desactiva la rotación automática de la pantalla en tu teléfono. En algunos dispositivos, la rotación automática de la pantalla hace que las sesiones Bluetooth se reinicien, lo que causaría problemas con tu bomba Medtronic. 
- Hay dos formas de configurar tu bomba Medtronic en AAPS:

1. Usar el asistente de configuración en una instalación nueva
2. En **Configuración** > **Bomba**, seleccionando **Medtronic**
    
    ![Configuración > Bomba con el complemento Medtronic](../images/v4/Configuration/configuration_pump_list_3.png)
    
    Una vez seleccionado, la tarjeta **Medtronic** muestra dos botones, **Ajustes** y **Abrir complemento**:
    
    ![El complemento Medtronic seleccionado en Configuración > Bomba](../images/v4/Pumps/medtronic_enabled.png)
    
    **Ajustes** abre los ajustes del controlador de Medtronic:
    
    ![Ajustes del controlador de Medtronic](../images/v4/Pumps/medtronic_settings.png)
    
    **Abrir complemento** (o **Administrar** > **Bomba**) abre la pantalla de la bomba Medtronic. Antes de emparejar una bomba, se ve así:
    
    ![Pantalla de la bomba Medtronic antes del emparejamiento](../images/v4/Pumps/medtronic_pump_screen.png)

Al configurar tu bomba Medtronic con el asistente de configuración, es posible que no puedas completar la configuración por problemas de Bluetooth (p. ej., no logras conectar con la bomba). Si esto ocurre, selecciona la opción de bomba virtual para completar la configuración y poder seguir buscando el problema con la opción 2.

Al configurar AAPS para que funcione con tu bomba Medtronic, debes configurar lo siguiente en **Ajustes** (ver la imagen de los ajustes más arriba):

- **Número de serie de la bomba**: Aparece en la parte trasera de tu bomba y empieza por SN. Introduce solo los 6 números que se muestran, sin letras (p. ej., 123456).
- **Tipo de bomba**: El modelo de bomba que usas (p. ej., 522). 
- **Frecuencia de la bomba**: Hay dos opciones, según el lugar donde se distribuyó originalmente tu bomba. Please check the [FAQ](#MedtronicPump-faq) if you are unsure which option to select: 
    - para «US & Canada», la frecuencia usada es 916 MHz
    - para «En todo el mundo», la frecuencia usada es 868 MHz
- **Basal máxima en la bomba (U/h)**: Debe coincidir con el valor configurado en tu bomba (ver «Configuración de la bomba» más arriba). De nuevo, debes elegir este ajuste con cuidado, porque determina cuánta insulina puede administrar AAPS mediante tu tasa basal. En la práctica, esto establece la tasa basal temporal máxima. Por ejemplo, si este valor es cuatro veces tu tasa basal estándar máxima, se permite una tasa basal temporal del 400 %. El valor máximo que permite la bomba es 34,9 unidades por hora.
- **Bolo máximo en la bomba (U)** (en una hora): Debe coincidir con el valor configurado en tu bomba (ver «Configuración de la bomba» más arriba). Piensa bien este ajuste, porque determina el bolo más grande que AAPS puede administrar.
- **Retraso antes de que el bolo se inicie (s)**: El número de segundos que pasan desde que se pide un bolo hasta que el comando se envía de verdad a la bomba. Este tiempo te permite cancelar el bolo si se envió un comando de bolo por error. No es posible cancelar desde AAPS un bolo que ya ha empezado. La única forma de cancelar un bolo que ya ha empezado es suspender la bomba manualmente y después reanudarla.
- **Medtronic Encoding**: Determines where the Medtronic encoding is carried out (hardware or software). Es preferible seleccionar la codificación por hardware (es decir, la hace el dispositivo compatible con RileyLink), porque así se envían menos datos. Seleccionar la codificación por software (es decir, la hace AAPS) puede ayudar si hay desconexiones frecuentes. Este ajuste se ignora si tienes la versión de firmware 0.x en los dispositivos RileyLink.
- **Tipo de batería (Power View)**: Para calcular bien el nivel de batería restante, debes seleccionar el tipo de pila AAA que usas. Si se selecciona un valor distinto de la vista simple, AAPS muestra el porcentaje de batería restante calculado y los voltios. Están disponibles las siguientes opciones:
    
    - No seleccionado (Vista simple)
    - Alcalina (vista extendida)
    - Litio (vista extendida)
    - NiZn (vista ampliada)
    - NiMH (vista extendida)
- **Usar escaneo**: Activa la búsqueda Bluetooth antes de conectar con tus dispositivos compatibles con Rileylink. Esto debería mejorar la fiabilidad de la conexión con el dispositivo.

- **Mostrar el nivel de batería notificado por OrangeLink/EmaLink/DiaLink**: Esta función solo es compatible con dispositivos de enlace más nuevos, como EmaLink u OrangeLink. El valor se muestra como **Batería RileyLink** en la pantalla de la bomba Medtronic.
- **Establecer basales temporales neutras**: Por defecto, las bombas Medtronic pitan a cada hora en punto cuando hay una tasa basal temporal activa. Activar esta opción puede ayudar a reducir el número de pitidos, porque interrumpe la basal temporal en el cambio de hora para evitar el pitido.

(pairing-your-rileylink-compatible-device)=

### Emparejar tu dispositivo compatible con RileyLink

Tu dispositivo compatible con RileyLink se empareja desde la pantalla de la bomba Medtronic, no desde el menú Bluetooth de tu teléfono:

- Abre la pantalla de la bomba (**Administrar** > **Bomba**, o **Abrir complemento** en la tarjeta Medtronic en **Configuración** > **Bomba**).
- Toca **Emparejar RileyLink**. **AAPS** busca dispositivos compatibles con RileyLink cercanos.
- Toca tu dispositivo en la lista. Cuando aparezca **RileyLink emparejado correctamente**, toca **Ok**.

## Pantalla de la bomba Medtronic

Para abrir la pantalla de la bomba Medtronic, ve a **Administrar** > **Bomba**. La pantalla de la bomba muestra la información actual del estado de la bomba junto con algunas acciones específicas de Medtronic (ver la imagen de la pantalla de la bomba más arriba).

- **Estado RileyLink**: El estado actual de la conexión entre tu teléfono y el dispositivo compatible con RileyLink. Debería mostrar Conectado en todo momento. Cualquier otro estado puede requerir que intervengas. 
- **Batería RileyLink**: El nivel de batería actual de tu dispositivo EmaLink u OrangeLink. Solo se muestra si **Mostrar el nivel de batería notificado por OrangeLink/EmaLink/DiaLink** está activado en los ajustes de Medtronic.
- **Estado de la bomba**: El estado actual de la conexión con la bomba. Como la bomba no está conectada todo el tiempo, normalmente se mostrará el icono de reposo. Hay otros estados posibles, como «Iniciando» cuando AAPS intenta enviar un comando, u otros comandos posibles de la bomba como «Obtener hora», «Establecer TBR», etc.
- **Batería**: Muestra el estado de la batería según el valor elegido en **Tipo de batería (Power View)** en los ajustes de Medtronic.
- **Última conexión**: Hace cuánto tiempo fue la última conexión correcta con la bomba.
- **Último bolo**: Hace cuánto tiempo se administró correctamente el último bolo.
- **Tasa basal programada**: Es la tasa basal que se administra en la bomba a esta hora según tu perfil activo.
- **Basal temporal**: La basal temporal que se está administrando ahora, que puede ser de 0 unidades por hora.
- **Reservorio**: Cuánta insulina hay en el reservorio (se actualiza al menos cada hora).
- **Errores**: Texto de error si hay un problema (sobre todo aparece si hay un error en la configuración).

En la parte inferior de la pantalla están estos botones:

- **Actualizar** sirve para actualizar el estado actual de la bomba. Solo debes usarlo si la conexión se perdió durante mucho tiempo, porque requiere una actualización completa de los datos (recuperar el historial, obtener/establecer la hora, obtener el perfil, obtener el estado de la batería, etc.).
- **Emparejar RileyLink**: Busca y empareja tu dispositivo compatible con RileyLink (ver [más arriba](#pairing-your-rileylink-compatible-device)).
- **Historial de la bomba**: Muestra el historial de la bomba (ver [más abajo](#MedtronicPump-pump-history)).
- **Estadísticas del RL**: Muestra las estadísticas del RL (ver [más abajo](#MedtronicPump-rl-status-rileylink-status)).
- **Encender y ajustar** y **Restablecer RileyLink**: Ver [Acciones](#medtronic-actions) más abajo.
- **Borrar el bloque de bolo**: Solo se muestra durante un tiempo corto después de un bolo, mientras **AAPS** espera a que la bomba termine de administrarlo. Al tocarlo, se termina esta espera.

(MedtronicPump-pump-history)=

## Historial de la bomba

![Pantalla del historial de la bomba con sus botones de filtro](../images/Medtronic03.png)

El historial de la bomba se recupera cada 5 minutos y se guarda localmente. Solo se guarda el historial de las últimas 24 horas. Así puedes ver fácilmente el comportamiento de la bomba si lo necesitas. Solo se guardan los elementos importantes para AAPS; no se incluyen funciones de configuración que no son relevantes.

Toca **Historial de la bomba** en la pantalla de la bomba para abrirlo. Por defecto está seleccionado **Todo**. Toca uno de los botones de filtro de arriba (por ejemplo **Bolos**, **Basales** o **Alarmas**) para mostrar solo un tipo de entrada.

(MedtronicPump-rl-status-rileylink-status)=

## Estado de RL (Estado de RileyLink)

![Estado de RileyLink - Ajustes](../images/Medtronic04.png) ![Estado de RileyLink - Historial](../images/Medtronic05.png)

El diálogo de estado de RL tiene dos pestañas:

- **Ajustes**: Muestra ajustes del dispositivo compatible con RileyLink: dirección configurada, dispositivo conectado, estado de conexión, error de conexión y versiones de firmware de RileyLink. El tipo de dispositivo siempre es Bomba Medtronic, el modelo es el de tu bomba, el número de serie es el número de serie configurado, la frecuencia de la bomba muestra qué frecuencia usas y la última frecuencia es la última frecuencia usada.
- **Historial**: Muestra el historial de comunicación. Los elementos con RileyLink muestran los cambios de estado de RileyLink y los elementos con Medtronic muestran qué comandos se enviaron a la bomba.

(medtronic-actions)=

## Acciones

Cuando se usa el controlador de Medtronic, hay dos acciones adicionales en la pantalla de la bomba (**Administrar** > **Bomba**):

- **Encender y ajustar** - Si AAPS no se ha conectado a tu bomba durante mucho tiempo (debería conectarse cada 5 minutos), puedes forzar un ajuste (Tune Up). Esto intenta contactar con tu bomba buscando en todas las frecuencias de radio que puede usar tu bomba. Si se logra una conexión, la frecuencia que funcionó se guarda como predeterminada. Mientras se hace el ajuste, el estado de RileyLink en la pantalla de la bomba lo muestra. Si un ajuste falla (por ejemplo, porque la bomba estaba fuera de alcance), **AAPS** lo vuelve a intentar solo, aproximadamente cada 10 minutos.
- **Restablecer RileyLink** - Si restableces tu dispositivo compatible con RileyLink, puede que necesites usar esta acción para que el dispositivo se vuelva a configurar (frecuencia, tipo de frecuencia y codificación).

## Notas importantes

### Se necesita especial atención en la configuración de NS

AAPS usa el número de serie para la sincronización y el número de serie queda visible en NS. Alguien que conozca el número de serie de una bomba Medtronic antigua puede usarlo para controlar la bomba a distancia. Por eso, protege bien tu sitio de NS para evitar que se filtre el número de serie de tu bomba. Consulta https://nightscout.github.io/nightscout/security/

### Usuarios de OpenAPS

Los usuarios de OpenAPS deben saber que AAPS con Medtronic usa un enfoque completamente diferente al de OpenAPS. Con AAPS, la forma principal de interactuar con la bomba es a través de tu teléfono. En el uso normal, probablemente solo necesitarás usar el menú de la bomba al cambiar el reservorio. Esto es muy diferente al uso de OpenAPS, donde normalmente al menos parte de un bolo se administra con los botones de bolo rápido. Si se usa la bomba para administrar un bolo manualmente, puede haber problemas si AAPS intenta administrar uno al mismo tiempo. Hay comprobaciones para intentar evitar problemas en estos casos, pero aun así debes evitarlo siempre que sea posible.

### Registro

Si necesitas solucionar problemas de tu bomba Medtronic, selecciona el icono de menú en la esquina superior izquierda de la pantalla y luego Mantenimiento y Ajustes de registro. Para solucionar cualquier problema con Medtronic, revisa Pump, PumpComm y PumpBTComm.

### MCG de Medtronic

El MCG de Medtronic NO es compatible por ahora.

### Uso manual de la bomba

Evita poner bolos o basales temporales (TBR) manualmente en tu bomba. Todos estos comandos se deben enviar desde AAPS. Si se usan comandos manuales, debe haber al menos 3 minutos entre ellos para reducir el riesgo de problemas.

### Cambios de zona horaria y horario de verano (DST) o viajar con la bomba Medtronic y AAPS

AAPS detecta automáticamente los cambios de zona horaria y actualiza la hora de la bomba cuando tu teléfono cambia a la nueva hora.

Viajar hacia el este significa que añades horas a la hora actual (p. ej. de GMT+0 a GMT+2), lo que no causa problemas porque no hay solapamiento (p. ej., no es posible tener la misma hora dos veces). Sin embargo, viajar hacia el oeste puede causar problemas, porque en la práctica vuelves atrás en el tiempo, lo que puede producir datos IOB incorrectos.

Los desarrolladores conocen los problemas al viajar hacia el oeste y se está trabajando en una posible solución. Consulta https://github.com/andyrozman/RileyLinkAAPS/issues/145 para más detalles. Por ahora, ten en cuenta que este problema puede ocurrir y vigila con cuidado cuando cambies de zona horaria.

### ¿Es GNARL un dispositivo totalmente compatible con Rileylink?

El código GNARL admite por completo todas las funciones que usa el controlador de Medtronic en AAPS, así que es totalmente compatible. Ten en cuenta que esto requiere trabajo adicional, porque tendrás que conseguir hardware compatible y después cargar el código GNARL en el dispositivo.

**Nota del autor:** Ten en cuenta que el software GNARL todavía es experimental y está poco probado, y no se debe considerar tan seguro de usar como un RileyLink.

(MedtronicPump-faq)=

## Preguntas frecuentes

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### ¿Qué hago si pierdo la conexión con RileyLink y/o la bomba?

Hay varias opciones para intentar resolver los problemas de conexión.

- Toca **Encender y ajustar** en la pantalla de la bomba (**Administrar** > **Bomba**), como se explica más arriba.
- Desactiva el Bluetooth en tu teléfono, espera 10 segundos y vuelve a activarlo. Esto obliga al dispositivo Rileylink a volver a conectarse al teléfono.
- Restablece el dispositivo Rileylink. Después debes tocar **Restablecer RileyLink** en la pantalla de la bomba (**Administrar** > **Bomba**).
- Otros usuarios han visto que los siguientes pasos ayudan a recuperar la conexión cuando otros métodos no han funcionado: 
    1. Reinicia el teléfono
    2. *Mientras* el teléfono se reinicia, reinicia el dispositivo Rileylink
    3. Abre AAPS y deja que la conexión se restablezca

### Cómo determinar qué frecuencia utiliza mi bomba

![Modelo de bomba](../images/Medtronic06.png)

En la parte trasera de la bomba hay una línea con tu número de modelo junto con un código especial de 3 letras. Las dos primeras letras determinan el tipo de frecuencia y la última determina el color. A continuación se muestran los valores posibles para la Frecuencia:

- NA - Norteamérica (en la selección de frecuencia debes seleccionar «US & Canada (916 MHz)»)
- CA - Canadá (en la selección de frecuencia debes seleccionar «US & Canada (916 MHz)»)
- WW - En todo el mundo (en la selección de frecuencia debes seleccionar «En todo el mundo (868 Mhz)»)

(MedtronicPump-pump-unreachable)=

### Cómo solucionar el error «bomba no alcanzable»

Algunas bombas Medtronic muestran el error «bomba no alcanzable» después de una actualización de **AAPS**. Para solucionarlo, cambia el tipo de codificación:

1. Ve a **Configuración** > **Bomba** y toca **Ajustes** en la tarjeta **Medtronic**.
2. Configura **Codificación Medtronic** como **Codificación de hardware 4b6b**.

## Dónde obtener ayuda

El desarrollo del controlador de Medtronic lo hace la comunidad de forma **voluntaria**. Antes de pedir ayuda:

1. **Lee** la sección de esta documentación sobre el tema para confirmar cómo debe funcionar la función.
2. **Pregunta** en el canal *#AAPS* de [Discord](https://discord.gg/4fQUWHZ4Mw) o en uno de los otros [canales de la comunidad](../GettingHelp/WhereCanIGetHelp.md).
3. **Informa de un error**: busca primero en las [issues existentes](https://github.com/nightscout/AndroidAPS/issues); si el tuyo no aparece, abre una [nueva issue](https://github.com/nightscout/AndroidAPS/issues) y adjunta tus [archivos de registro](../GettingHelp/AccessingLogFiles.md).

Cuando pidas ayuda, indica la marca y el modelo de tu teléfono, la versión de Android, la versión de **AAPS** y una descripción sencilla del problema (qué cambió, cuándo funcionó por última vez).