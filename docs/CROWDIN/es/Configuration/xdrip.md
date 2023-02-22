# Configuración de xDrip+

(For additional information regarding xDrip+, please refer to https://xdrip.readthedocs.io/en/latest/)

If not already set up then download [xDrip+](https://jamorham.github.io/#xdrip-plus).

**This documentation is for xDrip+ for Android only.** There is an app "xDrip for iOS" that has nothing to do with the original xDrip+ for Android.

For G6 transmitters manufactured after fall/end of 2018 (i.e. serial no. starting with 80 or 81) you can use the [master](https://jamorham.github.io/#xdrip-plus) version.

Si el número de serie de su transmisor Dexcom G6 is starting with 8G..., 8H... or 8J... use one of the [latest nightly builds](https://github.com/NightscoutFoundation/xDrip/releases).

If your phone runs Android 10 and you have difficulties with xDrip+ master try [nightly build 2019/12/31 or later](https://github.com/NightscoutFoundation/xDrip/releases).

## Configuración básica para todos los medidores contínuos (CGM), sistemas CGM puros o sistemas flash (FGM)

* Make sure to set Base URL correctly including **S** at the end of http**s**:// (not http://)
   
   Por ejemplo, https://TU_API_SECRET@nombre_de_tu_app.herokuapp.com/api/v1/
   
   -> Pulsa en la hamburguesa (menú con tres líneas de la parte superior izquierda de la pantalla) -> Configuración-> Subir a la nube-> Sincronización con Nightscout (REST-API) -> URL base

* Deactivate `Automatic Calibration` If the checkbox for `Automatic Calibration` is checked, activate `Download data` once, then remove the checkbox for `Automatic Calibration` and deactivate `Download data` again, otherwise the treatments (insulin & carbs) will be added twice to Nightscout.

* Pulsa `Opciones adicionales`

* Desactiva `Cargar tratamientos` y `Rellenar datos`.
   
   **Advertencia de seguridad: Debes desactivar "Cargar tratamientos" en xDrip+, de lo contrario, si los tratamientos se duplican pueden dar lugar a cifras erróneas de insulina activa (IOB) y carbohidratos activos (COB) en en AAPS.**

* La opción `Alerta de fallos` también debe desactivarse. De lo contrario, recibirás una alarma cada 5 minutos si la red wifi/móvil es demasiado mala o si el servidor no está disponible.
   
   ![xDrip+ Ajustes Básicos 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Ajustes Básicos 2](../images/xDrip_Basic2.png)

* **InterApp-Settings** (Broadcast) If you are going to use AndroidAPS and the data should be forwarded to i.e. AndroidAPS you have to activate broadcasting in xDrip+ in Inter-App settings.

* Para que los valores sean consistentes, debes activar `Enviar el valor de glucosa visualizado`.

* If you have also activated `Accept treatments` and "Enable local Broadcasts" in AndroidAPS, then xDrip+ will receive insulin, carbs and basal rate information from AndroidAPS and can estimate the hypo prediction etc. con mayor precisión.
   
   ![xDrip+ Ajustes Básicos 3](../images/xDrip_Basic3.png)

(identify-receiver)=

### Identificar receptor

* If you discover problems with local broadcast (AAPS not receiving BG values from xDrip+) go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps` for AndroidAPS build (if you are using PumpControl build, please enter `info.nightscout.aapspumpcontrol` instead!!).
* Importante: la corrección automática a veces tiende a cambiar la "i" de "info" por una mayúscula. You **must use only lowercase letters** when typing `info.nightscout.androidaps` (or `info.nightscout.aapspumpcontrol` for PumpControl). Capital I would prevent the App from receiving BG values from xDrip+.
   
   ![xDrip+ Inter-app Ajustes Básicos Identificar receptor](../images/xDrip_InterApp_NS.png)

## xDrip+ & Dexcom G6

* El transmisor Dexcom G6 puede conectarse simultáneamente al receptor Dexcom (o alternativamente a la bomba t:slim) y a una aplicación en tu teléfono.
* Para usar xDrip+ como receptor, desinstala primero la aplicación Dexcom. **No se puede conectar al mismo tiempo la aplicación xDrip+ y Dexcom con el transmisor.**
* If you need Clarity and want to profit from xDrip+ alarms use the [Build Your Own Dexcom App](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip+.

### La versión de xDrip+ a utilizar depende del número de serie de los transmisores G6.

* For G6 transmitters manufactured after fall/end of 2018 (i.e. serial no. a partir de 80 o 81) puede utilizar la versión [master](https://jamorham.github.io/#xdrip-plus). 
* Si el número de serie de su transmisor Dexcom G6 is starting with 8G, 8H or 8J try [nightly build 2019/07/28 or later](https://github.com/NightscoutFoundation/xDrip/releases).

### Ajustes específicos de Dexcom

* Open G5/G6 Debug Settings -> Hamburger Menu (top left of homescreen) -> Settings -> G5/G6 Debug Settings ![Abrir los ajustes de xDrip+](../images/xDrip_Dexcom_SettingsCall.png)

* Habilite los siguientes parámetros
   
   * `Usar el Colector OB1`
   * `Algoritmo nativo` (importante si desea utilizar SMB)
   * `Soporte G6`
   * `Permitir desvinculación de OB1`
   * `Permitir a OB1 iniciar la vinculación`
* Todas las demás opciones deben ser desactivados
* Ajuste el nivel de aviso de la batería a 280 (parte inferior de los valores de depuración G5/G6)
   
   ![ajustes de depuración de xDrip+ G5/G6](../images/xDrip_Dexcom_DebugSettings.png)

### No se recomiendan reinicios preventivos

**With Dexcom transmitters who's serial no. is starting with 8G, 8H or 8J preemptive restarts do not work and might kill the sensor completely!**

The automatic extension of Dexcom sensors (`preemptive restarts`) is not recommended as this might lead to “jumps” in BG values on day 9 after restart.

![xDrip+ Jump after Preemptive Restart](../images/xDrip_Dexcom_PreemptiveJump.png)

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of:

* Si estás usando los datos nativos con el código de calibración en xDrip+ o Spike, la cosa más segura es no permitir reinicios preventivos del sensor.
* Si debe usar reinicio preventivo, a continuación, asegúrese de insertar una hora del día donde puede observar el cambio y calibrar si es necesario. 
* Si está reiniciando sensores, o bien haga esto sin la calibración de fábrica para obtener resultados más seguros en los días 11 y 12, o asegúrate de que estás listo para calibrar y vigilar la variación.
* La preabsorción del G6 con calibración de fábrica es probable que dé variaciones en los resultados. Si haces preconfiguración, entonces para obtener los mejores resultados, probablemente necesitarás calibrar el sensor.
* Si no estás observando los cambios que pueden estar teniendo lugar, puede ser mejor volver al modo no calibrado en fábrica y usar el sistema como un G5.

To learn more about the details and reasons for these recommendations read the [complete article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](https://www.diabettech.com).

(connect-g6-transmitter-for-the-first-time)=

### Conectar el transmisor G6 por primera vez

**For second and following transmitters see [Extend transmitter life](#extend-transmitter-life) below.**

For G6 transmitters manufactured after fall/end of 2018 (i.e. serial no. a partir de 80 o 81) puede utilizar la versión [master](https://jamorham.github.io/#xdrip-plus).

Si el número de serie de su transmisor Dexcom G6 is starting with 8G, 8H or 8J try [nightly build 2019/07/28 or later](https://github.com/NightscoutFoundation/xDrip/releases).

* Desactive el receptor Dexcom original (si se utiliza).
* Pulse el icono xDrip+ en la gota de sangre de color rojo en la pantalla principal para habilitar el botón `Asistente de Origen`.
* Utilice el Botón Asistente de Origen que asegura la configuración predeterminada incluyendo OB1 & Modo Nativo 
   * Esto le guiará a través de la configuración inicial.
   * necesitará el número de serie del transmisor si es la primera vez que lo utiliza.

* Ponga el número de serie del nuevo transmisor (en el envase del transmisor o en la parte posterior del transmisor). Be careful not to confuse `0` (zero) and `O` (capital letter o).
   
   ![xDrip+ Dexcom número de serie del Transmisor](../images/xDrip_Dexcom_TransmitterSN.png)

* Insertar nuevo sensor (sólo si se sustituye)

* Coloque el transmisor en el sensor
* If a message pops up asking to pair with "DexcomXX", where "XX" is the last two characters of the transmitter's serial no., accept it (tap "pair")
* No inicie un nuevo sensor antes de que se muestre la información siguiente en la página de estado clásica-> G5/G6 estado-> PhoneServiceState:
   
   * Transmisor con número de serie que empieza por 80 o 81: "Obtiene datos hh:mm" (por ejemplo, "Obtiene datos 19:04")
   * Transmitter serial starting with 8G, 8H or 8J: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got no raw 19:04")
   
   ![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Iniciar sensor (sólo si se reemplaza)
   
   -> Cerca de la parte inferior de la pantalla `Iniciando x, x horas faltantes` debe aparecer después de unos pocos minutos.

-> If your transmitter serial no. does not start with 8G, 8H or 8J and there is no time specification after a few minutes stop and restart the sensor.

* Reiniciar el colector (estado del sistema - si no se reemplaza el sensor}
* No encienda el receptor original de Dexcom (si lo utiliza) de nuevo antes de xDrip+ muestre las primeras lecturas.
* Pulse el icono xDrip+ de goteo de sangre de color rojo en la pantalla principal para inhabilitar el `Botón Asistente de origen`.
   
   ![xDrip+ Dexcom Transmisor 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmisor 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmisor 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmisor 4](../images/xDrip_Dexcom_Transmitter04.png)

(transmitter-battery-status)=

### Estado de la batería de Transmisor

* El estado de la batería se puede controlar en el estado del sistema (menú Hamburguesa en la parte superior izquierda de la pantalla de inicio)
* Swipe left once to see second screen. ![xDrip+ First Transmisor 4](../images/xDrip_Dexcom_Battery.png)

* No se conocen los valores exactos cuando el transmisor "muere" debido a una batería vacía. La información siguiente se publicó en línea después de que el transmisor "murió":
   
   * Publicación 1: Día de transmisión: 151 / Voltaje A: 297 / Voltaje B: 260 / Resistencia: 2391
   * Publicación 2: Días de transmisión: 249 / Voltaje A: 275 (en tiempo de falla)

### Extender vida del transmisor

* So far life cannot be extended for transmitters who's serial no. starts with 8G, 8H or 8J. Same is true for transmitters with serial no. starting with 81 and firmware 1.6.5.**27** (see xDrip+ System Status - G5/G6 status as shown in [screenshot above](../Configuration/xdrip.md#transmitter-battery-status)).
* Para evitar las dificultades iniciando los sensores, se recomienda encarecidamente extender la vida del transmisor antes del día 100 de la primera utilización.
* Use of transmitters serial no. starting with 81 and firmware 1.6.5.**27** beyond day 100 is only possible if [engineering mode](../Usage/Enabling-Engineering-Mode-in-xDrip) is turned on and 'native mode' is deactivated (hamburger menu -> settings -> G5/G6 debug settings -> native algorithm) because a transmitter hard reset is NOT possible.
* La sesión en ejecución del sensor se detendrá al ampliar la vida del transmisor. Así que, extienda antes del cambio de sensor o tenga en cuenta que habrá una nueva fase de inicialización de 2 h.
* Stop sensor manually via hamburger menu.
* Cambie a la `modo ingeniería`: 
   * pulsar sobre el carácter a la derecha de la pantalla de inicio de xDrip+ que representa una jeringa
   * luego toca el icono del micrófono en la esquina inferior derecha
   * En el recuadro de texto que abre escriba "enable engineering mode" 
   * pulse "Terminado"
   * Si el motor de Google Speak está habilitado, también puede hablar el comando de voz: "enable engineering mode". 
* Go to the G5 debug settings and make sure `Use the OB1 collector` is enabled.
* Utilice el mandato de voz: "hard reset transmitter"
* El comando de voz se ejecutará con la siguiente recepción de datos del transmisor
* Examine el estado del sistema (menú principal-> estado del sistema) y consulte lo que sucede
* After approx. 10 min. you can switch to 'Classic Status Page' (swipe right) and click 'Restart collector'. This will set sensor days to 0 without the need to start a new sensor.
* Alternative: If you see a message "Phone Service State: Hard Reset maybe failed" on second system status screen just start the sensor and this message should go away.
   
   ![xDrip+ El reseteo pudo haber fallado](../images/xDrip_HardResetMaybeFailed.png)

* Los días de Transmisor se establecerán en 0 después de la extensión y el inicio satisfactorios del sensor.

(replace-transmitter)=

### Sustituir transmisor

For G6 transmitters manufactured after fall/end of 2018 (i.e. serial no. a partir de 80 o 81) puede utilizar la versión [master](https://jamorham.github.io/#xdrip-plus).

Si el número de serie de su transmisor Dexcom G6 is starting with 8G, 8H or 8Juse one of the [latest nightly builds](https://github.com/NightscoutFoundation/xDrip/releases).

* Desactive el receptor Dexcom original (si se utiliza).
* Detener sensor (sólo si sustituye el sensor)
   
   Asegúrese de que realmente se ha detenido:
   
   En la segunda pantalla "Estado de G5/G6", mire a `Elementos de cola` aproximadamente en la mitad hacia abajo - Puede que diga algo como `(1) Detener sensor`
   
   Espere hasta que esto ocurra - normalmente en unos pocos minutos. El estado del sensor debe ser "Detenido" (consulte la captura de pantalla).
   
   -> Para quitar el transmisor sin detener el sensor ver este video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Detener sensor Dexcom 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Detener sensor Dexcom 2](../images/xDrip_Dexcom_StopSensor2.png)

* Forget device in xDrip+ system status AND in smartphone’s BT settings (Will be shown as Dexcom?? mientras ?? son los dos últimos dígitos del número de serie del transmisor)
   
   ![xDrip+ Olvidar dispositivo](../images/xDrip_Dexcom_ForgetDevice.png)

* Retire el transmisor (y el sensor si reemplaza el sensor)

* Coloque el transmisor antiguo lejos para evitar la reconexión. Un microondas es un escudo de Faraday perfecto para esto, pero desenchufa el cable de alimentación para estar seguro al 100% de que nadie lo encienda.
* Pulse el icono xDrip+ en la gota de sangre de color rojo en la pantalla principal para habilitar el botón `Asistente de Origen`.
* Utilice el Botón Asistente de Origen que asegura la configuración predeterminada incluyendo OB1 & Modo Nativo 
   * Esto le guiará a través de la configuración inicial.
   * Necesitará el número de serie del transmisor si es la primera vez que lo utiliza.
* Introducir el número de serie del transmisor nuevo. Tenga cuidado de no confundir 0 (cero) y O (letra o mayúscula).
* Insertar nuevo sensor (sólo si se sustituye).
* Coloque el transmisor en el sensor - **No iniciar el sensor inmediatamente!**
* Nuevos "Transmisores Firefly" (número de serie starting with 8G, 8H or 8J) can only be used in native mode.
* The following options must not be activated for new "Firefly Transmitters" (serial no. starting with 8G, 8H or 8J):
   
   * Reinicio preventivo (inhabilitar)
   * Reiniciar el sensor (deshabilitar!)
   * Fallback to xDrip+ (disable!)
   
   ![Configuración de los transmisores Firefly](../images/xDrip_Dexcom_FireflySettings.png)

* Check in Classic Status Page -> G5/G6 status -> PhoneServiceState if one of the following information is displayed:
   
   * Transmisor con número de serie que empieza por 80 o 81: "Obtiene datos hh:mm" (por ejemplo, "Obtiene datos 19:04")
   * Transmitter serial starting with 8G, 8H or 8J: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got now raw 19:04")
   
   ![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Espere 15 minutos ya que el transmisor debe comunicarse varias veces con xDrip antes de que se inicie el nuevo sensor. La batería de datos se muestra a continuación la información del Firmware.
   
   ![Datos de batería del transmisor firefly](../images/xDrip_Dexcom_FireflyBattery.png)

* ¡Inicie el sensor y NO PREDATE LA FECHA! Seleccione siempre "Sí, hoy"!

* Reiniciar el colector (estado del sistema - si no se reemplaza el sensor)
* No encienda el receptor original de Dexcom (si lo utiliza) de nuevo antes de xDrip+ muestre las primeras lecturas.
* Pulse el icono xDrip+ de goteo de sangre de color rojo en la pantalla principal para inhabilitar el `Botón Asistente de origen`.
   
   ![xDrip+ Dexcom Transmisor 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmisor 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmisor 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmisor 4](../images/xDrip_Dexcom_Transmitter04.png)

### Nuevo Sensor

* Desactive el receptor Dexcom original (si se utiliza).
* Detener sensor si es necesario
   
   Asegúrese de que realmente se ha detenido:
   
   En la segunda pantalla "Estado de G5/G6", mire a `Elementos de cola` aproximadamente en la mitad hacia abajo - Puede que diga algo como `(1) Detener sensor`
   
   Espere hasta que esto ocurra - normalmente en unos pocos minutos.
   
   ![xDrip+ Detener sensor Dexcom 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Detener sensor Dexcom 2](../images/xDrip_Dexcom_StopSensor2.png)

* Limpiar los contactos (lado trasero del transmisor) con alcohol y dejemos secar al aire.

* En caso de que utilice esta función, inhabilite `Reiniciar el sensor` y `Reinicios anticipados` (menú Hamburgesa-> Valores-> G5/G6 Depuración de valores). Si se pierda este paso y tiene estas funciones habilitadas, el nuevo sensor no se iniciará correctamente.
   
   ![xDrip+ Reinicio preventivo](../images/xDrip_Dexcom_Restart.png)

* Iniciar Sensor
   
   **Para los nuevos transmisores Firefly** (número de serie starting with 8G, 8H or 8J) **it is mandatory, for all other transmitters it is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen). NO PREDATE FECHAS!**

* Establecer tiempo insertado
   
   * Para utilizar el modo Nativo G6, debe esperar a que se inicie son 2 horas (por ejemplo, el tiempo de inserción es ahora).
   * Si utiliza el algoritmo xDrip+, puede establecer un tiempo anterior de más de 2 horas para evitar el inicio. Las lecturas pueden ser muy erráticas. Por lo tanto, esto no se recomienda.
* Introduzca el código del Sensor (en la lámina de papel de aluminio del sensor) 
   * Mantenga el código para futuras referencias (por ejemplo, un nuevo inicio después de que el transmisor haya tenido que eliminarse)
   * Code can also be found in [xDrip+ logs](../Configuration/xdrip.md#retrieve-sensor-code): Click 3-dots-menu on xDrip+ homescreen and choose `View Event Logs`.
* No se necesita ninguna calibración si utiliza G6 en "modalidad nativa". xDrip+ mostrará las lecturas automáticamente después del inicio de 2 horas.
* No encienda el receptor original de Dexcom (si lo utiliza) de nuevo, antes de que xDrip+ muestre las primeras lecturas.
   
   ![xDrip+ Inicio Dexcom Sensor 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Inicio Dexcom Sensor 2](../images/xDrip_Dexcom_SensorStart02.png)

(retrieve-sensor-code)=

### Recuperar código de sensor

* En el maestro fechado 2019/05/18 y las últimas Versiones el código del sensor se muestra en el estado del sistema (la parte superior del menú de Hamburgesa que queda en la pantalla de inicio).
* Deslizar la izquierda una vez para ver la segunda pantalla.
   
   ![xDrip+ Recuperar código2 sensor Dexcom](../images/xDrip_Dexcom_SensorCode2.png)

* El código de sensor de Dexcom también se puede encontrar en los registros de xDrip+.

* Pulse el menú de 3 puntos (parte superior derecha en la pantalla de inicio)
* Seleccione `Ver registros de sucesos` y busque "código"
   
   ![xDrip+ Recuperar código sensor Dexcom](../images/xDrip_Dexcom_SensorCode.png)

(troubleshooting-dexcom-g5-g6-and-xdrip)=

## Solución de problemas de Dexcom G5/G6 y xDrip+

### Problema al conectar el transmisor

* El transmisor debe mostrarse en la configuración bluetooth de su smartphone.
* El transmisor se muestra como Dexcom?? mientras ?? representan los dos últimos dígitos del número de serie del transmisor (por ejemplo, DexcomHY).
* Abrir el estado del sistema en xDrip+ (menú hamburguesa en la parte superior izquierda de la pantalla de inicio).
* Compruebe si el transmisor se muestra en la primera página de estado ('página de estado clásico').
* Si no, elimine el dispositivo de la configuración bluetooth de su smartphone y reinicie el recolector.
* Espere unos 5 minutos. hasta que el transmisor Dexcom se vuelva a conectar automáticamente.

### Problema al iniciar un nuevo sensor

Please note that the following method might likely not work if your Dexcom G6 transmitter's serial no. is starting with 8G, 8H or 8J.

* El sensor nativo se marca como "FAILED: Sensor Failed Start"
* Detener Sensor
* Reinicia tu dispositivo
* Iniciar el sensor con el código 0000 (cuatro veces cero)
* Espere 15 minutos
* Detener Sensor
* Iniciar sensor con el código "real" (impreso en el protector adhesivo)

Check in xDrip+ logs if xDrip+ starts counting "Duration: 1 minute" (and so on). Only in the xDrip+ logs you can detect at an early stage whether xdrip+ has stopped a sensor. Latest status is not always shown correctly on bottom of startscreen.

## xDrip+ & Freestyle Libre

### Libre configuración específica

* Open Bluetooth Settings -> Hamburger Menu (top left of homescreen) -> Settings -> scroll down -> Less common settings -> Bluetooth Settings
   
   ![xDrip+ Libre Configuración 1 de Bluetooth](../images/xDrip_Libre_BTSettings1.png)

* Habilite los siguientes parámetros
   
   * `Encender Bluetooth` 
   * `Usar escaneo`
   * `Siempre descubrir servicios`

* Todas las demás opciones deben ser desactivados
   
   ![xDrip+ Libre Configuración 2 de Bluetooth](../images/xDrip_Libre_BTSettings2.png)

### Libre smart reader battery level

* Battery level of smart readers such as MiaoMiao 2 can be displayed in AAPS.
* Details can be found on [screenshots page](../Getting-Started/Screenshots.md#sensor-level-battery).

### Connect Libre Transmitter & start sensor

![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)