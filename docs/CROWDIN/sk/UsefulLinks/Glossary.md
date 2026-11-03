# Slovník

**AAPS** = AndroidAPS je názov aplikácie pre Android.

**AAPSClient** = aplikácia pre sledujúcich, určená pre opatrovateľov. Na telefóne sledujúceho sleduje **AAPS** používateľa cez jeho stránku **Nightscout** a po spárovaní s telefónom s **AAPS** ho ovláda na diaľku. Nezamieňajte s **NSClient**. Ďalšie informácie → [Wiki – „Aplikácia AAPSClient“](../RemoteFeatures/AapsClient.md) a [Ovládanie Master ↔ Client](#client-master-control).

**Aktivita** (Activity) = aktivita inzulínu, ktorá vyjadruje rýchlosť poklesu IOB. Pozrite [Wiki – „DIA“](#Config-Builder-insulin-dia) a súvisiaci **BGI**.

**AID** = Automated Insulin Delivery (automatizované podávanie inzulínu). Pojem, ktorý sa bežne používa v klinickej praxi a vo výskume pre systém, ktorý automaticky upravuje podávanie inzulínu podľa údajov z **CGM**. **APS** a **uzavretý okruh** znamenajú to isté → pozrite aj **OS-AID**.

**APS** = Artificial Pancreas System (systém umelého pankreasu) → pozrite aj **AID**.

**AMA** = Advanced Meal Assist (rozšírená pomoc pri jedle). Algoritmus, ktorý umožňuje **AAPS** po boluse k jedlu zvýšiť bazál používateľa agresívnejšie. Ďalšie informácie → [Wiki – „Advanced Meal Assist (AMA)“](#Open-APS-features-advanced-meal-assist-ama).

**Korekčný faktor** (Adjustment Factor) = používa sa v **Dynamickej ISF**; je to hodnota v **Nastaveniach** používateľa od 1 % do 300 %. Toto funguje ako násobiteľ hodnoty **TDD**. Pozrite [Wiki – Korekčný faktor pre DynISF](#dyn-isf-adjustment-factor)

**Android Auto** = systém, ktorý zobrazuje niektoré funkcie smartfónu s Androidom, vrátane **AAPS**, na displeji auta. Ďalšie informácie → [Wiki – „Android Auto“](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (balík aplikácie pre Android). Inštalačný súbor softvéru. Ďalšie informácie → [Wiki – „Zostavenie AAPS“](../SettingUpAaps/BuildingAaps.md).

**Autosens** = výpočet citlivosti na inzulín v 24-hodinovom a 8-hodinovom okne atď. Ďalšie informácie → [DIABETTECH – **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = cloudová platforma na hosťovanie webovej aplikácie **Nightscout** → pozrite aj **Nightscout**.

**BAT** = stavová kontrolka slabej batérie pumpy, zobrazená v riadku stavu na hlavnej obrazovke **AAPS** → pozrite aj **CAN** / **RES** / **SEN**.

**BG** = glykémia (hladina glukózy v krvi).

**BGI** = blood glucose impact (vplyv na glykémiu). Miera, o ktorú by **glykémia** „mala“ stúpnuť alebo klesnúť iba na základe aktivity inzulínu.

**Zdroj glykémie** (BG source) = nastavenie AAPS, v ktorom sa určuje zdroj údajov glykémie. Pozrite [Wiki – Zdroj glykémie](#Config-Builder-bg-source)

**Bridge** (most) = ďalšie zariadenie, ktoré mení **FGM** na **CGM**.

**BR** = Basal Rate (bazálna dávka). Množstvo inzulínu v danom časovom bloku, ktoré udržiava **glykémiu** na stabilnej úrovni. → pozrite aj **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (zostavte si vlastnú aplikáciu Dexcom). Spôsob, ako si vytvoriť vlastnú aplikáciu Dexcom na čítanie údajov zo senzora Dexcom G6.

**CAGE** = Cannula AGE (vek kanyly). Zobrazuje sa na hlavnej obrazovke **AAPS** a v Nightscoute na základe záznamov **Plnenie/doplňovanie** používateľa v Starostlivosti → pozrite aj **Nightscout**.

**CAN** = stavová kontrolka, ktorá upozorňuje, že výmena kanyly je po termíne; zobrazuje sa v riadku stavu na hlavnej obrazovke **AAPS** → pozrite aj **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (systém kontinuálneho monitorovania glukózy) → pozrite aj **FGM**.

**Uzavretý okruh** (Closed Loop) = systém uzavretého okruhu, ktorý automaticky upravuje podávanie bazálu používateľa podľa algoritmu **AAPS** a nastavení **profilu** používateľa, bez toho, aby to musel používateľ schváliť. Ďalšie informácie → [Wiki – „uzavretý okruh“](#KeyAapsFeatures-ClosedLoop) a pozrite aj **HCL** / **FCL**.

**COB** = Carbs On Board (aktívne sacharidy). Je to množstvo sacharidov, ktoré sú práve k dispozícii na trávenie → pozrite aj IOB.

**CSF** = Carbs Sensitivity Factor (faktor citlivosti na sacharidy). t. j. o koľko stúpne **glykémia** používateľa po vstrebaní 1 g sacharidov.

**DIA** = Duration of Insulin Action (doba pôsobenia inzulínu). Ďalšie informácie → [Wiki – „DIA“](#Config-Builder-insulin-dia) a pozrite aj → [DIABETTECH – „DIA“](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Saving Time (letný čas). Pozrite [Wiki – Zmena časového pásma a letný čas](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamická ISF (alebo DynISF)** (Dynamic ISF) = funkcia **AAPS**, ktorá dynamicky prispôsobuje citlivosť na inzulín (**ISF**) podľa **TDD** a **glykémie** používateľa.

**eCarbs** = extended Carbs (predĺžené sacharidy, v aplikácii eSacharidy). Sacharidy rozložené do niekoľkých hodín (napr. na pokrytie tukov a bielkovín), vďaka čomu môže **AAPS** rozložiť inzulín podobne ako pri predĺženom boluse. Ďalšie informácie → [Wiki – „Predĺžené sacharidy“](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop (plne uzavretý okruh). Okruh, ktorý od používateľa nepotrebuje žiadne zadávanie k jedlu: žiadne počítanie sacharidov ani bolus k jedlu. Ďalšie informácie → [Wiki – „plne uzavretý okruh“](../AdvancedOptions/FullClosedLoop.md) a pozrite aj **HCL**.

**FGM** = Flash Glucose Monitor (systém okamžitého monitorovania glukózy), napríklad Abbott Freestyle Libre. Ďalšie informácie → [Wiki – „zdroj glykémie“](#Config-Builder-bg-source) a pozrite aj „CGM“.

**git** = nástroj na ukladanie a sťahovanie zdrojového kódu **AAPS**.

**GitHub** = webová služba, ktorá hostí zdrojový kód **AAPS** a jeho správu verzií (sledovanie zmien v súboroch a koordinácia práce na nich, najmä v tímoch) a dokáže aplikáciu aj zostaviť. Je potrebný aj na aktualizácie **APK**. Ďalšie informácie → [Wiki – „aktualizácia APK“](../Maintenance/UpdateToNewVersion.md).

**Glimp** = aplikácia na zbieranie hodnôt zo senzora Freestyle Libre.

**HCL (alebo Hybrid Closed Loop)** = hybridný uzavretý okruh: okruh, ktorý automatizuje podávanie inzulínu medzi jedlami, ale k jedlu si musí používateľ stále podať bolus. Takmer každý systém v bežnom používaní, vrátane **AAPS**, je hybridný uzavretý okruh → pozrite aj **FCL** / **uzavretý okruh**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio (inzulínovo-sacharidový pomer). Pozor: obvykle sa udáva v g/U, aj keď skratka naznačuje opak.

**IOB** = Insulin On Board (aktívny inzulín). Inzulín, ktorý je aktívny v tele používateľa. Pozrite [Wiki – Aktívny inzulín](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor (citlivosť na inzulín). Očakávaný pokles glykémie po podaní jednej jednotky inzulínu. Jednotka je buď mg/dl/U, alebo mmol/l/U. Bez prepočtu tieto hodnoty nie sú rovnocenné!

**Úložisko kľúčov (alebo JKS)** (Keystore) = Java Key Store, šifrovaný súbor, v ktorom sú uložené vaše osobné vývojárske certifikáty a kľúče potrebné na zostavenie (a opätovné zostavenie) **AAPS**.

**LGS** = Low Glucose Suspend (ochrana pred nízkou glykémiou). Pozrite [Wiki – Ochrana pred nízkou glykémiou](#KeyAapsFeatures-LGS)

**LineageOS** = bezplatný operačný systém s otvoreným zdrojovým kódom pre smartfóny atď. Pri pumpe Accu-Chek Combo pozrite [Wiki – pumpa Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Log súbory** (Log files) = záznamy **AAPS** o akciách používateľa (užitočné pri riešení problémov a ladení). Ďalšie informácie → [Wiki – „log súbory“](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = maximálny celkový IOB. Je to bezpečnostná funkcia, ktorá bráni **AAPS** podať viac inzulínu, než dovoľujú nastavenia používateľa. Ďalšie informácie → [Wiki – „Maximálny celkový IOB, ktorý OpenAPS nemôže prekročiť“](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = bezpečnostná funkcia, ktorá počíta predvolený úbytok sacharidov, keď sa ich vstrebávanie nedá určiť z reakcie glykémie používateľa. Ďalšie informácie → [Wiki – „min_5m_carbimpact“](#Preferences-min_5m_carbimpact).

**Nightscout** = projekt s otvoreným zdrojovým kódom na prístup k údajom **CGM** a ich vyhodnocovanie. Centrálne miesto pre údaje **AAPS** používateľa. Dokáže vytvárať reporty s historickými údajmi **Nightscoutu** používateľa, napríklad očakávaný HbA1c alebo čas v rozsahu, a hľadať v údajoch vzory pomocou percentilového grafu atď.

**Nightscout** → pozrite aj **Nightscout Reporter**. Je to užitočné najmä pre rodičov, ktorí sledujú liečbu diabetu svojho dieťaťa.

**Nightscout Reporter Tool** = nástroj, ktorý vytvára správy vo formáte PDF z údajov webovej aplikácie Nightscout. Pozrite „Nightscout Reporter“, „NS Reporter“ na Facebooku.

**NSClient** (**NSClientV3**) = plugin **AAPS**, ktorý synchronizuje údaje s **Nightscoutom** (**Konfigurácia** → **Komunikácia**). Nie je to to isté ako **AAPSClient**, aplikácia pre sledujúcich. Ďalšie informácie → [Wiki – „NSClient“](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System (otvorený systém umelého pankreasu), predchodca a základ AAPS.

**Otvorený okruh** (Open Loop system) = funkcia **AAPS**, ktorá odporúča úpravy, ktoré musí používateľ vykonať ručne v **AAPS**. Ďalšie informácie → [Wiki – „Otvorený okruh“](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = detekcia citlivosti a „reference design implementation version 0/1“ (referenčná implementácia, verzia 0/1). Je to kľúčový algoritmus, na ktorom stojí OpenAPS. Ďalšie informácie → [Wiki – „Detekcia citlivosti“](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery (automatizované podávanie inzulínu s otvoreným zdrojovým kódom). Systém **AID** zostavený zo softvéru s otvoreným zdrojovým kódom, napríklad **AAPS**, **OpenAPS**, Loop alebo Trio. Tieto systémy nie sú formálne schválené zdravotníckymi úradmi (FDA, NHS atď.) → pozrite aj **AID**.

**Čas vrcholu** (Peak time) = čas najväčšieho účinku podaného inzulínu. Ďalšie informácie → [Wiki – „Doba pôsobenia inzulínu (DIA) a vrchol“](#Config-Builder-insulin-dia).

**PH** = Pump History (história pumpy). Nájdete ju v histórii ošetrení v **AAPS**: otvorte **ponuku** (☰) vľavo hore na hlavnej obrazovke a vyberte **Ošetrenia**.

**Predpovede** (Predictions) = predpovede **glykémie** do budúcnosti na základe rôznych výpočtov. Ďalšie informácie → [Wiki – „predikčné čiary“](#aaps-screens-prediction-lines).

**Profil** (Profile) = základné nastavenia liečby používateľa (bazálna dávka, **DIA**, **IC**, **ISF**, cieľová **glykémia**). **AAPS** používa iba profily vytvorené v **AAPS** (**Spravovať** → **Profil**), ale **profily** z **Nightscoutu** sa dajú skopírovať (synchronizovať) do **AAPS**. Ďalšie informácie → [Wiki – „Váš profil AAPS“](../SettingUpAaps/YourAapsProfile.md).

**Prepnutie profilu** (Profile switch) = (dočasné) prepnutie **profilu** používateľa na iný **profil** uložený v **AAPS**.

**Percento profilu** (Profile Percentage) = (dočasné) percentuálne zvýšenie alebo zníženie **profilu** používateľa na zvolené obdobie.

**RES** = stavová kontrolka, ktorá upozorňuje, že výmena zásobníka je po termíne; zobrazuje sa v riadku stavu na hlavnej obrazovke **AAPS** → pozrite aj **BAT** / **CAN** / **SEN**.

**RileyLink** = hardvérové zariadenie s otvoreným zdrojovým kódom, ktoré prepája Bluetooth Low Energy (BLE) s bezdrôtovou komunikáciou na 916 MHz (pre staré pumpy Medtronic) alebo 433 MHz (pre pumpy Omnipod Eros).

**SAGE** = sensor age (vek senzora). Zobrazuje sa na hlavnej obrazovke **AAPS** a v **Nightscoute** na základe záznamov **Zavedenie senzora** používateľa v Starostlivosti → pozrite aj **Nightscout**.

**SEN** = stavová kontrolka, ktorá upozorňuje, že výmena senzora je po termíne; zobrazuje sa v riadku stavu na hlavnej obrazovke **AAPS** → pozrite aj **BAT** / **CAN** / **RES**.

**Detekcia citlivosti** (Sensitivity detection) = výpočet citlivosti na inzulín, ktorá sa mení vplyvom pohybu, hormónov atď. pozrite aj → [DIABETTECH – „Autosens“](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Šum senzora** (Sensor noise) = pojem pre nestabilné hodnoty **CGM**, pri ktorých hodnoty **glykémie** „skáču“. Ďalšie informácie → [Wiki – „Vyhladzovanie údajov glykémie“](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus. Funkcia **AAPS** na rýchlejšie podávanie inzulínu s cieľom upraviť **glykémiu**. Ďalšie informácie → [Wiki – „**SMB**“](#Open-APS-features-super-micro-bolus-smb) a pozrite aj **UAM**.

**Superbolus** (Super bolus) = presun bazálneho inzulínu do bolusu na rýchlejšiu úpravu **glykémie**.

**TBB** = total base basal, celková základná bazálna dávka (súčet bazálnej dávky za 24 hodín) → pozrite aj **TBR** / **TDD**.

**TBR** = temporary basal rate (dočasný bazál) → pozrite aj **TBB** / **TDD**.

**TDD** = total daily dose, celková denná dávka (v aplikácii CDD; bolus + bazál za deň) → pozrite aj **TBB** / **TBR**.

**TT** = temporary target (dočasný cieľ): dočasné zvýšenie alebo zníženie cieľovej **glykémie** (rozsahu) používateľa, napr. pred jedlom alebo pri športe. Ďalšie informácie → [Wiki – „Dočasné ciele“](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (neohlásené jedlá). Rozpoznanie výrazného vzostupu **glykémie** vplyvom jedla, adrenalínu alebo iných vplyvov a pokus o jeho úpravu. Ďalšie informácie → [Wiki – „UAM“](#enable-uam) a pozrite aj **SMB**.

**Virtuálna pumpa** (Virtual pump) = funkcia **AAPS**, ktorá používateľovi umožňuje vyskúšať funkcie **AAPS** alebo ľuďom s diabetom, ktorých model pumpy nemá ovládač v **AAPS**, používať **AAPS** ako otvorený okruh → pozrite aj **Otvorený okruh**.

**Tapeta** (Wallpaper) = obrázok na pozadí **AAPS**, pozrite stránku o telefónoch.

**xDrip** = softvér s otvoreným zdrojovým kódom na čítanie údajov zo systémov **CGM**.

**Nulový dočasný bazál** (Zero-temp) = dočasný bazál 0 % (bez podávania bazálneho inzulínu).

→ pozrite aj [dokumentáciu OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)