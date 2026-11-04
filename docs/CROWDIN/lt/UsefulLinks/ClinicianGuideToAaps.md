# Gydytojams – bendras AAPS įvadas ir vadovas

```{note}
Šis puslapis yra bendras įvadas gydytojams. Paskutinį kartą jis peržiūrėtas 2026 m. birželio mėn. AAPS nuolat tobulinama, todėl tiksliausios ir naujausios informacijos visada ieškokite [pagrindinėje AAPS dokumentacijoje](../index.md).
```

Šis puslapis skirtas gydytojams, kurie domisi atvirojo kodo dirbtinės kasos technologijomis, tokiomis kaip AAPS, arba pacientams, kurie nori pasidalyti šia informacija su savo gydytojais.

Šiame vadove pateikiama bendra informacija apie „pasidaryk pats“ uždarą ciklą ir konkrečiai apie tai, kaip veikia AAPS. Daugiau informacijos visomis šiomis temomis rasite [išsamioje AAPS dokumentacijoje internete](../index.md). Jei turite klausimų, susisiekite su savo pacientu dėl išsamesnės informacijos arba nedvejodami susisiekite su bendruomene. (Jei nesinaudojate socialiniais tinklais (pvz., [Twitter](https://twitter.com/kozakmilos) ar Facebook), galite rašyti el. paštu developers@aaps.app). [Čia taip pat rasite naujausių tyrimų ir rezultatų duomenų](https://openaps.org/outcomes/).

## The steps for building a DIY Closed Loop:

Norint pradėti naudoti AAPS, reikia atlikti šiuos veiksmus:

* Rasti [suderinamą pompą](../Getting-Started/CompatiblePumps.md), [suderinamą Android įrenginį](../Getting-Started/Phones.md) ir [suderinamą NGJ šaltinį](../Getting-Started/CompatiblesCgms.md).
* [Atsisiųsti AAPS šaltinio kodą ir sukurti programinę įrangą](../SettingUpAaps/BuildingAaps.md).
* [Sukonfigūruoti programinę įrangą, kad ji palaikytų ryšį su paciento diabeto prietaisais, ir nustatyti parametrus bei saugos nuostatas](../SettingUpAaps/SetupWizard.md).

## How A DIY Closed Loop Works

Be uždaro ciklo sistemos, pacientas, sergantis cukriniu diabetu, gauna duomenis iš savo pompos ir NGJ, nusprendžia, ką daryti, ir imasi atitinkamų veiksmų.

Su automatiniu insulino tiekimu sistema daro tą patį: renka duomenis iš pompos, NGJ ir kitų vietų, kur registruojama informacija (pvz., Nightscout). Šią informaciją ji naudoja skaičiavimams ir nusprendžia, kiek daugiau ar mažiau insulino reikia (daugiau ar mažiau nei profilio valandinė bazė). Reikiamus pakeitimus ji atlieka laikinomis valandinėmis bazėmis, kad KG išliktų tiksliniame intervale arba ilgainiui į jį sugrįžtų.

Jei įrenginys, kuriame veikia AAPS, sugenda arba atsiduria per toli nuo pompos, pasibaigus paskutinei laikinai valandinei bazei pompa vėl veikia kaip įprasta pompa su iš anksto užprogramuota valandine baze.

## Kaip renkami duomenys:

Naudojant AAPS, Android įrenginyje veikia speciali programėlė, kuri atlieka skaičiavimus, o įrenginys per Bluetooth palaiko ryšį su palaikoma pompa. AAPS per Wi-Fi arba mobiliuosius duomenis gali palaikyti ryšį su kitais įrenginiais ir debesimi, kad surinktų papildomos informacijos ir praneštų pacientui, prižiūrintiems asmenims ir artimiesiems, ką ji daro ir kodėl.

Android įrenginys turi:

* komunikuoti su pompa ir skaityti jos istoriją, kad nustatytų, kiek insulino buvo suleista
* komunikuoti su NGJ (tiesiogiai arba per debesies serverį), kad žinotų, kaip keičiasi glikemija

Kai tik įrenginys surenka duomenis, algoritmas juos analizuoja ir priima sprendimus remdamasis nustatymais (insulino jautrumo faktorius, insulino ir angliavandenių santykis, insulino veikimo trukmė, tikslinė glikemija ir kt.). Jei reikia, duoda komandą pompai, kad koreguotų insulino leidimą.

Čia taip pat kaupiama visa informacija apie bolusus, angliavandenių suvartojimą ir laikinus tikslo / diapazono pokyčius, iš pompos ar Nightscout, ir ji naudojama apskaičiuoti insulino suleidimo kiekį.

## How does it know what to do?

Atvirojo kodo programinė įranga buvo sukurta siekiant perimti užduotis, kurias anksčiau sergantys cukriniu diabetu atlikdavo rankiniu būdu, ir apskaičiuoti, kiek tiksliai reikia suleisti insulino. Pirmiausia sistema renka duomenis iš visų prijungtų įrenginių ir iš debesies, juos parengia ir atlieka skaičiavimus. Ji prognozuoja, kaip KG keisis per artimiausias valandas pagal įvairius scenarijus, ir apskaičiuoja reikiamus pakeitimus, kad KG išliktų tiksliniame intervale arba į jį sugrįžtų. Tada ji išsiunčia pompai reikiamus nustatymus. Tada ji vėl nuskaito duomenis iš pompos ir skaičiavimai vėl pradedami iš naujo.

Svarbu turėti aukštos kokybės NGJ duomenis, nes glikemijos duomenys yra svarbiausi įvesties parametrai.

AAPS sukurta taip, kad skaidriai registruotų visus surinktus įvesties duomenis, gautą rekomendaciją ir kiekvieną atliktą veiksmą. Taigi į klausimą: "Kodėl tai daro X?" bet kuriuo metu galite lengvai atsakyti peržiūrėdami žurnalo įrašus.

## AAPS algoritmo sprendimų pavyzdžiai:

AAPS naudoja tą patį pagrindinį algoritmą ir tas pačias funkcijas kaip OpenAPS. Remdamasis nustatymais ir esama situacija, algoritmas pateikia keletą prognozių, pagal kurias apskaičiuojami skirtingi scenarijai, kas gali nutikti ateityje. Nightscout jie rodomi kaip violetinės linijos. AAPS šias [prognozės linijas](#aaps-screens-prediction-lines) rodo skirtingomis spalvomis. Žurnalo failai gali būti naudojami norint atsekti, kuris iš šių įvairių numatymų buvo naudojamas konkrečiu laikotarpiu, kad būtų apskaičiuotos būtinos priemonės.

### Čia pateikiami violetinių prognozės linijų pavyzdžiai ir kaip jos gali skirtis:

![Violetinių prognozės kreivių pavyzdžiai](../images/Prediction_lines.jpg)

(clinicianguide-dosing-scenarios)=

### Here are examples of different time frames that influence the needed adjustments to insulin delivery:

### 1 scenarijus - Nulinė laikina bazė saugumo sumetimais

Šiame pavyzdyje KG artimiausiu metu kyla, tačiau prognozuojama, kad ilgesniu laikotarpiu ji bus žema. Tiesą sakant, prognozuojama, kad ji ne tik nukris žemiau tikslinės zonos, *bet ir* žemiau saugios ribos. Saugumo sumetimais, kad išvengtų hipoglikemijos, AAPS nustatys nulinę laikiną bazę (laikiną valandinę bazę 0 %), kol eventualBG (galutinė KG) bet kuriuo laikotarpiu bus virš saugos ribos.

![1 scenarijus](../images/Dosing_scenario_1.jpg)

### 2 scenarijus - Nulinė laikina bazė saugumo sumetimais

Šiame pavyzdyje prognozuojama, kad KG artimiausiu metu nukris, tačiau galiausiai bus virš tikslo. Tačiau kadangi artimiausiu metu prognozuojama žema KG yra žemiau saugos ribos, AAPS nustatys nulinę laikiną bazę, kol neliks nė vieno prognozės linijos taško žemiau ribos.

![Dozavimo 2 scenarijus](../images/Dosing_scenario_2.jpg)

### Scenario 3 - More insulin needed

Šiame pavyzdyje prognozuojama, kad artimiausiu metu glikemija nukris žemiau tikslinės zonos. Tačiau nesitikima, kad ši vertė nukris žemiau saugios ribos. Ilgalaikė tikėtina glikemija yra didesnė už tikslinę. Todėl AAPS nepridės insulino, kuris prisidėtų prie žemos KG artimiausiu metu (t. y. insulino, dėl kurio prognozė nukristų žemiau ribos). Kai tai bus saugu, ji įvertins, ar pridėti insulino, kad žemiausia galutinės prognozuojamos KG reikšmė nukristų iki tikslo. *(Priklausomai nuo nustatymų, reikiamo insulino kiekio ir laiko, šis insulinas gali būti suleistas laikinomis valandinėmis bazėmis arba SMB (supermikrobolusais)).*

![Dozavimo 3 scenarijus](../images/Dosing_scenario_3.jpg)

### 4 scenarijus - Maža laikina bazė saugumo sumetimais

Šiame pavyzdyje AAPS mato, kad KG staigiai kyla gerokai virš tikslo. Tikimasi, kad dėl organizme jau esančio insulino ir jo veikimo trukmės, tikslinę ribą vėl bus galima pasiekti neleidžiant papildomo insulino. Iš tikrųjų tikimasi, kad ji nukris žemiau tikslo. Todėl AAPS nesuleis papildomo insulino, kad neprisidėtų prie žemos KG ilgesniu laikotarpiu. Nors KG aukšta arba kyla, šiuo atveju tikėtina maža laikina valandinė bazė.

![Dozavimo 4 scenarijus](../images/Dosing_scenario_4.jpg)

## Nustatymų optimizavimas ir pakeitimai

Gydytojui, neturinčiam patirties su AAPS ar „pasidaryk pats“ uždaru ciklu, gali būti sunku padėti pacientui optimizuoti nustatymus ar atlikti pakeitimus, kad pagerėtų gydymo rezultatai. We have multiple tools and [guides](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

Svarbiausia užduotis pacientui yra padaryti tik vieną pakeitimą vienu metu ir stebėti jo poveikį 2–3 dienas prieš nusprendžiant pakeisti kitą parametrą. Žinoma, tai netaikoma, jei akivaizdžiai „blogas pritaikymas“ pablogina situaciją. Tokiu atveju jis turėtų nedelsdamas grįžti prie ankstesnio nustatymo. Mes, žmonės, linkę viską pakeisti iškart. Bet jei tai padarysite, tai gali sukelti neoptimalų pakeitimą, kurį sunku sugrąžinti į gerą būklę.

Vienas galingiausių nustatymų yra automatinis valandinės bazės, insulino jautrumo faktoriaus bei insulino ir angliavandenių santykio skaičiavimo įrankis. Tai vadinama „[Autotune](#autotune-how-autotune-calculates-adjustments)“. Jis skirtas tam, kad duomenys padėtų jums ar jūsų pacientui laipsniškai keisti parametrus. Geriausia praktika, prieš pradedant rankiniu būdu koreguoti nustatymus, pirmiausia peržiūrėti Autotune ataskaitas. Autotune yra AAPS dalis, įskiepis (**Konfigūracija** → **Bendrieji** → **Autotune**); žr. [Autotune](../AdvancedOptions/Autotune.md). Jį galima paleisti pagal poreikį arba automatiškai. Kadangi šie parametrai būtini tiek įprastam insulino tiekimui pompa, tiek insulino tiekimui uždaru ciklu, Autotune rezultatų aptarimas ir šių parametrų koregavimas yra natūrali vieta, kur reikalingas gydytojas.

Be to, žmogaus elgesys, išmoktas valdant diabetą rankiniu būdu, dažnai daro įtaką rezultatams – net ir naudojant „pasidaryk pats“ uždarą ciklą. Pavyzdžiui, jei prognozuojama, kad KG nukris, ir AAPS jau sumažino insulino tiekimą KG krentant, gali pakakti nedidelio angliavandenių kiekio (pvz., 3–4 g), kad KG pakiltų nuo 70 mg/dL (3,9 mmol/l). Tačiau dažnai žmogus suvalgo daug daugiau angliavandenių (pvz., laikydamasis „15 taisyklės“). Tada KG pakyla greičiau, nes atsiranda papildomos gliukozės, o insulino tiekimas jau buvo sumažintas prieš hipoglikemiją.

## OpenAPS

**Šis vadovas pritaikytas iš [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html) (gydytojo vadovas apie OpenAPS).** OpenAPS – tai sistema, sukurta veikti mažame nešiojamame kompiuteryje (paprastai vadinamame „rig“). AAPS naudoja daug OpenAPS metodų ir turi daug bendros logikos bei algoritmų, todėl šis vadovas labai panašus į originalų vadovą. Didelę dalį informacijos apie OpenAPS galima lengvai pritaikyti AAPS. Pagrindinis skirtumas – aparatinė įranga, kurioje veikia kiekviena programinės įrangos dalis.

## Summary

Tai bendra apžvalga, kaip veikia AAPS. Daugiau informacijos paklauskite savo paciento, kreipkitės į bendruomenę arba perskaitykite visą AAPS dokumentaciją internete.

Papildomai rekomenduojama literatūra:

* [Visa AAPS dokumentacija](../index.md)
* [OpenAPS Reference Design](https://OpenAPS.org/reference-design/) (OpenAPS etaloninis projektas) paaiškina, kaip OpenAPS sukurta užtikrinti saugumą: https://openaps.org/reference-design/
* The [full OpenAPS documentation](https://openaps.readthedocs.io/en/latest/index.html) 
  * Žr. [kaip AAPS paverčia prognozes dozavimo sprendimu](#aaps-screens-how-predictions-become-a-dosing-decision) šioje dokumentacijoje arba [OpenAPS determine-basal dokumentaciją](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic), kur pagrindinis algoritmas aprašytas su visomis techninėmis detalėmis