# Советы по базовому применению Accu-Chek Combo

## Как обеспечить бесперебойную работу

* Always **carry the smartphone with you**, leave it next to your bed at night. As your pump may lay behind or under you body while you sleep, a higher position (on a shelf or board) works best.
* Всегда убеждайтесь, что батарея помпы максимально заряжена. Информацию о батарее смотрите в разделе подсказок по использованию батареи.
* Лучше всего ** не трогать приложению ruffy ** во время работы системы. Если приложение запускается заново, соединение с помпой может прерваться. Как только помпа соединится с ruffy, нет необходимости в повторном подключении. Даже после перезапуска телефона соединение восстанавливается автоматически. По возможности переместите приложение на неиспользуемый экран или папку на смартфоне, чтобы случайно его не открыть.
* Если вы непреднамеренно откроете приложение во время работы цикла, лучше сразу же перезапустить смартфон.
* Всякий раз, когда это возможно, управляйте помпой с помощью приложения AndroidAPS. Для этого активируйте блокировку кнопок на помпе в ** PUMP SETTINGS/KEY LOCK/ON **. Кнопками помпы следует пользоваться только при замене батареи или картриджа. ![Блокировка кнопок](../images/combo/combo-tips-keylock.png)

## Помпа недоступна. Что делать?

### Активируйте сигнализацию "помпа недоступна"

* В AndroidAPS перейдите в ** Настройки/Локальные оповещения **, активируйте ** оповещение при недоступности помпы ** и задайте для него лимит [Min]</strong> до ** 31 ** минут. 
* Это даст вам достаточно времени, чтобы не активировать сигнал при выходе из помещения, пока телефон останется на столе, но информирует вас, если помпа не может быть достигнута на время, превышающее длительность временного базала.

### Восстановление доступности помпы

* Когда AndroidAPS сообщает о том, что **помпа недоступна** разблокируйте кнопки помпы и ** нажмите на любую кнопку ** (например, "вниз"). Как только меню помпы отключится, нажмите кнопку ** ОБНОВИТЬ** на вкладке ** СOMBO ** в AndroidAPS. В большинстве случаев связь с помпой восстанавливается.
* Если это не поможет, перезагрузите смартфон. После перезапуска, AndroidAPS и ruffy будут реактивированы, и с помпой будет установлено новое соединение.
* Тесты с разными телефонами показали, что некоторые из них запускают ошибку "помпа недоступна" чаще, чем другие. В разделе [ Телефоны для AAPS ](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) перечислены успешно проверенные смартфоны. 

### Причины и последствия частых ошибок связи

* На телефонах с ** небольшой памятью ** (или ** агрессивными параметрами экономии заряда батареи **) AndroidAPS часто отключается. Это можно определить по тому, что кнопки Bolus и Calculator не присутствуют на главном экране при запуске AAPS, так как система инициализируется. Это может привести к оповещениям "помпа недоступна" при запуске. В поле ** недавнее соединение ** на вкладке Combo можно проверить, когда AndroidAPS последний раз обменивался данными с помпой. 

![Помпа недоступна](../images/combo/combo-tips-pump-unreachable.png) ![Нет соединения с помпой](../images/combo/combo-tips-no-connection-to-pump.png)

* Эта ошибка может ускорить понижение заряда батареи помпы, так как профиль базала считывается из помпы при перезапуске приложения.
* Кроме того, это увеличивает вероятность возникновения ошибки, которая заставляет помпу отклонять все входящие соединения до тех пор, пока на помпе не будет нажата кнопка. 

## Отмена временной базальной скорости не выполнена

* Иногда AndroidAPS не может автоматически отменить оповещение ** Временная скорость базала TBR ОТМЕНЕНА **. Then you have to either press **UPDATE** in the AndroidAPS **Combo tab** or the alarm on the pump will need to be confirmed.

## Особенности работы батареи помпы

### Замена батареи

* После сигнала оповещения ** низкий заряд батареи ** батарея должна быть заменена как можно скорее, чтобы всегда иметь достаточно энергии для надежной связи Bluetooth со смартфоном, даже на большом удалении от помпы.
* Даже после оповещения ** низкий заряд батареи ** батарея может прослужить еще значительное время. Тем не менее, рекомендуется всегда иметь с собой свежую батарею после оповещения "низкий заряд".
* Before changing the battery, press on the **Loop** symbol on the main screen and select **Suspend loop for 1h**. 
* Wait for the pump to communicate with the pump and the bluetooth logo on the pump has faded.

![Bluetooth включен](../images/combo/combo-tips-compo.png)

* Release the key lock on the pump, put the pump into stop mode, confirm a possibly canceled temporary basal rate, and change the battery quickly.
* If the clock on the pump did not survive the battery chenge, re-set the date and time on the pump to exactly the date/time on your phone running AAPS.
* Then put the pump back in run mode select **Resume** when pressing on the **Suspended Loop** icon on the main screen.
* AndroidAPS will re-set a necessary temporary basal rate with the arrival of the next blood sugar value. 

### Типы батарей и причины их короткой жизни

* As intensive Bluetooth communication consumes a lot of energy, only use **high-quality batteries** like Energizer Ultimate Lithium, the "power one"s from the "large" Accu-Chek service pack, or if you are going for a rechargeable battery, use Eneloop batteries. 

![Энерджайзер](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Диапазоны времени жизни различных типов батарей:

* **Energizer Ultimate Lithium**: от 4 до 7 недель
* ** Power One Alkaline ** (Varta) из сервисного набора: 2-4 недели
* Перезаряжаемые батареи ** Eenlook ** (BK-3MCCE): от 1 до 3 недель

If your battery life is signifcantly shorter than the ranges given above, please check the following possible causes:

* Versions of the [ruffy App](https://github.com/MilosKozak/ruffy) after vMarch 2018 significantly improved pump battery lifetime. Make sure you are on the newest version if you have issues with a short battery lifetime.
* Есть некоторые варианты закручивающегося колпачка батарейного отсека помпы Combo, которые частично замыкают батарейку и быстро ее истощают. Колпачки без этой проблемы можно узнать по золотым металлическим контактам.
* Если часы помпы не "выдерживают" быстрой замены батареи, то, скорее всего, сломался конденсатор, который поддерживает работу часов во время краткочного отключения питания. In this case, a replacement of the pump by Roche might help, which is not a problem during the warranty period. 
* Аппаратное и программное обеспечение смартфона (операционная система Android и модуль Bluetooth) также влияют на время работы батареи помпы, хотя точные факторы пока неясны. Если у вас есть возможность, попробуйте другой телефон и сравните время жизни батареи.

## Переход на летнее время

* В настоящее время драйвер combo не поддерживает автоматическую корректировку времени помпы.
* В течение ночи перехода на летнее/зимнее время смартфон обновляется, но время на часах помпы остается неизменным. Это приводит к срабатыванию оповещения из-за разницы времени между системами в 3 часа утра.
* If you do not want to be awakened at night, **deactivate the automatic daylight saving time changeover on the mobile phone** in the evening before the time changeover and adjust the times manually the next morning. A good way to deal with daylight saving time changes is to switch to a different time zone located on the same longitude you are located at but closer to the equator, where usually no daylight saving time is observed. Example: For Central Europe on Summer Time (CEST/GMT+2), you could switch to the time zone of Zimbabwe on your phone the night before the switch to winter time and then switch back to Central European Time CET/GMT+1 the next morning while changing the clock on your pump at the same time. The other way aroud, switch to the time zone of Nigeria while on Winter Time CET/GMT+1 and go back to Central European Summer Time (CEST/GMT+2) the morning after the switch to summer time and change the pump time accordingly. Look at https://www.timeanddate.com/time/map/ to find a suitable country.

## Пролонгированный болюс, многоволновый болюс

Алгоритм OpenAPS не поддерживает параллельное выполнение пролонгированного болюса или многоволнового болюса. But a similar treatment can be achieved by the following alternatives:

* Use **e-Carbs** when entering carbs or using the Calculator by entering the carbs of the full meal and the duration you expect the carbs to arrive as glucose in you blood. The system will then calculate small carbs equally distributed over the whole duration which will cause th algorithm to provide equivalent insulin dosing while still permanently checking the overall rise/decrease of the blood glucose level. For a multiwave bolus approach, you can also combine a smaller immeadiate bolus with e-carbs. 
* Before eating, on the **Actions tab** in AndroidAPS set as a temporary **Eating Soon** goal with target glucose 80 for several hours. The duration should be based on the interval you would chosse for an extended bolus. This will keep your target lower than usual and therefore increase the amout of insulin delivered.
* Then use the **CALCULATOR** to enter the full carbs of the meal, but do not directly apply the values suggested by the bolus calculator. If a multiwave-like bolus is to be delivered, correct the insulin dosage down. Depending on the meal, the algorithm now has to deliver additional SMBs or higher temporary basal rates to counteract the increase in blood sugar. Here, the safety limitation of the basal rate (Max IE / h, Maximum basal IOB) should be very carefully experimented with and, if necessary, temporarily changed.

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AndroidAPS will penalize you with disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Отключение цикла после многоволнового болюса](../images/combo/combo-tips-multiwave-bolus.png)

## Сигналы оповещений при подаче болюса

* If AndroidAPS detects that an identical bolus has been successfully delivered at the same minute, bolus delivery will be prevented with identical numer of insulin units. If your really want to bolus the same inuslin twice in short succession, just wait two more minutes and then deliver the bolus again. If the fist bolus has been interruped or was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* The alarm is a safety mechanism that reads the pump's bolus history before submitting a new bolus to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump. Он не позволяет неразличимые записи.

![Двойной болюс](../images/combo/combo-tips-doppelbolus.png)

* Этот механизм также предотвращает другую причину ошибок: если во время использования калькулятора болюса с помпы подается другой болюс и тем самым меняется история болюсов, то основа расчета болюса становится неверной, и болюс отменяется. 

![Отмена болюса](../images/combo/combo-tips-history-changed.png)