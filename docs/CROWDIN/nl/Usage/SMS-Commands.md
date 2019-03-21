# SMS-commando's

Ga in je telefoon instellingen naar Apps > AndroidAPS > Machtigingen en schakel SMS in.

In AndroidAPS ga naar Configurator, scroll naar kopje Algemeen en schakel SMS Commando's in. Ga via het tandwiel-icoontje naar de instellingen en voer het(de) telefoonnummer(s) in waar de SMS-commando's vandaan mogen komen. Meerdere nummers kun je scheiden door puntkomma's, gebruik nergens spaties of andere tekens (bijvoorbeeld +31612345678;+31612345679). Schakel ook 'Sta SMS commando's toe' in.

Stuur vanaf de zojuist ingevoerde telefoonnummer(s) één van onderstaande **vetgedrukte** SMS commando's naar de telefoon waar AndroidAPS opstaat. De telefoon zal bevestigen dat het commando of de statusverandering succesvol is doorgevoerd.

Any message not starting with a letter is ignored

## @How are you?

## #Are you ok?

## BG

- Laatste BG: 5,6, Verschil:-0,2 mmol, IOB: 0,20E (Bolus: 0,10E Basaal: 0,10E)

## LOOP STOP/DISABLE

- Loop was uitgeschakeld

## LOOP START/ENABLE

- Loop was ingeschakeld

## LOOP STATUS

- Loop is uitgeschakeld
- Loop is ingeschakeld
- Gepauzeerd (10 min)

## LOOP SUSPEND 20

- Loop wordt onderbroken gedurende 20 minuten

## LOOP RESUME

- Loop hervat

## TREATMENTS REFRESH

- TERATMENTS REFRESH 1 receivers *****LET OP: hiermee haal je behandelingen op uit Nightscout. Zorg dat je de instelling "Alleen NS upload" in de Configurator bij NSClient instellingen UIT hebt staan, anders worden al je behandelingen vervangen door 'niks' en ben je ze dus kwijt! Dat is wel weer op te lossen, maar voorkomen is beter.

## NSCLIENT RESTART

- NSCLIENT RESTART 1 receivers

## PUMP

- Laatste Verbinding: 1 min geleden Temp: 0,00E/uur @11:38 5/30min IOB: 0,5E Reservoir: 34E Batterij: 100

## BASAL STOP/CANCEL

- Om het tijdelijke basaal te stoppen antwoord met de code EmF

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