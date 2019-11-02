SMS-Befehle
*****
Sicherheitshinweise
======
* AndroidAPS erlaubt es Dir, das Smartphone eines Kindes über SMS-Nachricht aus der Ferne zu steuern. Wenn Du diesen SMS-Kommunikator aktivierst, denke immer daran, dass das Telefon, das für Remote-Befehle eingerichtet ist, gestohlen werden kann. Schütze dieses mit einem zumindest mit einem sicheren PIN-Code.
* AndroidAPS gibt Rückmeldung per SMS, wenn Deine Remote-Befehle, wie z.B. ein Bolus oder eine Profiländerung, ausgeführt wurden. Es ist ratsam, dies so einzustellen, dass Bestätigungstexte an mindestens zwei verschiedene Telefonnummern gesendet werden, falls eines der Empfangstelefone gestohlen wird.
* **If you bolus through SMS Commands you must enter carbs through Nightscout (NSClient, Website...)!** If you fail to do so IOB would be correct with too low COB potentially leading to not performed correction bolus.

Funktionsweise
=====
* Most of the adjustments of temp targets, following AAPS etc. can be done on NSclient app on an Android phone with an internet connection.
* Boluses can't be given through Nightscout, but you can use SMS commands.
* If you use an iPhone as a follower and therefore cannot use NSclient, there are additional SMS commands available.

* In your android phone setting go to Applications > AndroidAPS > Permissions and enable SMS
* In AndroidAPS go to Preferences > SMS Communicator and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons, no spaces or other characters anywhere - i.e. .

  .. image:: ../images/SMSCommandsSetup.png
    :alt: SMS Commands Setup

* Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the commands below in **CAPITAL LETTERS**, the phone will respond to confirm success of command or status requested. Bestätige gegebenenfalls das Kommando indem Du den vom AndroidAPS Smartphone per SMS übermittelten Code zurücksendest.

**Hinweis:"" Eine SMS-Flat auf beiden Telefonen kann nützlich sein, da u.U. viele SMS hin und her gesandt werden.

Befehle
=====

Commands must be send in English, response will be in your local language if the response string is already `translated <../translations.html#translate-strings-for-androidaps-app>`_.

.. image:: ../images/SMSCommands.png
  :alt: SMS Commands Example

Loop
-----
* LOOP STOP/DISABLE
   * Antwort: Loop wurde deaktiviert.
* LOOP STARTEN/AKTIVIEREN
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
-----
* BZ
   * Antwort: Letzter BZ: 5.6 4min her, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)
* CAL 5.6
   * Antwort: Um die Kalibrierung 5.6 zu senden, antworte mit dem Code Rrt.
   * Antwort, nachdem der korrekte Code von AAPS empfangen wurde: Kalibrierung gesendet (**Falls xDrip installiert ist. In xDrip+ muss "Kalibrierungen akzeptieren" aktiviert sein.)

Basal
-----
* BASAL STOP/CANCEL
   * Antwort: Antworte mit dem Code EmF, um die temporäre Basalrate zu beenden
* BASAL 0.3
   * Antwort: Um eine Basalrate von 0.3IE/h für 30 Minuten zu setzen, antworte mit dem Swe
* BASAL 0.3 20
   * Antwort: Um eine Basalrate von 0.3IE/h für 20 Minuten zu setzen, antworte mit dem Swe
* BASAL 30%
   * Antwort: Um die Basalrate von 30% für 30 Minuten zu setzen, antworte mit dem Code Swe
* BASAL 30% 50
   * Antwort: Um die Basalrate von 30% für 50 Minuten zu setzen, antworte mit dem Code Swe

Bolus
-----
* BOLUS 1.2
   * Die Antwort hängt davon ab, wann der letzte Bolus abgegeben wurde.
      * Um einen Bolus von 1,2 IE abzugeben, antworte mit dem Code Rrt
      * Ferngesteuerter Bolus ist nicht verfügbar. Versuch es später nochmal. (**Ein ferngsteuerter Bolus ist innerhalb eines Zeitfensters von 15 min. nach einer Bolusgabe oder einem anderen Ferbedienungsbefehl nicht zugelassen!**)
* EXTENDED STOP/CANCEL
   * Antwort: Antworte mit dem Code EmF, um den erweiterten Bolus zu beenden
* EXTENDED 2 120
   * Antwort: Um den erweiterten Bolus2 IE für 120 Minuten abzugeben, antworte mit dem Code EmF

Profile
-----
* PROFILE STATUS
   * Antwort: Profil1
* PROFILE LIST
   * Antwort: 1. ` Profil1 ` 2. ` Profil2 `
* PROFILE 1
   * Antwort: Um zum Profil 1 mit 100% zu wechseln, antworte mit Code Any
* PROFILE 2 30
   * Antwort: Um zum Profil 2 mit 30% zu wechseln, antworte mit Code Any

Andere
-----
* BEHANDLUNGEN-REFRESH
   * Antwort: Behandlungen von NS aktualisieren
* NSCLIENT RESTART
   * Antwort: NSCLIENT RESTART 1 receivers
* PUMPE
   * Antwort: Letzte Verbindung: vor 1 Min. Temp: 0.00E/h @11:38 5/30min IOB: 0.5E Reserv: 34E Batt: 100

Problembehandlung
=====
Es gab einen Hinweis, dass nach einem Update die SMS Kommandos auf einem Galaxy S10 nicht mehr funktioniert haben. Dies konnte durch Abschalten der Option 'als chat message senden' behoben werden.

.. image:: ../images/SMSdisableChat.png
  :alt: SMS als Chatnachricht deaktivieren
