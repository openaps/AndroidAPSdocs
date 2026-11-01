
# Versjonsnotater

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Følg instruksjonene i [oppdateringsveiledningen](UpdateToNewVersion.md) for å oppdatere til en ny versjon. Feilsøkingsdelen på siden med oppdateringsveiledningen tar også for seg de vanligste problemene som oppstår når du oppdaterer **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Se [Hva er endret i AAPS v4](V4Changes.md) for de viktigste endringene i oppførsel — funksjoner som er flyttet, har fått nytt navn eller er fjernet.
```

Du får et varsel som dette når en ny oppdatering er tilgjengelig:

![Informasjon om oppdatering](../images/AAPS_LoopDisable90days.png)

Hvis du ikke oppdaterer før utløpsdatoen, bytter **AAPS** til åpen loop.

Se [Sluttdato for AAPS-versjoner](EndOfLife.md) for når hver AAPS-versjon utløper.

**Ikke ignorer varselet.** Nye versjoner av **AAPS** inneholder viktige sikkerhetsrettelser. Derfor må alle som bruker **AAPS**, oppdatere til den nyeste versjonen så snart som mulig. Dette er et forsøk på å gjøre det tryggere for hver enkelt **AAPS**-bruker og for DIY-fellesskapet. Takk for forståelsen.

(maintenance-android-version-aaps-version)=

## Android-versjon og AAPS-versjon

Hvis smarttelefonen din bruker en Android-versjon som er eldre enn Android 12, kan du ikke bruke AAPS v3.4 og nyere, siden den krever minst Android 12.

For at brukere med eldre Android skal kunne bruke eldre versjoner av AAPS, ble det gitt ut nye versjoner som bare endrer versjonskontrollen. Ingen andre forbedringer er med.

Finn Android-versjonen din i tabellen nedenfor og bruk den **AAPS**-versjonen som passer. Koden lastes ned fra <https://github.com/nightscout/AndroidAPS> med grenen som er vist.

| Din Android-versjon | AAPS-versjon du skal bruke | Gren du skal laste ned                                           |
| ------------------- | -------------------------- | ---------------------------------------------------------------- |
| Android 12 og nyere | Nyeste versjon             | [master](https://github.com/nightscout/AndroidAPS) (standard)    |
| Android 11          | **3.3.2.1**                | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10       | **3.2.0.4**                | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8           | **2.8.2.1**                | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7           | **2.6.2**                  | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## WearOS-versjon

- AAPS krever WearOS 3.0, 3.2 eller 3.5 (Android 11, API-nivå 30) eller nyere. WearOS 2-klokker støttes ikke.

```{tip}
WearOS 5, API-nivå 34 (Android 14) har [begrensninger](#BuildingAapsWearOs-WearOS5).
```

Versjonene med overskrift er den nyeste utgivelsen for hver Android-versjon (se tabellen over). De andre utgivelsene kommer imellom, med notatene sine eller en lenke til dem på GitHub.

(latestrelease)=

(version400)=

## Versjon 4.0.0

Utgivelsesdato: 31-10-2026

**Nye funksjoner**

- Nytt brukergrensesnitt: telefonappen er bygget på nytt i Jetpack Compose @MilosKozak
- [Globalt søk](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migrering til Kotlin Multiplatform, klient for Windows, Mac og Linux (datamaskin) og iOS @MilosKozak
- [Scener](../DailyLifeWithAaps/Scenes.md): lagre et sett med handlinger og kjør dem sammen @MilosKozak
- [Hovedenhet ↔ klientstyring](../RemoteFeatures/ClientMasterControl.md): send kommandoer fra en klienttelefon til hovedenheten @MilosKozak
  - [Klientroller](#client-master-control-roles): Kun lesing, Måltider, Omsorgsperson eller Administrator for hver klient @MilosKozak
  - [Herdet modus](#client-master-control-hardened-mode): når klientstyring er på, tar hovedenheten bare imot endringer fra sammenkoblede klienter @MilosKozak
  - Sammenkobling med en QR-kode som også setter opp Nightscout på klienten, eller med en PIN; sammenkoblingsnøkkelen byttes ut rett etter sammenkoblingen @MilosKozak
  - [Eget Nightscout-token](#client-master-control-own-token) for hver klient, med bare de rettighetene en klient trenger @MilosKozak
- Støtte for [Insulinkonsentrasjon](../AdvancedOptions/InsulinConcentration.md) (U200, U500) i pumper, kalkulatoren og profiler @Philoul @MilosKozak
- Insulinhåndtering: insulinkatalog, kallenavn, valg i profil og kalkulator @Philoul
- Plugin for kalibrering @MilosKozak
- [Utjevning](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalman-filter (UKF) @piecycle
- Nye [automasjonshandlinger](#automations-automation-action): **Endre utjevning** @olorinmaia, og **Kjør**, **Aktiver** eller **Deaktiver scene** @MilosKozak
- [Rotasjon av sted](#Aapsscreens-site-rotation): hold oversikt over og roter infusjonsstedene @Philoul @MilosKozak
- [Autotune](../AdvancedOptions/Autotune.md) er omarbeidet @Philoul
- Nye [widgeter](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Tilgjengelighet: telefonappen virker med en skjermleser – navngitte kontroller, opplest status, beskrivelser av grafene og overskrifter du kan hoppe mellom @MilosKozak
- [Import av innstillinger](../Maintenance/ExportImportSettings.md): kan beholde pumpeinnstillingene @MilosKozak
- Det vedvarende varselet bruker Androids sanntidsoppdateringer (live updates), med støtte for Samsung Now bar og delta @premnirmal
- BS-graf: [trykk og hold](#aaps-screens-graph-press-and-hold) for å se verdiene ved en måling, på alle grafene i oversikten @t1dude @olorinmaia
- Ytelsesforbedringer @MilosKozak
- Automatisk eKarbo i Boluskalkulator @MilosKozak

**Nye enheter**

- **CareLevo**: ny [pumpedriver](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: støtte @MilosKozak
- **Instara**: ny CGM-kilde @leohunt

**Forbedringer i pumpedrivere**

- Pumpeoversiktsskjermene er bygget på nytt for Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn og Equil @MilosKozak
- **Omnipod Dash**: Ref-koder i PDM-stil og lesbare feilbeskrivelser, driftkompensasjon alltid på, bedre rapportering av bolustype @nl-ruud
- **Omnipod**: fast sluttdato for Dash & Eros @mcnelson
- **DanaR, RS**: pumpeemulator for testing @MilosKozak
- **Equil**: pumpeemulator for testing @MilosKozak
- Mange rettelser for pumper og loop @MilosKozak og andre

**Wear OS**

- [Klokkeappen](../WearOS/WearOsSmartwatch.md) er bygget på nytt i Compose, nye fliser og komplikasjoner, automatisk installasjon av urskive (Watch Face Push) på Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface tilgjengelig for WearOS 6.0 (GW7, GW8, GW9 ...) med en egen WFF-urskive @Philoul @olorinmaia
- CustomWatchface kan nå ha 5 komplikasjonsplasser som du kan tilpasse (ny funksjon, bare tilgjengelig for eldre klokker) @Philoul
- Ny [WFF-urskive basert på AAPS-komplikasjoner](#wearos-complications-watchface-setup) @olorinmaia
- Korrigeringer i resultatet fra Boluskalkulator og Hurtigknapp @olorinmaia
- Ny BS-graf og Kjøremodus-aktivitet i hovedmenyen @olorinmaia
- Boluskalkulator: side for [måltidstype](#WearOsSmartwatch-wizard-meal-type) som deler opp karbohydratene som kalkulatoren på telefonen, og [karbotid](#WearOsSmartwatch-wizard-carb-time) med påminnelsen *tid for å spise* på klokken @olorinmaia
- [Telefonalarmer på klokken](#WearOsSmartwatch-phone-alarms): klokken viser alarmen og tilbyr Demp og Lyd av i 5 min @olorinmaia

**Bygg**

- CI-arbeidsflyter for bygg fra tagger/grener, tilordning av JDK-versjon @Angus-repo

**Bidragsytere**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Full endringslogg: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

## Versjon 3.4.2.6

- Equil: bedre stabilitet @MilosKozak

---

(version3425)=

**Versjon 3.4.2.5**

- Equil: rettet kappløpsfeil (race condition) @MilosKozak

---

(version3424)=

**Versjon 3.4.2.4**

- Rettelser for Equil @MilosKozak
- Rettet synkronisering av profil med NS @MilosKozak

---

(version3423)=

**Versjon 3.4.2.3**

- Dash: håndtering av drift @nl-ruud
- NSClientV3: rettet hull i data etter ny tilkobling @MilosKozak
- Automasjon: rettet deserialisering @MilosKozak
- Equil: rettet batterirapportering @MilosKozak
- Opprydding i arbeidsflyt @vanelsberg
- Equil: bedre gjenoppretting etter feil @MilosKozak
- DanaRS: rettet kommunikasjon med den koreanske pumpemodellen (domestic) @MilosKozak
- Insight: rettet synkronisering av midlertidig basal @MilosKozak
- Dash: rettet feil ved aktivering @nl-ruud

---

(version3422)=

**Versjon 3.4.2.2**

- Rettet problemer med Equil og Medtronic
- Bedre sikkerhet for Medtrum

---

(version3421)=

**Versjon 3.4.2.1**

- Equil: rettet sammenkobling og fremdriftsdialog @MilosKozak

---

(version3420)=

**Versjon 3.4.2.0**

Utgivelsesdato: 04-02-2026

- Equil: rettet motstand for ulike modeller @hhfcvmars
- Tidepool: rettet økt @MilosKozak
- Medtrum: rettet aktiveringen ved å hindre dobbel fylling @MilosKozak
- COB: rettet COB-beregningen (dekker et farlig grensetilfelle) @MilosKozak

---

(version3410)=

**Versjon 3.4.1.0**

Utgivelsesdato: 03-08-2026

**Kjerne**

- Rettet håndtering av sommertid (DST) @MilosKozak
- Forbedret og samordnet gjenkjenning av normalt mål (mg/dl > 99, mmol > 5,5) @MilosKozak
- SMS: RESTART er beskyttet med PIN @MilosKozak
- Vedlikehold: advarer hvis feil mappe er valgt @MilosKozak

**Forbedringer i pumpedrivere**

- **Omnipod Dash**: BLE-driverkoden er flyttet til modulen omnipod/common @jwoglom
- **Omnipod Dash**: forsøk på å rette tilkoblingsstatus @MilosKozak
- **Omnipod**: validerer profilen før pod-aktivering for å unngå at pods kastes bort (#4534) @brianV
- **Medtronic**: rettet at samme kodingstype ble vist i innstillingsdialogen @mifi100
- **Medtronic**: forberedt felles pumpeklasser (forberedelse for Tandem) @andy-rozman
- **RileyLink**: rettet koding (#4519) @mifi100
- **Equil**: utvidet pumpekompatibilitet basert på prefiks i serienummeret (#4510) @hhfcvmars
- **Equil**: lagt til logging @MilosKozak
- **Diaconn G8**: rettet feil i loggsynkronisering og lagt til støtte for fastvare 3.58+ @miyeongkim
- **Diaconn**: rettet enhetsomregning for varighet av midlertidig basal @miyeongkim
- **Diaconn**: bruker commandQueue.loadEvents() for synkronisering av historikk @miyeongkim
- Tillater insulintilførsel når loop er pauset, men pumpen er tilgjengelig @cschuijt

**Sky / sikkerhetskopi**

- Sikkerhetskopi til Google Drive @Angus-repo
- Brukergrensesnittet varsles når feilstatus for skylagring endres @Angus-repo
- Tillater lokal lagring og skylagring samtidig @Angus-repo

**Tidepool**

- Forbedret migrering til Tidepool OAuth2 @MilosKozak
- Rettet at Tidepool ble stående i tilstanden BLOCKED, rettet avvisning av tomme SSID-er @michaeln-synapse

**NSClient**

- NSCv3: bedre ny tilkobling @MilosKozak

**Wear OS**

- Viser nytt IOB i kalkulatorresultatet hvis IOB brukes i beregningen @olorinmaia
- Rettet bolusfremdrift på klokken med total mengde @Philoul

**Brukergrensesnitt**

- Forbedret ikonet ic_none for Rotasjon av sted @Philoul
- Rettet at pumpeinnstillingen for rotasjon av sted ikke ble brukt @samfundev

**Bidragsytere**

@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

---

(version3400)=

**Versjon 3.4.0.0**

Utgivelsesdato: 31-12-2025

**Før du oppgraderer:**

* Denne versjonen krever Google Android 12.0 eller nyere. Sjekk Android-versjonen på telefonen før du prøver å oppdatere.
* Oppdater til nyeste Android Studio, eller enda bedre: bruk nettleserbygg.

**Nye funksjoner**

* Kjøremodus @MilosKozak
  * Viser [historikk for loopstatus](#AapsScreens-running-mode) i behandlingsfanene
  * Viser og lar deg endre [loopstatus fra AAPSClient](#RemoteControl_aapsclient).<br>NB: krever innstillingen [NSClient > Synkronisering > Motta kjøremodus fra NS](#Preferences-nsclient-synchronization)
* [Nye CGM-er](../Getting-Started/CompatiblesCgms.md): Glunovo, Intelligo, Sinocare
* Støtte for [rotasjon av sted](#Aapsscreens-site-rotation) @Philoul
* Ny [automasjonshandling](#automations-automation-action): aktiver eller deaktiver SMB @MilosKozak
* Syai CGM er en [pålitelig kilde](#GettingStarted-TrustedBGSource) og støtter avansert filtrering @MilosKozak

**Forbedringer for Wear OS**

* kraftig redusert batteribruk @MilosKozak
* Forbedringer og rettelser i brukergrensesnittet @olorinmaia
* nesten all kode er skrevet om for å passe dagens bibliotekversjoner (tidligere WearOS 2) @MilosKozak
* 2 nye komplikasjoner for utvidede data @Philoul
* Migrert til moderne komplikasjonsleverandør med DataStore @MilosKozak

**Rettelser av minnelekkasjer**

* Rettet minnelekkasjer i koden @MilosKozak
* Lagt til rapportering av minnelekkasjer med LeakCanary til Firebase Crashlytics @MilosKozak

**Forbedringer i pumpedrivere**

* **DanaI**: rettet frakoblingsproblemer @MilosKozak
* **RileyLink**: raskere kommunikasjon ved å redusere forsinkelser @mifi100
* **Medtrum**: lagt til visning av aktiveringstid og alder for patchen @vanelsberg, rettet store bokstaver i passord @MilosKozak
* **Combo**: rettet kappløpsfeil (race conditions) i tester @MilosKozak @dv1
* **Equil**: optimalisert tilkobling, redusert batteribruk @MilosKozak

**Nightscout-synkronisering**

* Bedre fjerning av duplikater ved NS-feil @MilosKozak

**Forbedringer i brukergrensesnitt og brukeropplevelse**

* diverse forbedringer @MilosKozak @Philoul @olorinmaia

**Automasjon**

* Ny handling for SMB-styring – aktiver/deaktiver SMB via automasjon @MilosKozak

**Testing**

* Lagt til omfattende enhetstester for pumpene Equil, Eopatch, Dana og Medtronic @MilosKozak
* Bedre teststabilitet og testdekning i flere moduler @MilosKozak

**Tidepool**

* Tidepool OAUTH2 (støtte for ny Tidepool-autentisering) @MilosKozak

---

(version3321)=

## Versjon 3.3.2.1

Utgivelsesdato: 13-08-2025

- Rettet Bluetooth-tilkoblingen til Omnipod på Android 16
- CI-prosess (nettleserbygg)
- Rettet omregning mellom mmol og mg/dl
- Rettet feil tidsvalg i dialoger i noen tidssoner
- Rettet lesing av nøkler i enkelmodus
- Rettet manglende prediksjoner på klokken
- Forbedret ConfigBuilder
- Forbedret full synkronisering i NSCv3

---

(version3300)=

**Versjon 3.3.2.0**

Utgivelsesdato: 27-03-2025

**Slik oppgraderer du**

* [Android Studio-versjonen som heter «Meerkat»](#Building-APK-recommended-specification-of-computer-for-building-apk-file) eller nyere kreves for å bygge denne versjonen. Hvis du allerede har bygget en 3.3.x-versjon, må du oppgradere Android Studio igjen.

(version-enforcement)=

**Fra og med denne versjonen er varslingen og håndhevingen av versjoner forenklet og gjort mildere, og den virker slik:**

*  Ingen utløp når enheten er frakoblet (hvis det ikke er noen tilkobling til internett). Det betyr at det ikke lenger er noen ekstraperioder på 60 og 90 dager.
*  Etter utløp tvinges LGS-modus
*  Du får advarsler/varsler sjeldnere:
   - 28+ dager igjen: hver 7. dag
   - 27–14 dager igjen: hver 3. dag
   - deretter én gang om dagen
   - Varselet lages etter klokken 12, slik at du ikke forstyrres om natten
* Det finnes bare 2 typer varsler
   - Ny versjon tilgjengelig (har ingen effekt på AAPS)
   - Appen utløper på en dato fram i tid (fortsatt ingen effekt på AAPS) / har utløpt (AAPS går over i LGS-modus)

**Nyheter**

* SMS-kommandoen RESTART @MilosKozak
* Parametere for profilbytte på klokken @olorinmaia
* Mørk modus for urskiven AAPS V2 @olorinmaia
* Forbedringer i datautveksling for G7 @olorinmaia
* Widget-konfigurasjon @MilosKozak
* Forbedringer i brukergrensesnittet for radioknapper @olorinmaia
* Automasjon: velg posisjon fra kart @MilosKozak
* Versjonen vises på hovedskjermene @MilosKozak
* Kompilering krever et eksisterende git-system (ingen zip-nedlastinger)
* Viser versjonen på hovedskjermen @MilosKozak
* Forbedringer i opplasting til Tidepool @ConstantinMatheis

**Feilrettinger**

* Rettet oppheving av binding (unbonding) for Dash @Andreas
* Rettelser for Garmin @robertbuessow @suside
* Rettet visning av IOB i dialoger @olorinmaia
* Bedre stavemåte og validering i opplæringsmålene @MilosKozak
* Rettet tegning av emulerte midlertidige basaler @MilosKozak
* Rettet omgåelse av sikkerhet @tdrkDev

---

**Versjon 3.3.1.3**

Utgivelsesdato: 21-01-2025

**Feilrettinger**

* Dash: binding (bonding) er valgfritt (av som standard) @MilosKozak
* Equil: rettet bolus på 10+ E, forbedrede alarmer @EquilHack
* Garmin: forbedringer for klokken @swissalpine
* Forbedringer for klokken @olorinmaia
* Styr loopstatus fra klokken @tdrkDev
* Stabilitetsforbedringer

*  **Nytt [oppsett av autentiseringsapp](#sms-commands-authenticator-setup) kan være nødvendig.**

---

**Versjon 3.3.1.2**

Utgivelsesdato: 15-01-2025

**Slik oppgraderer du**

* [Android Studio-versjonen som heter «Ladybug Feature Drop»](#Building-APK-recommended-specification-of-computer-for-building-apk-file) eller nyere kreves for å bygge denne versjonen. **Dette er ikke det samme som vanlig «Ladybug».** Hvis du allerede har bygget en 3.3.x-versjon, må du oppgradere Android Studio igjen.

**Feilrettinger**

* Dash: bruker binding (bonding) på Android 15+
* Dexcom-knappen i oversikten er tilbake
* Equil: tillater å fjerne en pumpe som ikke virker
* Advarer når justeringsfaktoren for DynISF er null
* NSCv3: løst websocket-kommunikasjon på telefoner med litt ulik klokke
* SMS-kommandoer: rettet engangspassord (OneTimePassword). **Nytt [oppsett av autentiseringsapp](#sms-commands-authenticator-setup) kan være nødvendig.**
* Rettet et problem der noen innstillinger ikke lenger kunne redigeres.
* Rettet tilbakestilling av hovedpassordet med virtuell pumpe.
* Rettet import av store sikkerhetskopifiler med innstillinger.

---

**Versjon 3.3.1.0**

Utgivelsesdato: 06-01-2025

**Endringer i brukergrensesnittet**

* [Lagt til farger for å skille mellom AAPSClient og AAPSClient2](#RemoteControl_aapsclient) @MilosKozak
* Bedre layout og ikoner for brukerhandlinger

**Andre funksjoner**

* Ny automasjonsutløser: [antall skritt](#screen-heart-rate-steps) @Roman Rihter
* Tillater å motta alt ved full synkronisering i NSCv3 (også data som tidligere ikke ble synkronisert, som midlertidig basal) @MilosKozak
* NSClient v3: Melding virker nå (_dvs._ fra AAPSClient til AAPS) @MilosKozak

**Tekniske endringer & feilrettinger**

* Rettet krasj i Insight @philoul
* Rettet at det ble laget svært mange deviceStatus-oppføringer i Nightscout @MilosKozak
* Rettet karbohydratabsorpsjon @MilosKozak
* Rettet fargen på radioknapper & avkrysningsbokser @MilosKozak
* Rettet feil i migrering av DynISF-prosent @MilosKozak
* Rettet feilplassert DynISF-varsel @MilosKozak
* Rettet feil i urskiver @philoul

---

**Versjon 3.3.0.0**

Utgivelsesdato: 29-12-2024

**Hovedfunksjoner**

* **[Dynamisk ISF](../DailyLifeWithAaps/DynamicISF.md)** er ikke lenger en egen plugin, men er nå med som et valg i pluginen [OpenAPS SMB](#Config-Builder-aps), sammen med noen endringer i oppførselen:
  * **Profilbytte** og **profilprosent** tas nå med i beregningen for **Dynamisk ISF** når det gjelder styrken på den dynamiske sensitiviteten
  * Gjennomsnittlig **ISF** for de siste 24 timene beregnes, og denne verdien brukes i boluskalkulatoren og i **COB**-beregningen. Verdien for **ISF i profilen** brukes ikke i det hele tatt (unntatt som reserve når historikkdata ikke er tilgjengelige)
  * Dokumentasjonssiden for DynamicISF er skrevet om. Les den viktige delen [Ting å tenke på når du aktiverer Dynamisk ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* [Aktiver «SMB alltid» og «SMB etter karbo»](#Open-APS-features-enable-smb-always) for brukere av FreeStyle Libre 2 og Libre 3
  * Merk: krever nyeste versjon av xDrip+ eller Juggluco.
* Nye utløsere for **Automasjon**
* Automatisk eksport av innstillinger

**Slik oppgraderer du**

* Før du oppgraderer:
  * **<span style="color:red">Denne versjonen krever Google Android 11.0 eller nyere</span>**. Sjekk Android-versjonen på telefonen før du prøver å oppdatere.
  * Hvis du bruker den «gamle» Combo-driveren med ruffy, må du bytte til den [innebygde Combo-driveren](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) før du oppdaterer
  * Du mister de [ekstra grafene](#AapsScreens-section-g-additional-graphs) på hovedskjermen under oppgraderingen: noter ned den nåværende konfigurasjonen hvis du trenger det, slik at du kan lage dem på nytt etter oppgraderingen.
  * [Bluetooth-tilkoblingsproblemene som noen opplever på Android 15](../Getting-Started/Phones.md), er **IKKE** løst i denne versjonen (dette er et Android-problem, ikke et **AAPS**-problem). En rettelse er tilgjengelig i 3.3.1.2.
  * BYODA-knappen på hovedskjermen er ikke lenger tilgjengelig på grunn av begrensninger i Android. Dette er rettet i 3.3.1.2.
* Oppdateringsinstruksjoner: følg veiledningen [Oppdatere til en ny versjon eller gren](../Maintenance/UpdateToNewVersion.md).
  * [Android Studio-versjonen som heter «Ladybug»](#Building-APK-recommended-specification-of-computer-for-building-apk-file) eller nyere kreves for å bygge denne versjonen. Hvis du allerede har en eldre versjon av Android Studio installert, må du kanskje <span style="color:red">sette JVM-versjonen til 21</span>. Se [Feilsøking av Android Studio > Inkompatibel Gradle JVM](#incompatible-gradle-jvm).
  * Tips – hvis du ikke vil miste **AAPS**-historikken din, må du ALLTID OPPDATERE og IKKE AVINSTALLERE/INSTALLERE. For sikkerhets skyld bør du sikkerhetskopiere de nåværende **AAPS**-innstillingene og den gamle APK-filen, slik at du kan gå tilbake til en gammel versjon hvis noe går galt.
* Etter oppgradering:
  * Angi den nye innstillingen [«AAPS-mappe»](#preferences-maintenance-logdirectory) i fanen Vedlikehold.

**Detaljerte endringer**

**CGM-er og pumper**

* [Aktiver «SMB alltid» og «SMB etter karbo»](#Open-APS-features-enable-smb-always) for brukere av FreeStyle Libre 2 og Libre 3 @MilosKozak
* Forbedringer i [Medtrum-driveren](../CompatiblePumps/MedtrumNano.md) @jbr77rr
  * Forbedret kommunikasjon, inkludert en ny innstilling for å omgå problemer på noen smarttelefoner
  * Viser reservoarnivå ved start av aktivering
  * Rettet feil der aktiveringen gikk tilbake til start og brukeren ikke kunne fullføre aktiveringen
  * Tilbakemelding om synkroniseringsstatus og andre presiseringer
* Ny støttet pumpe: [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* Nye støttede CGM-er: [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer og [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Insight-driveren er skrevet om til Kotlin @Philoul
* Fjernet den gamle Combo-driveren som var avhengig av ruffy

**Endringer i brukergrensesnittet**

* [Enkelmodus](#preferences-simple-mode) er aktivert som standard ved ny installasjon @MilosKozak
* Nye valg for [Hurtigknapp](#Preferences-quick-wizard) @radicalb
  * Hurtigknapp bruker nå samme logikk for bolusberegning og visning som kalkulatoren. Du kan nå bruke feltet «karbotid» i Hurtigknapp til forhåndsbolus.
* Ny [meny for grafskala](#aaps-screens-main-graph); forbedringer i brukergrensesnittet for [menyen for ekstra grafer](#AapsScreens-activate-optional-information) @Philoul
* [Bedre layout i ConfigBuilder](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Seksjonene er nå skjult som standard. Bruk pilen for å utvide.
* Variabel sensitivitet vises i AAPSClient
* Forbedringer i brukergrensesnittet for Boluskalkulator @kenzo44
* Rettet tekstvisning i pumpefanene med lyst tema @jbr77rr

**Andre funksjoner**

* [Automatisk eksport av innstillinger](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* Ny [automasjonsutløser](#automations-automation-triggers) @vanelsberg
  * Pod-aktivering (bare patch-pumper)
* Nye [automasjonsutløsere](#automations-automation-triggers) @jbr77rr
  * Kanylealder, Insulinalder, Batterialder, Sensoralder, Reservoarnivå, Batterinivå for pumpe
* Tillater registrering av negative karbohydrater @MilosKozak
* Ny innstilling [«AAPS-mappe»](#preferences-maintenance-settings) for å velge en annen lagringsmappe enn standardmappen.
* Tillater [registrering av insulin når pumpen er pauset](#aaps-screens-buttons-insulin) @jbr77rr
* Oppdatert [opplæringsmål 2](#objectives-objective2) @MilosKozak
  * Sjekker at hovedpassordet er satt og kjent
* Tilfeldige karbohydrater i testmodus @MilosKozak
* Rettet feil i TDD-beregningen @MilosKozak
* SMS-kommandoer: mulig å [**ikke** sende SMS ved profilbytte](#sms-commands-too-many-messages) som kommer fra NS @MilosKozak

**Smartklokker**

* forbedringer for klokken og urskiver @Philoul @MilosKozak @olorinmaia
* Klokkefliser fra automasjonshandlinger @Philoul
* Kombinerte urskiver fra AAPS, AAPSClient og AAPSClient2 for å følge flere pasienter @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

**Tekniske endringer**

* [loggfilene har fått ny plassering](#Accessing-logfiles-accessing-logfiles)
* ny intern modulstruktur @MilosKozak
* lagringslaget er skilt ut fra hovedkoden @MilosKozak
* byggefilene er skrevet om til kts @MilosKozak
* algoritmene er skrevet om til Kotlin for bedre ytelse @MilosKozak
* mange nye enhetstester @MilosKozak og andre
* mer kode er konvertert til Kotlin @MilosKozak
* ny håndtering av innstillinger, xml \-\> kotlin @MilosKozak
* ny CI-konfigurasjon, CI kjører på egne servere @MilosKozak
* bibliotekene er oppdatert til nyeste versjon, toml @MilosKozak
* migrering til Kotlin 2.0, Java 21 @MilosKozak

---

(version3204)=

## [Versjon 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Utgivelsesdato: 27-02-2024

Denne versjonen er den siste som støtter Android 10. Hvis du ikke kan oppgradere til Android 11, [oppdater AAPS til 3.2.0.4](#update-aaps-3204).

**Endringer**

- Støtte for xDrip G7
- Rettelser for Medtrum
- Rettet ikonet for automasjon
- Rettet fullføring av opplæringsmål 1

---

(version3200)=

**Versjon 3.2.0.0 dedikert til @Philoul**

Utgivelsesdato: 23-10-2023

**Viktige merknader**

- NS 15 kreves
- Når websockets brukes i NS v3-pluginen, sendes ikke behandlinger som er lagt inn via NS-grensesnittet (plussknappen) eller via andre apper som bruker v1 API, til AAPS. Dette blir rettet i en framtidig versjon av NS. Bruk alltid samme klient (v1 eller v3) i AAPS og AAPSClient til NS har gått helt over til v3 internt. Det samme gjelder for AAPS og AAPSClient selv.
- Websockets i v3-pluginen virker på samme måte som i v1-pluginen. Uten websockets laster AAPS ned fra NS med jevne mellomrom, noe som bør gi lavere strømforbruk fordi NS ikke er tilkoblet hele tiden. På den andre siden betyr det forsinkelser i datautvekslingen. Les de viktige kommentarene fra utviklerne [her](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) før du tar det i bruk!
- Hvis du bruker xDrip som CGM-kilde, må du velge den på nytt etter oppdateringen på grunn av interne endringer
- Tidepool kan brukes i stedet for NS for å fullføre det første opplæringsmålet
- Hvis du sender til xDrip+, må du sette opp pluginen for xDrip-synkronisering. For å motta BS-verdier fra AAPS i xDrip må «xDrip+ Sync Follower» velges som kilde
- Hvis du vil bytte til ComboV2-driveren, må Ruffy avinstalleres og pumpen kobles sammen med AAPS på nytt
- For å bruke DynISF-pluginen må du starte opplæringsmål 11 (alle de foregående må være fullført før du kan starte 11)

**Endringer**

- Pumpedriver for EOPatch2 / GlucomenDay @jungsomyeonggithub @MilosKozak
- ComboV2-pumpedriver (trenger ikke Ruffy) @dv1
- Medtrum Nano-driver @jbr7rr
- Støtte for koreansk DanaI @MilosKozak
- Støtte for Glunovo CGM @christinadamianou
- Støtte for G7 @MilosKozak @rICTx-T1D @khskekec
- NSClient v3-plugin @MilosKozak
- Støtte for Tidepool @MilosKozak
- Plugin for utjevning @MilosKozak, @justmara, Eksponentiell utjevning @nichi (Tsunami), Gjennomsnittlig utjevning @jbr7rr
- DynamicISF-plugin @Chris Wilson, @tim2000s
- Garmin-urskive & støtte for puls @buessow
- Ny logo @thiagomsoares
- Ny urskive @Philoul
- rettet mange problemer fra versjon 3.1
- mulig å legge til merknader flere steder @Sergey Zorchenko
- Rettelser i brukergrensesnittet @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- nye SMS-kommandoer LOOP LGS/CLOSED @pzadroga
- oversettelser for klokken @Andries-Smit
- xDrip-kommunikasjonen er flyttet til en egen modul @MilosKozak
- interne endringer: oppdaterte bibliotekversjoner, migrering til rx3, ny modulstruktur @MilosKozak
- Rettelser i Diaconn-driveren @miyeongkim
- flere valg for vedlikehold av databasen @MilosKozak
- AAPSClient viser om hovedtelefonen er koblet til strøm @MilosKozak
- Endring i Boluskalkulator. Hvis CGM ikke er tilgjengelig, ignoreres prosenten (dvs. 100 % brukes)
- migrering til kts-byggesystem @MilosKozak
- bedre CI-integrasjon @MilosKozak @buessow
- opprydding i tester @ryanhaining @MilosKozak
- over 110 000 nye kodelinjer, 240 000 endrede linjer, 6884 endrede filer

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)= **Viktige kommentarer om bruk av v3 kontra v1 API for Nightscout med AAPS**

v1 er den gamle protokollen for utveksling av data mellom NS-nettsiden og NS-serveren. Den har mange begrensninger
- v1 sender bare 2 dager med data
- v1 sender alle 2 dagene med data ved hver ny tilkobling
- websockets må brukes = permanent tilkobling, høyere batteriforbruk
- ved hyppige frakoblinger fra NS settes tilkoblingen på pause i 15 minutter for å hindre høyt dataforbruk

v3 er en ny protokoll. Tryggere og mer effektiv
- med token kan du styre tilgangsrettigheter bedre
- protokollen er mer effektiv på begge sider (AAPS & NS)
- Den kan lese opptil 3 måneder med data fra NS
- du kan velge om du vil bruke websockets eller ikke på hver enhet (med websockets får du raskere oppdateringer, uten får du lavere strømforbruk, men tregere oppdateringer, dvs. minutter)
- NSClient settes ikke på pause ved frakoblinger

BEGRENSNINGER
- NS 15 må brukes med AAPS 3.2
- v3 ser ikke oppdateringer gjort via v1-protokollen (dette blir trolig løst i en framtidig versjon av NS)
- motsatt vei ser v1 endringer gjort av v3, på grunn av den gamle, lite effektive metoden for å spore endringer
- husk at NS fortsatt bruker v1 internt, så det er ikke mulig å legge inn data via NS-nettgrensesnittet hvis du bruker v3. Du må bruke AAPSClient eller SMS hvis du vil legge inn data eksternt

ANBEFALT INNSTILLING
- på grunn av alt dette bør du velge bare én metode og bruke den på alle enheter (husk at alle andre opplastere bruker v1 når dette skrives). Hvis du velger v3, velg v3 i AAPS og i alle AAPSClient-apper
- v3 foretrekkes fordi den er mer effektiv
- om du bruker websockets med v3 eller ikke, er opp til deg
- det anbefales STERKT å la AAPS samle alle data og så laste dem opp til NS som eneste opplaster. Alle andre enheter/apper bør bare lese fra NS. Slik unngår du konflikter og synkroniseringsfeil. Dette gjelder også når BS-data sendes til NS via Dexcom Share-kobling og lignende

---

(version3100)=

**Versjon 3.1.0**

Utgivelsesdato: 19-07-2022

[Versjonsnotater](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

---

**Versjon 3.0.0**

Utgivelsesdato: 31-01-2022

[Versjonsnotater](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

---

(version2821)=

## Versjon 2.8.2.1

Utgivelsesdato: 05-10-2021

Denne versjonen er den siste som støtter Android 8. [Versjonsnotater](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2.1)

---

**Versjon 2.8.2**

Utgivelsesdato: 23-01-2021

[Versjonsnotater](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

(version-2811)= (important-hints-2-8-1-1)=

**Versjon 2.8.1.1**

Utgivelsesdato: 12-01-2021

[Versjonsnotater](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

---

(Releasenotes-version-2-8-0)=

**Versjon 2.8.0**

Utgivelsesdato: 01-01-2021

[Versjonsnotater](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

---

(Releasenotes-version-2-7-0)=

**Versjon 2.7.0**

Utgivelsesdato: 24-09-2020

[Versjonsnotater](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

---

(Releasenotes-version-2-6-1-4)=

**Versjon 2.6.1.4**

Utgivelsesdato: 04-05-2020

[Versjonsnotater](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

---

**Versjon 2.6.1.3**

Utgivelsesdato: 03-05-2020

[Versjonsnotater](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

---

**Versjon 2.6.1.2**

Utgivelsesdato: 19-04-2020

[Versjonsnotater](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

---

**Versjon 2.6.1.1**

Utgivelsesdato: 06-04-2020

[Versjonsnotater](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

---

**Versjon 2.6.1**

Utgivelsesdato: 21-03-2020

[Versjonsnotater](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

---

(Releasenotes-version-2-6-0)=

**Versjon 2.6.0**

Utgivelsesdato: 29-02-2020

[Versjonsnotater](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

---

**Versjon 2.5.1**

Utgivelsesdato: 31-10-2019

[Versjonsnotater](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

---

(Releasenotes-version-2-5-0)=

**Versjon 2.5.0**

Utgivelsesdato: 26-10-2019

[Versjonsnotater](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

---

**Versjon 2.3**

Utgivelsesdato: 25-04-2019

[Versjonsnotater](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

---

**Versjon 2.2.2**

Utgivelsesdato: 07-04-2019

[Versjonsnotater](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

---

**Versjon 2.2**

Utgivelsesdato: 29-03-2019

[Versjonsnotater](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

---

**Versjon 2.1**

Utgivelsesdato: 03-03-2019

[Versjonsnotater](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

---

**Versjon 2.0**

Utgivelsesdato: 03-11-2018

[Versjonsnotater](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

---

**Versjon 1.0**

```{admonition} First version of **AAPS**
:class: note

Den første testversjonen kom i 2015, og den første utgivelsen var i 2016.

Den nøyaktige rekkefølgen av disse utgivelsene er ikke tilgjengelig for øyeblikket, men siden spørsmålet har blitt stilt flere ganger, dokumenterer vi det her.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
