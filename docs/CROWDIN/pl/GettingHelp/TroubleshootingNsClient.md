(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Wskazówki dotyczące rozwiązywania problemów z NSClient

NSClient potrzebuje stabilnego połączenia z Nightscout. Niestabilne połączenie powoduje błędy synchronizacji i duże zużycie danych.

Jeśli nikt nie obserwuje Cię w Nightscout, możesz wstrzymać NSClient, aby oszczędzać baterię. Możesz też ustawić NSClient tak, aby łączył się tylko przez Wi-Fi i/lub podczas ładowania.

* Jak rozpoznać niestabilne połączenie?

Otwórz ekran NSClient (**Konfiguracja** > **Komunikacja** > **NSClientV3** > **Otwórz wtyczkę**) i obserwuj **Status** oraz log. Gdy websockets są włączone, status powinien cały czas pokazywać „connected”, a w logu nie powinno prawie być komunikatów o ponownym połączeniu. Jeśli widzisz wiele ponownych połączeń, jest problem.

* Restart

As a first step, restart Nightscout and then your phone to see if the issue is permanent.

Jeśli Twój Nightscout działa na Heroku, możesz go uruchomić ponownie tak: zaloguj się do Heroku, kliknij nazwę swojej aplikacji Nightscout, kliknij menu 'More', a potem 'Restart all dynos'.

Dla innych usług hostingowych postępuj według dokumentacji Twojego dostawcy.

* Problemy z telefonem

Android może przełączyć telefon w tryb uśpienia. Sprawdź, czy w ustawieniach zasilania telefonu AAPS ma wyjątek, który pozwala mu cały czas działać w tle.

Sprawdź NSClient ponownie w miejscu z silnym sygnałem sieci.

Spróbuj z innym telefonem.

* Nightscout

Jeśli Twoja strona działa na Azure, wiele osób zauważyło, że problemy z połączeniem zmniejszyły się po przeniesieniu na Heroku.

Obejście problemów z połączeniem w Azure: w Application settings ustaw HTTP protocol na 2.0 i Websockets na ON

* Brak odczytów BG z Nightscout

Jeśli **AAPS** poprawnie łączy się z Nightscout, ale BG jest wyświetlana jako N/A: w [ustawieniach NSClientV3](#Preferences-nsclient) otwórz **Synchronizacja** i włącz **Odbieraj dane CGM z NS**. Ta opcja jest ukryta, gdy sterowanie z urządzenia opiekuna jest włączone ([tryb silniejszych zabezpieczeń](#client-master-control-hardened-mode)); wtedy sprawdź, czy w **Konfiguracja** → **Źródło BG** wybrane jest **NSClient BG**.

* Jeśli nadal masz błąd...

Sprawdź rozmiar swojej bazy danych w MongoDB (lub przez wtyczkę rozmiaru bazy danych w Nightscout). Jeśli używasz darmowego planu MongoDB, 496 MB oznacza, że baza jest pełna i trzeba ją wyczyścić. [Follow these Nightscout instructions for checking the size of your database and clearing out data](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

Zanim usuniesz dane z bazy, a jeszcze tego nie zrobiłeś, rozważ przekazanie swoich danych AAPS do projektu Open Humans (do badań naukowych). Instrukcje są na stronie [Open Humans Uploader](../SupportingAaps/OpenHumans.md).