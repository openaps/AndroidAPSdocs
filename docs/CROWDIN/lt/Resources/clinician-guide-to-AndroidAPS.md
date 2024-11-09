# For Clinicians – A General Introduction and Guide to AAPS

This page is intended for clinicians who have expressed interest in open source artificial pancreas technology such as AAPS, or for patients who want to share such information with their clinicians.

This guide has some high-level information about DIY closed looping and specifically how AAPS works. For more details on all of these topics, please view the [comprehensive AAPS documentation online](../index.md). Jei turite klausimų, susisiekite su savo pacientu dėl išsamesnės informacijos arba nedvejodami susisiekite su bendruomene. (Jei nesinaudojate socialiniais tinklais (pvz., [Twitter](https://twitter.com/kozakmilos) ar Facebook), galite atsiųsti el. laišką adresu developers@AndroidAPS.org). [ Šioje nuorodoje galite rasti keletą naujausių tyrimų & ir duomenų, susijusių su rezultatais](https://openaps.org/outcomes/).

## The steps for building a DIY Closed Loop:

To start using AAPS, the following steps should be taken:

* Find a [compatible pump](../Getting-Started/CompatiblePumps.md), a [compatible Android device](../Getting-Started/Phones.md), and a [compatible CGM source](../Getting-Started/CompatiblesCgms.md).
* [Download the AAPS source code and build the software](../SettingUpAaps/BuildingAaps.md).
* [Configure the software to talk to their diabetes devices and specify settings and safety preferences](../SettingUpAaps/SetupWizard.md).

## How A DIY Closed Loop Works

Be uždaro ciklo sistemos, pacientas, sergantis cukriniu diabetu, gauna duomenis iš savo pompos ir NGJ, nusprendžia, ką daryti, ir imasi atitinkamų veiksmų.

Sistema daro tą patį: renka duomenis iš pompos, NGJ ir kitos registruojamos informacijos (pvz., per Nightscout). Ji naudojasi šia informacija apskačiuodama, kiek daugiau ar mažiau reikia insulino (nei užprogramuota bazės profilyje). Sistema nustato laikiną bazę, kuri padeda išlaikyti glikemiją stabilią arba grąžina ją į tikslinę zoną.

If the device running AAPS breaks or goes out of range of the pump, once the latest temporary basal rate ends, the pump falls back to being a standard pump with the preprogrammed basals rates runnning.

## How data is gathered:

With AAPS, an Android device runs a special app to do the math, the device communicates using Bluetooth with a supported pump. AAPS can communicate with other devices and to the cloud via wifi or mobile data to gather additional information, and to report to the patient, caregivers, and loved ones about what it’s doing and why.

Android įrenginys turi:

* komunikuoti su pompa ir skaityti jos istoriją, kad nustatytų, kiek insulino buvo suleista
* komunikuoti su NGJ (tiesiogiai arba per debesies serverį), kad žinotų, kaip keičiasi glikemija

Kai tik įrenginys surenka duomenis, algoritmas juos analizuoja ir priima sprendimus remdamasis nustatymais (insulino jautrumo faktorius, insulino ir angliavandenių santykis, insulino veikimo trukmė, tikslinė glikemija ir kt.). Jei reikia, duoda komandą pompai, kad koreguotų insulino leidimą.

Čia taip pat kaupiama visa informacija apie bolusus, angliavandenių suvartojimą ir laikinus tikslo / diapazono pokyčius, iš pompos ar Nightscout, ir ji naudojama apskaičiuoti insulino suleidimo kiekį.

## How does it know what to do?

Atvirojo kodo programinė įranga buvo sukurta siekiant perimti užduotis, kurias anksčiau sergantys cukriniu diabetu atlikdavo rankiniu būdu, ir apskaičiuoti, kiek tiksliai reikia suleisti insulino. Pirmiausia sistema renka duomenis iš visų prijungtų įrenginių ir iš debesies, juos parengia ir atlieka reikalingus skaičiavimus. Remiantis įvairiais scenarijais, prognozuojama artimiausių valandų tikėtina glikemija ir apskaičiuojami būtini insulino dozės patikslinimai, kad glikemija išliktų tikslinėje zonoje arba grąžintų ją ten. Tada ji išsiunčia pompai reikiamus nustatymus. Tada ji vėl nuskaito duomenis iš pompos ir skaičiavimai vėl pradedami iš naujo.

Svarbu turėti aukštos kokybės NGJ duomenis, nes glikemijos duomenys yra svarbiausi įvesties parametrai.

AAPS is designed to transparently track all input data it gathers, the resulting recommendation, and any action taken. Taigi į klausimą: "Kodėl tai daro X?" bet kuriuo metu galite lengvai atsakyti peržiūrėdami žurnalo įrašus.

## Examples of AAPS algorithm decision making:

AAPS uses the same core algorithm and feature set as OpenAPS. Remdamasis nustatymais ir esama situacija, algoritmas pateikia keletą prognozių, pagal kurias apskaičiuojami skirtingi scenarijai, kas gali nutikti ateityje. Nightscout jie rodomi kaip violetinės linijos. AAPS uses different colors to separate these [prediction lines](#aaps-screens-prediction-lines). Žurnalo failai gali būti naudojami norint atsekti, kuris iš šių įvairių numatymų buvo naudojamas konkrečiu laikotarpiu, kad būtų apskaičiuotos būtinos priemonės.

### Here are examples of the purple prediction lines, and how they might differ:

![Violetinių prognozės kreivių pavyzdžiai](../images/Prediction_lines.jpg)

### Here are examples of different time frames that influence the needed adjustments to insulin delivery:

### Scenario 1 - Zero Temp for safety

Nors glikemija per trumpą laiką didėja, prognozuojama, kad vidutiniu laikotarpiu ji smarkiai sumažės. Tiesą sakant, prognozuojama, kad ji ne tik nukris žemiau tikslinės zonos, *bet ir* žemiau saugios ribos. For safety to prevent the low, AAPS will issue a zero temp (temporary basal rate at 0%), until the eventualBG (in any time frame) is above threshold.

![1 scenarijus](../images/Dosing_scenario_1.jpg)

### Scenario 2 - Zero temp for safety

Tikimasi, kad šiame pavyzdyje glikemija greitai nukris žemiau saugios ribos, tačiau vidutiniu laikotarpiu reikšmingai padidės virš tikslinės zonos. However, because the near-term low is actually below the safety threshold, AAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Dozavimo 2 scenarijus](../images/Dosing_scenario_2.jpg)

### Scenario 3 - More insulin needed

Šiame pavyzdyje prognozuojama, kad artimiausiu metu glikemija nukris žemiau tikslinės zonos. Tačiau nesitikima, kad ši vertė nukris žemiau saugios ribos. Ilgalaikė tikėtina glikemija yra didesnė už tikslinę. Therefore, AAPS will restrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). AndroidAPS ir toliau stebi glikemijos lygį ir kuo greičiau suleis insulino (nerizikuodama hipoglikemija), kad numatytą aukštą glikemiją grąžintų į tikslinę zoną. *(Priklausomai nuo nustatymo, reikiamo insulino kiekio ir laiko, šis insulinas gali būti leidžiamas kaip laikina bazė arba SMB (Super Mikro Bolusas) ). *

![Dozavimo 3 scenarijus](../images/Dosing_scenario_3.jpg)

### Scenario 4 - Low temping for safety

In this example, AAPS sees that BG is spiking well above target. Tikimasi, kad dėl organizme jau esančio insulino ir jo veikimo trukmės, tikslinę ribą vėl bus galima pasiekti neleidžiant papildomo insulino. Iš tikrųjų tikimasi, kad ji nukris žemiau tikslo. Therefore, AAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. Nors glikemijos reikšmė yra aukšta ir auga, tokiu atveju labiau tikėtina, kad AndroidAPS sumažins valandinę bazę.

![Dozavimo 4 scenarijus](../images/Dosing_scenario_4.jpg)

## Optimizing settings and making changes

As a clinician who may not have experience with AAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. We have multiple tools and [guides](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

Svarbiausia užduotis pacientui yra padaryti tik vieną pakeitimą vienu metu ir stebėti jo poveikį 2–3 dienas prieš nusprendžiant pakeisti kitą parametrą. Žinoma, tai netaikoma, jei akivaizdžiai „blogas pritaikymas“ pablogina situaciją. Tokiu atveju jis turėtų nedelsdamas grįžti prie ankstesnio nustatymo. Mes, žmonės, linkę viską pakeisti iškart. Bet jei tai padarysite, tai gali sukelti neoptimalų pakeitimą, kurį sunku sugrąžinti į gerą būklę.

Vienas galingiausių nustatymų yra automatinis valandinės bazės, insulino jautrumo faktoriaus bei insulino ir angliavandenių santykio skaičiavimo įrankis. This is called “[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. Jis skirtas paleisti nepriklausomai / rankiniu būdu, o duomenys padės jums ar jūsų pacientui laipsniškai keisti parametrus. Geriausia praktika, prieš pradedant rankiniu būdu koreguoti nustatymus, pirmiausia peržiūrėti Autotune ataskaitas. With AAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AAPS as well. As these parameters are a prerequisite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adustment of these parameters would be the natural link to the clinician.

Be to, žmogaus elgesys, išmoktas valdant diabetą rankiniu būdų, dažnai daro įtaką rezultatams - net ir naudojant „pasidaryk pats“ uždarą ciklą. For example, if BG is predicted to go low and AAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). Tačiau daugeliu atvejų pacientas, remdamasis savo ankstesne patirtimi, nusprendžia suvartoti žymiai daugiau angliavandenių. Tai lemia spartesnį padidėjimą tiek dėl papildomos gliukozės, tiek dėl iš anksto sumažintos AndroidAPS insulino dozės.

## OpenAPS

**Šis vadovas paimtas ir pritaikytas iš [OpenAPS Medicinos vadovas](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html). **OpenAPS yra sistema, kuri sukurta veikti mažame nešiojamame kompiuteryje (paprastai vadinama „rig“). AAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AAPS, with the main difference being the hardware platform where each piece of software is run.

## Summary

This is meant to be a high-level overview of how AAPS works. For more details, ask your patient, reach out to the community, or read the full AAPS documentation available online.

Papildomai rekomenduojama literatūra:

* The [full AAPS documentation](../index.md)
* [OpenAPS informacija](https://OpenAPS.org/reference-design/) paaiškina, kaip OpenAPS sukurtas saugumui: https://openaps.org/reference-design/
* The [full OpenAPS documentation](https://openaps.readthedocs.io/en/latest/index.html) 
  * More [details on OpenAPS calculations](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)