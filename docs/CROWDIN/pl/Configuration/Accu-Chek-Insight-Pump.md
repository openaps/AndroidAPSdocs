# Pompa Accu-Chek Insight

**Oprogramowanie jest częścią rozwiązania DIY (Do It Yourself - Zrób to sam) sztucznej trzustki, nie jest to produkt komercyjny. Dlatego projekt wymaga od Ciebie abyś przeczytał, uczył się i rozumiał, jak system pracuje i jak go używać. System nie zwalnia Cię z podejmowania decyzji oraz ze wszystkich trudności związanych z leczeniem cukrzycy, ale jeśli jesteś skłonny zainwestować niezbędny czas, może poprawić wyniki terapii i poprawić jakość życia. Nie śpiesz się, daj sobie czas na naukę. Tylko Ty jesteś odpowiedzialny za to co robisz z systemem.**

* * *

## *** OSTRZEŻENIE: ** Jeśli wcześniej korzystałeś z Insight z ** SightRemote **, ** zaktualizuj do najnowszej wersji ** i ** odinstaluj SightRemote </0 >.</em></h2> 

## Wymagania sprzętowe i programowe

* A Roche Accu-Chek Insight pump (any firmware, they all work)
    
    Note: AAPS will write data always in **first basal rate profile in the pump**.

* An Android phone (Basically every Android version would work, but AndroidAPS itself requires at least Android 5 (Lollipop).)

* Zainstalowana na Twoim telefonie aplikacja AndroidAPS

## Ustawienia

* Pompa Insight powinna być podłączana tylko do jednego urządzenia naraz. Jeśli wcześniej używałeś pilota Insight (miernik), musisz usunąć go z listy sparowanych urządzeń pompy: Menu> Ustawienia> Komunikacja> Usuń urządzenie
    
    ![Zrzut ekranu Usuń miernik w pompie Insight](../images/Insight_RemoveMeter.png)

* W [ ustawieniach konfiguracji ](../Configuration/Config-Builder) aplikacji AndroidAPS wybierz Accu-Chek Insight w sekcji pompy
    
    ![Zrzut ekranu Panelu konfiguracji AndroidAPS dla ustawień Insight](../images/Insight_ConfigBuilder.png)

* Dotknij koła zębatego, aby otworzyć ustawienia Insight.

* W ustawieniach dotknij przycisku „Insight pairing” u góry ekranu. Powinieneś zobaczyć listę wszystkich pobliskich urządzeń Bluetooth (poniżej po lewej).
* W pompie Insight przejdź do Menu> Ustawienia> Komunikacja> Dodaj urządzenie. Pompa wyświetli następujący ekran (poniżej po prawej) pokazujący numer seryjny pompy.
    
    ![Zrzut ekranu parowania Insight 1](../images/Insight_Pairing1.png)

* Wróć do telefonu, stuknij numer seryjny pompy na liście urządzeń Bluetooth. Następnie dotknij Paruj, aby potwierdzić.
    
    ![Zrzut ekranu parowania Insight 2](../images/Insight_Pairing2.png)

* Zarówno pompa jak i telefon będą wyświetlać kod. Sprawdź, czy kody są takie same na obu urządzeniach, zarówno na pompie jak i na telefonie.
    
    ![Zrzut ekranu parowania Insight 3](../images/Insight_Pairing3.png)

* Sukces! Pomyślnie sparowano pompę z AndroidAPS.
    
    ![Zrzut ekranu parowania Insight 4](../images/Insight_Pairing4.png)

* Aby sprawdzić, czy wszystko jest w porządku, wróć do panelu Konfiguracja w AndroidAPS i dotknij koła zębatego przy Insight Pump, aby przejść do ustawień Insight, następnie dotknij Insight Pairing, zobaczysz informacje o pompie:
    
    ![Zrzut ekranu z informacjami o parowaniu pompy Insight](../images/Insight_PairingInformation.png)

Uwaga: Nie będzie stałego połączenia między pompą a telefonem. A connection will only be established if necessary (i.e. setting temporary basal rate, giving bolus, reading pump history...). W przeciwnym razie bateria telefonu i pompy zbyt szybko by się rozładowały.

## Ustawienia w AAPS

You **must not use ‘Always use basal absolute values’** with Insight pump. In AAPS go to Preferences > Nightscout-Client > Advanced Settings and make sure ‘Always use basal absolute values’ is disabled. It would lead to false TBR settings in Insight pump. As a consequence you will not be able to use Autotune but there is no alternative to disable this when using Insight pump.

![Screenshot of Insight Settings](../images/Insight_pairing_V2_5.png)

In the Insight settings in AndroidAPS you can enable the following options:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.
* „Rejestrowanie zmian drenu”: Dodaje to uwagę do bazy danych AndroidAPS po uruchomieniu programu „wypełnienie drenu” w pompie.
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

* „Odśwież”: Odświeża status pompy
* „Włącz / wyłącz powiadamianie TBR”: standardowa pompa Insight wysyła alarm po zakończeniu TBR. Ten przycisk umożliwia włączenie lub wyłączenie tego alarmu bez konieczności instalowania oprogramowania konfiguracyjnego.
    
    ![Zrzut ekranu statusu pompy Insight](../images/Insight_Status2.png)

## Ustawienia w pompie

Configure alarms in the pump as follows:

* Menu> Ustawienia> Ustawienia urządzenia> Ustawienia trybu> Cicho> Sygnał> Menu dźwięku> Ustawienia> Ustawienia urządzenia> Ustawienia trybu> Cicho> Głośność> 0 (usuń wszystkie paski)
* Menu> Tryby> Tryb sygnału> Cichy

This will silence all alarms from the pump, allowing AndroidAPS to decide if an alarm is relevant to you. If AndroidAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

Insight pumps with newer firmware will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus). Vibration cannot be disabled. Older pumps do not vibrate in these circumstances.

## Wymiana baterii

Battery life for Insight when looping range from 10 to 14 days, max. 20 days. The user reporting this is using Energizer lithium batteries.

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

## Typowe błędy

### Bolus Przedłużony

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Koniec czasu

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Przekraczanie stref czasowych z pompą Insight

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).