# Terminų žodynas

**AAPS** = AndroidAPS – tai Android programėlės pavadinimas.

**AAPSClient** = sekėjo programėlė prižiūrintiems asmenims. Sekėjo telefone ji seka naudotojo **AAPS** per naudotojo **Nightscout** svetainę, o susieta su **AAPS** telefonu – nuotoliniu būdu jį valdo. Nepainiokite su **NSClient**. Daugiau informacijos → [Wiki – „Programėlė AAPSClient“](../RemoteFeatures/AapsClient.md) ir [Pagrindinio įrenginio ↔ kliento valdymas](#client-master-control).

**Aktyvumas** (Activity) = insulino aktyvumas, kuris rodo, kaip greitai mažėja AIO. Žr. [Wiki – „IVT“](#Config-Builder-insulin-dia) ir susijusią **BGI**.

**AID** = Automated Insulin Delivery, automatinis insulino tiekimas. Terminas, kuris klinikinėje praktikoje ir moksliniuose tyrimuose dažniausiai vartojamas sistemai, automatiškai keičiančiai insulino tiekimą pagal **NGJ** duomenis. **APS** ir **uždaras ciklas** reiškia tą patį → taip pat žr. **OS-AID**.

**APS** = Artificial Pancreas System, dirbtinės kasos sistema → taip pat žr. **AID**.

**AMA** = Advanced Meal Assist (pažangi pagalba valgant). Algoritmas, kuris leidžia **AAPS** po valgio boluso agresyviau padidinti naudotojo valandinę bazę. Daugiau informacijos → [Wiki – „Pažangi pagalba valgant (AMA)“](#Open-APS-features-advanced-meal-assist-ama).

**Derinimo faktorius** (Adjustment Factor) = naudojamas **DynamicISF**; tai reikšmė nuo 1 % iki 300 %, nustatoma naudotojo **Nustatymuose**. Jis veikia kaip **BPD** reikšmės daugiklis. Žr. [Wiki – Dinaminio JIF derinimo faktorius](#dyn-isf-adjustment-factor)

**Android Auto** = sistema, kuri automobilio ekrane rodo kai kurias Android išmaniojo telefono funkcijas, įskaitant **AAPS**. Daugiau informacijos → [Wiki – „Android Auto“](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (Android programėlės paketas). Programinės įrangos diegimo failas. Daugiau informacijos → [Wiki – „AAPS kūrimas“](../SettingUpAaps/BuildingAaps.md).

**Autosens** = jautrumo insulinui apskaičiavimas per 24 valandų ir 8 valandų laikotarpį ir pan. Daugiau informacijos → [DIABETTECH – **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = debesų kompiuterijos platforma **Nightscout** žiniatinklio programai talpinti → taip pat žr. **Nightscout**.

**BAT** = būklės indikatorius, rodantis senkančią pompos bateriją **AAPS** pagrindinio ekrano būsenos eilutėje → taip pat žr. **CAN** / **RES** / **SEN**.

**BG** = kraujo gliukozė (KG).

**BGI** = blood glucose impact, glikemijos įtaka (KGĮ). Kiek **KG** „turėtų“ pakilti arba nukristi vien dėl insulino veikimo.

**BG source** = glikemijos šaltinis: AAPS nustatymas, kuriuo pasirenkamas kraujo gliukozės duomenų šaltinis. Žr. [Wiki – Glikemijos šaltinis](#Config-Builder-bg-source)

**Tiltas** (Bridge) = papildomas įrenginys, kuris **FGM** paverčia **CGM**.

**BR** = Basal Rate, valandinė bazė. Insulino kiekis per tam tikrą laiko intervalą, kad **KG** išliktų stabili. → taip pat žr. **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (susikurkite savo Dexcom programėlę). Būdas susikurti savo Dexcom programėlę, kuri nuskaito Dexcom G6 jutiklio duomenis.

**CAGE** = Cannula AGE, kaniulės amžius. Rodomas **AAPS** pagrindiniame ekrane ir Nightscout, remiantis naudotojo terapijos įrašais **Užpildymas** → taip pat žr. **Nightscout**.

**CAN** = būklės indikatorius, rodantis pavėluotą kaniulės keitimą **AAPS** pagrindinio ekrano būsenos eilutėje → taip pat žr. **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor, nuolatinis gliukozės jutiklis (NGJ) → taip pat žr. **FGM**.

**Uždaras ciklas** (Closed Loop) = sistema, kuri automatiškai keičia naudotojo valandinę bazę pagal **AAPS** algoritmą ir naudotojo **profilio** nustatymus, nereikalaudama naudotojo patvirtinimo. Daugiau informacijos → [Wiki – „Uždaras ciklas“](#KeyAapsFeatures-ClosedLoop) ir taip pat žr. **HCL** / **FCL**.

**COB** = Carbs On Board, aktyvūs angliavandeniai organizme (AAO). Tai angliavandenių kiekis, kurį naudotojo organizmas dar turi suvirškinti → taip pat žr. IOB.

**CSF** = Carbs Sensitivity Factor, jautrumo angliavandeniams faktorius. T. y. kiek pakyla naudotojo **KG**, kai įsisavinamas 1 g angliavandenių.

**DIA** = Duration of Insulin Action, insulino veikimo trukmė (IVT). Daugiau informacijos → [Wiki – „IVT“](#Config-Builder-insulin-dia) ir taip pat žr. → [DIABETTECH – „DIA“](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Saving Time, vasaros laikas. Žr. [Wiki – Laiko juostos keitimas ir vasaros laikas](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (arba DynISF)** = dinaminis JIF: **AAPS** funkcija, kuri dinamiškai keičia jautrumo insulinui faktorių (**JIF**) pagal naudotojo **BPD** ir **KG**.

**eCarbs** = extended Carbs, ištęsti angliavandeniai (i-AV). Angliavandeniai, paskirstyti per kelias valandas (pvz., riebalams ar baltymams padengti), kad **AAPS** galėtų paskirstyti insuliną kaip ištęstą bolusą. Daugiau informacijos → [Wiki – „Ištęsti angliavandeniai“](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop, visiškai uždaras ciklas. Ciklas, kuriam naudotojui nereikia nieko įvesti valgant: nereikia skaičiuoti angliavandenių ir leisti boluso valgiui. Daugiau informacijos → [Wiki – „Visiškai uždaras ciklas“](../AdvancedOptions/FullClosedLoop.md) ir taip pat žr. **HCL**.

**FGM** = Flash Glucose Monitor, periodiškai skenuojamas gliukozės jutiklis, pvz., Abbott Freestyle Libre. Daugiau informacijos → [Wiki – „Glikemijos šaltinis“](#Config-Builder-bg-source) ir taip pat žr. „CGM“.

**git** = įrankis **AAPS** šaltinio kodui saugoti ir atsisiųsti.

**GitHub** = žiniatinklio paslauga, kurioje laikomas **AAPS** šaltinio kodas ir jo versijų valdymas (failų pakeitimų sekimas ir darbo su jais koordinavimas, ypač komandose). Joje galima ir sukurti programėlę. Ji taip pat reikalinga **APK** atnaujinimams. Daugiau informacijos → [Wiki – „APK atnaujinimas“](../Maintenance/UpdateToNewVersion.md).

**Glimp** = programėlė Freestyle Libre reikšmėms rinkti.

**HCL (arba Hybrid Closed Loop)** = hibridinis uždaras ciklas: ciklas, kuris automatizuoja insulino tiekimą tarp valgių, bet naudotojas valgiui vis tiek turi susileisti bolusą. Beveik visos kasdien naudojamos sistemos, įskaitant **AAPS**, yra hibridiniai uždari ciklai → taip pat žr. **FCL** / **Uždaras ciklas** (Closed Loop).

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio, insulino ir angliavandenių santykis (IA). Atkreipkite dėmesį: įprastai jis nurodomas g/V, nors santrumpa rodo atvirkščiai.

**IOB** = Insulin On Board, aktyvus insulinas organizme (AIO). Naudotojo organizme veikiantis insulinas. Žr. [Wiki – Aktyvus insulinas organizme](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor, jautrumo insulinui faktorius (JIF). Kiek turėtų sumažėti KG dėl vieno insulino vieneto. Vienetas yra mg/dL/V arba mmol/l/V. Be perskaičiavimo jie nėra lygiaverčiai!

**Raktų saugykla (keystore, JKS)** = Java Key Store: užšifruotas failas, kuriame saugomi jūsų asmeniniai kūrėjo sertifikatai ir raktai, reikalingi **AAPS** kūrimui (ir pakartotiniam kūrimui).

**LGS** = Low Glucose Suspend, stabdymas esant žemai glikemijai. Žr. [Wiki – Stabdymas esant žemai glikemijai](#KeyAapsFeatures-LGS)

**LineageOS** = nemokama atvirojo kodo operacinė sistema išmaniesiems telefonams ir kt. Jei naudojate Accu-Chek Combo, žr. [Wiki – Combo pompa](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Žurnalų failai** (log files) = **AAPS** įrašai apie naudotojo veiksmus (naudingi ieškant ir šalinant triktis). Daugiau informacijos → [Wiki – „Žurnalų failų gavimas“](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = didžiausias bendras AIO. Tai saugos funkcija: ji neleidžia **AAPS** suleisti daugiau insulino, nei leidžia naudotojo nustatymai. Daugiau informacijos → [Wiki – „Didžiausias bendras AIO, kurio OpenAPS negali viršyti“](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = saugos funkcija: numatytasis angliavandenių įsisavinimo greitis, naudojamas tada, kai įsisavinimo negalima nustatyti pagal naudotojo kraujo gliukozės pokyčius. Daugiau informacijos → [Wiki – „min_5m_carbimpact“](#Preferences-min_5m_carbimpact).

**Nightscout** = atvirojo kodo projektas **NGJ** duomenims pasiekti ir ataskaitoms kurti. Centrinė naudotojo **AAPS** duomenų saugykla. Joje galima kurti ataskaitas apie naudotojo ankstesnius **Nightscout** duomenis, pvz., numatomą HbA1c, laiką tikslo intervale, arba ieškoti dėsningumų duomenyse pagal procentilių diagramą ir kt.

**Nightscout** → taip pat žr. **Nightscout Reporter**. Tai ypač naudinga tėvams, kurie seka savo vaiko diabeto valdymą.

**Nightscout Reporter Tool** = įrankis, kuris iš Nightscout žiniatinklio programos duomenų sukuria PDF ataskaitas. Žr. „Nightscout Reporter“, „NS Reporter“ Facebook tinkle.

**NSClient** (**NSClientV3**) = **AAPS** įskiepis, kuris sinchronizuoja duomenis su **Nightscout** (**Konfigūracija** → **Ryšys**). Tai ne tas pats kaip **AAPSClient** – sekėjo programėlė. Daugiau informacijos → [Wiki – „NSClient“](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System (atviroji dirbtinės kasos sistema) – ankstesnis projektas, kuriuo grindžiama AAPS.

**Atviro ciklo sistema** (Open Loop system) = **AAPS** funkcija, kuri rekomenduoja pakeitimus, o naudotojas juos turi atlikti **AAPS** rankiniu būdu. Daugiau informacijos → [Wiki – „Atviras ciklas“](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = jautrumo nustatymas ir „reference design implementation version 0/1“ (etaloninio sprendimo 0/1 versija). Tai pagrindinis algoritmas, kuriuo grindžiama OpenAPS. Daugiau informacijos → [Wiki – „Jautrumo nustatymas“](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery, atvirojo kodo automatinis insulino tiekimas. **AID** sistema, sukurta iš atvirojo kodo programinės įrangos, pvz., **AAPS**, **OpenAPS**, Loop arba Trio. Šių sistemų oficialiai nėra patvirtinusios sveikatos institucijos (FDA, NHS ir kt.) → taip pat žr. **AID**.

**Piko laikas** (Peak time) = laikas, kai suleistas insulinas veikia stipriausiai. Daugiau informacijos → [Wiki – „Insulino veikimo trukmė (IVT) ir pikas“](#Config-Builder-insulin-dia).

**PH** = Pump History, pompos istorija. Ją galima peržiūrėti **AAPS** terapijos istorijoje: atidarykite **meniu** (☰) pagrindinio ekrano viršuje kairėje ir pasirinkite **Terapija**.

**Prognozės** (Predictions) = būsimos **KG** prognozės, apskaičiuotos skirtingais būdais. Daugiau informacijos → [Wiki – „Prognozių linijos“](#aaps-screens-prediction-lines).

**Profilis** (Profile) = pagrindiniai naudotojo gydymo nustatymai (valandinė bazė, **IVT**, **IA**, **JIF**, **KG** tikslas). **AAPS** naudoja tik profilius, sukurtus **AAPS** (**Valdymas** → **Profilis**), bet **Nightscout** **profilius** galima nukopijuoti (sinchronizuoti) į **AAPS**. Daugiau informacijos → [Wiki – „Jūsų AAPS profilis“](../SettingUpAaps/YourAapsProfile.md).

**Profilio keitimas** (Profile switch) = (laikinas) naudotojo **profilio** pakeitimas kitu **AAPS** išsaugotu **profiliu**.

**Profilio procentas** (Profile Percentage) = (laikinas) naudotojo **profilio** padidinimas arba sumažinimas procentais pasirinktam laikotarpiui.

**RES** = būklės indikatorius, rodantis pavėluotą rezervuaro keitimą **AAPS** pagrindinio ekrano būsenos eilutėje → taip pat žr. **BAT** / **CAN** / **SEN**.

**RileyLink** = atvirojo kodo aparatinis įrenginys, kuris sujungia Bluetooth Low Energy (BLE) su 916 MHz (naudojamas senoms Medtronic pompoms) arba 433 MHz (naudojamas Omnipod Eros pompoms) belaidžiu ryšiu.

**SAGE** = Sensor AGE, jutiklio amžius. Rodomas **AAPS** pagrindiniame ekrane ir **Nightscout**, remiantis naudotojo terapijos įrašais **Jutiklio įvedimas** → taip pat žr. **Nightscout**.

**SEN** = būklės indikatorius, rodantis pavėluotą jutiklio keitimą **AAPS** pagrindinio ekrano būsenos eilutėje → taip pat žr. **BAT** / **CAN** / **RES**.

**Jautrumo nustatymas** (Sensitivity detection) = jautrumo insulinui apskaičiavimas, kai jis pasikeičia dėl sporto, hormonų ir pan. taip pat žr. → [DIABETTECH – „Autosens“](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Jutiklio triukšmas** (Sensor noise) = terminas, kuriuo apibūdinami nestabilūs **NGJ** rodmenys, dėl kurių **KG** reikšmės „šokinėja“. Daugiau informacijos → [Wiki – „Gliukozės duomenų glodinimas“](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus, supermikrobolusas. **AAPS** funkcija, kuri greičiau suleidžia insuliną, kad pakoreguotų **KG**. Daugiau informacijos → [Wiki – „**SMB**“](#Open-APS-features-super-micro-bolus-smb) ir taip pat žr. **UAM**.

**Superbolusas** (Super bolus) = valandinės bazės insulino perkėlimas į bolusą, kad **KG** būtų pakoreguota greičiau.

**TBB** = total base basal, bendra bazinė dozė (valandinės bazės suma per 24 valandas) → taip pat žr. **TBR** / **TDD**.

**TBR** = temporary basal rate, laikina valandinė bazė → taip pat žr. **TBB** / **TDD**.

**TDD** = total daily dose, bendra paros dozė (BPD) (bolusai + valandinė bazė per parą) → taip pat žr. **TBB** / **TBR**.

**TT** = temporary target, laikinas tikslas (LT): laikinai padidintas arba sumažintas naudotojo **KG** tikslas (intervalas), pvz., valgiui ar sportui. Daugiau informacijos → [Wiki – „Laikini tikslai“](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals, nedeklaruotas maistas (NDM). Reikšmingo **KG** padidėjimo dėl maisto, adrenalino ar kitų veiksnių aptikimas ir bandymas jį pakoreguoti. Daugiau informacijos → [Wiki – „NDM“](#enable-uam) ir taip pat žr. **SMB**.

**Virtuali pompa** (Virtual pump) = **AAPS** funkcija, kuri leidžia naudotojui išbandyti **AAPS** funkcijas arba leidžia žmonėms su diabetu, kurių pompos modeliui nėra **AAPS** tvarkyklės, naudoti **AAPS** kaip atvirą ciklą → taip pat žr. **Atviras ciklas** (Open Loop).

**Ekrano užsklanda** (Wallpaper) = **AAPS** fono paveikslėlis, žr. puslapį „Telefonai“.

**xDrip** = atvirojo kodo programinė įranga **NGJ** sistemų duomenims nuskaityti.

**Nulinė laikina bazė** (Zero-temp) = 0 % laikina valandinė bazė (bazinis insulinas visai netiekiamas).

→ taip pat žr. [OpenAPS dokumentaciją](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)