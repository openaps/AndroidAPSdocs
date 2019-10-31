# Помпа Accu-Chek Insight

**Это программное обеспечение - часть алгоритма самостоятельно настраиваемой ИПЖ; она не является коммерческим продуктом, но требует, чтобы вы прочитали, узнали и поняли, как ей пользоваться. Она не будет за вас контролировать диабет, но позволит улучшить компенсацию и качество жизни, при условии, что вы готовы уделить ей достаточно внимания и времени. Не бросайтесь в систему сломя голову, дайте себе время на изучение. Только вы несете ответственность за то, что делаете.**

* * *

## ***ВНИМАНИЕ:** Если вы до настоящего момента пользовались помпой Insight с пультом **SightRemote**, пожалуйста **обновите прошивку помпы до новейшей версии ** и ** деинсталлируйте SightRemote**.*

## Требования к аппаратному и программному обеспечению

* Помпа Accu-Chek Insight Roche (любой прошивки, все они работают)
<br>, Примечание: AAPS всегда будет записывать данные  в <b>первый  базальный профиль помпы</b>* Телефон на Android (будет работать любая версия, но сам AndroidAPS требует как минимум Android 5 (Lollipop).)
* Приложение AndroidAPS установлено на вашем телефоне

## Настройки

* Помпа Insight должна быть единовременно подключена только к одному устройству. Если вы ранее уже подсоединяли дистанционное управление (глюкометр) Insight, то его необходимо удалить из списка сопряженных устройств помпы: Меню > Настройки > Связь > Удалить устройство
    
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

![Снимок экрана настроек Insight](../images/Insight_pairing_V2_5.png)

В настройках Insight в AndroidAPS следует активировать следующие параметры:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.  
    <font color="red">Note: A cannula change also resets Autosens</b></font>
* "Отслеживать смену инфузионного набора": При запуске программы помпы "первичное заполнение инфузионного набора" в базе данных AndroidAP добавляется соответствующая заметка.
* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump.
* "Log battery changes": This records a battery change when you put a new battery in the pump.
* "Log operating mode changes": This inserts a note in the AndroidAPS database whenever you start, stop or pause the pump.
* "Log alerts": This records a note in the AndroidAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).
* "Enable TBR emulation": The Insight pump can only issue temporary basal rates (TBRs) up to 250%. To get round this restriction, TBR emulation will instruct the pump to deliver an extended bolus for the extra insulin if you request a TBR of more than 250%.
    
    **Note: Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.**

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

В период, когда помпа не работает, AAPS записывает темп. базальную скорость равную 0%.

В AndroidAPS на вкладке Accu-Chek Insight показано текущее состояние помпы и две кнопки:

* "Обновить": Обновляет состояние помпы
* "Включить/выключить уведомление TBR": Стандартная помпа Insight издает сигнал по завершении временной TBR. Кнопка позволяет включить или отключить это оповещение без изменения конфигурации программного обеспечения.
    
    ![Снимок экрана текущего состояния Insight](../images/Insight_Status2.png)

## Настройки помпы

Настройте сигналы в помпе следующим образом:

* Меню > Настройки > Настройки устройства > Настройки режима >Тихий> Сигнал > Звуковое меню > Настройки > Настройки устройства > Настройки режима > Тихий> Громкость > 0 (убрать все полоски)
* Меню > настройка режимов > режим сигнала > тихий

Это уберет звук всех оповещений помпы и позволит AndroidAPS решать, какой сигнал является актуальным для вас. Если AndroidAPS не распознает сигнал, то его громкость увеличится (сначала гудок, затем вибрация).

Помпы Insight с новой прошивкой кратко вибрируют при каждой подаче болюса (например, когда AAPS подает супермикроболюс SMB или эмулирует высокий TBR растянутым болюсом). Вибрация не может быть отключена. Более старые помпы не издают вибрации в этих случаях.

## Замена батареи

В помпе Insight есть небольшой внутренний аккумулятор для поддержания таких важных функций, как часы, которые продолжают работать при замене батарей помпы. Если смена батареи занимает слишком много времени, то в этой внутренней батарее может кончиться заряд, время на часах будет сброшено, и вам будет предложено ввести новое время и дату после установки новых батарей. Если это произойдет, все записи в AndroidAPS до замены батареи больше не будут включены в расчеты, так как правильное время не может быть определено.

## Специфические ошибки помпы Insight

### Пролонгированный болюс

Рекомендуется применять только один растянутый болюс единовременно так как одновременное использование нескольких растянутых болюсов может вызвать ошибки.

### Таймаут

Иногда помпа Insight может не отвечать во время установки соединения. В этом случае AAPS выдает следующее сообщение: "Таймаут сопряжения - выполните сброс bluetooth".

![Сброс Bluetooth помпы Insight](../images/Insight_ResetBT.png)

В этом случае выключите Bluetooth на помпе и смартфоне примерно 10 секунд, а затем включите его обратно.

## Пересечение часовых поясов с помпой Insight

Информацию о пересечении часовых поясов см. в разделе [Пересечение часовых поясов с помпами](../Usage/Timezone-traveling#insight).