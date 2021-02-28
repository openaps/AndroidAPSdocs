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

* Netrukus valgysiu: tikslas 4.0 mmol/l (72 mg/dl), trukmė 45 min
* Aktyvumas: tikslas 7.8 mmol/l (140 mg/dl), trukmė 90 min
* Hipo: tikslas 6.9 mmol/l (125 mg/dl), trukmė 45 min

#### Standartiniai insulino kiekiai kateterio/kaniulės užpildymui

Pasirinkite numatytuosius kiekius iš trijų mygtukų, užpildymo/pirminio užpildymo lange, priklausomai nuo jūsų kateterio ilgio.

#### Vizualizacijos diapazonas

Pasirinkite aukštos ir žemos glikemijos ribas grafike. Jos bus matomos AndroidAPS apžvalgoje ir išmaniajame laikrodyje. Tai tik vizualizacija, o ne tikslinės jūsų glikemijos ribos. Pavyzdžiui: 3,9-10 mmol/l arba 70-180 mg/dl

#### Naudoti sutrumpintus skirtukų pavadinimus

Pasirinkite ar skirtukų pavadinimai AndroidAPS yra ilgi (pvz. VEIKSMAI, VIETINIS PROFILIS, AUTOMATIZAVIMAS) arba trumpi (pvz., VEIKS, VP, AUTO)

#### Rodyti pastabų laukelį terapijos dialoguose

Pasirinkite, ar norite matyti pastabas, kai įvedate terapijas arba ne.

#### Būklės indikatoriai

Pasirinkite, ar norite matyti [būsenos indikatorius](../Configuration/Preferences#status-lights) kaniulės, insulino, sensoriaus, baterijos amžiui, rezervuaro ar baterijos lygiui. Pasiekus numatytą lygį, būsenos indikatorius taps geltonas. Kritinis lygis bus rodomas raudona spalva.

#### Papildomi nustatymai

**Suleisti šią dalį boluso, apskaičiuoto boluso patarėjo**: Kai naudojamasi SMB, dauguma žmonių nesusileidžia 100% reikiamo insulino, o tik dalį jo (pvz.: 75 %) ir leidžia SMB su NDM (nedeklaruotas maitas) atlikti likusį darbą. Šiuo atveju, galite pasirinkti numatytąją procentinę reikšmę, į kurią boluso patarėjas turėtų atsižvelgti. Jei šis nustatymas yra 75%, o jūs turite susileisti 10vv, boluso patarėjas jums pasiūlys iš karto susileisti tik 7,5 vienetus.

**Įjungti Superboluso funkciją skaičiuoklėje** (Tai skiriasi nuo *super mikro boluso SMB*!): Naudokite atsargiai ir neįjunkite, kol nesuprantate, kas tai yra. Esmė tokia, kad bazinis insulinas pridedamas prie boluso kitoms dviem valandoms, o bazė tampa nulinė dviem valandoms. **AAPS ciklo funkcijos bus išjungtos - naudokite atsargiai! Jei naudojate SMB, uždaro ciklo funkcijos bus išjungtos tokiam laikui, kuris nustatomas pagal jūsų nustatymus, pateiktus [„SMB atitinka valandinės bazės insulino kiekį, kuris gaunamas ne daugiau, kaip per"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to). Jei nenaudojate SMB, ciklas bus išjungtas dviem valandoms. **Norėdami gauti daugiau informacijos apie Superbolus, skaitykite [čia](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Veiksmai

* Mygtukai greitesniam pagrindinių funkcijų paleidimui.
* See [AAPS screenshots](../Getting-Started/Screenshots#action-tab) for details.

### Automatizavimas

Vartotojo apibrėžtos automatizavimo užduotys ("jei-tada-kitaip"). Prašome [skaityti čia](../Usage/Automation.rst).

### SMS komunikatorius

Leidžia nuotoliniu būdu valdyti kai kurias AndroidAPS funkcijas SMS žinutėmis, daugiau informacijos apie konfigūraciją žr. [SMS komandos](../Children/SMS-Commands.rst).

### Maistas

Parodo iš anksto nustatytus maisto aprašus iš Nightscout duomenų bazės, daugiau informacijos apie parinktis žr. [Nightscout](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods).

Pastaba: įrašų negalima naudoti AndroidAPS skaičiuotuve. (Tik peržiūra)

### Išmanieji laikrodžiai

Android Wear laikrodyje galima peržiūrėti AAPS duomenis ir valdyti kai kurias funkcijas (žr. [Laikrodžiai](../Configuration/Watchfaces.md)). Nustatymuose (krumpliaračio piktograma) galite nustatyti kintamuosius, į kuriuos reikia atsižvelgti apskaičiuojant bolusą naudojant laikrodį (pavyzdžiui, 15 min. tendencija, aktyvūs angliavandeniai AAO...).

Pavyzdžiui, jei norite suleisti boliusą, tuomet laikrodžio nustatymuose turėtumėte įjungti „Valdymas iš laikrodžio“.

![Išmaniojo laikrodžio nustatymai](../images/ConfBuild_Wear.png)

Naudodamiesi skirtuku „Wear“ arba hamburgerio meniu (ekrano viršutiniame kairiajame kampe, jei skirtukas nerodomas), galite

* Pakartotinai siųsti visus duomenis. Gali būti naudinga, jei laikrodis nebuvo prijungtas kurį laiką ir norite perduoti informaciją į laikrodį.
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