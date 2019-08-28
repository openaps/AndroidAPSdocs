# SMS-Befehle

**Hinweis**: Die Einstellungen der SMS-Befehle sind in AndroidAPS Versionen 2.3 wegen eines Fehlers deaktiviert, können aber ab Version 2.4 erneut verwendet werden.

## Sicherheitshinweise

- AndroidAPS erlaubt es Dir, das Smartphone eines Kindes über SMS-Nachricht aus der Ferne zu steuern. Wenn Du diesen SMS-Kommunikator aktivierst, denke immer daran, dass das Telefon, das für Remote-Befehle eingerichtet ist, gestohlen werden kann. Schütze dieses mit einem zumindest mit einem sicheren PIN-Code.
- AndroidAPS gibt Rückmeldung per SMS, wenn Deine Remote-Befehle, wie z.B. ein Bolus oder eine Profiländerung, ausgeführt wurden. Es ist ratsam, dies so einzustellen, dass Bestätigungstexte an mindestens zwei verschiedene Telefonnummern gesendet werden, falls eines der Empfangstelefone gestohlen wird.

## Funktionsweise

Gehe dazu in den Systemeinstellungen deines Android-Telefones zu Apps > AndroidAPS > Berechtigungen und aktiviere dort SMS.

In AndroidAPS gehst du zu Einstellungen > SMS-Kommunikator und trägst die Telefonnummer(n) ein, die dazu berechtigt werden soll(en), Kommandos an AndroidAPS zu senden, mehrere Nummern werden dabei durch Semikolons ohne weitere Leerzeichen getrennt (z.B. +4912345678;+4912345679). ‘Erlaube externe Befehle per SMS’ muss außerdem aktiviert werden

Sende von einem der berechtigten Telefone eine SMS an das Android-Handy, auf dem AndroidAPS installiert ist. Sende dazu eines der folgenden **fettgedruckten** Kommandos und das Handy wird mit einer Erfolgsmitteilung oder dem angeforderten Status antworten.

**Hinweis**: Eine SMS-Flat auf beiden Telefonen kann nützlich sein, da u.U. viele SMS hin und her gesandt werden.

## BZ

- Letzter Blutzucker 125 vor 4min, Delta: -12mg/dl, IOB: 0.20E (Bolus: 0.10E Basal: 0.10E)

## LOOP STOP/DISABLE

- Loop wurde deaktiviert.

## LOOP START/ENABLE

- Lopp wurde aktiviert

## LOOP STATUS

- Loop ist deaktiviert.
- Loop ist aktiviert.
- Pausiert (10 Min)

## LOOP SUSPEND 20

- Das Loopen wird für 20 Minuten unterbrochen

## LOOP RESUME

- Loop wurde fortgesetzt

## TREATMENTS REFRESH

- TERATMENTS REFRESH 1 receivers

## NSCLIENT RESTART

- NSCLIENT RESTART 1 receivers

## PUMP

- Letzte Verbindung: vor 1 Min. Temp: 0.00E/h @11:38 5/30min IOB: 0.5E Reserv: 34E Batt: 100

## BASAL STOP/CANCEL

- Um die temporäre Basalrate zu stoppen, antworte mit dem Code EmF

## BASAL 0.3

- Um für 30 Minuten eine temporäre Basalrate mit 0,3 IE pro Stunde zu starten, antworte mit dem Code Swe

## BASAL 0.3 20

- Um für 20 Minuten eine temporäre Basalrate mit 0,3 IE pro Stunde zu starten, antworte mit dem Code Swe

## BASAL 30%

- Um für 30 Minuten eine temporäre Basalrate mit 30% zu starten, antworte mit dem Code Swe

## BASAL 30% 50

- Um für 50 Minuten eine temporäre Basalrate mit 50% zu starten, antworte mit dem Code Swe

## BOLUS 1.2

- Um einen Bolus vo 1.2E abzugeben, antworte mit Code Rrt
- Ferngesteuerte Boli sind nicht erlaubt (*falls innerhalb von 15 Minuten nach dem letzten Bolusbefehl oder wenn ferngesteuerte Kommandos nicht erlaubt sind*)

## EXTENDED STOP/CANCEL

- Um den verzögerten Bolus zu stoppen, antworte mit dem Code EmF

## EXTENDED 2 120

- Um einen verzögertenen Bolus von 2 IE über 120 Minuten zu starten, antworte mit dem Code EmF

## CAL 5.6

- Um einen Kalibrierungswert von 5,6 zu senden, antworte mit Code Rrt
- Kalibrierung gesendet (*wenn xDrip installiert ist. In xDrip+ muss "Kalibrierungen akzeptieren" aktiviert sein*)

## PROFILE STATUS

- Profile1

## PROFILE LIST

- 1.`Profile1` 2.`Profile2`

## PROFILE 1

- Um zum Profil 1 mit 100% zu wechseln, antworte mit Code Any

## PROFILE 2 30

- Um zum Profil 2 mit 30% zu wechseln, antworte mit Code Any