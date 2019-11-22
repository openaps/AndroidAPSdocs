# AndroidAPS ekranai

## Pradžios ekranas

![Homescreen V2.5](../images/Screenshot_Home_screen_V2_5_1.png)

Tai pradinis ekranas, kurį matysite paleidę AndroidAPS, ir kuriame yra visa svarbiausia informacija.

### Sritis A

* leidžia naviguoti tarp skirtingų AndroidAPS modulių braukiant į kairę arba dešinę

### Sritis B

* pakeisti ciklo būseną (atviras ciklas, uždaras ciklas, ciklo sustabdymas ir kt.)
* peržiūrėti dabartinį profilį ir atlikti [profilio perjungimą](../Usage/Profiles.md)
* peržiūrėti esamą glikemijos tikslą ir nustatyti [laikiną tikslą](../Usage/temptarget.md).

Palaikykite ilgai prispaudę bet kurį mygtuką, jei norite pakeisti nustatymus. Pvz.: palaikykite ilgai prispaudę tikslo laukelį (nuotraukoje "100"), jei norite nustatyti laikiną tikslą.

### Sritis C

* naujausi glikemijos duomenys, pateikti NGJ
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

Rodoma Jūsų sensoriaus (NGJ) pateikiama kraujo gliukozės kiekio (KG) kreivė bei Nightscout perspėjimai, kaip kalibracijos ar įvesti angliavandeniai.

Ilgai paspaudę ant grafiko, galite pakeisti laiko skalę. Galite matyti 6, 8, 12, 18 ar 24 val. duomenis.

Jei pasirinkote, taip pat matysite gliukozės kitimo prognozės kreives.

* **Oranžinė** linija: [AAO](../Usage/COB-calculation.rst) (oranžinė spalva dažniausiai naudojama angliavandeniams vaizduoti)
* **Mėlyna** linija: AIO (ši spalva įprastai žymi insuliną)
* **Žydra** linija: glikemijos kitimo prognozė, jei būtų nustatyta nulinė bazė
* **Geltona** linija: [NDM](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (nedeklaruotas maistas)

Šios kreivės rodo skirtingas gliukozės kitimo prognozes, atsižvelgiant į įvairius parametrus: aktyvių angliavandenių absorbciją; aktyvaus insulino veikimą; laiką, per kurį gliukozė galėtų peržengti žemą arba aukštą ribą, jei staiga pradėtų kristi labiau, nei numatyta ir reikėtų nulinės bazės, arba kilti labiau, nei numatyta dėl nedeklaruoto maisto.

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
* **Jautrumas** (balta linija): tai jautrumas insulinui, kurį apskaičiavo Autosense funkcija. Tai jautrumo insulinui faktoriaus pokyčiai dėl fizinio aktyvumo, hormonų ir pan.
* **Aktyvumas** (geltona linija): tai insulino aktyvumas, apskaičiuotas pagal insulino profilio nustatymus (jis nėra išskaičiuotas iš AIO). Kreivė tuo aukštesnė, kuo insulino aktyvumo pikas arčiau. AIO mažėjant, aktyvumas gali tapti neigiamas. 

### Sritis G

Čia galite suleisti bolusą (įprastai tam naudosite Skaičiuotuvo mygtuką) ir įvesti kalibracijas. Čia taip pat bus matomas Greitojo vedlio mygtukas, jei jis sukonfigūruotas [Konfigūratoriuje](../Configuration/Config-Builder#quickwizard-settings).

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

### Wrong COB detection

![Slow carb absorption](../images/Calculator_SlowCarbAbsorbtion.png)

If you see the warning above after using bolus wizard, AndroidAPS has detected that the calculated COB value maybe wrong. So if you want to bolus again after a previous meal with COB you should be aware of overdosing! For details see the hints on [COB calculation page](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Insulin Profile

![Insulin Profile](../images/Screenshot_insulin_profile.png)

This shows the activity profile of the insulin you have chosen. The PURPLE line shows how much insulin remains after it has been injected as it decays with time and the BLUE line shows how active it is.

You will normally be using one of the Oref profiles - and the important thing to note is that the decay has a long tail. If you have been used to manual pumping you have probably been used to assuming that insulin decays over about 3.5 hours. However, when you are looping the long tail matters as the calculations are far more precise and these small amounts add up when they are subjected to the recursive calculations in the AndroidAPS algorithm.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And more at: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Pump Status

![Pump Status](../images/Screenshot_pump_Combo.png)

Here we see the status of the insulin pump - in this case an Accu-Chek Combo. The information displayed is self explanatory. A long press on the HISTORY button will read the data from your pump history, including your basal profile. But remember only one basal profile is supported on the Combo pump.

## Care Portal

![Care Portal](../images/Screenshot_care_portal.png)

This replicates the functions you will find on your Nightscout screen under the "+" symbol which allows you to add notes to your records. Functions such as recording when you change a pump site, or insulin cartridge should be self explanatory. BUT this section does not issue any commands to your pump. So if you add a bolus using this screen it simply makes a note of this on your Nightscout record, the pump won't be instructed to deliver a bolus.

## Loop, MA, AMA, SMB

You don't normally need to worry about these, they show the results of the OpenAPS algorithm which runs each time the system gets a fresh reading from the CGM. These are discussed elsewhere.

## Profile

![Profile](../images/Screenshot_profile.png)

AndroidAPS can run using a number of different profile configuratons. Typically - as shown here - the Nightscout profile has been downloaded via the built in Nighscout client and is displayed here in read-only form. If you wanted to make any changes you would do this from your Nightscout user interface and then do a [Profile Switch](../Usage/Profiles.md) in AndroidAPS to activate the changes. Data such as the basal profile would then be automatically copied over to your pump.

**DIA:** stands for Duration of Insulin Action and it is discussed above in the section on insulin profiles.

**IC:** is Insulin to Carb ratio. This profile has a number of different values set for different times of day.

**ISF:** is Insulin Sensitivity Factor - the amount by which one unit of insulin will reduce your blood glucose assuming that nothing else changes.

**Basal:** is the basal profile programmed into your pump.

**Target:** is the blood glucose level that you want the rig to be aiming for all the time. You can set different levels for differenttimes of day if you wish, and you can even set an upper and lower range so that the rig will only start to make changes when the predicted blood glucose value falls outside, but if you do that then the rig will respond more slowly and you are unlikely to achieve such stable blood sugars.

## Treatment, xDrip, NSClient

These are simply logs of treatments (boluses and carbs), xDrip messages and messages sent to Nightscout via the built-in Nightscout client. You don't normally need to worry about any of these unless there is a problem.

## Config Builder

![Konfigūracija](../images/Screenshot_config_builder.png)

This is where you will set up the configuraton of your AndroidAPS rig. This screenshot shows a pretty typical rig using a Combo pump, a Dexcom G5 CGM sensor being managed via xDrip+ and running with NovoRapid insulin on an Oref profile and connected to a Nightscout cloud based server.

The tick box on the right determines if that particular module will be displayed in the top menu bar (see section A at Homescreen) and the small gear wheel symbol allows access to the setting for that module, if there are any.

## Settings and Preferences

At the top right of the navigation bar you will find three small vertical dots. Pressing on these takes you to the app's preferences, history browser, setup wizard, about the app information and the exit button that will close AAPS.