# Konfigurace

V závislosti na vašich nastaveních můžete Konfiguraci otevřít prostřednictvím záložky v horní části obrazovky nebo pomocí nabídky hamburger.

![Otevřít průvodce konfigurací](../images/ConfBuild_Open_AAPS30.png)

Konfigurace (Conf) je záložka, kde si zapínáte nebo vypínáte jednotlivé moduly. Zaškrtnutím boxu (kroužek) na levé straně (A) vybíráte modul, který chcete používat, boxy (čtverečky) na pravé straně (C) zajistí zobrazení modulu jako záložky (E) v AndroidAPS. I když není pravý box zaškrtnutý, dostanete se k funkci přes hamburger menu (D) v levém horním rohu obrazovky.

Pokud má modul další dodatečná nastavení, dostanete se k nim kliknutím na ozubené kolo (B).

**První konfigurace:** Od AAPS 2.0 Vás provede procesem nastavení AndroidAPS Setup wizard (Průvodce nastavením). Stiskněte 3 tečky v pravé horní části obrazovky (F) a vyberte „Průvodce nastavením“.

![Tlačítko konfigurace a ozubené kolo](../images/ConfBuild_ConfigBuilder_AAPS30.png)

(Config-Builder-tab-or-hamburger-menu)=

## Záložka nebo hamburger menu

With the checkbox under the eye symbol you can decide how to open the corresponding program section.

![Záložka nebo hamburger menu](../images/ConfBuild_TabOrHH_AAPS30.png)

(Config-Builder-profile)=

## Profil

* Vyberte bazální profil, který chcete použít. Viz stránka [Profily](../Usage/Profiles.md) pro další informace o nastavení.
* Od AAPS 3.0 je k dispozici pouze lokální profil.

However, it is possible to synchronise a Nightscout profile into a local profile. To do this, however, it is important to clone the whole database record consisting of several profiles in the Nightscout editor. Please see the instructions below. This can be helpful if major changes to a more extensive profile can be entered more easily via the web interface, e.g. to manually copy data from a spreadsheet.

(Config-Builder-local-profile)=

### Místní profil

Local profile uses the basal profile manually entered in phone. As soon as it is selected, a new tab appears in AAPS, where you can change the profile data read out from the pump if necessary. With the next profile switch they are then written to the pump in profile 1. This profile is recommended as it does not rely on internet connectivity.

Your local profiles are part of [exported settings](../Usage/ExportImportSettings.md). So make sure to have a backup in a safe place.

![Local Profile settings](../images/LocalProfile_Settings.png)

Buttons:

* zelené plus: přidat
* červené X: odstranit
* modrá šipka: kopírovat

If you make any changes to your profile, make sure, you are editing the correct profile. In profile tab there is not always shown the actual profile being used - e.g. if you made a profile switch by using the profile tab on homescreen it may differ from the profile actually shown in profile tab as there is no connection between these.

#### Klonování přepnutí profilu

You can easily create a new local profile from a profile switch. In this case timeshift and percentage will be applied to the new local profile.

1. Klikněte na 3 tečky v pravém horním rohu.
2. Vyberte „Ošetření“.
3. Stiskněte symbol hvězdičky pro přístup na stránku přepnutí profilu.
4. Vyberte požadovaný přepínač profilu, a stiskněte „Klonovat“.
5. Nový místní profil můžete upravit na kartě Místní profil (MPRF) nebo prostřednictvím hamburger menu.

![Klonování přepnutí profilu](../images/LocalProfile_ClonePS_AAPS30.png)

(Config-Builder-upload-local-profiles-to-nightscout)=

#### Nahrávání místních profilů do Nighscoutu

Local profiles can also be uploaded to Nightscout. The settings can be found in [NSClient preferences](Preferences-nsclient).

![Upload local profile to NS](../images/LocalProfile_UploadNS_AASP30.png)

#### Změna profilu v Nightscout editoru profilu

You can synchronoze changes to the profile in the Nighscout profile editor to local profiles. The settings can be found in [NSClient preferences](Preferences-nsclient).

It is necessary to clone the actual active entire Nightscout database records for the profiles and not just a profile with the blue arrow! The new database records then carries the current date and can be activated via the tab "local profile".

![Clone database records](../images/Nightscout_Profile_Editor.PNG)

### Pomocník s profilem

Profile helper offers two functions:

1. Najít profil pro děti
2. Porovnání dvou profilů nebo přepnutí profilů za účelem naklonování nového profilu

Details are explained on the separate [profile helper page](../Configuration/profilehelper.md).

(Config-Builder-insulin)=

## Inzulín

![Insulin type](../images/ConfBuild_Insulin_AAPS30.png)

* Vyberte typ inzulínové křivky, kterou používáte.
* Všechny varianty „Rychle působící Oref“, „Ultra rychlý Oref“, „Lyumjev“ a „Volitelný vrchol Oref“ mají exponenciální tvar. Více informací najdete v [dokumentaci k OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* Křivky se liší podle DIA a času max. účinnosti inzulínu.
    
    * FIALOVÁ linka ukazuje, kolik **inzulínu zbývá** poté, co byl aplikován a postupem času se vstřebává.
    * MODRÁ linka ukazuje, **jak aktivní** inzulín je.

### Doba působnosti inzulínu

* Hodnota DIA není u každého člověka stejná. Proto si ji musíte vyzkoušet sami na sobě. 
* Vždy to však musí být alespoň 5 hodin.
* Pro velké množství lidí nemá ultra-rychlý inzulin jako Fiasp po 3–4 hodinách prakticky žádné znatelné účinky, i když fakticky zbývá cca 0,0xx jednotky. Nicméně i toto zbytkové množství může mít vliv například při sportu. Proto AndroidAPS používá jako minimální hodnotu DIA 5 h.
* You can read more about that in the Insulin Profile section of [this](Screenshots-insulin-profile) page.

### Rozdíly v typu inzulínu

* Pro „Rychle působící“ a „Ultra rychlý“ a „Lyumjev“ inzulín je DIA jediná proměnná, kterou si můžete upravovat. Doba maximální účinnosti je fixní. 
* „Volitelný vrchol“ umožňuje nastavit obě proměnné – DIA i dobu maximální účinnosti inzulínu. Tato volba je určena pouze pro pokročilé uživatele, kteří znají důsledky nastavených hodnot. 
* The [insulin curve graph](Screenshots-insulin-profile) helps you to understand the different curves.
* Zaškrtnutím čtverečku vedle názvu si je můžete prohlédnout v záložce. Další možnost jejich zobrazení je přes hamburgerové menu.

#### Rychle působící - Oref

![Insulin type Rapid-Acting Oref](../images/ConfBuild_Insulin_RAO.png)

* doporučeno pro Humalog, Novolog a Novorapid
* DIA = alespoň 5 h
* Max. Max. účinek = 75 minut po podání (pevné hodnota, nelze měnit)

#### Ultra rychlý - Oref

![Insulin type Ultra-Rapid Oref](../images/ConfBuild_Insulin_URO.png)

* doporučeno pro FIASP
* DIA = alespoň 5 h
* Max. max. účinek = 55 minut po podání (pevná hodnota, nelze měnit)

(Config-Builder-lyumjev)=

#### Lyumjev

![Insulin type Lyumjev](../images/ConfBuild_Insulin_L.png)

* speciální inzulínový profil pro Lyumjev
* DIA = alespoň 5 h
* Max. Max. účinek = 45 minut po podání (pevné hodnota, nelze měnit)

#### Volitelný vrchol Oref

![Insulin type Free Peak Oref](../images/ConfBuild_Insulin_FPO.png)

* V profilu „Volitelný vrchol 0ref“ můžete ručně zadat dobu max. účinku inzulínu. Chcete-li tak učinit, klikněte pro přístup k rozšířenému nastavení na ozubené kolečko.
* Pokud není v profilu zadána vyšší hodnota, je DIA je automaticky nastaveno na 5 h.
* Tento profil je doporučován v případě, že používáte nepodporovaný inzulín nebo směs různých inzulínů.

(Config-Builder-bg-source)=

## Zdroj glykémií

Select the blood glucose source you are using - see [BG Source](BG-Source.md) page for more setup information.

![Config Builder BG source](../images/ConfBuild_BGSource_AAPS30.png)

* [Sestav si vlastní Dexcom aplikaci (BYODA)](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0).
* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) - Cannot be used as receiver for Dexcom G6 as of AAPS 3.0 (see [release notes](Releasenotes-important-hints-3-0-0) for details.
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - jsou podporovány pouze verze 4.15.57 a novější
* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)
* [Tomato App](http://tomato.cool/) pro zařízení MiaoMiao
* [Glunovo aplikace](https://infinovo.com/) pro Glunovo CGM systém
* NSClient BG - není doporučeno, protože v tomto případě je uzavřená smyčka závislá na mobilních datech / Wi-Fi. CGM data budou přijímána pouze v případě, jste-li připojeni ke svému Nightscoutu. Je mnohem lepší využít některý z lokálních zdrojů CGM.
* Generovat náhodné hodnoty glykémie (pouze režim Demo)

(Config-Builder-pump)=

## Pumpa

Select the pump you are using.

![Config Builder Pump selection](../images/ConfBuild_Pump_AAPS30.png)

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Korea (pro korejskou verzi pumpy DanaR)
* Dana Rv2 (DanaR s neoficiálním upgradem firmwaru)
* [Dana-i/RS](DanaRS-Insulin-Pump.md)
    
    * Pro pumpy Dana – pokud je nutný BT watchdog, aktivujte ho v **Rozšířená nastavení**. Při problémech s připojením k pumpě vypne bluetooth na 1 sekundu. Toto nastavení může u některých mobilů pomoci při zamrzání bluetooth.
    * [Heslo pro Dana RS pumpy](../Configuration/DanaRS-Insulin-Pump.md) musí být správně zadáno. V předchozích verzích nebylo heslo kontrolováno.

* [Accu-Chek Insight](Accu-Chek-Insight-Pump.md)

* [Accu-Check Combo](Accu-Chek-Combo-Pump.md) (vyžaduje nainstalovanou aplikaci Ruffy)
* [Omnipod Eros](OmnipodEros.md)
* [Omnipod DASH](OmnipodDASH.md)
* [Medtronic](MedtronicPump.md)
* [Diaconn G8](DiaconnG8.md)
* MDI (AAPS poskytuje návrhy pro aplikaci inzulínu pomocí inzulínových per)
* Virtuální pumpa (otevřená smyčka pro pumpu, pro kterou zatím neexistuje ovladač – nabízí pouze návrhy AAPS)

## Detekce citlivosti

Select the type of sensitivity detection. For more details of different designs please [read on here](../Configuration/Sensitivity-detection-and-COB.md). This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. More details about the Sensitivity algorithm can be read in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](Open-APS-features-autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the Autosens percentage / the line in your graph is displayed for information only.

(Config-Builder-absorption-settings)=

### Nastavení absorpce sacharidů

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../Usage/COB-calculation.md) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

(Config-Builder-aps)=

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS AMA (pokročilý asistent s jídly, stav algoritmu v roce 2017). Zjednodušeně řečeno, výhoda systému je v tom, že zadáte-li sacharidy, dokáže systém po poslání bolusu velmi rychle spustit vysoký dočasný bazál.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users) Note you need to be in [Objective 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Smyčka

* Přepínání mezi otevřenou smyčkou, uzavřenou smyčkou a pozastavením při nízké glykémii (LGS).

![Config builder - loop mode](../images/ConfigBuilder_LoopLGS.png)

(Config-Builder-open-loop)=

### Otevřená smyčka

* AAPS průběžně hodnotí všechny dostupné údaje (IOB, COB, glykémie…) a předkládá návrhy, jak v případě potřeby upravit vaši léčbu. 
* Návrhy nebudou provedeny automaticky (tak jako v uzavřené smyčce), ale mohou být zadány ručně přímo do pumpy nebo tlačítkem z aplikace – pokud používáte podporovanou pumpu (DanaR/RS nebo Accu-check Combo). 
* Tato volba slouží k tomu, abyste poznali, jak vlastně AndroidAPS funguje, nebo používáte-li nepodporovanou pumpu.

(Config-Builder-closed-loop)=

### Uzavřená smyčka (Closed Loop)

* AAPS průběžně vyhodnocuje všechny dostupné údaje (IOB, COB, glykémie…) a podle potřeby automaticky upravuje léčbu (tj. bez dalšího Vašeho zásahu) s cílem dosáhnout nastaveného cílového pásma nebo hodnoty (podání bolusu, dočasné bazální dávky, vypnutí podávání inzulínu, aby se předešlo hypoglykémii atd.). 
* Uzavřená smyčka je zabezpečena velkým množstvím bezpečnostních limitů, které lze nastavit individuálně.
* Closed Loop is only possible if you are in [Objective 6](Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.
* Poznámka: při používání uzavřené smyčky se doporučuje nastavit jeden cíl místo cílového rozsahu (tj. 5,5 mmol nebo 100 mg/l místo rozsahu 5,0–7,0 mmol nebo 90–125 mg/dl).

### Pozastavení při nízké glykémii (LGS)

* maxIOB je nastaveno na nulu
* To znamená, že klesá-li hladina glukózy v krvi, snížuje se odpovídajícím způsobem i bazál.
* Při rostoucí hladině glukózy ale nedochází k žádné automatické korekci. Hodnota bazálu zůstává stále na hodnotě nastavené z profilu.
* Dodatečný inzulín je pro snížení glykémie podáván pouze v případě, že je bazální IOB negativní (na základě jeho předchozího pozastavení při nízké glykémii).

### Minimální změna pro oznámení

* Při použití otevřené smyčky budete dostávat oznámení pokaždé, když AAPS doporučí úpravu bazální dávky. 
* Ke snížení počtu oznámení můžete použít buď širší rozsah cílové glykemie, nebo vyšší procento minimální změny pro výzvu.
* Toto definuje relativní změnu, která je požadována pro spuštění oznámení.

## Cíle (výukový program)

AndroidAPS has a leraning program (objectives) that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.md) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.md) page for more information.

## Ošetření

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](Screenshots-carb-correction).

## Obecné

### Přehled

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Nechat obrazovku zapnutou

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Tlačítka

Define which Buttons are shown on the home screen.

* Ošetření
* Kalkulačka
* Inzulín
* Sacharidy
* CGM (otevře xDrip+)
* Kalibrace

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### Nastavení rychlých bolusů

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Výchozí nastavení dočasných cílů

Choose default temp-targets (duration and target). Preset values are:

* blížící se jídlo: cíl 72 mg/dl/4, 0 mmol/l, trvání 45 min
* aktivita: cíl 140 mg/dl/7, 8 mmol/l, trvání 90 min
* hypoglykemie: cíl 125 mg/dl/6, 9 mmol/l, trvání 45 min

#### Standardní množství inzulinu pro Plnění/Doplňování

Choose the default amounts of the three buttons in fill/prime dialogue, depending on the length of your catheter.

#### Rozsah pro zobrazení

Choose the high and low marks for the BG-graph on AndroidAPS overview and smart watch. It is only the visualization, not the target range for your BG. Example: 70 - 180 mg/dl or 3.9 - 10 mmol/l

#### Krátké názvy modulů

Choose wether the tab titles in AndroidAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### Zobrazovat kolonku poznámky v dialozích ošetření

Choose if you want to have a notes field when entering treatments or not.

#### Stavové indikátory

Choose if you want to have [status lights](Preferences-status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Critical age will show up in red.

#### Pokročilá nastavení

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percenteage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](Open-APS-features-max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### Akce

* Tlačítka k běžně používaným úkonům.
* See [AAPS screenshots](Screenshots-action-tab) for details.

### Automatizace

User defined automation tasks ('if-then-else'). Please [read on here](../Usage/Automation.md).

(Config-Builder-sms-communicator)=

### SMS komunikátor

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.md) for more setup information.

### Jídlo

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

(Config-Builder-wear)=

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

Chcete-li z hodinek zadávat bolus atd., musíte v „Nastavení wear“ aktivovat volbu „Ovládání z hodinek“.

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* znovu poslat všechna data. To může pomoci v případech, kdy byly hodinky nějakou dobu nedostupné a potřebujete do nich poslat data.
* Otevřít nastavení hodinek přímo z telefonu.

### Stavová řádka xDrip (hodinky)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### NSClient

* Nastavení synchronizace dat AndroidAPS s Nightscoutem.
* Settings in [preferences](Preferences-nsclient) can be opened by clicking the cog wheel.

### Údržba

Email and number of logs to be send. Normally no change necessary.

### Konfigurace

Use tab for config builder instead of hamburger menu.