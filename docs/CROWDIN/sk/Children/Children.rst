Vzdialený monitoring
**************************************************

.. image:: ../images/KidsMonitoring.png
  :alt: Monitorovanie detí
  
AndroidAPS ponúka niekoľko možností pre vzdialené monitorovanie detí a tiež umožňuje odosielať vzdialené príkazy. Samozrejme môžete použiť vzdialené monitorovanie aj na sledovanie vášho partnera alebo priateľa.

Funkcie
==================================================
* Pumpa dieťaťa je ovládaná pomocou telefónu dieťaťa používajúceho AndroidAPS.
* Rodičia môžu na diaľku sledovať všetky dôležité údaje, ako sú glykémia, aktívne sacharidy, aktívny inzulín atď. pomocou aplikácie **NSClient** na svojom telefóne. Settings must be the same in AndroidAPS and NSClient.
* Parents can be alarmed by using **xDrip+ app in follower mode** on their phone.
* Remote control of AndroidAPS using `SMS Commands <../Children/SMS-Commands.html>`_ secured by two-factor authentication.
* Diaľkové prepnutie profilu a spustenie dočasných cieľov prostredníctvom aplikácie NSClient.

Nástroje a aplikácie pre vzdialené monitorovanie
--------------------------------------------------
* `Nightscout <http://www.nightscout.info/>`_ vo internetovom prehliadači (hlavne zobrazenie údajov)
* Aplikácia NSClient
* Dexcom Follow, pokiaľ používate originálnu aplikáciu Dexcom (iba hodnoty glykémií)
*	`xDrip+ <../Configuration/xdrip.html>`_ in follower mode (mainly BG values and **alarms**)
*	`Sugarmate <https://sugarmate.io/>`_ or `Spike <https://spike-app.com/>`_ on iOS (mainly BG values and **alarms**)

Veci, ktoré treba zvážiť
==================================================
* Nastavenie správnych `parametrov liečby <../Getting-Started/FAQ.html#how-to-begin>`_ (bazálne dávky, DIA, ISF...) je náročné pri deťoch, hlavne pri vplyve rastových hormónov. 
* Settings must be the same in AndroidAPS and NSClient.
* Consider time gap between master and follower due to time for up- and download as well as the fact that AAPS master phone will only upload after loop run.
* Takže si dajte načas, aby ste ich správne nastavili a otestovali, keď je dieťa vo vašej blízkosti, skôr ako začnete so vzdialeným monitorovaním a odosielaním príkazov na diaľku. Vhodným obdobím pre ich nastavenie môžu byť napríklad školské prázdniny.
* Aký je váš núdzový plán v prípade, že diaľkové ovládanie nefunguje (napr. problémy so sieťou)?
* Vzdialené monitorovanie a riadenie môže byť veľmi nápomocné v škôlke a na základnej škole. Ale uistite sa, že učitelia a vychovávatelia vedia o plánoch liečby vášho dieťaťa. Príklady takýchto plánov liečby možno nájsť v časti `súbory skupiny AndroidAPS users <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ na Facebooku.
