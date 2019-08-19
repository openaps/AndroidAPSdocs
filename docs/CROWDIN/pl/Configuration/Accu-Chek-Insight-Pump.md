# Pompa Accu-Chek Insight

**Oprogramowanie jest częścią rozwiązania DIY (Do It Yourself - Zrób to sam) sztucznej trzustki, nie jest to produkt komercyjny. Dlatego projekt wymaga od Ciebie abyś przeczytał, uczył się i rozumiał, jak system pracuje i jak go używać. System nie zwalnia Cię z podejmowania decyzji oraz ze wszystkich trudności związanych z leczeniem cukrzycy, ale jeśli jesteś skłonny zainwestować niezbędny czas, może poprawić wyniki terapii i poprawić jakość życia. Nie śpiesz się, daj sobie czas na naukę. Tylko Ty jesteś odpowiedzialny za to co robisz z systemem.**

* * *

## ***WARNING:** If you have been using the Insight with **SightRemote** in the past, please **update to the newest AAPS version** and **uninstall SightRemote**.*

## Wymagania sprzętowe i programowe

* Pompa Roche Accu-Chek Insight (wszelkie oprogramowanie układowe, wszystkie współpracują z AAPS) <br /> Uwaga: AAPS będzie zapisywać dane zawsze w ** pierwszym profilu dawek podstawowych w pompie **
* Telefon z Androidem (zasadniczo każda wersja Androida będzie dobra, ale sam AndroidAPS wymaga co najmniej Androida 5 (Lollipop)).
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

![Zrzut ekranu ustawień pompy Insight](../images/Insight_pairing.png)

W ustawieniach Insight w AndroidAPS możesz włączyć następujące opcje:

* „Rejestruj zmiany w witrynie”: spowoduje to automatyczne zarejestrowanie zmiany wkładu insuliny po uruchomieniu programu „napełnij kaniulę” na pompie.   
    <font color="red"> Uwaga: Zmiana kaniuli powoduje również reset ustawień autosens </b> </font>
* „Rejestrowanie zmian drenu”: Dodaje to uwagę do bazy danych AndroidAPS po uruchomieniu programu „wypełnienie drenu” w pompie.
* „Rejestrowanie zmian baterii”: Zapisuje zmianę baterii po włożeniu nowej baterii do pompy.
* „Zmiany trybu logowania”: wstawia notatkę w bazie danych AndroidAPS przy każdym uruchomieniu, zatrzymaniu lub wstrzymaniu pompy.
* „Log alerts”: rejestruje notatkę w bazie danych AndroidAPS za każdym razem, gdy pompa wydaje alert (z wyjątkiem przypomnień, anulowania bolusa i TBR - te nie są rejestrowane).
* „Włącz emulację TBR”: pompa Insight może wydawać tymczasowe stawki podstawowe (TBR) tylko do 250%. Aby obejść to ograniczenie, emulacja TBR poinstruuje pompę o dostarczeniu przedłużonego bolusa dla dodatkowej insuliny, jeśli zażądasz TBR o wartości większej niż 250%.   
    <font color="red"> Uwaga: Po prostu użyj jednego przedłużonego bolusa jednocześnie jako wielokrotnego. Przedłużone bolusy w tym samym czasie mogą powodować błędy. </font>
* „Czas przywracania”: określa, jak długo AndroidAPS będzie czekał przed ponowną próbą po nieudanej próbie połączenia. Możesz wybrać od 0 do 20 sekund. Jeśli wystąpią problemy z połączeniem, wybierz dłuższy czas oczekiwania.   
      
    Przykład dla min. czas przywracania = 5 i maks. czas przywracania= 20   
      
    brak połączenia -> czekaj ** 5 ** sek.   
    ponów próbę -> brak połączenia -> poczekaj ** 6 ** sek.   
    ponów próbę -> brak połączenia -> poczekaj ** 7 ** sek.   
    ponów próbę -> brak połączenia -> poczekaj ** 8 ** sek.   
    ...   
    ponów próbę -> brak połączenia -> poczekaj ** 20 ** sek.   
    ponów próbę -> brak połączenia -> poczekaj ** 20 ** sek.   
    ...

* „Disconnect delay”: Określa, jak długo (w sekundach) AndroidAPS będzie czekał na odłączenie od pompy po zakończeniu operacji. Wartość domyślna to 5 sekund.

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