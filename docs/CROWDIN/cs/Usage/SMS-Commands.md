# SMS příkazy

### Obejití chyby v AndroidAPS 2.3

Poznámka: v AndroidAPS verze 2.3 jsou SMS příkazy kvůli chybě zakázány. Ve verzi 2.4 ale fungují.

Pokud musíte používat SMS příkazy, můžete použít následující pracovní postup:

- Export settings
- Stáhněte AndroidAPS verzi 2.2 (instalací verze 2.2 APK)
- Udělejte nastavení SMS v AndroidAPS 2.2.
- Upgrade to AndroidAPS 2.3. SMS command settings will not be accessible there.

## Bezpečnost především

- AndroidAPS vám umožňuje kontrolovat telefon vašeho dítěte na dálku prostřednictvím textových zpráv. Pokud povolíte SMS komunikátor, vždy pamatujte na to, že telefon nastavený k vydávání vzdálených příkazů, může být ukraden. Proto vždy chraňte telefon alespoň pomocí kódu PIN.
- Systém AndroidAPS vás rovněž bude informovat textovou zprávou o tom, jestli váš vzdálený příkaz, např. bolus nebo změna profilu, byl proveden. Je proto vhodné nastavit, aby byly potvrzovací zprávy odesílány alespoň na dvě různá telefonní čísla pro případ, že by došlo ke zcizení jednoho z rodičovských telefonů.

## Jak to funguje

Ve vašem Android telefonu běžte do jeho systémového nastavení, pak do Aplikace > AndroidAPS > Oprávnění a povolte SMS

V AndroidAPS jděte do Nastavení > SMS komunikátor a zadajte telefonní čísla, ze kterých umožníte SMS příkazy (oddělené středníkem, žádné mezery nebo jiné znaky kdekoliv - tj. +4412345678;+4412345679) a také povolte "Povolit posílání příkazů prostřednictvím SMS".

Z některého z povolených čísel odešlete SMS zprávu na telefon s běžícím AndroidAPS a do zprávy zadejte některý z níže **tučně** zapsaných příkazů. Telefon vám odpoví, aby potvrdil úspěšné provedení daného příkazu anebo vrátí požadované stavové informace.

**Tip**: Jestliže budete posílat větší množství SMS, je výhodné mít na obou mobilech SMS paušál.

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

## PUMP

- Posl. spojení: 1 min zpět Doč. bazál: 0.00U/h @11:38 5/30min IOB: 0.5U Zás: 34U Baterie: 100

## BASAL STOP/CANCEL

- Na ukončení bazálu odpověz SMS s kódem EmF

## BASAL 0.3

- Pro spusteni bazalu 0.3U/h na 30 min odpovezte SMS s kodem Swe

## BASAL 0.3 20

- Pro spusteni bazalu 0.3U/h na 20 min odpovezte SMS s kodem Swe

## BASAL 30%

- Pro spuštění bazálu 30% na 30 min odpovězte SMS s kódem

## BASAL 30% 50

- Pro spusteni bazalu 30% na 50 min odpovezte SMS s kódem Swe

## BOLUS 1.2

- K potvzení bolusu 1.2U odpověz SMS s kódem Rrt
- Vzdálený bolus není momentálně povolen (*pokud ještě neuplynulo 15 minut od posledního bolus příkazu anebo pokud nejsou vzdálené příkazy povoleny*)

## EXTENDED STOP/CANCEL

- Na zastavení prodlouženého bolusu odpovězte SMS s kódem EmF

## EXTENDED 2 120

- Pro spuštění prodlouženého bolusu 2U na 120 min odpovězte SMS s kódem EmF

## CAL 5.6

- Odeslání kalibrace 5.6 potvrďte kódem Rrt
- Kalibrace odeslána(*jestliže je xDrip nainstalovaný. Příjem kalibrací musí být v xDrip+ povolen.*)

## PROFILE STATUS

- Profile1

## PROFILE LIST

- 1.`Profile1` 2.`Profile2`

## PROFILE 1

- Pro přepnutí profilu na Profile1 100% odpovězte SMS s kódem Any

## PROFILE 2 30

- Pro přepnutí profilu na Profile2 30% odpovězte SMS s kódem Any