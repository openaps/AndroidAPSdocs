# Pompy Medtronic

Sterownik nie działa z żadnymi nowszymi modelami, w tym ze wszystkimi z nazwą kończącą się na G (530G, seria 600 [630G, 640G, 670G], seria 700 [770G, 780G] itd.).

Poniższe kombinacje modeli i oprogramowania są kompatybilne:

- 512/712 (dowolna wersja oprogramowania)
- 515/715 (dowolna wersja oprogramowania)
- 522/722 (dowolna wersja oprogramowania)
- 523/723 (oprogramowanie 2.4A lub wcześniejsze)
- 554/754 wersja EU (oprogramowanie 2.6A lub wcześniejsze)
- 554/754 wersja dla Kanady (oprogramowanie 2.7A lub wcześniejsze)

Możesz dowiedzieć się, jak sprawdzić wersję oprogramowania pompy w [dokumentacji OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) lub [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

    {contents} Spis treści
    :depth: 1
    :local: true

## Funkcje pompy w AAPS

* Wymaga urządzenia kompatybilnego z RileyLink do komunikacji z **AAPS**.
* Automatyczna obsługa czasu letniego i stref czasowych.

## Wymagania sprzętowe i programowe

- **Smartfon: **Sterownik Medtronic powinien działać na każdym smartfonie z Androidem, który wspiera połączenia Bluetooth. **WAŻNE: Implementacja Bluetooth wśród producentów smartfonów może się różnić, więc każdy model telefonu może zachowywać się inaczej. Przykładowo, niektóre smartfony inaczej obsługują włączanie/wyłączanie Bluetooth. Może to wpływać na działanie, gdy AAPS musi ponownie połączyć się z twoim urządzeniem typu RileyLink.**
- **Urządzenie kompatybilne z RileyLink:** Telefony z Androidem nie mogą komunikować się z pompami Medtronic bez osobnego urządzenia, które obsługuje komunikację. To urządzenie połączy się ze smartfonem przez Bluetooth i z pompą za pomocą kompatybilnego połączenia radiowego. Pierwsze takie urządzenie nazywało się RileyLink, ale obecnie dostępne są inne opcje, które mogą zaoferować dodatkowe funkcje.
    
    - RileyLink dostępny na [getrileylink.org](https://getrileylink.org/product/rileylink916)
    - OrangeLink dostępny na [getrileylink.org](https://getrileylink.org/product/orangelink)
    - EmaLink (kilka różnych modeli) dostępne na [github.com](https://github.com/sks01/EmaLink)
    - Gnarl (wymaga trochę pracy DIY) – szczegóły na [github.com](https://github.com/ecc1/gnarl)

Porównanie różnych urządzeń kompatybilnych z RileyLink znajdziesz na [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart)

(MedtronicPump-configuration-of-the-pump)=

## Konfiguracja pompy

Poniższe ustawienia powinny zostać skonfigurowane na pompie, aby AAPS mógł zdalnie przesyłać polecenia. Kroki niezbędne do dokonania każdej zmiany na Medtronic 715 są pokazane w nawiasach dla każdego ustawienia. Dokładne kroki mogą różnić się w zależności od typu pompy i/lub wersji oprogramowania.

- **Włącz tryb zdalny na pompie** (na pompie naciśnij Act i przejdź do Utilities -> Remote Options, wybierz On, a na następnym ekranie wybierz Add ID i dodaj dowolne ID, na przykład 111111). Przynajmniej jedno ID musi być na liście zdalnych ID, aby pompa spodziewała się zdalnej komunikacji.
- **Set Max Basal** (On the pump press Act and go to Basal and then select Max Basal Rate) As an example setting this value to four times your maximum standard basal rate would allow a 400% Temporary Basal Rate. Maksymalna wartość dozwolona przez pompę to 34,9 jednostki na godzinę.
- **Set Max Bolus** (On the pump press Act and go to Bolus and then select Max Bolus) This is the largest bolus that the pump will accept. Maksymalna wartość dozwolona przez pompę to 25.
- **Ustaw schemat na Standard**. (na pompie naciśnij Act, przejdź do Basal, a potem Select Patterns) Pompa potrzebuje tylko jednego profilu, bo AAPS będzie zarządzać różnymi profilami na twoim telefonie. Inne schematy nie są potrzebne.
- **Ustaw rodzaj tymczasowej dawki bazowej** (na pompie naciśnij Act, przejdź do Basal, a potem Temp Basal Type). Wybierz Absolute (nie Percent).

## Konfiguracja telefonu/AAPS dla pompy Medtronic

- **Nie paruj urządzenia kompatybilnego z RileyLink przez użycie menu Bluetooth na twoim smartfonie.** Parowanie przez menu Bluetooth na twoim smartfonie uniemożliwi AAPS wykrycie twojego urządzenia kompatybilnego z RileyLink po wykonaniu poniższych instrukcji.
- Wyłącz automatyczne obracanie ekranu na telefonie. Na niektórych urządzeniach automatyczne obracanie ekranu powoduje restart sesji Bluetooth, co może sprawić problemy z twoją pompą Medtronic. 
- Są dwa sposoby na skonfigurowanie twojej pompy Medtronic w AAPS:

1. Użycie kreatora konfiguracji przy nowej instalacji
2. W **Konfiguracja** > **Pompa**, przez wybranie **Medtronic**
    
    ![Konfiguracja > Pompa z wtyczką Medtronic](../images/v4/Configuration/configuration_pump_list_3.png)
    
    Gdy jest wybrana, karta **Medtronic** pokazuje dwa przyciski: **Ustawienia** i **Otwórz wtyczkę**:
    
    ![Wtyczka Medtronic wybrana w Konfiguracja > Pompa](../images/v4/Pumps/medtronic_enabled.png)
    
    **Ustawienia** otwiera ustawienia sterownika Medtronic:
    
    ![Ustawienia sterownika Medtronic](../images/v4/Pumps/medtronic_settings.png)
    
    **Otwórz wtyczkę** (lub **Zarządzaj** > **Pompa**) otwiera ekran pompy Medtronic. Zanim pompa zostanie sparowana, ekran wygląda tak:
    
    ![Ekran pompy Medtronic przed sparowaniem](../images/v4/Pumps/medtronic_pump_screen.png)

Podczas konfiguracji pompy Medtronic w kreatorze konfiguracji może się zdarzyć, że nie dokończysz konfiguracji z powodu problemów z Bluetooth (np. nie uda się połączyć z pompą). Jeśli tak się stanie, wybierz wirtualną pompę, aby dokończyć konfigurację, a potem szukaj przyczyny problemu, korzystając z opcji 2.

Podczas konfiguracji AAPS do pracy z pompą Medtronic musisz ustawić następujące pozycje w **Ustawienia** (zobacz zdjęcie ustawień powyżej):

- **Numer seryjny pompy**: Wyświetlany na odwrocie pompy i zaczyna się od SN. Wpisz tylko 6 pokazanych cyfr, bez liter (np. 123456).
- **Typ pompy**: Model pompy, której używasz (np. 522). 
- **Częstotliwość pompy**: Są dwie możliwości, w zależności od tego, gdzie twoja pompa była pierwotnie sprzedawana. Please check the [FAQ](#MedtronicPump-faq) if you are unsure which option to select: 
    - for US & Canada, frequency used is 916 MHz
    - for Worldwide, frequency used is 868 MHz
- **Max dawka bazowa w pompie (U/h)**: To ustawienie musi zgadzać się z ustawieniem w pompie (zobacz konfigurację pompy powyżej). Tę wartość też trzeba wybrać ostrożnie, bo określa, ile insuliny AAPS może podać przez dawkę bazową. W praktyce ustawia to maksymalną dawkę bazy tymczasowej. Przykład: ustawienie tej wartości na cztery razy więcej niż twoja największa standardowa dawka bazowa pozwoli na bazę tymczasową 400%. Maksymalna wartość dozwolona przez pompę to 34,9 jednostki na godzinę.
- **Max bolus w pompie (U)** (w ciągu godziny): To ustawienie musi zgadzać się z ustawieniem na pompie (zobacz konfigurację pompy powyżej). To ustawienie powinno być starannie wybrane, ponieważ będzie ono określać jak duży bolus może dostarczyć AAPS.
- **Opóźnienie przed rozpoczęciem bolusa(s)**: Liczba sekund od zlecenia bolusa do chwili, gdy polecenie zostanie naprawdę wysłane do pompy. Ten okres pozwala użytkownikowi na anulowanie bolusa w przypadku gdy polecenie zostało wysłane przez pomyłkę. Nie można anulować przez AAPS bolusa, który już się zaczął. Jedyny sposób, aby anulować bolus, który już się zaczął, to ręcznie zawiesić pompę, a potem ją wznowić.
- **Medtronic Encoding**: Determines where the Medtronic encoding is carried out (hardware or software). Zalecane jest kodowanie sprzętowe (czyli wykonywane przez urządzenie kompatybilne z RileyLink), bo wtedy wysyłanych jest mniej danych. Wybranie kodowania programowego (czyli wykonywanego przez AAPS) może pomóc, gdy połączenie często się zrywa. To ustawienie zostanie pominięte, jeśli urządzenie RileyLink ma oprogramowanie w wersji 0.x.
- **Typ baterii (podgląd mocy)**: Aby prawidłowo określić pozostały poziom baterii, wybierz typ używanej baterii AAA. Gdy wybrana jest opcja inna niż widok prosty, AAPS wyświetli pozostały oszacowany poziom baterii i napięcie. Dostępne są poniższe opcje:
    
    - Nie wybrany (widok prosty)
    - Alkaliczne (widok rozszerzony)
    - Litowe (widok rozszerzony)
    - NiZn (widok rozszerzony)
    - NiMH (widok rozszerzony)
- **Użyj skanowania**: Włącza skanowanie Bluetooth przed połączeniem z urządzeniem kompatybilnym z RileyLink. Powinno to poprawić jakość połączenia z urządzeniem.

- **Pokaż poziom baterii zgłaszany przez OrangeLink/EmaLink/DiaLink**: Ta funkcja działa tylko z nowszymi urządzeniami, takimi jak EmaLink lub OrangeLink. Wartość jest pokazywana jako **Bateria RileyLink** na ekranie pompy Medtronic.
- **Ustawiaj neutralne bazy tymczasowe**: Domyślnie pompy Medtronic wydają sygnał dźwiękowy o pełnej godzinie, gdy działa baza tymczasowa. Włączenie tej opcji może zmniejszyć liczbę sygnałów dźwiękowych: baza tymczasowa jest przerywana przy zmianie godziny, aby nie było sygnału.

(pairing-your-rileylink-compatible-device)=

### Parowanie urządzenia kompatybilnego z RileyLink

Urządzenie kompatybilne z RileyLink parujesz z ekranu pompy Medtronic, a nie z menu Bluetooth w telefonie:

- Otwórz ekran pompy (**Zarządzaj** > **Pompa** lub **Otwórz wtyczkę** na karcie Medtronic w **Konfiguracja** > **Pompa**).
- Dotknij **Sparuj RileyLink**. **AAPS** szuka urządzeń kompatybilnych z RileyLink w pobliżu.
- Dotknij swojego urządzenia na liście. Gdy pojawi się **Pomyślnie sparowano RileyLink**, dotknij **OK**.

## Ekran pompy Medtronic

Aby otworzyć ekran pompy Medtronic, przejdź do **Zarządzaj** > **Pompa**. Ekran pompy pokazuje aktualny stan pompy oraz kilka akcji dla pomp Medtronic (zobacz zdjęcie ekranu pompy powyżej).

- **Stan RileyLink**: Obecny stan połączenia pomiędzy twoim telefonem a urządzeniem kompatybilnym z RileyLink. Tu zawsze powinien być stan „Połączono”. Każdy inny stan może wymagać interwencji użytkownika. 
- **Bateria RileyLink**: Obecny poziom baterii twojego urządzenia EmaLink lub OrangeLink. Widoczne tylko, gdy w ustawieniach Medtronic jest włączone **Pokaż poziom baterii zgłaszany przez OrangeLink/EmaLink/DiaLink**.
- **Stan pompy**: Obecny stan połączenia z pompą. Z racji, że pompa nie będzie cały czas połączona, będzie przeważnie pokazywać ikonkę snu. Jest wiele innych możliwych stanów, na przykład „Wybudza się”, gdy AAPS próbuje wysłać polecenie, albo inne polecenia pompy, takie jak „Pobierz czas”, „Ustawienie TBR” itd.
- **Bateria**: Pokazuje stan baterii na podstawie wartości wybranej w **Typ baterii (podgląd mocy)** w ustawieniach Medtronic.
- **Ostatnie połączenie**: Jak dawno temu było ostatnie udane połączenie z pompą.
- **Ostatni bolus**: Jak dawno temu został podany ostatni udany bolus.
- **Podstawowa dawka bazowa**: Dawka bazowa, która działa w pompie o tej godzinie według aktywnego profilu.
- **Baza tymczasowa**: Obecnie podawana baza tymczasowa, która może wynosić 0 jednostek na godzinę.
- **Zbiornik**: Ile insuliny pozostało w zbiorniku (aktualizowane przynajmniej co godzinę).
- **Błędy**: Opis błędu, jeżeli jakiś zaistniał (pokazuje głównie błędy w konfiguracji).

Na dole ekranu są te przyciski:

- **Odśwież** służy do odświeżania obecnego stanu pompy. Używaj tego tylko wtedy, gdy połączenie było utracone przez dłuższy czas, ponieważ wymaga to pełnego odświeżenia danych (pobranie historii, pobranie/ustawienie czasu, pobranie profilu, stanu baterii itd.).
- **Sparuj RileyLink**: Wyszukuje i paruje urządzenie kompatybilne z RileyLink (zobacz [powyżej](#pairing-your-rileylink-compatible-device)).
- **Historia pompy**: Pokazuje historię pompy (zobacz [poniżej](#MedtronicPump-pump-history)).
- **Statystyki RL**: Pokazuje Statystyki RL (zobacz [poniżej](#MedtronicPump-rl-status-rileylink-status)).
- **Wzbudź i dostrój** i **Resetuj RileyLink**: Zobacz [Akcje](#medtronic-actions) poniżej.
- **Wyczyść blok bolusa**: Widoczny tylko przez krótki czas po bolusie, gdy **AAPS** czeka, aż pompa skończy go podawać. Dotknięcie go kończy to czekanie.

(MedtronicPump-pump-history)=

## Historia pompy

![Ekran historii pompy z przyciskami filtrów](../images/Medtronic03.png)

Historia pompy jest pobierana co 5 minut i zapisywana lokalnie. Przechowywane są tylko ostatnie 24 godziny historii. Pozwala to wygodnie sprawdzić działanie pompy, gdy jest to potrzebne. Zapisywane są tylko pozycje ważne dla AAPS, bez funkcji konfiguracji, które nie mają znaczenia.

Dotknij **Historia pompy** na ekranie pompy, aby ją otworzyć. Domyślnie wybrane jest **Wszystko**. Dotknij jednego z przycisków filtrów u góry (na przykład **Bolusy**, **Dawki Bazowe** lub **Alarmy**), aby pokazać tylko jeden rodzaj wpisów.

(MedtronicPump-rl-status-rileylink-status)=

## Stan RL (stan RileyLink)

![Stan RileyLink – Ustawienia](../images/Medtronic04.png) ![Stan RileyLink – Historia](../images/Medtronic05.png)

Okno stanu RL ma dwie zakładki:

- **Ustawienia**: Pokazuje ustawienia dotyczące urządzenia kompatybilnego z RileyLink: skonfigurowany adres, połączone urządzenie, status połączenia, błędy połączenia i wersje oprogramowania RileyLink. Typ urządzenia to zawsze Pompa Medtronic, Model to model twojej pompy, Numer seryjny to skonfigurowany numer seryjny, Częstotliwość pompy pokazuje używaną częstotliwość, a Ostatnio używana częstotliwość to ostatnia użyta częstotliwość.
- **Historia**: Pokazuje historię komunikacji, wpisy z RileyLink pokazują zmiany stanu RileyLink, wpisy z Medtronic pokazują polecenia wysłane do pompy.

(medtronic-actions)=

## Akcje

Gdy używany jest sterownik Medtronic, na ekranie pompy (**Zarządzaj** > **Pompa**) są dostępne dwie dodatkowe akcje:

- **Wzbudź i dostrój** – jeśli AAPS przez dłuższy czas nie połączył się z pompą (powinien łączyć się co 5 minut), możesz wymusić dostrajanie. Spowoduje to próbę połączenia z pompą, poprzez przeszukanie wszystkich możliwych częstotliwości radiowych używanych przez twoją pompę. Jeśli połączenie się uda, ta częstotliwość zostanie ustawiona jako domyślna. Gdy dostrajanie trwa, pokazuje to stan RileyLink na ekranie pompy. Jeśli dostrajanie się nie uda (na przykład dlatego, że pompa była poza zasięgiem), **AAPS** sam próbuje ponownie mniej więcej co 10 minut.
- **Resetuj RileyLink** – jeśli zresetujesz urządzenie kompatybilne z RileyLink, może być potrzebna ta akcja, aby urządzenie zostało ponownie skonfigurowane (ustawienie częstotliwości, typu częstotliwości i kodowania).

## Ważne uwagi

### Wymagana szczególna uwaga przy konfiguracji NS

AAPS używa numeru seryjnego do synchronizacji i ten numer jest widoczny w NS. Ze względu na to, że znajomość numeru seryjnego starych pomp Medtronic może być użyta do zdalnego sterowania pompą, zwróć szczególną uwagę na zabezpieczenie strony NS przed wyciekiem numeru seryjnego twojej pompy. Zobacz https://nightscout.github.io/nightscout/security/

### Użytkownicy OpenAPS

Użytkownicy OpenAPS powinni zwrócić uwagę, że AAPS z pompami Medtronic używa kompletnie innego podejścia niż OpenAPS. W AAPS z pompą komunikujesz się głównie przez telefon. In normal use cases it is likely that the only time it is required to use the pump menu is when changing reservoirs. Znacznie różni się to od używania OpenAPS, gdzie przynajmniej część bolusów jest zazwyczaj dostarczana za pomocą przycisków szybkiego bolusu. W przypadku gdy pompa jest użyta do ręcznego podania bolusa, mogą wystąpić problemy, gdy AAPS próbuje dostarczyć bolus w tym samym czasie. Istnieją zabezpieczenia, które próbują zapobiegać takim problemom, ale mimo to należy tego w miarę możliwości unikać.

### Logi

Jeśli musisz szukać przyczyny problemów z pompą Medtronic, wybierz ikonę menu w lewym górnym rogu ekranu, a potem Konserwacja i Ustawienia logowania. W celu rozwiązania jakichkolwiek problemów z pompą Medtronic zaznacz Pump, PumpComm i PumpBTComm.

### Medtronic CGM

Medtronic CGM NIE JEST obecnie wspierany.

### Ręczne używanie pompy

Unikaj ręcznego podawania bolusów i ustawiania baz tymczasowych na pompie. Wszystkie takie polecenia powinny być wysyłane przez AAPS. W przypadku gdy używane są ręczne polecenia, musi być zachowane co najmniej 3-minutowe opóźnienie pomiędzy nimi w celu zredukowania ryzyka wystąpienia problemów.

### Zmiany stref czasowych i czas letni lub podróżowanie z pompą Medtronic i AAPS

AAPS automatycznie wykryje zmianę strefy czasowej i zaktualizuje czas pompy, gdy twój telefon zmieni czas.

Podróż na wschód oznacza, że dodajesz godziny do aktualnego czasu (np. z GMT+0 na GMT+2), co nie spowoduje problemów, bo czas się nie nakłada (np. ta sama godzina nie wystąpi dwa razy). Podróż na zachód może jednak powodować problemy, bo w praktyce cofasz się w czasie, co może dać błędne dane IOB.

Programiści znają problemy przy podróży na zachód i trwają prace nad możliwym rozwiązaniem. Zobacz szczegóły tutaj https://github.com/andyrozman/RileyLinkAAPS/issues/145. Na chwilę obecną należy pamiętać, że problem może wystąpić i uważnie monitorować sytuację podczas zmiany strefy czasowej.

### Czy GNARL jest w pełni kompatybilnym urządzeniem typu RileyLink?

Kod GNARL w pełni wspiera wszystkie funkcje używane przez sterownik Medtronic w AAPS, co oznacza, że jest w pełni kompatybilny. Pamiętaj, że wymaga to dodatkowej pracy: musisz zdobyć kompatybilny sprzęt, a potem wgrać na niego kod GNARL.

**Uwaga od autora:** Należy pamiętać, że oprogramowanie GNARL jest nadal eksperymentalne i przetestowane w ograniczonym stopniu. Nie powinno być uważane za tak bezpieczne do użycia jak RileyLink.

(MedtronicPump-faq)=

## FAQ

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### What to do if I lose connection to RileyLink and/or pump?

Jest kilka możliwości rozwiązania problemów z łącznością.

- Dotknij **Wzbudź i dostrój** na ekranie pompy (**Zarządzaj** > **Pompa**), jak opisano powyżej.
- Wyłącz Bluetooth na telefonie, odczekaj 10 sekund i włącz go ponownie. Zmusi to urządzenie RileyLink do ponownego połączenia z telefonem.
- Zresetuj urządzenie RileyLink. Potem musisz dotknąć **Resetuj RileyLink** na ekranie pompy (**Zarządzaj** > **Pompa**).
- Inni użytkownicy zauważyli, że poniższe kroki pomagają przywrócić połączenie, gdy inne metody nie działają: 
    1. Zrestartuj telefon
    2. *Podczas* gdy telefon się restartuje, zrestartuj urządzenie RileyLink
    3. Otwórz AAPS i poczekaj, aż połączenie zostanie przywrócone

### Jak ustalić, na jakiej częstotliwości pracuje moja pompa

![Model pompy](../images/Medtronic06.png)

Na odwrocie pompy znajdziesz fragment opisujący numer twojego modelu wraz ze specjalnym 3-literowym kodem. Pierwsze dwie litery oznaczają częstotliwość, natomiast ostatnia oznacza kolor pompy. Możliwe wartości opisujące częstotliwość:

- NA – North America, Ameryka Północna (przy wyborze częstotliwości musisz wybrać „USA i Kanada (916 MHz)”)
- CA – Canada, Kanada (przy wyborze częstotliwości musisz wybrać „USA i Kanada (916 MHz)”)
- WW - Worldwide (in frequency selection you need to select "Worldwide (868 MHz)")

(MedtronicPump-pump-unreachable)=

### Jak naprawić błąd „pump unreachable” (pompa nieosiągalna)

Niektóre pompy Medtronic po aktualizacji **AAPS** zgłaszają błąd „pump unreachable” (pompa nieosiągalna). Aby to naprawić, zmień typ kodowania:

1. Przejdź do **Konfiguracja** > **Pompa** i dotknij **Ustawienia** na karcie **Medtronic**.
2. Set **Medtronic Encoding** to **Hardware 4b6b Encoding**.

## Gdzie uzyskać pomoc

Rozwój sterownika Medtronic prowadzi społeczność na zasadzie **wolontariatu**. Zanim poprosisz o pomoc:

1. **Przeczytaj** odpowiednią część tej dokumentacji, aby sprawdzić, jak funkcja ma działać.
2. **Zapytaj** na kanale *#AAPS* na [Discordzie](https://discord.gg/4fQUWHZ4Mw) lub na jednym z innych [kanałów społeczności](../GettingHelp/WhereCanIGetHelp.md).
3. **Zgłoś błąd**: przeszukaj [istniejące zgłoszenia](https://github.com/nightscout/AndroidAPS/issues); jeśli Twojego problemu tam nie ma, otwórz [nowe zgłoszenie](https://github.com/nightscout/AndroidAPS/issues) i dołącz [pliki logów](../GettingHelp/AccessingLogFiles.md).

Prosząc o pomoc, podaj markę i model telefonu, wersję Androida, wersję **AAPS** i prosty opis problemu po angielsku (co się zmieniło, kiedy ostatnio działało).