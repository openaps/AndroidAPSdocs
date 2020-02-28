# Accu-Chek Combo Tips for basic usage

## How to ensure smooth operations

* Always **carry the smartphone with you**, leave it next to your bed at night.
* Always make sure that the pump battery is as full as possible. See the battery section for tipps regarding the battery.
* It is best to **not touch the app ruffy** while the system is running. If the app is started again, the connection to the pump can break off. Once the pump is connected to ruffy, there is no need to re-connect. Even after a restart of the phone, the connection is automatically re-established. If possible, move the app to an unused screen or in a folder on your smartphone so you do not accidentally open it.
* If you unintentionally open the app ruffy during looping, it's best to restart the smartphone right away.
* Whenever possible, only operate the pump via the AndroidAPS app. To facilitate this, activate the key lock on the pump under **PUMP SETTINGS / KEY LOCK / ON**. Only when changing the battery or the cartridge, it is necessary to use the pump's keys. ![Keylock](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/keylock.png?raw=true)

## Pump not reachable. What to do?

### Activate pump unreachable alarm

* In AndroidAPS, go to **Settings / Local Alarms** and activate **alarm when pump is unreachable** and set **pump not reachable limit [Min]** to **31** minutes. 
* This will give you enough time to not trigger the alarm when leaving the room while your phone is left on the desk, but informs you if the pump cannot be reached for a time that exceeds the duration of a temporary basal rate.

### Restore reachability of the pump

* When AndroidAPS reports a **pump unreachable** alarm, first release the keylock and **press any key on the pump** (e.g. "down" button). As soon as the pump display has turned off, press **UPDATE** on the **Combo Tab** in AndroidAPS. Mostly then the communication works again.
* If that does not help, reboot your smartphone. After the restart, AndroidAPS and ruffy will be reactivated and a new connection will be established with the pump.
* The tests with different smartphones have shown that certain smartphones trigger the "pump unreachable" error more often than others. [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) lists successfully tested smartphones. 

### Root causes and consequences of frequent communication errors

* On phones with **low memory** (or **aggressive power-saving** settings), AndroidAPS is often shut down. You can tell by the fact that the Bolus and Calculator buttons on the Home screen are not shown when opening AAPS because the system is initializing. This can trigger "pump unreachable alarms" at startup. In the **Last Connection** field of the Combo tab, you can check when AndroidAPS last communicated with the pump. 

![Pump unreachable](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Pump_Unreachable.png) ![No connection to pump](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/No_connection_to_pump.png)

* This error can drain the pump's battery faster because the basal profile is read from the pump when the app is restarted.
* It also increases the likelihood of causing the error that causes the pump to reject all incoming connections until a button on the pump is pressed. 

## Cancellation of temporary basal rate fails

* Occasionally, AndroidAPS can not automatically cancel a **TBR CANCELED** alert. Then you have to either press **UPDATE** in the AndroidAPS **Combo tab** or the alarm on the pump will be confirmed.

## Pump battery considerations

### Changing the battery

* After a **low battery** alarm, the battery should be changed as soon as possible to always have enough energy for a reliable Bluetooth communication with the smartphone, even if the phone is within a wider distance of the pump.
* Even after a **low battery** alarm, the battery might be used for a significant amount of time. However, it is recommended to always have a fresh battery with you after a "low battery" alarm rang.
* To do this, long-press on **Closed Loop** on the main screen and select **Suspend loop for 1h**. 
* Wait for the pump to communicate with the phone and the Bluetooth logo on the pump has faded.

![Bluetooth enabled](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/Compo.png?raw=true)

* Release the key lock on the pump, put the pump into stop mode, confirm a possibly canceled temporary basal rate, and change the battery.
* Then put the pump back in run mode select **Resume** when long-pressing on **Suspended** on the main screen.
* AndroidAPS will re-set a necessary temporary basal rate with the arrival of the next blood sugar value. 

### Battery type and causes of short battery life

* As intensive Bluetooth communication consumes a lot of energy, only use **high-quality batteries** like Energizer Ultimate Lithium ,the "power one"s from the "large" Accu-Chek service pack, or if you are going for a rechargeable battery, use Eneloop batteries. 

![Energizer](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/energizer-l91aa---image.jpg?raw=true) ![OnePower](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/PowerOne.png?raw=true)

Ranges for typical life time of the different battery types are as follows:

* **Energizer Ultimate Lithium**: 4 to 7 weeks
* **Power One Alkaline** (Varta) from the servcie pack: 2 to 4 weeks
* **Eneloop rechargable** batteries (BK-3MCCE): 1 to 3 weeks

If your battery life is significantly shorter than the ranges given above, please check the following possible causes:

* The latest version (March 2018) of the [ruffy App](https://github.com/MilosKozak/ruffy) significantly improved pump battery lifetime. Make sure you are on that version if you have issues with a short battery lifetime.
* There are some variants of the screw-on battery cap of the Combo pump, which partially short circuit the batteries and drain them quickly. The caps without this problem can be recognized by the golden metal contacts.
* If the pump clock does not "survive" a short battery change, it is likely that the capacitor is broken which keeps the clock running during a brief power outage. In this case, only a replacement of the pump by Roche will help, which is not a problem during the warranty period. 
* The smart phone hardware and software (Android operating system and bluetooth stack) also impact the battery lifetime of the pump, even though the exact factors are not completely known yet. If you have the opportunity, try another smartphone and compare battery lifetimes.

## Daylight saving time changes

* Currently the combo driver does not support automatic adjustment of the pump's time.
* During the night of a daylight saving time change, the time of the smartphone is updated, but the time of the pump remains unchanged. This leads to an alarm due to deviating times between the systems at 3 am.
* If you do not want to be awakened at night, **deactivate the automatic daylight saving time changeover on the mobile phone** in the evening before the time changeover and adjust the times manually the next morning.

## Extended bolus, multiwave bolus

The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternative:

* Input the carbs but do not bolus for it. The loop algorithm will react more aggressively. If needed, use **eCarbs** (extended carbs).

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AndroidAPS will penalize you with disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Disabled loop after multiwave bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Multiwave_Bolus.png)

## Alarms at bolus delivery

* If AndroidAPS detects that an identical bolus has been successfully delivered at the same minute, bolus delivery will be prevented with identical number of insulin units. If you really want to bolus the same insulin twice in short succession, just wait two more minutes and then deliver the bolus again. If the first bolus has been interrupted or was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* Background is a safety mechanism that reads the pump's bolus history before submitting a new bolus to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump. Here indistinguishable entries must be prevented.

![Double bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/Doppelbolus.png)

* This mechanism is also responsible for a second cause of the error: If during the use of the bolus calculator another bolus is delivered via the pump and thereby the bolus history changes, the basis of the bolus calculation is wrong and the bolus is aborted. 

![Canceled bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/History_changed.png)