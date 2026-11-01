# Nastavenia

V **AAPS** v4 nájdete nastavenia na obrazovke **Nastavenia**. Dostanete sa k nim tromi spôsobmi – podrobnosti nájdete na stránke [Vykonávanie zmien v konfigurácii vášho AAPS](../SettingUpAaps/ChangeAapsConfiguration.md):

1. Ťuknite na ikonu **Nastavenia** (ozubené koliesko) v pravom hornom rohu hlavnej obrazovky: všetky nastavenia, zoskupené do rozbaľovacích sekcií.
2. V **Konfigurácii** ťuknite na „**Nastavenia**“ pod aktívnym pluginom: iba nastavenia tohto pluginu.
3. Použite **vyhľadávací riadok** v hornej časti hlavnej obrazovky: stačí začať písať časť textu, ktorý hľadáte. Nájde jednotlivé nastavenia (aj tie, ktoré na obrazovke Nastavenia nie sú vidieť), dialógy a dokumentáciu.

![Výsledky vyhľadávania pre "target"](../images/preferences/settings_search.png)

- **Sekcie** otvoríte a zatvoríte ťuknutím. Sekcie, ktoré vidíte, závisia od zapnutých pluginov a od [jednoduchého módu](#preferences-simple-mode).

![Obrazovka Nastavenia s rozbaľovacími časťami](../images/v4/Configuration/settings_overview.png)

```{contents}
:backlinks: entry
:depth: 2
```

(Preferences-general)=
## Všeobecne

![Nastavenia > Všeobecné](../images/preferences/settings_general.png)

**Jednotky glykémie**

- Nastavte jednotky mmol/l alebo mg/dl podľa toho, čo používate.

**Jazyk**

- By default **AAPS** follows the language of the phone (recommended).

- If you want **AAPS** in another language than the phone, choose it here. On Android 13 and newer, **AAPS** registers it as its own app language in Android, so all its screens, the main screen, the widgets and the way numbers are written follow it.

- Keď zmeníte jazyk, texty **AAPS** sa hneď prepnú do nového jazyka. Ak sa niektoré texty stále zobrazujú v starom jazyku, reštartujte **AAPS**.
- On Android 12 this setting is not shown: **AAPS** always uses the language of the phone.
- Nastavenie je skryté v [jednoduchom móde](#preferences-simple-mode).

(preferences-simple-mode)= **Jednoduchý mód**

**Jednoduchý mód** je predvolene zapnutý pri prvej inštalácii **AAPS**. V **jednoduchom móde** je veľká časť nastavení skrytá a nahradená preddefinovanými hodnotami. Jednoduchý mód by ste mali vypnúť hneď, ako sa oboznámite s používateľským rozhraním a nastaveniami **AAPS**.

**Podpora koncentrácie inzulínu**

- Zapne podporu rôznych koncentrácií inzulínu (U50, U200, ...). Zapnite to, len ak naozaj používate inú koncentráciu ako U100, a pozorne si prečítajte varovania.
- Nastavenie je skryté v [jednoduchom móde](#preferences-simple-mode).

**Nechať obrazovku zapnutú**

- Android bude obrazovku stále nechávať zapnutú. Toto je užitočné pri prezentáciách atď. Ale spotrebuje veľa energie batérie. Preto sa odporúča pripojiť smartfón k nabíjačke.

**Názov inštancie**

- Meno osoby, ktorá používa tento telefón. Odlíši túto inštanciu **AAPS** v reportoch a pri synchronizácii, napríklad ak vo vašej rodine používajú **AAPS** dve deti s diabetom 1. typu.
- Používa sa v názvoch súborov s exportovanými nastaveniami.
- Zobrazuje sa v [dvojitom ciferníku](../WearOS/WearOsSmartwatch.md).

(Preferences-skin)=
### Skin (téma vzhľadu)

Výber vzhľadu (skin) z **AAPS** 3.x (Original, Low resolution, Large display...) v **AAPS** 4 už neexistuje. Nové rozhranie sa automaticky prispôsobí vašej obrazovke a farebnú schému môžete zmeniť vo [Vzhľade](#preferences-appearance).

(preferences-appearance)=
## Vzhľad

![Nastavenia > Vzhľad](../images/preferences/settings_appearance.png)

(Preferences-range-for-visualization)=
### Rozsah pre zobrazenie

Zvoľte hornú a dolnú hranicu pre graf glykémie na hlavnej obrazovke **AAPS** a na inteligentných hodinkách. Je to len vizualizácia, nie cieľový rozsah vašej glykémie. Príklad: 70–180 mg/dl alebo 3,9–10 mmol/l

(Preferences-show-notes-field-in-treatments-dialogs)=
### Zobraziť poznámky v dialogových oknách

Ponúka možnosť pridať k ošetreniam krátke textové poznámky (kalkulačka, sacharidy, inzulín...)

Nastavenie je skryté v [jednoduchom móde](#preferences-simple-mode).

### Farebná schéma

Vyberte svetlú tému, tmavú tému alebo nastavenie systému telefónu.

(Preferences-protection)=
## Ochrana

![Nastavenia > Ochrana](../images/preferences/settings_protection.png)

(Preferences-master-password)=
### Hlavné heslo

Povinné pre možnosť [exportovať nastavenia](../Maintenance/ExportImportSettings.md), pretože sú od verzie 2.7 šifrované.

**Biometrická ochrana nemusí na telefónoch OnePlus fungovať. Toto je známy problém na niektorých telefónoch OnePlus.**

![Nastavenie hlavného hesla](../images/preferences/master_password_dialog.png)

(Preferences-settings-protection)=
### Ochrana nastavení

- Chráňte svoje nastavenia heslom alebo biometrickým overením telefónu (napr. [ak dieťa používa **AAPS**](../RemoteFeatures/RemoteMonitoring.md)). Ak túto funkciu zapnete, pri každom otvorení akejkoľvek obrazovky s nastaveniami sa od vás bude vyžadovať overenie.

- Obrazovky správy (**Profil**, **Nastavenia inzulínu**, **Dočasný cieľ**, **Rýchly sprievodca**) sa potom otvoria **iba na čítanie**. Položku môžete stále aktivovať alebo použiť, ale pridávanie, úpravy, klonovanie a mazanie sú skryté, kým nastavenia neodomknete. Pozrite si [Ochrana nastavení teraz zamyká aj obrazovky správy](#v4changes-read-only-management).

- Vlastné heslo použite, ak chcete hlavné heslo používať len na zabezpečenie [exportovaných nastavení](../Maintenance/ExportImportSettings.md) a na úpravu nastavení chcete iné heslo.

- Ak používate vlastné heslo, kliknite na riadok „Heslo pre nastavenia“ a nastavte heslo podľa postupu [vyššie](#Preferences-master-password).

### Ochrana aplikácie

Ak je aplikácia chránená, musíte na otvorenie **AAPS** zadať heslo alebo použiť biometrické overenie telefónu, a to znova, keď sa do nej vrátite po uplynutí [časového limitu ochrany](#Preferences-password-and-pin-retention).

**AAPS** sa okamžite vypne, ak zadáte nesprávne heslo, ale bude stále bežať na pozadí, ak bol predtým úspešne spustený.

### Ochrana bolusu

- Ochrana bolusu môže byť užitočná, ak **AAPS** používa malé dieťa a vy [podávate bolus cez SMS](../RemoteFeatures/SMSCommands.md).

- **Ochranu bolusu** môžete vybrať, až keď je nastavená **Ochrana nastavení** (úroveň 2).

- V príklade nižšie používa ochrana bolusu **Hlavné heslo**: **AAPS** si ho vyžiada pred otvorením dialógu ošetrenia, napríklad **Inzulín**. Pri voľbe **Biometria** môžete, ak biometrické overenie nefunguje, zadať namiesto neho hlavné heslo.

![Výzva „Vyžaduje sa autentifikácia“ so žiadosťou o hlavné heslo](../images/preferences/bolus_protection_prompt.png)

(Preferences-password-and-pin-retention)=
### Uchovanie hesla a PIN

**Časový limit ochrany** určuje, ako dlho (v sekundách) zostanú nastavenia alebo funkcie bolusu odomknuté po úspešnom zadaní hesla.

## Bezpečnosť ošetrení

![Nastavenia > Bezpečnosť](../images/preferences/settings_safety.png)

(preferences-patient-type)=
### Vek pacienta

- Bezpečnostné limity sú nastavené na základe veku, ktorý vyberiete v tomto nastavení.
- Ak začnete narážať na tieto pevné limity (ako napríklad maximálny bolus), je čas posunúť sa o krok vyššie.
- Nie je dobrý nápad zadať vyšší vek, ako je skutočný, pretože pri zadaní chybnej hodnoty v dialógu inzulínu (napríklad vynechaním desatinnej čiarky) to môže viesť k predávkovaniu.
- Ak vás zaujímajú aké presné hodnoty majú tieto bezpečnostné limity, prejdite na [stránku](../DailyLifeWithAaps/KeyAapsFeatures.md) k funkcii algoritmu, ktorý používate.

(Preferences-maximum-bolus)=
### Maximálny bolus

- Definuje maximálne množstvo bolusového inzulínu v inzulínových jednotkách, ktoré môže systém **AAPS** podať naraz.
- Toto nastavenie je bezpečnostný limit, ktorý zabráni podaniu príliš veľkého bolusu pri náhodnom zadaní alebo chybe používateľa.
- Odporúča sa ho nastaviť na takú hodnotu, ktorá zhruba zodpovedá maximálnemu bolusu, ktorý budete potrebovať pri jedle alebo korekcii.
- Toto obmedzenie sa vzťahuje aj na výsledky bolusovej kalkulačky.

### Maximálne povolené sacharidy

- Definuje maximálne množstvo sacharidov v gramoch, ktoré môže bolusová kalkulačka **AAPS** použiť pre výpočet.
- Toto nastavenie je bezpečnostný limit, ktorý zabráni podaniu príliš veľkého bolusu pri náhodnom zadaní alebo chybe používateľa.
- Odporúča sa ho nastaviť na takú hodnotu, ktorá zhruba zodpovedá maximálnemu množstvu sacharidov, ktoré prijmete v jednom jedle.

## Zdroj glykémie

Nastavenia vybraného [zdroja glykémie](#Config-Builder-bg-source) sa zobrazujú ako samostatná sekcia. Napríklad pri **xDrip+ glykémia**:

![Nastavenia > xDrip+ glykémia](../images/preferences/settings_xdrip.png)

- **Nahrávať glykémie do NS**: **AAPS** bude prijaté hodnoty glykémie nahrávať do Nightscoutu. Zapnite to, len ak ich už nenahráva samotná aplikácia CGM.
- **Zaznamenať výmenu senzora**: pri zavedení senzora sa automaticky vytvorí udalosť výmeny senzora.

## Hlavná obrazovka

V **AAPS** 3.x boli tieto nastavenia zoskupené v sekcii „Prehľad“ (Overview). V **AAPS** 4 sa nastavujú priamo z prvkov hlavnej obrazovky, ku ktorým patria.

(Preferences-buttons)=
### Tlačidlá Rýchleho spustenia

Určte, ktoré akčné tlačidlá budú na hlavnej obrazovke vidieť: ťuknite na malé **ozubené koliesko** dole v strede hlavnej obrazovky („Konfigurácia Rýchleho spustenia“) a **Pridajte** akcie, ku ktorým chcete mať rýchly prístup (ošetrenia, akcie CGM, záznamy v Starostlivosti...).

![Konfigurácia Rýchleho spustenia](../images/preferences/quicklaunch_config.png)

(Preferences-quick-wizard)=
### Sprievodca rýchlym bolusom

Vytvorte si vlastné tlačidlá pre niektoré bežné jedlá alebo desiaty, ktoré sa zobrazia na hlavnej obrazovke. Užitočné pre jedlá, ktoré často konzumujete.

Pre každé tlačidlo definujete sacharidy a spôsob výpočtu bolusu. Potom určíte, v akom časovom období bude tlačidlo na hlavnej obrazovke vidieť – v jednom období len jedno tlačidlo. Tlačidlo nebude viditeľné mimo zadaného časového rozsahu alebo ak máte dostatok IOB na pokrytie sacharidov definovaných v tlačidle Rýchleho sprievodcu. Ak pre rôzne jedlá zadáte rôzne časy, budete mať na hlavnej obrazovke vždy tlačidlo pre jedlo, ktoré sa hodí k dennej dobe.

Ak chcete spravovať predvoľby Rýchleho sprievodcu, zadajte do vyhľadávacieho riadku na hlavnej obrazovke „Rýchly sprievodca“ a otvorte **Rýchly sprievodca - Spravovať nastavenia rýchleho sprievodcu**.

Ak kliknete na tlačidlo Rýchleho sprievodcu, **AAPS** vypočíta a navrhne bolus pre tieto sacharidy na základe vašich aktuálnych pomerov (s prihliadnutím na glykémiu alebo aktívny inzulín, ak je to nastavené).

Návrh musí byť potvrdený pred podaním inzulínu.

(Preferences-default-temp-targets)=
### Predvolené dočasné ciele

[Dočasné ciele (TT)](../DailyLifeWithAaps/TempTargets.md) vám umožňujú zmeniť cieľovú glykémiu na určité časové obdobie. Pri nastavovaní predvoleného TT môžete jednoducho zmeniť cieľ aktivity, pred jedlom atď.

Ťuknutím na **cieľový rozsah** na hlavnej obrazovke otvoríte obrazovku **Dočasný cieľ**. Prechádzajte kartami predvolieb (Pred jedlom, Aktivita, Hypoglykémia) a v časti **Predvolené nastavenia** zmeňte cieľ a trvanie každej predvoľby. Prednastavené hodnoty sú:

* Pred jedlom: cieľ 90 mg/dl / 5,0 mmol/l, trvanie 45 min
* Aktivita: cieľ 140 mg/dl / 7,8 mmol/l, trvanie 90 min
* Hypoglykémia: cieľ 160 mg/dl / 8,9 mmol/l, trvanie 60 min

![Predvoľby dočasných cieľov](../images/preferences/temp_target_presets.png)

[Tu](#TempTargets-where-can-i-select-a-temp-target) si môžete pozrieť, ako aktivovať dočasné ciele.

### Štandardné množstvá inzulínu pre plnenie/doplňovanie

Ak chcete cez **AAPS** naplniť hadičku alebo kanylu, môžete to urobiť tlačidlami **Plnenie/doplňovanie** v rozbalenom stavovom paneli hlavnej obrazovky.

Predvolené množstvá pre tri tlačidlá plnenia môžete nastaviť v nastaveniach **Plnenie/doplňovanie** podľa dĺžky vášho katétra. Otvoríte ich tak, že do vyhľadávacieho riadku na hlavnej obrazovke zadáte „plnenie“.

![Štandardné množstvá pre plnenie/doplňovanie](../images/preferences/settings_prime_fill.png)

(Preferences-status-lights)=
### Indikátory stavu

Indikátory stavu zobrazujú vizuálne varovanie pre tieto možnosti:

- Vek senzora
- Vek inzulínu (dni používania zásobníka)
- Stav zásobníka (jednotky)
- Vek kanyly
- Vek batérie v pumpe
- Úroveň nabitia batérie pumpy (%)

Ak je prekročená prahová hodnota varovania, hodnoty sa zobrazia žltou farbou. Ak je prekročená kritická hodnota, hodnoty sa zobrazia červenou farbou.

Ak chcete zmeniť prahové hodnoty, rozbaľte stavový panel na hlavnej obrazovke (šípka vpravo v riadku stavu) a ťuknite na malú ikonu **Nastavenia** vedľa „Stav“:

![Indikátory stavu](../images/preferences/status_lights.png)

Ťuknutím na položku (**Kanyla**, **Inzulín**, **Senzor** alebo **Batéria pumpy**) otvoríte jej varovnú a kritickú prahovú hodnotu:

![Prahové hodnoty indikátorov stavu pre kanylu](../images/preferences/status_lights_cannula.png)

Posledná možnosť vám umožňuje importovať tieto nastavenia z Nightscoutu, ak sú tam definované. Viac informácií nájdete v [dokumentácii k Nightscoutu](https://nightscout.github.io/nightscout/setup_variables/#age-pills).

(Preferences-deliver-this-part-of-bolus-wizard-result)=
### Nastavenia bolusovej kalkulačky

Ak chcete otvoriť nastavenia **Bolusovej kalkulačky**, zadajte do vyhľadávacieho riadku na hlavnej obrazovke „bolus“:

![Nastavenia bolusovej kalkulačky](../images/preferences/settings_bolus_wizard.png)

**Percento bolusu** nastavuje [predvolené percento](#AapsScreens-section-j) z bolusu vypočítaného bolusovou kalkulačkou.

Predvolená hodnota je 100 %: žiadna korekcia. Aj keď tu nastavujete inú hodnotu, stále ju môžete zmeniť pri každom použití bolusovej kalkulačky. Ak je toto nastavenie 75 % a museli ste podať bolus 10 jednotiek, kalkulačka navrhne bolus k jedlu iba 7,5 jednotiek.

Pri používaní systému [SMB](#objectives-objective9) si veľa ľudí nepodáva 100 % potrebného inzulínu v podobe bolusu k jedlu, ale iba jeho časť (napr. 75 %) a zvyšok nechávajú na systém SMB s funkciou UAM (Unattended Meal Detection). Použitie hodnoty nižšej ako 100 % tu môže byť dosť nápomocné:
* Pre ľudí s pomalým trávením: odoslanie celého bolusu naraz môže spôsobiť hypoglykémiu, pretože účinok inzulínu je rýchlejší ako trávenie.
* aby sa **AAPS** mohol sám vysporiadať so **vzostupom glykémie**. V oboch prípadoch **AAPS** doplní chýbajúcu časť bolusu pomocou SMB, ak/keď to bude považovať za vhodné.

**Povoliť bolusového poradcu**

Ak je to zapnuté a bolusovú kalkulačku použijete pri hyperglykémii, dostanete varovanie s otázkou, či chcete podať bolus vopred a jesť neskôr, keď sa **glykémia** vráti do rozsahu.

(Preferences-advanced-settings-overview)=
### Superbolus

Možnosť Superbolus z **AAPS** 3.x nie je v **AAPS** 4 dostupná ako nastavenie.

## Okruh

Ako teraz zmeniť režim okruhu, nájdete v časti [Obrazovky AAPS > Hlavná obrazovka > Stav okruhu](#AapsScreens-loop-status).

(Preferences-minimal-request-change)=
### Minimálna zmena v otvorenom okruhu

Pri používaní **Otvoreného okruhu** budete dostávať upozornenia vždy, keď **AAPS** odporučí úpravu bazálnej dávky. Ak chcete znížiť počet upozornení, môžete použiť [širší cieľový rozsah glykémie](#profile-glucose-targets) alebo zvýšiť percento v nastavení „**Minimálna zmena v otvorenom okruhu**“. Tým nastavíte, aká veľká relatívna zmena je potrebná, aby sa zobrazilo upozornenie.

![Nastavenia > Okruh](../images/preferences/settings_loop.png)

## Rozšírený asistent jedla (AMA) alebo Super Micro Bolus (SMB)

Podľa nastavenia v [Konfigurácia > APS](../SettingUpAaps/ConfigBuilder.md) si môžete vybrať z dvoch algoritmov:

- [Advanced meal assist (OpenAPS AMA)](#Open-APS-features-advanced-meal-assist-ama) – stav algoritmu v roku 2017
- [Super micro bolus (OpenAPS SMB)](#Open-APS-features-super-micro-bolus-smb) – najnovší algoritmus odporúčaný pre začiatočníkov

Od [**AAPS** verzie 3.3](#version3300) je funkcia [Dynamická ISF](../DailyLifeWithAaps/DynamicISF.md) súčasťou OpenAPS SMB.

### OpenAPS AMA

Všetky nastavenia pre OpenAPS AMA sú popísané v samostatnej časti [Kľúčové funkcie AAPS > Rozšírený asistent jedla (AMA)](#Open-APS-features-advanced-meal-assist-ama).

(Preferences-openaps-smb-settings)=
### OpenAPS SMB

Všetky nastavenia pre OpenAPS SMB sú popísané v samostatnej časti [Kľúčové funkcie AAPS > Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

Zoznam nastavení, ktoré vidíte, závisí od vášho pokroku v [Cieľoch](../SettingUpAaps/CompletingTheObjectives.md) a od [jednoduchého módu](#preferences-simple-mode). Pri novej inštalácii sa zobrazuje iba **Použiť dynamickú citlivosť**. Po splnení cieľov sekcia vyzerá takto:

![Nastavenia > OpenAPS SMB, prvá časť](../images/preferences/settings_openaps_smb_1.png)

![Nastavenia > OpenAPS SMB, možnosti SMB](../images/preferences/settings_openaps_smb_2.png)

![Nastavenia > OpenAPS SMB, UAM a potrebné sacharidy](../images/preferences/settings_openaps_smb_3.png)

**Rozšírené nastavenia** na konci sekcie obsahujú hodnoty, ktoré bežne nemusíte meniť:

![Nastavenia > OpenAPS SMB > Rozšírené nastavenia](../images/preferences/settings_openaps_smb_advanced.png)

![Nastavenia > OpenAPS SMB > Rozšírené nastavenia, pokračovanie](../images/preferences/settings_openaps_smb_advanced_2.png)

## Nastavenie vstrebávania sacharidov

![Nastavenia > Nastavenie vstrebávania sacharidov](../images/preferences/settings_absorption.png)

(Preferences-min_5m_carbimpact)=
### SMB min 5m dopad sacharidov (min_5m_carbimpact)

Toto nastavenie je skryté v [Jednoduchom móde](#preferences-simple-mode).

Algoritmus používa BGI (vplyv na glykémiu) na určenie, kedy sa [sacharidy vstrebávajú](../DailyLifeWithAaps/CobCalculation.md).

V prípadoch, keď absorpciu sacharidov nie je možné dynamicky vypočítať na základe reakcií vašej glykémie, **AAPS** vloží do vašich sacharidov predvolený rozklad. V podstate je to niečo ako poistka. Táto hodnota sa používa iba počas chýbajúcich údajov **CGM** alebo keď fyzická aktivita „spotrebuje“ všetok nárast glykémie, ktorý by inak spôsobil rozklad COB pomocou **AAPS**.

Jednoducho povedané: Algoritmus „vie“, ako by sa vaše glykémie *mali* správať, keď sú ovplyvnené aktuálnou dávkou inzulínu atď. Vždy keď nastane kladná odchýlka od očakávaného priebehu, časť sacharidov sa považuje za vstrebanú/rozloženú. Veľká zmena = veľa sacharidov atď.

Parameter min_5m_carbimpact definuje predvolený vplyv absorpcie sacharidov za 5 minút. Úplný popis parametra nájdete v [dokumentácii OpenAPS o nastaveniach a bezpečnostných nastaveniach](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact).

Štandardná hodnota pre AMA je 3, pre SMB je to 8.

Graf COB na hlavnej obrazovke ukazuje, kedy sa používa min_5m_carbimpact: na hornom okraji krivky COB sa zobrazia oranžové bodky.

![Graf COB](../images/main/cob_graph_min_5m_carbimpact.png)

### Hraničný čas absorpcie (vstrebávania)

Čas, po ktorom sa každé jedlo považuje za vstrebané; zostávajúce sacharidy sa odrežú. Ak často jedávate jedlá s vysokým obsahom tuku alebo bielkovín, budete musieť nastaviť dlhší čas vstrebávania jedla.

### Rozšírené nastavenia – pomer Autosens

![Rozšírené nastavenia vstrebávania](../images/preferences/settings_absorption_advanced.png)

- Definujte min. a max. pomer [Autosens](#Open-APS-features-autosens).
- Štandardné hodnoty (max. 1,2 a min. 0,7) by sa normálne nemali meniť.

## Pumpa

![Nastavenia > Pumpa](../images/preferences/settings_pump.png)

### Strážny pes BT

V prípade potreby aktivujte BT watchdog (napr. pre pumpy Dana). Ak nie je možné pripojiť sa k pumpe, vypne Bluetooth na jednu sekundu. Môže to pomôcť na niektorých telefónoch, na ktorých Bluetooth zamŕza.

## Nastavenia pumpy

Možnosti sa líšia podľa ovládača pumpy, ktorý ste vybrali v [Konfigurácia > Pumpa](#Config-Builder-pump). Spárujte a nastavte pumpu podľa [pokynov pre vašu pumpu](../Getting-Started/CompatiblePumps.md).

Napríklad pri **Virtuálnej pumpe** sa sekcia volá **Nastavenie virtuálnej pumpy**. Vyberiete **Typ pumpy**, ktorý virtuálna pumpa napodobňuje, a či sa jej stav nahráva do Nightscoutu:

![Nastavenia > Nastavenie virtuálnej pumpy](../images/preferences/settings_virtual_pump.png)

## Tidepool

Viac informácií nájdete na stránke [Tidepool](../SettingUpAaps/Tidepool.md).

(Preferences-nsclient)=
## NSClientV3

![Nastavenia > NSClientV3](../images/preferences/settings_nsclient.png)

Plugin NSClient (v menu konfigurácie sa zobrazuje ako **NSClientV3**) synchronizuje vaše údaje s Nightscoutom. Používa Nightscout API v3.

```{admonition} Data uploaders
:class: warning

Pri používaní NSClientV3 musia všetky nástroje na nahrávanie dát používať Nightscout API v3. If another uploader (for example your CGM app) is not API v3 compliant, **let AAPS upload all data** (BG, treatments, ...) to Nightscout and disable that uploader.
```

- Set your *Nightscout URL* (i.e. <https://yoursitename.yourplatform.dom>).
- **Uistite sa, že adresa URL je BEZ /api/v1/ na konci.**
- V Nightscoute vytvorte *[token s rolou Admin](https://nightscout.github.io/nightscout/security/#create-a-token)* (na použitie V3 API je potrebný [Nightscout 15](https://nightscout.github.io/update/update/)) a zadajte ho do poľa **Nightscout prístupový token** (nie váš API Secret!). V **AAPSClient** môžete namiesto toho naskenovať QR kód hlavného telefónu, čím sa nastaví vlastný token klienta. Klient spárovaný pomocou PIN dostane po spárovaní vlastný token z hlavného telefónu. Pozrite si [Vlastný Nightscout token klienta](#client-master-control-own-token).
- To vám umožní čítanie a zápis údajov medzi webovou stránkou Nightscout a **AAPS**.
- Ak ste sa zasekli pri Cieli 1, prekontrolujte si zadané údaje.
- Nechajte zapnuté „Použiť websockety“ (odporúčané).

(Preferences-nsclient-synchronization)=
### Synchronizácia

![Možnosti synchronizácie](../images/preferences/settings_nsclient_sync.png)

Možnosti synchronizácie budú závisieť od spôsobu, akým chcete používať **AAPS**.

Môžete si vybrať, ktoré údaje chcete [nahrať a stiahnuť do alebo z Nightscoutu](#Nightscout-aaps-settings).

Kým je zapnuté ovládanie z klienta (v jednoduchom móde vždy), tieto nastavenia sú skryté: **AAPS** je vtedy v [režime zvýšeného zabezpečenia](#client-master-control-hardened-mode), neprijíma zmeny urobené priamo v Nightscoute a nahráva všetky svoje údaje.

### Nastavenie alarmov

![Nastavenie alarmov](../images/preferences/settings_nsclient_alarms.png)

- Nastavenie alarmov vám umožňuje vybrať, ktoré alarmy Nightscoutu chcete v aplikácii používať. **AAPS** potom spustí alarm, keď sa spustí alarm Nightscout.
- Aby sa spustili alarmy, musíte nastaviť hodnoty alarmov Urgent High (Veľmi vysoká), High (Vysoká), Low (Nízka) a Urgent Low (Veľmi nízka) v [nastaveniach Nightscoutu](https://nightscout.github.io/nightscout/setup_variables/#alarms).
- Fungujú len vtedy, keď máte pripojenie k Nightscoutu, a sú určené pre rodičov/opatrovateľov.
- Ak máte zdroj **CGM** v telefóne (napr. xDrip alebo BYODA), použite radšej jeho alarmy namiesto alarmov Nightscoutu.
- NS oznámenia zobrazia [oznámenia](https://nightscout.github.io/nightscout/discover/#announcement) z Nightscoutu v upozorneniach **AAPS**.
- Môžete zmeniť prah alarmov zastaraných údajov a urgentných zastaraných údajov, keď sa z Nightscoutu po určitom čase neprijmú žiadne údaje.

### Vzdialené ovládanie

Prepínač „**Povoliť ovládanie klientom**“ už v týchto nastaveniach nie je: nájdete ho hore na obrazovke **Spravovať → Autorizovaní klienti**, kde sa spravujú spárovaní klienti. Pozrite si samostatnú stránku [Ovládanie Master ↔ Client](../RemoteFeatures/ClientMasterControl.md) vrátane [režimu zvýšeného zabezpečenia](#client-master-control-hardened-mode), ktorý tento prepínač zapína.

### Nastavenie pripojenia

![Nastavenie pripojenia NSClient](../images/preferences/settings_nsclient_connection.png)

- Nastavenie pripojenia určuje, kedy bude pripojenie k Nightscoutu povolené.
- Odosielanie do Nightscoutu môžete obmedziť len na Wi-Fi alebo dokonca len na určité siete Wi-Fi (SSID).
- Ak chcete používať iba konkrétnu sieť Wi-Fi, môžete zadať jej SSID.
- Viaceré SSID je možné oddeliť bodkočiarkou.
- Ak chcete odstrániť všetky SSID, zadajte do poľa medzeru.

(Preferences-advanced-settings-nsclient)=
### Advanced settings (NSClientV3)

![Rozšírené nastavenia NSClient](../images/preferences/settings_nsclient_advanced.png)

Možnosti v rozšírených nastaveniach sú samovysvetľujúce.

## SMS komunikátor

Viac informácií nájdete na stránke [SMS príkazy](../RemoteFeatures/SMSCommands.md).

(preferences-wear)=
## Wear

Táto sekcia sa zobrazí, keď je v [Konfigurácia > Komunikácia](#Config-Builder-wear) zapnutý plugin **Wear**. Viac informácií nájdete na stránkach [Nastavenie AAPS na hodinkách s Wear OS](../WearOS/WearOsSmartwatch.md) a [Ovládanie AAPS pomocou inteligentných hodiniek s Wear OS](../RemoteFeatures/RemoteControlWearOS.md).

![Nastavenia > Wear](../images/preferences/settings_wear.png)

- **Ovládanie cez Wear**: povolí posielanie ošetrení a iných akcií z hodiniek. Bez neho hodinky iba zobrazujú údaje: telefón odmietne každý príkaz z hodiniek a ťuknutie na komplikáciu, ktorá by otvorila ovládaciu obrazovku, namiesto toho otvorí na hodinkách menu **AAPS**.

**Nastavenie sprievodcu na hodinkách** určuje, ktoré výpočty sú zahrnuté vo výsledku bolusovej kalkulačky na hodinkách. Na hodinkách zadávate iba sacharidy; tieto prepínače nahrádzajú voľby, ktoré by ste robili v bolusovej kalkulačke v telefóne:

- **Zahrnúť glykémiu v kalkulačke**: pridá korekciu na rozdiel medzi vašou aktuálnou glykémiou a cieľom.
- **Zahrnúť dočasný cieľ v kalkulačke**: pre túto korekciu použije bežiaci dočasný cieľ namiesto cieľa z profilu.
- **Zahrnúť trend v kalkulačke**: zohľadní aktuálny trend glykémie.
- **Zahrnúť COB v kalkulačke**: pridá inzulín na sacharidy, ktoré ešte nie sú vstrebané.
- **Zahrnúť IOB v kalkulačke**: odpočíta inzulín, ktorý je ešte aktívny.

![Nastavenia > Wear > Nastavenie sprievodcu na hodinkách](../images/preferences/settings_wear_wear_wizard.png)

**Nastavenie vlastného ciferníka** obsahuje **Autorizovať vlastné ciferníky**. Súbor vlastného ciferníka môže obsahovať hodnoty pre niektoré nastavenia hodiniek. Keď je tento prepínač zapnutý, načítanie takého ciferníka môže tieto nastavenia na hodinkách zmeniť; keď je vypnutý, ciferník sa načíta, ale nastavenia zostanú bez zmeny:

![Nastavenia > Wear > Nastavenie vlastného ciferníka](../images/preferences/settings_wear_custom_watchface.png)

**Všeobecné nastavenia** obsahujú **Upozorniť na SMB**, aby ste na hodinkách dostali upozornenie pri každom podaní SMB:

![Nastavenia > Wear > Všeobecné nastavenia](../images/preferences/settings_wear_general.png)

## Autotune

Táto sekcia sa zobrazí, keď je v [Konfigurácia > Všeobecné](#Config-Builder-autotune) zapnutý plugin **Autotune**. Nastavenia sú popísané na samostatnej stránke [Autotune](../AdvancedOptions/Autotune.md).

![Nastavenia > Autotune](../images/preferences/settings_autotune.png)

## Automatizácia

![Nastavenia > Automatizácia](../images/preferences/settings_automation.png)

Vyberte, ktorá lokalizačná služba sa má použiť:

- Použiť pasívnu polohu: **AAPS** zaznamenáva polohu iba v prípade, že o ňu požadujú iné aplikácie
- Použiť polohu zo siete: poloha vašej siete Wi-Fi
- Použiť polohu z GPS (Pozor! Môže spôsobiť nadmerné vybitie batérie!)

## Lokálne výstrahy

![Nastavenia > Lokálne výstrahy](../images/preferences/settings_local_alerts.png)

Nastavenia by mali byť samovysvetľujúce.

**Override Do Not Disturb mode** (on by default): the **AAPS** alarms ring even when the phone is silent or in Do Not Disturb. Turn it off if **AAPS** should respect those modes: the alarms do not ring then, and in Do Not Disturb they only vibrate, on the phone and on the watch. Loop suggestions that arrive during Do Not Disturb are shown without a sound.

When an alarm rings, the alarm screen offers **Silence alarm** (the screen stays open, so you can read the message) and **Silence and close**. Swiping the alarm notification away in the notification tray mutes the alarm. When you open **AAPS** later, an alarm you did not answer is shown again.

(preferences-maintenance-settings)=
## Nastavenia údržby

![Nastavenia > Údržba](../images/preferences/settings_maintenance.png)

**Príjemca e-mailu**: Štandardný príjemca logov je <logs@aaps.app>.

**Počet protokolov na odoslanie**: koľko najnovších log súborov sa priloží, keď posielate logy.

**Možnosti dát**

![Možnosti dát](../images/preferences/settings_data_choices.png)

Môžete pomôcť vývojárom **AAPS** zasielaním hlásení o chybách aplikácie.

**Automatický export nastavení**<br/> Povolením tejto funkcie umožníte **AAPS** exportovať nastavenia bez zásahu používateľa. Na tento účel sa hlavné heslo pri ďalšom manuálnom exporte bezpečne uloží (iba) vo vašom telefóne. Uložené heslo bude platné až 4 týždne. Po 4 týždňoch budete upozornení, že platnosť hesla čoskoro vyprší. Počas 1-týždňovej lehoty potom môžete heslo obnoviť manuálnym exportom nastavení z menu Údržba.

Po uplynutí 1-týždňovej lehoty uložené heslo vyprší a každý automatický export nastavení sa preruší. Používateľ dostane upozornenie s výzvou, aby heslo zadal znova. [(**Automatické exporty nastavení**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) sa budú zaznamenávať do zoznamov „Starostlivosť“ a „Záznam používateľa“ v **AAPS** v časti Ošetrenia.

Po povolení tejto možnosti nezabudnite na manuálny export nastavení, kde sa od vás bude vyžadovať heslo, aby ho **AAPS** mohol uložiť.

### Log súbory

AAPS ukladá logy na riešenie problémov.

Túto funkciu nevypínajte: pomôže zistiť príčinu, ak sa niečo pokazí.

Ak potrebujete poslať logy vývojárom, v e-maile presne popíšte problém. Logy je lepšie posielať, až keď vás o to niekto požiada, a to na základe [hlásenia problému na GitHube](https://github.com/nightscout/AndroidAPS/issues).

Logy AAPS nájdete v pamäti telefónu -> Android -> data -> info.nightscout.androidaps -> files.

Práca s logmi (nastavenie logovania, odosielanie a mazanie logov) a správa súborov sú na obrazovke **Údržba**, ktorú otvoríte z **menu** (☰) v ľavom hornom rohu hlavnej obrazovky:

![Obrazovka Údržba](../images/preferences/maintenance_file_management.png)

(preferences-maintenance-logdirectory)=

### Nastavenie lokálneho priečinka AAPS

Obrazovka **Údržba** obsahuje aj **AAPS priečinok**. Toto nastavenie umožňuje používateľovi vybrať si adresár v telefóne, kam bude **AAPS** ukladať nastavenia, protokoly a ďalšie súbory. Keď priečinok vyberiete, jeho cesta (napríklad `Documents/AAPS`) sa zobrazí pod **AAPS priečinok**, takže vždy vidíte, kam sa vaše súbory ukladajú.

Dôrazne odporúčame použiť priečinok priamo v hlavnom adresári pamäte telefónu. Predvolený je AAPS.

![Umiestnenie lokálneho priečinka](../images/preferences/maintenance_settings_directory.png)

Ak vyberiete podpriečinok priečinka AAPS, zobrazí sa chybové hlásenie. Ťuknite na „OK“ a skúste to znova, tentoraz vyberte správny priečinok (o úroveň vyššie). Nevyberajte „DISMISS“, ak presne neviete, čo robíte.

![Umiestnenie lokálneho priečinka](../images/preferences/maintenance_settings_wrongdirectory.png)

Android môže povolenie k priečinku bez upozornenia odobrať, napríklad keď **AAPS** preinštalujete alebo vymažete jeho úložisko. Keď sa to stane, **AAPS** zobrazí trvalé upozornenie **Prístup do priečinka AAPS bol stratený** a lokálny export nastavení prestane fungovať, kým sa sem nevrátite a priečinok znova nevyberiete. Urobte to čo najskôr, inak sa vaše zálohy v telefóne prestanú aktualizovať.

(preferences-maintenance-cloud)=

### Nastavenie cloudového adresára

Nastavenia, logy a údaje CSV môžete exportovať do cloudovej služby.

1. Otvorte **menu** (☰), vyberte **Údržba** a ťuknite na **Cloudový adresár** (v časti **Správa súborov**).

   ![Cloudový adresár v menu Údržba](../images/preferences/maintenance_settings_cloud.png)

2. V okne **Vyberte typ úložiska** vyberte **Disk Google**.

   ![Dialóg Vyberte typ úložiska](../images/preferences/maintenance_cloud_select_storage.png)

3. Otvorí sa prihlasovacia stránka Google. Vyberte účet Google, v ktorom budú uložené vaše zálohy (môžete použiť [samostatný účet Google](../UsefulLinks/DedicatedGoogleAccountForAaps.md)).

   ![Prihlasovacia stránka Google: výber účtu](../images/preferences/maintenance_cloud_google_account.png)

4. Skontrolujte, či je to správny účet, a ťuknite na **Pokračovať** (Continue), aby ste **AAPS** povolili prístup. Ak ste cloudový adresár nastavovali už predtým, stránka uvedie, že **AAPS** už má určitý prístup.

   ![Stránka Google so žiadosťou o povolenie prístupu pre AAPS s tlačidlom Pokračovať (Continue)](../images/preferences/maintenance_cloud_google_access.png)

5. Po návrate do **AAPS** sa v dolnej časti hlavnej obrazovky zobrazí správa **Overenie cloudového úložiska prebehlo úspešne**:

   ![Správa Overenie cloudového úložiska prebehlo úspešne](../images/preferences/maintenance_cloud_auth_success.png)

   V menu **Údržba** má teraz **Cloudový adresár** zelenú bodku a tlačidlá **Cloud** vedľa položiek **Odoslať protokoly**, **Exportovať nastavenia**, **Importovať nastavenia** a **Exportovať používateľské záznamy do Excelu (csv)** sú dostupné.

   ![Menu Údržba s nastaveným cloudovým úložiskom: dostupné tlačidlá Cloud a ikona vymazania pri Cloudovom adresári](../images/preferences/maintenance_settings_cloud_ready.png)

Ak chcete export do cloudu ukončiť, ťuknite na ikonu **✕** (**Vymazať nastavenia**) na konci riadku **Cloudový adresár** v menu **Údržba** (zobrazí sa, keď je cloudová služba nastavená) a potvrďte **Vymazať nastavenia cloudu**. Tým sa prepnete späť na lokálne úložisko a autorizácia sa vymaže.

## Open Humans

Môžete pomôcť komunite zdielaním svojich údajov na výskumné projekty! Podrobnosti sú popísané na [stránke Open Humans](../SupportingAaps/OpenHumans.md).

V **Nastavenia → Open Humans** môžete určiť, kedy sa majú údaje nahrávať
- iba ak ste pripojený k Wi-Fi
- len pri nabíjaní
