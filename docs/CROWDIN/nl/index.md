# Welkom bij de documentatie over AAPS

![Afbeelding](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

31 October 2026: Version 4.0.0 is out. Bekijk de [Release notes](#latestrelease) om te zien wat er nieuw is, en volg de instructies in de [handleiding voor bijwerken](./Maintenance/UpdateToNewVersion.md) om bij te werken.

```

Android APS (**AAPS**) is een open-source app voor mensen met insuline-afhankelijke diabetes. Het is een kunstmatig pancreassysteem (Artificial Pancreas System, APS) dat op Android-smartphones draait. **AAPS** gebruikt een OpenAPS software-algoritme en heeft als doel te doen wat een echte alvleesklier doet: de bloedsuikerspiegel binnen doelbereik houden door middel van automatische insulinedosering. Om **AAPS** te gebruiken heb je **drie** compatibele apparaten nodig: **(1)** een Android-telefoon, **(2)** een continue glucosemonitor (CGM) en **(3)** een door de FDA/CE goedgekeurde insulinepomp. Je kunt ook **(4)** clouddiensten toevoegen om **AAPS** op afstand te bedienen, je gegevens te delen en ze op een rapportageserver op te slaan, en **(5)** een smartwatch.

Deze documentatie legt uit hoe je **AAPS** instelt en gebruikt. Je kunt door de **AAPS**-documentatie navigeren via het menu links (en de handige zoekfunctie **Search docs**), of via de [index](#index-aaps-documentation-index) onderaan deze pagina.

## Overzicht van de AAPS-documentatie ("de docs")

Deel **1) Aan de slag**: de [Introductie tot APS en AAPS](Getting-Started/Introduction.md) legt uit waar een kunstmatig pancreassysteem (APS) in het algemeen voor bedoeld is. Het schetst de achtergrond van het loopen in het algemeen, waarom **AAPS** is ontwikkeld, vergelijkt **AAPS** met andere systemen en gaat in op veiligheid. Het geeft suggesties over hoe je met je medisch team over **AAPS** kunt praten, legt uit waarom je de **AAPS** app zelf moet bouwen in plaats van deze gewoon te downloaden, en geeft een overzicht van de typische connectiviteit van een **AAPS**-systeem. Het gaat ook in op toegankelijkheid en wie mogelijk baat zal hebben bij **AAPS**.

[Voorbereiden om te starten met AAPS](./Getting-Started/PreparingForAaps.md) geeft meer uitleg over veiligheid, en over de telefoons, CGM's (Continue Glucose Monitoren) en insulinepompen die compatibel zijn met **AAPS**. Het geeft een overzicht van het proces dat je doorloopt, en een globale tijdlijn tot je alle functies van **AAPS** kunt gebruiken. Dit deel bereidt je technisch voor, zodat je je **AAPS**-systeem zo snel en efficiënt mogelijk kunt opbouwen. The subsection [Compatible CGMs](./Getting-Started/CompatiblesCgms.md) explains how to optimize your CGM setup and which smoothing options are best.

Nu je het proces goed begrijpt, kun je beginnen met het opbouwen van je **AAPS**-loop.

Deel **2) De app bouwen** legt uit waarom je de **AAPS**-app zelf moet bouwen in plaats van hem gewoon te downloaden. Het neemt je stap voor stap mee bij het [bouwen van de app](./SettingUpAaps/BuildingAaps.md) (met een browser, Android Studio of de opdrachtregel) en daarna bij het overzetten en installeren op je telefoon. Het begint met een stap die je mag overslaan: een [apart Google-account](./UsefulLinks/DedicatedGoogleAccountForAaps.md) maken voor je builds en back-ups. Het legt ook de [verificatie van Android-ontwikkelaars](#android-developer-verification) uit. Dit is een wijziging die Google vanaf september 2026 invoert, en die invloed heeft op hoe zelfgebouwde apps worden geïnstalleerd.

Deel **3) De rapportageserver instellen** gaat over het kiezen en [instellen van je rapportageserver](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout of Tidepool), zodat je je gegevens kunt bekijken en delen.

Deel **4) [AAPS configureren](./SettingUpAaps/SetupWizard.md)** gaat over het instellen van de **AAPS**-app met de Setup Wizard, het koppelen aan je CGM-app en aan een echte of virtuele insulinepomp, en het koppelen van **AAPS** aan je rapportageserver. Daarna leer je alles wat **AAPS** kan, in een veilig en zorgvuldig stap-voor-stap proces in een rustig tempo. Zo weet je zeker dat jij (of je kind) alle niveaus en menu-instellingen goed kent en er zeker mee bent, voordat je naar de volgende fase gaat, die meestal het volgende "Doel" wordt genoemd. Zo ga je verder tot je genoeg ervaring hebt om de meer geavanceerde opties in de app te gebruiken. Deze Doelen zijn zo opgebouwd dat ze stap voor stap meer mogelijkheden van **AAPS** vrijgeven, en je overstapt van open loop naar gesloten loop.

Deel **5) [Dagelijks leven met AAPS](./DailyLifeWithAaps/AapsScreens.md)** behandelt de belangrijkste functies van **AAPS**, zodat je **AAPS** kunt gebruiken (en aanpassen). Hierbij gaat het om de schermen, actieve koolhydraten (COB), gevoeligheid, Dynamische ISF, profiel wissel, tijdelijke streefdoelen, vertraagde koolhydraten (eCarbs), automatisering en het [bekijken van je gegevens](./Maintenance/Reviewing.md) in de geschiedenis en de statistieken. Het behandelt ook veelvoorkomende onderwerpen, zoals omgaan met verschillende soorten maaltijden, canule- en sensorwissels, updates van je smartphone, de overgang naar zomer- en wintertijd, [reizen met AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) en sporten. Veelgestelde vragen en antwoorden zijn terug te vinden in de probleemoplossing-sectie.

Deel **6) [AAPS-functies op afstand](./RemoteFeatures/RemoteControl.md)** laat een echte sterke kant van **AAPS** zien. Er zijn veel mogelijkheden om op afstand commando's te sturen naar **AAPS**, of om alleen de gegevens ervan te volgen. Dit is net zo nuttig voor verzorgers die **AAPS** willen gebruiken voor kinderen, als voor volwassenen met diabetes die hun bloedsuikers (en andere gegevens) makkelijker willen volgen dan alleen op hun telefoon (op een horloge, in de auto _enz._), of die willen dat naasten de gegevens ook kunnen volgen. Dit deel geeft ook uitleg over Android Auto, zodat je je glucosewaarden in de auto kunt zien.

Deel **7) [Wear OS smartwatches](./WearOS/BuildingAapsWearOS.md)** geeft informatie en werkwijzen om een Android **Wear OS**-smartwatch te gebruiken met de eigen watchfaces van **AAPS** of met aangepaste watchfaces, als afstandsbediening voor je telefoon of alleen als scherm om waarden af te lezen.


Deel **8) [Onderhoud van AAPS](./Maintenance/ExportImportSettings.md)** legt uit hoe je je instellingen exporteert en een back-up maakt (heel belangrijk als je je telefoon verliest of kapot maakt). Het geeft de notities bij de nieuwste versie, legt uit hoe je **AAPS** bijwerkt en wat er gebeurt als een versie niet meer wordt ondersteund. Je kunt per jaar één nieuwe versie en 2–3 verplichte updates verwachten. Net als bij alle software moet je deze updates uitvoeren, omdat kleine fouten worden opgelost en **AAPS** wordt verbeterd. Er is een apart deel over probleemoplossing bij het "bijwerken", met de veelgestelde vragen.

Deel **9) [Hulp & probleemoplossing](GettingHelp/WhereCanIGetHelp.md)** helpt je de beste plekken te vinden voor algemene hulp met **AAPS**. Dit is de plek waar je heen gaat als iets niet werkt: de pagina [Probleemoplossing](GettingHelp/GeneralTroubleshooting.md) verzamelt per onderwerp de oplossingen voor de meest voorkomende problemen, en de [Veelgestelde vragen voor loopers](UsefulLinks/FAQ.md) beantwoorden vaak gestelde vragen. Dit is erg belangrijk, zodat je zo snel mogelijk contact kunt leggen met anderen, vragen kunt stellen en de bekende valkuilen kunt oplossen. Veel mensen gebruiken **AAPS** al met succes, maar iedereen heeft wel eens een vraag die hij niet zelf kan oplossen. Omdat er veel gebruikers zijn, komen antwoorden op vragen meestal snel, vaak al binnen een paar uur. Wees niet bang om hulp te vragen, er bestaan geen domme vragen! We moedigen gebruikers van elk niveau aan om zoveel vragen te stellen als nodig is om veilig van start te gaan. Dit deel bevat algemene probleemoplossing voor **AAPS** en **AAPSClient** (een bijbehorende app om te volgen). Het legt ook uit hoe je je **AAPS**-gegevens (logbestanden) naar de ontwikkelaars stuurt voor onderzoek, als je denkt dat er een technisch probleem met **AAPS** is.

Deel **10)** behandelt **[Geavanceerde opties van AAPS](./AdvancedOptions/FullClosedLoop.md)**, zoals hoe je overstapt van **AAPS** als hybride gesloten loop (bolussen voor maaltijden _enz._) naar een volledig gesloten loop (geen bolussen), hoe je [je profiel afstelt](./GettingHelp/ProfileTuning.md) en Autotune gebruikt. Het geeft ook details over de ontwikkel- en engineering-modi. De meeste gebruikers kunnen prima met de gewone "Master"-versie van **AAPS** werken zonder deze opties te bekijken. Dit deel is voor gebruikers die hun waarden al goed onder controle hebben en hun systeem verder willen verbeteren.

In section **11) [How to support AAPS](SupportingAaps/HowCanIHelp.md)** we provide information so that you can support this project. Je kunt geld, materiaal of kennis doneren. You can suggest/make changes to the documentation yourself, help with [translation of the documentation](SupportingAaps/Translations.md) and provide your data through the Open Humans project.

Deel **12) Bronnen** bevat gearchiveerde of extra documentatie. Er is een onderdeel voor [zorgverleners](UsefulLinks/ClinicianGuideToAaps.md) die interesse hebben in open-source kunstmatige-pancreastechnologie zoals **AAPS**, of voor patiënten die zulke informatie met hun zorgverleners willen delen. Dit onderwerp komt ook in de introductie aan bod. In dit deel vind je ook meer bronnen en informatie over diabetes en loopen. Het bevat de [Veelgebruikte woordenlijst](./UsefulLinks/Glossary.md), een lijst met de afkortingen (of korte namen) die overal in **AAPS** worden gebruikt. Hier vind je bijvoorbeeld waar de termen ISF of TT voor staan.


 ### Wil je beginnen met **AAPS**? Lees meer over **AAPS** in de [Introductie tot APS en AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
De veiligheid van **AAPS** hangt af van de veiligheidsfuncties van je hardware (telefoon, pomp, CGM). Gebruik alleen een volledig werkende, door de FDA/CE goedgekeurde insulinepomp en CGM. Gebruik geen kapotte, aangepaste of zelfgebouwde insulinepompen of CGM-ontvangers. Gebruik alleen originele verbruiksmaterialen (inserters, canules en insulinereservoirs) die door de fabrikant zijn goedgekeurd voor gebruik met je pomp en CGM. Niet-geteste of aangepaste materialen kunnen onnauwkeurigheid en fouten in de insulinedosering veroorzaken. Dit is een groot risico voor de gebruiker. 

Gebruik **AAPS** niet als je SGLT-2-remmers (gliflozines) gebruikt, omdat deze de bloedsuikerspiegel verlagen. Je verhoogt het risico op diabetische ketoacidose (DKA) door minder insulinetoediening, en op hypoglykemie door een lagere bloedsuikerspiegel. 
```

```{admonition} Disclaimer
:class: note

- Alle informatie en code die hier beschreven worden, zijn alleen bedoeld voor informatie en onderwijs. Gebruik [Nightscout](https://nightscout.github.io/) en **AAPS** op eigen risico, en gebruik de informatie of code niet om medische beslissingen te nemen. Nightscout probeert zich op geen enkele wijze te houden aan gegevensbewaking van medische gegevens. 
- Het gebruik van code van github.com is zonder enige garantie of formele ondersteuning. Verdere details zijn te vinden in de licentie, die te vinden is in de Repository op github.
- Alle product- en bedrijfsnamen, handelsmerken, servicemerken, geregistreerde handelsmerken en geregistreerde servicemerken zijn eigendom van hun respectievelijke houders. Hun gebruik is voor informatieve doeleinden en impliceert op geen enkele wijze een samenwerking met of goedkeuring van hen.

**AAPS** heeft geen band met, en wordt niet gesteund door: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) of [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Index van de AAPS-documentatie

```{toctree}
:caption: Deze documentatie gebruiken

Taal en versie aanpassen <./NavigateDoc/ChangeLanguageVersion.md>
Zoeken in de documentatie <./NavigateDoc/SearchDoc.md>
Updates & wijzigingen in de documentatie <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Aan de slag

Introductie tot APS en AAPS <./Getting-Started/Introduction.md>
Voorbereiden om te starten met AAPS <./Getting-Started/PreparingForAaps.md>
Overzicht van de onderdelen <./Getting-Started/ComponentOverview.md>
- Compatibele pompen <./Getting-Started/CompatiblePumps.md>
- Compatibele CGM's <./Getting-Started/CompatiblesCgms.md>
- Telefoons  <./Getting-Started/Phones.md>
- Smartwatches en AAPS  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) De app bouwen

Een apart Google-account voor AAPS (optioneel) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
AAPS bouwen <./SettingUpAaps/BuildingAaps.md>
- Bouwen in de browser <./SettingUpAaps/BrowserBuild.md>
- Bouwen met Android Studio <./SettingUpAaps/ComputerBuild.md>
- Bouwinstructies voor de opdrachtregel <./SettingUpAaps/CLIBuild.md>
AAPS overzetten en installeren <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) De rapportageserver instellen

De rapportageserver instellen <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Configure AAPS

Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configuration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Settings <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Dagelijks leven met AAPS

AAPS-schermen <./DailyLifeWithAaps/AapsScreens.md>
Belangrijkste functies van AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB berekening <./DailyLifeWithAaps/CobCalculation.md>
Gevoeligheidsdetectie (Autosens) <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamische ISF <./DailyLifeWithAaps/DynamicISF.md>
Profiel wissel & Profiel percentage <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Tijdelijk streefdoel <./DailyLifeWithAaps/TempTargets.md>
Vertraagde koolhydraten / "eCarbs" <./DailyLifeWithAaps/ExtendedCarbs.md>
QuickWizards (bolus met één tik) <./DailyLifeWithAaps/QuickWizards.md>
Scènes (voorinstellingen voor situaties) <./DailyLifeWithAaps/Scenes.md>
Automatisering <./DailyLifeWithAaps/Automations.md>
QuickLaunch (snelactiebalk op het overzicht) <./DailyLifeWithAaps/QuickLaunch.md>
Widgets op het startscherm <./DailyLifeWithAaps/Widgets.md>
Voeding (je eigen voedingsdatabase) <./DailyLifeWithAaps/Food.md>
Overal zoeken <./DailyLifeWithAaps/GlobalSearch.md>
Je gegevens bekijken <./Maintenance/Reviewing.md>
AAPS voor kinderen <./DailyLifeWithAaps/AapsForChildren.md>
Pompen en canules <./DailyLifeWithAaps/PumpsAndCannulas.md>
Wisselen van tijdzone en zomertijd <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) AAPS-functies op afstand

Volgen op afstand <./RemoteFeatures/RemoteMonitoring.md>
AAPS volgen (geen interactie met het AAPS-systeem) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
AAPS op afstand bedienen <./RemoteFeatures/RemoteControl.md>
De app AAPSClient <./RemoteFeatures/AapsClient.md>
Master ↔ Client besturing (ondertekende besturing op afstand) <./RemoteFeatures/ClientMasterControl.md>
SMS-commando's <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Wear OS smartwatches

De Wear AAPS-app bouwen <./WearOS/BuildingAapsWearOS.md>
Wear AAPS gebruiken op een smartwatch <./WearOS/WearOsSmartwatch.md>
AAPS bedienen via je Wear OS smartwatch <./RemoteFeatures/RemoteControlWearOS.md>
Referentiedocument voor aangepaste watchfaces <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Uitwisselsite voor aangepaste watchfaces <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
What changed in AAPS v4 <./Maintenance/V4Changes.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update (fork, AAPS-CI) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio Update <./Maintenance/UpdateComputerBuild.md>
End of life <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Hulp & probleemoplossing

Waar kan ik hulp krijgen? <./GettingHelp/WhereCanIGetHelp.md>
Probleemoplossing (begin hier) <./GettingHelp/GeneralTroubleshooting.md>
- Bluetooth-probleemoplossing <./GettingHelp/BluetoothTroubleshooting.md>
- Problemen met NSClient oplossen <./GettingHelp/TroubleshootingNsClient.md>
- Problemen met Android Studio oplossen <./GettingHelp/TroubleshootingAndroidStudio.md>
- Bouwen in de browser: probleemoplossing <./GettingHelp/BrowserBuildTroubleshooting.md>
- AAPS opnieuw installeren met een nieuwe keystore <./GettingHelp/ReinstallAaps.md>
- Logbestanden uitlezen <./GettingHelp/AccessingLogFiles.md>
Veelgestelde vragen voor loopers <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Geavanceerde opties van AAPS

Volledig gesloten loop (Full Closed Loop) <./AdvancedOptions/FullClosedLoop.md>
Je AAPS-profiel afstellen <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Insulineconcentratie <./AdvancedOptions/InsulinConcentration.md>
Development branch (ontwikkelversie) <./AdvancedOptions/DevBranch.md>
Bouwen in de browser: een commit cherry-picken <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) AAPS ondersteunen

Hoe kun je helpen met AAPS <./SupportingAaps/HowCanIHelp.md>
Hoe je de docs bewerkt <./SupportingAaps/HowToEditTheDocs.md>
Strings vertalen voor de AAPS-app of de documentatie <./SupportingAaps/Translations.md>
Status van de vertaling van de app en de documentatie <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Bronnen

Veelgebruikte woordenlijst <./UsefulLinks/Glossary.md>
Handig om te lezen voordat je begint <./UsefulLinks/BackgroundReading.md>
Voor zorgverleners – Een algemene introductie en handleiding voor AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
