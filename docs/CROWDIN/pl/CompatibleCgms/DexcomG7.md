# Dexcom G7, ONE+ i Stelo


## Najważniejsze na początek

Warto wiedzieć, że systemy G7, ONE+ i Stelo, w odróżnieniu od G6, nie wygładzają wartości ani w aplikacji, ani w czytniku. Więcej informacji na ten temat znajdziesz [tutaj](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Przeczytaj zalecenia dotyczące [metody wygładzania](../CompatibleCgms/SmoothingBloodGlucoseData.md) dla Dexcom G7/ONE+/Stelo
```

## 1. xDrip (bezpośrednie połączenie z G7, ONE+ lub Stelo)

- xDrip sam łączy się z sensorem: odinstaluj aplikację Dexcom, bo z sensorem może się łączyć tylko jedna aplikacja. Jeśli chcesz zachować aplikację Dexcom, użyj zamiast tego [xDrip w trybie Companion App](#DexcomG7-xdrip-companion-app).
- Postępuj według instrukcji tutaj: [xDrip G7, ONE+ i Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). Potrzebna jest nowa wersja xDrip – minimalną wersję znajdziesz na podanej stronie.
- Wybierz xDrip w [**Konfiguracja → Źródło BG**](#Config-Builder-bg-source).

- Dostosuj ustawienia xDrip według opisu na stronie [Ustawienia xDrip](../CompatibleCgms/xDrip.md)

## 2. Build Your Own Dexcom App (tylko G7)

```{admonition} Old app version
:class: warning
Dexcom BYODA to teraz bardzo stara wersja aplikacji i nie można jej zaktualizować. Niedostępne dla ONE+ ani Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) obsługuje lokalne przesyłanie danych (local broadcast) do AAPS

-   Ta aplikacja pozwala używać Dexcom G7 z dowolnym smartfonem z Androidem.
-   Odinstaluj oryginalną aplikację Dexcom
-   Zainstaluj pobrany plik apk
-   Wpisz kod sensora w zmodyfikowanej aplikacji
-   Po krótkim czasie BYODA powinna odebrać sygnał z nadajnika

(DexcomG7-xdrip-companion-app)=

## 3. xDrip w trybie Companion App (G7, ONE+ i Stelo)

Oficjalna aplikacja Dexcom pozostaje połączona z sensorem. xDrip odczytuje wartości glukozy z powiadomień aplikacji Dexcom i wysyła je do **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** nie uznaje xDrip w trybie Companion App za [zaufane źródło danych BG](#GettingStarted-TrustedBGSource): SMB nie są dozwolone przez cały czas.
```

### Odczyt powiadomień aplikacji Dexcom

- Pozostaw aplikację Dexcom zainstalowaną i połączoną z sensorem. Jej powiadomienia muszą być widoczne: nie wyciszaj ich i nie ukrywaj.
- Pobierz i zainstaluj [xDrip](https://github.com/NightscoutFoundation/xDrip). Używaj w xDrip tych samych jednostek glukozy co w aplikacji Dexcom.
- W xDrip przejdź do **Settings** > **Hardware Data Source** i wybierz **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip poprosi o pozwolenie na odczyt powiadomień. Stuknij **OK**, potem wybierz **xDrip** na liście i włącz **Zezwalaj na dostęp do powiadomień** (Allow notification access).

  ![Lista dostępu do powiadomień](../images/xDrip_Companion_NotificationAccess1.png)

- Jeśli opcja **Zezwalaj na dostęp do powiadomień** jest wyszarzona (*Controlled by Restricted Setting* – kontrolowane przez ustawienie z ograniczeniami), Android ją blokuje, bo xDrip nie został zainstalowany ze Sklepu Play:

  ![Dostęp do powiadomień kontrolowany przez ustawienie z ograniczeniami](../images/xDrip_Companion_Restricted.png)

  Otwórz informacje o aplikacji xDrip (przytrzymaj ikonę xDrip > **Informacje o aplikacji**), stuknij menu z trzema kropkami w prawym górnym rogu i wybierz **Zezwól na ustawienia z ograniczeniami** (Allow restricted settings). Potem wróć do ekranu dostępu do powiadomień i zezwól na dostęp.

  ![Informacje o aplikacji: Zezwól na ustawienia z ograniczeniami](../images/xDrip_Companion_AllowRestricted.png)

  ![Dostęp do powiadomień dozwolony dla xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- Odczyty pojawiają się w xDrip, gdy aplikacja Dexcom pokaże nową wartość. Jeśli nic się nie pojawia, może być potrzebne uruchomienie sensora w xDrip: nie ma to wpływu na prawdziwy sensor. W tym trybie Stelo podaje odczyt co 15 minut.

### Companion Bluetooth (G7)

Gdy aplikacja Dexcom jest połączona z sensorem G7, xDrip może też odbierać przez Bluetooth odczyty, które sensor wysyła do aplikacji Dexcom. xDrip nie paruje się z sensorem i nie musisz wpisywać kodu sensora: aplikacja Dexcom zachowuje kontrolę.

Z opcją **Companion Bluetooth** xDrip dostaje z sensora dokładny czas i trend każdego odczytu, a nie czas pojawienia się powiadomienia, i uzupełnia przerwy, gdy telefon był poza zasięgiem (backfill).

- W xDrip przejdź do **Settings** > **Less common settings** > **Bluetooth Settings** i włącz **Companion Bluetooth**.

  ![xDrip Bluetooth Settings: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- Nie działa to na wszystkich telefonach i wersjach Androida. Jeśli widzisz problemy, wyłącz tę opcję.
- Jeśli stary sensor Dexcom nadal jest na liście Bluetooth telefonu, xDrip może odbierać dane z niewłaściwego sensora: w Androidzie w **Ustawienia** > **Połączone urządzenia** usuń („Zapomnij”) sensory, których już nie używasz.
- Companion Bluetooth jest przeznaczony dla G7. Przy ONE+ i Stelo polegaj na powiadomieniach.

### Konfiguracja w AAPS

- Wybierz xDrip w [**Konfiguracja → Źródło BG**](#Config-Builder-bg-source).
- Dostosuj ustawienia xDrip według opisu na stronie [Ustawienia xDrip](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 i ONE+)

Wymagana wersja 9.0 lub nowsza

- Wyłącz aplikację, która była wcześniej połączona z sensorem: odinstaluj ją albo użyj opcji „Wymuś zatrzymanie”. Wyłącz uprawnienie „Urządzenia w pobliżu” w ustawieniach tej aplikacji. Ogranicz użycie baterii przez tę aplikację.

- Usuń sensor z ustawień Bluetooth: w ustawieniach Androida znajdź sensor na liście sparowanych urządzeń i wybierz „Zapomnij”. Nazwy sensorów Dexcom G7 zaczynają się od DXCM.

- Unikaj zakłóceń od innych sensorów: trzymaj stare sensory Dexcom poza zasięgiem Bluetooth.

- Połącz sensor G7 z Juggluco: otwórz Juggluco → menu po lewej → Photo. Zeskanuj kod Data Matrix na aplikatorze sensora G7. Poczekaj do 5 minut, aż Juggluco znajdzie sensor.

- Warunki parowania: zgódź się na sparowanie sensora z Juggluco. Upewnij się, że ekran nie jest zablokowany podczas parowania. Jeśli parowanie się nie uda, poczekaj 5 minut i spróbuj ponownie.

- Wyjątek: zegarki z Wear OS mogą się sparować bez naciskania przycisku zgody.
