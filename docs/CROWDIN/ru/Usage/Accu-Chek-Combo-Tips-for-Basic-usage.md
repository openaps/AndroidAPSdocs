# Советы по базовому применению Accu-Chek Combo

## Как обеспечить бесперебойную работу

* Всегда ** носите смартфон с собой **, оставляя его рядом с кроватью ночью.
* Всегда убеждайтесь, что батарея помпы максимально заряжена. Информацию о батарее смотрите в разделе подсказок по использованию батареи.
* Лучше всего ** не трогать приложению ruffy ** во время работы системы. Если приложение запускается заново, соединение с помпой может прерваться. Как только помпа соединится с ruffy, нет необходимости в повторном подключении. Даже после перезапуска телефона соединение восстанавливается автоматически. По возможности переместите приложение на неиспользуемый экран или папку на смартфоне, чтобы случайно его не открыть.
* Если вы непреднамеренно откроете приложение во время работы цикла, лучше сразу же перезапустить смартфон.
* Всякий раз, когда это возможно, управляйте помпой с помощью приложения AndroidAPS. Для этого активируйте блокировку кнопок на помпе в ** PUMP SETTINGS/KEY LOCK/ON **. Кнопками помпы следует пользоваться только при замене батареи или картриджа. ![Keylock](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/keylock.png?raw=true)

## Помпа недоступна. Что делать?

### Активируйте сигнализацию "помпа недоступна"

* В AndroidAPS перейдите в ** Настройки/Локальные оповещения **, активируйте ** оповещение при недоступности помпы ** и задайте для него лимит [Min]</strong> до ** 31 ** минут. 
* Это даст вам достаточно времени, чтобы не активировать сигнал при выходе из помещения, пока телефон останется на столе, но информирует вас, если помпа не может быть достигнута на время, превышающее длительность временного базала.

### Восстановление доступности помпы

* Когда AndroidAPS сообщает о том, что **помпа недоступна** разблокируйте кнопки помпы и ** нажмите на любую кнопку ** (например, "вниз"). Как только меню помпы отключится, нажмите кнопку ** ОБНОВИТЬ** на вкладке ** СOMBO ** в AndroidAPS. В большинстве случаев связь с помпой восстанавливается.
* Если это не поможет, перезагрузите смартфон. После перезапуска, AndroidAPS и ruffy будут реактивированы, и с помпой будет установлено новое соединение.
* Тесты с разными телефонами показали, что некоторые из них запускают ошибку "помпа недоступна" чаще, чем другие. В разделе [ Телефоны для AAPS ](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) перечислены успешно проверенные смартфоны. 

### Причины и последствия частых ошибок связи

* На телефонах с ** небольшой памятью ** (или ** агрессивными параметрами экономии заряда батареи **) AndroidAPS часто отключается. Это можно определить по тому, что кнопки Bolus и Calculator не присутствуют на главном экране при запуске AAPS, так как система инициализируется. Это может привести к оповещениям "помпа недоступна" при запуске. В поле ** недавнее соединение ** на вкладке Combo можно проверить, когда AndroidAPS последний раз обменивался данными с помпой. 

![Pump unreachable](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Pump_Unreachable.png) ![No connection to pump](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/No_connection_to_pump.png)

* Эта ошибка может ускорить понижение заряда батареи помпы, так как профиль базала считывается из помпы при перезапуске приложения.
* Кроме того, это увеличивает вероятность возникновения ошибки, которая заставляет помпу отклонять все входящие соединения до тех пор, пока на помпе не будет нажата кнопка. 

## Отмена временной базальной скорости не выполнена

* Иногда AndroidAPS не может автоматически отменить оповещение ** Временная скорость базала TBR ОТМЕНЕНА **. В этом случае необходимо нажать кнопку ** ОБНОВИТЬ ** на вкладке **COMBO** или сигнал будет подтвержден на помпе.

## Особенности работы батареи помпы

### Замена батареи

* После сигнала оповещения ** низкий заряд батареи ** батарея должна быть заменена как можно скорее, чтобы всегда иметь достаточно энергии для надежной связи Bluetooth со смартфоном, даже на большом удалении от помпы.
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