# Veelgebruikte woordenlijst

**AAPS** = AndroidAPS is de naam van de Android-app.

**AAPSClient** = de volg-app voor verzorgers. Op de telefoon van een volger volgt de app de **AAPS** van een gebruiker via de **Nightscout**-site van de gebruiker. Na koppeling met de **AAPS**-telefoon kan de app die ook op afstand bedienen. Niet te verwarren met **NSClient**. Meer info → [Wiki - 'De app AAPSClient'](../RemoteFeatures/AapsClient.md) en [Master ↔ Client besturing](#client-master-control).

**Activiteit** (Activity) = insulineactiviteit; geeft aan hoe snel de IOB afneemt. Zie [Wiki - 'DIA'](#Config-Builder-insulin-dia) en de bijbehorende **BGI**.

**AID** = Automated Insulin Delivery (geautomatiseerde insulinetoediening). De term die in de klinische praktijk en in onderzoek meestal gebruikt wordt voor een systeem dat de insulinetoediening automatisch aanpast met **CGM**-gegevens. **APS** en **gesloten loop** betekenen hetzelfde → zie ook **OS-AID**.

**APS** = Artificial Pancreas System (kunstmatig alvleeskliersysteem) → zie ook **AID**.

**AMA** = Advanced Meal Assist. Een algoritme waarmee **AAPS** de basaal van de gebruiker na een maaltijdbolus sterker kan verhogen. Meer info → [Wiki - 'Advanced Meal Assist (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**Aanpassingsfactor** (Adjustment Factor) = wordt gebruikt binnen **Dynamische ISF**. Het is een waarde tussen 1% en 300% in de **Instellingen** van de gebruiker. Dit werkt als een vermenigvuldigingsfactor op de waarde van de **TDD**. Zie [Wiki - Aanpassingsfactor Dynamische ISF](#dyn-isf-adjustment-factor)

**Android Auto** = een systeem dat bepaalde functies van een Android-smartphone, waaronder **AAPS**, op het scherm van een auto toont. Meer info → [Wiki - 'Android Auto'](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package. Een installatiebestand voor software. Meer info → [Wiki - 'AAPS bouwen'](../SettingUpAaps/BuildingAaps.md).

**Autosens** = berekening van de gevoeligheid voor insuline over een periode van 24 en 8 uur enz. Meer info → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = cloudplatform om de **Nightscout**-webapp te hosten → zie ook **Nightscout**.

**BAT** = statuslampje voor een bijna lege pompbatterij, getoond in de statusrij van het hoofdscherm van **AAPS** → zie ook **CAN** / **RES** / **SEN**.

**BG** = bloedglucose.

**BGI** = blood glucose impact (invloed op de bloedglucose). De mate waarin de **BG** 'zou moeten' stijgen of dalen, alleen op basis van de insulineactiviteit.

**BG bron** (BG source) = een instelling in AAPS om de bron van de bloedglucosegegevens te kiezen. Zie [Wiki - BG bron](#Config-Builder-bg-source)

**Bridge** = een extra apparaat dat een **FGM** omzet in een **CGM**.

**BR** = Basal Rate (basaalstand). De hoeveelheid insuline per tijdblok die nodig is om de **BG** stabiel te houden. → zie ook **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App. Een manier om je eigen Dexcom-app te maken om de sensorgegevens van de Dexcom G6 uit te lezen.

**CAGE** = Cannula AGE (leeftijd van de canule). Wordt getoond op het hoofdscherm van **AAPS** en in Nightscout, op basis van de careportal-invoer **Prime/Vul** van de gebruiker → zie ook **Nightscout**.

**CAN** = statuslampje voor een te late canulewissel, getoond in de statusrij van het hoofdscherm van **AAPS** → zie ook **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (continue glucosemeter) → zie ook **FGM**.

**Closed loop** (gesloten loop) = een systeem met een gesloten loop dat de basaaltoediening automatisch aanpast op basis van het algoritme van **AAPS** en de instellingen in het **Profiel** van de gebruiker, zonder dat de gebruiker iets hoeft goed te keuren. Meer info → Wiki - 'gesloten loop' en zie ook **HCL** / **FCL**.

**COB** = Carbs On Board (actieve koolhydraten). Dit is de hoeveelheid koolhydraten die het lichaam van de gebruiker op dit moment nog moet opnemen → zie ook IOB.

**CSF** = Carbs Sensitivity Factor (koolhydraatgevoeligheid). D.w.z. hoeveel de **BG** van de gebruiker stijgt door 1 g opgenomen koolhydraten.

**DIA** = Duration of Insulin Action (duur van insuline activiteit). Meer info → [Wiki - 'DIA'](#Config-Builder-insulin-dia) en zie ook → [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Savings Time (zomertijd). Zie [Wiki - Wisselen van tijdzone en zomertijd](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamische ISF (of DynISF)** = een functie binnen **AAPS** die de insuline gevoeligheidsfactor (**ISF**) dynamisch aanpast op basis van de **TDD** en de **BG** van de gebruiker.

**eCarbs** = extended Carbs (vertraagde koolhydraten). Koolhydraten die over meerdere uren verdeeld worden (bijv. voor vet/eiwit). Zo kan **AAPS** de insuline spreiden, zoals bij een vertraagde bolus. Meer info → [Wiki - 'Vertraagde koolhydraten'](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop (volledig gesloten loop). Een loop waarbij de gebruiker niets hoeft in te voeren voor maaltijden: geen koolhydraten tellen en geen maaltijdbolus. Meer info → Wiki - 'volledig gesloten loop' en zie ook **HCL**.

**FGM** = Flash Glucose Monitor, zoals de Abbott Freestyle Libre. Meer info → Wiki - 'BG bron' en zie ook 'CGM'.

**git** = een programma om de broncode van **AAPS** op te slaan en te downloaden.

**GitHub** = een webdienst die de broncode van **AAPS** en het versiebeheer ervan bewaart (wijzigingen in bestanden bijhouden en het werk eraan afstemmen, vooral in teams). GitHub kan ook de app bouwen. Het is ook nodig voor updates van de **APK**. Meer info → Wiki - 'APK bijwerken'.

**Glimp** = een app om waarden van de Freestyle Libre te verzamelen.

**HCL (of Hybrid Closed Loop, hybride gesloten loop)** = een loop die de insulinetoediening tussen maaltijden automatisch regelt, maar waarbij de gebruiker nog wel zelf een bolus voor maaltijden moet geven. Bijna elk systeem dat dagelijks gebruikt wordt, ook **AAPS**, is een hybride gesloten loop → zie ook **FCL** / **Closed loop**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio (insuline - koolhydraat ratio). Let op: dit wordt meestal uitgedrukt in g/E, ook al suggereert de afkorting het omgekeerde.

**IOB** = Insulin On Board (actieve insuline). Insuline die actief is in het lichaam van de gebruiker. Zie [Wiki - Actieve insuline (IOB)](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor (insuline gevoeligheidsfactor). De verwachte daling van de BG door één eenheid insuline. De eenheid is mg/dl/E of mmol/l/E. Deze zijn niet gelijk zonder omrekening!

**Keystore (of JKS)** = een Java Key Store: een versleuteld bestand waarin je persoonlijke ontwikkelaarscertificaten en sleutels bewaard worden. Je hebt het nodig om **AAPS** te bouwen (en opnieuw te bouwen).

**LGS** = Low Glucose Suspend (Stop bij laag). Zie [Wiki - Stop bij laag](#KeyAapsFeatures-LGS)

**LineageOS** = gratis en open source besturingssysteem voor smartphones enz. Als je de Accu-Chek Combo gebruikt, zie [Wiki - Combo-pomp](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Logbestanden** = de vastgelegde acties van de gebruiker in **AAPS** (handig om problemen op te lossen en voor debuggen). Meer info → [Wiki - 'logbestanden'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = maximale totale IOB. Dit is een veiligheidsfunctie. Het voorkomt dat **AAPS** meer insuline geeft dan de instellingen van de gebruiker toestaan. Meer info → [Wiki - 'Maximale totale IOB waar OpenAPS niet boven mag gaan'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = veiligheidsfunctie: een berekening van de standaard afbraak van koolhydraten als de opname van koolhydraten niet bepaald kan worden uit de reactie van het bloed van de gebruiker. Meer info → [Wiki - 'Instellingen'](#Preferences-min_5m_carbimpact).

**Nightscout** = open source project om **CGM**-gegevens te bekijken en te rapporteren. De centrale opslag voor de **AAPS**-gegevens van de gebruiker. Het kan rapporten maken van de historische **Nightscout**-gegevens van de gebruiker, zoals de verwachte HbA1c of de tijd binnen bereik, of patronen in de gegevens zoeken via een percentielgrafiek enz.

**Nightscout** → zie ook **Nightscout Reporter**. Dit is vooral handig voor ouders die de diabetesbehandeling van hun kind volgen.

**Nightscout Reporter Tool** = een programma dat pdf-rapporten maakt van de gegevens in de Nightscout-webapp. Zie 'Nightscout Reporter', 'NS Reporter' @ Facebook.

**NSClient** (**NSClientV3**) = de plugin van **AAPS** die gegevens synchroniseert met **Nightscout** (**Configuratie** → **Communicatie**). Het is niet hetzelfde als **AAPSClient**, de volg-app. Meer info → [Wiki - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, het project dat aan AAPS voorafging en waarop AAPS gebaseerd is.

**Open loop-systeem** = een functie van **AAPS** die aanpassingen voorstelt; de gebruiker moet ze zelf uitvoeren in **AAPS**. Meer info → [Wiki - 'Open loop'](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = gevoeligheidsdetectie en "reference design implementation version 0/1". Het is het belangrijkste algoritme achter OpenAPS Wiki - gevoeligheidsdetectie.

**OS-AID** = Open-Source Automated Insulin Delivery (open-source geautomatiseerde insulinetoediening). Een **AID**-systeem gemaakt met open-source software, zoals **AAPS**, **OpenAPS**, Loop of Trio. Deze systemen zijn niet officieel goedgekeurd door gezondheidsinstanties (FDA, NHS enz.) → zie ook **AID**.

**Piektijd** (Peak time) = het moment waarop de gegeven insuline het sterkst werkt. Meer info → [Wiki - 'Duur van insuline activiteit (DIA) en piek'](#Config-Builder-insulin-dia).

**PH** = Pump History (pompgeschiedenis). Je vindt dit in de behandelingen geschiedenis van **AAPS**: open het **menu** (☰) linksboven op het hoofdscherm en kies **Behandelingen**.

**Voorspellingen** (Predictions) = voorspellingen van de **BG** in de toekomst, op basis van verschillende berekeningen. Meer info → [Wiki - 'voorspellingslijnen'](#aaps-screens-prediction-lines).

**Profiel** (Profile) = de basisinstellingen voor de behandeling van de gebruiker (basaalstand, **DIA**, **IC**, **ISF**, **BG**-streefwaarde). **AAPS** gebruikt alleen profielen die in **AAPS** gemaakt zijn (**Beheren** → **Profiel**), maar **Profielen** uit **Nightscout** kunnen naar **AAPS** gekopieerd (gesynchroniseerd) worden. Meer info → [Wiki - 'Je AAPS-profiel'](../SettingUpAaps/YourAapsProfile.md).

**Profiel wissel** (Profile switch) = (tijdelijke) wissel van het **Profiel** van de gebruiker naar een ander **Profiel** dat in **AAPS** opgeslagen is.

**Profiel percentage** (Profile Percentage) = een (tijdelijke) verhoging of verlaging in procenten van het **Profiel** van de gebruiker, voor een gekozen periode.

**RES** = statuslampje voor een te late reservoirwissel, getoond in de statusrij van het hoofdscherm van **AAPS** → zie ook **BAT** / **CAN** / **SEN**.

**RileyLink** = open source hardware die Bluetooth Low Energy (BLE) omzet naar draadloze communicatie op 916 MHz (voor oude Medtronic-pompen) of 433 MHz (voor Omnipod Eros-pompen).

**SAGE** = sensor age (sensor leeftijd). Dit wordt getoond op het hoofdscherm van **AAPS** en in **Nightscout**, op basis van de careportal-invoer **Sensor ingebracht** van de gebruiker → zie ook **Nightscout**.

**SEN** = statuslampje voor een te late sensorwissel, getoond in de statusrij van het hoofdscherm van **AAPS** → zie ook **BAT** / **CAN** / **RES**.

**Gevoeligheidsdetectie** (Sensitivity detection) = berekening van de gevoeligheid voor insuline als gevolg van sport, hormonen enz. zie ook → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensorruis** (Sensor noise) = een term voor onstabiele metingen van de **CGM**, waardoor de **BG**-waarden "springen". Meer info → [Wiki - 'Vloeiend maken van bloedglucosewaarden'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus. Een functie van **AAPS** om insuline sneller te geven en zo de **BG** bij te sturen. Meer info → [Wiki - '**SMB**'](#Open-APS-features-super-micro-bolus-smb) en zie ook **UAM**.

**Superbolus** (Super bolus) = basale insuline wordt naar voren gehaald en als bolus gegeven, zodat de **BG** sneller bijgestuurd wordt.

**TBB** = total base basal (totale basaal: som van de basaalstand over 24 uur) → zie ook **TBR** / **TDD**.

**TBR** = temporary basal rate (tijdelijk basaal) → zie ook **TBB** / **TDD**.

**TDD** = total daily dose (totale dagdosis: bolus + basaal per dag) → zie ook **TBB** / **TBR**.

**TT** = temporary target (tijdelijk streefdoel): tijdelijke verhoging of verlaging van de **BG**-streefwaarde (bereik) van de gebruiker, bijv. voor eten of sport. Meer info → [Wiki - 'tijdelijke streefdoelen'](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (onaangekondigde maaltijden). Herkenning van een sterke stijging van de **BG** door maaltijden, adrenaline of andere invloeden, en een poging om dit bij te sturen. Meer info → [Wiki - 'UAM'](#enable-uam) en zie ook **SMB**.

**Virtuele Pomp** (Virtual pump) = een functie van **AAPS** waarmee de gebruiker de functies van **AAPS** kan uitproberen. Ook voor mensen met diabetes met een pompmodel zonder **AAPS**-driver om te loopen → zie ook **Open loop**.

**Achtergrond** (Wallpaper) = achtergrondafbeelding van **AAPS**, zie de pagina Telefoons.

**xDrip** = open source software om **CGM**-systemen uit te lezen.

**Zero-temp** = tijdelijke basaalstand van 0% (er wordt geen basale insuline gegeven).

→ zie ook [de OpenAPS-documentatie](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)