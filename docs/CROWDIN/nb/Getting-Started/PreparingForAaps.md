# Forberedelser før du starter med AAPS

Velkommen. Denne dokumentasjonen skal hjelpe brukere som forbereder seg på å sette opp og begynne å bruke Android Artificial Pancreas System (**AAPS**).

## Finne fram i dokumentasjonen

En **indeks** og en forklaring av hvordan dokumentasjonen er bygd opp, finner du [her](../index.md). Du kommer også dit ved å klikke på **AAPS**-symbolet øverst til venstre i dokumentasjonen. Der finner du en oversikt over hva de ulike delene av dokumentasjonen handler om. Du kan også bruke overskriftene til venstre på denne siden til å navigere i dokumentasjonen. Til slutt finnes det en praktisk søkefunksjon rett under **AAPS**-symbolet.

Vi ønsker å gjøre det enkelt å se både mulighetene og begrensningene i **AAPS**. Det kan være skuffende å oppdage, etter at du har brukt tid på å lese dokumentasjonen, at du kanskje ikke har en kompatibel insulinpumpe eller CGM, eller at **AAPS** tilbyr andre funksjoner enn du håpet på.

Mange erfaringsbaserte detaljer i **AAPS**-dokumentasjonen gir mer mening når du faktisk bruker **AAPS** i praksis. Akkurat som det er vanskelig å lære en idrett bare ved å lese reglene, må du både lære grunnreglene for trygg bruk av **AAPS** og deretter lære hvordan du best bruker disse reglene når du begynner å bruke **AAPS**.

(preparing-safety-first)=

## Sikkerhet først
«Med stor makt følger stort ansvar …»

### Teknisk sikkerhet
**AAPS** har et omfattende sett med sikkerhetsfunksjoner. Disse gir begrensninger som fjernes gradvis gjennom trinnvis fullføring av en rekke [opplæringsmål](../SettingUpAaps/CompletingTheObjectives.md), der du tester bestemte parametere og svarer på flervalgsspørsmål. Funksjoner i **AAPS** låses opp etter hvert som du fullfører opplæringsmålene. Slik kan du gå trygt og trinnvis fra åpen loop til lukket loop, mens du lærer om de ulike funksjonene i **AAPS**.

[Opplæringsmålene](../SettingUpAaps/CompletingTheObjectives.md) er laget for å gi best mulig innføring i **AAPS**, med tanke på de typiske feilene og generelle tendensene **AAPS**-utviklerne har sett hos nye brukere. Feil kan skje fordi nybegynneren er uerfaren og for ivrig etter å komme i gang med **AAPS**, eller har oversett viktige punkter. [Opplæringsmålene](../SettingUpAaps/CompletingTheObjectives.md) skal gjøre slike problemer så små som mulig.

### Medisinsk sikkerhet
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
Vær forsiktig med rask forbedring av blodsukkerkontrollen og rask senking av HbA1c 
```

Et viktig sikkerhetshensyn er at **rask senking av HbA1c og bedre blodsukkerkontroll hos personer som har hatt forhøyet glukose over lengre tid, kan gi varig skade**. Mange med diabetes vet ikke om dette, og ikke alle klinikere gjør pasientene sine oppmerksomme på det.

Slik skade kan omfatte **tap av syn og varig nevropati (smerter)**. Det er mulig å unngå denne skaden ved å senke gjennomsnittlig glukose saktere. Hvis du nå har forhøyet HbA1c og skal gå over til **AAPS** (eller et annet lukket loop-system), _ber vi deg_ om å diskutere denne mulige risikoen med behandlingsteamet ditt før du starter, og bli enige med dem om en tidsplan med trygge glukosemål som senkes gradvis. Du kan enkelt sette høyere glukosemål i **AAPS** i starten (for tiden er det høyeste målet du kan velge 11,1 mmol/L, men du kan også beholde en bevisst svak profil om nødvendig), og så senke målet etter hvert som månedene går.

#### Hvor raskt kan jeg senke HbA1c uten å risikere varig skade?

En retrospektiv [studie](https://pubmed.ncbi.nlm.nih.gov/1464975/) av 76 pasienter rapporterte at risikoen for at retinopatien utviklet seg, økte 1,6, 2,4 og 3,8 ganger hvis HbA1c falt med henholdsvis 1 %, 2 % eller 3 % i løpet av en 6-månedersperiode. De foreslo at **«reduksjonen i HbA1c i løpet av en 6-månedersperiode bør begrenses til under 2 % for å hindre at retinopatien utvikler seg … En for rask senking ved oppstart av glykemisk kontroll kan gi alvorlig eller forbigående forverring av retinopatien.»**

NB Hvis du bruker andre HbA1c-enheter (mmol/mol i stedet for %), klikk [her](https://www.diabetes.co.uk/hba1c-units-converter.html) for et verktøy som regner om HbA1c.

I en annen retrospektiv [evaluering](https://academic.oup.com/brain/article/138/1/43/337923) av 954 pasienter fant forskerne at:

**«Ved en senking av HbA1c på 2–3 prosentpoeng over 3 måneder var det 20 % absolutt risiko for å utvikle behandlingsutløst nevropati ved diabetes, og ved en senking av HbA1c på >4 prosentpoeng over 3 måneder var den absolutte risikoen for å utvikle behandlingsutløst nevropati ved diabetes over 80 %.»**

En [kommentar](https://academic.oup.com/brain/article/138/1/2/340563) til dette arbeidet var enig i at for å unngå komplikasjoner **bør målet være å senke HbA1c med <2 % over 3 måneder.** Du kan lese andre oversikter om temaet [her](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) og [her](https://www.mdpi.com/1999-4923/15/7/1791).

Det er allment kjent at _nylig_ diagnostiserte med type 1-diabetes (som ofte har svært høy HbA1c ved diagnose, før de starter med insulin) ser ut til å kunne senke HbA1c raskt rett etter diagnosen uten å møte disse risikoene i samme grad, fordi de ikke har hatt forhøyet blodsukker over så lang tid. Det er likevel noe du bør diskutere med legen din.

(PreparingForAaps-no-sglt-2-inhibitors)=
### Ingen SGLT-2-hemmere

```{admonition} NO SGLT-2 inhibitors
:class: danger
SGLT-2-hemmere, også kalt glifloziner, hemmer reopptaket av glukose i nyrene. Glifloziner senker blodsukkeret på en måte som ikke kan beregnes, og derfor MÅ du IKKE ta dem mens du bruker et lukket loop-system som AAPS! Det ville gi en betydelig risiko for ketoacidose og/eller hypoglykemi! Kombinasjonen av dette legemidlet og et system som senker basaldosene for å øke BS, er spesielt farlig. 

Kort fortalt:
- **Eksempel 1: risiko for hypoglykemi**
>Til lunsj bruker du **AAPS** til å gi bolus for 45 g karbohydrater. Problemet er at hemmerne, uten at AAPS vet det, får kroppen til å kvitte seg med noen av karbohydratene. Da har kroppen din for mye insulin i forhold til karbohydratene som er tatt opp, og resultatet er hypoglykemi.

- **Eksempel 2: risiko for ketoacidose**
>Hemmerne fjerner noen av karbohydratene i bakgrunnen, slik at BS synker. **AAPS** vil automatisk be pumpen om å redusere insulintilførselen, også basalen. Over tid kan dette føre til at BS holder seg under målverdien, helt til kroppen ikke har nok bakgrunnsinsulin til å ta opp karbohydrater i det hele tatt, og resultatet er ketoacidose. Vanligvis utvikler ketoacidose seg hos pasienter med type 1-diabetes fordi pumpen svikter, noe som ville utløst varsler på telefonen og vært merkbart på grunn av en høy BS-verdi. Faren med glifloziner er derimot at det ikke kommer noen varsler fra AAPS, siden pumpen fortsatt fungerer og BS kanskje holder seg innenfor målet.

Vanlige merkenavn på SGLT-2-hemmere er blant annet Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro og Xigduo XR, og flere andre.
```


### Grunnprinsipper for looping med AAPS

Du må forstå grunnprinsippene og begrepene i looping før du bruker **AAPS**. Det gjør du ved å bruke tid på å lese **AAPS**-dokumentasjonen og fullføre opplæringsmålene. Målet med dem er å gi deg et solid grunnlag for trygg og effektiv bruk av **AAPS**. Mengden **AAPS**-dokumentasjon kan virke overveldende i starten, men vær tålmodig og stol på prosessen – med riktig tilnærming kommer du i mål!

Hvor raskt det går, avhenger av den enkelte, men vær klar over at det vanligvis tar 6–9 uker å fullføre alle opplæringsmålene. Mange begynner å bygge, installere og sette opp **AAPS** i god tid før de begynner å bruke det. For å hjelpe deg med dette har systemet en «virtuell pumpe» som du kan bruke mens du fullfører de første opplæringsmålene, slik at du blir kjent med **AAPS** uten at det faktisk gir insulin. En detaljert oversikt over tidslinjen finner du nedenfor. Vær klar over at ved opplæringsmål 7 i **AAPS** kjører du lukket loop; de senere opplæringsmålene legger til ekstra funksjoner som **SMB** og **automasjoner**, som er nyttige for noen brukere, men ikke nødvendige for kjernefunksjonen i **AAPS**.

For å lykkes med **AAPS** må du være aktiv, villig til å se nøye på BS-dataene dine og fleksibel nok til å gjøre de nødvendige justeringene i **AAPS** for å få bedre resultater. Akkurat som det er nesten umulig å lære en idrett bare ved å lese reglene, gjelder det samme for **AAPS**.

#### Regn med forsinkelser og små problemer når du skal få alt satt opp og i gang

I den første fasen av oppstarten med **AAPS** kan du oppleve at det er vanskelig å få alle delene av loopen (og eventuelle følgere) til å kommunisere godt med hverandre, og å finjustere innstillingene dine. Noen småfeil kan ikke løses før **AAPS** brukes i hverdagen, men det finnes mye hjelp å få i Facebook-gruppen og på Discord. Planlegg derfor godt og velg «gode» tidspunkter, som en rolig morgen i helgen (altså ikke sent på kvelden, når du er sliten, eller rett før et viktig møte eller en reise), til å feilsøke og løse problemer.

#### Kompatibel teknologi

**AAPS** fungerer bare med visse typer insulinpumper, CGM-er og telefoner, og noe av teknologien er kanskje ikke tilgjengelig i alle land. For å unngå skuffelser og frustrasjon bør du lese delene om [CGM](../Getting-Started/CompatiblesCgms.md), [pumpe](../Getting-Started/CompatiblePumps.md) og [telefon](../Getting-Started/Phones.md).

#### Tid for å bygge appen og veien til full looping

Hvor lang tid det tar å bygge **AAPS**-appen, avhenger av hvor mye erfaring og tekniske ferdigheter du har. For uerfarne brukere kan det typisk ta en halv dag eller en hel dag (med hjelp fra fellesskapet) å bygge **AAPS**. Prosessen går mye raskere for nyere versjoner av **AAPS**, etter hvert som du får mer erfaring.

Flere deler av denne dokumentasjonen skal hjelpe deg gjennom byggeprosessen:

- [Bygge AAPS](../SettingUpAaps/BuildingAaps.md) tar deg trinn for trinn gjennom bygging av appen og installering på telefonen din;

- [FAQ](../UsefulLinks/FAQ.md) svarer på vanlige spørsmål og forklarer feilene som oftest oppstår; og

- [Feilsøking](../GettingHelp/GeneralTroubleshooting.md)-siden samler løsninger på de vanligste problemene, ordnet etter tema.

Hvor lang tid det tar å komme til lukket loop, avhenger av den enkelte; en omtrentlig tidslinje for å nå full looping med **AAPS** finner du [nedenfor](#preparing-how-long-will-it-take).


#### Keystore & eksportfil med konfigurasjonsinnstillinger

En «keystore» (.jks-fil) er en passordkryptert fil som er unik for din egen kopi av **AAPS**. Android-telefonen din bruker den for å sikre at ingen andre kan oppgradere din kopi uten denne keystore-filen. Kort sagt, som en del av byggingen av **AAPS** bør du:

1.  Lagre keystore-filen din (.jks-filen som brukes til å signere appen) på et trygt sted;

2.  Ta vare på passordet til keystore-filen din.

Hvordan du lagrer keystore-filen, avhenger av byggemetoden din:

- **Android Studio-bygg (datamaskin)**: keystore-filen lages under byggingen – se [Generate signed APK](#Building-APK-generate-signed-apk) (lag signert APK) for hvor du bør lagre den.
- **AAPS Builder**: ta vare på sikkerhetskopifilen `aaps-keystore.jks` som oppsettsiden tilbød da du laget nøkkelen din, sammen med passordet og aliaset. Hvis du lastet opp din egen keystore-fil, ta vare på den.
- **Nettleserbygg med en fork**: bruk den egne arbeidsflyten [Export keystore](#ci-keystore-export) for å laste ned en kopi til Google Drive.

Da kan du bruke nøyaktig den samme keystore-filen hver gang du lager en oppdatert versjon av **AAPS**. I gjennomsnitt trengs det 2 **AAPS**-oppdateringer i året.

I tillegg gir **AAPS** deg mulighet til å [eksportere alle konfigurasjonsinnstillingene dine](../Maintenance/ExportImportSettings.md). Slik kan du trygt gjenopprette systemet ditt når du bytter telefon eller oppgraderer/installerer appen på nytt, med minst mulig avbrudd. 

#### Feilsøking

Ta gjerne kontakt med AAPS-fellesskapet hvis det er noe du er usikker på – det finnes ingen dumme spørsmål! Alle brukere, uansett erfaring, oppfordres til å stille spørsmål. Svar kommer vanligvis raskt, fordi det er så mange **AAPS**-brukere.

##### [spør i Facebook-gruppen til AAPS](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [spør på Discord-kanalen til AAPS](https://discord.gg/4fQUWHZ4Mw)





#### [Hvor kan jeg få hjelp](../GettingHelp/WhereCanIGetHelp.md)?

Denne delen gir nye brukere lenker til steder der de kan få hjelp, blant annet fellesskapet av både nye og erfarne brukere som kan svare på spørsmål og løse de vanlige fallgruvene som følger med AAPS.

#### [Del for klinikere](../UsefulLinks/ClinicianGuideToAaps.md)

Dette er en [del spesielt for klinikere](../UsefulLinks/ClinicianGuideToAaps.md) som vil vite mer om AAPS og åpen kildekode-teknologi for kunstig bukspyttkjertel. Det finnes også veiledning om [hvordan du snakker med behandlingsteamet ditt](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team) i innledningen.

## Hva skal vi bygge og installere?

Dette diagrammet gir en oversikt over hovedkomponentene (både maskinvare og programvare) i **AAPS**-systemet:

![preparing_overview](../images/preparing_images/AAPS_preparing_overview_01.png)


I tillegg til de tre grunnleggende maskinvaredelene (telefon, pumpe, glukosesensor) trenger vi også: 1) **AAPS**-appen 2) En rapporteringsserver og 3) En app for kontinuerlig glukosemåling (CGM)

### 1) En Android-telefonapp: **AAPS**

**AAPS** er en app som kjører på Android-smarttelefoner og -enheter. Du skal bygge **AAPS**-appen (en apk-fil) selv, ved hjelp av en trinnvis veiledning: du laster ned kildekoden til **AAPS** fra GitHub, installerer de nødvendige programmene (Android Studio, GitHub Desktop) på datamaskinen din og bygger din egen kopi av **AAPS**-appen. Deretter overfører du **AAPS**-appen til smarttelefonen din (via e-post, USB-kabel _osv._) og installerer den.

### 2) En rapporteringsserver: Nightscout (Tidepool*)

For å få fullt utbytte av **AAPS** må du sette opp en Nightscout-server. Du kan [gjøre dette selv](https://nightscout.github.io/nightscout/new_user/#free-diy), eller betale en liten avgift for å få en [administrert Nightscout-tjeneste](https://nightscout.github.io/#nightscout-as-a-service) satt opp for deg. Nightscout brukes til å samle inn data fra **AAPS** over tid, og kan lage detaljerte rapporter som viser sammenhengen mellom CGM- og insulinmønstre. Omsorgspersoner kan også bruke Nightscout til å kommunisere eksternt med **AAPS**-appen, for å følge med på barnets diabetesbehandling. Slike fjernfunksjoner omfatter sanntidsovervåking av glukose- og insulinnivåer, fjernstyrt bolus (via SMS) og registrering av måltider. Å prøve å analysere diabetesen din ved å se på CGM-data adskilt fra pumpedataene, er som å kjøre bil der sjåføren er blind og passasjeren beskriver det som skjer. Tidepool er også tilgjengelig som et alternativ til Nightscout.

### 3) App for CGM-sensor

Avhengig av glukosesensoren/CGM-en din trenger du en kompatibel app som mottar glukoseverdiene og sender dem til **AAPS**. De ulike alternativene vises nedenfor, og du finner mer informasjon i [delen om kompatible CGM-er](../Getting-Started/CompatiblesCgms.md):

![dexcom_options](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](../images/preparing_images/AAPSconnectivity_libre.png) ![eversense_options](../images/preparing_images/AAPS_connectivity_eversense.png)

### Vedlikehold av **AAPS**-systemet

Både **Nightscout** og **AAPS** må oppdateres omtrent én gang i året, når forbedrede versjoner blir gitt ut. I noen tilfeller kan oppdateringen vente, i andre er den sterkt anbefalt eller regnes som nødvendig for sikkerheten. Beskjed om disse oppdateringene gis i Facebook-gruppene og på Discord-serverne. Versjonsnotatene gjør det klart hva som gjelder. Det er trolig mange som stiller de samme spørsmålene som deg når det er tid for oppdatering, og du får hjelp til å gjennomføre oppdateringene.

(preparing-how-long-will-it-take)=
## Hvor lang tid tar det å sette opp alt?

Som nevnt tidligere er bruk av **AAPS** mer en «reise» som krever at du investerer tid. Det er ikke et oppsett du gjør én gang. Dagens anslag for å bygge **AAPS**, installere og sette opp **AAPS**- og **CGM**-programvaren og gå fra åpen loop til hybrid lukket loop med **AAPS** er omtrent 4 til 6 måneder totalt. Vi anbefaler derfor at du prioriterer å bygge **AAPS**-appen og gå gjennom de første opplæringsmålene så snart som mulig, selv om du fortsatt bruker et annet system for insulintilførsel (du kan bruke en virtuell pumpe fram til opplæringsmål 5).

Noen av opplæringsmålene krever at et bestemt antall dager går, for å sikre at du forstår den nye funksjonaliteten. Det er ikke mulig å hoppe over denne ventetiden; disse minste ventetidene er satt for din egen sikkerhet.

Her er en omtrentlig tidsramme:

| Oppgaver                                                            |         Omtrentlig tid         |
| ------------------------------------------------------------------- |:------------------------------:|
| Første gjennomlesing av dokumentasjonen                             |           1–2 dager            |
| Sette opp GitHub for nettleserbygg                                  |           1–4 timer            |
| Sette opp en rapporteringsserver                                    |             1 time             |
| Installere en CGM-app (xDrip, BYODA, …)                             |             1 time             |
| Første oppsett av CGM → xDrip → AAPS                                |             1 time             |
| Første oppsett av AAPS → pumpe                                      |             1 time             |
| Oppsett av AAPS → Nightscout/Tidepool (bare rapportering)           |             1 time             |
| Valgfritt: Oppsett av Nightscout ↔ **AAPS** og NSFollowers          |             1 time             |
| Opplæringsmål 1: Sette opp visualisering og overvåking              |             1 time             |
| Opplæringsmål 2: Lær hvordan du kontrollerer AAPS                   |            2 timer             |
| Opplæringsmål 3: Bevis kunnskapen din                               |        Opptil 14 dager         |
| Opplæringsmål 4: Starter med åpen loop                              |         Minst 7 dager          |
| Opplæringsmål 5: Forstå din åpne loop                               |            7 dager             |
| Opplæringsmål 6: Begynne å lukke loopen (Stopp ved lavt BS)         |    Minst 5, opptil 14 dager    |
| Opplæringsmål 7: Finjustere den lukkede loopen                      |  Minst 1 dag, opptil 7 dager   |
| Opplæringsmål 8: Justere basaler og forholdstall, aktivere Autosens | Minst 7 dager, opptil 14 dager |
| Opplæringsmål 9: Aktivere Super Micro Bolus (SMB)                   |         Minst 28 dager         |
| Opplæringsmål 10: Automasjon                                        |         Minst 28 dager         |

Når du er helt i gang med **AAPS**, må du fortsatt finjustere innstillingene dine jevnlig for å forbedre diabetesbehandlingen din som helhet.

## Krav

### Medisinske hensyn

I tillegg til de medisinske advarslene i [sikkerhetsdelen](#preparing-safety-first) finnes det også ulike parametere, avhengig av hvilket insulin du bruker i pumpen.

#### Valg av insulin

Beregningene i **AAPS** er basert på en insulinkonsentrasjon på 100 E/ml (det samme som pumpens standard). Du setter opp insulinet ditt i **Administrer → Insulininnstillinger**: sett **Topp** og **DIA**, eller bruk **Last topp fra** for å fylle inn standard topptid for en av forhåndsinnstillingene:

- **Novorapid** (også for Humalog og NovoLog)
- **Fiasp**
- **Lyumjev**

Avanserte brukere kan skrive inn en hvilken som helst topptid (35 til 120 minutter) direkte, for eksempel for en blanding av insuliner. Se [Insulininnstillinger](#Config-Builder-insulin).


### Teknisk

Denne dokumentasjonen har som mål å redusere den tekniske kompetansen som kreves, til et absolutt minimum. For å bygge **AAPS**-appen har du flere muligheter – se [Bygge AAPS](../SettingUpAaps/BuildingAaps.md) for en oversikt:

- **Nettleserbygg** (anbefalt): bygg appen direkte fra smarttelefonen din med GitHub Actions, uten datamaskin eller Android Studio. Med [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) trenger du bare en GitHub-konto: du laster ned appen direkte fra GitHub. Fork-metoden trenger i tillegg en Google-konto for å lagre appen i Google Drive.
- **Android Studio-bygg**: bygg appen på datamaskinen din med Android Studio. Dette brukes mest av utviklere som vil gjøre endringer i koden.
- **Kommandolinjebygg**: for brukere som vil bygge lokalt uten å installere Android Studio.

I tillegg til å bygge appen må du sette opp en rapporteringsserver, sette opp flere Android-apper på telefonen og bygge opp kunnskap om diabetesbehandling. Dette får du til ved å gå trinn for trinn, være tålmodig og få hjelp fra **AAPS**-fellesskapet. Hvis du allerede klarer å bruke internett og håndtere din egen Gmail-e-post, er det fullt mulig for deg å bygge **AAPS**. Ta deg bare god tid.

### Smarttelefoner

#### AAPS og Android-versjoner

Den nåværende versjonen av **AAPS** (4.0) krever en Android-smarttelefon med Google **Android 12.0 eller nyere**. Hvis du vurderer å kjøpe ny telefon (per januar 2026), er Android 16 å foretrekke.<br/> Vi anbefaler sterkt at du holder din versjon av **AAPS** oppdatert, av sikkerhetshensyn. Men for brukere som ikke kan bruke en enhet med Android 12.0 eller nyere, er eldre versjoner av **AAPS** som er kompatible med eldre Android-versjoner fortsatt tilgjengelige, se: [Versjonsnotater](#maintenance-android-version-aaps-version).

#### Valg av smarttelefonmodell
Hvilken modell du bør kjøpe, avhenger av hvilke funksjoner du ønsker. På [siden Telefoner](../Getting-Started/Phones.md) finner du anbefalinger og tilbakemeldinger fra brukere om oppsett som fungerer.

Vi oppfordrer brukere til å holde Android-versjonen på telefonen oppdatert, også sikkerhetsoppdateringene. Men hvis du er ny med **AAPS** eller ikke er teknisk ekspert, kan det lønne seg å vente med å oppdatere telefonen til andre har gjort det og bekreftet i forumene våre at det er trygt.

```{admonition} Delaying Samsung phone updates
:class: warning
Samsung har dessverre for vane å tvinge oppdateringer på telefonene sine, noe som kan gi problemer med Bluetooth-tilkoblingen. For å slå av disse tvungne oppdateringene må du sette telefonen i «utviklermodus»:

1. Gå til **Innstillinger** > **Om telefonen** > **Programvareinformasjon**, og trykk på **Delenummer** (build number) til den bekrefter at du har låst opp utviklermodus.
2. Gå tilbake til hovedmenyen i **Innstillinger**, der du nå skal se et nytt menyvalg, **Utvikleralternativer**.
3. Åpne **Utvikleralternativer**, bla ned til **Automatisk systemoppdatering** og slå den av.
```

```{admonition} Google Play Protect potential issue
:class: warning
Det har kommet flere rapporter om at **AAPS** blir avsluttet vilkårlig av Google Play Protect hver morgen. Hvis dette skjer, må du gå til innstillingene for Google Play og slå av **Google Play Protect**. Ikke alle telefonmodeller eller Android-versjoner er berørt.
```

```{admonition} Android developer verification
:class: note
Fra september 2026 innfører Google gradvis [Android-utviklerverifisering](#android-developer-verification), som endrer hvordan en app du har bygd selv, installeres på telefonen. Bygging av **AAPS** påvirkes ikke, og gratis installasjonsmetoder er fortsatt tilgjengelige – se den lenkede siden for detaljer.
```

