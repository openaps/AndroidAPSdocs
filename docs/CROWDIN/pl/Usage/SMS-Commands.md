# SMS Commands

In your android phone setting go to Applications > AndroidAPS > Permissions and enable SMS

In AndroidAPS go to Preferences > SMS Communicator and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons, no spaces or other characters anywhere - i.e. +4412345678;+4412345679) and also enable 'Allow remote commands via SMS'.

Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the commands below in **bold**, the phone will respond to confirm success of command or status requested.

## BG

- Last BG: 5.6 4min ago, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)

## LOOP STOP/DISABLE

- Loop has been disabled

## LOOP START/ENABLE

- Loop has been enabled

## LOOP STATUS

- Loop is disabled
- Pętla jest włączona
- Wstrzymana (10 min)

## LOOP SUSPEND 20

- Pętla wstrzymana na 20 minut

## LOOP RESUME

- Pętla wznowiona

## TREATMENTS REFRESH

- TERATMENTS REFRESH 1 receivers

## NSCLIENT RESTART

- NSCLIENT RESTART 1 receivers

## PUMP

- Ostatnie połączenie: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100

## BASAL STOP/CANCEL

- Aby zatrzymać dawkę bazową lub anulować bazę tymczasową, odpowiedz za pomocą kodu EmF

## BASAL 0.3

- Aby rozpocząć dawkę bazową 0.3U/h odpowiedz kodem Swe

## BASAL 0.3 20

- Aby rozpocząć dawkę bazową 0.3U/h przez 20 min odpowiedz kodem Swe

## Baza 30%

- To start basal 30% for 30 min reply with code Swe

## Baza 30% 50

- To start basal 30% for 50 min reply with code Swe

## Bolus 1.2

- Aby dostarczyć bolusa 1,2U odpowiedz z kodem Rrt (przykład kodu)
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