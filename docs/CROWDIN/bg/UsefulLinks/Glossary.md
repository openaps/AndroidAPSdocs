# Речник

**AAPS** = AndroidAPS е името на приложението за Android.

**AAPSClient** = приложението за последователи (болногледачи / родители). На телефона на последователя то следи **AAPS** на потребителя чрез неговия сайт **Nightscout**, а след свързване с телефона с **AAPS** го управлява дистанционно. Да не се бърка с **NSClient**. Повече информация → [Wiki - „Приложението AAPSClient“](../RemoteFeatures/AapsClient.md) и [Контрол главен ↔ клиент](#client-master-control).

**Активност** (Activity) = активност на инсулина; показва скоростта, с която намалява IOB. Вижте [Wiki - „DIA“](#Config-Builder-insulin-dia) и свързаното с него **BGI**.

**AID** = Automated Insulin Delivery (автоматизирано подаване на инсулин). Терминът, който обикновено се използва в клиничната практика и в научните изследвания за система, която автоматично променя подаването на инсулин въз основа на данни от **CGM**. **APS** и **затворен кръг** означават едно и също → вижте също **OS-AID**.

**APS** = Artificial Pancreas System (система за изкуствен панкреас) → вижте също **AID**.

**AMA** = Advanced Meal Assist (разширена помощ при хранене). Алгоритъм, който позволява на **AAPS** да увеличава базала на потребителя по-агресивно след болус за хранене. Повече информация → [Wiki - „Advanced Meal Assist (AMA)“](#Open-APS-features-advanced-meal-assist-ama).

**Фактор за настройка** (Adjustment Factor) = използва се в **DynamicISF**. Това е стойност между 1 % и 300 %, която потребителят задава в **Настройки**. Той действа като множител на стойността на **TDD**. Вижте [Wiki - Фактор за настройка на DynamicISF](#dyn-isf-adjustment-factor)

**Android Auto** = система, която показва определени функции на смартфон с Android, включително **AAPS**, на дисплея на автомобила. Повече информация → [Wiki - „Android Auto“](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (пакет на приложение за Android). Инсталационен файл на софтуер. Повече информация → [Wiki - „Компилиране на APK“](../SettingUpAaps/BuildingAaps.md).

**Autosens** = calculation of sensitivity to insulin over a 24-hour and an 8-hour window etc. Повече информация → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = cloud computing platform to host **Nightscout** web app → see also **Nightscout**.

**BAT** = индикатор за изтощена батерия на помпата, показан в реда за статус на главния екран на **AAPS** → вижте също **CAN** / **RES** / **SEN**.

**BG** = кръвна захар (КЗ).

**BGI** = blood glucose impact (въздействие върху кръвната захар). Степента, в която **КЗ** „би трябвало“ да се повиши или да се понижи само въз основа на действието на инсулина.

**Източник на КЗ** (BG source) = настройка на AAPS, в която се избира източникът на данни за кръвната захар. Вижте [Wiki - Източник на КЗ](#Config-Builder-bg-source)

**Bridge** = допълнително устройство, което превръща **FGM** в **CGM**.

**BR** = Basal Rate (базална доза). Количеството инсулин за даден период от време, което поддържа **КЗ** на стабилно ниво. → вижте също **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (създайте собствено приложение Dexcom). Начин потребителят сам да създаде собствено приложение Dexcom, което чете данните от сензора Dexcom G6.

**CAGE** = Cannula AGE (възраст на канюлата). Показва се на главния екран на **AAPS** и в Nightscout въз основа на записите **Смяна/Пълнене**, които потребителят въвежда в портала за лечения → вижте също **Nightscout**.

**CAN** = индикатор за просрочена смяна на канюлата, показан в реда за статус на главния екран на **AAPS** → вижте също **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (система за продължително наблюдение на глюкозата) → вижте също **FGM**.

**Closed Loop** = a closed loop system which makes automatic adjustments to the user’s basal delivery based on an **AAPS’s** algorithm and the user’s **Profile** settings without requiring the user’s approval. Further info → [Wiki - 'closed loop'](#KeyAapsFeatures-ClosedLoop) and see also **HCL** / **FCL**.

**COB** = Carbs On Board (активни въглехидрати). Това е количеството въглехидрати, които в момента още предстои да бъдат усвоени от организма на потребителя → вижте също IOB.

**CSF** = Carbs Sensitivity Factor (фактор на чувствителност към въглехидрати). т.е. с колко се повишава **КЗ** на потребителя при усвояване на 1 г въглехидрати.

**DIA** = Duration of Insulin Action (време на действие на инсулина). Повече информация → [Wiki - „DIA“](#Config-Builder-insulin-dia) и вижте също → [DIABETTECH - „DIA“](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Saving Time. Вижте [Wiki - Смяна на часовата зона и лятно часово време](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Динамично ISF (Dynamic ISF или DynISF)** = функция в **AAPS**, която динамично променя инсулиновата чувствителност (**ISF**) въз основа на **TDD** и **КЗ** на потребителя.

**eCarbs** = extended Carbs (удължени въглехидрати). Carbs split up over several hours (e.g. to cover fat/protein), which lets **AAPS** spread the insulin like an extended bolus. Повече информация → [Wiki - „Удължени въглехидрати“](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop (напълно затворен кръг). Кръг, при който потребителят не въвежда нищо за храненията: без броене на въглехидрати и без болус за хранене. Further info → [Wiki - 'full closed loop'](../AdvancedOptions/FullClosedLoop.md) and see also **HCL**.

**FGM** = Flash Glucose Monitor such as the Abbott Freestyle Libre. Further info → [Wiki - 'BG source'](#Config-Builder-bg-source) and see also 'CGM'.

**git** = a tool used to store and download the **AAPS’** source code.

**GitHub** = a web-based service that hosts the **AAPS** source code and its version control (tracking changes in files and coordinating work on them, especially for teams), and can also build the app. It is also necessary for **APK** updates. Further info → [Wiki - 'update APK'](../Maintenance/UpdateToNewVersion.md).

**Glimp** = an app to collect values from Freestyle Libre.

**HCL (Hybrid Closed Loop – хибриден затворен кръг)** = кръг, който автоматизира подаването на инсулин между храненията, но потребителят все още трябва да прави болус за храненията. Почти всяка система в ежедневна употреба, включително **AAPS**, е хибриден затворен кръг → вижте също **FCL** / **Затворен кръг**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio (коефициент инсулин/въглехидрати). Обърнете внимание: по традиция той се изразява в г/U (грамове въглехидрати на 1 единица инсулин), въпреки че съкращението подсказва обратното.

**IOB** = Insulin On Board (активен инсулин). Инсулинът, който е активен в тялото на потребителя. Вижте [Wiki - Активен инсулин](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor (инсулинова чувствителност). Очакваното понижение на КЗ в резултат на една единица инсулин. Единицата е mg/dl/U или mmol/l/U. Те не са равностойни без преобразуване!

**Keystore (or JKS)** = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your **AAPS'** build (and rebuild).

**LGS** = Low Glucose Suspend (спиране на базала при ниска КЗ). Вижте [Wiki - Спиране на базала при ниска КЗ](#KeyAapsFeatures-LGS)

**LineageOS** = безплатна операционна система с отворен код за смартфони и др. Ако използвате Accu-Chek Combo, вижте [Wiki - Помпа Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Log файлове** (Log files) = записи на **AAPS** за действията на потребителя (полезни при отстраняване на неизправности и грешки). Повече информация → [Wiki - „Log файлове“](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = максимален общ IOB. Това е функция за безопасност. Тя не позволява на **AAPS** да подава повече инсулин, отколкото позволяват настройките на потребителя. Повече информация → [Wiki - „Максимален общ IOB, над който OpenAPS не може да премине“](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = функция за безопасност: изчисляване на стандартното усвояване на въглехидрати, когато усвояването им не може да се определи по реакцията на кръвната захар на потребителя. Further info → [Wiki - 'min_5m_carbimpact'](#Preferences-min_5m_carbimpact).

**Nightscout** = проект с отворен код за достъп до данните от **CGM** и за отчети за тях. The central data hub for the user’s **AAPS** data and can generate reports to view the user’s historical **Nightscout** data, such as expected HbA1c, time in range or search for patterns in the data via percentile chart etc.

**Nightscout** → вижте също **Nightscout Reporter**. Това е особено полезно за родители, които следят лечението на диабета на детето си.

**Nightscout Reporter Tool** = инструмент, който създава PDF отчети от данните на уеб приложението Nightscout. Вижте „Nightscout Reporter“, „NS Reporter“ във Facebook.

**NSClient** (**NSClientV3**) = плъгинът на **AAPS**, който синхронизира данните с **Nightscout** (**Конфигурация** → **Комуникация**). Не е същото като **AAPSClient** – приложението за последователи. Повече информация → [Wiki - „NSClient“](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System (отворена система за изкуствен панкреас) – предшестващият проект и основата на AAPS.

**Отворен кръг** (Open Loop system) = функция на **AAPS**, която препоръчва промени, но потребителят трябва да ги извърши ръчно в **AAPS**. Повече информация → [Wiki - „Отворен кръг“](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = определяне на чувствителност и „reference design implementation version 0/1“ (референтна реализация, версия 0/1). It is the key algorithm behind OpenAPS. Further info → [Wiki - 'sensitivity detection'](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery (автоматизирано подаване на инсулин с отворен код). Система **AID**, изградена от софтуер с отворен код, например **AAPS**, **OpenAPS**, Loop или Trio. Тези системи не са официално одобрени от здравните органи (FDA, NHS и др.) → вижте също **AID**.

**Време на пика** (Peak time) = времето, в което подаденият инсулин има максимален ефект. Повече информация → [Wiki - „Време на действие на инсулина (DIA) и пик“](#Config-Builder-insulin-dia).

**PH** = Pump History (история на помпата). Можете да я видите в историята на леченията в **AAPS**: отворете **менюто** (☰) горе вляво на главния екран и изберете **Лечения**.

**Предсказвания** (Predictions) = предсказвания за **КЗ** в бъдеще въз основа на различни изчисления. Повече информация → [Wiki - „линии на предсказване“](#aaps-screens-prediction-lines).

**Профил** (Profile) = основните настройки за лечение на потребителя (базална доза, **DIA**, **IC**, **ISF**, целева **КЗ**). **AAPS** използва само профили, създадени в **AAPS** (**Управление** → **Профил**), но **профилите** от **Nightscout** могат да се копират (синхронизират) в **AAPS**. Повече информация → [Wiki - „Вашият профил в AAPS“](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** = (temporary) switch of the user’s **Profile** to a different **Profile** saved within **AAPS**.

**Profile Percentage** = a (temporary) percentage increase or decrease applied to a user’s **Profile** for a selected time period.

**RES** = индикатор за просрочена смяна на резервоара, показан в реда за статус на главния екран на **AAPS** → вижте също **BAT** / **CAN** / **SEN**.

**RileyLink** = open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz (used for old Medtronic pumps) or 433MHz (used for Omnipod Eros pumps) wireless communication.

**SAGE** = sensor age (възраст на сензора). Показва се на главния екран на **AAPS** и в **Nightscout** въз основа на записите **Поставяне на сензор**, които потребителят въвежда в портала за лечения → вижте също **Nightscout**.

**SEN** = индикатор за просрочена смяна на сензора, показан в реда за статус на главния екран на **AAPS** → вижте също **BAT** / **CAN** / **RES**.

**Sensitivity detection** = calculation of sensitivity to insulin as a result of exercise, hormones etc. вижте също → [DIABETTECH - „Autosens“](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Шум на сензора** (Sensor noise) = термин за нестабилни показания на **CGM**, които водят до „скачащи“ стойности на **КЗ**. Повече информация → [Wiki - „Изглаждане на данните за кръвната захар“](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus (супер микро болус). Функция на **AAPS** за по-бързо подаване на инсулин, за да се коригира **КЗ**. Повече информация → [Wiki - „**SMB**“](#Open-APS-features-super-micro-bolus-smb) и вижте също **UAM**.

**Суперболус** (Super bolus) = прехвърляне на базален инсулин към болуса за по-бързо коригиране на **КЗ**.

**TBB** = total base basal (общ базален инсулин – сумата от базалната доза за 24 часа) → вижте също **TBR** / **TDD**.

**TBR** = temporary basal rate → see also **TBB** / **TDD**.

**TDD** = total daily dose (обща дневна доза – болус + базал за един ден) → вижте също **TBB** / **TBR**.

**TT** = temporary target: temporary increase/decrease of the user’s **BG** target (range) e.g. for eating or sport activities. Повече информация → [Wiki - „Временни цели“](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (необявени хранения). Откриване на значително повишаване на **КЗ** заради хранене, адреналин или други влияния и опит то да бъде коригирано. Повече информация → [Wiki - „UAM“](#enable-uam) и вижте също **SMB**.

**Virtual pump** = an **AAPS** feature which allows the user to try **AAPS’** functions, or lets PWD whose pump model has no **AAPS** driver use **AAPS** as an open loop → see also **Open Loop**.

**Тапет** (Wallpaper) = фоново изображение на **AAPS**, вижте страницата „Телефони“.

**xDrip** = софтуер с отворен код за четене на данни от системи за **CGM**.

**Zero-temp** (нулев временен базал) = временна базална доза 0 % (без подаване на базален инсулин).

→ вижте също [документацията на OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)