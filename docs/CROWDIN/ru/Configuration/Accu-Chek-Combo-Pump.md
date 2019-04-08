# Accu Chek Combo Pump

**This software is part of a DIY solution and is not a product, but requires YOU to read, learn and understand the system including how to use it. It is not something that does all your diabetes management for you, but allows you to improve your diabetes and your quality of life if you're willing to put in the time required. Don't rush into it, but allow yourself time to learn. You alone are responsible for what you do with it.**

## Hardware requirements

- A Roche Accu-Chek Combo (any firmware, they all work)
- A Smartpix or Realtyme device together with the 360 Configuration Software to configure the pump. Roche sends out Smartpix devices and the configuration software free of charge to their customers upon request.
- A compatible phone: An Android phone with a phone running LineageOS 14.1 (formerly CyanogenMod) or Android 8.1 (Oreo). The LineageOS 14.1 has to be a recent version from at least June 2017 since the change needed to pair the Combo pump was only introduced at that time. A list of phones can be found in the [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) document. Please be aware that this is not complete list and reflects personal user experience. You are encouraged to also enter your experience and thereby help others (these projects are all about paying it forward).

- Be aware that while Android 8.1 allows communicating with the Combo, there are still issues with AAPS on 8.1. For advanced users, it is possible to perform the pairing on a rooted phone and transfer it to another rooted phone to use with ruffy/AAPS, which must also be rooted. This allows using phones with Android < 8.1 but has not been widely tested: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Limitations

- Extended bolus and multiwave bolus are not supported (see [Extended Carbs](../Usage/Extended-Carbs) instead)
- Only one basal profile is supported.
- Setting a basal profile other than 1 on the pump, or delivering extended boluses or multiwave boluses from the pump interferes with TBRs and forces the loop into low-suspend only mode for 6 hours as the the loop can't run safely under these conditions.
- It's currently not possible to set the time and date on the pump, so daylight saving times changes have to be performed manually (you may disable the phone's automatic clock update in the evening and change it back in the morning together with the pump clock to avoid an alarm during the night).
- Currently only basal rates in the range of 0.05 to 10 U/h are supported. This also applies when modifying a profile, e.g. when increasing to 200%, the highest basal rate must not exceed 5 U/h since it will be doubled. Similarly, when reducing to 50%, the lowest basal rate must be at least 0.10 U/h.
- If the loop requests a running TBR to be cancelled the Combo will set a TBR of 90% or 110% for 15 minutes instead. This is because cancelling a TBR causes an alert on the pump which causes a lot of vibrations.
- Occasionally (every couple of days or so) AAPS might fail to automatically cancel a TBR CANCELLED alert, which the user then needs to deal with (by pressing the refresh button in AAPS to transfer the warning to AAPS or confirming the alert on the pump).
- Bluetooth connection stability varies with different phones, causing "pump unrechable" alerts, where no connection to the pump is established anymore. If that error occurs, make sure Bluetooth is enabled, press the Refresh button in the Combo tab to see if this was caused by an intermitted issue and if still no connection is established, reboot the phone which should usually fix this. There is another issue were a restart doesn't help but a button on the pump must be pressed (which resets the pump's Bluetooth), before the pump accepts connections from the phone again. There is very little that can be done to remedy either of those issues at this point. So if you see those errors frequently your only option at this time is to get another phone that's known to work well with AndroidAPS and the Combo (see above).
- Issuing a bolus from the pump will be not always be detected in time (checked for whenever AAPS connects to the pump), and might take up to 20 minutes in the worst case. Boluses on the pump are always checked before a high TBR or a bolus issued by AAPS but due to the limitations AAPS will then refuse to issue the TBR/Bolus as it was calculated under false premises. (-> Don't bolus from the Pump! See chapter *Usage*)
- Setting a TBR on the pump is to be avoided since the loop assumes control of TBRs. Detecting a new TBR on the pump might take up to 20 minutes and the TBR's effect will only be accounted from the moment it is detected, so in the worst case there might be 20 minutes of a TBR that is not reflected in IOB. 

## Setup

- Configure the pump using 360 config software. If you do not have the software, please contact your Accu-Chek hotline. They usually send registered users a CD with the "360° Pump Configuration Software" and a SmartPix USB-infrared connection device (the Realtyme device also works if you have that). 
  - Required (marked green in screenshots): 
    - Set/leave the menu configuration as "Standard", this will show only the supported menus/actions on the pump and hide those which are unsupported (extended/multiwave bolus, multiple basal rates), which cause the loop functionality to be restricted when used because it's not possible to run the loop in a safe manner when used.
    - Verify the *Quick Info Text* is set to "QUICK INFO" (without the quotes, found under *Insulin Pump Options*).
    - Set TBR *Maximum Adjustment* to 500%
    - Disable *Signal End of Temporary Basal Rate*
    - Set TBR *Duration increment* to 15 min
    - Enable Bluetooth
  - Recommended (marked blue in screenshots) 
    - Set low cartridge alarm to your liking
    - Configure a max bolus suited for your therapy to protect against bugs in the software
    - Similarly, configure maximum TBR duration as a safeguard. Allow at least 3 hours, since the option to disconnect the pump for 3 hours sets a 0% for 3 hours.
    - Enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and quick bolusing was a habit.
    - Задайте время ожидания выключения экрана и меню минимум на 5,5 и 5 соответственно. Это позволяет AAPS быстрее восстановиться после ошибок и уменьшает количество вибраций во время таких ошибок

![Снимок экрана меню параметров пользователя](../images/combo/combo-menu-settings.png)

![Снимок экрана параметров TBR](../images/combo/combo-tbr-settings.png)

![Снимок экрана настроек болюса](../images/combo/combo-bolus-settings.png)

![Снимок экрана настроек для картриджей инсулина](../images/combo/combo-insulin-settings.png)

- Установите AndroidAPS по инструкции [AndroidAPS](http://wiki.AndroidAPS.org).
- Для правильной работы с программой внимательно прочитайте инструкции в вики.
- На этом этапе выберите расширение MDI а не Комбо чтобы избежать вмешательства в работу алгоритма во время установки соединения.
- По ссылке http://ruffy.AndroidAPS.org клонируйте ruffy через git.
- Установите утилиту и используйте его для сопряжения с помпой. Если она не работает после нескольких попыток, переключитесь на ветку `сопряжение`, установите связь с помпой и затем переключитесь обратно на исходную ветку. Обратите внимание, что сопряжение - процесс плохо контролируемый (но выполняется всего один раз) и, возможно, потребуется несколько попыток; своевременно реагируйте на запросы и, при необходимости повторить попытку, заранее удаляйте помпу из настроек Bluetooth. Можно попробовать другой вариант, который заключается в том, чтобы после начала процесса сопряжения войти в меню Bluetooth (это делает Bluetooth телефона видимым на время отображения в меню) и после подтверждения сопряжения, когда помпа показывает код авторизации, переключиться обратно на ruffy. Если вам не удалось настроить соединение с помпой (скажем, после 10 попыток) попробуйте подождать до 10 секунд, прежде чем подтвердить соединение на помпе (после появления наименования телефона на дисплее помпы). Если вы настроили тайм-аут меню меньше 5 сек., потребуется снова увеличить его. Некоторые пользователи сообщают, что им приходилось так делать. Наконец, попробуйте переместиться из одной комнаты в другую, чтобы избежать помех связи. Один из пользователей сообщил нам об устранении проблем соединения после простой перемены комнат.
- Когда AAPS пользуется алгоритмом ruffy, утилита ruffy недоступна. Самым простым выходом в этом случае является перезагрузить телефон после сопряжения и дать возможность алгоритму ruffy запуститься в фоновом режиме.
- Если помпа совершенно новая, требуется подать болюс на помпе, чтобы помпа произвела первую запись в логе.
- Прежде чем активировать расширение Combo в AAPS, убедитесь в правильной настройке профиля и в его активации (!) и что профиль базала актуален т. к. AAPS будет синхронизировать профиль с помпой. После этого активируйте расширение Combo. Нажмите кнопку *Обновить* на вкладке Combo для запуска помпы.
- Для проверки настроек, при отключенной помпе в режиме **отключено**, задайте TBR 500% на 15 мин и подайте болюс. После этого в логах помпы появится работающий TBR и болюс. AAPS должен также показать активный TBR и поданный болюс.

## Почему сопряжение с помпой не работает с утилитой "ruffy"?

Существует несколько возможных причин. Попробуйте следующие действия:

1. Вставьте в помпу **свежие или полностью заряженные батареи**. Подробнее см. в разделе "батарея". Убедитесь, что помпа находится вблизи смартфона.

![Помпа должна находиться рядом с телефоном](../images/Combo_next_to_Phone.png)

2. Отключите или удалите любые другие устройства bluetooth, чтобы они не смогли установить подключение к телефону во время сопряжения. Любая параллельная связь по bluetooth или запрос на соединение могут нарушить процесс сопряжения.

3.     Удалите уже подключенные устройства в меню Bluetooth помпы: ** настройки BLUETOOTH / подключение / удалить ** до появления сообщения 
      ** NO DEVICE ** (нет устройств).
      

4. Удалите помпу, уже подключенную к телефону через Bluetooth: Параметры / Bluetooth, Удалить сопряженное устройство «**SpiritCombo**»
5. Убедитесь, что AAPS не работает в фоновом режиме цикла. Деактивируйте цикл в AAPS.
6. Запустите утилиту ruffy на телефоне. Можно нажать Reset! (Перезапустить) и удалить старое сопряжение. Затем нажать Connect! (Подключиться).
7. В меню Bluetooth помпы, перейдите к **Добавить устройство / добавить подключение**. Нажмите * CONNECT! ** (подключиться) * шаги 5 и 6 должны быть сделаны в короткий промежуток времени.
8.     Теперь на помпе должно появиться название Bluetooth телефона, которое следует выбрать для сопряжения. Здесь важно подождать по крайней мере 5 секунд прежде чем нажать кнопку выбора на помпе. В ином случае помпа не отправит правильный запрос на сопряжение с телефоном.
      
      * Если помпа Combo настроена на 5 сек ожидания с включенным экраном, ее можно протестировать за 40сек (исходный параметр). Опытным путем установлено, что оптимальный промежуток времени между появлением помпы в телефоне и выбором телефона на помпе составляет 5-10 секунд. Во многих других случаях сопряжение не происходит из-за истечения времени. В дальнейшем следует вернуть эту настройку на исходные 5 сек чтобы соответствовать настройкам AAPS для Combo.
      * Если помпа совсем не показывает телефон как устройство для сопряжения, возможно модуль Bluetooth вашего телефона не совместим с помпой. Убедитесь, что вы используете новый ** LineageOS ≥ 14.1* * или ** Android ≥ 8.1 (Oreo) **. Если есть возможность, попробуйте другой смартфон. Вы можете найти список успешно используемых смартфонов для AAPS по этой ссылке (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 
      

9.     На следующем этапе в помпе должен появиться 10-значный код безопасности. И экран Ruffy для его ввода. Так что введите его в Ruffy и 
      вы готовы к работе.
      

10. Перезагрузите телефон.
11. Теперь вы можете перезапустить цикл AAPS.

## Применение

- Имейте в виду, что это не конечный продукт, особенно на начальном этапе пользователь должен научиться контролировать и понимать систему, ее ограничения и возможные сбои в работе. Настоятельно рекомендуем не пользоваться системой, если нет полного понимания принципов ее работы.
- Изучите документацию по OpenAPS, чтобы понять алгоритм работы AndroidAPS, на ней основанный.
- Читайте базу знаний wiki, чтобы ознакомиться и понять AndroidAPS http://wiki.AndroidAPS.org
- Данная интеграция обладает той же функциональностью что и пульт - глюкометр, поставляемый в комплекте с помпой. Глюкометр позволяет дублировать экран помпы и перенаправляет на помпу все команды (эквивалентные нажатию кнопок на помпе). Связь с помпой, равно как и это перенаправление команд является главным функционалом алгоритма приложения. Компоненты `скриптера` считывают информацию с экрана и автоматизируют подачу болюсов, временного базала TBR; проверяют корректность обработки введенных данных. Алгоритм ИПЖ затем обменивается данными со скриптером, применяет команды цикла и подает болюсы. Этот режим имеет некоторые ограничения: он действует медленно (но достаточно быстро для своих задач), и изменение временного базала TBR или подача болюса приводит к вибрации помпы.
- Интеграция Combo с AndroidAPS исходит из того, что все входные данные проводятся через AndroidAPS. Болюсы, подаваемые непосредственно с помпы, будут обнаружены алгоритмом AAPS, но на это может уйти до 20 минут. Считывание болюсов, поданных непосредственно с помпы - мера предосторожности, которая не предназначена для регулярной работы (алгоритм ИПЖ требует информации о потребленных углеводах, которая не может поступать с помпы, и это еще одна причина, по которой ввод данных должен происходить через интерфейс приложения). 
- Не устанавливайте и не отменяйте временный базал TBR на помпе. Алгоритм ИПЖ предполагает контроль над временным базалом, он не будет работать надежно, поскольку невозможно определить начало подачи временного базала, заданного пользователем на помпе.
- Первый базальный профиль помпы считывается при запуске приложения и обновляется алгоритмом AAPS. Скорость подачи базала не должна меняться вручную на помпе, но будет обнаружена и скорректирована как мера безопасности (не полагайтесь на меры безопасности, задаваемые по умолчанию, они предназначены для обнаружения непреднамеренных изменений на помпе).
- Рекомендуется включить кодовую блокировку на помпе для предотвращения случайной подачи болюса с помпы, особенно если вы уже пользовались помпой раньше и подача "быстрого болюса" вошла в привычку. Помимо этого, при активной блокировке, случайное нажатие на кнопку помпы НЕ прерывает коммуникацию между AAPS и помпой.
- Когда на помпе срабатывает оповещение БОЛЮС / врем. базал TBR ОТМЕНЕН во время подачи болюса или установки врем. базала TBR, то это вызывается потерей соединения между помпой и телефоном, что случается время от времени. AAPS будет пытаться восстановить соединение, подтвердить сигнал и повторно выполнить последнее действие (болюсы не повторяются из соображений безопасности). Таким образом, это оповещение можно проигнорировать т. к. AAPS подтверждает его автоматически, обычно в течение 30 секунд (отменить его не составляет труда, но приведет к тому, что исполняемое в данный момент действие будет приостановлено до того, как экран помпы погаснет и ваше устройство вновь не подключится к помпе). Если оповещение помпы продолжает работать и автоматическое подтверждение не состоялось, пользователь должен подтвердить получение сигнала вручную.
- Когда оповещение о заканчивающемся инсулине или низком заряде батареи срабатывает во время болюса, они подтверждаются автоматически и появляются в AAPS в виде уведомления. Если они срабатывают в момент отсутствия связи с помпой, нажатие кнопки "обновить" (refresh) на вкладке Combo подтвердит получение сигнала и подаст уведомление в AAPS.
- Когда подтверждение получения сигнала об отмене скорости временного базала (TBR CANCELLED) не срабатывает в AAPS или когда срабатывает другое оповещение, нажатие кнопки "обновить" (refresh) на вкладке Combo восстановит соединение, подтвердит получение сигнала и подаст уведомление в AAPS. Такие манипуляции безопасны ввиду безопасности самих оповещений - соответствующая скорость временного базала будет снова задана во время следующего цикла работы алгоритма.
- Для всех других оповещений, инициируемых помпой: подключение к помпе покажет оповещение во вкладке Combo, например «состояние: Е4: закупорка», которое дублируется на главном экране. Любая ошибка системы генерирует срочное уведомление. AAPS никогда самостоятельно не подтверждает получения оповещений о серьезных ошибках и дает возможность помпе сигналить и вибрировать, чтобы пользователь имел возможность самостоятельно удостовериться в наличии критической ситуации, требующей его действий.
- После установки соединения с помпой, алгоритм AAPS не должен использоваться напрямую (AAPS будет работать в фоновом режиме); самостоятельная работа алгоритма не предусмотрена.
- Если AAPS прекращает работу (в результате серьезной ошибки или останавливается из отладчика) в то время как ваше устройство и помпа соединены, возможно потребуется принудительная остановка алгоритма. Перезапуск приложения AAPS перезапустит и работу алгоритма. Перезапуск телефона - простой способ устранить проблему, если вы не знаете, как принудительно убить все процессы приложения.
- Не нажимайте никаких кнопок на помпе во время связи AAPS с помпой (на экране помпы в это время высвечивается логотип блутуса).