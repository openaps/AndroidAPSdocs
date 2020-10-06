SMS-Befehle
**************************************************
Sicherheitshinweise
==================================================
* AndroidAPS erlaubt es Dir, das Smartphone eines Kindes über SMS-Nachricht aus der Ferne zu steuern. Wenn Du diesen SMS-Kommunikator aktivierst, denke immer daran, dass das Telefon, das für Remote-Befehle eingerichtet ist, gestohlen werden kann. Schütze dieses mit einem zumindest mit einem sicheren PIN-Code.
* AndroidAPS gibt Rückmeldung per SMS, wenn Deine Remote-Befehle, wie z.B. ein Bolus oder eine Profiländerung, ausgeführt wurden. Es ist ratsam, dies so einzustellen, dass Bestätigungstexte an mindestens zwei verschiedene Telefonnummern gesendet werden, falls eines der Empfangstelefone gestohlen wird.
* **Wenn Du einen Bolus über  SMS-Befehle abgibst, musst Du die Kohlenhydrate über Nightscout (NSClient, Webseite...) eingeben!** Wenn Du das unterlässt, ist zwar das IOB korrekt, aber die COB sind zu gering. Dies kann dazu führen, dass notwendige Korrekturboli nicht abgegeben werden, da AAPS davon ausgeht, dass Du zu viel aktives Insulin hast.
* Ab AndroidAPS Version 2.7 muss eine Authentifizierungs-App mit einem zeitbasierten Einmalpasswort verwendet werden, um die Sicherheit bei der Verwendung von SMS-Befehlen zu erhöhen.
* Your remote device should be protected with strong password or biometrics.
* Additionally it is recommended to allow a `second phone number <#authorized-phone-numbers>`_ for SMS commands. So you can use second number to `temporary disable <#other>`_ SMS communicator in case your main remote phone gets lost or stolen.

SMS-Befehle einrichten
==================================================

.. image:: ../images/SMSCommandsSetup.png
  :alt: SMS-Befehle einrichten
      
* Die meisten Anpassungen der temporären Ziele, AAPS folgen etc. können über die `NSClient-App <../Children/Children.html>`_ auf einem Android-Smartphone durchgeführt werden.
* Boli können nicht über Nightscout abgegeben werden, aber Du kannst dafür SMS-Befehle verwenden.
* Falls Du als Follower ein iPhone verwendest und daher die NSClient-App nicht nutzen kannst, gibt es weitere SMS-Befehle.

* Gehe dazu in den Systemeinstellungen deines Android-Telefons zu Apps > AndroidAPS > Berechtigungen und aktiviere dort SMS.

Erlaubte Telefonnummern
-------------------------------------------------
* In AndroidAPS gehst du zu **Einstellungen > SMS-Kommunikator** und trägst die Telefonnummer(n) ein, die dazu berechtigt werden soll(en), Kommandos an AndroidAPS zu senden. Mehrere Nummern werden dabei durch Semikolon ohne Leerzeichen getrennt (z.B. +6412345678;+6412345679) 
* Aktiviere 'Erlaube Fernsteuerung per SMS zulassen'.
* Wenn Du mehr als eine Nummer verwenden möchtest:

  * Gib nur eine der Telefonnummern ein.
  * Führe einen SMS-Befehl aus um sicher zu stellen, dass die Kommandos mit dieser Telefonnummer funktionieren.
  * Gib die zusätzliche(n) Telefonnummer(n) getrennt durch Semikolon ohne Leerzeichen ein.
  
    .. image:: ../images/SMSCommandsSetupSpace2.png
      :alt: SMS-Befehle Setup mehrerer Nummern

Minuten zwischen Bolus-Befehlen
-------------------------------------------------
* Du kannst den minimalen Zeitabstand zwischen über SMS durchgeführte Boli definieren.
* Aus Sicherheitsgründen musst Du mindestens zwei erlaubte Telefonnummern hinzufügen, um diesen Wert zu bearbeiten.

Zusätzliche obligatorische PIN am Token-Ende
-------------------------------------------------
* Aus Sicherheitsgründen muss dem Antwortcode eine PIN folgen.
* PIN-Regeln:

   * 3 bis 6 Ziffern
   * nicht dieselben Ziffern (z.B. 1111)
   * keine Ziffernfolge (z.B. 1234)

Konfiguration des Authentifikators
-------------------------------------------------
* Zwei-Faktor-Authentifizierung wird zur Verbesserung der Sicherheit verwendet.
* Du kannst jede Authentifizierungs-App, die RFC 6238 TOTP-Token unterstützt, verwenden. Beliebte kostenlose Apps sind:

   * `Authy <https://authy.com/download/>`_
   * Google Authenticator - `Android <https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2>`_ / `iOS <https://apps.apple.com/de/app/google-authenticator/id388497605>`_
   * `LastPass Authenticator <https://lastpass.com/auth/>`_
   * `FreeOTP Authenticator <https://freeotp.github.io/>`_

* Installiere die Authentifizierungs-App Deiner Wahl auf Deinem Follower-Smartphone und scanne den in AAPS angezeigten QR-Code.
* Teste das Einmal-Passwort, indem Du den in Deiner Authentifizierungs-App angezeigte Token und die PIN, die Du gerade in AAPS eingerichtet hast, eingibst. Beispiel:

   * Deine zwingend erforderliche PIN ist 2020
   * TOTP Token von der Authentifizierungs-App ist 457051
   * Trage 4570512020 ein
   
* Der rote Text "WRONG PIN" ändert sich **automatisch** in den grünen Text "OK", wenn das Einmal-Passwort korrekt ist. **Es gibt keine Taste, die Du drücken kannst!**
* Time on both phones must be synchronized. Best practice is automatically from network. Time differences might lead to authentication problems.
* Verwende die Schaltfläche "AUTHENTIKATORS ZURÜCKSETZEN", wenn Du bereits eingerichtete Berechtigungen entfernen möchten.

SMS-Befehle verwenden
==================================================
* Sende eine SMS von Deiner/Deinen erlaubte/n Telefonnummer(n) an das Smartphone, das AndroidAPS ausgeführt und nutze dabei einen der `Befehle <../Children/SMS-Commands.html#id1>`_ unten. 
* Das AAPS-Smartphone wird antworten, um sich die Durchführung des übermittelten Befehls bestätigen zu lassen oder um den angeforderten Status zu übermitteln. 
* Bestätige falls erforderlich die Durchführung des übermittelten Befehls, indem Du den angegebenen Code zurücksendest. Beispiel:

   * Deine zwingend erforderliche PIN ist 2020
   * TOTP Token von der Authentifizierungs-App ist 457051
   * Trage 4570512020 ein

**Hinweis:** Eine SMS-Flat auf beiden Telefonen kann nützlich sein, da u.U. viele SMS hin und her gesandt werden.

Befehle
==================================================
Befehle müssen in Englisch gesendet werden, die Antwort erhältst Du in Deiner lokalen Sprache, wenn die Zeichenfolge bereits `übersetzt ist <../translations.html#texte-fur-die-androidaps-app-ubersetzen>`_.

.. image:: ../images/SMSCommands.png
  :alt: Beispiele für SMS-Befehle

Loop
--------------------------------------------------
* LOOP STOP/DISABLE
   * Antwort: Loop wurde deaktiviert.
* LOOP START/ENABLE
   * Antwort: Loop wurde aktiviert
* LOOP-STATUS
   * Antwort hängt vom aktuellen Status ab
      * Loop ist deaktiviert.
      * Loop ist aktiviert.
      * Pausiert (%1$d min)
* LOOP SUSPEND 20
   * Antwort: Loop unterbrochen für 20 Minuten
* LOOP RESUME
   * Antwort: Loop wurde fortgesetzt

CGM-Daten
--------------------------------------------------
* BG
   * Antwort: Letzter BZ: 5.6 4min her, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)
* CAL 5.6
   * Antwort: Um die Kalibrierung 5.6 zu senden, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
   * Antwort, nachdem der korrekte Code von AAPS empfangen wurde: Kalibrierung gesendet (**Falls xDrip installiert ist. In xDrip+ muss "Kalibrierungen akzeptieren" aktiviert sein.)

Basal
--------------------------------------------------
* BASAL STOP/CANCEL
   * Antwort: Antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN, um die temporäre Basalrate zu beenden.
* BASAL 0.3
   * Antwort: Um eine Basalrate von 0.3IE/h für 30 Minuten zu setzen, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
* BASAL 0.3 20
   Antwort: Um eine Basalrate von 0.3IE/h für 20 Minuten zu setzen, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
* BASAL 30%
   * Antwort: Um die Basalrate von 30% für 30 Minuten zu setzen, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
* BASAL 30% 50
   * Antwort: Um die Basalrate von 30% für 50 Minuten zu setzen, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.

Bolus
--------------------------------------------------
Ein Bolus via SMS ist innerhalb von 15 Minuten nach der letzten Bolusgabe in AAPS oder nach dem letzten SMS-Befehl nicht möglich. Den Wert kannst Du nur anpassen, wenn mind. zwei Rufnummern eingetragen sind. Die Antwort hängt daher davon ab, wann der letzte Bolus abgegeben wurde.

* BOLUS 1.2
   * Antwort A: Um einen Bolus von 1,2 IE abzugeben, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
   * Antwort B: Bolusabgabe aus der Ferne nicht verfügbar. Versuch es später nochmal.
* BOLUS 0.60 MEAL
   * Mit dem optionalen Parameter MEAL wird ein Mahlzeiten TT gesetzt (Standardwerte sind 90 mg/dL / 5.0 mmol/L für 45 Minuten).
   * Antwort A: Um einen Bolus von 0,6 IE abzugeben, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
   * Antwort B: Bolusabgabe aus der Ferne nicht verfügbar. 
* CARBS 5
   * Antwort: Um 5g Kohlenhydrate um 12:45 einzugeben, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
* CARBS 5 17:35/5:35PM
   * Antwort: Um 5g Kohlenhydrate um 17:35 einzugeben, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
* EXTENDED STOP/CANCEL
   * Antwort: Antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN, um den erweiterten Bolus zu beenden.
* EXTENDED 2 120
   * Antwort: Um den erweiterten Bolus 2 IE für 120 Minuten abzugeben, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.

Profile
--------------------------------------------------
* PROFILE STATUS
   * Antwort: Profil1
* PROFILE LIST
   * Antwort: 1. ` Profil1 ` 2. ` Profil2 `
* PROFILE 1
   * Antwort: Um zum Profil 1 mit 100% zu wechseln, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
* PROFILE 2 30
   * Antwort: Um zum Profil 2 mit 30% zu wechseln, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.

Andere
--------------------------------------------------
* TREATMENTS REFRESH
   * Antwort: Behandlungen von NS aktualisieren
* NSCLIENT RESTART
   * Antwort: NSCLIENT RESTART 1 receivers
* PUMP
   * Antwort: Letzte Verbindung: vor 1 Min. Temp: 0.00E/h @11:38 5/30min IOB: 0.5E Reserv: 34E Batt: 100
* PUMP CONNECT
   * Antwort: Pumpe erneut verbunden
* PUMP DISCONNECT *30*
   * Um die Pumpe für *30* Minuten zu trennen, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
* SMS DISABLE/STOP
   * Antwort: Um den SMS Remote Service zu deaktivieren, antworte mit dem Code Any. Beachte, dass Du die Fernsteuerung nur am AAPS Master-Smartphone wieder aktivieren kannst.
* TARGET MEAL/ACTIVITY/HYPO   
   * Antwort: Um ein MEAL/ACTIVITY/HYPO TT zu setzen, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
* TARGET STOP/CANCEL   
   * Antwort: Um das temporäre Ziel zu stoppen, antworte mit dem Code der Authenticator-App gefolgt von Deinem PIN.
* HELP
   * Antwort: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * Antwort: BOLUS 1.2 BOLUS 1.2 MEAL

Problembehandlung
==================================================
Mehrfach-SMS
--------------------------------------------------
Wenn Du die gleiche SMS immer und immer wieder empfängst (z.B. Profilwechsel), hast Du wahrscheinlich eine Endlosschleife mit einer anderen App eingerichtet. Das könnte zum Beispiel xDrip+ sein. Falls dies der Fall ist, stelle sicher, dass xDrip+ (oder eine andere App, die mit Nightscout verbunden ist), keine Behandlungsdaten hochlädt. 

Wenn die andere App auf mehreren Smartphones installiert ist, musst Du den Upload auf allen deaktivieren.

SMS-Befehle funktionieren nicht auf Samsung-Smartphones
--------------------------------------------------
Es gab einen Hinweis, dass nach einem Update die SMS Kommandos auf einem Galaxy S10 nicht mehr funktioniert haben. Dies konnte durch Abschalten der Option 'als chat message senden' behoben werden.

.. image:: ../images/SMSdisableChat.png
  :alt: SMS als Chatnachricht deaktivieren
