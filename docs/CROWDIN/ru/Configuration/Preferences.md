# Настройки

Откройте настройки, нажав три точки меню в верхней правой части главного экрана:

![Как открыть Настройки](../images/PreferencesOpen.png)

## Пароль для настроек

Пароль для настроек позволяет предотвратить случайное или несанкционированное изменение настроек. После того, как вы введете пароль в этом разделе меню, вам потребуется ввести его, чтобы получить доступ к настройкам. Чтобы удалить пароль, в настройках удалите текст в этом поле.

## Возраст пациента

В этом параметре установлены ограничения безопасности, основанные на возрасте, который вы выбрали. Если вы начинаете достигать верхних ограничений (как например максимальный болюс) пора подняться на один шаг вверх. Выбирать возраст выше, чем реальный, не следует, потому что может привести к передозировке при введении ошибочного значения в диалоге инсулина (например, если пропущен десятичный разделитель - точка или запятая). Если вы хотите знать фактические величины жестких кодовых ограничений безопасности, перейдите к функции алгоритма на [этой странице](../Usage/Open-APS-features.md).

## Общие настройки

* Выберите свой язык здесь. Если ваш язык недоступен, или не все слова переведены, вы можете предложить свою версию перевода на [Crowdin](https://crowdin.com/project/androidaps) или задать вопрос в [gitter chatroom](https://gitter.im/MilosKozak/AndroidAPS).

## Общие замечания

* Во время презентаций рекомендуется держать экран включенным. При этом потребляется много энергии, поэтому разумно держать телефон подключенным к зарядному устройству.
* Настройка кнопок позволяют выбрать, какие кнопки видны на домашнем экране. Также можно выбрать несколько вариантов всплывающего экрана, который появится после нажатия кнопки.
* Настройки мастера болюса позволяют добавить кнопку быстрого болюса для привычных перекусов или приемов пищи с учетом текущих параметров активного инсулина, гликемии и т. п.

### Дополнительные настройки

![Настройки - Обзор - Расширенные настройки](../images/PreferencesOverviewAdvanced_V2_5.png)

* Общая настройка для подачи только части инсулина, рекомендованного мастером болюса. При использовании мастера болюса подается только заданный процент (должен быть от 10 до 100) от вычисленного. Этот процент показан в мастере болюса.
    
    ![Мастер Болюса 80%](../images/BolusWizardPartDelivery.png)

* Опция включения [ суперболюса ](../Getting-Started/Screenshots#section-a) в мастере болюса.

* Индикаторы состояния дают визуальное предупреждение о низком уровне резервуара и заряда батареи, а также о просроченном времени смены места катетера помпы. Расширенная версия показывает истекшее время / процент заряда батареи.
    
    ![Индикаторы состояния - подробно](../images/StatusLights_V2_5.png)
    
    Параметры индикаторов состояния должны быть заданы в параметрах Nightscout. Задайте следующие параметры:
    
    * Возраст канюли: CAGE_WARN и CAGE_URGENT (стандартно 48 и 72 часа)
    * Возраст инсулина (резервуар): IAGE_WARN и IAGE_URGENT (стандартно 72 и 96 часов)
    * Возраст сенсора: SAGE_WARN и SAGE_URGENT (стандартно 164 и 166 часов)
    * Возраст батареи: BAGE_WARN и BAGE_URGENT (стандартно 240 и 360 часов)

* Порог для уровня резервуара и критического уровня резервуара.

* Порог для уровня батареи и критического уровня батареи.

## Безопасность назначений

### Макс разрешенный болюс [U] ед

Это максимальное количество болюсного инсулина, разрешаемое к подаче в AAPS. Эта настройка существует как ограничение безопасности для предотвращения подачи чрезмерного болюса из-за случайного ввода или ошибки пользователя. Рекомендуется установить это значение как разумный предел, приблизительно соответствующий максимальному количеству болюсного инсулина, который вы когда-либо можете подать на еду или на коррекцию. Это ограничение также налагается на результаты калькулятора болюса.

### Макс разрешенные углеводы (г)

Это максимальное количество углеводов, на которое калькулятор болюса AAPS может подать дозу инсулина. Эта настройка существует как ограничение безопасности для предотвращения подачи чрезмерного болюса из-за случайного ввода или ошибки пользователя. Рекомендуется установить это значение как разумный предел, приблизительно соответствующий максимальному количеству углеводов, которые вам когда-либо понадобится на еду.

## Замкнутый цикл

Здесь можно переключаться между открытым и замкнутым циклом. Открытый цикл означает, что предложения по изменению скорости временного базала TBR, сделанные на основе ваших данных, появляются на экране в качестве уведомления, но вы должны самостоятельно принять их и вручную ввести в помпу. Закрытый цикл означает, что предложения по изменению скорости временного базала TBR автоматически отправляются на вашу помпу без вашего подтверждения. Домашний экран в левом верхнем углу отображает открытое или замкнутое состояние цикла и нажатие и удерживание этого участка экрана позволяет переключаться между этими опциями.

## Помощник болюса OpenAPS AMA

Помощник болюса OpenAPS Advanced Meal Assist (AMA) позволяет системе быстрее установить высокое временное целевое значение после болюса на еду, ЕСЛИ вы правильно ввели углеводы. Включите его на вкладке Конфигуратор, чтобы просмотреть параметры безопасности, чтобы использовать эту возможность, вам нужно будет выполнить [ Цель 9 ](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama). Подробнее о настройках и автонастройке чувствительности [Autosens можно прочитать в документации OpenAPS ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Максималное значение ед./ч для скорости временного базала

Эта настройка существует как ограничение безопасности, чтобы не позволить алгоритму ААПС когда-либо задать слишком большую величину скорости базала. Значение задается в единицах в час (ед./ч). Рекомендуется установить это значение на разумный предел. Хорошая рекомендация – взять **наивысшую скорость базала** в вашем профиле и **умножить ее на 4**. Например, если максимальная скорость базала в вашем профиле была 0,5 ед./ч, то, умножив ее на 4, вы получите значение 2 ед./ч.

### Максимальный активный базальный инсулин IOB, разрешенный к подаче для OpenAPS [ед.]

Количество базального инсулина (в единицах) которому позволено накопиться в вашем организме в дополнение к нормальному базальному профилю. По достижении этой величины AAPS перестает подавать дополнительный базальный инсулин до тех пор, пока ваш активный базальный Инсулин (IOB) снова не вернется в этот диапазон.

* Эта величина не включает в себя активный болюсный инсулин IOB, только базальный.
* Эта величина вычисляется и отслеживается независимо от скорости вашего обычного базала. Учитывается только дополнительный базал, который свыше обычного.
* Значение задается в единицах инсулина (ед.).

Когда вы начинаете работать с алгоритмом ИПЖ, **рекомендуется установить макс. активный базальный инсулин IOB на 0 ** на время привыкания к системе. Такая настройка запрещает AAPS давать дополнительный базальный инсулин. В этот период алгоритм AAPS в состоянии ограничить или отключить базу инсулина для предотвращения гипогликемии.

Это важный шаг для того чтобы:

* Безопасно привыкнуть к системе AAPS и тому, как она работает.
* Совершенствовать свой базальный профиль и лучше настроить фактор чувствительности к инсулину ISF.
* See how AAPS limits your basal insulin to prevent hypoglycaemia.

When you feel comfortable, you can allow the system to start giving you additional basal insulin, by raising the Max Basal IOB value. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 3 to get a value of 1.5u.

* You can start conservatively with this value and increase it slowly over time. 
* These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

*Note: As a safety feature, Max Basal IOB is hard-limited to 7u.*

## Настройки усваиваемости

If you have selected to use AMA Autosens then you will be able to enter your maximum meal absorption time and how frequently you want autosense to refresh. If you often eat high fat or protein meals you will need to increase your meal absorption time.

## Настройки помпы

The options here will vary depending on which pump driver you have selected in 'Config Builder'. Выполните сопряжение и настройте помпу в соответствии с инструкциями относящимися к помпе:

* [Инсулиновая помпа DanaR](../Configuration/DanaR-Insulin-Pump.md) 
* [Инсулиновая помпа DanaRS](../Configuration/DanaRS-Insulin-Pump.md) 
* [Помпа Accu Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Medtronic Pump](..//Configuration/MedtronicPump.md)

If using AndroidAPS to open loop then make sure you have selected Virtual Pump in config builder.

## Клиент Nightscout

* Set your 'nightscout URL' here (https://yourwebsitename.herokuapp.com or https://yourwebsitename.azurewebsites.net), and the 'API secret' (a 12 character password recorded in your heroku or azure variables). This enables data to be read and written between both the nightscout website and AndroidAPS. Double check for typos here if you are stuck in Objective 1.
* **Make sure that the URL is WITHOUT /api/v1/ at the end.**
    
    ![NSClient URL](../images/NSClientURL.png)

* 'Log app start to nightscout' will record a note in your careportal entries every time the app is started. The app should not be needing to start more than once a day; more frequently than this suggests a problem.

* 'Alarm options' allows you to select which default nightscout alarms to use through the app. For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [heroku or azure variables](http://www.nightscout.info/wiki/welcome/website-features#customalarms). They will only work whilst you have a connection to nightscout and are intended for parent/carers, if you have the CGM source on your phone then use those alarms instead (e.g. xdrip+).
* 'Enable local broadcasts' will share your careportal data to other apps on the phone such as xdrip.
* 'Always use basal absolute values' must be activated if you want to use Autotune properly.

## СМС-коммуникатор

This setting allows remote control of the app by texting instructions to the patients phone which the app will follow such as suspending loop, or bolusing. Further information is described in [SMS Commands](../Children/SMS-Commands.rst) but it will only display in Preferences if you have selected this option in the Config Builder.

## Другое

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Отбор данных

* 'Fabric Upload' will send crash reporting and feature usage data to the developers.