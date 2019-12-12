# Configuración de xDrip+

Si todavía no lo has hecho, descarga [xDrip+](https://github.com/NightscoutFoundation/xDrip)

Para los transmisores G6 fabricados después de otoño/finales de 2018 (es decir, con números de serie que empiezan por 80 u 81) por favor, asegúrate de utilizar la versión [maestra fechada 2019/05/18 ](https://jamorham.github.io/#xdrip-plus) o posterior.

Si el número de serie de su transmisor Dexcom G6 empieza por 8G u 8H utiliza una de las [últimas compilaciones nocturnas](https://github.com/NightscoutFoundation/xDrip/releases).

## Configuración básica para todos los medidores contínuos (CGM), sistemas CGM puros o sistemas flash (FGM)

* Asegúrate de establecer la URL base correctamente utilizando **https://** y no http://
   
   Por ejemplo, https://TU_API_SECRET@nombre_de_tu_app.herokuapp.com/api/v1/
   
   -> Pulsa en la hamburguesa (menú con tres líneas de la parte superior izquierda de la pantalla) -> Configuración-> Subir a la nube-> Sincronización con Nightscout (REST-API) -> URL base

* Desactiva `Calibración automática` Si la caja de verificación `Automatic Calibration` está marcada, activa `Descargar datos` y a continuación desmarca la caja de verificación de `Calibración automática` y desactiva `Descargar datos` de nuevo, de lo contrario los tratamientos (insulina y carbohidratos) se añadirán dos veces a Nightscout.

* Pulsa `Opciones adicionales`

* Desactiva `Cargar tratamientos` y `Rellenar datos`.
   
   **Advertencia de seguridad: Debes desactivar "Cargar tratamientos" en xDrip+, de lo contrario, si los tratamientos se duplican pueden dar lugar a cifras erróneas de insulina activa (IOB) y carbohidratos activos (COB) en en AAPS.**

* La opción `Alerta de fallos` también debe desactivarse. De lo contrario, recibirás una alarma cada 5 minutos si la red wifi/móvil es demasiado mala o si el servidor no está disponible.
   
   ![xDrip+ Ajustes Básicos 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Ajustes Básicos 2](../images/xDrip_Basic2.png)

* **Configuración InterApps** Si vas a utilizar AndroidAPS es necesario activar <0>Difusión local</0> dentro de las opciones InterApps de xDrip+ para que los datos sean emitidos y AndroidAPS pueda leerlos.

* Para que los valores sean consistentes, debes activar `Enviar el valor de glucosa visualizado`.

* Si has activado `Aceptar tratamientos` en xDrip+ y <0>Difusión de datos</0> en AndroidAPS, entonces xDrip+ recibirá los datos de insulina, carbohidratos y dosis basal desde AndroidAPS para poder realizar predicciones de hipoglucemia, etc. con mayor precisión.
   
   ![xDrip+ Ajustes Básicos 3](../images/xDrip_Basic3.png)

### Identificar receptor

* Si descubres problemas con la difusión local (AAPS no recibe los valores de glucemia en sangre (BG) de xDrip+) ve a Ajustes > Ajustes InterApp > Identificar receptor y especifica `info.nightscout.androidaps`.
* Importante: la corrección automática a veces tiende a cambiar la "i" de "info" por una mayúscula. Debes utilizar **solo letras minúsculas** al escribir `info.nightscout.androidaps`. Las mayúsculas impedirían que AAPS recibiera valores de glucemia en sangre (BG) desde xDrip+.
   
   ![xDrip+ Inter-app Ajustes Básicos Identificar receptor](../images/xDrip_InterApp_NS.png)

## xDrip+ & Dexcom G6

* El transmisor Dexcom G6 puede conectarse simultáneamente al receptor Dexcom (o alternativamente a la bomba t:slim) y a una aplicación en tu teléfono.
* Para usar xDrip+ como receptor, desinstala primero la aplicación Dexcom. **No se puede conectar al mismo tiempo la aplicación xDrip+ y Dexcom con el transmisor.**
* Si necesitas utilizar Clarity (app Dexcom) y quieres beneficiarte de las alarmas de xDrip+ utiliza la [aplicación Dexcom parcheada](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app) y la opción de difusión local a xDrip+.

### La versión de xDrip+ a utilizar depende del número de serie de los transmisores G6.

* Para los transmisores G6 fabricados después de otoño/finales de 2018 (es decir, con números de serie que empiezan por 80 u 81) por favor, asegúrate de utilizar la versión [maestra fechada 2019/05/18 ](https://jamorham.github.io/#xdrip-plus) o posterior. 
* Si el número de serie de su transmisor Dexcom G6 Si el número de serie de su transmisor Dexcom G6 empieza por 8G u 8H utiliza una de las últimas [compilaciones nocturnas con fecha 2019/07/28 o posterior](https://github.com/NightscoutFoundation/xDrip/releases).

### Ajustes específicos de Dexcom

* Abra G5/G6 Configuración de depuración -> Menú Hamburguesa (parte superior izquierda de la pantalla de inicio) -> Settings -> G5/G6 Debug Settings ![Abrir los ajustes de xDrip+](../images/xDrip_Dexcom_SettingsCall.png)

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

**Con transmisores Dexcom con número de serie que empieza por 8G o 8H, los reinicios preventivos no funcionan y podrían matar el sensor completamente!**

No se recomienda la extensión automática de los sensores Dexcom (`reinicios preventivos`) ya que esto podría conducir a "saltos" en los valores BG el día 9 después del reinicio.

![xDrip+ Saltar después de un reinicio preventivo](../images/xDrip_Dexcom_PreemptiveJump.png)

Lo que está claro es que el uso del G6 es tal vez un poco más complejo que lo que se sugiere en primer lugar. Para utilizar de manera segura, hay un par de puntos a tener en cuenta:

* Si estás usando los datos nativos con el código de calibración en xDrip+ o Spike, la cosa más segura es no permitir reinicios preventivos del sensor.
* Si debe usar reinicio preventivo, a continuación, asegúrese de insertar una hora del día donde puede observar el cambio y calibrar si es necesario. 
* Si está reiniciando sensores, o bien haga esto sin la calibración de fábrica para obtener resultados más seguros en los días 11 y 12, o asegúrate de que estás listo para calibrar y vigilar la variación.
* La preabsorción del G6 con calibración de fábrica es probable que dé variaciones en los resultados. Si haces preconfiguración, entonces para obtener los mejores resultados, probablemente necesitarás calibrar el sensor.
* Si no estás observando los cambios que pueden estar teniendo lugar, puede ser mejor volver al modo no calibrado en fábrica y usar el sistema como un G5.

Para obtener más información acerca de los detalles y las razones de estas recomendaciones, lea el [artículo completo](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) publicado por Tim Street en [www.diabettech.com](http://www.diabettech.com).

### Conectar el transmisor G6 por primera vez

**Para el segundo y los siguientes transmisores ver [Extender la vida del transmisor](../Configuration/xdrip#extend-transmitter-life) a continuación.**

Para los transmisores G6 fabricados después de otoño/finales de 2018 (es decir, con números de serie que empiezan por 80 u 81) por favor, asegúrate de utilizar la versión [maestra fechada 2019/05/18 ](https://jamorham.github.io/#xdrip-plus) o posterior.

Si el número de serie de su transmisor Dexcom G6 Si el número de serie de su transmisor Dexcom G6 empieza por 8G u 8H utiliza una de las últimas [compilaciones nocturnas con fecha 2019/07/28 o posterior](https://github.com/NightscoutFoundation/xDrip/releases).

* Desactive el receptor Dexcom original (si se utiliza).
* Pulse el icono xDrip+ en la gota de sangre de color rojo en la pantalla principal para habilitar el botón `Asistente de Origen`.
* Utilice el Botón Asistente de Origen que asegura la configuración predeterminada incluyendo OB1 & Modo Nativo 
   * Esto le guiará a través de la configuración inicial.
   * necesitará el número de serie del transmisor si es la primera vez que lo utiliza.

* Ponga el número de serie del nuevo transmisor (en el envase del transmisor o en la parte posterior del transmisor). Tenga cuidado de no confundir 0 (cero) y O (letra o mayúscula).
   
   ![xDrip+ Dexcom número de serie del Transmisor](../images/xDrip_Dexcom_TransmitterSN.png)

* Insertar nuevo sensor (sólo si se sustituye)

* Coloque el transmisor en el sensor
* No inicie un nuevo sensor antes de que se muestre la información siguiente en la página de estado clásica-> G5/G6 estado-> PhoneServiceState:
   
   * Transmisor con número de serie que empieza por 80 o 81: "Obtiene datos hh:mm" (por ejemplo, "Obtiene datos 19:04")
   * Transmisor con número de serie que empieza por 8G o 8H: "Got glucose hh:mm" (es decir, "Obtiene glucosa 19:04") o "No tengo ninguna hh:mm" (por ejemplo, "No tengo ninguna 19:04")
   
   ![xDrip PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Iniciar sensor (sólo si se reemplaza)
   
   -> Cerca de la parte inferior de la pantalla `Iniciando x, x horas faltantes` debe aparecer después de unos pocos minutos.

-> Si el número de serie de su transmisor no inicia con 8G o 8H y no hay una especificación de tiempo después de unos minutos para detener y reiniciar el sensor.

* Reiniciar el colector (estado del sistema - si no se reemplaza el sensor}
* No encienda el receptor original de Dexcom (si lo utiliza) de nuevo antes de xDrip+ muestre las primeras lecturas.
* Pulse el icono xDrip+ de goteo de sangre de color rojo en la pantalla principal para inhabilitar el `Botón Asistente de origen`.
   
   ![xDrip+ Dexcom Transmisor 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmisor 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmisor 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmisor 4](../images/xDrip_Dexcom_Transmitter04.png)

### Estado de la batería de Transmisor

* El estado de la batería se puede controlar en el estado del sistema (menú Hamburguesa en la parte superior izquierda de la pantalla de inicio)
* Deslizar la izquierda una vez para ver la segunda pantalla. ![xDrip+ First Transmisor 4](../images/xDrip_Dexcom_Battery.png)

* No se conocen los valores exactos cuando el transmisor "muere" debido a una batería vacía. La información siguiente se publicó en línea después de que el transmisor "murió":
   
   * Publicación 1: Día de transmisión: 151 / Voltaje A: 297 / Voltaje B: 260 / Resistencia: 2391
   * Publicación 2: Días de transmisión: 249 / Voltaje A: 275 (en tiempo de falla)

### Extender vida del transmisor

* Hasta ahora el tiempo de vida no se puede extender para los transmisores cuyo número de serie empieza por 8G o 8H.
* Para evitar las dificultades iniciando los sensores, se recomienda encarecidamente extender la vida del transmisor antes del día 100 de la primera utilización.
* La sesión en ejecución del sensor se detendrá al ampliar la vida del transmisor. So, extend before sensor change or be aware that there will be a new 2 h warm-up phase.
* Switch to the `engineering mode`: 
   * tap on the character on the right of the xDrip+ start screen that represents a syringe
   * then tap on the microphone icon in the lower right corner
   * In the text box that opens type "enable engineering mode" 
   * click "Done"
   * If Google Speak engine is enabled, you can also speak the voice command: "enable engineering mode". 
* Go to the G5 debug settings and check `OB1 collector`.
* Use the voice command: “hard reset transmitter”
* The voice command will be executed with the next data receipt of the transmitter
* Look at the system status (Hamburger menu -> system status) and see what happens
* If you see a message "Phone Service State: Hard Reset maybe failed" on second system status screen just start the sensor and this message should go away.
   
   ![xDrip+ Hard Reset maybe failed](../images/xDrip_HardResetMaybeFailed.png)

* Transmitter days will be set to 0 after successful extension and start of sensor.

### Replace transmitter

Para los transmisores G6 fabricados después de otoño/finales de 2018 (es decir, con números de serie que empiezan por 80 u 81) por favor, asegúrate de utilizar la versión [maestra fechada 2019/05/18 ](https://jamorham.github.io/#xdrip-plus) o posterior.

Si el número de serie de su transmisor Dexcom G6 is starting with 8G or 8H use one of the [latest nightly builds](https://github.com/NightscoutFoundation/xDrip/releases).

* Desactive el receptor Dexcom original (si se utiliza).
* Stop sensor (only if replacing sensor)
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about halfway down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes. Sensor Status must be "Stopped" (see screenshot).
   
   -> To remove transmitter without stopping sensor see this video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Forget device in xDrip system status AND in smartphone’s BT settings (Will be shown as Dexcom?? whereas ?? are the last two digits of the transmitter serial no.)
   
   ![xDrip+ Forget Device](../images/xDrip_Dexcom_ForgetDevice.png)

* Remove transmitter (and sensor if replacing sensor)

* Put the old transmitter far away to prevent reconnection. A microwave is a perfect Faraday shield for this - but unplug power cord to be 100% no one is turning the microwave on.
* Pulse el icono xDrip+ en la gota de sangre de color rojo en la pantalla principal para habilitar el botón `Asistente de Origen`.
* Utilice el Botón Asistente de Origen que asegura la configuración predeterminada incluyendo OB1 & Modo Nativo 
   * Esto le guiará a través de la configuración inicial.
   * You will need your transmitter serial number if this is the first time you've used it.
* Put in serial number of new transmitter. Tenga cuidado de no confundir 0 (cero) y O (letra o mayúscula).
* Insert new sensor (only if replacing).
* Put transmitter into sensor - **Do not start sensor immediately!**
* New "Firefly Transmitters" (serial no. starting with 8G or 8H) can only be used in native mode.
* The following options must not be activated for new "Firefly Transmitters" (serial no. starting with 8G or 8H):
   
   * Preemptive Restart (disable!)
   * Restart sensor (disable!)
   * Fallback to xDrip (disable!)
   
   ![Settings for Firefly transmitters](../images/xDrip_Dexcom_FireflySettings.png)

* Check in Classic Status Page -> G5/G6 status -> PhoneServiceState if one of the following informations is displayed:
   
   * Transmisor con número de serie que empieza por 80 o 81: "Obtiene datos hh:mm" (por ejemplo, "Obtiene datos 19:04")
   * Transmisor con número de serie que empieza por 8G o 8H: "Got glucose hh:mm" (es decir, "Obtiene glucosa 19:04") o "No tengo ninguna hh:mm" (por ejemplo, "No tengo ninguna 19:04")
   
   ![xDrip PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Wait 15 minutes as the transmitter should communicate several times with xDrip before new sensor is started. Battery data will be shown below Firmware information.
   
   ![Firefly transmitter battery data](../images/xDrip_Dexcom_FireflyBattery.png)

* Start sensor and DO NOT BACKDATE! Always select "Yes, today"!

* Restart collector (system status - if not replacing sensor)
* No encienda el receptor original de Dexcom (si lo utiliza) de nuevo antes de xDrip+ muestre las primeras lecturas.
* Pulse el icono xDrip+ de goteo de sangre de color rojo en la pantalla principal para inhabilitar el `Botón Asistente de origen`.
   
   ![xDrip+ Dexcom Transmisor 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmisor 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmisor 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmisor 4](../images/xDrip_Dexcom_Transmitter04.png)

### New Sensor

* Desactive el receptor Dexcom original (si se utiliza).
* Stop sensor if necessary
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about halfway down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Clean contacts (transmitter backside) with alcohol and let air-dry.

* In case you use this function disable `Restart Sensor` and `Preemptive restarts` (Hamburger menu -> Settings -> G5/G6 Debug Settings). If you miss this step and have these functions enabled the new sensor will not start properly.
   
   ![xDrip+ Preemptive Restart](../images/xDrip_Dexcom_Restart.png)

* Start Sensor
   
   **For new Firefly transmitters** (serial no. starting with 8G or 8H) **it is mandatory, for all other transmitters it is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen). DO NOT BACKDATE!**

* Set time inserted
   
   * To use G6 Native mode you must wait for the 2 hour warm up (i.e insertion time is now).
   * If you are using the xDrip+ algorithm then you can set a time more than 2 hours ago to avoid warm up. Readings may be very erratic. Therefore, this is not recommended.
* Enter Sensor code (on the peel-off foil of the sensor) 
   * Keep code for further reference (i.e. new start after transmitter had to be removed)
   * Code can also be found in [xDrip+ logs](../Configuration/xdrip#retrieve-sensor-code): Click 3-dots-menu on xDrip+ homescreen and choose `View Event Logs`.
* No calibration is needed if you use G6 in "native mode". xDrip+ will show readings automatically after 2 hour warm-up.
* Do not turn original Dexcom Receiver (if used) back on before xDrip+ shows first readings.
   
   ![xDrip+ Start Dexcom Sensor 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Start Dexcom Sensor 2](../images/xDrip_Dexcom_SensorStart02.png)

### Retrieve sensor code

* In master dated 2019/05/18 and the latest nightly builds the sensor code is shown in system status (Hamburger menu top left on homescreen).
* Swipe left once to see second screen.
   
   ![xDrip+ Retrieve Dexcom Sensor Code2](../images/xDrip_Dexcom_SensorCode2.png)

* Dexcom sensor code can also be found in xDrip+ logs.

* Tap 3 dot menu (top right side on homescreen)
* Select `View Event Logs` and search for "code"
   
   ![xDrip+ Retrieve Dexcom Sensor Code](../images/xDrip_Dexcom_SensorCode.png)

## Troubleshooting Dexcom G5/G6 and xDrip+

### Problem connecting transmitter

* Transmitter must be shown in your smartphone's bluetooth settings.
* Transmitter will be shown as Dexcom?? whereas ?? represent the last two digits of your transmitter serial no. (i.e. DexcomHY).
* Open system status in xDrip+ (hamburger menu on top left side of home screen).
* Check if your transmitter is shown on first status page ('classic status page').
* If not: Delete device from your smartphone's bluetooth settings and restart collector.
* Wait about 5 min. until Dexcom transmitter reconnects automatically.

### Problem when starting new sensor

Please note that the following method might likely not work if your Dexcom G6 transmitter's serial no. is starting with 8G or 8H.

* Native sensor is marked as "FAILED: Sensor Failed Start"
* Detener Sensor
* Restart your phone
* Start sensor with code 0000 (four times zero)
* Wait 15 minutes
* Detener Sensor
* Start sensor with "real" code (printed on the adhesive protector)

Check in xDrip+ logs if xDrip+ starts counting "Duration: 1 minute" (and so on). Only in the xdrip+ logs you can detect at an early stage whether xdrip+ has stopped a sensor. Latest status is not always shown correctly on bottom of startscreen.

## xDrip+ & Freestyle Libre

### Libre specific settings

* Open Bluetooth Settings -> Hamburger Menu (top left of homescreen) -> Settings -> scroll down -> Less common settings -> Bluetooth Settings
   
   ![xDrip+ Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

* Habilite los siguientes parámetros
   
   * `Turn Bluetooth on` 
   * `Use scanning`
   * `Always discover services`

* Todas las demás opciones deben ser desactivados
   
   ![xDrip+ Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

### Connect Libre Transmitter & start sensor

![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)