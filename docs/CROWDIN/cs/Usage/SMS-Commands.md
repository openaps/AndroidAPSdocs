# SMS příkazy

**Poznámka**: v AndroidAPS verze 2.3 jsou SMS příkazy kvůli bugu zakázány. Ve verzi 2.4 ale fungují.

## Bezpečnost především

- AndroidAPS vám umožňuje kontrolovat telefon vašeho dítěte na dálku prostřednictvím textových zpráv. Pokud povolíte SMS komunikátor, vždy pamatujte na to, že telefon nastavený k vydávání vzdálených příkazů, může být ukraden. Proto vždy chraňte telefon alespoň pomocí kódu PIN.
- Systém AndroidAPS vás rovněž bude informovat textovou zprávou o tom, jestli váš vzdálený příkaz, např. bolus nebo změna profilu, byl proveden. Je proto vhodné nastavit, aby byly potvrzovací zprávy odesílány alespoň na dvě různá telefonní čísla pro případ, že by došlo ke zcizení jednoho z rodičovských telefonů.

## Jak to funguje

Ve vašem Android telefonu přejděte do systémového nastavení, pak Aplikace > AndroidAPS > Oprávnění, a povolte SMS

V AndroidAPS jděte do Nastavení > SMS komunikátor a zadejte telefonní čísla, ze kterých umožníte SMS příkazy (oddělené středníkem, žádné mezery nebo jiné znaky kdekoliv - tj. +4412345678;+4412345679) a také povolte 'Povolit posílání příkazů prostřednictvím SMS'.

Z některého z povolených čísel odešlete SMS zprávu na telefon s běžícím AndroidAPS a do zprávy zadejte některý z níže **tučně** zapsaných příkazů. Telefon vám odpoví, aby potvrdil úspěšné provedení daného příkazu nebo vrátí požadované stavové informace.

**Tip**: Jestliže budete posílat větší množství SMS, je výhodné mít na obou mobilech SMS paušál.

## BG

- Glykemie: 5.6, 4min zpět, Rozdíl: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U), COB: 3g

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

- TERATMENTS REFRESH 1 receivers

## NSCLIENT RESTART

- NSCLIENT RESTART 1 receivers

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