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

![Profilio pakeitimas, likęs laikas](../images/Home2020_ProfileSwitch.png)

* Dabartinis profilis rodomas juostos kairėje.
* Short press profile bar to view profile details
* Long press profile bar to [switch between different profiles](../Usage/Profiles#profile-switch).
* If profile switch was made with duration remaining time in minutes is shown in brackets.

#### Tikslas

![Laikinas tikslas, likęs laikas](../images/Home2020_TT.png)

* Dabartinė tikslinė glikemija rodoma juostoje dešinėje.
* Short press target bar to set a [temporary target](../Usage/temptarget.md).
* Jei nustatytas laikinas tikslas, juosta tampa geltona, o likęs laikas minutėmis rodomas skliausteliuose.

#### Dinaminio tikslo koregavimo vizualizavimas

![Dinaminio tikslo koregavimo vizualizavimas](../images/Home2020_DynamicTargetAdjustment.png)

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

* Short press or Long press the icon to open the Loop dialog to switch loop mode (Close, Low Glucose Suspend, Open or Disable), suspend / re-enable loop or disconnect / reconnect pump.
   
   * If short press on Loop icon, a validation is required after selection in Loop Dialog
   
   ![Ciklo būsenos meniu](../images/Home2020_Loop_Dialog.png)

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

* Angliavandenių pasiūlymai pateikiami, kai algoritmas nustato, kad reikia papildomų angliavandenių.
* Tai yra tada, kai oref algoritmas mano, kad negali sustabdyti glikemijos kritimo vien nustačius 0% laikiną bazę, o norint jus apsaugoti nuo hipoglikemijos, reikia suvalgyti šiek tiek angliavandenių.
* Angliavandenių apskaičiavimo pranešimai yra daug sudėtingesni nei skaičiuotuvo (boluso patarėjo) pranešimai. Galite pamatyti angliavandenių pasiūlymą, o Skaičiuotuvas (boluso vedlys) nerodo trūkstamų angliavandenių.
* Jei reikia, reikalaujamų angliavandenių pranešimai gali būti siunčiami Nightscout, tokiu atveju pranešimas bus rodomas ir perduodamas.

### Skiltis E - Būklės indikatoriai

![Sritis E](../images/Home2020_StatusLights.png)

* Būsenos indikatoriai pateikia vizualų įspėjimą 
   * Kateterio amžius
   * Insulino amžius (kiek dienų yra naudojamas rezervuaras)
   * Rezervuaro lygis (vienetais)
   * Sensorius
   * Baterijos amžius ir lygis (%)
* Jei pasiekiamas lygis, dėl kurio reikia atkreipti dėmesį, reikšmės bus rodomos geltonai.
* Jei pasiekiamas lygis, dėl kurio būtina atkreipti dėmesį, reikšmės bus rodomos raudonai.
* Nustatymai atliekami [Nustatymuose](../Configuration/Preferences#status-lights).

### Skiltis G - Pagrindinis grafikas

![Sritis F](../images/Home2020_MainGraph.png)

* Grafike rodomas gliukozės kiekis kraujyje (KG), kurį perduoda gliukozės kiekio kraujyje jutiklis (NGJ). 
* Čia rodomos veiksmų skirtuke įvestos pastabos, tokios kaip kalibravimas, angliavandenių įrašai ir profilio pakeitimai. 
* Ilgai paspaudę ant grafiko, galite pakeisti laiko skalę. Jūs galite pasirinkti 6, 12, 18 ar 24 valandų duomenis.
* Žalioji zona atspindi jūsų tikslinę sritį. Ji gali būti konfigūruojama [Nustatymuose](../Configuration/Preferences#range-for-visualization).
* Mėlyni trikampiai rodo [SMB](../Usage/Open-APS-features#super-micro-bolus-smb) - jei jie aktyvuoti [Nustatymuose](../Configuration/Preferences#openaps-smb-settings).
* Papildoma informacija:
   
   * Prognozės
   * Bazė
   * Aktyvumas - insulino aktyvumo kreivė

#### Papildomos informacijos aktyvavimas

* Spustelėkite trikampį, esantį dešinėje pagrindinio grafiko pusėje, kad pasirinktumėte informaciją, kuri bus rodoma pagrindiniame grafike.
* Pagrindiniam grafikui galimi tik trys variantai, esantys virš eilutės „\---\---- 1 grafikas\---\----“.
   
   ![Pagrindinio grafiko nustatymai](../images/Home2020_MainGraphSetting.png)

#### Prognozavimo kreivės

* **Oranžinė** linija: [AAO](../Usage/COB-calculation.rst) (oranžinė spalva dažniausiai naudojama angliavandeniams vaizduoti)
   
   Ši prognozavimo kreivė parodo, kaip jūsų KG (be aktyvių angliavandenių) turėtų keistis, atsižvelgiant į jūsų dabartinius pompos nustatymus, darant prielaidą, kad nukrypimai nuo angliavandenių įsisavinimo išlieka pastovūs. Ši kreivė rodoma tik tuo atveju, jei yra žinomi AAO.

* **Mėlyna** linija: AIO (ši spalva įprastai žymi insuliną)
   
   Ši prognozavimo kreivė parodo, kokia gali būti glikemija veikiant tik insulinui. Pavyzdžiui, jei susileidote insulino, bet nevalgėte angliavandenių.

* **Žydra** linija: glikemijos kitimo prognozė, jei būtų nustatyta nulinė bazė
   
   Ši prognozavimo kreivė parodo, kaip keisis AIO kreivė, jei pompa visiškai sustabdys insulino leidimą (0% TBR).

* **Geltona** linija: [NDM](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (nedeklaruotas maistas)
   
   Nedeklaruotas maistas - reikšmingo glikemijos kilimo dėl neįvesto maisto, adrenalino ar kito poveikio aptikimas. Prognozuojama kreivė yra panaši į ORANŽINĘ AAO kreivę, tačiau daroma prielaida, kad nuokrypiai mažės pastoviu greičiu (didinant dabartinį kritimo greitį).

Paprastai faktinė glikemijos kreivė baigsis šių eilučių viduryje arba netoli tos linijos, kuri geriausiai atspindi jūsų tikrąją situaciją.

#### Bazė

* Vientisa **mėlyna linija** rodo valandinę bazę, nustatytą pompoje, ir atspindi aktualų insulino suleidimą per tam tikrą laiką.
* Brūkšniuota **mėlyna linija** būtų buvusi tokia, kokia turėjo būti nustatyta valandinė bazė, jei nebūtų laikinų bazių (TBR) koregavimų.
* Tuo metu, kai leidžiama nustatyta valandinė bazė, plotas po kreive rodomas tamsiai mėlyna spalva.
* Laikinai koregavus (padidinus ar sumažinus) valandinę bazę, plotas po kreive rodomas šviesiai mėlyna spalva.

#### Aktyvumas

* **Plona geltona** linija rodo insulino aktyvumą. 
* Ji remiasi tikėtinu insulino poveikiu glikemijai, kai neveikia kiti veiksniai (pvz.: angliavandeniai).

### Skiltis G - papildomi grafikai

* Jūs galite aktyvuoti iki keturių papildomų grafikų žemiau pagrindinio grafiko.
* Norėdami atidaryti papildomų grafikų nustatymus, spustelėkite trikampį dešinėje [pagrindinio grafiko](../Getting-Started/Screenshots#section-f-main-graph) pusėje ir slinkite žemyn.

![Papildomi grafiko nustatymai](../images/Home2020_AdditionalGraphSetting.png)

* Norėdami pridėti papildomą grafiką, pažymėkite langelį kairėje jo pavadinimo pusėje (pvz., \---\--- 1 grafikas \-----).

#### Insulinas absoliučiais vienetais

* Aktyvus insulinas, įskaitant bolusus **ir bazę**.

#### Aktyvus insulinas organizme

* Parodo, kiek insulino turite suleista (= aktyvus insulinas jūsų organizme). Į jį įeina insulino bolusas ir laikina bazė (**bet neįtraukiama valandinė bazė, nustatyta jūsų profilyje**).
* Jei IVT laikotarpiu nebūtų [SMB](../Usage/Open-APS-features#super-micro-bolus-smb), bolusų ir laikinų bazių, aktyvus insulinas būtų lygus nuliui.
* AIO gali būti neigiamas, jei nebėra aktyvių bolusų ir ilgesnį laiką buvo nustatyta nulinė/žema laikina bazė.
* Insulino suskaidymas organizme priklauso nuo jūsų [IVT ir insulino profilio nustatymų](../Configuration/Config-Builder#local-profile-recommended). 

#### Aktyvūs angliavandeniai

* Rodo suvartotus angliavandenius (= aktyvūs, dar neįsisavinti angliavandeniai jūsų organizme). 
* Jų nykimas priklauso nuo algoritmo apskaičiuotų nuokrypių (deviacijų). 
* Kai nustatoma didesnė angliavandenių įtaka, nei tikėtasi, sistema suleis daugiau insulino ir AIO padidės (kaip labai padidės priklauso nuo Jūsų saugumo nustatymų). 

#### Nuokrypiai

* **PILKI** stulpeliai rodo glikemijos svyravimus (nuokrypius arba deviacijas), kuriuos sukelia angliavandeniai. 
* **ŽALI** stulpeliai rodo, kad glikemija yra didesnė, nei algoritmas apskaičiavo. Žalius stulpelius naudoja [Autosens](../Usage/Open-APS-features#autosens), kad padidintų atsparumą.
* **RAUDONI** stulpeliai rodo, kad glikemija yra mažesnė, nei algoritmas apskaičiavo. Raudonąsias juostas naudoja [Autosens](../Usage/Open-APS-features#autosens), kad padidintų jautrumą.
* **GELTONUOSE** stulpeliuose rodomas nuokrypis dėl nedeklaruoto maisto NDM.
* **BLACK** bars show small deviations not taken into account for sensitivity

#### Jautrumas insulinui

* Rodo jautrumą, kurį aptinka [Autosens](../Usage/Open-APS-features#autosens). 
* Tai jautrumo insulinui faktoriaus pokyčiai dėl fizinio aktyvumo, hormonų ir pan.

#### Aktyvumas

* Rodo insulino aktyvumą, apskaičiuotą pagal jūsų insulino profilį (tai nėra AIO išraiška). 
* Kreivė tuo aukštesnė, kuo insulino aktyvumo pikas arčiau.
* AIO mažėjant, aktyvumas gali tapti neigiamas. 

#### Nukrypimo koeficientas

* Algoritme naudojama vidinė vertė.

### Skiltis H - Mygtukai

![Pagrindinio ekrano mygtukai](../images/Home2020_Buttons.png)

* Visada yra rodomi insulino, angliavandenių ir skaičiuotuvo mygtukai. 
* Kiti mygtukai turi būti nustatyti [Nustatymuose](../Configuration/Preferences#buttons).

#### Insulinas

![Insulino mygtukas](../images/Home2020_ButtonInsulin.png)

* Tam tikrą insulino kiekį suleisti galima nenaudojant [boluso skaičiuotuvo](../Getting-Started/Screenhots#bolus-wizard).
* Pažymėję langelį galite automatiškai inicijuoti savo [netrukus valgysiu laikiną tikslą](../Configuration/Preferences#default-temp-targets).
* Jei nenorite suleisti bolusą per pompą, bet tiesiog įrašyti insulino suleidimą (pvz., švirkštu ar penu), pažymėkite atitinkamą langelį.

#### Angliavandeniai

![Angliavandenių mygtukas](../images/Home2020_ButtonCarbs.png)

* Naudojama angliavandenių įvedimui be boluso suleidimo.
* Kai kuriuos [iš anksto nustatytus laikinus tikslus](../Configuration/Preferences#default-temp-targets) galima pasirinkti tiesiog pažymint langelį.
* Laiko poslinkis: kai valgysite/ruošiatės valgyti angliavandenius (minutėmis).
* Trukmė: naudojama [ištęstiems angliavandeniams](../Usage/Extended-Carbs.rst)
* Mygtukais galite patogiai greitai padidinti angliavandenių kiekį.
* Pastabos bus įkeltos į Nightscout - priklausomai nuo jūsų [NS client](../Configuration/Preferences#ns-client) nustatymų.

#### Skaičiuotuvas

* See Bolus Wizard [section below](../Configuration/Screenhots#bolus-wizard)

#### Kalibravimas

* Siunčia kalibraciją į xDrip+ arba atidaro Dexcom kalibracijos langą.
* Turi būti aktyvuotas [Nustatymuose](../Configuration/Preferences#buttons).

#### NGJ

* Atveria xDrip+.
* Atgal mygtukas grįžta į AAPS.
* Turi būti aktyvuotas [Nustatymuose](../Configuration/Preferences#buttons).

#### Greitas vedlys

* Lengvai įveskite angliavandenių kiekį ir nustatykite skaičiavimo parametrus.
* Nustatymo parametrai koreguojami [Nustatymuose](../Configuration/Preferences#quick-wizard).

## Boluso skaičiuotuvas

![Boluso patarėjas](../images/Home2020_BolusWizard_v2.png)

Įprastai jis naudojamas maisto bolusams suleisti.

### Skiltis I

* KG (kraujo gliukozės) langelyje matosi paskutinis sensoriaus rodmuo. Jei sensorius neveikia, šis langelis bus tuščias. 
* AV langelyje turite įvesti maisto, kurį valgysite, angliavandenių ar jų atitikmens kiekį. 
* CORR laukas yra, jei norite pakeisti galutinę dozę dėl kokios nors priežasties.
* Laukas Laiko poslinkis skirtas išankstiniam bolusui, todėl galite nurodyti, kad angliavandeniai bus valgomi vėliau. Šiame langelyje galite įvesti ir laiką su minuso ženklu, jei angliavandenius jau suvalgėte anksčiau.

#### Eating reminder

* For carbs in the future the alarm checkbox can be selected (and is by default when a time in the future is entered) so that you can be reminded at a time in the future of when to eat the carbs you have input into AndroidAPS
   
   ![BolusWizard with Eating Reminder](../images/Home2021_BolusWizard_EatingReminder.png)

### Skiltis J

* SUPER BOLUS is where the basal insulin for the next two hours is added to the immediate bolus and a zero TBR is issued for the following two hours to take back the extra insulin. 
* The idea is to deliver the insulin sooner and hopefully reduce spikes.
* For details visit [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Skiltis K

* Shows the calculated bolus. 
* If the amount of insulin on board already exceeds the calculated bolus then it will just display the amount of carbs still required.
* Pastabos bus įkeltos į Nightscout - priklausomai nuo jūsų [NS client](../Configuration/Preferences#ns-client) nustatymų.

### Skiltis L

* Details of wizard's bolus calculation.
* You can deselect any that you do not want to include but you normally wouldn't want to.
* For safety reasons the **TT box must be ticked manually** if you want the bolus wizard to calculate based on an existing temporary target.

#### Combinations of COB and IOB and what they mean

* For safety reasons IOB boxed cannot be unticked when COB box is ticked as you might run the risk of too much insulin as AAPS is not accounting for what’s already given.
* If you tick COB and IOB unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account.
* If you tick IOB without COB, AAPS takes account of already delivered insulin but won’t cover that off against any carbs still to be absorbed. This leads to a 'missing carbs' notice.
* If you bolus for **additional food** shortly after a meal bolus (i.e. additional desert) it can be helpful to **untick all boxes**. This way just the new carbs are being added as the main meal won't necessarily be absorbed so IOB won't match COB accurately shortly after a meal bolus.

#### Wrong COB detection

![Lėtas angliavandenių įsisavinimas](../images/Calculator_SlowCarbAbsorbtion.png)

* If you see the warning above after using bolus wizard, AndroidAPS has detected that the calculated COB value maybe wrong. 
* So, if you want to bolus again after a previous meal with COB you should be aware of overdosing! 
* For details see the hints on [COB calculation page](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Action tab

![Veiksmų skirtukas](../images/Home2021_Action.png)

### Actions - section M

* Button [profile switch](../Usage/Profiles#profile-switch) as an alternative to pressing the [current profile](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button [temporary target](../Usage/temptarget#temp-targets) as an alternative to pressing the [current target](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button to start or cancel a temporary basal rate. Please note that the button changes from “TEMPBASAL” to “CANCEL x%” when a temporary basal rate is set.
* Even though [extended boluses](../Usage/Extended-Carbs#id1) do not really work in a closed loop environment some people were asking for an option to use extended bolus anyway.
   
   * This option is only available for Dana RS and Insight pumps. 
   * Closed loop will automatically be stopped and switched to open loop mode for the time running extended bolus.
   * Make sure to read the [details](../Usage/Extended-Carbs#id1) before using this option.

### Careporal - section N

* Displays information on
   
   * sensor age & level (battery percentage)
   * insulin age & level (units)
   * canula age
   * pump battery age & level (percentage

* Less information will be shown if [low resolution skin](../Configuration/Preferences#skin) is used.

#### Sensor level (battery)

* Needs xDrip+ nightly build Dec. 10, 2020 or newer.
* Works for CGM with additional transmitter such as MiaoMiao 2. (Technically sensor has to send cat level information to xDrip+.)
* Thresholds can be set in [preferences](../Configuration/Preferences#status-lights).
* If sensor level is the same as phone battery level you xDrip+ version is probably too old and needs an update.
   
   ![Sensor levels equals phone battery level](../images/Home2021_ActionSensorBat.png)

### Careporal - section O

* BG check, prime/fill, sensor insert and pump battery change are the base for the data displayed in [section N](#careportal-section-n).
* Prime/Fill allows you to record pump site and insulin cartridge change.
* Section O reflects the Nightscout careportal. So exercise, announcement and question are special forms of notes.

### Tools - section P

#### History Browser

* Allows you to ride back in AAPS hsitory.

#### BPD

* Total daily dose = bolus + basal per day
* Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. 
* Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). 
* Others prefer range of 32% to 37% of TDD for TBB. 
* Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Histroy browser + TDD](../images/Home2021_Action_HB_TDD.png)

## Insulin Profile

![Insulin Profile](../images/Screenshot_insulin_profile.png)

* This shows the activity profile of the insulin you have chosen in [config builder](../Configuration/Config-Builder#insulin). 
* The PURPLE line shows how much insulin remains after it has been injected as it decays with time and the BLUE line shows how active it is.
* The important thing to note is that the decay has a long tail. 
* If you have been used to manual pumping you have probably been used to assuming that insulin decays over about 3.5 hours. 
* However, when you are looping the long tail matters as the calculations are far more precise and these small amounts add up when they are subjected to the recursive calculations in the AndroidAPS algorithm.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And even more at: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Pump Status

![Pump Status](../images/Screenshot_PumpStatus.png)

* Different information on pump status. Displayed information depends on your pump model.
* See [pumps page](../Hardware/pumps.rst) for details.

## Care Portal

Priežiūros skiltyje rasite tas pačias funkcijas, kaip Jūsų Nightscout puslapyje po "+" simboliu, ir galėsite pridėti pastabų prie savo duomenų.

### Review carb calculation

![Review carb calculation on treatment tab](../images/Screenshots_TreatCalc.png)

* If you have used the [Bolus Wizard](../Getting-Started/Screenshots#bolus-wizard) to calculate insulin dosage you can review this calculation later on treatments tab.
* Just press the green Calc link. (Depending on pump used insulin and carbs can also be shown in one single line in treatments.)

### Carb correction

![Treatment in 1 or 2 lines](../images/Treatment_1or2_lines.png)

Treatment tab can be used to correct faulty carb entries (i.e. you over- or underestimated carbs).

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
   * Basal rate
   * Target: Blood glucose level that you want AAPS to be aiming for

* You can either use a [local profile](../Configuration/Config-Builder#local-profile-recommended) that can be edited on your smartphone or a [Nightscout profile](../Configuration/Config-Builder#ns-profile) which must be edited on your NS page and transferred to your phone afterwards. For details see the corresponding sections on the [config builder page](../Configuration/Config-Builder.md).

## Treatment

History of the following treatments:

* Bolus & carbs -> option to [remove entries](../Getting-Started/Screenshots#carb-correction) to correct history
* [Ištęstas bolusas](../Usage/Extended-Carbs#id1)
* Temporary basal rate
* [Temporary target](../Usage/temptarget.md)
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