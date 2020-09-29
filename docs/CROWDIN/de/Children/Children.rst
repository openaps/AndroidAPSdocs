Kontrolle aus der Ferne
**************************************************

.. image:: ../images/KidsMonitoring.png
  :alt: Kinder aus der Ferne kontrollieren
  
AndroidAPS bietet verschiedene Optionen für die Fernüberwachung von Kindern und ermöglicht auch, AAPS aus der Ferne zu steuern. Natürlich kann mittels Remote Monitoring auch der Partner oder Freund unterstützt werden.

Funktionen
==================================================
* Die Pumpe des Kindes wird vom Smartphone des Kindes durch AndroidAPS gesteuert.
* Die Eltern können aus der Ferne alle relevanten Daten wie Glukosewerte, aktive Kohlenhydrate, aktives Insulin usw. sehen. Dazu können sie die **NSClient App** auf ihrem Smartphone verwenden. Du musst in AndroidAPS und NSClient die gleichen Einstellungen verwenden.
* Alarme auf den Smartphones der Eltern sind durch Einsatz **xDrip+ im Follower Modus** möglich.
* Remote control of AndroidAPS using `SMS Commands <../Children/SMS-Commands.html>`_ secured by two-factor authentication.
* Profilwechsel und temporäre Ziele aus der Ferne mittels der NSClientApp.

Tools und Apps für die Fernüberwachung
--------------------------------------------------
* `Nightscout <http://www.nightscout.info/>`_ im Webbrowser (vor allem Datenanzeige)
*	NSClient App
* Dexcom Follow App zusammen mit der originalen Dexcom App (nur BZ-Werte)
*	`xDrip+ <../Configuration/xdrip.html>`_ im Follower Modus (vor allem Datenanzeige und **Alarme**)
*	`Sugarmate <https://sugarmate.io/>`_ or `Spike <https://spike-app.com/>`_ on iOS (mainly BG values and **alarms**)

Dinge, die zu beachten sind
==================================================
* Die Ermittlung der richtigen `Faktoren <../Getting-Started/FAQ.html#wo-anfangen>`_ (Basalrate, Korrekturfaktoren, Insulinwirkdauer...) ist bei Kindern schwierig, gerade wenn auch noch Wachstumshormone ins Spiel kommen. 
* Du musst in AndroidAPS und NSClient die gleichen Einstellungen verwenden.
* Berücksichtige die zeitliche Lücke zwischen dem Haupttelefon des Kindes und dem Smartphone, mit dem Du folgst. Diese entsteht zum einen durch die Zeit, die für Up- und Download benötigt wird, zum anderen lädt das AAPS-Haupttelefon nur Daten hoch, wenn es eine Aktivität des Closed Loop auf dem Smartphone gab.
* Nimm Dir also Zeit, um diese richtig einzustellen und teste sie im Alltag mit Deinem Kind neben Dir bevor Du mit der Fernüberwachung und der Fernbehandlung startest. Schulferien könnten dafür eine gute Zeit sein.
* Wie sieht Dein Notfallplan aus, wenn die Fernsteuerung nicht funktioniert (z.B.  wegen Netzwerkproblemen)?
* Fernüberwachung und -behandlung können in Kindergarten und Grundschule wirklich hilfreich sein. Aber stelle sicher, dass die Lehrer und Erzieher über den Behandlungsplan Deines Kindes Bescheid wissen. Im Bereich `Dateien in der Gruppe AndroidAPS users <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ auf Facebook findest Du dafür Beispiele.
