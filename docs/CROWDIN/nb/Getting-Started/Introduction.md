# Introduksjon til APS og AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

## Hva er et «Artificial Pancreas System» (kunstig bukspyttkjertel)?

En menneskelig bukspyttkjertel gjør mye mer enn å regulere blodsukkeret. Men begrepet **«Artificial Pancreas System» (APS)**, altså kunstig bukspyttkjertel, brukes vanligvis om et system som arbeider for å holde blodsukkeret automatisk innenfor sunne grenser.

Den enkleste måten å gjøre dette på er å måle **glukosenivået**, bruke disse verdiene til å gjøre **beregninger**, og deretter gi kroppen den (forventet) riktige mengden **insulin**. Beregningen gjentas med noen minutters mellomrom, hele døgnet. Systemet bruker **alarmer** og **varsler** for å fortelle brukeren om det trengs inngripen eller oppmerksomhet. Et slikt system består vanligvis av en **glukosesensor**, en **insulinpumpe** og en **kontroller** som gjør beregningene. I **AAPS** og andre systemer med åpen kildekode er kontrolleren en app på en telefon. I de fleste kommersielle systemer er det programvare innebygd i selve pumpen, og en telefonapp brukes mest til visning og styring.

For bakgrunn om hvordan lukket loop-systemer ble utviklet og hvordan de virker, er denne oversiktsartikkelen fra 2022 et godt sted å begynne. Husk at den ble skrevet før de fleste systemene som finnes i dag, så den er ikke en guide til det som er på markedet nå:

![Frontiers](../images/FRONTIERS_Logo_Grey_RGB.png) [Closed-Loop Insulin Delivery Systems: Past, Present, and Future Directions](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.919942/full) (Templer, _Frontiers in Endocrinology_, 2022).

Såkalte «to-hormon»-systemer gir glukagon i tillegg til insulin, for å hindre alvorlig hypoglykemi og gi enda strammere blodsukkerkontroll. Et første system av denne typen er godkjent i Europa, men det leveres bare gjennom studier og prosjekter, og andre er fortsatt under utvikling. Ingen er i vanlig salg ennå.

En kunstig bukspyttkjertel kan ses på som en [«autopilot for diabetesen din»](https://www.artificialpancreasbook.com/). Hva betyr det?

I et fly gjør ikke autopiloten hele jobben til piloten; piloten kan ikke sove gjennom hele flyturen. Autopiloten hjelper piloten i arbeidet. Den tar bort byrden med å styre flyet hele tiden, slik at piloten kan konsentrere seg om å overvåke helheten. Autopiloten mottar signaler fra ulike sensorer, en datamaskin vurderer dataene sammen med pilotens spesifikasjoner og gjør så de nødvendige justeringene, og varsler piloten om noe trenger oppmerksomhet. Piloten slipper å ta avgjørelser hele tiden, og denne sammenligningen kan brukes på **AAPS**.

![image](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## Hva betyr hybrid lukket loop?

Den beste løsningen for type 1-diabetes ville være en «funksjonell kur» (sannsynligvis et implantat av bukspyttkjertelceller som er beskyttet mot immunsystemet). Mens miljøet av personer med type 1-diabetes (T1D) venter på det, er en «full lukket loop» kunstig bukspyttkjertel trolig det nest beste. Dette er et teknisk system som ikke trenger noe fra brukeren (som å gi bolus til måltider eller melde fra om trening), og som gir god regulering av blodsukkeret. Nesten alle systemer i daglig bruk er «hybride» lukkede looper, fordi de bruker en kombinasjon av automatisk teknologi og brukerens egne handlinger. De første full lukket loop-systemene ble godkjent i Europa i 2026, men ingen er allment tilgjengelige ennå.

## Hvordan og hvorfor startet looping?

Utviklingen av kommersiell teknologi for personer med type 1-diabetes (T1D) går svært sakte. I 2013 grunnla T1D-miljøet bevegelsen #WeAreNotWaiting. De utviklet systemer selv, med eksisterende godkjent teknologi (insulinpumper og sensorer), for å bedre blodsukkerkontroll, sikkerhet og livskvalitet. Disse kalles OS-AID-systemer (Open-Source Automated Insulin Delivery, automatisk insulintilførsel med åpen kildekode), tidligere DIY-systemer, fordi de ikke er formelt godkjent av helsemyndigheter (FDA, NHS osv.). Det finnes fire store OS-AID-systemer: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) og [Trio](https://triodocs.org).

En god måte å forstå det grunnleggende i OS-AID-looping på, er å lese boken «Automated Insulin Delivery» av Dana Lewis. Du kan lese den gratis [her](https://www.artificialpancreasbook.com/) (eller kjøpe boken på papir). Hvis du vil forstå mer om [OpenAPS](https://openaps.org/what-is-openaps/), som **AAPS** er utviklet fra, er [nettsiden til OpenAPS](https://openaps.org/what-is-openaps/) en god kilde.

Flere kommersielle hybrid lukket loop-systemer er også lansert. Disse er svært forskjellige fra OS-AID-systemer, hovedsakelig fordi mange av dem har en «lærende algoritme» som justerer hvor mye insulin som gis, ut fra insulinbehovet ditt de siste dagene. Mange i OS-AID-miljøet har allerede prøvd kommersielle systemer og sammenlignet dem med OS-AID-systemet sitt. Du kan finne ut mer om hvordan de ulike systemene er i forhold til hverandre ved å spørre i Facebook-gruppene for de systemene, i [Facebook-gruppen for AAPS](https://www.facebook.com/groups/AndroidAPSUsers/) eller på [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## Hva er Android APS (AAPS)?

![image](../images/basic-outline-of-AAPS.png)

**Figur 1**. Enkel oversikt over Android APS (Artificial Pancreas System), AAPS.

Android APS (**AAPS**) er et hybrid lukket loop-system, eller Artificial Pancreas System (APS). Beregningene av insulindoser gjøres med etablerte [OpenAPS](https://openaps.org/)-algoritmer (et sett med regler) utviklet av T1D-miljøet #WeAreNotWaiting.

Siden OpenAPS bare virker med visse eldre insulinpumper, ble **AAPS** (som kan brukes med et bredere utvalg av insulinpumper) først utviklet i 2016 for et familiemedlem med type 1-diabetes. Siden den første tiden har **AAPS** blitt utviklet og forbedret kontinuerlig av et team av frivillige utviklere og andre entusiaster med tilknytning til type 1-diabetes. I dag brukes **AAPS** av mange tusen mennesker over hele verden. Det er et svært tilpassbart og allsidig system, og fordi det har åpen kildekode, virker det også lett sammen med mye annen diabetesprogramvare og andre plattformer med åpen kildekode. De grunnleggende delene av dagens **AAPS**-system er vist i **Figur 1** ovenfor.



## Hva er de grunnleggende delene av AAPS?

«Hjernen» i AAPS er en **app** som du bygger selv. Det finnes detaljerte trinnvise instruksjoner for dette. Deretter installerer du **AAPS-appen** på en [kompatibel](../Getting-Started/Phones.md) **Android-telefon** (**1**). Mange brukere foretrekker å ha loopen på en egen telefon, ikke på hovedtelefonen sin. Du trenger altså ikke bruke en Android-telefon til alt annet i livet ditt, bare til å kjøre AAPS-loopen din.

**Android-telefonen** må også ha en annen app installert i tillegg til **AAPS**. Denne [ekstra appen](../Getting-Started/CompatiblesCgms.md) mottar glukosedata fra en sensor (**2**) via Bluetooth, og sender så dataene internt på telefonen til **AAPS-appen**.

**AAPS-appen** bruker en beslutningsprosess (**algoritme**) fra OpenAPS. Nybegynnere starter med den grunnleggende **oref0**-algoritmen, men det er mulig å bytte til den nyere **oref1**-algoritmen etter hvert som du kommer videre med AAPS. Hvilken algoritme du bruker (oref0 eller oref1), avhenger av hva som passer best for din situasjon.  I begge tilfeller tar algoritmen hensyn til mange faktorer og gjør raske beregninger hver gang en ny måling kommer inn fra sensoren. Algoritmen sender deretter instruksjoner til insulinpumpen (**3**) via Bluetooth om hvor mye insulin som skal gis. All informasjonen kan sendes via mobildata eller Wi-Fi til internett (**4**). Disse dataene kan også deles med følgere hvis du ønsker det, og/eller samles inn for analyse. Du kan også velge å pare en [smartklokke](../Getting-Started/Watches.md) (**5**) med telefonen for å se dataene dine med et blikk, og med noen klokker sende enkle kommandoer til **AAPS**.

## Hva er fordelene med AAPS-systemet?

OpenAPS-algoritmen som **AAPS** bruker, styrer blodsukkeret uten at brukeren må gjøre noe, ut fra parametrene brukeren har satt (de viktigste er basaldoser, insulinfølsomhetsfaktorer, insulin-til-karbohydrat-forhold, insulinets virketid osv.), og reagerer hvert 5. minutt på nye sensordata.

Noen av de rapporterte fordelene med **AAPS** er omfattende muligheter for finjustering, **Automasjoner** og større åpenhet i systemet for pasienten/omsorgspersonen. Dette kan gi bedre kontroll over diabetesen din (eller diabetesen til den du har omsorg for), som igjen kan gi bedre livskvalitet og mer ro i sinnet.

Hvis du investerer tid, kan **AAPS** potensielt føre til:

- mindre stress og belastning ved å håndtere type 1-diabetes;

- færre av de mange små, hverdagslige avgjørelsene som følger med type 1-diabetes;

- personlig og dynamisk insulindosering basert på sanntidsdata, som kan redusere behovet for å behandle følinger og gi færre episoder med hyperglykemi;

- økt kunnskap om insulinhåndtering og trygghet til å finjustere innstillingene dine bedre;

- mulighet til å lage automatiske innstillinger (**automasjoner**) som er tilpasset livsstilen din;

- bedre søvnkvalitet og generelt færre inngrep om natten;

- fjernovervåking og fjernstyring av insulintilførsel for omsorgspersoner til personer med type 1-diabetes; og

- samling av alt bærbart diabetesutstyr (CGM-mottaker og enheter som styrer insulin) i én Android-telefon styrt av **AAPS**.


Til syvende og sist kan **AAPS** gi den enkelte mulighet til å håndtere diabetesen sin bedre, med stabilt blodsukker og bedre helse på lang sikt som resultat.

### Noen konkrete fordeler:

#### 1) Innebygd sikkerhet
Vil du lese om sikkerhetsfunksjonene i algoritmene, kjent som oref0 og oref1, [klikk her](https://openaps.org/reference-design/). Brukeren styrer sine egne sikkerhetsbegrensninger.

#### 2) Fleksibel maskinvare

**AAPS** virker med et bredt utvalg av insulinpumper og sensorer, og gir fleksibilitet når livet endrer seg. Hvis du for eksempel utvikler allergi mot limet på Dexcom-sensorplasteret, kan du bytte til en Libre-sensor i stedet. Brukere trenger ikke bygge eller installere **AAPS**-appen på nytt; velg bare en annen pumpe eller BS-kilde i **Konfigurasjon** for å bytte maskinvare. **AAPS** er uavhengig av bestemte pumpedrivere og har også en «virtuell pumpe», slik at brukere trygt kan eksperimentere før de bruker det på seg selv.

#### 3) Svært tilpassbart, med vide grenser

Brukere kan enkelt legge til eller fjerne moduler og funksjoner, og **AAPS** kan brukes både i åpen og lukket loop-modus. Her er noen eksempler på mulighetene i **AAPS**-systemet:

 a) Mulighet til å sette et lavere **BS**-mål 30 min før du spiser; du kan sette målet så lavt som 72 mg/dL (4,0 mmol/L).

 b) Hvis du er insulinresistent og derfor får høyt blodsukker, lar **AAPS** deg sette opp en regel for **automasjon** som slår inn når BS stiger over 8 mmol/L (144 mg/dL), og som bytter til (for eksempel) en 120 %-profil (som gir 20 % mer basal og også styrker andre faktorer, sammenlignet med den vanlige **profil**-innstillingen din). Automasjonen varer så lenge som den planlagte tiden du har satt. En slik automasjon kan settes til å være aktiv bare på bestemte ukedager, til bestemte tider på døgnet, og til og med på bestemte steder.

 c) Hvis barnet ditt hopper på trampoline uten forvarsel, lar **AAPS** deg stoppe insulintilførselen i et bestemt tidsrom, direkte fra telefonen.

 d) Når du kobler til igjen en slangepumpe som har vært frakoblet under svømming, beregner **AAPS** basalinsulinet du har gått glipp av mens pumpen var frakoblet, og gir det forsiktig, ut fra ditt nåværende BS. Insulin som ikke trengs, kan du overstyre ved bare å «avbryte» den tapte basalen.

 e) I **AAPS** kan du sette opp ulike profiler for ulike situasjoner og enkelt bytte mellom dem. For eksempel kan funksjoner som gjør at algoritmen får ned høyt BS raskere (som supermikroboluser («**SMB**») og ikke-varslede måltider («**UAM**»)), settes til bare å virke på dagtid, hvis du er bekymret for nattlige følinger.

Dette er bare eksempler; hele spekteret av funksjoner gir stor fleksibilitet i hverdagen, inkludert ved sport, sykdom, hormonsykluser _osv_. Til syvende og sist er det brukeren som bestemmer hvordan denne fleksibiliteten skal brukes, og det finnes ingen automasjon som passer for alle.

#### 4) Fjernovervåking
Det finnes flere mulige kanaler for overvåking (Sugarmate, Dexcom Follow, xDrip, Android Auto _osv._) som er nyttige for foreldre/omsorgspersoner, og for voksne i visse situasjoner (søvn/kjøring) som trenger tilpassede varsler. I noen apper (xDrip) kan du også slå alarmene helt av, noe som er fint når du har en ny sensor som «trekker» eller setter seg, og som du ikke vil loope med ennå.

#### 5) Fjernstyring
En stor fordel med **AAPS** fremfor kommersielle systemer er at følgere kan sende et bredt utvalg av kommandoer tilbake til **AAPS**-systemet, enten med autentiserte tekstmeldinger (SMS) eller med en paret **AAPSClient**-app. Denne funksjonen brukes mye av foreldre til barn med type 1-diabetes som bruker **AAPS**.

Fjernstyringen kan være svært nyttig: for eksempel på lekeplassen, hvis du vil gi en bolus i forkant av et mellommåltid fra din egen telefon, mens barnet er opptatt med å leke. Det er også mulig å overvåke systemet fra en smartklokke (_f.eks._ Garmin) eller sende enkle kommandoer fra den (_f.eks._ en Wear OS-klokke som Samsung Galaxy Watch).

#### 6) Ingen kommersielle begrensninger, takket være åpne programgrensesnitt
I tillegg til at åpen kildekode gjør at kildekoden til **AAPS** kan leses når som helst, gir prinsippet om åpne programmeringsgrensesnitt også andre utviklere mulighet til å bidra med nye ideer. **AAPS** er tett integrert med Nightscout. Dette gjør utviklingen raskere og lar brukere legge til funksjoner som gjør livet med diabetes enda enklere. Gode eksempler på slike integrasjoner er [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) osv. Det er en løpende dialog mellom utviklere av åpen kildekode og de som utvikler kommersielle systemer. Mange av nyvinningene fra OS-AID blir etter hvert tatt inn i kommersielle systemer, der utviklingen forståelig nok går saktere, blant annet fordi grensesnitt mellom systemer fra ulike selskaper (pumper, apper, sensorer _osv_) må forhandles nøye og lisensieres. Dette kan også bremse nyvinninger som er nyttige for pasienten (eller for en liten gruppe pasienter med et svært spesielt behov), men som ikke gir noen vesentlig fortjeneste.

#### 7) Detaljert app-grensesnitt
Med **AAPS** er det lett å holde oversikt over ting som insulinnivå i pumpen, alder på kanyle, sensor og pumpebatteri, aktivt insulin (IOB) _osv_. Mange handlinger kan gjøres i **AAPS**-appen (fylle pumpen, koble fra pumpen _osv_.) i stedet for på selve pumpen, så pumpen kan bli liggende i lommen eller beltet (ditt eget, eller til den du har omsorg for).

#### 8) Tilgjengelighet og pris
**AAPS** gir personer som ikke har råd til å betale selv, eller som mangler finansiering/forsikring, tilgang til et hybrid lukket loop-system som i utvikling ligger flere år foran de kommersielle systemene. Du trenger for tiden en rapporteringsserver (Nightscout eller Tidepool) for å sette opp **AAPS**, men den er ikke nødvendig for den daglige kjøringen av **AAPS**-loopen. Mange fortsetter å bruke Nightscout til å samle inn dataene sine og til fjernovervåking. Selv om **AAPS** i seg selv er gratis, kan det koste noe (0–12 €) å sette opp Nightscout på en av de ulike plattformene, avhengig av hvor mye støtte du ønsker (se sammenligningstabellen), og om du vil fortsette å bruke Nightscout etter oppsettet eller ikke. **AAPS** virker med et bredt utvalg av rimelige (fra ca. 150 €) [Android-telefoner](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true). Det finnes ulike versjoner for bestemte steder og språk, og AAPS kan også brukes av personer som er [blinde](#accessibility-for-users-aaps-who-are-partially-or-completely-blind).

#### 9) Støtte
Ingen systemer for automatisk insulintilførsel er perfekte. Kommersielle systemer og systemer med åpen kildekode har mange av de samme feilene, både i kommunikasjon og ved midlertidig maskinvaresvikt. Det finnes støtte fra miljøet av AAPS-brukere på Facebook, Discord og GitHub, som har utformet, utviklet og selv bruker **AAPS**, over hele verden. Det finnes også støttegrupper på Facebook og hjelp fra klinikker/kommersielle selskaper for de kommersielle APS-systemene. Det er verdt å snakke med brukere, eller tidligere brukere, av disse systemene for å høre om vanlige feil, kvaliteten på opplæringen og hvor god den løpende støtten er.

#### 10) Forutsigbarhet, åpenhet og sikkerhet
**AAPS** er gjennomsiktig, logisk og forutsigbart, noe som kan gjøre det lettere å se når en innstilling er feil, og å justere den. Du kan se nøyaktig hva systemet gjør, hvorfor det gjør det, og sette grensene for hvordan det skal virke. Det legger kontrollen (og ansvaret) i dine hender. Dette kan gi brukeren trygghet, og bedre søvn.

#### 11) Tilgang til avanserte funksjoner gjennom utviklingsmodus (dev), inkludert full lukket loop
Denne **AAPS**-dokumentasjonen handler om hovedgrenen **«master»** i **AAPS**. Men det foregår forskning og utvikling hele tiden. Mer erfarne brukere kan ha lyst til å utforske de eksperimentelle funksjonene i **development**-grenen (utviklingsgrenen). Nyvinningene i utviklingsgrenen handler om strategier for full lukket loop (å slippe å gi bolus til måltider _osv._), og generelt om å gjøre livet med type 1-diabetes så enkelt som mulig.

#### 12) Mulighet til selv å bidra til videre forbedringer
Type 1-diabetes kan være svært frustrerende og isolerende. Å ha kontroll over sin egen diabetesteknologi, med mulighet til å «gi noe tilbake» ved å hjelpe andre på veien så snart du selv gjør fremskritt, kan være veldig givende. Du kan lære deg ting selv, finne hindringene, og lete etter – og til og med bidra til – ny utvikling og dokumentasjonen. Det vil være andre i miljøet med samme mål som du kan diskutere ideer med og samarbeide med. Dette er kjernen i #WeAreNotWaiting.

## Hvordan er AAPS sammenlignet med MDI og åpen loop?

Mangeinjeksjonsbehandling (MDI, (a) i **Figur 2** nedenfor) betyr vanligvis en injeksjon med langtidsvirkende insulin (_f.eks._ Tresiba) én gang om dagen, og injeksjoner med hurtigvirkende insulin (_f.eks._ Novorapid, Fiasp) til måltider eller som korreksjon. Åpen pumpebehandling (b) betyr at en pumpe gir basal med forhåndsprogrammerte doser av hurtigvirkende insulin, og at du gir boluser gjennom pumpen til måltider eller som korreksjon. Det grunnleggende i et loop-system er at loop-appen bruker glukosedataene fra sensoren til å be pumpen stoppe insulintilførselen når den forutser at du er på vei mot lavt blodsukker, og til å gi deg ekstra insulin hvis glukosenivået stiger og er forventet å bli for høyt (c). Selv om figuren er svært forenklet i forhold til virkeligheten, skal den vise de viktigste forskjellene mellom metodene. Det er mulig å oppnå svært god glukosekontroll med alle disse tre metodene.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Figur 2**. Enkel oversikt over (a) MDI, (b) pumpe med åpen loop og (c) pumpe med hybrid lukket loop.

## Hvordan er AAPS sammenlignet med andre loop-systemer?

Per 25. juni 2023 finnes det fire store lukket loop-systemer med åpen kildekode: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) og [Trio](https://triodocs.org) (tidligere FreeAPS X). Funksjonene i de ulike systemene er vist i tabellen nedenfor:


| Enhetstype | Navn                                                                | [AAPS](https://wiki.aaps.app)                   | [Loop](https://loopkit.github.io/loopdocs/)     | [Open APS](https://openaps.readthedocs.io/en/latest/) | [Trio](https://triodocs.org)                    |
| ---------- | ------------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------- |
| Telefon    | Android                                                             | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png) | ![ikke tilgjengelig](../images/unavailable.png)       | ![ikke tilgjengelig](../images/unavailable.png) |
| Telefon    | iPhone                                                              | ![ikke tilgjengelig](../images/unavailable.png) | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png)       | ![tilgjengelig](../images/available.png)        |
| Rigg       | liten datamaskin (1)                                                | ![ikke tilgjengelig](../images/unavailable.png) | ![ikke tilgjengelig](../images/unavailable.png) | ![tilgjengelig](../images/available.png)              | ![ikke tilgjengelig](../images/unavailable.png) |
| PUMPE      | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                 | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png)       | ![tilgjengelig](../images/available.png)        |
| PUMPE      | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png)       | ![tilgjengelig](../images/available.png)        |
| PUMPE      | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                  | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png) | ![ikke tilgjengelig](../images/unavailable.png)       | ![ikke tilgjengelig](../images/unavailable.png) |
| PUMPE      | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md)                 | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png)       | ![tilgjengelig](../images/available.png)        |
| PUMPE      | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                 | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png)       | ![tilgjengelig](../images/available.png)        |
| PUMPE      | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                       | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png) | ![ikke tilgjengelig](../images/unavailable.png)       | ![ikke tilgjengelig](../images/unavailable.png) |
| PUMPE      | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                         | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png) | ![ikke tilgjengelig](../images/unavailable.png)       | ![ikke tilgjengelig](../images/unavailable.png) |
| PUMPE      | [Medtrum TouchCare Nano 200U](../CompatiblePumps/MedtrumNano.md)    | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png)       | ![tilgjengelig](../images/available.png)        |
| PUMPE      | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)         | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png)       | ![tilgjengelig](../images/available.png)        |
| PUMPE      | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)        | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png) | ![ikke tilgjengelig](../images/unavailable.png)       | ![ikke tilgjengelig](../images/unavailable.png) |
| PUMPE      | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)       | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png) | ![ikke tilgjengelig](../images/unavailable.png)       | ![ikke tilgjengelig](../images/unavailable.png) |
| PUMPE      | [Eldre Medtronic](../CompatiblePumps/MedtronicPump.md)              | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)              | ![tilgjengelig](../images/available.png)        |
| PUMPE      | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                         | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png) | ![ikke tilgjengelig](../images/unavailable.png)       | ![ikke tilgjengelig](../images/unavailable.png) |
| PUMPE      | [CareLevo](../CompatiblePumps/CareLevo.md)                          | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png) | ![ikke tilgjengelig](../images/unavailable.png)       | ![ikke tilgjengelig](../images/unavailable.png) |
| CGM        | [Dexcom G7/One+/Stelo](../CompatibleCgms/DexcomG7.md)               | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png)       | ![tilgjengelig](../images/available.png)        |
| CGM        | [Dexcom One](../CompatibleCgms/DexcomG6.md)                         | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png)       | ![tilgjengelig](../images/available.png)        |
| CGM        | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                          | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)              | ![tilgjengelig](../images/available.png)        |
| CGM        | [Libre 3/3+](../CompatibleCgms/Libre3.md)                           | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png)       | ![tilgjengelig](../images/available.png)        |
| CGM        | [Libre 2/2+](../CompatibleCgms/Libre2.md)                           | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png)       | ![tilgjengelig](../images/available.png)        |
| CGM        | [Libre 1](../CompatibleCgms/Libre1.md)                              | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png)       | ![tilgjengelig](../images/available.png)        |
| CGM        | [Eversense](../CompatibleCgms/Eversense.md)                         | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png)       | ![tilgjengelig](../images/available.png)        |
| CGM        | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                        | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png) | ![ikke tilgjengelig](../images/unavailable.png)       | ![ikke tilgjengelig](../images/unavailable.png) |
| CGM        | [PocTech](../CompatibleCgms/PocTech.md)                             | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png) | ![ikke tilgjengelig](../images/unavailable.png)       | ![ikke tilgjengelig](../images/unavailable.png) |
| CGM        | [Ottai](../CompatibleCgms/OttaiM8.md)                               | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png) | ![ikke tilgjengelig](../images/unavailable.png)       | ![ikke tilgjengelig](../images/unavailable.png) |
| CGM        | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                          | ![tilgjengelig](../images/available.png)        | ![ikke tilgjengelig](../images/unavailable.png) | ![ikke tilgjengelig](../images/unavailable.png)       | ![ikke tilgjengelig](../images/unavailable.png) |
| CGM        | [Nightscout som BS-kilde](../CompatibleCgms/CgmNightscoutUpload.md) | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)        | ![tilgjengelig](../images/available.png)              | ![tilgjengelig](../images/available.png)        |

_Merknader til tabellen:_
1. En **rigg** er en liten datamaskin uten skjerm som du bærer med deg. Én støttet enhetstype er Intel Edison + Explorer Board, og den andre er Raspberry Pi + Explorer HAT eller Adafruit RFM69HCW Bonnet. De første APS-systemene var basert på dette oppsettet, fordi mobiltelefoner ikke kunne kjøre de nødvendige algoritmene. Bruken av disse systemene har gått ned, siden oppsettet på mobiltelefoner har blitt enklere, og telefoner har innebygd skjerm. Intel har også sluttet å selge Intel Edison. De utmerkede OpenAPS-algoritmene **oref0** og **oref1** er nå innebygd i AAPS og Trio.


En internasjonal fagfellevurdert konsensusuttalelse med praktisk veiledning om looping med åpen kildekode ble skrevet av og for helsepersonell, og publisert i et ledende medisinsk tidsskrift i 2022: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Den er vel verdt å lese (også for diabetesklinikken din), og oppsummerer de viktigste tekniske forskjellene mellom de ulike hybrid lukket loop-systemene med åpen kildekode.

Det er vanskelig å få en «følelse» for et system uten å bruke det, eller snakke med andre som bruker det, så ta kontakt med andre på Facebook/Discord og spør. De fleste synes **AAPS** er utrolig avansert sammenlignet med andre hybrid lukket loop-systemer (særlig de kommersielle), med et stort antall innstillinger og funksjoner som kan tilpasses, som beskrevet ovenfor. Noen kan synes dette er litt overveldende i begynnelsen, men det er ingen grunn til å undersøke alle mulighetene på en gang. Du kan gå frem så sakte eller så raskt som du selv vil, og det finnes hjelp å få på hvert steg av veien.


## Bruker AAPS kunstig intelligens eller en lærende algoritme?

Den nåværende versjonen av **AAPS** (4.0) har ingen algoritmer for maskinlæring, ingen insulinresponsmodeller med flere parametere, og ingen kunstig intelligens. Systemet er derfor åpent og gjennomsiktig i hvordan det virker, og kan forstås ikke bare av eksperter, men også av behandlere og pasienter. Det betyr også at hvis du har en timeplan som varierer mye (kanskje fra en stressende arbeidsuke til en avslappende ferie), og trolig trenger en vesentlig annen mengde insulin, kan du med en gang bytte til en svakere/sterkere tilpasset profil i **AAPS**. Et «lærende system» gjør denne justeringen for deg automatisk, men bruker sannsynligvis lengre tid på å justere insulintilførselen.

(which-system-is-right-for-me-or-my-dependent)=
## Hvilket system passer for meg eller den jeg har omsorg for?

I praksis er valget av system ofte begrenset av hvilken pumpe du allerede har eller kan få fra helsevesenet, og av hvilken telefon du velger (Apple eller Android). Hvis du ikke har pumpe ennå, har du det største utvalget av systemer. Teknologien utvikler seg hele tiden, pumper tas ut av markedet, og nye pumper og sensorer lanseres. De fleste systemer med åpen kildekode virker med de vanligste sensorene (Libre og Dexcom), eller tilpasses raskt til nye sensorer omtrent et år etter at de lanseres (med litt forsinkelse for testing av sikkerhet og stabilitet).

De fleste **AAPS**-brukere rapporterer mer tid i målområdet, lavere HbA1c og bedre livskvalitet fordi de har et system som kan justere basaldosene automatisk om natten mens de sover, og dette gjelder de fleste hybrid lukket loop-systemer. Noen foretrekker et svært enkelt system som ikke kan tilpasses så mye (da passer kanskje et kommersielt system best), mens andre synes denne mangelen på kontroll er svært frustrerende (da passer kanskje et system med åpen kildekode best). Hvis du (eller den du har omsorg for) nylig har fått diagnosen, er en vanlig vei å først venne seg til MDI pluss glukosesensor, så gå over til en pumpe som kan brukes til looping, og deretter gå videre til **AAPS**. Noen (særlig små barn) går likevel rett på pumpe.

Det er viktig å merke seg at **AAPS**-brukeren må være aktiv og feilsøke og løse problemer selv, med hjelp fra miljøet. Dette er en helt annen tankegang enn når du bruker et kommersielt system. Med **AAPS** har brukeren mer kontroll, men også ansvaret, og må være komfortabel med det.

## Er det trygt å bruke systemer med åpen kildekode, som AAPS?

### Sikkerheten i AAPS-systemet
Et mer presist spørsmål er kanskje «er det trygt **sammenlignet** med insulinbehandlingen jeg har i dag?», siden ingen måte å gi insulin på er uten risiko. Det finnes mange kontroller og sikkerhetsmekanismer i **AAPS**. En nyere [artikkel](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) så på bruken av **AAPS** i et datasimulert oppsett, som var en effektiv måte å teste objektivt hvor trygt og effektivt systemet er. Mer generelt bruker mange tusen mennesker over hele verden systemer for automatisk insulintilførsel med åpen kildekode, og bruken fortsetter å øke globalt.

Alle enheter som bruker radiokommunikasjon, kan hackes, og det gjelder også en insulinpumpe uten loop. Per i dag kjenner vi ikke til at noen har forsøkt å skade personer ved å hacke diabetesutstyret deres. Det finnes likevel flere måter å beskytte seg mot slik risiko på:

1.  Begrens både maks tillatt bolus og maks midlertidig basal i pumpeinnstillingene til mengder du mener er tryggest. Dette er harde grenser som vi ikke tror noen ondsinnet hacker kan omgå.

2.  Slå på CGM-alarmer for både høyt og lavt blodsukker.

3.  Overvåk insulintilførselen din på nett. Nightscout-brukere kan sette opp flere alarmer som varsler om mange ulike tilstander, inkludert tilstander som er langt mer sannsynlige enn et ondsinnet angrep. I tillegg til høye og lave verdier kan Nightscout vise diagnosedata som er nyttige for å sjekke at pumpen virker som den skal, inkludert nåværende IOB, pumpens historikk for midlertidig basal og pumpens bolushistorikk. Nightscout kan også settes opp til å varsle brukeren aktivt om uønskede tilstander, som forventet høyt og lavt blodsukker, lite insulin i reservoaret og lavt pumpebatteri.

Hvis noen gjorde et ondsinnet angrep på insulinpumpen din, ville disse tiltakene redusere risikoen betydelig. Alle som vurderer å bruke **AAPS**, må veie risikoen ved å bruke **AAPS** mot risikoen ved å bruke et annet system.

#### Sikkerhet når blodsukkerkontrollen bedres for raskt

En rask senking av HbA1c og bedre blodsukkerkontroll høres fristende ut. Men å senke gjennomsnittlig blodsukker _for raskt_ ved å starte med et lukket loop-system kan gi varige skader, blant annet på øynene, og smertefull nevropati som aldri går over. Denne skaden kan unngås ganske enkelt ved å senke nivåene saktere. Hvis du har høy HbA1c nå og går over til AAPS (eller et annet lukket loop-system), bør du diskutere denne mulige risikoen med behandlingsteamet ditt før du starter, og avtale en tidsplan med dem. Mer generell informasjon om hvordan du senker glukosenivået trygt, med lenker til medisinsk litteratur, finner du i sikkerhetsdelen [her](#preparing-safety-first).

#### Medisinsk sikkerhet rundt utstyr, forbruksmateriell og andre legemidler

Bruk en testet, fullt fungerende insulinpumpe og CGM som er FDA- eller CE-godkjent, til en kunstig bukspyttkjertel-loop. Endringer i maskinvare eller programvare på disse komponentene kan gi uventet insulindosering, og det utgjør en betydelig risiko for brukeren. Hvis du finner eller blir tilbudt ødelagte, modifiserte eller hjemmelagde insulinpumper eller CGM-mottakere, må du ikke bruke dem til å lage et AAPS-system.

Bruk originalt forbruksmateriell som innstikkere, kanyler og insulinbeholdere som er godkjent av produsenten av pumpen og CGM-en din. Bruk av utestet eller modifisert utstyr kan gi unøyaktige CGM-verdier og feil i insulindoseringen. Insulin er svært farlig ved feil dosering – ikke lek med livet ditt ved å hacke forbruksmateriellet ditt.

Ikke bruk SGLT-2-hemmere (glifloziner) når du bruker **AAPS**, fordi de senker blodsukkeret på en måte som ikke kan beregnes. Å kombinere denne effekten med et system som senker basaldosene for å få BS opp, er farlig. Det står mer om dette i den generelle [sikkerhetsdelen](#preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## Hvordan kan jeg ta opp AAPS med behandlingsteamet mitt?

Vi oppfordrer brukere til å snakke med behandlerne sine om at de har tenkt å bruke **AAPS**. Ikke vær redd for å ha en ærlig samtale med diabetesteamet ditt hvis du har tenkt å bruke **AAPS** (eller en annen OS-AID-loop, for den saks skyld). Åpenhet og tillit mellom pasient og lege er helt avgjørende.

### Forslag til fremgangsmåte:
Start en samtale med behandleren din for å finne ut hvor godt kjent og hvor positiv behandleren er til diabetesteknologi som CGM, pumper, hybride looper og kommersiell looping. Behandleren/endokrinologen din bør kjenne den grunnleggende teknologien og være villig til å diskutere med deg nye fremskritt innen kommersielle loop-produkter som er tilgjengelige i deres region.

#### Lokal presedens

Finn ut hva behandlerne/endokrinologene dine mener om OS-AID-loop _kontra_ kommersiell looping, og vurder hvor mye de kan om dette området. Kjenner de til **AAPS**, og kan de dele nyttige erfaringer med deg fra arbeid med pasienter som bruker OS-AID-looping?

Spør om teamet ditt har pasienter som allerede bruker OS-AID-looping. På grunn av taushetsplikten kan ikke leger gi deg opplysninger om andre pasienter uten samtykke fra den det gjelder. Men hvis du vil, **kan** du be dem gi **din** kontaktinformasjon til en pasient som allerede bruker OS-AID-looping, hvis behandleren mener det finnes en du kan «klaffe» med, og si at du gjerne vil at pasienten tar kontakt med deg for å snakke om OS-AID-looping. Behandlere er ikke forpliktet til å gjøre dette, men noen gjør det gjerne, fordi de ser hvor viktig støtte fra likepersoner er i håndteringen av type 1-diabetes. Det kan også være nyttig å møte hyggelige OS-AID-loopere i nærheten. Dette er selvsagt opp til deg, og ikke helt nødvendig.

#### Nasjonal og internasjonal presedens

Hvis du føler at teamet ditt ikke støtter deg i å loope med **AAPS**, kan disse punktene hjelpe i diskusjonen:

a) **AAPS**-systemet er utformet AV pasienter og deres omsorgspersoner. Det er utformet med sikkerhet som det viktigste, men bygger også på dyp erfaring fra pasienter. Det finnes mange tusen **AAPS**-brukere over hele verden. Det er derfor sannsynlig at det finnes andre pasienter som bruker OS-AID-looping blant pasientene på klinikken din (enten de vet om det eller ikke).

b) Ny fagfellevurdert veiledning publisert i det internasjonalt ledende medisinske tidsskriftet [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)(_1_) har bekreftet at OS-AID-looper er **trygge** og **effektive for å bedre diabeteskontrollen**, inkludert tid i målområdet. Det kommer jevnlig artikler i ledende tidsskrifter som [Nature](https://doi.org/10.1038/d41586-023-02648-9)(_3_) som viser fremgangen i OS-AID-loopmiljøet.

c) Å starte med **AAPS** innebærer en _gradvis_ overgang fra pumpe med «åpen» loop, via stopp ved lavt BS, til hybrid «lukket» loop, ved å fullføre en rekke opplæringsmål. Det er altså et strukturert program som krever at brukeren viser et visst nivå av kompetanse på hvert trinn, og finjusterer grunninnstillingene sine (basal, ISF og ICR) før loopen kan lukkes.

d) Du får teknisk støtte fra OS-AID-miljøet gjennom GitHub, Discord og lukkede Facebook-grupper.

e) Du kan levere **informasjon om både CGM og insulin-looping/pumpe** som samlede rapporter på klinikkbesøk (via Nightscout eller Tidepool), enten på papir eller på skjerm (hvis du tar med en bærbar PC/et nettbrett). Når både CGM- og insulindata samles på ett sted, kan behandleren bruke tiden sin mer effektivt på å gå gjennom rapportene dine, og det gir et bedre grunnlag for å vurdere fremgangen din.

f) Hvis teamet ditt fortsatt er sterkt imot, kan du gi behandleren utskrifter av referanseartiklene det lenkes til i teksten her, og gi dem lenken til **AAPS**-delen for behandlere: [For behandlere – en generell introduksjon og veiledning til **AAPS**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Støtte til OS-AID-looping fra andre behandlere

Artikkelen som ble publisert i [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_) (ledet av King’s og Guy’s and St Thomas’ NHS Foundation Trust, med dr. Sufyan Hussain, overlege i diabetologi og honorary senior lecturer ved King’s i London, som medleder) gir:

a) **Forsikring** til helsepersonell om at OS-AID-systemer for kunstig bukspyttkjertel / åpen kildekode er et «trygt og effektivt behandlingsalternativ» for type 1-diabetes, og veiledning om anbefalinger, diskusjoner, støtte og dokumentasjon;

b) **Anerkjennelse** av at systemer for automatisk insulintilførsel («AID») med åpen kildekode kan øke tid i målområdet (TIR), samtidig som de reduserer variasjonen i blodsukkeret og antall episoder med hypo- og hyperglykemi i ulike aldersgrupper, kjønn og miljøer;

c) **Anbefaling** om at helsepersonell bør **støtte** pasienter med type 1-diabetes, eller deres omsorgspersoner, som velger å håndtere diabetesen med et AID-system med åpen kildekode;

d) Anbefaling om at helsepersonell bør forsøke å sette seg inn i alle behandlingsalternativer som kan være til nytte for pasientene, inkludert tilgjengelige AID-systemer med åpen kildekode.  Hvis helsepersonell ikke har ressurser til å sette seg inn i dette selv, eller har juridiske eller regulatoriske betenkeligheter, bør de vurdere å **samarbeide med annet helsepersonell** som har det;

e) Understreking av at alle som bruker CGM, bør ha åpen tilgang i sanntid til **sine egne helsedata** til enhver tid

f) Understreking av at disse systemene med åpen kildekode ikke har gått gjennom de samme regulatoriske vurderingene som kommersielt tilgjengelig medisinsk teknologi, og at det ikke finnes kommersiell teknisk støtte. Det finnes likevel **omfattende støtte fra miljøet**; og

g) En anbefaling om at **regelverk og juridiske rammer** bør oppdateres for å gi klarhet om at etisk og effektiv behandling med slike systemer med åpen kildekode er tillatt.

En annen artikkel i [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) peker også på at «samtykkeveiledningen» fra det britiske General Medical Council legger stor vekt på at lege og pasient tar beslutninger sammen. Legen bør forklare mulige fordeler, risikoer, byrder og bivirkninger ved OS-AID APS, og kan anbefale et bestemt alternativ uten å presse pasienten.

Til syvende og sist er det opp til pasienten å veie disse faktorene, sammen med eventuelle ikke-kliniske forhold som er relevante for dem, og bestemme hvilket behandlingsalternativ de eventuelt vil godta.

Hvis en lege oppdager på klinikken at pasienten looper med et OS-AID-system, er legen ikke fritatt fra plikten til å følge opp pasienten, bare fordi legen ikke har forskrevet akkurat den teknologien pasienten bruker; behandlere må fortsette å følge opp pasientene.

Leger (i hvert fall i Storbritannia) har ikke forbud mot å forskrive ikke-godkjente legemidler, og kan bruke sitt kliniske skjønn. De bør derfor bruke sitt kliniske skjønn for å avgjøre om et OS-AID APS passer for en bestemt pasient, og diskutere det de mener er fordeler og ulemper med pasienten.

#### Artiklene det vises til ovenfor, og andre nyttige lenker og posisjonsdokumenter, er listet opp nedenfor:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Posisjonsdokument fra Berlin Institute of Health, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (posisjonsdokument og veileder fra Diabetes Canada) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Nederland (EN/NL) – for behandlere – [slik hjelper du personer som bruker automatisk insulintilførsel med åpen kildekode](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALLRandomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Resultater fra OPEN-prosjektet, et EU-finansiert prosjekt om Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology (https://www.open-diabetes.eu/publications)



## Hvorfor kan jeg ikke bare laste ned AAPS og bruke det med en gang?

**AAPS**-appen finnes ikke i Google Play – av juridiske grunner må du bygge den selv fra kildekoden. **AAPS** er ikke lisensiert, det vil si at det ikke er godkjent av noen regulatorisk myndighet i noe land. **AAPS** regnes som et medisinsk eksperiment du gjør på deg selv, og brukes på brukerens egen risiko.

Å sette opp systemet krever tålmodighet, besluttsomhet og at du gradvis bygger opp teknisk kunnskap. All informasjon og støtte finnes i denne dokumentasjonen, andre steder på nett, eller hos andre som allerede har gjort det. Mange tusen mennesker har bygd **AAPS** og bruker det i dag over hele verden.

Utviklerne av **AAPS** tar sikkerhet ekstremt alvorlig, og ønsker at andre skal ha en god opplevelse med **AAPS**. Derfor er det helt nødvendig at hver bruker (eller omsorgsperson, hvis brukeren er et barn):

- bygger AAPS-systemet selv og arbeider seg gjennom **opplæringsmålene**, slik at de har rimelig gode personlige innstillinger og forstår det grunnleggende om hvordan **AAPS** virker, innen de «lukker loopen»;

- sikkerhetskopierer systemet sitt ved å eksportere og lagre viktige filer (som keystore og .json-filen med innstillinger) på et trygt sted, slik at du raskt kan sette opp alt igjen om nødvendig;

- oppdaterer til nyere master-versjoner når de blir tilgjengelige; og

- vedlikeholder og overvåker systemet for å sikre at det virker som det skal.

## Hvordan er AAPS-systemet koblet sammen?

**Figur 3 (nedenfor)** viser ett eksempel på **AAPS**-systemet for en bruker som ikke trenger følgere som samhandler med systemet. Annen programvare og andre plattformer med åpen kildekode som ikke er vist, kan også integreres.

![21-06-23 AAPS connectivity no followers](../images/AAPS-connectivity-no-followers.png)


**Figur 4 (nedenfor)** viser det fulle potensialet i **AAPS**-systemet for en bruker som har følgere og trenger å overvåke og justere systemet eksternt (som et barn med type 1-diabetes). Annen programvare og andre plattformer med åpen kildekode som ikke er vist, kan også integreres.

![21-06-23 AAPS overview with followers](../images/AAPS-overview-with-followers.png)

## Hvordan blir AAPS stadig utviklet og forbedret?

De fleste **AAPS**-brukere bruker den fullt testede **master**-versjonen av AAPS, som er testet for feil og problemer før den slippes til miljøet. I kulissene prøver utviklerne ut nye forbedringer og tester dem i «utvikler»-versjoner (**dev**) av **AAPS** sammen med en gruppe brukere som gjerne oppdaterer på kort varsel for å rette feil. Hvis forbedringene fungerer godt, slippes de som en ny «master»-versjon av **AAPS**. Alle nye master-utgivelser kunngjøres i Facebook-gruppen, slik at vanlige **AAPS**-brukere kan lese om dem og oppdatere til den nye master-versjonen.

Noen erfarne og trygge **AAPS**-brukere eksperimenterer med ny teknologi og med dev-versjoner av **AAPS**-appen. Det kan være interessant for mindre eventyrlystne brukere å lese om, uten å måtte gjøre det selv! Folk deler gjerne disse eksperimentene i Facebook-gruppen også.

Du kan lese mer om noen av disse eksperimentene og diskusjonene om ny teknologi her:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## Hvem kan ha nytte av AAPS?

| Brukertype                                                        |
| ----------------------------------------------------------------- |
| ✔️ person med type 1-diabetes                                     |
| ✔️ omsorgsperson eller forelder til en person med type 1-diabetes |
| ✔️ blinde brukere med type 1-diabetes                             |
| ✔️ *behandlere og helsepersonell                                  |

Tabellen ovenfor forutsetter at brukeren har tilgang til både en kontinuerlig glukosemåler og en insulinpumpe.

*Alle data fra **AAPS** kan gjøres tilgjengelige for helsepersonell via plattformer for datadeling, blant annet Nightscout, som gir logging og sanntidsovervåking av CGM-data, insulintilførsel, registrerte karbohydrater, prediksjoner og innstillinger. Nightscout-registreringene inkluderer daglige og ukentlige rapporter som kan hjelpe helsepersonell i samtaler med pasienter med type 1-diabetes, med mer nøyaktige data om glykemisk kontroll og eventuelle forhold rundt adferd.

(accessibility-for-users-aaps-who-are-partially-or-completely-blind)=

### Tilgjengelighet for AAPS-brukere som er delvis eller helt blinde

#### Daglig bruk av AAPS:
AAPS kan brukes av blinde. På Android-enheter har operativsystemet et program som heter TalkBack. Det gjør det mulig å orientere seg på skjermen ved hjelp av talte beskjeder, som en del av operativsystemet. Med TalkBack kan du betjene både smarttelefonen og AAPS uten å måtte se.

#### Bygge AAPS-appen:
Som bruker bygger du AAPS-appen i Android Studio. Mange bruker Microsoft Windows til dette, der det finnes en skjermleser som tilsvarer TalkBack. Siden Android Studio er et Java-program, må komponenten «Java Access Bridge» være slått på i Kontrollpanel. Ellers vil ikke skjermleseren på PC-en snakke i Android Studio.

Hvordan du gjør dette avhenger av operativsystemet ditt. To metoder er beskrevet nedenfor:

1) Skriv «Kontrollpanel» i søkefeltet i Windows Start-menyen, og åpne med Enter. Da åpnes «Alle elementer i Kontrollpanel».

Åpne «Hjelpemiddelsenter» (Ease of Access Centre).

Åpne deretter «Bruk datamaskinen uten skjerm» med Enter.

Under **Hør tekst lest høyt** (Hear text read aloud) velger du **Slå på Skjermleser** (turn on narrator) og **Slå på lydbeskrivelse** (turn on audio display), og klikker så på **Bruk** (apply).

eller:

2) Trykk på Windows-tasten og skriv «Kontrollpanel» i søkefeltet, og åpne med Enter. Da åpnes «Alle elementer i Kontrollpanel».

Trykk på første bokstav i navnet (C på engelsk, H på norsk) for å komme til «Hjelpemiddelsenter» (Center for Ease of Use), og åpne med Enter.

Åpne deretter «Bruk datamaskinen uten skjerm» med Enter.

Nederst der finner du avkrysningsboksen «Aktiver Java Access Bridge» (Enable Java Access Bridge). Kryss av i den.

Ferdig, bare lukk vinduet! Skjermleseren skal nå virke.



Vil du vite hvordan du kommer i gang med å sette opp AAPS? Ta en titt på delen om [forberedelser](../Getting-Started/PreparingForAaps.md).
