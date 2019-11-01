# Настройки

Откройте настройки, нажав три точки меню в верхней правой части главного экрана:

![How to open Preferences](../images/PreferencesOpen.png)

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

![Preferences - Overview - Advanced Settings](../images/PreferencesOverviewAdvanced_V2_5.png)

* Общая настройка для подачи только части инсулина, рекомендованного мастером болюса. При использовании мастера болюса подается только заданный процент (должен быть от 10 до 100) от вычисленного. Этот процент показан в мастере болюса.
    
    ![Bolus Wizard 80%](../images/BolusWizardPartDelivery.png)

* Опция включения [ суперболюса ](../Getting-Started/Screenshots#section-a) в мастере болюса.

* Индикаторы состояния дают визуальное предупреждение о низком уровне резервуара и заряда батареи, а также о просроченном времени смены места катетера помпы. Расширенная версия показывает истекшее время / процент заряда батареи.
    
    ![Status lights - detail](../images/StatusLights_V2_5.png)
    
    Параметры индикаторов состояния должны быть заданы в параметрах Nightscout. Задайте следующие параметры:
    
    * Возраст канюли: CAGE_WARN и CAGE_URGENT (стандартно 48 и 72 часа)
    * Возраст инсулина (резервуар): IAGE_WARN и IAGE_URGENT (стандартно 72 и 96 часов)
    * Возраст сенсора: SAGE_WARN и SAGE_URGENT (стандартно 164 и 166 часов)
    * Возраст батареи: BAGE_WARN и BAGE_URGENT (стандартно 240 и 360 часов)

* Порог для уровня резервуара и критического уровня резервуара.

* Порог для уровня батареи и критического уровня батареи.

## Безопасность назначений

### Max allowed bolus [U]

This is the maximum amount of bolus insulin that AAPS is allowed to deliver. This setting exists as a safety limit to prevent the delivery of a massive bolus due to accidental input or user error. It is recommended to set this to a sensible amount that corresponds roughly to the maximum amount of bolus insulin that you are ever likely to need for a meal or correction dose. This restriction is also applied to the results of the Bolus Calculator.

### Max allowed carbs [g]

This is the maximum amount of carbs that AAPS bolus calculator is allowed to dose for. This setting exists as a safety limit to prevent the delivery of a massive bolus due to accidental input or user error. It is recommended to set this to a sensible amount that corresponds roughly to the maximum amount of carbs that you are ever likely to need for a meal.

## Замкнутый цикл

You can toggle between open and closed looping here. Open looping means TBR suggestions are made based on your data and appear as a notification, but you must manually choose to accept them and manually enter them into your pump. Closed looping means TBR suggestions are automatically sent to your pump without confirmation or input from you. The homescreen will display in the top left corner whether you are open or closed looping, and pressing and holding this homescreen button will also allow you to toggle between the two.

## Помощник болюса OpenAPS AMA

OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. Turn it on in the Config tab to view the safety settings here, you will need to have completed Objective 7 to use this feature. You can read more about the settings and [Autosens in the OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max U/hr a Temp Basal can be set to

This setting exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate. The value is measured in units per hour (u/hr). Рекомендуется установить это значение на разумный предел. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 4 to get a value of 2u/hr.

### Maximum basal IOB OpenAPS can deliver [U]

Amount of additional basal insulin (in units) allowed to accumulate in your body, on top of your normal basal profile. Once this value is reached, AAPS will stop giving additional basal insulin until your basal Insulin on Board (IOB) has decayed to within this range again.

* This value does not consider bolus IOB, only basal.
* This value is calculated and monitored independently of your normal basal rate. It is only the additional basal insulin on top of that normal rate that is considered.
* This value is measured in insulin units (u).

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. This prevents AAPS from giving any additional basal insulin at all. During this time AAPS will still be able to limit or turn off your basal insulin to help prevent hypoglycaemia.

This is an important step in order to:

* Have a period of time to safely get used to the AAPS system and monitor how it works.
* Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
* See how AAPS limits your basal insulin to prevent hypoglycaemia.

When you feel comfortable, you can allow the system to start giving you additional basal insulin, by raising the Max Basal IOB value. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 3 to get a value of 1.5u.

* You can start conservatively with this value and increase it slowly over time. 
* These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

*Note: As a safety feature, Max Basal IOB is hard-limited to 7u.*

## Настройки усваиваемости

If you have selected to use AMA Autosens then you will be able to enter your maximum meal absorption time and how frequently you want autosense to refresh. If you often eat high fat or protein meals you will need to increase your meal absorption time.

## Настройки помпы

The options here will vary depending on which pump driver you have selected in 'Config Builder'. Pair and set your pump up according to the pump related instructions:

* [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) 
* [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump.md) 
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

This setting allows remote control of the app by texting instructions to the patients phone which the app will follow such as suspending loop, or bolusing. Further information is described in [SMS Commands](../Usage/SMS-Commands.md) but it will only display in Preferences if you have selected this option in the Config Builder.

## Другое

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Отбор данных

* 'Fabric Upload' will send crash reporting and feature usage data to the developers.