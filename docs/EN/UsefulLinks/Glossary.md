# Glossary

 __AAPS__ =  AndroidAPS is the name of the Android app.

__AAPSClient__ (or __NSClient__) = a remote control feature that can be used by caregivers via a follower phone to follow a user’s __AAPS__ by connecting to the user’s __Nightscout's__ site. Further info → [Wiki - 'The AAPSClient app'](../RemoteFeatures/AapsClient.md). Objectives learning program within __AAPS__ provides step by step guidance. Further info → [Wiki - 'objectives'](../SettingUpAaps/CompletingTheObjectives.md).

__Activity__ = Insulin activity, representing the speed of decay of IOB. See [Wiki - 'DIA'](#Config-Builder-insulin-dia) and the related __BGI__.

__AID__ = Automated Insulin Delivery.
The term generally used in clinical practice and research for a system which automatically adjusts insulin delivery using __CGM__ data. __APS__ and __closed loop__ mean the same thing → see also __OS-AID__.

__APS__ = Artificial Pancreas System → see also __AID__.

__AMA__ = Advanced Meal Assist.
An algorithm which allows __AAPS__ to increase the user’s basal more aggressively after a meal bolus. Further info → [Wiki - 'Advanced Meal Assist (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

__Adjustment Factor__ = used within **DynamicISF** and is a value set within a user's **Preferences** between 1% and 300%. This acts as a multiplier on the **TDD** value. See [Wiki - DynamicISF adjustment factor](#dyn-isf-adjustment-factor)

__Android Auto__ = a system used to host certain functions of an Android smartphone’s features, including __AAPS__, within a car's display. Further info → [Wiki - 'android auto'](../RemoteFeatures/AndroidAuto.md).

__APK__ = Android application Package. 
A software installation file.  Further info → [Wiki - 'Building APK'](../SettingUpAaps/BuildingAaps.md).

__Autosens__ = calculation of sensitivity to insulin between a period of a 24 and 8 hour window etc. Further info → [DIABETTECH - __Autosens__](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

__Azure__ = cloud computing platform to host __Nightscout__ web app Azure → see also __Nightscout__.

__BAT__ = status light for low pump battery, shown in the status row of __AAPS'__ main screen → see also __CAN__ / __RES__ / __SEN__.

__BG__ =  blood glucose.

__BGI__ = blood glucose impact.
The degree to which __BG__ 'should' rise or fall based on insulin activity alone.

__BG source__ = An AAPS setting for configuring the source for blood glucose data. See [Wiki - BG Source](#Config-Builder-bg-source)

__Bridge__ = an additional device transforming __FGM__ to __CGM__.  

__BR__ =  Basal Rate. 
The amount of insulin in a given time block to maintain __BG__ at a stable level. → see also __IC__ / __ISF__.

__BYODA__ = Build Your Own Dexcom App. 
A way to generate the user’s own Dexcom App for reading out the sensor data Dexcom G6.

__CAGE__ = Cannula AGE.
Displayed on __AAPS'__ main screen and in Nightscout, based on the user's __Prime/Fill__ careportal entries → see also __Nightscout__.

__CAN__ = status light for overdue cannula change, shown in the status row of __AAPS'__ main screen → see also __BAT__ / __RES__ / __SEN__.

__CGM__ = Continuous Glucose Monitor → see also __FGM__.

__Closed Loop__ = a closed loop system which makes automatic adjustments to the user’s basal delivery based on an __AAPS’s__ algorithm and the user’s __Profile__ settings without requiring the user’s-approval. Further info → Wiki - 'closed loop' and see also __HCL__ / __FCL__.

__COB__ = Carbs On Board. 
This is the amount of carbohydrates currently available for the user's digestion → see also IOB.

__CSF__ =Carbs Sensitivity Factor.
i.e. how much does the user’s __BG__ increase for 1g of carbs absorbed.

__DIA__ = Duration of Insulin Action.  Further info →  [Wiki - 'DIA'](#Config-Builder-insulin-dia) and see also →  [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

__DST__ = Daylight Savings Time. See [Wiki - Timezone Change and Daylight Saving](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

__Dynamic ISF (or DynISF)__ =  a feature within **AAPS** that adapts the insulin sensitivity factor (**ISF**) dynamically based on the user’s **TDD** and **BG**.

__eCarbs__ = extended Carbs.
Carbs split up over several hours to accommodate/protein and permits __AAPS__ to deliver extended boluses.  Further info → [Wiki - 'Extended Carbs'](../DailyLifeWithAaps/ExtendedCarbs.md)

__FCL__ = Full Closed Loop.
A loop which needs no mealtime input from the user: no carb counting and no meal bolus. Further info → Wiki - 'full closed loop' and see also __HCL__.

__FGM__ = Flash Glucose Monitor manufactured by Freestyle Libre.
 Further info →  Wiki - 'BG source' and see also 'CGM'.

__git__ = a tool used store and download the __AAPS’__ source code.  

__GitHub__ = a web-based hosting service and build process for the __AAPS’__ software version-control system for tracking changes in computer files and coordinating work on those files especially for teams. 
It is also necessary for __APK__ updates.  Further info →  Wiki - 'update APK'.

__Glimp__ = an app to collect values from Freestyle Libre Glimp.

__HCL (or Hybrid Closed Loop)__ = a loop which automates insulin delivery between meals, but still requires the user to bolus for meals. Nearly every system in everyday use, including __AAPS__, is a hybrid closed loop → see also __FCL__ / __Closed Loop__.

__IC (I:C, ICR, CR, carb ratio)__ = Insulin to Carb ratio. Note that this is conventionally g/U despite the acronym suggesting inverse.

__IOB__ = Insulin On Board.
Insulin active in the user’s body. See [Wiki - Insulin on Board](#aaps-screens-iob)

__ISF__ = Insulin Sensitivity Factor.
The expected decrease in BG as a result of one unit of insulin. Unit is either mg/dL/U or mmol/L/U. These are not equivalent without a conversion!

__Keystore (or JKS)__ = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your __AAPS'__ build (and rebuid).

__LGS__ = Low Glucose Suspend. See [Wiki - Low Glucose Suspend](#KeyAapsFeatures-LGS)

__LineageOS__ = free and open-source operating system for smartphones etc. When using Accu-Chek Combo see [Wiki - Combo pump](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

__Log files__ = __AAPS’__ records of the user's actions (useful for troubleshooting and debugging). Further info →  [Wiki - 'log files'](../GettingHelp/AccessingLogFiles.md).

__maxIOB__ = maximum total IOB.
This is a safety feature and prevents __AAPS__ delivering insulin over the user’s settings.  Further info →  [Wiki - 'Maximum total IOB OpenAPS can’t go over'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

__min_5m_carbimpact__ = safety feature that is a calculation of default carb decay when carb absorption cannot be determined based on the user’s blood’s reactions. Further info →  [Wiki - 'Preferences'](#Preferences-min_5m_carbimpact).

__Nightscout__ = open source project to access and report __CGM__ data. 
The central data hub for the user’ __AAPS__ data and can generate reports to view the user’s historical __Nightscout__ data expected HbA1c, time in range or search for patterns in the data via percentile chart etc. 

__Nightscout__ → see also __Nightscout Reporter__. This is particularly useful for parents following their child's diabetes management.

__Nightscout Reporter Tool__ = a tool which generates PDFs reports from Nightscout web app data. See 'Nightscout Reporter', 'NS Reporter' @ Facebook.

__NSClient__ ( or __‘AAPSClient’)__ = see __AAPSClient__.

__OpenAPS__ = Open Artificial Pancreas System, the predecessor project and basis of AAPS.

__Open Loop system__ = an __AAPS__ feature that will recommend adjustments and which must be performed manually by the user on __AAPS__.  Further info →  [Wiki - 'Open Loop'](#KeyAapsFeatures-OpenLoop).

__Oref0 / Oref1__ = sensitivity detection and "reference design implementation version 0/1". It is the key algorithm behind OpenAPS Wiki - sensitivity detection.

__OS-AID__ = Open-Source Automated Insulin Delivery.
An __AID__ system built from open-source software, such as __AAPS__, __OpenAPS__, Loop or Trio. These systems are not formally approved by health bodies (FDA, NHS etc.) → see also __AID__.

__Peak time__ = time of maximum effect of insulin given. Further info → [Wiki - 'Duration of insulin action (DIA) and peak'](#Config-Builder-insulin-dia).

__PH__ = Pump History. 
This can be accessed in __AAPS’__ treatments which are located on the 3 dot menu on the right side of __AAPS__ main screen Screenshots.

__Predictions__ = predictions for __BG__ in the future based on different calculations. Further info → [Wiki - 'prediction lines'](#aaps-screens-prediction-lines).

__Profile__ = the user’s basic treatment settings (basal rate, __DIA__, __IC__, __ISF__, __BG__ target).
AAPSv3 only supports local profiles created within __AAPS__ but __Nightscout__ __Profiles__ can be copied (synchronised) to __AAPS__. Further info → [Wiki - 'Your AAPS profile'](../SettingUpAaps/YourAapsProfile.md).

__Profile switch__ = (temporary) switch  of the user’ __Profile__ to a different __Profile__ saved within __AAPS__.

__Profile Percentage__ = a (temporary_ percentage increase or decrease applied to a user’s __Profile__ for a selected time period.

__RES__ = status light for overdue reservoir change, shown in the status row of __AAPS'__ main screen → see also __BAT__ / __CAN__ / __SEN__.

__RileyLink__ = open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz (used for old Medtronic pumps) or 433MHz (used for Omnipod Eros pumps) wireless communication RileyLink.

__SAGE__ = sensor age. 
This is displayed on the main screen of __AAPS__ and in __Nightscout__, based on the user's __Sensor Insert__ careportal entries → see also __Nightscout__.

__SEN__ = status light for overdue sensor change, shown in the status row of __AAPS'__ main screen → see also __BAT__ / __CAN__ / __RES__.

__Sensivity detection__ = calculation of sensitivity to insulin as a result of exercise, hormones etc.  see also → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

__Sensor noise__ = a term used to describe the unstable __CGM’s__ readings leading to "jumping" __BG__ values.  Further info → [Wiki - 'Smoothing blood glucose data'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

__SMB__ = Super Micro Bolus.
An __AAPS__ feature for faster insulin delivery in order to adjust __BG__.  Further info → [Wiki - '__SMB__'](#Open-APS-features-super-micro-bolus-smb) and  see also __UAM__.

__Super bolus__ = shift of basal to bolus insulin for faster __BG__ adjustment.

__TBB__ = total base basal (sum of basal rate within 24 hours) → see also __TBR__ / __TDD__.

__TBR__ = temporary basal rate→ see also __TBB__ / __TDD__.

__TDD__ = total daily dose (bolus + basal per day) → see also __TBB__ / __TBR__.

__TT__ = temporary target temporary increase/decrease of the user’s __BG__ target (range) e.g. for eating or sport activities.  Further info → [Wiki - 'temp targets'](../DailyLifeWithAaps/TempTargets.md).

__UAM__ = unannounced meals. 
Detection of significant increase in __BG__ levels due to meals, adrenaline or other influences and attempt to adjust this.  Further info → [Wiki - 'UAM'](#enable-uam) and see also __SMB__.

__Virtual pump__ = an __AAPS__ feature which allows the user to try __AAPS’__ functions or for PWD using a pump model with no __AAPS__ driver for looping → see also __Open Loop__.

__Wallpaper__ = __AAPS__ background image see phones page.

__xDrip__ = open source software to read __CGM__ systems.

__Zero-temp__ = temporary basal rate with 0% (no basal insulin delivery).

→ see also [the OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)
