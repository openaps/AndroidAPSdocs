# Ordliste

**AAPS** = AndroidAPS er navnet på Android-appen.

**AAPSClient** = følgerappen for omsorgspersoner. På en følgertelefon følger den brukerens **AAPS** gjennom brukerens **Nightscout**-side, og når den er sammenkoblet med **AAPS**-telefonen, kan den fjernstyre den. Må ikke forveksles med **NSClient**. Mer informasjon → [Wiki – «AAPSClient-appen»](../RemoteFeatures/AapsClient.md) og [Hovedenhet ↔ klientstyring](#client-master-control).

**Aktivitet** (Activity) = insulinaktivitet, som viser hvor raskt IOB brytes ned. Se [Wiki – «DIA»](#Config-Builder-insulin-dia) og den beslektede **BGI**.

**AID** = Automated Insulin Delivery (automatisk insulintilførsel). Begrepet som vanligvis brukes i klinisk praksis og forskning om et system som automatisk justerer insulintilførselen ved hjelp av **CGM**-data. **APS** og **lukket loop** betyr det samme → se også **OS-AID**.

**APS** = Artificial Pancreas System (kunstig bukspyttkjertel) → se også **AID**.

**AMA** = Advanced Meal Assist (avansert måltidsassistent). En algoritme som lar **AAPS** øke brukerens basal mer aggressivt etter en måltidsbolus. Mer informasjon → [Wiki – «Advanced Meal Assist (AMA)»](#Open-APS-features-advanced-meal-assist-ama).

**Justeringsfaktor** (Adjustment Factor) = brukes i **Dynamisk ISF** og er en verdi som settes i brukerens **innstillinger**, mellom 1 % og 300 %. Dette virker som en multiplikator på **TDD**-verdien. Se [Wiki – DynamiskISF-justeringsfaktor](#dyn-isf-adjustment-factor)

**Android Auto** = et system som viser visse funksjoner fra en Android-smarttelefon, inkludert **AAPS**, på skjermen i en bil. Mer informasjon → [Wiki – «Android Auto»](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (Android-pakke). En installasjonsfil for programvare. Mer informasjon → [Wiki – «Bygge AAPS»](../SettingUpAaps/BuildingAaps.md).

**Autosens** = beregning av insulinsensitivitet over et tidsvindu på mellom 24 og 8 timer osv. Mer informasjon → [DIABETTECH – **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = skyplattform for å kjøre **Nightscout**-nettappen → se også **Nightscout**.

**BAT** = statuslys for lavt pumpebatteri, vist i statusraden på hovedskjermen i **AAPS** → se også **CAN** / **RES** / **SEN**.

**BS** (BG) = blodsukker (blood glucose).

**BGI** = blood glucose impact (effekt på blodsukkeret). Hvor mye **BS** «bør» stige eller falle ut fra insulinaktiviteten alene.

**BS-kilde** (BG source) = en innstilling i AAPS for å sette opp kilden for blodsukkerdata. Se [Wiki – BS-kilde](#Config-Builder-bg-source)

**Bridge** (NFC-til-Bluetooth-sender) = en ekstra enhet som gjør en **FGM** om til en **CGM**.

**BR** = basaldose (Basal Rate). Mengden insulin i et gitt tidsrom som holder **BS** på et stabilt nivå. → se også **IK** / **ISF**.

**BYODA** = Build Your Own Dexcom App (bygg din egen Dexcom-app). En måte å lage brukerens egen Dexcom-app på, for å lese sensordata fra Dexcom G6.

**CAGE** = Cannula AGE (kanylens alder). Vises på hovedskjermen i **AAPS** og i Nightscout, basert på brukerens **Prime/fylling**-registreringer i helseportalen → se også **Nightscout**.

**CAN** = statuslys for forfalt kanylebytte, vist i statusraden på hovedskjermen i **AAPS** → se også **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (kontinuerlig glukosemåler) → se også **FGM**.

**Lukket loop** (Closed Loop) = et lukket loop-system som automatisk justerer brukerens basaltilførsel ut fra **AAPS**-algoritmen og brukerens **profil**innstillinger, uten at brukeren må godkjenne det. Mer informasjon → Wiki – «lukket loop», og se også **HCL** / **FCL**.

**COB** = Carbs On Board (aktive karbohydrater). Dette er mengden karbohydrater som for øyeblikket er tilgjengelig for fordøyelse hos brukeren → se også IOB.

**CSF** = Carbs Sensitivity Factor (karbohydratfølsomhetsfaktor). det vil si hvor mye brukerens **BS** øker per 1 g karbohydrater som tas opp.

**DIA** = Duration of Insulin Action (insulinets virkningstid). Mer informasjon → [Wiki – «DIA»](#Config-Builder-insulin-dia), og se også → [DIABETTECH – «DIA»](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Savings Time (sommertid). Se [Wiki – Tidssonebytte og sommertid](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamisk ISF (eller DynISF)** = en funksjon i **AAPS** som tilpasser insulinsensitivitetsfaktoren (**ISF**) dynamisk ut fra brukerens **TDD** og **BS**.

**eKarbo** (eCarbs) = forlengede karbohydrater (extended Carbs). Karbohydrater fordelt over flere timer (for eksempel for å dekke fett/protein), slik at **AAPS** kan fordele insulinet som en forlenget bolus. Mer informasjon → [Wiki – «Forlengede karbohydrater»](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop (full lukket loop). En loop som ikke trenger noe fra brukeren ved måltider: ingen karbotelling og ingen måltidsbolus. Mer informasjon → Wiki – «full lukket loop», og se også **HCL**.

**FGM** = Flash Glucose Monitor (flash-glukosemåler), som Abbott Freestyle Libre. Mer informasjon → Wiki – «BS-kilde», og se også «CGM».

**git** = et verktøy som brukes til å lagre og laste ned kildekoden til **AAPS**.

**GitHub** = en nettbasert tjeneste som lagrer kildekoden til **AAPS** og versjonskontrollen (sporing av endringer i filer og samordning av arbeidet med dem, spesielt for team), og som også kan bygge appen. Den er også nødvendig for **APK**-oppdateringer. Mer informasjon → Wiki – «oppdatere APK».

**Glimp** = en app som samler inn verdier fra Freestyle Libre.

**HCL (eller hybrid lukket loop)** (Hybrid Closed Loop) = en loop som automatiserer insulintilførselen mellom måltider, men som fortsatt krever at brukeren gir bolus til måltider. Nesten alle systemer i daglig bruk, inkludert **AAPS**, er hybrid lukket loop → se også **FCL** / **Lukket loop**.

**IK (IC, I:C, ICR, CR, carb ratio)** = insulin-til-karbohydratforholdet (Insulin to Carb ratio). Merk at dette vanligvis oppgis i g/E, selv om forkortelsen antyder det motsatte.

**IOB** = Insulin On Board (aktivt insulin). Insulin som er aktivt i brukerens kropp. Se [Wiki – Aktivt insulin (IOB)](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor (insulinsensitivitetsfaktor). Den forventede nedgangen i BS som følge av én enhet insulin. Enheten er enten mg/dL/E eller mmol/L/E. Disse er ikke likeverdige uten omregning!

**Keystore (eller JKS)** = en Java Key Store, en kryptert fil der dine personlige utviklersertifikater og nøkler lagres. Den trengs for å bygge **AAPS** (og bygge på nytt).

**LGS** = Low Glucose Suspend (stopp ved lavt BS). Se [Wiki – Stopp ved lavt BS](#KeyAapsFeatures-LGS)

**LineageOS** = gratis operativsystem med åpen kildekode for smarttelefoner osv. Hvis du bruker Accu-Chek Combo, se [Wiki – Combo-pumpen](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Loggfiler** (Log files) = **AAPS** sine registreringer av brukerens handlinger (nyttige for feilsøking). Mer informasjon → [Wiki – «loggfiler»](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = maksimalt samlet IOB. Dette er en sikkerhetsfunksjon som hindrer at **AAPS** gir insulin ut over brukerens innstillinger. Mer informasjon → [Wiki – «Maksimalt samlet IOB som OpenAPS ikke kan overskride»](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = sikkerhetsfunksjon som beregner en standard nedbryting av karbohydrater når karbohydratopptaket ikke kan bestemmes ut fra hvordan brukerens blodsukker reagerer. Mer informasjon → [Wiki – «Innstillinger»](#Preferences-min_5m_carbimpact).

**Nightscout** = prosjekt med åpen kildekode for å få tilgang til og rapportere **CGM**-data. Det sentrale knutepunktet for brukerens **AAPS**-data. Den kan lage rapporter for å se brukerens historiske **Nightscout**-data, som forventet HbA1c og tid i målområdet, eller lete etter mønstre i dataene via persentildiagram osv.

**Nightscout** → se også **Nightscout Reporter**. Dette er spesielt nyttig for foreldre som følger barnets diabetesbehandling.

**Nightscout Reporter Tool** = et verktøy som lager PDF-rapporter fra dataene i Nightscout-nettappen. Se «Nightscout Reporter», «NS Reporter» på Facebook.

**NSClient** (**NSClientV3**) = **AAPS**-pluginen som synkroniserer data med **Nightscout** (**Konfigurasjon** → **Kommunikasjon**). Det er ikke det samme som **AAPSClient**, følgerappen. Mer informasjon → [Wiki – «NSClient»](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System, forgjengerprosjektet og grunnlaget for AAPS.

**Åpen loop-system** (Open Loop system) = en funksjon i **AAPS** som anbefaler justeringer, som brukeren selv må utføre manuelt i **AAPS**. Mer informasjon → [Wiki – «Åpen loop»](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = sensitivitetsdeteksjon og «reference design implementation version 0/1» (referansedesign, implementeringsversjon 0/1). Det er den sentrale algoritmen bak OpenAPS → Wiki – «sensitivitetsdeteksjon».

**OS-AID** = Open-Source Automated Insulin Delivery (automatisk insulintilførsel med åpen kildekode). Et **AID**-system bygd på programvare med åpen kildekode, som **AAPS**, **OpenAPS**, Loop eller Trio. Disse systemene er ikke formelt godkjent av helsemyndigheter (FDA, NHS osv.) → se også **AID**.

**Topp** (Peak time) = tidspunktet da insulinet som er gitt, har størst effekt. Mer informasjon → [Wiki – «Insulinets virkningstid (DIA) og topp»](#Config-Builder-insulin-dia).

**PH** = Pump History (pumpehistorikk). Dette finner du i behandlingshistorikken i **AAPS**: åpne **menyen** (☰) øverst til venstre på hovedskjermen og velg **Behandlinger**.

**Prediksjoner** (Predictions) = prediksjoner for **BS** fremover, basert på ulike beregninger. Mer informasjon → [Wiki – «prediksjonslinjer»](#aaps-screens-prediction-lines).

**Profil** (Profile) = brukerens grunnleggende behandlingsinnstillinger (basaldose, **DIA**, **IK**, **ISF**, **BS**-mål). **AAPS** bruker bare profiler som er laget i **AAPS** (**Administrer** → **Profil**), men **profiler** fra **Nightscout** kan kopieres (synkroniseres) til **AAPS**. Mer informasjon → [Wiki – «Din AAPS-profil»](../SettingUpAaps/YourAapsProfile.md).

**Profilbytte** (Profile switch) = (midlertidig) bytte fra brukerens **profil** til en annen **profil** som er lagret i **AAPS**.

**Profilprosent** (Profile Percentage) = en (midlertidig) prosentvis økning eller senking av brukerens **profil** i et valgt tidsrom.

**RES** = statuslys for forfalt reservoarbytte, vist i statusraden på hovedskjermen i **AAPS** → se også **BAT** / **CAN** / **SEN**.

**RileyLink** = maskinvareenhet med åpen kildekode som kobler Bluetooth Low Energy (BLE) til trådløs kommunikasjon på 916 MHz (brukt av gamle Medtronic-pumper) eller 433 MHz (brukt av Omnipod Eros-pumper).

**SAGE** = sensor age (sensorens alder). Dette vises på hovedskjermen i **AAPS** og i **Nightscout**, basert på brukerens **Sensorbytte**-registreringer i helseportalen → se også **Nightscout**.

**SEN** = statuslys for forfalt sensorbytte, vist i statusraden på hovedskjermen i **AAPS** → se også **BAT** / **CAN** / **RES**.

**Sensitivitetsdeteksjon** (Sensitivity detection) = beregning av insulinsensitivitet som følge av trening, hormoner osv. se også → [DIABETTECH – «Autosens»](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensorstøy** (Sensor noise) = et begrep som beskriver ustabile **CGM**-målinger som gir «hoppende» **BS**-verdier. Mer informasjon → [Wiki – «Utjevning av blodsukkerdata»](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus (supermikrobolus). En funksjon i **AAPS** for raskere insulintilførsel for å justere **BS**. Mer informasjon → [Wiki – «**SMB**»](#Open-APS-features-super-micro-bolus-smb), og se også **UAM**.

**Superbolus** (Super bolus) = flytting av basalinsulin til bolusinsulin for raskere justering av **BS**.

**TBB** = total base basal (samlet basal, summen av basaldosene i løpet av 24 timer) → se også **TBR** / **TDD**.

**TBR** = temporary basal rate (midlertidig basal) → se også **TBB** / **TDD**.

**TDD** = total daily dose (samlet døgndose: bolus + basal per dag) → se også **TBB** / **TBR**.

**TT** = temporary target (midlertidig mål), en midlertidig økning/senking av brukerens **BS**-mål (målområde), for eksempel ved måltider eller trening. Mer informasjon → [Wiki – «midlertidige mål»](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (ikke-varslede måltider). Oppdager en betydelig økning i **BS** på grunn av måltider, adrenalin eller annen påvirkning, og prøver å justere for dette. Mer informasjon → [Wiki – «UAM»](#enable-uam), og se også **SMB**.

**Virtuell pumpe** (Virtual pump) = en funksjon i **AAPS** som lar brukeren prøve funksjonene i **AAPS**, eller som kan brukes av personer med diabetes som har en pumpemodell uten **AAPS**-driver for looping → se også **Åpen loop**.

**Bakgrunnsbilde** (Wallpaper) = bakgrunnsbildet i **AAPS**, se siden om telefoner.

**xDrip** = programvare med åpen kildekode for å lese **CGM**-systemer.

**Zero-temp** = midlertidig basaldose på 0 % (ingen basalinsulin gis).

→ se også [OpenAPS-dokumentasjonen](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)