# Komunikator SMS

W ustawieniach swojego telefonu z systemem Android wybierz Aplikacje > AndroidAPS > Uprawnienia i włącz SMS-y

W AndroidAPS przejdź do Preferencje > Komunikator SMS i wprowadź numer(y) telefonu, z którego będziesz mógł korzystać do wydawania poleceń SMS (oddzielone średnikami), a także włącz "Zezwalaj na zdalne polecenia przez SMS"

Wyślij SMS-a na telefon z uruchomionym AndroidAPS z któregokolwiek zatwierdzonego numeru telefonu używając dowolnego z poniższych **pogrubionych** poleceń, telefon odpowie, potwierdzając powodzenie żądanego polecenia lub jego status.

## BG

- Ostatnia wartość glikemii np.: 120 4min ago, Delta: -2 mg/dl, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)

## LOOP STOP/DISABLE

- Pętla została wyłączona

## LOOP START/ENABLE

- Pętla została włączona

## LOOP STATUS

- Pętla jest wyłączona
- Pętla jest włączona
- Wstrzymana (10 min)

## LOOP SUSPEND 20

- Pętla wstrzymana na 20 minut

## LOOP RESUME

- Pętla wznowiona

## TREATMENTS REFRESH

- Odśwież zabiegi 1 odbiorca

## NSCLIENT RESTART

- NSCLIENT RESTART 1 odbiorca

## PUMP

- Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100

## BASAL STOP/CANCEL

- To stop temp basal reply with code EmF

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