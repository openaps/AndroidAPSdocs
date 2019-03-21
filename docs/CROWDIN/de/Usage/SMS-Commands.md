# SMS-Befehle

Gehe dazu in den Systemeinstellungen deines Android-Telefones zu Apps > AndroidAPS > Berechtigungen und aktiviere dort SMS

In AndroidAPS gehst du zu Einstellungen > SMS-Kommunikator und trägst die Telefonnummer(n) ein, die dazu berechtigt werden soll(en), Kommandos an AndroidAPS zu senden, mehrere Nummern werden dabei durch Semikolons ohne weitere Leerzeichen getrennt (z.B. +4912345678;+4912345679). ‘Erlaube externe Befehle per SMS’ muss außerdem aktiviert werden

Sende von einem der berechtigten Telefone eine SMS an das Android-Handy, auf dem AndroidAPS installiert ist. Sende dazu eines der folgenden **fettgedruckten** Kommandos und das Handy wird mit einer Erfolgsmitteilung oder dem angeforderten Status antworten.

Any message not starting with a letter is ignored

## @How are you?

## #Are you ok?

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

- To start basal 0.3U/h for 30 min reply with code Swe

## BASAL 0.3 20

- To start basal 0.3U/h for 20 min reply with code Swe

## BASAL 30%

- To start basal 30% for 30 min reply with code Swe

## BASAL 30% 50

- To start basal 30% for 50 min reply with code Swe

## BOLUS 1.2

- To deliver bolus 1.2U reply with code Rrt
- Remote bolus not allowed (*if within 15 min after last bolus command or remote commands not allowed*)

## EXTENDED STOP/CANCEL

- To stop extended bolus reply with code EmF

## EXTENDED 2 120

- To start extended bolus 2U for 120 min reply with code EmF

## CAL 5.6

- To send calibration 5.6 reply with code Rrt
- Calibration sent (*if xDrip is installed. Accepting calibrations must be enabled in xDrip+*)

## PROFILE STATUS

- Profile1

## PROFILE LIST

- 1.`Profile1` 2.`Profile2`

## PROFILE 1

- To switch profile to Profile1 100% reply with code Any

## PROFILE 2 30

- To switch profile to Profile2 30% reply with code Any