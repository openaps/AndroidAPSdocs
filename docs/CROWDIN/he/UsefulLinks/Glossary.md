# מילון מונחים

**AAPS** = AndroidAPS is the name of the Android app.

**AAPSClient** (or **NSClient**) = a remote control feature that can be used by caregivers via a follower phone to follow a user’s **AAPS** by connecting to the user’s **Nightscout's** site. Further info → Wiki - 'NS Client'. Objectives learning program within **AAPS** provides step by step guidance. Further info → Wiki - 'objectives'.

**APS** = Artificial Pancreas System.

**AMA** = Advanced Meal Assist. An algorithm which allows **AAPS** to increase the user’s basal more aggressively after a meal bolus. Further info → Wiki - 'AMA'.

**Adjustment Factor** = used within **DynamicISF** and is a value set within a user's **Preferences** between 1% and 300%. This acts as a multiplier on the **TDD** value.

- increasing the **Adjustment Factor** value above 100 % makes **DynamicISF** more aggressive: the **ISF** values become smaller (i.e. more insulin required to decrease **BG** levels a small amount)
- lowering the **Adjustment Factor** value under 100% makes **DynamicISF** less aggressive: the **ISF** values become larger (i.e. less insulin required to decrease **BG** levels a small amount).

**Android Auto** = a system used to host certain functions of an Android smartphone’s features, including **AAPS**, within a car's display. Further info → Wiki - 'android auto'.

**APK** = Android application Package. A software installation file. Further info → Wiki - 'Building APK'.

**Autosens** = calculation of sensitivity to insulin between a period of a 24 and 8 hour window etc. Further info → DIABETTECH - **Autosens**.

**Azure** = cloud computing platform to host **Nightscout** web app Azure → see also **Nightscout**.

**BAT** = status light low battery on **AAPS’** home screen **Preferences**, Screenshots → see also **CAN** / **RES** / **SEN**.

**BG** = blood glucose.

**BGI** = blood glucose impact. The degree to which **BG** 'should' rise or fall based on insulin activity alone.

**BG source** = the source of the user’s **BG** values derived from either **CGM** or **FGM** through a system integration software like **BYODA**, **xDrip+** etc. Further info → Wiki - 'BG source'

**Bridge** = an additional device transforming **FGM** to **CGM**.

**BR** = Basal Rate. The amount of insulin in a given time block to maintain **BG** at a stable level. → see also **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App. A way to generate the user’s own Dexcom App for reading out the sensor data Dexcom G6.

**CAGE** = Cannula AGE. Displayed on **AAPS’** homescreen and Nightscout providing the user’s information entered in the Actions tab / menu → see also **Nightscout**.

**CAN** = status light overdue cannula change on the **AAPS’** homescreen **Preferences'** → see also **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor → see also **FGM**.

**Closed Loop** = a closed loop system which makes automatic adjustments to the user’s basal delivery based on an **AAPS’s** algorithm and the user’s **Profile** settings without requiring the user’s-approval. Further info → Wiki - 'closed loop'.

**COB** = Carbs On Board. This is the amount of carbohydrates currently available for the user's digestion → see also IOB.

**CSF** = יחס רגישות לפחמימות. i.e. how much does the user’s **BG** increase for 1g of carbs absorbed.

**DIA** = Duration of Insulin Action. Further info → Wiki - 'insulin types' and see also → DIABETTECH - 'DIA'.

**DST** = Daylight Savings Time Wiki DST.

**Dynamic ISF (or DynISF)** = a feature within **AAPS** that adapts the insulin sensitivity factor (**ISF**) dynamically based on the user’s:

- Total Daily Dose of insulin (**TDD**); and
- current and predicted **BG** values.

**eCarbs** = extended Carbs. Carbs split up over several hours to accommodate/protein and permits **AAPS** to deliver extended boluses. Further info → Wiki - 'eCarbs', 'eCarbs use'.

**FGM** = Flash Glucose Monitor manufactured by Freestyle Libre. Further info → Wiki - 'BG source' and see also 'CGM'.

**git** = a tool used store and download the **AAPS’** source code.

**GitHub** = a web-based hosting service and build process for the **AAPS’** software version-control system for tracking changes in computer files and coordinating work on those files especially for teams. It is also necessary for **APK** updates. Further info → Wiki - 'update APK'.

**Glimp** = an app to collect values from Freestyle Libre Glimp.

**IC (or I:C)** = Insulin to Carb ratio. (i.e. how many carbs are covered by one unit of insulin?).

**IOB** = Insulin On Board. Insulin active in the user’s body.

**ISF** = Insulin Sensitivity Factor. The expected decrease in BG as a result of one unit of insulin.

**Keystore (or JKS)** = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your **AAPS'** build (and rebuid).

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

**xDrip+** = תוכנה בקוד פתוח שנועדה לקריאת נתונים מחי**ישני סוכר**.

**Zero-temp** = מינון בזאלי זמני של 0% (הפסקה זמנית של מתן האינסולין הבזאלי).

→ see also [the OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)