# Помпы Medtronic

The driver does not work with any newer models, including all models ending in G (530G, 600-series [630G, 640G, 670G], 700-series [770G, 780G], etc.).

Для работы с AAPS подходят следующие комбинации моделей и прошивок:

- 512/712 (any firmware version)
- 515/715 (any firmware version)
- 522/722 (any firmware version)
- 523/723 (прошивка 2.4 или ниже)
- 554/754 версия ЕС (прошивка 2.6A или ниже)
- 554/754 Канадская версия (прошивка 2.7A или ниже)

Проверьте прошивку в соответствии с инструкциями в [OpenAPS документы](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) и [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

## Требования к аппаратному и программному обеспечению

- **Телефон:** Драйвер Medtronic должен работать с любым телефоном на Android, поддерживающим Bluetooth-соединения. **ВАЖНО: Исполнение Bluetooth разное у разных производителей телефонов, поэтому разные модели телефонов ведут себя по-разному. Например, некоторые телефоны по-разному. включают/отключают Bluetooth. Это может повлиять на опыт пользователя, когда AAPS необходимо переподключиться к устройству типа Rileylink.**
- **Устройство, совместимое с RileyLink:** телефоны на Android не могут общаться с помпами Medtronic без отдельного устройства коммуникации. Это устройство соединяется с телефоном через Bluetooth и с помпой через совместимое радио соединение. Первое подобное устройство называлось Rileylink, но в настоящее время доступны и другие варианты с дополнительным функционалом.
    
    - Rileylink можно заказать на [getrileylink.org](https://getrileylink.org/product/rileylink916)
    - Orangelink available at [getrileylink.org](https://getrileylink.org/product/orangelink)
    - Emalink (multiple model options) available at [github.com](https://github.com/sks01/EmaLink)
    - Gnarl (требуется немного самостоятельной работы) подробности на [github.com](https://github.com/ecc1/gnarl)

Диаграмма сравнения различных совместимых с Rileylink устройств на [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart)

(MedtronicPump-configuration-of-the-pump)=

## Настройка помпы

Для удаленной отправки команд на помпу необходимо настроить следующие параметры. Шаги, необходимые для каждого изменения на Medtronic 715 показаны в скобках для каждого параметра. Точные шаги могут слегка отличаться в зависимости от типа помпы и/или версии прошивки.

- **Включить удаленный режим на помпе** (На помпе нажмите ACT\---Utilities (Утилиты) --> Remote Optiond (Опции удаленного режима), выберите "Вкл", и на следующем экране нажмите "Добавить ID" и добавьте любой случайный идентификатор, например 111111). Для того чтобы помпа ожидала удаленной связи, в списке удаленных соединений должен быть по крайней мере один идентификатор.
- **Установить Max Basal** (На помпе нажмите ACT -- Basal, --затем выберите Max Basal Rate(макс скорость базала) Например, установка этого значения в четыре раза выше максимальной стандартной скорости позволит задавать временную скорость базала на 400%. The maximum value permitted by the pump is 34.9 units per hour.
- **Set Max Bolus** (On the pump press Act and to to Bolus and then select Max Bolus) This is the largest bolus that the pump will accept. Максимальное разрешенное значение помпы составляет 25 ед.
- **Set profile to Standard**. (На помпе нажмите ACT, перейдите в Базал, а затем Select Patterns (выбрать рисунок профиля). Помпе понадобится только один профиль, а AAPS будет управлять различными профилями на телефоне. Другие профили не требуются.
- **Set Temporary Basal Rate type** (On the pump press Act and go to Basal and then Temp Basal Type). Выберите Absolute Абсолютный (не в процентах).

## Конфигурация помп Medtronic и телефона /AAPS

- **Не подключайте устройство, совместимое с RileyLink, к меню Bluetooth на телефоне.** Привязка через меню Bluetooth телефона не позволит AAPS видеть совместимое устройство Rileylink при выполнении дальнейших инструкций.
- Отключите автоматический поворот экрана на телефоне. On certain devices automatic screen rotation causes Bluetooth sessions to restart which would cause issues for your Medtronic pump. 
- Существует два способа настройки помпы Medtronic в AAPS:

1. Using the setup wizard as part of a fresh install
2. By selecting the cog icon beside the Medtronic selection in the pump selection option in Config Builder

When configuring your Medtronic pump with the setup wizard it is possible that you will be prevented from completing setup because of Bluetooth issues (e.g. you cannot succesfully connect to the pump). В этом случае следует выбрать виртуальную помпу, и перейти к опции 2.

![Medtronic Settings](../images/Medtronic01a.png)

При настройке AAPS для работы с помпой Medtronic следует задать следующие параметры: (см. рисунок выше)

- **Серийный номер помпы**: Находится на задней панели помпы и начинается с SN. Вводить надо только 6 цифр, без каких-либо других символов (например, 123456).
- **Pump Type**: Используемая модель помпы (например, 522). 
- **Частота помпы**: Есть два варианта, в зависимости от региона рынка. Проверьте [FAQ](MedtronicPump-faq) если не уверены что выбрать): 
    - для США & Канады применяется частота 916 МГц
    - для остального мира - 868 МГц
- **Max Basal on Pump (U/h)**: This needs to match the setting set on your pump (see Configuration of the pump above). Again this setting must be carefully selected as it will determine how much AAPS can deliver via your basal rate. This will effectively set the maximum temporary basal rate. As an example, setting this value to four times your maximum standard basal rate would allow a 400% Temporary Basal Rate. The maximum value permitted by the pump is 34.9 units per hour.
- **Макс. базал на помпе (ед./ч.)**: Должен соответствоватьпараметрам помпы (см. Конфигурация помпы выше). Эта настройка должна быть тщательно подобрана, так как определяет, насколько большим может быть болюс, подаваемый с AAPS.
- **Delay before Bolus is started (s)**: The number of seconds after a bolus is issued before the command is actually sent to the pump. Этот период времени позволяет пользователю отменить болюс в случае, если команда подана по ошибке. It is not possible to cancel a bolus that has started via AAPS. Единственный способ отменить уже начатый болюс - это приостановить помпу вручную, а затем возобновить ее работу.
- **Medtronic Encoding (кодировка Medtronic)**: Определяет, выполняется ли кодировка Medtronic. Выбор аппаратной кодировки (то есть кодировки, определяемой устройством Rileylink) предпочтительнее, так как приводит к меньшему количеству отправляемых данных. Выбор программной кодировки (т.е. осуществляемой AAPS) может помочь в случае частых отключений. Эта настройка игнорируется, если на устройствах Rileylink установлена прошивка версии 0.x.
- **Battery Type (Power View)**: In order to correctly determine the remaining battery power level you should select the type of AAA battery in use. Если выбран вариант кроме простого, AAPS будет отображать оставшийся заряд батареи в процентах. The following options are available:
    
    - Не выбрано (Простой вид)
    - Щелочная (Подробный вид)
    - Литиевая (Подробный вид)
    - NiZn (Extended view)
    - Никель-металлогидридная (Подробный вид)
- **Отладка болюсов/терапии Bolus/Treatments Debugging**: Выберите Вкл или Выкл в зависимости от потребности.

- **Конфигурация RileyLink Configuration**: Эта опция позволяет вам найти и связать устройство, совместимое с Rileylink. При этом выборе будут показаны устройства, совместимые с Rileylink, и уровень их сигнала.
- **Использование сканирования Scanning** активирует сканирование Bluetooth перед подключением к устройствам RileyLink. Это должно повысить надежность подключения к устройству.
- **Show battery level reported by OrangeLink/EmaLink/DiaLink** This feature is only supported on newer link devices such as the EmaLink or OrangeLink. Values will be shown in the Medtronic tab in AnroidAPS. 
- **Set neutral temp basals** By default Medtronic pumps beep on the hour when a temporary basal rate is active. Enabling this option can help reduce the number of beeps heard by interupting a temporary basal at the hour change in order to supress the beep.

## Вкладка MEDTRONIC (MDT)

![MDT Tab](../images/Medtronic02.png) When AAPS is configured to use a Medtronic pump a MDT tab will be shown in the list of tabs at the top of the screen. This tab displays the current pump status information along with some Medtronic specific actions.

- **RileyLink Status**: The current status of the connection between your phone and Rileylink compatible device. This should show as Connected at all times. Any other status may require user intervention. 
- **RileyLink Battery**: The current battery level of your EmaLink or OrangeLink device. Dependent on selecting "Show battery level reported by OrangeLink/EmaLink/DiaLink device" in the Medtronic Pump Configuration menu.
- **Pump Status**: The current status of the pump connection. As the pump will not be constantly connected this will primarily show the sleep icon. There are a number of possible other status including "Waking Up" when AAPS is trying to issue a command or other possible pump commands such as "Get Time", "Set TBR", etc.
- **Battery**: Shows battery status based on the value chosen for Battery Type (Power View) in the Medtronic Pump Configuration menu. 
- **Last connection**: How long ago the last succesful pump connection happened.
- **Last Bolus**: How long ago the last succesful bolus was delivered.
- **Base Basal Rate**: This is the base basal rate that runs on pump at this hour in your active Profile.
- **Temp basal**: Temp basal currently being delivered which can be 0 units per hour.
- **Reservoir**: How much insulin is in reservoir (updated at least every hour).
- **Errors**: Error string if there is problem (mostly shows if there is error in configuration).

At the bottom of the screen there are three buttons:

- **Refresh** is for refreshing the current status of the pump. This should only be used if the connection was lost for a sustained period as this will require a full data refresh (retrieve history, get/set time, get profile, get battery status, etc).
- **Pump History**: Shows pump history (see [below](MedtronicPump-pump-history))
- **RL Stats**: Show RL Stats (see [below](MedtronicPump-rl-status-rileylink-status))

(MedtronicPump-pump-history)=

## Журнал помпы

![Pump History Dialog](../images/Medtronic03.png)

Pump history is retrieved every 5 minutes and stored locally. Only the previous 24 hours worth of history is stored. The allows for a convinient way to see pump behaviour should that be required. The only items stored are those relevenant to AAPS and will not inlcude a configuration function that has no relevance.

(MedtronicPump-rl-status-rileylink-status)=

## Состояние RL (Состояние RileyLink)

![RileyLink Status - Settings](../images/Medtronic04.png) ![RileyLink Status - History](../images/Medtronic05.png)

The RL Status dialog has two tabs:

- **Settings**: Shows settings about the RileyLink compatible device: Configured Address, Connected Device, Connection Status, Connection Error and RileyLink Firmware versions. Device Type is always Medtronic Pump, Model would be your model, Serial number is configured serial number, Pump Frequency shows which frequency you use, Last Frequency is last frequency used.
- **History**: Shows communication history, items with RileyLink shows state changes for RileyLink and Medtronic shows which commands were sent to pump.

## Действия

When the Medtronic driver is used, two additional actions are added to Actions Tab:

- **Wake and Tune Up** - In the event that AAPS hasn't connected to your pump for a sustained period (it should connect every 5 minutes), you can force a Tune Up. This will try to contact your pump, by searching all of the possible radio frequencies used by your pump. In the event a succesful connection is made the succesful frequency will be set as the default.
- **Reset RileyLink Config** - If you reset your RileyLink compatible device you may need to use this action so that device can be reconfigured (frequency set, frequency type set, encoding configured).

## Важные Примечания

### Special attention in NS configuration needed

AAPS is using serial number for synchronization and serial number is exposed to NS. Because knowledge of serial number of old Medtronic pump can be used to control the pump remotely take special care to hardening NS site preventing leakage of SN of your pump. See https://nightscout.github.io/nightscout/security/

### OpenAPS users

OpenAPS users should note that AAPS with Medtronic uses a completely different approach than OpenAPS. Using AAPS the primary method of interacting with th pump is via your phone. In normal use cases it is likely that the only time it is required to use the pump menu is when changing resevoirs. This is very different when using OpenAPS where at least some of a bolus is usually delivered via the quick bolus buttons. In the event the pump is used to manually deliver a bolus there can be issues if AAPS attempts to deliver one at the same time. There are checks to try and prevent issues in such cases but this should still be avoided where possible.

### Logging

In the event you need to troubleshoot your Medtronic pump function select the menu icon in the upper left corner of the screen, select Maintainance and Log Settings. For troubleshooting any Medtronic issues Pump, PumpComm, PumpBTComm should be checked.

### Medtronic CGM

Medtronic CGM is currently NOT supported.

### Manual use of pump

You should avoid manually bolusing or setting TBRs on your pump. All such commands should be sent via AAPS. In the event manual commands are used there must be a delay of at least 3 minutes between them in order to reduce the risk of any issues.

### Timezone changes and DST (Daylight Saving Time) or Traveling with Medtronic Pump and AAPS

AAPS will automatically detect Timezone changes and will update the Pump's time when your phone switches to the new time.

Travelling east means you are going to be adding hours to the current time (ex. from GMT+0 to GMT+2) will not result in any issues as there will be no overlap (e.g. it won't be possible to have the same hour twice). Travelling west however can result in issues as you are effectively going back in time which can result in incorrect IOB data.

The issues seen when travelling west are known to the developers and work on a possible solution is ongoing. See https://github.com/andyrozman/RileyLinkAAPS/issues/145 for more detail. For now, please be aware that this issue may occur and carefully monitor when changing time zones.

### Is a GNARL a fully compatible Rileylink combatible device?

The GNARL code fully supports all of the functions used by the Medtronic driver in AAPS which means it is fully compatible. It is important to note that this will require addtional work as you will have to source compatible hardware and then load the GNARL code on to the device.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

(MedtronicPump-faq)=

## FAQ

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### What to do if I loose connection to RileyLink and/or pump?

There are a number of options to try and resolve connectivity issues.

- Use the "Wake Up and Tune" button in the ACT tab as detailed above.
- Disable Bluetooth on your phone, wait 10 seconds and then enable it again. This will force the Rileylink device to reconnect to the phone.
- Reset the Rileylink device. You must then use the "Reset Rileylink Config" button in the ACT tab.
- Other users have found the following steps to be effective in restoring connectivity when other methods have not: 
    1. Restart the phone
    2. *While* the phone is restarting restart the Rileylink device
    3. Open AAPS and allow the connection to restore

### How to determine what Frequency my pump uses

![Pump Model](../images/Medtronic06.png)

On the back of the pump you will find a line detailing your model number along with a special 3 letter code. The first two letters determine the frequency type and the last one determines color. Here are possible values for Frequency:

- NA - North America (in frequency selection you need to select "US & Canada (916 MHz)")
- CA - Canada (in frequency selection you need to select "US & Canada (916 MHz)")
- WW - Worldwide (in frequency selection you need to select "Worldwide (868 Mhz)")