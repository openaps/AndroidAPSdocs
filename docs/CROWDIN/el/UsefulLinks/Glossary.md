# Γλωσσάριο

**AAPS** = AndroidAPS is the name of the Android app.

**AAPSClient** = the follower app for caregivers. On a follower phone it follows a user’s **AAPS** through the user’s **Nightscout** site and, once paired with the **AAPS** phone, controls it remotely. Not to be confused with **NSClient**. Further info → [Wiki - 'The AAPSClient app'](../RemoteFeatures/AapsClient.md) and [Master ↔ Client control](#client-master-control).

**Activity** = Insulin activity, representing the speed of decay of IOB. See [Wiki - 'DIA'](#Config-Builder-insulin-dia) and the related **BGI**.

**AID** = Automated Insulin Delivery. The term generally used in clinical practice and research for a system which automatically adjusts insulin delivery using **CGM** data. **APS** and **closed loop** mean the same thing → see also **OS-AID**.

**APS** = Artificial Pancreas System → see also **AID**.

**AMA** = Advanced Meal Assist. An algorithm which allows **AAPS** to increase the user’s basal more aggressively after a meal bolus. Further info → [Wiki - 'Advanced Meal Assist (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** = used within **DynamicISF** and is a value set within a user's **Settings** between 1% and 300%. This acts as a multiplier on the **TDD** value. See [Wiki - DynamicISF adjustment factor](#dyn-isf-adjustment-factor)

**Android Auto** = a system used to host certain functions of an Android smartphone’s features, including **AAPS**, within a car's display. Further info → [Wiki - 'android auto'](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package. A software installation file. Further info → [Wiki - 'Building APK'](../SettingUpAaps/BuildingAaps.md).

**Autosens** = calculation of sensitivity to insulin between a period of a 24 and 8 hour window etc. Further info → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = cloud computing platform to host **Nightscout** web app Azure → see also **Nightscout**.

**BAT** = status light for low pump battery, shown in the status row of **AAPS'** main screen → see also **CAN** / **RES** / **SEN**.

**BG** = blood glucose.

**BGI** = blood glucose impact. The degree to which **BG** 'should' rise or fall based on insulin activity alone.

**BG source** = An AAPS setting for configuring the source for blood glucose data. See [Wiki - BG Source](#Config-Builder-bg-source)

**Bridge** = an additional device transforming **FGM** to **CGM**.

**BR** = Basal Rate. The amount of insulin in a given time block to maintain **BG** at a stable level. → see also **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App. A way to generate the user’s own Dexcom App for reading out the sensor data Dexcom G6.

**CAGE** = Cannula AGE. Displayed on **AAPS'** main screen and in Nightscout, based on the user's **Prime/Fill** careportal entries → see also **Nightscout**.

**CAN** = status light for overdue cannula change, shown in the status row of **AAPS'** main screen → see also **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor → see also **FGM**.

**Closed Loop** = a closed loop system which makes automatic adjustments to the user’s basal delivery based on an **AAPS’s** algorithm and the user’s **Profile** settings without requiring the user’s-approval. Further info → Wiki - 'closed loop' and see also **HCL** / **FCL**.

**COB** = Carbs On Board. This is the amount of carbohydrates currently available for the user's digestion → see also IOB.

**CSF** =Carbs Sensitivity Factor. i.e. how much does the user’s **BG** increase for 1g of carbs absorbed.

**DIA** = Duration of Insulin Action. Further info → [Wiki - 'DIA'](#Config-Builder-insulin-dia) and see also → [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Savings Time. See [Wiki - Timezone Change and Daylight Saving](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (or DynISF)** = a feature within **AAPS** that adapts the insulin sensitivity factor (**ISF**) dynamically based on the user’s **TDD** and **BG**.

**eCarbs** = extended Carbs. Carbs split up over several hours to accommodate/protein and permits **AAPS** to deliver extended boluses. Further info → [Wiki - 'Extended Carbs'](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop. A loop which needs no mealtime input from the user: no carb counting and no meal bolus. Further info → Wiki - 'full closed loop' and see also **HCL**.

**FGM** = Flash Glucose Monitor manufactured by Freestyle Libre. Further info → Wiki - 'BG source' and see also 'CGM'.

**git** = a tool used store and download the **AAPS’** source code.

**GitHub** = a web-based hosting service and build process for the **AAPS’** software version-control system for tracking changes in computer files and coordinating work on those files especially for teams. It is also necessary for **APK** updates. Further info → Wiki - 'update APK'.

**Glimp** = an app to collect values from Freestyle Libre Glimp.

**HCL (or Hybrid Closed Loop)** = a loop which automates insulin delivery between meals, but still requires the user to bolus for meals. Nearly every system in everyday use, including **AAPS**, is a hybrid closed loop → see also **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio. Note that this is conventionally g/U despite the acronym suggesting inverse.

**IOB** = Insulin On Board. Insulin active in the user’s body. See [Wiki - Insulin on Board](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor. The expected decrease in BG as a result of one unit of insulin. Unit is either mg/dL/U or mmol/L/U. These are not equivalent without a conversion!

**Keystore (or JKS)** = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your **AAPS'** build (and rebuid).

**LGS** = Low Glucose Suspend. See [Wiki - Low Glucose Suspend](#KeyAapsFeatures-LGS)

**LineageOS** = free and open-source operating system for smartphones etc. When using Accu-Chek Combo see [Wiki - Combo pump](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Log files** = **AAPS’** records of the user's actions (useful for troubleshooting and debugging). Further info → [Wiki - 'log files'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = maximum total IOB. This is a safety feature and prevents **AAPS** delivering insulin over the user’s settings. Further info → [Wiki - 'Maximum total IOB OpenAPS can’t go over'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = safety feature that is a calculation of default carb decay when carb absorption cannot be determined based on the user’s blood’s reactions. Further info → [Wiki - 'Preferences'](#Preferences-min_5m_carbimpact).

**Nightscout** = open source project to access and report **CGM** data. The central data hub for the user’ **AAPS** data and can generate reports to view the user’s historical **Nightscout** data expected HbA1c, time in range or search for patterns in the data via percentile chart etc.

**Nightscout** → see also **Nightscout Reporter**. This is particularly useful for parents following their child's diabetes management.

**Nightscout Reporter Tool** = a tool which generates PDFs reports from Nightscout web app data. See 'Nightscout Reporter', 'NS Reporter' @ Facebook.

**NSClient** (**NSClientV3**) = the **AAPS** plugin that synchronizes data with **Nightscout** (**Configuration** → **Communication**). It is not the same as **AAPSClient**, the follower app. Further info → [Wiki - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, the predecessor project and basis of AAPS.

**Open Loop system** = an **AAPS** feature that will recommend adjustments and which must be performed manually by the user on **AAPS**. Further info → [Wiki - 'Open Loop'](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = sensitivity detection and "reference design implementation version 0/1". It is the key algorithm behind OpenAPS Wiki - sensitivity detection.

**OS-AID** = Open-Source Automated Insulin Delivery. An **AID** system built from open-source software, such as **AAPS**, **OpenAPS**, Loop or Trio. These systems are not formally approved by health bodies (FDA, NHS etc.) → see also **AID**.

**Peak time** = time of maximum effect of insulin given. Further info → [Wiki - 'Duration of insulin action (DIA) and peak'](#Config-Builder-insulin-dia).

**PH** = Pump History. This can be accessed in **AAPS’** treatments history: open the **menu** (☰) at the top left of the main screen and select **Treatments**.

**Predictions** = predictions for **BG** in the future based on different calculations. Further info → [Wiki - 'prediction lines'](#aaps-screens-prediction-lines).

**Profile** = the user’s basic treatment settings (basal rate, **DIA**, **IC**, **ISF**, **BG** target). **AAPS** only uses profiles created within **AAPS** (**Manage** → **Profile**), but **Nightscout** **Profiles** can be copied (synchronised) to **AAPS**. Further info → [Wiki - 'Your AAPS profile'](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** = (temporary) switch of the user’ **Profile** to a different **Profile** saved within **AAPS**.

**Profile Percentage** = a (temporary_ percentage increase or decrease applied to a user’s **Profile** for a selected time period.

**RES** = status light for overdue reservoir change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **SEN**.

**RileyLink** = open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz (used for old Medtronic pumps) or 433MHz (used for Omnipod Eros pumps) wireless communication RileyLink.

**SAGE** = sensor age. This is displayed on the main screen of **AAPS** and in **Nightscout**, based on the user's **Sensor Insert** careportal entries → see also **Nightscout**.

**SEN** = status light for overdue sensor change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **RES**.

**Sensivity detection** = calculation of sensitivity to insulin as a result of exercise, hormones etc. see also → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensor noise** = a term used to describe the unstable **CGM’s** readings leading to "jumping" **BG** values. Further info → [Wiki - 'Smoothing blood glucose data'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus. An **AAPS** feature for faster insulin delivery in order to adjust **BG**. Further info → [Wiki - '**SMB**'](#Open-APS-features-super-micro-bolus-smb) and see also **UAM**.

**Super bolus** = shift of basal to bolus insulin for faster **BG** adjustment.

**TBB** = total base basal (sum of basal rate within 24 hours) → see also **TBR** / **TDD**.

**TBR** = temporary basal rate→ see also **TBB** / **TDD**.

**TDD** = total daily dose (bolus + basal per day) → see also **TBB** / **TBR**.

**TT** = temporary target temporary increase/decrease of the user’s **BG** target (range) e.g. for eating or sport activities. Further info → [Wiki - 'temp targets'](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals. Detection of significant increase in **BG** levels due to meals, adrenaline or other influences and attempt to adjust this. Further info → [Wiki - 'UAM'](#enable-uam) and see also **SMB**.

**Virtual pump** = an **AAPS** feature which allows the user to try **AAPS’** functions or for PWD using a pump model with no **AAPS** driver for looping → see also **Open Loop**.

**Wallpaper** = **AAPS** background image see phones page.

**xDrip** = open source software to read **CGM** systems.

**Zero-temp** = temporary basal rate with 0% (no basal insulin delivery).

→ see also [the OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)