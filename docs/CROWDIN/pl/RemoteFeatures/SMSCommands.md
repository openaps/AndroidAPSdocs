# Polecenia SMS

```{contents} Table of contents
:depth: 2
```

Większość zdalnych zmian (cele tymczasowe, węglowodany, zmiany profilu oraz, po sparowaniu urządzenia opiekuna, bolusy) można zrobić [aplikacją **AAPSClient**](../RemoteFeatures/RemoteMonitoring.md) na telefonie z Androidem z dostępem do internetu, zobacz [Sterowanie Master ↔ Client](#client-master-control) (wersja **AAPSClient** na iPhone jest w przygotowaniu, zobacz [AAPSClient](AapsClient.md)). Polecenia SMS to nadal alternatywa, która działa bez internetu, i jedyna opcja zdalna, jeśli jako telefonu obserwującego używasz iPhone’a i nie masz jeszcze **AAPSClient**.

**Polecenia SMS są bardzo przydatne:**
1. Do zwykłego zdalnego sterowania

2. Jeśli chcesz zdalnie podać bolus insuliny bez sparowanego **AAPSClient**

3. W miejscach ze słabym internetem, gdzie SMS-y dochodzą, ale transmisja danych jest ograniczona. Jest to bardzo przydatne w odległych miejscach (np. na biwaku, na nartach).

4. Jeśli Twój inny sposób zdalnego sterowania (**AAPSClient**) chwilowo nie działa

## Najpierw bezpieczeństwo

Jeśli włączysz **Komunikator SMS** w **AAPS**, pamiętaj, że telefon, z którego wysyłasz zdalne polecenia, może zostać skradziony lub użyty przez kogoś innego. Zawsze blokuj telefon co najmniej PIN-em. Bardzo zalecamy silne hasło i/lub blokadę biometryczną. Upewnij się, że jest inne niż hasło główne APK (hasło potrzebne do eksportu ustawień **AAPS**).

Dodatkowo zalecamy dopuszczenie [drugiego numeru telefonu](#SMSCommands-authorized-phone-numbers) do poleceń SMS. Dzięki temu możesz użyć drugiego numeru, aby [wyłączyć](#SMSCommands-other) Komunikator SMS, jeśli Twój główny telefon do zdalnego sterowania zostanie przejęty przez kogoś innego.

Domyślny minimalny odstęp między poleceniami bolusa to 15 minut. Ze względów bezpieczeństwa musisz dodać co najmniej dwa autoryzowane numery telefonów, aby ustawić krótszy odstęp. Jeśli spróbujesz ponownie podać zdalny bolus w ciągu 15 minut od poprzedniego bolusa, dostaniesz odpowiedź „Bolus zdalny niedostępny. Spróbuj ponownie później.”

AAPS poinformuje Cię też SMS-em, czy Twoje zdalne polecenia, np. bolus lub zmiana profilu, zostały wykonane. Zaleca się takie ustawienie funkcji sterowania pompą poprzez sms, aby teksty potwierdzające były wysyłane na co najmniej dwa różne numery telefonów, w przypadku kradzieży jednego z telefonów odbierających drugi telefon odbierze informację o zmianach.

**Jeśli podajesz bolus przez polecenia SMS, musisz osobno wprowadzić węglowodany (drugi SMS, **AAPSClient**...)!** Jeśli tego nie zrobisz, IOB będzie poprawne, ale COB za niskie. Może to sprawić, że bolus korekcyjny nie zostanie podany, bo **AAPS** uzna, że masz za dużo aktywnej insuliny.

Przy poleceniach wrażliwych trzeba użyć aplikacji uwierzytelniającej z hasłem jednorazowym opartym na czasie (TOTP), aby zwiększyć bezpieczeństwo.

Jeśli chcesz odebrać telefonowi opiekuna możliwość wysyłania poleceń SMS, użyj w **AAPS** przycisku awaryjnego „[Resetuj uwierzytelnianie](#sms-commands-authenticator-setup)” albo wyślij polecenie SMS „[SMS stop](#SMSCommands-other)”. Resetując uwierzytelnianie, unieważniasz WSZYSTKIE telefony opiekunów. Trzeba będzie je skonfigurować ponownie.

## Konfiguracja poleceń SMS

```{contents} The overall process is as follows
:depth: 1
:local: true
```

(sms-commands-authenticator-setup)=
### Ustawienia uwierzytelnienia

W celu poprawy bezpieczeństwa zastosowane jest dwuskładnikowe uwierzytelnianie.

Na telefonie opiekuna pobierz (z App Store lub Google Play) i zainstaluj aplikację uwierzytelniającą (Authenticator). Popularne darmowe aplikacje to:
  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

Takie aplikacje tworzą jednorazowe, 6-cyfrowe hasło ważne przez krótki czas, podobnie jak w bankowości mobilnej lub przy zakupach. Możesz użyć innej aplikacji uwierzytelniającej, o ile obsługuje tokeny TOTP zgodne z RFC 6238. Microsoft Authenticator nie działa.

### Sprawdź ustawienia telefonu

Na telefonie przejdź do **Aplikacje > AAPS > Uprawnienia**. Upewnij się, że **SMS** i **Telefon** są dozwolone.

![image](../images/remote-control-08.png)

```{admonition} "App was denied access to SMS"
:class: tip
Android może blokować uprawnienie **SMS** dla aplikacji, które nie zostały zainstalowane ze sklepu z aplikacjami, takich jak **AAPS**. Jeśli zobaczysz ten komunikat przy nadawaniu uprawnienia **SMS**, otwórz w telefonie **Ustawienia > Aplikacje > AAPS**, dotknij menu **⋮** (w prawym górnym rogu) i wybierz **Zezwól na ustawienia z ograniczonym dostępem** (Allow restricted settings). Potem ponownie nadaj uprawnienie **SMS**.
```

![Aplikacja nie dostała dostępu do SMS](../images/sms_permission_restricted.png)

### Synchronizacja daty i godziny

Czas w obu telefonach musi być zsynchronizowany. Najlepszą metodą jest ustawienie czasu automatycznie z sieci. Różnice w czasie mogą powodować problemy z uwierzytelnianiem.

Na telefonie z **AAPS** i na telefonie opiekuna sprawdź, czy data i godzina są zsynchronizowane. Sposób zależy od urządzenia, możesz musieć wypróbować różne ustawienia.

Przykład (dla Samsunga S23): **Ustawienia > Zarządzanie ogólne > Data i godzina**: upewnij się, że **Automatyczna data i godzina** jest zaznaczona.

Niektóre opcje mogą być wyszarzone, bo wymagają zgody administratora z konta rodzinnego, jeśli telefon jest ustawiony jako konto dziecka. Na iPhonie opiekuna/rodzica to ustawienie daty i godziny nazywa się „Ustaw automatycznie”. Jeśli nie wiesz, czy telefony są zsynchronizowane, nie martw się. Możesz skonfigurować polecenia SMS i później rozwiązać problem, jeśli coś nie działa (w razie potrzeby poproś o pomoc).

### Ustawienia AAPS

Gdy ustawienia telefonu są już sprawdzone, w samej aplikacji **AAPS** przejdź do [**Konfiguracja** → **Komunikacja**](../SettingUpAaps/ConfigBuilder.md) i włącz wtyczkę **Komunikator SMS**.

Otwórz ustawienia **Komunikatora SMS**.

Włącz **Zezwalaj na zdalne polecenia przez SMS**. Opcje **Dodatkowy obowiązkowy PIN na końcu tokenu** i **Ustawienia uwierzytelnienia** pojawiają się dopiero po włączeniu tej opcji:

![Ustawienia Komunikatora SMS](../images/sms_communicator_settings.png)

(SMSCommands-authorized-phone-numbers)=
#### Dozwolone numery telefonów

Wpisz numer(y) telefonu opiekuna. Podaj numer kierunkowy kraju i pomiń pierwsze „0” numeru telefonu, jak w tych przykładach:
* Numer w Wielkiej Brytanii: +447976304596
* Numer w USA: +11234567890
* Numer we Francji:  +33612344567
* _itd._

„+” przed numerem może być potrzebny lub nie, zależnie od miejsca, w którym jesteś. Aby to sprawdzić, wyślij przykładowy SMS. Otrzymany format zobaczysz na ekranie wtyczki **Komunikator SMS** (**Konfiguracja** → **Komunikacja** → **Komunikator SMS** → **Otwórz wtyczkę**).

Jeśli chcesz dodać więcej niż jeden numer telefonu, oddziel je średnikami, **BEZ spacji między numerami** (to bardzo ważne!). Wybierz **OK**:

![Dozwolone numery telefonów](../images/sms_allowed_numbers.png)

#### Minimalny odstęp między zdalnymi bolusami (min)

- Możesz ustawić minimalny odstęp (w minutach) między dwoma bolusami wysłanymi przez SMS.
- Ze względów bezpieczeństwa musisz podać co najmniej dwa autoryzowane numery by móc zmienić tę wartość.

#### Dodatkowy obowiązkowy PIN na końcu tokenu

Ze względów bezpieczeństwa po kodzie odpowiedzi musi być PIN. Wybierz PIN, który Ty (i inni opiekunowie) będziecie wpisywać na końcu kodu z aplikacji uwierzytelniającej przy wysyłaniu polecenia SMS.

Wymagania dla PIN-u:

* Od 3 do 6 cyfr
* nie te same cyfry (_np._ 1111 lub 1224)
* nie kolejne liczby (_np._ 1234)

![Dodatkowy obowiązkowy PIN na końcu tokenu](../images/sms_pin.png)

#### Ustawienia uwierzytelnienia

* Dotknij **Ustawienia uwierzytelnienia** i postępuj krok po kroku według instrukcji na ekranie.
* Otwórz zainstalowaną aplikację uwierzytelniającą na _telefonie opiekuna_, dodaj nowe połączenie i
* Telefonem opiekuna zeskanuj kod QR pokazany pod **Zeskanuj kod, aby skonfigurować kody OTP AAPS**.

![Konfiguracja uwierzytelniania z kodem QR](../images/sms_authenticator_setup.png)

* W sekcji **Sprawdź hasło jednorazowe** wpisz w polu **Kod do sprawdzenia** hasło jednorazowe z aplikacji uwierzytelniającej na telefonie opiekuna, a po nim swój PIN:

Przykład:
* Token z aplikacji uwierzytelniającej to 457051
* Twój wymagany PIN to 2401
* Kod do sprawdzenia: 4570512401

Jeśli wpis jest poprawny, czerwony napis „ZŁY PIN” zmieni się automatycznie na zielony „OK”. **Nie ma przycisku do naciśnięcia!** Proces jest zakończony. Po wpisaniu kodu nie musisz naciskać żadnego przycisku „OK”:

![Sprawdzenie hasła jednorazowego i resetowanie uwierzytelniania](../images/sms_authenticator_test.png)

Polecenia SMS są teraz skonfigurowane.

Jeśli chcesz usunąć skonfigurowane aplikacje uwierzytelniające, użyj przycisku **Resetuj uwierzytelnianie** na dole ekranu **Ustawienia uwierzytelnienia**. (Resetując uwierzytelnianie, unieważniasz WSZYSTKIE już skonfigurowane aplikacje uwierzytelniające. Trzeba będzie je skonfigurować ponownie.)

## Używanie poleceń SMS

### Pierwsze kroki z poleceniami SMS

1)  Aby sprawdzić, czy wszystko jest dobrze ustawione, przetestuj połączenie: wyślij SMS o treści „bg” z telefonu opiekuna na telefon z **AAPS**. Powinna przyjść odpowiedź podobna do tej:

![image](../images/remote-control-06.png)

Jeśli nie dostaniesz żadnej odpowiedzi, sprawdź poniżej sekcję [Rozwiązywanie problemów](#SMSCommands-troubleshooting).

2)  Teraz wypróbuj polecenie SMS, które wymaga uwierzytelnienia, _np._ „target hypo”. Telefon opiekuna dostanie SMS z prośbą o wpisanie **sześciocyfrowego hasła** z aplikacji uwierzytelniającej, a po nim dodatkowego tajnego **PIN-u**, który znają tylko opiekunowie/obserwujący (razem dziesięć cyfr, jeśli Twój PIN ma 4 cyfry).

Gdy wysyłasz polecenie SMS po raz pierwszy, zrób to w pobliżu telefonu z **AAPS**, aby zobaczyć, jak to działa:

![image](../images/remote-control-16.png)

Telefon opiekuna dostanie od **AAPS** SMS z odpowiedzią, który potwierdzi, czy zdalne polecenie SMS zostało wykonane.

Jeśli polecenie się uda, dostaniesz odpowiedź, która to potwierdzi. Jeśli wystąpi problem, dostaniesz komunikat o błędzie. Częste błędy opisuje sekcja [Rozwiązywanie problemów](#SMSCommands-troubleshooting) poniżej.

**Podpowiedź**: Jeśli będzie wysyłanych dużo SMS-ów, warto mieć nielimitowane SMS-y w abonamencie (dla każdego używanego telefonu).

### Podawanie bolusów do posiłków przez polecenia SMS

Zdalny bolus insuliny można podać przez **polecenia SMS** lub przez sparowany **AAPSClient** (zobacz [Sterowanie Master ↔ Client](#client-master-control)); nie można go podać przez stronę Nightscout. Węglowodany można też zgłosić przez SMS lub **AAPSClient**. Przez SMS nie można wysłać poleceń węglowodanów i insuliny w jednej wiadomości. Te polecenia trzeba wysłać osobno, w ten sposób:

1)  Wyślij bolus insuliny (_np._ „bolus 2” zleca bolus 2 jednostek) przez polecenia SMS; odpowiada to **Leczenie** → **Insulina** w **AAPS**. 2)  Wyślij węglowodany (_np._ „carbs 20” zgłasza 20 g węglowodanów). Odpowiada to **Leczenie** → **Węglowodany** w **AAPS**.

Aby uniknąć hipoglikemii, na początku warto być ostrożnym i podać **mniej insuliny**, niż wynika z Twojego współczynnika IC, bo nie bierzesz pod uwagę aktualnego poziomu glukozy ani jego trendu.

**Kolejność wysyłania tych poleceń jest ważna**. Jeśli zgłosisz dużą ilość węglowodanów w dowolny sposób i masz włączone SMB, **AAPS** może od razu podać część bolusa insuliny. Jeśli więc spróbujesz wysłać bolus insuliny _po_ zgłoszeniu węglowodanów, możesz mieć irytujące opóźnienie i komunikat „bolus w trakcie”, a potem musisz sprawdzić, ile zostało podane jako SMB. Albo jeśli nie zauważysz, że jest podawany SMB, a Twój własny późniejszy bolus też się uda, na posiłek może zostać podane łącznie za dużo insuliny. Dlatego przy zdalnych bolusach do posiłków zawsze wysyłaj bolus insuliny _przed_ zgłoszeniem węglowodanów. Jeśli wolisz, możesz łączyć **AAPSClient** z poleceniami SMS: węglowodany wprowadzone w sparowanym **AAPSClient** nie wymagają kodu uwierzytelniającego, więc to szybsze niż polecenia SMS. Węglowodany i inne wpisy leczenia wprowadzone na stronie Nightscout **nie** są stosowane, gdy kontrola z urządzenia opiekuna jest włączona; **AAPS** jest wtedy w [trybie silniejszych zabezpieczeń](#client-master-control-hardened-mode).

(SMSCommands-commands)=
## Polecenia

```{contents} List of command groups
:depth: 1
:local: true
```

Polecenia trzeba wysyłać po angielsku. Odpowiedź będzie w Twoim języku, jeśli tekst odpowiedzi jest już [przetłumaczony](#translations-translate-strings-for-AAPS-app). Wielkość liter w poleceniach nie ma znaczenia, możesz używać małych lub wielkich liter.

![Przykład poleceń SMS](../images/SMSCommands.png)

**Tabele poleceń SMS** poniżej pokazują wszystkie możliwe polecenia SMS. Dla lepszego zrozumienia podano _przykładowe wartości_. Polecenia mają ten sam zakres wartości (cele, procent profilu itp.), który jest dozwolony w samej aplikacji **AAPS**.

(authentication-or-not)=
### Z uwierzytelnieniem czy bez?

Niektóre polecenia SMS dają od razu odpowiedź, a niektóre wymagają silnego **uwierzytelnienia** przez aplikację uwierzytelniającą. Proste zapytanie, np. „**BG**” (prośba o aktualny poziom glukozy), szybko się wpisuje, nie wymaga uwierzytelnienia i zwraca informacje o stanie **AAPS** pokazane poniżej:

![image](../images/remote-control-06.png)

Polecenia, które wymagają większego bezpieczeństwa, wymagają wpisania kodu, na przykład:

![SMS authenticated for markdown-smaller](../images/remote-control-07.png)

Kolumna *Auth* w tabelach poniżej pokazuje, czy dane polecenie wymaga takiego silnego uwierzytelnienia.

### Dane CGM

| Polecenie  | Auth | Funkcja i *odpowiedź*                                                                                                                                                                   |
| ---------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BG         | Nie  | Zwraca: ostatnią BG, deltę, IOB (bolus i baza), COB<br/>*Ostatnia BG: 5,6 4 min temu, Delta: -0,2 mmol, IOB: 0,20U (Bolus: 0,10U Baza: 0,10U)*                                    |
| CAL 5.6/90 | Tak  | Kalibruje CGM wartością 5,6/90<br/>(użyj wartości w Twoich jednostkach glukozy)<br/>Działa tylko, jeśli jest poprawnie ustawione w **AAPS**.<br/>*Kalibracja wysłana* |

### Pompa

| Polecenie            | Auth | Funkcja i *odpowiedź*                                                                                 |
| -------------------- | ---- | ----------------------------------------------------------------------------------------------------- |
| POMPA                | Nie  | Last conn: 1 min ago<br/>Temp: 0.00U/h @11:38 5/30min<br/>IOB: 0.5U Reserv: 34U Batt: 100 |
| PUMP DISCONNECT *30* | Tak  | Odłącza pompę na *30* minut                                                                           |
| PUMP CONNECT         | Tak  | Pompa ponownie podłączona                                                                             |

### Baza

| Polecenie         | Auth | Funkcja i *odpowiedź*                     |
| ----------------- | ---- | ----------------------------------------- |
| BASAL 0.3         | Tak  | Ustawia bazę tymczasową 0,3 U/h na 30 min |
| BASAL 0.3 20      | Tak  | Ustawia bazę tymczasową 0,3 U/h na 20 min |
| BASAL 30%         | Tak  | Ustawia bazę tymczasową 30% na 30 min     |
| BASAL 30% 50      | Tak  | Ustawia bazę tymczasową 30% na 50 min     |
| BASAL STOP/CANCEL | Tak  | Zatrzymuje bazę tymczasową                |

Niektóre pompy przyjmują bazę tymczasową tylko w procentach, inne tylko w U/h. Jeśli użyjesz innej formy, **AAPS** odpowie *„Ta pompa obsługuje tymczasowe dawki bazowe tylko w procentach, nie w U/h.”* (lub odwrotnie) i niczego nie ustawi. Czas trwania musi być wielokrotnością kroku czasu bazy tymczasowej Twojej pompy.


### Pętla

| Polecenie         | Auth | Funkcja i *odpowiedź*                                                                                                                                                                                                                                                                |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| LOOP STATUS       | Nie  | Odpowiedź zależy od aktualnego stanu:<br/> - *Pętla jest wyłączona*, jeśli pętla jest wyłączona lub w trybie LGS<br/> - *Pętla (Loop) jest włączona*, jeśli pętla jest zamknięta lub otwarta<br/> - *Wstrzymana (10 m)*, jeśli pętla jest odłączona lub wstrzymana |
| LOOP STOP/DISABLE | Tak  | Pompa wróci do zaprogramowanej dawki bazowej.<br/>*Pętla (Loop) została wyłączona*                                                                                                                                                                                             |
| LOOP SUSPEND 20   | Tak  | *Pętla wstrzymana na 20 minut*                                                                                                                                                                                                                                                       |
| LOOP RESUME       | Tak  | *Pętla wznowiona*                                                                                                                                                                                                                                                                    |
| LOOP CLOSED       | Tak  | *Bieżący tryb pracy: Zamknięta pętla*                                                                                                                                                                                                                                                |
| LOOP LGS          | Tak  | *Bieżący tryb pracy: Zawieszenie przy niskiej glikemii*                                                                                                                                                                                                                              |

### Bolus

Podanie zdalnego bolusa jest niemożliwe w czasie krótszym niż 15 minut (wartość ta może być zmieniona tylko gdy podane są co najmniej 2 uwierzytelnione numery telefonów) od poprzedniego podanego bolusa lub komendy zdalnej! W takim przypadku odpowiedź brzmi *Bolus zdalny niedostępny. Spróbuj ponownie później.* Ta odpowiedź przychodzi też wtedy, gdy pompa właśnie podaje bolus.

| Polecenie            | Auth | Funkcja i *odpowiedź*                                                                                                                                                   |
| -------------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BOLUS 1.2            | Tak  |                                                                                                                                                                         |
| BOLUS 0.60 MEAL      | Tak  | Podaje bolus 0,60 U<br/>**oraz** ustawia [cel tymczasowy Wkrótce posiłek](#TempTargets-eating-soon-temp-target)                                                   |
| CARBS 5              | Tak  | Wprowadza 5 g, bez bolusa                                                                                                                                               |
| CARBS 5 17:35/5:35PM | Tak  | Wprowadza 5 g o 17:35.<br/>Dozwolony format czasu zależy<br/> od ustawienia czasu (12h/24h) w telefonie.                                                    |
| EXTENDED 2 120       | Tak  | Ustawia bolus przedłużony 2 U na 120 min.<br/>Tylko dla [kompatybilnych pomp](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only). |
| EXTENDED STOP/CANCEL | Tak  | Zatrzymuje bolus przedłużony                                                                                                                                            |

### Profil

| Polecenie      | Auth | Funkcja i *odpowiedź*                                                                                                                               |
| -------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| PROFILE STATUS | Nie  | Bieżący profil i procent                                                                                                                            |
| PROFILE LIST   | Nie  | Aktualna lista profili w **AAPS**, np.:<br/>1. Profile1<br/> 2. Profile2                                                                |
| PROFILE 1      | Tak  | Zmienia profil na profil 1 z listy.<br/>Użyj numerów zwróconych przez **PROFILE LIST**,<br/>a nie nazw profili, pod którymi je zapisano |
| PROFILE 2 30   | Tak  | Zmienia profil na Profile2 30%                                                                                                                      |

Procent musi być od 30 do 250%, tak jak w aplikacji. Wartość spoza tego zakresu jest odrzucana, zanim pojawi się prośba o kod uwierzytelniający.

### Cele tymczasowe

| Polecenie                 | Auth | Funkcja i *odpowiedź*                                                      |
| ------------------------- | ---- | -------------------------------------------------------------------------- |
| TARGET MEAL/ACTIVITY/HYPO | Tak  | Ustawia cel tymczasowy MEAL/ACTIVITY/HYPO (Wkrótce posiłek/Aktywność/Hipo) |
| TARGET STOP/CANCEL        | Tak  | Anuluje cel tymczasowy                                                     |


(SMSCommands-other)=
### Inne

| Polecenie        | Auth | Funkcja i *odpowiedź*                                                                                                                                                                                                                                              |
| ---------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RESTART          | Tak  | Uruchamia ponownie AAPS. Przydatne, gdy masz problemy, które zwykle znikają po ponownym uruchomieniu.                                                                                                                                                              |
| SMS DISABLE/STOP | Tak  | Aby wyłączyć zdalne sterowanie SMS-ami, odeślij kod.<br/>Pamiętaj, że możesz je ponownie włączyć<br/>tylko bezpośrednio na głównym telefonie z **AAPS** (master).                                                                                      |
| HELP             | Nie  | Zwraca wszystkie dostępne funkcje:<br/>BG, LOOP, PUMP, BASAL, BOLUS, EXTENDED, CAL, PROFILE, TARGET, SMS, CARBS, HELP, RESTART<br/>Wyślij kolejne polecenie ***HELP ***FUNCTION******, aby wyświetlić<br/>wszystkie opcje dostępne w tej sekcji. |
| HELP BOLUS       |      | *BOLUS 1.2<br/>BOLUS 1.2 MEAL*                                                                                                                                                                                                                               |

(SMSCommands-troubleshooting)=
## Rozwiązywanie problemów i FAQ

```{contents} List of questions and issues
:depth: 1
:local: true
```

### Czego _nie można_ zrobić poleceniami SMS?

1)  **Nie możesz ustawić _tymczasowej_ zmiany profilu** (np. profilu „ćwiczenia” na 60 minut), ale możesz na stałe przełączyć na profil „ćwiczenia”. Tymczasowe zmiany profilu możesz zamiast tego ustawić przez **AAPSClient**.

2)  **Nie możesz anulować automatyzacji** ani **ustawić własnych celów**, ale są przybliżone rozwiązania: Na przykład załóżmy, że zwykły cel w profilu to 5,5. W AAPS jest ustawiona automatyzacja, która zawsze ustawia wysoki cel 7,0 między 14:30 a 15:30 z powodu lekcji WF w szkole. Warunek tej automatyzacji to „brak celu tymczasowego”. W tym tygodniu dowiadujesz się w ostatniej chwili, że WF jest odwołany, a zamiast niego będzie jedzenie pizzy. Twoje dziecko jest już w szkole z telefonem z **AAPS**. Jeśli automatyzacja uruchomi wysoki cel tymczasowy 7,0, a Ty go anulujesz (na telefonie z **AAPS** lub zdalnie), warunki automatyzacji nadal są spełnione i **AAPS** po prostu minutę później znowu ustawi wysoki cel.

**Jeśli masz dostęp do telefonu z AAPS**, możesz odznaczyć lub zmienić automatyzację. Jeśli nie chcesz tego robić, możesz po prostu ustawić nowy cel tymczasowy 5,6 na 60 min, naciskając cel na ekranie głównym albo przez **Zarządzaj** → **Cel tymczasowy**. To nie pozwoli automatyzacji ustawić wysokiego celu 7,0.

**Jeśli nie masz dostępu do telefonu z AAPS**, możesz użyć poleceń SMS jako przybliżonego rozwiązania: np. poleceniem „target meal” ustawić cel 5,0 na 45 min (inne domyślne cele to 8,0 dla aktywności lub hipo, zobacz tabelę). Jednak poleceniami SMS nie możesz podać _konkretnej_ wartości celu (np. 5,6 na 60 minut). Do tego potrzebny jest **AAPSClient**.

### Co się stanie, jeśli zmienię zdanie zaraz po wysłaniu polecenia?

**AAPS** wykona tylko najnowsze polecenie. Jeśli więc wpiszesz „bolus 1.5”, a potem bez uwierzytelnienia wyślesz nowe polecenie „bolus 1”, wcześniejsze polecenie 1,5 zostanie pominięte. **AAPS** zawsze wyśle na telefon opiekuna odpowiedź z potwierdzeniem, jakie to polecenie, zanim poprosi o kod uwierzytelniający, a także odpowiedź po wykonaniu akcji.

### Dlaczego nie przyszła odpowiedź na polecenie SMS?

Może to mieć jedną z tych przyczyn:

1)  Wiadomość nie dotarła do telefonu (problemy z siecią). 2)  **AAPS** wciąż przetwarza prośbę (_np._ bolus, którego podanie może chwilę trwać, zależnie od szybkości podawania bolusa). 3)  Telefon z **AAPS** nie ma dobrego połączenia Bluetooth z pompą w chwili odebrania polecenia i polecenie się nie udało (zwykle wywołuje to alarm na telefonie z **AAPS**).

### Brak jakiejkolwiek odpowiedzi na polecenia SMS

Na telefonie opiekuna i/lub telefonie z **AAPS** spróbuj wyłączyć te opcje:
* **Wyślij jako wiadomość czatu** ![Wyłącz SMS jako wiadomość czatu](../images/SMSdisableChat.png)
* Jeśli używasz aplikacji Android Messages lub Google Messages, wyłącz wiadomości RCS:
  - otwórz daną rozmowę SMS w aplikacji Wiadomości
  - Wybierz menu opcji (trzy kropki) w prawym górnym rogu
  - wybierz „Szczegóły”
  - Włącz „Only send SMS and MMS messages” (wysyłaj tylko SMS i MMS) ![Wyłącz RCS jako wiadomość czatu](../images/SMSdisableRCS.png)

### Błędy przy wykonywaniu poleceń

Polecenie może się nie udać z kilku powodów:

* Konfiguracja poleceń SMS nie jest kompletna/poprawna
* Wysłano polecenie w złym formacie (np. „disconnect pump 45” zamiast „pump disconnect 45”)
* Użyto złego lub wygasłego kodu uwierzytelniającego (zwykle warto poczekać kilka sekund na nowy kod, jeśli obecny zaraz wygaśnie)
* Kod + PIN był poprawny, ale wysłanie lub dostarczenie SMS-a się opóźniło, więc **AAPS** uznał, że kod uwierzytelniający wygasł
* Telefon z **AAPS** jest poza zasięgiem pompy lub nie ma z nią połączenia
* System właśnie podaje bolus

Częste błędy pokazują przykłady poniżej:

![image](../images/remote-control-17.png)

### Jak zatrzymać polecenie, gdy zostało już uwierzytelnione?

Nie da się. Możesz jednak anulować bolus wysłany SMS-em na samym telefonie z **AAPS**, po prostu anulując go w oknie bolusa, jeśli zrobisz to szybko. Wiele poleceń SMS (poza bolusami i zgłoszeniami węglowodanów) łatwo cofnąć albo ograniczyć skutki pomyłki.

Przy błędach w bolusach i zgłoszeniach węglowodanów też możesz coś zrobić. Na przykład jeśli zgłosisz 20 g węglowodanów, ale dziecko zje tylko 10 g, a Ty (lub opiekun na miejscu) nie możesz usunąć tego wpisu bezpośrednio na telefonie z **AAPS**, możesz ustawić wysoki cel tymczasowy albo słabszy profil, aby **AAPS** działał mniej agresywnie.

### Wiele SMS-ów

Jeśli ta sama wiadomość przychodzi wiele razy (_np._ zmiana profilu), mogła przypadkiem powstać pętla z innymi aplikacjami. Może to być na przykład xDrip. Jeśli tak, upewnij się, że xDrip (ani żadna inna aplikacja) nie wysyła wpisów leczenia do Nightscout.

Jeśli ta inna aplikacja jest zainstalowana na kilku telefonach, wyłącz wysyłanie (upload) na wszystkich z nich.

(sms-commands-too-many-messages)=
### Dostaję o wiele za dużo SMS-ów z poleceń SMS. Czy mogę je ograniczyć albo wyłączyć?

Używanie poleceń SMS może tworzyć dużo automatycznych wiadomości z telefonu z **AAPS** na telefon opiekuna. Dostaniesz też wiadomości, np. „profil bazowy w pompie zaktualizowany”, jeśli masz ustawione automatyzacje w **AAPS**. Jeśli będzie wysyłanych dużo SMS-ów, warto mieć nielimitowane SMS-y w abonamencie telefonu z **AAPS** (i każdego używanego telefonu opiekuna) oraz wyłączyć powiadomienia, alarmy lub wibracje SMS na wszystkich telefonach. Nie da się używać poleceń SMS bez otrzymywania tych wiadomości. Dlatego możesz chcieć innego sposobu na bezpośredni kontakt z dzieckiem (jeśli jest wystarczająco duże) zamiast SMS-ów. Popularne inne komunikatory używane przez opiekunów z **AAPS** to Whatsapp, Lime, Telegram i Facebook Messenger.

Możesz wyłączyć SMS „Profil zmieniony”, gdy zmiana profilu pochodzi z Nightscout. Aby to zrobić, utwórz plik o nazwie **dokładnie**  `do_not_send_sms_on_profile_change` w folderze `extra` w katalogu AAPS.
