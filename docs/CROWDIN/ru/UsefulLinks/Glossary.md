# Глоссарий

**AAPS** = AndroidAPS название приложения на Андроиде. 

**AAPSClient** = the follower app for caregivers. On a follower phone it follows a user’s **AAPS** through the user’s **Nightscout** site and, once paired with the **AAPS** phone, controls it remotely. Not to be confused with **NSClient**. Further info → [Wiki - 'The AAPSClient app'](../RemoteFeatures/AapsClient.md) and [Master ↔ Client control](#client-master-control).

**Activity** = Insulin activity, representing the speed of decay of IOB. See [Wiki - 'DIA'](#Config-Builder-insulin-dia) and the related **BGI**.

**AID** = Automated Insulin Delivery. The term generally used in clinical practice and research for a system which automatically adjusts insulin delivery using **CGM** data. **APS** and **closed loop** mean the same thing → see also **OS-AID**.

**APS** = Artificial Pancreas System → see also **AID**.

**AMA** = Advanced Meal Assist, продвинутый помощник приема пищи. Алгоритм, который позволяет **AAPS** увеличивать базал после приема пищи более агрессивно. Further info → [Wiki - 'Advanced Meal Assist (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** = used within **DynamicISF** and is a value set within a user's **Settings** between 1% and 300%. Он действует как множитель суточной дозы **TDD**. See [Wiki - DynamicISF adjustment factor](#dyn-isf-adjustment-factor)

**Android Auto** = система, которая показывает некоторые функции смартфона Android, в том числе **AAPS**, на дисплее автомобиля. Further info → [Wiki - 'android auto'](../RemoteFeatures/AndroidAuto.md).

**APK, апк** = Android application Package. Установочный файл приложения для андроида. Further info → [Wiki - 'Building APK'](../SettingUpAaps/BuildingAaps.md).

**Autosens** = calculation of sensitivity to insulin over a 24-hour and an 8-hour window etc. Further info → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = cloud computing platform to host **Nightscout** web app → see also **Nightscout**.

**BAT** = status light for low pump battery, shown in the status row of **AAPS'** main screen → see also **CAN** / **RES** / **SEN**.

**BG, ГК, СК** = глюкоза крови, гликемия.

**BGI** = воздействие на глюкозу в крови. Показывает, насколько **ГК** «должна» подниматься или падать только на основании активности инсулина.

**BG source** = An AAPS setting for configuring the source for blood glucose data. See [Wiki - BG Source](#Config-Builder-bg-source)

**Bridge, Трансмиттер** = дополнительное устройство, которое превращает **FGM** в **CGM**.

**BR, БС** = Базальная скорость. Количество инсулина в заданном отрезке времени, которое позволяет **ГК** оставаться стабильной, ровной. → см. так же **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (самостоятельно собранное приложение Dexcom). Способ собрать собственное приложение Dexcom для чтения данных сенсора Dexcom G6.

**CAGE** = Cannula AGE (возраст катетера). Displayed on **AAPS'** main screen and in Nightscout, based on the user's **Prime/Fill** careportal entries → see also **Nightscout**.

**CAN** = status light for overdue cannula change, shown in the status row of **AAPS'** main screen → see also **BAT** / **RES** / **SEN**.

**CGM, НМГ** = Непрерывный монитор глюкозы → см. также **FGM, ФМГ**.

**Closed Loop** = a closed loop system which makes automatic adjustments to the user’s basal delivery based on an **AAPS’s** algorithm and the user’s **Profile** settings without requiring the user’s approval. Further info → [Wiki - 'closed loop'](#KeyAapsFeatures-ClosedLoop) and see also **HCL** / **FCL**.

**COB** = Активные углеводы. Количество углеводов, которое еще не было усвоено организмом пользователя → см. также IOB.

**CSF** = Фактор чувствительности к углеводам. Т.е. на сколько возрастает **ГК** от 1 грамма усвоенного углевода.

**DIA** = Длительность активности инсулина. Further info → [Wiki - 'DIA'](#Config-Builder-insulin-dia) and see also → [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Saving Time. See [Wiki - Timezone Change and Daylight Saving](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (or DynISF)** = a feature within **AAPS** that adapts the insulin sensitivity factor (**ISF**) dynamically based on the user’s **TDD** and **BG**.

**eCarbs** = растянутые углеводы. Carbs split up over several hours (e.g. to cover fat/protein), which lets **AAPS** spread the insulin like an extended bolus. Further info → [Wiki - 'Extended Carbs'](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop. A loop which needs no mealtime input from the user: no carb counting and no meal bolus. Further info → [Wiki - 'full closed loop'](../AdvancedOptions/FullClosedLoop.md) and see also **HCL**.

**FGM** = Flash Glucose Monitor such as the Abbott Freestyle Libre. Further info → [Wiki - 'BG source'](#Config-Builder-bg-source) and see also 'CGM'.

**git** = a tool used to store and download the **AAPS’** source code.

**GitHub** = a web-based service that hosts the **AAPS** source code and its version control (tracking changes in files and coordinating work on them, especially for teams), and can also build the app. It is also necessary for **APK** updates. Further info → [Wiki - 'update APK'](../Maintenance/UpdateToNewVersion.md).

**Glimp** = an app to collect values from Freestyle Libre.

**HCL (or Hybrid Closed Loop)** = a loop which automates insulin delivery between meals, but still requires the user to bolus for meals. Nearly every system in everyday use, including **AAPS**, is a hybrid closed loop → see also **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio. Note that this is conventionally g/U despite the acronym suggesting inverse.

**IOB** = Активный инсулин (~ инсулин на борту). Активный инсулин, находящийся в организме. See [Wiki - Insulin on Board](#aaps-screens-iob)

**ISF, ФЧИ** = Фактор или коэффициент чувствительности к инсулину. На сколько ожидается снижение ГК от 1 единицы инсулина. Unit is either mg/dL/U or mmol/L/U. These are not equivalent without a conversion!

**Keystore (or JKS)** = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your **AAPS'** build (and rebuild).

**LGS, ЛГС** = Приостановка на низкой ГК. See [Wiki - Low Glucose Suspend](#KeyAapsFeatures-LGS)

**LineageOS** = бесплатная операционная система с открытым исходным кодом для смартфонов и других устройств. When using Accu-Chek Combo see [Wiki - Combo pump](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Файлы журналов** = записи действий пользователя, которые делает **AAPS** (полезны для поиска и устранения неполадок и ошибок). Further info → [Wiki - 'log files'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = максимальное значение IOB. Это функция безопасности, которая не дает **AAPS** подать больше инсулина, чем указано в настройках пользователя. Further info → [Wiki - 'Maximum total IOB OpenAPS can’t go over'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = функция безопасности, которая указывает скорость списания углеводов для случая, когда эта скорость не может быть высчитана на основании изменения показаний ГК. Further info → [Wiki - 'min_5m_carbimpact'](#Preferences-min_5m_carbimpact).

**Nightscout** = проект с открытым исходным кодом для доступа к данным **CGM** и отчетов по ним. The central data hub for the user’s **AAPS** data and can generate reports to view the user’s historical **Nightscout** data, such as expected HbA1c, time in range or search for patterns in the data via percentile chart etc.

**Nightscout** → см. также **Nightscout Reporter**. Это особенно полезно для родителей, которые следят за лечением диабета у своего ребенка.

**Nightscout Reporter Tool** = инструмент, который создает отчеты в формате PDF из данных веб-приложения Nightscout. См. «Nightscout Reporter», «NS Reporter» в Facebook.

**NSClient** (**NSClientV3**) = the **AAPS** plugin that synchronizes data with **Nightscout** (**Configuration** → **Communication**). It is not the same as **AAPSClient**, the follower app. Further info → [Wiki - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, the predecessor project and basis of AAPS.

**Система открытого цикла** = функция **AAPS**, которая рекомендует изменения; пользователь должен выполнить их вручную в **AAPS**. Further info → [Wiki - 'Open Loop'](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = определение чувствительности и «reference design implementation version 0/1» (эталонная реализация, версия 0/1). It is the key algorithm behind OpenAPS. Further info → [Wiki - 'sensitivity detection'](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery. An **AID** system built from open-source software, such as **AAPS**, **OpenAPS**, Loop or Trio. These systems are not formally approved by health bodies (FDA, NHS etc.) → see also **AID**.

**Время пика** = время максимального действия введенного инсулина. Further info → [Wiki - 'Duration of insulin action (DIA) and peak'](#Config-Builder-insulin-dia).

**PH** = Pump History (история помпы). This can be accessed in **AAPS’** treatments history: open the **menu** (☰) at the top left of the main screen and select **Treatments**.

**Прогнозы** = прогнозы **ГК** на будущее на основе разных расчетов. Further info → [Wiki - 'prediction lines'](#aaps-screens-prediction-lines).

**Профиль** = основные настройки терапии пользователя (базальная скорость, **DIA**, **IC**, **ISF**, целевое значение **ГК**). **AAPS** only uses profiles created within **AAPS** (**Manage** → **Profile**), but **Nightscout** **Profiles** can be copied (synchronised) to **AAPS**. Further info → [Wiki - 'Your AAPS profile'](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** = (temporary) switch of the user’s **Profile** to a different **Profile** saved within **AAPS**.

**Profile Percentage** = a (temporary) percentage increase or decrease applied to a user’s **Profile** for a selected time period.

**RES** = status light for overdue reservoir change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **SEN**.

**RileyLink** = open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz (used for old Medtronic pumps) or 433MHz (used for Omnipod Eros pumps) wireless communication.

**SAGE** = Sensor AGE (возраст сенсора). This is displayed on the main screen of **AAPS** and in **Nightscout**, based on the user's **Sensor Insert** careportal entries → see also **Nightscout**.

**SEN** = status light for overdue sensor change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **RES**.

**Sensitivity detection** = calculation of sensitivity to insulin as a result of exercise, hormones etc. see also → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Шум сенсора** = так называют нестабильные показания **CGM**, из-за которых значения **ГК** «скачут». Further info → [Wiki - 'Smoothing blood glucose data'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus (супер микроболюс). Функция **AAPS** для более быстрой подачи инсулина, чтобы скорректировать **ГК**. Further info → [Wiki - '**SMB**'](#Open-APS-features-super-micro-bolus-smb) and see also **UAM**.

**Суперболюс** = перенос базального инсулина в болюс для более быстрой коррекции **ГК**.

**TBB** = total base basal (сумма базальной скорости за 24 часа) → см. также **TBR** / **TDD**.

**TBR** = temporary basal rate → see also **TBB** / **TDD**.

**TDD** = total daily dose, суммарная суточная доза (болюс + базал за сутки) → см. также **TBB** / **TBR**.

**TT** = temporary target: temporary increase/decrease of the user’s **BG** target (range) e.g. for eating or sport activities. Further info → [Wiki - 'temp targets'](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (непредвиденный прием пищи). Обнаружение значительного роста **ГК** из-за еды, адреналина или других влияний и попытка это скорректировать. Further info → [Wiki - 'UAM'](#enable-uam) and see also **SMB**.

**Virtual pump** = an **AAPS** feature which allows the user to try **AAPS’** functions, or lets PWD whose pump model has no **AAPS** driver use **AAPS** as an open loop → see also **Open Loop**.

**Обои** = фоновое изображение **AAPS**, см. страницу о телефонах.

**xDrip** = open source software to read **CGM** systems.

**Zero-temp** = временная базальная скорость 0% (базальный инсулин не подается).

→ см. также [документацию OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)