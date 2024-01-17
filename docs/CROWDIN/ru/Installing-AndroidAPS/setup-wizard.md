# Мастер установки AAPS

При первом запуске **AAPS** вашими действиями руководит **Мастер установки**, который не даст упустить из виду основные параметры приложения. **Мастер установки** охватывает все важные моменты. Например, **настройки разрешений** критически важны для правильной работы **AAPS**.

Однако применение **Мастера установки** не обязательно, из него можно легко выйти и вернуться к нему позже. Наряду с **Мастером установки** существуют три способа оптимизации или изменения конфигурации. О них расскажем в следующем разделе. Итак, если пропустить некоторые этапы в мастере установки, их можно легко выполнить позже.

В ходе и непосредственно после **Мастера установки** можно не заметить какие-то существенные изменения в **AAPS**. Чтобы активировать замкнутый цикл **AAPS**, необходимо пройти **цели**, и последовательно разблокировать функцию за функцией. В конце мастера установки. будет запущена **Цель 1**. Вы являетесь хозяином **AAPS**, а не наоборот.

:::{admonition} Просмотр целей

:::

По опыту мы знаем, что новички стараются как можно быстрее настроить \*\* AAPS \*\*, а это может привести к разочарованию, поскольку на обучение уйдет немало времени.

Поэтому настраивайте работу AAPS не спеша, так как преимущества хорошо работающей системы компенсируют все временные неудобства.

:::{admonition} Обращение за помощью
:class: примечание
Если в документации найдена ошибка или у вас есть идея, как объяснить что=то получше, обратитесь за помощью к сообществу по этой инструкции [Связаться с другими пользователями](../Куда-Обратиться-за-помощью/Связаться-с-другими-пользователями.md).
:::

## Пошаговое руководство к Мастеру установки AAPS

### Приветственное сообщение

Это просто приветственное сообщение, которое можно пропустить, нажав кнопку "ДАЛЕЕ":

![снимок экрана](../images/setup-wizard/Screenshot_20231202_125636.png)

### Лицензионное соглашение

В лицензионном соглашении с пользователем имеется важная информация о правовых аспектах пользования **AAPS**. Внимательно изучите его.

Если вы не понимаете лицензионного соглашения или не можете согласиться с ним, не пользуйтесь системой **AAPS**!

Если вы понимаете и соглашаетесь, нажмите кнопку "I UNDERSTAND AND AGREE" (я принимаю и соглашаюсь) и следуйте подсказкам Мастера установки:

![снимок экрана](../images/setup-wizard/Screenshot_20231202_125636.png)

### Необходимые разрешения

для корректной работы **AAPS** требуются некоторые условия.

На следующих экранах задано несколько условий которые надо принять для корректной работы **AAPS**. Мастер сам объясняет, почему он запрашивает соответствующие разрешения или настройки.

На этом экране мы даем дополнительную справочную информацию, переводим с технического языка на общий или объясняем причину.

Нажмите кнопку «ДАЛЕЕ»:

![снимок экрана](../images/setup-wizard/Screenshot_20231202_125709.png)

Расход батареи на смартфонах все еще является сложной задачей, поскольку производительность батарей по-прежнему весьма ограничена. Операционная система Android довольно неохотно разрешает приложениям запускатьсся и расходоавать время работы процессора, а, следовательно, и заряд батареи.

Однако **AAPS** должен запускаться регулярно, _напр. каждые несколько минут чтобы получать данные о гликемии и применять алгоритм на основе настроек профиля. Поэтому Android должен разрешить эти действия без препятствий.

You do this by confirming the setting.

Нажмите кнопку "ASK FOR PERMISSION"(запросить разрешение):

![снимок экрана](../images/setup-wizard/Screenshot_20231202_125721.png)

Выберите "Разрешить:

![снимок экрана](../images/setup-wizard/Screenshot_20231202_125750.png)

Android требует специального разрешения для уведомлений от приложений.

Хотя иногда полезно отключать уведомления _например._ из социальных сетей, важно разрешить **AAPS** отправлять уведомления.

Нажмите кнопку "ASK FOR PERMISSION"(запросить разрешение):

![снимок экрана](../images/setup-wizard/Screenshot_20231202_125813.png)

Выберите приложение "AAPS":

![снимок экрана](../images/setup-wizard/Screenshot_20231202_125833.png)

Включите "Разрешить поверх других приложений", сдвинув переключатель вправо:

![снимок экрана](../images/setup-wizard/Screenshot_20231202_125843.png)

Так выглядит переключатель во включенном положении:

![снимок экрана](../images/setup-wizard/Screenshot_20231202_125851.png)

Android увязывает использование Bluetooth со службой определения местоположения. Возможно, вы замечали это у других приложений. Обычно, если нужен доступ к Bluetooth, требуется разрешение на определение местоположения.

\*\* AAPS \*\* использует Bluetooth для связи с системой мониторинга гликемии CGM и инсулиновой помпой, они напрямую управляются \*\* AAPS \*\*. Детали могут различаться в зависимости от настроек.

Нажмите кнопку "ASK FOR PERMISSION"(запросить разрешение):

![снимок экрана](../images/setup-wizard/Screenshot_20231202_125924.png)

Это важно. Иначе \*\* AAPS\*\* вообще не сможет работать должным образом.

Выберите "При использовании приложения":

![снимок экрана](../images/setup-wizard/Screenshot_20231202_125939.png)

Нажмите кнопку «ДАЛЕЕ»:

![снимок экрана](../images/setup-wizard/Screenshot_20231202_130002.png)

**AAPS** должен сохранять информацию в постоянной памяти телефона. Постоянная память означает, что информация будет доступна даже после перезагрузки телефона. Остальная информация теряется, поскольку она не сохраняется в постоянной памяти.

Нажмите кнопку "ASK FOR PERMISSION"(запросить разрешение):

![снимок экрана](../images/setup-wizard/Screenshot_20231202_130012.png)

Нажмите "Разрешить":

![снимок экрана](../images/setup-wizard/Screenshot_20231202_130022.png)

Сообщается, что после внесения этого изменения необходимо перезагрузить телефон.

**Не останавливайте мастер установки сейчас**. Перезагрузить телефон можно после завершения мастера установки.

Нажмите кнопку "OK", затем "ДАЛЕЕ":

![снимок экрана](../images/setup-wizard/Screenshot_20231202_130031.png)

### Главный пароль

Так как конфигурация **AAPS** содержит некоторые конфиденциальные данные (_напр. API_KEY для доступа к серверу Nightscout), здесь можно установить пароль.

Второе предложение очень важно, **НЕ ПОТЕРЯЙТЕ ГЛАВНЫЙ ПАРОЛЬ**. Please make a note of it _e.g._ on Google Drive. Google Drive - хорошее место, так как он создан специально для подобных целей. Телефон или ПК могут выйти из строя, оставив нас без актуальной копии. Если вы забыли главный пароль, то будет трудно восстановить конфигурацию профиля и прохождение **Целей**.

После двукратного ввода пароля нажмите кнопку "Далее":

![image](../images/setup-wizard/Screenshot_20231202_130122.png)

### Загрузка отчета для разработчиков в Fabric

Здесь вы можете настроить автоматизированную службу отчетов о пользовании приложением и сбоях.

Это не обязательно, но рекомендуется.

Это помогает разработчикам лучше понимать как пользователи работают с приложением и информирует о происходящих сбоях.

Они получают:

1. The information that the app crashed, which they would not otherwise know since in their own set-up everything works fine and
2. В отправляемых данных (информация о сбоях) содержится информация о обстоятельствах, при которых произошел сбой, а также о конфигурации приложения.

Что помогает разработчикам улучшить приложение.

Please enable the "Fabric Upload" by sliding the slider to the right:

![снимок экрана](../images/setup-wizard/Screenshot_20231202_130136.png)

Кроме того, вы можете определить что разработчики могут связаться с вами только по неотложным проблемам:

![image](../images/setup-wizard/Screenshot_20231202_130147.png)

Заполнив "контактную информацию" нажмите кнопку "ОК". Контактная информация может быть учетная запись в Facebook, на Discord, ... Просто информация для связи с вами наилучшим способом:

![снимок экрана](../images/setup-wizard/Screenshot_20231202_135748.png)

Нажмите кнопку «ДАЛЕЕ»:

![снимок экрана](../images/setup-wizard/Screenshot_20231202_135807.png)

### Единицы (мг/дл <-> ммоль/л)

Выберите, в каких единицах хотите видеть значения гликемии -- в мг/дл или ммоль/л, затем нажмите кнопку "ДАЛЕЕ":

![снимок экрана](../images/setup-wizard/Screenshot_20231202_135830.png)

### Параметры экрана

Здесь выбираем диапазон значений, в котором хотим видеть свою гликемию. Его можно оставить заданным по умолчанию и отредактировать в дальнейшем.

Эти значения влияют только на графическое отображение ГК и больше ни на что.

Так, например, целевые значения гликемии задаются отдельно в профиле.

Величины для анализа TIR (времени в целевом диапазоне) конфигурируются отдельно при создании отчетов на сервере отчетов.

Нажмите кнопку «ДАЛЕЕ»:

![снимок экрана](../images/setup-wizard/Screenshot_20231202_135853.png)

### Синхронизация с сервером отчетов и другие вопросы

Здесь вы настраиваете загрузку данных на сервер отчетов.

Здесь также можно выполнить другие настройки, но для первого запуска мы сосредоточимся на сервере отчетов.

Если вам неудобно заниматься этим в данный момент, пропустите их. Их можно сделать потом.

Если вы выберете элемент, отметив его галочкой слева, то справа можно поставить галочку на видимость этого элемента (пиктограмма глаза), что одновременно включает этот модуль в верхнее меню на главном экране **AAPS**. Если на этом этапе вы настраиваете сервер отчетов, для него тоже выбирайте видимость.

In this example we select Nightscout as reporting server, and will configure it.

:::{admonition}  Make sure to choose the correct **NSClient** version for your needs!

Nightscout users should choose **NSClient v3**, unless you want to monitor or send remote treatments (_e.g._ as a parent or caregiver using **AAPS** for a child) through Nightscout, in which case, choose the first option "**NSClient**" until further notice.
:::

For Tidepool it is even simpler, as you only need your personal login information.

After making your selection, please press the "NEXT" button:

![image](../images/setup-wizard/Screenshot_20231202_140916.png)

Here you are configuring the Nightscout reporting server.

Please click on "Nightscout URL":

![image](../images/setup-wizard/Screenshot_20231202_140952.png)

Enter you Nightscout URL which is your personal Nightscout server. It's just an URL you setup yourself, or you were given from your service provider for Nightscout.

Please click the "OK" button:

![image](../images/setup-wizard/Screenshot_20231202_141051.png)

Enter your nightscout access token. This is the access token for your Nightscout server you configured. Without this token, access will not work.

If you don't have it at the moment please check the documentation for setting up the reporting server in the **AAPS** documentation.

After filling in the "**NS access token**" and clicking "OK", please click on the "Synchronization" button:

![image](../images/setup-wizard/Screenshot_20231202_141131.png)

Please select "Upload data to NS" if you already configured nightscout in the previous steps of the Setup Wizard.

If you have stored profiles on Nightscout and want to download them to **AAPS**, enable "Receive profile store":

![image](../images/setup-wizard/Screenshot_20231202_141219.png)

Go back to the previous screen and select "Alarm option":

![image](../images/setup-wizard/Screenshot_20231202_141310.png)

For now, leave the switches disabled. We only walked to the screen to make you familar with possible options you might configure in the future. At the moment there is no need to do it.

Go back to the previous screen before and select "Connection settings".

Here you can configure how to transfer your data to the reporting server.

Caregivers must enable "use cellular connection" as otherwise the smartphone which serves the dependant/child can not upload data outside of WiFi range _e.g._ on the way to school.

Other **AAPS** users can disable the tranfer via cellular connection if they want to save data or battery.

If in doubt, just leave all enabled.

Go back to the screen before and select "Advanced Settings".

![image](../images/setup-wizard/Screenshot_20231202_141326.png)

Enable "Log app start to NS" if you want get this information in the reporting server. It can help you to know remotely if and when the app has been restarted, particularly as a caregiver.

It might be interesting to see if **AAPS** is correctly configured now, but later it is usually not that important to be able to see **AAPS** stopping or starting in Nightscout.

Enable "Create announcements from errors" and "Create announcements from carbs required alerts".

Leave "Slow down uploads" disabled. You would only use it in unusual circumstances if for example a lot of information is to be transfered to the Nightscout server, and the Nightscout server is being slow in processing this data.

Go back to the screen before and select "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_141351.png)

### Имя пациента

Here you can setup your name in **AAPS**.

It can be anything. It's just for differentiating users.

To keep it simple just enter first name and last name.

Press "NEXT" to go to the next screen.

![image](../images/setup-wizard/Screenshot_20231202_141445.png)

### Тип пациента

Here you select your "Patient type" which is important, as the **AAPS** software has different limits, depending on the age of the patient. This is important for security and safety reasons.

Here is where you also configure the **maximum allowed bolus** for a meal. That is, the largest bolus you need to give to cover your typical meals. It's a security feature to help avoid accidentally overdosing when you are bolusing for meal.

The second limit is similar in concept, but relates to the max carbohydrate intake you expect.

After setting these values, press "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_141817.png)

### Used insulin

Select the type of insulin being used in the pump.

The insulin names should be self-explanatory.

:::{admonition} Don't use the "Free-Peak Oref" unless you know what you are doing
:class: danger
For advanced users or medical studies there is the possibility to define with "Free-Peak Oref" a customised profile of how insulin acts. Please don't use it unless you are an expert, usually the pre-defined values work well for each branded insulin.
:::

Press "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_141840.png)

### Blood sugar source

Select the BG source you are using. Please read the documentation for your [BG source](../Configuration/BG-Source.md).

As there are several options available, we don't explain the configuration for all of them here. We are using Dexcom G6 with the BYODA app in our example here:

![image](../images/setup-wizard/Screenshot_20231202_141912.png)

If you are using Dexcom G6 with BYODA, enable the visibility in the top level menu by clicking the tickbox on the right side.

After making your selection, press "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_141925.png)

If you are using Dexcom G6 with BYODA, click on the "cog/gearwheel" to access the settings for BYODA.

Enable the "Upload BG data to NS" and "Log sensor change to NS".

Press "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_141958.png)

### Профиль

Now we are entering a very important part of the Setup Wizard.

Please read the documentation about profiles before you try to enter your profile details on the following screen.

:::{admonition} Working profile required - no exceptions here !

It's required that you have determined and discussed your profile with your doctor, and that it has been proven to work by successful basal rate, ISF and IC testing!

If a robot has an incorrect input it will fail - consistently. **AAPS** can only work with the information it is given. If your profile is too strong, you risk hypoglycemia, and if it is too weak, you risk hyperglycemia.
:::

Press "NEXT" to go to the next screen. Enter a "profile name":

![image](../images/setup-wizard/Screenshot_20231202_142027.png)

You can have several profiles in the long-term if needed. We only create one here.

:::{admonition} Profile only for tutorial - not for your usage

It is not intended to be an accurate profile or something very well optimised, because each person's needs are so different.

Don't use it for actually looping!
:::

Enter your Duration of insulin Action (DIA) in hours. Then press "IC":

![image](../images/setup-wizard/Screenshot_20231202_142143.png)

Enter your IC values:

![image](../images/setup-wizard/Screenshot_20231202_142903.png)

Press "ISF". Enter your ISF values:

![image](../images/setup-wizard/Screenshot_20231202_143009.png)

Press "BAS". Enter your basal values:

![image](../images/setup-wizard/Screenshot_20231202_143623.png)

Press "TARG". Enter your blood sugar target values.

For open looping this target can be a wider range, as otherwise **AAPS** notifies you permanently to change the temporary basal rate or another setting, which can be exhausting.

Later, for closed looping, you will generally have only one value for top and bottom. That makes it easier for **AAPS** to hit the target and give you better overall diabetes control.

Enter/confirm the target values:

![image](../images/setup-wizard/Screenshot_20231202_143709.png)

Save the profile by clicking on "SAVE":

![image](../images/setup-wizard/Screenshot_20231202_143724.png)

After saving a new buttom "Activate Profile" occurs.

:::{admonition} Several defined but only one active profile
:class: information
You can have several profiles defined, but only one activated profile running at any given time.
:::

Press "Activate Profile":

![image](../images/setup-wizard/Screenshot_20231202_143741.png)

The profile switch dialogue appears. In this case let it stay as preset.

:::{admonition} Several defined but only one active profile
:class: information
You will learn later how to use this general dialog to handle situations like illness or sport, where you need to change your profile suitable for the circumstances.
:::

Press "OK":

![image](../images/setup-wizard/Screenshot_20231202_143808.png)

A confirmation dialog for the profile switch appears.

You can confirm it with pressing "OK". Press "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_143822.png)

Your profile has now been set:

![image](../images/setup-wizard/Screenshot_20231202_143833.png)

### Инсулиновая помпа

Now you are selecting your insulin pump.

You get an important warning dialog. Please read it, and press "OK".

If your have already setup your profile in the steps before and you know how to connect your pump, feel free to connect it now.

Otherwise, leave the Setup Wizard, using the arrow in the top left corner and let **AAPS** first show you some blood glucose values. You can come back anytime or use one of the direct configuration options (not using the Wizard).

Please read the documentation for your [insulin pump](../Getting-Started/Pump-Choices.md).

Press "NEXT" to go to the next screen.

![image](../images/setup-wizard/Screenshot_20231202_143909.png)

In this case we select "Virtual Pump".

Press "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_143935.png)

### Алгоритм APS

Use the OpenAPS SMB algorithm as your APS algorithm. Despite the name the SMB feature of the algorithm is disabled until you are familar with AAPS and already worked through the first objectives. OpenAPS SMB is newer and in general better compared to the OpenAPS AMA anyway.

The reason SMB is disabled in the beginning is because the SMB feature enables faster reaction on blood sugar increase through the Super Micro Bolus instead of increasing the basal rate percentage. As in the begining your profile is in general not as good as after some time of experience the feature is disabled in the begining.

:::{admonition} Only use the older algorithm **OpenAPS AMA** if you know what you are doing
:class: information
OpenAPS AMA is the most basic algorithm which does not support micro boluses to correct high values. There might be circumstances where it is better to use this algorithm but it is not the recommendation.
:::

Press "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_144014.png)

Only read the text and change nothing here.

Due to the limitations which are imposed by the **Objectives** you can't use either "closed loop" or "SMB features" at the moment anyway.

Press "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_144025.png)

### Режим APS

Let "Open Loop" remain selected.

Press "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_144049.png)

### Определение чувствительности

Let "Sensitivity Oref1" the standard for the sensitivty plugins selected.

Press "NEXT" to go to the next screen:

![image](../images/setup-wizard/Screenshot_20231202_144101.png)

### Start Objective 1

You are entering now the Objectives. The qualification for access to further **AAPS** features.

Here we start Objective 1, even if at the moment our setup is not completely ready to successfully complete this Objective.

But this is the start.

Press the green "START" to to start objective 1:

![image](../images/setup-wizard/Screenshot_20231202_144113.png)

You see that you already made some progress, but other areas are to be done.

Press "FINISH" to go to the next screen.

![image](../images/setup-wizard/Screenshot_20231202_144135.png)

You are coming to the home screen of **AAPS**.

Here you find the information message in **AAPS** that you set your profile.

This was done when we switched to our new profile.

You can click "SNOOZE" and it will disappear.

![image](../images/setup-wizard/Screenshot_20231202_144156.png)

If you accidentally leave the Setup Wizard at any point, you can either simply re-start the Wizard, or change the [configuration of the AAPS loop](../Installing-AndroidAPS/change-configuration.md) manually.

If your **AAPS** loop is now fully setup, please move on to the next section ["Completing the objectives"](../Usage/completing-the-objectives.md).
