# Glossario

**AAPS** = AndroidAPS è il nome dell'app Android.

**AAPSClient** = the follower app for caregivers. On a follower phone it follows a user’s **AAPS** through the user’s **Nightscout** site and, once paired with the **AAPS** phone, controls it remotely. Da non confondere con **NSClient**. Further info → [Wiki - 'The AAPSClient app'](../RemoteFeatures/AapsClient.md) and [Master ↔ Client control](#client-master-control).

**Activity** = Insulin activity, representing the speed of decay of IOB. See [Wiki - 'DIA'](#Config-Builder-insulin-dia) and the related **BGI**.

**AID** = Automated Insulin Delivery. The term generally used in clinical practice and research for a system which automatically adjusts insulin delivery using **CGM** data. **APS** and **closed loop** mean the same thing → see also **OS-AID**.

**APS** = Artificial Pancreas System → see also **AID**.

**AMA** = Advanced Meal Assist (assistenza avanzata ai pasti). An algorithm which allows **AAPS** to increase the user’s basal more aggressively after a meal bolus. Further info → [Wiki - 'Advanced Meal Assist (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** = used within **DynamicISF** and is a value set within a user's **Settings** between 1% and 300%. This acts as a multiplier on the **TDD** value. Vedi [Wiki - Fattore di regolazione per ISF Dinamico](#dyn-isf-adjustment-factor)

**Android Auto** = a system used to host certain functions of an Android smartphone’s features, including **AAPS**, within a car's display. Further info → [Wiki - 'android auto'](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package. A software installation file. Further info → [Wiki - 'Building APK'](../SettingUpAaps/BuildingAaps.md).

**Autosens** = calcolo della sensibilità all'insulina in una finestra di 24 ore e in una di 8 ore ecc. Further info → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = piattaforma di cloud computing per ospitare l'app web **Nightscout** → vedi anche **Nightscout**.

**BAT** = status light for low pump battery, shown in the status row of **AAPS'** main screen → see also **CAN** / **RES** / **SEN**.

**BG** = blood glucose.

**BGI** = impatto sulla glicemia (blood glucose impact). The degree to which **BG** 'should' rise or fall based on insulin activity alone.

**BG source** = An AAPS setting for configuring the source for blood glucose data. Vedi [Wiki - Sorgente Glicemia](#Config-Builder-bg-source)

**Bridge** = an additional device transforming **FGM** to **CGM**.

**BR** = Basal Rate. The amount of insulin in a given time block to maintain **BG** at a stable level. → vedi anche **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App. A way to generate the user’s own Dexcom App for reading out the sensor data Dexcom G6.

**CAGE** = Cannula AGE. Displayed on **AAPS'** main screen and in Nightscout, based on the user's **Prime/Fill** careportal entries → see also **Nightscout**.

**CAN** = status light for overdue cannula change, shown in the status row of **AAPS'** main screen → see also **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor → see also **FGM**.

**Loop chiuso** (Closed Loop) = un sistema che regola in automatico la basale erogata all'utente in base all'algoritmo di **AAPS** e alle impostazioni del **Profilo** dell'utente, senza chiedere la sua approvazione. Per maggiori informazioni → [Wiki - “loop chiuso”](#KeyAapsFeatures-ClosedLoop) e vedi anche **HCL** / **FCL**.

**COB** = Carbs On Board. This is the amount of carbohydrates currently available for the user's digestion → see also IOB.

**CSF** =Carbs Sensitivity Factor. i.e. how much does the user’s **BG** increase for 1g of carbs absorbed.

**DIA** = Duration of Insulin Action. Further info → [Wiki - 'DIA'](#Config-Builder-insulin-dia) and see also → [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = ora legale (Daylight Saving Time). Vedi [Wiki - Cambio di fuso orario e ora legale](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (or DynISF)** = a feature within **AAPS** that adapts the insulin sensitivity factor (**ISF**) dynamically based on the user’s **TDD** and **BG**.

**eCarbs** = extended Carbs. Carbs split up over several hours (e.g. to cover fat/protein), which lets **AAPS** spread the insulin like an extended bolus. Further info → [Wiki - 'Extended Carbs'](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop. A loop which needs no mealtime input from the user: no carb counting and no meal bolus. Per maggiori informazioni → [Wiki - “loop chiuso completo”](../AdvancedOptions/FullClosedLoop.md) e vedi anche **HCL**.

**FGM** = Flash Glucose Monitor such as the Abbott Freestyle Libre. Per maggiori informazioni → [Wiki - “Sorgente Glicemia”](#Config-Builder-bg-source) e vedi anche “CGM”.

**git** = uno strumento per conservare e scaricare il codice sorgente di **AAPS**.

**GitHub** = a web-based service that hosts the **AAPS** source code and its version control (tracking changes in files and coordinating work on them, especially for teams), and can also build the app. It is also necessary for **APK** updates. Per maggiori informazioni → [Wiki - “Aggiornare l'APK”](../Maintenance/UpdateToNewVersion.md).

**Glimp** = an app to collect values from Freestyle Libre.

**HCL (or Hybrid Closed Loop)** = a loop which automates insulin delivery between meals, but still requires the user to bolus for meals. Nearly every system in everyday use, including **AAPS**, is a hybrid closed loop → see also **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio. Note that this is conventionally g/U despite the acronym suggesting inverse.

**IOB** = insulina attiva (Insulin On Board). Insulin active in the user’s body. Vedi [Wiki - Insulina attiva](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor. The expected decrease in BG as a result of one unit of insulin. L'unità è mg/dL/U oppure mmol/L/U. These are not equivalent without a conversion!

**Keystore (or JKS)** = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your **AAPS'** build (and rebuild).

**LGS** = Low Glucose Suspend. See [Wiki - Low Glucose Suspend](#KeyAapsFeatures-LGS)

**LineageOS** = free and open-source operating system for smartphones etc. When using Accu-Chek Combo see [Wiki - Combo pump](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Log files** = **AAPS’** records of the user's actions (useful for troubleshooting and debugging). Further info → [Wiki - 'log files'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = IOB totale massimo. This is a safety feature and prevents **AAPS** delivering insulin over the user’s settings. Further info → [Wiki - 'Maximum total IOB OpenAPS can’t go over'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = safety feature that is a calculation of default carb decay when carb absorption cannot be determined based on the user’s blood’s reactions. Per maggiori informazioni → [Wiki - “min_5m_carbimpact”](#Preferences-min_5m_carbimpact).

**Nightscout** = progetto open source per accedere ai dati del **CGM** e creare report. The central data hub for the user’s **AAPS** data and can generate reports to view the user’s historical **Nightscout** data, such as expected HbA1c, time in range or search for patterns in the data via percentile chart etc.

**Nightscout** → vedi anche **Nightscout Reporter**. This is particularly useful for parents following their child's diabetes management.

**Nightscout Reporter Tool** = a tool which generates PDFs reports from Nightscout web app data. See 'Nightscout Reporter', 'NS Reporter' @ Facebook.

**NSClient** (**NSClientV3**) = il plugin di **AAPS** che sincronizza i dati con **Nightscout** (**Configurazione** → **Comunicazione**). It is not the same as **AAPSClient**, the follower app. Further info → [Wiki - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, the predecessor project and basis of AAPS.

**Open Loop system** = an **AAPS** feature that will recommend adjustments and which must be performed manually by the user on **AAPS**. Further info → [Wiki - 'Open Loop'](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = sensitivity detection and "reference design implementation version 0/1". È l'algoritmo principale di OpenAPS. Per maggiori informazioni → [Wiki - “rilevamento della sensibilità”](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery. Un sistema **AID** costruito con software open source, come **AAPS**, **OpenAPS**, Loop o Trio. These systems are not formally approved by health bodies (FDA, NHS etc.) → see also **AID**.

**Peak time** = time of maximum effect of insulin given. Further info → [Wiki - 'Duration of insulin action (DIA) and peak'](#Config-Builder-insulin-dia).

**PH** = Pump History. This can be accessed in **AAPS’** treatments history: open the **menu** (☰) at the top left of the main screen and select **Treatments**.

**Predictions** = predictions for **BG** in the future based on different calculations. Further info → [Wiki - 'prediction lines'](#aaps-screens-prediction-lines).

**Profile** = the user’s basic treatment settings (basal rate, **DIA**, **IC**, **ISF**, **BG** target). **AAPS** usa solo i profili creati in **AAPS** (**Gestisci** → **Profilo**), ma i **Profili** di **Nightscout** possono essere copiati (sincronizzati) in **AAPS**. Further info → [Wiki - 'Your AAPS profile'](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** = (temporary) switch of the user’s **Profile** to a different **Profile** saved within **AAPS**.

**Profile Percentage** = a (temporary) percentage increase or decrease applied to a user’s **Profile** for a selected time period.

**RES** = status light for overdue reservoir change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **SEN**.

**RileyLink** = open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz (used for old Medtronic pumps) or 433MHz (used for Omnipod Eros pumps) wireless communication.

**SAGE** = sensor age. This is displayed on the main screen of **AAPS** and in **Nightscout**, based on the user's **Sensor Insert** careportal entries → see also **Nightscout**.

**SEN** = status light for overdue sensor change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **RES**.

**Sensitivity detection** = calculation of sensitivity to insulin as a result of exercise, hormones etc. see also → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensor noise** = a term used to describe the unstable **CGM’s** readings leading to "jumping" **BG** values. Further info → [Wiki - 'Smoothing blood glucose data'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus. An **AAPS** feature for faster insulin delivery in order to adjust **BG**. Further info → [Wiki - '**SMB**'](#Open-APS-features-super-micro-bolus-smb) and see also **UAM**.

**Super bolus** = shift of basal to bolus insulin for faster **BG** adjustment.

**TBB** = total base basal (sum of basal rate within 24 hours) → see also **TBR** / **TDD**.

**TBR** = basale temporanea (temporary basal rate) → vedi anche **TBB** / **TDD**.

**TDD** = total daily dose (bolus + basal per day) → see also **TBB** / **TBR**.

**TT** = target temporaneo (temporary target): aumento o diminuzione temporanea del target (intervallo) di **glicemia** dell'utente, ad es. per mangiare o fare sport. Further info → [Wiki - 'temp targets'](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals. Detection of significant increase in **BG** levels due to meals, adrenaline or other influences and attempt to adjust this. Further info → [Wiki - 'UAM'](#enable-uam) and see also **SMB**.

**Micro virtuale** (Virtual pump) = una funzione di **AAPS** che permette all'utente di provare le funzioni di **AAPS**, o permette alle persone con diabete il cui modello di micro non ha un driver **AAPS** di usare **AAPS** come loop aperto → vedi anche **Loop aperto**.

**Wallpaper** = **AAPS** background image see phones page.

**xDrip** = software open source per leggere i sistemi **CGM**.

**Zero-temp** = temporary basal rate with 0% (no basal insulin delivery).

→ vedi anche [la documentazione di OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)