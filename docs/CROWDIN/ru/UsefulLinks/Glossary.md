# Глоссарий

**AAPS** = AndroidAPS название приложения на Андроиде. 

**AAPSClient** (или **NSClient**) = функция дистанционного управления, которая может быть использована наблюдателями на своем телефоне, чтобы следить за состоянием **AAPS** мастера с помощью соединения к серверу **Nightscout**. Подробная информация → Wiki - 'NS Клиент'. Цели в **AAPS** обеспечивают пошаговое ознакомление с приложением. Подробная информация → Wiki - 'Цели'.

**APS** = Artificial Pancreas System, ИПЖ = система Искусственной Поджелудочной Железы.

**AMA** = Advanced Meal Assist, продвинутый помощник приема пищи. Алгоритм, который позволяет **AAPS** увеличивать базал после приема пищи более агрессивно. Подробная информация → Wiki - 'AMA'.

**Adjustment Factor** = используется в **DynamicISF**, устанавливается в **Настройках** пользователя, значения между 1% и 300%. Он действует как множитель суточной дозы **TDD**.

- increasing the **Adjustment Factor** value above 100 % makes **DynamicISF** more aggressive: the **ISF** values become smaller (i.e. more insulin required to decrease **BG** levels a small amount)
- lowering the **Adjustment Factor** value under 100% makes **DynamicISF** less aggressive: the **ISF** values become larger (i.e. less insulin required to decrease **BG** levels a small amount).

**Android Auto** = a system used to host certain functions of an Android smartphone’s features, including **AAPS**, within a car's display. Further info → Wiki - 'android auto'.

**APK, апк** = Android application Package. Установочный файл приложения для андроида. Подробная информация → Wiki - 'Сборка AAPS'.

**Autosens, Автосенс** = расчет чувствительности к инсулину в период от 24 до 8 часов и т.п. Подробная информация → DIABETTECH - **Autosens**.

**Azure** = облачная платформа для размещения сервера **Nightscout** → см. также **Nightscout**.

**BAT** = status light low battery on **AAPS’** home screen **Preferences**, Screenshots → see also **CAN** / **RES** / **SEN**.

**BG, ГК, СК** = глюкоза крови, гликемия.

**BGI** = воздействие на глюкозу в крови. Показывает, в какой степени ГК "должна" подниматься или падать, только на основании активности инсулина.

**Источник ГК** = источник значений **ГК** пользователя, приложение, которое передает показания используемого **НМГ** или **ФМГ**, например, **BYODA**, **xDrip+** и другие. Подробная информация → Wiki - 'Источник ГК'

**Bridge, Трансмиттер** = дополнительное устройство, превращающее **ФНМГ** в **НМГ**.

**BR, БС** = Базальная скорость. Количество инсулина в заданном отрезке времени, которое позволяет **ГК** оставаться стабильной, ровной. → см. так же **IC** / **ISF**.

**BYODA** = Самостоятельно собранное приложение Dexcom. Способ собрать собственное приложение для чтения датчиков Dexcom G6.

**CAGE** = Возраст канюли. Не имеет аналога в русском переводе. Displayed on **AAPS’** homescreen and Nightscout providing the user’s information entered in the Actions tab / menu → see also **Nightscout**.

**CAN** = status light overdue cannula change on the **AAPS’** homescreen **Preferences'** → see also **BAT** / **RES** / **SEN**.

**CGM, НМГ** = Непрерывный монитор глюкозы → см. также **FGM, ФМГ**.

**Замкнутый Цикл** = система замкнутой петли, автоматически изменяющая подачу инсулина базируясь на алгоритмах **AAPS'а** и настройках **Профиля** и не требуя подтверждения от пользователя. Further info → Wiki - 'closed loop'.

**COB** = Активные углеводы. Количество углеводов, которое еще не было усвоено организмом пользователя → см. также IOB.

**CSF** = Фактор чувствительности к углеводам. Т.е. на сколько возрастает **ГК** от 1 грамма усвоенного углевода.

**DIA** = Длительность активности инсулина. Further info → Wiki - 'insulin types' and see also → DIABETTECH - 'DIA'.

**DST** = Daylight Savings Time Wiki DST.

**Динамический ISF (или DynISF, или динамик)** = функция внутри **AAPS**, которая адаптирует коэффициент чувствительности инсулина (**ISF, ФЧИ**) динамически основываясь на данных пользователя:

- Суммарная дневная доза инсулина (**TDD**); и
- текущее и прогнозируемое значение **ГК**.

**eCarbs** = растянутые углеводы. Углеводы, растянутые на несколько часов, чтобы скомпенсировать медленные углеводы и/или белки и позволяющие **AAPS** делать дополнительные болюсы. Further info → Wiki - 'eCarbs', 'eCarbs use'.

**FGM, ФМГ** = Флеш монитор глюкозы, а именно Freestyle Libre 1 поколения. Further info → Wiki - 'BG source' and see also 'CGM'.

**git** = a tool used store and download the **AAPS’** source code.

**GitHub** = a web-based hosting service and build process for the **AAPS’** software version-control system for tracking changes in computer files and coordinating work on those files especially for teams. It is also necessary for **APK** updates. Further info → Wiki - 'update APK'.

**Glimp** = an app to collect values from Freestyle Libre Glimp.

**IC (или I:C), УК** = углеводный коэффициент, коэффициент отношения инсулина к углеводам. (сколько грамм углеводов может скомпенсировать одна единица инсулина?).

**IOB** = Активный инсулин (~ инсулин на борту). Активный инсулин, находящийся в организме.

**ISF, ФЧИ** = Фактор или коэффициент чувствительности к инсулину. На сколько ожидается снижение ГК от 1 единицы инсулина.

**Keystore (or JKS)** = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your **AAPS'** build (and rebuid).

**LGS, ЛГС** = Приостановка на низкой ГК. **AAPS** уменьшит базал, если **ГК** падает, а если **ГК** растет, то базал будет увеличен только в том случае, когда **IOB** (АктИнс) будет отрицательным (из-за предшествующей остановки подачи инсулина по **LGS**), иначе значение базальной скорости будет соответствовать значению из **Профиля**. После купирования гипогликемии возможны пики ГК, которые нельзя будет погасить повышением базала на откате в этом режиме. → см. также Цель 6.

**LineageOS** = free and open-source operating system for smartphones etc. (When using Accu-Chek Combo see Wiki - Combo pump).

**Логи** = записи действий пользователя, которые делает **AAPS** (полезны для поиска и разбора ошибок и дефектов приложения). Подробная информация → Wiki - 'Логи'.

**maxIOB** = максимальное значение IOB. Это функция безопасности, которая не дает **AAPS** подать больше инсулина, чем указано в настройках пользователя. Further info → Wiki - 'SMB'.

**min_5m_carbimpact** = функция безопасности, которая указывает скорость списания углеводов для случая, когда эта скорость не может быть высчитана на основании изменения показаний ГК. Это функция безопасности. Further info → Wiki - 'config builder'.

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