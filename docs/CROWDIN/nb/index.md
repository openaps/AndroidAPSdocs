# Velkommen til AAPS-dokumentasjonen

![bilde](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 31. oktober 2026: Versjon 4.0.0 er ute. Se [versjonsnotatene](#latestrelease) for å finne ut hva som er nytt, og følg instruksjonene i [oppdateringsveiledningen](./Maintenance/UpdateToNewVersion.md) for å oppdatere.

```

Android APS (**AAPS**) er en app med åpen kildekode for personer som lever med insulinavhengig diabetes. Det er et system for kunstig bukspyttkjertel (Artificial Pancreas System, APS) som kjører på Android-smarttelefoner. **AAPS** bruker en algoritme fra OpenAPS og prøver å gjøre det en ekte bukspyttkjertel gjør: holde blodsukkeret innenfor sunne grenser ved hjelp av automatisk insulindosering. For å bruke **AAPS** trenger du **tre** kompatible enheter: **(1)** en Android-telefon, **(2)** en kontinuerlig glukosemåler (CGM) og **(3)** en FDA/CE-godkjent insulinpumpe. Du kan også legge til **(4)** skytjenester for å fjernstyre **AAPS**, dele dataene dine og lagre dem på en rapporteringsserver, og **(5)** en smartklokke.

Denne dokumentasjonen forklarer hvordan du setter opp og bruker **AAPS**. Du kan navigere i **AAPS**-dokumentasjonen enten via menyen til venstre (og den praktiske **søkefunksjonen**), eller via [innholdsfortegnelsen](#index-aaps-documentation-index) nederst på denne siden.

## Oversikt over AAPS-dokumentasjonen («the docs»)

I del **1) Kom i gang** forklarer [introduksjonen](Getting-Started/Introduction.md) det generelle konseptet bak et system for kunstig bukspyttkjertel (APS), og hva et slikt system skal gjøre. Den beskriver bakgrunnen for looping generelt, hvorfor **AAPS** ble utviklet, sammenligner **AAPS** med andre systemer og tar opp sikkerhet. Den gir forslag til hvordan du kan snakke med behandlingsteamet ditt om **AAPS**, forklarer hvorfor du må bygge **AAPS**-appen selv i stedet for bare å laste den ned, og gir en oversikt over hvordan et typisk **AAPS**-system er koblet sammen. Den tar også opp tilgjengelighet, og hvem som trolig vil ha nytte av **AAPS**.

[Forberedelser før du starter med AAPS](./Getting-Started/PreparingForAaps.md) gir mer informasjon om sikkerhet, og om hvilke telefoner, CGM-er (kontinuerlige glukosemålere) og insulinpumper som er kompatible med **AAPS**. Den gir en oversikt over prosessen du skal gjennom, og en omtrentlig tidsplan for når du får full funksjonalitet i **AAPS**. Denne delen gjør deg teknisk forberedt, slik at du kan sette sammen **AAPS**-oppsettet ditt så raskt og effektivt som mulig. Underdelen [Kompatible CGM-er](./Getting-Started/CompatiblesCgms.md) forklarer hvordan du optimaliserer CGM-oppsettet ditt, og hvilke utjevningsalternativer som er best.

Nå som du har god forståelse av prosessen, kan du begynne å sette sammen **AAPS**-loopen din.

Del **2) Bygg appen** forklarer hvorfor du må bygge **AAPS**-appen selv i stedet for bare å laste den ned, og tar deg steg for steg gjennom [byggingen](./SettingUpAaps/BuildingAaps.md) (med en nettleser, Android Studio eller kommandolinjen) og deretter overføring og installering på telefonen din. Den starter med et valgfritt steg: å sette opp en [egen Google-konto](./UsefulLinks/DedicatedGoogleAccountForAaps.md) for byggene og sikkerhetskopiene dine. Den forklarer også [Android-utviklerverifisering](#android-developer-verification), en endring Google innfører fra september 2026, som påvirker hvordan apper du bygger selv blir installert.

Del **3) Sette opp rapporteringsserveren** handler om å velge og [sette opp rapporteringsserveren din](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout eller Tidepool), slik at du kan gå gjennom og dele dataene dine.

Del **4) [Konfigurer AAPS](./SettingUpAaps/SetupWizard.md)** handler om å sette opp **AAPS**-appen med oppsettveiviseren, koble den til CGM-appen din og enten en ekte eller en virtuell insulinpumpe, og koble **AAPS** til rapporteringsserveren din. Deretter blir du kjent med alt **AAPS** kan gjøre, gjennom en trygg og nøye tilpasset prosess, steg for steg. Dette sikrer at du (eller barnet ditt) kjenner godt til og er trygg på alle nivåene og menyene før du går videre til neste fase, som vanligvis kalles neste «opplæringsmål». Slik fortsetter du til du har nok erfaring til å begynne å bruke de mer avanserte alternativene i appen. Opplæringsmålene er laget slik at de gradvis låser opp flere muligheter i **AAPS**, og tar deg fra åpen loop til lukket loop.

Del **5) [Daglig liv med AAPS](./DailyLifeWithAaps/AapsScreens.md)** dekker viktige funksjoner i **AAPS**, for å hjelpe deg med å bruke (og tilpasse) **AAPS**. Dette omfatter å forstå skjermbildene, aktive karbohydrater (COB), sensitivitet, Dynamisk ISF, profilbytte, midlertidige mål, forlengede karbohydrater (eKarbo), automasjoner og [Gjennomgang av dataene dine](./Maintenance/Reviewing.md) i historikken og statistikken. Den tar også opp vanlige temaer som hvordan du håndterer ulike typer måltider, kanyle- og sensorbytte, oppdateringer av telefonen, overgang til sommertid, [reising med AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) og trening. Vanlige spørsmål og svar finner du i feilsøkingsdelen.

Del **6) [Fjernfunksjoner i AAPS](./RemoteFeatures/RemoteControl.md)** viser en av de virkelige styrkene til **AAPS**. Det finnes mange muligheter for å sende kommandoer til, eller bare følge dataene fra, **AAPS** fra en annen enhet. Dette er like nyttig for omsorgspersoner som vil bruke **AAPS** for mindreårige, som for voksne med diabetes som enten vil følge med på blodsukkeret (og andre verdier) på en enklere måte enn bare på telefonen (på en klokke, i bilen _osv._), eller som ønsker at nære personer også skal kunne følge med på dataene. Denne delen gir også veiledning i bruk av Android Auto, slik at du kan se blodsukkeret i bilen.

Del **7) [Wear OS-smartklokker](./WearOS/BuildingAapsWearOS.md)** gir informasjon og fremgangsmåter for å bruke en **Wear OS**-smartklokke med de egne **AAPS**-urskivene eller egendefinerte urskiver, enten til å fjernstyre telefonen din eller bare som en skjerm for visning.


Del **8) [Vedlikehold av AAPS](./Maintenance/ExportImportSettings.md)** forklarer hvordan du eksporterer og sikkerhetskopierer innstillingene dine (svært viktig hvis du mister eller ødelegger telefonen), gir de nyeste versjonsnotatene, beskriver hvordan du oppdaterer **AAPS** og forklarer hva som skjer når en versjon når sluttdatoen sin. Du kan regne med én ny versjon og 2–3 nødvendige oppdateringer per år. Du må gjøre disse oppdateringene, som med all annen programvare, fordi små feil blir rettet og **AAPS** blir forbedret. Det finnes en egen feilsøkingsdel om oppdatering, med de vanligste spørsmålene.

Del **9) [Hjelp og feilsøking](GettingHelp/WhereCanIGetHelp.md)** viser deg de beste stedene å finne generell hjelp med **AAPS**. Det er stedet du går til når noe ikke virker: [Feilsøking](GettingHelp/GeneralTroubleshooting.md)-siden samler løsningene på de vanligste problemene, ordnet etter tema, og [FAQ](UsefulLinks/FAQ.md) svarer på vanlige spørsmål. Dette er svært viktig, slik at du så raskt som mulig kan komme i kontakt med andre, få svar på spørsmål og løse de vanlige problemene. Mange bruker allerede **AAPS** med godt resultat, men alle får på et tidspunkt et spørsmål de ikke klarer å løse på egen hånd. Fordi det er så mange brukere, får du vanligvis svar på spørsmål veldig raskt, ofte i løpet av bare noen få timer. Ikke vær redd for å be om hjelp – det finnes ingen dumme spørsmål! Vi oppfordrer brukere på alle erfaringsnivåer til å stille så mange spørsmål de trenger for å komme trygt i gang. Denne delen inneholder generell feilsøking for **AAPS** og **AAPSClient** (en hjelpeapp for å følge med), og forklarer hvordan du sender **AAPS**-dataene dine (loggfiler) til utviklerne for undersøkelse, hvis du mener at et teknisk problem med **AAPS** bør ses på.

Del **10)** dekker **[Avanserte AAPS-alternativer](./AdvancedOptions/FullClosedLoop.md)**, for eksempel hvordan du går fra å bruke **AAPS** som hybrid lukket loop (med bolus til måltider _osv._) til full lukket loop (uten bolus), hvordan du [justerer profilen din](./GettingHelp/ProfileTuning.md) og bruker Autotune, og beskriver utviklermodus (Dev/Engineering mode). De fleste brukere klarer seg helt fint med hovedversjonen («master») av **AAPS** uten å se på disse alternativene. Denne delen er for brukere som allerede har god kontroll og vil forbedre oppsettet sitt enda mer.

I del **11) [Slik kan du støtte AAPS](SupportingAaps/HowToEditTheDocs.md)** gir vi informasjon om hvordan du kan støtte dette prosjektet. Du kan bidra med penger, utstyr eller kompetanse. Du kan foreslå eller gjøre endringer i dokumentasjonen selv, hjelpe til med [oversettelse av dokumentasjonen](SupportingAaps/Translations) og dele dataene dine gjennom Open Humans-prosjektet.

Del **12) Ressurser** inneholder arkivert eller ekstra dokumentasjon, blant annet en underdel for [behandlere](UsefulLinks/ClinicianGuideToAaps.md) som har vist interesse for teknologi for kunstig bukspyttkjertel med åpen kildekode, som **AAPS**, eller for pasienter som vil dele slik informasjon med behandlerne sine. Dette temaet tas også opp i introduksjonen. Denne delen inneholder også flere referanser og ressurser om diabetes og looping. Den inneholder [Ordliste](./UsefulLinks/Glossary.md), en liste over forkortelsene (og kortnavnene) som brukes i **AAPS**. Her finner du for eksempel ut hva begrepene ISF eller TT står for.


 ### Har du lyst til å komme i gang med **AAPS**? Les mer om **AAPS** på siden [Introduksjon til APS og AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
Sikkerheten til **AAPS** avhenger av sikkerhetsfunksjonene i utstyret ditt (telefon, pumpe, CGM). Bruk bare en fullt fungerende, FDA/CE-godkjent insulinpumpe og CGM. Ikke bruk ødelagte, modifiserte eller hjemmelagde insulinpumper eller CGM-mottakere. Bruk bare originalt forbruksmateriell (applikatorer, kanyler og insulinreservoarer) som produsenten har godkjent for bruk med pumpen og CGM-en din. Bruk av utestet eller modifisert utstyr kan gi unøyaktighet og feil i insulindoseringen, noe som utgjør en betydelig risiko for brukeren. 

Ikke bruk **AAPS** hvis du tar SGLT-2-hemmere (glifloziner), fordi de senker blodsukkeret. Du øker risikoen for diabetisk ketoacidose (DKA) på grunn av redusert insulintilførsel, og for hypoglykemi på grunn av lavere blodsukker. 
```

```{admonition} Disclaimer
:class: note

- All informasjon og kode som beskrives her, er bare ment til informasjon og opplæring. Bruk [Nightscout](https://nightscout.github.io/) og **AAPS** på egen risiko, og ikke bruk informasjonen eller koden til å ta medisinske avgjørelser. Nightscout gjør for tiden ingen forsøk på å oppfylle personvernkravene i HIPAA. 
- Bruk av kode fra github.com skjer uten garanti eller formell støtte av noe slag. Se LICENSE-filen i dette repositoryet for detaljer.
- Alle produkt- og firmanavn, varemerker, tjenestemerker, registrerte varemerker og registrerte tjenestemerker tilhører sine respektive eiere. De brukes bare til informasjon, og bruken betyr ikke at det finnes noen tilknytning til eller godkjenning fra dem.

**AAPS** har ingen tilknytning til, og er ikke godkjent av: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) eller [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Innholdsfortegnelse for AAPS-dokumentasjonen

```{toctree}
:caption: Bruke denne dokumentasjonen

Bytte språk og versjon <./NavigateDoc/ChangeLanguageVersion.md>
Søk i dokumentasjonen <./NavigateDoc/SearchDoc.md>
Oppdateringer og endringer i dokumentasjonen <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Kom i gang

Introduksjon til APS og AAPS <./Getting-Started/Introduction.md>
Forberedelser før du starter med AAPS <./Getting-Started/PreparingForAaps.md>
Oversikt over komponentene <./Getting-Started/ComponentOverview.md>
- Kompatible pumper <./Getting-Started/CompatiblePumps.md>
- Kompatible CGM-er <./Getting-Started/CompatiblesCgms.md>
- Telefoner  <./Getting-Started/Phones.md>
- Smartklokker og AAPS  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Bygg appen

En egen Google-konto for AAPS (valgfritt) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Bygge AAPS <./SettingUpAaps/BuildingAaps.md>
- Nettleserbygg <./SettingUpAaps/BrowserBuild.md>
- Android Studio-bygg <./SettingUpAaps/ComputerBuild.md>
- Byggeinstruksjoner for kommandolinjen <./SettingUpAaps/CLIBuild.md>
Overføre og installere AAPS på smarttelefonen din <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Sette opp rapporteringsserveren

Sette opp rapporteringsserveren <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Konfigurer AAPS

Oppsettveiviseren i AAPS <./SettingUpAaps/SetupWizard.md>
Din AAPS-profil <./SettingUpAaps/YourAapsProfile.md>
Endre AAPS-konfigurasjonen din <./SettingUpAaps/ChangeAapsConfiguration.md>
- Konfigurasjon (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Innstillinger <./SettingUpAaps/Preferences.md>
Opplæringsmålene <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Daglig liv med AAPS

AAPS-skjermbilder <./DailyLifeWithAaps/AapsScreens.md>
Viktige funksjoner i AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB-beregning <./DailyLifeWithAaps/CobCalculation.md>
Sensitivitetsdeteksjon <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamisk ISF (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
Profilbytte og profilprosent <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Midlertidige mål <./DailyLifeWithAaps/TempTargets.md>
Forlengede karbohydrater / «eKarbo» <./DailyLifeWithAaps/ExtendedCarbs.md>
Hurtigknapper (bolus med ett trykk) <./DailyLifeWithAaps/QuickWizards.md>
Scener (forhåndsinnstilte situasjoner) <./DailyLifeWithAaps/Scenes.md>
Automasjoner <./DailyLifeWithAaps/Automations.md>
Hurtigstart (QuickLaunch, verktøylinjen med hurtigstartsknapper i oversikten) <./DailyLifeWithAaps/QuickLaunch.md>
Widgeter på startskjermen <./DailyLifeWithAaps/Widgets.md>
Mat (matdatabasen din) <./DailyLifeWithAaps/Food.md>
Globalt søk <./DailyLifeWithAaps/GlobalSearch.md>
Gjennomgang av dataene dine <./Maintenance/Reviewing.md>
AAPS for barn <./DailyLifeWithAaps/AapsForChildren.md>
Pumper og kanyler <./DailyLifeWithAaps/PumpsAndCannulas.md>
Tidssonebytte og sommertid <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Fjernfunksjoner i AAPS

Fjernovervåking <./RemoteFeatures/RemoteMonitoring.md>
Følge AAPS (uten å styre AAPS-systemet) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Fjernstyring av AAPS <./RemoteFeatures/RemoteControl.md>
AAPSClient-appen <./RemoteFeatures/AapsClient.md>
Hovedenhet ↔ klientstyring (signert fjernstyring) <./RemoteFeatures/ClientMasterControl.md>
SMS-kommandoer <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Wear OS-smartklokker

Bygge AAPS Wear-appen <./WearOS/BuildingAapsWearOS.md>
Wear OS-smartklokke <./WearOS/WearOsSmartwatch.md>
Styring av AAPS fra Wear OS-smartklokken din <./RemoteFeatures/RemoteControlWearOS.md>
Referansedokument for egendefinerte urskiver <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Utvekslingsside for egendefinerte urskiver <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Vedlikehold av AAPS

Lage og gjenopprette sikkerhetskopier <./Maintenance/ExportImportSettings.md>
Versjonsnotater <./Maintenance/ReleaseNotes.md>
Hva er endret i AAPS v4 <./Maintenance/V4Changes.md>
Oppdatere til en ny versjon eller gren <./Maintenance/UpdateToNewVersion.md>
- Oppdatere med en nettleser (fork) <./Maintenance/UpdateBrowserBuild.md>
- Oppdatere med Android Studio <./Maintenance/UpdateComputerBuild.md>
Sluttdato for AAPS-versjoner <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Hjelp og feilsøking

Hvor kan jeg få hjelp <./GettingHelp/WhereCanIGetHelp.md>
Feilsøking (start her) <./GettingHelp/GeneralTroubleshooting.md>
- Feilsøking av Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Feilsøking av NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Feilsøking av Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Nettleserbygg: feilsøking <./GettingHelp/BrowserBuildTroubleshooting.md>
- Installere AAPS på nytt med en ny keystore-fil <./GettingHelp/ReinstallAaps.md>
- Tilgang til loggfiler <./GettingHelp/AccessingLogFiles.md>
FAQ <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Avanserte AAPS-alternativer

Full lukket loop <./AdvancedOptions/FullClosedLoop.md>
Justering av AAPS-profilen <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Insulinkonsentrasjon <./AdvancedOptions/InsulinConcentration.md>
Utviklingsgrenen (dev) <./AdvancedOptions/DevBranch.md>
Nettleserbygg: velge ut en enkelt commit (cherry-pick) <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Slik kan du støtte AAPS

Slik kan du hjelpe til med AAPS <./SupportingAaps/HowCanIHelp.md>
Slik redigerer du dokumentasjonen <./SupportingAaps/HowToEditTheDocs.md>
Slik oversetter du tekster i AAPS-appen og dokumentasjonen <./SupportingAaps/Translations.md>
Status for oversettelsen av appen og dokumentasjonen <./SupportingAaps/StateOfTranslations.md>
Opplasting til Open Humans <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Ressurser

Ordliste <./UsefulLinks/Glossary.md>
Nyttige ressurser å lese før du starter <./UsefulLinks/BackgroundReading.md>
For behandlere – en generell introduksjon og veiledning til AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
