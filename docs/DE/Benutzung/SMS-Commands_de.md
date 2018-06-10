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

