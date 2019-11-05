# Помпы Medtronic

**>>>> Начиная с версии 2.5 AndroidAPS драйвер помп Medtronic является частью ветки master. While this is the case, Medtronic driver should still be considered beta software. Please install only if you are expirenced user. At the moment we are still fighting with double Bolus issue (We get 2 boluses in treatments, which throws IOB calculation (if you experience this bug, please enable Double Bolus Logging in Medtronic configuration and provide your logs)). <<<<**

* * *

Работает только с более старыми помпами Medtronic (подробнее см. ниже). Не работает с Medtronic 640G или 670G.

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

If you do new install you will be thrown directly into wizard. Sometimes if your BT connection is not working fully (unable to connect to pump), you might not be able to complete configuration. In such case select virtual pump and after wizard is finished, you can go with option 2, which will bypass pump detection.

![MDT Settings](../images/Medtronic01.png)

You need to set following items: (see picture above)

- ** Серийный номер помпы **: Он находится на обратной стороне помпы сразу за буквами SN. Нужно вводить только номер, серийный номер состоит из 6 цифр.
- ** Тип помпы **: Какой у вас тип помпы (напр. 522). 
- **Частота помпы**: Существуют две версии помп Medtronic (если вы не уверены, на какой частоте работает ваша помпа, смотрите [справку](../Configuration/MedtronicPump#faq)): 
    - для США & Канады применяется частота 916 МГц
    - для остального мира используется частота 868 МГц
- **Макс болюс на помпе (ед)** (в час): Должен быть таким же какой установлен на помпе. Он ограничивает сколько инсулина можно подать при болюсе. Если его превысить, болюс не будет подан, и появится сообщение об ошибке. Максимальное значение, которое можно задать - 25, задайте его правильно, чтобы не допустить передозировки.
- **Макс база на помпе (ед/ч)**: должна быть такой же, какая установлена на помпе. Это ограничение определяет какая максимальная база подается в час. Например, если вы хотите, чтобы максимальный размер временного базала TBR был равен 500%, а самая высокая скорость базала у вас 1,5 ед, то нужно установить Max Basal не ниже 7.5. Если этот параметр является неправильным (например, если одна из ваших базальных скоростей выше этой величины, помпа выдаст ошибку).
- ** Задержка перед началом подачи болюса **: Это задержка перед отправкой команды помпе на болюс; если вы передумали, есть возможность отменить подачу. Отмена болюса не поддерживается помпой (если вы хотите остановить болюс при подаче, то должны приостановить работу помпы и затем возобновить).
- ** Кодировка Medtronic **: Это значение определяет, будет кодировка 4b6b, которую применяют устройства Medtronic, использоваться в AndroidAPS или в RileyLink. Если у вас RileyLink с прошивкой 2.х, по умолчанию будет применяться аппаратное кодирование (= выполняемое RileyLink), если прошивка 0.х, этот параметр будет игнорироваться.
- **Тип батареи (остаток заряда)**: Если вы хотите видеть уровень заряда помпы, необходимо выбрать тип батареи, (в настоящее время поддерживаются литиевые или щелочные), что, в свою очередь, покажет на дисплее оставшиеся проценты и напряжение заряда.
- ** Конфигурация RileyLink **: Находит устройство RileyLink/GNARL.

## Вкладка MEDTRONIC (MDT)

![MDT Tab](../images/Medtronic02.png)

On pump tab you can see several lines that are showing pumps (and connections) current status.

- **Статус RileyLink**: показывает состояние связи RileyLink. Телефон должен быть все время подключен к RileyLink.
- ** Состояние помпы **: Состояние соединения с помпой, у него может быть несколько значений, но в основном мы увидим значок спящего режима (когда соединение с помпой не активно), при выполнении команды можно видеть "Устанавливается соединение", то есть AAPS пытается соединиться с помпой или описание других команд, выполняемых помпой (например, чтение времени, устанавливается временный базал TBR и т. д.).
- ** Батарея **: Показывает состояние батареи в зависимости от конфигурации. Это может быть простой значок, показывающий, разряжена или заряжена батарея (красным, если заряд критически мал, до 20%), или процент заряда и напряжение.
- ** Последнее соединение **: Время последнего успешного подключения к помпе.
- **Последний болюс**: когда был дан последний болюс.
- ** Базовая скорость базала**: Основная скорость, с которой подается база на помпе в этот час.
- ** Temp basal **: временный базал, который сейчас подается или незаполненная графа.
- ** Резервуар **: Сколько инсулина находится в картридже (обновляется по крайней мере каждый час).
- **ошибки**: строка ошибки, если есть проблемы (в основном показывает, есть ли ошибка в конфигурации).

On lower end we have 3 buttons:

- **Обновить** для обновления состояния. Этот параметр следует использовать только после того, как соединение не будет установлено в течение длительного времени, так как это действие приведет к сбросу данных о помпе (потребуется получить историю данных, получить/установить время, получить профиль, получить состояние батареи и т. д.).
- **Журнал помпы**: показывает хронологию помпы (см. [внизу](../Configuration/MedtronicPump#pump-history))
- **Статистика RL**: показывает статистику RileyLink (см. [внизу](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Журнал помпы

![Pump History Dialog](../images/Medtronic03.png)

Pump history is retrieved every 5 minutes and stored localy. We keep history only for last 24 hours, so older entries are removed when new are added. This is simple way to see the pump history (some entries from pump might not be displayed, because they are not relevant - for example configuration of functions that are not used by AndroidAPS).

## Состояние RL (Состояние RileyLink)

![RileyLink Status - Settings](../images/Medtronic04.png) ![RileyLink Status - History](../images/Medtronic05.png)

Dialog has two tabs:

- ** Параметры **: Показывает параметры RileyLink: Сконфигурированный адрес, Подключенное устройство, Состояние соединения, Ошибка соединения и Версия встроенного ПО (прошивки) RileyLink. Типом устройства всегда является Medtronic Pump, Модель - ваша версия модели, Серийный номер-сконфигурированный серийный номер, Частота помпы- Частота на которой работает связь помпы, Последняя частота-последняя используемая частота связи.
- ** История **: Показывает хронологию связи, элементы с RyleyLink показывают изменения состояния RileyLink, Medtronic показывает, какие команды были отправлены на помпу.

## Действия

When Medtronic driver is selected, 3 possible actions can be added to Actions Tab:

- ** Пробуждение и настройка **-Если вы видите, что AndroidAPS не связывался с помпой в течение какого-то времени (он должен связаться каждые 5 минут), вы можете нажать кнопку Настройка. Начнется сеанс связи с помпой с поиском всех подчастот, на которых может выполняться связь. Если обнаружится одна из них, она будет задана как частота по умолчанию. 
- ** Сброс конфигурации RileyLink **-При перезагрузке RileyLink/GNARL необходимо выполнить эту команду, чтобы переконфигурировать устройство (набор частоты, тип частоты, настроенная кодировка).
- ** Очистить Блокировку болюса **-При подаче болюса происходит блокировка, которая предотвращает выполнение любых других команд на помпе. Если остановить помпу и вновь запустить ее (для отмены болюса), то можно удалить эту блокировку. Опция доступна только при подаче болюса... 

## Важные Примечания

### Запись логов в файл

Since Medtronic driver is very new, you need to enable logging, so that we can debug and fix problems, if they should arise. Click on icon on upper left corner, select Maintainance and Log Settings. Options Pump, PumpComm, PumpBTComm need to be checked.

### RileyLink/GNARL

When you restart RileyLink or GNARL, you need to either do new TuneUp (action "Wake and Tune Up") or resend communication parameters (action "Reset RileyLink Config"), or else communication will fail.

### CGM/Непрерывный мониторинг ГК

Medtronic CGMS is currently NOT supported.

### Использование помпы вручную

You should avoid manually doing treatments things on your pump. All commands (bolus, TBR) should go through AndroidAPS, but if it happens that you will do manual commands, do NOT run commands with frequency less than 3 minutes (so if you do 2 boluses (for whatever reason), second should be started at least 3 minutes after first one).

## Изменения часового пояса и сезонное время или путешествия с помпой Medtronic и AndroidAPS

Important thing to remember is that you should never disable loop when you are traveling (unless your CGMS can't do offline mode). AAPS will automatically detect Timezone changes and will send command to Pump to change time, when time on Phone is changed.

Now if you travel to East and your TZ changes with adding hours (ex. from GMT+0 to GMT+2), pump history won't have problem and you don't have to worry... but if you travel to West and your TZ changes by removing hours (GMT+2 to GMT-0), then sychronization might be little iffy. In clear text, that means that for next x hours you will have to be careful, because your IOB, might be little weird.

We are aware of this problem, and we are already looking into possible solution (see https://github.com/andyrozman/RileyLinkAAPS/issues/145), but for now, have that info in mind when traveling.

## Часто задаваемые вопросы

### Можно ли видеть заряд RileyLink/GNARL?

Нет. At the moment none of this devices support this and it probably won't even in the future.

### Является ли GNARL полной заменой RileyLink?

Yes. Author of GNARL added all functions used by Medtronic driver. All Medtronic communication is supported (at time of the writing (June/2019). GNARL can't be used for Omnipod communication. Downside of GNARL is that you have to build it yourself, and you have to have compatible version of hardware.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

### Где взять RileyLink или GNARL?

Like mentioned before you can get devices here:

- RileyLink - здесь - [getrileylink.org](https://getrileylink.org/).
- GNARL- здесь можно получить информацию, но устройство должно быть заказано в другом месте ([ github.com/ecc1/gnarl ](https://github.com/ecc1/gnarl)).

### Что делать, если потеряна связь с RileyLink и/или помпой?

1. Выполните действие "Пробуждения и настройка", оно приведет к попытке найти правильную частоту связи с помпой.
2. Отключите Bluetooth, подождите 10 секунд и снова включите его. Это заставит переподключиться к RileyLink.
3. Выполните сброс RileyLink, после этого не забудьте выполнить действие "сброс конфигурации RileyLink".
4. Попробуйте 3 и 2 вместе.
5. Перезагрузите RileyLink и телефон.

### Как определить, на какой частоте работает помпа

![Pump Model](../images/Medtronic06.png)

If you turn your pump around in first line on right side you will see special 3 letter code. First two letters determine frequency type and last one determines color. Here are possible values for Frequency:

- NA-Северная Америка (при выборе частоты необходимо выбрать "US & Canada (916 МГц)")
- CA-Канада (для выбора частоты необходимо выбрать "US & Canada (916 МГц)")
- WW- остальные страны (при выборе частоты необходимо выбрать "Worldwide (868 Mhz)")