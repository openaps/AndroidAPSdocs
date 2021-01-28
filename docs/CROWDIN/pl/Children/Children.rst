Zdalny monitoring
**************************************************

.. image:: ../images/KidsMonitoring.png
  :alt: Monitorowanie dzieci
  
AndroidAPS oferuje kilka opcji do zdalnego monitorowania dzieci, a także pozwala na wysyłanie zdalnych komend. Oczywiście można również użyć zdalnego monitorowania, aby śledzić partnera lub przyjaciela.

Funkcje
== == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
* Pompa dziecka jest kontrolowana przez telefon dziecka z AndroidAPS.
* Rodzice mogą zdalnie śledzić wszystkie istotne dane, takie jak poziom glukozy, węglowodany na pokładzie, insulina na pokładzie itp. przy użyciu aplikacji ** NSClient * * na swoim telefonie. Settings must be the same in AndroidAPS and NSClient app.
* Rodzice mogą być alarmowani za pomocą aplikacji ** xDrip w trybie follower ** na swoim telefonie.
* Remote control of AndroidAPS using `SMS Commands <../Children/SMS-Commands.html>`_ secured by two-factor authentication.
* Remote control through NSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see `release notes for Version 2.8.1.1 <https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Releasenotes.html#important-hints>`_ for further details.

Narzędzia i aplikacje do zdalnego monitorowania
== == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
* ` Nightscout <http://www.nightscout.info/>` _ w przeglądarce internetowej (głównie wyświetlanie danych)
*	NSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  `NSClient & NSClient2 to download <https://github.com/nightscout/AndroidAPS/releases/>`_. The only difference is the app name. This way you can install the app twice on the same phone, to be able to follow 2 different persons/nightscouts with it.
* Dexcom follow, jeśli korzystasz z oryginalnej aplikacji Dexcom (tylko wartości BG)
* `xDrip + <../ Configuration / xdrip.html>` _ w trybie follower (głównie wartości BG i ** alarmy **)
*	`Sugarmate <https://sugarmate.io/>`_ or `Spike <https://spike-app.com/>`_ on iOS (mainly BG values and **alarms**)

Zagadnienia do rozważenia
== == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
* Ustawienie prawidłowych „parametrów terapii <../Getting-Started/FAQ.html#how-to-begin>`_ (dawka baza, DIA, ISF...) jest trudne dla dzieci, szczególnie gdy w grę wchodzi hormon wzrostu. 
* Settings must be the same in AndroidAPS and NSClient app.
* Należy uwzględnić przerwę w czasie podczas komunikacji pomiędzy telefonem głównym a followerem ze względu na czas wysłania i pobierania, jak również na fakt, że telefon z AAPS będzie przesyłać dane tylko po uruchomieniu pętli.
* Więc daj sobie czas, aby ustawić je poprawnie i przetestować w prawdziwym życiu z dzieckiem obok siebie, zanim zaczniesz zdalne monitorowanie i terapię. Czas wolny od szkoły może być na to dobrym okresem.
* Jaki jest twój plan awaryjny, jeśli zdalne sterowania nie działa (np. problem z siecią)?
* Zdalne monitorowanie i terapia mogą być naprawdę pomocne w przedszkolu i szkole podstawowej. Ale upewnij się, że nauczyciele i wychowawcy są świadomi Twojego planu terapii dziecka. Przykłady takich planów terapii można znaleźć w sekcji plików użytkowników AndroidaAPS <https://www.facebook.com/groups/AndroidAPSUsers/files/> `_ na Facebooku.
