# Glosar

**AAPS** = AndroidAPS este numele aplicației Android.

**AAPSClient** = the follower app for caregivers. On a follower phone it follows a user’s **AAPS** through the user’s **Nightscout** site and, once paired with the **AAPS** phone, controls it remotely. A nu se confunda cu **NSClient**. Mai multe informații → [Wiki – „Aplicația AAPSClient”](../RemoteFeatures/AapsClient.md) și [Controlul dispozitiv principal ↔ client](#client-master-control).

**Activity** = Insulin activity, representing the speed of decay of IOB. See [Wiki - 'DIA'](#Config-Builder-insulin-dia) and the related **BGI**.

**AID** = administrare automată a insulinei (Automated Insulin Delivery). The term generally used in clinical practice and research for a system which automatically adjusts insulin delivery using **CGM** data. **APS** și **bucla închisă** înseamnă același lucru → vedeți și **OS-AID**.

**APS** = sistem de pancreas artificial (Artificial Pancreas System) → vedeți și **AID**.

**AMA** = Advanced Meal Assist. An algorithm which allows **AAPS** to increase the user’s basal more aggressively after a meal bolus. Further info → [Wiki - 'Advanced Meal Assist (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** = used within **DynamicISF** and is a value set within a user's **Settings** between 1% and 300%. This acts as a multiplier on the **TDD** value. See [Wiki - DynamicISF adjustment factor](#dyn-isf-adjustment-factor)

**Android Auto** = a system used to host certain functions of an Android smartphone’s features, including **AAPS**, within a car's display. Mai multe informații → [Wiki – „Android Auto”](../RemoteFeatures/AndroidAuto.md).

**APK** = pachet de aplicație Android (Android application Package). A software installation file. Further info → [Wiki - 'Building APK'](../SettingUpAaps/BuildingAaps.md).

**Autosens** = calculul sensibilității la insulină într-o fereastră de 24 de ore și una de 8 ore etc. Mai multe informații → [DIABETTECH – **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = cloud computing platform to host **Nightscout** web app → see also **Nightscout**.

**BAT** = status light for low pump battery, shown in the status row of **AAPS'** main screen → see also **CAN** / **RES** / **SEN**.

**BG** = glicemie (blood glucose).

**BGI** = impactul asupra glicemiei (blood glucose impact). The degree to which **BG** 'should' rise or fall based on insulin activity alone.

**BG source** = An AAPS setting for configuring the source for blood glucose data. Vedeți [Wiki – Sursă glicemie](#Config-Builder-bg-source)

**Bridge** = an additional device transforming **FGM** to **CGM**.

**BR** = Basal Rate. The amount of insulin in a given time block to maintain **BG** at a stable level. → vedeți și **IC** / **ISF**.

**BYODA** = Construiește-ți propria aplicație Dexcom. O modalitate de a genera propria aplicație Dexcom a utilizatorului pentru a citi datele senzorului Dexcom G6.

**CAGE** = Cannula AGE. Displayed on **AAPS'** main screen and in Nightscout, based on the user's **Prime/Fill** careportal entries → see also **Nightscout**.

**CAN** = status light for overdue cannula change, shown in the status row of **AAPS'** main screen → see also **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor → see also **FGM**.

**Buclă închisă** (Closed Loop) = un sistem cu buclă închisă care ajustează automat administrarea bazalei, pe baza algoritmului **AAPS** și a setărilor din **profilul** utilizatorului, fără să ceară aprobarea utilizatorului. Mai multe informații → [Wiki – „buclă închisă”](#KeyAapsFeatures-ClosedLoop) și vedeți și **HCL** / **FCL**.

**COB** = carbohidrați la bord (Carbs On Board). This is the amount of carbohydrates currently available for the user's digestion → see also IOB.

**CSF** = factor de sensibilitate la carbohidrați (Carbs Sensitivity Factor). i.e. how much does the user’s **BG** increase for 1g of carbs absorbed.

**DIA** = Duration of Insulin Action. Mai multe informații → [Wiki – „DIA”](#Config-Builder-insulin-dia) și vedeți și → [DIABETTECH – „DIA”](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = ora de vară (Daylight Saving Time). Vedeți [Wiki – Schimbarea fusului orar și ora de vară](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (or DynISF)** = a feature within **AAPS** that adapts the insulin sensitivity factor (**ISF**) dynamically based on the user’s **TDD** and **BG**.

**eCarbs** = carbohidrați extinși (extended Carbs). Carbs split up over several hours (e.g. to cover fat/protein), which lets **AAPS** spread the insulin like an extended bolus. Mai multe informații → [Wiki – „Carbohidrați extinși / eCarbs”](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop. A loop which needs no mealtime input from the user: no carb counting and no meal bolus. Further info → [Wiki - 'full closed loop'](../AdvancedOptions/FullClosedLoop.md) and see also **HCL**.

**FGM** = Flash Glucose Monitor such as the Abbott Freestyle Libre. Mai multe informații → [Wiki – „Sursă glicemie”](#Config-Builder-bg-source) și vedeți și „CGM”.

**git** = un instrument folosit pentru a stoca și a descărca codul sursă **AAPS**.

**GitHub** = a web-based service that hosts the **AAPS** source code and its version control (tracking changes in files and coordinating work on them, especially for teams), and can also build the app. It is also necessary for **APK** updates. Mai multe informații → [Wiki – „actualizarea APK”](../Maintenance/UpdateToNewVersion.md).

**Glimp** = an app to collect values from Freestyle Libre.

**HCL (or Hybrid Closed Loop)** = a loop which automates insulin delivery between meals, but still requires the user to bolus for meals. Nearly every system in everyday use, including **AAPS**, is a hybrid closed loop → see also **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio. Note that this is conventionally g/U despite the acronym suggesting inverse.

**IOB** = insulină activă (Insulin On Board). Insulina activă în corpul utilizatorului. Vedeți [Wiki – Insulină activă](#aaps-screens-iob)

**ISF** = factor de sensibilitate la insulină (Insulin Sensitivity Factor). The expected decrease in BG as a result of one unit of insulin. Unit is either mg/dL/U or mmol/L/U. Acestea nu sunt echivalente fără o conversie!

**Keystore (or JKS)** = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your **AAPS'** build (and rebuild).

**LGS** = suspendare la glicemie scăzută (Low Glucose Suspend). Vedeți [Wiki – Suspendare la glicemie scăzută](#KeyAapsFeatures-LGS)

**LineageOS** = free and open-source operating system for smartphones etc. When using Accu-Chek Combo see [Wiki - Combo pump](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Log files** = **AAPS’** records of the user's actions (useful for troubleshooting and debugging). Further info → [Wiki - 'log files'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = IOB total maxim (maximum total IOB). This is a safety feature and prevents **AAPS** delivering insulin over the user’s settings. Mai multe informații → [Wiki – „IOB total maxim pe care OpenAPS nu îl poate depăși”](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = safety feature that is a calculation of default carb decay when carb absorption cannot be determined based on the user’s blood’s reactions. Mai multe informații → [Wiki – „min_5m_carbimpact”](#Preferences-min_5m_carbimpact).

**Nightscout** = proiect open source pentru accesarea și raportarea datelor **CGM**. The central data hub for the user’s **AAPS** data and can generate reports to view the user’s historical **Nightscout** data, such as expected HbA1c, time in range or search for patterns in the data via percentile chart etc.

**Nightscout** → vedeți și **Nightscout Reporter**. This is particularly useful for parents following their child's diabetes management.

**Nightscout Reporter Tool** = un instrument care generează rapoarte PDF din datele aplicației web Nightscout. Vedeți „Nightscout Reporter”, „NS Reporter” pe Facebook.

**NSClient** (**NSClientV3**) = the **AAPS** plugin that synchronizes data with **Nightscout** (**Configuration** → **Communication**). It is not the same as **AAPSClient**, the follower app. Further info → [Wiki - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, the predecessor project and basis of AAPS.

**Open Loop system** = an **AAPS** feature that will recommend adjustments and which must be performed manually by the user on **AAPS**. Mai multe informații → [Wiki – „Buclă deschisă”](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = sensitivity detection and "reference design implementation version 0/1". Este algoritmul principal din spatele OpenAPS. Mai multe informații → [Wiki – „detectarea sensibilității”](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery. An **AID** system built from open-source software, such as **AAPS**, **OpenAPS**, Loop or Trio. These systems are not formally approved by health bodies (FDA, NHS etc.) → see also **AID**.

**Peak time** = time of maximum effect of insulin given. Mai multe informații → [Wiki – „Durata de acțiune a insulinei (DIA) și vârful”](#Config-Builder-insulin-dia).

**PH** = Pump History. This can be accessed in **AAPS’** treatments history: open the **menu** (☰) at the top left of the main screen and select **Treatments**.

**Predictions** = predictions for **BG** in the future based on different calculations. Further info → [Wiki - 'prediction lines'](#aaps-screens-prediction-lines).

**Profile** = the user’s basic treatment settings (basal rate, **DIA**, **IC**, **ISF**, **BG** target). **AAPS** only uses profiles created within **AAPS** (**Manage** → **Profile**), but **Nightscout** **Profiles** can be copied (synchronised) to **AAPS**. Mai multe informații → [Wiki – „Profilul dumneavoastră AAPS”](../SettingUpAaps/YourAapsProfile.md).

**Schimbare de profil** (Profile switch) = schimbarea (temporară) a **profilului** utilizatorului cu un alt **profil** salvat în **AAPS**.

**Profile Percentage** = a (temporary) percentage increase or decrease applied to a user’s **Profile** for a selected time period.

**RES** = status light for overdue reservoir change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **SEN**.

**RileyLink** = open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz (used for old Medtronic pumps) or 433MHz (used for Omnipod Eros pumps) wireless communication.

**SAGE** = sensor age. This is displayed on the main screen of **AAPS** and in **Nightscout**, based on the user's **Sensor Insert** careportal entries → see also **Nightscout**.

**SEN** = status light for overdue sensor change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **RES**.

**Sensitivity detection** = calculation of sensitivity to insulin as a result of exercise, hormones etc. see also → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensor noise** = a term used to describe the unstable **CGM’s** readings leading to "jumping" **BG** values. Mai multe informații → [Wiki – „Netezirea datelor de glicemie”](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus. An **AAPS** feature for faster insulin delivery in order to adjust **BG**. Mai multe informații → [Wiki – „**SMB**”](#Open-APS-features-super-micro-bolus-smb) și vedeți și **UAM**.

**Super bolus** = shift of basal to bolus insulin for faster **BG** adjustment.

**TBB** = total base basal (sum of basal rate within 24 hours) → see also **TBR** / **TDD**.

**TBR** = temporary basal rate → see also **TBB** / **TDD**.

**TDD** = total daily dose (bolus + basal per day) → see also **TBB** / **TBR**.

**TT** = țintă temporară (temporary target): creșterea sau scăderea temporară a țintei (intervalului) de **glicemie** a utilizatorului, de exemplu pentru masă sau pentru activități sportive. Mai multe informații → [Wiki – „Ținte temporare”](../DailyLifeWithAaps/TempTargets.md).

**UAM** = mese neanunțate (unannounced meals). Detection of significant increase in **BG** levels due to meals, adrenaline or other influences and attempt to adjust this. Mai multe informații → [Wiki – „UAM”](#enable-uam) și vedeți și **SMB**.

**Pompă virtuală** (Virtual pump) = o funcție **AAPS** care permite utilizatorului să încerce funcțiile **AAPS** sau permite persoanelor cu diabet (PWD) al căror model de pompă nu are driver **AAPS** să folosească **AAPS** ca buclă deschisă → vedeți și **Buclă deschisă**.

**Wallpaper** = **AAPS** background image see phones page.

**xDrip** = software open source pentru citirea sistemelor **CGM**.

**Bazală temporară zero** (Zero-temp) = rată bazală temporară de 0% (fără administrare de insulină bazală).

→ vedeți și [documentația OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)