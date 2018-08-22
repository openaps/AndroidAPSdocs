# SMS příkazy

Ve vašem Android telefonu běžte do jeho systémového nastavení, pak do Aplikace > AndroidAPS > Oprávnění a povolte SMS

V AndroidPAS běžte do Nastavení > SMS komunikátor a zadejte telefonní číslo/čísla, ze kterých chcete povolit příchozí SMS příkazy a také povolte "Povolit posílání příkazů přes SMS"

Z některého z povolených čísel odešlete SMS zprávu na telefon s běžícím AndroidAPS a do zprávy zadejte některý z níže **tučně** zapsaných příkazů. Telefon vám odpoví, aby potvrdil úspěšné provedení daného příkazu anebo vrátí požadované stavové informace.

## BG

- Poslední glykémie: 5.6 před 4 min, Rozdíl: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Bazál: 0.10U)

## LOOP STOP/DISABLE

- Smyčka byla zakázána

## LOOP START/ENABLE

- Smyčka byla povolena

## LOOP STATUS

- Loop is disabled
- Loop is enabled
- Suspended (10 min)

## LOOP SUSPEND 20

- Loop suspended for 20 minutes

## LOOP RESUME

- Loop resumed

## TREATMENTS REFRESH

- TERATMENTS REFRESH 1 receivers

## NSCLIENT RESTART

- NSCLIENT RESTART 1 receivers

## DANAR / PUMP (since 1.60)

- Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100

## BASAL STOP/CANCEL

- To stop temp basal reply with code EmF

## BASAL 0.3

- To start basal 0.3U/h reply with code Swe
- Remote basal setting is not allowed (if remote commands not allowed)

## BOLUS 1.2

- To deliver bolus 1.2U reply with code Rrt
- Remote bolus not allowed (*if within 15 min after last bolus command or remote commands not allowed*)

## CAL 5.6

- To send calibration 5.6 reply with code Rrt
- Calibration sent (*if xDrip is installed. Accepting calibrations must be enabled in xDrip+*)