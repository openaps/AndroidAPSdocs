# Glossary

**AAPS** = AndroidAPS är namnet på Android-appen.

**AAPSClient** = följarappen för anhöriga och andra som hjälper till med vården. På en följartelefon följer den din **AAPS** via din **Nightscout**-sida, och när den har parkopplats med **AAPS**-telefonen kan den styra den på distans. Ska inte förväxlas med **NSClient**. Mer info → [Wiki - 'Appen AAPSClient'](../RemoteFeatures/AapsClient.md) och [Styrning huvudenhet ↔ klient](#client-master-control).

**Aktivitet** (Activity) = insulinaktivitet, som visar hur snabbt IOB minskar. Se [Wiki - 'DIA'](#Config-Builder-insulin-dia) och den relaterade **BGI**.

**AID** = automatiserad insulintillförsel (Automated Insulin Delivery). Den term som oftast används i klinisk praxis och forskning för ett system som automatiskt justerar insulintillförseln utifrån **CGM**-data. **APS** och **sluten loop** betyder samma sak → se även **OS-AID**.

**APS** = system för artificiell bukspottkörtel (Artificial Pancreas System) → se även **AID**.

**AMA** = Advanced Meal Assist. En algoritm som gör att **AAPS** kan höja din basal mer aggressivt efter en måltidsbolus. Mer info → [Wiki - 'Advanced Meal Assist (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**Justeringsfaktor** (Adjustment Factor) = används i **DynamicISF** och är ett värde mellan 1 % och 300 % som du ställer in under **Inställningar**. Detta fungerar som en multiplikator på **TDD**-värdet. Se [Wiki - DynamicISF justeringsfaktor](#dyn-isf-adjustment-factor)

**Android Auto** = ett system som visar vissa funktioner från en Android-telefon, bland annat **AAPS**, på bilens skärm. Mer info → [Wiki - 'Android Auto'](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (installationspaket för Android-appar). En installationsfil för programvara. Mer info → [Wiki - 'Bygga AAPS'](../SettingUpAaps/BuildingAaps.md).

**Autosens** = beräkning av känsligheten för insulin över ett tidsfönster på 24 timmar och ett på 8 timmar osv. Mer info → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = molnplattform där webbappen **Nightscout** kan köras → se även **Nightscout**.

**BAT** = statuslampa för lågt pumpbatteri, visas i statusraden på huvudskärmen i **AAPS** → se även **CAN** / **RES** / **SEN**.

**BG** = blodsocker (blood glucose).

**BGI** = blood glucose impact (påverkan på blodsockret). Hur mycket **BG** ”borde” stiga eller sjunka enbart utifrån insulinaktiviteten.

**BG-källa** (BG source) = en inställning i AAPS där du väljer varifrån blodsockerdata hämtas. Se [Wiki - BG-källa](#Config-Builder-bg-source)

**Brygga** (Bridge) = en extra enhet som gör om en **FGM** till en **CGM**.

**BR** = basaldos (Basal Rate). Mängden insulin i ett visst tidsblock som håller **BG** på en stabil nivå. → se även **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App. Ett sätt att bygga en egen Dexcom-app som läser av sensordata från Dexcom G6.

**CAGE** = kanylålder (Cannula AGE). Visas på huvudskärmen i **AAPS** och i Nightscout, utifrån dina Careportal-poster för **Förfyllning** → se även **Nightscout**.

**CAN** = statuslampa för försenat kanylbyte, visas i statusraden på huvudskärmen i **AAPS** → se även **BAT** / **RES** / **SEN**.

**CGM** = kontinuerlig glukosmätare (Continuous Glucose Monitor) → se även **FGM**.

**Sluten loop** (Closed Loop) = ett system med sluten loop som automatiskt justerar din basaltillförsel utifrån algoritmen i **AAPS** och inställningarna i din **profil**, utan att du behöver godkänna ändringarna. Mer info → [Wiki - 'sluten loop'](#KeyAapsFeatures-ClosedLoop) och se även **HCL** / **FCL**.

**COB** = aktiva kolhydrater (Carbs On Board). Mängden kolhydrater som just nu finns kvar att tas upp i kroppen → se även IOB.

**CSF** = Carbs Sensitivity Factor (kolhydratkänslighet). dvs. hur mycket ditt **BG** stiger för 1 g kolhydrater som tas upp.

**DIA** = insulinets verkningstid (Duration of Insulin Action). Mer info → [Wiki - 'DIA'](#Config-Builder-insulin-dia) och se även → [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = sommartid (Daylight Saving Time). Se [Wiki - Byte av tidszon och sommartid](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamisk ISF (Dynamic ISF, eller DynISF)** = en funktion i **AAPS** som anpassar insulinkänslighetsfaktorn (**ISF**) dynamiskt utifrån din **TDD** och ditt **BG**.

**eCarbs** = förlängda kolhydrater (extended Carbs). Kolhydrater som delas upp över flera timmar (t.ex. för fett och protein), så att **AAPS** kan sprida ut insulinet som en förlängd bolus. Mer info → [Wiki - 'Förlängda kolhydrater'](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = helt sluten loop (Full Closed Loop). En loop där du inte behöver mata in något vid måltider: ingen kolhydraträkning och ingen måltidsbolus. Mer info → [Wiki - 'helt sluten loop'](../AdvancedOptions/FullClosedLoop.md) och se även **HCL**.

**FGM** = Flash Glucose Monitor (flash-glukosmätare), till exempel Abbott Freestyle Libre. Mer info → [Wiki - 'BG-källa'](#Config-Builder-bg-source) och se även 'CGM'.

**git** = ett verktyg som används för att lagra och ladda ned källkoden för **AAPS**.

**GitHub** = en webbtjänst där källkoden för **AAPS** och dess versionshantering finns (den spårar ändringar i filer och samordnar arbetet med dem, särskilt i team). Den kan också bygga appen. Den behövs också för uppdateringar av **APK**-filen. Mer info → [Wiki - 'uppdatera APK'](../Maintenance/UpdateToNewVersion.md).

**Glimp** = en app som samlar in värden från Freestyle Libre.

**HCL (hybrid sluten loop, Hybrid Closed Loop)** = en loop som automatiserar insulintillförseln mellan måltiderna, men där du fortfarande måste ta bolus till måltider. Nästan alla system som används i vardagen, även **AAPS**, är system med hybrid sluten loop → se även **FCL** / **Sluten loop**.

**IC (I:C, ICR, CR, KH-kvot)** = kolhydratkvot (Insulin to Carb ratio). Observera att den vanligtvis anges i g/U, fast förkortningen antyder det omvända.

**IOB** = aktivt insulin (Insulin On Board). Insulin som är aktivt i din kropp. Se [Wiki - Aktivt insulin](#aaps-screens-iob)

**ISF** = insulinkänslighetsfaktor (Insulin Sensitivity Factor). Hur mycket BG väntas sjunka av en enhet insulin. Enheten är antingen mg/dl/U eller mmol/l/U. De är inte likvärdiga utan omräkning!

**Keystore (eller JKS)** = ett Java Key Store, en krypterad fil där dina personliga utvecklarcertifikat och nycklar sparas. Den behövs för att bygga (och bygga om) **AAPS**.

**LGS** = Paus vid lågt blodsocker (Low Glucose Suspend). Se [Wiki - Paus vid lågt blodsocker](#KeyAapsFeatures-LGS)

**LineageOS** = fritt operativsystem med öppen källkod för smarttelefoner m.m. Om du använder Accu-Chek Combo, se [Wiki - Combo-pump](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Loggfiler** (Log files) = det som **AAPS** sparar om dina åtgärder (användbart vid felsökning och debuggning). Mer info → [Wiki - 'loggfiler'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = maximal total IOB. Detta är en säkerhetsfunktion som hindrar **AAPS** från att ge mer insulin än dina inställningar tillåter. Mer info → [Wiki - 'Maximal total IOB som OpenAPS inte kan överskrida'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = en säkerhetsfunktion: en beräkning av standardupptaget av kolhydrater när upptaget inte kan bestämmas utifrån hur ditt blodsocker reagerar. Mer info → [Wiki - 'min_5m_carbimpact'](#Preferences-min_5m_carbimpact).

**Nightscout** = ett projekt med öppen källkod för att komma åt och rapportera **CGM**-data. Det centrala navet för dina **AAPS**-data. Det kan skapa rapporter över dina historiska data i **Nightscout**, till exempel förväntat HbA1c och tid i målområde, och du kan söka efter mönster i data med percentildiagram osv.

**Nightscout** → se även **Nightscout Reporter**. Detta är särskilt användbart för föräldrar som följer sitt barns diabetesbehandling.

**Nightscout Reporter Tool** = ett verktyg som skapar PDF-rapporter från data i webbappen Nightscout. Se 'Nightscout Reporter', 'NS Reporter' på Facebook.

**NSClient** (**NSClientV3**) = pluginet i **AAPS** som synkroniserar data med **Nightscout** (**Konfiguration** → **Kommunikation**). Det är inte samma sak som **AAPSClient**, följarappen. Mer info → [Wiki - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, föregångarprojektet och grunden för AAPS.

**Öppen loop** (Open Loop system) = en funktion i **AAPS** som föreslår justeringar som du själv måste utföra i **AAPS**. Mer info → [Wiki - 'Öppen loop'](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = känslighetsdetektering och ”reference design implementation version 0/1”. Det är den centrala algoritmen bakom OpenAPS. Mer info → [Wiki - 'känslighetsdetektering'](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = automatiserad insulintillförsel med öppen källkod (Open-Source Automated Insulin Delivery). Ett **AID**-system byggt av programvara med öppen källkod, till exempel **AAPS**, **OpenAPS**, Loop eller Trio. Dessa system är inte formellt godkända av hälsomyndigheter (FDA, NHS osv.) → se även **AID**.

**Tid till insulintopp** (Peak time) = den tid då det givna insulinet har störst effekt. Mer info → [Wiki - 'Insulinets verkningstid (DIA) och topp'](#Config-Builder-insulin-dia).

**PH** = pumphistorik (Pump History). Du hittar den i behandlingshistoriken i **AAPS**: öppna **menyn** (☰) uppe till vänster på huvudskärmen och välj **Behandlingar**.

**Prognoser** (Predictions) = prognoser för framtida **BG** utifrån olika beräkningar. Mer info → [Wiki - 'prognoslinjer'](#aaps-screens-prediction-lines).

**Profil** (Profile) = dina grundläggande behandlingsinställningar (basaldos, **DIA**, **IC**, **ISF**, **BG**-målvärde). **AAPS** använder bara profiler som har skapats i **AAPS** (**Hantera** → **Profil**), men **profiler** från **Nightscout** kan kopieras (synkroniseras) till **AAPS**. Mer info → [Wiki - 'Din AAPS-profil'](../SettingUpAaps/YourAapsProfile.md).

**Profilbyte** (Profile switch) = (tillfälligt) byte från din **profil** till en annan **profil** som är sparad i **AAPS**.

**Procent av profil** (Profile Percentage) = en (tillfällig) procentuell höjning eller sänkning av din **profil** under en vald tidsperiod.

**RES** = statuslampa för försenat reservoarbyte, visas i statusraden på huvudskärmen i **AAPS** → se även **BAT** / **CAN** / **SEN**.

**RileyLink** = hårdvara med öppen källkod som kopplar ihop Bluetooth Low Energy (BLE) med trådlös kommunikation på 916 MHz (används för äldre Medtronic-pumpar) eller 433 MHz (används för Omnipod Eros-pumpar).

**SAGE** = sensorålder (sensor age). Detta visas på huvudskärmen i **AAPS** och i **Nightscout**, utifrån dina Careportal-poster för **Sensorinsättning** → se även **Nightscout**.

**SEN** = statuslampa för försenat sensorbyte, visas i statusraden på huvudskärmen i **AAPS** → se även **BAT** / **CAN** / **RES**.

**Känslighetsdetektering** (Sensitivity detection) = beräkning av känsligheten för insulin, som påverkas av träning, hormoner osv. se även → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensorbrus** (Sensor noise) = används om instabila värden från en **CGM** som ger ”hoppande” **BG**-värden. Mer info → [Wiki - 'Utjämning av blodsockerdata'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = supermikrobolus (Super Micro Bolus). En funktion i **AAPS** som ger insulin snabbare för att justera **BG**. Mer info → [Wiki - '**SMB**'](#Open-APS-features-super-micro-bolus-smb) och se även **UAM**.

**Superbolus** (Super bolus) = basalinsulin flyttas till bolus för att justera **BG** snabbare.

**TBB** = total basal (summan av basaldosen under 24 timmar, total base basal) → se även **TBR** / **TDD**.

**TBR** = tillfällig basal (temporary basal rate) → se även **TBB** / **TDD**.

**TDD** = total daglig dos (total daily dose, bolus + basal per dygn) → se även **TBB** / **TBR**.

**TT** = tillfälligt målvärde (temporary target): tillfällig höjning eller sänkning av ditt **BG**-målvärde (målområde), t.ex. inför måltider eller träning. Mer info → [Wiki - 'tillfälliga målvärden'](../DailyLifeWithAaps/TempTargets.md).

**UAM** = oannonserade måltider (unannounced meals). Upptäcker en tydlig ökning av **BG** som beror på måltider, adrenalin eller annan påverkan och försöker justera för den. Mer info → [Wiki - 'UAM'](#enable-uam) och se även **SMB**.

**Virtuell pump** (Virtual pump) = en funktion i **AAPS** som låter dig prova funktionerna i **AAPS**, eller som låter personer med diabetes (PWD) vars pumpmodell saknar drivrutin i **AAPS** använda **AAPS** som öppen loop → se även **Öppen loop**.

**Bakgrundsbild** (Wallpaper) = bakgrundsbild för **AAPS**, se sidan om telefoner.

**xDrip** = programvara med öppen källkod som läser av **CGM**-system.

**Tillfällig basal på noll** (Zero-temp) = tillfällig basaldos på 0 % (inget basalinsulin ges).

→ se även [OpenAPS-dokumentationen](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)