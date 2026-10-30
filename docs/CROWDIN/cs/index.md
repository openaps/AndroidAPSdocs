# Vítejte v dokumentaci AAPS

![obrázek](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 xx xxxx 202x : Vyšla verze {{ aaps_version }}.x.x. V [poznámkách k vydání](#latestrelease) zjistíte, co je nového. Pro aktualizaci postupujte podle [návodu k aktualizaci](./Maintenance/UpdateToNewVersion.md).

```

Android APS (**AAPS**) je open source aplikace pro lidi s diabetem léčeným inzulínem. Je to systém umělé slinivky (APS), který běží na chytrých telefonech s Androidem. **AAPS** používá softwarový algoritmus OpenAPS a snaží se dělat to, co skutečná slinivka: udržovat glykémii ve zdravých mezích pomocí automatického dávkování inzulínu. Pro používání **AAPS** potřebujete **tři** kompatibilní zařízení: **(1)** telefon s Androidem, **(2)** systém kontinuální monitorace glukózy (CGM) a **(3)** inzulínovou pumpu schválenou FDA/CE. Můžete přidat také **(4)** cloudové služby pro vzdálené ovládání **AAPS**, sdílení dat a jejich ukládání na reportovací server a **(5)** chytré hodinky.

Tato dokumentace vysvětluje, jak **AAPS** nastavit a používat. V dokumentaci **AAPS** se můžete pohybovat pomocí nabídky vlevo (a praktického **vyhledávání v dokumentaci**), nebo pomocí [obsahu](#index-aaps-documentation-index) na konci této stránky.

## Přehled dokumentace AAPS (dále jen „dokumentace“)

Část **1) Začínáme**: stránka [Úvod do APS a AAPS](Getting-Started/Introduction.md) vysvětluje obecný princip a k čemu slouží systém umělé slinivky (APS). Popisuje obecné základy smyčky, proč vznikl **AAPS**, porovnává **AAPS** s jinými systémy a zabývá se bezpečností. Radí, jak o **AAPS** mluvit s lékařským týmem, vysvětluje, proč si aplikaci **AAPS** musíte sestavit sami a nemůžete ji jen stáhnout, a dává přehled o typickém propojení systému **AAPS**. Zabývá se také dostupností a tím, komu **AAPS** pravděpodobně pomůže.

[Příprava na začátek s AAPS](./Getting-Started/PreparingForAaps.md) podrobněji popisuje bezpečnostní hlediska a telefony, CGM (systémy kontinuální monitorace glukózy) a inzulínové pumpy, které jsou s **AAPS** kompatibilní. Dává přehled o postupu, kterým projdete, a uvádí přibližný časový plán, za jak dlouho získáte plnou funkčnost **AAPS**. Tato část vás technicky připraví, abyste svůj systém **AAPS** sestavili co nejrychleji a nejefektivněji. Podčást [Kompatibilní CGM](./Getting-Started/CompatiblesCgms.md) vysvětluje, jak optimalizovat nastavení CGM a které možnosti vyhlazování jsou nejlepší.

Teď, když dobře rozumíte celému postupu, můžete začít sestavovat svou smyčku **AAPS**.

Část **2) Sestavení aplikace** vysvětluje, proč si aplikaci **AAPS** musíte sestavit sami a nemůžete ji jen stáhnout. Krok za krokem vás provede [sestavením](./SettingUpAaps/BuildingAaps.md) (v prohlížeči, v Android Studiu nebo z příkazové řádky) a pak přenosem a instalací do telefonu. Začíná volitelným krokem: založením [samostatného účtu Google](./UsefulLinks/DedicatedGoogleAccountForAaps.md) pro vaše sestavení a zálohy. Vysvětluje také [ověřování vývojářů Androidu](#android-developer-verification). Je to změna, kterou Google zavádí od září 2026 a která ovlivňuje instalaci vlastnoručně sestavených aplikací.

Část **3) Nastavení reportovacího serveru** popisuje výběr a [nastavení reportovacího serveru](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout nebo Tidepool), abyste mohli svá data prohlížet a sdílet.

Část **4) [Konfigurace AAPS](./SettingUpAaps/SetupWizard.md)** popisuje nastavení aplikace **AAPS** pomocí průvodce nastavením, propojení s aplikací CGM a se skutečnou nebo virtuální inzulínovou pumpou a také propojení **AAPS** s reportovacím serverem. Pak se seznámíte se vším, co **AAPS** umí, a to bezpečně, v přiměřeném tempu a krok za krokem. Díky tomu vy (nebo vaše dítě) dobře poznáte všechny úrovně a nastavení v nabídkách a budete s nimi jistě pracovat, než přejdete do další fáze. Té se obvykle říká další „cíl“. Takto postupujete dál, dokud nemáte dost zkušeností, abyste mohli začít používat pokročilejší možnosti aplikace. Tyto cíle jsou navrženy tak, aby postupně odemykaly další možnosti **AAPS** a převedly vás z otevřené smyčky na uzavřenou smyčku.

Část **5) [Každodenní život s AAPS](./DailyLifeWithAaps/AapsScreens.md)** popisuje klíčové funkce **AAPS**, které vám pomohou **AAPS** používat (a přizpůsobit si ho). Patří sem pochopení obrazovek, aktivních sacharidů (COB), citlivosti, dynamické ISF, přepínání profilů, dočasných cílů, rozložených sacharidů (eSacharidů), automatizací a [kontroly dat](./Maintenance/Reviewing.md) v prohlížeči historie a ve statistikách. Popisuje také častá témata, například jak zvládat různé typy jídel, výměnu kanyly a senzoru, aktualizace telefonu, přechod na letní čas, [cestování s AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) a sport. Časté otázky a odpovědi najdete v části o řešení problémů.

Část **6) [Vzdálené funkce AAPS](./RemoteFeatures/RemoteControl.md)** ukazuje jednu z velkých předností **AAPS**. Existuje mnoho možností, jak na dálku posílat příkazy do **AAPS** nebo jen sledovat jeho data. To je užitečné jak pro pečovatele, kteří chtějí používat **AAPS** u nezletilých, tak pro dospělé s diabetem, kteří chtějí sledovat svou glykémii (a další údaje) pohodlněji než jen v telefonu (na hodinkách, v autě _atd._), nebo chtějí, aby data sledovali i jejich blízcí. Tato část také radí, jak používat Android Auto, abyste viděli glykémii v autě.

Část **7) [Chytré hodinky s Wear OS](./WearOS/BuildingAapsWearOS.md)** obsahuje informace a postupy pro používání chytrých hodinek s Androidem **Wear OS** s ciferníky určenými pro **AAPS** nebo s vlastními ciferníky, buď jako dálkové ovládání telefonu, nebo jen jako displej.


Část **8) [Údržba AAPS](./Maintenance/ExportImportSettings.md)** popisuje, jak exportovat a zálohovat nastavení (to je velmi důležité pro případ, že telefon ztratíte nebo rozbijete), uvádí poznámky k nejnovější verzi, podrobně popisuje aktualizaci **AAPS** a vysvětluje, co se stane, když verze dosáhne konce podpory. Můžete počítat s jednou novou verzí a 2–3 povinnými aktualizacemi ročně. Tyto aktualizace musíte provádět jako u každého softwaru, protože se v nich opravují drobné chyby a **AAPS** se vylepšuje. Pro aktualizace existuje samostatná část řešení problémů s častými dotazy.

Část **9) [Pomoc a řešení problémů](GettingHelp/WhereCanIGetHelp.md)** vám ukáže nejlepší místa, kde najít obecnou pomoc s **AAPS**. Je to jediné místo, kam jít, když něco nefunguje: rozcestník [Řešení problémů](GettingHelp/GeneralTroubleshooting.md) shromažďuje podle témat řešení nejčastějších problémů a stránka [Nejčastější otázky uživatelů APS](UsefulLinks/FAQ.md) odpovídá na časté dotazy. To je velmi důležité, abyste se co nejrychleji spojili s ostatními, vyjasnili si otázky a vyřešili obvyklé potíže. Mnoho lidí už **AAPS** úspěšně používá, ale každý má někdy otázku, kterou sám nevyřeší. Díky velkému počtu uživatelů přicházejí odpovědi na otázky obvykle velmi rychle, většinou během několika hodin. Nebojte se požádat o pomoc, hloupé otázky neexistují! Doporučujeme uživatelům s jakoukoli úrovní zkušeností, aby se ptali tolikrát, kolikrát potřebují, aby mohli AAPS začít bezpečně používat. Tato část obsahuje obecné řešení problémů pro **AAPS** a **AAPSClient** (doprovodnou aplikaci pro sledování) a také vysvětluje, jak poslat data z **AAPS** (log soubory) vývojářům k prošetření, pokud si myslíte, že **AAPS** má technický problém, na který je třeba se podívat.

Část **10)** popisuje **[Pokročilé možnosti AAPS](./AdvancedOptions/FullClosedLoop.md)**, například jak přejít od používání **AAPS** jako hybridní uzavřené smyčky (bolusy na jídlo _atd._) k plně uzavřené smyčce (bez bolusů), jak [ladit profil](./GettingHelp/ProfileTuning.md) a používat Autotune. Podrobně popisuje také vývojový a inženýrský režim. Většina uživatelů si plně vystačí s hlavní („Master“) verzí **AAPS** a tyto možnosti nepotřebuje. Tato část je pro uživatele, kteří už mají dobrou kompenzaci a chtějí své nastavení dále zlepšit.

V části **11) [Jak podpořit AAPS](SupportingAaps/HowToEditTheDocs.md)** najdete informace o tom, jak můžete tento projekt podpořit. Můžete darovat peníze, vybavení nebo odborné znalosti. Můžete sami navrhovat a dělat změny v dokumentaci, pomoci s [překladem dokumentace](SupportingAaps/Translations) a poskytnout svá data přes projekt Open Humans.

Část **12) Zdroje** obsahuje archivní nebo doplňkovou dokumentaci, včetně podčásti pro [lékaře](UsefulLinks/ClinicianGuideToAaps.md), kteří se zajímají o open source technologii umělé slinivky, jako je **AAPS**, nebo pro pacienty, kteří chtějí tyto informace sdílet se svými lékaři. Tomuto tématu se věnuje i úvod. V této části najdete také další odkazy a zdroje o diabetu a smyčce. Obsahuje [Slovníček](./UsefulLinks/Glossary.md), seznam zkratek (neboli krátkých názvů) používaných v **AAPS**. Zde zjistíte například, co znamenají zkratky ISF nebo TT.


 ### Chcete začít s **AAPS**? Více o **AAPS** si přečtete v části [Úvod do APS a AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
Bezpečnost **AAPS** závisí na bezpečnostních funkcích vašeho hardwaru (telefon, pumpa, CGM). Používejte pouze plně funkční inzulínovou pumpu a CGM schválené FDA/CE. Nepoužívejte poškozené, upravené nebo vlastnoručně vyrobené inzulínové pumpy nebo přijímače CGM. Používejte pouze originální spotřební materiál (zavaděče, kanyly a zásobníky inzulínu) schválený výrobcem pro použití s vaší pumpou a CGM. Použití netestovaného nebo upraveného spotřebního materiálu může způsobit nepřesnosti a chyby v dávkování inzulínu, což pro uživatele znamená vážné riziko. 

Nepoužívejte **AAPS**, pokud užíváte SGLT-2 inhibitory (glifloziny), protože snižují glykémii. Zvyšujete tím riziko diabetické ketoacidózy (DKA) kvůli snížené dodávce inzulínu a riziko hypoglykémie kvůli snížené glykémii. 
```

```{admonition} Disclaimer
:class: note

- Všechny zde popsané informace a kód slouží pouze k informačním a vzdělávacím účelům. [Nightscout](https://nightscout.github.io/) a **AAPS** používáte na vlastní riziko. Informace ani kód nepoužívejte k lékařským rozhodnutím. Nightscout se nesnaží v současné době dodržovat zákon HIPAA. 
- Použití kódu z github.com je bez záruky nebo formální podpory jakéhokoliv druhu. Přečtěte licenci z této repozitoře pro další podrobnosti.
- Všechny názvy společností a produktů, ochranné známky, servisní známky, registrované ochranné známky a registrované servisní známky jsou vlastnictvím jejich příslušných držitelů. Jejich použití je pro informační účely a neznamená žádné spojení.

**AAPS** nemá žádné spojení s těmito firmami a není jimi podporován: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) ani [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Obsah dokumentace AAPS

```{toctree}
:caption: Používání této dokumentace

Změna jazyka a verze <./NavigateDoc/ChangeLanguageVersion.md>
Vyhledávání v dokumentaci <./NavigateDoc/SearchDoc.md>
Aktualizace a změny dokumentace <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Začínáme

Úvod do APS a AAPS <./Getting-Started/Introduction.md>
Příprava na začátek s AAPS <./Getting-Started/PreparingForAaps.md>
Přehled komponent <./Getting-Started/ComponentOverview.md>
- Kompatibilní pumpy <./Getting-Started/CompatiblePumps.md>
- Kompatibilní CGM <./Getting-Started/CompatiblesCgms.md>
- Telefony <./Getting-Started/Phones.md>
- Chytré hodinky a AAPS <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Sestavení aplikace

Samostatný účet Google pro AAPS (volitelné) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Sestavení AAPS <./SettingUpAaps/BuildingAaps.md>
- Sestavení v prohlížeči <./SettingUpAaps/BrowserBuild.md>
- Sestavení v Android Studiu <./SettingUpAaps/ComputerBuild.md>
- Návod na sestavení z příkazové řádky <./SettingUpAaps/CLIBuild.md>
Přenos a instalace AAPS na váš telefon <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Nastavení reportovacího serveru

Nastavení reportovacího serveru <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Konfigurace AAPS

Průvodce nastavením AAPS <./SettingUpAaps/SetupWizard.md>
Váš profil AAPS <./SettingUpAaps/YourAapsProfile.md>
Změny v konfiguraci AAPS <./SettingUpAaps/ChangeAapsConfiguration.md>
- Konfigurace (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Nastavení (Předvolby) <./SettingUpAaps/Preferences.md>
Plnění cílů <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Každodenní život s AAPS

Obrazovky AAPS <./DailyLifeWithAaps/AapsScreens.md>
Klíčové funkce AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Kalkulace COB <./DailyLifeWithAaps/CobCalculation.md>
Detekce citlivosti <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamická ISF (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
Přepnutí profilu a procento profilu <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Dočasné cíle <./DailyLifeWithAaps/TempTargets.md>
Rozložené sacharidy / „eCarbs“ <./DailyLifeWithAaps/ExtendedCarbs.md>
Rychlé bolusy (bolusy jedním klepnutím) <./DailyLifeWithAaps/QuickWizards.md>
Scény (předvolby situací) <./DailyLifeWithAaps/Scenes.md>
Automatizace <./DailyLifeWithAaps/Automations.md>
Rychlé spuštění (panel rychlých akcí v přehledu) <./DailyLifeWithAaps/QuickLaunch.md>
Widgety na domovské obrazovce <./DailyLifeWithAaps/Widgets.md>
Potraviny (vaše databáze potravin) <./DailyLifeWithAaps/Food.md>
Globální vyhledávání <./DailyLifeWithAaps/GlobalSearch.md>
Kontrola dat <./Maintenance/Reviewing.md>
AAPS pro děti <./DailyLifeWithAaps/AapsForChildren.md>
Pumpy a kanyly <./DailyLifeWithAaps/PumpsAndCannulas.md>
Změna časového pásma a letní čas <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Vzdálené funkce AAPS

Vzdálený dohled <./RemoteFeatures/RemoteMonitoring.md>
Sledování AAPS (bez interakce s AAPS systémem) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Vzdálené ovládání AAPS <./RemoteFeatures/RemoteControl.md>
Aplikace AAPSClient <./RemoteFeatures/AapsClient.md>
Ovládání master ↔ klient <./RemoteFeatures/ClientMasterControl.md>
SMS příkazy <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Chytré hodinky s Wear OS

Sestavení aplikace AAPS pro hodinky Wear OS <./WearOS/BuildingAapsWearOS.md>
Nastavení AAPS na hodinkách s Wear OS <./WearOS/WearOsSmartwatch.md>
Ovládání AAPS pomocí chytrých hodinek s Wear OS <./RemoteFeatures/RemoteControlWearOS.md>
Referenční příručka vlastního ciferníku <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Stránka pro vlastní ciferníky <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Údržba AAPS

Vytváření a obnova záloh <./Maintenance/ExportImportSettings.md>
Poznámky k vydání <./Maintenance/ReleaseNotes.md>
Co se změnilo v AAPS v4 <./Maintenance/V4Changes.md>
Aktualizace na novou verzi nebo větev (branch) <./Maintenance/UpdateToNewVersion.md>
- Aktualizace v prohlížeči (fork) <./Maintenance/UpdateBrowserBuild.md>
- Aktualizace pomocí Android Studia <./Maintenance/UpdateComputerBuild.md>
Konec podpory <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Pomoc a řešení problémů

Kde mohu získat pomoc? <./GettingHelp/WhereCanIGetHelp.md>
Řešení problémů (začněte zde) <./GettingHelp/GeneralTroubleshooting.md>
- Problémy související s Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Řešení problémů s NSClientem <./GettingHelp/TroubleshootingNsClient.md>
- Řešení problémů s Android Studiem <./GettingHelp/TroubleshootingAndroidStudio.md>
- Sestavení v prohlížeči: řešení problémů <./GettingHelp/BrowserBuildTroubleshooting.md>
- Přeinstalace AAPS s novým úložištěm klíčů <./GettingHelp/ReinstallAaps.md>
- Zpřístupnění log souborů <./GettingHelp/AccessingLogFiles.md>
Nejčastější otázky uživatelů APS <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Pokročilé možnosti AAPS

Plně uzavřená smyčka <./AdvancedOptions/FullClosedLoop.md>
Ladění profilu AAPS <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Koncentrace inzulínu <./AdvancedOptions/InsulinConcentration.md>
Vývojová větev <./AdvancedOptions/DevBranch.md>
Sestavení v prohlížeči: cherry-pick commitu <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Jak podpořit AAPS

Jak pomoci s AAPS <./SupportingAaps/HowCanIHelp.md>
Jak upravovat dokumentaci <./SupportingAaps/HowToEditTheDocs.md>
Jak překládat texty pro aplikaci AAPS nebo dokumentaci <./SupportingAaps/Translations.md>
Stav překladu textů pro aplikaci a dokumentaci <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Zdroje

Slovníček <./UsefulLinks/Glossary.md>
Užitečné informace k prostudování, než začnete <./UsefulLinks/BackgroundReading.md>
Pro lékaře – obecný úvod a průvodce k AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
