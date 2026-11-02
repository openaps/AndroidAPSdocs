# Accu-Chek Combo

**Настоящее ПО является частью самодеятельной разработки, а не готовым программным продуктом. От ВАС потребуется прочитать, изучить и понять систему и то, как ей пользоваться. Она не контролирует диабет за вас, но позволит улучшить компенсацию и качество жизни, если вы готовы уделить ей достаточно времени. Не бросайтесь в систему сломя голову, дайте себе время на изучение. Только вы несете ответственность за то, что делаете.**

```{admonition} Accu-Chek Combo is being phased out
:class: note

Roche is withdrawing from the insulin pump market to refocus its diabetes portfolio on the Accu-Chek SmartGuide CGM. It has communicated the end of sales of both the Accu-Chek Combo and Accu-Chek Insight pumps; its remaining Accu-Chek Solo micropump is also being wound down (last deliveries in Germany at the end of 2025). The change is being rolled out by region, starting in Germany, with other European markets expected to follow. If you rely on this pump, plan ahead for a transition to a supported pump.
```

```{contents} Table of contents
:depth: 1
:local: true
```

## Возможности работы с AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* Automatic DST and timezone handling.

## Требования к аппаратному и программному обеспечению

* Помпа Roche Accu-Chek Combo (любая версия прошивки, работают все).
* Устройство Smartpix или Realtyme с приложением "360" для конфигурирования помпы под свои параметры. По вашему запросу фирма Roche бесплатно вышлет устройства и По. (как всегда, Россия здесь исключение. По крайней мере, переводчику данной документации ничего не выслали. Возможно, надо разговаривать с сотрудниками или руководителями фирмы, а не с агентами, чьи контакты нам обычно дают при установке помпы)
* A compatible phone running Android 12 or newer. Подробнее см [примечания к версиям](#maintenance-android-version-aaps-version).
* The **AAPS** app installed on your phone.

Некоторые телефоны работают лучше, чем другие, в зависимости от качества поддержки Bluetooth и от того, имеют ли они дополнительный, агрессивный алгоритм экономии энергии. Список телефонов можно найти в документе [телефоны для AAPS](#Phones-list-of-tested-phones). Пожалуйста, имейте в виду, что это не полный список и отражает личный опыт пользователей. Вам предлагается также делиться результатами вашего опыта и тем самым помогать другим (все подобные проекты основаны на идеологии бескорыстной помощи).

(combov2-before-you-begin)=
## Подготовка к работе

**БЕЗОПАСНОСТЬ ПРЕЖДЕ ВСЕГО** - не пытайтесь выполнять эти действия в среде, где нет возможности сделать исправление ошибки. Держите под рукой устройство Smartpix / Realtyme наряду с конфигурационным ПО 360. Планируйте потратить около часа на настройку и на проверку, что все работает правильно.

Помните о следующих ограничениях:

* Пролонгированный болюс и многоволновый болюс не поддерживаются (вместо них можно применять [Расширенные углеводы](../DailyLifeWithAaps/ExtendedCarbs.md)).
* Поддерживается только один базальный профиль (первый).
* The lowest basal rate in your **Profile** is 0.05 U/h. **AAPS** refuses a **Profile** with a lower rate. The Combo rounds basal rates to its own steps (0.01 U/h below 1 U/h, 0.05 U/h up to 10 U/h, 0.1 U/h above). **AAPS** uses the rates the pump really gives.
* Temporary basal rates are limited to 500% of the current basal rate. **AAPS** takes this limit into account.
* Если на помпе в качестве активного профиля установлин не Профиль 1, цикличность не работает. This continues until profile no. 1 is made the active one; when that is done, the next time AAPS connects (either on its own after a while or because you tap **Refresh** on the Accu-Chek Combo pump screen), it will notice that profile no. 1 is the current one, and enable the loop again.
* Если алгоритм цикла запрашивает отмену текущей временной скорости базала (TBR), Combo на 15 минут установит ВБС (TBR) в 90% или 110%. Это происходит потому, что отмена TBR вызывает оповещение помпы, - вибрации, которые невозможно отключить.
* Стабильность соединения по bluetooth различна в разных телефонах и может вызвать оповещение "помпа недоступна" когда соединение разорвано. If that error occurs, make sure Bluetooth is enabled, tap **Refresh** on the pump screen (**Manage** > **Pump**) to see if this was caused by an intermittent issue and if still no connection is established, reboot the phone which should usually fix this.
* There is another issue where a restart doesn't help but a button on the pump must be pressed (which resets the pump's Bluetooth stack), before the pump accepts connections from the phone again.
* Следует избегать программирования временного базала TBR на помпе, так как контроль над TBR задается алгоритмом AAPS. Обнаружение нового временного базала TBR на помпе может занять до 20 минут, а его действие принимается в расчет алгоритмом AAPS с момента обнаружения, так что в худшем случае TBR не будет учтен как активный инсулин IOB в течении 20 минут.

The driver is currently written to support the following languages on the Combo. (Это не относится к языку AAPS - речь идет о языке, показываемом на ЖК экране Combo.)

* Английский
* Испанский
* Французский
* Итальянский
* Русский
* Турецкий
* Польский
* Чешский
* Венгерский
* Словацкий
* Румынский
* Хорватский
* Голландский
* Греческий
* Финский
* Норвежский
* Португальский
* Шведский
* Датский
* Немецкий
* Словенский
* Литовский

**Важно** Если ваша помпа использует язык, не входящий в этот список, свяжитесь с разработчиками, чтобы они добавили ваш язык в этот список. В противном случае драйвер не будет работать должным образом.

## Настройка телефона

Важно убедиться, что все оптимизации батареи выключены. AAPS автоматически определяет наличие таких оптимизаций и через свой интерфейс предлагает их отключить. Но, на современных телефонах Android, Bluetooth _сам_ является приложением (системным приложением). И, обычно, это "Приложение Bluetooth" по умолчанию запускается _с включенной оптимизацией заряда батареи_. В результате Bluetooth может не отвечать, когда телефон пытается экономить электроэнергию, потому что он отключает приложение Bluetooth. Это означает, что в системных настройках приложения Bluetooth также необходимо отключить оптимизацию батареи. К сожалению, это системное приложение Bluetooth в разных телефонах определяется по-разному. На стоковом Android, перейдите в Настройки -> Приложения -> Просмотреть все N приложений (N = количество приложений на вашем телефоне). Затем откройте меню в верхнем правом углу, нажмите на "Системные Приложения" или "Показать системные приложения" или "Все приложения". Теперь в новом расширенном списке приложений найдите приложение Bluetooth. Выберите его и на вкладке "Информация о приложении", нажмите "Батарея". Там, отключите оптимизацию батареи (иногда называется "использование батареи").

## Настройка Combo

* Настройте помпу, используя Конфигурационное программное обеспечение Accu-Chek 360. Если у вас нет этой программы, обратитесь в службу поддержки Акку-Чек. Обычно они высылают диск с программой "360° Pump Configuration Software" и устройство инфракрасной связи SmartPix зарегистрированным пользователям (устройство Realtyme также годится для этих целей).

  - **Необходимые настройки** (отмечены зеленым в скриншотах):

     * Установите/оставьте конфигурацию меню как "Стандартная", в результате будут показаны только поддерживаемые меню/действия на помпе и уберутся неподдерживаемые (пролонгированный/многоволновый болюс, множественные скорости базала), которые ограничивают функционал помпы в безопасном режиме AAPS.
     * Убедитесь, что _Краткие сведения - текст_ установлен на "КРАТКИЕ СВЕДЕНИЯ" (без кавычек, в разделе _Параметры инсулиновой помпы_).
     * Установите _Максимум корректировки_ временной скорости базала TBR на 500%
     * Отключите _Сигнал окончания временного базала_
     * Установите _приращение длительности_ временного базала на 15 мин
     * Включите Bluetooth

  - **Рекомендуемые настройки** (отмечены синим цветом на снимках с экрана)

     * Установите сигнал оповещения о малом количестве инсулина в картридже на величину по своему усмотрению
     * Настройте максимальную величину болюса в соответствии с требованиями вашей терапии, но имея в виду защиту от ошибок в программном обеспечении
     * Аналогичным образом настройте максимальную продолжительность временного базала TBR на безопасный уровень. Установите эту величину по крайней мере на 3 часа, так как опция отключения помпы задает нулевой базал на 3 часа.
     * Включите блокировку клавиш помпы для предотвращения случайной подачи болюса, особенно если вы пользовались помпой раньше и имели привычку подавать быстрый болюс.
     * Задайте таймаут отключения экрана и меню минимум на 5,5 и 5 соответственно. Это позволяет AAPS быстрее восстановиться после ошибок и уменьшает количество вибраций во время таких ошибок

  ![Снимок экрана настроек меню пользователя](../images/combo/combo-menu-settings.png)

  ![Снимок экрана параметров TBR](../images/combo/combo-tbr-settings.png)

  ![Снимок экрана настроек болюса](../images/combo/combo-bolus-settings.png)

  ![Снимок экрана настроек для картриджей инсулина](../images/combo/combo-insulin-settings.png)

## Активация драйвера и сопряжение с Combo

* Open the **menu** (☰) in the top-left corner, go to [**Configuration** > **Pump**](../SettingUpAaps/ConfigBuilder.md) and select **Accu-Chek Combo**.

  ![Configuration > Pump with the Accu-Chek Combo plugin](../images/v4/Configuration/configuration_pump_list_1.png)

  Once it is selected, the **Accu-Chek Combo** card shows two buttons, **Settings** and **Open plugin**:

  ![The Accu-Chek Combo plugin selected in Configuration > Pump](../images/v4/Pumps/accu_chek_combo_enabled.png)

  **Settings** opens the settings of the Accu-Chek Combo driver (see [Settings](#combov2-preferences) below):

  ![Accu-Chek Combo driver settings](../images/v4/Pumps/accu_chek_combo_settings.png)

  **Open plugin** (or **Manage** > **Pump**) opens the Accu-Chek Combo pump screen. Before a pump is paired it shows **Not paired to a pump**:

  ![Accu-Chek Combo pump screen before pairing](../images/v4/Pumps/accu_chek_combo_pump_screen.png)

* On the pump screen, tap **Pairing**. The **Pair with pump** screen opens. Follow the steps shown on screen, then tap **Start pairing**. When Android asks for permission to make the phone visible to other Bluetooth devices, tap **Allow**. Eventually, the Combo shows a 10-digit pairing PIN on its screen, and **AAPS** asks for it. Enter that PIN in the **10-digit PIN** field.

  ![The Pair with pump screen with the Start pairing button](../images/combo/combov2-pairing-screen-1.png)

  ![Android asking to make the phone visible to other Bluetooth devices](../images/combo/combov2-pairing-bt-visible-prompt.png)

  ![Combo pairing in progress, scanning for the pump](../images/combo/combov2-pairing-screen-2.png)

  The next pictures are from an older **AAPS** version. The steps and texts are the same, but the screens look slightly different.

  ![Снимок экрана пользовательского интерфейса при сопряжении Combo 3](../images/combo/combov2-pairing-screen-3.png)

  ![Снимок экрана пользовательского интерфейса при сопряжении Combo 4](../images/combo/combov2-pairing-screen-4.png)

  ![Снимок экрана пользовательского интерфейса при сопряжении Combo 4](../images/combo/combov2-pairing-screen-5.png)

* If the PIN is entered incorrectly, **AAPS** shows **PIN did not work. Check if there was a typo. If this keeps happening, cancel and retry pairing.**

  ![Снимок экрана пользовательского интерфейса при сопряжении Combo 3](../images/combo/combov2-pairing-screen-incorrect-pin.png)

* When **Successfully paired with Combo** is shown, tap **OK**. You return to the pump screen, which now shows the pump status (see [Accu-Chek Combo pump screen contents](#combov2-tab-contents) below). The **Pairing** button is replaced by **Unpair**.

* Для проверки настроек, при отключенной помпе в режиме **разъединено**, задайте в AAPS значение временного базала TBR 500% на 15 мин и подайте болюс. После этого в логах помпы появится работающий TBR и болюс. AAPS должен также показать активный TBR и поданный болюс.

* На Combo рекомендуется включить блокировку клавиш для предотвращения подачи болюса, особенно если при прежнем пользовании была привычной "подача быстрого болюса".

## Замечания по сопряжению

Помпа Accu-Chek Combo была разработана до появления Bluetooth 4.0, и лишь спустя год после выпуска первой версии Android. Поэтому ее способ сопряжения с другими устройствами не полностью совместим с тем, как это делается на современных устройствах Android. Для полного преодоления этой проблемы ААПС потребуются системные разрешения, которые доступны только для системных приложений. Они устанавливаются производителями телефонов, пользователи не могут устанавливать системные приложения.

The consequence of this is that pairing will never be 100% without problems. В частности, во время сопряжения, диалог на ввод Bluetooth-кода может появиться лишь ненадолго и автоматически исчезнуть. Иногда он остается на экране и запрашивает 4-значный PIN-код. (Не путать с 10-значным кодом сопряжения Combo.) Не вводите ничего, просто нажмите Отмена. Если сопряжение не продолжается, следуйте инструкциям на экране и повторите попытку подключения.

(combov2-tab-contents)=
## Accu-Chek Combo pump screen contents

To open the pump screen, go to **Manage** > **Pump**. Once a pump is paired, it shows the following information (items are listed from top to bottom):

![Screenshot of the Accu-Chek Combo pump screen with pairing (older AAPS version)](../images/combo/combov2-tab-with-pairing.png)

1. **Driver state**: The driver can be in one of the following states:
   - **Disconnected**: There is no Bluetooth connection; the driver is in this state most of the time, and only connects to the pump when needed - this saves power
   - **Connecting**
   - **Checking pump**: the pump is connected, but the driver is currently performing safety checks to ensure that everything is OK and up to date
   - **Ready**: the driver is ready to accept commands from AAPS
   - **Suspended**: the pump is suspended (shown as "stopped" in the Combo)
   - A description of the command being executed, for example **Setting basal profile** or **Updating pump status**
   - **Error**: an error occurred; the connection was terminated, any ongoing command was aborted
2. **Last connection**: How many minutes ago the driver successfully connected to the Combo; if this goes beyond 30 minutes, this item is shown with a red color
3. **Battery**: Battery level; the Combo only indicates **Full**, **Low** or **Empty**, and does not offer anything more accurate (like a percentage), so only these three levels are shown here
4. **Reservoir**: How many IU are currently in the Combo's reservoir
5. **Last bolus**: How many minutes ago the last bolus was delivered; if none was delivered yet after AAPS was started, this is not shown
6. **Temp basal**: Details about the currently active temporary basal; if none is currently active, this is not shown
7. **Base basal rate**: Currently active base basal rate ("base" means the basal rate without any active TBR influencing the basal rate factor)
8. **Serial number**: Combo serial number as indicated by the pump (this corresponds to the serial number shown on the back of the Combo)
9. **Bluetooth address**: The Combo's 6-byte Bluetooth address, shown in the `XX:XX:XX:XX:XX:XX` format

While the driver is doing something (for example, setting a basal profile), a box below the list describes the current activity, with a thin progress bar showing the progress.

Combo может управляться при помощи Bluetooth в режиме _удаленного терминала_ или в режиме _команд_. Режим удаленного терминала соответствует "режиму дистанционного управления" глюкометра Combo, который имитирует ЖК-дисплей и четыре кнопки помпы. Некоторые команды драйвер должен выполнять в этом режиме так как они не имеют аналога в командном режиме. Последний режим работает быстрее, но, как уже говорилось, его сфера применения ограничена. When the remote-terminal mode is active, the current remote-terminal screen is shown in the field that is located just above the Combo drawing. Однако при переключении драйвера в командный режим это поле остается пустым.

(You do not influence this; the driver fully decides on its own what mode to use. This is merely a note for you to know why sometimes you can see Combo frames in that field.)

At the bottom, there are these buttons:

- **Refresh**: Triggers an immediate pump status update. It is also used to let AAPS know that a previously discovered error is now fixed and that AAPS can check again that everything is OK (more on that below in [the section about alerts](#combov2-alerts)). You can only tap it when the driver is disconnected, suspended or in the error state.
- **Unpair**: Unpairs the paired Combo from **AAPS** and Android, after you confirm **Do you really want to unpair the pump?**. When no pump is paired, this button is replaced by **Pairing**.

(combov2-preferences)=
## Настройки

These settings are available for the Combo driver (**Configuration** > **Pump** > **Accu-Chek Combo** > **Settings**, or the settings icon (cog wheel) on the pump screen). Items are listed from top to bottom:

1. **Discovery duration (in seconds)**: When pairing, the driver makes the phone discoverable by the pump. Параметр определяет, сколько длится функция обнаружения. По умолчанию выбран максимум (300 секунд = 5 минут). Android не позволяет, чтобы обнаружение длилось бессрочно, поэтому следует задать продолжительность.
2. **Autodetect and automatically enter insulin reservoir change**: If enabled, the driver enters the "reservoir change" that you would normally enter yourself with **Manage** > **Prime/Fill**. [Подробнее это объясняется ниже](#combov2-autodetections).
3. **Autodetect and automatically enter battery change**: If enabled, the driver enters the "battery change" that you would normally enter yourself with **Manage** > **Pump Battery Change**. [Подробнее это объясняется ниже](#combov2-autodetections).
4. **Enable verbose Combo logging**: This greatly expands the amount of logging done by the driver. **ПРЕДУПРЕЖДЕНИЕ**: Включайте только если об этом вас попросил разработчик. Otherwise, this can add a lot of noise to **AAPS** logs and lessen their usefulness.

Pairing and unpairing are done on the pump screen, not in the settings (see above).

(combov2-autodetections)=
## Автоматическое определение и внесение записей о замене батареи и резервуара инсулина

Драйвер способен обнаружить замену батареи и резервуара через отслеживание уровней батареи и резервуара. Если при последнем обновлении Combo определила уровень батареи как низкий, а теперь, во время обновления статуса помпы, уровень заряда аккумулятора отображается как обычный, то драйвер делает вывод, что пользователь произвел замену аккумулятора. Эта же логика используется и для определения уровня резервуара: если в данный момент он больше чем прежде, то это интерпретируется как замена резервуара.

Это работает только в том случае, когда аккумулятор или резервуар заменяются, когда их уровни показаны как низкие _а_ аккумулятор и резервуар заполнены.

These autodetections can be turned off in the driver [settings](#combov2-preferences).

(combov2-alerts)=
## Оповещения (предупреждения и ошибки) и как они обрабатываются

Combo показывает оповещения как экраны удаленного терминала. Warnings are shown with a "Wx" code (x is a digit), along with a short description. В качестве примера можно привести "W7", "TBR OVER". Сходным образом показываются ошибки, но с кодом "Ex".

Некоторые предупреждения автоматически сбрасываются драйвером. К ним относятся:

- W1 "reservoir low" : the driver turns this into a "low reservoir" warning that is shown on the AAPS main screen
- W2 "battery low" : the driver turns this into a "low battery" warning that is shown on the AAPS main screen
- W3, W6, W7, W8 : все это информационные сообщения, поэтому драйвер безопасно удаляет их

Другие предупреждения - _не_ удаляются автоматически. Кроме того, ошибки _никогда_ не закрываются автоматически. Они обрабатываются одинаково, заставляя драйвера создавать диалог оповещения поверх интерфейса AAPS, а также приводит к прекращению выполнения любой текущей команды. The driver then switches to the "error" state (see [the Accu-Chek Combo pump screen contents above](#combov2-tab-contents)). Это состояние не допускает выполнения команд. Пользователь должен разобраться с ошибкой на помпе; например, может потребоваться замена каннулы. Once the user took care of the error, normal operation can be resumed by tapping **Refresh** on the Accu-Chek Combo pump screen. Затем драйвер подключается к Combo и обновляет еt статус, проверяет, отображается ли ошибка на экране и т. д. Также, драйвер автоматически обновляет статус помпы через некоторое время, поэтому ручное нажатие кнопки не является обязательным.

Подача болюса - отдельный случай. Это делается в командном режиме Combo, который не сообщает посреди болюса о появлении оповещения. Как следствие, драйвер не может автоматически убрать предупреждения _во время_ подачи болюса. Это означает, что, к сожалению, помпа будет издавать сигнал до завершения подачи болюса. Наиболее распространенным предупреждением во время подачи болюса обычно является W1 "низкий уровень инсулина в резервуаре". **Don't** dismiss Combo warnings on the pump itself manually during a bolus. Вы рискуете прервать болюс. Драйвер сам разберется с оповещением по завершении подачи болюса.

Оповещения в отсутствие подключения драйвера к Combo не будут замечены драйвером. Combo не умеет автоматически передавать оповещения на телефон; соединение всегда инициируется телефоном. Как следствие, оповещение не прекратится до соединения драйвера с помпой. You can tap **Refresh** on the pump screen to trigger a connection and let the driver handle the alert right then and there (instead of waiting until AAPS itself decides to initiate a connection).

**ВАЖНО** Если происходит ошибка или появляется оповещение из числа тех, что не убираются автоматически, драйвер входит в состояние ошибки. В этом случае цикл **БЛОКИРУЕТСЯ** до изменения статуса помпы! It is unblocked after the pump status is updated (either by tapping **Refresh** or by the driver's eventual auto-update) and no error is shown anymore.

## Осторожность при работе с Combo

* Имейте в виду, вы имеете дело не с коммерческим продуктом; на начальном этапе пользователю следует отслеживать и понимать логику, ограничения и возможные ошибки системы. Настоятельно рекомендуем не пользоваться системой, если нет полного понимания принципов ее работы.
* Из-за особенностей функциональности дистанционного управления, на Combo, по сравнению с другими помпами, медленно работают некоторые операции (особенно установка базального профиля). Это ограничение Combo не может быть преодолено.
* Не устанавливайте и не отменяйте временный базал TBR на помпе. Алгоритм AAPS берет на себя контроль над временным базалом, он не будет работать надежно при иных решениях, поскольку начало подачи временного базала, заданного пользователем на помпе, невозможно определить.
* Не нажимайте никаких кнопок на помпе во время обмена данными между AAPS и помпой (на экране помпы в это время высвечивается логотип блутуса). Если все же такое происходит, Bluetooth-соединение прерывается. Делайте это только если есть проблемы с установкой связи (См. выше раздел [Подготовка к работе](#combov2-before-you-begin)).
* Не нажимайте никакие кнопки во время подачи болюса. В частности, не пытайтесь убрать оповещения, нажимая кнопки. См. [раздел об оповещениях](#combov2-alerts) где дано подробное разъяснение причин.

## Контрольный лист проверок на случай отсутствия соединения с Комбо

Драйвер делает все возможное, чтобы подключиться к Combo, и использует особые приемы для максимальной надежности. Тем не менее, иногда соединение не устанавливается. Вот некоторые шаги для исправления такой ситуации.

1. Нажмите кнопку на Combo. Иногда Bluetooth на Combo перестает отвечать и не принимает подключения. Нажав кнопку на Combo и вызвав изображение на LCD экране, вы добьетесь перезапуска Bluetooth-модуля помпы. Чаще всего это единственный шаг, необходимый для исправления проблем с подключением.
2. Перезагрузите телефон. Это может потребоваться, если возникает проблема со стеком Bluetooth самого телефона.
3. Если крышечка батарейного отсека Combo старая, подумайте о ее замене. Старые крышечки батарейного отсека могут вызвать проблемы с питанием Combo, которые влияют на Bluetooth.
4. Если соединение все же не устанавливается, попробуйте разъединить, а затем переподключить помпу.

(combov2-tips-for-basic-usage)=
## Tips for basic usage

### How to ensure smooth operations

* Always **carry the smartphone with you**, leave it next to your bed at night. As your pump may lay behind or under your body while you sleep, a higher position (on a shelf or board) works best.
* Always make sure that the pump battery is as full as possible. See the battery section for tips regarding the battery.
* Whenever possible, only operate the pump via the AAPS app. To facilitate this, activate the key lock on the pump under **PUMP SETTINGS / KEY LOCK / ON**. Only when changing the battery or the cartridge, it is necessary to use the pump's keys.

![Keylock](../images/combo/combo-tips-keylock.png)

### Pump not reachable. What to do?

#### Activate pump unreachable alarm
* In **AAPS**, tap the **Settings** (gear) icon at the top right of the main screen, go to **Local alerts**, activate **Alert if pump is unreachable** and set **Pump unreachable threshold** to **31** minutes.
* This will give you enough time to not trigger the alarm when leaving the room while your phone is left on the desk, but informs you if the pump cannot be reached for a time that exceeds the duration of a temporary basal rate.

#### Restore reachability of the pump

* When AAPS reports a **pump unreachable** alarm, first release the keylock and **press any key on the pump** (e.g. "down" button). As soon as the pump display has turned off, tap **Refresh** on the Accu-Chek Combo pump screen (**Manage** > **Pump**). Mostly then the communication works again.
* If that does not help, reboot your smartphone. After the restart, AAPS will be reactivated and a new connection will be established with the pump.

* The tests with different smartphones have shown that certain smartphones trigger the "pump unreachable" error more often than others. See [AAPS Phones](#Phones-list-of-tested-phones) for successfully tested smartphones.

#### Root causes and consequences of frequent communication errors
* On phones with **low memory** (or **aggressive power-saving** settings), AAPS is often shut down. You can tell by the fact that the treatment buttons (QuickLaunch toolbar) on the main screen are not shown when opening AAPS because the system is initializing. This can trigger "pump unreachable alarms" at startup. In the **Last connection** field of the pump screen (**Manage** > **Pump**), you can check when AAPS last communicated with the pump.

![No connection to pump](../images/combo/combov2-tips-no-connection-to-pump.png)

* This error can drain the pump's battery faster because the basal profile is read from the pump when the app is restarted.
* It also increases the likelihood of causing the error that causes the pump to reject all incoming connections until a button on the pump is pressed.

### Cancellation of temporary basal rate fails
* Occasionally, AAPS cannot automatically cancel a **TBR CANCELED** alert. Then you have to either tap **Refresh** on the Accu-Chek Combo pump screen or the alarm on the pump will need to be confirmed.

### Pump battery considerations

#### Changing the battery
* After a **low battery** alarm, the battery should be changed as soon as possible to always have enough energy for a reliable Bluetooth communication with the smartphone, even if the phone is within a wider distance of the pump.
* Even after a **low battery** alarm, the battery might be used for a significant amount of time. However, it is recommended to always have a fresh battery with you after a "low battery" alarm rang.
* Before changing the battery, press on the **Loop** symbol on the main screen and select **Suspend loop** for 1 hour.
* Wait for the phone to communicate with the pump and for the Bluetooth logo on the pump to fade.

![Bluetooth enabled](../images/combo/combo-tips-compo.png)

* Release the key lock on the pump, put the pump into stop mode, confirm a possibly canceled temporary basal rate, and change the battery quickly.
* You don't need to re-set the pump's clock after the battery change: AAPS automatically updates the pump's date and time.
* Then put the pump back in run mode and select **Resume** when pressing on the **Suspended Loop** icon on the main screen.
* AAPS will re-set a necessary temporary basal rate with the arrival of the next blood sugar value.

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=
#### Battery type and causes of short battery life
* As intensive Bluetooth communication consumes a lot of energy, only use **high-quality batteries** like Energizer Ultimate Lithium, the "power one"s from the "large" Accu-Chek service pack, or if you are going for a rechargeable battery, use Eneloop batteries.

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Ranges for typical life time of the different battery types are as follows:
* **Energizer Ultimate Lithium**: 4 to 7 weeks
* **Power One Alkaline** (Varta) from the service pack: 2 to 4 weeks
* **Eneloop rechargeable** batteries (BK-3MCCE): 1 to 3 weeks

If your battery life is significantly shorter than the ranges given above, please check the following possible causes:
* There are some variants of the screw-on battery cap of the Combo pump, which partially short circuit the batteries and drain them quickly. The caps without this problem can be recognized by the golden metal contacts.
* If the pump clock does not "survive" a short battery change, it is likely that the capacitor is broken which keeps the clock running during a brief power outage. In this case, a replacement of the pump by Roche might help, which is not a problem during the warranty period.
* The smart phone hardware and software (Android operating system and Bluetooth stack) also impact the battery lifetime of the pump, even though the exact factors are not completely known yet. If you have the opportunity, try another smartphone and compare battery lifetimes.

### Extended bolus, multiwave bolus
The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternatives:
* Use **e-Carbs** when entering carbs or using the Bolus wizard by entering the carbs of the full meal and the duration you expect the carbs to arrive as glucose in your blood. The system will then calculate small carbs equally distributed over the whole duration which will cause the algorithm to provide equivalent insulin dosing while still permanently checking the overall rise/decrease of the blood glucose level. For a multiwave bolus approach, you can also combine a smaller immediate bolus with e-carbs.
* Before eating, set a temporary **Eating Soon** target of 80 mg/dL (4.4 mmol/L) for several hours (press the target on the main screen, or **Manage** > **Temp Target**). The duration should be based on the interval you would choose for an extended bolus. This will keep your target lower than usual and therefore increase the amount of insulin delivered.
* Then use the **Bolus wizard** to enter the full carbs of the meal, but do not directly apply the values it suggests. If a multiwave-like bolus is to be delivered, correct the insulin dosage down. Depending on the meal, the algorithm now has to deliver additional SMBs or higher temporary basal rates to counteract the increase in blood sugar. Here, the safety limitation of the basal rate (Max U/h, Maximum basal IOB) should be very carefully experimented with and, if necessary, temporarily changed.

* Don't use the extended or multiwave bolus directly on the pump. The driver does not support them (see [Before you begin](#combov2-before-you-begin)); if a multiwave bolus is given on the pump anyway, **AAPS** records it from the pump history as a normal bolus plus an extended bolus, so it is counted in IOB. An extended bolus does not work in a closed loop environment (see [this page](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) for details).

### Alarms at bolus delivery
* After each bolus, the driver reads the pump's bolus history. This is a safety mechanism to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump.
* Before a bolus, if the pump history has a bolus that **AAPS** did not know about (for example, a bolus given directly on the pump), the requested bolus is **not given**, because it was calculated without that insulin. **AAPS** shows **The pump history has a bolus that AAPS did not know about. The requested bolus was not given...** Check the bolus history on the pump and your IOB. If a bolus is still needed, calculate it again. This also applies when the unknown bolus is found on a new connection.
* If the bolus was given but the pump history also had other boluses that **AAPS** did not know about, they are recorded now and **AAPS** asks you to check IOB before the next bolus.
* If the connection to the pump is lost **during** a bolus, **AAPS** does not record 0 U: it shows how much the pump had given by then and warns that the pump may still give the rest. **Do not bolus again.** **AAPS** reads the real amount from the pump history at the next connection.
* If the connection is lost while **AAPS** sends the bolus, it is not known whether the pump got it. Check the bolus history on the pump before the next bolus.
* If **AAPS** cannot confirm that a bolus was delivered, it shows **Bolus delivery failed. It appears no bolus was delivered. To be sure, please check the pump to avoid a double bolus and then bolus again.** Boluses are never retried automatically.

## Куда обращаться за помощью

Development of the Combo driver is done by the community on a **volunteer** basis. Before requesting help, please:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).
