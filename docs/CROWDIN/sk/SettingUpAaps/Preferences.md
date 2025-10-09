# Nastavenia

- **Otvorte nastavenia** kliknutím na trojbodkové menu v pravom hornom rohu domovskej obrazovky.

![Open preferences](../images/Pref2020_Open2.png)

- Na nastavenia pre konkrétnu kartu (napr. kartu pumpy) môžete prejsť priamo otvorením tejto karty a kliknutím na položku Nastavenia doplnkov.

![Open plugin preferences](../images/Pref2020_OpenPlugin2.png)

- **Podponuky** je možné otvoriť kliknutím na trojuholník pod názvom podponuky.

![Open submenu](../images/Pref2020_Submenu2.png)

- Pomocou **filtra** v hornej časti obrazovky s nastaveniami môžete rýchlo získať prístup k určitým nastaveniam. Stačí začať písať časť textu, ktorý hľadáte.

![Preferences filter](../images/Pref2021_Filter.png)

```{contents}
:backlinks: entry
:depth: 2
```

(Preferences-general)=
## Všeobecne

![Preferences > General](../images/Pref2020_General.png)

**Jednotky**

- Nastavte jednotky na mmol/l alebo mg/dl podľa vašej potreby.

**Jazyk**

- Máte aj možnosť použiť predvolený jazyk telefónu (odporúčané).

- Ak chcete **AAPS** v inom jazyku, ako je váš štandardný jazyk telefónu, môžete si vybrať zo širokej ponuky.

- Ak používate rôzne jazyky, niekedy sa môže stať, že sa používajú rôzne kombinácie týchto jazykov. Je to spôsobené problémom s Androidom, kde prepísanie predvoleného jazyka systému Android niekedy nefunguje.
- Nastavenie je skryté v [jednoduchom režime](#preferences-simple-mode).

(preferences-simple-mode)= **Simple mode**

**Jednoduchý režim**je predvolene aktivovaný pri prvej inštalácii **AAPS**. V **jednoduchom režime** je značné množstvo nastavení skryté a nastavenia sú nahradené preddefinovanými hodnotami. [Ďalšie grafy](#AapsScreens-section-g-additional-graphs) na domovskej stránke sú tiež preddefinované. Jednoduchý režim by ste mali vypnúť hneď, ako sa oboznámite s používateľským rozhraním a nastaveniami **AAPS**.

**Meno pacienta**

- Môžete použiť, ak musíte rozlišovať medzi viacerými nastaveniami (napr. dve deti s diabetom 1. typu vo vašej rodine).
- Zobrazuje sa v [dvojitom ciferníku](../WearOS/WearOsSmartwatch.md).

(Preferences-skin)=
### Vzhľad

Nastavenie je skryté v [jednoduchom režime](#preferences-simple-mode).

Môžete si vybrať zo štyroch typov vzhľadov:

![Select skin](../images/Pref2021_SkinWExample.png)

„Vzhľad s nízkym rozlíšením“ má kratšie označenia a odstránený vek/úroveň, aby sa na obrazovke s veľmi nízkym rozlíšením vytvorilo viac miesta.

Rozdiel medzi ostatnými vzhľadmi závisí od orientácie displeja telefónu:

#### Orientácia na výšku

- **Pôvodný vzhľad** a **Tlačidlá zobrazené v dolnej časti obrazovky** sú identické
- **Veľký displej** má v porovnaní s inými vzhľadmi zväčšenú výšku všetkých grafov

#### Orientácia na šírku

- Pri použití **Originálneho vzhľadu** a **Veľkého displeja** musíte posunúť nadol, aby ste videli tlačidlá v dolnej časti obrazovky

- **Veľký displej** má v porovnaní s inými vzhľadmi zväčšenú výšku všetkých grafov

![Vzhľad závisí od orientácie displeja telefónu](../images/Screenshots_Skins.png)

(Preferences-protection)=
## Ochrana

![Nastavenie > Všeobecné – Ochrana](../images/Pref2020_General2.png)

(Preferences-master-password)=
### Hlavné heslo

Povinné pre možnosť [exportovať nastavenia](../Maintenance/ExportImportSettings.md), pretože sú od verzie 2.7 šifrované.

**Biometrická ochrana nemusí na telefónoch OnePlus fungovať. Toto je známy problém na niektorých telefónoch OnePlus.**

![Nastavenie hlavného hesla](../images/MasterPW.png)

### Ochrana nastavení

- Chráňte svoje nastavenia heslom alebo biometrickým overením telefónu (napr. [ak dieťa používa **AAPS**](../RemoteFeatures/RemoteMonitoring.md)). Ak túto funkciu povolíte, budete vyzvaní na overenie vždy, keď budete chcieť získať prístup k akémukoľvek zobrazeniu súvisiacemu s nastaveniami.

- Vlastné heslo by sa malo použiť, ak chcete hlavné heslo používať iba na zabezpečenie [exportovaných nastavení](../Maintenance/ExportImportSettings.md), a iné heslo na úpravu nastavení.

- Ak používate vlastné heslo, kliknite na riadok „Nastavenia hesla“ a nastavte heslo podľa postupu [vyššie](#Preferences-master-password).

![Ochrana](../images/Pref2020_Protection.png)

### Ochrana aplikácie

Ak je aplikácia chránená, musíte na otvorenie aplikácie **AAPS** zadať heslo alebo použiť biometrické overenie telefónu.

**AAPS** sa okamžite vypne, ak zadáte nesprávne heslo, ale bude stále bežať na pozadí, ak bol predtým úspešne spustený.

### Ochrana bolusu

- Ochrana bolusu môže byť užitočná, ak **AAPS** používa malé dieťa a vy [podávate bolus cez SMS](../RemoteFeatures/SMSCommands.md).

- V nasledujúcom príklade vidíte výzvu na biometrickú ochranu. Ak biometrické overenie nefunguje, kliknite do priestoru nad bielym oknom a zadajte hlavné heslo.

![Rýchla biometrická ochrana](../images/Pref2020_PW.png)

### Uchovanie hesla a PIN

Definujte, ako dlho (v sekundách) zostanú nastavenia alebo funkcie bolusu odomknuté po úspešnom zadaní hesla.

## Prehľad

V sekcii **Prehľad** môžete definovať nastavenia pre domovskú obrazovku.

![Nastavenia > Prehľad](../images/Pref2020_OverviewII.png)

### Nechať obrazovku zapnutú

Možnosť „Ponechať obrazovku zapnutú“ prinúti Android, aby obrazovka zostala zapnutá stále. Toto je užitočné pri prezentáciách atď. Ale spotrebuje veľa energie batérie. Preto sa odporúča pripojiť smartfón k nabíjačke.

(Preferences-buttons)=
### Buttons

- Definujte, ktoré tlačidlá sú viditeľné v dolnej časti domovskej obrazovky.
- Nastavenie je skryté v [jednoduchom režime](#preferences-simple-mode).

![Nastavenia > Tlačidlá](../images/Pref2020_OV_Buttons.png)

- Možnosti **Prídavok** vám umožňujú definovať množstvo inzulínu pre tri tlačidlá v oknách sacharidy a inzulín.

![Nastavenia > Tlačidlá > Inzulín](../images/Pref2020_OV_Buttons2.png)

![Nastavenia > Tlačidlá > sacharidy](../images/Pref2020_OV_Buttons3.png)

(Preferences-quick-wizard)=
### Sprievodca rýchlym bolusom

Vytvorte si prispôsobené tlačidlá pre určité jedlá alebo občerstvenie, ktoré sa budú zobrazovať na domovskej obrazovke. Užitočné pre jedlá, ktoré často konzumujete.

Pre každé tlačidlo definujete sacharidy a spôsob výpočtu bolusu. Potom si nastavíte v ktorom časovom úseku sa má tlačidlo zobrazovať na hlavnej obrazovke - v danom čase sa môže zobraziť len jedno. Tlačidlo nebude viditeľné, ak je časový rozsah mimo zadaného rozsahu alebo ak máte dostatok IOB na pokrytie sacharidov definovaných v tlačidle rýhleho bolusu. Ak sú pre rôzne jedlá zadané rôzne časy, na domovskej obrazovke sa vždy zobrazí príslušné tlačidlo jedla v závislosti od dennej doby.

![Nastavenia > Nastavenie tlačidla rýchleho bolusu](../images/Pref2020_OV_QuickWizard.png)

Ak kliknete na tlačidlo rýchleho bolusu, systém **AAPS** vypočíta a navrhne bolus pre tieto sacharidy na základe vašich aktuálnych pomerov (s prihliadnutím na hodnotu glukózy v krvi alebo IOB, ak je nastavený).

Návrh musí byť potvrdený pred podaním inzulínu.

![Nastavenia > Tlačidlo Rýchleho bolusu](../images/Pref2020_OV_QuickWizard2.png)

Súčasne sa môže zobraziť iba jedno tlačidlo rýchleho bolusu. Ak chcete spustiť iný: dlho podržte zobrazené tlačidlo rýchleho bolusu. Presmeruje vás na zoznam všetkých uložených možností rýchleho bolusu. Ak chcete jeden použiť, dlho ho podržte. Pred použitím ho budete musieť potvrdiť.

(Preferences-default-temp-targets)=
### Predvolené dočasné ciele

Toto nastavenie je skryté v [jednoduchom režime](#preferences-simple-mode).

[Dočasné ciele (TT)](../DailyLifeWithAaps/TempTargets.md) vám umožňujú zmeniť cieľovú hodnotu glukózy v krvi na určité časové obdobie. Pri nastavovaní predvoleného TT môžete jednoducho zmeniť cieľ aktivity, pred jedlom atď.

Tu môžete zmeniť cieľ a trvanie pre každý preddefinovaný TT. Prednastavené hodnoty sú:

* Pred jedlom: cieľová hodnota 72 mg/dl / 4,0 mmol/l, trvanie 45 min
* Aktivita: cieľová hodnota 140 mg/dl / 7,8 mmol/l, trvanie 90 min
* Hypoglykémia: cieľová hodnota 125 mg/dl / 6,9 mmol/l, trvanie 45 min

![Nastavenia > Predvolené dočasné ciele](../images/Pref2020_OV_DefaultTT.png)

[Tu](#TempTargets-where-can-i-select-a-temp-target) si môžte pozrieť ako aktivovať dočasné ciele.

### Štandardné množstvo inzulínu pre Plnenie/Doplňovanie

Toto nastavenie je skryté v [jednoduchom režime](#preferences-simple-mode).

Ak chcete naplniť hadičku alebo kanylu cez **AAPS**, môžete to urobiť na karte [**Akcie**](#screens-action-tab).

V tomto okne je možné definovať prednastavené hodnoty. V okne plnenia/dopĺňanie vyberte predvolené hodnoty troch tlačidiel v závislosti od dĺžky vašej kanyly.

(Preferences-range-for-visualization)=
### Rozsah pre zobrazenie

Vyberte si najvyššie a najnižšie hodnoty pre graf glykémie v prehľade **AAPS** a na inteligentných hodinkách. Je to len vizualizácia, nie cieľový rozsah vašej glykémie. Príklad: 70 – 180 mg/dl alebo 3,9 – 10 mmol/l

![Nastavenia > Rozsah pre vizualizáciu](../images/Pref2020_OV_Range2.png)

### Krátke názvy modulov

Toto nastavenie je skryté v [jednoduchom režime](#preferences-simple-mode).

Užitočné na zobrazenie viacerých názvov kariet na obrazovke.

Napríklad karta „OpenAPS AMA“ sa zmení na „OAPS“, „CIELE“ na „OBJ“ ​​atď.

![Nastavenia > Karty](../images/Pref2020_OV_Tabs.png)

(Preferences-show-notes-field-in-treatments-dialogs)=
### Zobrazenie pola na poznámky v oknách ošetrenia

Toto nastavenie je skryté v [jednoduchom režime](#preferences-simple-mode).

Ponúka možnosť pridať k ošetreniam krátke textové poznámky (kalkulačka, sacharidy, inzulín...)

![Nastavenia > Poznámky v oknách ošetrenia](../images/Pref2020_OV_Notes.png)

(Preferences-status-lights)=
### Indikátory stavu

Toto nastavenie je skryté v [jednoduchom režime](#preferences-simple-mode).

Indikátory stavu zobrazujú vizuálne varovanie pre tieto možnosti:

- Vek senzora
- Úroveň nabitia batérie senzora pre niektoré inteligentné čítačky (podrobnosti nájdete na [stránke snímky obrazovky](#screens-sensor-level-battery)).
- Vek inzulínu (dni používania zásobníka)
- Hladina inzulínu v zásobníku (units)
- Vek kanyly
- Vek batérie v pumpe
- Úroveň nabitia batérie pumpy (%)

Ak je prekročená prahová hodnota varovania, hodnoty sa zobrazia žltou farbou. Ak je prekročená kritická hodnota, hodnoty sa zobrazia červenou farbou.

Posledná možnosť vám umožňuje importovať tieto nastavenia z Nightscoutu, ak sú tam definované. Viac informácií nájdete v [dokumentácii k Nightscoutu](https://nightscout.github.io/nightscout/setup_variables/#age-pills).

![Nastavnia > Indikátory stavu](../images/Pref2020_OV_StatusLights2.png)

(Preferences-deliver-this-part-of-bolus-wizard-result)=
### Podaj túto časť z výsledku kalkulácie

Nastavte [predvolené percento](#AapsScreens-section-j) bolusu vypočítaného pri použití bolusovej kalkulačky.

Predvolená hodnota je 100 %: žiadna korekcia. Aj keď tu nastavujete inú hodnotu, stále ju môžete zmeniť pri každom použití bolusovej kalkulačky. Ak je toto nastavenie 75 % a museli ste podať bolus 10 jednotiek, kalkulačka navrhne bolus k jedlu iba 7,5 jednotiek.

Pri používaní systému [SMB](#objectives-objective9) si veľa ľudí nepodáva 100 % potrebného inzulínu v podobe bolusu k jedlu, ale iba jeho časť (napr. 75 %) a zvyšok nechávajú na systém SMB s funkciou UAM (Unattended Meal Detection). Použitie hodnoty nižšej ako 100 % tu môže byť dosť nápomocné:
* Pre ľudí s pomalým trávením: odoslanie celého bolusu naraz môže spôsobiť hypoglykémiu, pretože účinok inzulínu je rýchlejší ako trávenie.
* aby sa **AAPS** mohol sám vysporiadať so **zvýšenou hladinou glukózy v krvi**. V oboch prípadoch systém **AAPS** kompenzuje chýbajúcu časť bolusu pomocou SMB, ak/keď sa to bude považovať za dostatočné.

### Povolenie bolusového poradcu

Toto nastavenie je skryté v [jednoduchom režime](#preferences-simple-mode).

![Bolusový poradca](../images/BolusAdvisor.png)

Keď je táto funkcia povolená a používate bolusového sprievodcu počas hyperglykémie, zobrazí sa vám upozornenie s výzvou, či chcete podať bolus a najesť sa neskôr, keď sa vaša **glykémia** vráti do rozsahu.

### Povolenie pripomenutia bolusu

Toto nastavenie je skryté v [jednoduchom režime](#preferences-simple-mode).

% todo

(Preferences-advanced-settings-overview)=
### Rozšírené nastavenia (prehľad)

![Nastavenia > Rozšírené nastavenia](../images/Pref2021_OV_Adv.png)

#### Superbolus

Toto nastavenie je skryté v [jednoduchom režime](#preferences-simple-mode).

Option to enable superbolus in bolus wizard.

[Superbolus](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/) is a concept to "borrow" some insulin from basal rate in the next two hours to prevent spikes. It is different from *super micro bolus*!

Use with caution and do not enable it until you learn what it really does. V podstate sa k bolusu pridá bazálna dávka na ďalšie dve hodiny a na ďalšie dve hodiny sa vypne bazál. **AAPS looping functions will be disabled - so use with care! If you use SMB **AAPS** looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

## Treatment safety

(preferences-patient-type)=
### Patient type

- Safety limits are set based on the age you select in this setting.
- If you start hitting these hard limits (like max bolus) it's time to move one step up.
- It's a bad idea to select higher than real age because it can lead to overdosing by entering the wrong value in the insulin dialog (by skipping the decimal dot, for example).
- If you want to know the actual numbers for these hard-coded safety limits, scroll to the algorithm feature you are using on [this page](../DailyLifeWithAaps/KeyAapsFeatures.md).

### Max allowed bolus

- Defines the maximum amount of bolus insulin, in insulin units, that **AAPS** is allowed to deliver at once.
- This setting exists as a safety limit to prevent the delivery of a massive bolus due to accidental input or user error.
- It is recommended to set this to a sensible amount that corresponds roughly to the maximum amount of bolus insulin that you are ever likely to need for a meal or correction dose.
- This restriction is also applied to the results of the bolus calculator.

### Max allowed carbs

- Defines the maximum amount of carbs, in grams, that **AAPS** bolus calculator is allowed to dose for.
- This setting exists as a safety limit to prevent the delivery of a massive bolus due to accidental input or user error.
- It is recommended to set this to a sensible amount that corresponds roughly to the maximum amount of carbs that you are ever likely to need for a meal.

## Uzavretý okruh

(Preferences-aps-mode)=
### APS mode
Switch between Open Loop, Closed Loop and Low Glucose Suspend (LGS).

![Config builder - loop mode](../images/ConfigBuilder_LoopLGS.png)

(Preferences-pen-loop)=
#### Open Loop
**AAPS** continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions (temporary basal rates) on how to adjust your therapy if necessary.

The suggestions will not be executed automatically (as in closed loop). The suggestions have to be enacted by the user manually into the pump (if using virtual pump) or by using a button if **AAPS** is connected to a real pump.

This option is for getting to know how **AAPS** works or if you are using an unsupported pump. You will be in Open Loop, no matter what choice you make here, until the end of **[Objective 5](#objectives-objective5)**.

(preferences-closed-loop)=
#### Closed Loop

**AAPS** continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (_i.e._ without further intervention by you) to reach the set [target range or value](#profile-glucose-targets) (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.).

The Closed Loop works within numerous safety limits, which can be set individually.

Closed Loop is only possible if you are in **[Objective 6](#objectives-objective6)** or higher and use a supported pump.

#### Low Glucose Suspend (LGS)

In this mode, [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) is set to zero.

This means that if blood glucose is dropping, **AAPS** can reduce the basal for you. But if blood glucose is rising, no automatic correction will be made. Your basal rates will remain the same as defined in your current **Profile**. Only if IOB is negative (from a previous Low Glucose Suspend) additional insulin will be given to lower **BG**.

(Preferences-minimal-request-change)=
### Minimal request change

When using **Open loop**, you will receive notifications every time **AAPS** recommends adjusting the basal rate. To reduce the number of notifications you can either use a [wider bg target range](#profile-glucose-targets) or increase the percentage of the minimal request rate. This defines the relative change required to trigger a notification.

## Advanced Meal Assist (AMA) or Super Micro Bolus (SMB)

Depending on your settings in [Config builder > APS](../SettingUpAaps/ConfigBuilder.md) you can choose between two algorithms:

- [Advanced meal assist (OpenAPS AMA)](#Open-APS-features-advanced-meal-assist-ama) - state of the algorithm in 2017
- [Super Micro Bolus (OpenAPS SMB)](#Open-APS-features-super-micro-bolus-smb) - most recent algorithm recommended for beginners

As of [**AAPS** version 3.3](#version3300), [Dynamic ISF](../DailyLifeWithAaps/DynamicISF.md) feature has been moved as part of OpenAPS SMB.

### OpenAPS AMA

All the settings for OpenAPS AMA are described in the dedicated section in [Key AAPS Features > Advanced Meal Assist (AMA)](#Open-APS-features-advanced-meal-assist-ama).

(Preferences-openaps-smb-settings)=
### OpenAPS SMB

All the settings for OpenAPS SMB are described in the dedicated section in [Key AAPS Features > Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

## Nastavenie vstrebávania sacharidov

(Preferences-min_5m_carbimpact)=
### min_5m_carbimpact

Nastavenie je skryté v [jednoduchom režime](#preferences-simple-mode).

The algorithm uses BGI (blood glucose impact) to determine when [carbs are absorbed](../DailyLifeWithAaps/CobCalculation.md).

At times when carb absorption can’t be dynamically worked out based on your blood's reactions, **AAPS** inserts a default decay to your carbs. V podstate je to niečo ako poistka. This value is only used during gaps in **CGM** readings or when physical activity “uses up” all the blood glucose rise that would otherwise cause **AAPS** to decay COB.

To put it simply: The algorithm "knows" how your BGs *should* behave when affected by the current dose of insulin etc. Whenever there is a positive deviation from the expected behaviour, some carbs are absorbed/decayed. Big change=many carbs etc.

The min_5m_carbimpact does define the default carb absorption impact per 5 minutes. For more details see [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact).

Standard value for AMA is 5, for SMB it's 8.

The COB graph on the home screen indicates when min_5m_impact is being used by putting an orange circle at the top.

![COB graph](../images/Pref2020_min_5m_carbimpact.png)

### Meal max absorption time

If you often eat high fat or protein meals you will need to increase your meal absorption time.

### Advanced settings - autosens ratio

![Nastavenie vstrebávania sacharidov](../images/Pref2020_Absorption.png)

- Define min. and max. [autosens](#Open-APS-features-autosens) ratio.
- Normally standard values (max. 1.2 and min. 0.7) should not be changed.

## Pumpa

### BT Watchdog

Activate BT watchdog if necessary (e.g. for Dana pumps). It switches off bluetooth for one second if no connection to the pump is possible. This may help on some phones where the bluetooth stack freezes.

## Pump settings

The options here will vary depending on which pump driver you have selected in [Config Builder > Pump](#Config-Builder-pump).  Pair and set your pump up according to the [pump related instructions](../Getting-Started/CompatiblePumps.md).

## Tidepool

More information on the dedicated [Tidepool](../SettingUpAaps/Tidepool.md) page.

(Preferences-nsclient)=
## NSClient

![NSClient](../images/Pref2020_NSClient.png)

Original communication protocol, can be used with older Nightscout versions.

- Set your *Nightscout URL* (i.e. <https://yoursitename.yourplaform.dom>).
- **Make sure that the URL is WITHOUT /api/v1/ at the end.**
- The *[API secret](https://nightscout.github.io/nightscout/setup_variables/#api-secret-nightscout-password)* (a 12 character password recorded in your Nightscout variables).
- This enables data to be read and written between both the Nightscout website and **AAPS**.
- Double check for typos here if you are stuck in Objective 1.

## NSClientV3

![NSClientV3](../images/Pref2024_NSClientV3.png)

[New protocol introduced with AAPS 3.2.](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) Safer and more efficient.

```{admonition} V3 data uploaders
:class: warning

When using NSClientV3, all uploaders must be using the API V3. Since most are not compatible yet, this means **you must let **AAPS** upload all data** (BG, treatments, ...) to Nightscout and disable all other uploaders if they're not V3 compliant.
```

- Set your *Nightscout URL* (i.e. <https://yoursitename.yourplaform.dom>).
- **Make sure that the URL is WITHOUT /api/v1/ at the end.**
- In Nightscout, create an *[Admin token](https://nightscout.github.io/nightscout/security/#create-a-token)* (requires [Nightscout 15](https://nightscout.github.io/update/update/) to use the V3 API) and enter it in the **NS access token** (not your API Secret!).
- This enables data to be read and written between both the Nightscout website and **AAPS**.
- Double check for typos here if you are stuck in Objective 1.
- Leave Connect to websockets enabled (recommended).

### Synchronizácia

Synchronization choices will depend on the way you will want to use **AAPS**.

You can select which data you want to [upload and download to or from Nightscout](#Nightscout-aaps-settings).

### Alarm options

![Alarm options](../images/Pref2024_NSClient_Alarms.png)

- Alarm options allows you to select which Nightscout alarms to use through the app. **AAPS** will alarm when a Nightscout alarm triggers.
- For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [Nightscout variables](https://nightscout.github.io/nightscout/setup_variables/#alarms).
- They will only work whilst you have a connection to Nightscout and are intended for parent/caregivers.
- If you have the **CGM** source on your phone (i.e. xDrip+ or BYODA) then use those alarms instead of Nightscout Alarms.
- Create notifications from Nightscout [announcements](https://nightscout.github.io/nightscout/discover/#announcement) will echo Nightscout announcements in the **AAPS** notifications bar.
- You can change stale data and urgent stale data alarms threshold when no data is received from Nightscout after a certain time.

### Connection settings

![NSClient connection settings](../images/ConfBuild_ConnectionSettings.png)

- Connection settings define when Nightscout connection will be enabled.
- Restrict Nightscout upload to Wi-Fi only or even to certain Wi-Fi SSIDs.
- If you want to use only a specific Wi-Fi network you can enter its Wi-Fi SSID.
- Multiple SSIDs can be separated by semicolon.
- To delete all SSIDs enter a blank space in the field.

(Preferences-advanced-settings-nsclient)=
### Advanced settings (NSClient)

![NS Client advanced settings](../images/Pref2024_NSClientAdv.png)

Options in advanced settings are self-explanatory.

## SMS komunikátor

More information on the dedicated [SMS Commands](../RemoteFeatures/SMSCommands.md) page.

## Automatizácia

Select which location service shall be used:

- Use passive location: **AAPS** only takes locations if other apps are requesting it
- Use network location: Location of your Wi-Fi
- Use GPS location (Attention! May cause excessive battery drain!)

## Local alerts

![Local alerts](../images/Pref2020_LocalAlerts.png)

Settings should be self-explanatory.

(preferences-maintenance-settings)=
## Maintenance settings

![Maintenance settings](../images/Pref2020_Maintenance.png)

**Email recipient**: Standard recipient of logs is <logs@aaps.app>.

**Data Choices**

![Data choices](../images/Pref2020_DataChoice.png)

You can help develop **AAPS** further by sending crash reports to the developers.

**Unattended Settings Export**<br/> By enabling this feature, you allow **AAPS** to execute settings exports without user intervention. For this the master password is securely stored on your phone (only) at the next manually export. The stored password will be used for up to 4 weeks. After 4 weeks you will be notified the password is about to expire. During a grace period of 1 week, the password can then be refreshed by manually exporting settings from the maintenance menu.

After the grace period of 1 week has passed the stored password expires and any automated settings export will abort while notifying the user, asking to reenter the password.  [(**Automated settings exports**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export)  will be logged to the AAPS 'Careportal' and 'User entry' lists under Treatments.

After enabling this option, make sure to perform a manual settings export, where you will be requested for your password, so that **AAPS** can store it.

(preferences-maintenance-logdirectory)= Maintenance settings also include the **AAPS** directory, which can be found directly under the Maintenance tab. This setting allows the user to choose a directory on their phone where **AAPS** will store preferences, logs, and other files.

![Pref2020_Maintenance_Directory.png](../images/Pref2020_Maintenance_Directory.png)

## Open Humans

You can help the community by donating your data to research projects! Details are described on the [Open Humans page](../SupportingAaps/OpenHumans.md).

In Preferences, you can define when data shall be uploaded
- only if connected to Wi-Fi
- only if charging
