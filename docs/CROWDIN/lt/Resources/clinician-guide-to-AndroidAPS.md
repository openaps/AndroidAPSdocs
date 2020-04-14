# Gydytojams – AndroidAPS įvadas ir vadovas

Šis puslapis yra skirtas gydytojams, besidomintiems atvirojo kodo dirbtinės kasos technologijomis, tokiomis kaip AndroidAPS, ir pacientams, norintiems pasidalinti šia informacija su savo gydytojais ir diabetologais.

Šiame vadove yra tam tikros svarbios informacijos apie „pasidaryk pats“ uždarojo tipo ciklą ir konkrečiai kaip veikia AndroidAPS. Norėdami gauti daugiau informacijos apie visas šias temas, skaitykite [išsamią AndroidAPS dokumentaciją internete](http://androidaps.readthedocs.io/en/latest/index.html). Jei turite klausimų, susisiekite su savo pacientu dėl išsamesnės informacijos arba nedvejodami susisiekite su bendruomene. (Jei nesinaudojate socialiniais tinklais (pvz., [Twitter](https://twitter.com/kozakmilos) ar Facebook), galite atsiųsti el. laišką adresu developers@AndroidAPS.org). [ Šioje nuorodoje galite rasti keletą naujausių tyrimų & ir duomenų, susijusių su rezultatais](https://openaps.org/outcomes/).

### „Pasidaryk pats“ uždaro ciklo kūrimo veiksmai:

Norėdami naudoti AndroidAPS, turite atlikti šiuos veiksmus:

* Turėti [ suderinamą insulino pompą](https://androidaps.readthedocs.io/en/latest/EN/Getting-Started/Pump-Choices.html), [suderinamą Android įrenginį](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing) ir [suderinamą NGJ šaltinį](https://androidaps.readthedocs.io/en/latest/EN/index.html#getting-started-with-androidaps).
* [Atsisiųsti AndroidAPS programinį kodą ir „sukurti“ programinę įrangą ](https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Building-APK.html).
* [Konfigūruoti programinę įrangą taip, kad ji "susikalbėtų" su diabeto priežiūros prietaisais, nustatyti asmeninius bei saugos parametrus](https://androidaps.readthedocs.io/en/latest/EN/index.html#configuration).

### Kaip veikia „pasidaryk pats“ uždaras ciklas

Be uždaro ciklo sistemos, pacientas, sergantis cukriniu diabetu, gauna duomenis iš savo pompos ir NGJ, nusprendžia, ką daryti, ir imasi atitinkamų veiksmų.

Sistema daro tą patį: renka duomenis iš pompos, NGJ ir kitos registruojamos informacijos (pvz., per Nightscout). Ji naudojasi šia informacija apskačiuodama, kiek daugiau ar mažiau reikia insulino (nei užprogramuota bazės profilyje). Sistema nustato laikiną bazę, kuri padeda išlaikyti glikemiją stabilią arba grąžina ją į tikslinę zoną.

Jei įrenginys, kuriame veikia AndroidAPS, sugenda arba nutrūksta Bluetooth ryšys su pompa, pasibaigus nustatytai laikinai bazei insulino pompa grįžta į įprastą vartotojo nustatytą programą.

### Kaip duomenys yra renkami:

Naudodamas AndroidAPS, Android įrenginys paleidžia specialią programą skaičiavimams atlikti. Įrenginys Bluetooth ryšiu komunikuoja su insulino pompa. AndroidAPS gali komunikuoti su kitais įrenginiais ir gauti papildomą informaciją iš internetinės debesijos per WiFi ar mobiliųjų duomenų ryšį. Tokiu būdu pacientas, slaugos personalas ir artimieji taip pat gali sekti, ką ir kodėl AndroidAPS daro.

Android įrenginys turi:

* komunikuoti su pompa ir skaityti jos istoriją, kad nustatytų, kiek insulino buvo suleista
* komunikuoti su NGJ (tiesiogiai arba per debesies serverį), kad žinotų, kaip keičiasi glikemija

Kai tik įrenginys surenka duomenis, algoritmas juos analizuoja ir priima sprendimus remdamasis nustatymais (insulino jautrumo faktorius, insulino ir angliavandenių santykis, insulino veikimo trukmė, tikslinė glikemija ir kt.). Jei reikia, duoda komandą pompai, kad koreguotų insulino leidimą.

Čia taip pat kaupiama visa informacija apie bolusus, angliavandenių suvartojimą ir laikinus tikslo / diapazono pokyčius, iš pompos ar Nightscout, ir ji naudojama apskaičiuoti insulino suleidimo kiekį.

### Kaip ji žino, ką daryti?

Atvirojo kodo programinė įranga buvo sukurta siekiant perimti užduotis, kurias anksčiau sergantys cukriniu diabetu atlikdavo rankiniu būdu, ir apskaičiuoti, kiek tiksliai reikia suleisti insulino. Pirmiausia sistema renka duomenis iš visų prijungtų įrenginių ir iš debesies, juos parengia ir atlieka reikalingus skaičiavimus. Remiantis įvairiais scenarijais, prognozuojama artimiausių valandų tikėtina glikemija ir apskaičiuojami būtini insulino dozės patikslinimai, kad glikemija išliktų tikslinėje zonoje arba grąžintų ją ten. Tada ji išsiunčia pompai reikiamus nustatymus. Tada ji vėl nuskaito duomenis iš pompos ir skaičiavimai vėl pradedami iš naujo.

Svarbu turėti aukštos kokybės NGJ duomenis, nes glikemijos duomenys yra svarbiausi įvesties parametrai.

AndroidAPS skaidriai dokumentuoja visus įvestus duomenis, gautą rekomendaciją ir priemones, kurių buvo imtasi. Taigi į klausimą: "Kodėl tai daro X?" bet kuriuo metu galite lengvai atsakyti peržiūrėdami žurnalo įrašus.

### AndroidAPS algoritmo sprendimų priėmimo pavyzdžiai:

AndroidAPS naudoja tą patį pagrindinį algoritmą ir funkcionalumą kaip ir OpenAPS. Remdamasis nustatymais ir esama situacija, algoritmas pateikia keletą prognozių, pagal kurias apskaičiuojami skirtingi scenarijai, kas gali nutikti ateityje. Nightscout jie rodomi kaip violetinės linijos. AndroidAPS naudoja skirtingas spalvas, kad atskirtų šias [ prognozuojamas kreives](../Installing-AndroidAPS/Releasenotes#overview-tab). Žurnalo failai gali būti naudojami norint atsekti, kuris iš šių įvairių numatymų buvo naudojamas konkrečiu laikotarpiu, kad būtų apskaičiuotos būtinos priemonės.

#### Čia yra keletas prognozių pavyzdžių ir kaip jos gali skirtis:

![Violetinių prognozės kreivių pavyzdžiai](../images/Prediction_lines.jpg)

#### Šie pavyzdžiai rodo skirtingus laikotarpius ir kaip jie veikia insulino leidimą:

#### 1 scenarijus - Nulinė bazė saugumo sumetimais

Nors glikemija per trumpą laiką didėja, prognozuojama, kad vidutiniu laikotarpiu ji smarkiai sumažės. Tiesą sakant, prognozuojama, kad ji ne tik nukris žemiau tikslinės zonos, *bet ir* žemiau saugios ribos. Saugumo sumetimais ir siekiant išvengti hipoglikemijos, AndroidAPS nustato vadinamąją nulinę bazę (laikiną valandinę 0% bazę), iki kol tikėtina glikemijos vertė viršija saugos slenkstį bet kuriuo laikotarpiu.

![1 scenarijus](../images/Dosing_scenario_1.jpg)

#### 2 scenarijus - Nulinė bazė saugumo sumetimais

In this example, BG is predicted to go low in the near-term, but is predicted to eventually be above target. However, because the near-term low is actually below the safety threshold, AndroidAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Dosing scenario 2](../images/Dosing_scenario_2.jpg)

#### Scenario 3 - More insulin needed

In this example, a near-term prediction shows a dip below target. However, it is not predicted to be below the safety threshold. The eventual BG is above target. Therefore, AndroidAPS will restrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). It will then assess adding insulin to bring the lowest level of the eventual predicted BG down to target, once it is safe to do so. *(Depending on settings and the amount and timing of insulin required, this insulin may be delivered via temp basals or SMB's (super micro boluses) ).*

![Dosing scenario 3](../images/Dosing_scenario_3.jpg)

#### Scenario 4 - Low temping for safety

In this example, AndroidAPS sees that BG is spiking well above target. However, due to the timing of insulin, there is already enough insulin in the body to bring BG into range eventually. In fact, BG is predicted to eventually be below target. Therefore, AndroidAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. Although BG is high/rising, a low temporary basal rate is likely here.

![Dosing scenario 4](../images/Dosing_scenario_4.jpg)

### Optimizing settings and making changes

As a clinician who may not have experience with AndroidAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. We have multiple tools and [guides](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

The most important thing for patients to do is make one change at a time, and observe the impact for 2-3 days before choosing to change or modify another setting (unless it’s obviously a bad change that makes things worse, in which case they should revert immediately to the previous setting). The human tendency is to turn all the knobs and change everything at once; but if someone does so, then they may end up with further sub-optimal settings for the future, and find it hard to get back to a known good state.

One of the most powerful tools for making settings changes is an automated calculation tool for basal rates, ISF, and carb ratio. This is called “[Autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. It is designed to be run independently/manually, and allow the data to guide you or your patient in making incremental changes to settings. It is best practice in the community to run (or review) Autotune reports first, prior to attempting to make manual adjustments to settings. With AndroidAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AndroidAPS as well. As these parameters are a prerequesite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adustment of these parameters would be the natural link to the clinician.

Additionally, human behavior (learned from manual diabetes mode) often influences outcomes, even with a DIY closed loop. For example, if BG is predicted to go low and AndroidAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). However, in many cases, someone may choose to treat with many more carbs (e.g. sticking to the 15 rule), which will cause a resulting faster spike both from the extra glucose and because insulin had been reduced in the timeframe leading up to the low.

### OpenAPS

**This guide was adopted from [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS is a system developed to be run on a small portable computer (generally referred to as the "rig"). AndroidAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AndroidAPS, with the main difference being the hardware platform where each peace of software is run.

### Summary

This is meant to be a high-level overview of how AndroidAPS works. For more details, ask your patient, reach out to the community, or read the full AndroidAPS documentation available online.

Additional recommended reading:

* The [full AndroidAPS documentation](http://androidaps.readthedocs.io/en/latest/EN/index.html)
* The [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), which explains how OpenAPS is designed for safety: https://openaps.org/reference-design/
* The [full OpenAPS documentation](http://openaps.readthedocs.io/en/latest/index.html) 
  * More [details on OpenAPS calculations](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)