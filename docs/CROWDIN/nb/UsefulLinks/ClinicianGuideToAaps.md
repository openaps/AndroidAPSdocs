# For behandlere – en generell introduksjon og veiledning til AAPS

```{note}
Denne siden er en overordnet introduksjon for behandlere. Den ble sist gjennomgått i juni 2026. AAPS utvikles hele tiden, så for de mest nøyaktige og oppdaterte detaljene bør du alltid se i [hoveddokumentasjonen for AAPS](../index.md).
```

Denne siden er ment for behandlere som har vist interesse for teknologi for kunstig bukspyttkjertel med åpen kildekode, som AAPS, eller for pasienter som vil dele slik informasjon med behandlerne sine.

Veiledningen gir overordnet informasjon om DIY lukket loop, og spesielt om hvordan AAPS virker. For flere detaljer om alle disse temaene, se den [fullstendige AAPS-dokumentasjonen på nett](../index.md). Hvis du har spørsmål, kan du be pasienten din om flere detaljer, eller gjerne ta kontakt med miljøet og spørre. (Hvis du ikke er på sosiale medier (for eksempel [Twitter](https://twitter.com/kozakmilos) eller Facebook), kan du gjerne sende e-post til developers@aaps.app). [Her finner du også noen av de nyeste studiene og resultatdataene](https://openaps.org/outcomes/).

## Stegene for å bygge en DIY lukket loop:

For å begynne å bruke AAPS må disse stegene gjøres:

* Finne en [kompatibel pumpe](../Getting-Started/CompatiblePumps.md), en [kompatibel Android-enhet](../Getting-Started/Phones.md) og en [kompatibel CGM-kilde](../Getting-Started/CompatiblesCgms.md).
* [Laste ned kildekoden til AAPS og bygge programvaren](../SettingUpAaps/BuildingAaps.md).
* [Sette opp programvaren slik at den snakker med diabetesutstyret, og angi innstillinger og sikkerhetsvalg](../SettingUpAaps/SetupWizard.md).

## Slik virker en DIY lukket loop

Uten et lukket loop-system samler en person med diabetes inn data fra pumpen og CGM-en, bestemmer hva som skal gjøres, og handler.

Med automatisk insulintilførsel gjør systemet det samme: det samler inn data fra pumpen, CGM-en og alle andre steder der informasjon logges (for eksempel Nightscout), bruker denne informasjonen til å regne ut og bestemme hvor mye mer eller mindre insulin som trengs (over eller under den underliggende basaldosen), og bruker midlertidige basaldoser til å gjøre de nødvendige justeringene for å holde BS i målområdet, eller etter hvert få BS dit.

Hvis enheten som kjører AAPS går i stykker eller kommer utenfor rekkevidde av pumpen, går pumpen tilbake til å være en vanlig pumpe med de forhåndsprogrammerte basaldosene så snart den siste midlertidige basaldosen er over.

## Slik samles data inn:

Med AAPS kjører en Android-enhet en egen app som gjør beregningene, og enheten kommuniserer med en støttet pumpe via Bluetooth. AAPS kan kommunisere med andre enheter og med skyen via Wi-Fi eller mobildata for å hente inn mer informasjon, og for å rapportere til pasienten, omsorgspersoner og pårørende om hva den gjør og hvorfor.

Android-enheten må:

* kommunisere med pumpen og lese historikken – hvor mye insulin som er gitt
* kommunisere med CGM-en (enten direkte eller via skyen) – for å se hva BS gjør og har gjort

Når enheten har samlet inn disse dataene, kjører algoritmen og tar beslutningene ut fra innstillingene (ISF, IK (insulin-til-karbohydratforholdet), DIA, mål osv.). Hvis det trengs, sender den så kommandoer til pumpen for å endre insulintilførselen.

Den henter også inn informasjon om boluser, inntak av karbohydrater og midlertidige mål fra pumpen eller fra Nightscout, og bruker dette i beregningen av insulintilførselen.

## Hvordan vet den hva den skal gjøre?

Programvaren med åpen kildekode er laget for at enheten enkelt skal kunne gjøre jobben folk tidligere gjorde selv (i manuell modus): å regne ut hvordan insulintilførselen bør justeres. Først samler den inn data fra alle de tilkoblede enhetene og fra skyen, klargjør dataene og kjører beregningene, lager prediksjoner for hvordan BS forventes å utvikle seg de neste timene i ulike scenarioer, og regner ut hvilke justeringer som trengs for å holde BS i målområdet eller få BS tilbake dit. Deretter sender den eventuelle nødvendige justeringer til pumpen. Så leser den dataene tilbake, og gjentar dette om og om igjen.

Siden den viktigste inndataen er blodsukkernivået fra CGM-en, er det viktig å ha CGM-data av høy kvalitet.

AAPS er laget for å spore alle inndata den samler inn, anbefalingen som følger av dem, og alle handlinger som utføres, på en åpen og gjennomsiktig måte. Det er derfor lett å svare på spørsmålet «hvorfor gjør den X?» når som helst, ved å se i loggene.

## Eksempler på hvordan AAPS-algoritmen tar beslutninger:

AAPS bruker den samme kjernealgoritmen og de samme funksjonene som OpenAPS. Algoritmen lager flere prediksjoner (ut fra innstillingene og situasjonen) som viser ulike scenarioer for hva som kan skje fremover. I Nightscout vises disse som «lilla linjer». AAPS bruker ulike farger for å skille disse [prediksjonslinjene](#aaps-screens-prediction-lines). I loggene beskriver den hvilke av disse prediksjonene og hvilket tidsrom som styrer de nødvendige handlingene.

### Her er eksempler på de lilla prediksjonslinjene, og hvordan de kan være forskjellige:

![Eksempler på lilla prediksjonslinjer](../images/Prediction_lines.jpg)

(clinicianguide-dosing-scenarios)=

### Her er eksempler på ulike tidsrom som påvirker hvilke justeringer av insulintilførselen som trengs:

### Scenario 1 – Null midlertidig basal for sikkerhet

I dette eksempelet stiger BS på kort sikt, men det er predikert å bli lavt over et lengre tidsrom. Faktisk er det predikert å gå under målet *og* sikkerhetsterskelen. For å hindre det lave blodsukkeret vil AAPS for sikkerhets skyld sette null midlertidig basal («zero-temp», en midlertidig basaldose på 0 %) til forventet BS («eventualBG», i et hvilket som helst tidsrom) er over terskelen.

![Doseringsscenario 1](../images/Dosing_scenario_1.jpg)

### Scenario 2 – Null midlertidig basal for sikkerhet

I dette eksempelet er BS predikert å gå lavt på kort sikt, men predikert å ende over målet til slutt. Men fordi den kortsiktige lave verdien faktisk er under sikkerhetsterskelen, vil AAPS sette null midlertidig basal til det ikke lenger er noe punkt på prediksjonslinjen som ligger under terskelen.

![Doseringsscenario 2](../images/Dosing_scenario_2.jpg)

### Scenario 3 – Mer insulin trengs

I dette eksempelet viser en kortsiktig prediksjon et fall under målet. Men det er ikke predikert å gå under sikkerhetsterskelen. Forventet BS er over målet. Derfor vil AAPS avstå fra å gi insulin som ville bidra til lavt blodsukker på kort sikt (ved å gi insulin som ville få prediksjonen til å gå under terskelen). Den vil da vurdere å gi mer insulin for å få det laveste nivået av den forventede BS-prediksjonen ned til målet, så snart det er trygt å gjøre det. *(Avhengig av innstillingene og av hvor mye insulin som trengs og når, kan dette insulinet gis som midlertidige basaler eller som SMB-er (supermikroboluser)).*

![Doseringsscenario 3](../images/Dosing_scenario_3.jpg)

### Scenario 4 – Lav midlertidig basal for sikkerhet

I dette eksempelet ser AAPS at BS stiger godt over målet. Men på grunn av tidspunktet insulinet ble gitt, er det allerede nok insulin i kroppen til å få BS i målområdet etter hvert. Faktisk er BS predikert å ende under målet. Derfor vil AAPS ikke gi ekstra insulin, slik at den ikke bidrar til lavt blodsukker over et lengre tidsrom. Selv om BS er høyt/stigende, er en lav midlertidig basaldose sannsynlig her.

![Doseringsscenario 4](../images/Dosing_scenario_4.jpg)

## Optimalisere innstillinger og gjøre endringer

Som behandler uten erfaring med AAPS eller DIY lukket loop kan du synes det er utfordrende å hjelpe pasienten din med å optimalisere innstillingene eller gjøre endringer som gir bedre resultater. Vi har flere verktøy og [veiledninger](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) i miljøet som hjelper pasienter med å gjøre små, testede justeringer for å forbedre innstillingene sine.

Det viktigste pasienten kan gjøre, er å endre én ting om gangen, og se på virkningen i 2–3 dager før de velger å endre en annen innstilling (med mindre det tydelig er en dårlig endring som gjør ting verre – da bør de gå tilbake til den forrige innstillingen med en gang). Det er menneskelig å ville skru på alle knappene og endre alt på en gang, men den som gjør det, kan ende opp med enda dårligere innstillinger for fremtiden, og få problemer med å komme tilbake til en tilstand som er kjent god.

Et av de kraftigste verktøyene for å endre innstillinger er et automatisk beregningsverktøy for basaldoser, ISF og IK. Dette kalles «[Autotune](#autotune-how-autotune-calculates-adjustments)». Det er laget for å la dataene veilede deg eller pasienten din til å gjøre små, gradvise endringer i innstillingene. Det er god praksis i miljøet å kjøre (eller gå gjennom) Autotune-rapporter først, før man prøver å justere innstillingene manuelt. Autotune er innebygd i AAPS som en plugin (**Konfigurasjon** → **Generelt** → **Autotune**); se [Autotune](../AdvancedOptions/Autotune.md). Den kan kjøres ved behov eller automatisk. Siden disse parameterne er en forutsetning både for vanlig insulintilførsel fra pumpen og for insulintilførsel i lukket loop, vil en gjennomgang av Autotune-resultatene og justering av disse parameterne være den naturlige koblingen til behandleren.

I tillegg påvirker menneskelig atferd (lært fra manuell diabetesbehandling) ofte resultatene, selv med en DIY lukket loop. Hvis BS for eksempel er predikert å gå lavt og AAPS reduserer insulinet på vei ned, kan det være nok med en liten mengde karbohydrater (for eksempel 3–4 g) for å få BS opp fra 70 mg/dL (3,9 mmol/L). Men i mange tilfeller velger noen å behandle med mye mer karbohydrater (for eksempel ved å holde seg til 15-regelen), og det gir en raskere stigning etterpå, både på grunn av den ekstra glukosen og fordi insulinet allerede var redusert i tiden før den lave verdien.

## OpenAPS

**Denne veiledningen er tilpasset fra [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html) (veiledningen for behandlere om OpenAPS).** OpenAPS er et system laget for å kjøre på en liten bærbar datamaskin (vanligvis kalt «riggen»). AAPS bruker mange av teknikkene fra OpenAPS, og deler mye av logikken og algoritmene. Derfor er denne veiledningen svært lik den opprinnelige veiledningen. Mye av informasjonen om OpenAPS kan enkelt overføres til AAPS. Hovedforskjellen er maskinvareplattformen som hver av programvarene kjører på.

## Oppsummering

Dette er ment som en overordnet oversikt over hvordan AAPS virker. For flere detaljer kan du spørre pasienten din, ta kontakt med miljøet, eller lese den fullstendige AAPS-dokumentasjonen som finnes på nett.

Annen anbefalt lesning:

* [Den fullstendige AAPS-dokumentasjonen](../index.md)
* [OpenAPS Reference Design](https://OpenAPS.org/reference-design/) (referansedesignet), som forklarer hvordan OpenAPS er laget med tanke på sikkerhet: https://openaps.org/reference-design/
* [Den fullstendige OpenAPS-dokumentasjonen](https://openaps.readthedocs.io/en/latest/index.html) 
  * Se [hvordan AAPS gjør prediksjoner om til en doseringsbeslutning](#aaps-screens-how-predictions-become-a-dosing-decision) i denne dokumentasjonen, eller [OpenAPS-dokumentasjonen om determine-basal](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic) for den underliggende algoritmen i full teknisk detalj