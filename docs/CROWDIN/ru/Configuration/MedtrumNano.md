# Medtrum Nano / 300U

Настройка инсулиновой помпы Medtrum. (на сайте производителя помпа именуется насосом, что в общем-то верно. Но мы будем следовать устоявшейся традиции и именовать ее помпой - прим. перев.).

This software is part of a DIY artificial pancreas solution and is not a product but requires YOU to read, learn, and understand the system, including how to use it. Только вы несете ответственность за то, что делаете.

## Возможности работы с AAPS
* All loop functionality supported (SMB, TBR etc)
* Автоматическое определение сезонного времени и часового пояса
* Пролонгированный болюс не поддерживается драйвером AAPS

## Hardware and Software Requirements
* **Compatible Medtrum pumpbase and reservoir patches**
    - Currently supported:
        - Medtrum TouchCare Nano с помповой базой моделей: **MD0201** и **MD8201**.
        - Medtrum TouchCare 300U with pumpbase ref: **MD8301**.
        - Если у вас есть неподдерживаемая модель и вы хотите пожертвовать аппаратное обеспечение или помощь в тестировании, пожалуйста, свяжитесь с нами через discord [здесь](https://discordapp.com/channels/629952586895851530/1076120802476441641).
* **Версия 3.2.0.0 или новее, собранная и установленная** с помощью инструкций [Build APK](../Installing-AndroidAPS/Building-APK.md).
* **Compatible Android phone** with a BLE Bluetooth connection
    - См. AAPS [Примечания к выпуску](../Installing-AndroidAPS/Releasenotes.md)
* [**Continuous Glucose Monitor (CGM)**](BG-Source.md)

## Подготовка к работе

**БЕЗОПАСНОСТЬ на первом месте** Не пытайтесь выполнять этот процесс в среде, где нет возможности исправить ошибку (дополнительные патчи, инсулин, устройства управления помпой обязательны).

**Пульт PDM и приложение Medtrum не будут работать с патчем, активированным при помощи AAPS** Прежде, возможно, вы уже пользовались этим устройством и приложением для отправки команд на помпу. В целях безопасности можно пользоваться только активированным патчем с устройством или приложением, которое использовалось для его активации.

*Это НЕ означает, что следует выбросить ваш пульт PDM. Рекомендуется хранить его в надежном месте в качестве резервной копии в случае возникновения чрезвычайных ситуаций, например, если ваш телефон потеряется или AAPS работает неправильно.*

**Помпа не перестанет доставлять инсулин, если она не подключена к AAPS** Скорости Базала запрограммированы на помпе, как указано в текущем активном профиле. As long as AAPS is operational, it will send temporary basal rate commands that run for a maximum of 120 minutes. If for some reason the pump does not receive any new commands (for instance because communication was lost due to pump - phone distance) the pump will fall back to the default basal rate programmed on the pump once the Temporary Basal Rate ends.

**30 min Basal Rate Profiles are NOT supported in AAPS.** **The AAPS Profile does not support a 30 minute basal rate time frame** If you are new to AAPS and are setting up your basal rate profile for the first time, please be aware that basal rates starting on a half-hour basis are not supported, and you will need to adjust your basal rate profile to start on the hour. For example, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, this will not work. You will need to change this 1.1 unit basal rate to a time range of either 9:00-11:00 or 10:00-12:00. Несмотря на то, что аппаратное обеспечение помпы Medtrum поддерживает профили с 30-минутными отрезками базальной скорости, AAPS в настоящее время не в состоянии учесть их с помощью своих алгоритмов.

**Скорость базала 0 ед/ч НЕ поддерживается в AAPS** Помпа Medtrum не поддерживает нулевую базальную скорость; AAPS использует множество базальных профилей для автоматической терапии и поэтому не может функционировать с нулевой базовой скоростью. A temporary zero basal rate can be achieved through the "Disconnect pump" function or through a combination of Disable Loop/Temp Basal Rate or Suspend Loop/Temp Basal Rate.

## Настройки

CAUTION: When activating a patch with AAPS you **MUST** disable all other devices that can talk to the Medtrum pumpbase. например, активный пульт управления помпой PDM и приложение Medtrum. Убедитесь, что готова помповая база, есть ее серийный номер для активации нового патча.

### Step 1: Select Medtrum pump

#### Option 1: New installations

Если вы устанавливаете AAPS впервые, вам поможет **Мастер настройки**. Когда дойдете до выбора помпы, выбирайте Medtrum.

Если сомневаетесь, можете выбрать «Виртуальную помпу» и выбрать «Medtrum» после настройки AAPS (см. опцию 2).

![Setup Wizard](../images/medtrum/SetupWizard.png)

#### Option 2: The Config Builder

При существующих опциях установки вы можете выбрать помпу **Medtrum** из [конфигуратора](Config-Builder.md#config-builder-profile):

В левом верхнем углу из **выпадающего меню** выберите **Конфигуратор**\ ➜\ **Помпа**\ ➜\ **Medtrum**\, включив кнопку **Medtrum**.

Поставив флажок в **клетке** напротив **шестеренки настроек** вы активируете вкладку Medtrum в интерфейсе AAPS. Установка этого флажка облегчит доступ к командам Medtrum при использовании AAPS и настоятельно рекомендуется.

![Конфигуратор](../images/medtrum/ConfigBuilder.png)

### Шаг 2: Изменение настроек Medtrum

Введите настройки Medtrum, нажав на **шестеренку** модуля Medtrum в Конфигураторе.

![Medtrum Settings](../images/medtrum/MedtrumSettings.png)

#### Серийный номер:

Введите здесь серийный номер вашей помповой базы, находящийся на ее корпусе. Убедитесь, что серийный номер указан правильно и без пробелов (можно использовать заглавные или строчные буквы).

ПРИМЕЧАНИЕ: Этот параметр может быть изменен только при отсутствии активного патча.

#### Настройки оповещений

***По умолчанию: звуковой сигнал.***

Этот параметр изменяет способ оповещения об ошибке или предупреждении.

- Звуковой сигнал > Патч будет издавать звуковой сигнал при оповещениях и предупреждениях
- Без звука > патч не будет издавать звука при оповещениях и предупреждениях

Примечание: В беззвучном режиме AAPS по-прежнему будет подавать сигнал в зависимости от настроек громкости вашего телефона. Если вы не реагируете на сигнал, патч в конечном итоге загудит.

#### Уведомление об оповещениях помпы

***По умолчанию: включено.***

Эти настройки изменяют способ оповещения AAPS о некритичных предупреждениях помпы. When enabled a Notification will be shown on the phone when a pump warning occurs, including:
    - Низкий заряд батареи
    - В резервуаре мало инсулина (20 ед.)
    - Напоминание об истечении срока патча

В любом случае эти предупреждения также отображаются на экране Medtrum в разделе [Активные оповещения](#active-alarms).

#### Окончание срока действия патча

***По умолчанию: включено.***

This setting changes the behavior of the patch. Если включено, срок работы патча истечет через 3 дня, о чем при включенном звуке будет выдано звуковое предупреждение. Через 3 дня и 8 часов патч перестанет работать.

Если этот параметр отключен, патч не будет предупреждать вас и продолжит работать, пока не закончится заряд батареи патча или не опустеет резервуар.

#### Предупреждение об истечении срока помпы

***По умолчанию: 72 часа.***

Эта настройка изменяет время предупреждения об [истечении срока действия патча](#patch-expiration), AAPS выдаст уведомление в заданное время после активации.

#### Максимальное количество инсулина в час

***По умолчанию: 25 ед.***

Эта настройка изменяет максимальное количество инсулина, которое может быть подано в течение одного часа. Если этот предел превышен, патч будет приостановлен и подаст сигнал. Это оповещение может быть сброшено при нажатии на кнопку сброса на общем меню - см [Сброс оповещений](#reset-alarms).

Установите это значение на разумную величину вашей потребности.

#### Максимальное количество инсулина в сутки

***По умолчанию: 80 ед.***

Эта настройка изменяет максимальное количество инсулина, которое может быть подано в течение одного дня. Если этот предел превышен, патч будет приостановлен и подаст сигнал. Это оповещение может быть сброшено при нажатии на кнопку сброса на общем меню - см [Сброс оповещений](#reset-alarms).

Установите это значение на разумную величину вашей потребности.

### Шаг 2b: Настройки оповещений AAPS

Перейдите к настройкам

#### Помпа:

##### BT Watchdog

Перейдите в настройки и выберите **Помпа**:

![BT Watchdog](../images/medtrum/BTWatchdogSetting.png)

##### BT Watchdog

Этот параметр попытается обойти любые проблемы блутус BLE. Он активирует попытки снова подключиться к помпе при потере соединения. Кроме того, он будет переподключаться к помпе, когда она недоступен в течение определенного промежутка времени.

Включите этот параметр при частых проблемах соединения с помпой.

#### Локальные оповещения:

Перейдите в настройки и выберите **Локальные оповещения**:

![Local Alerts](../images/medtrum/LocalAlertsSettings.png)

##### Оповещать в случае недоступности помпы

***По умолчанию: включено.***

This setting is forced to enabled when the Medtrum driver is enabled. It will alert you when the pump is unreachable. This can happen when the pump is out of range or when the pump is not responding due to a defective patch or pumpbase, for example when water leaks between the pumpbase and the patch.

В целях безопасности эта настройка не отключается.

##### Порог недоступности помпы [min]

***Default: 30 min.***

Этот параметр изменяет время, после которого AAPS будет оповещать вас о недоступности помпы. This can happen when the pump is out of range or when the pump is not responding due to a defective patch or pumpbase, for example when water leaks between the pumpbase and the patch.

Эта настройка может быть изменена на Medtrum, но по соображениям безопасности рекомендуется оставить 30 минут.

### Шаг 3: Активировать патч

**Прежде чем продолжить:**
- Приготовьте к работе помповую базу Medtrum Nano и резервуар патча.
- Убедитесь, что AAPS правильно настроен и [профиль активирован](../Usage/Profiles.md).
- Другие устройства, которые могут общаться с помпой Medtrum отключены (пульт PDM и приложение Medtrum)

#### Активируйте патч из вкладки Medtrum

Перейдите к [вкладке Medtrum](#overview) в интерфейсе AAPS и нажмите кнопку **Сменить Патч** в правом нижнем углу.

Если патч активен, вам будет предложено сначала деактивировать его. см. [Деактивация патча](#deactivate-patch).

Следуйте подсказкам и активируйте новый патч. Обратите внимание - на этом этапе при подсказке важно подключить только базу помпы к резервуару патча. **Поместить помпу на тело и и вставить катетер следует при появлении запроса в процессе активации (после заполнения резервуара).**

##### Начните активацию

![Начните активацию](../images/medtrum/activation/StartActivation.png)

На этом шаге дважды нажмите на свой серийный номер и убедитесь, что база помпы еще не подключена к патчу.

Нажмите **Далее** для продолжения.

##### Заполните патч

![Заполните патч](../images/medtrum/activation/FillPatch.png)

После того, патч определился и заполнился минимумом 70 ед. инсулина, появится кнопка **Далее**. Нажмите ее.

##### Первичное заполнение (прайм) катетера

![Half press](../images/medtrum/activation/HalfPress.png)

Do not remove the safety lock and press the needle button on the patch.

Нажмите **Далее** для начала заполнения

![Prime progress](../images/medtrum/activation/PrimeProgress.png)

![Prime complete](../images/medtrum/activation/PrimeComplete.png)

По завершении первичного заполнения катетера нажмите **Далее**.

##### Прикрепите патч

![Attach patch](../images/medtrum/activation/AttachPatch.png)

Очистите кожу, удалите наклейки и прикрепите патч к телу. Снимите предохранительный замок и нажмите на кнопку иглы на патче, чтобы вставить катетер.

Нажмите **Далее** для активации патча.

##### Активируйте патч

![Activate patch](../images/medtrum/activation/ActivatePatch.png)

По завершении активации появится следующий экран

![Activation complete](../images/medtrum/activation/ActivationComplete.png)

Нажмите **OK** для возврата к главному экрану.

### Деактивация патча

To deactivate a currently active patch, go to the [Medtrum TAB](#overview) in the AAPS interface and press the **Change Patch** button.

![Деактивация патча](../images/medtrum/activation/DeactivatePatch.png)

Вам будет предложено подтвердить отключение текущего патча. **Please note that this action is not reversable.** When deactivation is completed, you can press **Next** to continue the process to activate a new patch. If you are not ready to activate a new patch, press **Cancel** to return to the main screen.

![Deactivate progress](../images/medtrum/activation/DeactivateProgress.png)

If Android APS in unable to deactivate the patch (For instance because the pumpbase has already been removed from the reservoir patch), you may press **Discard** to forget the current patch session and make it possible to activate a new patch.

![Deactivate complete](../images/medtrum/activation/DeactivateComplete.png)

Once deactivation is complete, press **OK** to return to main screen or press **Next** to continue the process to activate a new patch.

### Resume interrupted activation

If a patch activation is interrupted, for instance because the phone battery runs out, you can resume the activation process by going to the [Medtrum TAB](#overview) in the AAPS interface and press the **Change Patch** button.

![Resume interrupted activation](../images/medtrum/activation/ActivationInProgress.png)

Press **Next** to continue the activation process. Press **Discard** to discard the current patch session and make it possible to activate a new patch.

![Reading activation status](../images/medtrum/activation/ReadingActivationStatus.png)

The driver will try to determine the current status of the patch activation. If this was successful it will go into the activation progress at the current step.

## Общие замечания

The overview contains the current status of the Medtrum patch. It also contains buttons to change the patch, reset alarms and refresh the status.

![Medtrum Overview](../images/medtrum/Overview.png)

##### BLE Status:

This shows the current status of the Bluetooth connection to the pumpbase.

##### Last connected:

This shows the last time the pump was connected to AAPS.

##### Pump state:

This shows the current state of the pump. For example:
    - ACTIVE : The pump is activated and running normally
    - STOPPED: The patch is not activated

##### Basal type:

This shows the current basal type.

##### Скорость базала:

This shows the current basal rate.

##### предыдущий болюс:

This shows the last bolus that was delivered.

##### Активный болюс:

This shows the active bolus that is currently being delivered.

##### Активные оповещения:

This shows any active alarms that are currently active.

##### резервуар:

This shows the current reservoir level.

##### батарея:

This shows the current battery voltage of the patch.

##### Тип помпы:

This shows the current pump type number.

##### Версия ПО:

This shows the current firmware version of the patch.

##### Номер патча:

This shows the sequence number of the activated patch. This number is incremented every time a new patch is activated.

##### Патч заканчивается:

This shows the date and time when the patch will expire.

##### Обновить:

This button will refresh the status of the patch.

##### Change patch:

This button will start the process to change the patch. See [Activate patch](#activate-patch) for more information.

### Сбросить оповещения

The alarm button will appear on the overview screen when there is an active alarm that can be reset. Pressing this button will reset the alarms and resume insulin delivery if the patch has been suspended due to the alarm. E.g. when suspended due to a maximum daily insulin delivery alarm.

![Сбросить оповещения](../images/medtrum/ResetAlarms.png)

Press the **Reset Alarms** button to reset the alarms and resume normal operation.

## Устранение неполадок

### Activation interrupted

If the activation process is interrupted for example by and empty phone battery or phone crash. The activation process can be resumed by going to the change patch screen and follow the steps to resume the activation as outlined here: [Resume interrupted activation](#resume-interrupted-activation)

### Preventing patch faults

The patch can give a variety of errors. To prevent frequent errors:
- Make sure the pumpbase is properly seated in the patch and no gaps are visible.
- When filling the patch do not apply excessive force to the plunger. Do not try to fill the patch beyond the maximum that applies to your model.

## Where to get help

All of the development work for the Medtrum driver is done by the community on a **volunteer** basis; we ask that you to remember that fact and use the following guidelines before requesting assistance:

-  **Level 0:** Read the relevant section of this documentation to ensure you understand how the functionality with which you are experiencing difficulty is supposed to work.
-  **Level 1:** If you are still encountering problems that you are not able to resolve by using this document, then please go to the *#Medtrum* channel on **Discord** by using [this invite link](https://discord.gg/4fQUWHZ4Mw).
-  **Level 2:** Search existing issues to see if your issue has already been reported at [Issues](https://github.com/nightscout/AAPS/issues) if it exists, please confirm/comment/add information on your problem. If not, please create a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach [your log files](../Usage/Accessing-logfiles.md).
-  **Be patient - most of the members of our community consist of good-natured volunteers, and solving issues often requires time and patience from both users and developers.**
