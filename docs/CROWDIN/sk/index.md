# Vitajte v dokumentácii AAPS

![obrázok](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

31 October 2026: Version 4.0.0 is out. Čo je nové, nájdete v [poznámkach k vydaniu](#latestrelease). Pri aktualizácii postupujte podľa [návodu na aktualizáciu](./Maintenance/UpdateToNewVersion.md).

```

Android APS (**AAPS**) je aplikácia s otvoreným zdrojovým kódom pre ľudí s diabetom, ktorí sú závislí od inzulínu. Je to systém umelého pankreasu (APS), ktorý beží na smartfónoch s Androidom. **AAPS** používa algoritmus OpenAPS a snaží sa robiť to, čo robí skutočný pankreas: udržiavať hladinu cukru v krvi v zdravých hraniciach pomocou automatického dávkovania inzulínu. Na používanie **AAPS** potrebujete **tri** kompatibilné zariadenia: **(1)** telefón s Androidom, **(2)** senzor na kontinuálne monitorovanie glykémie (CGM) a **(3)** inzulínovú pumpu schválenú FDA/CE. Môžete pridať aj **(4)** cloudové služby na vzdialené ovládanie **AAPS**, zdieľanie údajov a ich ukladanie na reportovací server a **(5)** inteligentné hodinky.

Táto dokumentácia vysvetľuje, ako **AAPS** nastaviť a používať. V dokumentácii **AAPS** sa môžete pohybovať pomocou ponuky vľavo (a praktickej funkcie **Search docs** (hľadať v dokumentácii)) alebo pomocou [obsahu](#index-aaps-documentation-index) na konci tejto stránky.

## Prehľad dokumentácie AAPS („dokumentácia“)

V sekcii **1) Začíname** stránka [Úvod](Getting-Started/Introduction.md) vysvetľuje základnú myšlienku, na čo slúži systém umelého pankreasu (APS). Opisuje všeobecné pozadie používania okruhu, prečo vzniklo **AAPS**, porovnáva **AAPS** s inými systémami a venuje sa bezpečnosti. Radí, ako sa o **AAPS** rozprávať s vaším lekárskym tímom, vysvetľuje, prečo si aplikáciu **AAPS** musíte zostaviť sami a nemôžete si ju iba stiahnuť, a dáva prehľad o typickom prepojení zariadení v systéme **AAPS**. Venuje sa aj prístupnosti a tomu, komu môže **AAPS** pomôcť.

Stránka [Príprava na štart s AAPS](./Getting-Started/PreparingForAaps.md) podrobnejšie opisuje bezpečnostné hľadiská a telefóny, CGM (senzory na kontinuálne monitorovanie glykémie) a inzulínové pumpy, ktoré sú s **AAPS** kompatibilné. Dáva prehľad o celom postupe, ktorým prejdete, a uvádza približný časový plán, kým budete môcť využívať všetky funkcie **AAPS**. Táto sekcia vás technicky pripraví, aby ste svoj systém **AAPS** zostavili čo najrýchlejšie a najefektívnejšie. The subsection [Compatible CGMs](./Getting-Started/CompatiblesCgms.md) explains how to optimize your CGM setup and which smoothing options are best.

Teraz, keď dobre rozumiete celému postupu, môžete začať zostavovať svoj okruh **AAPS**.

Sekcia **2) Zostavenie aplikácie** vysvetľuje, prečo si aplikáciu **AAPS** musíte zostaviť sami a nemôžete si ju iba stiahnuť. Krok za krokom vás prevedie [jej zostavením](./SettingUpAaps/BuildingAaps.md) (v prehliadači, v Android Studiu alebo z príkazového riadku) a potom prenosom a inštaláciou do telefónu. Začína sa voliteľným krokom: nastavením [samostatného účtu Google](./UsefulLinks/DedicatedGoogleAccountForAaps.md), kde budete mať svoje zostavenia a zálohy. Vysvetľuje aj [overovanie vývojárov pre Android](#android-developer-verification), zmenu, ktorú Google zavádza od septembra 2026 a ktorá ovplyvňuje inštaláciu vlastnoručne zostavených aplikácií.

Sekcia **3) Nastavenie reportovacieho servera** sa venuje výberu a [nastaveniu reportovacieho servera](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout alebo Tidepool), aby ste mohli svoje údaje kontrolovať a zdieľať.

Sekcia **4) [Konfigurácia AAPS](./SettingUpAaps/SetupWizard.md)** sa venuje nastaveniu aplikácie **AAPS** pomocou sprievodcu nastavením, jej prepojeniu s aplikáciou CGM a so skutočnou alebo virtuálnou inzulínovou pumpou a tiež prepojeniu **AAPS** s vaším reportovacím serverom. Potom spoznáte všetko, čo **AAPS** dokáže, a to bezpečne, opatrne a krok za krokom. Tak budete mať istotu, že vy (alebo vaše dieťa) dobre poznáte všetky úrovne a nastavenia v ponukách a viete sa v nich pohybovať, skôr než prejdete do ďalšej fázy, ktorá sa zvyčajne nazýva ďalší „cieľ“. Takto postupujete ďalej, kým nemáte dosť skúseností, aby ste mohli začať používať pokročilejšie možnosti aplikácie. Tieto ciele sú špeciálne navrhnuté tak, aby postupne odomykali ďalšie možnosti **AAPS** a aby ste prešli z otvoreného okruhu na uzavretý okruh.

Sekcia **5) [Každodenný život s AAPS](./DailyLifeWithAaps/AapsScreens.md)** sa venuje kľúčovým funkciám **AAPS**, aby ste vedeli **AAPS** používať (a prispôsobiť si ho). Patrí sem pochopenie obrazoviek, aktívnych sacharidov (COB), citlivosti, dynamickej ISF, prepínania profilov, dočasných cieľov, predĺžených sacharidov (eSacharidov), automatizácií a [kontroly údajov](./Maintenance/Reviewing.md) v prehliadači histórie a v štatistike. Venuje sa aj častým témam, napríklad ako zvládať rôzne druhy jedál, výmenu kanyly a senzora, aktualizácie smartfónu, prechod na letný čas, [cestovanie s AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) a šport. Časté otázky a odpovede nájdete v sekcii riešenia problémov.

Sekcia **6) [Vzdialené funkcie AAPS](./RemoteFeatures/RemoteControl.md)** ukazuje jednu zo skutočných silných stránok **AAPS**. Existuje veľa možností, ako na diaľku posielať príkazy do **AAPS** alebo iba sledovať jeho údaje. Je to rovnako užitočné pre opatrovateľov, ktorí chcú používať **AAPS** pre deti, ako aj pre dospelých s diabetom, ktorí chcú sledovať svoju glykémiu (a ďalšie údaje) pohodlnejšie ako iba v telefóne (na hodinkách, v aute _atď._), alebo chcú, aby ich údaje sledovali aj blízki ľudia. Táto sekcia tiež vysvetľuje, ako používať Android Auto, aby ste videli glykémiu aj v aute.

Sekcia **7) [Inteligentné hodinky s Wear OS](./WearOS/BuildingAapsWearOS.md)** obsahuje informácie a postupy, ako používať inteligentné hodinky s Androidom **Wear OS** so špeciálnymi ciferníkmi **AAPS** alebo vlastnými ciferníkmi, buď na vzdialené ovládanie telefónu, alebo iba na zobrazenie údajov.


Sekcia **8) [Údržba AAPS](./Maintenance/ExportImportSettings.md)** vysvetľuje, ako exportovať a zálohovať nastavenia (čo je veľmi dôležité pre prípad, že telefón stratíte alebo pokazíte), obsahuje poznámky k najnovšej verzii, opisuje, ako aktualizovať **AAPS**, a vysvetľuje, čo sa stane, keď sa končí podpora verzie. Počítajte s tým, že ročne vyjde jedna nová verzia a 2–3 povinné aktualizácie. Tieto aktualizácie musíte robiť ako pri každom softvéri, pretože sa v nich opravujú drobné chyby a **AAPS** sa zlepšuje. Pre aktualizácie existuje samostatná sekcia riešenia problémov s častými otázkami.

Sekcia **9) [Pomoc a riešenie problémov](GettingHelp/WhereCanIGetHelp.md)** vám ukáže, kde najlepšie nájdete všeobecnú pomoc s **AAPS**. Je to jediné miesto, kam ísť, keď niečo nefunguje: stránka [Riešenie problémov](GettingHelp/GeneralTroubleshooting.md) zhromažďuje podľa tém riešenia najčastejších problémov a stránka [Najčastejšie otázky používateľov APS](UsefulLinks/FAQ.md) odpovedá na časté otázky. Je to veľmi dôležité, aby ste sa mohli čo najrýchlejšie spojiť s ostatnými, vyjasniť si otázky a vyriešiť bežné problémy. Veľa ľudí už **AAPS** úspešne používa, ale každý má niekedy otázku, ktorú sám nevyrieši. Keďže používateľov je veľa, odpovede na otázky prichádzajú zvyčajne veľmi rýchlo, väčšinou do niekoľkých hodín. Nebojte sa požiadať o pomoc, hlúpe otázky neexistujú! Povzbudzujeme používateľov s akoukoľvek úrovňou skúseností, aby sa pýtali toľko, koľko potrebujú, aby mohli s AAPS bezpečne začať. Táto sekcia obsahuje všeobecné riešenie problémov pre **AAPS** a **AAPSClient** (sprievodná aplikácia na sledovanie) a vysvetľuje, ako poslať vaše údaje **AAPS** (log súbory) vývojárom na preskúmanie, ak si myslíte, že ide o technický problém **AAPS**.

Sekcia **10)** sa venuje **[pokročilým možnostiam AAPS](./AdvancedOptions/FullClosedLoop.md)**, napríklad ako prejsť od používania **AAPS** ako hybridného uzavretého okruhu (s bolusmi k jedlu _atď._) k plne uzavretému okruhu (bez bolusov), ako [vyladiť profil](./GettingHelp/ProfileTuning.md) a používať Autotune, a opisuje vývojársky a engineering režim. Väčšina používateľov si úplne vystačí s hlavnou verziou **AAPS** („Master“) a tieto možnosti nepotrebuje. Táto sekcia je pre používateľov, ktorí už majú dobrú kontrolu a chcú svoj systém ešte zlepšiť.

In section **11) [How to support AAPS](SupportingAaps/HowCanIHelp.md)** we provide information so that you can support this project. Môžete prispieť peniazmi, vybavením alebo svojimi znalosťami. You can suggest/make changes to the documentation yourself, help with [translation of the documentation](SupportingAaps/Translations.md) and provide your data through the Open Humans project.

Sekcia **12) Zdroje** obsahuje archívnu alebo doplňujúcu dokumentáciu, vrátane podsekcie pre [lekárov](UsefulLinks/ClinicianGuideToAaps.md), ktorí sa zaujímajú o technológiu umelého pankreasu s otvoreným zdrojovým kódom, ako je **AAPS**, alebo pre pacientov, ktorí chcú tieto informácie zdieľať so svojimi lekármi. Táto téma je opísaná aj v úvode. V tejto sekcii nájdete aj ďalšie odkazy a zdroje o diabete a používaní okruhu. Obsahuje [Slovník](./UsefulLinks/Glossary.md), zoznam skratiek (alebo krátkych názvov), ktoré sa v **AAPS** používajú. Tu napríklad zistíte, čo znamenajú skratky ISF alebo TT.


 ### Chcete začať s **AAPS**? Viac o **AAPS** si prečítajte v časti [Úvod](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
Bezpečnosť **AAPS** závisí od bezpečnostných funkcií vášho hardvéru (telefón, pumpa, CGM). Používajte iba plne funkčnú inzulínovú pumpu a CGM schválené FDA/CE. Nepoužívajte pokazené, upravené alebo vlastnoručne vyrobené inzulínové pumpy ani prijímače CGM. Používajte iba originálny spotrebný materiál (zavádzače, kanyly a zásobníky inzulínu), ktorý výrobca schválil na použitie s vašou pumpou a CGM. Používanie neodskúšaného alebo upraveného materiálu môže spôsobiť nepresnosti a chyby v dávkovaní inzulínu, čo pre používateľa znamená vážne riziko. 

Nepoužívajte **AAPS**, ak užívate SGLT-2 inhibítory (gliflozíny), pretože znižujú hladinu cukru v krvi. You increase the risk of diabetic ketoacidosis (DKA) due to reduced insulin delivery and hypoglycemia due to lowered blood sugar levels. 
```

```{admonition} Disclaimer
:class: note

- Všetky tu opísané informácie a kód slúžia iba na informačné a vzdelávacie účely. [Nightscout](https://nightscout.github.io/) a **AAPS** používate na vlastné riziko. Informácie ani kód nepoužívajte na prijímanie zdravotných rozhodnutí. Nightscout sa v súčasnosti nesnaží o súlad s pravidlami ochrany súkromia HIPAA. 
- Kód z github.com používate bez akejkoľvek záruky alebo oficiálnej podpory. Podrobnosti nájdete v súbore LICENSE tohto repozitára.
- Všetky názvy produktov a spoločností, ochranné známky, servisné známky, registrované ochranné známky a registrované servisné známky sú majetkom ich príslušných vlastníkov. Ich použitie má iba informačný účel a neznamená žiadne prepojenie s nimi ani ich podporu.

**AAPS** nie je nijako spojené s týmito spoločnosťami ani nimi podporované: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) ani [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Obsah dokumentácie AAPS

```{toctree}
:caption: Používanie tejto dokumentácie

Zmena jazyka a verzie <./NavigateDoc/ChangeLanguageVersion.md>
Vyhľadávanie v dokumentácii <./NavigateDoc/SearchDoc.md>
Aktualizácie a zmeny dokumentácie <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Začíname

Úvod do APS a AAPS <./Getting-Started/Introduction.md>
Príprava na štart s AAPS <./Getting-Started/PreparingForAaps.md>
Prehľad komponentov <./Getting-Started/ComponentOverview.md>
- Kompatibilné pumpy <./Getting-Started/CompatiblePumps.md>
- Kompatibilné CGM <./Getting-Started/CompatiblesCgms.md>
- Telefóny  <./Getting-Started/Phones.md>
- Inteligentné hodinky a AAPS  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Zostavenie aplikácie

Samostatný účet Google pre AAPS (voliteľné) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Zostavenie AAPS <./SettingUpAaps/BuildingAaps.md>
- Zostavenie v prehliadači <./SettingUpAaps/BrowserBuild.md>
- Zostavenie v Android Studiu <./SettingUpAaps/ComputerBuild.md>
- Návod na zostavenie z príkazového riadku <./SettingUpAaps/CLIBuild.md>
Prenos a inštalácia AAPS do smartfónu <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Nastavenie reportovacieho servera

Nastavenie reportovacieho servera <./SettingUpAaps/SettingUpTheReportingServer.md>
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
:caption: 5) Každodenný život s AAPS

Obrazovky AAPS <./DailyLifeWithAaps/AapsScreens.md>
Kľúčové funkcie AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Výpočet COB <./DailyLifeWithAaps/CobCalculation.md>
Detekcia citlivosti <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamická ISF <./DailyLifeWithAaps/DynamicISF.md>
Prepnutie profilu a percento profilu <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Dočasné ciele <./DailyLifeWithAaps/TempTargets.md>
Predĺžené sacharidy / „eSacharidy“ <./DailyLifeWithAaps/ExtendedCarbs.md>
Rýchly sprievodca (bolusy na jedno ťuknutie) <./DailyLifeWithAaps/QuickWizards.md>
Scény (predvoľby pre situácie) <./DailyLifeWithAaps/Scenes.md>
Automatizácia <./DailyLifeWithAaps/Automations.md>
Rýchle spustenie (panel rýchlych akcií v prehľade) <./DailyLifeWithAaps/QuickLaunch.md>
Widgety na domovskej obrazovke <./DailyLifeWithAaps/Widgets.md>
Jedlo (vaša databáza jedál) <./DailyLifeWithAaps/Food.md>
Globálne vyhľadávanie <./DailyLifeWithAaps/GlobalSearch.md>
Kontrola údajov <./Maintenance/Reviewing.md>
AAPS pre deti <./DailyLifeWithAaps/AapsForChildren.md>
Pumpy a kanyly <./DailyLifeWithAaps/PumpsAndCannulas.md>
Zmena časového pásma a letný čas <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Vzdialené funkcie AAPS

Vzdialené sledovanie <./RemoteFeatures/RemoteMonitoring.md>
Sledovanie AAPS (bez zasahovania do systému AAPS) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Vzdialené ovládanie AAPS <./RemoteFeatures/RemoteControl.md>
Aplikácia AAPSClient <./RemoteFeatures/AapsClient.md>
Ovládanie Master ↔ Client (podpísané vzdialené ovládanie) <./RemoteFeatures/ClientMasterControl.md>
SMS príkazy <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Inteligentné hodinky s Wear OS

Zostavenie aplikácie AAPS pre Wear OS <./WearOS/BuildingAapsWearOS.md>
Nastavenie AAPS na hodinkách s Wear OS <./WearOS/WearOsSmartwatch.md>
Ovládanie AAPS pomocou inteligentných hodiniek s Wear OS <./RemoteFeatures/RemoteControlWearOS.md>
Referenčný dokument pre vlastné ciferníky <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Stránka na výmenu vlastných ciferníkov <./ExchangeSiteCustomWatchfaces/index.md>

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
:caption: 9) Pomoc a riešenie problémov

Kde získať pomoc <./GettingHelp/WhereCanIGetHelp.md>
Riešenie problémov (začnite tu) <./GettingHelp/GeneralTroubleshooting.md>
- Problémy súvisiace s Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Riešenie problémov s NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Riešenie problémov s Android Studiom <./GettingHelp/TroubleshootingAndroidStudio.md>
- Zostavenie v prehliadači: riešenie problémov <./GettingHelp/BrowserBuildTroubleshooting.md>
- Preinštalovanie AAPS s novým úložiskom kľúčov <./GettingHelp/ReinstallAaps.md>
- Prístup k log súborom <./GettingHelp/AccessingLogFiles.md>
Najčastejšie otázky používateľov APS <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Pokročilé možnosti AAPS

Plne uzavretý okruh <./AdvancedOptions/FullClosedLoop.md>
Ladenie profilu AAPS <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Koncentrácia inzulínu <./AdvancedOptions/InsulinConcentration.md>
Vývojová vetva <./AdvancedOptions/DevBranch.md>
Zostavenie v prehliadači: cherry-pick commitu <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Ako podporiť AAPS

Ako pomôcť s AAPS <./SupportingAaps/HowCanIHelp.md>
Ako upravovať dokumentáciu <./SupportingAaps/HowToEditTheDocs.md>
Preklad aplikácie a dokumentácie <./SupportingAaps/Translations.md>
Stav prekladu aplikácie a dokumentácie <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Zdroje

Slovník <./UsefulLinks/Glossary.md>
Užitočné zdroje na prečítanie pred začatím <./UsefulLinks/BackgroundReading.md>
Pre lekárov – všeobecný úvod a príručka k AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
