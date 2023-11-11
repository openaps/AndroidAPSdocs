# Omnipod DASH

These instructions are for configuring the **Omnipod DASH** generation pump **(NOT Omnipod Eros)**. The Omnipod driver is available as part of AAPS (AAPS) as of version 3.0.

**This software is part of a DIY artificial pancreas solution and is not a product but requires YOU to read, learn, and understand the system, including how to use it. Только вы несете ответственность за то, что делаете.**

## Технические характеристики Omnipod DASH

Характеристики **Omnipod DASH** и ее отличия от **Omnipod EROS**:

* Поды DASH отличаются синим колпачком на иголке (EROS имеет прозрачный колпачок). По физическим размерам поды идентичны
* Нет необходимости в отдельном устройстве блутус BLE для связи с подом (типа RileyLink, OrangeLink, или EmaLink).
* Соединение блутус только при необходимости, подключается для передачи команды и отключается сразу после этого!
* Теперь не бывает ошибок "Нет связи с устройством / подом"
* AAPS будет ждать доступности пода для отправки команд
* При активации, AAPS найдет и подключит новый под DASH.
* Ожидаемый диапазон: 5-10 метров (может индивидуально отличаться)

## Требования к аппаратному и программному обеспечению

* Новый **под Omnipod DASH** (определяется по синему колпачку иглы)

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

* **Совместимый Android-телефон** с рабочим модулем BLE Bluetooth
   -  Не все смартфоны и версии Android гарантированно работают. Пожалуйста, проверьте [**протестированные с DASH телефоны**](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY) или просто попробуйте с вашим телефоном и сообщите нам результат (модель смартфона, географический регион, версия Android, работает / работает с замечаниями / не работает).
   - **Важно: было много случаев постоянных, невосстановимых потерь соединения при использовании старых подов с прошивкой версии 3.XX.X. Будьте осторожны при использовании этих старых подов с AAPS, особенно с другими подключенными Bluetooth-устройствами!** Имейте в виду, что драйвер Omnipod Dash соединяется с подом по Bluetooth каждый раз, когда отправляет команду, и отсоединяется сразу после этого. Соединения Bluetooth могут быть нарушены другими устройствами, связанными с телефоном, на котором работает AAPS, такими как беспроводные наушники и т. д... (что в редких случаях может вызвать проблемы подключения, погрешности при активации или после нее на некоторых моделях телефонов).
   -  **Версия 3.0. или новее, собранная и установленная** с помощью инструкций [**Соберите собственное приложение AAPS**](../Installing-AndroidAPS/Building-APK.md).
* [**Непрерывный мониторинг гликемии**](https://androidaps.readthedocs.io/en/latest/Configuration/BG-Source.html)

В этих инструкциях предполагается, что вы запускаете новую сессию пода; если это не так, дождитесь замены и начните этот процесс со следующего пода.

## Подготовка к работе

**БЕЗОПАСНОСТЬ на первом месте** Не пытайтесь выполнять этот процесс в среде, где нет возможности исправить ошибку (дополнительные поды, инсулин, устройства управления помпой обязательны).

**Пульт PDM не будет работать с Omnipod Dash после того, как драйвер Dash активирует под.** Раньше пульт PDM служил для отправки команд на под Dash. Dash Pod позволяет отправлять команды только одному устройству для связи с ним. Устройство, которое успешно активирует под - единственное устройство, которому с этого момента будет разрешено с ним общаться. Это означает, что после активации пода с телефона через драйвер AAPS Dash driver, **вы больше не сможете пользоваться пультом PDM с этим подом**. Драйвер AAPS Dash в вашем телефоне отныне будет пультом PDM для пода.

*Это НЕ означает, что вы должны выбросить PDM, рекомендуется хранить его как запасной на случай чрезвычайных ситуаций, например, когда телефон потеряется или AAPS работает неправильно.*

**Ваш под не перестанет вводить инсулин, если он не подключён к AAPS**. Базальная скорость программируется на поде при активации в соответствии с вашим текущим активным профилем. Когда работает AAPS, он будет отправлять временные команды на изменение базала, каждая из которх устанавливает базал максимум на 120 минут. Если по каким-то причинам под не получает никаких новых команд (например, вследствие потери связи с подом из-за расстояния до телефона), он автоматически вернется к базальной скорости по умолчанию.

**30 -минутные профили базала НЕ поддерживаются в AAPS.** **Профиль AAPS не поддерживает 30-минутный базальный интервал** Если вы новичок в AAPS и устанавливаете базальный профиль впервые, имейте в виду, что получасовые базальные скорости не поддерживаются в AAPS, и следует настроить свой базальный профиль на часовые интервалы. Например, если ваша базальная скорость 1,1 ед., начинается в 09:30, длится 2 часа и заканчивается в 11:30, такие настройки работать не будут. Следует изменить базал в 1,1 единицы на диапазон времени с 9:00 до 11:00 или с 10:00 до 12:00. Несмотря на то, что аппаратное обеспечение Omnipod Dash поддерживает профили с 30-минутными отрезками базальной скорости, AAPS в настоящее время не в состоянии учесть их с помощью своих алгоритмов.

**Скорость базала 0 ед/ч НЕ поддерживается в AAPS** Несмотря на то, что Omnipod Dash поддерживает нулевую базальную скорость; AAPS использует множество базальных профилей для автоматической терапии и поэтому не может функционировать с нулевой базовой скоростью. Нулевая временная скорость базала может быть достигнута с помощью функции "Отсоединить помпу" или путем комбинации команд Деактивировать цикл/Временная базальная скорость или Приостановить цикл/Временная базальная скорость.

## Включение драйвера Dash в AAPS

Активировать драйвер Omnipod Dash в AAPS можно **двумя способами**:

### Вариант 1: При начальной установке

Когда вы устанавливаете AAPS впервые, вам поможет **Мастер настройки**. Когда дойдете до выбора помпы, выбирайте DASH.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

Если сомневаетесь, можете выбрать «Виртуальную помпу» и выбрать «DASH» после настройки AAPS (см. вариант 2).

### Вариант 2: Конфигуратор

После установки AAPS можно выбрать помпу **DASH**в конфигураторе:

В левом верхнем углу из **выпадающего меню** выберите **Конфигуратор**\ ➜\ **Помпа**\ ➜\ **Dash**\, включив кнопку **Dash**.

Поставив флажок в **клетке** напротив **шестеренки настроек** вы активируете вкладку DASH в интерфейсе AAPS. Установка этого флажка облегчит доступ к командам Dash при использовании AAPS.

**ПРИМЕЧАНИЕ:** Быстрый способ доступа к настройкам [**Dash**](DanaRS-Insulin-Pump-dash-settings) находится ниже в разделе настроек Dash в этом документе.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### Верификация выбора драйвера Omnipod

Чтобы убедиться в правильном выборе драйвера Dash, смахните главный экран влево и найдите вкладку **DASH**. Если вы не отметили этот драйвер галочкой на странице конфигурации,, вы найдете вкладку DASH в левом верхнем меню. (похоже, в новейших версиях AAPS левого выпадающего меню нет. - прим. перев.).

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## Настройка помпы Omnipod Dash

**Смахните главный экран влево** до появления вкладки **DASH**, на которой вы сможете управлять всеми функциями пода (некоторые из них неактивны или невидимы вне действующей сессии пода):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) Обновите соединение и статус пода, научитесь убирать его звуковые оповещения

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png) Управление подом (Активация, Деактивация, проверка звукового сигнала, журнал помпы)

(OmnipodDASH-активация-пода)=

### Активация Pod

1. Перейдите на вкладку **DASH**, нажмите кнопку **УПРАВЛЕНИЕ помпой (1)**, затем нажмите **Активировать Pod (2)**.

![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)    ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. Появится экран **Заполнить Pod**. Заполните новый Pod по меньшей мере 80 единицами инсулина и дождитесь двух звуковых сигналов, подтверждающих, что Pod готов к первичному заполнению катетера. При подсчете общего количества инсулина на 3 дня, учитывайте, что первичное заполнение катетера Pod потребует около 3-10 единиц инсулина.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)    ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

Убедитесь, что новый под и телефон с запущенным AAPS находятся в непосредственной близости друг от друга и и нажмите кнопку **Далее**.

**ПРИМЕЧАНИЕ**: Если вы получите сообщение об ошибке ниже (это может произойти), не паникуйте. Нажмите на кнопку **Повторить**. В большинстве случаев активация будет продолжена успешно.

![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

3. На экране **Инициализация Pod**, Pod начнет первичное заполнение ( вы услышите щелчок с серией последующих тикающих звуков пока заполняется под).  По завершении первичного заполнения на экране появится зеленая галочка и и станет активной кнопка **Далее**. Нажмите на кнопку **Далее** для завершения инициализации и появления экрана **Подключить Pod**.

![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Затем подготавливаем инфузионный отсек нового пода. Снимите пластиковый колпачок иглы. Если вы видите нечто лишнее, торчащее из пода, отмените процесс и возьмите новый под. Если все выглядит нормально, снимите белую бумажную защиту с клеевого слоя и наложите на выбранное место установки. По завершении нажмите кнопку **Далее**.

![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

5. Теперь появится диалоговое окно **Подключить Pod**. **нажимайте на кнопку OK ТОЛЬКО если вы готовы к установке катетера**.

![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

6. После нажатия **OK**, понадобится некоторое время для ответа пода и введения катетера (1-2 минуты максимум), так что наберитесь терпения.

 *ПРИМЕЧАНИЕ: Перед установкой катетера рекомендуется ущипнуть кожу рядом с местом ввода катетера. Это уменьшает болевые ощущения при вводе иглы и снижает шансы на развитие окклюзий.*

![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

7. При успешном вводе катетера появляется зеленая галочка и активируется кнопка **Далее**. Нажмите на кнопку **Далее**.

![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

9. Появится экран **Pod активирован**. Нажмите на зеленую кнопку **Завершено**. Поздравляем! Вы начали новую активную сессию Pod.

![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

10. На экране меню **управления Pod** кнопка **Активировать Pod (1)** теперь *выключена* и **Деактивировать Pod (2)** *включена*. Это потому, что под активен и вы не можете активировать дополнительный под без деактивации текущего.

    Нажмите на кнопку Назад на телефоне, чтобы вернуться на вкладку **DASH**, которая теперь отображает текущую информацию о Pod включая скорость базала, наполненность резервуара, введенный инсулин, ошибки и предупреждения.

    Более подробно о показываемой информации в разделе [**Вкладка DASH**](OmnipodDASH-dash-tab) этого документа.

![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

Настройки лучше всего экспортировать ПОСЛЕ активации Pod. Делайте это при каждой замене пода и раз в месяц, копируйте экспортированный файл на ваш интернет-диск. см. [** экспорт параметров **](https://androidaps.readthedocs.io/en/latest/Usage/ExportImportSettings.html?highlight=exporting#export-import-settings).


(OmnipodDASH-деактивация-пода)=

### Деактивация Pod

При нормальных условиях ожидаемое время жизни пода 3 дня (72 часа) и дополнительно 8 часов после предупреждения об истечении срока действия, в общей сложности 80 часов.

Для деактивации пода (либо по истечении срока действия, либо из-за сбоя в работе):

1. Зайдите на вкладку **DASH**, нажмите на кнопку **УПРАВЛЕНИЕ ПОМПОЙ(1)** на экране **Управление помпой Omnipod** и нажмите на кнопку **Деактивировать Pod(2)**.

![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)    ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. На экране **Деактивировать Pod** нажмите кнопку **Далее** для начала процесса деактивации пода. Вы получите подтверждающий звуковой сигнал о том, что деактивация прошла успешно.

![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg) ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)

3. После успешной деактивации на экране появится зеленая галочка. Нажмите на кнопку **Далее**, чтобы отобразился экран Pod деактивирован. Теперь вы можете удалить свой pod так как активная сессия завершена.

![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. Для возврата на экран **Управление помпой Omnipod** нажмите на зеленую кнопку.

![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. Теперь вы оказались в меню **Управление помпой Omnipodt**; нажмите кнопку "Назад" на телефоне, чтобы вернуться на вкладку **DASH**. Убедитесь, что **Статус помпы:** отображает сообщение **Нет активных Pod**.

![Deactivate_Pod_7](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_7.png) ![Deactivate_Pod_8](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_8.jpg)

(OmnipodDASH-возобновление-подачи-инсулина)=

### Возобновление подачи инсулина

**Примечание**: При переключениях профиля, под должен приостановить подачу инсулина перед установкой нового базального профиля. Если связь между двумя командами не удается, подача может быть приостановлена. Прочтите раздел [**Введение инсулина приостановлено**](OmnipodDASH) для получения более подробной информации.

Применяйте эту команду, чтобы приостановленный Pod возобновил подачу инсулина. После успешной обработки команды, нормальная подача инсулина возобновится в соответствии с текущим активным профилем базала. Pod снова будет принимать команды на болюс, TBR и SMB.

1. Перейдите на вкладку **DASH** и убедитесь, что поле **статус Pod (1)** отображает **ПОМПА ОСТАНОВЛЕНА (ПРИОСТАНОВЛЕНО)**, затем нажмите кнопку **ВОЗОБНОВИТЬ ПОДАЧУ(2)** для передачи команды на Pod о возобновлении подачи инсулина. В поле **Статус Pod (3)** будет отображаться **ПОДАЧА ВОЗОБНОВЛЕНА**.

![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. Когда команда Возобновить подачу прошла успешно, в диалоговом окне подтверждения будет показано сообщение **Подача инсулина возобновлена**. Нажмите **OK** для подтверждения и продолжения.

![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. Вкладка **DASH** обновит поле **статус помпы (1)**и отобразит **ВЫПОЛНЯЕТСЯ,** кнопка **Возобновить подачу** больше не будет отображаться

![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

### Отключение звуковых оповещений пода

*ПРИМЕЧАНИЕ - Кнопка ЗАГЛУШИТЬ СИГНАЛЫ ОПОВЕЩЕНИЯ доступна на вкладке **DASH** только когда срабатывают оповещения об истечении срока действия пода или о малом количестве инсулина в резервуаре. Если кнопка ЗАГЛУШИТЬ СИГНАЛЫ ОПОВЕЩЕНИЯ не видна, но вы слышите звуковые сигналы из Pod, попробуйте "Обновить статус Pod".*

Дальнейшее описание поможет вам подтверждать получение и убирать звуковые сигналы, когда активное время Pod достигнет 72 часов (3х суток). Этот предел времени для оповещения определен в настройках сигналов **Времени до выключения** Dash. Максимальная продолжительность работы Pod составляет 80 часов (3е суток + 8 часов), однако производитель (Insulet) рекомендует не превышать 72 часа (3х суток).

1. По достижении заданного времени предупреждения об ** отключении**, под начнет издавать сигналы о сроке отключения и приближении времени замены. Проверить срок замены можно на вкладке **DASH** в поле **Срок действия Пода истекает(1)**, где показывается точное время с момента активации и текст этот становится **красным** спустя 72 часа после активации. В поле **Активные оповещения помпы (2)** отображается сообщение о статусе **Срок работы Pod истекает**. Также появится кнопка **заглушить сигналы оповещения (3)**.

![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. Перейдите на вкладку **DASH** и нажмите кнопку **ВЫКЛЮЧИТЬ ЗВУКОВЫЕ ОПОВЕЩЕНИЯ(2)**. AAPS отправляет команду на Pod, чтобы деактивировать предупреждение об истечении срока действия Pod, и обновляет состояние **Pod (1)** на ** ОПОВЕЩЕНИЕ ПРИНЯТО**.

![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. После **успешного отключения** оповещений активный Pod издаст **два сигнала** и на экране появится подтверждающее сообщение **активные оповещения заглушены**. Нажмите кнопку **OK** для того, чтобы подтвердить действие и убрать диалоговое окно.


![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. Перейдите на вкладку **DASH**. В поле **оповещения активного Pod ** больше не отображается предупреждение об истечении срока действия.

(OmnipodDASH--просмотр-истории) =

### Просмотр истории Pod

В этом разделе показано, как просмотреть историю активного пода и отфильтровать ее по различным категориям. Инструмент истории пода позволяет просматривать действия текущего активного пода за трое суток (72 - 80 часов).

Эта функция полезна для верификации болюсов, временной скорости базала TBR и команд на изменение базала, которые были отправлены на под. Остальные категории полезны для решения проблем, а также для определения хода событий, приводящих к сбою.

*ПРИМЕЧАНИЕ:* **Только последняя команда может быть неопределенной**. Новые команды *не отправляются/0> пока **последняя команда 'не подтверждено' не станет 'подтверждено' или 'отклонено'**. 'Исправить' неопределенную команду можно нажав **обновить статус пода **.</p>

1. Перейдите на вкладку **DASH**, нажмите на кнопку **УПРАВЛЕНИЕ ПОМПОЙ(1)** чтобы вызвать меню **Управление помпой Omnipod** и нажмите на кнопку **История Pod(2)** для вызова экрана истории.

![Pod_history_1](../images/DASH_images/Pod_History/Pod_history_1.jpg) ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

2. На экране **под историей** по умолчанию отображается категория **Все (1)** и показывает **Дату и время (2)** всех подов **Действия (3)** и **Результаты (4)** в обратном хронологическом порядке,. Нажмите кнопку назад **в телефоне 2 раза** для возврата на вкладку **DASH** в главном интерфейсе AAPS.


![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(OmnipodDASH-dash-вкладка)=

## Вкладка DASH

Ниже приведено объяснение расположения и значения иконок и информационных полей на вкладке **DASH** в главном интерфейсе AAPS.

*NOTE: If any message in the **DASH** tab status fields report (uncertain), then you will need to press the Refresh button to clear it and refresh the pod status.*

![DASH_Tab_1](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

### Fields

* **АдресBluetooth-:** Отображает текущий bluetooth адрес подключенного Pod.
* **Статус Bluetooth:** Отображает текущее состояние соединения.
* **Порядковый Номер** Отображает номер последовательности активного POD.
* **Версия прошивки:** Отображает версию прошивки для активного соединения.
* **Время на Pod:** Отображает текущее время на Pod.
* **Pod expires:** Displays the date and time when the Pod will expire.
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
   - *Example:* 0.00U/h @18:25 ( 90/120 minutes)

* **Резервуар:** Показывает 50+ед. когда в резервуаре остается более 50 ед. Ниже 50 ед. показывается точное кол-во единиц.
* **Всего подано** Отображает общее количество единиц инсулина, доставленных из резервуара. Сюда входит инсулин, используемый для активации и заполнения инфузионного набора.
* **Errors:** Displays the last error encountered. Просмотрите [Журнал Pod](OmnipodDASH-view-pod-history) и файлы журналов для поиска прошлых ошибок и более подробной информации.
*  **Активные оповещения Pod** зарезервировано для текущих оповещений на активном Pod.

### Кнопки


![Refresh_Icon](../images/DASH_images/Refresh_LOGO.png) : Отправляет команду refresh в активный Pod для обновления коммуникации.

   * Используйте для обновления статуса pod и сброса полей статуса, содержащих текст (не подтверждено).
   * Дополнительную информацию см. в разделе Устранение неполадок ниже.

![POD_MGMT_Icon](../images/DASH_images/POD_MGMT_LOGO.png) : Перейдите в меню управления Pod.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) : При нажатии отключает звуки и уведомления (истечение срока действия, мало инсулина в резервуаре..).

   * Кнопка отображается только после появления предупреждения об истечении срока действия.
   * После успешного сброса, этот значок не будет отображаться.

![RESUME_Icon](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png) : Возобновляет приостановленную подачу инсулина в активном Pod.

### Меню управления помпой

Ниже приведено значение иконок в меню **Управление помпой **, доступном после нажатием кнопки **УПРАВЛЕНМЕ ПОМПОЙ (0)** на вкладке **DASH**. ![DASH_Tab_2](../images/DASH_images/DASH_Tab/DASH_Tab_2.png) ![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

* 1 - [**Активировать Pod**](OmnipodDASH-activate-pod) : Заполняет катетер и активирует новый Pod.
* 2 - [**Деактивировать Pod**](OmnipodDASH-deactivate-pod) : Деактивирует активный под.
* 3 - **Воспроизвести тестовый звуковой сигнал** : При нажатии воспроизводит один тестовый сигнал на поде.
* 4 - [**Журнал Pod **](OmnipodDASH-view-pod-history) : Отображает историю активности.

(DanaRS-Insulin-Pump-dash-settings)=

## Настройки Dash

Настройки помпы Dash доступны из левого верхнего **выпадающего меню** выберите **Конфигуратор(1)**\ ➜\ **Помпа**\ ➜\ **Dash**\ ➜\ **Шестеренка настроек (3)** включив ** радио кнопку (2) **с маркировкой **Dash**. Поставив флажок в **клетке** напротив **шестеренки настроек** вы активируете вкладку DASH в интерфейсе AAPS.

![Dash_settings_1](../images/DASH_images/Dash_settings/Dash_settings_1.png) ![Dash_settings_2](../images/DASH_images/Dash_settings/Dash_settings_2.png)

**ПРИМЕЧАНИЕ:** Более быстрый способ доступа к настройкам **Dash** - через меню **3 точки (1)** в правом верхнем углу вкладки **DASH** выбрать **Настройки Dash (2)** из выпадающего меню.

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

Группы настроек перечислены ниже; вы можете включить или отключить их через переключатель большинства функций описанных ниже:

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

*ПРИМЕЧАНИЕ: Знак (\*) обозначает значение по умолчанию.*

### Звуковые сигналы подтверждения

Обеспечивает звуковые сигналы подтверждения от Pod об успешной подаче болюса, изменении базала, SMB и TBR.

* **Звуковой сигнал болюса включен** Включить или отключить подтверждающие сигналы при подаче болюса.
* **Звуковой сигнал базала включен:** Включить или отключить звуки подтверждения, когда установлена новая базальная скорость, отменена или изменена действующая базальная скорость.
* **Звуковой сигнал микроболюсов SMB включен** Включить или отключить подтверждающие сигналы при подаче микроболюсов.
* **Звуковой сигнал временного базала TBR включен** Включить или отключить подтверждающие сигналы при установке или отмене TBR.

### Оповещения

Оповещения AAPS об истечении срока, выключении, низком резервуаре на основе заданных пороговых значений.

*Note an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Сброс уведомления НЕ удалит оповещение, ЕСЛИ НЕ включено автоматическое подтверждение получения оповещений. Чтобы ВРУЧНУЮ убрать оповещение следует открыть вкладку **DASH** и нажать кнопку **Заглущать СИГНАЛЫ ОПОВЕЩЕНИЯ**.*

* **Expiration reminder enabled:** Enable or disable the pod expiration reminder set to trigger when the defined number of hours before shutdown is reached.
* **Hours before shutdown:** Defines the number hours before the active pod shutdown occurs, which will then trigger the expiration reminder alert.
* **Low reservoir alert enabled:** Enable or disable an alert when the pod's remaining units low reservoir limit is reached as defined in the Number of units field.
* **Number of units:** The number of units at which to trigger the pod low reservoir alert.

### Уведомления

Выдает уведомления AAPS и звуковые оповещения, когда нет уверенности в успешных TBR, SMB, болюсах или приостановленных событиях.

*ПРИМЕЧАНИЕ: Это только уведомления, звуковые оповещения об ошибках не производится.*

* **Звук для неопределенных уведомлений TBR включен:** Включите или отключите этот параметр, чтобы вызвать звуковое оповещение и визуальное уведомление, когда AAPs неизвестно, был ли установлен TBR.
* **Звук для неопределенных уведомлений SMB включен:** Включите или отключите этот параметр, чтобы вызвать звуковое оповещение и визуальное уведомление, когда AAPs неизвестно, был ли успешно подан микроболюс SMB.
* **Звук для неопределенных уведомлений о болюсах включен:** Включите или отключите этот параметр, чтобы вызвать звуковое оповещение и визуальное уведомление, когда AAPs неизвестно, был ли успешно подан болюс.
* **Звук уведомлений о приостановленной подаче болюсов включен:** Включите или отключите этот параметр, чтобы вызвать звуковое оповещение и визуальное уведомление, когда успешно возобновлена приостановленная подача болюса.

## Actions (ACT) Tab

Эта вкладка хорошо описана в основной документации AAPS, но на этой вкладке есть несколько элементов, которые специфичны для Omnipod Dash и отличаются от проводных помп, особенно после установки нового пода.

1. Go to the **Actions (ACT)** tab in the main AAPS interface.

2. В секции **портал терапии (1)** поля **Инсулин** и **Катетер помпы** п**осле каждой замены пода** сбрасывают свой **отработанный срок (возраст)** на 0 дней и 0 часов. This is done because of how the Omnipod pump is built and operates. Since the pod inserts the cannula directly into the skin at the site of the pod application, a traditional tube is not used in Omnipod pumps. *Therefore after a pod change the age of each of these values will automatically reset to zero.* **Pump battery age** is not reported as the battery in the pod will always be more than the life of the pod (maximum 80 hours). The **pump battery** and **insulin reservoir** are self contained inside of each pod.

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### Уровень

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
