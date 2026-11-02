# **Freestyle Libre 3** i 3+

Freestyle Libre 3 (FSL3) wymaga specjalnej konfiguracji, aby przesyłać wartości BG do AAPS. Są dwa sposoby przesyłania wartości z Freestyle Libre 3 (FSL3) do AAPS.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

Poniższe metody używają osobnej aplikacji Juggluco. Używa Juggluco do odbierania surowych danych z sensora co 1 minutę, które są potem przekazywane do xDrip lub AAPS. Nowe sensory możesz uruchomić w aplikacji Libre 3 albo bezpośrednio w Juggluco. Poniższy opis pokazuje, jak uruchomić sensor w aplikacji Juggluco. Jeśli sensor został uruchomiony przy zalogowanym koncie LibreView, możesz też przełączać odbiornik między Juggluco a aplikacją Libre 3.

Juggluco może też przekazywać dane do LibreView, aby udostępnić je zespołowi diabetologicznemu, gdy sensor został uruchomiony w aplikacji Libre 3.

W xDrip sensor można kalibrować w zakresie od -40 mg/dl do +20 mg/dl (od -2,2 mmol/l do +1,1 mmol/l), aby wyrównać różnice między pomiarem z glukometru a odczytami sensora.

## Metoda 1: używaj bezpośrednio odczytów co 1 minutę
**AAPS** jest przystosowany do odczytów co 5 minut. Dlatego przetwarzanie wartości co 1 minutę ma czasem ograniczenia.

Zobacz [tutaj](#juggluco-to-aaps).


## Metoda 2: zamień odczyty co 1 minutę na wartości co 5 minut przez xDrip
Ta metoda używa Juggluco do odbierania surowych danych z sensora co 1 minutę. Dane są potem przekazywane do xDrip, który wygładza je do danych co 5 minut i przekazuje do AAPS.

### Krok 1: Konfiguracja Juggluco
Pobierz i zainstaluj aplikację Juggluco [stąd](https://www.juggluco.nl/Juggluco/download.html). Postępuj zgodnie z instrukcjami [tutaj](https://www.juggluco.nl/Juggluco/libre3/)

Upewnij się, że wysyłasz wartości glukozy do xDrip: w ustawieniach Juggluco możesz ustawić wysyłanie wartości glukozy do innych aplikacji. Juggluco can send three types of such broadcasts: The **Patched Libre broadcast** was originally used by the patched Librelink app and can be used to send glucose values to xDrip.

### Krok 2: Konfiguracja xDrip

Wartości glukozy odbiera aplikacja xDrip na smartfonie.

- Jeśli jeszcze go nie masz, pobierz [xDrip](https://github.com/NightscoutFoundation/xDrip) i postępuj zgodnie z instrukcjami na [stronie ustawień xDrip](../CompatibleCgms/xDrip.md).
- W xDrip wybierz „Libre2 (patched app)” jako źródło danych.
- W razie potrzeby wpisz "BgReading:d,xdrip libre_receiver:v" w Less Common Settings → Extra Logging Settings → Extra tags for logging. Dzięki temu w logach pojawią się dodatkowe komunikaty o błędach, przydatne przy rozwiązywaniu problemów.

![Logowanie LibreLink w xDrip](../images/Libre2_Tags.png)

- Technicznie aktualna wartość glukozy jest wysyłana do xDrip co minutę. Domyślnie filtr średniej ważonej oblicza wygładzoną wartość z ostatnich 25 minut. Ten okres możesz zmienić w menu NFC Scan features.

  → Menu (☰) → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

  ![xDrip: ustawienia zaawansowane Libre 2 i wartości surowe](../images/xDrip_Libre3_Smooth.png)



### Krok 3: Uruchomienie sensora w xDrip

W xDrip uruchom sensor przez „Start Sensor” i „not today”. Nie musisz przykładać telefonu do sensora. W rzeczywistości „Start Sensor” nie uruchamia fizycznie żadnego sensora Libre 3 i w żadnym wypadku nie komunikuje się z nim. To tylko informuje xDrip, że nowy sensor dostarcza wartości glukozy. If available, enter two blood-measured values for the initial calibration. Teraz wartości glukozy powinny pojawiać się w xDrip co 5 minut. Pominięte wartości, np. gdy byłeś za daleko od telefonu, nie zostaną uzupełnione później.

Jeśli nadal nie ma danych, poczekaj co najmniej 15–20 minut.

Po wymianie sensora xDrip automatycznie wykryje nowy sensor i usunie wszystkie dane kalibracji. You may check your blood glucose after activation and make a new initial calibration.

### Krok 4: Konfiguracja AAPS

- Zobacz [tutaj](#juggluco-to-xdrip) i wróć.

- Jeśli **AAPS** nie odbiera wartości BG, gdy telefon jest w trybie samolotowym, użyj „Identify receiver”
- Wyłącz wygładzanie (Smoothing) – xDrip już to robi

## Kolejne wymiany sensora

1. Otwórz Juggluco i zapisz numer seryjny obecnego sensora

![Numer seryjny Libre](../images/libre3/step_13.jpg)

2. Teraz po prostu zeskanuj nowy sensor czytnikiem NFC telefonu. Juggluco pokaże komunikat, jeśli proces został uruchomiony poprawnie.
3. Gdy chcesz wyłączyć stary sensor, otwórz menu Juggluco, klikając w dowolnym pustym miejscu w lewym górnym rogu ekranu.
4. Wybierz wygasły sensor i dotknij „Terminate”

![Terminate sensor (zakończ sensor)](../images/libre3/step_14.jpg)

Uwaga: gdy aktywne są dwa sensory, Juggluco wyśle do xDrip najnowszą wartość z dowolnego z nich. If the sensors are not calibrated to read BG similarly, this may result in jumpy BG values being reported to xDrip. Jeśli zakończysz niewłaściwy sensor, możesz go ponownie włączyć, po prostu skanując sensor.

## Przełączanie sensora między aplikacją Libre 3 a Juggluco

Jeśli sensor został uruchomiony przy zalogowanym koncie LibreView, możesz też przełączać odbiornik między Juggluco a aplikacją Libre 3. Wymaga to następujących kroków:

1. Zainstaluj aplikację Libre 3 ze sklepu Google Play
2. Skonfiguruj aplikację Libre 3 z kontem LibreView, na którym sensor został aktywowany.
3. Wymuś zatrzymanie aplikacji Juggluco w ustawieniach Androida.
4. W menu Libre 3 kliknij „Start Sensor”, wybierz „Yes”, „Next” i zeskanuj sensor.
5. Po kilku minutach wartości BG powinny być widoczne w aplikacji Libre 3.

Aby przełączyć się z aplikacji Libre 3 na Juggluco, musisz wymusić zatrzymanie aplikacji Libre 3 w ustawieniach Androida i wykonać Krok 1 i 2.

(libre3-experiences-and-troubleshooting)=
## Doświadczenia i rozwiązywanie problemów

### Rozwiązywanie problemów z połączeniem Libre3 -> Juggluco

- Upewnij się, że używasz aktualnej wersji aplikacji Juggluco
- Sprawdź swoje ustawienia według tego opisu
- Czasem trzeba wymusić zatrzymanie aplikacji Libre 3 i Juggluco, a potem uruchomić je ponownie.
- Wyłącz Bluetooth i włącz go ponownie
- Poczekaj chwilę lub spróbuj zamknąć Juggluco
- Starsze wersje Juggluco (poniżej 2.9.6) nie wysyłają kolejnych danych z sensora Libre3 do połączonych urządzeń (np. Juggluco na WearOS). Może być potrzebne kliknięcie „Resend data” w zmodyfikowanej aplikacji Libre3 (menu Juggluco).

### Dodatkowa pomoc

Oryginalna instrukcja: [strona jkaltes](https://www.juggluco.nl/Juggluco/libre3/)

Additional GitHub repo: [GitHub link](https://github.com/maheini/FreeStyle-Libre-3-patch)
