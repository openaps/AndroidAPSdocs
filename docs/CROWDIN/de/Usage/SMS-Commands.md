# SMS-Befehle

Gehe dazu in den Systemeinstellungen deines Android-Telefones zu Apps > AndroidAPS > Berechtigungen und aktiviere dort SMS

In AndroidAPS gehst du zu Einstellungen > SMS-Kommunikator und trägst die Telefonnummer(n) ein, die dazu berechtigt werden soll(en), Kommandos an AndroidAPS zu senden, mehrere Nummern werden dabei durch Semikolons ohne weitere Leerzeichen getrennt (z.B. +4912345678;+4912345679). ‘Erlaube externe Befehle per SMS’ muss außerdem aktiviert werden

Sende von einem der berechtigten Telefone eine SMS an das Android-Handy, auf dem AndroidAPS installiert ist. Sende dazu eines der folgenden **fettgedruckten** Kommandos und das Handy wird mit einer Erfolgsmitteilung oder dem angeforderten Status antworten.

## BZ

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

## PUMP

- Letzte Verbindung: vor 1 Min. Temp: 0.00E/h @11:38 5/30min IOB: 0.5E Reserv: 34E Batt: 100

## BASAL STOP/CANCEL

- Um die temporäre Basalrate zu stoppen, antworte mit dem Code EmF

## BASAL 0.3

- Um eine Basalrate mit 0,3 IE pro Stunde zu starten, antworte mit dem Code Swe

## BASAL 0.3 20

- Um für 20 Minuten eine temporäre Basalrate mit 0,3 IE pro Stunde zu starten, antworte mit dem Code Swe

## BASAL 30%

- Um für 30 Minuten eine temporäre Basalrate mit 30% zu starten, antworte mit dem Code Swe

## BASAL 30% 50

- Um für 50 Minuten eine temporäre Basalrate mit 50% zu starten, antworte mit dem Code Swe

## BOLUS 1.2

- Um einen Bolus von 1,2 IE abzugeben, antworte mit dem Code Rrt
- Remote-Bolus wird nicht zugelassen *wenn innerhalb von 15 Minuten nach dem letzten Bolus-Befehl oder wenn Remote-Befehle grundsätzlich nicht erlaubt sind*.

## EXTENDED STOP/CANCEL

- Um den verzögerten Bolus zu stoppen, antworte mit dem Code EmF

## EXTENDED 2 120

- Um einen verzögertenen Bolus von 2 IE über 120 Minuten zu starten, antworte mit dem Code EmF

## CAL 5.6

- Um einen Kalibrierungswert von 5,6 zu senden, antworte mit Code Rrt
- Kalibrierung gesendet (*wenn xDrip installiert ist. In xDrip+ muss "Kalibrierungen akzeptieren" aktiviert sein*.)

## PROFILE STATUS

- Profile1

## PROFILE LIST

- 1.`Profile1` 2.`Profile2`

## PROFILE 1

- Um zum Profil 1 mit 100% zu wechseln, antworte mit Code Any

## PROFILE 2 30

- Um zum Profil 2 mit 30% zu wechseln, antworte mit Code Any