# SMS-Befehle
Wenn du diese Option aktivierst (linker Haken), dann kann AAPS bestimmte Befehle per SMS erhalten. Dies ist sinnvoll z.B. bei Kindern, die von ihren Eltern überwacht und behandelt werden.

Gehe dazu in den Systemeinstellungen deines Android-Telefones zu Apps > AndroidAPS > Berechtigungen und aktiviere dort SMS.

In AndroidAPS gehe zu Konfigurations-Generator > Generell > SMS-Kommunikator  und trage unter Einstellungen (Zahnrädchen) die Telefonnummer(n) ein, die dazu berechtigt werden soll(en), Kommandos an AndroidAPS zu senden. 'Erlaube externe Befehle per SMS' muss außerdem aktiviert werden.

Sende von einem der berechtigten Telefone eine SMS an das Android-Handy, auf dem AndroidAPS installiert ist. Sende dazu eines der folgenden **fettgedruckten** Kommandos und das Handy wird mit einer Erfolgsmitteilung oder dem angeforderten Status antworten. 

* **BG**: Letzter Blutzucker 125 vor 4min, Delta: -12mg/dl, IOB: 0.20E (Bolus: 0.10E Basal: 0.10E)
* **LOOP STOP/DISABLE**: Das „Loopen“ wurde deaktiviert
* **LOOP START/ENABLE**: Das „Loopen“ wurde aktiviert.
* **LOOP STATUS**: Das „Loopen“ ist deaktiviert / Das „Loopen“ ist aktiviert / Pausiert (10 min)
* **LOOP SUSPEND 20**: Das „Loopen“ wird für 20 Minuten unterbrochen. 
* **LOOP RESUME**: Das „Loopen“ fortsetzen
* **TREATMENTS REFRESH**: Geräte aktualisieren 1 Empfänger
* **NSCLIENT RESTART**: NSCLIENT restarten 1 Empfänger
* **DANAR**: Letzte Verbindung: vor 1 Min. Temp: 0.00E/h @11:38 5/30min IOB: 0.5E Reserv: 34E Batt: 100
* **BASAL STOP/CANCEL**: Um die temporäre Basalrate zu stoppen, antworte mit dem Code EmF
* **BASAL 0.3**: Um eine Basalrate von 0.3E/h zu starten, antworte mit Code Swe, Ferngesteuerte Basalraten-Einstellungen sind nicht erlaubt (wenn ferngesteuerte Kommandos nicht erlaubt sind)
* **BOLUS 1.2**: Um einen Bolus vo 1.2E abzugeben, antworte mit Code Rrt, Ferngesteuerte Boli sind nicht erlaubt (wenn ferngesteuerte Kommandos nicht erlaubt sind)
* **CAL 126**: Um Kalibrierungswert von 126 zu senden, antworte mit Code Rrt, Kalibrierung gesendet (wenn xSrip installiert ist. Kallibrierungen zu akzeptieren, muss in xDrip+ aktiviert sein)

**Sicherheitshinweise zur SMS-Steuerung**

* Wenn du diese Option verwendest, dann behalte im Hinterkopf was passieren könnte, falls das Handy, welches zur Fernsteuerung verwendet wird, gestohlen wird. Schütze es deshalb mit einem sicheren Bildschirm-Code.
* Seit AndroidAPS 1.1 wirst du über wichtige ferngesteuerte Aktionen (z.B. Bolus, Profiländerung) eine SMS erhalten. Deswegen solltest du mindestens 2 Telefonnummern hinzufügen (für den Fall, dass ein Handy gestohlen wird).
