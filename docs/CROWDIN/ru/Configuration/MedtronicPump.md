# Помпы Medtronic

**>>>> Драйвер помп Medtronic еще не является частью ветки master на AndroidAPS. Он будет доступен в следующей версии. <<<<**

* * *

Работает только с более старыми помпами Medtronic (подробнее см. ниже). Не работает с Medtronic 640G или 670G.

* * *

Несмотря на то, что драйвер Medtronic тестировался хорошей группой тестеров, это все еще бета-версия, что означает она нуждается в дополнительном тестировании большей группой людей на протяжении большего времени, поэтому, чтобы увидеть опцию с этим драйвером, в AndroidAPS нужно активировать инженерный режим.

* * *

## Требования к аппаратному и программному обеспечению

- **Телефон:**Драйвер Medtronic должен работать с любым телефоном, поддерживающим BLE. **ВАЖНО: Драйвер работает правильно на всех телефонах, а включение/отключение Bluetooth - нет(иногда требуется, когда теряется соединение с RileyLink и система не может восстанавиться автоматически). Поэтому нужно найти устройство с Android 6.0 - 8.1, в худшем случае можно установить LinegaeOS 15.1 (требуется 15.1 или ниже) на телефоне. Мы изучаем проблему с Android 9, но пока мы не нашли решения (кажется, версия работает только на некоторых моделях).**
- ** RiyeLink/Gnarl: ** Для обмена информацией с помпой необходимо устройство, которое преобразует команды BT из телефона в радиочастотные команды, которые понимает помпа. Устройство, которое выполняет эту задачу, называется RileyLink (его можно найти здесь [ getrileylink.org ](https://getrileylink.org/)). Необходима стабильная версия устройства, 0.9 для старых моделей (еще более старые версии могут работать неправильно) или 2.2 для новых моделей (на сайте RL существует опция обновления). Если вы любите приключения, можете попробовать Gnarl ([здесь](https://github.com/ecc1/gnarl)), который представляет собой клон RileyLink. 
- **помпа:** драйвер работает только со следующими моделями и версиями прошивок: 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (прошивка 2.4 или ниже)
    - 554/754 версия ЕС (прошивка 2.6A или ниже)
    - 554/754 Канадская версия (прошивка 2.7A или ниже)

## Настройка помпы

- **Включите удаленный режим на помпе** (Утилиты -> Параметры удаленной работы, выберите Да, на следующем экране выполните Добавить ID и введите липовый идентификатор (111111 или типа того). Нужен, как минимум, один идентификатор в списке идентификаторов устройств для удаленной работы. Эти опции могут выглядеть по-разному в разных моделях помп. Этот шаг важен, так как при таких настройках помпа будет чаще принимать запрос на дистанционное подключение.
- ** Установите максимальный базал ** как "максимум базала в стандартном профиле" * 4 (если вы хотите получить максимальную временную скорость базала TBR 400%). Как можно видеть в помпе, эта величина не должна превышать 35.
- **Установите макс. болюс** на помпе (максимальная величина 25)
- **Определите профиль как STD **. Это будет единственный профиль, которым мы будем пользоваться. Его также можно отключить.
- ** Задать тип временного базала TBR **как абсолютный (не в процентах)

## Настройка телефона/AndroidAPS

- **Не сопрягайте RileyLink с телефоном.** Если они сопряжены, AndroidAPS не сможете найти его в конфигурации.
- Отключите автоматическое вращение на телефоне (на некоторых устройствах в этом режиме автоматически перезапускаются сеансы bluetooth, что нам не нужно).
- Вы можете настроить помпу в AndroidAPS двумя способами: 

1. Воспользоваться Мастером (при новой установке)
2. Непосредственно на вкладке Конфигурация (Значок шестеренки в графе драйвера Medtronic)

Если вы делаете новую установку, то сразу попадаете в Мастер настройки. Иногда, если соединение BT не работает должным образом (не удается подключиться к помпе), возможно, вы не сможете выполнить настройку. В таком случае выберите виртуальную помпу и после того, как Мастер закончит работу, можно обратиться к варианту 2, который обойдет обнаружение помпы.

![MDT Settings](../images/Medtronic01.png)

You need to set following items: (see picture above)

- **Pump Serial Number**: You can find that on back side, entry SN. You need to get only number, your serial is 6 numbers.
- **Pump Type**: Which pump type you have (i.e. 522). 
- **Pump Frequency**: According to pump frequency there were two versions of Medtronic pump made (if you are not sure what frequency your pump uses, look at [FAQ](../Configuration/MedtronicPump#faq)): 
    - for US & Canada, frequency used is 916 Mhz
    - for Worldwide, frequency used is 868 Mhz
- **Max Bolus on Pump (U)** (in an hour): This needs to be set to same as on the pump. It limits how much insulin you can Bolus. If you go over this, Bolus won't be set and error will be returned. Max that can be used is 25, please set correct value for yourself here so that you don't overdose.
- **Max Basal on Pump (U/h)**: This needs to be set to same as on the pump. It limits how much basal you can get in an hour. So for example, if you want to have max TBR set to 500% and highest of your Basal patterns is 1.5 U, then you would need to set Max Basal to at least 7.5. If this setting is wrong (for example, if one of your basal pattern would go over this value, pump would return error).
- **Delay before Bolus is started (s)**: This is delay before bolus is sent to pump, so that if you change your mind you can cancel it. Canceling bolus when bolus is running is not supported by pump (if you want to stop bolus when running, you have to suspend pump and then resume).
- **Medtronic Encoding**: This is setting which determines, if 4b6b encoding that Medtronic devices do will be done in AndroidAPS or on RileyLink. If you have a RileyLink with 2.x firmware, default value will be to use Hardware encoding (= done by RileyLink), if you have 0.x firmware this setting will be ignored.
- **Battery Type (Power View)**: If you want to see battery power in your pump, you need to select type of battery you use (currently supported Lithium or Alkaline), this will in turn change display to display calculated percent and volts.
- **RileyLink Configuration**: This will find your RileyLink/GNARL device.

## MEDTRONIC (MDT) Tab

![MDT Tab](../images/Medtronic02.png)

On pump tab you can see several lines that are showing pumps (and connections) current status.

- **RileyLink Status**: It shows status of RileyLink connection. Phone should be connected to RileyLink all the time.
- **Pump Status**: Status of pump connection, this can have several values, but mostly we will see sleep icon (when pump connection is not active), when command is beeing executed, we might see "Waking Up", which is AAPS trying to make connection to your pump or description of any command that might be running on pump (ex.: Get Time, Set TBR, etc.).
- **Battery**: Shows battery status depening on your configuration. This can be simple icon showing if battery is empty or full (red if battery is getting critical, under 20%), or percent and voltage.
- **Last connection**: Time when last connection to pump was successful.
- **Last Bolus**: When last bolus was given.
- **Base Basal Rate**: This is the base basal rate that runs on pump at this hour.
- **Temp basal**: Temp basal that is running or empty.
- **Reservoir**: How much insulin is in reservoir (updated at least every hour).
- **Errors**: Error string if there is problem (mostly shows if there is error in configuration).

On lower end we have 3 buttons:

- **Refresh** is for refreshing state. This should be used only after connection was not present for long time, as this action will reset data about pump (retrieve history, get/set time, get profile, get battery status, etc).
- **Pump History**: Shows pump history (see [bellow](../Configuration/MedtronicPump#pump-history))
- **RL Stats**: Show RL Stats (see [bellow](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Pump History

![Pump History Dialog](../images/Medtronic03.png)

Pump history is retrieved every 5 minutes and stored localy. We keep history only for last 24 hours, so older entries are removed when new are added. This is simple way to see the pump history (some entries from pump might not be displayed, because they are not relevant - for example configuration of functions that are not used by AndroidAPS).

## RL Status (RileyLink Status)

![RileyLink Status - Settings](../images/Medtronic04.png) ![RileyLink Status - History](../images/Medtronic05.png)

Dialog has two tabs:

- **Settings**: Shows settings about RileyLink: Configured Address, Connected Device, Connection Status, Connection Error and RileyLink Firmware versions. Device Type is always Medtronic Pump, Model would be your model, Serial number is configured serial number, Pump Frequency shows which frequency you use, Last Frequency is last frequency used.
- **History**: Shows communication history, items with RileyLink shows state changes for RileyLink and Medtronic shows which commands were sent to pump.

## Действия

When Medtronic driver is selected, 3 possible actions can be added to Actions Tab:

- **Wake and Tune Up** - If you see that your AndroidAPS hasn't contacted your pump in a while (it should contact it every 5 minutes), you can force Tune Up. This will try to contact your pump, by searching all sub frequencies on which Pump can be contacted. If it finds one it will set it as your default frequency. 
- **Reset RileyLink Config** - If you reset your RileyLink/GNARL, you need to use this action, so that device can be reconfigured (frequency set, frequency type set, encoding configured).
- **Clear Bolus Block** - When you start bolus, we set Bolus Block, which prevents any commands to be issued to pump. If you suspend your pump and resume (to cancel bolus), you can then remove that block. Option is only there when bolus is running... 

## Important notes

### Logging

Since Medtronic driver is very new, you need to enable logging, so that we can debug and fix problems, if they should arise. Click on icon on upper left corner, select Maintainance and Log Settings. Options Pump, PumpComm, PumpBTComm need to be checked.

### RileyLink/GNARL

When you restart RileyLink or GNARL, you need to either do new TuneUp (action "Wake and Tune Up") or resend communication parameters (action "Reset RileyLink Config"), or else communication will fail.

### CGMS

Medtronic CGMS is currently NOT supported.

### Manual use of pump

You should avoid manually doing treatments things on your pump. All commands (bolus, TBR) should go through AndroidAPS, but if it happens that you will do manual commands, do NOT run commands with frequency less than 3 minutes (so if you do 2 boluses (for whatever reason), second should be started at least 3 minutes after first one).

## Timezone changes and DST (Daylight Saving Time) or Traveling with Medtronic Pump and AndroidAPS

Important thing to remember is that you should never disable loop when you are traveling (unless your CGMS can't do offline mode). AAPS will automatically detect Timezone changes and will send command to Pump to change time, when time on Phone is changed.

Now if you travel to East and your TZ changes with adding hours (ex. from GMT+0 to GMT+2), pump history won't have problem and you don't have to worry... but if you travel to West and your TZ changes by removing hours (GMT+2 to GMT-0), then sychronization might be little iffy. In clear text, that means that for next x hours you will have to be careful, because your IOB, might be little weird.

We are aware of this problem, and we are already looking into possible solution (see https://github.com/andyrozman/RileyLinkAAPS/issues/145), but for now, have that info in mind when traveling.

## FAQ

### Can I see the power of RileyLink/GNARL?

Нет. At the moment none of this devices support this and it probably won't even in the future.

### Is GNARL full replacement for RileyLink?

Yes. Author of GNARL added all functions used by Medtronic driver. All Medtronic communication is supported (at time of the writing (June/2019). GNARL can't be used for Omnipod communication. Downside of GNARL is that you have to build it yourself, and you have to have compatible version of hardware.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

### Where can I get RileyLink or GNARL?

Like mentioned before you can get devices here:

- RileyLink - You can get device here - [getrileylink.org](https://getrileylink.org/).
- GNARL - You can get info here, but device needs to be ordered elsewhere ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### What to do if I loose connection to RileyLink and/or pump?

1. Run "Wake Up and Tune" action, this will try to find right frequency to communicate with pump.
2. Disable Bluetooth, wait 10s and enable it again. This will force reconnecting to RileyLink.
3. Reset RileyLink, after you do that do not forget to run "Reset RileyLink Config" action.
4. Try 3 and 2 together.
5. Reset RileyLink and reset phone.

### How to determine what Frequency my pump uses

![Pump Model](../images/Medtronic06.png)

If you turn your pump around in first line on right side you will see special 3 letter code. First two letters determine frequency type and last one determines color. Here are possible values for Frequency:

- NA - North America (in frequency selection you need to select "US & Canada (916 MHz)")
- CA - Canada (in frequency selection you need to select "US & Canada (916 MHz)")
- WW - Worldwide (in frequency selection you need to select "Worldwide (868 Mhz)")