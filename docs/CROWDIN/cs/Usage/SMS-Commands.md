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

- Poslední spoj: před 1 min Doč. bazál: 110% na 2/30 min IOB: 0.5U Zásobník: 34U Baterie: 100%

## BASAL STOP/CANCEL

- Pro zastaveni docasneho bazalu odpovezte SMS s kodem EmF

## BASAL 0.3

- Pro spusteni bazalu 0.3U/h odpovezte SMS s kodem Swe

## BASAL 0.3 20

- Pro spusteni bazalu 0.3U/h na 20 min odpovezte SMS s kodem Swe

## BASAL 30%

- Pro spusteni bazalu 30% na 30 min odpovezte SMS s kodem Swe

## BASAL 30% 50

- Pro spusteni bazalu 30% na 50 min odpovezte SMS s kódem Swe

## BOLUS 1.2

- Pro potvrzeni bolusu 1.2U odpovezte SMS s kodem Rrt
- Vzdálený bolus není povolen (*pokud ještě neuplynulo 15 minut od posledního bolus příkazu, anebo pokud nejsou vzdálené příkazy povoleny*)

## EXTENDED STOP/CANCEL

- Pro zastaveni prodlouzeneho bolusu odpovezte SMS ve tvaru EmF

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