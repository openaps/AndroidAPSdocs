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

**缓释碳水化合物(eCarbs)** = 延时释放的碳水化合物(extended Carbs)。 将碳水化合物分配至数小时摄入，用以匹配蛋白质吸收，并允许**AAPS**进行扩展大剂量输注。 更多信息 → 维基 - 'eCarbs'，'eCarbs 使用'。

**FGM** = 由Freestyle Libre生产的闪速葡萄糖监测仪(Flash Glucose Monitor)。 更多信息 → 维基 - 'BG 来源'，另见 'CGM'。

**git** = 一种用于存储和下载 **AAPS** 源代码的工具。

**GitHub** = 一个基于网络的托管服务和构建流程，专为**AAPS**软件版本控制系统设计，用于追踪计算机文件的变更并协调团队对这些文件的协作工作。 它对于 **APK** 更新也是必需的。 更多信息 → 维基 - '更新 APK'。

**Glimp** = 用于收集 Freestyle Libre Glimp 数据的应用。

**IC (或 I:C)** = 胰岛素与碳水化合物比率。 （即：一单位胰岛素可以覆盖多少碳水化合物？）

**IOB** = 活性胰岛素，Insulin On Board。 用户体内的活性胰岛素。

**ISF** = 胰岛素敏感性因子。 一单位胰岛素预计会减少的血糖量。

**Keystore (or JKS)** = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your **AAPS'** build (and rebuid).

**LGS** = 低血糖暂停。 如果 **BG** 下降，**AAPS** 将减少基础胰岛素；如果 **BG** 上升，则只有当 **IOB** 为负时（来自之前的 **LGS**）才会增加基础胰岛素，否则基础胰岛素将保持用户选择的 **配置文件** 设置。 用户可能在处理低血糖后暂时出现血糖飙升，且在反弹期无法增加基础胰岛素量。 → 另见目标 6。

**LineageOS** = 用于智能手机等设备的免费开源操作系统。 （使用 Accu-Chek Combo 时请参见维基 - Combo 泵）。

**Log 文件** = **AAPS’** 记录用户操作的文件（用于故障排除和调试）。 更多信息 → 维基 - '日志文件'。

**maxIOB** = 活性胰岛素总量上限。 这是一项安全功能，可防止**AAPS**超出用户设定值输送胰岛素。 更多信息 → 维基 - 'SMB'。

**min_5m_carbimpact** = 安全功能参数，当系统无法根据使用者的血糖反应确定碳水化合物吸收率时，该参数将作为默认碳水化合物衰减率的计算基准。 这是一个安全功能。 更多信息 → 维基 - '配置构建器'。

**Nightscout** = 开源项目，用于访问和报告 **CGM** 数据。 用户**AAPS**数据的核心处理中心，可生成报告用于查看用户在**Nightscout**中的历史数据（包括预期糖化血红蛋白HbA1c、达标时间等），或通过百分位图表等方式分析数据规律。

**Nightscout** → 另见 **Nightscout Reporter**。 这对于跟踪儿童糖尿病管理的父母特别有用。

**Nightscout Reporter 工具** = 从 Nightscout 网页应用程序数据生成 PDF 报告的工具。 参见 'Nightscout Reporter'，'NS Reporter' @ Facebook。

**NSClient**（或 **‘AAPSClient’**） = 见**AAPSClient**。

**OpenAPS** = 开放人工胰腺系统。

**开环系统** = **AAPS**的一项功能，它会推荐调整方案，但需要用户在**AAPS**上手动执行这些调整。 更多信息 → 维基 - '配置构建器'。

**Oref0 / Oref1** = 敏感性检测及"参考设计实现版本0/1"。 它是 OpenAPS 背后的关键算法 维基 - 敏感性检测

**峰值时间** = 胰岛素的最大效应时间。 更多信息 → 维基 - '配置构建器'。

**PH** = 泵历史记录。 可以在 **AAPS’** 治疗记录中访问，位于 **AAPS** 主屏幕右侧的三点菜单中 截图。

**Predictions** = 基于不同计算方法预测未来的**BG**值。 更多信息 → Wiki - '预测曲线'。

**Profile** = 用户的基本治疗设置（基础率、**DIA**、**IC**、**ISF**、**BG**目标）。 AAPSv3仅支持在**AAPS**内创建的本地档案，但可以将**Nightscout** **Profiles**复制（同步）到**AAPS**。 更多信息 → Wiki - '档案'。

**Profile switch** = 将用户的**Profile**（暂时）切换为存储在**AAPS**中的不同**Profile**。

**Profile Percentage** = 在选定的时间段内，对用户的**Profile**应用（暂时的）百分比增加或减少。

**RES** = 在**AAPS**主屏幕上的状态灯提醒更换过期储药器。 首选项、屏幕截图 → 参见**BAT** / **CAN** / **SEN**。

**RileyLink** = 开源硬件设备，用于桥接蓝牙低功耗（BLE）与916MHz（旧款美敦力泵使用）或433MHz（Omnipod Eros泵使用）无线通信。

**SAGE** = 传感器使用时间。 如果在操作选项卡/菜单中输入信息，则会显示在**AAPS**主屏幕和**Nightscout**中 → 参见**Nightscout**。

**SEN** = 主屏幕首选项中的传感器状态指示灯变化（截图请参见相关设置）→ 另见**BAT**/**CAN**/**RES**条目

**Sensivity detection** = 计算由于运动、荷尔蒙等引起的胰岛素敏感性变化。 参见 → DIABETTECH - 'Autosens'。

**Sensor noise** = 描述**CGM**读取值不稳定导致**BG**值“跳动”的术语。 更多信息 → Wiki - '传感器噪声'。

**SMB** = 超微大剂量（Super Micro Bolus）。 **AAPS**的一项功能，用于快速注射胰岛素以调整**BG**。 更多信息 → Wiki - '**SMB**'，参见**UAM**。

**Super bolus** = 超级大剂量，将基础胰岛素调整为餐前胰岛素以更快速地调整**BG**。

**TBB** = 总基础胰岛素（24小时基础率总和） → 参见**TBR** / **TDD**。

**TBR** = 暂时基础率 → 参见**TBB** / **TDD**。

**TDD** = 每日总剂量（每日餐前胰岛素+基础胰岛素） → 参见**TBB** / **TBR**。

**TT** = 暂时目标，暂时增加/减少用户的**BG**目标（范围），例如用于进食或运动。 更多信息 → Wiki - '临时目标'。

**UAM** = 未报告的进食。 检测因饮食、肾上腺素或其他因素导致的**血糖**水平显著升高，并尝试对此进行调整。 更多信息 → Wiki - 'UAM'，参见**SMB**。

**Virtual pump，虚拟泵** = **AAPS**的一项功能，允许用户试用**AAPS**的功能，或供使用无**AAPS**闭环驱动泵型的糖尿病患者使用 → 另见**开环系统**。

**Wallpaper** = **AAPS**背景图片，参见手机页面。

**xDrip+** = 开源软件，用于读取**CGM**系统 xDrip+。

**Zero-temp** = 暂时基础率为0%（无基础胰岛素注射）。

→ 参见[OpenAPS文档](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)