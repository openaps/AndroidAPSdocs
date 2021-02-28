# Konfigūracija

Priklausomai nuo jūsų nustatymų, konfigūratorių galite atidaryti naudodami skirtuką ekrano viršuje arba per trijų juostelių meniu.

![Atidaryti konfigūratorių](../images/ConfBuild_Open.png)

Konfigūratorius yra skirtukas, kuriame galite įjungti ir atjungti programos modulius. Kairėje (A) esantys pasirinkimo laukeliai suaktyvina pasirinktą funkciją, dešinėje (C) esantys pasirinkimo laukeliai nustato, ar funkcija rodoma kaip skirtukas (E), ar ne. Tuo atveju, kai reikalingas langelis neaktyvuotas, funkciją galite pasiekti iš išskleidžiamojo meniu (D), esančio viršutiniame kairiajame ekrano kampe.

Jei modulyje yra papildomų parametrų, galite spustelėti krumpliaratį (B), kuris nukreipia jus į nustatymus.

** Pirmoji konfigūracija: ** Pradedant AAPS 2.0 versija, AndroidAPS sąrankos procesą kontroliuoja sąrankos vedlys. Norėdami jį pradėti, spustelėkite trijų taškų meniu viršutiniame dešiniajame meniu ekrano kampe (F) ir pasirinkite „Sąrankos vedlys“.

![Konfigūratoriaus parinktys ir krumpliaratis](../images/ConfBuild_ConfigBuilder.png)

## Skirtukai arba trijų linijų meniu

Pažymėdami langelį po akies simboliu jūs nuspręsite, kaip atidaryti atitinkamą programos skyrių.

![Skirtukai arba trijų linijų meniu](../images/ConfBuild_TabOrHH.png)

## Profilis

Pasirinkite bazės profilį, kurį norite naudoti. Papildomos informacijos apie diegimą rasite puslapyje [ Profiliai ](../Usage/Profiles.md).

### Vietinis profilis (rekomenduojama)

Vietinis profilis yra pagrindinis profilis, rankiniu būdu įvestas į telefoną. Pasirinkus vietinį profilį, pasirodo naujas skirtukas, kuriame prireikus galite pakeisti iš pompos nuskaitytus profilio duomenis. Kito prijungimo prie profilio metu jie bus įrašyti į pompos profilį Nr. 1. Mes rekomenduojame šį profilį, nes jis nepriklauso nuo jūsų interneto ryšio.

Jūsų vietos profiliai yra [eksportuotų nustatymų](../Usage/ExportImportSettings.rst) dalis. Todėl įsitikinkite, kad turite atsarginę kopiją saugioje vietoje.

![Vietinio profilio nustatymai](../images/LocalProfile_Settings.png)

Mygtukai:

* žalias pliusas: pridėti
* raudonas X: ištrinti
* mėlyna rodyklė: dubliuoti

Jei atliekate pakeitimus savo profilį, įsitikinkite, kad redaguojate teisingą profilį. Perjungiant į profilio skirtuką, ne visada rodomas šiuo metu naudojamas profilis. Pavyzdžiui, jei jūs Jei pakeitėte profilį per pradinį ekraną, profilio skirtuke gali būti rodomas kitas profilis.

#### Profilių perjungimo klonavimas

Per profilio perjungimo funkciją galite lengvai sukurti naują vietinį profilį. Laiko postūmis ir profilio pasikeitimo procentas bus pritaikyti naujame vietiniame profilyje.

1. Eikite į Terapijos skirtuką.
2. Pasirinkite "Profilio perjungimas".
3. Paspauskite "Klonuoti".
4. Naują vietinį profilį galite redaguoti skirtuke „Vietinis profilis“ (VP) arba per trijų linijų meniu.

![Profilių perjungimo klonavimas](../images/LocalProfile_ClonePS.png)

Jei norite perjungti iš Nightscout profilio į vietinį profilį, tiesiog atlikite NS profilio pakeitimą ir klonuokite profilio perjungimą, kaip aprašyta aukščiau.

#### Vietinių profilių įkėlimas į Nightscout

Vietiniai profiliai taip pat gali būti įkelti į Nightscout. Nustatymai gali būti rasti [NSClient nustatymai](../Configuration/Preferences#nsclient).

![Įkelti vietinį profilį į NS](../images/LocalProfile_UploadNS2.png)

Privalumai:

* norint pakeisti profilio parametrus, nereikia interneto ryšio
* profilio pakeitimai gali būti atliekami tiesiogiai telefone
* naują profilį galite sukurti per profilio perjungimą
* vietiniai profiliai gali būti įkelti į Nightscout

Trūkumas:

* nėra

### Profilio pagalbininkas

Profilio pagalbininkas siūlo dvi funkcijas:

1. Rasti profilį vaikams
2. Palyginti du profilius arba profilio pakeitimus, kad būtų galima klonuoti naują profilį

Detalės yra paaiškintos atskirame [profilio pagalbininko puslapyje](../Configuration/profilehelper.rst).

### NS profilis

NS Profilis naudoja profilius, kuriuos išsaugojote savo Nightscout svetainėje (https://[yournightscoutsiteaddress]/profilis). Jei norite pakeisti aktyvų profilį, galite naudoti [ Profilio perjungimas ](../Usage/Profiles.md). Ši funkcija sukurtą profilį užrašo pompoje, jei kiltų ryšio problemų su AndroidAPS. Tai leidžia jums lengvai sukurti kelis profilius Nightscout (pvz., darbe, namuose, sporto, švenčių dienomis ir pan.). Netrukus, paspaudus mygtuką „Išsaugoti“, jie bus perkelti į AAPS, jei jūsų išmanusis telefonas prijungtas prie interneto. Net be interneto ryšio ar be Nightscout ryšio, NS profiliai yra pasiekiami AAPS po sinchronizacijos.

Norėdami suaktyvinti Nightscout profilį, pasirinkite [ Profilio keitimas](../Getting-Started/Screenshots.md#current-profile). AAPS will write the selected profile into the pump after the profile change, so that it is available without AAPS in an emergency and continues to run.

Privalumai:

* keli profiliai
* lengva redaguoti per kompiuterį arba planšetę

Trūkumai:

* profilio parametrų pakeisti vietoje negalima
* profilio pakeitimai negali būti atliekami tiesiogiai telefone

## Insulinas

![Insulin type](../images/ConfBuild_Insulin.png)

* Pasirinkite insulino veikimo kreivės tipą.
* The options 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' and 'Free-Peak Oref' all have an exponential shape. More information is listed in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* The curves will vary based on the DIA and the time to peak.
    
    * PURPLE line shows how much **insulin remains** after it has been injected as it decays with time.
    * BLUE line shows **how active** insulin is.

### IVT

* IVT nėra vienoda visiems. Todėl turite nustatyti ją patys. 
* Bet ji turi būti bent 5 valandos.
* For a lot of people using ultra-rapid insulins like Fiasp there is practically no noticeable effect after 3-4 hours any more, even if 0.0xx units are available as a rule then. Insulino likutis gali būti jaučiamas, pavyzdžiui, sporto metu. Todėl AndroidAPS naudoja mažiausiai 5 valandų insulino veikimo trukmę.
* Daugiau skaitykite Insulino profiliai skyriaus [šiame](../Getting-Started/Screenshots#insulin-profile) puslapyje. 

### Insulin type differences

* For 'Rapid-Acting', 'Ultra-Rapid' and 'Lyumjev' the DIA is the only variable you can adjust by yourself, the time to peak is fixed. 
* „Be piko“ leidžia konfigūruoti ir insulino veikimo trukmę, ir piko laiką. Ši parinktis skirta patyrusiems vartotojams, žinantiems šių nustatymų poveikį. 
* [Insulino kreivės grafikas](../Getting-Started/Screenshots#insulin-profile) padeda suprasti skirtingas kreives. 
* Jį galite pamatyti skirtuke, jei jį pažymėjote varnele konfigūratoriuje arba pasirinkdami iš išskleidžiamojo meniu kairėje.

#### Greito veikimo Oref

* rekomenduojama Humalog, Novolog ir Novorapid insulinams
* IVT = bent 5.0 val.
* Maks. pikas = 75 minutės po injekcijos (fiksuotas, nekeičiamas)

#### Staigaus veikimo Oref

* rekomenduojama FIASP insulinui
* IVT = bent 5.0 val.
* Maks. pikas = 55 minutės po injekcijos (fiksuotas, nekeičiamas)

#### Lyumjev

* special insulin profile for Lyumjev
* IVT = bent 5.0 val.
* Maks. pikas = 45 minutės po injekcijos (fiksuotas, nekeičiamas)

#### Oref be piko

* „0ref be piko“ profilyje galite patys įvesti piko laiką.
* Insulino veikimo trukmė automatiškai nustatoma 5 valandoms, jei profilyje nenustatoma didesnė vertė.
* Šis insulino profilis yra rekomenduojamas, jei naudojamas nepalaikomas insulino tipas arba skirtingų insulinų mišiniai.

## Glikemijos šaltinis

Pasirinkite pagrindinės glikemijos duomenų šaltinį - daugiau informacijos apie nustatymus ieškokite puslapyje [ Glikemijos šaltinis ](BG-Source.rst).

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient KG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - palaikoma versija 4.15.57 ir naujesnė
* [ Dexcom programėlė (modifikuota) ](https://github.com/dexcomapp/dexcomapp/) - pasirinkite „Siųsti KG duomenis į xDrip+“, jei norite gauti pranešimus iš xDrip+.
    
    ![Glikemijos šaltinis konfigūratoriuje](../images/ConfBuild_BGSource.png)

* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)

* [Tomato programėlė](http://tomato.cool/) MiaoMiao įrenginiui
* Generuoja atsitiktinių KG duomenis (demonstracinis režimas)

## Pompa

Pasirinkite pompą, kurią naudojate.

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Korean (DanaR, skirta Korėjos rinkai)
* DanaRv2 (DanaR su neoficialia atnaujinta programine įranga)
* [Dana R](DanaRS-Insulin-Pump.md)
* [Accu-Chek Insight](Accu-Chek-Insight-Pump.md)
* [Accu-Chek Combo](Accu-Chek-Combo-Pump.md) (reikia įdiegti ruffy programą)
* [Medtronic](MedtronicPump.md)
* Daugkartinės injekcijos (AAPS pateikia insulino tiekimo patarimus naudojant insulino švirkštimo priemones)
* Virtuali pompa (atviras ciklas pompai, kuri dar nėra palaikoma - AAPS teikia tik pasiūlymus)

Naudojantis Dana pompa, eikite į ** Išplėstiniai nustatymai **, kad suaktyvintumėte BT Watchdog, jei tai reikalinga. Jei prisijungti prie pompos neįmanoma, jis vienai sekundei išjungia Bluetooth. Tai padeda kai kuriuose telefonuose, kur užstringa Bluetooth modulis.

[Dana RS pompos slaptažodis](../Configuration/DanaRS-Insulin-Pump.md) turi būti įvestas teisingai. Slaptažodis nebuvo tikrinamas ankstesnėse versijose.

## Jautrumo nustatymas

Pasirinkite jautrumo nustatymo tipą. Daugiau informacijos apie skirtingas variacijas prašome [skaityti čia](../Configuration/Sensitivity-detection-and-COB.md). Algoritmas analizuos duomenų istoriją ir koreguos, jei atpažins, kad į insuliną reaguojate jautriau (arba, atvirkščiai, su mažesniu jautrumu) nei įprastai. Daugiau apie Jautrumo algoritmą galite perskaityti [OpenAPS dokumentacijoje](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

Pagrindiniame puslapyje galite peržiūrėti jautrumo kreivę, pasirinkdami laukelį Jautrumas. Jis atrodo kaip balta linija. Dėmesio, turite būti [Tiksle 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens), kad leistumėte Jautrumo aptikimui/[Autosens](../Usage/Open-APS-features#autosens) automatiškai koreguoti insulino kiekio suleidimą. Kol dar nepasiekėte šio tikslo, Autosens procentas / kreivė rodoma tik informacijai. AAPS neatlieka jokių pakeitimų.

### Angliavandenių įsisavinimo parametrai

Jei naudojate „Oref1“ su SMB, turite nustatyti ** min_5m_ carbimpact** reikšmę į 8. Ši vertė naudojama tik tuo atveju, jei NGJ vertės negaunamos arba fizinis aktyvumas kompensuoja padidėjusį cukraus kiekį kraujyje, kurį AAPS paprastai naudoja angliavandenių skaidymui apskaičiuoti. Tais atvejais, kai [angliavandenių absorbcijos](../Usage/COB-calculation.rst) negalima dinamiškai apskaičiuoti pagal gliukozės kiekį kraujyje, naudojama ši numatytoji absorbcijos reikšmė. Iš esmės tai yra saugiklis.

## APS

Pasirinkite norimą APS algoritmą terapijos koregavimui. Išsamią informaciją apie pasirinktą algoritmą galite rasti skirtuke OpenAPS (OAPS).

* OpenAPS AMA (advanced meal assist, state of the algorithm in 2017) More detail about OpenAPS AMA can be found in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Paprasčiau tariant, nauda yra tokia, kad, kai susileidžiate bolusą maistui, sistema gali greičiau įjungti aukštą tikslą, JEI patikimai suvesite angliavandenius.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users) Note you need to be in [Objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Ciklas

* Perjungimas tarp Atviro ciklo, Uždaro ciklo ir Žemos glikemijos stabdymo (ŽGS).

![Konfigūratorius - ciklo režimas](../images/ConfigBuilder_LoopLGS.png)

### Atviras Ciklas

* AAPS nuolat vertina visus turimus duomenis (AIO, AAO, glikemijos reikšmė) ir, jei reikia, teikia patarimus, kaip pritaikyti terapiją. 
* Pasiūlymai nėra vykdomi automatiškai (kaip uždarame cikle), bet turi būti rankiniu būdu įvedami į pompą. Jei naudojate suderinamą pompą (Dana R / RS arba Accu Chek Combo), tai taip pat galima padaryti naudojant mygtuką AndroidAPS. 
* Šis nustatymas skirtas susipažinti su AndroidAPS arba nepalaikomoms pompoms.

### Uždaras Ciklas

* AAPS nuolat vertina visus turimus duomenis (AIO, AAO, glikemijos reikšmes) ir automatiškai koreguoja terapiją pagal poreikį (t.y. be jūsų tolesnio įsikišimo), kad būtų pasiektas nustatytas tikslo diapazonas arba tikslinė vertė (boluso įvedimas, laikinos bazės nustatymas, insulino sustabdymas siekiant išvengti hipoglikemijos ir t.t.). 
* Uždaras ciklas veikia atsižvelgiant į daugybę saugumo ribų, kurias galite nustatyti atskirai.
* Uždaras ciklas yra galimas, jei esate ne mažiau kaip [6-ame tiksle](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) ir naudojate palaikomą pompą.
* Pastaba: Uždaro ciklo režime rekomenduojama vietoj tikslinio intervalo naudoti vieną tikslą (t. y. 5,5 mmol arba 100 mg/dl vietoje 5,0-7,0 mmol arba 90-125 mg/dl).

### Sustabdymas esant žemai gliukozei (ŽGS)

* maxAIO yra lygus nuliui
* Tai reiškia, kad, jei gliukozės kiekis kraujyje mažėja, AAPS gali sumažinti valandinę bazę.
* Bet jei gliukozės kiekis kraujyje didėja, jokių automatinių korekcijų nebus padaryta. Jūsų valandinė bazė išliks tokia pati kaip ir Jūsų pasirinktame profilyje.
* Tik jei valandinė bazė yra neigiama (dėl ankstesnio sustabdymo esant žemai gliukozei), papildomas insulinas bus suleistas, siekiant sumažinti glikemiją.

### Minimalaus pokyčio užklausa

* Naudodami atvirą ciklą, gausite pranešimus kiekvieną kartą, kai AAPS rekomenduoja koreguoti valandinę bazę. 
* Norėdami sumažinti pranešimų skaičių, galite naudoti platesnį KG tikslinį intervalą arba padidinti minimalios užklausos procentus.
* Jie apibrėžia santykinį pokytį, kurio reikia, kad būtų galima pateikti pranešimą.

## Tikslai (mokymosi programa)

AndroidAPS turi mokymosi programą (vadinamą Tikslais), kurią turite įgyvendinti palaipsniui. Tai turėtų jums padėti saugiai sukurti uždaro ciklo sistemą. Tai garantuoja, kad jūs viską nustatėte teisingai ir suprantate, kaip sistema tiksliai veikia. Tai yra vienintelis būdas suprasti, kad galite pasitikėti sistema.

Turėtumėte reguliariai[eksportuoti savo nustatymus](../Usage/ExportImportSettings.rst) (įskaitant pažangą tiksluose). Ateityje, jei jums reikės pakeisti išmanųjį telefoną (nusipirksite naują, sugadinsite ir pan.), galėsite tiesiog importuoti šiuos parametrus.

Norėdami rasti daugiau informacijos, žiūrėkite puslapį [ Tikslai ](../Usage/Objectives.rst).

## Terapija

Skirtuke Terapija (Terapija) rodomos terapijos, kurios buvo įkeltos į Nightscout. Jei norite taisyti ar ištrinti įrašą (pavyzdžiui, suvalgėte mažiau angliavandenių nei tikėjotės), pasirinkite Trinti, o [pagrindinio ekrano AV mygtuku](../Getting-Started/Screenshots#carb-correction) įveskite naują reikšmę (jei reikia, pakeiskite laiką).

## Bendrieji

### Apžvalga

Parodo dabartinę ciklo būseną ir dažniausiai naudojamų veiksmų mygtukus (išsamiau žr. [Pradinis ekranas](../Getting-Started/Screenshots.md)). Prieiga prie parametrų - per krumpliaračio piktogramą.

#### Laikyti ekraną įjungtą

Parinktis „Neišjungti ekrano“ privers Android nuolat laikyti įjungtą ekraną. Tai naudinga pristatymams ir kt. Bet sunaudoja daug baterijos energijos. Todėl rekomenduojama išmanųjį telefoną prijungti prie įkroviklio laido.

#### Mygtukai

Nustatyti, kurie mygtukai rodomi pradiniame ekrane.

* Terapija
* Skaičiuotuvas
* Insulinas
* Angliavandeniai
* NGJ (atsidaro xDrip+)
* Kalibravimas

Taip pat galite nustatyti fiksuotas insulino ir angliavandenių kiekių padidinimo vertes ir nuspręsti, ar terapijos dialogo lange rodyti lauką pastaboms.

#### Greitojo patarėjo nustatymai

Čia galite sukurti mygtuką konkrečiam standartiniam maistui (angliavandenių kiekis ir boluso skaičiavimo metodas), kuris bus rodomas pagrindiniame ekrane. Tai labai praverčia, jei jūs dažnai valgo tą patį. Jei sukursite keletą standartinių patiekalų ir jiems nustatysite skirtingą laiką, priklausomai nuo dienos laiko pagrindiniame ekrane visada turėsite atitinkamą standartinio patiekalo mygtuką.

Pastaba: mygtukas nebus rodomas už nustatytų laikotarpių ribų. Jis nebus rodomas ir tuo atveju, jei yra pakankamai insulino (AIO) nurodytam angliavandenių kiekiui padengti.

![Greitojo patarėjo mygtukas](../images/ConfBuild_QuickWizard.png)

#### Numatyti Laikini Tikslai

Pasirinkite numatytuosius laikinus tikslus (trukmė ir reikšmė). Iš anksto nustatytos reikšmės:

* eating soon: target 72 mg/dl / 4.0 mmol/l, duration 45 min
* activity: target 140 mg/dl / 7.8 mmol/l, duration 90 min
* hypo: target 125 mg/dl / 6.9 mmol/l, duration 45 min

#### Standartiniai insulino kiekiai kateterio/kaniulės užpildymui

Choose the default amounts of the three buttons in fill/prime dialogue, depending on the length of your catheter.

#### Range of visualization

Choose the high and low marks for the BG-graph on AndroidAPS overview and smart watch. It is only the visualization, not the target range for your BG. Example: 70 - 180 mg/dl or 3.9 - 10 mmol/l

#### Naudoti sutrumpintus skirtukų pavadinimus

Choose wether the tab titles in AndroidAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### Show notes field in treatment dialogs

Choose if you want to have a notes field when entering treatments or not.

#### Būklės indikatoriai

Choose if you want to have [status lights](../Configuration/Preferences#status-lights) on overview for canula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Critical age will show up in red.

#### Advanced settings

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percenteage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Veiksmai

* Some buttons to quickly access common features.
* See [AAPS screenshots](../Getting-Started/Screenshots#action-tab) for details.

### Automatizavimas

User defined automation tasks ('if-then-else'). Please [read on here](../Usage/Automation.rst).

### SMS komunikatorius

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Food

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

Pavyzdžiui, jei norite suleisti boliusą, tuomet laikrodžio nustatymuose turėtumėte įjungti „Valdymas iš laikrodžio“.

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### NSClient

* Setup sync of your AndroidAPS data with Nightscout.
* Settings in [preferences](../Configuration/Preferences#nsclient) can be opened by clicking the cog wheel.

### Maintenance

Email and number of logs to be send. Normally no change necessary.

### Konfigūracija

Use tab for config builder instead of hamburger menu.