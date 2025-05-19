# 术语表

**AAPS** = AndroidAPS 是 Android 应用程序的名称。

**AAPSClient**（或 **NSClient**） = 远程控制功能，护理人员可以通过跟随手机连接到用户的 **Nightscout** 网站来跟踪用户的 **AAPS**。 更多信息 → 维基 - 'NS Client'。 在 **AAPS** 中的目标学习程序提供逐步指导。 更多信息 → 维基 - '目标'。

**APS** = 人工胰腺系统，Artificial Pancreas System。

**AMA** = 高级膳食助理。 一种算法，允许**AAPS**在餐后大剂量注射后更积极地增加用户的基础率。 更多信息 → 维基 - 'AMA'。

**调整系数** = 用于**动态胰岛素敏感系数**功能，是用户在**偏好设置**中设定的1%至300%之间的数值。 这相当于对**总日剂量(TDD)**值设置了一个乘数因子。

- 将**调整系数**提高到100%以上会使**动态胰岛素敏感系数**更激进：**胰岛素敏感系数(ISF)**值会变小（即需要更多胰岛素来少量降低**血糖(BG)**水平）
- 将**调整系数**降至100%以下会使**动态胰岛素敏感系数**趋于保守：**胰岛素敏感系数(ISF)**值会增大（即需要更少胰岛素即可少量降低**血糖(BG)**水平）。

**Android Auto** = 一种车载系统，可在汽车显示屏上运行Android智能手机的特定功能（包括**AAPS**）。 更多信息 → 维基 - 'android auto'。

**APK** = Android 应用程序包。 一个软件安装文件。 更多信息 → 维基 - '构建 APK'。

**Autosens** = 计算 24 小时到 8 小时窗口之间的胰岛素敏感性等。 更多信息 → DIABETTECH - **Autosens**。

**Azure** = 云计算平台，用于托管 **Nightscout** 网页应用程序 Azure → 参见 **Nightscout**。

**BAT** = 在 **AAPS** 的主屏幕上显示低电量状态灯 **偏好设置**，截图 → 参见 **CAN** / **RES** / **SEN**。

**BG** = 血糖。

**BGI** = 血糖影响。 **血糖(BG)**仅基于胰岛素作用"应当"升高或降低的程度。

**血糖数据源** = 用户**血糖(BG)**值的来源，通过**BYODA**、**xDrip+**等系统集成软件从**连续血糖监测(CGM)**或**闪速葡萄糖监测(FGM)**设备获取。 更多信息 → 维基 - 'BG 来源'

**桥接** = 一个额外的设备，将 **FGM** 转换为 **CGM**。

**BR** = 基础率。 基础率 = 在特定时间段内维持**血糖(BG)**稳定水平所需的胰岛素量。 → 参见 **IC** / **ISF**。

**BYODA** = 构建您自己的 Dexcom 应用。 一种生成用户自有 Dexcom 应用程序的方式，用于读取 Dexcom G6 的传感器数据。

**CAGE** = 导管年龄。 在 **AAPS** 的主屏幕和 Nightscout 上显示，提供用户在操作标签/菜单中输入的信息 → 参见 **Nightscout**。

**CAN** = **AAPS**主屏幕上的"管路更换超期"状态指示灯（位于**偏好设置**中）→ 另请参阅**BAT**(电池)/**RES**(储药器)/**SEN**(传感器)状态指示。

**CGM** = 连续血糖监测器 → 参见 **FGM**。

**闭环** = 一个闭环系统，根据 **AAPS** 的算法和用户的 **配置文件** 设置，自动调整用户的基础胰岛素输送，无需用户批准。 更多信息 → 维基 - '闭环'。

**COB** = 活性碳水化合物量。 这是用户当前可供消化的碳水化合物量 → 参见 IOB。

**CSF** = 碳水系数。 即：用户的 **BG** 在吸收 1 克碳水化合物后会增加多少。

**DIA** = 胰岛素作用持续时间 更多信息 → 维基 - '胰岛素类型'，另见 → DIABETTECH - 'DIA'.

**DST** = 夏令时 维基 DST。

**动态胰岛素敏感系数（Dynamic ISF或DynISF）** = **AAPS**中的一项功能，可根据用户的以下因素动态调整胰岛素敏感系数(**ISF**)：

- **每日胰岛素总剂量（Total Daily Dose of insulin, TDD）**
- 当前及预测的**血糖(BG)**值。

**缓释碳水化合物(eCarbs)** = 延时释放的碳水化合物(extended Carbs)。 将碳水化合物分配至数小时摄入，用以匹配蛋白质吸收，并允许**AAPS**进行缓释大剂量输注。 Further info → Wiki - 'eCarbs', 'eCarbs use'.

**FGM** = Flash Glucose Monitor manufactured by Freestyle Libre. Further info → Wiki - 'BG source' and see also 'CGM'.

**git** = a tool used store and download the **AAPS’** source code.

**GitHub** = a web-based hosting service and build process for the **AAPS’** software version-control system for tracking changes in computer files and coordinating work on those files especially for teams. It is also necessary for **APK** updates. Further info → Wiki - 'update APK'.

**Glimp** = an app to collect values from Freestyle Libre Glimp.

**IC (or I:C)** = Insulin to Carb ratio. (i.e. how many carbs are covered by one unit of insulin?).

**IOB** = Insulin On Board. Insulin active in the user’s body.

**ISF** = Insulin Sensitivity Factor. The expected decrease in BG as a result of one unit of insulin.

**LGS** = Low Glucose Suspend. **AAPS** will reduce basal if **BG** is dropping and if **BG** is rising, then it will only increase basal if **IOB** is negative (from a previous **LGS**), otherwise basal rates will remain the same as the user’s selected **Profile**. The user may temporarily experience spikes following treated hypos without the ability to increase basal on the rebound. → see also objective 6.

**LineageOS** = free and open-source operating system for smartphones etc. (When using Accu-Chek Combo see Wiki - Combo pump).

**Log files** = **AAPS’** records of the user's actions (useful for troubleshooting and debugging). Further info → Wiki - 'log files'.

**maxIOB** = maximum total IOB. This is a safety feature and prevents **AAPS** delivering insulin over the user’s settings. Further info → Wiki - 'SMB'.

**min_5m_carbimpact** = safety feature that is a calculation of default carb decay when carb absorption cannot be determined based on the user’s blood’s reactions. This is a safety feature. Further info → Wiki - 'config builder'.

**Nightscout** = open source project to access and report **CGM** data. The central data hub for the user’ **AAPS** data and can generate reports to view the user’s historical **NIghtscout** data expected HbA1c, time in range) or search for patterns in the data via percentile chart etc.

**Nightscout** → see also **Nightscout Reporter**. This is particularly useful for parents following their child's diabetes management.

**Nightscout Reporter Tool** = a tool which generates PDFs reports from Nightscout web app data. See 'Nightscout Reporter', 'NS Reporter' @ Facebook.

**NSClient** ( or **‘AAPSClient’)** = see **AAPSClient**.

**OpenAPS** = Open Artificial Pancreas System.

**Open Loop system** = an **AAPS** feature that will recommend adjustments and which must be performed manually by the user on **AAPS**. Further info → Wiki - 'config builder'.

**Oref0 / Oref1** = sensitivity detection and "reference design implementation version 0/1". It is the key algorithm behind OpenAPS Wiki - sensitivity detection.

**Peak time** = time of maximum effect of insulin given. Further info → Wiki - 'config builder'.

**PH** = Pump History. This can be accessed in **AAPS’** treatments which are located on the 3 dot menu on the right side of **AAPS** main screen Screenshots.

**Predictions** = predictions for **BG** in the future based on different calculations. Further info → Wiki - 'prediction lines'.

**Profile** = the user’s basic treatment settings (basal rate, **DIA**, **IC**, **ISF**, **BG** target). AAPSv3 only supports local profiles created within **AAPS** but **Nightscout** **Profiles** can be copied (synchronised) to **AAPS**. Further info → Wiki - 'profile'.

**Profile switch** = (temporary) switch of the user’ **Profile** to a different **Profile** saved within **AAPS**.

**Profile Percentage** = a (temporary_ percentage increase or decrease applied to a user’s **Profile** for a selected time period.

**RES** = status light overdue reservoir change on the **AAPS’** homescreen Preferences, Screenshots → see also **BAT** / **CAN** / **SEN**.

**RileyLink** = open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz (used for old Medtronic pumps) or 433MHz (used for Omnipod Eros pumps) wireless communication RileyLink.

**SAGE** = sensor age. This is displayed on the homescreen of **AAPS** and in **Nightscout** if information was entered in the Actions tab / menu → see also **Nightscout**.

**SEN** = status light sensor change on home screen Preferences, Screenshots → see also **BAT** / **CAN** / **RES**.

**Sensivity detection** = calculation of sensitivity to insulin as a result of exercise, hormones etc. see also → DIABETTECH - 'Autosens'.

**Sensor noise** = a term used to describe the unstable **CGM’s** readings leading to "jumping" **BG** values. Further info → Wiki - 'sensor noise'.

**SMB** = Super Micro Bolus. An **AAPS** feature for faster insulin delivery in order to adjust **BG**. Further info → Wiki - '**SMB**' and see also **UAM**.

**Super bolus** = shift of basal to bolus insulin for faster **BG** adjustment.

**TBB** = total base basal (sum of basal rate within 24 hours) → see also **TBR** / **TDD**.

**TBR** = temporary basal rate→ see also **TBB** / **TDD**.

**TDD** = total daily dose (bolus + basal per day) → see also **TBB** / **TBR**.

**TT** = temporary target temporary increase/decrease of the user’s **BG** target (range) e.g. for eating or sport activities. Further info → Wiki - 'temp targets'.

**UAM** = unannounced meals. Detection of significant increase in **BG** levels due to meals, adrenaline or other influences and attempt to adjust this. Further info → Wiki - 'UAM' and see also **SMB**.

**Virtual pump** = an **AAPS** feature which allows the user to try **AAPS’** functions or for PWD using a pump model with no **AAPS** driver for looping → see also **Open Loop**.

**Wallpaper** = **AAPS** background image see phones page.

**xDrip+** = open source software to read **CGM** systems xDrip+.

**Zero-temp** = temporary basal rate with 0% (no basal insulin delivery).

→ see also [the OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)