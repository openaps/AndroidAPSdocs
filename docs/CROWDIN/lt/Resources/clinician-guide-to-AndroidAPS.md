# Gydytojams – AndroidAPS įvadas ir vadovas

Šis puslapis yra skirtas gydytojams, besidomintiems atvirojo kodo dirbtinės kasos technologijomis, tokiomis kaip AndroidAPS, ir pacientams, norintiems pasidalinti šia informacija su savo gydytojais ir diabetologais.

Šiame vadove yra tam tikros svarbios informacijos apie „pasidaryk pats“ uždarojo tipo ciklą ir konkrečiai kaip veikia AndroidAPS. For more details on all of these topics, please view the [comprehensive AndroidAPS documentation online](../index.md). Jei turite klausimų, susisiekite su savo pacientu dėl išsamesnės informacijos arba nedvejodami susisiekite su bendruomene. (Jei nesinaudojate socialiniais tinklais (pvz., [Twitter](https://twitter.com/kozakmilos) ar Facebook), galite atsiųsti el. laišką adresu developers@AndroidAPS.org). [ Šioje nuorodoje galite rasti keletą naujausių tyrimų & ir duomenų, susijusių su rezultatais](https://openaps.org/outcomes/).

## The steps for building a DIY Closed Loop:

Norėdami naudoti AndroidAPS, turite atlikti šiuos veiksmus:

* Find a [compatible pump](../Hardware/pumps.md), a [compatible Android device](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing), and a [compatible CGM source](../Configuration/BG-Source.md).
* [Download the AndroidAPS source code and build the software](../Installing-AndroidAPS/Building-APK.md).
* [Configure the software to talk to their diabetes devices and specify settings and safety preferences](../index.md#configuration).

## How A DIY Closed Loop Works

Be uždaro ciklo sistemos, pacientas, sergantis cukriniu diabetu, gauna duomenis iš savo pompos ir NGJ, nusprendžia, ką daryti, ir imasi atitinkamų veiksmų.

Sistema daro tą patį: renka duomenis iš pompos, NGJ ir kitos registruojamos informacijos (pvz., per Nightscout). Ji naudojasi šia informacija apskačiuodama, kiek daugiau ar mažiau reikia insulino (nei užprogramuota bazės profilyje). Sistema nustato laikiną bazę, kuri padeda išlaikyti glikemiją stabilią arba grąžina ją į tikslinę zoną.

Jei įrenginys, kuriame veikia AndroidAPS, sugenda arba nutrūksta Bluetooth ryšys su pompa, pasibaigus nustatytai laikinai bazei insulino pompa grįžta į įprastą vartotojo nustatytą programą.

## How data is gathered:

Naudodamas AndroidAPS, Android įrenginys paleidžia specialią programą skaičiavimams atlikti. Įrenginys Bluetooth ryšiu komunikuoja su insulino pompa. AndroidAPS gali komunikuoti su kitais įrenginiais ir gauti papildomą informaciją iš internetinės debesijos per WiFi ar mobiliųjų duomenų ryšį. Tokiu būdu pacientas, slaugos personalas ir artimieji taip pat gali sekti, ką ir kodėl AndroidAPS daro.

Android įrenginys turi:

* komunikuoti su pompa ir skaityti jos istoriją, kad nustatytų, kiek insulino buvo suleista
* komunikuoti su NGJ (tiesiogiai arba per debesies serverį), kad žinotų, kaip keičiasi glikemija

Kai tik įrenginys surenka duomenis, algoritmas juos analizuoja ir priima sprendimus remdamasis nustatymais (insulino jautrumo faktorius, insulino ir angliavandenių santykis, insulino veikimo trukmė, tikslinė glikemija ir kt.). Jei reikia, duoda komandą pompai, kad koreguotų insulino leidimą.

Čia taip pat kaupiama visa informacija apie bolusus, angliavandenių suvartojimą ir laikinus tikslo / diapazono pokyčius, iš pompos ar Nightscout, ir ji naudojama apskaičiuoti insulino suleidimo kiekį.

## How does it know what to do?

Atvirojo kodo programinė įranga buvo sukurta siekiant perimti užduotis, kurias anksčiau sergantys cukriniu diabetu atlikdavo rankiniu būdu, ir apskaičiuoti, kiek tiksliai reikia suleisti insulino. Pirmiausia sistema renka duomenis iš visų prijungtų įrenginių ir iš debesies, juos parengia ir atlieka reikalingus skaičiavimus. Remiantis įvairiais scenarijais, prognozuojama artimiausių valandų tikėtina glikemija ir apskaičiuojami būtini insulino dozės patikslinimai, kad glikemija išliktų tikslinėje zonoje arba grąžintų ją ten. Tada ji išsiunčia pompai reikiamus nustatymus. Tada ji vėl nuskaito duomenis iš pompos ir skaičiavimai vėl pradedami iš naujo.

Svarbu turėti aukštos kokybės NGJ duomenis, nes glikemijos duomenys yra svarbiausi įvesties parametrai.

AndroidAPS skaidriai dokumentuoja visus įvestus duomenis, gautą rekomendaciją ir priemones, kurių buvo imtasi. Taigi į klausimą: "Kodėl tai daro X?" bet kuriuo metu galite lengvai atsakyti peržiūrėdami žurnalo įrašus.

## Examples of AndroidAPS algorithm decision making:

AndroidAPS naudoja tą patį pagrindinį algoritmą ir funkcionalumą kaip ir OpenAPS. Remdamasis nustatymais ir esama situacija, algoritmas pateikia keletą prognozių, pagal kurias apskaičiuojami skirtingi scenarijai, kas gali nutikti ateityje. Nightscout jie rodomi kaip violetinės linijos. AndroidAPS uses different colors to separate these [prediction lines](../Installing-AndroidAPS/Releasenotes.md#overview-tab). Žurnalo failai gali būti naudojami norint atsekti, kuris iš šių įvairių numatymų buvo naudojamas konkrečiu laikotarpiu, kad būtų apskaičiuotos būtinos priemonės.

### Here are examples of the purple prediction lines, and how they might differ:

![Violetinių prognozės kreivių pavyzdžiai](../images/Prediction_lines.jpg)

### Here are examples of different time frames that influence the needed adjustments to insulin delivery:

### Scenario 1 - Zero Temp for safety

Nors glikemija per trumpą laiką didėja, prognozuojama, kad vidutiniu laikotarpiu ji smarkiai sumažės. Tiesą sakant, prognozuojama, kad ji ne tik nukris žemiau tikslinės zonos, *bet ir* žemiau saugios ribos. Saugumo sumetimais ir siekiant išvengti hipoglikemijos, AndroidAPS nustato vadinamąją nulinę bazę (laikiną valandinę 0% bazę), iki kol tikėtina glikemijos vertė viršija saugos slenkstį bet kuriuo laikotarpiu.

![1 scenarijus](../images/Dosing_scenario_1.jpg)

### Scenario 2 - Zero temp for safety

Tikimasi, kad šiame pavyzdyje glikemija greitai nukris žemiau saugios ribos, tačiau vidutiniu laikotarpiu reikšmingai padidės virš tikslinės zonos. Kadangi trumpalaikė numatoma reikšmė yra mažesnė už saugią ribą, AndroidAPS vėl nustato nulinę bazę, kol laukiama glikemija nebebus mažesnė už šią ribą.

![Dozavimo 2 scenarijus](../images/Dosing_scenario_2.jpg)

### Scenario 3 - More insulin needed

Šiame pavyzdyje prognozuojama, kad artimiausiu metu glikemija nukris žemiau tikslinės zonos. Tačiau nesitikima, kad ši vertė nukris žemiau saugios ribos. Ilgalaikė tikėtina glikemija yra didesnė už tikslinę. Todėl AndroidAPS neleis insulino, nes tai prisidėtų prie trumpalaikės hipoglikemijos, nes suleidus insulino, prognozuojama glikemija nesiektų tikslo. AndroidAPS ir toliau stebi glikemijos lygį ir kuo greičiau suleis insulino (nerizikuodama hipoglikemija), kad numatytą aukštą glikemiją grąžintų į tikslinę zoną. *(Priklausomai nuo nustatymo, reikiamo insulino kiekio ir laiko, šis insulinas gali būti leidžiamas kaip laikina bazė arba SMB (Super Mikro Bolusas) ). *

![Dozavimo 3 scenarijus](../images/Dosing_scenario_3.jpg)

### Scenario 4 - Low temping for safety

Šiame pavyzdyje AndroidAPS mato, kad glikemija sparčiai kyla virš tikslinės zonos. Tikimasi, kad dėl organizme jau esančio insulino ir jo veikimo trukmės, tikslinę ribą vėl bus galima pasiekti neleidžiant papildomo insulino. Iš tikrųjų tikimasi, kad ji nukris žemiau tikslo. Todėl AndroidAPS nesuleis papildomai insulino, kad vidutiniu laikotarpiu nesukeltų hipoglikemijos. Nors glikemijos reikšmė yra aukšta ir auga, tokiu atveju labiau tikėtina, kad AndroidAPS sumažins valandinę bazę.

![Dozavimo 4 scenarijus](../images/Dosing_scenario_4.jpg)

## Optimizing settings and making changes

Jums, kaip gydytojui, neturinčiam patirties su AndroidAPS ar „pasidaryk pats“ uždarojo ciklo sistemomis, gali būti sudėtinga padėti pacientui optimizuoti nustatymus arba atlikti pakeitimus, kad pagerintumėte jo rezultatus. We have multiple tools and [guides](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

Svarbiausia užduotis pacientui yra padaryti tik vieną pakeitimą vienu metu ir stebėti jo poveikį 2–3 dienas prieš nusprendžiant pakeisti kitą parametrą. Žinoma, tai netaikoma, jei akivaizdžiai „blogas pritaikymas“ pablogina situaciją. Tokiu atveju jis turėtų nedelsdamas grįžti prie ankstesnio nustatymo. Mes, žmonės, linkę viską pakeisti iškart. Bet jei tai padarysite, tai gali sukelti neoptimalų pakeitimą, kurį sunku sugrąžinti į gerą būklę.

Vienas galingiausių nustatymų yra automatinis valandinės bazės, insulino jautrumo faktoriaus bei insulino ir angliavandenių santykio skaičiavimo įrankis. This is called “[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. Jis skirtas paleisti nepriklausomai / rankiniu būdu, o duomenys padės jums ar jūsų pacientui laipsniškai keisti parametrus. Geriausia praktika, prieš pradedant rankiniu būdu koreguoti nustatymus, pirmiausia peržiūrėti Autotune ataskaitas. Naudojant AndroidAPS, Autotune veikia kaip atskira sistema, nors šiuo metu stengiamasi ją integruoti tiesiai į AndroidAPS. As these parameters are a prerequisite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adustment of these parameters would be the natural link to the clinician.

Be to, žmogaus elgesys, išmoktas valdant diabetą rankiniu būdų, dažnai daro įtaką rezultatams - net ir naudojant „pasidaryk pats“ uždarą ciklą. Pvz., jei prognozuojamas žema glikemija, o AndroidAPS sumažina insulino kiekį, gali pakakti nedaug angliavandenių (pvz., 3–4 g angliavandenių), kad glikemija padidėtų nuo 70 mg/dl (3,9 mmol). Tačiau daugeliu atvejų pacientas, remdamasis savo ankstesne patirtimi, nusprendžia suvartoti žymiai daugiau angliavandenių. Tai lemia spartesnį padidėjimą tiek dėl papildomos gliukozės, tiek dėl iš anksto sumažintos AndroidAPS insulino dozės.

## OpenAPS

**Šis vadovas paimtas ir pritaikytas iš [OpenAPS Medicinos vadovas](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html). **OpenAPS yra sistema, kuri sukurta veikti mažame nešiojamame kompiuteryje (paprastai vadinama „rig“). AndroidAPS naudoja daugelį OpenAPS įdiegtų metodų ir dalijasi didžiąja logikos ir algoritmų dalimi, todėl šis vadovas yra labai panašus į pirminį vadovą. Didžiąją dalį informacijos apie OpenAPS galima lengvai pritaikyti AndroidAPS, pagrindinis skirtumas yra aparatinės įrangos platforma, kurioje veikia programinė įranga.

## Summary

Tai buvo bendra AndroidAPS veikimo apžvalga. Norėdami gauti daugiau informacijos, klauskite paciento, susisiekite su bendruomene arba perskaitykite visą AndroidAPS dokumentaciją, kurią galite rasti internete.

Papildomai rekomenduojama literatūra:

* The [full AndroidAPS documentation](../index)
* [OpenAPS informacija](https://OpenAPS.org/reference-design/) paaiškina, kaip OpenAPS sukurtas saugumui: https://openaps.org/reference-design/
* The [full OpenAPS documentation](https://openaps.readthedocs.io/en/latest/index.html) 
  * More [details on OpenAPS calculations](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)