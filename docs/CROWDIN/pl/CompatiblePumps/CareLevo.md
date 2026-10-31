# CareLevo

CareLevo to pompa typu patch (bez drenu) firmy CareMedi. Każdy patch mieści do 300 U insuliny i można go nosić do 7 dni (168 godzin). Komunikuje się z **AAPS** przez Bluetooth telefonu, bez dodatkowego urządzenia.

```{admonition} New driver
:class: warning
Sterownik CareLevo jest nowy w **AAPS**. Przeczytaj całą tę stronę, zanim aktywujesz pierwszy patch, i miej pod ręką instrukcję obsługi pompy.
```

Najmniejsza dawka, jaką patch może podać, to 0,05 U. Ustaw dawki bazowe w **Profil** na co najmniej 0,05 U/h z krokiem 0,05 U/h, w przeciwnym razie insulina oczekiwana przez **Profil** i insulina podana przez patch będą się trochę różnić. **AAPS** używa dawek bazowych, które patch przyjął.

```{contents} Table of contents
:depth: 1
:local: true
```

## Funkcje pompy w AAPS

* Komunikuje się z **AAPS** przez wbudowany Bluetooth telefonu, bez dodatkowego urządzenia pośredniczącego.
* Bolus z krokiem 0,05 U.
* Dawki bazowe od 0,05 U/h do 15 U/h z krokiem 0,05 U/h, w 30-minutowych odcinkach.
* Bazy tymczasowe ustawiane jako wartość bezwzględna, do 12 godzin.
* Bolus przedłużony do 8 godzin.
* Zmiany czasu letniego/zimowego i strefy czasowej trzeba obsłużyć ręcznie. Patch powiadamia Cię, gdy zmienia się strefa czasowa.

## Konfiguracja pompy

1. Otwórz **menu** (☰) w lewym górnym rogu ekranu głównego **AAPS** i wybierz **Konfiguracja**.
1. Wybierz **Carelevo** w sekcji Pompa.
1. Naciśnij przycisk Wstecz, aby wrócić do ekranu głównego.

![Wtyczka Carelevo wybrana w Konfiguracja > Pompa](../images/v4/Pumps/carelevo_enabled.png)

## Ustawienia

Otwórz ekran pompy przez **Zarządzaj → Pompa** (lub **Konfiguracja → Pompa → Otwórz wtyczkę**).

Otwórz ustawienia CareLevo, naciskając ikonę **Ustawienia** (koło zębate) w prawym górnym rogu. Dostępne są trzy ustawienia:

![Ustawienia sterownika Carelevo](../images/v4/Pumps/carelevo_settings.png)

### Ustawienie powiadomienia o niskim poziomie insuliny

Patch powiadamia Cię, gdy ilość insuliny pozostałej w zbiorniku spadnie do wybranej wartości. Można ją ustawić od 20 U do 50 U z krokiem 5 U. Wartość domyślna to 30 U. Niezależnie od tego ustawienia patch włącza alarm krytyczny i przestaje podawać insulinę, gdy zostanie mniej niż 10 U.

### Ustawienie powiadomienia o czasie użytkowania Patcha

Patch powiadamia Cię, gdy jest noszony przez wybraną liczbę godzin, więc możesz zaplanować wymianę. Można ją ustawić od 24 do 167 godzin. Wartość domyślna to 116 godzin.

### Alarm informacyjny Patcha

Gdy ta opcja jest włączona, patch wydaje sygnał dźwiękowy, gdy bolus, bolus przedłużony lub baza tymczasowa zaczyna się i kończy. Domyślnie opcja jest wyłączona.

## Ekran pompy

![Ekran pompy Carelevo bez aktywnego patcha](../images/v4/Pumps/carelevo_pump_screen.png)

Ekran pompy pokazuje **Status Bluetooth** (Brak aktywnego Patcha, Rozłączony lub Połączono), **Nr seryjny** patcha, jego **Czas aktywacji** i **Wygaśnięcie**, aktualną **Dawka bazowa** i **Tymczasowa dawka bazowa**, **Pozostała insulina** (pozostało / napełniono), **Czas do końca Patcha** oraz **Łączna dostarczona insulina**.

Przyciski zależą od stanu patcha:

* **Aktywuj Patch**: rozpoczyna aktywację nowego patcha, patrz niżej.
* **Przewodnik napełniania insuliną**: pokazuje dwanaście kroków napełniania patcha insuliną.
* **Wstrzymaj infuzję** / **Wznów podawanie**: wstrzymuje i ponownie uruchamia podawanie insuliny, patrz niżej.
* **Odrzuć Patch**: zatrzymuje obecny patch, aby można było aktywować nowy.

## Aktywacja patcha

Zanim zaczniesz, upewnij się, że w **AAPS** jest aktywny **Profil** i że Bluetooth jest włączony. Po włączeniu patch musi zostać aktywowany w ograniczonym czasie; jeśli czas minie, patch włączy alarm **Upłynął czas aplikacji Patcha** i nie będzie można go użyć.

Naciśnij **Aktywuj Patch** na ekranie pompy i wykonuj kolejne kroki. Możesz przerwać w każdej chwili przed wkłuciem igły; wprowadzone dane zostaną odrzucone.

### Wybierz insulinę

Potwierdź insulinę, której używasz. Patch wymaga szybko działającej insuliny U-100.

### Napełnij patch insuliną

Napełnij patch ilością od 50 do 300 U, biorąc pod uwagę, jak długo będziesz go nosić. Naciśnij **Przewodnik napełniania insuliną**, jeśli potrzebujesz instrukcji napełniania. Następnie dotknij ilości napełnienia i wybierz ilość, którą wlałeś; **AAPS** używa jej do pokazywania pozostałej insuliny.

### Połącz patch

1. Wyjmij patch z opakowania (blistra) i zdejmij osłonkę igły.
1. Naciśnij przycisk zasilania patcha dłużej niż jedną sekundę. Po sygnale dźwiękowym dotknij **Szukaj Patcha**.
1. Gdy znaleziony patch jest właściwy, dotknij **Potwierdź**. Jeśli nie jest, dotknij **Skanuj ponownie**.

### Kontrola bezpieczeństwa

Gdy patch zostanie połączony, naciśnij **Kontrola bezpieczeństwa**. Patch sam się testuje i napełnia. Sprawdź, czy na końcu igły pojawiła się kropla insuliny. Jeśli nie widać kropli, naciśnij **Ponów**. Gdy sprawdzanie się zakończy, naciśnij **Dalej**.

### Miejsce i przyklejenie patcha

1. Wybierz miejsce, w którym będziesz nosić patch.
1. Dokładnie oczyść to miejsce gazikiem nasączonym alkoholem.
1. Zdejmij folię ochronną z taśmy klejącej i przyklej patch do skóry tak, aby zaznaczona kropka była skierowana do góry.
1. Naciśnij **Dalej**, gdy patch będzie przyklejony.

### Wkłucie igły

1. Obróć nasadkę zabezpieczającą w kierunku strzałki i zdejmij ją.
1. Wciśnij przycisk aplikatora do końca i przytrzymaj go przez 10 sekund. Gdy igła zostanie wkłuta, rozlegnie się sygnał dźwiękowy.
1. Zdejmij aplikator i naciśnij **Potwierdź wkłucie**.

Jeśli wkłucie się nie uda, **AAPS** poinformuje Cię, ile prób pozostało. Gdy nie zostanie już żadna próba, patch włączy alarm **Błąd wkłucia igły** i trzeba go wymienić.

Podawanie insuliny zaczyna się zaraz po potwierdzeniu wkłucia.

## Komunikaty dotyczące bolusa

Jeśli patch odrzuci bolus, **AAPS** poda Ci przyczynę. Na przykład *Nie można podać bolusa. Dostępny bolus: 2,8 U* oznacza, że patch może teraz podać tylko taką ilość.

Jeśli zatrzymasz bolus, a patch nie potwierdzi zatrzymania, **AAPS** czeka na koniec bolusa i zapisuje ilość podaną przez patch. Jeśli bolus nie został zapisany (np. dlatego, że został zatrzymany w trakcie podawania), **AAPS** dodaje go na podstawie sumy z patcha i prosi Cię o sprawdzenie IOB przed kolejną próbą.

## Wstrzymywanie i wznawianie podawania insuliny

Naciśnij **Wstrzymaj infuzję** na ekranie pompy i wybierz, na jak długo wstrzymać podawanie: od 30 minut do 4 godzin z krokiem 30 minut. Podawanie nie wznowi się samo: po zakończeniu przerwy patch wyświetli ostrzeżenie **Wznów podawanie insuliny**. Naciśnij **Wznów podawanie** na ekranie pompy lub **Wznów podawanie insuliny** w ostrzeżeniu i potwierdź.

## Odrzucanie patcha

Naciśnij **Odrzuć Patch** na ekranie pompy i potwierdź. Podawanie insuliny zostaje zatrzymane i patcha nie można już używać. Zdejmij patch z ciała i aktywuj nowy.

Gdy alarm krytyczny zatrzymał patch, alarm zamiast tego oferuje **Dezaktywuj Patch**. Naciśnięcie tego przycisku odrzuca patch w ten sam sposób.

(carelevo-alarms-and-notifications)=

## Alarmy i powiadomienia

Patch zgłasza zdarzenia na trzech poziomach. Wszystkie są pokazywane jako powiadomienia **AAPS**.

### Alarmy krytyczne

Podawanie insuliny zostało zatrzymane. Działaj od razu:

* **Mało insuliny**: zostało mniej niż 10 U. Dezaktywuj patch i wymień go.
* **Patch wygasł**: patch osiągnął koniec okresu używania. Dezaktywuj patch i wymień go.
* **Niski poziom baterii**: odrzuć patch i wymień go.
* **Temperatura za wysoka/za niska**: przejdź w miejsce o odpowiedniej temperaturze, od 40 ℉ do 99 ℉ (od 5 ℃ do 37 ℃).
* **Auto-wyłączenie**: patch zatrzymał się, ponieważ ostrzeżenie o automatycznym wyłączeniu zostało zignorowane. Naciśnij **Wznów podawanie insuliny**, aby ponownie uruchomić podawanie bazy.
* **Upłynął czas aplikacji Patcha**, **Autodiagnostyka nieudana**, **Błąd Patcha**, **Zatkanie** i **Błąd wkłucia igły**: dezaktywuj patch i wymień go.

### Alerty

Podawanie insuliny trwa, ale coś wymaga Twojej uwagi:

* **Niski poziom insuliny**: ilość w zbiorniku spadła do wartości ustawionej w **Ustawienie powiadomienia o niskim poziomie insuliny**. Przygotuj się do wymiany patcha.
* **Patch wkrótce straci ważność** i **Minął okres eksploatacji Patcha**: wymień patch.
* **Niski poziom baterii**: przygotuj się do wymiany patcha.
* **Wysoka/niska temperatura**: podawanie jest wstrzymane, dopóki temperatura patcha nie wróci do zakresu od 40 ℉ do 99 ℉.
* **Automatyczne wyłączenie**: dotknij **OK**. Jeśli je zignorujesz, ostrzeżenie zmieni się w alarm krytyczny i podawanie zostanie zatrzymane.
* **Niekompletna aktywacja Patcha**: dotknij **OK**, aby dokończyć aktywację.
* **Wznów podawanie insuliny**: ustawiona przerwa się skończyła. Dotknij **Wznów podawanie insuliny**, aby wznowić podawanie.
* **Włącz Bluetooth** i **Brak połączenia BLE**: telefon nie może połączyć się z patchem. Włącz Bluetooth albo sprawdź połączenie z patchem.

### Informacje

Tylko do informacji: **Mało insuliny**, **Powiadomienie o czasie użytkowania Patcha** (minął czas ustawiony w **Ustawienie powiadomienia o czasie użytkowania Patcha**), **Powiadomienie o sprawdzeniu Patcha**, **Zmiana strefy czasowej** i **Sprawdź glikemię** (po ustalonym czasie od bolusa).

Patch zgłasza też, kiedy jego własna funkcja zawieszenia przy niskiej glikemii (**LGS**) zaczyna lub kończy działanie. **AAPS** nie używa tej funkcji; pętla sama radzi sobie z niską glikemią.

## Gdzie uzyskać pomoc

Problemy ze sterownikiem CareLevo zgłaszaj na [stronie zgłoszeń AAPS na GitHubie](https://github.com/nightscout/AndroidAPS/issues) lub na kanałach społeczności AAPS, patrz [Gdzie mogę uzyskać pomoc?](../GettingHelp/WhereCanIGetHelp.md).
