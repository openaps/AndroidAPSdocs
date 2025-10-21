# Glossary

 __AAPS__ =  AndroidAPS is the name of the Android app.

__AAPSClient__ (or __NSClient__) = a remote control feature that can be used by caregivers via a follower phone to follow a user’s __AAPS__ by connecting to the user’s __Nightscout's__ site. Further info → Wiki - 'NS Client'. Objectives learning program within __AAPS__ provides step by step guidance. Further info → Wiki - 'objectives'.

__APS__ = Artificial Pancreas System.

__AMA__ = Advanced Meal Assist.
An algorithm which allows __AAPS__ to increase the user’s basal more aggressively after a meal bolus. Further info → Wiki - 'AMA'.

__Adjustment Factor__ = used within **DynamicISF** and is a value set within a user's **Preferences** between 1% and 300%. This acts as a multiplier on the **TDD** value.
- increasing the **Adjustment Factor** value above 100 % makes **DynamicISF** more aggressive: the **ISF** values become smaller (i.e. more insulin required to decrease **BG** levels a small amount)
- lowering the **Adjustment Factor** value under 100% makes **DynamicISF** less aggressive: the **ISF** values become larger (i.e. less insulin required to decrease **BG** levels a small amount).

__Android Auto__ = a system used to host certain functions of an Android smartphone’s features, including __AAPS__, within a car's display. Further info → Wiki - 'android auto'.

__APK__ = Android application Package. 
A software installation file.  Further info → Wiki - 'Building APK'.

__Autosens__ = calculation of sensitivity to insulin between a period of a 24 and 8 hour window etc. Further info → DIABETTECH - __Autosens__.

__Azure__ = cloud computing platform to host __Nightscout__ web app Azure → see also __Nightscout__.

__BAT__ = status light low battery on __AAPS’__ home screen __Preferences__, Screenshots → see also __CAN__ / __RES__ / __SEN__.

__BG__ =  blood glucose.

__BGI__ = blood glucose impact.
The degree to which __BG__ 'should' rise or fall based on insulin activity alone.

__BG source__ = the source of the user’s __BG__ values derived from either __CGM__ or __FGM__ through a system integration software like __BYODA__, __xDrip+__ etc. Further info → Wiki - 'BG source'

__Bridge__ = an additional device transforming __FGM__ to __CGM__.  

__BR__ =  Basal Rate. 
The amount of insulin in a given time block to maintain __BG__ at a stable level. → see also __IC__ / __ISF__.

__BYODA__ = Build Your Own Dexcom App. 
A way to generate the user’s own Dexcom App for reading out the sensor data Dexcom G6.

__CAGE__ = Cannula AGE.
Displayed on __AAPS’__ homescreen and Nightscout providing the user’s information entered in the Actions tab / menu → see also __Nightscout__.

__CAN__ = status light overdue cannula change on the __AAPS’__ homescreen __Preferences'__ → see also __BAT__ / __RES__ / __SEN__.

__CGM__ = Continuous Glucose Monitor → see also __FGM__.

__Closed Loop__ = a closed loop system which makes automatic adjustments to the user’s basal delivery based on an __AAPS’s__ algorithm and the user’s __Profile__ settings without requiring the user’s-approval. Further info → Wiki - 'closed loop'.

__COB__ = Carbs On Board. 
This is the amount of carbohydrates currently available for the user's digestion → see also IOB.

__CSF__ =Carbs Sensitivity Factor.
i.e. how much does the user’s __BG__ increase for 1g of carbs absorbed.

__DIA__ = Duration of Insulin Action.  Further info →  Wiki - 'insulin types' and see also →  DIABETTECH - 'DIA'.

__DST__ = Daylight Savings Time Wiki DST.

__Dynamic ISF (or DynISF)__ =  a feature within **AAPS** that adapts the insulin sensitivity factor (**ISF**) dynamically based on the user’s:
- Total Daily Dose of insulin (**TDD**); and
- current and predicted **BG** values.


__eCarbs__ = extended Carbs.
Carbs split up over several hours to accommodate/protein and permits __AAPS__ to deliver extended boluses.  Further info →  Wiki - 'eCarbs', 'eCarbs use'.

__FGM__ = Flash Glucose Monitor manufactured by Freestyle Libre.
 Further info →  Wiki - 'BG source' and see also 'CGM'.

__git__ = a tool used store and download the __AAPS’__ source code.  

__GitHub__ = a web-based hosting service and build process for the __AAPS’__ software version-control system for tracking changes in computer files and coordinating work on those files especially for teams. 
It is also necessary for __APK__ updates.  Further info →  Wiki - 'update APK'.

__Glimp__ = an app to collect values from Freestyle Libre Glimp.

__IC (or I:C)__ = Insulin to Carb ratio. 
(i.e. how many carbs are covered by one unit of insulin?).

__IOB__ = Insulin On Board.
Insulin active in the user’s body.

__ISF__ = Insulin Sensitivity Factor.
The expected decrease in BG as a result of one unit of insulin.

__Keystore (or JKS)__ = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your __AAPS'__ build (and rebuid).

__LGS__ = Low Glucose Suspend. 
__AAPS__ will reduce basal if __BG__ is dropping and if __BG__ is rising, then it will only increase basal if  __IOB__ is negative (from a previous __LGS__), otherwise basal rates will remain the same as the user’s selected __Profile__. The user may temporarily experience spikes following treated hypos without the ability to increase basal on the rebound. → see also objective 6.

__LineageOS__ = free and open-source operating system for smartphones etc. 
(When using Accu-Chek Combo see Wiki - Combo pump).

__Log files__ = __AAPS’__ records of the user's actions (useful for troubleshooting and debugging). Further info →  Wiki - 'log files'.

__maxIOB__ = maximum total IOB.
This is a safety feature and prevents __AAPS__ delivering insulin over the user’s settings.  Further info →  Wiki - 'SMB'.

__min_5m_carbimpact__ = safety feature that is a calculation of default carb decay when carb absorption cannot be determined based on the user’s blood’s reactions. 
This is a safety feature.  Further info →  Wiki - 'config builder'.

__Nightscout__ = open source project to access and report __CGM__ data. 
The central data hub for the user’ __AAPS__ data and can generate reports to view the user’s historical __NIghtscout__ data expected HbA1c, time in range) or search for patterns in the data via percentile chart etc. 

__Nightscout__ → see also __Nightscout Reporter__. This is particularly useful for parents following their child's diabetes management.

__Nightscout Reporter Tool__ = a tool which generates PDFs reports from Nightscout web app data. See 'Nightscout Reporter', 'NS Reporter' @ Facebook.

__NSClient__ ( or __‘AAPSClient’)__ = see __AAPSClient__.

__OpenAPS__ = Open Artificial Pancreas System.

__Open Loop system__ = an __AAPS__ feature that will recommend adjustments and which must be performed manually by the user on __AAPS__.  Further info →  Wiki - 'config builder'.

__Oref0 / Oref1__ = sensitivity detection and "reference design implementation version 0/1". It is the key algorithm behind OpenAPS Wiki - sensitivity detection.

__Peak time__ = time of maximum effect of insulin given. Further info → Wiki - 'config builder'.

__PH__ = Pump History. 
This can be accessed in __AAPS’__ treatments which are located on the 3 dot menu on the right side of __AAPS__ main screen Screenshots.

__Predictions__ = predictions for __BG__ in the future based on different calculations. Further info → Wiki - 'prediction lines'.

__Profile__ = the user’s basic treatment settings (basal rate, __DIA__, __IC__, __ISF__, __BG__ target).
AAPSv3 only supports local profiles created within __AAPS__ but __Nightscout__ __Profiles__ can be copied (synchronised) to __AAPS__. Further info → Wiki - 'profile'.

__Profile switch__ = (temporary) switch  of the user’ __Profile__ to a different __Profile__ saved within __AAPS__.

__Profile Percentage__ = a (temporary_ percentage increase or decrease applied to a user’s __Profile__ for a selected time period.

__RES__ = status light overdue reservoir change on the __AAPS’__ homescreen Preferences, Screenshots → see also __BAT__ / __CAN__ / __SEN__.

__RileyLink__ = open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz (used for old Medtronic pumps) or 433MHz (used for Omnipod Eros pumps) wireless communication RileyLink.

__SAGE__ = sensor age. 
This is displayed on the homescreen of __AAPS__ and in __Nightscout__ if information was entered in the Actions tab / menu → see also __Nightscout__.

__SEN__ = status light sensor change on home screen Preferences, Screenshots → see also __BAT__ / __CAN__ / __RES__.

__Sensivity detection__ = calculation of sensitivity to insulin as a result of exercise, hormones etc.  see also → DIABETTECH - 'Autosens'.

__Sensor noise__ = a term used to describe the unstable __CGM’s__ readings leading to "jumping" __BG__ values.  Further info → Wiki - 'sensor noise'.

__SMB__ = Super Micro Bolus.
An __AAPS__ feature for faster insulin delivery in order to adjust __BG__.  Further info → Wiki - '__SMB__' and  see also __UAM__.

__Super bolus__ = shift of basal to bolus insulin for faster __BG__ adjustment.

__TBB__ = total base basal (sum of basal rate within 24 hours) → see also __TBR__ / __TDD__.

__TBR__ = temporary basal rate→ see also __TBB__ / __TDD__.

__TDD__ = total daily dose (bolus + basal per day) → see also __TBB__ / __TBR__.

__TT__ = temporary target temporary increase/decrease of the user’s __BG__ target (range) e.g. for eating or sport activities.  Further info → Wiki - 'temp targets'.

__UAM__ = unannounced meals. 
Detection of significant increase in __BG__ levels due to meals, adrenaline or other influences and attempt to adjust this.  Further info → Wiki - 'UAM' and see also __SMB__.

__Virtual pump__ = an __AAPS__ feature which allows the user to try __AAPS’__ functions or for PWD using a pump model with no __AAPS__ driver for looping → see also __Open Loop__.

__Wallpaper__ = __AAPS__ background image see phones page.

__xDrip+__ = open source software to read __CGM__ systems xDrip+.

__Zero-temp__ = temporary basal rate with 0% (no basal insulin delivery).

→ see also [the OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)
