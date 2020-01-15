# AAPS išmaniajame laikrodyje su Wear OS

Galite instaliuoti AndroidAPS programėlę savo **Wear OS pagrindu** veikiančiame laikrodyje. AAPS versija laikrodžiui leidžia:

* **display data on your watch**: by providing [custom watchfaces](#aaps-watchfaces) or in standard watchfaces with use of [complications](#complications)
* **valdyti AAPS telefone**: suleisti bolusą, nustatyti laikiną tikslą ir pan. 

### Prieš perkant laikrodį...

* Some features like *complications* require Wear OS version 2.0 or newer to work
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
* administruoti bolusą
* administruoti iAV
* naudoti boluso skaičiuoklę (skaičiavimo kintamieji gali būti apibrėžti telefono [nustatymuose](../Configuration/Config-Builder#wear))
* patikrinti pompos ir ciklo būklę
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

* dukart bakstelėkite į savo KG vertę
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
* **Rodyti AIO** (numatyta - `Įjungta`): rodyti arba ne AIO reikšmes (nustatyti išsamias vertes galite AAPS parametruose)
* **Rodyti AIO** (numatyta `Įjungta`): Rodyti arba ne AIO vertę
* **Rodyti delta** (numatyta -` Įjungta`): rodyti arba ne KG reišmių kitimus per paskutines 5 minutes
* **Rodyti AVGdelta** (numatyta - `Įjungta`): rodyti arba ne vidutinius KG reišmių kitimus per paskutines 15 minučių
* **Rodyti telefono bateriją** (numatyta `Įjungta`): Telefono baterija %. Raudona, jei mažiau nei 30% .
* **Rodyti įrenginio bateriją** (numatyta - `Išjungta`): įrenginio baterija yra telefono, pompos bei sensoriaus baterijų sintezė (paparastai žemiausia iš 3 reikšmių)
* **Rodyti valandinę bazę** (numatyta - `Įjungta`): rodyti arba ne dabartinę valandinę bazę (V/h arba %, jei LVB)
* **Rodo ciklo būklę** (numatyta - `Įjungta`): rodyti kiek minučių praėjo nuo paskutinio ciklo suveikimo (rodyklės aplink reikšmę patampa raudonomis, jei virš 15'').
* **Rodyti KG** (numatyta `Įjungta`): Rodyti arba ne KG vertę
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

## Komplikacijos (plėtiniai)

*Komplikacija* yra terminas iš tradicinės laikrodžių gamybos, aprašantis priedus prie pagrindinio ciferblato - kitas mažas langelis arba papildomas ciferblatas (su data, savaitės diena, mėnulio faze ir pan.). Paprastai kalbant, Wear OS 2.0 leidžia pritaikytų duomenų teikėjams, pvz., oras, pranešimai, fitneso skaitikliai ir pan. būti pridėtiems į bet kurį ciferblatą, palaikantį komplikacijas.

AndroidAPS Wear OS programėlė palaiko komplikacijas nuo versijos `2.6` ir leidžia bet kurių trečiųjų šalių ciferblatą, palaikantį komplikacijas, sukonfigūruoti rodyti su AAPS susijusius duomenis (KG tendenciją, AIO, AAO ir t. t.).

Komplikacijos gali atlikti **nuorodų** į AAPS funkcijas. Bakstelėję jas, galite atidaryti su AAPS susijusius meniu ir dialogus (priklauso nuo komplikacijų tipo ir konfigūracijos).

![Plėtiniai_ciferblate](../images/Watchface_Complications_On_Watchfaces.png)

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
* **Full Status** (`LONG TEXT`, opens *Menu*): Shows most of the data at once: *Blood Glucose* value and *trend* arrow, *BG delta* and *measurement age* on the first line. On the second line *Carbs on Board*, *Insulin on Board* and *Basal Rate*.
* **Full Status (flipped)** (`LONG TEXT`, opens *Menu*): Same data as for standard *Full Status*, but lines are flipped. Can be used in watchfaces which ignores one of two lines in `LONG TEXT`
* **IoB Detailed** (`SHORT TEXT`, opens *Bolus*): Displays total *Insulin on Board* on the first line and split of *IoB* for *Bolus* and *Basal* part on the second line.
* **IoB Icon** (`SHORT TEXT`, opens *Bolus*): Displays *Insulin on Board* value with a static icon.
* **Uploader/Phone Battery** (`RANGED VALUE`, opens *Status*): Displays battery percentage of AAPS phone (uploader), as reported by AAPS. Displayed as percentage gauge with a battery icon that reflects reported value. It may be not updated in real-time, but when other important AAPS data changes (usually: every ~5 minutes with new *Blood Glucose* measurement).

Additionally, there are three complications of `LARGE IMAGE` kind: **Dark Wallpaper**, **Gray Wallpaper** and **Light Wallpaper**, displaying static AAPS wallpaper.

### Complication related settings

* **Complication Tap Action** (default `Default`): Decides which dialog is opened when user taps complication: 
  * *Default*: action specific to complication type *(see list above)*
  * *Menu*: AAPS main menu
  * *Wizard*: bolus wizard - bolus calculator
  * *Bolus*: direct bolus value entry
  * *eCarb*: eCarb configuration dialog
  * *Status*: status sub-menu
  * *None*: Disables tap action on AAPS complications
* **Unicode komplikacijose** (numatytasis `Įjungta`): Kai `Įjungta`, plėtiniuose bus naudojami Unicode simboliai, tokie kaip: `Δ` Delta, `⁞` vertikalių taškų daliklis arba `⎍` bazės simbolis. Jų pateikimas priklauso nuo šrifto, kuris gali būti būdingas tik tam ciferblatui. Ši parinktis leidžia perjungti Unicode simbolius `Išjungta` kai reikia - jei šriftas, naudojamas parinktiniuose ciferblatuose nepalaiko šių simbolių - taip išvengiant grafinių trikdžių.

## Patarimai dėl darbo ir baterijos gyvavimo

Wear OS laikrodžiai labai imlūs baterijos energijai. Laikrodžio dydis riboja baterijos talpą. Netgi su aparatinės dalies ir programinės įrangos patobulinimais, Wear OS laikrodžiai reikalauja kasdienės įkrovos.

Jei baterijos tarnavimo trukmė yra trumpesnė nei diena (nuo aušros iki sutemų), štai keletas patarimų sprendžiant sunkumus.

Pagrindinės baterijos eikvojimo sritys:

* Aktyvus ekranas su apšvietimu (LED) arba visu intensyvumo režimu (OLED)
* Atvaizdavimas ekrane
* Radijo ryšys per Bluetooth

Kadangi mes negalima nutraukti ryšio (mums reikia atnaujinti duomenis), ir norime turėti naujausius atvaizduotus duomenis, dauguma patobulinimų gali būti padaryta *laiko rodymo* srityje:

* Stock watchfaces are usually better optimized than custom one, downloaded from the store.
* It is better to use watchfaces that limit the amount of rendered data in inactive / dimmed mode.
* Be aware when mixing other Complications, like third party weather widgets, or other - utilizing data from external sources.
* Start with simpler watchfaces. Add one complication at the time and observe how they affect battery life.
* Try to use **Dark** theme for AAPS watchfaces, and [**Matching divider**](#watchface-settings). On OLED devices it will limit the amount of pixels lit and limit burnout.
* Check what performs better on your watch: AAPS stock watchfaces or other watchfaces with AAPS Complications.
* Observe over a few days, with different activity profiles. Most watches activate the display on glancing, movement and other usage-related triggers.
* Check your global system settings that affect performance: notifications, backlight/active display timeout, when GPS is activated.
* Check [list of tested phones and watches](../Getting-Started/Phones#list-of-tested-phones) and [ask community](../Where-To-Go-For-Help/Connect-with-other-users.md) for other users experiences and reported battery lifetime.
* **We cannot guarantee that data displayed on watchface or complication is up-to-date**. In the end, it is up to Wear OS to decide when to update a watchface or a complication. Even when the AAPS app requests update, the System may decide to postpone or ignore updates to conserve battery. When in doubt and low on battery on watch - always double-check with main AAPS app on phone.

## Troubleshooting the wear app:

* On Android Wear 2.0 the watch screen does not install by itself anymore. You need to go into the playstore on the watch (not the same as the phone playstore) and find it in the category apps installed on your phone, from there you can activate it. Also enable auto update. 
* Sometimes it helps to re-sync the apps to the watch as it can be a bit slow to do so itself: Android Wear > Cog icon > Watch name > Resync apps.
* Enable ADB debugging in Developer Options (on watch), connect the watch via USB and start the Wear app once in Android Studio.
* If Complications does not update data - check first if AAPS watchfaces work at all.

## View Nightscout data

If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". Yra keletas skaitmeninių ciferblatų, kurie rodo vidutinį delta pokytį, aktyvų insuliną IOB, esamą laikiną bazinę TBR ir bazinį profilį bei CGM duomenų grafiką.

# Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to Nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.