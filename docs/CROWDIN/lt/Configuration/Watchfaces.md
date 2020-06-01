# AAPS išmaniajame laikrodyje su Wear OS

Galite instaliuoti AndroidAPS programėlę savo **Wear OS pagrindu** veikiančiame laikrodyje. AAPS versija laikrodžiui leidžia:

* **pateikti duomenis jūsų laikrodyje**: naudojant [pasirinktinį ciferblatą](#aaps-watchfaces) arba standartiniame ekrane, naudojant [ekrano elementus](#complications)
* **valdyti AAPS telefone**: suleisti bolusą, nustatyti laikiną tikslą ir pan. 

### Prieš perkant laikrodį...

* Kai kurioms funkcijoms, pavyzdžiui, *ekrano elementams*, reikia Wear OS 2.0 versijos " arba naujesnės
* "Google" pervadino * Android Wear 1.x* į *Wear OS* iš versijos 2.x, todėl, jei nurodoma *Android Wear*, tai gali būti senesnė 1.x sistemos versija
* Jei išmaniojo laikrodžio aprašyme nurodomas tik suderinamumas su *Android* ir *iOS* - tai **ne**reiškia, kad jis veikia su *Wear OS* - tai gali būti šiek tiek kitos rūšies gamintojo specifinė OS **, kuri nėra suderinama su AAPS!**
* Patikrinkite [sąrašą išbandytų telefonų ir laikrodžių](../Getting-Started/Phones#list-of-tested-phones) ir [paklauskite bendruomenės](../Where-To-Go-For-Help/Connect-with-other-users.md), jei kyla abejonių ar jūsų laikrodis yra palaikomas

### AAPS Wear OS versijos sukūrimas

Norint sukurti AAPS Wear OS versiją, jums reikia pasirinkti variantą "fullRelease", kai [kuriate APK](../Installing-AndroidAPS/Building-APK.md) (arba versiją "pumpRelease", kuri leis jums tiesiog nuotoliniu būdu valdyti pompą be ciklo).

Įsitikinkite, kad telefono ir laikrodžio AAPS versijos yra pasirašytos tais pačiais raktais!

Laikrodžio APK versija turi būti įdiegta laikrodyje tuo pačiu būdu, kaip ir telefono APK telefone. Tai gali pareikalauti įjungti *kūrėjo režimą* laikrodyje ir įkelti bei įdiegti APK laikrodyje su `adb install wear-full-release.apk`

Naudojant laikrodžio AAPS versiją, visada atnaujinkite ją kartu su telefono programėlės versija - paikykite jų versijas sinchroniškai.

### Nustatymas telefone

AndroidAPS konfigūratoriuje turite [aktyvuoti Wear įskiepį](../Configuration/Config-Builder#wear).

## AAPS kontrolė laikrodyje

AndroidAPS galima *valdyti* naudojant Android Wear išmanųjį laikrodį. Pavyzdžiui, jei norite suleisti boliusą, tuomet laikrodžio nustatymuose turėtumėte įjungti „Valdymas iš laikrodžio“.

Iš laikrodžio galite paleisti šias funkcijas:

* nustatyti laikiną tikslą
* naudoti boluso skaičiuoklę (skaičiavimo kintamieji gali būti apibrėžti telefono [nustatymuose](../Configuration/Config-Builder#wear))
* administruoti iAV
* administruoti bolusus (insulinas + angliavandeniai)
* nustatyti parametrus laikrodyje
* būsena 
    * patikrinti pompos būseną
    * patikrinti ciklo būseną
    * patikrinti ir pakeisti profilį, CPP (Cirkadinio procento profilis = laiko postūmis + procentinė dalis)
    * parodyti TDD (Bendra paros dozė = bolusas + bazė per dieną)

## AAPS ciferblatai

Yra keletas skaitmeninių ciferblatų, kurie rodo vidutinį delta pokytį, aktyvų insuliną IOB, esamą laikiną bazinę TBR ir bazinį profilį bei CGM duomenų grafiką.

Įsitikinkite, kad AndroidAPS pranešimai nėra užblokuoti laikrodyje. Veiksmo patvirtinimas (pavyzdžiui, bolusas, laikini tikslai) įvyksta per pranešimus, kuriuos reikia patempti į šoną ir paspausti varnelę.

Norėdami greičiau patekti į AAPS meniu, du kartus spustelėkite ant glikemijos. Dukart spustelėję glikemijos kreivę, galite pakeisti laiko skalę.

## Galimi ciferblatai

![Galimi ciferblatai](../images/Watchface_Types.png)

## AAPSv2 laikrodžio ekranas - paaiškinimai

![AndroidAPSv2 laikrodžio ekrano informacija](../images/Watchface_Legend.png)

A - laikas nuo paskutinės ciklo veiklos

B - CGM duomenys

C - minutės nuo paskutinių CGM duomenų

D - pokytis, palyginti su praėjusiais CGM duomenimis (mmol arba mg/dl),

E - vidutinis CGM duomenų pokytis per pastarąsias 15 minučių

F - telefono baterija

G - valandinė bazė (parodyta vv/h standartiniu suleidimu ir % per laikiną bazę TBR)

H - kraujo glikemijos sąveika -> tikėtinas glikemijos pokytis, pagrįstas vien aktyviu insulinu.

I - Angliavandeniai (aktyvūs angliavandeniai | e-angliavandeniai ateityje)

J - aktyvus insulinas (iš boluso | iš bazės)

## Pasiekti pagrindinį AAPS meniu

Norėdami atidaryti pagrindinį AAPS meniu, galite naudoti šias parinktis:

* dukart bakstelėkite į savo KG reikšmę
* pasirinkite AAPS piktogramą laikrodžio programų meniu
* bakstelėkite į AAPS funkciją (jei sukonfigūruota meniu)

## Nustatymai (išmaniajame laikrodyje)

Norint pasiekti laikrodžio ekrano nustatymus, įeikite į AAPS pagrindinį meniu, paslinkite aukštyn ir pasirinkite "Nustatymai".

Užpildyta žvaigždutė reiškia, kad būsena yra aktyvi (**Įjungta**), o tuščiavidurės žvaigžutės piktograma rodo, kad nustatymas yra išjungtas (**Išjungta**):

![Nustatymai įjung/išjung](../images/Watchface_Settings_On_Off.png)

### AAPS lydinčios programėlės parametrai

* **Vibruoti leidžiant bolusą** (numatytasis `Įjungta`):
* **Vienetų Veiksmai** (numatytasis `mg/dl`): jei **Įjungta** vienetų veiksmai yra `mg/dl`, jei **Išjungta** vienetai yra `mmol/l`. Naudojama nustatant LT iš laikrodžio.

### Laikrodžio ekrano nustatymai

* **Rodyti datą** (numatyta - `Išjungta`): pastaba, data matoma ne visų laikrodžių ekranuose
* **Rodyti AIO** (numatyta - `Įjungta`): rodyti arba ne AIO reikšmes (nustatyti išsamias reikšmes galite AAPS parametruose)
* **Rodyti AIO** (numatyta `Įjungta`): Rodyti arba ne AIO
* **Rodyti delta** (numatyta -` Įjungta`): rodyti arba ne KG reikšmių kitimus per paskutines 5 minutes
* **Rodyti AVGdelta** (numatyta - `Įjungta`): rodyti arba ne vidutinius KG reikšmių kitimus per paskutines 15 minučių
* **Rodyti telefono bateriją** (numatyta `Įjungta`): Telefono baterija %. Raudona, jei mažiau nei 30% .
* **Rodyti įrenginio bateriją** (numatyta - `Išjungta`): įrenginio baterija yra telefono, pompos bei sensoriaus baterijų sintezė (paparastai žemiausia iš 3 reikšmių)
* **Rodyti valandinę bazę** (numatyta - `Įjungta`): rodyti arba ne dabartinę valandinę bazę (V/h arba %, jei LVB)
* **Rodo ciklo būklę** (numatyta - `Įjungta`): rodyti kiek minučių praėjo nuo paskutinio ciklo suveikimo (rodyklės aplink reikšmę patampa raudonomis, jei virš 15'').
* **Rodyti KG** (numatyta `Įjungta`): Rodyti arba ne KG reikšmę
* **Rodyti krypties rodykles** (numatyta `Įjungta`): Rodyti arba ne KG kitimo rodyklę
* **Rodyti Prieš** (numatytasis `Įjungta`): rodo, kiek minučių praėjo nuo paskutinio nuskaitymo.
* **Tamsus** (numatyta `Įjungta`): galite perjungti iš juodo fono į baltą (išskyrus Cockpit ir Steampunk laikrodžio ekranus)
* **Išryškinti valandinę bazę** (numatyta `Išjungta`): pagerinti valandinės bazės ir laikinos bazės matomumą
* **Atitikimo daliklis** (numatyta `Išjungta`): AAPS, AAPSv2 ir AAPS(Didelis) laikrodžio ekranuose parodyti kontrastingą fono daliklį (**Išjungta**) arba atitikti daliklį su fono spalva (**Įjungta**)
* **Diagramos laikotarpis** (numatyta `3 valandos`): galite pasirinkti iš papildomo meniu maksimalų laikotarpį tarp 1 ir 5 valandų.

### Vartotojo sąsajos nustatymas

* **Įvesties dizainas**: šiuo parametru galite pasirinkti "+" ir "-" mygtukų poziciją, kai įvedate komandas AAPS (LT, insulinas, angliavandeniai...)

![Įvesties dizaino variantai](../images/Watchface_InputDesign.png)

### Specifiniai laikrodžio ekrano parametrai

#### Steampunk ciferblatas

* **Delta detalumas** (numatytasis `Vidutinis`)

![Steampunk_gauge](../images/Watchface_Steampunk_Gauge.png)

#### Apvalus ciferblatas

* **Dideli skaičiai** (numatytasis `Išjungta`): Padidinti teksto dydį, siekiant pagerinti matomumą
* **Glikemijos Istorija** (numatytasis `Išjungta`): Peržiūrėti grafiškai BG istoriją su pilkais žiedais viduje žalio valandų žiedo
* **Šviesi glikemijos storiją** (numatytasis `Įjungta`): Glikemijos istorija su daugiau tamsesnės pilkos spalvos
* **Animacija** (numatytasis `Įjungta`): Kai įjungta, funkciją palaikančiuose laikrodžiuose ir ne energijos taupymo mažos rezoliucijos režime, ekrano vaizdas bus animuotas

### Komandų nustatymai

* **Vedlys yra Meniu** (numatyta` Įjungta`): leisti vedlio sąsajai pagrindiniame meniu įvesti angliavandenius ir nustatyti bolusus iš laikrodžio
* **Užpildymas per Meniu** (numatytasis `Išjungta`): Leisti užpildymą iš laikrodžio
* **Vienas tikslas** (numatytasis `Įjungta`):
    
    * `Įjungta`: nustatysite vieną reikšmę LT
    * `Išjungta`: nustatysite LT žemą ir aukštą reikšmes

* **Vedlys procentais** (numatyta `Išjungta`): leisite boluso korekciją iš vedlio (reikšmė įvesta procentais prieš patvirtinimo pranešimą)

## Ekrano elementai

*Ekrano elementai* yra terminas iš tradicinės laikrodžių gamybos, aprašantis priedus prie pagrindinio ciferblato - kitas mažas langelis arba papildomas ciferblatas (su data, savaitės diena, mėnulio faze ir pan.). Paprastai kalbant, Wear OS 2.0 leidžia pritaikytų duomenų teikėjams, pvz., oras, pranešimai, fitneso skaitikliai ir pan. būti pridėtiems į bet kurį ciferblatą, palaikantį ekrano elementus.

AndroidAPS Wear OS programėlė palaiko ekrano elementus nuo versijos `2.6` ir leidžia bet kurių trečiųjų šalių ciferblatą, palaikantį ekrano elementus, sukonfigūruoti rodyti su AAPS susijusius duomenis (KG tendenciją, AIO, AAO ir t. t.).

Ekrano elementai gali atlikti **nuorodų** į AAPS funkcijas. Bakstelėję jas, galite atidaryti su AAPS susijusius meniu ir dialogus (priklauso nuo ekrano elementų tipo ir konfigūracijos).

![Plėtiniai_ciferblate](../images/Watchface_Complications_On_Watchfaces.png)

### Ekrano elementų tipai

AAPS Wear OS programėlė pateikia tik pirminius duomenis, pagal numatytus formatus. Priklauso nuo trečiųjų šalių ciferblato, kur ir kaip diegiami ekrano elementai, įskaitant išdėstymą, kraštelius, spalvą ir šriftą. Iš daugelio Wear OS ekrano elementų, AAPS naudoja:

* `TRUMPAS TEKSTAS` - Yra dvi teksto eilutės, 7 simboliai kiekvienoje, kartais vadinama reikšme ir pavadinimu. Paprastai parodoma viduje apskritimo ar mažo ovalo - vienas po kitu arba šalia. Tai yra labai erdvėje apribotas ekrano elementas. Kad sutilptų, AAPS stengiasi pašalinti nereikalingus ženklus: apvalina reikšmes, pašalindamas nulius pradžioje ir pabaigoje iš reikšmių ir pan.
* `ILGAS TEKSTAS` - Yra dvi teksto eilutės, apie 20 simbolių kiekvienoje. Paprastai rodomas stačiakampyje arba ilgame ovale - vienas po kitu. Naudojamas pateikti daugiau detalių ir tekstinę būseną.
* `RIBINĖ REIKŠMĖ` - Naudojamas pateikti reikšmes iš nustatytų ribų, pvz., procentus. Turi paveikslėlį, pavadinimą ir pateikiamas kaip progreso apskritimas.
* `DIDELIS PAVEIKSLĖLIS` - Pasirinktinis fono paveikslėlis, kuris gali būti naudojamas (kai palaikoma ciferblate), kaip fonas.

### Ekrano elementų diegimas

Norint pridėti ekrano elementus į ciferblatą, sukonfigūruokite jas ilgu paspaudimu ir bakstelkite krumpliaratį apačioje. Priklausomai nuo to, kaip konkretūs ciferblatai yra konfigūruojami - arba spustelėkite vietos rezervavimo ženklus, arba eikite į ciferblato sąrankos ekrano elementų meniu. AAPS ekrano elementai yra sugrupuoti po AAPS meniu įrašu.

Konfigūruojant ekrano elementus, Wear OS parodys iš išfiltruos sąrašą elementų, kurie tilps į pasirinktų elementų vietas ciferblate. Jei nerandate konkretaus ekrano elementų sąraše, tikriausiai dėl savo savybių jie negali būti naudojami šioje vietoje.

### AAPS teikiami ekrano elementai

AndroidAPS pateikia šiuos ekrano elementus:

![AAPS_plėtinių_sąrašas](../images/Watchface_Complications_List.png)

* **VB, AAO & AIO** (`TRUMPAS TEKSTAS`, atsidaro *Meniu*): rodo *Valandinę bazę* pirmoje eilutėje ir *Aktyvius angliavandenius organizme* bei *Aktyvų insuliną organizme* antroje.
* **Kraujo Gliukozė** (`TRUMPAS TEKSTAS`, atsidaro *Meniu*): rodo *Kraujo gliukozės* reikšmę ir *tendencijos* rodyklę pirmoje eilutėje ir *matavimo laikotarpį* bei *KG delta* antroje.
* **AAO & AIO** (`TRUMPAS TEKSTAS`, atsidaro *Meniu*): rodo *Aktyvius angliavandenius organizme* pirmoje eilutėje ir *Aktyvų insuliną organizme* antroje.
* **AAO išsamiai** (`TRUMPAS TEKSTAS`, atsidaro *Vedlys*): rodo dabartinius aktyvius *Angliavandenius organizme* pirmoje eilutėje ir planuojamus (būsimus, iAV) angliavandenius antroje.
* **AAO piktograma** (`TRUMPAS TEKSTAS`, atsidaro *Vedlys*): rodo *Angliavandenių organizme* reikšmę su statine piktograma.
* **Visa būsena** (`ILGAS TEKSTAS`, atsidaro *Meniu*): rodo dauguma duomenų vienu metu: *Kraujo gliukozės* reikšmę ir *tendencijos* rodyklę, *KG delta* ir *matavimo laikotarpį* pirmoje eilutėje. Antroje eilutėje *Angliavandenių organizme*, *Insuliną organizme* ir *valandinę bazę*.
* **Visa būsena (pasukta)** (`ILGAS TEKSTAS`, atsidaro *Meniu*): tie patys duomenys, kaip ir standartinėje *Visoje būsenoje*, bet linijos yra pasuktos. Gali būti naudojama ciferblatuose, kurie ignoruoja vieną iš dviejų linijų `ILGAS TEKSTAS`
* **AAO Išsamiai** (`TRUMPAS TEKSTAS`, atsidaro *Bolusas*): Rodo visą *aktyvų insuliną organizme* pirmoje eilutėje ir *AAO* dedamąsias *Boluso* ir *Bazės* dalis antroje eilutėje.
* **AAO piktograma** (`TRUMPAS TEKSTAS`, atsidaro *Bolusas*): rodo *Angliavandenių organizme* reikšmę su statine piktograma.
* **Siuntėjo/Telefono Baterija** (`RIBINĖ REIKŠMĖ/1>, atsidaro <em>Būsena</em>): pateikia AAPS įdiegtame telefone baterijos procentą (siuntėjas) taip, kaip nurodo AAPS. Rodoma procentais, su akumuliatoriaus piktograma, kuri atspindi praneštą reikšmę. Gali būti neatnaujinama realiu laiku, o tik su kitais svarbiais AAPS duomenimis (paprastai kas ~5 minutes kartu su nauju <em>kraujo gliukozės</em> matavimu).</li>
</ul>

<p>Be to, yra trys ekrano elementai <code>DIDELIS PAVEIKSLĖLIS` tokios kaip: **Tamsus fono paveikslėlis**, **Pilkas fono paveikslėlis** ir **Šviesus fono paveikslėlis**, rodantys statinį AAPS fono paveikslėlį.</p> 
    ### Su ekrano elementais susiję nustatymai
    
    * **Veiksmai paspaudus plėtinių mygtuką** (numatytoji reikšmė `Numatytasis`): Nusprendžia, kuris dialogo langas yra atidarytas, kai vartotojas baksteli į plėtinius: 
        * *Numatytasis*: veiksmų, būdingų ekrano elementų tipui *(žr. sąrašą aukščiau)*
        * *Meniu*: AAPS pagrindinis meniu
        * *Vedlys*: boluso vedlys - boluso skaičiuoklė
        * *Bolusas*: tiesioginis boluso reikšmės įrašas
        * *iAV*: iAV sąrankos dialogas
        * *Būsena*: būsenos sub-meniu
        * *Jokių*: Išjungia AAPS plėtinių veiksmus
    * **Unicode ekrano elementuose** (numatytasis `Įjungta`): Kai `Įjungta`, elementuose bus naudojami Unicode simboliai, tokie kaip: `Δ` Delta, `⁞` vertikalių taškų daliklis arba `⎍` bazės simbolis. Jų pateikimas priklauso nuo šrifto, kuris gali būti būdingas tik tam ciferblatui. Ši parinktis leidžia perjungti Unicode simbolius `Išjungta` kai reikia - jei šriftas, naudojamas parinktiniuose ciferblatuose nepalaiko šių simbolių - taip išvengiant grafinių trikdžių.
    ## Patarimai dėl darbo ir baterijos gyvavimo
    
    Wear OS laikrodžiai labai imlūs baterijos energijai. Laikrodžio dydis riboja baterijos talpą. Netgi su aparatinės dalies ir programinės įrangos patobulinimais, Wear OS laikrodžiai reikalauja kasdienės įkrovos.
    
    Jei baterijos tarnavimo trukmė yra trumpesnė nei diena (nuo aušros iki sutemų), štai keletas patarimų sprendžiant sunkumus.
    
    Pagrindinės baterijos eikvojimo sritys:
    
    * Aktyvus ekranas su apšvietimu (LED) arba visu intensyvumo režimu (OLED)
    * Atvaizdavimas ekrane
    * Radijo ryšys per Bluetooth
    
    Kadangi mes negalima nutraukti ryšio (mums reikia atnaujinti duomenis), ir norime turėti naujausius atvaizduotus duomenis, dauguma patobulinimų gali būti padaryta *laiko rodymo* srityje:
    
    * Gamykliniai ciferblatai paprastai yra geriau optimizuoti, nei tie, kuriuos atsisiunčiate iš parduotuvės.
    * Tai geriau naudoti ciferblatus, kurie atvaizduoja duomenis neaktyviu / blyškiu režimu.
    * Būkite atidūs, kai pridedate kitus ekrano elementus, tokius kaip oro valdikliai - jie naudoja duomenis iš išorinių šaltinių.
    * Pradėkite nuo paprastesnių ciferblatų. Pridėkite vieną plėtinį vienu metu ir stebėkite, kiek tai turi įtakos baterijos gyvavimui.
    * Pabandykite naudoti **Tamsią** temą AAPS ciferblate ir [**Atitikimo daliklį**](#watchface-settings). OLED įrenginiuose tai sumažins pikselių šviesį ir jų išdegimą.
    * Patikrinkite, kas veikia geriau jūsų laikrodyje: AAPS numatytasis ciferblatas ar kitas ciferblatas su AAPS plėtiniais.
    * Stebėkite kelias dienas, naudojant įvairius veiklos profilius. Daugelis laikrožių aktyvuoja ekraną, kai žiūrime į juos, judant ar dėl kitų priežasčių.
    * Patikrinkite bendrinius sistemos nustatymus, kurie gali turėti įtakos: pranešimai, apšvietimas/aktyvaus ekrano išsijungimas, kai GPS yra aktyvuotas.
    * Patikrinkite [sąrašą išbandytų telefonų ir laikrodžių](../Getting-Started/Phones#list-of-tested-phones) ir [paklauskite bendruomenės](../Where-To-Go-For-Help/Connect-with-other-users.md) apie kitų vartotojų patirtį bei baterijos gyvavimo būklę.
    * **Mes negalime garantuoti, kad duomenys rodomi ciferblate ar ekrano elemente yra atnaujinti**. Galų gale, tik nuo Wear OS priklauso, kada atnaujinti ciferblatą ar plėtinį. Net kai APPS programėlė užklausia atnaujinimo, sistema gali nuspręsti atidėti arba ignoruoti užklausą, siekdama tausoti bateriją. Jei abejojate ar baterija laikrodyje nusekusi - visada pasitikrinkite AAPS programėlę telefone.
    ## Wear programos trikčių šalinimas:
    
    * Android Wear 2.0 laikrodžiuose ekranas nebeįsidiegia pats. Jūs turite eiti į laikrodžio Playstore (skiriasi nuo išmaniojo telefono Playstore!) Ir suaktyvinti AAPS kategorijoje "įdiegtos programos telefone“. Taip pat įjungti automatinį naujinimą. 
    * Kartais padeda pakartotinis programų sinchronizavimas su laikrodžiu, nes kartais jis gali tai atlikti per lėtai: Android Wear > krumpliaračio piktograma (apačia)> laikrodžio pavadinimas> sinchronizuoti programas dar kartą.
    * Laikrodžio kūrėjo parinktyse įjunkite ADB derinimo funkciją, prijunkite laikrodį prie kompiuterio per USB ir vieną kartą paleiskite Wear programoje Android Studio.
    * Jei ekrano elementai neatnaujina duomenų, iš pradžių patikrinkite ar AAPS ciferblatas veikia iš viso.
    ## Peržiūrėti Nightscout duomenis
    
    Jei naudojate kitokią ciklo sistemą arba norite *pamatyti* savo vaiko ciklo informaciją laikrodyje, galite tiesiog sukurti/parsisiųsti NSClient APK. Eikite į [APK kūrimo instrukcijos](../Installing-AndroidAPS/Building-APK.md) ir pasirinkite kūrimo variantą NSClientRelease. Yra keletas skaitmeninių ciferblatų, kurie rodo vidutinį delta pokytį, aktyvų insuliną IOB, esamą laikiną bazinę TBR ir bazinį profilį bei CGM duomenų grafiką.
    
    # Pebble
    
    Pebble vartotojai gali naudoti [Urchin laikrodžio ekraną](https://github.com/mddub/urchin-cgm), kad *peržiūrėtų* jų ciklo duomenis (jei įkelti į Nightscout), tačiau negalėsite valdyti pompos ir AndroidAPS iš laikrodžio. Galite pasirinkti rodomus laukus, tokius kaip AAO ir šiuo metu aktyvi laikina bazė bei prognozes. Jei dirbate su atviru ciklu, galite naudoti [IFTTT](https://ifttt.com/) algoritmą, kad sukurtumėte programėlę, kuri, gavusi pranešimą iš AndroidAPS, siunčia SMS arba sukuria tiesioginį pranešimą.