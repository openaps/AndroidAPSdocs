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

* Būsenos indikatoriai vizualiai įspėja apie mažą insulino kiekį rezervuare ir senkančią bateriją, taip pat apie tai, kad laikas keisti kateterį. Išplėstinė versija rodo likusį laiką / baterijos procentą.
    
    ![Būsenos indikatoriai - išsamiai](../images/StatusLights_V2_5.png)
    
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

Papildomo bazinio insulino kiekis (vienetais), sukauptas jūsų kūne, neskaitant įprastos nustatytos bazės. Once this value is reached, AAPS will stop giving additional basal insulin until your basal Insulin on Board (IOB) has decayed to within this range again.

* This value does not consider bolus IOB, only basal.
* This value is calculated and monitored independently of your normal basal rate. It is only the additional basal insulin on top of that normal rate that is considered.
* This value is measured in insulin units (u).

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. This prevents AAPS from giving any additional basal insulin at all. During this time AAPS will still be able to limit or turn off your basal insulin to help prevent hypoglycaemia.

This is an important step in order to:

* Have a period of time to safely get used to the AAPS system and monitor how it works.
* Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
* See how AAPS limits your basal insulin to prevent hypoglycaemia.

When you feel comfortable, you can allow the system to start giving you additional basal insulin, by raising the Max Basal IOB value. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 3 to get a value of 1.5u.

* You can start conservatively with this value and increase it slowly over time. 
* These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

*Note: As a safety feature, Max Basal IOB is hard-limited to 7u.*

## Absorption Settings

If you have selected to use AMA Autosens then you will be able to enter your maximum meal absorption time and how frequently you want autosense to refresh. If you often eat high fat or protein meals you will need to increase your meal absorption time.

## Pump settings

The options here will vary depending on which pump driver you have selected in 'Config Builder'. Pair and set your pump up according to the pump related instructions:

* [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) 
* [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump.md) 
* [Accu Chek Combo pompa](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Medtronic Pump](..//Configuration/MedtronicPump.md)

If using AndroidAPS to open loop then make sure you have selected Virtual Pump in config builder.

## NS Client

* Set your 'nightscout URL' here (https://yourwebsitename.herokuapp.com or https://yourwebsitename.azurewebsites.net), and the 'API secret' (a 12 character password recorded in your heroku or azure variables). This enables data to be read and written between both the nightscout website and AndroidAPS. Double check for typos here if you are stuck in Objective 1.
* **Make sure that the URL is WITHOUT /api/v1/ at the end.**
    
    ![NSClient URL](../images/NSClientURL.png)

* 'Log app start to nightscout' will record a note in your careportal entries every time the app is started. The app should not be needing to start more than once a day; more frequently than this suggests a problem.

* 'Alarm options' allows you to select which default nightscout alarms to use through the app. For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [heroku or azure variables](http://www.nightscout.info/wiki/welcome/website-features#customalarms). They will only work whilst you have a connection to nightscout and are intended for parent/carers, if you have the CGM source on your phone then use those alarms instead (e.g. xdrip+).
* 'Enable local broadcasts' will share your careportal data to other apps on the phone such as xdrip.
* 'Always use basal absolute values' must be activated if you want to use Autotune properly.
    
    **Do not activate this when using [Insight pump](https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Insight-Pump#settings-in-aaps)!** It would lead to false TBR settings in Insight pump.

## SMS Communicator

This setting allows remote control of the app by texting instructions to the patients phone which the app will follow such as suspending loop, or bolusing. Further information is described in [SMS Commands](../Children/SMS-Commands.rst) but it will only display in Preferences if you have selected this option in the Config Builder.

## Other

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Data Choices

* 'Fabric Upload' will send crash reporting and feature usage data to the developers.