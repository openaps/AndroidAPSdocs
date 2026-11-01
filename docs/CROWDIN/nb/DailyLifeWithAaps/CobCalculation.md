# COB-beregning

## Hvordan beregner AAPS COB-verdien?

Når du registrerer karbohydrater som en del av et måltid eller en karbohydratkorrigering, legger **AAPS** dem til de aktive karbohydratene (**COB**). **AAPS** beregner deretter opptaket av karbohydratene basert på observerte avvik i **BS**-verdiene dine. Opptakshastigheten avhenger av karbohydratsensitivitetsfaktoren (**CSF**). Dette er ikke en innstilling i **profilen** din, men beregnes av **AAPS** ut fra **ISF/I:C**-oppsettet. Den sier hvor mange mg/dL 1 g karbohydrater hever **BS**-verdien din.

## Karbohydratsensitivitetsfaktor

Formelen som **AAPS** bruker, er:

- absorbed_carbs = deviation * ic / isf.

Effekten på **profilen** din blir:

- _økt_ **IC** – flere karbohydrater tas opp hvert 5. minutt, og dermed blir den totale opptakstiden kortere;

- _økt_ **ISF** – færre karbohydrater tas opp hvert 5. minutt, og dermed blir den totale opptakstiden lengre; og

- _endret_ **profilprosent** – øker/reduserer begge verdiene, og påvirker derfor ikke opptakstiden for karbohydrater.

Hvis for eksempel **ISF** i **profilen** din er 100 og **I:C** er 5, blir karbohydratsensitivitetsfaktoren din 20. For hver 20 mg/dL **BS**-verdien din stiger, regner **AAPS** 1 g karbohydrater som tatt opp. Positiv **IOB** påvirker også **COB**-beregningen. Så hvis **AAPS** forventer at **BS**-verdien din skal falle 20 mg/dL på grunn av **IOB**, men den i stedet holder seg flat, regner **AAPS** også 1 g karbohydrater som tatt opp.

Karbohydrater tas også opp etter metodene beskrevet nedenfor, avhengig av hvilken sensitivitetsalgoritme som er valgt i **AAPS**.

## Karbohydratsensitivitet – Oref1

Karbohydrater som ikke er tatt opp, fjernes etter en angitt tid:

![Oref1](../images/cob_oref0_orange_II.png)

![COB-graf med Oref1-avkutting](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
Skjermbildet ovenfor er fra en eldre **AAPS**-versjon – i **AAPS** 4 ser grafene litt annerledes ut, men **COB**-grafen viser den samme informasjonen.
```


## Karbohydratsensitivitet – WeightedAverage

Opptaket beregnes slik at COB = 0 etter en angitt tid:

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

Hvis minimalt karbohydratopptak (min_5m_carbimpact) brukes i stedet for verdien beregnet fra **BS**-avvik, vises en oransje prikk på **COB**-grafen.

(CobCalculation-detection-of-wrong-cob-values)=
## Oppdaging av feil COB-verdier

**AAPS** advarer deg hvis du er i ferd med å gi bolus med **COB** fra et tidligere måltid, og algoritmen oppdager at den gjeldende **COB**-beregningen er feil. I så fall får du et ekstra hint på bekreftelsesskjermen etter at du har brukt boluskalkulatoren.

### Hvordan oppdager AAPS feil COB-verdier?

Vanligvis oppdager __AAPS__ karbohydratopptak gjennom **BS**-avvik. Hvis du har registrert karbohydrater, men **AAPS** ikke kan se opptaket av dem gjennom **BS**-avvik, bruker det i stedet metoden [min_5m_carbimpact](#Preferences-min_5m_carbimpact) til å beregne opptaket (såkalt «fallback»). Siden denne metoden bare beregner det minimale karbohydratopptaket uten å ta hensyn til **BS**-avvik, kan den gi feil COB-verdier.

![Hint om feil COB-verdi](../images/Calculator_SlowCarbAbsorption.png)

I skjermbildet ovenfor ble karbohydratopptaket 66 % av tiden beregnet med min_5m_carbimpact i stedet for verdien som ble funnet fra avvik. Dette tyder på at du kan ha hatt mindre **COB** enn algoritmen beregnet.

### Hva gjør du med denne advarselen?

- Vurder å avbryte behandlingen – trykk på «Avbryt» i stedet for OK.
- Beregn det kommende måltidet på nytt med boluskalkulatoren, uten hake ved **COB**.
- Hvis du trenger en korreksjonsbolus, registrerer du den manuelt.
- Vær forsiktig så du ikke overdoserer eller stabler insulin!


### Hvorfor beregner ikke algoritmen COB riktig?

Dette kan skyldes:
- Du kan ha overvurdert karbohydratene da du registrerte dem.
- Aktivitet / trening etter forrige måltid.
- I:C må justeres.
- Verdien for min_5m_carbimpact er feil (anbefalt er 8 med SMB, 3 med AMA).


## Manuell korrigering av registrerte karbohydrater

Hvis karbohydratene er over- eller undervurdert, kan dette korrigeres i skjermen **Behandlingshistorikk**, som beskrevet [her](#screens-bolus-carbs).


## Karbohydratkorrigering – slik sletter du en karbohydratoppføring fra Behandlinger


Skjermen **Behandlingshistorikk** kan brukes til å korrigere en feil karbohydratoppføring ved å slette den. Dette kan skyldes at du over- eller undervurderte karbohydratene du registrerte:

![Slette en karbohydratoppføring fra Behandlingshistorikk](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Sjekk og husk gjeldende **COB** og **IOB** på hovedskjermen i **AAPS**.
2. Åpne **Behandlingshistorikk** (sidemenyen → *Behandlingshistorikk*), fanen **Karbo og bolus**. Avhengig av pumpen kan karbohydratene vises sammen med insulin på én linje, eller som en egen oppføring (for eksempel med Dana RS).
3. **Trykk og hold** på den feilaktige karbohydratoppføringen – listen går over i **valgmodus** med en avkrysningsboks på hver linje, og oppføringen får en hake (merket **1** ovenfor). Sett hake ved eventuelle andre oppføringer du også vil fjerne.
4. Trykk på **🗑 Slett**-ikonet i topplinjen (merket **2**) og bekreft – bekreftelsesdialogen viser nøyaktig hva som blir fjernet.
5. Sjekk at karbohydratene faktisk er fjernet ved å se på **COB** på hovedskjermen i **AAPS** igjen.
6. Gjør det samme for **IOB** hvis det bare er én linje som inneholder både karbohydrater og insulin.
7. Hvis karbohydratene ikke blir fjernet slik du ville, og du legger til nye karbohydrater som beskrevet i dette avsnittet, blir **COB** for høy, og det kan føre til at **AAPS** gir for mye insulin.
8. Registrer riktig mengde karbohydrater via dialogen **Karbo** (**Behandlinger** → **Karbo**) og sett riktig tidspunkt for hendelsen.
9. Hvis det bare var én linje med både karbohydrater og insulin, må du også legge inn insulinmengden på nytt. Pass på å sette riktig tidspunkt for hendelsen, og sjekk **IOB** på hovedskjermen etter at du har bekreftet den nye oppføringen.

