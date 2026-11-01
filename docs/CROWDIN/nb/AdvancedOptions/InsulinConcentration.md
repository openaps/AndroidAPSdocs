(Insulin-Concentration)=
# Insulinkonsentrasjon

```{warning}
Alle kommersielle pumper er laget for å brukes **BARE** med insulin U100. Det kan være farlig å bruke en annen insulinkonsentrasjon i en pumpe. Selv om stadig flere brukere kjører AAPS med andre konsentrasjoner, må omregningen alltid håndteres, og den fører ofte til feil (selv for svært erfarne brukere!).
```

## Litt repetisjon om insulin

Dette kapittelet dekker de viktigste begrepene om måling og tilførsel av insulin.

### Insulinenheten: et mål på virkning

Insulin måles i **internasjonale enheter (IE)**, som angir den biologiske virkningen (evnen til å senke blodsukkeret), ikke bare den fysiske massen.

- **Definisjon:** 1 IE tilsvarer virkningen av en bestemt mengde insulin, standardisert til **omtrent 0,04167 mg**.
- **Viktig:** En «enhet» betyr den samme biologiske virkningen for alle insulintyper, slik at doseringen blir lik.

### Insulinkonsentrasjoner

Insulin finnes i ulike styrker, definert som antall enheter per milliliter (ml).

- **U100:** Den globale standarden, med **100 IE/ml**.
- **U200–U500:** Mer konsentrerte insuliner (U200 har for eksempel 200 IE/ml) for mindre injeksjonsvolum.
- **U40/U50:** Mindre vanlige, historiske konsentrasjoner (40 IE/ml og 50 IE/ml). **U40 krever egne U40-sprøyter.**
- **Manuell fortynning:** En klinisk praksis for å lage sterkt fortynnet insulin (for eksempel U50, U10) for sjeldne tilfeller som nyfødte eller ekstrem insulinsensitivitet. Dette krever svært nøyaktig tilberedning på apotek.

```{admonition} Critical Warning
:class: danger
Å bruke en konsentrasjon som ikke passer til utstyret, er ekstremt farlig og kan gi en alvorlig overdose eller underdose. **Sjekk alltid tre ganger at insulinkonsentrasjonen stemmer med sprøyten, pennen eller pumpen.**
```

## Når brukes en annen konsentrasjon enn standard?

Insulinpumper er laget for U100-insulin, men noen spesielle medisinske situasjoner krever en annen konsentrasjon. Disse situasjonene krever ekstrem forsiktighet og svært nøye oppfølging.

### Brukstilfelle 1: fortynnet insulin for svært lave doser

- **Situasjon:** Behandling av diabetes type 1 hos spedbarn og småbarn.
- **Problem:** Insulinbehovet deres er så lavt at pumpens minste dose (for eksempel 0,05 E) fortsatt kan være for stor. Det gjør det vanskelig å få presis blodsukkerkontroll og gir høy risiko for føling.
- **Løsning:** Bruk sterkt fortynnet insulin (for eksempel U10, som er 10 IE/ml).
- **Effekt:** Dette øker væskevolumet som gis per enhet insulin. Når «pakkene» med insulin blir større i volum, men svakere i konsentrasjon, gir det mye finere justering og større dosenøyaktighet med pumpens vanlige innstillinger.

```{admonition} Critical Safety Note on Dilution
:class: danger
Fortynning av insulin er en prosedyre med høy risiko, og den må aldri gjøres hjemme uten egen opplæring og medisinsk oppfølging. Den må gjøres av helsepersonell eller en opplært omsorgsperson, med steril fortynningsvæske som er laget spesielt for den insulintypen. **Bruk aldri vann fra springen, saltvann eller annen væske**, for det kan gjøre insulinet virkningsløst, endre virkningen og tilføre farlige forurensninger.
```

### Brukstilfelle 2: konsentrert insulin ved høyt insulinbehov eller betydelig insulinresistens

- **Situasjon:** Behandling av voksne eller ungdommer med betydelig insulinresistens, eller personer som får lokale smerter av tilsetningsstoffene i vanlig insulin.
- **Problem:**
  1. **Høyt behov:** Et svært høyt daglig insulinbehov kan overstige pumpens grenser for største bolus eller daglig tilførsel.
  1. **Smerte:** Konserveringsmidlene i insulin kan gi svie eller irritasjon ved infusjon.
- **Løsning:** Bruk et mer konsentrert insulin, for eksempel U200 (200 IE/ml).
- **Effekt:** Dette gir den nødvendige insulindosen i halve volumet. For brukeren må pumpens interne innstillinger justeres (for eksempel halveres basaldoser og boluser) for å ta hensyn til den doble konsentrasjonen, slik at riktig antall enheter blir gitt. Det reduserer også volumet av mulig irriterende væske som gis under huden.

## Slik håndterer du insulinkonsentrasjon med AAPS (AAPS 3 og eldre)

Å bruke annet insulin enn U100 i en AAPS-loop krever svært nøye konfigurasjon, slik at programvarens beregninger stemmer med insulinet som faktisk gis. En vanlig metode er «å bruke en modifisert profil».

### Bruke en modifisert profil

Denne metoden går ut på å lure AAPS til å tro at pasientens insulinbehov er lavere enn det er, for å veie opp for at pumpen gir mer konsentrert insulin enn den er laget for. Brukstilfellet nedenfor gjelder U200-konsentrasjon fylt i en pumpe som er laget for U100.

- **Kjerneproblemet:** En pumpe laget for U100 er kalibrert til å gi **10 µl** for **1 enhet**. Hvis du fyller den med U200 (1 enhet U200 tilsvarer **5 µl** insulin), gir pumpen **10 µl** insulin når du velger **1 enhet**, men det volumet inneholder nå **2 enheter U200-insulin**. Det gir en overdose på 100 %.
- **Løsningen «Profilbytte 50 %»:** For å rette opp dette skaleres hele behandlingsprofilen til pasienten til å være «halvparten så sterk» inne i AAPS.
  1. Brukeren lager en ny profil basert på sin vanlige U100-profil, med funksjonen «Profilbytte **50 %**».
  1. Det gir en ny profil der:
     - **Basaldosene** er halvert.
     - **Insulin-til-karbohydratforholdet (IK)** er doblet (for eksempel blir 1:10 g til 1:20 g).
     - **Insulinsensitivitetsfaktoren (ISF)** er doblet (for eksempel blir «1 enhet senker BS med 50 mg/dL (2,8 mmol/L)» til «1 enhet senker BS med 100 mg/dL (5,6 mmol/L)»).
- **Det korrigerte resultatet:** AAPS tror nå at pasienten bare trenger halvparten så mye insulin. Når den beregner og gir ordre om en bolus på **1 enhet**, gir pumpen (laget for U100, men fylt med U200) **10 µl**, som inneholder **2 ekte enheter U200-insulin**. Fordi AAPS beregnet denne dosen ut fra en profil med «halv styrke», er denne tilførselen på **2 ekte enheter** den riktige, tilsiktede dosen. Loopens regnestykke med «halv styrke» passer sammen med pumpens tilførsel med «dobbel styrke».

```{admonition} Critical Risks and Common Errors
:class: caution

Denne metoden gir betydelig risiko, fordi den skaper et varig avvik mellom dataene i appen og den fysiske virkeligheten.

**Hovedfeilen: feil ved «ekstern bolus»**

Den vanligste feilen skjer når insulin gis og registreres **utenfor** systemet AAPS–pumpe.

- **Situasjonen:** AAPS bruker den modifiserte profilen og beregner en bolus på **5 enheter** til et måltid. Brukeren setter den med en U200-penn.
- **Den doble feilen:**
  1. **Feil dosevalg:** Brukeren tenker «AAPS beregner 5 enheter» og venter, på grunn av U200-pennen, å gi **5 ekte enheter U200** uten noen omregning. Men fordi profilen er halvert, trenger kroppen egentlig **10 ekte enheter**. Dette er en **underdose på 50 %**, som kan gi høyt blodsukker.
  1. **Feil beregning av aktivt insulin (IOB) (overvurdert IOB):** Når brukeren registrerer denne eksterne bolusen i AAPS, registrerer han eller hun **5 enheter**. Det er feil. Siden AAPS-profilen er for U200, er **1 enhet i AAPS lik 2 ekte enheter**. De 5 ekte enhetene som ble gitt med pennen, skulle derfor vært registrert som **2,5 enheter** i appen. Ved å registrere 5 enheter overvurderer brukeren IOB med 100 %. AAPS tror nå at det er 5 «konsentrerte enheter» aktive (tilsvarer 10 ekte enheter), mens bare 5 ekte enheter er aktive. Det kan få loopen til å holde tilbake basalinsulin eller redusere senere boluser, og det forverrer risikoen for høyt blodsukker fra den første underdosen.

**Andre risikoer:**

- **Villedende data og rapporter:** Alle data i AAPS eller Nightscout – inkludert IOB, total daglig dose (TDD) og historiske rapporter – er i «konsentrerte enheter». Det gir et forvrengt bilde til brukeren og behandlingsteamet. En lege som ser på en rapport, kan se en TDD på 30 enheter uten å forstå at pasienten faktisk fikk 60 ekte enheter, og det kan gi feil vurderinger av behandlingen.
- **Endret tankemodell:** Etter lang tids bruk begynner brukeren å «tenke» i appens halverte verdier. Han eller hun lærer seg at ISF er 100 mg/dL (5,6 mmol/L) eller at basalen er 0,5 E/t, og glemmer at disse er «konsentrerte». Det skaper en farlig avhengighet av systemet og tap av kontakt med det faktiske insulinbehovet, som er avgjørende for sikkerheten ved pumpefeil eller problemer med appen.

**Konklusjon:** Denne metoden krever full årvåkenhet og tvinger brukeren til hele tiden å regne om mellom en «konsentrert verden» i appen og den fysiske verden. All insulintilførsel utenfor systemet og all gjennomgang av data bryter denne tankemodellen og utgjør en alvorlig risiko. Den endrer grunnleggende betydningen av hvert eneste tall i systemet.
```

## Bruke konsentrasjonsparameteren (ny funksjon i AAPS 4.0)

For å redusere risikoen ved å bruke en modifisert profil håndterer en ny funksjon insulinkonsentrasjonen direkte i AAPS. Denne funksjonen gjør omregningene automatisk, slik at hovedappen alltid arbeider i **ekte internasjonale enheter (IE)**.

### Slik virker det: automatisk omregning

Grunnprinsippet er et klart skille mellom appens logikk og kommunikasjonen med pumpen:

- **AAPS bruker internasjonale enheter:** AAPS-databasen, algoritmene, rapportene og loggene **bruker alltid ekte IE**. Det betyr at IOB, TDD og behandlingsinnstillingene dine (basal, ISF, IK) viser de faktiske biologiske insulinenhetene.
- **Pumpedriveren bruker konsentrerte enheter:** Alle verdier som sendes til eller mottas fra pumpedriveren, regnes automatisk om, slik at pumpedriveren arbeider i «konsentrerte enheter» ut fra den valgte konsentrasjonen.
  - **Eksempel med U200:** Når brukeren ber om en **bolus på 1 enhet**, mottar pumpedriveren **0,5 CU (konsentrerte enheter)** før den sender den til pumpen. Pumpen (satt opp for U100) gir så **5 µl**, som inneholder **1 IE U200-insulin**.

### Fordeler og gjenværende risiko

**Fordeler:**

- Fjerner behovet for en modifisert profil og omregningsfeilene som følger med den.
- Brukeren kan alltid «tenke» i ekte IE.
- For en ekstern bolus med penn velger du bare den ventede mengden insulin på pennen (uansett hvilken penn og insulinkonsentrasjon du bruker). Ingen omregning er nødvendig, fordi U100- og U200-penner alltid bruker IE for valg av enheter.
- Alle AAPS-rapporter og -data (TDD, IOB) er i ekte IE, og det gir klarhet for brukeren og behandlingsteamet.
- Fjerner risikoen for å regne feil på eksterne boluser, fordi de registreres i ekte IE.

**Gjenværende risiko:**

- **Overgang i tankemodell:** Brukere som går over fra metoden med «modifisert profil», må bytte profilen tilbake til den riktige, ekte profilen (det vil si dobbelt så sterk hvis de kommer fra U200), og trenger tid til å tilpasse sin **tankemodell**. Etter å ha vent seg til «konsentrerte» verdier i appen må de lære på nytt å stole på de **ekte, uskjulte IE-verdiene** som vises overalt. Denne overgangsperioden gir risiko for feiltolkning.
- **Manuell bolus fra pumpen:** Å bruke pumpens egen bolusfunksjon (utenom AAPS) gir en overdose på 100 %, fordi pumpen gir U200-insulin med volumberegning for U100.
- **Generell advarsel:** Å bruke en annen konsentrasjon enn standard er fortsatt en avansert prosedyre med risiko, og det anbefales ikke offisielt.

```{admonition} Never use the pump's own interface (tube pump users) to deliver a bolus manually
:class: danger
Fest en varig lapp på pumpen med **«U200-insulin»** som påminnelse, så du aldri glemmer det!
```

### Visning i brukergrensesnittet

For å gjøre det tydelig viser brukergrensesnittet både ekte og konsentrerte enheter der det er relevant. Merk at brukergrensesnittet er uendret hvis det gjeldende insulinet er U100.

**Eksempler på visning:**

- **Bolusfremdrift-dialogen:**
  - Bolusfremdrift-dialogen ligger i kjernen av AAPS-appen, så bare informasjonen i IE vises (i samsvar med det brukeren valgte): **`2.50 E / 10.00 E levert`**
- **Pumpedriverens grensesnitt (gjeldende status):**
  - I pumpeoversikten vises den leverte mengden i begge enheter. Hvis for eksempel `U200` er valgt: **`Siste bolus: 10 E (5 CU) (10')`**

**Merk:** Begge enhetene (E og CU) vises bare i hovedoversikten for pumpen. Avhengig av pumpen din kan du ha andre skjermbilder der bare de konsentrerte enhetene vises. Historiske data i pumpedriverne vil vanligvis fortsatt være i «konsentrerte enheter».

### Aktivere funksjonen

På grunn av sikkerhetsrisikoen er denne parameteren ikke aktivert som standard. For å aktivere den fullfører du opplæringsmål 3 og slår på **Støtte for insulinkonsentrasjon** under Generelle innstillinger.

### Opprette et nytt insulin med en annen konsentrasjon

For å opprette et insulin med en annen konsentrasjon åpner du først **Administrer → Insulininnstillinger**.

- Trykk på «+»-ikonet nederst på skjermen.
- Velg den nye ventede konsentrasjonen i nedtrekksmenyen (U10, U20, U50, U100 og U200 er tilgjengelige).
  - Fortynnede konsentrasjoner som U10, U20 eller U50 er for barn med svært lave basaldoser.
  - U200 er mest for voksne med høyt insulinbehov.

  ![Nedtrekksmenyen for konsentrasjon i Insulininnstillinger](../images/v4/Insulin/insulin_concentration_dropdown.png)

- Juster topptid og insulinets virkningstid (DIA), og tilpass Kallenavn for insulin (valgfritt).
- Bruk lagreknappen øverst til høyre på skjermen.

Nå er insulinet opprettet, men det kan ikke velges direkte fra **Insulininnstillinger**.

### Bytte konsentrasjon fra U100 til Uxxx (AAPS 4)

```{admonition} Switching concentration is only allowed during a reservoir or patch/pod change
:class: warning
Av sikkerhetsgrunner registrerer AAPS et konsentrasjonsbytte bare ved et reservoarbytte eller et patch-/pod-bytte.
```

Når du starter fra U100-insulin, er hele profilen din, historiske data og rapporter i samsvar med standarden for internasjonale enheter, så byttet er svært «enkelt»:

- For en patch-/pod-pumpe har du et eget steg når du bytter pumpe, der du velger insulinet du fyller i den.
- For en slangepumpe trykker du på knappen Prime/fylling (for insulinbytte) i oversikten (utvidet statusrad), og deretter på knappen «Endre».

1. Velg målkonsentrasjonen i nedtrekksmenyen (for eksempel `U200`).
1. Velg deretter riktig insulin nedenfor. Til du bekrefter, står det **Vil bli aktivert** over navnet (i stedet for **Aktiv for øyeblikket**).

   ![Et insulin som er valgt, men ikke bekreftet ennå: Vil bli aktivert](../images/v4/Insulin/insulin_will_be_activated.png)

1. **Viktig:** konsentrasjonsbyttet registreres i AAPS først etter at profilbyttet er brukt på pumpen.
   - Dette steget er obligatorisk for alle patch-/pod-pumper.
   - For slangepumper venter du til profilbyttet er brukt på pumpen, eller gjør det i **Administrer → Profil** eller **Insulininnstillinger**.

Det er alt!

Hvis et midlertidig **profilbytte** (et med varighet) kjører når du bytter insulin, får også profilen som kommer tilbake når det midlertidige byttet er over, det nye insulinet. Det gamle insulinet kommer ikke tilbake.

### Bytte konsentrasjon for brukere med U200-insulin sammen med en 50 %-profil (AAPS 4)

Når du starter med U200 som allerede brukes i pumpen din, men sammen med en 50 %-profil, må du gjøre noen ekstra steg sammenlignet med standardbyttet fra U100-insulin.

Husk at det vanskeligste sannsynligvis ikke blir å håndtere byttet riktig i AAPS, men å lære hjernen din å tenke «IE» i stedet for «CU» igjen. Alle standardverdier for boluser (frokost, lunsj, middag ...) blir dobbelt så høye, og det samme gjelder TDD, basaldoser osv. Du må være svært forsiktig så du ikke gjør feil de første ukene, til du «tenker i» internasjonale enheter igjen.

- Først lager du en ny profil der alle verdier er i internasjonale enheter:
  - Gjør et midlertidig profilbytte på 200 % av profilen du vanligvis kjører.
  - Åpne menyen (☰) → **Behandlinger**, gå til fanen **Profilbytte** og dupliser den nye 200 %-profilen (se [Dupliser et profilbytte](#your-aaps-profile-clone-profile-switch)).
  - Bytt tilbake til standardprofilen din fram til neste reservoar- eller patch-bytte.
  - Gå til **Administrer → Profil** og gi den nye profilen et tydelig navn (den blir den framtidige profilen din for U200-insulin satt opp i AAPS 4).
- Hvis du bruker Dynamisk ISF (DynISF), må du slå den av i minst én uke:
  - All historikk som er registrert i AAPS eller Nightscout, er i feil enheter (CU), halvparten av den ekte verdien i internasjonale enheter. Vent minst én uke med U200-insulinet i bruk før du slår den på igjen.
- Nå er du klar til å bytte insulin (med et nytt U200 definert i **Insulininnstillinger**) ved neste insulinbytte eller pod-bytte.
- Når det nye U200-insulinet er riktig tatt i bruk, må du huske å ta i bruk den nye standardprofilen du laget i det første steget.

## Slik håndterer du eksterne boluser med ulike penner

### Med U200-insulin sammen med en 50 %-profil (AAPS 3)

Husk at alle penner er gradert i internasjonale enheter. Uansett hvilken penn du bruker (U100, U200), må du derfor regne om begge veier når du bruker en penn til en ekstern bolus:

- Fra AAPS til pennen: hvis Boluskalkulatoren foreslår en bolus, eller hvis du har en bestemt mengde i tankene, ganger du med 2 når du velger mengden på pennen, sammenlignet med den samme bolusen gitt fra AAPS.
- Fra pennen til AAPS: hvis du valgte en mengde på pennen for å gi en ekstern bolus, deler du denne mengden på 2 for å registrere riktig mengde i AAPS (Insulin-knappen, ekstern bolus), slik at IOB-beregningen blir riktig i CU (konsentrerte enheter).

### Med U200-insulin og konsentrasjonshåndteringen som er innebygd i AAPS 4

Alt er mye enklere med den interne håndteringen av konsentrasjon i AAPS: velg bare den ventede mengden på pennen (uansett hvilken penn og hvilket insulin du bruker), og registrer den i AAPS.

- Hvis du velger ekstern bolus i Insulin-knappen, kan du velge hvilken som helst insulintype som er definert i **Insulininnstillinger** (hovedsakelig U100 og U200 for penner). Slik får du en svært presis beregning av IOB, selv om topp/DIA for insulinet i pennen er svært forskjellig fra topp/DIA for insulinet i pumpen.
