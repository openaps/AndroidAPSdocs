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
    
    * Alternatives: see [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) for AndroidAPS

2. [DanaRS](http://www.sooil.com/eng/product/)
    
    * Alternatyvos: 
    * [Accu-Chek Combo](../Sąranka/Accu-Chek-Combo-Siurblys.md)
    * [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
    * [DanaR](../Configuration/DanaR-Insulin-Pump.md)
    * [Tam tikri seni Medtronic pompų modeliai (reikalinga papildoma įranga: RileyLink/Gnarl aparatinė įranga, Android telefonas su Bluetooth Low Energy/BLE mikroschemų rinkiniu)](../Configuration/MedtronicPump.md)
    * Kitos pompos gali būti suderinamos ateityje, dėl išsamesnės informacijos žr. [ateityje galimos pompos ](Future-possible-Pump-Drivers.md).

3. [Dexcom G6](https://dexcom.com)
    
    * Alternatives: see list of possible [BG sources](../Configuration/BG-Source.md)

4. Pasirinktinai: Sony Smartwatch 3 (SWR50)
    
    * Alternatives: All [watches with Google Wear OS](https://wearos.google.com/intl/de_de/#find-your-watch) should work fine, for details see [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) for AndroidAPS (OS must be Android Wear)

## Nightscout nustatymas

Žr. detaliau [Nightscout nustatymas](../Installing-AndroidAPS/Nightscout.md)

## Kompiuterio nustatymas

Norėdami sukurti Android programą iš nemokamo AAPS kodo, savo kompiuteryje ar nešiojamajame kompiuteryje (Windows, Mac, Linux) turite įdiegti Android Studio. Išsamią instrukciją galima rasti čia [Android programos (APK) kūrimas](../Installing-AndroidAPS/Building-APK.md).

Diegdami Android Studio būkite kantrūs, nes programa į savo kompiuterį atsisiunčia daug papildomų komponentų.

## Išmanaus telefono nustatymas

![Išmanusis telefonas](../images/SampleSetupSmartphone.png)

### Patikrinkite išmaniojo telefono programinę įrangą

* Menu > Settings > Phone info > Software info: At least "Android-Version 8.0" (successfully tested up to Android version 8.0.0 Oreo - Samsung Experience Version 9.0) 
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

To do this perform the following steps on your smartphone:

1. Jei originali Dexcom programėlė yra įdiegta: 
    * Sustabdykite sensorių
    * Ištrinkite programas per Meniu > Nustatymai> Programos> Dexcom G6 Mobile > Pašalinti
2. Download and install the [BYODA Dexcom ap](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app)
3. Start modified Dexcom G6 app, activate/calibrate the sensor according to the given instructions and wait until the warm-up phase is finished.
4. Once the modified Dexcom app shows actual glucose value, setup the warnings (hamburger menu on top left side of the screen) as follows: 
    * Urgent low `55mg/dl` / `3.1mmol/l` (cannot be disabled)
    * Low `OFF`
    * High `OFF`
    * Rise rate `OFF`
    * Fall rate `OFF`
    * Signal loss `OFF`

## Įdiegti AndroidAPS

1. Follow the instructions to [build the APK](../Installing-AndroidAPS/Building-APK.md#generate-signed-apk)
2. [Transfer](../Installing-AndroidAPS/Building-APK.md#transfer-apk-to-smartphone) the generated APK to your phone
3. [Konfigūruokite AndroidAPS](../Configuration/Config-Builder.md) pagal savo poreikius, naudodamiesi sąrankos vedliu arba rankiniu būdu
4. Šiame pavyzdyje mes naudojome (be kita ko)

* BG source: `Dexcom G6 App (patched)` -- click cock-wheel and activate `Upload BG data to NS` and `Send BG data to xDrip+` (see [BG source](../Configuration/BG-Source.md))

![G5 Settings](../images/SampleSetupG5Settings.png)

* NS Client activated (see [Nightscout setup](../Installing-AndroidAPS/Nightscout.md))

## Įdiegti xDrip+

xDrip+ is another mature open source app that offers countless possibilities. In this setup, contrary to what the developers first wrote the app for, xDrip+ is not used to collect glucose data from the Dexcom G6, but only to output alarms and to display the current glucose value including the curve on the Android home screen in the widget. With xDrip+ the alarms can be set much more individually than with the Dexcom software, AAPS or Nightscout (no limitation in the selection of sounds, different alarms depending on day/night time etc.).

1. Atsisiųskite naujausią stabilią APK xDrip+ versiją naudodamiesi savo išmaniuoju telefonu iš čia:[https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk ](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) - tik ne versiją iš Google Play Store!
2. Įdiekite xDrip+ pasirinkdami atsisiųstą APK failą.
3. Paleiskite xDrip+ ir atlikite šiuos nustatymus (trijų linijų meniu viršuje kairėje) 
    * Nustatymai> Aliarmai ir perspėjimai> Įspėjimų apie KG lygį sąrašas> Sukurkite įspėjimus (aukštus ir žemus) pagal jūsų poreikius.
    * Esamus įspėjimus galima pakeisti ilgai spustelėjus signalo piktogramą.
    * Nustatymai > Aliarmai ir perspėjimai > Kalibravimo įspėjimai: išjungti (priminimas per modifikuotą Dexcom programą)
    * Nustatymai > Aparatūros duomenų šaltinis> 640G/EverSense
    * Nustatymai> Tarp-programų nustatymai> Priimti kalibravimą> `Įgalinta`
    * Meniu> Sensoriaus paleidimas (tai tik „forma“, neturi nieko bendra su veikiančiu G6 sensoriumi. Turite jį įjungti, kitaip klaidos pranešimas reguliariai pasirodys.) 

For more information about xDrip+, see here [BG source page](../Configuration/BG-Source.md).

### Įspėjimo konfigūracijos pavyzdys

The "Urgent low alarm" (below 55 mg/dl resp. 3,1 mmol) is a standard alarm from the modified Dexcom app that cannot be disabled.

![xDrip alarms](../images/SampleSetupxDripWarning.png)

Tip for meetings / church visits / cinema etc..:

If "Do not disturb" mode is activated in the Samsung Galaxy S7 (Menu > Settings > Sounds and vibration > Do not disturb: slider to right side (= active)), the phone only vibrates during urgent low alarm and does not issue an acoustic warning. For the other alarms set up via xDrip+ you can select whether the silent mode should be ignored (acoustic sound played) or not.

## Išjunkite energijos taupymą

On your Samsung Galaxy S7 go to Menu > Settings > Device Maintenance > Battery > Unmonitored Apps > + Add apps: Select the apps AndroidAPS, Dexcom G6 Mobile, xDrip+ and Android Wear (if smartwatch is used) one after the other

## Pasirinktinai: Sony Smartwatch 3 (SWR50)

With an Android Wear smartwatch life with diabetes can be made even more inconspicuous. The watch can be used to display the current glucose level, the status of the loop etc. on the wrist. Laikrodis netgi gali būti naudojamas valdyti AndroidAPS (pvz., diskretiškai nustatyti bolusą maistui). To do this, double tap the CGM value of the AAPSv2 watchface. The SWR50 usually runs for a full day until the battery needs to be recharged (same charger as the Samsung Galaxy S7: microUSB).

![Išmanieji laikrodžiai](../images/SampleSetupSmartwatch.png)

Details about the information displayed on the watchface can be found [here](../Configuration/Watchfaces.md).

* Įdiekite Android Wear programą į išmanųjį telefoną per Google Play parduotuvę ir suporuokite SWR50 pagal ten pateiktas instrukcijas.
* AAPS trijų linijų meniu (viršuje kairėje)> Konfigūracija> Bendroji dalis (sąrašo apačioje)> Išmanieji laikrodžiai> suaktyvinti kairėje pusėje, spustelėkite krumpliaratį> Išmaniojo laikrodžio nustatymai > `Valdymas iš laikrodžio`
* Išmaniajame laikrodyje: Ilgai paspauskite ekraną, kad pakeistumėte laikrodžio numatytą ekraną, tada pasirinkite `AAPSv2`
* Jei reikia, iš naujo perkraukite abu prietaisus.

## Pompos nustatymai

see [Dana RS pump](../Configuration/DanaRS-Insulin-Pump.md)