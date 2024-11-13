# Что мы видим на экранах AAPS

```{contents}
:backlinks: entry
:depth: 2
```

Экраны AAPS - главный экран

## Главный экран

![Homescreen V2.7](../images/Home2020_Homescreen.png)

Это первый экран, который виден при открытии приложения **AAPS**. Он отображает почти всю информацию, требующуюся повседневно.

### Раздел А - Вкладки

* Позволяют выполнять переход между различными модулями **AAPS**.
* Между экранами также можно переходить свайпом влево или вправо.
* Видимые вкладки можно выбрать в [Конфигураторе](#Config-Builder-tab-or-hamburger-menu).

### Раздел B - Профиль & Цель

#### Текущий профиль

Текущий профиль отображается на левой панели главного экрана.

Короткое нажатие на панель открывает подробности о текущем профиле. Долгое нажатие дает возможность [переключаться между различными профилями](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).

![Profile switch remaining duration](../images/Home2020_ProfileSwitch.png)

1. Обычный вид с активацией стандартного профиля.
2. Переключение профиля с остающейся продолжительностью 59мн.
3. Переключение профиля с заданным процентом 120%.
4. Переключение профиля с заданным процентом 80% и остающейся продолжительностью 59 мин.
5. Переключение профиля со сдвигом по времени --1 час.
6. Переключение профиля с заданным процентом 120%, сдвигом по времени 1 час и остающейся продолжительностью 59 мин.

#### Целевое значение ГК (Цель)

![Temp target remaining duration](../images/Home2020_TT.png)

Текущее целевое значение глюкозы крови (ГК) отображается на правой панели.

Короткое нажатие позволяет установить **[временную цель](../DailyLifeWithAaps/TempTargets.md)**.

При установленной временной цели панель становится желтой, а в скобках отображается оставшееся время в минутах.

(Визуализация динамического изменения цели)=

#### Визуализация динамического изменения цели

![Visualization of dynamic target adjustment](../images/Home2020_DynamicTargetAdjustment.png)

При использовании алгоритма [микроболюсов SMB](#Config-Builder-aps) и [Autosens](#Open-APS-features-autosens) **AAPS** может динамически настроить цель на основе чувствительности.

Включите один или оба параметра в [Настройки > настройки OpenAPS SMB](#Preferences-openaps-smb-settings):

* "чувствительность повышает цель" и/или 
* "сопротивляемость понижает цель" 

Если **AAPS** обнаружит повышенную сопротивляемость или чувствительность - цель, заданная в профиле, будет изменена. При таком изменении панель окрашивается в зеленый цвет.

(AapsScreens-section-c-bg-loop-status)=

### Раздел C - ГК & статус контура

#### Текущий уровень глюкозы крови

Самое свежее значение ГК, переданное системой мониторинга, отображается в левой части экрана.

Цвет показаний ГК соответствует настроенному [даипазону](#Preferences-range-for-visualization).

* зеленый = в заданном диапазоне
* красный = ниже заданного диапазона
* желтый = выше заданного диапазона 

Серый блок по центру экрана отображает изменение текущего уровня ГК относительно предыдущего показания и изменение за последние 15 и 40 минут.

(AapsScreens-loop-status)=

#### Статус контура

![Статус контура](../images/Home2020_LoopStatus.png)

Пиктограмма справа показывает состояние цикла:

1. Зеленый круг = замкнутый цикл активен
2. Зелёный круг с пунктирной линией = [ приостановка на низкой ГК (LGS)](#objectives-objective6)
3. Красный круг = цикл деактивирован (постоянно отключен)
4. Желтый круг = цикл приостановлен (временно приостановлен, но базальный инсулин будет вводиться) - оставшееся время паузы отображается под пиктограммой
5. Серый круг = помпа отключена (временно отключена любая подача инсулина) - оставшееся время остановки отображается под пиктограммой
6. Оранжевый круг = запущен суперболюс - оставшееся время отображаешься под пиктограммой
7. Синий круг с пунктирной линией = активен незамкнутый цикл

Короткое или длинное нажатие на пиктограмму откроет диалоговое окно для переключения между режимами контура (Закрытый, Приостановка на низкой ГК, Открытый или Отключен), для отключения / возобновления цикла или отключения / подключения помпы обратно.

* Если диалоговое окно было вызвано коротким нажатием - после смены режима появится запрос на подтверждение. Если долгим нажатием - смена режима применится сразу.
    
    ![Loop status menu](../images/Home2020_Loop_Dialog.png)

(aaps-screens-bg-warning-sign)=

#### Восклицательный знак возле ГК

Если по какой-то причине возникают проблемы с показаниями ГК, которые поступают в **AAPS**, на главном экране под значением ГК появляется восклицательный знак.

##### Красный восклицательный знак: Задвоенные данные ГК

Красный предупреждающий знак служит сигналом для немедленных действий: поступают **дублирующиеся данные ГК**, не позволяющие алгоритму цикла работать правильно. Поэтому замкнутый цикл будет отключен до устранения проблемы.

    {admonition} {предупреждение} Цикл не запущен
    :class::класс: примечание
    Цикл не будет работать до устранения проблемы!

![Красное предупреждение о ГК](../images/bg_warn_red.png)

Следует выяснить, почему дублируются данные ГК:

* Активирован ли мост Dexcom на сайте NS? Отключите мост, перейдя в панель управления сайта NS, отредактируйте переменную «enable» и удалите оттуда "bridge". (Для Heroku [подробности можно найти здесь](https://nightscout.github.io/troubleshoot/troublehoot/#heroku-settings).)
* Данные о ГК поступают в Nightscout (NS) из нескольких источников? Если у вас самостоятельно собранное приложение BYODA, включите выгрузку в **AAPS**, но не активируйте её в xDrip+.
* Есть ли у вас подписчики (фолоуеры), которые могут получать ГК и снова передавать ее на ваш сайт NS?
* Последний вариант: В **AAPS** перейдите в [Настройки > NS Client ](#Preferences-nsclient), выберите настройки синхронизации и отключите опцию "Принимать данные CGM из NS".

Чтобы немедленно удалить знак предупреждения, нужно вручную удалить несколько задвоенных записей из вкладки Dexcom/xDrip+.

Однако если задублированных данных много, проще сделать следующее

* [сохраните настройки](../Maintenance/ExportImportSettings.md),
* сбросьте базу данных в меню обслуживания и
* [импортируйте настройки](../Maintenance/ExportImportSettings.md) заново

##### Желтый восклицательный знак

Желтый сигнал предупреждения указывает, что значения ГК получены через нерегулярные промежутки времени или имеются пропуски значений. При нажатии на значок появляется сообщение «Используются пересчитанные данные».

![Желтое предупреждение о ГК](../images/bg_warn_yellow.png)

Обычно предпринимать никаких действий не требуется. Замкнутый цикл продолжит работать!

Так как замена сенсора прерывает поток данных, то появление предупреждающего знака после замены сенсора - явление нормальное и не должно вызывать беспокойства.

Специальное примечание для пользователей Libre:

* Cенсорs Libre раз или два за несколько часов могут пропускать данные, а это означает, что идеального потока значений ГК не получится.
* Непрерывный поток также нарушается скачками данных.
* Поэтому желтый предупреждающий «постоянно включен» для пользователей Libre.

*Примечание*: В своих расчетах.**AAPS** учитывает данные за 30 часов. Поэтому даже после устранения проблемы нерегулярной передачи данных, может потребоваться до 30 часов, чтобы исчез желтый треугольник.

### Раздел D - АктИнс, АктУгл, БС и AS

![Раздел D](../images/Home2020_TBR.png)

**Пиктограмма шприца**: инсулин "на борту" (IOB, АктИнс) - количество активного инсулина в организме

1. Значение активного инсулина IOB будет равно нулю, если активна только база текущего профиля и нет остаточного инсулина от предыдущих болюсов.
    
    * IOB может быть отрицательным если был период с пониженным относительно текущего профиля базалом.
    * Нажмите на иконку (только короткое нажатие), чтобы увидеть как IOB распределяется между базой и болюсом.

2. **Пиктограмма колоска**: [углеводы "на борту" (COB, АктУгл)](../DailyLifeWithAaps/CobCalculation.md) - количество еще не усвоенных углеводов из тех, чтоб были съедены ранее. Пиктограмма мерцает, если необходимо съесть дополнительные углеводы (см [ниже](#aaps-screens-carbs-required))

3. **Фиолетовая линия**: текущая скорость базала. Пиктограмма меняется, отражая временные изменения в базальной скорости (плоская при 100%) 
    * Кратко нажмите на иконку, чтобы увидеть подробности базала (значение текущего базала, время начала, остаток/общая продолжительность в минутах)
4. **Пиктограмма со стрелками вверх & вниз**: отображает актуальный статус [Autosens](#Open-APS-features-autosens) (включен или отключен) и под ней его текущий расчет

(aaps-screens-carbs-requirement)=

#### Требуются углеводы

![Требуются углеводы](../images/Home2020_CarbsRequired.png)

Требование углеводов появляется, когда расчеты определяют их недостаток.

Это происходит, когда алгоритм Oref решает, что не сможет помочь простым отключением подачи инсулина и во избежание гипогликемии необходимы углеводы.

Уведомления об углеводах значительно сложнее, чем уведомления калькулятора болюса. Вы можете увидеть требование углеводов даже когда калькулятор болюса не показывает их нехватку.

При желании уведомления об углеводах могут быть переданы в Nightscout. В этом случае сработают стандартные настройки оповещения NS. 

### Раздел E- Индикаторы состояния

![Раздел E](../images/Home2020_StatusLights.png)

Индикаторы состояния сообщают:

* сколько времени прошло с момента установки канюли
* сколько времени прошло с момента установки резервуара
* об уровне заполнения резервуара (в единицах)
* сколько времени отработал сенсор
* сколько времени прошло с замены батареи и об уровне ее заряда (%)

Если превышено пороговое значение, данные показываются желтым цветом.

Если превышено критическое пороговое значение, значения будут показаны красным цветом.

Настройки можно изменить в [Настройках > Обзор > Статус](#Preferences-status-lights).

В зависимости от помпы у вас могут отсутствовать некоторые пиктограммы.

(aaps-screens-main-graph)=

### Раздел F - Основной график

![Раздел F](../images/Home2020_MainGraph.png)

График показывает уровень глюкозы в крови (ГК) считываемый с мониторинга глюкозы (CGM).

Здесь показаны заметки, введенные на вкладке действия, такие как калибровка с глюкометра и записи углеводов, а также переключения профиля.

Длительное нажатие на графике изменит его масштаб. Можно выбрать отображение последних 6, 8, 12, 18 или 24 часов.

Зеленая область отражает ваш целевой диапазон.

Синие треугольники отображают микроболюсы[SMB](#Open-APS-features-super-micro-bolus-smb) - если они включены в [Настройках > OpenAPS SMB](#Preferences-openaps-smb-settings).

(AapsScreens-activate-optional-information)=

#### Активация дополнительной информации

На главном графике можно включить следующую дополнительную информацию:

* Прогнозирование
* Базал
* Нагрузка - кривая действия инсулина

Чтобы показать эту информацию, нажмите на маленький треугольник справа от основного графика. Для главного графика доступны три варианта выше строки "\---\---- График 1 \---\----".

![Main graph setting](../images/Home2020_MainGraphSetting.png)

(aaps-screens-prediction-lines)=

#### Линии прогнозирования

* **Оранжевая** линия: активные углеводы [COB](CobCalculation)- (этот цвет как правило используется для представления активных углеводов COB и углеводов в целом)
    
    Эта линия прогнозирования показывает, где будет ГК (а не сами активные углеводы COB) на основе текущих настроек **Профиля** с учетом того, что отклонения из-за усвоения углеводов останутся постоянными. Эта линия появляется только при известном наличии активных углеводов COB.

* **Темно-синяя** линия: активный инсулин IOB (этот цвет обычно используется для отображения активного инсулина IOB и инсулина)
    
    Эта линия прогнозирования показывает, что будет происходить только под воздействием инсулина. Например, если ввести инсулин, а потом не есть никаких углеводов.

* **Голубая** линия: нулевой временный базал (предсказанная ГК, если будет установлена временная базальная скорость в 0%)
    
    Эта линия прогнозирования показывает, как изменится траектория ГК, если помпа прекратит введение инсулина (0% временной базальной скорости TBR).
    
    *Эта линия появляется только при использовании алгоритма [SMB](#Config-Builder-aps).*

* <**Темно-желтая** линия: [UAM](#SensitivityDetectionAndCob-sensitivity-oref1) (незаявленное питание)
    
    Незапланированный прием пищи - обнаружение значительного повышения уровня глюкозы, как следствие приема пищи, выброса адреналина или других факторов. Линия прогнозирования аналогична **оранжевой линии активных углеводов COB**, но предполагает, что отклонения будут понижаться с постоянной скоростью (за счет продления текущей скорости понижения).
    
    *Эта линия появляется только при использовании алгоритма [SMB](#Config-Builder-aps).*

* **Темно-оранжевая** линия: aCOB (ускоренное усвоение углеводов)
    
    Аналогично COB, но скорость усвоения углеводов считается постоянной и равной 10 мг/дл/5м (-0.555 ммоль/л/5м). Устарело и имеет ограниченную полезность.
    
    *Эта линия появляется только при использовании устаревшего алгоритма помощника болюса[AMA](#Config-Builder-aps).*

Обычно реальная кривая глюкозы находится где-то между этих линий, или близка к той, которая ближе всего описывает вашу текущую ситуацию.

#### Базал

**Сплошная синяя** линия показывает базальную скорость помпы и отражает фактическую подачу инсулина с течением времени.

**Пунктирная синяя** линия - это базальная скорость из профиля, если бы не было временных изменений базальной скорости (ВБС).

При стандартной базальной скорости область под линией показывается в темно-синем цвете. Когда базальная скорость временно изменяется (увеличивается или уменьшается), область под линией отображается в светло-синем цвете.

#### Нагрузка

**Тонкая желтая** линия отображает активность инсулина.

Она основана на ожидаемом падении ГК из-за действия инсулина в системе, если не присутствуют другие факторы (например, углеводы).

(AapsScreens-section-g-additional-graphs)=

### Раздел G - Дополнительные графики

Можно активировать до четырех дополнительных графиков ниже главного графика.

Чтобы настроить дополнительные графики щелкните по маленькомутреугольнику справа от [главного](#section-f---main-graph) и прокрутите вниз.

![Дополнительные параметры графика](../images/Home2020_AdditionalGraphSetting.png)

Для добавления дополнительного графика установите флажок с левой стороны его названия (например, \---\---- График 1 \---\----).

Большинство пользователей считают достаточной следующую конфигурацию дополнительных графиков:

* График 1 с IOB, COB, чувствительностью
* Диаграмма 2 с отклонениями и влиянием ГК

#### Абсолютный инсулин

Активный инсулин, включая болюсный **и базальный**.

#### Активный инсулин (IOB)

Показывает инсулин, который вы имеете "на борту" (= активный инсулин в вашем теле). Он включает инсулин болюсов и временного базала (**но исключает базальную скорость, установленную в вашем профиле**).

Если бы не было болюсов, микроболюсов [SMB](#Open-APS-features-super-micro-bolus-smb), временных базалов TBR во время действия инсулина DIA, он равнялся бы нулю.

Активный инсулин IOB может быть отрицательным, если у васне осталось ни болюсов, ни нулевого/низкого временного базала в течение более длительного времени чем DIA.

Усвоение инсулина зависит от времени его действия [DIA и настроек профиля инсулина](../SettingUpAaps/YourAapsProfile.md).

#### Активные углеводы (COB)

Показывает активные углеводы в организме (= еще не усвоенные углеводы).

Усвоение инсулина зависит от [отклонений, замеченных алгоритмом](../DailyLifeWithAaps/CobCalculation.md).

Если обнаружится более быстрое усвоение углеводов, чем ожидалось, будет подан инсулин, и это увеличит количество активного инсулина IOB (с учетом настроек безопасности).

#### Чувствительность

Показывает чувствительность, обнаруженную алгоритмом [Autosens](#Open-APS-features-autosens).

Чувствительность - это расчет чувствительности к инсулину в результате нагрузки, гормонов и т.д.

Note, you need to be in [Objective 8](#objectives-objective8) in order to let Sensitivity Detection/[Autosens](#Open-APS-features-autosens) automatically adjust the amount of insulin delivered. До достижения этой цели линия Autosens на диаграмме отображается только для информации.

#### Частота сердцебиения

Эти данные могут быть доступны при использовании [смарт-часов Garmin](#Watchfaces-garmin).

#### Отклонения

* **Серые** столбцы показывают отклонения, вызванные углеводами. 
* **Зеленые** столбцы показывают, что ГК превышает уровень, ожидаемый алгоритмом. Зеленые столбцы используются для увеличения сопротивляемости в [Autosens](#Open-APS-features-autosens).
* **Красные** столбцы показывают, что ГК ниже величины, ожидаемой алгоритмом. Красные столбцы используются для увеличения чувствительности в [Autosens](#Open-APS-features-autosens).
* **Желтые** столбцы показывают отклонение, вызванное непредвиденным приемом пищи UAM.
* **Черные** столбцы показывают небольшие отклонения, не принятые во внимание при расчете чувствительности

#### Влияние ГК

Эта линия показывает, в какой степени ГК "должна" подниматься или падать, только на основании активности инсулина.

![Кнопки главного экрана](../images/Screenshots_DEV_BGI.png)

Эту линию стоит вывести вместе со столбцами отклонения. Они имеют одинаковые масштабы, но отличаются от других необязательных данных,, поэтому неплохо отобразить их на отдельном графике, как показано выше. Сравнение линии влияния ГК и шкалы отклонений -еще один способ понять флуктуации **ГК**. Здесь, в момент, отмеченный **1**, столбцы отклонения больше линии влияния ГК, что указывает на повышение ГК. Позднее, в часы, отмеченные **2**, линии влияния ГК и отклонения DEV в значительной степени совпадают, что указывает на стабильность ГК.

### Раздел H - Кнопки

![Кнопки главного экрана](../images/Home2020_Buttons.png)

Кнопки инсулина, углеводов и калькулятора отображаются почти всегда. При потере связи с помпой кнопка инсулина не видна.

Другие кнопки можно установить в [Настройках > Обзор > Кнопки](#Preferences-buttons).

Что касается использовании кнопок Insulin, Carbs и Калькулятора : При включении в [Настройках > Обзор](#Preferences-show-notes-field-in-treatments-dialogs), поле **Примечания** позволяет ввести текст, который будет отображаться на главном графике, и может быть загружен в Nightscout - в зависимости от ваших настроек для клиента NS.

#### Инсулин

![Кнопка инсулина](../images/Home2020_ButtonInsulin.png)

Чтобы ввести заданное количество инсулина без использования [калькулятора болюса](#bolus-wizard).

Можно автоматически начать временную цель TT **Ожидаемый прием пищи**, поставив флажок рядом с опцией [Начать ВЦ ожидаемый прием пищи](#TempTargets-eating-soon-temp-target).

Если не хотите подавать болюс с помпы, а только сделать запись о введенном инсулине (например, поданного шприц-ручкой), поставьте флажок рядом с соответствующей опцией. При установке этого флажка, появится дополнительное поле "Смещение по времени", которое можно использовать для записи об инъекциях, сделанных в прошлом.

Можно использовать кнопки для быстрого приращения количества инсулина. Величину приращения можно изменить в [Настройках > Общие > Кнопки](#Preferences-buttons).

#### Углеводы

![Кнопка углеводов](../images/Home2020_ButtonCarbs.png)

Для записи углеводов без подачи болюса.

Можно активировать [заранее настроенную временную цель](#TempTargets-hypo-temp-target) отметив ее флажком.

**Смещение по времени**: сколько минут пройдет до начала приема пищи (или после этого момента).

**Длительность действия**: для ["растянутых углеводов"](ExtendedCarbs)

Можно использовать кнопки для быстрого приращения количества углеводов. Величину приращения можно изменить в [Настройках > Общие > Кнопки](#Preferences-buttons).

#### Калькулятор

Смотрите раздел Мастер болюса [ниже](#bolus-wizard).

#### Калибровки

Отправляет калибровку в xDrip+ или открывает диалог калибровки Dexcom.

Должен быть активирован в [Настройках > Обзор > Кнопки](#Preferences-buttons).

#### CGM / НМГ

Открывает xDrip+.

Кнопка Назад возвращает в **AAPS**.

Должен быть активирован в [Настройках > Обзор > Кнопки](#Preferences-buttons).

#### Мастер быстрых настроек

Быстрый ввод заранее заданного количества углеводов с предварительно настроенными параметрами расчета дозы.

Детали настраиваются в [Настройках > Общее > БыстрыйБолюс настройки](#Preferences-quick-wizard).

## Мастер Болюса

![Мастер Болюса](../images/Home2020_BolusWizard_v2.png)

Чаще всего болюс на еду вводят отсюда.

### Раздел I

Показывает рассчитываемый болюс.

Если количество активного инсулина превышает рассчитанный болюс, то оно просто покажет количество углеводов, которые еще требуются.

(AapsScreens-section-j)=

### Раздел J

Поле ГК обычно уже заполнено данными с мониторинга. Если мониторинг ГК не работает, то поле будет пустым.

В поле **Углеводы** вводим расчетное количество углеводов - или эквивалент - на которое хотим дать болюс.

Поле **Коррекция** - для корректировки, если вы по какой-либо причине хотите изменить конечную дозу.

Поле **Время приема углеводов** предназначено для преболюса, чтобы сообщить системе о задержке в появлении углеводов. Вы можете добавить отрицательное число в это поле, если даете болюс на прошлые углеводы.

**Напоминание о "будущих" углеводах**: можно поставить флажок в поле рядом с иконкой будильника (флажок поставится автоматически, если указано время в будущем), в этом случае в указанное время сработает оповещение о необходимости начать есть заведенные в **AAPS** углеводы.

![Мастер болюса с напоминанием о питании](../images/Home2021_BolusWizard_EatingReminder.png)

### Раздел K

**Профиль** позволяет выбрать другой профиль, отличный от текущего профиля, для расчета требуемого инсулина. Выбор профиля применяется только для текущего болюса, это не изменение профиля.

**Суперболюс** означает, что к обычной дозе вводимого сейчас болюса будет добавлена база следующих двух часов, а ВБС на это время будет установлен в ноль, чтобы компенсировать этот дополнительный инсулин. Эта опция появляется только если отмечено "активировать суперболюс в помощнике болюса" в [Настройках > Начало > Дополнительные настройки](#Preferences-advanced-settings-overview). Идея заключается в том, чтобы доставить инсулин по возможности раньше и, желательно, сократить пики.

Подробная информация находится на сайте [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Раздел L

Подробности расчётов мастера болюса.

Можно отменить выбор нежелательный опций, но обычно это не требуется.

По соображениям безопасности флажок против временной цели **TT ставится вручную**, если нужно, чтобы калькулятор болюса отталкивался от действующей временной цели.

#### Комбинации активных углеводов COB и активного инсулина IOB и что они означают

* По соображениям безопасности флажок активного инсулина IOB не может быть снят когда отмечены активные углеводы COB, из-за риска передозировки инсулина, поскольку **AAPS **не может учесть то, что уже введено.
* If you tick COB and IOB, unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account.
* If you tick IOB without COB, **AAPS** takes account of already delivered insulin but won’t cover that off against any carbs still to be absorbed. Это приводит к уведомлению о "недостатке углеводов".
* Если подается болюс на ** дополнительную еду** вскоре после болюса на прием пищи (напр. дополнительный десерт) полезно **снять все галочки**. Таким образом, добавляются только новые углеводы а поскольку основная еда не еще не усвоена, то IOB не будет точно соответствовать углеводам COB вскоре после болюса на еду.

![BolusWizard with Details](../images/Home2021_BolusWizard_Details.png)

The box near the eye allows you to choose between the detailed view, with the numbers entering the calculation for each item, or the simple view with icons. Pressing on an icon will enable / disable this entry from the calculation.

(AapsScreens-wrong-cob-detection)=

#### Неверное обнаружение активных углеводов COB

![Медленное усвоение углеводов](../images/Calculator_SlowCarbAbsorption.png)

If you see the warning above after using bolus wizard, **AAPS** has detected that the calculated COB value may be wrong. So, if you want to bolus again after a previous meal with COB, you should be aware of overdosing!

For details, see the hints on [COB calculation page](#CobCalculation-detection-of-wrong-cob-values).

(screens-action-tab)=

## Вкладка "Действия"

![Вкладка "Действия"](../images/Home2021_Action.png)

### Действия-раздел M

Button **[Profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)** as an alternative to pressing the [current profile](#section-b---profile--target) on homescreen.

Button **[Temporary target](../DailyLifeWithAaps/TempTargets.md)** as an alternative to pressing the [current target](#section-b---profile--target) on homescreen.

Кнопка начала или отмены временного базала. Обратите внимание, что кнопка меняется с “TEMPBASAL” (ВРЕМБАЗАЛ) на “CANCEL x%” (ОТМЕНА х%), после начала действия.

Even though [extended boluses](#Extended-Carbs-extended-bolus-and-why-they-wont-work-in-closed-loop-environment) do not really work in a closed loop environment some people were asking for an option to use extended bolus anyway.

* Эта опция доступна только для помпDana RS и Insight. 
    * Замкнутый цикл автоматически будет остановлен и переключится на режим открытого цикла на время пролонгированных болюсов.
    * Make sure to read the [details](../DailyLifeWithAaps/ExtendedCarbs.md) before using this option.

### Портал терапии-раздел N

Displays information on:

* sensor age & level (battery percentage)
* insulin age & level (units)
* cannula age
* pump battery age & level (percentage

Less information will be shown if **low resolution skin** is used ([Preferences > General > Skin](#Preferences-skin)).

(screens-sensor-level-battery)=

#### Уровень заряда сенсора (батарея)

Works for CGM with an additional transmitter such as MiaoMiao 2. (Датчик должен послать информацию об уровне батареи на xDrip+.)

Thresholds can be set in [Preferences > Overview > Status lights](#Preferences-status-lights).

### Портал терапии-раздел О

BG check, prime/fill, sensor insert and pump battery change are the base for the data displayed in [section N](#careportal---section-n).

Кнопка Заполнение инфузионного набора позволяет регистрировать смену места катетера помпы, а также замену картриджа инсулина.

Раздел O отражает состояние портала терапии сайта Nightscout. Так что упражнения, объявление и вопрос являются специальными формами заметок.

### Инструменты - раздел P

#### Просмотр логов

Allows you to ride back in **AAPS** [history](../Maintenance/Reviewing.md).

#### TDD / общая суточная доза инсулина

Общая суточная доза = болюс + базал за сутки

Некоторые врачи рекомендуют - особенно для новых пользователей - соотношение базал-болюс 50:50.

Therefore, ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours).

Другие принимают за суточную базу TBB диапазон от 32% до 37% от суммарной суточной дозы TDD.

Как и большинство подобных подсказок они имеют ограниченное практическое значение. Примечание: Ваш диабет может быть иным!

(AapsScreens-insulin-profile)=

## Профиль Инсулина

![Профиль Инсулина](../images/Screenshot_insulin_profile.png)

This shows the activity profile of the insulin you have chosen in [config builder](#Config-Builder-insulin). The curves will vary based on the [DIA](#your-aaps-profile-duration-of-insulin-action) and the time to peak.

The **purple** line shows how much insulin remains after it has been injected as it decays with time and the **blue** line shows how active it is. The important thing to note is that the decay has a **long tail**. If you have been used to manual pumping, you have probably been used to assuming that insulin decays over about 3.5 hours. However, when you are looping, the long tail matters as the calculations are far more precise and these small amounts add up when they are subjected to the recursive calculations in the **AAPS** algorithm. Therefore, **AAPS** uses minimum 5h as DIA.

Более подробное обсуждение различных типов инсулина, их профилей активности и почему это важно, см. здесь [Понимание новых кривых IOB на основе экспоненциальных кривых активности](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

Отличная статья об этом: [Почему мы регулярно ошибались в определении длительности действия инсулина (DIA) и почему это важно…](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And even more at: [Exponential Insulin Curves + Fiasp](https://web.archive.org/web/20220630154425/http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Статус помпы

![Статус помпы](../images/Screenshot_PumpStatus.png)

* Разная информация о состоянии помпы. Отображаемая информация зависит от модели помпы.
* See [pumps page](../Getting-Started/CompatiblePumps.md) for details.

## Замкнутый цикл, помощник болюса AMA / микроболюсы SMB

These tabs show details about the algorithm's calculations and why **AAPS** acts the way it does.

Calculations are run each time the system gets a fresh reading from the CGM.

For more details see [APS section on config builder page](#Config-Builder-aps).

(aaps-screens-profile)=

## Profile

![Profile](../images/Screenshots_Profile.png)

Profile contains information on your individual diabetes settings, see the detailed **[Profile](../SettingUpAaps/YourAapsProfile.md)** page for more information.

The buttons on this page allow you to manage your profiles :

* **Green plus**: create new profile from scratch
* **Red X**: delete the profile currently on screen
* **Blue arrow**: duplicate the profile currently on screen

When you want to make any changes to a profile, make sure you are editing the correct profile. When you reach the profile tab, it may not show the current profile in use, but the first one in the list.

## Автоматизация

See the dedicated page [here](../DailyLifeWithAaps/Automations.md).

## клиент NS

![клиент NS](../images/Screenshots_NSClient.png)

This page displays the status of the connection with your Nightscout site.

Settings can be changed in [Preferences > NS Client](#Preferences-nsclient).

For troubleshooting see this [page](../GettingHelp/TroubleshootingNsClient.md).

## Источник ГК - xDrip+, BYODA...

![BG Source tab - here Nightscout](../images/Screenshots_BGSource.png)

Depending on your BG source settings, this tab is named differently.

Shows history of CGM readings and offers option to remove reading in case of failure (i.e. compression low) or duplicate readings.

(aaps-screens-treatments)=

## Терапия

This view can be accessed by pressing the 3 dots on the right of the menu, then Treatments. It is not possible to show it in the main menu through the Config Builder. In this view, you can view and alter the history of the following treatments:

* Bolus & carbs
* [Пролонгированный болюс](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Временная базальная скорость
* [Временная цель](../DailyLifeWithAaps/TempTargets.md)
* [Переключение профиля](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
* Careportal: notes entered through action tab and notes in dialogues
* User entry: other notes that are not sent to Nightscout

In the last column, the data source for each line is displayed in blue. It can be :

* NS for Nightscout : the data comes from or has been recorded to Nightscout
* PH for Pump History : the data has been processed by the pump

(screens-bolus-carbs)=

### Bolus & carbs

![Углеводы & болюс](../images/TreatmentsView1.png)

On this tab you can view the bolus and carbs log. Each bolus (line **1** and **4**) shows the remaining associated IOB next to the insulin amount. The origin of the bolus can be either :

* Meal (manually entered though the Insulin, Quick Wizard or Bolus Wizard buttons)
* SMB, when using the SMB Functionality

The carbs (line **2**) are only stored in Nightscout. If you have used the [Bolus Wizard](#bolus-wizard) to calculate insulin dosage, you can press the “Calc” text (line **3**) to show the details of how the bolus was calculated.

Depending on the pump used, insulin and carbs can be shown in one single line, or will result in multiple lines: one for the calculation detail, one for the carbs, one for the bolus itself.

The treatment tab can be used to correct faulty carb entries (*i.e.* you over- or underestimated carbs). Note that it is not possible to edit an existing entry, you need to follow the following process:

1. Проверьте и запомните фактические активные углеводы COB и активный инсулин IOB на главном экране.
2. В зависимости от помпы углеводы на вкладке терапии могут быть показаны одной линией с инсулином или в виде отдельной записи (например, для Dana RS).
3. Remove the entry with the faulty carb amount. (Latest versions have trashcan icon in treatments screen. Press the trashcan icon, select the lines to remove, and then press the trashcan icon again to finalize.)
4. Убедитесь, что углеводы удалены успешно, повторно проверив активные углеводы COB на главном экране.
5. Сделайте то же для активного инсулина IOB, если на вкладке терапии только одна линия для углеводов и инсулина.
    
    → If carbs are not removed as intended, and you add additional carbs as explained here (6.), COB will be too high and that might lead to too high insulin delivery.

6. Введите правильное количество углеводов при помощи кнопки углеводов на главном экране и убедитесь, что точное время события также введено.

7. Если на вкладке терапии только одна линия для углеводов и инсулина, следует также добавить и запись о количестве инсулина. Убедитесь в том, чтобы установить правильное время событие и проверить активный инсулин IOB на главном экране после подтверждения новой записи.

### Temp Basal

![Temp Basal](../images/TreatmentsView2.png)

The **temp basals** applied by the loop are shown here. When there is still an impact on the IOB for an entry, the information is shown in green. It can be:

* Positive IOB if the temp basal was higher than the one set in the Profile (line **2**)
* Negative IOB for a zero-temp or if the temp basal was lower than the one set in the Profile (line **1**)

Deleting the entries only affects your reports in Nightscout and will probably tamper your real IOB - it is not recommended.

On the left of a line, a red S means “Suspend” : it happens when basal is not currently delivered. This is a normal situation when in the process of changing a pod, for example.

### Временная цель

![Временная цель](../images/TreatmentsView3.png)

The history of temporary targets can be seen here.

### Profile Switch

![Profile Switch](../images/TreatmentsView4.png)

The history of profile switches can be seen here. You may see multiple entries each time you switch profile : line **1**, stored in Nightscout but not in Pump History, corresponds to the request of a profile switch made by the user. Line **2**, stored both in NS and PH, correspond to the actual switch.

Deleting the entries only affects your reports in Nightscout and will never actually change the current profile.

(aaps-screens-clone-profile-switch)=

#### Переключение профиля и клонирование

Вы можете легко создать новый локальный профиль с помощью переключения профиля. In this case, timeshift and percentage will be applied to the new local profile. Use the **Clone** button shown on line **1**.

You can now go to the [Profile tab](#profile) to edit the newly created Profile.

### Care portal

![Care portal](../images/TreatmentsView5.png)

This tab shows all notes and alerts recorded in Nightscout.

## Просмотр логов

This view can be accessed by pressing the 3 dots on the right of the menu, then History. It is not possible to put in the main menu through the Config Builder. It can also be accessed through a button at the bottom of the [Action tab](#action-tab).

Allows you to ride back in **AAPS** history. See the dedicated page [Reviewing your data > History Browser](../Maintenance/Reviewing.md).

## Statistics

This view can be accessed by pressing the 3 dots on the right of the menu, then Statistics. It is not possible to put in the main menu through the Config Builder.

Gives you statistics about your Time In Range and Total Daily Dose. See the dedicated page [Reviewing your data > Statistics](#reviewing-statistics).

## Profile Helper

This view can be accessed by pressing the 3 dots on the right of the menu, then Profile Helper. It is not possible to put in the main menu through the Config Builder. The [Profile Helper](../SettingUpAaps/ProfileHelper.md) can help you:

* build a profile from scratch for a kid
* compare two profiles
* clone a profile