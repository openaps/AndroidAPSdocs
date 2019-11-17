# Accu-Chek Insight Pump

**Ši programinė įranga yra ne paruoštas produktas, o Pasidaryk Pats sprendimo dalis, todėl Jūs turite skaityti, mokytis ir suprasti sistemos veikimą savarankiškai. Tai nėra kažkas, kas kontroliuos Jūsų diabetą už Jus, tačiau jei skirsite tiek laiko, kiek reikia, sistema leis Jums pagerinti diabeto kontrolę ir gyvenimo kokybę. Nepulkite stačia galva, skirkite laiko mokymuisi. Tik Jūs pats atsakote už tai, ką darysite su šia sistema.**

* * *

## *** DĖMESIO: ** Jei iki šiol naudojote „Insight“ pompą su ** SightRemote ** nuotolinio valdymo pultu, ** įdiekite naujausią AAPS versiją ** ir ** pašalinkite SightRemote **.*

## Reikalavimai techninei ir programinei įrangai

* A Roche Accu-Chek Insight pump (any firmware, they all work)
    
    Note: AAPS will write data always in **first basal rate profile in the pump**.

* Android telefonas (veiks bet kuri versija, bet AndroidAPS veikimui reikia bent Android 5 („Lollipop“).)

* Jūsų telefone įdiegtos AndroidAPS programos

## Setup

* Insight pompa turi būti prijungta tik prie vieno įrenginio vienu metu. Jei anksčiau esate prijungę nuotolinio valdymo pultą „Insight“ (matuoklį), jį turite pašalinti iš pompos suporuotų įrenginių sąrašo: Meniu > Nustatymai > Ryšiai > Ištrinti įrenginį
    
    ![Ekrano vaizdas, kaip pašalinti gliukometrą iš Insight pompos](../images/Insight_RemoveMeter.png)

* AndroidAPS programos [ konfigūratoriuje ](../Configuration/Config-Builder) pompos skyriuje pasirinkite Accu-Chek Insight
    
    ![Insight pompos konfigūratoriaus ekrano vaizdas](../images/Insight_ConfigBuilder.png)

* Spustelėkite krumpliaračio piktogramą, kad atidarytumėte Insight nustatymus.

* Nustatymuose ekrano viršuje spustelėkite mygtuką „Prijungti Insight“. Pamatysite netoliese esančių Bluetooth įrenginių sąrašą (žemiau kairėje).
* Insight pompoje eikite į meniu> Nustatymai> Ryšiai> Pridėti įrenginį. Pompos ekrane (apačioje dešinėje) pasirodys pompos serijos numeris.
    
    ![Insight suporavimo ekrano vaizdas 1](../images/Insight_Pairing1.png)

* Telefono Bluetooth įrenginių sąraše spustelėkite pompos serijos numerį. Tada spustelėkite Suporuoti, kad patvirtintumėte veiksmą.
    
    ![Insight suporavimo ekrano vaizdas 2](../images/Insight_Pairing2.png)

* Tiek pompa, tiek telefonas parodys kodą. Check that the codes are the same on both devices and confirm on both the pump and the phone.
    
    ![Screenshot of Insight Pairing 3](../images/Insight_Pairing3.png)

* Success! Pat yourself on the back for successfully pairing your pump with AndroidAPS.
    
    ![Screenshot of Insight Pairing 4](../images/Insight_Pairing4.png)

* To check all is well, go back to Config builder in AndroidAPS and tap on the cog-wheel by the Insight Pump to get into Insight settings, then tap on Insight Pairing and you will see some information about the pump:
    
    ![Screenshot of Insight Pairing Information](../images/Insight_PairingInformation.png)

Note: There will be no permanent connection between pump and phone. A connection will only be established if necessary (i.e. setting temporary basal rate, giving bolus, reading pump history...). Otherwise battery of phone and pump would drain way too fast.

## Settings in AAPS

You **must not use ‘Always use basal absolute values’** with Insight pump. In AAPS go to Preferences > Nightscout-Client > Advanced Settings and make sure ‘Always use basal absolute values’ is disabled. It would lead to false TBR settings in Insight pump. As a consequence you will not be able to use Autotune but there is no alternative to disable this when using Insight pump.

![Screenshot of Insight Settings](../images/Insight_pairing_V2_5.png)

In the Insight settings in AndroidAPS you can enable the following options:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.
* "Log tube changes": This adds a note to the AndroidAPS database when you run the "tube filling" program on the pump.
* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump. **Note: A site change also resets Autosens.**
* "Log battery changes": This records a battery change when you put a new battery in the pump.
* "Log operating mode changes": This inserts a note in the AndroidAPS database whenever you start, stop or pause the pump.
* "Log alerts": This records a note in the AndroidAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).
* "Enable TBR emulation": The Insight pump can only issue temporary basal rates (TBRs) up to 250%. To get round this restriction, TBR emulation will instruct the pump to deliver an extended bolus for the extra insulin if you request a TBR of more than 250%.
    
    **Note: Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.**

* "Recovery duration": This defines how long AndroidAPS will wait before trying again after a failed connection attempt. You can choose from 0 to 20 seconds. If you experience connection problems, choose a longer wait time.   
      
    Example for min. recovery duration = 5 and max. recovery duration = 20   
      
    no connection -> wait **5** sec.   
    retry -> no connection -> wait **6** sec.   
    retry -> no connection -> wait **7** sec.   
    retry -> no connection -> wait **8** sec.   
    ...   
    retry -> no connection -> wait **20** sec.   
    retry -> no connection -> wait **20** sec.   
    ...

* "Disconnect delay": This defines how long (in seconds) AndroidAPS will wait to disconnect from the pump after an operation is finished. Default value is 5 seconds.

For periods when pump was stopped AAPS will log a temp. basal rate with 0%.

In AndroidAPS, the Accu-Chek Insight tab shows the current status of the pump and has two buttons:

* "Refresh": Refreshes pump status
* "Enable/Disable TBR over notification": A standard Insight pump emits an alarm when a TBR is finished. This button lets you enable or disable this alarm without the need for configuration software.
    
    ![Screenshot of Insight Status](../images/Insight_Status2.png)

## Settings in the pump

Configure alarms in the pump as follows:

* Menu > Settings > Device settings > Mode settings > Quiet > Signal > Sound Menu > Settings > Device settings > Mode settings > Quiet > Volume > 0 (remove all bars)
* Menu > Modes > Signal mode > Quiet

This will silence all alarms from the pump, allowing AndroidAPS to decide if an alarm is relevant to you. If AndroidAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

Insight pumps with newer firmware will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus). Vibration cannot be disabled. Older pumps do not vibrate in these circumstances.

## Battery replacement

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

## Insight specific errors

### Extended bolus

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Time out

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Crossing time zones with Insight pump

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).