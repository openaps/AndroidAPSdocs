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

### Индикаторы состояния

* Индикаторы состояния дают визуальное предупреждение о низком уровне резервуара и заряда батареи, а также о просроченном времени смены места катетера помпы. Расширенная версия показывает истекшее время / процент заряда батареи.
    
    ![Индикаторы состояния - подробно](../images/StatusLights_V2_5.png)
    
    Параметры индикаторов состояния должны быть заданы в настройках Nightscout. Задайте следующие параметры:
    
    * Время отработанное катетером: CAGE_WARN и CAGE_URGENT (стандартно 48 и 72 часа)
    * Срок нахождения инсулина в системе (резервуар): IAGE_WARN и IAGE_URGENT (стандартно 72 и 96 часов)
    * Время отработанное сенсором: SAGE_WARN и SAGE_URGENT (стандартно 164 и 166 часов)
    * Время отработанное батареей: BAGE_WARN и BAGE_URGENT (стандартно 240 и 360 часов)

* Порог для уровня резервуара и критического уровня резервуара.

* Порог для уровня батареи и критического уровня батареи.

## Безопасность назначений

### Макс разрешенный болюс [U] ед

Это максимальное количество болюсного инсулина, разрешаемое к подаче в AAPS. Эта настройка существует как ограничение безопасности для предотвращения подачи чрезмерного болюса из-за случайного ввода или ошибки пользователя. Рекомендуется установить это значение как разумный предел, приблизительно соответствующий максимальному количеству болюсного инсулина, который вы когда-либо можете подать на еду или на коррекцию. Это ограничение также налагается на результаты калькулятора болюса.

### Макс разрешенные углеводы (г)

Это максимальное количество углеводов, на которое калькулятор болюса AAPS может подать дозу инсулина. Эта настройка существует как ограничение безопасности для предотвращения подачи чрезмерного болюса из-за случайного ввода или ошибки пользователя. Рекомендуется установить это значение как разумный предел, приблизительно соответствующий максимальному количеству углеводов, которые вам когда-либо понадобится на еду.

## Замкнутый цикл

You can toggle between open and closed looping here.

**Open looping** means TBR suggestions are made based on your data and appear as a notification, but you must manually choose to accept them and manually enter them into your pump.

**Closed looping** means TBR suggestions are automatically sent to your pump without confirmation or input from you.

The homescreen will display in the top left corner whether you are open or closed looping, and pressing and holding this homescreen button will also allow you to toggle between the two.

### Minimal Request Rate

When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate. This defines the relative change required to trigger a notification.

![Minimal request rate](../images/MinRequestChange.png)

Please note: In closed loop mode a single target instead of range

## Помощник болюса OpenAPS AMA

OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. Turn it on in the Config tab to view the safety settings here, you will need to have completed [Objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) to use this feature. You can read more about the settings and [Autosens in the OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max U/hr a Temp Basal can be set to

This setting exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate. The value is measured in units per hour (u/hr). Рекомендуется установить это значение на разумный предел. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 4 to get a value of 2u/hr.

### Maximum basal IOB OpenAPS can deliver [U]

Amount of additional basal insulin (in units) allowed to accumulate in your body, on top of your normal basal profile. Once this value is reached, AAPS will stop giving additional basal insulin until your basal Insulin on Board (IOB) has decayed to within this range again.

* Эта величина не учитывает активный болюсный инсулин IOB, только базальный.
* Эта величина вычисляется и отслеживается независимо от скорости вашего обычного базала. Учитывается только дополнительный базал, который свыше обычного.
* Значение задается в единицах инсулина (ед.).

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. This prevents AAPS from giving any additional basal insulin at all. During this time AAPS will still be able to limit or turn off your basal insulin to help prevent hypoglycaemia.

This is an important step in order to:

* Безопасно привыкнуть к системе AAPS и тому, как она работает.
* Совершенствовать свой базальный профиль и лучше настроить фактор чувствительности к инсулину ISF.
* Увидеть, как AAPS ограничивает ваш базальный инсулин, чтобы предотвратить гипокликемию.

When you feel comfortable, you can allow the system to start giving you additional basal insulin, by raising the Max Basal IOB value. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 3 to get a value of 1.5u.

* Вы можете консервативно принять это значение и медленно увеличивать его со временем. 
* Это только руководящие принципы; организмы всех людей отличаются друг от друга. Вы можете понять, что вам требуется больше или меньше, чем рекомендуется здесь, но всегда следует начинать консервативно и регулировать медленно.

*Note: As a safety feature, Max Basal IOB is hard-limited to 7u.*

## Настройки усваиваемости

If you have selected to use AMA Autosens then you will be able to enter your maximum meal absorption time and how frequently you want autosense to refresh. If you often eat high fat or protein meals you will need to increase your meal absorption time.

## Настройки помпы

The options here will vary depending on which pump driver you have selected in 'Config Builder'. Pair and set your pump up according to the pump related instructions:

* [Инсулиновая помпа DanaR](../Configuration/DanaR-Insulin-Pump.md) 
* [Инсулиновая помпа DanaRS](../Configuration/DanaRS-Insulin-Pump.md) 
* [Помпа Accu Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Помпа Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md) 
* [Помпа Medtronic](..//Configuration/MedtronicPump.md)

If using AndroidAPS to open loop then make sure you have selected Virtual Pump in config builder.

## Клиент Nightscout

* Введите адрес вашего сайта в поле 'nightscout URL' (в виде https://imyavashegosaita.herokuapp.com или https://imyavashegosaita.azurewebsites.net) и пароль в поле 'API secret' (пароль из 12 символов, который записан в ваших переменных на heroku или azure). Это позволит считывать и записывать данные веб-сайту Nightscout и приложению AAPS. Если вы застряли на Цели 1, еще раз проверьте поля с адресом и паролем на наличие опечаток.
* **Убедитесь, что URL-адреса без /api/v1/ в конце.**
    
    ![URL-адрес клиента Nightscout](../images/NSClientURL.png)

* Опция 'Делать запись о старте приложения в Nightscout' заносит отметку в учетных записях портала лечения/назначений. Приложение не должно запускаться более одного раза в день; если делать это чаще, могут возникнуть проблемы.

* 'Параметры оповещений' позволяет выбрать, какие оповещения приложение будет использовать по умолчанию. Для активации оповещений нужно установить значения экстремально высоких, высоких, низких и экстремально низких порогов сигнализации в полях значений переменных на [heroku или azure](http://www.nightscout.info/wiki/welcome/website-features#customalarms). Они будут работать только тогда, когда у вас есть подключение к Nightscout и предназначены для родителей/опекунов; если мониторинг есть на вашем телефоне, используйте оповещения на нем (например, на xdrip+).
* 'Включить локальные трансляции' передаст данные с портала лечения/назначений на другие приложения на телефоне, например xdrip.
* 'Всегда использовать абсолютные значения базала" должно быть активировано, если вы хотите правильно использовать Autotune.
    
    ** Не активируйте при пользовании [помпой Insight pump ](https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Insight-Pump#settings-in-aaps)! ** Это приведет к неверным настройкам временной скорости базала TBR в помпе Insight.

## СМС-коммуникатор

This setting allows remote control of the app by texting instructions to the patients phone which the app will follow such as suspending loop, or bolusing. Further information is described in [SMS Commands](../Children/SMS-Commands.rst) but it will only display in Preferences if you have selected this option in the Config Builder.

## Другое

* Здесь вы можете установить значения по умолчанию для различных типов временных целей (таких как ожидаемый прием пищи и нагрузка). Когда вы выбираете временную цель, например, "Ожидаемый прием пищи", выпадающее окно автоматически заполнится продолжительностью и количеством на основе заданных здесь параметров. Более подробную информацию о применении временных целей см. [ Функции OpenAPS ](../Usage/Open-APS-features.md). 
* Вы можете установить стандартные значения для первичного заполнения инфузионной системы по умолчанию - и этот инсулин будет считаться израсходованным но не приниматься в расчет как активный инсулин IOB. В инструкции к инфузионному набору вы найдете объемы единиц для первичного заполнения в зависимости от длины иглы и длины трубки.
* Вы можете изменить вид домашнего экрана и следить за параметрами в установленном вами диапазоне. Обратите внимание, что это только способ отображения, который не влияет на ваши цели или расчеты.
* "Краткие имена табул" позволяет видеть больше вкладок на экране, например вкладка "Открыть APS" становится "OAPS", "Целевые значения" становится "Цели" и т. д.
* 'Местные оповещения' позволяют вам решить, следует ли принимать предупреждения и если да, то через какое время после отсутствия данных (старые данные) или когда помпа недоступна. Если вы часто получаете уведомления о недоступности помпы, включите BT Watchdog в расширенных настройках.

## Отбор данных

* 'Fabric Upload' будет отправлять разработчикам сообщения об ошибках и данные об использовании.