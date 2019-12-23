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

### Status lights

* Status lights give a visual warning for low reservoir and battery level as well as overdue site change. Extended version shows elapsed time / battery percentage.
    
    ![Status lights - detail](../images/StatusLights_V2_5.png)
    
    Settings for status lights must be made in Nightscout settings. Set the following variables:
    
    * Cannula age: CAGE_WARN and CAGE_URGENT (standard 48 and 72 hours)
    * Insulin age (reservoir): IAGE_WARN and IAGE_URGENT (standard 72 and 96 hours)
    * Sensor age: SAGE_WARN and SAGE_URGENT (standard 164 and 166 hours)
    * Battery age: BAGE_WARN and BAGE_URGENT (standard 240 and 360 hours)

* Treshold for warning reservoir level and critical reservoir level.

* Treshold for warning battery level and critical battery level.

## Terapijos saugumas

### Max allowed bolus [U]

Tai yra didžiausias leidžiamas boluso insulino kiekis, kurį gali suleisti AAPS. Šis nustatymas yra saugos apribojimas, siekiant užkirsti kelią per didelei boluso dozei dėl atsitiktinio įvedimo ar vartotojo klaidos. Rekomenduojama šią vertę nustatyti kaip pagrįstą ribą, maždaug atitinkančią maksimalią boluso dozę, kurią jūs galite susileisti maistui ar korekcijai. Šis apribojimas taip pat nustatomas boluso kalkuliatoriaus rezultatams.

### Max allowed carbs [g]

Tai yra didžiausias angliavandenių kiekis, kuriam AAPS boluso skaičiuoklė gali apskaičiuoti insulino dozę. Šis nustatymas yra saugos apribojimas, siekiant užkirsti kelią per didelei boluso dozei dėl atsitiktinio įvedimo ar vartotojo klaidos. Rekomenduojama šią vertę nustatyti kaip pagrįstą ribą, maždaug atitinkančią maksimalią angliavandenių dozę, kurią jūs galite suvartoti.

## Ciklas

Čia galite perjungti atvirą ir uždarą ciklą. Atviras ciklas reiškia, kad remiantis jūsų duomenimis pateikiami pasiūlymai nustatyti laikiną bazę. Jie ekrane pasirodo kaip pranešimas, o jūs turite juos priimti patys ir rankiniu būdu įvesti į pompą. Uždaras ciklas reiškia, kad pasiūlymai nustatyti laikiną bazę automatiškai siunčiami pompai be jūsų patvirtinimo. Pagrindinis ekranas viršutiniame kairiajame kampe rodo atviro arba uždaro ciklo būseną, o paspaudę ir laikydami šią ekrano dalį galite perjungti šias parinktis.

## OpenAPS AMA

OpenAPS Pažangusis maisto asistentas (AMA) leidžia sistemai greičiau reaguoti įvedus valgio bolusą, JEI teisingai įvedate angliavandenius. Įjunkite jį nustatymuose, kad čia matytumėte saugos nustatymus. Jei norite naudoti šią funkciją, turite būti pasiekę [9 tikslą](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama). Daugiau apie šį nustatymą galite perskaityti OpenAPS dokumentuose [ Automatinis jautrumo nustatymas Autosens](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max U/hr a Temp Basal can be set to

Šis nustatymas egzistuoja kaip saugos riba, neleidžianti AAPS nustatyti pavojingai aukštos laikinos bazės. Reikšmė matuojama vienetais per valandą (vv/val). It is advised to set this to something sensible. Rekomenduojama naudoti savo profilio **didžiausią valandinę bazę** ir **padauginti reikšmę iš 4**. Pvz., jei didžiausia valandinė bazė jūsų profilyje yra 0,5 vv/val, padauginkite ją iš 4, ir gaunate 2 vv/val reikšmę.

### Maximum basal IOB OpenAPS can deliver [U]

Papildomo bazinio insulino kiekis (vienetais), sukauptas jūsų kūne, neskaitant įprastos nustatytos bazės. Pasiekus šią reikšmę, AAPS nustoja tiekti papildomą bazinį insuliną, kol aktyviojo insulino (AIO) kiekis grįš į nustatytą diapazoną.

* This value does not consider bolus IOB, only basal.
* This value is calculated and monitored independently of your normal basal rate. It is only the additional basal insulin on top of that normal rate that is considered.
* This value is measured in insulin units (u).

Pradėjus naudoti ciklą,**rekomenduojama nustatyti maksimalų bazinio insulino AIO=0** tam, kad išmoktumėte elgtis su sistema. Šis nustatymas neleidžia AAPS suleisti papildomo bazinio insulino. Šiuo laikotarpiu AAPS algoritmas gali apriboti arba išjungti valandinę bazę, kad būtų išvengta hipoglikemijos.

Tai yra svarbus žingsnis, siekiant:

* Have a period of time to safely get used to the AAPS system and monitor how it works.
* Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
* See how AAPS limits your basal insulin to prevent hypoglycaemia.

Kai jums priimtina, galite leisti sistemai suleisti papildomo bazinio insulino, padidindami Maks Bazės AIO reikšmę. Rekomenduojama naudoti savo profilio **didžiausią valandinę bazę** ir **padauginti reikšmę iš 3**. Pvz., jei didžiausia valandinė bazė jūsų profilyje yra 0,5 vv/val, padauginkite ją iš 3, ir gaunate 1.5 vv/val reikšmę.

* You can start conservatively with this value and increase it slowly over time. 
* These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

*Pastaba: saugumo sumetimais neįmanoma nustatyti didesnės nei 7vv Maks Bazės AIO reikšmės.*

## Angliavandenių įsisavinimo parametrai

Jei esate nustatę AMA Autosens, tada jums bus leista nustatyti maksimalų maisto įsisavinimo laiką ir tai, kaip dažnai norite atnaujinti Autosens. Jei dažnai valgote maistą, kuriame gausu riebalų ar baltymų, turėsite padidinti maisto absorbcijos laiką.

## Pompos nustatymai

Čia parametrai skiriasi priklausomai nuo to, kurią pompos tvarkyklę pasirinkote konfigūratoriuje. Suporuokite ir nustatykite savo pompą pagal naudojamos pompos instrukcijas:

* [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) 
* [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump.md) 
* [Accu Chek Combo pompa](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Medtronic Pump](..//Configuration/MedtronicPump.md)

Jei AndroidAPS naudojate kaip atvirą ciklą, įsitikinkite, kad konfigūratoriuje pasirinkote virtualią pompą.

## NS Client

* Set your 'nightscout URL' here (https://yourwebsitename.herokuapp.com or https://yourwebsitename.azurewebsites.net), and the 'API secret' (a 12 character password recorded in your heroku or azure variables). This enables data to be read and written between both the nightscout website and AndroidAPS. Double check for typos here if you are stuck in Objective 1.
* **Make sure that the URL is WITHOUT /api/v1/ at the end.**
    
    ![NSClient URL](../images/NSClientURL.png)

* 'Log app start to nightscout' will record a note in your careportal entries every time the app is started. The app should not be needing to start more than once a day; more frequently than this suggests a problem.

* 'Alarm options' allows you to select which default nightscout alarms to use through the app. For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [heroku or azure variables](http://www.nightscout.info/wiki/welcome/website-features#customalarms). They will only work whilst you have a connection to nightscout and are intended for parent/carers, if you have the CGM source on your phone then use those alarms instead (e.g. xdrip+).
* 'Enable local broadcasts' will share your careportal data to other apps on the phone such as xdrip.
* 'Always use basal absolute values' must be activated if you want to use Autotune properly.
    
    **Do not activate this when using [Insight pump](https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Insight-Pump#settings-in-aaps)!** It would lead to false TBR settings in Insight pump.

## SMS komunikatorius

Šis nustatymas leidžia nuotoliniu būdu valdyti programą siunčiant instrukcijas paciento išmaniajam telefonui, kuriame vykdoma programa, pvz., sustabdyti ciklą ar suleisti bolusą. Išsamesnė informacija aprašyta [SMS komandose](../Children/SMS-Commands.rst). SMS komandos nustatymuose rodomos tik tuo atveju, jei ši parinktis buvo suaktyvinta Konfigūratoriuje.

## Kiti

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Duomenų pasirinkimas

* 'Fabric Upload' will send crash reporting and feature usage data to the developers.