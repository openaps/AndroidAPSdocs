# Opplæringsmålene

**AAPS** har en rekke **Opplæringsmål** som må fullføres. De hjelper deg fra enkel åpen loop til hybrid lukket loop og full **AAPS**-funksjonalitet. Målet med å fullføre **Opplæringsmål** er å sikre at du har:

* Satt opp alt riktig i **AAPS**-oppsettet ditt;
* Lært om de viktigste funksjonene i **AAPS**; og
* En grunnleggende forståelse av hva systemet ditt kan gjøre, slik at du blir trygg når du bruker **AAPS**.

Når **AAPS** installeres for første gang, må hvert opplæringsmål fullføres før du kan gå videre til det neste. Nye funksjoner låses opp etter hvert som du går gjennom hvert **Opplæringsmål**.

**Opplæringsmål 1 til 8** leder deg fra oppsett av **AAPS** på telefonen din til «enkel» hybrid lukket loop. Dette tar omtrent 6 uker å fullføre. Du kan gå fram til og med **Opplæringsmål 5** med en virtuell pumpe (og bruke en annen metode for insulintilførsel i mellomtiden). **Opplæringsmål 9 og 10** er laget for å teste mer avanserte funksjoner i **AAPS**, med mål om bedre kontroll over diabetesen din. De tar opptil 3 måneder å fullføre, kanskje lenger. Mer om anslått tidsbruk finner du her: [Hvor lang tid tar det?](#preparing-how-long-will-it-take)

I tillegg til å gå framover i **Opplæringsmål** kan du også, om nødvendig, fjerne fremdriften din og [gå tilbake til et tidligere opplæringsmål](#CompletingTheObjectives-go-back-in-objectives).

## Sikkerhetskopier innstillingene dine

```{admonition} Note
:class: note

Det anbefales å eksportere **AAPS**-innstillingene dine etter at du har fullført hvert **Opplæringsmål**!
```

Vi anbefaler sterkt at du [eksporterer innstillingene dine](../Maintenance/ExportImportSettings.md) etter hvert fullførte opplæringsmål, så du ikke mister fremdriften din i **AAPS**. Eksporten lager en **innstillingsfil** (.json) som du bør sikkerhetskopiere på ett eller flere trygge steder (f.eks. Google Drive, harddisk, e-postvedlegg _osv._). Det sikrer at all fremdrift i **AAPS** er lagret. Hvis telefonen din blir borte, eller du ved et uhell sletter fremdriften din, kan json-filen lastes inn i **AAPS** igjen ved å importere en nylig innstillingsfil. En sikkerhetskopi av **innstillingsfilen** trengs også hvis du av en eller annen grunn må ha en ny **AAPS**-telefon (oppgradert/mistet/ødelagt telefon _osv._)

**Innstillingsfilen** lagrer ikke bare fremdriften din i **Opplæringsmål**, men også alle **AAPS**-innstillingene dine, som **maks bolus** _osv._

**Opplæringsmål** må startes på nytt fra begynnelsen hvis du ikke har en sikkerhetskopi av innstillingene dine og noe skjer med **AAPS**-telefonen din. Det tar tid å gå gjennom **Opplæringsmål**, og å måtte fullføre dem på nytt fordi du for eksempel mistet telefonen, er en situasjon du helst bør unngå.

(objectives-objective1)=
## Opplæringsmål 1: Sette opp visualisering og overvåking, analysere basaldoser og forholdstall

**Opplæringsmål 1** krever at du setter opp det grunnleggende tekniske oppsettet i **AAPS**. Du kan ikke gå videre før dette steget er fullført.

- Velg riktig CGM/FGM i [Konfigurasjon → BS-kilde](#Config-Builder-bg-source). Se [BS-kilde](../Getting-Started/CompatiblesCgms.md) for mer informasjon.
- Velg riktig pumpe i [Konfigurasjon → Pumpe](#Config-Builder-pump) for å sikre at pumpen din kan kommunisere med **AAPS**. Velg **virtuell pumpe** hvis du bruker en pumpemodell uten **AAPS**-driver for looping, eller hvis du vil gå gjennom de første **Opplæringsmål**ene mens du bruker et annet system for insulintilførsel. Se [insulinpumpe](../Getting-Started/CompatiblePumps.md) for mer informasjon.
- Hvis du bruker Nightscout:
  - Følg instruksjonene på siden [Nightscout](../SettingUpAaps/Nightscout.md) for å sikre at **Nightscout** kan motta og vise data fra **AAPS**.
  - Merk at URL-en i **NSClientV3** må være **_uten_ «/api/v1/»** på slutten – se [Innstillinger → NSClientV3](#Preferences-nsclient).
- Hvis du bruker Tidepool:
  - Følg instruksjonene på siden [Tidepool](../SettingUpAaps/Tidepool.md) for å sikre at **Tidepool** kan motta og vise data fra **AAPS**.

Merk – *Du må kanskje vente på neste sensormåling før **AAPS** gjenkjenner den.*

(objectives-objective2)=
## Opplæringsmål 2: Lær hvordan du kontrollerer AAPS

**Opplæringsmål 2** krever at du utfører flere «oppgaver», som vist på skjermbildet nedenfor. Hver oppgave viser statusen sin (**1**): den oransje «**Enda ikke fullført**» blir til «**Fullført, bra jobba!**» så snart **AAPS** har registrert handlingen. Trykk på **Hint** (**2**) under en oppgave for å åpne den tilhørende dokumentasjonen, i tilfelle du ikke kjenner en bestemt handling ennå.

![Skjermbilde opplæringsmål 2](../images/Objective2_V2_5.png)

Oppgavene for å fullføre **Opplæringsmål 2** er:
- Sett **Profilen** din til 90 % med en varighet på 10 min.
  - _Hint_: Trykk på profilnavnet på hovedskjermen for å åpne **Profil**-skjermen, bruk så **Aktiver**-knappen (▶) og sett prosent og varighet. Mer informasjon i [Profilbytte og profilprosent](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).
  - _Merk_: **AAPS** godtar ikke basaldoser under 0,05 E/t. Hvis **Profilen** din har doser på 0,05 E/t eller lavere, må du lage en midlertidig **Profil** med høyere basaldoser før du fullfører denne oppgaven. Bytt tilbake til den vanlige **Profilen** din etter at du har fullført denne oppgaven.
- Simuler «å ta en dusj» ved å [koble fra pumpen](#AapsScreens-loop-status) i **AAPS** i 1 time.
  - _Hint_: trykk på loop-ikonet på hovedskjermen for å åpne Loop-dialogen, og velg så en varighet under **Koble fra pumpen**.
- Avslutt «å ta en dusj» ved å koble til pumpen igjen.
  - _Hint_: trykk på «frakoblet»-ikonet for å åpne loop-dialogen igjen, og velg **Koble til pumpen på nytt**.
- Sett et egendefinert [**Midlertidig mål**](../DailyLifeWithAaps/TempTargets.md) med en varighet på 10 min.
  - _Hint_: trykk på målområdet på hovedskjermen for å åpne skjermen for midlertidig mål.
- Vis innholdet i **Loop**-pluginen.
  - _Hint_: åpne **Konfigurasjon → Loop** og trykk på «**Åpne plugin**».
- Bruk rulling eller zoom på BS-grafen for å se større eller mindre tidsrom.


(objectives-objective3)=
## Opplæringsmål 3: Bevis kunnskapen din

**Opplæringsmål 3** krever at du består en flervalgsprøve som er laget for å teste kunnskapen din om **AAPS**.

Noen synes **Opplæringsmål 3** er det vanskeligste opplæringsmålet å fullføre. Les **AAPS**-dokumentasjonen sammen med spørsmålene. Hvis du virkelig står fast etter å ha lett i **AAPS**-dokumentasjonen, søk etter «Objective 3» i [Facebook](https://www.facebook.com/groups/AndroidAPSUsers)- eller [Discord](https://discord.gg/4fQUWHZ4Mw)-gruppen (det er sannsynlig at spørsmålet ditt har blitt stilt før – og besvart av gruppen). Disse gruppene kan gi vennlige hint eller vise deg til den riktige delen av **AAPS**-dokumentasjonen.

I mellomtiden:
- For å redusere antallet varslinger / avgjørelser du blir bedt om å ta (midlertidige basaler) i åpen loop, sett et bredt målområde i **Profilen** din, _f.eks._ 90–150 mg/dL eller 5,0–8,5 mmol/L.
- Du kan vurdere å sette en høyere øvre grense, eller til og med deaktivere åpen loop, om natten.

For å gå videre med **Opplæringsmål 3**, trykk på en spørsmålsrad for å åpne den. Les hvert spørsmål nøye og velg svaret eller svarene dine.

For hvert spørsmål kan det være mer enn ett riktig svar! Hvis du velger et feil svar, blir spørsmålet låst i 1 time før du kan gå tilbake og svare på det igjen. Vær oppmerksom på at rekkefølgen på svarene kan ha endret seg neste gang du prøver å svare. Dette er for å sikre at du leser dem nøye og virkelig forstår om hvert svar er gyldig eller ikke.

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: note
Fra tid til annen legges det til nye funksjoner i **AAPS** som kan kreve at et nytt spørsmål legges til i **Opplæringsmål**, særlig i **Opplæringsmål 3**. Derfor blir et nytt spørsmål som legges til i **Opplæringsmål 3** merket som «ikke fullført», fordi **AAPS** krever at du svarer på det. Ikke bekymre deg: siden hvert **Opplæringsmål** er uavhengig, vil du **ikke miste funksjonaliteten du allerede har i AAPS**, så lenge de andre **Opplæringsmålene** fortsatt er fullført.
```

## Opplæringsmål 4: Starter med åpen loop

Hensikten med **Opplæringsmål 4** er å se hvor ofte **AAPS** vurderer basaldosen din mot blodsukkeret og anbefaler endringer av midlertidig basal. I dette **Opplæringsmålet** aktiverer du åpen loop for første gang, godtar 20 foreslåtte endringer av midlertidig basal, og setter dem om nødvendig manuelt på pumpen din. Du vil også se hvordan [**Midlertidige mål**](../DailyLifeWithAaps/TempTargets.md) virker. Hvis du ennå ikke kjenner til hvordan du setter en midlertidig basal i **AAPS**, se pumpehandlingene i **Administrer**-arket ([Hvor ble det av Handlinger-fanen?](#screens-action-tab)).

Minste tid for å fullføre dette opplæringsmålet: **7 dager**. Dette er en obligatorisk ventetid. Det er ikke mulig å gå videre til neste **Opplæringsmål**, selv om alle basalendringene allerede er utført.

- Velg åpen loop ved å trykke på [Loop-ikonet](#AapsScreens-loop-status) på hovedskjermen og velge **Åpen Loop** som kjøremodus.
- Utfør manuelt minst 20 av forslagene om midlertidig basal over en periode på 7 dager: legg dem inn i den (fysiske) pumpen din og bekreft i AAPS at du har godtatt dem. Sjekk at disse basalendringene vises i **AAPS** og **Nightscout**.
- Bruk [**Midlertidige mål**](../DailyLifeWithAaps/TempTargets.md) når det trengs. Etter at du har behandlet en føling, bruk det forhåndsinnstilte midlertidige målet «Hypo» for å hindre at systemet overkorrigerer når blodsukkeret stiger igjen.
- Hvis du fortsatt er i [Enkelmodus](#preferences-simple-mode) nå, er dette sannsynligvis et godt tidspunkt for å slå den av.

For å redusere antallet foreslåtte basalendringer i åpen loop kan du fortsatt bruke tipsene i [**Opplæringsmål 3**](#objectives-objective3). I tillegg kan du endre minste prosent for anbefalte basalendringer med innstillingen «**Minimumsendring i åpen loop**» under **Innstillinger → Loop**. Jo høyere verdien er, desto færre varsler om endringer får du.

![Minimumsendring i åpen loop](../images/OpenLoop_MinimalRequestChange2.png)

```{admonition} Note
:class: note

Du trenger ikke å utføre hver eneste anbefaling fra systemet!
```
(objectives-objective5)=
## Opplæringsmål 5: Forstå den åpne loopen din, inkludert anbefalingene om midlertidig basal

I **Opplæringsmål 5** begynner du å forstå hvordan anbefalingene om midlertidig basal regnes ut. Dette omfatter [hvordan basalen bestemmes](#aaps-screens-how-predictions-become-a-dosing-decision), å analysere virkningen ved å se på [prediksjonslinjene i **AAPS-oversikten**](#aaps-screens-prediction-lines) (eller Nightscout), og å se på de detaljerte beregningene på plugin-skjermen **OpenAPS SMB** (**Konfigurasjon → APS → Åpne plugin**).

Anslått tid for å fullføre dette opplæringsmålet: **7 dager**.

Dette **Opplæringsmålet** krever at du finner og setter verdien «Maksimal basaldose» (max-basal) som beskrevet under [OpenAPS-funksjoner](#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to). Denne verdien kan settes under [Innstillinger → OpenAPS SMB](#Preferences-openaps-smb-settings). I [enkelmodus](#preferences-simple-mode) setter **AAPS** denne verdien automatisk, og du trenger ikke å endre den. Hvis du fortsatt bruker en virtuell pumpe, pass på at denne sikkerhetsinnstillingen er satt både i **AAPS** og i insulinpumpen din.

Du kan vurdere å sette [BS-målet i **Profilen**](#profile-glucose-targets) din høyere enn vanlig til du er trygg på beregningene og innstillingene i **AAPS**. Du kan prøve å justere **BS-målet** i **Profilen** din til et smalere område (si 1 mmol/L [20 mg/dL] eller mindre bredt) og se hvordan systemet oppfører seg.

![Stoppskilt](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

Hvis du kjører åpen loop med en virtuell pumpe, **stopp her**. Trykk på **Kontroller** på slutten av dette **Opplæringsmålet** først når du har gått over til en «ekte» pumpe som gir insulin.

```

![tom](../images/blank.png)

(objectives-objective6)=
## Opplæringsmål 6: Begynne å lukke loopen med Stopp ved lavt BS

![Advarselsskilt](../images/sign_warning.png)
```{admonition} Closed loop will not correct high **BG** values in **Objective 6** as it is limited to **Low Glucose Suspend** only!
:class: note
Du må fortsatt korrigere høye BS-verdier selv (manuelt med korreksjoner fra pumpe eller penn)!
```

I **Opplæringsmål 6** lukker du loopen og aktiverer modusen **Stopp ved lavt BS** (LGS) mens [maks IOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) er satt til null. Du må bli i LGS-modus i 5 dager for å fullføre dette **opplæringsmålet**. Bruk denne tiden til å sjekke at **Profil**-innstillingene dine er riktige, og at LGS-hendelser ikke utløses for ofte.

Minste tid for å fullføre dette opplæringsmålet: **5 dager**. Dette er en obligatorisk ventetid. Du kan ikke gå videre til neste **Opplæringsmål** før denne tiden er gått.

Det er helt avgjørende at din nåværende **Profil** (basal, ISF, IK) er godt testet før du lukker loopen i **LGS**-modus. Feil **Profil**-innstillinger kan gi følinger som må behandles manuelt. En riktig **Profil** reduserer behovet for å behandle lavt blodsukker i løpet av de 5 dagene.

**Hvis du fortsatt opplever hyppige eller alvorlige episoder med lavt blodsukker, bør du vurdere å finjustere [DIA for insulintypen din](#Config-Builder-insulin-dia), basal, ISF og IK.** Se [Facebook](https://www.facebook.com/groups/AndroidAPSUsers)- eller [Discord](https://discord.gg/4fQUWHZ4Mw)-gruppen, der dette diskuteres mye.


I **Opplæringsmål 6** overstyrer **AAPS** maxIOB-innstillingen til null. **Denne overstyringen slutter når du går videre til Opplæringsmål 7.**

Det betyr at når du er på **Opplæringsmål 6** og sensorverdiene faller, reduserer **AAPS** basalinsulinet for deg. Men hvis sensorverdiene stiger, øker **AAPS** basaldosen over **Profil**-verdien din bare hvis **basal-IOB** er negativ som følge av en tidligere **LGS**. Ellers øker **AAPS** ikke basalen over den gjeldende profilverdien din, selv om blodsukkeret stiger. Denne forsiktigheten er for å unngå følinger mens du lærer å bruke **AAPS**.

**Det betyr at du må håndtere høye blodsukkerverdier med manuelle boluskorreksjoner.**

- Hvis IOB er negativ (se skjermbildet nedenfor), kan en midlertidig basal (TBR) > 100 % utløses i **Opplæringsmål 6**.

![Eksempel på negativ IOB](../images/Objective6_negIOB.png)

- Sett målområdet ditt litt høyere enn du vanligvis ville siktet mot, bare for å være på den sikre siden og legge inn en sikkerhetsmargin.
- Slå på modusen «Stopp ved lavt BS» ved å trykke på Loop-ikonet på hovedskjermen og velge **Stopp ved lavt BS** som kjøremodus.
- Følg med på aktive midlertidige basaler ved å se på den turkise basalteksten på skjermen OVERSIKT eller den turkise basalvisningen som er en del av grafen på OVERSIKT.
- Du kan i en periode oppleve topper etter behandlede følinger uten å kunne øke basalen når blodsukkeret stiger igjen.

(objectives-objective7)=
## Opplæringsmål 7: Justere den lukkede loopen, øke maxIOB over 0 og gradvis senke BS-målene

For å fullføre **Opplæringsmål 7** må du lukke loopen og øke [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over). **maxIOB** ble automatisk satt til null i **Opplæringsmål 6** på grunn av modusen Stopp ved lavt BS. Det gjelder ikke lenger. **AAPS** begynner å bruke maxIOB-verdien du har satt, til å korrigere høye blodsukkerverdier. I [enkelmodus](#preferences-simple-mode) setter **AAPS** maxIOB automatisk, og du trenger ikke å endre den.

Minste tid for å fullføre dette opplæringsmålet: **1 dag**. Dette er en obligatorisk ventetid. Det er ikke mulig å gå videre til neste **Opplæringsmål** før denne tiden er gått.

- Velg **Lukket Loop** ved å trykke på [Loop-ikonet](#AapsScreens-loop-status) på hovedskjermen og velge **Lukket Loop** som kjøremodus. Bli i **Lukket loop** i 1 dag.

- Øk sakte «Maks IOB for SMB» (i OpenAPS kalt «max-iob») over 0, til du finner innstillingene som fungerer best for deg.

Standardanbefalingen for denne innstillingen er «**gjennomsnittlig måltidsbolus + 3x max daglig basaldose**», der «max daglig basaldose» er den høyeste timeverdien i noe tidsrom av døgnet.

![max daglig basaldose](../images/MaxDailyBasal2.png)

Denne anbefalingen bør ses på som et utgangspunkt. Hvis du bruker denne regelen, men opplever at AAPS gir for mye insulin når blodsukkeret stiger, må du kanskje:
* senke verdien «Maks IOB for SMB»;
* gå gjennom **Profil**-innstillingene dine, og gjør bare én justering om gangen.

Hvis du er svært insulinresistent, kan du alternativt øke **maxIOB**-verdien svært forsiktig.

Når du er trygg på hvilken **maxIOB** som passer loopmønsteret ditt, senker du **BS-målene** dine til nivået du ønsker.

(objectives-objective8)=
## Opplæringsmål 8: Justere basaldoser og forholdstall ved behov, og deretter aktivere Autosens

I dette **opplæringsmålet** går du gjennom hvor godt **Profilen** din virker, og bruker [Autosens](#Open-APS-features-autosens) som en indikator på feil innstillinger.

Minste tid for å fullføre dette opplæringsmålet: **7 dager**. Dette er en obligatorisk ventetid. Det er ikke mulig å gå videre til neste **Opplæringsmål** før denne tiden er gått.

Aktiver [Autosens](../DailyLifeWithAaps/KeyAapsFeatures.md) i 7 dager (i [enkelmodus](#preferences-simple-mode) er den på som standard), og følg med på [den hvite linjen i grafen i **oversikten**](#AapsScreens-section-g-additional-graphs), som viser at insulinsensitiviteten din stiger eller faller på grunn av trening, hormoner osv. Hold øye med plugin-skjermen **OpenAPS SMB** (**Konfigurasjon → APS → Åpne plugin**), som viser at **AAPS** justerer sensitivitet, basaler og mål i tråd med dette.

Dette er et godt tidspunkt for å gå gjennom innstillingene dine for [Sensitivitetsdeteksjon](#Config-Builder-sensitivity-detection). Du kan se sensitiviteten din på hovedskjermen i en [ekstra graf](#AapsScreens-section-g-additional-graphs).

I tillegg kan du bruke [Autotune](#autotune-how-autotune-calculates-adjustments) én gang for å sjekke at basalene dine fortsatt er riktige, eller gjøre en vanlig basaltest.

(objectives-objective9)=
## Opplæringsmål 9: Aktivere flere oref1-funksjoner for bruk på dagtid, som supermikrobolus (SMB)

I **Opplæringsmål 9** tar du for deg og bruker **«Super Micro Bolus (SMB)»** som en kjernefunksjon. Når du har gått gjennom det obligatoriske lesestoffet, har du en god forståelse av hva SMB-er er, hvordan de virker, og hvorfor basalen settes midlertidig til null etter at SMB-er er gitt (null-basal, «zero-temping»).

Minste tid for å fullføre dette opplæringsmålet: **28 dager**. Dette er en obligatorisk ventetid. Du kan ikke gå videre til neste opplæringsmål før denne tiden er ute.

- [SMB-delen i denne dokumentasjonen](#Open-APS-features-super-micro-bolus-smb) og [omtalen av oref1 i openAPS-dokumentasjonen](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) må leses for å forstå **SMB** og begrepet **null-basal (zero-temping)**.
- Når det er gjort, kan du [øke maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) for at **SMB-er** skal virke bedre. maxIOB omfatter nå all **IOB**, ikke bare oppsamlet basal. Denne grensen setter **SMB-er** på pause til IOB faller under verdien (_f.eks._ **maxIOB** er satt til 7 E, og en bolus på 8 E gis til et måltid: SMB-er settes på pause og gis ikke før **IOB** faller under 7 E). Et godt utgangspunkt er å sette **maxIOB** = **gjennomsnittlig måltidsbolus + 3x max daglig basaldose**, der «max daglig basaldose» er den høyeste timeverdien i noe tidsrom av døgnet. Se [opplæringsmål 7](#objectives-objective7) som referanse.
- Vurder karbohydratopptaket ditt, og vurder å endre parameteren «min_5m_carbimpact» under [Innstillinger → Absorpsjonsinnstillinger → min_5m_carbimpact](#Preferences-min_5m_carbimpact) hvis du synes det er for sakte eller for raskt.

(objectives-objective10)=
## Opplæringsmål 10: Automasjon

**Automasjoner** blir tilgjengelige når **Opplæringsmål 10** er startet.

Minste tid for å fullføre dette opplæringsmålet: **28 dager**. Dette er en obligatorisk ventetid. Du kan ikke gå videre til neste opplæringsmål før denne tiden er ute.

Les dokumentasjonssiden [Automasjoner](../DailyLifeWithAaps/Automations.md) først.

Sett opp den enkleste automasjonsregelen, for eksempel en Android-varsling som utløses om noen minutter:
- Åpne **Administrer → Automasjon** og trykk på **+**-knappen (**Legg til regel**).
- Skriv inn et **Oppgavenavn**, for eksempel «Min første automasjonsvarsling».
- Under **Betingelse**, trykk på «**REDIGER**».
  - Trykk på «**Legg til utløser**» og velg «**Tid**». **AAPS** lager en oppføring for i dag med klokkeslettet nå.
  - Endre klokkeslettet slik at den utløses om noen minutter.
  - Trykk på **Lagre**-ikonet (øverst til høyre) for å gå tilbake til regelen.
- Under **Handling**, trykk på «**LEGG TIL**» og velg «**Varsling**».
  - Skriv inn en melding i handlingskortet, for eksempel «Min første automasjon».
- Trykk på **Lagre**-ikonet (øverst til høyre) og pass på at regelen er **Aktivert**.
- Vent til klokkeslettet utløser varslingen (merk at den kan komme noen minutter for sent, avhengig av telefonen din)

Deretter kan du prøve deg fram med å sette opp en mer nyttig **Automasjon**. Dokumentasjonssiden gir noen eksempler, og du kan søke etter skjermbilder av «Automation» i [Facebook](https://www.facebook.com/groups/AndroidAPSUsers)-gruppen. Det finnes også en egen kanal i [Discord](https://discord.gg/4fQUWHZ4Mw)-fellesskapet.

Hvis du for eksempel spiser det samme til frokost til samme tid hver morgen før skole/jobb, kan du lage en **Automasjon** som «mål-før-frokost», som setter et litt lavere **Midlertidig mål** 30 minutter før frokost. I så fall vil betingelsen din sannsynligvis inneholde «gjentakende tidspunkt», der du velger bestemte ukedager (mandag, tirsdag, onsdag, torsdag, fredag) og et bestemt klokkeslett (kl. 06:30). Handlingen består av «Start midlertidig mål» med en lavere målverdi enn vanlig og en varighet på 30 minutter.

## Når alle opplæringsmålene er fullført

Når du har fullført alle **Opplæringsmål**, viser listen hvert av dem med en hake og datoen det ble fullført. **Opplæringsmål** forsvinner fra navigasjonslinjen nederst; du kan fortsatt åpne listen med **Konfigurasjon → Begrensninger → Opplæringsmål → Åpne plugin**.

![Alle opplæringsmål fullført](../images/objectives/objectives_completed.png)

Trykk på «**Mer**» under et opplæringsmål for å se oppgavene igjen:

![Detaljer for et fullført opplæringsmål](../images/objectives/objective_1_details.png)

(CompletingTheObjectives-go-back-in-objectives)=
## Gå tilbake i opplæringsmålene

Hvis du av en eller annen grunn vil gå tilbake i **Opplæringsmål**, åpner du det fullførte **Opplæringsmålet** med «**Mer**» og trykker på «**Nullstille ferdig-status**»:

![Gå tilbake i opplæringsmålene](../images/Objective_ClearFinished.png)

På samme måte kan **Opplæringsmålet** du holder på med nå, startes på nytt med «**Nullstille start-status**».
