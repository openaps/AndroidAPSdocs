# SMS-Befehle

Gehe dazu in den Systemeinstellungen deines Android-Telefones zu Apps > AndroidAPS > Berechtigungen und aktiviere dort SMS

In AndroidAPS go to Preferences > SMS Communicator and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons, no spaces or other characters anywhere - i.e. +4412345678;+4412345679) and also enable 'Allow remote commands via SMS'.

Sende von einem der berechtigten Telefone eine SMS an das Android-Handy, auf dem AndroidAPS installiert ist. Sende dazu eines der folgenden **fettgedruckten** Kommandos und das Handy wird mit einer Erfolgsmitteilung oder dem angeforderten Status antworten.

## BG

- Letzter Blutzucker 125 vor 4min, Delta: -12mg/dl, IOB: 0.20E (Bolus: 0.10E Basal: 0.10E)

## LOOP STOP/DISABLE

- Das Loopen wurde deaktiviert

## LOOP START/ENABLE

- Das Loopen wurde aktiviert

## LOOP STATUS

- Das Loopen ist deaktiviert
- Das Loopen ist aktiviert
- Pausiert (10 Min)

## LOOP SUSPEND 20

- Das Loopen wird für 20 Minuten unterbrochen

## LOOP RESUME

- Das Loopen fortsetzen

## TREATMENTS REFRESH

- Geräte aktualisieren 1 Empfänger

## NSCLIENT RESTART

- NSCLIENT neu starten 1 Empfänger

## DANAR / PUMP (since 1.60)

- Letzte Verbindung: vor 1 Min. Temp: 0.00E/h @11:38 5/30min IOB: 0.5E Reserv: 34E Batt: 100

## BASAL STOP/CANCEL

- Um die temporäre Basalrate zu stoppen, antworte mit dem Code EmF

## BASAL 0.3

- Um eine Basalrate von 0.3E/h zu starten, antworte mit Code Swe
- Ferngesteuerte Basalraten-Einstellungen sind nicht erlaubt (wenn ferngesteuerte Kommandos nicht erlaubt sind)

## BOLUS 1.2

- Um einen Bolus vo 1.2E abzugeben, antworte mit Code Rrt
- Ferngesteuerte Boli sind nicht erlaubt (*falls innerhalb von 15 Minuten nach dem letzten Bolusbefehl oder wenn ferngesteuerte Kommandos nicht erlaubt sind*)

## CAL 5.6

- Um Kalibrierungswert von 126 zu senden, antworte mit Code Rrt
- Kalibrierung gesendet (*wenn xDrip installiert ist. In xDrip+ muss "Kalibrierungen akzeptieren" aktiviert sein*)