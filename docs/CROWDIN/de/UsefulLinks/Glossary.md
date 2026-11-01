# Glossar

**AAPS** = AndroidAPS is the name of the Android app.

**AAPSClient** = the follower app for caregivers. On a follower phone it follows a user’s **AAPS** through the user’s **Nightscout** site and, once paired with the **AAPS** phone, controls it remotely. Not to be confused with **NSClient**. Further info → [Wiki - 'The AAPSClient app'](../RemoteFeatures/AapsClient.md) and [Master ↔ Client control](#client-master-control).

**Activity** = Insulin activity, representing the speed of decay of IOB. See [Wiki - 'DIA'](#Config-Builder-insulin-dia) and the related **BGI**.

**AID** = Automated Insulin Delivery. The term generally used in clinical practice and research for a system which automatically adjusts insulin delivery using **CGM** data. **APS** and **closed loop** mean the same thing → see also **OS-AID**.

**APS** = Artificial Pancreas System → see also **AID**.

**AMA** = Advanced Meal Assist (dt. fortgeschrittener Mahlzeitenassistent). Ein Algorithmus, der es **AAPS** ermöglicht, die Basalrate nach einem Mahlzeitenbolus zu erhöhen (aggressiver zu machen). Further info → [Wiki - 'Advanced Meal Assist (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** = used within **DynamicISF** and is a value set within a user's **Settings** between 1% and 300%. Dies wirkt als Multiplikator auf den **TDD**-Wert. See [Wiki - DynamicISF adjustment factor](#dyn-isf-adjustment-factor)

**Android Auto** = ein System, das bestimmte Funktionen eines Android-Smartphones, einschließlich **AAPS**, auf dem Display eines Autos zur Verfügung stellt. Further info → [Wiki - 'android auto'](../RemoteFeatures/AndroidAuto.md).

**APK** = Android Application Package. Eine Installationsdatei. Further info → [Wiki - 'Building APK'](../SettingUpAaps/BuildingAaps.md).

**Autosens** = calculation of sensitivity to insulin over a 24-hour and an 8-hour window etc. Further info → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = cloud computing platform to host **Nightscout** web app → see also **Nightscout**.

**BAT** = status light for low pump battery, shown in the status row of **AAPS'** main screen → see also **CAN** / **RES** / **SEN**.

**BG** = blood glucose.

**BGI** = Blood Glucose Impact (dt. Blutzuckerauswirkung). Der Grad, mit dem der **BG** (Glukosewert) allein auf Basis der Insulinaktivität steigen oder fallen sollte.

**BG source** = An AAPS setting for configuring the source for blood glucose data. See [Wiki - BG Source](#Config-Builder-bg-source)

**Bridge** (dt. Brücke) = ein Zusatzgerät, das aus einem **FGM** ein **CGM** macht.

**BR** = Basal Rate (dt. Basalrate). Das ist die Insulinmenge, die benötigt wird, um die Glukosewerte (**BG**) in einer bestimmten Zeitspanne stabil zu halten. → siehe auch **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App. Eine Möglichkeit, um eine eigene Dexcom-App zum Auslesen der Sensordaten Dexcom G6 zu erstellen.

**CAGE** = Cannula AGE (dt. Kanülenalter). Displayed on **AAPS'** main screen and in Nightscout, based on the user's **Prime/Fill** careportal entries → see also **Nightscout**.

**CAN** = status light for overdue cannula change, shown in the status row of **AAPS'** main screen → see also **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (dt. Kontinuierliche Glukosemessung) → siehe auch **FGM**.

**Closed Loop** = a closed loop system which makes automatic adjustments to the user’s basal delivery based on an **AAPS’s** algorithm and the user’s **Profile** settings without requiring the user’s approval. Further info → [Wiki - 'closed loop'](#KeyAapsFeatures-ClosedLoop) and see also **HCL** / **FCL**.

**COB** = Carbs On Board (dt. aktive Kohlenhydrate). Das ist die Kohlenhydratmenge, die derzeit zur Verdauung verfügbar ist → siehe auch IOB.

**CSF** = Carbs Sensitivity Factor (dt. Faktor der Kohlenhydrat-Empfindlichkeit). D.h. wie viel steigt der Glukosewert (**BG**) pro 1 Gramm aufgenommener Kohlenhydrate.

**DIA** = Duration of Insulin Action (dt. Insulinwirkdauer). Further info → [Wiki - 'DIA'](#Config-Builder-insulin-dia) and see also → [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Saving Time. See [Wiki - Timezone Change and Daylight Saving](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (or DynISF)** = a feature within **AAPS** that adapts the insulin sensitivity factor (**ISF**) dynamically based on the user’s **TDD** and **BG**.

**eCarbs** = extended Carbs (dt. verzögerte Kohlenhydrate). Carbs split up over several hours (e.g. to cover fat/protein), which lets **AAPS** spread the insulin like an extended bolus. Further info → [Wiki - 'Extended Carbs'](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop. A loop which needs no mealtime input from the user: no carb counting and no meal bolus. Further info → [Wiki - 'full closed loop'](../AdvancedOptions/FullClosedLoop.md) and see also **HCL**.

**FGM** = Flash Glucose Monitor such as the Abbott Freestyle Libre. Further info → [Wiki - 'BG source'](#Config-Builder-bg-source) and see also 'CGM'.

**git** = a tool used to store and download the **AAPS’** source code.

**GitHub** = a web-based service that hosts the **AAPS** source code and its version control (tracking changes in files and coordinating work on them, especially for teams), and can also build the app. It is also necessary for **APK** updates. Further info → [Wiki - 'update APK'](../Maintenance/UpdateToNewVersion.md).

**Glimp** = an app to collect values from Freestyle Libre.

**HCL (or Hybrid Closed Loop)** = a loop which automates insulin delivery between meals, but still requires the user to bolus for meals. Nearly every system in everyday use, including **AAPS**, is a hybrid closed loop → see also **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio. Note that this is conventionally g/U despite the acronym suggesting inverse.

**IOB** = Insulin On Board (dt. Insulin im Körper). Aktives (wirkendes) Insulin im Körper. See [Wiki - Insulin on Board](#aaps-screens-iob)

**ISF** = Insulin Sensitivitäts-Faktor ("Korrektur-Faktor"). Die durch eine Insulineinheit zu erwartende Glukosewert-Senkung. Unit is either mg/dL/U or mmol/L/U. These are not equivalent without a conversion!

**Keystore (or JKS)** = a Java Key Store which is an encrypted file where your personal developer certificates and keys will be stored required for your **AAPS'** build (and rebuild).

**LGS** = Low Glucose Suspend (dt. Unterbrechung bei niedrigem BZ). See [Wiki - Low Glucose Suspend](#KeyAapsFeatures-LGS)

**LineageOS** = Freies Open-Source-Betriebssystem für Smartphones usw. When using Accu-Chek Combo see [Wiki - Combo pump](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Log files** = **AAPS**-Protokolldateien (Logdateien), die alle Benutzeraktionen enthalten (nützlich für Fehlerbehebung und Debugging). Further info → [Wiki - 'log files'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = maximum total IOB (dt. maximales Gesamt-IOB). Dies ist eine Sicherheitsfunktion und verhindert, dass **AAPS** Insulin über die Benutzereinstellungen hinaus abgibt. Further info → [Wiki - 'Maximum total IOB OpenAPS can’t go over'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = Sicherheitsmerkmal, das eine Berechnung des Standardkohlenhydratabbaus (Verstoffwechselung) darstellt. Dieser Wert wird genutzt, wenn die Kohlenhydrat-Aufnahme nicht anhand der Reaktionen des Blutes bestimmt werden kann. Further info → [Wiki - 'min_5m_carbimpact'](#Preferences-min_5m_carbimpact).

**Nightscout** = Open-Source-Projekt zur Anzeige und Auswertung der CGM-Daten. The central data hub for the user’s **AAPS** data and can generate reports to view the user’s historical **Nightscout** data, such as expected HbA1c, time in range or search for patterns in the data via percentile chart etc.

**Nightscout** → siehe auch **Nightscout Reporter**. Dies ist besonders für Eltern, die das Diabetesmanagement ihres Kindes begleiten, hilfreich.

**Nightscout Reporter Tool** = ein Tool, das PDF-Berichte aus den Daten der Nightscout-Web-App generiert. Siehe 'Nightscout Reporter', 'NS Reporter' @ Facebook.

**NSClient** (**NSClientV3**) = the **AAPS** plugin that synchronizes data with **Nightscout** (**Configuration** → **Communication**). It is not the same as **AAPSClient**, the follower app. Further info → [Wiki - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, the predecessor project and basis of AAPS.

**Open Loop System** = eine **AAPS** Funktion, die Anpassungen empfiehlt, die durch Dich manuell in **AAPS** eingegeben werden muss. Further info → [Wiki - 'Open Loop'](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = Empfindlichkeitserkennung und "Referenzdesign Implementierungsversion 0/1". It is the key algorithm behind OpenAPS. Further info → [Wiki - 'sensitivity detection'](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery. An **AID** system built from open-source software, such as **AAPS**, **OpenAPS**, Loop or Trio. These systems are not formally approved by health bodies (FDA, NHS etc.) → see also **AID**.

**Peak time** (dt. Wirkmaximum) = Zeitpunkt der maximalen Insulinwirkung. Further info → [Wiki - 'Duration of insulin action (DIA) and peak'](#Config-Builder-insulin-dia).

**PH** = Pump History (dt. Pumpenhistorie). This can be accessed in **AAPS’** treatments history: open the **menu** (☰) at the top left of the main screen and select **Treatments**.

**Predictions** (dt. Vorhersage) = Vorhersage des zukünftigen Glukoseverlaufs (**BG**) auf Basis verschiedener Berechnungen. Further info → [Wiki - 'prediction lines'](#aaps-screens-prediction-lines).

**Profile** (dt. Profil) = Alle grundlegenden Einstellungen zur Behandlung Deines Diabetes (Basalrate, **DIA**, **IC**, **ISF**, **BZ**-Ziel). **AAPS** only uses profiles created within **AAPS** (**Manage** → **Profile**), but **Nightscout** **Profiles** can be copied (synchronised) to **AAPS**. Further info → [Wiki - 'Your AAPS profile'](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** = (temporary) switch of the user’s **Profile** to a different **Profile** saved within **AAPS**.

**Profile Percentage** = a (temporary) percentage increase or decrease applied to a user’s **Profile** for a selected time period.

**RES** = status light for overdue reservoir change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **SEN**.

**RileyLink** = open source hardware device to bridge Bluetooth Low Energy (BLE) to 916MHz (used for old Medtronic pumps) or 433MHz (used for Omnipod Eros pumps) wireless communication.

**SAGE** = sensor age (dt. Sensoralter). This is displayed on the main screen of **AAPS** and in **Nightscout**, based on the user's **Sensor Insert** careportal entries → see also **Nightscout**.

**SEN** = status light for overdue sensor change, shown in the status row of **AAPS'** main screen → see also **BAT** / **CAN** / **RES**.

**Sensitivity detection** = calculation of sensitivity to insulin as a result of exercise, hormones etc. see also → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensor noise** (dt. Sensorrauschen) = ein Begriff, der verwendet wird, um die instabilen **CGM**-Werte zu beschreiben, die zu "springenden" **Glukosewerten** führen. Further info → [Wiki - 'Smoothing blood glucose data'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus. Eine **AAPS**-Funktion für eine schnellere Insulinlieferung, um **Glukosespiegel** anzupassen. Further info → [Wiki - '**SMB**'](#Open-APS-features-super-micro-bolus-smb) and see also **UAM**.

**Super Bolus** = Verschiebung (vorziehen) von Basal- zu Bolusinsulin um den **Glukosewert** schneller senken zu können.

**TBB** Total Base Basal (dt.: Gesamtbasalmenge) = Summe aller Basalraten innerhalb von 24 Stunden → siehe auch **TBR** / **TDD**.

**TBR** = temporary basal rate → see also **TBB** / **TDD**.

**TDD** = Total Daily Dose (dt. Tagesgesamtdosis: Gesamtbolus + Gesamtbasal pro Tag) → siehe auch **TBB** / **TBR**.

**TT** = temporary target: temporary increase/decrease of the user’s **BG** target (range) e.g. for eating or sport activities. Further info → [Wiki - 'temp targets'](../DailyLifeWithAaps/TempTargets.md).

**UAM** = Unannounced Meals (dt. Unangekündigte Mahlzeiten). Erkennen signifikanter **Glukosewert**-Anstiege aufgrund von Mahlzeiten, Adrenalin oder anderen Einflüssen und der Versuch, diese auszugleichen. Further info → [Wiki - 'UAM'](#enable-uam) and see also **SMB**.

**Virtual pump** = an **AAPS** feature which allows the user to try **AAPS’** functions, or lets PWD whose pump model has no **AAPS** driver use **AAPS** as an open loop → see also **Open Loop**.

**Wallpaper** (dt. Hintergrundbild) = **AAPS**-Hintergrundbild (siehe Seite zu Smartphones).

**xDrip** = open source software to read **CGM** systems.

**Zero-temp** = temporäre Basalrate mit 0 % (keine Abgabe von Basalinsulin).

→ vgl. hierzu auch die [OpenAPS Dokumentation](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)