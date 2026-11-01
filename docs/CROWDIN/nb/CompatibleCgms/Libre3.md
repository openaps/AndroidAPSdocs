# **Freestyle Libre 3** og 3+

Freestyle Libre 3 (FSL3) krever et eget oppsett for å få BS-verdier inn i AAPS. Det finnes to mulige måter å få Freestyle Libre 3-verdier (FSL3) inn i AAPS på.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

Metodene nedenfor bruker den separate appen Juggluco. Den bruker Juggluco til å motta rådata med 1-minutts intervall fra sensoren, som så sendes videre til xDrip eller AAPS. Nye sensorer kan startes enten med Libre 3-appen eller direkte i Juggluco. Veiledningen nedenfor viser hvordan du starter en sensor med Juggluco-appen. Hvis sensoren ble startet mens du var logget inn med en LibreView-konto, kan du også bytte mellom Juggluco og Libre 3-appen som mottaker.

Juggluco kan også sende data videre til LibreView for deling med helsepersonell når sensoren er startet med Libre 3-appen.

I xDrip kan sensoren kalibreres i området -40 mg/dL til +20 mg/dL (-2,2 mmol/L til +1,1 mmol/L) for å kompensere for forskjeller mellom en manuell blodsukkermåling og sensormålingene.

## Metode 1: bruk 1-minutts målinger direkte
**AAPS** er laget for målinger hvert 5. minutt. Derfor har behandling av 1-minutts verdier noen begrensninger av og til.

Se [her](#juggluco-to-aaps).


## Metode 2: gjør om 1-minutts målinger til 5-minutts verdier via xDrip
Denne metoden bruker Juggluco til å motta rådata med 1-minutts intervall fra sensoren. Dataene sendes så til xDrip, som jevner dem ut til 5-minutts intervall og sender dem videre til AAPS.

### Steg 1: Sett opp Juggluco
Last ned og installer Juggluco-appen [her](https://www.juggluco.nl/Juggluco/download.html). Følg instruksjonene [her](https://www.juggluco.nl/Juggluco/libre3/)

Pass på at du sender glukoseverdiene til xDrip: I innstillingene i Juggluco kan du sette opp Juggluco til å sende glukoseverdien sin til andre apper. Juggluco kan sende tre typer slike kringkastinger: **Patched Libre broadcast** ble opprinnelig brukt av den modifiserte LibreLink-appen og kan brukes til å sende glukoseverdier til xDrip.

### Steg 2: Sett opp xDrip

Blodsukkerverdiene mottas av xDrip-appen på telefonen.

- Hvis xDrip ikke allerede er satt opp, laster du ned [xDrip](https://github.com/NightscoutFoundation/xDrip) og følger instruksjonene på [siden om xDrip-innstillinger](../CompatibleCgms/xDrip.md).
- I xDrip velger du «Libre2 (patched app)» som datakilde.
- Om nødvendig skriver du inn «BgReading:d,xdrip libre_receiver:v» under Less Common Settings → Extra Logging Settings → Extra tags for logging. Da logges flere feilmeldinger som hjelper ved feilsøking.

![xDrip LibreLink-logging](../images/Libre2_Tags.png)

- Teknisk sett overføres den gjeldende blodsukkerverdien til xDrip hvert minutt. Et vektet gjennomsnittsfilter beregner som standard en utjevnet verdi over de siste 25 minuttene. Du kan endre perioden i menyen NFC Scan features.

  → Hamburger menu → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

  ![xDrip avanserte innstillinger for Libre 2 og råverdier](../images/xDrip_Libre3_Smooth.png)



### Steg 3: Start sensoren i xDrip

I xDrip starter du sensoren med «Start Sensor» og «not today». Du trenger ikke holde telefonen inntil sensoren. «Start Sensor» starter faktisk ikke noen Libre 3-sensor fysisk, og påvirker den ikke på noen måte. Dette er bare for å fortelle xDrip at en ny sensor leverer blodsukkerverdier. Hvis du har dem, skriver du inn to blodmålte verdier for den første kalibreringen. Nå skal blodsukkerverdiene vises i xDrip hvert 5. minutt. Målinger som er hoppet over, for eksempel fordi du var for langt unna telefonen, blir ikke fylt inn i ettertid.

Vent minst 15–20 minutter hvis det fortsatt ikke kommer data.

Etter et sensorbytte oppdager xDrip automatisk den nye sensoren og sletter alle kalibreringsdata. Du kan måle blodsukkeret etter aktivering og gjøre en ny første kalibrering.

### Steg 4: Konfigurer AAPS

- Se [her](#juggluco-to-xdrip), og kom så tilbake.

- Hvis **AAPS** ikke mottar BS-verdier når telefonen er i flymodus, bruker du «Identify receiver»
- Slå av Utjevning (det er allerede gjort i xDrip)

## Senere sensorbytter

1. Åpne Juggluco og noter serienummeret til sensoren du bruker nå

![Libre-serienummer](../images/libre3/step_13.jpg)

2. Nå skanner du ganske enkelt den nye sensoren med NFC-leseren i telefonen. Juggluco viser en melding hvis prosessen ble startet.
3. Når du er klar til å deaktivere den gamle sensoren, åpner du Juggluco-menyen ved å trykke hvor som helst i det tomme området øverst til venstre på skjermen.
4. Velg sensoren som er utløpt, og trykk på «Terminate»

![Avslutte sensor](../images/libre3/step_14.jpg)

Merk: Når to sensorer er aktive, sender Juggluco den nyeste verdien fra en av sensorene til xDrip. Hvis sensorene ikke er kalibrert slik at de måler BS noenlunde likt, kan det føre til at hoppende BS-verdier rapporteres til xDrip. Hvis du avslutter feil sensor, kan du aktivere den igjen ved å skanne sensoren.

## Bytte sensor mellom Libre 3-appen og Juggluco

Hvis sensoren ble startet mens du var logget inn med en LibreView-konto, kan du også bytte mellom Juggluco og Libre 3-appen som mottaker. Dette krever disse stegene:

1. Installer Libre 3-appen fra Google Play Store
2. Sett opp Libre 3-appen med den LibreView-kontoen som sensoren ble aktivert med.
3. Tvangsstopp Juggluco-appen i Android-innstillingene.
4. I Libre 3-menyen trykker du på «Start Sensor», velger «Yes» og «Next» (Ja og Neste) og skanner sensoren.
5. Etter noen minutter skal BS-verdiene vises i Libre 3-appen.

For å bytte fra Libre 3-appen til Juggluco må du tvangsstoppe Libre 3-appen via Android-innstillingene og fortsette med steg 1 og 2.

(libre3-experiences-and-troubleshooting)=
## Erfaringer og feilsøking

### Feilsøking av forbindelsen Libre3 -> Juggluco

- Pass på at du bruker en nyere versjon av Juggluco-appen
- Kontroller innstillingene dine etter denne veiledningen
- Noen ganger må du tvangsstoppe Libre 3-appen og Juggluco og starte dem på nytt.
- Slå av Bluetooth og slå det på igjen
- Vent litt, eller prøv å lukke Juggluco
- Eldre versjoner av Juggluco (under 2.9.6) sender ikke videre data fra Libre3-sensoren til tilkoblede enheter (for eksempel Juggluco på Wear OS). Du må kanskje trykke på «Resend data» i den modifiserte Libre3-appen (Juggluco-menyen).

### Mer hjelp

Originale instruksjoner: [nettstedet til jkaltes](https://www.juggluco.nl/Juggluco/libre3/)

Ekstra GitHub-repository: [GitHub-lenke](https://github.com/maheini/FreeStyle-Libre-3-patch)
