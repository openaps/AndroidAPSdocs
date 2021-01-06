# Konfigurace

V závislosti na vašich nastaveních můžete Konfiguraci otevřít prostřednictvím záložky v horní části obrazovky nebo pomocí nabídky hamburger.

![Otevřít průvodce konfigurací](../images/ConfBuild_Open.png)

Konfigurace (Conf) je záložka, kde si zapínáte nebo vypínáte jednotlivé moduly. Zaškrtnutím boxu (kroužek) na levé straně (A) vybíráte modul, který chcete používat, boxy (čtverečky) na pravé straně (C) zajistí zobrazení modulu jako záložky (E) v AndroidAPS. I když není pravý box zaškrtnutý, dostanete se k funkci přes hamburger menu (D) v levém horním rohu obrazovky.

Pokud má modul další dodatečná nastavení, dostanete se k nim kliknutím na ozubené kolo (B).

**První konfigurace:** Od AAPS 2.0 Vás provede procesem nastavení AndroidAPS Setup wizard (Průvodce nastavením). Stiskněte 3 tečky v pravé horní části obrazovky (F) a vyberte „Průvodce nastavením“.

![Tlačítko konfigurace a ozubené kolo](../images/ConfBuild_ConfigBuilder.png)

## Záložka nebo hamburger menu

Pomocí zaškrtávacího políčka pod symbolem oka se můžete rozhodnout, jak otevřít odpovídající sekci programu.

![Záložka nebo hamburger menu](../images/ConfBuild_TabOrHH.png)

## Profil

Vyberte bazální profil, který chcete použít. Další informace viz stránka [Profily](../Usage/Profiles.md).

### Místní profil (doporučeno)

Místní profil používá bazální profil zapsaný přímo do telefonu. Po jeho vybrání se v AAPS objeví nová záložka, kde si můžete profil upravovat. Ten je pak v případě potřeby načten pumpou. Při přepnutí profilu je uložen do pumpy – v profilu 1. Tento profil je doporučen, protože nevyžaduje připojení k internetu.

Vaše místní profily jsou součástí [exportovaného nastavení](../Usage/ExportImportSettings.rst). Proto se ujistěte, že zálohu máte bezpečně uloženou.

![Nastavení Místního profilu](../images/LocalProfile_Settings.png)

Tlačítka:

* zelené plus: přidat
* červené X: odstranit
* modrá šipka: kopírovat

Děláte-li v profilu nějaké změny, ujistěte se, že upravujete správný profil. Na záložce profilu nemusí být pokaždé zobrazen aktuální profil. Například když na domovské obrazovce přepnete přes záložku profilu na jiný profil, může pak být aktuální profil odlišný od toho, který je zobrazen v záložce profil, protože mezi nimi není žádné spojení.

#### Klonování přepnutí profilu

Z přepnutí profilu můžete snadno vytvořit nový místní profil. Posun času a procentuální změna budou v takovém případě přeneseny do nového místního profilu.

1. Přejděte na kartu Ošetření.
2. Vyberte možnost Přepnutí profilu.
3. Zvolte možnost "Klonovat".
4. Nový místní profil můžete upravit na kartě Místní profil (MPRF) nebo prostřednictvím hamburger menu.

![Klonování přepnutí profilu](../images/LocalProfile_ClonePS.png)

Jestliže chcete přepnout z Nightscout profilu na místní profil, jednoduše udělejte přepnutí profilu na svém NS profilu a naklonujte přepnutí profilu podle výše popsaného postupu.

#### Nahrávání místních profilů do Nighscoutu

Místní profily lze také nahrát do Nightscoutu. Nastavení najdete v [preferencích NSClientu](../Configuration/Preferences#nsclient).

![Nahrávání místního profilu do Nighscoutu](../images/LocalProfile_UploadNS2.png)

Výhody:

* ke změně nastavení profilu nepotřebujete připojení k internetu
* změny profilu lze provést přímo na telefonu
* nový profil lze vytvořit z přepnutí profilu
* místní profily lze nahrát do Nightscoutu

Nevýhody:

* nic

### Pomocník s profilem

Pomocník s profilem nabízí dvě funkce:

1. Najít profil pro děti
2. Porovnání dvou profilů nebo přepnutí profilů za účelem naklonování nového profilu

Podrobnosti jsou vysvětleny na stránce nápovědy [pomocník s profilem](../Configuration/profilehelper.rst).

### NS profil

NS profil používá profily, které jste uložili na webu nightscout (https://[adresavašehoprofilu]/profile). K přepnutí profilu, který bude aktivní, můžete použít tlačítko [Přepnout profil](../Usage/Profiles.md). Tato akce zapíše profil do pumpy, kde bude použit v případě selhání AndroidAPS. Takto si v Nightscoutu můžete vytvořit více profilů (např.. práce, doma, sport, prázdniny atd.). Je-li váš mobil online, budou profily po stisknutí tlačítka „Uložit“ odeslány do AAPS. Pokud nemáte připojení k internetu nebo k Nightscoutu, budou profily uloženy pouze v AAPS, a to do té doby, dokud nebudou synchronizované.

Do a [profile switch](../Getting-Started/Screenshots.md#current-profile) to activate a profile from Nightscout. AAPS will write the selected profile into the pump after the profile change, so that it is available without AAPS in an emergency and continues to run.

Výhody:

* více profilů
* snadná úprava pomocí PC nebo tabletu

Nevýhody:

* nelze provádět místní změny v nastavení profilu
* změny profilu nelze provést přímo na telefonu

## Inzulín

![Insulin type](../images/ConfBuild_Insulin.png)

* Select the type of insulin curve you are using.
* The options 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' and 'Free-Peak Oref' all have an exponential shape. More information is listed in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* The curves will vary based on the DIA and the time to peak.
    
    * PURPLE line shows how much **insulin remains** after it has been injected as it decays with time.
    * BLUE line shows **how active** insulin is.

### DIA

* The DIA is not the same for each person. That's why you have to test it for yourself. 
* But it must always be at least 5 hours.
* For a lot of people using ultra-rapid insulins like Fiasp there is practically no noticeable effect after 3-4 hours any more, even if 0.0xx units are available as a rule then. This residual amount can still be noticeable during sports, for example. Therefore, AndroidAPS uses minimum 5h as DIA.
* You can read more about that in the Insulin Profile section of [this](../Getting-Started/Screenshots#insulin-profile) page. 

### Insulin type differences

* For 'Rapid-Acting', 'Ultra-Rapid' and 'Lyumjev' the DIA is the only variable you can adjust by yourself, the time to peak is fixed. 
* Free-Peak allows you to adjust both the DIA and the time to peak, and must only be used by advanced users who know the effects of these settings. 
* The [insulin curve graph](../Getting-Started/Screenshots#insulin-profile) helps you to understand the different curves. 
* You can view it by enabling the tickbox to show it as a tab, otherwise it will be in the hamburger menu.

#### Rapid-Acting Oref

* recommended for Humalog, Novolog and Novorapid
* DIA = at least 5.0h
* Max. peak = 75 minutes after injection (fixed, not adjustable)

#### Ultra-Rapid Oref

* recommended for FIASP
* DIA = at least 5.0h
* Max. peak = 55 minutes after injection (fixed, not adjustable)

#### Lyumjev

* special insulin profile for Lyumjev
* DIA = at least 5.0h
* Max. peak = 45 minutes after injection (fixed, not adjustable)

#### Free Peak Oref

* With the "Free Peak 0ref" profile you can individually enter the peak time.
* The DIA is automatically set to 5 hours if it is not specified higher in the profile.
* This effect profile is recommended if an unbacked insulin or a mixture of different insulins is used.

## Zdroj glykémií

Select the blood glucose source you are using - see [BG Source](BG-Source.rst) page for more setup information.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient BG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - only version 4.15.57 and newer are supported
* [Dexcom App (patched)](https://github.com/dexcomapp/dexcomapp/) - Select 'Send BG data to xDrip+' if you want to use xDrip+ alarms.
    
    ![Config Builder BG source](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

* [Tomato App](http://tomato.cool/) for MiaoMiao device
* Random BG: Generates random BG data (Demo mode only)

## Pumpa

Select the pump you are using.

* [Dana R](DanaR-Insulin-Pump.md)
* Dana R Korean (for domestic DanaR pump)
* Dana Rv2 (DanaR pump with unofficial firmware upgrade)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (requires ruffy installation)
* [Medtronic](MedtronicPump.md)
* MDI (receive AAPS suggestions for your multiple daily injections therapy)
* Virtual pump (open loop for pump which don't have any driver yet - AAPS suggestions only)

For dana pumps, use **Advanced settings** to activate BT watchdog if necessary. It switches off bluetooth for one second if no connection to the pump is possible. This may help on some phones where the bluetooth stack freezes.

[Password for Dana RS pump](../Configuration/DanaRS-Insulin-Pump.md) must be entered correctly. Password was not checked in previous versions.

## Detekce citlivosti

Select the type of sensitivity detection. For more details of different designs please [read on here](../Configuration/Sensitivity-detection-and-COB.md). This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. More details about the Sensitivity algorithm can be read in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](../Usage/Open-APS-features#autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the Autosens percentage / the line in your graph is displayed for information only.

### Nastavení absorpce sacharidů

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../Usage/COB-calculation.rst) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. V podstatě jde o bezpečnostní pojistku.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS AMA (advanced meal assist, state of the algorithm in 2017)  
    More detail about OpenAPS AMA can be found in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably. 
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users)  
    Note you need to be in [Objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Smyčka

* Switch between Open Loop, Closed Loop and Low Glucose Suspend (LGS).

![Config builder - loop mode](../images/ConfigBuilder_LoopLGS.png)

### Otevřená smyčka

* AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. 
* The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). 
* This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Uzavřená smyčka (Closed Loop)

* AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). 
* The Closed Loop works within numerous safety limits, which you can be set individually.
* Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.
* Please note: In closed loop mode a single target instead of target range (i.e. 5,5 mmol or 100 mg/dl instead of 5,0 - 7,0 mmol or 90 - 125 mg/dl) is recommended.

### Low Glucose Suspend (LGS)

* maxIOB is set to zero
* This means if blood glucose is dropping it can reduce basal for you.
* But if blood glucose is rising no automatic correction will be made. Your basal rates will remain the same as your selected profile.
* Only if basal IOB is negative (from a previous Low Glucose Suspend) additional insulin will be given to lower BG.

### Minimal request change

* When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. 
* To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate.
* This defines the relative change required to trigger a notification.

## Cíle (výukový program)

AndroidAPS has a leraning program (objectives) that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

## Ošetření

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](../Getting-Started/Screenshots#carb-correction).

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
* CGM (opens xDrip+)
* Kalibrace

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### QuickWizard settings

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Default Temp-Targets

Choose default temp-targets (duration and target). Preset values are:

* eating soon: target 72 mg/dl / 4.0 mmol/l, duration 45 min
* activity: target 140 mg/dl / 7.8 mmol/l, duration 90 min
* hypo: target 125 mg/dl / 6.9 mmol/l, duration 45 min

#### Standardní množství inzulinu pro Plnění/Doplňování

Choose the default amounts of the three buttons in fill/prime dialogue, depending on the length of your catheter.

#### Range of visualization

Choose the high and low marks for the BG-graph on AndroidAPS overview and smart watch. It is only the visualization, not the target range for your BG. Example: 70 - 180 mg/dl or 3.9 - 10 mmol/l

#### Krátké názvy modulů

Choose wether the tab titles in AndroidAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### Show notes field in treatment dialogs

Choose if you want to have a notes field when entering treatments or not.

#### Stavové indikátory

Choose if you want to have [status lights](../Configuration/Preferences#status-lights) on overview for canula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Critical age will show up in red.

#### Advanced settings

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percenteage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Akce

* Some buttons to quickly access common features.
* See [AAPS screenshots](../Getting-Started/Screenshots#action-tab) for details.

### Automatizace

User defined automation tasks ('if-then-else'). Please [read on here](../Usage/Automation.rst).

### SMS komunikátor

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Food

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

Chcete-li z hodinek zadávat bolus atd., musíte v „Nastavení wear“ aktivovat volbu „Ovládání z hodinek“.

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### NSClient

* Setup sync of your AndroidAPS data with Nightscout.
* Settings in [preferences](../Configuration/Preferences#nsclient) can be opened by clicking the cog wheel.

### Maintenance

Email and number of logs to be send. Normally no change necessary.

### Konfigurace

Use tab for config builder instead of hamburger menu.