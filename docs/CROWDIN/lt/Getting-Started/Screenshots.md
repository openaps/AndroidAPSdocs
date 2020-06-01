# AndroidAPS ekranai

## Pradžios ekranas

![Pradžios ekranas V2.5](../images/Screenshot_Home_screen_V2_5_1.png)

Tai pradinis ekranas, kurį matysite paleidę AndroidAPS, ir kuriame yra visa svarbiausia informacija.

### Sritis A

* leidžia naviguoti tarp skirtingų AndroidAPS modulių braukiant į kairę arba dešinę

### Sritis B

* leidžia pakeisti ciklo būseną (atviras ciklas, uždaras ciklas, ciklo sustabdymas ir kt.)
* peržiūrėti dabartinį profilį ir atlikti [profilio perjungimą](../Usage/Profiles.md)
* peržiūrėti esamą glikemijos tikslą ir nustatyti [laikiną tikslą](../Usage/temptarget.md).

Palaikykite ilgai prispaudę bet kurį mygtuką, jei norite pakeisti nustatymus. Pvz.: palaikykite ilgai prispaudę tikslo laukelį (nuotraukoje "100"), jei norite nustatyti laikiną tikslą.

### Sritis C

* rodomi naujausi glikemijos duomenys, pateikti NGJ
* laikas nuo paskutinio duomenų gavimo
* pokyčiai per paskutines 15 ir 40 minučių
* dabartinė valandinė bazė, įskaitant visus sistemos nustatytos laikinos bazės (LB) duomenis
* aktyvus insulinas organizme (AIO)
* aktyvūs angliavandeniai organizme (AAO)

Pasirinktiniai [spalvoti indikatoriai](../Configuration/Preferences#overview) (KAT | INS | REZ | SEN | BAT) suteikia vizualinę informaciją ir perspėjimus apie kateterio ir insulino naudojimo laiką, senkantį rezervuarą, sensoriaus ar baterijos naudojimo trukmę.

Aktyvaus insulino organizme kiekis yra nulis, jei naudojama tik standartinė bazė ir nėra bolusų insulino. Skaičiai laužtiniuose skliaustuose rodo, kiek aktyvaus insulino yra iš buvusių bolusų ir kiek - iš bazės pakeitimų, kuriuose atliko AAPS. Antras skaičius gali būti su minuso ženklu, jei kurį laiką sistema bazę mažino arba buvo išjungusi.

### Sritis D

Paspauskite mažą rodyklę D srities dešinėje pusėje ir pasirinkite, kokią informaciją matysite grafikuose žemiau.

### Sritis E

Rodoma Jūsų sensoriaus (NGJ) pateikiama kraujo gliukozės kiekio (KG) kreivė bei Nightscout perspėjimai, pvz.: kalibracijos ar įvesti angliavandeniai.

Ilgai paspaudę ant grafiko, galite pakeisti laiko skalę. Galite matyti 6, 8, 12, 18 ar 24 val. duomenis.

Jei pasirinkote, taip pat matysite gliukozės kitimo prognozės kreives.

* **Orange** line: [COB](../Usage/COB-calculation.rst) (colour is used generally to represent COB and carbs)
   
   Prediction line shows where your BG (not where cob itself!) will go based on the current pump settings and assuming that the deviations due carb absorption remain constant. This line only appears if there are known COB.

* **Dark blue** line: IOB (colour is used generally to represent IOB and insulin)
   
   Prediction line shows what would happen under the influence of insulin only. For example if you dialled in some insulin and then didn’t eat any carbs.

* **Light blue** line: zero-temp (predicted BG if temporary basal rate at 0% would be set)
   
   Prediction line shows how the IOB trajectory line would change if the pump stopped all insulin delivery (0% TBR).

* **Dark yellow** line: [UAM](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (un-announced meals)
   
   Unannounced meals means that a significant increase in glucose levels due to meals, adrenaline or other influences is detected. Prediction line is similar to the ORANGE COB line but it assumes that the deviations will taper down at a constant rate (by extending the current rate of reduction).

Usually your real glucose curve ends up in the middle of these lines, or close to the one which makes assumptions that closest resemble your situation.

**Ištisinė mėlyna** linija rodo bazės tiekimą. **Punktyrinė mėlyna** linija rodo bazę, kuri suprogramuota pompoje ir kuri būtų leidžiama, jei programa nieko nekeistų. Ištisinė linija yra reali bazė su visais pokyčiais (LB).

**Plona geltona** linija rodo insulino aktyvumą. Ji remiasi tikėtinu insulino poveikiu glikemijai, kai neveikia kiti veiksniai (pvz.: angliavandeniai).

### Sritis F

Šią sritį galite keisti naudodamiesi D srities pasirinkimais.

* **Aktyvus insulinas organizme** (mėlynas grafikas): rodo, kiek aktyvaus organizmo yra Jūsų organizme. Jei nebuvo laikinų bazių, SMB ir bolusų, AIO yra lygus nuliui. AIO nykimas priklauso nuo IVT ir insulino profilio nustatymų. 
* **Aktyvūs angliavandeniai organizme** (oranžinis grafikas): rodo, kiek Jūsų organizme yra dar aktyvių angliavandenių. Jų nykimas priklauso nuo algoritmo apskaičiuotų nuokrypių (deviacijų). Kai nustatoma didesnė angliavandenių įtaka, nei tikėtasi, sistema suleis daugiau insulino ir AIO padidės (kaip labai padidės priklauso nuo Jūsų saugumo nustatymų). 
* **Nuokrypiai**: 
   * **PILKI** stulpeliai rodo glikemijos svyravimus (nuokrypius arba deviacijas), kuriuos sukelia angliavandeniai. 
   * **ŽALI** stulpeliai rodo, kad glikemija yra didesnė, nei algoritmas apskaičiavo. 
   * **RAUDONI** stulpeliai rodo, kad glikemija yra mažesnė, nei algoritmas apskaičiavo.
* **Jautrumas** (balta linija): Ji parodo jautrumo lygi ir kas [Automatinis jautrumas](../Usage/Open-APS-features#autosens) aptiktas. Tai jautrumo insulinui faktoriaus pokyčiai dėl fizinio aktyvumo, hormonų ir pan.
* **Aktyvumas** (geltona linija): tai insulino aktyvumas, apskaičiuotas pagal insulino profilio nustatymus (jis nėra išskaičiuotas iš AIO). Kreivė tuo aukštesnė, kuo insulino aktyvumo pikas arčiau. AIO mažėjant, aktyvumas gali tapti neigiamas. 

### Sritis G

Čia galite suleisti bolusą (įprastai tam naudosite Skaičiuotuvo mygtuką) ir įvesti kalibracijas. Čia taip pat bus matomas Greitojo vedlio mygtukas, jei jis sukonfigūruotas [Konfigūracijoje](../Configuration/Config-Builder#quickwizard-settings).

## Skaičiuotuvas

![Skaičiuotuvas](../images/Screenshot_Bolus_calculator.png)

Įprastai jis naudojamas maisto bolusams suleisti.

### Sritis A

vieta, kur įvedate informaciją apie norimą bolusą. KG (kraujo gliukozės) langelyje matosi paskutinis sensoriaus rodmuo. Jei sensorius neveikia, šis langelis bus tuščias. AV langelyje turite įvesti maisto, kurį valgysite, angliavandenių ar jų atitikmens kiekį. KOREKCIJOS langelyje galite pakeisti pasiūlytą insulino dozę, AV LAIKO langelyje galite nurodyti sistemai, kad valgysite tik po kažkurio laiko, todėl ir bolusas bus atidėtas. Šiame langelyje galite įvesti ir laiką su minuso ženklu, jei angliavandenius jau suvalgėte anksčiau.

Jei pažymėsite SUPER BOLUSO laukelį, bus suleistas papildomas insulinas, kurio kiekis lygus ateinančių 2 valandų bazei, o bazė taps nulinė. Tai galbūt padės išvengti didelio glikemijos pakilimo po maisto, nes papildomai "pasiskolinama" insulino iš bazės.

### Sritis B

rodo apskaičiuotą bolusą. Jei aktyvaus, anksčiau suleisto insulino kiekis viršija apskaičiuotą boluso kiekį, bus parodytas tik papildomai reikalingų angliavandenių kiekis.

### Sritis C

rodo įvairius elementus, kurie naudojami apskaičiuojant bolusą. Jūs galite nuimti žymes nuo bet kurių iš jų, tačiau normaliai neturėtumėte to daryti.

### AAO ir AIO kombinacijos ir jų reikšmė

<ul>
    <li>Jei pažymėsite ir AAO, ir AIO, į skaičiavimus bus įtraukti visi dar aktyvūs angliavandeniai ir visas aktyvus insulinas (suleistas kaip laikina bazė ar SMB)</li>
    <li>Jei pažymėsite tik AAO, bet ne AIO, anksčiau suleistas ir dar aktyvus insulinas nebus įskaičiuotas, todėl rizikuojate perdozuoti. </li>
    <li>Jei pažymėsite tik AIO be AAO, AAPS skaičiavimuose atsižvelgs į anksčiau suleistą ir aktyvų insuliną, tačiau ne į angliavandenius. Todėl matysite pranešimą 'trūksta angliavandenių'.
</ul>

Jei norite suleisti bolusą papildomam maistui, kurį valgėte tuoj po jau įvesto maisto (pvz.: užsimanėte deserto), naudinga nuimti žymes nuo visų laukelių. Tokiu būdu bus įskaičiuojami tik nauji angliavandeniai, o ne tie, kurie buvo įvesti anksčiau, nes jie nebūtinai tiksliai absorbuoti ir AIO nebūtinai juos tiksliai atitinka.

### Neteisingo AAO kiekio nustatymas

![Lėtas angliavandenių įsisavinimas](../images/Calculator_SlowCarbAbsorbtion.png)

Jei pasinaudoję skaičiuotuvu matote tokį perspėjimą, reiškia sistema nustatė galimai klaidingą AAO kiekį. Todėl suleisdami papildomą bolusą po paskutinio valgymo rizikuojate perdozuoti! Išsamesnės informacijos ieškokite [AAO apskaičiavimo puslapyje](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Insulino profilis

![Insulino profilis](../images/Screenshot_insulin_profile.png)

Čia rodomas Jūsų pasirinkto insulino aktyvumo profilis. VIOLETINĖ kreivė rodo, kiek insulino lieka laikui bėgant po injekcijos, nes jis pamažu ardomas, o MĖLYNA kreivė rodo, kaip kinta jo aktyvumas.

Turėtumėte naudoti vieną iš Oref profilių, kuriuose insulino veikimas turi ilgą "uodegą". Įprastai naudodami pompą Jūs tikriausiai skaičiuodavote, kad insulinas išnyksta po maždaug 3.5 val. Tačiau uždarame cikle "uodegos" yra labai reikšmingos, nes skaičiavimai yra žymiai preciziškesni, todėl net mažiausi insulino likučiai turi būti įskaičiuojami.

Išsamiau apie skirtingus insulino tipus, aktyvumo profilius ir kam viso to reikia, galite paskaityti čia: [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

Jūs taip pat galite perskaityti puikų blogo straipsnį čia: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

Ir dar daugiau čia: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Pompos statusas

![Pompos statusas](../images/Screenshot_pump_Combo.png)

Čia matome insulino pompos (pavyzdyje Accu-Chek Combo) statusą. Informacija aiški savaime. Jei ilgai prispausite ISTORIJOS mygtuką, sistema nuskaitys Jūsų pompos istoriją, taip pat ir bazės profilį. Prisiminkite, kad Combo pompoje galimas tik vienas bazės profilis.

## Priežiūra

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records.

### Angliavandenių korekcija

Įrašų skiltis gali būti naudojama neteisingam angliavandenių kiekiui ištaisyti (pvz., jei pervertinote ar per mažai įvertinote angliavandenių kiekį).

1. Patikrinkite ir įsidėmėkite esamą aktyvių angliavandenių AAO ir aktyvaus insulino AIO kiekį, rodomą pagrindiniame ekrane.
2. Priklausomai nuo pompos modelio, angliavandeniai rodomi kartu su insulinu vienoje eilutėje arba kaip atskiras įrašas (pvz., Dana RS).
   
   ![Įrašai 1 ar 2 eilutėse](../images/Treatment_1or2_lines.png)

3. Ištrinkite neteisingo angliavandenių kiekio įrašą.

4. Patikrinkite aktyvių angliavandenių kiekio AAO įrašą pagrindiniame ekrane - šitaip įsitikinkite, kad angliavandeniai buvo sėkmingai ištrinti.
5. Atlikite tą patį su aktyviu insulinu AIO, jei skirtuke „Įrašai“ matote angliavandenius ir insuliną vienoje eilutėje.
   
   -> Jei angliavandeniai nėra ištrinti, kaip nurodyta (6.), ir įvedate papildomų angliavandenių, tikėtina, kad aktyvių angliavandenių AAO bus per daug, ir dėl to gali būti suleista per daug insulino.

6. Įvesite teisingą angliavandenių kiekį per AV mygtuką pagrindiniame ekrane ir įsitikinkite, kad teisingai įvedėte valgymo laiką.

7. Jei skirtuke „Įrašai“ matote vienoje eilutėje angliavandenius ir insuliną, taip pat turite iš naujo įvesti insulino kiekį. Atkreipkite dėmesį į tinkamo laiko pasirinkimą ir tada pradžios ekrane patikrinkite aktyvaus insulino AIO duomenis.

## LOOP, MA, AMA, SMB

Įprastai Jums nereikėtų rūpintis šių langų įrašais - tai tik OpenAPS algoritmo skaičiavimų rezultatai, besikeičiantys kaskart atsinaujinus sensoriaus duomenims. Jie aptariami kitose instrukcijose.

## Profilis

![Profilis](../images/Screenshot_profile.png)

AndroidAPS gali veikti įvairių profilių nustatymų pagrindu. Dažnai (kaip parodyta pavyzdyje) naudojamas Nightscout profilis, kuris įkeliamas per Nightscout client įskiepį ir čia tik rodomas, bet negali būti keičiamas. Jei norite atlikti pakeitimus, darykite tai savo Nightscout puslapyje ir tada AndroidAPS atlikite [profilio keitimą](../Usage/Profiles.md), kad aktyvuotumėte pakeitimus. Tokie duomenys, kaip bazės pakeitimas ir pan., po to bus automatiškai nukopijuoti į pompą.

**IVT:** insulino veikimo trukmė, kaip aprašyta skyrelyje "Insulino profilis".

**IA:** insulino ir angliavandenių santykis. Gali būti nustatomi skirtingi IA skirtingu paros metu.

**JIF:** jautrumo insulinui faktorius - tai skaičius, kuris parodo, kiek mmol/l sumažina kraujo gliukozę suleistas 1 V insulino.

**Valandinė bazė:** tai bazės profilis Jūsų pompoje.

**Tikslas:** tai gliukozės vertė, kurios algoritmas sieks visą laiką. Jūs galite nustatyti skirtingus tikslus skirtingiems paros laikotarpiams. Jūs taip pat galite nustatyti tikslinį diapazoną (nuo-iki), tačiau tada algoritmas atliks pakeitimus tik tada, kai prognozė rodys, kad glikemija "išeis" iš numatytų ribų. Tokiu atveju sistema reaguos žymiai vangiau ir Jums bus sunkiau pasiekti stabilią glikemiją.

## Terapija, xDrip, NSClient

Čia rasite paprastus įrašus apie terapiją (bolusus ir angliavandenius), xDrip žinutes ir pranešimus, nusiųstus į Nightscout per įdiegtą Nightscout Client. Įprastai Jūs neturėtumėte rūpintis šiais įrašais, nebent iškyla nenumatyta problema.

## Konfigūracija

![Konfigūracija](../images/Screenshot_config_builder.png)

Čia Jūs konfigūruosite savo AndroidAPS. Pavyzdyje matote įprastą derinį, kai naudojama Combo pompa, Dexcom G5 su xDrip+, NovoRapid insulinas su Oref profiliu ir duomenų perdavimas į Nightscout debesijos serverį.

Pažymėti laukeliai dešinėje reiškia, kad tam tikras modulis bus rodomas viršutinėje meniu eilutėje (žr. Pradžios ekrano A sritis), o dantračio simbolis leidžia patekti į konkretaus modulio nustatymus, jei tokie yra.

## Parametrai ir Nustatymai

Dešiniajame viršutiniame kampe rasite tris vertikalius taškus. Paspaudę pateksite į programos parametrų, istorijos peržiūros, sąrankos vedlio, programos informacijos pasirinkimus bei rasite mygtuką "išeiti", kuris uždaro AAPS programą.