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

WARNING: There are currently reported Bluetooth connection issues with the following combination of **AAPS** / DASH / Android 15. **AAPS** should not be  in combination with Android 15 and DASH unless the user has checked the following [**List**](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) and verified their phone is not known reported issue. **AAPS** is currently working to resolve this issue.

## Требования к аппаратному и программному обеспечению

* DASH is identified by blue needle cap.

![Под Omnipod](../images/DASH_images/Omnipod_Pod.png)

* **Compatible Android phone** with a BLE Bluetooth connection  
  Be aware that **AAPS** Omnipod Dash driver connects with the DASH via Bluetooth every time it sends a command, and it disconnects right after. The Bluetooth connection can be disturbed by other bluetooth devices linked to the phone that is running **AAPS**, like earbuds etc... (which might cause, in rare occasions, connection issue or pod errors/loss on activation or afterwards in some phone models), or be disturbed by it.
   -  **Приложение AAPS версии 3.0 или новее, собранное и установленное** на основе [**инструкции по сборке приложения**](../SettingUpAaps/BuildingAaps.md).
* [**Непрерывный мониторинг гликемии**](../Getting-Started/CompatiblesCgms.md)

The instructions below explain how to activate a new pod session. Wait to close to expiry of a current pod session before trying to connect **AAPS** with a new pod. Once a pod is is cancelled it cannot reused and the disconnection will be final.

## Подготовка к работе

**SAFETY FIRST** - you should not try to connect **AAPS** to a pod for the first time without having access to extra pods, insulin, and phone devices are a must have.

**Your Omnipod Dash PDM will become redundant after the AAPS Dash driver activates your pod.** Previously a user may have operated a PDM to send commands to your DASH. A DASH will only faciiliate a single device to send commands to communicate with it. Устройство, которое успешно активирует под - единственное устройство, которому с этого момента будет разрешено с ним общаться. This means that once you activate a DASH with your Android phone through the **AAPS**, **you will no longer be able to use your PDM with that pod**. The **AAPS** Dash driver in your Android phone is now your acting PDM.

*Это НЕ означает, что вы должны выбросить PDM, рекомендуется хранить его как запасной на случай чрезвычайных ситуаций, например, когда телефон потеряется или AAPS работает неправильно.*

**Ваш под не перестанет вводить инсулин, если он не подключён к AAPS**. Default basal rates are programmed on the pod on activation as defined in the current active **Profile**. As long as **AAPS** is operational it will send basal rate commands that run for a maximum of 120 minutes. Если по каким-то причинам под не получает никаких новых команд (например, вследствие потери связи с подом из-за расстояния до телефона), он автоматически вернется к базальной скорости по умолчанию.

**AAPS Profile does not support a 30 minute basal rate time frame** If you are new to **AAPS** and are setting up your basal rate **Profile** for the first time, please be aware that basal rates starting on a half-hour basis are not supported, and programmes on an hourly basis. For example, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, it is not possible replicate this im **AAPS**. Следует изменить базал в 1,1 единицы на диапазон времени с 9:00 до 11:00 или с 10:00 до 12:00. Even though the DASH hardware itself supports the 30 minute basal rate **Profile** increments, **AAPS** does support this feature.

**0U/h profile basal rates are NOT supported in AAPS** While the DASH does support a zero basal rate, since **AAPS** uses multiples of the user's **Profile** basal rate to determine automated treatment; it cannot function with a zero basal rate. Нулевая временная скорость базала может быть достигнута с помощью функции "Отсоединить помпу" или путем комбинации команд Деактивировать цикл/Временная базальная скорость или Приостановить цикл/Временная базальная скорость. The lowest basal rate allowed in **AAPS** is 0.05U/h.

## Selecting Dash in AAPS

There are **two ways**:

### Вариант 1: При начальной установке

When installing **AAPS** for the first time, the **Setup Wizard** will guide new users through key features and installation requirements for **AAPS**. Когда дойдете до выбора помпы, выбирайте DASH.

![Включить Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

When in doubt you can also select “Virtual Pump” and select “DASH” later, after setting up **AAPS** (see option 2).

### Вариант 2: Конфигуратор

После установки AAPS можно выбрать помпу **DASH**в конфигураторе:

В левом верхнем углу из **выпадающего меню** выберите **Конфигуратор**\ ➜\ **Помпа**\ ➜\ **Dash**\, включив кнопку **Dash**.

Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the DASH menu to be displayed as a tab in the **AAPS** interface titled **DASH**. Checking this box will facilitate your access to the DASH commands when using **AAPS**.

**NOTE:** A faster way to access the [**Dash settings**](#dash-settings) can be found below in the DASH settings section of this document.

![Включить Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### Верификация выбора драйвера Omnipod

To verify that you have selected the DASH in **AAPS**, if you have checked the box (4), **swipe to the left** from the **Overview** tab, where you will now see a **DASH** tab on **AAPS**. If this box is left unchecked, you’ll find the DASH tab in the hamburger menu upper left.

![Включить Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## Настройка помпы Omnipod Dash

**Смахните главный экран влево** до появления вкладки **DASH**, на которой вы сможете управлять всеми функциями пода (некоторые из них неактивны или невидимы вне действующей сессии пода):

![Обновить Лого](../images/DASH_images/Refresh_LOGO.png) 'Refresh' pod connectivity and status, be able to silence pod alarms when the pod beeps

![УПРАВЛЕНИЕ ПОМПОЙ](../images/DASH_images/POD_MGMT_LOGO.png) 'Pod Management' (Activate, Deactivate, Play test beep, and Pod history)


### Активация Pod

1. Перейдите на вкладку **DASH**, нажмите кнопку **УПРАВЛЕНИЕ помпой (1)**, затем нажмите **Активировать Pod (2)**.

![Активировать Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)

​    ![Активировать Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. Появится экран **Заполнить Pod**. Заполните новый Pod по меньшей мере 80 единицами инсулина и дождитесь двух звуковых сигналов, подтверждающих, что Pod готов к первичному заполнению катетера. При подсчете общего количества инсулина на 3 дня, учитывайте, что первичное заполнение катетера Pod потребует около 3-10 единиц инсулина.

![Активировать Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)    ![Активировать Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

Ensure that the new pod and the phone running **AAPS** are within close proximity of each other and click the **Next** button.

**NOTE**: if the  error message below pops up _'Could not find an available pod for activation'_ (this can happen), do not panic. Нажмите на кнопку **Повторить**. В большинстве случаев активация будет продолжена успешно.

![Активировать Pod_3](../images/DASH_images/Activate_pod_error.png)

3. На экране **Инициализация Pod**, Pod начнет первичное заполнение ( вы услышите щелчок с серией последующих тикающих звуков пока заполняется под).  По завершении первичного заполнения на экране появится зеленая галочка и и станет активной кнопка **Далее**. Нажмите на кнопку **Далее** для завершения инициализации и появления экрана **Подключить Pod**.

![Активировать Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Активировать Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Next, prepare the infusion site ready to receive the new pod. Wash hands to avoid any risk of infection. Clean the infusion site by either using soap and water or an alcohol wipe to disinfect and let the skin air dry completely before proceeding. Remove the pod's blue plastic needle cap. If you see something that sticks out of the pod or unusual, cancel the process and start with a new pod. If everything looks OK, proceed to take off the white paper backing from the adhesive and apply the pod to the selected site on your body. По завершении нажмите кнопку **Далее**.

![Активировать Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

5. Теперь появится диалоговое окно **Подключить Pod**. **нажимайте на кнопку OK ТОЛЬКО если вы готовы к установке катетера**.

![Активировать Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

6. After pressing **OK**, it may take some time before the DASH responds and inserts the cannula (1-2 minutes maximum). Be patient.

 *ПРИМЕЧАНИЕ: Перед установкой катетера рекомендуется ущипнуть кожу рядом с местом ввода катетера. Это уменьшает болевые ощущения при вводе иглы и снижает шансы на развитие окклюзий.*

![Активировать Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Активировать Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

7. При успешном вводе катетера появляется зеленая галочка и активируется кнопка **Далее**. Нажмите на кнопку **Далее**.

![Активировать Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

9. Появится экран **Pod активирован**. Нажмите на зеленую кнопку **Завершено**. Поздравляем! You have now started a new pod session.

![Активировать Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

10. На экране меню **управления Pod** кнопка **Активировать Pod (1)** теперь *выключена* и **Деактивировать Pod (2)** *включена*. Это потому, что под активен и вы не можете активировать дополнительный под без деактивации текущего.

    Нажмите на кнопку Назад на телефоне, чтобы вернуться на вкладку **DASH**, которая теперь отображает текущую информацию о Pod включая скорость базала, наполненность резервуара, введенный инсулин, ошибки и предупреждения.

    Подробнее об информации на дисплее см в разделе [**Вкладка DASH**](#dash-tab) документации.

![Активировать Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)

​    ![Активировать Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

Настройки лучше всего экспортировать ПОСЛЕ активации Pod. Export settings should be done at each pod change and once a month, copy the exported file to your internet drive. см. [**Экспорт настроек Doc**](../Maintenance/ExportImportSettings.md).


(OmnipodDASH-деактивация-пода)=

### Деактивация Pod

При нормальных условиях ожидаемое время жизни пода 3 дня (72 часа) и дополнительно 8 часов после предупреждения об истечении срока действия, в общей сложности 80 часов.

Для деактивации пода (либо по истечении срока действия, либо из-за сбоя в работе):

1. Зайдите на вкладку **DASH**, нажмите на кнопку **УПРАВЛЕНИЕ ПОМПОЙ(1)** на экране **Управление помпой Omnipod** и нажмите на кнопку **Деактивировать Pod(2)**.

![Деактивировать Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

​    ![Деактивировать Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. На экране **Деактивировать Pod** нажмите кнопку **Далее** для начала процесса деактивации пода. Вы получите подтверждающий звуковой сигнал о том, что деактивация прошла успешно.

![Деактивировать Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg)

 ![Отключить Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)


3. После успешной деактивации на экране появится зеленая галочка. Нажмите на кнопку **Далее**, чтобы отобразился экран Pod деактивирован. Теперь вы можете удалить свой pod так как активная сессия завершена.

![Деактивировать Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. Для возврата на экран **Управление помпой Omnipod** нажмите на зеленую кнопку.

![Деактивировать Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. Теперь вы оказались в меню **Управление помпой Omnipodt**; нажмите кнопку "Назад" на телефоне, чтобы вернуться на вкладку **DASH**. Убедитесь, что **Статус помпы:** отображает сообщение **Нет активных Pod**.

![Деактивировать Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

 ![Деактивировать Pod_8](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

### Возобновление подачи инсулина

**Note**: During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile** as delivery can be suspended. См. раздел [**Приостановка подачи инсулина **](#delivery-suspended) для более подробной информации.

Применяйте эту команду, чтобы приостановленный Pod возобновил подачу инсулина. After the command is successfully processed, insulin will resume normal delivery using the current basal rate based on the current time from the active basal **Profile**. The pod will again accept commands for bolus, **TBR**, and **SMB**.

1. Перейдите на вкладку **DASH** и убедитесь, что поле **статус Pod (1)** отображает **ПОМПА ОСТАНОВЛЕНА (ПРИОСТАНОВЛЕНО)**, затем нажмите кнопку **ВОЗОБНОВИТЬ ПОДАЧУ(2)** для передачи команды на Pod о возобновлении подачи инсулина. В поле **Статус Pod (3)** будет отображаться **ПОДАЧА ВОЗОБНОВЛЕНА**.

![Возобновить 1](../images/DASH_images/Resume/Resume_1.jpg)   ![Возобновить_2](../images/DASH_images/Resume/Resume_2.jpg)

2. Когда команда Возобновить подачу прошла успешно, в диалоговом окне подтверждения будет показано сообщение **Подача инсулина возобновлена**. Нажмите **OK** для подтверждения и продолжения.

![Возобновить 3](../images/DASH_images/Resume/Resume_3.png)

3. Вкладка **DASH** обновит поле **статус помпы (1)**и отобразит **ВЫПОЛНЯЕТСЯ,** кнопка **Возобновить подачу** больше не будет отображаться

![Возобновить_4](../images/DASH_images/Resume/Resume_4.jpg)

### Отключение звуковых оповещений пода

*ПРИМЕЧАНИЕ - Кнопка ЗАГЛУШИТЬ СИГНАЛЫ ОПОВЕЩЕНИЯ доступна на вкладке **DASH** только когда срабатывают оповещения об истечении срока действия пода или о малом количестве инсулина в резервуаре. Если кнопка ЗАГЛУШИТЬ СИГНАЛЫ ОПОВЕЩЕНИЯ не видна, но вы слышите звуковые сигналы из Pod, попробуйте "Обновить статус Pod".*

Дальнейшее описание поможет вам подтверждать получение и убирать звуковые сигналы, когда активное время Pod достигнет 72 часов (3х суток). Этот предел времени для оповещения определен в настройках сигналов **Времени до выключения** Dash. Максимальная продолжительность работы Pod составляет 80 часов (3е суток + 8 часов), однако производитель (Insulet) рекомендует не превышать 72 часа (3х суток).

1. По достижении заданного времени предупреждения об ** отключении**, под начнет издавать сигналы о сроке отключения и приближении времени замены. Проверить срок замены можно на вкладке **DASH** в поле **Срок действия Пода истекает(1)**, где показывается точное время с момента активации и текст этот становится **красным** спустя 72 часа после активации. В поле **Активные оповещения помпы (2)** отображается сообщение о статусе **Срок работы Pod истекает**. Также появится кнопка **заглушить сигналы оповещения (3)**.

![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. Перейдите на вкладку **DASH** и нажмите кнопку **ВЫКЛЮЧИТЬ ЗВУКОВЫЕ ОПОВЕЩЕНИЯ(2)**. **AAPS** sends the command to the pod to deactivate the pod expiration warning beeps and updates the **Pod status (1)** field with **ACKNOWLEDGE ALERTS**.

![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. После **успешного отключения** оповещений активный Pod издаст **два сигнала** и на экране появится подтверждающее сообщение **активные оповещения заглушены**. Нажмите кнопку **OK** для того, чтобы подтвердить действие и убрать диалоговое окно.


![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. Перейдите на вкладку **DASH**. В поле **оповещения активного Pod ** больше не отображается предупреждение об истечении срока действия.

(OmnipodDASH--просмотр-истории) =

### Просмотр истории Pod

This section explains how to review your active pod history and filter by different action categories. Инструмент истории пода позволяет просматривать действия текущего активного пода за трое суток (72 - 80 часов).

Эта функция полезна для верификации болюсов, временной скорости базала TBR и команд на изменение базала, которые были отправлены на под. Остальные категории полезны для решения проблем, а также для определения хода событий, приводящих к сбою.

*ПРИМЕЧАНИЕ:* **Только последняя команда может быть неопределенной**. Новые команды *не отправляются/0> пока **последняя команда 'не подтверждено' не станет 'подтверждено' или 'отклонено'**. 'Исправить' неопределенную команду можно нажав **обновить статус пода **.</p>

1. Перейдите на вкладку **DASH**, нажмите на кнопку **УПРАВЛЕНИЕ ПОМПОЙ(1)** чтобы вызвать меню **Управление помпой Omnipod** и нажмите на кнопку **История Pod(2)** для вызова экрана истории.

![Под_история_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)



 ![Под_история_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)



2. На экране **под историей** по умолчанию отображается категория **Все (1)** и показывает **Дату и время (2)** всех подов **Действия (3)** и **Результаты (4)** в обратном хронологическом порядке,. Use your phone’s **back button 2 times** to return to the **DASH** tab in the main **AAPS** interface.


![Под-история_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Под_история_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(OmnipodDASH-dash-вкладка)=

## Вкладка DASH

Ниже приведено объяснение расположения и значения иконок и информационных полей на вкладке **DASH** в главном интерфейсе AAPS.

*ПРИМЕЧАНИЕ: Если в каком-то из информационных полей вкладки **DASH**появляется сообщение "не подтверждено" нажмите кнопку Обновить для получения точного статуса.*

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
* **Ошибки:** Отображает последнюю возникшую ошибку. Просмотрите [Журнал Pod](#view-pod-history) и файлы журналов для поиска прошлых ошибок и более подробной информации.
*  **Активные оповещения Pod** зарезервировано для текущих оповещений на активном Pod.

### Кнопки


![Обновить](../images/DASH_images/Refresh_LOGO.png) : Отправляет команду refresh в активный Pod для обновления коммуникации.

   * Используйте для обновления статуса pod и сброса полей статуса, содержащих текст (не подтверждено).
   * Дополнительную информацию см. в разделе Устранение неполадок ниже.

![Значок POD_MGMT_](../images/DASH_images/POD_MGMT_LOGO.png) : Перейдите в меню управления Pod.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) : При нажатии отключает звуки и уведомления (истечение срока действия, мало инсулина в резервуаре..).

   * Кнопка отображается только после появления предупреждения об истечении срока действия.
   * После успешного сброса, этот значок не будет отображаться.

![Значок RESUME_](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png) : Возобновляет приостановленную подачу инсулина в активном Pod.

### Меню управления помпой

Ниже приведено значение пиктограмм в меню **Управление помпой **, доступном после нажатием кнопки **УПРАВЛЕНМЕ ПОМПОЙ (1)** на вкладке **DASH**.

![DASH_Tab_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

 ![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

* 2 - [**Активировать Pod**](#activate-pod) : Заполняет и активирует новый Pod.
* 3 - [**Деактивировать Pod**](#deactivate-pod) : Деактивирует текущий Pod.
* 4 - **Воспроизвести тестовый звуковой сигнал** : При нажатии воспроизводит один тестовый сигнал на поде.
* 5 - [**журнал Pod **](#view-pod-history) : Отображает историю активности Pod.

(DanaRS-Insulin-Pump-dash-settings)=

## Настройки Dash

Настройки помпы Dash доступны из левого верхнего **выпадающего меню** выберите **Конфигуратор(1)**\ ➜\ **Помпа**\ ➜\ **Dash**\ ➜\ **Шестеренка настроек (3)** включив ** радио кнопку (2) **с маркировкой **Dash**. Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the Dash menu to be displayed as a tab in the **AAPS** interface titled **DASH**.

![Dash_settings 1](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)



**ПРИМЕЧАНИЕ:** Более быстрый способ доступа к настройкам **Dash** - через меню **3 точки (1)** в правом верхнем углу вкладки **DASH** выбрать **Настройки Dash (2)** из выпадающего меню.

![Dash_settings 3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

Группы настроек перечислены ниже; вы можете включить или отключить их через переключатель большинства функций описанных ниже:

*ПРИМЕЧАНИЕ: Знак (\*) обозначает значение по умолчанию.*

### Звуковые сигналы подтверждения

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

Обеспечивает звуковые сигналы подтверждения от Pod об успешной подаче болюса, изменении базала, SMB и TBR.

* **Звуковой сигнал болюса включен** Включить или отключить подтверждающие сигналы при подаче болюса.
* **Звуковой сигнал базала включен:** Включить или отключить звуки подтверждения, когда установлена новая базальная скорость, отменена или изменена действующая базальная скорость.
* **Звуковой сигнал микроболюсов SMB включен** Включить или отключить подтверждающие сигналы при подаче микроболюсов.
* **Звуковой сигнал временного базала TBR включен** Включить или отключить подтверждающие сигналы при установке или отмене TBR.

### Оповещения

![Настройки Dash 5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

Provides **AAPS** alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Примечание: уведомления AAPS выдаются ВСЕГДА для любого оповещения после связи с pod с момента срабатывания оповещения. Сброс уведомления НЕ удалит оповещение, ЕСЛИ НЕ включено автоматическое подтверждение получения оповещений. Чтобы ВРУЧНУЮ убрать оповещение следует открыть вкладку **DASH** и нажать кнопку **Заглущать СИГНАЛЫ ОПОВЕЩЕНИЯ**.*

* **Включено напоминание об истечении срока действия:** Включение или отключение напоминания о истечении срока действия струи для срабатывания по достижении определенного количества часов до завершения работы.
* **Время до выключения**.
* **Предупреждение о низком уровне резервуара включено:** Включить или отключить оповещение, когда лимит нижнего емкости достигается как определено в поле Количество единиц емкости.
* **Количество единиц:** Количество единиц, на которые можно вызывать предупреждение о низком резервуаре резервуара.

### Уведомления

![Настройки Dash 6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

The Notification section allows the user to so select their preferred notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus, and delivery suspended events were successful.

*ПРИМЕЧАНИЕ: Это только уведомления, звуковые оповещения об ошибках не производится.*

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

**Уровень инсулина**

Insulin level displayed is the amount reported by DASH. Вместе с тем Pod сообщает только о фактическом уровне инсулина, когда он ниже 50 единиц. До этого будет отображаться "выше 50 единиц". Уровень, указанный помпой, в большинстве случаев не является точным: в резервуар будет оставаться несколько дополнительных единиц инсулина. The DASH overview tab will display as described the below:

  * **Above 50 Units** - The pod reports more than 50 units currently in the reservoir.
  * **Ниже 50 ед.**- Количество инсулина, остающегося в резервуаре по данным, полученным от Pod.

Дополнительные замечания:
  * **SMS** - В SMS сообщается реальный остаток в ед. или 50+ед
  * **Nightscout** - при более чем 50 единиц в Nightscout выгружается значение 50 ед.(версия 14.07 и старше).  Более новые версии покажут 50 + когда более 50 единиц.

## Устранение неполадок

### Подача приостановлена

  * Кнопки приостановки больше нет. If you want to "suspend" the pod, you can set a zero **TBR** for x minutes.
  * During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile**. Если между двумя командами происходит обрыв связи, подача может быть приостановлена. Когда это происходит:
     - Подачи инсулина не будет, включая Базал, SMB, болюс и т. д.
     - Может быть уведомление о том, что одна из команд не подтверждена: это зависит от того, когда произошел сбой.
     - **AAPS** will try to set the new basal profile every 15 minutes.
     - **AAPS** will show a notification informing that the delivery is suspended every 15 minutes, if the delivery is still suspended (resume delivery failed).
     - Если пользователь решит возобновить введение инсулина вручную, то к его услугам будет активна кнопка [**Возобновить подачу**](#resuming-insulin-delivery).
     - If **AAPS** fails to resume delivery on its own (this happens if the pod is unreachable, sound is muted, etc), the pod will start beeping 4 times every minute for 3 minutes, then repeated every 15 minutes if delivery is still suspended for more than 20 minutes.
  * Для неподтвержденных команд "Обновить статус помпы" их подтвердит/запретит.

**Примечание:** При получении звуковых сигналов от пода, не следует полагать, что подача будет продолжена без проверки телефона, она может остаться приостановленой, **поэтому следует это проверить!**

### Сбои в работе Pod

Поды иногда подводят из-за различных проблем, включая аппаратные неполадки в самих Pod. В Insulet с этим лучше не обращаться в, поскольку приложение AAPS пока не получила официального одобрения. Список ошибок [**можно найти здесь**](https://github.com/openaps/openomni/wiki/Fault-event-codes) для помощи в определении причины.

### Предотвращение ошибки 49 при сбоях Pod

Эта неисправность связана с некорректным состоянием Pod во время команды или ошибки при подаче инсулина. В этот момент драйвер и Pod не согласны с фактическим состоянием. Под (из мер встроенной безопасности) реагирует неисправимым кодом ошибки 49 (0x31), заканчивающимся "кричащим": длинным раздражающим звуковым сигналом который можно остановить, только пробив отверстие в соответствующем месте на задней стороне Pod. Точное происхождение "ошибки 49" зачастую трудно отследить. В ситуациях, когда имеются подозрения в возникновении такой ошибки (например, при сбоях приложения, выполнении версии разработки или переустановке).

### Оповещения о недоступности помпы

Когда связь с стружкой не может быть установлена в течение запланированного времени, дается оповещение «Помпа недоступна». Оповещения о недоступности помпы можно настроить перейдя в верхнее правое трехточечное меню, выбрав **Настройки**\ ➜\ **Локальные оповещения**\ ➜\ **Порог оповещения Помпа недоступна [min]**. Рекомендуемое величина задержки оповещания **120** минут.

### Настройки экспорта

Exporting **AAPS** settings enables you to restore all your settings, and maybe more importantly, all your Objectives. You may need to restore settings to the “last known working situation” or after uninstalling/reinstalling **AAPS** or in case of phone loss, reinstalling on the new phone.

Примечание: Активная информация о поде включена в экспортируемые настройки. Если вы импортируете "старый" файл, ваш реальный под "недействителен". Других альтернатив нет. In some cases (like a _programmed_ phone change), you may need to use the exported file to restore **AAPS'** settings **while keeping the current active Pod**. В этом случае необходимо использовать только недавно экспортированный файл настроек, содержащий именно этот под.

**Полезно сделать экспорт сразу же после активации пода**. This way you will always be able to restore the current active pod in case of a problem. Например, при перемещении на другой резервный телефон.

Регулярно копируйте экспортированные настройки в безопасное место (как облачный диск), которые могут быть доступны по мере необходимости на любом телефоне (eнапример, в случае потери телефона или сбросе актуального телефона).

### Импорт настроек

**ВНИМАНИЕ** Обратите внимание, что при импорте настроек может быть импортирован устаревший статус пода. В результате существует риск потери активного Pod! (см. **Экспорт настроек**). Лучше пробовать этот вариант только когда другие опции не доступны.

При импорте настроек с активным Pod, убедитесь, что экспорт был сделан с активныого pod.

**Импорт во время активного Pod:** (вы рискуете потерять Pod!)

1. Убедитесь, что вы импортируете настройки, которые были недавно экспортированы с текущим активным Pod.
2. Импортируйте настройки.
3. Проверьте все настройки.

**Импорт (нет активных сессий Pod)**

1. Должен работать импорт последнего экспорта (см. выше)
2. Импортируйте настройки.
3. Проверьте все настройки.
4. Возможно, вам придется **деактивировать** «несуществующий» под, если импортированные настройки включают какие-либо активные данные пода.

### Импорт настроек, которые содержат состояние Pod из неактивного Pod

При импорте параметров, содержащих данные Pod, которые больше не активны, AAPS попытается соединиться с ним, что не сработает. В этой ситуации невозможно активировать новый Pod.

To remove the old pod session “try” to de-activate the Pod. Деактивация не удастся. Выберите "Повторить". После второго или третьего повтора вы получите возможность удалить Pod. Once the old pod is removed you will be able to activate a new pod.

### Переустановка AAPS

When uninstalling**AAPS** you will lose all your settings, objectives and the current Pod session. Чтобы восстановить их, убедитесь, что у вас есть недавний экспортированный файл настроек!

When on an active Pod, make sure that you have an export for the current pod session or you will lose the currently active pod when importing older settings.

1. Экспортируйте ваши настройки и храните копию в надежном месте.
2. Uninstall **AAPS** and restart your phone.
3. Install the new version of **AAPS**.
4. Импортируйте настройки.
5. Verify all preferences (optionally import settings again).
6. Activate a new pod.
7. Когда закончите: Экспортируйте текущие настройки.

### Обновление AAPS до более новой версии

В большинстве случаев нет необходимости удалять. Вы можете установить "на месте", начав установку новой версии. Это также возможно при активном Pod.

1. Экспортируйте настройки.
2. Install the new **AAPS** version.
3. Убедитесь, что установка прошла успешно
4. RESUME the Pod or activate a new pod.
5. Когда закончите: Экспортируйте текущие настройки.

### Оповещения драйвера Omnipod

Обратите внимание, что драйвер Omnipod Dash содержит множество уоповещений на вкладке **Начало**, большинство из них являются информационными и могут быть отключены, в то время как некоторые предоставляют пользователю возможности устранения причин оповещения. Ниже приводится краткая информация об основных оповещениях:

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
