# SMS příkazy

Ve vašem Android telefonu běžte do jeho systémového nastavení, pak do Aplikace > AndroidAPS > Oprávnění a povolte SMS

In AndroidAPS go to Preferences > SMS Communicator and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons) and also enable 'Allow remote commands via SMS'

Z některého z povolených čísel odešlete SMS zprávu na telefon s běžícím AndroidAPS a do zprávy zadejte některý z níže **tučně** zapsaných příkazů. Telefon vám odpoví, aby potvrdil úspěšné provedení daného příkazu anebo vrátí požadované stavové informace.

## BG

- Poslední glykémie: 5.6 před 4 min, Rozdíl: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Bazál: 0.10U)

## LOOP STOP/DISABLE

- Smyčka byla zakázána

## LOOP START/ENABLE

- Smyčka byla povolena

## LOOP STATUS

- Smyčka je zakázána
- Smyčka je povolena
- Pozastavena (10 minut)

## LOOP SUSPEND 20

- Smyčka pozastavena na 20 minut

## LOOP RESUME

- Smyčka obnovena

## TREATMENTS REFRESH

- TERATMENTS REFRESH 1 příjemce

## NSCLIENT RESTART

- NSCLIENT RESTART 1 příjemce

## DANAR / PUMP (od verze 1.60)

- Posl. spojení: 1 min zpět Doč. bazál: 0.00U/h @11:38 5/30min IOB: 0.5U Zás: 34U Baterie: 100

## BASAL STOP/CANCEL

- Na ukončení bazálu odpověz SMS s kódem EmF

## BASAL 0.3

- Na spuštění bazálu 0.3U/h odpověz SMS s kódem Swe
- Vzdálené posílání příkazů není povoleno (pokud nejsou vzdálené příkazy povolené)

## BOLUS 1.2

- K potvzení bolusu 1.2U odpověz SMS s kódem Rrt
- Vzdálený bolus není momentálně povolen (*pokud ještě neuplynulo 15 minut od posledního bolus příkazu anebo pokud nejsou vzdálené příkazy povoleny*)

## CAL 5.6

- Odeslání kalibrace 5.6 potvrďte kódem Rrt
- Kalibrace odeslána(*jestliže je xDrip nainstalovaný</0>). Příjem musí být v xDripu povolený.</li> </ul>