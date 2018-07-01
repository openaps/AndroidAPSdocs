Generell
===============

SMS-Kommunikator
~~~~~~~~~~~~~~~~~~~~

Gehe in deinen Einstellungen im  Android-Telefon zu Apps > AndroidAPS > Berechtigungen und aktiviere dort SMS.

In AndroidAPS gehe zu Preferences > SMS Communicator und trage die Telefonnummer(n) ein, die dazu berechtigt werden soll(en), Kommandos an AndroidAPS senden zu dürfen. ‚Allow remote commands via SMS' muss außerdem aktiviert warden.

Sende von einem der berechtigten Telefone eine SMS an das Android-Handy, auf de AndroidAPS installiert ist. Sende dazu einen der folgenden **fettgedruckten** Kommandos und das Handy wird mit einer Erfolgsmittelung oder dem angeforderten Status antworten. 

## BG
- Letzter Blutzucker 125 vor 4min, Delta: -12mg/dl, IOB: 0.20E (Bolus: 0.10E Basal: 0.10E)
## LOOP STOP/DISABLE
- Das „Loopen“ wurde deaktiviert
## LOOP START/ENABLE
- Das „Loopen“ wurde aktiviert.
## LOOP STATUS
- Das „Loopen“ ist deaktiviert
- Das „Loopen“ ist aktiviert
- Pausiert (10 min)
## LOOP SUSPEND 20
- Das „Loopen“ wird für 20 Minuten unterbrochen. 
## LOOP RESUME
- Das „Loopen“ fortsetzen
## TREATMENTS REFRESH
- Geräte aktualisieren 1 Empfänger
## NSCLIENT RESTART
- NSCLIENT restarten 1 Empfänger
## DANAR
- Letzte Verbindung: vor 1 Min. Temp: 0.00E/h @11:38 5/30min IOB: 0.5E Reserv: 34E Batt: 100
## BASAL STOP/CANCEL
- Um die temporäre Basalrate zu stoppen, antworte mit dem Code EmF
## BASAL 0.3
- Um eine Basalrate von 0.3E/h zu starten, antworte mit Code Swe
- Ferngesteuerte Basalraten-Einstellungen sind nicht erlaubt (wenn ferngesteuerte Kommandos nicht erlaubt sind)
## BOLUS 1.2
- Um einen Bolus vo 1.2E abzugeben, antworte mit Code Rrt
- Ferngesteuerte Boli sind nicht erlaubt (wenn ferngesteuerte Kommandos nicht erlaubt sind)
## CAL 126
- Um Kalibrierungswert von 126 zu senden, antworte mit Code Rrt
- Kalibrierung gesendet (wenn xSrip installiert ist. Kallibrierungen zu akzeptieren, muss in xDrip+ aktiviert sein)

Smartwatch-Integration
~~~~~~~~~~~~~~~~~~~~~~

In AndroidAPS ist es möglich, dass man die Pumpe über Android Wear Uhren kontrolliert. Um diese Möglichkeit zu nutzen, musst du beim [kompilieren der App](https://github.com/MilosKozak/AndroidAPS/wiki/APK-erstellen_de) die Build Variante "fullWearcontrolRelease" wählen. In AndroidAPS, im Config Builder, musst du dann noch enable Wear aktivieren. Es gibt verschiedene Watchfaces zum auswählen, enthalten sind durchschnittliches Delta, IOB, zur Zeit aktive Temp.Basalrate, das Basalprofil, und deine BZ Werte. Du kannst die AndroidAPS Watch App, auch verwenden, um ein Temp Target zu setzen, Bolus ab zu geben, den Bolus Wizard verwenden, Infusionset füllen, und den Status vom Loop und der Pumpe kontrollieren. Stelle sicher, dass AndroidAPS die Erlaubnis hat, um Benachrichtigungen auf der Uhr anzuzeigen (sonst kann man die Eingaben nicht bestätigen). Die Eingaben werden bestätigt in dem man die Benachrichtigung auf der Uhr öffnet, einmal wischt und bestätigt. Um schneller zu AAPS zu kommen, kannst du den angezeigten BZ doppelt anklicken. Wenn man zwei mal auf die BZ-Kurve tippt, ändert sich der angezeigte Zeitraum.

In Android Wear 2.0 installiert sich das Watchface nicht von alleine. Du musst in den Playstore der Uhr gehen, und unter der Kategorie "installierte Apps auf dem Handy" AAPS aktivieren. Aktiviere ebenalls Auto Update.

Falls du ein anderes System zum loopen verwendest und deine Daten, oder die deines Kindes/Verwandten, auf der Uhr sehen möchtest, kannst du, auch einfach nur die Watch APK kompilieren. Um nur die Watch APK zu kompilieren folge der [Anleitung](https://github.com/MilosKozak/AndroidAPS/wiki/APK-erstellen_de), und wähle die Build Variante "nsclientWearRelease".

Pebble Nutzer können das [Urchin watchface](https://github.com/mddub/urchin-cgm) benutzen um ihre Loop Daten (vorausgesetzt sie sind auf Nightscout) zu sehen, aber mit dieser Methode ist es nicht möglich die Pumpe und AndroidAPS zu steuern. Du kannst Felder wählen um, z.B. IOB, aktiver temp. Basalrate und Vorhersage, anzeigen zu lassen. Falls du open loopst kannst du [IFTTT](https://ifttt.com/) benutzen um ein kleines Programm erstellen, welches bestimmt, wenn eine Benachrichtigungen von AndroidAPS kommt, eine SMS oder Benachrichtigung anzeigt.
