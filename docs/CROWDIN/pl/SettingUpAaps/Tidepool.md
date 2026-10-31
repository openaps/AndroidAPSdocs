# Tidepool

Tidepool to narzędzie innej firmy. Zbiera dane o glikemii, insulinie i węglowodanach (oraz notatki, które dodajesz do wpisów leczenia). Możesz je analizować i udostępniać swojemu zespołowi diabetologicznemu. Od wersji AAPS 3.2 Tidepool może zastąpić Nightscout przy spełnieniu części Zadania 1. Może też być używany razem z Nightscout jako dodatkowa platforma raportów, która dobrze współpracuje z placówkami medycznymi. Może to być dobra opcja dla dzieci używających AAPS, które chcą mieć zdalne monitorowanie i sterowanie z Nightscout, ale też platformę raportów, z którą zespół diabetologiczny czuje się pewniej.

Ważne: Tidepool służy tylko do raportów. NIE jest to aplikacja do obserwowania danych w czasie rzeczywistym. Jeśli potrzebujesz obserwujących poza głównym telefonem z AAPS, musisz także skonfigurować Nightscout.

Uwaga: organizacja Tidepool wprowadziła na rynek produkt iOS Loop z zatwierdzeniem FDA. Nie ma to nic wspólnego z ich platformą raportów danych ani z AAPS.


## Krok 1 – Załóż konto Tidepool

- Wejdź na [tidepool.org](https://www.tidepool.org/)

- Wybierz „Personal Sign Up” lub „Sign Up” (rejestracja)

- Utwórz adres e-mail i hasło i zapisz je

- Wybierz „Personal Account” (konto osobiste) i kliknij „Continue” (dalej)

- Wypełnij sekcję z danymi pacjenta i zaakceptuj warunki korzystania

- Potwierdź swój adres e-mail według instrukcji, które dostaniesz w wiadomości e-mail


## Krok 2 – Połącz AAPS z Tidepool

- Otwórz **menu** (☰) w lewym górnym rogu ekranu głównego i wybierz „**Konfiguracja**”

- Otwórz kategorię „**Komunikacja**” i włącz „**Tidepool**”:

![Włączenie Tidepool](../images/v4/Tidepool/tidepool_enable.png)

- Dotknij „**Otwórz wtyczkę**” pod Tidepool, a potem dotknij ikony **Zaloguj się** (strzałka wchodząca do drzwi) w prawym górnym rogu

- Otworzy się okno przeglądarki ze stroną logowania Tidepool. Zaloguj się adresem e-mail i hasłem utworzonymi w kroku 1:

![Strona logowania Tidepool](../images/v4/Tidepool/tidepool_login.png)

- Po udanym logowaniu przeglądarka się zamknie, a ekran Tidepool pokaże status „**Połączono**”. Log poniżej pokazuje przesyłanie danych. Jeśli logowanie się nie uda, sprawdź, czy dane logowania są poprawne i czy potwierdziłeś swój adres e-mail w Tidepool.

![Tidepool połączony](../images/v4/Tidepool/tidepool_status.png)

- W „**Ustawieniach**” wtyczki Tidepool otwórz „**Ustawienia połączenia**”. Domyślnie opcja „**Użyj ustawień połączenia Nightscout**” jest włączona, więc Tidepool przesyła dane na tych samych warunkach, które ustawiłeś dla Nightscout. Wyłącz ją, jeśli chcesz osobne warunki dla Tidepool, na przykład przesyłanie do Tidepool tylko przez Wi-Fi i podczas ładowania, a Nightscout korzysta też z danych komórkowych.

![Ustawienia połączenia z włączoną opcją Użyj ustawień połączenia Nightscout](../images/v4/Tidepool/tidepool_connection_settings.png) ![Osobne ustawienia połączenia dla Tidepool](../images/v4/Tidepool/tidepool_connection_settings_separate.png)

Więcej pomocy na temat korzystania z danych przesłanych do Tidepool znajdziesz tutaj: [https://www.tidepool.org/viewing-your-data](https://www.tidepool.org/viewing-your-data)

(tidepool-menu)=
## Przyciski Tidepool

W prawym górnym rogu ekranu Tidepool:

- Ikona **Zaloguj się** lub **Wyloguj się** — połączenie z kontem Tidepool lub rozłączenie. Widoczna jest tylko jedna z nich: **Zaloguj się**, gdy jesteś wylogowany, **Wyloguj się**, gdy jesteś zalogowany. **AAPS** prosi o potwierdzenie przed wylogowaniem.
- Ikona koła zębatego — ustawienia Tidepool.

Przyciski na dole ekranu Tidepool:

- „**Prześlij teraz**” — prześlij nowe dane od razu, bez czekania na następne automatyczne przesłanie.
- „**Pełna synchronizacja**” — prześlij ponownie wszystkie dane zapisane w **AAPS**.
- „**Wyczyść wszystkie dane**” — usuń **wszystkie** dane, które **AAPS** przesłał na twoje konto Tidepool. Tego nie można cofnąć. Używaj tego tylko do usunięcia błędnych lub zdublowanych danych, a potem uruchom „**Pełna synchronizacja**”, aby ponownie przesłać swoje dane.
- „**Wyczyść log**” — wyczyść log widoczny na ekranie Tidepool.

![Ekran Tidepool i jego przyciski](../images/v4/Tidepool/tidepool_menu.png)

W Tidepool dane przesłane przez **AAPS** 4 są widoczne pod nazwą urządzenia **AAPS**. Jeśli używałeś Tidepool ze starszą wersją, zobacz [Co zmieniło się w AAPS v4](#v4changes-tidepool). 
