# Aktualizácie a zmeny dokumentácie

## Október 2026

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Inteligentné hodinky a AAPS](#watches-external-companion-apps): časť **Samsung Tizen** sa mení na **Externé sprievodné (Companion) aplikácie** a uvádza aplikácie, ktoré čítajú vysielanie **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 a novší sa pripája priamo k **AAPS** bez xDrip+: pridané kroky nastavenia, v skratke aj v častiach [Konfigurácia](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) a [Vzdialené sledovanie](../RemoteFeatures/RemoteMonitoring.md). Hodinky Bluejay: GTS sa už nevyrába, aktuálny model aktualizovaný @psonnera
- [Zostavenie v prehliadači pomocou AAPS Builder](#aaps-builder): workflow zostavenia verzie 6. Kroky zostavenia teraz používajú presné, skontrolované verzie nástrojov GitHubu a zostavovacieho stroja. Zostavenie tiež jasne vysvetlí, keď bol do secretu `KEYSTORE_SET` vložený nesprávny text. [Stránka nastavenia](#aaps-builder-setup) je teraz súčasťou dokumentácie a je preložená. Kontroluje vaše používateľské meno na GitHube a má jasnejšiu pomoc pre secret, „Page not found“ (404) a aplikáciu GitHub. Ak je vo vašom súbore `.github/workflows/build.yml` uvedená verzia 5 alebo staršia, nahraďte ho podľa postupu v časti [Aktualizácia AAPS](#aaps-builder-updates) @psonnera
- [Webový inštalátor AAPS](#web-installer): teraz je to stránka dokumentácie a prekladá sa ako ostatné. Stará adresa stále funguje @psonnera
- [Zostavenie v prehliadači pomocou AAPS Builder](#aaps-builder): workflow zostavenia verzie 3 pridáva variant `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 a novší). Ak ho chcete zostaviť, nahraďte svoj súbor `.github/workflows/build.yml` podľa postupu v časti [Aktualizácia AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): odstránená upravená aplikácia Dexcom G7 (DiaKEM), ktorá už pri nových inštaláciách nefunguje @psonnera
- [Zostavenie v prehliadači pomocou AAPS Builder](#aaps-builder): workflow zostavenia verzie 2. Automatické týždenné zostavenia sú odstránené (žiadny časový plán, žiadne premenné `AUTO_BUILD` / `AUTO_VARIANT`, žiadne tagy `built/…`): každé zostavenie spúšťate vy, s verziou a variantom, ktoré si vyberiete, a workflow má k vášmu repozitáru prístup iba na čítanie. Ak je vo vašom súbore `.github/workflows/build.yml` uvedená verzia 1, nahraďte ho podľa postupu v časti [Aktualizácia AAPS](#aaps-builder-updates). Pridané snímky obrazovky ku každému kroku @psonnera
- [Zostavenie v prehliadači pomocou AAPS Builder](#aaps-builder): workflow zostavenia je teraz súčasťou tejto dokumentácie. Bez šablónového repozitára: vytvoríte prázdny súkromný repozitár a pridáte doň workflow zo stránky nastavenia (nový krok 2). Workflow už nekontroluje aktualizácie v externom repozitári. Ak ste svoj repozitár vytvorili zo staršej šablóny, nahraďte `.github/workflows/build.yml` workflowom zo stránky nastavenia podľa postupu v časti [Aktualizácia AAPS](#aaps-builder-updates) @psonnera
- Nová stránka [Zostavenie v prehliadači pomocou AAPS Builder](#aaps-builder): zostavenie AAPS z telefónu s Androidom pomocou stránky nastavenia na tomto webe, s automatickými týždennými zostaveniami a bez prípravného súboru. Nahrádza návod pre Android v zostavení v prehliadači (stránky o File Manager Plus boli odstránené). AAPS Builder vytvoril @dio99, dokumentácia @psonnera

## August 2026

- [Prenos a inštalácia AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md): stránka *Overovanie vývojárov pre Android* bola zlúčená do návodu na inštaláciu, pridaný [webový inštalátor](#android-developer-verification-web) (inštalácia APK priamo z prehliadača, bez overovania) a bezdrôtové ADB @psonnera

## Júl 2026

- [Úvod](../Getting-Started/Introduction.md): kontrola presnosti časti o APS. Opravený názov a odkaz citácie Frontiers, citácia je teraz uvedená ako východisko, nie ako aktuálny prehľad trhu. Aktualizované tvrdenia o dvojhormonálnych systémoch a plne uzavretom okruhu, objasnené, že riadiaca jednotka nie je vždy aplikácia v telefóne, odstránené komerčné názvy značiek a počty používateľov bez zdroja a OS-AID opravené na *Open-Source Automated Insulin Delivery* @psonnera
- [Slovník](../UsefulLinks/Glossary.md): pridané heslá **AID**, **FCL**, **HCL** a **OS-AID** s krížovými odkazmi z hesiel **APS** a **Uzavretý okruh** @psonnera
- Nová stránka [Overovanie vývojárov pre Android](#android-developer-verification): dopad pripravovanej požiadavky Google na overovanie pri inštalácii vlastnoručne zostavených aplikácií, s bezplatnými spôsobmi inštalácie (ADB, rozšírený postup, účet s obmedzenou distribúciou) @psonnera

## Jún 2026

- [Zostavenie v prehliadači](#browser-build): prepracované na postup na viacerých stránkach, ktorý začína rozhodnutím (Fork → úložisko kľúčov Možnosť 1/Možnosť 2 so samostatnou stránkou pre každé zariadenie → Disk Google → Zostavenie → Riešenie problémov); odstránené vnorené karty a inštalácia File Manager Plus je teraz výrazný samostatný krok @psonnera
- [Úvod](../Getting-Started/Introduction.md): terminológia zmenená z *DIY* na *OS-AID* (Open-Source Automated Insulin Delivery), pridané Trio a Stelo, aktualizovaná tabuľka kompatibility púmp a CGM @tmhastings

## Marec 2026

- [Pridaná možnosť zostavenia z príkazového riadku](../SettingUpAaps/CLIBuild.md) @je-l
- Premenovanie *Zostavenie v počítači* na *Zostavenie v Android Studiu*. Zachované názvy súborov v adresách URL.

## Január 2025

- [3.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.4.0.0) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Aktualizácia zoznamu CGM. Dexcom G5, Tomato a Glimp boli odstránené.
- [Rozhranie Striedania miest](#Aapsscreens-site-rotation)
- [Režim prevádzky](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## December 2025

- [Ladenie profilu](../GettingHelp/ProfileTuning.md) od @robrub

## Október 2025

- DiaKEM: nové inštalácie po aktualizácii serverov nefungujú @psonnera
- Odstránená upravená aplikácia pre Libre 2 (zastaraná): nefunguje s novými senzormi @psonnera
- Prepracovaná stránka Omnipod Dash @XiTatiON

## August 2025

- Aktualizované verzie a požiadavky na Android Studio
- Pridané vydanie [3.3.2.1](#version3321), odstránené zmienky o Androide 16 (opravené)
- Pridané [Zostavenie v prehliadači](#browser-build) @Angus

## Máj 2025

- Pridaná [stránka o aktualizácii na 3.2.0.4](#update-aaps-3204) @psonnera

## Január 2025

- [Funkcia dlhého stlačenia](#Preferences-quick-wizard) v Rýchlom sprievodcovi @emilise
- Stránka [Dynamická ISF](../DailyLifeWithAaps/DynamicISF.md) bola prepísaná @emilise

## December 2024

- Dokumentácia [verzie 3.3](#version3300) @emilise

## November 2024

- Aktualizácia stránky [Váš profil AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Reorganization of [Wear OS Smartwatches](../WearOS/BuildingAapsWearOS.md) content @psonnera

## Október 2024

- Aktualizácia viacerých stránok:
  - [How long will it take](#preparing-how-long-will-it-take), [Component Overview](../Getting-Started/ComponentOverview.md), [Completing the objectives](../SettingUpAaps/CompletingTheObjectives.md), [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md), [Config Builder](../SettingUpAaps/ConfigBuilder.md) & [Preferences](../SettingUpAaps/Preferences.md), [AAPS screens](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Výpočet COB](../DailyLifeWithAaps/CobCalculation.md), [Dynamická ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Návod na zostavenie pre Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Technical work (deployment process for the documentation, files organization...) @psonnera & @emilise

***

Chýba história od marca 2022 do septembra 2024

Pri prepracovaní pre verziu 3.2 boli odstránené niektoré zastarané informácie. Nájdete ich v predchádzajúcej verzii dokumentácie:

Dokumentácia AAPS 3.1 je dostupná [tu](https://androidaps.readthedocs.io/en/3.1/index.html).

***

## Február 2022

- [Výstražný znak kvality glykémie](#aaps-screens-bg-warning-sign) @tanja
- [Aktualizácia pre pumpy Medtronic](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Potrebné kontroly po aktualizácii na AAPS 3.0](Update3_0.md) @tanja
- [Omnipod Dash](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Aktualizácia dokumentácie pre AAPS 3.0 (čiastočne) @xJoe
- [Wear OS pre AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Január 2022

- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - update @tanja

## December 2021

- [Zostavenie APK](../SettingUpAaps/BuildingAaps.md) – aktualizácia na Android Studio Arctic Fox | 2020.3.1 @tanja
- Pridané informácie o [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

## November 2021

- Odporúčané postupy pri kalibrácii senzora Libre 2
- [ISF](../UsefulLinks/FAQ.md) – nová formulácia popisu vplyvu
- Update [troubleshooting Android studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Odstránená upravená aplikácia [Dexcom](../CompatibleCgms/DexcomG6.md), pretože je zastaraná

## Október 2021

- [Poznámky k vydaniu](ReleaseNotes.md) AAPS 3.0 beta

## September 2021

- Odporúčaná špecifikácia počítača na [zostavenie aplikácie AAPS](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Jún 2021

- [Ručná inštalácia ciferníka (sideload)](../WearOS/WearOsSmartwatch.md)

## Apríl 2021

- Zoznam [komunikačných zariadení](#CompatiblePumps-additional-communication-device) pre pumpy Omnipod a Medtronic
- Predikcie AAPS v [Nightscoute](#Nightscout-manual-nightscout-setup)

## Marec 2021

- Komunikácia vývojárov sa presunula z gitteru na [discord](https://discord.gg/4fQUWHZ4Mw)

## Február 2021

- Nový navigačný panel a [prepínač jazyka](../NavigateDoc/ChangeLanguageVersion.md)

## Január 2021

- [Karta Akcie](#screens-action-tab) – viac podrobností na stránke „Obrazovky AAPS“
- Dexcom G6 s aplikáciou [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre smart reader – [úroveň batérie](#screens-sensor-level-battery)
- [Ciele](#objectives-objective3) – nové otázky
- Other [new AAPS 2.8.0 functions](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

## December 2020

- [Libre 2](../CompatibleCgms/Libre2.md) – upravená aplikácia nefunguje so senzormi z USA
- [Pevne nastavené limity OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 – ručná inštalácia služieb Google Play (Google Play Service)

## Október 2020

- Accu-Chek Combo – aktualizácia [úpravy času pri prechode na letný čas](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight – možnosť [nahrávať absolútne hodnoty](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Log súbory – viac podrobností o [umiestnení priečinka](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros – aktualizácia stavu
- [SMS príkazy – synchronizácia času](../RemoteFeatures/SMSCommands.md)

## September 2020

- Veľká aktualizácia pre novú verziu AAPS 2.7
- For details see the [release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

## Jún 2020

- Libre 2 – viac podrobností o upravenej aplikácii Libre Link a použití vysielačov Bluetooth
- [Cestovanie medzi časovými pásmami](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) s Libre 2

## Máj 2020

- [Predĺžený bolus iba pre pumpy Dana a Insight](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Vypnutie vibrácií pumpy Insight](#Accu-Chek-Insight-Pump-vibration) (iba firmvér 3.x)
- [Minimálna zmena požiadavky](#Preferences-minimal-request-change) na zníženie počtu notifikácií v režime otvoreného okruhu
- Upravená aplikácia Libre Link – kontrola, či je správne upravená
- [Predikčné čiary](#aaps-screens-prediction-lines) – viac podrobností

## Apríl 2020

- Spätné zadanie inzulínu (napr. podaného injekčnou striekačkou)
- Podpora Androidu 6 bude v ďalšej verzii master ukončená

## Marec 2020

- [Zostavenie APK v Android Studiu 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS s firmvérom v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **sa s AAPS momentálne nedá používať!**
- [Predĺžený bolus a prepnutie na otvorený okruh](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Aktualizácia APK v Android Studiu 3.6.1](../Maintenance/UpdateToNewVersion.md)

## Február 2020

- Upozornenia k automatizácii
- [Autosens](#Open-APS-features-autosens) – krátke vysvetlenie
- Alternatívy k Starostlivosti (Careportal)
- Funkcia [Predĺžený bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) – uzavretý okruh sa vypne
- Nový [plugin Lokálny profil](../SettingUpAaps/ConfigBuilder.md)
- Vzorové nastavenie – aktualizácia Dexcom G6
- [Version 2.6.0](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260) - major new features
- [Komplikácie pre hodinky](../WearOS/WearOsSmartwatch.md)

## Január 2020

- [Ručná korekcia sacharidov](#screens-bolus-carbs) pri chybne zadaných sacharidoch
- [Veľkosť obrázkov](../SupportingAaps/HowToEditTheDocs.md) pri úprave dokumentácie

## December 2019

- [Android Auto](../RemoteFeatures/AndroidAuto.md) – nastavenie so snímkami obrazovky
- [Accu-Chek Insight a Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) – náhradné riešenie pre používanie
- [Glimp](#Config-Builder-bg-source) – podporovaná je verzia 4.15.57 a novšie
- [Ciferníky](../WearOS/WearOsSmartwatch.md) – veľká aktualizácia, oveľa viac podrobností
- [Komplikácie ciferníka](#Watchfaces-complications) – používajte svoj obľúbený ciferník s údajmi AAPS

## November 2019

- [Automatizácia – deaktivácia pri vypnutí okruhu](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 – aktualizácia výmeny vysielača](#xdrip-replace-transmitter)
- [Predĺžený bolus – prečo nefunguje v režime okruhu](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Časté otázky – šport](#FAQ-sports)
- [Hlavná obrazovka – čiary v grafe](#aaps-screens-main-graph)
- [Insight – vypnutie absolútnych hodnôt v NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Pumpa Medtronic – možné dvojité zápisy](../CompatiblePumps/MedtronicPump.md)
- [Nový návod pre Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Prepnutie profilu s percentom – príklad](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Aktualizácia SMS príkazov](../RemoteFeatures/SMSCommands.md)
- [Riešenie problémov s Android Studiom](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Riešenie problémov – zbierka odkazov](../GettingHelp/GeneralTroubleshooting.md)
- Aktualizácia – rýchly prehľad pre skúsených používateľov
- Dokumentácia – aktualizácia stránok o [úpravách](#edit-the-docs-code-syntax) a [preklade](#translations-translation-of-the-documentation).

## Október 2019

- [AAPS version 2.5](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [AccuChek Insight – možnosti logov](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Výpočet COB na samostatnej stránke](../DailyLifeWithAaps/CobCalculation.md)
- [COB – detekcia nesprávnej hodnoty COB](#CobCalculation-detection-of-wrong-cob-values)
- [Riešenie problémov špecifických pre Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Aktualizácia cieľov pre verziu 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Aktualizácia nastavení](../SettingUpAaps/Preferences.md)
- [SGLT-2 inhibítory – nepoužívajte ich pri okruhu](#PreparingForAaps-no-sglt-2-inhibitors)
- [Riešenie problémov so SMS príkazmi](#SMSCommands-troubleshooting)
- [xDrip – aktualizácia výmeny vysielača G6](#xdrip-replace-transmitter)

## September 2019

- [Automatizácia](../DailyLifeWithAaps/Automations.md)
- [Kalkulačka bolusu](#AapsScreens-wrong-cob-detection) – pomalé vstrebávanie sacharidov
- [Zabezpečenie Nightscoutu](#Nightscout-security-considerations)
- [Časový posun profilu](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (viac podrobností)
- [Vzdialené sledovanie](../RemoteFeatures/RemoteMonitoring.md)
- [Čo je systém s uzavretým okruhom?](#Introduction-what-does-hybrid-closed-loop-mean)

## August 2019

- Dexcom G6 – región upravenej aplikácie
- [Nový vysielač Dexcom G6](#xdrip-connect-g6-transmitter-for-the-first-time) („firefly“ / 8G...)
- Čo potrebujem? - nová štruktúra a ďalšie informácie
- Nová štruktúra
