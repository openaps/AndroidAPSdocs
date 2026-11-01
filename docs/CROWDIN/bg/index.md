# Добре дошли в документацията на AAPS

![изображение](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

31 October 2026: Version 4.0.0 is out. Вижте [Бележки към версиите](#latestrelease), за да разберете какво е новото, и следвайте инструкциите в [Актуализиране до нова версия или клон](./Maintenance/UpdateToNewVersion.md), за да актуализирате.

```

Android APS (**AAPS**) е приложение с отворен код за хора с инсулинозависим диабет. Това е система за изкуствен панкреас (APS), която работи на смартфони с Android. **AAPS** използва софтуерния алгоритъм на OpenAPS и се стреми да прави това, което прави истинският панкреас: да поддържа нивата на кръвната захар в здравословни граници чрез автоматично дозиране на инсулин. За да използвате **AAPS**, са ви нужни **три** съвместими устройства: **(1)** телефон с Android, **(2)** система за продължително наблюдение на глюкозата (CGM) и **(3)** инсулинова помпа, одобрена от FDA/CE. Можете да добавите и **(4)** облачни услуги за дистанционно управление на **AAPS**, за споделяне на данните ви и за съхраняването им на сървър за отчети, и **(5)** смарт часовник.

Тази документация обяснява как да настроите и използвате **AAPS**. Можете да се движите в документацията на **AAPS** чрез менюто вляво (и удобната функция за търсене **Search docs**) или чрез [индекса](#index-aaps-documentation-index) в края на тази страница.

## Преглед на документацията на AAPS („документацията“)

В раздел **1) Първи стъпки** страницата [Въведение в APS и AAPS](Getting-Started/Introduction.md) обяснява общата идея за това какво трябва да прави една система за изкуствен панкреас (APS). Там са описани основите на затворения кръг като цяло и защо е създаден **AAPS**, **AAPS** е сравнен с други системи и е разгледана безопасността. Там има съвети как да говорите с медицинския си екип за **AAPS**, обяснено е защо трябва сами да компилирате приложението **AAPS**, вместо просто да го изтеглите, и има преглед на типичните връзки в една система **AAPS**. Разгледани са също достъпността и кой вероятно ще има полза от **AAPS**.

[Подготовка за започване с AAPS](./Getting-Started/PreparingForAaps.md) дава повече подробности за безопасността, както и за телефоните, CGM (системите за продължително наблюдение на глюкозата) и инсулиновите помпи, които са съвместими с **AAPS**. Там е описан процесът, през който ще преминете, и приблизително колко време ще отнеме, докато използвате пълноценно всички функции на **AAPS**. Този раздел ви подготвя технически да сглобите своята система **AAPS** възможно най-бързо и ефективно. The subsection [Compatible CGMs](./Getting-Started/CompatiblesCgms.md) explains how to optimize your CGM setup and which smoothing options are best.

След като вече добре разбирате процеса, можете да започнете да сглобявате своя кръг с **AAPS**.

Раздел **2) Компилиране на приложението** обяснява защо трябва сами да компилирате приложението **AAPS**, вместо просто да го изтеглите, и ви води стъпка по стъпка през [компилирането](./SettingUpAaps/BuildingAaps.md) (в браузъра, с Android Studio или от командния ред) и след това през прехвърлянето и инсталирането на приложението на телефона ви. Той започва със стъпка по избор: създаване на [отделен профил в Google](./UsefulLinks/DedicatedGoogleAccountForAaps.md), в който да пазите компилациите и резервните копия. Той обяснява и [проверката на разработчиците за Android](#android-developer-verification) – промяна, която Google въвежда от септември 2026 г. и която засяга начина, по който се инсталират приложения, компилирани от самия потребител.

Раздел **3) Настройка на сървъра за отчети** описва избора и [настройката на вашия сървър за отчети](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout или Tidepool), за да можете да преглеждате и споделяте данните си.

Раздел **4) [Конфигуриране на AAPS](./SettingUpAaps/SetupWizard.md)** описва настройката на приложението **AAPS** със Съветника за настройване, свързването му с вашето CGM приложение и с истинска или виртуална инсулинова помпа, както и свързването на **AAPS** с вашия сървър за отчети. След това ще се запознаете с всичко, което **AAPS** може да прави, чрез безопасен процес стъпка по стъпка с внимателно подбрано темпо. Така сте сигурни, че вие (или детето ви) сте се запознали добре и се чувствате уверени с всички нива и менюта за конфигуриране, преди да преминете към следващия етап, обикновено наричан следващата „Цел“. Продължавате така, докато натрупате достатъчно опит, за да започнете да използвате по-сложните опции в приложението. Тези цели са създадени специално така, че постепенно да отключват повече възможности на **AAPS** и да преминете от режим Отворен кръг към режим Затворен кръг.

Раздел **5) [Ежедневие с AAPS](./DailyLifeWithAaps/AapsScreens.md)** описва основните функции на **AAPS**, за да ви помогне да използвате (и да персонализирате) **AAPS**. Това включва разбирането на екраните, активните въглехидрати (COB), чувствителността, динамичното ISF (DynamicISF), смяната на профил, временните цели, удължените въглехидрати (eCarbs), автоматизациите и [прегледа на данните](./Maintenance/Reviewing.md) в историята и статистиката. Той описва и често срещани теми, като например как да се справяте с различни видове хранения, със смяната на канюлата и сензора, с актуализациите на смартфона, с преминаването към лятно и зимно часово време, с [пътуването с AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) и със спорта. Често срещаните въпроси и отговорите им се намират в раздела за отстраняване на неизправности.

Раздел **6) [Дистанционни функции на AAPS](./RemoteFeatures/RemoteControl.md)** показва една истинска силна страна на **AAPS**. Има много възможности за дистанционно изпращане на команди към **AAPS** или само за следене на данните от него. Това е еднакво полезно за болногледачи, които искат да използват **AAPS** за непълнолетни, и за възрастни с диабет, които искат да следят кръвната си захар (и други показатели) по-удобно, не само на телефона (на часовник, в колата _и т.н._), или искат и техни близки да следят данните. Този раздел дава и указания за използването на Android Auto, за да виждате стойностите на кръвната захар в колата.

Раздел **7) [Смарт часовници с Wear OS](./WearOS/BuildingAapsWearOS.md)** дава информация и процедури за използване на смарт часовник с Android **Wear OS** със специалните циферблати на **AAPS** или с персонализирани циферблати – или като дистанционно управление на телефона, или само като дисплей.


Раздел **8) [Поддръжка на AAPS](./Maintenance/ExportImportSettings.md)** описва как да експортирате и да направите резервно копие на настройките си (което е много важно, ако загубите или повредите телефона си), дава бележките към последната версия, обяснява подробно как да актуализирате **AAPS** и какво се случва, когато поддръжката на дадена версия приключи. Можете да очаквате една нова версия и 2–3 задължителни актуализации годишно. Трябва да правите тези актуализации, както при всеки софтуер, защото с тях се отстраняват малки грешки и се правят подобрения в **AAPS**. Има отделен раздел за отстраняване на неизправности при „актуализиране“ с често задаваните въпроси.

Раздел **9) [Помощ и отстраняване на неизправности](GettingHelp/WhereCanIGetHelp.md)** ще ви насочи към най-добрите места, където да намерите обща помощ за **AAPS**. Това е единственото място, където да отидете, когато нещо не работи: страницата [Отстраняване на неизправности](GettingHelp/GeneralTroubleshooting.md) събира по теми решенията на най-честите проблеми, а [Често задавани въпроси](UsefulLinks/FAQ.md) отговаря на честите въпроси. Това е много важно, за да можете възможно най-бързо да се свържете с другите, да изясните въпросите си и да решите обичайните трудности. Много хора вече използват **AAPS** успешно, но всеки в даден момент има въпрос, който не може да реши сам. Тъй като потребителите са много, отговорите на въпросите обикновено идват много бързо – обикновено само за няколко часа. Не се притеснявайте да поискате помощ – няма глупави въпроси! Насърчаваме потребителите с всякакво ниво на опит да задават толкова въпроси, колкото смятат за нужно, за да започнат да използват системата безопасно. Този раздел включва общо отстраняване на неизправности за **AAPS** и **AAPSClient** (придружаващо приложение за следене), както и обяснение как да изпратите данните си от **AAPS** (лог файловете) на разработчиците за проверка, ако смятате, че има технически проблем с **AAPS**, който трябва да се разгледа.

Раздел **10)** описва **[Разширени опции на AAPS](./AdvancedOptions/FullClosedLoop.md)**, например как да преминете от използване на **AAPS** като хибриден затворен кръг (с болуси за храненията _и т.н._) към напълно затворен кръг (без болуси), как да [настроите профила си](./GettingHelp/ProfileTuning.md) и да използвате Autotune, и описва подробно режима за разработчици и инженерния режим. Повечето потребители се справят напълно добре с основната версия („Master“) на **AAPS**, без да се занимават с тези опции. Този раздел е за потребители, които вече имат добър контрол и искат да подобрят още системата си.

In section **11) [How to support AAPS](SupportingAaps/HowCanIHelp.md)** we provide information so that you can support this project. Можете да дарите пари, оборудване или знания. You can suggest/make changes to the documentation yourself, help with [translation of the documentation](SupportingAaps/Translations.md) and provide your data through the Open Humans project.

Раздел **12) Ресурси** съдържа архивна или допълнителна документация, включително подраздел за [лекари](UsefulLinks/ClinicianGuideToAaps.md), които проявяват интерес към технологиите за изкуствен панкреас с отворен код като **AAPS**, или за пациенти, които искат да споделят такава информация с лекарите си. Тази тема е разгледана и във въведението. В този раздел има и още източници и материали за диабета и затворения кръг. Той включва [Речник](./UsefulLinks/Glossary.md) – списък на съкращенията (или кратките имена), използвани в **AAPS**. Тук можете да разберете например какво означават термините ISF или TT.


 ### Искате да започнете с **AAPS**? Прочетете повече за **AAPS** във [Въведение в APS и AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
Безопасността на **AAPS** зависи от функциите за безопасност на вашия хардуер (телефон, помпа, CGM). Използвайте само напълно изправни инсулинова помпа и CGM, одобрени от FDA/CE. Не използвайте повредени, модифицирани или самостоятелно изработени инсулинови помпи или CGM приемници. Използвайте само оригинални консумативи (апликатори, канюли и резервоари за инсулин), одобрени от производителя за използване с вашата помпа и CGM. Използването на нетествани или модифицирани консумативи може да доведе до неточности и грешки в дозирането на инсулина, а това е значителен риск за потребителя. 

Не използвайте **AAPS**, ако приемате SGLT-2 инхибитори (глифлозини), тъй като те понижават нивата на кръвната захар. You increase the risk of diabetic ketoacidosis (DKA) due to reduced insulin delivery and hypoglycemia due to lowered blood sugar levels. 
```

```{admonition} Disclaimer
:class: note

- Цялата информация и целият код, описани тук, са само с информационна и образователна цел. Използвайте [Nightscout](https://nightscout.github.io/) и **AAPS** на свой собствен риск и не използвайте информацията или кода, за да вземате медицински решения. Nightscout в момента не се опитва да спазва изискванията за поверителност на HIPAA. 
- Кодът от github.com се използва без каквато и да е гаранция или официална поддръжка. Моля, прегледайте файла LICENSE в това хранилище за подробности.
- Всички имена на продукти и компании, търговски марки, марки за услуги, регистрирани търговски марки и регистрирани марки за услуги са собственост на съответните им притежатели. Те се използват само с информационна цел и не означават, че има връзка с тях или одобрение от тяхна страна.

**AAPS** няма връзка със следните компании и не е одобрен от тях: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) или [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Индекс на документацията на AAPS

```{toctree}
:caption: Използване на тази документация

Смяна на езика и версията <./NavigateDoc/ChangeLanguageVersion.md>
Търсене в документацията <./NavigateDoc/SearchDoc.md>
Актуализации и промени в документацията <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Първи стъпки

Въведение в APS и AAPS <./Getting-Started/Introduction.md>
Подготовка за започване с AAPS <./Getting-Started/PreparingForAaps.md>
Преглед на компонентите <./Getting-Started/ComponentOverview.md>
- Съвместими помпи <./Getting-Started/CompatiblePumps.md>
- Съвместими CGM <./Getting-Started/CompatiblesCgms.md>
- Телефони  <./Getting-Started/Phones.md>
- Смарт часовници и AAPS  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Компилиране на приложението

Отделен профил в Google за AAPS (по избор) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Компилиране на AAPS <./SettingUpAaps/BuildingAaps.md>
- Компилиране в браузъра <./SettingUpAaps/BrowserBuild.md>
- Компилиране с Android Studio <./SettingUpAaps/ComputerBuild.md>
- Инструкции за компилиране от командния ред <./SettingUpAaps/CLIBuild.md>
Прехвърляне и инсталиране на AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Настройка на сървъра за отчети

Настройка на сървъра за отчети <./SettingUpAaps/SettingUpTheReportingServer.md>
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
:caption: 5) Ежедневие с AAPS

Екраните на AAPS <./DailyLifeWithAaps/AapsScreens.md>
Основни функции на AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Калкулиране на COB <./DailyLifeWithAaps/CobCalculation.md>
Определяне на чувствителност <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Динамично ISF <./DailyLifeWithAaps/DynamicISF.md>
Смяна на профил и процент на профила <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Временни цели <./DailyLifeWithAaps/TempTargets.md>
Удължени въглехидрати / „eCarbs“ <./DailyLifeWithAaps/ExtendedCarbs.md>
Бързи действия (QuickWizard) – болуси с едно докосване <./DailyLifeWithAaps/QuickWizards.md>
Сценарии (готови настройки за ситуации) <./DailyLifeWithAaps/Scenes.md>
Автоматизация <./DailyLifeWithAaps/Automations.md>
QuickLaunch (лента с бързи бутони на главния екран) <./DailyLifeWithAaps/QuickLaunch.md>
Уиджети за началния екран <./DailyLifeWithAaps/Widgets.md>
Храна (вашата база данни с храни) <./DailyLifeWithAaps/Food.md>
Глобално търсене <./DailyLifeWithAaps/GlobalSearch.md>
Преглед на данните <./Maintenance/Reviewing.md>
AAPS за деца <./DailyLifeWithAaps/AapsForChildren.md>
Помпи и игли <./DailyLifeWithAaps/PumpsAndCannulas.md>
Смяна на часовата зона и лятно часово време <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Дистанционни функции на AAPS

Дистанционно наблюдение <./RemoteFeatures/RemoteMonitoring.md>
Следене на AAPS (без взаимодействие със системата AAPS) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Дистанционно управление на AAPS <./RemoteFeatures/RemoteControl.md>
Приложението AAPSClient <./RemoteFeatures/AapsClient.md>
Контрол главен ↔ клиент <./RemoteFeatures/ClientMasterControl.md>
SMS команди <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Смарт часовници с Wear OS

Компилиране на приложението Wear AAPS <./WearOS/BuildingAapsWearOS.md>
Настройване на AAPS на часовник с Wear OS <./WearOS/WearOsSmartwatch.md>
Управление на AAPS чрез смарт часовник с Wear OS <./RemoteFeatures/RemoteControlWearOS.md>
Справочник за персонализирани циферблати <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Място за обмен на персонализирани циферблати <./ExchangeSiteCustomWatchfaces/index.md>

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
:caption: 9) Помощ и отстраняване на неизправности

Къде мога да получа помощ? <./GettingHelp/WhereCanIGetHelp.md>
Отстраняване на неизправности <./GettingHelp/GeneralTroubleshooting.md>
- Отстраняване на неизправности с Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Отстраняване на неизправности с NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Отстраняване на неизправности в Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Отстраняване на неизправности при компилиране в браузъра <./GettingHelp/BrowserBuildTroubleshooting.md>
- Преинсталиране на AAPS с ново хранилище за ключове <./GettingHelp/ReinstallAaps.md>
- Достъп до лог файловете <./GettingHelp/AccessingLogFiles.md>
Често задавани въпроси <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Разширени опции на AAPS

Напълно затворен кръг <./AdvancedOptions/FullClosedLoop.md>
Настройване на профила в AAPS <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Концентрация на инсулина <./AdvancedOptions/InsulinConcentration.md>
Клон за разработка <./AdvancedOptions/DevBranch.md>
Компилиране в браузъра: cherry-pick на къмит <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Как да подкрепите AAPS

Как да помогнете на AAPS <./SupportingAaps/HowCanIHelp.md>
Как да редактирате документацията <./SupportingAaps/HowToEditTheDocs.md>
Как да превеждате текстовете за приложението AAPS или документацията <./SupportingAaps/Translations.md>
Състояние на превода на приложението и документацията <./SupportingAaps/StateOfTranslations.md>
Качване на данни в Open Humans <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Ресурси

Речник <./UsefulLinks/Glossary.md>
Полезни материали за четене преди да започнете <./UsefulLinks/BackgroundReading.md>
За лекари – общо въведение и ръководство за AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
