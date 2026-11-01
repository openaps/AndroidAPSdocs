(Open-APS-features-DynamicISF)=
# Dynamisk ISF (DynISF)

Til nå, med **AMA** og **SMB**, ble **ISF** definert i **profilen** og var statisk for hver definerte periode i døgnet. Men i virkeligheten er en persons **ISF** ikke så statisk, og varierer med **BS**-nivået: Ved høyt BS trenger du mer insulin for å få **BS** ned 50 mg/dL / 3 mmol/L enn du ville trengt ved lavere **BS**. [Autosens](#Open-APS-features-autosens) var den første algoritmen som prøvde å løse dette, ved å justere **ISF** utenom måltidene.

**Dynamisk ISF** (også kalt **DynISF**) har samme formål, men er mer avansert, fordi den kan brukes hele tiden. Den anbefales bare for avanserte brukere som har god kontroll på innstillingene og overvåkingen i **AAPS**. Les [Ting å tenke på når du aktiverer Dynamisk ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf) nedenfor før du prøver den.

```{admonition} CAUTION - Automations or Profile Percentage change
:class: warning

**Automasjoner** bør alltid brukes med forsiktighet. Dette gjelder særlig med **Dynamisk ISF**.

Når du bruker **Dynamisk ISF**, må du deaktivere alle midlertidige **profil**-endringer som **automasjonsregel**, fordi de ville gjøre **Dynamisk ISF** altfor aggressiv med korreksjonsboluser og føre til hypoglykemi. Dette er nettopp formålet med **Dynamisk ISF**, så det er ikke nødvendig å be **AAPS** om å gi ekstra insulin via automasjon ved høyt **BS**.

```

For å bruke **Dynamisk ISF** må databasen i **AAPS** ha minst 7 dager med **AAPS**-data fra deg.

## Hva gjør Dynamisk ISF?

**Dynamisk ISF** tilpasser insulinfølsomhetsfaktoren (**ISF**) dynamisk ut fra brukerens:

- total daglig dose insulin (**TDD**); og
- gjeldende og predikerte blodsukkerverdier.

Når du bruker **Dynamisk ISF**, brukes **ISF**-verdiene i **profilen** ikke lenger i det hele tatt, bortsett fra som «fallback» hvis det ikke er nok TDD-data i databasen til **AAPS** (*for eksempel* etter en ny installasjon av appen).

**SMB/AMA** – et eksempel på en brukers **profil** med statisk **ISF**, satt av brukeren og brukt av **SMB** og **AMA**.

![Statisk ISF](../images/DynamicISF/profile_viewer_isf.png)

**Dynamisk ISF** – et eksempel på en brukers **ISF** som endres slik **Dynamisk ISF** bestemmer.

![Dyn ISF](../images/DynamicISF/DynISF2.png)

Feltet med rød ring viser: `profile ISF` -> `ISF as calculated by DynISF`. <br/> Trykker du på dette feltet, vises en dialog med mer informasjon, for eksempel **ISF** som brukes for kalkulatoren og karbohydratopptaket (se [Annen bruk av ISF](#dynisf-other-usages-of-isf) nedenfor).

**DynISF**-verdien kan også vises i en graf: Trykk på **Legg til graf** under grafene på hovedskjermen og velg **DISF** (variabel sensitivitet, VSENS). Den vises som en hvit linje (nederst på bildet over).

## Hvordan beregnes Dynamisk ISF?

**Dynamisk ISF** bruker Chris Wilsons modell for å bestemme **ISF**, i stedet for brukerens statiske **ISF**-verdi i **profilen**. En detaljert forklaring finner du her: [Chris Wilson om insulinfølsomhet (korreksjonsfaktor) hos Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c).

Formelen for **Dynamisk ISF** som er implementert, er: `ISF = 1800 / ((TDD * DynISF Adjust Factor) * Ln (( current BG / insulin divisor) + 1 ))`

Variablene i denne formelen er forklart nedenfor.<br/> Merk: `Ln` står for naturlig logaritme, en matematisk funksjon.

Implementasjonen bruker formelen over til å beregne gjeldende **ISF**, og i oref1-[prediksjonene for **IOB**, **ZT** (zero-temping) og **UAM**](#aaps-screens-prediction-lines). Den brukes også for **COB** og i boluskalkulatoren (se [Annen bruk av ISF](#dynisf-other-usages-of-isf) nedenfor).

### TDD (total daglig dose)
TDD bruker en kombinasjon av disse verdiene:
1.  gjennomsnittlig **TDD** for 7 dager;
2.  **TDD** for dagen før; og
3.  et vektet gjennomsnitt av insulinbruken de siste åtte (8) timene, ekstrapolert til 24 timer.

**TDD** som brukes i formelen over, er vektet med en tredjedel av hver av verdiene over.

### Justeringsfaktor for Dynamisk ISF

Den settes i **Innstillinger**, og brukes til å gjøre **Dynamisk ISF** mer eller mindre aggressiv. Se avsnittet [Innstillinger](#dyn-isf-preferences) nedenfor.

### Insulindivisor
Insulindivisoren avhenger av toppen til insulinet som brukes, og er omvendt proporsjonal med topptiden. For Lyumjev er denne verdien 75, for Fiasp 65, og for vanlig hurtigvirkende insulin 55.

### ISF basert på predikert BS for doseringsbeslutninger

Dynamisk sensitivitet beregnes med verdien for **gjeldende BS**, og vises som din gjeldende ISF i **AAPS**. Men når oref1-algoritmen beregner doser, beregner og bruker den **fremtidig ISF** i stedet.

Dette gjøres for å hindre at det doseres for mye insulin når **BS** er lavt eller er predikert å bli lavt.

**Fremtidig ISF** bruker samme formel som beskrevet over, bortsett fra at den kan bruke **laveste predikerte BS** i stedet for **gjeldende BS**. **Laveste predikerte BS**, [slik det beregnes i oref1](#aaps-screens-how-predictions-become-a-dosing-decision), er den laveste verdien BS er predikert å nå i løpet av hele prediksjonsperioden.

* Hvis gjeldende **BS** er over målet  <br/> **og** **BS**-nivået er flatt, innenfor +/- 3 mg/dL:<br/>BS brukes i formelen slik: `average(minimum predicted BG, current BG)`.
* Hvis forventet **BS** (eventual BG) er over målet og glukosen stiger,<br/>  
  **eller** forventet **BS** er over gjeldende **BS**:<br/>BS brukes i formelen slik: `current BG`.
* Ellers:<br/>BS brukes i formelen slik: `minimum predicted BG`.

For en forenklet forklaring, se skjermbildet nedenfor, som illustrerer situasjonen over. Oransje prikker bruker **predikert BS**, lilla prikker bruker **gjennomsnitt(predikert BS, gjeldende BS)**, og blå prikker bruker **gjeldende BS**.

![DynISF_BGValue.png](../images/DynamicISF/DynISF_BGValue.png)

(dynisf-other-usages-of-isf)=
## Annen bruk av ISF

### ISF og COB-opptak

Som beskrevet på siden [COB-beregning](../DailyLifeWithAaps/CobCalculation.md), beregnes opptaket av COB vanligvis med denne formelen:   
`absorbed_carbs = deviation * ic / isf`  
Når du bruker **Dynamisk ISF**, er **ISF** som brukes her gjennomsnittet av Dynamisk ISF-verdiene fra de siste 24 timene.

### ISF i Boluskalkulator

Når du bruker [Boluskalkulator](#aaps-screens-bolus-wizard), brukes **ISF** til å legge til en korreksjon hvis **BS** er over målet.

Når du bruker **Dynamisk ISF**, er **ISF** som brukes her gjennomsnittet av Dynamisk ISF-verdiene fra de siste 24 timene.

(dyn-isf-preferences)=
## Innstillinger

Kryss av for **Bruk dynamisk sensitivitet** i [Innstillinger > OpenAPS SMB](#Preferences-openaps-smb-settings) for å aktivere den. Nye innstillinger blir tilgjengelige når den er valgt.

![Innstillinger for Dynamisk ISF](../images/preferences/settings_dynamic_isf.png)

(dyn-isf-adjustment-factor)=
### DynamiskISF-justeringsfaktor
**Dynamisk ISF** bygger på én enkelt regel som skal gjelde for alle, noe som innebærer at personer med samme **TDD** ville ha samme sensitivitet. Siden hver bruker har sin egen personlige sensitivitet, lar **justeringsfaktoren** deg angi om du er mer eller mindre sensitiv for insulin enn «standardpersonen».

**Justeringsfaktoren** er en verdi mellom 1 % og 300 %. Den virker som en multiplikator på **TDD**-verdien.

* Øker du verdien over 100 %, blir **DynISF** mer aggressiv: **ISF**-verdiene blir *mindre* (_det vil si_ at det trengs mer insulin for å senke **BS** litt)
* Senker du verdien under 100 %, blir **DynISF** mindre aggressiv: **ISF**-verdiene blir større (_det vil si_ at det trengs mindre insulin for å senke **BS** litt).

**Justeringsfaktoren** endres også når du aktiverer et [**profilbytte** med prosent](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). En lavere **profilprosent** senker **justeringsfaktoren**, og omvendt ved høyere **profilprosent**.

Hvis for eksempel **justeringsfaktoren** din er 80 %, og du gjør et **profilbytte** til 80 %, blir den resulterende **justeringsfaktoren** `0.8*0.8=0.64`.

Det betyr at når du bruker **DynISF**, kan du bruke **profilprosent** til å finjustere sensitiviteten din manuelt for en periode. Det kan være nyttig ved fysisk aktivitet (lavere prosent), sykdom (høyere prosent) osv.

### LGS-terskel

**BS**-verdien som insulinet stoppes under (stopp ved lavt BS). Standardverdien bruker standard målmodell. Du kan sette denne verdien mellom 60 mg/dL (3,3 mmol/L) og 100 mg/dL (5,5 mmol/L). Verdier under 65/3,6 gjør at standardmodellen brukes.

### DynamiskISF justerer sensitivitet

Denne innstillingen (*«Juster sensitivitetsberegninger ved bruk av DynamiskISF»*) erstatter Autosens, og bruker **TDD** for de siste 24 timene / **TDD** for 7 dager som grunnlag for å øke og senke basaldosen, på samme måte som vanlig Autosens gjør. Denne beregnede verdien brukes også til å justere målet, hvis valgene for å justere mål etter sensitivitet er aktivert. I motsetning til Autosens justerer ikke dette valget **ISF**-verdiene.

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## Ting å tenke på når du aktiverer Dynamisk ISF

* **Dynamisk ISF** anbefales bare for avanserte brukere som har god kontroll på innstillingene og overvåkingen i **AAPS**. Du bør helst ha oppnådd god kontroll med **SMB** før du går over til **Dynamisk ISF**.
* Som nevnt over: Slå av alle [**automasjoner**](../DailyLifeWithAaps/Automations.md) som aktiverer en **profilprosent** ut fra **BS**, fordi det blir for aggressivt og kan gi for mye insulin! Dette er allerede en del av **Dynamisk ISF**-algoritmen.
* [Profilprosent](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) tas med i beregningen av Dynamisk ISF (se [Justeringsfaktor for Dynamisk ISF](#dyn-isf-adjustment-factor) over). Det er dårlig praksis å bruke en annen **profilprosent** enn 100 % over lang tid. Hvis du finner ut at **profilen** din har endret seg, lag en ny **profil** med de nye verdiene dine, slik at den tilsvarer **profilen** med en bestemt prosent.
* **Dynamisk ISF** virker kanskje ikke for alle. Du kan særlig få uventede resultater hvis en av disse situasjonene gjelder for deg:
  * Variabel livsstil (uregelmessige mønstre for måltider eller fysisk aktivitet)
  * Ujevn TDD eller sensitivitet fra dag til dag.
* Det finnes ingen nøyaktig veiledning for å sette startverdien for **justeringsfaktoren**. Men som et utgangspunkt: Hvis **profil**-verdiene dine er riktige, bør **DynISF**-verdien være omtrent den samme som den du hadde i **profilen** før, når du er i målområdet og **BS** er flatt.<br/>Hvis du ser at **Dynamisk ISF** er for aggressiv, senker du **justeringsfaktoren**, og omvendt.
* Selv om **DynISF** ikke bruker **profil-ISF** i det hele tatt, bør du vurdere å holde den oppdatert hvis du merker at sensitiviteten din er svært forskjellig fra det som tidligere var lagret i **profilen**. Det kan være nyttig hvis du mister **AAPS**-dataene dine (_for eksempel_ ny telefon, ny **AAPS**-versjon …), siden **profil-ISF** da brukes som «fallback» de neste 7 dagene.