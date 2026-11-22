# Pojmovnik

**AAPS** = AndroidAPS je naziv Android aplikacije.

**AAPSClient** = the follower app for caregivers. On a follower phone it follows a user’s **AAPS** through the user’s **Nightscout** site and, once paired with the **AAPS** phone, controls it remotely. Not to be confused with **NSClient**. Further info → [Wiki - 'The AAPSClient app'](../RemoteFeatures/AapsClient.md) and [Master ↔ Client control](#client-master-control).

**Activity** = Insulin activity, representing the speed of decay of IOB. See [Wiki - 'DIA'](#Config-Builder-insulin-dia) and the related **BGI**.

**AID** = Automated Insulin Delivery. The term generally used in clinical practice and research for a system which automatically adjusts insulin delivery using **CGM** data. **APS** and **closed loop** mean the same thing → see also **OS-AID**.

**APS** = Artificial Pancreas System → see also **AID**.

**AMA** = Advanced Meal Assist (napredna pomoć kod obroka). Algoritam koji omogućuje **AAPS-u** da nakon bolusa za obrok agresivnije poveća bazal korisnika. Further info → [Wiki - 'Advanced Meal Assist (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** = used within **DynamicISF** and is a value set within a user's **Settings** between 1% and 300%. Djeluje kao množitelj vrijednosti **TDD**. See [Wiki - DynamicISF adjustment factor](#dyn-isf-adjustment-factor)

**Android Auto** = sustav koji na zaslonu automobila prikazuje određene funkcije Android pametnog telefona, uključujući **AAPS**. Further info → [Wiki - 'android auto'](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (Android paket aplikacije). Instalacijska datoteka softvera. Further info → [Wiki - 'Building APK'](../SettingUpAaps/BuildingAaps.md).

**Autosens** = calculation of sensitivity to insulin over a 24-hour and an 8-hour window etc. Further info → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = cloud computing platform to host **Nightscout** web app → see also **Nightscout**.

**BAT** = status light for low pump battery, shown in the status row of **AAPS'** main screen → see also **CAN** / **RES** / **SEN**.

**BG** = glukoza u krvi (GUK).

**BGI** = blood glucose impact (utjecaj na glukozu u krvi). Koliko bi **GUK** „trebao“ porasti ili pasti samo na temelju djelovanja inzulina.

**BG source** = An AAPS setting for configuring the source for blood glucose data. See [Wiki - BG Source](#Config-Builder-bg-source)

**Bridge** (most) = dodatni uređaj koji **FGM** pretvara u **CGM**.

**BR** = Basal Rate (bazalna stopa). Količina inzulina u određenom vremenskom bloku za održavanje **GUK-a** na stabilnoj razini. → pogledajte i **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (izradite vlastitu Dexcom aplikaciju). Način da korisnik izradi vlastitu Dexcom aplikaciju za očitavanje podataka senzora Dexcom G6.

**CAGE** = Cannula AGE (starost kanile). Displayed on **AAPS'** main screen and in Nightscout, based on the user's **Prime/Fill** careportal entries → see also **Nightscout**.

**CAN** = status light for overdue cannula change, shown in the status row of **AAPS'** main screen → see also **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (kontinuirani monitor glukoze) → pogledajte i **FGM**.

**Closed Loop** = a closed loop system which makes automatic adjustments to the user’s basal delivery based on an **AAPS’s** algorithm and the user’s **Profile** settings without requiring the user’s approval. Further info → [Wiki - 'closed loop'](#KeyAapsFeatures-ClosedLoop) and see also **HCL** / **FCL**.

**COB** = Carbs On Board (aktivni ugljikohidrati). To je količina ugljikohidrata koja je trenutno dostupna za probavu korisnika → pogledajte i IOB.

**CSF** = Carbs Sensitivity Factor (faktor osjetljivosti na ugljikohidrate). tj. koliko se **GUK** korisnika povisi za 1 g apsorbiranih ugljikohidrata.

**DIA** = Duration of Insulin Action (trajanje djelovanja inzulina). Further info → [Wiki - 'DIA'](#Config-Builder-insulin-dia) and see also → [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Saving Time. See [Wiki - Timezone Change and Daylight Saving](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (or DynISF)** = a feature within **AAPS** that adapts the insulin sensitivity factor (**ISF**) dynamically based on the user’s **TDD** and **BG**.

**eCarbs** = extended Carbs (produženi ugljikohidrati, eUH). Carbs split up over several hours (e.g. to cover fat/protein), which lets **AAPS** spread the insulin like an extended bolus. Further info → [Wiki - 'Extended Carbs'](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop. A loop which needs no mealtime input from the user: no carb counting and no meal bolus. Further info → [Wiki - 'full closed loop'](../AdvancedOptions/FullClosedLoop.md) and see also **HCL**.

**FGM** = Flash Glucose Monitor such as the Abbott Freestyle Libre. Further info → [Wiki - 'BG source'](#Config-Builder-bg-source) and see also 'CGM'.

**git** = a tool used to store and download the **AAPS’** source code.

**GitHub** = a web-based service that hosts the **AAPS** source code and its version control (tracking changes in files and coordinating work on them, especially for teams), and can also build the app. It is also necessary for **APK** updates. Further info → [Wiki - 'update APK'](../Maintenance/UpdateToNewVersion.md).

**Glimp** = an app to collect values from Freestyle Libre.

**HCL (or Hybrid Closed Loop)** = a loop which automates insulin delivery between meals, but still requires the user to bolus for meals. Nearly every system in everyday use, including **AAPS**, is a hybrid closed loop → see also **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio. Note that this is conventionally g/U despite the acronym suggesting inverse.

**IOB** = Insulin On Board (aktivni inzulin). Inzulin koji je aktivan u tijelu korisnika. See [Wiki - Insulin on Board](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor (faktor osjetljivosti na inzulin). Očekivani pad GUK-a kao rezultat jedne jedinice inzulina. Unit is either mg/dL/U or mmol/L/U. These are not equivalent without a conversion!

**Keystore (or JKS)** = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your **AAPS'** build (and rebuild).

**LGS** = Low Glucose Suspend (zaštita od niske razine glukoze). See [Wiki - Low Glucose Suspend](#KeyAapsFeatures-LGS)

**LineageOS** = besplatni operacijski sustav otvorenog koda za pametne telefone i sl. When using Accu-Chek Combo see [Wiki - Combo pump](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Datoteke dnevnika** = zapisi **AAPS-a** o radnjama korisnika (korisni za rješavanje problema i otklanjanje pogrešaka). Further info → [Wiki - 'log files'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = maksimalni ukupni aktivni inzulin (IOB). To je sigurnosna značajka koja sprječava da **AAPS** isporuči inzulin iznad postavki korisnika. Further info → [Wiki - 'Maximum total IOB OpenAPS can’t go over'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = sigurnosna značajka; izračun zadane razgradnje ugljikohidrata kada se apsorpcija ugljikohidrata ne može odrediti iz reakcija GUK-a korisnika. Further info → [Wiki - 'min_5m_carbimpact'](#Preferences-min_5m_carbimpact).

**Nightscout** = projekt otvorenog koda za pristup podacima **CGM-a** i izvješćivanje o njima. The central data hub for the user’s **AAPS** data and can generate reports to view the user’s historical **Nightscout** data, such as expected HbA1c, time in range or search for patterns in the data via percentile chart etc.

**Nightscout** → pogledajte i **Nightscout Reporter**. To je posebno korisno roditeljima koji prate liječenje dijabetesa svog djeteta.

**Nightscout Reporter Tool** = alat koji iz podataka web-aplikacije Nightscout izrađuje izvješća u PDF-u. Potražite „Nightscout Reporter“, „NS Reporter“ na Facebooku.

**NSClient** (**NSClientV3**) = the **AAPS** plugin that synchronizes data with **Nightscout** (**Configuration** → **Communication**). It is not the same as **AAPSClient**, the follower app. Further info → [Wiki - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, the predecessor project and basis of AAPS.

**Sustav otvorene petlje** = značajka **AAPS-a** koja predlaže prilagodbe, a korisnik ih mora ručno izvršiti u **AAPS-u**. Further info → [Wiki - 'Open Loop'](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = detekcija osjetljivosti i „reference design implementation version 0/1“ (implementacija referentnog dizajna, verzija 0/1). It is the key algorithm behind OpenAPS. Further info → [Wiki - 'sensitivity detection'](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery. An **AID** system built from open-source software, such as **AAPS**, **OpenAPS**, Loop or Trio. These systems are not formally approved by health bodies (FDA, NHS etc.) → see also **AID**.

**Vrijeme vrha djelovanja** = vrijeme najvećeg učinka danog inzulina. Further info → [Wiki - 'Duration of insulin action (DIA) and peak'](#Config-Builder-insulin-dia).

**PH** = Pump History (povijest pumpe). This can be accessed in **AAPS’** treatments history: open the **menu** (☰) at the top left of the main screen and select **Treatments**.

**Predviđanja** = predviđanja budućeg **GUK-a** na temelju različitih izračuna. Further info → [Wiki - 'prediction lines'](#aaps-screens-prediction-lines).

**Profil** = osnovne postavke liječenja korisnika (bazalna stopa, **DIA**, **IC**, **ISF**, ciljni **GUK**). **AAPS** only uses profiles created within **AAPS** (**Manage** → **Profile**), but **Nightscout** **Profiles** can be copied (synchronised) to **AAPS**. Further info → [Wiki - 'Your AAPS profile'](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** = (temporary) switch of the user’s **Profile** to a different **Profile** saved within **AAPS**.

**Profile Percentage** = a (temporary) percentage increase or decrease applied to a user’s **Profile** for a selected time period.

**RES** = status light for overdue reservoir change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **SEN**.

**RileyLink** = open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz (used for old Medtronic pumps) or 433MHz (used for Omnipod Eros pumps) wireless communication.

**SAGE** = sensor age (starost senzora). This is displayed on the main screen of **AAPS** and in **Nightscout**, based on the user's **Sensor Insert** careportal entries → see also **Nightscout**.

**SEN** = status light for overdue sensor change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **RES**.

**Sensitivity detection** = calculation of sensitivity to insulin as a result of exercise, hormones etc. see also → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Šum senzora** = izraz za nestabilna očitanja **CGM-a** zbog kojih vrijednosti **GUK-a** „skaču“. Further info → [Wiki - 'Smoothing blood glucose data'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus (super mikro bolus). Značajka **AAPS-a** za bržu isporuku inzulina radi korekcije **GUK-a**. Further info → [Wiki - '**SMB**'](#Open-APS-features-super-micro-bolus-smb) and see also **UAM**.

**Superbolus** = prebacivanje bazalnog inzulina u bolus za bržu korekciju **GUK-a**.

**TBB** = total base basal (ukupni osnovni bazal, zbroj bazalne stope unutar 24 sata) → pogledajte i **TBR** / **TDD**.

**TBR** = temporary basal rate → see also **TBB** / **TDD**.

**TDD** = total daily dose (ukupna dnevna doza, bolus + bazal na dan) → pogledajte i **TBB** / **TBR**.

**TT** = temporary target: temporary increase/decrease of the user’s **BG** target (range) e.g. for eating or sport activities. Further info → [Wiki - 'temp targets'](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (nenajavljeni obroci). Otkrivanje značajnog porasta razine **GUK-a** zbog obroka, adrenalina ili drugih utjecaja i pokušaj da se to korigira. Further info → [Wiki - 'UAM'](#enable-uam) and see also **SMB**.

**Virtual pump** = an **AAPS** feature which allows the user to try **AAPS’** functions, or lets PWD whose pump model has no **AAPS** driver use **AAPS** as an open loop → see also **Open Loop**.

**Pozadina** = pozadinska slika **AAPS-a**, pogledajte stranicu o telefonima.

**xDrip** = open source software to read **CGM** systems.

**Nulti privremeni bazal** (Zero-temp) = privremena bazalna stopa od 0 % (bez isporuke bazalnog inzulina).

→ pogledajte i [dokumentaciju OpenAPS-a](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)