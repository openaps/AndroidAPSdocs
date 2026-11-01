# Medtronic-pumper

Driveren fungerer ikke med nyere modeller, inkludert alle modeller som slutter på G (530G, 600-serien [630G, 640G, 670G], 700-serien [770G, 780G] osv.).

Disse kombinasjonene av modell og firmware er kompatible:

- 512/712 (alle firmwareversjoner)
- 515/715 (alle firmwareversjoner)
- 522/722 (alle firmwareversjoner)
- 523/723 (firmware 2.4A eller lavere)
- 554/754 EU-utgave (firmware 2.6A eller lavere)
- 554/754 Canada-utgave (firmware 2.7A eller lavere)

Hvordan du sjekker firmwaren på pumpene, finner du i [OpenAPS-dokumentasjonen](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) eller [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

    {contents} Innhold
    :depth: 1
    :local: true

## Pumpefunksjoner med AAPS

* Krever en RileyLink-kompatibel enhet for å kommunisere med **AAPS**.
* Automatisk håndtering av sommertid og tidssoner.

## Krav til maskinvare og programvare

- **Telefon:** Medtronic-driveren bør fungere med alle Android-telefoner som støtter Bluetooth-tilkobling. **VIKTIG: Bluetooth-implementeringen kan variere mellom telefonprodusenter, så hver telefonmodell kan oppføre seg forskjellig. For eksempel håndterer noen telefoner aktivering/deaktivering av Bluetooth forskjellig. Dette kan påvirke brukeropplevelsen når AAPS må koble til RileyLink-enheten din på nytt.**
- **RileyLink-kompatibel enhet:** Android-telefoner kan ikke kommunisere med Medtronic-pumper uten en egen enhet som håndterer kommunikasjonen. Denne enheten kobles til telefonen din via Bluetooth og til pumpen via en kompatibel radioforbindelse. Den første slike enheten het RileyLink, men nå finnes det flere andre alternativer som kan tilby ekstra funksjonalitet.
    
    - RileyLink fås hos [getrileylink.org](https://getrileylink.org/product/rileylink916)
    - OrangeLink fås hos [getrileylink.org](https://getrileylink.org/product/orangelink)
    - EmaLink (flere modeller) fås hos [github.com](https://github.com/sks01/EmaLink)
    - Gnarl (krever litt ekstra gjør-det-selv-arbeid), detaljer finnes på [github.com](https://github.com/ecc1/gnarl)

En sammenligningstabell over de ulike RileyLink-kompatible enhetene finner du på [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart)

(MedtronicPump-configuration-of-the-pump)=

## Konfigurasjon av pumpen

Disse innstillingene må være satt på pumpen for at AAPS skal kunne sende kommandoer eksternt. Stegene for å gjøre hver endring på en Medtronic 715 står i parentes for hver innstilling. De nøyaktige stegene kan variere med pumpemodell og/eller firmwareversjon.

- **Slå på fjernstyring (remote mode) på pumpen** (På pumpen: trykk Act og gå til Utilities -> Remote Options, velg On, og på neste skjerm velg Add ID og legg til en tilfeldig ID, for eksempel 111111). Minst én ID må stå på listen Remote ID for at pumpen skal forvente fjernkommunikasjon.
- **Sett Max Basal** (På pumpen: trykk Act og gå til Basal og velg deretter Max Basal Rate) Hvis du for eksempel setter denne verdien til fire ganger din høyeste vanlige basaldose, kan du få en midlertidig basal på 400 %. Den høyeste verdien pumpen tillater, er 34,9 enheter per time.
- **Sett Max Bolus** (På pumpen: trykk Act og gå til Bolus og velg deretter Max Bolus) Dette er den største bolusen pumpen godtar. Den høyeste verdien pumpen tillater, er 25.
- **Sett profilen til Standard**. (På pumpen: trykk Act og gå til Basal og deretter Select Patterns) Pumpen trenger bare én profil, fordi AAPS håndterer ulike profiler på telefonen din. Ingen andre mønstre (patterns) er nødvendige.
- **Sett typen midlertidig basal** (På pumpen: trykk Act og gå til Basal og deretter Temp Basal Type). Velg Absolute (ikke Percent).

## Medtronic-konfigurasjon av telefon/AAPS

- **Ikke par den RileyLink-kompatible enheten via Bluetooth-menyen på telefonen.** Hvis du parer via Bluetooth-menyen på telefonen, vil AAPS ikke se den RileyLink-kompatible enheten din når du følger instruksjonene nedenfor.
- Slå av automatisk skjermrotasjon på telefonen. På enkelte enheter gjør automatisk skjermrotasjon at Bluetooth-øktene starter på nytt, og det gir problemer for Medtronic-pumpen din. 
- Det er to måter å konfigurere Medtronic-pumpen i AAPS på:

1. Bruke oppsettveiviseren som en del av en ny installasjon
2. I **Konfigurasjon** > **Pumpe**, ved å velge **Medtronic**
    
    ![Konfigurasjon > Pumpe med Medtronic-pluginen](../images/v4/Configuration/configuration_pump_list_3.png)
    
    Når den er valgt, viser kortet **Medtronic** to knapper, **Innstillinger** og **Åpne plugin**:
    
    ![Medtronic-pluginen valgt i Konfigurasjon > Pumpe](../images/v4/Pumps/medtronic_enabled.png)
    
    **Innstillinger** åpner innstillingene for Medtronic-driveren:
    
    ![Innstillinger for Medtronic-driveren](../images/v4/Pumps/medtronic_settings.png)
    
    **Åpne plugin** (eller **Administrer** > **Pumpe**) åpner Medtronic-pumpeskjermen. Før en pumpe er sammenkoblet, ser den slik ut:
    
    ![Medtronic-pumpeskjermen før sammenkobling](../images/v4/Pumps/medtronic_pump_screen.png)

Når du konfigurerer Medtronic-pumpen med oppsettveiviseren, kan det hende du ikke får fullført oppsettet på grunn av Bluetooth-problemer (for eksempel at du ikke får koblet til pumpen). Hvis det skjer, bør du velge virtuell pumpe for å fullføre konfigurasjonen, og så feilsøke videre med alternativ 2.

Når du setter opp AAPS for Medtronic-pumpen din, må du sette disse punktene i **Innstillinger** (se bildet av innstillingene ovenfor):

- **Pumpens serienummer**: Står på baksiden av pumpen og begynner med SN. Du skal bare skrive inn de 6 tallene som vises, uten bokstaver (f.eks. 123456).
- **Pumpens modellnummer**: Pumpemodellen du bruker (f.eks. 522). 
- **Pumpens frekvens**: Det er to alternativer, avhengig av hvor pumpen opprinnelig ble solgt. Se [FAQ](#MedtronicPump-faq) hvis du er usikker på hvilket alternativ du skal velge: 
    - for US & Canada er frekvensen 916 MHz
    - for Worldwide (globalt) er frekvensen 868 MHz
- **Maks Basal på pumpen (Enheter/time)**: Denne må stemme med innstillingen på pumpen (se Konfigurasjon av pumpen ovenfor). Også denne innstillingen må velges med omhu, fordi den bestemmer hvor mye AAPS kan tilføre via basaldosen din. Dette setter i praksis den høyeste midlertidige basaldosen. Hvis du for eksempel setter denne verdien til fire ganger din høyeste vanlige basaldose, kan du få en midlertidig basal på 400 %. Den høyeste verdien pumpen tillater, er 34,9 enheter per time.
- **Maks Bolus dose på pumpen (Enheter)** (på én time): Denne må stemme med innstillingen på pumpen (se Konfigurasjon av pumpen ovenfor). Denne innstillingen bør vurderes nøye, fordi den bestemmer hvor stor bolus AAPS noen gang kan sette.
- **Forsinkelse før Bolus dose startes (sek)**: Antall sekunder fra en bolus bestilles til kommandoen faktisk sendes til pumpen. I dette tidsrommet kan brukeren avbryte bolusen hvis en boluskommando ble sendt ved en feil. Det er ikke mulig å avbryte en bolus som har startet, via AAPS. Den eneste måten å avbryte en bolus som allerede har startet, er å pause pumpen manuelt og så gjenoppta den.
- **Medtronic-koding**: Bestemmer hvor Medtronic-kodingen utføres (maskinvare eller programvare). Maskinvarekoding (det vil si at den RileyLink-kompatible enheten gjør kodingen) er å foretrekke, fordi det gir mindre data som må sendes. Programvarekoding (det vil si at AAPS gjør kodingen) kan hjelpe hvis du opplever hyppige frakoblinger. Denne innstillingen ignoreres hvis du har firmwareversjon 0.x på RileyLink-enheter.
- **Batteritype (Strømvisning)**: For å beregne gjenværende batterinivå riktig bør du velge hvilken type AAA-batteri du bruker. Når du velger noe annet enn enkel visning, viser AAPS beregnet gjenværende batterinivå i prosent og volt. Disse alternativene finnes:
    
    - Ikke valgt (Enkel visning)
    - Alkaline (Utvidet visning)
    - Lithium (Utvidet visning)
    - NiZn (Utvidet visning)
    - NiMH (Utvidet visning)
- **Bruk Skanning**: Slår på Bluetooth-skanning før tilkobling til den RileyLink-kompatible enheten din. Dette bør gjøre tilkoblingen til enheten mer pålitelig.

- **Vis batterinivå rapportert av OrangeLink/EmaLink/DiaLink**: Denne funksjonen støttes bare på nyere link-enheter som EmaLink eller OrangeLink. Verdien vises som **RileyLink batteri** på Medtronic-pumpeskjermen.
- **Sett nøytrale temp basaler**: Som standard piper Medtronic-pumper ved hvert timeskifte når en midlertidig basal er aktiv. Når du slår på dette alternativet, kan du redusere antall pip, fordi den midlertidige basalen avbrytes ved timeskiftet for å unngå pipet.

(pairing-your-rileylink-compatible-device)=

### Pare den RileyLink-kompatible enheten din

Den RileyLink-kompatible enheten din pares fra Medtronic-pumpeskjermen, ikke fra Bluetooth-menyen på telefonen:

- Åpne pumpeskjermen (**Administrer** > **Pumpe**, eller **Åpne plugin** på Medtronic-kortet i **Konfigurasjon** > **Pumpe**).
- Trykk på **Par RileyLink**. **AAPS** skanner etter RileyLink-kompatible enheter i nærheten.
- Trykk på enheten din i listen. Når **RileyLink er koblet sammen** vises, trykk på **OK**.

## Medtronic-pumpeskjermen

For å åpne Medtronic-pumpeskjermen, gå til **Administrer** > **Pumpe**. Pumpeskjermen viser gjeldende statusinformasjon for pumpen sammen med noen Medtronic-spesifikke handlinger (se bildet av pumpeskjermen ovenfor).

- **RileyLink Status**: Gjeldende status for forbindelsen mellom telefonen og den RileyLink-kompatible enheten. Denne bør alltid vise Tilkoblet. Alle andre statuser kan kreve at du gjør noe. 
- **RileyLink batteri**: Gjeldende batterinivå på EmaLink- eller OrangeLink-enheten din. Vises bare hvis **Vis batterinivå rapportert av OrangeLink/EmaLink/DiaLink** er aktivert i Medtronic-innstillingene.
- **Pumpestatus**: Gjeldende status for pumpeforbindelsen. Siden pumpen ikke er tilkoblet hele tiden, viser denne stort sett søvnikonet. Det finnes flere andre mulige statuser, blant annet «Våkner opp» når AAPS prøver å sende en kommando, eller andre pumpekommandoer som «Hent tid», «Angi TBR» osv.
- **Batteri**: Viser batteristatus basert på verdien du valgte for **Batteritype (Strømvisning)** i Medtronic-innstillingene.
- **Siste tilkobling**: Hvor lenge siden den siste vellykkede pumpetilkoblingen var.
- **Siste bolus**: Hvor lenge siden den siste vellykkede bolusen ble gitt.
- **Profilens basaldose**: Dette er basaldosen som går på pumpen i denne timen i den aktive profilen din.
- **Midlertidig basal**: Den midlertidige basalen som gis nå, og den kan være 0 enheter per time.
- **Reservoar**: Hvor mye insulin som er i reservoaret (oppdateres minst hver time).
- **Feil**: Feilmelding hvis det er et problem (vises for det meste når det er en feil i konfigurasjonen).

Nederst på skjermen finnes disse knappene:

- **Oppdater** henter pumpens gjeldende status på nytt. Dette bør bare brukes hvis forbindelsen har vært borte lenge, fordi det krever en full oppdatering av data (hente historikk, hente/sette tid, hente profil, hente batteristatus osv.).
- **Par RileyLink**: Finner og parer den RileyLink-kompatible enheten din (se [ovenfor](#pairing-your-rileylink-compatible-device)).
- **Pumpehistorikk**: Viser pumpehistorikken (se [nedenfor](#MedtronicPump-pump-history)).
- **RL statistikk**: Viser RL-statistikk (se [nedenfor](#MedtronicPump-rl-status-rileylink-status)).
- **Oppstart og enhetssøk** og **Tilbakestill RileyLink**: Se [Handlinger](#medtronic-actions) nedenfor.
- **Nullstill Bolus blokk**: Vises bare en kort stund etter en bolus, mens **AAPS** venter på at pumpen skal bli ferdig med å gi den. Trykker du på den, avsluttes denne ventingen.

(MedtronicPump-pump-history)=

## Pumpehistorikk

![Pumpehistorikk-skjermen med filterknappene](../images/Medtronic03.png)

Pumpehistorikken hentes hvert 5. minutt og lagres lokalt. Bare historikken for de siste 24 timene lagres. Dette gir en enkel måte å se pumpens oppførsel på når det trengs. Bare oppføringer som er relevante for AAPS lagres; konfigurasjonsfunksjoner uten relevans tas ikke med.

Trykk på **Pumpehistorikk** på pumpeskjermen for å åpne den. Som standard er **Alle** valgt. Trykk på en av filterknappene øverst (for eksempel **Boluser**, **Basaldoser** eller **Alarmer**) for å vise bare én type oppføring.

(MedtronicPump-rl-status-rileylink-status)=

## RL Status (RileyLink Status)

![RileyLink Status - Innstillinger](../images/Medtronic04.png) ![RileyLink Status - Historikk](../images/Medtronic05.png)

Dialogen RL Status har to faner:

- **Innstillinger**: Viser innstillinger for den RileyLink-kompatible enheten: konfigurert adresse, tilkoblet enhet, tilkoblingsstatus, tilkoblingsfeil og RileyLink-firmwareversjoner. Enhetstype er alltid Medtronic pumpe, Modell er din modell, Serienummer er det konfigurerte serienummeret, Pumpens frekvens viser hvilken frekvens du bruker, og Sist brukte frekvens er den frekvensen som ble brukt sist.
- **Historikk**: Viser kommunikasjonshistorikken. Oppføringer merket RileyLink viser tilstandsendringer for RileyLink, og Medtronic viser hvilke kommandoer som ble sendt til pumpen.

(medtronic-actions)=

## Handlinger

Når Medtronic-driveren brukes, er to ekstra handlinger tilgjengelige på pumpeskjermen (**Administrer** > **Pumpe**):

- **Oppstart og enhetssøk** – Hvis AAPS ikke har koblet til pumpen på lenge (den skal koble til hvert 5. minutt), kan du tvinge fram et enhetssøk (tune-up). Dette prøver å få kontakt med pumpen ved å søke gjennom alle radiofrekvensene pumpen kan bruke. Hvis tilkoblingen lykkes, settes frekvensen som virket, som standard. Mens enhetssøket pågår, viser RileyLink-statusen på pumpeskjermen det. Hvis et enhetssøk mislykkes (for eksempel fordi pumpen var utenfor rekkevidde), prøver **AAPS** på nytt av seg selv omtrent hvert 10. minutt.
- **Tilbakestill RileyLink** – Hvis du tilbakestiller den RileyLink-kompatible enheten din, kan det hende du må bruke denne handlingen slik at enheten kan konfigureres på nytt (frekvens, frekvenstype og koding settes).

## Viktige merknader

### Nightscout-konfigurasjonen krever spesiell oppmerksomhet

AAPS bruker serienummeret til synkronisering, og serienummeret sendes til Nightscout. Fordi den som kjenner serienummeret til en gammel Medtronic-pumpe kan styre pumpen eksternt, må du være ekstra nøye med å sikre Nightscout-siden din, slik at pumpens serienummer ikke lekker ut. Se https://nightscout.github.io/nightscout/security/

### OpenAPS-brukere

OpenAPS-brukere bør merke seg at AAPS med Medtronic bruker en helt annen tilnærming enn OpenAPS. Med AAPS er telefonen den viktigste måten å styre pumpen på. Ved normal bruk er det sannsynligvis bare ved bytte av reservoar at du trenger å bruke pumpemenyen. Dette er svært forskjellig fra OpenAPS, der i hvert fall en del av bolusen vanligvis gis med hurtigbolusknappene. Hvis pumpen brukes til å gi en bolus manuelt, kan det oppstå problemer hvis AAPS prøver å gi en bolus samtidig. Det finnes kontroller som prøver å hindre problemer i slike tilfeller, men dette bør likevel unngås så langt det er mulig.

### Logging

Hvis du må feilsøke Medtronic-pumpen, trykk på menyikonet øverst til venstre på skjermen, velg Vedlikehold og deretter Logginnstillinger. Ved feilsøking av Medtronic-problemer bør Pump, PumpComm og PumpBTComm være krysset av.

### Medtronic CGM

Medtronic CGM støttes IKKE for øyeblikket.

### Manuell bruk av pumpen

Du bør unngå å gi bolus eller sette midlertidig basal manuelt på pumpen. Alle slike kommandoer bør sendes via AAPS. Hvis du bruker manuelle kommandoer, må det gå minst 3 minutter mellom dem for å redusere risikoen for problemer.

### Tidssonebytte og sommertid (DST) eller reise med Medtronic-pumpe og AAPS

AAPS oppdager tidssonebytte automatisk og oppdaterer pumpens klokke når telefonen bytter til den nye tiden.

Når du reiser østover, legger du til timer i gjeldende tid (f.eks. fra GMT+0 til GMT+2), og det gir ingen problemer, fordi det ikke blir noen overlapping (du kan for eksempel ikke få den samme timen to ganger). Når du reiser vestover, kan det derimot oppstå problemer, fordi du i praksis går tilbake i tid, og det kan gi feil IOB-data.

Utviklerne kjenner til problemene ved reise vestover, og det jobbes med en mulig løsning. Se https://github.com/andyrozman/RileyLinkAAPS/issues/145 for flere detaljer. Inntil videre bør du være klar over at dette problemet kan oppstå, og følge nøye med når du bytter tidssone.

### Er en GNARL en fullt kompatibel RileyLink-kompatibel enhet?

GNARL-koden støtter alle funksjonene som Medtronic-driveren i AAPS bruker, så den er fullt kompatibel. Merk at dette krever ekstra arbeid, fordi du må skaffe kompatibel maskinvare og så laste GNARL-koden inn på enheten.

**Merknad fra forfatteren:** Vær oppmerksom på at GNARL-programvaren fortsatt er eksperimentell og lite testet, og den bør ikke regnes som like trygg å bruke som en RileyLink.

(MedtronicPump-faq)=

## FAQ

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### Hva gjør jeg hvis jeg mister forbindelsen til RileyLink og/eller pumpen?

Det er flere ting du kan prøve for å løse tilkoblingsproblemer.

- Trykk på **Oppstart og enhetssøk** på pumpeskjermen (**Administrer** > **Pumpe**) som beskrevet ovenfor.
- Slå av Bluetooth på telefonen, vent 10 sekunder og slå det på igjen. Dette tvinger RileyLink-enheten til å koble seg til telefonen på nytt.
- Tilbakestill RileyLink-enheten. Deretter må du trykke på **Tilbakestill RileyLink** på pumpeskjermen (**Administrer** > **Pumpe**).
- Andre brukere har funnet at disse stegene virker for å få tilbake forbindelsen når andre metoder ikke hjelper: 
    1. Start telefonen på nytt
    2. *Mens* telefonen starter på nytt, start RileyLink-enheten på nytt
    3. Åpne AAPS og la forbindelsen gjenopprettes

### Hvordan finne ut hvilken frekvens pumpen min bruker

![Pumpemodell](../images/Medtronic06.png)

På baksiden av pumpen finner du en linje med modellnummeret ditt sammen med en spesiell kode på 3 bokstaver. De to første bokstavene bestemmer frekvenstypen, og den siste bestemmer fargen. Her er mulige verdier for frekvens:

- NA – Nord-Amerika (i frekvensvalget må du velge «US & Canada (916 MHz)»)
- CA – Canada (i frekvensvalget må du velge «US & Canada (916 MHz)»)
- WW – Worldwide (i frekvensvalget må du velge «Globalt (868 Mhz)»)

(MedtronicPump-pump-unreachable)=

### Slik retter du feilen «Pumpe er utilgjengelig»

Noen Medtronic-pumper gir feilen «Pumpe er utilgjengelig» etter en **AAPS**-oppdatering. For å rette det, bytt kodingstype:

1. Gå til **Konfigurasjon** > **Pumpe** og trykk på **Innstillinger** på kortet **Medtronic**.
2. Sett **Medtronic-koding** til **Maskinvare 4b6b-koding**.

## Hvor du kan få hjelp

Medtronic-driveren utvikles av fellesskapet på **frivillig** basis. Før du ber om hjelp, bør du:

1. **Lese** det aktuelle avsnittet i denne dokumentasjonen for å se hvordan funksjonen er ment å virke.
2. **Spørre** i kanalen *#AAPS* på [Discord](https://discord.gg/4fQUWHZ4Mw), eller i en av de andre [fellesskapskanalene](../GettingHelp/WhereCanIGetHelp.md).
3. **Rapportere en feil** ved å søke i [eksisterende saker](https://github.com/nightscout/AndroidAPS/issues); hvis din ikke er der, åpne en [ny sak](https://github.com/nightscout/AndroidAPS/issues) og legg ved [loggfilene](../GettingHelp/AccessingLogFiles.md) dine.

Når du ber om hjelp, ta med telefonens merke og modell, Android-versjon, **AAPS**-versjon og en enkel beskrivelse av problemet (hva som ble endret, når det sist virket).