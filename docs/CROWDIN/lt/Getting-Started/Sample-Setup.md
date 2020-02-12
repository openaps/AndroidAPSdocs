# Sample setup: Samsung S7, DanaRS, Dexcom G6 and Sony Smartwatch

![Sample Setup](../images/SampleSetup.png)

## Aprašymas

Šiame derinyje Samsung Galaxy S7 išmanusis telefonas naudojamas kaip ciklo valdymo centras. The slightly modified Dexcom App reads glucose values from the Dexcom G6 CGM. AndroidAPS is used to control the Dana RS insulin pump from Korean manufacturer SOOIL via bluetooth. Nereikia jokių papildomų įrenginių.

Kadangi Dexcom programa siūlo ribotas įspėjimo parinktis, atvirojo kodo xDrip + programa yra sukonfigūruota ne tik aukštos ir žemos glikemijos aliarmams, bet ir kitiems perspėjimams, atsižvelgiant į individualius poreikius.

Pasirinktinai galite naudoti Android išmanųjį laikrodį (šiame pavyzdyje naudojamas Sony Smartwatch 3 (SWR50)), norėdami matyti savo glikemijos duomenis ir AndroidAPS parametrus. Laikrodis netgi gali būti naudojamas valdyti AndroidAPS (pvz., diskretiškai nustatyti bolusą maistui).

Sistema veikia neprisijungus. Tai reiškia, kad norint naudotis sistema nereikia prijungti savo išmaniojo telefono prie interneto.

Tačiau, kai yra interneto ryšys, duomenys automatiškai įkeliami į Nightscout „debesį“. Ši parinktis leidžia beveik bet kuriuo metu pateikti išsamų glikemijos ataskaitą gydytojui ar šeimos nariams. Taip pat galite siųsti duomenis į Nightscout tik naudodami (jei nustatėte) Wi-Fi ryšį, kad galėtumėte kurti įvairias Nightscout ataskaitas.

## Būtini komponentai

1. Samsung Galaxy S7
    
    * Alternatyvos: žr. [patikrintų telefonų ir išmaniųjų laikrodžių sąrašą](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435)

2. [DanaRS](http://www.sooil.com/eng/product/)
    
    * Alternatyvos: 
    * [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
    * [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
    * [DanaR](../Configuration/DanaR-Insulin-Pump.md)
    * [Some old Medtronic pumps (additionally needed: RileyLink/Gnarl hardware, Android Phone with bluetooth low energy / BLE-chipset)](../Configuration/MedtronicPump.md)
    * Other pumps might be available in the future, see [future possible pump drivers](Future-possible-Pump-Drivers.md) for details.

3. [Dexcom G6](https://dexcom.com)
    
    * Alternatyvos: žr. galimų [glikemijos šaltinių](../Configuration/BG-Source.rst) sąrašą

4. Pasirinktinai: Sony Smartwatch 3 (SWR50)
    
    * Alternatives: All [watches with Google Wear OS](https://wearos.google.com/intl/de_de/#find-your-watch) should work fine, for details see [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) for AndroidAPS (OS must be Android Wear)

## Nightscout nustatymas

Žr. detaliau [Nightscout nustatymas](../Installing-AndroidAPS/Nightscout.md)

## Kompiuterio nustatymas

Norėdami sukurti Android programą iš nemokamo AAPS kodo, savo kompiuteryje ar nešiojamajame kompiuteryje (Windows, Mac, Linux) turite įdiegti Android Studio. Išsamią instrukciją galima rasti čia [Android programos (APK) kūrimas](../Installing-AndroidAPS/Building-APK.md).

Diegdami Android Studio būkite kantrūs, nes programa į savo kompiuterį atsisiunčia daug papildomų komponentų.

## Išmanaus telefono nustatymas

![Smartphone](../images/SampleSetupSmartphone.png)

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

![Dexcom App patched](../images/SampleSetupDexApp.png)

Originali Dexcom programa iš Google Play Store neveiks, nes ji neperduoda duomenų į kitas programas. Todėl reikalinga šiek tiek pakeista mūsų bendruomenės versija. Tik ši modifikuota Dexcom programa gali bendrauti su AAPS. Be to, modifikuota Dexcom programa gali veikti su visais Android išmaniaisiais telefonais, o ne tik su tais, kurie yra [ Dexcom suderinamumo sąraše](https://www.dexcom.com/dexcom-international-compatibility).

A mmol/l version and a mg/dl version of the modified Dexcom G6 app are available at <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>. You have to choose G6 app for your region.

To do this perform the following steps on your smartphone:

1. Jei originali Dexcom programėlė yra įdiegta: 
    * Sustabdykite sensorių
    * Uninstall app via Menu > Settings > Apps > Dexcom G6 Mobile > Uninstall
2. Download modified Dexcom app (check unit mg/dl or mmol/l and region according to your needs): <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>
3. Install modified Dexcom G6 app on your smartphone (= select the downloaded APK file)
4. Start modified Dexcom G6 app, activate/calibrate the sensor according to the given instructions and wait until the warm-up phase is finished.
5. Once the modified Dexcom app shows actual glucose value, setup the warnings (hamburger menu on top left side of the screen) as follows: 
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

* BG source: `Dexcom G6 App (patched)` -- click cock-wheel and activate `Upload BG data to NS` and `Send BG data to xDrip+` (see [BG source](../Configuration/BG-Source.rst))

![G5 Settings](../images/SampleSetupG5Settings.png)

* NS Client suaktyvintas (žr. [NS Client](../Configuration/Config-Builder#ns-profile) ir [Nightscout nustatymai](../Installing-AndroidAPS/Nightscout.md))

## Įdiegti xDrip+

xDrip+ is another mature open source app that offers countless possibilities. In this setup, contrary to what the developers first wrote the app for, xDrip+ is not used to collect glucose data from the Dexcom G6, but only to output alarms and to display the current glucose value including the curve on the Android home screen in the widget. With xDrip+ the alarms can be set much more individually than with the Dexcom software, AAPS or Nightscout (no limitation in the selection of sounds, different alarms depending on day/night time etc.).

1. Atsisiųskite naujausią stabilią APK xDrip+ versiją naudodamiesi savo išmaniuoju telefonu iš čia:[https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk ](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) - tik ne versiją iš Google Play Store!
2. Įdiekite xDrip+ pasirinkdami atsisiųstą APK failą.
3. Paleiskite xDrip+ ir atlikite šiuos nustatymus (trijų linijų meniu viršuje kairėje) 
    * Nustatymai> Aliarmai ir perspėjimai> Įspėjimų apie KG lygį sąrašas> Sukurkite įspėjimus (aukštus ir žemus) pagal jūsų poreikius. 
    * Esamus įspėjimus galima pakeisti ilgai spustelėjus signalo piktogramą.
    * Settings > Alarms and Alerts > Calibration Alerts: disabled (reminded via the modified Dexcom app)
    * Settings > Hardware Data Source > 640G/EverSense
    * Settings > Inter-app settings > Accept Calibrations > `ON`
    * Menu > Start sensor (is only "pro forma" and has nothing to do with the running G6 sensor. This is necessary otherwise an error message will appear regularly.) 

For more information about xDrip+, see here [BG source page](../Configuration/BG-Source.rst).

### Example of an alarm setup

The "Urgent low alarm" (below 55 mg/dl resp. 3,1 mmol) is a standard alarm from the modified Dexcom app that cannot be disabled.

![xDrip alarms](../images/SampleSetupxDripWarning.png)

Tip for meetings / church visits / cinema etc..:

If "Do not disturb" mode is activated in the Samsung Galaxy S7 (Menu > Settings > Sounds and vibration > Do not disturb: slider to right side (= active)), the phone only vibrates during urgent low alarm and does not issue an acoustic warning. For the other alarms set up via xDrip+ you can select whether the silent mode should be ignored (acoustic sound played) or not.

## Disable power saving option

On your Samsung Galaxy S7 go to Menu > Settings > Device Maintenance > Battery > Unmonitored Apps > + Add apps: Select the apps AndroidAPS, Dexcom G6 Mobile, xDrip+ and Android Wear (if smartwatch is used) one after the other

## Optional: Setup Sony Smartwatch 3 (SWR50)

With an Android Wear smartwatch life with diabetes can be made even more inconspicuous. The watch can be used to display the current glucose level, the status of the loop etc. on the wrist. Laikrodis netgi gali būti naudojamas valdyti AndroidAPS (pvz., diskretiškai nustatyti bolusą maistui). To do this, double tap the CGM value of the AAPSv2 watchface. The SWR50 usually runs for a full day until the battery needs to be recharged (same charger as the Samsung Galaxy S7: microUSB).

![Smartwatch](../images/SampleSetupSmartwatch.png)

Details about the information displayed on the watchface can be found [here](../Configuration/Watchfaces.md).

* Install the app "Android Wear" on your smartphone via the Google Play Store and connect the smartwatch according to the instructions there.
* In AAPS choose hamburger menu (top left corner) > Config Builder > General (at the bottom of the list) > Wear > activate on left side, click cock wheel > Wear settings and activate `Controls from Watch`
* On your smartwatch: Long press display to change watchface and select `AAPSv2`
* If necessary restart both devices once.

## Pump setup

see [DanaRS pump](../Configuration/DanaRS-Insulin-Pump.md)