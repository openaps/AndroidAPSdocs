# Мастер установки AAPS

When you first start **AAPS** you are guided by the "**Setup Wizard**", to quickly setup all the basic configurations of your app in one go. **Setup Wizard** guides you, in order to avoid forgetting something crucial. For example, the **permission settings** are fundamental for setting up **AAPS** correctly.

However, it's not mandatory to get everything completely configured in the first run of using the **Setup Wizard** and you can easily exit the Wizard and come back to it later. There are three routes available after the **Setup Wizard** to further optimise/change the configuration. О них расскажем в следующем разделе. Итак, если пропустить некоторые этапы в мастере установки, их можно легко выполнить позже.

During, and directly after using the **Setup Wizard** you may not notice any significant observable changes in **AAPS**. To enable your **AAPS** loop, you have to follow the **Objectives** to enable feature after feature. You will start **Objective 1** at the end of the Setup Wizard. You are the master of **AAPS**, not the other way around.

```{admonition} Preview Objectives
:class: note
If you are keen to know the structure of the objectives, please read [Completing the objectives](../SettingUpAaps/CompletingTheObjectives.md) but then come back here to run the Setup Wizard first.

```

From previous experience, we are aware that new starters often put themselves under pressure to setup **AAPS** as fast as possible, which can lead to frustration as it is a big learning curve.

So, please take your time in configuring your loop, the benefits of a well-running **AAPS** loop are huge.

```{admonition} Ask for Help
:class: note
If there is an error in the documentation or you have a better idea for how something can be explained, you can ask for help from the community as explained at [Connect with other users](../GettingHelp/WhereCanIGetHelp.md).
```
## Пошаговое руководство к Мастеру установки AAPS
### Приветственное сообщение

Это просто приветственное сообщение, которое можно пропустить, нажав кнопку "ДАЛЕЕ":

![изображение](../images/setup-wizard/Screenshot_20231202_125636.png)

### Лицензионное соглашение

In the end user license agreement there is important information about the legal aspects of using **AAPS**. Внимательно изучите его.

If you don't understand, or can't agree to the end user license agreement please don't use **AAPS** at all!

Если вы понимаете и соглашаетесь, нажмите кнопку "I UNDERSTAND AND AGREE" (я принимаю и соглашаюсь) и следуйте подсказкам Мастера установки:

![изображение](../images/setup-wizard/Screenshot_20231202_125650.png)

### Необходимые разрешения

**AAPS** needs some requirements to operate correctly.

In the following screens you are asked several questions you have to agree to, to get **AAPS** working. Мастер сам объясняет, почему он запрашивает соответствующие разрешения или настройки.

На этом экране мы даем дополнительную справочную информацию, переводим с технического языка на общий или объясняем причину.

Нажмите кнопку «ДАЛЕЕ»:

![изображение](../images/setup-wizard/Screenshot_20231202_125709.png)

Расход батареи на смартфонах все еще является сложной задачей, поскольку производительность батарей по-прежнему весьма ограничена. Операционная система Android довольно неохотно разрешает приложениям запускатьсся и расходоавать время работы процессора, а, следовательно, и заряд батареи.

However, **AAPS** needs to run regularly, _e.g._ to receive the glucose readings every few minutes and then apply the algorithm to decide how to deal with your glucose levels, based on your specifications. Поэтому Android должен разрешить эти действия без препятствий.

Это делается при помощи подтверждения настроек.

Нажмите кнопку "ASK FOR PERMISSION"(запросить разрешение):

![изображение](../images/setup-wizard/Screenshot_20231202_125721.png)

Выберите "Разрешить:

![изображение](../images/setup-wizard/Screenshot_20231202_125750.png)

Android требует специального разрешения для уведомлений от приложений.

While it is a good feature to disable notifications _e.g._ from  social media apps, it is essential that you allow **AAPS** to send you notifications.

Нажмите кнопку "ASK FOR PERMISSION"(запросить разрешение):

![изображение](../images/setup-wizard/Screenshot_20231202_125813.png)


Выберите приложение "AAPS":

![изображение](../images/setup-wizard/Screenshot_20231202_125833.png)

Включите "Разрешить поверх других приложений", сдвинув переключатель вправо:

![изображение](../images/setup-wizard/Screenshot_20231202_125843.png)

Так выглядит переключатель во включенном положении:

![изображение](../images/setup-wizard/Screenshot_20231202_125851.png)

Android увязывает использование Bluetooth со службой определения местоположения. Возможно, вы замечали это у других приложений. Обычно, если нужен доступ к Bluetooth, требуется разрешение на определение местоположения.

**AAPS** uses bluetooth to communicate with your CGM and insulin pump if they are directly controlled by **AAPS** and not another app which is used by **AAPS**. Детали могут различаться в зависимости от настроек.

Нажмите кнопку "ASK FOR PERMISSION"(запросить разрешение):

![изображение](../images/setup-wizard/Screenshot_20231202_125924.png)

Это важно. Otherwise **AAPS** can not work properly at all.

Выберите "При использовании приложения":

![изображение](../images/setup-wizard/Screenshot_20231202_125939.png)

Нажмите кнопку «ДАЛЕЕ»:

![изображение](../images/setup-wizard/Screenshot_20231202_130002.png)

**AAPS** needs to log information to the permanent storage of your smartphone. Постоянная память означает, что информация будет доступна даже после перезагрузки телефона. Остальная информация теряется, поскольку она не сохраняется в постоянной памяти.

Нажмите кнопку "ASK FOR PERMISSION"(запросить разрешение):

![изображение](../images/setup-wizard/Screenshot_20231202_130012.png)

Нажмите "Разрешить":

![изображение](../images/setup-wizard/Screenshot_20231202_130022.png)

Сообщается, что после внесения этого изменения необходимо перезагрузить телефон.

Please **don't stop the Setup Wizard now**. Перезагрузить телефон можно после завершения мастера установки.

Нажмите кнопку "OK", затем "ДАЛЕЕ":

![изображение](../images/setup-wizard/Screenshot_20231202_130031.png)


### Главный пароль

As the configuration of **AAPS** contains some sensitive data (_e.g._ API_KEY for accessing your Nightscout server) it is encrypted by a password you can set here.

The second sentence is very important, please **DO NOT LOSE YOUR MASTER PASSWORD**. Please make a note of it _e.g._ on Google Drive. Google Drive - хорошее место, так как он создан специально для подобных целей. Телефон или ПК могут выйти из строя, оставив нас без актуальной копии. If you forget your Master Password, it can be difficult to recover your profile configuration and progress through the **Objectives** at a later date.

После двукратного ввода пароля нажмите кнопку "Далее":

![изображение](../images/setup-wizard/Screenshot_20231202_130122.png)


### Загрузка отчета для разработчиков в Fabric

Здесь вы можете настроить автоматизированную службу отчетов о пользовании приложением и сбоях.

Это не обязательно, но рекомендуется.

Это помогает разработчикам лучше понимать как пользователи работают с приложением и информирует о происходящих сбоях.

Они получают:

1. Информацию о сбоях в работе приложения, о которых им может быть неизвестно, если у них все работает должным образом
1. В отправляемых данных (информация о сбоях) содержится информация о обстоятельствах, при которых произошел сбой, а также о конфигурации приложения.

Что помогает разработчикам улучшить приложение.

Поэтому включите отправку данных разработчикам, сдвинув переключатель вправо:


![изображение](../images/setup-wizard/Screenshot_20231202_130136.png)

Кроме того, вы можете определить что разработчики могут связаться с вами только по неотложным проблемам:

![изображение](../images/setup-wizard/Screenshot_20231202_130147.png)

Заполнив "контактную информацию" нажмите кнопку "ОК". Контактная информация может быть учетная запись в Facebook, на Discord, ... Просто информация для связи с вами наилучшим способом:

![изображение](../images/setup-wizard/Screenshot_20231202_135748.png)

Нажмите кнопку «ДАЛЕЕ»:

![изображение](../images/setup-wizard/Screenshot_20231202_135807.png)

### Units (mg/dL <-> mmol/L)

Выберите, в каких единицах хотите видеть значения гликемии -- в мг/дл или ммоль/л, затем нажмите кнопку "ДАЛЕЕ":

![изображение](../images/setup-wizard/Screenshot_20231202_135830.png)

### Параметры экрана

 Здесь выбираем диапазон значений, в котором хотим видеть свою гликемию. Его можно оставить заданным по умолчанию и отредактировать в дальнейшем.

Эти значения влияют только на графическое отображение ГК и больше ни на что.

Your glucose target _e.g._ is configured separately in your profile.

Величины для анализа TIR (времени в целевом диапазоне) конфигурируются отдельно при создании отчетов на сервере отчетов.

Нажмите кнопку «ДАЛЕЕ»:

![изображение](../images/setup-wizard/Screenshot_20231202_135853.png)

(SetupWizard-synchronization-with-the-reporting-server-and-more)=
### Синхронизация с сервером отчетов и другие вопросы

Здесь вы настраиваете загрузку данных на сервер отчетов.

Здесь также можно выполнить другие настройки, но для первого запуска мы сосредоточимся на сервере отчетов.

Если вам неудобно заниматься этим в данный момент, пропустите их. Их можно сделать потом.

If you select an item here on the left tick box, on the right you can then ticking the visibility (eye) box, which will place this plugin in the upper menu on the **AAPS** home screen. Если на этом этапе вы настраиваете сервер отчетов, для него тоже выбирайте видимость.

В этом примере мы выберем Nightscout в качестве сервера отчетов и настроим его.

```{admonition}  Make sure to choose the correct **NSClient** version for your needs! 
:class: Note

Click [here](#version3200) for the release notes of **AAPS** 3.2.0.0 which explain the differences between the top option **NSClient** (this is "v1", although it is not explicitly labelled) and the second option, **NSClient v3**.

Nightscout users should choose **NSClient v3**, unless you want to monitor or send remote treatments (_e.g._ as a parent or caregiver using **AAPS** for a child) through Nightscout, in which case, choose the first option "**NSClient**" until further notice. 
```
Для Tidepool проще, так как требуются только персональные данные для входа.

After making your selection, please press the cogwheel button next to the item you selected :

![изображение](../images/setup-wizard/Screenshot_20231202_140916.png)

Здесь вы настраиваете сервер отчетов Nightscout.

Нажмите на "URL-адрес Nightscout":

![изображение](../images/setup-wizard/Screenshot_20231202_140952.png)

Введите адрес вашего сайта URL Nightscout. Это просто URL-адрес, который вы настроили самостоятельно, или он был предоставлен поставщиком услуг Nightscout.

Нажмите кнопку "OK":

![изображение](../images/setup-wizard/Screenshot_20231202_141051.png)

Введите атрибут защиты доступа к Nightscout. Это код доступа для Nightscout, настроенный вами. Без него доступа не будет.

If you don't have it at the moment please check the documentation for setting up the reporting server in the **AAPS** documentation.

After filling in the "**NS access token**" and clicking "OK", please click on the "Synchronization" button:

![изображение](../images/setup-wizard/Screenshot_20231202_141131.png)

Выберите "Передать данные в NS", если вы уже настроили Nightscout на предыдущих шагах мастера установки.

If you have stored profiles on Nightscout and want to download them to **AAPS**, enable "Receive profile store":

![изображение](../images/setup-wizard/Screenshot_20231202_141219.png)


Вернитесь на предыдущий экран и выберите "Опции оповещения":

![изображение](../images/setup-wizard/Screenshot_20231202_141310.png)

Пока что оставьте переключатели неактивными. Мы зашли на этот экран только чтобы показать параметры, которые можно настроить в будущем. В настоящий момент такой необходимости нет.

Вернитесь на предыдущий экран и выберите "Параметры подключения".

Здесь вы можете настроить способ передачи данных на сервер отчетов.

Caregivers must enable "use cellular connection" as otherwise the smartphone which serves the dependant/child can not upload data outside of WiFi range _e.g._ on the way to school.

Other **AAPS** users can disable the tranfer via cellular connection if they want to save data or battery.

Если сомневаетесь, просто оставьте все включенным.

Вернитесь на предыдущий экран и выберите "Дополнительные настройки".

![изображение](../images/setup-wizard/Screenshot_20231202_141326.png)

Включите "Передать в NS запись о начале работы приложения", если хотите получить эту информацию на сервере отчетов. Это может помочь вам удаленно узнать, было ли перезапущено приложение и когда именно, особенно если вы лицо, осуществляющее уход.

It might be interesting to see if **AAPS** is correctly configured now, but later it is usually not that important to be able to see **AAPS** stopping or starting in Nightscout.

Включите "Создавать оповещение на основе названия ошибки" и "Создавать оповещения из напоминаний о необходимых углеводах".

Оставьте "Замедлить выгрузку" невключенным. Эта функция может пригодиться только в необычных обстоятельствах, если, например, на сервер Nightscout необходимо передать много информации, а Nightscout медленно обрабатывает данные.

Go back twice, to the list of plugins and select "NEXT" to go to the next screen:

![изображение](../images/setup-wizard/Screenshot_20231202_141351.png)

### Patient name

Here you can setup your name in **AAPS**.

Можете выбрать любое. Это нужно, чтобы различать пользователей.

Для просты, введите имя и фамилию.

Нажмите "ДАЛЕЕ" и перейдите к следующему экрану.

![изображение](../images/setup-wizard/Screenshot_20231202_141445.png)

### Тип пациента

Here you select your "Patient type" which is important, as the **AAPS** software has different limits, depending on the age of the patient. Это важно по соображениям безопасности и как мера предосторожности.

Here is where you also configure the **maximum allowed bolus** for a meal. То есть, самый большой болюс, который можно ввести на свои обычные блюда. Это мера безопасности, которая помогает избежать случайной передозировки, когда вводится болюс на еду.

Второе ограничение аналогично по концепции, но относится к максимальному ожидаемому потреблению углеводов.

После установки этих значений нажмите "ДАЛЕЕ" и перейдите на следующий экран:

![изображение](../images/setup-wizard/Screenshot_20231202_141817.png)

### Применяемый инсулин

Выберите тип инсулина, используемого в помпе.

Названия инсулинов должны быть самоочевидными.

```{admonition} Don't use the "Free-Peak Oref" unless you know what you are doing
:class: danger
For advanced users or medical studies there is the possibility to define with "Free-Peak Oref" a customised profile of how insulin acts. Please don't use it unless you are an expert, usually the pre-defined values work well for each branded insulin.
```

Нажмите "ДАЛЕЕ" и перейдите к следующему экрану:

![изображение](../images/setup-wizard/Screenshot_20231202_141840.png)


### Источник ГК

Выберите используемый вами источник ГК Please read the documentation for your [BG source](../Getting-Started/CompatiblesCgms.md).

Поскольку доступно несколько вариантов, мы не объясняем здесь конфигурацию каждого. В нашем примере мы приводим Dexcom G6 с самостоятельно собранным приложением BYODA:


![изображение](../images/setup-wizard/Screenshot_20231202_141912.png)


Если вы используете Dexcom G6 с BYODA, активируйте видимость его меню, поставив галочку справа.

После установки этих значений нажмите "ДАЛЕЕ" и перейдите на следующий экран:

![изображение](../images/setup-wizard/Screenshot_20231202_141925.png)


If you are using Dexcom G6 with BYODA, click on the cogwheel button to access the settings for BYODA.

Включите «Загружать данные ГК в NS» и «Вносить запись о замене сенсора в NS».

Go back and press "NEXT" to go to the next screen:

![изображение](../images/setup-wizard/Screenshot_20231202_141958.png)

(setup-wizard-profile)=
### Profile

Теперь мы переходим к очень важной части мастера установки.

Please read the documentation about [profiles](../SettingUpAaps/YourAapsProfile.md) before you try to enter your profile details on the following screen.

```{admonition} Working profile required - no exceptions here !
:class: danger
An accurate profile is necessary to control the safe action of **AAPS**

It's required that you have determined and discussed your profile with your doctor, and that it has been proven to work by successful basal rate, ISF and IC testing!

If a robot has an incorrect input it will fail - consistently. **AAPS** can only work with the information it is given. If your profile is too strong, you risk hypoglycemia, and if it is too weak, you risk hyperglycemia. 
```

Нажмите "ДАЛЕЕ" и перейдите к следующему экрану. Введите "название профиля":

![изображение](../images/setup-wizard/Screenshot_20231202_142027.png)


В дальнейшем при необходимости можно настроить несколько профилей. Мы здесь создадим только один.

```{admonition} Profile only for tutorial - not for your usage
:class: information
The example profile here is only to show you how to enter data.

It is not intended to be an accurate profile or something very well optimised, because each person's needs are so different.

Don't use it for actually looping!
```

Enter your [Duration of insulin Action (DIA)](#your-aaps-profile-duration-of-insulin-action) in hours. Затем нажмите "IC" (углеводный коэффициент):

![изображение](../images/setup-wizard/Screenshot_20231202_142143.png)

Enter your [IC](#your-aaps-profile-insulin-to-carbs-ratio) values:

![изображение](../images/setup-wizard/Screenshot_20231202_142903.png)

Нажмите "ISF" (фактор чувствительности к инсулину). Enter your [ISF values](#your-aaps-profile-insulin-sensitivity-factor):

![изображение](../images/setup-wizard/Screenshot_20231202_143009.png)


Нажмите "БАЗАЛ". Enter your [basal values](#your-aaps-profile-basal-rates):

![изображение](../images/setup-wizard/Screenshot_20231202_143623.png)


Нажмите "ЦЕЛЬ". Введите целевые значения сахара в крови.

For open looping this target can be a wider range, as otherwise **AAPS** notifies you permanently to change the temporary basal rate or another setting, which can be exhausting.

Позднее для замкнутого цикла у вас обычно будет одно значение для верхней и нижней границы. That makes it easier for **AAPS** to hit the target and give you better overall diabetes control.

Введите/подтвердите целевые значения:

![изображение](../images/setup-wizard/Screenshot_20231202_143709.png)

Сохраните профиль, нажав "СОХРАНИТЬ":

![изображение](../images/setup-wizard/Screenshot_20231202_143724.png)


После сохранения профиля появляется новая кнопка "Активировать профиль".

```{admonition} Several defined but only one active profile
:class: информация
Можно иметь несколько заданных профилей, но в каждый данный момент активен только один.
```

Нажмите "Активировать профиль":

![изображение](../images/setup-wizard/Screenshot_20231202_143741.png)





Появляется диалог переключения профиля. В этом случае он останется как предустановленный.

```{admonition} Several defined but only one active profile
:class: информация
В дальнейшем вы узнаете, как пользоваться этим диалогом в таких ситуациях, как болезнь или спорт, когда есть необходимость изменить профиль.
```


Нажмите "OK":


![изображение](../images/setup-wizard/Screenshot_20231202_143808.png)



Появляется диалог подтверждения переключения профиля.

Подтвердите нажав кнопку "OK". Нажмите "ДАЛЕЕ" и перейдите к следующему экрану:

![изображение](../images/setup-wizard/Screenshot_20231202_143822.png)

Ваш профиль установлен:

![изображение](../images/setup-wizard/Screenshot_20231202_143833.png)


### Инсулиновая помпа



Теперь выберем инсулиновую помпу.

Появится важный диалог предупреждения. Прочитайте его и нажмите "OK".

Если ваш профиль уже установлен на предыдущих шагах и вы знаете, как подключить помпу, сделайте это сейчас.

Otherwise, leave the Setup Wizard, using the arrow in the top left corner and let **AAPS** first show you some blood glucose values. Вы можете вернуться к этому в любое время или использовать один из параметров прямой конфигурации (минуя мастер).

Please read the documentation for your [insulin pump](../Getting-Started/CompatiblePumps.md).

Нажмите "ДАЛЕЕ" и перейдите к следующему экрану.

![изображение](../images/setup-wizard/Screenshot_20231202_143909.png)


В данном случае мы выберем "Виртуальную помпу".

Нажмите "ДАЛЕЕ" и перейдите к следующему экрану:

![изображение](../images/setup-wizard/Screenshot_20231202_143935.png)

### APS algorithm

Примените алгоритм OpenAPS SMB. Несмотря на название, функция алгоритма микроболюсов SMB отключена до полного знакомства с AAPS и прохождения первых целей. В любом случае алгоритм OpenAPS SMB новее и лучше по сравнению с OpenAPS AMA.

Причина, по которой SMB отключён в начале, заключается в том, что функция SMB позволяет быстрее реагировать на увеличение сахара в крови через супермикроболюсы, а не повышать базальную скорость. As in the beginning your profile is in general not as good as after some time of experience the feature is disabled in the beginning.

```{admonition} Only use the older algorithm **OpenAPS AMA** if you know what you are doing
:class: information
OpenAPS AMA is the most basic algorithm which does not support micro boluses to correct high values. There might be circumstances where it is better to use this algorithm but it is not the recommendation.
```

Press the cogwheel to see the details:

![изображение](../images/setup-wizard/Screenshot_20231202_144014.png)


Только прочтите текст и ничего не меняйте.

Due to the limitations which are imposed by the **Objectives** you can't use either "closed loop" or "SMB features" at the moment anyway.

Go back and press "NEXT" to go to the next screen:

![изображение](../images/setup-wizard/Screenshot_20231202_144025.png)

### Режим APS

Оставьте выбранным "Открытый цикл".

Нажмите "ДАЛЕЕ" и перейдите к следующему экрану:

![изображение](../images/setup-wizard/Screenshot_20231202_144049.png)

### Определение чувствительности

Let "Sensitivity Oref1" the standard for the sensitivity plugins selected.

Нажмите "ДАЛЕЕ" и перейдите к следующему экрану:

![изображение](../images/setup-wizard/Screenshot_20231202_144101.png)

### Начните выполнение Цели 1

Здесь вы приступаете к Целям. The qualification for access to further **AAPS** features.

Здесь мы запускаем цель 1, даже если на данный момент наши настройки не полностью готовы к завершению этой цели.

Но это – начало.

Нажмите на зеленую надпись "СТАРТ" для запуска Цели 1:

![изображение](../images/setup-wizard/Screenshot_20231202_144113.png)

Вы видите, что уже добились определенного прогресса, но другие области еще не завершены.

Нажмите "ГОТОВО" и перейдите к следующему экрану.

![изображение](../images/setup-wizard/Screenshot_20231202_144135.png)

You are coming to the home screen of **AAPS**.

Here you find the information message in **AAPS** that you set your profile.

Это было сделано при переходе на наш новый профиль.

Нажмите "УБРАТЬ ОПОВЕЩЕНИЕ" и оно исчезнет.

![изображение](../images/setup-wizard/Screenshot_20231202_144156.png)

If you accidentally leave the Setup Wizard at any point, you can either simply re-start the Wizard, or change the [configuration of the AAPS loop](../SettingUpAaps/ChangeAapsConfiguration.md) manually.

If your **AAPS** loop is now fully setup, please move on to the next section ["Completing the objectives"](../SettingUpAaps/CompletingTheObjectives.md).