# Glossary
| Term | Description | see also | more details @ |
| ---- | ----------- | -------- | -------------- |
| __AAPS__ | AndroidAPS is the name of the Android app | | |
| __APS__  | Artificial Pancreas System | | |
| __AMA__  | advanced meal assist - advanced algorithm to handle carbs | MA / SMB | [Wiki - AMA](../Usage/Open-APS-features.html#advanced-meal-assist-ama)|
| __Android Auto__ | Android Auto is a system developed by Google LLC to use functions of an Android smartphone with the infotainment system in motor vehicles. Through Android Auto AndroidAPS can send messages to your compatible and configured infotainment system. | | [Wiki - android auto](../Usage/Android-auto.html), [Google Android Auto](https://www.android.com/intl/en_en/auto/)|
| __APK__ | software installation file (Android application package) | | [Wiki - Building APK](../Installing-AndroidAPS/Building-APK.html) | 
| __Autosens__ | calculation of sensitivity to insulin as a result of exercise, hormones etc. | | [DIABETTECH - Autosens](https://www.diabettech.com/openaps/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/) |
| __Azure__ | cloud computing platform to host Nightscout web app | Heroku / Nightscout | [Azure](https://azure.microsoft.com/) |
| __BAT__ | status light low battery on homescreen | CAN / RES / SEN | [Preferences](../Configuration/Preferences.html#overview), [Screenshots](../Getting-Started/Screenshots.html) |
| __BG__ | blood glucose | | |
| __BGI__ | blood glucose interaction - the degree to which BG 'should' be rising or falling based on insulin activity alone | | |
| __BG source__ | The blood glucose source is the source where your blood glucose values come from. They come from a CGM or FGM system which you wear through some kind of integration software like BYODA, xDrip+ etc. | CGM / FGM | [Wiki - BG source](../Configuration/Config-Builder.html#bg-source) |
| __Blucon Nightreader__ | The first versions of Freestyle Libre have only be able to communicate via NFC which means that the patient had to hold his mobile activley very near to the sensor. The Blucon Nightreader closed this gap. Newer versions work in other ways! Please inform yourself about the actual state before buying something. | BlueReader / MiaoMiao | [Ambrosia Blucon Nightreader](https://www.ambrosiasys.com/our-products/blucon/) |
| __BR__ | The abbrevation stand for basal rate. It's the amount of insulin in a given time block to maintain BG at a stable level. | IC / ISF | |
| __BYODA__ | Build your own Dexcom App - it's a special way to generate your own Dexcom App for reading out the sensor data | | [Dexcom G6](../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app) |
| __CAGE__ | cannula age - displayed on the homescreen of AndroidAPS and in Nightscout if information was entered in the actions tab / menu | Nightscout | |
| __CAN__ | status light overdue cannula change on homescreen | BAT / RES / SEN | [Preferences](../Configuration/Preferences.html#overview), [Screenshots](../Getting-Started/Screenshots.html) |
| __CGM__ | continuous glucose monitor | FGM | | 
| __Closed Loop__ | closed-loop systems make automatic adjustments to basal delivery, without needing user-approval, based on an algorithm | Open loop | [Wiki closed loop](../Configuration/Config-Builder.html#closed-loop)|
| __COB__ | carbs on board - Carbs on board is the amount of carbohydrates currently available for digestion. | IOB | |
| __DIA__ | duration of insulin action | | [Wiki insulin types](../Configuration/Config-Builder.html#insulin), [DIABETTECH - DIA](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)|
| __DST__ | daylight savings time | | [Wiki DST](../Usage/Timezone-traveling.html#time-adjustment-daylight-savings-time-dst) | 
| __eCarbs__ | "extended carbs" - carbs split up over serveral hours (i.e. lot of fat/protein)<br>extended boluses you might know from regular pump therapy do not make much sense when looping | SMB | [Wiki - eCarbs](../Usage/Extended-Carbs.html#extended-carbs-ecarbs), [eCarbs use case](https://adriansloop.blogspot.com/2018/04/page-margin-0.html) |
| __FGM__ | flash glucose monitor (Freestyle Libre) | CGM | [Wiki - BG source](../Configuration/BG-Source.html) |
| __git__ | git in our context here is the tool to mainly download the AndrdoidAPS sources from Github for the build process. It's version-control system for tracking changes in computer files and coordinating work on those files especially for teams. -> necessary for APK updates |  | [Wiki- update APK](../Installing-AndroidAPS/Update-to-new-version.html)|
| __GitHub__ | web-based hosting service for version control using Git<br>-> storage of source code |  | [GitHub AndroidAPS](https://github.com/nightscout/AndroidAPS) 
| __Glimp__ | app to collect values from Freestyle Libre | | [Nightscout with Glimp](https://nightscout.github.io/uploader/uploaders/#abbott-freestyle-libre)|
| __Heroku__ | cloud computing platform to host Nightscout web app | Azure / Nightscout | [Heroku](https://www.heroku.com) |
| __IC (or I:C)__ | insulin to carb ratio (How many carbs are covered by one unit of insulin?) |  | 
| __IOB__ | insulin on board -  insulin active in your body | | | 
| __ISF__ | insulin sensitivity factor - the expected decrease in BG as a result of one unit of insulin | | |
| __LGS__ | Low Glucose Suspend<br>AAPS will reduce basal if blood glucose is dropping. But if blood glucose is rising then it will only increase basal if the IOB is negative (from a previous LGS), otherwise basal rates will remain the same as your selected profile. You may temporarily experience spikes following treated hypos without the ability to increase basal on the rebound. | [objective 6](../Usage/Objectives.html#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) |  |
| __LineageOS__ | free and open-source operating system for smartphones etc.<br>alternative OS for smartphones not running Android 8.1 (Oreo)<br>(when using Accu-Chek Combo) |  | [Wiki - Combo pump](../Configuration/Accu-Chek-Combo-Pump.html#hardware-requirements) | 
| __Log files__ | record of all AAPS actions (useful for trubbleshooting and debugging) | | [Wiki - log files](../Usage/Accessing-logfiles.html#accessing-logfiles) | 
| __maxIOB__ | safety feature - maximum total IOB AAPS can't go over |  | [Wiki - maxIOB](../Installing-AndroidAPS/Releasenotes.html#settings-to-adjust-when-switching-from-ama-to-smb">, [Wiki - SMB](../Installing-AndroidAPS/Releasenotes.html#settings-to-adjust-when-switching-from-ama-to-smb">Wiki - SMB</a> | 
| __MiaoMiao__ | bluetooth transmitter to use Freestyle Libre as CGM | BlueReader / Blucon Nightreader | [MiaoMiao](https://www.miaomiao.cool/) | 
| __min_5m_carbimpact__ | saftey feature - default carb decay at times when carb absorption can't be dynamically worked out based on your bloods reactions | | [Wiki - config builder](../Configuration/Config-Builder.html#absorption-settings) |
| __Nightscout__ | open source project to access and report CGM data. It's the central data hub for all your diabetes data. AndroidAPS is storing there the data. It's available e.g. for parents follwing their childs diabetes management or reporting of the historically data to get the actual state of the diabetes control (expected HbA1c, time in range) or search for patterns in the data via percentil chart etc.. | Nightscout Reporter | [Nightscout](https://nightscout.github.io/) | 
| __Nightscout Reporter__ | Tool from fellow looper to generate PDFs reports from Nightscout web app data e.g. for meetings with your diabetes team. | Nightscout | [Nightscout Reporter](https://nightscout-reporter.zreptil.de), [NS Reporter @ Facebook](https://www.facebook.com/nightrep/) | 
|  __NS Client__ | part of AAPS to connect to your Nightscout site | | [Wiki - NS Client](../Usage/Troubleshooting-NSClient.html#troubleshooting-nsclient) | 
| __Objectives__ | learning program within AAPS guiding you step by step from open to closed loop | | [Wiki - objectives](../Usage/Objectives.html) | 
| __OpenAPS__ | open artificial pancreas system, APS run on small computers (i.e. Raspberry Pie), AAPS uses some of the OpenAPS features | | [OpenAPS docs](https://openaps.readthedocs.io) | 
| __Open Loop__ | system will suggest recommended adjustments which have to be performed manually on the pump | Closed Loop | [Wiki - config builder](../Configuration/Config-Builder.html#open-loop)</a> | 
| __Oref0 / Oref1__ | sensitivity detection<br>"reference design implementation version 0/1" - the key algorithm behind OpenAPS |  | [Wiki - sensitivity detection](../Configuration/Sensitivity-detection-and-COB.html#sensitivity-detection) | 
| __Peak time__ | time of maximum effect of insulin given | | [Wiki - config builder](../Configuration/Config-Builder.html#insulin) | 
| __PH__ | pump history - you access in the treatments which are located on the 3 dot menu on the right side of AndroidAPS main screen |  | [Screenshots](../Getting-Started/Screenshots.html#treatment) | 
| __Predictions__ | predictions for BG in the future based on different calculations |  | [Wiki - prediction lines](../Installing-AndroidAPS/Releasenotes.html#overview-tab) | 
| __Profile__ | basic treatment settings (basal rate, DIA, IC, ISF, BG target)<br>AndroidAPS v3 only supports local profiles but Nightscout profiles can be copied (synchronized) to AndroidAPS |  | [Wiki - profile](../Configuration/Config-Builder.html#profile) | 
| __Profile switch__ | (temporary) change of profile used or percentual increase/decrease |  | [Wiki - profile switch](../Usage/Profiles.html) | 
| __RES__ | status light overdue reservoir change on homescreen |  | BAT / CAN / SEN | [Preferences](../Configuration/Preferences.html#overview), [Screenshots](../Getting-Started/Screenshots.html) | 
| __RileyLink__ | open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz (used for old Medtronic pumps) or 433MHz (used for Omnipod Eros pumps) wireless communication | OpenAPS |  | 
| __SAGE__ | sensor age - displayed on the homescreen of AndroidAPS and in Nightscout if information was entered in the actions tab / menu | Nightscout |  | 
| __SEN__ | status light sensor change on homescreen | BAT / CAN / RES | [Preferences](../Configuration/Preferences.html#overview), [Screenshots](../Getting-Started/Screenshots.html)</a> | 
| __Sensivity detection__ | calculation of sensitivity to insulin as a result of exercise, hormones etc. |  | [DIABETTECH - Autosens](https://www.diabettech.com/openaps/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/) | 
| __Sensor noise__ | unstable CGM readings leading to "jumping" values |  | [Wiki - sensor noise](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html#smoothing-blood-glucose-data) | 
| __SMB__ | super micro bolus<br>advanced feature for faster BG adjustment | UAM | [Wiki - SMB](../Usage/Open-APS-features.html#super-micro-bolus-smb) | 
| __Super bolus__ | shift of basal to bolus insulin for faster BG adjustment |  | [John Walsh - The Super Bolus](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus) | 
| __TBB__ | total base basal (sum of basal rate within 24 hours) | TBR / TDD |  | 
| __TBR__ | temporary basal rate | TBB / TDD |  | 
| __TDD__ | total daily dose (bolus + basal per day) | TBB / TBR |  | 
| __TT__ | temporary target<br>temporary increase/decrease of BG target (range) e.g. for eating or sport activities |  | [Wiki - temp targets](../Usage/temptarget.html#temp-targets) | 
| __UAM__ | unannounced meals - detection of significant increase in glucose levels due to meals, adrenaline or other influences and attempt to adjust this with SMB | SMB  | [Wiki - SMB](../Usage/Open-APS-features.html?highlight=uam#super-micro-bolus-smb) | 
| __Virtual pump__ | option to try AAPS functions or for PWD using a pump model with no AndroidAPS driver for looping | Open Loop |  | 
| __Wallpaper__ | AndroidAPS background image |  | [see phones page](../Getting-Started/Phones.html#phone-background) | 
| __xDrip / xDrip+__ | open source software to read CGM systems |  | [xDrip+](https://jamorham.github.io/#xdrip-plus), [xDrip](https://stephenblackwasalreadytaken.github.io/xDrip/) | 
| __Zero-temp__ | temporary basal rate with 0% (no basal insulin delivery) |  |  | 

See also https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html
