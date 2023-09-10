# Konfigurace

V závislosti na vašich nastaveních můžete Konfiguraci otevřít prostřednictvím záložky v horní části obrazovky nebo pomocí nabídky hamburger.

![Otevřít průvodce konfigurací](../images/ConfBuild_Open_AAPS30.png)

Konfigurace (Conf) je záložka, kde si zapínáte nebo vypínáte jednotlivé moduly. The boxes on the left-hand side (A) allow you to select which one to use, the boxes on the right-hand side (C) allow you to view these as a tab (E) in AAPS. I když není pravý box zaškrtnutý, dostanete se k funkci přes hamburger menu (D) v levém horním rohu obrazovky.

Pokud má modul další dodatečná nastavení, dostanete se k nim kliknutím na ozubené kolo (B).

**First configuration:** Since AAPS 2.0 a Setup wizard guides you through the process of setting up AAPS. Stiskněte 3 tečky v pravé horní části obrazovky (F) a vyberte „Průvodce nastavením“.

![Tlačítko konfigurace a ozubené kolo](../images/ConfBuild_ConfigBuilder_AAPS30.png)

(Config-Builder-tab-or-hamburger-menu)=

## Záložka nebo hamburger menu

Pomocí zaškrtávacího políčka pod symbolem oka se můžete rozhodnout, jak chcete otevírat odpovídající sekci programu.

![Záložka nebo hamburger menu](../images/ConfBuild_TabOrHH_AAPS30.png)

(Config-Builder-profile)=

## Profil

* Vyberte bazální profil, který chcete použít. Viz stránka [Profily](../Usage/Profiles.md) pro další informace o nastavení.
* Od AAPS 3.0 je k dispozici pouze lokální profil.

Nicméně i nadále je možné synchronizovat Nightscout profil do lokálního profilu. Za tímto účelem je však důležité naklonovat celý záznam sestávající z několika profilů v Nightscoutu. Podívejte se prosím na níže uvedené pokyny. Zadání změny prostřednictvím webového rozhraní může být užitečné v případě, že se jedná o velmi rozsáhlé změny profilu, např. ruční zkopírování dat z tabulky.

(Config-Builder-local-profile)=

### Místní profil

Místní profil používá bazální profil zapsaný přímo do telefonu. Po jeho vybrání se v AAPS objeví nová záložka, kde si můžete profil upravovat. Ten je pak v případě potřeby načten pumpou. Při přepnutí profilu je uložen do pumpy jako profil 1. Tento profil je doporučen, protože nevyžaduje připojení k internetu.

Vaše místní profily jsou součástí [exportovaného nastavení](../Usage/ExportImportSettings.md). Proto se ujistěte, že máte zálohu bezpečně uloženou.

![Nastavení Místního profilu](../images/LocalProfile_Settings.png)

Tlačítka:

* zelené plus: přidat
* červené X: odstranit
* modrá šipka: kopírovat

Děláte-li v profilu nějaké změny, ujistěte se, že upravujete správný profil. Na záložce profilu nemusí být pokaždé zobrazen aktuální profil. Například když na domovské obrazovce přepnete přes záložku profilu na jiný profil, může pak být aktuální profil odlišný od toho, který je zobrazen v záložce profil, protože mezi nimi není žádné spojení.

#### Klonování přepnutí profilu

Z přepnutí profilu můžete snadno vytvořit nový místní profil. Posun času a procentuální změna budou v takovém případě přeneseny do nového místního profilu.

1. Klikněte na 3 tečky v pravém horním rohu.
2. Vyberte „Ošetření“.
3. Stiskněte symbol hvězdičky pro přístup na stránku přepnutí profilu.
4. Vyberte požadovaný přepínač profilu, a stiskněte „Klonovat“.
5. Nový místní profil můžete upravit na kartě Místní profil (MPRF) nebo prostřednictvím hamburger menu.

![Klonování přepnutí profilu](../images/LocalProfile_ClonePS_AAPS30.png)

(Config-Builder-upload-local-profiles-to-nightscout)=

#### Nahrávání místních profilů do Nighscoutu

Místní profily lze také nahrát do Nightscoutu. Nastavení najdete v [nastavení NSClientu](Preferences-nsclient).

![Nahrávání místního profilu do Nighscoutu](../images/LocalProfile_UploadNS_AASP30.png)

#### Změna profilu v Nightscout editoru profilu

Změny provedené v Nightscout editoru profilu můžete synchronizovat do místního profilu. Nastavení najdete v [nastavení NSClientu](Preferences-nsclient).

Je nezbytné naklonovat všechny aktuální aktivní záznamy v databázi Nightscout, a ne pouze profil s modrou šipkou! Nové databázové záznamy pak obsahují aktuální datum a lze je aktivovat pomocí záložky "místní profil".

![Klonovat databázové záznamy](../images/Nightscout_Profile_Editor.PNG)

### Pomocník s profilem

Pomocník s profilem nabízí dvě funkce:

1. Najít profil pro děti
2. Porovnání dvou profilů nebo přepnutí profilů za účelem naklonování nového profilu

Podrobnosti jsou vysvětleny na stránce nápovědy [pomocník s profilem](../Configuration/profilehelper.md).

(Config-Builder-insulin)=

## Inzulín

![Typ inzulínu](../images/ConfBuild_Insulin_AAPS30.png)

* Vyberte typ inzulínové křivky, kterou používáte.
* Všechny varianty „Rychle působící Oref“, „Ultra rychlý Oref“, „Lyumjev“ a „Volitelný vrchol Oref“ mají exponenciální tvar. Více informací najdete v [dokumentaci k OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* Křivky se liší podle DIA a času max. účinnosti inzulínu.
    
    * FIALOVÁ linka ukazuje, kolik **inzulínu zbývá** poté, co byl aplikován a postupem času se vstřebává.
    * MODRÁ linka ukazuje, **jak aktivní** inzulín je.

### Doba působnosti inzulínu

* Hodnota DIA není u každého člověka stejná. Proto si ji musíte vyzkoušet sami na sobě. 
* Vždy to však musí být alespoň 5 hodin.
* Pro velké množství lidí nemá ultra-rychlý inzulin jako Fiasp po 3–4 hodinách prakticky žádné znatelné účinky, i když fakticky zbývá cca 0,0xx jednotky. Nicméně i toto zbytkové množství může mít vliv například při sportu. Therefore, AAPS uses minimum 5h as DIA.
* Další informace o tom si můžete přečíst v části Inzulinový profil na [ této ](Screenshots-insulin-profile) stránce.

### Rozdíly v typu inzulínu

* Pro „Rychle působící“ a „Ultra rychlý“ a „Lyumjev“ inzulín je DIA jediná proměnná, kterou si můžete upravovat. Doba maximální účinnosti je fixní. 
* „Volitelný vrchol“ umožňuje nastavit obě proměnné – DIA i dobu maximální účinnosti inzulínu. Tato volba je určena pouze pro pokročilé uživatele, kteří znají důsledky nastavených hodnot. 
* Graf [ Křivka inzulínu ](Screenshots-insulin-profile) pomáhá pochopit různé křivky.
* Zaškrtnutím čtverečku vedle názvu si je můžete prohlédnout v záložce. Další možnost jejich zobrazení je přes hamburgerové menu.

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

Vyberte jaký zdroj glykémií používáte. Viz stránka [Zdroj glykémie](BG-Source.md) pro další informace o nastavení.

![Konfigurace zdroje glykémie](../images/ConfBuild_BGSource_AAPS30.png)

* [Sestav si vlastní Dexcom aplikaci (BYODA)](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0).
* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - jsou podporovány pouze verze 4.15.57 a novější
* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)
* [Tomato App](http://tomato.cool/) pro zařízení MiaoMiao
* [Glunovo aplikace](https://infinovo.com/) pro Glunovo CGM systém
* NSClient BG - není doporučeno, protože v tomto případě je uzavřená smyčka závislá na mobilních datech / Wi-Fi. CGM data budou přijímána pouze v případě, jste-li připojeni ke svému Nightscoutu. Je mnohem lepší využít některý z lokálních zdrojů CGM.
* Generovat náhodné hodnoty glykémie (pouze režim Demo)

(Config-Builder-pump)=

## Pumpa

Vyberte, kterou pumpu používáte.

![Konfigurace – výběr pumpy](../images/ConfBuild_Pump_AAPS30.png)

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

Vyberte variantu detekce citlivosti. Další detaily o různých modelech si můžete [přečíst zde](../Configuration/Sensitivity-detection-and-COB.md). Bude prováděna analýza historických dat. Jestliže se zjistí, že na inzulín reagujete citlivěji než obvykle (nebo naopak máte vyšší rezistenci), provedou se úpravy. Další podrobnosti o algoritmu citlivosti si můžete přečíst v [dokumentaci OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

Průběh citlivosti můžete na hlavní stránce zobrazit vybráním políčka Citlivost. Zobrazí se jako bílá čára. Pozn: aby mohla Detekce citlivosti/[ Autosens](Open-APS-features-autosens) automaticky upravovat množství dodávaného inzulínu, musíte mít splněný [cíl 8](Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens). Před dosažením tohoto cíle slouží procentuální údaj Autosens a bílá čára v grafu pouze pro informaci.

(Config-Builder-absorption-settings)=

### Nastavení absorpce sacharidů

Pokud používáte Oref1 s funkcí SMB, musíte změnit **min_5m_carbimpact** na 8. Tato hodnota se používá pouze při výpadcích hodnot odečítaných z CGM nebo v případech, kdy se fyzickou aktivitou vyrovná vzestup glykémie, který by jinak vedl k tomu, že by systém AAPS odbourával COB. V situacích, kdy [absorpci sacharidů](../Usage/COB-calculation.md) nelze počítat dynamicky na základě reakcí vaší glykémie, je použita tato výchozí hodnota absorpce. V podstatě jde o bezpečnostní pojistku.

(Config-Builder-aps)=

## APS

Vyberte požadovaný algoritmus APS pro úpravy léčby. Detaily vybraného algoritmu můžete zobrazit na kartě OpenAPS (OAPS).

* OpenAPS AMA (pokročilý asistent s jídly, stav algoritmu v roce 2017). Zjednodušeně řečeno, výhoda systému je v tom, že zadáte-li sacharidy, dokáže systém po poslání bolusu velmi rychle spustit vysoký dočasný bazál.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, nejnovější algoritmus pro pokročilé uživatele) Poznámka: Abyste mohli OpenAPS SMB používat, musíte plnit [9. cíl](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) a hodnotu min_5m_carbimpact musíte mít nastavenou na 8 v nabídce Konfigurace > Detekce citlivosti > Sensitivita Oref1.

## Smyčka

* Přepínání mezi otevřenou smyčkou, uzavřenou smyčkou a pozastavením při nízké glykémii (LGS).

![Konfigurace – režim smyčky](../images/ConfigBuilder_LoopLGS.png)

(Config-Builder-open-loop)=

### Otevřená smyčka

* AAPS průběžně hodnotí všechny dostupné údaje (IOB, COB, glykémie…) a předkládá návrhy, jak v případě potřeby upravit vaši léčbu. 
* Návrhy nebudou provedeny automaticky (tak jako v uzavřené smyčce), ale mohou být zadány ručně přímo do pumpy nebo tlačítkem z aplikace – pokud používáte podporovanou pumpu (DanaR/RS nebo Accu-check Combo). 
* This option is for getting to know how AAPS works or if you are using an unsupported pump.

(Config-Builder-closed-loop)=

### Uzavřená smyčka (Closed Loop)

* AAPS průběžně vyhodnocuje všechny dostupné údaje (IOB, COB, glykémie…) a podle potřeby automaticky upravuje léčbu (tj. bez dalšího Vašeho zásahu) s cílem dosáhnout nastaveného cílového pásma nebo hodnoty (podání bolusu, dočasné bazální dávky, vypnutí podávání inzulínu, aby se předešlo hypoglykémii atd.). 
* Uzavřená smyčka je zabezpečena velkým množstvím bezpečnostních limitů, které lze nastavit individuálně.
* Uzavřená smyčka je k dispozici pouze v případě, že jste v [6. cíli](Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend) nebo vyšším a používáte podporovanou pumpu.
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

AAPS has a leraning program (objectives) that you have to fulfill step by step. Ty by vás měly bezpečně provést nastavením uzavřené smyčky. Postupným splněním cílů je zajištěno, že přesně porozumíte tomu, jak systém pracuje. Jedině tak můžete svému systému plně důvěřovat.

Měli byste pravidelně [exportovat svá nastavení](../Usage/ExportImportSettings.md) (včetně pokroku v plnění cílů). V případě, že v budoucnosti budete muset svůj smartphone nahradit (nové zařízení, poškození displeje atd.), můžete tato nastavení jednoduše importovat.

See [Objectives](../Usage/Objectives.md) page for more information.

## Ošetření

Pokud se podíváte na záložku Ošetření, můžete vidět ošetření které byly nahrány na Nightscout. Chcete-li upravit nebo odstranit záznam (například když jste snědli méně sacharidů, než jste očekávali), vyberte „Odstranit“ a zadejte novou hodnotu (případně změňte čas) prostřednictvím [tlačítka Sacharidy na hlavní obrazovce](Screenshots-carb-correction).

## Obecné

### Přehled

Zobrazuje aktuální stav smyčky a tlačítka pro přístup k běžným akcím (další podrobnosti viz část [Domácí obrazovka](../Getting-Started/Screenshots.md)). Kliknutím na ozubené kolo se dostanete do nastavení.

#### Nechat obrazovku zapnutou

Tato volba zabrání tomu, aby systém Android vypnul obrazovku. To je vhodné například pro prezentace. Při tomto nastavení ale dochází k velmi rychlému vybíjení baterie. Proto je doporučeno připojit smartphone k napájecímu kabelu.

#### Tlačítka

Určuje, která tlačítka budou zobrazena na domácí obrazovce.

* Ošetření
* Kalkulačka
* Inzulín
* Sacharidy
* CGM (otevře xDrip+)
* Kalibrace

Kromě toho můžete nastavit zkratky pro inzulín a sacharidy a rozhodnout se, zda bude v dialogu pro přidání ošetření i poznámka.

#### Nastavení rychlých bolusů

Vytvořte si tlačítko pro určité standardní jídlo (sacharidy a parametry pro výpočet bolusu), které se zobrazí na domácí obrazovce. Můžete ho použít pro standardní jídlo, které konzumujete pravidelně. U každého jídla (tlačítka) lze definovat i čas, a tak budete mít na domácí obrazovce k dispozici vhodné tlačítko pro dané jídlo odpovídající denní době.

Poznámka: tlačítko nebude viditelné, pokud je aktuální čas mimo interval definovaný v nastavení nebo pokud máte dostatečný IOB k pokrytí sacharidů definovaných kalkulačkou.

![Tlačítko průvodce nastavením](../images/ConfBuild_QuickWizard.png)

#### Výchozí nastavení dočasných cílů

Vyberte výchozí dočasné cíle (doba trvání a cíl). Přednastavené hodnoty jsou:

* blížící se jídlo: cíl 72 mg/dl/4, 0 mmol/l, trvání 45 min
* aktivita: cíl 140 mg/dl/7, 8 mmol/l, trvání 90 min
* hypoglykemie: cíl 125 mg/dl/6, 9 mmol/l, trvání 45 min

#### Standardní množství inzulinu pro Plnění/Doplňování

Nastavte výchozí hodnoty tří tlačítek v dialogovém okně plnění/doplňování v závislosti na délce vaší hadičky.

#### Rozsah pro zobrazení

Choose the high and low marks for the BG-graph on AAPS overview and smart watch. Jde pouze o zobrazení, nikoliv nastavení cílové hodnoty glykémie. Příklad: 70–180 mg/dl nebo 3,9–10 mmol/l

#### Krátké názvy modulů

Choose wether the tab titles in AAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### Zobrazovat kolonku poznámky v dialozích ošetření

Vyberte si, chcete-li mít při zadávání ošetření k dispozici pole poznámka.

#### Stavové indikátory

Vyberte si, chcete-li mít zobrazené [stavové indikátory](Preferences-status-lights) pro přehled o stáří kanyly, inzulínu, baterie a stavu zásobníku nebo baterie. Je-li dosaženo úrovně pro varování, změní se barva stavového indikátoru na žlutou. Kritická hodnota se zobrazí červeně.

#### Pokročilá nastavení

**Podat tuto část z výsledku kalkukace [%]**: Při použití SMB si mnoho lidí neposílá na jídlo 100% dávku inzulínu, ale pouze její část (např. 75 %), a nechá zbytek na SMB ve spolupráci s UAM (detekce neoznámeného jídla). V tomto nastavení si můžete zvolit výchozí hodnotu pro procento, se kterým by měl bolus kalkulátor počítat. Pokud je toto nastavení 75 % a máte dostat bolus 10 U, navrhne bolusový kalkulátor pouze 7,5 jednotky.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](Open-APS-features-max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### Akce

* Tlačítka k běžně používaným úkonům.
* See [AAPS screenshots](Screenshots-action-tab) for details.

### Automatizace

User defined automation tasks ('if-then-else'). Please [read on here](../Usage/Automation.md).

(Config-Builder-sms-communicator)=

### SMS komunikátor

Allows remote caregivers to control some AAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.md) for more setup information.

### Jídlo

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AAPS calculator. (View only)

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

* Setup sync of your AAPS data with Nightscout.
* Settings in [preferences](Preferences-nsclient) can be opened by clicking the cog wheel.

### Údržba

Email and number of logs to be send. Normally no change necessary.

### Konfigurace

Use tab for config builder instead of hamburger menu.