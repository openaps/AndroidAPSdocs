# xDrip+ Nustatymai

(For additional information regarding xDrip+, please refer to https://xdrip.readthedocs.io/en/latest/)

If not already set up then download [xDrip+](https://jamorham.github.io/#xdrip-plus).

**This documentation is for xDrip+ for Android only.** There is an app "xDrip for iOS" that has nothing to do with the original xDrip+ for Android.

Naudojantis G6 siųstuvais, kurie tiekiami po 2018 m. rudens/pabaigos (pvz., serijos nr. starting with 80 or 81) you can use the [master](https://jamorham.github.io/#xdrip-plus) version.

Jei jūsų Dexcom G6 siųstuvo serijos nr. is starting with 8G..., 8H... or 8J... use one of the [latest nightly builds](https://github.com/NightscoutFoundation/xDrip/releases).

If your phone runs Android 10 and you have difficulties with xDrip+ master try [nightly build 2019/12/31 or later](https://github.com/NightscoutFoundation/xDrip/releases).

## Pagrindiniai visų stebėjimo sistemų nustatymai

* Teisingai įveskite savo svetainės adresą (URL), įskaitant raidę **S**, esantį http**s**:// (ne http://)
   
   t. y. https://API_SECRET@jusu-svetaines-vardas.herokuapp.com/api/v1/
   
   -> trijų linijų meniu (ekrano viršuje, kairėje) -> Nustatymai -> Debesų įkėlimas -> Nightscout įkėlimas (REST-API) -> Pagrindinis URL

* Išjungti `Automatinis kalibravimas (Automatic Calibration)` Jei pažymėtas langelyje `Automatinis kalibravimas (Automatic Calibration)`, vieną kartą suaktyvinkite `Atsisiųsti duomenis (Download data)`, tada panaikinkite žymėjimą laukelyje `Automatinis kalibravimas (Automatic Calibration)` ir deaktyvuokite `Atsisiųskite duomenis(Download data)` dar kartą. Priešingu atveju terapija (insulinas& ir angliavandeniai) bus įvedamos du kartus į Nightscout.

* Paspauskite `Papildomos Funkcijos (Extra Options)`

* Deaktyvuokite `Įkelti terapijas (Upload treatments)` ir `Užpildyti praleistus duomenis (Back-fill data)`.
   
   **Saugos įspėjimas : Jūs turite išjungti "Įkelti terapiją" iš xDrip+, priešingu atveju terapijos duomenys gali dubliuotis AAPS, kas gali sąlygoti neteisingus AAO ir AIO.**

* Pasirinkimas `Perspėjimas apie gedimus (Alert on failures)` taip pat turėtų būti išjungtas. Priešingu atveju kas 5 minutes gausite aliarmą, jei WiFi/ mobiliojo ryšio tinklas yra per silpnas arba serveris nepasiekiamas.
   
   ![xDrip+ Pagrindiniai Parametrai 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Pagrindiniai Parametrai 2](../images/xDrip_Basic2.png)

* **Sąveika su programomis (InterApp-Settings)** (transliacija) Norint naudoti AndroidAPS, į jį reikia nukreipti duomenis; turėtumėte suaktyvinti xDrip+ transliaciją Inter-App nustatymuose.

* Norint išvengti programų neatitikimų, reikia suaktyvinti `Siųsti rodomą glikemijos reikšmę (Send the displayed glucose value)`.

* If you have also activated `Accept treatments` and "Enable local Broadcasts" in AndroidAPS, then xDrip+ will receive insulin, carbs and basal rate information from AndroidAPS and can estimate the hypo prediction etc. tiksliau.
   
   ![xDrip+ Pagrindiniai Parametrai 3](../images/xDrip_Basic3.png)

(identify-receiver)=

### Nustatyti gavėjus

* If you discover problems with local broadcast (AAPS not receiving BG values from xDrip+) go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps` for AndroidAPS build (if you are using PumpControl build, please enter `info.nightscout.aapspumpcontrol` instead!!).
* Dėmesio: automatinis taisymas kartais keičia raidę i iš mažosios į didžiąją I raidę. You **must use only lowercase letters** when typing `info.nightscout.androidaps` (or `info.nightscout.aapspumpcontrol` for PumpControl). Capital I would prevent the App from receiving BG values from xDrip+.
   
   ![xDrip+ Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## xDrip+ & Dexcom G6

* Dexcom G6 siųstuvą galima vienu metu sujungti su Dexcom imtuvu (arba alternatyviai su t:slim pompa) ir mobiliojo telefono programa.
* Jei naudojate xDrip+ glikemijos duomenims gauti, pirmiausia pašalinkite Dexcom programą. **Negalite vienu metu prijungti xDrip+ ir Dexcom programos prie vieno siųstuvo!**
* If you need Clarity and want to profit from xDrip+ alarms use the [Build Your Own Dexcom App](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip+.

### xDrip+ versija, priklausomai nuo to G6 siųstuvo serijos nr.

* Naudojantis G6 siųstuvais, kurie tiekiami po 2018 m. rudens/pabaigos (pvz., serijos nr. prasideda 80 arba 81), jums reikia bent [xDrip+ pagrindinės](https://jamorham.github.io/#xdrip-plus) programos versijos. 
* Jei jūsų Dexcom G6 siųstuvo serijos nr. pradedant nuo 8G, 8H ar 8J, naudokite vieną iš paskutinių [nightly versijų, pvz., 2019/07/28 ar vėlesnę](https://github.com/NightscoutFoundation/xDrip/releases).

### Dexcom specialūs nustatymai

* Atidarykite G5/G6 derinimo nustatymus (G5/G6 Debug Settings) -> Trijų linijų meniu (pagrindiniame ekrano viršuje kairėje) -> Nustatymai -> G5/G6 derinimo nustatymai ![Atidaryti xDrip+ Nustatymus](../images/xDrip_Dexcom_SettingsCall.png)

* Įgalinkite šiuos parametrus
   
   * `Naudoti OB1 Kolektorių`
   * `Natyvinis Algoritmas` (svarbu, jei jūs norite naudotis SMB)
   * `G6 palaikymas`
   * `Leisti atjungti OB1`
   * `Leisti OB1 inicijuoti poravimą`
* Visos kitos funkcijos turėtų būti išjungtos
* Nustatykite įspėjimo apie žemą akumuliatorių lygį iki 280 (G5/G6 derinimo nustatymų apačioje)
   
   ![xDrip+ G5/G6 Derinimo Parametrai](../images/xDrip_Dexcom_DebugSettings.png)

### Pakartoninis paleidimas nerekomenduojamas

**With Dexcom transmitters who's serial no. is starting with 8G, 8H or 8J preemptive restarts do not work and might kill the sensor completely!**

The automatic extension of Dexcom sensors (`preemptive restarts`) is not recommended as this might lead to “jumps” in BG values on day 9 after restart.

![xDrip+ Jump after Preemptive Restart](../images/xDrip_Dexcom_PreemptiveJump.png)

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of:

* Jei xDrip ar Spike naudojate natyvinius duomenis su kalibravimo kodu, saugumo sumetimais neturėtumėte leisti pakartotinio paleidimo iš naujo.
* Jei vis dėlto naudojatės pakartotiniu paleidimu, tada jis turėtų būti daromas tokiu metu, kai galima stebėti pokyčius ir prireikus kalibruoti. 
* Jei iš naujo paleisite sensorių, atlikite tai be gamyklinio kalibravimo, kad rezultatai būtų saugūs 11-ą ir 12-ą dieną, arba būkite pasirengę kalibruoti ir stebėti pokyčius.
* „Išankstinis įmirkymas“ (sensoriaus įvedimas daug anksčiau nei jo pradžia programoje) G6 su gamykliniu kalibravimu gali sukelti duomenų nukrypimus. Jei sensorių įvedate anksčiau, nei jį startuojate, gali reikėti jį kalibruoti, kad gautumėte geriausius rezultatus.
* Jei neplanuojate sekti visų galimų nukrypimų, geriau grįžti į tradicinį kalibravimo režimą ir naudoti sistemą kaip G5.

To learn more about the details and reasons for these recommendations read the [complete article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](https://www.diabettech.com).

(connect-g6-transmitter-for-the-first-time)=

### Prijungti G6 siųstuvą pirmą kartą

**For second and following transmitters see [Extend transmitter life](#extend-transmitter-life) below.**

Naudojantis G6 siųstuvais, kurie tiekiami po 2018 m. rudens/pabaigos (pvz., serijos nr. prasideda 80 arba 81), jums reikia bent [xDrip+ pagrindinės](https://jamorham.github.io/#xdrip-plus) programos versijos.

Jei jūsų Dexcom G6 siųstuvo serijos nr. pradedant nuo 8G, 8H ar 8J, naudokite vieną iš paskutinių [nightly versijų, pvz., 2019/07/28 ar vėlesnę](https://github.com/NightscoutFoundation/xDrip/releases).

* Išjunkite originalų „Dexcom“ imtuvą (jei naudojate).
* Ilgai spauskite kraujo lašo piktogramą pagrindiniame xDrip+ ekrane, kad suaktyvintumėte `Glikemijos šaltinio parinkimo vedlys (Source Wizard Button)` mygtuką.
* Naudokite mygtuką Glikemijos šaltinio parinkimo vedlys. Tai užtikrins, kad naudosite numatytuosius nustatymus, įskaitant OB1 & natyvinį režimą 
   * Vedlys leis atlikti pradinę sąranką.
   * jums reikės siųstuvo serijos numerio, jei jį naudojate pirmą kartą.

* Įveskite naujo siųstuvo serijos numerį (ant siųstuvo pakuotės arba ant jo galinės dalies). Be careful not to confuse `0` (zero) and `O` (capital letter o).
   
   ![xDrip+ Dexcom siųstuvo serijos Nr](../images/xDrip_Dexcom_TransmitterSN.png)

* Įdėkite naują sensorių (tik keičiant)

* Uždėkite siųstuvą ant sensoriaus
* If a message pops up asking to pair with "DexcomXX", where "XX" is the last two characters of the transmitter's serial no., accept it (tap "pair")
* Do not start new sensor before the following information is shown in Classic Status Page -> G5/G6 status -> PhoneServiceState:
   
   * Siųstuvo serijos numeris prasideda 80 arba 81: „Got data hh:mm“ (pvz., „Got data 19:04“)
   * Transmitter serial starting with 8G, 8H or 8J: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got no raw 19:04")
   
   ![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Start sensor (only if replacing)
   
   -> Near the bottom of the screen `Warm Up x,x hours left` must be displayed after a few minutes.

-> If your transmitter serial no. does not start with 8G, 8H or 8J and there is no time specification after a few minutes stop and restart the sensor.

* Paleiskite kolektorių iš naujo (sistemos būsena - jei nekeičiamas sensorius}
* Neįjunkite originalaus Dexcom imtuvo (jei jį naudojate), kol xDrip+ nepasirodys pirmieji duomenys.
* Ilgai spauskite kraujo lašo piktogramą pagrindiniame xDrip+ ekrane, kad deaktyvintumėte `Glikemijos šaltinio parinkimo vedlys (Source Wizard Button)` mygtuką.
   
   ![xDrip+ Dexcom Siųstuvas 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Siųstuvas 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Siųstuvas 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Siųstuvas 4](../images/xDrip_Dexcom_Transmitter04.png)

(transmitter-battery-status)=

### Siųstuvo baterijos būsena

* Baterijos būseną galima pamatyti sistemos būsenos lange (pagrindinio ekrano viršuje, kairėje esančiame trijų linijų meniu)
* Braukite kairėn, kad pamatytumėte antrą ekraną. ![xDrip+ pirmasis siųstuvas 4](../images/xDrip_Dexcom_Battery.png)

* Tikslios vertės, kai siųstuvas „miršta“ dėl išsekusios baterijos, nežinomos. Po to, kai siųstuvas galutinai neveikė, internete buvo paskelbta ši informacija:
   
   * Pranešimas 1: Veikimo laikas: 151 dienos / Įtampa A: 297 / Įtampa B: 260 / Varža: 2391
   * Pranešimas 2: Veikimo laikas: 249 dienos / Įtampa A: 275 (klaidos metu)

### Pailginkite siųstuvo veikimo laiką

* Kol kas nerastas būdas prailginti tarnavimo laiką siųstuvų, kurių serijos nr. prasideda 8G, 8H ar 8J. Tas pats pasakytina ir apie siųstuvus su serijos Nr. starting with 81 and firmware 1.6.5.**27** (see xDrip+ System Status - G5/G6 status as shown in [screenshot above](../Configuration/xdrip.md#transmitter-battery-status)).
* Norint išvengti sunkumų paleidžiant sensorius, ypač rekomenduojama, kad siųstuvas veiktų iki 100-osios pirmojo naudojimo dienos.
* Naudoti siųstuvą, kurio serijos nr. starting with 81 and firmware 1.6.5.**27** beyond day 100 is only possible if [engineering mode](../Usage/Enabling-Engineering-Mode-in-xDrip) is turned on and 'native mode' is deactivated (hamburger menu -> settings -> G5/G6 debug settings -> native algorithm) because a transmitter hard reset is NOT possible.
* Veikiančio sensoriaus seansas bus sustabdytas, jei tuo metu prailginsite siųstuvo veikimo laiką. Todėl šį manipuliavimą reikėtų atlikti prieš keičiant sensorių arba būti pasirengusiam dėl to, kad įsijungs dviejų valandų jo įšilimo (warm-up) fazė.
* Rankiniu būdu sustabdykite sensorių per trijų linijų meniu.
* Įjunkite `Inžinieriaus režimą`: 
   * pagrindiniame xDrip+ ekrane dešinėje spustelėkite švirkšto piktogramą
   * tada spustelėkite mikrofono piktogramą apatiniame dešiniajame kampe
   * Įveskite „enable engineering mode“ teksto laukelyje 
   * spauskite Atlikta
   * Jei įgalinta Google Speak, galite duoti balso komandą angliškai: „enable engineering mode“. 
* Eikite į G5 derinimo nustatymus ir įsitikinkite, kad įjungta `Naudokite OB1 kolektorių` funkcija.
* Duokite balso komandą angliškai: „hard reset transmitter“ (kietas perkrovimas iš naujo)
* Balso komanda bus įvykdyta su kitų siųstuvo duomenų gavimu
* Pažvelkite į sistemos būseną (trijų linijų meniu -> sistemos būsena) ir pamatysite rezultatą
* Po maždaug 10 min. galite pereiti į "Classic Status" puslapį (braukite į dešinę) ir spustelėkite "Restart collector". Tai nustato jutiklio dienas ties 0, be būtinybės startuoti naują jutiklį.
* Alternatyva: jei matote pranešimą „Telefono būsena: Hard Reset maybe failed (Kietas perkrovimas iš naujo neįvyko)“, tiesiog paleiskite sensorių antrame sistemos būsenos ekrane ir šis pranešimas turėtų išnykti.
   
   ![xDrip+ Hard Reset maybe failed](../images/xDrip_HardResetMaybeFailed.png)

* Sėkmės atveju siųstuvo veikimo laikas bus nustatytas iš naujo į 0.

(replace-transmitter)=

### Siųstuvo pakeitimas

Naudojantis G6 siųstuvais, kurie tiekiami po 2018 m. rudens/pabaigos (pvz., serijos nr. prasideda 80 arba 81), jums reikia bent [xDrip+ pagrindinės](https://jamorham.github.io/#xdrip-plus) programos versijos.

Jei jūsų Dexcom G6 siųstuvo serijos nr. is starting with 8G, 8H or 8Juse one of the [latest nightly builds](https://github.com/NightscoutFoundation/xDrip/releases).

* Išjunkite originalų „Dexcom“ imtuvą (jei naudojate).
* Sustabdykite sensorių (tik keičiant sensorių)
   
   Įsitikinkite, kad jis tikrai yra sustabdytas:
   
   Kitame G5/G6 Būsenos ekrane raskite `eilės elementus (Queue Items)` - ten pasirodys kažkas panašaus į `(1) Stop Sensor`
   
   Palaukite, kol tai įvyks - paprastai per kelias minutes. Sensoriaus būsena turi būti "Stopped" (žr. Ekrano kopiją).
   
   -> Kaip nuimti siųstuvą nesustabdžius sensoriaus, žiūrėkite vaizdo įrašą<https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Sustabdyti Dexcom Sensorių 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Sustabdyti Dexcom Sensorių 2](../images/xDrip_Dexcom_StopSensor2.png)

* Ištrinkite įrenginį išmaniojo telefono xDrip+ IR Bluetooth nustatymuose (rodomas kaip Dexcom?? kur?? ar yra paskutiniai du siųstuvo serijos numerio skaitmenys)
   
   ![xDrip+ pamiršti prietaisą](../images/xDrip_Dexcom_ForgetDevice.png)

* Nuimti siųstuvą (ir sensorių, jei keičiamas sensorius)

* Patraukite seną siųstuvą kuo toliau, kad jis nebūtų vėl prijungtas. Mikrobangų krosnelė yra tobulas Faraday skydas, atjunkite maitinimo laidą, kad būtumėte 100% tikri, kad ja niekas tuo metu nesinaudoja.
* Ilgai spauskite kraujo lašo piktogramą pagrindiniame xDrip+ ekrane, kad suaktyvintumėte `Glikemijos šaltinio parinkimo vedlys (Source Wizard Button)` mygtuką.
* Naudokite mygtuką Glikemijos šaltinio parinkimo vedlys. Tai užtikrins, kad naudosite numatytuosius nustatymus, įskaitant OB1 & natyvinį režimą 
   * Vedlys leis atlikti pradinę sąranką.
   * Jums reikės siųstuvo serijos numerio, jei jį naudojate pirmą kartą.
* Įveskite naujo siųstuvo serijos nr. Nesupainiokite 0 (nulis) ir O (didžiosios raidės o).
* Įdėkite naują sensorių (tik keičiant).
* Uždėkite siųstuvą ant sensoriaus - **Nestartuokite sensoriaus tuoj pat!**
* Naujasis Firefly siųstuvas (serijos nr. prasidedantis 8G, 8H ar 8J) gali būti naudojami tik natyviniu (native) režimu.
* Šias parinktis NEGALIMA suaktyvinti naujam „Firefly“ siųstuvui (serijos Nr. prasideda 8G, 8H ar 8J):
   
   * Preemptive Restart (išjunkite!)
   * Restart sensor (išjunkite!)
   * Fallback to xDrip+ (išjunkite!)
   
   ![Nustatymai Firefly siųstuvams](../images/xDrip_Dexcom_FireflySettings.png)

* Patikrinkite, ar klasikinės būsenos puslapyje -> G5/G6 būsena -> PhoneServiceState rodoma ši informacija:
   
   * Siųstuvo serijos numeris prasideda 80 arba 81: „Got data hh:mm“ (pvz., „Got data 19:04“)
   * Siųstuvo serijos numeris prasideda 8G, 8H arba 8J: „Got glucose hh:mm“ (pvz., „Got glucose 19:04“) arba „Got no raw hh:mm“ (pvz., „Got now raw 19:04“)
   
   ![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Palaukite 15 minučių. Prieš paleisdami naują sensorių, siųstuvas turėtų keletą kartų susisiekti su xDrip+. Baterijos duomenys bus rodomi žemiau programinės įrangos informacijos, kai tik ateis laikas.
   
   ![Firefly siųstuvo baterijos duomenys](../images/xDrip_Dexcom_FireflyBattery.png)

* Startuokite sensorių ir NEĮVESKITE savo datos! Visada pasirinkite "Taip, šiandien"!

* Paleiskite kolektorių iš naujo (sistemos būsena - jei nekeičiamas sensorius)
* Neįjunkite originalaus Dexcom imtuvo (jei jį naudojate), kol xDrip+ nepasirodys pirmieji duomenys.
* Ilgai spauskite kraujo lašo piktogramą pagrindiniame xDrip+ ekrane, kad deaktyvintumėte `Glikemijos šaltinio parinkimo vedlys (Source Wizard Button)` mygtuką.
   
   ![xDrip+ Dexcom Siųstuvas 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Siųstuvas 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Siųstuvas 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Siųstuvas 4](../images/xDrip_Dexcom_Transmitter04.png)

### Naujas sensorius

* Išjunkite originalų „Dexcom“ imtuvą (jei naudojate).
* Jei reikia, sustabdykite sensorių
   
   Įsitikinkite, kad jis tikrai yra sustabdytas:
   
   Kitame G5/G6 Būsenos ekrane raskite `eilės elementus (Queue Items)` - ten pasirodys kažkas panašaus į `(1) Stop Sensor`
   
   Palaukite, kol tai įvyks - paprastai per kelias minutes.
   
   ![xDrip+ Sustabdyti Dexcom Sensorių 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Sustabdyti Dexcom Sensorių 2](../images/xDrip_Dexcom_StopSensor2.png)

* Nuvalykite kontaktus (siųstuvo apatinę dalį) alkoholiu ir nusausinkite.

* Jei naudosite šią funkciją, išjunkite ` Sensoriaus paleidimas iš naujo ` ir ` Pakartotinis paleidimas ` (Trijų linijų meniu -> Nustatymai -> G5/G6 derinimo nustatymai). Jei praleisite šį veiksmą ir paliksite šias funkcijas įjungtas, naujas sensorius tinkamai nepasileis.
   
   ![xDrip+ paleidimas iš naujo](../images/xDrip_Dexcom_Restart.png)

* Startuoti sensorių
   
   **Naujiems Firefly siųstuvams** (serijos nr. prasideda nuo 8G, 8H arba 8J) **tarp senojo sensoriaus sustabdymo ir naujojo sensoriaus startavimo privalote palaukti bent 15 minučių (kol antrame sistemos būsenos ekrane pasirodys `Sensor Status: Stopped`). Kitiems siųstuvams laukti yra tik rekomenduojama. NEĮVESKITE SAVO DATOS!**

* Nustatyti įvedimo laiką
   
   * Norint naudoti natyvinį G6 režimą, reikia palaukti 2 valandas, kol jis "įšils" (warm-up) (t.y. įvedimo laikas - dabar).
   * Jei naudojate xDrip+ algoritmą, galite nustatyti įvedimo laiką daugiau nei prieš 2 valandas, kad išvengtumėte įšilimo (warm-up) etapo. Duomenys gali būti labai netolygūs ir netikslūs. Todėl tai nėra rekomenduojama.
* Įveskite sensoriaus kodą (ant nuimamos sensoriaus folijos) 
   * Išsaugokite kodą, jei įdiegsite iš naujo (pvz, naujas startas pašalinus siųstuvą)
   * Code can also be found in [xDrip+ logs](../Configuration/xdrip.md#retrieve-sensor-code): Click 3-dots-menu on xDrip+ homescreen and choose `View Event Logs`.
* Kai naudojate G6 natyviniame režime, kalibruoti nereikia. xDrip+ pradės rodyti duomenis automatiškai po 2 valandų apšilimo.
* Neįjunkite originalaus Dexcom imtuvo (jei jį naudojate), kol xDrip+ nepasirodys pirmieji duomenys.
   
   ![xDrip+ Startuoti Dexcom Sensorių 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Startuoti Dexcom Sensorių 2](../images/xDrip_Dexcom_SensorStart02.png)

(retrieve-sensor-code)=

### Sensoriaus kodo gavimas

* Naujausiose programos versijose (pradedant nuo 2019/05/18) sensoriaus kodas rodomas sistemos būsenoje (pagrindinio ekrano viršuje, kairėje, trijų linijų meniu).
* Braukite kairėn, kad pamatytumėte antrą ekraną.
   
   ![xDrip+ gauti Dexcom sensoriaus kodą 2](../images/xDrip_Dexcom_SensorCode2.png)

* Dexcom sensoriaus kodą galima rasti xDrip+ veiklos žurnaluose.

* Paspauskite trijų taškų meniu (pagrindiniame ekrane viršuje, dešinėje)
* Pasirinkite `Peržiūrėti įvykių žurnalus (View Event Logs)` ir ieškokite žodžio „code“ (kodas)
   
   ![xDrip+ gauti Dexcom sensoriaus kodą](../images/xDrip_Dexcom_SensorCode.png)

(troubleshooting-dexcom-g5-g6-and-xdrip)=

## Dexcom G6 ir xDrip+ trikčių šalinimas

### Sujungimo su siųstuvu problema

* Siųstuvas turėtų būti matomas jūsų išmaniojo telefono Bluetooth nustatymuose.
* Ar siųstuvas bus matomas kaip Dexcom?? kur?? ar yra paskutiniai du siųstuvo serijos numerio skaitmenys). (t. y. DexcomHY).
* Atidarykite sistemos būseną xDrip+ (pagrindinio ekrano viršuje, kairėje esančiame trijų linijų meniu).
* Patikrinkite, ar siųstuvas matomas pirmame sistemos būsenos puslapyje (klasikinis sistemos būsenos puslapis).
* Jei ne: pašalinkite įrenginį iš savo išmaniojo telefono Bluetooth nustatymų.
* Palaukite apie 5 min. kol Dexcom siųstuvas pakartotinai prisijungs automatiškai.

### Problemos paleidžiant naują sensorių

Please note that the following method might likely not work if your Dexcom G6 transmitter's serial no. is starting with 8G, 8H or 8J.

* Natyvinis sensorius pažymimas kaip: „KLAIDA: Sensoriaus nepavyko startuoti“
* Sustabdykite sensorių
* Paleiskite telefoną iš naujo
* Startuokite sensorių su kodu 0000 (keturi nuliai)
* Palaukite 15 min
* Sustabdykite sensorių
* Startuokite sensorių su tikru kodu (atspausdintu ant apsauginės plėvelės)

Check in xDrip+ logs if xDrip+ starts counting "Duration: 1 minute" (and so on). Only in the xDrip+ logs you can detect at an early stage whether xdrip+ has stopped a sensor. Latest status is not always shown correctly on bottom of startscreen.

## xDrip+ & Freestyle Libre

### Libre specialūs nustatymai

* Atidarykite Bluetooth parametrus -> trijų linijų meniu (pagrindinio ekrano viršuje, kairėje) -> Parametrai -> slinkite žemyn -> Mažiau įprasti parametrai - > Bluetooth Nustatymai
   
   ![xDrip+ Libre Bluetooth parametrai 1](../images/xDrip_Libre_BTSettings1.png)

* Įgalinkite šiuos parametrus
   
   * `Įjunkite Bluetooth` 
   * `Naudotis skanavimu`
   * `Visada aptikti servisus`

* Visos kitos funkcijos turėtų būti išjungtos
   
   ![xDrip+ Libre Bluetooth parametrai 2](../images/xDrip_Libre_BTSettings2.png)

### Libre smart reader battery level

* Battery level of smart readers such as MiaoMiao 2 can be displayed in AAPS.
* Details can be found on [screenshots page](../Getting-Started/Screenshots.md#sensor-level-battery).

### Connect Libre Transmitter & start sensor

![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)