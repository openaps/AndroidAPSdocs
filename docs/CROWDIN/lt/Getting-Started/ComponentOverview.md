# Komponentų apžvalga

**AAPS** nėra tik (savarankiškai sukurta) programėlė – tai vienas iš kelių jūsų uždaro ciklo sistemos modulių. Prieš renkantis komponentus verta perskaityti jų dokumentaciją.

![Components overview](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

The foundation of **AAPS** safety features discussed in this documentation is built on the safety features of the hardware used to build your system. Norint uždaryti automatinio insulino dozavimo ciklą, labai svarbu naudoti tik išbandytą, visiškai veikiančią ir jūsų šalies oficialių institucijų patvirtintą insulino pompą ir NGJ. Šių komponentų aparatinės ar programinės įrangos pakeitimai gali sukelti netikėtą insulino tiekimą ir taip sukelti didelę riziką vartotojui. Jei randate arba jums siūlo sugedusias, pakeistas ar savadarbes insulino pompas arba NGJ imtuvus, **nenaudokite** jų **AAPS** sistemai kurti.

Be to, ne mažiau svarbu naudoti tik originalias priemones, pvz., įvediklius, kaniules ir insulino rezervuarus, kuriuos gamintojas patvirtino naudoti su jūsų pompa ar NGJ. Nepatikrintos ar pakeistos priemonės gali lemti netikslius NGJ rodmenis ir insulino dozavimo klaidas. Neteisingai dozuotas insulinas yra labai pavojingas. Nerizikuokite savo gyvybe keisdami ar taisydami priemones.

Last but not least, you must not take SGLT-2 inhibitors (gliflozins) as they incalculably lower blood sugar levels. Ypač pavojingas derinys su sistema, kuri sumažina bazę siekdama pakelti glikemiją, nes dėl gliflozinų šis glikemijos padidėjimas gali neįvykti ir gali grėsmingai pritrūkti insulino. [More information here](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Būtinieji moduliai

### Geras individualus dozavimo algoritmas jūsų diabeto gydymui

Nors to nereikia nei sukurti, nei nusipirkti, tai turbūt labiausiai nuvertinamas „modulis“, tačiau jis būtinas. Kai leidžiate algoritmui padėti valdyti diabetą, jis turi žinoti teisingus nustatymus, kad nedarytų rimtų klaidų. Even if you are still missing other modules, you can already verify and adapt your **Profile** in collaboration with your diabetes team.

The **Profile** includes:

- BR (Basal rates): provides background insulin;
- JIF (jautrumo insulinui faktorius): kiek 1 insulino vienetas sumažins gliukozės kiekį kraujyje;
- IA (insulino ir angliavandenių santykis): kiek gramų angliavandenių padengia vienas insulino vienetas.

Dauguma ciklo naudotojų naudoja cirkadinę valandinę bazę, JIF ir IA, kurie dienos metu prisitaiko prie hormonų lemiamo jautrumo insulinui.

Be **profilio**, taip pat turite nustatyti savo **insuliną** per **Valdymas → Insulino nustatymai**, įskaitant jo IVT (insulino veikimo trukmę) – žr. [Insulino nustatymai](#Config-Builder-insulin-dia).

Daugiau informacijos apie **profilį** rasite [jam skirtame puslapyje](../SettingUpAaps/YourAapsProfile.md).

### Phone

Žr. puslapį [Telefonai](../Getting-Started/Phones.md).

### Insulin pump

Žr. puslapį [Suderinamos pompos](../Getting-Started/CompatiblePumps.md).

**Kai kurių pompų modelių privalumai ir trūkumai**

Combo, Insight ir senesnės Medtronic yra patikimos pompos, kurias galima naudoti cikle. Combo privalumas — gerokai didesnis infuzijos rinkinių pasirinkimas, nes joje naudojama standartinė Luer-Lock jungtis. Be to, jai tinka įprasta baterija, kurią galite nusipirkti bet kurioje degalinėje ar 24 valandas per parą veikiančioje parduotuvėje. Jei jos labai prireiktų, galite pavogti arba pasiskolinti iš viešbučio kambaryje esančio nuotolinio valdymo pultelio ;-).

Tačiau DanaR/RS ir Dana-i, palyginti su Combo, turi šiuos privalumus:

- Initial pairing is simpler with the Dana-i/RS. Tačiau paprastai tai daroma tik vieną kartą, todėl tai svarbu tik tada, jei norite išbandyti naują funkciją su skirtingomis pompomis.
- Kol kas Combo veikia nuskaitydama ekrano turinį. Apskritai tai veikia puikiai, bet lėtai. Ciklui tai nelabai svarbu, nes viskas vyksta fone. Vis dėlto ryšys turi būti palaikomas daug ilgiau, todėl ilgiau išlieka rizika, kad BT ryšys nutrūks. Tai nepatogu, jei leisdami bolusą ir gamindami valgį nueinate nuo telefono.
- Combo vibruoja pasibaigus laikinai bazei, o DanaR vibruoja (arba pypsi) leidžiant SMB. Naktį tikriausiai dažniau naudosite laikinas bazes nei SMB.  The Dana-i/RS is configurable so that it does neither beep nor vibrate.
- Dana-i/RS istorija su angliavandeniais nuskaitoma per kelias sekundes. Todėl galima lengvai pakeisti telefoną be interneto ryšio ir tęsti ciklą, kai tik gaunamos kelios NGJ reikšmės.
- Visos pompos, su kuriomis **AAPS** gali palaikyti ryšį, naujos yra atsparios vandeniui. Tik Dana pompos taip pat yra „atsparios vandeniui pagal garantiją“, nes jų baterijos skyrius ir rezervuaro pildymo sistema yra sandarūs.

### Glikemijos šaltinis

Žr. puslapį [Suderinami NGJ](../Getting-Started/CompatiblesCgms.md).

### **AAPS**-.apk file

Pagrindinis sistemos komponentas. Kad galėtumėte įdiegti programėlę, pirmiausia turite patys sukurti apk failą. Instrukcijas rasite [čia](../SettingUpAaps/BuildingAaps.md).

### Reporting server

Ataskaitų serveris rodo jūsų gliukozės ir gydymo duomenis bei kuria ataskaitas išsamiai analizei. Šiuo metu su AAPS galima naudoti du ataskaitų serverius: [Nightscout](#SettingUpTheReportingServer-nightscout) ir [Tidepool](#SettingUpTheReportingServer-tidepool). Abu leidžia vaizdžiai stebėti diabeto duomenis laikui bėgant ir pateikia **laiko tiksliniame intervale** (TIR) bei kitų rodiklių statistiką.

Ataskaitų serveris nepriklauso nuo kitų komponentų. Jei nenorite naudoti ataskaitų serverio, žinokite, kad jis nėra būtinas ilgalaikiam **AAPS** naudojimui. Tačiau jį vis tiek reikia nustatyti, nes jo reikia norint įvykdyti [**1 mokymo etapą**](#objectives-objective1).

Daugiau informacijos, kaip paruošti ataskaitų serverį, rasite [čia](../SettingUpAaps/SettingUpTheReportingServer.md).

## Pasirenkamieji moduliai

### Išmanusis laikrodis

Galite pasirinkti bet kurį išmanųjį laikrodį su **Wear OS 3** arba naujesne versija. Daugiau informacijos rasite puslapyje [Išmanieji laikrodžiai ir AAPS](../Getting-Started/Watches.md).

Naudotojai sudaro [išbandytų telefonų ir laikrodžių sąrašą](#Phones-list-of-tested-phones). Su **AAPS** galima naudoti įvairius ciferblatus; juos rasite [čia](../WearOS/WearOsSmartwatch.md).

### xDrip

Net jei programėlės xDrip nenaudojate kaip **glikemijos šaltinio**, vis tiek galite ją naudoti, pavyzdžiui, aliarmams arba kitokiam gliukozės rodymui. Galite turėti tiek aliarmų, kiek norite, nurodyti laiką, kada aliarmas turi būti aktyvus, pasirinkti, ar jis gali nepaisyti begarsio režimo, ir pan. Šiek tiek informacijos apie xDrip rasite [čia](../CompatibleCgms/xDrip.md). Please be aware that the documentation for this app is not always up to date, as it changes quickly.

## What to do while waiting for modules

Kartais tenka palaukti, kol gaunate visus komponentus, kurių reikia uždarajam ciklui. Nesijaudinkite, laukdami galite padaryti daug. **Būtina** patikrinti ir, kai reikia, pritaikyti valandinę bazę (BR), insulino ir angliavandenių santykį (IA), jautrumo insulinui faktorių (JIF) ir kt. Atviras ciklas gali būti geras būdas išbandyti sistemą ir susipažinti su **AAPS**. Šiuo režimu **AAPS** pateikia gydymo rekomendacijas, kurias galite vykdyti rankiniu būdu.

Galite toliau skaityti šią dokumentaciją, bendrauti su kitais ciklo sistemų naudotojais internetu ar gyvai, [skaityti](../UsefulLinks/BackgroundReading.md) dokumentaciją arba kitų naudotojų tekstus (tik būkite atsargūs: ne viskas yra teisinga ar jums tinka atkartoti).

**Baigėte?** Jei jau turite visus **AAPS** komponentus (sveikiname!) arba bent tiek, kad galėtumėte pradėti atviro ciklo režimu, prieš kiekvieną naują mokymo etapą pirmiausia perskaitykite [mokymo etapų aprašymą](../SettingUpAaps/CompletingTheObjectives.md) ir paruoškite savo įrangą.
