# Wskazówki dotyczące rozwiązywania problemów z NSClient

NSClient jest zależny od stałej łączności z Nightscout. Niestabilne połączenie prowadzi do błędów synchronizacji i wysokiego zużycia przesyłanych danych.

Jeśli nikt inny nie potrzebuje stałego podglądu Twoich danych na Nightscout, możesz wstrzymać NSClient, aby oszczędzić (dużo) baterii lub ustawić połączenie tylko gdy masz dostęp do Wi-Fi i podczas ładowania.

* Jak wykryć niestabilne połączenie?

Przejdź do zakładki NSClient w AAPS i obejrzyj log. Common behavior is to receive PING every ~30s and almost none reconnection messages. Jeśli widzisz wiele ponownych połączeń, wówczas pojawia się problem. Since AndroidAPS 2.0 when such behavior is detected NSClient is paused for 15 minutes and message "NSClient malfunction" on Overview is displayed.

* Restart

Pierwszym krokiem powinno być ponowne uruchomienie: Nightscout, a następnie telefonu, po to aby sprawdzić, czy problem występuje permanentnie

* Problemy z telefonem

System Android może uśpić twój telefon. Sprawdź, czy masz dodany w telefonie wyjątek dla AndroidAPS w opcjach zasilania, po to aby przez cały czas umożliwić uruchamianie go w tle. Sprawdź ponownie w miejscu gdzie jest silny zasięg sieci. Spróbuj z innym telefonem.

* Nightscout

Jeśli korzystasz z platformy Azure, to spróbuj zmienić platformę na Heroku. Taka zmiana pomogła wielu osobom. Niedawno znaleziono obejście w Azure, można ustawić w Ustawieniach aplikacji protokół HTTP na 2.0 i Websockets na ON

* Jeśli nadal masz błąd...

Sprawdź rozmiar bazy danych w mLab. 496 MB oznacza, że jest ona pełna i wymaga kompaktowania. [ Postępuj zgodnie z instrukcjami OpenAPS, aby sprawdzić rozmiar bazy danych ](https://openaps.readthedocs.io/en/latest/docs/Troubleshooting/Rig-NS-communications-troubleshooting.html#mlab-maintenance). Jeśli kompaktowanie nie działa, prosimy abyś rozważył przekazanie swoich danych AndroidAPS do Data Commons (do badań) przed usunięciem jakichkolwiek danych. W [dokumentacji OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Give%20Back-Pay%20It%20Forward/data-commons-data-donation.html) znajdują się informacje dotyczące tego, jak to zrealizować.