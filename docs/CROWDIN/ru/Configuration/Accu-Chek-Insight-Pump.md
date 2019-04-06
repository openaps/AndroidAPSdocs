# Помпа Accu-Chek Insight

**Это программное обеспечение - часть алгоритма самостоятельно настраиваемой ИПЖ; она не является коммерческим продуктом, но требует, чтобы вы прочитали, узнали и поняли, как ей пользоваться. Она не будет за вас контролировать диабет, но позволит улучшить компенсацию и качество жизни, при условии, что вы готовы уделить ей достаточно внимания и времени. Не бросайтесь в систему сломя голову, дайте себе время на изучение. Только вы несете ответственность за то, что делаете.**

* * *

## ***ВНИМАНИЕ:** Если вы до настоящего момента пользовались помпой Insight с пультом **SightRemote**, пожалуйста **обновите прошивку помпы до версии 2.1** и ** деинсталлируйте SightRemote**.*

## Требования к аппаратному и программному обеспечению

* Помпа Accu-Chek Insight Roche (любой прошивки, все они работают) <br />, Примечание: AAPS всегда будет записывать данные в **первый базальный профиль помпы**
* Телефон на Android (будет работать любая версия, но сам AndroidAPS требует как минимум Android 5 (Lollipop).)
* Приложение AndroidAPS (не ниже v2.1) установленное на вашем телефоне

## Настройки

* Помпа Insight должна быть единовременно подключена только к одному устройству. Если вы ранее уже подсоединяли дистанционное управление (глюкометр) Insight, то его необходимо удалить из списка сопряженных устройств помпы: Меню > Настройки > Связь > Удалить устройство
    
    ![Screenshot of Remove Meter Insight](../images/Insight_RemoveMeter.png)

* В [Конфигураторе](../Configuration/Config-Builder) приложения AndroidAPS выберите Accu-Chek Insight в разделе помпа
    
    ![Screenshot of Config Builder Insight](../images/Insight_ConfigBuilder.png)

* Нажмите на значок шестеренки, чтобы открыть настройки Insight.

* В настройках помпы нажмите кнопку "Сопряжение Insight" в верхней части экрана. Вы увидете список устройств bluetooth поблизости (ниже слева).
* На помпе Insight перейдите в меню > Настройки > Связь > Добавить устройство. На помпе появится экран (внизу справа) с указанием серийного номера помпы.
    
    ![Screenshot of Insight Pairing 1](../images/Insight_Pairing1.png)

* Вернувшись к телефону, нажмите на серийный номер помпы в списке устройств Bluetooth. Затем нажмите на Сопряжение, чтобы подтвердить действие.
    
    ![Screenshot of Insight Pairing 2](../images/Insight_Pairing2.png)

* Как помпа, так и телефон отобразят код. Убедитесь, что коды одинаковы на обоих устройствах и подтвердите сопряжение на помпе и на телефоне.
    
    ![Screenshot of Insight Pairing 3](../images/Insight_Pairing3.png)

* Успешно! Похлопайте себя по спине за успешно выполненную задачу по сопряжению с AndroidAPS.
    
    ![Screenshot of Insight Pairing 4](../images/Insight_Pairing4.png)

* Чтобы убедиться, что все в порядке, вернитесь к конфигуратору в AndroidAPS и нажмите на значок настройки рядом с надписью Помпа Insight, войдите в настройки Insight, затем нажмите на Сопряжение Insight и вы увидите информацию о помпе:
    
    ![Screenshot of Insight Pairing Information](../images/Insight_PairingInformation.png)

Примечание: Постоянного соединения между помпой и телефоном не будет. A connection will only be established if neccessary (i.e. setting temporary basal rate, giving bolus, reading pump history...). Otherwise battery of phone and pump would drain way too fast.

## Settings in AAPS

![Screenshot of Insight Settings](../images/Insight_pairing.png)

In the Insight settings in AndroidAPS you can enable the following options:

* "Log site changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.  
    <font color="red">Note: A cannula change also resets Autosens</b></font>
* "Log tube changes": This adds a note to the AndroidAPS database when you run the "tube filling" program on the pump.
* "Log battery changes": This records a battery change when you put a new battery in the pump.
* "Log operating mode changes": This inserts a note in the AndroidAPS database whenever you start, stop or pause the pump.
* "Log alerts": This records a note in the AndroidAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).
* "Enable TBR emulation": The Insight pump can only issue temporary basal rates (TBRs) up to 250%. To get round this restriction, TBR emulation will instruct the pump to deliver an extended bolus for the extra insulin if you request a TBR of more than 250%.  
    <font color="red">Note: Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.</font>
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

* "Refresh": Refreshes pump status
* "Enable/Disable TBR over notification": A standard Insight pump emits an alarm when a TBR is finished. This button lets you enable or disable this alarm without the need for configuration software.
    
    ![Screenshot of Insight Status](../images/Insight_Status2.png)

## Settings in the pump

Configure alarms in the pump as follows:

* Menu > Settings > Device settings > Mode settings > Quiet > Signal > Sound Menu > Settings > Device settings > Mode settings > Quiet > Volume > 0 (remove all bars)
* Menu > Modes > Signal mode > Quiet

This will silence all alarms from the pump, allowing AndroidAPS to decide if an alarm is relevant to you. If AndroidAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

Insight pumps with newer firmware will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus). Vibration cannot be disabled. Older pumps do not vibrate in these circumstances.

## Battery replacement

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

## Insight specific errors

### Extended bolus

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Time out

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Crossing time zones with Insight pump

For information on traveling accross time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).