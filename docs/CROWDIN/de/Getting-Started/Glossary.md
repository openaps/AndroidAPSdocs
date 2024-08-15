# Glossar

**AAPS** AndroidAPS is the name of the Android app

**APS** Artificial Pancreas System

**AMA** Advanced Meal Assist - advanced algorithm to handle carbs [Wiki - AMA](../Usage/Open-APS-features.md#advanced-meal-assist-ama) → see also **SMB**

**Android Auto** Android Auto is a system developed by Google LLC to use functions of an Android smartphone with the infotainment system in motor vehicles. Through Android Auto AndroidAPS can send messages to your compatible and configured infotainment system. [Wiki - android auto](../Usage/Android-auto.md), [Google Android Auto](https://www.android.com/intl/en_en/auto/)

**APK** Android application Package - software installation file [Wiki - Building APK](../Installing-AndroidAPS/building-AAPS.md)

**Autosens** calculation of sensitivity to insulin as a result of exercise, hormones etc. [DIABETTECH - Autosens](https://www.diabettech.com/openaps/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/)

**Azure** cloud computing platform to host Nightscout web app [Azure](https://azure.microsoft.com/) → see also **Nightscout **

**BAT **status light low battery on homescreen [Preferences](../Configuration/Preferences.md#overview), [Screenshots](../Getting-Started/Screenshots.md) → see also **CAN / RES / SEN**

**BG** blood glucose

**BGI** blood glucose impact - the degree to which BG 'should' be rising or falling based on insulin activity alone

**BG source** where your blood glucose values come from. Die Werte kommen von einem CGM- oder FGM-System, dass Du trägst und werden durch eine Integrations-App (z.B. BYODA, xDrip+ etc.) übermittelt. [Wiki - BG source](../Configuration/Config-Builder.md#bg-source) → see also **CGM / FGM**

**Blucon** bluetooth transmitter to use Freestyle Libre as CGM - check compatibility! [Blucon](https://cgm.ambrosiasys.com/) → see also **MiaoMiao, Bubble**

**Bubble** bluetooth transmitter to use Freestyle Libre as CGM [Bubble](https://www.bubblesmartreader.com/) → see also **Blucon, MiaoMiao**

**Bridge (Libre)** The first versions of the Freestyle Libre are only able to communicate via NFC which means that the patient had to hold his mobile very near to the sensor. [LimiTTER](https://github.com/JoernL/LimiTTer) (archived) closed this gap, the first commercial bridge BlueReader was widely copied. Please check compatibility before buying a bridge device like Blucon / MiaoMiao / Bubble / Atom...

**BR** Basal Rate. The amount of insulin in a given time block to maintain BG at a stable level.→ see also **IC / ISF**

**BYODA** Build Your Own Dexcom App - a special way to generate your own Dexcom App for reading out the sensor data [Dexcom G6](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app)

**CAGE** Cannula AGE - displayed on the homescreen of AndroidAPS and in Nightscout if information was entered in the actions tab / menu → see also **Nightscout**

**CAN** status light overdue cannula change on homescreen [Preferences](../Configuration/Preferences.md#overview), [Screenshots](../Getting-Started/Screenshots.md) → see also **BAT / RES / SEN**

**CGM** Continuous Glucose Monitor → see also **FGM**

**Closed Loop** closed-loop systems make automatic adjustments to basal delivery, without needing user-approval, based on an algorithm [Wiki closed loop](../Configuration/Config-Builder.md#closed-loop) → see also **Open loop**

**COB** Carbs On Board - Carbs on board is the amount of carbohydrates currently available for digestion. → see also **IOB**

**DIA** Duration of Insulin Action [Wiki insulin types](../Configuration/Config-Builder.md#insulin), [DIABETTECH - DIA](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

**DST** Daylight Savings Time [Wiki DST](../Usage/Timezone-traveling.md#time-adjustment-daylight-savings-time-dst)

**eCarbs** extended Carbs - carbs split up over serveral hours (i.e. lot of fat/protein) extended boluses you might know from regular pump therapy do not make much sense when looping [Wiki - eCarbs](../Usage/Extended-Carbs.md#extended-carbs-ecarbs), [eCarbs use case](https://adriansloop.blogspot.com/2018/04/page-margin-0.html) → see also **SMB**

**FGM** Flash Glucose Monitor (Freestyle Libre) [Wiki - BG source](../Configuration/BG-Source.md) → see also **CGM**

**git** git in our context here is the tool to mainly download the AndrdoidAPS sources from Github for the build process. It's version-control system for tracking changes in computer files and coordinating work on those files especially for teams. -> necessary for APK updates [Wiki- update APK](../Installing-AndroidAPS/Update-to-new-version.md)

**GitHub** web-based hosting service for version control using Git -> storage of source code [GitHub AndroidAPS](https://github.com/nightscout/AndroidAPS)

**Glimp** app to collect values from Freestyle Libre [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia)

**Heroku** cloud computing platform to host Nightscout web app [Heroku](https://www.heroku.com) → see also **Nightscout **

**IC (or I:C)** Insulin to Carb ratio (How many carbs are covered by one unit of insulin?)

**IOB** Insulin On Board - insulin active in your body

**ISF** Insulin Sensitivity Factor - the expected decrease in BG as a result of one unit of insulin

**LGS** Low Glucose Suspend - AAPS will reduce basal if blood glucose is dropping. Wenn die BZ-Werte aber steigen, wird AAPS die Basalrate nur dann erhöhen, wenn negatives Insulin on board (von einer vorangegangenen Basalratenreduzierung) ist. Sonst bleibt die Basalrate wie in Deinem Profil eingestellt. Wenn du eine Hypo korrigierst, kann es vorkommen, dass danach Spitzen auftreten, die du nicht durch Erhöhung der Basalrate korrigieren kannst. → see also [objective 6](../Usage/completing-the-objectives.md#objective-6-starting-to-close-the-loop-with-low-glucose-suspend)

**LineageOS** free and open-source operating system for smartphones etc. (When using Accu-Chek Combo see [Wiki - Combo pump](../Configuration/Accu-Chek-Combo-Pump.md#accu-chek-combo-pump))

**Log files** record of all AAPS actions (useful for troubleshooting and debugging) [Wiki - log files](../Usage/Accessing-logfiles.md#accessing-logfiles)

**maxIOB** safety feature - maximum total IOB AAPS can't go over [Wiki - SMB](../Installing-AndroidAPS/Releasenotes.md#settings-to-adjust-when-switching-from-ama-to-smb)

**MiaoMiao** bluetooth transmitter to use Freestyle Libre as CGM [MiaoMiao](https://www.miaomiao.cool/) → see also **Blucon, Bubble**

**min_5m_carbimpact** safety feature - default carb decay at times when carb absorption can't be dynamically worked out based on your bloods reactions [Wiki - config builder](../Configuration/Config-Builder.md#absorption-settings)

**Nightscout** open source project to access and report CGM data. Es ist der zentrale Datenknotenpunkt für alle Diabetes-Daten. AndroidAPS is storing there the data. It's available e.g. for parents follwing their childs diabetes management or reporting of the historically data to get the actual state of the diabetes control (expected HbA1c, time in range) or search for patterns in the data via percentil chart etc.. [Nightscout](https://nightscout.github.io/) → see also **Nightscout Reporter**

**Nightscout Reporter** Tool from fellow looper to generate PDFs reports from Nightscout web app data e.g. for meetings with your diabetes team. [Nightscout Reporter](https://nightscout-reporter.zreptil.de), [NS Reporter @ Facebook](https://www.facebook.com/nightrep/) → see also **Nightscout**

**NS Client** part of AAPS to connect to your Nightscout site [Wiki - NS Client](../Usage/Troubleshooting-NSClient.md#troubleshooting-nsclient)

**Objectives** learning program within AAPS guiding you step by step from open to closed loop [Wiki - objectives](../Usage/completing-the-objectives.md)

**OpenAPS** Open Artificial Pancreas System, APS run on small computers (i.e. Raspberry Pi), AAPS uses some of the OpenAPS features [OpenAPS docs](https://openaps.readthedocs.io)

**Open Loop** system will suggest recommended adjustments which have to be performed manually on the pump [Wiki - config builder](../Configuration/Config-Builder.md#loop) → see also **Closed Loop**

**Oref0 / Oref1** sensitivity detection "reference design implementation version 0/1" - the key algorithm behind OpenAPS [Wiki - sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md#sensitivity-detection)

**Peak time** time of maximum effect of insulin given [Wiki - config builder](../Configuration/Config-Builder.md#insulin)

**PH** Pump History - you access in the treatments which are located on the 3 dot menu on the right side of AndroidAPS main screen [Screenshots](../Getting-Started/Screenshots.md#treatment)

**Predictions** predictions for BG in the future based on different calculations [Wiki - prediction lines](../Getting-Started/Screenshots.md#prediction-lines)

**Profile** basic treatment settings (basal rate, DIA, IC, ISF, BG target) AndroidAPS v3 only supports local profiles but Nightscout profiles can be copied (synchronized) to AndroidAPS [Wiki - profile](../Configuration/Config-Builder.md#profile)

**Profile switch** (temporary) change of profile used or percentual increase/decrease [Wiki - profile switch](../Usage/Profiles.md)

**RES** status light overdue reservoir change on homescreen [Preferences](../Configuration/Preferences.md#overview), [Screenshots](../Getting-Started/Screenshots.md) → see also **BAT / CAN / SEN**

**RileyLink** open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz (used for old Medtronic pumps) or 433MHz (used for Omnipod Eros pumps) wireless communication [RileyLink](https://getrileylink.org/)

**SAGE** sensor age - displayed on the homescreen of AndroidAPS and in Nightscout if information was entered in the actions tab / menu→ see also **Nightscout**

**SEN** status light sensor change on homescreen [Preferences](../Configuration/Preferences.md#overview), [Screenshots](../Getting-Started/Screenshots.md) → see also **BAT / CAN / RES**

**Sensivity detection** calculation of sensitivity to insulin as a result of exercise, hormones etc. [DIABETTECH - Autosens](https://www.diabettech.com/openaps/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/)

**Sensor noise** unstable CGM readings leading to "jumping" values [Wiki - sensor noise](../Usage/Smoothing-Blood-Glucose-Data.md)

**SMB** Super Micro Bolus advanced feature for faster BG adjustmentUAM [Wiki - SMB](../Usage/Open-APS-features.md#super-micro-bolus-smb)

**Super bolus** shift of basal to bolus insulin for faster BG adjustment [John Walsh - The Super Bolus](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus)

**TBB** total base basal (sum of basal rate within 24 hours) → see also **TBR / TDD**

**TBR** temporary basal rate→ see also **TBB / TDD**

**TDD** total daily dose (bolus + basal per day) → see also **TBB / TBR**

**TT** temporary target temporary increase/decrease of BG target (range) e.g. for eating or sport activities [Wiki - temp targets](../Usage/temptarget.md#temp-targets)

**UAM** unannounced meals - detection of significant increase in glucose levels due to meals, adrenaline or other influences and attempt to adjust this with [Wiki - UAM](../Usage/Open-APS-features.md#enable-uam) [Wiki - SMB](../Usage/Open-APS-features.md#super-micro-bolus-smb) → see also **SMB**

**Virtual pump** option to try AAPS functions or for PWD using a pump model with no AndroidAPS driver for looping → see also **Open Loop**

**Wallpaper** AndroidAPS background image [see phones page](../Getting-Started/Phones.md#phone-background)

**xDrip** / **xDrip+** open source software to read CGM systems [xDrip+](https://jamorham.github.io/#xdrip-plus), [xDrip](https://stephenblackwasalreadytaken.github.io/xDrip/) (archived)

**Zero-temp** temporary basal rate with 0% (no basal insulin delivery)

→ see also [the OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)