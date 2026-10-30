# Aktualizace a změny dokumentace

## Říjen 2026

- [Chytré hodinky a AAPS](#watches-external-companion-apps): z části **Samsung Tizen** se stává část **Externí aplikace**. Uvádí aplikace, které čtou vysílání z **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 a novější se připojuje přímo k **AAPS** bez xDrip+: přidány kroky nastavení, shrnuté také v částech [Konfigurace](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) a [Vzdálený dohled](../RemoteFeatures/RemoteMonitoring.md). Hodinky Bluejay: GTS se už nevyrábí, aktualizován současný model @psonnera
- [Sestavení v prohlížeči s AAPS Builder](#aaps-builder): sestavovací workflow verze 6. Kroky sestavení nyní používají přesné, zkontrolované verze nástrojů GitHubu a sestavovacího počítače. Sestavení také jasně vysvětlí, když byl do secretu `KEYSTORE_SET` vložen nesprávný text. [Stránka nastavení](#aaps-builder-setup) je nyní součástí dokumentace a je přeložená. Kontroluje vaše uživatelské jméno na GitHubu a má jasnější nápovědu k secretu, k chybě „Page not found“ (404) a k aplikaci GitHub. Pokud váš soubor `.github/workflows/build.yml` uvádí verzi 5 nebo starší, nahraďte ho podle návodu v části [Aktualizace AAPS](#aaps-builder-updates) @psonnera
- [Webový instalátor AAPS](#web-installer): nyní je to stránka dokumentace, překládá se jako ostatní. Stará adresa stále funguje @psonnera
- [Sestavení v prohlížeči s AAPS Builder](#aaps-builder): sestavovací workflow verze 3 přidává variantu `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 a novější). Pro její sestavení nahraďte svůj soubor `.github/workflows/build.yml` podle návodu v části [Aktualizace AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): odstraněna upravená aplikace Dexcom G7 (DiaKEM), která už u nových instalací nefunguje @psonnera
- [Sestavení v prohlížeči s AAPS Builder](#aaps-builder): sestavovací workflow verze 2. Automatická týdenní sestavení jsou odstraněna (žádný rozvrh, žádné proměnné `AUTO_BUILD` / `AUTO_VARIANT`, žádné tagy `built/…`): každé sestavení spouštíte vy, s verzí a variantou, kterou si vyberete, a workflow má do vašeho repozitáře jen přístup pro čtení. Pokud váš soubor `.github/workflows/build.yml` uvádí verzi 1, nahraďte ho podle návodu v části [Aktualizace AAPS](#aaps-builder-updates). Přidány snímky obrazovky ke každému kroku @psonnera
- [Sestavení v prohlížeči s AAPS Builder](#aaps-builder): sestavovací workflow je nyní součástí této dokumentace. Žádný šablonový repozitář: vytvoříte prázdný soukromý repozitář a přidáte do něj workflow ze stránky nastavení (nový krok 2). Workflow už nekontroluje aktualizace v cizím repozitáři. Pokud jste svůj repozitář vytvořili z dřívější šablony, nahraďte soubor `.github/workflows/build.yml` workflow ze stránky nastavení podle návodu v části [Aktualizace AAPS](#aaps-builder-updates) @psonnera
- Nová stránka [Sestavení v prohlížeči s AAPS Builder](#aaps-builder): sestavení AAPS z telefonu s Androidem pomocí stránky nastavení na tomto webu, s automatickými týdenními sestaveními a bez přípravného souboru. Nahrazuje návod pro Android u sestavení v prohlížeči (stránky File Manager Plus odstraněny). AAPS Builder vytvořil @dio99, dokumentace @psonnera

## srpen 2026

- [Přenos a instalace AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md): stránka *Ověřování vývojářů Androidu* sloučena s návodem k instalaci, přidán [webový instalátor](#android-developer-verification-web) (instalace APK přímo z prohlížeče, bez nutnosti ověření) a bezdrátové ADB @psonnera

## Červenec 2026

- [Úvod](../Getting-Started/Introduction.md): kontrola přesnosti části o APS. Opraven název a odkaz citace z časopisu Frontiers, citace je nyní uvedena jako podklad, ne jako aktuální průvodce trhem. Aktualizovány údaje o dvouhormonální a plně uzavřené smyčce, upřesněno, že řídicí jednotka není vždy aplikace v telefonu, odstraněny obchodní názvy značek a počty uživatelů bez zdroje a opraveno OS-AID na *Open-Source Automated Insulin Delivery* @psonnera
- [Slovníček](../UsefulLinks/Glossary.md): přidány položky **AID**, **FCL**, **HCL** a **OS-AID**, s odkazy z **APS** a **Uzavřená smyčka** @psonnera
- Nová stránka [Ověřování vývojářů Androidu](#android-developer-verification): dopad připravovaného požadavku Googlu na ověření na instalaci vlastních sestavených aplikací, s bezplatnými způsoby instalace (ADB, rozšířený postup, účet s omezenou distribucí) @psonnera

## Červen 2026

- [Sestavení v prohlížeči](#browser-build): přestavěno na postup na více stránkách, který začíná rozhodnutím (Fork → úložiště klíčů Možnost 1/Možnost 2 s vlastní stránkou pro každé zařízení → Disk Google → Sestavení → Řešení problémů); odstraněny vnořené karty a instalace File Manager Plus je nyní výrazný krok @psonnera
- [Úvod](../Getting-Started/Introduction.md): terminologie změněna z *DIY* na *OS-AID* (Open-Source Automated Insulin Delivery), přidány Trio a Stelo, aktualizována tabulka kompatibility pump a CGM @tmhastings

## Březen 2026

- [Přidána možnost sestavení z příkazové řádky](../SettingUpAaps/CLIBuild.md) @je-l
- *Sestavení na počítači* přejmenováno na *Sestavení v Android Studiu*. Zachování názvů souborů v adresách URL.

## Leden 2025

- Vydání [3.4](#version3400) a souhrnná aktualizace dokumentace (Průvodce, verze pro sestavení na počítači, Konfigurace)
- Aktualizace seznamu CGM. Odstraněny Dexcom G5, Tomato a Glimp.
- [Rozhraní pro střídání míst vpichu](#Aapsscreens-site-rotation)
- [Režim smyčky](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Prosinec 2025

- [Ladění profilu](../GettingHelp/ProfileTuning.md) od @robrub

## Říjen 2025

- DiaKEM: nové instalace po upgradu serverů nefungují @psonnera
- Odstraněna upravená aplikace pro Libre 2 (zastaralá): nefunguje s novými senzory @psonnera
- Přepracována stránka Omnipod Dash @XiTatiON

## Srpen 2025

- Aktualizovány verze a požadavky na Android Studio
- Přidáno vydání [3.3.2.1](#version3321), odstraněny zmínky o Androidu 16 (opraveno)
- Přidáno [Sestavení v prohlížeči](#browser-build) @Angus

## Květen 2025

- Přidána [stránka o přechodu na 3.2.0.4](#update-aaps-3204) @psonnera

## Leden 2025

- Rychlý bolus – [funkce dlouhého stisknutí](#Preferences-quick-wizard) @emilise
- Stránka [Dynamická ISF](../DailyLifeWithAaps/DynamicISF.md) přepsána @emilise

## Prosinec 2024

- Dokumentace [verze 3.3](#version3300) @emilise

## Listopad 2024

- Aktualizace stránky [Váš profil AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Přeorganizován obsah o [chytrých hodinkách s Wear OS](../WearOS/BuildingAapsWearOS.md) @psonnerat

## Říjen 2024

- Aktualizace několika stránek:
  - [Jak dlouho to bude trvat](#preparing-how-long-will-it-take), [Přehled komponent](../DailyLifeWithAaps/CobCalculation.md), [Plnění cílů](../SettingUpAaps/CompletingTheObjectives.md), [Váš profil AAPS](../SettingUpAaps/YourAapsProfile.md), [Konfigurace](../SettingUpAaps/ConfigBuilder.md) a [Předvolby](../SettingUpAaps/Preferences.md), [Obrazovky AAPS](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Kalkulace COB](../DailyLifeWithAaps/CobCalculation.md), [Dynamická ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Návod na sestavení pro Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Technické práce (proces nasazení dokumentace, uspořádání souborů...) @psonnerat a @emilise

***

Chybí historie od března 2022 do září 2024

Při přepracování pro verzi 3.2 byly odstraněny některé zastaralé informace. Najdete je v předchozí verzi dokumentace:

Dokumentace AAPS 3.1 je k dispozici [zde](https://androidaps.readthedocs.io/en/3.1/index.html).

***

## Únor 2022

- [Varovná značka kvality glykémie](#aaps-screens-bg-warning-sign) @tanja
- [Aktualizace pumpy Medtronic](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Nutné kontroly po aktualizaci na AAPS 3.0](Update3_0.md) @tanja
- [Omnipod Dash](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Aktualizace dokumentace pro AAPS 3.0 (částečně) @xJoe
- [Wear OS pro AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Leden 2022

- [Řešení problémů s Android Studiem](../GettingHelp/TroubleshootingAndroidStudio) – aktualizace @tanja

## Prosinec 2021

- [Sestavení APK](../SettingUpAaps/BuildingAaps.md) – aktualizace na Android Studio Arctic Fox | 2020.3.1 @tanja
- Přidány informace o [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

## Listopad 2021

- Doporučený postup kalibrace senzoru Libre 2
- [ISF](../UsefulLinks/FAQ.md) – nové vysvětlení vlivu
- Aktualizace stránky [Řešení problémů s Android Studiem](../GettingHelp/TroubleshootingAndroidStudio)
- Odstraněna upravená aplikace [Dexcom](../CompatibleCgms/DexcomG6.md), protože je zastaralá

## Říjen 2021

- [Poznámky k vydání](ReleaseNotes.md) AAPS 3.0 beta

## Září 2021

- Doporučená specifikace počítače pro [sestavení aplikace AAPS](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Červen 2021

- [Ruční instalace ciferníku (sideload)](../WearOS/WearOsSmartwatch.md)

## Duben 2021

- Seznam [komunikačních zařízení](#CompatiblePumps-additional-communication-device) pro pumpy Omnipod a Medtronic
- Predikce AAPS v [Nightscoutu](#Nightscout-manual-nightscout-setup)

## Březen 2021

- Komunikace vývojářů se přesunula z gitteru na [discord](https://discord.gg/4fQUWHZ4Mw)

## Únor 2021

- Nový navigační panel a [přepínač jazyka](../NavigateDoc/ChangeLanguageVersion.md)

## Leden 2021

- [Karta Akce](#screens-action-tab) – více podrobností na stránce „Obrazovky AAPS“
- Dexcom G6 s aplikací [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- [Stav baterie](#screens-sensor-level-battery) čtečky Libre smart reader
- [Cíle](#objectives-objective3) – nové otázky
- Další [nové funkce AAPS 2.8.0](#Releasenotes-version-2-8-0)

## Prosinec 2020

- [Libre 2](../CompatibleCgms/Libre2.md) – upravená aplikace nefunguje se senzory z USA
- [Pevně naprogramované limity OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 – ruční instalace služeb Google Play

## Říjen 2020

- Accu-Chek Combo – aktualizace [úpravy času při změně na letní čas](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight – možnost [nahrávat absolutní hodnoty](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Záznamy (logy) – více podrobností o [umístění složky](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros – aktuální stav
- [SMS příkazy – synchronizace času](../RemoteFeatures/SMSCommands.md)

## Září 2020

- Velká aktualizace pro novou verzi AAPS 2.7
- Podrobnosti viz `release notes <Releasenotes-version-2-7-0>`

## Červen 2020

- Libre 2 – více podrobností o upravené aplikaci Libre Link a použití Bluetooth vysílačů
- [Cestování mezi časovými pásmy](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) s Libre 2

## Květen 2020

- [Prodloužený bolus jen pro pumpy Dana a Insight](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Vypnutí vibrací u Insight](#Accu-Chek-Insight-Pump-vibration) (jen firmware 3.x)
- [Minimální změna požadavku](#Preferences-minimal-request-change) pro menší počet oznámení v režimu otevřené smyčky
- Upravená aplikace Libre Link – kontrola, zda je správně upravená
- [Predikční křivky](#aaps-screens-prediction-lines) – více podrobností

## Duben 2020

- Zpětné zadání inzulínu (tj. podaného stříkačkou)
- Podpora Androidu 6 skončí v příští verzi master

## Březen 2020

- [Sestavení APK v Android Studiu 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS s firmwarem v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **zatím nelze s AAPS používat!**
- [Prodloužený bolus a přepnutí na otevřenou smyčku](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Aktualizace APK v Android Studiu 3.6.1](../Maintenance/UpdateToNewVersion)

## Únor 2020

- Upozornění k automatizaci
- [Autosens](#Open-APS-features-autosens) – krátké vysvětlení
- Alternativy k Péči
- Funkce [Prodloužený bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) – uzavřená smyčka bude vypnuta
- Nový [plugin Lokální profil](../SettingUpAaps/ConfigBuilder.md)
- Ukázkové nastavení – aktualizace Dexcom G6
- [Verze 2.6.0](#Releasenotes-version-2-6-0) – hlavní nové funkce
- [Komplikace pro Wear](../WearOS/WearOsSmartwatch.md)

## Leden 2020

- [Ruční oprava sacharidů](#screens-bolus-carbs) pro chybně zadané sacharidy
- [Velikost obrázků](../SupportingAaps/HowToEditTheDocs.md) při úpravách dokumentace

## Prosinec 2019

- [Android Auto](../RemoteFeatures/AndroidAuto.md) – nastavení se snímky obrazovky
- [Accu-Chek Insight a Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) – jak je přesto používat
- [Glimp](#Config-Builder-bg-source) – podporována verze 4.15.57 a novější
- [Ciferníky](../WearOS/WearOsSmartwatch.md) – velká aktualizace, mnohem více podrobností
- [Komplikace ciferníku](#Watchfaces-complications) – používejte svůj oblíbený ciferník s daty z AAPS

## Listopad 2019

- [Automatizace – vypnutí při zakázání smyčky](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 – aktualizace výměny vysílače](#xdrip-replace-transmitter)
- [Prodloužený bolus – proč nefunguje se smyčkou](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Časté dotazy – sport](#FAQ-sports)
- [Hlavní obrazovka – křivky v grafu](#aaps-screens-main-graph)
- [Insight – vypnutí absolutních hodnot v NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Pumpa Medtronic – možné zdvojené záznamy](../CompatiblePumps/MedtronicPump.md)
- [Nový návod pro Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Přepnutí profilu s procentem – příklad](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Aktualizace SMS příkazů](../RemoteFeatures/SMSCommands.md)
- [Řešení problémů s Android Studiem](../GettingHelp/TroubleshootingAndroidStudio)
- [Řešení problémů – sbírka odkazů](../GettingHelp/GeneralTroubleshooting.md)
- Aktualizace – rychlý přehled pro zkušené uživatele
- Dokumentace – aktualizace stránek [úpravy](#edit-the-docs-code-syntax) a [překladu](#translations-translation-of-the-documentation).

## Říjen 2019

- Aktualizace pro [AAPS verze 2.5](#Releasenotes-version-2-5-0) (hlavně na [stránce o aktualizaci](../Maintenance/UpdateToNewVersion.md))
- [AccuChek Insight – možnosti záznamů](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Kalkulace COB na samostatné stránce](../DailyLifeWithAaps/CobCalculation.md)
- [COB – detekce chybné hodnoty COB](#CobCalculation-detection-of-wrong-cob-values)
- [Řešení problémů specifických pro Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Aktualizace cílů pro verzi 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Aktualizace předvoleb](../SettingUpAaps/Preferences.md)
- [Inhibitory SGLT-2 - nepoužívat při smyčce](#PreparingForAaps-no-sglt-2-inhibitors)
- [Řešení problémů se SMS příkazy](#SMSCommands-troubleshooting)
- [xDrip – aktualizace výměny vysílače G6](#xdrip-replace-transmitter)

## Září 2019

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Bolusová kalkulačka](#AapsScreens-wrong-cob-detection) – pomalé vstřebávání sacharidů
- [Zabezpečení Nightscoutu](#Nightscout-security-considerations)
- [Posun času profilu](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (více podrobností)
- [Vzdálený dohled](../RemoteFeatures/RemoteMonitoring.md)
- [Co je systém uzavřené smyčky?](#Introduction-what-does-hybrid-closed-loop-mean)

## Srpen 2019

- Region upravené aplikace Dexcom G6
- [Nový vysílač Dexcom G6](#xdrip-connect-g6-transmitter-for-the-first-time) („firefly“ / 8G...)
- Co potřebuji? – nová struktura a další informace
- Nová struktura
