
# Informacje o wersji

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Please follow the instructions in the [update manual](UpdateToNewVersion.md) to update to a new version. Rozdział o rozwiązywaniu problemów na stronie z instrukcją aktualizacji opisuje też najczęstsze trudności przy aktualizacji **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Zobacz [Co zmieniło się w AAPS v4](V4Changes.md), aby poznać ważne zmiany w działaniu – funkcje, które zostały przeniesione, mają nową nazwę albo zostały usunięte.
```

Gdy dostępna jest nowa aktualizacja, dostaniesz takie powiadomienie:

![Informacje o aktualizacji](../images/AAPS_LoopDisable90days.png)

Jeśli nie zaktualizujesz do daty wygaśnięcia, **AAPS** przełączy się na Otwartą pętlę.

Daty końca wsparcia wersji AAPS znajdziesz na stronie [Koniec wsparcia](EndOfLife.md).

**Nie ignoruj tego powiadomienia.** Nowe wersje **AAPS** zawierają ważne poprawki bezpieczeństwa. Dlatego każdy użytkownik **AAPS** musi jak najszybciej zaktualizować do najnowszej wersji. This is an effort to try to improve the safety for each **AAPS** user and the DIY community. Dziękujemy za zrozumienie.

(maintenance-android-version-aaps-version)=

## Wersja Androida i wersja AAPS

Jeśli Twój smartfon ma Androida starszego niż Android 12, nie możesz używać AAPS v3.4 i nowszych, bo wymagają co najmniej Androida 12.

Aby użytkownicy ze starszym Androidem mogli używać starszej wersji AAPS, wydano nowe wersje, które zmieniają tylko sprawdzanie wersji. Nie zawierają innych ulepszeń.

Znajdź swoją wersję Androida w tabeli poniżej i użyj pasującej wersji **AAPS**. Kod pobierasz z <https://github.com/nightscout/AndroidAPS>, z podanej gałęzi.

| Twoja wersja Androida | Wersja AAPS do użycia | Gałąź do pobrania                                                |
| --------------------- | --------------------- | ---------------------------------------------------------------- |
| Android 12 i nowszy   | Najnowsza wersja      | [master](https://github.com/nightscout/AndroidAPS) (domyślna)    |
| Android 11            | **3.3.2.1**           | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10         | **3.2.0.4**           | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8             | **2.8.2.1**           | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7             | **2.6.2**             | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## Wersja na WearOS

- AAPS wymaga WearOS 3.0, 3.2 lub 3.5 (Android 11, API level 30) albo nowszego. Zegarki z WearOS 2 nie są obsługiwane.

```{tip}
WearOS 5, API level 34 (Android 14) ma [ograniczenia](#BuildingAapsWearOs-WearOS5).
```

(latestrelease)=

(version400)=

## Wersja 4.0.0

Data wydania: 31.10.2026

### Nowe funkcje
- Nowy interfejs: aplikacja na telefon przebudowana w Jetpack Compose @MilosKozak
- [Wyszukiwanie globalne](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migracja do Kotlin Multiplatform, klient dla komputerów z Windows, Mac i Linux oraz dla iOS @MilosKozak
- [Sceny](../DailyLifeWithAaps/Scenes.md): zapisz zestaw akcji i uruchamiaj je razem @MilosKozak
- [Sterowanie Master ↔ Client](../RemoteFeatures/ClientMasterControl.md): wysyłanie poleceń z telefonu opiekuna do urządzenia pacjenta @MilosKozak
  - [Role opiekunów](#client-master-control-roles): Tylko odczyt, Posiłki, Opiekun lub Administrator dla każdego urządzenia opiekuna @MilosKozak
  - [Tryb silniejszych zabezpieczeń](#client-master-control-hardened-mode): gdy sterowanie z urządzenia opiekuna jest włączone, urządzenie pacjenta przyjmuje zmiany tylko od sparowanych urządzeń opiekuna @MilosKozak
  - Parowanie kodem QR, który ustawia też Nightscout na urządzeniu opiekuna, albo kodem PIN; sekret parowania jest wymieniany zaraz po sparowaniu @MilosKozak
  - [Własny token Nightscout](#client-master-control-own-token) dla każdego urządzenia opiekuna, tylko z prawami, których ono potrzebuje @MilosKozak
- Obsługa [stężenia insuliny](../AdvancedOptions/InsulinConcentration.md) (U200, U500) w pompach, kalkulatorze i profilach @Philoul @MilosKozak
- Zarządzanie insuliną: katalog insulin, nazwy własne, wybór w profilu i kalkulatorze @Philoul
- Wtyczka kalibracji @MilosKozak
- [Wygładzanie](../CompatibleCgms/SmoothingBloodGlucoseData.md): Bezśladowy filtr Kalmana (UKF) @piecycle
- [Zmiana miejsca wkłucia](#Aapsscreens-site-rotation): śledzenie i zmiana miejsc wkłucia @Philoul @MilosKozak
- Przebudowany [Autotune](../AdvancedOptions/Autotune.md) @Philoul
- Nowe [widżety](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Dostępność: aplikacja na telefon działa z czytnikiem ekranu – nazwane elementy sterujące, odczytywany stan, opisy wykresów i nagłówki do szybkiego przeglądania @MilosKozak
- [Import ustawień](../Maintenance/ExportImportSettings.md): może zachować ustawienia pompy @MilosKozak
- Stałe powiadomienie używa aktualizacji na żywo (live updates) Androida, z obsługą Samsung Now bar i zmianą (delta) @premnirmal
- Wykres BG: [naciśnij i przytrzymaj](#aaps-screens-graph-press-and-hold), aby zobaczyć wartości w danym punkcie, na każdym wykresie ekranu głównego @t1dude @olorinmaia
- Poprawa wydajności @MilosKozak
- Automatyczne eCarbs w Kalkulatorze bolusa @MilosKozak

### Nowe urządzenia
- **CareLevo**: nowy [sterownik pompy](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: obsługa @MilosKozak
- **Instara**: nowe źródło CGM @leohunt

### Ulepszenia sterowników pomp
- Przebudowane ekrany przeglądu pompy dla Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn i Equil @MilosKozak
- **Omnipod Dash**: kody Ref jak w PDM i czytelne opisy błędów, kompensacja dryfu zawsze włączona, lepsze raportowanie typu bolusa @nl-ruud
- **Omnipod**: twarda data końca dla Dash i Eros @mcnelson
- **DanaR, RS**: emulator pompy do testów @MilosKozak
- **Equil**: emulator pompy do testów @MilosKozak
- Wiele poprawek pomp i pętli @MilosKozak i inni

### Wear OS
- [Aplikacja na zegarek](../WearOS/WearOsSmartwatch.md) przebudowana w Compose, nowe kafelki i komplikacje, automatyczna instalacja tarczy zegarka (Watch Face Push) na Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface dostępna dla WearOS 6.0 (GW7, GW8, GW9...) z osobną tarczą zegarka WFF @Philoul @olorinmaia
- CustomWatchface może teraz mieć 5 miejsc na komplikacje, które możesz dostosować (nowa funkcja dostępna tylko dla starszych zegarków) @Philoul
- Nowa [tarcza zegarka WFF oparta na komplikacjach AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Poprawki w wyniku Kalkulatora bolusa i Szybkiego kalkulatora @olorinmaia
- Nowy wykres BG i aktywność Tryb pracy w głównym menu @olorinmaia
- Kalkulator bolusa: strona [rodzaju posiłku](#WearOsSmartwatch-wizard-meal-type), która dzieli węglowodany jak kalkulator w telefonie, oraz [czas węglowodanów](#WearOsSmartwatch-wizard-carb-time) z przypomnieniem *czas jeść* na zegarku @olorinmaia
- [Alarmy z telefonu na zegarku](#WearOsSmartwatch-phone-alarms): zegarek pokazuje alarm i oferuje Wycisz (Silence) i Wycisz na 5 min (Mute 5 min) @olorinmaia

### Budowanie
- Workflow CI do budowania z tagów/gałęzi, mapowanie wersji JDK @Angus-repo

### Współtwórcy
@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Pełna lista zmian: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

(version3426)=

## Wersja 3.4.2.6

- Equil: poprawa stabilności @MilosKozak

(version3425)=

## Wersja 3.4.2.5

- Equil: naprawiono wyścig (race condition) @MilosKozak

(version3424)=

## Wersja 3.4.2.4

- Poprawki Equil @MilosKozak
- Poprawka synchronizacji profilu z NS @MilosKozak

(version3423)=

## Wersja 3.4.2.3
- Dash: rozwiązanie dryfu czasu @nl-ruud
- NSClientV3: naprawiono lukę po ponownym połączeniu @MilosKozak
- Automatyzacja: naprawiono deserializację @MilosKozak
- Equil: naprawiono raport baterii @MilosKozak
- Cleanup workflow @vanelsberg
- Equil: lepsze wychodzenie z błędów @MilosKozak
- DanaRS: naprawiono komunikację z pompą w wersji krajowej (domestic) @MilosKozak
- Insight: naprawiono synchronizację TBR @MilosKozak
- Dash: naprawiono błąd aktywacji @nl-ruud

(version3422)=

## Wersja 3.4.2.2

- Naprawa problemów z Equil i Medtronic
- Poprawa bezpieczeństwa Medtrum

(version3421)=

## Wersja 3.4.2.1

- Equil: naprawiono parowanie i okno postępu @MilosKozak

(version3420)=

## Wersja 3.4.2.0

Data wydania: 04.02.2026

- Equil: naprawiono opór dla różnych modeli @hhfcvmars
- Tidepool: naprawiono sesję @MilosKozak
- Medtrum: Fix activation path by preventing double fill @MilosKozak
- COB: naprawiono obliczanie COB (dotyczy niebezpiecznego przypadku brzegowego) @MilosKozak

(version3410)=

## Wersja 3.4.1.0

Data wydania: 03.08.2026

### Rdzeń
- Naprawiono obsługę zmiany czasu (DST) @MilosKozak
- Ulepszone i ujednolicone rozpoznawanie normalnego celu (mg/dl > 99, mmol > 5,5) @MilosKozak
- SMS: ochrona RESTART kodem PIN @MilosKozak
- Konserwacja: ostrzeżenie przy wyborze złego katalogu @MilosKozak

### Ulepszenia sterowników pomp
- **Omnipod Dash**: przeniesienie kodu sterownika BLE do modułu omnipod/common @jwoglom
- **Omnipod Dash**: próba naprawy stanu połączenia @MilosKozak
- **Omnipod**: sprawdzanie profilu przed aktywacją poda, aby nie marnować podów (#4534) @brianV
- **Medtronic**: naprawiono wyświetlanie tego samego typu kodowania w oknie ustawień @mifi100
- **Medtronic**: przygotowanie wspólnych klas pomp (przygotowanie do Tandem) @andy-rozman
- **RileyLink**: poprawka kodowania (#4519) @mifi100
- **Equil**: większa zgodność z pompami według prefiksu numeru seryjnego (#4510) @hhfcvmars
- **Equil**: dodano logowanie @MilosKozak
- **Diaconn G8**: naprawiono błąd synchronizacji logów i dodano obsługę firmware 3.58+ @miyeongkim
- **Diaconn**: naprawiono przeliczanie jednostki czasu trwania TBR @miyeongkim
- **Diaconn**: użycie commandQueue.loadEvents() do synchronizacji historii @miyeongkim
- Możliwość podawania insuliny, gdy pętla jest wstrzymana, ale pompa jest dostępna @cschuijt

### Chmura / kopia zapasowa
- Dodano kopię zapasową na Dysk Google @Angus-repo
- Powiadomienie interfejsu o zmianie stanu błędu zapisu w chmurze @Angus-repo
- Możliwość jednoczesnego zapisu lokalnego i w chmurze @Angus-repo

### Tidepool
- Ulepszona migracja Tidepool OAuth2 @MilosKozak
- Naprawiono nieskończony stan BLOCKED w Tidepool, naprawiono odrzucanie pustych SSID @michaeln-synapse

### NSClient
- NSCv3: ulepszone ponowne łączenie @MilosKozak

### Wear OS
- Wyświetlanie nowej IOB w wyniku kalkulatora, jeśli IOB jest używana w obliczeniach @olorinmaia
- Naprawiono BolusProgress na zegarku z całkowitą ilością @Philoul

### Interfejs
- Ulepszona ikona ic_none dla zmiany miejsca wkłucia @Philoul
- Naprawiono nieużywanie ustawienia zarządzania pompą w zmianie miejsca wkłucia @samfundev

### Współtwórcy
@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

(version3400)=

## Wersja 3.4.0.0

Data wydania: 31.12.2025

### Przed aktualizacją:
* Ta wersja wymaga Google Android 12.0 lub nowszego. Przed aktualizacją sprawdź wersję Androida w telefonie.
* Zaktualizuj Android Studio do najnowszej wersji albo, co lepsze, użyj budowania w przeglądarce.

### Nowe funkcje
* Tryb pracy @MilosKozak
  * Pokazywanie [historii stanu pętli](#AapsScreens-running-mode) na kartach leczenia
  * Pokazywanie i zmiana [stanu pętli z AAPSClient](#RemoteControl_aapsclient).<br>Uwaga: wymaga ustawienia [NSClient > Synchronizacja > Odbieraj tryb pracy z NS](#Preferences-nsclient-synchronization)
* [Nowe systemy CGM](../Getting-Started/CompatiblesCgms.md): Glunovo, Intelligo, Sinocare
* Obsługa [zmiany miejsca wkłucia](#Aapsscreens-site-rotation) @Philoul
* Nowa [akcja automatyzacji](#automations-automation-action): włączanie lub wyłączanie SMB @MilosKozak
* CGM Syai jest [zaufanym źródłem](#GettingStarted-TrustedBGSource) i obsługuje zaawansowane filtrowanie @MilosKozak

### Ulepszenia Wear OS
* znacznie mniejsze zużycie baterii @MilosKozak
* ulepszenia i poprawki interfejsu @olorinmaia
* kod prawie całkowicie przepisany, aby pasował do obecnych bibliotek (wcześniej WearOS 2) @MilosKozak
* 2 nowe komplikacje z rozszerzonymi danymi @Philoul
* Przejście na nowoczesnego dostawcę komplikacji z DataStore @MilosKozak

### Naprawa wycieków pamięci
* Naprawiono wycieki pamięci w kodzie @MilosKozak
* Dodano zgłaszanie wycieków pamięci LeakCanary do Firebase Crashlytics @MilosKozak

### Ulepszenia sterowników pomp
* **DanaI**: naprawiono problemy z rozłączaniem @MilosKozak
* **RileyLink**: szybsza komunikacja dzięki krótszym opóźnieniom @mifi100
* **Medtrum**: dodano wyświetlanie czasu aktywacji i wieku patcha @vanelsberg, poprawka wielkich liter w haśle @MilosKozak
* **Combo**: naprawiono wyścigi (race conditions) w testach @MilosKozak @dv1
* **Equil**: zoptymalizowane połączenie, mniejsze zużycie baterii @MilosKozak

### Synchronizacja z Nightscout
* Ulepszone usuwanie duplikatów przy błędzie NS @MilosKozak

### Ulepszenia interfejsu (UI/UX)
* various improvements @MilosKozak @Philoul @olorinmaia

### Automatyzacja
* Nowa akcja sterowania SMB – włączanie/wyłączanie SMB przez automatyzację @MilosKozak

### Testy
* Dodano obszerne testy jednostkowe dla pomp Equil, Eopatch, Dana i Medtronic @MilosKozak
* Poprawiona stabilność i pokrycie testów w wielu modułach @MilosKozak

### Tidepool
* Tidepool OAUTH2 (obsługa nowego logowania do Tidepool) @MilosKozak

(version3321)=

## Wersja 3.3.2.1

Data wydania: 13.08.2025

- Naprawiono połączenie Bluetooth z Omnipod na Androidzie 16
- Proces CI (Budowanie w przeglądarce)
- Naprawiono przeliczanie mmol/mg/dl
- Naprawiono zły wybór czasu w oknach dialogowych w niektórych strefach czasowych
- Naprawiono odczyt kluczy w trybie uproszczonym
- Naprawiono brakujące prognozy na zegarku
- Ulepszona Konfiguracja (Config Builder)
- Ulepszona pełna synchronizacja NSCv3

(version3300)=

## Wersja 3.3.2.0

Data wydania: 27.03.2025

### Jak zaktualizować

* Do zbudowania tej wersji potrzebujesz [Android Studio w wersji „Meerkat”](#Building-APK-recommended-specification-of-computer-for-building-apk-file) lub nowszej. Jeśli już zbudowałeś wersję 3.3.x, musisz ponownie zaktualizować Android Studio.

(version-enforcement)=

### Starting this version, notification and version enforcement has been simplified and softened and works following way:
*  Brak wygaśnięcia, gdy urządzenie jest offline (bez połączenia z internetem). Oznacza to, że nie ma już okresów przejściowych 60 i 90 dni.
*  Po wygaśnięciu wymuszany jest tryb LGS
*  Ostrzeżenia/powiadomienia będziesz dostawać rzadziej:
   - pozostało 28+ dni: co 7 dni
   - pozostało 27–14 dni: co 3 dni
   - potem raz dziennie
   - Powiadomienie pojawia się po południu, aby nie przeszkadzać Ci w nocy
* Są tylko 2 rodzaje powiadomień
   - Dostępna jest nowa wersja (nie ma wpływu na AAPS)
   - Aplikacja wygaśnie w określonym dniu w przyszłości (nadal bez wpływu na AAPS) / wygasła (AAPS przejdzie w tryb LGS)

### Nowości

* Polecenie SMS RESTART @MilosKozak
* Parametry zmiany profilu na zegarku @olorinmaia
* Tryb ciemny tarczy zegarka AAPS V2 @olorinmaia
* Ulepszona wymiana danych z G7 @olorinmaia
* Konfiguracja widżetu @MilosKozak
* Ulepszenia interfejsu przycisków wyboru (RadioButton) @olorinmaia
* Automatyzacja: wybór pozycji z mapy @MilosKozak
* Wersja widoczna na głównych ekranach @MilosKozak
* Compilation with existing git system is enforced (no zip downloads)
* Pokazywanie wersji na ekranie głównym @MilosKozak
* Ulepszenia wysyłania do Tidepool @ConstantinMatheis

### Poprawki błędów

* Naprawiono usuwanie bondingu w Dash @Andreas
* Poprawki Garmin @robertbuessow @suside
* Naprawiono wyświetlanie IOB w oknach dialogowych @olorinmaia
* Poprawki pisowni i walidacji zadań @MilosKozak
* Naprawiono wyświetlanie emulowanych TBR @MilosKozak
* Naprawiono omijanie zabezpieczeń @tdrkDev

## Wersja 3.3.1.3

Data wydania: 21.01.2025

### Poprawki błędów

* Dash: bonding jest opcjonalny (domyślnie wyłączony) @MilosKozak
* Equil: fixed bolus 10+U, alarm improvements @EquilHack
* Garmin: ulepszenia zegarka @swissalpine
* Ulepszenia zegarka @olorinmaia
* Sterowanie stanem pętli z zegarka @tdrkDev
* Poprawa stabilności

*  **Może być potrzebna nowa [konfiguracja Authenticatora](#sms-commands-authenticator-setup).**

## Wersja 3.3.1.2

Data wydania: 15.01.2025

### Jak zaktualizować

* Do zbudowania tej wersji potrzebujesz [Android Studio w wersji „Ladybug Feature Drop”](#Building-APK-recommended-specification-of-computer-for-building-apk-file) lub nowszej. **To nie jest to samo co zwykły „Ladybug”.** Jeśli już zbudowałeś wersję 3.3.x, musisz ponownie zaktualizować Android Studio.

### Poprawki błędów

* Dash: używanie bondingu (powiązania Bluetooth) na Androidzie 15+
* Przywrócono przycisk Dexcom na ekranie głównym
* Equil: możliwość usunięcia niedziałającej pompy
* Ostrzeżenie, gdy Współczynnik Dostosowania DynISF wynosi zero
* NSCv3: naprawiono komunikację przez websockety na telefonach z nieco innym czasem
* Polecenia SMS: naprawiono OneTimePassword. **Może być potrzebna nowa [konfiguracja Authenticatora](#sms-commands-authenticator-setup).**
* Naprawiono problem, przez który niektórych ustawień nie dało się już edytować.
* Naprawiono resetowanie hasła głównego przy wirtualnej pompie.
* Naprawiono import dużych plików kopii zapasowej ustawień.

## Wersja 3.3.1.0

Data wydania: 06.01.2025

### Zmiany w interfejsie

* [Dodano kolory, aby odróżnić AAPSClient od AAPSClient2](#RemoteControl_aapsclient) @MilosKozak
* Ulepszony układ i ikony działań użytkownika

### Inne funkcje

* Nowy wyzwalacz automatyzacji: [liczba kroków](#screen-heart-rate-steps) @Roman Rihter
* Możliwość odbierania wszystkiego przy pełnej synchronizacji NSCv3 (także danych, które wcześniej nie były synchronizowane, np. TBR) @MilosKozak
* NSClient v3: działające Powiadomienia (_tzn._ z AAPSClient do AAPS) @MilosKozak

### Zmiany techniczne i poprawki błędów

* Naprawiono awarię Insight @philoul
* Naprawiono tworzenie zbyt wielu wpisów deviceStatus w Nightscout @MilosKozak
* Naprawiono wchłanianie węglowodanów @MilosKozak
* Naprawiono kolor przycisków RadioButton i pól CheckBox @MilosKozak
* Naprawiono błąd w migracji procentu DynISF @MilosKozak
* Naprawiono źle umieszczone powiadomienie DynISF @MilosKozak
* Naprawiono błąd w tarczach zegarka @philoul

## Wersja 3.3.0.0

Data wydania: 29.12.2024

### Główne funkcje

* Funkcja **[Dynamiczny ISF](../DailyLifeWithAaps/DynamicISF.md)** nie jest już osobną wtyczką, tylko opcją wtyczki [OpenAPS SMB](#Config-Builder-aps), ze zmianami w działaniu:
  * **Zmiana profilu** i **Procent profilu** są teraz uwzględniane w **Dynamicznym ISF** jako siła dynamicznej wrażliwości
  * Obliczana jest średnia wartość **ISF** z ostatnich 24 godz. i ta wartość jest używana w kalkulatorze bolusa i przy obliczaniu **COB**. Wartość **ISF z profilu** nie jest w ogóle używana (poza wartością zastępczą, gdy brak danych historycznych)
  * Strona dokumentacji Dynamicznego ISF została napisana od nowa. Przeczytaj ważną sekcję [Na co zwrócić uwagę przy włączaniu Dynamicznego ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* [„Zawsze włącz SMB” i „Włącz SMB po węglowodanach”](#Open-APS-features-enable-smb-always) dla użytkowników FreeStyle Libre 2 i Libre 3
  * Uwaga: wymaga najnowszej wersji xDrip+ lub Juggluco.
* Nowe wyzwalacze **Automatyzacji**
* Automatyczny eksport ustawień

### Jak zaktualizować

* Przed aktualizacją:
  * **<span style="color:red">Ta wersja wymaga Google Android 11.0 lub nowszego</span>**. Przed aktualizacją sprawdź wersję Androida w telefonie.
  * Jeśli używasz „starego” sterownika Combo z urządzeniem ruffy, przed aktualizacją przejdź na [natywny sterownik Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
  * Podczas aktualizacji stracisz [dodatkowe wykresy](#AapsScreens-section-g-additional-graphs) na ekranie głównym: w razie potrzeby zapisz ręcznie swoją obecną konfigurację, aby odtworzyć wykresy po aktualizacji.
  * [Problemy z połączeniem Bluetooth, które niektóre osoby mają na Androidzie 15](../Getting-Started/Phones.md), **NIE** są rozwiązane w tej wersji (to problem Androida, a nie **AAPS**). Poprawka jest dostępna w wersji 3.3.1.2.
  * Przycisk BYODA na ekranie głównym nie jest już dostępny z powodu ograniczeń Androida. Naprawiono to w wersji 3.3.1.2.
* Instrukcja aktualizacji: postępuj zgodnie z instrukcją [Aktualizacja do nowej wersji](../Maintenance/UpdateToNewVersion.md).
  * Do zbudowania tej wersji potrzebujesz [Android Studio w wersji „Ladybug”](#Building-APK-recommended-specification-of-computer-for-building-apk-file) lub nowszej. Jeśli masz już zainstalowaną starszą wersję Android Studio, może być konieczne <span style="color:red">ustawienie wersji JVM na 21</span>. Zobacz [Rozwiązywanie problemów z Android Studio > Incompatible Gradle JVM](#incompatible-gradle-jvm).
  * Wskazówka – jeśli nie chcesz stracić historii **AAPS**, ZAWSZE wykonuj AKTUALIZACJĘ, a NIE ODINSTALOWANIE/INSTALACJĘ. Dla bezpieczeństwa zrób kopię zapasową obecnych ustawień **AAPS** i starego pliku APK, aby w razie problemów wrócić do starej wersji.
* Po aktualizacji:
  * Ustaw nowe [ustawienie „Katalog AAPS”](#preferences-maintenance-logdirectory) na karcie Konserwacja.

### Szczegółowe zmiany

#### Systemy CGM i pompy

* [„Zawsze włącz SMB” i „Włącz SMB po węglowodanach”](#Open-APS-features-enable-smb-always) dla użytkowników FreeStyle Libre 2 i Libre 3 @MilosKozak
* Ulepszenia [sterownika Medtrum](../CompatiblePumps/MedtrumNano.md) @jbr77rr
  * Ulepszenia komunikacji, w tym nowe ustawienie omijające problemy na niektórych smartfonach
  * Pokazywanie poziomu zbiornika na początku aktywacji
  * Naprawiono błąd, przez który aktywacja wracała do początku i nie dało się jej zakończyć
  * Informacja o stanie synchronizacji i inne wyjaśnienia
* Nowa obsługiwana pompa: [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* Nowe obsługiwane systemy CGM: [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer i [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Sterownik Insight przepisany na Kotlin @Philoul
* Usunięto stary sterownik Combo zależny od ruffy

#### Zmiany w interfejsie

* [Tryb uproszczony](#preferences-simple-mode) jest domyślnie włączony w nowej instalacji @MilosKozak
* Nowe opcje [Szybkiego kalkulatora](#Preferences-quick-wizard) @radicalb
  * Szybki kalkulator używa teraz tej samej logiki obliczania i wyświetlania bolusa co kalkulator. W Szybkim kalkulatorze możesz teraz użyć pola „czas węglowodanów”, aby podać bolus przed posiłkiem.
* Nowe [menu skali wykresu](#aaps-screens-main-graph); ulepszenia interfejsu [menu dodatkowych wykresów](#AapsScreens-activate-optional-information) @Philoul
* [Ulepszony układ Konfiguracji (Config Builder)](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Sekcje są teraz domyślnie zwinięte. Użyj strzałki, aby je rozwinąć.
* Zmienna wrażliwość widoczna w AAPSClient
* Ulepszenia interfejsu Kalkulatora bolusa @kenzo44
* Naprawiono wyświetlanie tekstu na kartach pomp w jasnym motywie @jbr77rr

#### Inne funkcje

* [Automatyczny eksport ustawień](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* Nowy [wyzwalacz automatyzacji](#automations-automation-triggers) @vanelsberg
  * Aktywacja poda (tylko pompy typu patch)
* Nowe [wyzwalacze automatyzacji](#automations-automation-triggers) @jbr77rr
  * Wiek wkłucia, Wiek insuliny, Wiek baterii, Wiek sensora, Poziom zbiornika, Poziom baterii pompy
* Możliwość wpisania ujemnych węglowodanów @MilosKozak
* Nowy parametr [„Katalog AAPS”](#preferences-maintenance-settings) do wyboru katalogu zapisu innego niż domyślny.
* Możliwość [zapisu insuliny, gdy pompa jest wstrzymana](#aaps-screens-buttons-insulin) @jbr77rr
* Zaktualizowane [Zadanie 2](#objectives-objective2) @MilosKozak
  * Sprawdzenie, czy hasło główne jest ustawione i znane
* Losowe węglowodany w trybie testowym @MilosKozak
* Naprawiono błąd w obliczaniu TDD @MilosKozak
* Polecenia SMS: możliwość [**niewysyłania** SMS przy zmianie profilu](#sms-commands-too-many-messages) pochodzącej z NS @MilosKozak

#### Smartwatche

* ulepszenia aplikacji na zegarek i tarcz zegarka @Philoul @MilosKozak @olorinmaia
* Kafelki na zegarku z akcji automatyzacji @Philoul
* Połączone tarcze zegarka z AAPS, AAPSClient i AAPSClient2 do monitorowania większej liczby pacjentów @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

#### Zmiany techniczne

* [zmiana lokalizacji plików logów](#Accessing-logfiles-accessing-logfiles)
* nowa wewnętrzna struktura modułów @MilosKozak
* oddzielenie warstwy zapisu danych od głównego kodu @MilosKozak
* pliki budowania przepisane na kts @MilosKozak
* algorytmy przepisane na Kotlin dla lepszej wydajności @MilosKozak
* mnóstwo nowych testów jednostkowych @MilosKozak i inni
* więcej kodu przeniesionego na Kotlin @MilosKozak
* nowe zarządzanie ustawieniami, xml \-\> kotlin @MilosKozak
* nowa konfiguracja CI, uruchamianie CI na własnych serwerach @MilosKozak
* biblioteki zaktualizowane do najnowszych wersji, toml @MilosKozak
* migracja do Kotlin 2.0, Java 21 @MilosKozak

(version3204)=

## [Wersja 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Data wydania: 27.02.2024

To ostatnia wersja obsługująca Androida 10. Jeśli nie możesz zaktualizować do Androida 11, [zaktualizuj AAPS do wersji 3.2.0.4](#update-aaps-3204).

### Zmiany

- Obsługa G7 przez xDrip
- Poprawki Medtrum
- Poprawka ikony automatyzacji
- Poprawka zaliczania zadania 1

(version3200)=

## Wersja 3.2.0.0 dedykowana @Philoul

Data wydania: 23.10.2023

### Ważne wskazówki

- Wymagany jest NS 15
- Gdy we wtyczce NS v3 używasz websocketów, leczenie wpisane przez interfejs NS (przycisk plus) i przez inne aplikacje używające API v1 nie jest wysyłane do AAPS. Zostanie to naprawione w przyszłej wersji NS. Zawsze używaj tego samego klienta (v1 lub v3) w AAPS i AAPSClient, dopóki NS wewnętrznie w pełni nie przejdzie na v3. To samo dotyczy samego AAPS i AAPSClient.
- Websockety we wtyczce v3 działają podobnie jak we wtyczce v1. Bez włączonych websocketów AAPS regularnie planuje pobieranie danych z NS, co powinno zmniejszyć zużycie energii, bo NS nie jest stale połączony. Z drugiej strony oznacza to opóźnienia w wymianie danych. Zanim zaczniesz jej używać, przeczytaj [tutaj](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) ważne uwagi od zespołu deweloperów!
- Jeśli używasz xDrip jako źródła CGM, po aktualizacji musisz wybrać je ponownie z powodu zmian wewnętrznych
- Tidepool może zastąpić NS przy zaliczaniu pierwszego zadania
- Jeśli wysyłasz dane do xDrip+, musisz skonfigurować wtyczkę synchronizacji xDrip. Aby odbierać BG z AAPS w xDrip, jako źródło musisz wybrać „xDrip+ Sync Follower”
- Jeśli chcesz przejść na sterownik ComboV2, musisz odinstalować Ruffy i ponownie sparować pompę z AAPS
- Aby używać wtyczki DynISF, musisz rozpocząć Zadanie 11 (wszystkie wcześniejsze zadania muszą być ukończone, aby można było rozpocząć Zadanie 11)


### Zmiany

- Sterownik pompy EOPatch2 / GlucomenDay @jungsomyeonggithub @MilosKozak
- Sterownik pompy ComboV2 (nie wymaga Ruffy) @dv1
- Sterownik Medtrum Nano @jbr7rr
- Obsługa koreańskiej DanaI @MilosKozak
- Obsługa CGM Glunovo @christinadamianou
- Obsługa G7 @MilosKozak @rICTx-T1D @khskekec
- Wtyczka NSClient v3 @MilosKozak
- Obsługa Tidepool @MilosKozak
- Wtyczka wygładzania @MilosKozak, @justmara, wygładzanie wykładnicze @nichi (Tsunami), wygładzanie uśredniające @jbr7rr
- Wtyczka DynamicISF @Chris Wilson, @tim2000s
- Tarcza zegarka Garmin i obsługa tętna @buessow
- Nowe logo @thiagomsoares
- Nowa tarcza zegarka @Philoul
- naprawiono mnóstwo problemów z wersji 3.1
- możliwość dodawania notatek w większej liczbie miejsc @Sergey Zorchenko
- Poprawki interfejsu @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- nowe polecenia SMS LOOP LGS/CLOSED @pzadroga
- tłumaczenia aplikacji na zegarek @Andries-Smit
- komunikacja z xDrip przeniesiona do osobnego modułu @MilosKozak
- zmiany wewnętrzne: zaktualizowane wersje bibliotek, migracja do rx3, nowa struktura modułów @MilosKozak
- poprawki sterownika Diaconn @miyeongkim
- więcej opcji konserwacji bazy danych @MilosKozak
- AAPSClient pokazuje, czy główny telefon jest podłączony do ładowania @MilosKozak
- Zmiana w Kalkulatorze bolusa. Jeśli CGM nie jest dostępny, procent jest pomijany (czyli używane jest 100%)
- migracja do systemu budowania kts @MilosKozak
- ulepszona integracja CI @MilosKozak @buessow
- porządki w testach @ryanhaining @MilosKozak
- ponad 110 tys. nowych linii kodu, 240 tys. zmienionych linii, 6884 zmienione pliki

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)=
### Ważne uwagi o używaniu API v3 i v1 dla Nightscout z AAPS

v1 to stary protokół wymiany danych między stroną NS a serwerem NS. Ma wiele ograniczeń
- v1 wysyła tylko 2 dni danych
- v1 wysyła dane z całych 2 dni przy każdym ponownym połączeniu
- using websockets is mandatory = permanent connection, more battery consumption
- przy częstych rozłączeniach z NS połączenie jest wstrzymywane na 15 minut, aby nie zużywać dużo danych

v3 to nowy protokół. Bezpieczniejszy i wydajniejszy
- dzięki tokenom możesz dokładniej określić prawa dostępu
- protokół jest wydajniejszy po obu stronach (AAPS i NS)
- Może odczytać z NS dane z maksymalnie 3 miesięcy
- you can choose to use or to not use websockets on every device (using means faster updates, not using means lower power consumption, but slower updates ie. minutes)
- NSClient nie jest wstrzymywany przy rozłączeniach

OGRANICZENIA
- Z AAPS 3.2 musisz używać NS 15
- v3 nie widzi zmian zrobionych protokołem v1 (prawdopodobnie zostanie to rozwiązane w przyszłej wersji NS)
- in the opposite direction, because of the old ineffective method of tracking changes, v1 sees changes done by v3
- pamiętaj, że NS wewnętrznie nadal używa v1, więc jeśli używasz v3, nie możesz wpisywać danych przez stronę NS. You must use AAPSClient or SMS if you want to enter data remotely

ZALECANE USTAWIENIA
- z powodu wszystkich powyższych punktów wybierz tylko jedną metodę i używaj jej na wszystkich urządzeniach (pamiętaj, że w chwili pisania tego tekstu wszystkie inne uploadery używają v1). Jeśli zdecydujesz się na v3, wybierz v3 w AAPS i we wszystkich AAPSClient
- v3 jest zalecany, bo jest wydajniejszy
- czy używać websocketów z v3, zależy od Twoich preferencji
- ZDECYDOWANIE zaleca się, aby AAPS zbierał wszystkie dane i wysyłał je do NS jako jedyny uploader. Wszystkie inne urządzenia/aplikacje powinny tylko odczytywać dane z NS. Dzięki temu unikniesz konfliktów i błędów synchronizacji. Dotyczy to także przesyłania danych BG do NS przez Dexcom Share connector itp.

(version3100)=

## Wersja 3.1.0

Data wydania: 19.07.2022

[Informacje o wersji](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

## Wersja 3.0.0

Data wydania: 31.01.2022

[Informacje o wersji](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

## Wersja 2.8.2

Data wydania: 23.01.2021

[Informacje o wersji](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

(version-2811)= (important-hints-2-8-1-1)=

## Wersja 2.8.1.1

Data wydania: 12.01.2021

[Informacje o wersji](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

(Releasenotes-version-2-8-0)=

## Wersja 2.8.0

Data wydania: 01.01.2021

[Informacje o wersji](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

(Releasenotes-version-2-7-0)=

## Wersja 2.7.0

Data wydania: 24.09.2020

[Informacje o wersji](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

(Releasenotes-version-2-6-1-4)=

## Wersja 2.6.1.4

Data wydania: 04.05.2020

[Informacje o wersji](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

## Wersja 2.6.1.3

Data wydania: 03.05.2020

[Informacje o wersji](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

## Wersja 2.6.1.2

Data wydania: 19.04.2020

[Informacje o wersji](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

## Wersja 2.6.1.1

Data wydania: 06.04.2020

[Informacje o wersji](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

## Wersja 2.6.1

Data wydania: 21.03.2020

[Informacje o wersji](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

(Releasenotes-version-2-6-0)=

## Wersja 2.6.0

Data wydania: 29.02.2020

[Informacje o wersji](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

## Wersja 2.5.1

Data wydania: 31.10.2019

[Informacje o wersji](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

(Releasenotes-version-2-5-0)=

## Wersja 2.5.0

Data wydania: 26.10.2019

[Informacje o wersji](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

## Wersja 2.3

Data wydania: 25.04.2019

[Informacje o wersji](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

## Wersja 2.2.2

Data wydania: 07.04.2019

[Informacje o wersji](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

## Wersja 2.2

Data wydania: 29.03.2019

[Informacje o wersji](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

## Wersja 2.1

Data wydania: 03.03.2019

[Informacje o wersji](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

## Wersja 2.0

Data wydania: 03.11.2018

[Informacje o wersji](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

## Wersja 1.0

```{admonition} First version of **AAPS**
:class: note

Pierwsza wersja testowa powstała w 2015 roku, a pierwsze wydanie w 2016 roku.

Dokładna chronologia tych wydań nie jest obecnie dostępna, ale to pytanie padało już kilka razy, więc zapisujemy to tutaj.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
