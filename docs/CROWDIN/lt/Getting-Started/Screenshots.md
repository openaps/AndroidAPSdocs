# AndroidAPS ekranai

## Pradžios ekranas

![Pradžios ekranas V2.7](../images/Home2020_Homescreen.png)

Tai pradinis ekranas, kurį matysite paleidę AndroidAPS, ir kuriame yra visa svarbiausia informacija.

### Skiltis A - Skirtukai

* Naršyti tarp įvairių AndroidAPS modulių.
* Arba galite pakeisti ekranus, pasukant į kairę arba į dešinę.
* Rodomi skirtukai gali būti pasirenkami [Konfigūratoriuje](../Configuration/Config-Builder#tab-or-hamburger-menu).

### Skiltis B - Profilis & tikslinė glikemija

#### Dabartinis profilis

![Profile switch remaining duration](../images/Home2020_ProfileSwitch.png)

* Dabartinis profilis rodomas juostos kairėje.
* Ilgai paspaudus profilio juostą, galite pamatyti išsamią profilio informaciją arba [ perjungti profilį](../Usage/Profiles#profile-switch).
* Jei profilio perjungimas buvo atliktas konkrečiam apribotm laikui, skliausteliuose nurodomas likęs laikas minutėmis.

#### Tikslas

![Temp target remaining duration](../images/Home2020_TT.png)

* Dabartinė tikslinė glikemija rodoma juostoje dešinėje.
* Ilgai paspaudus tikslo juostą, galite nustatyti [laikiną tikslą](../Usage/temptarget.md).
* Jei nustatytas laikinas tikslas, juosta tampa geltona, o likęs laikas minutėmis rodomas skliausteliuose.

#### Dinaminio tikslo koregavimo vizualizavimas

![Visualization of dynamic target adjustment](../images/Home2020_DynamicTargetAdjustment.png)

* AAPS gali dinamiškai koreguoti tikslą pagal jautrumą, jei naudojate SMB algoritmą.
* Suaktyvinkite vieną arba abi [parinktis](../Configuration/Preferences#openaps-smb-settings) 
   * "jautrumas didina tikslą" ir/arba 
   * "rezistencija mažina tikslą" 
* Jei AAPS aptinka jautrumo padidėjimą ar sumažėjimą, tikslas pasikeičia priklausomai nuo to, kas apibrėžta profilyje. 
* Kai jis pakeičia tikslinę glikemiją, juostos fonas tampa žalias.

### Skiltis C - Glikemija & ciklo būklė

#### Dabartinis gliukozės kiekis kraujyje

* Paskutinis iš jūsų NGJ gautas gliukozės kiekis kraujyje rodomas kairėje pusėje.
* Gliukozės kiekio kraujyje reikšmės spalva atspindi jo padėtį, palyginti su nustatytu [diapazonu](../Configuration/Preferences#range-for-visualization). 
   * žalias = normos ribose
   * raudona = žemiau normos ribų
   * geltona = virš normos ribų
* Vidurinis pilkas blokas rodo minutes nuo paskutinių duomenų ir pokyčius nuo ankstesnių duomenų skaitymo, taip pat pokyčius per paskutines 15 ir 40 minučių.

#### Ciklo būklė

![Ciklo būklė](../images/Home2020_LoopStatus.png)

* Naujas ženkliukas rodo ciklo būklę:
   
   * žalias apskritimas = ciklas veikia
   * žalias apskritimas su punktyrine linija = [sustabdymas esant žemai glikemijai](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend)
   * raudonas apskritimas = ciklas išjungtas (išjungtas visiškai)
   * geltonas apskritimas = ciklas laikinai sustabdytas (nustatyta valandinė bazė leidžiama) - likęs laikas rodomas žemiau piktogramos
   * pilkas apskritimas = pompa atjungta (laikinai nėra leidžimas insulinas) - likęs laikas rodomas žemiau piktogramos
   * Oranžinis apskritimas = veikia super bolusas - likęs laikas rodomas žemiau piktogramos
   * mėlynas apskritimas su punktyrine linija = atviras ciklas

* Ilgai paspauskite apskritimo piktogramą, kad atidarytumėte meniu, leidžiantį išjungti, sustabdyti, vėl įjungti ciklą arba atjungti / vėl prijungti pompą.
   
   ![Loop status menu](../images/Home2020_LoopStatusMenu.png)

### Skiltis D - AIO, AAO, Bazė ir Jautrumas

![Sritis D](../images/Home2020_TBR.png)

* Švirkšto piktograma: aktyvus insulinas (AIO) - aktyvaus insulino kiekis jūsų kūne
   
   * Aktyvaus insulino organizme kiekis yra nulis, jei naudojama tik standartinė bazė ir nėra bolusų insulino. 
   * AIO gali būti neigiamas, jei paskutiniu metu buvo sumažinta valandinė bazė.
   * Spustelėkite ant ženkliuko, kad pamatytumėte bolusų ir bazinio insulino paskirstymą

* Kviečio grūdas: [aktyvūs angliavandeniai (AAO)](../Usage/COB-calculation.rst) - anksčiau suvalgyti ir dar neįsisavinti angliavandeniai -> piktograma mirksi (oranžinė / raudona), jei apskaičiuojama kad būtina suvartoti angliavandenių

* Violetinė linija: valandinė bazė - piktogramos pokyčiai atspindi laikinos valandinės bazės pokyčius (tiesi, kai nustatyta 100%) 
   * Spustelėkite ant piktogramos, kad peržiūrėtumėte profilio nustatytą valandinę bazę ir išsamią informaciją apie bet kokią laikiną bazę (įskaitant likusį laiką)
* Rodyklės aukštyn ir žemyn: nurodo [autosens - jautrumo nustatymo](../Usage/Open-APS-features#autosens) būseną (įjungta arba išjungta), o jautrumo reikšmė rodoma po piktograma

#### Būtini angliavandeniai

![Būtini angliavandeniai](../images/Home2020_CarbsRequired.png)

* Carbs suggestions are given when the reference design detects that it requires carbs.
* This is when the oref algorithm thinks I can't rescue you by 0 (zero) temping and you will need carbs to fix.
* The carb notifications are much more sophisticated than the bolus calculator ones. You might see carbs suggestion whilst bolus calculator does not show missing carbs.
* Carb required notifications can be pushed to Nightscout if wished, in which case an announcement will be shown and broadcast.

### Section E - Status lights

![Sritis E](../images/Home2020_StatusLights.png)

* Status lights give a visual warning for 
   * Cannula age
   * Insulin age (days reservoir is used)
   * Reservoir level (units)
   * Sensorius
   * Battery age and level (%)
* If threshold warning is exceeded, values will be shown in yellow.
* If threshold critical is exceeded, values will be shown in red.
* Settings can be made in [preferences](../Configuration/Preferences#status-lights).

### Section F - Main graph

![Sritis F](../images/Home2020_MainGraph.png)

* Graph shows your blood glucose (BG) as read from your glucose monitor (CGM). 
* Notes entered in action tab such as fingerstick calibrations and carbs entries as well as profile switches are shown here. 
* Ilgai paspaudę ant grafiko, galite pakeisti laiko skalę. You can choose 6, 12, 18 or 24 hours.
* The green area reflects your target range. It can be configured in [preferences](../Configuration/Preferences#range-for-visualization).
* Blue triangles show [SMB](../Usage/Open-APS-features#super-micro-bolus-smb) - if enabled in [preferences](../Configuration/Preferences#openaps-smb-settings).
* Optional information:
   
   * Prognozės
   * Bazė
   * Activity - insulin activity curve

#### Activate optional information

* Click the triangle on the right side of the main graph to select which information will be displayed in the main graph.
* For the main graph just the three options above the line "\---\---- Graph 1 \---\----" are available.
   
   ![Main graph setting](../images/Home2020_MainGraphSetting.png)

#### Prediction lines

* **Oranžinė** linija: [AAO](../Usage/COB-calculation.rst) (oranžinė spalva dažniausiai naudojama angliavandeniams vaizduoti)
   
   Prediction line shows where your BG (not where COB itself!) will go based on the current pump settings and assuming that the deviations due carb absorption remain constant. This line only appears if there are known COB.

* **Mėlyna** linija: AIO (ši spalva įprastai žymi insuliną)
   
   Prediction line shows what would happen under the influence of insulin only. For example if you dialled in some insulin and then didn’t eat any carbs.

* **Žydra** linija: glikemijos kitimo prognozė, jei būtų nustatyta nulinė bazė
   
   Prediction line shows how the IOB trajectory line would change if the pump stopped all insulin delivery (0% TBR).

* **Geltona** linija: [NDM](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (nedeklaruotas maistas)
   
   Unannounced meals means that a significant increase in glucose levels due to meals, adrenaline or other influences is detected. Prediction line is similar to the ORANGE COB line but it assumes that the deviations will taper down at a constant rate (by extending the current rate of reduction).

Usually your real glucose curve ends up in the middle of these lines, or close to the one which makes assumptions that closest resemble your situation.

#### Bazė

* A **solid blue** line shows the basal delivery of your pump and reflects the actual delivery over time.
* The **dotted blue** line is what the basal rate would be if there were no temporary basal adjustments (TBRs).
* In times standard basal rate is given the area under the curve is shown in dark blue.
* When the basal rate is temporarily adjusted (increased or decreased) the area under the curve is shown in light blue.

#### Aktyvumas

* **Plona geltona** linija rodo insulino aktyvumą. 
* Ji remiasi tikėtinu insulino poveikiu glikemijai, kai neveikia kiti veiksniai (pvz.: angliavandeniai).

### Section G - additional graphs

* You can activate up to four additional graphs below the main graph.
* To open settings for additional graphs click the triangle on the right side of the [main graph](../Getting-Started/Screenshots#section-f-main-graph) and scroll down.

![Additional graph settings](../images/Home2020_AdditionalGraphSetting.png)

* To add an additional graph check the box on the left side of its name (i.e. \---\---- Graph 1 \---\----).

#### Insulinas absoliučiais vienetais

* Active insulin including boluses **and basal**.

#### Aktyvus insulinas organizme

* Shows the insulin you have on board (= active insulin in your body). It includes insulin from bolus and temporary basal (**but excludes basal rates set in your profile**).
* If there were no [SMBs](../Usage/Open-APS-features#super-micro-bolus-smb), no boluses and no TBR during DIA time this would be zero.
* IOB can be negative if you have no remaining bolus and zero/low temp for a longer time.
* Decaying depends on your [DIA and insulin profile settings](../Configuration/Config-Builder#local-profile-recommended). 

#### Aktyvūs angliavandeniai

* Shows the carbs you have on board (= active, not yet decayed carbs in your body). 
* Jų nykimas priklauso nuo algoritmo apskaičiuotų nuokrypių (deviacijų). 
* Kai nustatoma didesnė angliavandenių įtaka, nei tikėtasi, sistema suleis daugiau insulino ir AIO padidės (kaip labai padidės priklauso nuo Jūsų saugumo nustatymų). 

#### Nuokrypiai

* **PILKI** stulpeliai rodo glikemijos svyravimus (nuokrypius arba deviacijas), kuriuos sukelia angliavandeniai. 
* **ŽALI** stulpeliai rodo, kad glikemija yra didesnė, nei algoritmas apskaičiavo. Green bars are used to increase resistance in [Autosens](../Usage/Open-APS-features#autosens).
* **RAUDONI** stulpeliai rodo, kad glikemija yra mažesnė, nei algoritmas apskaičiavo. Red bars are used to increase sensitivity in [Autosens](../Usage/Open-APS-features#autosens).
* **YELLOW** bars show a deviation due to UAM.

#### Jautrumas insulinui

* Shows the sensitivity that [Autosens](../Usage/Open-APS-features#autosens) has detected. 
* Tai jautrumo insulinui faktoriaus pokyčiai dėl fizinio aktyvumo, hormonų ir pan.

#### Aktyvumas

* Shows the activity of insulin, calculated by your insulin profile (it's not derivative of IOB). 
* Kreivė tuo aukštesnė, kuo insulino aktyvumo pikas arčiau.
* AIO mažėjant, aktyvumas gali tapti neigiamas. 

#### Nukrypimo koeficientas

* Internal value used in algorithm.

### Section H - Buttons

![Homescreen buttons](../images/Home2020_Buttons.png)

* Buttons for insulin, carbs and Calculator are 'always on'. 
* Other Buttons have to be setup in [preferences](../Configuration/Preferences#buttons).

#### Insulinas

![Insulin button](../images/Home2020_ButtonInsulin.png)

* To give a certain amount of insulin without using [bolus calculator](../Getting-Started/Screenhots#bolus-wizard).
* By checking the box you can automatically start your [eating soon temp target](../Configuration/Preferences#default-temp-targets).
* If you do not want to bolus through pump but record insulin amount (i.e. insulin given by syringe) check the corresponding box.

#### Angliavandeniai

![Carbs button](../images/Home2020_ButtonCarbs.png)

* To record carbs without bolusing.
* Certain [pre-set temporary targets](../Configuration/Preferences#default-temp-targets) can be set directly by checking the box.
* Time offset: When will you / have you been eaten carbs (in minutes).
* Duration: To be used for ["extended carbs"](../Usage/Extended-Carbs.rst)
* You can use the buttons to quickly increase carb amount.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](../Configuration/Preferences#ns-client).

#### Skaičiuotuvas

* See [details below](../Configuration/Screenhots#bolus-wizard)

#### Calibrations

* Sends a calibration to xDrip+ or opens Dexcom calibration dialogue.
* Turi būti aktyvuotas [Nustatymuose](../Configuration/Preferences#buttons).

#### NGJ

* Atveria xDrip+.
* Atgal mygtukas grįžta į AAPS.
* Turi būti aktyvuotas [Nustatymuose](../Configuration/Preferences#buttons).

#### Greitas vedlys

* Easily enter amount of carbs and set calculation basics.
* Details are setup in [preferences](../Configuration/Preferences#quick-wizard).

## Bolus Wizard

![Boluso patarėjas](../images/Home2020_BolusWizard.png)

Įprastai jis naudojamas maisto bolusams suleisti.

### Section I

* BG field is normally already populated with the latest reading from your CGM. Jei sensorius neveikia, šis langelis bus tuščias. 
* AV langelyje turite įvesti maisto, kurį valgysite, angliavandenių ar jų atitikmens kiekį. 
* The CORR field is if you want to modify the end dosage for some reason.
* The CARB TIME field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected. Šiame langelyje galite įvesti ir laiką su minuso ženklu, jei angliavandenius jau suvalgėte anksčiau.

### Section J

* Jei pažymėsite SUPER BOLUSO laukelį, bus suleistas papildomas insulinas, kurio kiekis lygus ateinančių 2 valandų bazei, o bazė taps nulinė. 
* Tai galbūt padės išvengti didelio glikemijos pakilimo po maisto, nes papildomai "pasiskolinama" insulino iš bazės.
* For details visit [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Section K

* Rodo apskaičiuotą bolusą. 
* Jei aktyvaus, anksčiau suleisto insulino kiekis viršija apskaičiuotą boluso kiekį, bus parodytas tik papildomai reikalingų angliavandenių kiekis.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](../Configuration/Preferences#ns-client).

### Section L

* Details of wizard's bolus calculation.
* Jūs galite nuimti žymes nuo bet kurių iš jų, tačiau normaliai neturėtumėte to daryti.
* For safety reasons the **TT box must be ticked manually** if you want the bolus wizard to calculate based on an existing temporary target.

#### AAO ir AIO kombinacijos ir jų reikšmė

* For safety reasons IOB boxed cannot be unticked when COB box is ticked as you might run the risk of too much insulin as AAPS is not accounting for what’s already given.
* If you tick COB and IOB unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account.
* Jei pažymėsite tik AIO be AAO, AAPS skaičiavimuose atsižvelgs į anksčiau suleistą ir aktyvų insuliną, tačiau ne į angliavandenius. Todėl matysite pranešimą 'trūkstami angliavandeniai'.
* If you bolus for **additional food** shortly after a meal bolus (i.e. additional desert) it can be helpful to **untick all boxes**. Tokiu būdu bus įskaičiuojami tik nauji angliavandeniai, o ne tie, kurie buvo įvesti anksčiau, nes jie nebūtinai tiksliai absorbuoti ir AIO nebūtinai juos tiksliai atitinka.

#### Neteisingo AAO kiekio nustatymas

![Lėtas angliavandenių įsisavinimas](../images/Calculator_SlowCarbAbsorbtion.png)

* Jei pasinaudoję skaičiuotuvu matote tokį perspėjimą, reiškia sistema nustatė galimai klaidingą AAO kiekį. 
* Todėl suleisdami papildomą bolusą po paskutinio valgymo rizikuojate perdozuoti! 
* Išsamesnės informacijos ieškokite [AAO apskaičiavimo puslapyje](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Insulino profilis

![Insulino profilis](../images/Screenshot_insulin_profile.png)

* This shows the activity profile of the insulin you have chosen in [config builder](../Configuration/Config-Builder#insulin). 
* VIOLETINĖ kreivė rodo, kiek insulino lieka laikui bėgant po injekcijos, nes jis pamažu ardomas, o MĖLYNA kreivė rodo, kaip kinta jo aktyvumas.
* The important thing to note is that the decay has a long tail. 
* Įprastai naudodami pompą Jūs tikriausiai skaičiuodavote, kad insulinas išnyksta po maždaug 3.5 val. 
* Tačiau uždarame cikle "uodegos" yra labai reikšmingos, nes skaičiavimai yra žymiai preciziškesni, todėl net mažiausi insulino likučiai turi būti įskaičiuojami.

Išsamiau apie skirtingus insulino tipus, aktyvumo profilius ir kam viso to reikia, galite paskaityti čia: [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

Jūs taip pat galite perskaityti puikų blogo straipsnį čia: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And even more at: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Pompos statusas

![Pompos statusas](../images/Screenshot_PumpStatus.png)

* Different information on pump status. Displayed information depends on your pump model.
* See [pumps page](../Hardware/pumps.rst) for details.

## Priežiūra

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records.

### Review carb calculation

![Review carb calculation on treatment tab](../images/Screenshots_TreatCalc.png)

* If you have used the [Bolus Wizard](../Getting-Started/Screenshots#bolus-wizard) to calculate insulin dosage you can review this calculation later on treatments tab.
* Just press the green Calc link. (Depending on pump used insulin and carbs can also be shown in one single line in treatments.)

### Angliavandenių korekcija

![Įrašai 1 ar 2 eilutėse](../images/Treatment_1or2_lines.png)

Įrašų skiltis gali būti naudojama neteisingam angliavandenių kiekiui ištaisyti (pvz., jei pervertinote ar per mažai įvertinote angliavandenių kiekį).

1. Patikrinkite ir įsidėmėkite esamą aktyvių angliavandenių AAO ir aktyvaus insulino AIO kiekį, rodomą pagrindiniame ekrane.
2. Priklausomai nuo pompos modelio, angliavandeniai rodomi kartu su insulinu vienoje eilutėje arba kaip atskiras įrašas (pvz., Dana RS).
3. Ištrinkite neteisingo angliavandenių kiekio įrašą.
4. Patikrinkite aktyvių angliavandenių kiekio AAO įrašą pagrindiniame ekrane - šitaip įsitikinkite, kad angliavandeniai buvo sėkmingai ištrinti.
5. Atlikite tą patį su aktyviu insulinu AIO, jei skirtuke „Įrašai“ matote angliavandenius ir insuliną vienoje eilutėje.
   
   -> Jei angliavandeniai nėra ištrinti, kaip nurodyta (6.), ir įvedate papildomų angliavandenių, tikėtina, kad aktyvių angliavandenių AAO bus per daug, ir dėl to gali būti suleista per daug insulino.

6. Įvesite teisingą angliavandenių kiekį per AV mygtuką pagrindiniame ekrane ir įsitikinkite, kad teisingai įvedėte valgymo laiką.

7. Jei skirtuke „Įrašai“ matote vienoje eilutėje angliavandenius ir insuliną, taip pat turite iš naujo įvesti insulino kiekį. Atkreipkite dėmesį į tinkamo laiko pasirinkimą ir tada pradžios ekrane patikrinkite aktyvaus insulino AIO duomenis.

## Loop, AMA / SMB

* These tabs show details about the algorithm's calculations and why AAPS acts the way it does.
* Calculations are each time the system gets a fresh reading from the CGM.
* For more details see [APS section on config builder page](../Configuration/Config-Builder#aps).

## Profilis

![Profilis](../images/Screenshots_Profile.png)

* Profile contains information on your individual diabetes settings:
   
   * DIA (Duration of Insulin Action)
   * IC or I:C: Insulin to Carb ratio
   * ISF: Insulin Sensitivity Factor
   * Valandinė bazė
   * Target: Blood glucose level that you want AAPS to be aiming for

* You can either use a [local profile](../Configuration/Config-Builder#local-profile-recommended) that can be edited on your smartphone or a [Nightscout profile](../Configuration/Config-Builder#ns-profile) which must be edited on your NS page and transferred to your phone afterwards. For details see the corresponding sections on the [config builder page](../Configuration/Config-Builder.md).

## Terapija

History of the following treatments:

* Bolus & carbs -> option to [remove entries](../Getting-Started/Screenshots#carb-correction) to correct history
* [Ištęstas bolusas](../Usage/Extended-Carbs#id1)
* Temporary basal rate
* [Laikinas tikslas](../Usage/temptarget.md)
* [Profilio keitimas](../Usage/Profiles.md)
* [Careportal](../Usage/CPbefore26#careportal-discontinued) - notes entered through action tab and notes in dialogues

## BG Source - xDrip, Dexcom App (pateched)...

![BG Source tab - here xDrip](../images/Screenshots_BGSource.png)

* Depending on your BG source settings this tab is named differntly.
* Shows history of CGM readings and offers option to remove reading in case of failure (i.e. compression low).

## NSClient

![NSClient](../images/Screenshots_NSClient.png)

* Displays status of the connection with your Nightscout site.
* Settings are made in [preferences](../Configuration/Preferences#nsclient). You can open the corresponding section by clicking the cog wheel on the top right side of the screen.
* For troubleshooting see this [page](../Usage/Troubleshooting-NSClient.md).