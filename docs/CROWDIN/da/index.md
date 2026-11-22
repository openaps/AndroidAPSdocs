# Velkommen til AAPS-dokumentationen

![billede](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

31. oktober 2026: Version 4.0.0 er udkommet. Se [udgivelsesnoterne](#latestrelease) for at se, hvad der er nyt, og følg vejledningen i [opdateringsvejledningen](./Maintenance/UpdateToNewVersion.md) for at opdatere.

```

Android APS (**AAPS**) er en open source-app til personer, der lever med insulinkrævende diabetes. Det er et kunstigt bugspytkirtelsystem (APS), som kører på Android-smartphones. **AAPS** bruger en OpenAPS-algoritme og forsøger at gøre det, som en rigtig bugspytkirtel gør: holde blodsukkeret inden for sunde grænser ved hjælp af automatisk insulindosering. For at bruge **AAPS** skal du have **tre** kompatible enheder: **(1)** en Android-telefon, **(2)** en kontinuerlig glukosemåler (CGM) og **(3)** en FDA/CE-godkendt insulinpumpe. Du kan også tilføje **(4)** skytjenester til at fjernstyre **AAPS**, dele dine data og gemme dem på en rapporteringsserver, og **(5)** et smartur.

Denne dokumentation forklarer, hvordan du sætter **AAPS** op og bruger det. Du kan finde rundt i **AAPS**-dokumentationen enten via menuen til venstre (og den praktiske søgefunktion **Search docs**) eller via [indekset](#index-aaps-documentation-index) nederst på denne side.

## Oversigt over AAPS-dokumentationen (»dokumentationen«)

I afsnit **1) Kom godt i gang** forklarer [Introduktion til APS og AAPS](Getting-Started/Introduction.md) den grundlæggende idé bag, hvad et kunstigt bugspytkirtelsystem (APS) skal gøre. Det beskriver baggrunden for loop generelt, hvorfor **AAPS** blev udviklet, sammenligner **AAPS** med andre systemer og handler om sikkerhed. Det giver forslag til, hvordan du kan tale med dit behandlerteam om **AAPS**, forklarer, hvorfor du selv skal bygge **AAPS**-appen i stedet for bare at downloade den, og giver en oversigt over, hvordan et **AAPS**-system typisk er forbundet. Det handler også om tilgængelighed, og om hvem der sandsynligvis har gavn af **AAPS**.

[Forberedelse til at starte med AAPS](./Getting-Started/PreparingForAaps.md) giver flere detaljer om sikkerhed og om de telefoner, CGM'er (kontinuerlige glukosemålere) og insulinpumper, der er kompatible med **AAPS**. Det giver en oversigt over den proces, du skal igennem, og en omtrentlig tidsplan for, hvornår du kan bruge alle funktioner i **AAPS**. Dette afsnit gør dig teknisk klar til at sætte dit **AAPS**-system sammen så hurtigt og effektivt som muligt. Underafsnittet [Kompatible CGM'er](./Getting-Started/CompatiblesCgms.md) forklarer, hvordan du optimerer din CGM-opsætning, og hvilke udjævningsmuligheder der er bedst.

Nu hvor du har en god forståelse af processen, kan du begynde at sætte dit **AAPS**-loop sammen.

Afsnit **2) Byg appen** forklarer, hvorfor du selv skal bygge **AAPS**-appen i stedet for bare at downloade den, og tager dig trin for trin gennem [bygningen af den](./SettingUpAaps/BuildingAaps.md) (med en browser, Android Studio eller kommandolinjen) og derefter overførsel og installation på din telefon. Det begynder med et valgfrit trin: at oprette en [separat Google-konto](./UsefulLinks/DedicatedGoogleAccountForAaps.md) til dine builds og sikkerhedskopier. Det forklarer også [Androids udviklerbekræftelse](#android-developer-verification), en ændring som Google indfører fra september 2026, og som påvirker, hvordan selvbyggede apps installeres.

Afsnit **3) Opsætning af rapporteringsserveren** handler om at vælge og [opsætte din rapporteringsserver](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout eller Tidepool), så du kan gennemgå og dele dine data.

Afsnit **4) [Konfigurer AAPS](./SettingUpAaps/SetupWizard.md)** handler om at sætte **AAPS**-appen op med opsætningsguiden, forbinde den med din CGM-app og en rigtig eller virtuel insulinpumpe, og forbinde **AAPS** med din rapporteringsserver. Derefter bliver du introduceret til alt, hvad **AAPS** kan, gennem en sikker og omhyggeligt tilrettelagt proces trin for trin. Det sikrer, at du (eller dit barn) kender og er tryg ved alle de forskellige niveauer og menuindstillinger, før du går videre til næste fase, som normalt kaldes det næste »læringsmål«. Du fortsætter på denne måde, indtil du har erfaring nok til at begynde at bruge de mere avancerede muligheder i appen. Disse læringsmål er lavet specielt, så de trin for trin låser op for flere muligheder i **AAPS** og skifter fra åbent loop til lukket loop.

Afsnit **5) [Hverdagen med AAPS](./DailyLifeWithAaps/AapsScreens.md)** handler om vigtige **AAPS**-funktioner, så du kan bruge (og tilpasse) **AAPS**. Det omfatter forståelse af skærmene, kulhydrater om bord, følsomhed, Dynamisk ISF, profilskift, midlertidige mål, forlængede kulhydrater (eller e-kulhydrater), automatiseringer og [gennemgang af dine data](./Maintenance/Reviewing.md) i historikbrowseren og statistikken. Det handler også om emner, der ofte kommer op, f.eks. hvordan du håndterer forskellige typer måltider, skift af kanyle og sensor, opdateringer af smartphonen, skift til og fra sommertid, [rejser med AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) og sport. Almindelige spørgsmål og svar findes i afsnittet om fejlfinding.

Afsnit **6) [AAPS-fjernfunktioner](./RemoteFeatures/RemoteControl.md)** viser en af de store styrker ved **AAPS**. Der er mange muligheder for at sende kommandoer på afstand til eller bare følge dataene fra **AAPS**. Det er lige så nyttigt for omsorgspersoner, der vil bruge **AAPS** til børn, og for voksne med diabetes, som enten vil følge deres blodsukker (og andre data) mere bekvemt end kun på telefonen (på et ur, i bilen _osv._), eller som ønsker, at deres nærmeste også kan følge dataene. Dette afsnit vejleder også i brugen af Android Auto, så du kan se dine glukoseværdier i bilen.

Afsnit **7) [Wear OS-smarture](./WearOS/BuildingAapsWearOS.md)** giver information og fremgangsmåder til at bruge et Android **Wear OS**-smartur med de særlige **AAPS**-urskiver eller brugerdefinerede urskiver, enten som fjernbetjening til din telefon eller bare som visning.


Afsnit **8) [Vedligeholdelse af AAPS](./Maintenance/ExportImportSettings.md)** handler om, hvordan du eksporterer og sikkerhedskopierer dine indstillinger (det er meget vigtigt, hvis du mister eller ødelægger din telefon), giver de seneste versionsnoter, beskriver, hvordan du opdaterer **AAPS**, og forklarer, hvad der sker, når en version ikke længere får support. Du kan regne med én ny version og 2-3 nødvendige opdateringer om året. Du skal lave disse opdateringer, som med al anden software, fordi små fejl bliver rettet, og **AAPS** bliver forbedret. Der er et særligt afsnit om fejlfinding ved »opdatering« med de almindelige spørgsmål.

Afsnit **9) [Hjælp og fejlfinding](GettingHelp/WhereCanIGetHelp.md)** viser dig de bedste steder at få generel hjælp med **AAPS**. Det er det ene sted at gå hen, når noget ikke virker: [Fejlfinding](GettingHelp/GeneralTroubleshooting.md) samler løsningerne på de mest almindelige problemer efter emne, og [Ofte stillede spørgsmål](UsefulLinks/FAQ.md) besvarer de hyppige spørgsmål. Det er meget vigtigt, så du hurtigt kan komme i kontakt med andre, få svar på spørgsmål og løse de typiske problemer. Mange bruger allerede **AAPS** med succes, men alle har på et tidspunkt et spørgsmål, som de ikke kunne løse selv. Da der er mange brugere, kommer svarene på spørgsmål normalt meget hurtigt, typisk inden for få timer. Vær ikke bange for at bede om hjælp – der findes ingen dumme spørgsmål! Vi opfordrer alle brugere, uanset erfaring, til at stille så mange spørgsmål, som de har brug for, så de kan komme sikkert i gang. Dette afsnit indeholder generel fejlfinding for **AAPS** og **AAPSClient** (en app til at følge med) og forklarer, hvordan du sender dine **AAPS**-data (logfiler) til udviklerne, hvis du mener, at et teknisk problem med **AAPS** skal undersøges.

Afsnit **10)** handler om **[Avancerede AAPS-indstillinger](./AdvancedOptions/FullClosedLoop.md)**, f.eks. hvordan du går fra at bruge **AAPS** som hybrid lukket loop (bolus til måltider _osv._) til fuldt lukket loop (ingen bolus), hvordan du [justerer din profil](./GettingHelp/ProfileTuning.md) og bruger Autotune, og beskriver udviklings- og teknik-tilstande. De fleste brugere klarer sig fint med den almindelige »Master«-version af **AAPS** uden at se på disse muligheder. Dette afsnit er til brugere, som allerede har god kontrol og vil forbedre deres opsætning yderligere.

I afsnit **11) [Sådan støtter du AAPS](SupportingAaps/HowCanIHelp.md)** giver vi information, så du kan støtte dette projekt. Du kan donere penge, udstyr eller ekspertise. Du kan selv foreslå eller lave ændringer i dokumentationen, hjælpe med [oversættelse af dokumentationen](SupportingAaps/Translations.md) og dele dine data via Open Humans-projektet.

Afsnit **12) Ressourcer** indeholder arkiveret eller ekstra dokumentation, bl.a. et underafsnit til [sundhedspersonale](UsefulLinks/ClinicianGuideToAaps.md), som er interesseret i open source-teknologi til kunstig bugspytkirtel som **AAPS**, eller til patienter, der vil dele sådan information med deres behandlere. Emnet bliver også behandlet i introduktionen. Dette afsnit indeholder også flere referencer og ressourcer om diabetes og loop. Det indeholder [Ordliste](./UsefulLinks/Glossary.md), en liste over de forkortelser (eller korte navne), der bruges overalt i **AAPS**. Her finder du f.eks. ud af, hvad forkortelserne ISF eller TT står for.


 ### Vil du gerne i gang med **AAPS**? Læs mere om **AAPS** i [Introduktion til APS og AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
Sikkerheden i **AAPS** afhænger af sikkerhedsfunktionerne i dit udstyr (telefon, pumpe, CGM). Brug kun en fuldt fungerende FDA/CE-godkendt insulinpumpe og CGM. Brug ikke ødelagte, ændrede eller selvbyggede insulinpumper eller CGM-modtagere. Brug kun originale forbrugsvarer (indstiksapparater, kanyler og insulinreservoirer), som producenten har godkendt til brug med din pumpe og CGM. Brug af utestede eller ændrede forbrugsvarer kan give unøjagtighed og fejl i insulindoseringen og dermed en stor risiko for brugeren. 

Brug ikke **AAPS**, hvis du tager SGLT-2-hæmmere (gliflozin), da de sænker blodsukkeret. Du øger risikoen for diabetisk ketoacidose (DKA) på grund af mindre insulintilførsel og for hypoglykæmi på grund af lavere blodsukker. 
```

```{admonition} Disclaimer
:class: note

- Al information og kode, der beskrives her, er kun til information og undervisning. Brug [Nightscout](https://nightscout.github.io/) og **AAPS** på egen risiko, og brug ikke informationen eller koden til at træffe medicinske beslutninger. Nightscout forsøger i øjeblikket ikke at overholde HIPAA-reglerne om privatliv. 
- Brug af kode fra github.com sker uden garanti eller formel support af nogen art. Læs dette repositorys LICENSE for detaljer.
- Alle produkt- og firmanavne, varemærker, servicemærker, registrerede varemærker og registrerede servicemærker tilhører deres respektive ejere. De bruges kun til information og betyder ikke, at der er en forbindelse til dem, eller at de anbefaler produktet.

**AAPS** har ingen tilknytning til og er ikke godkendt af: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) eller [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## AAPS-dokumentationens indeks

```{toctree}
:caption: Brug af denne dokumentation
:titlesonly:

Skift sprog og version <./NavigateDoc/ChangeLanguageVersion.md>
Søg i dokumentationen <./NavigateDoc/SearchDoc.md>
Opdateringer og ændringer i dokumentationen <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Kom godt i gang

Introduktion til APS og AAPS <./Getting-Started/Introduction.md>
Forberedelse til at starte med AAPS <./Getting-Started/PreparingForAaps.md>
Oversigt over komponenter <./Getting-Started/ComponentOverview.md>
- Kompatible pumper <./Getting-Started/CompatiblePumps.md>
- Kompatible CGM'er <./Getting-Started/CompatiblesCgms.md>
- Telefoner  <./Getting-Started/Phones.md>
- Smarture og AAPS  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Byg appen

En separat Google-konto til AAPS (valgfri) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Byg AAPS <./SettingUpAaps/BuildingAaps.md>
- Build i browseren <./SettingUpAaps/BrowserBuild.md>
- Build med Android Studio <./SettingUpAaps/ComputerBuild.md>
- Byggevejledning til kommandolinjen <./SettingUpAaps/CLIBuild.md>
Overførsel og installation af AAPS på din telefon <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Opsætning af rapporteringsserveren

Opsætning af rapporteringsserveren <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Konfigurer AAPS

AAPS-opsætningsguide <./SettingUpAaps/SetupWizard.md>
Din AAPS-profil <./SettingUpAaps/YourAapsProfile.md>
Ændringer i din AAPS-konfiguration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Konfiguration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Indstillinger <./SettingUpAaps/Preferences.md>
Gennemførelse af læringsmålene <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Hverdagen med AAPS

AAPS-skærme <./DailyLifeWithAaps/AapsScreens.md>
Vigtige AAPS-funktioner <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB-beregning <./DailyLifeWithAaps/CobCalculation.md>
Detektering af følsomhed <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamisk ISF (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
Profilskift og profilprocent <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Midlertidige mål <./DailyLifeWithAaps/TempTargets.md>
Forlængede kulhydrater / »e-kulhydrater« <./DailyLifeWithAaps/ExtendedCarbs.md>
Hurtigboluser (bolus med ét tryk) <./DailyLifeWithAaps/QuickWizards.md>
Scener (forudindstillinger til situationer) <./DailyLifeWithAaps/Scenes.md>
Automatisering <./DailyLifeWithAaps/Automations.md>
Hurtigstart (værktøjslinje med hurtige handlinger i oversigten) <./DailyLifeWithAaps/QuickLaunch.md>
Widgets på startskærmen <./DailyLifeWithAaps/Widgets.md>
Mad (din maddatabase) <./DailyLifeWithAaps/Food.md>
Global søgning <./DailyLifeWithAaps/GlobalSearch.md>
Gennemgang af dine data <./Maintenance/Reviewing.md>
AAPS til børn <./DailyLifeWithAaps/AapsForChildren.md>
Pumper og kanyler <./DailyLifeWithAaps/PumpsAndCannulas.md>
Skift af tidszone og sommertid <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) AAPS-fjernfunktioner

Fjernovervågning <./RemoteFeatures/RemoteMonitoring.md>
Følg AAPS (uden interaktion med AAPS-systemet) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Fjernstyring af AAPS <./RemoteFeatures/RemoteControl.md>
AAPSClient-appen <./RemoteFeatures/AapsClient.md>
Styring mellem hovedenhed ↔ klient (signeret fjernstyring) <./RemoteFeatures/ClientMasterControl.md>
SMS-kommandoer <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Wear OS-smarture

Byg AAPS-appen til Wear OS <./WearOS/BuildingAapsWearOS.md>
Opsæt AAPS på dit Wear OS-ur <./WearOS/WearOsSmartwatch.md>
Betjening af AAPS med dit Wear OS-smartur <./RemoteFeatures/RemoteControlWearOS.md>
Referencedokument for brugerdefinerede urskiver <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Udvekslingsside for brugerdefinerede urskiver <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Vedligeholdelse af AAPS

Oprettelse og gendannelse af sikkerhedskopier <./Maintenance/ExportImportSettings.md>
Udgivelsesnoter <./Maintenance/ReleaseNotes.md>
Hvad er ændret i AAPS v4 <./Maintenance/V4Changes.md>
Opdatering til en ny version eller gren <./Maintenance/UpdateToNewVersion.md>
- Opdatering med en browser (fork) <./Maintenance/UpdateBrowserBuild.md>
- Opdatering med Android Studio <./Maintenance/UpdateComputerBuild.md>
Ophør af support <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Hjælp og fejlfinding

Hvor kan jeg få hjælp? <./GettingHelp/WhereCanIGetHelp.md>
Fejlfinding <./GettingHelp/GeneralTroubleshooting.md>
- Problemer med Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Fejlfinding af NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Fejlfinding i Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Build i browseren: fejlfinding <./GettingHelp/BrowserBuildTroubleshooting.md>
- Geninstallation af AAPS med et nyt keystore <./GettingHelp/ReinstallAaps.md>
- Adgang til logfiler <./GettingHelp/AccessingLogFiles.md>
Ofte stillede spørgsmål for loopere <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Avancerede AAPS-indstillinger

Fuldt lukket loop <./AdvancedOptions/FullClosedLoop.md>
Justering af din AAPS-profil <./GettingHelp/ProfileTuning.md>
Sådan bruger du Autotune-pluginet <./AdvancedOptions/Autotune.md>
Insulinkoncentration <./AdvancedOptions/InsulinConcentration.md>
Udviklingsgren <./AdvancedOptions/DevBranch.md>
Build i browseren: cherry-pick et commit <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Sådan støtter du AAPS

Sådan kan du hjælpe AAPS <./SupportingAaps/HowCanIHelp.md>
Sådan redigerer du dokumentationen <./SupportingAaps/HowToEditTheDocs.md>
Sådan oversætter du tekster til AAPS-appen eller dokumentationen <./SupportingAaps/Translations.md>
Status for oversættelse af appen og dokumentationen <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Ressourcer

Ordliste <./UsefulLinks/Glossary.md>
Nyttige ressourcer at læse, før du starter <./UsefulLinks/BackgroundReading.md>
Til sundhedspersonale – En generel introduktion og vejledning til AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
