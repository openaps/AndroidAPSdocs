# Настройки

- **Откройте настройки** нажав меню в правом верхнем углу начального экрана.

  ```{image} ../images/Pref2020_Open2.png
  :alt:Открыть настройки
  ```

- Перейдите непосредственно к настройкам определенной вкладки (например, вкладки помпы), открыв эту вкладку и нажав на настройки конкретного модуля расширения.

  ```{image} ../images/Pref2020_OpenPlugin2.png
  :alt: Открыть параметры расширений
  ```

- **Подменю** можно раскрыть, нажав на стрелку слева от пункта меню.

  ```{image} ../images/Pref2020_Submenu2.png
  :alt: Открыть подменю
  ```

- С помощью **фильтра** наверху экрана настроек можно быстро перейти к нужной настройке. Просто начните вводить часть текста, который вы ищете.

  ```{image} ../images/Pref2021_Filter.png
  :alt:Фильтр настроек
  ```

```{contents}
:backlinks: entry
:depth: 2
```

(Preferences-general)=
## Общие настройки

**Единицы**

- В зависимости от предпочтений установите единицы mmol/l или mg/dl.

**Язык**

- Появился новый пункт для выбора - System default - язык телефона по умолчанию (рекомендуется выбрать этот вариант).

- Если вы хотите, чтобы в вашем AAPS использовался другой язык - выберите его из предложенных вариантов.

- Если вы используете в AAPS язык, отличный от системного, то иногда будете видеть кашу из языков. Это связано с тем, что иногда на телефонах с Android не удается переопределить используемый по умолчанию язык в приложении.

  ```{image} ../images/Pref2020_General.png
  :alt: Настройки > Общие
  ```

**Имя пациента**

- Может быть полезно, если необходимо отличать несколько различных настроек (например - у вас два ребенка с СД1).

(Preferences-protection)=
### Защита

(Preferences-master-password)=
#### Главный пароль

- Необходим для [экспорта настроек](../Usage/ExportImportSettings.md), т. к. они шифруются начиная с версии 2.7. **Защита биометрией (отпечаток пальца, распознавание лица) может не работать на некоторых телефонах OnePlus. Это известная проблема телефонов OnePlus.**

- Откройте настройки (трехточечное меню в правом верхнем углу начального экрана)

- Нажмите на галочку слева от заголовка "Общее"

- Нажмите "Главный пароль"

- Введите пароль, подтвердите пароль и нажмите кнопку Ok.

  ```{image} ../images/MasterPW.png
  :alt: Установить главный пароль
  ```

#### Защита настроек

- Защитите свои настройки с помощью пароля или биометрии (полезно в случае, когда [AAPS используется ребенком](../Children/Children.md)).

- Custom password should be used if you want to use master password just for securing [exported settings](../Usage/ExportImportSettings.md).

- Если вы собираетесь использовать пароль для настроек - нажмите на строчку "Пароль параметров", чтобы задать его. Принцип тот же, что описан [выше](Preferences-master-password).

  ```{image} ../images/Pref2020_Protection.png
  :alt: Защита
  ```

#### Защита приложения

- Если приложение защищено - вам потребуется вводить пароль приложения или использовать биометрию каждый раз при открытии приложения AAPS.
- Если введен неверный пароль - приложение будет немедленно закрыто, но все еще будет выполняться в фоне, если до этого было успешно открыто и запущено.

#### Защита болюсов

- Защита болюсов бывает полезна, если AAPS используется маленьким ребенком и вы [вводите болюсы через SMS](../Children/SMS-Commands.md).

- В примере ниже вы видите запрос на биометрическую защиту. Если биометрическое распознавание не работает, нажмите на пробел над запросом и введите главный пароль.

  ```{image} ../images/Pref2020_PW.png
  :alt: Биометрическая защита
  ```

(Preferences-skin)=
#### Тема оформления

- Можно выбрать одну из четырех тем оформления:

  ```{image} ../images/Pref2021_SkinWExample.png
  :alt: Выбор оформления + примеры
  ```

- 'Тема оформления в низком разрешении' содержит укороченные подписи и не показывает возраст сенсора, катетера /уровень инсулина, чтобы освободить больше места на экране с низким разрешением.

- Различия других тем зависят от ориентации дисплея.

##### Portrait orientation

- Темы **Исходная тема оформления** и **Кнопки всегда в нижней части экрана** идентичны
- Тема **Большой Экран** имеет увеличенные размеры всех элементов по сравнению с другими темами

##### Альбомная ориентация

- При использовании **Исходной темы оформления** и темы **Большой экран**придется прокручивать экран вниз, чтобы увидеть кнопки в нижней части экрана

- Тема **Большой Экран** имеет увеличенные размеры всех элементов по сравнению с другими темами

  ```{image} ../images/Screenshots_Skins.png
  :alt: Темы в зависимости от ориентации экрана телефона
  ```

(Preferences-overview)=
## Общие замечания

- В разделе Начало можно определить параметры главного экрана.

  ```{image} ../images/Pref2020_OverviewII.png
  :alt: Preferences > Overview
  ```

### Не отключать экран

- Useful while giving a presentation.
- При этом потребляется много энергии, поэтому разумно держать телефон подключенным к зарядному устройству.

(Preferences-buttons)=
### Кнопки

- Определите, какие кнопки будут видны в нижней части главного экрана.

- Для простоты ввода при помощи величины приращения можно задать параметры трех кнопок в диалоговых окнах инсулина и углеводов.

  ```{image} ../images/Pref2020_OV_Buttons.png
  :alt: Настройки > Кнопки
  ```

(Preferences-quick-wizard)=
### Мастер быстрых настроек

- If you have a frequent snack or meal, you can use the quick wizard button to easily enter amount of carbs and set calculation basics.

- При настройке вы можете определить время, в течение которого кнопка будет видна на главном экране - только одна кнопка в определенный период.

- При нажатии на кнопку быстрого мастера AAPS будет вычислять и предлагать болюс на углеводы, основанный на ваших текущих коэффициентах (с учетом текущего значения ГК, активного инсулина и т. п.).

- Это предложение должно быть подтверждено перед подачей инсулина.

  ```{image} ../images/Pref2020_OV_QuickWizard.png
  :alt: Настройки: > Кнопка Быстрого Мастера
  ```

(Preferences-default-temp-targets)=
### Временные цели по умолчанию

- [Временные цели(TT)](../Usage/temptarget.md) позволяют вам задавать целевое значение ГК на определенный период времени.

- При помощи временных целей TT, заданных по умолчанию, можно легко установить цель при нагрузках, предстоящем питании и т. п.

- Выполните долгое нажатие в правом верхнем углу на главном экране или используйте оранжевую кнопку «Углеводы» внизу.

  ```{image} ../images/Pref2020_OV_DefaultTT.png
  :alt: Настройки > Временные цели по умолчанию
  ```

### Заполнить стандартное количество инсулина

- Если вы хотите заполнить инфузионный набор или катетер при помощи AAPS, это можно сделать через вкладку [Действия](Screenshots-action-tab).
- В этом диалоге можно задать предустановленные значения.

(Preferences-range-for-visualization)=
### Диапазон визуализации

- Определите, какая часть графика на главном экране будет заполнена зеленым фоном в качестве целевого диапазона.

  ```{image} ../images/Pref2020_OV_Range2.png
  :alt: Настройки > Диапазон визуализации
  ```

### сокращенные имена табул

- Видеть больше вкладок на экране.

- Например, вкладка 'Помощник болюса OpenAPS AMA' становится 'OAPS', 'ЦЕЛЕВЫЕ ЗНАЧЕНИЯ ГК' становится 'ЦЕЛИ' и т. д.

  ```{image} ../images/Pref2020_OV_Tabs.png
  :alt: Настройки > Вкладки
  ```

### Показывать поле примечаний в диалогах терапии

- Дает возможность добавить короткие примечания к терапии (мастер болюса, углеводы, инсулин...)

  ```{image} ../images/Pref2020_OV_Notes.png
  :alt: Настройки > Заметки в диалогах по терапии
  ```

(Preferences-status-lights)=
### Индикаторы состояния

- Индикаторы состояния сообщают:

  - сколько времени отработал сенсор
  - Уровень заряда батареи сенсора для некоторых умных ридеров (подробнее см. на странице [снимки экрана](Screenshots-sensor-level-battery)).
  - сколько времени прошло с момента установки резервуара
  - об уровне заполнения резервуара (в единицах)
  - сколько времени прошло с момента установки канюли
  - Батарея помпы работает... (Возраст батареи помпы)
  - Уровень заряда батареи помпы (%)

- Если превышено пороговое значение, данные показываются желтым цветом.

- Если превышено критическое пороговое значение, значения будут показаны красным цветом.

- Настройки индикатора состояния должны были быть выполнены в настройках Nightscout в версиях AAPS до 2.7.

  ```{image} ../images/Pref2020_OV_StatusLights2.png
  :alt: Preferences > Status Lights
  ```

(Preferences-advanced-settings-overview)=
### Advanced Settings (Overview)

```{image} ../images/Pref2021_OV_Adv.png
:alt: Preferences > Status Lights
```

#### Подать эту часть рекомендации мастера болюса

- Общая настройка для подачи только части инсулина, рекомендованного мастером болюса.
- При использовании мастера болюса подается только заданный процент (должен быть от 10 до 100) от вычисленного.
- Этот процент показан в мастере болюса.

#### Мастер болюса

- Если запустить [Мастер Болюса](Screenshots-bolus-wizard) при гликемии выше 10 ммоль (180 мг/дл), то будет предложен болюс на коррекцию.

- Если болюс на коррекцию принят, **углеводы** не записываются.

- Когда ГК в хорошем диапазоне для начала приема пищи, подается сигнал оповещения.

- В этом случае выполняем повторный вход в [Мастер (Калькулятор) Болюса ](Screenshots-bolus-wizard) и вводим величину углеводов, которые собираемся съесть.

  ```{image} ../images/Home2021_BolusWizard_CorrectionOffer.png
  :alt:Сообщение мастера болюса
  ```

(Preferences-superbolus)=
#### Суперболюс

- Опция для включения суперболюса в мастере.
- [Суперболюс](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/) - это идея "заимствовать" некоторое количество инсулина от базальной скорости следующих двух часов, чтобы предотвратить резкие пики.

## Безопасность терапии

### Тип пациента

- Ограничения безопасности устанавливаются на основе возраста, который вы выбираете в этом параметре.
- If you start hitting these hard limits (like max bolus) it's time to move one step up.
- Выбирать возраст выше, чем реальный, не следует, потому что может привести к передозировке при введении ошибочного значения в диалоге инсулина (например, если пропущен десятичный разделитель - точка или запятая).
- Если вы хотите знать фактические величины жестких ограничений безопасности в коде, перейдите к функции алгоритма на [этой странице](../Usage/Open-APS-features.md).

### Максимально разрешённый болюс \[ед.\]

- Максимальное количество болюсного инсулина, разово разрешаемое в AAPS.
- Эта настройка существует как ограничение безопасности для предотвращения подачи чрезмерного болюса из-за случайного ввода или ошибки пользователя.
- Рекомендуется установить это значение как разумный предел, приблизительно соответствующий максимальному количеству болюсного инсулина, который вы когда-либо можете подать на еду или на коррекцию.
- Это ограничение также налагается на результаты калькулятора болюса.

### Макс разрешенные углеводы [г.]

- Это максимальное количество углеводов, на которое калькулятор болюса AAPS может подать дозу инсулина.
- Эта настройка существует как ограничение безопасности для предотвращения подачи чрезмерного болюса из-за случайного ввода или ошибки пользователя.
- Рекомендуется установить это значение как разумный предел, приблизительно соответствующий максимальному количеству углеводов, которые вам когда-либо понадобится на еду.

## Замкнутый цикл

(Preferences-aps-mode)=
### Режим APS

- Переключение между открытым и замкнутым циклом, а также приостановкой на низких ГК (LGS)
- Работа в **Открытом цикле** означает, что предложения временного базала TBR делаются на основе ваших данных и отображаются в виде уведомления. После подтверждения вручную, команда о дозировке временного базала передается на помпу. Only if you use virtual pump you have to enter it manually.
- **Closed looping** means TBR suggestions are automatically sent to your pump without confirmation or input from you.
- **Приостановка помпы на низкой ГК** похожа на работу в замкнутом цикле, но переопределяет параметр макс активного инсулина maxIOB на ноль. Это значит, что при падении гликемии базал будет снижен, но когда гликемия будет расти, он повысится только при отрицательном значении активного инсулина IOB (например, после предыдущей остановки подачи инсулина из-за низкой гликемии).

(Preferences-minimal-request-change)=
### Минимальный запрос на изменения \[%\]

- При открытогм цикле вы будете получать уведомления каждый раз, когда AAPS рекомендует скорректировать базальную скорость.
- Чтобы уменьшить число уведомлений, можно либо использовать более широкий диапазон целевой ГК, либо увеличить процент минимального запроса на изменения.
- Он определяет относительное изменение, необходимое для активации уведомления.

(Preferences-advanced-meal-assist-ama-or-super-micro-bolus-smb)=
## Улучшенный ассистент приема пищи (AMA) или Супер Микро Болюс (SMB)

В зависимости от настроек в [конфигураторе](../Configuration/Config-Builder.md) можно выбрать между двумя алгоритмами:

- [Advanced meal assist (OpenAPS AMA)](Open-APS-features-advanced-meal-assist-ama) - state of the algorithm in 2017
- [Super Micro Bolus (OpenAPS SMB)](Open-APS-features-super-micro-bolus-smb) - most recent algorithm for advanced users

### OpenAPS AMA settings

- Allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably.
- More details about the settings and Autosens can be found in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

#### Максимальное значение ед./ч для скорости временного базала

- Exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate.
- The value is measured in units per hour (U/h).
- It is advised to set this to something sensible. Хорошая рекомендация – взять **наивысшую скорость базала** в вашем профиле и **умножить ее на 4**.
- For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 4 to get a value of 2 U/h.
- See also [detailed feature description](Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal).

#### Maximum basal IOB OpenAPS can deliver \[U\]

- Количество базального инсулина (в единицах) которому позволено накопиться в вашем организме в дополнение к нормальному базальному профилю.
- По достижении этой величины AAPS перестает подавать дополнительный базальный инсулин до тех пор, пока ваш активный базальный Инсулин (IOB) снова не вернется в этот диапазон.
- This value **does not consider bolus IOB**, only basal.
- Эта величина вычисляется и отслеживается независимо от скорости вашего обычного базала. Учитывается только дополнительный базал, который свыше обычного.

Когда вы начинаете работать с алгоритмом ИПЖ, **рекомендуется установить максимум активного базальный инсулина IOB на 0 ** на время привыкания к системе. Такая настройка запрещает AAPS давать дополнительный базальный инсулин. В этот период алгоритм AAPS в состоянии ограничить или отключить базу инсулина для предотвращения гипогликемии. Это важный шаг для того чтобы:

- Безопасно привыкнуть к системе AAPS и тому, как она работает.
- Совершенствовать свой базальный профиль и лучше настроить фактор чувствительности к инсулину ISF.
- Увидеть, как AAPS ограничивает ваш базальный инсулин, чтобы предотвратить гипокликемию.

Когда вы почувствуете себя комфортно, то можете позволить системе начать давать вам дополнительный базал, повышая макс. значение активного базального инсулина IOB. Хорошая рекомендация – взять **наивысшую скорость базала** в вашем профиле и **умножить ее на 3**. For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 3 to get a value of 1.5 U/h.

- You can start conservatively with this value and increase it slowly over time.
- These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

**Note: As a safety feature, Max Basal IOB is hard-limited to 7u.**

#### Autosens

- [Autosens](Open-APS-features-autosens) looks at blood glucose deviations (positive/negative/neutral).
- It will try and figure out how sensitive/resistant you are based on these deviations and adjust basal rate and ISF based on these deviations.
- If you select "Autosens adjust target, too" the algorithm will also modify your glucose target.

#### Advanced settings (OpenAPS AMA)

- Normally you do not have to change the settings in this dialogue!
- If you want to change them anyway make sure to read about details in [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) and to understand what you are doing.

(Preferences-openaps-smb-settings)=
### OpenAPS SMB settings

- In contrast to AMA, [SMB](Open-APS-features-super-micro-bolus-smb) does not use temporary basal rates to control glucose levels, but mainly small super micro boluses.

- You must have started [objective 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) to use SMB.

- The first three settings are explained [above](Preferences-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal).

- Details on the different enable options are described in [OpenAPS feature section](Open-APS-features-enable-smb).

- *How frequently SMBs will be given in min* is a restriction for SMB to be delivered only every 4 min by default. This value prevents the system from issuing SMB too often (for example in case of a temp target being set). You should not change this setting unless you know exactly about consequences.

- If 'Sensitivity raises target' or 'Resistance lowers target' is enabled [Autosens](Open-APS-features-autosens) will modify your glucose target according to your blood glucose deviations.

- If target is modified it will be displayed with a green background on your home screen.

  ```{image} ../images/Home2020_DynamicTargetAdjustment.png
  :alt: Target modified by autosens
  ```

(Preferences-carb-required-notification)=
#### Carb required notification

- This feature is only available if SMB algorithm is selected.

- Eating of additional carbs will be suggested when the reference design detects that it requires carbs.

- In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.

- Additionally the required carbs will be displayed in the COB section on your home screen.

- A threshold can be defined - minimum amount of carbs needed to trigger a notification.

- При желании уведомления об углеводах могут быть переданы в Nightscout. В этом случае сработают стандартные настройки оповещения NS.

  ```{image} ../images/Pref2020_CarbsRequired.png
  :alt: Display carbs required on home screen
  ```

#### Advanced settings (OpenAPS SMB)

- Normally you do not have to change the settings in this dialogue!
- If you want to change them anyway make sure to read about details in [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) and to understand what you are doing.

## Настройки усваиваемости

```{image} ../images/Pref2020_Absorption.png
:alt: Absorption settings
```

### min_5m_carbimpact

- The algorithm uses BGI (blood glucose impact) to determine when carbs are absorbed.

- The value is only used during gaps in CGM readings or when physical activity “uses up” all the blood glucose rise that would otherwise cause AAPS to decay COB.

- At times when carb absorption can’t be dynamically worked out based on your blood's reactions it inserts a default decay to your carbs. Этот параметр не приводит к отказам.

- To put it simply: The algorithm "knows" how your BGs *should* behave when affected by the current dose of insulin etc.

- Whenever there is a positive deviation from the expected behaviour, some carbs are absorbed/decayed. Big change=many carbs etc.

- The min_5m_carbimpact does define the default carb absorption impact per 5 minutes. For more details see [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact).

- Standard value for AMA is 5, for SMB it's 8.

- The COB graph on the home screen indicates when min_5m_impact is being used by putting an orange circle at the top.

  ```{image} ../images/Pref2020_min_5m_carbimpact.png
  :alt: COB graph
  ```

### Maximum meal absorption time

- If you often eat high fat or protein meals you will need to increase your meal absorption time.

### Advanced settings - autosens ratio

- Define min. and max. [autosens](Open-APS-features-autosens) ratio.
- Normally standard values (max. 1.2 and min. 0.7) should not be changed.

## Pump settings

The options here will vary depending on which pump driver you have selected in [Config Builder](Config-Builder-pump).  Pair and set your pump up according to the pump related instructions:

- [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md)
- [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump.md)
- [Помпа Accu Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu Chek Insight Pump](../Configuration/Accu-Chek-Insight-Pump.md)
- [Medtronic Pump](../Configuration/MedtronicPump.md)

If using AAPS to open loop then make sure you have selected Virtual Pump in config builder.

(Preferences-nsclient)=
## клиент NS

```{image} ../images/Pref2020_NSClient.png
:alt: NSClient
```

- Set your *Nightscout URL* (i.e. <https://yourwebsitename.herokuapp.com>) and the *API secret* (a 12 character password recorded in your Heroku variables).
- This enables data to be read and written between both the Nightscout website and AAPS.
- Double check for typos here if you are stuck in Objective 1.
- **Make sure that the URL is WITHOUT /api/v1/ at the end.**
- *Log app start to NS* will record a note in your Nightscout careportal entries every time the app is started.  The app should not be needing to start more than once a day; more frequently than this suggests a problem (i.e. battery optimization not disabled for AAPS).
- If activated changes in [local profile](Config-Builder-local-profile) are uploaded to your Nightscout site.

### Connection settings

```{image} ../images/ConfBuild_ConnectionSettings.png
:alt: NSClient connection settings
```

- Restrict Nightscout upload to Wi-Fi only or even to certain Wi-Fi SSIDs.
- If you want to use only a specific WiFi network you can enter its WiFi SSID.
- Multiple SSIDs can be separated by semicolon.
- To delete all SSIDs enter a blank space in the field.

### Alarm options

- Alarm options allows you to select which default Nightscout alarms to use through the app.
- For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [Heroku variables](https://nightscout.github.io/nightscout/setup_variables/#alarms).
- They will only work whilst you have a connection to Nightscout and are intended for parent/carers.
- If you have the CGM source on your phone (i.e. xDrip+ or BYODA \[Build your own dexcom app\]) then use those alarms instead.

(Preferences-advanced-settings-nsclient)=
### Advanced settings (NSClient)

```{image} ../images/Pref2020_NSClientAdv.png
:alt: NS Client advanced settings
```

- Most options in advanced settings are self-explanatory.

- *Enable local broadcasts* will share your data to other apps on the phone such as xDrip+.

  - You need to [go through AAPS](Config-Builder-bg-source) and enable local broadcast in AAPS to use xDrip+ alarms.

- *Always use basal absolute values* must be activated if you want to use Autotune properly. See [OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/understanding-autotune.html) for more details on Autotune.

## СМС-коммуникатор

- Options will only be displayed if SMS communicator is selected in [Config Builder](Config-Builder-sms-communicator).
- This setting allows remote control of the app by texting instructions to the patient's phone which the app will follow such as suspending loop, or bolusing.
- Further information is described in [SMS Commands](../Children/SMS-Commands.md).
- Additional safety is obtained through use of an authenticator app and additional PIN at token end.

## Автоматизация

Select which location service shall be used:

- Use passive location: AAPS only takes locations if other apps are requesting it
- Use network location: Location of your Wi-Fi
- Use GPS location (Attention! Может привести к чрезмерной разрядке аккумулятора!)

## Local alerts

```{image} ../images/Pref2020_LocalAlerts.png
:alt: Local alerts
```

- Settings should be self-explanatory.

## Data choices

```{image} ../images/Pref2020_DataChoice.png
:alt: Data choices
```

- You can help develop AAPS further by sending crash reports to the developers.

## Maintenance settings

```{image} ../images/Pref2020_Maintenance.png
:alt: Maintenance settings
```

- Standard recipient of logs is <logs@androidaps.org>.
- If you select *Encrypt exported settings* these are encrypted with your [master password](Preferences-master-password). In this case master password has to be entered each time settings are exported or imported.

## Open Humans

- You can help the community by donating your data to research projects! Details are described on the [Open Humans page](../Configuration/OpenHumans.md).

- In Preferences you can define when data shall be uploaded

  - only if connected to WiFi
  - only if charging
