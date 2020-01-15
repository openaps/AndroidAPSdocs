# xDrip+ Nustatymai

Jei dar jo nenustatėte, atsisiųskite [xDrip+](https://jamorham.github.io/#xdrip-plus).

**This documentation is for xDrip+ for Android only.** There is an app "xDrip for iOS" that has nothing to do with the original xDrip+ for Android.

Naudojantis G6 siųstuvais, kurie tiekiami po 2018 m. rudens/pabaigos (pvz., serijos nr. prasideda skaičiais 80 ar 81) reikia bent [xDrip+ master nuo 2019/05/18](https://jamorham.github.io/#xdrip-plus).

Jei jūsų Dexcom G6 siųstuvo serijos nr. pradeda su 8G... ar 8H... use one of the [latest nightly builds](https://github.com/NightscoutFoundation/xDrip/releases).

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

* Jei taip pat suaktyvinote `Priimti terapiją (Accept treatments)` ir perdavimą AndroidAPS, tada xDrip+ iš AndroidAPS gaus informaciją apie insuliną, angliavandenius ir valandinę bazę bei galės numatyti hipoglikemiją ir kt. tiksliau.
   
   ![xDrip+ Pagrindiniai Parametrai 3](../images/xDrip_Basic3.png)

### Nustatyti gavėjus

* Jei aptikote problemų su lokaliu duomenų perdavimu (AAPS negauna KG iš xDrip+), eikite į Nustatymai > Vidiniai nustatymai > Identifikuoti siųstuvą ir spauskite `info.nightscout.androidaps`.
* Pay attention: Auto-correction sometimes tend to change i to capital letter. You **must use only lowercase letters** when typing `info.nightscout.androidaps`. Capital I would prevent AAPS from receiving BG values from xDrip+.
   
   ![xDrip+ Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## xDrip+ & Dexcom G6

* The Dexcom G6 transmitter can simultaneously be connected to the Dexcom receiver (or alternatively the t:slim pump) and one app on your phone.
* When using xDrip+ as receiver uninstall Dexcom app first. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
* If you need Clarity and want to profit from xDrip+ alarms use the [patched Dexcom app](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app) with local broadcast to xDrip+.

### xDrip+ versija, priklausomai nuo to G6 siųstuvo serijos nr.

* Naudojantis G6 siųstuvais, kurie tiekiami po 2018 m. rudens/pabaigos (pvz., serijos nr. prasideda skaičiais 80 ar 81) reikia bent [xDrip+ master nuo 2019/05/18](https://jamorham.github.io/#xdrip-plus). 
* Jei jūsų Dexcom G6 siųstuvo serijos nr. is starting with 8G or 8H try [nightly build 2019/07/28 or later](https://github.com/NightscoutFoundation/xDrip/releases).

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

**Su Dexcom siųstuvais, kurių serijos nr. pradeda su 8G ar 8H, pakartotinis paleidimas iš naujo neveikia ir gali sugadinti sensorių visiškai!**

The automatic extension of Dexcom sensors (`preemptive restarts`) is not recommended as this might lead to “jumps” in BG values on day 9 after restart.

![xDrip+ šuolis po paleidimo iš naujo](../images/xDrip_Dexcom_PreemptiveJump.png)

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of:

* Jei xDrip ar Spike naudojate natyvinius duomenis su kalibravimo kodu, saugumo sumetimais neturėtumėte leisti pakartotinio paleidimo iš naujo.
* Jei vis dėlto naudojatės pakartotiniu paleidimu, tada jis turėtų būti daromas tokiu metu, kai galima stebėti pokyčius ir prireikus kalibruoti. 
* Jei iš naujo paleisite sensorių, atlikite tai be gamyklinio kalibravimo, kad rezultatai būtų saugūs 11-ą ir 12-ą dieną, arba būkite pasirengę kalibruoti ir stebėti pokyčius.
* „Išankstinis įmirkymas“ (sensoriaus įvedimas daug anksčiau nei jo pradžia programoje) G6 su gamykliniu kalibravimu gali sukelti duomenų nukrypimus. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
* Jei neplanuojate sekti visų galimų nukrypimų, geriau grįžti į tradicinį kalibravimo režimą ir naudoti sistemą kaip G5.

Norėdami gauti daugiau informacijos ir šių rekomendacijų priežastis, skaitykite Tim Street [visą straipsnį](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) svetainėje [www.diabettech.com](http://www.diabettech.com).

### Prijungti G6 siųstuvą pirmą kartą

**Apie antrą ir kitus siųstuvus skaitykite žemiau [Siųstuvo veikimo trukmės pratęsimas ](../Configuration/xdrip#extend-transmitter-life).**

Naudojantis G6 siųstuvais, kurie tiekiami po 2018 m. rudens/pabaigos (pvz., serijos nr. prasideda skaičiais 80 ar 81) reikia bent [xDrip+ master nuo 2019/05/18](https://jamorham.github.io/#xdrip-plus).

Jei jūsų Dexcom G6 siųstuvo serijos nr. is starting with 8G or 8H try [nightly build 2019/07/28 or later](https://github.com/NightscoutFoundation/xDrip/releases).

* Išjunkite originalų „Dexcom“ imtuvą (jei naudojate).
* Ilgai spauskite kraujo lašo piktogramą pagrindiniame xDrip+ ekrane, kad suaktyvintumėte `Glikemijos šaltinio parinkimo vedlys (Source Wizard Button)` mygtuką.
* Naudokite mygtuką Glikemijos šaltinio parinkimo vedlys. Tai užtikrins, kad naudosite numatytuosius nustatymus, įskaitant OB1 & natyvinį režimą 
   * Vedlys leis atlikti pradinę sąranką.
   * jums reikės siųstuvo serijos numerio, jei jį naudojate pirmą kartą.

* Įveskite naujo siųstuvo serijos numerį (ant siųstuvo pakuotės arba ant jo galinės dalies). Nesupainiokite 0 (nulis) ir O (didžiosios raidės o).
   
   ![xDrip+ Dexcom siųstuvo serijos Nr](../images/xDrip_Dexcom_TransmitterSN.png)

* Įdėkite naują sensorių (tik keičiant)

* Uždėkite siųstuvą ant sensoriaus
* Do not start new sensor before the following information is shown in Classic Status Page -> G5/G6 status -> PhoneServiceState:
   
   * Transmitter serial starting with 80 or 81: "Got data hh:mm" (i.e. "Got data 19:04")
   * Transmitter serial starting with 8G or 8H: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got now raw 19:04")
   
   ![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Startuokite sensorių (tik keičiant)
   
   -> Po kelių minučių ekrano apačioje pasirodys `Warm Up x, liko x valandų`.

-> Jei jūsų siųstuvo serijos nr. does not start with 8G or 8H and there is no time specification after a few minutes stop and restart the sensor.

* Paleiskite kolektorių iš naujo (sistemos būsena - jei nekeičiamas sensorius}
* Neįjunkite originalaus Dexcom imtuvo (jei jį naudojate), kol xDrip+ nepasirodys pirmieji duomenys.
* Ilgai spauskite kraujo lašo piktogramą pagrindiniame xDrip+ ekrane, kad deaktyvintumėte `Glikemijos šaltinio parinkimo vedlys (Source Wizard Button)` mygtuką.
   
   ![xDrip+ Dexcom Siųstuvas 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Siųstuvas 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Siųstuvas 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Siųstuvas 4](../images/xDrip_Dexcom_Transmitter04.png)

### Siųstuvo baterijos būsena

* Baterijos būseną galima pamatyti sistemos būsenos lange (pagrindinio ekrano viršuje, kairėje esančiame trijų linijų meniu)
* Braukite kairėn, kad pamatytumėte antrą ekraną. ![xDrip+ pirmasis siųstuvas 4](../images/xDrip_Dexcom_Battery.png)

* Tikslios vertės, kai siųstuvas „miršta“ dėl išsekusios baterijos, nežinomos. Po to, kai siųstuvas galutinai neveikė, internete buvo paskelbta ši informacija:
   
   * Pranešimas 1: Veikimo laikas: 151 dienos / Įtampa A: 297 / Įtampa B: 260 / Varža: 2391
   * Pranešimas 2: Veikimo laikas: 249 dienos / Įtampa A: 275 (klaidos metu)

### Pailginkite siųstuvo veikimo laiką

* Kol kas nerastas būdas prailginti tarnavimo laiką siųstuvų, kurių serijos nr. starts with 8G or 8H.
* Norint išvengti sunkumų paleidžiant sensorius, ypač rekomenduojama, kad siųstuvas veiktų iki 100-osios pirmojo naudojimo dienos.
* Veikiančio sensoriaus seansas bus sustabdytas, jei tuo metu prailginsite siųstuvo veikimo laiką. So, extend before sensor change or be aware that there will be a new 2 h warm-up phase.
* Įjunkite `Inžinieriaus režimą`: 
   * pagrindiniame xDrip+ ekrane dešinėje spustelėkite švirkšto piktogramą
   * tada spustelėkite mikrofono piktogramą apatiniame dešiniajame kampe
   * Įveskite „enable engineering mode“ teksto laukelyje 
   * spauskite Atlikta
   * Jei įgalinta Google Speak, galite duoti balso komandą angliškai: „enable engineering mode“. 
* Go to the G5 debug settings and check if `OB1 collector` is set.
* Duokite balso komandą angliškai: „hard reset transmitter“ (kietas perkrovimas iš naujo)
* Balso komanda bus įvykdyta su kitų siųstuvo duomenų gavimu
* Pažvelkite į sistemos būseną (trijų linijų meniu -> sistemos būsena) ir pamatysite rezultatą
* Jei matote pranešimą „Telefono būsena: Hard Reset maybe failed (Kietas perkrovimas iš naujo neįvyko)“, tiesiog paleiskite sensorių antrame sistemos būsenos ekrane ir šis pranešimas turėtų išnykti.
   
   ![xDrip+ Hard Reset maybe failed](../images/xDrip_HardResetMaybeFailed.png)

* Sėkmės atveju siųstuvo veikimo laikas bus nustatytas iš naujo į 0.

### Siųstuvo pakeitimas

Naudojantis G6 siųstuvais, kurie tiekiami po 2018 m. rudens/pabaigos (pvz., serijos nr. prasideda skaičiais 80 ar 81) reikia bent [xDrip+ master nuo 2019/05/18](https://jamorham.github.io/#xdrip-plus).

Jei jūsų Dexcom G6 siųstuvo serijos nr. is starting with 8G or 8H use one of the [latest nightly builds](https://github.com/NightscoutFoundation/xDrip/releases).

* Išjunkite originalų „Dexcom“ imtuvą (jei naudojate).
* Sustabdykite sensorių (tik keičiant sensorių)
   
   Įsitikinkite, kad jis tikrai yra sustabdytas:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about halfway down - It may say something like `(1) Stop Sensor`
   
   Palaukite, kol tai įvyks - paprastai per kelias minutes. Sensor Status must be "Stopped" (see screenshot).
   
   -> Kaip nuimti siųstuvą nesustabdžius sensoriaus, žiūrėkite vaizdo įrašą<https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Sustabdyti Dexcom Sensorių 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Sustabdyti Dexcom Sensorių 2](../images/xDrip_Dexcom_StopSensor2.png)

* Forget device in xDrip+ system status AND in smartphone’s BT settings (Will be shown as Dexcom?? kur?? ar yra paskutiniai du siųstuvo serijos numerio skaitmenys)
   
   ![xDrip+ pamiršti prietaisą](../images/xDrip_Dexcom_ForgetDevice.png)

* Nuimti siųstuvą (ir sensorių, jei keičiamas sensorius)

* Put the old transmitter far away to prevent reconnection. A microwave is a perfect Faraday shield for this - but unplug power cord to be 100% no one is turning the microwave on.
* Ilgai spauskite kraujo lašo piktogramą pagrindiniame xDrip+ ekrane, kad suaktyvintumėte `Glikemijos šaltinio parinkimo vedlys (Source Wizard Button)` mygtuką.
* Naudokite mygtuką Glikemijos šaltinio parinkimo vedlys. Tai užtikrins, kad naudosite numatytuosius nustatymus, įskaitant OB1 & natyvinį režimą 
   * Vedlys leis atlikti pradinę sąranką.
   * Jums reikės siųstuvo serijos numerio, jei jį naudojate pirmą kartą.
* Įveskite naujo siųstuvo serijos nr. Nesupainiokite 0 (nulis) ir O (didžiosios raidės o).
* Įdėkite naują sensorių (tik keičiant).
* Put transmitter into sensor - **Do not start sensor immediately!**
* New "Firefly Transmitters" (serial no. starting with 8G or 8H) can only be used in native mode.
* The following options must not be activated for new "Firefly Transmitters" (serial no. starting with 8G or 8H):
   
   * Preemptive Restart (disable!)
   * Restart sensor (disable!)
   * Fallback to xDrip+ (disable!)
   
   ![Settings for Firefly transmitters](../images/xDrip_Dexcom_FireflySettings.png)

* Check in Classic Status Page -> G5/G6 status -> PhoneServiceState if one of the following informations is displayed:
   
   * Transmitter serial starting with 80 or 81: "Got data hh:mm" (i.e. "Got data 19:04")
   * Transmitter serial starting with 8G or 8H: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got now raw 19:04")
   
   ![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Wait 15 minutes as the transmitter should communicate several times with xDrip before new sensor is started. Battery data will be shown below Firmware information.
   
   ![Firefly transmitter battery data](../images/xDrip_Dexcom_FireflyBattery.png)

* Start sensor and DO NOT BACKDATE! Always select "Yes, today"!

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
   
   On the second "G5/G6 Status" screen look at `Queue Items` about halfway down - It may say something like `(1) Stop Sensor`
   
   Palaukite, kol tai įvyks - paprastai per kelias minutes.
   
   ![xDrip+ Sustabdyti Dexcom Sensorių 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Sustabdyti Dexcom Sensorių 2](../images/xDrip_Dexcom_StopSensor2.png)

* Nuvalykite kontaktus (siųstuvo apatinę dalį) alkoholiu ir nusausinkite.

* Jei naudosite šią funkciją, išjunkite ` Sensoriaus paleidimas iš naujo ` ir ` Pakartotinis paleidimas ` (Trijų linijų meniu -> Nustatymai -> G5/G6 derinimo nustatymai). Jei praleisite šį veiksmą ir paliksite šias funkcijas įjungtas, naujas sensorius tinkamai nepasileis.
   
   ![xDrip+ paleidimas iš naujo](../images/xDrip_Dexcom_Restart.png)

* Startuoti sensorių
   
   **For new Firefly transmitters** (serial no. starting with 8G or 8H) **it is mandatory, for all other transmitters it is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen). DO NOT BACKDATE!**

* Nustatyti įvedimo laiką
   
   * Norint naudoti natyvinį G6 režimą, reikia palaukti 2 valandas, kol jis "įšils" (warm-up) (t.y. įvedimo laikas - dabar).
   * Jei naudojate xDrip+ algoritmą, galite nustatyti įvedimo laiką daugiau nei prieš 2 valandas, kad išvengtumėte įšilimo (warm-up) etapo. Duomenys gali būti labai netolygūs ir netikslūs. Therefore, this is not recommended.
* Įveskite sensoriaus kodą (ant nuimamos sensoriaus folijos) 
   * Išsaugokite kodą, jei įdiegsite iš naujo (pvz, naujas startas pašalinus siųstuvą)
   * Kodą taip pat galima rasti [xDrip+ žurnaluose](../Configuration/xdrip#retrieve-sensor-code): pagrindiniame xDrip+ ekrane spustelėkite 3 taškų meniu ir pasirinkite `Peržiūrėti įvykių žurnalus (View Event Logs)`.
* Kai naudojate G6 natyviniame režime, kalibruoti nereikia. xDrip+ pradės rodyti duomenis automatiškai po 2 valandų apšilimo.
* Neįjunkite originalaus Dexcom imtuvo (jei jį naudojate), kol xDrip+ nepasirodys pirmieji duomenys.
   
   ![xDrip+ Startuoti Dexcom Sensorių 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Startuoti Dexcom Sensorių 2](../images/xDrip_Dexcom_SensorStart02.png)

### Sensoriaus kodo gavimas

* Naujausiose programos versijose (pradedant nuo 2019/05/18) sensoriaus kodas rodomas sistemos būsenoje (pagrindinio ekrano viršuje, kairėje, trijų linijų meniu).
* Braukite kairėn, kad pamatytumėte antrą ekraną.
   
   ![xDrip+ gauti Dexcom sensoriaus kodą 2](../images/xDrip_Dexcom_SensorCode2.png)

* Dexcom sensoriaus kodą galima rasti xDrip+ veiklos žurnaluose.

* Paspauskite trijų taškų meniu (pagrindiniame ekrane viršuje, dešinėje)
* Pasirinkite `Peržiūrėti įvykių žurnalus (View Event Logs)` ir ieškokite žodžio „code“ (kodas)
   
   ![xDrip+ gauti Dexcom sensoriaus kodą](../images/xDrip_Dexcom_SensorCode.png)

## Dexcom G6 ir xDrip+ trikčių šalinimas

### Sujungimo su siųstuvu problema

* Siųstuvas turėtų būti matomas jūsų išmaniojo telefono Bluetooth nustatymuose.
* Ar siųstuvas bus matomas kaip Dexcom?? kur?? ar yra paskutiniai du siųstuvo serijos numerio skaitmenys). (t. y. DexcomHY).
* Open system status in xDrip+ (hamburger menu on top left side of home screen).
* Patikrinkite, ar siųstuvas matomas pirmame sistemos būsenos puslapyje (klasikinis sistemos būsenos puslapis).
* Jei ne: pašalinkite įrenginį iš savo išmaniojo telefono Bluetooth nustatymų.
* Palaukite apie 5 min. kol Dexcom siųstuvas pakartotinai prisijungs automatiškai.

### Problemos paleidžiant naują sensorių

Atminkite, kad šis metodas gali neveikti, jei jūsų siųstuvo serijos Nr. is starting with 8G or 8H.

* Natyvinis sensorius pažymimas kaip: „KLAIDA: Sensoriaus nepavyko startuoti“
* Stop sensor
* Paleiskite telefoną iš naujo
* Startuokite sensorių su kodu 0000 (keturi nuliai)
* Palaukite 15 min
* Stop sensor
* Startuokite sensorių su tikru kodu (atspausdintu ant apsauginės plėvelės)

Patikrinkite xDrip+ žurnalus, ar xDrip+ pradeda skaičiuoti „Trukmė: 1 minutė“ (ir pan.). Only in the xDrip+ logs you can detect at an early stage whether xdrip+ has stopped a sensor. Pradinio ekrano apačioje vėliausia būsena ne visada rodoma teisingai.

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

### Prijunkite Libre siųstuvą & paleiskite sensorių

![xDrip+ Startuoti Libre siųstuvą & Sensorių 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Startuoti Libre siųstuvą & Sensorių 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Startuoti Libre siųstuvą & Sensorių 3](../images/xDrip_Libre_Transmitter03.png)