# Glossary

Term | Description | see also | more details @
---|---|---|---
AAPS | AndroidAPS - artifical pancreas system | | 
AMA | advanced meal assist - advanced algorithm to handle carbs | MA / SMB | <a href="https://androidaps.readthedocs.io/en/latest/EN/Usage/Open-APS-features.html#advanced-meal-assist-ama">Wiki - AMA</a>
APK | software installation file (Android application package) | | <a href="https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Building-APK.html">Wiki - Building APK</a>
Autosens | calculation of sensitivity to insulin as a result of exercise, hormones etc. | | <a href="www.diabettech.com/openaps/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/">DIABETTECH - Autosens</a>
Azure | cloud computing platform to host Nightscout data | Heroko / Nightscout | <a href="https://azure.microsoft.com/">Azure</a>
BG | blood glucose | |
BGI | blood glucose interaction -degree to which BG 'should' be rising or falling based on insulin activity alone ||
BG source | Where do your glucose values come from? | CGM / FGM | <a href="https://androidaps.readthedocs.io/en/latest/EN/Configuration/Config-Builder.html#bg-source">Wiki - BG source</a>
BlueReader | bluetooth transmitter to use Freestyle Libre as CGM | Blukon Nightreader / MiaoMiao | <a href="https://bluetoolz.de/blueorder/#home">BlueReader</a>
Blukon Nightreader | bluetooth transmitter to use Freestyle Libre as CGM | BlueReader / MiaoMiao | <a href="https://www.ambrosiasys.com/howit">Ambrosia Bluon Nightreader</a>
BR | basal rate | | 
CAGE | canula age - displayed in Nightscout if information was entered in the AAPS careportal tab or through AAPS actions tab 'prime' | Nightscout | 
CGM | continuous glucose monitor | | 
Closed Loop | closed-loop systems make automatic adjustments to basal delivery, without needing user-approval, based on an algorithm | Open loop | <a href="https://androidaps.readthedocs.io/en/latest/EN/Configuration/Config-Builder.html#closed-loop">Wiki closed loop</a>
COB | carbs on board | | 
DIA | duration of insulin action | | <a href="https://androidaps.readthedocs.io/en/latest/EN/Configuration/Config-Builder.html#insulin">Wiki insulin types</a><br><a href="http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/">DIABETTECH - DIA</a>
DST | daylight savings time | | <a href="https://androidaps.readthedocs.io/en/latest/EN/Usage/Timezone-traveling.html#time-adjustment-daylight-savings-time-dst">Wiki DST</a>
eCarbs | "extended carbs" - carbs split up over serveral hours (i.e. lot of fat/protein)<br>extended boluses you might know from regular pump therapy do not make much sense when looping | SMB | <a href="https://androidaps.readthedocs.io/en/latest/EN/Usage/Extended-Carbs.html#extended-carbs-ecarbs">Wiki - eCarbs</a><br><a href="https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html">eCarbs use case</a>
FGM | flash glucose monitor (Freestyle Libre)| | <a href="https://androidaps.readthedocs.io/en/latest/EN/Configuration/BG-Source.html?highlight=blukon#bg-source">Wiki - BG source</a>
git | version-control system for tracking changes in computer files and coordinating work on those files<br>-> neccessary for APK updates | | <a href="https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Update-to-new-version.html#master-branch">Wiki - update APK</a>
Github | web-based hosting service for version control using Git<br>-> storage of source code | | <a href="https://github.com/MilosKozak/AndroidAPS">Github AndroidAPS</a>
Glimp | app to collect values from Freestyle Libre | | <a href="http://www.nightscout.info/wiki/welcome/nightscout-for-libre">Nightscout with Glimp</a> 
Heroku | cloud computing platform to host Nightscout data | Heroko / Nightscout | <a href="www.heroku.com">Heroku</a>
IC (or I:C) | insulin to carb ratio (How many carbs are covered by one unit of insulin?) | | 
IOB | insulin on board -  insulin active in your body | | 
ISF | insulin sensitivity factor - the expected decrease in BG as a result of one unit of insulin | | 
LineageOS | free and open-source operating system for smartphones etc.<br>alternative OS for smartphones not running Android 8.1 (Oreo) | | <a href="https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Combo-Pump.html#hardware-requirements">Wiki - Combo pump</a>
Log files | record of all AAPS actions (useful for trubbleshooting and debugging) | | <a href="https://androidaps.readthedocs.io/en/latest/EN/Usage/Accessing-logfiles.html#accessing-logfiles">Wiki - log files</a>
MA | meal assist - standard algorithm to handle carbs | AMA / SMB | <a href="https://androidaps.readthedocs.io/en/latest/EN/Usage/Open-APS-features.html#meal-assist-ma">Wiki - MA</a>
maxIOB | security feature - maximum total IOB AAPS can't go over | | <a href="https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Releasenotes.html#settings-to-adjust-when-switching-from-ama-to-smb">Wiki - maxIOB</a><br><a href="https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Releasenotes.html#settings-to-adjust-when-switching-from-ama-to-smb">Wiki - SMB</a>
MiaoMiao | bluetooth transmitter to use Freestyle Libre as CGM | BlueReader / Blukon Nightreader | <a href="https://www.miaomiao.cool/">MiaoMiao</a>
min_5m_carbimpact | saftey feature - default carb decay at times when carb absorption can’t be dynamically worked out based on your bloods reactions | | <a href="https://androidaps.readthedocs.io/en/latest/EN/Configuration/Config-Builder.html#absorption-settings">Wiki - config builder</a>
Nightscout | open source project to access and report CGM data | | <a href="http://www.nightscout.info/">Nightscout</a>
NS Client | part of AAPS to connect to your Nightscout site | | <a href="https://androidaps.readthedocs.io/en/latest/EN/Usage/Troubleshooting-NSClient.html#troubleshooting-nsclient">Wiki - NS Client</a>
Objectives | learning program within AAPS guiding you step by step from open to closed loop | | <a href="https://androidaps.readthedocs.io/en/latest/EN/Usage/Objectives.html">Wiki - objectives</a>
OpenAPS | open artificial pancreas system<br>APS run on small computers (i.e. Raspberry Pie)<br>AAPS uses some of the OpenAPS features | | <a href="https://openaps.readthedocs.io">OpenAPS docs</a>
Open Loop | system will suggest recommended adjustments which have to be performed manually on the pump || <a href="https://androidaps.readthedocs.io/en/latest/EN/Configuration/Config-Builder.html#open-loop">Wiki - config builder</a>
Oref0 / Oref1 | sensitivity detection<br>"reference design implementation version 0/1" - the key algorithm behind OpenAPS || <a href="https://androidaps.readthedocs.io/en/latest/EN/Configuration/Sensitivity-detection-and-COB.html#sensitivity-detection">Wiki - sensitivity detection</a>
Peak time | time of maximum effect of insulin given|| <a href="https://androidaps.readthedocs.io/en/latest/EN/Configuration/Config-Builder.html#insulin">Wiki - config builder</a>
Predictions | preditions for BG in the future based on different calculations || <a href="https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Releasenotes.html#overview-tab">Wiki - predition lines</a>
Profile | basic treatment settings (basal rate, DIA, IC, ISF, BG target)<br>can be defined locally or through Nightscout || <a href="https://androidaps.readthedocs.io/en/latest/EN/Configuration/Config-Builder.html#profile">Wiki - profile</a>
Profile switch | (temporary) change of profile used or percentual increase/decrease|| <a href="https://androidaps.readthedocs.io/en/latest/EN/Usage/Profiles.html">Wiki - profile switch</a>
RileyLink | open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz wireless communication (used for old Medtronic pumps)||
SAGE | sensor age - displayed in Nightscout if information was entered in the AAPS careportal tab| Nightscout |
Sensivity detection|calculation of sensitivity to insulin as a result of exercise, hormones etc. | | <a href="www.diabettech.com/openaps/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/">DIABETTECH - Autosens</a>
Sensor noise | unstable CGM readings leading to "jumping" values || <a href="https://androidaps.readthedocs.io/en/latest/EN/Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html#smoothing-blood-glucose-data">Wiki - sensor noise</a>
SMB|super micro bolus<br>advanced feature for faster BG adjustment|UAM|<a href="https://androidaps.readthedocs.io/en/latest/EN/Usage/Open-APS-features.html#super-micro-bolus-smb">Wiki - SMB</a>
Super bolus|shift of basal to bolus insulin for faster BG adjustment||<a href="https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus">John Walsh - The Super Bolus</a>
TBB|total base basal (sum of basal rate within 24 hours)||
TBR|temporary basal rate||
TDD|total daily dose (bolus + basal per day)||
TT|temporary target<br>temporary increase/decrease of BG target (range)||<a href="https://androidaps.readthedocs.io/en/latest/EN/Usage/temptarget.html#temp-targets">Wiki - temp targets</a>
UAM|unanounced meals - detection of significant increase in glucose levels due to meals, adrenaline or other influences and attempt to adjust this with SMB|SMB|<a href="https://androidaps.readthedocs.io/en/latest/EN/Usage/Open-APS-features.html?highlight=uam#super-micro-bolus-smb">Wiki - SMB</a>
Virtual pump|option to try AAPS functions or for PWD using a pump model with no AndroidAPS driver for looping||
xDrip / xDrip+|open source software to read CGM systems||<a href="https://jamorham.github.io/#xdrip-plus"<xDrip+</a><br><a href="http://stephenblackwasalreadytaken.github.io/xDrip/">xDrip</a>
Zero-temp|temporary basal rate with 0% (no basal insulin delivery)||


See also https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html

