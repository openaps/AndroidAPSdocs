# Glossari

**AAPS** = AndroidAPS és el nom de l'aplicació d'Android.

**AAPSClient** = the follower app for caregivers. On a follower phone it follows a user’s **AAPS** through the user’s **Nightscout** site and, once paired with the **AAPS** phone, controls it remotely. Not to be confused with **NSClient**. Further info → [Wiki - 'The AAPSClient app'](../RemoteFeatures/AapsClient.md) and [Master ↔ Client control](#client-master-control).

**Activity** = Insulin activity, representing the speed of decay of IOB. See [Wiki - 'DIA'](#Config-Builder-insulin-dia) and the related **BGI**.

**AID** = Automated Insulin Delivery. The term generally used in clinical practice and research for a system which automatically adjusts insulin delivery using **CGM** data. **APS** and **closed loop** mean the same thing → see also **OS-AID**.

**APS** = Artificial Pancreas System → see also **AID**.

**AMA** = Advanced Meal Assist (assistència avançada per als àpats). Un algoritme que permet a **AAPS** augmentar la basal de l'usuari de manera més agressiva després d'un bolus d'àpat. Further info → [Wiki - 'Advanced Meal Assist (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** = used within **DynamicISF** and is a value set within a user's **Settings** between 1% and 300%. Actua com un multiplicador sobre el valor de la **TDD**. See [Wiki - DynamicISF adjustment factor](#dyn-isf-adjustment-factor)

**Android Auto** = un sistema que mostra algunes funcions d'un telèfon Android, entre elles **AAPS**, a la pantalla d'un cotxe. Further info → [Wiki - 'android auto'](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (paquet d'aplicació d'Android). Un fitxer per instal·lar programari. Further info → [Wiki - 'Building APK'](../SettingUpAaps/BuildingAaps.md).

**Autosens** = calculation of sensitivity to insulin over a 24-hour and an 8-hour window etc. Further info → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = cloud computing platform to host **Nightscout** web app → see also **Nightscout**.

**BAT** = status light for low pump battery, shown in the status row of **AAPS'** main screen → see also **CAN** / **RES** / **SEN**.

**BG** = blood glucose (glucèmia).

**BGI** = blood glucose impact (impacte en la glucèmia). Quant «hauria» de pujar o baixar la **BG** només per l'activitat de la insulina.

**BG source** = An AAPS setting for configuring the source for blood glucose data. See [Wiki - BG Source](#Config-Builder-bg-source)

**Pont** (bridge) = un dispositiu addicional que converteix un **FGM** en un **CGM**.

**BR** = Basal Rate (taxa basal). La quantitat d'insulina en un bloc de temps determinat per mantenir la **BG** estable. → vegeu també **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (compileu la vostra pròpia aplicació Dexcom). Una manera de generar la vostra pròpia aplicació Dexcom per llegir les dades del sensor Dexcom G6.

**CAGE** = Cannula AGE (edat de la cànula). Displayed on **AAPS'** main screen and in Nightscout, based on the user's **Prime/Fill** careportal entries → see also **Nightscout**.

**CAN** = status light for overdue cannula change, shown in the status row of **AAPS'** main screen → see also **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (monitor continu de glucosa) → vegeu també **FGM**.

**Closed Loop** = a closed loop system which makes automatic adjustments to the user’s basal delivery based on an **AAPS’s** algorithm and the user’s **Profile** settings without requiring the user’s approval. Further info → [Wiki - 'closed loop'](#KeyAapsFeatures-ClosedLoop) and see also **HCL** / **FCL**.

**COB** = Carbs On Board (carbohidrats a bord). És la quantitat de carbohidrats que l'usuari encara està digerint → vegeu també IOB.

**CSF** = Carbs Sensitivity Factor (factor de sensibilitat als carbohidrats). És a dir, quant puja la **BG** de l'usuari per cada 1 g de carbohidrats absorbits.

**DIA** = Duration of Insulin Action (durada de l'acció de la insulina). Further info → [Wiki - 'DIA'](#Config-Builder-insulin-dia) and see also → [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Saving Time. See [Wiki - Timezone Change and Daylight Saving](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (or DynISF)** = a feature within **AAPS** that adapts the insulin sensitivity factor (**ISF**) dynamically based on the user’s **TDD** and **BG**.

**eCarbs** = extended Carbs (carbohidrats estesos). Carbs split up over several hours (e.g. to cover fat/protein), which lets **AAPS** spread the insulin like an extended bolus. Further info → [Wiki - 'Extended Carbs'](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop. A loop which needs no mealtime input from the user: no carb counting and no meal bolus. Further info → [Wiki - 'full closed loop'](../AdvancedOptions/FullClosedLoop.md) and see also **HCL**.

**FGM** = Flash Glucose Monitor such as the Abbott Freestyle Libre. Further info → [Wiki - 'BG source'](#Config-Builder-bg-source) and see also 'CGM'.

**git** = a tool used to store and download the **AAPS’** source code.

**GitHub** = a web-based service that hosts the **AAPS** source code and its version control (tracking changes in files and coordinating work on them, especially for teams), and can also build the app. It is also necessary for **APK** updates. Further info → [Wiki - 'update APK'](../Maintenance/UpdateToNewVersion.md).

**Glimp** = an app to collect values from Freestyle Libre.

**HCL (or Hybrid Closed Loop)** = a loop which automates insulin delivery between meals, but still requires the user to bolus for meals. Nearly every system in everyday use, including **AAPS**, is a hybrid closed loop → see also **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio. Note that this is conventionally g/U despite the acronym suggesting inverse.

**IOB** = Insulin On Board (insulina a bord). La insulina activa al cos de l'usuari. See [Wiki - Insulin on Board](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor (factor de sensibilitat a la insulina). La baixada esperada de la glucèmia per efecte d'una unitat d'insulina. Unit is either mg/dL/U or mmol/L/U. These are not equivalent without a conversion!

**Keystore (or JKS)** = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your **AAPS'** build (and rebuild).

**LGS** = Low Glucose Suspend (suspensió per glucèmia baixa). See [Wiki - Low Glucose Suspend](#KeyAapsFeatures-LGS)

**LineageOS** = sistema operatiu lliure i de codi obert per a telèfons intel·ligents, etc. When using Accu-Chek Combo see [Wiki - Combo pump](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Fitxers de registre** (log files) = els registres de les accions de l'usuari que desa **AAPS** (útils per resoldre problemes i depurar errors). Further info → [Wiki - 'log files'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = IOB total màxim. És una funció de seguretat que evita que **AAPS** lliuri insulina per sobre de la configuració de l'usuari. Further info → [Wiki - 'Maximum total IOB OpenAPS can’t go over'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = funció de seguretat que calcula una absorció de carbohidrats per defecte quan l'absorció no es pot determinar a partir de la resposta de la glucèmia de l'usuari. Further info → [Wiki - 'min_5m_carbimpact'](#Preferences-min_5m_carbimpact).

**Nightscout** = projecte de codi obert per consultar i compartir dades del **CGM**. The central data hub for the user’s **AAPS** data and can generate reports to view the user’s historical **Nightscout** data, such as expected HbA1c, time in range or search for patterns in the data via percentile chart etc.

**Nightscout** → vegeu també **Nightscout Reporter**. És especialment útil per als pares que segueixen la gestió de la diabetis del seu fill o filla.

**Nightscout Reporter Tool** = una eina que genera informes en PDF a partir de les dades de l'aplicació web Nightscout. Vegeu «Nightscout Reporter», «NS Reporter» a Facebook.

**NSClient** (**NSClientV3**) = the **AAPS** plugin that synchronizes data with **Nightscout** (**Configuration** → **Communication**). It is not the same as **AAPSClient**, the follower app. Further info → [Wiki - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, the predecessor project and basis of AAPS.

**Sistema de llaç obert** (open loop) = una funció d'**AAPS** que recomana ajustos, que l'usuari ha de fer manualment a **AAPS**. Further info → [Wiki - 'Open Loop'](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = detecció de sensibilitat i «reference design implementation version 0/1» (implementació del disseny de referència, versió 0/1). It is the key algorithm behind OpenAPS. Further info → [Wiki - 'sensitivity detection'](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery. An **AID** system built from open-source software, such as **AAPS**, **OpenAPS**, Loop or Trio. These systems are not formally approved by health bodies (FDA, NHS etc.) → see also **AID**.

**Temps del pic** (peak time) = el moment d'efecte màxim de la insulina administrada. Further info → [Wiki - 'Duration of insulin action (DIA) and peak'](#Config-Builder-insulin-dia).

**PH** = Pump History (historial de la bomba). This can be accessed in **AAPS’** treatments history: open the **menu** (☰) at the top left of the main screen and select **Treatments**.

**Prediccions** = prediccions de la **BG** futura basades en diferents càlculs. Further info → [Wiki - 'prediction lines'](#aaps-screens-prediction-lines).

**Perfil** = la configuració bàsica del tractament de l'usuari (taxa basal, **DIA**, **IC**, **ISF**, objectiu de **BG**). **AAPS** only uses profiles created within **AAPS** (**Manage** → **Profile**), but **Nightscout** **Profiles** can be copied (synchronised) to **AAPS**. Further info → [Wiki - 'Your AAPS profile'](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** = (temporary) switch of the user’s **Profile** to a different **Profile** saved within **AAPS**.

**Profile Percentage** = a (temporary) percentage increase or decrease applied to a user’s **Profile** for a selected time period.

**RES** = status light for overdue reservoir change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **SEN**.

**RileyLink** = open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz (used for old Medtronic pumps) or 433MHz (used for Omnipod Eros pumps) wireless communication.

**SAGE** = sensor age (edat del sensor). This is displayed on the main screen of **AAPS** and in **Nightscout**, based on the user's **Sensor Insert** careportal entries → see also **Nightscout**.

**SEN** = status light for overdue sensor change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **RES**.

**Sensitivity detection** = calculation of sensitivity to insulin as a result of exercise, hormones etc. see also → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Soroll del sensor** (sensor noise) = terme que descriu lectures inestables del **CGM** que fan que els valors de **BG** «saltin». Further info → [Wiki - 'Smoothing blood glucose data'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus. Una funció d'**AAPS** per lliurar insulina més de pressa i així ajustar la **BG**. Further info → [Wiki - '**SMB**'](#Open-APS-features-super-micro-bolus-smb) and see also **UAM**.

**Superbolus** = passar insulina basal a bolus per ajustar la **BG** més de pressa.

**TBB** = total base basal (basal total: suma de la taxa basal en 24 hores) → vegeu també **TBR** / **TDD**.

**TBR** = temporary basal rate → see also **TBB** / **TDD**.

**TDD** = total daily dose (dosi diària total: bolus + basal per dia) → vegeu també **TBB** / **TBR**.

**TT** = temporary target: temporary increase/decrease of the user’s **BG** target (range) e.g. for eating or sport activities. Further info → [Wiki - 'temp targets'](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (àpats no anunciats). Detecció d'una pujada important de la **BG** causada per àpats, adrenalina o altres factors, i intent d'ajustar-la. Further info → [Wiki - 'UAM'](#enable-uam) and see also **SMB**.

**Virtual pump** = an **AAPS** feature which allows the user to try **AAPS’** functions, or lets PWD whose pump model has no **AAPS** driver use **AAPS** as an open loop → see also **Open Loop**.

**Fons de pantalla** (wallpaper) = imatge de fons d'**AAPS**; vegeu la pàgina de telèfons.

**xDrip** = open source software to read **CGM** systems.

**Basal temporal zero** (zero-temp) = basal temporal al 0% (no es lliura insulina basal).

→ vegeu també [la documentació d'OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)