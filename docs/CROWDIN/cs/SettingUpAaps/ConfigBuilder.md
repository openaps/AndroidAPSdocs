# Konfigurace

Depending on your settings you can open Config Builder through a tab at the top of **AAPS**' screen or through the hamburger menu.

![Otevřít průvodce konfigurací](../images/ConfBuild_Open_AAPS30.png)

The **Config Builder** is the tab where you turn the modular features on and off. In the picture below, the boxes on the left-hand side (A) allow you to select which modules you want activated, the boxes on the right-hand side (C) allow you to view these as a tab (E) in **AAPS**. In case the right box is not activated, you can reach the function by using the hamburger menu (D) on the top left of the screen. See [Tab or hamburger menu](#tab-or-hamburger-menu) below.

When there are additional settings available within the module, you can click on the cog wheel (B) which will take you to the specific settings within preferences.

![Tlačítko konfigurace a ozubené kolo](../images/ConfBuild_ConfigBuilder_AAPS30.png)

(Config-Builder-tab-or-hamburger-menu)=

## Záložka nebo hamburger menu

Pomocí zaškrtávacího políčka pod symbolem oka se můžete rozhodnout, jak chcete otevírat odpovídající sekci programu.

![Záložka nebo hamburger menu](../images/ConfBuild_TabOrHH_AAPS30.png)

```{contents}
:backlinks: entry
:depth: 2
```

## Profile

This module can not be disabled as it is a core part of **AAPS**.

* See [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md) for a basic understanding of what goes inside your **Profile**.
* See [AAPS Screens > Profile](#aaps-screens-profile) for more information about managing your **Profiles**.

(Config-Builder-insulin)=

## Inzulín

![Typ inzulínu](../images/ConfBuild_Insulin_AAPS30.png)

Select the type of insulin you are using.

More information to understand the Insulin Profile as shown in **AAPS** [here](#AapsScreens-insulin-profile).

### Rozdíly v typu inzulínu

* Všechny varianty „Rychle působící Oref“, „Ultra rychlý Oref“, „Lyumjev“ a „Volitelný vrchol Oref“ mají exponenciální tvar.
* Pro „Rychle působící“ a „Ultra rychlý“ a „Lyumjev“ inzulín je DIA jediná proměnná, kterou si můžete upravovat. Doba maximální účinnosti je fixní. 
* „Volitelný vrchol“ umožňuje nastavit obě proměnné – DIA i dobu maximální účinnosti inzulínu. Tato volba je určena pouze pro pokročilé uživatele, kteří znají důsledky nastavených hodnot. 
* The [insulin curve graph](#AapsScreens-insulin-profile) helps you to understand the different curves.

#### Rychle působící - Oref

![Typ inzulinu Rychle působící – Oref](../images/ConfBuild_Insulin_RAO.png)

* doporučeno pro Humalog, Novolog a Novorapid
* DIA = alespoň 5 h
* Max. Max. účinek = 75 minut po podání (pevné hodnota, nelze měnit)

#### Ultra rychlý - Oref

![Typ inzulinu Ultra rychlý – Oref](../images/ConfBuild_Insulin_URO.png)

* doporučeno pro FIASP
* DIA = alespoň 5 h
* Max. max. účinek = 55 minut po podání (pevná hodnota, nelze měnit)

(Config-Builder-lyumjev)=

#### Lyumjev

![Typ inzulinu Lyumjev](../images/ConfBuild_Insulin_L.png)

* speciální inzulínový profil pro Lyumjev
* DIA = alespoň 5 h
* Max. Max. účinek = 45 minut po podání (pevné hodnota, nelze měnit)

#### Volitelný vrchol Oref

![Typ inzulinu Volitelný vrchol – Oref](../images/ConfBuild_Insulin_FPO.png)

* V profilu „Volitelný vrchol 0ref“ můžete ručně zadat dobu max. účinku inzulínu. Chcete-li tak učinit, klikněte pro přístup k rozšířenému nastavení na ozubené kolečko.
* Pokud není v profilu zadána vyšší hodnota, je DIA je automaticky nastaveno na 5 h.
* Tento profil je doporučován v případě, že používáte nepodporovaný inzulín nebo směs různých inzulínů.

(Config-Builder-bg-source)=

## Zdroj glykémií

Select the blood glucose source you are using. See [BG Source](../Getting-Started/CompatiblesCgms.md) page for more setup information.

![Konfigurace zdroje glykémie](../images/ConfBuild_BG.png)

* [xDrip+](../CompatibleCgms/xDrip.md)
* [NSClient BG](../CompatibleCgms/CgmNightscoutUpload.md) - only if you know what you are doing, see [BG Source](../Getting-Started/CompatiblesCgms.md).
* [MM640g](../CompatibleCgms/MM640g.md)
* [Glimp](#libre1-using-glimp) - only version 4.15.57 and newer are supported
* [Build Your Own Dexcom App (BYODA)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).
* [Poctech](../CompatibleCgms/PocTech.md)
* [Tomato App](#libre1-using-tomato) for MiaoMiao device
* [Glunovo aplikace](https://infinovo.com/) pro Glunovo CGM systém
* Generovat náhodné hodnoty glykémie (pouze režim Demo)

## Smoothing

![Smoothing](../images/ConfBuild_Smoothing.png)

See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

(Config-Builder-pump)=

## Pump

Vyberte, kterou pumpu používáte. See [Compatible pumps](../Getting-Started/CompatiblePumps.md) page for more setup information.

![Konfigurace – výběr pumpy](../images/ConfBuild_Pump_AAPS32.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* DanaR Korea (pro korejskou verzi pumpy DanaR)
* Dana Rv2 (DanaR s neoficiálním upgradem firmwaru)
* [Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
* [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
* Accu Chek Combo 
  * [Driver using Ruffy](../CompatiblePumps/Accu-Chek-Combo-Pump.md) (requires ruffy installation)
  * [Driver with no additional requirement](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md), added in [AAPS v.3.2](#version3200)
* Omnipod for [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
* Dash for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* [EOPatch2](../CompatiblePumps/EOPatch2.md)
* [Medtrum](../CompatiblePumps/MedtrumNano.md)
* Virtual pump: open loop - **AAPS** suggestions only 
  * as you make you first steps with **AAPS**, during the first [objectives](../SettingUpAaps/CompletingTheObjectives.md)
  * for pump which doesn't have any driver yet

## Detekce citlivosti

Vyberte variantu detekce citlivosti. For more details of different designs please [read on here](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). Bude prováděna analýza historických dat. Jestliže se zjistí, že na inzulín reagujete citlivěji než obvykle (nebo naopak máte vyšší rezistenci), provedou se úpravy. Další podrobnosti o algoritmu citlivosti si můžete přečíst v [dokumentaci OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen in an [additional graph](#AapsScreens-section-g-additional-graphs). Průběh citlivosti můžete na hlavní stránce zobrazit vybráním políčka Citlivost. Zobrazí se jako bílá čára. Note, you need to be in [Objective 8](#objectives-objective8) in order to let Sensitivity Detection/[Autosens](#Open-APS-features-autosens) automatically adjust the amount of insulin delivered. Před dosažením tohoto cíle slouží procentuální údaj Autosens a bílá čára v grafu pouze pro informaci.

### Nastavení absorpce sacharidů

If you use Oref1 with **SMB** you must change **min_5m_carbimpact** to 8. The value is only used during gaps in **CGM** readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause **AAPS** to decay COB. At times when [carb absorption](../DailyLifeWithAaps/CobCalculation.md) can't be dynamically worked out based on your blood's reactions it inserts a default decay to your carbs. V podstatě jde o bezpečnostní pojistku.

(Config-Builder-aps)=

## APS

Vyberte požadovaný algoritmus APS pro úpravy léčby. Detaily vybraného algoritmu můžete zobrazit na kartě OpenAPS (OAPS).

* OpenAPS AMA 
  * Advanced Meal Assist: older algorithm not recommended anymore.
  * In simple terms, the benefits are after you give yourself a meal bolus, the system can high-temp more quickly IF you enter carbs reliably.
* [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) 
  * Super Micro Bolus: most recent algorithm recommended for all users.
  * In contrast to AMA, SMB does not use temporary basal rates to control glucose levels, but mainly small **Super Micro Boluses**.
  * Note : It is recommended to use this algorithm from the beginning, even though you will not actually get SMBs delivered until [Objective 9](#objectives-objective9).

If switching from AMA to SMB algorithm, *min_5m_carbimpact* must be changed manually to **8** (default value for SMB) in [Preferences > Sensitivity detection > Sensitivity Oref1 settings](../SettingUpAaps/Preferences.md).

## Smyčka

This module should not be disabled as it is a core part of **AAPS**.

## Constraints

### Objectives

**AAPS** has a learning program (a series of objectives) that you have to fulfill step by step. Ty by vás měly bezpečně provést nastavením uzavřené smyčky. Postupným splněním cílů je zajištěno, že přesně porozumíte tomu, jak systém pracuje. Jedině tak můžete svému systému plně důvěřovat.

See [Objectives](../SettingUpAaps/CompletingTheObjectives.md) page for more information.

## Synchronizace

In this section, you can choose if/where you want **AAPS** to send your data to.

### NSClient or NSClientV3

Can be used as a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md) and/or for [remote monitoring](../RemoteFeatures/RemoteMonitoring.md), [remote control](../RemoteFeatures/RemoteControl.md).

See [Synchronization with the reporting server](#SetupWizard-synchronization-with-the-reporting-server-and-more) to help you choose between NSClient (v1) and NSClientV3.

### Tidepool

Can be used as a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md).

See [Tidepool](../SettingUpAaps/Tidepool.md).

### xDrip

Used to **send** data such as treatments to xDrip+.

### Open Humans

See [Open Humans](../SupportingAaps/OpenHumans.md).

### Wear

Monitor and control **AAPS** using your Android WearOS watch (see [page Watchfaces](../WearOS/WearOsSmartwatch.md)).

### Samsung Tizen

Broadcast data to Samsung's G-Watch Wear App (Tizen OS).

### Garmin

Connection to Garmin device (Fenix, Edge...)

## Ošetření

Pokud se podíváte na záložku Ošetření, můžete vidět ošetření které byly nahrány na Nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](#screens-bolus-carbs).

## General

### Přehled

This is the [main screen](#AapsScreens-the-homescreen) of **AAPS** and can not be disabled.

#### Zobrazovat kolonku poznámky v dialozích ošetření

Vyberte si, chcete-li mít při zadávání ošetření k dispozici pole poznámka.

#### Stavové indikátory

Choose if you want to have [status lights](#Preferences-status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. Je-li dosaženo úrovně pro varování, změní se barva stavového indikátoru na žlutou. Kritická hodnota se zobrazí červeně.

#### Pokročilá nastavení

**Podat tuto část z výsledku kalkukace [%]**: Při použití SMB si mnoho lidí neposílá na jídlo 100% dávku inzulínu, ale pouze její část (např. 75 %), a nechá zbytek na SMB ve spolupráci s UAM (detekce neoznámeného jídla). In this setting, you can choose a default value for the percentage the bolus wizard should calculate with. Pokud je toto nastavení 75 % a máte dostat bolus 10 U, navrhne bolusový kalkulátor pouze 7,5 jednotky.

**V průvodci povolte funkci superbolus** (jde o něco jiné než *super mikro bolus*!): Funkci používejte s opatrností a nepovolujte ji, dokud se nenaučíte, co to skutečně dělá. V podstatě je bazál za následující 2 hodiny přidán do bolusu a po dobu těchto 2 h je nastaven nulový dočasný bazál. **Funkce smyčky AAPS budou po dobu superbolusu deaktivovány – používat opatrně! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### Akce

A tab offering multiple buttons to take [actions](#screens-action-tab) in **AAPS**.

### Automatizace

A tab for managing your [Automations](../DailyLifeWithAaps/Automations.md), starting at [Objective 10](#objectives-objective10).

(Config-Builder-sms-communicator)=

### SMS komunikátor

Allows remote caregivers to control some **AAPS** features via SMS, see [SMS Commands](../RemoteFeatures/SMSCommands.md) for more setup information.

### Jídlo

Zobrazuje jídla přidaná do databáze Nightscoutu. Více informací viz [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods).

Note: Entries cannot be used in the **AAPS** calculator. (Pouze je zobrazit)

(Config-Builder-wear)=

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../WearOS/WearOsSmartwatch.md)). Chcete-li nastavit parametry pro výpočet bolusu na hodinkách (tj. 15min trend, COB…), klikněte na nastavení (ozubené kolo).

Chcete-li z hodinek zadávat bolus atd., musíte v „Nastavení wear“ aktivovat volbu „Ovládání z hodinek“.

![Nastavení hodinek](../images/ConfBuild_Wear.png)

Prostřednictvím záložky Wear nebo hamburger menu (levý horní roh obrazovky, když není záložka zobrazena) můžete

* znovu poslat všechna data. To může pomoci v případech, kdy byly hodinky nějakou dobu nedostupné a potřebujete do nich poslat data.
* Otevřít nastavení hodinek přímo z telefonu.

### Údržba

Access this tab to export / import settings.

### Konfigurace

This current tab.