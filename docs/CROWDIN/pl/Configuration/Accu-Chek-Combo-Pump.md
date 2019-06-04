# Pompa Accu-Chek Spirit Combo

**To oprogramowanie jest częścią rozwiązania DIY (ang. do it yourself, zrób to sam) i nie jest produktem komercyjnym, lecz wymaga od Ciebie, abyś przeczytał dokumentację, uczył się i zrozumiał system - łącznie z tym, jak go używać. To nie jest coś, co będzie za Ciebie zarządzać leczeniem cukrzycy, lecz pozwala poprawić wyrównanie cukrzycy i jakość życia pod warunkiem, że chcesz poświęcić temu wymagany czas. Nie śpiesz się, daj sobie czas na naukę. Tylko Ty jesteś odpowiedzialny za to co robisz.**

## Wymagania sprzętowe

- Pompa Roche Accu-Chek Spirit Combo (dalej nazywana Combo, dowolna wersja firmware, wszystkie działają)
- Urządzenie Accu-Chek Smart-Pix lub Realtyme wraz z oprogramowaniem 360 Configuration Software do konfiguracji pompy. Oprogramowanie do konfiguracji pompy współpracuje jedynie ze starszą wersją urządzenia Smart-Pix (obudowa w kolorze srebrnym).
- Kompatybilny smartfon z systemem LineageOS 14.1 (dawniej CyanogenMod) lub Android 8.1 (Oreo), lub Android 9.0 (Pie). W przypadku systemu LineageOS należy zastosować najnowszą wersją datowaną na co najmniej czerwca 2017 r., ponieważ zmiana potrzebna do sparowania pompy Combo została wprowadzona dopiero w tym czasie. Listę kompatybilnych smartfonów można znaleźć w dokumencie [AAPS telefony](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). Należy pamiętać, że nie jest to pełna lista jednak odzwierciedla ona doświadczenia użytkowników. Zachęcamy abyście dzielili się swoimi doświadczeniami, zgłaszali problemy, a przede wszystkim polecali innym użytkownikom działające rozwiązania i współpracujące modele urządzeń.

- Pamiętaj, że chociaż Android 8.1/9.0 umożliwia poprawną komunikację z Combo, to nadal występują problemy z AAPS pracującym na telefonach z tymi wersjami Androida. Dla zaawansowanych użytkowników możliwe jest sparowanie pompy z wykorzystaniem zrootowanego telefonu i następnie przeniesienie ustawień ruffy/AAPS do telefonu docelowego, który także musi być zrootowany. Procedura ta pozwala na poszerzenie bazy dostępnych smartfonów również o te, na których nie udaje się sparować pompy bezpośrednio oraz na korzystanie z telefonów z systemem Android w wersji niższej niż 8.1. Pamiętaj jednak, że nie było to szeroko testowane: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Ograniczenia

- Bolus przedłużony i bolus wielofalowy nie są obsługiwane (zamiast tego patrz wydłużone węglowodany - [Extended Carbs](../Usage/Extended-Carbs))
- Pompa obsługuje tylko jeden schemat (profil) bazy.
- Ręczne ustawienie profilu podstawowego innego niż 1 na pompie lub podanie bolusa przedłużonego, lub wielofalowego kolidują z TBR i powodują, że pętla przechodzi w tryb niskiego zawieszenia na 6 godzin. Wynika to z faktu, że pętla nie może bezpiecznie działać w tych warunkach.
- Obecnie nie można ustawić godziny i daty zdalnie na pompie, więc zmiany na czas letni czy zimowy muszą być wykonywane ręcznie. Aby zapobiec komplikacjom związanym z brakiem synchronizacji zegarów w pompie i smartfonie (w czasie zmiany czasu z letniego na zimowy i odwrotnie) możesz wyłączyć automatyczną aktualizację zegara w telefonie w godzinach wieczornych i zmienić go rano razem z zegarem pompy, aby uniknąć alarmu w nocy.
- Obecnie obsługiwane są tylko dawki podstawowe w zakresie od 0,05 do 10 U/h. Należy brać to pod uwagę także w przypadku modyfikacji profili, np. gdy TBR wzrasta do 200%, najwyższa zaprogramowana dawka podstawowa nie może przekraczać 5 U/h, ponieważ będzie podwojona i wówczas osiągnie limit 10 U/h. Podobnie, przy zmniejszeniu do 50%, najniższa dawka podstawowa musi wynosić co najmniej 0,10 U/h.
- Jeśli pętla zażąda anulowania działającego TBR, Combo ustawi TBR na 90% lub 110% przez 15 minut. Wynika to z faktu, że anulowanie TBR powoduje alarm na pompie i wiele wibracji.
- Czasami (przeważnie co kilka dni) AAPS może nie zdołać automatycznie anulować TBR co skutkować będzie alarmem na pompie "CANCELLED alert". W takiej sytuacji należy odświeżyć stan pompy korzystając z przycisku "Odśwież" w zakładce Accu-Chek Combo w AAPS lub anulować alarm bezpośrednio na pompie (dwukrotne naciśnięcie klawisza zatwierdzania).
- Stabilność połączenia Bluetooth różni się w zależności od wykorzystywanego telefonu. W przypadku zerwania połączenia generowane jest ostrzeżenie "pompa niedostępna". Jeśli ten błąd wystąpi, upewnij się, że Bluetooth jest włączony, a następnie naciśnij przycisk Odśwież w zakładce Combo, co powinno rozwiązać problem. Jeśli nadal połączenie nie zostanie nawiązane, uruchom ponownie telefon. Gdy te metody zawiodą pozostaje jeszcze jedno wyjście - należy nacisnąć przycisk na pompie (który resetuje Bluetooth pompy), zanim pompa ponownie odbierze połączenia z telefonu. Niestety niewiele można zrobić, aby zaradzić któremukolwiek z tych problemów w tym momencie. Zatem jeśli często widzisz te błędy, jedyną opcją pozostaje wymiana telefonu, na taki z którym AndroidAPS i Combo dobrze współpracują (patrz wyżej).
- Podanie bolusa z pompy nie zawsze zostaje wykryta w odpowiednio krótkim czasie (jest to sprawdzane, gdy AAPS łączy się z pompą) - w najgorszym przypadku może to zająć do 20 minut. Bolusy na pompie są zawsze sprawdzane przed ustawieniem wysokiego TBR lub bolusem podanym przez AAPS, jednakże z powodu narzuconych ograniczeń AAPS odmówi ustawienia TBR lub podania Bolusa, jeśli te zostały wyliczone dla nieprawidłowych danych. (-> Nie podawaj bolusa z pompy! Patrz rozdział * Wykorzystanie *)
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

![Screenshot of user menu settings](../images/combo/combo-menu-settings.png)

![Screenshot of TBR settings](../images/combo/combo-tbr-settings.png)

![Screenshot of bolus settings](../images/combo/combo-bolus-settings.png)

![Screenshot of insulin cartridge settings](../images/combo/combo-insulin-settings.png)

- Zainstaluj AndroidAPS zgodnie z opisem w [AndroidAPS wiki](http://wiki.AndroidAPS.org).
- Przeczytaj wiki, aby dowiedzieć się, jak skonfigurować AndroidAPS.
- Wybierz wtyczkę "pompa wirtualna" w AndroidAPS, a nie wtyczkę Combo w tym miejscu, aby uniknąć próby jednoczesnego dostępu do ruffy podczas procesu parowania.
- Przejdź na stronę [ http://ruffy.AndroidAPS.org ](http://ruffy.AndroidAPS.org) i sklonuj ruffy poprzez git.
- Zainstaluj ruffy i użyj go do parowania pompy. Przed pierwszą próbą parowania zalecany jest restart smartfona. Jeśli po wielu próbach nadal nie udaje się sparować pompy i telefonu, przejdź do gałęzi `parowanie`, sparuj pompę, a następnie przełącz na pierwotną gałąź. Zauważono, że nawiązanie połączenia jest trudne i często wymaga wielu prób, ale po sparowaniu urządzeń procesu nie trzeba powtarzać. Należy możliwie szybko reagować na komunikaty, a przed kolejną próbą podłączenia usunąć pompę z listy urządzeń widzianych przez telefon. Alternatywnie, można przejść do Ruffy po rozpoczęciu procesu parowania (moment, w którym telefon jest wykrywalny dla innych urządzeń) i po wyświetleniu przez pompę kodu autoryzacji. Jeżeli nie udało się sparować telefonu i pompy po kilkunastu próbach, przed kolejnym potwierdzeniem wyświetlanym na telefonie poczekaj 10 sekund. Jeżeli wcześniej przestawiono czas wyświetlania monitów na pompie i nie można uzyskać połączenia to należy wrócić do początkowych ustawień. Część użytkowników potwierdziło skuteczność tego zabiegu. W razie dalszych niepowodzeń można spróbować przejść do innego pomieszczenia, by zmniejszyć ryzyko występowania zakłóceń radiowych. Jeden z użytkowników potwierdził, że zmiana pomieszczenia pomogła uzyskać połączenie.
- Kiedy AAPS używa ruffy, nie można użyć aplikacji ruffy. Najprostszym sposobem jest uruchomienie ponowne telefonu zaraz po zakończeniu procesu parowania i pozwolenie, aby AAPS sam wystartował ruffy w tle.
- Jeśli pompa jest fabrycznie nowa, należy podać jeden bolus na pompie, tylko po to aby pompa utworzyła pierwszy wpis w historii.
- Przed włączeniem wtyczki Combo w AAPS upewnij się, że Twój profil w AAPS jest skonfigurowany poprawnie i że jest aktywny (!), zaś profil podstawowy (Baza) jest aktualny, ponieważ AAPS prześle te ustawienia do pompy zaraz po nawiązaniu pierwszego połączenia. Następnie aktywuj wtyczkę Combo. Naciśnij przycisk * Odśwież * na zakładce Combo, aby zainicjować pompę.
- Aby przetestować poprawność ustawień pompy oraz połączenia Bluetooth należy wykonać następujące czynności po odłączeniu pompy od ciała: ustaw TBR 500% na 15 minut oraz podaj bolusa. Czynności te należy wykonać korzystając z aplikacji AAPS na smartfonie. Pompa powinna w tym momencie mieć ustawiony TBR 500% oraz podanego bolusa w historii. AAPS powinien pokazywać dokładnie te same dane: aktywną TBR 500% oraz znacznik podanego bolusa.

## Jakie są powody nieudanego parowania pompy z wykorzystaniem aplikacji ruffy?

Istnieje kilka możliwych przyczyn wystąpienia tego problemu. W pierwszej kolejności spróbuj następujących rozwiązań:

1. Wymień baterię w pompie na **świeżą**. Zalecane jest wykorzystanie baterii litowych lub alkalicznych na czas parowania - akumulatorki nie są wskazane ze względu na zaniżone napięcie 1.2V. Przejrzyj rozdział o zasilaniu w celu uzyskania dalszych wskazówek. Upewnij się, że pompa znajduje się możliwie blisko smartfona.

![Combo should be next to phone](../images/Combo_next_to_Phone.png)

2. Wyłącz wszelkie urządzenia Bluetooth znajdujące się w pobliżu aby nie nastąpiła z ich strony próba połączenia ze smartfonem w trakcie parowania z pompą. Każda równoległa komunikacja Bluetooth lub chociażby próba nawiązania połączenia mogą zakłócić proces parowania pompy ze smartfonem.

3.     Koniecznie usuń wszystkie już sparowane urządzenia korzystając z menu pompy: ** BLUETOOTH ustawienia / połączenia / Usuń ** aż do wyświetlenia ** nr urządzenia **.
      

4. Usuń pompę z listy urządzeń sparowanych przez Bluetooth w smartfonie: Ustawienia / Bluetooth, usuń sparowane urządzenie **SpiritCombo**
5. Upewnij się, że aplikacja AAPS nie działa w tle. Wyłącz pętlę w AAPS.
6. Uruchom ruffy na smartfonie. Może być konieczne kliknięcie "Reset!" i usunięcie starego powiązania. Następnie kliknij "Connect!" aby rozpocząć proces parowania.
7. W menu Bluetooth pompy, przejdź do **Dodaj urządzenie / Dodaj połączenie**. Naciśnij * CONNECT! * (może być wymagane wykonanie dwóch ostatnich kroków w krótkim odstępie czasu).
8.     Teraz na ekranie pompy pojawi się nazwa smartfona, z którym nawiązano połączenie. Ważne jest, aby odczekać przynajmniej 5 sekund przed naciśnięciem potwierdzenia na pompie. W przeciwnym wypadku może okazać się, że pompa nie wyśle prawidłowo żądania parowania do smartfona.
      
      Jeżeli pompa Combo ma ustawiony czas wyświetlania menu na 5 sekund, możesz przetestować parowanie z tym parametrem ustawionym na pierwotne 40 sekund. Z doświadczenia wiadomo, że najlepszy czas na potwierdzenie parowania na pompie to 5-10 sekund od momentu pojawienia się nazwy smartfona na ekranie pompy. W wielu pozostałych przypadkach następuje przerwanie procesu parowania z powodu przekroczenia czasu. Po prawidłowym sparowaniu pompy należy ustawić ponownie czas wyświetlania menu ekranowego na 5 sekund w celu przyspieszenia komunikacji AAPS oraz oszczędzania energii.
      Jeżeli pompa nie pokazuje nazwy telefonu podczas próby parowania, może to oznaczać, że Twój smartfon ma stos Bluetooth niekompatybilny z pompą. Upewnij się, że używasz oprogramowania systemowego smartfona w wersji odpowiednio: **LineageOS ≥ 14.1** lub **Android ≥ 8.1 (Oreo)**. Jeśli to możliwe spróbuj wykorzystać innego smartfona. Listę kompatybilnych smartfonów przetestowanych przez społeczność znajdziesz pod [AAPS Phones] 
        (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 
      

9.     W kolejnym kroku pompa powinna wyświetlić na ekranie 10-cio cyfrowy kod bezpieczeństwa. zaś ruffy okno do którego przepisujemy kod z pompy. Po wprowadzeniu kodu ruffy jest gotowy do działania.
      

10. Wystarczy w tej chwili zrestartować smartfona,
11. a następnie ponownie uruchomić pętlę.

## Użytkowanie

- Należy pamiętać, że AAPS nie jest gotowym produktem lecz dziełem społeczności. Na początku użytkownik musi monitorować i zrozumieć system wraz z jego ograniczeniami oraz możliwymi przyczynami niepowodzenia wdrożenia systemu. Nie jest zalecane wykorzystanie systemu przez użytkowników, którzy nie są w stanie w pełni go zrozumieć.
- Przeczytaj dokumentację OpenAPS (https://openaps.org), aby zrozumieć algorytmy pętli na których AndroidAPS się opiera.
- Przeczytaj wiki AndroidAPS (http://wiki.AndroidAPS.org) w celu poznania i zrozumienia systemu AndroidAPS
- Integracja pompy Combo i systemu AndroidAPS możliwa jest dzięki użyciu tej samej funkcjonalności, która umożliwia współpracę pompy z dedykowanym glukometrem Accu-Chek Performa Combo. Pilot umożliwia skolonowanie ekranu pompy na ekranie glukometru oraz przekazywanie naciśnięć klawiszy funkcyjnych do pompy. To właśnie aplikacja ruffy jest odpowiedzialna za podtrzymanie połączenia z pompą, przekazywanie menu pompy i naciśnięć klawiszy. `Skrypt` odczytuje ekran i automatyzuje wprowadzanie bolusów, TBR, itp i upewniając się, że dane wejściowe są przetwarzane prawidłowo. AAPS komunikuje się ze skryptem w celu zastosowania poleceń pętli oraz podania bolusów. Tryb ten ma pewne wady i ograniczenia: jest stosunkowo wolny (ale również wystarczająco szybki, zważywszy na cel w jakim się go stosuje) a ustawienie TBR lub podanie bolusa powoduje załączenie wibracji w pompie.
- Integracja pompy Combo i systemu AndroidAPS zakłada, że wszystkie zmiany i ustawienia są dokonywane z wykorzystaniem aplikacji AndroidAPS. Bolusy podane bezpośrednio z pompy zostaną wykryte przez system, lecz może to potrwać nawet do 20 minut. Sczytywanie historii bolusów na pompie to jedna z funkcji zabezpieczających i nie powinna być stosowana regularnie do obsługi pompy. Pętla wymaga dodatkowo informacji na temat spożytych węglowodanów, której to informacji nie ma w historii bolusów - jest to zatem kolejny powód dla którego sterowanie systemem powinno odbywać się wyłącznie z aplikacji AAPS. 
- Nie należy ustawiać ani wyłącząć TBR bezpośrednio na pompie. Algorytm pętli zakłada przejęcie pełnej kontroli nad TBR i może działać nieprawidłowo w innym wypadku, ponieważ nie jest możliwe określenie czasu rozpoczęcia TBR ustawionej ręcznie przez użytkownika na pompie.
- Schemat bazy nr 1 na pompie jest sczytywany przy każdym starcie aplikacji a następnie aktualizowany przez AAPS. Schemat bazy nie powinien być zmieniamy ręcznie na pompie, gdyż zostanie to wykryte i poprawione zgodnie ze schematem bazy zapisanym w profilu AAPS. Ma to na celu wykrycie niezamierzonych zmian wprowadzonych na pompie przez użytkownika.
- Zalecane jest włączenie opcji blokady klawiszy na pompie, głównie w celu zapobieżenia podania przypadkowego bolusa, zwłaszcza gdy pompa była już wcześniej używana a użytkownik jest przyzwyczajony np. do wykorzystania funkcji "szybkiego bolusa". Also, with keylock enabled, accidentally pressing a key will NOT interrupt active communication between AAPS and pump.
- When a BOLUS/TBR CANCELLED alert starts on the pump during bolusing or setting a TBR, this is caused by a disconnect between pump and phone, which happens from time to time. AAPS will try to reconnect and confirm the alert and then retry the last action (boluses are NOT retried for safety reasons). Therefore, such an alarm can be ignored as AAPS will confirm it automatically, usually within 30s (cancelling it is not problem, but will lead to the currently active action to have to wait till the pump's display turns off before it can reconnect to the pump). If the pump's alarm continues, automatic corfirmation failed, in which case the user needs to confirm the alarm manually.
- When a low cartridge or low battery alarm is raised during a bolus, they are confirmed and shown as a notification in AAPS. If they occur while no connection is open to the pump, going to the Combo tab and hitting the Refresh button will take over those alerts by confirming them and show a notification in AAPS.
- When AAPS fails to confirm a TBR CANCELLED alert, or one is raised for a different reason, hitting Refresh in the Combo tab establishes a connection, confirms the alert and shows a notification for it in AAPS. This can safely be done, since those alerts are benign - an appropriate TBR will be set again during the next loop iteration.
- For all other alerts raised by the pump: connecting to the pump will show the alert message in the Combo tab, e.g. "State: E4: Occlusion" as well as showing a notification on the main screen. An error will raise an urgent notification. AAPS never confirms serious errors on the pump, but let's the pump vibrate and ring to make sure the user is informed of a critical situation that needs action.
- After pairing, ruffy should not be used directly (AAPS will start in the background as needed), since using ruffy at AAPS at the same time is not supported.
- If AAPS crashes (or is stopped from the debugger) while AAPS and the pump were communicating (using ruffy), it might be necessary to force close ruffy. Restarting AAPS will start ruffy again. Restarting the phone is also an easy way to resolve this if you don't know how to force kill an app.
- Don't press any buttons on the pump while AAPS communicates with the pump (Bluetooth logo is shown on the pump).