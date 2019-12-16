# Consejos para uso básico de Combo AccuChek

## Cómo garantizar las operaciones sin problemas

* Siempre **lleva el smartphone con usted**, déjelo junto a su cama por la noche.
* Asegúrate siempre de que la batería de la bomba esté lo más cargada posible. Consulte la sección de la batería de las tips con respecto a la batería.
* Es mejor que **no toque la aplicación ruffy** mientras el sistema se está ejecutando. Si la aplicación se inicia de nuevo, la conexión a la bomba se puede interrumpir. Una vez que la bomba está conectada a ruffy, no hay necesidad de volver a conectarse. Incluso después de un reinicio del teléfono, la conexión se reestablece automáticamente. Si es posible, mueva la aplicación a una pantalla no utilizada o en una carpeta en el smartphone para que no la abra accidentalmente.
* Si involuntariamente abres la aplicación ruffy durante el lazo, es mejor reiniciar el smartphone inmediatamente.
* Whenever possible, only operate the pump via the AndroidAPS app. To facilitate this, activate the key lock on the pump under **PUMP SETTINGS / KEY LOCK / ON**. Únicamente cuando se cambia la batería o el cartucho, es necesario utilizar las teclas de la bomba. ![Tecla de bloqueo](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/keylock.png?raw=true)

## Bomba no alcanzable. ¿Qué hacer?

### Activar alarma de bomba inalcanzable

* In AndroidAPS, go to **Settings / Local Alarms** and activate **alarm when pump is unreachable** and set **pump not reachable limit [Min]** to **31** minutes. 
* Esto le dará tiempo suficiente para no activar la alarma al salir de la habitación mientras su teléfono está a la izquierda en el escritorio, pero le informa si la bomba no puede ser alcanzado por un tiempo que exceda de la duración de un temporal basal.

### Restaure la posibilidad de alcance de la bomba

* Cuando AndroidAPS informa **bomba inalcanzable** alarma, primero libera la cerradura y **presione cualquier tecla en la bomba** (por ejemplo, el botón "abajo"). Tan pronto como se haya apagado la pantalla de la bomba, pulse **UPDATE** en la pestaña **Combo** en AndroidAPS. Por lo general, la comunicación funciona de nuevo.
* Si eso no ayuda, reinicie el smartphone. Después del reinicio, se reactivarán AndroidAPS y ruffy y se establecerá una nueva conexión con la bomba.
* Las pruebas con diferentes teléfonos inteligentes han demostrado que algunos teléfonos inteligentes activan el error "bomba inalcanzable" con más frecuencia que otros. [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) lista de los smartphones probados con éxito. 

### Causas raíz y consecuencias de los errores de comunicación frecuentes

* On phones with **low memory** (or **aggressive power-saving** settings), AndroidAPS is often shut down. You can tell by the fact that the Bolus and Calculator buttons on the Home screen are not shown when opening AAPS because the system is initializing. Esto puede desencadenar "alarmas de bomba inalcanzable" durante el arranque. In the **Last Connection** field of the Combo tab, you can check when AndroidAPS last communicated with the pump. 

![Bomba no alcanzable](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Pump_Unreachable.png) ![No hay conexión con la bomba](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/No_connection_to_pump.png)

* Este error puede drenar la batería de la bomba más rápido porque el perfil basal se lee de la bomba cuando se reinicia la aplicación.
* It also increases the likelihood of causing the error that causes the pump to reject all incoming connections until a button on the pump is pressed. 

## La cancelación de la tasa basal temporal

* Ocasionalmente, AndroidAPS no puede cancelar automáticamente una alerta **TBR CANCELED**. Then you have to either press **UPDATE** in the AndroidAPS **Combo tab** or the alarm on the pump will be confirmed.

## Consideraciones sobre la batería de la bomba

### Cambiar pila

* After a **low battery** alarm, the battery should be changed as soon as possible to always have enough energy for a reliable Bluetooth communication with the smartphone, even if the phone is within a wider distance of the pump.
* Even after a **low battery** alarm, the battery might be used for a significant amount of time. However, it is recommended to always have a fresh battery with you after a "low battery" alarm rang.
* Para ello, pulse la tecla **Closed Loop** en la pantalla principal y seleccione **Suspend loop for 1h**. 
* Wait for the pump to communicate with the pump and the bluetooth logo on the pump has faded.

![Bluetooth habilitado](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/Compo.png?raw=true)

* Release the key lock on the pump, put the pump into stop mode, confirm a possibly canceled temporary basal rate, and change the battery.
* Then put the pump back in run mode select **Resume** when lon-pressing on **Suspended** on the main screen.
* AndroidAPS will re-set a necessary temporary basal rate with the arrival of the next blood sugar value. 

### Tipos de batería y la causa de la corta vida de las mismas

* As intensive Bluetooth communication consumes a lot of energy, only use **high-quality batteries** like Energizer Ultimate Lithium ,the "power one"s from the "large" Accu-Chek service pack, or if you are going for a rechargeable battery, use Eneloop batteries. 

![Energizer](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/energizer-l91aa---image.jpg?raw=true) ![OnePower](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/PowerOne.png?raw=true)

Los rangos para el tiempo de vida típico de los diferentes tipos de batería son los siguientes:

* **Energizer Ultimate Lithium**: de 4 a 7 semanas
* **Power One Alkaline** (Varta) del envase de servcie: 2 a 4 semanas
* **Eneloop rechargable** baterías (BK-3MCCE): de 1 a 3 semanas

If your battery life is signifcantly shorter than the ranges given above, please check the following possible causes:

* Die latest version (March 2018) of the [ruffy App](https://github.com/MilosKozak/ruffy) significantly improved pump battery lifetime. Make sure you are on that version if you have issues with a short battery lifetime.
* There are some variants of the screw-on battery cap of the Combo pump, which partially short circuit the batteries and drain them quickly. The caps without this problem can be recognized by the golden metal contacts.
* If the pump clock does not "survive" a short battery change, it is likely that the capacitor is broken which keeps the clock running during a brief power outage. In this case, only a replacement of the pump by Roche will help, which is not a problem during the warranty period. 
* The smart phone hardware and software (Android operating system and bluetooth stack) also impact the battery lifetime of the pump, even though the exact factors are not completely known yet. If you have the opportunity, try another smartphone and compare battery lifetimes.

## Cambios en el horario de verano

* Currently the combo driver does not support automatic adjustment of the pump's time.
* During the night of a daylight saving time change, the time of the smartphone is updated, but the time of the pump remains unchanged. This leads to an alarm due to deviating times between the systems at 3 am.
* If you do not want to be awakened at night, **deactivate the automatic daylight saving time changeover on the mobile phone** in the evening before the time changeover and adjust the times manually the next morning.

## Bolos extendidos, bolo Multionda

The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternative:

* Input the carbs but do not bolus for it. The loop algorithm will react more agressively. If needed, use **eCarbs** (extended carbs).

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AndroidAPS will penalize you wth disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Disabled loop after multiwave bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Multiwave_Bolus.png)

## Alarms at bolus delivery

* If AndroidAPS detects that an identical bolus has been successfully delivered at the same minute, bolus delivery will be prevented with identical numer of insulin units. If you really want to bolus the same inuslin twice in short succession, just wait two more minutes and then deliver the bolus again. If the first bolus has been interruped or was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* Background is a safety mechanism that reads the pump's bolus history before submitting a new bolus to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump. Here indistinguishable entries must be prevented.

![Double bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/Doppelbolus.png)

* This mechanism is also responsible for a second cause of the error: If during the use of the bolus calculator another bolus is delivered via the pump and thereby the bolus history changes, the basis of the bolus calculation is wrong and the bolus is aborted. 

![Canceled bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/History_changed.png)