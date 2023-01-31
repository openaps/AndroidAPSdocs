# Bomba de insulina Accu Chek Combo

**Este software es parte de una solución de DIY y no es un producto, pero requiere que USTED lea, aprenda y entienda el sistema incluyendo cómo utilizarlo. No es algo que maneja toda su diabetes, pero permite mejorarla y aumentar su calidad de vida si está dispuesto a dedicar el tiempo necesario. No se apresure en ello, pero permítese tiempo para aprender. Solo Usted es responsable de lo que hace con esto.**

(hardware-requirements)=

## Hardware necesario

- Una bomba de insulina Roche Accu-Chek Combo (cualquier firmware, todos funcionan)
- Un dispositivo Smartpix o Realtyme junto con el software de configuración 360 para configurar la bomba. (Roche envía los dispositivos Smartpix y el software de configuración de forma gratuita a sus clientes cuando lo solicite.)
- A compatible phone: An Android phone with a phone running LineageOS 14.1 (formerly CyanogenMod) or at least Android 8.1 (Oreo). As of AndroidAPS 3.0 Android 9 is mandatory. See [release notes](https://androidaps.readthedocs.io/en/latest/Installing-AndroidAPS/Releasenotes.html#android-version-and-aaps-version) for details.
- With LineageOS 14.1 it has to be a recent version from at least June 2017 since the change needed to pair the Combo pump was only introduced at that time. 
- A list of phones can be found in the [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) document.
- Tenga en cuenta que esta no es una lista completa y refleja la experiencia personal del usuario. Le recomendamos que también añada su experiencia y, por lo tanto, ayude a los demás (#cadenadeayuda).
- Tenga en cuenta que mientras que Android 8.1 permite comunicarse con la Combo, todavía hay problemas con AAPS en 8.1.
- Para los usuarios avanzados, es posible realizar el emparejamiento en un teléfono rooteado y transferirlo a otro teléfono rooteado para utilizarlo con ruffy/AAPS, que también debe estar rooteado. Esto permite usar teléfonos con Android < 8.1 pero no ha sido ampliamente probado: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Limitaciones

- Extended bolus and multiwave bolus are not supported (see [Extended Carbs](../Usage/Extended-Carbs.md) instead).
- Solo se admite un perfil basal.
- Establecer un perfil basal distinto de 1 en la bomba o entregar bolos extendidos o bolos multionda desde la bomba interfiere con TBRs y fuerza el bucle en modo de baja suspensión durante 6 horas, ya que el lazo no puede correr de forma segura bajo estas condiciones.
- It's currently not possible to set the time and date on the pump, so [daylight saving time changes](../Usage/Timezone-traveling.md#accu-chek-combo) have to be performed manually (you may disable the phone's automatic clock update in the evening and change it back in the morning together with the pump clock to avoid an alarm during the night).
- Actualmente solo se admiten tasas basales en el rango de 0.05 a 10 U / h. Esto también se aplica a la modificación de un perfil, p.ej. al aumentar a 200%, la tasa basal más alta no debe superar las 5 U/h ya que se duplicará. De manera similar, cuando se reduce al 50%, la tasa basal más baja debe ser de al menos 0,10 U / h.
- Si el lazo solicita que se cancele un TBR en ejecución, la Combo establecerá un TBR del 90% o el 110% durante 15 minutos en su lugar. Esto es porque cancelar un TBR causa una alerta en la bomba que causa muchas vibraciones.
- Ocasionalmente (cada dos o tres días) AAPS podría no cancelar una alerta de TBR CANCELADA, por lo que el usuario debe tratarla (presionar el botón Actualizar en AAPS para transferir la advertencia a AAPS o confirmar la alerta en la bomba).
- La estabilidad de la conexión Bluetooth varía con diferentes modelos de teléfonos, causando alertas "bomba inaccesible", donde ya no se ha establecido ninguna conexión a la bomba. 
- Si se produce ese error, asegúrese de que Bluetooth esté activado, presione el botón Actualizar en la barra Combo para ver si esto fue causado por un problema conexión y, si todavía no se establece ninguna conexión, reinicie el teléfono, esto suele solucionarlo. 
- Hay otro problema donde un reinicio no ayuda y debe ser presionado un botón de la bomba (que restablece el Bluetooth de la bomba) antes de que la bomba acepte nuevamente conexiones desde el teléfono. 
- Muy poco se puede hacer para solucionar algunos de estos problemas en este momento. Así que si ve estos errores frecuentemente su única opción en este momento es conseguir otro teléfono que se sabe que funciona bien con AndroidAPS y la Combo (ver arriba).
- La emisión de un bolo de la bomba no siempre se detectará a tiempo (se verifica cuando se conecta AAPS a la bomba), y puede tomar hasta 20 minutos en el peor de los casos. 
- Los bolos en la bomba siempre se verifican antes de un TBR alto o un bolo emitido por AAPS, pero debido a las limitaciones, AAPS rechazará las TBR / Bolus, ya que se calculó bajo premisas falsas. (-> ¡No envíe bolos desde la bomba! Ver capítulo [Uso](#usage) abajo)
- Debe evitarse establecer un TBR en la bomba, ya que el lazo cerrado asume el control de TBR. La detección de un nuevo TBR en la bomba puede demorar hasta 20 minutos y el efecto del TBR solo se tendrá en cuenta desde el momento en que se detecte, por lo que en el peor de los casos podría haber 20 minutos de un TBR no reflejada en el IOB del algoritmo. 

## Configuración

- Configure la bomba utilizando el software de configuración 360. 
- Si no tiene el software, comuníquese con soporte de Accu-Chek. Por lo general, envían a los usuarios registrados un CD con el "Software de configuración de bomba 360 °" y un dispositivo de conexión por infrarrojos USB SmartPix (el dispositivo Realtyme también funciona si tiene eso).
- **Ajustes requeridos** (marcados en verde en capturas de pantalla):
    
    - Set/leave the menu configuration as "Standard", this will show only the supported menus/actions on the pump and hide those which are unsupported (extended/multiwave bolus, multiple basal rates), which cause the loop functionality to be restricted when used because it's not possible to run the loop in a safe manner when used.
    - Verifique que el texto de información rápida esté configurado en "INFORMACIÓN RÁPIDA" (sin las comillas, que se encuentran en Opciones de bomba de insulina).
    - Ajuste el ajuste máximo de TBR al 500%
    - Deshabilitar el final de la señal de la frecuencia basal temporal
    - Establecer el incremento de duración de TBR en 15 minutos
    - Habilitar Bluetooth

- **Ajustes recomendados** (marcados azul en capturas de pantalla)
    
    - Establecer alarma de cartucho baja a su gusto
    - Configurar un bolus máximo adecuado para su terapia para proteger contra errores en el software
    - Del mismo modo, configure la duración máxima de TBR como salvaguarda. Allow at least 3 hours, since the option to disconnect the pump for 3 hours sets a 0% for 3 hours.
    - Habilitar el bloqueo de teclas en la bomba para evitar los bolos desde la bomba, especialmente when the pump was used before and quick bolusing was a habit.
    - Establezca el tiempo de espera de la pantalla y el tiempo de espera del menú en un mínimo de 5.5 y 5 respectivamente. This allows the AAPS to recover more quickly from error situations and reduces the amount of vibrations that can occur during such errors

![Screenshot of user menu settings](../images/combo/combo-menu-settings.png)

![Screenshot of TBR settings](../images/combo/combo-tbr-settings.png)

![Screenshot of bolus settings](../images/combo/combo-bolus-settings.png)

![Screenshot of insulin cartridge settings](../images/combo/combo-insulin-settings.png)

- Install AndroidAPS as described in the [AndroidAPS wiki](https://androidaps.readthedocs.io/)
- Make sure to read the wiki to understand how to setup AndroidAPS.
- Select the MDI plugin in AndroidAPS, not the Combo plugin at this point to avoid the Combo plugin from interfering with ruffy during the pairing process.
- Clone ruffy via git from [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy). At the moment, the primary branch is the `combo` branch, in case of problems you might also try the 'pairing' branch (see below).
- Build and install ruffy and use it to pair the pump. If it doesn't work after multiple attempts, switch to the `pairing` branch, pair the pump and then switch back the original branch. If the pump is already paired and can be controlled via ruffy, installing the `combo` branch is sufficient. Note that the pairing processing is somewhat fragile (but only has to be done once) and may need a few attempts; quickly acknowledge prompts and when starting over, remove the pump device from the Bluetooth settings beforehand. Another option to try is to go to the Bluetooth menu after initiating the pairing process (this keeps the phone's Bluetooth discoverable as long as the menu is displayed) and switch back to ruffy after confirming the pairing on the pump, when the pump displays the authorization code. If you're unsuccessful in pairing the pump (say after 10 attempts), try waiting up to 10s before confirming the pairing on the pump (when the name of the phone is displayed on the pump). If you have configured the menu timeout to be 5s above, you need to increase it again. Some users reported they needed to do this. Lastly, consider moving from one room to another in case of local radio interference. At least one user immediately overcame pairing problems by simply changing rooms.
- When AAPS is using ruffy, the ruffy app can't be used. The easiest way is to just reboot the phone after the pairing process and let AAPS start ruffy in the background.
- If the pump is completely new, you need to do one bolus on the pump, so the pump creates a first history entry.
- Before enabling the Combo plugin in AAPS make sure your profile is set up correctly and activated(!) and your basal profile is up to date as AAPS will sync the basal profile to the pump. Then activate the Combo plugin. Press the *Refresh* button on the Combo tab to initialize the pump.
- To verify your setup, with the pump **disconnected**, use AAPS to set a TBR of 500% for 15 min and issue a bolus. The pump should now have a TBR running and the bolus in the history. AAPS should also show the active TBR and delivered bolus.

(why-pairing-with-the-pump-does-not-work-with-the-app-ruffy)=

## Why pairing with the pump does not work with the app "ruffy"?

There are serveral possible reasons. Try the following steps:

1. Ponga una **batería nueva o totalmente cargada ** en la bomba. Mire la sección de batería para más detalles. Asegúrese de que la bomba esta muy cerca del teléfono.

![Combo should be next to phone](../images/Combo_next_to_Phone.png)

2. Turn off or remove any other bluetooth devices so they will not be able to establish a connection to the phone while pairing is in progress. Any parallel bluetooth communication or prompt to establish connections might disturb the pairing process.

3. Delete already connected devices in the Bluetooth menu of the pump: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** until **NO DEVICE** is shown.

4. Delete a pump already connected to the phone via Bluetooth: Under Settings / Bluetooth, remove the paired device "**SpiritCombo**"
5. Asegúrese que el lazo de AAPS no está en ejecución. Deaktivate Loop in AAPS.
6. Try using the '**pairing**' branch from the [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy/tree/pairing) repository to establish the connection 
7. Now start ruffy on the phone. You may press Reset! and remove the old connection. Then hit **Connect!**.
8. In the Bluetooth menu of the pump, go to **ADD DEVICE / ADD CONNECTION**. Press *CONNECT!** 
    - The next three steps are timing-sensitive, so you might need to try different pauses/speed if pairing fails. Read the full sequence before trying it.

9. Now the Pump should show up the BT Name of phone to select for pairing. Here it is importand to wait at least 5s before you hit the select button on Pump. Otherwise the Pumpe will not send the Paring request to the Phone proberly.
    
    - If Combo Pump is set to 5s Screentime out, you may test it with 40s (original setting). From experiance the time between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out without successfully pair. Later you should set it back to 5s, to meet AAPS Combo settings and speed up connections.
    - If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not compatible with the pump. Make sure you are running a new **LineageOS ≥ 14.1** or **Android ≥ 8.1 (Oreo)**. If possible, try another smartphone. You can find a list of already successfully used smartphones under \[AAPS Phones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 

10. Sometimes the phone asks for a (typically 4 digit) bluetooth PIN number that is not related to the 10 digit PIN later shown on the pump. Usually, ruffy will set this PIN automatically, but due to timing issues, this does not always work. If a request for a Bluetooth pairing PIN appears on the phone before any code is shown on the pump, you need to enter **}gZ='GD?gj2r|B}>** as the PIN. This is easiest done if you copy this 16 character text into the clipboard before starting the pairing sequence and just paste it in the dialog at this step. See related [Github issue](https://github.com/MilosKozak/ruffy/issues/14) for details.

11. At next the pump should show up a 10 digit security code. And Ruffy shold show a screen to enter it. So enter the code in Ruffy and you should be ready to go.
12. If pairing was not successful and you got a timeout on the pump, you will need to restart the process from scratch.
13. If you have used the 'Pairing' branch to build the ruffy app, now install the version build from the 'combo' branch on top of it. Make sure that you have used the same keys when signing the two versions of the app to be able to keep all setting and data, as they also contain the connection properties.
14. Reboot the phone.
15. Now you can restart AAPS loop.

## Uso

- Keep in mind that this is not a product, esp. in the beginning the user needs to monitor and understand the system, its limitations and how it can fail. It is strongly advised NOT to use this system when the person using it is not able to fully understand the system.
- Read the OpenAPS documentation https://openaps.org to understand the loop algorithm AndroidAPS is based upon.
- Read the online documentation to learn about and understand AndroidAPS https://androidaps.readthedocs.io/
- This integration uses the same functionality which the meter provides that comes with the Combo. The meter allows to mirror the pump screen and forwards button presses to the pump. The connection to the pump and this forwarding is what the ruffy app does. A `scripter` component reads the screen and automates entering boluses, TBRs etc and making sure inputs are processed correctly. AAPS then interacts with the scripter to apply loop commands and to administer boluses. This mode has some restrictions: it's comparatively slow (but well fast enough for what it is used for), and setting a TBR or giving a bolus causes the pump to vibrate.
- The integration of the Combo with AndroidAPS is designed with the assumption that all inputs are made via AndroidAPS. Boluses entered on the pump directly will be detected by AAPS, but it can take up to 20 min before AndroidAPS becomes aware of such a bolus. Reading boluses delivered directly on the pump is a safety feature and not meant to be regularly used (the loop requires knowledge of carbs consumed, which can't be entered on the pump, which is another reason why all inputs should be done in AndroidAPS). 
- Don't set or cancel a TBR on the pump. The loop assumes control of TBR and cannot work reliably otherwise, since it's not possible to determine the start time of a TBR that was set by the user on the pump.
- The pump's first basal rate profile is read on application start and is updated by AAPS. The basal rate should not be manually changed on the pump, but will be detected and corrected as a safety measure (don't rely on safety measures by default, this is meant to detect an unintended change on the pump).
- It's recommended to enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and using the "quick bolus" feature was a habit. Also, with keylock enabled, accidentally pressing a key will NOT interrupt active communication between AAPS and pump.
- When a BOLUS/TBR CANCELLED alert starts on the pump during bolusing or setting a TBR, this is caused by a disconnect between pump and phone, which happens from time to time. AAPS will try to reconnect and confirm the alert and then retry the last action (boluses are NOT retried for safety reasons). Therefore, such an alarm can be ignored as AAPS will confirm it automatically, usually within 30s (cancelling it is not problem, but will lead to the currently active action to have to wait till the pump's display turns off before it can reconnect to the pump). If the pump's alarm continues, automatic corfirmation failed, in which case the user needs to confirm the alarm manually.
- When a low cartridge or low battery alarm is raised during a bolus, they are confirmed and shown as a notification in AAPS. If they occur while no connection is open to the pump, going to the Combo tab and hitting the Refresh button will take over those alerts by confirming them and show a notification in AAPS.
- When AAPS fails to confirm a TBR CANCELLED alert, or one is raised for a different reason, hitting Refresh in the Combo tab establishes a connection, confirms the alert and shows a notification for it in AAPS. This can safely be done, since those alerts are benign - an appropriate TBR will be set again during the next loop iteration.
- For all other alerts raised by the pump: connecting to the pump will show the alert message in the Combo tab, e.g. "State: E4: Occlusion" as well as showing a notification on the main screen. An error will raise an urgent notification. AAPS never confirms serious errors on the pump, but let's the pump vibrate and ring to make sure the user is informed of a critical situation that needs action.
- After pairing, ruffy should not be used directly (AAPS will start in the background as needed), since using ruffy at AAPS at the same time is not supported.
- If AAPS crashes (or is stopped from the debugger) while AAPS and the pump were communicating (using ruffy), it might be necessary to force close ruffy. Restarting AAPS will start ruffy again. Restarting the phone is also an easy way to resolve this if you don't know how to force kill an app.
- Don't press any buttons on the pump while AAPS communicates with the pump (Bluetooth logo is shown on the pump).