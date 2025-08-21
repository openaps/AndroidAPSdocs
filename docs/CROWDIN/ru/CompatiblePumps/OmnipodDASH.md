- - -
orphan: true
- - -

# Помпа Omnipod DASH

These instructions are for configuring the **Omnipod DASH** generation pump **(NOT Omnipod Eros)**, available as part of **AAPS** version 3.0.

## Технические характеристики Omnipod DASH

These are the specifications of the **Omnipod DASH** ('DASH') and what differentiates it from the **Omnipod EROS** ('EROS'):

* Поды DASH отличаются синим колпачком на иголке (EROS имеет прозрачный колпачок). The pods are otherwise identical in terms of physical dimensions.
*  DASH does not require a BLE link/bridge device (NO RileyLink, OrangeLink, or EmaLink needed).
* The DASH's bluetooth connection is used only when needed, and connects to send command and disconnects right after!
* No more "no connection to link device / pod" errors with DASH.
* **AAPS** will wait for pod's accessibility to send commands.
* On pod activation, **AAPS** will find and connect to a new DASH pod.
* Expected range: 5-10 meters (YMMV).

## Требования к аппаратному и программному обеспечению

* DASH is identified by blue needle cap.

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

* **Compatible Android phone** with a BLE Bluetooth connection  
  Be aware that **AAPS** Omnipod Dash driver connects with the DASH via Bluetooth every time it sends a command, and it disconnects right after. The Bluetooth connection can be disturbed by other bluetooth devices linked to the phone that is running **AAPS**, like earbuds etc... (which might cause, in rare occasions, connection issue or pod errors/loss on activation or afterwards in some phone models), or be disturbed by it.
   -  **Приложение AAPS версии 3.0 или новее, собранное и установленное** на основе [**инструкции по сборке приложения**](../SettingUpAaps/BuildingAaps.md).
* [**Непрерывный мониторинг гликемии**](../Getting-Started/CompatiblesCgms.md)

The instructions below explain how to activate a new pod session. Wait to close to expiry of a current pod session before trying to connect **AAPS** with a new pod. Once a pod is is cancelled it cannot reused and the disconnection will be final.

## Подготовка к работе

**SAFETY FIRST** - you should not try to connect **AAPS** to a pod for the first time without having access to extra pods, insulin, and phone devices are a must have.

**Your Omnipod Dash PDM will become redundant after the AAPS Dash driver activates your pod.** Previously a user may have operated a PDM to send commands to your DASH. A DASH will only faciiliate a single device to send commands to communicate with it. The device that successfully activates the pod is the only device allowed to communicate with it from that point forward. This means that once you activate a DASH with your Android phone through the **AAPS**, **you will no longer be able to use your PDM with that pod**. The **AAPS** Dash driver in your Android phone is now your acting PDM.

*This does NOT mean you should throw away your PDM, it is recommended to keep it around as a backup and for emergencies, for instance when your phone gets lost or AAPS is not working correctly.*

**Your pod will not stop delivering insulin when it is not connected to AAPS**. Default basal rates are programmed on the pod on activation as defined in the current active **Profile**. As long as **AAPS** is operational it will send basal rate commands that run for a maximum of 120 minutes. When for some reason the pod does not receive any new commands (for instance because communication was lost due to Pod - phone distance) the pod will automatically fall back to default basal rates.

**AAPS Profile does not support a 30 minute basal rate time frame** If you are new to **AAPS** and are setting up your basal rate **Profile** for the first time, please be aware that basal rates starting on a half-hour basis are not supported, and programmes on an hourly basis. For example, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, it is not possible replicate this im **AAPS**. You will need to change this 1.1 unit basal rate to a time range of either 9:00-11:00 or 10:00-12:00. Even though the DASH hardware itself supports the 30 minute basal rate **Profile** increments, **AAPS** does support this feature.

**0U/h profile basal rates are NOT supported in AAPS** While the DASH does support a zero basal rate, since **AAPS** uses multiples of the user's **Profile** basal rate to determine automated treatment; it cannot function with a zero basal rate. A temporary zero basal rate can be achieved through the "Disconnect pump" function or through a combination of Disable Loop/Temp Basal Rate or Suspend Loop/Temp Basal Rate. The lowest basal rate allowed in **AAPS** is 0.05U/h.

## Selecting Dash in AAPS

There are **two ways**:

### Вариант 1: При начальной установке

When installing **AAPS** for the first time, the **Setup Wizard** will guide new users through key features and installation requirements for **AAPS**. Select “DASH” when you reach Pump selection.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

When in doubt you can also select “Virtual Pump” and select “DASH” later, after setting up **AAPS** (see option 2).

### Вариант 2: Конфигуратор

On an existing installation you can select the **DASH** pump from the Config builder:

On the top-left hand corner **hamburger menu** select **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Dash**\ ➜\ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**.

Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the DASH menu to be displayed as a tab in the **AAPS** interface titled **DASH**. Checking this box will facilitate your access to the DASH commands when using **AAPS**.

**NOTE:** A faster way to access the [**Dash settings**](#omnipod-dash-settings) can be found below in the DASH settings section of this document.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### Верификация выбора драйвера Omnipod

To verify that you have selected the DASH in **AAPS**, if you have checked the box (4), **swipe to the left** from the **Overview** tab, where you will now see a **DASH** tab on **AAPS**. If this box is left unchecked, you’ll find the DASH tab in the hamburger menu upper left.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## Настройка помпы Omnipod Dash

Please **swipe left** to the **DASH** tab where you will be able to manage all pod functions (some of these functions are not enabled or visible without an active pod session):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) 'Refresh' pod connectivity and status, be able to silence pod alarms when the pod beeps

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png) 'Pod Management' (Activate, Deactivate, Play test beep, and Pod history)

(omnipod-dash-activate-pod)=

### Активация Pod

1. Перейдите на вкладку **DASH**, нажмите кнопку **УПРАВЛЕНИЕ помпой (1)**, затем нажмите **Активировать Pod (2)**.

![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)

​    ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. Появится экран **Заполнить Pod**. Заполните новый Pod по меньшей мере 80 единицами инсулина и дождитесь двух звуковых сигналов, подтверждающих, что Pod готов к первичному заполнению катетера. При подсчете общего количества инсулина на 3 дня, учитывайте, что первичное заполнение катетера Pod потребует около 3-10 единиц инсулина.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)    ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

Ensure that the new pod and the phone running **AAPS** are within close proximity of each other and click the **Next** button.

**NOTE**: if the  error message below pops up _'Could not find an available pod for activation'_ (this can happen), do not panic. Click on the **Retry** button. In most situations activation will continue successfully.

![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

3. На экране **Инициализация Pod**, Pod начнет первичное заполнение ( вы услышите щелчок с серией последующих тикающих звуков пока заполняется под).  По завершении первичного заполнения на экране появится зеленая галочка и и станет активной кнопка **Далее**. Нажмите на кнопку **Далее** для завершения инициализации и появления экрана **Подключить Pod**.

![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Next, prepare the infusion site ready to receive the new pod. Wash hands to avoid any risk of infection. Clean the infusion site by either using soap and water or an alcohol wipe to disinfect and let the skin air dry completely before proceeding. Remove the pod's blue plastic needle cap. If you see something that sticks out of the pod or unusual, cancel the process and start with a new pod. If everything looks OK, proceed to take off the white paper backing from the adhesive and apply the pod to the selected site on your body. По завершении нажмите кнопку **Далее**.

![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

5. Теперь появится диалоговое окно **Подключить Pod**. **нажимайте на кнопку OK ТОЛЬКО если вы готовы к установке катетера**.

![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

6. After pressing **OK**, it may take some time before the DASH responds and inserts the cannula (1-2 minutes maximum). Be patient.

 *ПРИМЕЧАНИЕ: Перед установкой катетера рекомендуется ущипнуть кожу рядом с местом ввода катетера. Это уменьшает болевые ощущения при вводе иглы и снижает шансы на развитие окклюзий.*

![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

7. При успешном вводе катетера появляется зеленая галочка и активируется кнопка **Далее**. Нажмите на кнопку **Далее**.

![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

9. Появится экран **Pod активирован**. Нажмите на зеленую кнопку **Завершено**. Поздравляем! You have now started a new pod session.

![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

10. На экране меню **управления Pod** кнопка **Активировать Pod (1)** теперь *выключена* и **Деактивировать Pod (2)** *включена*. Это потому, что под активен и вы не можете активировать дополнительный под без деактивации текущего.

    Нажмите на кнопку Назад на телефоне, чтобы вернуться на вкладку **DASH**, которая теперь отображает текущую информацию о Pod включая скорость базала, наполненность резервуара, введенный инсулин, ошибки и предупреждения.

    For more details on the information displayed go to the [**DASH Tab**](#omnipod-dash-tab) section of this document.

![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)

​    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

It is good practice to export settings AFTER activating the pod. Export settings should be done at each pod change and once a month, copy the exported file to your internet drive. see [**Export settings Doc**](../Maintenance/ExportImportSettings.md).


(omnipod-dash-deactivate-pod)=

### Деактивация Pod

Under normal circumstances, the expected lifetime of a pod is three days (72 hours) and an additional 8 hours after the pod expiration warning for a total of 80 hours of pod usage.

To deactivate a pod (either from expiration or from a pod failure):

1. Зайдите на вкладку **DASH**, нажмите на кнопку **УПРАВЛЕНИЕ ПОМПОЙ(1)** на экране **Управление помпой Omnipod** и нажмите на кнопку **Деактивировать Pod(2)**.

![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

​    ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. На экране **Деактивировать Pod** нажмите кнопку **Далее** для начала процесса деактивации пода. Вы получите подтверждающий звуковой сигнал о том, что деактивация прошла успешно.

![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg)

 ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)


3. После успешной деактивации на экране появится зеленая галочка. Нажмите на кнопку **Далее**, чтобы отобразился экран Pod деактивирован. Теперь вы можете удалить свой pod так как активная сессия завершена.

![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. Для возврата на экран **Управление помпой Omnipod** нажмите на зеленую кнопку.

![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. Теперь вы оказались в меню **Управление помпой Omnipodt**; нажмите кнопку "Назад" на телефоне, чтобы вернуться на вкладку **DASH**. Убедитесь, что **Статус помпы:** отображает сообщение **Нет активных Pod**.

![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

 ![Deactivate_Pod_8](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

(omnipod-dash-resuming-insulin-delivery)=

### Возобновление подачи инсулина

**Note**: During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile** as delivery can be suspended. Read [**Delivery suspended**](#omnipod-dash-delivery-suspended) in the troubleshooting section for more details.

Use this command to instruct the active, currently suspended pod to resume insulin delivery. After the command is successfully processed, insulin will resume normal delivery using the current basal rate based on the current time from the active basal **Profile**. The pod will again accept commands for bolus, **TBR**, and **SMB**.

1. Перейдите на вкладку **DASH** и убедитесь, что поле **статус Pod (1)** отображает **ПОМПА ОСТАНОВЛЕНА (ПРИОСТАНОВЛЕНО)**, затем нажмите кнопку **ВОЗОБНОВИТЬ ПОДАЧУ(2)** для передачи команды на Pod о возобновлении подачи инсулина. В поле **Статус Pod (3)** будет отображаться **ПОДАЧА ВОЗОБНОВЛЕНА**.

![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. Когда команда Возобновить подачу прошла успешно, в диалоговом окне подтверждения будет показано сообщение **Подача инсулина возобновлена**. Нажмите **OK** для подтверждения и продолжения.

![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. Вкладка **DASH** обновит поле **статус помпы (1)**и отобразит **ВЫПОЛНЯЕТСЯ,** кнопка **Возобновить подачу** больше не будет отображаться

![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

### Отключение звуковых оповещений пода

*NOTE - The SILENCE ALERTS button is only available on the **DASH** tab when the pod expiration or low reservoir alert has been triggered. If the SILENCE ALERTS button is not visible and you hear beep sounds from the pod, try to 'Refresh pod status'.*

The process below will show you how to acknowledge and dismiss pod beeps when the active pod time reaches the warning time limit before the pod expiration of 72 hours (3 days). This warning time limit is defined in the **Hours before shutdown** Dash alerts setting. The maximum life of a pod is 80 hours (3 days 8 hours), however Insulet recommends not exceeding the 72 hours (3 days) limit.

1. По достижении заданного времени предупреждения об ** отключении**, под начнет издавать сигналы о сроке отключения и приближении времени замены. Проверить срок замены можно на вкладке **DASH** в поле **Срок действия Пода истекает(1)**, где показывается точное время с момента активации и текст этот становится **красным** спустя 72 часа после активации. В поле **Активные оповещения помпы (2)** отображается сообщение о статусе **Срок работы Pod истекает**. Также появится кнопка **заглушить сигналы оповещения (3)**.

![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. Перейдите на вкладку **DASH** и нажмите кнопку **ВЫКЛЮЧИТЬ ЗВУКОВЫЕ ОПОВЕЩЕНИЯ(2)**. **AAPS** sends the command to the pod to deactivate the pod expiration warning beeps and updates the **Pod status (1)** field with **ACKNOWLEDGE ALERTS**.

![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. После **успешного отключения** оповещений активный Pod издаст **два сигнала** и на экране появится подтверждающее сообщение **активные оповещения заглушены**. Нажмите кнопку **OK** для того, чтобы подтвердить действие и убрать диалоговое окно.


![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. Перейдите на вкладку **DASH**. В поле **оповещения активного Pod ** больше не отображается предупреждение об истечении срока действия.

(omnipod-dash-view-pod-history)=

### Просмотр истории Pod

This section explains how to review your active pod history and filter by different action categories. The pod history tool allows you to view the actions and results committed to your currently active pod during its three days (72 - 80 hours) life.

This feature is helpful in verifying boluses, TBRs and basal commands that were sent to the pod. The remaining categories are useful for troubleshooting issues and determining the order of events that occurred leading up to a failure.

*NOTE:* **Only the last command can be uncertain**. New commands *will not be sent* until the **last 'uncertain' command becomes 'confirmed' or 'denied'**. The way to 'fix' uncertain commands is to **'refresh pod status'**.

1. Перейдите на вкладку **DASH**, нажмите на кнопку **УПРАВЛЕНИЕ ПОМПОЙ(1)** чтобы вызвать меню **Управление помпой Omnipod** и нажмите на кнопку **История Pod(2)** для вызова экрана истории.

![Pod_history_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)



 ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)



2. На экране **под историей** по умолчанию отображается категория **Все (1)** и показывает **Дату и время (2)** всех подов **Действия (3)** и **Результаты (4)** в обратном хронологическом порядке,. Use your phone’s **back button 2 times** to return to the **DASH** tab in the main **AAPS** interface.


![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(omnipod-dash-tab)=

## Вкладка DASH

Below is an explanation of the layout and meaning of the icons and status fields on the **DASH** tab in the main AAPS interface.

*NOTE: If any message in the **DASH** tab status fields report (uncertain), then you will need to press the Refresh button to clear it and refresh the pod status.*

![DASH_Tab_1](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

### Поля

* **АдресBluetooth-:** Отображает текущий bluetooth адрес подключенного Pod.
* **Статус Bluetooth:** Отображает текущее состояние соединения.
* **Порядковый Номер** Отображает номер последовательности активного POD.
* **Версия прошивки:** Отображает версию прошивки для активного соединения.
* **Время на Pod:** Отображает текущее время на Pod.
* Срок работы Pod истекает.
* **Статус Pod:** Отображает статус пода.
* **Прошлое подключение:** Отображает время последней связи с Pod.

   - *Только что* - меньше 20 секунд назад.
   - *Менее минуты назад* - более 20, но менее 60 секунд назад.
   - *1 минуту назад* - более 60, но менее 120 секунд (2 мин)
   - *XX минут назад* - более 2 минут назад, определяется величиной XX

* **Предыдущий болюс:** Отображает величину болюса, отправленного в активный Pod с указанием в скобках как давно он был подан.
* **Базовая скорость базала:** Отображает базовую скорость, запрограммированную на текущее время из профиля базала.
* **Временная скорость базала:** Отображает текущую временную скорость базала в следующем формате

   - {ед./час} @{ время начала врем. базала TBR} ({мин. прошло}/{всего минут TBR})
   - *Пример:* 0.00ед./ч. @18:25 ( 90/120 мин.)

* **Резервуар:** Показывает 50+ед. когда в резервуаре остается более 50 ед. Ниже 50 ед. показывается точное кол-во единиц.
* **Всего подано** Отображает общее количество единиц инсулина, доставленных из резервуара. Сюда входит инсулин, используемый для активации и заполнения инфузионного набора.
* **Ошибки:** Отображает последнюю возникшую ошибку. Review the [Pod history](#omnipod-dash-view-pod-history) and log files for past errors and more detailed information.
*  **Активные оповещения Pod** зарезервировано для текущих оповещений на активном Pod.

### Кнопки


![Refresh_Icon](../images/DASH_images/Refresh_LOGO.png) : Sends a refresh command to the active pod to update communication.

   * Используйте для обновления статуса pod и сброса полей статуса, содержащих текст (не подтверждено).
   * Дополнительную информацию см. в разделе Устранение неполадок ниже.

![POD_MGMT_Icon](../images/DASH_images/POD_MGMT_LOGO.png) : Navigates to the Pod management menu.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) : When pressed this will disable the pod alerts beeps and notifications (expiry, low reservoir..).

   * Кнопка отображается только после появления предупреждения об истечении срока действия.
   * После успешного сброса, этот значок не будет отображаться.

![RESUME_Icon](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png) : Resumes the currently suspended insulin delivery in the active pod.

### Меню управления помпой

Below is the meaning of the icons on the **Pod Management** menu accessed by pressing **POD MGMT (1)** button from the **DASH** tab.

![DASH_Tab_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

 ![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

* 2 - [**Activate Pod**](#omnipod-dash-activate-pod) : Primes and activates a new pod.
* 3 - [**Deactivate Pod**](#omnipod-dash-deactivate-pod) : Deactivates the currently active pod.
* 4 - **Воспроизвести тестовый звуковой сигнал** : При нажатии воспроизводит один тестовый сигнал на поде.
* 5 - [**Pod history**](#omnipod-dash-view-pod-history) : Displays the active pod activity history.

(omnipod-dash-settings)=

## Настройки Dash

The Dash driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Dash**\ ➜\ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**. Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the Dash menu to be displayed as a tab in the **AAPS** interface titled **DASH**.

![Dash_settings_1](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)



**NOTE:** A faster way to access the **Dash settings** is by accessing the **3 dot menu (1)** in the upper right hand corner of the **DASH** tab and selecting **Dash preferences (2)** from the dropdown menu.

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

The settings groups are listed below; you can enable or disable via a toggle switch for most entries described below:

*NOTE: An asterisk (\*) denotes the default setting is enabled.*

### Звуковые сигналы подтверждения

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

Provides confirmation beeps from the pod for bolus, basal, SMB, and TBR delivery and changes.

* **Звуковой сигнал болюса включен** Включить или отключить подтверждающие сигналы при подаче болюса.
* **Звуковой сигнал базала включен:** Включить или отключить звуки подтверждения, когда установлена новая базальная скорость, отменена или изменена действующая базальная скорость.
* **Звуковой сигнал микроболюсов SMB включен** Включить или отключить подтверждающие сигналы при подаче микроболюсов.
* **Звуковой сигнал временного базала TBR включен** Включить или отключить подтверждающие сигналы при установке или отмене TBR.

### Оповещения

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

Provides **AAPS** alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Note an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Dismissing the notification will NOT dismiss the alert UNLESS automatically acknowledge Pod alerts is enabled. To MANUALLY dismiss the alert you must visit the **DASH** tab and press the **Silence ALERTS button**.*

* **Включено напоминание об истечении срока действия:** Включение или отключение напоминания о истечении срока действия струи для срабатывания по достижении определенного количества часов до завершения работы.
* **Время до выключения**.
* **Предупреждение о низком уровне резервуара включено:** Включить или отключить оповещение, когда лимит нижнего емкости достигается как определено в поле Количество единиц емкости.
* **Количество единиц:** Количество единиц, на которые можно вызывать предупреждение о низком резервуаре резервуара.

### Уведомления

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

The Notification section allows the user to so select their preferred notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus, and delivery suspended events were successful.

*NOTE: These are notifications only, no audible beep alerts are made.*

* **Sound for uncertain TBR notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS** is uncertain if a TBR was successfully set.
* **Sound for uncertain SMB notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS**is uncertain if an SMB was successfully delivered.
* **Sound for uncertain bolus notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS**is uncertain if a bolus was successfully delivered.
* **Звук уведомлений о приостановленной подаче болюсов включен:** Включите или отключите этот параметр, чтобы вызвать звуковое оповещение и визуальное уведомление, когда успешно возобновлена приостановленная подача болюса.

## Вкладка Действия (ACT)

This tab is well documented in the main**AAPS**documentation but there are a few items on this tab that are specific to how the DASH differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main **AAPS**interface.

2. Under the **Careportal (1)** section the **Insulin** and **Cannula** fields will have their **age reset** to 0 days and 0 hours **after each pod change**. Это происходит из-за устройства и принципа работы Omnipod. Так как Pod вводит катетер непосредственно в кожу на месте установки, в помпах Omnipod не применяется традиционная трубка. *Поэтому после замены пода значение каждой из этих величин автоматически сбрасывается на ноль***Возраст батареи помпы**не отображается поскольку он всегда больше срока работы пода (максимум 80 часов). **Батарея помпы** и **резервуар инсулина** в каждом поде свои.

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### Уровень

**Insulin Level**

Insulin level displayed is the amount reported by DASH. However, the pod only reports the actual insulin reservoir level when it is below 50 units. Until then “Above 50 units” will be displayed. The amount reported is not exact: when the pod reports ‘empty’ in most cases the reservoir will still have some additional units of insulin left. The DASH overview tab will display as described the below:

  * **Above 50 Units** - The pod reports more than 50 units currently in the reservoir.
  * **Ниже 50 ед.**- Количество инсулина, остающегося в резервуаре по данным, полученным от Pod.

Additional note:
  * **SMS** - В SMS сообщается реальный остаток в ед. или 50+ед
  * **Nightscout** - при более чем 50 единиц в Nightscout выгружается значение 50 ед.(версия 14.07 и старше).  Более новые версии покажут 50 + когда более 50 единиц.

## Устранение неполадок

(omnipod-dash-delivery-suspended)=

### Подача приостановлена

  * Кнопки приостановки больше нет. If you want to "suspend" the pod, you can set a zero **TBR** for x minutes.
  * During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile**. Если между двумя командами происходит обрыв связи, подача может быть приостановлена. Когда это происходит:
     - Подачи инсулина не будет, включая Базал, SMB, болюс и т. д.
     - Может быть уведомление о том, что одна из команд не подтверждена: это зависит от того, когда произошел сбой.
     - **AAPS** will try to set the new basal profile every 15 minutes.
     - **AAPS** will show a notification informing that the delivery is suspended every 15 minutes, if the delivery is still suspended (resume delivery failed).
     - The [**Resume delivery**](#omnipod-dash-resuming-insulin-delivery) button will be active if the user chooses to resume delivery manually.
     - If **AAPS** fails to resume delivery on its own (this happens if the pod is unreachable, sound is muted, etc), the pod will start beeping 4 times every minute for 3 minutes, then repeated every 15 minutes if delivery is still suspended for more than 20 minutes.
  * Для неподтвержденных команд "Обновить статус помпы" их подтвердит/запретит.

**Note:** When you hear beeps from the pod, do not assume that delivery will continue without checking the phone, delivery might stay suspended, **so you need to check !**

### Сбои в работе Pod

Pods fail occasionally due to a variety of issues, including hardware issues with the Pod itself. It is best practice not to call these into Insulet, since AAPS is not an approved use case. A list of fault codes can be [**found here**](https://github.com/openaps/openomni/wiki/Fault-event-codes) to help determine the cause.

### Предотвращение ошибки 49 при сбоях Pod

This failure is related to an incorrect pod state for a command or an error during an insulin delivery command. This is when the driver and Pod disagree on the actual state. The Pod (out of a built-in safety measure) then reacts with an unrecoverable error code 49 (0x31) ending up with what is know as a “screamer”: the long irritating beep that can only be stopped by punching a hole at the appropriate location at the back of the Pod. The exact origin of a “49 pod failure” often is hard to trace. In situations that are suspected for this failure to occur (for instance on application crashes, running a development version or re-installation).

### Оповещения о недоступности помпы

When no communication can be established with the pod for a preconfigured time a “Pump unreachable” alert will be raised. Pump unreachable alerts can be configured by going to the top right-hand side three-dot menu, selecting **Preferences**\ ➜\ **Local Alerts**\ ➜\ **Pump unreachable threshold [min]**. Recommended value is alerting after **120** minutes.

### Настройки экспорта

Exporting **AAPS** settings enables you to restore all your settings, and maybe more importantly, all your Objectives. You may need to restore settings to the “last known working situation” or after uninstalling/reinstalling **AAPS** or in case of phone loss, reinstalling on the new phone.

Note: The active pod information is included in the exported settings. If you import an "old" exported file, your actual pod will "die". There is no other alternative. In some cases (like a _programmed_ phone change), you may need to use the exported file to restore **AAPS'** settings **while keeping the current active Pod**. In this case it is important to only use the recently exported settings file containing the pod currently active.

**It is good practice to do an export immediately after activating a pod**. This way you will always be able to restore the current active pod in case of a problem. For instance when moving to another backup phone.

Regularly copy your exported settings to a safe place (as a cloud drive) that can be accessible by any phone when needed (e.g. in case of a phone loss or factory reset of the actual phone).

### Импорт настроек

**WARNING** Please note that importing settings will possibly import an outdated Pod status. As a result, there is a risk of losing the active Pod! (see **Exporting Settings**). It is better to only try it when no other options are available.

When importing settings with an active Pod, make sure the export was done with the currently active pod.

**Importing while on an active Pod:** (you risk losing the Pod!)

1. Убедитесь, что вы импортируете настройки, которые были недавно экспортированы с текущим активным Pod.
2. Импортируйте настройки.
3. Проверьте все настройки.

**Importing (no active Pod session)**

1. Должен работать импорт последнего экспорта (см. выше)
2. Импортируйте настройки.
3. Проверьте все настройки.
4. You may need to **Deactivate** the "non existing" pod if the imported settings included any active pod data.

### Импорт настроек, которые содержат состояние Pod из неактивного Pod

When importing settings containing data for a Pod that is no longer active, AAPS will try to connect with it, which will obviously fail. You can not activate a new Pod in this situation.

To remove the old pod session “try” to de-activate the Pod. The de-activation will fail. Select “Retry”. After the second or third retry you will get the option to remove the pod. Once the old pod is removed you will be able to activate a new pod.

### Переустановка AAPS

When uninstalling**AAPS** you will lose all your settings, objectives and the current Pod session. To restore them make sure you have a recent exported settings file available!

When on an active Pod, make sure that you have an export for the current pod session or you will lose the currently active pod when importing older settings.

1. Экспортируйте ваши настройки и храните копию в надежном месте.
2. Uninstall **AAPS** and restart your phone.
3. Install the new version of **AAPS**.
4. Импортируйте настройки.
5. Verify all preferences (optionally import settings again).
6. Activate a new pod.
7. Когда закончите: Экспортируйте текущие настройки.

### Обновление AAPS до более новой версии

In most cases there is no need to uninstall. You can do an “in-place” install by starting the installation for the new version. This is also possible when on an active Pod  session.

1. Экспортируйте настройки.
2. Install the new **AAPS** version.
3. Убедитесь, что установка прошла успешно
4. RESUME the Pod or activate a new pod.
5. Когда закончите: Экспортируйте текущие настройки.

### Оповещения драйвера Omnipod

Please note that the Omnipod Dash driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action to take to resolve the cause of the triggered alert. A summary of the main alerts that you may encounter is listed below:

* Активный сеанс Pod не обнаружен. Это предупреждение можно временно отклонить, нажав **УБРАТЬ**, но оно будет продолжать срабатывать до тех пор, пока не активирован новый Pod. После активации предупреждение автоматически заглушается.
* Pod suspended Informational alert that pod has been suspended.
* Setting basal **Profile** failed : Delivery might be suspended! Обновите статус Pod вручную на вкладке Omnipod и, при необходимости, возобновите подачу.. Informational alert that the Pod basal **Profile** setting has failed, and you will need to hit *Refresh* on the Omnipod tab.
* Unable to verify whether **SMB** bolus succeeded. Если вы уверены, что болюс не подан, следует вручную удалить запись о СМБ из терапии. Alert that the **SMB** bolus command success could not be verified, you will need to verify the *Last bolus* field on the DASH tab to see if **SMB** bolus succeeded and if not remove the entry from the Treatments tab.
* Неопределено, если "задача bolus/TBR/SMB" завершена, пожалуйста, проверьте правильность выполнения.

## Where to get help for DASH

All of the development work for the DASH is done by the community on a **volunteer** basis; please keep this in mind and use the following guidelines before requesting assistance:

-  **Уровень 0:** Прочитайте соответствующий раздел этой документации, чтобы удостовериться, что вы понимаете, как должна работать функция, с которой вы испытываете трудности.
-  **Уровень 1:** Если вы все еще сталкиваетесь с проблемами, которые не можете решить, изучая документацию, перейдите в канал *#AAPS* на **Discord** с помощью [этой ссылки-приглашения](https://discord.gg/4fQUWHZ4Mw).
-  **Уровень 2:** Найдите, есть ли ваш случай среди существующих [проблем](https://github.com/nightscout/AndroidAPS/issues), и если есть, подтвердите/прокомментируйте/добавьте информацию о нем. Если нет, создайте [новый вопрос](https://github.com/nightscout/AndroidAPS/issues) и приложите [свои лог-файлы](../GettingHelp/AccessingLogFiles.md).
-  **Будьте терпеливы - решения проблем часто требуют времени и терпения как от пользователей, так и от разработчиков.**
