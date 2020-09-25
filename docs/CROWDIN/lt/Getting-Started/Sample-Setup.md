# Pavyzdinė sąranka: Samsung S7, DanaRS, Dexcom G6 ir Sony Smartwatch

![Pavyzdinis nustatymas](../images/SampleSetup.png)

## Aprašymas

Šiame derinyje Samsung Galaxy S7 išmanusis telefonas naudojamas kaip ciklo valdymo centras. Šiek tiek pakeista Dexcom programa nuskaito glikemijos reikšmes iš Dexcom G6 sensoriaus. AndroidAPS Bluetooth ryšiu valdo korėjiečių gamintojo SOOIL Dana RS pompą. Nereikia jokių papildomų įrenginių.

Kadangi Dexcom programa siūlo ribotas įspėjimo parinktis, atvirojo kodo xDrip + programa yra sukonfigūruota ne tik aukštos ir žemos glikemijos aliarmams, bet ir kitiems perspėjimams, atsižvelgiant į individualius poreikius.

Pasirinktinai galite naudoti Android išmanųjį laikrodį (šiame pavyzdyje naudojamas Sony Smartwatch 3 (SWR50)), norėdami matyti savo glikemijos duomenis ir AndroidAPS parametrus. Laikrodis netgi gali būti naudojamas valdyti AndroidAPS (pvz., diskretiškai nustatyti bolusą maistui).

Sistema veikia neprisijungus. Tai reiškia, kad norint naudotis sistema nereikia prijungti savo išmaniojo telefono prie interneto.

Tačiau, kai yra interneto ryšys, duomenys automatiškai įkeliami į Nightscout „debesį“. Ši parinktis leidžia beveik bet kuriuo metu pateikti išsamų glikemijos ataskaitą gydytojui ar šeimos nariams. Taip pat galite siųsti duomenis į Nightscout tik naudodami (jei nustatėte) Wi-Fi ryšį, kad galėtumėte kurti įvairias Nightscout ataskaitas.

## Būtini komponentai

1. Samsung Galaxy S7
    
    * Alternatyvos: žr. [patikrintų telefonų ir išmaniųjų laikrodžių sąrašą](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435)

2. [DanaRS](http://www.sooil.com/eng/product/)
    
    * Alternatyvos: 
    * [Accu-Chek Combo](../Sąranka/Accu-Chek-Combo-Siurblys.md)
    * [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
    * [DanaR](../Configuration/DanaR-Insulin-Pump.md)
    * [Tam tikri seni Medtronic pompų modeliai (reikalinga papildoma įranga: RileyLink/Gnarl aparatinė įranga, Android telefonas su Bluetooth Low Energy/BLE mikroschemų rinkiniu)](../Configuration/MedtronicPump.md)
    * Kitos pompos gali būti suderinamos ateityje, dėl išsamesnės informacijos žr. [ateityje galimos pompos ](Future-possible-Pump-Drivers.md).

3. [Dexcom G6](https://dexcom.com)
    
    * Alternatyvos: žr. galimų [glikemijos šaltinių](../Configuration/BG-Source.rst) sąrašą

4. Pasirinktinai: Sony Smartwatch 3 (SWR50)
    
    * Alternatyvos: Visi [laikrodžiai su Google Wear OS](https://wearos.google.com/intl/de_de/#find-your-watch) turėtų veikti gerai, išsamiau žr. [AndroidAPS patikrintų telefonų laikrodžių sąrašą](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) (OS turi būti Android Wear)

## Nightscout nustatymas

Žr. detaliau [Nightscout nustatymas](../Installing-AndroidAPS/Nightscout.md)

## Kompiuterio nustatymas

Norėdami sukurti Android programą iš nemokamo AAPS kodo, savo kompiuteryje ar nešiojamajame kompiuteryje (Windows, Mac, Linux) turite įdiegti Android Studio. Išsamią instrukciją galima rasti čia [Android programos (APK) kūrimas](../Installing-AndroidAPS/Building-APK.md).

Diegdami Android Studio būkite kantrūs, nes programa į savo kompiuterį atsisiunčia daug papildomų komponentų.

## Išmanaus telefono nustatymas

![Išmanusis telefonas](../images/SampleSetupSmartphone.png)

### Patikrinkite išmaniojo telefono programinę įrangą

* Meniu > Nustatymai> Telefono informacija > Programinė įranga: bent jau Android Versija 7.0 (sėkmingai išbandytas iki Android versijos 8.0.0 Oreo - Samsung Patirties Versija 9.0) 
* Norėdami atnaujinti programinę įrangą: Meniu > Nustatymai > Programos atnaujinimas

### Leisti diegti iš nežinomų šaltinių

Meniu > Nustatymai> Įrenginio sauga > Nežinomi šaltiniai> slankiklis dešinėje (= aktyvus)

Saugumo sumetimais šis nustatymas turėtų būti grąžintas į neaktyvų režimą, kai bus įdiegtos visos čia aprašytos programos.

### Įjunkite Bluetooth

1. Meniu > Nustatymai > Ryšiai > Bluetooth > slankiklis dešinėje (= aktyvus)
2. Meniu > Nustatymai > Ryšiai > Vieta > slankiklis dešinėje (= aktyvus)

Vietovės paslaugos („GPS“) turi būti suaktyvintos, kad Bluetooth tinkamai veiktų.

### Įdiegti Dexcom App (modifikuota versija)

![Modifikuota Dexcom programėlė](../images/SampleSetupDexApp.png)

Originali Dexcom programa iš Google Play Store neveiks, nes ji neperduoda duomenų į kitas programas. Todėl reikalinga šiek tiek pakeista mūsų bendruomenės versija. Tik ši modifikuota Dexcom programa gali bendrauti su AAPS. Be to, modifikuota Dexcom programa gali veikti su visais Android išmaniaisiais telefonais, o ne tik su tais, kurie yra [ Dexcom suderinamumo sąraše](https://www.dexcom.com/dexcom-international-compatibility).

Modifikuotos Dexcom G6 programos mmol/l ir mg/dl versijas galite rasti svetainėje <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>. Jūs turite pasirinkti G6 [aplikaciją tinkamą savo regionui](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app).

Norėdami tai padaryti, atlikite šiuos veiksmus savo išmaniajame telefone:

1. Jei originali Dexcom programėlė yra įdiegta: 
    * Sustabdykite sensorių
    * Ištrinkite programas per Meniu > Nustatymai> Programos> Dexcom G6 Mobile > Pašalinti
2. Atsisiųskite modifikuotą Dexcom programą (prireikus patikrinkite matavimo vienetus mg/dl arba mmol/l bei [regioną](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app)): <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>
3. Įdiekite modifikuotą Dexcom G6 programą į savo išmanųjį telefoną (= pasirinkite atsisiųstą APK failą)
4. Paleiskite modifikuotą Dexcom G6 programą, suaktyvinkite / sukalibruokite sensorių pagal instrukcijas ir palaukite, kol baigsis apšilimo laikotarpis.
5. Kai modifikuota Dexcom programa parodys esamą gliukozės vertę, nustatykite įspėjimus (trijų linijų meniu kairėje ekrano pusėje) taip: 
    * Urgent low `55 mg/dl ` / `3,1 mmol/l ` (negali būti išjungtas)
    * Low `OFF`
    * High `OFF`
    * Rise rate `OFF`
    * Fall rate `OFF`
    * Signal loss `OFF`

## Įdiegti AndroidAPS

1. Laikykitės instrukcijų, kad [sukurti APK failą](../Installing-AndroidAPS/Building-APK#generate-signed-apk)
2. [Perkelkite](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone) sukurtą programą APK į savo telefoną
3. [Konfigūruokite AndroidAPS](../Configuration/Config-Builder.md) pagal savo poreikius, naudodamiesi sąrankos vedliu arba rankiniu būdu
4. Šiame pavyzdyje mes naudojome (be kita ko)

* KG šaltinis: `Dexcom G6 App (modifikuota)` -- spustelėkite krumpliaračio piktogramą ir įjunkite `Įkelti KG duomenų NS` ir `Siųsti KG duomenis xDrip+` (žr. [KG šaltinis](../Configuration/BG-Source.rst))

![G5 parametrai](../images/SampleSetupG5Settings.png)

* NS Client suaktyvintas (žr. [NS Client](../Configuration/Config-Builder#ns-profile) ir [Nightscout nustatymai](../Installing-AndroidAPS/Nightscout.md))

## Įdiegti xDrip+

xDrip+ yra puiki atvirojo kodo programa, siūlanti daugybę galimybių. Šiame pavyzdyje, skirtingai nuo pirminės xDrip+ kūrėjų idėjos, programa nėra naudojama norint gauti glikemijos duomenis iš Dexcom G6, o tik rodyti įspėjimus ir rodyti dabartinę glikemijos vertę, įskaitant valdiklio kreivę Android pagrindiniame ekrane. Naudodamiesi xDrip+, perspėjimai gali būti konfigūruojami daug individualiau nei naudojant Dexcom programinę įrangą, AAPS ar Nightscout (neribotas garsų, dienos/nakties signalų pasirinkimas ir t.t.).

1. Atsisiųskite naujausią stabilią APK xDrip+ versiją naudodamiesi savo išmaniuoju telefonu iš čia:[https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk ](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) - tik ne versiją iš Google Play Store!
2. Įdiekite xDrip+ pasirinkdami atsisiųstą APK failą.
3. Paleiskite xDrip+ ir atlikite šiuos nustatymus (trijų linijų meniu viršuje kairėje) 
    * Nustatymai> Aliarmai ir perspėjimai> Įspėjimų apie KG lygį sąrašas> Sukurkite įspėjimus (aukštus ir žemus) pagal jūsų poreikius. 
    * Esamus įspėjimus galima pakeisti ilgai spustelėjus signalo piktogramą.
    * Nustatymai > Aliarmai ir perspėjimai > Kalibravimo įspėjimai: išjungti (priminimas per modifikuotą Dexcom programą)
    * Nustatymai > Aparatūros duomenų šaltinis> 640G/EverSense
    * Nustatymai> Tarp-programų nustatymai> Priimti kalibravimą> `Įgalinta`
    * Meniu> Sensoriaus paleidimas (tai tik „forma“, neturi nieko bendra su veikiančiu G6 sensoriumi. Turite jį įjungti, kitaip klaidos pranešimas reguliariai pasirodys.) 

Daugiau informacijos apie xDrip+ žr. čia [Glikemijos šaltiniai](../Configuration/BG-Source.rst).

### Įspėjimo konfigūracijos pavyzdys

Ypač maža KG (mažiau kaip 55 mg/dl. 3,1 mmol) yra standartinis modifikuotos Dexcom programos įspėjimas, kurio negalima išjungti.

![xDrip perspėjimai](../images/SampleSetupxDripWarning.png)

Patarimai susitikimų / bažnyčios lankymo / kino teatro ir pan. atveju..:

Jei Samsung Galaxy S7 įjungtas režimas Netrukdyti (Meniu > Nustatymai > Garsai ir vibracija > Netrukdyti: slankiklis į dešinę pusę (= įjungtas)), telefonas tik vibruoja pranešimo apie ypač žemą KG metu ir neskamba. Dėl kitų perspėjimų, sukonfigūruotų naudojant xDrip+, galite pasirinkti, ar nepaisyti garso režimo.

## Išjunkite energijos taupymą

Samsung Galaxy S7 eikite į Meniu > Nustatymai > Įrenginio palaikymas > Akumuliatorius > Nestebimos programos> + Pridėti programas: Pasirinkite AndroidAPS, Dexcom G6 Mobile, xDrip+ ir Android Wear (jei naudojate išmanųjį laikrodį) programas po vieną

## Pasirinktinai: Sony Smartwatch 3 (SWR50)

Naudojant Android Wear išmanųjį laikrodį, diabetas gyvenime gali būti dar labiau nepastebimas. Jis gali būti naudojamas bet kuriuo metu dabartiniam glikemijos, ciklo būsenos ir kt. rodymui ant riešo. Laikrodis netgi gali būti naudojamas valdyti AndroidAPS (pvz., diskretiškai nustatyti bolusą maistui). Norėdami tai padaryti, dukart spustelėkite NGJ reikšmę AAPSv2 išmaniojo laikrodžio ekrane. SWR50 paprastai veikia visą dieną, kol reikia įkrauti akumuliatorių (tas pats įkroviklis, kaip ir Samsung Galaxy S“: microUSB).

![Išmanieji laikrodžiai](../images/SampleSetupSmartwatch.png)

Išsamią informaciją apie išmaniojo laikrodžio ekrane pateikiamą informaciją galite rasti [čia](../Configuration/Watchfaces.md).

* Įdiekite Android Wear programą į išmanųjį telefoną per Google Play parduotuvę ir suporuokite SWR50 pagal ten pateiktas instrukcijas.
* AAPS trijų linijų meniu (viršuje kairėje)> Konfigūracija> Bendroji dalis (sąrašo apačioje)> Išmanieji laikrodžiai> suaktyvinti kairėje pusėje, spustelėkite krumpliaratį> Išmaniojo laikrodžio nustatymai > `Valdymas iš laikrodžio`
* Išmaniajame laikrodyje: Ilgai paspauskite ekraną, kad pakeistumėte laikrodžio numatytą ekraną, tada pasirinkite `AAPSv2`
* Jei reikia, iš naujo perkraukite abu prietaisus.

## Pompos nustatymai

žr. [Dana RS pompa](../Configuration/DanaRS-Insulin-Pump.md)