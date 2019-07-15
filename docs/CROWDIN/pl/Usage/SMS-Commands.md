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

- Ostatnie połączenie: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100

## BASAL STOP/CANCEL

- Aby zatrzymać dawkę bazową lub anulować bazę tymczasową, odpowiedz za pomocą kodu EmF

## BASAL 0.3

- Aby rozpocząć dawkę bazową 0.3U/h odpowiedz kodem Swe

## BASAL 0.3 20

- Aby rozpocząć dawkę bazową 0.3U/h przez 20 min odpowiedz kodem Swe

## Basal 30%

- Aby rozpocząć dawkę bazową 30% odpowiedz kodem Swe (przykład kodu)

## Basal 30% 50

- Aby rozpocząć dawkę bazową 30% przez 50 min odpowiedz kodem Swe (przykład kodu)

## Bolus 1.2

- Aby dostarczyć bolusa 1,2U odpowiedz z kodem Rrt (przykład kodu)
- Bolus zdalny jest niedozwolony (* w ciągu 15 minut po ostatnim bolusie lub jeśli zdalne poleceniach nie są dozwolone </ 0>)</li> </ul> 
    
    ## EXTENDED STOP/CANCEL
    
    - Aby zatrzymać bolus przedłużony wprowadź kod EmF (przykład kodu)
    
    ## EXTENDED 2 120
    
    - Aby rozpocząć przedłużony bolus 2U na 120 min, odpowiedz kodem EmF
    
    ## CAL 5.6
    
    - Aby wysłać kalibrację 5.6 odpowiedz kodem Rrt (przykład kodu)
    - Calibration sent (*if xDrip is installed. Accepting calibrations must be enabled in xDrip+*)
    
    ## PROFILE STATUS
    
    - Profile1
    
    ## PROFILE LIST
    
    - 1.`Profile1` 2.`Profile2`
    
    ## PROFILE 1
    
    - To switch profile to Profile1 100% reply with code Any
    
    ## PROFILE 2 30
    
    - To switch profile to Profile2 30% reply with code Any