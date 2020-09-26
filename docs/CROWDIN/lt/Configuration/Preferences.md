# Nustatymai

Atidaryti nustatymus paspaudžiant trijų taškų meniu dešinėje viršuje pagrindiniame ekrane:

![Kaip atidaryti Nustatymus](../images/PreferencesOpen.png)

## Nustatymų slaptažodis

Tai leidžia nustatyti slaptažodį, kad būtų išvengta netyčinių ar neleistinų nustatymų pakeitimų. Jei čia nustatėte slaptažodį, turite jį įvesti, jei norite pasiekti nustatymus. Norėdami pašalinti slaptažodžio parinktį, ištrinkite šio lauko tekstą.

## Paciento amžius

Čia gali būti nustatyti saugos apribojimai atsižvelgiant į amžių. Kai pasieksite šias ribas (pvz., maksimalų bolusą), gali būti laikas kilti vienu lygiu aukštyn. Bloga mintis nurodyti aukštesnį nei tikrasis amžių, nes tai gali sukelti perdozavimą, jei insulino dialogo lange bus įvesta neteisinga reikšmė (pvz., per klaidą neįvestas kablelis/taškas). Jei norite sužinoti šias saugos ribų reikšmes, pereikite prie naudojamos algoritmo funkcijos [šiame puslapyje ](../Usage/Open-APS-features.md).

## Bendrieji

* Pasirinkite kalbą. Jei jūsų kalba nėra prieinama arba visi žodžiai neišversti, pateikite pasiūlymus [Crowdin](https://crowdin.com/project/androidaps) arba paprašykite [gitter chatroom](https://gitter.im/MilosKozak/AndroidAPS).

## Apžvalga

* Pristatymų metu naudinga ekraną laikyti įjungtą. Tai sunaudoja daug energijos, todėl protinga telefoną laikyti prijungtą prie įkroviklio.
* Mygtukų nustatymai leidžia pasirinkti, kurie mygtukai matomi pagrindiniame ekrane. Taip pat galite pasirinkti keletą iššokančiojo ekrano parinkčių, kurios pasirodys paspaudus mygtuką.
* Greitojo vedlio nustatymai leidžia į pagrindinį ekraną pridėti dažnai naudojamų patiekalų mygtuką. Kai pasirinksite šį mygtuką, bolusas bus apskaičiuojamas pagal esamą būseną (atsižvelgiant į jūsų esamą gliukozės kiekį kraujyje, aktyvųjį insuliną ir kt., jei nustatyta).

### Papildomi nustatymai

![Nustatymai - Apžvalga - Papildomi Nustatymai](../images/PreferencesOverviewAdvanced_V2_5.png)

* Pagrindiniai nustatymai norint suleisti tik dalį boluso skaičiuoklės rezultato. Tik nustatytas procentas (turi būti tarp 10 ir 100) iš apskaičiuoto boluso yra suleidžiama, kai naudojama boluso skaičiuoklė. Procentai rodomi boluso skaičiuoklėje.
    
    ![Boluso skaičiuoklė 80%](../images/BolusWizardPartDelivery.png)

* Option to enable [superbolus](../Getting-Started/Screenshots#section-h) in bolus wizard.

### Būklės indikatoriai

* Būsenos indikatoriai vizualiai įspėja apie mažą insulino kiekį rezervuare ir senkančią bateriją, taip pat apie tai, kad laikas keisti kateterį. Išplėstinė versija rodo likusį laiką / baterijos procentą.
    
    ![Būsenos šviesos - išsamiai](../images/StatusLights_V2_5.png)
    
    Būsenos indikatorių nustatymai turi būti atlikti Nightscout nustatymuose. Nustatyti kintamuosius:
    
    * Kateterio amžius: CAGE_WARN ir CAGE_URGENT (standartinis 48 ir 72 val.)
    * Insulino amžius (rezervuaro): IAGE_WARN ir IAGE_URGENT (standartinis 72 ir 96 val.)
    * Jutiklio amžius: SAGE_WARN ir SAGE_URGENT (standartinis 164 ir 166 val.)
    * Baterijos amžius: BAGE_WARN ir BAGE_URGENT (standartinis 240 iki 360 val.)

* Įspėjimo apie rezervuaro lygį ir kritinį rezervuaro lygį riba.

* Įspėjimo apie baterijos lygį ir kritinį baterijos lygį riba.

## Terapijos saugumas

### Maksimalus leistinas bolusas [U]

Tai yra didžiausias leidžiamas boluso insulino kiekis, kurį gali suleisti AAPS. Šis nustatymas yra saugos apribojimas, siekiant užkirsti kelią per didelei boluso dozei dėl atsitiktinio įvedimo ar vartotojo klaidos. Rekomenduojama šią reikšmę nustatyti kaip pagrįstą ribą, maždaug atitinkančią maksimalią boluso dozę, kurią jūs galite susileisti maistui ar korekcijai. Šis apribojimas taip pat nustatomas boluso kalkuliatoriaus rezultatams.

### Maks. leistini angliavandeniai [g]

Tai yra didžiausias angliavandenių kiekis, kuriam AAPS boluso skaičiuoklė gali apskaičiuoti insulino dozę. Šis nustatymas yra saugos apribojimas, siekiant užkirsti kelią per didelei boluso dozei dėl atsitiktinio įvedimo ar vartotojo klaidos. Rekomenduojama šią reikšmę nustatyti kaip pagrįstą ribą, maždaug atitinkančią maksimalią angliavandenių dozę, kurią jūs galite suvartoti.

## Ciklas

You can toggle between open and closed looping here.

**Open looping** means TBR suggestions are made based on your data and appear as a notification, but you must manually choose to accept them and manually enter them into your pump.

**Closed looping** means TBR suggestions are automatically sent to your pump without confirmation or input from you.

The homescreen will display in the top left corner whether you are open or closed looping, and pressing and holding this homescreen button will also allow you to toggle between the two.

### Minimal Request Rate

When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate. This defines the relative change required to trigger a notification.

![Minimal request rate](../images/MinRequestChange.png)

Please note: In closed loop mode a single target instead of target range (i.e. 5,5 mmol instead of 5,0 - 7,0 mmol) is recommended.

## OpenAPS AMA

OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. Turn it on in the Config tab to view the safety settings here, you will need to have completed [Objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) to use this feature. You can read more about the settings and [Autosens in the OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max U/hr a Temp Basal can be set to

This setting exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate. The value is measured in units per hour (u/hr). Čia rekomenduojama įvesti ką nors pagrįsto. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 4 to get a value of 2u/hr.

### Maximum basal IOB OpenAPS can deliver [U]

Amount of additional basal insulin (in units) allowed to accumulate in your body, on top of your normal basal profile. Once this value is reached, AAPS will stop giving additional basal insulin until your basal Insulin on Board (IOB) has decayed to within this range again.

* Į šią reikšmę neįeina aktyvusis boluso IOB insulinas, tik bazinis.
* Ši reikšmė apskaičiuojama ir stebima nepriklausomai nuo jūsų įprastos valandinės bazės dydžio. Atsižvelgiama tik į papildomą valandinę bazę.
* Ši reikšmė yra matuojamas insulino vienetais (vv).

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. This prevents AAPS from giving any additional basal insulin at all. During this time AAPS will still be able to limit or turn off your basal insulin to help prevent hypoglycaemia.

This is an important step in order to:

* Turėti laiko susipažinimui su AAPS sistemos naudojimu ir stebėti, kaip ji veikia.
* Pasinaudokite proga pakoreguoti savo valandinės bazės profilį ir jautrumo insulinui veiksnius (ISF).
* Pamatyti, kaip AAPS riboja valandinę bazę, kad būtų išvengta hipoglikemijos.

When you feel comfortable, you can allow the system to start giving you additional basal insulin, by raising the Max Basal IOB value. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 3 to get a value of 1.5u.

* Galite pradėti nuo šios reikšmės konservatyviai ir laikui bėgant palaipsniui ją padidinti. 
* Tai yra tik gairės; kiekvieno žmogaus kūnas yra skirtingas. Gali būti, kad jums reikia daugiau ar mažiau, nei rekomenduojama, tačiau pradėkite konservatyviai ir palaipsniui koreguokite.

*Note: As a safety feature, Max Basal IOB is hard-limited to 7u.*

## Angliavandenių įsisavinimo parametrai

If you have selected to use AMA Autosens then you will be able to enter your maximum meal absorption time and how frequently you want autosense to refresh. If you often eat high fat or protein meals you will need to increase your meal absorption time.

## Pompos nustatymai

The options here will vary depending on which pump driver you have selected in 'Config Builder'. Pair and set your pump up according to the pump related instructions:

* [DanaR insulino pompa](../Configuration/DanaR-Insulin-Pump.md) 
* [DanaRS insulino pompa](../Configuration/DanaRS-Insulin-Pump.md) 
* [Accu Chek Combo pompa](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Accu Chek Insight pompa](../Configuration/Accu-Chek-Insight-Pump.md) 
* [Medtronic pompa](..//Configuration/MedtronicPump.md)

If using AndroidAPS to open loop then make sure you have selected Virtual Pump in config builder.

## NS Client

* Čia įveskite savo Nightscout URL (https://jususvetaine.herokuapp.com arba https://jususvetaine.azurewebsites.net) ir API paslaptį kodas (12 simbolių slaptažodis heroku arba azure nustatymuose). Tai leidžia AndroidAPS skaityti ir rašyti duomenis iš Nightscout. Jei įstrigote 1-ame tiksle, patikrinkite, ar įvedėte teisingus duomenis.
* **Įsitikinkite, kad URL yra BE /api/v1/ pabaigoje.**
    
    ![NSClient nuoroda](../images/NSClientURL.png)

* Parinktis „Įrašyti programos pradžią Nightscout" įveda pranešimus Priežiūros skirtuke kiekvieną kartą kai programa paleidžiama. Programa neturėtų būti paleista daugiau kaip kartą per dieną; jei tai darysite dažniau, gali kilti problemų.

* „Įspėjimo nustatymai“ leidžia pasirinkti, kuriuos įspėjimus programa praneš. Kad suaktyvintumėte perspėjimus, [heroku ar azure](http://www.nightscout.info/wiki/welcome/website-features#customalarms) kintamųjų reikšmių laukuose turite nustatyti Labai aukštų, Aukštų, Žemų ir Labai žemų aliarmo reikšmes. Jie veiks tik tada, kai turėsite ryšį su Nightscout ir yra skirti tėvams / globėjams; jei stebėjimas vykdomas jūsų telefone, naudokite jame nurodytus pranešimus (pavyzdžiui, xdrip+).
* „Įgalinti vietines transliacijas“ jūsų duomenimis iš priežiūros portalo dalinamasi su kitomis programomis išmaniajame telefone (pvz., xdrip+).
* Jei norite tinkamai naudotis Autotune, reikia suaktyvinti „Visada naudokite absoliučias bazines reikšmes“.
    
    **Nejunkite šito, jei naudojate [Insight pompą](https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Insight-Pump#settings-in-aaps)!** Tai lemtų klaidingus laikinos bazės nustatymus Insight pompoje.

## SMS komunikatorius

This setting allows remote control of the app by texting instructions to the patients phone which the app will follow such as suspending loop, or bolusing. Further information is described in [SMS Commands](../Children/SMS-Commands.rst) but it will only display in Preferences if you have selected this option in the Config Builder.

## Kiti

* Čia galite nustatyti numatytąsias reikšmes įvairių tipų laikiniems tikslams (tokiems kaip Greitai valgysiu ar Aktyvumas). Kai pasirinksite laikiną tikslą, pavyzdžiui, „Greitai valgysiu“, langas automatiškai užpildys laiką ir tikslą, atsižvelgiant į čia nustatytus parametrus. Daugiau informacijos apie laikinus tikslus, žr. [OpenAPS funkcijos](../Usage/Open-APS-features.md). 
* Galite nustatyti pradinio užpildymo reikšmes - jie bus perduoti pompai, o insulinas, naudojamas jam užpildyti, bus išskaičiuotas iš rezervuaro lygio, bet neįtraukiamas į IOB skaičiavimus. Norėdami sužinoti, kiek vienetų turėtumėte naudoti, priklausomai nuo adatos ir vamzdelio ilgio, skaitykite kateterio (kaniulės) instrukcijas.
* Galite pakeisti pagrindinio ekrano išvaizdą ir stebėti parametrus jūsų pasirinktame diapazone. Atminkite, kad tai tik rodymo metodas, kuris neturi įtakos jūsų tikslams ar skaičiavimams.
* "Sutrumpinti skirtukų pavadinimus" leidžia matyti daugiau skirtukų pavadinimų ant ekrano, pavyzdžiui, "Atviro APS" skirtukas tampa "OAPS', 'Tikslai" tampa "Tiksl." ir pan.
* „Vietiniai perspėjimai“ leidžia nuspręsti, ar gauti perspėjimus, o jei taip, tai kiek laiko po to, kai nėra glikemijos duomenų (seni duomenys), arba kai pompa nepasiekiama. Jei dažnai gaunate pranešimus apie tai, kad pompa nepasiekiama, išplėstiniuose nustatymuose įgalinkite BT Watchdog.

## Duomenų pasirinkimas

* „Fabric Upload“ išsiųs kūrėjams klaidų pranešimus ir naudojimo duomenis.