# Updates & wijzigingen in de documentatie

## Oktober 2026

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Smartwatches en AAPS](#watches-external-companion-apps): het onderdeel **Samsung Tizen** heet nu **External Companion Apps** (externe hulp-apps) en noemt de apps die de **AAPS**-broadcast lezen (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 en later maakt direct verbinding met **AAPS** zonder xDrip+: stappen voor het instellen toegevoegd, ook kort beschreven bij [Configuratie](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) en [Volgen op afstand](../RemoteFeatures/RemoteMonitoring.md). Bluejay-horloges: GTS niet meer leverbaar, huidig model bijgewerkt @psonnera
- [Bouwen in de browser met AAPS Builder](#aaps-builder): build-workflow versie 6. De bouwstappen gebruiken nu exacte, gecontroleerde versies van de tools en de build-machine van GitHub. De build legt duidelijk uit wanneer de verkeerde tekst in het secret `KEYSTORE_SET` is geplakt. De [instellingenpagina](#aaps-builder-setup) is nu deel van de documentatie en vertaald. Ze controleert je GitHub-gebruikersnaam en heeft duidelijkere hulp voor het secret, "Page not found" (404) en de GitHub-app. Staat er in je `.github/workflows/build.yml` versie 5 of ouder, vervang het bestand dan zoals uitgelegd in [AAPS bijwerken](#aaps-builder-updates) @psonnera
- [AAPS web installer](#web-installer): nu een pagina van de documentatie, vertaald zoals de andere. Het oude adres werkt nog steeds @psonnera
- [Bouwen in de browser met AAPS Builder](#aaps-builder): build-workflow versie 3 voegt de variant `aapsclient3Release` toe (**AAPSClient3**, AAPS 4.0 en later). Om die te bouwen, vervang je je `.github/workflows/build.yml` zoals uitgelegd in [AAPS bijwerken](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): de gepatchte Dexcom G7-app (DiaKEM) verwijderd, want die werkt niet meer bij nieuwe installaties @psonnera
- [Bouwen in de browser met AAPS Builder](#aaps-builder): build-workflow versie 2. Automatische wekelijkse builds zijn verwijderd (geen schema, geen variabelen `AUTO_BUILD` / `AUTO_VARIANT`, geen tags `built/…`): je start elke build zelf, met de versie en variant die je kiest, en de workflow heeft alleen leesrechten op je repository. Staat er in je `.github/workflows/build.yml` versie 1, vervang het bestand dan zoals uitgelegd in [AAPS bijwerken](#aaps-builder-updates). Schermafbeeldingen toegevoegd voor elke stap @psonnera
- [Bouwen in de browser met AAPS Builder](#aaps-builder): de build-workflow is nu deel van deze documentatie. Geen template-repository meer: je maakt een lege privé-repository en voegt de workflow toe vanaf de instellingenpagina (nieuwe stap 2). De workflow controleert niet meer op updates in een externe repository. Heb je je repository gemaakt van de eerdere template? Vervang dan `.github/workflows/build.yml` door de workflow van de instellingenpagina, zoals uitgelegd in [AAPS bijwerken](#aaps-builder-updates) @psonnera
- Nieuwe pagina [Bouwen in de browser met AAPS Builder](#aaps-builder): bouw AAPS vanaf een Android-telefoon met een instellingenpagina op deze site, met automatische wekelijkse builds en zonder voorbereidingsbestand. Deze vervangt de Android-instructies van het bouwen in de browser (pagina's over File Manager Plus verwijderd). AAPS Builder gemaakt door @dio99, documentatie @psonnera

## Augustus 2026

- [AAPS overzetten en installeren](../SettingUpAaps/TransferringAndInstallingAaps.md): de pagina *Android developer verification* samengevoegd met de installatiehandleiding, de [web installer](#android-developer-verification-web) toegevoegd (installeer de APK direct vanuit de browser, vrijgesteld van verificatie) en draadloze ADB @psonnera

## Juli 2026

- [Introductie](../Getting-Started/Introduction.md): controle op juistheid van het onderdeel over APS. Titel en link van de Frontiers-bronvermelding gecorrigeerd, deze gebracht als achtergrond in plaats van als actuele marktgids, de uitspraken over dual-hormone en volledig gesloten loop bijgewerkt, verduidelijkt dat de controller niet altijd een telefoon-app is, commerciële merknamen en gebruikersaantallen zonder bron verwijderd, en OS-AID gecorrigeerd naar *Open-Source Automated Insulin Delivery* @psonnera
- [Veelgebruikte woordenlijst](../UsefulLinks/Glossary.md): items **AID**, **FCL**, **HCL** en **OS-AID** toegevoegd, met links vanuit **APS** en **Closed Loop** @psonnera
- Nieuwe pagina [Android developer verification](#android-developer-verification): gevolgen van de komende verificatie-eis van Google voor het installeren van zelfgebouwde apps, met gratis installatiemethodes (ADB, advanced flow, limited distribution account) @psonnera

## Juni 2026

- [Bouwen in de browser](#browser-build): opnieuw opgebouwd als stappen over meerdere pagina's, waarbij je eerst een keuze maakt (Fork → keystore optie 1/optie 2 met een eigen pagina per apparaat → Google Drive → Bouwen → Probleemoplossing). Geneste tabbladen verwijderd en het installeren van File Manager Plus is nu een duidelijke stap @psonnera
- [Introductie](../Getting-Started/Introduction.md): terminologie veranderd van *DIY* naar *OS-AID* (Open-Source Automated Insulin Delivery), Trio en Stelo toegevoegd, compatibiliteitstabel voor pompen/CGM's bijgewerkt @tmhastings

## Maart 2026

- [Optie om te bouwen via de opdrachtregel toegevoegd](../SettingUpAaps/CLIBuild.md) @je-l
- *Computer Build* hernoemd naar *Android Studio Build*. Bestandsnamen in URL's behouden.

## Januari 2025

- Release [3.4](#version3400) en verzamelde updates van de documentatie (Wizard, versies voor bouwen op de computer, Configuratie)
- Update van de CGM-lijst. Dexcom G5, Tomato en Glimp verwijderd.
- [Site rotatie (scherm)](#Aapsscreens-site-rotation)
- [Bedrijfsmodus](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## December 2025

- [Profiel afstellen](../GettingHelp/ProfileTuning.md) door @robrub

## Oktober 2025

- DiaKEM: nieuwe installaties werken niet meer na een upgrade van de servers @psonnera
- Gepatchte Libre 2-app verwijderd (verouderd): werkt niet met nieuwe sensoren @psonnera
- Pagina over Omnipod Dash herzien @XiTatiON

## Augustus 2025

- Versies en vereisten voor Android Studio bijgewerkt
- Release [3.3.2.1](#version3321) toegevoegd, verwijzingen naar Android 16 verwijderd (opgelost)
- [Bouwen in de browser](#browser-build) toegevoegd @Angus

## Mei 2025

- [Pagina over bijwerken naar 3.2.0.4](#update-aaps-3204) toegevoegd @psonnera

## Januari 2025

- QuickWizard [functie lang indrukken](#Preferences-quick-wizard) @emilise
- Pagina [Dynamische ISF](../DailyLifeWithAaps/DynamicISF.md) opnieuw geschreven @emilise

## December 2024

- Documentatie van [versie 3.3](#version3300) @emilise

## November 2024

- Update van [Je AAPS-profiel](../SettingUpAaps/YourAapsProfile.md) @emilise
- Herindeling van de inhoud over [Wear OS-smartwatches](../WearOS/BuildingAapsWearOS.md) @psonnera

## Oktober 2024

- Update van meerdere pagina's:
  - [Hoe lang duurt het](#preparing-how-long-will-it-take), [Overzicht van de onderdelen](../Getting-Started/ComponentOverview.md), [De Doelen voltooien](../SettingUpAaps/CompletingTheObjectives.md), [Je AAPS-profiel](../SettingUpAaps/YourAapsProfile.md), [Configuratie](../SettingUpAaps/ConfigBuilder.md) & [Instellingen](../SettingUpAaps/Preferences.md), [AAPS-schermen](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [COB berekening](../DailyLifeWithAaps/CobCalculation.md), [Dynamische ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Bouwinstructies voor Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Technisch werk (publicatieproces van de documentatie, indeling van bestanden...) @psonnera & @emilise

***

Geschiedenis van maart 2022 tot september 2024 ontbreekt

Bij de herziening voor 3.2 is wat verouderde informatie verwijderd. Je vindt die in de vorige versie van de documentatie:

De documentatie van AAPS 3.1 staat [hier](https://androidaps.readthedocs.io/en/3.1/index.html).

***

## Februari 2022

- [Waarschuwingsteken voor BG-kwaliteit](#aaps-screens-bg-warning-sign) @tanja
- [Update Medtronic-pomp](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Nodige controles na het bijwerken naar AAPS 3.0](Update3_0.md) @tanja
- [Omnipod Dash](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Documentatie bijgewerkt voor AAPS 3.0 (deels) @xJoe
- [Wear OS voor AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Januari 2022

- [Problemen met Android Studio oplossen](../GettingHelp/TroubleshootingAndroidStudio.md) - update @tanja

## December 2021

- [De APK bouwen](../SettingUpAaps/BuildingAaps.md) - update Android Studio Arctic Fox | 2020.3.1 @tanja
- Informatie over [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) toegevoegd @MilosKozak

## November 2021

- Beste werkwijze voor het kalibreren van een Libre 2-sensor
- [ISF](../UsefulLinks/FAQ.md) - nieuwe uitleg van het effect
- Update van [Problemen met Android Studio oplossen](../GettingHelp/TroubleshootingAndroidStudio.md)
- Gepatchte [Dexcom](../CompatibleCgms/DexcomG6.md)-app verwijderd, omdat die verouderd is

## Oktober 2021

- [Release notes](ReleaseNotes.md) AAPS 3.0 bèta

## September 2021

- Aanbevolen computerspecificaties om [de AAPS-app te bouwen](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Juni 2021

- [Watchface sideloaden](../WearOS/WearOsSmartwatch.md)

## April 2021

- Lijst van [communicatieapparaten](#CompatiblePumps-additional-communication-device) voor Omnipod- en Medtronic-pompen
- AAPS-voorspellingen in [Nightscout](#Nightscout-manual-nightscout-setup)

## Maart 2021

- Communicatie tussen ontwikkelaars verhuisd van gitter naar [Discord](https://discord.gg/4fQUWHZ4Mw)

## Februari 2021

- Nieuwe navigatiebalk en [taalkeuze](../NavigateDoc/ChangeLanguageVersion.md)

## Januari 2021

- [Tabblad Acties](#screens-action-tab) - meer details op de pagina 'AAPS-schermen'
- Dexcom G6 met [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- [Batterijniveau](#screens-sensor-level-battery) van de Libre smart reader
- [Doelen](#objectives-objective3) - nieuwe vragen
- Andere [nieuwe functies van AAPS 2.8.0](#Releasenotes-version-2-8-0)

## December 2020

- [Libre 2](../CompatibleCgms/Libre2.md) - gepatchte app werkt niet met Amerikaanse sensoren
- [Vaste limieten van OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3: Google Play Services handmatig installeren

## Oktober 2020

- Accu-Chek Combo - update [tijdaanpassing bij zomertijd](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - optie om [absolute waarden te uploaden](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logbestanden - meer details over de [locatie van de map](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - stand van zaken
- [SMS-commando's - tijdsynchronisatie](../RemoteFeatures/SMSCommands.md)

## September 2020

- Grote update voor de nieuwe AAPS-versie 2.7
- Zie voor details de [release notes](#Releasenotes-version-2-7-0)

## Juni 2020

- Libre 2 - meer details over de gepatchte Libre Link-app & het gebruik van Bluetooth-transmitters
- [Reizen tussen tijdzones](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) met Libre 2

## Mei 2020

- [Vertraagde bolus alleen voor Dana- en Insight-pompen](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Trillen van Insight uitschakelen](#Accu-Chek-Insight-Pump-vibration) (alleen firmware 3.x)
- [Minimale aanvraagwijziging](#Preferences-minimal-request-change) om het aantal meldingen in open loop te verminderen
- Gepatchte Libre Link-app - controleren of de patch goed is
- [Voorspellingslijnen](#aaps-screens-prediction-lines) - meer details

## April 2020

- Insuline met terugwerkende kracht invoeren (bijv. gegeven met een spuit)
- Ondersteuning voor Android 6 stopt in de volgende master-versie

## Maart 2020

- [APK bouwen met Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS met firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **kan op dit moment niet met AAPS gebruikt worden!**
- [Vertraagde bolus en overschakelen naar open loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [APK bijwerken met Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

## Februari 2020

- Automatisering - waarschuwingen
- [Autosens](#Open-APS-features-autosens) - korte uitleg
- Alternatieven voor Careportal
- Functie [Vertraagde bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) - gesloten loop wordt uitgeschakeld
- Nieuwe [Lokaal profiel plugin](../SettingUpAaps/ConfigBuilder.md)
- Voorbeeldsetup - update Dexcom G6
- [Versie 2.6.0](#Releasenotes-version-2-6-0) - grote nieuwe functies
- [Wear complicaties](../WearOS/WearOsSmartwatch.md)

## Januari 2020

- [Handmatige correctie van koolhydraten](#screens-bolus-carbs) voor foute koolhydraatinvoer
- [Grootte van afbeeldingen](../SupportingAaps/HowToEditTheDocs.md) bij het bewerken van de documentatie

## December 2019

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - instellen met schermafbeeldingen
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - tijdelijke oplossing voor gebruik
- [Glimp](#Config-Builder-bg-source) - versie 4.15.57 en nieuwer ondersteund
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - grote update, veel meer details
- [Watchface complicaties](#Watchfaces-complications) - gebruik je favoriete watchface met AAPS-gegevens

## November 2019

- [Automatisering - uitschakelen als de loop uitgeschakeld wordt](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 - update over het vervangen van de transmitter](#xdrip-replace-transmitter)
- [Vertraagde bolus - waarom die niet werkt in combinatie met de loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - sport](#FAQ-sports)
- [Startscherm - lijnen in de grafiek](#aaps-screens-main-graph)
- [Insight - absolute waarden in NS Client uitschakelen](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic-pomp - mogelijke dubbele invoer](../CompatiblePumps/MedtronicPump.md)
- [Nieuwe uitleg voor Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Profiel wissel met percentage - voorbeeld](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Update van de SMS-commando's](../RemoteFeatures/SMSCommands.md)
- [Problemen met Android Studio oplossen](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Probleemoplossing - verzameling links](../GettingHelp/GeneralTroubleshooting.md)
- Bijwerken - snelle doorloop voor ervaren gebruikers
- Documentatie - update [bewerken](#edit-the-docs-code-syntax) en [vertalen](#translations-translation-of-the-documentation).

## Oktober 2019

- Updates voor [AAPS-versie 2.5](#Releasenotes-version-2-5-0) (vooral op de [pagina over bijwerken](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - logopties](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB-berekening op een aparte pagina](../DailyLifeWithAaps/CobCalculation.md)
- [COB - onjuiste COB-waarde herkennen](#CobCalculation-detection-of-wrong-cob-values)
- [Dexcom G6 specifieke probleemoplossing](#DexcomG6-troubleshooting-g6)
- [Update van de Doelen voor versie 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Update van de Instellingen](../SettingUpAaps/Preferences.md)
- [SGLT-2-remmers - niet gebruiken als je loopt](#PreparingForAaps-no-sglt-2-inhibitors)
- [Probleemoplossing SMS-commando's](#SMSCommands-troubleshooting)
- [xDrip - update over het vervangen van de G6-transmitter](#xdrip-replace-transmitter)

## September 2019

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Bolus wizard](#AapsScreens-wrong-cob-detection) - langzame opname van koolhydraten
- [Beveiliging van Nightscout](#Nightscout-security-considerations)
- [Tijdverschuiving van het profiel](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (meer details)
- [Volgen op afstand](../RemoteFeatures/RemoteMonitoring.md)
- [Wat is een gesloten loop-systeem?](#Introduction-what-does-hybrid-closed-loop-mean)

## Augustus 2019

- Regio van de gepatchte Dexcom G6-app
- [Nieuwe Dexcom G6-transmitter](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- Wat heb ik nodig? - nieuwe structuur & extra informatie
- Nieuwe structuur
