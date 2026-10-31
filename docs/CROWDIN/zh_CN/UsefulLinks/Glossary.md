# 术语表

**AAPS** = AndroidAPS 是 Android 应用程序的名称。

**AAPSClient** = the follower app for caregivers. On a follower phone it follows a user’s **AAPS** through the user’s **Nightscout** site and, once paired with the **AAPS** phone, controls it remotely. Not to be confused with **NSClient**. Further info → [Wiki - 'The AAPSClient app'](../RemoteFeatures/AapsClient.md) and [Master ↔ Client control](#client-master-control).

**Activity** = Insulin activity, representing the speed of decay of IOB. See [Wiki - 'DIA'](#Config-Builder-insulin-dia) and the related **BGI**.

**AID** = Automated Insulin Delivery. The term generally used in clinical practice and research for a system which automatically adjusts insulin delivery using **CGM** data. **APS** and **closed loop** mean the same thing → see also **OS-AID**.

**APS** = Artificial Pancreas System → see also **AID**.

**AMA** = 高级膳食助理。一种算法，允许**AAPS**在餐后大剂量注射后更积极地增加用户的基础率。 Further info → [Wiki - 'Advanced Meal Assist (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** = used within **DynamicISF** and is a value set within a user's **Settings** between 1% and 300%. 这相当于对**总日剂量(TDD)**值设置了一个乘数因子。 See [Wiki - DynamicISF adjustment factor](#dyn-isf-adjustment-factor)

**Android Auto** = 一种车载系统，可在汽车显示屏上运行Android智能手机的特定功能（包括**AAPS**）。 Further info → [Wiki - 'android auto'](../RemoteFeatures/AndroidAuto.md).

**APK** = Android 应用程序包。一个软件安装文件。 Further info → [Wiki - 'Building APK'](../SettingUpAaps/BuildingAaps.md).

**Autosens** = 计算 24 小时到 8 小时窗口之间的胰岛素敏感性等。 Further info → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = cloud computing platform to host **Nightscout** web app → see also **Nightscout**.

**BAT** = status light for low pump battery, shown in the status row of **AAPS'** main screen → see also **CAN** / **RES** / **SEN**.

**BG** = 血糖。

**BGI** = 血糖影响。**血糖(BG)**仅基于胰岛素作用"应当"升高或降低的程度。

**BG source** = An AAPS setting for configuring the source for blood glucose data. See [Wiki - BG Source](#Config-Builder-bg-source)

**桥接** = 一个额外的设备，将 **FGM** 转换为 **CGM**。

**BR** = 基础率。基础率 = 在特定时间段内维持**血糖(BG)**稳定水平所需的胰岛素量。 → 参见 **IC** / **ISF**。

**BYODA** = 构建您自己的 Dexcom 应用。 一种生成用户自有 Dexcom 应用程序的方式，用于读取 Dexcom G6 的传感器数据。

**CAGE** = 导管年龄。 Displayed on **AAPS'** main screen and in Nightscout, based on the user's **Prime/Fill** careportal entries → see also **Nightscout**.

**CAN** = status light for overdue cannula change, shown in the status row of **AAPS'** main screen → see also **BAT** / **RES** / **SEN**.

**CGM** = 连续血糖监测器 → 参见 **FGM**。

**闭环** = 一个闭环系统，根据 **AAPS** 的算法和用户的 **配置文件** 设置，自动调整用户的基础胰岛素输送，无需用户批准。 Further info → Wiki - 'closed loop' and see also **HCL** / **FCL**.

**COB** = 活性碳水化合物量。这是用户当前可供消化的碳水化合物量 → 参见 IOB。

**CSF** = 碳水系数。即：用户的 **BG** 在吸收 1 克碳水化合物后会增加多少。

**DIA** = 胰岛素作用持续时间 Further info → [Wiki - 'DIA'](#Config-Builder-insulin-dia) and see also → [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Savings Time. See [Wiki - Timezone Change and Daylight Saving](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (or DynISF)** = a feature within **AAPS** that adapts the insulin sensitivity factor (**ISF**) dynamically based on the user’s **TDD** and **BG**.

**缓释碳水化合物(eCarbs)** = 延时释放的碳水化合物(extended Carbs)。 Carbs split up over several hours (e.g. to cover fat/protein), which lets **AAPS** spread the insulin like an extended bolus. Further info → [Wiki - 'Extended Carbs'](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop. A loop which needs no mealtime input from the user: no carb counting and no meal bolus. Further info → Wiki - 'full closed loop' and see also **HCL**.

**FGM** = Flash Glucose Monitor such as the Abbott Freestyle Libre. 更多信息 → 维基 - 'BG 来源'，另见 'CGM'。

**git** = 一种用于存储和下载 **AAPS** 源代码的工具。

**GitHub** = a web-based service that hosts the **AAPS** source code and its version control (tracking changes in files and coordinating work on them, especially for teams), and can also build the app. It is also necessary for **APK** updates. 更多信息 → 维基 - '更新 APK'。

**Glimp** = an app to collect values from Freestyle Libre.

**HCL (or Hybrid Closed Loop)** = a loop which automates insulin delivery between meals, but still requires the user to bolus for meals. Nearly every system in everyday use, including **AAPS**, is a hybrid closed loop → see also **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio. Note that this is conventionally g/U despite the acronym suggesting inverse.

**IOB** = 活性胰岛素，Insulin On Board。用户体内的活性胰岛素。 See [Wiki - Insulin on Board](#aaps-screens-iob)

**ISF** = 胰岛素敏感性因子。一单位胰岛素预计会减少的血糖量。 Unit is either mg/dL/U or mmol/L/U. These are not equivalent without a conversion!

**Keystore (or JKS)** = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your **AAPS'** build (and rebuild).

**LGS** = 低血糖暂停。 See [Wiki - Low Glucose Suspend](#KeyAapsFeatures-LGS)

**LineageOS** = 用于智能手机等设备的免费开源操作系统。 When using Accu-Chek Combo see [Wiki - Combo pump](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Log 文件** = **AAPS’** 记录用户操作的文件（用于故障排除和调试）。 Further info → [Wiki - 'log files'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = 活性胰岛素总量上限。这是一项安全功能，可防止**AAPS**超出用户设定值输送胰岛素。 Further info → [Wiki - 'Maximum total IOB OpenAPS can’t go over'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = 安全功能参数，当系统无法根据使用者的血糖反应确定碳水化合物吸收率时，该参数将作为默认碳水化合物衰减率的计算基准。 Further info → [Wiki - 'Preferences'](#Preferences-min_5m_carbimpact).

**Nightscout** = 开源项目，用于访问和报告 **CGM** 数据。 The central data hub for the user’s **AAPS** data and can generate reports to view the user’s historical **Nightscout** data, such as expected HbA1c, time in range or search for patterns in the data via percentile chart etc.

**Nightscout** → 另见 **Nightscout Reporter**。这对于跟踪儿童糖尿病管理的父母特别有用。

**Nightscout Reporter 工具** = 从 Nightscout 网页应用程序数据生成 PDF 报告的工具。参见 'Nightscout Reporter'，'NS Reporter' @ Facebook。

**NSClient** (**NSClientV3**) = the **AAPS** plugin that synchronizes data with **Nightscout** (**Configuration** → **Communication**). It is not the same as **AAPSClient**, the follower app. Further info → [Wiki - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, the predecessor project and basis of AAPS.

**开环系统** = **AAPS**的一项功能，它会推荐调整方案，但需要用户在**AAPS**上手动执行这些调整。 Further info → [Wiki - 'Open Loop'](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = 敏感性检测及"参考设计实现版本0/1"。它是 OpenAPS 背后的关键算法 维基 - 敏感性检测

**OS-AID** = Open-Source Automated Insulin Delivery. An **AID** system built from open-source software, such as **AAPS**, **OpenAPS**, Loop or Trio. These systems are not formally approved by health bodies (FDA, NHS etc.) → see also **AID**.

**峰值时间** = 胰岛素的最大效应时间。 Further info → [Wiki - 'Duration of insulin action (DIA) and peak'](#Config-Builder-insulin-dia).

**PH** = 泵历史记录。 This can be accessed in **AAPS’** treatments history: open the **menu** (☰) at the top left of the main screen and select **Treatments**.

**Predictions** = 基于不同计算方法预测未来的**BG**值。 Further info → [Wiki - 'prediction lines'](#aaps-screens-prediction-lines).

**Profile** = 用户的基本治疗设置（基础率、**DIA**、**IC**、**ISF**、**BG**目标）。 **AAPS** only uses profiles created within **AAPS** (**Manage** → **Profile**), but **Nightscout** **Profiles** can be copied (synchronised) to **AAPS**. Further info → [Wiki - 'Your AAPS profile'](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** = (temporary) switch of the user’s **Profile** to a different **Profile** saved within **AAPS**.

**Profile Percentage** = a (temporary) percentage increase or decrease applied to a user’s **Profile** for a selected time period.

**RES** = status light for overdue reservoir change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **SEN**.

**RileyLink** = open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz (used for old Medtronic pumps) or 433MHz (used for Omnipod Eros pumps) wireless communication.

**SAGE** = 传感器使用时间。 This is displayed on the main screen of **AAPS** and in **Nightscout**, based on the user's **Sensor Insert** careportal entries → see also **Nightscout**.

**SEN** = status light for overdue sensor change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **RES**.

**Sensitivity detection** = calculation of sensitivity to insulin as a result of exercise, hormones etc. see also → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensor noise** = 描述**CGM**读取值不稳定导致**BG**值“跳动”的术语。 Further info → [Wiki - 'Smoothing blood glucose data'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = 超微大剂量（Super Micro Bolus）。 **AAPS**的一项功能，用于快速注射胰岛素以调整**BG**。 Further info → [Wiki - '**SMB**'](#Open-APS-features-super-micro-bolus-smb) and see also **UAM**.

**Super bolus** = 超级大剂量，将基础胰岛素调整为餐前胰岛素以更快速地调整**BG**。

**TBB** = 总基础胰岛素（24小时基础率总和） → 参见**TBR** / **TDD**。

**TBR** = 暂时基础率 → 参见**TBB** / **TDD**。

**TDD** = 每日总剂量（每日餐前胰岛素+基础胰岛素） → 参见**TBB** / **TBR**。

**TT** = 暂时目标，暂时增加/减少用户的**BG**目标（范围），例如用于进食或运动。 Further info → [Wiki - 'temp targets'](../DailyLifeWithAaps/TempTargets.md).

**UAM** = 未报告的进食。检测因饮食、肾上腺素或其他因素导致的**血糖**水平显著升高，并尝试对此进行调整。 Further info → [Wiki - 'UAM'](#enable-uam) and see also **SMB**.

**Virtual pump，虚拟泵** = **AAPS**的一项功能，允许用户试用**AAPS**的功能，或供使用无**AAPS**闭环驱动泵型的糖尿病患者使用 → 另见**开环系统**。

**Wallpaper** = **AAPS**背景图片，参见手机页面。

**xDrip** = open source software to read **CGM** systems.

**Zero-temp** = 暂时基础率为0%（无基础胰岛素注射）。

→ 参见[OpenAPS文档](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)