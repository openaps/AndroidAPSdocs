# Accu-Chek Insight pompa

**Ši programinė įranga yra ne paruoštas produktas, o Pasidaryk Pats sprendimo dalis, todėl Jūs turite skaityti, mokytis ir suprasti sistemos veikimą savarankiškai. Tai nėra kažkas, kas kontroliuos Jūsų diabetą už Jus, tačiau jei skirsite tiek laiko, kiek reikia, sistema leis Jums pagerinti diabeto kontrolę ir gyvenimo kokybę. Nepulkite stačia galva, skirkite laiko mokymuisi. Tik Jūs pats atsakote už tai, ką darysite su šia sistema.**

* * *

## *** DĖMESIO: ** Jei iki šiol naudojote „Insight“ pompą su ** SightRemote ** nuotolinio valdymo pultu, ** įdiekite naujausią AAPS versiją ** ir ** pašalinkite SightRemote **.*

## Reikalavimai techninei ir programinei įrangai

* Roche Accu-Chek Combo pompa (bet kuri versija, veikia su visomis)

Pastaba: AAPS visada duomenis įrašys į **pirmąjį pompos bazės profilį**.

* An Android phone (Basically every Android version would work with Insight, but check on the [Module](../Getting-Started/ComponentOverview) page which Android version is required to run AAPS.)
* The AAPS app installed on your phone

## Sąranka

* Insight pompa turi būti prijungta tik prie vieno įrenginio vienu metu. Jei anksčiau esate prijungę nuotolinio valdymo pultą „Insight“ (matuoklį), jį turite pašalinti iš pompos suporuotų įrenginių sąrašo: Meniu > Nustatymai > Ryšiai > Ištrinti įrenginį
    
    ![Ekrano vaizdas, kaip pašalinti gliukometrą iš Insight pompos](../images/Insight_RemoveMeter.png)

* In [Config builder > Pump](../SettingUpAaps/ConfigBuilder.md), select Accu-Chek Insight.
    
    ![Insight pompos konfigūratoriaus ekrano vaizdas](../images/Insight_ConfigBuilder_AAPS3_0.jpg)

* Spustelėkite krumpliaračio piktogramą, kad atidarytumėte Insight nustatymus.

* Nustatymuose ekrano viršuje spustelėkite mygtuką „Prijungti Insight“. Pamatysite netoliese esančių Bluetooth įrenginių sąrašą (žemiau kairėje).
* Insight pompoje eikite į meniu> Nustatymai> Ryšiai> Pridėti įrenginį. Pompos ekrane (apačioje dešinėje) pasirodys pompos serijos numeris.
    
    ![Insight suporavimo ekrano vaizdas 1](../images/Insight_Pairing1.png)

* Telefono Bluetooth įrenginių sąraše spustelėkite pompos serijos numerį. Tada spustelėkite Suporuoti, kad patvirtintumėte veiksmą.
    
    ![Insight suporavimo ekrano vaizdas 2](../images/Insight_Pairing2.png)

* Tiek pompa, tiek telefonas parodys kodą. Įsitikinkite, kad abiejuose įrenginiuose kodai yra vienodi, ir patvirtinkite pompoje ir telefone.
    
    ![Insight suporavimo ekrano vaizdas 3](../images/Insight_Pairing3.png)

* Atlikta! Pat yourself on the back for successfully pairing your pump with AAPS.
    
    ![Insight suporavimo ekrano vaizdas 4](../images/Insight_Pairing4.png)

* To check all is well, go back to Config builder in AAPS and tap on the cog-wheel by the Insight Pump to get into Insight settings, then tap on Insight Pairing and you will see some information about the pump:
    
    ![Insight suporavimo informacijos ekrano vaizdas](../images/Insight_PairingInformation.png)

Pastaba: tarp pompos ir telefono nebus nuolatinio ryšio. Ryšys bus užmegztas tik prireikus (t. y. nustatyti laikiną bazę, suleisti bolusą, perskaityti pompos istoriją ir t.t.). Priešingu atveju telefono ir pompos baterijos greitai išseks.

(Accu-Chek-Insight-Pump-settings-in-aaps)=

## AAPS nustatymai

**Note : It is now possible (only with AAPS v2.7.0 and above) to use ‘Always use basal absolute values’ if you want to use Autotune with Insight pump, even if 'sync is enabled' with Nightscout.** (In AAPS go to [Preferences > NSClient > Advanced Settings](#Preferences-advanced-settings-nsclient)).

![Screenshot of Insight Settings](../images/Insight_settings.png)

In the Insight settings in AAPS you can enable the following options:

* „Įrašyti rezervuaro keitimus“: Tai automatiškai sukurs insulino rezervuaro pakeitimo įrašą, kai bus paleista "užpildyti kateterio kaniulę" funkcija pompoje.

* "Log tube changes": This adds a note to the AAPS database when you run the "tube filling" program on the pump.

* "Log site change": This adds a note to the AAPS database when you run the "cannula filling" program on the pump. **Pastaba: Kateterio pakeitimas paleidžia Autosens funciją iš naujo.**

* „Įrašyti akumuliatoriaus pakeitimą“: Kai pompoje įdedama nauja baterija, į AndroidAPS duomenų bazę pridedama pastaba.

* "Log operating mode changes": This inserts a note in the AAPS database whenever you start, stop or pause the pump.

* "Log alerts": This records a note in the AAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).

* „Įgalinti laikinos bazės TBR emuliaciją“: Insight pompa gali nustatyti tik iki 250% laikinos bazės TBR dydžio. Norėdami išvengti šio apribojimo, dėl laikinos bazės emuliacijos, bus leista pompai suleisti papildomo insulino kaip ištęstą bolusą, jei nustatote daugiau kaip 250% laikinos bazės.
    
    **Pastaba: Rekomenduojama naudoti tik vieną ištęstinį bolusą vienu metu, nes tuo pačiu metu naudojant kelis ištęstinius bolusus gali sukelti klaidas.**

* "Išjungti vibracijas rankiniu boluso atveju": Tai išjungia Insight pompos vibracijas, sueidžiant bolusą rankiniu būdu (arba ištęstą bolusą). Šis nustatymas yra prieinamas tik su naujausia Insight programine įranga (3.x).

* "Išjungti vibracijas automatinio boluso atveju": Tai išjungia Insight pompos vibracijas, suleidžiant bolusą automatiškai (SMB arba laikina bazė su LB emuliacija). Šis nustatymas yra prieinamas tik su naujausia Insight programine įranga (3.x).

* "Recovery duration": This defines how long AAPS will wait before trying again after a failed connection attempt. Jūs galite pasirinkti nuo 0 iki 20 sekundžių. Jei kyla ryšio problemų, pasirinkite ilgesnį laukimo laiką.   
      
    Pavyzdys min. atkūrimo trukmė = 5 ir max. atkūrimo trukmė = 20   
      
    nėra ryšio -> palaukti **5** sek.   
    kartoti -> nėra ryšio -> palaukti **6** sek.   
    kartoti -> nėra ryšio -> palaukti **7** sek.   
    kartoti -> nėra ryšio -> palaukti **8** sek.   
    ...   
    retry -> no connection -> wait **20** sec.   
    retry -> no connection -> wait **20** sec.   
    ...

* "Disconnect delay": This defines how long (in seconds) AAPS will wait to disconnect from the pump after an operation is finished. Numatytoji vertė yra 5 sekundės.

For periods when pump was stopped AAPS will log a temp. basal rate with 0%.

In AAPS, the Accu-Chek Insight tab shows the current status of the pump and has two buttons:

* Atnaujinti: Atnaujina pompos būklę
* „Įgalinti / išjungti pranešimą apie LB“: Standartiškai Insight pompa siunčia aliarmą apie laikinos bazės LB pabaigą. Mygtukas leidžia įjungti arba išjungti šį perspėjimą nekeičiant programinės įrangos konfigūracijos.
    
    ![Dabartinės Insight būsenos ekrano vaizdas](../images/Insight_Status2.png)

## Pompos nustatymai

Configure alarms in the pump as follows:

* Meniu > Nustatymai > Prietaiso nuostatos > Režimo parametrai > Tylus> Signalas > Garsas
* Meniu > Nustatymai > Prietaiso nuostatos > Režimo parametrai > Tylus > Signalas > 0 (nuimti visus stulpelius)
* Meniu> Režimo nustatymai> Signalo režimas> Tylus

This will silence all alarms from the pump, allowing AAPS to decide if an alarm is relevant to you. If AAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

(Accu-Chek-Insight-Pump-vibration)=

### Vibracija

Depending on the firmware version of your pump, the Insight will vibrate briefly every time a bolus is delivered (for example, when AAPS issues an SMB or TBR emulation delivers an extended bolus).

* Programinė versija 1.x: Jokios vibracijos.
* Programinė versija 2.x: Vibracija negali būti išjungta.
* Firmware 3.x: AAPS delivers bolus silently. (minimum [version 2.6.1.4](#Releasenotes-version-2-6-1-4))

Firmware version can be found in the menu.

## Baterijos pakeitimas

Battery life for Insight when looping range from 10 to 14 days, max. 20 days. The user reporting this is using Energizer lithium batteries.

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

(Accu-Chek-Insight-Pump-insight-specific-errors)=

## Insight specifinės klaidos

### Ištęstas bolusas

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Baigėsi laikas

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Kelionė per laiko zonas su Insight pompa

For information on traveling across time zones see section [Timezone traveling with pumps](#timezone-traveling-insight).