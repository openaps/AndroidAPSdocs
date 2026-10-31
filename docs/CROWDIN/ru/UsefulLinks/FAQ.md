# Часто задаваемые вопросы по работе ИПЖ

How to add questions to the FAQ: Follow these [instructions](../SupportingAaps/HowToEditTheDocs.md)

## General

### Can I just download the AAPS installation file?

Нет. Для AndroidAPS не предоставляется загружаемый файл apk. You have to [build](../SettingUpAaps/BuildingAaps.md) it yourself. Причина вот в чем:

AndroidAPS создан для управления помпой и подачи инсулина. В соответствии с действующим Европейским законодательством, все системы, классифицируемые как IIa или IIb, являются медицинскими устройствами, подлежащими обязательной сертификации (получение знака CE), что в свою очередь требует соответствующих исследований и одобрений. Распространение несертифицированных устройств незаконно. Аналогичные законы существуют и в других частях мира.

Это положение не ограничивается торговлей, но относится к любому виду распространения (даже безвозмездному). Создание медицинского устройства для себя является единственным вариантом, не затрагиваемым этими правилами.

Именно поэтому распространение в виде готовых приложений (apk) недоступно.

(FAQ-how-to-begin)=

### How to begin?

Start with [Preparing to start with AAPS](../Getting-Started/PreparingForAaps.md): it walks you through everything below in more detail.

Прежде всего, нужно **подготовить компоненты, которые работают с ипж**:

* A [supported insulin pump](../Getting-Started/CompatiblePumps.md), 
* an [Android smartphone](../Getting-Started/Phones.md) (Apple iOS is not supported by AAPS - you can check [iOS Loop](https://loopkit.github.io/loopdocs/)) and
* a [continuous glucose monitoring system](../Getting-Started/CompatiblesCgms.md). 

Secondly, you have to **setup your software components**: [AAPS](../SettingUpAaps/BuildingAaps.md), [CGM/FGM source](../Getting-Started/CompatiblesCgms.md) and a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md).

Thirdly, you have to learn and **understand the OpenAPS reference design to check your treatment factors**. The founding principle of closed looping is that your [basal rate and carb ratio](../SettingUpAaps/YourAapsProfile.md) are accurate. Все рекомендации, выдаваемые ИПЖ предполагают, что ваши базовые потребности в инсулине удовлетворены и любые пики и провалы характеристики ГК - следствие других факторов, требующих дополнительных настроек ( нагрузка, стресс и пр.). В настройках ИПЖ введены ограничения безопасности (см. максимально допустимый базальный уровень в [Архитектуре OpenAPS](https://openaps.org/reference-design/)), которые означают, что вам не придется тратить допустимые дозировки на исправление неправильной базы. Например, если перед едой вы часто ставите временную цель на пониженный уровень ГК, вам, скорее всего, требуется настройка базы. You can use [Autotune](#autotune-how-autotune-calculates-adjustments) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed. Or you can test and set your basal the [old-fashioned way](https://integrateddiabetes.com/basal-testing/).

### What practicalities of looping do I have?

#### Password protection

If you don't want your settings to be easily changed, you can protect them with a password, a PIN or your phone's biometric authentication (fingerprint, face). Open **Settings** > **Protection** > **Settings protection** and choose the type of protection. You can also protect the whole app or only boluses in the same place. See [Settings protection](#Preferences-settings-protection) for details.

#### Android Wear Smartwatches

If you use the AAPS watch app to bolus or change settings, every request has to be confirmed on the watch: after you send it, the watch shows a summary with a **CONFIRM** button. See [Remote control from a Wear OS watch](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Disconnect pump

Если вы снимаете помпу на время душа, купания, занятия спортом или других действий, то, чтобы активный инсулин IOB правильно отражался в системе, следует проинформировать AAPS, что инсулин не вводится,.

The pump can be disconnected using the [loop icon](#AapsScreens-loop-status) on the AAPS main screen: press it and select **Disconnect pump** with the duration you need. If the activity takes longer than planned, press the icon again and pick a new duration: you don't need to reconnect first. See [Disconnecting the pump for showering or activity](#pumps-cannulas-disconnecting) for how to avoid a lack of insulin during long disconnections.

#### Recommendations not only based on one single CGM reading

Для безопасности, рекомендации системы делаются не на одном показании ГК, а на среднем из последних значений (с учетом скользящей дельты). Поэтому, если пропущено несколько показаний, понадобится время на то, чтобы AAPS снова начал компенсацию ГК в режиме замкнутого цикла.

#### Further readings

There are several blogs with good tips to help you understand the practicalities of looping. Some of them are no longer online: the links below marked "archived copy" open a saved copy on the Internet Archive.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (archived copy)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (archived copy)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (archived copy)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### What emergency equipment is recommended to take with me?

Прежде всего, вам необходимо иметь стандартный набор для больного диабетом 1го типа. При пользовании AAPS настоятельно рекомендуется также иметь:

* Банк батарей и кабель для зарядки смартфона, часов и (если это необходимо) BT reader или Link device
* Батарейки для помпы
* Access to your backups, both on the phone and in the cloud (e.g. Google Drive, Dropbox), so that you can set up AAPS again on another phone (see [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md)): 
  * the current [apk](../SettingUpAaps/BuildingAaps.md) of AAPS and of any other apps you use (e.g. xDrip, Juggluco, BYODA).
  * your keystore file (from building the apk) and its password,
  * your latest settings export files from AAPS and your other apps,
  * your **AAPS** master password: you cannot import the settings file without it.

(FAQ-organize-backups)=

#### How to organize my backups?

Export settings very regularly: after each pod or reservoir change, after modifying your profile, when you have validated an objective, if you change your pump… Even if nothing changes, export once a month. Сохраняйте несколько старых файлов экспорта.

**AAPS** can do this for you: it can export your settings automatically (for example with an [Automation](#ExportImportSettings-Automating-Settings-Export) after each pod change) and save the export directly to a cloud folder (Google Drive). See [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md).

### How can I safely and securely attach the CGM/FGM?

Его можно закрепить лейкопластырем. Существует несколько предварительно перфорированных 'накладок' для распространенных систем мониторинга (искать в Google, eBay. Amazon. Озон, Wildberries и т. п.). Некоторые пользователи ИПЖ применяют более дешевые стандартные кинезезиотейпы или лейкопластыри.

Его можно закрепить держателем. В продаже есть держатели CGM/FGM с повязками (поиск Google, eBay Amazon, Озон, Wildberries).

## APS algorithm

### Why does OpenAPS AMA show "dia: 3" even though I have a different DIA in my profile?

With **OpenAPS AMA** selected in **Configuration** > **APS**, **Open plugin** shows the data sent to the algorithm. In its **Profile** section, `dia` is always 3.0 or less:

![OpenAPS AMA plugin screen with dia 3.0 in the profile data](../images/screens/openaps_ama_plugin.png)

В помощнике болюса AMA "DIA" не означает "длительность действия инсулина". Этот параметр раньше привязывался к длительности действия инсулина DIA. Теперь же он означает, 'время, за которое нужно завершить коррекцию'. Он не имеет ничего общего с расчетом активного инсулина IOB. В алгоритме OpenAPS SMB больше нет необходимости в этом параметре.

## Other settings

### Nightscout settings

(FAQ-nsclient-blocked)=

#### AAPSClient (or AAPS) does not upload data: "Blocked by…". What can I do?

The NSClient status shows why no data is sent:

* **Blocked by connectivity options**: the connection settings do not allow the current connection. For example, you are on cellular data but only Wi-Fi is allowed, or you are not on one of the allowed Wi-Fi networks (SSIDs).
* **Blocked by charging options**: the connection settings only allow syncing while the phone is charging (or only on battery), and this is not the case right now.
* **No connectivity**: the phone has no internet connection.

Check the [NSClient connection settings](#Preferences-nsclient): **Use cellular data**, **Use roaming**, **Use WiFi**, **WiFi SSID**, **Sync on battery** and **Sync while charging**.

### CGM settings

(FAQ-advanced-filtering)=

#### Why does AAPS say 'SMB always and after carbs disabled because active BG source doesn't support advanced filtering'?

**Enable SMB always** and **Enable SMB after carbs** can only be used with a [trusted BG data source](#GettingStarted-TrustedBGSource): a sensor and CGM app that can tell **AAPS** which sensor the readings come from. With any other BG source, **AAPS** switches these two options off and shows this message. Check the list of trusted sources and, if your sensor is listed, make sure you use one of the CGM apps shown for it. See also [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Pump

#### Batteries

Looping can reduce the pump battery faster than normal use because the system interacts through Bluetooth far more than a manual user does. Лучше менять батарею при 25% так как после этого связь становится труднее. Можно настроить предупредительные сигналы батареи помпы через переменную PUMP_WARN_BATT_P на сайте Nightscout. Способы увеличить срок жизни батареи включают:

* уменьшить длительность работы экрана LCD (в меню настроек помпы)
* уменьшить длительность работы подсветки (в меню настроек помпы)
* выбрать уведомления в виде звукового сигнала а не вибрации (в меню настроек помпы)
* Нажимать кнопки помпы только для перезагрузки; для просмотра журналов, уровня батареи и объема резервуара помпы пользоваться смартфоном с AAPS.
* На некоторых телефонах AAPS периодически закрывается для экономии энергии или высвобождения оперативной памяти. Когда AAPS вновь инициализируется, то при каждом старте устанавливает соединение Bluetooth с помпой и перечитывает текущую базальную скорость и журнал болюсов. Это расходует батарею. To see if this is happening, enable **Log app start event** in the NSClient **Advanced settings**: Nightscout will receive an event at every restart of AAPS, which makes it easy to track the issue. To reduce this happening, turn off battery optimization for AAPS so that the phone stops closing it down: see [battery savings](#FAQ-battery-savings) below.
* протирайте контакты батареи спиртовыми салфетками, чтобы на ней не оставались следы заводской смазки.
* for [Dana R/RS pumps](../CompatiblePumps/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy while in storage) but it doesn't always work to break it 100%. Либо удалите и заново вставьте батарею 2-3 раза до тех пор, пока на экране помпы заряд батареи не покажет 100%, либо замкните контакты батареи на долю секунды при помощи ключа батареи, чтобы удалить этот налет.
* see also more tips for [particular types of battery](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Changing reservoirs and cannulas

The reservoir must be changed directly on the pump, then the change is recorded in **AAPS**. Follow the step-by-step [guide for changing the pump reservoir and cannula](#pumps-cannulas-changing-reservoir-and-cannula).

### Wallpaper

You can find the AAPS wallpaper for your phone on the [phones page](#Phones-phone-wallpaper).

### Daily usage

Many of the situations below can be prepared once as a [scene](#scenes): a preset that switches profile, temp target and other settings with one tap. **AAPS** offers ready-made templates, for example *Exercise*, *Sleep*, *Alcohol* or *Bathing*.

#### Hygiene

(what-to-do-when-taking-a-shower-or-bath)=

##### What to do when taking a shower or bath?

Помпу можно снять при приеме душа или ванной. За этот короткий промежуток времени вам может не понадобиться, но вы должны сообщить AAPS о том, что отключились для того, чтобы вычисления IOB были правильными. See [description above](#FAQ-disconnect-pump). The *Bathing* [scene](#scenes) template does this for you.

#### Work

В зависимости от вида работы, возможно, вы используете иные методы терапии в рабочие дни. As a looper you should consider a [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) for your typical working day. Например, профиль больше 100% можно установить, если работа не очень тяжелая (напр. сидя за столом), или меньше 100%, если вы активны и на ногах весь день. You could also consider a high or low temporary target or a [time shift of your profile](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) when working much earlier or later than regular, or if you work different shifts. You can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need, or save your workday settings as a [scene](#scenes).

### Leisure activities

(FAQ-sports)=

#### Sports

Пересмотрите свои старые спортивные привычки доаппсовских времен. Если вы как и прежде съедаете один или несколько углеводов на спорт, теперь система замкнутого цикла распознает их и соответствующим образом скорректирует.

Итак, в организме будет больше углеводов, но в то же время петля будет противодействовать и подавать инсулин.

При работе с алгоритмом ИПЖ следует выполнить следующие действия:

* Make a [profile switch](#ProfileSwitch-change-percentage) < 100%: tap the profile name on the main screen, tap the round **▶** button, then set **Percentage** and **Duration**.
* Set an [activity temp target](#TempTargets-activity-temp-target) above your standard target. With a percentage below 100 % and a duration, the same **Activate** screen offers a **Temporary target / Activity** switch that starts both at once.
* If you are using SMB make sure ["Enable SMB with high temp targets"](#Open-APS-features-enable-smb-with-high-temp-targets) and ["Enable SMB always"](#Open-APS-features-enable-smb-always) are disabled.

Важное значение имеет предварительная и последующая обработка этих настроек. Внесите изменения до занятий спортом и учитывайте эффект наполнения мышц.

The *Exercise* and *Post-exercise Night* [scene](#scenes) templates bundle these settings, so you can start them with one tap. If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../DailyLifeWithAaps/Automations.md) to start the profile switch and TT, or the scene. Автоматизация на основе геолокации также неплохая идея, но делает предварительную обработку более сложной.

Процент изменения профиля, величина временной цели при нагрузках и наилучшее время для внесения изменений индивидуальны. Начните с более безопасных параметров (например с низким процентоом профиля и более высокими временными целями).

#### Sex

Можете снять помпу для "свободы" но следует проинформировать об этом AAPS, чтобы расчеты активного инсулина IOB были правильными. See [description above](#FAQ-disconnect-pump).

#### Drinking alcohol

Употребление алкоголя является рискованным в режиме замкнутого цикла, так как алгоритм ИПЖ не может правильно предсказать влияние алкоголя на ГК. Следует выработать свой собственный метод подхода к этому вопросу с помощью следующих функций в AndroidAPS:

* Деактивировать режим замкнутого цикла и разбираться с диабетом вручную или
* устанавливать высокие временные цели и отключать незапланированный прием пищи UAM, чтобы избежать увеличения активного инсулина IOB из-за непредусмотренной еды или
* do a [profile switch](#ProfileSwitch-change-percentage) to noticeably less than 100% 

The *Alcohol* [scene](#scenes) template is a starting point you can adapt to your own method.

При употреблении алкоголя всегда нужно следить за мониторингом, чтобы вручную избежать гипокликемии, съедая углеводы.

#### Sleeping

##### How can I loop during the night without mobile and Wi-Fi radiation?

Многие пользователи ночью переводят телефон в режим авиаперелета. If you want the loop to support you when you are sleeping, proceed as follows (this will only work if your CGM app runs on the same phone as AAPS, such as xDrip, Juggluco or BYODA; it will NOT work if you get the BG-readings via Nightscout):

1. Включите режим авиаперелета на вашем мобильном устройстве.
2. Подождите, пока режим авиаперелета не будет активирован.
3. Включите Блутус.

Теперь вы не принимаете звонки и не подключены к Интернету. Но цикл продолжает работу.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip) when phone is in airplane mode. In xDrip, go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

If you want different settings at night (for example a higher target), the *Sleep* [scene](#scenes) template is a good starting point.

#### Traveling

##### How to deal with time zone changes?

Если у вас DanaR или DanaR для корейского рынка делать ничего не надо. For other pumps see [time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) page for more details.

### Medical topics

#### Hospitalization

If you want to share some information about AAPS and DIY looping with your clinicians, you can print out the [guide to AAPS for clinicians](../UsefulLinks/ClinicianGuideToAaps.md).

#### Medical appointment with your endocrinologist

##### Reporting

Вы можете либо распечатать отчеты вашего сайта Nightscout (https://вашсайт.com/report) или перейти в [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Frequent questions on Discord and their answers...

### My problem is not listed here.

See [where to get help](../GettingHelp/WhereCanIGetHelp.md). If you found the solution yourself, **remind us to add it to this list!**

### Building and installing

(FAQ-build-errors)=

#### I have problems, errors building the app.

Please check the troubleshooting page for the way you build **AAPS** (see [Building AAPS](../SettingUpAaps/BuildingAaps.md)):

* building with a browser: [Browser build: troubleshooting](#aaps-ci-troubleshooting),
* building with Android Studio: [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Build error: file name too long

This error can happen when building with Android Studio: the build stops with an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "C:\src\AndroidAPS").

Из Android Studio: Убедитесь, что "Gradle" завершил синхронизацию и индексирование после открытия проекта с GitHub. Выполните Build->Clean Project прежде чем выполнять Rebuild Project. Выполните команду File>Инвалидация кэша и перезагрузите Android Studio.

(FAQ-running-dev-version)=

#### Alert: Running dev version. Closed loop is disabled

**AAPS** shows this message when you run a development (dev) version without engineering mode: in a dev version, closed loop only works in engineering mode.

The dev version is meant for testing, not for actual looping: read [Development branch](../AdvancedOptions/DevBranch.md) before going further.

To turn on engineering mode:

1. Place a file named `engineering_mode` in the `extra` subfolder of your AAPS directory (the folder you chose in the setup wizard, usually `AAPS/extra`). Любой файл подойдет если он назван правильно.
2. Restart **AAPS** so that it finds the file.

Совет: сделайте копию существующего лог-файла и переименуйте его в "engineering_mode" (примечание: без расширения!).

### Objectives

#### I'm stuck on an objective and need help.

First read [Completing the Objectives](../SettingUpAaps/CompletingTheObjectives.md). If you are still stuck, screen capture the question and answers and post them on the Discord AAPS channel. Не забудьте указать какие опции вы выбираете (или нет) и почему. Вы получите подсказки и помощь, но ответы надо найти самостоятельно.

### Settings, passwords and backups

(FAQ-reset-master-password)=

#### How to reset the master password?

If you forgot your master password, you can reset it to your pump's serial number:

1. Create an empty file named `PasswordReset` (no file extension) in the `extra` subfolder of your AAPS directory (usually `AAPS/extra`).
2. Restart **AAPS**. Your pump must be connected: **AAPS** shows "Waiting for pump…" and needs to read the pump serial number within 30 seconds.
3. **AAPS** shows "Password set!": your master password is now your **pump serial number**. The `PasswordReset` file is deleted automatically.
4. Open **Settings** > **Protection** > **Master password** and set a new password.

If the pump is not reached in time, nothing changes: check the pump connection and try again.

This only resets the master password. A settings, application or bolus password or PIN is not reset, but you can always use the master password instead of them.

    {admonition} Old settings files
    :class: warning
    Settings files exported with the old master password can only be imported with that old password.

(FAQ-where-are-settings-files)=

#### Where can I find settings files?

Settings files are stored in the `preferences` subfolder of the AAPS directory you chose in the [setup wizard](#SetupWizard-StoragePermission) (for example `/internal storage/AAPS/preferences`). If you set up a cloud folder (Google Drive), your exports can also be saved there. See [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md).

ВНИМАНИЕ: Убедитесь что помните пароль, без него вы не сможете импортировать зашифрованный файл настроек!

(FAQ-import-settings-earlier-versions)=

#### How do I import settings from earlier versions of AAPS into AAPS v3 or v4 ?

You can only import settings (in AAPS v3 or v4) that were exported using AAPS v2.8x or later. If you were using a version of AAPS older than v2.8x or you need to use setting exports older than v2.8x, then you need to install AAPS v2.8 first. Import the older settings of v2.x in v2.8. After checking that all is OK, you can export settings from v2.8. Install the current AAPS version and import v2.8 settings in it.

If you use the same key to build the old and the new version, you won't even have to import settings. You can install the new version over the old one.

Появились новые цели. Нужно будет их подтвердить.

(FAQ-delete-treatments)=

#### Where can I delete treatments?

Open the **menu** (☰) and select **Treatments history**. Long press an entry to select it, tap more entries if needed, then tap the **trash can** icon and confirm. See [Treatments history](#aaps-screens-treatments).

### Phone and connection problems

(FAQ-aaps-stops)=

#### AAPS stops everyday around the same time.

* Google Play Protect may shut down **AAPS** every morning on some phones. If this happens, go to the Google Play options and disable **Google Play Protect**.
* Проверьте "очистку" приложений (при помощи CCleaner и т. д.) и удалите их.
* Turn off all battery optimizations for **AAPS** (see [battery savings](#FAQ-battery-savings) below).

(FAQ-battery-savings)=

#### How to configure battery savings?

Your phone may suspend **AAPS** and related apps (CGM app, Bluetooth) when you are not using it. **AAPS** then cannot do its work, and Bluetooth connections to the sensor and pump (or RileyLink) may be shut down, causing "pump unreachable" alerts and communication errors.

Turn off battery optimization for **AAPS**, your CGM app (e.g. xDrip) and the Bluetooth system app. The way to do this depends on the phone's brand, model and Android version:

* see [Battery optimization](#generaltroubleshooting-android-related-issues) for Pixel, Samsung and Huawei phones,
* in **AAPS**, open the **menu** (☰) > **About** and tap **Don't kill my app?**, or visit [Don't kill my app](https://dontkillmyapp.com/) for other brands.

If you are not sure that battery savings cause your problem, you can temporarily turn off all battery savings on the phone: your battery will drain faster, but you will quickly see if the problem goes away.

(FAQ-pump-unreachable-alerts)=

#### Pump unreachable alerts several times a day or at night.

Your phone may be suspending **AAPS** or even Bluetooth, causing it to lose the connection to the pump or RileyLink (see [battery savings](#FAQ-battery-savings) above).

You can also change when the alert is raised: press the **Settings** (gear) icon on the top right of the main screen, then select **Local alerts** > **Pump unreachable threshold** (30 to 300 minutes). Check your pump's page: some recommend a value, e.g. 120 minutes for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### My link/pump/pod is unresponsive (RL/OL/EmaLink…)

На некоторых телефонах Bluetooth разъединяется с Link (RL/OL/EmaL...).

Некоторые также отмечают плохую коммуникацию с RileyLink (AAPS сообщает, что они подключены, но не выполняют команды)

First try the **Reset RileyLink** button on the pump screen (see your pump's page: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). If this does not help, the easiest way to get all these parts working together is:

1. Power off the Link.
2. Quit **AAPS** (**menu** (☰) > **Exit**).
3. Long press the **AAPS** icon, open the Android **App info**, tap **Force stop**, then **Storage** > **Clear cache** (do NOT clear storage/data!).
4. Rarely some phones may need a reboot here. Можно попробовать без перезагрузки.
5. Power on the Link.
6. Start **AAPS**.
7. On the pump screen, tap **Pair RileyLink** and select your Link again.

### Remote control

(FAQ-aapsclient)=

#### Configuring and Using the AAPSClient remote app

**AAPSClient** is a separate app that lets a caregiver follow and control **AAPS** remotely. Since **AAPS** v4, controlling **AAPS** from AAPSClient needs a one-time pairing between the two apps. See:

* [The AAPSClient app](#aapsclient-app): installing, first start and pairing,
* [Master ↔ Client control](#client-master-control): what can be controlled and how pairing works,
* [AAPSClient on a smartwatch](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Treatments I enter on the Nightscout website are not applied

That is [hardened mode](#client-master-control-hardened-mode). While client control is on — always in Simple Mode — **AAPS** takes changes only from paired clients, not from the Nightscout website or other apps. Enter them on a paired **AAPSClient** instead.

### Alerts and warnings

#### I have a red warning badge (red triangle) / AAPS won't enable closed loop / Loop stays in LGS / I had a yellow triangle

The red warning badge on the BG source shortcut is a security feature in AAPS. See [BG warning sign](#aaps-screens-bg-warning-sign) for the full explanation.

A red warning badge on the BG source shortcut in the bottom bar (the red triangle of older versions) means that you have duplicate BGs and AAPS can't calculate precisely the deltas. A closed loop is switched to **Low Glucose Suspend** mode: it still reduces or suspends your basal to protect you against lows, but it gives no correction insulin. You need to delete one BG of each duplicated value in order to clear the warning. Tap the shortcut to open your [BG source screen](#aaps-screens-bg-source): the duplicate is highlighted in red. Long press one line you want to delete, check one of each lines that are doubled and tap the trash icon. Если слишком много двойных ГК потребуется сбросить базы данных AAPS,. In this case, you'll also lose stats, IOB, COB, selected profile.

Once the warning is gone, AAPS does not go back to **Closed Loop** by itself. Press the loop icon on the main screen and select **Closed Loop** again.

Возможные причины проблемы: xDrip и/или NS достраивают пропущенные ГК.

The yellow triangle of older versions meant unstable delay between each BG reading (BGs not received every 5 min regularly, or missing BGs), which often happens with Libre or after a G6 transmitter change. **AAPS** 4 no longer shows it: it recalculates the values in the background and the loop works correctly.

### Помпа Omnipod DASH

(FAQ-move-dash-pod)=

#### Can I move an active DASH Pod to another phone?

The Pod state is included in the exported settings, so an active Pod can be moved to another phone by exporting the settings right before the move and importing them on the other phone. This is not officially supported and there is a risk of losing the Pod: if possible, try it when your Pod is about to expire.

Read these sections first:

* [Export and import settings](#omnipod-dash-export-import) on the Omnipod DASH page, and [Tubeless pumps](#ExportImportSettings-tubeless-pumps): on the new phone, tick **Also replace pump settings** and use a file exported during the Pod you are wearing now,
* [Discarding a pod](#omnipod-dash-discard-pod), to remove the Pod from the old phone afterwards. Keep the old phone in airplane mode until the Pod is discarded, so that the two phones never talk to the Pod at the same time.