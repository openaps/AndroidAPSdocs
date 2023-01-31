# Consejos para uso básico de Combo AccuChek

## Cómo garantizar las operaciones sin problemas

* Always **carry the smartphone with you**, leave it next to your bed at night. As your pump may lay behind or under you body while you sleep, a higher position (on a shelf or board) works best.
* Asegúrate siempre de que la batería de la bomba esté lo más cargada posible. Consulte la sección de la batería de las tips con respecto a la batería.
* Es mejor que **no toque la aplicación ruffy** mientras el sistema se está ejecutando. Si la aplicación se inicia de nuevo, la conexión a la bomba se puede interrumpir. Una vez que la bomba está conectada a ruffy, no hay necesidad de volver a conectarse. Incluso después de un reinicio del teléfono, la conexión se reestablece automáticamente. Si es posible, mueva la aplicación a una pantalla no utilizada o en una carpeta en el smartphone para que no la abra accidentalmente.
* Si involuntariamente abres la aplicación ruffy durante el lazo, es mejor reiniciar el smartphone inmediatamente.
* Siempre que sea posible, sólo opera la bomba a través de la aplicación AndroidAPS. Para facilitar esto, active el bloqueo de clave en la bomba bajo **PUMP SETTINGS/CLAVE LOCK/ON**. Únicamente cuando se cambia la batería o el cartucho, es necesario utilizar las teclas de la bomba. ![Tecla de bloqueo](../images/combo/combo-tips-keylock.png)

## Bomba no alcanzable. ¿Qué hacer?

### Activar alarma de bomba inalcanzable

* En AndroidAPS, vaya a **Settings/Local Alarms** y active **alarm when pump is unreachable** and set **pump not reachable limit [Min]** to **31** minutos. 
* This will give you enough time to not trigger the alarm when leaving the room while your phone is left on the desk, but informs you if the pump cannot be reached for a time that exceeds the duration of a temporary basal rate.

### Restaure la posibilidad de alcance de la bomba

* Cuando AndroidAPS informa **bomba inalcanzable** alarma, primero libera la cerradura y **presione cualquier tecla en la bomba** (por ejemplo, el botón "abajo"). Tan pronto como se haya apagado la pantalla de la bomba, pulse **UPDATE** en la pestaña **Combo** en AndroidAPS. Por lo general, la comunicación funciona de nuevo.
* Si eso no ayuda, reinicie el smartphone. Después del reinicio, se reactivarán AndroidAPS y ruffy y se establecerá una nueva conexión con la bomba.
* Las pruebas con diferentes teléfonos inteligentes han demostrado que algunos teléfonos inteligentes activan el error "bomba inalcanzable" con más frecuencia que otros. [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) lists successfully tested smartphones. 

### Causas raíz y consecuencias de los errores de comunicación frecuentes

* En los teléfonos con **baja memoria** (o **ajustes agresivos de ahorro de energía**), AndroidAPS a menudo se cierra. Puede saber por el hecho de que los botones Bolos y Calculadora en la pantalla de inicio no se muestran al abrir AAPS porque el sistema está inicializando. Esto puede desencadenar "alarmas de bomba inalcanzable" durante el arranque. En el campo **Last Connection** de la pestaña Combo, puede comprobar cuando AndroidAPS se comunicó por última vez con la bomba. 

![Bomba no alcanzable](../images/combo/combo-tips-pump-unreachable.png) ![No hay conexión con la bomba](../images/combo/combo-tips-no-connection-to-pump.png)

* Este error puede drenar la batería de la bomba más rápido porque el perfil basal se lee de la bomba cuando se reinicia la aplicación.
* También aumenta la probabilidad de provocar el error que hace que la bomba rechace todas las conexiones entrantes hasta que se pulsa un botón en la bomba. 

## La cancelación de la tasa basal temporal

* Ocasionalmente, AndroidAPS no puede cancelar automáticamente una alerta **TBR CANCELED**. Then you have to either press **UPDATE** in the AndroidAPS **Combo tab** or the alarm on the pump will need to be confirmed.

## Consideraciones sobre la batería de la bomba

### Cambiar pila

* Después de una alarma de **batería baja,** la batería debe cambiarse tan pronto como sea posible para tener siempre suficiente energía para una comunicación Bluetooth fiable con el smartphone, incluso si el teléfono está a una distancia más amplia de la bomba.
* Incluso después de una alarma **batería baja**, la batería podría ser utilizado para una cantidad significativa de tiempo. Sin embargo, se recomienda tener siempre una batería fresca con usted después de un aviso de alarma de "batería baja".
* Before changing the battery, press on the **Loop** symbol on the main screen and select **Suspend loop for 1h**. 
* Wait for the pump to communicate with the pump and the bluetooth logo on the pump has faded.

![Bluetooth habilitado](../images/combo/combo-tips-compo.png)

* Release the key lock on the pump, put the pump into stop mode, confirm a possibly canceled temporary basal rate, and change the battery quickly.
* If the clock on the pump did not survive the battery chenge, re-set the date and time on the pump to exactly the date/time on your phone running AAPS.
* Then put the pump back in run mode select **Resume** when pressing on the **Suspended Loop** icon on the main screen.
* AndroidAPS will re-set a necessary temporary basal rate with the arrival of the next blood sugar value. 

(battery-type-and-causes-of-short-battery-life)=

### Tipos de batería y la causa de la corta vida de las mismas

* As intensive Bluetooth communication consumes a lot of energy, only use **high-quality batteries** like Energizer Ultimate Lithium, the "power one"s from the "large" Accu-Chek service pack, or if you are going for a rechargeable battery, use Eneloop batteries. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Ranges for typical life time of the different battery types are as follows:

* **Energizer Ultimate Lithium**: de 4 a 7 semanas
* **Power One Alkaline** (Varta) del envase de servcie: 2 a 4 semanas
* **Eneloop rechargeable** batteries (BK-3MCCE): 1 to 3 weeks

If your battery life is signifcantly shorter than the ranges given above, please check the following possible causes:

* Versions of the [ruffy App](https://github.com/MilosKozak/ruffy) after vMarch 2018 significantly improved pump battery lifetime. Make sure you are on the newest version if you have issues with a short battery lifetime.
* Hay algunas variantes de la tapa de la batería de tornillos de la bomba Combo, que parcialmente cortocircuita las baterías y las drena rápidamente. Las tapas sin este problema pueden ser reconocidas por los contactos de metal dorado.
* Si el reloj de la bomba no "sobrevive" a un cambio de batería corto, es probable que el capacitor esté roto, lo que mantiene el reloj en funcionamiento durante un breve corte de energía. In this case, a replacement of the pump by Roche might help, which is not a problem during the warranty period. 
* El hardware y el software del teléfono inteligente (sistema operativo Android y pila de bluetooth) también impactan la duración de la batería de la bomba, a pesar de que los factores exactos aún no se conocen completamente. Si tiene la oportunidad, pruebe otro smartphone y compare los tiempos de vida de la batería.

## Cambios en el horario de verano

* Actualmente, el controlador de combo no soporta el ajuste automático de la hora de la bomba.
* Durante la noche de un cambio horario de horario de verano, se actualiza el tiempo del smartphone, pero el tiempo de la bomba permanece sin cambios. Esto da lugar a una alarma debido a la desviación de tiempo entre los sistemas a las 3 am.
* If you do not want to be awakened at night, **deactivate the automatic daylight saving time changeover on the mobile phone** in the evening before the time changeover and adjust the times manually the next morning. A good way to deal with daylight saving time changes is to switch to a different time zone located on the same longitude you are located at but closer to the equator, where usually no daylight saving time is observed. Example: For Central Europe on Summer Time (CEST/GMT+2), you could switch to the time zone of Zimbabwe on your phone the night before the switch to winter time and then switch back to Central European Time CET/GMT+1 the next morning while changing the clock on your pump at the same time. The other way aroud, switch to the time zone of Nigeria while on Winter Time CET/GMT+1 and go back to Central European Summer Time (CEST/GMT+2) the morning after the switch to summer time and change the pump time accordingly. Look at https://www.timeanddate.com/time/map/ to find a suitable country.

## Bolos extendidos, bolo Multionda

The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternatives:

* Use **e-Carbs** when entering carbs or using the Calculator by entering the carbs of the full meal and the duration you expect the carbs to arrive as glucose in you blood. The system will then calculate small carbs equally distributed over the whole duration which will cause th algorithm to provide equivalent insulin dosing while still permanently checking the overall rise/decrease of the blood glucose level. For a multiwave bolus approach, you can also combine a smaller immeadiate bolus with e-carbs. 
* Before eating, on the **Actions tab** in AndroidAPS set as a temporary **Eating Soon** goal with target glucose 80 for several hours. The duration should be based on the interval you would chosse for an extended bolus. This will keep your target lower than usual and therefore increase the amout of insulin delivered.
* Then use the **CALCULATOR** to enter the full carbs of the meal, but do not directly apply the values suggested by the bolus calculator. If a multiwave-like bolus is to be delivered, correct the insulin dosage down. Depending on the meal, the algorithm now has to deliver additional SMBs or higher temporary basal rates to counteract the increase in blood sugar. Here, the safety limitation of the basal rate (Max IE / h, Maximum basal IOB) should be very carefully experimented with and, if necessary, temporarily changed.

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AndroidAPS will penalize you with disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Disabled loop after multiwave bolus](../images/combo/combo-tips-multiwave-bolus.png)

## Alarmas en la entrega en bolo

* If AndroidAPS detects that an identical bolus has been successfully delivered at the same minute, bolus delivery will be prevented with identical numer of insulin units. If your really want to bolus the same inuslin twice in short succession, just wait two more minutes and then deliver the bolus again. If the fist bolus has been interruped or was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* The alarm is a safety mechanism that reads the pump's bolus history before submitting a new bolus to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump. Las entradas indistinguibles deben evitarse.

![Double bolus](../images/combo/combo-tips-doppelbolus.png)

* Este mecanismo también es responsable de una segunda causa del error: Si durante el uso de la calculadora en bolo se entrega otro bolo a través de la bomba y, por lo tanto, cambia la historia del bolo, la base del cálculo del bolo es errónea y el bolo es abortado. 

![Canceled bolus](../images/combo/combo-tips-history-changed.png)