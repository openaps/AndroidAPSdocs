# FAQ

Slik legger du til spørsmål i FAQ-en: Følg disse [instruksjonene](../SupportingAaps/HowToEditTheDocs.md)

## Generelt

### Kan jeg bare laste ned installasjonsfilen til AAPS?

Nei. Det finnes ingen apk-fil av AAPS som kan lastes ned. Du må [bygge](../SettingUpAaps/BuildingAaps.md) den selv. Her er grunnen:

AAPS brukes til å styre pumpen din og gi insulin. Etter gjeldende regelverk i Europa er alle systemer i klasse IIa eller IIb medisinsk utstyr som krever regulatorisk godkjenning (CE-merking), og det krever ulike studier og godkjenninger. Det er ulovlig å distribuere en enhet uten regulatorisk godkjenning. Lignende regler finnes i andre deler av verden.

Dette regelverket gjelder ikke bare salg (det vil si å få penger for noe), men all distribusjon (også å gi bort gratis). Å bygge et medisinsk utstyr til deg selv er den eneste måten å bruke appen på innenfor dette regelverket.

Derfor er det ingen apk-filer tilgjengelig.

(FAQ-how-to-begin)=

### Hvordan begynner jeg?

Start med [Forberedelser før du starter med AAPS](../Getting-Started/PreparingForAaps.md): den siden går gjennom alt nedenfor mer i detalj.

Først må du **skaffe maskinvare som kan loope**:

* En [støttet insulinpumpe](../Getting-Started/CompatiblePumps.md), 
* en [Android-smarttelefon](../Getting-Started/Phones.md) (Apple iOS støttes ikke av AAPS – du kan se på [iOS Loop](https://loopkit.github.io/loopdocs/)) og
* et [system for kontinuerlig glukosemåling](../Getting-Started/CompatiblesCgms.md). 

Deretter må du **sette opp programvarekomponentene dine**: [AAPS](../SettingUpAaps/BuildingAaps.md), [CGM/FGM-kilde](../Getting-Started/CompatiblesCgms.md) og en [rapporteringsserver](../SettingUpAaps/SettingUpTheReportingServer.md).

For det tredje må du lære og **forstå OpenAPS reference design for å kontrollere behandlingsfaktorene dine**. Grunnprinsippet for lukket loop er at [basaldosen og IK-forholdet](../SettingUpAaps/YourAapsProfile.md) ditt er riktige. Alle anbefalinger forutsetter at basalbehovet ditt er dekket, og at topper eller daler du ser, skyldes andre faktorer som derfor krever noen engangsjusteringer (trening, stress osv.). Justeringene som lukket loop kan gjøre, er begrenset av sikkerhetsgrunner (se høyeste tillatte midlertidige basaldose i [OpenAPS Reference Design](https://openaps.org/reference-design/)), så du vil ikke bruke opp den tillatte doseringen på å rette opp en feil basaldose. Hvis du for eksempel ofte får lave midlertidige basaldoser før et måltid, må basaldosen din trolig justeres. Du kan bruke [Autotune](#autotune-how-autotune-calculates-adjustments) til å se på en stor mengde data og foreslå om og hvordan basaldoser og/eller ISF bør justeres, og om IK-forholdet bør endres. Eller du kan teste og sette basaldosen på [den gamle måten](https://integrateddiabetes.com/basal-testing/).

### Hva er de praktiske sidene ved å loope?

#### Passordbeskyttelse

Hvis du ikke vil at innstillingene dine skal være lette å endre, kan du beskytte dem med et passord, en PIN-kode eller telefonens biometriske autentisering (fingeravtrykk, ansikt). Åpne **Innstillinger** > **Beskyttelse** > **Sikkerhet for innstillinger** og velg type beskyttelse. Du kan også beskytte hele appen eller bare boluser på samme sted. Se [Sikkerhet for innstillinger](#Preferences-settings-protection) for detaljer.

#### Android Wear-smartklokker

Hvis du bruker AAPS-klokkeappen til å gi bolus eller endre innstillinger, må hver forespørsel bekreftes på klokken: etter at du har sendt den, viser klokken et sammendrag med en **BEKREFT**-knapp. Se [Styring av AAPS fra Wear OS-smartklokken din](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Koble fra pumpen

Hvis du tar av pumpen for å dusje, bade, svømme, trene eller gjøre andre aktiviteter, må du fortelle AAPS at det ikke gis insulin, slik at IOB blir riktig.

Pumpen kan kobles fra med [loop-ikonet](#AapsScreens-loop-status) på hovedskjermen i AAPS: trykk på det og velg **Koble fra pumpen** med den varigheten du trenger. Hvis aktiviteten tar lengre tid enn planlagt, trykker du på ikonet igjen og velger en ny varighet: du trenger ikke koble til først. Se [Koble fra pumpen ved dusjing eller aktivitet](#pumps-cannulas-disconnecting) for hvordan du unngår insulinmangel ved lange frakoblinger.

#### Anbefalinger baseres ikke bare på én enkelt CGM-måling

Av sikkerhetsgrunner baseres anbefalingene ikke på én CGM-måling, men på gjennomsnittlig delta. Hvis du mister noen målinger, kan det derfor ta litt tid etter at dataene er tilbake før AAPS begynner å loope igjen.

#### Mer å lese

Det finnes flere blogger med gode tips som hjelper deg å forstå de praktiske sidene ved looping. Noen av dem er ikke lenger på nett: lenkene nedenfor som er merket «arkivert kopi», åpner en lagret kopi på Internet Archive.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (arkivert kopi)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (arkivert kopi)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (arkivert kopi)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Hvilket nødutstyr anbefales det å ha med seg?

Du må ha med deg det samme nødutstyret som alle andre med type 1-diabetes og insulinpumpe. Når du looper med AAPS, anbefales det sterkt å ha dette ekstrautstyret med deg eller i nærheten:

* Powerbank og kabler til å lade smarttelefonen, klokken og (ved behov) Bluetooth-leseren eller Link-enheten
* Pumpebatterier
* Tilgang til sikkerhetskopiene dine, både på telefonen og i skyen (for eksempel Google Drive, Dropbox), slik at du kan sette opp AAPS på nytt på en annen telefon (se [Lage og gjenopprette sikkerhetskopier](../Maintenance/ExportImportSettings.md)): 
  * den nyeste [apk-filen](../SettingUpAaps/BuildingAaps.md) til AAPS og til andre apper du bruker (for eksempel xDrip, Juggluco, BYODA).
  * keystore-filen din (fra byggingen av apk-filen) og passordet til den,
  * de nyeste eksportfilene med innstillinger fra AAPS og de andre appene dine,
  * **AAPS**-hovedpassordet ditt: du kan ikke importere innstillingsfilen uten det.

(FAQ-organize-backups)=

#### Hvordan organiserer jeg sikkerhetskopiene mine?

Eksporter innstillingene svært regelmessig: etter hvert pod- eller reservoarbytte, etter at du har endret profilen, når du har fullført et opplæringsmål, hvis du bytter pumpe … Eksporter én gang i måneden selv om ingenting er endret. Ta vare på flere gamle eksportfiler.

**AAPS** kan gjøre dette for deg: den kan eksportere innstillingene automatisk (for eksempel med en [automasjon](#ExportImportSettings-Automating-Settings-Export) etter hvert pod-bytte) og lagre eksporten rett i en skymappe (Google Drive). Se [Lage og gjenopprette sikkerhetskopier](../Maintenance/ExportImportSettings.md).

### Hvordan kan jeg feste CGM/FGM trygt og sikkert?

Du kan teipe den. Det finnes flere ferdig utstansede «overplaster» for vanlige CGM-systemer (søk på Google, eBay eller Amazon). Noen loopere bruker den billigere standard kinesiologiteipen eller rocktape.

Du kan feste den. Du kan også kjøpe overarmsbånd som fester CGM/FGM med et bånd (søk på Google, eBay eller Amazon).

## APS-algoritme

### Hvorfor viser OpenAPS AMA «dia: 3» selv om jeg har en annen DIA i profilen min?

Når **OpenAPS AMA** er valgt i **Konfigurasjon** > **APS**, viser **Åpne plugin** dataene som sendes til algoritmen. I delen **Profil** er `dia` alltid 3.0 eller lavere:

![Skjermbildet for OpenAPS AMA-pluginen med dia 3.0 i profildataene](../images/screens/openaps_ama_plugin.png)

I AMA betyr DIA faktisk ikke «insulinets virkningstid». Det er en parameter som tidligere var knyttet til DIA. Nå betyr den «innen hvilken tid korreksjonen skal være ferdig». Den har ingenting å gjøre med beregningen av IOB. I OpenAPS SMB er det ikke lenger behov for denne parameteren.

## Andre innstillinger

### Nightscout-innstillinger

(FAQ-nsclient-blocked)=

#### AAPSClient (eller AAPS) laster ikke opp data: «Blokkert på grunn av …». Hva kan jeg gjøre?

NSClient-statusen viser hvorfor ingen data sendes:

* **Blokkert på grunn av tilkoblingsalternativer**: tilkoblingsinnstillingene tillater ikke den gjeldende tilkoblingen. Du er for eksempel på mobildata, men bare Wi-Fi er tillatt, eller du er ikke på et av de tillatte Wi-Fi-nettverkene (SSID-er).
* **Blokkert på grunn av ladealternativer**: tilkoblingsinnstillingene tillater bare synkronisering mens telefonen lader (eller bare på batteri), og det er ikke tilfellet akkurat nå.
* **Ingen internettforbindelse**: telefonen har ingen internettforbindelse.

Sjekk [tilkoblingsinnstillingene for NSClient](#Preferences-nsclient): **Bruk mobildata**, **Bruk roaming**, **Bruk WiFi**, **WiFi SSID**, **Synkroniser på batteri** og **Synkroniser under lading**.

### CGM-innstillinger

(FAQ-advanced-filtering)=

#### Hvorfor sier AAPS «SMB alltid på og SMB etter karbohydrater er deaktivert fordi BS-kilden ikke støtter avansert filtrering»?

**Aktiver SMB alltid** og **Aktiver SMB etter karbo** kan bare brukes med en [pålitelig BS-kilde](#GettingStarted-TrustedBGSource): en sensor og CGM-app som kan fortelle **AAPS** hvilken sensor målingene kommer fra. Med alle andre BS-kilder slår **AAPS** av disse to valgene og viser denne meldingen. Sjekk listen over pålitelige kilder, og hvis sensoren din står der, må du bruke en av CGM-appene som er oppgitt for den. Se også [Utjevning av blodsukkerdata](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Pumpe

#### Batterier

Looping kan tappe pumpebatteriet raskere enn vanlig bruk, fordi systemet kommuniserer via Bluetooth mye mer enn en manuell bruker gjør. Det er best å bytte batteri ved 25 %, fordi kommunikasjonen blir vanskelig etter det. Du kan sette varselalarmer for pumpebatteriet med variabelen PUMP_WARN_BATT_P på Nightscout-siden din. Triks for å øke batterilevetiden:

* reduser tiden LCD-skjermen er på (i pumpens innstillingsmeny)
* reduser tiden bakgrunnsbelysningen er på (i pumpens innstillingsmeny)
* velg pip i stedet for vibrasjon i varslingsinnstillingene (i pumpens innstillingsmeny)
* trykk bare på knappene på pumpen for å fylle på; bruk AAPS til å se all historikk, batterinivå og reservoarvolum.
* På noen telefoner kan AAPS-appen ofte bli lukket for å spare strøm eller frigjøre minne (RAM). Når AAPS startes på nytt, oppretter den en Bluetooth-forbindelse til pumpen og leser gjeldende basaldose og bolushistorikk på nytt. Dette bruker batteri. For å se om dette skjer, aktiver **Logg appstart** under **Avanserte innstillinger** i NSClient: Nightscout mottar da en hendelse hver gang AAPS starter på nytt, og det gjør det lett å følge med på problemet. For å redusere dette, slå av batterioptimalisering for AAPS, slik at telefonen slutter å lukke den: se [batterisparing](#FAQ-battery-savings) nedenfor.
* rengjør batteripolene med en spritserviett, slik at det ikke er voks/fett igjen fra produksjonen.
* for [Dana R/RS-pumper](../CompatiblePumps/DanaRS-Insulin-Pump.md) trekker oppstartsprosedyren en høy strøm fra batteriet for med vilje å bryte passiveringsfilmen (den hindrer tap av energi under lagring), men det fungerer ikke alltid 100 %. Enten ta ut og sett inn batteriet 2–3 ganger til skjermen viser 100 %, eller bruk batterinøkkelen til å kortslutte batteriet et øyeblikk før du setter det inn, ved å holde den mot begge polene i en brøkdel av et sekund.
* se også flere tips for [bestemte batterityper](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Bytte av reservoar og kanyle

Reservoaret må byttes direkte på pumpen, og deretter registreres byttet i **AAPS**. Følg den trinnvise [veiledningen for bytte av reservoar og kanyle på pumpen](#pumps-cannulas-changing-reservoir-and-cannula).

### Bakgrunnsbilde

Du finner AAPS-bakgrunnsbildet til telefonen din på [siden om telefoner](#Phones-phone-wallpaper).

### Daglig bruk

Mange av situasjonene nedenfor kan forberedes én gang som en [scene](#scenes): en forhåndsinnstilling som bytter profil, midlertidig mål og andre innstillinger med ett trykk. **AAPS** har ferdige maler, for eksempel *Trening*, *Søvn*, *Alkohol* eller *Bading*.

#### Hygiene

(what-to-do-when-taking-a-shower-or-bath)=

##### Hva gjør jeg når jeg dusjer eller bader?

Du kan ta av pumpen mens du dusjer eller bader. I så kort tid trenger du den kanskje ikke, men du bør fortelle AAPS at du har koblet fra, slik at IOB-beregningene blir riktige. Se [beskrivelsen ovenfor](#FAQ-disconnect-pump). Malen for [scenen](#scenes) *Bading* gjør dette for deg.

#### Arbeid

Avhengig av jobben din kan du velge å bruke andre behandlingsfaktorer på arbeidsdager. Som looper bør du vurdere et [profilbytte](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) for en typisk arbeidsdag. Du kan for eksempel bytte til en profil over 100 % hvis du har en mindre krevende jobb (for eksempel kontorarbeid), eller under 100 % hvis du er aktiv og på beina hele dagen. Du kan også vurdere et høyt eller lavt midlertidig mål eller en [tidsforskyving av profilen din](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) når du jobber mye tidligere eller senere enn vanlig, eller hvis du jobber turnus. Du kan også lage en profil nummer to (for eksempel «hjemme» og «arbeidsdag») og gjøre et daglig profilbytte til den profilen du faktisk trenger, eller lagre innstillingene for arbeidsdagen som en [scene](#scenes).

### Fritidsaktiviteter

(FAQ-sports)=

#### Sport

Du må tenke nytt om de gamle treningsvanene dine fra tiden før loop. Hvis du bare spiser én eller flere treningskarbohydrater som før, vil lukket loop oppdage dem og korrigere for dem.

Da ville du ha mer karbohydrater i kroppen, men samtidig ville loopen motvirke det og gi insulin.

Når du looper, bør du prøve disse stegene:

* Gjør et [profilbytte](#ProfileSwitch-change-percentage) < 100 %: trykk på profilnavnet på hovedskjermen, trykk på den runde **▶**-knappen, og sett så **Prosent** og **Varighet**.
* Sett et [midlertidig mål for aktivitet](#TempTargets-activity-temp-target) over standardmålet ditt. Med en prosent under 100 % og en varighet viser det samme **Aktiver**-skjermbildet en bryter **Midlertidig mål / Aktivitet** som starter begge samtidig.
* Hvis du bruker SMB, må du passe på at [«Aktiver SMB ved høyt midlertidig mål»](#Open-APS-features-enable-smb-with-high-temp-targets) og [«Aktiver SMB alltid»](#Open-APS-features-enable-smb-always) er deaktivert.

For- og etterarbeid med disse innstillingene er viktig. Gjør endringene i god tid før trening, og ta hensyn til effekten av at musklene fyller opp lagrene sine etterpå.

Malene for [scenene](#scenes) *Trening* og *Natt etter trening* samler disse innstillingene, så du kan starte dem med ett trykk. Hvis du trener regelmessig på samme tid (for eksempel en treningstime på treningssenteret), kan du vurdere å bruke [Automasjoner](../DailyLifeWithAaps/Automations.md) til å starte profilbyttet og det midlertidige målet, eller scenen. Stedsbasert automasjon kan også være en idé, men gjør forarbeidet vanskeligere.

Prosenten for profilbyttet, verdien for midlertidig mål for aktivitet og det beste tidspunktet for endringene er individuelt. Start på den sikre siden når du leter etter riktig verdi for deg (start med lavere prosent og høyere midlertidig mål).

#### Sex

Du kan ta av pumpen for å være «fri», men du bør fortelle AAPS om det, slik at IOB-beregningene blir riktige. Se [beskrivelsen ovenfor](#FAQ-disconnect-pump).

#### Alkohol

Å drikke alkohol er risikabelt i lukket loop, fordi algoritmen ikke kan forutsi et BS påvirket av alkohol riktig. Du må finne din egen metode for å håndtere dette med disse funksjonene i AAPS:

* Deaktivere lukket loop og behandle diabetesen manuelt, eller
* sette høye midlertidige mål og deaktivere UAM, slik at loopen ikke øker IOB på grunn av et ikke-varslet måltid, eller
* gjør et [profilbytte](#ProfileSwitch-change-percentage) til merkbart under 100 % 

Malen for [scenen](#scenes) *Alkohol* er et utgangspunkt du kan tilpasse til din egen metode.

Når du drikker alkohol, må du alltid holde øye med CGM-en din, slik at du selv kan unngå føling ved å spise karbohydrater.

#### Søvn

##### Hvordan kan jeg loope om natten uten stråling fra mobilnett og Wi-Fi?

Mange brukere setter telefonen i flymodus om natten. Hvis du vil at loopen skal støtte deg mens du sover, gjør du slik (dette fungerer bare hvis CGM-appen din kjører på samme telefon som AAPS, for eksempel xDrip, Juggluco eller BYODA; det fungerer IKKE hvis du får BS-målingene via Nightscout):

1. Slå på flymodus på mobilen din.
2. Vent til flymodus er aktiv.
3. Slå på Bluetooth.

Nå mottar du ingen anrop, og du er ikke koblet til internett. Men loopen kjører fortsatt.

Noen har opplevd problemer med lokal kringkasting (AAPS mottar ikke BS-verdier fra xDrip) når telefonen er i flymodus. I xDrip går du til Settings > Inter-app settings > Identify receiver og skriver inn `info.nightscout.androidaps`.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

Hvis du vil ha andre innstillinger om natten (for eksempel et høyere mål), er malen for [scenen](#scenes) *Søvn* et godt utgangspunkt.

#### Reiser

##### Hvordan håndterer jeg tidssonebytte?

Med Dana R og Dana R Korean trenger du ikke gjøre noe. For andre pumper, se siden [Tidssonebytte og sommertid](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) for flere detaljer.

### Medisinske temaer

#### Sykehusinnleggelse

Hvis du vil dele informasjon om AAPS og DIY-looping med behandlerne dine, kan du skrive ut [veiledningen til AAPS for behandlere](../UsefulLinks/ClinicianGuideToAaps.md).

#### Legetime hos endokrinologen din

##### Rapportering

Du kan enten vise Nightscout-rapportene dine (https://YOUR-NS-SITE.com/report) eller se på [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Vanlige spørsmål på Discord og svarene på dem ...

### Problemet mitt står ikke her.

Se [hvor du kan få hjelp](../GettingHelp/WhereCanIGetHelp.md). Hvis du fant løsningen selv, **minn oss på å legge den til i denne listen!**

### Bygging og installering

(FAQ-build-errors)=

#### Jeg har problemer eller feil når jeg bygger appen.

Sjekk feilsøkingssiden for den måten du bygger **AAPS** på (se [Bygge AAPS](../SettingUpAaps/BuildingAaps.md)):

* bygging med nettleser: [Nettleserbygg: feilsøking](#aaps-ci-troubleshooting),
* bygging med Android Studio: [Feilsøking av Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Byggefeil: filnavnet er for langt

Denne feilen kan oppstå når du bygger med Android Studio: byggingen stopper med en feilmelding om at filnavnet er for langt. Mulige løsninger: Flytt kildekoden til en mappe nærmere roten av disken (for eksempel «C:\src\AndroidAPS»).

Fra Android Studio: Sørg for at «Gradle» er ferdig med synkronisering og indeksering etter at du har åpnet prosjektet og hentet fra GitHub. Kjør Build->Clean Project før du gjør en Rebuild Project. Kjør File->Invalidate Caches og start Android Studio på nytt.

(FAQ-running-dev-version)=

#### Varsel: Kjører dev-versjon. Lukket loop er deaktivert

**AAPS** viser denne meldingen når du kjører en utviklingsversjon (dev) uten engineering mode: i en dev-versjon fungerer lukket loop bare i engineering mode.

Dev-versjonen er ment for testing, ikke for faktisk looping: les [Utviklingsgrenen (dev)](../AdvancedOptions/DevBranch.md) før du går videre.

Slik slår du på engineering mode:

1. Legg en fil med navnet `engineering_mode` i undermappen `extra` i AAPS-mappen din (mappen du valgte i oppsettveiviseren, vanligvis `AAPS/extra`). Hvilken som helst fil fungerer, så lenge den har riktig navn.
2. Start **AAPS** på nytt, slik at den finner filen.

Tips: Lag en kopi av en eksisterende loggfil og gi den navnet «engineering_mode» (merk: ingen filendelse!).

### Opplæringsmål

#### Jeg står fast på et opplæringsmål og trenger hjelp.

Les først [Opplæringsmålene](../SettingUpAaps/CompletingTheObjectives.md). Hvis du fortsatt står fast, ta et skjermbilde av spørsmålet og svarene og legg det ut på AAPS-kanalen på Discord. Ikke glem å fortelle hvilke valg du tok (eller ikke tok) og hvorfor. Du får hint og hjelp, men du må finne svarene selv.

### Innstillinger, passord og sikkerhetskopier

(FAQ-reset-master-password)=

#### Hvordan tilbakestiller jeg hovedpassordet?

Hvis du har glemt hovedpassordet ditt, kan du tilbakestille det til pumpens serienummer:

1. Lag en tom fil med navnet `PasswordReset` (ingen filendelse) i undermappen `extra` i AAPS-mappen din (vanligvis `AAPS/extra`).
2. Start **AAPS** på nytt. Pumpen må være tilkoblet: **AAPS** viser «Venter på pumpen…» og må lese pumpens serienummer innen 30 sekunder.
3. **AAPS** viser «Passord definert!»: hovedpassordet ditt er nå **pumpens serienummer**. Filen `PasswordReset` slettes automatisk.
4. Åpne **Innstillinger** > **Beskyttelse** > **Hovedpassord** og sett et nytt passord.

Hvis pumpen ikke nås i tide, endres ingenting: sjekk pumpetilkoblingen og prøv igjen.

Dette tilbakestiller bare hovedpassordet. Et passord eller en PIN-kode for innstillinger, appen eller bolus tilbakestilles ikke, men du kan alltid bruke hovedpassordet i stedet for dem.

    {admonition} Gamle innstillingsfiler
    :class: warning
    Innstillingsfiler som ble eksportert med det gamle hovedpassordet, kan bare importeres med det gamle passordet.

(FAQ-where-are-settings-files)=

#### Hvor finner jeg innstillingsfilene?

Innstillingsfilene lagres i undermappen `preferences` i AAPS-mappen du valgte i [oppsettveiviseren](#SetupWizard-StoragePermission) (for eksempel `/internal storage/AAPS/preferences`). Hvis du har satt opp en skymappe (Google Drive), kan eksportene dine også lagres der. Se [Lage og gjenopprette sikkerhetskopier](../Maintenance/ExportImportSettings.md).

ADVARSEL: Pass på at du ikke mister passordet ditt, for uten det kan du ikke importere en kryptert innstillingsfil!

(FAQ-import-settings-earlier-versions)=

#### Hvordan importerer jeg innstillinger fra eldre versjoner av AAPS til AAPS v3 eller v4?

Du kan bare importere innstillinger (i AAPS v3 eller v4) som ble eksportert med AAPS v2.8x eller nyere. Hvis du brukte en versjon av AAPS som er eldre enn v2.8x, eller du må bruke innstillingseksporter som er eldre enn v2.8x, må du først installere AAPS v2.8. Importer de gamle innstillingene fra v2.x i v2.8. Når du har sjekket at alt er i orden, kan du eksportere innstillingene fra v2.8. Installer den gjeldende AAPS-versjonen og importer v2.8-innstillingene i den.

Hvis du bruker den samme nøkkelen til å bygge den gamle og den nye versjonen, trenger du ikke engang importere innstillinger. Du kan installere den nye versjonen over den gamle.

Det er lagt til noen nye opplæringsmål. Du må fullføre dem.

(FAQ-delete-treatments)=

#### Hvor kan jeg slette behandlinger?

Åpne **menyen** (☰) og velg **Behandlingshistorikk**. Trykk og hold på en oppføring for å velge den, trykk på flere oppføringer om nødvendig, og trykk så på **søppelbøtte**-ikonet og bekreft. Se [Behandlingshistorikk](#aaps-screens-treatments).

### Problemer med telefon og tilkobling

(FAQ-aaps-stops)=

#### AAPS stopper hver dag omtrent på samme tid.

* Google Play Protect kan stenge **AAPS** hver morgen på noen telefoner. Hvis dette skjer, gå til innstillingene for Google Play og slå av **Google Play Protect**.
* Se etter «rydde»-apper (for eksempel CCleaner) og avinstaller dem.
* Slå av all batterioptimalisering for **AAPS** (se [batterisparing](#FAQ-battery-savings) nedenfor).

(FAQ-battery-savings)=

#### Hvordan setter jeg opp batterisparing?

Telefonen din kan sette **AAPS** og tilhørende apper (CGM-app, Bluetooth) på pause når du ikke bruker den. Da kan ikke **AAPS** gjøre jobben sin, og Bluetooth-forbindelsene til sensoren og pumpen (eller RileyLink) kan bli brutt, noe som gir varsler om «Pumpe er utilgjengelig» og kommunikasjonsfeil.

Slå av batterioptimalisering for **AAPS**, CGM-appen din (for eksempel xDrip) og Bluetooth-systemappen. Hvordan du gjør dette, avhenger av telefonens merke, modell og Android-versjon:

* se [Batterioptimalisering](#generaltroubleshooting-android-related-issues) for Pixel-, Samsung- og Huawei-telefoner,
* i **AAPS**, åpne **menyen** (☰) > **Om** og trykk på **Ikke steng appen min?**, eller besøk [Don't kill my app](https://dontkillmyapp.com/) for andre merker.

Hvis du ikke er sikker på at batterisparing er årsaken til problemet ditt, kan du midlertidig slå av all batterisparing på telefonen: batteriet tappes raskere, men du ser fort om problemet forsvinner.

(FAQ-pump-unreachable-alerts)=

#### Varsler om utilgjengelig pumpe flere ganger om dagen eller om natten.

Telefonen din kan sette **AAPS** eller til og med Bluetooth på pause, slik at den mister forbindelsen til pumpen eller RileyLink (se [batterisparing](#FAQ-battery-savings) ovenfor).

Du kan også endre når varselet utløses: trykk på **Innstillinger**-ikonet (tannhjulet) øverst til høyre på hovedskjermen, og velg så **Lokale varsler** > **Terskel for utilgjengelig pumpe** (30 til 300 minutter). Sjekk siden for pumpen din: noen anbefaler en verdi, for eksempel 120 minutter for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### Link-enheten/pumpen/podden min svarer ikke (RL/OL/EmaLink…)

På noen telefoner mister Link-enhetene (RL/OL/EmaL...) Bluetooth-forbindelsen.

Noen har også Link-enheter som ikke svarer (AAPS sier at de er tilkoblet, men Link-enhetene når ikke pumpen eller kan ikke styre den.)

Prøv først knappen **Tilbakestill RileyLink** på pumpeskjermen (se siden for pumpen din: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). Hvis dette ikke hjelper, er den enkleste måten å få alle delene til å fungere sammen igjen slik:

1. Slå av Link-enheten.
2. Avslutt **AAPS** (**menyen** (☰) > **Avslutt**).
3. Trykk og hold på **AAPS**-ikonet, åpne Android-skjermbildet **Appinfo**, trykk på **Tvungen stopp**, og deretter **Lagring** > **Tøm buffer** (IKKE tøm lagring/data!).
4. I sjeldne tilfeller må noen telefoner startes på nytt her. Du kan prøve uten å starte på nytt.
5. Slå på Link-enheten.
6. Start **AAPS**.
7. På pumpeskjermen trykker du på **Par RileyLink** og velger Link-enheten din igjen.

### Fjernstyring

(FAQ-aapsclient)=

#### Sette opp og bruke fjernstyringsappen AAPSClient

**AAPSClient** er en egen app som lar en omsorgsperson følge og styre **AAPS** eksternt. Fra og med **AAPS** v4 krever styring av **AAPS** fra AAPSClient en engangs sammenkobling mellom de to appene. Se:

* [AAPSClient-appen](#aapsclient-app): installering, første start og sammenkobling,
* [Hovedenhet ↔ klientstyring](#client-master-control): hva som kan styres, og hvordan sammenkoblingen fungerer,
* [AAPSClient på en smartklokke](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Behandlinger jeg legger inn på Nightscout-nettsiden, blir ikke brukt

Det er [herdet modus](#client-master-control-hardened-mode). Når klientstyring er på – alltid i Enkelmodus – tar **AAPS** bare imot endringer fra sammenkoblede klienter, ikke fra Nightscout-nettsiden eller andre apper. Legg dem inn på en sammenkoblet **AAPSClient** i stedet.

### Varsler og advarsler

#### Jeg har et rødt varselmerke (rød trekant) / AAPS vil ikke aktivere lukket loop / Loopen blir stående i LGS / Jeg hadde en gul trekant

Det røde varselmerket på BS-kilde-snarveien er en sikkerhetsfunksjon i AAPS. Se [BS-varselsymbol](#aaps-screens-bg-warning-sign) for hele forklaringen.

Et rødt varselmerke på BS-kilde-snarveien i linjen nederst (den røde trekanten i eldre versjoner) betyr at du har doble BS-verdier, og at AAPS ikke kan beregne deltaene nøyaktig. En lukket loop settes i modusen **Stopp ved lavt BS**: den reduserer eller stopper fortsatt basalen for å beskytte deg mot lave verdier, men den gir ikke korreksjonsinsulin. Du må slette én BS-verdi av hvert dobbelt par for å fjerne varselet. Trykk på snarveien for å åpne [BS-kilde-skjermbildet](#aaps-screens-bg-source): duplikatet er uthevet i rødt. Trykk og hold på en linje du vil slette, kryss av én av hver av linjene som er doble, og trykk på søppelbøtte-ikonet. Du må kanskje tilbakestille AAPS-databasene hvis det er for mange doble BS-verdier. I så fall mister du også statistikk, IOB, COB og valgt profil.

Når varselet er borte, går AAPS ikke tilbake til **Lukket loop** av seg selv. Trykk på loop-ikonet på hovedskjermen og velg **Lukket loop** igjen.

Mulig årsak til problemet: xDrip og/eller NS fyller inn hull med gamle BS-verdier (backfill).

Den gule trekanten i eldre versjoner betydde ustabil tid mellom hver BS-måling (BS-verdier som ikke kom regelmessig hvert 5. minutt, eller manglende BS-verdier), noe som ofte skjer med Libre eller etter bytte av G6-sender. **AAPS** 4 viser den ikke lenger: den beregner verdiene på nytt i bakgrunnen, og loopen fungerer som den skal.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Kan jeg flytte en aktiv DASH-pod til en annen telefon?

Pod-tilstanden er med i de eksporterte innstillingene, så en aktiv pod kan flyttes til en annen telefon ved å eksportere innstillingene rett før flyttingen og importere dem på den andre telefonen. Dette er ikke offisielt støttet, og det er en risiko for å miste podden: prøv det helst når podden din snart utløper.

Les disse avsnittene først:

* [Eksportere og importere innstillinger](#omnipod-dash-export-import) på Omnipod DASH-siden, og [Slangeløse pumper](#ExportImportSettings-tubeless-pumps): på den nye telefonen krysser du av for **Bytt også ut pumpeinnstillingene** og bruker en fil som ble eksportert mens du hadde den podden du bruker nå,
* [Forkaste en pod](#omnipod-dash-discard-pod), for å fjerne podden fra den gamle telefonen etterpå. Hold den gamle telefonen i flymodus til podden er forkastet, slik at de to telefonene aldri snakker med podden samtidig.