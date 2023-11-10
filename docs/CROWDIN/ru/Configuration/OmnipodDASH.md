# Omnipod DASH

These instructions are for configuring the **Omnipod DASH** generation pump **(NOT Omnipod Eros)**. The Omnipod driver is available as part of AAPS (AAPS) as of version 3.0.

**This software is part of a DIY artificial pancreas solution and is not a product but requires YOU to read, learn, and understand the system, including how to use it. Только вы несете ответственность за то, что делаете.**

## Omnipod DASH specifications

These are the specifications of the **Omnipod DASH** and what differentiates it from the **Omnipod EROS**:

* Поды DASH отличаются синим колпачком на иголке (EROS имеет прозрачный колпачок). По физическим размерам поды идентичны
* Нет необходимости в отдельном устройстве блутус BLE для связи с подом (типа RileyLink, OrangeLink, или EmaLink).
* Соединение блутус только при необходимости, подключается для передачи команды и отключается сразу после этого!
* Теперь не бывает ошибок "Нет связи с устройством / подом"
* AAPS будет ждать доступности пода для отправки команд
* При активации, AAPS найдет и подключит новый под DASH.
* Ожидаемый диапазон: 5-10 метров (может индивидуально отличаться)

## Требования к аппаратному и программному обеспечению

* A new **Omnipod DASH Pod** (Identified by blue needle cap)

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

* **Совместимый Android-телефон** с рабочим модулем BLE Bluetooth
   -  Не все смартфоны и версии Android гарантированно работают. Пожалуйста, проверьте [**протестированные с DASH телефоны**](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY) или просто попробуйте с вашим телефоном и сообщите нам результат (модель смартфона, географический регион, версия Android, работает / работает с замечаниями / не работает).
   - **Важно: было много случаев постоянных, невосстановимых потерь соединения при использовании старых подов с прошивкой версии 3.XX.X. Будьте осторожны при использовании этих старых подов с AAPS, особенно с другими подключенными Bluetooth-устройствами!** Имейте в виду, что драйвер Omnipod Dash соединяется с подом по Bluetooth каждый раз, когда отправляет команду, и отсоединяется сразу после этого. The Bluetooth connections might be disturbed by other devices linked to the phone that is running AAPS, like earbuds etc... (which might cause, in rare occasions, connection issue or pod errors/loss on activation or afterwards in some phone models), or be disturbed by it.
   -  **Версия 3.0. или новее, собранная и установленная** с помощью инструкций [**Соберите собственное приложение AAPS**](../Installing-AndroidAPS/Building-APK.md).
* [**Непрерывный мониторинг гликемии**](https://androidaps.readthedocs.io/en/latest/Configuration/BG-Source.html)

These instructions will assume that you are starting a new pod session; if this is not the case, please be patient and begin this process on your following pod change.

## Before You Begin

**БЕЗОПАСНОСТЬ на первом месте** Не пытайтесь выполнять этот процесс в среде, где нет возможности исправить ошибку (дополнительные поды, инсулин, устройства управления помпой обязательны).

**Your Omnipod Dash PDM will no longer work after the AAPS Dash driver activates your pod.** Previously you used your Dash PDM to send commands to your Dash pod. Dash Pod позволяет отправлять команды только одному устройству для связи с ним. Устройство, которое успешно активирует под - единственное устройство, которому с этого момента будет разрешено с ним общаться. Это означает, что после активации пода с телефона через драйвер AAPS Dash driver, **вы больше не сможете пользоваться пультом PDM с этим подом**. Драйвер AAPS Dash в вашем телефоне отныне будет пультом PDM для пода.

*Это НЕ означает, что вы должны выбросить PDM, рекомендуется хранить его как запасной на случай чрезвычайных ситуаций, например, когда телефон потеряется или AAPS работает неправильно.*

**Your pod will not stop delivering insulin when it is not connected to AAPS**. Default basal rates are programmed on the pod on activation as defined in the current active profile. Когда работает AAPS, он будет отправлять временные команды на изменение базала, каждая из которх устанавливает базал максимум на 120 минут. Если по каким-то причинам под не получает никаких новых команд (например, вследствие потери связи с подом из-за расстояния до телефона), он автоматически вернется к базальной скорости по умолчанию.

**30 -минутные профили базала НЕ поддерживаются в AAPS.** **Профиль AAPS не поддерживает 30-минутный базальный интервал** Если вы новичок в AAPS и устанавливаете базальный профиль впервые, имейте в виду, что получасовые базальные скорости не поддерживаются в AAPS, и следует настроить свой базальный профиль на часовые интервалы. Например, если ваша базальная скорость 1,1 ед., начинается в 09:30, длится 2 часа и заканчивается в 11:30, такие настройки работать не будут. Следует изменить базал в 1,1 единицы на диапазон времени с 9:00 до 11:00 или с 10:00 до 12:00. Несмотря на то, что аппаратное обеспечение Omnipod Dash поддерживает профили с 30-минутными отрезками базальной скорости, AAPS в настоящее время не в состоянии учесть их с помощью своих алгоритмов.

**Скорость базала 0 ед/ч НЕ поддерживается в AAPS** Несмотря на то, что Omnipod Dash поддерживает нулевую базальную скорость; AAPS использует множество базальных профилей для автоматической терапии и поэтому не может функционировать с нулевой базовой скоростью. A temporary zero basal rate can be achieved through the "Disconnect pump" function or through a combination of Disable Loop/Temp Basal Rate or Suspend Loop/Temp Basal Rate.

## Включение драйвера Dash в AAPS

Активировать драйвер Omnipod Dash в AAPS можно **двумя способами**:

### Option 1: New installations

Когда вы устанавливаете AAPS впервые, вам поможет **Мастер настройки**. Когда дойдете до выбора помпы, выбирайте DASH.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

Если сомневаетесь, можете выбрать «Виртуальную помпу» и выбрать «DASH» после настройки AAPS (см. вариант 2).

### Option 2: The Config Builder

После установки AAPS можно выбрать помпу **DASH**в конфигураторе:

В левом верхнем углу из **выпадающего меню** выберите **Конфигуратор**\ ➜\ **Помпа**\ ➜\ **Dash**\, включив кнопку **Dash**.

Поставив флажок в **клетке** напротив **шестеренки настроек** вы активируете вкладку DASH в интерфейсе AAPS. Установка этого флажка облегчит доступ к командам Dash при использовании AAPS.

**ПРИМЕЧАНИЕ:** Быстрый способ доступа к настройкам [**Dash**](DanaRS-Insulin-Pump-dash-settings) находится ниже в разделе настроек Dash в этом документе.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### Верификация выбора драйвера Omnipod

Чтобы убедиться в правильном выборе драйвера Dash, смахните главный экран влево и найдите вкладку **DASH**. If you have not checked the box, you’ll find the DASH tab in the hamburger menu upper left.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## Dash Configuration

**Смахните главный экран влево** до появления вкладки **DASH**, на которой вы сможете управлять всеми функциями пода (некоторые из них неактивны или невидимы вне действующей сессии пода):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) Обновите соединение и статус пода, научитесь убирать его звуковые оповещения

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png) Управление подом (Активация, Деактивация, проверка звукового сигнала, журнал помпы)

(OmnipodDASH-активация-пода)=

### Активация Pod

1. Перейдите на вкладку **DASH**, нажмите кнопку **УПРАВЛЕНИЕ помпой (1)**, затем нажмите **Активировать Pod (2)**.

![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)    ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. Появится экран **Заполнить Pod**. Заполните новый Pod по меньшей мере 80 единицами инсулина и дождитесь двух звуковых сигналов, подтверждающих, что Pod готов к первичному заполнению катетера. При подсчете общего количества инсулина на 3 дня, учитывайте, что первичное заполнение катетера Pod потребует около 3-10 единиц инсулина.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)    ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

Ensure that the new pod and the phone running AAPS are within close proximity of each other and click the **Next** button.

**ПРИМЕЧАНИЕ**: Если вы получите сообщение об ошибке ниже (это может произойти), не паникуйте. Click on the **Retry** button. В большинстве случаев активация будет продолжена успешно.

![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

3. On the **Initialize Pod** screen, the pod will begin priming (you will hear a click followed by a series of ticking sounds as the pod primes itself).  По завершении первичного заполнения на экране появится зеленая галочка и и станет активной кнопка **Далее**. Нажмите на кнопку **Далее** для завершения инициализации и появления экрана **Подключить Pod**.

![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Затем подготавливаем инфузионный отсек нового пода. Снимите пластиковый колпачок иглы. Если вы видите нечто лишнее, торчащее из пода, отмените процесс и возьмите новый под. If everything looks OK, take off the white paper backing from the adhesive and apply the pod to the selected site on your body. When finished, click on the **Next** button.

![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

5. Теперь появится диалоговое окно **Подключить Pod**. **click on the OK button ONLY if you are ready to deploy the cannula**.

![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

6. После нажатия **OK**, понадобится некоторое время для ответа пода и введения катетера (1-2 минуты максимум), так что наберитесь терпения.

 *NOTE: Before the cannula is inserted, it is good practice to pinch the skin near the cannula insertion point. Это уменьшает болевые ощущения при вводе иглы и снижает шансы на развитие окклюзий.*

![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

7. При успешном вводе катетера появляется зеленая галочка и активируется кнопка **Далее**. Нажмите на кнопку **Далее**.

![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

9. The **Pod activated** screen is displayed. Нажмите на зеленую кнопку **Завершено**. Congratulations! Вы начали новую активную сессию Pod.

![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

10. На экране меню **управления Pod** кнопка **Активировать Pod (1)** теперь *выключена* и **Деактивировать Pod (2)** *включена*. Это потому, что под активен и вы не можете активировать дополнительный под без деактивации текущего.

    Click on the back button on your phone to return to the **DASH** tab screen which will now display Pod information for your active pod session, including current basal rate, pod reservoir level, insulin delivered, pod errors and alerts.

    For more details on the information displayed go to the [**DASH Tab**](OmnipodDASH-dash-tab) section of this document.

![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

Настройки лучше всего экспортировать ПОСЛЕ активации Pod. Do this at each pod change and once a month, copy the exported file to your internet drive. см. [** экспорт параметров **](https://androidaps.readthedocs.io/en/latest/Usage/ExportImportSettings.html?highlight=exporting#export-import-settings).


(OmnipodDASH-деактивация-пода)=

### Деактивация Pod

При нормальных условиях ожидаемое время жизни пода 3 дня (72 часа) и дополнительно 8 часов после предупреждения об истечении срока действия, в общей сложности 80 часов.

Для деактивации пода (либо по истечении срока действия, либо из-за сбоя в работе):

1. Зайдите на вкладку **DASH**, нажмите на кнопку **УПРАВЛЕНИЕ ПОМПОЙ(1)** на экране **Управление помпой Omnipod** и нажмите на кнопку **Деактивировать Pod(2)**.

![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)    ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. На экране **Деактивировать Pod** нажмите кнопку **Далее** для начала процесса деактивации пода. Вы получите подтверждающий звуковой сигнал о том, что деактивация прошла успешно.

![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg) ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)

3. После успешной деактивации на экране появится зеленая галочка. Click on the **Next** button to display the pod deactivated screen. Теперь вы можете удалить свой pod так как активная сессия завершена.

![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. Для возврата на экран **Управление помпой Omnipod** нажмите на зеленую кнопку.

![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. Теперь вы оказались в меню **Управление помпой Omnipodt**; нажмите кнопку "Назад" на телефоне, чтобы вернуться на вкладку **DASH**. Убедитесь, что **Статус помпы:** отображает сообщение **Нет активных Pod**.

![Deactivate_Pod_7](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_7.png) ![Deactivate_Pod_8](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_8.jpg)

(OmnipodDASH-возобновление-подачи-инсулина)=

### Возобновление подачи инсулина

**Примечание**: При переключениях профиля, под должен приостановить подачу инсулина перед установкой нового базального профиля. Если связь между двумя командами не удается, подача может быть приостановлена. Read [**Delivery suspended**](OmnipodDASH) in the troubleshooting section for more details.

Применяйте эту команду, чтобы приостановленный Pod возобновил подачу инсулина. After the command is successfully processed, insulin will resume normal delivery using the current basal rate based on the current time from the active basal profile. Pod снова будет принимать команды на болюс, TBR и SMB.

1. Go to the **DASH** tab and ensure the **Pod status (1)** field displays **SUSPENDED**, then press the **RESUME DELIVERY (2)** button to start the process to instruct the current pod to resume normal insulin delivery. A message **RESUME DELIVERY** will display in the **Pod Status (3)** field.

![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. When the Resume delivery command is successful, a confirmation dialog will display the message **Insulin delivery has been resumed**. Click **OK** to confirm and proceed.

![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. Вкладка **DASH** обновит поле **статус помпы (1)**и отобразит **ВЫПОЛНЯЕТСЯ,** кнопка **Возобновить подачу** больше не будет отображаться

![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

### Отключение звуковых оповещений пода

*ПРИМЕЧАНИЕ - Кнопка ЗАГЛУШИТЬ СИГНАЛЫ ОПОВЕЩЕНИЯ доступна на вкладке **DASH** только когда срабатывают оповещения об истечении срока действия пода или о малом количестве инсулина в резервуаре. Если кнопка ЗАГЛУШИТЬ СИГНАЛЫ ОПОВЕЩЕНИЯ не видна, но вы слышите звуковые сигналы из Pod, попробуйте "Обновить статус Pod".*

Дальнейшее описание поможет вам подтверждать получение и убирать звуковые сигналы, когда активное время Pod достигнет 72 часов (3х суток). Этот предел времени для оповещения определен в настройках сигналов **Времени до выключения** Dash. Максимальная продолжительность работы Pod составляет 80 часов (3е суток + 8 часов), однако производитель (Insulet) рекомендует не превышать 72 часа (3х суток).

1. When the defined **Hours before shutdown** warning time limit is reached, the pod will issue warning beeps to inform you that it is approaching its expiration time and pod change will be required soon. Проверить срок замены можно на вкладке **DASH** в поле **Срок действия Пода истекает(1)**, где показывается точное время с момента активации и текст этот становится **красным** спустя 72 часа после активации. В поле **Активные оповещения помпы (2)** отображается сообщение о статусе **Срок работы Pod истекает**. Также появится кнопка **заглушить сигналы оповещения (3)**.

![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. Go to the **DASH** tab and press the **SILENCE ALERTS (2)** button . AAPS отправляет команду на Pod, чтобы деактивировать предупреждение об истечении срока действия Pod, и обновляет состояние **Pod (1)** на ** ОПОВЕЩЕНИЕ ПРИНЯТО**.

![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. После **успешного отключения** оповещений активный Pod издаст **два сигнала** и на экране появится подтверждающее сообщение **активные оповещения заглушены**. Click the **OK** button to confirm and dismiss the dialog.


![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. Go to the **DASH** tab. Under the **Active Pod alerts** field, the warning message is no longer displayed, and the active pod will no longer issue pod expiration warning beeps.

(OmnipodDASH-view-pod-history)=

### View Pod History

This section shows you how to review your active pod history and filter by different action categories. The pod history tool allows you to view the actions and results committed to your currently active pod during its three days (72 - 80 hours) life.

This feature is helpful in verifying boluses, TBRs and basal commands that were sent to the pod. The remaining categories are useful for troubleshooting issues and determining the order of events that occurred leading up to a failure.

*NOTE:* **Only the last command can be uncertain**. New commands *will not be sent* until the **last 'uncertain' command becomes 'confirmed' or 'denied'**. The way to 'fix' uncertain commands is to **'refresh pod status'**.

1. Go to the **DASH** tab and press the **POD MGMT (1)** button to access the **Pod Management** menu and then press the **Pod history (2)** button to access the pod history screen.

![Pod_history_1](../images/DASH_images/Pod_History/Pod_history_1.jpg) ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

2. On the **Pod history** screen, the default category of **All (1)** is displayed, showing the **Date and Time (2)** of all pod **Actions (3)** and **Results (4)** in reverse chronological order. Use your phone’s **back button 2 times** to return to the **DASH** tab in the main AAPS interface.


![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(OmnipodDASH-dash-tab)=

## DASH Tab

Below is an explanation of the layout and meaning of the icons and status fields on the **DASH** tab in the main AAPS interface.

*NOTE: If any message in the **DASH** tab status fields report (uncertain), then you will need to press the Refresh button to clear it and refresh the pod status.*

![DASH_Tab_1](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

### Fields

* **Bluetooth Address:** Displays the current bluetooth address of the connected Pod.
* **Bluetooth Status:** Displays the current connection status.
* **Sequence Number:** Displays the sequence number of the active POD.
* **Firmware Version:** Displays the firmware version for the active connection.
* **Time on Pod:** Displays the current time on the Pod.
* **Pod expires:** Displays the date and time when the Pod will expire.
* **Pod status:** Displays the Pod status.
* **Last connection:** Displays time of last communication with the Pod.

   - *Moments ago* - less than 20 seconds ago.
   - *Less than a minute ago* - more than 20 seconds but less than 60 seconds ago.
   - *1 minute ago* - more than 60 seconds but less than 120 seconds (2 min)
   - *XX minutes ago* - more than 2 minutes ago as defined by the value of XX

* **Last bolus:** Displays the amount of the last bolus sent to the active pod and how long ago it was issued in parenthesis.
* **Base Basal rate:** Displays the basal rate programmed for the current time from the basal rate profile.
* **Temp basal rate:** Displays the currently running Temporary Basal Rate in the following format

   - {Units per hour} @{TBR start time}  ({minutes run}/{total minutes TBR will be run})
   - *Example:* 0.00U/h @18:25 ( 90/120 minutes)

* **Reservoir:** Displays over 50+U left when more than 50 units are left in the reservoir. Below 50 U, the exact units are displayed.
* **Total delivered:** Displays the total number of units of insulin delivered from the reservoir. This includes insulin used for activating and priming.
* **Errors:** Displays the last error encountered. Review the [Pod history](OmnipodDASH-view-pod-history) and log files for past errors and more detailed information.
*  **Active pod alerts:** Reserved for currently running alerts on the active pod.

### Buttons


![Refresh_Icon](../images/DASH_images/Refresh_LOGO.png) : Sends a refresh command to the active pod to update communication.

   * Use to refresh the pod status and dismiss status fields that contain the text (uncertain).
   * See the Troubleshooting section below for additional information.

![POD_MGMT_Icon](../images/DASH_images/POD_MGMT_LOGO.png) : Navigates to the Pod management menu.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) : When pressed this will disable the pod alerts beeps and notifications (expiry, low reservoir..).

   * Button is displayed only when pod time is past expiration warning time.
   * Upon successful dismissal, this icon will no longer appear.

![RESUME_Icon](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png) : Resumes the currently suspended insulin delivery in the active pod.

### Pod Management Menu

Below is the meaning of the icons on the **Pod Management** menu accessed by pressing **POD MGMT (0)** button from the **DASH** tab. ![DASH_Tab_2](../images/DASH_images/DASH_Tab/DASH_Tab_2.png) ![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

* 1 - [**Activate Pod**](OmnipodDASH-activate-pod) : Primes and activates a new pod.
* 2 - [**Deactivate Pod**](OmnipodDASH-deactivate-pod) : Deactivates the currently active pod.
* 3 - **Play Test Beep** : Plays a single test beep on the pod when pressed.
* 4 - [**Pod history**](OmnipodDASH-view-pod-history) : Displays the active pod activity history.

(DanaRS-Insulin-Pump-dash-settings)=

## Dash Settings

The Dash driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Dash**\ ➜\ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**. Поставив флажок в **клетке** напротив **шестеренки настроек** вы активируете вкладку DASH в интерфейсе AAPS.

![Dash_settings_1](../images/DASH_images/Dash_settings/Dash_settings_1.png) ![Dash_settings_2](../images/DASH_images/Dash_settings/Dash_settings_2.png)

**NOTE:** A faster way to access the **Dash settings** is by accessing the **3 dot menu (1)** in the upper right hand corner of the **DASH** tab and selecting **Dash preferences (2)** from the dropdown menu.

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

The settings groups are listed below; you can enable or disable via a toggle switch for most entries described below:

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

*NOTE: An asterisk (\*) denotes the default setting is enabled.*

### Confirmation beeps

Provides confirmation beeps from the pod for bolus, basal, SMB, and TBR delivery and changes.

* **Bolus beeps enabled:** Enable or disable confirmation beeps when a bolus is delivered.
* **Basal beeps enabled:** Enable or disable confirmation beeps when a new basal rate is set, active basal rate is canceled or current basal rate is changed.
* **SMB beeps enabled:** Enable or disable confirmation beeps when a SMB is delivered.
* **TBR beeps enabled:** Enable or disable confirmation beeps when a TBR is set or canceled.

### Alerts

Provides AAPS alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Note an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Dismissing the notification will NOT dismiss the alert UNLESS automatically acknowledge Pod alerts is enabled. To MANUALLY dismiss the alert you must visit the **DASH** tab and press the **Silence ALERTS button**.*

* **Expiration reminder enabled:** Enable or disable the pod expiration reminder set to trigger when the defined number of hours before shutdown is reached.
* **Hours before shutdown:** Defines the number hours before the active pod shutdown occurs, which will then trigger the expiration reminder alert.
* **Low reservoir alert enabled:** Enable or disable an alert when the pod's remaining units low reservoir limit is reached as defined in the Number of units field.
* **Number of units:** The number of units at which to trigger the pod low reservoir alert.

### Notifications

Provides AAPS notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus, and delivery suspended events were successful.

*NOTE: These are notifications only, no audible beep alerts are made.*

* **Sound for uncertain TBR notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPs is uncertain if a TBR was successfully set.
* **Sound for uncertain SMB notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if an SMB was successfully delivered.
* **Sound for uncertain bolus notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if a bolus was successfully delivered.
* **Sound when delivery suspended notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when suspend delivery was successfully delivered.

## Actions (ACT) Tab

This tab is well documented in the main AAPS documentation but there are a few items on this tab that are specific to how the Omnipod Dash pod differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main AAPS interface.

2. Under the **Careportal (1)** section the **Insulin** and **Cannula** filds will have their **age reset** to 0 days and 0 hours **after each pod change**. This is done because of how the Omnipod pump is built and operates. Since the pod inserts the cannula directly into the skin at the site of the pod application, a traditional tube is not used in Omnipod pumps. *Therefore after a pod change the age of each of these values will automatically reset to zero.* **Pump battery age** is not reported as the battery in the pod will always be more than the life of the pod (maximum 80 hours). The **pump battery** and **insulin reservoir** are self contained inside of each pod.

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### Level

**Insulin Level**

Insulin level displayed is the amount reported by Omnipod DASH. However, the pod only reports the actual insulin reservoir level when it is below 50 units. Until then “Above 50 units” will be displayed. The amount reported is not exact: when the pod reports ‘empty’ in most cases the reservoir will still have some additional units of insulin left. The omnipod DASH overview tab will display as described the below:

  * **Above 50 Units** - The Pod reports more than 50 units currently in the reservoir.
  * **Below 50 Units** - The amount of insulin remaining in the reservoir as reported by the Pod.

Additional note:
  * **SMS** - Returns value or 50+U for SMS responses
  * **Nightscout** - Uploads value of 50 when over 50 units to Nightscout (version 14.07 and older).  Newer versions will report a value of 50+ when over 50 units.

## Устранение неполадок

(OmnipodDASH-delivery-suspended)=

### Delivery suspended

  * There is no suspend button anymore. If you want to "suspend" the pod, you can set a zero TBR for x minutes.
  * During profile switches, dash must suspend delivery before setting the new basal profile. If communication fails between the two commands, then delivery can stay suspended. When this happens:
     - There will be no insulin delivery, that includes Basal, SMB, Manual bolusing etc.
     - There might be notification that one of the commands is unconfirmed: this depends on when the failure happened.
     - AAPS will try to set the new basal profile every 15 minutes.
     - AAPS will show a notification informing that the delivery is suspended every 15min, if the delivery is still suspended (resume delivery failed).
     - The [**Resume delivery**](OmnipodDASH-resuming-insulin-delivery) button will be active if the user chooses to resume delivery manually.
     - If AAPS fail to resume delivery on its own (this happens if the Pod is unreachable, sound is muted, etc), the pod will start beeping 4 time every minute for 3 minutes, then repeated every 15 minutes if delivery is still suspended for more than 20minutes.
  * For unconfirmed commands, "refresh pod status" should confirm/deny them.

**Note:** When you hear beeps from the pod, do not assume that delivery will continue without checking the phone, delivery might stay suspended, **so you need to check !**

### Pod Failures

Pods fail occasionally due to a variety of issues, including hardware issues with the Pod itself. It is best practice not to call these into Insulet, since AAPS is not an approved use case. A list of fault codes can be [**found here**](https://github.com/openaps/openomni/wiki/Fault-event-codes) to help determine the cause.

### Preventing error 49 pod failures

This failure is related to an incorrect pod state for a command or an error during an insulin delivery command. This is when the driver and Pod disagree on the actual state. The Pod (out of a build-in safety measure) then reacts with an unrecoverable error code 49 (0x31) ending up with what is know as a “screamer”: the long irritating beep that can only be stopped by punching a hole at the appropriate location at the back of the Pod. The exact origin of a “49 pod failure” often is hard to trace. In situations that are suspected for this failure to occur (for instance on application crashes, running a development version or re-installation).

### Pump Unreachable Alerts

When no communication can be established with the pod for a preconfigured time a “Pump unreachable” alert will be raised. Pump unreachable alerts can be configured by going to the top right-hand side three-dot menu, selecting **Preferences**\ ➜\ **Local Alerts**\ ➜\ **Pump unreachable threshold [min]**. Recommended value is alerting after **120** minutes.

### Export  Settings

Exporting AAPS settings enables you to restore all your settings, and maybe more importantly, all your Objectives. You may need to restore settings to the “last known working situation” or after uninstalling/reinstalling AAPS or in case of phone loss, reinstalling on the new phone.

Note: The active pod information is included in the exported settings. If you import an "old" exported file, your actual pod will "die". There is no other alternative. In some cases (like a _programmed_ phone change), you may need to use the exported file to restore AndroisAPS settings **while keeping the current active Pod**. In this case it is important to only use the recently exported settings file containing the pod currently active.

**It is good practice to do an export immediately after activating a pod**. This way you will always be able to restore the current active Pod in case of a problem. For instance when moving to another backup phone.

Regularly copy your exported settings to a safe place (as a cloud drive) that can be accessible by any phone when needed (e.g. in case of a phone loss or factory reset of the actual phone).

### Import Settings

**WARNING** Please note that importing settings will possibly import an outdated Pod status. As a result, there is a risk of losing the active Pod! (see **Exporting Settings**). It is better to only try it when no other options are available.

When importing settings with an active Pod, make sure the export was done with the currently active pod.

**Importing while on an active Pod:** (you risk losing the Pod!)

1. Make sure you are importing settings that were recently exported with the currently active Pod.
2. Import your settings
3. Check all preferences

**Importing (no active Pod session)**

1. Importing any recent export should work (see above)
2. Import your settings.
3. Check all preferences.
4. You may need to **Deactivate** the "non exixting" pod if the imported settings included any active pod data.

### Importing settings that contain Pod state from an inactive Pod

When importing settings containing data for a Pod that is no longer active, AAPS will try to connect with it, which will obviously fail. You can not activate a new Pod in this situation.

To remove the old Pod session “try” to de-activate the Pod. The de-activation will fail. Select “Retry”. After the second or third retry you will get the option to remove the pod. Once the old pod is removed you will be able to activate a new Pod.

### Reinstalling AAPS

When uninstalling AAPS you will lose all your settings, objectives and the current Pod session. To restore them make sure you have a recent exported settings file available!

When on an active Pod, make also sure that you have an export for the current Pod session or you will lose the currently active Pod when importing older settings.

1. Export your settings and store a copy in a safe place.
2. Uninstall AAPS and restart your phone.
3. Install the new version of AAPS.
4. Import your settings
5. Verify all preferences (optionally import settings again)
6. Activate a new Pod
7. When done: Export current settings

### Updating AAPS to a newer version

In most cases there is no need to uninstall. You can do an “in-place” install by starting the installation for the new version. This is also possible when on an active Pod  session.

1. Export your settings.
2. Install  the new AAPS version.
3. Verify the installation was successful
4. RESUME the Pod or activate a new Pod.
5. When done: Export current settings.

### Omnipod driver alerts

Please note that the Omnipod Dash driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action to take to resolve the cause of the triggered alert. A summary of the main alerts that you may encounter is listed below:

* No active Pod No active Pod session detected. This alert can temporarily be dismissed by pressing **SNOOZE** but it will keep triggering as long as a new pod has not been activated. Once activated this alert is automatically be silenced.
* Pod suspended Informational alert that Pod has been suspended.
* Setting basal profile failed : Delivery might be suspended! Please manually refresh the Pod status from the Omnipod tab and resume delivery if needed.. Informational alert that the Pod basal profile setting has failed, and you will need to hit *Refresh* on the Omnipod tab.
* Unable to verify whether SMB bolus succeeded. If you are sure that the Bolus didn't succeed, you should manually delete the SMB entry from Treatments. Alert that the SMB bolus command success could not be verified, you will need to verify the *Last bolus* field on the DASH tab to see if SMB bolus succeeded and if not remove the entry from the Treatments tab.
* Uncertain if "task bolus/TBR/SMB" completed, please manually verify if it was successful.

## Where to get help for Omnipod DASH driver

All of the development work for the Omnipod DASH driver is done by the community on a **volunteer** basis; we ask that you to remember that fact and use the following guidelines before requesting assistance:

-  **Level 0:** Read the relevant section of this documentation to ensure you understand how the functionality with which you are experiencing difficulty is supposed to work.
-  **Level 1:** If you are still encountering problems that you are not able to resolve by using this document, then please go to the *#AAPS* channel on **Discord** by using [this invite link](https://discord.gg/4fQUWHZ4Mw).
-  **Level 2:** Search existing issues to see if your issue has already been reported at [Issues](https://github.com/nightscout/AAPS/issues) if it exists, please confirm/comment/add information on your problem. If not, please create a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach [your log files](../Usage/Accessing-logfiles.md).
-  **Be patient - most of the members of our community consist of good-natured volunteers, and solving issues often requires time and patience from both users and developers.**
