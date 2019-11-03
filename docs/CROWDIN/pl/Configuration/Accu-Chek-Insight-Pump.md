# Pompa Accu-Chek Insight

**Oprogramowanie jest częścią rozwiązania DIY (Do It Yourself - Zrób to sam) sztucznej trzustki, nie jest to produkt komercyjny. Dlatego projekt wymaga od Ciebie abyś przeczytał, uczył się i rozumiał, jak system pracuje i jak go używać. System nie zwalnia Cię z podejmowania decyzji oraz ze wszystkich trudności związanych z leczeniem cukrzycy, ale jeśli jesteś skłonny zainwestować niezbędny czas, może poprawić wyniki terapii i poprawić jakość życia. Nie śpiesz się, daj sobie czas na naukę. Tylko Ty jesteś odpowiedzialny za to co robisz z systemem.**

* * *

## *** OSTRZEŻENIE: ** Jeśli wcześniej korzystałeś z Insight z ** SightRemote **, ** zaktualizuj do najnowszej wersji ** i ** odinstaluj SightRemote </0 >.</em></h2> 

## Wymagania sprzętowe i programowe

* Pompa Roche Accu-Chek Insight (wszelkie oprogramowanie układowe, wszystkie współpracują z AAPS) <br> Uwaga: AAPS będzie zapisywać dane zawsze w <b> pierwszym profilu dawek podstawowych w pompie </b>* Telefon z Androidem (zasadniczo każda wersja Androida będzie dobra, ale sam AndroidAPS wymaga co najmniej Androida 5 (Lollipop)).
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

Uwaga: Nie będzie stałego połączenia między pompą a telefonem. Połączenie zostanie ustanowione tylko w razie potrzeby (tj. Ustawienie tymczasowej dawki podstawowej, podanie bolusa, odczyt historii pompy ...). W przeciwnym razie bateria telefonu i pompy zbyt szybko by się rozładowały.

## Ustawienia w AAPS

![Zrzut ekranu ustawień pompy Insight](../images/Insight_pairing_V2_5.png)

W ustawieniach Insight w AndroidAPS możesz włączyć następujące opcje:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.
* „Rejestrowanie zmian drenu”: Dodaje to uwagę do bazy danych AndroidAPS po uruchomieniu programu „wypełnienie drenu” w pompie.
* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump. **Note: A cannula change also resets Autosens.**
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

Dla okresów, w których pompa została zatrzymana, AAPS zapisze tymczasową dawkę podstawową z 0%.

W AndroidAPS zakładka Accu-Chek Insight pokazuje aktualny stan pompy i ma dwa przyciski:

* „Odśwież”: Odświeża status pompy
* „Włącz / wyłącz powiadamianie TBR”: standardowa pompa Insight wysyła alarm po zakończeniu TBR. Ten przycisk umożliwia włączenie lub wyłączenie tego alarmu bez konieczności instalowania oprogramowania konfiguracyjnego.
    
    ![Zrzut ekranu statusu pompy Insight](../images/Insight_Status2.png)

## Ustawienia w pompie

Skonfiguruj alarmy w pompie w następujący sposób:

* Menu> Ustawienia> Ustawienia urządzenia> Ustawienia trybu> Cicho> Sygnał> Menu dźwięku> Ustawienia> Ustawienia urządzenia> Ustawienia trybu> Cicho> Głośność> 0 (usuń wszystkie paski)
* Menu> Tryby> Tryb sygnału> Cichy

Spowoduje to wyciszenie wszystkich alarmów z pompy, umożliwiając AndroidAPS podjęcie decyzji, czy alarm jest dla Ciebie odpowiedni. Jeśli AndroidAPS nie potwierdzi alarmu, jego głośność wzrośnie (pierwszy sygnał dźwiękowy, a następnie wibracja).

Pompy Insight z nowszym oprogramowaniem układowym będą wibrować przez krótki czas za każdym razem, gdy zostanie dostarczony bolus (na przykład, gdy AndroidAPS wydaje emulację SMB lub TBR, zapewnia przedłużony bolus). Wibracji nie można wyłączyć. Starsze pompy nie drgają w takich okolicznościach.

## Wymiana baterii

Pompa Insight ma małą wewnętrzną baterię, która pozwala zachować niezbędne funkcje, takie jak zegar działający podczas wymiany baterii. Jeśli wymiana baterii trwa zbyt długo, bateria wewnętrzna może się wyczerpać, zegar zostanie zresetowany, a po włożeniu nowej baterii zostaniesz poproszony o wprowadzenie nowej godziny i daty. Jeśli tak się stanie, wszystkie wpisy w AndroidAPS przed wymianą baterii nie będą już uwzględniane w obliczeniach, ponieważ prawidłowy czas nie może być prawidłowo zidentyfikowany.

## Typowe błędy

### Bolus Przedłużony

Wystarczy użyć jednego przedłużonego bolusa jednocześnie, ponieważ wielokrotne przedłużone bolusy w tym samym czasie mogą powodować błędy.

### Koniec czasu

Czasami może się zdarzyć, że pompa Insight nie odpowie podczas konfiguracji połączenia. W takim przypadku AAPS wyświetli następujący komunikat: „Limit czasu podczas uzgadniania - resetowanie bluetooth”.

![Pompa Insight reset Bluetooth](../images/Insight_ResetBT.png)

W takim przypadku wyłącz bluetooth w pompie i smartfonie przez około 10 sekund, a następnie włącz go ponownie.

## Przekraczanie stref czasowych z pompą Insight

Informacje na temat podróżowania w różnych strefach czasowych można znaleźć w sekcji [ Strefa czasowa, podróżując z pompą ](../Usage/Timezone-traveling#insight).