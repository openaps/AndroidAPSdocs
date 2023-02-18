# Помпа Accu-Chek Insight

**Это программное обеспечение - часть алгоритма самостоятельно настраиваемой ИПЖ; она не является коммерческим продуктом, но требует, чтобы вы прочитали, узнали и поняли, как ей пользоваться. Она не будет за вас контролировать диабет, но позволит улучшить компенсацию и качество жизни, при условии, что вы готовы уделить ей достаточно внимания и времени. Не бросайтесь в систему сломя голову, дайте себе время на изучение. Только вы несете ответственность за то, что делаете.**

* * *

## ***ВНИМАНИЕ:** Если вы до настоящего момента пользовались помпой Insight с пультом **SightRemote**, пожалуйста **обновите прошивку помпы до новейшей версии ** и ** деинсталлируйте SightRemote**.*

## Требования к аппаратному и программному обеспечению

* Помпа Roche Accu-Chek Combo (любая версия прошивки, работают все)

Примечание: AAPS всегда записывает данные в ** первый профиль скорости базала в помпе **.

* An Android phone (Basically every Android version would work with Insight, but check on the [Module](module-phone) page which Android version is required to run AndroidAPS.)
* Приложение AndroidAPS на вашем телефоне

## Настройки

* Помпа Insight должна быть единовременно подключена только к одному устройству. Если вы ранее уже подсоединяли пульт дистанционного управления (глюкометр) Insight, то его необходимо удалить из списка сопряженных устройств помпы: Меню > Настройки > Связь > Удалить устройство
    
    ![Снимок экрана удаления глюкометра из помпы Insight](../images/Insight_RemoveMeter.png)

* В [Конфигураторе](../Configuration/Config-Builder) приложения AndroidAPS выберите Accu-Chek Insight в разделе помпа
    
    ![Снимок экрана конфигуратора Config Builder помпы Insight](../images/Insight_ConfigBuilder_AAPS3_0.jpg)

* Нажмите на значок шестеренки, чтобы открыть настройки Insight.

* В настройках помпы нажмите кнопку "Сопряжение Insight" в верхней части экрана. Вы увидете список устройств bluetooth поблизости (ниже слева).
* На помпе Insight перейдите в меню > Настройки > Связь > Добавить устройство. На помпе появится экран (внизу справа) с указанием серийного номера помпы.
    
    ![Снимок экрана сопряжения Insight 1](../images/Insight_Pairing1.png)

* Вернувшись к телефону, нажмите на серийный номер помпы в списке устройств Bluetooth. Затем нажмите на Сопряжение, чтобы подтвердить действие.
    
    ![Снимок экрана сопряжения Insight 2](../images/Insight_Pairing2.png)

* Как помпа, так и телефон отобразят код. Убедитесь, что коды одинаковы на обоих устройствах и подтвердите сопряжение на помпе и на телефоне.
    
    ![Снимок экрана сопряжения Insight 3](../images/Insight_Pairing3.png)

* Успешно! Похлопайте себя по спине за успешно выполненную задачу по сопряжению с AndroidAPS.
    
    ![Снимок экрана сопряжения Insight 4](../images/Insight_Pairing4.png)

* Чтобы убедиться, что все в порядке, вернитесь к конфигуратору в AndroidAPS и нажмите на значок настройки рядом с надписью Помпа Insight, войдите в настройки Insight, затем нажмите на Сопряжение Insight и вы увидите информацию о помпе:
    
    ![Снимок экрана информации о сопряжения Insight](../images/Insight_PairingInformation.png)

Примечание: Постоянного соединения между помпой и телефоном не будет. Подключение будет устанавливаться только в случае необходимости (т.е. для изменения временного базала, подачи болюса, чтения логов помпы и т.п...). В ином случае аккумуляторы телефона и помпы будут расходоваться слишком быстро.

(Accu-Chek-Insight-Pump-settings-in-aaps)=

## Настройки на AAPS

**Note : It is now possible (only with AAPS v2.7.0 and above) to use ‘Always use basal absolute values’ if you want to use Autotune with Insight pump, even if 'sync is enabled' with Nightscout.** (In AAPS go to [Preferences > NSClient > Advanced Settings](Preferences-advanced-settings-nsclient)).

![Screenshot of Insight Settings](../images/Insight_settings.png)

In the Insight settings in AndroidAPS you can enable the following options:

* "Отслеживать замены картриджа": При выполнении команды "заполнение инфузионного набора" на помпе, это действие автоматически внесется в журнал как замена картриджа.

* "Отслеживать смену инфузионного набора": При запуске программы помпы "первичное заполнение инфузионного набора" в базе данных AndroidAP добавляется соответствующая заметка.

* "Отслеживать смену места установки катетера": При запуске программы помпы "первичное заполнение инфузионного набора" в базе данных AndroidAP добавляется соответствующая заметка. ** Примечание: Изменение места установки катетера также сбрасывает Autosens. **

* "Отслеживать замену батареи": При установке нового аккумулятора в помпе в базе данных Aaps добавляется соответствующая заметка.

* "Отслеживать изменение режима работы": Это добавляет заметку в базу данных AndroidAPS, когда вы запускаете, останавливаете или приостанавливаете помпу.

* "Отслеживать оповещения": В базе данных AndroidAPS автоматически делается заметка при оповещениях помпы (за исключением напоминаний, болюсов и отмены временной скорости базала TBR).

* "Разрешить эмуляцию временного базала TBR": помпа Insight может давать только до 250% временной базальной скорости TBR. Чтобы обойти это ограничение, эмуляция временной базальной скорости TBR поручит помпе подать пролонгированный болюс с дополнительным инсулином если запрошенная временная скорость базала превышает 250%.
    
    **Рекомендуется применять только один растянутый болюс единовременно так как одновременное использование нескольких растянутых болюсов может вызвать ошибки.**

* "Отключить вибрации при ручной подаче болюса": Это отключает вибрации помпы Insight при ручной подаче простого или пролонгированного болюса. Этот параметр доступен только для последней версии встроенного ПО Insight (3.x).

* "Отключить вибрации при ручной подаче болюса": Это отключает вибрации помпы Insight при автоматической подаче микроболюса SMB или эмуляции временного базала. Этот параметр доступен только для последней версии встроенного ПО Insight (3.x).

* "Длительность восстановления": Это определяет, время ожидания AndroidAPS перед новой попыткой подключения после неудачной. Можно выбрать от 0 до 20 секунд. Если вы испытываете проблемы с подключением, выберите более длительное время ожидания.   
      
    Пример мин. длительности восстановления = 5 и макс. длительности восстановления = 20   
      
    нет соединения -> подождать **5** сек.   
    повторите -> нет соединения -> подождать **6** сек.   
    повторите -> нет соединения -> подождать **7** сек.   
    повторите -> нет соединения -> подождать **8** сек.   
    ...   
    повторите -> нет соединения -> подождать **20** сек.   
    повторите -> нет соединения -> подождать **20** сек.   
    ...

* "Задержка при разъединении": Определяет, сколько времени (в секундах) AndroidAPS будет ждать, чтобы отключиться от помпы после завершения операции. Значение по умолчанию - 5 секунд.

For periods when pump was stopped AAPS will log a temp. basal rate with 0%.

In AndroidAPS, the Accu-Chek Insight tab shows the current status of the pump and has two buttons:

* "Обновить": Обновляет состояние помпы
* "Включить/выключить уведомление TBR": Стандартная помпа Insight издает сигнал по завершении временной TBR. Кнопка позволяет включить или отключить это оповещение без изменения конфигурации программного обеспечения.
    
    ![Снимок экрана текущего состояния Insight](../images/Insight_Status2.png)

## Настройки помпы

Configure alarms in the pump as follows:

* Меню > Настройки > Параметры устройства > Параметры режима > Тихий > Сигнал > Звук
* Меню > Настройки > Параметры устройства > Параметры режима > Тихий > Сигнал > 0 (удалить все полоски)
* Меню > настройка режимов > режим сигнала > тихий

This will silence all alarms from the pump, allowing AndroidAPS to decide if an alarm is relevant to you. If AndroidAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

(Accu-Chek-Insight-Pump-vibration)=

### Вибрация

Depending on the firmware version of your pump, the Insight will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus).

* Прошивка 1.х: нет вибрации конструктивно.
* Прошивка 2.х: вибрация не может быть отключена.
* Прошивка 3.х: AndroidAPS подает болюс беззвучно. (minimum [version 2.6.1.4](Releasenotes-version-2-6-1-4))

Firmware version can be found in the menu.

## Замена батареи

Battery life for Insight when looping range from 10 to 14 days, max. 20 days. The user reporting this is using Energizer lithium batteries.

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

(Accu-Chek-Insight-Pump-insight-specific-errors)=

## Специфические ошибки помпы Insight

### Пролонгированный болюс

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Таймаут

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Пересечение часовых поясов с помпой Insight

For information on traveling across time zones see section [Timezone traveling with pumps](Timezone-traveling-insight).