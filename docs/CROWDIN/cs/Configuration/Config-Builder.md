# Konfigurace

Konfigurace (Conf) je záložka, kde si zapínáte, nebo vypínáte jednotlivé moduly. Zaškrtnutím boxu (kroužek) na levé straně (A) vybíráte modul který chcete používat, boxy (čtverečky) na pravé straně (C) zajistí zobrazení modulu jako záložky (E) v AndroidAPS. I když není pravý box zaškrtnutý, dostanete se k funkci přes hamburger menu (D) v levém horním rohu obrazovky.

Pokud má modul další dodatečná nastavení, dostanete se k nim kliknutím na ozubené kolo (B).

**První nastavení**: od AAPS v 2.0 Vám s úvodním nastavením aplikace pomůže Průvodce nastavením. Stiskněte 3 tečky v pravé horní části obrazovky (F), a vyberte „Průvodce nastavením“.

![Tlačítko konfigurace a ozubené kolo](../images/ConfBuild_ConfigBuilder.png)

## Profil

Vyberte bazální profil, který chcete použít. Další informace viz stránku [Profily](../Usage/Profiles.md).

### Místní profil (doporučeno)

Místní profil používá bazální profil zapsaný přímo do telefonu. Po jeho vybrání se v AAPS objeví nová záložka, kde si můžete profil upravovat. Ten je pak v případě potřeby načten pumpou. Při přepnutí profilu je uložen do pumpy – v profilu 1. Tento profile je doporučen, protože nevyžaduje připojení k internetu.

Výhoda: ke změně nastavení profilu nepotřebujete připojení k internetu

Nevýhoda: pouze jeden profil

### NS profil

NS profil používá profily, které jste uložili na webu Nightscout (https://[yournightscoutsiteaddress]/profile). K přepnutí profilu, který bude aktivní, můžete použít tlačítko [Přepnout profil](../Usage/Profiles.md). Tato akce zapíše profil do pumpy, kde bude použit v případě selhání AndroidAPS. Takto si v Nightscoutu můžete vytvořit více profilů (např.. práce, doma, sport, prázdniny atd.). Je-li váš mobil online, budou profily po stisknutí tlačítka „Uložit“ odeslány do AAPS. Pokud nemáte připojení k internetu nebo k Nightscoutu, budou profily uloženy v AAPS, jakmile se synchronizují.

Vybráním tlačítka **Přepnout profil** se aktivuje vybraný profil z Nightscoutu. V horní části hlavní obrazovky AAPS stiskněte a podržte tlačítko s názvem aktuálního profilu (prostřední šedé pole mezi polem „Otevřená/Uzavřená smyčka“ a polem s hodnotami cíle) > Přepnutí profilu > Vybrat profil > OK. Po změně profilu zapíše AAPS vybraný profil do pumpy, aby bylo možné i v případě nouze pumpu nadále používat.

Výhoda: více profilů a jejich snadné úpravy prostřednictvím PC nebo tabletu

Nevýhoda: nelze provádět místní změny v nastavení profilu

### Jednoduchý profil

Jednoduchý profil s jediným časovým blokem pro DIA, IC, ISF, základní bazál a cílové rozmezí (tj. žádné změny základního bazálu během dne). Nejpravděpodobněji bude použit pro testovací účely, pokud nemáte v průběhu 24 hodin stejné parametry. Jakmile bude vybrán „Jednoduchý profil“, objeví se v AAPS nová záložka, kde budete moci zadat data profilu.

## Insulin

Vyberte typ inzulínové křivky, kterou používáte. Všechny varianty „Rychle působící Oref“, „Ultra rychlý Oref“ a „Volitelný vrchol Oref“ mají exponenciální tvar. Více informací najdete v [dokumentaci k OpenAPS](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). Křivky se liší podle DIA a času max. účinnosti inzulínu. Hodnota DIA by vždy měla být nejméně 5. Další informace se můžete dočíst v části Výběr inzulínového profilu na [této](../Getting-Started/Screenshots.md) stránce. Pro „Rychle působící“ a „Ultra rychlý“ inzulín je DIA jediná proměnná, kterou si můžete upravovat. Čas maximální účinnosti je fixní. „Volitelný vrchol“ umožňuje nastavit obě proměnné – DIA i čas maximální účinnosti inzulínu. Tato volba je určena pouze pro pokročilé uživatele, kteří znají důsledky nastavených hodnot. The insulin curve graph helps you to understand the different curves. Zaškrtnutím políčka vedle názvu si je můžete prohlédnout v záložce. Další možnost jejich zobrazení je přes hamburgerové menu.

### Rychle působící Oref

* doporučeno pro Humalog, Novolog a Novorapid
* DIA = alespoň 5 h
* Max. účinnost inzulínu = 75 minut po podání

### Ultra rychlý Oref

* doporučeno pro FIASP
* DIA = alespoň 5 h
* Max. účinnost inzulínu = 55 minut po podání

Pro velké množství lidí nemá po 3–4 hodinách FIASP prakticky žádné znatelné účinky, i když fakticky zbývá cca 0,0xx jednotky. Nicméně i toto zbytkové množství může mít vliv například při sportu. Proto AndroidAPS používá jako minimální hodnotu DIA 5 h.

![Config Builder Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Volitelný vrchol Oref

V profilu „Volitelný vrchol 0ref“ můžete ručně zadat čas max. účinku inzulínu. Pokud není v profilu zadána vyšší hodnota, je DIA je automaticky nastavena na 5 h.

Tento profil je doporučován v případě, že používáte nepodporovaný inzulín nebo směs různých inzulínů.

## Zdroj glykémií

Vyberte, který zdroj glykémií používáte – další informace k nastavení viz [Zdroj glykémií](BG-Source.md).

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=cz)
* [Aplikace Dexcom G5 (upravená)](https://github.com/dexcomapp/dexcomapp/) – chcete-li používat alarmy xDrip+, vyberte v nastavení „Odesílat glykémie do xDrip+“. ![Konfigurace zdroje BG](../images/ConfBuild_BGSource.png)
* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Pumpy

Select the pump you are using.

* [DanaR](DanaR-Insulin-Pump.md)
* DanaR Korea (pro korejskou verzi pumpy DanaR)
* DanaR v2 (DanaR s upgradovaným firmwarem)
* [DanaRS](DanaRS-Insulin-Pump.md)
* [Accu-check Combo](Accu-Chek-Combo-Pump.md) (vyžaduje nainstalovanou aplikaci Ruffy)
* MDI (AAPS poskytuje návrhy pro aplikaci inzulínu pomocí inzulínových per)
* Virtuální pumpa (otevřená smyčka pro pumpu, pro kterou zatím neexistuje ovladač – nabízí pouze návrhy AAPS)

Pokud je nutný BT watchdog, aktivujte ho v **Rozšířená nastavení**. Při problémech s připojením k pumpě vypne bluetooth na 1 sekundu. Toto nastavení může u některých mobilů pomoci při zamrzání bluetooth.

## Detekce citlivosti

Vyberte typ detekce citlivosti. Bude prováděna analýza historických dat. Jestliže se zjistí, že na inzulín reagujete citlivěji než obvykle (nebo naopak máte vyšší rezistenci), provedou se úpravy. Podrobnosti o citlivosti Oref0 algoritmu se lze dočíst v [dokumentaci k OpenAPS](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

Průběh citlivosti můžete na hlavní stránce zobrazit vybráním políčka Citlivost. Zobrazí se jako bílá čára. Berte na vědomí, že pokud chcete používat detekci citlivosti/autosens, musíte být v [cíli 6](../Usage/Objectives).

### Nastavení absorpce sacharidů

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when carb absorption can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically it is a failsafe.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS MA (meal assist, stav algoritmu v roce 2016)
* OpenAPS AMA (advanced meal assist, stav algoritmu v roce 2016)  
    Další podrobnosti o OpenAPS AMA najdete v [dokumentaci k OpenAPS](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Zjednodušeně řečeno, přínosem tohoto algoritmu je, že po podání bolusu k jídlu dokáže systém rychleji zvýšit dočasný bazál, POKUD správně zadáte sacharidy.  
    Poznámka: Abyste mohli používat algoritmus OpenAPS AMA, musíte být u plnění [7. cíle](../Usage/Objectives.md).
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, nejnovější algoritmus pro pokročilé uživatele)  
    Pozn: abyste mohli používat OpenAPS SMB, musíte splnit [8. cíl](../Usage/Objectives.md) a mít nastavenou hodnotu min_5m_carbimpact na 8. V nabídce Konfigurace > Detekce senzitivity > Nastavení senzitivity Oref1.

## Smyčka

Define whether you want to allow AAPS automatic controls or not.

### Otevřená smyčka

AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Uzavřená smyčka

AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypoversion, etc.). The Closed Loop works within numerous safety limits, which you can be set individually. Closed Loop is only possible if you are in [Objective 4](../Usage/Objectives.md) or higher and use a supported pump.

## Cíle (výukový program)

AndroidAPS has a number of objectives that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should export your settings (including progress of the objectives) on a regulary basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.md) page for more information.

## Ošetření

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the Careportal (CP) tab.

## Obecné

### Přehled

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Nechat obrazovku zapnutou

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore it is recommended to connect the smartphone to a charger cable.

#### Tlačítka

Define which Buttons are shown on the home screen.

* Ošetření
* Bolus kalkukátor
* Insulin
* Sacharidy
* CGM (otevře xDrip+)
* Kalibrace

Furthermore you can set shortcuts for insulin and carb increments and decide wether the notes field should be shown in treatment dialogues.

#### Nastavení Rychlého bolusu

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Pokročilá nastavení

Enable super bolus functionality in wizard. Use with caution and do not enable until you learn what it really does. Basically the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Akce

Some buttons to quickly access common features:

* Přepnutí profilu (více informací viz [Stránka profily](../Usage/Profiles.md))
* Dočasné cíle
* Nastavit / zrušit dočasný bazál
* Prodloužený bolus (pouze DanaR/RS nebo Combo)
* Kanyla / plnění (Pouze DanaR/RS nebo Combo)
* Prohlížeč historie
* TDD (celková denní dávka = bolus + bazál za den)

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). Others prefer range of 32% to 37% of TDD for TBB. Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Actions tab](../images/ConfBuild_ConfBuild_Actions.png)

### Portál nastavení péče

Allows you to record any specific care entries and view the current sensor, insulin, canula and pump battery ages in the Careportal (CP) tab.

Note: **No insulin** will be given if entered via careportal (i.e. meal bolus, correction bolus...)

Carbs entered in the careportal (i.e. correction carbs) will be used for COB calculation.

![Careportal tab](../images/ConfBuild_CarePortal.png)

### SMS komunikátor

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Usage/SMS-Commands.md) for more setup information.

### Jídlo

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

Pokud chcete poslat například bolus z hodinek, potřebujete v „Nastavení hodinek“ aktivovat volbu „Ovládání z hodinek“.

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* znovu poslat všechna data. To může pomoci v případech, kdy byly hodinky nějakou dobu nedostupné a potřebujete do nich poslat data.
* Otevřít nastavení hodinek přímo z telefonu.

### Stavová řádka xDrip (hodinky)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Oznámení v notifikační liště

Displays a summary of current BG, delta, active TBR%, active basal u/hr and profile, IOB and split into bolus IOB and basal IOB on the phones dropdown screen and phonelock screen.

![AAPS widget](../images/ConfBuild_Widget.png)

### NS Client

Setup sync of your AndroidAPS data with Nightscout.

If **Log app start to NS** is activated each AndroidAPS will be visible in Nightscout. Might be useful to detect problems with the app (i.e. battery optimisation not disabled for AAPS) but can flood the Nightscout graph with entries.

#### Nastavení alarmů

Activate/deactivate AndroidAPS alarms

![Nastavení alarmů](../images/ConfBuild_NSClient_Alarms.png)

#### Nastavení připojení

Offline looping, disable roaming...

If you want to use only a specific WiFi network you can enter its **WiFi SSID **. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Nightscout connection settings](../images/ConfBuild_ConnectionSettings.png)

#### Pokročilá nastavení

* Automaticky doplňovat chybějící glykémie z NS
* Vytvářet oznámení z chyb Nightscout vytváří oznámení pro zobrazení chybových dialogů a místní varování (jsou dostupná v Ošetření v sekci Péče)
* Povolit odesílání do ostatních lokálních aplikací (jako xDrip+)
* Pouze nahrávání do NS (zakázaná synchronizace)
* Zakázat nahrávání do NS
* Vždy pracovat s absolutními hodnotami bazálu -> pokud chcete používat [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html), musíte mít tuto volbu aktivovanou.

![Nightscout advanced settings](../images/ConfBuild_NSClient_Advanced.png)

### Údržba

Email and number of logs to be send. Normally no change neccessary.

### Konfigurátor

Use tab for config builder instead of hambuger menu.