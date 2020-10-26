Zdalny monitoring
**************************************************

.. image:: ../images/KidsMonitoring.png
  :alt: Monitorowanie dzieci
  
AndroidAPS oferuje kilka opcji do zdalnego monitorowania dzieci, a także pozwala na wysyłanie zdalnych komend. Oczywiście można również użyć zdalnego monitorowania, aby śledzić partnera lub przyjaciela.

Funkcje
== == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
* Pompa dziecka jest kontrolowana przez telefon dziecka z AndroidAPS.
* Rodzice mogą zdalnie śledzić wszystkie istotne dane, takie jak poziom glukozy, węglowodany na pokładzie, insulina na pokładzie itp. przy użyciu aplikacji ** NSClient * * na swoim telefonie. Ustawienia muszą być takie same w AndroidAPS i NSClient.
* Rodzice mogą być alarmowani za pomocą aplikacji ** xDrip w trybie follower ** na swoim telefonie.
* Remote control of AndroidAPS using `SMS Commands <../Children/SMS-Commands.html>`_ secured by two-factor authentication.
* Zdalna zmiana profilu i celów tymczasowych za pośrednictwem aplikacji NSClient.

Narzędzia i aplikacje do zdalnego monitorowania
--------------------------------------------------
* ` Nightscout <http://www.nightscout.info/>` _ w przeglądarce internetowej (głównie wyświetlanie danych)
* Aplikacja NSClient
* Dexcom follow, jeśli korzystasz z oryginalnej aplikacji Dexcom (tylko wartości BG)
* `xDrip + <../ Configuration / xdrip.html>` _ w trybie follower (głównie wartości BG i ** alarmy **)
*	`Sugarmate <https://sugarmate.io/>`_ or `Spike <https://spike-app.com/>`_ on iOS (mainly BG values and **alarms**)

Zagadnienia do rozważenia
== == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
* Ustawienie prawidłowych „parametrów terapii <../Getting-Started/FAQ.html#how-to-begin>`_ (dawka baza, DIA, ISF...) jest trudne dla dzieci, szczególnie gdy w grę wchodzi hormon wzrostu. 
* Ustawienia muszą być takie same w AndroidAPS i NSClient.
* Należy uwzględnić przerwę w czasie podczas komunikacji pomiędzy telefonem głównym a followerem ze względu na czas wysłania i pobierania, jak również na fakt, że telefon z AAPS będzie przesyłać dane tylko po uruchomieniu pętli.
* Więc daj sobie czas, aby ustawić je poprawnie i przetestować w prawdziwym życiu z dzieckiem obok siebie, zanim zaczniesz zdalne monitorowanie i terapię. Czas wolny od szkoły może być na to dobrym okresem.
* Jaki jest twój plan awaryjny, jeśli zdalne sterowania nie działa (np. problem z siecią)?
* Zdalne monitorowanie i terapia mogą być naprawdę pomocne w przedszkolu i szkole podstawowej. Ale upewnij się, że nauczyciele i wychowawcy są świadomi Twojego planu terapii dziecka. Przykłady takich planów terapii można znaleźć w sekcji plików użytkowników AndroidaAPS <https://www.facebook.com/groups/AndroidAPSUsers/files/> `_ na Facebooku.
