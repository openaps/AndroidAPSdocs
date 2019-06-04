# Pompa Accu-Chek Insight

**Oprogramowanie jest częścią rozwiązania DIY (Do It Yourself - Zrób to sam) sztucznej trzustki, nie jest to produkt komercyjny. Dlatego projekt wymaga od Ciebie abyś przeczytał, uczył się i rozumiał, jak system pracuje i jak go używać. System nie zwalnia Cię z podejmowania decyzji oraz ze wszystkich trudności związanych z leczeniem cukrzycy, ale jeśli jesteś skłonny zainwestować niezbędny czas, może poprawić wyniki terapii i poprawić jakość życia. Nie śpiesz się, daj sobie czas na naukę. Tylko Ty jesteś odpowiedzialny za to co robisz z systemem.**

* * *

## *** OSTRZEŻENIE: ** Jeśli wcześniej korzystałeś z Insight z ** SightRemote **, ** zaktualizuj do wersji 2.1 ** i ** odinstaluj SightRemote </0 >.</em></h2> 

## Wymagania sprzętowe i programowe

* Pompa Roche Accu-Chek Insight (wszelkie oprogramowanie układowe, wszystkie współpracują z AAPS) <br /> Uwaga: AAPS będzie zapisywać dane zawsze w ** pierwszym profilu dawek podstawowych w pompie **
* Telefon z Androidem (zasadniczo każda wersja Androida będzie dobra, ale sam AndroidAPS wymaga co najmniej Androida 5 (Lollipop)).
* Aplikacja AndroidAPS (przynajmniej v2.1) zainstalowana w telefonie

## Ustawienia

* Pompa Insight powinna być podłączana tylko do jednego urządzenia naraz. Jeśli wcześniej używałeś pilota Insight (miernik), musisz usunąć go z listy sparowanych urządzeń pompy: Menu> Ustawienia> Komunikacja> Usuń urządzenie
    
    ![Screenshot of Remove Meter Insight](../images/Insight_RemoveMeter.png)

* W [ ustawieniach konfiguracji ](../Configuration/Config-Builder) aplikacji AndroidAPS wybierz Accu-Chek Insight w sekcji pompy
    
    ![Screenshot of Config Builder Insight](../images/Insight_ConfigBuilder.png)

* Dotknij koła zębatego, aby otworzyć ustawienia Insight.

* W ustawieniach dotknij przycisku „Insight pairing” u góry ekranu. Powinieneś zobaczyć listę wszystkich pobliskich urządzeń Bluetooth (poniżej po lewej).
* W pompie Insight przejdź do Menu> Ustawienia> Komunikacja> Dodaj urządzenie. Pompa wyświetli następujący ekran (poniżej po prawej) pokazujący numer seryjny pompy.
    
    ![Screenshot of Insight Pairing 1](../images/Insight_Pairing1.png)

* Wróć do telefonu, stuknij numer seryjny pompy na liście urządzeń Bluetooth. Następnie dotknij Paruj, aby potwierdzić.
    
    ![Screenshot of Insight Pairing 2](../images/Insight_Pairing2.png)

* Zarówno pompa jak i telefon będą wyświetlać kod. Sprawdź, czy kody są takie same na obu urządzeniach, zarówno na pompie jak i na telefonie.
    
    ![Screenshot of Insight Pairing 3](../images/Insight_Pairing3.png)

* Sukces! Pomyślnie sparowano pompę z AndroidAPS.
    
    ![Screenshot of Insight Pairing 4](../images/Insight_Pairing4.png)

* Aby sprawdzić, czy wszystko jest w porządku, wróć do panelu Konfiguracja w AndroidAPS i dotknij koła zębatego przy Insight Pump, aby przejść do ustawień Insight, następnie dotknij Insight Pairing, zobaczysz informacje o pompie:
    
    ![Screenshot of Insight Pairing Information](../images/Insight_PairingInformation.png)

Uwaga: Nie będzie stałego połączenia między pompą a telefonem. Połączenie zostanie ustanowione tylko w razie potrzeby (tj. Ustawienie tymczasowej dawki podstawowej, podanie bolusa, odczyt historii pompy ...). W przeciwnym razie bateria telefonu i pompy zbyt szybko by się rozładowały.

## Ustawienia w AAPS

![Screenshot of Insight Settings](../images/Insight_pairing.png)

In the Insight settings in AndroidAPS you can enable the following options:

* "Log site changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.  
    <font color="red">Note: A cannula change also resets Autosens</b></font>
* "Log tube changes": This adds a note to the AndroidAPS database when you run the "tube filling" program on the pump.
* "Log battery changes": This records a battery change when you put a new battery in the pump.
* "Log operating mode changes": This inserts a note in the AndroidAPS database whenever you start, stop or pause the pump.
* "Log alerts": This records a note in the AndroidAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).
* "Enable TBR emulation": The Insight pump can only issue temporary basal rates (TBRs) up to 250%. To get round this restriction, TBR emulation will instruct the pump to deliver an extended bolus for the extra insulin if you request a TBR of more than 250%.  
    <font color="red">Note: Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.</font>
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

For information on traveling accross time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).