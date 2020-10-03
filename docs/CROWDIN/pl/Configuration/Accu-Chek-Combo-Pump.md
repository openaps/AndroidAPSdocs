# Pompa Accu-Chek Spirit Combo

**To oprogramowanie jest częścią rozwiązania DIY (ang. do it yourself, zrób to sam) i nie jest produktem komercyjnym, lecz wymaga od Ciebie, abyś przeczytał dokumentację, uczył się i zrozumiał system - łącznie z tym, jak go używać. To nie jest coś, co będzie za Ciebie zarządzać leczeniem cukrzycy, lecz pozwala poprawić wyrównanie cukrzycy i jakość życia pod warunkiem, że chcesz poświęcić temu wymagany czas. Nie śpiesz się, daj sobie czas na naukę. Tylko Ty jesteś odpowiedzialny za to co robisz z systemem.**

## Wymagania sprzętowe

- Pompa Roche Accu-Chek Spirit Combo (dalej nazywana Combo, dowolna wersja firmware, wszystkie działają)
- Urządzenie Accu-Chek Smart-Pix lub Realtyme wraz z oprogramowaniem 360 Configuration Software do konfiguracji pompy. Oprogramowanie do konfiguracji pompy współpracuje jedynie ze starszą wersją urządzenia Smart-Pix (obudowa w kolorze srebrnym).
- Kompatybilny smartfon z systemem LineageOS 14.1 (dawniej CyanogenMod) lub Android 8.1 (Oreo), lub Android 9.0 (Pie). W przypadku systemu LineageOS należy zastosować najnowszą wersją datowaną na co najmniej czerwca 2017 r., ponieważ zmiana potrzebna do sparowania pompy Combo została wprowadzona dopiero w tym czasie. Listę kompatybilnych smartfonów można znaleźć w dokumencie [AAPS telefony](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). Należy pamiętać, że nie jest to pełna lista jednak odzwierciedla ona doświadczenia użytkowników. Zachęcamy abyście dzielili się swoimi doświadczeniami, zgłaszali problemy, a przede wszystkim polecali innym użytkownikom działające rozwiązania i współpracujące modele urządzeń.

- Pamiętaj, że chociaż Android 8.1/9.0 umożliwia poprawną komunikację z Combo, to nadal występują problemy z AAPS pracującym na telefonach z tymi wersjami Androida. Dla zaawansowanych użytkowników możliwe jest sparowanie pompy z wykorzystaniem zrootowanego telefonu i następnie przeniesienie ustawień ruffy/AAPS do telefonu docelowego, który także musi być zrootowany. Procedura ta pozwala na poszerzenie bazy dostępnych smartfonów również o te, na których nie udaje się sparować pompy bezpośrednio oraz na korzystanie z telefonów z systemem Android w wersji niższej niż 8.1. Pamiętaj jednak, że nie było to szeroko testowane: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Ograniczenia

- Extended bolus and multiwave bolus are not supported (see [Extended Carbs](../Usage/Extended-Carbs.rst) instead)
- Pompa obsługuje tylko jeden schemat (profil) bazy.
- Ręczne ustawienie profilu podstawowego innego niż 1 na pompie lub podanie bolusa przedłużonego, lub wielofalowego kolidują z TBR i powodują, że pętla przechodzi w tryb niskiego zawieszenia na 6 godzin. Wynika to z faktu, że pętla nie może bezpiecznie działać w tych warunkach.
- Obecnie nie można ustawić godziny i daty zdalnie na pompie, więc zmiany na czas letni czy zimowy muszą być wykonywane ręcznie. Aby zapobiec komplikacjom związanym z brakiem synchronizacji zegarów w pompie i smartfonie (w czasie zmiany czasu z letniego na zimowy i odwrotnie) możesz wyłączyć automatyczną aktualizację zegara w telefonie w godzinach wieczornych i zmienić go rano razem z zegarem pompy, aby uniknąć alarmu w nocy.
- Obecnie obsługiwane są tylko dawki podstawowe w zakresie od 0,05 do 10 U/h. Należy brać to pod uwagę także w przypadku modyfikacji profili, np. gdy TBR wzrasta do 200%, najwyższa zaprogramowana dawka podstawowa nie może przekraczać 5 U/h, ponieważ będzie podwojona i wówczas osiągnie limit 10 U/h. Podobnie, przy zmniejszeniu do 50%, najniższa dawka podstawowa musi wynosić co najmniej 0,10 U/h.
- Jeśli pętla zażąda anulowania działającego TBR, Combo ustawi TBR na 90% lub 110% przez 15 minut. Wynika to z faktu, że anulowanie TBR powoduje alarm na pompie i wiele wibracji.
- Czasami (przeważnie co kilka dni) AAPS może nie zdołać automatycznie anulować TBR co skutkować będzie alarmem na pompie "CANCELLED alert". W takiej sytuacji należy odświeżyć stan pompy korzystając z przycisku "Odśwież" w zakładce Accu-Chek Combo w AAPS lub anulować alarm bezpośrednio na pompie (dwukrotne naciśnięcie klawisza zatwierdzania).
- Bluetooth connection stability varies with different phones, causing "pump unreachable" alerts, where no connection to the pump is established anymore. Jeśli ten błąd wystąpi, upewnij się, że Bluetooth jest włączony, a następnie naciśnij przycisk Odśwież w zakładce Combo, co powinno rozwiązać problem. Jeśli nadal połączenie nie zostanie nawiązane, uruchom ponownie telefon. Gdy te metody zawiodą pozostaje jeszcze jedno wyjście - należy nacisnąć przycisk na pompie (który resetuje Bluetooth pompy), zanim pompa ponownie odbierze połączenia z telefonu. Niestety niewiele można zrobić, aby zaradzić któremukolwiek z tych problemów w tym momencie. Zatem jeśli często widzisz te błędy, jedyną opcją pozostaje wymiana telefonu, na taki z którym AndroidAPS i Combo dobrze współpracują (patrz wyżej).
- Issuing a bolus from the pump will not always be detected in time (checked for whenever AAPS connects to the pump), and might take up to 20 minutes in the worst case. Bolusy na pompie są zawsze sprawdzane przed ustawieniem wysokiego TBR lub bolusem podanym przez AAPS, jednakże z powodu narzuconych ograniczeń AAPS odmówi ustawienia TBR lub podania Bolusa, jeśli te zostały wyliczone dla nieprawidłowych danych. (-> Nie podawaj bolusa z pompy! Patrz rozdział * Wykorzystanie *)
- Należy unikać ustawiania TBR bezpośrednio na pompie, ponieważ pętla zakłada przejęcie całkowitej kontroli nad TBR. Wykrycie nowego TBR na pompie może zająć do 20 minut, a efekt TBR zostanie uwzględniony dopiero od momentu wykrycia. W najgorszym więc przypadku należy liczyć się z dwudziestominutowym wpływem TBR na glikemię, który nie jest odzwierciedlony w wyliczeniach IOB. 

## Ustawienia

- Skonfiguruj pompę za pomocą oprogramowania konfiguracyjnego Accu-Chek 360. Jeśli nie masz oprogramowania, skontaktuj się z infolinią Accu-Chek. Zwykle wysyłają zarejestrowanym użytkownikom płytę CD z "oprogramowaniem konfiguracyjnym pompy 360°" i urządzeniem do połączenia przez podczerwień SmartPix USB. 
  - Ustawienia wymagane (zaznaczone na zielono na zrzutach ekranu): 
    - Ustaw/pozostaw konfigurację menu użytkownika jako "Standardowa" - pokazane zostaną tylko obsługiwane menu i czynności na pompie a ukryte te, które nie będą obsługiwane. Przykładem może być bolus rozszerzony i wielofalowy czy wiele schematów baz których użycie spowoduje znaczne ograniczenie funkcji systemu, ponieważ nie można użytkować pętli w bezpieczny sposób, gdy te funkcje i czynności zostaną uruchomione bezpośrednio z pompy.
    - Upewnij się, że *Opcje pompy insulinowej->operacje->Tekst krótkiej informacji* jest naprawdę nazywany "QUICK INFO" (bez cudzysłowów, które można znaleźć w *Ustawieniach wyświetlania/komunikacji*).
    - Ustaw Dawki podstawowe i bolus->Tymczasowa dawka podstawowa (TBR)->*Ustawienia maksymalne* na 500%
    - Wyłącz * Sygnalizowanie końca tymczasowej dawki podstawowej *
    - Ustaw TBR * Przyrost czasu trwania * do 15 min>
    - Włącz Bluetooth
  - Ustawienia zalecane (zaznaczone na niebiesko na zrzutach ekranu): 
    - Ustaw alarm niskiego poziomu insuliny w zbiorniczku zgodnie z własnymi upodobaniami
    - Skonfiguruj Bolus -> <o>Maksymalna dawka</o> odpowiednio do terapii, aby zabezpieczyć się przed błędami w oprogramowaniu
    - Podobnie skonfiguruj Bolus -> Maksymalny czas trwania (TBR) jako zabezpieczenie. Pozostaw co najmniej 3 godziny, ponieważ opcja odłączenia pompy na 3 godziny ustala 0% na 3 godziny.
    - Włącz blokadę przycisków na pompie, aby zapobiec podaniu bolusa z pompy, szczególnie kiedy pompa była używana wcześniej i masz nawyk podawania szybkiego bolusa.
    - Ustaw <o>Czas trwania wyświetlania</o> i <o>Limit czasu menu</o> na minimum (odpowiednio 5,5 s i 5 s). Dzięki temu AndroidAPS może wznowić działanie szybciej w warunkach błędu i zmniejszyć liczbę wibracji, które mogą wystąpić podczas takiego błędu.

![Zrzut ekranu z ustawieniami menu użytkownika](../images/combo/combo-menu-settings.png)

![Zrzut ekranu ustawień TBR](../images/combo/combo-tbr-settings.png)

![Zrzut ekranu z ustawieniami bolusa](../images/combo/combo-bolus-settings.png)

![Zrzut ekranu ustawień zbiorniczka insuliny](../images/combo/combo-insulin-settings.png)

- Install AndroidAPS as described in the [AndroidAPS docs](../Installing-AndroidAPS/Building-APK.html).
- Przeczytaj wiki, aby dowiedzieć się, jak skonfigurować AndroidAPS.
- Wybierz wtyczkę "pompa wirtualna" w AndroidAPS, a nie wtyczkę Combo w tym miejscu, aby uniknąć próby jednoczesnego dostępu do ruffy podczas procesu parowania.
- Clone [ruffy](https://github.com/MilosKozak/ruffy) from github via git.
- Zainstaluj ruffy i użyj go do parowania pompy. Przed pierwszą próbą parowania zalecany jest restart smartfona. Jeśli po wielu próbach nadal nie udaje się sparować pompy i telefonu, przejdź do gałęzi `parowanie`, sparuj pompę, a następnie przełącz na pierwotną gałąź. Zwróć uwagę, że proces parowania jest dość trudny (ale trzeba to zrobić tylko raz) i możesz potrzebować kilku prób. Szybko potwierdzaj podpowiedzi, a przed ponownymi próbami najpierw usuń pompę z ustawień Bluetooth. Zalecane jest włączenie wyszukiwania Bluetooth najpierw na pompie, a w drugiej kolejności na telefonie. Inną możliwością do wypróbowania jest przejście do menu Bluetooth, zainicjowanie procesu parowania (dzięki temu Bluetooth telefonu będzie wykrywalny, dopóki wyświetlane jest menu) i powrót do ruffy dopiero po potwierdzeniu parowania na pompie (gdy pompa wyświetli kod autoryzacji). Jeśli nie uda Ci się sparować pompy (powiedzmy po 10 próbach), spróbuj poczekać do 10 sekund przed potwierdzeniem parowania na pompie (gdy nazwa telefonu jest wyświetlana na pompie). Jeśli wcześniej skonfigurowałeś czas wyświetlania menu na 5 s, musisz zwiększyć go ponownie. Niektórzy użytkownicy raportowali, że musieli tak zrobić. Wreszcie, rozważ przejście z jednego pomieszczenia do drugiego w przypadku lokalnych zakłóceń radiowych. Przynajmniej jeden użytkownik natychmiast pokonał problemy z parowaniem, po prostu zmieniając pokoje.
- Kiedy AAPS używa ruffy, nie można użyć aplikacji ruffy. Najprostszym sposobem jest uruchomienie ponowne telefonu zaraz po zakończeniu procesu parowania i pozwolenie, aby AAPS sam wystartował ruffy w tle.
- Jeśli pompa jest fabrycznie nowa, należy podać jeden bolus na pompie, tylko po to aby pompa utworzyła pierwszy wpis w historii.
- Przed włączeniem wtyczki Combo w AAPS upewnij się, że Twój profil w AAPS jest skonfigurowany poprawnie i że jest aktywny (!), zaś profil podstawowy (Baza) jest aktualny, ponieważ AAPS prześle te ustawienia do pompy zaraz po nawiązaniu pierwszego połączenia. Następnie aktywuj wtyczkę Combo. Naciśnij przycisk * Odśwież * na zakładce Combo, aby zainicjować pompę.
- Aby przetestować poprawność ustawień pompy oraz połączenia Bluetooth należy wykonać następujące czynności po odłączeniu pompy od ciała: ustaw TBR 500% na 15 minut oraz podaj bolusa. Czynności te należy wykonać korzystając z aplikacji AAPS na smartfonie. Pompa powinna w tym momencie mieć ustawiony TBR 500% oraz podanego bolusa w historii. AAPS powinien pokazywać dokładnie te same dane: aktywną TBR 500% oraz znacznik podanego bolusa.

## Jakie są powody nieudanego parowania pompy z wykorzystaniem aplikacji ruffy?

There are several possible reasons. W pierwszej kolejności spróbuj następujących rozwiązań:

1. Wymień baterię w pompie na **świeżą**. Zalecane jest wykorzystanie baterii litowych lub alkalicznych na czas parowania - akumulatorki nie są wskazane ze względu na zaniżone napięcie 1.2V. Przejrzyj rozdział o zasilaniu w celu uzyskania dalszych wskazówek. Upewnij się, że pompa znajduje się możliwie blisko smartfona.

![Combo powinno znajdować się obok telefonu](../images/Combo_next_to_Phone.png)

2. Wyłącz wszelkie urządzenia Bluetooth znajdujące się w pobliżu aby nie nastąpiła z ich strony próba połączenia ze smartfonem w trakcie parowania z pompą. Każda równoległa komunikacja Bluetooth lub chociażby próba nawiązania połączenia mogą zakłócić proces parowania pompy ze smartfonem.

3.     Koniecznie usuń wszystkie już sparowane urządzenia korzystając z menu pompy: ** BLUETOOTH ustawienia / połączenia / Usuń ** aż do wyświetlenia ** nr urządzenia **.
      

4. Usuń pompę z listy urządzeń sparowanych przez Bluetooth w smartfonie: Ustawienia / Bluetooth, usuń sparowane urządzenie **SpiritCombo**
5. Upewnij się, że aplikacja AAPS nie działa w tle. Disable Loop in AAPS.
6. Uruchom ruffy na smartfonie. Może być konieczne kliknięcie "Reset!" i usunięcie starego powiązania. Następnie kliknij "Connect!" aby rozpocząć proces parowania.
7. W menu Bluetooth pompy, przejdź do **Dodaj urządzenie / Dodaj połączenie**. Press *CONNECT!** * Step 5 and 6 have to be done in a short timing.
8. Now the Pump should show up the BT Name of phone to select for pairing. Here it is important to wait at least 5s before you hit the select button on Pump. Otherwise the Pump will not send the Pairing request to the Phone properly.

* If Combo Pump is set to 5s Screen timeout, you may test it with 40s (original setting). From experience the time between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out without successfully Pair. Later you should set it back to 5s, to meet AAPS Combo settings. * If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not compatible with the pump. Make sure you are running a new **LineageOS ≥ 14.1** or **Android ≥ 8.1 (Oreo)**. If possible, try another smartphone. You can find a list of already successfully used smartphones under \[AAPS Phones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435).

9. At next Pump should show up a 10 digit security code. And Ruffy a screen to enter it. So enter it in Ruffy and you should be ready to go.
10. Reboot the phone.
11. Now you can restart AAPS loop.

## Użytkowanie

- Należy pamiętać, że AAPS nie jest gotowym produktem lecz dziełem społeczności. Na początku użytkownik musi monitorować i zrozumieć system wraz z jego ograniczeniami oraz możliwymi przyczynami niepowodzenia wdrożenia systemu. Nie jest zalecane wykorzystanie systemu przez użytkowników, którzy nie są w stanie w pełni go zrozumieć.
- Przeczytaj dokumentację OpenAPS (https://openaps.org), aby zrozumieć algorytmy pętli na których AndroidAPS się opiera.
- Przeczytaj wiki AndroidAPS (http://wiki.AndroidAPS.org) w celu poznania i zrozumienia systemu AndroidAPS
- Integracja pompy Combo i systemu AndroidAPS możliwa jest dzięki użyciu tej samej funkcjonalności, która umożliwia współpracę pompy z dedykowanym glukometrem Accu-Chek Performa Combo. Pilot umożliwia skolonowanie ekranu pompy na ekranie glukometru oraz przekazywanie naciśnięć klawiszy funkcyjnych do pompy. To właśnie aplikacja ruffy jest odpowiedzialna za podtrzymanie połączenia z pompą, przekazywanie menu pompy i naciśnięć klawiszy. `Skrypt` odczytuje ekran i automatyzuje wprowadzanie bolusów, TBR, itp i upewniając się, że dane wejściowe są przetwarzane prawidłowo. AAPS komunikuje się ze skryptem w celu zastosowania poleceń pętli oraz podania bolusów. Tryb ten ma pewne wady i ograniczenia: jest stosunkowo wolny (ale również wystarczająco szybki, zważywszy na cel w jakim się go stosuje) a ustawienie TBR lub podanie bolusa powoduje załączenie wibracji w pompie.
- Integracja pompy Combo i systemu AndroidAPS zakłada, że wszystkie zmiany i ustawienia są dokonywane z wykorzystaniem aplikacji AndroidAPS. Bolusy podane bezpośrednio z pompy zostaną wykryte przez system, lecz może to potrwać nawet do 20 minut. Sczytywanie historii bolusów na pompie to jedna z funkcji zabezpieczających i nie powinna być stosowana regularnie do obsługi pompy. Pętla wymaga dodatkowo informacji na temat spożytych węglowodanów, której to informacji nie ma w historii bolusów - jest to zatem kolejny powód dla którego sterowanie systemem powinno odbywać się wyłącznie z aplikacji AAPS. 
- Nie należy ustawiać ani wyłącząć TBR bezpośrednio na pompie. Algorytm pętli zakłada przejęcie pełnej kontroli nad TBR i może działać nieprawidłowo w innym wypadku, ponieważ nie jest możliwe określenie czasu rozpoczęcia TBR ustawionej ręcznie przez użytkownika na pompie.
- Schemat bazy nr 1 na pompie jest sczytywany przy każdym starcie aplikacji a następnie aktualizowany przez AAPS. Schemat bazy nie powinien być zmieniamy ręcznie na pompie, gdyż zostanie to wykryte i poprawione zgodnie ze schematem bazy zapisanym w profilu AAPS. Ma to na celu wykrycie niezamierzonych zmian wprowadzonych na pompie przez użytkownika.
- Zalecane jest włączenie opcji blokady klawiszy na pompie, głównie w celu zapobieżenia podania przypadkowego bolusa, zwłaszcza gdy pompa była już wcześniej używana a użytkownik jest przyzwyczajony np. do wykorzystania funkcji "szybkiego bolusa". Ponadto, gdy włączona jest blokada klawiatury, przypadkowe naciśnięcie klawisza NIE przerwie aktywnej komunikacji między AAPS a pompą.
- Kiedy alarm BOLUS/TBR CANCELED jest inicjowany na pompie podczas bolusa lub konfiguracji TBR, jest to spowodowane rozłączeniem między pompą a telefonem, co zdarza się od czasu do czasu. AAPS podejmie próbę ponownego połączenia, potwierdzenia alarmu, a następnie powtórzenia ostatniej akcji (bolus NIE zostanie powtórzony ze względów bezpieczeństwa). Dlatego alarm ten można zignorować, ponieważ AAPS potwierdzi go automatycznie, zwykle w ciągu 30 sekund (anulowanie nie stanowi problemu, ale spowoduje, że aktywna akcja będzie czekać, aż ekran pompy się wyłączy, zanim będzie mógł wrócić podłączyć do pompy). If the pump's alarm continues, automatic confirmation failed, in which case the user needs to confirm the alarm manually.
- Alarm niskiego poziomu insuliny w zbiorniku lub alarm niskiego poziomu baterii podczas bolusa jest potwierdzany i wyświetlany jako powiadomienie w systemie AAPS. Jeśli alarmy te wystąpią, gdy nie ma połączenia z pompą, przejście do karty Combo i naciśnięcie przycisku Odśwież spowoduje przejęcie tych alarmów poprzez potwierdzenie ich i wyświetlenie powiadomienia w AAPS.
- Jeśli AAPS nie może potwierdzić alarmu TBR CANCEL lub alarm zostanie wywołany z jakiegokolwiek innego powodu, naciśnięcie przycisku Odśwież na zakładce Combo ustanowi połączenie, potwierdzi alarm i wyświetli powiadomienie dla niego w AAPS. Można to bezpiecznie zrobić, ponieważ te ostrzeżenia są łagodne - odpowiedni TBR zostanie ponownie ustawiony podczas kolejnej iteracji pętli.
- W przypadku wszystkich innych alertów generowanych przez pompę: połączenie z pompą wyświetli komunikat alertu w zakładce Combo, np. "Status: E4: Occlusion", oprócz wyświetlenia powiadomienia na ekranie głównym. Błąd powoduje pilne powiadomienie. AAPS nigdy nie potwierdza poważnych usterek pompy, ale powoduje wibracje pompy i sygnał dźwiękowy, aby zapewnić, że użytkownik zostanie poinformowany o krytycznej sytuacji wymagającej działania.
- Po sparowaniu, ruffy nie powinien być używany (AAPS uruchamia ruffy w tle w razie potrzeby), ponieważ używanie ruffy z AAPS w tym samym czasie nie jest obsługiwane.
- Jeśli AAPS ulegnie awarii (lub zostanie zatrzymany przez debuggera), podczas gdy AAPS i pompa komunikują się (używając ruffy), może być konieczne wymuszenie zamknięcia ruffy. Ponowne uruchomienie systemu AAPS znów zacznie działać. Ponowne uruchomienie telefonu jest również łatwym sposobem rozwiązania tego problemu, jeśli nie wiesz, jak wymusić zabicie aplikacji.
- Nie naciskaj żadnych przycisków pompy, gdy AAPS komunikuje się z pompą (logo Bluetooth jest widoczne na pompie).