# Generelle anbefalinger for CGM

## CGM-hygiene

Uansett hvilket CGM-system du bruker: Hvis du skal kalibrere med blodprøver, er det noen helt klare regler du bør følge, enten du bruker DIY-programvare for CGM eller de offisielle appene.

-   Pass på at hendene og utstyret er rene.
-   Prøv å kalibrere når du har en rekke punkter med flat pil (15–30 minutter er vanligvis nok)
-   Unngå å kalibrere når blodsukkeret er på vei opp eller ned.
-   Gjør «nok» kalibreringer – i de offisielle appene blir du bedt om å sjekke én eller to ganger per dag. I DIY-systemer blir du kanskje ikke bedt om det, og du bør være forsiktig med å fortsette uten kalibreringer.
-   For sensorer som ikke krever eller ikke tillater kalibrering, bør du sjekke det virkelige blodsukkeret minst én gang daglig. AAPS er bare så trygt som sensormålingene dine er pålitelige.
-   Hvis det er mulig, kalibrer med noen av målingene dine i et lavere område (4–5 mmol/L eller 72–90 mg/dL) og noen på et litt høyere nivå (7–9 mmol/L eller 126–160 mg/dL), siden dette gir et bedre område for punkt-/stigningskalibreringen.

## Sette sensor (G6)

Når du setter sensoren, anbefales det å ikke trykke innføringsenheten for hardt, for å unngå blødning. Sensorkontaktene bør ikke komme i kontakt med blod.

Når sensoren er satt, kan senderen klikkes på plass i sensorholderen. Forsiktig! Klikk først inn den firkantede siden, og trykk så ned den runde siden.

(general-cgm-troubleshooting)=
## Feilsøking

### Tilkoblingsproblemer

Bluetooth-forbindelsen kan bli forstyrret av andre Bluetooth-enheter i nærheten, for eksempel blodsukkerapparater, hodetelefoner, nettbrett eller kjøkkenutstyr som mikrobølgeovner eller keramiske platetopper. I så fall viser xDrip ingen BS-verdier. Når Bluetooth-forbindelsen er gjenopprettet, fylles dataene inn i ettertid (backfill).

### Sensorfeil

Hvis du stadig får sensorfeil, prøv å sette sensoren på et annet sted på kroppen. Sensorkontaktene bør ikke komme i kontakt med blod.

Ofte kan en «Sensorfeil» rettes opp ved å drikke med en gang og massere rundt sensoren!

### Hoppende verdier

Du kan prøve å endre innstillingene for støyblokkering i xDrip (Settings – Inter-App Settings – Noise Blocking), for eksempel «Block Very High noise and worse» (blokker svært høy støy og verre). Se også [Utjevning av blodsukkerdata](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Negativ sensoralder

![Sensoralder på Sensor-raden i det utvidede statuspanelet](../images/main/main_status_row_expanded.png)

Sensoralderen vises på **Sensor**-raden i statuspanelet på hovedskjermen (trykk på pilen for å utvide det). En negativ alder oppstår hvis det enten finnes en dobbel [helseportal-oppføring](#aaps-screens-careportal) av typen «Sensorbytte», eller et sensorbytte med feil dato. Åpne **Behandlingshistorikk** (meny ☰), velg fanen **Helseportal** og slett den feile oppføringen.
