# Slik redigerer du dokumentasjonen

**Denne beskrivelsen gjelder bare redigering av den engelske dokumentasjonen. All ny informasjon må legges inn på engelsk først. Hvis du vil oversette til andre språk (takk!), bruk [Crowdin](https://crowdin.com/project/androidapsdocs).**

Tips om hvordan du formaterer tekst (overskrifter, fet skrift ...) og lager lenker finner du i avsnittet [«Kodesyntaks»](#code-syntax) på denne siden.

## Generelt

Hvis du har spørsmål, tilbakemeldinger eller nye ideer, kan du kontakte dokumentasjonsteamet via [Discord](https://discord.gg/4fQUWHZ4Mw).

På et tidspunkt vil du bli bedt om å lage en pull request (PR). Det er slik endringene dine i dokumentasjonen faktisk kommer inn på AAPS-nettsidene, som er lagret i GitHub. Det er faktisk ikke så vanskelig å lage en PR, og det er en flott måte å bidra på. Du leser denne dokumentasjonen akkurat nå fordi folk som deg har laget PR-er. Ikke vær redd for å gjøre feil eller for å redigere feil dokumenter. Endringene dine blir gjennomgått før de merges inn i det «offisielle» repositoryet for AAPS-dokumentasjonen. Du kan ikke ødelegge originalene ved et uhell i denne prosessen. Den generelle prosessen er:

- Gjør endringer og forbedringer i kode eller dokumentasjon ved å redigere innholdet som finnes.
- Sjekk en ekstra gang at endringene dine ser bra ut.
- Skriv noen korte notater om hva som er endret, slik at andre forstår endringene.
- Lag en pull request, som ber administratorene om å ta i bruk endringene dine.
- De går gjennom endringene og vil enten (1) merge endringene dine, (2) gi deg tilbakemelding på endringene, eller (3) starte et nytt dokument med endringene dine.

(Tips: Hvis du lærer best ved å se, finnes det en YouTube-video [her](https://youtu.be/4b6tsL0_kzg) som viser arbeidsflyten for en PR.)

I eksempelet vårt skal vi gjøre en endring i AndroidAPSdocs. Dette kan gjøres på en hvilken som helst Windows-PC, Mac osv. (en hvilken som helst datamaskin med internettilgang).

1. Gå til <https://github.com/openaps/AndroidAPSdocs> og trykk på Fork øverst til høyre for å lage din egen kopi av repositoryet.

![Fork av repositoryet](../images/PR0.png)

2. Gå til en hvilken som helst side og naviger til siden du vil redigere. Du kan klikke på lenken «Edit in GitHub» øverst til høyre. Dette er bare mulig på engelske sider. 

![rediger dokument](../images/PR1.png)

Eller klikk på blyantikonet som vises i den øverste linjen på sideinnholdet du vil redigere. Du må allerede være logget inn på GitHub-kontoen din for å gjøre dette (hvis du ikke har en, er det enkelt å opprette en).

![RTD io](../images/PR2.png)

3. Uansett hvilket av alternativene i steg 2 du velger, lages det en ny gren i DITT repository, der endringene dine blir lagret. Gjør endringene dine i filen.

Vi bruker Markdown for dokumentasjonssidene. Filene har endelsen «.md». Markdown-spesifikasjonen er ikke fast, og vi bruker for øyeblikket myst_parser for Markdown-filene våre. Pass på å bruke riktig syntaks, som [beskrevet nedenfor](#code-syntax).

![Rediger gren](../images/PR3.png)

4. Du har jobbet i fanen «<>Edit file». Velg fanen «Preview changes» for å se på endringene med friske øyne og sjekke at alt ser ut slik du mente (skrivefeil osv.). Hvis du ser noe som bør forbedres, gå tilbake til redigeringsfanen og gjør flere forbedringer. 

![forhåndsvisning](../images/PR5.png)

5. Når du er ferdig med endringene, bla til bunnen av siden. I boksen nederst skriver du kommentarene dine i tekstfeltet der det står «Add an optional extended description...». Standardtittelen inneholder filnavnet. Prøv å ta med en setning som forklarer **grunnen** til endringen. Når du forklarer grunnen, forstår de som går gjennom PR-en lettere hva du prøver å oppnå.

![commit-kommentarer](../images/PR4.png)

6. Klikk på den grønne knappen «Propose file changes» eller «Commit changes». På siden som vises, klikker du på «Create Pull Request», og på neste side klikker du på «Create Pull Request» en gang til.

![lag pull request](../images/PR6.png)

7. Dermed har du åpnet en pull request, en PR. GitHub gir PR-en et nummer, som står etter tittelen og et nummertegn (#). Gå tilbake til denne siden for å se etter tilbakemeldinger (eller, hvis du får GitHub-varsler på e-post, får du e-post om all aktivitet på PR-en). Endringen ligger nå i en liste over PR-er som teamet går gjennom og eventuelt gir tilbakemelding på, før den tas inn i hoveddokumentasjonen for AAPS! Hvis du vil følge med på framdriften til PR-en, kan du klikke på bjelleikonet øverst til høyre i GitHub-kontoen din og se alle PR-ene dine.

![Følge med på PR-en](../images/PR7.png)

PS: Forken og grenen din ligger fortsatt på din egen GitHub-konto. Når du får beskjed om at PR-en din er merget, kan du slette grenen hvis du er ferdig med den (varslingsområdet i steg 8 gir deg en lenke for å slette grenen når den er lukket eller merget). Hvis du følger denne framgangsmåten ved senere endringer, starter du alltid med en oppdatert versjon av AndroidAPSdocs-repositoryet. Hvis du velger en annen måte å starte en PR på (for eksempel ved å redigere med master-grenen i din egen fork som utgangspunkt), må du først sørge for at repositoryet ditt er oppdatert: gjør en «compare» først, og merge inn alle endringer som har skjedd siden du sist oppdaterte forken din. Siden folk ofte glemmer å oppdatere repositoryet sitt, anbefaler vi at du bruker PR-prosessen beskrevet ovenfor til du er fortrolig med å gjøre «compares».

(edit-the-docs-code-syntax)=

## Kodesyntaks

Vi bruker Markdown for dokumentasjonssidene. Filene har endelsen «.md».

Markdown er et veldig enkelt tekstformateringsspråk som skiller tekstinnhold fra tekstformatering.

Skribenten markerer for eksempel bare en overskrift som overskrift på nivå 1, og Markdown-verktøyet lager den nødvendige HTML-koden som viser overskriften i HTML.

Tanken bak dette er at

- skribenten skal tenke på teksten først, ikke formateringen,
- Markdown-teksten kan utveksles mellom ulike Markdown-verktøy, i stedet for å være låst til for eksempel proprietære verktøy som Microsoft Windows, og
- du kan lage flere utdataformater fra én Markdown-fil.

Markdown er ikke en 100 % fast standard, og vi prøver å holde oss så nær standarden som mulig for å

- vi kan bytte Markdown-verktøy ved behov, eller når utviklingen av Markdown-verktøy og Markdown-tjenester (SaaS) tvinger oss til det, og
- kunne bruke oversettelsestjenester til å oversette den engelske teksten til et målspråk som fransk eller tysk. De kan håndtere Markdown, men ikke kompliserte formateringskoder, fordi de ikke klarer å skille innhold fra layout, og det kan gå helt galt.

### Overskrifter

- Overskrift 1: `# headline`
- Overskrift 2: `## headline`
- Overskrift 3: `### headline`
- Overskrift 4: `#### headline`

Vi prøver å unngå flere overskriftsnivåer.

### Tekstformat

- **fet**: `**text**`
- *kursiv*: `*text*`
- ***fet kursiv***: `***text***`

### Nummerert liste

    1. første
    1. andre
    1. tredje
    

1. første
2. andre
3. tredje

### Punktliste

    - ett element
    - et annet element
    - og enda et element
    

- ett element
- et annet element
- og enda et element

### Liste med flere nivåer

Du kan sette lister inn i lister ved å rykke inn neste nivå med 4 mellomrom mer enn nivået over.

    1. første
    1. andre
    1. tredje
      1. ett element
      1. et annet element
      1. og enda et element
    1. fire
    1. fem
    1. seks
    

1. første
2. andre
3. tredje 
    1. ett element
    2. et annet element
    3. og enda et element
4. fire
5. fem
6. seks

### Bilder

For å sette inn bilder bruker du denne Markdown-syntaksen.

- bilder: `![alt text](../images/file.png)`

Bildetypen bør være PNG eller JPEG.

Bildenavn bør følge en av disse navnereglene. I eksempelet bruker jeg png som endelse. Hvis du bruker JPEG, bruk jpeg som endelse i stedet.

- `filename-image-xx.png` der xx er et unikt tosifret tall for bildene i denne filen.
- `filename-image-xx.png` der xx er et beskrivende navn valgt av forfatteren av md-filen.

Bildene ligger i bildemappen for engelsk og kopieres automatisk til de andre språkene av Crowdin. Du trenger ikke gjøre noe for dette!

Vi oversetter ikke bilder for øyeblikket: bilder bør inneholde **så lite tekst som mulig**, slik at de også er tilgjengelige for lesere som ikke kan engelsk.

(make-a-PR-image-size)= Bruk en fornuftig størrelse på bildene; de må være lesbare på PC, nettbrett og mobil.

- Skjermbilder fra nettsider bør være opptil **1050 piksler brede**.
- Diagrammer over prosessflyter bør være opptil **1050 piksler brede**.
- Skjermbilder fra appen bør være opptil **500 piksler brede**. Ikke plasser dem side om side hvis det ikke er nødvendig.
- Skjermbilder fra klokken (**Wear OS**) bør være opptil **360 piksler brede**. Skaler aldri opp et skjermbilde som er mindre.

### Lenker

#### Eksterne lenker

Eksterne lenker er lenker til eksterne nettsteder.

- ekstern lenke: `[alt text](www.url.tld)`

#### Interne lenker til starten av en md-fil

Interne lenker til sider er lenker til starten av en md-fil som ligger på vår egen server.

- intern lenke til .md-side: `[alt text](../folder/file.md)`

#### Interne lenker til navngitte referanser i teksten

Interne lenker til navngitte referanser er lenker til et hvilket som helst sted i en md-fil på vår egen server, der det er satt en referanse å lenke til.

Legg til en navngitt referanse på det stedet i mål-md-filen du vil hoppe til.

`(name-of-my-md-file-this-is-my-fancy-named-reference)=`

Den navngitte referansen må være unik i alle md-filene i AndroidAPSDocs, ikke bare i md-filen den står i!

Derfor er det god praksis å starte med filnavnet og deretter referansenavnet du velger.

Bruk bare små bokstaver, og sett bindestrek mellom ordene.

Deretter lenker du til denne referansen i teksten du skriver, med denne typen lenke.

- Interne lenker til navngitte referanser: `[alt text](name-of-my-md-file-this-is-my-fancy-named-reference)`

### Merknader, advarsler og sammenleggbare merknader

Du kan legge til merknads- og advarselsbokser i dokumentasjonen.

Du kan også legge til sammenleggbare merknader for detaljert informasjon, slik at brukere som ikke er interessert i detaljene, ikke mister lysten til å lese teksten. Bruk dem med måte, siden dokumentasjonen skal være så lett å lese som mulig.

#### Merknader

    ```{admonition} Overskrift for merknad
    :class: note
    Dette er en merknad.
    ```
    

```{admonition} Overskrift for merknad :class: note Dette er en merknad.

    <br />#### Advarsler
    
    ````
    ```{admonition} Advarsel
    :class: warning
    Dette er en advarsel.
    

    ```{admonition} Overskrift for advarsel
    :class: warning
    Dette er en advarsel.
    ```
    
    #### Sammenleggbare merknader
    
    

    {admonition} mer detaljert lesestoff for interesserte lesere
    :class: dropdown
    
    Denne merknaden er slått sammen,
    så du kan legge inn lengre innhold her
    uten at det tar for mye plass på siden.
    

````

```{admonition} mer detaljert lesestoff for interesserte lesere :class: dropdown Denne merknaden er slått sammen, så du kan legge inn lengre innhold her uten at det tar for mye plass på siden.

```

## Tabeller

Unngå tabeller med lang tekst: innholdet er vanskelig å sette opp i Markdown, de får som regel ikke plass på en mobilskjerm, og de vises sannsynligvis ikke likt etter oversettelse.

## Stilguide

### Innhold

1. Skrivetips for engelsk

2. AAPS-spesifikke skrivetips

3. Nyttige referanser

### ![Bilde](../images/styleguide01.png) 1\. Skrivetips for engelsk

#### Bruk et språk som passer for leseren

Bruk enkel engelsk der det er mulig. Det hjelper lesere som ikke har engelsk som morsmål, og gjør det lettere å oversette AAPS-dokumentasjonen til andre språk. Skriv i en samtaletone med brukeren; se for deg at du sitter rett overfor personen du skriver for. Husk: de fleste AAPS-brukere har ikke programmeringsbakgrunn. Diabetes har også mye sjargong og mange forkortelser. Husk at noen lesere kan være nydiagnostiserte, kan ha mindre erfaring med diabetes enn deg, eller kan ha fått en annen diabetesopplæring. Hvis du bruker en forkortelse, skriv den helt ut første gang du bruker den, med forkortelsen rett etter i parentes, som «super micro bolus (SMB)». Lenk også til ordlisten. Tekniske uttrykk som leseren kanskje ikke kjenner, kan også legges til i parentes.

I stedet for: *«What causes high postprandial BG peaks in closed loop?»*

Bruk: *«What causes a high BG peak **after lunch** (postprandial) in closed loop?»*

##### Bruk enkle ord som alle kan forstå

Her finner du en A-til-Å-liste over alternative ord som gjør teksten din lettere å forstå:

<https://www.plainenglish.co.uk/the-a-z-of-alternative-words.html>

#### Personvern og lisenser:

Særlig hvis du tar opp video eller skjermbilder, pass på at du ikke avslører private opplysninger (API-nøkkel, passord). Sørg for at YouTube-innhold ikke er offentlig listet, slik at det bare kan ses via en lenke fra dokumentasjonen. Unngå å rette oppmerksomhet mot materiale som bryter opphavsretten (BYODA osv.).

#### Hold setningene korte, og kom til poenget

- Klar tekst bør ha en gjennomsnittlig setningslengde på 15 til 20 ord.

- Det betyr ikke at alle setninger skal være like lange. Vær kort og tydelig. Varier teksten ved å blande korte setninger (som den forrige) med lengre (som denne).

- Hold deg til én hovedidé per setning, pluss kanskje ett beslektet poeng.

- Det kan fortsatt hende du skriver en lang setning av og til, særlig når du prøver å forklare noe komplisert. Men de fleste lange setninger kan deles opp på en eller annen måte.

- Fjern svake ord: «you can», «there is/are/were», «in order to».

- Plasser nøkkelord nær starten av titler, setninger og avsnitt.

- Vær visuell! Der det er mulig, legg ved et enkelt diagram, et skjermbilde eller en video.

#### Ikke vær redd for å gi instruksjoner

Kommandoer er den raskeste måten å gi instruksjoner på, men skribenter er noen ganger redde for å gi kommandoer og skriver «you should do this» i stedet for bare «do this». Kanskje er folk redde for at kommandoer høres for harde ut. Det kan du ofte løse ved å sette ordet «please» foran. Men hvis noe må gjøres, er det best å ikke si «please», siden det gir leseren mulighet til å si nei.

I stedet for: *«You should just think of it as a complete statement.»*

Bruk: *«Think of it as a complete statement.»*

#### Bruk helst aktive verb, ikke passive

Eksempel på et **aktivt verb**:

- *«The pump (subjekt) delivers (verb) the insulin (objekt).»*

«delivers» er et aktivt verb her. Setningen sier hvem som leverer, før den sier hva som blir levert.

Eksempel på et **passivt verb**:

- *«The insulin (subjekt) is delivered (verb) by the pump (objekt)»*

*«delivered»* er et passivt verb her. Subjekt og objekt har byttet plass sammenlignet med setningen med aktivt verb. Vi har måttet gjøre setningen lengre ved å legge til «is» og «by the». Vurder også å starte med det aktive verbet.

I stedet for: *«You can connect your pump with the phone through the AAPS pump menu, and there are a number of pumps available for you to connect with.»*

Bruk: *«Connect your desired pump to the phone through the AAPS pump menu.»*

Passive verb kan skape problemer:

- De kan være forvirrende.

- De gjør ofte teksten mer omstendelig.

- De gjør teksten mindre levende.

##### Gode bruksområder for passiv

Noen ganger kan det passe å bruke passiv.

- For å gjøre noe mindre fiendtlig: «this bill has not been paid» (passiv) er mildere enn «you have not paid this bill» (aktiv).

- For å unngå å legge skylden på noen: «a mistake was made» (passiv) i stedet for «You made a mistake» (aktiv).

- Når du ikke vet hvem eller hva som gjør handlingen: «the England team has been picked».

- Hvis det rett og slett høres bedre ut.

#### Unngå nominaliseringer

En nominalisering er navnet på noe som ikke er en fysisk ting, for eksempel en prosess, en teknikk eller en følelse. Nominaliseringer lages av verb.

For eksempel:

| Verb     | Nominalisering |
| -------- | -------------- |
| fullføre | fullføring     |
| innføre  | innføring      |
| levere   | levering       |
| svikte   | svikt          |

De brukes ofte **i stedet for** verbene de kommer fra, men de kan få det til å høres ut som om ingenting egentlig skjer. For mange av dem kan gjøre teksten svært tung og kjedelig.

I stedet for: *«The implementation of the method has been done by a team.»*

Bruk: *«A team has implemented the method.»*

#### Bruk lister der det passer

Lister er utmerket til å dele opp informasjon. Det finnes to hovedtyper lister:

- En sammenhengende setning med flere punkter som er trukket fram i starten, midten eller slutten.

- Separate kulepunkter med en innledende setning.

I punktlisten ovenfor er hvert punkt en fullstendig setning, så alle starter med stor bokstav og slutter med punktum. Bruk kulepunkter i stedet for tall eller bokstaver, siden de trekker oppmerksomheten til hvert punkt uten å gi deg ekstra informasjon å ta inn.

#### Myter

- Du kan starte en setning med **and, but, because, so eller however**.

- Du kan dele infinitiver («split infinitives»). Så du kan si **«to boldly go»**.

- Du kan avslutte en setning med en preposisjon. Faktisk er det noe **we should stand up for**.

- Og **du** kan bruke det samme **ordet** to ganger i en setning hvis **du** ikke finner et bedre **ord**.

#### Tilpass skrivestilen til formålet

For å holde dokumentasjonen klar og kort skriver vi ulike deler av dokumentasjonen i ulike stiler.

En «forklarende» stil brukes i introduksjonen, bakgrunnsstoffet og delene som bygger opp kunnskap.

En «veiledningsstil» (med minimal forklaring) brukes for bygging, konfigurering av AAPS og noen av feilsøkingsdelene.

En opplæring (tutorial) hjelper eleven med å få grunnleggende ferdigheter. Brukeren skal **lære ved å gjøre**.

![Bilde](../images/styleguide02.png)

##### ![Bilde](../images/styleguide03.png) Opplæringer (f.eks. å lære et barn å piske eggehviter)

- fortelleren snakker direkte til leseren: I denne opplæringen skal **du** (vi) kan brukes for å formidle en «vi er i samme båt»-tankegang i noen sjeldne tilfeller

- Futurum -> for å vise sluttmålet

- Imperativ -> for å gjøre oppgavene -> Konkrete steg – unngå abstrakte begreper

- Fortid -> for å vise fullførte oppgaver -> Raske og umiddelbart synlige resultater

- Minimalt med forklaringer -> bare det som er strengt nødvendig for å fullføre oppgaven – **hva og hvorfor**

- Ignorer valg/alternativer/…. Ingen tvetydighet

- Overganger mellom steg: avslutt et steg med en setning som leder til neste steg, som en logisk progresjon. Eksempel: *Du har nå installert Let’s Encrypt-klienten, men før du henter sertifikater, må du sørge for at alle nødvendige porter er åpne. For å gjøre det oppdaterer du brannmurinnstillingene i neste steg.*

- **Opplæring**: Tittel (overskrift nivå 1)

- Introduksjon (uten overskrift)

- Forutsetninger (overskrift nivå 2)

- Steg:

- Steg 1 — Gjør det første (overskrift nivå 2)

- Steg 2 — Gjør det neste (overskrift nivå 2)

- Steg n — Gjør det siste (overskrift nivå 2)

- Konklusjon (overskrift nivå 2)
    
    - **Språket i opplæringer**
        
        *I denne opplæringen skal du …*
        
        Beskriv hva eleven kommer til å få til (merk: ikke «du vil lære …»).
        
        *Først gjør du x. Nå gjør du y. Nå som du har gjort y, gjør z.*
        
        Ikke rom for tvetydighet eller tvil.
        
        *Vi må alltid gjøre x før vi gjør y fordi … (se Forklaring for flere detaljer).*
        
        Gi minimal forklaring av handlingene, med så enkelt språk som mulig. Lenk til mer detaljert forklaring.
        
        *Resultatet bør se omtrent slik ut …*
        
        Gi eleven klare forventninger.
        
        *Legg merke til at … Husk at …*
        
        Gi eleven mange hint som bekrefter at de er på rett spor, og som hjelper dem å orientere seg.
        
        *Du har bygget en sikker, trelags hylomorf stasemotor …*
        
        Beskriv (og beundre, på en mild måte) hva eleven har fått til (merk: ikke «du har lært …»)

##### ![Bilde](../images/styleguide05.png) Veiledninger (f.eks. en oppskrift)

Formålet med en veiledning er å hjelpe en bruker som allerede har kompetansen, med å utføre en bestemt oppgave riktig.

- HVORDAN

- fortelleren snakker direkte til leseren: I denne opplæringen skal **du**

- Futurum -> for å vise sluttmålet

- Betinget imperativ -> for å få X, gjør y -> Konkrete steg – unngå abstrakte begreper

- Minimalt med forklaringer -> bare det som er strengt nødvendig for å fullføre oppgaven -> **hva og hvorfor**

- Ignorer valg/alternativer/…. Ingen tvetydighet, men du kan lenke til referansen eller forklaringen

- **Veiledning**: Tittel (overskrift nivå 1)

- Innledende avsnitt

- Valgfrie forutsetninger (avsnitt, eller overskrift nivå 2 hvis det er mer enn én)

- Steg:

- Steg 1 — Gjør det første (overskrift nivå 2)

- Steg 2 — Gjør det neste (overskrift nivå 2)

- Steg n — Gjør det siste (overskrift nivå 2)

- Avsluttende avsnitt
    
    - **Språket i veiledninger**
        
        *Denne veiledningen viser deg hvordan du …*
        
        Beskriv tydelig problemet eller oppgaven som veiledningen viser brukeren hvordan de løser.
        
        *Hvis du vil x, gjør y. For å oppnå w, gjør z.*
        
        Bruk betingede imperativer.
        
        *Se referanseveiledningen for x for en full liste over alternativer.*
        
        Ikke fyll den praktiske veiledningen med alt mulig brukeren kan gjøre i forbindelse med x.

##### ![Bilde](../images/styleguide07.png) Forklaring (f.eks. vitenskapen bak hvorfor eggehviter stivner når du pisker dem)

En forklaring klargjør, utdyper og utvider leserens forståelse av et emne.

- HVORFOR

- Start med **Om**

- Gi kontekst, lenk til ALLE relevante referanser

- Diskuter valg/alternativer

- Ikke instruer og ikke gi referanse (lenk til dem)

- Fortell om det ukjente / det som er i endring osv.

- **Om**: Tittel (overskrift nivå 1)

- Introduksjon (uten overskrift)

- Valgfrie forutsetninger (overskrift nivå 2)

- Underemne 1 (overskrift nivå 2)

- Konklusjon (overskrift nivå 2)
    
    - **Språket i forklaringer**
    
    *Grunnen til x er at historisk sett, y …*
    
    Forklar.
    
    *W er bedre enn z, fordi …*
    
    Gi vurderinger og gjerne meninger der det passer.
    
    *En x i system y tilsvarer en w i system z. Men …*
    
    Gi kontekst som hjelper leseren.
    
    *Noen brukere foretrekker w (på grunn av z). Det kan være en god tilnærming, men …*
    
    Vei alternativene mot hverandre.
    
    *En x samhandler med en y slik: …*
    
    Avslør maskineriets indre hemmeligheter, så leseren forstår hvorfor noe gjør det det gjør.

### 2\. AAPS-spesifikke tips for skriving og oppdatering

#### Forfatter & redaktør

Når du skriver eller oppdaterer AAPS-dokumentasjonen, tenk på prosessen som to trinn. De kan gjøres av samme person på ulike tidspunkter, eller av flere personer.

En **forfatter (f.eks. du!)** skriver/redigerer en del av dokumentasjonen i en kort og samtalepreget tone, og gir den så videre til redaktøren.

**Redaktøren (f.eks. en annen AAPS-bruker, eller personen som mottar pull requesten)** sjekker at stilguiden er fulgt, redigerer teksten for klarhet og tilgjengelighet, og fjerner så mange ord som mulig (særlig i opplæringer og veiledninger). Det kan hjelpe å lese teksten høyt.

#### Generelle AAPS-punkter

- For glukoseverdier, oppgi både mg/dL og mmol/L hver gang (vurder dette også for skjermbilder, hvis mulig).

- For konsistens, bruk «AAPS» i stedet for «Android APS».

- Oppgi tydelig hvilken versjon av Android Studio/AAPS du skriver for, eller som skjermbildene er tatt fra.

### 3\. Nyttige referanser

<https://dev.readthedocs.io/en/latest/style-guide.html>

[Diátaxis (diataxis.fr)](https://diataxis.fr/)

[Technical Writer Style Guide Examples | Technical Writer HQ](https://technicalwriterhq.com/writing/technical-writing/technical-writer-style-guide/)

[DigitalOcean's Technical Writing Guidelines | DigitalOcean](https://www.digitalocean.com/community/tutorials/digitalocean-s-technical-writing-guidelines)

[Top 10 tips for Microsoft style and voice - Microsoft Style Guide | Microsoft Learn](https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice?source=recommendations)

<https://www.plainenglish.co.uk/how-to-write-in-plain-english.html>

<https://developers.google.com/style>

<https://www.mongodb.com/docs/meta/style-guide/screenshots/screenshot-guidelines/>