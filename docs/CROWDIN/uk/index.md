# Ласкаво просимо до документації AAPS

![зображення](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

31 October 2026: Version 4.0.0 is out. Перегляньте [Примітки до випуску](#latestrelease), щоб дізнатися, що нового, і для оновлення виконайте вказівки з [посібника з оновлення](./Maintenance/UpdateToNewVersion.md).

```

Android APS (**AAPS**) — це застосунок з відкритим кодом для людей з інсулінозалежним діабетом. Це система штучної підшлункової залози (APS), яка працює на смартфонах з Android. **AAPS** використовує програмний алгоритм OpenAPS і намагається робити те, що робить справжня підшлункова залоза: тримати рівень цукру в крові у здорових межах за допомогою автоматичного дозування інсуліну. Щоб користуватися **AAPS**, вам потрібні **три** сумісні пристрої: **(1)** телефон з Android, **(2)** система безперервного моніторингу глюкози (CGM) і **(3)** інсулінова помпа, схвалена FDA/CE. Ви також можете додати **(4)** хмарні сервіси, щоб віддалено керувати **AAPS**, ділитися даними та зберігати їх на сервері звітів, і **(5)** розумний годинник.

Ця документація пояснює, як налаштувати **AAPS** і як ним користуватися. У документації **AAPS** можна переходити за допомогою меню ліворуч (і зручної функції **Search docs** — пошук у документації) або за допомогою [змісту](#index-aaps-documentation-index) внизу цієї сторінки.

## Огляд документації AAPS («документація»)

У розділі **1) Початок роботи** сторінка [Вступ до APS і AAPS](Getting-Started/Introduction.md) пояснює загальну ідею: для чого призначена система штучної підшлункової залози (APS). Він описує загальні основи роботи петлі, пояснює, чому створили **AAPS**, порівнює **AAPS** з іншими системами та розглядає питання безпеки. Він дає поради, як говорити про **AAPS** з вашою медичною командою, пояснює, чому застосунок **AAPS** потрібно зібрати самостійно, а не просто завантажити, і дає огляд типових з'єднань у системі **AAPS**. Він також розглядає доступність і те, кому **AAPS** найімовірніше допоможе.

[Підготовка до початку роботи з AAPS](./Getting-Started/PreparingForAaps.md) докладніше описує питання безпеки, а також телефони, CGM (системи безперервного моніторингу глюкози) та інсулінові помпи, сумісні з **AAPS**. Він дає огляд процесу, який ви пройдете, і приблизні терміни, за які ви зможете користуватися всіма функціями **AAPS**. Цей розділ технічно готує вас до того, щоб зібрати свою систему **AAPS** якомога швидше та ефективніше. The subsection [Compatible CGMs](./Getting-Started/CompatiblesCgms.md) explains how to optimize your CGM setup and which smoothing options are best.

Тепер, коли ви добре розумієте процес, можна починати збирати свою петлю **AAPS**.

Розділ **2) Збірка застосунку** пояснює, чому застосунок **AAPS** потрібно зібрати самостійно, а не просто завантажити, крок за кроком веде вас через [збірку](./SettingUpAaps/BuildingAaps.md) (у браузері, в Android Studio або з командного рядка), а потім через перенесення та встановлення на телефон. Він починається з необов'язкового кроку: створення [окремого облікового запису Google](./UsefulLinks/DedicatedGoogleAccountForAaps.md) для ваших збірок і резервних копій. Він також пояснює [перевірку розробників Android](#android-developer-verification) — зміну, яку Google запроваджує з вересня 2026 року і яка впливає на встановлення самостійно зібраних застосунків.

Розділ **3) Налаштування сервера звітів** пояснює, як вибрати та [налаштувати сервер звітів](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout або Tidepool), щоб ви могли переглядати свої дані та ділитися ними.

Розділ **4) [Налаштування AAPS](./SettingUpAaps/SetupWizard.md)** пояснює, як налаштувати застосунок **AAPS** за допомогою майстра налаштування, з'єднати його із застосунком CGM і зі справжньою або віртуальною інсуліновою помпою, а також з'єднати **AAPS** із сервером звітів. Потім ви знайомитеся з усім, що вміє **AAPS**, у безпечному, ретельно розміреному покроковому процесі. Так ви (або ваша дитина) добре познайомитеся з усіма рівнями та налаштуваннями меню і впевнено в них орієнтуватиметеся, перш ніж перейти до наступного етапу, який зазвичай називають наступним «Завданням». Так ви просуваєтеся далі, доки не матимете достатньо досвіду, щоб почати користуватися розширеними можливостями застосунку. Ці завдання спеціально побудовані так, щоб поступово відкривати більше можливостей **AAPS** і перейти від відкритої петлі до закритої петлі.

Розділ **5) [Щоденне життя з AAPS](./DailyLifeWithAaps/AapsScreens.md)** описує основні функції **AAPS**, щоб допомогти вам користуватися **AAPS** (і налаштовувати його під себе). Сюди входить розуміння екранів, активних вуглеводів, чутливості, DynamicISF, перемикання профілю, тимчасових цілей, подовжених вуглеводів (eCarbs), автоматизацій, а також [перегляд ваших даних](./Maintenance/Reviewing.md) у перегляді історії та статистиці. Він також розглядає часті теми: як поводитися з різними видами їжі, як проходити заміну канюлі та сенсора, оновлення смартфона, перехід на літній час, [подорожі з AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) і спорт. Поширені запитання та відповіді ви знайдете в розділі усунення несправностей.

Розділ **6) [Віддалені функції AAPS](./RemoteFeatures/RemoteControl.md)** показує справжню сильну сторону **AAPS**. Є багато способів віддалено надсилати команди до **AAPS** або просто стежити за його даними. Це однаково корисно для доглядачів, які використовують **AAPS** для неповнолітніх, і для дорослих з діабетом, які хочуть зручніше стежити за глюкозою (та іншими показниками), ніж лише на телефоні (на годиннику, в автомобілі _тощо_), або хочуть, щоб близькі люди теж бачили ці дані. Цей розділ також пояснює, як використовувати Android Auto, щоб бачити рівень глюкози в автомобілі.

Розділ **7) [Розумні годинники з Wear OS](./WearOS/BuildingAapsWearOS.md)** містить інформацію та інструкції щодо використання розумного годинника з Android **Wear OS** зі спеціальними циферблатами **AAPS** або власними циферблатами — як пульта віддаленого керування телефоном або лише як дисплея.


Розділ **8) [Обслуговування AAPS](./Maintenance/ExportImportSettings.md)** пояснює, як експортувати та зберігати резервні копії налаштувань (це дуже важливо, якщо ви втратите або зламаєте телефон), містить примітки до останньої версії, докладно описує, як оновити **AAPS**, і пояснює, що відбувається, коли підтримку версії припиняють. Можна очікувати одну нову версію і 2–3 обов'язкові оновлення на рік. Як і для будь-якого програмного забезпечення, ці оновлення потрібно встановлювати, бо в них виправляють дрібні помилки та покращують **AAPS**. Є окремий розділ усунення несправностей щодо оновлень з поширеними запитаннями.

Розділ **9) [Допомога та усунення несправностей](GettingHelp/WhereCanIGetHelp.md)** підкаже вам найкращі місця, де можна знайти загальну допомогу з **AAPS**. Це єдине місце, куди варто йти, коли щось не працює: центральна сторінка [Усунення несправностей](GettingHelp/GeneralTroubleshooting.md) збирає за темами рішення найпоширеніших проблем, а [Часті запитання (FAQ)](UsefulLinks/FAQ.md) відповідають на поширені запитання. Це дуже важливо, щоб ви могли якомога швидше зв'язатися з іншими людьми, з'ясувати питання та уникнути типових помилок. Багато людей уже успішно користуються **AAPS**, але в кожного колись виникає запитання, яке він не може вирішити сам. Через велику кількість користувачів відповіді на запитання зазвичай приходять дуже швидко, як правило, за кілька годин. Не бійтеся просити допомоги: дурних запитань не буває! Ми заохочуємо користувачів з будь-яким досвідом ставити стільки запитань, скільки потрібно, щоб безпечно почати роботу. Цей розділ містить загальне усунення несправностей для **AAPS** і **AAPSClient** (супутній застосунок для стеження), а також пояснює, як надіслати ваші дані **AAPS** (файли журналу) розробникам для аналізу, якщо ви вважаєте, що в **AAPS** є технічна проблема, яку треба перевірити.

Розділ **10)** описує **[Додаткові можливості AAPS](./AdvancedOptions/FullClosedLoop.md)**: наприклад, як перейти від використання **AAPS** як гібридної закритої петлі (з болюсами на їжу _тощо_) до повністю закритої петлі (без болюсів), як [налаштувати профіль](./GettingHelp/ProfileTuning.md) і використовувати Autotune, а також докладно описує режими розробки та інженерний режим. Більшості користувачів цілком достатньо основної версії **AAPS** («Master») без цих можливостей. Цей розділ для користувачів, які вже мають добрий контроль і хочуть ще покращити свою систему.

In section **11) [How to support AAPS](SupportingAaps/HowCanIHelp.md)** we provide information so that you can support this project. Ви можете пожертвувати гроші, обладнання або свої знання. You can suggest/make changes to the documentation yourself, help with [translation of the documentation](SupportingAaps/Translations.md) and provide your data through the Open Humans project.

Розділ **12) Ресурси** містить архівну або додаткову документацію, зокрема підрозділ для [лікарів](UsefulLinks/ClinicianGuideToAaps.md), які цікавляться технологією штучної підшлункової залози з відкритим кодом, як-от **AAPS**, або для пацієнтів, які хочуть поділитися такою інформацією зі своїми лікарями; цю тему також розглянуто у вступі. У цьому розділі є також інші матеріали та ресурси про діабет і петлю. Він містить [Глосарій](./UsefulLinks/Glossary.md) — список скорочень (або коротких назв), які використовуються в **AAPS**. Тут можна дізнатися, наприклад, що означають скорочення ISF або TT.


 ### Хочете почати користуватися **AAPS**? Докладніше про **AAPS** читайте в розділі [Вступ до APS і AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
Безпека **AAPS** залежить від функцій безпеки вашого обладнання (телефону, помпи, CGM). Використовуйте лише повністю справні інсулінову помпу та CGM, схвалені FDA/CE. Не використовуйте зламані, змінені або саморобні інсулінові помпи чи приймачі CGM. Використовуйте лише оригінальні витратні матеріали (інсертери, канюлі та резервуари для інсуліну), схвалені виробником для вашої помпи та CGM. Неперевірені або змінені витратні матеріали можуть спричинити неточності та помилки дозування інсуліну, а це значний ризик для користувача. 

Не використовуйте **AAPS**, якщо ви приймаєте інгібітори SGLT-2 (гліфлозини), бо вони знижують рівень цукру в крові. Ви підвищуєте ризик діабетичного кетоацидозу (ДКА) через менше введення інсуліну та ризик гіпоглікемії через знижений рівень цукру в крові. 
```

```{admonition} Disclaimer
:class: note

- Уся інформація та код, описані тут, призначені лише для інформування та навчання. Використовуйте [Nightscout](https://nightscout.github.io/) і **AAPS** на власний ризик і не використовуйте цю інформацію чи код для прийняття медичних рішень. Nightscout зараз не намагається відповідати вимогам HIPAA щодо конфіденційності. 
- Код з github.com надається без будь-яких гарантій і без офіційної підтримки. Докладніше дивіться в LICENSE цього репозиторію.
- Усі назви продуктів і компаній, товарні знаки, знаки обслуговування, зареєстровані товарні знаки та зареєстровані знаки обслуговування належать їхнім власникам. Вони використовуються лише для інформації і не означають жодного зв'язку з цими компаніями чи їхньої підтримки.

**AAPS** не пов'язаний з такими компаніями і не має їхньої підтримки: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) або [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Зміст документації AAPS

```{toctree}
:caption: Як користуватися цією документацією

Зміна мови та версії <./NavigateDoc/ChangeLanguageVersion.md>
Пошук у документації <./NavigateDoc/SearchDoc.md>
Оновлення та зміни документації <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Початок роботи

Вступ до APS і AAPS <./Getting-Started/Introduction.md>
Підготовка до початку роботи з AAPS <./Getting-Started/PreparingForAaps.md>
Огляд компонентів <./Getting-Started/ComponentOverview.md>
- Сумісні помпи <./Getting-Started/CompatiblePumps.md>
- Сумісні CGM <./Getting-Started/CompatiblesCgms.md>
- Телефони <./Getting-Started/Phones.md>
- Розумні годинники та AAPS <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Збірка застосунку

Окремий обліковий запис Google для AAPS (необов'язково) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Збірка AAPS <./SettingUpAaps/BuildingAaps.md>
- Збірка в браузері <./SettingUpAaps/BrowserBuild.md>
- Збірка в Android Studio <./SettingUpAaps/ComputerBuild.md>
- Інструкції зі збірки з командного рядка <./SettingUpAaps/CLIBuild.md>
Перенесення та встановлення AAPS на смартфон <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Налаштування сервера звітів

Налаштування сервера звітів <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Configure AAPS

Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configuration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Settings <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Щоденне життя з AAPS

Екрани AAPS <./DailyLifeWithAaps/AapsScreens.md>
Основні функції AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Розрахунок COB <./DailyLifeWithAaps/CobCalculation.md>
Визначення чутливості <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamic ISF (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
Перемикання профілю та відсоток профілю <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Тимчасові цілі <./DailyLifeWithAaps/TempTargets.md>
Подовжені вуглеводи / «eCarbs» <./DailyLifeWithAaps/ExtendedCarbs.md>
Швидкий майстер (болюс одним дотиком) <./DailyLifeWithAaps/QuickWizards.md>
Сцени (шаблони для ситуацій) <./DailyLifeWithAaps/Scenes.md>
Автоматизація <./DailyLifeWithAaps/Automations.md>
Швидкий запуск (панель швидких дій на екрані огляду) <./DailyLifeWithAaps/QuickLaunch.md>
Віджети головного екрана <./DailyLifeWithAaps/Widgets.md>
Їжа (ваша база їжі) <./DailyLifeWithAaps/Food.md>
Глобальний пошук <./DailyLifeWithAaps/GlobalSearch.md>
Перегляд ваших даних <./Maintenance/Reviewing.md>
AAPS для дітей <./DailyLifeWithAaps/AapsForChildren.md>
Помпи та канюлі <./DailyLifeWithAaps/PumpsAndCannulas.md>
Зміна часового поясу та літній час <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Віддалені функції AAPS

Віддалений моніторинг <./RemoteFeatures/RemoteMonitoring.md>
Стеження за AAPS (без взаємодії із системою AAPS) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Віддалене керування AAPS <./RemoteFeatures/RemoteControl.md>
Застосунок AAPSClient <./RemoteFeatures/AapsClient.md>
Керування «основний телефон ↔ клієнт» (підписане віддалене керування) <./RemoteFeatures/ClientMasterControl.md>
SMS-команди <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Розумні годинники з Wear OS

Збірка застосунку AAPS Wear <./WearOS/BuildingAapsWearOS.md>
Налаштування AAPS на годиннику з Wear OS <./WearOS/WearOsSmartwatch.md>
Керування AAPS за допомогою розумного годинника з Wear OS <./RemoteFeatures/RemoteControlWearOS.md>
Довідник власних циферблатів <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Сайт обміну власними циферблатами <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
What changed in AAPS v4 <./Maintenance/V4Changes.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update (fork, AAPS-CI) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio Update <./Maintenance/UpdateComputerBuild.md>
End of life <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Допомога та усунення несправностей

Де отримати допомогу? <./GettingHelp/WhereCanIGetHelp.md>
Усунення несправностей <./GettingHelp/GeneralTroubleshooting.md>
- Проблеми, пов’язані з Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Усунення проблем з NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Усунення проблем з Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Збірка в браузері: усунення проблем <./GettingHelp/BrowserBuildTroubleshooting.md>
- Перевстановлення AAPS з новим keystore <./GettingHelp/ReinstallAaps.md>
- Доступ до файлів журналу (логів) <./GettingHelp/AccessingLogFiles.md>
Часті запитання (FAQ) для користувачів петлі <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Додаткові можливості AAPS

Повністю закрита петля <./AdvancedOptions/FullClosedLoop.md>
Налаштування профілю AAPS <./GettingHelp/ProfileTuning.md>
Як використовувати плагін Autotune <./AdvancedOptions/Autotune.md>
Концентрація інсуліну <./AdvancedOptions/InsulinConcentration.md>
Гілка розробки <./AdvancedOptions/DevBranch.md>
Збірка в браузері: перенесення коміту (cherry-pick) <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Як підтримати AAPS

Як допомогти AAPS <./SupportingAaps/HowCanIHelp.md>
Як редагувати документацію <./SupportingAaps/HowToEditTheDocs.md>
Як перекладати рядки застосунку AAPS або документації <./SupportingAaps/Translations.md>
Стан перекладу застосунку та документації <./SupportingAaps/StateOfTranslations.md>
Вивантаження в Open Humans <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Ресурси

Глосарій <./UsefulLinks/Glossary.md>
Корисні матеріали, які варто прочитати перед початком <./UsefulLinks/BackgroundReading.md>
Для лікарів – загальний вступ і посібник з AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
