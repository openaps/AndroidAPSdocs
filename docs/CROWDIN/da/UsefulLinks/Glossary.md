# Ordliste

**AAPS** = AndroidAPS er navnet på Android-appen.

**AAPSClient** = følger-appen til omsorgspersoner. På en følgertelefon følger den en brugers **AAPS** via brugerens **Nightscout**-side, og når den er parret med **AAPS**-telefonen, kan den styre den på afstand. Må ikke forveksles med **NSClient**. Mere info → [Wiki – »AAPSClient-appen«](../RemoteFeatures/AapsClient.md) og [Styring mellem hovedenhed ↔ klient](#client-master-control).

**Activity** (aktivitet) = insulinaktivitet, som viser, hvor hurtigt IOB aftager. Se [Wiki – »DIA«](#Config-Builder-insulin-dia) og den tilhørende **BGI**.

**AID** = Automated Insulin Delivery (automatisk insulintilførsel). Det udtryk, der normalt bruges i klinisk praksis og forskning om et system, som automatisk justerer insulintilførslen ud fra **CGM**-data. **APS** og **lukket loop** betyder det samme → se også **OS-AID**.

**APS** = Artificial Pancreas System (kunstig bugspytkirtel-system) → se også **AID**.

**AMA** = Advanced Meal Assist (avanceret måltidshjælp). En algoritme, der lader **AAPS** øge brugerens basal mere aggressivt efter en måltidsbolus. Mere info → [Wiki – »Advanced Meal Assist (AMA)«](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** (justeringsfaktor) = bruges i **DynamicISF** og er en værdi mellem 1% og 300%, som brugeren angiver i sine **Indstillinger**. Den virker som en multiplikator på **TDD**-værdien. Se [Wiki – justeringsfaktor for Dynamisk ISF](#dyn-isf-adjustment-factor)

**Android Auto** = et system, der viser visse funktioner fra en Android-smartphone, bl.a. **AAPS**, på bilens skærm. Mere info → [Wiki – »Android Auto«](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (Android-programpakke). En installationsfil til software. Mere info → [Wiki – »Byg AAPS«](../SettingUpAaps/BuildingAaps.md).

**Autosens** = beregning af følsomheden for insulin over et 24-timers og et 8-timers vindue osv. Mere info → [DIABETTECH – **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = cloud-platform, hvor **Nightscout**-webappen kan køre → se også **Nightscout**.

**BAT** = statuslys for lavt pumpebatteri, vist i statuslinjen på **AAPS'** hovedskærm → se også **CAN** / **RES** / **SEN**.

**BG** = blood glucose (blodsukker, BS).

**BGI** = blood glucose impact (blodsukkerpåvirkning). Hvor meget **BG** »bør« stige eller falde kun på grund af insulinaktiviteten.

**BG source** (BS-kilde) = en AAPS-indstilling, hvor du vælger kilden til blodsukkerdata. Se [Wiki – BS-kilde](#Config-Builder-bg-source)

**Bridge** (bro) = en ekstra enhed, der gør en **FGM** til en **CGM**.

**BR** = Basal Rate (basalrate). Mængden af insulin i et bestemt tidsrum, der skal holde **BG** på et stabilt niveau. → se også **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (byg din egen Dexcom-app). En måde at lave brugerens egen Dexcom-app til at læse sensordata fra Dexcom G6.

**CAGE** = Cannula AGE (kanylens alder). Vises på **AAPS'** hovedskærm og i Nightscout, ud fra brugerens **Klargør/Fyld**-registreringer i careportal → se også **Nightscout**.

**CAN** = statuslys for forsinket kanyleskift, vist i statuslinjen på **AAPS'** hovedskærm → se også **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (kontinuerlig glukosemåler) → se også **FGM**.

**Closed Loop** (lukket loop) = et lukket loop-system, der automatisk justerer brugerens basaltilførsel ud fra en **AAPS**-algoritme og brugerens **profil**-indstillinger, uden at brugeren skal godkende det. Mere info → [Wiki – »Lukket loop«](#KeyAapsFeatures-ClosedLoop) og se også **HCL** / **FCL**.

**COB** = Carbs On Board (kulhydrater om bord). Den mængde kulhydrater, som brugeren lige nu har til fordøjelse → se også IOB.

**CSF** = Carbs Sensitivity Factor (kulhydratfølsomhedsfaktor). dvs. hvor meget brugerens **BG** stiger for 1 g optaget kulhydrat.

**DIA** = Duration of Insulin Action (varighed af insulinvirkning). Mere info → [Wiki – »DIA«](#Config-Builder-insulin-dia) og se også → [DIABETTECH – »DIA«](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Saving Time (sommertid). Se [Wiki – Skift af tidszone og sommertid](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (or DynISF)** (Dynamisk ISF) = en funktion i **AAPS**, der tilpasser insulinfølsomhedsfaktoren (**ISF**) dynamisk ud fra brugerens **TDD** og **BG**.

**eCarbs** = extended Carbs (e-kulhydrater, forlængede kulhydrater). Kulhydrater fordelt over flere timer (f.eks. for at dække fedt/protein), så **AAPS** kan fordele insulinen ligesom en forlænget bolus. Mere info → [Wiki – »Forlængede kulhydrater / e-kulhydrater«](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop (fuldt lukket loop). Et loop, der ikke behøver input fra brugeren ved måltider: ingen kulhydrattælling og ingen måltidsbolus. Mere info → [Wiki – »Fuldt lukket loop«](../AdvancedOptions/FullClosedLoop.md) og se også **HCL**.

**FGM** = Flash Glucose Monitor (flash-glukosemåler), f.eks. Abbott Freestyle Libre. Mere info → [Wiki – »BS-kilde«](#Config-Builder-bg-source) og se også »CGM«.

**git** = et værktøj, der bruges til at gemme og downloade **AAPS'** kildekode.

**GitHub** = en webtjeneste, der rummer **AAPS**-kildekoden og dens versionsstyring (sporer ændringer i filer og koordinerer arbejdet på dem, især i teams), og som også kan bygge appen. Den er også nødvendig til **APK**-opdateringer. Mere info → [Wiki – »Opdatering til en ny version eller gren«](../Maintenance/UpdateToNewVersion.md).

**Glimp** = en app, der henter værdier fra Freestyle Libre.

**HCL (or Hybrid Closed Loop)** (hybrid lukket loop) = et loop, der automatiserer insulintilførslen mellem måltiderne, men hvor brugeren stadig selv skal tage bolus til måltider. Næsten alle systemer i daglig brug, også **AAPS**, er et hybrid lukket loop → se også **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** = insulin til kulhydrat-forhold. Bemærk, at det normalt angives i g/E, selvom forkortelsen antyder det omvendte.

**IOB** = Insulin On Board (insulin om bord). Insulin, der er aktiv i brugerens krop. Se [Wiki – Insulin om bord](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor (insulinfølsomhedsfaktor). Det forventede fald i BS som følge af én enhed insulin. Enheden er enten mg/dl/E eller mmol/l/E. De er ikke ens uden en omregning!

**Keystore (or JKS)** (nøglelager) = et Java Key Store, dvs. en krypteret fil med dine personlige udviklercertifikater og nøgler, som er nødvendige for at bygge (og genopbygge) din **AAPS'** app.

**LGS** = Low Glucose Suspend (stop ved lavt BS). Se [Wiki – Stop ved lavt BS](#KeyAapsFeatures-LGS)

**LineageOS** = gratis open source-styresystem til smartphones m.m. Hvis du bruger Accu-Chek Combo, se [Wiki – Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Log files** (logfiler) = **AAPS'** registrering af brugerens handlinger (nyttig til fejlfinding og fejlsøgning). Mere info → [Wiki – »Adgang til logfiler«](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = maksimal samlet IOB. Dette er en sikkerhedsfunktion, der forhindrer **AAPS** i at tilføre insulin ud over brugerens indstillinger. Mere info → [Wiki – »Maksimal samlet IOB, som OpenAPS ikke kan overskride«](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = sikkerhedsfunktion, der beregner en standardværdi for kulhydratnedbrydning, når kulhydratabsorptionen ikke kan bestemmes ud fra brugerens blodsukkerreaktioner. Mere info → [Wiki – »min_5m_carbimpact«](#Preferences-min_5m_carbimpact).

**Nightscout** = open source-projekt til at få adgang til og rapportere **CGM**-data. Det centrale sted for brugerens **AAPS**-data. Det kan lave rapporter, der viser brugerens historiske **Nightscout**-data, f.eks. forventet HbA1c, tid i målområde, eller søge efter mønstre i dataene via percentildiagram osv.

**Nightscout** → se også **Nightscout Reporter**. Det er især nyttigt for forældre, der følger deres barns diabetesbehandling.

**Nightscout Reporter Tool** = et værktøj, der laver PDF-rapporter ud fra data i Nightscout-webappen. Se »Nightscout Reporter«, »NS Reporter« på Facebook.

**NSClient** (**NSClientV3**) = det **AAPS**-plugin, der synkroniserer data med **Nightscout** (**Konfiguration** → **Kommunikation**). Det er ikke det samme som **AAPSClient**, følger-appen. Mere info → [Wiki – »NSClient«](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, forgængerprojektet og grundlaget for AAPS.

**Open Loop system** (åbent loop-system) = en **AAPS**-funktion, der anbefaler justeringer, som brugeren selv skal udføre manuelt i **AAPS**. Mere info → [Wiki – »Åbent loop«](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = detektering af følsomhed og »reference design implementation version 0/1«. Det er nøglealgoritmen bag OpenAPS. Mere info → [Wiki – »Detektering af følsomhed«](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery (open source automatisk insulintilførsel). Et **AID**-system bygget af open source-software, f.eks. **AAPS**, **OpenAPS**, Loop eller Trio. Disse systemer er ikke officielt godkendt af sundhedsmyndigheder (FDA, NHS osv.) → se også **AID**.

**Peak time** (spidstidspunkt) = tidspunktet for den største virkning af den givne insulin. Mere info → [Wiki – »Varighed af insulinvirkning (DIA) og spidstidspunkt«](#Config-Builder-insulin-dia).

**PH** = Pump History (pumpehistorik). Den kan ses i **AAPS'** behandlingshistorik: åbn **menuen** (☰) øverst til venstre på hovedskærmen, og vælg **Behandlinger**.

**Predictions** (forudsigelser) = forudsigelser af det fremtidige **BG** ud fra forskellige beregninger. Mere info → [Wiki – »Forudsigelseslinjer«](#aaps-screens-prediction-lines).

**Profile** (profil) = brugerens grundlæggende behandlingsindstillinger (basalrate, **DIA**, **IC**, **ISF**, **BG**-målværdi). **AAPS** bruger kun profiler, der er oprettet i **AAPS** (**Administrer** → **Profil**), men **Nightscout**-**profiler** kan kopieres (synkroniseres) til **AAPS**. Mere info → [Wiki – »Din AAPS-profil«](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** (profilskift) = (midlertidigt) skift af brugerens **Profil** til en anden **Profil**, der er gemt i **AAPS**.

**Profile Percentage** (profilprocent) = en (midlertidig) procentvis forøgelse eller sænkning af brugerens **Profil** i en valgt periode.

**RES** = statuslys for forsinket reservoirskift, vist i statuslinjen på **AAPS'** hovedskærm → se også **BAT** / **CAN** / **SEN**.

**RileyLink** = open source-hardwareenhed, der bygger bro mellem Bluetooth Low Energy (BLE) og trådløs kommunikation på 916 MHz (bruges til ældre Medtronic-pumper) eller 433 MHz (bruges til Omnipod Eros-pumper).

**SAGE** = sensor age (sensorens alder). Det vises på hovedskærmen i **AAPS** og i **Nightscout**, ud fra brugerens **Sensorindstik**-registreringer i careportal → se også **Nightscout**.

**SEN** = statuslys for forsinket sensorskift, vist i statuslinjen på **AAPS'** hovedskærm → se også **BAT** / **CAN** / **RES**.

**Sensitivity detection** (detektering af følsomhed) = beregning af følsomheden for insulin som følge af motion, hormoner osv. se også → [DIABETTECH – »Autosens«](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensor noise** (sensorstøj) = et udtryk for ustabile **CGM**-målinger, der giver »hoppende« **BG**-værdier. Mere info → [Wiki – »Udjævning af blodsukkerdata«](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus (super mikrobolus). En **AAPS**-funktion til hurtigere insulintilførsel for at justere **BG**. Mere info → [Wiki – »**SMB**«](#Open-APS-features-super-micro-bolus-smb) og se også **UAM**.

**Super bolus** (Superbolus) = flytning af basal- til bolusinsulin for hurtigere justering af **BG**.

**TBB** = total base basal (summen af basalraten over 24 timer) → se også **TBR** / **TDD**.

**TBR** = temporary basal rate (midlertidig basalrate) → se også **TBB** / **TDD**.

**TDD** = total daily dose (samlet daglig dosis: bolus + basal pr. dag) → se også **TBB** / **TBR**.

**TT** = temporary target (midlertidigt mål): midlertidig hævning/sænkning af brugerens **BG**-målværdi (-område), f.eks. før man spiser eller ved sport. Mere info → [Wiki – »Midlertidige mål«](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (uanmeldte måltider). Registrering af en tydelig stigning i **BG** på grund af måltider, adrenalin eller andre påvirkninger, og forsøg på at justere for den. Mere info → [Wiki – »UAM«](#enable-uam) og se også **SMB**.

**Virtual pump** (Virtuel pumpe) = en **AAPS**-funktion, der lader brugeren afprøve **AAPS'** funktioner, eller lader personer med diabetes, hvis pumpemodel ikke har en **AAPS**-driver, bruge **AAPS** som åbent loop → se også **Open Loop**.

**Wallpaper** (baggrundsbillede) = **AAPS**-baggrundsbillede, se siden om telefoner.

**xDrip** = open source-software til at aflæse **CGM**-systemer.

**Zero-temp** (nul-basal) = midlertidig basalrate på 0% (ingen tilførsel af basalinsulin).

→ se også [OpenAPS-dokumentationen](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)