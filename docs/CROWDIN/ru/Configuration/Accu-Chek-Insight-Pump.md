# Помпа Accu-Chek Insight

**Это программное обеспечение - часть алгоритма самостоятельно настраиваемой ИПЖ; она не является коммерческим продуктом, но требует, чтобы вы прочитали, узнали и поняли, как ей пользоваться. Она не будет за вас контролировать диабет, но позволит улучшить компенсацию и качество жизни, при условии, что вы готовы уделить ей достаточно внимания и времени. Не бросайтесь в систему сломя голову, дайте себе время на изучение. Только вы несете ответственность за то, что делаете.**

* * *

## ***ВНИМАНИЕ:** Если вы до настоящего момента пользовались помпой Insight с пультом **SightRemote**, пожалуйста **обновите прошивку помпы до новейшей версии ** и ** деинсталлируйте SightRemote**.*

## Требования к аппаратному и программному обеспечению

* Помпа Roche Accu-Chek Combo (любая версия прошивки, работают все)

Примечание: AAPS всегда записывает данные в ** первый профиль скорости базала в помпе **.

* Android-телефон (в основном каждая версия Android будет работать с Insight, но проверьте на странице [ Module ](../Module/module#phone), какую версию Android требуется для запуска AndroidAPS.)
* Приложение AndroidAPS на вашем телефоне

## Настройки

* Помпа Insight должна быть единовременно подключена только к одному устройству. Если вы ранее уже подсоединяли пульт дистанционного управления (глюкометр) Insight, то его необходимо удалить из списка сопряженных устройств помпы: Меню > Настройки > Связь > Удалить устройство
    
    ![Снимок экрана удаления глюкометра из помпы Insight](../images/Insight_RemoveMeter.png)

* В [Конфигураторе](../Configuration/Config-Builder) приложения AndroidAPS выберите Accu-Chek Insight в разделе помпа
    
    ![Снимок экрана конфигуратора Config Builder помпы Insight](../images/Insight_ConfigBuilder.png)

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

## Настройки на AAPS

**Note : it is now possible (only with AAPS v2.7.0 and above) to use ‘Always use basal absolute values’ if you want to use Autotune with Insight pump, even if 'sync is enabled' with Nightscout.** (In AAPS go to Preferences > NSClient > Advanced Settings).

![Screenshot of Insight Settings](../images/Insight_settings.png)

In the Insight settings in AndroidAPS you can enable the following options:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.

* "Log tube changes": This adds a note to the AndroidAPS database when you run the "tube filling" program on the pump.

* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump. **Note: A site change also resets Autosens.**

* "Log battery changes": This records a battery change when you put a new battery in the pump.

* "Log operating mode changes": This inserts a note in the AndroidAPS database whenever you start, stop or pause the pump.

* "Log alerts": This records a note in the AndroidAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).

* "Разрешить эмуляцию временного базала TBR": помпа Insight может давать только до 250% временной базальной скорости TBR. Чтобы обойти это ограничение, эмуляция временной базальной скорости TBR поручит помпе подать пролонгированный болюс с дополнительным инсулином если запрошенная временная скорость базала превышает 250%.
    
    **Рекомендуется применять только один растянутый болюс единовременно так как одновременное использование нескольких растянутых болюсов может вызвать ошибки.**

* "Disable vibrations on manual bolus delivery": This disables the Insight pump's vibrations when delivering a manual bolus (or extended bolus). This setting is available only with the latest version of Insight firmware (3.x).

* "Disable vibrations on automated bolus delivery": This disables the Insight pump's vibrations when delivering an automatic bolus (SMB or Temp basal with TBR emulation). This setting is available only with the latest version of Insight firmware (3.x).

* "Recovery duration": This defines how long AndroidAPS will wait before trying again after a failed connection attempt. You can choose from 0 to 20 seconds. If you experience connection problems, choose a longer wait time.   
      
    Example for min. recovery duration = 5 and max. recovery duration = 20   
      
    no connection -> wait **5** sec.   
    retry -> no connection -> wait **6** sec.   
    retry -> no connection -> wait **7** sec.   
    retry -> no connection -> wait **8** sec.   
    ...   
    retry -> no connection -> wait **20** sec.   
    retry -> no connection -> wait **20** sec.   
    ...

* "Disconnect delay": This defines how long (in seconds) AndroidAPS will wait to disconnect from the pump after an operation is finished. Default value is 5 seconds.

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

### Вибрация

Depending on the firmware version of your pump, the Insight will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus).

* Прошивка 1.х: нет вибрации конструктивно.
* Прошивка 2.х: вибрация не может быть отключена.
* Прошивка 3.х: AndroidAPS подает болюс беззвучно. (минимум [версия 2.6.1.4](../Installing-AndroidAPS/Releasenotes#version-2-6-1-4))

Firmware version can be found in the menu.

## Замена батареи

Battery life for Insight when looping range from 10 to 14 days, max. 20 days. The user reporting this is using Energizer lithium batteries.

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

## Специфические ошибки помпы Insight

### Пролонгированный болюс

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Таймаут

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Пересечение часовых поясов с помпой Insight

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).