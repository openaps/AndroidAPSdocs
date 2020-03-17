# Nustatymai

Atidaryti nustatymus paspaudžiant trijų taškų meniu dešinėje viršuje pagrindiniame ekrane:

![Kaip atidaryti Nustatymus](../images/PreferencesOpen.png)

## Nustatymų slaptažodis

Tai leidžia nustatyti slaptažodį, kad būtų išvengta netyčinių ar neleistinų nustatymų pakeitimų. Jei čia nustatėte slaptažodį, turite jį įvesti, jei norite pasiekti nustatymus. Norėdami pašalinti slaptažodžio parinktį, ištrinkite šio lauko tekstą.

## Paciento amžius

Čia gali būti nustatyti saugos apribojimai atsižvelgiant į amžių. Kai pasieksite šias ribas (pvz., maksimalų bolusą), gali būti laikas kilti vienu lygiu aukštyn. Bloga mintis nurodyti aukštesnį nei tikrasis amžių, nes tai gali sukelti perdozavimą, jei insulino dialogo lange bus įvesta neteisinga vertė (pvz., per klaidą neįvestas kablelis/taškas). Jei norite sužinoti šias saugos ribų reikšmes, pereikite prie naudojamos algoritmo funkcijos [šiame puslapyje ](../Usage/Open-APS-features.md).

## Bendrieji

* Pasirinkite kalbą. Jei jūsų kalba nėra prieinama arba visi žodžiai neišversti, pateikite pasiūlymus [Crowdin](https://crowdin.com/project/androidaps) arba paprašykite [gitter chatroom](https://gitter.im/MilosKozak/AndroidAPS).

## Apžvalga

* Pristatymų metu naudinga ekraną laikyti įjungtą. Tai sunaudoja daug energijos, todėl protinga telefoną laikyti prijungtą prie įkroviklio.
* Mygtukų nustatymai leidžia pasirinkti, kurie mygtukai matomi pagrindiniame ekrane. Taip pat galite pasirinkti keletą iššokančiojo ekrano parinkčių, kurios pasirodys paspaudus mygtuką.
* Greitojo vedlio nustatymai leidžia į pagrindinį ekraną pridėti dažnai naudojamų patiekalų mygtuką. Kai pasirinksite šį mygtuką, bolusas bus apskaičiuojamas pagal esamą būseną (atsižvelgiant į jūsų esamą gliukozės kiekį kraujyje, aktyvųjį insuliną ir kt., jei nustatyta).

### Advanced Settings

![Nustatymai - Apžvalga - Papildomi Nustatymai](../images/PreferencesOverviewAdvanced_V2_5.png)

* Pagrindiniai nustatymai norint suleisti tik dalį boluso skaičiuoklės rezultato. Tik nustatytas procentas (turi būti tarp 10 ir 100) iš apskaičiuoto boluso yra suleidžiama, kai naudojama boluso skaičiuoklė. Procentai rodomi boluso skaičiuoklėje.
    
    ![Boluso skaičiuoklė 80%](../images/BolusWizardPartDelivery.png)

* Galimybė įjungti [superbolusus](../Getting-Started/Screenshots#section-a) boluso skaičiuoklėje.

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

Tai yra didžiausias leidžiamas boluso insulino kiekis, kurį gali suleisti AAPS. Šis nustatymas yra saugos apribojimas, siekiant užkirsti kelią per didelei boluso dozei dėl atsitiktinio įvedimo ar vartotojo klaidos. Rekomenduojama šią vertę nustatyti kaip pagrįstą ribą, maždaug atitinkančią maksimalią boluso dozę, kurią jūs galite susileisti maistui ar korekcijai. Šis apribojimas taip pat nustatomas boluso kalkuliatoriaus rezultatams.

### Maks. leistini angliavandeniai [g]

Tai yra didžiausias angliavandenių kiekis, kuriam AAPS boluso skaičiuoklė gali apskaičiuoti insulino dozę. Šis nustatymas yra saugos apribojimas, siekiant užkirsti kelią per didelei boluso dozei dėl atsitiktinio įvedimo ar vartotojo klaidos. Rekomenduojama šią vertę nustatyti kaip pagrįstą ribą, maždaug atitinkančią maksimalią angliavandenių dozę, kurią jūs galite suvartoti.

## Ciklas

Čia galite perjungti atvirą ir uždarą ciklą. Atviras ciklas reiškia, kad remiantis jūsų duomenimis pateikiami pasiūlymai nustatyti laikiną bazę. Jie ekrane pasirodo kaip pranešimas, o jūs turite juos priimti patys ir rankiniu būdu įvesti į pompą. Uždaras ciklas reiškia, kad pasiūlymai nustatyti laikiną bazę automatiškai siunčiami pompai be jūsų patvirtinimo. Pagrindinis ekranas viršutiniame kairiajame kampe rodo atviro arba uždaro ciklo būseną, o paspaudę ir laikydami šią ekrano dalį galite perjungti šias parinktis.

## OpenAPS AMA

OpenAPS Pažangusis maisto asistentas (AMA) leidžia sistemai greičiau reaguoti įvedus valgio bolusą, JEI teisingai įvedate angliavandenius. Įjunkite jį nustatymuose, kad čia matytumėte saugos nustatymus. Jei norite naudoti šią funkciją, turite būti pasiekę [9 tikslą](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama). Daugiau apie šį nustatymą galite perskaityti OpenAPS dokumentuose [ Automatinis jautrumo nustatymas Autosens](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Maks vv/val skaičius, kuris gali būti nustatytas kaip laikina bazė

Šis nustatymas egzistuoja kaip saugos riba, neleidžianti AAPS nustatyti pavojingai aukštos laikinos bazės. Reikšmė matuojama vienetais per valandą (vv/val). It is advised to set this to something sensible. Rekomenduojama naudoti savo profilio **didžiausią valandinę bazę** ir **padauginti reikšmę iš 4**. Pvz., jei didžiausia valandinė bazė jūsų profilyje yra 0,5 vv/val, padauginkite ją iš 4, ir gaunate 2 vv/val reikšmę.

### Didžiausias valandinės bazės insulino kiekis, kurį gali suleisti OpenAPS [U]

Papildomo bazinio insulino kiekis (vienetais), sukauptas jūsų kūne, neskaitant įprastos nustatytos bazės. Pasiekus šią reikšmę, AAPS nustoja tiekti papildomą bazinį insuliną, kol aktyviojo insulino (AIO) kiekis grįš į nustatytą diapazoną.

* Į šią reikšmę neįeina aktyvusis boluso IOB insulinas, tik bazinis.
* Ši reikšmė apskaičiuojama ir stebima nepriklausomai nuo jūsų įprastos valandinės bazės dydžio. Atsižvelgiama tik į papildomą valandinę bazę.
* Ši vertė yra matuojamas insulino vienetais (vv).

Pradėjus naudoti ciklą,**rekomenduojama nustatyti maksimalų bazinio insulino AIO=0** tam, kad išmoktumėte elgtis su sistema. Šis nustatymas neleidžia AAPS suleisti papildomo bazinio insulino. Šiuo laikotarpiu AAPS algoritmas gali apriboti arba išjungti valandinę bazę, kad būtų išvengta hipoglikemijos.

Tai yra svarbus žingsnis, siekiant:

* Turėti laiko susipažinimui su AAPS sistemos naudojimu ir stebėti, kaip ji veikia.
* Pasinaudokite proga pakoreguoti savo valandinės bazės profilį ir jautrumo insulinui veiksnius (ISF).
* Pamatyti, kaip AAPS riboja valandinę bazę, kad būtų išvengta hipoglikemijos.

Kai jums priimtina, galite leisti sistemai suleisti papildomo bazinio insulino, padidindami Maks Bazės AIO reikšmę. Rekomenduojama naudoti savo profilio **didžiausią valandinę bazę** ir **padauginti reikšmę iš 3**. Pvz., jei didžiausia valandinė bazė jūsų profilyje yra 0,5 vv/val, padauginkite ją iš 3, ir gaunate 1.5 vv/val reikšmę.

* Galite pradėti nuo šios vertės konservatyviai ir laikui bėgant palaipsniui ją padidinti. 
* Tai yra tik gairės; kiekvieno žmogaus kūnas yra skirtingas. Gali būti, kad jums reikia daugiau ar mažiau, nei rekomenduojama, tačiau pradėkite konservatyviai ir palaipsniui koreguokite.

*Pastaba: saugumo sumetimais neįmanoma nustatyti didesnės nei 7vv Maks Bazės AIO reikšmės.*

## Angliavandenių įsisavinimo parametrai

Jei esate nustatę AMA Autosens, tada jums bus leista nustatyti maksimalų maisto įsisavinimo laiką ir tai, kaip dažnai norite atnaujinti Autosens. Jei dažnai valgote maistą, kuriame gausu riebalų ar baltymų, turėsite padidinti maisto absorbcijos laiką.

## Pompos nustatymai

Čia parametrai skiriasi priklausomai nuo to, kurią pompos tvarkyklę pasirinkote konfigūratoriuje. Suporuokite ir nustatykite savo pompą pagal naudojamos pompos instrukcijas:

* [DanaR insulino pompa](../Configuration/DanaR-Insulin-Pump.md) 
* [DanaRS insulino pompa](../Configuration/DanaRS-Insulin-Pump.md) 
* [Accu Chek Combo pompa](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Accu Chek Insight pompa](../Configuration/Accu-Chek-Insight-Pump.md) 
* [Medtronic Pump](..//Configuration/MedtronicPump.md)

Jei AndroidAPS naudojate kaip atvirą ciklą, įsitikinkite, kad konfigūratoriuje pasirinkote virtualią pompą.

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

Šis nustatymas leidžia nuotoliniu būdu valdyti programą siunčiant instrukcijas paciento išmaniajam telefonui, kuriame vykdoma programa, pvz., sustabdyti ciklą ar suleisti bolusą. Išsamesnė informacija aprašyta [SMS komandose](../Children/SMS-Commands.rst). SMS komandos nustatymuose rodomos tik tuo atveju, jei ši parinktis buvo suaktyvinta Konfigūratoriuje.

## Kiti

* Čia galite nustatyti numatytąsias vertes įvairių tipų laikiniems tikslams (tokiems kaip Greitai valgysiu ar Aktyvumas). Kai pasirinksite laikiną tikslą, pavyzdžiui, „Greitai valgysiu“, langas automatiškai užpildys laiką ir tikslą, atsižvelgiant į čia nustatytus parametrus. Daugiau informacijos apie laikinus tikslus, žr. [OpenAPS funkcijos](../Usage/Open-APS-features.md). 
* Galite nustatyti pradinio užpildymo reikšmes - jie bus perduoti pompai, o insulinas, naudojamas jam užpildyti, bus išskaičiuotas iš rezervuaro lygio, bet neįtraukiamas į IOB skaičiavimus. Norėdami sužinoti, kiek vienetų turėtumėte naudoti, priklausomai nuo adatos ir vamzdelio ilgio, skaitykite kateterio (kaniulės) instrukcijas.
* Galite pakeisti pagrindinio ekrano išvaizdą ir stebėti parametrus jūsų pasirinktame diapazone. Atminkite, kad tai tik rodymo metodas, kuris neturi įtakos jūsų tikslams ar skaičiavimams.
* "Sutrumpinti skirtukų pavadinimus" leidžia matyti daugiau skirtukų pavadinimų ant ekrano, pavyzdžiui, "Atviro APS" skirtukas tampa "OAPS', 'Tikslai" tampa "Tiksl." ir pan.
* „Vietiniai perspėjimai“ leidžia nuspręsti, ar gauti perspėjimus, o jei taip, tai kiek laiko po to, kai nėra glikemijos duomenų (seni duomenys), arba kai pompa nepasiekiama. Jei dažnai gaunate pranešimus apie tai, kad pompa nepasiekiama, išplėstiniuose nustatymuose įgalinkite BT Watchdog.

## Duomenų pasirinkimas

* „Fabric Upload“ išsiųs kūrėjams klaidų pranešimus ir naudojimo duomenis.