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

From March 2021 you need to sideload AAPS onto the watch, it is no longer accessible via the watch's Google Play Store. You can sideload using [Wear Installer](https://youtu.be/8HsfWPTFGQI) which you will need to install on both your watch and phone. Once you have selected AndroidAPS as your app to upload wear version onto the watch you will be able to use watchfaces and complications and the AAPS controls.

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

Yra keletas skaitmeninių ciferblatų, kurie rodo vidutinį delta pokytį, aktyvų insuliną, esamą laikiną bazinę ir bazinį profilį bei NGJ duomenų grafiką.

Įsitikinkite, kad AndroidAPS pranešimai nėra užblokuoti laikrodyje. Veiksmo patvirtinimas (pavyzdžiui, bolusas, laikini tikslai) įvyksta per pranešimus, kuriuos reikia patempti į šoną ir paspausti varnelę.

Norėdami greičiau patekti į AAPS meniu, du kartus spustelėkite ant KG. Dukart spustelėję glikemijos kreivę, galite pakeisti laiko skalę.

## Galimi ciferblatai

![Galimi ciferblatai](../images/Watchface_Types.png)

### New watchface as of AndroidAPS 2.8

![Watchface Digital Style](../images/Watchface_DigitalStyle.png)

* Color, lines and circle are configurable in setting menu on cog-sign of watchface chooser menu.

## AAPSv2 laikrodžio ekranas - paaiškinimai

![AndroidAPSv2 laikrodžio ekrano informacija](../images/Watchface_Legend.png)

A - laikas nuo paskutinės ciklo veiklos

B - NGJ duomenys

C - minutės nuo paskutinių NGJ duomenų

D - pokytis, palyginti su praėjusiais NGJ duomenimis (mmol arba mg/dl),

E - vidutinis NGJ duomenų pokytis per pastarąsias 15 minučių

F - telefono baterija

G - valandinė bazė (vv/val, jei užprogramuota, arba % jei laikina)

H - įtaka kraujo glikemijai -> tikėtinas glikemijos pokytis, pagrįstas vien aktyviu insulinu.

I - angliavandeniai (aktyvūs angliavandeniai | e-angliavandeniai ateityje)

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
* **Vienetai** (numatytasis `mg/dl`): jei **Įjungta** vienetai yra `mg/dl`, jei **Išjungta** vienetai yra `mmol/l`. Naudojama nustatant LT (laikiną tikslą) iš laikrodžio.

### Laikrodžio ekrano nustatymai

* **Rodyti datą** (numatyta - `Išjungta`): pastaba, data matoma ne visų laikrodžių ekranuose
* **Rodyti AIO** (numatyta - `Įjungta`): rodyti, arba ne AIO reikšmes (nustatyti detalias reikšmes galite AAPS parametruose)
* **Rodyti AAO** (numatyta `Įjungta`): Rodyti arba ne AAO
* **Rodyti delta** (numatyta -` Įjungta`): rodyti arba ne KG reikšmių pokytį per paskutines 5 minutes
* **Rodyti AVGdelta** (numatyta - `Įjungta`): rodyti arba ne vidutinius KG reikšmių kitimus per paskutines 15 minučių
* **Rodyti telefono bateriją** (numatyta `Įjungta`): Telefono baterija %. Raudona, jei mažiau nei 30% .
* **Rodyti įrenginio bateriją** (numatyta - `Išjungta`): įrenginio baterija yra telefono, pompos bei sensoriaus baterijų sintezė (paparastai žemiausia iš 3 reikšmių)
* **Rodyti valandinę bazę** (numatyta - `Įjungta`): rodyti arba ne dabartinę valandinę bazę (V/val arba %, jei LVB)
* **Rodo ciklo būklę** (numatyta - `Įjungta`): rodyti kiek minučių praėjo nuo paskutinio ciklo suveikimo (rodyklės aplink reikšmę tampa raudonos, jei virš 15 min.).
* **Rodyti KG** (numatyta `Įjungta`): Rodyti, arba ne KG reikšmę
* **Rodyti krypties rodykles** (numatyta `Įjungta`): Rodyti, arba ne KG kitimo rodyklę
* **Rodyti Prieš** (numatytasis `Įjungta`): rodo, kiek minučių praėjo nuo paskutinio nuskaitymo.
* **Tamsus** (numatyta `Įjungta`): galite perjungti iš juodo fono į baltą (išskyrus Cockpit ir Steampunk laikrodžio ekranus)
* **Išryškinti valandinę bazę** (numatyta `Išjungta`): pagerinti valandinės bazės ir laikinos bazės matomumą
* **Atitikimo daliklis** (numatyta `Išjungta`): AAPS, AAPSv2 ir AAPS(Didelis) laikrodžio ekranuose parodyti kontrastingą fono daliklį (**Išjungta**) arba atitikti daliklį su fono spalva (**Įjungta**)
* **Diagramos laikotarpis** (numatyta `3 valandos`): galite pasirinkti iš papildomo meniu maksimalų laikotarpį tarp 1 ir 5 valandų.

### Vartotojo sąsajos nustatymas

* **Input Design**: with this parameter, you can select the position of "+" and "-" buttons when you enter commands for AAPS (TT, Insulin, Carbs...)

![Input design options](../images/Watchface_InputDesign.png)

### Specific watchface parameters

#### Steampunk ciferblatas

* **Delta Granularity** (default `Medium`)

![Steampunk_gauge](../images/Watchface_Steampunk_Gauge.png)

#### Apvalus ciferblatas

* **Big Numbers** (default `Off`): Increase text size to improve visibility
* **Ring History** (default `Off`): View graphically BG history with gray rings inside the hour's green ring
* **Light Ring History** (default `On`): Ring history more discreet with a darker gray
* **Animations** (default `On`): When enabled, on supported by watch and not in power saving low-res mode, watchface circle will be animated

### Commands settings

* **Wizard in Menu** (default `On`): Allow wizard interface in main menu to input Carbs and set Bolus from watch
* **Prime in Menu** (default `Off`): Allow Prime / Fill action from watch
* **Single Target** (default `On`):
    
    * `On`: you set a single value for TT
    * `Off`: you set Low target and high target for TT

* **Wizard Percentage** (default `Off`): Allow bolus correction from wizard (value entered in percentage before confirmation notification)

## Ekrano elementai

*Complication* is a term from traditional watchmaking, where it describes addition to the main watchface - as another small window or sub-dial (with date, day of the week, moon phase, etc.). Wear OS 2.0 brings that metaphor to allow custom data providers, like weather, notifications, fitness counters and more - to be added to any watchfaces that support complications.

AndroidAPS Wear OS app supports complications since build `2.6`, and allow any third party watchface that supports complications to be configured to display AAPS related data (BG with the trend, IOB, COB, etc.).

Complications also serve as **shortcut** to AAPS functions. By tapping them you can open AAPS related menus and dialogs (depending on complication type and configuration).

![Complications_On_Watchfaces](../images/Watchface_Complications_On_Watchfaces.png)

### Complication Types

AAPS Wear OS app provides only raw data, according to predefined formats. It is up to third-party watchface to decide where and how to render complications, including its layout, border, color, and font. From many Wear OS complication types available, AAPS uses:

* `SHORT TEXT` - Contains two lines of text, 7 characters each, sometimes referred to as value and label. Usually rendered inside a circle or small pill - one below another, or side by side. It is a very space-limited complication. AAPS tries to remove unnecessary characters to fit-in: by rounding values, removing leading and trailing zeroes from values, etc.
* `LONG TEXT` - Contains two lines of text, about 20 characters each. Usually rendered inside a rectangle or long pill - one below another. It is used for more details and textual status.
* `RANGED VALUE` - Used for values from predefined range, like a percentage. It contains icon, label and is usually rendered as circle progress dial.
* `LARGE IMAGE` - Custom background image that can be used (when supported by watchface) as background.

### Complication Setup

To add complication to watchface, configure it by long press and clicking the gear icon below. Depending on how specific watchface configures them - either click on placeholders or enter the watchface setup menu for complications. AAPS complications are grouped under the AAPS menu entry.

When configuring complications on watchface, Wear OS will present and filter the list of complications that can be fit into selected complication place on watchface. If specific complications cannot be found on the list, it is probably due to its type that cannot be used for the given place.

### Complications provided by AAPS

AndroidAPS provides following complications:

![AAPS_Complications_List](../images/Watchface_Complications_List.png)

* **BR, CoB & IoB** (`SHORT TEXT`, opens *Menu*): Displays *Basal Rate* on the first line and *Carbs on Board* and *Insulin on Board* on the second line.
* **Blood Glucose** (`SHORT TEXT`, opens *Menu*): Displays *Blood Glucose* value and *trend* arrow on the first line and *measurement age* and *BG delta* on the second line.
* **CoB & IoB** (`SHORT TEXT`, opens *Menu*): Displays *Carbs on Board* on the first line and *Insulin on Board* on the second line.
* **CoB Detailed** (`SHORT TEXT`, opens *Wizard*): Displays current active *Carbs on Board* on the first line and planned (future, eCarbs) Carbs on the second line.
* **CoB Icon** (`SHORT TEXT`, opens *Wizard*): Displays *Carbs on Board* value with a static icon.
* **Visa būsena** (`ILGAS TEKSTAS`, atsidaro *Meniu*): rodo dauguma duomenų vienu metu: *Kraujo gliukozės* reikšmę ir *tendencijos* rodyklę, *KG delta* ir *matavimo laikotarpį* pirmoje eilutėje. Antroje eilutėje *AAO*, *AIO* ir *valandinė bazė*.
* **Visa būsena (pasukta)** (`ILGAS TEKSTAS`, atsidaro *Meniu*): tie patys duomenys, kaip ir standartinėje *Visoje būsenoje*, bet linijos yra pasuktos. Gali būti naudojama ciferblatuose, kurie ignoruoja vieną iš dviejų linijų `ILGAS TEKSTAS`
* **AIO išsamiai** (`TRUMPAS TEKSTAS`, atsidaro *Bolusas*): Rodo visą *aktyvų insuliną organizme* pirmoje eilutėje ir *AIO* dedamąsias *Boluso* ir *Bazės* dalis antroje eilutėje.
* **AIO piktograma** (`TRUMPAS TEKSTAS`, atsidaro *Bolusas*): rodo *aktyvus insulinas organizme* reikšmė su statine piktograma.
* **Siuntėjo/Telefono Baterija** (`RIBINĖ REIKŠMĖ/1>, atsidaro <em>Būsena</em>): pateikia AAPS įdiegtame telefone baterijos procentą (siuntėjas) taip, kaip nurodo AAPS. Rodoma procentais, su akumuliatoriaus piktograma, kuri atspindi gautą reikšmę. Gali būti neatnaujinama realiu laiku, o tik su kitais svarbiais AAPS duomenimis (paprastai kas ~5 minutes kartu su nauju <em>kraujo gliukozės</em> matavimu).</li>
</ul>

<p>Be to, yra trys ekrano elementai <code>DIDELIS PAVEIKSLĖLIS` tokie kaip: **Tamsus fono paveikslėlis**, **Pilkas fono paveikslėlis** ir **Šviesus fono paveikslėlis**, rodantys statinį AAPS fono paveikslėlį.</p> 
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
    
    Wear OS laikrodžiai labai eikvoja baterijos energiją. Laikrodžio dydis riboja baterijos talpą. Netgi su aparatinės dalies ir programinės įrangos patobulinimais, Wear OS laikrodžiai reikalauja kasdienės įkrovos.
    
    Jei baterijos tarnavimo trukmė yra trumpesnė nei diena (nuo aušros iki sutemų), štai keletas patarimų sprendžiant sunkumus.
    
    Pagrindinės baterijos eikvojimo sritys:
    
    * Aktyvus ekranas su apšvietimu (LED) arba visu intensyvumo režimu (OLED)
    * Atvaizdavimas ekrane
    * Radijo ryšys per Bluetooth
    
    Kadangi reikalingas sklandus ir nepertraukiamas ryšys, ir norime turėti naujausius atvaizduotus duomenis, dauguma patobulinimų gali būti padaryta *laiko rodymo* srityje:
    
    * Gamykliniai ciferblatai paprastai yra geriau optimizuoti, nei tie, kuriuos atsisiunčiate iš parduotuvės.
    * Geriau naudoti ciferblatus, kurie atvaizduoja duomenis neaktyviu / blyškiu režimu.
    * Būkite atidūs, kai pridedate kitus ekrano elementus, tokius kaip oro prognozės - jie naudoja duomenis iš išorinių šaltinių.
    * Pradėkite nuo paprastesnių ciferblatų. Pridėkite vieną plėtinį vienu metu ir stebėkite, kiek tai turi įtakos baterijos gyvavimui.
    * Pabandykite naudoti **Tamsią** temą AAPS ciferblate ir [**Atitikimo daliklį**](#watchface-settings). OLED įrenginiuose tai sumažins pikselių šviesį ir jų išdegimą.
    * Patikrinkite, kas veikia geriau jūsų laikrodyje: AAPS numatytasis ciferblatas ar kitas ciferblatas su AAPS plėtiniais.
    * Stebėkite kelias dienas, naudodami įvairius aktyvumo profilius. Daugelis laikrodžių aktyvuoja ekraną, kai pažiūrime į juos, judant ar dėl kitų priežasčių.
    * Patikrinkite bendrinius sistemos nustatymus, kurie gali turėti įtakos: pranešimai, apšvietimas/aktyvaus ekrano išsijungimas, kai GPS yra aktyvuotas.
    * Patikrinkite [sąrašą išbandytų telefonų ir laikrodžių](../Getting-Started/Phones#list-of-tested-phones) ir [paklauskite bendruomenės](../Where-To-Go-For-Help/Connect-with-other-users.md) apie kitų vartotojų patirtį bei baterijos gyvavimo būklę.
    * **Mes negalime garantuoti, kad duomenys rodomi ciferblate ar ekrano elemente yra naujausi**. Galų gale, tik nuo Wear OS priklauso, kada atnaujinti ciferblatą ar plėtinį. Net kai APPS programėlė užklausia atnaujinimo, sistema gali nuspręsti atidėti arba ignoruoti užklausą, siekdama tausoti bateriją. Jei abejojate, arba baterija laikrodyje nusekusi - visada pasitikrinkite AAPS programėlę telefone.
    ## Wear programos trikčių šalinimas:
    
    * Sometimes it helps to re-sync the apps to the watch as it can be a bit slow to do so itself: Android Wear > Cog icon > Watch name > Resync apps.
    * Enable ADB debugging in Developer Options (on watch), connect the watch via USB and start the Wear app once in Android Studio.
    * If Complications does not update data - check first if AAPS watchfaces work at all.
    ### Sony Smartwatch 3
    
    * The Sony Smartwach 3 is one of the most popular watches to be used with AAPS. 
    * Unfortunately Google dropped support for wear OS 1.5 devices in fall 2020. This leads to problems when using Sony SW3 with AndroidAPS 2.7 and above.
    * A possible workaround can be found on this [troubleshooting page](../Usage/SonySW3.rst).
    ## Peržiūrėti Nightscout duomenis
    
    If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". Yra keletas skaitmeninių ciferblatų, kurie rodo vidutinį delta pokytį, aktyvų insuliną, esamą laikiną bazinę ir bazinį profilį bei NGJ duomenų grafiką.
    
    # Pebble
    
    Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to Nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.